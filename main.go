package main

import (
	"context"
	"fmt"
	"io"
	"math/rand"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/chromedp/chromedp"
	"github.com/evanw/esbuild/pkg/api"
	"github.com/temoto/robotstxt"
	"github.com/yosssi/gohtml"
)

var userAgents = []string{
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
	"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0",
	"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
}

func getRandomUserAgent() string {
	rand.New(rand.NewSource(time.Now().Unix()))
	return userAgents[rand.Intn(len(userAgents))]
}

func getSiteBaseDir(targetURL string) (string, error) {
	parsedURL, err := url.Parse(targetURL)
	if err != nil {
		return "", err
	}

	baseDir := filepath.Join("./saved_sites", parsedURL.Host)
	err = os.MkdirAll(baseDir, os.ModePerm)
	if err != nil {
		return "", err
	}

	return baseDir, nil
}

func isAllowed(targetURL string) bool {
	userAgent := getRandomUserAgent()
	u, err := url.Parse(targetURL)
	if err != nil {
		return false
	}

	resp, err := http.Get(u.Scheme + "://" + u.Host + "/robots.txt")
	if err != nil {
		return true
	}
	defer resp.Body.Close()

	data, err := robotstxt.FromResponse(resp)
	if err != nil {
		return true
	}

	group := data.FindGroup(userAgent)
	return group.Test(targetURL)
}

func fetchPageWithJS(targetURL string) (*goquery.Document, error) {
	userAgent := getRandomUserAgent()

	opts := append(chromedp.DefaultExecAllocatorOptions[:],
		chromedp.Flag("headless", true),
		chromedp.UserAgent(userAgent),
	)

	allocCtx, cancel := chromedp.NewExecAllocator(context.Background(), opts...)
	defer cancel()

	ctx, cancel := context.WithTimeout(allocCtx, 60*time.Second)
	defer cancel()

	browserCtx, cancel := chromedp.NewContext(ctx)
	defer cancel()

	var htmlContent string

	err := chromedp.Run(browserCtx,
		chromedp.Navigate(targetURL),
		chromedp.Sleep(3*time.Second),
		chromedp.WaitVisible("body", chromedp.ByQuery),
		chromedp.OuterHTML("html", &htmlContent),
	)
	if err != nil {
		return nil, fmt.Errorf("error fetching page: %v", err)
	}

	return goquery.NewDocumentFromReader(strings.NewReader(htmlContent))
}

func saveFormattedResource(resourceURL, baseDir string) error {
	resp, err := http.Get(resourceURL)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return err
	}

	parsedURL, _ := url.Parse(resourceURL)
	filePath := filepath.Join(baseDir, parsedURL.Path)

	if strings.HasSuffix(parsedURL.Path, "/") || filepath.Ext(filePath) == "" {
		filePath = filepath.Join(filePath, "index.html")
	}

	err = os.MkdirAll(filepath.Dir(filePath), os.ModePerm)
	if err != nil {
		return err
	}

	ext := filepath.Ext(filePath)
	switch ext {
	case ".html", "":
		return saveHTMLToFile(string(body), filePath)
	case ".css":
		return saveCSSToFile(string(body), filePath)
	case ".js":
		return saveJSToFile(string(body), filePath)
	default:
		return saveToFile(string(body), filePath)
	}
}

func saveHTMLToFile(htmlContent, filePath string) error {
	formattedHTML := gohtml.Format(htmlContent)
	return saveToFile(formattedHTML, filePath)
}

func saveCSSToFile(cssContent, filePath string) error {
	formattedCSS := formatCSS(cssContent)
	return saveToFile(formattedCSS, filePath)
}

func saveJSToFile(jsContent, filePath string) error {
	loader := api.LoaderJS
	if strings.HasSuffix(filePath, ".jsx") || strings.Contains(jsContent, "<") {
		loader = api.LoaderJSX
	}

	result := api.Transform(jsContent, api.TransformOptions{
		Loader:            loader,
		Format:            api.FormatDefault,
		MinifyWhitespace:  false,
		MinifyIdentifiers: false,
		MinifySyntax:      false,
		Target:            api.ESNext,
	})
	if len(result.Errors) > 0 {
		fmt.Printf("Warning: Failed to format JS/JSX (%s), saving as is: %v\n", filePath, result.Errors)
		return saveToFile(jsContent, filePath)
	}

	// Сохраняем форматированный JS-код
	return saveToFile(string(result.Code), filePath)
}

func saveToFile(content, filePath string) error {
	file, err := os.Create(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	_, err = file.WriteString(content)
	return err
}

func formatCSS(input string) string {
	lines := strings.Split(input, ";")
	var formatted strings.Builder
	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if trimmed != "" {
			formatted.WriteString("  " + trimmed + ";\n")
		}
	}
	return formatted.String()
}

func parseAndDownload(targetURL string) error {
	if !isAllowed(targetURL) {
		return fmt.Errorf("access denied by robots.txt")
	}

	baseDir, err := getSiteBaseDir(targetURL)
	if err != nil {
		return fmt.Errorf("failed to create base directory: %v", err)
	}

	doc, err := fetchPageWithJS(targetURL)
	if err != nil {
		return err
	}

	var wg sync.WaitGroup
	jobs := make(chan string, 10)

	for i := 0; i < 5; i++ {
		wg.Add(1)
		go downloadWorker(jobs, baseDir, &wg)
	}

	doc.Find("img, link, script").Each(func(i int, s *goquery.Selection) {
		src, exists := s.Attr("src")
		if !exists {
			src, exists = s.Attr("href")
		}
		if exists {
			fullURL := resolveURL(targetURL, src)
			jobs <- fullURL
		}
	})

	close(jobs)
	wg.Wait()

	htmlPath := filepath.Join(baseDir, "index.html")
	htmlContent, _ := doc.Html()
	return saveHTMLToFile(htmlContent, htmlPath)
}

func downloadWorker(jobs <-chan string, baseDir string, wg *sync.WaitGroup) {
	defer wg.Done()
	for resourceURL := range jobs {
		err := saveFormattedResource(resourceURL, baseDir)
		if err != nil {
			fmt.Printf("Failed to download %s: %v\n", resourceURL, err)
		}
	}
}

func resolveURL(baseURL, relativeURL string) string {
	base, err := url.Parse(baseURL)
	if err != nil {
		return relativeURL
	}
	relative, err := url.Parse(relativeURL)
	if err != nil {
		return relativeURL
	}
	return base.ResolveReference(relative).String()
}

func main() {
	var targetURL string

	fmt.Print("Дай ссылку: ")
	fmt.Fscan(os.Stdin, &targetURL)

	err := parseAndDownload(targetURL)
	if err != nil {
		fmt.Println("Error: ", err)
	}
}
