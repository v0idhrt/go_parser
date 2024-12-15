(function() {
  function Na(aa) {
    var ta = 0;
    return function() {
      return ta < aa.length ? { done: false, value: aa[ta++] } : { done: true };
    };
  }
  function t(aa) {
    var ta = "undefined" != typeof Symbol && Symbol.iterator && aa[Symbol.iterator];
    if (ta) return ta.call(aa);
    if ("number" == typeof aa.length) return { next: Na(aa) };
    throw Error(String(aa) + " is not an iterable or ArrayLike");
  }
  function Ta(aa) {
    for (var ta, cb = []; !(ta = aa.next()).done; ) cb.push(ta.value);
    return cb;
  }
  function Za(aa) {
    return aa instanceof Array ? aa : Ta(t(aa));
  }
  var Wf = "function" == typeof Object.create ? Object.create : function(aa) {
    function ta() {
    }
    ta.prototype = aa;
    return new ta();
  }, Xf;
  if ("function" == typeof Object.setPrototypeOf) Xf = Object.setPrototypeOf;
  else {
    var Vh;
    a: {
      var Wh = { a: true }, Xh = {};
      try {
        Xh.__proto__ = Wh;
        Vh = Xh.a;
        break a;
      } catch (aa) {
      }
      Vh = false;
    }
    Xf = Vh ? function(aa, ta) {
      aa.__proto__ = ta;
      if (aa.__proto__ !== ta) throw new TypeError(aa + " is not extensible");
      return aa;
    } : null;
  }
  var Xm = Xf;
  function Ym(aa, ta) {
    aa.prototype = Wf(ta.prototype);
    aa.prototype.constructor = aa;
    if (Xm) Xm(aa, ta);
    else for (var cb in ta) if ("prototype" != cb) if (Object.defineProperties) {
      var De = Object.getOwnPropertyDescriptor(ta, cb);
      De && Object.defineProperty(aa, cb, De);
    } else aa[cb] = ta[cb];
    aa.Xj = ta.prototype;
  }
  function Zm() {
    for (var aa = Number(this), ta = [], cb = aa; cb < arguments.length; cb++) ta[cb - aa] = arguments[cb];
    return ta;
  }
  try {
    (function() {
      function aa(a, b, c, d) {
        var e = this;
        return E(window, "c.i", function() {
          function f(w) {
            (w = Yf(k, m, "", w)(k, m)) && (P(w.then) ? w.then(g) : g(w));
            return w;
          }
          function g(w) {
            w && (P(w) ? p.push(w) : la(w) && z(function(K) {
              var S = t(K);
              K = S.next().value;
              S = S.next().value;
              P(S) && ("u" === K ? p.push(S) : h(S, K));
            }, Ca(w)));
          }
          function h(w, K, S) {
            e[K] = $m(k, m, S || r, K, w);
          }
          var k = window;
          (!k || isNaN(a) && !a) && Ee();
          var l = an(a, b, c, d), m = bn(l, Fe);
          Yh(m).Oi = l;
          Zh(m, m.O || {});
          var p = [], r = [ta, Yf, cb];
          r.unshift(cn);
          var q = A(T, jb);
          l = O(m);
          m.id || Xa(Z("Invalid Metrika id: " + m.id, true));
          var v = Ed.C("counters", {});
          if (v[l]) return q = {}, Wb(k, l, "dc", (q.key = l, q)), v[l];
          v[l] = e;
          Ed.D("counters", v);
          Ed.sa("counter", e);
          z(function(w) {
            w(k, m);
          }, Zf);
          z(f, Fd);
          f(dn);
          h(en(k, m, p), "destruct", [ta, cb]);
          gc(k, F([k, q, f, 1, "a.i"], $h));
          z(f, da);
          l = {};
          wb(k, (l.counterKey = O(m), l.name = "counter", l.data = ai(m), l));
        })();
      }
      function ta(a, b, c, d) {
        return E(a, "cm." + c, d);
      }
      function cb(a, b, c, d) {
        return function() {
          var e = Ua(arguments);
          e = d.apply(null, Za(e));
          return R(e) ? Ja(a, b) : e;
        };
      }
      function De(a, b) {
        var c = "" + b, d = { id: 1, ca: "0" }, e = fn(c);
        e ? d.id = e : -1 === xb(c, ":") ? (c = Oa(c), d.id = c) : (e = t(c.split(":")), c = e.next().value, e = e.next().value, d.id = Oa(c), d.ca = Ge(e) ? "1" : "0");
        return [Ja(a, d), d];
      }
      function gn(a, b) {
        function c(e) {
          var f = U(d, e.permissionType) && d[e.permissionType];
          if (f) {
            var g = bi(e, b);
            if (Va(function(h) {
              try {
                return false === h(g, b);
              } catch (k) {
                return true;
              }
            }, f)) return false;
          }
          return hn(a, e);
        }
        var d = {};
        return { Mg: function(e, f) {
          Q(e) && P(f) && (U(d, e) || (d[e] = []), d[e].push(f));
        }, checkPermission: function(e) {
          if (!c(e)) {
            e = bi(e, b);
            var f = Error("Permission denied for " + e.permissionType);
            f.cause = e;
            Xa(f);
          }
        }, oa: c };
      }
      function bi(a, b) {
        return { containerId: b, permissionType: a.permissionType, permissionParams: a.permissionParams };
      }
      function hn(a, b) {
        var c = b.permissionType, d = b.permissions, e = b.permissionParams;
        if ("globals" === c || "localStorage" === c || "dataLayer" === c) {
          var f = e.key;
          e = e.operation;
          U(d, c) ? (d = d[c], c = "dataLayer" === c && U(d, "ytm.ks.*") && d["ytm.ks.*"] & e ? true : U(d, f) ? !!(d[f] & e) : false) : c = false;
        } else "url" === c || "referrer" === c ? (f = e.urlComponent, e = e.variableName, U(d, c) ? (c = d[c], c = "queryVars" === f ? U(c, f) && e ? H(e, c[f]) : false : !!c[f]) : c = false) : "log" === c ? (c = e.logLevel, c = U(d, "log") ? c >= d.log : false) : "loadScript" === c || "pixel" === c || "iframe" === c ? (f = e.url, U(d, c) && U(d[c], "allow") ? (c = d[c], c = Va(F([a, f], jn), c.allow)) : c = false) : c = "cookies" === c ? kn(d, e.name, e.operation, e.options) : "readTitle" === c ? U(d, "readTitle") ? d.readTitle : false : false;
        return c;
      }
      function kn(a, b, c, d) {
        if (!U(a, "cookies")) return false;
        var e = a.cookies;
        a = U(e, b) ? e[b] : { access: 0 };
        if (2 === c) return U(e, "ytm.ks.*") || !!(a.access & c);
        if (1 === c) {
          if (!U(e, b) || !d) return false;
          b = a.access;
          e = a.domain;
          var f = a.path, g = a.secure, h = a.Uj, k = !fa(d.expires) || !fa(d["max-age"]);
          if (U(a, "session") && h) {
            if (1 === h) {
              if (k) return false;
            } else if (!k) return false;
          }
          return !(b & c) || U(a, "domain") && e !== d.domain || U(a, "path") && f !== d.path || U(a, "secure") && (1 === g && !d.secure || 2 === g && d.secure) ? false : true;
        }
        return false;
      }
      function jn(a, b, c) {
        b = hc(a, b);
        if (!b.protocol || "https:" !== b.protocol) return false;
        a = hc(a, c);
        return b.host && a.host && (Oc(a.host, "*.") ? ci(b.host, a.host.substring(2)) : b.host === a.host) ? "/" === a.pathname ? true : ci(a.pathname, "/*") ? Oc(b.pathname, a.pathname.substring(
          0,
          a.pathname.length - 2
        )) : a.pathname === b.pathname : false;
      }
      function ci(a, b) {
        return b.length > a.length ? false : a.substring(a.length - b.length) === b;
      }
      function ln(a, b, c) {
        var d = b.triggers, e = b.variables;
        return { dispatchEvent: function(f) {
          var g = N(function(h, k) {
            Va(function(l) {
              return !mn(a, f, l, e);
            }, k.conditions) || z(function(l) {
              H(l, h) || h.push(l);
            }, k.tags);
            return h;
          }, [], d);
          0 === g.length || nn(a, b, f, g, c);
        } };
      }
      function nn(a, b, c, d, e) {
        z(He("t.e", function(f) {
          var g = b.tags[f], h = b.permissions[f];
          if (!g || !h) throw Z("i.conf." + b.containerVersion + "-" + f);
          h = { Y: e, permissions: h };
          "pro" === g.type ? on(a, b, c, g, h) : "pix" === g.type && (f = h.Y, h = h.permissions, g = g.data.pixelUrl, Q(g) && (f.checkPermission({ permissions: h, permissionType: "pixel", permissionParams: { url: g } }), di(a, g, C, C)));
        }), jd(function(f, g) {
          return f - g;
        }, d));
      }
      function on(a, b, c, d, e) {
        var f = d.data;
        b = G(f) ? f : pn(f, b);
        e = qn(e.permissions, e.Y);
        d = N(function(g, h) {
          var k = t(h), l = k.next().value;
          k = k.next().value;
          k = (R(k), k);
          g[l] = kd(a, k);
          return g;
        }, {}, Ca(d.settings || {}));
        rn(a, b, { Y: e, data: d, event: c });
      }
      function pn(a, b) {
        if (!U(
          b,
          "code"
        ) || !G(b.code) || !b.code[a]) throw Z("mp");
        return b.code[a];
      }
      function qn(a, b) {
        return { checkPermission: function(c) {
          c = B({ permissions: a }, c);
          b.checkPermission(c);
        }, oa: function(c) {
          c = B({ permissions: a }, c);
          return b.oa(c);
        } };
      }
      function rn(a, b, c) {
        b = t(b);
        b.next();
        b.next();
        b = Ta(b);
        a = { Y: c.Y, l: a, event: c.event };
        var d = {};
        c = B(c.data, (d.ytmOnFailure = C, d.ytmOnSuccess = C, d));
        d = {};
        c = $f([], (d.undefined = { kind: 0, value: void 0 }, d.require = { kind: 0, value: y(sn, db(Ba)(a)) }, d.data = { kind: 0, value: c }, d));
        Ie(c, [3].concat(Za(b)));
      }
      function Ie(a, b, c, d) {
        b = t(b);
        b.next();
        b = Ta(b);
        a = $f(a, c, d);
        c = a[a.length - 1];
        for (d = 0; d < b.length && c.pc; d += 1) Je(a, b[d]);
      }
      function Je(a, b) {
        if (G(b) && 3 === b[0]) Ie(a, b);
        else if (ei(b)) fi(a, b);
        else if (G(b) && 2 === b[0]) {
          var c = t(b);
          c.next();
          c = c.next().value;
          qa(a, c);
        } else if (G(b) && 7 === b[0]) {
          var d = t(b);
          d.next();
          c = d.next().value;
          var e = d.next().value;
          d = d.next().value;
          qa(a, c) ? Je(a, e) : d && Je(a, d);
        } else if (8 === b[0]) {
          c = t(b);
          c.next();
          var f = c.next().value;
          c = Ta(c);
          d = e = false;
          var g = [], h = [];
          f = qa(a, f);
          for (var k = 0; k < c.length; k += 1) {
            var l = t(c[k]);
            l.next();
            var m = l.next().value;
            l = Ta(l);
            var p = Wa(m);
            d = d || p;
            p || (e = e || qa(a, m) === f);
            e && (g = g.concat(l));
            d && (h = h.concat(l));
          }
          Ie(a, [3].concat(Za(e ? g : h)), {}, { "break": C });
        } else if (G(b) && 4 === b[0]) tn(a, b);
        else if (G(b) && 5 === b[0]) ag(a, "break", "ibs");
        else if (G(b) && 6 === b[0]) ag(a, "continue", "ics");
        else if (G(b) && 15 === b[0]) for (d = t(b), d.next(), h = d.next().value, c = d.next().value, e = d.next().value, d = d.next().value, g = un(a), h && (ei(h) ? fi(g.stack, h) : qa(g.stack, h)), h = true; h && (!c || qa(g.stack, c)); ) h = g.gh, Je(g.stack, d), g.md && (h.pc = true, g.md = false), h = h.pc, e && h && qa(g.stack, e);
      }
      function un(a, b) {
        var c = { md: false }, d = $f(a, b, { "continue": function() {
          c.md = true;
        }, "break": C });
        c.stack = d;
        c.gh = d[d.length - 1];
        return c;
      }
      function tn(a, b) {
        var c = t(b);
        c.next();
        var d = c.next().value;
        ag(a, "return", "irs", function() {
          return R(d) ? d : qa(a, d);
        });
      }
      function fi(a, b) {
        var c = t(b), d = c.next().value;
        c = Ta(c);
        var e = 18 === d;
        z(
          function(f) {
            var g = t(f), h = g.next().value;
            g = g.next().value;
            if (e && 1 === f.length) throw Z("mca");
            f = a[a.length - 1].Oe;
            if (U(f, h)) throw Z("vr");
            g = R(g) ? g : qa(a, g);
            f[h] = { kind: e ? 0 : 1, value: g };
          },
          c
        );
      }
      function ei(a) {
        return G(a) && (18 === a[0] || 19 === a[0]);
      }
      function qa(a, b) {
        if (Q(b) || "[object Number]" === Object.prototype.toString.call(b) || !!b === b || gi(b)) return gi(b) ? null : b;
        if (hi(b)) {
          var c = t(b);
          c.next();
          c = c.next().value;
          c = ii(a, c);
          if (!c) throw Z("vnd");
          return c.value;
        }
        if (G(b) && 37 === b[0]) {
          var d = t(b);
          d.next();
          c = d.next().value;
          d = Ta(d);
          c = qa(a, c);
          if (!P(c)) throw Z("tenf");
          d = A(x(a, qa), d);
          return c.apply(null, d);
        }
        if (G(b) && 24 === b[0]) return vn(a, b);
        if (ji(b)) {
          d = t(b);
          d.next();
          c = d.next().value;
          d = d.next().value;
          c = qa(
            a,
            c
          );
          d = qa(a, d);
          if (!c) throw Z("noma");
          return c["" + d];
        }
        if (G(b) && 23 === b[0]) return wn(a, b);
        if (G(b) && 22 === b[0]) return xn(a, b);
        if (G(b) && 29 === b[0]) return yn(a, b);
        if (G(b) && 25 === b[0]) return zn(a, b);
        if (G(b) && 27 === b[0]) {
          d = t(b);
          d.next();
          var e = d.next().value;
          c = d.next().value;
          d = d.next().value;
          switch (e) {
            case "++":
              e = "+=";
              break;
            case "--":
              e = "-=";
              break;
            default:
              throw Z("uo");
          }
          c ? c = bg(a, d, 1, e) : (c = qa(a, d), bg(a, d, 1, e));
          return c;
        }
        if (G(b) && 31 === b[0]) return e = t(b), e.next(), c = e.next().value, d = e.next().value, e = e.next().value, e = qa(
          a,
          e
        ), bg(a, d, e, c);
        if (G(b) && 33 === b[0]) {
          c = t(b);
          c.next();
          d = c.next().value;
          e = c.next().value;
          c = c.next().value;
          if ("&&" === d) c = (d = qa(a, e)) ? qa(a, c) : d;
          else if ("||" === d) c = (d = qa(a, e)) ? d : qa(a, c);
          else throw Z("uo");
          return c;
        }
        if (G(b) && 36 === b[0]) return e = t(b), e.next(), d = e.next().value, c = e.next().value, e = e.next().value, d = qa(a, d), qa(a, d ? c : e);
      }
      function bg(a, b, c, d) {
        b = ki(a, b);
        a = b.rj;
        var e = b.Ni;
        e.unshift("value");
        b = e.pop();
        a = N(function(f, g) {
          return f[g];
        }, a, e);
        switch (d) {
          case "=":
            return a[b] = c;
          case "+=":
            return a[b] += c;
          case "-=":
            return a[b] -= c;
          case "*=":
            return a[b] *= c;
          case "/=":
            return a[b] /= c;
          case "%=":
            return a[b] %= c;
          case "<<=":
            return a[b] <<= c;
          case ">>=":
            return a[b] >>= c;
          case ">>>=":
            return a[b] >>>= c;
          case "|=":
            return a[b] |= c;
          case "^=":
            return a[b] ^= c;
          case "&=":
            return a[b] &= c;
          default:
            throw Z("uo");
        }
      }
      function ki(a, b, c) {
        c = void 0 === c ? [] : c;
        if (hi(b)) {
          b = t(b);
          b.next();
          b = b.next().value;
          a = ii(a, b);
          if (!a) throw Z("vnd");
          if (0 === a.kind && 0 === c.length) throw Z("cva");
          return { Ni: c, rj: a };
        }
        if (ji(b)) {
          var d = t(b);
          d.next();
          b = d.next().value;
          d = d.next().value;
          d = qa(
            a,
            d
          );
          c.push("" + d);
          return ki(a, b, c);
        }
        throw Z("iat");
      }
      function zn(a, b) {
        var c = t(b);
        c.next();
        var d = c.next().value;
        c = c.next().value;
        c = qa(a, c);
        switch (d) {
          case "+":
            return +c;
          case "!":
            return !c;
          case "-":
            return -c;
          case "~":
            return ~c;
          default:
            throw Z("uo");
        }
      }
      function yn(a, b) {
        var c = t(b);
        c.next();
        var d = c.next().value, e = c.next().value;
        c = c.next().value;
        e = qa(a, e);
        c = qa(a, c);
        switch (d) {
          case "==":
            return e == c;
          case "!=":
            return e != c;
          case "===":
            return e === c;
          case "!==":
            return e !== c;
          case "<":
            return e < c;
          case "<=":
            return e <= c;
          case ">":
            return e > c;
          case ">=":
            return e >= c;
          case "<<":
            return e << c;
          case ">>":
            return e >> c;
          case ">>>":
            return e >>> c;
          case "+":
            return e + c;
          case "-":
            return e - c;
          case "*":
            return e * c;
          case "/":
            return e / c;
          case "%":
            return e % c;
          case "|":
            return e | c;
          case "^":
            return e ^ c;
          case "&":
            return e & c;
          case "in":
            return e in c;
          case "instanceof":
            return e instanceof c;
          default:
            throw Z("uo");
        }
      }
      function xn(a, b) {
        var c = t(b);
        c.next();
        c = Ta(c);
        return A(function(d) {
          return qa(a, d);
        }, c);
      }
      function hi(a) {
        return G(a) && 40 === a[0];
      }
      function wn(a, b) {
        var c = t(b);
        c.next();
        c = Ta(c);
        return N(function(d, e) {
          var f = t(e), g = f.next().value;
          f = f.next().value;
          g = qa(a, g);
          f = qa(a, f);
          d["" + g] = f;
          return d;
        }, {}, c);
      }
      function ji(a) {
        return G(a) && 35 === a[0];
      }
      function gi(a) {
        return G(a) && 42 === a[0];
      }
      function vn(a, b) {
        var c = t(b);
        c.next();
        var d = c.next().value, e = c.next().value, f = c.next().value, g = A(T, a);
        return function() {
          var h = arguments, k = N(function(m, p, r) {
            if (m[p]) throw Z("da");
            m[p] = { kind: 1, value: h[r] };
            return m;
          }, {}, e);
          d && !H(d, e) && (k[d] = { kind: 0, value: d });
          var l;
          Ie(g, f, k, { "return": function(m) {
            l = m;
          } });
          return l;
        };
      }
      function ag(a, b, c, d) {
        for (var e = a.length - 1; 0 <= e; --e) {
          var f = a[e];
          f.pc = false;
          if (U(f.methods, b)) {
            f.methods[b](d ? d() : void 0);
            return;
          }
        }
        throw Z(c);
      }
      function $f(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? {} : c;
        var d = a.concat;
        b = void 0 === b ? {} : b;
        c = void 0 === c ? {} : c;
        return d.call(a, { Oe: b, methods: c, pc: true });
      }
      function ii(a, b) {
        for (var c = a.length; 0 < c; ) {
          var d = a[--c];
          if (U(d.Oe, b)) return d.Oe[b];
        }
      }
      function sn(a) {
        return U(li, a) ? li[a] : void 0;
      }
      function cg(a, b, c) {
        if (!c) return false;
        var d = "iframe";
        "load_script" === b ? d = "loadScript" : "send_pixel" === b && (d = "pixel");
        return a.oa({ permissionType: d, permissionParams: { url: c } });
      }
      function mi(a, b, c, d) {
        b = "access_local_storage" === b ? "localStorage" : "globals";
        if (!c || !Q(c) || !Q(d)) return false;
        switch (c) {
          case "read":
            c = 2;
            break;
          case "write":
            c = 1;
            break;
          case "execute":
            c = 4;
            break;
          default:
            return false;
        }
        return a.oa({ permissionType: b, permissionParams: { key: d, operation: c } });
      }
      function ni(a, b, c, d) {
        if (!c) return false;
        var e = (b = "set_cookies" === b) ? 1 : 2;
        return b && !la(d) ? false : a.oa({ permissionType: "cookies", permissionParams: { name: c, operation: e, options: d } });
      }
      function di(a, b, c, d) {
        var e = pb(a)("img");
        e.src = b;
        b = x(e, xc);
        var f = x(void 0, T);
        e.onerror = y(b, f, d);
        e.onload = y(b, f, c);
        ld(a) && (a = ic(a), B(e.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), a.appendChild(e));
      }
      function Ke(a, b) {
        var c = b.split("."), d = c.pop();
        c = c.length ? n(a, J(".", c)) : a;
        if (!c) throw Z("noma");
        return { value: n(c, d), parent: c, Oc: d };
      }
      function md(a) {
        if (!Q(a)) throw Z("gppns");
        if (H(a.split(".")[0], An)) throw Z("rwp");
      }
      function kd(a, b) {
        if (fa(b) || !!b === b || Mb(a, b) || Q(b)) return b;
        if (la(b)) return N(function(c, d) {
          var e = t(d), f = e.next().value;
          e = e.next().value;
          c[f] = kd(a, e);
          return c;
        }, {}, Ca(b));
        if (G(b)) return A(x(a, kd), b);
      }
      function Bn(a, b) {
        if ("eq" === b) return Cn;
        if ("more" === b) return x(a, Dn);
        if ("less" === b) return x(a, En);
        if ("regex" === b) return Fn;
        if ("inc" === b) return Gn;
      }
      function oi(a, b, c) {
        var d = b.key;
        b = b.defaultValue;
        c && c.Y.checkPermission({ permissions: c.permissions, permissionType: "dataLayer", permissionParams: { key: d, operation: 2 } });
        a = n(a, d);
        return R(a) ? b : a;
      }
      function Gn(a, b) {
        return G(a) ? H(b, a) : Q(a) ? kb(a, "" + b) : false;
      }
      function Fn(a, b) {
        if (!Q(a) || !Q(b)) return false;
        try {
          return new RegExp(b).test(a);
        } catch (c) {
          return false;
        }
      }
      function En(a, b, c) {
        return Le(a, b) && Le(a, c) ? b < c : false;
      }
      function Dn(a, b, c) {
        return Le(a, b) && Le(a, c) ? b > c : false;
      }
      function Cn(a, b) {
        return a === b;
      }
      function Hn(a) {
        In(a, function(b, c) {
          nd(a, "ytm." + b, c);
        });
      }
      function He(a, b, c) {
        return function() {
          try {
            return b.apply(null, arguments);
          } catch (d) {
            pi(a, d);
          }
          return c;
        };
      }
      function Jn(a, b, c, d) {
        d = void 0 === d ? "dataLayer" : d;
        var e = [], f = [];
        z(
          function(g) {
            if (H(g, Kn)) {
              var h = Ln(a, g, b);
              h && e.push(h);
              H(g, Mn) && f.push(g);
            } else f.push(g);
          },
          jd(function(g, h) {
            var k = Pc(a)(g, qi), l = Pc(a)(h, qi);
            return -1 === k ? 1 : -1 === l ? -1 : k - l;
          }, c)
        );
        c = n(a, d);
        c || (c = [], a[d] = c);
        Gd(a, c, function(g) {
          g.qa.F(function(h) {
            var k = n(h, "event");
            Q(k) && H(k, f) && b(h);
          });
          e.push(g.unsubscribe);
        });
        return function() {
          return z(Ba, e);
        };
      }
      function Ln(a, b, c) {
        if ("ytm.linkClick" === b) return Nn(a, c);
        if ("ytm.js" === b) return ri(a, c, "ytm.js");
        if ("ytm.dom" === b) return ri(a, c, "ytm.dom");
        if ("ytm.load" === b) return "complete" === a.document.readyState ? (c(Hd(a, "ytm.load")), a = C) : a = Me(a, c, "ytm.load", ["load"], a), a;
        if ("ytm.click" === b) return Me(a, c, "ytm.click", ["click"]);
        if ("ytm.formSubmit" === b) return Me(a, c, "ytm.formSubmit", ["submit"], a);
      }
      function ri(a, b, c) {
        return H(a.document.readyState, ["complete", "interactive"]) ? (b(Hd(a, c)), C) : Me(a, b, c, ["DOMContentLoaded"]);
      }
      function Me(a, b, c, d, e) {
        e = void 0 === e ? a.document : e;
        return na(a).F(e, d, function(f) {
          b(Hd(a, c, f.target));
        });
      }
      function Nn(a, b) {
        return na(a).F(a.document, ["click"], function(c) {
          "A" === c.target.nodeName && b(Hd(a, "ytm.linkClick", c.target));
        });
      }
      function Hd(a, b, c) {
        if (On.includes(b) && c) {
          a = Id(c.classList);
          var d = c.innerText, e = c.getAttribute("id");
          var f = c.getAttribute("formAction") || c.getAttribute("action") || c.getAttribute("href") || c.getAttribute("src") || c.getAttribute("code") || c.getAttribute("codebase") || "";
          c = { element: c, elementClasses: a, elementText: d, elementId: e, elementUrl: f, Hj: c.getAttribute("formTarget") || c.getAttribute("target") || "" };
          return { event: b, ytm: c };
        }
        return "ytm.init" === b ? { event: b, ytm: { timestamp: ma(a)(ea) } } : { event: b, ytm: {} };
      }
      function si(a) {
        var b = t(a), c = b.next().value;
        b = b.next().value;
        return "bp" === c ? ["p", ti(dg(b))] : a;
      }
      function ui(a) {
        return { Mi: Xb(a.element), yd: a.yd };
      }
      function Pn(a) {
        if (!a) return "";
        a = a.match(Qn);
        if (!a || 0 === a.length) return "";
        var b = Rn();
        return "//HTML/BODY/" + N(function(c, d) {
          var e = d[0], f = Oa(d.slice(1));
          return "/" + b[e] + (f ? "[" + (f + 1) + "]" : "") + c;
        }, "", a);
      }
      function Sn(a, b) {
        var c = b.patterns;
        return 0 === c.length ? false : Va(x(a, vi), c);
      }
      function Tn(a, b) {
        var c = b.patterns;
        if (0 === c.length) return false;
        if (1 === c.length) return vi(a, c[0]);
        c = N(function(f, g) {
          var h = t(g), k = h.next().value;
          h = h.next().value;
          var l = a[k];
          if (l === h) {
            if (f.xd += 1, "i" === k || "c" === k) f.Bf = true;
          } else l && "p" === k && wi(l) === wi(h) && (f.Cf = true);
          return f;
        }, { xd: 0, Bf: false, Cf: false }, c);
        var d = c.Bf, e = c.Cf;
        return 2 <= c.xd || d && e;
      }
      function vi(a, b) {
        var c = a[b[0]];
        return !(!c || c !== b[1]);
      }
      function Un(a) {
        z(function(b) {
          var c = b.event;
          b = b.data;
          var d = x(c, Vn);
          "bidTimeout" === c ? z(d, b) : d(b);
        }, a);
      }
      function Vn(a, b) {
        if (H(a, Wn)) if ("pbjsInit" === a) xi = b.version;
        else {
          var c = n(b, "auctionId") || n(b, "bid.auctionId") || void 0;
          if (c) {
            yc[c] || (yc[c] = { Mc: {} });
            c = yc[c];
            var d = "auctionInit" === a, e = "auctionEnd" === a, f = "adRenderFailed" === a || "adRenderSucceeded" === a;
            f || c.Wc && !d || (c.Wc = n(b, "auctionStart") || void 0, !c.Wc && d && (c.Wc = b.timestamp));
            var g = F([a, c], Xn);
            "bidRequested" === a ? z(g, b.bids) : f ? Yn(a, c, b) : e ? (c.Ze = b.auctionEnd || b.timestamp, c.Ri = oa(function(h, k, l) {
              return Ne(h, l) === k;
            }, A(ba("bidderCode"), b.bidderRequests))) : d || g(b);
            c.Ze && (c.ba = true);
          }
        }
      }
      function Yn(a, b, c) {
        var d = c.bid, e = d.bidderCode || d.bidder;
        d = d.adUnitCode;
        e && d && (b = yi(b, d), b.Pb || (b.Pb = {}), a = "adRenderSucceeded" === a, d = {}, b.Pb[e] = (d.success = a, d), a || (b.Pb[e].reason = c.reason, b.Pb[e].message = c.message));
      }
      function Xn(a, b, c) {
        var d = c.adUnitCode, e = c.bidderCode || c.bidder;
        if (e && d) {
          var f = yi(b, d);
          !f.ae && c.mediaTypes && (f.ae = {}, z(function(g) {
            var h = t(g);
            g = h.next().value;
            h = h.next().value;
            var k;
            G(h) ? k = h : h.sizes ? k = h.sizes : h.playerSize && (k = h.playerSize);
            k && (f.ae[g] = k);
          }, Ca(c.mediaTypes)));
          "bidTimeout" === a ? (f.timeout || (f.timeout = {}), f.timeout[e] = true) : (f.Fb[a] || (f.Fb[a] = {}), f.Fb[a][e] = N(function(g, h) {
            fa(c[h]) || (g[h] = zi[h] ? zi[h](c[h]) : c[h]);
            return g;
          }, {}, Zn), b = n(c, "meta.advertiserDomains"), G(b) && (f.Fb[a][e].advertiserDomains = b));
        }
      }
      function yi(a, b) {
        a.Mc[b] || (a.Mc[b] = { Fb: {} });
        return a.Mc[b];
      }
      function $n(a, b) {
        z(function(c) {
          yc[c].ba && ao(a, b, c);
        }, ka(yc));
      }
      function ao(a, b, c) {
        var d = yc[c];
        d.ba = false;
        d.Oa && ra(a, d.Oa);
        d.Oa = Y(a, function() {
          var e = bo(c), f = {}, g = {};
          b((g.__ym = (f.pbjsv = xi, f.pbjs = e, f), g));
          delete yc[c];
        }, 2e3);
      }
      function bo(a) {
        var b = yc[a], c = b.Wc, d = b.Ze, e = b.Ri;
        return A(function(f) {
          var g = t(f);
          f = g.next().value;
          g = g.next().value;
          var h = g.ae, k = g.timeout, l = g.Fb, m = {};
          return B((m.renderState = g.Pb, m.mediaTypes = h, m.auctionId = a, m.adUnitCode = f, m.startStamp = c, m.endStamp = d, m.requestedBidders = e, m.bidTimeout = k, m), l);
        }, Ca(b.Mc));
      }
      function co(a) {
        var b = n(a, "featurePolicy");
        return b ? "browsingTopics" in a && b.allowsFeature("browsing-topics") : false;
      }
      function eo(a, b, c, d) {
        var e = n(d, "data");
        if (Q(e)) {
          var f = t(e.split("*"));
          e = f.next().value;
          var g = f.next().value;
          f = f.next().value;
          "sc.topics-response" === e ? (g && ("1" === g && f ? (a = jc(a, f), G(a) && b.D("cta", a)) : b.D("cta.e", g)), c()) : "sc.frame" === e && d.source && d.source.postMessage(
            "sc.topics",
            "*"
          );
        }
      }
      function fo(a, b) {
        if ("https://oauth.yandex.ru" === n(b, "origin") && n(b, "source.window") && "_ym_uid_request" === n(b.data, "_ym")) {
          var c = b.source, d = {};
          d = (d._ym_uid = a, d);
          c.postMessage(d, "https://oauth.yandex.ru");
        }
      }
      function Ai(a, b) {
        b = void 0 === b ? true : b;
        var c = zc("canvas", a.document);
        if (c && (c = od(c))) {
          var d = t(Oe(a) || pd(a)), e = d.next().value;
          d = d.next().value;
          if (0.3 <= Bi(a, c, { h: d, w: e }) / (d * e)) {
            L(a).D("hc", 1);
            return;
          }
        }
        b && Y(a, F([a, false], Ai), 3e3);
      }
      function Ci(a) {
        return { R: function(b, c) {
          go(a).then(function(d) {
            b.H || (b.H = {});
            b.H.uah = d;
            c();
          }, c);
        } };
      }
      function ho(a) {
        var b = N(function(c, d) {
          var e = t(d), f = e.next().value;
          e = e.next().value;
          (f = io(a[f])) && c.push("" + e + "\n" + f);
          return c;
        }, [], Ca(jo));
        return J("\n", b);
      }
      function ko(a) {
        return "che\n" + a;
      }
      function io(a) {
        return Q(a) ? a : G(a) ? J(",", A(function(b) {
          return '"' + b.brand + '";v="' + b.version + '"';
        }, a)) : fa(a) ? "" : a ? "?1" : "?0";
      }
      function eg(a) {
        var b = lo(a);
        return { R: function(c, d) {
          c.ha || (c.ha = {});
          c.ha.wf = b(Di);
          d();
        }, ta: function(c, d) {
          var e = c.Ti;
          R(e) || b(mo(e));
          d();
        } };
      }
      function Di(a) {
        var b = a.Qe, c = a.Zh;
        z(function(f, g) {
          1 < c[g] && (a.qd = g);
        }, b);
        var d = a.qd, e = b.slice().splice(d - 1, 1);
        e.unshift(b[d]);
        return e;
      }
      function no(a, b) {
        b.cookie.D("hostIndex", J(",", A(function(c, d) {
          return J("-", [d, c]);
        }, a)), 1440);
      }
      function Ei(a, b) {
        var c = a.C("hostIndex");
        return c ? A(function(d) {
          d = t(d.split("-"));
          d.next();
          d = d.next().value;
          return Oa(d);
        }, c.split(",")) : A(x(0, T), b);
      }
      function oo(a, b) {
        var c = po(a), d = [qo(a) || ro(a)];
        so(a) && d.push(c);
        d.unshift("mc.webvisor.org");
        var e = ma(a);
        c = $a(a);
        var f = c.C("synced", {});
        d = oa(function(g) {
          if (b[g]) {
            var h = (f[g] || 1) + 1440 < e(yb);
            h && delete f[g];
            return h;
          }
        }, d);
        c.D("synced", f);
        return A(function(g) {
          return { cj: b[g], ui: g };
        }, d);
      }
      function ro(a) {
        a = to(a);
        return uo[a] || a;
      }
      function po(a) {
        a = Fi(a);
        return vo[a] || "ru";
      }
      function Gi(a, b, c, d) {
        var e = Yh(c).Oi;
        if (!e) throw Z("im.no");
        Hi(a, Ii + "/" + b + ".js?ver=" + Da.eb + "&b=p", function() {
          var f = L(a).C("ytmm");
          (f = n(f, b + ".init")) && f(e, d, Da.eb);
        });
      }
      function Hi(a, b, c, d) {
        function e() {
          g.state = 1;
          c();
        }
        function f() {
          g.state = 2;
          d && d();
        }
        var g = wo(a, b);
        b = g.Ui;
        var h = g.state;
        b && 2 !== h ? 1 === h ? e() : (a = na(a), a.F(
          b,
          ["load"],
          e
        ), a.F(b, ["error"], f)) : f();
      }
      function wo(a, b) {
        fg[b] || (fg[b] = { Ui: Pe(a, { src: b }), state: 0 });
        return fg[b];
      }
      function xo(a, b, c, d) {
        if (!c.K || Ge(b.ca)) d();
        else {
          var e = Qe(a), f = x(e, yo), g = Jd(a, ""), h = function() {
            var r = J(",", A(zo(gg), Re(e)));
            r = "" + r + Ao(r, g);
            Se(c, "gdpr", r);
            d();
          };
          if (b.vj) f("31"), h();
          else if (3 === b.id) h();
          else {
            var k = L(a), l = k.C("f1");
            if (l) l(h);
            else if (l = Re(e), Va(Qc(gg), l)) h();
            else if (g.C("yandex_login")) f("13"), g.D("gdpr", qd, 525600), h();
            else {
              l = Te(a);
              var m = W(a);
              var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? { url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/", version: 2, Ff: Bo, Mf: "_inversed_buttons" } : void 0;
              l || p ? (l = g.C("gdpr"), H(l, Rc) ? (f(l === hg ? "12" : "3"), h()) : ig(a) || Co(a) ? (f("17"), h()) : Do(a).then(T, C).then(function(r) {
                r ? (f("28"), h()) : (Ji(h), k.D("f1", Ji), r = t(jg).next().value, r(a).then(ba("params.eu")).then(function(q) {
                  if (q || kb(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                    g.D("gdpr_popup", hg);
                    Eo(a, b);
                    if (zb(a)) return Fo(a, f, b);
                    var v = Ki(a, e);
                    if (v) return q = Go(a, f, v, b, p), q.then(F([a, b], Ho)), q;
                  }
                  q || f("8");
                  return M.resolve({ value: qd, Td: true });
                }).then(function(q) {
                  g.kc("gdpr_popup");
                  if (q) {
                    var v = q.value;
                    q = q.Td;
                    H(v, Rc) && g.D("gdpr", v, q ? void 0 : 525600);
                  }
                  v = Ac(Li, Ba);
                  Kd(a, v, 20)(lb(E(a, "gdr"), C));
                  k.D("f1", Ba);
                })["catch"](E(a, "gdp.a")));
              })) : (f("14"), h());
            }
          }
        }
      }
      function Ho(a, b) {
        if (Te(a)) {
          var c = Qe(a), d = Ja(a, b);
          d = d && d.params;
          c = A(x(Io, n), Re(c));
          d && c.length && d("gdpr", Nb(c));
        }
      }
      function Fo(a, b, c) {
        var d = Ue(a, c);
        return new M(function(e) {
          if (d) {
            var f = d.Z, g = y(x("4", b), x(null, e)), h = Y(a, g, 2e3, "gdp.f.t"), k = {};
            d.fg((k.type = "isYandex", k)).then(function(l) {
              l.isYandex ? (b("5"), f.F(Mi, function(m) {
                m = t(m);
                m.next();
                m = m.next().value.type;
                e({ value: Ni(m) });
              })) : (b("6"), e(null));
            })["catch"](g).then(F([a, h], ra));
          } else e({ value: hg, Td: true });
        });
      }
      function Eo(a, b) {
        var c = Ue(a, b);
        c && c.Z.F(["isYandex"], function() {
          var d = {};
          return d.type = "isYandex", d.isYandex = Te(a), d;
        });
        return c;
      }
      function Jo(a, b, c) {
        a = c || Fi(a);
        return H(a, b) ? a : "en";
      }
      function Ni(a) {
        if (H(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return qd;
        a = a.replace("GDPR-ok-view-detailed-", "");
        return H(
          a,
          Rc
        ) ? a : qd;
      }
      function Oi(a, b, c) {
        var d = n(a, "AppMetricaInitializer"), e = n(d, "init");
        if (e) try {
          I(e, d)(Yb(a, b));
        } catch (f) {
        }
        else Pi = Y(a, F([a, b, 2 * c], Oi), c, "ai.d");
        return function() {
          return ra(a, Pi);
        };
      }
      function Qi(a, b, c, d) {
        var e = c.li, f = c.ei, g = c.isTrusted;
        c = c.Ud;
        a = kg(a, f);
        f = f.readOnly;
        var h = {}, k = {};
        d = (k.fi = lg((h.a = e ? 1 : 0, h.b = a, h.c = d || 0, h.d = f ? 1 : null, h.e = c ? 1 : null, h)).Ga(), k);
        fa(g) || (d.ite = Ab(g));
        g = {};
        b.params((g.__ym = d, g));
      }
      function Ri(a, b) {
        var c = n(b, "target");
        if (c) {
          var d = n(c, "value");
          if ((d = eb(d)) && !(100 <= qb(d))) {
            var e = "tel" === n(c, "type"), f = 0 < xb(d, "@") && !e, g = Ve(d);
            g = qb(g);
            if (f || !f && (e || g)) {
              if (d = f ? Si(d) : Ti(a, d)) return e = n(b, "isTrusted"), { ei: c, li: f, hi: d, isTrusted: e, Ud: b.Ud };
            }
          }
        }
      }
      function Ui(a, b, c, d, e) {
        if (!Ld(a)) return C;
        var f = [], g = [], h = na(a), k;
        Sc(a)(lb(C, function() {
          var l = Bb(b, a.document.body);
          e && (l = oa(e, l));
          z(function(p) {
            f.push(p);
            g.push(h.F(p, c, d));
          }, l);
          if (Pa("MutationObserver", a.MutationObserver)) {
            var m = b.toUpperCase();
            l = new a.MutationObserver(E(a, "de.m", function(p) {
              z(function(r) {
                var q = r.addedNodes;
                r = r.removedNodes;
                q && q.length && z(function(v) {
                  We(a, v, function(w) {
                    w.nodeName !== m || e && !e(w) || rb(Ia(w), f) || (f.push(w), g.push(h.F(w, c, d)));
                  }, void 0, a.NodeFilter.SHOW_ELEMENT, true);
                }, q);
                r && r.length && z(function(v) {
                  We(a, v, function(w) {
                    w.nodeName !== m || e && !e(w) || (w = Pc(a)(w, f), -1 !== w && (g[w](), g.splice(w, 1), f.splice(w, 1)));
                  }, void 0, a.NodeFilter.SHOW_ELEMENT, true);
                }, r);
              }, p);
            }));
            l.observe(a.document.body, { childList: true, subtree: true });
            k = I(l.disconnect, l);
          }
        }));
        return function() {
          k && k();
          z(Ba, g);
          Tc(g);
          Tc(f);
        };
      }
      function Ko(a) {
        var b = n(a, "speechSynthesis.getVoices");
        if (b) return a = I(b, a.speechSynthesis), Bc(function(c) {
          return A(x(c, n), Lo);
        }, a());
      }
      function Mo(a, b, c) {
        return J("x", A(y(T, Qa("concat", "" + a), x(c, n)), b));
      }
      function No(a, b) {
        var c = b.Tg;
        if (!Oo(a, c)) return "";
        var d = [];
        a: {
          var e = Po(a, c);
          try {
            var f = F(e, y)()();
            break a;
          } catch (K) {
            if ("ccf" === K.message) {
              f = null;
              break a;
            }
            Xa(K);
          }
          f = void 0;
        }
        if (Wa(f)) var g = "";
        else try {
          g = f.toDataURL();
        } catch (K) {
          g = "";
        }
        g && d.push(g);
        var h = c.getContextAttributes();
        try {
          var k = ua(c.getSupportedExtensions, "getSupportedExtensions") ? c.getSupportedExtensions() || [] : [];
        } catch (K) {
          k = [];
        }
        k = J(";", k);
        g = mg(c.getParameter(c.ALIASED_LINE_WIDTH_RANGE), c);
        f = mg(c.getParameter(c.ALIASED_POINT_SIZE_RANGE), c);
        e = c.getParameter(c.ALPHA_BITS);
        h = h && h.antialias ? "yes" : "no";
        var l = c.getParameter(c.BLUE_BITS), m = c.getParameter(c.DEPTH_BITS), p = c.getParameter(c.GREEN_BITS), r = c.getExtension("EXT_texture_filter_anisotropic") || c.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || c.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (r) {
          var q = c.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          0 === q && (q = 2);
        }
        q = {
          Ij: k,
          "webgl aliased line width range": g,
          "webgl aliased point size range": f,
          "webgl alpha bits": e,
          "webgl antialiasing": h,
          "webgl blue bits": l,
          "webgl depth bits": m,
          "webgl green bits": p,
          "webgl max anisotropy": r ? q : null,
          "webgl max combined texture image units": c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          "webgl max cube map texture size": c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),
          "webgl max fragment uniform vectors": c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),
          "webgl max render buffer size": c.getParameter(c.MAX_RENDERBUFFER_SIZE),
          "webgl max texture image units": c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),
          "webgl max texture size": c.getParameter(c.MAX_TEXTURE_SIZE),
          "webgl max varying vectors": c.getParameter(c.MAX_VARYING_VECTORS),
          "webgl max vertex attribs": c.getParameter(c.MAX_VERTEX_ATTRIBS),
          "webgl max vertex texture image units": c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          "webgl max vertex uniform vectors": c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),
          "webgl max viewport dims": mg(c.getParameter(c.MAX_VIEWPORT_DIMS), c),
          "webgl red bits": c.getParameter(c.RED_BITS),
          "webgl renderer": c.getParameter(c.RENDERER),
          "webgl shading language version": c.getParameter(c.SHADING_LANGUAGE_VERSION),
          "webgl stencil bits": c.getParameter(c.STENCIL_BITS),
          "webgl vendor": c.getParameter(c.VENDOR),
          "webgl version": c.getParameter(c.VERSION)
        };
        ng(d, q, ": ");
        a: {
          try {
            var v = c.getExtension("WEBGL_debug_renderer_info");
            if (v) {
              var w = { "webgl unmasked vendor": c.getParameter(v.UNMASKED_VENDOR_WEBGL), "webgl unmasked renderer": c.getParameter(v.UNMASKED_RENDERER_WEBGL) };
              break a;
            }
          } catch (K) {
          }
          w = {};
        }
        ng(d, w);
        if (!c.getShaderPrecisionFormat) return J("~", d);
        ng(d, Qo(c));
        return J("~", d);
      }
      function ng(a, b, c) {
        c = void 0 === c ? ":" : c;
        z(function(d) {
          var e = t(d);
          d = e.next().value;
          e = e.next().value;
          return a.push("" + d + c + e);
        }, Ca(b));
      }
      function Ro(a, b, c, d) {
        b = d.C("cc");
        d = F(["cc", ""], d.D);
        if (b) {
          var e = t(b.split("&"));
          b = e.next().value;
          (e = (e = e.next().value) && Oa(e)) && 1440 < ma(a)(yb) - e ? d() : c.D("cc", b);
        } else Ia(0)(b) || d();
      }
      function So(a, b, c, d) {
        return sa(b, function(e) {
          if (!Md(e) && !Xe(a)) if (e = d.C("zzlc"), R(e) || Wa(e) || "na" === e) {
            var f = pb(a);
            if (f && (e = Uc(a))) {
              var g = f("iframe");
              B(g.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" });
              f = og(a, 68);
              var h = pg(a, 79);
              g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + dg("L21ldHJpa2EvenpsYy5odG1s");
              e.appendChild(g);
              var k = 0, l = na(a).F(a, ["message"], E(a, "zz.m", function(m) {
                (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (xc(g), m = m.substr(8), d.D("zzlc", m), c.D("zzlc", m), l(), ra(a, k));
              }));
              k = Y(a, y(l, x(g, xc)), 3e3);
            }
          } else c.D("zzlc", e);
        });
      }
      function To(a, b, c) {
        b = rb(x(a, n), Uo);
        b = R(b) ? null : n(a, b);
        if (n(
          a,
          "navigator.onLine"
        ) && b && b && n(b, "prototype.constructor.name")) {
          a = {};
          var d = new b((a.iceServers = [], a));
          a = n(d, "createDataChannel");
          P(a) && (I(a, d, "y.metrika")(), a = n(d, "createOffer"), P(a) && !a.length && (a = I(a, d)(), b = n(a, "then"), P(b) && I(b, a, function(e) {
            var f = n(d, "setLocalDescription");
            P(f) && I(f, d, e, C, C)();
          })(), a = {}, B(d, (a.onicecandidate = function() {
            var e, f = n(d, "close");
            if (P(f)) {
              f = I(f, d);
              try {
                var g = (e = n(d, "localDescription.sdp")) && e.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/);
              } catch (h) {
                d.onicecandidate = C;
                "closed" !== d.iceConnectionState && f();
                return;
              }
              g && 0 < g.length && (e = Cc(g[1]), c.D("pp", e));
              d.onicecandidate = C;
              f();
            }
          }, a))));
        }
      }
      function Vo(a, b, c) {
        var d = Nd(a, b);
        if (d) {
          d.Z.F(["gpu-get"], function() {
            var g = {};
            return g.type = "gpu-get", g.pu = c.C("pu"), g;
          });
          var e = n(a, "opener");
          if (e) {
            var f = Y(a, F([a, b, c], Vi), 200, "pu.m");
            b = {};
            d.we(e, (b.type = "gpu-get", b), function(g, h) {
              var k = n(h, "pu");
              k && (ra(a, f), c.D("pu", k));
            });
          } else Vi(a, b, c);
        }
      }
      function Vi(a, b, c) {
        var d = n(a, "location.host");
        a = Od(a, b);
        c.D("pu", "" + Cc(d) + a);
      }
      function Wo(a) {
        a = pb(a);
        if (!a) return "";
        a = a("video");
        try {
          var b = Qa("canPlayType", a), c = Bc(function(d) {
            return A(y(T, Qa("concat", d + "; codecs=")), Xo);
          }, Wi);
          return A(b, Wi.concat(c));
        } catch (d) {
          return "canPlayType";
        }
      }
      function Yo(a) {
        var b = n(a, "matchMedia");
        if (b && Pa("matchMedia", b)) {
          var c = Qa("matchMedia", a);
          return N(function(d, e) {
            d[e] = c("(" + e + ")");
            return d;
          }, {}, Zo);
        }
      }
      function Qo(a) {
        return N(function(b, c) {
          var d = t(c), e = d.next().value;
          d = d.next().value;
          b[e + " precision"] = n(d, "precision") || "n";
          b[e + " precision rangeMin"] = n(d, "rangeMin") || "n";
          b[e + " precision rangeMax"] = n(d, "rangeMax") || "n";
          return b;
        }, {}, [
          ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
          ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
          ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
          ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
          ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
          [
            "webgl fragment shader low float",
            a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)
          ],
          ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
          ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
          ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
          ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
          ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
          ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
        ]);
      }
      function Po(a, b) {
        return [function() {
          var c = b.createBuffer();
          c && b.getParameter && Pa("getParameter", b.getParameter) || qg();
          b.bindBuffer(b.ARRAY_BUFFER, c);
          var d = new a.Float32Array($o);
          b.bufferData(b.ARRAY_BUFFER, d, b.STATIC_DRAW);
          c.ni = 3;
          c.yi = 3;
          d = b.createProgram();
          var e = b.createShader(b.VERTEX_SHADER);
          d && e || qg();
          return { se: d, uj: e, tj: c };
        }, function(c) {
          var d = c.se, e = c.uj;
          b.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
          b.compileShader(e);
          b.attachShader(d, e);
          (d = b.createShader(b.FRAGMENT_SHADER)) || qg();
          return B(c, { Ch: d });
        }, function(c) {
          var d = c.se, e = c.Ch;
          b.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
          b.compileShader(e);
          b.attachShader(d, e);
          b.linkProgram(d);
          b.useProgram(d);
          return c;
        }, function(c) {
          var d = c.se;
          c = c.tj;
          d.sj = b.getAttribLocation(d, "attrVertex");
          d.zi = b.getUniformLocation(d, "uniformOffset");
          b.enableVertexAttribArray(d.$j);
          b.vertexAttribPointer(
            d.sj,
            c.ni,
            b.FLOAT,
            false,
            0,
            0
          );
          b.uniform2f(d.zi, 1, 1);
          b.drawArrays(b.TRIANGLE_STRIP, 0, c.yi);
          return b.canvas;
        }];
      }
      function Oo(a, b) {
        if (!P(a.Float32Array)) return false;
        var c = n(b, "canvas");
        if (!c || !Pa("toDataUrl", c.toDataURL)) return false;
        try {
          b.createBuffer();
        } catch (d) {
          return false;
        }
        return true;
      }
      function mg(a, b) {
        b.clearColor(0, 0, 0, 1);
        b.enable(b.DEPTH_TEST);
        b.depthFunc(b.LEQUAL);
        b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
        return "[" + n(a, "0") + ", " + n(a, "1") + "]";
      }
      function ap(a, b, c) {
        if (n(c, "settings.ins")) {
          var d = L(a);
          if (!d.C("scip")) {
            var e = $a(a), f = ma(a)(yb);
            c = Ye(e.C("sci"));
            if (!(c && 1440 >= f - c)) {
              c = xa(a, "ci");
              var g = ["sync.cook.int"], h = function(m) {
                m = d.C("scip", "") + m;
                d.D("scip", m);
              }, k = x("a", h);
              d.D("scip", "0");
              var l = {};
              return c({ N: { ea: g, Na: 3e3, cb: true }, H: (l.tag = "cm-urls", l.stage = "mc-yandex-ru", l["mc-id"] = "" + b.id, l) }, ["https://abs.yandex.ru/mapuid"]).then(
                function(m) {
                  m = n(m.bb, "CookieMatchUrls");
                  if (G(m) && qb(m)) {
                    h("1");
                    var p = xa(a, "c");
                    m = A(function(r, q) {
                      return p({ N: { ea: g, Na: 3e3 } }, ["https://" + r])["catch"](y(x("b", h), x("" + q, h)));
                    }, oa(Q, m));
                    return M.all(m);
                  }
                  k();
                },
                k
              ).then(function() {
                var m = d.C("scip");
                !m || kb(m, "a") || kb(m, "b") || (e.D("sci", f), h("2"));
              }, C);
            }
          }
        }
      }
      function Xi(a) {
        return { R: function(b, c) {
          if (!b.K) return c();
          var d = L(a).C("fid");
          !Yi && d && (Se(b, "fid", d), Yi = true);
          return c();
        } };
      }
      function bp(a, b) {
        var c = a.document;
        if (H(c.readyState, ["interactive", "complete"])) gc(a, b);
        else {
          var d = na(a), e = d.F, f = d.Wb, g = function() {
            f(c, ["DOMContentLoaded"], g);
            f(a, ["load"], g);
            b();
          };
          e(c, ["DOMContentLoaded"], g);
          e(a, ["load"], g);
        }
      }
      function rg(a) {
        return { R: function(b, c) {
          var d = b.K;
          if (d) {
            var e = L(a).C("adBlockEnabled");
            e && d.D("adb", e);
          }
          c();
        } };
      }
      function cp(a) {
        var b = E(a, "i.clch", dp);
        na(a).F(a.document, ["click"], x(a, b), { passive: false });
        return function(c) {
          var d = Da, e = d.Ka;
          d = a.Ya[d.ec];
          var f = !!d._informer;
          d._informer = B({ domain: "metrika-informer.com" }, c);
          f || Pe(a, { src: e + "//metrika-informer.com/metrika/informer.js" });
        };
      }
      function ep(a, b) {
        var c = $a(a), d = c.C, e = c.D;
        if ("" === d("cc")) {
          e("cc", 0);
          var f = ma(a), g = L(a);
          xa(a, "6", b)({ N: { cb: true, $c: false } }, ["https://mc.yandex.md/cc"]).then(function(h) {
            h = n(h.bb, "c");
            e("cc", h + "&" + f(yb));
            g.D("cc", h);
          })["catch"](function(h) {
            var k = f(yb);
            e("cc", "&" + k);
            nd(a, "cc", h);
          });
        }
      }
      function Ze(a, b) {
        if (!b) return false;
        var c = W(a);
        return new RegExp(b).test("" + c.pathname + c.hash + c.search);
      }
      function fp(a, b) {
        return sa(b, function(c) {
          var d = n(c, "settings.dr");
          return { kh: gp(a, d), isEnabled: n(c, "settings.auto_goals") };
        });
      }
      function hp(a, b, c, d, e) {
        c = sg(a.document.body, c);
        d = sg(a.document.body, d);
        H(e.target, [c, d]) && tg(a, b);
      }
      function Zi(a, b, c, d) {
        (c = ip(a, d, c)) && tg(a, b, c);
      }
      function $i(a, b) {
        var c = aj(a, b);
        return jp(a, c);
      }
      function aj(a, b) {
        var c = sg(a.document.body, b);
        return c ? kp(a, c) : "";
      }
      function tg(a, b, c) {
        if (b = Ja(a, b)) a = $e(["dr", c || "" + fb(a, 10, 99)]), b.params($e(["__ym", a]));
      }
      function sg(a, b) {
        var c = null;
        try {
          c = b ? zc(b, a) : c;
        } catch (d) {
        }
        return c;
      }
      function bj(a) {
        a = Ka(dg(a));
        return A(function(b) {
          b = b.charCodeAt(0).toString(2);
          return cj("0", 8, b);
        }, a);
      }
      function kp(a, b) {
        if (!b) return "";
        var c = [], d = n(a, "document");
        We(a, b, function(e) {
          if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
          else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
          (f = f && eb(f)) && c.push(f);
        });
        return 0 === c.length ? "" : J(" ", c);
      }
      function lp(a, b, c) {
        c = t(Ua(c));
        a = c.next().value;
        c = c.next().value;
        "track" === a && b({ version: "0", nc: c });
      }
      function mp(a, b, c) {
        if (c) {
          var d = c.version;
          (c = n(np, d + "." + c.nc)) && (b && H(c, op) || a("ym-" + c + "-" + d));
        }
      }
      function pp(a, b, c) {
        if ("rt" === c) return "https://" + dj(a, b) + ".mc.yandex.ru/watch/3/1";
        if ("mf" === c) {
          c = W(a);
          c = Pd(c.protocol + "//" + c.hostname + c.pathname);
          b = Od(a, b);
          var d = "";
          do
            d += fb(a);
          while (d.length < b.length);
          d = d.slice(0, b.length);
          a = "";
          for (var e = 0; e < b.length; e += 1) a += (b.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
          a = t([d, a]);
          b = a.next().value;
          return "https://adstat.yandex.ru/track?service=metrika&id=" + a.next().value + "&mask=" + b + "&ref=" + c;
        }
      }
      function qp(a, b, c) {
        var d = ug(b).Ob, e = {};
        return xa(a, "pi", b)({ K: La((e[d] = 1, e)) }, [c]);
      }
      function rp(a, b, c) {
        return new M(function(d, e) {
          if (ej(a, af, "isp")) {
            var f = C, g = function(h) {
              ("1" === h ? d : e)();
              f();
              fj(af, "isp");
            };
            f = na(a).F(a, ["message"], F([c, g], E(a, "isp.stat.m", sp)));
            Y(a, g, 1500);
          } else e();
        });
      }
      function sp(a, b, c) {
        var d = n(c, "data");
        if (Q(d)) {
          var e = t(d.split("*"));
          d = e.next().value;
          var f = e.next().value;
          e = e.next().value;
          "sc.frame" === d && c.source ? c.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && b(e);
        }
      }
      function tp(a, b) {
        var c = $a(a), d = "wv2rf:" + O(b), e = b.cc, f = vg(a), g = c.C(d), h = b.kj;
        return R(f) || Wa(g) ? Ha(function(k, l) {
          sa(b, function(m) {
            var p = !!n(m, "settings.webvisor.forms");
            p = !n(m, "settings.x3") && p;
            f = vg(a) || n(m, "settings.eu");
            c.D(d, Ab(p));
            l({ cc: e, Sd: !!f, Pf: p, vg: h });
          });
        }) : wg({ cc: e, Sd: f, Pf: !!Oa(g), vg: h });
      }
      function up() {
        var a = N(function(b, c) {
          var d = t(c), e = d.next().value;
          d = d.next().value;
          b[e] = { gd: 0, Rg: 1 / d };
          return b;
        }, {}, [["blur", 34e-4], ["change", 0.0155], ["click", 0.01095], ["deviceRotation", 2e-4], ["focus", 61e-4], ["mousemove", 0.5132], ["scroll", 0.4795], ["selection", 0.0109], ["touchcancel", 2e-4], ["touchend", 0.0265], ["touchforcechange", 0.0233], ["touchmove", 0.1442], ["touchstart", 0.027], ["zoom", 14e-4]]);
        return { Ng: function(b) {
          if (b.length) return { type: "activity", data: N(function(c, d) {
            var e = a[d];
            return Math.round(c + e.gd * e.Rg);
          }, 0, ka(a)) };
        }, Ai: function(b) {
          b && (b = a[b.data.type || b.event]) && (b.gd += 1);
        } };
      }
      function vp(a, b, c) {
        var d = this;
        this.fd = this.Nb = false;
        this.Wa = [];
        this.Hf = [];
        this.$e = [];
        this.send = function(e, f, g) {
          e = d.sender(e, d.dh);
          f && g && e.then(f, g);
          return e;
        };
        this.De = function(e, f, g) {
          return new M(function(h, k) {
            e.push([f, h, k, g]);
          });
        };
        this.Xh = function() {
          d.Wa = jd(function(g, h) {
            return g[3].partNum - h[3].partNum;
          }, d.Wa);
          var e = N(function(g, h, k) {
            h = h[3];
            return g && k + 1 === h.partNum;
          }, true, d.Wa), f = !!d.Wa[d.Wa.length - 1][3].end;
          return e && f;
        };
        this.zd = function(e) {
          $h(d.l, e.slice(), function(f) {
            var g = t(f);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            d.send(f, h, g);
          }, 20, "s.w2.sf.fes");
          Tc(e);
        };
        this.xh = function() {
          d.fd || (d.fd = true, d.zd(d.Hf), d.zd(d.$e));
        };
        this.Wg = function(e) {
          return N(function(f, g) {
            var h = "page" === g.type && !g.frameId, k = "eof" === g.data.type || "eof" === g.event, l = h && !!g.partNum;
            return { ld: f.ld || l, kd: f.kd || h, jd: f.jd || k };
          }, { kd: false, jd: false, ld: false }, e);
        };
        this.Vh = function(e, f, g) {
          g ? (e = d.De(d.Wa, e, f[0]), d.Xh() && (d.zd(d.Wa), d.Nb = true)) : (d.Nb = true, e = d.send(e));
          return e;
        };
        this.rf = function(e, f, g) {
          var h = {};
          f = {
            H: (h["wv-part"] = "" + g, h["wv-type"] = d.Yi, h),
            K: La(),
            N: { aa: f }
          };
          e && f.K.D("bt", 1);
          return f;
        };
        this.oh = function(e, f, g) {
          e = d.rf(false, e, g);
          return d.Nb ? d.send(e) : d.De(d.$e, e, f);
        };
        this.wi = function(e, f, g) {
          e = d.rf(true, e, g);
          if (d.Nb) return d.send(e);
          var h = d.Wg(f);
          g = h.kd;
          var k = h.jd;
          h = h.ld;
          var l;
          g && (l = d.Vh(e, f, h));
          d.fd ? g || (l = d.send(e)) : (g || (l = d.De(d.Hf, e, f)), (d.Nb || k) && d.xh());
          return l;
        };
        this.l = a;
        this.Yi = c;
        this.sender = xa(a, "W", b);
        this.dh = b;
      }
      function Dc(a, b) {
        var c = this;
        this.Lb = 0;
        this.rd = [];
        this.Kb = null;
        this.ja = this.Xb = this.jg = false;
        this.recordStamp = 0;
        this.stopped = false;
        this.Nh = function() {
          return c.page;
        };
        this.Ed = function() {
          return c.Lb;
        };
        this.qf = function() {
          return c.recordStamp;
        };
        this.Kh = function() {
          return c.Qa;
        };
        this.pf = function() {
          return c.Kb;
        };
        this.xa = function() {
          return c.Pd;
        };
        this.stamp = function() {
          return c.Ee ? c.l.Math.max(c.Ee(ea) - c.recordStamp, 0) : 0;
        };
        this.Ib = function() {
          return c.options;
        };
        this.jb = function() {
          return c.Pg;
        };
        this.V = function(e, f, g, h) {
          h = void 0 === h ? c.stamp() : h;
          e = c.Jh(e, f, g, h);
          c.ba(e);
        };
        this.Jh = function(e, f, g, h) {
          h = void 0 === h ? c.stamp() : h;
          return {
            type: e,
            data: f,
            stamp: h,
            frameId: c.Lb,
            event: g
          };
        };
        this.ba = function(e) {
          e = G(e) ? e : [e];
          c.jg && !c.Xb ? c.ja ? (e = A(function(f) {
            return f.frameId ? f : B(f, { frameId: c.Lb });
          }, e), c.pf().bg(e)) : c.Sb(e) : c.rd = c.rd.concat(e);
        };
        this.l = a;
        var d = xg(a, this, "R");
        this.Be = d.J(this.Be, "s");
        this.ba = d.J(this.ba, "sd");
        d = L(a);
        d.C("wv2e") && Ee();
        d.D("wv2e", true);
        this.options = b;
        this.Qa = na(a);
        this.Pd = new Cb(this.l, b);
        this.Pg = wp(a);
        this.We = A(function(e) {
          var f = t(e);
          e = f.next().value;
          f = f.next().value;
          return new e(a, c, f);
        }, yg);
        this.bi();
        this.page = xp(this.l);
        this.Be();
      }
      function xp(a) {
        return { Eh: function() {
          var b = a.document.querySelector("base[href]");
          return b ? b.getAttribute("href") : null;
        }, Gh: function() {
          if (a.document.doctype) {
            var b = B({ name: "html", publicId: "", systemId: "" }, a.document.doctype), c = b.publicId, d = b.systemId;
            return "<!DOCTYPE " + J("", [b.name, c ? ' PUBLIC "' + c + '"' : "", !c && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">";
          }
          return null;
        } };
      }
      function Ob(a, b, c) {
        a = V.call(this, a, b, c) || this;
        a.ab = {};
        a.Vb = {};
        a.Ue = 0;
        a.Ic = a.L.J(a.Ic, "a");
        a.vb = a.L.J(a.vb, "sr");
        a.Jc = a.L.J(a.Jc, "r");
        a.ba = a.L.J(a.ba, "d");
        return a;
      }
      function bf(a, b, c) {
        a = V.call(
          this,
          a,
          b,
          c
        ) || this;
        a.ve = a.L.J(a.ve, "ps");
        return a;
      }
      function kc(a, b, c) {
        b = V.call(this, a, b, c) || this;
        b.Ub = [];
        b.Bd = {};
        b.ie = b.L.J(b.ie, "fi");
        b.je = b.L.J(b.je, "sd");
        b.ke = b.L.J(b.ke, "src");
        b.qa = new a.MutationObserver(b.ke);
        return b;
      }
      function yp(a, b, c) {
        var d = Qd(a), e = na(a), f = zb(a), g = b.Ed(), h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"), k = x(d, T);
        if (h) {
          if (!g) return Y(a, I(d.$, d, "i", { ja: false }), 10), { Dd: k, bg: C, stop: C };
          Xa(Ya());
        }
        d.F(["sr"], function(q) {
          if (zg(q)) {
            var v = gj(a, q.source);
            if (v) {
              var w = {};
              Ag(a, q.source, (w.type = "\u043D", w.frameId = b.xa().X(v), w));
            }
          }
        });
        d.F(["sd"], function(q) {
          if (zg(q)) {
            var v = q.data;
            q = q.source;
            (a === q || gj(a, q)) && d.$("sdr", { data: v.data, frameId: v.frameId });
          }
        });
        if (f && !g) {
          var l = false, m = 0, p = function() {
            var q = {};
            Ag(a, a.parent, (q.type = "sr", q));
            m = Y(a, p, 100, "if.i");
          };
          p();
          var r = function(q) {
            if (zg(q)) {
              d.ga(["\u043D"], r);
              ra(a, m);
              var v = hc(a, q.origin).host;
              l || q.source !== a.parent || !q.data.frameId || "about:blank" !== W(a).host && !H(v, c) || (l = true, d.$("i", { frameId: q.data.frameId, ja: true }));
            }
          };
          d.F(["\u043D"], r);
          Y(a, function() {
            d.ga(
              ["\u043D"],
              r
            );
            ra(a, m);
            l || (l = true, d.$("i", { ja: false }));
          }, 2e3, "if.r");
        }
        e = e.F(a, ["message"], function(q) {
          var v = jc(a, q.data);
          v && v.type && H(v.type, zp) && d.$(v.type, { data: v, source: q.source, origin: q.origin });
        });
        return { Dd: k, bg: function(q) {
          var v = {};
          return Ag(a, a.parent, (v.frameId = b.Ed(), v.data = q, v.type = "sd", v));
        }, stop: e };
      }
      function gj(a, b) {
        try {
          return rb(y(ba("contentWindow"), Ia(b)), Ka(a.document.querySelectorAll("iframe")));
        } catch (c) {
          return null;
        }
      }
      function Ag(a, b, c) {
        b || Xa(Ya());
        a = Yb(a, c);
        b.postMessage(a, "*");
      }
      function zg(a) {
        return Q(a.origin) && !R(a.source);
      }
      function Ap(a) {
        return !R(a.frameId) && !R(a.data);
      }
      function gb(a, b, c) {
        b = V.call(this, a, b, c) || this;
        b.mb = {};
        b.Ma = 0;
        b.Ea = [];
        b.lg = [];
        b.lc = 0;
        b.Rf = 0;
        b.ia.push([["keydown"], b.Th]);
        b.ia.push([["keyup"], b.Uh]);
        b.Jg = -1 !== Ec(n(a, "navigator.appVersion") || "", "Mac") ? "1" : "2";
        b.Dc = b.L.J(b.Dc, "v");
        b.wd = b.L.J(b.wd, "ec");
        b.Tc = b.L.J(b.Tc, "sk");
        b.Fd = b.L.J(b.Fd, "gk");
        b.Ae = b.L.J(b.Ae, "sc");
        b.$b = b.L.J(b.$b, "cc");
        b.reset = b.L.J(b.reset, "r");
        b.Qc = b.L.J(b.Qc, "rs");
        return b;
      }
      function Vc(a, b, c) {
        b = V.call(this, a, b, c) || this;
        b.Ag = 1;
        b.Ca = new rd(a);
        b.bc = b.L.J(b.bc, "z");
        return b;
      }
      function Bg(a, b, c) {
        a = V.call(this, a, b, c) || this;
        a.ia.push([["load"], a.Ci, a.l.document]);
        return a;
      }
      function sd(a, b, c) {
        b = V.call(this, a, b, c) || this;
        b.Xc = {};
        b.scrolling = false;
        b.Yf = 0;
        b.ia.push([["scroll"], b.Vi, b.l.document]);
        b.ia.push([Bp, b.fj, b.l.document]);
        b.Ca = new rd(a);
        b.Mb = b.L.J(b.Mb, "nh");
        b.ej = b.L.J(b.Ca.ic(b.Mb, b.G.jb().zf() ? 0 : 50, { ef: true }), "th");
        return b;
      }
      function hj() {
        return Fc() + Fc() + "-" + Fc() + "-" + Fc() + "-" + Fc() + "-" + Fc() + Fc() + Fc();
      }
      function Fc() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }
      function Rd(a, b, c) {
        a = V.call(this, a, b, c) || this;
        a.visibility = null;
        R(a.l.document.hidden) ? R(a.l.document.msHidden) ? R(a.l.document.webkitHidden) || (a.visibility = { hidden: "webkitHidden", event: "webkitvisibilitychange" }) : a.visibility = { hidden: "msHidden", event: "msvisibilitychange" } : a.visibility = { hidden: "hidden", event: "visibilitychange" };
        a.Kd = a.L.J(a.Kd, "fbe");
        a.Md = a.L.J(a.Md, "she");
        return a;
      }
      function Sd(a, b, c) {
        a = V.call(this, a, b, c) || this;
        a.Od = false;
        a.ia.push([Cp, a.Wh]);
        return a;
      }
      function Cg(a, b, c) {
        a = V.call(this, a, b, c) || this;
        a.ia.push([Dp, a.yh]);
        return a;
      }
      function Td(a, b, c) {
        b = V.call(this, a, b, c) || this;
        b.ia.push([Ep, b.Di]);
        b.Ca = new rd(a);
        b.Fc = b.L.J(b.Fc, "n");
        b.dj = b.L.J(b.Ca.ic(I(b.Fc, b), 100), "t");
        return b;
      }
      function Wc(a, b, c) {
        b = V.call(this, a, b, c) || this;
        b.pg = [];
        b.Pe = { x: 0, y: 0 };
        b.Ca = new rd(a);
        b.Kc = b.L.J(b.Kc, "o");
        b.ia.push([["scroll"], b.Hi]);
        return b;
      }
      function rd(a) {
        this.index = 0;
        this.xb = {};
        this.l = a;
      }
      function Pb(a, b, c) {
        a = V.call(this, a, b, c) || this;
        a.Xa = {
          width: 0,
          height: 0,
          pageHeight: 0,
          pageWidth: 0,
          orientation: 0
        };
        a.ia.push([["resize"], a.Gi]);
        a.ia.push([["orientationchange"], a.Ei]);
        return a;
      }
      function Qb(a, b, c) {
        a = V.call(this, a, b, c) || this;
        a.inputs = {};
        a.ud = false;
        a.Gc = a.L.J(a.Gc, "ii");
        a.Hc = a.L.J(a.Hc, "ir");
        a.Pc = a.L.J(a.Pc, "ri");
        a.Yc = a.L.J(a.Yc, "ur");
        a.Ld = a.L.J(a.Ld, "ce");
        a.xc = a.L.J(a.xc, "vc");
        return a;
      }
      function Cb(a, b) {
        var c = this;
        this.oc = [];
        this.gb = [];
        this.ee = 1;
        this.Ve = this.cg = 0;
        this.Ba = {};
        this.Ra = {};
        this.Hb = [];
        this.Nd = function(e) {
          return c.gb.length ? H(e, c.gb) : false;
        };
        this.removeNode = function(e) {
          var f = c.X(e), g = Ra(e);
          if (g && !R(f)) return g = "NR:" + g.toLowerCase(), c.Nd(g) && c.Z.$(g, { data: { node: e, id: f } }), f;
        };
        this.kb = function(e) {
          var f = Ra(e);
          if (f) {
            var g = e.__ym_indexer;
            return g ? g : (g = c.ee, e.__ym_indexer = g, c.ee += 1, f = "NA:" + f.toLowerCase(), c.Nd(f) && c.Z.$(f, { data: { node: e, id: g } }), g);
          }
          return null;
        };
        this.Xf = function() {
          c.cg = Y(c.l, y(I(c.ba, c, false), c.Xf), 50, "i.s");
        };
        this.Vf = function() {
          c.Ve = Y(c.l, y(I(c.hd, c, false), c.Vf), 50, "i.g");
        };
        this.Qi = function(e) {
          null === c.Ba[e] && delete c.Ba[e];
          null === c.Ra[e] && delete c.Ra[e];
        };
        this.l = a;
        var d = xg(a, this, "i");
        this.Z = Qd(a);
        this.options = b;
        this.start = d.J(this.start, "st");
        this.stop = d.J(this.stop, "sp");
        this.X = d.J(this.X, "i");
        this.ye = d.J(this.ye, "o");
        this.yc = d.J(this.yc, "a");
        this.removeNode = d.J(this.removeNode, "r");
        this.ba = d.J(this.ba, "s");
        this.hd = d.J(this.hd, "g");
      }
      function Db(a, b, c) {
        b = V.call(this, a, b, c) || this;
        b.va = { elements: [], attributes: [] };
        b.index = 0;
        b.fe = b.L.J(b.fe, "o");
        b.pd = b.L.J(b.pd, "io");
        b.cd = b.L.J(b.cd, "ao");
        b.pe = b.L.J(b.pe, "a");
        b.ne = b.L.J(b.ne, "at");
        b.qe = b.L.J(b.qe, "r");
        b.oe = b.L.J(
          b.oe,
          "c"
        );
        b.qa = new a.MutationObserver(b.fe);
        return b;
      }
      function Fp(a, b) {
        if (Q(b)) return b;
        var c = a.textContent;
        if (Q(c)) return c;
        c = a.data;
        if (Q(c)) return c;
        c = a.nodeValue;
        return Q(c) ? c : "";
      }
      function Gp(a, b, c, d, e) {
        d = void 0 === d ? {} : d;
        e = void 0 === e ? Ra(b) : e;
        var f = B(N(function(h, k) {
          h[k.name] = k.value;
          return h;
        }, {}, Ka(b.attributes)), d);
        B(f, Hp(b, e, f));
        var g = (d = Rb(function(h, k) {
          var l = t(k), m = l.next().value;
          l = l.next().value;
          l = cf(a, b, m, l, c, e);
          var p = l.value;
          fa(p) ? delete f[m] : f[m] = p;
          return h || l.pb;
        }, false, Ca(f))) && od(b);
        g && (f.width = g.width, f.height = g.height);
        return { pb: d, Og: f };
      }
      function Hp(a, b, c) {
        var d = {};
        Dg(a) ? d.value = a.value || c.value : "IMG" !== b || c.src || (d.src = "");
        return d;
      }
      function cf(a, b, c, d, e, f) {
        f = void 0 === f ? Ra(b) : f;
        var g = { pb: false, value: d };
        if (Dg(b)) "value" === c ? !fa(d) && "" !== d && (c = e.Sd, f = e.Pf, e = Ud(a, b), f ? (c = td(a, b, c), b = c.qb, a = c.hb, c = c.Va, g.pb = !a && (e || b)) : (g.pb = e, c = !(b && Gc("ym-record-keys", b))), c || e) && (d = "" + d, g.value = 0 < d.length ? ij("\u2022", d.length) : "") : "checked" === c && H((b.getAttribute("type") || "").toLowerCase(), Ip) ? g.value = b.checked ? "checked" : null : Jp.test(c) && Eg(a, b) && (g.value = null);
        else if ("IMG" === f && "src" === c) (d = Ud(a, b)) ? (g.pb = d, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (b.getAttribute("srcset") ? b.currentSrc : "") || b.src;
        else if ("A" === f && "href" === c) g.value = d ? "#" : "";
        else if (H(c, ["srcset", "integrity", "crossorigin", "password"]) || 2 < c.length && 0 === xb(c, "on") || "IFRAME" === f && "src" === c || "SCRIPT" === f && H(c, ["src", "type"])) g.value = null;
        return g;
      }
      function V(a, b, c) {
        this.ti = "wv2.c";
        this.rb = [];
        this.ia = [];
        this.l = a;
        this.L = xg(a, this, c, this.ti);
        this.G = b;
        this.Qa = this.G.Kh();
        this.start = this.L.J(this.start, "st");
        this.stop = this.L.J(this.stop, "sp");
      }
      function xg(a, b, c, d) {
        d = void 0 === d ? "wv2" : d;
        return { J: function(e, f) {
          return E(a, d + "." + c + "." + f, e, void 0, b);
        } };
      }
      function hb(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        b = lc.call(this, a, b, c) || this;
        b.Ge = 0;
        b.Bb = 0;
        b.Fe = 0;
        b.buffer = [];
        b.bd = 2e3;
        b.Z = Qd(a);
        b.Vc();
        b.Fe = d;
        return b;
      }
      function Kp(a, b, c, d, e) {
        function f() {
          l && l.stop();
        }
        if (!b.zb) return M.resolve(C);
        var g = xa(a, "4", b), h = { K: La() }, k = new df(a, c, function(m, p, r) {
          if (!g) return M.resolve();
          p = "wv-data=" + Vd(m, true);
          var q = {};
          q["wv-part"] = "" + r;
          r = m.length;
          for (var v = 0, w = 255, K = 255, S, pa, Zb; r; ) {
            S = 21 < r ? 21 : r;
            r -= S;
            do
              pa = "string" === typeof m ? m.charCodeAt(v) : m[v], v += 1, 255 < pa && (Zb = pa >> 8, pa &= 255, pa ^= Zb), w += pa, K += w;
            while (--S);
            w = (w & 255) + (w >> 8);
            K = (K & 255) + (K >> 8);
          }
          m = (w & 255) + (w >> 8) << 8 | (K & 255) + (K >> 8);
          return g(B({}, h, { N: { aa: p }, H: (q["wv-check"] = "" + (65535 === m ? 0 : m), q["wv-type"] = c.type, q) }), b)["catch"](E(a, "m.n.m.s"));
        }), l = Lp(
          a,
          k,
          d,
          e
        );
        return sa(b, function(m) {
          m && L(a).D("isEU", n(m, "settings.eu"));
          L(a).C("oo") || l && jj(a, m) && l.start();
          return f;
        });
      }
      function Lp(a, b, c, d) {
        var e = a.document, f = [], g = na(a), h = ":submit" + Math.random(), k = [], l = I(b.flush, b), m = va(function(q, v) {
          E(a, "hfv." + q, function() {
            try {
              var w = v.type;
            } catch (K) {
              return;
            }
            w = H(w, d);
            b.push(v, { type: q });
            w && l();
          })();
        }), p = E(a, "sfv", function() {
          var q = c(a), v = Mp(a);
          z(function(w) {
            f.push(g.F(w.target, [w.event], m(w.type)));
          }, q);
          z(function(w) {
            f.push(g.F(w.target, [w.event], E(
              a,
              "hff." + w.type + "." + w.event,
              function(K) {
                z(Ha({ l: a, na: K, flush: l }), w.T);
              }
            )));
          }, v);
          k = kj(a, "form", e);
          e.attachEvent && (q = kj(a, "form *", e), z(function(w) {
            f.push(g.F(w, ["submit"], m("form")));
          }, k), z(function(w) {
            Fg(w) && f.push(g.F(w, ["change"], m("formInput")));
          }, q));
          z(function(w) {
            var K = w.submit;
            if (P(K) || "object" === typeof K && Np.test("" + K)) w[h] = K, w.submit = E(a, "fv", function() {
              var S = { target: w, type: "submit" };
              m("document")(S);
              return w[h]();
            });
          }, k);
        }), r = E(a, "ufv", function() {
          z(Ba, f);
          z(function(q) {
            q && (q.submit = q[h]);
          }, k);
          b.flush();
        });
        return { start: p, stop: r };
      }
      function Op(a, b) {
        var c = oa(function(e) {
          return 0 < e.T.length;
        }, b), d = lj({ target: a.document, type: "document" });
        return A(y(T, d, Pp(a)), c);
      }
      function mj(a, b) {
        var c = a.l, d = [], e = b.form;
        if (!b[ib] && e) {
          var f = e.elements;
          e = e.length;
          for (var g = 0; g < e; g += 1) {
            var h = f[g];
            ef(h) && !h[ib] && Ea(d, Xc(c, h));
          }
        } else Ea(d, Xc(c, b));
        return d;
      }
      function Gg(a) {
        if (Wd) {
          Wd = false;
          var b = a.l;
          a = Sb(a.l);
          var c = [];
          sb(b, c, 15) ? b = [] : (X(c, a), b = c);
          return b;
        }
      }
      function nj(a) {
        if (!Wd) {
          Wd = true;
          a = Sb(a.l);
          var b = [];
          mc(b, 14);
          X(b, a);
          return b;
        }
      }
      function Qp(a, b, c) {
        var d = b[ib];
        if (d) {
          a: {
            var e = Sb(a), f = b[ib];
            if (0 < f) {
              var g = [];
              b = Hg(a, b);
              var h = Yc[f], k = b[0] + "x" + b[1], l = b[2] + "x" + b[3];
              if (k !== h.Lf) {
                h.Lf = k;
                if (sb(a, g, 9)) {
                  a = [];
                  break a;
                }
                X(g, e);
                X(g, f);
                X(g, b[0]);
                X(g, b[1]);
              }
              if (l !== h.size) {
                h.size = l;
                if (sb(a, g, 10)) {
                  a = [];
                  break a;
                }
                X(g, e);
                X(g, f);
                X(g, b[2]);
                X(g, b[3]);
              }
              if (g.length) {
                a = g;
                break a;
              }
            }
            a = [];
          }
          Ea(c, a);
        }
        return d;
      }
      function td(a, b, c) {
        c = void 0 === c ? false : c;
        if (!b) return { Va: false, hb: false, qb: false };
        var d = b.getAttribute("type") || b.type;
        if ("button" === d) return { Va: false, hb: false, qb: false };
        var e = oa(oj, [b.className, b.id, b.name]), f = b && Gc("ym-record-keys", b);
        d = d && H(d, pj) || Va(Eb(Rp), e);
        var g;
        (g = d) || (g = b.placeholder, g = Va(Eb(Sp), e) || oj(g) && Tp.test(g || ""));
        e = g;
        return { Va: !f && (Ig(a, b) || e && c || e && !d && !c), hb: f, qb: e };
      }
      function Ig(a, b) {
        return Eg(a, b) || Xd(a, b) ? true : Ud(a, b);
      }
      function oj(a) {
        return !!(a && 2 < a.length);
      }
      function Dg(a) {
        try {
          var b = Ra(a);
          if (H(b, Jg)) {
            if ("INPUT" === b) {
              var c = a.type;
              return !c || H(c.toLocaleLowerCase(), Up);
            }
            return true;
          }
        } catch (d) {
        }
        return false;
      }
      function qj(a, b) {
        return b && Gc("(ym-disable-submit|-metrika-noform)", b);
      }
      function Vp(a, b) {
        return J(
          "",
          A(function(c) {
            if (!a.isNaN(c)) return "" + fb(a, 0, 9);
            if (Wp.test(c)) {
              var d = t(c.toUpperCase() === c ? Xp : Yp);
              c = d.next().value;
              d = d.next().value;
              return String.fromCharCode(fb(a, c, d));
            }
            return c;
          }, b.split(""))
        );
      }
      function Ud(a, b) {
        if (fa(b)) return false;
        if (Kg(b)) {
          var c = b.parentNode;
          return (fa(c) ? 0 : 11 === c.nodeType) ? false : Ud(a, b.parentNode);
        }
        c = rj(a);
        if (!c) return false;
        var d = c.call(b, ".ym-hide-content,.ym-hide-content *");
        return d && c.call(b, ".ym-show-content,.ym-hide-content .ym-show-content *") ? false : d;
      }
      function jj(a, b) {
        var c = Zc(a), d = c.C("visorc");
        H(d, ["w", "b"]) || (d = "");
        sj(a) && tj(a, Yd, "visorc") && !Zp.test(Fb(a) || "") || (d = "b");
        var e = n(b, "settings.webvisor.recp");
        if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
        d || (d = L(a).C("hitId") % 1e4 / 1e4 < e ? "w" : "b");
        c.D("visorc", d, 30);
        return "w" === d;
      }
      function df(a, b, c) {
        a = lc.call(this, a, b, c) || this;
        a.buffer = [];
        a.Dg = 7500;
        a.bd = 3e4;
        a.Vc();
        return a;
      }
      function lc(a, b, c) {
        this.Ye = 0;
        this.me = 1;
        this.bd = 5e3;
        this.l = a;
        this.ma = b;
        this.Sb = c;
      }
      function ud(a, b) {
        this.type = "0";
        this.l = a;
        this.Fh = b;
      }
      function uj(a, b, c, d, e) {
        d = Zd(a, c, d);
        b = vj(a, e || c, b);
        var f = Lg(a, d, b);
        return function(g) {
          g = B({ N: { ea: ["mms." + c] } }, g);
          return f(g);
        };
      }
      function nc(a, b) {
        var c = Sa.call(this, a, b) || this;
        c.id = "o";
        var d = {};
        c.Gb = (d.chars = function(e) {
          e = this.La(e);
          return Xb(e).length;
        }, d.authors = function(e) {
          return this.Cd(e.data.author);
        }, d.pageTitle = function(e) {
          return this.wc(e.data.title) || "";
        }, d.updateDate = function(e) {
          return this.wc(e.data.modified_time);
        }, d.publicationDate = function(e) {
          return this.wc(e.data.published_time);
        }, d.pageUrlCanonical = function(e) {
          return this.wc(e.data.url);
        }, d.rubric = function(e) {
          return this.Cd(e.data.section);
        }, d.topics = function(e) {
          return this.Cd(e.data.tag);
        }, d);
        c.mh = new RegExp("^(og:)?((" + J("|", c.tb.Kf) + "):)?");
        return c;
      }
      function $c() {
        var a = Sa.apply(this, arguments) || this;
        a.id = "s";
        a.Qd = true;
        a.lj = Qa("exec", new RegExp("schema.org\\/(" + J("|", ka(a.Je)) + ")$"));
        var b = {};
        a.Gb = (b.id = function(c) {
          c = c.element;
          var d = nb(this.l, c, "identifier");
          return d ? mb(d) : (d = nb(this.l, c, "mainEntityOfPage")) && d.getAttribute("itemid") ? d.getAttribute("itemid") : null;
        }, b.chars = function(c) {
          var d = 0;
          c = c.element;
          for (var e = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], f = 0; f < e.length; f += 1) {
            var g = nb(this.l, c, e[f]);
            if (g) {
              d = mb(g).length;
              break;
            }
          }
          c = Xb(c);
          0 === d && c && (d += c.length);
          return d;
        }, b.topics = function(c) {
          var d = this, e = $d(this.l, c.element, "about");
          return A(function(f) {
            var g = { name: mb(f) };
            if (e = nb(d.l, f, "name")) g.name = mb(e);
            return g;
          }, e);
        }, b.rubric = function(c) {
          var d = this;
          (c = zc('[itemtype$="schema.org/BreadcrumbList"]', c.element)) || (c = zc(
            '[itemtype$="schema.org/BreadcrumbList"]',
            this.root
          ));
          return c ? A(function(e) {
            return { name: mb(nb(d.l, e, "name")), position: mb(nb(d.l, e, "position")) };
          }, $d(this.l, c, "itemListElement")) : [];
        }, b.updateDate = function(c) {
          return (c = nb(this.l, c.element, "dateModified")) ? wj(c) : "";
        }, b.publicationDate = function(c) {
          return (c = nb(this.l, c.element, "datePublished")) ? wj(c) : "";
        }, b.pageUrlCanonical = function(c) {
          c = $d(this.l, c.element, "url");
          if (c.length) {
            var d = c[0];
            return d.href ? d.href : mb(c);
          }
          return null;
        }, b.pageTitle = function(c) {
          var d = "", e = c.element, f = nb(this.l, e, "headline");
          f && (d += mb(f));
          (f = nb(this.l, e, "alternativeHeadline")) && (d += " " + mb(f));
          "" === d && ((f = nb(this.l, e, "name")) || (f = nb(this.l, e, "itemReviewed")), f && (d += mb(f)));
          3 === c.type && (c = oc('[itemtype$="schema.org/Question"]', this.l, e)) && (c = nb(this.l, c, "text")) && (d += mb(c));
          return d;
        }, b.authors = function(c) {
          var d = this;
          c = $d(this.l, c.element, "author");
          return A(function(e) {
            var f = {};
            f = (f.name = "", f);
            if (/.+schema.org\/(Person|Organization)/.test(e.getAttribute("itemtype") || "")) {
              var g = nb(d.l, e, "name");
              g && (f.name = mb(g));
            }
            f.name || (f.name = e.getAttribute("content") || Xb(e) || e.getAttribute("href"));
            return f;
          }, c);
        }, b);
        return a;
      }
      function $b() {
        var a = Sa.apply(this, arguments) || this;
        a.id = "j";
        a.Qd = true;
        a.Xe = J(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
        var b = {};
        a.Gb = (b.id = function(c) {
          var d = c.data["@id"];
          c = c.data.mainEntity || c.data.mainEntityOfPage;
          !d && la(c) && (d = c["@id"]);
          return d;
        }, b.chars = function(c) {
          var d = c.data;
          return Q(d.text) ? d.text.length : Xb(this.La(c)).length;
        }, b.authors = function(c) {
          c = c.data;
          var d = [];
          d = d.concat(this.qc(c, "author"));
          d = d.concat(this.qc(c.mainEntity, "author"));
          return d.concat(this.qc(c.mainEntityOfPage, "author"));
        }, b.pageTitle = function(c) {
          var d = c.data, e = d.headline || "";
          d.alternativeHeadline && (e += " " + d.alternativeHeadline);
          "" === e && (d.name ? e = d.name : d.itemReviewed && (e = d.itemReviewed));
          3 === c.type && la(d.parentItem) && (e = d.parentItem.text);
          return e;
        }, b.updateDate = function(c) {
          return c.data.dateModified || "";
        }, b.publicationDate = function(c) {
          return c.data.datePublished || "";
        }, b.pageUrlCanonical = function(c) {
          return c.data.url;
        }, b.topics = function(c) {
          return this.qc(c.data, "about", ["name", "alternateName"]);
        }, b.rubric = function(c) {
          var d = this, e = this.La(c);
          c = Nb(A(function(f) {
            f = jc(d.l, Xb(f));
            if (la(f) || G(f)) {
              var g = d.nf(f);
              if (g) return N(function(h, k) {
                return h ? h : la(k) && "BreadcrumbList" === k["@type"] ? k : h;
              }, null, g);
              if ("BreadcrumbList" === f["@type"]) return f;
            }
            return null;
          }, [c.element].concat(Bb(this.Xe, document.body === e ? document.documentElement : e))));
          return c.length && (c = c[0].itemListElement, G(c)) ? Nb(A(function(f) {
            return la(f) && f.item && la(f.item) && !d.l.isNaN(f.position) ? { name: f.item.name || f.name, position: f.position } : null;
          }, c)) : [];
        }, b);
        return a;
      }
      function Sa(a, b) {
        var c = this;
        this.id = "a";
        this.Qd = false;
        this.Gb = {};
        this.tb = { "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "), Kf: ["article"] };
        var d = {};
        this.Je = (d.Answer = 3, d.Review = 2, d);
        this.df = u(function(e, f, g) {
          var h = {};
          Wb(c.l, c.wa, "pfi", (h.field = e, h.itemField = f, h.value = g, h));
        }, function(e, f, g) {
          return "" + e + f + g;
        });
        this.qj = function(e) {
          z(function(f) {
            e[f] && (e[f] = N(function(g, h) {
              var k = h.name, l = h.position;
              if (!k) return c.df(f, "name", k), g;
              if ("string" === typeof l) {
                k = Ye(l);
                if (null === k || c.l.isNaN(k)) return c.df(f, "position", l), g;
                h.position = k;
              }
              g.push(h);
              return g;
            }, [], e[f]));
          }, $p);
          return e;
        };
        this.$g = u(function(e, f) {
          var g = {};
          Wb(c.l, c.wa, ["pcs", f], (g.chars = f.chars, g.limit = Mg[f.type], g));
        });
        this.l = a;
        this.root = Uc(a);
        this.wa = b;
      }
      function ab(a, b, c, d, e) {
        var f = this;
        this.Bc = false;
        this.meta = {};
        this.scroll = { x: 0, y: 0 };
        this.involvedTime = this.Gf = 0;
        this.ce = this.Nf = "";
        this.fa = [];
        this.xe = this.Oa = 0;
        this.yb = { h: 0, w: 0 };
        this.buffer = [];
        this.Cg = aq;
        this.flush = function() {
          f.xe = Y(f.l, f.flush, 2500);
          var g = f.Gd();
          if (f.buffer.length || g) {
            var h = Tc(f.buffer);
            g && h.push(g);
            f.Nf = f.ce;
            f.ma.Ga(h)(lb(E(f.l, "p.b.st"), function(k) {
              k && f.Sb(k);
            }));
          }
        };
        this.Sb = d;
        this.ma = c;
        this.Yb = I(this.Yb, this);
        this.Gd = I(this.Gd, this);
        this.flush = I(this.flush, this);
        this.l = a;
        this.wa = e;
        this.Sc = b;
        this.Wd = "pai" + b.id;
        this.Jb();
        this.af = na(this.l);
        this.time = ma(this.l);
        this.wg();
        this.Jd = L(this.l);
        this.Le = null;
      }
      function bq(a, b) {
        return { R: function(c, d) {
          xj(a, b, c);
          d();
        } };
      }
      function xj(a, b, c, d) {
        var e = c.H;
        e.wmode = "0";
        e["wv-hit"] = e["wv-hit"] || "" + ad(a);
        e["page-url"] = e["page-url"] || W(a).href;
        d && (e[d] = e[d] || "" + fb(a));
        a = {};
        b = { ha: { ra: "webvisor/" + b.id }, N: B(c.N || {}, { Za: (a["Content-Type"] = "text/plain", a), Zc: "POST" }), H: e };
        B(c, b);
      }
      function yj(a, b, c) {
        if (bd.isEnabled(a)) return new bd(a, b);
        if (cd.isEnabled(a)) return new cd(a, c);
      }
      function bd(a, b) {
        var c = this;
        this.isSync = false;
        this.Eb = [];
        var d = {};
        this.nh = (d.ad = "mutationAdd", d.re = "mutationRemove", d.tc = "mutationTextChange", d.ac = "mutationAttributesChange", d.page = "pageData", d);
        d = {};
        this.hh = (d.ad = "addedNodesMutation", d.re = "removedNodesMutation", d.tc = "textChangeMutation", d.ac = "attributesChangeMutation", d.touchmove = "touchEvent", d.touchstart = "touchEvent", d.touchend = "touchEvent", d.touchforcechange = "touchEvent", d.touchcancel = "touchEvent", d.resize = "resizeEvent", d.scroll = "scrollEvent", d.change = "changeEvent", d.mousemove = "mouseEvent", d.mousedown = "mouseEvent", d.mouseup = "mouseEvent", d.click = "mouseEvent", d.focus = "focusEvent", d.blur = "focusEvent", d.deviceRotation = "deviceRotationEvent", d.zoom = "zoomEvent", d.keystroke = "keystrokesEvent", d.selection = "selectionEvent", d.stylechange = "styleChangeEvent", d.fatalError = "fatalErrorEvent", d.pageData = "page", d);
        this.Ih = function(e) {
          var f = e.type;
          return e.event || "publishersHeader" !== f && "articleInfo" !== f ? { type: zj[f], event: Aj[c.nh[e.event] || e.event] } : { type: zj.publishers, event: Aj[f] };
        };
        this.If = function(e) {
          var f = !R(e.partNum), g = c.Ih(e);
          g = {
            stamp: e.stamp,
            type: g.type,
            event: g.event,
            frameId: e.frameId,
            chunk: f ? e.data : void 0,
            partNum: e.partNum,
            end: e.end
          };
          !f && e.data && (f = c.hh[e.event] || e.event || e.type) && (g[f] = e.data);
          return g;
        };
        this.l = a;
        this.type = b;
      }
      function Bj(a, b) {
        var c = b[1][3], d = 0, e = new a.Uint8Array(b[0]);
        return Ac([c], function(f, g) {
          if (!f) return e;
          f[0](a, f[2], e, d);
          d += f[1];
          g.push(f[3]);
          return e;
        });
      }
      function Cj(a, b, c) {
        a = b(c);
        b = [C, 0, 0];
        var d = [0, b, b, void 0];
        return Ac(a, function(e, f) {
          var g = t(e), h = g.next().value, k = g.next().value, l = g.next().value;
          if (0 === h) return l(d, k), d;
          if (void 0 === k || null === k) return d;
          g = h >> 3;
          if (h & 1) dd(d, ca(g)), k = l(k), g & 2 && dd(d, ca(k[1])), dd(d, k);
          else if (h & 4) for (h = k.length - 1; 0 <= h; ) {
            var m = l(k[h]);
            m.push([0, 0, Ng]);
            m.push([0, ca(g), dd]);
            m.unshift([0, 0, Og]);
            Ea(f, m);
            --h;
          }
          else if (h & 2) {
            var p = t(e);
            p.next();
            p.next();
            l = p.next().value;
            h = p.next().value;
            m = p.next().value;
            p = p.next().value;
            for (var r = ka(k), q = r.length - 1; 0 <= q; ) {
              var v = r[q];
              v = [[0, 0, Og], [m, k[v], p], [l, v, h], [0, 0, Ng], [0, ca(g), dd]];
              Ea(f, v);
              --q;
            }
          } else k = l(k), k.push([0, 0, Ng]), k.push([0, ca(g), dd]), k.unshift([0, 0, Og]), Ea(f, k);
          return d;
        });
      }
      function Og(a) {
        var b = a[1], c = a[0], d = a[2];
        a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [C, 0, 0], a[2] = a[1]);
        dd(a, ca(c));
        c && (a[2][3] = b[3], a[2] = d, a[0] += c);
      }
      function Ng(a) {
        a[3] = [a[0], a[1], a[2], a[3]];
        a[1] = [C, 0, 0];
        a[2] = a[1];
        a[0] = 0;
      }
      function dd(a, b) {
        a[0] += b[1];
        a[2][3] = b;
        a[2] = b;
      }
      function Dj(a) {
        return [[1857, a.partsTotal, ca], [1793, a.activity, ca], [1744, a.textChangeMutation, cq], [1680, a.removedNodesMutation, dq], [1616, a.addedNodesMutation, eq], [1552, a.attributesChangeMutation, fq], [
          1488,
          a.publishersHeader,
          gq
        ], [1424, a.articleInfo, hq], [1360, a.focusEvent, iq], [1296, a.fatalErrorEvent, jq], [1232, a.deviceRotationEvent, kq], [1168, a.keystrokesEvent, lq], [1104, a.resizeEvent, mq], [1040, a.zoomEvent, nq], [976, a.touchEvent, oq], [912, a.changeEvent, pq], [848, a.selectionEvent, qq], [784, a.scrollEvent, rq], [720, a.mouseEvent, sq], [656, a.Vj, tq], [592, a.page, uq], [513, a.end, ed], [449, a.partNum, ca], [401, a.chunk, vq], [257, a.frameId, ya], [193, a.event, ca], [129, a.type, ca], [65, a.stamp, ca]];
      }
      function wq(a) {
        return [[84, a.Pi, Dj]];
      }
      function xq(a) {
        return [[
          129,
          a.position,
          ya
        ], [81, a.name, ia]];
      }
      function yq(a) {
        return [[81, a.name, ia]];
      }
      function zq(a) {
        return [[81, a.name, ia]];
      }
      function hq(a) {
        return [[593, a.updateDate, ia], [532, a.rubric, xq], [449, a.chars, ya], [401, a.publicationDate, ia], [340, a.topics, yq], [276, a.authors, zq], [209, a.pageTitle, ia], [145, a.pageUrlCanonical, ia], [65, a.id, ca]];
      }
      function Aq(a) {
        return [[513, a.chars, ya], [489, a.maxScrolled, ae], [385, a.involvedTime, ya], [321, a.height, ya], [257, a.width, ya], [193, a.y, ya], [129, a.x, ya], [65, a.id, ca]];
      }
      function gq(a) {
        return [[
          129,
          a.involvedTime,
          ya
        ], [84, a.articleMeta, Aq]];
      }
      function iq(a) {
        return [[65, a.target, ya]];
      }
      function jq(a) {
        return [[209, a.stack, ia], [145, a.ph, ia], [81, a.code, ia]];
      }
      function kq(a) {
        return [[193, a.orientation, ya], [129, a.height, ca], [65, a.width, ca]];
      }
      function lq(a) {
        return [[84, a.keystrokes, Bq]];
      }
      function Bq(a) {
        return [[273, a.modifier, ia], [193, a.isMeta, ed], [145, a.key, ia], [65, a.id, ca]];
      }
      function mq(a) {
        return [[257, a.pageHeight, ca], [193, a.pageWidth, ca], [129, a.height, ca], [65, a.width, ca]];
      }
      function nq(a) {
        return [[193, a.y, ya], [
          129,
          a.x,
          ya
        ], [105, a.level, ae]];
      }
      function oq(a) {
        return [[129, a.target, ya], [84, a.touches, Cq]];
      }
      function Cq(a) {
        return [[297, a.force, ae], [233, a.y, ae], [169, a.x, ae], [81, a.id, ia]];
      }
      function pq(a) {
        return [[257, a.target, ya], [193, a.hidden, ed], [129, a.checked, ed], [81, a.value, ia]];
      }
      function qq(a) {
        return [[257, a.endNode, ca], [193, a.startNode, ca], [129, a.end, ya], [65, a.start, ya]];
      }
      function rq(a) {
        return [[257, a.target, ya], [193, a.page, ed], [129, a.y, ya], [65, a.x, ya]];
      }
      function sq(a) {
        return [[193, a.target, ya], [129, a.y, ca], [65, a.x, ca]];
      }
      function tq(a) {
        return [[
          148,
          a.changes,
          Dq
        ], [65, a.target, ya]];
      }
      function Dq(a) {
        return [[193, a.index, ca], [145, a.op, ia], [81, a.style, ia]];
      }
      function cq(a) {
        return [[209, a.value, ia], [129, a.index, ca], [65, a.target, ca]];
      }
      function dq(a) {
        return [[129, a.index, ca], [69, a.nodes, ya]];
      }
      function eq(a) {
        return [[129, a.index, ca], [84, a.nodes, Ej]];
      }
      function fq(a) {
        return [[210, a.attributes, 81, ia, 145, ia], [129, a.index, ca], [65, a.target, ca]];
      }
      function uq(a) {
        return [[852, a.content, Ej], [785, a.tabId, ia], [705, a.recordStamp, Eq], [656, a.location, Fq], [592, a.viewport, Fj], [
          528,
          a.screen,
          Fj
        ], [449, a.hasBase, ed], [401, a.base, ia], [337, a.referrer, ia], [273, a.ua, ia], [209, a.address, ia], [145, a.title, ia], [81, a.doctype, ia]];
      }
      function Fq(a) {
        return [[209, a.path, ia], [145, a.protocol, ia], [81, a.host, ia]];
      }
      function Fj(a) {
        return [[129, a.height, ya], [65, a.width, ya]];
      }
      function Ej(a) {
        return [[513, a.hidden, ed], [449, a.prev, ca], [385, a.next, ca], [337, a.content, ia], [257, a.parent, ca], [210, a.attributes, 81, ia, 145, ia], [145, a.name, ia], [65, a.id, ca]];
      }
      function ia(a) {
        var b = Gq({}, a, [], 0);
        return b ? [Hq, b, a] : [Gj, 0, 0];
      }
      function vq(a) {
        return [Iq, a.length, a];
      }
      function ed(a) {
        return [Gj, 1, a ? 1 : 0];
      }
      function Eq(a) {
        a = Hj(a);
        var b = t(a), c = b.next().value;
        b = b.next().value;
        var d = (b >>> 28 | c << 4) >>> 0;
        c >>>= 24;
        return [Ij, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a];
      }
      function ae(a) {
        return [Jq, 4, a];
      }
      function ya(a) {
        return 0 > a ? [Ij, 10, Hj(a)] : ca(a);
      }
      function ca(a) {
        return [Kq, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a];
      }
      function Kq(a, b, c, d) {
        for (a = b; 127 < a; ) c[d++] = a & 127 | 128, a >>>= 7;
        c[d] = a;
      }
      function Gj(a, b, c, d) {
        c[d] = b;
      }
      function Iq(a, b, c, d) {
        for (a = 0; a < b.length; ++a) c[d + a] = b[a];
      }
      function Jj(a) {
        return function(b, c, d, e) {
          for (var f, g = 0, h = 0; h < c.length; ++h) if (b = c.charCodeAt(h), 128 > b) a ? g += 1 : d[e++] = b;
          else {
            if (2048 > b) {
              if (a) {
                g += 2;
                continue;
              }
              d[e++] = b >> 6 | 192;
            } else {
              if (55296 === (b & 64512) && 56320 === ((f = c.charCodeAt(h + 1)) & 64512)) {
                if (a) {
                  g += 4;
                  continue;
                }
                b = 65536 + ((b & 1023) << 10) + (f & 1023);
                ++h;
                d[e++] = b >> 18 | 240;
                d[e++] = b >> 12 & 63 | 128;
              } else {
                if (a) {
                  g += 3;
                  continue;
                }
                d[e++] = b >> 12 | 224;
              }
              d[e++] = b >> 6 & 63 | 128;
            }
            d[e++] = b & 63 | 128;
          }
          return a ? g : e;
        };
      }
      function Jq(a, b, c, d) {
        return Lq(a)(a, b, c, d);
      }
      function Mq(a, b, c, d) {
        var e = 0 > b ? 1 : 0;
        e && (b = -b);
        if (0 === b) be(0 < 1 / b ? 0 : 2147483648, c, d);
        else if (a.isNaN(b)) be(2143289344, c, d);
        else if (34028234663852886e22 < b) be((e << 31 | 2139095040) >>> 0, c, d);
        else if (11754943508222875e-54 > b) be((e << 31 | a.Math.round(b / 1401298464324817e-60)) >>> 0, c, d);
        else {
          var f = a.Math.floor(a.Math.log(b) / Math.LN2);
          be((e << 31 | f + 127 << 23 | Math.round(b * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, c, d);
        }
      }
      function be(a, b, c) {
        b[c] = a & 255;
        b[c + 1] = a >>> 8 & 255;
        b[c + 2] = a >>> 16 & 255;
        b[c + 3] = a >>> 24;
      }
      function Ij(a, b, c, d) {
        b = t(b);
        a = b.next().value;
        for (b = b.next().value; a; ) c[d++] = b & 127 | 128, b = (b >>> 7 | a << 25) >>> 0, a >>>= 7;
        for (; 127 < b; ) c[d++] = b & 127 | 128, b >>>= 7;
        c[d++] = b;
      }
      function Hj(a) {
        if (!a) return [0, 0];
        var b = 0 > a;
        b && (a = -a);
        var c = a >>> 0;
        a = (a - c) / 4294967296 >>> 0;
        b && (a = ~a >>> 0, c = ~c >>> 0, 4294967295 < ++c && (c = 0, 4294967295 < ++a && (a = 0)));
        return [a, c];
      }
      function cd(a, b) {
        this.l = a;
        this.type = b;
      }
      function Nq(a, b) {
        return sa(b, function(c) {
          var d = L(a), e = d.C, f = x("dSync", d.D);
          O(b);
          if (e("dSync", false)) f(1);
          else return f(true), Kj(a, c, {
            fb: b,
            Ob: "s",
            Yd: "ds",
            wb: f,
            og: function(g, h, k) {
              var l = g.bb;
              g = g.host;
              if (n(l, "settings")) return Xa(Ya("ds.e"));
              h = h(ea) - k;
              k = g[1];
              g = {};
              l = La((g.di = l, g.dit = h, g.dip = k, g));
              h = {};
              h = (h["page-url"] = W(a).href, h);
              return xa(a, "S", Lj)({ K: l, H: h }, Lj).then(x(10, f), E(a, "ds.rs"));
            }
          });
        });
      }
      function Kj(a, b, c) {
        var d = c.fb, e = void 0 === c.wb ? C : c.wb, f = ma(a), g = Oq(a, b.userData, d), h = Pq(a), k = y(Mj, F([Qq, Rq], ff))(a), l = n(b, "settings.sbp");
        c.wb = e;
        if (l) {
          var m = {};
          c.data = B({}, l, (m.c = d.id, m));
        }
        return h.length ? Sq(a, f, g, b, k, c).then(function() {
          return Tq(
            a,
            h,
            g,
            f,
            k,
            c
          );
        }, C) : (e(2), M.resolve());
      }
      function Pq(a) {
        var b = gf(a);
        a = y(Nj, Qc(["iPhone", "iPad"]))(a);
        return b ? Uq : a ? Vq : [];
      }
      function Tq(a, b, c, d, e, f) {
        var g = void 0 === f.og ? C : f.og, h = f.Yd, k = void 0 === f.wb ? C : f.wb, l = d(ea);
        return Wq(a, b, f)(lb(function(m) {
          k(6);
          z(function(p) {
            p && nd(a, h + ".s", p);
          }, m);
          m = d(yb);
          c.D(h, m).then(x(7, k));
        }, function(m) {
          k(8);
          c.D(h, d(yb)).then(x(9, k));
          g(m, d, l);
        }));
      }
      function Sq(a, b, c, d, e, f) {
        var g = f.Yd, h = f.fb, k = f.wb;
        return new M(function(l, m) {
          var p = c.C(g, 0);
          p = parseInt("" + p, 10);
          return b(yb) - p <= e.ng ? (k(3), m()) : Xq(a) ? l(void 0) : Md(d) ? (k(4), m()) : l(Yq(a, h)["catch"](y(vd(x(5, k)), Xa)));
        });
      }
      function Wq(a, b, c) {
        var d = c.Ob, e = c.data, f = xa(a, d, c.fb);
        a = B({}, Oj);
        e && B(a.H, e);
        return Zq(A(function(g) {
          return $q(f(B({ N: { $c: false, Rc: true } }, Oj), A(function(h) {
            var k = t(h), l = k.next().value;
            h = k.next().value;
            k = k.next().value;
            l = J("", A(function(m) {
              return String.fromCharCode(m.charCodeAt(0) + 10);
            }, l.split("")));
            return "http" + (k ? "s" : "") + "://" + l + ":" + h + "/" + ar[d];
          }, g)).then(function(h) {
            return B({}, h, { host: g[h.xg] });
          }));
        }, b));
      }
      function Oq(a, b, c) {
        var d = b || {}, e = xa(a, "u", c), f = $a(a);
        return { C: function(g, h) {
          return R(d[g]) ? f.C(g, h) : d[g];
        }, D: function(g, h) {
          var k = "" + h;
          d[g] = k;
          f.D(g, k);
          var l = {};
          return e({ H: (l.key = g, l.value = k, l) }, [Da.Ka + "//" + pc + "/user_storage_set"], {})["catch"](E(a, "u.d.s.s"));
        } };
      }
      function br(a, b) {
        try {
          var c = t(b), d = t(c.next().value);
          d.next();
          var e = d.next().value;
        } catch (f) {
          return function() {
            return M.resolve();
          };
        }
        return function(f) {
          var g = {};
          g = (g["browser-info"] = cr, g["page-url"] = a.location && "" + a.location.href, g);
          return e && (f = Yb(a, f)) ? e(dr, {
            $a: g,
            ea: [],
            aa: "site-info=" + Pd(f)
          })["catch"](C) : M.resolve();
        };
      }
      function er(a, b) {
        var c = jd(function(d, e) {
          return d[1].da > e[1].da ? 1 : -1;
        }, Ca(Fe));
        c = A(function(d) {
          var e = t(d);
          d = e.next().value;
          var f = e.next().value.Ua;
          e = U(b, d) && !fa(b[d]);
          d = b[d] !== (f || T)(void 0);
          return Ab(e && d);
        }, c);
        return hf(J("", c));
      }
      function fr(a) {
        if (ce(a)) return null;
        var b = gr(a), c = b.Of;
        R(c) && (b.Of = null, hr(a).then(function(d) {
          b.Of = d;
        }));
        return c ? 1 : null;
      }
      function ir(a, b, c) {
        if ((void 0 === c.H ? {} : c.H).nohit) return null;
        a = de(a);
        if (!a) return null;
        var d = c = null;
        n(
          a,
          "getEntriesByType"
        ) && (d = n(a.getEntriesByType("navigation"), "0")) && (c = jr);
        if (!c) {
          var e = n(a, "timing");
          e && (c = kr, d = e);
        }
        if (!c) return null;
        a = lr(a, d, c);
        b = O(b);
        b = mr(b);
        return (b = nr(b, a)) && J(",", b);
      }
      function nr(a, b) {
        var c = a.length ? A(function(d, e) {
          var f = b[e];
          return f === d ? null : f;
        }, a) : b;
        a.length = 0;
        z(y(T, Qa("push", a)), b);
        return oa(Ia(null), c).length === a.length ? null : c;
      }
      function lr(a, b, c) {
        return A(function(d) {
          var e = t(d), f = e.next().value;
          e = e.next().value;
          if (P(f)) return f(a, b) || null;
          if (1 === d.length) return b[f] ? Math.round(b[f]) : null;
          var g;
          !(g = b[f] && b[e]) && (g = 0 === b[f] && 0 === b[e]) && (g = t(d), d = g.next().value, g = g.next().value, g = !(Pj[d] || Pj[g]));
          if (!g) return null;
          f = Math.round(b[f]) - Math.round(b[e]);
          return 0 > f || 36e5 < f ? null : f;
        }, c);
      }
      function jf(a, b) {
        try {
          var c = b.localStorage.getItem(a);
          return c && Vd(kf(c));
        } catch (d) {
        }
        return null;
      }
      function or(a) {
        var b = n(a, "webOS.service.request");
        return P(b) ? new M(function(c) {
          var d = {}, e = {};
          b("luna://com.webos.service.sm", (e.method = "deviceid/getIDs", e.parameters = (d.idType = ["LGUDID"], d), e.onSuccess = function(f) {
            c(ee(n(
              f,
              "idList.0.idValue"
            )));
          }, e));
        }) : M.resolve(null);
      }
      function pr(a) {
        if (!Pg(a)) return null;
        a = n(a, "tizen.systeminfo.getCapabilities");
        try {
          if (P(a)) return ee(n(a(), "duid"));
        } catch (b) {
        }
        return null;
      }
      function qr(a) {
        if (!Pg(a)) return null;
        a = n(a, "tizen.systeminfo.getCapability");
        if (P(a)) try {
          return ee(a("http://tizen.org/system/tizenid"));
        } catch (b) {
        }
        return null;
      }
      function rr(a) {
        if (!Pg(a)) return null;
        a = n(a, "webapis.adinfo.getTIFA");
        if (P(a)) try {
          return ee(a());
        } catch (b) {
        }
        return null;
      }
      function ee(a) {
        return a ? Vd(kf(a)) : null;
      }
      function kf(a) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          128 > d ? b.push(d) : (127 < d && 2048 > d ? b.push(d >> 6 | 192) : (b.push(d >> 12 | 224), b.push(d >> 6 & 63 | 128)), b.push(d & 63 | 128));
        }
        return b;
      }
      function ti(a) {
        for (var b = "", c = 0; c < a.length; ) {
          var d = a.charCodeAt(c);
          128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (b += String.fromCharCode((d & 31) << 6 | a.charCodeAt(c + 1) & 63), c += 2) : (b += String.fromCharCode((d & 15) << 12 | (a.charCodeAt(c + 1) & 63) << 6 | a.charCodeAt(c + 2) & 63), c += 3);
        }
        return b;
      }
      function Vd(a, b) {
        b = void 0 === b ? false : b;
        for (var c = a.length, d = c - c % 3, e = [], f = 0; f < d; f += 3) {
          var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
          e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63]);
        }
        switch (c - d) {
          case 1:
            c = a[d] << 4;
            e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c & 63], "=", "=");
            break;
          case 2:
            c = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c & 63], "=");
        }
        e = J("", e);
        return b ? Qj(e, true) : e;
      }
      function dg(a, b) {
        var c = a, d = "", e = 0;
        if (!c) return "";
        for ((void 0 === b ? 0 : b) && (c = Qj(c)); c.length % 4; ) c += "=";
        do {
          var f = Ec(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            c.charAt(e++)
          ), g = Ec("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c.charAt(e++)), h = Ec("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c.charAt(e++)), k = Ec("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c.charAt(e++));
          if (0 > f || 0 > g || 0 > h || 0 > k) return "";
          var l = f << 18 | g << 12 | h << 6 | k;
          f = l >> 16 & 255;
          g = l >> 8 & 255;
          l &= 255;
          d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l);
        } while (e < c.length);
        return d;
      }
      function Qj(a, b) {
        return a ? a.replace((void 0 === b ? 0 : b) ? /[+/=]/g : /[-*_]/g, function(c) {
          return sr[c] || c;
        }) : "";
      }
      function tr(a) {
        try {
          var b = qb(a) ? a : [];
          return J(",", [a.name, a.description, y(Ka, Nb, Tb(ur), lf(","))(b)]);
        } catch (c) {
          return "";
        }
      }
      function ur(a) {
        return J(",", [a.description, a.suffixes, a.type]);
      }
      function vr(a, b) {
        for (var c = "", d = 0; d < b; d += 1) c += a;
        return c;
      }
      function wr(a, b, c, d, e, f, g, h) {
        var k = c.C(f);
        fa(k) && (c.D(f, g), e(a, b, c, d), k = c.C(f, g));
        R(h) || h.Tb(f, "" + k);
        return k;
      }
      function xr(a, b) {
        if (ld(a)) {
          var c = Fb(a).match(yr);
          if (c && c.length) return c[1] === b;
        }
        return false;
      }
      function mf(a, b, c) {
        return function(d) {
          var e = Ja(b, c);
          if (e && zr(a, d, b) && (e = I(e.params, e), (d = Qg({ event: a, Ia: "products", Aa: Hc, tf: "goods" }, d)) && e)) {
            var f = {}, g = {};
            e((g.__ym = (f.ecommerce = [d], f), g));
          }
        };
      }
      function zr(a, b, c) {
        var d = false, e = "";
        if (!la(b)) return Wb(c, "", "ecomeo"), d;
        var f = b.goods;
        switch (a) {
          case "detail":
          case "add":
          case "remove":
            G(f) && f.length ? (d = Rj(function(g) {
              return la(g) && (Q(g.id) || Mb(c, g.id) || Q(g.name));
            }, f)) || (e = "ecomgi") : e = "ecomgei";
            break;
          case "purchase":
            Mb(c, b.id) || Q(b.id) ? d = true : e = "ecompi";
        }
        Wb(
          c,
          "",
          e
        );
        return d;
      }
      function fe(a, b) {
        return { R: function(c, d) {
          Rg(c) ? d() : sa(b, function(e) {
            if (e = n(e, "settings.hittoken")) {
              var f = {};
              e = (f.hittoken = e, f);
              c.H = B(c.H || {}, e);
            }
            d();
          });
        } };
      }
      function Sj(a, b, c, d) {
        if (b) {
          var e = [];
          b && (a.document.documentElement.contains(b) ? We(a, b, Qa("push", e), d) : Ea(e, Tj(a, b, d)));
          z(c, e);
        }
      }
      function We(a, b, c, d, e, f) {
        function g(k) {
          return P(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT;
        }
        e = void 0 === e ? -1 : e;
        f = void 0 === f ? false : f;
        var h = g(b);
        if (P(c) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && c(b), !Kg(b))) for (b = a.document.createTreeWalker(b, e, d ? { acceptNode: g } : null, false); b.nextNode() && false !== c(b.currentNode); ) ;
      }
      function Tj(a, b, c) {
        var d = [], e = y(T, Qa("push", d));
        P(c) ? (c = c(b), (fa(c) || c === a.NodeFilter.FILTER_ACCEPT) && e(b)) : e(b);
        if (b.childNodes && 0 < b.childNodes.length) {
          b = b.childNodes;
          c = 0;
          for (var f = b.length; c < f; c += 1) {
            var g = Tj(a, b[c]);
            z(e, g);
          }
        }
        return d;
      }
      function Uj(a, b, c) {
        var d;
        a = [Vj(a, b, function(e) {
          d = e;
          e.qa.F(c);
        }), function() {
          d && d.unsubscribe();
        }];
        return F([nf, a], z);
      }
      function Ar(a, b, c, d) {
        if (c) {
          var e = n(d, "ecommerce") || {};
          var f = n(d, "event") || "";
          e = la(e) && Q(f) ? Qg(f, e) : void 0;
          if (!e) a: {
            e = d;
            !G(d) && Mb(a, qb(d)) && (e = Ua(e));
            if (G(e)) {
              var g = t(e);
              e = g.next().value;
              f = g.next().value;
              g = g.next().value;
              if (Q(f) && la(g) && "event" === e) {
                e = Qg(f, g);
                break a;
              }
            }
            e = void 0;
          }
          if (d = e || Br(d)) e = {}, wb(a, (e.counterKey = b, e.name = "ecommerce", e.data = d, e)), a = {}, b = {}, c((b.__ym = (a.ecommerce = [d], a), b));
        }
      }
      function Br(a) {
        var b = n(a, "ecommerce");
        if (la(b)) return a = oa(Qc(Cr), ka(b)), a = N(function(c, d) {
          c[d] = b[d];
          return c;
        }, {}, a), 0 === ka(a).length ? void 0 : a;
      }
      function Qg(a, b) {
        var c = Q(a) ? Dr[a] : a;
        if (c) {
          var d = c.event, e = c.Ia, f = void 0 === c.tf ? "items" : c.tf, g = b.purchase || b, h = g[f];
          if (h) {
            c = A(x(c.Aa, Er), h);
            h = {};
            var k = {}, l = (k[d] = e ? (h[e] = c, h) : c, k);
            c = ka(g);
            e && 1 < c.length && (l[d].actionField = Rb(function(m, p) {
              if (p === f) return m;
              if ("currency" === p) return l.currencyCode = g.currency, m;
              m[Fr[p] || Sg[p] || p] = g[p];
              return m;
            }, {}, c));
            return l;
          }
        }
      }
      function Er(a, b) {
        var c = {};
        z(function(d) {
          var e = a[d] || Sg[d] || d;
          -1 !== xb(d, "item_category") ? (e = Sg.item_category, c[e] = c[e] ? c[e] + ("/" + b[d]) : b[d]) : c[e] = b[d];
        }, ka(b));
        return c;
      }
      function Gr(a, b, c) {
        var d = n(c, "target");
        if (d) {
          var e = oc(Tg, a, d);
          e || (d = oc("div", a, d)) && (Bb(Tg + ",div", d).length || (e = d));
          if (e = (d = Ra(e)) && Wj(a, e, Nb(["p", Hr[d], "c"]), Ir, void 0)) {
            e = "?" + fd(e);
            d = {};
            d = Ic(a, b, "gbn", (d.id = b.id, d.query = e, d));
            c = n(c, "isTrusted");
            if (fa(c)) c = void 0;
            else {
              var f = {}, g = {};
              c = (g.__ym = (f.ite = Ab(c), f), g);
            }
            of(a, b, "btn", d).reachGoal(e, c);
          }
        }
      }
      function Yf(a, b, c, d) {
        return function() {
          if (Ja(a, b)) {
            var e = Ua(arguments);
            return d.apply(null, Za(e));
          }
        };
      }
      function Jr(a, b, c, d) {
        var e = n(
          d,
          "target"
        );
        e && (d = n(d, "isTrusted"), (e = oc("button,input", a, e)) && "submit" === e.type && (e = Kr(a, e))) && (c.push(e), Y(a, F([false, a, b, c, e, d], Xj), 300));
      }
      function Xj(a, b, c, d, e, f) {
        var g = ac(b)(e, d), h = -1 !== g;
        if (a || h) h && d.splice(g, 1), a = Wj(b, e, ["i", "n", "p"], void 0, void 0), a = "?" + fd(a), d = {}, d = F([b, c, "fg", (d.id = c.id, d.query = a, d)], Yj), fa(f) ? f = void 0 : (e = {}, g = {}, f = (g.__ym = (e.ite = Ab(f), e), g)), of(b, c, "form", d).reachGoal(a, f);
      }
      function Yj(a, b, c, d) {
        return Lr(a, b).then(y(F([Ic(a, b, c, d), C], ff), Ba));
      }
      function Mr(a, b) {
        var c = {};
        a((c.clickmap = R(b) ? true : b, c));
      }
      function Nr(a, b, c, d, e) {
        var f = "clmap/" + e.id, g = {};
        b = (g["page-url"] = b, g["pointer-click"] = c, g);
        f = { K: La(), H: b, ha: { ra: f } };
        d(f, e)["catch"](E(a, "c.s.c"));
      }
      function Or(a, b, c, d, e) {
        if (U(a, "ymDisabledClickmap") || !b || !b.element) return false;
        a = Ra(b.element);
        if (e && !e(b.element, a) || H(b.button, [2, 3]) && "A" !== a || Va(Ia(a), d)) return false;
        d = b.element;
        if (b && c) {
          if (50 > b.time - c.time) return false;
          e = Math.abs(c.position.x - b.position.x);
          a = Math.abs(c.position.y - b.position.y);
          b = b.time - c.time;
          if (c.element === d && 2 > e && 2 > a && 1e3 > b) return false;
        }
        for (; d; ) {
          if (Pr(d)) return false;
          d = d.parentElement;
        }
        return true;
      }
      function Qr(a, b) {
        var c = null;
        try {
          if (c = b.target || b.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== a.document && (c = null);
        } catch (d) {
        }
        return c;
      }
      function Rr(a) {
        var b = a.which;
        a = a.button;
        return b || void 0 === a ? b : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0;
      }
      function Zj(a, b) {
        var c = Uc(a), d = Ug(a);
        return { x: b.pageX || b.clientX + d.x - (c.clientLeft || 0) || 0, y: b.pageY || b.clientY + d.y - (c.clientTop || 0) || 0 };
      }
      function pf(a, b) {
        return { R: function(c, d) {
          var e = c.K, f = c.Ha, g = c.H, h = void 0 === c.N ? {} : c.N;
          if (e && g) {
            var k = ma(a);
            e.Tb("rqnl", 1);
            for (var l = ge(a), m = 1; l[m]; ) m += 1;
            c.M || (c.M = {});
            c.M.Qb = m;
            var p = {};
            l[m] = (p.protocol = Da.Ka, p.host = pc, p.resource = c.ha.ra, p.postParams = h.aa, p.time = k(ea), p.counterType = b.ca, p.params = g, p.browserInfo = e.l(), p.counterId = b.id, p.ghid = ad(a), p);
            f && (l[m].telemetry = f.l());
            Vg(a);
          }
          d();
        }, ta: function(c, d) {
          ak(a, c);
          d();
        } };
      }
      function ak(a, b) {
        var c = ge(a);
        b.K && !Wa(c) && b.M && (delete c[b.M.Qb], Vg(a));
      }
      function Vg(a) {
        var b = ge(a);
        $a(a).D("retryReqs", b);
      }
      function Sr(a, b) {
        if (a.ij()) {
          var c = bk(b);
          if (c && !Gc("ym-disable-tracklink", c)) {
            var d = a.l, e = a.bh, f = a.fb, g = a.sender, h = a.sh, k = f.sc, l = c.href;
            var m = eb(c.innerHTML && c.innerHTML.replace(/<\/?[^>]+>/gi, ""));
            m || (m = (m = c.querySelector("img")) ? eb(m.getAttribute("title") || m.getAttribute("alt")) : "");
            m = l === m ? "" : m;
            var p = n(b, "isTrusted");
            if (Gc("ym-external-link", c)) qf(d, f, { url: l, ob: true, title: m, Cc: p, sender: g });
            else {
              k = k ? hc(d, k).hostname : W(d).hostname;
              h = RegExp("\\.(" + J("|", A(Tr, h)) + ")$", "i");
              var r = c.protocol + "//" + c.hostname + c.pathname;
              h = ck.test(r) || ck.test(l) || h.test(l) || h.test(r);
              c = c.hostname;
              rf(k) === rf(c) ? h ? qf(d, f, { url: l, Ac: true, Cc: p, title: m, sender: g }) : m && e.D("il", eb(m).slice(0, 100)) : l && Ur.test(l) || qf(d, f, { url: l, Ec: true, ob: true, Ac: h, Cc: p, title: m, sender: g });
            }
          }
        }
      }
      function qf(a, b, c) {
        var d = La();
        void 0 !== c.Cc && d.D("ite", Ab(c.Cc));
        c.Ac && d.D("dl", 1);
        c.ob && d.D("ln", 1);
        var e = c.zg || {}, f = {};
        d = { K: d, M: { title: e.title || c.title, Ec: !!c.Ec, O: e.params }, H: (f["page-url"] = c.url, f["page-ref"] = b.sc || W(a).href, f) };
        f = "Link";
        c.Ac ? f = c.ob ? "Ext link - File" : "File" : c.ob && (f = "Ext link");
        var g = {}, h = {};
        wb(a, (h.counterKey = O(b), h.name = "event", h.data = (g.schema = "Link click", g.name = (c.ob ? "external" : "internal") + " url: " + c.url, g), h));
        g = {};
        b = c.sender(d, b).then(Ic(a, b, "lcl", (g.prefix = f, g.id = b.id, g.url = c.url, g), c.zg));
        return wd(a, "cl.p.s", b, e.callback || C, e.ctx);
      }
      function Vr(a, b) {
        var c = {};
        c = (c.string = true, c.object = true, c["boolean"] = b, c)[typeof b] || false;
        var d = {};
        a((d.trackLinks = c, d));
      }
      function Wr(a, b, c, d) {
        var e = W(a), f = e.hostname;
        e = e.href;
        if (b = he(b).url) a = hc(a, b), f = a.hostname, e = a.href;
        return [
          d + "://" + f + "/" + c,
          e || ""
        ];
      }
      function Xr(a, b, c, d) {
        var e = Ja(a, c);
        if (e) {
          a = d.data;
          c = "" + c.id;
          var f = d.sended || [];
          d.sended || (d.sended = f);
          H(c, f) || !e.params || d.counter && "" + d.counter !== c || (e.params(a), f.push(c), d.parent && (d = {}, b.fg((d.type = "params", d.data = a, d))));
        }
      }
      function Ki(a, b, c) {
        c = void 0 === c ? T : c;
        var d = Qd(a);
        c(d);
        var e = x(d, Yr);
        Gd(a, b, function(f) {
          f.qa.F(e);
        });
        return d;
      }
      function Yr(a, b) {
        var c = n(b, "ymetrikaEvent");
        c && a.$(n(c, "type"), c);
      }
      function Gd(a, b, c, d) {
        c = void 0 === c ? C : c;
        d = void 0 === d ? false : d;
        var e = dk(a);
        if (b && P(b.push)) {
          var f = b.push;
          b.push = function() {
            var g = Ua(arguments), h = t(g).next().value;
            d && e.$(h);
            g = f.apply(b, g);
            d || e.$(h);
            return g;
          };
          a = { qa: e, unsubscribe: function() {
            b.push = f;
          } };
          c(a);
          z(e.$, b);
          return a;
        }
      }
      function Qe(a) {
        a = L(a);
        var b = a.C("dataLayer", []);
        a.D("dataLayer", b);
        return b;
      }
      function yo(a, b) {
        if (!H(b, A(ba("ymetrikaEvent.type"), a))) {
          var c = {}, d = {};
          a.push((d.ymetrikaEvent = (c.type = b, c), d));
        }
      }
      function ek(a, b) {
        var c = Nd(a, b), d = [], e = [];
        if (!c) return null;
        var f = F([a, c.we], Zr), g = x(f, $r);
        c.Z.F(["initToParent"], function(h) {
          h = t(h);
          h.next();
          h = h.next().value;
          g(d, c.children[h.counterId]);
        }).F(["parentConnect"], function(h) {
          h = t(h);
          h.next();
          h = h.next().value;
          g(e, c.Fa[h.counterId]);
        });
        return { Z: c.Z, Tj: function(h, k) {
          return new M(function(l, m) {
            c.we(h, k, function(p, r) {
              l([p, r]);
            });
            Y(a, x(Ya(), m), 5100, "is.o");
          });
        }, eg: function(h) {
          var k = { hg: [], Ie: [], data: h };
          d.push(k);
          return f(c.children, k, h);
        }, fg: function(h) {
          var k = { hg: [], Ie: [], data: h };
          e.push(k);
          return f(c.Fa, k, h);
        } };
      }
      function $r(a, b, c) {
        b = oa(function(d) {
          return !H(c.info.counterId, d.Ie);
        }, b);
        z(function(d) {
          if (c.info.counterId) {
            var e = {};
            a((e[c.info.counterId] = c, e), d, d.data);
          }
        }, b);
      }
      function Zr(a, b, c, d, e) {
        return new M(function(f, g) {
          var h = ka(c), k = y(d.resolve || T, vd(f)), l = y(d.reject || T, vd(g));
          d.resolve = k;
          d.reject = l;
          z(function(m) {
            d.Ie.push(+m);
            var p = c[m], r = Y(a, x(Ya(), l), 5100, "is.m"), q = {};
            b(p.window, B(e, (q.toCounter = Oa(m), q)), function(v, w) {
              ra(a, r);
              d.hg.push(m);
              d.resolve && d.resolve(w);
            });
          }, h);
        })["catch"](E(a, "if.b"));
      }
      function as(a) {
        var b = C, c = null, d = a.length;
        if (0 !== a.length && a[0]) {
          var e = a.slice(-1)[0];
          P(e) && (b = e, d = a.length + -1);
          var f = a.slice(-2)[0];
          P(f) && (b = f, c = e, d = a.length + -2);
          d = a.slice(0, d);
          return { eh: c, Zb: b, O: 1 === d.length ? a[0] : $e(d) };
        }
      }
      function wd(a, b, c, d, e) {
        var f = F([a, d, e], Wg);
        return c.then(f, function(g) {
          f();
          nd(a, b, g);
        });
      }
      function Xg(a, b) {
        return { R: function(c, d) {
          var e = (c.M || {}).O, f = void 0 === c.N ? {} : c.N;
          if (e && (Zh(b, e), !f.aa && c.K && c.H)) {
            var g = Yb(a, e), h = fk(a), k = c.K.C("pv");
            if (g && !c.H.nohit) {
              var l = {}, m = {};
              wb(a, (m.counterKey = O(b), m.name = "params", m.data = (l.val = e, l), m));
              k ? encodeURIComponent(g).length > Da.Eg ? h.push([c.K, e]) : c.H["site-info"] = g : (f.aa = g, c.N = f, c.Nc || (c.Nc = {}), c.Nc.xi = true);
            }
          }
          d();
        }, ta: function(c, d) {
          var e = fk(a), f = Ja(a, b), g = f && f.params;
          g && (f = oa(y(sf, Ia(c.K)), e), z(function(h) {
            var k = t(h);
            k.next();
            k = k.next().value;
            g(k);
            h = Pc(a)(h, e);
            e.splice(h, 1);
          }, f));
          d();
        } };
      }
      function bs(a) {
        a = O(a);
        return Jc[a] && Jc[a].hj || null;
      }
      function gk(a) {
        a = O(a);
        return Jc[a] && Jc[a].gj;
      }
      function Zh(a, b) {
        var c = O(a), d = n(b, "__ym.turbo_page"), e = n(b, "__ym.turbo_page_id");
        Jc[c] || (Jc[c] = {});
        if (d || e) Jc[c].gj = d, Jc[c].hj = e;
      }
      function tf(a, b) {
        return function(c) {
          Yg(a, b, c);
        };
      }
      function cs(a, b) {
        Zg(a)(function(c) {
          delete c[b];
        });
      }
      function Yg(a, b, c) {
        Zg(a)(function(d) {
          d[b] = B(d[b] || {}, c);
        });
      }
      function Zg(a) {
        a = L(a);
        var b = a.C("dsjf") || Ha({});
        a.sa("dsjf", b);
        return b;
      }
      function ds(a, b) {
        return function(c) {
          var d = Ja(a, b);
          if (d) {
            var e = Kc(a, O(b));
            if (la(c)) if (qb(ka(c))) {
              if ((c = hk(a, c)) && qb(c)) {
                e = {};
                var f = {};
                d.params((f.__ym = (e.fpmh = c, e), f));
              }
            } else e.log("fpeo");
            else e.log("fpno");
          }
        };
      }
      function hk(a, b) {
        return N(function(c, d) {
          var e = t(d), f = e.next().value, g = e.next().value;
          e = g;
          g = la(g);
          if (!g && (Mb(a, e) && (e = "" + e), !Q(e))) return c;
          e = g ? hk(a, e) : e;
          qb(e) && c.push([
            f,
            e
          ]);
          return c;
        }, [], Ca(b));
      }
      function ik(a, b, c) {
        c = void 0 === c ? 0 : c;
        b = Ca(b);
        b = N(function(d, e) {
          var f = t(e), g = f.next().value;
          f = f.next().value;
          var h = la(f);
          if (!h && (Mb(a, f) && (f = "" + f), !Q(f))) return d;
          if (h) f = ik(a, f, c + 1);
          else if (!c && H(g, es)) f = M.resolve(f);
          else {
            "phone_number" === g ? f = Ti(a, f) : "email" === g && (f = Si(f));
            if (!f) return d;
            f = jk(a, f);
          }
          d.push(f.then(function(k) {
            return [g, k];
          }));
          return d;
        }, [], b);
        return M.all(b);
      }
      function jk(a, b) {
        return new M(function(c, d) {
          var e = new a.TextEncoder().encode(b);
          a.crypto.subtle.digest(
            "SHA-256",
            e
          ).then(function(f) {
            f = new a.Blob([f], { type: "application/octet-binary" });
            var g = new a.FileReader();
            g.onload = function(h) {
              h = n(h, "target.result") || "";
              var k = xb(h, ",");
              -1 !== k ? c(h.substring(k + 1)) : d(Z("fpm.i"));
            };
            g.readAsDataURL(f);
          }, d);
        });
      }
      function Ti(a, b) {
        var c = Ve(b), d = c.length;
        if (!(fs.test(b) || b.length - d > d || 10 > d || 16 < d)) {
          d = c[0];
          var e = b[1];
          if ("+" !== b[0] || e === d) return d = gs(b), 10 > c.length || 13 < c.length || d.startsWith("+8") ? eb(b) : "8" === d[0] ? "7" + c.slice(1) : "+" === d[0] || Mb(a, +d[0]) ? c : "7" + c;
        }
      }
      function Si(a) {
        var b = eb(a).replace(
          /^\++/gm,
          ""
        ).toLowerCase(), c = b.lastIndexOf("@");
        if (-1 === c) return $g(b);
        a = b.substr(0, c);
        c = b.substr(c + 1);
        if (!c || !hs(a)) return $g(b);
        c = c.replace("googlemail.com", "gmail.com");
        kk(c) && (c = "yandex.ru");
        "yandex.ru" === c ? a = a.replace(ah, "-") : "gmail.com" === c && (a = a.replace(ah, ""));
        b = xb(a, "+");
        -1 !== b && (a = a.slice(0, b));
        return $g(a + "@" + c);
      }
      function $g(a) {
        var b = a.length;
        return 5 > b || 100 < b ? void 0 : a;
      }
      function hs(a) {
        var b = a.length;
        return 1 > b || 64 < b ? false : Rj(function(c) {
          var d = c.length;
          if (1 > d) c = false;
          else if ('"' === c[0] && '"' === c[d - 1] && 2 < d) a: {
            for (d = 1; d + 2 < c.length; d += 1) {
              var e = c.charCodeAt(d);
              if (32 > e || 34 === e || 126 < e) {
                c = false;
                break a;
              }
              if (92 === e) {
                if (d + 2 === c.length || 32 > c.charCodeAt(d + 1)) {
                  c = false;
                  break a;
                }
                d += 1;
              }
            }
            c = true;
          }
          else c = is.test(c) ? true : false;
          return c;
        }, a.split("."));
      }
      function cn(a, b, c, d) {
        var e = lk[c];
        return e ? function() {
          var f = Ua(arguments);
          f = d.apply(null, Za(f));
          var g = L(a);
          g.sa("mt", {});
          g = g.C("mt");
          var h = g[e];
          g[e] = h ? h + 1 : 1;
          return f;
        } : d;
      }
      function Ja(a, b) {
        var c = L(a).C("counters", {}), d = O(b);
        return c[d];
      }
      function Ic(a, b, c, d, e) {
        return F([
          a,
          O(b),
          e ? [c + ".p", e] : c,
          d
        ], Wb);
      }
      function Wb(a, b, c, d) {
        Kc(a, b).log(c, d);
      }
      function js(a, b) {
        function c(d, e, f) {
          var g = {}, h = {};
          wb(a, (h.name = "log", h.counterKey = b, h.data = (g.args = G(e) ? e : [e], g.type = d, g.variables = f, g), h));
        }
        return { log: x("log", c), error: x("error", c), warn: x("warn", c) };
      }
      function sa(a, b) {
        var c = O(a);
        return mk()(ks(c)).then(b);
      }
      function ls(a, b, c) {
        b = O(b);
        var d = bh(a);
        c = B({ uh: d(ea) }, c);
        d = {};
        var e = {};
        wb(a, (e.counterKey = b, e.name = "counterSettings", e.data = (d.settings = c, d), e));
        return mk()(ms(b, c));
      }
      function ms(a, b) {
        return function(c) {
          var d = c[a];
          d ? (d.Tf = true, d.Sf(b)) : c[a] = { promise: M.resolve(b), Tf: true, Sf: C };
        };
      }
      function ns(a) {
        return ch["*"] ? uf(ch["*"]) : a ? uf(ch[a]) : void 0;
      }
      function uf(a) {
        if (a) return N(function(b, c) {
          var d = ie[c];
          d && b.push(d);
          return b;
        }, [], a);
      }
      function os(a, b, c, d) {
        return new M(function(e, f) {
          var g = Uc(a), h = b("img"), k = y(x(h, xc), x(Ya(d.ea), f)), l = je(a, k, d.Na || 3e3);
          h.onerror = k;
          h.onload = y(x(h, xc), x(null, e), F([a, l], ra));
          k = B({}, d.$a);
          delete k.wmode;
          h.src = nk(c, d, k);
          ld(a) && (B(h.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), g.appendChild(h));
        });
      }
      function ps(a, b, c) {
        var d = new a.XMLHttpRequest(), e = c.aa, f = {}, g = B(c.cb ? (f.wmode = "7", f) : {}, c.$a);
        return new M(function(h, k) {
          d.open(c.Zc || "GET", vf(b, fd(g)), true);
          d.withCredentials = false !== c.$c;
          c.Na && (d.timeout = c.Na);
          qs(Ca, Tb(function(m) {
            var p = t(m);
            m = p.next().value;
            p = p.next().value;
            d.setRequestHeader(m, p);
          }))(c.Za);
          var l = F([a, d, Ya(c.ea), c.cb, c.Rc, h, k], rs);
          d.onreadystatechange = l;
          try {
            d.send(e);
          } catch (m) {
          }
        });
      }
      function rs(a, b, c, d, e, f, g, h) {
        if (4 === b.readyState) if (200 === b.status || e || g(c), e) 200 === b.status ? f(b.responseText) : g(ok(b));
        else {
          e = null;
          if (d) try {
            (e = jc(a, b.responseText)) || g(c);
          } catch (k) {
            g(c);
          }
          f(e);
        }
        return h;
      }
      function ss(a, b, c, d) {
        var e = {};
        e = B(d.cb ? (e.wmode = "7", e) : {}, d.$a);
        var f = b || { signal: void 0, abort: C }, g = a.fetch(vf(c, fd(e)), { method: d.Zc, body: d.aa, credentials: false === d.$c ? "omit" : "include", headers: d.Za, signal: f.signal }), h = x(d.ea, Ya);
        return new M(function(k, l) {
          d.Na && je(a, function() {
            try {
              f.abort();
            } catch (m) {
            }
            l(h());
          }, d.Na);
          return g.then(function(m) {
            if (!m.ok) {
              if (d.Rc) return Xa(ok(m));
              Ee(d.ea);
            }
            return d.Rc ? m.text() : d.cb ? m.json() : null;
          }).then(k)["catch"](x(h(), l));
        });
      }
      function ts(a, b, c) {
        return new M(function(d, e) {
          var f = "_ymjsp" + fb(a), g = {};
          g = B((g.callback = f, g), c.$a);
          var h = F([a, f], us);
          a[f] = function(l) {
            try {
              h(), xc(k), d(l);
            } catch (m) {
              e(m);
            }
          };
          g.wmode = "5";
          f = {};
          var k = Pe(a, (f.src = nk(b, c, g), f));
          if (!k) return h(), e(Z("jp.s"));
          f = x(k, xc);
          f = y(f, x(Ya(c.ea), e));
          g = je(a, f, c.Na || 1e4);
          g = F([a, g], ra);
          k.onload = g;
          k.onerror = y(h, g, f);
        });
      }
      function us(a, b) {
        try {
          delete a[b];
        } catch (c) {
          a[b] = void 0;
        }
      }
      function nk(a, b, c) {
        (c = fd(c)) && (a = vf(a, c));
        b.aa && (a = vf(a, b.aa));
        return a;
      }
      function vf(a, b) {
        if (!b || !b.length) return a;
        var c = t(a.split("#")), d = c.next().value;
        c = Ta(c);
        c = (c = J("#", c)) ? "#" + c : "";
        return kb(a, "?") ? d + "&" + b + c : d + "?" + b + c;
      }
      function pk(a) {
        return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0];
      }
      function qk(a) {
        var b = n(a, "navigator.sendBeacon");
        return b && Pa("sendBeacon", b) ? F([a, I(b, n(a, "navigator"))], vs) : false;
      }
      function vs(a, b, c, d) {
        return new M(function(e, f) {
          if (!n(a, "navigator.onLine")) return f();
          var g = {};
          g = B(d.$a, (g["force-urlencoded"] = 1, g));
          g = c + "?" + fd(g) + (d.aa ? "&" + d.aa : "");
          return 2e3 < g.length ? f(Ya("sb.tlq")) : b(g) ? e("") : f();
        });
      }
      function vj(a, b, c) {
        b = G(b) ? b : qc[b] || rc;
        var d = A(sf, b);
        z(function(e) {
          return d.unshift(e);
        }, dh);
        return A(y(wf([a, c]), Ba), d);
      }
      function rk(a) {
        return { R: function(b, c) {
          var d = b.H;
          if (!b.K || !d) return c();
          var e = d["page-ref"], f = d["page-url"];
          e && f !== e ? d["page-ref"] = sk(a, e) : delete d["page-ref"];
          d["page-url"] = sk(a, f).slice(0, Da.Gg);
          return c();
        } };
      }
      function sk(a, b) {
        var c = W(a), d = c.href, e = c.host, f = -1;
        if (!Q(b) || R(b)) return d;
        c = b.replace(
          tk,
          ""
        );
        if (-1 !== c.search(ws)) return c;
        var g = c.charAt(0);
        if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + c;
        if (-1 !== f) return d.substr(0, f) + c;
        if ("/" === g) {
          if (f = xb(d, e), -1 !== f) return d.substr(0, f + e.length) + c;
        } else return d = d.split("/"), d[d.length - 1] = c, J("/", d);
        return "";
      }
      function xf(a, b) {
        return { R: function(c, d) {
          var e = uk(b);
          e = F([c, e, d], xs);
          ys(a, b, e);
        }, ta: function(c, d) {
          var e = c.K, f = uk(b);
          if (e) {
            var g = f.ya;
            f.ff === e && g && (z(Ba, g), f.ya = null);
          }
          d();
        } };
      }
      function xs(a, b, c) {
        var d = a.K;
        d ? Rg(a) ? (b.ff = d, c()) : b.ya ? b.ya.push(c) : c() : c();
      }
      function Rg(a) {
        return (a = a.K) && a.C("pv") && !a.C("ar");
      }
      function ys(a, b, c) {
        if (yf(a) && zb(a)) {
          var d = zs(b);
          if (!d.ji) {
            d.ji = true;
            b = Nd(a, b);
            if (!b) {
              c();
              return;
            }
            d.ya = [];
            var e = function() {
              d.ya && (z(Ba, d.ya), d.ya = null);
            };
            Y(a, e, 3e3);
            b.Z.F(["initToChild"], e);
          }
          d.ya ? d.ya.push(c) : c();
        } else c();
      }
      function vk(a, b) {
        return { R: function(c, d) {
          var e = c.K;
          if (e && (!b || b.dg)) {
            var f = a.document.title;
            c.M && c.M.title && (f = c.M.title);
            var g = gd("getElementsByTagName", a.document);
            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
            f = f.slice(0, Da.Fg);
            e.D("t", f);
          }
          d();
        } };
      }
      function Ub(a) {
        return function(b, c) {
          return { R: function(d, e) {
            var f = d.K, g = d.H;
            f && g && z(function(h) {
              var k = ke[h], l = "bi", m = f;
              k || (k = eh[h], l = "tel", m = Se(d));
              k && (k = D(l + ":" + h, k, null)(b, c, d), m.Tb(h, k));
            }, a || As());
            e();
          } };
        };
      }
      function Bs(a, b) {
        var c = le(a);
        b.F(["initToParent"], function(d) {
          var e = t(d);
          d = e.next().value;
          e = e.next().value;
          window.window && (c.children[e.counterId] = { info: e, window: d.source });
        }).F(["initToChild"], function(d) {
          var e = t(d);
          d = e.next().value;
          e = e.next().value;
          d.source === a.parent && b.$("parentConnect", [d, e]);
        }).F(["parentConnect"], function(d) {
          var e = t(d);
          d = e.next().value;
          e = e.next().value;
          e.counterId && (c.Fa[e.counterId] = { info: e, window: d.source });
        });
      }
      function Cs(a) {
        if (Pa("MutationObserver", a.MutationObserver)) {
          var b = le(a).children, c = new a.MutationObserver(function() {
            z(function(d) {
              n(b[d], "window.window") || delete b[d];
            }, ka(b));
          });
          Sc(a)(lb(C, function() {
            c.observe(a.document.body, { subtree: true, childList: true });
          }));
        }
      }
      function Ds(a, b) {
        return function(c, d) {
          var e = { jc: ma(a)(ea), key: a.Math.random(), dir: 0 };
          c.length && (e.jc = Oa(c[0]), e.key = parseFloat(c[1]), e.dir = Oa(c[2]));
          B(d, b);
          var f = {};
          f = (f.data = d, f.__yminfo = J(":", ["__yminfo", e.jc, e.key, e.dir]), f);
          return { meta: e, kg: Yb(a, f) || "" };
        };
      }
      function Sc(a, b) {
        function c(e) {
          n(b, d) ? e() : Y(a, x(e, c), 100);
        }
        b = void 0 === b ? a : b;
        var d = (b.nodeType ? "contentWindow." : "") + "document.body";
        return Ha(function(e, f) {
          c(f);
        });
      }
      function me(a, b) {
        var c = b.Zd, d = c || "uid";
        c = c ? a.location.hostname : void 0;
        var e = Zc(a), f = $a(a), g = ma(a)(fh), h = t(wk(a, b)), k = h.next().value;
        h = h.next().value;
        var l = e.C("d");
        xk(a, b);
        var m = false;
        !h && k && (h = k, m = true);
        if (!h) h = J("", [g, fb(a, 1e6, 999999999)]), m = true;
        else if (!l || 15768e3 < g - Oa(l)) m = true;
        m && !b.Ta && (e.D(d, h, 525600, c), e.D("d", "" + g, 525600, c));
        f.D(d, h);
        return h;
      }
      function Es(a, b) {
        return !b.Ta && xk(a, b);
      }
      function wk(a, b) {
        var c = $a(a), d = Zc(a), e = b.Zd || "uid";
        return [c.C(e), d.C(e)];
      }
      function ad(a) {
        var b = L(a), c = b.C("hitId");
        c || (c = fb(a), b.D("hitId", c));
        return c;
      }
      function Wj(a, b, c, d, e) {
        return N(function(f, g) {
          var h = null;
          g in yk ? h = b.getAttribute && b.getAttribute(yk[g]) : g in zf && (h = "p" === g ? zf[g](a, b, e) : "c" === g ? zf[g](a, b, d) : zf[g](a, b));
          h && (h = h.slice(0, zk[g] || 100), f[g] = gh[g] ? "" + Cc(h) : h);
          return f;
        }, {}, c);
      }
      function bk(a) {
        var b = null;
        try {
          b = a.target || a.srcElement;
        } catch (c) {
        }
        if (b) {
          3 === b.nodeType && (b = b.parentNode);
          for (a = b && b.nodeName && ("" + b.nodeName).toLowerCase(); n(b, "parentNode.nodeName") && ("a" !== a && "area" !== a || !b.href && !b.getAttribute("xlink:href")); ) a = (b = b.parentNode) && b.nodeName && ("" + b.nodeName).toLowerCase();
          return b.href ? b : null;
        }
        return null;
      }
      function Pe(a, b) {
        var c = pb(a);
        if (c) {
          var d = a.document, e = c("script");
          e.src = b.src;
          e.type = b.type || "text/javascript";
          e.charset = b.charset || "utf-8";
          e.async = b.async || true;
          try {
            var f = d.getElementsByTagName("head")[0];
            if (!f) {
              var g = d.getElementsByTagName("html")[0];
              f = c("head");
              g && g.appendChild(f);
            }
            f.insertBefore(e, f.firstChild);
            return e;
          } catch (h) {
          }
        }
      }
      function fj(a, b) {
        var c = Ak(a);
        H(b, c.sb) && (c.sb = oa(y(Ia(b), hd), c.sb), c.sb.length || (xc(c.ib), c.ib = null));
      }
      function ej(a, b, c) {
        var d = Ak(b);
        H(c, d.sb) || d.sb.push(c);
        if (Wa(d.ib)) {
          c = pb(a);
          if (!c) return null;
          c = c("iframe");
          B(c.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" });
          c.src = b;
          a = Uc(a);
          if (!a) return null;
          a.appendChild(c);
          d.ib = c;
        } else (a = n(d.ib, "contentWindow")) && a.postMessage("frameReinit", "*");
        return d.ib;
      }
      function Fs(a, b) {
        var c = G(a) ? a : [a];
        b = b || document;
        if (b.querySelectorAll) {
          var d = J(", ", A(function(e) {
            return "." + e;
          }, c));
          return Ka(b.querySelectorAll(d));
        }
        if (b.getElementsByClassName) return Bc(y(Qa("getElementsByClassName", b), Ka), c);
        d = b.getElementsByTagName("*");
        c = "(" + J("|", c) + ")";
        return oa(x(
          c,
          Gc
        ), Ka(d));
      }
      function kg(a, b, c) {
        for (var d = "", e = Bk(), f = Ra(b) || "*"; b && b.parentNode && !H(f, ["BODY", "HTML"]); ) d += e[f] || "*", d += Ck(a, b, c) || "", b = b.parentElement, f = Ra(b) || "*";
        return eb(d, 128);
      }
      function Ck(a, b, c) {
        if (a = Af(a, b)) {
          a = a.childNodes;
          for (var d = b && b.nodeName, e = 0, f = 0; f < a.length; f += 1) if (d === (a[f] && a[f].nodeName)) {
            if (b === a[f]) return e;
            c && a[f] === c || (e += 1);
          }
        }
        return 0;
      }
      function Af(a, b) {
        var c = n(a, "document");
        return b && b !== c.documentElement ? b === ic(a) ? c.documentElement : n(b, "parentNode") : null;
      }
      function Hg(a, b) {
        var c = hh(a, b), d = c.left;
        c = c.top;
        var e = t(Bf(a, b)), f = e.next().value;
        e = e.next().value;
        return [d, c, f, e];
      }
      function Bf(a, b) {
        var c = n(a, "document");
        if (b === ic(a) || b === c.documentElement) {
          c = Uc(a);
          var d = t(pd(a)), e = d.next().value;
          d = d.next().value;
          return [Math.max(c.scrollWidth, e), Math.max(c.scrollHeight, d)];
        }
        return (c = od(b)) ? [c.width, c.height] : [b.offsetWidth, b.offsetHeight];
      }
      function hh(a, b) {
        var c = b, d = n(a, "document"), e = Ra(c);
        if (!c || !c.ownerDocument || "PARAM" === e || c === ic(a) || c === d.documentElement) return { left: 0, top: 0 };
        if (d = od(c)) return c = Ug(a), { left: Math.round(d.left + c.x), top: Math.round(d.top + c.y) };
        for (e = d = 0; c; ) d += c.offsetLeft, e += c.offsetTop, c = c.offsetParent;
        return { left: d, top: e };
      }
      function kj(a, b, c) {
        if (Ld(a)) return Ka(c.querySelectorAll(b));
        var d = Dk(b.split(" "), c);
        return oa(function(e, f) {
          return ac(a)(e, d) === f;
        }, d);
      }
      function Dk(a, b) {
        var c = Ea([], a), d = c.shift();
        if (!d) return [];
        d = b.getElementsByTagName(d);
        return c.length ? Bc(x(c, Dk), Ka(d)) : Ka(d);
      }
      function zc(a, b) {
        if (b.querySelector) return b.querySelector(a);
        var c = Bb(a, b);
        return c && c.length ? c[0] : null;
      }
      function Bb(a, b) {
        if (!b || !b.querySelectorAll) return [];
        var c = b.querySelectorAll(a);
        return c ? Ka(c) : [];
      }
      function Ek(a, b) {
        return U(b, "isConnected") ? !b.isConnected : oc("html", a, b) !== a.document.documentElement;
      }
      function oc(a, b, c) {
        if (!(b && b.Element && b.Element.prototype && b.document && c)) return null;
        if (b.Element.prototype.closest && Pa("closest", b.Element.prototype.closest) && c.closest) return c.closest(a);
        var d = rj(b);
        if (d) {
          for (b = c; b && 1 === b.nodeType && !d.call(b, a); ) b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        if (Ld(b)) {
          for (a = Ka((b.document || b.ownerDocument).querySelectorAll(a)); c && 1 === c.nodeType && -1 === ac(b)(c, a); ) c = c.parentElement || c.parentNode;
          return c && 1 === c.nodeType ? c : null;
        }
        return null;
      }
      function Ld(a) {
        return !(!Pa("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll);
      }
      function Bi(a, b, c) {
        var d = b.top, e = b.bottom, f = b.left, g = c.w;
        c = c.h;
        a = a.Math;
        b = a.min(a.max(b.right, 0), g) - a.min(a.max(f, 0), g);
        return (a.min(a.max(e, 0), c) - a.min(a.max(d, 0), c)) * b;
      }
      function Fk(a) {
        return Cf(a) && !Va(Ia(a.type), Gs) ? Df(a) ? !a.checked : !a.value : Hs(a) ? !a.value : Is(a) ? 0 > a.selectedIndex : true;
      }
      function Ra(a) {
        if (a) try {
          var b = a.nodeName;
          if (Q(b)) return b;
          b = a.tagName;
          if (Q(b)) return b;
        } catch (c) {
        }
      }
      function Gk(a, b) {
        var c = a.document.getElementsByTagName("form");
        return ac(a)(b, Ka(c));
      }
      function Js(a, b, c) {
        c = gd("dispatchEvent", c || a.document);
        var d = null, e = n(a, "Event.prototype.constructor");
        if (e && (Pa("(Event|Object|constructor)", e) || ih(a) && "[object Event]" === "" + e)) try {
          d = new a.Event(b);
        } catch (f) {
          if ((a = gd(
            "createEvent",
            n(a, "document")
          )) && P(a)) {
            try {
              d = a(b);
            } catch (g) {
            }
            d && d.initEvent && d.initEvent(b, false, false);
          }
        }
        d && c(d);
      }
      function od(a) {
        try {
          return a.getBoundingClientRect && a.getBoundingClientRect();
        } catch (b) {
          return "object" === typeof b && null !== b && 16389 === (b.Jf && b.Jf & 65535) ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 } : null;
        }
      }
      function Ug(a) {
        var b = ic(a), c = n(a, "document");
        return { x: a.pageXOffset || c.documentElement && c.documentElement.scrollLeft || b && b.scrollLeft || 0, y: a.pageYOffset || c.documentElement && c.documentElement.scrollTop || b && b.scrollTop || 0 };
      }
      function pd(a) {
        var b = Oe(a);
        if (b) {
          var c = t(b);
          b = c.next().value;
          var d = c.next().value;
          c = c.next().value;
          return [a.Math.round(b * c), a.Math.round(d * c)];
        }
        b = Uc(a);
        return [n(b, "clientWidth") || a.innerWidth, n(b, "clientHeight") || a.innerHeight];
      }
      function Oe(a) {
        var b = n(a, "visualViewport.width"), c = n(a, "visualViewport.height");
        a = n(a, "visualViewport.scale");
        return fa(b) || fa(c) ? null : [Math.floor(b), Math.floor(c), a];
      }
      function Uc(a) {
        var b = n(a, "document") || {}, c = b.documentElement;
        return "CSS1Compat" === b.compatMode ? c : ic(a) || c;
      }
      function ic(a) {
        a = n(a, "document");
        try {
          return a.getElementsByTagName("body")[0];
        } catch (b) {
          return null;
        }
      }
      function Gc(a, b) {
        try {
          return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(b.className);
        } catch (c) {
          return false;
        }
      }
      function id(a) {
        var b;
        try {
          if (b = a.target || a.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== document && (b = null);
        } catch (c) {
        }
        return b;
      }
      function xc(a) {
        var b = a && a.parentNode;
        b && b.removeChild(a);
      }
      function Xb(a) {
        return a ? a.innerText || "" : "";
      }
      function Kg(a) {
        if (fa(a)) return false;
        a = a.nodeType;
        return 3 === a || 8 === a;
      }
      function Hk(a, b, c) {
        var d = "" + (void 0 === c ? "_ym" : c) + (void 0 === b ? "" : b);
        d && (d += "_");
        return { Rd: Ks(a), C: function(e, f) {
          var g = Ik(a, "" + d + e);
          return Wa(g) && !R(f) ? f : g;
        }, D: function(e, f) {
          Jk(a, "" + d + e, f);
          return this;
        }, kc: function(e) {
          Kk(a, "" + d + e);
          return this;
        } };
      }
      function Jk(a, b, c) {
        var d = jh(a);
        a = Yb(a, c);
        if (!Wa(a)) try {
          d.setItem(b, a);
        } catch (e) {
        }
      }
      function Ik(a, b) {
        var c = jh(a);
        try {
          return jc(a, c.getItem(b));
        } catch (d) {
        }
        return null;
      }
      function Kk(a, b) {
        var c = jh(a);
        try {
          c.removeItem(b);
        } catch (d) {
        }
      }
      function jh(a) {
        try {
          return a.localStorage;
        } catch (b) {
        }
        return null;
      }
      function Yb(a, b, c) {
        try {
          return a.JSON.stringify(b, null, c);
        } catch (d) {
          return null;
        }
      }
      function Se(a, b, c) {
        c = void 0 === c ? null : c;
        a.Ha || (a.Ha = lg());
        b && a.Ha.Tb(b, c);
        return a.Ha;
      }
      function Ef(a) {
        return { R: function(b, c) {
          var d = a.document, e = b.K;
          if (e && kh(a)) {
            var f = na(a), g = function(h) {
              kh(a) || (f.Wb(d, Lk, g), c());
              return h;
            };
            f.F(d, Lk, g);
            e.D("pr", "1");
          } else c();
        } };
      }
      function Ff(a) {
        return function(b, c, d) {
          return function(e, f) {
            var g = A(y(sf, wf([b, f]), Ba), Mk[a] || []);
            g = Ea(g, d);
            return Lg(b, c, g)(e);
          };
        };
      }
      function Lg(a, b, c) {
        var d = Gb(a, b);
        return function(e) {
          return Nk(
            c,
            e,
            true
          ).then(function() {
            var f = e.ha || {}, g = void 0 === f.uf ? "" : f.uf, h = void 0 === f.ra ? "" : f.ra;
            f = A(function(k) {
              return Da.Ka + "//" + ("" + g + k || pc) + "/" + h;
            }, void 0 === f.wf ? [pc] : f.wf);
            return d(e, f);
          }).then(function(f) {
            var g = f.bb;
            f = f.xg;
            e.Si = g;
            e.Ti = f;
            return Nk(c, e).then(x(g, T));
          });
        };
      }
      function Ok(a, b, c, d) {
        a[b] || (a[b] = []);
        c && !fa(d) && Pk(a[b], c, d);
      }
      function Pk(a, b, c) {
        for (var d = [b, c], e = -1e4, f = 0; f < a.length; f += 1) {
          var g = t(a[f]), h = g.next().value;
          g = g.next().value;
          if (c === g && h === b) return;
          if (c < g && c >= e) {
            a.splice(f, 0, d);
            return;
          }
          e = g;
        }
        a.push(d);
      }
      function ai(a) {
        return N(function(b, c) {
          var d = t(c), e = d.next().value;
          d = d.next().value;
          b[Fe[e].da] = d;
          return b;
        }, {}, Ca(a));
      }
      function sc(a) {
        B(Fe, a);
      }
      function Gb(a, b) {
        return function(c, d) {
          return Qk(a, b, d, c);
        };
      }
      function Qk(a, b, c, d, e, f) {
        e = void 0 === e ? 0 : e;
        f = void 0 === f ? 0 : f;
        var g = B({ ea: [] }, d.N), h = t(b[f]), k = h.next().value;
        h = h.next().value;
        var l = c[e];
        if ((!g.Za || !g.Za["Content-Type"]) && g.aa) {
          var m = {};
          g.Za = B({}, g.Za, (m["Content-Type"] = "application/x-www-form-urlencoded", m));
          g.aa = "site-info=" + Pd(g.aa);
        }
        g.Zc = g.aa ? "POST" : "GET";
        g.$a = Ls(a, d, k);
        g.ra = (d.ha || {}).ra;
        g.ea.push(k);
        B(d.N, g);
        k = "" + l + (d.Nc && d.Nc.xi ? "/1" : "");
        var p = 0;
        p = Ms(a, k, g);
        return h(k, g).then(function(r) {
          var q = p, v = {}, w = {};
          wb(a, (w.name = "requestSuccess", w.data = (v.body = r, v.requestId = q, v), w));
          return { bb: r, xg: e };
        })["catch"](function(r) {
          var q = p, v = {}, w = {};
          wb(a, (w.name = "requestFail", w.data = (v.error = r, v.requestId = q, v), w));
          q = f + 1 >= b.length;
          v = e + 1 >= c.length;
          q && v && Xa(r);
          return Qk(a, b, c, d, !v && q ? e + 1 : e, q ? 0 : f + 1);
        });
      }
      function Ls(a, b, c) {
        var d = B({}, b.H);
        a = ma(a);
        b.K && (d["browser-info"] = La(b.K.l()).D("st", a(fh)).Ga());
        !d.t && (b = b.Ha) && (b.D("ti", c), d.t = b.Ga());
        return d;
      }
      function Ms(a, b, c) {
        var d = fb(a), e = c.ea, f = c.aa, g = c.Za, h = c.$a;
        c = c.Zc;
        var k = {}, l = {}, m = {};
        wb(a, (m.name = "request", m.data = (l.url = b, l.requestId = d, l.senderParams = (k.rBody = f, k.debugStack = e, k.rHeaders = g, k.rQuery = h, k.verb = c, k), l), m));
        return d;
      }
      function Nk(a, b, c) {
        c = void 0 === c ? false : c;
        return new M(function(d, e) {
          function f(k, l) {
            l();
            d();
          }
          var g = a.slice();
          g.push({ R: f, ta: f });
          var h = Ac(g, function(k, l) {
            var m = c ? k.R : k.ta;
            if (m) try {
              m(b, l);
            } catch (p) {
              h(Ns), e(p);
            }
            else l();
          });
          h(Rk);
        });
      }
      function gc(a, b, c) {
        var d = c || "as";
        if (a.postMessage && !a.attachEvent) {
          c = na(a);
          var e = "__ym__promise_" + fb(a) + "_" + fb(a), f = C;
          d = E(a, d, function(g) {
            try {
              var h = g.data;
            } catch (k) {
              return;
            }
            h === e && (f(), g.stopPropagation && g.stopPropagation(), b());
          });
          f = c.F(a, ["message"], d);
          a.postMessage(e, "*");
        } else Y(a, b, 0, d);
      }
      function $h(a, b, c, d, e) {
        d = void 0 === d ? 1 : d;
        e = void 0 === e ? "itc" : e;
        b = Ac(b, c);
        Kd(a, b, d)(lb(E(a, e), C));
      }
      function Kd(a, b, c, d) {
        c = void 0 === c ? 1 : c;
        d = void 0 === d ? Sk : d;
        lh = Infinity === c;
        return Ha(function(e, f) {
          function g() {
            try {
              var k = b(d(a, c));
              h = h.concat(k);
            } catch (l) {
              return e(l);
            }
            b(Os);
            if (b(ne)) return f(h), Tk(a);
            lh ? (b(d(a, 1e4)), f(h), Tk(a)) : Y(a, g, 100);
          }
          var h = [];
          mh ? nh.push(g) : (mh = true, g());
        });
      }
      function Tk(a) {
        if (nh.length) {
          var b = nh.shift();
          lh ? b() : Y(a, b, 100);
        } else mh = false;
      }
      function wg(a) {
        return Ha(function(b, c) {
          c(a);
        });
      }
      function $q(a) {
        return Ha(function(b, c) {
          a.then(c, b);
        });
      }
      function Ps(a) {
        var b = [], c = 0;
        return Ha(function(d, e) {
          z(function(f, g) {
            f(lb(d, function(h) {
              try {
                b[g] = h, c += 1, c === a.length && e(b);
              } catch (k) {
                d(k);
              }
            }));
          }, a);
        });
      }
      function Zq(a) {
        var b = [], c = false;
        return Ha(function(d, e) {
          function f(g) {
            b.push(g) === a.length && d(b);
          }
          z(function(g) {
            g(lb(f, function(h) {
              if (!c) try {
                e(h), c = true;
              } catch (k) {
                f(k);
              }
            }));
          }, a);
        });
      }
      function lb(a, b) {
        return function(c) {
          return c(a, b);
        };
      }
      function Ac(a, b) {
        return Ha({ Sa: a, Vd: b || T, Ce: false, za: 0 });
      }
      function Rk(a) {
        for (var b = true, c = {}; !ne(a) && b; c = { de: void 0 }) b = false, c.de = function() {
          b = true;
          a.za += 1;
        }, a.Vd(a.Sa[a.za], /* @__PURE__ */ function(d) {
          return function() {
            (0, d.de)();
          };
        }(c)), b || (a.za += 1, c.de = x(a, Rk));
      }
      function Sk(a, b) {
        return function(c) {
          var d = ma(a), e = d(ea);
          return Uk(function(f, g) {
            d(ea) - e >= b && g(Vk);
          })(c);
        };
      }
      function oh(a, b) {
        return function(c) {
          var d = ma(a), e = d(ea);
          return ph(function(f) {
            d(ea) - e >= b && Vk(f);
          })(c);
        };
      }
      function ph(a) {
        return function(b) {
          for (var c; b.Sa.length && !ne(b); ) c = b.Sa.pop(), c = b.Vd(c, b.Sa), a(b);
          return c;
        };
      }
      function Qs(a) {
        ne(a) && Xa(Z("i"));
        var b = a.Vd(a.Sa[a.za]);
        a.za += 1;
        return b;
      }
      function Os(a) {
        a.Ce = false;
      }
      function Vk(a) {
        a.Ce = true;
      }
      function Ns(a) {
        a.za = a.Sa.length;
      }
      function ne(a) {
        return a.Ce || a.Sa.length <= a.za;
      }
      function Sb(a) {
        a = ma(a);
        return Math.round(a(Wk) / 50);
      }
      function Wk(a) {
        var b = t(a.Lc), c = b.next().value;
        b = b.next().value;
        a = c && b ? b() : ea(a) - a.$h;
        return Math.round(a);
      }
      function fh(a) {
        return Math.round(ea(a) / 1e3);
      }
      function yb(a) {
        return Math.floor(ea(a) / 1e3 / 60);
      }
      function ea(a) {
        var b = a.Ke;
        return 0 !== b ? b : qh(a.l, a.Lc);
      }
      function bh(a) {
        var b = na(a), c = Xk(a), d = { l: a, Ke: 0, Lc: c, $h: qh(a, c) }, e = t(c);
        c = e.next().value;
        e = e.next().value;
        c && e || b.F(a, ["beforeunload", "unload"], function() {
          0 === d.Ke && (d.Ke = qh(a, d.Lc));
        });
        return Ha(d);
      }
      function Rs(a) {
        return (10 > a ? "0" : "") + a;
      }
      function Ss(a, b) {
        return a.clearInterval(b);
      }
      function Ts(a, b, c, d) {
        return a.setInterval(E(a, "i.err." + (d || "def"), b), c);
      }
      function Y(a, b, c, d) {
        return je(a, E(a, "d.err." + (d || "def"), b), c);
      }
      function Qd(a) {
        var b = {};
        return { F: function(c, d) {
          z(function(e) {
            n(b, e) || (b[e] = dk(a));
            b[e].F(d);
          }, c);
          return this;
        }, ga: function(c, d) {
          z(function(e) {
            n(b, e) && b[e].ga(d);
          }, c);
          return this;
        }, $: function(c, d) {
          return n(b, c) ? E(a, "e." + c, b[c].$, [])(d) : [];
        } };
      }
      function dk(a) {
        var b = [], c = { Qj: b };
        c.F = y(Qa("push", b), x(c, T));
        c.ga = y(db(ac(a))(b), db(Qa("splice", b))(1), x(c, T));
        c.$ = y(T, db(Ba), Us(b));
        return c;
      }
      function Yk(a, b, c, d, e, f) {
        a = Vs(a);
        var g = a.F, h = a.ga;
        f = f ? h : g;
        if (b[f]) if (a.bj) if (e) b[f](c, d, e);
        else b[f](c, d);
        else b[f]("on" + c, d);
      }
      function D(a, b, c) {
        return function() {
          return E(arguments[0], a, b, c).apply(this, arguments);
        };
      }
      function E(a, b, c, d, e) {
        var f = c || Xa;
        return function() {
          var g = d;
          try {
            g = f.apply(e || null, arguments);
          } catch (h) {
            nd(a, b, h);
          }
          return g;
        };
      }
      function qh(a, b) {
        var c = t(b || Xk(a)), d = c.next().value;
        c = c.next().value;
        return !isNaN(d) && P(c) ? Math.round(c() + d) : a.Date.now ? a.Date.now() : new a.Date().getTime();
      }
      function Xk(a) {
        a = de(a);
        var b = n(a, "timing.navigationStart"), c = n(a, "now");
        c && (c = I(c, a));
        return [b, c];
      }
      function de(a) {
        return n(a, "performance") || n(a, "webkitPerformance");
      }
      function nd(a, b, c) {
        var d = "u.a.e", e = "";
        c && ("object" === typeof c ? (c.unk && Xa(c), d = c.message, e = "string" === typeof c.stack && c.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + c);
        Ws(d) || Va(x(d, kb), Xs) || Ys(d) && 0.1 <= a.Math.random() || z(y(T, wf(["jserrs", d, b, e]), Ba), Zk);
      }
      function Ee() {
        var a = Ua(arguments);
        return Xa(Ya(a));
      }
      function Ya(a) {
        var b = "";
        G(a) ? b = J(
          ".",
          a
        ) : Q(a) && (b = a);
        return Z("err.kn(" + Da.eb + ")" + b);
      }
      function ok(a) {
        return Z("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50));
      }
      function Zs(a) {
        this.message = a;
      }
      function wb(a, b) {
        if (Gf(a)) {
          var c = b.counterKey;
          if (c) {
            var d = t(c.split(":"));
            c = d.next().value;
            d = d.next().value;
            c = rh(Ye(c));
            if ("1" === d || c) return;
          }
          c = $s(a);
          1e3 === c.length && c.shift();
          c.push(b);
        }
      }
      function sj(a, b, c) {
        oe(a, "metrika_enabled", "1", 0, b, c, true);
        var d = $k(a);
        (d = d && d.metrika_enabled) && oe(a, "metrika_enabled", "", -100, b, c, true);
        return !!d;
      }
      function oe(a, b, c, d, e, f, g) {
        g = void 0 === g ? false : g;
        if (tj(a, Yd, b)) {
          var h = b + "=" + encodeURIComponent(c) + ";";
          h += "" + at(a);
          if (d) {
            var k = /* @__PURE__ */ new Date();
            k.setTime(k.getTime() + 6e4 * d);
            h += "expires=" + k.toUTCString() + ";";
          }
          e && (d = e.replace(bt, ""), h += "domain=" + d + ";");
          try {
            a.document.cookie = h + ("path=" + (f || "/")), g || (al(a)[b] = c);
          } catch (l) {
          }
        }
      }
      function Yd(a, b) {
        var c = al(a);
        return c ? c[b] || null : null;
      }
      function $k(a) {
        try {
          var b = a.document.cookie;
          if (!fa(b)) {
            var c = {};
            z(function(d) {
              var e = t(d.split("="));
              d = e.next().value;
              e = e.next().value;
              c[eb(d)] = eb(sh(e));
            }, (b || "").split(";"));
            return c;
          }
        } catch (d) {
        }
        return null;
      }
      function tj(a, b, c) {
        return !th.length || H(c, Hf) ? true : N(function(d, e) {
          return d && e(a, b, c);
        }, true, th);
      }
      function fd(a) {
        return a ? y(Ca, bl(function(b, c) {
          var d = t(c), e = d.next().value;
          d = d.next().value;
          R(d) || fa(d) || b.push(e + "=" + Pd(d));
          return b;
        }, []), lf("&"))(a) : "";
      }
      function cl(a) {
        return a ? y(Tb(function(b) {
          var c = t(b.split("="));
          b = c.next().value;
          c = c.next().value;
          return [b, fa(c) ? void 0 : sh(c)];
        }), bl(function(b, c) {
          var d = t(c), e = d.next().value;
          d = d.next().value;
          b[e] = d;
          return b;
        }, {}))(a.split("&")) : {};
      }
      function sh(a) {
        var b = "";
        try {
          b = decodeURIComponent(a);
        } catch (c) {
        }
        return b;
      }
      function Pd(a) {
        try {
          return encodeURIComponent(a);
        } catch (b) {
        }
        a = J("", oa(function(b) {
          return 55296 >= b.charCodeAt(0);
        }, a.split("")));
        return encodeURIComponent(a);
      }
      function eb(a, b) {
        if (a) {
          var c = dl ? dl.call(a) : ("" + a).replace(tk, "");
          return b && c.length > b ? c.substring(0, b) : c;
        }
        return "";
      }
      function kk(a) {
        if (a = a.match(el)) {
          var b = t(a);
          b.next();
          a = b.next().value;
          if (b = b.next().value) return H(b, uh) ? b : false;
          if (a) return uh[0];
        }
        return false;
      }
      function W(a) {
        return N(function(b, c) {
          var d = n(a, "location." + c);
          b[c] = d ? "" + d : "";
          return b;
        }, {}, ct);
      }
      function bn(a, b) {
        return N(function(c, d) {
          var e = t(d), f = e.next().value, g = e.next().value;
          e = g.Ua;
          g = a[g.da];
          c[f] = e ? e(g) : g;
          return c;
        }, {}, Ca(b));
      }
      function an(a, b, c, d) {
        var e = {};
        return la(a) ? a : (e.id = a, e.type = c, e.defer = d, e.params = b, e);
      }
      function og(a, b) {
        if (pe(a) && b) {
          var c = Fb(a).match(vh);
          if (c && c.length) return +c[1] >= b;
        }
        return false;
      }
      function pg(a, b) {
        var c = Fb(a);
        return c && (c = c.match(dt)) && 1 < c.length ? Oa(c[1]) >= b : false;
      }
      function kh(a) {
        return H(
          "prerender",
          A(x(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"])
        );
      }
      function fb(a, b, c) {
        var d = R(c);
        R(b) && d ? (d = 1, b = 1073741824) : d ? d = 1 : (d = b, b = c);
        return a.Math.floor(a.Math.random() * (b - d)) + d;
      }
      function et() {
        var a = Ua(arguments), b = t(a);
        a = b.next().value;
        for (b = Ta(b); b.length; ) {
          var c = b.shift(), d;
          for (d in c) U(c, d) && (a[d] = c[d]);
          U(c, "toString") && (a.toString = c.toString);
        }
        return a;
      }
      function ft(a) {
        return function(b) {
          return b ? a(b) : [];
        };
      }
      function fl(a) {
        return R(a) ? [] : wh(function(b, c) {
          b.push([c, a[c]]);
          return b;
        }, [], gl(a));
      }
      function gl(a) {
        var b = [], c;
        for (c in a) U(a, c) && b.push(c);
        return b;
      }
      function Le(a, b) {
        return Wa(b) || R(b) || Mb(a, b) || Q(b) || !!b === b;
      }
      function Ye(a) {
        try {
          return parseInt(a, 10);
        } catch (b) {
          return null;
        }
      }
      function Mb(a, b) {
        return a.isFinite(b) && !a.isNaN(b) && "[object Number]" === Object.prototype.toString.call(b);
      }
      function gt(a) {
        for (var b = [], c = a.length - 1; 0 <= c; --c) b[a.length - 1 - c] = a[c];
        return b;
      }
      function Ea(a, b) {
        z(y(T, Qa("push", a)), b);
        return a;
      }
      function jd(a, b) {
        return Array.prototype.sort.call(b, a);
      }
      function Tc(a) {
        return a.splice(
          0,
          a.length
        );
      }
      function Ka(a) {
        return a ? G(a) ? a : Id ? Id(a) : "number" === typeof a.length && 0 <= a.length ? hl(a) : [] : [];
      }
      function ht(a, b) {
        for (var c = 0; c < b.length; c += 1) if (c in b && a.call(b, b[c], c)) return true;
        return false;
      }
      function it(a, b) {
        return N(function(c, d, e) {
          d = a(d, e);
          return c.concat(G(d) ? d : [d]);
        }, [], b);
      }
      function il(a, b) {
        return N(function(c, d, e) {
          c.push(a(d, e));
          return c;
        }, [], b);
      }
      function jt(a, b) {
        if (!pe(a)) return true;
        try {
          b.call({ 0: true, length: -Math.pow(2, 32) + 1 }, function() {
            throw 1;
          });
        } catch (c) {
          return false;
        }
        return true;
      }
      function xh(a, b) {
        return -1 !== (n(b, "navigator.userAgent") || "").toLowerCase().search(a);
      }
      function kt(a, b) {
        for (var c = "", d = 0; d < b.length; d += 1) c += "" + (d ? a : "") + b[d];
        return c;
      }
      function lt(a, b) {
        return 1 <= jl(Ia(a), b).length;
      }
      function mt(a, b) {
        for (var c = 0; c < b.length; c += 1) if (a.call(b, b[c], c)) return b[c];
      }
      function jl(a, b) {
        return wh(function(c, d, e) {
          a(d, e) && c.push(d);
          return c;
        }, [], b);
      }
      function ff(a, b, c) {
        return c ? a : b;
      }
      function nt(a, b) {
        return N(function(c, d, e) {
          return c ? !!a(d, e) : false;
        }, true, b);
      }
      function Wg(a, b, c) {
        try {
          if (P(b)) {
            var d = t(Ua(arguments));
            d.next();
            d.next();
            d.next();
            var e = Ta(d);
            b.apply(fa(c) ? null : c, e);
          }
        } catch (f) {
          je(a, x(f, Xa), 0);
        }
      }
      function Xa(a) {
        throw a;
      }
      function je(a, b, c) {
        return gd("setTimeout", a)(b, c);
      }
      function ra(a, b) {
        return gd("clearTimeout", a)(b);
      }
      function If() {
        return [];
      }
      function tc() {
        return {};
      }
      function gd(a, b) {
        var c = n(b, a), d = n(b, "constructor.prototype." + a) || c;
        try {
          if (d && d.apply) return function() {
            return d.apply(b, arguments);
          };
        } catch (e) {
          return c;
        }
        return d;
      }
      function bc(a, b, c) {
        return function() {
          var d = L(arguments[0]), e = c ? "global" : "m1541", f = d.C(e, {}), g = n(f, a);
          g || (g = u(b), f[a] = g, d.D(e, f));
          return g.apply(null, arguments);
        };
      }
      function $e(a, b) {
        b = void 0 === b ? {} : b;
        if (!a || 1 > a.length) return b;
        Rb(function(c, d, e) {
          if (e === a.length - 1) return c;
          e === a.length - 2 ? c[d] = a[e + 1] : U(c, d) || (c[d] = {});
          return c[d];
        }, b, a);
        return b;
      }
      function qe(a) {
        a = a.Ya = a.Ya || {};
        var b = a._metrika = a._metrika || {};
        return { sa: function(c, d) {
          U(b, c) || (b[c] = d);
          return this;
        }, D: function(c, d) {
          b[c] = d;
          return this;
        }, C: function(c, d) {
          var e = b[c];
          return U(b, c) || R(d) ? e : d;
        } };
      }
      function U(a, b) {
        return fa(a) ? false : ot.call(a, b);
      }
      function u(a, b) {
        var c = [], d = [];
        var e = b ? b : T;
        return function() {
          var f = Ua(arguments), g = e.apply(null, Za(f)), h = Ne(g, d);
          if (-1 !== h) return c[h];
          f = a.apply(null, Za(f));
          c.push(f);
          d.push(g);
          return f;
        };
      }
      function ac(a) {
        if (yh) return yh;
        var b = false;
        try {
          b = [].indexOf && 0 === [void 0].indexOf(void 0);
        } catch (d) {
        }
        var c = a.Array && a.Array.prototype && ua(a.Array.prototype.indexOf, "indexOf");
        return yh = a = b && c ? function(d, e) {
          return c.call(e, d);
        } : pt;
      }
      function pt(a, b) {
        for (var c = 0; c < b.length; c += 1) if (b[c] === a) return c;
        return -1;
      }
      function Ba(a, b) {
        return b ? a(b) : a();
      }
      function y() {
        var a = Ua(arguments), b = a.shift();
        return function() {
          var c = b.apply(null, arguments);
          return N(kl, c, a);
        };
      }
      function bl(a, b) {
        return F([a, b], N);
      }
      function wh(a, b, c) {
        for (var d = 0, e = c.length; d < e; ) b = a(b, c[d], d), d += 1;
        return b;
      }
      function Eb(a) {
        return Qa("test", a);
      }
      function Qa(a, b) {
        return I(b[a], b);
      }
      function x(a, b) {
        return I(b, null, a);
      }
      function F(a, b) {
        return I.apply(null, [b, null].concat(Za(a)));
      }
      function qt(a) {
        return function() {
          var b = Ua(arguments), c = t(b);
          b = c.next().value;
          var d = c.next().value;
          c = Ta(c);
          return a.apply(
            b,
            [d].concat(c)
          );
        };
      }
      function rt() {
        var a = Ua(arguments);
        a = t(a);
        var b = a.next().value, c = a.next().value, d = Ta(a);
        return function() {
          var e = [].concat(Za(d), Za(Ua(arguments)));
          if (Function.prototype.call) return Function.prototype.call.apply(b, [c].concat(Za(e)));
          if (c) {
            for (var f = "_b"; c[f]; ) f += "_" + f.length;
            c[f] = b;
            e = c[f] && ll(f, e, c);
            delete c[f];
            return e;
          }
          return ll(b, e);
        };
      }
      function ll(a, b, c) {
        b = void 0 === b ? [] : b;
        c = c || {};
        var d = b.length, e = a;
        P(e) && (e = "d", c[e] = a);
        var f;
        d ? 1 === d ? f = c[e](b[0]) : 2 === d ? f = c[e](b[0], b[1]) : 3 === d ? f = c[e](
          b[0],
          b[1],
          b[2]
        ) : 4 === d && (f = c[e](b[0], b[1], b[2], b[3])) : f = c[e]();
        return f;
      }
      function Ua(a) {
        if (Id) try {
          return Id(a);
        } catch (b) {
        }
        return hl(a);
      }
      function hl(a) {
        for (var b = a.length, c = [], d = 0; d < b; d += 1) c.push(a[d]);
        return c;
      }
      function la(a) {
        return !Wa(a) && !R(a) && "[object Object]" === Object.prototype.toString.call(a);
      }
      function fa(a) {
        return R(a) || Wa(a);
      }
      function P(a) {
        return "function" === typeof a;
      }
      function db(a) {
        return function(b) {
          return function(c) {
            return a(c, b);
          };
        };
      }
      function va(a) {
        return function(b) {
          return function(c) {
            return a(b, c);
          };
        };
      }
      function kl(a, b) {
        return b(a);
      }
      function Tr(a) {
        return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(ah, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}");
      }
      function st(a) {
        return "" + a;
      }
      function kb(a, b) {
        return !(!a || -1 === xb(a, b));
      }
      function Ec(a, b) {
        return xb(a, b);
      }
      function tt(a, b) {
        for (var c = 0, d = a.length - b.length, e = 0; e < a.length; e += 1) {
          c = a[e] === b[c] ? c + 1 : 0;
          if (c === b.length) return e - b.length + 1;
          if (!c && e > d) break;
        }
        return -1;
      }
      function Q(a) {
        return "string" === typeof a;
      }
      function ua(a, b) {
        return Pa(b, a) && a;
      }
      function Pa(a, b) {
        var c = Jf(a, b);
        b && !c && zh.push([a, b]);
        return c;
      }
      function Jf(a, b) {
        if (!b || "function" !== typeof b) return false;
        try {
          var c = "" + b;
        } catch (h) {
          return false;
        }
        var d = c.length;
        if (d > 35 + a.length) return false;
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
          f = "[native code]"[f] === c[g] || 7 === f && "-" === c[g] ? f + 1 : 0;
          if (12 === f) return true;
          if (!f && g > e) break;
        }
        return false;
      }
      function C() {
      }
      function hd(a) {
        return !a;
      }
      function ob(a, b) {
        return b;
      }
      function T(a) {
        return a;
      }
      function n(a, b) {
        return a ? N(function(c, d) {
          if (fa(c)) return c;
          try {
            return c[d];
          } catch (e) {
          }
          return null;
        }, a, b.split(".")) : null;
      }
      function ut(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      }
      function vt() {
      }
      function wt(a, b) {
        return function() {
          a.apply(b, arguments);
        };
      }
      function Ma(a) {
        if (!(this instanceof Ma)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this.Ja = 0;
        this.Re = false;
        this.Pa = void 0;
        this.Ab = [];
        ml(a, this);
      }
      function nl(a, b) {
        for (; 3 === a.Ja; ) a = a.Pa;
        0 === a.Ja ? a.Ab.push(b) : (a.Re = true, Ma.Se(function() {
          var c = 1 === a.Ja ? b.Bi : b.Fi;
          if (null === c) (1 === a.Ja ? Ah : re)(b.promise, a.Pa);
          else {
            try {
              var d = c(a.Pa);
            } catch (e) {
              re(b.promise, e);
              return;
            }
            Ah(b.promise, d);
          }
        }));
      }
      function Ah(a, b) {
        try {
          if (b === a) throw new TypeError("A promise cannot be resolved with itself.");
          if (b && ("object" === typeof b || "function" === typeof b)) {
            var c = b.then;
            if (b instanceof Ma) {
              a.Ja = 3;
              a.Pa = b;
              Bh(a);
              return;
            }
            if ("function" === typeof c) {
              ml(wt(
                c,
                b
              ), a);
              return;
            }
          }
          a.Ja = 1;
          a.Pa = b;
          Bh(a);
        } catch (d) {
          re(a, d);
        }
      }
      function re(a, b) {
        a.Ja = 2;
        a.Pa = b;
        Bh(a);
      }
      function Bh(a) {
        2 === a.Ja && 0 === a.Ab.length && Ma.Se(function() {
          a.Re || Ma.Lg(a.Pa);
        });
        for (var b = 0, c = a.Ab.length; b < c; b++) nl(a, a.Ab[b]);
        a.Ab = null;
      }
      function xt(a, b, c) {
        this.Bi = "function" === typeof a ? a : null;
        this.Fi = "function" === typeof b ? b : null;
        this.promise = c;
      }
      function ml(a, b) {
        var c = false;
        try {
          a(function(d) {
            c || (c = true, Ah(b, d));
          }, function(d) {
            c || (c = true, re(b, d));
          });
        } catch (d) {
          c || (c = true, re(b, d));
        }
      }
      function Jd(a, b, c) {
        b = void 0 === b ? "_ym_" : b;
        c = void 0 === c ? "" : c;
        var d = yt(a), e = 1 === (d || "").split(".").length ? d : "." + d, f = c ? "_" + c : "";
        return { kc: function(g, h, k) {
          oe(a, "" + b + g + f, "", -100, h || e, k, false);
          return this;
        }, C: function(g) {
          return Yd(a, "" + b + g + f);
        }, D: function(g, h, k, l, m) {
          oe(a, "" + b + g + f, h, k, l || e, m);
          return this;
        } };
      }
      function jc(a, b) {
        if (!b) return null;
        try {
          return a.JSON.parse(b);
        } catch (c) {
          return null;
        }
      }
      function Cc(a) {
        a = "" + a;
        for (var b = 2166136261, c = a.length, d = 0; d < c; d += 1) b ^= a.charCodeAt(d), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0;
      }
      function hc(a, b) {
        var c = zt(a);
        return c ? (c.href = b, { protocol: c.protocol, host: c.host, port: c.port, hostname: c.hostname, hash: c.hash, search: c.search, query: c.search.replace(/^\?/, ""), pathname: c.pathname || "/", path: (c.pathname || "/") + c.search, href: c.href }) : {};
      }
      function ol(a) {
        return (a = W(a).hash.split("#")[1]) ? a.split("?")[0] : "";
      }
      function At(a, b) {
        var c = ol(a);
        pl = Ts(a, function() {
          var d = ol(a);
          d !== c && (b(), c = d);
        }, 200, "t.h");
        return I(Ss, null, a, pl);
      }
      function Bt(a, b, c, d) {
        var e = b.ca, f = b.Ne, g = b.sc, h = L(a), k = {};
        k = La((k.wh = 1, k.pv = 1, k));
        var l = n(d, "isTrusted");
        d && !fa(l) && k.D("ite", Ab(l));
        Ge(e) && a.Ya && a.Ya.Direct && k.D("ad", "1");
        f && k.D("ut", "1");
        e = h.C("lastReferrer");
        d = W(a).href;
        f = {};
        g = { H: (f["page-url"] = g || d, f["page-ref"] = e, f), K: k };
        c(g, b)["catch"](E(a, "g.s"));
        h.D("lastReferrer", d);
      }
      function Ct(a, b, c) {
        function d() {
          q || (r = true, v = false, q = true, f());
        }
        function e() {
          m = true;
          k(false);
          b();
        }
        function f() {
          ra(a, l);
          if (m) k(false);
          else {
            var pa = Math.max(0, c - (v ? w : w + p(ea) - K));
            pa ? l = Y(a, e, pa, "u.t.d.c") : e();
          }
        }
        function g() {
          v = r = q = true;
          w += p(ea) - K;
          K = p(ea);
          f();
        }
        function h() {
          r || q || (w = 0);
          K = p(ea);
          r = q = true;
          v = false;
          f();
        }
        function k(pa) {
          pa = pa ? S.F : S.Wb;
          pa(a, ["blur"], g);
          pa(a, ["focus"], h);
          pa(a.document, ["click", "mousemove", "keydown", "scroll"], d);
        }
        var l = 0, m = false;
        if (ih(a)) return l = Y(a, b, c, "u.t.d"), F([a, l], ra);
        var p = ma(a), r = false, q = false, v = true, w = 0, K = p(ea), S = na(a);
        k(true);
        f();
        return function() {
          ra(a, l);
          k(false);
        };
      }
      function Hb(a, b) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
        var c = [0, 0, 0, 0];
        c[3] += a[3] * b[3];
        c[2] += c[3] >>> 16;
        c[3] &= 65535;
        c[2] += a[2] * b[3];
        c[1] += c[2] >>> 16;
        c[2] &= 65535;
        c[2] += a[3] * b[2];
        c[1] += c[2] >>> 16;
        c[2] &= 65535;
        c[1] += a[1] * b[3];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[1] += a[2] * b[2];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[1] += a[3] * b[1];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0];
        c[0] &= 65535;
        return [c[0] << 16 | c[1], c[2] << 16 | c[3]];
      }
      function Lc(a, b) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
        var c = [0, 0, 0, 0];
        c[3] += a[3] + b[3];
        c[2] += c[3] >>> 16;
        c[3] &= 65535;
        c[2] += a[2] + b[2];
        c[1] += c[2] >>> 16;
        c[2] &= 65535;
        c[1] += a[1] + b[1];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[0] += a[0] + b[0];
        c[0] &= 65535;
        return [c[0] << 16 | c[1], c[2] << 16 | c[3]];
      }
      function xd(a, b) {
        b %= 64;
        if (32 === b) return [a[1], a[0]];
        if (32 > b) return [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b];
        b -= 32;
        return [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b];
      }
      function tb(a, b) {
        b %= 64;
        return 0 === b ? a : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0];
      }
      function Fa(a, b) {
        return [a[0] ^ b[0], a[1] ^ b[1]];
      }
      function ql(a) {
        a = Fa(a, [0, a[0] >>> 1]);
        a = Hb(a, [4283543511, 3981806797]);
        a = Fa(a, [0, a[0] >>> 1]);
        a = Hb(a, [3301882366, 444984403]);
        return a = Fa(a, [0, a[0] >>> 1]);
      }
      function Dt(a, b) {
        var c = a || "", d = (void 0 === b ? 210 : b) || 0, e = c.length - c.length % 16, f = [0, d];
        d = [0, d];
        for (var g = 0; g < e; g += 16) {
          var h = [a.charCodeAt(g + 4) & 255 | (a.charCodeAt(g + 5) & 255) << 8 | (a.charCodeAt(g + 6) & 255) << 16 | (a.charCodeAt(g + 7) & 255) << 24, a.charCodeAt(g) & 255 | (a.charCodeAt(g + 1) & 255) << 8 | (a.charCodeAt(g + 2) & 255) << 16 | (a.charCodeAt(g + 3) & 255) << 24], k = [a.charCodeAt(g + 12) & 255 | (a.charCodeAt(g + 13) & 255) << 8 | (a.charCodeAt(g + 14) & 255) << 16 | (a.charCodeAt(g + 15) & 255) << 24, a.charCodeAt(g + 8) & 255 | (a.charCodeAt(g + 9) & 255) << 8 | (a.charCodeAt(g + 10) & 255) << 16 | (a.charCodeAt(g + 11) & 255) << 24];
          h = Hb(h, Kf);
          h = xd(h, 31);
          h = Hb(h, Lf);
          f = Fa(f, h);
          f = xd(f, 27);
          f = Lc(f, d);
          f = Lc(Hb(f, [0, 5]), [0, 1390208809]);
          k = Hb(k, Lf);
          k = xd(k, 33);
          k = Hb(k, Kf);
          d = Fa(d, k);
          d = xd(d, 31);
          d = Lc(d, f);
          d = Lc(Hb(d, [0, 5]), [0, 944331445]);
        }
        e = c.length % 16;
        g = c.length - e;
        h = [0, 0];
        k = [0, 0];
        switch (e) {
          case 15:
            k = Fa(k, tb([0, c.charCodeAt(g + 14)], 48));
          case 14:
            k = Fa(k, tb([0, c.charCodeAt(g + 13)], 40));
          case 13:
            k = Fa(k, tb([0, c.charCodeAt(g + 12)], 32));
          case 12:
            k = Fa(k, tb([0, c.charCodeAt(g + 11)], 24));
          case 11:
            k = Fa(k, tb(
              [0, c.charCodeAt(g + 10)],
              16
            ));
          case 10:
            k = Fa(k, tb([0, c.charCodeAt(g + 9)], 8));
          case 9:
            k = Fa(k, [0, c.charCodeAt(g + 8)]), k = Hb(k, Lf), k = xd(k, 33), k = Hb(k, Kf), d = Fa(d, k);
          case 8:
            h = Fa(h, tb([0, c.charCodeAt(g + 7)], 56));
          case 7:
            h = Fa(h, tb([0, c.charCodeAt(g + 6)], 48));
          case 6:
            h = Fa(h, tb([0, c.charCodeAt(g + 5)], 40));
          case 5:
            h = Fa(h, tb([0, c.charCodeAt(g + 4)], 32));
          case 4:
            h = Fa(h, tb([0, c.charCodeAt(g + 3)], 24));
          case 3:
            h = Fa(h, tb([0, c.charCodeAt(g + 2)], 16));
          case 2:
            h = Fa(h, tb([0, c.charCodeAt(g + 1)], 8));
          case 1:
            h = Fa(h, [0, c.charCodeAt(g)]), h = Hb(h, Kf), h = xd(h, 31), h = Hb(h, Lf), f = Fa(f, h);
        }
        f = Fa(f, [0, c.length]);
        d = Fa(d, [0, c.length]);
        f = Lc(f, d);
        d = Lc(d, f);
        f = ql(f);
        d = ql(d);
        f = Lc(f, d);
        d = Lc(d, f);
        return ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8);
      }
      function $d(a, b, c) {
        var d = b.getAttribute("itemtype");
        c = Bb('[itemprop~="' + c + '"]', b);
        return d ? oa(function(e) {
          return e.parentNode && oc("[itemtype]", a, e.parentNode) === b;
        }, c) : c;
      }
      function nb(a, b, c) {
        return (a = $d(
          a,
          b,
          c
        )) && a.length ? a[0] : null;
      }
      function mb(a) {
        if (!a) return "";
        a = G(a) ? a : [a];
        return a.length ? a[0].getAttribute("content") || Xb(a[0]) : "";
      }
      function wj(a) {
        return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : mb(a) : "";
      }
      function Xd(a, b, c) {
        a = b && (kb(b.className, "ym-disable-keys") || kb(b.className, "-metrika-nokeys"));
        return c && b ? a || !!Fs(["ym-disable-keys", "-metrika-nokeys"], b).length : a;
      }
      function Eg(a, b) {
        return Cf(b) ? "password" === b.type || b.name && H(b.name.toLowerCase(), rl) || b.id && H(
          b.id.toLowerCase(),
          rl
        ) : false;
      }
      function sl(a, b) {
        var c = Math.max(0, Math.min(b, 65535));
        Ea(a, [c >> 8, c & 255]);
      }
      function mc(a, b) {
        Ea(a, [b & 255]);
      }
      function sb(a, b, c) {
        return -1 !== ac(a)(c, Et) ? (mc(b, c), false) : true;
      }
      function X(a, b) {
        for (var c = Math.max(0, b | 0); 127 < c; ) Ea(a, [c & 127 | 128]), c >>= 7;
        Ea(a, [c]);
      }
      function Ch(a, b) {
        X(a, b.length);
        for (var c = 0; c < b.length; c += 1) X(a, b.charCodeAt(c));
      }
      function Dh(a, b) {
        var c = b;
        255 < c.length && (c = c.substr(0, 255));
        a.push(c.length);
        for (var d = 0; d < c.length; d += 1) sl(a, c.charCodeAt(d));
      }
      function Ft(a, b) {
        var c = [];
        if (sb(a, c, 27)) return [];
        X(c, b);
        return c;
      }
      function Gt(a, b) {
        var c = Ra(b);
        if (!c) return b[ib] = -1, null;
        var d = +b[ib];
        if (!isFinite(d) || 0 >= d) return null;
        if (b.attributes) for (var e = b; e; ) {
          if (e.attributes.Cj) return null;
          e = e.parentElement;
        }
        e = 64;
        var f = Af(a, b), g = f && f[ib] ? f[ib] : 0;
        0 > g && (g = 0);
        c = (c || "").toUpperCase();
        var h = Ht()[c];
        h || (e |= 2);
        var k = Ck(a, b);
        k || (e |= 4);
        var l = Hg(a, b);
        (f = f ? Hg(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
        Yc[d].Lf = l[0] + "x" + l[1];
        Yc[d].size = l[2] + "x" + l[3];
        b.id && "string" === typeof b.id && (e |= 32);
        f = [];
        if (sb(a, f, 1)) return null;
        X(f, d);
        mc(f, e);
        X(f, g);
        h ? mc(f, h) : Dh(f, c);
        k && X(f, k);
        e & 8 || (X(f, l[0]), X(f, l[1]), X(f, l[2]), X(f, l[3]));
        e & 32 && Dh(f, b.id);
        mc(f, 0);
        return f;
      }
      function It(a, b) {
        var c = b[ib];
        if (!c || 0 > c || !Fg(b) || !b.form || qj(a, b.form)) return [];
        var d = Gk(a, b.form);
        if (0 > d) return [];
        if (Cf(b)) var e = { text: 0, color: 0, jc: 0, Gj: 0, "datetime-local": 0, email: 0, Jf: 0, Sj: 0, search: 0, Zj: 0, time: 0, url: 0, month: 0, ak: 0, password: 2, Rj: 3, Ej: 4, file: 6, image: 7 }[b.type];
        else {
          e = { zj: 1, Aj: 5 };
          var f = Ra(b);
          e = R(f) ? "" : e[f];
        }
        if ("number" !== typeof e) return [];
        f = -1;
        for (var g = b.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1) if (g[k].name === b.name) {
          if (g[k] === b) {
            f = l;
            break;
          }
          l += 1;
        }
        if (0 > f) return [];
        g = [];
        if (sb(a, g, 7)) return [];
        X(g, c);
        X(g, d);
        X(g, e);
        Ch(g, b.name || "");
        X(g, f);
        return g;
      }
      function Xc(a, b, c) {
        c = void 0 === c ? [] : c;
        for (var d = []; b && !Qp(a, b, c); b = Af(a, b)) d.push(b);
        z(function(e) {
          Yc.counter += 1;
          var f = Yc.counter;
          e[ib] = f;
          Yc[f] = {};
          f = Gt(a, e);
          e = It(a, e);
          f && e && (Ea(c, f), Ea(c, e));
        }, Jt(d));
        return c;
      }
      function Kt(a) {
        var b = a.na;
        if (!Wd || b && !b.fromElement) return nj(a);
      }
      function Lt(a) {
        var b = a.na;
        if (b && !b.toElement) return Gg(a);
      }
      function tl(a) {
        var b = id(a.na);
        if (b && ef(b)) {
          var c = mj(a, b), d = c.concat;
          var e = a.l;
          a = Sb(a.l);
          var f = [];
          sb(e, f, 17) ? b = [] : (X(f, a), X(f, b[ib]), b = f);
          return d.call(c, b);
        }
      }
      function ul(a) {
        var b = a.l, c = a.na.target;
        if (c && ef(c)) {
          b = Xc(b, c);
          var d = b.concat;
          var e = a.l;
          a = Sb(a.l);
          var f = [];
          sb(e, f, 18) ? c = [] : (X(f, a), X(f, c[ib]), c = f);
          return d.call(b, c);
        }
      }
      function vl(a) {
        var b = a.l, c = id(a.na);
        if (!c || Eg(b, c) || Xd(b, c)) return [];
        if (Fg(c)) {
          var d = L(b).C("isEU"), e = td(b, c, d), f = e.Va;
          d = e.qb;
          e = e.hb;
          if (Df(c)) var g = c.checked;
          else g = c.value, g = f ? J("", wl(g.split(""))) : g;
          b = Xc(b, c);
          f = b.concat;
          var h = a.l;
          a = Sb(a.l);
          var k = [];
          sb(h, k, 39) ? c = [] : (X(k, a), X(k, c[ib]), Dh(k, String(g)), mc(k, d && !e ? 1 : 0), c = k);
          return f.call(b, c);
        }
      }
      function Mf(a) {
        var b = a.l, c = a.na, d = id(c);
        if (!d || "SCROLLBAR" === d.nodeName) return [];
        var e = [], f = x(e, Ea);
        d && ef(d) ? f(mj(a, d)) : f(Xc(b, d));
        var g = Zj(b, c);
        f = e.concat;
        a = Sb(a.l);
        var h = c.type, k = [g.x, g.y];
        g = c.which;
        c = c.button;
        var l = t(Bf(b, d)), m = l.next().value;
        for (l = l.next().value; d && (!m || !l); ) if (d = Af(b, d)) l = t(Bf(b, d)), m = l.next().value, l = l.next().value;
        if (d) if (m = d[ib], !m || 0 > m) b = [];
        else {
          l = {};
          var p = (l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch = 12, l)[h];
          p ? (l = [], d = hh(b, d), sb(b, l, p) ? b = [] : (X(l, a), X(l, m), X(l, Math.max(0, k[0] - d.left)), X(l, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (b = g || c, mc(l, 2 > b ? 1 : b === (g ? 2 : 4) ? 4 : 2)), b = l)) : b = [];
        }
        else b = [];
        return f.call(e, b);
      }
      function Mt(a) {
        var b = null, c = a.l, d = c.document;
        if (c.getSelection) {
          try {
            var e = c.getSelection();
          } catch (g) {
            return [];
          }
          if (Wa(e)) return [];
          var f = "" + e;
          b = e.anchorNode;
        } else d.selection && d.selection.createRange && (b = d.selection.createRange(), f = b.text, b = b.parentElement());
        if ("string" !== typeof f) return [];
        try {
          for (; b && 1 !== b.nodeType; ) b = b.parentNode;
        } catch (g) {
          return [];
        }
        if (!b) return [];
        d = td(c, b).Va || Xd(c, b, true);
        b = b.getElementsByTagName("*");
        for (e = 0; e < b.length && !d; ) d = b[e], d = td(c, d).Va || Xd(c, d, true), e += 1;
        if (f !== Eh) return Eh = f, b = d ? J("", wl(f.split(""))) : f, f = a.l, a = Sb(a.l), 0 === b.length ? b = c = "" : 100 >= b.length ? (c = b, b = "") : 200 >= b.length ? (c = b.substr(0, 100), b = b.substr(100)) : (c = b.substr(0, 97), b = b.substr(b.length - 97)), d = [], sb(f, d, 29) ? a = [] : (X(d, a), Ch(d, c), Ch(d, b), a = d), a;
      }
      function Nt(a) {
        return Mf(a).concat(Mt(a) || []);
      }
      function xl(a) {
        return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0);
      }
      function yl(a) {
        var b = [];
        Fh || (Fh = true, Eh && Ea(b, Ft(a.l, Sb(a.l))), gc(a.l, function() {
          Fh = false;
        }, "fv.c"));
        return b;
      }
      function zl(a, b, c, d) {
        b = id(b);
        if (!b || Ig(a, b)) return [];
        var e = td(a, b), f = e.qb, g = e.hb;
        e = e.Va;
        var h = L(a);
        if (!g && (f && h.C("isEU") || Xd(a, b))) a = [];
        else {
          f = Xc(a, b);
          g = f.concat;
          var k = Sb(a);
          h = [];
          if (sb(a, h, 38)) a = [];
          else {
            X(h, k);
            sl(h, c);
            mc(h, d);
            a = b[ib];
            if (!a || 0 > a) a = 0;
            X(h, a);
            mc(h, e ? 1 : 0);
            a = h;
          }
          a = g.call(f, a);
        }
        return a;
      }
      function Ot(a) {
        var b = a.l, c = a.na, d = c.keyCode, e = xl(c), f = [], g = x(f, Ea);
        if ({ 3: 1, 8: 1, 9: 1, 13: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 27: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 45: 1, 46: 1, 91: 1, 92: 1, 93: 1, 106: 1, 110: 1, 111: 1, 144: 1, 145: 1 }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(zl(b, c, d, e | 16)), Gh = false, gc(b, function() {
          Gh = true;
        }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(yl(a));
        return f;
      }
      function Pt(a) {
        var b = a.l;
        a = a.na;
        var c = [];
        Gh && !Hh && 0 !== a.which && (Ea(c, zl(b, a, a.charCode || a.keyCode, xl(a))), Hh = true, gc(b, function() {
          Hh = false;
        }, "fv.kp"));
        return c;
      }
      function Al(a) {
        var b = a.l, c = id(a.na);
        if (!c || qj(b, c)) return [];
        var d = [];
        if ("FORM" === c.nodeName) {
          for (var e = c.elements, f = 0; f < e.length; f += 1) Fk(e[f]) || Ea(d, Xc(b, e[f]));
          a = Sb(a.l);
          e = Gk(b, c);
          if (0 > e) b = [];
          else {
            f = c.elements;
            var g = f.length;
            c = [];
            for (var h = 0; h < g; h += 1) if (!Fk(f[h])) {
              var k = f[h][ib];
              k && 0 < k && c.push(k);
            }
            f = [];
            if (sb(
              b,
              f,
              11
            )) b = [];
            else {
              X(f, a);
              X(f, e);
              X(f, c.length);
              for (b = 0; b < c.length; b += 1) X(f, c[b]);
              b = f;
            }
          }
          Ea(d, b);
        }
        return d;
      }
      function Qt(a) {
        var b = a.flush;
        a = id(a.na);
        "BODY" === Ra(a) && b();
      }
      function dp(a, b) {
        var c = id(b), d = Da.ec, e = qe(a);
        if (c && Gc("ym-advanced-informer", c)) {
          var f = e.C("ifc", 0) + 1;
          e.D("ifc", f);
          f = c.getAttribute("data-lang");
          var g = Oa(c.getAttribute("data-cid") || "");
          if (g || 0 === g) (d = n(a, "Ya." + d + ".informer")) ? (e = {}, d((e.i = c, e.id = g, e.lang = f, e))) : e.D("ib", true), c = b || window.event, c.preventDefault ? c.preventDefault() : c.returnValue = false;
        }
      }
      function $m(a, b, c, d, e) {
        if (!c.length) return e;
        c = A(function(f) {
          return F([a, b, d], f);
        }, c);
        return y.apply(null, Za(c))(e);
      }
      var yd = { construct: "Metrika2", callbackPostfix: "2", version: "14pwap7gbnncs44thfrhqpu3c8nz", host: "mc.yandex.ru" }, zh = [], ah = /\./g, Bl = ua(String.prototype.indexOf, "indexOf"), xb = Bl ? function(a, b) {
        return Bl.call(a, b);
      } : tt, Ia = va(function(a, b) {
        return a === b;
      }), vd = va(function(a, b) {
        a(b);
        return b;
      }), Ha = va(kl), Wa = Ia(null), R = Ia(void 0), Id = ua(Array.from, "from"), Cl = ua(Function.prototype.bind, "bind"), I = Cl ? qt(Cl) : rt, Dl = ua(Array.prototype.reduce, "reduce"), Rb = Dl ? function(a, b, c) {
        return Dl.call(c, a, b);
      } : wh, N = Rb, qs = y, nf = y(T, Ba), yh, Ne = ac(window), zo = db(Ne), ot = Object.prototype.hasOwnProperty, L = u(qe), ba = db(n), qb = ba("length"), wf = va(F), Rt = va(Qa), El = ua(Array.prototype.every, "every"), Rj = El ? function(a, b) {
        return El.call(b, a);
      } : nt, cc = F([1, null], ff), Ab = F([1, 0], ff), Ib = Boolean, Fl = ua(Array.prototype.filter, "filter"), oa = Fl ? function(a, b) {
        return Fl.call(b, a);
      } : jl, Nb = x(Ib, oa), St = va(oa), Gl = ua(Array.prototype.find, "find"), rb = Gl ? function(a, b) {
        return Gl.call(b, a);
      } : mt, Hl = ua(Array.prototype.includes, "includes"), H = Hl ? function(a, b, c) {
        return Hl.call(b, a, c);
      } : lt, Qc = db(H), Il = ua(Array.prototype.join, "join"), J = Il ? function(a, b) {
        return Il.call(b, a);
      } : kt, lf = va(J), Jl = u(function(a) {
        var b = n(a, "navigator") || {};
        a = n(b, "userAgent") || "";
        b = n(b, "vendor") || "";
        return { Af: -1 < xb(b, "Apple"), yg: a };
      }), Fb = u(ba("navigator.userAgent")), vh = /Firefox\/([0-9]+)/i, pe = u(function(a) {
        var b = n(a, "document.documentElement.style"), c = n(a, "InstallTrigger");
        a = xh(vh, a);
        vh.lastIndex = 0;
        return !(!(b && "MozAppearance" in b) || fa(c)) || a;
      }), Kl = ua(Array.isArray, "isArray"), G = Kl ? function(a) {
        return Kl(a);
      } : ut, Ll = ua(Array.prototype.map, "map"), Ml = Ll && jt(window, Array.prototype.map) ? function(a, b) {
        return b && 0 < b.length ? Ll.call(b, a) : [];
      } : il, A = Ml, z = Ml, Nl = ua(Array.prototype.flatMap, "flatMap"), Bc = Nl ? function(a, b) {
        return Nl.call(b, a);
      } : it, Tb = va(A), Us = db(A), Ol = ua(Array.prototype.some, "some"), Va = Ol ? function(a, b) {
        return Ol.call(b, a);
      } : ht, Pc = u(ac), sf = ba("0"), Tt = va(jd), Pl = ua(Array.prototype.reverse, "reverse"), Jt = Pl ? function(a) {
        return Pl.call(a);
      } : gt, Ql = db(parseInt), Oa = Ql(10), hf = Ql(2), Rl = ua(Object.keys, "keys"), Sl = ua(Object.entries, "entries"), Ca = Sl ? ft(Sl) : fl, ka = Rl ? function(a) {
        return Rl(a);
      } : gl, Tl = ua(Object.values, "values"), Ut = y(fl, x(ba("1"), il)), Ul = Tl ? function(a) {
        return Tl(a);
      } : Ut, B = Object.assign || et, lj = va(function(a, b) {
        return B({}, a, b);
      }), Xe = u(y(ba("String.fromCharCode"), x("fromCharCode", Pa), hd)), Ih = u(y(Fb, Eb(/ipad|iphone|ipod/i))), Nj = u(function(a) {
        return n(a, "navigator.platform") || "";
      }), ld = u(function(a) {
        a = Jl(a);
        var b = a.yg;
        return a.Af && !b.match("CriOS");
      }), Vt = Eb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/), Wt = Eb(/; wv\)/), ce = u(function(a) {
        a = Fb(a);
        return Wt(a) || Vt(a);
      }), Xt = /Chrome\/(\d+)\./, Yt = u(function(a) {
        return (a = (n(a, "navigator.userAgent") || "").match(Xt)) && a.length ? 76 <= Oa(a[1]) : false;
      }), gf = u(function(a) {
        a = (Fb(a) || "").toLowerCase();
        return kb(a, "android") && kb(a, "mobile");
      }), Zt = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), $t = u(function(a) {
        var b = n(a, "navigator.connection.type");
        if (R(b)) return null;
        a = Pc(a)(b, Zt);
        return -1 === a ? b : "" + a;
      }), ih = u(y(ba("document.addEventListener"), hd)), Vl = u(function(a) {
        var b = n(a, "navigator") || {};
        return N(function(c, d) {
          return c || n(b, d);
        }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"]);
      }), Fi = u(function(a) {
        var b = n(a, "navigator") || {};
        a = Vl(a);
        Q(a) || (a = "", b = n(b, "languages.0"), Q(b) && (a = b));
        return a.toLowerCase().split("-")[0];
      }), zb = u(function(a) {
        return (n(a, "top") || a) !== a;
      }), au = u(ba("top.contentWindow")), bu = u(function(a) {
        var b = false;
        try {
          b = a.navigator.javaEnabled();
        } catch (c) {
        }
        return b;
      }), cu = u(function(a) {
        var b = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "), c = n(a, "external");
        c = n(c, "toString") ? "" + c.toString() : "";
        c = -1 !== xb(c, "Sequentum");
        var d = n(a, "document.documentElement"), e = ["selenium", "webdriver", "driver"];
        return !!(Va(x(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Va(x(n(a, "document"), n), b) || c || d && Va(I(d.getAttribute, d), e));
      }), du = u(function(a) {
        return !!(Va(x(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(Fb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"));
      }), eu = u(function(a) {
        return !(!n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer"));
      }), se = u(function(a) {
        var b = Fb(a) || "", c = b.match(/Mac OS X ([0-9]+)_([0-9]+)/);
        c = c ? [+c[1], +c[2]] : [0, 0];
        b = b.match(/iPhone OS ([1-9]+)_([0-9]+)/);
        return 14 <= (b ? +b[1] : 0) ? true : (Ih(a) || 10 < c[0] || 10 === c[0] && 13 <= c[1]) && ld(a);
      }), dt = /Edg\/(\d+)\./, yf = u(function(a) {
        return se(a) || og(a, 68) || pg(a, 79);
      }), fu = yd.construct, pc = yd.host, Jh = ih(window), Da = { Hg: 24226447, Bg: 26302566, Kg: 51533966, xj: 65446441, Ka: "https:", eb: "1541", ec: fu, Gg: Jh ? 512 : 2048, Eg: Jh ? 512 : 2048, Fg: Jh ? 100 : 400, yj: 100, Ig: "noindex" }, Ge = Ia("1"), O = u(function(a) {
        return a.id + ":" + a.ca;
      }), gu = setTimeout;
      Ma.prototype["catch"] = function(a) {
        return this.then(null, a);
      };
      Ma.prototype.then = function(a, b) {
        var c = new this.constructor(vt);
        nl(this, new xt(a, b, c));
        return c;
      };
      Ma.prototype["finally"] = function(a) {
        var b = this.constructor;
        return this.then(function(c) {
          return b.resolve(a()).then(function() {
            return c;
          });
        }, function(c) {
          return b.resolve(a()).then(function() {
            return b.reject(c);
          });
        });
      };
      Ma.all = function(a) {
        return new Ma(function(b, c) {
          function d(h, k) {
            try {
              if (k && ("object" === typeof k || "function" === typeof k)) {
                var l = k.then;
                if ("function" === typeof l) {
                  l.call(k, function(m) {
                    d(h, m);
                  }, c);
                  return;
                }
              }
              e[h] = k;
              0 === --f && b(e);
            } catch (m) {
              c(m);
            }
          }
          if (!a || "undefined" === typeof a.length) return c(new TypeError("Promise.all accepts an array"));
          var e = Array.prototype.slice.call(a);
          if (0 === e.length) return b([]);
          for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
        });
      };
      Ma.resolve = function(a) {
        return a && "object" === typeof a && a.constructor === Ma ? a : new Ma(function(b) {
          b(a);
        });
      };
      Ma.reject = function(a) {
        return new Ma(function(b, c) {
          c(a);
        });
      };
      Ma.race = function(a) {
        return new Ma(function(b, c) {
          if (!a || "undefined" === typeof a.length) return c(new TypeError("Promise.race accepts an array"));
          for (var d = 0, e = a.length; d < e; d++) Ma.resolve(a[d]).then(b, c);
        });
      };
      Ma.Se = "function" === typeof setImmediate && function(a) {
        setImmediate(a);
      } || function(a) {
        gu(a, 0);
      };
      Ma.Lg = function(a) {
        "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a);
      };
      var M = window.Promise, hu = ua(M, "Promise"), Wl = ua(n(M, "resolve"), "resolve"), Xl = ua(n(M, "reject"), "reject"), Yl = ua(n(M, "all"), "all");
      if (hu && Wl && Xl && Yl) {
        var Nf = function(a) {
          return new Promise(a);
        };
        Nf.resolve = I(Wl, M);
        Nf.reject = I(Xl, M);
        Nf.all = I(Yl, M);
        M = Nf;
      } else M = Ma;
      var rh = Qc([26812653]), iu = u(y(ba("id"), rh), O), ct = "hash host hostname href pathname port protocol search".split(" "), uh = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "), el = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, rf = u(function(a) {
        return (a ? a.replace(/^www\./, "") : "").toLowerCase();
      }), Mj = u(function(a) {
        a = W(a).hostname;
        var b = false;
        a && (b = -1 !== a.search(el));
        return b;
      }), Zl = y(W, ba("protocol"), Ia("https:")), at = u(function(a) {
        return Yt(a) && Zl(a) ? "SameSite=None;Secure;" : "";
      }), tk = /^\s+|\s+$/g, dl = ua(String.prototype.trim, "trim"), Of = va(function(a, b) {
        return b.replace(a, "");
      }), ju = Of(/\s/g), Ve = Of(/\D/g), wi = Of(/\d/g), Hf = ["metrika_enabled"], th = [], al = bc("gsc", $k), bt = /:\d+$/, yt = u(function(a) {
        var b = (W(a).host || "").split(".");
        return 1 === b.length ? b[0] : N(function(c, d, e) {
          e += 1;
          2 <= e && !c && (e = J(".", b.slice(-e)), sj(a, e) && (c = e));
          return c;
        }, "", b);
      }), Zc = u(Jd), Gf = u(function(a) {
        var b = Zc(a), c = "1" === b.C("debug"), d = -1 < Ec(W(a).href, "_ym_debug=1") || -1 < Ec(W(a).href, "_ym_debug=2"), e = a._ym_debug;
        !e && !d || c || (a = W(a), b.D("debug", "1", void 0, a.host));
        return !!(c || e || d);
      }), $s = bc("debuggerEvents", If, true), Xs = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], te, Z = /* @__PURE__ */ function(a) {
        return function(b, c) {
          c = void 0 === c ? false : c;
          if (te) var d = new te(b);
          else Pa("Error", a.Error) ? (te = a.Error, d = new a.Error(b)) : (te = Zs, d = new te(b));
          c && (d.unk = true);
          return d;
        };
      }(window), Ys = Eb(RegExp("^http.")), Ws = Eb(RegExp("^err.kn")), Zk = [], Vs = u(function(a) {
        a = !(!a.addEventListener || !a.removeEventListener);
        return { bj: a, F: a ? "addEventListener" : "attachEvent", ga: a ? "removeEventListener" : "detachEvent" };
      }), ku = u(function(a) {
        var b = false;
        if (!a.addEventListener) return b;
        try {
          var c = Object.defineProperty({}, "passive", { get: function() {
            b = true;
            return 1;
          } });
          a.addEventListener("test", C, c);
        } catch (d) {
        }
        return b;
      }), lu = va(function(a, b) {
        if (null !== b) return a ? B({ capture: true, passive: true }, b || {}) : !!b;
      }), na = u(function(a) {
        var b = ku(a), c = lu(b), d = {};
        return B(d, { F: function(e, f, g, h) {
          z(function(k) {
            var l = c(h);
            Yk(a, e, k, g, l, false);
          }, f);
          return I(d.Wb, d, e, f, g, h);
        }, Wb: function(e, f, g, h) {
          z(function(k) {
            var l = c(h);
            Yk(a, e, k, g, l, true);
          }, f);
        } });
      }), ma = u(bh), Uk = va(function(a, b) {
        for (var c = []; !ne(b); ) {
          var d = Qs(b);
          a(d, function(e) {
            return e(b);
          });
          c.push(d);
        }
        return c;
      }), $l = va(function(a, b) {
        return Ha(function(c, d) {
          return b(c, function(e) {
            try {
              d(a(e));
            } catch (f) {
              c(f);
            }
          });
        });
      }), Kh = va(function(a, b) {
        return Ha(function(c, d) {
          return b(c, function(e) {
            try {
              a(e)(lb(c, d));
            } catch (f) {
              c(f);
            }
          });
        });
      }), nh = [], mh = false, lh = false, am = va(function(a, b) {
        var c = b || {};
        return { l: x(c, T), C: function(d, e) {
          var f = c[d];
          return R(f) && !R(e) ? e : f;
        }, D: function(d, e) {
          c[d] = e;
          return this;
        }, Tb: function(d, e) {
          return "" === e || fa(e) ? this : this.D(d, e);
        }, Ga: x(c, a) };
      }), La = am(function(a) {
        var b = "";
        a = Rb(function(c, d) {
          var e = t(d), f = e.next().value;
          e = e.next().value;
          e = "" + f + ":" + e;
          "t" === f ? b = e : c.push(e);
          return c;
        }, [], Ca(a));
        b && a.push(b);
        return J(":", a);
      }), uc = { id: "id", Ne: "ut", ca: "type", Zd: "ldc", Ta: "nck", sc: "url", Bh: "referrer" }, mu = /^\d+$/, zd = { id: function(a) {
        a = "" + (a || "0");
        mu.test(a) || (a = "0");
        try {
          var b = Oa(a);
        } catch (c) {
          b = 0;
        }
        return b;
      }, ca: function(a) {
        return "" + (a || 0 === a ? a : "0");
      }, Ta: Ib, Ne: Ib };
      uc.nd = "defer";
      zd.nd = Ib;
      uc.O = "params";
      zd.O = function(a) {
        return la(a) || G(a) ? a : null;
      };
      uc.Me = "userParams";
      uc.ug = "triggerEvent";
      zd.ug = Ib;
      uc.dg = "sendTitle";
      zd.dg = function(a) {
        return !!a || R(a);
      };
      uc.He = "trackHash";
      zd.He = Ib;
      uc.sg = "trackLinks";
      uc.lh = "enableAll";
      var Fe = N(function(a, b) {
        var c = t(b), d = c.next().value;
        c = c.next().value;
        a[d] = { da: c, Ua: zd[d] };
        return a;
      }, {}, Ca(uc)), bm = {}, Mk = (bm.w = [[function(a, b) {
        return { R: function(c, d) {
          var e = c.H, f = {};
          e = (f["page-url"] = e && e["page-url"] || "", f.charset = "utf-8", f);
          "0" !== b.ca && (e["cnt-class"] = b.ca);
          c.K || (c.K = La());
          f = c.K;
          e = { ha: { ra: "watch/" + b.id }, N: B(void 0 === c.N ? {} : c.N, { cb: !!f.C("pv") && !f.C("ar") && !f.C("wh") }), H: B(c.H || {}, e) };
          B(c, e);
          d();
        } };
      }, 1]], bm), ue = x(Mk, Ok), ub = Ff("w"), Lk = ["webkitvisibilitychange", "visibilitychange"], lg = am(function(a) {
        a = Ca(a);
        return J("", A(function(b) {
          var c = t(b);
          b = c.next().value;
          c = c.next().value;
          return Wa(c) ? "" : b + "(" + c + ")";
        }, a));
      }), cm = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "), ve = [], Ur = /^\s*(data|javascript):/i, ck = new RegExp(J("", ["\\.(" + J("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"), bb = {}, lk = (bb.hit = "h", bb.params = "p", bb.reachGoal = "g", bb.userParams = "up", bb.trackHash = "th", bb.accurateTrackBounce = "atb", bb.notBounce = "nb", bb.addFileExtension = "fe", bb.extLink = "el", bb.file = "fc", bb.trackLinks = "tl", bb.destruct = "d", bb.setUserID = "ui", bb.getClientID = "ci", bb.clickmap = "cm", bb.enableAll = "ea", bb), nu = u(function() {
        var a = 0;
        return function() {
          return a += 1;
        };
      }), ou = y(O, nu, Ba), eh = { mc: function(a) {
        a = qe(a).C("mt", {});
        a = Ca(a);
        return a.length ? N(function(b, c, d) {
          var e = t(c);
          c = e.next().value;
          e = e.next().value;
          return "" + b + (d ? "-" : "") + c + "-" + e;
        }, "", a) : null;
      }, clc: function(a) {
        var b = L(a).C(
          "cls",
          { dc: 0, x: 0, y: 0 }
        ), c = b.dc, d = b.x;
        b = b.y;
        return c ? c + "-" + a.Math.floor(d / c) + "-" + a.Math.floor(b / c) : c + "-" + d + "-" + b;
      }, rqnt: function(a, b, c) {
        a = c.H;
        return !a || a.nohit ? null : ou(b);
      } }, Ks = u(function(a) {
        Jk(a, "_ymBRC", "1");
        var b = "1" !== Ik(a, "_ymBRC");
        b || Kk(a, "_ymBRC");
        return b;
      }), $a = u(Hk), Ad = u(Hk, function(a, b, c) {
        return "" + b + c;
      }), pu = u(ba("document.documentElement")), qu = u(function(a) {
        a = n(a, "document") || {};
        return ("" + (a.characterSet || a.charset || "")).toLowerCase();
      }), pb = u(y(ba("document"), x("createElement", gd))), rj = u(function(a) {
        var b = n(a, "Element.prototype");
        return b ? (a = rb(function(c) {
          var d = b[c];
          return !!d && Pa(c, d);
        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? b[a] : null : null;
      }), ru = Ia("INPUT"), Cf = y(Ra, ru), su = Ia("TEXTAREA"), Hs = y(Ra, su), tu = Ia("SELECT"), Is = y(Ra, tu), Df = y(ba("type"), Eb(/^(checkbox|radio)$/)), Fg = y(Ra, Eb(/^INPUT|SELECT|TEXTAREA$/)), ef = y(Ra, Eb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), Jg = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), Gs = ["submit", "image", "hidden"], Bk = u(function() {
        for (var a = 59, b = {}, c = 0; c < cm.length; c += 1) b[cm[c]] = String.fromCharCode(a), a += 1;
        return b;
      }), Ak = u(function(a) {
        return { Jj: a, ib: null, sb: [] };
      }), zk = {}, gh = {};
      zk.p = 500;
      var yk = { i: "id", n: "name", h: "href", ty: "type" };
      gh.h = true;
      gh.c = true;
      var zf = { p: function(a, b, c) {
        if (b && Ek(a, b) && b._ymp) return b._ymp;
        a = kg(a, b, c);
        b && (b._ymp = a);
        return a;
      }, c: function(a, b, c) {
        (a = eb(n(b, "textContent"))) && c && (c = c(b), c.length && Va(y(ba("textContent"), eb, Ia(a)), c) && (a = ""));
        Cf(b) && (a = eb(b.getAttribute && b.getAttribute("value") || a));
        return a;
      } }, Tg = "button," + J(",", A(function(a) {
        return 'input[type="' + a + '"]';
      }, ["button", "submit", "reset", "file"])) + ",a", Ir = x(Tg, Bb), we = {}, Hr = (we.A = "h", we.BUTTON = "i", we.DIV = "i", we.INPUT = "ty", we), dm = /\/$/, xk = bc("r", function(a, b) {
        var c = t(wk(a, b)), d = c.next().value;
        return !c.next().value && d;
      }), le = u(function() {
        return { Fa: {}, pending: {}, children: {} };
      }), Lh = ba("postMessage"), uu = D("s.f", function(a, b, c, d, e) {
        b = b(d);
        var f = le(a), g = J(":", [b.meta.jc, b.meta.key]);
        if (Lh(c)) {
          f.pending[g] = e;
          try {
            c.postMessage(b.kg, "*");
          } catch (h) {
            delete f.pending[g];
            return;
          }
          Y(a, function() {
            delete f.pending[g];
          }, 5e3, "if.s");
        }
      }), vu = D("s.fh", function(a, b, c, d, e, f) {
        var g = null, h = null, k = le(a), l = null;
        try {
          g = jc(a, f.data), h = g.__yminfo, l = g.data;
        } catch (m) {
          return;
        }
        if (!fa(h) && h.substring && "__yminfo" === h.substring(0, 8) && !fa(l) && (a = h.split(":"), 4 === a.length)) if (g = b.id, h = t(a), h.next(), b = h.next().value, a = h.next().value, h = h.next().value, !G(l) && l.type && "0" === h && l.counterId) {
          if (!l.toCounter || l.toCounter == g) {
            k = null;
            try {
              k = f.source;
            } catch (m) {
            }
            !Wa(k) && Lh(k) && (f = d.$(l.type, [f, l]), e = A(
              y(T, lj(e)),
              f.concat([void 0])
            ), l = c([b, a, l.counterId], e), k.postMessage(l.kg, "*"));
          }
        } else h === "" + g && G(l) && oa(function(m) {
          return !(!m.hid || !m.counterId);
        }, l).length === l.length && (c = k.pending[J(":", [b, a])]) && c.apply(null, [f].concat(l));
      }), Nd = u(function(a, b) {
        var c = gd("getElementsByTagName", n(a, "document")), d = le(a), e = Lh(a), f = Qd(a), g = na(a);
        if (!c || !e) return null;
        c = c.call(a.document, "iframe");
        e = {};
        e = (e.counterId = b.id, e.hid = "" + ad(a), e);
        yf(a) && (e.duid = me(a, b));
        Bs(a, f);
        Cs(a);
        var h = Ds(a, e), k = F([a, x([], h)], uu);
        z(function(l) {
          var m = null;
          try {
            m = l.contentWindow;
          } catch (p) {
          }
          m && k(m, { type: "initToChild" }, function(p, r) {
            f.$("initToParent", [p, r]);
          });
        }, c);
        zb(a) && k(a.parent, { type: "initToParent" }, function(l, m) {
          f.$("parentConnect", [l, m]);
        });
        g.F(a, ["message"], F([a, b, h, f, e], vu));
        return { Z: f, Fa: d.Fa, children: d.children, we: k };
      }, y(ob, O)), Od = u(function(a, b) {
        if (!yf(a) || !zb(a)) return me(a, b);
        var c = Nd(a, b);
        return c && c.Fa[b.id] ? c.Fa[b.id].info.duid || me(a, b) : me(a, b);
      }, function(a, b) {
        return "{" + b.Zd + b.Ta;
      }), wu = u(y(ma, Ha(function(a) {
        return -new a.l.Date().getTimezoneOffset();
      }))), xu = y(ma, Ha(function(a) {
        a = new a.l.Date();
        return J("", A(Rs, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]));
      })), yu = y(ma, Ha(fh)), em = u(y(ma, Ha(function(a) {
        return t(a.Lc).next().value;
      }))), zu = u(function(a) {
        a = L(a);
        var b = a.C("counterNum", 0) + 1;
        a.D("counterNum", b);
        return b;
      }, y(ob, O)), za = {}, ke = (za.vf = x(yd.version, T), za.nt = $t, za.fu = function(a, b, c) {
        var d = c.H;
        if (!d) return null;
        b = (n(a, "document.referrer") || "").replace(dm, "");
        c = (d["page-ref"] || "").replace(dm, "");
        d = d["page-url"];
        a = W(a).href !== d;
        b = b !== c;
        c = 0;
        a && b ? c = 3 : b ? c = 1 : a && (c = 2);
        return c;
      }, za.en = qu, za.la = Vl, za.ut = function(a, b, c) {
        var d = c.M;
        c = c.H;
        d = d && d.Ec;
        c && (Mj(a) || b.Ne || d) && (c.ut = Da.Ig);
        return null;
      }, za.v = x(Da.eb, T), za.cn = zu, za.dp = function(a) {
        var b = L(a), c = b.C("bt", {});
        if (R(b.C("bt"))) {
          var d = n(a, "navigator.getBattery");
          try {
            c.p = d && d.call(a.navigator);
          } catch (e) {
          }
          b.D("bt", c);
          c.p && c.p.then && c.p.then(E(a, "bi:dp.p", function(e) {
            c.pj = n(e, "charging") && 0 === n(e, "chargingTime");
          }));
        }
        return Ab(c.pj);
      }, za.ls = u(function(a, b) {
        var c = Ad(a, b.id), d = ma(a), e = c.C("lsid");
        return +e ? e : (d = fb(a, 0, d(ea)), c.D("lsid", d), d);
      }, ob), za.hid = ad, za.phid = function(a, b) {
        if (!zb(a)) return null;
        var c = Nd(a, b);
        if (!c) return null;
        var d = ka(c.Fa);
        return d.length ? c.Fa[d[0]].info.hid : null;
      }, za.z = wu, za.i = xu, za.et = yu, za.c = y(ba("navigator.cookieEnabled"), cc), za.rn = y(T, fb), za.rqn = function(a, b, c) {
        c = c.H;
        if (!c || c.nohit) return null;
        b = O(b);
        a = Ad(a, b);
        b = (a.C("reqNum", 0) || 0) + 1;
        a.D("reqNum", b);
        if (a.C("reqNum") === b) return b;
        a.kc("reqNum");
        return null;
      }, za.u = Od, za.w = function(a) {
        var b = t(pd(a));
        a = b.next().value;
        b = b.next().value;
        return a + "x" + b;
      }, za.s = function(a) {
        var b = n(a, "screen");
        if (b) {
          a = n(b, "width");
          var c = n(b, "height");
          b = n(b, "colorDepth") || n(b, "pixelDepth");
          return J("x", [a, c, b]);
        }
        return null;
      }, za.sk = ba("devicePixelRatio"), za.ifr = y(zb, cc), za.j = y(bu, cc), za.sti = function(a) {
        return zb(a) && au(a) ? "1" : null;
      }, za), As = u(function() {
        return Ea(ka(ke), ka(eh));
      }), zs = u(tc, O), uk = u(function() {
        return { ff: null, ya: [] };
      }, O), ws = /^[a-z][\w.+-]+:/i, rc = [[Ef, 1], [xf, 2], [Ub(), 3], [vk, 4]], dh = [], Jb = x(rc, Pk), fm = {}, qc = (fm.h = rc, fm), ha = x(qc, Ok);
      Jb(rk, -100);
      var zt = u(function(a) {
        if (a = pb(a)) return a("a");
      }), Au = /[^a-z0-9.:-]/, Mh = {}, ie = (Mh.x = { id: 2, check: function(a) {
        var b;
        if (b = n(a, "XMLHttpRequest")) {
          if (b = "withCredentials" in new a.XMLHttpRequest()) {
            a: {
              if (Au.test(a.location.host) && a.opera && P(a.opera.version) && (b = a.opera.version(), "string" === typeof b && "12" === b.split(".")[0])) {
                b = true;
                break a;
              }
              b = false;
            }
            b = !b;
          }
        }
        return b ? x(a, ps) : false;
      } }, Mh.i = { id: 4, check: function(a) {
        var b = pb(a);
        return b ? F([a, b], os) : false;
      } }, Mh);
      ie.f = { id: 1, check: function(a) {
        if (a.fetch) {
          var b = n(a, "AbortController");
          return F([a, b ? new b() : void 0], ss);
        }
        return false;
      } };
      ie.b = { id: 0, check: function(a) {
        return !ce(a) && qk(a);
      } };
      ie.j = { id: 3, check: function(a) {
        return pb(a) ? x(a, ts) : false;
      } };
      var ch = {}, vc = ["b", "f", "x", "j", "i"], Pf = ["x"];
      Pf.unshift("f");
      Pf.push("j");
      var Bd = ["i"], gm = ["f", "x"], hm = ["f", "i"], im = {}, Aa = (im.h = Pf, im), Zd = u(function(a, b, c) {
        (c = ns(b) || uf(c)) || (c = uf(b ? Aa[b] : vc));
        b = N(function(d, e) {
          var f = e.check, g = e.id;
          (f = f(a)) && d.push([g, f]);
          return d;
        }, [], c || []);
        b.length || Ee();
        return b;
      }, ob), Bu = I(M.reject, M, Ya()), jm = {}, Ga = (jm.h = ub, jm), xa = D("g.sen", function(a, b, c) {
        var d = Zd(a, b);
        c = c ? vj(a, b, c) : [];
        var e = Ga[b], f = e ? e(a, d, c) : ub(a, d, c);
        return function() {
          var g = t(Ua(arguments)), h = g.next().value;
          g = Ta(g);
          h = B(h, { N: B(void 0 === h.N ? {} : h.N, { ea: [b] }) });
          return f.apply(null, [h].concat(g));
        };
      }, Bu), ks = va(function(a, b) {
        if (!b[a]) {
          var c, d = new M(function(e) {
            c = e;
          });
          b[a] = { Sf: c, promise: d, Tf: false };
        }
        return b[a].promise;
      }), mk = u(y(tc, Ha)), Cu = D("dc.init", function(a, b) {
        return b && rh(Ye(b.split(":")[0])) ? { log: C, warn: C, error: C } : js(a, b);
      }), Kc = u(Cu, ob), dn = D("h.p", function(a, b) {
        var c = xa(a, "h", b), d = b.sc || "" + W(a).href, e = b.Bh || a.document.referrer, f = {}, g = {};
        f = { K: La((f.pv = 1, f)), H: (g["page-url"] = d, g["page-ref"] = e, g), M: {} };
        f.M.O = b.O;
        f.M.Me = b.Me;
        b.nd && f.H && (f.H.nohit = "1");
        return c(f, b).then(function(h) {
          if (h) {
            if (!b.nd) {
              var k = {};
              Ic(a, b, "h", (k.id = b.id, k.url = d, k.ref = e, k), b.O)();
            }
            gc(a, F([a, b, h], ls));
          }
        })["catch"](E(a, "h.g.s"));
      }), km = ["yandex_metrika_callback" + yd.callbackPostfix, "yandex_metrika_callbacks" + yd.callbackPostfix], Du = D("cb.i", function(a) {
        var b = t(km), c = b.next().value, d = b.next().value;
        if (P(a[c])) a[c]();
        "object" === typeof a[d] && z(function(e, f) {
          a[d][f] = null;
          Wg(a, e);
        }, a[d]);
        z(function(e) {
          try {
            delete a[e];
          } catch (f) {
            a[e] = void 0;
          }
        }, km);
      }), Zf = [], Fd = [], da = [], jb = [], Nh = [], Cd = [], is = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/, gs = Of(/[^\d+()]/g), fs = /[a-z\u0430-\u044f\u0451,.]/gi, lm = u(function(a) {
        return !!n(a, "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob");
      }), es = ["yandex_cid", "yandex_public_id"], Eu = D("fpm", function(a, b) {
        if (!Zl(a)) return C;
        var c = O(b);
        if (!lm(a)) return Wb(
          a,
          c,
          "ns"
        ), C;
        var d = Ja(a, b);
        return d ? function(e) {
          return new M(function(f, g) {
            return la(e) ? ka(e).length ? f(ik(a, e).then(function(h) {
              if (h && h.length) {
                var k = {}, l = {};
                d.params((l.__ym = (k.fpp = h, k), l));
              }
            }, C)) : g(Ya("fpm.l")) : g(Ya("fpm.o"));
          })["catch"](E(a, "fpm.en"));
        } : C;
      }), Qf = va(function(a, b) {
        var c = {};
        Zg(a)(function(d) {
          c = d[b] || {};
        });
        return c;
      }), Fu = D("c.c.cc", function(a) {
        var b = L(a), c = y(Qf(a), function(d) {
          var e = {};
          e = (e.clickmap = !!d.clickmap, e);
          return B({}, d, e);
        });
        return E(a, "g.c.cc", y(I(b.C, b, "counters", {}), ka, Tb(c)));
      }), Gu = D("gt.c.rs", function(a, b) {
        var c = O(b), d = b.id, e = b.ca, f = b.Yg, g = b.He, h = F([a, c], cs), k = {};
        Yg(a, c, (k.id = d, k.type = +e, k.clickmap = f, k.trackHash = !!g, k));
        return h;
      }), Jc = {}, fk = u(If), he = u(tc, O), Hu = D("pa.int", function(a, b) {
        var c = {};
        return c.params = function() {
          var d = Ua(arguments), e = as(d);
          if (!e) return null;
          d = e.eh;
          var f = e.O;
          e = e.Zb;
          if (!la(f) && !G(f)) return null;
          var g = xa(a, "1", b), h = he(b).url, k = !iu(b), l = "pa", m = {};
          m = (m.id = b.id, m);
          var p = f, r = "";
          if (r = n(f, "__ym.user_id")) l = "pau", m.uid = r;
          H("__ymu", ka(f)) && (l = "paup");
          p.__ym && (p = B({}, f), p.__ym = N(function(q, v) {
            var w = n(f, "__ym." + v);
            w && (q[v] = w);
            return q;
          }, {}, ve), ka(p.__ym).length || delete p.__ym, k = !!ka(p).length);
          p = r ? void 0 : JSON.stringify(p);
          l = Ic(a, b, l, m, p);
          m = {};
          p = {};
          g = g({ M: { O: f }, K: La((m.pa = 1, m.ar = 1, m)), H: (p["page-url"] = h || W(a).href, p) }, b).then(k ? l : C);
          return wd(a, "p.s", g, e, d);
        }, c;
      }), Ue = u(ek, y(ob, O)), Iu = D("y.p", function(a, b) {
        var c = ek(a, b);
        if (c) {
          var d = Qe(a), e = F([a, c, b], Xr);
          Ki(a, d, function(f) {
            f.F(["params"], e);
          });
          c.Z.F(["params"], y(ba("1"), e));
        }
      }), mm = { Mj: Eb(/[/&=?#]/) }, of = D(
        "go.in",
        function(a, b, c, d) {
          c = void 0 === c ? "goal" : c;
          var e = {};
          return e.reachGoal = function(f, g, h, k) {
            if (!f || mm[c] && mm[c](f)) return null;
            var l = g, m = h || C;
            P(g) && (m = g, l = void 0, k = h);
            g = {};
            var p = Ic(a, b, "gr", (g.id = b.id, g.goal = f, g), l), r = "goal" === c;
            g = xa(a, "g", b);
            var q = t(Wr(a, b, f, c));
            h = q.next().value;
            q = q.next().value;
            var v = {}, w = {};
            g = g({ M: { O: l }, K: La((v.ar = 1, v)), H: (w["page-url"] = h, w["page-ref"] = q, w) }, b).then(function() {
              r && p();
              var K = {}, S = {};
              wb(a, (S.counterKey = O(b), S.name = "event", S.data = (K.schema = c, K.name = f, K.params = l, K), S));
              d && d();
            });
            return wd(a, "g.s", g, m, k);
          }, e;
        }
      ), Ju = D("guid.int", function(a, b) {
        var c = {};
        return c.getClientID = function(d) {
          var e = me(a, b);
          d && Wg(a, d, null, e);
          return e;
        }, c;
      }), pl, Ku = D("th.e", function(a, b) {
        function c() {
          f || (h = U(a, "onhashchange") ? na(a).F(a, ["hashchange"], g) : At(a, g));
        }
        var d = xa(a, "t", b), e = tf(a, O(b)), f = false, g = E(a, "h.h.ch", I(Bt, null, a, b, d)), h = C;
        b.He && (c(), f = true);
        d = E(a, "tr.hs.h", function(l) {
          l ? c() : h();
          f = !!l;
          l = {};
          e((l.trackHash = f, l));
        });
        var k = {};
        return k.trackHash = d, k.u = h, k;
      }), Lu = va(function(a, b) {
        Q(b) ? a.push(b) : z(y(
          T,
          Qa("push", a)
        ), b);
      }), ge = bc("retryReqs", function(a) {
        var b = $a(a), c = b.C("retryReqs", {}), d = ma(a)(ea);
        z(function(e) {
          var f = t(e);
          e = f.next().value;
          f = f.next().value;
          (!f || !f.time || f.time + 864e5 < d) && delete c[e];
        }, Ca(c));
        b.D("retryReqs", c);
        return c;
      }, true), Oc = y(Ec, Ia(0)), nm = db(Oc), Mu = [nm("watch"), nm("clmap")], Nu = D("g.r", function(a) {
        var b = ma(a), c = ge(a), d = b(ea), e = ad(a);
        return Rb(function(f, g) {
          var h = t(g), k = h.next().value;
          (h = h.next().value) && Va(Ha(h.resource), Mu) && !h.d && h.ghid && h.ghid !== e && h.time && 500 < d - h.time && h.time + 864e5 > d && 2 >= h.browserInfo.rqnl && (h.d = 1, k = { protocol: h.protocol, host: h.host, ra: h.resource, Ki: h.postParams, O: h.params, Qg: h.browserInfo, Kj: h.ghid, time: h.time, Qb: Oa(k), ah: h.counterId, ca: h.counterType }, h.telemetry && (k.Ha = h.telemetry), f.push(k));
          return f;
        }, [], Ca(c));
      }), Ou = D("nb.p", function(a, b) {
        function c(w) {
          h() || (w = "number" === typeof w ? w : 15e3, v = Ct(a, d(false), w), l());
        }
        function d(w) {
          return function(K) {
            var S = {};
            K = void 0 === K ? (S.ctx = {}, S.callback = C, S) : K;
            if (w || !r && !g.Rd) {
              r = true;
              l();
              v && v();
              var pa = m(ea);
              S = (Oa(g.C("lastHit")) || 0) < pa - 18e5;
              var Zb = 0.1 > Math.random();
              g.D("lastHit", pa);
              pa = {};
              pa = La((pa.nb = 1, pa.cl = q, pa.ar = 1, pa));
              var xe = he(b), Rf = {};
              pa = { H: (Rf["page-url"] = xe.url || W(a).href, Rf), K: pa, M: { force: w } };
              xe = Kc(a, O(b)).warn;
              !K.callback && K.ctx && xe("nbnc");
              (S = w || S || Zb) || (S = a.location.href, Zb = a.document.referrer, S = !(S && Zb ? pk(S) === pk(Zb) : !S && !Zb));
              if (S) return S = e(pa, b), wd(a, "l.o.l", S, K.callback, K.ctx);
            }
            return null;
          };
        }
        var e = xa(a, "n", b), f = O(b), g = Ad(a, b.id), h = x(x(f, Qf(a)), y(Ba, ba("accurateTrackBounce"))), k = {}, l = x((k.accurateTrackBounce = true, k), tf(a, f)), m = ma(a), p = m(ea), r = false, q = 0, v;
        sa(b, function(w) {
          q = w.uh - p;
        });
        b.Te && c(b.Te);
        f = {};
        f = (f.notBounce = d(true), f.u = v, f);
        f.accurateTrackBounce = c;
        return f;
      }), Pr = va(Gc)("(ym-disable-clickmap|ym-clickmap-ignore)"), Pu = D("clm.p", function(a, b) {
        if (Xe(a)) return C;
        var c = xa(a, "m", b), d = O(b), e = ma(a), f = e(ea), g = x(x(d, Qf(a)), y(Ba, ba("clickmap"))), h, k = null;
        d = E(a, "clm.p.c", function(l) {
          var m = g();
          if (m) {
            var p = L(a), r = p.C("cls", { dc: 0, x: 0, y: 0 });
            p.D("cls", { dc: r.dc + 1, x: r.x + l.clientX, y: r.y + l.clientY });
            p = "object" === typeof m ? m : {};
            r = p.filter;
            m = p.isTrackHash || false;
            var q = A(function(w) {
              return ("" + w).toUpperCase();
            }, p.ignoreTags || []);
            R(h) && (h = p.quota || null);
            var v = !!p.quota;
            l = { element: Qr(a, l), position: Zj(a, l), button: Rr(l), time: e(ea) };
            p = W(a).href;
            if (Or(a, l, k, q, r)) {
              if (v) {
                if (!h) return;
                --h;
              }
              q = t(Bf(a, l.element));
              r = q.next().value;
              q = q.next().value;
              v = hh(a, l.element);
              r = [
                "rn",
                fb(a),
                "x",
                Math.floor(65535 * (l.position.x - v.left) / (r || 1)),
                "y",
                Math.floor(65535 * (l.position.y - v.top) / (q || 1)),
                "t",
                Math.floor((l.time - f) / 100),
                "p",
                kg(a, l.element),
                "X",
                l.position.x,
                "Y",
                l.position.y
              ];
              r = J(":", r);
              m && (r += ":wh:1");
              Nr(a, p, r, c, b);
              k = l;
            }
          }
        });
        return na(a).F(n(a, "document"), ["click"], d);
      }), Qu = D("trigger.in", function(a, b) {
        b.ug && gc(a, F([a, "yacounter" + b.id + "inited"], Js), "t.i");
      }), Ru = D("c.m.p", function(a, b) {
        var c = O(b), d = {};
        return d.clickmap = x(tf(a, c), Mr), d;
      }), Kr = x("form", oc), Lr = u(y(ob, db(sa)(ba("settings.form_goals"))), ob), Su = D("s.f.i", function(a, b) {
        var c = [], d = [], e = na(a);
        c.push(e.F(a, ["click"], E(a, "s.f.c", F([a, b, d], Jr))));
        c.push(e.F(a, ["submit"], E(a, "s.f.e", function(f) {
          var g = n(
            f,
            "target"
          );
          f = n(f, "isTrusted");
          Xj(true, a, b, d, g, f);
        })));
        e = {};
        Yj(a, b, "fgi", (e.id = b.id, e));
        return F([nf, c], z);
      }), Tu = D("s.f.i", function(a, b) {
        return sa(b, function(c) {
          if (n(c, "settings.button_goals")) {
            c = na(a).F(a, ["click"], E(a, "c.t.c", y(F([a, b], Yf(a, b, "", Gr)))));
            var d = {};
            Ic(a, b, "gbi", (d.id = b.id, d))();
            return c;
          }
        });
      }), Mc = {}, Sg = (Mc.transaction_id = "id", Mc.item_brand = "brand", Mc.index = "position", Mc.item_variant = "variant", Mc.value = "revenue", Mc.item_category = "category", Mc.item_list_name = "list", Mc), Sf = {}, Hc = (Sf.item_id = "id", Sf.item_name = "name", Sf.promotion_name = "coupon", Sf), om = {}, Fr = (om.promotion_name = "name", om), ye = {}, pm = (ye.promotion_name = "name", ye.promotion_id = "id", ye.item_id = "product_id", ye.item_name = "product_name", ye), Cr = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "), dc = {}, Dr = (dc.view_item = { event: "detail", Aa: Hc, Ia: "products" }, dc.add_to_cart = { event: "add", Aa: Hc, Ia: "products" }, dc.remove_from_cart = { event: "remove", Aa: Hc, Ia: "products" }, dc.begin_checkout = { event: "checkout", Aa: Hc, Ia: "products" }, dc.purchase = { event: "purchase", Aa: Hc, Ia: "products" }, dc.view_item_list = { event: "impressions", Aa: Hc }, dc.select_item = { event: "click", Ia: "products", Aa: Hc }, dc.view_promotion = { event: "promoView", Ia: "promotions", Aa: pm }, dc.select_promotion = { event: "promoClick", Ia: "promotions", Aa: pm }, dc), Vj = D("dl.w", function(a, b, c) {
        function d() {
          var g = n(a, b);
          (e = G(g) && Gd(a, g, c)) || (f = Y(a, d, 1e3, "ec.dl"));
        }
        var e, f = 0;
        d();
        return function() {
          return ra(a, f);
        };
      }), Uu = D("p.e", function(a, b) {
        var c = Ja(a, b);
        if (c) {
          var d = L(a);
          c = c.params;
          var e = E(a, "h.ee", F([a, O(b), c], Ar));
          return b.vd ? (d.D("ecs", 0), Uj(a, b.vd, e)) : sa(b, function(f) {
            if ((f = n(f, "settings.ecommerce")) && Q(f)) return d.D("ecs", 1), Uj(a, f, e);
          });
        }
      }), Vu = u(function(a) {
        a = W(a);
        a = cl(a.search.substring(1));
        return { id: Oa(a["_ym_status-check"] || ""), lang: a._ym_lang || "ru" };
      }), Wu = D("suid.int", function(a, b) {
        var c = {};
        return c.setUserID = function(d, e, f) {
          if (Q(d) || Mb(a, d)) {
            var g = Ja(a, b);
            d = $e(["__ym", "user_id", d]);
            g.params(d, e || C, f);
          } else Kc(a, O(b)).error("wuid");
        }, c;
      }), Xu = D("up.int", function(a, b) {
        var c = {};
        return c.userParams = E(a, "up.c", function(d, e, f) {
          var g = Ja(a, b), h = Kc(a, O(b)).warn;
          g ? la(d) ? (h = {}, d = (h.__ymu = d, h), (g = g.params) && g(d, e || C, f)) : h("wup") : h("nci");
        }), c;
      }), Yu = /[\*\.\?\(\)]/g, Zu = u(function(a, b, c) {
        try {
          var d = c.replace("\\s", " ").replace(Yu, "");
          b = {};
          Kc(a, "").warn("nnw", (b.name = d, b));
        } catch (e) {
        }
      }, ob), $u = D("r.nn", function(a) {
        Gf(a) && Gd(a, zh, function(b) {
          b.qa.F(function(c) {
            var d = t(c);
            c = d.next().value;
            d = d.next().value;
            Zu(a, d, c);
            zh.splice(100);
          });
        });
      }), av = D("e.a.p", function(a, b) {
        var c = Ja(a, b);
        c = F([y(T, Ha(true)), Nb(A(x(c, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A);
        b.lh && c();
        var d = {};
        return d.enableAll = c, d;
      }), bv = u(tc, O), cv = D("fpi", function(a) {
        var b = de(a);
        if (b && !a.document.hidden) {
          var c = L(a).sa;
          c("fpe", 1);
          var d = na(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function() {
            a.document.hidden && (c("fht", b.now()), d());
          });
        }
      }), qm = u(function(a) {
        a = n(a, "console");
        var b = n(a, "log");
        b = Jf("log", b) ? I(b, a) : C;
        var c = n(a, "warn");
        c = Jf("warn", c) ? I(c, a) : b;
        var d = n(a, "error");
        a = Jf(
          "error",
          d
        ) ? I(d, a) : b;
        return { log: b, error: a, warn: c };
      }), dv = x("add", mf), ev = x("remove", mf), fv = x("detail", mf), gv = x("purchase", mf), hv = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "), ig = u(function(a) {
        var b = Jl(a);
        a = b.yg;
        if (!b.Af) return false;
        b = Qa("indexOf", a);
        b = Va(y(b, Ia(-1), hd), hv);
        var c = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a), d = /YaBrowser\/[\d.]+/.test(a), e = /Mobile/.test(a);
        return b || c || d && e || !/Safari/.test(a) && e;
      }), Co = u(function(a) {
        var b = Fb(a);
        return b ? kb(b, "YangoEats") || ce(a) : false;
      }), yr = /([0-9\\.]+) Safari/, iv = /\sYptp\/\d\.(\d+)\s/, rm = u(function(a) {
        var b;
        a: {
          if ((b = Fb(a)) && (b = iv.exec(b)) && 1 < b.length) {
            b = Oa(b[1]);
            break a;
          }
          b = 0;
        }
        return 50 <= b && 99 >= b || pg(a, 79) ? false : !se(a) || ig(a);
      }), sm = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"), jv = u(function(a) {
        a = pb(a)("canvas");
        var b = n(a, "getContext");
        if (!b) return null;
        try {
          var c = I(b, a)("2d");
          c.font = "72px mmmmmmmmmmlli";
          var d = c.measureText("mmmmmmmmmmlli").width;
          return function(e) {
            c.font = "72px " + e;
            return c.measureText("mmmmmmmmmmlli").width === d;
          };
        } catch (e) {
          return null;
        }
      }), tm = ua(String.prototype.repeat, "repeat"), ij = tm ? function(a, b) {
        return tm.call(a, b);
      } : vr, cj = x(true, function(a, b, c, d) {
        c = b.length && (c - d.length) / b.length;
        if (0 >= c) return d;
        b = ij(b, c);
        return a ? b + d : d + b;
      }), Kf = [2277735313, 289559509], Lf = [
        1291169091,
        658871167
      ], kv = D("p.cd", function(a) {
        if (gf(a) || Ih(a)) {
          var b = $a(a);
          if (fa(b.C("jn"))) {
            b.D("jn", false);
            var c = a.chrome || ld(a) ? function() {
            } : /./;
            a = qm(a);
            c.toString = function() {
              b.D("jn", true);
              return "Yandex.Metrika counter is initialized";
            };
            a.log("%c%s", "color: inherit", c);
          }
        }
      }), lv = u(function(a) {
        a = n(a, "navigator.plugins");
        return !!(a && qb(a) && Va(y(ba("name"), Eb(/Chrome PDF Viewer/)), a));
      }), Kb = va(function(a, b) {
        return L(b).C(a, null);
      }), sr = { "*": "+", "-": "/", Bj: "=", "+": "*", "/": "-", "=": "_" }, Pg = u(function(a) {
        return xh(
          /tizen/i,
          a
        );
      }), mv = u(function(a) {
        return xh(/webos|web0s/i, a);
      }), nv = u(function(a) {
        return P(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null;
      }), ov = u(x("panoramaId", jf)), pv = u(function(a) {
        return jf("pubcid.org", a) || jf("_pubCommonId", a);
      }), qv = u(x("_sharedid", jf)), rv = u(function(a, b) {
        if (b.Ta) return null;
        var c = Jd(a, "").C("_ga");
        return c && Vd(kf(c));
      }, y(ob, O)), kr = [
        ["domainLookupEnd", "domainLookupStart"],
        ["connectEnd", "connectStart"],
        ["responseStart", "requestStart"],
        ["responseEnd", "responseStart"],
        ["fetchStart", "navigationStart"],
        ["redirectEnd", "redirectStart"],
        [function(a, b) {
          return n(b, "redirectCount") || n(a, "navigation.redirectCount");
        }],
        ["domInteractive", "domLoading"],
        ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
        ["domComplete", "navigationStart"],
        ["loadEventStart", "navigationStart"],
        ["loadEventEnd", "loadEventStart"],
        ["domContentLoadedEventStart", "navigationStart"]
      ], jr = [
        ["domainLookupEnd", "domainLookupStart"],
        ["connectEnd", "connectStart"],
        ["responseStart", "requestStart"],
        ["responseEnd", "responseStart"],
        ["fetchStart"],
        ["redirectEnd", "redirectStart"],
        ["redirectCount"],
        ["domInteractive", "responseEnd"],
        ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
        ["domComplete"],
        ["loadEventStart"],
        ["loadEventEnd", "loadEventStart"],
        ["domContentLoadedEventStart"]
      ], Vb = {}, Pj = (Vb.responseEnd = 1, Vb.domInteractive = 1, Vb.domContentLoadedEventStart = 1, Vb.domContentLoadedEventEnd = 1, Vb.domComplete = 1, Vb.loadEventStart = 1, Vb.loadEventEnd = 1, Vb.unloadEventStart = 1, Vb.unloadEventEnd = 1, Vb.secureConnectionStart = 1, Vb), mr = u(If), gr = u(tc), hr = u(function(a) {
        var b = n(a, "webkitRequestFileSystem");
        if (P(b) && !gf(a)) return new M(I(b, a, 0, 0)).then(function() {
          var d = n(a, "navigator.storage") || {};
          return d.estimate ? d.estimate() : {};
        }).then(function(d) {
          return (d = d.quota) && 12e7 > d ? true : false;
        })["catch"](x(true, T));
        if (pe(a)) return b = n(a, "navigator.serviceWorker"), M.resolve(R(b));
        b = n(a, "openDatabase");
        if (ld(a) && P(b)) {
          var c = false;
          try {
            b(null, null, null, null);
          } catch (d) {
            c = true;
          }
          return M.resolve(c);
        }
        return M.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")));
      }), sv = /(\?|&)turbo_uid=([\w\d]+)($|&)/, tv = u(function(a, b) {
        var c = Zc(a), d = W(a).search.match(sv);
        return d && 2 <= d.length ? (d = t(d), d.next(), d.next(), d = d.next().value, b.Ta || c.D("turbo_uid", d), d) : (c = c.C("turbo_uid")) ? c : "";
      }), Uq = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Vq = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Oj = { H: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } }, Rq = { ng: 60, error: 15 }, Qq = { ng: 5, error: 1 }, Lj = { id: 42822899, ca: "0" }, uv = D("pa.plgn", function(a, b) {
        var c = Ue(a, b);
        c && c.Z.F(["pluginInfo"], E(a, "c.plgn", function() {
          var d = L(a);
          d.D("cmc", d.C("cmc", 0) + 1);
          return ai(b);
        }));
      }), wc = {}, uo = (wc.am = "com.am", wc.tr = "com.tr", wc.ge = "com.ge", wc.il = "co.il", wc["\u0440\u0444"] = "ru", wc["xn--p1ai"] = "ru", wc["\u0431\u0435\u043B"] = "by", wc["xn--90ais"] = "by", wc), um = { "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/, "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/, "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/ }, Lb = {}, vo = (Lb.ka = "ge", Lb.ro = "md", Lb.tg = "tj", Lb.tk = "tm", Lb.et = "ee", Lb.hy = "com.am", Lb.he = "co.li", Lb.ky = "kg", Lb.be = "by", Lb.tr = "com.tr", Lb.kk = "kz", Lb), vm = /^https?:\/\//, vv = { 1882689622: 1, 2318205080: 1, 3115871109: 1, 3604875100: 1, 339366994: 1, 849340123: 1, 3735661796: 1, 3082499531: 1, 2343947156: 1, 655012937: 1, 3724710748: 1, 3364370932: 1, 1996539654: 1, 2065498185: 1, 823651274: 1, 12282461: 1, 1555719328: 1, 1417229093: 1, 138396985: 1, 3015043526: 1 }, wm = u(function() {
        return N(function(a, b) {
          var c = Cc(b + "/tag.js");
          a[c] = 1;
          return a;
        }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"]);
      }), wv = u(function(a) {
        a = de(a);
        if (!a || !P(a.getEntriesByType)) return null;
        a = a.getEntriesByType("resource");
        var b = wm();
        return (a = rb(function(c) {
          c = t(c.name.replace(vm, "").split("?")).next().value;
          c = Cc(c);
          return b[c];
        }, a)) ? Ab(a.transferSize) : null;
      }), cr = "ar:1:pv:1:v:" + Da.eb + ":vf:" + yd.version, dr = Da.Ka + "//" + pc + "/watch/" + Da.Bg, xm = {}, xv = D("exps.int", function(a, b) {
        var c = {};
        return c.experiments = function(d, e, f) {
          if (Q(d) && !(0 >= d.length)) {
            var g = xa(a, "e", b), h = he(b).url, k = {}, l = {};
            d = g({ K: La((k.ex = 1, k.ar = 1, k)), H: (l["page-url"] = h || W(a).href, l.exp = d, l) }, b);
            return wd(a, "exps.s", d, e || C, f);
          }
        }, c;
      }), jg = [], yv = D("p.fh", function(a, b) {
        b = void 0 === b ? true : b;
        var c = $a(a), d = ma(a), e = c.C("wasSynced"), f = { id: 3, ca: "0" };
        if (b && e && e.time + 864e5 > d(ea)) return M.resolve(e);
        e = {};
        var g = {};
        return xa(a, "f", f)({ K: La((e.pv = 1, e)), H: (g["page-url"] = W(a).href, g["page-ref"] = a.document.referrer, g) }, f).then(function(h) {
          var k = {};
          h = (k.time = d(ea), k.params = n(h, "settings"), k.bkParams = n(h, "userData"), k);
          c.D("wasSynced", h);
          return h;
        })["catch"](E(a, "f.h"));
      }), zv = va(function(a, b) {
        0 === parseFloat(n(b, "settings.c_recp")) && (a.$d.D("ymoo" + a.wa, a.qg(yb)), a.od && a.od.destruct && a.od.destruct());
      }), Md = y(ba("settings.pcs"), Ia("1")), zm = pc.split("."), Av = zm.pop(), Am = J(".", zm), to = u(function(a) {
        a = W(a).hostname.split(".");
        return a[a.length - 1];
      }), so = u(function(a) {
        return -1 !== W(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/);
      }), Bv = RegExp("^(.*\\.)?((yandex(-team)?)\\.(com?\\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\\.ru|ya\\.(ru|cc)|yadi\\.sk|yastatic\\.net|.*\\.yandex|turbopages\\.org|turbo\\.site|diplodoc\\.(com|tech)|datalens\\.tech|white-label\\.yango-tech\\.com|al-sadhan\\.com|spar\\.sa)$"), Te = u(function(a) {
        a = W(a).hostname;
        var b = false;
        a && (b = -1 !== a.search(Bv));
        return b;
      }), Cv = RegExp("^(.*\\.)?((yandex(-team)?)\\.(com?\\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\\.ru|ya\\.(ru|cc)|yadi\\.sk|.*\\.yandex|turbopages\\.org|turbo\\.site)$"), Xq = u(function(a) {
        a = W(a).hostname;
        var b = false;
        a && (b = -1 !== a.search(Cv));
        return b;
      }), Ii = Da.Ka + "//" + pc + "/metrika", af = Ii + "/metrika_match.html", Oh = {}, ar = (Oh.s = "p", Oh["8"] = "i", Oh), Yq = bc("csp", function(a, b) {
        return xa(a, "s", b)({}, ["https://ymetrica1.com/watch/3/1"]);
      });
      cd.isEnabled = function(a) {
        return !!a.JSON;
      };
      cd.prototype.Ga = function(a) {
        return wg(Yb(this.l, a));
      };
      cd.prototype.ub = function(a) {
        var b = a.data;
        "string" !== typeof b && (b = Yb(this.l, a.data));
        return b;
      };
      cd.prototype.lb = function(a) {
        return encodeURIComponent(a).length;
      };
      cd.prototype.ze = function(a, b) {
        for (var c = Math.ceil(a.length / b), d = [], e = 0; e < b; e += 1) d.push(a.slice(e * c, c * (e + 1)));
        return d;
      };
      var Lq = u(function(a) {
        function b(f, g, h, k) {
          d[0] = g;
          h[k] = e[3];
          h[k + 1] = e[2];
          h[k + 2] = e[1];
          h[k + 3] = e[0];
        }
        function c(f, g, h, k) {
          d[0] = g;
          h[k] = e[0];
          h[k + 1] = e[1];
          h[k + 2] = e[2];
          h[k + 3] = e[3];
        }
        if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return Mq;
        var d = new Float32Array([-0]), e = new Uint8Array(d.buffer);
        return 128 === e[3] ? c : b;
      }), Hq = Jj(false), Gq = Jj(true), ja = {}, Aj = (ja.mousemove = 0, ja.mouseup = 1, ja.mousedown = 2, ja.click = 3, ja.scroll = 4, ja.windowblur = 5, ja.windowfocus = 6, ja.focus = 7, ja.blur = 8, ja.eof = 9, ja.selection = 10, ja.change = 11, ja.input = 12, ja.touchmove = 13, ja.touchstart = 14, ja.touchend = 15, ja.touchcancel = 16, ja.touchforcechange = 17, ja.zoom = 18, ja.resize = 19, ja.keystroke = 20, ja.deviceRotation = 21, ja.fatalError = 22, ja.hashchange = 23, ja.stylechange = 24, ja.articleInfo = 25, ja.publishersHeader = 26, ja.pageData = 27, ja.mutationAdd = 28, ja.mutationRemove = 29, ja.mutationTextChange = 30, ja.mutationAttributesChange = 31, ja), Dd = {}, zj = (Dd.page = 0, Dd.event = 1, Dd.mutation = 2, Dd.publishers = 3, Dd.activity = 4, Dd);
      bd.prototype.Ga = function(a, b) {
        var c = this;
        b = void 0 === b ? false : b;
        var d = Ac(a, this.If), e = this.isSync || b ? Infinity : 10;
        d = Kd(this.l, d, e);
        var f = [d];
        this.Eb.push(d);
        return d(Kh(function(g) {
          g = Cj(
            c.l,
            wq,
            { Pi: g }
          );
          g = Kd(c.l, g, e, oh);
          f.push(g);
          c.Eb.push(g);
          return g;
        }))(Kh(function(g) {
          g = Bj(c.l, g.slice(-4));
          g = Kd(c.l, g, e, oh);
          f.push(g);
          c.Eb.push(g);
          return g;
        }))($l(function(g) {
          g = g[g.length - 1];
          z(function(h) {
            h = Pc(c.l)(h, c.Eb);
            c.Eb.splice(h, 1);
          }, f);
          return g;
        }));
      };
      bd.prototype.ub = function(a) {
        return Cj(this.l, Dj, this.If(a))(ph(C));
      };
      bd.prototype.lb = function(a) {
        return a[0];
      };
      bd.prototype.ze = function(a, b) {
        for (var c = Bj(this.l, a)(ph(C)), d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
        return e;
      };
      bd.isEnabled = function(a) {
        var b = Gf(a), c = false;
        try {
          c = (c = 2 === new a.Blob(["\xE4"]).size) && 2 === new a.Blob([new a.Uint8Array([1, 2])]).size;
        } catch (d) {
        }
        return !b && c && !(!a.Uint8Array || !n(a, "Uint8Array.prototype.slice"));
      };
      var Bm = Ff("wv"), Cm = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), aq = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" ");
      ab.prototype.start = function() {
        this.xe = Y(
          this.l,
          this.flush,
          2500
        );
        if (!this.Bc) {
          this.aj();
          var a = this.Jd.C(this.Wd, []), b = !a.length;
          a.push(I(this.oi, this));
          this.Jd.sa(this.Wd, a);
          b && this.Wf();
          this.Le = na(this.l).F(this.l, ["click"], I(this.Zi, this));
          this.Yb({ type: "page", target: this.l });
        }
      };
      ab.prototype.stop = function() {
        this.mj();
        this.Bc = true;
        this.flush();
        ra(this.l, this.xe);
      };
      ab.prototype.Df = function(a) {
        return oc("html", this.l, a) !== this.l.document.documentElement;
      };
      ab.prototype.Wf = function() {
        var a = this;
        E(this.l, "p.ic" + this.Sc.id, function() {
          if (!a.Bc) {
            var b = a.Jd.C(a.Wd), c = a.Sc.th();
            z(function(d) {
              var e = A(function(f) {
                return B({}, f);
              }, c);
              P(d) && d(e);
            }, b);
            a.Oa = Y(a.l, I(a.Wf, a), 1e3, "p");
          }
        })();
      };
      ab.prototype.oi = function(a) {
        this.Bc || (this.nj(a), this.oj(), this.Ug());
      };
      ab.prototype.Zg = function(a, b) {
        return (a.ue || 0) <= (b.ue || 0) ? b : a;
      };
      ab.prototype.Zi = function(a) {
        if (this.fa.length) {
          a = bk(a);
          var b = W(this.l).hostname;
          a && rf(a.hostname) === rf(b) && (a = N(this.Zg, this.fa[0], this.fa).id, b = ad(this.l), Ad(this.l, this.wa.split(":")[0]).D("pai", a + "-" + b));
        }
      };
      ab.prototype.Yb = function(a) {
        var b = this;
        E(
          this.l,
          "p.ec." + this.Sc.id,
          function() {
            try {
              var c = a.type;
              var d = a.target;
            } catch (k) {
              return;
            }
            var e = "page" === c;
            if ("scroll" === c || e) {
              var f = [b.l, b.l.document, b.l.document.documentElement, ic(b.l)];
              H(d, f) && b.Jb();
            }
            ("resize" === c || e) && b.wg();
            c = b.time(ea);
            var g = Math.min(c - b.Gf, 5e3);
            b.involvedTime += Math.round(g);
            b.Gf = c;
            if (b.meta && b.scroll && b.yb) {
              var h = b.yb.h * b.yb.w;
              b.fa = A(function(k) {
                var l = B({}, k), m = b.meta[l.id], p = od(k.Db);
                if (!m || b.Df(l.element) || !p) return l;
                k = b.l.Math;
                m = k.max((b.scroll.y + b.yb.h - m.y) / m.height, 0);
                var r = p.height * p.width;
                p = Bi(b.l, p, b.yb);
                l.ue = p / h;
                l.visibility = p / r;
                if (0.9 <= l.visibility || 0.1 <= l.ue) l.involvedTime += g;
                l.maxScrolled = k.round(1e4 * m) / 1e4;
                return l;
              }, b.fa);
              c = {};
              d = {};
              wb(b.l, (d.name = "publishers", d.counterKey = b.wa, d.data = (c.involvedTime = b.involvedTime, c.contentItems = A(function(k) {
                var l = {};
                return B((l.contentElement = k.Db, l), k);
              }, b.fa), c), d));
            }
          }
        )();
      };
      ab.prototype.nj = function(a) {
        var b = A(function(c) {
          return c.id;
        }, this.fa);
        this.fa = this.fa.concat(oa(function(c) {
          return !H(c.id, b);
        }, a));
      };
      ab.prototype.wg = function() {
        var a = t(Oe(this.l) || pd(this.l)), b = a.next().value;
        a = a.next().value;
        this.yb = { w: b, h: a };
      };
      ab.prototype.oj = function() {
        var a = this;
        E(this.l, "p.um." + this.Sc.id, function() {
          var b = [];
          a.Jb();
          a.meta = Rb(function(c, d) {
            if (a.Df(d.element)) return b.push(d), delete c[d.id], c;
            var e = {};
            e = (e.id = d.id, e.involvedTime = Math.max(d.involvedTime, 0), e.maxScrolled = d.maxScrolled || 0, e.chars = d.update ? d.update("chars") || 0 : 0, e);
            if (d.Db) {
              var f = od(d.Db);
              f && (e.x = Math.max(Math.round(f.left) + a.scroll.x, 0), e.y = Math.max(
                Math.round(f.top) + a.scroll.y,
                0
              ), e.width = Math.round(f.width), e.height = Math.round(f.height));
            }
            c[d.id] = e;
            return c;
          }, {}, a.fa);
          z(function(c) {
            c = Pc(a.l)(c, a.fa);
            a.fa.splice(c, 1);
          }, b);
        })();
      };
      ab.prototype.Gd = function() {
        var a = A(x(this.meta, n), ka(this.meta));
        if (a.length && (this.ce = Yb(this.l, a), this.Nf !== this.ce)) {
          var b = {}, c = {};
          return c.type = "publishersHeader", c.data = (b.articleMeta = a || [], b.involvedTime = this.involvedTime, b), c;
        }
        return null;
      };
      ab.prototype.Ug = function() {
        var a = this;
        if (this.fa.length) {
          var b = A(function(c) {
            var d = N(function(f, g) {
              c[g] && (f[g] = c[g]);
              return f;
            }, {}, a.Cg);
            c.gg = true;
            var e = {};
            return e.type = "articleInfo", e.stamp = d.stamp, e.data = d, e;
          }, oa(function(c) {
            return !c.gg;
          }, this.fa));
          b.length && (this.buffer = this.buffer.concat(b), Wb(this.l, this.wa, ["pdf", b]));
        }
      };
      ab.prototype.aj = function() {
        this.af.F(this.l, Cm, this.Yb);
      };
      ab.prototype.mj = function() {
        this.Le && this.Le();
        this.af.Wb(this.l, Cm, this.Yb);
      };
      ab.prototype.Jb = function() {
        this.scroll = { x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0, y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0 };
      };
      var Tf = {}, Mg = (Tf[1] = 500, Tf[2] = 500, Tf[3] = 0, Tf), $p = ["topics", "rubric", "authors"];
      Sa.prototype.La = function(a) {
        return a.element;
      };
      Sa.prototype.mf = function(a, b) {
        var c = this, d;
        E(this.l, "P.s." + b, function() {
          d = c.Gb[b].call(c, a);
        })();
        return d;
      };
      Sa.prototype.Li = function(a) {
        var b = B({}, a);
        this.Qd && !b.id && H(a.type, [3, 2]) && (a = J(", ", A(ba("name"), b.authors || [])), b.pageTitle = a + ": " + b.pageTitle);
        b.pageTitle || (b.pageTitle = this.Rh(b.Db));
        b.pageUrlCanonical || (a = b.id, b.pageUrlCanonical = ("string" !== typeof a ? 0 : /^(https?:)\/\//.test(a)) ? b.id : this.Ph());
        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
        return b;
      };
      Sa.prototype.Da = function(a) {
        var b = this, c = {}, d = this.La(a);
        if (!d) return null;
        c.type = a.type;
        z(function(f) {
          c[f] = b.mf(a, f);
        }, ka(this.Gb));
        var e = ma(this.l);
        c.stamp = e(Wk);
        c.element = a.element;
        c.Db = d;
        c = this.qj(this.Li(c));
        c.id = c.id ? Cc(c.id) : 1;
        c.update = function(f) {
          return b.La(a) ? b.mf(a, f) : void 0;
        };
        return c;
      };
      Sa.prototype.Rh = function(a) {
        for (var b = 1; 5 >= b; b += 1) {
          var c = mb(zc("h" + b, a));
          if (c) return c;
        }
      };
      Sa.prototype.Ph = function() {
        var a = zc(
          '[rel="canonical"]',
          this.root
        );
        if (a) return a.href;
      };
      Sa.prototype.getType = function() {
        return 1;
      };
      Sa.prototype.rc = function() {
        return [];
      };
      Sa.prototype.th = function() {
        var a = this, b = this.rc(), c = 1;
        return Rb(function(d, e) {
          var f = a.Da({ element: e, type: a.getType(e) }) || [];
          G(f) || (f = [f]);
          f = Rb(function(g, h) {
            var k = g.values, l = g.xf;
            h && h.chars > Mg[h.type] && !H(h.id, l) ? (k.push(h), l.push(h.id)) : h && h.chars <= Mg[h.type] && a.$g(h.id, h);
            return { values: k, xf: l };
          }, { values: [], xf: A(ba("id"), d) }, f).values;
          return d.concat(A(function(g) {
            var h = {};
            g = B((h.index = c, h.gg = false, h.involvedTime = 0, h), g);
            c += 1;
            return g;
          }, f));
        }, [], b);
      };
      Ym($b, Sa);
      $b.prototype.qc = function(a, b, c) {
        c = void 0 === c ? ["name"] : c;
        if (!la(a) || !a[b]) return [];
        a = a[b];
        a = G(a) ? a : [a];
        a = Nb(A(function(d) {
          return d ? "string" === typeof d ? d : la(d) ? N(function(e, f) {
            return e || "" + d[f];
          }, "", c) : null : null;
        }, a));
        return A(function(d) {
          var e = {};
          return e.name = d, e;
        }, a);
      };
      $b.prototype.La = function(a) {
        var b = a.element, c = a.data || {};
        a = c["@id"];
        var d = c.url;
        c = null;
        d && Q(d) && (c = this.cf(d));
        !c && a && Q(a) && (c = this.cf(a));
        c || (c = a = b.parentNode, !oc(
          "head",
          this.l,
          b
        ) && a && 0 !== Xb(a).length) || (c = this.l.document.body);
        return c;
      };
      $b.prototype.cf = function(a) {
        try {
          var b = hc(this.l, a).hash;
          if (b) {
            var c = zc(b, this.l.document.body);
            if (c) return c;
          }
        } catch (d) {
        }
        return null;
      };
      $b.prototype.le = function(a) {
        return this.Je[a["@type"]] || 1;
      };
      $b.prototype.Da = function(a) {
        var b = this, c = a.element, d = a.data;
        if (!d && (d = jc(this.l, Xb(c)), !d || !/schema\.org/.test(d["@context"]) && !G(d))) return null;
        var e = this.nf(d);
        if (e) return A(function(g) {
          return la(g) && H(g["@type"], b.tb["schema.org"]) ? Sa.prototype.Da.call(
            b,
            { element: c, data: g, type: b.le(g) }
          ) : null;
        }, e);
        a.data = d;
        if ("QAPage" === a.data["@type"]) {
          var f = a.data.mainEntity || a.data.mainEntityOfPage;
          if (!f) return null;
        }
        "Question" === a.data["@type"] && (f = a.data);
        return f ? (a = Bc(x(f, n), ["acceptedAnswer", "suggestedAnswer"]), A(function(g) {
          if (!la(g) || !H(g["@type"], b.tb["schema.org"])) return null;
          var h = {};
          g = { element: c, type: b.le(g), data: B((h.parentItem = f, h), g) };
          return Sa.prototype.Da.call(b, g);
        }, a)) : H(a.data["@type"], this.tb["schema.org"]) ? Sa.prototype.Da.call(this, B(a, { type: this.le(a.data) })) : null;
      };
      $b.prototype.rc = function() {
        return Bb(this.Xe, this.root);
      };
      $b.prototype.nf = function(a) {
        if (G(a)) return a;
        if (a && G(a["@graph"])) return a["@graph"];
      };
      Ym($c, Sa);
      $c.prototype.getType = function(a) {
        a = a.getAttribute("itemtype") || "";
        return (a = this.lj(a)) ? this.Je[a[1]] : 1;
      };
      $c.prototype.Da = function(a) {
        return a.element && Xb(a.element).length ? Sa.prototype.Da.call(this, a) : null;
      };
      $c.prototype.rc = function() {
        var a = J(",", A(function(b) {
          return '[itemtype$="schema.org/' + b + '"]';
        }, this.tb["schema.org"]));
        return Bb(a, this.root);
      };
      Ym(nc, Sa);
      nc.prototype.Cd = function(a) {
        if (a) {
          if (G(a)) return A(function(c) {
            var d = {};
            return d.name = c ? "" + c : null, d;
          }, a);
          var b = {};
          return [(b.name = a ? "" + a : null, b)];
        }
        return [];
      };
      nc.prototype.wc = function(a) {
        return G(a) ? a.length ? "" + a[0] : null : a ? "" + a : null;
      };
      nc.prototype.rc = function() {
        var a = Bb('meta[property="og:type"]', this.l.document.body);
        return [this.l.document.head].concat(a);
      };
      nc.prototype.Hh = function(a) {
        var b = this, c = a.element, d = {}, e = this.La(a);
        c = Bb("meta[property]", c === this.l.document.head ? c : e);
        if (c.length) z(function(f) {
          try {
            if (f.parentNode === e || f.parentNode === b.l.document.head) {
              var g = f.getAttribute("property").replace(b.mh, ""), h = mb(f);
              d[g] ? G(d[g]) ? d[g].push(h) : d[g] = [d[g], h] : d[g] = h;
            }
          } catch (k) {
            nd(b.l, "og.ed", k);
          }
        }, c);
        else return null;
        return H(d.type, this.tb.Kf) ? B(a, { data: d }) : null;
      };
      nc.prototype.La = function(a) {
        a = a.element;
        var b = this.l.document;
        return a === b.head ? b.body : a.parentNode;
      };
      nc.prototype.Da = function(a) {
        return (a = this.Hh(a)) ? Sa.prototype.Da.call(this, a) : null;
      };
      var Ph = "et w v z i u vf".split(" "), ze = {};
      $b && (ze.json_ld = $b);
      $c && (ze.schema = $c, ze.microdata = $c);
      nc && (ze.opengraph = nc);
      var Dv = D("p.p", function(a, b) {
        function c(l) {
          var m = B({}, k);
          m.N.aa = l;
          return e(m)["catch"](E(a, "s.ww.p"));
        }
        var d = yj(a, "9", "8");
        if (!Pa("querySelectorAll", a.document.querySelectorAll) || !d) return M.resolve();
        var e = uj(a, b, "p", ["f", "x"], [[Ub(Ph), 1], [bq, 1]]), f = La(), g = Ad(a, b.id), h = g.C("pai");
        h && (g.kc("pai"), f.D("pai", h));
        g = {};
        var k = { H: (g["wv-type"] = d.type, g), K: f, N: {} };
        return sa(b, E(a, "ps.s", function(l) {
          if (l = n(l, "settings.publisher.schema")) {
            gk(b) && (l = "microdata");
            var m = ze[l];
            if (m && d) {
              var p = O(b);
              m = new m(a, p);
              m = new ab(a, m, d, c, p);
              m.start();
              var r = {};
              Wb(a, p, "ps", (r.schema = l, r));
              return I(m.stop, m);
            }
          }
        }));
      });
      ud.prototype.Ga = function(a) {
        return wg(Bc(I(this.ub, this), a));
      };
      ud.prototype.ub = function(a, b) {
        var c = this, d = [], e = this.Fh(this.l, b && b.type, a.type);
        e && (d = Bc(function(f) {
          return f({ l: c.l, na: a }) || [];
        }, e));
        return d;
      };
      ud.prototype.lb = function(a) {
        return a.length;
      };
      ud.prototype.ze = function(a) {
        return [a];
      };
      ud.prototype.isEnabled = function() {
        return true;
      };
      lc.prototype.Vc = function() {
        this.Ye = Y(this.l, y(I(this.flush, this), I(this.Vc, this)), this.bd, "b.f");
      };
      lc.prototype.send = function(a, b) {
        var c = this.Sb(a, b || [], this.me);
        this.me += 1;
        return c;
      };
      lc.prototype.push = function() {
      };
      lc.prototype.flush = function() {
      };
      Ym(df, lc);
      df.prototype.push = function(a, b) {
        var c = this.ma.ub(a, b);
        Ea(this.buffer, c);
        this.ma.lb(this.buffer) > this.Dg && this.flush();
      };
      df.prototype.flush = function() {
        var a = this.buffer;
        a.length && (this.send(a), this.buffer = []);
      };
      var Zp = /opera mini/i, pj = ["phone", "email"], Dm = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "), Wp = /^[\w\u0410-\u042f\u0430-\u044f]$/, Xp = [65, 90], Yp = [97, 122], Up = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "), Sp = new RegExp("(" + Dm.join("|") + ")", "i"), Rp = new RegExp("(" + pj.join("|") + ")", "i"), rl = ["password", "passwd", "pswd"], Tp = new RegExp("(" + Dm.concat("\u0438\u043C\u044F \u0444\u0430\u043C\u0438\u043B\u0438\u044F \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u043D\u0434\u0435\u043A\u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0430\u0434\u0440\u0435\u0441 \u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u043D\u043E\u043C\u0435\u0440(-|\\.|_|\\s){0,2}\u043A\u0430\u0440\u0442\u044B \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0434\u043E\u043C \u0443\u043B\u0438\u0446\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043E\u0440\u043E\u0434 \u043E\u0431\u043B\u0430\u0441\u0442\u044C".split(" ")).join("|") + ")", "i"), ib = "metrikaId_" + Math.random(), Yc = { counter: 0 }, Ht = u(function() {
        var a = {};
        return a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML = 43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX = 100, a;
      }), Et = [17, 18, 38, 32, 39, 15, 11, 7, 1], wl = Tb(x("\u2022", T)), Wd = true, Eh = "", Fh = false, Gh = true, Hh = false, Pp = va(function(a, b) {
        var c = F([a, "efv." + b.event], E);
        b.T = A(y(T, c), b.T);
        return b;
      }), Em = u(function(a) {
        var b = [], c = [], d = [];
        a.document.attachEvent && !a.opera && (b.push(Gg), c.push(Kt), c.push(Lt));
        a.document.addEventListener ? b.push(ul) : (c.push(tl), d.push(ul));
        return Op(a, ("onpagehide" in a ? [] : [{ target: a, type: "window", event: "beforeunload", T: [C] }, { target: a, type: "window", event: "unload", T: [C] }]).concat([
          { event: "click", T: [Mf] },
          { event: "dblclick", T: [Mf] },
          { event: "mousedown", T: [Mf] },
          { event: "mouseup", T: [Nt] },
          { event: "keydown", T: [Ot] },
          { event: "keypress", T: [Pt] },
          { event: "copy", T: [yl] },
          { event: "blur", T: b },
          { event: "focusin", T: c },
          { event: "focusout", T: d }
        ]).concat(!a.document.attachEvent || a.opera ? [{ target: a, type: "window", event: "focus", T: [nj] }, { target: a, type: "window", event: "blur", T: [Gg] }] : []).concat(a.document.addEventListener ? [{ event: "focus", T: [tl] }, { event: "change", T: [vl] }, { event: "submit", T: [Al] }] : [
          { type: "formInput", event: "change", T: [vl] },
          { type: "form", event: "submit", T: [Al] }
        ]));
      }), Mp = u(function(a) {
        var b = [];
        ic(a) && b.push({ target: a, type: "document", event: "mouseleave", T: [Qt] });
        "onpagehide" in a && b.push({ target: a, type: "window", event: "pagehide", T: [function(c) {
          c = c.flush;
          c();
        }] });
        return b;
      }), Ev = ["submit", "beforeunload", "unload"], Fv = u(function(a, b) {
        var c = b(a);
        return N(function(d, e) {
          d[e.type + ":" + e.event] = e.T;
          return d;
        }, {}, c);
      }), Gv = x(Em, function(a, b, c, d) {
        return Fv(b, a)[c + ":" + d] || [];
      }), Np = /^\s*function submit\(\)/, Hv = D("fw.p", function(a, b) {
        var c;
        if (!(c = b.ih || !b.zb)) {
          var d = L(a), e = false;
          c = d.C("hitParam", {});
          var f = O(b);
          c[f] && (d = d.C("counters", {}), e = Ge(b.ca) && !d[f]);
          c[f] = 1;
          c = e;
        }
        if (c) return M.resolve(C);
        c = new ud(a, Gv);
        return Kp(a, b, c, Em, Ev);
      });
      Ym(hb, lc);
      hb.prototype.kf = function(a) {
        return Nb(this.Z.$("ag", a));
      };
      hb.prototype.jf = function(a, b) {
        var c = this;
        a(lb(E(this.l, "wv2.b.st"), function(d) {
          c.send(d, b);
        }));
      };
      hb.prototype.$i = function(a, b) {
        var c = this;
        ra(this.l, this.Ye);
        var d = Math.ceil(this.ma.lb(b) / 63e4), e = this.ma.ze(b, d);
        z(function(f, g) {
          var h = {};
          h = B({}, a, (h.data = f, h.partNum = g + 1, h.end = g + 1 === d, h.partsTotal = e.length, h));
          var k = c.ma.Ga([h], false);
          c.jf(k, [h]);
        }, e);
        this.Vc();
      };
      hb.prototype.send = function(a, b) {
        var c = this;
        this.Z.$("se", b);
        return lc.prototype.send.call(this, a, b).then(T, function() {
          c.Z.$("see", b);
        });
      };
      hb.lf = function(a, b, c, d, e) {
        hb.ed["" + a + b] || (this.ed[b] = new hb(e, d, c, "m" === b ? 31457280 : 0));
        return this.ed[b];
      };
      hb.prototype.mi = function() {
        return this.Fe && this.Ge >= this.Fe;
      };
      hb.prototype.push = function(a) {
        var b = this;
        if (!this.mi()) {
          this.Z.$("p", a);
          var c = this.ma.ub(a), d = this.ma.lb(c);
          7e5 < d ? this.$i(a, c) : (c = this.kf(this.buffer.concat([a])), c = Rb(function(e, f) {
            return e + b.ma.lb(b.ma.ub(f));
          }, 0, c), this.Bb + c + d >= 7e5 * 0.7 && this.flush(), this.buffer.push(a), this.Bb += d);
        }
      };
      hb.prototype.F = function(a, b) {
        this.Z.F([a], b);
      };
      hb.prototype.ga = function(a, b) {
        this.Z.ga([a], b);
      };
      hb.prototype.flush = function(a) {
        var b = this.buffer.concat(this.kf(this.buffer));
        b.length && (this.buffer = [], this.Ge += this.Bb, this.Bb = 0, a = this.ma.Ga(b, a), this.jf(a, b));
      };
      hb.ed = {};
      V.prototype.start = function() {
        var a = this;
        this.rb = A(function(b) {
          var c = t(b);
          b = c.next().value;
          var d = c.next().value;
          c = c.next().value;
          d = I(a.L.J(d, b[0]), a);
          return a.Qa.F(c || a.l, b, d);
        }, this.ia);
      };
      V.prototype.stop = function() {
        z(Ba, this.rb);
      };
      V.prototype.X = function(a) {
        return this.G.xa().X(a);
      };
      var Ip = ["checkbox", "radio"], Jp = /pwd|value|password/i, Qh = ba("location.href");
      Ym(Db, V);
      Db.prototype.start = function() {
        this.qa.observe(this.l.document.documentElement, { attributes: true, characterData: true, childList: true, subtree: true, attributeOldValue: true, characterDataOldValue: true });
      };
      Db.prototype.stop = function() {
        this.qa.disconnect();
      };
      Db.prototype.cd = function(a) {
        var b = a.target, c = a.attributeName, d = a.oldValue;
        a = b.getAttribute(c);
        if (a === d) return false;
        d = ac(this.l)(b, this.va.elements);
        -1 === d && (d = this.va.elements.push(b) - 1, this.va.attributes[d] = {});
        this.va.attributes[d] || (this.va.attributes[d] = {});
        this.va.attributes[d][c] = cf(this.l, b, c, a, this.G.Ib()).value;
        return true;
      };
      Db.prototype.pd = function(a) {
        function b(g) {
          var h = ac(c.l)(g, d);
          return -1 === h ? (d.push(g), g = { Ad: {} }, e.push(g), g) : e[h];
        }
        var c = this, d = [], e = [];
        z(function(g) {
          var h = g.attributeName, k = g.removedNodes, l = g.oldValue, m = g.target, p = g.nextSibling, r = g.previousSibling;
          switch (g.type) {
            case "attributes":
              if (c.cd(g)) {
                var q = b(m);
                q.Ad[h] || (q.Ad[h] = cf(c.l, m, h, l, c.G.Ib()).value);
              }
              break;
            case "childList":
              k && z(function(v) {
                q = b(v);
                q.gf || B(q, { gf: m, zh: p ? p : void 0, Ah: r ? r : void 0 });
              }, Ka(k));
              break;
            case "characterData":
              q = b(m), q.hf || (q.hf = l);
          }
        }, a);
        var f = this.G.xa();
        z(function(g, h) {
          f.ye(g, e[h]);
        }, d);
      };
      Db.prototype.fe = function(a) {
        var b = this;
        if (Qh(this.l)) {
          var c = this.G.stamp();
          this.pd(a);
          z(function(d) {
            var e = d.addedNodes, f = d.removedNodes, g = d.target;
            switch (d.type) {
              case "childList":
                f && f.length && b.qe(Ka(f), c);
                e && e.length && b.pe(Ka(e), c);
                break;
              case "characterData":
                b.oe(g, c);
            }
          }, a);
          this.ne(c);
        } else this.stop();
      };
      Db.prototype.ne = function(a) {
        var b = this;
        z(function(c, d) {
          var e = b.uc();
          b.G.V("mutation", { index: e, attributes: b.va.attributes[d], target: b.X(c) }, "ac", a);
        }, this.va.elements);
        this.va.elements = [];
        this.va.attributes = [];
      };
      Db.prototype.pe = function(a, b) {
        var c = this, d = this.uc();
        this.G.xa().yc({ nodes: a, Uc: function(e) {
          e = A(function(f) {
            f.node = void 0;
            return f;
          }, e);
          c.G.V("mutation", { index: d, nodes: e }, "ad", b);
        } });
      };
      Db.prototype.qe = function(a, b) {
        var c = this, d = this.uc(), e = this.G.xa(), f = A(function(g) {
          var h = e.removeNode(g);
          Sj(c.l, g, function(k) {
            e.removeNode(k);
          });
          return h;
        }, a);
        this.G.V("mutation", { index: d, nodes: f }, "re", b);
      };
      Db.prototype.oe = function(a, b) {
        var c = this.uc();
        this.G.V("mutation", { value: a.textContent, target: this.X(a), index: c }, "tc", b);
      };
      Db.prototype.uc = function() {
        var a = this.index;
        this.index += 1;
        return a;
      };
      Cb.prototype.ye = function(a, b) {
        var c = this.kb(a);
        Wa(c) || (this.Ra[c] && this.X(a), this.Ra[c] = b);
      };
      Cb.prototype.F = function(a, b, c) {
        a = "" + b + a;
        this.gb.push(a);
        this.Nd(a) || this.gb.push(a);
        this.Z.F([a], c);
      };
      Cb.prototype.ga = function(a, b, c) {
        var d = "" + b + a;
        this.gb = oa(function(e) {
          return e !== d;
        }, this.gb);
        this.Z.ga([d], c);
      };
      Cb.prototype.start = function() {
        this.Xf();
        this.Vf();
      };
      Cb.prototype.stop = function() {
        this.flush();
        ra(this.l, this.Ve);
        ra(this.l, this.cg);
        this.oc = [];
        this.Hb = [];
        this.Ba = {};
        this.Ra = {};
      };
      Cb.prototype.yc = function(a) {
        var b = this, c = [], d = 0, e = { Uc: a.Uc, result: [], zc: 0, nodes: c };
        this.oc.push(e);
        z(function(f) {
          Sj(b.l, f, function(g) {
            var h = b.kb(g);
            Wa(h) || (c.push(g), b.Ba[h] && b.X(g), b.Ba[h] = { node: g, event: e, jj: d }, d += 1);
          });
        }, a.nodes);
      };
      Cb.prototype.X = function(a) {
        if (a === this.l) return 0;
        var b = this.kb(a), c = this.Ba[b], d = this.Dh(b), e = d.gf, f = d.Ad, g = d.hf, h = d.zh, k = d.Ah;
        if (c) {
          d = c.event;
          c = c.jj;
          var l = pu(this.l) === a;
          h = h || a.nextSibling;
          var m = k || a.previousSibling;
          k = !l && h ? this.kb(h) : null;
          m = !l && m ? this.kb(m) : null;
          l = this.l;
          h = this.options;
          e = this.kb(e || a.parentNode || a.parentElement) || 0;
          var p = f, r = void 0;
          m = void 0 === m ? null : m;
          k = void 0 === k ? null : k;
          p = void 0 === p ? {} : p;
          r = void 0 === r ? Ra(a) : r;
          if (R(r)) a = void 0;
          else {
            f = { id: b, prev: m !== e ? m : null, next: k !== e ? k : null, parent: e, name: r.toLowerCase(), node: a };
            if (Kg(a)) {
              if (g = Fp(a, g), f.attributes = {}, f.content = g) {
                if (a = Ud(l, a)) f.content = "" !== eb(g) ? Vp(l, g) : g, f.hidden = a;
              }
            } else g = Gp(l, a, h, p, r), l = g.pb, f.attributes = g.Og, l && (f.hidden = l), a.namespaceURI && kb(a.namespaceURI, "svg") && (f.namespace = a.namespaceURI);
            a = f;
          }
          if (R(a)) return;
          this.Ba[b] = null;
          this.Hb.push(b);
          d.result[c] = a;
          d.zc += 1;
          d.nodes.length === d.zc && d.Uc(d.result);
        }
        return b;
      };
      Cb.prototype.flush = function() {
        this.ba(true);
      };
      Cb.prototype.hd = function() {
        if (this.Hb.length) {
          var a = Ac(this.Hb, this.Qi), b = oh(this.l, 30);
          a(b);
        }
      };
      Cb.prototype.ba = function(a) {
        var b = this;
        if (Qh(this.l)) {
          var c = ka(this.Ba);
          c = N(function(d, e) {
            b.Ba[e] && d.push(b.Ba[e].node);
            return d;
          }, [], c);
          c = Ac(c, this.X);
          a = a ? Uk(C) : Sk(this.l, 20);
          c(a);
          this.oc = oa(function(d) {
            return d.zc !== d.result.length;
          }, this.oc);
        }
      };
      Cb.prototype.Dh = function(a) {
        if (Wa(a)) return {};
        var b = this.Ra[a];
        return b ? (this.Ra[a] = null, this.Hb.push(a), b) : {};
      };
      var Iv = ["input", "change", "keyup", "paste", "cut"];
      Ym(Qb, V);
      Qb.prototype.start = function() {
        var a = this, b = this.G.xa();
        this.ud = this.Vg();
        z(function(c) {
          c = c.toLowerCase();
          b.F(c, "NA:", I(a.Gc, a));
          b.F(c, "NR:", I(a.Hc, a));
        }, Jg);
        this.rb = [this.Qa.F(this.l.document, Iv, I(this.Ld, this)), function() {
          z(function(c) {
            c = c.toLowerCase();
            b.ga(c, "NA:", a.Gc);
            b.ga(c, "NR:", a.Hc);
          }, Jg);
          z(a.Yc, ka(a.inputs));
        }];
      };
      Qb.prototype.Yc = function(a) {
        var b = this.inputs[a];
        if (b) {
          if (this.ud) {
            var c = b.Ii;
            b = b.element;
            c && this.l.Object.defineProperty(b, this.vc(b), c);
          }
          delete this.inputs[a];
        }
      };
      Qb.prototype.Hc = function(a) {
        a && this.Yc(a.data.id);
      };
      Qb.prototype.Gc = function(a) {
        a && (a = a.data, this.Pc(a.node, a.id));
      };
      Qb.prototype.vc = function(a) {
        return Df(a) ? "checked" : "value";
      };
      Qb.prototype.Ld = function(a) {
        if (a = a.target) {
          var b = this.vc(a);
          this.xc(a[b], a);
        }
      };
      Qb.prototype.xc = function(a, b) {
        var c = this.X(b), d = this.inputs[c];
        if (!d && (d = this.Pc(d, c), !d)) return;
        var e = d;
        c = e.Xg;
        var f = e.value, g = this.vc(b), h = !a || H(typeof a, [
          "string",
          "boolean",
          "number"
        ]);
        e = this.G.Ib().Sd;
        h && a !== f && (f = cf(this.l, b, g, a, this.G.Ib()).value, c ? this.G.V("event", { target: this.X(b), checked: !!a }, "change") : (c = td(this.l, b, e), e = c.hb, this.G.V("event", { value: f, hidden: c.qb && !e, target: this.X(b) }, "change")), d.value = a);
      };
      Qb.prototype.Pc = function(a, b) {
        var c = this;
        if (!Dg(a) || "__ym_input_override_test" === a.getAttribute("class") || this.inputs[b]) return null;
        var d = Df(a), e = this.vc(a), f = { element: a, Xg: d, value: a[e] };
        this.inputs[b] = f;
        this.ud && gc(this.l, function() {
          var g = c.l.Object.getOwnPropertyDescriptor(
            Object.getPrototypeOf(a),
            e
          ) || {}, h = c.l.Object.getOwnPropertyDescriptor(a, e) || {}, k = B({}, g, h);
          if (Pa("((set)?(\\s?" + e + ")?)?", k.set)) {
            try {
              c.l.Object.defineProperty(a, e, B({}, k, { configurable: true, set: function(l) {
                c.xc(l, this);
                return k.set.call(this, l);
              } }));
            } catch (l) {
            }
            f.Ii = k;
          }
        });
        return f;
      };
      Qb.prototype.Vg = function() {
        var a = true, b = pb(this.l)("input");
        try {
          b = pb(this.l)("input");
          b.value = "INPUT_VALUE";
          b.style.setProperty("display", "none", "important");
          b.setAttribute("type", "text");
          b.setAttribute("class", "__ym_input_override_test");
          var c = this.l.Object.getOwnPropertyDescriptor(
            Object.getPrototypeOf(b),
            "value"
          ) || {}, d = this.l.Object.getOwnPropertyDescriptor(b, "value") || {}, e = B({}, c, d);
          this.l.Object.defineProperty(b, "value", B({}, e, { configurable: true, set: function(f) {
            return e.set.call(b, f);
          } }));
          "INPUT_VALUE" !== b.value && (a = false);
          b.value = "INPUT_TEST";
          "INPUT_TEST" !== b.value && (a = false);
        } catch (f) {
          a = false;
        }
        return a;
      };
      Ym(Pb, V);
      Pb.prototype.start = function() {
        V.prototype.start.call(this);
        this.$f();
      };
      Pb.prototype.Gi = function() {
        var a = this.Id();
        this.Yh(a) && (this.Xa = a, this.ag(a));
      };
      Pb.prototype.Ei = function() {
        var a = this.Id();
        this.Xa.orientation !== a.orientation && (this.Xa = a, this.Wi(a));
      };
      Pb.prototype.Ef = function(a) {
        return !a.height || !a.width || !a.pageWidth || !a.pageHeight;
      };
      Pb.prototype.Yh = function(a) {
        return a.height !== this.Xa.height || a.width !== this.Xa.width;
      };
      Pb.prototype.Id = function() {
        var a = this.G.jb(), b = t(pd(this.l)), c = b.next().value;
        b = b.next().value;
        a = a.Hd();
        return { width: c, height: b, pageWidth: a ? a.scrollWidth : 0, pageHeight: a ? a.scrollHeight : 0, orientation: this.G.jb().Mh() };
      };
      Pb.prototype.Wi = function(a) {
        var b = void 0 === b ? this.G.stamp() : b;
        this.G.V(
          "event",
          { width: a.width, height: a.height, orientation: a.orientation },
          "deviceRotation",
          b
        );
      };
      Pb.prototype.ag = function(a, b) {
        b = void 0 === b ? this.G.stamp() : b;
        this.G.V("event", { width: a.width, height: a.height, pageWidth: a.pageWidth, pageHeight: a.pageHeight }, "resize", b);
      };
      Pb.prototype.$f = function() {
        var a = this.Id();
        this.Ef(a) ? Y(this.l, I(this.$f, this), 300) : (this.Ef(this.Xa) && (this.Xa = a), this.ag(a, 0));
      };
      rd.prototype.ic = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = ma(this.l), e = this.index;
        this.index += 1;
        this.xb[e] = {
          Oa: 0,
          Rb: false,
          fn: a,
          dd: [],
          Xd: d(ea)
        };
        var f = this;
        return function() {
          var g = Ua(arguments), h = c.ef && !f.xb[e].Rb, k = f.xb[e];
          ra(f.l, k.Oa);
          k.dd = g;
          k.Rb = true;
          var l = d(ea);
          if (h || l - k.Xd >= b) a.apply(null, Za(g)), k.Xd = l;
          k.Oa = Y(f.l, function() {
            h || (a.apply(null, Za(g)), k.Xd = d(ea));
            k.Rb = false;
            k.dd = [];
          }, b, "th");
        };
      };
      rd.prototype.flush = function() {
        var a = this;
        z(function(b) {
          var c = a.xb[b], d = c.Oa, e = c.fn, f = c.dd;
          c.Rb && (a.xb[b].Rb = false, e.apply(null, Za(f)), ra(a.l, d));
        }, ka(this.xb));
      };
      Ym(Wc, V);
      Wc.prototype.start = function() {
        V.prototype.start.call(this);
        this.G.V("event", { x: Math.max(
          this.l.scrollX,
          0
        ), y: Math.max(this.l.scrollY, 0), page: true, target: -1 }, "scroll", 0);
      };
      Wc.prototype.stop = function() {
        V.prototype.stop.call(this);
        this.Ca.flush();
      };
      Wc.prototype.Hi = function(a) {
        if (this.G.jb().zf()) this.Kc(a);
        else {
          var b = a.target, c = oa(function(d) {
            return t(d).next().value === b;
          }, this.pg).pop();
          if (c) (0, c[1])(a);
          else c = this.Ca.ic(I(this.Kc, this), 100, { ef: true }), this.pg.push([b, c]), c(a);
        }
      };
      Wc.prototype.Kc = function(a) {
        var b = this.G.jb().Hd();
        a = a.target;
        var c = this.Jb(a);
        b = b === a || this.l === a || this.l.document === a;
        var d = Math.max(
          c.left,
          0
        );
        c = Math.max(c.top, 0);
        if (b) {
          if (this.Pe.x === d && this.Pe.y === c) return;
          this.Pe = { x: d, y: c };
        }
        this.G.V("event", { x: d, y: c, page: b, target: b ? -1 : this.X(a) }, "scroll");
      };
      Wc.prototype.Jb = function(a) {
        var b = { left: 0, top: 0 };
        if (!a) return b;
        if (a.window === a) return { top: a.scrollY || 0, left: a.scrollX || 0 };
        var c = a.ownerDocument || a, d = a.documentElement, e = c.defaultView || c.parentWindow, f = c.body;
        return a !== c || (a = this.G.jb().Hd(), a) ? H(a, [d, f]) ? { top: a.scrollTop || e.scrollY, left: a.scrollLeft || e.scrollX } : { top: a.scrollTop || 0, left: a.scrollLeft || 0 } : b;
      };
      var Ep = ["mousemove", "mousedown", "mouseup", "click"];
      Ym(Td, V);
      Td.prototype.stop = function() {
        V.prototype.stop.call(this);
        this.Ca.flush();
      };
      Td.prototype.Di = function(a) {
        var b = null;
        try {
          b = a.type;
        } catch (c) {
          return;
        }
        "mousemove" === b ? this.dj(a) : this.Fc(a);
      };
      Td.prototype.Fc = function(a) {
        var b = a.type, c = void 0 === a.clientX ? null : a.clientX, d = void 0 === a.clientY ? null : a.clientY;
        a = a.target || this.l.document.elementFromPoint(c, d);
        this.G.V("event", { x: c || 0, y: d || 0, target: this.X(a) }, b);
      };
      var Dp = ["focus", "blur"];
      Ym(Cg, V);
      Cg.prototype.yh = function(a) {
        var b = a.target;
        a = a.type;
        this.G.V("event", { target: this.X(b === this.l ? this.l.document.documentElement : b) }, a);
      };
      var Jv = u(function(a) {
        var b = ua(a.getSelection, "getSelection");
        return b ? I(b, a) : C;
      }), Kv = y(Jv, Ba), Cp = ["mousemove", "touchmove", "mousedown", "touchdown", "select"], Lv = /text|search|password|tel|url/;
      Ym(Sd, V);
      Sd.prototype.Wh = function(a) {
        var b = this.G, c = a.type, d = a.which;
        a = a.target;
        if ("mousemove" !== c || 1 === d) (c = "select" === c ? this.Qh(a) : this.Oh()) && c.start !== c.end ? (this.Od = true, b.V("event", c, "selection")) : this.Od && (this.Od = false, b.V("event", { start: 0, end: 0 }, "selection"));
      };
      Sd.prototype.Oh = function() {
        var a = Kv(this.l);
        if (a && 0 < a.rangeCount) {
          a = a.getRangeAt(0) || this.l.document.createRange();
          var b = this.X(a.startContainer), c = this.X(a.endContainer);
          if (!R(b) && !R(c)) return { start: a.startOffset, end: a.endOffset, startNode: b, endNode: c };
        }
      };
      Sd.prototype.Qh = function(a) {
        if (Lv.test(a.type || "")) {
          var b = this.X(a);
          if (!R(b)) return { start: a.selectionStart, end: a.selectionEnd, target: b };
        }
      };
      var Ae = {}, Rh = (Ae.focus = "windowfocus", Ae.blur = "windowblur", Ae.pageshow = "windowfocus", Ae.pagehide = "windowblur", Ae);
      Ym(Rd, V);
      Rd.prototype.start = function() {
        this.rb = [this.Qa.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], I(this.Kd, this))];
        "onpagehide" in this.l && this.rb.push(this.Qa.F(this.l, ["pageshow", "pagehide"], I(this.Md, this), null));
      };
      Rd.prototype.Md = function(a) {
        this.G.V("event", {}, Rh[a.type]);
      };
      Rd.prototype.Kd = function(a) {
        this.visibility ? this.G.V("event", {}, Rh[this.l.document[this.visibility.hidden] ? "blur" : "focus"]) : this.G.V(
          "event",
          {},
          Rh[a.type]
        );
      };
      var Bp = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"];
      Ym(sd, V);
      sd.prototype.Vi = function() {
        var a = this;
        this.scrolling = true;
        ra(this.l, this.Yf);
        this.Yf = Y(this.l, function() {
          a.scrolling = false;
        }, 150);
      };
      sd.prototype.fj = function(a) {
        var b = this, c = "touchcancel" === a.type || "touchend" === a.type;
        a.changedTouches && 0 < a.changedTouches.length && z(function(d) {
          var e = b.Sh(d);
          d.__ym_touch_id = e;
          c && delete b.Xc[d.identifier];
        }, Ka(a.changedTouches));
        "touchmove" === a.type ? this.scrolling ? this.Mb(a) : this.ej(a, this.G.stamp()) : this.Mb(a);
      };
      sd.prototype.Sh = function(a) {
        this.Xc[a.identifier] || (this.Xc[a.identifier] = hj());
        return this.Xc[a.identifier];
      };
      sd.prototype.Mb = function(a, b) {
        b = void 0 === b ? this.G.stamp() : b;
        var c = a.type, d = A(function(e) {
          return { id: e.__ym_touch_id, x: Math.round(e.clientX), y: Math.round(e.clientY), force: e.force };
        }, Ka(a.changedTouches));
        0 < d.length && this.G.V("event", { touches: d, target: this.X(a.target) }, c, b);
      };
      Ym(Bg, V);
      Bg.prototype.Ci = function(a) {
        a = a.target;
        "IMG" === Ra(a) && a.getAttribute("srcset") && this.G.V("mutation", { target: this.X(a), attributes: { src: a.currentSrc } }, "ac");
      };
      Ym(Vc, V);
      Vc.prototype.start = function() {
        if (this.sf()) {
          V.prototype.start.call(this);
          this.bc();
          var a = this.Qa.F(n(this.l, "visualViewport"), ["resize"], this.Ca.ic(this.bc, 10));
          this.rb.push(a);
        }
      };
      Vc.prototype.stop = function() {
        V.prototype.stop.call(this);
        this.Ca.flush();
      };
      Vc.prototype.bc = function() {
        var a = this.sf();
        a && a !== this.Ag && (this.Ag = a, this.Xi(a));
      };
      Vc.prototype.sf = function() {
        var a = Oe(this.l);
        return a ? a[2] : null;
      };
      Vc.prototype.Xi = function(a) {
        var b = Ug(this.l);
        this.G.V("event", { x: b.x, y: b.y, level: a }, "zoom");
      };
      var Uf = { 91: "super", 93: "super", 224: "super", 18: "alt", 17: "ctrl", 16: "shift", 9: "tab", 8: "backspace", 46: "delete" }, Fm = { Wj: 1, Fj: 2, alt: 3, shift: 4, Yj: 5, "delete": 6, Dj: 6 }, Mv = [4, 9, 8, 32, 37, 38, 39, 40, 46], Vf = {}, Gm = (Vf["1"] = { 91: "&#8984;", 93: "&#8984;", 224: "&#8984;", 18: "&#8997;", 17: "&#8963;", 16: "&#8679;", 9: "&#8677;", 8: "&#9003;", 46: "&#9003;" }, Vf["2"] = { 91: "&#xff;", 93: "&#xff;", 224: "&#xff;", 18: "Alt", 17: "Ctrl", 16: "Shift", 9: "Tab", 8: "Backspace", 46: "Delete" }, Vf.vi = { 32: "SPACEBAR", 37: "&larr;", 38: "&uarr;", 39: "&rarr;", 40: "&darr;", 13: "Enter" }, Vf), Nv = /flash/, Ov = /ym-disable-keys/, Pv = /^&#/;
      Ym(gb, V);
      gb.prototype.Th = function(a) {
        if (this.Dc(a) && !this.ki(a)) {
          var b = a.keyCode;
          a.repeat || this.mb[b] || (this.mb[a.keyCode] = true, Uf[a.keyCode] && !this.Ma ? (this.Ma += 1, this.Ae(a), this.reset(300)) : this.Ma ? (this.Sg(), this.te(a), this.wd()) : (this.reset(), this.te(a)));
        }
      };
      gb.prototype.Uh = function(a) {
        if (this.Dc(a)) {
          var b = a.keyCode, c = Uf[a.keyCode];
          this.mb[a.keyCode] && (this.mb[b] = false);
          c && this.Ma && (this.Ma = 0, this.mb = {});
          1 === this.Ea.length && (a = t(this.Ea).next().value, H(a.keyCode, Mv) && (this.Tc([a], true), this.reset()));
          this.Ea = oa(y(ba("keyCode"), Ia(b), hd), this.Ea);
          ra(this.l, this.lc);
        }
      };
      gb.prototype.Dc = function(a) {
        var b = this.l.document.activeElement;
        b = b && "OBJECT" === b.nodeName && Nv.test(b.getAttribute("type") || "");
        a = a.target;
        if (!a) return !b;
        a = "INPUT" === a.nodeName && "password" === a.getAttribute("type") && Ov.test(a.className);
        return !b && !a;
      };
      gb.prototype.wd = function() {
        this.lg = this.Ea.slice(0);
        ra(this.l, this.lc);
        this.lc = Y(this.l, x(this.lg, I(this.Tc, this)), 0, "e.c");
      };
      gb.prototype.Tc = function(a, b) {
        if (1 < a.length || (void 0 === b ? 0 : b)) {
          var c = this.Fd(a);
          this.G.V("event", { keystrokes: c }, "keystroke");
        }
      };
      gb.prototype.Fd = function(a) {
        var b = this;
        a = A(function(c) {
          c = c.keyCode;
          var d = Uf[c], e = b.Lh(c);
          return { id: c, key: e, isMeta: !!d && Pv.test(e), modifier: d };
        }, a);
        return jd(function(c, d) {
          return (Fm[c.modifier] || 100) - (Fm[d.modifier] || 100);
        }, a);
      };
      gb.prototype.Lh = function(a) {
        return Gm[this.Jg][a] || Gm.vi[a] || String.fromCharCode(a);
      };
      gb.prototype.te = function(a) {
        H(a, this.Ea) || this.Ea.push(a);
      };
      gb.prototype.Ae = function(a) {
        this.te(a);
        this.$b();
      };
      gb.prototype.$b = function() {
        this.Ma ? Y(this.l, this.$b, 100) : this.Ea = [];
      };
      gb.prototype.Sg = function() {
        ra(this.l, this.Rf);
      };
      gb.prototype.reset = function(a) {
        a ? this.Rf = Y(this.l, I(this.Qc, this), a) : this.Qc();
      };
      gb.prototype.Qc = function() {
        this.Ma = 0;
        this.Ea = [];
        this.mb = {};
        ra(this.l, this.lc);
      };
      gb.prototype.ki = function(a) {
        return a.target && "INPUT" === a.target.nodeName ? a.shiftKey || 32 === a.keyCode || "shift" === Uf[a.keyCode] : false;
      };
      var zp = ["sr", "sd", "\u043D"], Qv = /allow-same-origin/;
      Ym(kc, V);
      kc.prototype.start = function() {
        V.prototype.start.call(this);
        this.G.Ib().cc && this.G.xa().F("iframe", "NA:", I(this.ie, this));
        this.G.pf().Dd().F(["sdr"], I(this.je, this));
      };
      kc.prototype.stop = function() {
        V.prototype.stop.call(this);
        z(function(a) {
          a.G.stop();
        }, this.Ub);
      };
      kc.prototype.ke = function(a) {
        var b = a.pop().target;
        if (a = rb(function(d) {
          return d.yf === b;
        }, this.Ub)) {
          this.Ub = oa(function(d) {
            return d.yf !== b;
          }, this.Ub);
          var c = a.G.Ed();
          try {
            a.G.stop();
          } catch (d) {
          }
          this.fc(
            b,
            c
          );
        }
      };
      kc.prototype.ie = function(a) {
        if (a) {
          var b = a.data.node;
          this.qa.observe(b, { attributes: true, attributeFilter: ["src"] });
          this.fc(b, a.data.id);
        }
      };
      kc.prototype.fc = function(a, b) {
        var c = this;
        this.ii(a) && Sc(this.l, a)(lb(C, function() {
          var d = c.G.fc(a.contentWindow, b);
          c.Ub.push({ G: d, yf: a });
        }));
      };
      kc.prototype.je = function(a) {
        var b = this;
        if (Ap(a)) {
          var c = a.frameId;
          a = a.data;
          this.Bd[c] || (this.Bd[c] = { data: [] });
          var d = this.Bd[c];
          d.data = d.data.concat(a);
          this.l.isNaN(d.sd) && z(function(e) {
            "page" === e.type && (d.sd = e.data.recordStamp - b.G.qf());
          }, d.data);
          this.l.isNaN(d.sd) || (this.G.ba(A(function(e) {
            e.stamp += d.sd;
            e.stamp = b.l.Math.max(0, e.stamp);
            return e;
          }, d.data)), d.data = []);
        }
      };
      kc.prototype.ii = function(a) {
        var b = a.getAttribute("src"), c = a.getAttribute("sandbox");
        return a.getAttribute("_ym_ignore") || c && !c.match(Qv) || b && "about:blank" !== b && (b = hc(this.l, b).host) && W(this.l).host !== b ? false : n(a, "contentWindow.location.href");
      };
      var Rv = u(function(a) {
        var b = n(a, "sessionStorage");
        if (!b) return null;
        try {
          var c = b.getItem("__ym_tab_guid");
          b = false;
          var d = n(
            a,
            "opener.sessionStorage"
          );
          try {
            b = !!d && c === d.getItem("__ym_tab_guid");
          } catch (e) {
            b = true;
          }
          if (!c || b) c = hj(), a.sessionStorage.setItem("__ym_tab_guid", c);
          return c;
        } catch (e) {
          return null;
        }
      });
      Ym(bf, V);
      bf.prototype.start = function() {
        this.G.xa().yc({ nodes: [this.l.document.documentElement], Uc: this.ve });
      };
      bf.prototype.ve = function(a) {
        var b = this.G.Nh(), c = b.Eh(), d = W(this.l), e = d.host, f = d.protocol;
        d = d.pathname;
        var g = t(pd(this.l)), h = g.next().value;
        g = g.next().value;
        this.G.V("page", { content: A(
          function(k) {
            k.node = void 0;
            return k;
          },
          a
        ), base: c || "", hasBase: !!c, viewport: { width: h, height: g }, title: this.l.document.title, doctype: b.Gh() || "", address: this.l.location.href, ua: this.l.navigator.userAgent, referrer: this.l.document.referrer, screen: { width: this.l.screen.width, height: this.l.screen.height }, location: { host: e, protocol: f, path: d }, recordStamp: this.G.qf(), tabId: Rv(this.l) }, "page", 0);
      };
      var Sv = ["addRule", "removeRule", "insertRule", "deleteRule"];
      Ym(Ob, V);
      Ob.prototype.start = function() {
        var a = this.G.xa();
        a.F("style", "NA:", this.Ic);
        a.F(
          "style",
          "NR:",
          this.Jc
        );
        this.ba();
      };
      Ob.prototype.stop = function() {
        var a = this;
        V.prototype.stop.call(this);
        var b = this.G.xa();
        b.ga("style", "NA:", this.Ic);
        b.ga("style", "NR:", this.Jc);
        this.ba();
        ra(this.l, this.Ue);
        z(function(c) {
          a.ab[c].sheet && a.Uf(a.ab[c].sheet);
        }, ka(this.ab));
        this.ab = {};
      };
      Ob.prototype.ba = function() {
        var a = this;
        z(function(b) {
          b = t(b);
          var c = b.next().value;
          b = b.next().value;
          if (b.length) {
            for (var d = [], e = b[0].stamp, f = [], g = 0; g < b.length; g += 1) {
              var h = b[g], k = h.stamp;
              delete h.stamp;
              k <= e + 50 ? d.push(h) : (f.push(d), e = k, d = [h]);
            }
            d.length && f.push(d);
            f.length && z(function(l) {
              a.G.V("event", { target: Oa(c), changes: l }, "stylechange", e);
            }, f);
            delete a.Vb[c];
          }
        }, Ca(this.Vb));
        this.Ue = Y(this.l, this.ba, 100);
      };
      Ob.prototype.vb = function(a, b, c, d, e) {
        this.Vb[a] || (this.Vb[a] = []);
        this.Vb[a].push({ op: b, style: void 0 === d ? "" : d, index: void 0 === e ? -1 : e, stamp: c });
      };
      Ob.prototype.Ji = function(a, b) {
        var c = this, d = a.addRule, e = a.removeRule, f = a.insertRule, g = a.deleteRule;
        P(d) && (a.addRule = function(h, k, l) {
          c.vb(b, "a", c.G.stamp(), h + "{" + k + "}", l);
          return d.call(a, h, k, l);
        });
        P(e) && (a.removeRule = function(h) {
          c.vb(b, "r", c.G.stamp(), "", h);
          return e.call(a, h);
        });
        P(f) && (a.insertRule = function(h, k) {
          c.vb(b, "a", c.G.stamp(), h, k);
          return f.call(a, h, k);
        });
        P(g) && (a.deleteRule = function(h) {
          c.vb(b, "r", c.G.stamp(), "", h);
          return g.call(a, h);
        });
      };
      Ob.prototype.Uf = function(a) {
        var b = this;
        z(function(c) {
          var d = b.l.CSSStyleSheet.prototype[c];
          P(d) && (a[c] = I(d, a));
        }, Sv);
      };
      Ob.prototype.qh = function(a) {
        try {
          return a.cssRules || a.rules;
        } catch (b) {
          return null;
        }
      };
      Ob.prototype.Ic = function(a) {
        var b = a.data;
        a = b.id;
        b = b.node;
        if (b.sheet && !b.getAttribute("src") && !b.innerText) {
          var c = b.sheet, d = this.qh(c);
          if (d && d.length) {
            for (var e = [], f = 0; f < d.length; f += 1) e.push({ style: d[f].cssText, index: f, op: "a" });
            this.G.V("event", { changes: e, target: a }, "stylechange");
          }
          this.Ji(c, a);
          this.ab[a] = b;
        }
      };
      Ob.prototype.Jc = function(a) {
        a = a.data.id;
        var b = this.ab[a];
        b && (delete this.ab[a], b.sheet && this.Uf(b.sheet));
      };
      var yg = [[Ob, "ss"], [Qb, "in"], [Db, "mu"], [Pb, "r"], [Wc, "sc"], [Td, "mo"], [Cg, "f"], [Sd, "se"], [Rd, "wf"], [sd, "t"], [Bg, "src"], [Vc, "z"], [gb, "ks"]];
      yg.push([kc, "if"]);
      yg.push([bf, "pa"]);
      var wp = u(function(a) {
        var b = a.document;
        return { Hd: function() {
          if (b.scrollingElement) return b.scrollingElement;
          var c = 0 === xb(b.compatMode, "CSS1") ? b.documentElement : b.body;
          return n(b, "documentElement.scrollHeight") >= n(b, "body.scrollHeight") ? c : null;
        }, Mh: function() {
          var c = a.screen;
          if (!c) return 0;
          var d = rb(x(c, n), ["orientation", "mozOrientation", "msOrientation"]);
          return n(c, d + ".angle") || 0;
        }, Pj: x(a, zb), zf: x(a, gf), Oj: x(a, Ih) };
      });
      Dc.prototype.start = function(a) {
        this.jg = true;
        this.Sb = a;
        this.Zf();
      };
      Dc.prototype.stop = function() {
        this.stopped || (this.stopped = true, Qh(this.l) && (z(function(a) {
          return a.stop();
        }, this.We), this.Pd.stop(), this.Kb && this.Kb.stop(), this.ja || this.V("event", {}, "eof")));
      };
      Dc.prototype.fc = function(a, b) {
        var c = new Dc(a, B({}, this.options, { frameId: b }));
        c.start(C);
        return c;
      };
      Dc.prototype.bi = function() {
        var a = this;
        this.ja = !!this.options.frameId;
        this.Lb = this.options.frameId || 0;
        this.Xb = !this.ja;
        var b = this.options.vg || [];
        b.push(W(this.l).host);
        this.Kb = yp(this.l, this, b);
        b = this.Kb.Dd();
        zb(this.l) ? this.Xb && b.F(["i"], function(c) {
          if (false === c.ja || true === c.ja) a.ja = c.ja, a.Xb = false, c.frameId && (a.Lb = c.frameId), a.Zf();
        }) : this.Xb = this.ja = false;
      };
      Dc.prototype.Zf = function() {
        var a = Tc(this.rd);
        this.ba(a);
      };
      Dc.prototype.Be = function() {
        this.Ee = bh(this.l);
        this.recordStamp = this.Ee(ea);
        z(function(a) {
          a.start();
        }, this.We);
        this.Pd.start();
      };
      var Hm = u(function(a) {
        var b = L(a), c = b.C("isEU");
        if (R(c)) {
          var d = Oa(Yd(a, "is_gdpr") || "");
          if (H(d, [0, 1])) b.D("isEU", d), c = !!d;
          else if (a = $a(a).C("wasSynced"), a = n(a, "params.eu")) b.D("isEU", a), c = !!a;
        }
        return c;
      }, function(a) {
        return L(a).C("isEU");
      }), vg = D("i.e", Hm), Tv = D("i.ep", function(a) {
        Hm(a);
      }), Uv = D("w2", function(a, b) {
        function c() {
          h = true;
        }
        var d = L(a), e = O(b);
        if (!b.zb || Xe(a) || !a.MutationObserver || !Pa("Element", a.Element)) return C;
        Pa("MutationObserver", a.MutationObserver) || Kc(a, e).warn("w2mo");
        var f = Ha(function(k, l) {
          sa(b, l)["catch"](k);
        }), g = Sc(a)(Kh(F([a, b], tp)))($l(function(k) {
          return new Dc(a, k);
        })), h = false;
        Ps([g, f])(lb(E(a, "wv2.R.c"), function(k) {
          k = t(k);
          var l = k.next().value;
          k = k.next().value;
          if (!h) {
            c = I(l.stop, l);
            var m = d.C("wv2Counter");
            if (!jj(a, k) || m) c();
            else if (d.D("wv2Counter", e), d.D("stopRecorder", c), k = yj(a, "7", "6")) {
              m = new vp(a, b, k.type);
              var p = hb.lf(e, "m", I(m.wi, m), k, a), r = hb.lf(e, "e", I(m.oh, m), k, a);
              "onpagehide" in a ? na(a).F(a, ["pagehide"], function(v) {
                v.persisted ? (p.flush(true), r.flush(true)) : c();
              }, null) : na(a).F(a, ["beforeunload", "unload"], c);
              k = up();
              m = k.Ai;
              r.F("ag", k.Ng);
              r.F("p", m);
              p.F("see", function(v) {
                var w = false;
                z(function(K) {
                  "page" === K.type && (w = true);
                }, v);
                w && (h || r.push({ type: "event", event: "fatalError", data: { code: "invalid-snapshot", ph: "p.s.f", stack: "" } }), c());
              });
              var q = Tb(function(v) {
                "eof" === n(v, "data.type") || "eof" === v.event ? (r.push(v), p.push(v), r.flush(true), p.flush(true)) : ("event" === v.type ? r : p).push(v);
              });
              Y(a, c, 864e5);
              gc(a, function() {
                var v = {}, w = {};
                wb(a, (w.counterKey = e, w.name = "webvisor", w.data = (v.version = 2, v), w));
                l.start(q);
              });
            }
          }
        }));
        return function() {
          return c();
        };
      }), Vv = D("w2.cs", function(a, b) {
        var c = O(b), d = {};
        Yg(a, c, (d.webvisor = !!b.zb, d));
      }), Wv = ["rt", "mf"], ug = u(tc, O), dj = y(Od, Cc), Xv = bc("isp", function(a, b) {
        sa(b, function(c) {
          var d = rb(function(h) {
            return n(c, "settings." + h);
          }, Wv);
          if (d && se(a)) {
            var e = "rt" === d && Md(c) && !Te(a);
            if (!e) {
              var f = ug(b);
              B(f, { Ob: d, status: e ? 3 : 4 });
              e = pp(a, b, d);
              var g = function(h) {
                f.status = h;
              };
              return ("mf" === d ? rp : qp)(a, b, e).then(x(1, g))["catch"](x(2, g));
            }
          }
        })["catch"](E(a, "l.isp"));
      }), Im = D("fbq.o", function(a, b, c) {
        var d = n(a, "fbq");
        if (d && d.callMethod) {
          var e = function() {
            var g = Ua(arguments), h = d.apply(null, Za(g));
            b(g);
            return h;
          };
          B(e, d);
          c && z(b, c);
          a.fbq = e;
        } else var f = Y(a, F([a, b].concat(Ka(d && d.queue)), Im), 1e3, "fbq.d");
        return I(ra, null, a, f);
      }), Be = {}, Sh = (Be.add_to_wishlist = "add-to-wishlist", Be.begin_checkout = "begin-checkout", Be.generate_lead = "submit-lead", Be.add_payment_info = "add-payment-info", Be), ec = {}, Th = (ec.AddToCart = "add-to-cart", ec.Lead = "submit-lead", ec.InitiateCheckout = "begin-checkout", ec.Purchase = "purchase", ec.CompleteRegistration = "register", ec.Contact = "submit-contact", ec.AddPaymentInfo = "add-payment-info", ec.AddToWishlist = "add-to-wishlist", ec.Subscribe = "subscribe", ec), Ce = {}, np = (Ce["1"] = Sh, Ce["2"] = Sh, Ce["3"] = Sh, Ce["0"] = Th, Ce), op = [Th.AddToCart, Th.Purchase], Yv = va(function(a, b) {
        var c = n(b, "ecommerce"), d = n(b, "event") || "";
        if (!(c = c && d && { version: "3", nc: d })) a: {
          if (G(b) || qb(b)) {
            if (d = t(Ua(b)), c = d.next().value, d = d.next().value, "event" === c && d) {
              c = { version: "2", nc: d };
              break a;
            }
          }
          c = void 0;
        }
        c || (c = (c = n(b, "ecommerce")) && { version: "1", nc: J(",", ka(c)) });
        c && a(c);
      }), Zv = D("ag.e", function(a, b) {
        if ("0" === b.ca) {
          var c = [], d = E(a, "ag.s", F([Ba, c], z));
          sa(b, function(e) {
            if (n(e, "settings.auto_goals") && Ja(a, b) && (e = of(a, b, "autogoal").reachGoal)) {
              e = F([e, b.vd], mp);
              var f = Yv(e);
              e = F([a, e], lp);
              c.push(Im(
                a,
                e
              ));
              c.push(Vj(a, "dataLayer", function(g) {
                g.qa.F(f);
              }));
            }
          });
          return d;
        }
      }), $v = /[^\d.,]/g, aw = /[.,]$/, jp = D("ep.pp", function(a, b) {
        if (!b) return 0;
        a: {
          var c = b.replace($v, "").replace(aw, "");
          for (var d = "0" === c[c.length - 1], e = c.length; 0 < e && !(3 < c.length - e + 1 && d); --e) {
            var f = c[e - 1];
            if (H(f, [",", "."])) {
              c = f;
              break a;
            }
          }
          c = "";
        }
        c = (d = c) ? b.split(d) : [b];
        d = d ? c[1] : "00";
        c = parseFloat(Ve(c[0]) + "." + Ve(d));
        d = Math.pow(10, 8) - 0.01;
        a.isNaN(c) ? c = 0 : (c = a.Math.min(c, d), c = a.Math.max(c, 0));
        return c;
      }), bw = [[["EUR", "\u20AC"], "978"], [[
        "USD",
        "\u0423\\.\u0415\\.",
        "\\$"
      ], "840"], [["UAH", "\u0413\u0420\u041D", "\u20B4"], "980"], ["\u0422\u0413 KZT \u20B8 \u0422\u04A2\u0413 TENGE \u0422\u0415\u041D\u0413\u0415".split(" "), "398"], [["GBP", "\xA3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20BD P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], cw = u(function(a) {
        return new RegExp(J("|", a), "i");
      }), dw = D("ep.cp", function(a) {
        if (!a) return "643";
        var b = ju(a);
        return (a = rb(
          function(c) {
            c = t(c).next().value;
            return cw(c).test(b);
          },
          bw
        )) ? a[1] : "643";
      }), ew = u(function() {
        function a() {
          var k = h + "0", l = h + "1";
          f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = c(8), f[l] = 1) : (e[k] = c(8), f[k] = 1);
        }
        function b() {
          var k = h + "1";
          f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1);
        }
        function c(k) {
          k = void 0 === k ? 1 : k;
          var l = d.slice(g, g + k);
          g += k;
          return l;
        }
        for (var d = J("", bj("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")), e = {}, f = {}, g = 1, h = ""; g < d.length - 1; ) ("0" === c() ? b : a)();
        return e;
      }), gp = D("ep.dec", function(a, b) {
        if (!b || Xe(a)) return [];
        var c = t(bj(b)), d = c.next().value, e = c.next().value, f = c.next().value;
        c = Ta(c);
        if (2 !== hf(d)) return [];
        d = ew();
        c = J("", c);
        e = hf(e + f);
        for (var g = f = "", h = 0; g.length < e && c[h]; ) f += c[h], d[f] && (g += String.fromCharCode(hf(d[f])), f = ""), h += 1;
        d = jc(a, ti(g));
        return G(d) ? A(st, d) : [];
      }), ip = D("ep.ent", function(a, b, c) {
        a = "" + fb(a, 10, 99);
        c = "" + 100 * b + c + a;
        if (16 < qb(c)) return "";
        c = cj("0", 16, c);
        b = c.slice(0, 8);
        c = c.slice(-8);
        b = (+b ^ 92844).toString(35);
        c = (+c ^ 92844).toString(35);
        return "" + b + "z" + c;
      }), Jm = y(aj, dw), Km = D("ep.ctp", function(a, b, c, d) {
        var e = Jm(a, c), f = $i(a, d);
        Zi(a, b, e, f);
        Pa("MutationObserver", a.MutationObserver) && new a.MutationObserver(function() {
          var g = Jm(a, c), h = $i(a, d);
          if (e !== g || f !== h) e = g, f = h, Zi(a, b, e, f);
        }).observe(a.document.body, { attributes: true, childList: true, subtree: true, characterData: true });
      }), fw = D("ep.chp", function(a, b, c, d, e) {
        c && tg(a, b);
        return d || e ? na(a).F(a.document, ["click"], E(a, "ep.chp.cl", F([a, b, d, e], hp))) : C;
      }), lw = D(
        "ep.i",
        function(a, b) {
          if (Ld(a)) return fp(a, b).then(function(c) {
            var d = t(c.kh), e = d.next().value, f = d.next().value, g = d.next().value, h = d.next().value, k = d.next().value, l = d.next().value, m = d.next().value, p = d.next().value, r = d.next().value, q = d.next().value, v = d.next().value, w = d.next().value, K = d.next().value, S = d.next().value, pa = d.next().value, Zb = d.next().value;
            if (!c.isEnabled) return M.resolve(C);
            var xe = Ze(a, e), Rf = Ze(a, h), gw = Ze(a, m), hw = Ze(a, r), iw = "" + e + f + g === "" + h + k + l;
            return new M(function(jw, kw) {
              Sc(a)(lb(kw, function() {
                xe && Km(a, b, f, g, v, w, K);
                Rf && !iw && Km(a, b, k, l, S, pa, Zb);
                jw(fw(a, b, gw || hw, p, q));
              }));
            });
          });
        }
      ), Uo = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], mw = D("cc.i", function(a, b) {
        var c = F([a, b], ep);
        c = F([a, c, 300, void 0], Y);
        sa(b, c);
      }), nw = x("9-d5ve+.r%7", T), ow = D("ad", function(a, b) {
        if (!b.Ta) {
          var c = L(a);
          if (!c.C("adBlockEnabled")) {
            var d = function(m) {
              H(m, ["2", "1"]) && c.D("adBlockEnabled", m);
            }, e = Zc(a), f = e.C("isad");
            if (f) d(f);
            else {
              var g = x("adStatus", c.D), h = function(m) {
                m = m ? "1" : "2";
                d(m);
                g("complete");
                e.D(
                  "isad",
                  m,
                  1200
                );
                return m;
              }, k = xa(a, "adb", b);
              if (!c.C("adStatus")) {
                g("process");
                var l = "metrika/a" + nw().replace(/[^a-v]+/g, "") + "t.gif";
                bp(a, function() {
                  return k({ ha: { ra: l } }).then(x(false, h))["catch"](x(true, h));
                });
              }
            }
          }
        }
      }), pw = D("pr.p", function(a, b) {
        if (kh(a)) {
          var c = xa(a, "5", b), d = {};
          d = La((d.pq = 1, d.ar = 1, d));
          var e = {};
          c({ K: d, H: (e["page-url"] = W(a).href, e["page-ref"] = n(a, "document.referrer") || "", e) }, b)["catch"](E(a, "pr.p.s"));
        }
      }), Yi = false, qw = D("fid", function(a) {
        var b = C;
        if (!P(a.PerformanceObserver)) return b;
        var c = L(a);
        if (c.C("fido")) return b;
        c.D("fido", true);
        var d = new a.PerformanceObserver(E(a, "fid", function(f) {
          f = f.getEntries()[0];
          c.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
          b();
        }));
        b = function() {
          return d.disconnect();
        };
        try {
          var e = {};
          d.observe((e.type = "first-input", e.buffered = true, e));
        } catch (f) {
        }
        return b;
      }), rw = u(y(ba("performance.memory.jsHeapSizeLimit"), Qa("concat", ""))), sw = ["availWidth", "availHeight", "availTop"], tw = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), uw = ["webgl", "experimental-webgl"], $o = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0], qg = x(Ya("ccf"), Xa), Zo = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"), Wi = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), Xo = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), Uh = u(function(a, b) {
        var c = L(a), d = $a(a), e = [], f = F([a, b, c, d], wr);
        ce(a) || xr(a, "14.1") || e.push(F([To, "pp", ""], f));
        var g = !rm(a) || og(a, 68);
        g && e.push(F([Vo, "pu", ""], f));
        !g || d.Rd || se(a) || (e.push(F([So, "zzlc", "na"], f)), e.push(F([Ro, "cc", ""], f)));
        return e.length ? {
          ta: function(h, k) {
            if (0 === c.C("isEU")) try {
              z(nf, e);
            } catch (l) {
            }
            k();
          },
          R: function(h, k) {
            var l = h.K;
            if (l && 0 === c.C("isEU")) try {
              z(Ha(l), e);
            } catch (m) {
            }
            k();
          }
        } : {};
      }, y(ob, O)), vw = y(function(a) {
        return (a = n(a, "navigator.plugins")) && qb(a) ? y(Ka, Nb, Tt(function(b, c) {
          return b.name > c.name ? 1 : 2;
        }), Tb(tr))(a) : "";
      }, lf(",")), ww = /* @__PURE__ */ function(a) {
        return function(b) {
          var c = pb(b);
          if (!c) return "";
          c = c("canvas");
          var d = [], e = a(), f = e.rh;
          e = e.fh;
          try {
            var g = Qa("getContext", c);
            d = A(y(T, g), e);
          } catch (h) {
            return "";
          }
          return (g = rb(T, d)) ? f(b, { canvas: c, Tg: g }) : "";
        };
      }(function() {
        return { fh: uw, rh: No };
      }), Lo = [
        "name",
        "lang",
        "localService",
        "voiceURI",
        "default"
      ], xw = D("ice", function(a, b, c) {
        if (b = Ja(a, b)) {
          if (c = Ri(a, c)) return Qi(a, b, c), true;
        }
      }), yw = D("ice", function(a, b, c) {
        if (b = Ja(a, b)) {
          if (c = Ri(a, c)) return jk(a, c.hi).then(F([a, b, c], Qi), E(a, "ice.s")), true;
        }
      }), zw = ["text", "email", "tel"], Aw = ["cc-", "name", "shipping"], Bw = D("icei", function(a, b) {
        if (lm(a)) {
          var c = false, d = C, e = C;
          sa(b, function(f) {
            if (!(vg(a) || n(f, "settings.eu") || c)) {
              f = n(f, "settings.cf") ? yw : xw;
              var g = F([a, b], f), h = function(k) {
                return Ig(a, k) || !H(k.type, zw) || Va(Ib, A(x(k.autocomplete, kb), Aw)) ? false : true;
              };
              d = Ui(
                a,
                "input",
                ["blur"],
                g,
                h
              );
              e = Ui(a, "form", ["submit"], function(k) {
                var l = k.target;
                if (l) {
                  l = Bb("input", l);
                  var m = 0;
                  z(function(p) {
                    20 <= m || !h(p) || g({ target: p, isTrusted: k.isTrusted, Ud: true }) && (m += 1);
                  }, l);
                }
              });
            }
          });
          return function() {
            c = true;
            d();
            e();
          };
        }
      }), Pi, Cw = D("p.ai", function(a, b) {
        if (ce(a) || ig(a)) return sa(b, function(c) {
          if (c = n(c, "settings.sbp")) {
            var d = {};
            return Oi(a, B({}, c, (d.c = b.id, d)), 10);
          }
        });
      }), Dw = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "), Lm = bc("uah", function(a) {
        if (!Pa(
          "getHighEntropyValues",
          n(a, "navigator.userAgentData.getHighEntropyValues")
        )) return M.reject("0");
        try {
          return a.navigator.userAgentData.getHighEntropyValues(Dw).then(function(b) {
            if (!la(b)) throw "2";
            return b;
          }, function() {
            throw "1";
          });
        } catch (b) {
          return M.reject("3");
        }
      }), Mm = new RegExp(J("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(
        /[./]/g,
        "\\$&"
      )), Do = u(function(a) {
        var b = Fb(a);
        return (b = Mm.test(b)) ? M.resolve(b) : Lm(a).then(function(c) {
          try {
            return N(function(d, e) {
              return d || Mm.test(e.brand);
            }, false, c.brands);
          } catch (d) {
            return false;
          }
        }, x(false, T));
      }), Rc = ["0", "1", "2", "3"], qd = Rc[0], hg = Rc[1], Ew = Rc[2], Nm = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"], Mi = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(Nm), gg = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(Nm).concat([
        "28",
        "29",
        "30",
        "31"
      ]), Fw = "3 13 14 31 15 16 17 28".split(" "), Re = y(Tb(ba("ymetrikaEvent.type")), St(Qc(gg))), Gw = { ri: true, url: "https://yastatic.net/s3/gdpr/v3/gdpr", Mf: "", Ff: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ") }, Go = bc("gdpr", function(a, b, c, d, e) {
        function f(p) {
          b("10");
          c.F(Mi, function(r) {
            r = r.type;
            var q = {};
            l.eg((q.type = r, q));
            p({ value: Ni(r) });
          });
        }
        var g = void 0 === e ? Gw : e;
        e = g.url;
        var h = g.Mf, k = g.ri;
        g = Jo(a, g.Ff, d.wj);
        var l = Ue(a, d);
        if (!l) return M.resolve({
          value: qd,
          Td: true
        });
        if (a._yaGdprLoaded) return new M(function(p) {
          b("7");
          f(p);
        });
        var m = Pe(a, { src: "" + e + (k ? "" : g) + h + ".js" });
        return new M(function(p, r) {
          m ? (b("7"), m.onerror = function() {
            b("9");
            var q = {};
            l.eg((q.type = "GDPR-ok-view-default", q));
            p(null);
          }, m.onload = x(p, f)) : (b("9"), r(Ya("gdp.e")));
        });
      }), Nc = {}, Io = (Nc["GDPR-ok"] = "ok", Nc["GDPR-ok-view-default"] = "ok-default", Nc["GDPR-ok-view-detailed"] = "ok-detailed", Nc["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Nc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Nc["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Nc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", Nc), Bo = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "), Li = [], Ji = Qa("push", Li), Ao = u(function(a, b) {
        var c = b.C("gdpr");
        return H(c, Rc) ? "-" + c : "";
      }), fg = {}, Yh = u(tc, O), Om = u(If), Hw = u(function() {
        var a = N(function(b, c) {
          "ru" !== c && (b[c] = Am + "." + c);
          return b;
        }, {}, uh);
        z(function(b) {
          a[b] = b;
        }, ka(um));
        a["mc.webvisor.org"] = "mc.webvisor.org";
        return a;
      }), qo = u(function(a) {
        a = W(a).hostname;
        return (a = rb(y(
          ba("1"),
          Rt("test"),
          db(Ba)(a)
        ), Ca(um))) && a[0];
      }), Pm = /* @__PURE__ */ function(a, b) {
        return function(c, d) {
          if (se(c) || pe(c)) return {};
          var e = O(d);
          e = Hw(e);
          var f = oo(c, e), g = L(c), h = zb(c);
          return { R: function(k, l) {
            var m = k.K;
            m = !(m && m.C("pv"));
            if (h || m || !f.length) return l();
            if (g.C("startSync")) Om(c).push(l);
            else {
              g.D("startSync", true);
              m = F([c, f, C, false], a);
              var p = t(jg).next().value;
              if (!p) return l();
              l();
              p(c).then(m).then(C, y(vd(C), E(c, b)))["catch"](C);
            }
          } };
        };
      }(function(a, b, c, d) {
        var e = ma(a), f = L(a), g = $a(a);
        c = Zd(a, "c");
        var h = Gb(a, c);
        return Rb(function(k, l) {
          function m() {
            var q = g.C("synced");
            f.D("startSync", false);
            q && (q[l.ui] = p, g.D("synced", q));
            q = Om(a);
            z(Ba, q);
            Tc(q);
          }
          var p, r = h({ N: { ea: ["sync.cook"], Na: 1500 } }, [Da.Ka + "//" + l.cj + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
            p = e(yb);
            m();
          })["catch"](function() {
            p = e(yb) - 1435;
            m();
          });
          r = x(r, T);
          return k.then(r);
        }, M.resolve(), b)["catch"](E(a, "ctl"));
      }, "sy.c"), mo = va(function(a, b) {
        var c = b.qd, d = b.Qe, e = b.cookie, f = Di(b)[a];
        f = Ne(f, d);
        c !== f && (c = Ei(e, d), c[f] += 1, no(c, b));
      }), Iw = u(function(a) {
        var b;
        (b = n(a, "document.referrer")) ? (b = hc(
          a,
          b
        ).host, b = kk(b), b = Am + "." + (b || Av)) : b = pc;
        b = ["mc.webvisor.org", b];
        a = Zc(a);
        return { cookie: a, Qe: b, qd: b.length - 1, Zh: Ei(a, b) };
      }), lo = y(Iw, Ha), fc = {}, jo = (fc.brands = "chu", fc.architecture = "cha", fc.bitness = "chb", fc.uaFullVersion = "chf", fc.fullVersionList = "chl", fc.mobile = "chm", fc.model = "cho", fc.platform = "chp", fc.platformVersion = "chv", fc), go = u(function(a) {
        return Lm(a).then(ho, ko);
      }), Jw = bc("ot", function(a, b) {
        if (yf(a)) {
          var c = na(a);
          return sa(b, E(a, "ot.s", function(d) {
            if (n(d, "settings.oauth")) {
              var e = [], f = Od(a, b);
              e.push(c.F(
                a,
                ["message"],
                E(a, "ot.m", x(f, fo))
              ));
              Sc(a)(lb(C, E(a, "ot.b", function() {
                function g(p) {
                  var r = p.href;
                  if (r && Oc(r, "https://oauth.yandex.ru/") && !kb(r, "_ym_uid=")) {
                    r = kb(r, "?") ? "&" : "?";
                    var q = {};
                    p.href += "" + r + fd((q._ym_uid = f, q.mc = "v", q));
                    c.F(p, ["click"], E(a, "ot.click", function() {
                      var v = "et=" + k(ea);
                      p.href += "&" + v;
                    }));
                  }
                }
                var h = a.document.body, k = ma(a), l = Bb("a", h);
                z(g, l);
                if (Pa("MutationObserver", a.MutationObserver)) {
                  l = new a.MutationObserver(E(a, "ot.m", x(function(p) {
                    p = p.addedNodes;
                    for (var r = 0; r < p.length; r += 1) {
                      var q = p[r];
                      "A" === q.nodeName && g(q);
                    }
                  }, z)));
                  var m = {};
                  m = (m.childList = true, m.subtree = true, m);
                  l.observe(h, m);
                  e.push(I(l.disconnect, l));
                }
              })));
              return F([nf, e], z);
            }
          }));
        }
      }), Kw = D("p.cta", function(a) {
        Sc(a)(lb(C, function() {
          var b = L(a);
          if (co(a.document)) {
            var c = 0;
            if (ej(a, af, "cta")) {
              var d = C, e = function() {
                fj(af, "cta");
                d();
                ra(a, c);
              };
              d = na(a).F(a, ["message"], D("p.cta.o", F([a, b, e], eo)));
              c = Y(a, e, 1500);
            } else b.D("cta.e", "if");
          } else b.D("cta.e", "ns");
        }));
      }), Wn = "pbjsInit bidRequested bidAdjustment bidWon bidResponse bidTimeout auctionInit auctionEnd adRenderSucceeded adRenderFailed".split(" "), Zn = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"], Qm = {}, zi = (Qm.netRevenue = function(a) {
        return Q(a) ? "net" === a : !!a;
      }, Qm), yc = {}, xi, Lw = D("pj", function(a, b) {
        var c = Ja(a, b), d = c && c.params;
        if (!d) return C;
        c = {};
        return c.pbjs = function(e) {
          G(e) && (e = oa(Ib, A(function(f) {
            if (la(f) && f.data && f.event && (la(f.data) || G(f.data))) {
              var g = n(f, "data.args");
              return g ? { event: f.event, data: g } : f;
            }
          }, e)), Un(e), $n(a, d));
        }, c;
      }), Rm = db(Oc)("btn:"), Mw = db(Oc)("form:"), Rn = u(function() {
        var a = Bk();
        return N(function(b, c) {
          b[a[c]] = c;
          return b;
        }, {}, ka(a));
      }), Qn = /(\D\d*)/g, Nw = u(tc), Ow = Tb(function(a) {
        a.patterns = A(si, a.patterns);
        a.price_patterns = A(si, a.price_patterns);
        return a;
      }), Kn = "ytm.js ytm.dom ytm.load ytm.init ytm.click ytm.linkClick ytm.formSubmit".split(" "), On = ["ytm.click", "ytm.linkClick", "ytm.formSubmit"], Mn = ["ytm.js"], qi = ["ytm.js", "ytm.dom", "ytm.load"], pi = C, In = u(function(a, b) {
        pi = b;
      }), mn = He("c.ch", function(a, b, c, d) {
        d = d[c["var"]];
        if (!d) throw Z("var: " + c["var"]);
        b = "event" === d.type ? oi(b, { type: "dataLayer", key: "event" }, void 0) : "dataLayer" === d.type ? oi(b, d, void 0) : "cnst" === d.type ? d.value : void 0;
        d = c.target;
        a = Bn(a, c.fn);
        if (!a) throw Z("fn: " + c.fn);
        return a(b, d);
      }, false), An = "clientInformation globalThis this caches console cookieStore credentialless crypto customElements document documentPictureInPicture event external fence frameElement frames history indexedDB launchQueue localStorage location mozInnerScreenX mozInnerScreenY navigation navigator opener orientation origin originAgentCluster parent performance scheduler self sessionStorage sharedStorage speechSynthesis top trustedTypes visualViewport window alert atob back blur btoa cancelAnimationFrame cancelIdleCallback captureEvents clearImmediate clearInterval clearTimeout close confirm dump fetch find focus forward getComputedStyle getDefaultComputedStyle getScreenDetails getSelection matchMedia moveBy moveTo open postMessage print prompt queryLocalFonts queueMicrotask releaseEvents reportError requestAnimationFrame requestFileSystem requestIdleCallback resizeBy resizeTo scroll scrollBy scrollByLines scrollByPages scrollTo setImmediate setInterval setTimeout showDirectoryPicker showModalDialog showOpenFilePicker showSaveFilePicker sizeToContent stop structuredClone".split(" "), Pw = u(function(a, b) {
        return N(function(c, d) {
          c[d] = a[d];
          return c;
        }, {}, b);
      }), Qw = "protocol host port path query extension fragment href".split(" "), vb = {}, Sm = (vb.access_globals = mi, vb.access_local_storage = mi, vb.get_cookies = ni, vb.get_referrer = function(a, b, c) {
        return a.oa({ permissionType: "referrer", permissionParams: { urlComponent: c || "href" } });
      }, vb.get_url = function(a, b, c) {
        return a.oa({ permissionType: "url", permissionParams: { urlComponent: c || "href" } });
      }, vb.inject_hidden_iframe = cg, vb.load_script = cg, vb.logging = function(a) {
        return a.oa({
          permissionType: "log",
          permissionParams: null
        });
      }, vb.read_data_layer = function(a, b, c) {
        return c ? a.oa({ permissionType: "dataLayer", permissionParams: { key: c, operation: 2 } }) : false;
      }, vb.read_title = function(a) {
        return a.oa({ permissionType: "readTitle", permissionParams: null });
      }, vb.send_pixel = cg, vb.set_cookies = ni, vb), wa = {}, li = (wa.callInWindow = function(a) {
        var b = a.l, c = a.Y;
        return function(d) {
          var e = Zm.apply(1, arguments);
          md(d);
          c.checkPermission({ permissionType: "globals", permissionParams: { key: d, operation: 4 } });
          var f = n(b, d);
          if (!P(f)) throw Z("ca.c.wenf");
          e = f.apply(null, Za(e));
          return kd(b, e);
        };
      }, wa.callLater = function(a) {
        var b = a.l;
        return function(c) {
          Y(b, c, 0);
        };
      }, wa.copyFromDataLayer = function(a) {
        var b = a.l, c = a.Y, d = a.event;
        return function(e) {
          if (!d) throw Z("No dataLayer data");
          c.checkPermission({ permissionType: "dataLayer", permissionParams: { key: e, operation: 2 } });
          return kd(b, n(d, e));
        };
      }, wa.copyFromWindow = function(a) {
        var b = a.l, c = a.Y;
        return function(d) {
          md(d);
          if (Oc(d, "on")) throw Z("rwp");
          c.checkPermission({ permissionType: "globals", permissionParams: { operation: 2, key: d } });
          d = n(b, d);
          return kd(b, d);
        };
      }, wa.createArgumentsQueue = function(a) {
        var b = a.l, c = a.Y;
        return function(d, e) {
          function f() {
            return g.push(arguments);
          }
          c.checkPermission({ permissionType: "globals", permissionParams: { key: d, operation: 2 } });
          c.checkPermission({ permissionType: "globals", permissionParams: { key: d, operation: 1 } });
          c.checkPermission({ permissionType: "globals", permissionParams: { key: e, operation: 2 } });
          c.checkPermission({ permissionType: "globals", permissionParams: { key: e, operation: 1 } });
          md(d);
          md(e);
          var g = [], h = Ke(b, d);
          h.value || (h.parent[h.Oc] = f);
          h = Ke(b, e);
          if (h.value) {
            if (!G(h.value)) throw Z("ca.akna");
            g = h.value;
          } else h.parent[h.Oc] = g;
          return f;
        };
      }, wa.createQueue = function(a) {
        var b = a.l, c = a.Y;
        return function(d) {
          c.checkPermission({ permissionType: "globals", permissionParams: { key: d, operation: 2 } });
          c.checkPermission({ permissionType: "globals", permissionParams: { key: d, operation: 1 } });
          md(d);
          var e = Ke(b, d);
          d = e.value;
          var f = e.parent;
          e = e.Oc;
          if (!d) f[e] = [];
          else if (!G(d)) throw Z("akna");
          return I(f[e].push, f[e]);
        };
      }, wa.decodeUri = function(a) {
        var b = a.l;
        return function(c) {
          try {
            return b.decodeURI(c);
          } catch (d) {
          }
        };
      }, wa.decodeUriComponent = function(a) {
        var b = a.l;
        return function(c) {
          try {
            return b.decodeURIComponent(c);
          } catch (d) {
          }
        };
      }, wa.encodeUri = function(a) {
        var b = a.l;
        return function(c) {
          try {
            return b.encodeURI(c);
          } catch (d) {
          }
        };
      }, wa.encodeUriComponent = function(a) {
        var b = a.l;
        return function(c) {
          try {
            return b.encodeURIComponent(c);
          } catch (d) {
          }
        };
      }, wa.getCookieValues = function(a) {
        var b = a.l, c = a.Y;
        return function(d, e) {
          e = void 0 === e ? true : e;
          c.checkPermission({
            permissionType: "cookies",
            permissionParams: { name: d, operation: 2 }
          });
          return N(function(f, g) {
            var h = t(eb(g).split("=")), k = h.next().value;
            h = h.next().value;
            k === d && f.push(e ? sh(h) : h);
            return f;
          }, [], b.document.cookie.split(";"));
        };
      }, wa.getTimestamp = function(a) {
        var b = a.l;
        return function() {
          return ma(b)(ea);
        };
      }, wa.getType = function(a) {
        var b = a.l;
        return function(c) {
          return R(c) ? "undefined" : Wa(c) ? "null" : Mb(b, c) ? "number" : Q(c) ? "string" : true === c || false === c ? "boolean" : P(c) ? "function" : G(c) ? "array" : "object";
        };
      }, wa.getUrl = function(a) {
        var b = a.l, c = a.Y;
        return function(d) {
          d = H(d, Qw) ? d : "href";
          c.checkPermission({ permissionType: "url", permissionParams: { urlComponent: d } });
          var e = W(b);
          return "protocol" === d ? e.protocol : "host" === d ? e.host : "port" === d ? e.port : "path" === d ? e.pathname : "query" === d ? e.search : "fragment" === d ? e.hash : "extension" === d ? (d = e.pathname.split("."), 1 === d.length ? null : d.pop()) : e.href;
        };
      }, wa.injectHiddenIframe = function(a) {
        var b = a.l, c = a.Y;
        return function(d, e) {
          e = void 0 === e ? C : e;
          c.checkPermission({ permissionType: "iframe", permissionParams: { url: d } });
          var f = pb(b)("iframe");
          B(
            f.style,
            { display: "none", width: "1px", height: "1px", visibility: "hidden" }
          );
          f.src = d;
          f.onload = function() {
            return e();
          };
          f.onerror = C;
          ic(b).appendChild(f);
        };
      }, wa.JSON = function(a) {
        var b = a.l;
        return { parse: function(c) {
          try {
            return b.JSON.parse("" + c);
          } catch (d) {
          }
        }, stringify: function(c) {
          try {
            return b.JSON.stringify(c);
          } catch (d) {
          }
        } };
      }, wa.loadScript = function(a) {
        var b = a.l, c = a.Y;
        return function(d, e, f) {
          c.checkPermission({ permissionType: "loadScript", permissionParams: { url: d } });
          var g = P(e) ? He("ls.ol", function() {
            return e.apply(null);
          }) : C, h = P(f) ? He("ls.ol", function() {
            return f.apply(null);
          }) : void 0;
          Hi(b, d, g, h);
        };
      }, wa.localStorage = function(a) {
        var b = a.Y, c = a.l.localStorage;
        return { getItem: function(d) {
          b.checkPermission({ permissionType: "localStorage", permissionParams: { key: d, operation: 2 } });
          return c.getItem(d);
        }, setItem: function(d, e) {
          b.checkPermission({ permissionType: "localStorage", permissionParams: { key: d, operation: 1 } });
          c.setItem(d, e);
        }, removeItem: function(d) {
          b.checkPermission({ permissionType: "localStorage", permissionParams: { key: d, operation: 1 } });
          c.removeItem(d);
        } };
      }, wa.logToConsole = function(a) {
        var b = a.l, c = a.Y;
        return function() {
          var d = Zm.apply(0, arguments);
          if (c.oa({ permissionType: "log", permissionParams: { logLevel: 0 } })) {
            var e;
            (e = qm(b)).log.apply(e, Za(d));
          }
        };
      }, wa.Math = function(a) {
        return Pw(a.l.Math, "abs floor ceil round max min pow sqrt".split(" "));
      }, wa.Object = function(a) {
        var b = a.l;
        return { keys: ka, values: Ul, freeze: function(c) {
          return b.Object.freeze(c);
        }, entries: Ca, "delete": function(c, d) {
          if (!c || !U(c, d) || G(c) || c === b) return false;
          try {
            return delete c[d];
          } catch (e) {
            return false;
          }
        } };
      }, wa.queryPermission = function(a) {
        var b = a.Y;
        return function(c, d, e) {
          return (R(d) || Q(d)) && U(Sm, c) ? (0, Sm[c])(b, c, d, e) : false;
        };
      }, wa.readTitle = function(a) {
        var b = a.l, c = a.Y;
        return function() {
          c.checkPermission({ permissionType: "readTitle", permissionParams: null });
          return b.document.title;
        };
      }, wa.sendPixel = function(a) {
        var b = a.Y, c = a.l;
        return function(d, e, f) {
          e = void 0 === e ? C : e;
          f = void 0 === f ? C : f;
          if (!Q(d)) throw Z("ca.p.uns");
          b.checkPermission({ permissionType: "pixel", permissionParams: { url: d } });
          di(c, d, e, f);
        };
      }, wa.setCookie = function(a) {
        var b = a.l, c = a.Y;
        return function(d, e, f, g) {
          f = void 0 === f ? {} : f;
          g = void 0 === g ? true : g;
          c.checkPermission({ permissionType: "cookies", permissionParams: { name: d, operation: 1, options: f } });
          e = g ? Pd(e) : e;
          d = d + "=" + e + ";";
          if (f) {
            U(f, "domain") && (d += " Domain=" + f.domain + ";");
            U(f, "path") && (d += " Path=" + f.path + ";");
            U(f, "expires") && (d += " Expires=" + f.expires + ";");
            if (U(f, "max-age")) {
              if (!Mb(b, f["max-age"])) throw Z("ca.c.mann");
              d += " Max-Age=" + f["max-age"] + ";";
            }
            if (U(f, "sameSite")) {
              if (!H(f.sameSite, ["Lax", "Strict", "None"])) throw Z("ca.c.ssuop");
              d += " Same-Site=" + f.sameSite + ";";
            }
            U(f, "secure") && f.secure && (d += " Secure;");
          }
          b.document.cookie = d;
        };
      }, wa.setInWindow = function(a) {
        var b = a.l, c = a.Y;
        return function(d, e, f) {
          f = void 0 === f ? false : f;
          c.checkPermission({ permissionType: "globals", permissionParams: { key: d, operation: 1 } });
          md(d);
          try {
            var g = Ke(b, d), h = g.parent, k = g.Oc;
            if (!f && U(h, k)) return false;
            h[k] = e;
            return true;
          } catch (l) {
            return false;
          }
        };
      }, wa), Rw = D("p.ips", function(a, b) {
        sa(b, function(c) {
          (n(c, "settings.phchange") || n(c, "settings.phhide")) && Gi(a, "tag_phone", b, c);
        });
      }), Sw = D(
        "p.suic",
        function(a, b) {
          return sa(b, function(c) {
            var d = qe(a);
            if (!d.C("pic") && !Md(c) && (c = n(c, "settings.pic"))) {
              var e = xa(a, "pic");
              d.D("pic", 1);
              return e({ N: { $c: false, Rc: true } }, [c]).then(function(f) {
                Q(f.bb) && (f = jc(a, f.bb)) && (f = n(f, "ymaf"), Q(f) && f && oe(a, "_ym_fa", f, 43200));
              });
            }
          })["catch"](E(a, "pic"));
        }
      ), Tw = D("p.tv", function(a) {
        if (mv(a)) {
          var b = L(a);
          or(a).then(function(c) {
            b.D("lgguid", c);
          }, E(a, "p.tv.p"));
        }
      }), Uw = D("p.cm", function(a) {
        qe(a).sa("mcs", D("p.cm.cs", function(b, c, d, e, f) {
          if (Ja(a, c)) return uj(b, c, d, e, f);
          Xa(Z("cmws.cd"));
        })).sa(
          "wsfm",
          Ub
        );
      }), Tm = {}, Um = u(tc), fn = y(Qa("exec", /counterID=(\d+)/), ba("1")), Vm = va(function(a, b) {
        var c = Um(a), d = t(Ka(b)), e = d.next().value, f = d.next().value, g = Ta(d);
        if (f) {
          d = t(De(a, e));
          var h = d.next().value, k = d.next().value;
          d = O(k);
          c[d] || (c[d] = {});
          c = c[d];
          b.bf || Tm[f] && N(function(l, m) {
            return l || !!m(a, k, g, h);
          }, false, Tm[f]) || ("init" === f ? (b.bf = true, h ? (f = {}, Wb(a, "" + e, "dc", (f.key = e, f))) : a["yaCounter" + k.id] = new a.Ya[Da.ec](B({}, g[0], k))) : h && h[f] && c.ai ? (h[f].apply(h, Za(g)), b.bf = true) : (d = c.ig, d || (d = [], c.ig = d), d.push(Ea([e, f], g))));
        }
      }), en = D("destruct.e", function(a, b, c) {
        return function() {
          var d = L(a), e = b.id;
          z(function(f, g) {
            return P(f) && E(a, "dest.fr." + g, f)();
          }, c);
          delete d.C("counters")[O(b)];
          delete a["yaCounter" + e];
        };
      }), Ed = L(window);
      Ed.sa("hitParam", {});
      Ed.sa("lastReferrer", window.location.href);
      (function() {
        da.push(function(a, b) {
          var c = {};
          return c.firstPartyParams = Eu(a, b), c.firstPartyParamsHashed = ds(a, b), c;
        });
        ve.push("fpp");
        ve.push("fpmh");
      })();
      (function() {
        var a = L(window);
        a.sa("getCounters", Fu(window));
        Fd.push(Gu);
        Nh.push(function(b, c) {
          c.counters = a.C("getCounters");
        });
      })();
      Ga["1"] = ub;
      da.push(Hu);
      Aa["1"] = vc;
      Jb(Xg, -1);
      qc["1"] = [[Xg, -1], [Ef, 1], [xf, 2], [Ub(), 3], [rk, 4]];
      da.push(Iu);
      da.push(D("p.ar", function(a, b) {
        var c = xa(a, "a", b), d = {};
        return d.hit = function(e, f, g, h, k, l) {
          var m = {};
          m = { H: {}, K: La((m.pv = 1, m.ar = 1, m)) };
          f = la(f) ? { title: f.title, Qf: f.referer, O: f.params, Zb: f.callback, l: f.ctx } : { title: f, Qf: g, O: h, Zb: k, l };
          h = he(b);
          g = e || W(a).href;
          h.url !== g && (h.ref = h.url, h.url = e);
          e = f.Qf || h.ref || a.document.referrer;
          h = {};
          h = Ic(a, b, "pv", (h.id = b.id, h.url = g, h.ref = e, h), f.O);
          k = B(m.M || {}, { O: f.O, title: f.title });
          l = {};
          m = c(B(m, { M: k, H: B(m.H || {}, (l["page-url"] = g, l["page-ref"] = e, l)) }), b).then(h);
          return wd(a, "p.ar.s", m, f.Zb || C, f.l);
        }, d;
      }));
      Ga.a = ub;
      qc.a = rc;
      Aa.a = vc;
      da.push(of);
      Ga.g = ub;
      Aa.g = vc;
      qc.g = rc;
      da.push(Ju);
      da.push(Ku);
      qc.t = rc;
      Ga.t = ub;
      Aa.t = vc;
      da.push(D("cl.p", function(a, b) {
        function c(p, r, q, v) {
          v = void 0 === v ? {} : v;
          q ? qf(a, b, { url: q, ob: true, Ac: p, Ec: r, sender: d, zg: v }) : g.warn("clel");
        }
        var d = xa(a, "2", b), e = [], f = O(b), g = Kc(a, f), h = E(a, "s.s.tr", x(tf(a, f), Vr));
        f = {
          l: a,
          fb: b,
          sh: e,
          sender: d,
          Lj: L(a),
          bh: Ad(a, b.id),
          Nj: ad(a),
          ij: x(x(f, Qf(a)), y(Ba, ba("trackLinks")))
        };
        f = E(a, "cl.p.c", x(f, Sr));
        f = na(a).F(a, ["click"], f);
        b.sg && h(b.sg);
        var k = E(a, "file.clc", F([true, false], c)), l = E(a, "e.l.l.clc", F([false, true], c));
        e = E(a, "add.f.e.clc", Lu(e));
        var m = {};
        return m.file = k, m.extLink = l, m.addFileExtension = e, m.trackLinks = h, m.u = f, m;
      }));
      qc["2"] = rc;
      Ga["2"] = ub;
      Aa["2"] = vc;
      Ga.r = Ff("r");
      Aa.r = ["f", "x", "j", "i"];
      jb.push(D("p.r", function(a, b) {
        var c = Nu(a), d = xa(a, "r", b), e = E(a, "rts.p");
        return sa(b, F([function(f, g) {
          var h = { id: g.ah, ca: g.ca }, k = {
            N: { aa: g.Ki },
            K: La(g.Qg),
            H: g.O,
            M: { Qb: g.Qb },
            ha: { ra: g.ra }
          };
          g.Ha && (k.Ha = lg(g.Ha));
          h = d(k, h)["catch"](e);
          return f.then(x(h, T));
        }, M.resolve(), c], N))["catch"](e);
      }));
      ha("r", function(a) {
        return { R: function(b, c) {
          var d = void 0 === b.K ? La() : b.K, e = b.M.Qb, f = ge(a), g = d.C("rqnl", 0) + 1;
          d.D("rqnl", g);
          if (d = n(f, J(".", [e, "browserInfo"]))) d.rqnl = g, Vg(a);
          c();
        }, ta: function(b, c) {
          ak(a, b);
          c();
        } };
      }, 1);
      Jb(pf, 100);
      ha("1", pf, 100);
      da.push(Ou);
      ha("n", Ef, 1);
      ha("n", xf, 2);
      ha("n", Ub(), 3);
      ha("n", pf, 100);
      Ga.n = ub;
      Aa.n = vc;
      sc({ Te: { da: "accurateTrackBounce" } });
      da.push(Pu);
      Ga.m = Ff("cm");
      Aa.m = hm;
      ha("m", Ub(["u", "v", "vf"]), 1);
      ha("m", pf, 2);
      sc({ Yg: { da: "clickmap" } });
      da.push(Qu);
      da.push(Ru);
      da.push(Su);
      da.push(Tu);
      (function() {
        da.push(Uu);
        ve.push("ecommerce");
        sc({ vd: { da: "ecommerce", Ua: function(a) {
          if (a) return true === a ? "dataLayer" : "" + a;
        } } });
      })();
      da.push(Wu);
      ve.push("user_id");
      da.push(Xu);
      Jb(function(a, b) {
        return { ta: function(c, d) {
          var e = Ja(a, b);
          e = e && e.userParams;
          var f = (c.M || {}).Me;
          e && f && e(f);
          d();
        } };
      }, 0);
      Hf.push("_ym_debug");
      Cd.unshift($u);
      da.push(av);
      (function() {
        var a = {};
        a = (a.tp = y(
          ob,
          gk,
          cc
        ), a.tpid = y(ob, bs), a);
        B(ke, a);
      })();
      Jb(fe, 20);
      ha("n", fe, 20);
      ha("1", fe, 20);
      Cd.unshift(cv);
      ke.fp = function(a, b, c) {
        if (c.H && c.H.nohit) return null;
        c = L(a).C;
        if (!c("fpe")) return null;
        b = bv(b);
        if (b.vh) return null;
        c = c("fht", Infinity);
        a: {
          var d = n(a, "performance.getEntriesByType");
          if (P(d)) {
            if (a = oa(y(T, ba("name"), Ia("first-contentful-paint")), d.call(a.performance, "paint")), a.length) {
              a = a[0].startTime;
              break a;
            }
          } else {
            var e = n(a, "chrome.loadTimes");
            d = em(a);
            if (P(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
              a = 1e3 * e - d;
              break a;
            }
            if (a = n(a, "performance.timing.msFirstPaint")) {
              a -= d;
              break a;
            }
          }
          a = void 0;
        }
        return a && c > a ? (b.vh = a, Math.round(a)) : null;
      };
      da.push(function(a, b) {
        var c = {};
        return c.ecommerceAdd = D("ecm.a", dv(a, b)), c.ecommerceRemove = D("ecm.r", ev(a, b)), c.ecommerceDetail = D("ecm.d", fv(a, b)), c.ecommercePurchase = D("ecm.p", gv(a, b)), c;
      });
      (function() {
        var a = { bu: nv, pri: fr };
        a.wv = x(2, T);
        a.ds = ir;
        a.co = function(c) {
          return Ab(L(c).C("jn"));
        };
        a.td = tv;
        var b = {};
        B(a, (b.iss = y(cu, cc), b.hdl = y(du, cc), b.iia = y(eu, cc), b.cpf = y(lv, cc), b.ntf = u(function(c) {
          c = n(c, "Notification.permission");
          c = "denied" === c ? false : "granted" === c ? true : null;
          return Wa(c) ? null : c ? 2 : 1;
        }), b.eu = Kb("isEU"), b.ns = em, b.np = function(c) {
          return fb(c, 0, 100) ? null : ee(eb(Nj(c), 100));
        }, b));
        a.pani = ov;
        a.pci = pv;
        a.si = qv;
        a.gi = rv;
        a.pic = db(Yd)("_ym_fa");
        a.stlgg = Kb("lgguid");
        a.sttdi = pr;
        a.stti = qr;
        a.sttifa = rr;
        B(ke, a);
      })();
      (function() {
        var a = {};
        a.hc = Kb("hc");
        a.oo = Kb("oo");
        a.pmc = Kb("cmc");
        a.re = y(Es, cc);
        a.aw = function(b) {
          b = rb(y(fa, hd), [b.document.hidden, b.document.msHidden, b.document.webkitHidden]);
          return fa(b) ? null : Ab(!b);
        };
        a.rcm = wv;
        a.yu = function(b) {
          return (b = Jd(b, "").C("yandexuid")) && b.substring(0, 25);
        };
        a.ifc = Kb("ifc");
        a.ifb = Kb("ifb");
        a.ecs = Kb("ecs");
        a.csi = Kb("scip");
        a.cdl = Kb("cdl");
        a.eco = u(er, y(ob, O));
        a.dss = Kb("dSync");
        a.pis = Kb("pis");
        a.ucs = function(b) {
          return (b = Jd(b).C("ucs")) && b.substring(0, 25);
        };
        B(eh, a);
      })();
      Aa.er = Bd;
      (function(a) {
        try {
          var b = Zd(a, "er"), c = br(a, b);
          Zk.push(function(d, e, f, g) {
            if (!(0.01 >= a.Math.random())) {
              var h = {}, k = {}, l = {}, m = {}, p = {};
              c((p[d] = (m[Da.eb] = (l[e] = (k[f] = g ? (h[a.location.href] = g, h) : a.location.href, k), l), m), p));
            }
          });
        } catch (d) {
        }
      })(window);
      Zf.push(function(a, b) {
        if (n(a, "disableYaCounter" + b.id) || n(a, "Ya.disableMetrica")) {
          var c = O(b);
          delete L(a).C("counters", {})[c];
          Xa(Ya("oo.e"));
        }
      });
      dh.unshift(function(a) {
        return { R: function(b, c) {
          L(a).C("oo") || c();
        } };
      });
      Jb(function(a, b) {
        return { R: function(c, d) {
          var e = c.H, f = c.K;
          !xm[b.id] && f.C("pv") && b.exp && !e.nohit && (e.exp = b.exp, xm[b.id] = true);
          d();
        } };
      }, -99);
      da.push(xv);
      qc.e = rc;
      Ga.e = ub;
      Aa.e = vc;
      sc({ exp: { da: "experiments" } });
      lk.experiments = "ex";
      (function() {
        jg.push(yv);
        Ga.f = ub;
        var a = {};
        B(Aa, (a.f = Pf, a));
        ha("f", Ub(), 1);
        ha("f", vk, 2);
        ha("f", fe, 20);
      })();
      Zf.push(function(a, b) {
        var c = { wa: O(b), od: Ja(a, b), qg: ma(a), $d: $a(a) }, d = c.qg(yb);
        if (!c.$d.Rd) {
          var e = c.$d.C("ymoo" + c.wa);
          e && 30 > d - e ? (c = c.wa, delete L(a).C("counters", {})[c], Xa(Ya("uws"))) : sa(b, zv(c))["catch"](E(a, "d.f"));
        }
      });
      (function() {
        var a = ["x"], b = {};
        B(Aa, (b.s = a, b.S = a, b.u = Bd, b));
        a = {};
        B(Ga, (a.s = Gb, a.S = ub, a.u = Gb, a));
        ha("s");
        ha("u");
        ha("S", Ub(["v", "hid", "u", "vf", "rn"]), 1);
        da.push(D("s", Nq));
      })();
      Ga["8"] = Gb;
      ie.br = { check: qk, id: 0 };
      Aa["8"] = ["br"];
      da.push(D("p.us", function(a, b) {
        return sa(b, function(c) {
          if (n(c, "settings.sbp")) return Kj(a, c, { fb: b, Ob: "8", Yd: "cs" });
        });
      }));
      jb.push(Dv);
      sc({ zb: { da: "webvisor", Ua: Ib }, ih: { da: "disableFormAnalytics", Ua: Ib } });
      ha("4", Ub(Ph), 1);
      Ga["4"] = Bm;
      Aa["4"] = ["f", "x", "i"];
      jb.push(Hv);
      ha("W", Ub(Ph), 1);
      ue("wv", function(a, b) {
        return { R: function(c, d) {
          c.K.Tb("we", cc(b.zb));
          xj(a, b, c, "rn");
          d();
        } };
      }, 1);
      Aa.W = ["f", "x"];
      Ga.W = Bm;
      jb.push(Uv);
      da.push(Vv);
      sc({ zb: { da: "webvisor" } });
      sc({ kj: { da: "trustedDomains" }, cc: { da: "childIframe", Ua: Ib } });
      da.push(Xv);
      ha("pi");
      Ga.pi = Gb;
      Aa.pi = Bd;
      ue("w", function(a, b) {
        return { R: function(c, d) {
          if (c.K) {
            var e = ug(b), f = e.status;
            "rt" === e.Ob && f && (c.K.D("rt", f), c.ha || (c.ha = {}), c.ha.uf = 1 === f ? dj(a, b) + "." : "");
          }
          d();
        } };
      }, 2);
      da.push(Zv);
      da.push(lw);
      Aa["6"] = ["f", "x"];
      Ga["6"] = Gb;
      da.push(mw);
      da.push(uv);
      (function() {
        Nh.push(function(a, b) {
          b.informer = cp(a);
        });
      })();
      Jb(rg, 6);
      ha("1", rg, 6);
      ha("adb");
      ha("n", rg, 4);
      Aa.adb = Bd;
      Ga.adb = Lg;
      Fd.push(ow);
      Aa["5"] = vc;
      Ga["5"] = ub;
      qc["5"] = oa(y(sf, Qc([Ef, xf]), hd), rc);
      da.push(pw);
      ha("5", fe, 20);
      Jb(
        Xi,
        7
      );
      ha("n", Xi, 6);
      jb.push(qw);
      Ga.d = ub;
      ha("d", Ub(["hid", "u", "v", "vf"]), 1);
      Aa.d = Bd;
      ha("n", function(a, b) {
        return { ta: function(c, d) {
          if (!c.M || !c.M.force) {
            var e = 2e-3, f = b.id === Da.Hg ? 1 : 2e-3;
            e = void 0 === e ? 1 : e;
            f = void 0 === f ? 1 : f;
            var g = de(a);
            if (g && P(g.getEntriesByType)) {
              e = Math.random() > e;
              var h = Math.random() > f;
              if (!e || !h) {
                var k = g.getEntriesByType("resource"), l = {}, m = {};
                g = {};
                var p = wm();
                f = W(a).href;
                for (var r = 0; r < k.length; r += 1) {
                  var q = k[r], v = t(q.name.replace(vm, "").split("?")).next().value, w = Cc(v), K = {};
                  K = (K.dns = Math.round(q.domainLookupEnd - q.domainLookupStart), K.tcp = Math.round(q.connectEnd - q.connectStart), K.duration = Math.round(q.duration), K.response = Math.round(q.responseEnd - q.requestStart), K);
                  if ("script" === q.initiatorType && !e) {
                    var S = {};
                    m[v] = B(K, (S.name = q.name, S.decodedBodySize = q.decodedBodySize, S.transferSize = Math.round(q.transferSize), S));
                  }
                  !vv[w] && !p[w] || l[v] || h || (q = {}, l[v] = B(K, (q.pages = f, q)));
                }
                ka(l).length && (g.timings8 = l);
                ka(m).length && (g.scripts = m);
                ka(g).length && (e = {}, h = {}, xa(a, "d", b)({
                  K: La((e.ar = 1, e.pv = 1, e)),
                  N: { aa: Yb(a, g) || void 0 },
                  H: (h["page-url"] = f, h)
                }, { id: Da.Kg, ca: "0" })["catch"](E(a, "r.tim.ng2")));
              }
            }
          }
          d();
        } };
      }, 7);
      Aa.ci = ["x"];
      Ga.ci = Gb;
      jb.push(D("p.sci", function(a, b) {
        return sa(b, F([a, b], ap))["catch"](E(a, "ins.cs"));
      }));
      jb.push(kv);
      Jb(Uh, 8);
      ha("f", Uh, 3);
      ha("n", Uh, 5);
      Fd.push(function(a) {
        return D("fip", function(b) {
          if (!rm(b) || pe(b)) {
            var c = $a(b);
            if (!c.C("fip")) {
              var d = y(Tb(y(function(e, f) {
                return D("fip." + f, e)(b);
              }, I(Dt, null))), lf("-"))(a);
              c.D("fip", d);
            }
          }
        });
      }([ww, vw, function(a) {
        var b = n(a, "ApplePaySession"), c = W(a).protocol;
        a = b && "https:" === c && !zb(a) ? b : void 0;
        b = "";
        if (!a) return b;
        try {
          b = "" + a.canMakePayments();
          c = "";
          var d = a.supportsVersion;
          if (P(d)) for (var e = 1; 20 >= e; e += 1) c += d.call(a, e) ? "" + e : "0";
          return c + b;
        } catch (f) {
          return b;
        }
      }, function(a) {
        a = n(a, "navigator") || {};
        return a.doNotTrack || a.msDoNotTrack || "unknown";
      }, function(a) {
        if (a = jv(a)) try {
          for (var b = [], c = 0; c < sm.length; c += 1) {
            var d = a(sm[c]);
            b.push(d);
          }
          var e = b;
        } catch (f) {
          e = [];
        }
        else e = [];
        return e ? J("x", e) : "";
      }, function(a) {
        var b = void 0;
        b = void 0 === b ? tw : b;
        var c = n(a, "navigator") || {};
        b = A(x(c, n), b);
        b = J("x", b);
        try {
          var d = n(a, "navigator.getGamepads");
          var e = ua(d, "getGamepads") && a.navigator.getGamepads() || [];
        } catch (f) {
          e = [];
        }
        return b + "x" + qb(e);
      }, rw, function(a) {
        a = n(a, "screen") || {};
        return J("x", A(x(a, n), sw));
      }, function(a) {
        return J("x", Ko(a) || []);
      }, function(a) {
        a = Wo(a);
        return G(a) ? J("x", a) : a;
      }, function(a) {
        return (a = Yo(a)) ? J("x", A(F(["", ["matches", "media"]], Mo), Nb(Ul(a)))) : "";
      }]));
      Jb(function(a) {
        return { R: function(b, c) {
          var d = b.K, e = $a(a).C("fip");
          e && d && (d.D("fip", e), Se(b, "fip", Ab(e)));
          c();
        } };
      }, 9);
      ha("h", function(a) {
        return { ta: function(b, c) {
          var d = b.Si;
          Rg(b) && d && L(a).D("isEU", n(d, "settings.eu"));
          c();
        } };
      }, 3);
      Fd.push(Tv);
      jb.push(Bw);
      da.push(Cw);
      sc({ vj: { da: "yaDisableGDPR" }, wj: { da: "yaGDPRLang" } });
      dh.push(function(a, b) {
        return { R: F([a, b], xo) };
      });
      Hf.push("gdpr");
      Hf.push("gdpr_popup");
      th.push(function(a, b) {
        var c = Qe(a);
        c = Re(c);
        if (oa(Qc(Fw), c).length) return true;
        c = b(a, "gdpr");
        return H(c, [qd, Ew]);
      });
      Jb(Pm, 5);
      ha("1", Pm, 6);
      Aa.c = Bd;
      Ga.c = Gb;
      ue("w", eg, 3);
      ue("cm", eg, 1);
      ue("wv", eg, 1);
      ha("1", Ci, 7);
      Jb(Ci, 7);
      Cd.push(D("hcp", Ai));
      jb.push(D("p.ot", Jw));
      jb.push(bc(
        "cta",
        Kw,
        true
      ));
      ha("n", function(a) {
        var b = L(a);
        return { R: function(c, d) {
          var e = c.M || {}, f = b.C("cta"), g = b.C("cta.e");
          if (f || g) {
            e.O || (e.O = {});
            e.O.__ym || (e.O.__ym = {});
            var h = {};
            f ? (f = A(function(k) {
              var l = n(k, "topic");
              k = n(k, "version");
              var m = {};
              return m.topic = l, m.version = k, m;
            }, f), h.ct = f) : g && (h["ct.e"] = g);
            B(e.O.__ym, h);
            c.M = B(c.M || {}, e);
          }
          d();
        } };
      }, 7);
      ha("n", Xg, 8);
      da.push(Lw);
      ha("g", function(a, b) {
        return { R: function(c, d) {
          var e = c.H;
          if (e && e["page-url"]) {
            var f = e["page-url"];
            Rm(f) || Mw(f) ? sa(b, function(g) {
              var h = n(g, "settings.goal_values");
              if (h) {
                var k = (g = hc(a, f).query) ? cl(g) : void 0;
                if (k) {
                  g = c.M || {};
                  g.O || (g.O = {});
                  g.O.__ym || (g.O.__ym = {});
                  var l = Rm(f) ? Tn : Sn;
                  h = Ow(h);
                  var m = rb(x(k, l), h);
                  if (m) {
                    h = {};
                    k = {};
                    h = (k.cgd = (h.rg = m.id, h), k);
                    a: {
                      if (k = a.document.body) {
                        l = m.price_patterns;
                        m = Nw(m.id);
                        if (m.Cb) {
                          if (!Ek(a, m.Cb.element)) {
                            k = ui(m.Cb);
                            break a;
                          }
                          m.Cb = void 0;
                        }
                        for (var p = null, r = null, q = 0; q < l.length; q += 1) {
                          var v = t(l[q]), w = v.next().value;
                          v = v.next().value;
                          "p" === w ? (p = a, p = (r = Pn(v)) ? n(p, "document.evaluate") ? p.document.evaluate(
                            r,
                            p.document,
                            null,
                            p.XPathResult.FIRST_ORDERED_NODE_TYPE,
                            null
                          ).singleNodeValue : null : null, r = "x") : Ld(a) && (p = zc(v, k), r = "c");
                          if (p && r) {
                            m.Cb = { element: p, yd: r };
                            k = ui(m.Cb);
                            break a;
                          }
                        }
                      }
                      k = void 0;
                    }
                    k && (h.cgd.gp = Vd(kf(k.Mi)), h.cgd.mg = k.yd);
                    B(g.O.__ym, h);
                    c.M = B(c.M || {}, g);
                  }
                }
              }
              d();
            })["catch"](y(vd(d), E(a, "a.g.v"))) : d();
          } else d();
        } };
      }, -2);
      Cd.push(D("cdl", function(a) {
        var b = L(a).sa;
        if (a = n(a, "navigator.cookieDeprecationLabel")) try {
          a.getValue().then(x("cdl", b), F(["cdl", "e"], b));
        } catch (c) {
          b("cdl", "d");
        }
        else b("cdl", "na");
      }));
      sc({ jh: { da: "disableYtm", Ua: Ib } });
      Aa.ytm = gm;
      da.push(D("p.ytm", function(a, b) {
        if (!b.jh) {
          var c = false, d = function() {
            c = true;
          }, e = [], f = function(h, k) {
            e.push([h, k]);
          };
          sa(b, function(h) {
            if (!c && n(h, "settings.aytm")) return Hn(a), h = Zd(a, "ytm"), Gb(a, h)({ N: { ea: ["ytm"], cb: true } }, [Da.Ka + "//" + pc + "/ytm-config/" + b.id]).then(function(k) {
              var l = k.bb;
              if (!c && la(l)) {
                k = Bc(y(ba("conditions"), Tb(function(r) {
                  var q = l.variables[r["var"]];
                  r = r.target;
                  return q && "event" === q.type && Q(r) && r;
                }), Nb), l.triggers);
                var m = gn(a, "" + b.id), p = ln(a, l, m).dispatchEvent;
                f = m.Mg;
                z(function(r) {
                  var q = t(r);
                  r = q.next().value;
                  q = q.next().value;
                  return f(r, q);
                }, e);
                Tc(e);
                p(Hd(a, "ytm.init"));
                d = Jn(a, p, k);
              }
            });
          })["catch"](E(a, "ytm.s"));
          var g = {};
          return g.u = function() {
            return d();
          }, g.policy = function(h, k) {
            return f(h, k);
          }, g;
        }
      }));
      jb.push(Rw);
      Aa.pis = hm;
      Ga.pis = Gb;
      jb.push(D("p.sci", function(a, b) {
        return sa(b, function(c) {
          var d = n(c, "settings.pis");
          if (d && !Md(c)) {
            c = L(a);
            var e = c.C;
            c = c.D;
            e = e("pis");
            if (fa(e)) return e = xa(a, "pis"), c("pis", "0"), e({ N: { ea: ["pis"] } }, [d]).then(F(["pis", "1"], c), vd(F(["pis", "a"], c)));
          }
        })["catch"](E(a, "pis"));
      }));
      Aa.pic = gm;
      Ga.pic = Gb;
      jb.push(Sw);
      Cd.push(Tw);
      da.push(Uw);
      da.push(function(a, b) {
        var c = Um(a), d = O(b), e = c[d];
        e || (e = {}, c[d] = e);
        e.ai = true;
        if (c = e.ig) d = Vm(a), z(d, c);
      });
      jb.unshift(function(a, b) {
        sa(b, function(c) {
          var d = Gf(a), e = n(c, "settings.sm"), f = Vu(a);
          (d || e || f.id) && Gi(a, "tag_debug", b, c);
        });
      });
      z(db(Ba)(window), Cd);
      if (window.Ya && aa) {
        var Wm = Da.ec;
        window.Ya[Wm] = aa;
        Du(window);
        z(y(wf([window, window.Ya[Wm]]), Ba), Nh);
      }
      (function(a) {
        var b = n(a, "ym");
        if (b) {
          var c = n(b, "a");
          c || (b.a = [], c = b.a);
          var d = Vm(a);
          Gd(a, c, function(e) {
            e.qa.F(d);
          }, true);
        }
      })(window);
    })();
  } catch (aa) {
  }
  ;
}).call(this);
