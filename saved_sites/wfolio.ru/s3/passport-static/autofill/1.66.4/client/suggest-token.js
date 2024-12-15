/*! For license information please see suggest-token.js.LICENSE.txt */
!function() {
  "use strict";
  var t, r = parseInt(null === (t = navigator) || void 0 === t ? void 0 : t.userAgent.toLowerCase().split("msie")[1], 10) < 10, e = "token";
  window.__CSRF__, (window.__USER__ || { uid: null }).uid;
  var n = function(t2, e2) {
    var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
    try {
      e2 && (null == n2 || n2.postMessage(r ? JSON.stringify(t2) : t2, e2));
    } catch (t3) {
    }
  }, o = function(t2, e2) {
    var n2, o2, i2, a2 = function(n3) {
      if (n3.origin === t2 || n3.origin === window.origin) {
        var o3 = r ? JSON.parse(n3.data) : n3.data;
        e2(o3, n3);
      }
    };
    return n2 = window, o2 = "message", i2 = a2, n2 && ("addEventListener" in n2 ? n2.addEventListener(o2, i2, false) : n2.attachEvent("on" + o2, i2)), function() {
      return function(t3, r2, e3) {
        t3 && ("removeEventListener" in t3 ? t3.removeEventListener(r2, e3, false) : t3.detachEvent("on" + r2, e3));
      }(window, "message", a2);
    };
  };
  function i(t2) {
    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, i(t2);
  }
  function a() {
    a = function() {
      return r2;
    };
    var t2, r2 = {}, e2 = Object.prototype, n2 = e2.hasOwnProperty, o2 = Object.defineProperty || function(t3, r3, e3) {
      t3[r3] = e3.value;
    }, c2 = "function" == typeof Symbol ? Symbol : {}, u2 = c2.iterator || "@@iterator", l2 = c2.asyncIterator || "@@asyncIterator", f2 = c2.toStringTag || "@@toStringTag";
    function s2(t3, r3, e3) {
      return Object.defineProperty(t3, r3, { value: e3, enumerable: true, configurable: true, writable: true }), t3[r3];
    }
    try {
      s2({}, "");
    } catch (t3) {
      s2 = function(t4, r3, e3) {
        return t4[r3] = e3;
      };
    }
    function h(t3, r3, e3, n3) {
      var i2 = r3 && r3.prototype instanceof m ? r3 : m, a2 = Object.create(i2.prototype), c3 = new T(n3 || []);
      return o2(a2, "_invoke", { value: P(t3, e3, c3) }), a2;
    }
    function p(t3, r3, e3) {
      try {
        return { type: "normal", arg: t3.call(r3, e3) };
      } catch (t4) {
        return { type: "throw", arg: t4 };
      }
    }
    r2.wrap = h;
    var y = "suspendedStart", v = "suspendedYield", d = "executing", w = "completed", g = {};
    function m() {
    }
    function b() {
    }
    function O() {
    }
    var E = {};
    s2(E, u2, function() {
      return this;
    });
    var x = Object.getPrototypeOf, L = x && x(x(G([])));
    L && L !== e2 && n2.call(L, u2) && (E = L);
    var j = O.prototype = m.prototype = Object.create(E);
    function S(t3) {
      ["next", "throw", "return"].forEach(function(r3) {
        s2(t3, r3, function(t4) {
          return this._invoke(r3, t4);
        });
      });
    }
    function _(t3, r3) {
      function e3(o3, a3, c3, u3) {
        var l3 = p(t3[o3], t3, a3);
        if ("throw" !== l3.type) {
          var f3 = l3.arg, s3 = f3.value;
          return s3 && "object" == i(s3) && n2.call(s3, "__await") ? r3.resolve(s3.__await).then(function(t4) {
            e3("next", t4, c3, u3);
          }, function(t4) {
            e3("throw", t4, c3, u3);
          }) : r3.resolve(s3).then(function(t4) {
            f3.value = t4, c3(f3);
          }, function(t4) {
            return e3("throw", t4, c3, u3);
          });
        }
        u3(l3.arg);
      }
      var a2;
      o2(this, "_invoke", { value: function(t4, n3) {
        function o3() {
          return new r3(function(r4, o4) {
            e3(t4, n3, r4, o4);
          });
        }
        return a2 = a2 ? a2.then(o3, o3) : o3();
      } });
    }
    function P(r3, e3, n3) {
      var o3 = y;
      return function(i2, a2) {
        if (o3 === d) throw Error("Generator is already running");
        if (o3 === w) {
          if ("throw" === i2) throw a2;
          return { value: t2, done: true };
        }
        for (n3.method = i2, n3.arg = a2; ; ) {
          var c3 = n3.delegate;
          if (c3) {
            var u3 = k(c3, n3);
            if (u3) {
              if (u3 === g) continue;
              return u3;
            }
          }
          if ("next" === n3.method) n3.sent = n3._sent = n3.arg;
          else if ("throw" === n3.method) {
            if (o3 === y) throw o3 = w, n3.arg;
            n3.dispatchException(n3.arg);
          } else "return" === n3.method && n3.abrupt("return", n3.arg);
          o3 = d;
          var l3 = p(r3, e3, n3);
          if ("normal" === l3.type) {
            if (o3 = n3.done ? w : v, l3.arg === g) continue;
            return { value: l3.arg, done: n3.done };
          }
          "throw" === l3.type && (o3 = w, n3.method = "throw", n3.arg = l3.arg);
        }
      };
    }
    function k(r3, e3) {
      var n3 = e3.method, o3 = r3.iterator[n3];
      if (o3 === t2) return e3.delegate = null, "throw" === n3 && r3.iterator.return && (e3.method = "return", e3.arg = t2, k(r3, e3), "throw" === e3.method) || "return" !== n3 && (e3.method = "throw", e3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), g;
      var i2 = p(o3, r3.iterator, e3.arg);
      if ("throw" === i2.type) return e3.method = "throw", e3.arg = i2.arg, e3.delegate = null, g;
      var a2 = i2.arg;
      return a2 ? a2.done ? (e3[r3.resultName] = a2.value, e3.next = r3.nextLoc, "return" !== e3.method && (e3.method = "next", e3.arg = t2), e3.delegate = null, g) : a2 : (e3.method = "throw", e3.arg = new TypeError("iterator result is not an object"), e3.delegate = null, g);
    }
    function N(t3) {
      var r3 = { tryLoc: t3[0] };
      1 in t3 && (r3.catchLoc = t3[1]), 2 in t3 && (r3.finallyLoc = t3[2], r3.afterLoc = t3[3]), this.tryEntries.push(r3);
    }
    function A(t3) {
      var r3 = t3.completion || {};
      r3.type = "normal", delete r3.arg, t3.completion = r3;
    }
    function T(t3) {
      this.tryEntries = [{ tryLoc: "root" }], t3.forEach(N, this), this.reset(true);
    }
    function G(r3) {
      if (r3 || "" === r3) {
        var e3 = r3[u2];
        if (e3) return e3.call(r3);
        if ("function" == typeof r3.next) return r3;
        if (!isNaN(r3.length)) {
          var o3 = -1, a2 = function e4() {
            for (; ++o3 < r3.length; ) if (n2.call(r3, o3)) return e4.value = r3[o3], e4.done = false, e4;
            return e4.value = t2, e4.done = true, e4;
          };
          return a2.next = a2;
        }
      }
      throw new TypeError(i(r3) + " is not iterable");
    }
    return b.prototype = O, o2(j, "constructor", { value: O, configurable: true }), o2(O, "constructor", { value: b, configurable: true }), b.displayName = s2(O, f2, "GeneratorFunction"), r2.isGeneratorFunction = function(t3) {
      var r3 = "function" == typeof t3 && t3.constructor;
      return !!r3 && (r3 === b || "GeneratorFunction" === (r3.displayName || r3.name));
    }, r2.mark = function(t3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t3, O) : (t3.__proto__ = O, s2(t3, f2, "GeneratorFunction")), t3.prototype = Object.create(j), t3;
    }, r2.awrap = function(t3) {
      return { __await: t3 };
    }, S(_.prototype), s2(_.prototype, l2, function() {
      return this;
    }), r2.AsyncIterator = _, r2.async = function(t3, e3, n3, o3, i2) {
      void 0 === i2 && (i2 = Promise);
      var a2 = new _(h(t3, e3, n3, o3), i2);
      return r2.isGeneratorFunction(e3) ? a2 : a2.next().then(function(t4) {
        return t4.done ? t4.value : a2.next();
      });
    }, S(j), s2(j, f2, "Generator"), s2(j, u2, function() {
      return this;
    }), s2(j, "toString", function() {
      return "[object Generator]";
    }), r2.keys = function(t3) {
      var r3 = Object(t3), e3 = [];
      for (var n3 in r3) e3.push(n3);
      return e3.reverse(), function t4() {
        for (; e3.length; ) {
          var n4 = e3.pop();
          if (n4 in r3) return t4.value = n4, t4.done = false, t4;
        }
        return t4.done = true, t4;
      };
    }, r2.values = G, T.prototype = { constructor: T, reset: function(r3) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(A), !r3) for (var e3 in this) "t" === e3.charAt(0) && n2.call(this, e3) && !isNaN(+e3.slice(1)) && (this[e3] = t2);
    }, stop: function() {
      this.done = true;
      var t3 = this.tryEntries[0].completion;
      if ("throw" === t3.type) throw t3.arg;
      return this.rval;
    }, dispatchException: function(r3) {
      if (this.done) throw r3;
      var e3 = this;
      function o3(n3, o4) {
        return c3.type = "throw", c3.arg = r3, e3.next = n3, o4 && (e3.method = "next", e3.arg = t2), !!o4;
      }
      for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
        var a2 = this.tryEntries[i2], c3 = a2.completion;
        if ("root" === a2.tryLoc) return o3("end");
        if (a2.tryLoc <= this.prev) {
          var u3 = n2.call(a2, "catchLoc"), l3 = n2.call(a2, "finallyLoc");
          if (u3 && l3) {
            if (this.prev < a2.catchLoc) return o3(a2.catchLoc, true);
            if (this.prev < a2.finallyLoc) return o3(a2.finallyLoc);
          } else if (u3) {
            if (this.prev < a2.catchLoc) return o3(a2.catchLoc, true);
          } else {
            if (!l3) throw Error("try statement without catch or finally");
            if (this.prev < a2.finallyLoc) return o3(a2.finallyLoc);
          }
        }
      }
    }, abrupt: function(t3, r3) {
      for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
        var o3 = this.tryEntries[e3];
        if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
          var i2 = o3;
          break;
        }
      }
      i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= r3 && r3 <= i2.finallyLoc && (i2 = null);
      var a2 = i2 ? i2.completion : {};
      return a2.type = t3, a2.arg = r3, i2 ? (this.method = "next", this.next = i2.finallyLoc, g) : this.complete(a2);
    }, complete: function(t3, r3) {
      if ("throw" === t3.type) throw t3.arg;
      return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && r3 && (this.next = r3), g;
    }, finish: function(t3) {
      for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
        var e3 = this.tryEntries[r3];
        if (e3.finallyLoc === t3) return this.complete(e3.completion, e3.afterLoc), A(e3), g;
      }
    }, catch: function(t3) {
      for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
        var e3 = this.tryEntries[r3];
        if (e3.tryLoc === t3) {
          var n3 = e3.completion;
          if ("throw" === n3.type) {
            var o3 = n3.arg;
            A(e3);
          }
          return o3;
        }
      }
      throw Error("illegal catch attempt");
    }, delegateYield: function(r3, e3, n3) {
      return this.delegate = { iterator: G(r3), resultName: e3, nextLoc: n3 }, "next" === this.method && (this.arg = t2), g;
    } }, r2;
  }
  function c(t2, r2) {
    var e2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var n2 = Object.getOwnPropertySymbols(t2);
      r2 && (n2 = n2.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(t2, r3).enumerable;
      })), e2.push.apply(e2, n2);
    }
    return e2;
  }
  function u(t2) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var e2 = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? c(Object(e2), true).forEach(function(r3) {
        l(t2, r3, e2[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(e2)) : c(Object(e2)).forEach(function(r3) {
        Object.defineProperty(t2, r3, Object.getOwnPropertyDescriptor(e2, r3));
      });
    }
    return t2;
  }
  function l(t2, r2, e2) {
    return (r2 = function(t3) {
      var r3 = function(t4) {
        if ("object" != i(t4) || !t4) return t4;
        var r4 = t4[Symbol.toPrimitive];
        if (void 0 !== r4) {
          var e3 = r4.call(t4, "string");
          if ("object" != i(e3)) return e3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t4);
      }(t3);
      return "symbol" == i(r3) ? r3 : r3 + "";
    }(r2)) in t2 ? Object.defineProperty(t2, r2, { value: e2, enumerable: true, configurable: true, writable: true }) : t2[r2] = e2, t2;
  }
  function f(t2, r2) {
    (null == r2 || r2 > t2.length) && (r2 = t2.length);
    for (var e2 = 0, n2 = Array(r2); e2 < r2; e2++) n2[e2] = t2[e2];
    return n2;
  }
  function s(t2, r2, e2, n2, o2, i2, a2) {
    try {
      var c2 = t2[i2](a2), u2 = c2.value;
    } catch (t3) {
      return void e2(t3);
    }
    c2.done ? r2(u2) : Promise.resolve(u2).then(n2, o2);
  }
  window.YaSendSuggestToken = function() {
    var t2, r2 = (t2 = a().mark(function t3(r3, i2) {
      var c2, l2, s2, h;
      return a().wrap(function(t4) {
        for (; ; ) switch (t4.prev = t4.next) {
          case 0:
            if (c2 = "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0440\u0438\u0434\u0436\u0438\u043D \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043E\u043A\u0438, \u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 *", !r3 || "string" != typeof r3 || -1 !== r3.indexOf("*")) {
              t4.next = 16;
              break;
            }
            if (l2 = {}, !window.location.hash && !window.location.search) {
              t4.next = 15;
              break;
            }
            if ([window.location.hash, window.location.search].forEach(function(t5) {
              return t5 && t5.slice(1).split("&").forEach(function(t6) {
                var r4, e2, n2 = (r4 = t6.split("="), e2 = 2, function(t7) {
                  if (Array.isArray(t7)) return t7;
                }(r4) || function(t7, r5) {
                  var e3 = null == t7 ? null : "undefined" != typeof Symbol && t7[Symbol.iterator] || t7["@@iterator"];
                  if (null != e3) {
                    var n3, o3, i4, a2, c3 = [], u2 = true, l3 = false;
                    try {
                      if (i4 = (e3 = e3.call(t7)).next, 0 === r5) {
                        if (Object(e3) !== e3) return;
                        u2 = false;
                      } else for (; !(u2 = (n3 = i4.call(e3)).done) && (c3.push(n3.value), c3.length !== r5); u2 = true) ;
                    } catch (t8) {
                      l3 = true, o3 = t8;
                    } finally {
                      try {
                        if (!u2 && null != e3.return && (a2 = e3.return(), Object(a2) !== a2)) return;
                      } finally {
                        if (l3) throw o3;
                      }
                    }
                    return c3;
                  }
                }(r4, e2) || function(t7, r5) {
                  if (t7) {
                    if ("string" == typeof t7) return f(t7, r5);
                    var e3 = {}.toString.call(t7).slice(8, -1);
                    return "Object" === e3 && t7.constructor && (e3 = t7.constructor.name), "Map" === e3 || "Set" === e3 ? Array.from(t7) : "Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3) ? f(t7, r5) : void 0;
                  }
                }(r4, e2) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }()), o2 = n2[0], i3 = n2[1];
                l2[o2] = i3;
              });
            }), null === (s2 = window.opener) || void 0 === s2 || !s2.parent) {
              t4.next = 9;
              break;
            }
            return o(r3, function(t5) {
              "close" === t5.type && window.close();
            }), n({ cause: "token", type: e, payload: void 0 !== i2 ? u(u({}, l2), {}, { extraData: i2 }) : l2 }, r3, window.opener.parent), t4.abrupt("return");
          case 9:
            if (null === (h = window.parent) || void 0 === h || !h.parent) {
              t4.next = 12;
              break;
            }
            return n({ cause: "token", type: e, payload: void 0 !== i2 ? u(u({}, l2), {}, { extraData: i2 }) : l2 }, r3, window.parent.parent), t4.abrupt("return");
          case 12:
            c2 = "\u0414\u0430\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0430 \u043D\u0435 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u043C \u043E\u043A\u043D\u0435", t4.next = 16;
            break;
          case 15:
            c2 = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0442\u043E\u043A\u0435\u043D\u0435";
          case 16:
            console.warn(c2);
          case 17:
          case "end":
            return t4.stop();
        }
      }, t3);
    }), function() {
      var r3 = this, e2 = arguments;
      return new Promise(function(n2, o2) {
        var i2 = t2.apply(r3, e2);
        function a2(t3) {
          s(i2, n2, o2, a2, c2, "next", t3);
        }
        function c2(t3) {
          s(i2, n2, o2, a2, c2, "throw", t3);
        }
        a2(void 0);
      });
    });
    return function(t3, e2) {
      return r2.apply(this, arguments);
    };
  }();
}();
