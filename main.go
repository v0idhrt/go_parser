package main

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"sync"

	"github.com/PuerkitoBio/goquery"
	"github.com/chromedp/chromedp"
	"github.com/evanw/esbuild/pkg/api"
	"github.com/temoto/robotstxt"
	"github.com/yosssi/gohtml"
)

const userAgent = "GoScaperBot"

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
	ctx, cancel := chromedp.NewContext(context.Background())
	defer cancel()

	var htmlContent string
	err := chromedp.Run(ctx,
		chromedp.Navigate(targetURL),
		chromedp.OuterHTML("html", &htmlContent))

	if err != nil {
		return nil, err
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
	result := api.Transform(jsContent, api.TransformOptions{
		Loader:            api.LoaderJS,
		Format:            api.FormatDefault,
		MinifyWhitespace:  false,
		MinifyIdentifiers: false,
		MinifySyntax:      false,
	})
	if len(result.Errors) > 0 {
		return fmt.Errorf("failed to format JS: %v", result.Errors)
	}
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
	targetURL := "https://wfolio.ru/"

	err := parseAndDownload(targetURL)
	if err != nil {
		fmt.Println("Error: ", err)
	}
}
