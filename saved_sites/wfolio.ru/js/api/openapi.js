var IS_CLIENT_SIDE = "undefined" != typeof window, IS_ANDROID_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.AndroidBridge), IS_IOS_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.VKWebAppClose), IS_WEB = IS_CLIENT_SIDE && !IS_ANDROID_WEBVIEW && !IS_IOS_WEBVIEW, androidBridge = IS_CLIENT_SIDE ? window.AndroidBridge : void 0, iosBridge = IS_IOS_WEBVIEW ? window.webkit.messageHandlers : void 0;
function _bridgeSend(e2, t) {
  androidBridge && androidBridge[e2] ? androidBridge[e2](JSON.stringify(t)) : iosBridge && iosBridge[e2] && "function" == typeof iosBridge[e2].postMessage && iosBridge[e2].postMessage(t);
}
function _bridgeSupports(e2) {
  return IS_ANDROID_WEBVIEW ? androidBridge && "function" == typeof androidBridge[e2] : !!IS_IOS_WEBVIEW && (iosBridge && iosBridge[e2] && "function" == typeof iosBridge[e2].postMessage);
}
var IS_BRIDGE_AVAILABLE = !IS_WEB && _bridgeSupports("VKWebAppConversionHit");
if (function(e2) {
  if (!e2.fastXDM) {
    var t = {}, o = {}, i = [], n = {};
    e2.fastXDM = { _id: 0, helperUrl: "https://vk.com/js/api/xdmHelper.js", Server: function(o2, i2, n2) {
      this.methods = o2 || {}, this.filter = i2, this.options = n2 || {}, this.id = e2.fastXDM._id++, this.key = function() {
        for (var e3 = "", t2 = 0; t2 < 5; t2++) e3 += Math.ceil(15 * Math.random()).toString(16);
        return e3;
      }(), this.frameName = "fXD" + this.key, this.server = true, this.methods["%init%"] = this.methods.__fxdm_i = function() {
        d(function(t2) {
          for (var o3 in this.methods) if (this.methods[o3] instanceof e2.fastXDM.Server) {
            var i3 = this.methods[o3];
            "p" === t2.protocol && t2.send(this, t2.json.stringify(["%proxy%", [o3, i3.key]])), this.methods[o3] = function() {
              this.callMethod.apply(this, arguments);
            }.bind(i3);
          }
        }, this), e2.fastXDM.run(this.id), this.methods.onInit && this.methods.onInit();
      }, t[this.key] = [p, this];
    }, Client: function(i2, n2) {
      if (this.methods = i2 || {}, this.options = n2 || {}, this.id = e2.fastXDM._id++, this.client = true, e2.fastXDM.run(this.id), 0 !== window.name.indexOf("fXD")) throw Error("Wrong window.name property.");
      this.key = window.name.substring(3, 8), this.caller = window.parent, o[this.key] || (o[this.key] = {}), this.methods["%proxy%"] = function(e3, t2) {
        e3 && t2 && this.caller.frames["fXD" + t2] && (o[this.key][e3] = { key: t2, frame: { contentWindow: this.caller.frames["fXD" + t2] } });
      }.bind(this), t[this.key] = [p, this], e2.fastXDM.on("helper", function() {
        e2.fastXDM.onClientStart(this);
      }, this), d(function(e3) {
        e3.send(this, e3.json.stringify(["%init%"]));
        var t2 = this.methods;
        setTimeout(function() {
          t2.onInit && t2.onInit();
        }, 0);
      }, this);
    }, onMessage: function(e3) {
      var o2 = e3.data;
      if (!o2) return false;
      if ("string" != typeof o2 && !(o2 instanceof String)) return false;
      var i2 = o2.substr(0, 5);
      if (t[i2]) {
        var n2 = t[i2][1];
        !n2 || n2.filter && !n2.filter(e3.origin) || t[i2][0](o2.substr(6), n2, e3.origin);
      }
    }, setJSON: function(e3) {
      n.json = e3;
    }, getJSON: function(e3) {
      if (!e3) return n.json;
      d(function(t2) {
        e3(t2.json);
      });
    }, getProxyToServer: function(e3, t2) {
      return o[e3] && o[e3][t2];
    }, setEnv: function(e3) {
      for (var t2 in e3) n[t2] = e3[t2];
      l();
    }, _q: {}, on: function(e3, t2, o2) {
      this._q[e3] || (this._q[e3] = []), -1 == this._q[e3] ? t2.apply(o2) : this._q[e3].push([t2, o2]);
    }, run: function(e3) {
      for (var t2 = (this._q[e3] || []).length, o2 = 0; o2 < t2; o2++) this._q[e3][o2][0].apply(this._q[e3][o2][1]);
      this._q[e3] = -1;
    }, waitFor: r }, e2.fastXDM.Server.prototype.start = function(t2, o2) {
      if (t2.contentWindow) this.caller = t2.contentWindow, this.frame = t2, e2.fastXDM.on("helper", function() {
        e2.fastXDM.onServerStart(this);
      }, this);
      else {
        var i2 = this;
        (o2 = o2 || 0) < 50 && setTimeout(function() {
          i2.start.apply(i2, [t2, o2 + 1]);
        }, 100);
      }
    }, e2.fastXDM.Server.prototype.destroy = function() {
      delete t[this.key];
    }, e2.fastXDM.Server.prototype.append = function(e3, t2, o2) {
      var i2 = document.createElement("DIV");
      i2.innerHTML = '<iframe name="' + this.frameName + '" ' + (o2 || "") + "></iframe>";
      var n2 = i2.firstChild, r2 = this;
      return setTimeout(function() {
        n2.frameBorder = "0", t2 && u(n2, t2), e3.insertBefore(n2, e3.firstChild), r2.start(n2);
      }, 0), n2;
    }, e2.fastXDM.Client.prototype.callMethod = e2.fastXDM.Server.prototype.callMethod = function() {
      for (var t2 = Array.prototype.slice.call(arguments), o2 = t2.shift(), i2 = 0, n2 = t2.length; i2 < n2; i2++) if ("function" == typeof t2[i2]) {
        this.funcsCount = (this.funcsCount || 0) + 1;
        var s2 = t2[i2], l2 = "_func" + this.funcsCount;
        this.methods[l2] = function() {
          s2.apply(this, arguments), delete this.methods[l2];
        }, t2[i2] = { _func: this.funcsCount };
      } else this.options.safe && (t2[i2] = a(t2[i2], false));
      r(this, "caller", function() {
        e2.fastXDM.on(this.id, function() {
          d(function(i3) {
            var n3 = this, r2 = e2.fastXDM.getProxyToServer(this.key, o2);
            r2 && (n3 = r2, o2 = t2.shift()), i3.send(n3, i3.json.stringify([o2, t2]));
          }, this);
        }, this);
      }, this);
    }, e2.fastXDM.Client.prototype.isUnsafeMethod = e2.fastXDM.Server.prototype.isUnsafeMethod = function(e3) {
      return ~["%proxy%", "%init%"].indexOf(e3) || this.options.unsafeMethods && ~this.options.unsafeMethods.indexOf(e3);
    }, e2.JSON && "object" == typeof e2.JSON && e2.JSON.parse && e2.JSON.stringify && '{"a":[1,2,3]}' === e2.JSON.stringify({ a: [1, 2, 3] }).replace(/ /g, "") ? n.json = { parse: e2.JSON.parse, stringify: e2.JSON.stringify } : e2.fastXDM._needJSON = true, e2.postMessage ? (n.protocol = "p", n.send = function(e3, t2) {
      var o2 = e3.frame ? e3.frame.contentWindow : e3.caller;
      if (o2) try {
        o2.postMessage(e3.key + ":" + t2, "*");
      } catch (i2) {
        window.postMessage.call(o2, e3.key + ":" + t2, "*");
      }
    }, e2.addEventListener ? e2.addEventListener("message", e2.fastXDM.onMessage, false) : e2.attachEvent("onmessage", e2.fastXDM.onMessage), e2.fastXDM._needJSON ? (e2.fastXDM._onlyJSON = true, s()) : l()) : s();
  }
  function r(e3, t2, o2, i2, n2) {
    e3[t2] ? o2.apply(i2) : (n2 = n2 || 0) < 1e3 && setTimeout(function() {
      r(e3, t2, o2, i2, n2 + 1);
    }, 0);
  }
  function s(t2) {
    setTimeout(function() {
      var o2 = document.createElement("script");
      o2.type = "text/javascript", o2.src = t2 || e2.fastXDM.helperUrl, r(document, "body", function() {
        document.getElementsByTagName("HEAD")[0].appendChild(o2);
      });
    }, 0);
  }
  function a(e3, t2) {
    var o2;
    switch (typeof e3) {
      case "string":
        o2 = t2 ? e3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : e3.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&");
        break;
      case "object":
        if ("[object Array]" === Object.prototype.toString.apply(e3)) {
          o2 = [];
          for (var i2 = 0, n2 = e3.length; i2 < n2; i2++) o2[i2] = a(e3[i2], t2);
        } else for (var r2 in o2 = {}, e3) Object.hasOwnProperty.call(e3, r2) && (o2[r2] = a(e3[r2], t2));
        break;
      default:
        o2 = e3;
    }
    return o2;
  }
  function d(e3, t2) {
    n.loaded ? e3.apply(t2, [n]) : i.push([t2, e3]);
  }
  function l() {
    n.loaded = true;
    for (var e3 = 0, t2 = i.length; e3 < t2; e3++) i[e3][1].apply(i[e3][0], [n]);
  }
  function p(t2, o2, i2) {
    d(function(n2) {
      var r2 = n2.json.parse(t2), s2 = r2[0];
      if (s2) {
        if ("p" === n2.protocol && o2.options.sameOrigin && i2 !== e2.origin && !o2.isUnsafeMethod(s2)) throw Error("Insecure method call.");
        r2[1] || (r2[1] = []);
        for (var d2 = 0, l2 = r2[1].length; d2 < l2; d2++) if (r2[1][d2] && r2[1][d2]._func) {
          var p2 = r2[1][d2]._func;
          r2[1][d2] = function() {
            var e3 = Array.prototype.slice.call(arguments);
            e3.unshift("_func" + p2), o2.callMethod.apply(o2, e3);
          };
        } else o2.options.safe && (r2[1][d2] = a(r2[1][d2], true));
        setTimeout(function() {
          if (!o2.methods[s2]) throw Error("fastXDM: Method " + s2 + " is undefined");
          o2.methods[s2].apply(o2, r2[1]);
        }, 0);
      }
    });
  }
  function u(e3, t2) {
    for (var o2 in t2) e3[o2] && "object" == typeof e3[o2] ? u(e3[o2], t2[o2]) : e3[o2] = t2[o2];
  }
}(window), window.VK || (window.VK = {}), VK.MD5 || (VK.MD5 = function(e2) {
  var t, o = function(e3, t2) {
    var o2 = (65535 & e3) + (65535 & t2);
    return (e3 >> 16) + (t2 >> 16) + (o2 >> 16) << 16 | 65535 & o2;
  }, i = function(e3, t2, i2, n2, r2, s2) {
    return o(function(e4, t3) {
      return e4 << t3 | e4 >>> 32 - t3;
    }(o(o(t2, e3), o(n2, s2)), r2), i2);
  }, n = function(e3, t2, o2, n2, r2, s2, a2) {
    return i(t2 & o2 | ~t2 & n2, e3, t2, r2, s2, a2);
  }, r = function(e3, t2, o2, n2, r2, s2, a2) {
    return i(t2 & n2 | o2 & ~n2, e3, t2, r2, s2, a2);
  }, s = function(e3, t2, o2, n2, r2, s2, a2) {
    return i(t2 ^ o2 ^ n2, e3, t2, r2, s2, a2);
  }, a = function(e3, t2, o2, n2, r2, s2, a2) {
    return i(o2 ^ (t2 | ~n2), e3, t2, r2, s2, a2);
  };
  return function(e3) {
    for (var t2, o2 = "0123456789abcdef", i2 = "", n2 = 0, r2 = e3.length; n2 < r2; n2++) t2 = e3.charCodeAt(n2), i2 += o2.charAt(t2 >>> 4 & 15) + o2.charAt(15 & t2);
    return i2;
  }(function(e3) {
    for (var t2 = "", o2 = 0, i2 = 32 * e3.length; o2 < i2; o2 += 8) t2 += String.fromCharCode(e3[o2 >> 5] >>> o2 % 32 & 255);
    return t2;
  }(function(e3, t2) {
    var i2, d, l, p, u = 1732584193, c = -271733879, h = -1732584194, f = 271733878;
    e3[t2 >> 5] |= 128 << t2 % 32, e3[14 + (t2 + 64 >>> 9 << 4)] = t2;
    for (var g = 0, m = e3.length; g < m; g += 16) i2 = u, d = c, l = h, p = f, u = n(u, c, h, f, e3[g + 0], 7, -680876936), f = n(f, u, c, h, e3[g + 1], 12, -389564586), h = n(h, f, u, c, e3[g + 2], 17, 606105819), c = n(c, h, f, u, e3[g + 3], 22, -1044525330), u = n(u, c, h, f, e3[g + 4], 7, -176418897), f = n(f, u, c, h, e3[g + 5], 12, 1200080426), h = n(h, f, u, c, e3[g + 6], 17, -1473231341), c = n(c, h, f, u, e3[g + 7], 22, -45705983), u = n(u, c, h, f, e3[g + 8], 7, 1770035416), f = n(f, u, c, h, e3[g + 9], 12, -1958414417), h = n(h, f, u, c, e3[g + 10], 17, -42063), c = n(c, h, f, u, e3[g + 11], 22, -1990404162), u = n(u, c, h, f, e3[g + 12], 7, 1804603682), f = n(f, u, c, h, e3[g + 13], 12, -40341101), h = n(h, f, u, c, e3[g + 14], 17, -1502002290), c = n(c, h, f, u, e3[g + 15], 22, 1236535329), u = r(u, c, h, f, e3[g + 1], 5, -165796510), f = r(f, u, c, h, e3[g + 6], 9, -1069501632), h = r(h, f, u, c, e3[g + 11], 14, 643717713), c = r(c, h, f, u, e3[g + 0], 20, -373897302), u = r(u, c, h, f, e3[g + 5], 5, -701558691), f = r(f, u, c, h, e3[g + 10], 9, 38016083), h = r(h, f, u, c, e3[g + 15], 14, -660478335), c = r(c, h, f, u, e3[g + 4], 20, -405537848), u = r(u, c, h, f, e3[g + 9], 5, 568446438), f = r(f, u, c, h, e3[g + 14], 9, -1019803690), h = r(h, f, u, c, e3[g + 3], 14, -187363961), c = r(c, h, f, u, e3[g + 8], 20, 1163531501), u = r(u, c, h, f, e3[g + 13], 5, -1444681467), f = r(f, u, c, h, e3[g + 2], 9, -51403784), h = r(h, f, u, c, e3[g + 7], 14, 1735328473), c = r(c, h, f, u, e3[g + 12], 20, -1926607734), u = s(u, c, h, f, e3[g + 5], 4, -378558), f = s(f, u, c, h, e3[g + 8], 11, -2022574463), h = s(h, f, u, c, e3[g + 11], 16, 1839030562), c = s(c, h, f, u, e3[g + 14], 23, -35309556), u = s(u, c, h, f, e3[g + 1], 4, -1530992060), f = s(f, u, c, h, e3[g + 4], 11, 1272893353), h = s(h, f, u, c, e3[g + 7], 16, -155497632), c = s(c, h, f, u, e3[g + 10], 23, -1094730640), u = s(u, c, h, f, e3[g + 13], 4, 681279174), f = s(f, u, c, h, e3[g + 0], 11, -358537222), h = s(h, f, u, c, e3[g + 3], 16, -722521979), c = s(c, h, f, u, e3[g + 6], 23, 76029189), u = s(u, c, h, f, e3[g + 9], 4, -640364487), f = s(f, u, c, h, e3[g + 12], 11, -421815835), h = s(h, f, u, c, e3[g + 15], 16, 530742520), c = s(c, h, f, u, e3[g + 2], 23, -995338651), u = a(u, c, h, f, e3[g + 0], 6, -198630844), f = a(f, u, c, h, e3[g + 7], 10, 1126891415), h = a(h, f, u, c, e3[g + 14], 15, -1416354905), c = a(c, h, f, u, e3[g + 5], 21, -57434055), u = a(u, c, h, f, e3[g + 12], 6, 1700485571), f = a(f, u, c, h, e3[g + 3], 10, -1894986606), h = a(h, f, u, c, e3[g + 10], 15, -1051523), c = a(c, h, f, u, e3[g + 1], 21, -2054922799), u = a(u, c, h, f, e3[g + 8], 6, 1873313359), f = a(f, u, c, h, e3[g + 15], 10, -30611744), h = a(h, f, u, c, e3[g + 6], 15, -1560198380), c = a(c, h, f, u, e3[g + 13], 21, 1309151649), u = a(u, c, h, f, e3[g + 4], 6, -145523070), f = a(f, u, c, h, e3[g + 11], 10, -1120210379), h = a(h, f, u, c, e3[g + 2], 15, 718787259), c = a(c, h, f, u, e3[g + 9], 21, -343485551), u = o(u, i2), c = o(c, d), h = o(h, l), f = o(f, p);
    return [u, c, h, f];
  }(function(e3) {
    var t2, o2, i2 = Array(e3.length >> 2);
    for (t2 = 0, o2 = i2.length; t2 < o2; t2++) i2[t2] = 0;
    for (t2 = 0, o2 = 8 * e3.length; t2 < o2; t2 += 8) i2[t2 >> 5] |= (255 & e3.charCodeAt(t2 / 8)) << t2 % 32;
    return i2;
  }(t = function(e3) {
    for (var t2, o2, i2 = "", n2 = -1, r2 = e3.length; ++n2 < r2; ) t2 = e3.charCodeAt(n2), o2 = n2 + 1 < r2 ? e3.charCodeAt(n2 + 1) : 0, 55296 <= t2 && t2 <= 56319 && 56320 <= o2 && o2 <= 57343 && (t2 = 65536 + ((1023 & t2) << 10) + (1023 & o2), n2++), t2 <= 127 ? i2 += String.fromCharCode(t2) : t2 <= 2047 ? i2 += String.fromCharCode(192 | t2 >>> 6 & 31, 128 | 63 & t2) : t2 <= 65535 ? i2 += String.fromCharCode(224 | t2 >>> 12 & 15, 128 | t2 >>> 6 & 63, 128 | 63 & t2) : t2 <= 2097151 && (i2 += String.fromCharCode(240 | t2 >>> 18 & 7, 128 | t2 >>> 12 & 63, 128 | t2 >>> 6 & 63, 128 | 63 & t2));
    return i2;
  }(e2)), 8 * t.length)));
}), VK.extend = function(e2, t, o) {
  for (var i in t) (o || void 0 === e2[i]) && (e2[i] = t[i]);
  return e2;
}, VK.extend(VK, { _domain: { base: "https://vk.com", login: "https://login.vk.com", main: "https://oauth.vk.com", api: "https://api.vk.com" } }, true), VK.xdConnectionCallbacks) setTimeout(function() {
  for (var e2; e2 = VK.xdConnectionCallbacks.pop(); ) e2();
}, 0), VK.Widgets && !VK.Widgets._constructor && (VK.Widgets = false);
else {
  function obj2qs(e2) {
    if (!e2) return "";
    var t = [];
    for (var o in e2) e2.hasOwnProperty(o) && t.push(encodeURIComponent(o) + "=" + encodeURIComponent(e2[o].toString() || ""));
    return t.length ? "?" + t.join("&") : "";
  }
  VK.extend(VK, { version: 1, _apiId: null, _session: null, _userStatus: "unknown", _path: { login: "authorize", proxy: "fxdm_oauth_proxy.html" }, _rootId: "vk_api_transport", _nameTransportPath: "", xdReady: false, access: { FRIENDS: 2, PHOTOS: 4, AUDIO: 8, VIDEO: 16, MATCHES: 32, QUESTIONS: 64, WIKI: 128 } }), VK.init = function(e2) {
    var t, o;
    if (VK._apiId = null, !e2.apiId) throw Error("VK.init() called without an apiId");
    if (VK._apiId = e2.apiId, e2.onlyWidgets) return true;
    e2.nameTransportPath && "" !== e2.nameTransportPath && (VK._nameTransportPath = e2.nameTransportPath), (o = document.getElementById(VK._rootId)) || ((o = document.createElement("div")).id = VK._rootId, (t = document.body).insertBefore(o, t.childNodes[0])), o.style.position = "absolute", o.style.top = "-10000px";
    var i = VK.Cookie.load();
    i && (VK.Auth._loadState = "loaded", VK.Auth.setSession(i, i ? "connected" : "unknown"));
  }, VK.Cookie || (VK.Cookie = { _domain: null, load: function() {
    var e2, t = document.cookie.match("\\bvk_app_" + VK._apiId + "=([^;]*)\\b");
    if (t) {
      if ("oauth" != (e2 = this.decode(t[1])).secret) return false;
      e2.expire = parseInt(e2.expire, 10), VK.Cookie._domain = "." + window.location.hostname;
    }
    return e2;
  }, setRaw: function(e2, t, o, i) {
    var n;
    n = "vk_app_" + VK._apiId + "=" + e2;
    var r = i ? (/* @__PURE__ */ new Date()).getTime() + 1e3 * i : 1e3 * t;
    n += e2 && 0 === t ? "" : "; expires=" + new Date(r).toGMTString(), n += "; path=/", n += o ? "; domain=." + o : "", document.cookie = n, this._domain = o;
  }, set: function(e2, t) {
    e2 ? this.setRaw(this.encode(e2), e2.expire, window.location.hostname, (t || {}).time) : this.clear();
  }, clear: function() {
    this.setRaw("", 0, this._domain, 0);
  }, encode: function(e2) {
    var t, o = [];
    for (t in e2) "user" != t && o.push(encodeURIComponent(t) + "=" + encodeURIComponent(e2[t]));
    return o.sort(), o.join("&");
  }, decode: function(e2) {
    var t, o, i = {}, n = e2.split("&");
    for (t = 0; t < n.length; t++) (o = n[t].split("=", 2)) && o[0] && (i[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
    return i;
  } }), VK.Api || (VK.Api = { _headId: null, _callbacks: {}, ie6_7: function() {
    return VK.Api.ieTested || (VK.Api.isIE6_7 = navigator.userAgent.match(/MSIE [6|7]/i), VK.Api.ieTested = true), VK.Api.isIE6_7;
  }, supportCORS: function() {
    return "withCredentials" in new XMLHttpRequest() || "undefined" != typeof XDomainRequest;
  }, makeRequest: function(e2, t) {
    var o = VK.Api.createRequest("GET", e2);
    return !!o && (o.onload = function() {
      var e3 = o.responseText;
      if (200 === o.status) t(e3);
      else try {
        console.error("Open api access error", o.response);
      } catch (e4) {
      }
    }, o.onerror = function() {
      try {
        console.error("Open api access error");
      } catch (e3) {
      }
    }, o.send(), true);
  }, createRequest: function(e2, t) {
    var o = new XMLHttpRequest();
    return "withCredentials" in o ? (o.open(e2, t, true), o.withCredentials = true) : "undefined" != typeof XDomainRequest ? ((o = new XDomainRequest()).open(e2, t), o.withCredentials = true) : o = null, o;
  }, attachScript: function(e2) {
    VK.Api._headId || (VK.Api._headId = document.getElementsByTagName("head")[0]);
    var t = document.createElement("script");
    t.type = "text/javascript", t.setAttribute("encoding", "UTF-8"), t.src = e2, VK.Api._headId.appendChild(t);
  }, checkMethod: function(e2, t, o, i) {
    var n = e2.toLowerCase();
    if ("wall.post" === n) {
      var r, s, a, d, l = /(^https?:\/\/)|(^(poll|album|photo|video|doc|audio|page|note)-?\d+_-?\d+)$/, p = [];
      t.v || (t.v = "5.95"), t.attachments = t.attachments || t.attachment || [], "string" == typeof t.attachments && (t.attachments = t.attachments.split(","));
      for (var u = 0; u < t.attachments.length; u++) {
        var c = t.attachments[u].trim();
        l.test(c) && p.push(c);
      }
      return t.attachments = p.length ? p : "", r = "_" + Math.random().toString(16).substr(2), s = { act: "wall_post_box", method: n, widget: 4, aid: parseInt(VK._apiId, 10), text: t.message || "", method_access: r }, (s = VK.extend(s, t)).owner_id = parseInt(t.owner_id || 0, 10), s.publish_date = t.publish_date || "", a = VK._domain.base + "/al_apps.php", a += obj2qs(s), VK.UI.popup({ url: a, width: 560, height: 304 }), d = setInterval(function() {
        VK.UI.active.closed && (clearInterval(d), t.method_access = r, VK.Api.call(e2, t, o, i));
      }, 500), false;
    }
    return "messages.allowmessagesfromgroup" != n || (r = "_" + Math.random().toString(16).substr(2), a = VK._domain.base + "/widget_allow_messages_from_community.php?act=allow_box&group_id=" + parseInt(t.group_id, 10) + "&app_id=" + parseInt(VK._apiId, 10) + "&method_access=" + r, VK.UI.popup({ url: a, width: 560, height: 304 }), d = setInterval(function() {
      VK.UI.active.closed && (clearInterval(d), t.method_access = r, VK.Api.call(e2, t, o, i));
    }, 500), false);
  }, call: function(e2, t, o, i) {
    var n, r, s = t || {};
    if ("object" != typeof s || "function" != typeof o) return false;
    if (t.method_access || t.method_force || VK.Api.checkMethod(e2, t, o, i)) {
      if (i || (i = 0), "loaded" != VK.Auth._loadState) {
        var a = function(i2) {
          i2 && i2.session && (VK.Observer.unsubscribe("auth.loginStatus", a), VK.Api.call(e2, t, o));
        };
        return VK.Observer.subscribe("auth.loginStatus", a), void VK.Auth.getLoginStatus();
      }
      if (VK.Api.queryLength(s) < 1500 && !VK.Api.ie6_7()) {
        for (var d = false, l = parseInt(1e7 * Math.random(), 10); VK.Api._callbacks[l]; ) l = parseInt(1e7 * Math.random(), 10);
        s.callback = "VK.Api._callbacks[" + l + "]";
      } else d = true;
      VK._session && VK._session.sid && (s.access_token = VK._session.sid), n = VK.Cookie.encode(s), r = function(n2) {
        if (!n2.error || 3 != n2.error.error_code && 4 != n2.error.error_code && 5 != n2.error.error_code) o(n2);
        else {
          if (i > 3) return false;
          var r2 = function(n3) {
            VK.Observer.unsubscribe("auth.sessionChange", r2), delete t.access_token, n3.session && VK.Api.call(e2, t, o, i + 1);
          };
          VK.Observer.subscribe("auth.sessionChange", r2), VK.Auth.getLoginStatus();
        }
        d || delete VK.Api._callbacks[l];
      }, d ? VK.xdReady ? VK.XDM.remote.callMethod("apiCall", e2, n, r) : (VK.Observer.subscribe("xdm.init", function() {
        VK.XDM.remote.callMethod("apiCall", e2, n, r);
      }), VK.XDM.init()) : (VK.Api._callbacks[l] = r, VK.Api.attachScript(VK._domain.api + "/method/" + e2 + "?" + n));
    }
  }, queryLength: function(e2) {
    var t, o = 100;
    for (t in e2) o += t.length + encodeURIComponent(e2[t]).length + 1;
    return o;
  } }, VK.api = function(e2, t, o) {
    VK.Api.call(e2, t, o);
  }), VK.Auth || (VK.Auth = { popup: null, lsCb: {}, setSession: function(e2, t, o, i) {
    var n = !VK._session && e2, r = VK._session && !e2, s = VK._session && e2 && VK._session.mid != e2.mid, a = n || r || VK._session && e2 && VK._session.sid != e2.sid, d = t != VK._userStatus, l = { session: e2, status: t, settings: o };
    return VK._session = e2, VK._userStatus = t, VK.Cookie.set(e2, i), (a || d || s) && setTimeout(function() {
      d && VK.Observer.publish("auth.statusChange", l), (r || s) && VK.Observer.publish("auth.logout", l), (n || s) && VK.Observer.publish("auth.login", l), a && VK.Observer.publish("auth.sessionChange", l);
    }, 0), l;
  }, login: function(e2, t) {
    if (!VK._apiId) return false;
    var o = VK._domain.main + "/" + VK._path.login + "?client_id=" + VK._apiId + "&display=popup&redirect_uri=close.html&response_type=token&openapi=1";
    t && parseInt(t, 10) > 0 && (o += "&scope=" + t), VK.Observer.unsubscribe("auth.onLogin"), VK.Observer.subscribe("auth.onLogin", e2), VK.UI.popup({ width: 665, height: 370, url: o });
    var i = function() {
      VK.Auth.getLoginStatus(function(e3) {
        VK.Observer.publish("auth.onLogin", e3), VK.Observer.unsubscribe("auth.onLogin");
      }, true);
    };
    VK.UI.popupOpened = true;
    var n = function() {
      if (!VK.UI.popupOpened) return false;
      try {
        if (!VK.UI.active.top || VK.UI.active.closed) return VK.UI.popupOpened = false, i(), true;
      } catch (e3) {
        return VK.UI.popupOpened = false, i(), true;
      }
      setTimeout(n, 100);
    };
    setTimeout(n, 100);
  }, logout: function(e2) {
    VK.Auth.revokeGrants(e2);
  }, revokeGrants: function(e2) {
    var t = function(o2) {
      VK.Observer.unsubscribe("auth.statusChange", t), e2 && e2(o2);
    };
    if (VK.Observer.subscribe("auth.statusChange", t), VK._session && VK._session.sid) {
      var o = VK._domain.login + "?act=openapi&oauth=1&aid=" + parseInt(VK._apiId, 10) + "&location=" + encodeURIComponent(window.location.hostname) + "&do_logout=1&token=" + VK._session.sid;
      if (VK.Api.supportCORS()) {
        VK.Api.makeRequest(o + "&new=1", function() {
          VK.Auth.setSession(null, "unknown");
        });
      } else VK.Api.attachScript(o);
    }
    VK.Cookie.clear();
  }, getSession: function() {
    return VK._session;
  }, getLoginStatus: function(cb, force) {
    if (VK._apiId) {
      if (cb) {
        if (!force && "loaded" == VK.Auth._loadState) return void cb({ status: VK._userStatus, session: VK._session });
        VK.Observer.subscribe("auth.loginStatus", cb);
      }
      if (force || "loading" != VK.Auth._loadState) {
        VK.Auth._loadState = "loading";
        var url = VK._domain.login + "?act=openapi&oauth=1&aid=" + parseInt(VK._apiId, 10) + "&location=" + encodeURIComponent(window.location.hostname);
        if (VK.Api.supportCORS()) {
          var loginCallback = function(response) {
            if (this.JSON || (this.JSON = {}), response = "function" != typeof JSON.parse ? eval(response) : JSON.parse(response), VK.Auth._loadState = "loaded", response && response.auth) {
              var session = { mid: response.user.id, sid: response.access_token, sig: response.sig, secret: response.secret, expire: response.expire };
              force && (session.user = response.user);
              var status = "connected";
            } else {
              var session = null, status = response.user ? "not_authorized" : "unknown";
              VK.Cookie.clear();
            }
            VK.Auth.setSession(session, status, false, response), VK.Observer.publish("auth.loginStatus", { session, status }), VK.Observer.unsubscribe("auth.loginStatus");
          };
          VK.Api.makeRequest(url + "&new=1", loginCallback);
        } else {
          for (var rnd = parseInt(1e7 * Math.random(), 10); VK.Auth.lsCb[rnd]; ) rnd = parseInt(1e7 * Math.random(), 10);
          VK.Auth.lsCb[rnd] = function(e2) {
            if (delete VK.Auth.lsCb[rnd], VK.Auth._loadState = "loaded", e2 && e2.auth) {
              var t = { mid: e2.user.id, sid: e2.access_token, sig: e2.sig, secret: e2.secret, expire: e2.expire };
              force && (t.user = e2.user);
              var o = "connected";
            } else {
              t = null, o = e2.user ? "not_authorized" : "unknown";
              VK.Cookie.clear();
            }
            VK.Auth.setSession(t, o, false, e2), VK.Observer.publish("auth.loginStatus", { session: t, status: o }), VK.Observer.unsubscribe("auth.loginStatus");
          }, VK.Api.attachScript(url + "&rnd=" + rnd);
        }
      }
    }
  } }), VK.App || (VK.App = { _appOpened: false, _addToGroupPopup: null, open: function(e2, t) {
    !VK.App._appOpened && VK._apiId && (VK._session ? VK.App._openApp(e2, t) : VK.Auth.login(function(o) {
      o && o.session && VK.App._openApp(e2, t);
    }));
  }, _openApp: function(e2, t) {
    var o, i, n = [];
    if (t = t || {}, e2 && VK._apiId && !VK.App._appOpened) {
      if ("[object Object]" === Object.prototype.toString.call(t.data)) try {
        t.data = JSON.stringify(t.data);
      } catch (e3) {
        t.data = "";
      }
      for (var r in o = VK._domain.base + "/apps?act=open_external_app_openapi&aid=" + VK._apiId, t.aid = VK._apiId, t) {
        var s = "";
        t.hasOwnProperty(r) && (void 0 !== t[r] && (s = encodeURIComponent(t[r])), n.push(encodeURIComponent(r) + "=" + s));
      }
      o += "&url=" + e2, o += "&q=" + encodeURIComponent(n.join("&")), i = VK.Util.Box(o, {}, { closeExternalApp: function() {
        VK.App._result ? (VK.Observer.publish("app.done", VK.App._result), VK.App._result = null) : VK.Observer.publish("app.closed"), i.hide(), VK.App._appOpened = false;
      }, externalAppDone: function(e3, t2) {
        t2 ? VK.App._result = e3 : (VK.Observer.publish("app.done", e3), i.hide(), VK.App._appOpened = false, VK.App._result = null);
      } }), i.show(), VK.App._appOpened = true, VK.App._result = null;
    }
  }, addToGroup: function(e2) {
    this._addToGroupPopup && !this._addToGroupPopup.closed || (this._onAddToGroupDone && VK.Util.removeEvent("message", this._onAddToGroupDone, window), this._onAddToGroupDone = function(e3) {
      e3.origin === VK._domain.base && "app.addToGroup" === e3.data.method && (VK.Observer.publish("app.addToGroupDone", { app_id: e3.data.app_id, group_ids: e3.data.group_ids }), VK.Util.removeEvent("message", this._onAddToGroupDone, window), this._onAddToGroupDone = null);
    }.bind(this), window.postMessage && VK.Util.addEvent("message", this._onAddToGroupDone, window), this._addToGroupPopup = VK.UI.popup({ url: VK._domain.base + "/add_community_app.php?aid=" + e2, width: 560, height: 650 }));
  } });
}
VK.UI || (VK.UI = { active: null, _buttons: [], popup: function(e2) {
  var t, o = void 0 !== window.screenX ? window.screenX : window.screenLeft, i = void 0 !== window.screenY ? window.screenY : window.screenTop, n = void 0 !== window.outerWidth ? window.outerWidth : document.body.clientWidth, r = void 0 !== window.outerHeight ? window.outerHeight : document.body.clientHeight - 22, s = e2.width, a = e2.height, d = parseInt(o + (n - s) / 2, 10), l = parseInt(i + (r - a) / 2.5, 10);
  return t = "width=" + s + ",height=" + a + ",left=" + (d = window.screen && window.screenX && screen.left && screen.left > 1e3 ? 0 : d) + ",top=" + l, this.active = window.open(e2.url, "vk_openapi", t), this.active;
}, button: function(e2, t) {
  var o;
  "string" == typeof e2 && (e2 = document.getElementById(e2)), this._buttons.push(e2), index = this._buttons.length - 1, o = '<table cellspacing="0" cellpadding="0" id="openapi_UI_' + index + '" onmouseover="VK.UI._change(1, ' + index + ');" onmouseout="VK.UI._change(0, ' + index + ');" onmousedown="VK.UI._change(2, ' + index + ');" onmouseup="VK.UI._change(1, ' + index + ');" style="cursor: pointer; border: 0px; font-family: tahoma, arial, verdana, sans-serif, Lucida Sans; font-size: 10px;"><tr style="vertical-align: middle"><td><div style="border: 1px solid #3b6798;border-radius: 2px 0px 0px 2px;-moz-border-radius: 2px 0px 0px 2px;-webkit-border-radius: 2px 0px 0px 2px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 4px 0px 6px;line-height: 13px;">&#1042;&#1086;&#1081;&#1090;&#1080;</div></div></td><td><div style="background: url(' + VK._domain.base + '/images/btns.png) 0px -42px no-repeat; width: 21px; height: 21px"></div></td><td><div style="border: 1px solid #3b6798;border-radius: 0px 2px 2px 0px;-moz-border-radius: 0px 2px 2px 0px;-webkit-border-radius: 0px 2px 2px 0px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 6px 0px 4px;line-height: 13px;">&#1050;&#1086;&#1085;&#1090;&#1072;&#1082;&#1090;&#1077;</div></div></td></tr></table>', e2.innerHTML = o, e2.style.width = e2.childNodes[0].offsetWidth + "px";
}, _change: function(e2, t) {
  for (var o = document.getElementById("openapi_UI_" + t).rows[0], i = [o.cells[0].firstChild.firstChild, o.cells[2].firstChild.firstChild], n = 0; n < 2; ++n) {
    var r = i[n];
    0 === e2 ? (r.style.backgroundColor = "#6D8DB1", r.style.borderTopColor = "#7E9CBC", r.style.borderLeftColor = r.style.borderRightColor = r.style.borderBottomColor = "#5C82AB") : 1 == e2 ? (r.style.backgroundColor = "#7693B6", r.style.borderTopColor = "#88A4C4", r.style.borderLeftColor = r.style.borderRightColor = r.style.borderBottomColor = "#6088B4") : 2 == e2 && (r.style.backgroundColor = "#6688AD", r.style.borderBottomColor = "#7495B8", r.style.borderLeftColor = r.style.borderRightColor = r.style.borderTopColor = "#51779F");
  }
  0 === e2 || 2 == e2 ? o.cells[2].firstChild.style.backgroundPosition = "0px -42px" : 1 == e2 && (o.cells[2].firstChild.style.backgroundPosition = "0px -63px");
} }), VK.XDM || (VK.XDM = { remote: null, init: function() {
  if (this.remote) return false;
  var e2 = VK._domain.api + "/" + VK._path.proxy;
  this.remote = new fastXDM.Server({ onInit: function() {
    VK.xdReady = true, VK.Observer.publish("xdm.init");
  } }), this.remote.append(document.getElementById(VK._rootId), { src: e2 });
}, xdHandler: function(code) {
  try {
    eval("VK." + code);
  } catch (e2) {
  }
} }), VK.Observer || (VK.Observer = { _subscribers: function() {
  return this._subscribersMap || (this._subscribersMap = {}), this._subscribersMap;
}, publish: function(e2) {
  var t, o, i = Array.prototype.slice.call(arguments), n = (e2 = i.shift(), this._subscribers()[e2]);
  if (n) for (t = 0, o = n.length; t < o; t++) null != n[t] && n[t].apply(this, i);
}, subscribe: function(e2, t) {
  var o = this._subscribers();
  if ("function" != typeof t) return false;
  o[e2] ? o[e2].push(t) : o[e2] = [t];
}, unsubscribe: function(e2, t) {
  var o, i, n = this._subscribers()[e2];
  if (!n) return false;
  if ("function" == typeof t) for (o = 0, i = n.length; o < i; o++) n[o] == t && (n[o] = null);
  else delete this._subscribers()[e2];
} }), VK.Widgets || (VK.Widgets = {}, VK.Widgets.count = 0, VK.Widgets.RPC = {}, VK.Widgets.loading = function(e2, t) {
  e2.style.background = t ? 'url("' + VK._domain.base + '/images/upload.gif") center center no-repeat transparent' : "none";
}, VK.Widgets.Comments = function(e2, t, o) {
  var i = VK.Util.getPageData();
  if (!VK._apiId) throw Error("VK not initialized. Please use VK.init");
  t = VK.Util.parseOptions(t);
  document.getElementById(e2);
  var n, r = { limit: t.limit || 10, height: t.height || 0, mini: void 0 === t.mini ? "auto" : t.mini, norealtime: t.norealtime ? 1 : 0 }, s = function() {
    return n.callMethod("mouseUp"), false;
  }, a = function(e3) {
    n.callMethod("mouseMove", { screenY: e3.screenY });
  };
  if (t.browse) r.browse = 1, r.replies = t.replies || 0;
  else {
    var d = t.pageUrl || i.url;
    "/" == d.substr(0, 1) && (d = location.protocol + "//" + location.host + d), VK.extend(r, { page: o || 0, status_publish: void 0 === t.autoPublish ? 0 : t.autoPublish, attach: void 0 === t.attach ? "*" : t.attach ? t.attach : "", url: d, title: t.pageTitle || i.title, description: t.pageDescription || i.description, image: t.pageImage || i.image });
  }
  return t.onChange && (VK.Observer.subscribe("widgets.comments.new_comment", t.onChange), VK.Observer.subscribe("widgets.comments.delete_comment", t.onChange)), VK.Widgets._constructor("widget_comments.php", e2, t, r, { showBox: function(e3, t2) {
    VK.Util.Box(VK.Util.getAbsUrl(e3), [], { proxy: n }).show();
  }, startDrag: function() {
    cursorBack = window.document.body.style.cursor, window.document.body.style.cursor = "pointer", VK.Util.addEvent("mousemove", a), VK.Util.addEvent("mouseup", s);
  }, stopDrag: function() {
    window.document.body.style.cursor = cursorBack, VK.Util.removeEvent("mousemove", a), VK.Util.removeEvent("mouseup", s);
  } }, { startHeight: 133, minWidth: 300 }, function(e3, t2, o2) {
    t2, n = o2;
  });
}, VK.Widgets.CommentsBrowse = function(e2, t) {
  return (t = VK.Util.parseOptions(t)).browse = 1, VK.Widgets.Comments(e2, t);
}, VK.Widgets.Recommended = function(e2, t) {
  VK.Util.getPageData();
  if (!VK._apiId) throw Error("VK not initialized. Please use VK.init");
  var o = { limit: (t = VK.Util.parseOptions(t)).limit || 5, max: t.max || 0, sort: t.sort || "friend_likes", verb: t.verb || 0, period: t.period || "week", target: t.target || "parent" };
  return VK.Widgets._constructor("widget_recommended.php", e2, t, o, {}, { startHeight: 116 + 47 * o.limit - 15, minWidth: 150 });
}, VK.Widgets.Post = function(e2, t, o, i, n) {
  n = VK.Util.parseOptions(n);
  document.getElementById(e2);
  var r, s, a = { owner_id: t, post_id: o, hash: i || "", from: n ? n.from : "", mode: n && n.mode ? n.mode : "" };
  return VK.Widgets._constructor("widget_post.php", e2, n, a, { showBox: function(e3, t2) {
    VK.Util.Box(VK.Util.getAbsUrl(e3), [], { proxy: r }).show();
  }, startDrag: function() {
    s = window.document.body.style.cursor, window.document.body.style.cursor = "pointer";
  }, stopDrag: function() {
    window.document.body.style.cursor = s;
  } }, { startHeight: 90, minWidth: 250 }, function(e3, t2, o2) {
    t2, r = o2;
  });
}, VK.Widgets.TextLive = function(e2, t, o, i, n) {
  return n = VK.Util.parseOptions(n), VK.Widgets._constructor("widget_textlive.php", e2, n, { textlive_id: t, textpost_id: o, hash: i || "" }, null, { startHeight: o ? 176 : 167, minWidth: 320 });
}, VK.Widgets.Like = function(e2) {
  if (e2) return e2;
  var t = [];
  return e2 = function(e3, o, i) {
    var n = VK.Util.getPageData();
    if (!VK._apiId) throw Error("VK not initialized. Please use VK.init");
    var r, s, a, d, l, p, u = { 18: 43, 20: 47, 22: 51, 24: 55, 30: 67 }, c = "full" == (o = VK.extend(VK.Util.parseOptions(o), { allowTransparency: true })).type || "button" == o.type || "vertical" == o.type || "mini" == o.type ? o.type : "full", h = "auto" === o.width && ("button" == c || "mini" == c), f = parseInt(o.height, 10) || 22, g = f && u[f] ? f : 22, m = h ? 153 : "full" == c ? Math.max(200, o.width || 350) : "button" == c ? 180 : "mini" == c ? 115 : u[g], _ = "vertical" == c ? 2 * f + 7 : f, y = { page: i || 0, url: o.pageUrl || n.url, type: c, verb: 1 == o.verb ? 1 : 0, color: o.color || "", title: o.pageTitle || n.title, description: o.pageDescription || n.description, image: o.pageImage || n.image, text: (o.text || "").substr(0, 140), h: f }, v = o.ttHere || false, b = false, w = null;
    function V(e4) {
      if ((b || e4) && l && d && l && ("none" == d.style.display || "yes" == d.getAttribute("vkhidden"))) {
        w && clearTimeout(w), p && clearTimeout(p);
        var t2 = o.getScrollTop ? o.getScrollTop() : document.body.scrollTop || document.documentElement.scrollTop || 0, i2 = VK.Util.getXY(r, o.fixed), n2 = v ? 0 : i2[1];
        t2 > i2[1] - 120 && "top" != o.tooltipPos || "vertical" == c || "bottom" == o.tooltipPos ? (d.style.top = n2 + _ + 2 + "px", l.callMethod("show", false, c + "_" + g)) : (d.style.top = n2 - 128 + "px", l.callMethod("show", true, c + "_" + g)), VK.Util.ss(d, { left: (v ? 0 : i2[0]) - ("full" == c || "button" == c ? 32 : 2) + "px", display: "block", opacity: 1, filter: "none" }), d.setAttribute("vkhidden", "no"), b = true;
      }
    }
    function K(e4) {
      b && !e4 || !l || (l.callMethod("hide"), a.callMethod("hide"), w = setTimeout(function() {
        d.style.display = "none";
      }, 400));
    }
    "vertical" != c && "button" != c && "mini" != c || delete o.width, h && (y.auto_width = 1);
    var x = VK.Widgets._constructor("widget_like.php", e3, o, y, { initTooltip: function(e4) {
      l = new fastXDM.Server({ onInit: e4 ? function() {
        V();
      } : function() {
      }, proxy: a, showBox: function(e5, t2) {
        VK.Util.Box(VK.Util.getAbsUrl(e5), [t2.width, t2.height], { proxy: l }).show();
      } }, false, { safe: true }), (d = l.append(v ? r : document.body, { src: s.src + "&act=a_like_tooltip", scrolling: "no", allowTransparency: true, id: s.id + "_tt", style: { position: "absolute", padding: 0, display: "none", opacity: 0.01, filter: "alpha(opacity=1)", border: "0", width: "274px", height: "130px", zIndex: 5e3, overflow: "hidden" } })).setAttribute("vkhidden", "yes"), d.onmouseover = function() {
        clearTimeout(p), b = true;
      }, d.onmouseout = function() {
        clearTimeout(p), b = false, p = setTimeout(function() {
          K();
        }, 200);
      };
    }, showTooltip: V, hideTooltip: K, destroy: function() {
      a.destroy();
      try {
        s.src = "about: blank;";
      } catch (e4) {
      }
      if (s.parentNode.removeChild(s), d) {
        try {
          d.src = "about: blank;";
        } catch (e4) {
        }
        d.parentNode.removeChild(d);
      }
      l && l.destroy();
    }, showBox: function(e4, t2) {
      VK.Util.Box(VK.Util.getAbsUrl(e4), [], { proxy: a }).show();
    }, proxy: function() {
      l && l.callMethod.apply(l, arguments);
    } }, { startHeight: _, minWidth: m }, function(e4, t2, o2) {
      a = o2, VK.Util.ss(r = e4, { height: _ + "px", width: m + "px", position: "relative", clear: "both" }), VK.Util.ss(s = t2, { height: _ + "px", width: m + "px", overflow: "hidden", zIndex: 150 }), r.onmouseover = function() {
        clearTimeout(p), b = true;
      }, r.onmouseout = function() {
        clearTimeout(p), b = false, p = setTimeout(function() {
          K();
        }, 200);
      };
    });
    return t.push(x), x;
  }, e2.destroyAll = function() {
    for (var e3 = null; t[0]; ) (e3 = VK.Widgets.RPC[t.pop()]) && e3.methods.destroy();
  }, e2;
}(VK.Widgets.Like), VK.Widgets.Poll = function(e2, t, o) {
  var i = VK.Util.getPageData();
  if (!o) throw Error("No poll id passed");
  var n, r = { poll_id: o, url: (t = VK.Util.parseOptions(t)).pageUrl || i.url || location.href, title: t.pageTitle || i.title, description: t.pageDescription || i.description };
  return t.preview && (r.is_preview = 1, delete t.preview), void 0 !== t.share && (r.share = t.share ? 1 : 0), VK.Widgets._constructor("al_widget_poll.php", e2, t, r, { showBox: function(e3, t2) {
    VK.Util.Box(VK.Util.getAbsUrl(e3), [], { proxy: n }).show();
  } }, { startHeight: 144, minWidth: 300 }, function(e3, t2, o2) {
    n = o2;
  });
}, VK.Widgets.App = function(e2, t, o) {
  if (!t) throw Error("No app id passed");
  o = VK.Util.parseOptions(o);
  var i, n = void 0, r = void 0, s = { aid: t, mode: parseInt(o.mode, 10) || 1 };
  switch (s.mode) {
    case 1:
      o.width = 150, n = 251;
      break;
    case 2:
      o.width = o.width ? Math.max(200, Math.min(1e4, parseInt(o.width, 10))) : 200, r = n = 193;
      break;
    case 3:
      o.width = o.width ? Math.max(50, Math.min(1e4, parseInt(o.width, 10))) : void 0, r = n = o.height = { 18: 18, 20: 20, 22: 22, 24: 24, 30: 30 }[parseInt(o.height, 10) || 30];
  }
  return i = o.width, VK.Widgets._constructor("widget_app.php", e2, o, s, {}, { startHeight: n, height: r, minWidth: i });
}, VK.Widgets.Community = VK.Widgets.Group = function(e2, t, o) {
  if (t = VK.Util.parseOptions(t), !(o = parseInt(o, 10))) throw Error("No group_id passed");
  t.mode = parseInt(t.mode, 10).toString();
  var i, n, r = { gid: o, mode: t.mode ? t.mode : "0" }, s = 3 == t.mode ? 185 : 1 == t.mode ? 141 : 0 | t.height || 290;
  function a() {
    return i.callMethod("mouseUp"), false;
  }
  function d(e3) {
    return i.callMethod("mouseMove", { screenY: e3.screenY }), false;
  }
  return t.wall && (r.wall = t.wall), r.color1 = t.color1 || "", r.color2 = t.color2 || "", r.color3 = t.color3 || "", r.class_name = t.class_name || "", t.no_head && (r.no_head = 1), t.no_cover && (r.no_cover = 1), t.wide && (r.wide = 1, (!t.width || t.width < 300) && (t.width = 300)), 0 | !t.width && (t.width = 200), VK.Widgets._constructor("widget_community.php", e2, t, r, { showBox: function(e3, t2) {
    VK.Util.Box(VK.Util.getAbsUrl(e3), [], { proxy: i }).show();
  }, startDrag: function() {
    n = window.document.body.style.cursor, window.document.body.style.cursor = "pointer", VK.Util.addEvent("mousemove", d), VK.Util.addEvent("mouseup", a);
  }, stopDrag: function() {
    window.document.body.style.cursor = n, VK.Util.removeEvent("mousemove", d), VK.Util.removeEvent("mouseup", a);
  }, auth: function() {
    VK.Auth.login(null, 1);
  } }, { minWidth: 120, startHeight: s }, function(e3, t2, o2) {
    i = o2;
  });
}, VK.Widgets.Auth = function(e2, t) {
  VK.Util.getPageData();
  if (!VK._apiId) throw Error("VK not initialized. Please use VK.init");
  return (t = VK.Util.parseOptions(t)).width || (t.width = 200), t.type ? type = 1 : type = 0, VK.Widgets._constructor("widget_auth.php", e2, t, {}, { makeAuth: function(e3) {
    if (e3.session && (VK.Auth._loadState = "loaded", VK.Auth.setSession(e3.session, "connected"), VK.Observer.publish("auth.loginStatus", { session: e3.session, status: "connected" }), VK.Observer.unsubscribe("auth.loginStatus")), t.onAuth) t.onAuth(e3);
    else {
      if (t.authUrl) var o = t.authUrl;
      else o = window.location.href;
      -1 == o.indexOf("?") ? o += "?" : o += "&";
      var i = [];
      for (var n in e3) "session" != n && i.push(n + "=" + decodeURIComponent(e3[n]).replace(/&/g, "%26").replace(/\#/g, "%23").replace(/\?/, "%3F"));
      window.location.href = o + i.join("&");
    }
  } }, { startHeight: 134 });
}, VK.Widgets.Subscribe = function(e2, t, o) {
  if (!(o = parseInt(o, 10))) throw Error("No owner_id passed");
  var i, n = { oid: o };
  return (t = VK.Util.parseOptions(t)).mode && (n.mode = t.mode), t.soft && (n.soft = t.soft), VK.Widgets._constructor("widget_subscribe.php", e2, t, n, { showBox: function(e3, t2) {
    VK.Util.Box(VK.Util.getAbsUrl(e3), [], { proxy: i }).show();
  }, auth: function() {
    VK.Auth.login(null, 1);
  } }, { minWidth: 220, startHeight: 22 }, function(e3, t2, o2) {
    i = o2;
  });
}, VK.Widgets.ContactUs = function(e2, t, o) {
  if (!(o = parseInt(o, 10))) throw Error("No group or user id passed");
  t = VK.Util.parseOptions(t);
  var i = { oid: o, height: { 18: 18, 20: 20, 22: 22, 24: 24, 30: 30 }[parseInt(t.height, 10) || 24], text: (t.text || "").substr(0, 140) };
  return VK.Widgets._constructor("widget_contactus.php", e2, t, i, {}, { startHeight: i.height, height: i.height }, function(e3, t2, o2) {
    o2;
  });
}, VK.Widgets.Bookmarks = function(e2, t) {
  t = VK.Util.parseOptions(t);
  var o = { height: { 18: 18, 20: 20, 22: 22, 24: 24, 30: 30 }[parseInt(t.height, 10) || 30], url: t.url || window.location.href };
  return VK.Widgets._constructor("widget_bookmarks.php", e2, t, o, {}, { startHeight: o.height, height: o.height }, function(e3, t2, o2) {
    o2;
  });
}, VK.Widgets.Playlist = function(e2, t, o, i, n) {
  var r, s = { oid: parseInt(t, 10), pid: parseInt(o, 10), hash: i || "" };
  if (!s.oid) throw Error("No owner id passed");
  if (!s.pid) throw Error("No playlist id passed");
  return n = VK.Util.parseOptions(n), VK.Widgets._constructor("widget_playlist.php", e2, n, s, { showBox: function(e3, t2) {
    VK.Util.Box(VK.Util.getAbsUrl(e3), [], { proxy: r }).show();
  } }, { minWidth: 200 }, function(e3, t2, o2) {
    r = o2;
  });
}, VK.Widgets.Ads = function(e2, t, o) {
  t = VK.Util.parseOptions(t), o = o || {};
  var i, n = {}, r = {}, s = {}, a = document.getElementById(e2), d = {}, l = {}, p = {};
  for (var u in o) {
    var c = -1 != function(e3, t2, o2) {
      for (var i2 = o2 || 0, n2 = (e3 || []).length; i2 < n2; i2++) if (e3[i2] == t2) return i2;
      return -1;
    }(["hash"], u) ? u : "ads_" + u;
    d[c] = o[u];
  }
  if (a && a.getBoundingClientRect) {
    a.style.width = "100%", a.style.height = "100%";
    var h = a.getBoundingClientRect();
    a.style.width = "", a.style.height = "", d.ads_ad_unit_width_auto = Math.floor(h.right - h.left), d.ads_ad_unit_height_auto = Math.floor(h.bottom - h.top);
  }
  return p.ads_ad_unit_width = 100, p.ads_ad_unit_height = 100, l.ads_ad_unit_width = parseInt(d.ads_ad_unit_width) || "auto" === d.ads_ad_unit_width && d.ads_ad_unit_width_auto || p.ads_ad_unit_width, l.ads_ad_unit_height = parseInt(d.ads_ad_unit_height) || "auto" === d.ads_ad_unit_height && d.ads_ad_unit_height_auto || p.ads_ad_unit_height, d.ads_handler && (l.ads_handler = d.ads_handler), d.ads_handler_empty_html && (l.ads_handler_empty_html = d.ads_handler_empty_html), delete d.ads_handler, delete d.ads_handler_empty_html, n.act = "ads_web", n.url = location.href, VK.extend(n, d), t.noDefaultParams = true, t.width = l.ads_ad_unit_width, t.allowTransparency = true, r.startHeight = l.ads_ad_unit_height, r.minWidth = l.ads_ad_unit_width, s.adsOnInit = function(e3, o2) {
    VK.Widgets.loading(a, false), function(e4) {
      if (!e4) return;
      for (var t2 in e4) {
        var o3 = e4[t2];
        "ads_ad_unit_width" === t2 || "ads_ad_unit_height" === t2 ? t2 in d || (l[t2] = parseInt(o3) || "auto" === o3 && d[t2 + "_auto"] || p[t2]) : t2 in l || (l[t2] = o3);
      }
    }(o2), t.onAdsReady && t.onAdsReady.apply(t.onAdsReady, Array.prototype.slice.call(arguments));
    !function(e4) {
      var t2 = function(e5) {
        var t3 = false;
        try {
          if (!e5) return false;
          var o3 = false;
          if (d2(e5)) o3 = e5;
          else if (l2(e5)) {
            var i2 = e5.split(".");
            o3 = window;
            for (var n2 = 0, r2 = i2.length; n2 < r2 && (o3 = o3[i2[n2]]); n2++) ;
            if (!o3) {
              "function" === e5.substr(0, 8) && (e5 = "return " + e5 + ";");
              var s2 = new Function(e5)();
              d2(s2) ? o3 = s2 : t3 = s2;
            }
          }
          if (o3) {
            var a2 = Array.prototype.slice.call(arguments, 1);
            t3 = o3.apply(o3, a2);
          }
        } catch (e6) {
          try {
            console.error(e6);
          } catch (e7) {
          }
        }
        return t3;
        function d2(e6) {
          return "[object Function]" === Object.prototype.toString.call(e6);
        }
        function l2(e6) {
          return "[object String]" === Object.prototype.toString.call(e6);
        }
      }(l.ads_handler, e4);
      if (e4 <= 0 && true !== t2) {
        try {
          console.log("VK: ad_unit_id = " + d.ads_ad_unit_id, ", errorCode = ", e4);
        } catch (e5) {
        }
        !function(e5, t3, o3) {
          if (!e5) return;
          if (!a) return;
          t3 = t3 ? t3 + "px" : "", o3 = o3 ? o3 + "px" : "";
          var n2 = '<html><head></head><body style="padding: 0; margin: 0;"><div>' + e5 + "</div></body></html>", r2 = document.createElement("iframe");
          function s2() {
            if (!o3) try {
              var e6 = r2.contentWindow.document.body.firstChild.getBoundingClientRect(), t4 = Math.ceil(e6.bottom - e6.top);
              t4 && (r2.style.height = t4, a.style.height = t4);
            } catch (e7) {
            }
          }
          r2.onload = s2, r2.id = (i ? i.id : "vkwidget-" + Math.round(1e6 * Math.random())) + "_ads_html_handler", r2.src = "about:blank", r2.width = "100%", r2.height = "100%", r2.scrolling = "no", r2.frameBorder = "0", r2.allowTransparency = true, r2.style.overflow = "hidden", r2.style.width = t3, r2.style.height = o3, a.style.width = t3, a.style.height = o3, a.appendChild(r2), r2.contentWindow.vk_ads_html_handler = n2, r2.src = 'javascript:window["vk_ads_html_handler"]';
        }(l.ads_handler_empty_html, l.ads_ad_unit_width, l.ads_ad_unit_height);
      }
    }(e3);
  }, s.newAdsOnInitLoader = function(e3) {
    !function(e4) {
      if ("vk__adsLight" in window) window.vk__adsLight && vk__adsLight.userHandlers && vk__adsLight.userHandlers.onInit && vk__adsLight.userHandlers.onInit(false);
      else {
        window.vk__adsLight = false;
        var t2 = VK.Api && VK.Api.attachScript || VK.addScript;
        if (Array.isArray(e4)) e4.forEach(function(e5) {
          t2(VK._domain.base + e5);
        });
        else {
          var o2 = parseInt(e4);
          t2(VK._domain.base + jsc("/web/ads_light.js?") + o2);
        }
      }
    }(JSON.parse(e3.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&")));
  }, VK.Widgets._constructor("ads_rotate.php", e2, t, n, s, r, function(e3, t2, o2) {
    a = e3, i = t2, o2;
  });
}, VK.Widgets.AllowMessagesFromCommunity = function(e2, t, o) {
  if (!(o = parseInt(o, 10)) || o < 0) throw Error("No group id passed");
  t = VK.Util.parseOptions(t);
  var i = { height: { 22: 22, 24: 24, 30: 30 }[parseInt(t.height, 10) || 24], key: t.key ? t.key.substr(0, 256) : "", group_id: o };
  return VK.Widgets._constructor("widget_allow_messages_from_community.php", e2, t, i, {}, { startHeight: i.height, height: i.height }, function(e3, t2, o2) {
    o2;
  });
}, VK.Widgets.Article = function(e2, t, o) {
  var i, n = { url: t };
  return o = VK.Util.parseOptions(o), VK.Widgets._constructor("widget_article.php", e2, o, n, { showBox: function(e3) {
    VK.Util.Box(VK.Util.getAbsUrl(e3), [], { proxy: i }).show();
  } }, {}, function(e3, t2, o2) {
    i = o2;
  });
}, VK.Widgets.Podcast = function(e2, t, o) {
  var i = { episode: t };
  return o = VK.Util.parseOptions(o), VK.Widgets._constructor("widget_podcast.php", e2, o, i, { showBox: function(e3) {
    VK.Util.Box(VK.Util.getAbsUrl(e3), [], { proxy: rpc }).show();
  } }, { minWidth: 300, startHeight: 150 });
}, VK.Widgets.CommunityMessages = function(e2) {
  if (e2) return e2;
  var t = {}, o = {}, i = { no_button: { width: 0, height: 0 }, blue_circle: { width: 50, height: 50, margin: { bottom: 20 } } }, n = { left: { bottom: 0, left: 20 }, right: { bottom: 0, right: 20 } };
  return e2 = function(r, s, a) {
    (a = VK.Util.parseOptions(a)).width = 300, a.height = 399, a.expandTimeout = parseInt(a.expandTimeout) || 0;
    var d = { gid: s };
    a.expanded = parseInt(a.expanded) || 0, (!a.from_dev && null != function(e3) {
      if (!window.localStorage) return null;
      return localStorage.getItem("vk_community_widget_" + e3);
    }("expanded") || a.expanded) && (a.shown = 1), a.shown && (d.shown = 1), a.welcomeScreen || (d.disable_welcome_screen = 1), d.ref_source_info = a.ref_source_info, d.ref_source_link = location.href;
    var l = a.buttonType;
    -1 == Object.keys(i).indexOf(l) && (l = "blue_circle"), "no_button" == l && (a.disableButtonTooltip = 1), a.disableButtonTooltip && (d.disable_tooltip = 1), a.tooltipButtonText && (d.tooltip_text = a.tooltipButtonText), a.disableNewMessagesSound && (d.disable_new_messages_sound = 1), t[r] && e2.destroy(r), d.domain = document.domain, a.no_loading = 1, a.disableNewMessagesSound && a.disableExpandChatSound || (a.enable_autoplay = 1), a.disableExpandChatSound && (d.disable_expand_chat_sound = 1), a.expandTimeout && (d.expand_timeout = a.expandTimeout), a.__alpha_new_widget && (d.__alpha_new_widget = 1);
    var p, u, c, h = false, f = 0, g = [0, 0];
    V(a.widgetPosition), d.button_position = a.widgetPosition, window.addEventListener("message", function(e3) {
      var t2 = document.getElementById(r), o2 = t2.getElementsByTagName("iframe")[0];
      if (e3.data && "VKReforgedWidgetResize" === e3.data.action) {
        var i2 = e3.data.params.width, n2 = e3.data.params.height;
        o2.width = i2, o2.height = n2, t2.style.width = i2 + "px", t2.style.height = n2 + "px", t2.style.margin = n2 > 50 ? "0" : "0 0 20px";
      }
      e3.data && "VKReforgedWidgetLogout" === e3.data.action && (o2.parentNode.removeChild(o2), t2.style = {});
    }, false);
    var m = 0, _ = {};
    function y(e3) {
      clearTimeout(o.titleTimer), o.titleTimer = setTimeout(function() {
        1 == o.changeTitleMode ? document.title = o.oldTitle || "" : document.title = o.title, o.changeTitleMode = 1 == o.changeTitleMode ? 0 : 1, y();
      }, e3 ? 0 : 1500);
    }
    function v() {
      a.disableTitleChange || (clearTimeout(o.titleTimer), o.oldTitle ? document.title = o.oldTitle : null === o.oldTitle && (document.title = ""), o.title = "");
    }
    function b() {
      var e3 = document.getElementById(r), t2 = e3.getElementsByTagName("iframe")[0];
      e3.style.width = t2.width = "372px", e3.style.height = t2.height = "399px", e3.style.margin = "0px 0px 0px 0px";
    }
    function w() {
      var e3 = document.getElementById(r), t2 = e3.getElementsByTagName("iframe")[0], o2 = i[l], n2 = o2.width + g[0], s2 = Math.max(o2.height, g[1]);
      e3.style.width = n2 + "px", e3.style.height = s2 + "px";
      var a2 = o2.margin ? o2.margin : {};
      e3.style.margin = "0px " + (a2.right || 0) + "px " + (a2.bottom || 0) + "px 0px", t2 && (t2.style.boxShadow = "none", t2.width = n2, t2.height = s2);
    }
    function V(e3) {
      p = e3, -1 == Object.keys(n).indexOf(p) && (p = "right"), K(), x("changeButtonPosition", p);
    }
    function K() {
      var e3 = document.getElementById(r);
      if (e3) {
        var t2 = ["left", "right", "top", "bottom"];
        for (var o2 in t2) e3.style[t2[o2]] = "";
        var i2 = n[p];
        for (var o2 in i2) e3.style[o2] = i2[o2] + "px";
        m && (f ? b() : w());
      }
    }
    function x() {
      u && u.callMethod.apply(u, arguments);
    }
    function I(e3) {
      e3 && "[object Object]" === Object.prototype.toString.call(e3) || (e3 = {}), null == e3.welcomeScreen && (e3.welcomeScreen = a.welcomeScreen);
      var t2 = document.getElementById(r).getElementsByTagName("iframe")[0];
      t2 && t2.contentWindow.postMessage({ handler: "VKReforgedWidgetExpand" }, VK._domain.base), clearTimeout(_.showTimer), x("expand", e3);
    }
    function C(e3) {
      x("setSourceData", VK.extend({ link: location.href }, e3));
    }
    return t[r] = VK.Widgets._constructor("reforged_widget.php", r, a, d, { onStartLoading: function() {
      var e3 = document.getElementById(r);
      e3.style.position = "fixed", e3.style["z-index"] = 1e4, K();
    }, onReady: function() {
      m = 1, a.expandTimeout > 0 && !a.shown && (_.showTimer = setTimeout(function() {
        I({ playSong: !a.disableExpandChatSound, noSaveState: 1 });
      }, a.expandTimeout));
    }, showBox: function(e3) {
      if (h) try {
        h.hide();
        try {
          h.iframe.src = "about: blank;";
        } catch (e4) {
        }
        h.iframe.parentNode.removeChild(h.iframe);
      } catch (e4) {
      }
      (h = VK.Util.Box(VK.Util.getAbsUrl(e3), [], { proxy: u }, { zIndex: 10002 })).show();
    }, setTooltipSize: function(e3) {
      g = e3, f || w();
    }, expand: function(e3) {
      var t2, o2;
      e3 = e3 || {}, f = 1, b(), e3.noSaveState || (t2 = "expanded", o2 = 1, window.localStorage && localStorage.setItem("vk_community_widget_" + t2, o2));
    }, minimize: function() {
      setTimeout(function() {
        var e3;
        f = 0, w(), e3 = "expanded", window.localStorage && localStorage.removeItem("vk_community_widget_" + e3);
      }, 120);
    }, canNotWrite: function(e3) {
      a.onCanNotWrite && a.onCanNotWrite(e3);
    }, destroy: function() {
      u.destroy();
      try {
        c.src = "about: blank;";
      } catch (e3) {
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e3) {
      }
    }, fatalError: function(t2, o2) {
      var i2 = { code: t2, widget: 2, public_id: o2 };
      1903 == t2 && (i2.referrer_domain = document.domain);
      var n2 = [];
      for (var s2 in i2) n2.push(s2 + "=" + i2[s2]);
      e2.destroy(r), VK.Util.Box(VK.Util.getAbsUrl("blank.php?" + n2.join("&"))).show();
    }, setPageTitle: function(e3) {
      a.disableTitleChange || (v(), o.oldTitle = document.title || null, o.title = e3, o.changeTitleMode = 0, y(1));
    }, resetPageTitle: function() {
      v();
    }, newMessage: function() {
      !document.hasFocus || document.hasFocus() || a.disableNewMessagesSound || x("playNewMsgSong");
    } }, {}, function(e3, t2, o2) {
      u = o2, c = t2, a.shown ? b() : w();
    }), VK.Util.addEvent("popstate", C.bind(this, {}), window), VK.Util.addEvent("hashchange", C.bind(this, {}), window), { expand: I, minimize: function() {
      x("minimize");
      var e3 = document.getElementById(r).getElementsByTagName("iframe")[0];
      e3 && e3.contentWindow.postMessage({ handler: "VKReforgedWidgetMinimize" }, VK._domain.base);
    }, destroy: function() {
      v();
      var t2 = document.getElementById(r).getElementsByTagName("iframe")[0];
      t2 && t2.contentWindow.postMessage({ handler: "VKReforgedWidgetDestroy" }, VK._domain.base), e2.destroy(r);
    }, setSourceData: C, changeButtonPosition: V, stopTitleAnimation: v };
  }, e2.destroy = function(e3) {
    if (t[e3]) {
      var o2 = VK.Widgets.RPC[t[e3]];
      o2 && o2.methods.destroy(), delete t[e3];
    }
  }, e2.expand = function(e3) {
    console.log(t[e3]);
  }, e2;
}(VK.Widgets.CommunityMessages), VK.Widgets._constructor = function(e2, t, o, i, n, r, s, a, d) {
  var l = document.getElementById(t);
  if (a = a || ++VK.Widgets.count, !l) {
    if ((d = d || 0) > 10) throw Error("VK.Widgets: object #" + t + " not found.");
    return setTimeout(function() {
      VK.Widgets._constructor(e2, t, o, i, n, r, s, a, d + 1);
    }, 500), a;
  }
  r = r || {}, n = n || {}, (o = o || {}).preview && (i.preview = 1, delete o.preview);
  var p, u, c, h, f, g, m = "auto" === o.width ? 0 | (l.clientWidth || l.offsetWidth || r.minWidth) : parseInt(o.width || 0, 10);
  "silent_code" === i.act ? (m = "1px", l.style.opacity = 0, l.style.display = "none", l.style.position = "absolute") : m = m ? Math.max(r.minWidth || 200, Math.min(r.maxWidth || 1e4, m)) + "px" : "100%", l.style.width = m, o.height ? (i.height = o.height, l.style.height = o.height + "px") : l.style.height = (r.startHeight || 200) + "px", "100%" === m && (i.startWidth = 0 | (l.clientWidth || l.offsetWidth)), i.url || (i.url = o.pageUrl || location.href.replace(/#.*$/, "")), p = VK._domain.base + "/" + e2, u = "", o.noDefaultParams || (u += "&app=" + (VK._apiId || "0") + "&width=" + encodeURIComponent(m)), u += "&_ver=" + VK.version, VK._iframeAppWidget && (i.iframe_app = 1);
  var _ = VK.Util.getPageData();
  for (g in i.url = i.url || _.url || "", i.referrer = i.referrer || document.referrer || "", i.title = i.title || _.title || document.title || "", i) {
    if ("title" == g && i[g].length > 80 && (i[g] = i[g].substr(0, 80) + "..."), "description" == g && i[g].length > 160 && (i[g] = i[g].substr(0, 160) + "..."), "number" == typeof i[g]) c = i[g];
    else try {
      c = encodeURIComponent(i[g]);
    } catch (e3) {
      c = "";
    }
    u += "&" + g + "=" + c;
  }
  p += "?" + (u += "&" + (+/* @__PURE__ */ new Date()).toString(16)).substr(1), n.onStartLoading && n.onStartLoading(), o.no_loading || VK.Widgets.loading(l, true), n.showLoader = function(e3) {
    VK.Util.Loader(e3);
  }, n.publish = function() {
    var e3 = Array.prototype.slice.call(arguments);
    e3.push(a), VK.Observer.publish.apply(VK.Observer, e3);
  }, n.onInit = function() {
    VK.Widgets.loading(l, false), n.onReady && n.onReady(), o.onReady && o.onReady();
  }, n.resize = function(e3, t2) {
    l.style.height = e3 + "px";
    var o2 = document.getElementById("vkwidget" + a);
    o2 && (o2.style.height = e3 + "px");
  }, n.resizeWidget = function(e3, t2) {
    e3 = parseInt(e3), t2 = parseInt(t2);
    var i2 = document.getElementById("vkwidget" + a);
    isFinite(e3) && (l.style.width = e3 + "px", i2 && (i2.style.width = e3 + "px")), isFinite(t2) && (l.style.height = t2 + "px", i2 && (i2.style.height = t2 + "px")), o.onResizeWidget && o.onResizeWidget();
  }, n.updateVersion = function(e3) {
    e3 > 1 && VK.Api.attachScript("//vk.com/js/api/openapi_update.js?" + parseInt(e3));
  }, h = VK.Widgets.RPC[a] = new fastXDM.Server(n, function(e3) {
    return !e3 || (e3 = e3.toLowerCase()).match(/(\.|\/)vk\.com($|\/|\?)/);
  }, { safe: true });
  var y = { overflow: "hidden" };
  o.custom_style && "object" == typeof o.custom_style && (y = VK.extend(y, o.custom_style));
  var v = "";
  return o.enable_autoplay && (v = 'allow="autoplay"'), f = VK.Widgets.RPC[a].append(l, { src: p, width: -1 != m.indexOf("%") ? m : parseInt(m) || m, height: r.startHeight || "100%", scrolling: "no", id: "vkwidget" + a, allowTransparency: o.allowTransparency || false, style: y }, v), s && setTimeout(function() {
    s(l, f || l.firstChild, h);
  }, 10), a;
}), VK.Util || (VK.Util = { getPageData: function() {
  if (!VK._pData) {
    var e2, t = document.getElementsByTagName("meta"), o = {}, i = ["description", "title", "url", "image", "app_id"];
    for (var n in t) if (t[n].getAttribute && t[n].getAttribute && ((e2 = t[n].getAttribute("name")) || (e2 = t[n].getAttribute("property")))) for (var r in i) e2 != i[r] && e2 != "og:" + i[r] && e2 != "vk:" + i[r] || (o[i[r]] = t[n].content);
    o.app_id && !VK._apiId && (VK._apiId = o.app_id), o.title = o.title || document.title || "", o.description = o.description || "", o.image = o.image || "", !o.url && VK._iframeAppWidget && VK._apiId && (o.url = "/app" + VK._apiId, VK._browserHash && (o.url += VK._browserHash));
    var s = location.href.replace(/#.*$/, "");
    o.url && o.url.indexOf(s) || (o.url = s), VK._pData = o;
  }
  return VK._pData;
}, getStyle: function(e2, t) {
  var o, i = document.defaultView || window;
  if (i.getComputedStyle) {
    t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
    var n = i.getComputedStyle(e2, null);
    n && (o = n.getPropertyValue(t));
  } else if (e2.currentStyle) {
    var r = t.replace(/\-(\w)/g, function(e3, t2) {
      return t2.toUpperCase();
    });
    o = e2.currentStyle[t] || e2.currentStyle[r];
  }
  return o;
}, getAbsUrl: function(e2) {
  return VK._domain.base + "/" + e2.replace(/^\s*\/?/, "");
}, parseOptions: function(e2) {
  return "[object Object]" !== Object.prototype.toString.call(e2) && (e2 = {}), e2.base_domain && (VK._domain.base = e2.base_domain), e2.login_domain && (VK._domain.login = e2.login_domain), e2;
}, getXY: function(e2, t) {
  if (e2 && void 0 !== e2) {
    var o = 0, i = 0;
    if (void 0 !== e2.getBoundingClientRect) {
      var n = e2.getBoundingClientRect();
      o = n.left, i = n.top, t = true;
    } else if (e2.offsetParent) do {
      o += e2.offsetLeft, i += e2.offsetTop, t && (o -= e2.scrollLeft, i -= e2.scrollTop);
    } while (e2 = e2.offsetParent);
    return t && (i += window.pageYOffset || window.scrollNode && scrollNode.scrollTop || document.documentElement.scrollTop, o += window.pageXOffset || window.scrollNode && scrollNode.scrollLeft || document.documentElement.scrollLeft), [o, i];
  }
}, Loader: function e(t) {
  e.loader || ((e.loader = document.createElement("DIV")).innerHTML = '<style type="text/css">        @-webkit-keyframes VKWidgetsLoaderKeyframes {0%{opacity: 0.2;}30%{opacity: 1;}100%{opacity: 0.2;}}        @keyframes VKWidgetsLoaderKeyframes {0%{opacity: 0.2;}30%{opacity: 1;}100%{opacity: 0.2;}}        .VKWidgetsLoader div {width: 7px;height: 7px;-webkit-border-radius: 50%;-khtml-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;background: #fff;top: 21px;position: absolute;z-index: 2;-o-transition: opacity 350ms linear; transition: opacity 350ms linear;opacity: 0.2;-webkit-animation-duration: 750ms;-o-animation-duration: 750ms;animation-duration: 750ms;-webkit-animation-name: VKWidgetsLoaderKeyframes;-o-animation-name: VKWidgetsLoaderKeyframes;animation-name: VKWidgetsLoaderKeyframes;-webkit-animation-iteration-count: infinite;-o-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-transform: translateZ(0);transform: translateZ(0);}</style><div class="VKWidgetsLoader" style="position: fixed;left: 50%;top: 50%;margin: -25px -50px;z-index: 1002;height: 50px;width: 100px;"><div style="left: 36px;-webkit-animation-delay: 0ms;-o-animation-delay: 0ms;animation-delay: 0ms;"></div><div style="left: 47px;-webkit-animation-delay: 180ms;-o-animation-delay: 180ms;animation-delay: 180ms;"></div><div style="left: 58px;-webkit-animation-delay: 360ms;-o-animation-delay: 360ms;animation-delay: 360ms;"></div><span style="display: block;background-color: #000;-webkit-border-radius: 4px;-khtml-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;-webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);-moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);position: absolute;left: 0;top: 0;bottom: 0; right: 0;z-index: 1;opacity: 0.7;"></span></div>', document.body.insertBefore(e.loader, document.body.firstChild)), e.loader.style.display = t ? "block" : "none";
}, Box: function(e2, t, o, i) {
  o = o || {};
  var n = document.body.style.overflow;
  VK.Util.Loader(true);
  var r = /(^|\.)(vk\.com|vkontakte\.ru)$/.test(location.hostname), s = new fastXDM.Server(VK.extend(o, { onInit: function() {
    a.style.background = "transparent", a.style.visibility = "visible", document.body.style.overflow = "hidden", a.setAttribute("allowfullscreen", 1), r && (document.body.className += " layers_shown"), VK.Util.Loader();
  }, hide: function() {
    a.style.display = "none";
  }, tempHide: function() {
    a.style.left = "-10000px", a.style.top = "-10000px", a.style.width = "10px", a.style.height = "10px", r && (document.body.className = document.body.className.replace(/\b\s*?layers_shown\s*\b/, " ")), document.body.style.overflow = n;
  }, destroy: function() {
    try {
      a.src = "about: blank;";
    } catch (e3) {
    }
    a.parentNode.removeChild(a), r && (document.body.className = document.body.className.replace(/\b\s*?layers_shown\s*\b/, " ")), document.body.style.overflow = n;
  }, resize: function(e3, t2) {
  } }, true), false, { safe: true }), a = s.append(document.body, { src: e2.replace(/&amp;/g, "&"), scrolling: "no", allowTransparency: true, style: { position: "fixed", left: 0, top: 0, zIndex: i && i.zIndex || 1002, background: VK._domain.base + "/images/upload.gif center center no-repeat transparent", padding: "0", border: "0", width: "100%", height: "100%", overflow: "hidden", visibility: "hidden" } });
  return { show: function(e3, t2) {
    a.style.display = "block", document.body.style.overflow = "hidden";
  }, hide: function() {
    a.style.display = "none", document.body.style.overflow = n;
  }, iframe: a, rpc: s };
}, addEvent: function(e2, t, o) {
  (o = o || window.document).addEventListener ? o.addEventListener(e2, t, false) : o.attachEvent && o.attachEvent("on" + e2, t);
}, removeEvent: function(e2, t, o) {
  (o = o || window.document).removeEventListener ? o.removeEventListener(e2, t, false) : o.detachEvent && o.detachEvent("on" + e2, t);
}, ss: function(e2, t) {
  VK.extend(e2.style, t, true);
} }), VK.Retargeting || (VK.Retargeting = { pixelCode: null, Init: function(e2) {
  return this.pixelCode = e2, this;
}, Event: function(e2) {
  if (this.pixelCode) if (IS_BRIDGE_AVAILABLE) _bridgeSend("VKWebAppRetargetingPixel", { pixel_code: this.pixelCode, event: e2 });
  else {
    var t = VK.Util.getPageData(), o = t.url.substr(0, 500), i = t.title && t.title.substr(0, 500) || "";
    (window.Image ? new Image() : document.createElement("img")).src = VK._domain.base + "/rtrg?p=" + this.pixelCode + (e2 ? "&event=" + encodeURIComponent(e2) : "") + (o ? "&metatag_url=" + encodeURIComponent(o) : "") + (i ? "&metatag_title=" + encodeURIComponent(i) : "");
  }
}, Hit: function() {
  this.Event();
}, Add: function(e2) {
  this.pixelCode && e2 && (IS_BRIDGE_AVAILABLE ? _bridgeSend("VKWebAppRetargetingPixel", { pixel_code: this.pixelCode, target_group_id: e2 }) : (window.Image ? new Image() : document.createElement("img")).src = VK._domain.base + "/rtrg?p=" + this.pixelCode + "&audience=" + encodeURIComponent(e2));
}, ProductEvent: function(e2, t, o, i) {
  if (this.pixelCode && t && e2) {
    var n = true;
    void 0 !== (i = i || {}).show_errors && (n = !!i.show_errors);
    var r = "0";
    void 0 !== i.errors_ignore && (r = i.errors_ignore ? "1" : "0");
    var s = VK.Util.getPageData(), a = s.url.substr(0, 500), d = s.title && s.title.substr(0, 500) || "", l = VK._domain.base + "/rtrg", p = o ? JSON.stringify(o) : "", u = { p: this.pixelCode, products_event: t, price_list_id: e2, e: "1", i: r, metatag_url: a, metatag_title: d };
    if (p && (u.products_params = p), IS_BRIDGE_AVAILABLE) _bridgeSend("VKWebAppRetargetingPixel", { pixel_code: this.pixelCode, price_list_id: e2, products_event: t, products_params: p });
    else {
      var c = l + "?" + Object.keys(u).map(function(e3) {
        return encodeURIComponent(e3) + "=" + encodeURIComponent(u[e3]);
      }).join("&");
      VK.Api.makeRequest(c, this.onDone.bind(this, n));
    }
  }
}, onDone: function(e2, t) {
  if (t && e2) {
    var o;
    try {
      o = JSON.parse(t);
    } catch (e3) {
      return;
    }
    o && o.errors && this.showErrors(o.errors);
  }
}, showErrors: function(e2) {
  if (e2 || e2.length) {
    var t = "VK Pixel Error (" + this.pixelCode + "): ";
    if ("string" != typeof e2) {
      var o = e2.length;
      if (o) for (var i = 0; i < o; i++) console.error(t + e2[i]);
    } else console.error(t + e2);
  }
} }), VK.Pixel || (VK.Pixel = function(e2) {
  if (this.constructor != VK.Pixel) throw Error("VK.Pixel was called without 'new' operator");
  return VK.extend(this, VK.Retargeting), this.pixelCode = e2, this.Goal = function(t, o) {
    return VK.Goal(t, o, e2);
  }, this;
}), VK.Goal || (VK.Goal = function(e2, t, o) {
  var i = o || VK.Retargeting.pixelCode;
  if (i && "string" == typeof i) {
    var n = e2 || "conversion";
    if ("string" == typeof n) {
      var r = (t || {}).value || 0;
      if ("string" == typeof r) {
        if (parseFloat(r).toString() !== r) return void console.error("Error argument: parameters.value not a number or valid number string");
      } else if ("number" != typeof r) return void console.error("Error argument: parameters.value not a number or valid number string");
      if (IS_BRIDGE_AVAILABLE) _bridgeSend("VKWebAppConversionHit", { pixel_code: i, conversion_event: n, conversion_value: r });
      else {
        var s = VK._domain.base + "/rtrg", a = { p: i, e: "1", c: n, v: r }, d = s + "?" + Object.keys(a).map(function(e3) {
          return encodeURIComponent(e3) + "=" + encodeURIComponent(a[e3]);
        }).join("&");
        VK.Api.makeRequest(d, VK.Retargeting.onDone.bind(VK.Retargeting, true));
      }
    } else console.error("Error argument: conversionName not a string");
  } else console.error("Error argument: pixelCode not a string. Use VK.Retargeting.Init or VK.Pixel to initialize pixel");
}), window.vkAsyncInit && setTimeout(vkAsyncInit, 0), window.vkAsyncInitCallbacks && vkAsyncInitCallbacks.length && setTimeout(function() {
  for (var e2; e2 = vkAsyncInitCallbacks.pop(); ) try {
    e2();
  } catch (e3) {
    try {
      console.error(e3);
    } catch (e4) {
    }
  }
}, 0);
try {
  stManager.done("api/openapi.js");
} catch (e2) {
}
