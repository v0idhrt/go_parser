!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function() {
    var n = e.Cookies, r = e.Cookies = t();
    r.noConflict = function() {
      return e.Cookies = n, r;
    };
  }());
}(this, function() {
  "use strict";
  function e(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r in n2) e2[r] = n2[r];
    }
    return e2;
  }
  function t(r, i) {
    function o(t2, o2, a2) {
      if ("undefined" != typeof document) {
        "number" == typeof (a2 = e({}, i, a2)).expires && (a2.expires = new Date(Date.now() + 864e5 * a2.expires)), a2.expires && (a2.expires = a2.expires.toUTCString()), t2 = n.write(t2).replace(/=/g, "%3D"), o2 = r.write(String(o2), t2);
        var s = "";
        for (var u in a2) a2[u] && (s += "; " + u, true !== a2[u] && (s += "=" + a2[u].split(";")[0]));
        return document.cookie = t2 + "=" + o2 + s;
      }
    }
    function a(e2) {
      if ("undefined" != typeof document && (!arguments.length || e2)) {
        for (var t2 = document.cookie ? document.cookie.split("; ") : [], i2 = {}, o2 = 0; o2 < t2.length; o2++) {
          var a2 = t2[o2].split("="), s = a2.slice(1).join("="), u = n.read(a2[0]).replace(/%3D/g, "=");
          if (i2[u] = r.read(s, u), e2 === u) break;
        }
        return e2 ? i2[e2] : i2;
      }
    }
    return Object.create({ set: o, get: a, remove: function(t2, n2) {
      o(t2, "", e({}, n2, { expires: -1 }));
    }, withAttributes: function(n2) {
      return t(this.converter, e({}, this.attributes, n2));
    }, withConverter: function(n2) {
      return t(e({}, this.converter, n2), this.attributes);
    } }, { attributes: { value: Object.freeze(i) }, converter: { value: Object.freeze(r) } });
  }
  var n = { read: function(e2) {
    return e2.replace(/%3B/g, ";");
  }, write: function(e2) {
    return e2.replace(/;/g, "%3B");
  } };
  return t(n, { path: "/" });
}), function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document) throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  function n(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || we).createElement("script");
    if (o2.text = e2, t2) for (r2 in xe) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function r(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? de[pe.call(e2)] || "object" : typeof e2;
  }
  function i(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = r(e2);
    return !ye(e2) && !be(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && t2 > 0 && t2 - 1 in e2);
  }
  function o(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  function a(e2, t2) {
    return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
  }
  function s(e2, t2, n2) {
    return ye(t2) ? Se.grep(e2, function(e3, r2) {
      return !!t2.call(e3, r2, e3) !== n2;
    }) : t2.nodeType ? Se.grep(e2, function(e3) {
      return e3 === t2 !== n2;
    }) : "string" != typeof t2 ? Se.grep(e2, function(e3) {
      return fe.call(t2, e3) > -1 !== n2;
    }) : Se.filter(t2, e2, n2);
  }
  function u(e2, t2) {
    for (; (e2 = e2[t2]) && 1 !== e2.nodeType; ) ;
    return e2;
  }
  function c(e2) {
    var t2 = {};
    return Se.each(e2.match(Me) || [], function(e3, n2) {
      t2[n2] = true;
    }), t2;
  }
  function l(e2) {
    return e2;
  }
  function f(e2) {
    throw e2;
  }
  function d(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && ye(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && ye(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  function p() {
    we.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), Se.ready();
  }
  function h(e2, t2) {
    return t2.toUpperCase();
  }
  function m(e2) {
    return e2.replace(Ue, "ms-").replace(Ge, h);
  }
  function g() {
    this.expando = Se.expando + g.uid++;
  }
  function v(e2) {
    return "true" === e2 || "false" !== e2 && ("null" === e2 ? null : e2 === +e2 + "" ? +e2 : Qe.test(e2) ? JSON.parse(e2) : e2);
  }
  function y(e2, t2, n2) {
    var r2;
    if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(Ke, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
      try {
        n2 = v(n2);
      } catch (e3) {
      }
      Ye.set(e2, t2, n2);
    } else n2 = void 0;
    return n2;
  }
  function b(e2, t2, n2, r2) {
    var i2, o2, a2 = 20, s2 = r2 ? function() {
      return r2.cur();
    } : function() {
      return Se.css(e2, t2, "");
    }, u2 = s2(), c2 = n2 && n2[3] || (Se.cssNumber[t2] ? "" : "px"), l2 = e2.nodeType && (Se.cssNumber[t2] || "px" !== c2 && +u2) && Je.exec(Se.css(e2, t2));
    if (l2 && l2[3] !== c2) {
      for (u2 /= 2, c2 = c2 || l2[3], l2 = +u2 || 1; a2--; ) Se.style(e2, t2, l2 + c2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), l2 /= o2;
      l2 *= 2, Se.style(e2, t2, l2 + c2), n2 = n2 || [];
    }
    return n2 && (l2 = +l2 || +u2 || 0, i2 = n2[1] ? l2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = c2, r2.start = l2, r2.end = i2)), i2;
  }
  function w(e2) {
    var t2, n2 = e2.ownerDocument, r2 = e2.nodeName, i2 = ot[r2];
    return i2 || (t2 = n2.body.appendChild(n2.createElement(r2)), i2 = Se.css(t2, "display"), t2.parentNode.removeChild(t2), "none" === i2 && (i2 = "block"), ot[r2] = i2, i2);
  }
  function x(e2, t2) {
    for (var n2, r2, i2 = [], o2 = 0, a2 = e2.length; o2 < a2; o2++) (r2 = e2[o2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (i2[o2] = Xe.get(r2, "display") || null, i2[o2] || (r2.style.display = "")), "" === r2.style.display && it(r2) && (i2[o2] = w(r2))) : "none" !== n2 && (i2[o2] = "none", Xe.set(r2, "display", n2)));
    for (o2 = 0; o2 < a2; o2++) null != i2[o2] && (e2[o2].style.display = i2[o2]);
    return e2;
  }
  function T(e2, t2) {
    var n2;
    return n2 = void 0 !== e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : void 0 !== e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && o(e2, t2) ? Se.merge([e2], n2) : n2;
  }
  function k(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) Xe.set(e2[n2], "globalEval", !t2 || Xe.get(t2[n2], "globalEval"));
  }
  function S(e2, t2, n2, i2, o2) {
    for (var a2, s2, u2, c2, l2, f2, d2 = t2.createDocumentFragment(), p2 = [], h2 = 0, m2 = e2.length; h2 < m2; h2++) if ((a2 = e2[h2]) || 0 === a2) if ("object" === r(a2)) Se.merge(p2, a2.nodeType ? [a2] : a2);
    else if (dt.test(a2)) {
      for (s2 = s2 || d2.appendChild(t2.createElement("div")), u2 = (ct.exec(a2) || ["", ""])[1].toLowerCase(), c2 = ft[u2] || ft._default, s2.innerHTML = c2[1] + Se.htmlPrefilter(a2) + c2[2], f2 = c2[0]; f2--; ) s2 = s2.lastChild;
      Se.merge(p2, s2.childNodes), (s2 = d2.firstChild).textContent = "";
    } else p2.push(t2.createTextNode(a2));
    for (d2.textContent = "", h2 = 0; a2 = p2[h2++]; ) if (i2 && Se.inArray(a2, i2) > -1) o2 && o2.push(a2);
    else if (l2 = nt(a2), s2 = T(d2.appendChild(a2), "script"), l2 && k(s2), n2) for (f2 = 0; a2 = s2[f2++]; ) lt.test(a2.type || "") && n2.push(a2);
    return d2;
  }
  function E() {
    return true;
  }
  function C() {
    return false;
  }
  function j(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) j(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = C;
    else if (!i2) return e2;
    return 1 === o2 && (a2 = i2, i2 = function(e3) {
      return Se().off(e3), a2.apply(this, arguments);
    }, i2.guid = a2.guid || (a2.guid = Se.guid++)), e2.each(function() {
      Se.event.add(this, t2, i2, r2, n2);
    });
  }
  function A(e2, t2, n2) {
    n2 ? (Xe.set(e2, t2, false), Se.event.add(e2, t2, { namespace: false, handler: function(e3) {
      var n3, r2 = Xe.get(this, t2);
      if (1 & e3.isTrigger && this[t2]) {
        if (r2) (Se.event.special[t2] || {}).delegateType && e3.stopPropagation();
        else if (r2 = ue.call(arguments), Xe.set(this, t2, r2), this[t2](), n3 = Xe.get(this, t2), Xe.set(this, t2, false), r2 !== n3) return e3.stopImmediatePropagation(), e3.preventDefault(), n3;
      } else r2 && (Xe.set(this, t2, Se.event.trigger(r2[0], r2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = E);
    } })) : void 0 === Xe.get(e2, t2) && Se.event.add(e2, t2, E);
  }
  function N(e2, t2) {
    return o(e2, "table") && o(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && Se(e2).children("tbody")[0] || e2;
  }
  function D(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function L(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function O(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (Xe.hasData(e2) && (s2 = Xe.get(e2).events)) for (i2 in Xe.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) Se.event.add(t2, i2, s2[i2][n2]);
      Ye.hasData(e2) && (o2 = Ye.access(e2), a2 = Se.extend({}, o2), Ye.set(t2, a2));
    }
  }
  function _(e2, t2) {
    var n2 = t2.nodeName.toLowerCase();
    "input" === n2 && ut.test(e2.type) ? t2.checked = e2.checked : "input" !== n2 && "textarea" !== n2 || (t2.defaultValue = e2.defaultValue);
  }
  function q(e2, t2, r2, i2) {
    t2 = ce(t2);
    var o2, a2, s2, u2, c2, l2, f2 = 0, d2 = e2.length, p2 = d2 - 1, h2 = t2[0], m2 = ye(h2);
    if (m2 || d2 > 1 && "string" == typeof h2 && !ve.checkClone && mt.test(h2)) return e2.each(function(n2) {
      var o3 = e2.eq(n2);
      m2 && (t2[0] = h2.call(this, n2, o3.html())), q(o3, t2, r2, i2);
    });
    if (d2 && (a2 = (o2 = S(t2, e2[0].ownerDocument, false, e2, i2)).firstChild, 1 === o2.childNodes.length && (o2 = a2), a2 || i2)) {
      for (u2 = (s2 = Se.map(T(o2, "script"), D)).length; f2 < d2; f2++) c2 = o2, f2 !== p2 && (c2 = Se.clone(c2, true, true), u2 && Se.merge(s2, T(c2, "script"))), r2.call(e2[f2], c2, f2);
      if (u2) for (l2 = s2[s2.length - 1].ownerDocument, Se.map(s2, L), f2 = 0; f2 < u2; f2++) c2 = s2[f2], lt.test(c2.type || "") && !Xe.access(c2, "globalEval") && Se.contains(l2, c2) && (c2.src && "module" !== (c2.type || "").toLowerCase() ? Se._evalUrl && !c2.noModule && Se._evalUrl(c2.src, { nonce: c2.nonce || c2.getAttribute("nonce") }, l2) : n(c2.textContent.replace(gt, ""), c2, l2));
    }
    return e2;
  }
  function P(e2, t2, n2) {
    for (var r2, i2 = t2 ? Se.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || Se.cleanData(T(r2)), r2.parentNode && (n2 && nt(r2) && k(T(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  function R(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = yt.test(t2), u2 = e2.style;
    return (n2 = n2 || bt(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(Ne, "$1") || void 0), "" !== a2 || nt(e2) || (a2 = Se.style(e2, t2)), !ve.pixelBoxStyles() && vt.test(a2) && xt.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function I(e2, t2) {
    return { get: function() {
      if (!e2()) return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  function $2(e2) {
    for (var t2 = e2[0].toUpperCase() + e2.slice(1), n2 = Tt.length; n2--; ) if ((e2 = Tt[n2] + t2) in kt) return e2;
  }
  function F(e2) {
    var t2 = Se.cssProps[e2] || St[e2];
    return t2 || (e2 in kt ? e2 : St[e2] = $2(e2) || e2);
  }
  function H(e2, t2, n2) {
    var r2 = Je.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function M(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, c2 = 0;
    if (n2 === (r2 ? "border" : "content")) return 0;
    for (; a2 < 4; a2 += 2) "margin" === n2 && (c2 += Se.css(e2, n2 + et[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= Se.css(e2, "padding" + et[a2], true, i2)), "margin" !== n2 && (u2 -= Se.css(e2, "border" + et[a2] + "Width", true, i2))) : (u2 += Se.css(e2, "padding" + et[a2], true, i2), "padding" !== n2 ? u2 += Se.css(e2, "border" + et[a2] + "Width", true, i2) : s2 += Se.css(e2, "border" + et[a2] + "Width", true, i2));
    return !r2 && o2 >= 0 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + c2;
  }
  function B(e2, t2, n2) {
    var r2 = bt(e2), i2 = (!ve.boxSizingReliable() || n2) && "border-box" === Se.css(e2, "boxSizing", false, r2), a2 = i2, s2 = R(e2, t2, r2), u2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if (vt.test(s2)) {
      if (!n2) return s2;
      s2 = "auto";
    }
    return (!ve.boxSizingReliable() && i2 || !ve.reliableTrDimensions() && o(e2, "tr") || "auto" === s2 || !parseFloat(s2) && "inline" === Se.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === Se.css(e2, "boxSizing", false, r2), (a2 = u2 in e2) && (s2 = e2[u2])), (s2 = parseFloat(s2) || 0) + M(e2, t2, n2 || (i2 ? "border" : "content"), a2, r2, s2) + "px";
  }
  function W(e2, t2, n2, r2, i2) {
    return new W.prototype.init(e2, t2, n2, r2, i2);
  }
  function z() {
    Nt && (false === we.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, Se.fx.interval), Se.fx.tick());
  }
  function U() {
    return e.setTimeout(function() {
      At = void 0;
    }), At = Date.now();
  }
  function G(e2, t2) {
    var n2, r2 = 0, i2 = { height: e2 };
    for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = et[r2])] = i2["padding" + n2] = e2;
    return t2 && (i2.opacity = i2.width = e2), i2;
  }
  function V(e2, t2, n2) {
    for (var r2, i2 = (Q.tweeners[t2] || []).concat(Q.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
  }
  function X(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, c2, l2, f2 = "width" in t2 || "height" in t2, d2 = this, p2 = {}, h2 = e2.style, m2 = e2.nodeType && it(e2), g2 = Xe.get(e2, "fxshow");
    for (r2 in n2.queue || (null == (a2 = Se._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
      a2.unqueued || s2();
    }), a2.unqueued++, d2.always(function() {
      d2.always(function() {
        a2.unqueued--, Se.queue(e2, "fx").length || a2.empty.fire();
      });
    })), t2) if (i2 = t2[r2], Dt.test(i2)) {
      if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (m2 ? "hide" : "show")) {
        if ("show" !== i2 || !g2 || void 0 === g2[r2]) continue;
        m2 = true;
      }
      p2[r2] = g2 && g2[r2] || Se.style(e2, r2);
    }
    if ((u2 = !Se.isEmptyObject(t2)) || !Se.isEmptyObject(p2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (c2 = g2 && g2.display) && (c2 = Xe.get(e2, "display")), "none" === (l2 = Se.css(e2, "display")) && (c2 ? l2 = c2 : (x([e2], true), c2 = e2.style.display || c2, l2 = Se.css(e2, "display"), x([e2]))), ("inline" === l2 || "inline-block" === l2 && null != c2) && "none" === Se.css(e2, "float") && (u2 || (d2.done(function() {
      h2.display = c2;
    }), null == c2 && (l2 = h2.display, c2 = "none" === l2 ? "" : l2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", d2.always(function() {
      h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
    })), u2 = false, p2) u2 || (g2 ? "hidden" in g2 && (m2 = g2.hidden) : g2 = Xe.access(e2, "fxshow", { display: c2 }), o2 && (g2.hidden = !m2), m2 && x([e2], true), d2.done(function() {
      for (r2 in m2 || x([e2]), Xe.remove(e2, "fxshow"), p2) Se.style(e2, r2, p2[r2]);
    })), u2 = V(m2 ? g2[r2] : 0, r2, d2), r2 in g2 || (g2[r2] = u2.start, m2 && (u2.end = u2.start, u2.start = 0));
  }
  function Y(e2, t2) {
    var n2, r2, i2, o2, a2;
    for (n2 in e2) if (i2 = t2[r2 = m(n2)], o2 = e2[n2], Array.isArray(o2) && (i2 = o2[1], o2 = e2[n2] = o2[0]), n2 !== r2 && (e2[r2] = o2, delete e2[n2]), (a2 = Se.cssHooks[r2]) && "expand" in a2) for (n2 in o2 = a2.expand(o2), delete e2[r2], o2) n2 in e2 || (e2[n2] = o2[n2], t2[n2] = i2);
    else t2[r2] = i2;
  }
  function Q(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = Q.prefilters.length, s2 = Se.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (i2) return false;
      for (var t3 = At || U(), n3 = Math.max(0, c2.startTime + c2.duration - t3), r3 = 1 - (n3 / c2.duration || 0), o3 = 0, a3 = c2.tweens.length; o3 < a3; o3++) c2.tweens[o3].run(r3);
      return s2.notifyWith(e2, [c2, r3, n3]), r3 < 1 && a3 ? n3 : (a3 || s2.notifyWith(e2, [c2, 1, 0]), s2.resolveWith(e2, [c2]), false);
    }, c2 = s2.promise({ elem: e2, props: Se.extend({}, t2), opts: Se.extend(true, { specialEasing: {}, easing: Se.easing._default }, n2), originalProperties: t2, originalOptions: n2, startTime: At || U(), duration: n2.duration, tweens: [], createTween: function(t3, n3) {
      var r3 = Se.Tween(e2, c2.opts, t3, n3, c2.opts.specialEasing[t3] || c2.opts.easing);
      return c2.tweens.push(r3), r3;
    }, stop: function(t3) {
      var n3 = 0, r3 = t3 ? c2.tweens.length : 0;
      if (i2) return this;
      for (i2 = true; n3 < r3; n3++) c2.tweens[n3].run(1);
      return t3 ? (s2.notifyWith(e2, [c2, 1, 0]), s2.resolveWith(e2, [c2, t3])) : s2.rejectWith(e2, [c2, t3]), this;
    } }), l2 = c2.props;
    for (Y(l2, c2.opts.specialEasing); o2 < a2; o2++) if (r2 = Q.prefilters[o2].call(c2, e2, l2, c2.opts)) return ye(r2.stop) && (Se._queueHooks(c2.elem, c2.opts.queue).stop = r2.stop.bind(r2)), r2;
    return Se.map(l2, V, c2), ye(c2.opts.start) && c2.opts.start.call(e2, c2), c2.progress(c2.opts.progress).done(c2.opts.done, c2.opts.complete).fail(c2.opts.fail).always(c2.opts.always), Se.fx.timer(Se.extend(u2, { elem: e2, anim: c2, queue: c2.opts.queue })), c2;
  }
  function K(e2) {
    return (e2.match(Me) || []).join(" ");
  }
  function Z(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function J(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(Me) || [];
  }
  function ee(e2, t2, n2, i2) {
    var o2;
    if (Array.isArray(t2)) Se.each(t2, function(t3, r2) {
      n2 || Bt.test(e2) ? i2(e2, r2) : ee(e2 + "[" + ("object" == typeof r2 && null != r2 ? t3 : "") + "]", r2, n2, i2);
    });
    else if (n2 || "object" !== r(t2)) i2(e2, t2);
    else for (o2 in t2) ee(e2 + "[" + o2 + "]", t2[o2], n2, i2);
  }
  function te(e2) {
    return function(t2, n2) {
      "string" != typeof t2 && (n2 = t2, t2 = "*");
      var r2, i2 = 0, o2 = t2.toLowerCase().match(Me) || [];
      if (ye(n2)) for (; r2 = o2[i2++]; ) "+" === r2[0] ? (r2 = r2.slice(1) || "*", (e2[r2] = e2[r2] || []).unshift(n2)) : (e2[r2] = e2[r2] || []).push(n2);
    };
  }
  function ne(e2, t2, n2, r2) {
    function i2(s2) {
      var u2;
      return o2[s2] = true, Se.each(e2[s2] || [], function(e3, s3) {
        var c2 = s3(t2, n2, r2);
        return "string" != typeof c2 || a2 || o2[c2] ? a2 ? !(u2 = c2) : void 0 : (t2.dataTypes.unshift(c2), i2(c2), false);
      }), u2;
    }
    var o2 = {}, a2 = e2 === en;
    return i2(t2.dataTypes[0]) || !o2["*"] && i2("*");
  }
  function re(e2, t2) {
    var n2, r2, i2 = Se.ajaxSettings.flatOptions || {};
    for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
    return r2 && Se.extend(true, e2, r2), e2;
  }
  function ie(e2, t2, n2) {
    for (var r2, i2, o2, a2, s2 = e2.contents, u2 = e2.dataTypes; "*" === u2[0]; ) u2.shift(), void 0 === r2 && (r2 = e2.mimeType || t2.getResponseHeader("Content-Type"));
    if (r2) {
      for (i2 in s2) if (s2[i2] && s2[i2].test(r2)) {
        u2.unshift(i2);
        break;
      }
    }
    if (u2[0] in n2) o2 = u2[0];
    else {
      for (i2 in n2) {
        if (!u2[0] || e2.converters[i2 + " " + u2[0]]) {
          o2 = i2;
          break;
        }
        a2 || (a2 = i2);
      }
      o2 = o2 || a2;
    }
    if (o2) return o2 !== u2[0] && u2.unshift(o2), n2[o2];
  }
  function oe(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, c2 = {}, l2 = e2.dataTypes.slice();
    if (l2[1]) for (a2 in e2.converters) c2[a2.toLowerCase()] = e2.converters[a2];
    for (o2 = l2.shift(); o2; ) if (e2.responseFields[o2] && (n2[e2.responseFields[o2]] = t2), !u2 && r2 && e2.dataFilter && (t2 = e2.dataFilter(t2, e2.dataType)), u2 = o2, o2 = l2.shift()) {
      if ("*" === o2) o2 = u2;
      else if ("*" !== u2 && u2 !== o2) {
        if (!(a2 = c2[u2 + " " + o2] || c2["* " + o2])) {
          for (i2 in c2) if ((s2 = i2.split(" "))[1] === o2 && (a2 = c2[u2 + " " + s2[0]] || c2["* " + s2[0]])) {
            true === a2 ? a2 = c2[i2] : true !== c2[i2] && (o2 = s2[0], l2.unshift(s2[1]));
            break;
          }
        }
        if (true !== a2) if (a2 && e2.throws) t2 = a2(t2);
        else try {
          t2 = a2(t2);
        } catch (e3) {
          return { state: "parsererror", error: a2 ? e3 : "No conversion from " + u2 + " to " + o2 };
        }
      }
    }
    return { state: "success", data: t2 };
  }
  var ae = [], se = Object.getPrototypeOf, ue = ae.slice, ce = ae.flat ? function(e2) {
    return ae.flat.call(e2);
  } : function(e2) {
    return ae.concat.apply([], e2);
  }, le = ae.push, fe = ae.indexOf, de = {}, pe = de.toString, he = de.hasOwnProperty, me = he.toString, ge = me.call(Object), ve = {}, ye = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, be = function(e2) {
    return null != e2 && e2 === e2.window;
  }, we = e.document, xe = { type: true, src: true, nonce: true, noModule: true }, Te = "3.7.0", ke = /HTML$/i, Se = function(e2, t2) {
    return new Se.fn.init(e2, t2);
  };
  Se.fn = Se.prototype = { jquery: Te, constructor: Se, length: 0, toArray: function() {
    return ue.call(this);
  }, get: function(e2) {
    return null == e2 ? ue.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = Se.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return Se.each(this, e2);
  }, map: function(e2) {
    return this.pushStack(Se.map(this, function(t2, n2) {
      return e2.call(t2, n2, t2);
    }));
  }, slice: function() {
    return this.pushStack(ue.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(Se.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(Se.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(n2 >= 0 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: le, sort: ae.sort, splice: ae.splice }, Se.extend = Se.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, c2 = false;
    for ("boolean" == typeof a2 && (c2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || ye(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (c2 && r2 && (Se.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || Se.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = Se.extend(c2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, Se.extend({ expando: "jQuery" + (Te + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== pe.call(e2)) && (!(t2 = se(e2)) || "function" == typeof (n2 = he.call(t2, "constructor") && t2.constructor) && me.call(n2) === ge);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2) return false;
    return true;
  }, globalEval: function(e2, t2, r2) {
    n(e2, { nonce: t2 && t2.nonce }, r2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (i(e2)) for (n2 = e2.length; r2 < n2 && false !== t2.call(e2[r2], r2, e2[r2]); r2++) ;
    else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    return e2;
  }, text: function(e2) {
    var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
    if (i2) {
      if (1 === i2 || 9 === i2 || 11 === i2) return e2.textContent;
      if (3 === i2 || 4 === i2) return e2.nodeValue;
    } else for (; t2 = e2[r2++]; ) n2 += Se.text(t2);
    return n2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (i(Object(e2)) ? Se.merge(n2, "string" == typeof e2 ? [e2] : e2) : le.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : fe.call(t2, e2, n2);
  }, isXMLDoc: function(e2) {
    var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
    return !ke.test(t2 || n2 && n2.nodeName || "HTML");
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, o2, a2 = 0, s2 = [];
    if (i(e2)) for (r2 = e2.length; a2 < r2; a2++) null != (o2 = t2(e2[a2], a2, n2)) && s2.push(o2);
    else for (a2 in e2) null != (o2 = t2(e2[a2], a2, n2)) && s2.push(o2);
    return ce(s2);
  }, guid: 1, support: ve }), "function" == typeof Symbol && (Se.fn[Symbol.iterator] = ae[Symbol.iterator]), Se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    de["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var Ee = ae.pop, Ce = ae.sort, je = ae.splice, Ae = "[\\x20\\t\\r\\n\\f]", Ne = new RegExp("^" + Ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ae + "+$", "g");
  Se.contains = function(e2, t2) {
    var n2 = t2 && t2.parentNode;
    return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
  };
  var De = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  Se.escapeSelector = function(e2) {
    return (e2 + "").replace(De, a);
  };
  var Le = we, Oe = le;
  !function() {
    function t2() {
      try {
        return D2.activeElement;
      } catch (e2) {
      }
    }
    function n2(e2, t3, r3, i3) {
      var o2, a3, s3, u3, c3, l3, p3, g3 = t3 && t3.ownerDocument, v3 = t3 ? t3.nodeType : 9;
      if (r3 = r3 || [], "string" != typeof e2 || !e2 || 1 !== v3 && 9 !== v3 && 11 !== v3) return r3;
      if (!i3 && (d2(t3), t3 = t3 || D2, O2)) {
        if (11 !== v3 && (c3 = re2.exec(e2))) if (o2 = c3[1]) {
          if (9 === v3) {
            if (!(s3 = t3.getElementById(o2))) return r3;
            if (s3.id === o2) return P2.call(r3, s3), r3;
          } else if (g3 && (s3 = g3.getElementById(o2)) && n2.contains(t3, s3) && s3.id === o2) return P2.call(r3, s3), r3;
        } else {
          if (c3[2]) return P2.apply(r3, t3.getElementsByTagName(e2)), r3;
          if ((o2 = c3[3]) && t3.getElementsByClassName) return P2.apply(r3, t3.getElementsByClassName(o2)), r3;
        }
        if (!(B2[e2 + " "] || _2 && _2.test(e2))) {
          if (p3 = e2, g3 = t3, 1 === v3 && (K2.test(e2) || Q2.test(e2))) {
            for ((g3 = ie2.test(e2) && f2(t3.parentNode) || t3) == t3 && ve.scope || ((u3 = t3.getAttribute("id")) ? u3 = Se.escapeSelector(u3) : t3.setAttribute("id", u3 = R2)), a3 = (l3 = h2(e2)).length; a3--; ) l3[a3] = (u3 ? "#" + u3 : ":scope") + " " + m2(l3[a3]);
            p3 = l3.join(",");
          }
          try {
            return P2.apply(r3, g3.querySelectorAll(p3)), r3;
          } catch (t4) {
            B2(e2, true);
          } finally {
            u3 === R2 && t3.removeAttribute("id");
          }
        }
      }
      return S2(e2.replace(Ne, "$1"), t3, r3, i3);
    }
    function r2() {
      function e2(n3, r3) {
        return t3.push(n3 + " ") > C2.cacheLength && delete e2[t3.shift()], e2[n3 + " "] = r3;
      }
      var t3 = [];
      return e2;
    }
    function i2(e2) {
      return e2[R2] = true, e2;
    }
    function a2(e2) {
      var t3 = D2.createElement("fieldset");
      try {
        return !!e2(t3);
      } catch (e3) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function s2(e2) {
      return function(t3) {
        return o(t3, "input") && t3.type === e2;
      };
    }
    function u2(e2) {
      return function(t3) {
        return (o(t3, "input") || o(t3, "button")) && t3.type === e2;
      };
    }
    function c2(e2) {
      return function(t3) {
        return "form" in t3 ? t3.parentNode && false === t3.disabled ? "label" in t3 ? "label" in t3.parentNode ? t3.parentNode.disabled === e2 : t3.disabled === e2 : t3.isDisabled === e2 || t3.isDisabled !== !e2 && le2(t3) === e2 : t3.disabled === e2 : "label" in t3 && t3.disabled === e2;
      };
    }
    function l2(e2) {
      return i2(function(t3) {
        return t3 = +t3, i2(function(n3, r3) {
          for (var i3, o2 = e2([], n3.length, t3), a3 = o2.length; a3--; ) n3[i3 = o2[a3]] && (n3[i3] = !(r3[i3] = n3[i3]));
        });
      });
    }
    function f2(e2) {
      return e2 && void 0 !== e2.getElementsByTagName && e2;
    }
    function d2(e2) {
      var t3, r3 = e2 ? e2.ownerDocument || e2 : Le;
      return r3 != D2 && 9 === r3.nodeType && r3.documentElement ? (L2 = (D2 = r3).documentElement, O2 = !Se.isXMLDoc(D2), q2 = L2.matches || L2.webkitMatchesSelector || L2.msMatchesSelector, Le != D2 && (t3 = D2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", ce2), ve.getById = a2(function(e3) {
        return L2.appendChild(e3).id = Se.expando, !D2.getElementsByName || !D2.getElementsByName(Se.expando).length;
      }), ve.disconnectedMatch = a2(function(e3) {
        return q2.call(e3, "*");
      }), ve.scope = a2(function() {
        return D2.querySelectorAll(":scope");
      }), ve.cssHas = a2(function() {
        try {
          return D2.querySelector(":has(*,:jqfake)"), false;
        } catch (e3) {
          return true;
        }
      }), ve.getById ? (C2.filter.ID = function(e3) {
        var t4 = e3.replace(oe2, se2);
        return function(e4) {
          return e4.getAttribute("id") === t4;
        };
      }, C2.find.ID = function(e3, t4) {
        if (void 0 !== t4.getElementById && O2) {
          var n3 = t4.getElementById(e3);
          return n3 ? [n3] : [];
        }
      }) : (C2.filter.ID = function(e3) {
        var t4 = e3.replace(oe2, se2);
        return function(e4) {
          var n3 = void 0 !== e4.getAttributeNode && e4.getAttributeNode("id");
          return n3 && n3.value === t4;
        };
      }, C2.find.ID = function(e3, t4) {
        if (void 0 !== t4.getElementById && O2) {
          var n3, r4, i3, o2 = t4.getElementById(e3);
          if (o2) {
            if ((n3 = o2.getAttributeNode("id")) && n3.value === e3) return [o2];
            for (i3 = t4.getElementsByName(e3), r4 = 0; o2 = i3[r4++]; ) if ((n3 = o2.getAttributeNode("id")) && n3.value === e3) return [o2];
          }
          return [];
        }
      }), C2.find.TAG = function(e3, t4) {
        return void 0 !== t4.getElementsByTagName ? t4.getElementsByTagName(e3) : t4.querySelectorAll(e3);
      }, C2.find.CLASS = function(e3, t4) {
        if (void 0 !== t4.getElementsByClassName && O2) return t4.getElementsByClassName(e3);
      }, _2 = [], a2(function(e3) {
        var t4;
        L2.appendChild(e3).innerHTML = "<a id='" + R2 + "' href='' disabled='disabled'></a><select id='" + R2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e3.querySelectorAll("[selected]").length || _2.push("\\[" + Ae + "*(?:value|" + z2 + ")"), e3.querySelectorAll("[id~=" + R2 + "-]").length || _2.push("~="), e3.querySelectorAll("a#" + R2 + "+*").length || _2.push(".#.+[+~]"), e3.querySelectorAll(":checked").length || _2.push(":checked"), (t4 = D2.createElement("input")).setAttribute("type", "hidden"), e3.appendChild(t4).setAttribute("name", "D"), L2.appendChild(e3).disabled = true, 2 !== e3.querySelectorAll(":disabled").length && _2.push(":enabled", ":disabled"), (t4 = D2.createElement("input")).setAttribute("name", ""), e3.appendChild(t4), e3.querySelectorAll("[name='']").length || _2.push("\\[" + Ae + "*name" + Ae + "*=" + Ae + `*(?:''|"")`);
      }), ve.cssHas || _2.push(":has"), _2 = _2.length && new RegExp(_2.join("|")), W2 = function(e3, t4) {
        if (e3 === t4) return N2 = true, 0;
        var r4 = !e3.compareDocumentPosition - !t4.compareDocumentPosition;
        return r4 || (1 & (r4 = (e3.ownerDocument || e3) == (t4.ownerDocument || t4) ? e3.compareDocumentPosition(t4) : 1) || !ve.sortDetached && t4.compareDocumentPosition(e3) === r4 ? e3 === D2 || e3.ownerDocument == Le && n2.contains(Le, e3) ? -1 : t4 === D2 || t4.ownerDocument == Le && n2.contains(Le, t4) ? 1 : A2 ? fe.call(A2, e3) - fe.call(A2, t4) : 0 : 4 & r4 ? -1 : 1);
      }, D2) : D2;
    }
    function p2() {
    }
    function h2(e2, t3) {
      var r3, i3, o2, a3, s3, u3, c3, l3 = H2[e2 + " "];
      if (l3) return t3 ? 0 : l3.slice(0);
      for (s3 = e2, u3 = [], c3 = C2.preFilter; s3; ) {
        for (a3 in r3 && !(i3 = Y2.exec(s3)) || (i3 && (s3 = s3.slice(i3[0].length) || s3), u3.push(o2 = [])), r3 = false, (i3 = Q2.exec(s3)) && (r3 = i3.shift(), o2.push({ value: r3, type: i3[0].replace(Ne, " ") }), s3 = s3.slice(r3.length)), C2.filter) !(i3 = ee2[a3].exec(s3)) || c3[a3] && !(i3 = c3[a3](i3)) || (r3 = i3.shift(), o2.push({ value: r3, type: a3, matches: i3 }), s3 = s3.slice(r3.length));
        if (!r3) break;
      }
      return t3 ? s3.length : s3 ? n2.error(e2) : H2(e2, u3).slice(0);
    }
    function m2(e2) {
      for (var t3 = 0, n3 = e2.length, r3 = ""; t3 < n3; t3++) r3 += e2[t3].value;
      return r3;
    }
    function g2(e2, t3, n3) {
      var r3 = t3.dir, i3 = t3.next, a3 = i3 || r3, s3 = n3 && "parentNode" === a3, u3 = $3++;
      return t3.first ? function(t4, n4, i4) {
        for (; t4 = t4[r3]; ) if (1 === t4.nodeType || s3) return e2(t4, n4, i4);
        return false;
      } : function(t4, n4, c3) {
        var l3, f3, d3 = [I2, u3];
        if (c3) {
          for (; t4 = t4[r3]; ) if ((1 === t4.nodeType || s3) && e2(t4, n4, c3)) return true;
        } else for (; t4 = t4[r3]; ) if (1 === t4.nodeType || s3) if (f3 = t4[R2] || (t4[R2] = {}), i3 && o(t4, i3)) t4 = t4[r3] || t4;
        else {
          if ((l3 = f3[a3]) && l3[0] === I2 && l3[1] === u3) return d3[2] = l3[2];
          if (f3[a3] = d3, d3[2] = e2(t4, n4, c3)) return true;
        }
        return false;
      };
    }
    function v2(e2) {
      return e2.length > 1 ? function(t3, n3, r3) {
        for (var i3 = e2.length; i3--; ) if (!e2[i3](t3, n3, r3)) return false;
        return true;
      } : e2[0];
    }
    function y2(e2, t3, r3) {
      for (var i3 = 0, o2 = t3.length; i3 < o2; i3++) n2(e2, t3[i3], r3);
      return r3;
    }
    function b2(e2, t3, n3, r3, i3) {
      for (var o2, a3 = [], s3 = 0, u3 = e2.length, c3 = null != t3; s3 < u3; s3++) (o2 = e2[s3]) && (n3 && !n3(o2, r3, i3) || (a3.push(o2), c3 && t3.push(s3)));
      return a3;
    }
    function w2(e2, t3, n3, r3, o2, a3) {
      return r3 && !r3[R2] && (r3 = w2(r3)), o2 && !o2[R2] && (o2 = w2(o2, a3)), i2(function(i3, a4, s3, u3) {
        var c3, l3, f3, d3, p3 = [], h3 = [], m3 = a4.length, g3 = i3 || y2(t3 || "*", s3.nodeType ? [s3] : s3, []), v3 = !e2 || !i3 && t3 ? g3 : b2(g3, p3, e2, s3, u3);
        if (n3 ? n3(v3, d3 = o2 || (i3 ? e2 : m3 || r3) ? [] : a4, s3, u3) : d3 = v3, r3) for (c3 = b2(d3, h3), r3(c3, [], s3, u3), l3 = c3.length; l3--; ) (f3 = c3[l3]) && (d3[h3[l3]] = !(v3[h3[l3]] = f3));
        if (i3) {
          if (o2 || e2) {
            if (o2) {
              for (c3 = [], l3 = d3.length; l3--; ) (f3 = d3[l3]) && c3.push(v3[l3] = f3);
              o2(null, d3 = [], c3, u3);
            }
            for (l3 = d3.length; l3--; ) (f3 = d3[l3]) && (c3 = o2 ? fe.call(i3, f3) : p3[l3]) > -1 && (i3[c3] = !(a4[c3] = f3));
          }
        } else d3 = b2(d3 === a4 ? d3.splice(m3, d3.length) : d3), o2 ? o2(null, a4, d3, u3) : P2.apply(a4, d3);
      });
    }
    function x2(e2) {
      for (var t3, n3, r3, i3 = e2.length, o2 = C2.relative[e2[0].type], a3 = o2 || C2.relative[" "], s3 = o2 ? 1 : 0, u3 = g2(function(e3) {
        return e3 === t3;
      }, a3, true), c3 = g2(function(e3) {
        return fe.call(t3, e3) > -1;
      }, a3, true), l3 = [function(e3, n4, r4) {
        var i4 = !o2 && (r4 || n4 != j2) || ((t3 = n4).nodeType ? u3(e3, n4, r4) : c3(e3, n4, r4));
        return t3 = null, i4;
      }]; s3 < i3; s3++) if (n3 = C2.relative[e2[s3].type]) l3 = [g2(v2(l3), n3)];
      else {
        if ((n3 = C2.filter[e2[s3].type].apply(null, e2[s3].matches))[R2]) {
          for (r3 = ++s3; r3 < i3 && !C2.relative[e2[r3].type]; r3++) ;
          return w2(s3 > 1 && v2(l3), s3 > 1 && m2(e2.slice(0, s3 - 1).concat({ value: " " === e2[s3 - 2].type ? "*" : "" })).replace(Ne, "$1"), n3, s3 < r3 && x2(e2.slice(s3, r3)), r3 < i3 && x2(e2 = e2.slice(r3)), r3 < i3 && m2(e2));
        }
        l3.push(n3);
      }
      return v2(l3);
    }
    function T2(e2, t3) {
      var n3 = t3.length > 0, r3 = e2.length > 0, o2 = function(i3, o3, a3, s3, u3) {
        var c3, l3, f3, p3 = 0, h3 = "0", m3 = i3 && [], g3 = [], v3 = j2, y3 = i3 || r3 && C2.find.TAG("*", u3), w3 = I2 += null == v3 ? 1 : Math.random() || 0.1, x3 = y3.length;
        for (u3 && (j2 = o3 == D2 || o3 || u3); h3 !== x3 && null != (c3 = y3[h3]); h3++) {
          if (r3 && c3) {
            for (l3 = 0, o3 || c3.ownerDocument == D2 || (d2(c3), a3 = !O2); f3 = e2[l3++]; ) if (f3(c3, o3 || D2, a3)) {
              P2.call(s3, c3);
              break;
            }
            u3 && (I2 = w3);
          }
          n3 && ((c3 = !f3 && c3) && p3--, i3 && m3.push(c3));
        }
        if (p3 += h3, n3 && h3 !== p3) {
          for (l3 = 0; f3 = t3[l3++]; ) f3(m3, g3, o3, a3);
          if (i3) {
            if (p3 > 0) for (; h3--; ) m3[h3] || g3[h3] || (g3[h3] = Ee.call(s3));
            g3 = b2(g3);
          }
          P2.apply(s3, g3), u3 && !i3 && g3.length > 0 && p3 + t3.length > 1 && Se.uniqueSort(s3);
        }
        return u3 && (I2 = w3, j2 = v3), m3;
      };
      return n3 ? i2(o2) : o2;
    }
    function k2(e2, t3) {
      var n3, r3 = [], i3 = [], o2 = M2[e2 + " "];
      if (!o2) {
        for (t3 || (t3 = h2(e2)), n3 = t3.length; n3--; ) (o2 = x2(t3[n3]))[R2] ? r3.push(o2) : i3.push(o2);
        (o2 = M2(e2, T2(i3, r3))).selector = e2;
      }
      return o2;
    }
    function S2(e2, t3, n3, r3) {
      var i3, o2, a3, s3, u3, c3 = "function" == typeof e2 && e2, l3 = !r3 && h2(e2 = c3.selector || e2);
      if (n3 = n3 || [], 1 === l3.length) {
        if ((o2 = l3[0] = l3[0].slice(0)).length > 2 && "ID" === (a3 = o2[0]).type && 9 === t3.nodeType && O2 && C2.relative[o2[1].type]) {
          if (!(t3 = (C2.find.ID(a3.matches[0].replace(oe2, se2), t3) || [])[0])) return n3;
          c3 && (t3 = t3.parentNode), e2 = e2.slice(o2.shift().value.length);
        }
        for (i3 = ee2.needsContext.test(e2) ? 0 : o2.length; i3-- && (a3 = o2[i3], !C2.relative[s3 = a3.type]); ) if ((u3 = C2.find[s3]) && (r3 = u3(a3.matches[0].replace(oe2, se2), ie2.test(o2[0].type) && f2(t3.parentNode) || t3))) {
          if (o2.splice(i3, 1), !(e2 = r3.length && m2(o2))) return P2.apply(n3, r3), n3;
          break;
        }
      }
      return (c3 || k2(e2, l3))(r3, t3, !O2, n3, !t3 || ie2.test(e2) && f2(t3.parentNode) || t3), n3;
    }
    var E2, C2, j2, A2, N2, D2, L2, O2, _2, q2, P2 = Oe, R2 = Se.expando, I2 = 0, $3 = 0, F2 = r2(), H2 = r2(), M2 = r2(), B2 = r2(), W2 = function(e2, t3) {
      return e2 === t3 && (N2 = true), 0;
    }, z2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", U2 = "(?:\\\\[\\da-fA-F]{1,6}" + Ae + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", G2 = "\\[" + Ae + "*(" + U2 + ")(?:" + Ae + "*([*^$|!~]?=)" + Ae + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + U2 + "))|)" + Ae + "*\\]", V2 = ":(" + U2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + G2 + ")*)|.*)\\)|)", X2 = new RegExp(Ae + "+", "g"), Y2 = new RegExp("^" + Ae + "*," + Ae + "*"), Q2 = new RegExp("^" + Ae + "*([>+~]|" + Ae + ")" + Ae + "*"), K2 = new RegExp(Ae + "|>"), Z2 = new RegExp(V2), J2 = new RegExp("^" + U2 + "$"), ee2 = { ID: new RegExp("^#(" + U2 + ")"), CLASS: new RegExp("^\\.(" + U2 + ")"), TAG: new RegExp("^(" + U2 + "|[*])"), ATTR: new RegExp("^" + G2), PSEUDO: new RegExp("^" + V2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Ae + "*(even|odd|(([+-]|)(\\d*)n|)" + Ae + "*(?:([+-]|)" + Ae + "*(\\d+)|))" + Ae + "*\\)|)", "i"), bool: new RegExp("^(?:" + z2 + ")$", "i"), needsContext: new RegExp("^" + Ae + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Ae + "*((?:-\\d)?\\d*)" + Ae + "*\\)|)(?=[^-]|$)", "i") }, te2 = /^(?:input|select|textarea|button)$/i, ne2 = /^h\d$/i, re2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ie2 = /[+~]/, oe2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + Ae + "?|\\\\([^\\r\\n\\f])", "g"), se2 = function(e2, t3) {
      var n3 = "0x" + e2.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, ce2 = function() {
      d2();
    }, le2 = g2(function(e2) {
      return true === e2.disabled && o(e2, "fieldset");
    }, { dir: "parentNode", next: "legend" });
    try {
      P2.apply(ae = ue.call(Le.childNodes), Le.childNodes), ae[Le.childNodes.length].nodeType;
    } catch (e2) {
      P2 = { apply: function(e3, t3) {
        Oe.apply(e3, ue.call(t3));
      }, call: function(e3) {
        Oe.apply(e3, ue.call(arguments, 1));
      } };
    }
    for (E2 in n2.matches = function(e2, t3) {
      return n2(e2, null, null, t3);
    }, n2.matchesSelector = function(e2, t3) {
      if (d2(e2), O2 && !B2[t3 + " "] && (!_2 || !_2.test(t3))) try {
        var r3 = q2.call(e2, t3);
        if (r3 || ve.disconnectedMatch || e2.document && 11 !== e2.document.nodeType) return r3;
      } catch (e3) {
        B2(t3, true);
      }
      return n2(t3, D2, null, [e2]).length > 0;
    }, n2.contains = function(e2, t3) {
      return (e2.ownerDocument || e2) != D2 && d2(e2), Se.contains(e2, t3);
    }, n2.attr = function(e2, t3) {
      (e2.ownerDocument || e2) != D2 && d2(e2);
      var n3 = C2.attrHandle[t3.toLowerCase()], r3 = n3 && he.call(C2.attrHandle, t3.toLowerCase()) ? n3(e2, t3, !O2) : void 0;
      return void 0 !== r3 ? r3 : e2.getAttribute(t3);
    }, n2.error = function(e2) {
      throw new Error("Syntax error, unrecognized expression: " + e2);
    }, Se.uniqueSort = function(e2) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (N2 = !ve.sortStable, A2 = !ve.sortStable && ue.call(e2, 0), Ce.call(e2, W2), N2) {
        for (; t3 = e2[i3++]; ) t3 === e2[i3] && (r3 = n3.push(i3));
        for (; r3--; ) je.call(e2, n3[r3], 1);
      }
      return A2 = null, e2;
    }, Se.fn.uniqueSort = function() {
      return this.pushStack(Se.uniqueSort(ue.apply(this)));
    }, C2 = Se.expr = { cacheLength: 50, createPseudo: i2, match: ee2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e2) {
      return e2[1] = e2[1].replace(oe2, se2), e2[3] = (e2[3] || e2[4] || e2[5] || "").replace(oe2, se2), "~=" === e2[2] && (e2[3] = " " + e2[3] + " "), e2.slice(0, 4);
    }, CHILD: function(e2) {
      return e2[1] = e2[1].toLowerCase(), "nth" === e2[1].slice(0, 3) ? (e2[3] || n2.error(e2[0]), e2[4] = +(e2[4] ? e2[5] + (e2[6] || 1) : 2 * ("even" === e2[3] || "odd" === e2[3])), e2[5] = +(e2[7] + e2[8] || "odd" === e2[3])) : e2[3] && n2.error(e2[0]), e2;
    }, PSEUDO: function(e2) {
      var t3, n3 = !e2[6] && e2[2];
      return ee2.CHILD.test(e2[0]) ? null : (e2[3] ? e2[2] = e2[4] || e2[5] || "" : n3 && Z2.test(n3) && (t3 = h2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e2[0] = e2[0].slice(0, t3), e2[2] = n3.slice(0, t3)), e2.slice(0, 3));
    } }, filter: { TAG: function(e2) {
      var t3 = e2.replace(oe2, se2).toLowerCase();
      return "*" === e2 ? function() {
        return true;
      } : function(e3) {
        return o(e3, t3);
      };
    }, CLASS: function(e2) {
      var t3 = F2[e2 + " "];
      return t3 || (t3 = new RegExp("(^|" + Ae + ")" + e2 + "(" + Ae + "|$)")) && F2(e2, function(e3) {
        return t3.test("string" == typeof e3.className && e3.className || void 0 !== e3.getAttribute && e3.getAttribute("class") || "");
      });
    }, ATTR: function(e2, t3, r3) {
      return function(i3) {
        var o2 = n2.attr(i3, e2);
        return null == o2 ? "!=" === t3 : !t3 || (o2 += "", "=" === t3 ? o2 === r3 : "!=" === t3 ? o2 !== r3 : "^=" === t3 ? r3 && 0 === o2.indexOf(r3) : "*=" === t3 ? r3 && o2.indexOf(r3) > -1 : "$=" === t3 ? r3 && o2.slice(-r3.length) === r3 : "~=" === t3 ? (" " + o2.replace(X2, " ") + " ").indexOf(r3) > -1 : "|=" === t3 && (o2 === r3 || o2.slice(0, r3.length + 1) === r3 + "-"));
      };
    }, CHILD: function(e2, t3, n3, r3, i3) {
      var a3 = "nth" !== e2.slice(0, 3), s3 = "last" !== e2.slice(-4), u3 = "of-type" === t3;
      return 1 === r3 && 0 === i3 ? function(e3) {
        return !!e3.parentNode;
      } : function(t4, n4, c3) {
        var l3, f3, d3, p3, h3, m3 = a3 !== s3 ? "nextSibling" : "previousSibling", g3 = t4.parentNode, v3 = u3 && t4.nodeName.toLowerCase(), y3 = !c3 && !u3, b3 = false;
        if (g3) {
          if (a3) {
            for (; m3; ) {
              for (d3 = t4; d3 = d3[m3]; ) if (u3 ? o(d3, v3) : 1 === d3.nodeType) return false;
              h3 = m3 = "only" === e2 && !h3 && "nextSibling";
            }
            return true;
          }
          if (h3 = [s3 ? g3.firstChild : g3.lastChild], s3 && y3) {
            for (b3 = (p3 = (l3 = (f3 = g3[R2] || (g3[R2] = {}))[e2] || [])[0] === I2 && l3[1]) && l3[2], d3 = p3 && g3.childNodes[p3]; d3 = ++p3 && d3 && d3[m3] || (b3 = p3 = 0) || h3.pop(); ) if (1 === d3.nodeType && ++b3 && d3 === t4) {
              f3[e2] = [I2, p3, b3];
              break;
            }
          } else if (y3 && (b3 = p3 = (l3 = (f3 = t4[R2] || (t4[R2] = {}))[e2] || [])[0] === I2 && l3[1]), false === b3) for (; (d3 = ++p3 && d3 && d3[m3] || (b3 = p3 = 0) || h3.pop()) && (!(u3 ? o(d3, v3) : 1 === d3.nodeType) || !++b3 || (y3 && ((f3 = d3[R2] || (d3[R2] = {}))[e2] = [I2, b3]), d3 !== t4)); ) ;
          return (b3 -= i3) === r3 || b3 % r3 == 0 && b3 / r3 >= 0;
        }
      };
    }, PSEUDO: function(e2, t3) {
      var r3, o2 = C2.pseudos[e2] || C2.setFilters[e2.toLowerCase()] || n2.error("unsupported pseudo: " + e2);
      return o2[R2] ? o2(t3) : o2.length > 1 ? (r3 = [e2, e2, "", t3], C2.setFilters.hasOwnProperty(e2.toLowerCase()) ? i2(function(e3, n3) {
        for (var r4, i3 = o2(e3, t3), a3 = i3.length; a3--; ) e3[r4 = fe.call(e3, i3[a3])] = !(n3[r4] = i3[a3]);
      }) : function(e3) {
        return o2(e3, 0, r3);
      }) : o2;
    } }, pseudos: { not: i2(function(e2) {
      var t3 = [], n3 = [], r3 = k2(e2.replace(Ne, "$1"));
      return r3[R2] ? i2(function(e3, t4, n4, i3) {
        for (var o2, a3 = r3(e3, null, i3, []), s3 = e3.length; s3--; ) (o2 = a3[s3]) && (e3[s3] = !(t4[s3] = o2));
      }) : function(e3, i3, o2) {
        return t3[0] = e3, r3(t3, null, o2, n3), t3[0] = null, !n3.pop();
      };
    }), has: i2(function(e2) {
      return function(t3) {
        return n2(e2, t3).length > 0;
      };
    }), contains: i2(function(e2) {
      return e2 = e2.replace(oe2, se2), function(t3) {
        return (t3.textContent || Se.text(t3)).indexOf(e2) > -1;
      };
    }), lang: i2(function(e2) {
      return J2.test(e2 || "") || n2.error("unsupported lang: " + e2), e2 = e2.replace(oe2, se2).toLowerCase(), function(t3) {
        var n3;
        do {
          if (n3 = O2 ? t3.lang : t3.getAttribute("xml:lang") || t3.getAttribute("lang")) return (n3 = n3.toLowerCase()) === e2 || 0 === n3.indexOf(e2 + "-");
        } while ((t3 = t3.parentNode) && 1 === t3.nodeType);
        return false;
      };
    }), target: function(t3) {
      var n3 = e.location && e.location.hash;
      return n3 && n3.slice(1) === t3.id;
    }, root: function(e2) {
      return e2 === L2;
    }, focus: function(e2) {
      return e2 === t2() && D2.hasFocus() && !!(e2.type || e2.href || ~e2.tabIndex);
    }, enabled: c2(false), disabled: c2(true), checked: function(e2) {
      return o(e2, "input") && !!e2.checked || o(e2, "option") && !!e2.selected;
    }, selected: function(e2) {
      return e2.parentNode && e2.parentNode.selectedIndex, true === e2.selected;
    }, empty: function(e2) {
      for (e2 = e2.firstChild; e2; e2 = e2.nextSibling) if (e2.nodeType < 6) return false;
      return true;
    }, parent: function(e2) {
      return !C2.pseudos.empty(e2);
    }, header: function(e2) {
      return ne2.test(e2.nodeName);
    }, input: function(e2) {
      return te2.test(e2.nodeName);
    }, button: function(e2) {
      return o(e2, "input") && "button" === e2.type || o(e2, "button");
    }, text: function(e2) {
      var t3;
      return o(e2, "input") && "text" === e2.type && (null == (t3 = e2.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: l2(function() {
      return [0];
    }), last: l2(function(e2, t3) {
      return [t3 - 1];
    }), eq: l2(function(e2, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: l2(function(e2, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2) e2.push(n3);
      return e2;
    }), odd: l2(function(e2, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2) e2.push(n3);
      return e2;
    }), lt: l2(function(e2, t3, n3) {
      var r3;
      for (r3 = n3 < 0 ? n3 + t3 : n3 > t3 ? t3 : n3; --r3 >= 0; ) e2.push(r3);
      return e2;
    }), gt: l2(function(e2, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e2.push(r3);
      return e2;
    }) } }, C2.pseudos.nth = C2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) C2.pseudos[E2] = s2(E2);
    for (E2 in { submit: true, reset: true }) C2.pseudos[E2] = u2(E2);
    p2.prototype = C2.filters = C2.pseudos, C2.setFilters = new p2(), ve.sortStable = R2.split("").sort(W2).join("") === R2, d2(), ve.sortDetached = a2(function(e2) {
      return 1 & e2.compareDocumentPosition(D2.createElement("fieldset"));
    }), Se.find = n2, Se.expr[":"] = Se.expr.pseudos, Se.unique = Se.uniqueSort, n2.compile = k2, n2.select = S2, n2.setDocument = d2, n2.escape = Se.escapeSelector, n2.getText = Se.text, n2.isXML = Se.isXMLDoc, n2.selectors = Se.expr, n2.support = Se.support, n2.uniqueSort = Se.uniqueSort;
  }();
  var _e = function(e2, t2, n2) {
    for (var r2 = [], i2 = void 0 !== n2; (e2 = e2[t2]) && 9 !== e2.nodeType; ) if (1 === e2.nodeType) {
      if (i2 && Se(e2).is(n2)) break;
      r2.push(e2);
    }
    return r2;
  }, qe = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, Pe = Se.expr.match.needsContext, Re = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  Se.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? Se.find.matchesSelector(r2, e2) ? [r2] : [] : Se.find.matches(e2, Se.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, Se.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2) return this.pushStack(Se(e2).filter(function() {
      for (t2 = 0; t2 < r2; t2++) if (Se.contains(i2[t2], this)) return true;
    }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) Se.find(e2, i2[t2], n2);
    return r2 > 1 ? Se.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(s(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(s(this, e2 || [], true));
  }, is: function(e2) {
    return !!s(this, "string" == typeof e2 && Pe.test(e2) ? Se(e2) : e2 || [], false).length;
  } });
  var Ie, $e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (Se.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2) return this;
    if (n2 = n2 || Ie, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && e2.length >= 3 ? [null, e2, null] : $e.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof Se ? t2[0] : t2, Se.merge(this, Se.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : we, true)), Re.test(r2[1]) && Se.isPlainObject(t2)) for (r2 in t2) ye(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = we.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : ye(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(Se) : Se.makeArray(e2, this);
  }).prototype = Se.fn, Ie = Se(we);
  var Fe = /^(?:parents|prev(?:Until|All))/, He = { children: true, contents: true, next: true, prev: true };
  Se.fn.extend({ has: function(e2) {
    var t2 = Se(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++) if (Se.contains(this, t2[e3])) return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && Se(e2);
    if (!Pe.test(e2)) {
      for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? a2.index(n2) > -1 : 1 === n2.nodeType && Se.find.matchesSelector(n2, e2))) {
        o2.push(n2);
        break;
      }
    }
    return this.pushStack(o2.length > 1 ? Se.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? fe.call(Se(e2), this[0]) : fe.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(Se.uniqueSort(Se.merge(this.get(), Se(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), Se.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return _e(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return _e(e2, "parentNode", n2);
  }, next: function(e2) {
    return u(e2, "nextSibling");
  }, prev: function(e2) {
    return u(e2, "previousSibling");
  }, nextAll: function(e2) {
    return _e(e2, "nextSibling");
  }, prevAll: function(e2) {
    return _e(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return _e(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return _e(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return qe((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return qe(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && se(e2.contentDocument) ? e2.contentDocument : (o(e2, "template") && (e2 = e2.content || e2), Se.merge([], e2.childNodes));
  } }, function(e2, t2) {
    Se.fn[e2] = function(n2, r2) {
      var i2 = Se.map(this, t2, n2);
      return "Until" !== e2.slice(-5) && (r2 = n2), r2 && "string" == typeof r2 && (i2 = Se.filter(r2, i2)), this.length > 1 && (He[e2] || Se.uniqueSort(i2), Fe.test(e2) && i2.reverse()), this.pushStack(i2);
    };
  });
  var Me = /[^\x20\t\r\n\f]+/g;
  Se.Callbacks = function(e2) {
    e2 = "string" == typeof e2 ? c(e2) : Se.extend({}, e2);
    var t2, n2, i2, o2, a2 = [], s2 = [], u2 = -1, l2 = function() {
      for (o2 = o2 || e2.once, i2 = t2 = true; s2.length; u2 = -1) for (n2 = s2.shift(); ++u2 < a2.length; ) false === a2[u2].apply(n2[0], n2[1]) && e2.stopOnFalse && (u2 = a2.length, n2 = false);
      e2.memory || (n2 = false), t2 = false, o2 && (a2 = n2 ? [] : "");
    }, f2 = { add: function() {
      return a2 && (n2 && !t2 && (u2 = a2.length - 1, s2.push(n2)), function t3(n3) {
        Se.each(n3, function(n4, i3) {
          ye(i3) ? e2.unique && f2.has(i3) || a2.push(i3) : i3 && i3.length && "string" !== r(i3) && t3(i3);
        });
      }(arguments), n2 && !t2 && l2()), this;
    }, remove: function() {
      return Se.each(arguments, function(e3, t3) {
        for (var n3; (n3 = Se.inArray(t3, a2, n3)) > -1; ) a2.splice(n3, 1), n3 <= u2 && u2--;
      }), this;
    }, has: function(e3) {
      return e3 ? Se.inArray(e3, a2) > -1 : a2.length > 0;
    }, empty: function() {
      return a2 && (a2 = []), this;
    }, disable: function() {
      return o2 = s2 = [], a2 = n2 = "", this;
    }, disabled: function() {
      return !a2;
    }, lock: function() {
      return o2 = s2 = [], n2 || t2 || (a2 = n2 = ""), this;
    }, locked: function() {
      return !!o2;
    }, fireWith: function(e3, n3) {
      return o2 || (n3 = [e3, (n3 = n3 || []).slice ? n3.slice() : n3], s2.push(n3), t2 || l2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!i2;
    } };
    return f2;
  }, Se.extend({ Deferred: function(t2) {
    var n2 = [["notify", "progress", Se.Callbacks("memory"), Se.Callbacks("memory"), 2], ["resolve", "done", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 1, "rejected"]], r2 = "pending", i2 = { state: function() {
      return r2;
    }, always: function() {
      return o2.done(arguments).fail(arguments), this;
    }, catch: function(e2) {
      return i2.then(null, e2);
    }, pipe: function() {
      var e2 = arguments;
      return Se.Deferred(function(t3) {
        Se.each(n2, function(n3, r3) {
          var i3 = ye(e2[r3[4]]) && e2[r3[4]];
          o2[r3[1]](function() {
            var e3 = i3 && i3.apply(this, arguments);
            e3 && ye(e3.promise) ? e3.promise().progress(t3.notify).done(t3.resolve).fail(t3.reject) : t3[r3[0] + "With"](this, i3 ? [e3] : arguments);
          });
        }), e2 = null;
      }).promise();
    }, then: function(t3, r3, i3) {
      function o3(t4, n3, r4, i4) {
        return function() {
          var s2 = this, u2 = arguments, c2 = function() {
            var e2, c3;
            if (!(t4 < a2)) {
              if ((e2 = r4.apply(s2, u2)) === n3.promise()) throw new TypeError("Thenable self-resolution");
              c3 = e2 && ("object" == typeof e2 || "function" == typeof e2) && e2.then, ye(c3) ? i4 ? c3.call(e2, o3(a2, n3, l, i4), o3(a2, n3, f, i4)) : (a2++, c3.call(e2, o3(a2, n3, l, i4), o3(a2, n3, f, i4), o3(a2, n3, l, n3.notifyWith))) : (r4 !== l && (s2 = void 0, u2 = [e2]), (i4 || n3.resolveWith)(s2, u2));
            }
          }, d2 = i4 ? c2 : function() {
            try {
              c2();
            } catch (e2) {
              Se.Deferred.exceptionHook && Se.Deferred.exceptionHook(e2, d2.error), t4 + 1 >= a2 && (r4 !== f && (s2 = void 0, u2 = [e2]), n3.rejectWith(s2, u2));
            }
          };
          t4 ? d2() : (Se.Deferred.getErrorHook ? d2.error = Se.Deferred.getErrorHook() : Se.Deferred.getStackHook && (d2.error = Se.Deferred.getStackHook()), e.setTimeout(d2));
        };
      }
      var a2 = 0;
      return Se.Deferred(function(e2) {
        n2[0][3].add(o3(0, e2, ye(i3) ? i3 : l, e2.notifyWith)), n2[1][3].add(o3(0, e2, ye(t3) ? t3 : l)), n2[2][3].add(o3(0, e2, ye(r3) ? r3 : f));
      }).promise();
    }, promise: function(e2) {
      return null != e2 ? Se.extend(e2, i2) : i2;
    } }, o2 = {};
    return Se.each(n2, function(e2, t3) {
      var a2 = t3[2], s2 = t3[5];
      i2[t3[1]] = a2.add, s2 && a2.add(function() {
        r2 = s2;
      }, n2[3 - e2][2].disable, n2[3 - e2][3].disable, n2[0][2].lock, n2[0][3].lock), a2.add(t3[3].fire), o2[t3[0]] = function() {
        return o2[t3[0] + "With"](this === o2 ? void 0 : this, arguments), this;
      }, o2[t3[0] + "With"] = a2.fireWith;
    }), i2.promise(o2), t2 && t2.call(o2, o2), o2;
  }, when: function(e2) {
    var t2 = arguments.length, n2 = t2, r2 = Array(n2), i2 = ue.call(arguments), o2 = Se.Deferred(), a2 = function(e3) {
      return function(n3) {
        r2[e3] = this, i2[e3] = arguments.length > 1 ? ue.call(arguments) : n3, --t2 || o2.resolveWith(r2, i2);
      };
    };
    if (t2 <= 1 && (d(e2, o2.done(a2(n2)).resolve, o2.reject, !t2), "pending" === o2.state() || ye(i2[n2] && i2[n2].then))) return o2.then();
    for (; n2--; ) d(i2[n2], a2(n2), o2.reject);
    return o2.promise();
  } });
  var Be = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  Se.Deferred.exceptionHook = function(t2, n2) {
    e.console && e.console.warn && t2 && Be.test(t2.name) && e.console.warn("jQuery.Deferred exception: " + t2.message, t2.stack, n2);
  }, Se.readyException = function(t2) {
    e.setTimeout(function() {
      throw t2;
    });
  };
  var We = Se.Deferred();
  Se.fn.ready = function(e2) {
    return We.then(e2).catch(function(e3) {
      Se.readyException(e3);
    }), this;
  }, Se.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --Se.readyWait : Se.isReady) || (Se.isReady = true, true !== e2 && --Se.readyWait > 0 || We.resolveWith(we, [Se]));
  } }), Se.ready.then = We.then, "complete" === we.readyState || "loading" !== we.readyState && !we.documentElement.doScroll ? e.setTimeout(Se.ready) : (we.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));
  var ze = function(e2, t2, n2, i2, o2, a2, s2) {
    var u2 = 0, c2 = e2.length, l2 = null == n2;
    if ("object" === r(n2)) for (u2 in o2 = true, n2) ze(e2, t2, u2, n2[u2], true, a2, s2);
    else if (void 0 !== i2 && (o2 = true, ye(i2) || (s2 = true), l2 && (s2 ? (t2.call(e2, i2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(Se(e3), n3);
    })), t2)) for (; u2 < c2; u2++) t2(e2[u2], n2, s2 ? i2 : i2.call(e2[u2], u2, t2(e2[u2], n2)));
    return o2 ? e2 : l2 ? t2.call(e2) : c2 ? t2(e2[0], n2) : a2;
  }, Ue = /^-ms-/, Ge = /-([a-z])/g, Ve = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  g.uid = 1, g.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, Ve(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2) i2[m(t2)] = n2;
    else for (r2 in t2) i2[m(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][m(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(m) : (t2 = m(t2)) in r2 ? [t2] : t2.match(Me) || []).length;
        for (; n2--; ) delete r2[t2[n2]];
      }
      (void 0 === t2 || Se.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !Se.isEmptyObject(t2);
  } };
  var Xe = new g(), Ye = new g(), Qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ke = /[A-Z]/g;
  Se.extend({ hasData: function(e2) {
    return Ye.hasData(e2) || Xe.hasData(e2);
  }, data: function(e2, t2, n2) {
    return Ye.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    Ye.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return Xe.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    Xe.remove(e2, t2);
  } }), Se.fn.extend({ data: function(e2, t2) {
    var n2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === e2) {
      if (this.length && (i2 = Ye.get(o2), 1 === o2.nodeType && !Xe.get(o2, "hasDataAttrs"))) {
        for (n2 = a2.length; n2--; ) a2[n2] && 0 === (r2 = a2[n2].name).indexOf("data-") && (r2 = m(r2.slice(5)), y(o2, r2, i2[r2]));
        Xe.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof e2 ? this.each(function() {
      Ye.set(this, e2);
    }) : ze(this, function(t3) {
      var n3;
      if (o2 && void 0 === t3) return void 0 !== (n3 = Ye.get(o2, e2)) || void 0 !== (n3 = y(o2, e2)) ? n3 : void 0;
      this.each(function() {
        Ye.set(this, e2, t3);
      });
    }, null, t2, arguments.length > 1, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      Ye.remove(this, e2);
    });
  } }), Se.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2) return t2 = (t2 || "fx") + "queue", r2 = Xe.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = Xe.access(e2, t2, Se.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = Se.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = Se._queueHooks(e2, t2), a2 = function() {
      Se.dequeue(e2, t2);
    };
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, a2, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return Xe.get(e2, n2) || Xe.access(e2, n2, { empty: Se.Callbacks("once memory").add(function() {
      Xe.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), Se.fn.extend({ queue: function(e2, t2) {
    var n2 = 2;
    return "string" != typeof e2 && (t2 = e2, e2 = "fx", n2--), arguments.length < n2 ? Se.queue(this[0], e2) : void 0 === t2 ? this : this.each(function() {
      var n3 = Se.queue(this, e2, t2);
      Se._queueHooks(this, e2), "fx" === e2 && "inprogress" !== n3[0] && Se.dequeue(this, e2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      Se.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = Se.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    for ("string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx"; a2--; ) (n2 = Xe.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var Ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Je = new RegExp("^(?:([+-])=|)(" + Ze + ")([a-z%]*)$", "i"), et = ["Top", "Right", "Bottom", "Left"], tt = we.documentElement, nt = function(e2) {
    return Se.contains(e2.ownerDocument, e2);
  }, rt = { composed: true };
  tt.getRootNode && (nt = function(e2) {
    return Se.contains(e2.ownerDocument, e2) || e2.getRootNode(rt) === e2.ownerDocument;
  });
  var it = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && nt(e2) && "none" === Se.css(e2, "display");
  }, ot = {};
  Se.fn.extend({ show: function() {
    return x(this, true);
  }, hide: function() {
    return x(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      it(this) ? Se(this).show() : Se(this).hide();
    });
  } });
  var at, st, ut = /^(?:checkbox|radio)$/i, ct = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, lt = /^$|^module$|\/(?:java|ecma)script/i;
  at = we.createDocumentFragment().appendChild(we.createElement("div")), (st = we.createElement("input")).setAttribute("type", "radio"), st.setAttribute("checked", "checked"), st.setAttribute("name", "t"), at.appendChild(st), ve.checkClone = at.cloneNode(true).cloneNode(true).lastChild.checked, at.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!at.cloneNode(true).lastChild.defaultValue, at.innerHTML = "<option></option>", ve.option = !!at.lastChild;
  var ft = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead, ft.th = ft.td, ve.option || (ft.optgroup = ft.option = [1, "<select multiple='multiple'>", "</select>"]);
  var dt = /<|&#?\w+;/, pt = /^([^.]*)(?:\.(.+)|)/;
  Se.event = { global: {}, add: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, c2, l2, f2, d2, p2, h2, m2, g2 = Xe.get(e2);
    if (Ve(e2)) for (n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && Se.find.matchesSelector(tt, i2), n2.guid || (n2.guid = Se.guid++), (u2 = g2.events) || (u2 = g2.events = /* @__PURE__ */ Object.create(null)), (a2 = g2.handle) || (a2 = g2.handle = function(t3) {
      return void 0 !== Se && Se.event.triggered !== t3.type ? Se.event.dispatch.apply(e2, arguments) : void 0;
    }), c2 = (t2 = (t2 || "").match(Me) || [""]).length; c2--; ) p2 = m2 = (s2 = pt.exec(t2[c2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), p2 && (f2 = Se.event.special[p2] || {}, p2 = (i2 ? f2.delegateType : f2.bindType) || p2, f2 = Se.event.special[p2] || {}, l2 = Se.extend({ type: p2, origType: m2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && Se.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (d2 = u2[p2]) || ((d2 = u2[p2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(e2, r2, h2, a2) || e2.addEventListener && e2.addEventListener(p2, a2)), f2.add && (f2.add.call(e2, l2), l2.handler.guid || (l2.handler.guid = n2.guid)), i2 ? d2.splice(d2.delegateCount++, 0, l2) : d2.push(l2), Se.event.global[p2] = true);
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, c2, l2, f2, d2, p2, h2, m2, g2 = Xe.hasData(e2) && Xe.get(e2);
    if (g2 && (u2 = g2.events)) {
      for (c2 = (t2 = (t2 || "").match(Me) || [""]).length; c2--; ) if (p2 = m2 = (s2 = pt.exec(t2[c2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), p2) {
        for (f2 = Se.event.special[p2] || {}, d2 = u2[p2 = (r2 ? f2.delegateType : f2.bindType) || p2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = d2.length; o2--; ) l2 = d2[o2], !i2 && m2 !== l2.origType || n2 && n2.guid !== l2.guid || s2 && !s2.test(l2.namespace) || r2 && r2 !== l2.selector && ("**" !== r2 || !l2.selector) || (d2.splice(o2, 1), l2.selector && d2.delegateCount--, f2.remove && f2.remove.call(e2, l2));
        a2 && !d2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, g2.handle) || Se.removeEvent(e2, p2, g2.handle), delete u2[p2]);
      } else for (p2 in u2) Se.event.remove(e2, p2 + t2[c2], n2, r2, true);
      Se.isEmptyObject(u2) && Xe.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = Se.event.fix(e2), c2 = (Xe.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], l2 = Se.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !l2.preDispatch || false !== l2.preDispatch.call(this, u2)) {
      for (a2 = Se.event.handlers.call(this, u2, c2), t2 = 0; (i2 = a2[t2++]) && !u2.isPropagationStopped(); ) for (u2.currentTarget = i2.elem, n2 = 0; (o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped(); ) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((Se.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      return l2.postDispatch && l2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, c2 = e2.target;
    if (u2 && c2.nodeType && !("click" === e2.type && e2.button >= 1)) {
      for (; c2 !== this; c2 = c2.parentNode || this) if (1 === c2.nodeType && ("click" !== e2.type || true !== c2.disabled)) {
        for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? Se(i2, this).index(c2) > -1 : Se.find(i2, this, null, [c2]).length), a2[i2] && o2.push(r2);
        o2.length && s2.push({ elem: c2, handlers: o2 });
      }
    }
    return c2 = this, u2 < t2.length && s2.push({ elem: c2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(e2, t2) {
    Object.defineProperty(Se.Event.prototype, e2, { enumerable: true, configurable: true, get: ye(t2) ? function() {
      if (this.originalEvent) return t2(this.originalEvent);
    } : function() {
      if (this.originalEvent) return this.originalEvent[e2];
    }, set: function(t3) {
      Object.defineProperty(this, e2, { enumerable: true, configurable: true, writable: true, value: t3 });
    } });
  }, fix: function(e2) {
    return e2[Se.expando] ? e2 : new Se.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return ut.test(t2.type) && t2.click && o(t2, "input") && A(t2, "click", true), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return ut.test(t2.type) && t2.click && o(t2, "input") && A(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return ut.test(t2.type) && t2.click && o(t2, "input") && Xe.get(t2, "click") || o(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, Se.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, Se.Event = function(e2, t2) {
    if (!(this instanceof Se.Event)) return new Se.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? E : C, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && Se.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[Se.expando] = true;
  }, Se.Event.prototype = { constructor: Se.Event, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = E, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = E, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = E, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, Se.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, char: true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, Se.event.addProp), Se.each({ focus: "focusin", blur: "focusout" }, function(e2, t2) {
    function n2(e3) {
      if (we.documentMode) {
        var n3 = Xe.get(this, "handle"), r2 = Se.event.fix(e3);
        r2.type = "focusin" === e3.type ? "focus" : "blur", r2.isSimulated = true, n3(e3), r2.target === r2.currentTarget && n3(r2);
      } else Se.event.simulate(t2, e3.target, Se.event.fix(e3));
    }
    Se.event.special[e2] = { setup: function() {
      var r2;
      if (A(this, e2, true), !we.documentMode) return false;
      (r2 = Xe.get(this, t2)) || this.addEventListener(t2, n2), Xe.set(this, t2, (r2 || 0) + 1);
    }, trigger: function() {
      return A(this, e2), true;
    }, teardown: function() {
      var e3;
      if (!we.documentMode) return false;
      (e3 = Xe.get(this, t2) - 1) ? Xe.set(this, t2, e3) : (this.removeEventListener(t2, n2), Xe.remove(this, t2));
    }, _default: function(t3) {
      return Xe.get(t3.target, e2);
    }, delegateType: t2 }, Se.event.special[t2] = { setup: function() {
      var r2 = this.ownerDocument || this.document || this, i2 = we.documentMode ? this : r2, o2 = Xe.get(i2, t2);
      o2 || (we.documentMode ? this.addEventListener(t2, n2) : r2.addEventListener(e2, n2, true)), Xe.set(i2, t2, (o2 || 0) + 1);
    }, teardown: function() {
      var r2 = this.ownerDocument || this.document || this, i2 = we.documentMode ? this : r2, o2 = Xe.get(i2, t2) - 1;
      o2 ? Xe.set(i2, t2, o2) : (we.documentMode ? this.removeEventListener(t2, n2) : r2.removeEventListener(e2, n2, true), Xe.remove(i2, t2));
    } };
  }), Se.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, t2) {
    Se.event.special[e2] = { delegateType: t2, bindType: t2, handle: function(e3) {
      var n2, r2 = this, i2 = e3.relatedTarget, o2 = e3.handleObj;
      return i2 && (i2 === r2 || Se.contains(r2, i2)) || (e3.type = o2.origType, n2 = o2.handler.apply(this, arguments), e3.type = t2), n2;
    } };
  }), Se.fn.extend({ on: function(e2, t2, n2, r2) {
    return j(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return j(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, Se(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2) this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = C), this.each(function() {
      Se.event.remove(this, e2, n2, t2);
    });
  } });
  var ht = /<script|<style|<link/i, mt = /checked\s*(?:[^=]|=\s*.checked.)/i, gt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  Se.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = e2.cloneNode(true), u2 = nt(e2);
    if (!(ve.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || Se.isXMLDoc(e2))) for (a2 = T(s2), r2 = 0, i2 = (o2 = T(e2)).length; r2 < i2; r2++) _(o2[r2], a2[r2]);
    if (t2) if (n2) for (o2 = o2 || T(e2), a2 = a2 || T(s2), r2 = 0, i2 = o2.length; r2 < i2; r2++) O(o2[r2], a2[r2]);
    else O(e2, s2);
    return (a2 = T(s2, "script")).length > 0 && k(a2, !u2 && T(e2, "script")), s2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = Se.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if (Ve(n2)) {
      if (t2 = n2[Xe.expando]) {
        if (t2.events) for (r2 in t2.events) i2[r2] ? Se.event.remove(n2, r2) : Se.removeEvent(n2, r2, t2.handle);
        n2[Xe.expando] = void 0;
      }
      n2[Ye.expando] && (n2[Ye.expando] = void 0);
    }
  } }), Se.fn.extend({ detach: function(e2) {
    return P(this, e2, true);
  }, remove: function(e2) {
    return P(this, e2);
  }, text: function(e2) {
    return ze(this, function(e3) {
      return void 0 === e3 ? Se.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return q(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || N(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return q(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = N(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return q(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return q(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (Se.cleanData(T(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return Se.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return ze(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
      if ("string" == typeof e3 && !ht.test(e3) && !ft[(ct.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = Se.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (Se.cleanData(T(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var e2 = [];
    return q(this, arguments, function(t2) {
      var n2 = this.parentNode;
      Se.inArray(this, e2) < 0 && (Se.cleanData(T(this)), n2 && n2.replaceChild(t2, this));
    }, e2);
  } }), Se.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, t2) {
    Se.fn[e2] = function(e3) {
      for (var n2, r2 = [], i2 = Se(e3), o2 = i2.length - 1, a2 = 0; a2 <= o2; a2++) n2 = a2 === o2 ? this : this.clone(true), Se(i2[a2])[t2](n2), le.apply(r2, n2.get());
      return this.pushStack(r2);
    };
  });
  var vt = new RegExp("^(" + Ze + ")(?!px)[a-z%]+$", "i"), yt = /^--/, bt = function(t2) {
    var n2 = t2.ownerDocument.defaultView;
    return n2 && n2.opener || (n2 = e), n2.getComputedStyle(t2);
  }, wt = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
    return r2;
  }, xt = new RegExp(et.join("|"), "i");
  !function() {
    function t2() {
      if (l2) {
        c2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", tt.appendChild(c2).appendChild(l2);
        var t3 = e.getComputedStyle(l2);
        r2 = "1%" !== t3.top, u2 = 12 === n2(t3.marginLeft), l2.style.right = "60%", a2 = 36 === n2(t3.right), i2 = 36 === n2(t3.width), l2.style.position = "absolute", o2 = 12 === n2(l2.offsetWidth / 3), tt.removeChild(c2), l2 = null;
      }
    }
    function n2(e2) {
      return Math.round(parseFloat(e2));
    }
    var r2, i2, o2, a2, s2, u2, c2 = we.createElement("div"), l2 = we.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === l2.style.backgroundClip, Se.extend(ve, { boxSizingReliable: function() {
      return t2(), i2;
    }, pixelBoxStyles: function() {
      return t2(), a2;
    }, pixelPosition: function() {
      return t2(), r2;
    }, reliableMarginLeft: function() {
      return t2(), u2;
    }, scrollboxSize: function() {
      return t2(), o2;
    }, reliableTrDimensions: function() {
      var t3, n3, r3, i3;
      return null == s2 && (t3 = we.createElement("table"), n3 = we.createElement("tr"), r3 = we.createElement("div"), t3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n3.style.cssText = "border:1px solid", n3.style.height = "1px", r3.style.height = "9px", r3.style.display = "block", tt.appendChild(t3).appendChild(n3).appendChild(r3), i3 = e.getComputedStyle(n3), s2 = parseInt(i3.height, 10) + parseInt(i3.borderTopWidth, 10) + parseInt(i3.borderBottomWidth, 10) === n3.offsetHeight, tt.removeChild(t3)), s2;
    } }));
  }();
  var Tt = ["Webkit", "Moz", "ms"], kt = we.createElement("div").style, St = {}, Et = /^(none|table(?!-c[ea]).+)/, Ct = { position: "absolute", visibility: "hidden", display: "block" }, jt = { letterSpacing: "0", fontWeight: "400" };
  Se.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = R(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = m(t2), u2 = yt.test(t2), c2 = e2.style;
      if (u2 || (t2 = F(s2)), a2 = Se.cssHooks[t2] || Se.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : c2[t2];
      "string" === (o2 = typeof n2) && (i2 = Je.exec(n2)) && i2[1] && (n2 = b(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (Se.cssNumber[s2] ? "" : "px")), ve.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (c2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? c2.setProperty(t2, n2) : c2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = m(t2);
    return yt.test(t2) || (t2 = F(s2)), (a2 = Se.cssHooks[t2] || Se.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = R(e2, t2, r2)), "normal" === i2 && t2 in jt && (i2 = jt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), Se.each(["height", "width"], function(e2, t2) {
    Se.cssHooks[t2] = { get: function(e3, n2, r2) {
      if (n2) return !Et.test(Se.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? B(e3, t2, r2) : wt(e3, Ct, function() {
        return B(e3, t2, r2);
      });
    }, set: function(e3, n2, r2) {
      var i2, o2 = bt(e3), a2 = !ve.scrollboxSize() && "absolute" === o2.position, s2 = (a2 || r2) && "border-box" === Se.css(e3, "boxSizing", false, o2), u2 = r2 ? M(e3, t2, r2, s2, o2) : 0;
      return s2 && a2 && (u2 -= Math.ceil(e3["offset" + t2[0].toUpperCase() + t2.slice(1)] - parseFloat(o2[t2]) - M(e3, t2, "border", false, o2) - 0.5)), u2 && (i2 = Je.exec(n2)) && "px" !== (i2[3] || "px") && (e3.style[t2] = n2, n2 = Se.css(e3, t2)), H(e3, n2, u2);
    } };
  }), Se.cssHooks.marginLeft = I(ve.reliableMarginLeft, function(e2, t2) {
    if (t2) return (parseFloat(R(e2, "marginLeft")) || e2.getBoundingClientRect().left - wt(e2, { marginLeft: 0 }, function() {
      return e2.getBoundingClientRect().left;
    })) + "px";
  }), Se.each({ margin: "", padding: "", border: "Width" }, function(e2, t2) {
    Se.cssHooks[e2 + t2] = { expand: function(n2) {
      for (var r2 = 0, i2 = {}, o2 = "string" == typeof n2 ? n2.split(" ") : [n2]; r2 < 4; r2++) i2[e2 + et[r2] + t2] = o2[r2] || o2[r2 - 2] || o2[0];
      return i2;
    } }, "margin" !== e2 && (Se.cssHooks[e2 + t2].set = H);
  }), Se.fn.extend({ css: function(e2, t2) {
    return ze(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = bt(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = Se.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? Se.style(e3, t3, n2) : Se.css(e3, t3);
    }, e2, t2, arguments.length > 1);
  } }), Se.Tween = W, W.prototype = { constructor: W, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || Se.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (Se.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = W.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : W.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = W.propHooks[this.prop];
    return this.options.duration ? this.pos = t2 = Se.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : W.propHooks._default.set(this), this;
  } }, W.prototype.init.prototype = W.prototype, W.propHooks = { _default: { get: function(e2) {
    var t2;
    return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = Se.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
  }, set: function(e2) {
    Se.fx.step[e2.prop] ? Se.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !Se.cssHooks[e2.prop] && null == e2.elem.style[F(e2.prop)] ? e2.elem[e2.prop] = e2.now : Se.style(e2.elem, e2.prop, e2.now + e2.unit);
  } } }, W.propHooks.scrollTop = W.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, Se.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" }, Se.fx = W.prototype.init, Se.fx.step = {};
  var At, Nt, Dt = /^(?:toggle|show|hide)$/, Lt = /queueHooks$/;
  Se.Animation = Se.extend(Q, { tweeners: { "*": [function(e2, t2) {
    var n2 = this.createTween(e2, t2);
    return b(n2.elem, e2, Je.exec(t2), n2), n2;
  }] }, tweener: function(e2, t2) {
    ye(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(Me);
    for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], Q.tweeners[n2] = Q.tweeners[n2] || [], Q.tweeners[n2].unshift(t2);
  }, prefilters: [X], prefilter: function(e2, t2) {
    t2 ? Q.prefilters.unshift(e2) : Q.prefilters.push(e2);
  } }), Se.speed = function(e2, t2, n2) {
    var r2 = e2 && "object" == typeof e2 ? Se.extend({}, e2) : { complete: n2 || !n2 && t2 || ye(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !ye(t2) && t2 };
    return Se.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in Se.fx.speeds ? r2.duration = Se.fx.speeds[r2.duration] : r2.duration = Se.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      ye(r2.old) && r2.old.call(this), r2.queue && Se.dequeue(this, r2.queue);
    }, r2;
  }, Se.fn.extend({
    fadeTo: function(e2, t2, n2, r2) {
      return this.filter(it).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
    },
    animate: function(e2, t2, n2, r2) {
      var i2 = Se.isEmptyObject(e2), o2 = Se.speed(t2, n2, r2), a2 = function() {
        var t3 = Q(this, Se.extend({}, e2), o2);
        (i2 || Xe.get(this, "finish")) && t3.stop(true);
      };
      return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
    },
    stop: function(e2, t2, n2) {
      var r2 = function(e3) {
        var t3 = e3.stop;
        delete e3.stop, t3(n2);
      };
      return "string" != typeof e2 && (n2 = t2, t2 = e2, e2 = void 0), t2 && this.queue(e2 || "fx", []), this.each(function() {
        var t3 = true, i2 = null != e2 && e2 + "queueHooks", o2 = Se.timers, a2 = Xe.get(this);
        if (i2) a2[i2] && a2[i2].stop && r2(a2[i2]);
        else for (i2 in a2) a2[i2] && a2[i2].stop && Lt.test(i2) && r2(a2[i2]);
        for (i2 = o2.length; i2--; ) o2[i2].elem !== this || null != e2 && o2[i2].queue !== e2 || (o2[i2].anim.stop(n2), t3 = false, o2.splice(i2, 1));
        !t3 && n2 || Se.dequeue(this, e2);
      });
    },
    finish: function(e2) {
      return false !== e2 && (e2 = e2 || "fx"), this.each(function() {
        var t2, n2 = Xe.get(this), r2 = n2[e2 + "queue"], i2 = n2[e2 + "queueHooks"], o2 = Se.timers, a2 = r2 ? r2.length : 0;
        for (n2.finish = true, Se.queue(this, e2, []), i2 && i2.stop && i2.stop.call(this, true), t2 = o2.length; t2--; ) o2[t2].elem === this && o2[t2].queue === e2 && (o2[t2].anim.stop(true), o2.splice(t2, 1));
        for (t2 = 0; t2 < a2; t2++) r2[t2] && r2[t2].finish && r2[t2].finish.call(this);
        delete n2.finish;
      });
    }
  }), Se.each(["toggle", "show", "hide"], function(e2, t2) {
    var n2 = Se.fn[t2];
    Se.fn[t2] = function(e3, r2, i2) {
      return null == e3 || "boolean" == typeof e3 ? n2.apply(this, arguments) : this.animate(G(t2, true), e3, r2, i2);
    };
  }), Se.each({ slideDown: G("show"), slideUp: G("hide"), slideToggle: G("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, t2) {
    Se.fn[e2] = function(e3, n2, r2) {
      return this.animate(t2, e3, n2, r2);
    };
  }), Se.timers = [], Se.fx.tick = function() {
    var e2, t2 = 0, n2 = Se.timers;
    for (At = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
    n2.length || Se.fx.stop(), At = void 0;
  }, Se.fx.timer = function(e2) {
    Se.timers.push(e2), Se.fx.start();
  }, Se.fx.interval = 13, Se.fx.start = function() {
    Nt || (Nt = true, z());
  }, Se.fx.stop = function() {
    Nt = null;
  }, Se.fx.speeds = { slow: 600, fast: 200, _default: 400 }, Se.fn.delay = function(t2, n2) {
    return t2 = Se.fx && Se.fx.speeds[t2] || t2, n2 = n2 || "fx", this.queue(n2, function(n3, r2) {
      var i2 = e.setTimeout(n3, t2);
      r2.stop = function() {
        e.clearTimeout(i2);
      };
    });
  }, function() {
    var e2 = we.createElement("input"), t2 = we.createElement("select").appendChild(we.createElement("option"));
    e2.type = "checkbox", ve.checkOn = "" !== e2.value, ve.optSelected = t2.selected, (e2 = we.createElement("input")).value = "t", e2.type = "radio", ve.radioValue = "t" === e2.value;
  }();
  var Ot, _t = Se.expr.attrHandle;
  Se.fn.extend({ attr: function(e2, t2) {
    return ze(this, Se.attr, e2, t2, arguments.length > 1);
  }, removeAttr: function(e2) {
    return this.each(function() {
      Se.removeAttr(this, e2);
    });
  } }), Se.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return void 0 === e2.getAttribute ? Se.prop(e2, t2, n2) : (1 === o2 && Se.isXMLDoc(e2) || (i2 = Se.attrHooks[t2.toLowerCase()] || (Se.expr.match.bool.test(t2) ? Ot : void 0)), void 0 !== n2 ? null === n2 ? void Se.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = Se.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!ve.radioValue && "radio" === t2 && o(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(Me);
    if (i2 && 1 === e2.nodeType) for (; n2 = i2[r2++]; ) e2.removeAttribute(n2);
  } }), Ot = { set: function(e2, t2, n2) {
    return false === t2 ? Se.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, Se.each(Se.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var n2 = _t[t2] || Se.find.attr;
    _t[t2] = function(e3, t3, r2) {
      var i2, o2, a2 = t3.toLowerCase();
      return r2 || (o2 = _t[a2], _t[a2] = i2, i2 = null != n2(e3, t3, r2) ? a2 : null, _t[a2] = o2), i2;
    };
  });
  var qt = /^(?:input|select|textarea|button)$/i, Pt = /^(?:a|area)$/i;
  Se.fn.extend({ prop: function(e2, t2) {
    return ze(this, Se.prop, e2, t2, arguments.length > 1);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[Se.propFix[e2] || e2];
    });
  } }), Se.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && Se.isXMLDoc(e2) || (t2 = Se.propFix[t2] || t2, i2 = Se.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = Se.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : qt.test(e2.nodeName) || Pt.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { for: "htmlFor", class: "className" } }), ve.optSelected || (Se.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), Se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    Se.propFix[this.toLowerCase()] = this;
  }), Se.fn.extend({ addClass: function(e2) {
    var t2, n2, r2, i2, o2, a2;
    return ye(e2) ? this.each(function(t3) {
      Se(this).addClass(e2.call(this, t3, Z(this)));
    }) : (t2 = J(e2)).length ? this.each(function() {
      if (r2 = Z(this), n2 = 1 === this.nodeType && " " + K(r2) + " ") {
        for (o2 = 0; o2 < t2.length; o2++) i2 = t2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
        a2 = K(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this;
  }, removeClass: function(e2) {
    var t2, n2, r2, i2, o2, a2;
    return ye(e2) ? this.each(function(t3) {
      Se(this).removeClass(e2.call(this, t3, Z(this)));
    }) : arguments.length ? (t2 = J(e2)).length ? this.each(function() {
      if (r2 = Z(this), n2 = 1 === this.nodeType && " " + K(r2) + " ") {
        for (o2 = 0; o2 < t2.length; o2++) for (i2 = t2[o2]; n2.indexOf(" " + i2 + " ") > -1; ) n2 = n2.replace(" " + i2 + " ", " ");
        a2 = K(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function(e2, t2) {
    var n2, r2, i2, o2, a2 = typeof e2, s2 = "string" === a2 || Array.isArray(e2);
    return ye(e2) ? this.each(function(n3) {
      Se(this).toggleClass(e2.call(this, n3, Z(this), t2), t2);
    }) : "boolean" == typeof t2 && s2 ? t2 ? this.addClass(e2) : this.removeClass(e2) : (n2 = J(e2), this.each(function() {
      if (s2) for (o2 = Se(this), i2 = 0; i2 < n2.length; i2++) r2 = n2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
      else void 0 !== e2 && "boolean" !== a2 || ((r2 = Z(this)) && Xe.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === e2 ? "" : Xe.get(this, "__className__") || ""));
    }));
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    for (t2 = " " + e2 + " "; n2 = this[r2++]; ) if (1 === n2.nodeType && (" " + K(Z(n2)) + " ").indexOf(t2) > -1) return true;
    return false;
  } });
  var Rt = /\r/g;
  Se.fn.extend({ val: function(e2) {
    var t2, n2, r2, i2 = this[0];
    return arguments.length ? (r2 = ye(e2), this.each(function(n3) {
      var i3;
      1 === this.nodeType && (null == (i3 = r2 ? e2.call(this, n3, Se(this).val()) : e2) ? i3 = "" : "number" == typeof i3 ? i3 += "" : Array.isArray(i3) && (i3 = Se.map(i3, function(e3) {
        return null == e3 ? "" : e3 + "";
      })), (t2 = Se.valHooks[this.type] || Se.valHooks[this.nodeName.toLowerCase()]) && "set" in t2 && void 0 !== t2.set(this, i3, "value") || (this.value = i3));
    })) : i2 ? (t2 = Se.valHooks[i2.type] || Se.valHooks[i2.nodeName.toLowerCase()]) && "get" in t2 && void 0 !== (n2 = t2.get(i2, "value")) ? n2 : "string" == typeof (n2 = i2.value) ? n2.replace(Rt, "") : null == n2 ? "" : n2 : void 0;
  } }), Se.extend({ valHooks: { option: { get: function(e2) {
    var t2 = Se.find.attr(e2, "value");
    return null != t2 ? t2 : K(Se.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, a2 = e2.selectedIndex, s2 = "select-one" === e2.type, u2 = s2 ? null : [], c2 = s2 ? a2 + 1 : i2.length;
    for (r2 = a2 < 0 ? c2 : s2 ? a2 : 0; r2 < c2; r2++) if (((n2 = i2[r2]).selected || r2 === a2) && !n2.disabled && (!n2.parentNode.disabled || !o(n2.parentNode, "optgroup"))) {
      if (t2 = Se(n2).val(), s2) return t2;
      u2.push(t2);
    }
    return u2;
  }, set: function(e2, t2) {
    for (var n2, r2, i2 = e2.options, o2 = Se.makeArray(t2), a2 = i2.length; a2--; ) ((r2 = i2[a2]).selected = Se.inArray(Se.valHooks.option.get(r2), o2) > -1) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), Se.each(["radio", "checkbox"], function() {
    Se.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2)) return e2.checked = Se.inArray(Se(e2).val(), t2) > -1;
    } }, ve.checkOn || (Se.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  });
  var It = e.location, $t = { guid: Date.now() }, Ft = /\?/;
  Se.parseXML = function(t2) {
    var n2, r2;
    if (!t2 || "string" != typeof t2) return null;
    try {
      n2 = new e.DOMParser().parseFromString(t2, "text/xml");
    } catch (e2) {
    }
    return r2 = n2 && n2.getElementsByTagName("parsererror")[0], n2 && !r2 || Se.error("Invalid XML: " + (r2 ? Se.map(r2.childNodes, function(e2) {
      return e2.textContent;
    }).join("\n") : t2)), n2;
  };
  var Ht = /^(?:focusinfocus|focusoutblur)$/, Mt = function(e2) {
    e2.stopPropagation();
  };
  Se.extend(Se.event, { trigger: function(t2, n2, r2, i2) {
    var o2, a2, s2, u2, c2, l2, f2, d2, p2 = [r2 || we], h2 = he.call(t2, "type") ? t2.type : t2, m2 = he.call(t2, "namespace") ? t2.namespace.split(".") : [];
    if (a2 = d2 = s2 = r2 = r2 || we, 3 !== r2.nodeType && 8 !== r2.nodeType && !Ht.test(h2 + Se.event.triggered) && (h2.indexOf(".") > -1 && (m2 = h2.split("."), h2 = m2.shift(), m2.sort()), c2 = h2.indexOf(":") < 0 && "on" + h2, (t2 = t2[Se.expando] ? t2 : new Se.Event(h2, "object" == typeof t2 && t2)).isTrigger = i2 ? 2 : 3, t2.namespace = m2.join("."), t2.rnamespace = t2.namespace ? new RegExp("(^|\\.)" + m2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t2.result = void 0, t2.target || (t2.target = r2), n2 = null == n2 ? [t2] : Se.makeArray(n2, [t2]), f2 = Se.event.special[h2] || {}, i2 || !f2.trigger || false !== f2.trigger.apply(r2, n2))) {
      if (!i2 && !f2.noBubble && !be(r2)) {
        for (u2 = f2.delegateType || h2, Ht.test(u2 + h2) || (a2 = a2.parentNode); a2; a2 = a2.parentNode) p2.push(a2), s2 = a2;
        s2 === (r2.ownerDocument || we) && p2.push(s2.defaultView || s2.parentWindow || e);
      }
      for (o2 = 0; (a2 = p2[o2++]) && !t2.isPropagationStopped(); ) d2 = a2, t2.type = o2 > 1 ? u2 : f2.bindType || h2, (l2 = (Xe.get(a2, "events") || /* @__PURE__ */ Object.create(null))[t2.type] && Xe.get(a2, "handle")) && l2.apply(a2, n2), (l2 = c2 && a2[c2]) && l2.apply && Ve(a2) && (t2.result = l2.apply(a2, n2), false === t2.result && t2.preventDefault());
      return t2.type = h2, i2 || t2.isDefaultPrevented() || f2._default && false !== f2._default.apply(p2.pop(), n2) || !Ve(r2) || c2 && ye(r2[h2]) && !be(r2) && ((s2 = r2[c2]) && (r2[c2] = null), Se.event.triggered = h2, t2.isPropagationStopped() && d2.addEventListener(h2, Mt), r2[h2](), t2.isPropagationStopped() && d2.removeEventListener(h2, Mt), Se.event.triggered = void 0, s2 && (r2[c2] = s2)), t2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = Se.extend(new Se.Event(), n2, { type: e2, isSimulated: true });
    Se.event.trigger(r2, null, t2);
  } }), Se.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      Se.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2) return Se.event.trigger(e2, t2, n2, true);
  } });
  var Bt = /\[\]$/, Wt = /\r?\n/g, zt = /^(?:submit|button|image|reset|file)$/i, Ut = /^(?:input|select|textarea|keygen)/i;
  Se.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = ye(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2) return "";
    if (Array.isArray(e2) || e2.jquery && !Se.isPlainObject(e2)) Se.each(e2, function() {
      i2(this.name, this.value);
    });
    else for (n2 in e2) ee(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, Se.fn.extend({ serialize: function() {
    return Se.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = Se.prop(this, "elements");
      return e2 ? Se.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !Se(this).is(":disabled") && Ut.test(this.nodeName) && !zt.test(e2) && (this.checked || !ut.test(e2));
    }).map(function(e2, t2) {
      var n2 = Se(this).val();
      return null == n2 ? null : Array.isArray(n2) ? Se.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(Wt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(Wt, "\r\n") };
    }).get();
  } });
  var Gt = /%20/g, Vt = /#.*$/, Xt = /([?&])_=[^&]*/, Yt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Kt = /^(?:GET|HEAD)$/, Zt = /^\/\//, Jt = {}, en = {}, tn = "*/".concat("*"), nn = we.createElement("a");
  nn.href = It.href, Se.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: It.href, type: "GET", isLocal: Qt.test(It.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": tn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": Se.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? re(re(e2, Se.ajaxSettings), t2) : re(Se.ajaxSettings, e2);
  }, ajaxPrefilter: te(Jt), ajaxTransport: te(en), ajax: function(t2, n2) {
    function r2(t3, n3, r3, s3) {
      var c3, d3, p3, w3, x3, T3 = n3;
      l2 || (l2 = true, u2 && e.clearTimeout(u2), i2 = void 0, a2 = s3 || "", k2.readyState = t3 > 0 ? 4 : 0, c3 = t3 >= 200 && t3 < 300 || 304 === t3, r3 && (w3 = ie(h2, k2, r3)), !c3 && Se.inArray("script", h2.dataTypes) > -1 && Se.inArray("json", h2.dataTypes) < 0 && (h2.converters["text script"] = function() {
      }), w3 = oe(h2, w3, k2, c3), c3 ? (h2.ifModified && ((x3 = k2.getResponseHeader("Last-Modified")) && (Se.lastModified[o2] = x3), (x3 = k2.getResponseHeader("etag")) && (Se.etag[o2] = x3)), 204 === t3 || "HEAD" === h2.type ? T3 = "nocontent" : 304 === t3 ? T3 = "notmodified" : (T3 = w3.state, d3 = w3.data, c3 = !(p3 = w3.error))) : (p3 = T3, !t3 && T3 || (T3 = "error", t3 < 0 && (t3 = 0))), k2.status = t3, k2.statusText = (n3 || T3) + "", c3 ? v2.resolveWith(m2, [d3, T3, k2]) : v2.rejectWith(m2, [k2, T3, p3]), k2.statusCode(b2), b2 = void 0, f2 && g2.trigger(c3 ? "ajaxSuccess" : "ajaxError", [k2, h2, c3 ? d3 : p3]), y2.fireWith(m2, [k2, T3]), f2 && (g2.trigger("ajaxComplete", [k2, h2]), --Se.active || Se.event.trigger("ajaxStop")));
    }
    "object" == typeof t2 && (n2 = t2, t2 = void 0), n2 = n2 || {};
    var i2, o2, a2, s2, u2, c2, l2, f2, d2, p2, h2 = Se.ajaxSetup({}, n2), m2 = h2.context || h2, g2 = h2.context && (m2.nodeType || m2.jquery) ? Se(m2) : Se.event, v2 = Se.Deferred(), y2 = Se.Callbacks("once memory"), b2 = h2.statusCode || {}, w2 = {}, x2 = {}, T2 = "canceled", k2 = { readyState: 0, getResponseHeader: function(e2) {
      var t3;
      if (l2) {
        if (!s2) for (s2 = {}; t3 = Yt.exec(a2); ) s2[t3[1].toLowerCase() + " "] = (s2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
        t3 = s2[e2.toLowerCase() + " "];
      }
      return null == t3 ? null : t3.join(", ");
    }, getAllResponseHeaders: function() {
      return l2 ? a2 : null;
    }, setRequestHeader: function(e2, t3) {
      return null == l2 && (e2 = x2[e2.toLowerCase()] = x2[e2.toLowerCase()] || e2, w2[e2] = t3), this;
    }, overrideMimeType: function(e2) {
      return null == l2 && (h2.mimeType = e2), this;
    }, statusCode: function(e2) {
      var t3;
      if (e2) if (l2) k2.always(e2[k2.status]);
      else for (t3 in e2) b2[t3] = [b2[t3], e2[t3]];
      return this;
    }, abort: function(e2) {
      var t3 = e2 || T2;
      return i2 && i2.abort(t3), r2(0, t3), this;
    } };
    if (v2.promise(k2), h2.url = ((t2 || h2.url || It.href) + "").replace(Zt, It.protocol + "//"), h2.type = n2.method || n2.type || h2.method || h2.type, h2.dataTypes = (h2.dataType || "*").toLowerCase().match(Me) || [""], null == h2.crossDomain) {
      c2 = we.createElement("a");
      try {
        c2.href = h2.url, c2.href = c2.href, h2.crossDomain = nn.protocol + "//" + nn.host != c2.protocol + "//" + c2.host;
      } catch (e2) {
        h2.crossDomain = true;
      }
    }
    if (h2.data && h2.processData && "string" != typeof h2.data && (h2.data = Se.param(h2.data, h2.traditional)), ne(Jt, h2, n2, k2), l2) return k2;
    for (d2 in (f2 = Se.event && h2.global) && 0 == Se.active++ && Se.event.trigger("ajaxStart"), h2.type = h2.type.toUpperCase(), h2.hasContent = !Kt.test(h2.type), o2 = h2.url.replace(Vt, ""), h2.hasContent ? h2.data && h2.processData && 0 === (h2.contentType || "").indexOf("application/x-www-form-urlencoded") && (h2.data = h2.data.replace(Gt, "+")) : (p2 = h2.url.slice(o2.length), h2.data && (h2.processData || "string" == typeof h2.data) && (o2 += (Ft.test(o2) ? "&" : "?") + h2.data, delete h2.data), false === h2.cache && (o2 = o2.replace(Xt, "$1"), p2 = (Ft.test(o2) ? "&" : "?") + "_=" + $t.guid++ + p2), h2.url = o2 + p2), h2.ifModified && (Se.lastModified[o2] && k2.setRequestHeader("If-Modified-Since", Se.lastModified[o2]), Se.etag[o2] && k2.setRequestHeader("If-None-Match", Se.etag[o2])), (h2.data && h2.hasContent && false !== h2.contentType || n2.contentType) && k2.setRequestHeader("Content-Type", h2.contentType), k2.setRequestHeader("Accept", h2.dataTypes[0] && h2.accepts[h2.dataTypes[0]] ? h2.accepts[h2.dataTypes[0]] + ("*" !== h2.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : h2.accepts["*"]), h2.headers) k2.setRequestHeader(d2, h2.headers[d2]);
    if (h2.beforeSend && (false === h2.beforeSend.call(m2, k2, h2) || l2)) return k2.abort();
    if (T2 = "abort", y2.add(h2.complete), k2.done(h2.success), k2.fail(h2.error), i2 = ne(en, h2, n2, k2)) {
      if (k2.readyState = 1, f2 && g2.trigger("ajaxSend", [k2, h2]), l2) return k2;
      h2.async && h2.timeout > 0 && (u2 = e.setTimeout(function() {
        k2.abort("timeout");
      }, h2.timeout));
      try {
        l2 = false, i2.send(w2, r2);
      } catch (e2) {
        if (l2) throw e2;
        r2(-1, e2);
      }
    } else r2(-1, "No Transport");
    return k2;
  }, getJSON: function(e2, t2, n2) {
    return Se.get(e2, t2, n2, "json");
  }, getScript: function(e2, t2) {
    return Se.get(e2, void 0, t2, "script");
  } }), Se.each(["get", "post"], function(e2, t2) {
    Se[t2] = function(e3, n2, r2, i2) {
      return ye(n2) && (i2 = i2 || r2, r2 = n2, n2 = void 0), Se.ajax(Se.extend({ url: e3, type: t2, dataType: i2, data: n2, success: r2 }, Se.isPlainObject(e3) && e3));
    };
  }), Se.ajaxPrefilter(function(e2) {
    var t2;
    for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
  }), Se._evalUrl = function(e2, t2, n2) {
    return Se.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
    } }, dataFilter: function(e3) {
      Se.globalEval(e3, t2, n2);
    } });
  }, Se.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (ye(e2) && (e2 = e2.call(this[0])), t2 = Se(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      for (var e3 = this; e3.firstElementChild; ) e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(e2) {
    return ye(e2) ? this.each(function(t2) {
      Se(this).wrapInner(e2.call(this, t2));
    }) : this.each(function() {
      var t2 = Se(this), n2 = t2.contents();
      n2.length ? n2.wrapAll(e2) : t2.append(e2);
    });
  }, wrap: function(e2) {
    var t2 = ye(e2);
    return this.each(function(n2) {
      Se(this).wrapAll(t2 ? e2.call(this, n2) : e2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      Se(this).replaceWith(this.childNodes);
    }), this;
  } }), Se.expr.pseudos.hidden = function(e2) {
    return !Se.expr.pseudos.visible(e2);
  }, Se.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, Se.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest();
    } catch (e2) {
    }
  };
  var rn = { 0: 200, 1223: 204 }, on = Se.ajaxSettings.xhr();
  ve.cors = !!on && "withCredentials" in on, ve.ajax = on = !!on, Se.ajaxTransport(function(t2) {
    var n2, r2;
    if (ve.cors || on && !t2.crossDomain) return { send: function(i2, o2) {
      var a2, s2 = t2.xhr();
      if (s2.open(t2.type, t2.url, t2.async, t2.username, t2.password), t2.xhrFields) for (a2 in t2.xhrFields) s2[a2] = t2.xhrFields[a2];
      for (a2 in t2.mimeType && s2.overrideMimeType && s2.overrideMimeType(t2.mimeType), t2.crossDomain || i2["X-Requested-With"] || (i2["X-Requested-With"] = "XMLHttpRequest"), i2) s2.setRequestHeader(a2, i2[a2]);
      n2 = function(e2) {
        return function() {
          n2 && (n2 = r2 = s2.onload = s2.onerror = s2.onabort = s2.ontimeout = s2.onreadystatechange = null, "abort" === e2 ? s2.abort() : "error" === e2 ? "number" != typeof s2.status ? o2(0, "error") : o2(s2.status, s2.statusText) : o2(rn[s2.status] || s2.status, s2.statusText, "text" !== (s2.responseType || "text") || "string" != typeof s2.responseText ? { binary: s2.response } : { text: s2.responseText }, s2.getAllResponseHeaders()));
        };
      }, s2.onload = n2(), r2 = s2.onerror = s2.ontimeout = n2("error"), void 0 !== s2.onabort ? s2.onabort = r2 : s2.onreadystatechange = function() {
        4 === s2.readyState && e.setTimeout(function() {
          n2 && r2();
        });
      }, n2 = n2("abort");
      try {
        s2.send(t2.hasContent && t2.data || null);
      } catch (e2) {
        if (n2) throw e2;
      }
    }, abort: function() {
      n2 && n2();
    } };
  }), Se.ajaxPrefilter(function(e2) {
    e2.crossDomain && (e2.contents.script = false);
  }), Se.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
    return Se.globalEval(e2), e2;
  } } }), Se.ajaxPrefilter("script", function(e2) {
    void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
  }), Se.ajaxTransport("script", function(e2) {
    var t2, n2;
    if (e2.crossDomain || e2.scriptAttrs) return { send: function(r2, i2) {
      t2 = Se("<script>").attr(e2.scriptAttrs || {}).prop({ charset: e2.scriptCharset, src: e2.url }).on("load error", n2 = function(e3) {
        t2.remove(), n2 = null, e3 && i2("error" === e3.type ? 404 : 200, e3.type);
      }), we.head.appendChild(t2[0]);
    }, abort: function() {
      n2 && n2();
    } };
  });
  var an, sn = [], un = /(=)\?(?=&|$)|\?\?/;
  Se.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = sn.pop() || Se.expando + "_" + $t.guid++;
    return this[e2] = true, e2;
  } }), Se.ajaxPrefilter("json jsonp", function(t2, n2, r2) {
    var i2, o2, a2, s2 = false !== t2.jsonp && (un.test(t2.url) ? "url" : "string" == typeof t2.data && 0 === (t2.contentType || "").indexOf("application/x-www-form-urlencoded") && un.test(t2.data) && "data");
    if (s2 || "jsonp" === t2.dataTypes[0]) return i2 = t2.jsonpCallback = ye(t2.jsonpCallback) ? t2.jsonpCallback() : t2.jsonpCallback, s2 ? t2[s2] = t2[s2].replace(un, "$1" + i2) : false !== t2.jsonp && (t2.url += (Ft.test(t2.url) ? "&" : "?") + t2.jsonp + "=" + i2), t2.converters["script json"] = function() {
      return a2 || Se.error(i2 + " was not called"), a2[0];
    }, t2.dataTypes[0] = "json", o2 = e[i2], e[i2] = function() {
      a2 = arguments;
    }, r2.always(function() {
      void 0 === o2 ? Se(e).removeProp(i2) : e[i2] = o2, t2[i2] && (t2.jsonpCallback = n2.jsonpCallback, sn.push(i2)), a2 && ye(o2) && o2(a2[0]), a2 = o2 = void 0;
    }), "script";
  }), ve.createHTMLDocument = ((an = we.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === an.childNodes.length), Se.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (ve.createHTMLDocument ? ((r2 = (t2 = we.implementation.createHTMLDocument("")).createElement("base")).href = we.location.href, t2.head.appendChild(r2)) : t2 = we), o2 = !n2 && [], (i2 = Re.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = S([e2], t2, o2), o2 && o2.length && Se(o2).remove(), Se.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, Se.fn.load = function(e2, t2, n2) {
    var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
    return s2 > -1 && (r2 = K(e2.slice(s2)), e2 = e2.slice(0, s2)), ye(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), a2.length > 0 && Se.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
      o2 = arguments, a2.html(r2 ? Se("<div>").append(Se.parseHTML(e3)).find(r2) : e3);
    }).always(n2 && function(e3, t3) {
      a2.each(function() {
        n2.apply(this, o2 || [e3.responseText, t3, e3]);
      });
    }), this;
  }, Se.expr.pseudos.animated = function(e2) {
    return Se.grep(Se.timers, function(t2) {
      return e2 === t2.elem;
    }).length;
  }, Se.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, c2 = Se.css(e2, "position"), l2 = Se(e2), f2 = {};
    "static" === c2 && (e2.style.position = "relative"), s2 = l2.offset(), o2 = Se.css(e2, "top"), u2 = Se.css(e2, "left"), ("absolute" === c2 || "fixed" === c2) && (o2 + u2).indexOf("auto") > -1 ? (a2 = (r2 = l2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), ye(t2) && (t2 = t2.call(e2, n2, Se.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : l2.css(f2);
  } }, Se.fn.extend({ offset: function(e2) {
    if (arguments.length) return void 0 === e2 ? this : this.each(function(t3) {
      Se.offset.setOffset(this, e2, t3);
    });
    var t2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (t2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: t2.top + n2.pageYOffset, left: t2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === Se.css(r2, "position")) t2 = r2.getBoundingClientRect();
      else {
        for (t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement; e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === Se.css(e2, "position"); ) e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = Se(e2).offset()).top += Se.css(e2, "borderTopWidth", true), i2.left += Se.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - Se.css(r2, "marginTop", true), left: t2.left - i2.left - Se.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      for (var e2 = this.offsetParent; e2 && "static" === Se.css(e2, "position"); ) e2 = e2.offsetParent;
      return e2 || tt;
    });
  } }), Se.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e2, t2) {
    var n2 = "pageYOffset" === t2;
    Se.fn[e2] = function(r2) {
      return ze(this, function(e3, r3, i2) {
        var o2;
        if (be(e3) ? o2 = e3 : 9 === e3.nodeType && (o2 = e3.defaultView), void 0 === i2) return o2 ? o2[t2] : e3[r3];
        o2 ? o2.scrollTo(n2 ? o2.pageXOffset : i2, n2 ? i2 : o2.pageYOffset) : e3[r3] = i2;
      }, e2, r2, arguments.length);
    };
  }), Se.each(["top", "left"], function(e2, t2) {
    Se.cssHooks[t2] = I(ve.pixelPosition, function(e3, n2) {
      if (n2) return n2 = R(e3, t2), vt.test(n2) ? Se(e3).position()[t2] + "px" : n2;
    });
  }), Se.each({ Height: "height", Width: "width" }, function(e2, t2) {
    Se.each({ padding: "inner" + e2, content: t2, "": "outer" + e2 }, function(n2, r2) {
      Se.fn[r2] = function(i2, o2) {
        var a2 = arguments.length && (n2 || "boolean" != typeof i2), s2 = n2 || (true === i2 || true === o2 ? "margin" : "border");
        return ze(this, function(t3, n3, i3) {
          var o3;
          return be(t3) ? 0 === r2.indexOf("outer") ? t3["inner" + e2] : t3.document.documentElement["client" + e2] : 9 === t3.nodeType ? (o3 = t3.documentElement, Math.max(t3.body["scroll" + e2], o3["scroll" + e2], t3.body["offset" + e2], o3["offset" + e2], o3["client" + e2])) : void 0 === i3 ? Se.css(t3, n3, s2) : Se.style(t3, n3, i3, s2);
        }, t2, a2 ? i2 : void 0, a2);
      };
    });
  }), Se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    Se.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), Se.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.mouseenter(e2).mouseleave(t2 || e2);
  } }), Se.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, t2) {
    Se.fn[t2] = function(e3, n2) {
      return arguments.length > 0 ? this.on(t2, null, e3, n2) : this.trigger(t2);
    };
  });
  var cn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  Se.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), ye(e2)) return r2 = ue.call(arguments, 2), i2 = function() {
      return e2.apply(t2 || this, r2.concat(ue.call(arguments)));
    }, i2.guid = e2.guid = e2.guid || Se.guid++, i2;
  }, Se.holdReady = function(e2) {
    e2 ? Se.readyWait++ : Se.ready(true);
  }, Se.isArray = Array.isArray, Se.parseJSON = JSON.parse, Se.nodeName = o, Se.isFunction = ye, Se.isWindow = be, Se.camelCase = m, Se.type = r, Se.now = Date.now, Se.isNumeric = function(e2) {
    var t2 = Se.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, Se.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(cn, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return Se;
  });
  var ln = e.jQuery, fn = e.$;
  return Se.noConflict = function(t2) {
    return e.$ === Se && (e.$ = fn), t2 && e.jQuery === Se && (e.jQuery = ln), Se;
  }, void 0 === t && (e.jQuery = e.$ = Se), Se;
}), function() {
  "use strict";
  var e = function(e2, t) {
    var n;
    e2.rails !== t && e2.error("jquery-ujs has already been loaded!");
    var r = e2(document);
    e2.rails = n = { linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]", buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form:not([data-turbo=true])", formInputClickSelector: "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])", disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled", requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])", fileInputSelector: "input[name][type=file]:not([disabled])", linkDisableSelector: "a[data-disable-with], a[data-disable]", buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]", csrfToken: function() {
      return e2("meta[name=csrf-token]").attr("content");
    }, csrfParam: function() {
      return e2("meta[name=csrf-param]").attr("content");
    }, CSRFProtection: function(e3) {
      var t2 = n.csrfToken();
      t2 && e3.setRequestHeader("X-CSRF-Token", t2);
    }, refreshCSRFTokens: function() {
      e2('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken());
    }, fire: function(t2, n2, r2) {
      var i = e2.Event(n2);
      return t2.trigger(i, r2), false !== i.result;
    }, confirm: function(e3) {
      return confirm(e3);
    }, ajax: function(t2) {
      return e2.ajax(t2);
    }, href: function(e3) {
      return e3[0].href;
    }, isRemote: function(e3) {
      return e3.data("remote") !== t && false !== e3.data("remote");
    }, handleRemote: function(r2) {
      var i, o, a, s, u, c;
      if (n.fire(r2, "ajax:before")) {
        if (s = r2.data("with-credentials") || null, u = r2.data("type") || e2.ajaxSettings && e2.ajaxSettings.dataType, r2.is("form")) {
          i = r2.data("ujs:submit-button-formmethod") || r2.attr("method"), o = r2.data("ujs:submit-button-formaction") || r2.attr("action"), a = e2(r2[0]).serializeArray();
          var l = r2.data("ujs:submit-button");
          l && (a.push(l), r2.data("ujs:submit-button", null)), r2.data("ujs:submit-button-formmethod", null), r2.data("ujs:submit-button-formaction", null);
        } else r2.is(n.inputChangeSelector) ? (i = r2.data("method"), o = r2.data("url"), a = r2.serialize(), r2.data("params") && (a = a + "&" + r2.data("params"))) : r2.is(n.buttonClickSelector) ? (i = r2.data("method") || "get", o = r2.data("url"), a = r2.serialize(), r2.data("params") && (a = a + "&" + r2.data("params"))) : (i = r2.data("method"), o = n.href(r2), a = r2.data("params") || null);
        return c = { type: i || "GET", data: a, dataType: u, beforeSend: function(e3, i2) {
          if (i2.dataType === t && e3.setRequestHeader("accept", "*/*;q=0.5, " + i2.accepts.script), !n.fire(r2, "ajax:beforeSend", [e3, i2])) return false;
          r2.trigger("ajax:send", e3);
        }, success: function(e3, t2, n2) {
          r2.trigger("ajax:success", [e3, t2, n2]);
        }, complete: function(e3, t2) {
          r2.trigger("ajax:complete", [e3, t2]);
        }, error: function(e3, t2, n2) {
          r2.trigger("ajax:error", [e3, t2, n2]);
        }, crossDomain: n.isCrossDomain(o) }, s && (c.xhrFields = { withCredentials: s }), o && (c.url = o), n.ajax(c);
      }
      return false;
    }, isCrossDomain: function(e3) {
      var t2 = document.createElement("a");
      t2.href = location.href;
      var n2 = document.createElement("a");
      try {
        return n2.href = e3, n2.href = n2.href, !((!n2.protocol || ":" === n2.protocol) && !n2.host || t2.protocol + "//" + t2.host == n2.protocol + "//" + n2.host);
      } catch (e4) {
        return true;
      }
    }, handleMethod: function(r2) {
      var i = n.href(r2), o = r2.data("method"), a = r2.attr("target"), s = n.csrfToken(), u = n.csrfParam(), c = e2('<form method="post" action="' + i + '"></form>'), l = '<input name="_method" value="' + o + '" type="hidden" />';
      u === t || s === t || n.isCrossDomain(i) || (l += '<input name="' + u + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(l).appendTo("body"), c.submit();
    }, formElements: function(t2, n2) {
      return t2.is("form") ? e2(t2[0].elements).filter(n2) : t2.find(n2);
    }, disableFormElements: function(t2) {
      n.formElements(t2, n.disableSelector).each(function() {
        n.disableFormElement(e2(this));
      });
    }, disableFormElement: function(e3) {
      var n2, r2;
      n2 = e3.is("button") ? "html" : "val", (r2 = e3.data("disable-with")) !== t && (e3.data("ujs:enable-with", e3[n2]()), e3[n2](r2)), e3.prop("disabled", true), e3.data("ujs:disabled", true);
    }, enableFormElements: function(t2) {
      n.formElements(t2, n.enableSelector).each(function() {
        n.enableFormElement(e2(this));
      });
    }, enableFormElement: function(e3) {
      var n2 = e3.is("button") ? "html" : "val";
      e3.data("ujs:enable-with") !== t && (e3[n2](e3.data("ujs:enable-with")), e3.removeData("ujs:enable-with")), e3.prop("disabled", false), e3.removeData("ujs:disabled");
    }, allowAction: function(e3) {
      var t2, r2 = e3.data("confirm"), i = false;
      if (!r2) return true;
      if (n.fire(e3, "confirm")) {
        try {
          i = n.confirm(r2);
        } catch (e4) {
          (console.error || console.log).call(console, e4.stack || e4);
        }
        t2 = n.fire(e3, "confirm:complete", [i]);
      }
      return i && t2;
    }, blankInputs: function(t2, n2, r2) {
      var i, o, a, s = e2(), u = n2 || "input,textarea", c = t2.find(u), l = {};
      return c.each(function() {
        (i = e2(this)).is("input[type=radio]") ? (a = i.attr("name"), l[a] || (0 === t2.find('input[type=radio]:checked[name="' + a + '"]').length && (o = t2.find('input[type=radio][name="' + a + '"]'), s = s.add(o)), l[a] = a)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === r2 && (s = s.add(i));
      }), !!s.length && s;
    }, nonBlankInputs: function(e3, t2) {
      return n.blankInputs(e3, t2, true);
    }, stopEverything: function(t2) {
      return e2(t2.target).trigger("ujs:everythingStopped"), t2.stopImmediatePropagation(), false;
    }, disableElement: function(e3) {
      var r2 = e3.data("disable-with");
      r2 !== t && (e3.data("ujs:enable-with", e3.html()), e3.html(r2)), e3.on("click.railsDisable", function(e4) {
        return n.stopEverything(e4);
      }), e3.data("ujs:disabled", true);
    }, enableElement: function(e3) {
      e3.data("ujs:enable-with") !== t && (e3.html(e3.data("ujs:enable-with")), e3.removeData("ujs:enable-with")), e3.off("click.railsDisable"), e3.removeData("ujs:disabled");
    } }, n.fire(r, "rails:attachBindings") && (e2.ajaxPrefilter(function(e3, t2, r2) {
      e3.crossDomain || n.CSRFProtection(r2);
    }), e2(window).on("pageshow.rails", function() {
      e2(e2.rails.enableSelector).each(function() {
        var t2 = e2(this);
        t2.data("ujs:disabled") && e2.rails.enableFormElement(t2);
      }), e2(e2.rails.linkDisableSelector).each(function() {
        var t2 = e2(this);
        t2.data("ujs:disabled") && e2.rails.enableElement(t2);
      });
    }), r.on("ajax:complete", n.linkDisableSelector, function() {
      n.enableElement(e2(this));
    }), r.on("ajax:complete", n.buttonDisableSelector, function() {
      n.enableFormElement(e2(this));
    }), r.on("click.rails", n.linkClickSelector, function(t2) {
      var r2 = e2(this), i = r2.data("method"), o = r2.data("params"), a = t2.metaKey || t2.ctrlKey;
      if (!n.allowAction(r2)) return n.stopEverything(t2);
      if (!a && r2.is(n.linkDisableSelector) && n.disableElement(r2), n.isRemote(r2)) {
        if (a && (!i || "GET" === i) && !o) return true;
        var s = n.handleRemote(r2);
        return false === s ? n.enableElement(r2) : s.fail(function() {
          n.enableElement(r2);
        }), false;
      }
      return i ? (n.handleMethod(r2), false) : void 0;
    }), r.on("click.rails", n.buttonClickSelector, function(t2) {
      var r2 = e2(this);
      if (!n.allowAction(r2) || !n.isRemote(r2)) return n.stopEverything(t2);
      r2.is(n.buttonDisableSelector) && n.disableFormElement(r2);
      var i = n.handleRemote(r2);
      return false === i ? n.enableFormElement(r2) : i.fail(function() {
        n.enableFormElement(r2);
      }), false;
    }), r.on("change.rails", n.inputChangeSelector, function(t2) {
      var r2 = e2(this);
      return n.allowAction(r2) && n.isRemote(r2) ? (n.handleRemote(r2), false) : n.stopEverything(t2);
    }), r.on("submit.rails", n.formSubmitSelector, function(r2) {
      var i, o, a = e2(this), s = n.isRemote(a);
      if (!n.allowAction(a)) return n.stopEverything(r2);
      if (a.attr("novalidate") === t) if (a.data("ujs:formnovalidate-button") === t) {
        if ((i = n.blankInputs(a, n.requiredInputSelector, false)) && n.fire(a, "ajax:aborted:required", [i])) return n.stopEverything(r2);
      } else a.data("ujs:formnovalidate-button", t);
      if (s) {
        if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
          setTimeout(function() {
            n.disableFormElements(a);
          }, 13);
          var u = n.fire(a, "ajax:aborted:file", [o]);
          return u || setTimeout(function() {
            n.enableFormElements(a);
          }, 13), u;
        }
        return n.handleRemote(a), false;
      }
      setTimeout(function() {
        n.disableFormElements(a);
      }, 13);
    }), r.on("click.rails", n.formInputClickSelector, function(t2) {
      var r2 = e2(this);
      if (!n.allowAction(r2)) return n.stopEverything(t2);
      var i = r2.attr("name"), o = i ? { name: i, value: r2.val() } : null, a = r2.closest("form");
      0 === a.length && (a = e2("#" + r2.attr("form"))), a.data("ujs:submit-button", o), a.data("ujs:formnovalidate-button", r2.attr("formnovalidate")), a.data("ujs:submit-button-formaction", r2.attr("formaction")), a.data("ujs:submit-button-formmethod", r2.attr("formmethod"));
    }), r.on("ajax:send.rails", n.formSubmitSelector, function(t2) {
      this === t2.target && n.disableFormElements(e2(this));
    }), r.on("ajax:complete.rails", n.formSubmitSelector, function(t2) {
      this === t2.target && n.enableFormElements(e2(this));
    }), e2(function() {
      n.refreshCSRFTokens();
    }));
  };
  window.jQuery ? e(jQuery) : "object" == typeof exports && "object" == typeof module && (module.exports = e);
}(), function(e, t) {
  var n, r = e.jQuery || e.Cowboy || (e.Cowboy = {});
  r.throttle = n = function(e2, n2, i, o) {
    function a() {
      function r2() {
        u = +/* @__PURE__ */ new Date(), i.apply(c, f);
      }
      function a2() {
        s = t;
      }
      var c = this, l = +/* @__PURE__ */ new Date() - u, f = arguments;
      o && !s && r2(), s && clearTimeout(s), o === t && l > e2 ? r2() : true !== n2 && (s = setTimeout(o ? a2 : r2, o === t ? e2 - l : e2));
    }
    var s, u = 0;
    return "boolean" != typeof n2 && (o = i, i = n2, n2 = t), r.guid && (a.guid = i.guid = i.guid || r.guid++), a;
  }, r.debounce = function(e2, r2, i) {
    return i === t ? n(e2, r2, false) : n(e2, i, false !== r2);
  };
}(this), function(e, t) {
  "use strict";
  var n = "0.7.28", r = "", i = "?", o = "function", a = "undefined", s = "object", u = "string", c = "major", l = "model", f = "name", d = "type", p = "vendor", h = "version", m = "architecture", g = "console", v = "mobile", y = "tablet", b = "smarttv", w = "wearable", x = "embedded", T = 255, k = "Amazon", S = "Apple", E = "ASUS", C = "BlackBerry", j = "Browser", A = "Chrome", N = "Firefox", D = "Google", L = "Huawei", O = "LG", _ = "Microsoft", q = "Motorola", P = "Opera", R = "Samsung", I = "Sony", $2 = "Xiaomi", F = "Zebra", H = function(e2, t2) {
    var n2 = {};
    for (var r2 in e2) t2[r2] && t2[r2].length % 2 == 0 ? n2[r2] = t2[r2].concat(e2[r2]) : n2[r2] = e2[r2];
    return n2;
  }, M = function(e2) {
    var t2 = {};
    for (var n2 in e2) t2[e2[n2].toUpperCase()] = e2[n2];
    return t2;
  }, B = function(e2, t2) {
    return typeof e2 === u && -1 !== W(t2).indexOf(W(e2));
  }, W = function(e2) {
    return e2.toLowerCase();
  }, z = function(e2) {
    return typeof e2 === u ? e2.replace(/[^\d\.]/g, r).split(".")[0] : t;
  }, U = function(e2, t2) {
    if (typeof e2 === u) return e2 = e2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, r), typeof t2 === a ? e2 : e2.substring(0, T);
  }, G = function(e2, n2) {
    for (var r2, i2, a2, u2, c2, l2, f2 = 0; f2 < n2.length && !c2; ) {
      var d2 = n2[f2], p2 = n2[f2 + 1];
      for (r2 = i2 = 0; r2 < d2.length && !c2; ) if (c2 = d2[r2++].exec(e2)) for (a2 = 0; a2 < p2.length; a2++) l2 = c2[++i2], typeof (u2 = p2[a2]) === s && u2.length > 0 ? 2 == u2.length ? typeof u2[1] == o ? this[u2[0]] = u2[1].call(this, l2) : this[u2[0]] = u2[1] : 3 == u2.length ? typeof u2[1] !== o || u2[1].exec && u2[1].test ? this[u2[0]] = l2 ? l2.replace(u2[1], u2[2]) : t : this[u2[0]] = l2 ? u2[1].call(this, l2, u2[2]) : t : 4 == u2.length && (this[u2[0]] = l2 ? u2[3].call(this, l2.replace(u2[1], u2[2])) : t) : this[u2] = l2 || t;
      f2 += 2;
    }
  }, V = function(e2, n2) {
    for (var r2 in n2) if (typeof n2[r2] === s && n2[r2].length > 0) {
      for (var o2 = 0; o2 < n2[r2].length; o2++) if (B(n2[r2][o2], e2)) return r2 === i ? t : r2;
    } else if (B(n2[r2], e2)) return r2 === i ? t : r2;
    return e2;
  }, X = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, Y = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [h, [f, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [h, [f, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [f, h], [/opios[\/ ]+([\w\.]+)/i], [h, [f, P + " Mini"]], [/\bopr\/([\w\.]+)/i], [h, [f, P]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [f, h], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [h, [f, "UC" + j]], [/\bqbcore\/([\w\.]+)/i], [h, [f, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [h, [f, "WeChat"]], [/konqueror\/([\w\.]+)/i], [h, [f, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [h, [f, "IE"]], [/yabrowser\/([\w\.]+)/i], [h, [f, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[f, /(.+)/, "$1 Secure " + j], h], [/\bfocus\/([\w\.]+)/i], [h, [f, N + " Focus"]], [/\bopt\/([\w\.]+)/i], [h, [f, P + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [h, [f, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [h, [f, "Dolphin"]], [/coast\/([\w\.]+)/i], [h, [f, P + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [h, [f, "MIUI " + j]], [/fxios\/([-\w\.]+)/i], [h, [f, N]], [/\bqihu|(qi?ho?o?|360)browser/i], [[f, "360 " + j]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[f, /(.+)/, "$1 " + j], h], [/(comodo_dragon)\/([\w\.]+)/i], [[f, /_/g, " "], h], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [f, h], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [f], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[f, "Facebook"], h], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [f, h], [/\bgsa\/([\w\.]+) .*safari\//i], [h, [f, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [h, [f, A + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[f, A + " WebView"], h], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [h, [f, "Android " + j]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [f, h], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [h, [f, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [h, f], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [f, [h, V, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [f, h], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[f, "Netscape"], h], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [h, [f, N + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [f, h]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[m, "amd64"]], [/(ia32(?=;))/i], [[m, W]], [/((?:i[346]|x)86)[;\)]/i], [[m, "ia32"]], [/\b(aarch64|armv?8e?l?)\b/i], [[m, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[m, "armhf"]], [/windows (ce|mobile); ppc;/i], [[m, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[m, /ower/, r, W]], [/(sun4\w)[;\)]/i], [[m, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[m, W]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [l, [p, R], [d, y]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [l, [p, R], [d, v]], [/\((ip(?:hone|od)[\w ]*);/i], [l, [p, S], [d, v]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [l, [p, S], [d, y]], [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i], [l, [p, L], [d, y]], [/huawei([-\w ]+)[;\)]/i, /\b(nexus 6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\) ]/i], [l, [p, L], [d, v]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte)?[_ ]?(?:\d?\w?)[_ ]?(?:plus)?) bui/i], [[l, /_/g, " "], [p, $2], [d, v]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[l, /_/g, " "], [p, $2], [d, y]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [l, [p, "OPPO"], [d, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [l, [p, "Vivo"], [d, v]], [/\b(rmx[12]\d{3})(?: bui|;)/i], [l, [p, "Realme"], [d, v]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [l, [p, q], [d, v]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [l, [p, q], [d, y]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [l, [p, O], [d, y]], [/(lm-?f100[nv]?|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+) bui/i], [l, [p, O], [d, v]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [l, [p, "Lenovo"], [d, y]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[l, /_/g, " "], [p, "Nokia"], [d, v]], [/(pixel c)\b/i], [l, [p, D], [d, y]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [l, [p, D], [d, v]], [/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [l, [p, I], [d, v]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[l, "Xperia Tablet"], [p, I], [d, y]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1) bui/i, /oneplus (a\d{4})[) ]/i], [l, [p, "OnePlus"], [d, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [l, [p, k], [d, y]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[l, /(.+)/g, "Fire Phone $1"], [p, k], [d, v]], [/(playbook);[-\w\),; ]+(rim)/i], [l, p, [d, y]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [l, [p, C], [d, v]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [l, [p, E], [d, y]], [/ (z[es]6[027][01][km][ls]|zenfone \d\w?)\b/i], [l, [p, E], [d, v]], [/(nexus 9)/i], [l, [p, "HTC"], [d, y]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [p, [l, /_/g, " "], [d, v]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [l, [p, "Acer"], [d, y]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [l, [p, "Meizu"], [d, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [p, l, [d, v]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [p, l, [d, y]], [/(surface duo)/i], [l, [p, _], [d, y]], [/droid [\d\.]+; (fp\du?) b/i], [l, [p, "Fairphone"], [d, v]], [/(u304aa)/i], [l, [p, "AT&T"], [d, v]], [/\bsie-(\w*)/i], [l, [p, "Siemens"], [d, v]], [/\b(rct\w+) b/i], [l, [p, "RCA"], [d, y]], [/\b(venue[\d ]{2,7}) b/i], [l, [p, "Dell"], [d, y]], [/\b(q(?:mv|ta)\w+) b/i], [l, [p, "Verizon"], [d, y]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [l, [p, "Barnes & Noble"], [d, y]], [/\b(tm\d{3}\w+) b/i], [l, [p, "NuVision"], [d, y]], [/\b(k88) b/i], [l, [p, "ZTE"], [d, y]], [/\b(nx\d{3}j) b/i], [l, [p, "ZTE"], [d, v]], [/\b(gen\d{3}) b.+49h/i], [l, [p, "Swiss"], [d, v]], [/\b(zur\d{3}) b/i], [l, [p, "Swiss"], [d, y]], [/\b((zeki)?tb.*\b) b/i], [l, [p, "Zeki"], [d, y]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[p, "Dragon Touch"], l, [d, y]], [/\b(ns-?\w{0,9}) b/i], [l, [p, "Insignia"], [d, y]], [/\b((nxa|next)-?\w{0,9}) b/i], [l, [p, "NextBook"], [d, y]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[p, "Voice"], l, [d, v]], [/\b(lvtel\-)?(v1[12]) b/i], [[p, "LvTel"], l, [d, v]], [/\b(ph-1) /i], [l, [p, "Essential"], [d, v]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [l, [p, "Envizen"], [d, y]], [/\b(trio[-\w\. ]+) b/i], [l, [p, "MachSpeed"], [d, y]], [/\btu_(1491) b/i], [l, [p, "Rotor"], [d, y]], [/(shield[\w ]+) b/i], [l, [p, "Nvidia"], [d, y]], [/(sprint) (\w+)/i], [p, l, [d, v]], [/(kin\.[onetw]{3})/i], [[l, /\./g, " "], [p, _], [d, v]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [l, [p, F], [d, y]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [l, [p, F], [d, v]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [p, l, [d, g]], [/droid.+; (shield) bui/i], [l, [p, "Nvidia"], [d, g]], [/(playstation [345portablevi]+)/i], [l, [p, I], [d, g]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [l, [p, _], [d, g]], [/smart-tv.+(samsung)/i], [p, [d, b]], [/hbbtv.+maple;(\d+)/i], [[l, /^/, "SmartTV"], [p, R], [d, b]], [/(?:nux; netcast.+smarttv|lg netcast\.tv-201\d)/i], [[p, O], [d, b]], [/(apple) ?tv/i], [p, [l, S + " TV"], [d, b]], [/crkey/i], [[l, A + "cast"], [p, D], [d, b]], [/droid.+aft(\w)( bui|\))/i], [l, [p, k], [d, b]], [/\(dtv[\);].+(aquos)/i], [l, [p, "Sharp"], [d, b]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[p, U], [l, U], [d, b]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, b]], [/((pebble))app/i], [p, l, [d, w]], [/droid.+; (glass) \d/i], [l, [p, D], [d, w]], [/droid.+; (wt63?0{2,3})\)/i], [l, [p, F], [d, w]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [p, [d, x]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [l, [d, v]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [l, [d, y]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, y]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[d, v]], [/(android[-\w\. ]{0,9});.+buil/i], [l, [p, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [h, [f, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [h, [f, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [f, h], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [h, f]], os: [[/microsoft (windows) (vista|xp)/i], [f, h], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [f, [h, V, X]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[f, "Windows"], [h, V, X]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[h, /_/g, "."], [f, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[f, "Mac OS"], [h, /_/g, "."]], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [f, h], [/\(bb(10);/i], [h, [f, C]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [h, [f, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [h, [f, N + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [h, [f, "webOS"]], [/crkey\/([\d\.]+)/i], [h, [f, A + "cast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[f, "Chromium OS"], h], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopc]{0,4}bsd|dragonfly) ?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [f, h], [/(sunos) ?([\w\.\d]*)/i], [[f, "Solaris"], h], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [f, h]] }, Q = function(n2, i2) {
    if (typeof n2 === s && (i2 = n2, n2 = t), !(this instanceof Q)) return new Q(n2, i2).getResult();
    var o2 = n2 || (typeof e !== a && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : r), c2 = i2 ? H(Y, i2) : Y;
    return this.getBrowser = function() {
      var e2 = {};
      return e2[f] = t, e2[h] = t, G.call(e2, o2, c2.browser), e2.major = z(e2.version), e2;
    }, this.getCPU = function() {
      var e2 = {};
      return e2[m] = t, G.call(e2, o2, c2.cpu), e2;
    }, this.getDevice = function() {
      var e2 = {};
      return e2[p] = t, e2[l] = t, e2[d] = t, G.call(e2, o2, c2.device), e2;
    }, this.getEngine = function() {
      var e2 = {};
      return e2[f] = t, e2[h] = t, G.call(e2, o2, c2.engine), e2;
    }, this.getOS = function() {
      var e2 = {};
      return e2[f] = t, e2[h] = t, G.call(e2, o2, c2.os), e2;
    }, this.getResult = function() {
      return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
    }, this.getUA = function() {
      return o2;
    }, this.setUA = function(e2) {
      return o2 = typeof e2 === u && e2.length > T ? U(e2, T) : e2, this;
    }, this.setUA(o2), this;
  };
  Q.VERSION = n, Q.BROWSER = M([f, h, c]), Q.CPU = M([m]), Q.DEVICE = M([l, p, d, g, v, b, y, w, x]), Q.ENGINE = Q.OS = M([f, h]), typeof exports !== a ? (typeof module !== a && module.exports && (exports = module.exports = Q), exports.UAParser = Q) : typeof define === o && define.amd ? define(function() {
    return Q;
  }) : typeof e !== a && (e.UAParser = Q);
  var K = typeof e !== a && (e.jQuery || e.Zepto);
  if (K && !K.ua) {
    var Z = new Q();
    K.ua = Z.getResult(), K.ua.get = function() {
      return Z.getUA();
    }, K.ua.set = function(e2) {
      Z.setUA(e2);
      var t2 = Z.getResult();
      for (var n2 in t2) K.ua[n2] = t2[n2];
    };
  }
}("object" == typeof window ? window : this), function() {
  window.BrowserDetector = { uaParser: new UAParser(navigator.userAgent), browserName: function() {
    return this.uaParser.getBrowser().name;
  }, browserVersion: function() {
    return this.uaParser.getBrowser().version;
  }, osName: function() {
    return this.uaParser.getOS().name;
  }, osVersion: function() {
    return this.uaParser.getOS().version;
  }, isBrowser: function(e) {
    return this.browserName().toLowerCase() === e.toLowerCase();
  }, isOS: function(e) {
    return this.osName().toLowerCase() === e.toLowerCase();
  }, check: function(e) {
    var t, n;
    for (t in e) if (n = e[t], this.isBrowser(t)) return parseInt(this.browserVersion().split(".")[0]) >= n;
    return true;
  }, isTelegramBrowser: function() {
    return "undefined" != typeof TelegramWebviewProxy;
  } };
}.call(this), function() {
  "use strict";
  function e(t2) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
      return typeof e2;
    } : function(e2) {
      return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
    })(t2);
  }
  function t() {
    function n2(e2, t2, n3) {
      return Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }), e2[t2];
    }
    function r2(e2, t2, n3, r3) {
      var i3 = t2 && t2.prototype instanceof o2 ? t2 : o2, a3 = Object.create(i3.prototype), s3 = new h2(r3 || []);
      return w(a3, "_invoke", { value: l2(e2, n3, s3) }), a3;
    }
    function i2(e2, t2, n3) {
      try {
        return { type: "normal", arg: e2.call(t2, n3) };
      } catch (e3) {
        return { type: "throw", arg: e3 };
      }
    }
    function o2() {
    }
    function a2() {
    }
    function s2() {
    }
    function u2(e2) {
      ["next", "throw", "return"].forEach(function(t2) {
        n2(e2, t2, function(e3) {
          return this._invoke(t2, e3);
        });
      });
    }
    function c2(t2, n3) {
      function r3(o4, a3, s3, u3) {
        var c3 = i2(t2[o4], t2, a3);
        if ("throw" !== c3.type) {
          var l3 = c3.arg, f3 = l3.value;
          return f3 && "object" == e(f3) && b.call(f3, "__await") ? n3.resolve(f3.__await).then(function(e2) {
            r3("next", e2, s3, u3);
          }, function(e2) {
            r3("throw", e2, s3, u3);
          }) : n3.resolve(f3).then(function(e2) {
            l3.value = e2, s3(l3);
          }, function(e2) {
            return r3("throw", e2, s3, u3);
          });
        }
        u3(c3.arg);
      }
      var o3;
      w(this, "_invoke", { value: function(e2, t3) {
        function i3() {
          return new n3(function(n4, i4) {
            r3(e2, t3, n4, i4);
          });
        }
        return o3 = o3 ? o3.then(i3, i3) : i3();
      } });
    }
    function l2(e2, t2, n3) {
      var r3 = "suspendedStart";
      return function(o3, a3) {
        if ("executing" === r3) throw new Error("Generator is already running");
        if ("completed" === r3) {
          if ("throw" === o3) throw a3;
          return { value: void 0, done: true };
        }
        for (n3.method = o3, n3.arg = a3; ; ) {
          var s3 = n3.delegate;
          if (s3) {
            var u3 = f2(s3, n3);
            if (u3) {
              if (u3 === E) continue;
              return u3;
            }
          }
          if ("next" === n3.method) n3.sent = n3._sent = n3.arg;
          else if ("throw" === n3.method) {
            if ("suspendedStart" === r3) throw r3 = "completed", n3.arg;
            n3.dispatchException(n3.arg);
          } else "return" === n3.method && n3.abrupt("return", n3.arg);
          r3 = "executing";
          var c3 = i2(e2, t2, n3);
          if ("normal" === c3.type) {
            if (r3 = n3.done ? "completed" : "suspendedYield", c3.arg === E) continue;
            return { value: c3.arg, done: n3.done };
          }
          "throw" === c3.type && (r3 = "completed", n3.method = "throw", n3.arg = c3.arg);
        }
      };
    }
    function f2(e2, t2) {
      var n3 = t2.method, r3 = e2.iterator[n3];
      if (void 0 === r3) return t2.delegate = null, "throw" === n3 && e2.iterator.return && (t2.method = "return", t2.arg = void 0, f2(e2, t2), "throw" === t2.method) || "return" !== n3 && (t2.method = "throw", t2.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), E;
      var o3 = i2(r3, e2.iterator, t2.arg);
      if ("throw" === o3.type) return t2.method = "throw", t2.arg = o3.arg, t2.delegate = null, E;
      var a3 = o3.arg;
      return a3 ? a3.done ? (t2[e2.resultName] = a3.value, t2.next = e2.nextLoc, "return" !== t2.method && (t2.method = "next", t2.arg = void 0), t2.delegate = null, E) : a3 : (t2.method = "throw", t2.arg = new TypeError("iterator result is not an object"), t2.delegate = null, E);
    }
    function d2(e2) {
      var t2 = { tryLoc: e2[0] };
      1 in e2 && (t2.catchLoc = e2[1]), 2 in e2 && (t2.finallyLoc = e2[2], t2.afterLoc = e2[3]), this.tryEntries.push(t2);
    }
    function p2(e2) {
      var t2 = e2.completion || {};
      t2.type = "normal", delete t2.arg, e2.completion = t2;
    }
    function h2(e2) {
      this.tryEntries = [{ tryLoc: "root" }], e2.forEach(d2, this), this.reset(true);
    }
    function m2(e2) {
      if (e2) {
        var t2 = e2[T];
        if (t2) return t2.call(e2);
        if ("function" == typeof e2.next) return e2;
        if (!isNaN(e2.length)) {
          var n3 = -1, r3 = function t3() {
            for (; ++n3 < e2.length; ) if (b.call(e2, n3)) return t3.value = e2[n3], t3.done = false, t3;
            return t3.value = void 0, t3.done = true, t3;
          };
          return r3.next = r3;
        }
      }
      return { next: g2 };
    }
    function g2() {
      return { value: void 0, done: true };
    }
    t = function() {
      return v2;
    };
    var v2 = {}, y = Object.prototype, b = y.hasOwnProperty, w = Object.defineProperty || function(e2, t2, n3) {
      e2[t2] = n3.value;
    }, x = "function" == typeof Symbol ? Symbol : {}, T = x.iterator || "@@iterator", k = x.asyncIterator || "@@asyncIterator", S = x.toStringTag || "@@toStringTag";
    try {
      n2({}, "");
    } catch (e2) {
      n2 = function(e3, t2, n3) {
        return e3[t2] = n3;
      };
    }
    v2.wrap = r2;
    var E = {}, C = {};
    n2(C, T, function() {
      return this;
    });
    var j = Object.getPrototypeOf, A = j && j(j(m2([])));
    A && A !== y && b.call(A, T) && (C = A);
    var N = s2.prototype = o2.prototype = Object.create(C);
    return a2.prototype = s2, w(N, "constructor", { value: s2, configurable: true }), w(s2, "constructor", { value: a2, configurable: true }), a2.displayName = n2(s2, S, "GeneratorFunction"), v2.isGeneratorFunction = function(e2) {
      var t2 = "function" == typeof e2 && e2.constructor;
      return !!t2 && (t2 === a2 || "GeneratorFunction" === (t2.displayName || t2.name));
    }, v2.mark = function(e2) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e2, s2) : (e2.__proto__ = s2, n2(e2, S, "GeneratorFunction")), e2.prototype = Object.create(N), e2;
    }, v2.awrap = function(e2) {
      return { __await: e2 };
    }, u2(c2.prototype), n2(c2.prototype, k, function() {
      return this;
    }), v2.AsyncIterator = c2, v2.async = function(e2, t2, n3, i3, o3) {
      void 0 === o3 && (o3 = Promise);
      var a3 = new c2(r2(e2, t2, n3, i3), o3);
      return v2.isGeneratorFunction(t2) ? a3 : a3.next().then(function(e3) {
        return e3.done ? e3.value : a3.next();
      });
    }, u2(N), n2(N, S, "Generator"), n2(N, T, function() {
      return this;
    }), n2(N, "toString", function() {
      return "[object Generator]";
    }), v2.keys = function(e2) {
      var t2 = Object(e2), n3 = [];
      for (var r3 in t2) n3.push(r3);
      return n3.reverse(), function e3() {
        for (; n3.length; ) {
          var r4 = n3.pop();
          if (r4 in t2) return e3.value = r4, e3.done = false, e3;
        }
        return e3.done = true, e3;
      };
    }, v2.values = m2, h2.prototype = { constructor: h2, reset: function(e2) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(p2), !e2) for (var t2 in this) "t" === t2.charAt(0) && b.call(this, t2) && !isNaN(+t2.slice(1)) && (this[t2] = void 0);
    }, stop: function() {
      this.done = true;
      var e2 = this.tryEntries[0].completion;
      if ("throw" === e2.type) throw e2.arg;
      return this.rval;
    }, dispatchException: function(e2) {
      function t2(t3, r4) {
        return o3.type = "throw", o3.arg = e2, n3.next = t3, r4 && (n3.method = "next", n3.arg = void 0), !!r4;
      }
      if (this.done) throw e2;
      for (var n3 = this, r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
        var i3 = this.tryEntries[r3], o3 = i3.completion;
        if ("root" === i3.tryLoc) return t2("end");
        if (i3.tryLoc <= this.prev) {
          var a3 = b.call(i3, "catchLoc"), s3 = b.call(i3, "finallyLoc");
          if (a3 && s3) {
            if (this.prev < i3.catchLoc) return t2(i3.catchLoc, true);
            if (this.prev < i3.finallyLoc) return t2(i3.finallyLoc);
          } else if (a3) {
            if (this.prev < i3.catchLoc) return t2(i3.catchLoc, true);
          } else {
            if (!s3) throw new Error("try statement without catch or finally");
            if (this.prev < i3.finallyLoc) return t2(i3.finallyLoc);
          }
        }
      }
    }, abrupt: function(e2, t2) {
      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
        var r3 = this.tryEntries[n3];
        if (r3.tryLoc <= this.prev && b.call(r3, "finallyLoc") && this.prev < r3.finallyLoc) {
          var i3 = r3;
          break;
        }
      }
      i3 && ("break" === e2 || "continue" === e2) && i3.tryLoc <= t2 && t2 <= i3.finallyLoc && (i3 = null);
      var o3 = i3 ? i3.completion : {};
      return o3.type = e2, o3.arg = t2, i3 ? (this.method = "next", this.next = i3.finallyLoc, E) : this.complete(o3);
    }, complete: function(e2, t2) {
      if ("throw" === e2.type) throw e2.arg;
      return "break" === e2.type || "continue" === e2.type ? this.next = e2.arg : "return" === e2.type ? (this.rval = this.arg = e2.arg, this.method = "return", this.next = "end") : "normal" === e2.type && t2 && (this.next = t2), E;
    }, finish: function(e2) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n3 = this.tryEntries[t2];
        if (n3.finallyLoc === e2) return this.complete(n3.completion, n3.afterLoc), p2(n3), E;
      }
    }, catch: function(e2) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n3 = this.tryEntries[t2];
        if (n3.tryLoc === e2) {
          var r3 = n3.completion;
          if ("throw" === r3.type) {
            var i3 = r3.arg;
            p2(n3);
          }
          return i3;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(e2, t2, n3) {
      return this.delegate = { iterator: m2(e2), resultName: t2, nextLoc: n3 }, "next" === this.method && (this.arg = void 0), E;
    } }, v2;
  }
  function n(e2, t2, n2, r2, i2, o2, a2) {
    try {
      var s2 = e2[o2](a2), u2 = s2.value;
    } catch (e3) {
      return void n2(e3);
    }
    s2.done ? t2(u2) : Promise.resolve(u2).then(r2, i2);
  }
  function r(e2) {
    return function() {
      var t2 = this, r2 = arguments;
      return new Promise(function(i2, o2) {
        function a2(e3) {
          n(u2, i2, o2, a2, s2, "next", e3);
        }
        function s2(e3) {
          n(u2, i2, o2, a2, s2, "throw", e3);
        }
        var u2 = e2.apply(t2, r2);
        a2(void 0);
      });
    };
  }
  function i(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  var o;
  !function(e2) {
    e2.SOCIAL = "social", e2.SUGGEST = "suggest", e2.TOKEN = "suggest-token", e2.PROVIDER = "provider";
  }(o || (o = {}));
  var a, s = function() {
    var e2 = r(t().mark(function e3(n2) {
      var r2, i2, o2, a2, s2, u2 = arguments;
      return t().wrap(function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            return r2 = u2.length > 1 && void 0 !== u2[1] ? u2[1] : "https://autofill.yandex.ru", e4.next = 3, fetch("".concat(r2, "/version")).then(function(e5) {
              return e5.json();
            });
          case 3:
            return i2 = e4.sent, o2 = i2.version, a2 = document.createElement("script"), s2 = document.head || document.getElementsByTagName("head")[0], e4.next = 9, new Promise(function(e5) {
              a2.onload = function() {
                return e5(0);
              }, a2.src = "https://yastatic.net/s3/passport-static/autofill/".concat(o2, "/client/").concat(n2, ".js"), s2.appendChild(a2);
            });
          case 9:
            return e4.next = 11, new Promise(function(e5) {
              return setTimeout(e5, 0);
            });
          case 11:
          case "end":
            return e4.stop();
        }
      }, e3);
    }));
    return function(t2) {
      return e2.apply(this, arguments);
    };
  }(), u = function() {
    var e2 = r(t().mark(function e3(n2) {
      return t().wrap(function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            return e4.abrupt("return", s(n2, "https://".concat("autofill", ".yandex.ru")));
          case 1:
          case "end":
            return e4.stop();
        }
      }, e3);
    }));
    return function(t2) {
      return e2.apply(this, arguments);
    };
  }(), c = {}, l = function(e2, t2, n2) {
    return new Promise(function(r2) {
      c[e2] ? c[e2].push({ args: t2, resolve: r2, extra: n2 }) : c[e2] = [{ args: t2, resolve: r2, extra: n2 }];
    });
  };
  parseInt(null === (a = navigator) || void 0 === a ? void 0 : a.userAgent.toLowerCase().split("msie")[1], 10), window.__CSRF__, (window.__USER__ || { uid: null }).uid;
  var f, d, p, h = function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "_ru_yandex_autofill";
    return window.document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + e2 + "\\s*=\\s*([^;]*).*$)|^.*$"), "$1");
  }, m = 640, g = 720, v = function(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.hostname, r2 = void 0 === n2 ? "https://autofill.yandex.ru" : n2, i2 = t2.sourceId, o2 = void 0 === i2 ? "" : i2, a2 = "".concat(document.location.protocol, "//").concat(document.location.hostname).concat(document.location.pathname), s2 = h("_ym_uid") || localStorage && localStorage.getItem("_ym_uid") || "", u2 = "".concat(r2, "/suggest/popup?").concat(Object.keys(e2).map(function(t3) {
      return "".concat(t3, "=").concat(encodeURIComponent(String(e2[t3])));
    }).join("&"), "&location=").concat(encodeURIComponent(a2), "&widget_kind=html");
    return s2 && (u2 += "&ym_uid=".concat(encodeURIComponent(s2))), o2 && (u2 += "&source_id=".concat(encodeURIComponent(o2))), u2;
  };
  !function(e2) {
    e2.INIT = "init";
  }(f || (f = {})), window.YaAuthSuggest = { init: function() {
    for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
    return l(o.SUGGEST, t2, f.INIT);
  }, getOauthUrl: v, openOauthPopup: function(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = (screen.width - m) / 2, r2 = (screen.height - g) / 2, i2 = v(e2, t2);
    return window.open(i2, "oauth", "left=".concat(n2, ", top=").concat(r2, ", width=").concat(m, ", height=").concat(g, ", scrollbars=no"));
  } }, d = o.SUGGEST, p = function(e2) {
    var t2, n2, r2 = e2.args, o2 = e2.resolve;
    if (e2.extra === f.INIT) return (t2 = window.YaAuthSuggest).init.apply(t2, (n2 = r2, function(e3) {
      if (Array.isArray(e3)) return i(e3);
    }(n2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(n2) || function(e3, t3) {
      if (e3) {
        if ("string" == typeof e3) return i(e3, t3);
        var n3 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? i(e3, t3) : void 0;
      }
    }(n2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }())).then(o2);
  }, u(d).then(function() {
    var e2;
    null === (e2 = c[d]) || void 0 === e2 || e2.forEach(p), delete c[d];
  });
}(), function() {
  "use strict";
  function e(t2) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
      return typeof e2;
    } : function(e2) {
      return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
    })(t2);
  }
  function t() {
    function n2(e2, t2, n3) {
      return Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }), e2[t2];
    }
    function r2(e2, t2, n3, r3) {
      var i3 = t2 && t2.prototype instanceof o2 ? t2 : o2, a3 = Object.create(i3.prototype), s3 = new h(r3 || []);
      return w(a3, "_invoke", { value: l2(e2, n3, s3) }), a3;
    }
    function i2(e2, t2, n3) {
      try {
        return { type: "normal", arg: e2.call(t2, n3) };
      } catch (e3) {
        return { type: "throw", arg: e3 };
      }
    }
    function o2() {
    }
    function a2() {
    }
    function s2() {
    }
    function u2(e2) {
      ["next", "throw", "return"].forEach(function(t2) {
        n2(e2, t2, function(e3) {
          return this._invoke(t2, e3);
        });
      });
    }
    function c2(t2, n3) {
      function r3(o4, a3, s3, u3) {
        var c3 = i2(t2[o4], t2, a3);
        if ("throw" !== c3.type) {
          var l3 = c3.arg, f3 = l3.value;
          return f3 && "object" == e(f3) && b.call(f3, "__await") ? n3.resolve(f3.__await).then(function(e2) {
            r3("next", e2, s3, u3);
          }, function(e2) {
            r3("throw", e2, s3, u3);
          }) : n3.resolve(f3).then(function(e2) {
            l3.value = e2, s3(l3);
          }, function(e2) {
            return r3("throw", e2, s3, u3);
          });
        }
        u3(c3.arg);
      }
      var o3;
      w(this, "_invoke", { value: function(e2, t3) {
        function i3() {
          return new n3(function(n4, i4) {
            r3(e2, t3, n4, i4);
          });
        }
        return o3 = o3 ? o3.then(i3, i3) : i3();
      } });
    }
    function l2(e2, t2, n3) {
      var r3 = "suspendedStart";
      return function(o3, a3) {
        if ("executing" === r3) throw new Error("Generator is already running");
        if ("completed" === r3) {
          if ("throw" === o3) throw a3;
          return { value: void 0, done: true };
        }
        for (n3.method = o3, n3.arg = a3; ; ) {
          var s3 = n3.delegate;
          if (s3) {
            var u3 = f2(s3, n3);
            if (u3) {
              if (u3 === E) continue;
              return u3;
            }
          }
          if ("next" === n3.method) n3.sent = n3._sent = n3.arg;
          else if ("throw" === n3.method) {
            if ("suspendedStart" === r3) throw r3 = "completed", n3.arg;
            n3.dispatchException(n3.arg);
          } else "return" === n3.method && n3.abrupt("return", n3.arg);
          r3 = "executing";
          var c3 = i2(e2, t2, n3);
          if ("normal" === c3.type) {
            if (r3 = n3.done ? "completed" : "suspendedYield", c3.arg === E) continue;
            return { value: c3.arg, done: n3.done };
          }
          "throw" === c3.type && (r3 = "completed", n3.method = "throw", n3.arg = c3.arg);
        }
      };
    }
    function f2(e2, t2) {
      var n3 = t2.method, r3 = e2.iterator[n3];
      if (void 0 === r3) return t2.delegate = null, "throw" === n3 && e2.iterator.return && (t2.method = "return", t2.arg = void 0, f2(e2, t2), "throw" === t2.method) || "return" !== n3 && (t2.method = "throw", t2.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), E;
      var o3 = i2(r3, e2.iterator, t2.arg);
      if ("throw" === o3.type) return t2.method = "throw", t2.arg = o3.arg, t2.delegate = null, E;
      var a3 = o3.arg;
      return a3 ? a3.done ? (t2[e2.resultName] = a3.value, t2.next = e2.nextLoc, "return" !== t2.method && (t2.method = "next", t2.arg = void 0), t2.delegate = null, E) : a3 : (t2.method = "throw", t2.arg = new TypeError("iterator result is not an object"), t2.delegate = null, E);
    }
    function d2(e2) {
      var t2 = { tryLoc: e2[0] };
      1 in e2 && (t2.catchLoc = e2[1]), 2 in e2 && (t2.finallyLoc = e2[2], t2.afterLoc = e2[3]), this.tryEntries.push(t2);
    }
    function p(e2) {
      var t2 = e2.completion || {};
      t2.type = "normal", delete t2.arg, e2.completion = t2;
    }
    function h(e2) {
      this.tryEntries = [{ tryLoc: "root" }], e2.forEach(d2, this), this.reset(true);
    }
    function m(e2) {
      if (e2) {
        var t2 = e2[T];
        if (t2) return t2.call(e2);
        if ("function" == typeof e2.next) return e2;
        if (!isNaN(e2.length)) {
          var n3 = -1, r3 = function t3() {
            for (; ++n3 < e2.length; ) if (b.call(e2, n3)) return t3.value = e2[n3], t3.done = false, t3;
            return t3.value = void 0, t3.done = true, t3;
          };
          return r3.next = r3;
        }
      }
      return { next: g };
    }
    function g() {
      return { value: void 0, done: true };
    }
    t = function() {
      return v;
    };
    var v = {}, y = Object.prototype, b = y.hasOwnProperty, w = Object.defineProperty || function(e2, t2, n3) {
      e2[t2] = n3.value;
    }, x = "function" == typeof Symbol ? Symbol : {}, T = x.iterator || "@@iterator", k = x.asyncIterator || "@@asyncIterator", S = x.toStringTag || "@@toStringTag";
    try {
      n2({}, "");
    } catch (e2) {
      n2 = function(e3, t2, n3) {
        return e3[t2] = n3;
      };
    }
    v.wrap = r2;
    var E = {}, C = {};
    n2(C, T, function() {
      return this;
    });
    var j = Object.getPrototypeOf, A = j && j(j(m([])));
    A && A !== y && b.call(A, T) && (C = A);
    var N = s2.prototype = o2.prototype = Object.create(C);
    return a2.prototype = s2, w(N, "constructor", { value: s2, configurable: true }), w(s2, "constructor", { value: a2, configurable: true }), a2.displayName = n2(s2, S, "GeneratorFunction"), v.isGeneratorFunction = function(e2) {
      var t2 = "function" == typeof e2 && e2.constructor;
      return !!t2 && (t2 === a2 || "GeneratorFunction" === (t2.displayName || t2.name));
    }, v.mark = function(e2) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e2, s2) : (e2.__proto__ = s2, n2(e2, S, "GeneratorFunction")), e2.prototype = Object.create(N), e2;
    }, v.awrap = function(e2) {
      return { __await: e2 };
    }, u2(c2.prototype), n2(c2.prototype, k, function() {
      return this;
    }), v.AsyncIterator = c2, v.async = function(e2, t2, n3, i3, o3) {
      void 0 === o3 && (o3 = Promise);
      var a3 = new c2(r2(e2, t2, n3, i3), o3);
      return v.isGeneratorFunction(t2) ? a3 : a3.next().then(function(e3) {
        return e3.done ? e3.value : a3.next();
      });
    }, u2(N), n2(N, S, "Generator"), n2(N, T, function() {
      return this;
    }), n2(N, "toString", function() {
      return "[object Generator]";
    }), v.keys = function(e2) {
      var t2 = Object(e2), n3 = [];
      for (var r3 in t2) n3.push(r3);
      return n3.reverse(), function e3() {
        for (; n3.length; ) {
          var r4 = n3.pop();
          if (r4 in t2) return e3.value = r4, e3.done = false, e3;
        }
        return e3.done = true, e3;
      };
    }, v.values = m, h.prototype = { constructor: h, reset: function(e2) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(p), !e2) for (var t2 in this) "t" === t2.charAt(0) && b.call(this, t2) && !isNaN(+t2.slice(1)) && (this[t2] = void 0);
    }, stop: function() {
      this.done = true;
      var e2 = this.tryEntries[0].completion;
      if ("throw" === e2.type) throw e2.arg;
      return this.rval;
    }, dispatchException: function(e2) {
      function t2(t3, r4) {
        return o3.type = "throw", o3.arg = e2, n3.next = t3, r4 && (n3.method = "next", n3.arg = void 0), !!r4;
      }
      if (this.done) throw e2;
      for (var n3 = this, r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
        var i3 = this.tryEntries[r3], o3 = i3.completion;
        if ("root" === i3.tryLoc) return t2("end");
        if (i3.tryLoc <= this.prev) {
          var a3 = b.call(i3, "catchLoc"), s3 = b.call(i3, "finallyLoc");
          if (a3 && s3) {
            if (this.prev < i3.catchLoc) return t2(i3.catchLoc, true);
            if (this.prev < i3.finallyLoc) return t2(i3.finallyLoc);
          } else if (a3) {
            if (this.prev < i3.catchLoc) return t2(i3.catchLoc, true);
          } else {
            if (!s3) throw new Error("try statement without catch or finally");
            if (this.prev < i3.finallyLoc) return t2(i3.finallyLoc);
          }
        }
      }
    }, abrupt: function(e2, t2) {
      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
        var r3 = this.tryEntries[n3];
        if (r3.tryLoc <= this.prev && b.call(r3, "finallyLoc") && this.prev < r3.finallyLoc) {
          var i3 = r3;
          break;
        }
      }
      i3 && ("break" === e2 || "continue" === e2) && i3.tryLoc <= t2 && t2 <= i3.finallyLoc && (i3 = null);
      var o3 = i3 ? i3.completion : {};
      return o3.type = e2, o3.arg = t2, i3 ? (this.method = "next", this.next = i3.finallyLoc, E) : this.complete(o3);
    }, complete: function(e2, t2) {
      if ("throw" === e2.type) throw e2.arg;
      return "break" === e2.type || "continue" === e2.type ? this.next = e2.arg : "return" === e2.type ? (this.rval = this.arg = e2.arg, this.method = "return", this.next = "end") : "normal" === e2.type && t2 && (this.next = t2), E;
    }, finish: function(e2) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n3 = this.tryEntries[t2];
        if (n3.finallyLoc === e2) return this.complete(n3.completion, n3.afterLoc), p(n3), E;
      }
    }, catch: function(e2) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n3 = this.tryEntries[t2];
        if (n3.tryLoc === e2) {
          var r3 = n3.completion;
          if ("throw" === r3.type) {
            var i3 = r3.arg;
            p(n3);
          }
          return i3;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(e2, t2, n3) {
      return this.delegate = { iterator: m(e2), resultName: t2, nextLoc: n3 }, "next" === this.method && (this.arg = void 0), E;
    } }, v;
  }
  function n(e2, t2, n2, r2, i2, o2, a2) {
    try {
      var s2 = e2[o2](a2), u2 = s2.value;
    } catch (e3) {
      return void n2(e3);
    }
    s2.done ? t2(u2) : Promise.resolve(u2).then(r2, i2);
  }
  function r(e2) {
    return function() {
      var t2 = this, r2 = arguments;
      return new Promise(function(i2, o2) {
        function a2(e3) {
          n(u2, i2, o2, a2, s2, "next", e3);
        }
        function s2(e3) {
          n(u2, i2, o2, a2, s2, "throw", e3);
        }
        var u2 = e2.apply(t2, r2);
        a2(void 0);
      });
    };
  }
  function i(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  var o;
  !function(e2) {
    e2.SOCIAL = "social", e2.SUGGEST = "suggest", e2.TOKEN = "suggest-token", e2.PROVIDER = "provider";
  }(o || (o = {}));
  var a, s, u, c = function() {
    var e2 = r(t().mark(function e3(n2) {
      var r2, i2, o2, a2, s2, u2 = arguments;
      return t().wrap(function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            return r2 = u2.length > 1 && void 0 !== u2[1] ? u2[1] : "https://autofill.yandex.ru", e4.next = 3, fetch("".concat(r2, "/version")).then(function(e5) {
              return e5.json();
            });
          case 3:
            return i2 = e4.sent, o2 = i2.version, a2 = document.createElement("script"), s2 = document.head || document.getElementsByTagName("head")[0], e4.next = 9, new Promise(function(e5) {
              a2.onload = function() {
                return e5(0);
              }, a2.src = "https://yastatic.net/s3/passport-static/autofill/".concat(o2, "/client/").concat(n2, ".js"), s2.appendChild(a2);
            });
          case 9:
            return e4.next = 11, new Promise(function(e5) {
              return setTimeout(e5, 0);
            });
          case 11:
          case "end":
            return e4.stop();
        }
      }, e3);
    }));
    return function(t2) {
      return e2.apply(this, arguments);
    };
  }(), l = function() {
    var e2 = r(t().mark(function e3(n2) {
      return t().wrap(function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            return e4.abrupt("return", c(n2, "https://".concat("autofill", ".yandex.ru")));
          case 1:
          case "end":
            return e4.stop();
        }
      }, e3);
    }));
    return function(t2) {
      return e2.apply(this, arguments);
    };
  }(), f = {}, d = function(e2, t2, n2) {
    return new Promise(function(r2) {
      f[e2] ? f[e2].push({ args: t2, resolve: r2, extra: n2 }) : f[e2] = [{ args: t2, resolve: r2, extra: n2 }];
    });
  };
  !function(e2) {
    e2.MAIN = "main";
  }(a || (a = {})), window.YaSendSuggestToken = function() {
    for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
    return d(o.TOKEN, t2, a.MAIN);
  }, s = o.TOKEN, u = function(e2) {
    var t2, n2, r2 = e2.args, o2 = e2.resolve;
    if (e2.extra === a.MAIN) return (t2 = window).YaSendSuggestToken.apply(t2, (n2 = r2, function(e3) {
      if (Array.isArray(e3)) return i(e3);
    }(n2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(n2) || function(e3, t3) {
      if (e3) {
        if ("string" == typeof e3) return i(e3, t3);
        var n3 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? i(e3, t3) : void 0;
      }
    }(n2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }())).then(o2);
  }, l(s).then(function() {
    var e2;
    null === (e2 = f[s]) || void 0 === e2 || e2.forEach(u), delete f[s];
  });
}(), function() {
  window.TimezoneCookie = { cookieName: "timezone", init: function() {
    if (!Cookies.get(this.cookieName)) return Cookies.set(this.cookieName, Intl.DateTimeFormat().resolvedOptions().timeZone);
  } };
}.call(this), function() {
  window.reachGoal = function(e) {
    if (null != window.ym && window.ym(43864029, "reachGoal", e), null != window._tmr && window._tmr.push({ id: "3064824", type: "reachGoal", goal: e }), window.fbq) return window.fbq("track", e);
  }, window.validateForm = function(e, t) {
    var n, r, i, o;
    for (r in e.find(".input").removeClass("input--error").removeClass("input--warning").find(".input__error").remove(), o = [], t) i = t[r], n = $("<div></div>").addClass("input__error").append(i[0]), o.push(e.find("[name*=" + r + "]").parents(".input:first").addClass("input--error").removeClass("input--success").append(n));
    return o;
  }, window.signUpRedirectWithError = function(e, t) {
    var n;
    return (n = new URL(e)).searchParams.append("error", t), n;
  }, window.yandexCallbackInvoke = function(e, t, n, r, i) {
    var o;
    null == i && (i = false), o = { code: t, state: n }, $.ajax({ url: e + "/gateway/oauth/yandex/callback", type: "POST", dataType: "json", data: o }).then(function(e2) {
      return "true" === e2.success ? ("true" === e2.is_new_user && window.reachGoal("Lead"), setTimeout(function() {
        return window.location = e2.url;
      }, 100)) : i ? window.location = signUpRedirectWithError(i, e2.error) : ($("[data-role~=yandex-button]").trigger("loadable:load"), $("#yandex-button").html("" + e2.error));
    }).catch(function() {
      return i ? window.location = signUpRedirectWithError(i, r) : ($("[data-role~=yandex-button]").trigger("loadable:load"), $("#yandex-button").html(r));
    });
  }, window.yandexButtonInvoke = function(e, t, n, r) {
    window.YaAuthSuggest.init({ client_id: e, response_type: "code", redirect_uri: t + "/gateway/oauth/yandex", scope: "login:email login:info login:avatar login:default_phone", force_confirm: "no", state: n }, t, { view: "button", parentId: "yandex-button", buttonView: $("#yandex-button").data("theme"), buttonTheme: "light", buttonSize: "xxl", buttonBorderRadius: 6 }).then(function(e2) {
      return $("[data-role~=yandex-button]").trigger("loadable:load"), e2.handler();
    }).then(function(e2) {
      return $("[data-role~=yandex-button]").trigger("loadable:loading"), window.yandexCallbackInvoke(t, decodeURIComponent(e2.code), decodeURIComponent(e2.state), r);
    }).catch(function() {
      return $("[data-role~=yandex-button]").trigger("loadable:load"), $("#yandex-button").html(r);
    });
  }, window.$window = $(window), window.delay = function(e, t) {
    return setTimeout(t, e);
  }, window.isScrolledIntoView = function(e, t) {
    var n, r, i;
    return null == t && (t = 0), n = $(e), r = $window.scrollTop() + ((null != (i = window.visualViewport) ? i.height : void 0) || $window.height()), n.offset().top - t < r;
  }, window.Landing || (window.Landing = {}), Landing.Initializer = { init: function() {
    return this.setWindowHeight(), this.initAccordion(), this.initAnimatedContent(), this.initCouponToggle(), this.initForms(), this.initFeaturesToggle(), this.initPlanPreview(), this.initPreview(), this.initFixedBackground(), this.initTabs(), this.initLoadable(), this.initTimezoneCookie();
  }, setWindowHeight: function() {
    var e;
    return e = $.throttle(100, function() {
      return document.documentElement.style.setProperty("--window-height", $window.height() + "px");
    }), $window.on("resize", e), e();
  }, initAccordion: function() {
    var e;
    return (e = $("[data-role~=accordion-trigger]")).on("click", function(t) {
      var n;
      return n = $(t.currentTarget), e.not(n).removeClass("is-active").find("[data-role~=accordion-content]").slideUp(200), n.toggleClass("is-active").find("[data-role~=accordion-content]").slideToggle(200);
    });
  }, initAnimatedContent: function() {
    var e;
    return e = $.throttle(100, function() {
      return $(".is-animated:not(.is-visible)").each(function(e2, t) {
        var n;
        if (n = $(t), isScrolledIntoView(n, 40)) return n.addClass("is-visible");
      });
    }), $window.on("scroll resize", e), e();
  }, initCouponToggle: function() {
    return $("[data-role~=coupon-toggle]").on("click", function() {
      return $("[data-role~=coupon]").slideToggle(150);
    });
  }, initForms: function() {
    var e, t, n;
    return $("input[type=text], input[type=password]").on("input", function(e2) {
      return $(e2.currentTarget).parents(".input:first").removeClass("input--error").find(".input__error").remove();
    }), (e = $("form[data-autofocus]")).length && e.find("input:visible, textarea, select").first().focus(), (n = $("[data-role~=password-container]")).find("input[type=password]").on("input", function(e2) {
      return e2.currentTarget.value.length < 6 ? n.not(".input--warning").addClass("input--warning").removeClass("input--success") : n.not(".input--success").addClass("input--success").removeClass("input--warning");
    }), (t = $("[data-role~=password-confirmation-container]")).find("input[type=password]").on("input", function(e2) {
      return e2.currentTarget.value !== n.find("input[type=password]").val() ? t.not(".input--warning").addClass("input--warning").removeClass("input--success") : t.not(".input--success").addClass("input--success").removeClass("input--warning");
    });
  }, initFeaturesToggle: function() {
    return $(".features__button").on("click", function(e) {
      return $(e.currentTarget).parents(".features__list").toggleClass("is-active");
    });
  }, initFixedBackground: function() {
    if (!BrowserDetector.isOS("iOS") || !BrowserDetector.isBrowser("Mobile Safari")) return $("body").addClass("is-fixed-background");
  }, initPlanPreview: function() {
    var e;
    if ((e = $("[data-role~=plan-preview]")).length) return $("[data-role~=select-plan]").on("mouseenter", function(t) {
      var n;
      return n = $(t.currentTarget), e.attr({ variant: n.data("variant") });
    });
  }, initPreview: function() {
    var e, t, n;
    if ((t = $("[data-role~=preview-container]")).length) return e = $("[data-role~=container]"), n = $.throttle(100, function() {
      var n2, r, i, o, a;
      return i = (o = t.width()) / t.height(), a = (r = e.outerWidth(true)) / (n2 = e.outerHeight(true)) > i ? r / o : n2 * i / o, t.css("transform", "scale(" + a + ") translate(-50%, -50%)");
    }), $window.on("resize", n), delay(1e3, function() {
      return n(), $("[data-role~=preview-image]").addClass("is-visible");
    });
  }, initTabs: function() {
    return $("[data-tab]").on("click", function(e) {
      var t;
      return t = $(e.currentTarget).data("tab"), $("[data-tab]").removeClass("is-active").filter("[data-tab=" + t + "]").addClass("is-active");
    });
  }, initLoadable: function() {
    return $("[data-block~=loadable]").on("loadable:load", function(e) {
      return $(e.currentTarget).addClass("is-loaded");
    }).on("loadable:loading", function(e) {
      return $(e.currentTarget).removeClass("is-loaded");
    });
  }, initTimezoneCookie: function() {
    return TimezoneCookie.init();
  } }, $(function() {
    return Landing.Initializer.init();
  });
}.call(this);
