!function() {
  "use strict";
  var t, o = new Uint8Array(16);
  function n() {
    if (!t && !(t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return t(o);
  }
  for (var e = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, r = [], a = 0; a < 256; ++a) r.push((a + 256).toString(16).substr(1));
  var i, s = function(t2) {
    var o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n2 = (r[t2[o2 + 0]] + r[t2[o2 + 1]] + r[t2[o2 + 2]] + r[t2[o2 + 3]] + "-" + r[t2[o2 + 4]] + r[t2[o2 + 5]] + "-" + r[t2[o2 + 6]] + r[t2[o2 + 7]] + "-" + r[t2[o2 + 8]] + r[t2[o2 + 9]] + "-" + r[t2[o2 + 10]] + r[t2[o2 + 11]] + r[t2[o2 + 12]] + r[t2[o2 + 13]] + r[t2[o2 + 14]] + r[t2[o2 + 15]]).toLowerCase();
    if (!function(t3) {
      return "string" == typeof t3 && e.test(t3);
    }(n2)) throw TypeError("Stringified UUID is invalid");
    return n2;
  }, l = function(t2, o2, e2) {
    var r2 = (t2 = t2 || {}).random || (t2.rng || n)();
    if (r2[6] = 15 & r2[6] | 64, r2[8] = 63 & r2[8] | 128, o2) {
      e2 = e2 || 0;
      for (var a2 = 0; a2 < 16; ++a2) o2[e2 + a2] = r2[a2];
      return o2;
    }
    return s(r2);
  }, d = parseInt(null === (i = navigator) || void 0 === i ? void 0 : i.userAgent.toLowerCase().split("msie")[1], 10) < 10, c = "height", u = "token", p = "rendered", f = "metric", C = "metricParams", g = "close", y = "closeWidget", h = "denied", m = 300;
  window.__CSRF__, (window.__USER__ || { uid: null }).uid;
  var E = function(t2, o2) {
    var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
    try {
      o2 && (null == n2 || n2.postMessage(d ? JSON.stringify(t2) : t2, o2));
    } catch (t3) {
    }
  }, _ = function(t2, o2) {
    var n2, e2, r2, a2 = function(n3) {
      if (n3.origin === t2 || n3.origin === window.origin) {
        var e3 = d ? JSON.parse(n3.data) : n3.data;
        o2(e3, n3);
      }
    };
    return n2 = window, e2 = "message", r2 = a2, n2 && ("addEventListener" in n2 ? n2.addEventListener(e2, r2, false) : n2.attachEvent("on" + e2, r2)), function() {
      return function(t3, o3, n3) {
        t3 && ("removeEventListener" in t3 ? t3.removeEventListener(o3, n3, false) : t3.detachEvent("on" + o3, n3));
      }(window, "message", a2);
    };
  }, v = function() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "_ru_yandex_autofill";
    return window.document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + t2 + "\\s*=\\s*([^;]*).*$)|^.*$"), "$1");
  }, b = function(t2) {
    var o2 = t2.name, n2 = void 0 === o2 ? "_ru_yandex_autofill" : o2, e2 = t2.value, r2 = void 0 === e2 ? "" : e2, a2 = t2.timeoutMs, i2 = void 0 === a2 ? 3e5 : a2, s2 = new Date((/* @__PURE__ */ new Date()).getTime() + i2);
    document.cookie = n2 + "=" + r2 + ";Expires=" + s2.toUTCString();
  }, w = function() {
    return "https://".concat("autofill", ".").concat("yandex.ru");
  };
  function x(t2) {
    return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, x(t2);
  }
  function B(t2, o2) {
    var n2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var e2 = Object.getOwnPropertySymbols(t2);
      o2 && (e2 = e2.filter(function(o3) {
        return Object.getOwnPropertyDescriptor(t2, o3).enumerable;
      })), n2.push.apply(n2, e2);
    }
    return n2;
  }
  function P(t2) {
    for (var o2 = 1; o2 < arguments.length; o2++) {
      var n2 = null != arguments[o2] ? arguments[o2] : {};
      o2 % 2 ? B(Object(n2), true).forEach(function(o3) {
        S(t2, o3, n2[o3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : B(Object(n2)).forEach(function(o3) {
        Object.defineProperty(t2, o3, Object.getOwnPropertyDescriptor(n2, o3));
      });
    }
    return t2;
  }
  function S(t2, o2, n2) {
    return (o2 = function(t3) {
      var o3 = function(t4) {
        if ("object" != x(t4) || !t4) return t4;
        var o4 = t4[Symbol.toPrimitive];
        if (void 0 !== o4) {
          var n3 = o4.call(t4, "string");
          if ("object" != x(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t4);
      }(t3);
      return "symbol" == x(o3) ? o3 : o3 + "";
    }(o2)) in t2 ? Object.defineProperty(t2, o2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[o2] = n2, t2;
  }
  var k, O = { clientID: "", targetOrigin: "", tokenPageOrigin: "", fields: [], theme: "light", parentId: "" }, T = function() {
    return O;
  }, L = {};
  function U() {
    window.innerWidth <= 500 && "100%" !== k.style.width ? (k.style.width = "100%", k.style.height = "100%", k.style.right = "", k.style.top = "", k.style.borderRadius = "") : window.innerWidth > 500 && "100%" === k.style.width && (k.style.right = "calc(50% - 225px)", k.style.top = "calc(50% - 330px)", k.style.width = "451px", k.style.height = "660px", k.style.borderRadius = "24px");
  }
  var G = function(t2) {
    var o2 = t2.type, n2 = t2.src, e2 = t2.shouldUseExistedControl, r2 = t2.parentId, a2 = t2.qrOptions, i2 = T(), s2 = i2.targetOrigin, l2 = i2.tokenPageOrigin, d2 = void 0 === l2 ? "" : l2, c2 = i2.theme;
    return e2 && L[o2] || (L[o2] = new Promise(function(t3, e3) {
      k = document.createElement("iframe");
      var i3 = false, l3 = false, u2 = null, p2 = function() {
      };
      k.id = "iframe", k.style.position = "fixed", k.style.right = "0", k.style.top = "0", k.style.border = "0", k.style.zIndex = "9999", k.style.display = "none", "datafill" === o2 && (k.style.display = "display", k.style.position = "fixed", k.style.border = "0px", k.style.zIndex = "9999", k.style.display = "block", k.style.backgroundColor = "white", window.innerWidth <= 500 && "100%" !== k.style.width ? (k.style.width = "100%", k.style.height = "100%") : (k.style.right = "calc(50% - 225px)", k.style.top = "calc(50% - 330px)", k.style.width = "451px", k.style.height = "660px", k.style.borderRadius = "24px"), window.addEventListener("resize", U)), ["autofill", "provider", "datafill"].includes(o2) ? (k.width = "100%", k.height = "100%") : "social" === o2 ? window.screen.width > 620 ? k.width = "600" : window.screen.width > 420 ? k.width = "400" : k.width = "100%" : ["suggest"].includes(o2) ? window.screen.width > 450 ? k.width = "380" : (k.width = "100%", k.style.top = "", k.style.bottom = "-24px") : ["suggest-button", "suggest-phone"].includes(o2) ? (k.width = "100%", k.style.position = "absolute") : "suggest-qr" === o2 && ("invisible" === (null == a2 ? void 0 : a2.qrType) ? (k.width = "0px", k.style.position = "absolute") : (k.width = "265px", k.style.position = "relative"));
      var f2 = function(t4) {
        var n3 = [];
        return n3.push(_(s2, t4)), ["suggest", "suggest-button", "suggest-qr", "suggest-phone"].includes(o2) && d2 && n3.push(_(d2, t4)), function() {
          return n3.forEach(function(t5) {
            return t5();
          });
        };
      }, C2 = function(t4) {
        return new Promise(function(o3) {
          var n3 = f2(function(t5) {
            "autofill" === t5.cause && (o3(t5), n3());
          });
          E(t4, s2, k.contentWindow);
        });
      }, g2 = function() {
        var t4;
        if (k.style.display = "none", null === (t4 = k.parentNode) || void 0 === t4 || t4.removeChild(k), i3 = false, "datafill" === o2) {
          window.removeEventListener("resize", U);
          var n3, e4 = r2 && document.getElementById(r2);
          e4 && (null === (n3 = e4.parentNode) || void 0 === n3 || n3.removeChild(e4));
        }
        "suggest" !== o2 && delete L[o2];
      }, y2 = function() {
        var t4, n3 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).renderUid;
        if (k.style.display = "block", "datafill" === o2) {
          var e4 = r2 && document.getElementById(r2);
          e4 && (e4.style.display = "block");
        }
        i3 ? C2({ cause: "sdk", type: "open", payload: { theme: c2, renderUid: n3 } }) : null === (t4 = u2) || void 0 === t4 || t4(p2);
      }, h2 = function(t4) {
        k.height = t4, "datafill" === o2 && (k.style.top = "calc(50% - ".concat(Number(t4) / 2, "px)"), k.style.height = t4 + "px");
      }, m2 = function() {
        k.removeEventListener("load", m2), i3 = true, l3 = false, t3({ elem: k, setHeight: h2, send: C2, subscribe: f2, destroy: g2, show: y2 });
      };
      p2 = function() {
        k.removeEventListener("load", p2), i3 = true, l3 = false, y2();
      }, (u2 = function(t4) {
        if (!l3) {
          l3 = true, k.src = n2;
          var e4 = ["suggest-qr"].includes(o2) && ["invisible"].includes(null == a2 ? void 0 : a2.qrType), i4 = r2 && document.getElementById(r2);
          i4 && !e4 ? ["suggest-button", "suggest-phone"].includes(o2) ? i4.children[0].appendChild(k) : i4.appendChild(k) : document.body.appendChild(k), k.addEventListener("load", t4);
        }
      })(m2), setTimeout(function() {
        i3 || g2(), e3(new Error("timeout"));
      }, 5e3);
    }));
  };
  function I(t2) {
    return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, I(t2);
  }
  function A(t2, o2) {
    for (var n2 = 0; n2 < o2.length; n2++) {
      var e2 = o2[n2];
      e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t2, j(e2.key), e2);
    }
  }
  function D(t2, o2, n2) {
    return (o2 = j(o2)) in t2 ? Object.defineProperty(t2, o2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[o2] = n2, t2;
  }
  function j(t2) {
    var o2 = function(t3) {
      if ("object" != I(t3) || !t3) return t3;
      var o3 = t3[Symbol.toPrimitive];
      if (void 0 !== o3) {
        var n2 = o3.call(t3, "string");
        if ("object" != I(n2)) return n2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t3);
    }(t2);
    return "symbol" == I(o2) ? o2 : o2 + "";
  }
  var M = function() {
    function t2(o3) {
      var n3 = this, e3 = o3.metrikaId, r2 = o3.encodedBoxes;
      if (function(t3, o4) {
        if (!(t3 instanceof o4)) throw new TypeError("Cannot call a class as a function");
      }(this, t2), D(this, "_counter", void 0), D(this, "_firstTime", true), D(this, "_goalTracer", {}), "undefined" != typeof window && e3) {
        window.yandex_metrika_callbacks2 = [], t2.callback(function() {
          try {
            n3._counter = new window.Ya.Metrika2({ id: e3, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true, experiments: r2 });
          } catch (t3) {
          }
        });
        var a2 = window.document.getElementsByTagName("script")[0], i2 = window.document.createElement("script");
        i2.type = "text/javascript", i2.async = true, i2.src = "https://mc.yandex.ru/metrika/tag.js", a2 && a2.parentNode && a2.parentNode.insertBefore(i2, a2);
      }
    }
    return o2 = t2, n2 = [{ key: "call", value: function(o3) {
      for (var n3 = this, e3 = arguments.length, r2 = new Array(e3 > 1 ? e3 - 1 : 0), a2 = 1; a2 < e3; a2++) r2[a2 - 1] = arguments[a2];
      var i2 = function() {
        var t3;
        (t3 = n3._counter)[o3].apply(t3, r2);
      };
      this._counter ? i2() : t2.callback(i2);
    } }, { key: "hit", value: function(t3, o3) {
      this._firstTime ? this._firstTime = false : this.call("hit", t3, o3);
    } }, { key: "reachGoal", value: function(t3, o3) {
      this.call("reachGoal", t3, o3);
    } }, { key: "reachGoalOnce", value: function(t3, o3) {
      this._goalTracer[t3] || (this.call("reachGoal", t3, o3), this._goalTracer[t3] = true);
    } }, { key: "userParams", value: function(t3) {
      this.call("userParams", t3);
    } }, { key: "params", value: function(t3) {
      this.call("params", t3);
    } }], e2 = [{ key: "callback", value: function() {
      var t3;
      "undefined" != typeof window && Array.isArray(window.yandex_metrika_callbacks2) && (t3 = window.yandex_metrika_callbacks2).push.apply(t3, arguments);
    } }], n2 && A(o2.prototype, n2), e2 && A(o2, e2), Object.defineProperty(o2, "prototype", { writable: false }), o2;
    var o2, n2, e2;
  }(), F = null, H = function() {
    return F;
  }, Z = function(t2) {
    F = new M(t2);
  }, q = "", R = { unknown: { timeout: 5e3 }, long_time_no_see: { timeout: 5e3 }, denied: { timeout: 3e5 }, timeout: { timeout: 3e5 }, in_progress: { timeout: 0 }, blocked: { timeout: 3e5 }, not_available: { timeout: 108e5 }, no_user: { timeout: 0 }, no_docs: { timeout: 0 }, no_process_name: { timeout: 0 }, close_widget: { timeout: 0 }, bad_origin: { timeout: 999999999999 }, no_data: { timeout: 3e5 }, ready: { timeout: 3e5 } }, N = function() {
    return q || (q = v()), q;
  }, V = function() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "no_data", o2 = R[t2].timeout;
    return N() !== t2 && o2 && b({ value: t2, timeoutMs: o2 }), q = t2, N();
  }, z = ["suggest-button", "suggest-phone"], W = function() {
    return new Promise(function(t2, o2) {
      var n2, e2, r2 = v();
      if (r2 || (b({ value: "long_time_no_see", timeoutMs: R.long_time_no_see.timeout }), r2 = v()), "long_time_no_see" === r2) return t2({ error: null });
      switch (n2 = { init_fail: r2 }, null === (e2 = H()) || void 0 === e2 || e2.params({ "\u0421\u0430\u0434\u0436\u0435\u0441\u0442 \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438": n2 }), r2) {
        case "in_progress":
        case "timeout":
        case "no_data":
        case "not_available":
        case "blocked":
        case "denied":
          return o2({ status: "error", code: r2 });
        default:
          return t2({ status: "error", code: "no_cookie" });
      }
    });
  }, Y = function(t2) {
    return t2.PROVIDER = "provider", t2.SOCIAL = "social", t2.SUGGEST = "suggest", t2.SUGGEST_QR = "suggest-qr", t2.SUGGEST_PHONE = "suggest-phone", t2.SUGGEST_BUTTON = "suggest-button", t2.TOKEN = "token", t2.DATAFILL = "datafill", t2.SDK = "sdk", t2;
  }({});
  function K(t2) {
    return function(t3) {
      if (Array.isArray(t3)) return Q(t3);
    }(t2) || function(t3) {
      if ("undefined" != typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"]) return Array.from(t3);
    }(t2) || function(t3, o2) {
      if (t3) {
        if ("string" == typeof t3) return Q(t3, o2);
        var n2 = {}.toString.call(t3).slice(8, -1);
        return "Object" === n2 && t3.constructor && (n2 = t3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Q(t3, o2) : void 0;
      }
    }(t2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Q(t2, o2) {
    (null == o2 || o2 > t2.length) && (o2 = t2.length);
    for (var n2 = 0, e2 = Array(o2); n2 < o2; n2++) e2[n2] = t2[n2];
    return e2;
  }
  var $ = function(t2) {
    var o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = o2.hostname, e2 = void 0 === n2 ? w() : n2, r2 = o2.sourceId, a2 = void 0 === r2 ? "" : r2, i2 = "".concat(document.location.protocol, "//").concat(document.location.hostname).concat(document.location.pathname), s2 = v("_ym_uid") || localStorage && localStorage.getItem("_ym_uid") || "", l2 = "".concat(e2, "/suggest/popup?").concat(Object.keys(t2).map(function(o3) {
      return "".concat(o3, "=").concat(encodeURIComponent(String(t2[o3])));
    }).join("&"), "&location=").concat(encodeURIComponent(i2), "&widget_kind=html");
    return s2 && (l2 += "&ym_uid=".concat(encodeURIComponent(s2))), a2 && (l2 += "&source_id=".concat(encodeURIComponent(a2))), l2;
  }, J = "default", X = "button", tt = "qr", ot = "phone", nt = {}, et = function(t2, o2) {
    nt[t2] = o2;
  }, rt = "Ya.Oauth.Sdk.Token", at = function(t2) {
    var o2 = t2.access_token, n2 = void 0 === o2 ? "" : o2, e2 = t2.expires_in, r2 = void 0 === e2 ? 0 : e2, a2 = t2.cid, i2 = void 0 === a2 ? "" : a2;
    return localStorage.setItem(rt, n2), localStorage.setItem("Ya.Oauth.Sdk.TokenExpireTime", String((/* @__PURE__ */ new Date()).getTime() + 1e3 * r2)), i2 && function(t3) {
      for (var o3, n3, e3, r3, a3 = { yandex_cid: 2, yandex_public_id: String(t3) }, i3 = (null === (o3 = window.Ya) || void 0 === o3 || null === (o3 = o3.Metrika) || void 0 === o3 || null === (n3 = o3.counters) || void 0 === n3 ? void 0 : n3.call(o3)) || [], s2 = (null === (e3 = window.Ya) || void 0 === e3 || null === (e3 = e3.Metrika2) || void 0 === e3 || null === (r3 = e3.counters) || void 0 === r3 ? void 0 : r3.call(e3)) || [], l2 = 0, d2 = [].concat(K(i3), K(s2)); l2 < d2.length; l2++) {
        var c2 = d2[l2].id;
        window["yaCounter" + c2] ? window["yaCounter" + c2].firstPartyParams(a3) : window.ym && window.ym(c2, "firstPartyParams", a3);
      }
    }(i2), t2;
  }, it = function(t2) {
    var o2;
    return null === (o2 = H()) || void 0 === o2 ? void 0 : o2.params({ "\u0421\u0430\u0434\u0436\u0435\u0441\u0442 \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438": t2 });
  }, st = function() {
    for (var t2 = arguments.length, o2 = new Array(t2), n2 = 0; n2 < t2; n2++) o2[n2] = arguments[n2];
    return o2.filter(Boolean).join(" ");
  };
  function lt(t2) {
    return lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, lt(t2);
  }
  function dt(t2, o2, n2) {
    return (o2 = function(t3) {
      var o3 = function(t4) {
        if ("object" != lt(t4) || !t4) return t4;
        var o4 = t4[Symbol.toPrimitive];
        if (void 0 !== o4) {
          var n3 = o4.call(t4, "string");
          if ("object" != lt(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t4);
      }(t3);
      return "symbol" == lt(o3) ? o3 : o3 + "";
    }(o2)) in t2 ? Object.defineProperty(t2, o2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[o2] = n2, t2;
  }
  "undefined" != typeof window && void 0 !== window.document && document.querySelector("#root");
  var ct = { xs: 204, s: 210, m: 232, l: 238, xl: 246, xxl: 256, default: 232 }, ut = { xs: "xs", s: "s", m: "m", l: "l", xl: "xl", xxl: "xxl", default: "m" }, pt = dt(dt(dt(dt(dt(dt({}, ut.xs, 36), ut.s, 40), ut.m, 44), ut.l, 48), ut.xl, 52), ut.xxl, 56), ft = { main: "main", additional: "additional", default: "main", icon: "icon", iconGrey: "iconBg", iconBg: "iconBg", iconBorder: "iconBg" }, Ct = { light: "light", dark: "dark", default: "light" }, gt = { light: Ct.dark, dark: Ct.light, default: Ct.dark }, yt = { ya: "ya", yaEng: "yaEng", default: "ya" }, ht = function(t2) {
    var o2 = document.createElement("div").style;
    return o2.color = t2, o2.color;
  }, mt = function(t2) {
    return ft[t2] || ft.default;
  }, Et = function(t2) {
    return Ct[t2] || Ct.default;
  }, _t = function(t2) {
    return yt[t2] || yt.default;
  }, vt = function(t2) {
    return [ft.icon, ft.iconBg].includes(t2);
  };
  function bt(t2) {
    return bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, bt(t2);
  }
  function wt(t2, o2) {
    var n2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var e2 = Object.getOwnPropertySymbols(t2);
      o2 && (e2 = e2.filter(function(o3) {
        return Object.getOwnPropertyDescriptor(t2, o3).enumerable;
      })), n2.push.apply(n2, e2);
    }
    return n2;
  }
  function xt(t2) {
    for (var o2 = 1; o2 < arguments.length; o2++) {
      var n2 = null != arguments[o2] ? arguments[o2] : {};
      o2 % 2 ? wt(Object(n2), true).forEach(function(o3) {
        Bt(t2, o3, n2[o3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : wt(Object(n2)).forEach(function(o3) {
        Object.defineProperty(t2, o3, Object.getOwnPropertyDescriptor(n2, o3));
      });
    }
    return t2;
  }
  function Bt(t2, o2, n2) {
    return (o2 = function(t3) {
      var o3 = function(t4) {
        if ("object" != bt(t4) || !t4) return t4;
        var o4 = t4[Symbol.toPrimitive];
        if (void 0 !== o4) {
          var n3 = o4.call(t4, "string");
          if ("object" != bt(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t4);
      }(t3);
      return "symbol" == bt(o3) ? o3 : o3 + "";
    }(o2)) in t2 ? Object.defineProperty(t2, o2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[o2] = n2, t2;
  }
  var Pt = "yaPreloadingSuggestBlockStyle", St = function(t2) {
    var o2 = t2.parentId, n2 = void 0 === o2 ? "" : o2, e2 = t2.borderRadius, r2 = void 0 === e2 ? 0 : e2, a2 = t2.height, i2 = void 0 === a2 ? 0 : a2, s2 = t2.showIdLogo, l2 = void 0 !== s2 && s2, d2 = t2.logoType, c2 = void 0 === d2 ? yt.default : d2, u2 = document.createElement("div"), p2 = document.getElementById(n2) || document.body, f2 = Math.round(i2 / 2);
    (function() {
      var t3 = document.getElementById(Pt);
      if (t3) return t3;
      var o3 = document.createElement("style");
      return o3.id = Pt, document.head.appendChild(o3), o3;
    })().innerHTML = "\n    .yaPreloadingSuggestBlock {\n        box-sizing: border-box;\n        width: 100%;\n        margin: 0;\n        opacity: 1;\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        font-family: 'YS Text', 'Helvetica Neue', Arial, sans-serif;\n        color: #fff;\n        cursor: pointer;\n\n        border: none;\n        border-radius: 0;\n        outline: 0;\n        background-color: #000;\n        transition: opacity 0.6s, background-color 0.3s;\n        position: absolute;\n        z-index: 10000;\n    }\n    .yaPreloadingSuggestBlock_hiding {\n        opacity: 0;\n    }\n    .yaPreloadingSuggestBlockContainer {\n        width: 100%;\n        display: flex;\n        position: relative;\n        justify-content: center;\n        align-items: center;\n    }\n    .yaPreloadingSuggestBlockLogo {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .yaPreloadingSuggestBlockIdLogo {\n        margin-left: 2px;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .yaPreloadingSuggestBlockSvgYa {\n        border-radius: 50%;\n        height: 22px;\n        width: 22px;\n        flex-shrink: 0;\n    }\n    .yaPreloadingSuggestBlockSvgId {\n        height: 22px;\n        width: 22px;\n        flex-shrink: 0;\n    }\n", u2.id = "yaPreloadingSuggestBlock", u2.className = st("yaPreloadingSuggestBlock"), u2.style.height = "100%", u2.style.borderRadius = "".concat(r2, "px");
    var C2 = document.createElement("div");
    if (C2.className = "yaPreloadingSuggestBlockLogo", C2.style.width = "".concat(f2, "px"), C2.style.height = "".concat(f2, "px"), c2 === yt.ya && (C2.innerHTML = `<svg class="yaPreloadingSuggestBlockSvgYa" width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='44' height='44' fill='#FC3F1D'/><path d='M24.7407 33.9778H29.0889V9.04443H22.7592C16.3929 9.04443 13.0538 12.303 13.0538 17.1176C13.0538 21.2731 15.2187 23.6163 19.0532 26.1609L21.3832 27.6987L18.3927 25.1907L12.4667 33.9778H17.1818L23.5115 24.5317L21.3098 23.0671C18.6496 21.2731 17.3469 19.8818 17.3469 16.8613C17.3469 14.2068 19.2183 12.4128 22.7776 12.4128H24.7223V33.9778H24.7407Z' fill='white'/></svg>`), c2 === yt.yaEng && (C2.innerHTML = `<svg class="yaPreloadingSuggestBlockSvgYa" width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='44' height='44' fill='#FC3F1D'/><path d='M22.9515 24.2897C24.2907 27.223 24.737 28.2433 24.737 31.7665V36.4375H19.9544V28.5621L10.9313 8.9375H15.9211L22.9515 24.2897ZM28.8501 8.9375L22.9994 22.2332H27.8617L33.7284 8.9375H28.8501Z' fill='white'/></svg>`), u2.appendChild(C2), l2) {
      var g2 = document.createElement("div");
      g2.className = "yaPreloadingSuggestBlockIdLogo", g2.style.width = "".concat(f2, "px"), g2.style.height = "".concat(f2, "px"), g2.innerHTML = `<svg class="yaPreloadingSuggestBlockSvgId" width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_394_3168)'><path d='M25 11.9995C25 21.6021 22.5833 23.9995 12.9032 23.9995C3.22316 23.9995 0.806452 21.6021 0.806452 11.9995C0.806452 2.39689 3.22316 -0.000488281 12.9032 -0.000488281C22.5833 -0.000488281 25 2.39689 25 11.9995Z' fill='#FAFAFF'/><path fill-rule='evenodd' clip-rule='evenodd' d='M8.77368 19.1998V4.7998H6.2499V19.1998H8.77368ZM17.1109 5.17966C16.2928 4.92067 15.4052 4.7998 14.4479 4.7998H11.0538V19.2171H14.239C15.2311 19.2171 16.171 19.0444 17.0065 18.7336C17.8419 18.4228 18.573 17.9566 19.1822 17.3351C19.7913 16.7135 20.2613 15.9538 20.6094 15.0559C20.9401 14.1408 21.1142 13.1048 21.1142 11.9307C21.1142 10.6012 20.9575 9.47894 20.6094 8.5811C20.2787 7.68326 19.8087 6.94081 19.217 6.38829C18.6252 5.83578 17.929 5.42139 17.1109 5.17966ZM15.8925 16.9034C15.3355 17.1279 14.709 17.2487 14.0301 17.2487V17.2315H13.5776V6.73362H14.239C14.883 6.73362 15.4748 6.81995 15.997 6.99261C16.5365 7.16527 16.9891 7.4588 17.372 7.85592C17.7549 8.25304 18.0508 8.78829 18.2597 9.44441C18.4685 10.1005 18.573 10.912 18.573 11.8789C18.573 12.7768 18.4511 13.5538 18.2423 14.2271C18.016 14.9005 17.7201 15.453 17.3198 15.902C16.9194 16.3336 16.4495 16.6789 15.8925 16.9034Z' fill='#1F1F24'/></g><defs><clipPath id='clip0_394_3168'><rect width='24.1935' height='24' fill='white' transform='translate(0.806452)'/></clipPath></defs></svg>`, u2.appendChild(g2);
    }
    var y2 = document.createElement("div");
    return y2.classList.add("yaPreloadingSuggestBlockContainer"), y2.style.height = "".concat(i2, "px"), y2.appendChild(u2), p2.appendChild(y2), u2;
  }, kt = { "button.add": "Add account", "button.list": "Other accounts", "button.signin.default": "\u0412\u043E\u0439\u0442\u0438 \u0441 \u042F\u043D\u0434\u0435\u043A\u0441 ID", "button.signin.personal": "\u0412\u043E\u0439\u0442\u0438 \u043A\u0430\u043A %", "button.signin.short": "\u042F\u043D\u0434\u0435\u043A\u0441 ID", "button.subText.bnpl.end": "", "button.subText.bnpl.start": "", "button.subText.pay.end": "", "button.subText.pay.start": "", "button.text": "Log in as %1", "empty.button": "Log in with Yandex ID", "empty.subtitle.default": "Secure login. You don't need to register on the site.", "empty.subtitle.pay": "Pay for your purchases quickly and easily with Yandex Pay", "empty.title.default": "Use your Yandex account to log in", "header.title": "Log in with Yandex", "header.title.v2.bnpl": "", "header.title.v2.bnpl.withValue": "", "header.title.v2.default": "Log in with Yandex ID", "header.title.v2.pay": "Log in to pay for your purchases in just a couple of clicks with Yandex Pay", "qr.button.other": "Log in using a different method", "qr.phone": "", "qr.scopes": "%name will have access to: your phone number, login, first and last names, gender, email, date of birth, and portrait", "qr.title": "Log in with Yandex ID\xA0\u2014\xA0it's quick and secure" }, Ot = { "button.add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442", "button.list": "\u0414\u0440\u0443\u0433\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B", "button.signin.default": "\u0412\u043E\u0439\u0442\u0438 \u0441 \u042F\u043D\u0434\u0435\u043A\u0441 ID", "button.signin.personal": "\u0412\u043E\u0439\u0442\u0438 \u043A\u0430\u043A %", "button.signin.short": "\u042F\u043D\u0434\u0435\u043A\u0441 ID", "button.subText.bnpl.end": "\u0447\u0430\u0441\u0442\u044F\u043C\u0438", "button.subText.bnpl.start": "\u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u044B", "button.subText.pay.end": "\u041F\u044D\u0439", "button.subText.pay.start": "\u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0441", "button.text": "\u0412\u043E\u0439\u0442\u0438 \u043A\u0430\u043A %1", "empty.button": "\u0412\u043E\u0439\u0442\u0438 \u0441 \u042F\u043D\u0434\u0435\u043A\u0441 ID", "empty.subtitle.default": "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439 \u0432\u0445\u043E\u0434 \u0431\u0435\u0437\xA0\u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\xA0\u0441\u0430\u0439\u0442\u0435", "empty.subtitle.pay": "\u0427\u0442\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0438\xA0\u0443\u0434\u043E\u0431\u043D\u043E \u0441 Yandex Pay", "empty.title.default": "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u042F\u043D\u0434\u0435\u043A\u0441\u0430 \u0434\u043B\u044F\xA0\u0432\u0445\u043E\u0434\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0438\u0441", "header.title": "\u0412\u043E\u0439\u0442\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u042F\u043D\u0434\u0435\u043A\u0441\u0430", "header.title.v2.bnpl": "\u0414\u043E 200 000 \u20BD \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0441 \u042F\u043D\u0434\u0435\u043A\u0441 \u0421\u043F\u043B\u0438\u0442\u043E\u043C \u2014 \u0442\u043E\u0432\u0430\u0440 \u0441\u0440\u0430\u0437\u0443, \u0430 \u0434\u0435\u043D\u044C\u0433\u0438 \u043F\u043E\u0442\u043E\u043C", "header.title.v2.bnpl.withValue": "%value \u043D\u0430\xA0\u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0441 \u042F\u043D\u0434\u0435\u043A\u0441\xA0\u0421\u043F\u043B\u0438\u0442\u043E\u043C\xA0\u2014 \u0442\u043E\u0432\u0430\u0440 \u0441\u0440\u0430\u0437\u0443, \u0430\xA0\u0434\u0435\u043D\u044C\u0433\u0438 \u043F\u043E\u0442\u043E\u043C", "header.title.v2.default": "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0441 \u042F\u043D\u0434\u0435\u043A\u0441 ID", "header.title.v2.pay": "\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432\xA0\u043F\u0430\u0440\u0443\xA0\u043A\u043B\u0438\u043A\u043E\u0432 \u0441 Yandex Pay", "qr.button.other": "\u0412\u043E\u0439\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C", "qr.phone": "\u0438\u043B\u0438 \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443", "qr.scopes": "\u0421\u0435\u0440\u0432\u0438\u0441\u0443 %name \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B: \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u043B\u043E\u0433\u0438\u043D, \u0438\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F, \u043F\u043E\u043B, \u043F\u043E\u0447\u0442\u0430, \u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u043F\u043E\u0440\u0442\u0440\u0435\u0442", "qr.title": "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0441 \u042F\u043D\u0434\u0435\u043A\u0441 ID \u2014 \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E" }, Tt = function(t2) {
    var o2 = t2.targetOrigin, n2 = void 0 === o2 ? "https://autofill.yandex.ru" : o2, e2 = t2.parentId, r2 = void 0 === e2 ? "" : e2, a2 = t2.buttonOptions, i2 = void 0 === a2 ? {} : a2, s2 = t2.isPreloading, l2 = void 0 !== s2 && s2, d2 = t2.lang, c2 = void 0 === d2 ? "ru" : d2, u2 = document.createElement("button"), p2 = document.getElementById(r2) || document.body, f2 = "".concat(document.location.protocol, "//").concat(document.location.hostname).concat(document.location.pathname), C2 = i2.oauthParams, g2 = void 0 === C2 ? {} : C2, y2 = i2.buttonSize, h2 = void 0 === y2 ? "m" : y2, m2 = i2.buttonView, E2 = void 0 === m2 ? "main" : m2, _2 = i2.buttonTheme, v2 = void 0 === _2 ? "light" : _2, b2 = i2.buttonIcon, w2 = void 0 === b2 ? "ya" : b2, x2 = i2.buttonBorderRadius, B2 = void 0 === x2 ? 0 : x2, P2 = i2.sourceId, S2 = void 0 === P2 ? null : P2, k2 = i2.ymUid, O2 = void 0 === k2 ? null : k2, T2 = i2.customBgColor, L2 = void 0 === T2 ? "" : T2, U2 = i2.customBgHoveredColor, G2 = void 0 === U2 ? "" : U2, I2 = i2.customBorderColor, A2 = void 0 === I2 ? "" : I2, D2 = i2.customBorderHoveredColor, j2 = void 0 === D2 ? "" : D2, M2 = i2.customBorderWidth;
    !function(t3, o3, n3, e3, r3) {
      (function() {
        var t4 = document.getElementById("yaPersonalButtonStyle");
        if (t4) return t4;
        var o4 = document.createElement("style");
        return o4.id = "yaPersonalButtonStyle", document.head.appendChild(o4), o4;
      })().innerHTML = function(t4) {
        var o4 = t4.customBgColor, n4 = t4.customBgHoveredColor, e4 = t4.customBorderColor, r4 = t4.customBorderHoveredColor, a3 = t4.customBorderWidth;
        return "\n    @font-face {\n        font-family: 'YS Text';\n        src: url('//yastatic.net/s3/home/fonts/ys/1/text-regular.woff2') format('woff2'), url('//yastatic.net/s3/home/fonts/ys/1/text-regular.woff') format('woff');\n        font-weight: normal;\n        font-style: normal;\n        font-stretch: normal;\n    }\n    @font-face {\n        font-family: 'YS Text';\n        src: url('//yastatic.net/s3/home/fonts/ys/1/text-medium.woff2') format('woff2'), url('//yastatic.net/s3/home/fonts/ys/1/text-medium.woff') format('woff');\n        font-weight: 500;\n        font-style: normal;\n        font-stretch: normal;\n    }\n    @font-face {\n        font-family: 'YS Text';\n        src: url('//yastatic.net/s3/home/fonts/ys/1/text-bold.woff2') format('woff2'), url('//yastatic.net/s3/home/fonts/ys/1/text-bold.woff') format('woff');\n        font-weight: bold;\n        font-style: normal;\n        font-stretch: normal;\n    }\n    .yaPersonalButton {\n        box-sizing: border-box;\n        width: 100%;\n        margin: 0;\n        opacity: 1;\n\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        font-family: 'YS Text', 'Helvetica Neue', Arial, sans-serif;\n        color: #fff;\n        cursor: pointer;\n\n        border: none;\n        border-radius: 0;\n        outline: 0;\n        background-color: #000;\n        transition: opacity 0.6s, background-color 0.3s;\n        position: relative;\n    }\n    .yaPersonalButton_newDesign2 {\n        justify-content: center;\n        text-align: left;\n    }\n    .yaPersonalButton_preloading {\n        z-index: 10000;\n        position: absolute;\n        justify-content: center;\n    }\n    .yaPersonalButton_hiding {\n        opacity: 0;\n    }\n    .yaPersonalButtonContainer {\n        width: 100%;\n        display: flex;\n        position: relative;\n        justify-content: center;\n        align-items: center;\n    }\n    .yaPersonalButton_onlyLogo {\n        justify-content: center;\n        min-width: 0 !important;\n        margin: auto;\n    }\n    .yaPersonalButton_onlyLogo > .yaPersonalButtonLogo {\n        margin-right: 0 !important;\n    }\n    .yaPersonalButton_main.yaPersonalButton_light {\n        border: none;\n        background-color: #000;\n        color: #fff\n    }\n    .yaPersonalButton_main.yaPersonalButton_dark {\n        border: none;\n        background-color: #fff;\n        color: #000\n    }\n    .yaPersonalButton_additional.yaPersonalButton_light {\n        border: 1px solid #000;\n        background-color: #fff;\n        color: #000\n    }\n    .yaPersonalButton_additional.yaPersonalButton_dark {\n        border: 1px solid #fff;\n        background-color: #000;\n        color: #fff\n    }\n    .yaPersonalButton_scheme_dark.yaPersonalButton_gradient {\n        background-color: #2E2F33;\n    }\n    .yaPersonalButton_scheme_dark.yaPersonalButton_gradient:hover {\n        background-color: #1F2026;\n    }\n    .yaPersonalButton_scheme_dark.yaPersonalButton_gradient:active {\n        background-color: #121319;\n    }\n    .yaPersonalButton_iconBg {\n        border: ".concat(a3 || 0, "px solid ").concat(e4 || "rgba(180, 184, 204, 0.28)", ";\n        background-color: ").concat(o4 || "rgba(180, 184, 204, 0.14)", "; \n        transition: opacity 0.6s, border 0.3s, background-color 0.3s\n    }\n    .yaPersonalButton_iconBg:hover {\n        border: ").concat(a3 || 0, "px solid ").concat(r4 || "rgba(180, 184, 204, 0.28)", ";\n        background-color: ").concat(n4 || "rgba(180, 184, 204, 0.2)", ";\n    }\n    .yaPersonalButton_iconBg.yaPersonalButton_dark {\n        border: ").concat(a3 || 0, "px solid ").concat(e4 || "rgba(250, 250, 255, 0.08)", ";\n        background-color: ").concat(o4 || "rgba(250, 250, 255, 0.08)", ";\n    }\n    .yaPersonalButton_iconBg.yaPersonalButton_dark:hover {\n        border: ").concat(a3 || 0, "px solid ").concat(r4 || "rgba(250, 250, 255, 0.08)", ";\n        background-color: ").concat(n4 || "rgba(250, 250, 255, 0.1)", `;
    }
    .yaPersonalButton_icon {
        border: none;
        background-color: transparent;
        padding: 0 !important;
        justify-content: center;
    }
    .yaPersonalButton_xs.yaPersonalButton_onlyLogo {
        width: 36px;
        height: 36px;
    }
    .yaPersonalButton_s.yaPersonalButton_onlyLogo {
        width: 40px;
        height: 40px;
    }
    .yaPersonalButton_m.yaPersonalButton_onlyLogo {
        width: 44px;
        height: 44px;
    }
    .yaPersonalButton_l.yaPersonalButton_onlyLogo {
        width: 48px;
        height: 48px;
    }
    .yaPersonalButton_xl.yaPersonalButton_onlyLogo {
        width: 52px;
        height: 52px;
    }
    .yaPersonalButton_xxl.yaPersonalButton_onlyLogo {
        width: 56px;
        height: 56px;
    }
    .yaPersonalButton_icon.yaPersonalButton_xs,
    .yaPersonalButton_icon.yaPersonalButton_xs > .yaPersonalButtonLogo {
        width: 28px;
        height: 28px;
    }
    .yaPersonalButton_icon.yaPersonalButton_s,
    .yaPersonalButton_icon.yaPersonalButton_s > .yaPersonalButtonLogo {
        width: 32px;
        height: 32px;
    }
    .yaPersonalButton_icon.yaPersonalButton_m,
    .yaPersonalButton_icon.yaPersonalButton_m > .yaPersonalButtonLogo {
        width: 36px;
        height: 36px;
    }
    .yaPersonalButton_icon.yaPersonalButton_l,
    .yaPersonalButton_icon.yaPersonalButton_l > .yaPersonalButtonLogo {
        width: 40px;
        height: 40px;
    }
    .yaPersonalButton_icon.yaPersonalButton_xl,
    .yaPersonalButton_icon.yaPersonalButton_xl > .yaPersonalButtonLogo {
        width: 44px;
        height: 44px;
    }
    .yaPersonalButton_icon.yaPersonalButton_xxl,
    .yaPersonalButton_icon.yaPersonalButton_xxl > .yaPersonalButtonLogo {
        width: 48px;
        height: 48px;
    }
    .yaPersonalButton_xs {
        height: 36px;
        min-width: 150px;
        padding: 8px 10px;
        font-size: 11px;
        line-height: 12px;
    }
    .yaPersonalButton_xs .yaPersonalButtonIdLogo,
    .yaPersonalButton_xs .yaPersonalButtonLogo {
        width: 20px;
        height: 20px;
    }
    .yaPersonalButton_xs .yaPersonalButtonAvatar {
        width: 20px;
        height: 20px;
    }
    .yaPersonalButton_s {
        height: 40px;
        min-width: 156px;
        padding: 9px 11px;
        font-size: 14px;
        line-height: 16px;
    }
    .yaPersonalButton_s .yaPersonalButtonIdLogo,
    .yaPersonalButton_s .yaPersonalButtonLogo {
        width: 24px;
        height: 24px;
    }
    .yaPersonalButton_s .yaPersonalButtonAvatar {
        width: 24px;
        height: 24px;
    }
    .yaPersonalButton_m {
        height: 44px;
        min-width: 170px;
        padding: 10px 12px;
        font-size: 14px;
        line-height: 16px;
    }
    .yaPersonalButton_m .yaPersonalButtonIdLogo,
    .yaPersonalButton_m .yaPersonalButtonLogo {
        width: 24px;
        height: 24px;
    }
    .yaPersonalButton_m .yaPersonalButtonAvatar {
        width: 24px;
        height: 24px;
    }
    .yaPersonalButton_l {
        height: 48px;
        min-width: 176px;
        padding: 11px 13px;
        font-size: 14px;
        line-height: 16px;
    }
    .yaPersonalButton_l .yaPersonalButtonIdLogo,
    .yaPersonalButton_l .yaPersonalButtonLogo {
        width: 24px;
        height: 24px;
    }
    .yaPersonalButton_l .yaPersonalButtonAvatar {
        width: 24px;
        height: 24px;
    }
    .yaPersonalButton_xl {
        height: 52px;
        min-width: 184px;
        padding: 14px;
        font-size: 16px;
        line-height: 20px;
    }
    .yaPersonalButton_xl .yaPersonalButtonIdLogo,
    .yaPersonalButton_xl .yaPersonalButtonLogo {
        width: 26px;
        height: 26px;
    }
    .yaPersonalButton_xl .yaPersonalButtonAvatar {
        width: 28px;
        height: 28px;
    }
    .yaPersonalButton_xxl {
        height: 56px;
        min-width: 194px;
        padding: 14px 16px;
        font-size: 16px;
        line-height: 20px;
    }
    .yaPersonalButton_xxl .yaPersonalButtonIdLogo,
    .yaPersonalButton_xxl .yaPersonalButtonLogo {
        width: 26px;
        height: 26px;
    }
    .yaPersonalButton_xxl .yaPersonalButtonAvatar {
        width: 28px;
        height: 28px;
    }
    .yaPersonalButtonLogo {
        position: relative;

        flex-shrink: 0;

        border-radius: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .yaPersonalButtonLogo_ya {
        background-image: url("data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='44' height='44' fill='%23FC3F1D'/%3E%3Cpath d='M24.7407 33.9778H29.0889V9.04443H22.7592C16.3929 9.04443 13.0538 12.303 13.0538 17.1176C13.0538 21.2731 15.2187 23.6163 19.0532 26.1609L21.3832 27.6987L18.3927 25.1907L12.4667 33.9778H17.1818L23.5115 24.5317L21.3098 23.0671C18.6496 21.2731 17.3469 19.8818 17.3469 16.8613C17.3469 14.2068 19.2183 12.4128 22.7776 12.4128H24.7223V33.9778H24.7407Z' fill='white'/%3E%3C/svg%3E%0A");    
    }
    .yaPersonalButtonLogo_yaEng {
        background-image: url("data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='44' height='44' fill='%23FC3F1D'/%3E%3Cpath d='M22.9515 24.2897C24.2907 27.223 24.737 28.2433 24.737 31.7665V36.4375H19.9544V28.5621L10.9313 8.9375H15.9211L22.9515 24.2897ZM28.8501 8.9375L22.9994 22.2332H27.8617L33.7284 8.9375H28.8501Z' fill='white'/%3E%3C/svg%3E%0A");    
    }
    .yaPersonalButtonIdLogo {
        margin-left: 2px;
    
        flex-shrink: 0;

        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .yaPersonalButtonIdLogo_light {
        background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_394_3168)'%3E%3Cpath d='M25 11.9995C25 21.6021 22.5833 23.9995 12.9032 23.9995C3.22316 23.9995 0.806452 21.6021 0.806452 11.9995C0.806452 2.39689 3.22316 -0.000488281 12.9032 -0.000488281C22.5833 -0.000488281 25 2.39689 25 11.9995Z' fill='%23FAFAFF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.77368 19.1998V4.7998H6.2499V19.1998H8.77368ZM17.1109 5.17966C16.2928 4.92067 15.4052 4.7998 14.4479 4.7998H11.0538V19.2171H14.239C15.2311 19.2171 16.171 19.0444 17.0065 18.7336C17.8419 18.4228 18.573 17.9566 19.1822 17.3351C19.7913 16.7135 20.2613 15.9538 20.6094 15.0559C20.9401 14.1408 21.1142 13.1048 21.1142 11.9307C21.1142 10.6012 20.9575 9.47894 20.6094 8.5811C20.2787 7.68326 19.8087 6.94081 19.217 6.38829C18.6252 5.83578 17.929 5.42139 17.1109 5.17966ZM15.8925 16.9034C15.3355 17.1279 14.709 17.2487 14.0301 17.2487V17.2315H13.5776V6.73362H14.239C14.883 6.73362 15.4748 6.81995 15.997 6.99261C16.5365 7.16527 16.9891 7.4588 17.372 7.85592C17.7549 8.25304 18.0508 8.78829 18.2597 9.44441C18.4685 10.1005 18.573 10.912 18.573 11.8789C18.573 12.7768 18.4511 13.5538 18.2423 14.2271C18.016 14.9005 17.7201 15.453 17.3198 15.902C16.9194 16.3336 16.4495 16.6789 15.8925 16.9034Z' fill='%231F1F24'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_394_3168'%3E%3Crect width='24.1935' height='24' fill='white' transform='translate(0.806452)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    }
    .yaPersonalButtonIdLogo_dark {
        background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_396_430)'%3E%3Cpath d='M25 11.9995C25 21.6021 22.5833 23.9995 12.9032 23.9995C3.22317 23.9995 0.806458 21.6021 0.806458 11.9995C0.806458 2.39689 3.22317 -0.000488281 12.9032 -0.000488281C22.5833 -0.000488281 25 2.39689 25 11.9995Z' fill='%23262633'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.7737 19.1998V4.7998H6.24991V19.1998H8.7737ZM17.1109 5.17966C16.2929 4.92067 15.4052 4.7998 14.4479 4.7998H11.0538V19.2171H14.239C15.2311 19.2171 16.171 19.0444 17.0065 18.7336C17.8419 18.4228 18.573 17.9566 19.1822 17.3351C19.7914 16.7135 20.2613 15.9538 20.6094 15.0559C20.9401 14.1408 21.1142 13.1048 21.1142 11.9307C21.1142 10.6012 20.9575 9.47894 20.6094 8.5811C20.2787 7.68326 19.8088 6.94081 19.217 6.38829C18.6252 5.83578 17.929 5.42139 17.1109 5.17966ZM15.8925 16.9034C15.3356 17.1279 14.709 17.2487 14.0302 17.2487V17.2315H13.5776V6.73362H14.239C14.883 6.73362 15.4748 6.81995 15.997 6.99261C16.5365 7.16527 16.9891 7.4588 17.372 7.85592C17.7549 8.25304 18.0508 8.78829 18.2597 9.44441C18.4685 10.1005 18.573 10.912 18.573 11.8789C18.573 12.7768 18.4511 13.5538 18.2423 14.2271C18.016 14.9005 17.7201 15.453 17.3198 15.902C16.9195 16.3336 16.4495 16.6789 15.8925 16.9034Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_396_430'%3E%3Crect width='24.1935' height='24' fill='white' transform='translate(0.806458)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    }
    .yaPersonalButtonInfo {
        font-weight: 500;
        overflow: hidden;
        margin-left: 16px;
        z-index: 1;
    }
    .yaPersonalButton_newDesign2 > .yaPersonalButtonInfo {
        margin-left: 10px;
    }
    .yaPersonalButtonText {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .yaPersonalButtonSubText {
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        opacity: 0.7;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .yaPersonalButton_l .yaPersonalButtonSubText,
    .yaPersonalButton_m .yaPersonalButtonSubText,
    .yaPersonalButton_s .yaPersonalButtonSubText {
        font-size: 11px;
        line-height: 12px;
    }
    .yaPersonalButton_xs .yaPersonalButtonSubText {
        font-size: 9px;
        line-height: 10px;
    }
    .yaPersonalButtonSubTextSvg {
        width: 9px;
        height: 12px;
        display: inline-block;
        margin: 1px 1px 0 3px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yaPersonalButtonSubTextSvg_bnpl {
        background-image: url("data:image/svg+xml,%3Csvg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_436_574)'%3E%3Cpath d='M4.51255 4.51911L7.3226 7.39668L7.26528 7.4489L7.24108 7.47183C6.45423 8.17369 5.42322 8.53845 4.37006 8.48756C3.3169 8.43667 2.32585 7.9742 1.61035 7.19974C0.894847 6.42528 0.512126 5.40079 0.544609 4.3469C0.577092 3.29302 1.02218 2.29404 1.78402 1.56512C2.5673 0.848311 3.60146 0.468964 4.66246 0.509259C5.72347 0.549553 6.72587 1.00624 7.45253 1.7804L4.51255 4.51911Z' fill='%2301B94F'/%3E%3Cpath d='M1.78656 1.56392C2.56973 0.847734 3.6035 0.468886 4.66398 0.509417C5.72447 0.549948 6.7263 1.0066 7.45252 1.78047C7.45252 1.78047 5.11506 3.96889 5.06793 4.00711C5.06793 4.00711 4.54439 4.50008 4.54821 4.50772C4.55203 4.51536 7.3175 7.38529 7.3175 7.38529L7.26145 7.43879L7.23725 7.46171C5.58637 8.91387 3.05656 8.84763 1.56237 7.23243C0.844809 6.4489 0.465773 5.41365 0.507761 4.35203C0.549749 3.2904 1.00936 2.28833 1.78656 1.56392Z' fill='url(%23paint0_radial_436_574)'/%3E%3Cpath d='M1.78782 1.56134C2.57162 0.846108 3.60544 0.468122 4.66573 0.509122C5.72601 0.550123 6.72756 1.00682 7.45378 1.78044C7.45378 1.78044 5.17873 3.92046 5.08575 3.99562C5.08575 3.99562 4.57622 4.48222 4.58513 4.49751C4.60424 4.54336 7.31366 7.37252 7.31366 7.37252L7.25761 7.42602L7.23341 7.44895C5.58636 8.89856 3.05527 8.82723 1.56618 7.21712C0.84969 6.43574 0.470962 5.40292 0.512476 4.34359C0.55399 3.28427 1.01238 2.28425 1.78782 1.56134Z' fill='url(%23paint1_radial_436_574)'/%3E%3Cpath d='M1.7904 1.56012C2.57422 0.845818 3.60759 0.468537 4.66726 0.509771C5.72693 0.551004 6.72786 1.00744 7.45381 1.78049C7.45381 1.78049 5.24373 3.87083 5.10106 3.9842C5.10106 3.9842 4.60936 4.46316 4.61828 4.48609C4.64758 4.55487 7.30859 7.3611 7.30859 7.3611L7.25127 7.41461L7.22707 7.43626C5.58511 8.88205 3.0553 8.80817 1.56875 7.20188C0.853422 6.4227 0.475269 5.39224 0.516792 4.33531C0.558315 3.27839 1.01614 2.28077 1.7904 1.56012Z' fill='url(%23paint2_radial_436_574)'/%3E%3Cpath d='M1.79171 1.5589C2.57563 0.845156 3.60882 0.468338 4.66818 0.509807C5.72755 0.551276 6.72811 1.00771 7.45385 1.78055C7.45385 1.78055 5.30746 3.81867 5.11766 3.9728C5.11766 3.9728 4.64125 4.44539 4.65399 4.47596C4.6922 4.56768 7.30354 7.34971 7.30354 7.34971L7.24749 7.40193C7.24749 7.40193 7.22329 7.42359 7.22329 7.42486C5.58515 8.86556 3.05534 8.78658 1.57261 7.18666C0.858429 6.40985 0.480615 5.38202 0.521666 4.3276C0.562716 3.27318 1.0193 2.27784 1.79171 1.5589Z' fill='url(%23paint3_radial_436_574)'/%3E%3Cpath d='M1.7942 1.55624C2.57833 0.843587 3.61114 0.467697 4.6699 0.509637C5.72865 0.551578 6.7285 1.00799 7.4538 1.78043C7.4538 1.78043 5.37237 3.77269 5.13417 3.96121C5.13417 3.96121 4.67304 4.42616 4.68833 4.46437C4.73673 4.57902 7.29966 7.33684 7.29839 7.33812L7.24234 7.39034L7.21814 7.41327C5.58383 8.84759 3.05529 8.76734 1.57638 7.17124C0.863435 6.39643 0.486151 5.37093 0.526966 4.3188C0.567781 3.26668 1.02338 2.27349 1.7942 1.55624Z' fill='url(%23paint4_radial_436_574)'/%3E%3Cpath d='M1.7955 1.55502C2.57972 0.842925 3.61235 0.467499 4.6708 0.509675C5.72925 0.551851 6.72874 1.00825 7.45381 1.78049C7.45381 1.78049 5.43608 3.72434 5.15074 3.94599C5.15074 3.94599 4.70491 4.40329 4.72401 4.44915C4.78134 4.58672 7.29459 7.32035 7.29459 7.32035L7.23854 7.38531L7.21434 7.40697C5.58257 8.8311 3.05531 8.7483 1.57895 7.15602C0.867311 6.38342 0.490588 5.36044 0.531169 4.31083C0.57175 3.26121 1.02633 2.27038 1.7955 1.55502Z' fill='url(%23paint5_radial_436_574)'/%3E%3Cpath d='M1.79802 1.55369C2.58234 0.842142 3.61479 0.467179 4.67293 0.509591C5.73107 0.552002 6.73021 1.00839 7.45506 1.78043C7.45506 1.78043 5.50102 3.67588 5.16855 3.94593C5.16855 3.94593 4.73672 4.39559 4.75838 4.44909C4.83099 4.60322 7.29074 7.31391 7.28947 7.31391L7.23342 7.36614L7.20921 7.38907C5.58254 8.81448 3.05528 8.72786 1.58274 7.14067C0.872098 6.37043 0.495725 5.34992 0.536076 4.30271C0.576427 3.25549 1.03021 2.26697 1.79802 1.55369Z' fill='url(%23paint6_radial_436_574)'/%3E%3Cpath d='M1.79927 1.55116C2.58385 0.840324 3.61621 0.466047 4.67405 0.508933C5.73189 0.551818 6.73057 1.00843 7.45503 1.78045C7.45503 1.78045 5.56468 3.62622 5.18508 3.92812C5.18508 3.92812 4.76854 4.37141 4.79402 4.43764C4.87045 4.62107 7.28561 7.30757 7.28434 7.30757C7.28307 7.30757 7.23211 7.35724 7.22829 7.35979L7.20409 7.38145C5.58124 8.79794 3.05398 8.70877 1.58526 7.1305C0.873965 6.36217 0.496929 5.34279 0.53706 4.29652C0.57719 3.25026 1.0312 2.26276 1.79927 1.55116Z' fill='url(%23paint7_radial_436_574)'/%3E%3Cpath d='M1.80186 1.54994C2.58648 0.840039 3.61838 0.466465 4.67561 0.509583C5.73283 0.552701 6.73089 1.00907 7.45509 1.7805C7.45509 1.7805 5.6297 3.57787 5.20169 3.9167C5.20169 3.9167 4.80044 4.35235 4.82974 4.42623C4.91509 4.63259 7.28057 7.29488 7.28057 7.29615L7.22452 7.34838L7.20032 7.37004C5.58129 8.78653 3.05403 8.69354 1.59551 7.11527C0.88503 6.34982 0.507648 5.33353 0.546346 4.28988C0.585044 3.24623 1.03665 2.26068 1.80186 1.54994Z' fill='url(%23paint8_radial_436_574)'/%3E%3Cpath d='M1.80311 1.54861C2.58782 0.839258 3.61954 0.466146 4.67646 0.5095C5.73338 0.552853 6.73108 1.00921 7.45506 1.78045C7.45506 1.78045 5.69336 3.52813 5.21313 3.90518C5.21313 3.90518 4.83099 4.33446 4.85901 4.41471C4.95837 4.64018 7.27672 7.27826 7.27545 7.27954L7.2194 7.33049C7.2194 7.33049 7.19775 7.35087 7.1952 7.35342C5.57999 8.76482 3.054 8.668 1.59038 7.09866C1.23991 6.72028 0.967398 6.27657 0.788413 5.79287C0.609427 5.30917 0.527472 4.79495 0.547226 4.27957C0.56698 3.7642 0.688056 3.25776 0.903541 2.78918C1.11903 2.3206 1.4247 1.89905 1.80311 1.54861Z' fill='url(%23paint9_radial_436_574)'/%3E%3Cpath d='M1.8057 1.54608C2.5906 0.837818 3.62196 0.465632 4.67827 0.509456C5.73457 0.55328 6.73156 1.00962 7.4551 1.78046C7.4551 1.78046 5.75837 3.47974 5.23483 3.89373C5.23483 3.89373 4.86414 4.31664 4.89981 4.40326C5.00426 4.65802 7.27167 7.27064 7.27167 7.27191L7.21562 7.32286L7.19142 7.34452C5.57876 8.74827 3.05404 8.64891 1.59552 7.08084C0.889562 6.31895 0.515119 5.30786 0.554534 4.26993C0.593949 3.23201 1.04399 2.25223 1.8057 1.54608Z' fill='url(%23paint10_radial_436_574)'/%3E%3Cpath d='M1.80695 1.54486C2.59216 0.837074 3.62355 0.465314 4.67976 0.509373C5.73597 0.553431 6.73282 1.0098 7.45635 1.78052C7.45635 1.78052 5.82204 3.43649 5.25137 3.8836C5.25137 3.8836 4.89724 4.29759 4.93419 4.39313C5.04883 4.66445 7.26783 7.25796 7.26655 7.25796L7.21051 7.31018L7.1863 7.33184C5.57874 8.73304 3.05402 8.63114 1.59932 7.06816C1.24995 6.69203 0.978158 6.25072 0.799492 5.76947C0.620825 5.28821 0.538787 4.77645 0.558072 4.26346C0.577356 3.75048 0.697584 3.24632 0.911878 2.77984C1.12617 2.31336 1.43033 1.8937 1.80695 1.54486Z' fill='url(%23paint11_radial_436_574)'/%3E%3Cpath d='M1.8095 1.54352C2.59474 0.83667 3.62567 0.465611 4.68127 0.509902C5.73686 0.554193 6.73309 1.01031 7.45636 1.78045C7.45636 1.78045 5.88701 3.38165 5.26793 3.87207C5.26793 3.87207 4.92909 4.2797 4.96985 4.3816C5.09724 4.67968 7.26274 7.24643 7.26274 7.2477L7.20669 7.29993C7.20669 7.29993 7.18503 7.31904 7.18376 7.32158C5.57874 8.72279 3.0553 8.61197 1.60314 7.05408C0.150981 5.4962 0.223589 2.98167 1.8095 1.54352Z' fill='url(%23paint12_radial_436_574)'/%3E%3Cpath d='M1.81075 1.541C2.59625 0.834858 3.62709 0.464484 4.68239 0.509248C5.73768 0.554012 6.73346 1.01035 7.45633 1.78048C7.45633 1.78048 5.95067 3.33072 5.29083 3.85809C5.29083 3.85809 4.96601 4.25807 5.01059 4.36761C5.14434 4.68862 7.26271 7.23117 7.26271 7.23244L7.20666 7.28339L7.18246 7.30505C5.57617 8.69734 3.04763 8.58906 1.60567 7.035C0.163702 5.48093 0.228667 2.97533 1.81075 1.541Z' fill='url(%23paint13_radial_436_574)'/%3E%3Cpath d='M1.81331 1.53967C2.59884 0.834456 3.62923 0.464782 4.68391 0.509778C5.73858 0.554775 6.73374 1.01087 7.45635 1.78042C7.45635 1.78042 6.01565 3.28353 5.30231 3.84911C5.30231 3.84911 4.99277 4.24272 5.03991 4.35864C5.18385 4.70129 7.25126 7.21964 7.25126 7.22091L7.19521 7.27187L7.17101 7.29352C5.57619 8.68071 3.04765 8.56862 1.60823 7.01965C0.168809 5.47068 0.233774 2.9689 1.81331 1.53967Z' fill='url(%23paint14_radial_436_574)'/%3E%3Cpath d='M1.81457 1.53846C2.60019 0.8338 3.63039 0.464587 4.68477 0.509819C5.73914 0.55505 6.73394 1.01113 7.45633 1.78049C7.45633 1.78049 6.07933 3.23519 5.31885 3.83771C5.31885 3.83771 5.0246 4.21986 5.07555 4.34724C5.22841 4.71028 7.25124 7.20825 7.25124 7.20952L7.19647 7.26047L7.17227 7.28213C5.57489 8.65913 3.04763 8.54958 1.61203 7.00316C0.176432 5.45674 0.237575 2.96387 1.81457 1.53846Z' fill='url(%23paint15_radial_436_574)'/%3E%3Cpath d='M1.81715 1.53592C2.60332 0.832573 3.6333 0.464449 4.68717 0.510146C5.74105 0.555842 6.7353 1.01174 7.45764 1.78049C7.45764 1.78049 6.14433 3.18169 5.34054 3.82625C5.34054 3.82625 5.06158 4.2084 5.11508 4.33578C5.27303 4.72557 7.25128 7.19551 7.24363 7.19678L7.18759 7.24774C7.18013 7.25561 7.17203 7.26286 7.16338 7.26939C5.57493 8.64767 3.04767 8.53175 1.61589 6.98915C0.184114 5.44655 0.245258 2.9575 1.81715 1.53592Z' fill='url(%23paint16_radial_436_574)'/%3E%3Cpath d='M1.81845 1.53459C2.60555 0.832304 3.63615 0.46579 4.68994 0.513397C5.74373 0.561004 6.73708 1.01896 7.45766 1.78935C7.45766 1.78935 6.20804 3.13706 5.35203 3.81855C5.35203 3.81855 5.08835 4.19051 5.14567 4.32808C5.31763 4.74207 7.23983 7.18909 7.23856 7.19036C7.23728 7.19163 7.19143 7.23494 7.18251 7.24131L7.15958 7.26297C5.57367 8.63105 3.04768 8.50877 1.61846 6.97381C0.189227 5.43886 0.245275 2.95108 1.81845 1.53459Z' fill='url(%23paint17_radial_436_574)'/%3E%3Cpath d='M1.82094 1.53337C2.60777 0.831547 3.63788 0.465306 4.69115 0.512911C5.74443 0.560517 6.7373 1.01819 7.45761 1.78813C7.45761 1.78813 6.27295 3.09125 5.36854 3.80841C5.36854 3.80841 5.12014 4.17273 5.18001 4.31794C5.36217 4.75486 7.23596 7.17767 7.23342 7.17895L7.17864 7.2299L7.15444 7.25155C5.57235 8.61454 3.04763 8.48971 1.62223 6.95858C0.196819 5.42744 0.251593 2.94476 1.82094 1.53337Z' fill='url(%23paint18_radial_436_574)'/%3E%3Cpath d='M1.82221 1.52565C2.60911 0.824525 3.63888 0.458725 4.69174 0.506323C5.74461 0.55392 6.73717 1.01115 7.4576 1.78042C7.4576 1.78042 6.33664 3.03513 5.38636 3.78924C5.38636 3.78924 5.15198 4.14591 5.21567 4.29877C5.40675 4.75862 7.23086 7.1585 7.22958 7.15977L7.17354 7.21073L7.14933 7.23111C5.57234 8.59792 3.04763 8.46926 1.62477 6.9445C0.20191 5.41973 0.256684 2.93832 1.82221 1.52565Z' fill='url(%23paint19_radial_436_574)'/%3E%3Cpath d='M1.82476 1.52565C2.61138 0.824989 3.64066 0.459461 4.69301 0.507057C5.74536 0.554653 6.73744 1.0116 7.4576 1.78042C6.82431 2.49848 6.13745 3.16746 5.40293 3.78159C5.40293 3.78159 5.18383 4.13189 5.25134 4.29112C5.45133 4.7739 7.22577 7.14831 7.22449 7.15085L7.16972 7.20053L7.14551 7.22219C5.57107 8.58136 3.04763 8.45015 1.62859 6.92921C0.209551 5.40826 0.260504 2.92686 1.82476 1.52565Z' fill='url(%23paint20_radial_436_574)'/%3E%3Cpath d='M1.82603 1.52576C2.61279 0.825402 3.64201 0.460077 4.69426 0.507669C5.74651 0.555261 6.73854 1.012 7.45887 1.78052C6.83445 2.49663 6.15283 3.16078 5.42076 3.76641C5.42076 3.76641 5.21822 4.10907 5.29337 4.27594C5.50355 4.78547 7.22958 7.13312 7.22704 7.1344L7.17226 7.18535L7.14806 7.207C5.57107 8.56363 3.04762 8.42987 1.63113 6.91403C0.214642 5.39818 0.265595 2.92696 1.82603 1.52576Z' fill='url(%23paint21_radial_436_574)'/%3E%3Cpath d='M1.82858 1.52573C2.61535 0.82645 3.64394 0.461802 4.69548 0.509383C5.74702 0.556964 6.73848 1.01302 7.45888 1.78049C6.84427 2.49712 6.16734 3.15784 5.43605 3.75492C5.43605 3.75492 5.24879 4.09121 5.3214 4.26445C5.5405 4.79818 7.21685 7.13055 7.21558 7.13055C7.2143 7.13055 7.17099 7.17259 7.15953 7.18151L7.1366 7.20189C5.5698 8.54705 3.04763 8.40438 1.63496 6.89872C0.222288 5.39306 0.269419 2.92694 1.82858 1.52573Z' fill='url(%23paint22_radial_436_574)'/%3E%3Cpath d='M1.82985 1.52572C2.61655 0.826828 3.64487 0.462418 4.6961 0.509995C5.74733 0.557573 6.73852 1.01339 7.45887 1.78049C6.8542 2.49841 6.1824 3.15699 5.4526 3.74727C5.4526 3.74727 5.28064 4.07592 5.35579 4.2568C5.58635 4.80836 7.21303 7.11271 7.21048 7.11398L7.1557 7.16366L7.1315 7.18532C5.56852 8.53175 3.04763 8.39035 1.63878 6.88342C0.229931 5.37649 0.274515 2.91419 1.82985 1.52572Z' fill='url(%23paint23_radial_436_574)'/%3E%3Cpath d='M1.83115 1.52572C2.61778 0.827207 3.64582 0.463033 4.69674 0.510607C5.74767 0.558182 6.7386 1.01375 7.4589 1.78048C6.86456 2.49966 6.19734 3.15536 5.46791 3.73707C5.46791 3.73707 5.31123 4.05808 5.39021 4.2466C5.62969 4.8211 7.20668 7.09996 7.20541 7.10251L7.14936 7.15219L7.12516 7.17385C5.56855 8.51391 3.04765 8.36997 1.64644 6.86813C0.245239 5.36629 0.279632 2.90781 1.83115 1.52572Z' fill='url(%23paint24_radial_436_574)'/%3E%3Cpath d='M1.83368 1.5257C2.62017 0.827963 3.64766 0.464264 4.69797 0.511832C5.74828 0.5594 6.73869 1.01449 7.45889 1.78047C6.87569 2.4999 6.21433 3.15228 5.48701 3.72559C5.48701 3.72559 5.34434 4.04023 5.42714 4.23512C5.6819 4.83255 7.21049 7.08848 7.20157 7.09103L7.1468 7.14071L7.1226 7.16109C5.56726 8.49733 3.04764 8.34957 1.64643 6.85283C0.245224 5.35609 0.283439 2.90143 1.83368 1.5257Z' fill='url(%23paint25_radial_436_574)'/%3E%3Cpath d='M1.83494 1.52569C2.6215 0.828636 3.64865 0.465373 4.69855 0.512934C5.74846 0.560495 6.73855 1.01514 7.45887 1.78045C6.88739 2.50144 6.23086 3.1507 5.50355 3.71412C5.50355 3.71412 5.37617 4.02111 5.46152 4.22364C5.71628 4.844 7.19901 7.07574 7.19646 7.07701C7.19392 7.07828 7.15443 7.1165 7.14169 7.12669L7.11749 7.14834C5.56724 8.48076 3.04762 8.33045 1.64641 6.83753C0.245209 5.34461 0.288519 2.89505 1.83494 1.52569Z' fill='url(%23paint26_radial_436_574)'/%3E%3Cpath d='M1.83748 1.51806C2.62493 0.822358 3.65237 0.460662 4.70199 0.509648C5.7516 0.558633 6.74088 1.01445 7.46012 1.78047C7.46012 1.78047 6.85124 2.64667 5.52009 3.70267C5.52009 3.70267 5.408 4.00329 5.49717 4.21219C5.76467 4.84911 7.1939 7.06428 7.19262 7.06556L7.13657 7.11524L7.11365 7.13689C5.56595 8.46421 3.04761 8.31008 1.6464 6.82226C0.245198 5.33443 0.29233 2.88869 1.83748 1.51806Z' fill='url(%23paint27_radial_436_574)'/%3E%3Cpath d='M1.83878 1.51555C2.62663 0.820855 3.65391 0.460039 4.70313 0.509493C5.75235 0.558946 6.74114 1.01479 7.46016 1.7805C7.46016 1.7805 6.91624 2.5932 5.53669 3.69124C5.48529 3.85719 5.48529 4.03481 5.53669 4.20077C5.81438 4.86698 7.19266 7.05031 7.19266 7.05286L7.13788 7.10254L7.11368 7.12292C5.56471 8.44769 3.04764 8.29101 1.65535 6.80828C0.263059 5.32555 0.297453 2.88364 1.83878 1.51555Z' fill='url(%23paint28_radial_436_574)'/%3E%3Cpath d='M1.84134 1.51425C2.62893 0.819877 3.65589 0.459355 4.70469 0.509049C5.75349 0.558743 6.74176 1.01475 7.46017 1.78048C7.46017 1.78048 6.97994 2.54477 5.54944 3.67465C5.50443 3.84224 5.5093 4.01932 5.56345 4.18418C5.85006 4.88224 7.18503 7.04264 7.18248 7.04519L7.1277 7.09487L7.10477 7.11525C5.56472 8.43111 3.04765 8.27698 1.65791 6.79297C0.268166 5.30897 0.302559 2.87724 1.84134 1.51425Z' fill='url(%23paint29_radial_436_574)'/%3E%3Cpath d='M1.84264 1.51294C2.63032 0.819108 3.65709 0.459044 4.70559 0.508972C5.75409 0.558901 6.742 1.0149 7.46019 1.78044C7.46019 1.78044 7.04493 2.50015 5.56984 3.66952C5.53436 3.83913 5.54536 4.01517 5.60169 4.17905C5.89849 4.89111 7.18122 7.02731 7.17868 7.02986L7.1239 7.07827L7.0997 7.09992C5.56347 8.4145 3.04767 8.25018 1.66175 6.77764C0.25418 5.28472 0.306407 2.87083 1.84264 1.51294Z' fill='url(%23paint30_radial_436_574)'/%3E%3Cpath d='M1.84513 1.51043C2.63314 0.817989 3.65948 0.459038 4.70728 0.509431C5.75507 0.559825 6.74223 1.01561 7.46015 1.78048C7.46015 1.78048 7.10857 2.44669 5.58635 3.653C5.56009 3.82442 5.57761 3.9997 5.63731 4.16253C5.94302 4.89752 7.17608 7.01079 7.17354 7.01207L7.11876 7.06175L7.09456 7.08213C5.56597 8.38779 3.05017 8.22857 1.66425 6.75348C0.278332 5.27839 0.311451 2.8645 1.84513 1.51043Z' fill='url(%23paint31_radial_436_574)'/%3E%3Cpath d='M1.84647 1.50911C2.63477 0.817136 3.66114 0.458606 4.70885 0.509233C5.75655 0.559859 6.74357 1.01568 7.46148 1.78044C7.46148 1.78044 7.17359 2.39697 5.60425 3.64149C5.58706 3.81437 5.61062 3.98888 5.67303 4.15102C5.98767 4.91913 7.17105 7.00311 7.1685 7.00948L7.11372 7.05916L7.0908 7.07954C5.56221 8.38011 3.04768 8.21069 1.66814 6.74834C0.266931 5.26307 0.31661 2.85809 1.84647 1.50911Z' fill='url(%23paint32_radial_436_574)'/%3E%3Cpath d='M1.84899 1.50793C2.63717 0.816577 3.66315 0.45854 4.71034 0.509402C5.75753 0.560264 6.74399 1.01605 7.46146 1.78053C7.46146 1.78053 7.23726 2.35375 5.62078 3.63521C5.61357 3.80925 5.64308 3.98286 5.7074 4.14474C6.03223 4.93069 7.1672 6.99556 7.16466 7.0032L7.10988 7.05161L7.08568 7.07199C5.56091 8.36364 3.04766 8.19168 1.67066 6.73188C0.273274 5.25169 0.320406 2.85181 1.84899 1.50793Z' fill='url(%23paint33_radial_436_574)'/%3E%3Cpath d='M1.8503 1.5053C2.63886 0.814959 3.66469 0.457799 4.71148 0.509129C5.75828 0.560459 6.74424 1.01627 7.46148 1.78045C7.46148 1.78045 7.30226 2.30399 5.63737 3.62367C5.64011 3.80073 5.67597 3.9757 5.7431 4.13957C6.07811 4.94335 7.16213 6.98401 7.15959 6.98656L7.10481 7.03497L7.08188 7.05535C5.56094 8.347 3.04769 8.17121 1.67451 6.71651C0.279673 5.24142 0.32553 2.84536 1.8503 1.5053Z' fill='url(%23paint34_radial_436_574)'/%3E%3Cpath d='M1.8528 1.50402C2.64181 0.816385 3.66672 0.461504 4.712 0.514006C5.75728 0.566508 6.74148 1.0223 7.45762 1.78553C7.45762 1.78553 7.36208 2.25557 5.65006 3.61219C5.66484 3.78983 5.70784 3.96398 5.77744 4.12809C6.12265 4.95607 7.15827 6.97253 7.15572 6.97508L7.10095 7.02349C7.09231 7.02958 7.08422 7.0364 7.07674 7.04387C5.55962 8.33043 3.04764 8.14954 1.67828 6.70121C0.285995 5.22994 0.329305 2.84026 1.8528 1.50402Z' fill='url(%23paint35_radial_436_574)'/%3E%3Cpath d='M1.85404 1.50284C2.64308 0.815065 3.66815 0.460208 4.71353 0.512952C5.75892 0.565696 6.74307 1.02193 7.45887 1.78563C7.45887 1.78563 7.4283 2.20726 5.66787 3.60083C5.69288 3.77866 5.74083 3.9525 5.81054 4.118C6.16721 4.96509 7.15315 6.9599 7.1506 6.96244L7.09583 7.01085C7.08818 7.01085 7.07927 7.02613 7.07163 7.03123C5.55832 8.31397 3.04762 8.13181 1.68081 6.68602C0.292338 5.21985 0.334374 2.83398 1.85404 1.50284Z' fill='url(%23paint36_radial_436_574)'/%3E%3Cpath d='M1.85658 1.50022C2.64621 0.81337 3.67134 0.45935 4.71653 0.51256C5.76173 0.56577 6.74561 1.02207 7.4614 1.78556C7.4614 1.78556 7.49452 2.16261 5.68696 3.59056C5.72398 3.76753 5.7786 3.94036 5.85001 4.10646C6.21305 4.9803 7.15059 6.94836 7.14676 6.95091C7.14294 6.95345 7.10982 6.9853 7.09199 6.99931L7.06906 7.01969C5.55958 8.29988 3.04761 8.11136 1.68462 6.67066C0.297423 5.20832 0.33946 2.82754 1.85658 1.50022Z' fill='url(%23paint37_radial_436_574)'/%3E%3Cpath d='M1.8579 1.49896C2.6477 0.812127 3.67309 0.458351 4.71839 0.512041C5.76369 0.565732 6.74743 1.0227 7.46271 1.78684C7.46271 1.78684 7.55952 2.10912 5.70484 3.57911C5.75246 3.75536 5.81204 3.92815 5.88317 4.09628C6.2564 4.98796 7.14425 6.93691 7.14171 6.93946L7.08693 6.98786L7.06273 7.00825C5.55835 8.27697 3.04764 8.09099 1.6872 6.65667C0.303833 5.19687 0.343322 2.82119 1.8579 1.49896Z' fill='url(%23paint38_radial_436_574)'/%3E%3Cpath d='M1.86049 1.49765C2.65046 0.810982 3.67594 0.457428 4.72124 0.511356C5.76655 0.565284 6.7502 1.02249 7.46531 1.78681C7.46531 1.78681 7.62327 2.05941 5.72272 3.56379C5.72272 3.56379 5.79278 3.7778 5.92016 4.08097C6.30231 5.00067 7.14049 6.92159 7.13794 6.92414L7.08316 6.97254L7.06024 6.99165C5.55712 8.2642 3.04769 8.07185 1.69107 6.64135C0.310247 5.18537 0.348462 2.81479 1.86049 1.49765Z' fill='url(%23paint39_radial_436_574)'/%3E%3Cpath d='M7.13155 6.91652C5.64373 8.25404 3.07188 8.07697 1.6936 6.621C0.315329 5.16502 0.35227 2.79953 1.86175 1.49004C2.65217 0.803988 3.67778 0.451072 4.72299 0.505471C5.76821 0.55987 6.75163 1.01735 7.46657 1.78174C7.46657 1.78174 7.69203 2.00594 5.74181 3.55108C5.73799 3.55618 7.13665 6.9127 7.13155 6.91652Z' fill='url(%23paint40_radial_436_574)'/%3E%3Cpath d='M5.6819 3.59924C5.07174 4.09986 4.32146 4.68964 3.44889 5.35075C4.0971 6.05174 4.85097 6.64702 5.68317 7.115C6.39779 7.49714 6.957 7.56848 7.23087 7.32645C7.50474 7.08442 7.47162 6.52649 7.15317 5.79786C6.77612 4.99516 6.28011 4.25394 5.6819 3.59924Z' fill='url(%23paint41_linear_436_574)'/%3E%3Cpath d='M5.73667 3.54956L5.43095 3.80433C5.99072 4.41967 6.45607 5.11468 6.81178 5.86664C7.12386 6.58508 7.11622 6.94557 7.01559 7.03601C6.91496 7.12645 6.48058 7.14938 5.78635 6.78125C5.01731 6.34512 4.32178 5.79058 3.72531 5.13802L3.38392 5.39278L3.46417 5.47049C4.90996 6.96468 6.47421 7.81559 7.16208 7.50605C7.18246 7.49586 7.20284 7.48567 7.22195 7.47421H7.22959C7.2562 7.4577 7.28134 7.43895 7.30475 7.41816C7.32954 7.39573 7.35215 7.37099 7.37226 7.34428C7.82192 6.7545 7.13915 5.16604 5.77871 3.60943L5.73667 3.54956Z' fill='%2384EEB1'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.5276 0.953194) rotate(-2.29061) scale(18.3386 13.5709)'%3E%3Cstop stop-color='%2303BA50'/%3E%3Cstop offset='0.8' stop-color='%2301B64E'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.52572 0.951693) rotate(-2.29061) scale(18.3003 13.5426)'%3E%3Cstop stop-color='%2304BC50'/%3E%3Cstop offset='0.8' stop-color='%2301B34D'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.52138 0.955178) rotate(-2.29061) scale(18.2621 13.5142)'%3E%3Cstop stop-color='%2306BD51'/%3E%3Cstop offset='0.72' stop-color='%2302B24C'/%3E%3Cstop offset='0.8' stop-color='%2301B04B'/%3E%3C/radialGradient%3E%3CradialGradient id='paint3_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.51454 0.960996) rotate(-2.29061) scale(18.2239 13.486)'%3E%3Cstop stop-color='%2308BF52'/%3E%3Cstop offset='0.56' stop-color='%2304B44D'/%3E%3Cstop offset='0.8' stop-color='%2301AD4A'/%3E%3C/radialGradient%3E%3CradialGradient id='paint4_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.50765 0.966404) rotate(-2.29061) scale(18.1856 13.4576)'%3E%3Cstop stop-color='%230AC053'/%3E%3Cstop offset='0.48' stop-color='%2305B54E'/%3E%3Cstop offset='0.8' stop-color='%2301AA49'/%3E%3C/radialGradient%3E%3CradialGradient id='paint5_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.49963 0.980237) rotate(-1.71836) scale(18.1397 13.4277)'%3E%3Cstop stop-color='%230BC253'/%3E%3Cstop offset='0.42' stop-color='%2307B74E'/%3E%3Cstop offset='0.8' stop-color='%2301A848'/%3E%3C/radialGradient%3E%3CradialGradient id='paint6_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.48906 0.983656) rotate(-1.71836) scale(18.1015 13.3993)'%3E%3Cstop stop-color='%230DC354'/%3E%3Cstop offset='0.37' stop-color='%2308B84F'/%3E%3Cstop offset='0.8' stop-color='%2301A546'/%3E%3C/radialGradient%3E%3CradialGradient id='paint7_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.62356 0.98723) rotate(-1.71836) scale(18.0633 13.3656)'%3E%3Cstop stop-color='%230FC555'/%3E%3Cstop offset='0.33' stop-color='%230ABA50'/%3E%3Cstop offset='0.8' stop-color='%2301A245'/%3E%3C/radialGradient%3E%3CradialGradient id='paint8_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.61018 0.993741) rotate(-1.70136) scale(18.2051 13.3374)'%3E%3Cstop stop-color='%2311C656'/%3E%3Cstop offset='0.3' stop-color='%230CBB51'/%3E%3Cstop offset='0.8' stop-color='%23019F44'/%3E%3C/radialGradient%3E%3CradialGradient id='paint9_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.60569 1.00022) rotate(-1.70135) scale(18.1665 13.3091)'%3E%3Cstop stop-color='%2312C856'/%3E%3Cstop offset='0.28' stop-color='%230EBD51'/%3E%3Cstop offset='0.77' stop-color='%23029E44'/%3E%3Cstop offset='0.8' stop-color='%23019C43'/%3E%3C/radialGradient%3E%3CradialGradient id='paint10_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.60125 1.00906) rotate(-1.70135) scale(18.1266 13.2798)'%3E%3Cstop stop-color='%2314C957'/%3E%3Cstop offset='0.26' stop-color='%230FBE52'/%3E%3Cstop offset='0.72' stop-color='%23049F44'/%3E%3Cstop offset='0.8' stop-color='%23019941'/%3E%3C/radialGradient%3E%3CradialGradient id='paint11_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.59296 1.01995) rotate(-1.70136) scale(18.088 13.2516)'%3E%3Cstop stop-color='%2316CB58'/%3E%3Cstop offset='0.24' stop-color='%2311C053'/%3E%3Cstop offset='0.66' stop-color='%2306A145'/%3E%3Cstop offset='0.8' stop-color='%23019640'/%3E%3C/radialGradient%3E%3CradialGradient id='paint12_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.58342 1.03169) rotate(-1.70135) scale(18.0494 13.2233)'%3E%3Cstop stop-color='%2318CC59'/%3E%3Cstop offset='0.23' stop-color='%2313C154'/%3E%3Cstop offset='0.62' stop-color='%2307A246'/%3E%3Cstop offset='0.8' stop-color='%2301933F'/%3E%3C/radialGradient%3E%3CradialGradient id='paint13_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.57385 1.04582) rotate(-1.70135) scale(18.0095 13.194)'%3E%3Cstop stop-color='%2319CD59'/%3E%3Cstop offset='0.21' stop-color='%2315C254'/%3E%3Cstop offset='0.59' stop-color='%2309A347'/%3E%3Cstop offset='0.8' stop-color='%2301903E'/%3E%3C/radialGradient%3E%3CradialGradient id='paint14_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.56178 1.06088) rotate(-1.70135) scale(17.9709 13.1657)'%3E%3Cstop stop-color='%231BCF5A'/%3E%3Cstop offset='0.2' stop-color='%2317C455'/%3E%3Cstop offset='0.56' stop-color='%230BA547'/%3E%3Cstop offset='0.8' stop-color='%23018D3C'/%3E%3C/radialGradient%3E%3CradialGradient id='paint15_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.54842 1.0056) rotate(-1.13442) scale(17.9279 13.1371)'%3E%3Cstop stop-color='%231DD05B'/%3E%3Cstop offset='0.19' stop-color='%2318C556'/%3E%3Cstop offset='0.54' stop-color='%230CA648'/%3E%3Cstop offset='0.8' stop-color='%23018B3B'/%3E%3C/radialGradient%3E%3CradialGradient id='paint16_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.53385 1.01709) rotate(-1.13442) scale(17.888 13.1079)'%3E%3Cstop stop-color='%231ED25B'/%3E%3Cstop offset='0.18' stop-color='%231AC756'/%3E%3Cstop offset='0.51' stop-color='%230EA848'/%3E%3Cstop offset='0.8' stop-color='%2301883A'/%3E%3C/radialGradient%3E%3CradialGradient id='paint17_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.51927 1.02822) rotate(-1.13442) scale(17.8494 13.0796)'%3E%3Cstop stop-color='%2320D35C'/%3E%3Cstop offset='0.18' stop-color='%231BC857'/%3E%3Cstop offset='0.49' stop-color='%230FA949'/%3E%3Cstop offset='0.8' stop-color='%23018539'/%3E%3C/radialGradient%3E%3CradialGradient id='paint18_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.50209 1.04396) rotate(-1.13442) scale(17.8108 13.0513)'%3E%3Cstop stop-color='%2322D55D'/%3E%3Cstop offset='0.17' stop-color='%231DCA58'/%3E%3Cstop offset='0.47' stop-color='%2311AB4A'/%3E%3Cstop offset='0.8' stop-color='%23018237'/%3E%3C/radialGradient%3E%3CradialGradient id='paint19_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.48237 1.05836) rotate(-1.13442) scale(17.7709 13.0221)'%3E%3Cstop stop-color='%2324D65E'/%3E%3Cstop offset='0.16' stop-color='%231FCB59'/%3E%3Cstop offset='0.45' stop-color='%2313AC4B'/%3E%3Cstop offset='0.8' stop-color='%23017F36'/%3E%3C/radialGradient%3E%3CradialGradient id='paint20_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.46142 1.07604) rotate(-1.13442) scale(17.7323 12.9938)'%3E%3Cstop stop-color='%2325D85E'/%3E%3Cstop offset='0.15' stop-color='%2320CD59'/%3E%3Cstop offset='0.43' stop-color='%2314AE4B'/%3E%3Cstop offset='0.79' stop-color='%23017D36'/%3E%3Cstop offset='0.8' stop-color='%23007C35'/%3E%3C/radialGradient%3E%3CradialGradient id='paint21_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.84696 1.0961) rotate(-1.13442) scale(17.6937 12.9621)'%3E%3Cstop stop-color='%2327D95F'/%3E%3Cstop offset='0.15' stop-color='%2322CE5A'/%3E%3Cstop offset='0.42' stop-color='%2316AF4C'/%3E%3Cstop offset='0.77' stop-color='%23027E36'/%3E%3Cstop offset='0.8' stop-color='%23007934'/%3E%3C/radialGradient%3E%3CradialGradient id='paint22_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.71519 1.11665) rotate(-1.1233) scale(17.8285 12.9329)'%3E%3Cstop stop-color='%2329DB60'/%3E%3Cstop offset='0.14' stop-color='%2324D05B'/%3E%3Cstop offset='0.4' stop-color='%2318B14D'/%3E%3Cstop offset='0.74' stop-color='%23048037'/%3E%3Cstop offset='0.8' stop-color='%23007632'/%3E%3C/radialGradient%3E%3CradialGradient id='paint23_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.69963 1.13952) rotate(-1.1233) scale(17.7895 12.9046)'%3E%3Cstop stop-color='%232BDC61'/%3E%3Cstop offset='0.14' stop-color='%2326D15C'/%3E%3Cstop offset='0.39' stop-color='%231AB24E'/%3E%3Cstop offset='0.71' stop-color='%23068138'/%3E%3Cstop offset='0.8' stop-color='%23007331'/%3E%3C/radialGradient%3E%3CradialGradient id='paint24_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.68409 1.16464) rotate(-1.1233) scale(17.7492 12.8754)'%3E%3Cstop stop-color='%232CDE61'/%3E%3Cstop offset='0.13' stop-color='%2327D35C'/%3E%3Cstop offset='0.37' stop-color='%231BB44E'/%3E%3Cstop offset='0.69' stop-color='%23088339'/%3E%3Cstop offset='0.8' stop-color='%23007030'/%3E%3C/radialGradient%3E%3CradialGradient id='paint25_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.6672 1.03709) rotate(-0.561705) scale(17.7077 12.8472)'%3E%3Cstop stop-color='%232EDF62'/%3E%3Cstop offset='0.13' stop-color='%2329D45D'/%3E%3Cstop offset='0.37' stop-color='%231DB54F'/%3E%3Cstop offset='0.67' stop-color='%23098439'/%3E%3Cstop offset='0.8' stop-color='%23006E2F'/%3E%3C/radialGradient%3E%3CradialGradient id='paint26_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.64771 1.05701) rotate(-0.561705) scale(17.6687 12.819)'%3E%3Cstop stop-color='%2330E163'/%3E%3Cstop offset='0.13' stop-color='%232BD65E'/%3E%3Cstop offset='0.35' stop-color='%231FB750'/%3E%3Cstop offset='0.65' stop-color='%230B8639'/%3E%3Cstop offset='0.8' stop-color='%23006B2D'/%3E%3C/radialGradient%3E%3CradialGradient id='paint27_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.6282 1.07919) rotate(-0.561706) scale(17.6284 12.7897)'%3E%3Cstop stop-color='%2331E263'/%3E%3Cstop offset='0.12' stop-color='%232CD75E'/%3E%3Cstop offset='0.34' stop-color='%2320B850'/%3E%3Cstop offset='0.63' stop-color='%230D873A'/%3E%3Cstop offset='0.8' stop-color='%2300682C'/%3E%3C/radialGradient%3E%3CradialGradient id='paint28_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.60616 1.10236) rotate(-0.561705) scale(17.5895 12.7614)'%3E%3Cstop stop-color='%2333E364'/%3E%3Cstop offset='0.12' stop-color='%232ED85F'/%3E%3Cstop offset='0.34' stop-color='%2322B951'/%3E%3Cstop offset='0.62' stop-color='%230E883B'/%3E%3Cstop offset='0.8' stop-color='%2300652B'/%3E%3C/radialGradient%3E%3CradialGradient id='paint29_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.5828 1.12738) rotate(-0.561705) scale(17.5492 12.7322)'%3E%3Cstop stop-color='%2335E565'/%3E%3Cstop offset='0.12' stop-color='%2330DA60'/%3E%3Cstop offset='0.33' stop-color='%2324BB52'/%3E%3Cstop offset='0.6' stop-color='%23108A3C'/%3E%3Cstop offset='0.8' stop-color='%2300622A'/%3E%3C/radialGradient%3E%3CradialGradient id='paint30_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.55943 1.15334) rotate(-0.561705) scale(17.5102 12.7039)'%3E%3Cstop stop-color='%2337E666'/%3E%3Cstop offset='0.11' stop-color='%2332DB61'/%3E%3Cstop offset='0.32' stop-color='%2326BC53'/%3E%3Cstop offset='0.59' stop-color='%23128B3C'/%3E%3Cstop offset='0.8' stop-color='%23005F28'/%3E%3C/radialGradient%3E%3CradialGradient id='paint31_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.53339 1.18163) rotate(-0.561705) scale(17.4699 12.6747)'%3E%3Cstop stop-color='%2338E866'/%3E%3Cstop offset='0.11' stop-color='%2333DD61'/%3E%3Cstop offset='0.31' stop-color='%2327BE53'/%3E%3Cstop offset='0.57' stop-color='%23148D3D'/%3E%3Cstop offset='0.8' stop-color='%23005C27'/%3E%3C/radialGradient%3E%3CradialGradient id='paint32_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.50617 1.21174) rotate(-0.561705) scale(17.4309 12.6464)'%3E%3Cstop stop-color='%233AE967'/%3E%3Cstop offset='0.11' stop-color='%2335DE62'/%3E%3Cstop offset='0.3' stop-color='%2329BF54'/%3E%3Cstop offset='0.56' stop-color='%23158E3E'/%3E%3Cstop offset='0.8' stop-color='%23005926'/%3E%3C/radialGradient%3E%3CradialGradient id='paint33_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.47884 1.24295) rotate(-0.561705) scale(17.392 12.6182)'%3E%3Cstop stop-color='%233CEB68'/%3E%3Cstop offset='0.11' stop-color='%2337E063'/%3E%3Cstop offset='0.29' stop-color='%232BC155'/%3E%3Cstop offset='0.54' stop-color='%2317903F'/%3E%3Cstop offset='0.8' stop-color='%23005625'/%3E%3C/radialGradient%3E%3CradialGradient id='paint34_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.44767 1.27624) rotate(-0.561705) scale(17.3517 12.5889)'%3E%3Cstop stop-color='%233EEC69'/%3E%3Cstop offset='0.1' stop-color='%2339E164'/%3E%3Cstop offset='0.29' stop-color='%232DC256'/%3E%3Cstop offset='0.53' stop-color='%2319913F'/%3E%3Cstop offset='0.8' stop-color='%23005323'/%3E%3C/radialGradient%3E%3CradialGradient id='paint35_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.41646 1.07802) scale(17.3119 12.5596)'%3E%3Cstop stop-color='%233FEE69'/%3E%3Cstop offset='0.1' stop-color='%233AE364'/%3E%3Cstop offset='0.28' stop-color='%232EC456'/%3E%3Cstop offset='0.52' stop-color='%231A9340'/%3E%3Cstop offset='0.8' stop-color='%23005122'/%3E%3C/radialGradient%3E%3CradialGradient id='paint36_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.82513 1.10599) scale(17.4409 12.5304)'%3E%3Cstop stop-color='%2341EF6A'/%3E%3Cstop offset='0.1' stop-color='%233CE465'/%3E%3Cstop offset='0.28' stop-color='%2330C557'/%3E%3Cstop offset='0.51' stop-color='%231C9441'/%3E%3Cstop offset='0.79' stop-color='%23015022'/%3E%3Cstop offset='0.8' stop-color='%23004E21'/%3E%3C/radialGradient%3E%3CradialGradient id='paint37_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.79993 1.13601) scale(17.4029 12.503)'%3E%3Cstop stop-color='%2343F16B'/%3E%3Cstop offset='0.1' stop-color='%233EE666'/%3E%3Cstop offset='0.27' stop-color='%2332C758'/%3E%3Cstop offset='0.5' stop-color='%231E9642'/%3E%3Cstop offset='0.77' stop-color='%23035223'/%3E%3Cstop offset='0.8' stop-color='%23004B20'/%3E%3C/radialGradient%3E%3CradialGradient id='paint38_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.77606 1.16799) scale(17.3635 12.4748)'%3E%3Cstop stop-color='%2345F26C'/%3E%3Cstop offset='0.1' stop-color='%2340E767'/%3E%3Cstop offset='0.27' stop-color='%2334C859'/%3E%3Cstop offset='0.49' stop-color='%23209742'/%3E%3Cstop offset='0.76' stop-color='%23055323'/%3E%3Cstop offset='0.8' stop-color='%2300481E'/%3E%3C/radialGradient%3E%3CradialGradient id='paint39_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.75085 1.20215) scale(17.3228 12.4455)'%3E%3Cstop stop-color='%2346F46C'/%3E%3Cstop offset='0.09' stop-color='%2341E967'/%3E%3Cstop offset='0.26' stop-color='%2335CA59'/%3E%3Cstop offset='0.48' stop-color='%23229943'/%3E%3Cstop offset='0.74' stop-color='%23065524'/%3E%3Cstop offset='0.8' stop-color='%2300451D'/%3E%3C/radialGradient%3E%3CradialGradient id='paint40_radial_436_574' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(5.72684 1.23825) scale(17.2821 12.4163)'%3E%3Cstop stop-color='%2348F56D'/%3E%3Cstop offset='0.09' stop-color='%2343EA68'/%3E%3Cstop offset='0.25' stop-color='%2337CB5A'/%3E%3Cstop offset='0.47' stop-color='%23239A44'/%3E%3Cstop offset='0.73' stop-color='%23085625'/%3E%3Cstop offset='0.8' stop-color='%2300421C'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint41_linear_436_574' x1='6.008' y1='10.1658' x2='4.51763' y2='-0.521574' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.1' stop-color='%23FF8475'/%3E%3Cstop offset='0.37' stop-color='%23E84E43'/%3E%3Cstop offset='0.6' stop-color='%23D6261F'/%3E%3Cstop offset='0.79' stop-color='%23CC0E08'/%3E%3Cstop offset='0.9' stop-color='%23C80500'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_436_574'%3E%3Crect width='8' height='8' fill='white' transform='translate(0.5 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    }
    .yaPersonalButtonSubTextSvg_pay {
        background-image: url("data:image/svg+xml,%3Csvg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_377_3295)'%3E%3Cellipse cx='4.5' cy='4.49982' rx='4' ry='4' fill='%23FC3F1D'/%3E%3Cpath d='M5.08977 2.73993H4.68495C3.99098 2.73993 3.64399 3.08692 3.64399 3.6074C3.64399 4.18572 3.87532 4.47487 4.3958 4.82186L4.80062 5.11102L3.64399 6.90379H2.71869L3.81748 5.28451C3.18134 4.82186 2.83435 4.41704 2.83435 3.66524C2.83435 2.73993 3.4705 2.10379 4.68495 2.10379H5.89941V6.90379H5.08977V2.73993Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_377_3295'%3E%3Crect width='8' height='8' fill='white' transform='translate(0.5 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    }
    .yaPersonalButtonAvatar {
        position: relative;
        box-sizing: border-box;

        flex-shrink: 0;

        margin-left: 16px;

        border-radius: 50%;
        border: 0.5px solid #767676;
        background-size: contain;
        background-color: #767676;
    }
    .yaPersonalButtonAvatar_plus {
        border: none;
    }
    .yaPersonalButtonAvatar_plus::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='14' cy='14' r='13' stroke='url(%23paint0_radial_101_494)' stroke-width='2'/%3E%3Ccircle cx='14' cy='14' r='13' stroke='url(%23paint1_radial_101_494)' stroke-width='2'/%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_101_494' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(28) rotate(135) scale(39.598 59.931)'%3E%3Cstop stop-color='%2348CCE0'/%3E%3Cstop offset='0.288462' stop-color='%23428BEB'/%3E%3Cstop offset='0.601763' stop-color='%23505ADD'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_101_494' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(-2.36724e-06 28) scale(28 79.4314)'%3E%3Cstop stop-color='%23FCAB14'/%3E%3Cstop offset='0.159058' stop-color='%23FA6641'/%3E%3Cstop offset='0.402081' stop-color='%23BE40C0'/%3E%3Cstop offset='1' stop-color='%23505ADD' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    }
    .yaPersonalButtonGradient {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .yaPersonalButtonGradient_main.yaPersonalButtonGradient_light,
    .yaPersonalButtonGradient_additional.yaPersonalButtonGradient_dark {
        background-image: url("data:image/svg+xml,%3Csvg width='342' height='41' viewBox='0 0 342 41' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_2982_33021' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='-42' width='342' height='83'%3E%3Cellipse cx='171' cy='-0.500217' rx='170.222' ry='41.1111' fill='url(%23paint0_radial_2982_33021)' fill-opacity='0.6'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_2982_33021)'%3E%3Cellipse cx='171.056' cy='-6.94482' rx='191.5' ry='51' fill='url(%23paint1_radial_2982_33021)'/%3E%3Cellipse cx='171.056' cy='-6.94482' rx='191.5' ry='51' fill='url(%23paint2_radial_2982_33021)' fill-opacity='0.4'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_2982_33021' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(171 -0.500217) rotate(90) scale(41.1111 170.222)'%3E%3Cstop stop-color='%23231F20'/%3E%3Cstop offset='1' stop-color='%23231F20' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_2982_33021' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(171.056 -6.94482) scale(191.5 51)'%3E%3Cstop stop-color='%23FF5C4D'/%3E%3Cstop offset='0.25' stop-color='%23EB469F'/%3E%3Cstop offset='0.75' stop-color='%238341EF'/%3E%3Cstop offset='1' stop-color='%233F68F9'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_2982_33021' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(171.056 -6.94482) rotate(90) scale(51 191.5)'%3E%3Cstop offset='0.671875' stop-color='%23231F20' stop-opacity='0'/%3E%3Cstop offset='1'/%3E%3Cstop offset='1' stop-color='%23231F20'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    }
    .yaPersonalButtonGradient_main.yaPersonalButtonGradient_dark,
    .yaPersonalButtonGradient_additional.yaPersonalButtonGradient_light {
        background-image: url("data:image/svg+xml,%3Csvg width='342' height='41' viewBox='0 0 342 41' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_2984_33615' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='-42' width='342' height='83'%3E%3Cellipse cx='171' cy='-0.498753' rx='170.222' ry='41.1111' fill='url(%23paint0_radial_2984_33615)' fill-opacity='0.6'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_2984_33615)'%3E%3Cellipse cx='171.056' cy='3.05664' rx='191.5' ry='51' fill='url(%23paint1_radial_2984_33615)' fill-opacity='0.2'/%3E%3Cellipse cx='171.056' cy='3.05664' rx='191.5' ry='51' fill='url(%23paint2_radial_2984_33615)' fill-opacity='0.4'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_2984_33615' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(171 -0.498753) rotate(90) scale(41.1111 170.222)'%3E%3Cstop stop-color='%23231F20'/%3E%3Cstop offset='1' stop-color='%23231F20' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_2984_33615' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(171.056 3.05664) scale(191.5 51)'%3E%3Cstop stop-color='%23FF5C4D'/%3E%3Cstop offset='0.25' stop-color='%23EB469F'/%3E%3Cstop offset='0.75' stop-color='%238341EF'/%3E%3Cstop offset='1' stop-color='%233F68F9'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_2984_33615' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(171.056 3.05664) rotate(90) scale(51 191.5)'%3E%3Cstop offset='0.671875' stop-color='%23231F20' stop-opacity='0'/%3E%3Cstop offset='1'/%3E%3Cstop offset='1' stop-color='%23231F20'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    }
`);
      }({ customBgColor: ht(t3), customBgHoveredColor: ht(o3), customBorderColor: ht(n3), customBorderHoveredColor: ht(e3), customBorderWidth: "number" == typeof r3 ? r3 : Number(r3) });
    }(L2, G2, A2, j2, void 0 === M2 ? 0 : M2);
    var F2 = { ru: { short: Ot["button.signin.short"], long: Ot["button.signin.default"] }, en: { short: kt["button.signin.short"], long: kt["button.signin.default"] } }, H2 = F2[c2] || F2.ru, Z2 = H2.short, q2 = H2.long, R2 = function() {
      return (arguments.length > 1 ? arguments[1] : void 0) >= (ct[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "m"] || ct.default);
    }(h2, p2.clientWidth) ? q2 : Z2, N2 = mt(E2), V2 = Et(v2), z2 = _t(w2), W2 = vt(N2);
    u2.id = "yaPersonalButton", u2.type = "button", u2.className = st("yaPersonalButton", "yaPersonalButton_".concat(h2), "yaPersonalButton_".concat(N2), "yaPersonalButton_".concat(V2), "yaPersonalButton_icon_".concat(z2), "yaPersonalButton_scheme_".concat(function(t3, o3) {
      return t3 === ft.main && o3 === Ct.light || t3 === ft.additional && o3 === Ct.dark;
    }(N2, V2) ? "dark" : "light"), W2 && "yaPersonalButton_onlyLogo", l2 && "yaPersonalButton_preloading"), u2.style.borderRadius = "".concat(B2, "px");
    var Y2 = document.createElement("div");
    if (Y2.className = "yaPersonalButtonLogo yaPersonalButtonLogo_".concat(z2), N2 === ft.icon && (Y2.style.borderRadius = "".concat(B2, "px")), u2.appendChild(Y2), !W2 && !l2) {
      var K2 = document.createElement("div");
      K2.className = "yaPersonalButtonAvatar", K2.style.backgroundImage = 'url("https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-50")';
      var Q2 = document.createElement("div");
      Q2.className = "yaPersonalButtonInfo";
      var $2 = document.createElement("div");
      $2.className = "yaPersonalButtonText", $2.innerText = R2, Q2.appendChild($2), u2.appendChild(Q2), u2.appendChild(K2);
    }
    if (l2) {
      if (!W2) {
        var J2 = document.createElement("div");
        J2.className = "yaPersonalButtonIdLogo yaPersonalButtonIdLogo_".concat(function(t3, o3) {
          return mt(t3) === ft.main ? Et(o3) : function(t4) {
            return gt[t4] || gt.default;
          }(o3);
        }(N2, V2)), u2.appendChild(J2);
      }
      var X2 = document.createElement("div");
      return X2.classList.add("yaPersonalButtonContainer"), X2.style.height = "".concat(function(t3, o3) {
        return pt[function(t4) {
          return ut[t4] || ut.default;
        }(o3)] - (ft.icon === t3 ? 8 : 0);
      }(N2, h2), "px"), X2.appendChild(u2), p2.appendChild(X2), u2;
    }
    var tt2 = "".concat(n2, "/suggest/popup?").concat(Object.keys(g2).map(function(t3) {
      return "".concat(t3, "=").concat(encodeURIComponent(String(g2[t3])));
    }).join("&"), "&widget_kind=").concat(encodeURIComponent("button-stub"), "&location=").concat(encodeURIComponent(f2));
    return O2 && (tt2 += "&ym_uid=".concat(encodeURIComponent(O2))), S2 && (tt2 += "&source_id=".concat(encodeURIComponent(S2))), u2.addEventListener("click", function() {
      var t3 = (screen.width - 640) / 2, o3 = (screen.height - 720) / 2;
      window.popupWindow = window.open(tt2, "oauth", "left=".concat(t3, ", top=").concat(o3, ", width=").concat(640, ", height=").concat(720, ", scrollbars=no"));
    }), p2.children[0].appendChild(u2), u2;
  };
  function Lt(t2) {
    return Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, Lt(t2);
  }
  function Ut(t2, o2) {
    var n2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var e2 = Object.getOwnPropertySymbols(t2);
      o2 && (e2 = e2.filter(function(o3) {
        return Object.getOwnPropertyDescriptor(t2, o3).enumerable;
      })), n2.push.apply(n2, e2);
    }
    return n2;
  }
  function Gt(t2, o2, n2) {
    return (o2 = function(t3) {
      var o3 = function(t4) {
        if ("object" != Lt(t4) || !t4) return t4;
        var o4 = t4[Symbol.toPrimitive];
        if (void 0 !== o4) {
          var n3 = o4.call(t4, "string");
          if ("object" != Lt(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t4);
      }(t3);
      return "symbol" == Lt(o3) ? o3 : o3 + "";
    }(o2)) in t2 ? Object.defineProperty(t2, o2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[o2] = n2, t2;
  }
  function It(t2) {
    return It = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, It(t2);
  }
  function At(t2, o2) {
    (null == o2 || o2 > t2.length) && (o2 = t2.length);
    for (var n2 = 0, e2 = Array(o2); n2 < o2; n2++) e2[n2] = t2[n2];
    return e2;
  }
  function Dt(t2, o2, n2) {
    return (o2 = function(t3) {
      var o3 = function(t4) {
        if ("object" != It(t4) || !t4) return t4;
        var o4 = t4[Symbol.toPrimitive];
        if (void 0 !== o4) {
          var n3 = o4.call(t4, "string");
          if ("object" != It(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t4);
      }(t3);
      return "symbol" == It(o3) ? o3 : o3 + "";
    }(o2)) in t2 ? Object.defineProperty(t2, o2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[o2] = n2, t2;
  }
  var jt, Mt, Ft = {}, Ht = [J, X, ot, tt], Zt = [X, ot], qt = Dt(Dt(Dt(Dt({}, J, "suggest"), X, "suggest-button"), tt, "suggest-qr"), ot, "suggest-phone"), Rt = Dt(Dt(Dt({}, X, "/button"), tt, "/qr"), ot, "/phone"), Nt = function(t2, o2) {
    delete Ft[t2], o2 && o2.destroy && o2.destroy();
  }, Vt = function(t2, o2) {
    var n2 = t2.src, e2 = t2.view, r2 = t2.parentId, a2 = t2.qrOptions;
    switch (e2) {
      case ot:
        return function(t3, o3, n3) {
          return G({ type: "suggest-phone", src: t3, shouldUseExistedControl: true, parentId: o3 }).then(function(t4) {
            return new Promise(function(o4) {
              var e3 = T().tokenPageOrigin, r3 = l();
              t4.subscribe(function(a3, i2) {
                var s2, l2, d2;
                switch (a3.type) {
                  case p:
                    return a3.cause === Y.SDK && a3.payload && "suggest-phone" === (null === (s2 = a3.payload) || void 0 === s2 ? void 0 : s2.type) && (null === (l2 = a3.payload) || void 0 === l2 ? void 0 : l2.renderUid) === r3 && "function" == typeof n3 && n3();
                  case c:
                    var y2 = a3.payload.height;
                    return y2 && a3.cause === Y.SUGGEST_PHONE && (null === (d2 = t4.setHeight) || void 0 === d2 ? void 0 : d2.call(t4, y2));
                  case f:
                    var h2 = a3.payload, _2 = h2.metrikaId, v2 = h2.encodedBoxes;
                    return a3.cause === Y.SUGGEST_PHONE && Z({ metrikaId: _2, encodedBoxes: v2 });
                  case C:
                    return a3.cause === Y.SUGGEST_PHONE && it(a3.payload);
                  case u:
                    return setTimeout(function() {
                      return t4.destroy();
                    }, m), e3 && i2.source && E({ cause: Y.TOKEN, payload: {}, type: g }, e3, i2.source), it("token_suc\u0441ses"), at(a3.payload), o4(a3.payload);
                }
              }), t4.show({ renderUid: r3 }), t4.send({ type: f, cause: Y.SUGGEST_PHONE });
            });
          });
        }(n2, r2, o2);
      case X:
        return function(t3, o3, n3) {
          return G({ type: "suggest-button", src: t3, shouldUseExistedControl: true, parentId: o3 }).then(function(t4) {
            return new Promise(function(o4) {
              var e3 = T().tokenPageOrigin, r3 = l();
              et(X, t4), t4.subscribe(function(a3, i2) {
                var s2, l2, d2;
                switch (a3.type) {
                  case p:
                    return a3.cause === Y.SDK && a3.payload && "suggest-button" === (null === (s2 = a3.payload) || void 0 === s2 ? void 0 : s2.type) && (null === (l2 = a3.payload) || void 0 === l2 ? void 0 : l2.renderUid) === r3 && "function" == typeof n3 && n3();
                  case c:
                    var y2 = a3.payload.height;
                    return y2 && a3.cause === Y.SUGGEST_BUTTON && (null === (d2 = t4.setHeight) || void 0 === d2 ? void 0 : d2.call(t4, y2));
                  case f:
                    var h2 = a3.payload, _2 = h2.metrikaId, v2 = h2.encodedBoxes;
                    return a3.cause === Y.SUGGEST_BUTTON && Z({ metrikaId: _2, encodedBoxes: v2 });
                  case C:
                    return a3.cause === Y.SUGGEST_BUTTON && it(a3.payload);
                  case u:
                    return setTimeout(function() {
                      return t4.destroy();
                    }, m), e3 && i2.source && E({ cause: Y.TOKEN, payload: {}, type: g }, e3, i2.source), it("token_suc\u0441ses"), at(a3.payload), o4(a3.payload);
                }
              }), t4.show({ renderUid: r3 }), t4.send({ type: f, cause: Y.SUGGEST_BUTTON });
            });
          });
        }(n2, r2, o2);
      case tt:
        return function(t3, o3, n3, e3) {
          return G({ type: "suggest-qr", src: t3, shouldUseExistedControl: true, parentId: o3, qrOptions: n3 }).then(function(t4) {
            return new Promise(function(o4, r3) {
              var a3 = T().tokenPageOrigin, i2 = n3 || {}, s2 = i2.qrType, l2 = i2.invisibleQrType, d2 = i2.oauthParams, p2 = i2.hostname, C2 = i2.sourceId, y2 = $(d2, { hostname: p2, sourceId: C2 }), _2 = function(o5) {
                var r4;
                "invisible" === s2 && (null === (r4 = n3.qrAuthWindow) || void 0 === r4 || r4.close(), delete n3.qrAuthWindow, o5 && clearInterval(o5), e3(tt, t4));
              }, v2 = n3.qrAuthWindow ? setInterval(function() {
                var t5;
                if (null !== (t5 = n3.qrAuthWindow) && void 0 !== t5 && t5.closed) return _2(v2), r3(h);
              }, 500) : null;
              t4.subscribe(function(e4, i3) {
                var d3;
                switch (e4.type) {
                  case "qrLinkReady":
                    var p3 = e4.payload.qrLink;
                    return void ("invisible" === s2 && p3 && ("withEmptyTab" === l2 && n3.qrAuthWindow && (n3.qrAuthWindow.location.href = p3), "withPreparedTab" === l2 && (n3.qrAuthWindow = window.open(p3, "auth"), v2 = n3.qrAuthWindow ? setInterval(function() {
                      var t5;
                      if (null !== (t5 = n3.qrAuthWindow) && void 0 !== t5 && t5.closed) return _2(v2), r3(h);
                    }, 500) : null)));
                  case c:
                    var C3 = e4.payload.height;
                    return C3 && e4.cause === Y.SUGGEST_QR && (null === (d3 = t4.setHeight) || void 0 === d3 ? void 0 : d3.call(t4, C3));
                  case f:
                    var b2 = e4.payload, w2 = b2.metrikaId, x2 = b2.encodedBoxes;
                    return e4.cause === Y.SUGGEST_QR && Z({ metrikaId: w2, encodedBoxes: x2 });
                  case u:
                    return setTimeout(function() {
                      return t4.destroy();
                    }, m), a3 && i3.source && E({ cause: Y.TOKEN, payload: {}, type: g }, a3, i3.source), it("token_suc\u0441ses"), _2(v2), at(e4.payload), o4(e4.payload);
                  case "error":
                    return setTimeout(function() {
                      return t4.destroy();
                    }, m), _2(v2), r3(function(t5) {
                      for (var o5 = 1; o5 < arguments.length; o5++) {
                        var n4 = null != arguments[o5] ? arguments[o5] : {};
                        o5 % 2 ? Ut(Object(n4), true).forEach(function(o6) {
                          Gt(t5, o6, n4[o6]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t5, Object.getOwnPropertyDescriptors(n4)) : Ut(Object(n4)).forEach(function(o6) {
                          Object.defineProperty(t5, o6, Object.getOwnPropertyDescriptor(n4, o6));
                        });
                      }
                      return t5;
                    }({ status: "error", payload: e4.payload }, "invisible" === s2 && { url: y2 }));
                }
              }), t4.show(), t4.send({ type: f, cause: Y.SUGGEST_QR });
            });
          });
        }(n2, r2, a2, Nt);
      default:
        return function(t3) {
          return G({ type: "suggest", src: t3, shouldUseExistedControl: true }).then(function(t4) {
            return new Promise(function(o3, n3) {
              var e3 = T().tokenPageOrigin;
              et(J, t4), t4.subscribe(function(r3, a3) {
                var i2;
                switch (r3.type) {
                  case c:
                    var s2 = r3.payload.height;
                    return s2 && r3.cause === Y.SUGGEST && (null === (i2 = t4.setHeight) || void 0 === i2 ? void 0 : i2.call(t4, s2));
                  case f:
                    var l2 = r3.payload, d2 = l2.metrikaId, p2 = l2.encodedBoxes;
                    return r3.cause === Y.SUGGEST && Z({ metrikaId: d2, encodedBoxes: p2 });
                  case C:
                    return r3.cause === Y.SUGGEST && it(r3.payload);
                  case u:
                    return setTimeout(function() {
                      return t4.destroy();
                    }, m), e3 && a3.source && E({ cause: Y.TOKEN, payload: {}, type: g }, e3, a3.source), it("token_suc\u0441ses"), at(r3.payload), o3(r3.payload);
                  case y:
                    return setTimeout(function() {
                      return t4.destroy();
                    }, m), it({ token_fail: "close_widget" }), V("close_widget"), n3("close_widget");
                  case h:
                    return setTimeout(function() {
                      return t4.destroy();
                    }, m), it({ token_fail: r3.type }), V(r3.type), n3(r3.type);
                }
              }), t4.show(), t4.send({ type: f, cause: Y.SUGGEST });
            });
          });
        }(n2);
    }
  }, zt = function(t2, o2, n2, e2) {
    var r2 = t2.parentId, a2 = t2.buttonOptions, i2 = t2.qrOptions, s2 = t2.view, l2 = t2.preloadingControls;
    switch (s2) {
      case X:
        if ("in_progress" !== (null == o2 ? void 0 : o2.code)) return Nt(s2, l2), n2({ status: "ok", handler: function() {
          return function() {
            return function(t3) {
              var o3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, e3 = T(), r3 = e3.targetOrigin, a3 = e3.tokenPageOrigin, i3 = void 0 === a3 ? "" : a3;
              return new Promise(function(e4) {
                e4({ subscribe: function(o4) {
                  var n4 = [];
                  return n4.push(_(r3, o4)), ["suggest", "suggest-button", "suggest-phone"].includes(t3) && i3 && n4.push(_(i3, o4)), function() {
                    return n4.forEach(function(t4) {
                      return t4();
                    });
                  };
                }, destroy: function() {
                  var t4, o4, n4, e5;
                  n4 = document.getElementById("yaPersonalButtonStyle"), e5 = document.getElementById("yaPersonalButton"), null == n4 || null === (t4 = n4.parentNode) || void 0 === t4 || t4.removeChild(n4), null == e5 || null === (o4 = e5.parentNode) || void 0 === o4 || o4.removeChild(e5);
                }, show: function() {
                  o3 && document.getElementById(o3) && Tt({ targetOrigin: r3, parentId: o3, buttonOptions: n3 });
                } });
              });
            }("suggest-button", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).then(function(t3) {
              return new Promise(function(o3) {
                var n3 = T().tokenPageOrigin;
                t3.subscribe(function(e3, r3) {
                  var a3;
                  switch (e3.type) {
                    case f:
                      var i3 = e3.payload, s3 = i3.metrikaId, l3 = i3.encodedBoxes;
                      return e3.cause === Y.SUGGEST_BUTTON && Z({ metrikaId: s3, encodedBoxes: l3 });
                    case C:
                      return e3.cause === Y.SUGGEST_BUTTON && (null === (a3 = H()) || void 0 === a3 ? void 0 : a3.params({ "\u0421\u0430\u0434\u0436\u0435\u0441\u0442 \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438": e3.payload }));
                    case u:
                      return setTimeout(function() {
                        return t3.destroy();
                      }, m), n3 && r3.source && E({ cause: Y.TOKEN, payload: {}, type: g }, n3, r3.source), it("token_suc\u0441ses"), at(e3.payload), o3(e3.payload);
                  }
                }), t3.show(), it("show_button_stub");
              });
            });
          }(r2, a2);
        } });
      case tt:
        var d2 = i2 || {}, c2 = d2.qrType, p2 = d2.oauthParams, y2 = d2.hostname, h2 = d2.sourceId;
        if ("invisible" === c2 && "in_progress" !== (null == o2 ? void 0 : o2.code)) return Nt(s2, l2), e2({ error: o2, url: $(p2, { hostname: y2, sourceId: h2 }) });
      default:
        return (null == o2 ? void 0 : o2.code) && V(o2.code), e2(o2);
    }
  };
  window.YaAuthSuggest = (jt = "".concat(document.location.protocol, "//").concat(document.location.hostname).concat(document.location.pathname), Mt = v("_ym_uid") || localStorage && localStorage.getItem("_ym_uid") || "", { init: function(t2, o2) {
    var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, e2 = n2.hostname, r2 = void 0 === e2 ? w() : e2, a2 = n2.theme, i2 = void 0 === a2 ? "light" : a2, s2 = n2.view, d2 = void 0 === s2 ? "default" : s2, c2 = n2.parentId, u2 = void 0 === c2 ? "" : c2, p2 = n2.testId, f2 = void 0 === p2 ? "" : p2, C2 = n2.buttonView, g2 = void 0 === C2 ? "main" : C2, y2 = n2.buttonTheme, h2 = void 0 === y2 ? "light" : y2, m2 = n2.buttonSize, E2 = void 0 === m2 ? "m" : m2, _2 = n2.buttonIcon, v2 = void 0 === _2 ? "ya" : _2, b2 = n2.buttonType, x2 = void 0 === b2 ? "" : b2, B2 = n2.buttonBorderRadius, S2 = void 0 === B2 ? 0 : B2, k2 = n2.customBgColor, L2 = void 0 === k2 ? "" : k2, U2 = n2.customBgHoveredColor, I2 = void 0 === U2 ? "" : U2, A2 = n2.customBorderColor, D2 = void 0 === A2 ? "" : A2, j2 = n2.customBorderHoveredColor, M2 = void 0 === j2 ? "" : j2, F2 = n2.customBorderWidth, H2 = void 0 === F2 ? 0 : F2, Z2 = n2.qrType, q2 = void 0 === Z2 ? "default" : Z2, R2 = n2.invisibleQrType, N2 = void 0 === R2 ? "withEmtyTab" : R2, V2 = n2.qrOtherMethod, Y2 = void 0 === V2 ? "default" : V2, K2 = n2.phoneType, Q2 = void 0 === K2 ? "default" : K2, $2 = n2.phoneSuggestMode, J2 = void 0 === $2 ? "default" : $2, nt2 = n2.sourceId, et2 = void 0 === nt2 ? "" : nt2, rt2 = Ht.includes(d2) ? d2 : "default", at2 = "".concat(r2, "/suggest").concat(Rt[rt2] || "", "?").concat(Object.keys(t2).map(function(o3) {
      return "".concat(o3, "=").concat(encodeURIComponent(t2[o3] ? String(t2[o3]) : ""));
    }).join("&"), "&location=").concat(encodeURIComponent(jt), "&theme=").concat(encodeURIComponent(i2), "&version=").concat(encodeURIComponent("1.66.4"), "&widget_kind=").concat(encodeURIComponent(rt2)), it2 = function(t3) {
      return Object.entries(t3).forEach(function(t4) {
        var o3, n3, e3 = (n3 = 2, function(t5) {
          if (Array.isArray(t5)) return t5;
        }(o3 = t4) || function(t5, o4) {
          var n4 = null == t5 ? null : "undefined" != typeof Symbol && t5[Symbol.iterator] || t5["@@iterator"];
          if (null != n4) {
            var e4, r4, a4, i3, s3 = [], l2 = true, d3 = false;
            try {
              if (a4 = (n4 = n4.call(t5)).next, 0 === o4) {
                if (Object(n4) !== n4) return;
                l2 = false;
              } else for (; !(l2 = (e4 = a4.call(n4)).done) && (s3.push(e4.value), s3.length !== o4); l2 = true) ;
            } catch (t6) {
              d3 = true, r4 = t6;
            } finally {
              try {
                if (!l2 && null != n4.return && (i3 = n4.return(), Object(i3) !== i3)) return;
              } finally {
                if (d3) throw r4;
              }
            }
            return s3;
          }
        }(o3, n3) || function(t5, o4) {
          if (t5) {
            if ("string" == typeof t5) return At(t5, o4);
            var n4 = {}.toString.call(t5).slice(8, -1);
            return "Object" === n4 && t5.constructor && (n4 = t5.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(t5) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? At(t5, o4) : void 0;
          }
        }(o3, n3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), r3 = e3[0], a3 = e3[1];
        at2 += "&".concat(r3, "=").concat(encodeURIComponent(String(a3 || "")));
      });
    };
    if (it2({ ym_uid: Mt, source_id: et2, uuid: l() }), f2 && it2(Dt({}, "test-id", f2)), Zt.includes(rt2) && it2({ button_view: g2, button_theme: h2, button_size: E2, button_type: x2, button_border_radius: S2, button_icon: v2, custom_bg: L2, custom_bg_hovered: I2, custom_border: D2, custom_border_hovered: M2, custom_border_width: H2 }), rt2 === tt && it2({ qr_other_method: Y2, qr_type: q2, invisible_qr_type: N2 }), rt2 === ot && it2({ phone_type: Q2, phone_suggest_mode: J2 }), Ft[rt2]) return new Promise(function(t3, o3) {
      return zt({ view: rt2 }, { code: "in_progress" }, t3, o3);
    });
    var st2, lt2 = r2, dt2 = { oauthParams: t2, buttonView: g2, buttonTheme: h2, buttonSize: E2, buttonBorderRadius: S2, buttonIcon: v2, buttonType: x2, sourceId: et2, customBgColor: L2, customBgHoveredColor: I2, customBorderColor: D2, customBorderHoveredColor: M2, customBorderWidth: H2 }, ct2 = { qrType: q2, invisibleQrType: N2, qrAuthWindow: null, oauthParams: t2, hostname: r2, sourceId: et2 };
    rt2 === tt && "invisible" === q2 && "withEmptyTab" === N2 && (ct2.qrAuthWindow = window.open("https://yastatic.net/s3/passport-static/core/html/default-loading-page.html", "auth")), st2 = { targetOrigin: lt2, tokenPageOrigin: o2, fields: [], theme: i2 }, O = P(P({}, O), st2), T(), function(t3) {
      var o3 = t3 && document.getElementById(t3);
      o3 && (o3.innerHTML = "");
    }(u2);
    var ut2 = function(t3, o3, n3) {
      var e3 = null;
      switch (t3) {
        case X:
        case ot:
          e3 = function(t4) {
            var o4, n4 = t4.parentId, e4 = void 0 === n4 ? "" : n4, r3 = t4.buttonOptions, a3 = void 0 === r3 ? {} : r3, i3 = t4.view, s3 = void 0 === i3 ? "" : i3;
            return { show: function() {
              var t5 = _t((null == a3 ? void 0 : a3.buttonIcon) || ""), n5 = mt((null == a3 ? void 0 : a3.buttonView) || ""), r4 = vt(n5), i4 = { parentId: e4, logoType: t5, height: 56, showIdLogo: true };
              s3 === ot ? o4 = St(xt(xt({}, i4), {}, { borderRadius: Math.max(20, Number((null == a3 ? void 0 : a3.buttonBorderRadius) || 0)) })) : s3 === X && (o4 = St(xt(xt({}, i4), {}, { borderRadius: Number((null == a3 ? void 0 : a3.buttonBorderRadius) || 0), height: pt[(null == a3 ? void 0 : a3.buttonSize) || "m"], showIdLogo: !r4 })));
            }, destroy: function() {
              o4 && (o4.classList.add("yaPreloadingSuggestBlock_hiding"), o4.style.pointerEvents = "none", setTimeout(function() {
                return requestAnimationFrame(function() {
                  var t5;
                  return null === (t5 = o4) || void 0 === t5 ? void 0 : t5.remove();
                });
              }, 650));
            } };
          }({ parentId: o3, buttonOptions: n3, view: t3 });
      }
      return e3 && e3.show(), e3;
    }(rt2, u2, dt2), ft2 = { src: at2, parentId: u2, buttonOptions: dt2, qrOptions: ct2, view: rt2, preloadingControls: ut2 };
    return Ft[rt2] = new Promise(function(t3, o3) {
      var n3, e3;
      (n3 = { envCheck: W, apiCheck: function() {
        return function(t4) {
          var o4 = t4.type, n4 = t4.src, e4 = t4.parentId, r3 = t4.qrOptions;
          return new Promise(function(t5, a3) {
            return G({ type: o4, src: n4, shouldUseExistedControl: !z.includes(o4), parentId: e4, qrOptions: r3 }).then(function(o5) {
              setTimeout(function() {
                return a3({ status: "error", code: "not_available" });
              }, 5e3), o5.send({ cause: "sdk", type: "ping" }).then(function(n5) {
                var e5, r4 = n5.payload;
                "loaded" === n5.type && (void 0 === r4 ? t5(o5) : a3({ status: "error", code: null === (e5 = r4.error) || void 0 === e5 ? void 0 : e5.code }));
              });
            }).catch(function(t6) {
              return a3({ status: "error", code: t6.message });
            });
          });
        }({ type: qt[rt2], src: at2, parentId: u2, qrOptions: ct2 });
      } }, e3 = n3.apiCheck, (0, n3.envCheck)().then(function(t4) {
        var o4 = t4.status, n4 = t4.code;
        if ("error" === o4) throw new Error(n4);
        return e3();
      }).then(function(t4) {
        return { status: "ok", elem: t4.elem, send: t4.send, subscribe: t4.subscribe, show: t4.show, destroy: t4.destroy };
      })).then(function(n4) {
        return "ok" === n4.status ? function(t4, o4) {
          var n5 = t4.src, e4 = t4.parentId, r3 = t4.view, a3 = t4.preloadingControls, i3 = t4.qrOptions;
          return o4({ status: "ok", handler: function() {
            return Vt({ src: n5, parentId: e4, view: r3, qrOptions: i3 }, function() {
              return Nt(r3, a3);
            });
          } });
        }(ft2, t3) : zt(ft2, n4, t3, o3);
      }, function(n4) {
        return zt(ft2, n4, t3, o3);
      });
    }), Ft[rt2];
  }, getOauthUrl: $, openOauthPopup: function(t2) {
    var o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = (screen.width - 640) / 2, e2 = (screen.height - 720) / 2, r2 = $(t2, o2);
    return window.open(r2, "oauth", "left=".concat(n2, ", top=").concat(e2, ", width=").concat(640, ", height=").concat(720, ", scrollbars=no"));
  }, closeWidget: function() {
    var t2 = nt[J];
    t2 && t2.send({ type: y, cause: Y.SUGGEST });
  }, _getOauthToken: function() {
    return localStorage.getItem(rt);
  } });
}();
