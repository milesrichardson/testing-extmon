!(function (l) {
  function t(t) {
    for (var o, e, r = t[0], a = t[1], i = 0, n = []; i < r.length; i++)
      (e = r[i]), Object.prototype.hasOwnProperty.call(M, e) && M[e] && n.push(M[e][0]), (M[e] = 0);
    for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (l[o] = a[o]);
    for (c && c(t); n.length; ) n.shift()();
  }
  var e = {},
    M = {
      3: 0
    };
  function g(t) {
    return u.p + "frameChunks/" + t + ".js";
  }
  function u(t) {
    var o;
    return (
      e[t] ||
      ((o = e[t] =
        {
          i: t,
          l: !1,
          exports: {}
        }),
      l[t].call(o.exports, o, o.exports, u),
      (o.l = !0),
      o)
    ).exports;
  }
  (u.e = function (e) {
    var t,
      o = [],
      r = function (o) {
        const e = g(o);
        chrome.runtime.sendMessage(
          "hjngolefdpdnooamgdldlkjgmdcmcjnc",
          {
            action: "EQUATIO_WEBPACK_LOAD_DEPENDENCY",
            scriptPath: e
          },
          function () {
            chrome.runtime.lastError && console.error("Failed to load dependency", e);
            const t = M[o];
            0 !== t && (t && t[1](), (M[o] = void 0));
          }
        );
      },
      a = function (a) {
        var t,
          o = document.getElementsByTagName("head")[0],
          i = document.createElement("script"),
          n =
            ((i.charset = "utf-8"),
            (i.timeout = 120),
            u.nc && i.setAttribute("nonce", u.nc),
            (i.src = g(a)),
            0 !== i.src.indexOf(window.location.origin + "/") && (i.crossOrigin = "anonymous"),
            (t = function (t) {
              (i.onerror = i.onload = null), clearTimeout(n);
              var o,
                e,
                r = M[a];
              0 !== r &&
                (r &&
                  ((o = t && ("load" === t.type ? "missing" : t.type)),
                  (t = t && t.target && t.target.src),
                  ((e = new Error("Loading chunk " + a + " failed.\n(" + o + ": " + t + ")")).type = o),
                  (e.request = t),
                  r[1](e)),
                (M[a] = void 0));
            }),
            setTimeout(function () {
              t({
                type: "timeout",
                target: i
              });
            }, 12e4));
        (i.onerror = i.onload = t), o.appendChild(i);
      },
      i = M[e];
    return (
      0 !== i &&
        (i
          ? o.push(i[2])
          : ((t = new Promise(function (t, o) {
              i = M[e] = [t, o];
            })),
            o.push((i[2] = t)),
            ("chrome" === window.equatioCoreChunkLoading ? r : a)(e))),
      Promise.all(o)
    );
  }),
    (u.m = l),
    (u.c = e),
    (u.d = function (t, o, e) {
      u.o(t, o) ||
        Object.defineProperty(t, o, {
          enumerable: !0,
          get: e
        });
    }),
    (u.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
    }),
    (u.t = function (o, t) {
      if ((1 & t && (o = u(o)), 8 & t)) return o;
      if (4 & t && "object" == typeof o && o && o.__esModule) return o;
      var e = Object.create(null);
      if (
        (u.r(e),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          value: o
        }),
        2 & t && "string" != typeof o)
      )
        for (var r in o)
          u.d(
            e,
            r,
            function (t) {
              return o[t];
            }.bind(null, r)
          );
      return e;
    }),
    (u.n = function (t) {
      var o =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return u.d(o, "a", o), o;
    }),
    (u.o = function (t, o) {
      return Object.prototype.hasOwnProperty.call(t, o);
    }),
    (u.p = "/"),
    (u.oe = function (t) {
      throw (console.error(t), t);
    });
  var o = (r = window.equatioChromeJsonp = window.equatioChromeJsonp || []).push.bind(r);
  r.push = t;
  for (var r = r.slice(), a = 0; a < r.length; a++) t(r[a]);
  var c = o;
  u((u.s = 105));
})([
  function (t, o, e) {
    "use strict";
    t.exports = e(24);
  },
  ,
  function (t, o, e) {
    e = e(18)();
    t.exports = e;
    try {
      regeneratorRuntime = e;
    } catch (t) {
      "object" == typeof globalThis ? (globalThis.regeneratorRuntime = e) : Function("r", "regeneratorRuntime = r")(e);
    }
  },
  ,
  function (t, o, e) {
    var r = e(20);
    function a(t, o, e) {
      return (
        (o = r(o)) in t
          ? Object.defineProperty(t, o, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[o] = e),
        t
      );
    }
    (t.exports = a), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  function (t, o) {
    function M(t, o, e, r, a, i, n) {
      try {
        var l = t[i](n),
          M = l.value;
      } catch (t) {
        return void e(t);
      }
      l.done ? o(M) : Promise.resolve(M).then(r, a);
    }
    function e(l) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, e) {
          var r = l.apply(t, n);
          function a(t) {
            M(r, o, e, a, i, "next", t);
          }
          function i(t) {
            M(r, o, e, a, i, "throw", t);
          }
          a(void 0);
        });
      };
    }
    (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  function (t, o, e) {
    "use strict";
    e.d(o, "a", function () {
      return r;
    });
    e(4);
    const r = {
      GraphLoad: "CORE_DESMOS_LOAD",
      GraphSetExpression: "CORE_DESMOS_SET_EXPRESSION",
      GraphDestroy: "CORE_DESMOS_DESTROY_CALCULATOR",
      GraphInitialise: "CORE_DESMOS_INITIALISE_CALCULATOR",
      GraphSetLocale: "CORE_DESMOS_SET_LOCALE",
      GraphSetLatex: "CORE_DESMOS_SET_CALCULATOR_LATEX",
      GraphSetState: "CORE_DESMOS_SET_CALCULATOR_STATE",
      GraphSetCalculator: "CORE_DESMOS_SET_CALCULATOR",
      GraphClear: "CORE_DESMOS_CLEAR_GRAPH",
      GraphGetScreenshot: "CORE_DESMOS_GET_CALCULATOR_SCREENSHOT",
      GraphGetState: "CORE_DESMOS_GET_CALCULATOR_STATE",
      GraphFocus: "CORE_DESMOS_FOCUS",
      GraphDispatchLatex: "CORE_DESMOS_DISPATCH_LATEX",
      GraphUpdateSettings: "CORE_DESMOS_LOAD_SETTINGS",
      GraphDisablePrediction: "CORE_DESMOS_DISABLE_PREDICTION",
      GraphGetPrediction: "CORE_DESMOS_GET_PREDICTION",
      GraphSetPrediction: "CORE_DESMOS_SET_PREDICTION",
      CalcLoad: "CORE_DESMOS_SCIENTIFIC_LOAD",
      CalcSetLocale: "CORE_DESMOS_SCIENTIFIC_UPDATE_LOCALE",
      CalcInitialise: "CORE_DESMOS_SCIENTIFIC_INITIALIZE",
      CalcDestroy: "CORE_DESMOS_SCIENTIFIC_DESTROY"
    };
  },
  ,
  function (o, t) {
    function e(t) {
      return (
        (o.exports = e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              }),
        (o.exports.__esModule = !0),
        (o.exports.default = o.exports),
        e(t)
      );
    }
    (o.exports = e), (o.exports.__esModule = !0), (o.exports.default = o.exports);
  },
  ,
  ,
  ,
  function (t, o) {
    function r(t, o) {
      var e = t[1] || "",
        r = t[3];
      return r
        ? (o && "function" == typeof btoa
            ? ((t = a(r)),
              (o = r.sources.map(function (t) {
                return "/*# sourceURL=" + r.sourceRoot + t + " */";
              })),
              [e].concat(o).concat([t]))
            : [e]
          ).join("\n")
        : e;
    }
    function a(t) {
      return (
        "/*# " +
        ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t))))) +
        " */"
      );
    }
    t.exports = function (e) {
      var n = [];
      return (
        (n.toString = function () {
          return this.map(function (t) {
            var o = r(t, e);
            return t[2] ? "@media " + t[2] + "{" + o + "}" : o;
          }).join("");
        }),
        (n.i = function (t, o) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var e = {}, r = 0; r < this.length; r++) {
            var a = this[r][0];
            "number" == typeof a && (e[a] = !0);
          }
          for (r = 0; r < t.length; r++) {
            var i = t[r];
            ("number" == typeof i[0] && e[i[0]]) || (o && !i[2] ? (i[2] = o) : o && (i[2] = "(" + i[2] + ") and (" + o + ")"), n.push(i));
          }
        }),
        n
      );
    };
  },
  function (t, o, r) {
    "use strict";
    var e,
      a,
      g = {},
      i = function () {
        return (e = void 0 === e ? Boolean(window && document && document.all && !window.atob) : e);
      },
      n =
        ((a = {}),
        function (t) {
          if (void 0 === a[t]) {
            var o = document.querySelector(t);
            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)
              try {
                o = o.contentDocument.head;
              } catch (t) {
                o = null;
              }
            a[t] = o;
          }
          return a[t];
        });
    function u(t, o) {
      for (var e = [], r = {}, a = 0; a < t.length; a++) {
        var i = t[a],
          n = o.base ? i[0] + o.base : i[0],
          i = {
            css: i[1],
            media: i[2],
            sourceMap: i[3]
          };
        r[n]
          ? r[n].parts.push(i)
          : e.push(
              (r[n] = {
                id: n,
                parts: [i]
              })
            );
      }
      return e;
    }
    function c(t, o) {
      for (var e = 0; e < t.length; e++) {
        var r = t[e],
          a = g[r.id],
          i = 0;
        if (a) {
          for (a.refs++; i < a.parts.length; i++) a.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) a.parts.push(p(r.parts[i], o));
        } else {
          for (var n = []; i < r.parts.length; i++) n.push(p(r.parts[i], o));
          g[r.id] = {
            id: r.id,
            refs: 1,
            parts: n
          };
        }
      }
    }
    function l(o) {
      var e = document.createElement("style");
      if (
        (void 0 === o.attributes.nonce && (t = r.nc) && (o.attributes.nonce = t),
        Object.keys(o.attributes).forEach(function (t) {
          e.setAttribute(t, o.attributes[t]);
        }),
        "function" == typeof o.insert)
      )
        o.insert(e);
      else {
        var t = n(o.insert || "head");
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        t.appendChild(e);
      }
      return e;
    }
    function M(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
    }
    d = [];
    var d,
      s = function (t, o) {
        return (d[t] = o), d.filter(Boolean).join("\n");
      };
    function A(t, o, e, r) {
      var e = e ? "" : r.css;
      t.styleSheet
        ? (t.styleSheet.cssText = s(o, e))
        : ((r = document.createTextNode(e)),
          (e = t.childNodes)[o] && t.removeChild(e[o]),
          e.length ? t.insertBefore(r, e[o]) : t.appendChild(r));
    }
    function x(t, o, e) {
      var r = e.css,
        a = e.media,
        e = e.sourceMap;
      if (
        (a && t.setAttribute("media", a),
        e &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
            " */"
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = r;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(r));
      }
    }
    var w = null,
      D = 0;
    function p(o, t) {
      var e, r, a, i;
      return (
        (i = t.singleton
          ? ((e = D++), (r = w = w || l(t)), (a = A.bind(null, r, e, !1)), A.bind(null, r, e, !0))
          : ((r = l(t)),
            (a = x.bind(null, r, t)),
            function () {
              M(r);
            })),
        a(o),
        function (t) {
          t ? (t.css === o.css && t.media === o.media && t.sourceMap === o.sourceMap) || a((o = t)) : i();
        }
      );
    }
    t.exports = function (t, l) {
      ((l = l || {}).attributes = "object" == typeof l.attributes ? l.attributes : {}),
        l.singleton || "boolean" == typeof l.singleton || (l.singleton = i());
      var M = u(t, l);
      return (
        c(M, l),
        function (t) {
          for (var o = [], e = 0; e < M.length; e++) {
            var r = M[e],
              r = g[r.id];
            r && (r.refs--, o.push(r));
          }
          t && c(u(t, l), l);
          for (var a = 0; a < o.length; a++) {
            var i = o[a];
            if (0 === i.refs) {
              for (var n = 0; n < i.parts.length; n++) i.parts[n]();
              delete g[i.id];
            }
          }
        }
      );
    };
  },
  ,
  function (t, o, e) {
    var r;
    /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
    !(function () {
      "use strict";
      var n = {}.hasOwnProperty;
      function l() {
        for (var t = [], o = 0; o < arguments.length; o++) {
          var e = arguments[o];
          if (e) {
            var r,
              a = typeof e;
            if ("string" === a || "number" === a) t.push(e);
            else if (Array.isArray(e)) e.length && (r = l.apply(null, e)) && t.push(r);
            else if ("object" === a)
              if (e.toString === Object.prototype.toString || e.toString.toString().includes("[native code]"))
                for (var i in e) n.call(e, i) && e[i] && t.push(i);
              else t.push(e.toString());
          }
        }
        return t.join(" ");
      }
      t.exports
        ? ((l.default = l), (t.exports = l))
        : ((r = []),
          void 0 !==
            (r = function () {
              return l;
            }.apply(o, r)) && (t.exports = r));
    })();
  },
  function (t, o, e) {
    "use strict";
    function r() {
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
        } catch (t) {
          console.error(t);
        }
    }
    r(), (t.exports = e(25));
  },
  function (t, o, e) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var M = Object.getOwnPropertySymbols,
      g = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable;
    function c(t) {
      if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(t);
    }
    function r() {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
        for (var o, e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
        return "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
          ? !1
          : ((o = {}),
            "abcdefghijklmnopqrst".split("").forEach(function (t) {
              o[t] = t;
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join(""));
      } catch (t) {
        return !1;
      }
    }
    t.exports = r()
      ? Object.assign
      : function (t, o) {
          for (var e, r = c(t), a = 1; a < arguments.length; a++) {
            for (var i in (e = Object(arguments[a]))) g.call(e, i) && (r[i] = e[i]);
            if (M) for (var n = M(e), l = 0; l < n.length; l++) u.call(e, n[l]) && (r[n[l]] = e[n[l]]);
          }
          return r;
        };
  },
  function (f, t, o) {
    var T = o(8).default;
    function m() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (f.exports = m =
        function () {
          return n;
        }),
        (f.exports.__esModule = !0),
        (f.exports.default = f.exports);
      var n = {},
        t = Object.prototype,
        M = t.hasOwnProperty,
        a =
          Object.defineProperty ||
          function (t, o, e) {
            t[o] = e.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        r = o.iterator || "@@iterator",
        e = o.asyncIterator || "@@asyncIterator",
        i = o.toStringTag || "@@toStringTag";
      function l(t, o, e) {
        return (
          Object.defineProperty(t, o, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          t[o]
        );
      }
      try {
        l({}, "");
      } catch (t) {
        l = function (t, o, e) {
          return (t[o] = e);
        };
      }
      function g(t, o, e, r) {
        (o = o && o.prototype instanceof d ? o : d), (o = Object.create(o.prototype)), (r = new L(r || []));
        return (
          a(o, "_invoke", {
            value: h(t, e, r)
          }),
          o
        );
      }
      function u(t, o, e) {
        try {
          return {
            type: "normal",
            arg: t.call(o, e)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      n.wrap = g;
      var c = {};
      function d() {}
      function s() {}
      function A() {}
      var o = {},
        x =
          (l(o, r, function () {
            return this;
          }),
          Object.getPrototypeOf),
        x = x && x(x(C([]))),
        w = (x && x !== t && M.call(x, r) && (o = x), (A.prototype = d.prototype = Object.create(o)));
      function D(t) {
        ["next", "throw", "return"].forEach(function (o) {
          l(t, o, function (t) {
            return this._invoke(o, t);
          });
        });
      }
      function p(i, n) {
        function l(t, o, e, r) {
          var a,
            t = u(i[t], i, o);
          if ("throw" !== t.type)
            return (o = (a = t.arg).value) && "object" == T(o) && M.call(o, "__await")
              ? n.resolve(o.__await).then(
                  function (t) {
                    l("next", t, e, r);
                  },
                  function (t) {
                    l("throw", t, e, r);
                  }
                )
              : n.resolve(o).then(
                  function (t) {
                    (a.value = t), e(a);
                  },
                  function (t) {
                    return l("throw", t, e, r);
                  }
                );
          r(t.arg);
        }
        var o;
        a(this, "_invoke", {
          value: function (e, r) {
            function t() {
              return new n(function (t, o) {
                l(e, r, t, o);
              });
            }
            return (o = o ? o.then(t, t) : t());
          }
        });
      }
      function h(r, a, i) {
        var n = "suspendedStart";
        return function (t, o) {
          if ("executing" === n) throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === t) throw o;
            return y();
          }
          for (i.method = t, i.arg = o; ; ) {
            var e = i.delegate;
            if (e) {
              e = I(e, i);
              if (e) {
                if (e === c) continue;
                return e;
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;
            else if ("throw" === i.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), i.arg);
              i.dispatchException(i.arg);
            } else "return" === i.method && i.abrupt("return", i.arg);
            n = "executing";
            e = u(r, a, i);
            if ("normal" === e.type) {
              if (((n = i.done ? "completed" : "suspendedYield"), e.arg === c)) continue;
              return {
                value: e.arg,
                done: i.done
              };
            }
            "throw" === e.type && ((n = "completed"), (i.method = "throw"), (i.arg = e.arg));
          }
        };
      }
      function I(t, o) {
        var e = o.method,
          r = t.iterator[e];
        return void 0 === r
          ? ((o.delegate = null),
            ("throw" === e && t.iterator.return && ((o.method = "return"), (o.arg = void 0), I(t, o), "throw" === o.method)) ||
              ("return" !== e && ((o.method = "throw"), (o.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
            c)
          : "throw" === (e = u(r, t.iterator, o.arg)).type
          ? ((o.method = "throw"), (o.arg = e.arg), (o.delegate = null), c)
          : (r = e.arg)
          ? r.done
            ? ((o[t.resultName] = r.value),
              (o.next = t.nextLoc),
              "return" !== o.method && ((o.method = "next"), (o.arg = void 0)),
              (o.delegate = null),
              c)
            : r
          : ((o.method = "throw"), (o.arg = new TypeError("iterator result is not an object")), (o.delegate = null), c);
      }
      function N(t) {
        var o = {
          tryLoc: t[0]
        };
        1 in t && (o.catchLoc = t[1]), 2 in t && ((o.finallyLoc = t[2]), (o.afterLoc = t[3])), this.tryEntries.push(o);
      }
      function j(t) {
        var o = t.completion || {};
        (o.type = "normal"), delete o.arg, (t.completion = o);
      }
      function L(t) {
        (this.tryEntries = [
          {
            tryLoc: "root"
          }
        ]),
          t.forEach(N, this),
          this.reset(!0);
      }
      function C(o) {
        if (o) {
          var e,
            t = o[r];
          if (t) return t.call(o);
          if ("function" == typeof o.next) return o;
          if (!isNaN(o.length))
            return (
              (e = -1),
              ((t = function t() {
                for (; ++e < o.length; ) if (M.call(o, e)) return (t.value = o[e]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              }).next = t)
            );
        }
        return {
          next: y
        };
      }
      function y() {
        return {
          value: void 0,
          done: !0
        };
      }
      return (
        (s.prototype = A),
        a(w, "constructor", {
          value: A,
          configurable: !0
        }),
        a(A, "constructor", {
          value: s,
          configurable: !0
        }),
        (s.displayName = l(A, i, "GeneratorFunction")),
        (n.isGeneratorFunction = function (t) {
          t = "function" == typeof t && t.constructor;
          return !!t && (t === s || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (n.mark = function (t) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(t, A) : ((t.__proto__ = A), l(t, i, "GeneratorFunction")),
            (t.prototype = Object.create(w)),
            t
          );
        }),
        (n.awrap = function (t) {
          return {
            __await: t
          };
        }),
        D(p.prototype),
        l(p.prototype, e, function () {
          return this;
        }),
        (n.AsyncIterator = p),
        (n.async = function (t, o, e, r, a) {
          void 0 === a && (a = Promise);
          var i = new p(g(t, o, e, r), a);
          return n.isGeneratorFunction(o)
            ? i
            : i.next().then(function (t) {
                return t.done ? t.value : i.next();
              });
        }),
        D(w),
        l(w, i, "Generator"),
        l(w, r, function () {
          return this;
        }),
        l(w, "toString", function () {
          return "[object Generator]";
        }),
        (n.keys = function (t) {
          var o,
            e = Object(t),
            r = [];
          for (o in e) r.push(o);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var o = r.pop();
                if (o in e) return (t.value = o), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (n.values = C),
        (L.prototype = {
          constructor: L,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(j),
              !t)
            )
              for (var o in this) "t" === o.charAt(0) && M.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function t(t, o) {
              return (i.type = "throw"), (i.arg = e), (r.next = t), o && ((r.method = "next"), (r.arg = void 0)), !!o;
            }
            for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
              var a = this.tryEntries[o],
                i = a.completion;
              if ("root" === a.tryLoc) return t("end");
              if (a.tryLoc <= this.prev) {
                var n = M.call(a, "catchLoc"),
                  l = M.call(a, "finallyLoc");
                if (n && l) {
                  if (this.prev < a.catchLoc) return t(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return t(a.finallyLoc);
                } else if (n) {
                  if (this.prev < a.catchLoc) return t(a.catchLoc, !0);
                } else {
                  if (!l) throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return t(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, o) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc <= this.prev && M.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var a = r;
                break;
              }
            }
            var i = (a = a && ("break" === t || "continue" === t) && a.tryLoc <= o && o <= a.finallyLoc ? null : a) ? a.completion : {};
            return (i.type = t), (i.arg = o), a ? ((this.method = "next"), (this.next = a.finallyLoc), c) : this.complete(i);
          },
          complete: function (t, o) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === t.type && o && (this.next = o),
              c
            );
          },
          finish: function (t) {
            for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
              var e = this.tryEntries[o];
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), c;
            }
          },
          catch: function (t) {
            for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
              var e,
                r,
                a = this.tryEntries[o];
              if (a.tryLoc === t) return "throw" === (e = a.completion).type && ((r = e.arg), j(a)), r;
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, o, e) {
            return (
              (this.delegate = {
                iterator: C(t),
                resultName: o,
                nextLoc: e
              }),
              "next" === this.method && (this.arg = void 0),
              c
            );
          }
        }),
        n
      );
    }
    (f.exports = m), (f.exports.__esModule = !0), (f.exports.default = f.exports);
  },
  ,
  function (t, o, e) {
    var r = e(8).default,
      a = e(21);
    function i(t) {
      t = a(t, "string");
      return "symbol" === r(t) ? t : String(t);
    }
    (t.exports = i), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  function (t, o, e) {
    var r = e(8).default;
    function a(t, o) {
      if ("object" !== r(t) || null === t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 === e) return ("string" === o ? String : Number)(t);
      e = e.call(t, o || "default");
      if ("object" !== r(e)) return e;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    (t.exports = a), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  ,
  ,
  function (Y, t, o) {
    "use strict";
    /** @license React v16.13.1
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var u = o(17),
      o = "function" == typeof Symbol && Symbol.for,
      c = o ? Symbol.for("react.element") : 60103,
      M = o ? Symbol.for("react.portal") : 60106,
      e = o ? Symbol.for("react.fragment") : 60107,
      r = o ? Symbol.for("react.strict_mode") : 60108,
      a = o ? Symbol.for("react.profiler") : 60114,
      i = o ? Symbol.for("react.provider") : 60109,
      n = o ? Symbol.for("react.context") : 60110,
      l = o ? Symbol.for("react.forward_ref") : 60112,
      g = o ? Symbol.for("react.suspense") : 60113,
      d = o ? Symbol.for("react.memo") : 60115,
      s = o ? Symbol.for("react.lazy") : 60116,
      A = "function" == typeof Symbol && Symbol.iterator;
    function x(t) {
      for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, e = 1; e < arguments.length; e++)
        o += "&args[]=" + encodeURIComponent(arguments[e]);
      return (
        "Minified React error #" +
        t +
        "; visit " +
        o +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var w = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      },
      D = {};
    function p(t, o, e) {
      (this.props = t), (this.context = o), (this.refs = D), (this.updater = e || w);
    }
    function h() {}
    function I(t, o, e) {
      (this.props = t), (this.context = o), (this.refs = D), (this.updater = e || w);
    }
    (p.prototype.isReactComponent = {}),
      (p.prototype.setState = function (t, o) {
        if ("object" != typeof t && "function" != typeof t && null != t) throw Error(x(85));
        this.updater.enqueueSetState(this, t, o, "setState");
      }),
      (p.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      }),
      (h.prototype = p.prototype);
    var o = (I.prototype = new h()),
      N =
        ((o.constructor = I),
        u(o, p.prototype),
        (o.isPureReactComponent = !0),
        {
          current: null
        }),
      j = Object.prototype.hasOwnProperty,
      L = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };
    function C(t, o, e) {
      var r,
        a = {},
        i = null,
        n = null;
      if (null != o)
        for (r in (void 0 !== o.ref && (n = o.ref), void 0 !== o.key && (i = "" + o.key), o))
          j.call(o, r) && !L.hasOwnProperty(r) && (a[r] = o[r]);
      var l = arguments.length - 2;
      if (1 === l) a.children = e;
      else if (1 < l) {
        for (var M = Array(l), g = 0; g < l; g++) M[g] = arguments[g + 2];
        a.children = M;
      }
      if (t && t.defaultProps) for (r in (l = t.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
      return {
        $$typeof: c,
        type: t,
        key: i,
        ref: n,
        props: a,
        _owner: N.current
      };
    }
    function B(t, o) {
      return {
        $$typeof: c,
        type: t.type,
        key: o,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
      };
    }
    function y(t) {
      return "object" == typeof t && null !== t && t.$$typeof === c;
    }
    function _(t) {
      var o = {
        "=": "=0",
        ":": "=2"
      };
      return (
        "$" +
        ("" + t).replace(/[=:]/g, function (t) {
          return o[t];
        })
      );
    }
    var f = /\/+/g,
      T = [];
    function m(t, o, e, r) {
      var a;
      return T.length
        ? (((a = T.pop()).result = t), (a.keyPrefix = o), (a.func = e), (a.context = r), (a.count = 0), a)
        : {
            result: t,
            keyPrefix: o,
            func: e,
            context: r,
            count: 0
          };
    }
    function v(t) {
      (t.result = null), (t.keyPrefix = null), (t.func = null), (t.context = null), (t.count = 0), T.length < 10 && T.push(t);
    }
    function E(t, o, e, r) {
      var a = !1;
      if (null === (t = "undefined" !== (n = typeof t) && "boolean" !== n ? t : null)) a = !0;
      else
        switch (n) {
          case "string":
          case "number":
            a = !0;
            break;

          case "object":
            switch (t.$$typeof) {
              case c:
              case M:
                a = !0;
            }
        }
      if (a) return e(r, t, "" === o ? "." + z(t, 0) : o), 1;
      if (((a = 0), (o = "" === o ? "." : o + ":"), Array.isArray(t)))
        for (var i = 0; i < t.length; i++) {
          var n,
            l = o + z((n = t[i]), i);
          a += E(n, l, e, r);
        }
      else if (
        "function" ==
        typeof (l = null !== t && "object" == typeof t && "function" == typeof (l = (A && t[A]) || t["@@iterator"]) ? l : null)
      )
        for (t = l.call(t), i = 0; !(n = t.next()).done; ) a += E((n = n.value), (l = o + z(n, i++)), e, r);
      else if ("object" === n)
        throw ((e = "" + t), Error(x(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e, "")));
      return a;
    }
    function b(t, o, e) {
      return null == t ? 0 : E(t, "", o, e);
    }
    function z(t, o) {
      return "object" == typeof t && null !== t && null != t.key ? _(t.key) : o.toString(36);
    }
    function U(t, o) {
      t.func.call(t.context, o, t.count++);
    }
    function Q(t, o, e) {
      var r = t.result,
        a = t.keyPrefix;
      (t = t.func.call(t.context, o, t.count++)),
        Array.isArray(t)
          ? S(t, r, e, function (t) {
              return t;
            })
          : null != t &&
            (y(t) && (t = B(t, a + (!t.key || (o && o.key === t.key) ? "" : ("" + t.key).replace(f, "$&/") + "/") + e)), r.push(t));
    }
    function S(t, o, e, r, a) {
      var i = "";
      b(t, Q, (o = m(o, (i = null != e ? ("" + e).replace(f, "$&/") + "/" : i), r, a))), v(o);
    }
    var k = {
      current: null
    };
    function O() {
      var t = k.current;
      if (null === t) throw Error(x(321));
      return t;
    }
    o = {
      ReactCurrentDispatcher: k,
      ReactCurrentBatchConfig: {
        suspense: null
      },
      ReactCurrentOwner: N,
      IsSomeRendererActing: {
        current: !1
      },
      assign: u
    };
    (t.Children = {
      map: function (t, o, e) {
        return null == t || S(t, (t = []), null, o, e), t;
      },
      forEach: function (t, o, e) {
        if (null == t) return t;
        b(t, U, (o = m(null, null, o, e))), v(o);
      },
      count: function (t) {
        return b(
          t,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function (t) {
        var o = [];
        return (
          S(t, o, null, function (t) {
            return t;
          }),
          o
        );
      },
      only: function (t) {
        if (y(t)) return t;
        throw Error(x(143));
      }
    }),
      (t.Component = p),
      (t.Fragment = e),
      (t.Profiler = a),
      (t.PureComponent = I),
      (t.StrictMode = r),
      (t.Suspense = g),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o),
      (t.cloneElement = function (t, o, e) {
        if (null == t) throw Error(x(267, t));
        var r = u({}, t.props),
          a = t.key,
          i = t.ref,
          n = t._owner;
        if (null != o)
          for (l in (void 0 !== o.ref && ((i = o.ref), (n = N.current)),
          void 0 !== o.key && (a = "" + o.key),
          t.type && t.type.defaultProps && (M = t.type.defaultProps),
          o))
            j.call(o, l) && !L.hasOwnProperty(l) && (r[l] = (void 0 === o[l] && void 0 !== M ? M : o)[l]);
        var l = arguments.length - 2;
        if (1 === l) r.children = e;
        else if (1 < l) {
          for (var M = Array(l), g = 0; g < l; g++) M[g] = arguments[g + 2];
          r.children = M;
        }
        return {
          $$typeof: c,
          type: t.type,
          key: a,
          ref: i,
          props: r,
          _owner: n
        };
      }),
      (t.createContext = function (t, o) {
        return (
          ((t = {
            $$typeof: n,
            _calculateChangedBits: (o = void 0 === o ? null : o),
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }).Provider = {
            $$typeof: i,
            _context: t
          }),
          (t.Consumer = t)
        );
      }),
      (t.createElement = C),
      (t.createFactory = function (t) {
        var o = C.bind(null, t);
        return (o.type = t), o;
      }),
      (t.createRef = function () {
        return {
          current: null
        };
      }),
      (t.forwardRef = function (t) {
        return {
          $$typeof: l,
          render: t
        };
      }),
      (t.isValidElement = y),
      (t.lazy = function (t) {
        return {
          $$typeof: s,
          _ctor: t,
          _status: -1,
          _result: null
        };
      }),
      (t.memo = function (t, o) {
        return {
          $$typeof: d,
          type: t,
          compare: void 0 === o ? null : o
        };
      }),
      (t.useCallback = function (t, o) {
        return O().useCallback(t, o);
      }),
      (t.useContext = function (t, o) {
        return O().useContext(t, o);
      }),
      (t.useDebugValue = function () {}),
      (t.useEffect = function (t, o) {
        return O().useEffect(t, o);
      }),
      (t.useImperativeHandle = function (t, o, e) {
        return O().useImperativeHandle(t, o, e);
      }),
      (t.useLayoutEffect = function (t, o) {
        return O().useLayoutEffect(t, o);
      }),
      (t.useMemo = function (t, o) {
        return O().useMemo(t, o);
      }),
      (t.useReducer = function (t, o, e) {
        return O().useReducer(t, o, e);
      }),
      (t.useRef = function (t) {
        return O().useRef(t);
      }),
      (t.useState = function (t) {
        return O().useState(t);
      }),
      (t.version = "16.13.1");
  },
  function (N, t, o) {
    "use strict";
    /** @license React v16.13.1
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var B = o(0),
      D = o(17),
      r = o(26);
    function y(t) {
      for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, e = 1; e < arguments.length; e++)
        o += "&args[]=" + encodeURIComponent(arguments[e]);
      return (
        "Minified React error #" +
        t +
        "; visit " +
        o +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!B) throw Error(y(227));
    function _(t, o, e, r, a, i, n, l, M) {
      var g = Array.prototype.slice.call(arguments, 3);
      try {
        o.apply(e, g);
      } catch (t) {
        this.onError(t);
      }
    }
    var U = !1,
      Q = null,
      Z = !1,
      H = null,
      G = {
        onError: function (t) {
          (U = !0), (Q = t);
        }
      };
    function P(t, o, e, r, a, i, n, l, M) {
      (U = !1), (Q = null), _.apply(G, arguments);
    }
    function W(t, o, e, r, a, i, n, l, M) {
      var g;
      P.apply(this, arguments), U && ((g = Q), (U = !1), (Q = null), Z || ((Z = !0), (H = g)));
    }
    var F = null,
      R = null,
      V = null;
    function q(t, o, e) {
      var r = t.type || "unknown-event";
      (t.currentTarget = V(e)), W(r, o, void 0, t), (t.currentTarget = null);
    }
    var X = null,
      J = {};
    function K() {
      if (X)
        for (var t in J) {
          var o = J[t],
            e = X.indexOf(t);
          if (!(-1 < e)) throw Error(y(96, t));
          if (!tt[e]) {
            if (!o.extractEvents) throw Error(y(97, t));
            for (var r in (e = (tt[e] = o).eventTypes)) {
              var a = void 0,
                i = e[r],
                n = o,
                l = r;
              if (ot.hasOwnProperty(l)) throw Error(y(99, l));
              var M = (ot[l] = i).phasedRegistrationNames;
              if (M) {
                for (a in M) M.hasOwnProperty(a) && $(M[a], n, l);
                a = !0;
              } else a = !!i.registrationName && ($(i.registrationName, n, l), !0);
              if (!a) throw Error(y(98, r, t));
            }
          }
        }
    }
    function $(t, o, e) {
      if (et[t]) throw Error(y(100, t));
      (et[t] = o), (rt[t] = o.eventTypes[e].dependencies);
    }
    var tt = [],
      ot = {},
      et = {},
      rt = {};
    function at(t) {
      var o,
        e = !1;
      for (o in t)
        if (t.hasOwnProperty(o)) {
          var r = t[o];
          if (!J.hasOwnProperty(o) || J[o] !== r) {
            if (J[o]) throw Error(y(102, o));
            (J[o] = r), (e = !0);
          }
        }
      e && K();
    }
    var it = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
      nt = null,
      lt = null,
      Mt = null;
    function gt(t) {
      if ((t = R(t))) {
        if ("function" != typeof nt) throw Error(y(280));
        var o = t.stateNode;
        o && ((o = F(o)), nt(t.stateNode, t.type, o));
      }
    }
    function ut(t) {
      lt ? (Mt ? Mt.push(t) : (Mt = [t])) : (lt = t);
    }
    function ct() {
      if (lt) {
        var t = lt,
          o = Mt;
        if (((Mt = lt = null), gt(t), o)) for (t = 0; t < o.length; t++) gt(o[t]);
      }
    }
    function dt(t, o) {
      return t(o);
    }
    function st(t, o, e, r, a) {
      return t(o, e, r, a);
    }
    function At() {}
    var xt = dt,
      wt = !1,
      Dt = !1;
    function pt() {
      (null === lt && null === Mt) || (At(), ct());
    }
    function ht(t, o, e) {
      if (Dt) return t(o, e);
      Dt = !0;
      try {
        return xt(t, o, e);
      } finally {
        (Dt = !1), pt();
      }
    }
    var It =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Nt = Object.prototype.hasOwnProperty,
      jt = {},
      Lt = {};
    function Ct(t) {
      if (Nt.call(Lt, t)) return !0;
      if (!Nt.call(jt, t)) {
        if (It.test(t)) return (Lt[t] = !0);
        jt[t] = !0;
      }
      return !1;
    }
    function yt(t, o, e, r) {
      if (null !== e && 0 === e.type) return !1;
      switch (typeof o) {
        case "function":
        case "symbol":
          return !0;

        case "boolean":
          return r ? !1 : null !== e ? !e.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t;

        default:
          return !1;
      }
    }
    function ft(t, o, e, r) {
      if (null == o || yt(t, o, e, r)) return !0;
      if (!r && null !== e)
        switch (e.type) {
          case 3:
            return !o;

          case 4:
            return !1 === o;

          case 5:
            return isNaN(o);

          case 6:
            return isNaN(o) || o < 1;
        }
      return !1;
    }
    function e(t, o, e, r, a, i) {
      (this.acceptsBooleans = 2 === o || 3 === o || 4 === o),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = e),
        (this.propertyName = t),
        (this.type = o),
        (this.sanitizeURL = i);
    }
    var i = {},
      Tt =
        ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (t) {
            i[t] = new e(t, 0, !1, t, null, !1);
          }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"]
        ].forEach(function (t) {
          var o = t[0];
          i[o] = new e(o, 1, !1, t[1], null, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
          i[t] = new e(t, 2, !1, t.toLowerCase(), null, !1);
        }),
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) {
          i[t] = new e(t, 2, !1, t, null, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (t) {
            i[t] = new e(t, 3, !1, t.toLowerCase(), null, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (t) {
          i[t] = new e(t, 3, !0, t, null, !1);
        }),
        ["capture", "download"].forEach(function (t) {
          i[t] = new e(t, 4, !1, t, null, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (t) {
          i[t] = new e(t, 6, !1, t, null, !1);
        }),
        ["rowSpan", "start"].forEach(function (t) {
          i[t] = new e(t, 5, !1, t.toLowerCase(), null, !1);
        }),
        /[\-:]([a-z])/g);
    function mt(t) {
      return t[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (t) {
        var o = t.replace(Tt, mt);
        i[o] = new e(o, 1, !1, t, null, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) {
        var o = t.replace(Tt, mt);
        i[o] = new e(o, 1, !1, t, "http://www.w3.org/1999/xlink", !1);
      }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
        var o = t.replace(Tt, mt);
        i[o] = new e(o, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (t) {
        i[t] = new e(t, 1, !1, t.toLowerCase(), null, !1);
      }),
      (i.xlinkHref = new e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0)),
      ["src", "href", "action", "formAction"].forEach(function (t) {
        i[t] = new e(t, 1, !1, t.toLowerCase(), null, !0);
      });
    o = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function vt(t, o, e, r) {
      var a = i.hasOwnProperty(o) ? i[o] : null;
      (null !== a ? 0 !== a.type : r || !(2 < o.length) || ("o" !== o[0] && "O" !== o[0]) || ("n" !== o[1] && "N" !== o[1])) &&
        (ft(o, e, a, r) && (e = null),
        r || null === a
          ? Ct(o) && (null === e ? t.removeAttribute(o) : t.setAttribute(o, "" + e))
          : a.mustUseProperty
          ? (t[a.propertyName] = null === e ? 3 !== a.type && "" : e)
          : ((o = a.attributeName),
            (r = a.attributeNamespace),
            null === e
              ? t.removeAttribute(o)
              : ((e = 3 === (a = a.type) || (4 === a && !0 === e) ? "" : "" + e), r ? t.setAttributeNS(r, o, e) : t.setAttribute(o, e))));
    }
    o.hasOwnProperty("ReactCurrentDispatcher") ||
      (o.ReactCurrentDispatcher = {
        current: null
      }),
      o.hasOwnProperty("ReactCurrentBatchConfig") ||
        (o.ReactCurrentBatchConfig = {
          suspense: null
        });
    var Et = /^(.*)[\\\/]/,
      a = "function" == typeof Symbol && Symbol.for,
      bt = a ? Symbol.for("react.element") : 60103,
      zt = a ? Symbol.for("react.portal") : 60106,
      St = a ? Symbol.for("react.fragment") : 60107,
      kt = a ? Symbol.for("react.strict_mode") : 60108,
      Ot = a ? Symbol.for("react.profiler") : 60114,
      Yt = a ? Symbol.for("react.provider") : 60109,
      Bt = a ? Symbol.for("react.context") : 60110,
      _t = a ? Symbol.for("react.concurrent_mode") : 60111,
      Ut = a ? Symbol.for("react.forward_ref") : 60112,
      Qt = a ? Symbol.for("react.suspense") : 60113,
      Zt = a ? Symbol.for("react.suspense_list") : 60120,
      Ht = a ? Symbol.for("react.memo") : 60115,
      Gt = a ? Symbol.for("react.lazy") : 60116,
      Pt = a ? Symbol.for("react.block") : 60121,
      Wt = "function" == typeof Symbol && Symbol.iterator;
    function Ft(t) {
      return null !== t && "object" == typeof t && "function" == typeof (t = (Wt && t[Wt]) || t["@@iterator"]) ? t : null;
    }
    function Rt(o) {
      var t;
      -1 === o._status &&
        ((o._status = 0),
        (t = (t = o._ctor)()),
        (o._result = t).then(
          function (t) {
            0 === o._status && ((t = t.default), (o._status = 1), (o._result = t));
          },
          function (t) {
            0 === o._status && ((o._status = 2), (o._result = t));
          }
        ));
    }
    function Vt(t) {
      if (null != t) {
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
        switch (t) {
          case St:
            return "Fragment";

          case zt:
            return "Portal";

          case Ot:
            return "Profiler";

          case kt:
            return "StrictMode";

          case Qt:
            return "Suspense";

          case Zt:
            return "SuspenseList";
        }
        if ("object" == typeof t)
          switch (t.$$typeof) {
            case Bt:
              return "Context.Consumer";

            case Yt:
              return "Context.Provider";

            case Ut:
              var o = (o = t.render).displayName || o.name || "";
              return t.displayName || ("" !== o ? "ForwardRef(" + o + ")" : "ForwardRef");

            case Ht:
              return Vt(t.type);

            case Pt:
              return Vt(t.render);

            case Gt:
              if ((t = 1 === t._status ? t._result : null)) return Vt(t);
          }
      }
      return null;
    }
    function qt(t) {
      var o = "";
      do {
        switch (t.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var e = "";
            break;

          default:
            var r = t._debugOwner,
              a = t._debugSource,
              i = Vt(t.type),
              e = null;
            r && (e = Vt(r.type)),
              (r = i),
              (i = ""),
              a ? (i = " (at " + a.fileName.replace(Et, "") + ":" + a.lineNumber + ")") : e && (i = " (created by " + e + ")"),
              (e = "\n    in " + (r || "Unknown") + i);
        }
      } while (((o += e), (t = t.return)));
      return o;
    }
    function Xt(t) {
      switch (typeof t) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return t;

        default:
          return "";
      }
    }
    function Jt(t) {
      var o = t.type;
      return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === o || "radio" === o);
    }
    function Kt(t) {
      var o,
        e,
        r = Jt(t) ? "checked" : "value",
        a = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
        i = "" + t[r];
      if (!t.hasOwnProperty(r) && void 0 !== a && "function" == typeof a.get && "function" == typeof a.set)
        return (
          (o = a.get),
          (e = a.set),
          Object.defineProperty(t, r, {
            configurable: !0,
            get: function () {
              return o.call(this);
            },
            set: function (t) {
              (i = "" + t), e.call(this, t);
            }
          }),
          Object.defineProperty(t, r, {
            enumerable: a.enumerable
          }),
          {
            getValue: function () {
              return i;
            },
            setValue: function (t) {
              i = "" + t;
            },
            stopTracking: function () {
              (t._valueTracker = null), delete t[r];
            }
          }
        );
    }
    function $t(t) {
      t._valueTracker || (t._valueTracker = Kt(t));
    }
    function to(t) {
      var o, e, r;
      return !(
        !t ||
        ((o = t._valueTracker) &&
          ((e = o.getValue()), (r = ""), (t = r = t ? (Jt(t) ? (t.checked ? "true" : "false") : t.value) : r) === e || (o.setValue(t), 0)))
      );
    }
    function oo(t, o) {
      var e = o.checked;
      return D({}, o, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != e ? e : t._wrapperState.initialChecked
      });
    }
    function eo(t, o) {
      var e = null == o.defaultValue ? "" : o.defaultValue,
        r = null != o.checked ? o.checked : o.defaultChecked,
        e = Xt(null != o.value ? o.value : e);
      t._wrapperState = {
        initialChecked: r,
        initialValue: e,
        controlled: "checkbox" === o.type || "radio" === o.type ? null != o.checked : null != o.value
      };
    }
    function ro(t, o) {
      null != (o = o.checked) && vt(t, "checked", o, !1);
    }
    function ao(t, o) {
      ro(t, o);
      var e = Xt(o.value),
        r = o.type;
      if (null != e)
        "number" === r ? ((0 === e && "" === t.value) || t.value != e) && (t.value = "" + e) : t.value !== "" + e && (t.value = "" + e);
      else if ("submit" === r || "reset" === r) return void t.removeAttribute("value");
      o.hasOwnProperty("value") ? no(t, o.type, e) : o.hasOwnProperty("defaultValue") && no(t, o.type, Xt(o.defaultValue)),
        null == o.checked && null != o.defaultChecked && (t.defaultChecked = !!o.defaultChecked);
    }
    function io(t, o, e) {
      if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
        var r = o.type;
        if (!(("submit" !== r && "reset" !== r) || (void 0 !== o.value && null !== o.value))) return;
        (o = "" + t._wrapperState.initialValue), e || o === t.value || (t.value = o), (t.defaultValue = o);
      }
      "" !== (e = t.name) && (t.name = ""), (t.defaultChecked = !!t._wrapperState.initialChecked), "" !== e && (t.name = e);
    }
    function no(t, o, e) {
      ("number" === o && t.ownerDocument.activeElement === t) ||
        (null == e ? (t.defaultValue = "" + t._wrapperState.initialValue) : t.defaultValue !== "" + e && (t.defaultValue = "" + e));
    }
    function lo(t) {
      var o = "";
      return (
        B.Children.forEach(t, function (t) {
          null != t && (o += t);
        }),
        o
      );
    }
    function Mo(t, o) {
      return (
        (t = D(
          {
            children: void 0
          },
          o
        )),
        (o = lo(o.children)) && (t.children = o),
        t
      );
    }
    function go(t, o, e, r) {
      if (((t = t.options), o)) {
        o = {};
        for (var a = 0; a < e.length; a++) o["$" + e[a]] = !0;
        for (e = 0; e < t.length; e++)
          (a = o.hasOwnProperty("$" + t[e].value)), t[e].selected !== a && (t[e].selected = a), a && r && (t[e].defaultSelected = !0);
      } else {
        for (e = "" + Xt(e), o = null, a = 0; a < t.length; a++) {
          if (t[a].value === e) return (t[a].selected = !0), void (r && (t[a].defaultSelected = !0));
          null !== o || t[a].disabled || (o = t[a]);
        }
        null !== o && (o.selected = !0);
      }
    }
    function uo(t, o) {
      if (null != o.dangerouslySetInnerHTML) throw Error(y(91));
      return D({}, o, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
      });
    }
    function co(t, o) {
      var e = o.value;
      if (null == e) {
        if (((e = o.children), (o = o.defaultValue), null != e)) {
          if (null != o) throw Error(y(92));
          if (Array.isArray(e)) {
            if (!(e.length <= 1)) throw Error(y(93));
            e = e[0];
          }
          o = e;
        }
        e = o = null == o ? "" : o;
      }
      t._wrapperState = {
        initialValue: Xt(e)
      };
    }
    function so(t, o) {
      var e = Xt(o.value),
        r = Xt(o.defaultValue);
      null != e && ((e = "" + e) !== t.value && (t.value = e), null == o.defaultValue) && t.defaultValue !== e && (t.defaultValue = e),
        null != r && (t.defaultValue = "" + r);
    }
    function Ao(t) {
      var o = t.textContent;
      o === t._wrapperState.initialValue && "" !== o && null !== o && (t.value = o);
    }
    var xo = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg"
    };
    function wo(t) {
      switch (t) {
        case "svg":
          return "http://www.w3.org/2000/svg";

        case "math":
          return "http://www.w3.org/1998/Math/MathML";

        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Do(t, o) {
      return null == t || "http://www.w3.org/1999/xhtml" === t
        ? wo(o)
        : "http://www.w3.org/2000/svg" === t && "foreignObject" === o
        ? "http://www.w3.org/1999/xhtml"
        : t;
    }
    ho = function (t, o) {
      if (t.namespaceURI !== xo.svg || "innerHTML" in t) t.innerHTML = o;
      else {
        for (
          (po = po || document.createElement("div")).innerHTML = "<svg>" + o.valueOf().toString() + "</svg>", o = po.firstChild;
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (; o.firstChild; ) t.appendChild(o.firstChild);
      }
    };
    var po,
      ho,
      Io =
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (t, o, e, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return ho(t, o, e, r);
              });
            }
          : ho;
    function No(t, o) {
      if (o) {
        var e = t.firstChild;
        if (e && e === t.lastChild && 3 === e.nodeType) return void (e.nodeValue = o);
      }
      t.textContent = o;
    }
    function jo(t, o) {
      var e = {};
      return (e[t.toLowerCase()] = o.toLowerCase()), (e["Webkit" + t] = "webkit" + o), (e["Moz" + t] = "moz" + o), e;
    }
    var Lo = {
        animationend: jo("Animation", "AnimationEnd"),
        animationiteration: jo("Animation", "AnimationIteration"),
        animationstart: jo("Animation", "AnimationStart"),
        transitionend: jo("Transition", "TransitionEnd")
      },
      Co = {},
      yo = {};
    function fo(t) {
      if (Co[t]) return Co[t];
      if (Lo[t]) {
        var o,
          e = Lo[t];
        for (o in e) if (e.hasOwnProperty(o) && o in yo) return (Co[t] = e[o]);
      }
      return t;
    }
    it &&
      ((yo = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Lo.animationend.animation, delete Lo.animationiteration.animation, delete Lo.animationstart.animation),
      "TransitionEvent" in window || delete Lo.transitionend.transition);
    var To = fo("animationend"),
      mo = fo("animationiteration"),
      vo = fo("animationstart"),
      Eo = fo("transitionend"),
      bo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      zo = new ("function" == typeof WeakMap ? WeakMap : Map)();
    function So(t) {
      var o = zo.get(t);
      return void 0 === o && ((o = new Map()), zo.set(t, o)), o;
    }
    function ko(t) {
      var o = t,
        e = t;
      if (t.alternate) for (; o.return; ) o = o.return;
      else for (t = o; 0 != (1026 & (o = t).effectTag) && (e = o.return), (t = o.return); );
      return 3 === o.tag ? e : null;
    }
    function Oo(t) {
      if (13 === t.tag) {
        var o = t.memoizedState;
        if (null !== (o = null === o && null !== (t = t.alternate) ? t.memoizedState : o)) return o.dehydrated;
      }
      return null;
    }
    function Yo(t) {
      if (ko(t) !== t) throw Error(y(188));
    }
    function Bo(t) {
      var o = t.alternate;
      if (!o) {
        if (null === (o = ko(t))) throw Error(y(188));
        return o !== t ? null : t;
      }
      for (var e = t, r = o; ; ) {
        var a = e.return;
        if (null === a) break;
        var i = a.alternate;
        if (null === i) {
          if (null === (r = a.return)) break;
          e = r;
        } else {
          if (a.child === i.child) {
            for (i = a.child; i; ) {
              if (i === e) return Yo(a), t;
              if (i === r) return Yo(a), o;
              i = i.sibling;
            }
            throw Error(y(188));
          }
          if (e.return !== r.return) (e = a), (r = i);
          else {
            for (var n = !1, l = a.child; l; ) {
              if (l === e) {
                (n = !0), (e = a), (r = i);
                break;
              }
              if (l === r) {
                (n = !0), (r = a), (e = i);
                break;
              }
              l = l.sibling;
            }
            if (!n) {
              for (l = i.child; l; ) {
                if (l === e) {
                  (n = !0), (e = i), (r = a);
                  break;
                }
                if (l === r) {
                  (n = !0), (r = i), (e = a);
                  break;
                }
                l = l.sibling;
              }
              if (!n) throw Error(y(189));
            }
          }
          if (e.alternate !== r) throw Error(y(190));
        }
      }
      if (3 !== e.tag) throw Error(y(188));
      return e.stateNode.current === e ? t : o;
    }
    function _o(t) {
      if ((t = Bo(t)))
        for (var o = t; ; ) {
          if (5 === o.tag || 6 === o.tag) return o;
          if (o.child) o = (o.child.return = o).child;
          else {
            if (o === t) break;
            for (; !o.sibling; ) {
              if (!o.return || o.return === t) return null;
              o = o.return;
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
      return null;
    }
    function Uo(t, o) {
      if (null == o) throw Error(y(30));
      return null == t
        ? o
        : Array.isArray(t)
        ? (Array.isArray(o) ? t.push.apply(t, o) : t.push(o), t)
        : Array.isArray(o)
        ? [t].concat(o)
        : [t, o];
    }
    function Qo(t, o, e) {
      Array.isArray(t) ? t.forEach(o, e) : t && o.call(e, t);
    }
    var Zo = null;
    function Ho(t) {
      if (t) {
        var o = t._dispatchListeners,
          e = t._dispatchInstances;
        if (Array.isArray(o)) for (var r = 0; r < o.length && !t.isPropagationStopped(); r++) q(t, o[r], e[r]);
        else o && q(t, o, e);
        (t._dispatchListeners = null), (t._dispatchInstances = null), t.isPersistent() || t.constructor.release(t);
      }
    }
    function Go(t) {
      if (((t = Zo = null !== t ? Uo(Zo, t) : Zo), (Zo = null), t)) {
        if ((Qo(t, Ho), Zo)) throw Error(y(95));
        if (Z) throw ((t = H), (Z = !1), (H = null), t);
      }
    }
    function Po(t) {
      return 3 === (t = (t = t.target || t.srcElement || window).correspondingUseElement ? t.correspondingUseElement : t).nodeType
        ? t.parentNode
        : t;
    }
    function Wo(t) {
      var o;
      return (
        !!it &&
        ((o = (t = "on" + t) in document) ||
          ((o = document.createElement("div")).setAttribute(t, "return;"), (o = "function" == typeof o[t])),
        o)
      );
    }
    var Fo = [];
    function Ro(t) {
      (t.topLevelType = null), (t.nativeEvent = null), (t.targetInst = null), (t.ancestors.length = 0), Fo.length < 10 && Fo.push(t);
    }
    function Vo(t, o, e, r) {
      var a;
      return Fo.length
        ? (((a = Fo.pop()).topLevelType = t), (a.eventSystemFlags = r), (a.nativeEvent = o), (a.targetInst = e), a)
        : {
            topLevelType: t,
            eventSystemFlags: r,
            nativeEvent: o,
            targetInst: e,
            ancestors: []
          };
    }
    function qo(t) {
      var o = (r = t.targetInst);
      do {
        if (!o) {
          t.ancestors.push(o);
          break;
        }
        var e = o;
        if (3 === e.tag) e = e.stateNode.containerInfo;
        else {
          for (; e.return; ) e = e.return;
          e = 3 !== e.tag ? null : e.stateNode.containerInfo;
        }
      } while (e && ((5 !== (r = o.tag) && 6 !== r) || t.ancestors.push(o), (o = cr(e))));
      for (o = 0; o < t.ancestors.length; o++) {
        var r = t.ancestors[o],
          a = Po(t.nativeEvent),
          e = t.topLevelType,
          i = t.nativeEvent,
          n = t.eventSystemFlags;
        0 === o && (n |= 64);
        for (var l = null, M = 0; M < tt.length; M++) {
          var g = tt[M];
          (g = g && g.extractEvents(e, r, i, a, n)) && (l = Uo(l, g));
        }
        Go(l);
      }
    }
    function Xo(t, o, e) {
      if (!e.has(t)) {
        switch (t) {
          case "scroll":
            ve(o, "scroll", !0);
            break;

          case "focus":
          case "blur":
            ve(o, "focus", !0), ve(o, "blur", !0), e.set("blur", null), e.set("focus", null);
            break;

          case "cancel":
          case "close":
            Wo(t) && ve(o, t, !0);
            break;

          case "invalid":
          case "submit":
          case "reset":
            break;

          default:
            -1 === bo.indexOf(t) && u(t, o);
        }
        e.set(t, null);
      }
    }
    var Jo,
      Ko,
      $o,
      te = !1,
      n = [],
      oe = null,
      ee = null,
      re = null,
      ae = new Map(),
      ie = new Map(),
      ne = [],
      le =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
          " "
        ),
      Me = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
    function ge(t, o) {
      var e = So(o);
      le.forEach(function (t) {
        Xo(t, o, e);
      }),
        Me.forEach(function (t) {
          Xo(t, o, e);
        });
    }
    function ue(t, o, e, r, a) {
      return {
        blockedOn: t,
        topLevelType: o,
        eventSystemFlags: 32 | e,
        nativeEvent: a,
        container: r
      };
    }
    function ce(t, o) {
      switch (t) {
        case "focus":
        case "blur":
          oe = null;
          break;

        case "dragenter":
        case "dragleave":
          ee = null;
          break;

        case "mouseover":
        case "mouseout":
          re = null;
          break;

        case "pointerover":
        case "pointerout":
          ae.delete(o.pointerId);
          break;

        case "gotpointercapture":
        case "lostpointercapture":
          ie.delete(o.pointerId);
      }
    }
    function de(t, o, e, r, a, i) {
      return (
        null === t || t.nativeEvent !== i
          ? ((t = ue(o, e, r, a, i)), null !== o && null !== (o = dr(o)) && Ko(o))
          : (t.eventSystemFlags |= r),
        t
      );
    }
    function se(t, o, e, r, a) {
      switch (o) {
        case "focus":
          return (oe = de(oe, t, o, e, r, a)), !0;

        case "dragenter":
          return (ee = de(ee, t, o, e, r, a)), !0;

        case "mouseover":
          return (re = de(re, t, o, e, r, a)), !0;

        case "pointerover":
          var i = a.pointerId;
          return ae.set(i, de(ae.get(i) || null, t, o, e, r, a)), !0;

        case "gotpointercapture":
          return (i = a.pointerId), ie.set(i, de(ie.get(i) || null, t, o, e, r, a)), !0;
      }
      return !1;
    }
    function Ae(t) {
      var o = cr(t.target);
      if (null !== o) {
        var e = ko(o);
        if (null !== e)
          if (13 === (o = e.tag)) {
            if (null !== (o = Oo(e)))
              return (
                (t.blockedOn = o),
                void r.unstable_runWithPriority(t.priority, function () {
                  $o(e);
                })
              );
          } else if (3 === o && e.stateNode.hydrate) return void (t.blockedOn = 3 === e.tag ? e.stateNode.containerInfo : null);
      }
      t.blockedOn = null;
    }
    function xe(t) {
      var o, e;
      return (
        null === t.blockedOn &&
        (null === (o = Se(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent)) ||
          (null !== (e = dr(o)) && Ko(e), (t.blockedOn = o), !1))
      );
    }
    function we(t, o, e) {
      xe(t) && e.delete(o);
    }
    function De() {
      for (te = !1; 0 < n.length; ) {
        var t = n[0];
        if (null !== t.blockedOn) {
          null !== (t = dr(t.blockedOn)) && Jo(t);
          break;
        }
        var o = Se(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
        null !== o ? (t.blockedOn = o) : n.shift();
      }
      null !== oe && xe(oe) && (oe = null),
        null !== ee && xe(ee) && (ee = null),
        null !== re && xe(re) && (re = null),
        ae.forEach(we),
        ie.forEach(we);
    }
    function pe(t, o) {
      t.blockedOn === o && ((t.blockedOn = null), te || ((te = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, De)));
    }
    function he(o) {
      function t(t) {
        return pe(t, o);
      }
      if (0 < n.length) {
        pe(n[0], o);
        for (var e = 1; e < n.length; e++) {
          var r = n[e];
          r.blockedOn === o && (r.blockedOn = null);
        }
      }
      for (
        null !== oe && pe(oe, o), null !== ee && pe(ee, o), null !== re && pe(re, o), ae.forEach(t), ie.forEach(t), e = 0;
        e < ne.length;
        e++
      )
        (r = ne[e]).blockedOn === o && (r.blockedOn = null);
      for (; 0 < ne.length && null === (e = ne[0]).blockedOn; ) Ae(e), null === e.blockedOn && ne.shift();
    }
    var Ie = {},
      Ne = new Map(),
      je = new Map(),
      a = [
        "abort",
        "abort",
        To,
        "animationEnd",
        mo,
        "animationIteration",
        vo,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        Eo,
        "transitionEnd",
        "waiting",
        "waiting"
      ];
    function Le(t, o) {
      for (var e = 0; e < t.length; e += 2) {
        var r = t[e],
          a = t[e + 1],
          i = {
            phasedRegistrationNames: {
              bubbled: (i = "on" + (a[0].toUpperCase() + a.slice(1))),
              captured: i + "Capture"
            },
            dependencies: [r],
            eventPriority: o
          };
        je.set(r, o), Ne.set(r, i), (Ie[a] = i);
      }
    }
    Le(
      "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
        " "
      ),
      0
    ),
      Le(
        "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
          " "
        ),
        1
      ),
      Le(a, 2);
    for (
      var Ce = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), ye = 0;
      ye < Ce.length;
      ye++
    )
      je.set(Ce[ye], 0);
    var fe = r.unstable_UserBlockingPriority,
      Te = r.unstable_runWithPriority,
      me = !0;
    function u(t, o) {
      ve(o, t, !1);
    }
    function ve(t, o, e) {
      var r = je.get(o);
      switch (void 0 === r ? 2 : r) {
        case 0:
          r = Ee.bind(null, o, 1, t);
          break;

        case 1:
          r = be.bind(null, o, 1, t);
          break;

        default:
          r = ze.bind(null, o, 1, t);
      }
      e ? t.addEventListener(o, r, !0) : t.addEventListener(o, r, !1);
    }
    function Ee(t, o, e, r) {
      wt || At();
      var a = ze,
        i = wt;
      wt = !0;
      try {
        st(a, t, o, e, r);
      } finally {
        (wt = i) || pt();
      }
    }
    function be(t, o, e, r) {
      Te(fe, ze.bind(null, t, o, e, r));
    }
    function ze(t, o, e, r) {
      if (me)
        if (0 < n.length && -1 < le.indexOf(t)) (t = ue(null, t, o, e, r)), n.push(t);
        else {
          var a = Se(t, o, e, r);
          if (null === a) ce(t, r);
          else if (-1 < le.indexOf(t)) (t = ue(a, t, o, e, r)), n.push(t);
          else if (!se(a, t, o, e, r)) {
            ce(t, r), (t = Vo(t, r, null, o));
            try {
              ht(qo, t);
            } finally {
              Ro(t);
            }
          }
        }
    }
    function Se(t, o, e, r) {
      if (null !== (e = cr((e = Po(r))))) {
        var a = ko(e);
        if (null === a) e = null;
        else {
          var i = a.tag;
          if (13 === i) {
            if (null !== (e = Oo(a))) return e;
            e = null;
          } else if (3 === i) {
            if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
            e = null;
          } else a !== e && (e = null);
        }
      }
      t = Vo(t, r, e, o);
      try {
        ht(qo, t);
      } finally {
        Ro(t);
      }
      return null;
    }
    var ke = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      Oe = ["Webkit", "ms", "Moz", "O"];
    function Ye(t, o, e) {
      return null == o || "boolean" == typeof o || "" === o
        ? ""
        : e || "number" != typeof o || 0 === o || (ke.hasOwnProperty(t) && ke[t])
        ? ("" + o).trim()
        : o + "px";
    }
    function Be(t, o) {
      for (var e in ((t = t.style), o)) {
        var r, a;
        o.hasOwnProperty(e) &&
          ((r = 0 === e.indexOf("--")), (a = Ye(e, o[e], r)), "float" === e && (e = "cssFloat"), r ? t.setProperty(e, a) : (t[e] = a));
      }
    }
    Object.keys(ke).forEach(function (o) {
      Oe.forEach(function (t) {
        (t = t + o.charAt(0).toUpperCase() + o.substring(1)), (ke[t] = ke[o]);
      });
    });
    var _e = D(
      {
        menuitem: !0
      },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }
    );
    function Ue(t, o) {
      if (o) {
        if (_e[t] && (null != o.children || null != o.dangerouslySetInnerHTML)) throw Error(y(137, t, ""));
        if (null != o.dangerouslySetInnerHTML) {
          if (null != o.children) throw Error(y(60));
          if (!("object" == typeof o.dangerouslySetInnerHTML && "__html" in o.dangerouslySetInnerHTML)) throw Error(y(61));
        }
        if (null != o.style && "object" != typeof o.style) throw Error(y(62, ""));
      }
    }
    function Qe(t, o) {
      if (-1 === t.indexOf("-")) return "string" == typeof o.is;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;

        default:
          return !0;
      }
    }
    var Ze = xo.html;
    function He(t, o) {
      var e = So((t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument));
      o = rt[o];
      for (var r = 0; r < o.length; r++) Xo(o[r], t, e);
    }
    function Ge() {}
    function Pe(o) {
      if (void 0 === (o = o || ("undefined" != typeof document ? document : void 0))) return null;
      try {
        return o.activeElement || o.body;
      } catch (t) {
        return o.body;
      }
    }
    function We(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Fe(t, o) {
      var e,
        r = We(t);
      for (t = 0; r; ) {
        if (3 === r.nodeType) {
          if (((e = t + r.textContent.length), t <= o && o <= e))
            return {
              node: r,
              offset: o - t
            };
          t = e;
        }
        t: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break t;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = We(r);
      }
    }
    function Re(t, o) {
      return (
        !(!t || !o) &&
        (t === o ||
          ((!t || 3 !== t.nodeType) &&
            (o && 3 === o.nodeType
              ? Re(t, o.parentNode)
              : "contains" in t
              ? t.contains(o)
              : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(o)))))
      );
    }
    function Ve() {
      for (var t = window, o = Pe(); o instanceof t.HTMLIFrameElement; ) {
        try {
          var e = "string" == typeof o.contentWindow.location.href;
        } catch (t) {
          e = !1;
        }
        if (!e) break;
        o = Pe((t = o.contentWindow).document);
      }
      return o;
    }
    function qe(t) {
      var o = t && t.nodeName && t.nodeName.toLowerCase();
      return (
        o &&
        (("input" === o && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type)) ||
          "textarea" === o ||
          "true" === t.contentEditable)
      );
    }
    var Xe = "$",
      Je = "/$",
      Ke = "$?",
      $e = "$!",
      tr = null,
      or = null;
    function er(t, o) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!o.autoFocus;
      }
      return !1;
    }
    function rr(t, o) {
      return (
        "textarea" === t ||
        "option" === t ||
        "noscript" === t ||
        "string" == typeof o.children ||
        "number" == typeof o.children ||
        ("object" == typeof o.dangerouslySetInnerHTML && null !== o.dangerouslySetInnerHTML && null != o.dangerouslySetInnerHTML.__html)
      );
    }
    var ar = "function" == typeof setTimeout ? setTimeout : void 0,
      ir = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function nr(t) {
      for (; null != t; t = t.nextSibling) {
        var o = t.nodeType;
        if (1 === o || 3 === o) break;
      }
      return t;
    }
    function lr(t) {
      t = t.previousSibling;
      for (var o = 0; t; ) {
        if (8 === t.nodeType) {
          var e = t.data;
          if (e === Xe || e === $e || e === Ke) {
            if (0 === o) return t;
            o--;
          } else e === Je && o++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    var a = Math.random().toString(36).slice(2),
      Mr = "__reactInternalInstance$" + a,
      gr = "__reactEventHandlers$" + a,
      ur = "__reactContainere$" + a;
    function cr(t) {
      var o = t[Mr];
      if (o) return o;
      for (var e = t.parentNode; e; ) {
        if ((o = e[ur] || e[Mr])) {
          if (((e = o.alternate), null !== o.child || (null !== e && null !== e.child)))
            for (t = lr(t); null !== t; ) {
              if ((e = t[Mr])) return e;
              t = lr(t);
            }
          return o;
        }
        e = (t = e).parentNode;
      }
      return null;
    }
    function dr(t) {
      return !(t = t[Mr] || t[ur]) || (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag) ? null : t;
    }
    function sr(t) {
      if (5 === t.tag || 6 === t.tag) return t.stateNode;
      throw Error(y(33));
    }
    function Ar(t) {
      return t[gr] || null;
    }
    function xr(t) {
      for (; (t = t.return) && 5 !== t.tag; );
      return t || null;
    }
    function wr(t, o) {
      var e = t.stateNode;
      if (!e) return null;
      var r = F(e);
      if (!r) return null;
      switch (((e = r[o]), o)) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          t = !(r = (r = !r.disabled) ? r : !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t));
          break;

        default:
          t = !1;
      }
      if (t) return null;
      if (e && "function" != typeof e) throw Error(y(231, o, typeof e));
      return e;
    }
    function Dr(t, o, e) {
      (o = wr(t, e.dispatchConfig.phasedRegistrationNames[o])) &&
        ((e._dispatchListeners = Uo(e._dispatchListeners, o)), (e._dispatchInstances = Uo(e._dispatchInstances, t)));
    }
    function pr(t) {
      if (t && t.dispatchConfig.phasedRegistrationNames) {
        for (var o = t._targetInst, e = []; o; ) e.push(o), (o = xr(o));
        for (o = e.length; 0 < o--; ) Dr(e[o], "captured", t);
        for (o = 0; o < e.length; o++) Dr(e[o], "bubbled", t);
      }
    }
    function hr(t, o, e) {
      t &&
        e &&
        e.dispatchConfig.registrationName &&
        (o = wr(t, e.dispatchConfig.registrationName)) &&
        ((e._dispatchListeners = Uo(e._dispatchListeners, o)), (e._dispatchInstances = Uo(e._dispatchInstances, t)));
    }
    function Ir(t) {
      t && t.dispatchConfig.registrationName && hr(t._targetInst, null, t);
    }
    function Nr(t) {
      Qo(t, pr);
    }
    var jr = null,
      Lr = null,
      Cr = null;
    function yr() {
      if (Cr) return Cr;
      for (var t = Lr, o = t.length, e = ("value" in jr) ? jr.value : jr.textContent, r = e.length, a = 0; a < o && t[a] === e[a]; a++);
      for (var i = o - a, n = 1; n <= i && t[o - n] === e[r - n]; n++);
      return (Cr = e.slice(a, 1 < n ? 1 - n : void 0));
    }
    function fr() {
      return !0;
    }
    function Tr() {
      return !1;
    }
    function l(t, o, e, r) {
      for (var a in ((this.dispatchConfig = t), (this._targetInst = o), (this.nativeEvent = e), (t = this.constructor.Interface)))
        t.hasOwnProperty(a) && ((o = t[a]) ? (this[a] = o(e)) : "target" === a ? (this.target = r) : (this[a] = e[a]));
      return (
        (this.isDefaultPrevented = (null != e.defaultPrevented ? e.defaultPrevented : !1 === e.returnValue) ? fr : Tr),
        (this.isPropagationStopped = Tr),
        this
      );
    }
    function mr(t, o, e, r) {
      var a;
      return this.eventPool.length ? ((a = this.eventPool.pop()), this.call(a, t, o, e, r), a) : new this(t, o, e, r);
    }
    function vr(t) {
      if (!(t instanceof this)) throw Error(y(279));
      t.destructor(), this.eventPool.length < 10 && this.eventPool.push(t);
    }
    function Er(t) {
      (t.eventPool = []), (t.getPooled = mr), (t.release = vr);
    }
    D(l.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1),
          (this.isDefaultPrevented = fr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0),
          (this.isPropagationStopped = fr));
      },
      persist: function () {
        this.isPersistent = fr;
      },
      isPersistent: Tr,
      destructor: function () {
        for (var t in this.constructor.Interface) this[t] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = Tr),
          (this._dispatchInstances = this._dispatchListeners = null);
      }
    }),
      (l.Interface = {
        type: null,
        target: null,
        currentTarget: function () {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (t) {
          return t.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null
      }),
      (l.extend = function (t) {
        function o() {}
        function e() {
          return r.apply(this, arguments);
        }
        var r = this,
          a = ((o.prototype = r.prototype), new o());
        return (
          D(a, e.prototype),
          (e.prototype = a),
          ((e.prototype.constructor = e).Interface = D({}, r.Interface, t)),
          (e.extend = r.extend),
          Er(e),
          e
        );
      }),
      Er(l);
    var br = l.extend({
        data: null
      }),
      zr = l.extend({
        data: null
      }),
      Sr = [9, 13, 27, 32],
      kr = it && "CompositionEvent" in window,
      a = null,
      Or = (it && "documentMode" in document && (a = document.documentMode), it && "TextEvent" in window && !a),
      Yr = it && (!kr || (a && 8 < a && a <= 11)),
      Br = String.fromCharCode(32),
      _r = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture"
          },
          dependencies: ["compositionend", "keypress", "textInput", "paste"]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture"
          },
          dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture"
          },
          dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture"
          },
          dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
        }
      },
      Ur = !1;
    function Qr(t, o) {
      switch (t) {
        case "keyup":
          return -1 !== Sr.indexOf(o.keyCode);

        case "keydown":
          return 229 !== o.keyCode;

        case "keypress":
        case "mousedown":
        case "blur":
          return !0;

        default:
          return !1;
      }
    }
    function Zr(t) {
      return "object" == typeof (t = t.detail) && "data" in t ? t.data : null;
    }
    var Hr = !1;
    function Gr(t, o) {
      switch (t) {
        case "compositionend":
          return Zr(o);

        case "keypress":
          return 32 !== o.which ? null : ((Ur = !0), Br);

        case "textInput":
          return (t = o.data) === Br && Ur ? null : t;

        default:
          return null;
      }
    }
    function Pr(t, o) {
      if (Hr) return "compositionend" === t || (!kr && Qr(t, o)) ? ((t = yr()), (Cr = Lr = jr = null), (Hr = !1), t) : null;
      switch (t) {
        case "paste":
          return null;

        case "keypress":
          if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
            if (o.char && 1 < o.char.length) return o.char;
            if (o.which) return String.fromCharCode(o.which);
          }
          return null;

        case "compositionend":
          return Yr && "ko" !== o.locale ? null : o.data;

        default:
          return null;
      }
    }
    var a = {
        eventTypes: _r,
        extractEvents: function (t, o, e, r) {
          var a;
          if (kr)
            t: {
              switch (t) {
                case "compositionstart":
                  var i = _r.compositionStart;
                  break t;

                case "compositionend":
                  i = _r.compositionEnd;
                  break t;

                case "compositionupdate":
                  i = _r.compositionUpdate;
                  break t;
              }
              i = void 0;
            }
          else Hr ? Qr(t, e) && (i = _r.compositionEnd) : "keydown" === t && 229 === e.keyCode && (i = _r.compositionStart);
          return (
            (a = i
              ? (Yr &&
                  "ko" !== e.locale &&
                  (Hr || i !== _r.compositionStart
                    ? i === _r.compositionEnd && Hr && (a = yr())
                    : ((Lr = "value" in (jr = r) ? jr.value : jr.textContent), (Hr = !0))),
                (i = br.getPooled(i, o, e, r)),
                (!a && null === (a = Zr(e))) || (i.data = a),
                Nr(i),
                i)
              : null),
            (t = (Or ? Gr : Pr)(t, e)) ? (((o = zr.getPooled(_r.beforeInput, o, e, r)).data = t), Nr(o)) : (o = null),
            null === a ? o : null === o ? a : [a, o]
          );
        }
      },
      Wr = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
      };
    function Fr(t) {
      var o = t && t.nodeName && t.nodeName.toLowerCase();
      return "input" === o ? !!Wr[t.type] : "textarea" === o;
    }
    var Rr = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
      }
    };
    function Vr(t, o, e) {
      return ((t = l.getPooled(Rr.change, t, o, e)).type = "change"), ut(e), Nr(t), t;
    }
    var qr = null,
      Xr = null;
    function Jr(t) {
      Go(t);
    }
    function Kr(t) {
      if (to(sr(t))) return t;
    }
    function $r(t, o) {
      if ("change" === t) return o;
    }
    var t0 = !1;
    function o0() {
      qr && (qr.detachEvent("onpropertychange", e0), (Xr = qr = null));
    }
    function e0(t) {
      if ("value" === t.propertyName && Kr(Xr))
        if (((t = Vr(Xr, t, Po(t))), wt)) Go(t);
        else {
          wt = !0;
          try {
            dt(Jr, t);
          } finally {
            (wt = !1), pt();
          }
        }
    }
    function r0(t, o, e) {
      "focus" === t ? (o0(), (Xr = e), (qr = o).attachEvent("onpropertychange", e0)) : "blur" === t && o0();
    }
    function a0(t) {
      if ("selectionchange" === t || "keyup" === t || "keydown" === t) return Kr(Xr);
    }
    function i0(t, o) {
      if ("click" === t) return Kr(o);
    }
    function n0(t, o) {
      if ("input" === t || "change" === t) return Kr(o);
    }
    it && (t0 = Wo("input") && (!document.documentMode || 9 < document.documentMode));
    var l0 = {
        eventTypes: Rr,
        _isInputEventSupported: t0,
        extractEvents: function (t, o, e, r) {
          var a,
            i,
            n = o ? sr(o) : window,
            l = n.nodeName && n.nodeName.toLowerCase();
          if (
            ("select" === l || ("input" === l && "file" === n.type)
              ? (a = $r)
              : Fr(n)
              ? t0
                ? (a = n0)
                : ((a = a0), (i = r0))
              : !(l = n.nodeName) || "input" !== l.toLowerCase() || ("checkbox" !== n.type && "radio" !== n.type) || (a = i0),
            (a = a && a(t, o)))
          )
            return Vr(a, e, r);
          i && i(t, n, o), "blur" === t && (t = n._wrapperState) && t.controlled && "number" === n.type && no(n, "number", n.value);
        }
      },
      M0 = l.extend({
        view: null,
        detail: null
      }),
      g0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
    function u0(t) {
      var o = this.nativeEvent;
      return o.getModifierState ? o.getModifierState(t) : !!(t = g0[t]) && !!o[t];
    }
    function c0() {
      return u0;
    }
    var d0 = 0,
      s0 = 0,
      A0 = !1,
      x0 = !1,
      w0 = M0.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: c0,
        button: null,
        buttons: null,
        relatedTarget: function (t) {
          return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement);
        },
        movementX: function (t) {
          var o;
          return "movementX" in t
            ? t.movementX
            : ((o = d0), (d0 = t.screenX), A0 ? ("mousemove" === t.type ? t.screenX - o : 0) : ((A0 = !0), 0));
        },
        movementY: function (t) {
          var o;
          return "movementY" in t
            ? t.movementY
            : ((o = s0), (s0 = t.screenY), x0 ? ("mousemove" === t.type ? t.screenY - o : 0) : ((x0 = !0), 0));
        }
      }),
      D0 = w0.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
      }),
      p0 = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["mouseout", "mouseover"]
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["mouseout", "mouseover"]
        },
        pointerEnter: {
          registrationName: "onPointerEnter",
          dependencies: ["pointerout", "pointerover"]
        },
        pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: ["pointerout", "pointerover"]
        }
      },
      h0 = {
        eventTypes: p0,
        extractEvents: function (t, o, e, r, a) {
          var i,
            n,
            l,
            M,
            g = "mouseover" === t || "pointerover" === t,
            u = "mouseout" === t || "pointerout" === t;
          if ((g && 0 == (32 & a) && (e.relatedTarget || e.fromElement)) || (!u && !g)) return null;
          if (
            ((g = r.window === r ? r : (g = r.ownerDocument) ? g.defaultView || g.parentWindow : window),
            u
              ? ((u = o),
                null !== (o = (o = e.relatedTarget || e.toElement) ? cr(o) : null) &&
                  (o !== ko(o) || (5 !== o.tag && 6 !== o.tag)) &&
                  (o = null))
              : (u = null),
            u === o)
          )
            return null;
          if (
            ("mouseout" === t || "mouseover" === t
              ? ((i = w0), (n = p0.mouseLeave), (l = p0.mouseEnter), (M = "mouse"))
              : ("pointerout" !== t && "pointerover" !== t) || ((i = D0), (n = p0.pointerLeave), (l = p0.pointerEnter), (M = "pointer")),
            (t = null == u ? g : sr(u)),
            (g = null == o ? g : sr(o)),
            ((n = i.getPooled(n, u, e, r)).type = M + "leave"),
            (n.target = t),
            (n.relatedTarget = g),
            ((e = i.getPooled(l, o, e, r)).type = M + "enter"),
            (e.target = g),
            (e.relatedTarget = t),
            (M = o),
            (r = u) && M)
          )
            t: {
              for (l = M, u = 0, t = i = r; t; t = xr(t)) u++;
              for (t = 0, o = l; o; o = xr(o)) t++;
              for (; 0 < u - t; ) (i = xr(i)), u--;
              for (; 0 < t - u; ) (l = xr(l)), t--;
              for (; u--; ) {
                if (i === l || i === l.alternate) break t;
                (i = xr(i)), (l = xr(l));
              }
              i = null;
            }
          else i = null;
          for (l = i, i = []; r && r !== l && (null === (u = r.alternate) || u !== l); ) i.push(r), (r = xr(r));
          for (r = []; M && M !== l && (null === (u = M.alternate) || u !== l); ) r.push(M), (M = xr(M));
          for (M = 0; M < i.length; M++) hr(i[M], "bubbled", n);
          for (M = r.length; 0 < M--; ) hr(r[M], "captured", e);
          return 0 == (64 & a) ? [n] : [n, e];
        }
      };
    function I0(t, o) {
      return (t === o && (0 !== t || 1 / t == 1 / o)) || (t != t && o != o);
    }
    var N0 = "function" == typeof Object.is ? Object.is : I0,
      j0 = Object.prototype.hasOwnProperty;
    function L0(t, o) {
      if (!N0(t, o)) {
        if ("object" != typeof t || null === t || "object" != typeof o || null === o) return !1;
        var e = Object.keys(t),
          r = Object.keys(o);
        if (e.length !== r.length) return !1;
        for (r = 0; r < e.length; r++) if (!j0.call(o, e[r]) || !N0(t[e[r]], o[e[r]])) return !1;
      }
      return !0;
    }
    var C0 = it && "documentMode" in document && document.documentMode <= 11,
      y0 = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture"
          },
          dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
        }
      },
      f0 = null,
      T0 = null,
      m0 = null,
      v0 = !1;
    function E0(t, o) {
      var e = o.window === o ? o.document : 9 === o.nodeType ? o : o.ownerDocument;
      return v0 ||
        null == f0 ||
        f0 !== Pe(e) ||
        ((e =
          "selectionStart" in (e = f0) && qe(e)
            ? {
                start: e.selectionStart,
                end: e.selectionEnd
              }
            : {
                anchorNode: (e = ((e.ownerDocument && e.ownerDocument.defaultView) || window).getSelection()).anchorNode,
                anchorOffset: e.anchorOffset,
                focusNode: e.focusNode,
                focusOffset: e.focusOffset
              }),
        m0 && L0(m0, e))
        ? null
        : ((m0 = e), ((t = l.getPooled(y0.select, T0, t, o)).type = "select"), (t.target = f0), Nr(t), t);
    }
    var b0 = {
        eventTypes: y0,
        extractEvents: function (t, o, e, r, a, i) {
          if (!(i = !(a = i || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
            t: {
              (a = So(a)), (i = rt.onSelect);
              for (var n = 0; n < i.length; n++)
                if (!a.has(i[n])) {
                  a = !1;
                  break t;
                }
              a = !0;
            }
            i = !a;
          }
          if (!i)
            switch (((a = o ? sr(o) : window), t)) {
              case "focus":
                (!Fr(a) && "true" !== a.contentEditable) || ((f0 = a), (T0 = o), (m0 = null));
                break;

              case "blur":
                m0 = T0 = f0 = null;
                break;

              case "mousedown":
                v0 = !0;
                break;

              case "contextmenu":
              case "mouseup":
              case "dragend":
                return (v0 = !1), E0(e, r);

              case "selectionchange":
                if (C0) break;

              case "keydown":
              case "keyup":
                return E0(e, r);
            }
          return null;
        }
      },
      z0 = l.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      S0 = l.extend({
        clipboardData: function (t) {
          return ("clipboardData" in t ? t : window).clipboardData;
        }
      }),
      k0 = M0.extend({
        relatedTarget: null
      });
    function O0(t) {
      var o = t.keyCode;
      return "charCode" in t ? 0 === (t = t.charCode) && 13 === o && (t = 13) : (t = o), 32 <= (t = 10 === t ? 13 : t) || 13 === t ? t : 0;
    }
    var Y0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      },
      B0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      },
      _0 = M0.extend({
        key: function (t) {
          if (t.key) {
            var o = Y0[t.key] || t.key;
            if ("Unidentified" !== o) return o;
          }
          return "keypress" === t.type
            ? 13 === (t = O0(t))
              ? "Enter"
              : String.fromCharCode(t)
            : "keydown" === t.type || "keyup" === t.type
            ? B0[t.keyCode] || "Unidentified"
            : "";
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: c0,
        charCode: function (t) {
          return "keypress" === t.type ? O0(t) : 0;
        },
        keyCode: function (t) {
          return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0;
        },
        which: function (t) {
          return "keypress" === t.type ? O0(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0;
        }
      }),
      U0 = w0.extend({
        dataTransfer: null
      }),
      Q0 = M0.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: c0
      }),
      Z0 = l.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      H0 = w0.extend({
        deltaX: function (t) {
          return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
        },
        deltaY: function (t) {
          return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
        },
        deltaZ: null,
        deltaMode: null
      }),
      G0 = {
        eventTypes: Ie,
        extractEvents: function (t, o, e, r) {
          var a = Ne.get(t);
          if (!a) return null;
          switch (t) {
            case "keypress":
              if (0 === O0(e)) return null;

            case "keydown":
            case "keyup":
              t = _0;
              break;

            case "blur":
            case "focus":
              t = k0;
              break;

            case "click":
              if (2 === e.button) return null;

            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              t = w0;
              break;

            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              t = U0;
              break;

            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              t = Q0;
              break;

            case To:
            case mo:
            case vo:
              t = z0;
              break;

            case Eo:
              t = Z0;
              break;

            case "scroll":
              t = M0;
              break;

            case "wheel":
              t = H0;
              break;

            case "copy":
            case "cut":
            case "paste":
              t = S0;
              break;

            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              t = D0;
              break;

            default:
              t = l;
          }
          return Nr((o = t.getPooled(a, o, e, r))), o;
        }
      };
    if (X) throw Error(y(101));
    (X = Array.prototype.slice.call(
      "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")
    )),
      K();
    var F = Ar,
      R = dr,
      V = sr,
      P0 =
        (at({
          SimpleEventPlugin: G0,
          EnterLeaveEventPlugin: h0,
          ChangeEventPlugin: l0,
          SelectEventPlugin: b0,
          BeforeInputEventPlugin: a
        }),
        []),
      W0 = -1;
    function c(t) {
      W0 < 0 || ((t.current = P0[W0]), (P0[W0] = null), W0--);
    }
    function d(t, o) {
      (P0[++W0] = t.current), (t.current = o);
    }
    var F0 = {},
      s = {
        current: F0
      },
      A = {
        current: !1
      },
      R0 = F0;
    function V0(t, o) {
      var e = t.type.contextTypes;
      if (!e) return F0;
      var r = t.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === o) return r.__reactInternalMemoizedMaskedChildContext;
      var a,
        i = {};
      for (a in e) i[a] = o[a];
      return (
        r && (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = o), (t.__reactInternalMemoizedMaskedChildContext = i)), i
      );
    }
    function x(t) {
      return null != (t = t.childContextTypes);
    }
    function q0() {
      c(A), c(s);
    }
    function X0(t, o, e) {
      if (s.current !== F0) throw Error(y(168));
      d(s, o), d(A, e);
    }
    function J0(t, o, e) {
      var r,
        a = t.stateNode;
      if (((t = o.childContextTypes), "function" != typeof a.getChildContext)) return e;
      for (r in (a = a.getChildContext())) if (!(r in t)) throw Error(y(108, Vt(o) || "Unknown", r));
      return D({}, e, {}, a);
    }
    function K0(t) {
      return (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || F0), (R0 = s.current), d(s, t), d(A, A.current), !0;
    }
    function $0(t, o, e) {
      var r = t.stateNode;
      if (!r) throw Error(y(169));
      e ? ((t = J0(t, o, R0)), (r.__reactInternalMemoizedMergedChildContext = t), c(A), c(s), d(s, t)) : c(A), d(A, e);
    }
    var t1 = r.unstable_runWithPriority,
      o1 = r.unstable_scheduleCallback,
      e1 = r.unstable_cancelCallback,
      G0 = r.unstable_requestPaint,
      r1 = r.unstable_now,
      a1 = r.unstable_getCurrentPriorityLevel,
      i1 = r.unstable_ImmediatePriority,
      n1 = r.unstable_UserBlockingPriority,
      l1 = r.unstable_NormalPriority,
      M1 = r.unstable_LowPriority,
      g1 = r.unstable_IdlePriority,
      u1 = {},
      c1 = r.unstable_shouldYield,
      d1 = void 0 !== G0 ? G0 : function () {},
      s1 = null,
      A1 = null,
      x1 = !1,
      w1 = r1(),
      w =
        w1 < 1e4
          ? r1
          : function () {
              return r1() - w1;
            };
    function D1() {
      switch (a1()) {
        case i1:
          return 99;

        case n1:
          return 98;

        case l1:
          return 97;

        case M1:
          return 96;

        case g1:
          return 95;

        default:
          throw Error(y(332));
      }
    }
    function p1(t) {
      switch (t) {
        case 99:
          return i1;

        case 98:
          return n1;

        case 97:
          return l1;

        case 96:
          return M1;

        case 95:
          return g1;

        default:
          throw Error(y(332));
      }
    }
    function h1(t, o) {
      return (t = p1(t)), t1(t, o);
    }
    function I1(t, o, e) {
      return (t = p1(t)), o1(t, o, e);
    }
    function N1(t) {
      return null === s1 ? ((s1 = [t]), (A1 = o1(i1, j1))) : s1.push(t), u1;
    }
    function f() {
      var t;
      null !== A1 && ((t = A1), (A1 = null), e1(t)), j1();
    }
    function j1() {
      if (!x1 && null !== s1) {
        x1 = !0;
        var o = 0;
        try {
          var e = s1;
          h1(99, function () {
            for (; o < e.length; o++) for (var t = e[o]; null !== (t = t(!0)); );
          }),
            (s1 = null);
        } catch (t) {
          throw (null !== s1 && (s1 = s1.slice(o + 1)), o1(i1, f), t);
        } finally {
          x1 = !1;
        }
      }
    }
    function L1(t, o, e) {
      return 1073741821 - (1 + (((1073741821 - t + o / 10) / (e /= 10)) | 0)) * e;
    }
    function p(t, o) {
      if (t && t.defaultProps) for (var e in ((o = D({}, o)), (t = t.defaultProps))) void 0 === o[e] && (o[e] = t[e]);
      return o;
    }
    var C1 = {
        current: null
      },
      y1 = null,
      f1 = null,
      T1 = null;
    function m1() {
      T1 = f1 = y1 = null;
    }
    function v1(t) {
      var o = C1.current;
      c(C1), (t.type._context._currentValue = o);
    }
    function E1(t, o) {
      for (; null !== t; ) {
        var e = t.alternate;
        if (t.childExpirationTime < o) (t.childExpirationTime = o), null !== e && e.childExpirationTime < o && (e.childExpirationTime = o);
        else {
          if (!(null !== e && e.childExpirationTime < o)) break;
          e.childExpirationTime = o;
        }
        t = t.return;
      }
    }
    function b1(t, o) {
      (T1 = f1 = null) !== (t = (y1 = t).dependencies) &&
        null !== t.firstContext &&
        (t.expirationTime >= o && (Ja = !0), (t.firstContext = null));
    }
    function h(t, o) {
      if (T1 !== t && !1 !== o && 0 !== o)
        if (
          (("number" == typeof o && 1073741823 !== o) || ((T1 = t), (o = 1073741823)),
          (o = {
            context: t,
            observedBits: o,
            next: null
          }),
          null === f1)
        ) {
          if (null === y1) throw Error(y(308));
          (f1 = o),
            (y1.dependencies = {
              expirationTime: 0,
              firstContext: o,
              responders: null
            });
        } else f1 = f1.next = o;
      return t._currentValue;
    }
    var z1 = !1;
    function S1(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        baseQueue: null,
        shared: {
          pending: null
        },
        effects: null
      };
    }
    function k1(t, o) {
      (t = t.updateQueue),
        o.updateQueue === t &&
          (o.updateQueue = {
            baseState: t.baseState,
            baseQueue: t.baseQueue,
            shared: t.shared,
            effects: t.effects
          });
    }
    function O1(t, o) {
      return ((t = {
        expirationTime: t,
        suspenseConfig: o,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      }).next = t);
    }
    function Y1(t, o) {
      var e;
      null !== (t = t.updateQueue) &&
        (null === (e = (t = t.shared).pending) ? (o.next = o) : ((o.next = e.next), (e.next = o)), (t.pending = o));
    }
    function B1(t, o) {
      var e = t.alternate;
      null !== e && k1(e, t),
        null === (e = (t = t.updateQueue).baseQueue) ? ((t.baseQueue = o.next = o).next = o) : ((o.next = e.next), (e.next = o));
    }
    function _1(t, o, e, r) {
      var a = t.updateQueue,
        i = ((z1 = !1), a.baseQueue);
      if (
        (null !== (w = a.shared.pending) &&
          (null !== i && ((n = i.next), (i.next = w.next), (w.next = n)), (i = w), (a.shared.pending = null) !== (n = t.alternate)) &&
          null !== (n = n.updateQueue) &&
          (n.baseQueue = w),
        null !== i)
      ) {
        var n = i.next,
          l = a.baseState,
          M = 0,
          g = null,
          u = null,
          c = null;
        if (null !== n)
          for (var d = n; ; ) {
            if ((w = d.expirationTime) < r) {
              var s = {
                expirationTime: d.expirationTime,
                suspenseConfig: d.suspenseConfig,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null
              };
              null === c ? ((u = c = s), (g = l)) : (c = c.next = s), M < w && (M = w);
            } else {
              null !== c &&
                (c = c.next =
                  {
                    expirationTime: 1073741823,
                    suspenseConfig: d.suspenseConfig,
                    tag: d.tag,
                    payload: d.payload,
                    callback: d.callback,
                    next: null
                  }),
                vn(w, d.suspenseConfig);
              t: {
                var A = t,
                  x = d,
                  w = o,
                  s = e;
                switch (x.tag) {
                  case 1:
                    if ("function" == typeof (A = x.payload)) {
                      l = A.call(s, l, w);
                      break t;
                    }
                    l = A;
                    break t;

                  case 3:
                    A.effectTag = (-4097 & A.effectTag) | 64;

                  case 0:
                    if (null == (w = "function" == typeof (A = x.payload) ? A.call(s, l, w) : A)) break t;
                    l = D({}, l, w);
                    break t;

                  case 2:
                    z1 = !0;
                }
              }
              null !== d.callback && ((t.effectTag |= 32), null === (w = a.effects) ? (a.effects = [d]) : w.push(d));
            }
            if (null === (d = d.next) || d === n) {
              if (null === (w = a.shared.pending)) break;
              (d = i.next = w.next), (w.next = n), (a.baseQueue = i = w), (a.shared.pending = null);
            }
          }
        null === c ? (g = l) : (c.next = u), (a.baseState = g), (a.baseQueue = c), En(M), (t.expirationTime = M), (t.memoizedState = l);
      }
    }
    function U1(t, o, e) {
      if (((t = o.effects), (o.effects = null) !== t))
        for (o = 0; o < t.length; o++) {
          var r = t[o],
            a = r.callback;
          if (null !== a) {
            if (((r.callback = null), (r = a), (a = e), "function" != typeof r)) throw Error(y(191, r));
            r.call(a);
          }
        }
    }
    var Q1 = o.ReactCurrentBatchConfig,
      Z1 = new B.Component().refs;
    function H1(t, o, e, r) {
      (e = null == (e = e(r, (o = t.memoizedState))) ? o : D({}, o, e)),
        (t.memoizedState = e),
        0 === t.expirationTime && (t.updateQueue.baseState = e);
    }
    var G1 = {
      isMounted: function (t) {
        return !!(t = t._reactInternalFiber) && ko(t) === t;
      },
      enqueueSetState: function (t, o, e) {
        t = t._reactInternalFiber;
        var r = wn(),
          a = Q1.suspense;
        ((a = O1((r = Dn(r, t, a)), a)).payload = o), null != e && (a.callback = e), Y1(t, a), pn(t, r);
      },
      enqueueReplaceState: function (t, o, e) {
        t = t._reactInternalFiber;
        var r = wn(),
          a = Q1.suspense;
        ((a = O1((r = Dn(r, t, a)), a)).tag = 1), (a.payload = o), null != e && (a.callback = e), Y1(t, a), pn(t, r);
      },
      enqueueForceUpdate: function (t, o) {
        t = t._reactInternalFiber;
        var e = wn(),
          r = Q1.suspense;
        ((r = O1((e = Dn(e, t, r)), r)).tag = 2), null != o && (r.callback = o), Y1(t, r), pn(t, e);
      }
    };
    function P1(t, o, e, r, a, i, n) {
      return "function" == typeof (t = t.stateNode).shouldComponentUpdate
        ? t.shouldComponentUpdate(r, i, n)
        : !(o.prototype && o.prototype.isPureReactComponent && L0(e, r) && L0(a, i));
    }
    function W1(t, o, e) {
      var r = !1,
        a = F0,
        i = o.contextType;
      return (
        (o = new o(
          e,
          (i =
            "object" == typeof i && null !== i ? h(i) : ((a = x(o) ? R0 : s.current), (r = null != (r = o.contextTypes)) ? V0(t, a) : F0))
        )),
        (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
        (o.updater = G1),
        ((t.stateNode = o)._reactInternalFiber = t),
        r && (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = a), (t.__reactInternalMemoizedMaskedChildContext = i)),
        o
      );
    }
    function F1(t, o, e, r) {
      (t = o.state),
        "function" == typeof o.componentWillReceiveProps && o.componentWillReceiveProps(e, r),
        "function" == typeof o.UNSAFE_componentWillReceiveProps && o.UNSAFE_componentWillReceiveProps(e, r),
        o.state !== t && G1.enqueueReplaceState(o, o.state, null);
    }
    function R1(t, o, e, r) {
      var a = t.stateNode,
        i = ((a.props = e), (a.state = t.memoizedState), (a.refs = Z1), S1(t), o.contextType);
      "object" == typeof i && null !== i ? (a.context = h(i)) : ((i = x(o) ? R0 : s.current), (a.context = V0(t, i))),
        _1(t, e, a, r),
        (a.state = t.memoizedState),
        "function" == typeof (i = o.getDerivedStateFromProps) && (H1(t, o, i, e), (a.state = t.memoizedState)),
        "function" == typeof o.getDerivedStateFromProps ||
          "function" == typeof a.getSnapshotBeforeUpdate ||
          ("function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount) ||
          ((o = a.state),
          "function" == typeof a.componentWillMount && a.componentWillMount(),
          "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
          o !== a.state && G1.enqueueReplaceState(a, a.state, null),
          _1(t, e, a, r),
          (a.state = t.memoizedState)),
        "function" == typeof a.componentDidMount && (t.effectTag |= 4);
    }
    var V1 = Array.isArray;
    function q1(t, o, e) {
      if (null !== (t = e.ref) && "function" != typeof t && "object" != typeof t) {
        if (e._owner) {
          if ((e = e._owner)) {
            if (1 !== e.tag) throw Error(y(309));
            var r = e.stateNode;
          }
          var a;
          if (r)
            return (
              (a = "" + t),
              null !== o && null !== o.ref && "function" == typeof o.ref && o.ref._stringRef === a
                ? o.ref
                : (((o = function (t) {
                    var o = r.refs;
                    o === Z1 && (o = r.refs = {}), null === t ? delete o[a] : (o[a] = t);
                  })._stringRef = a),
                  o)
            );
          throw Error(y(147, t));
        }
        if ("string" != typeof t) throw Error(y(284));
        if (!e._owner) throw Error(y(290, t));
      }
      return t;
    }
    function X1(t, o) {
      if ("textarea" !== t.type)
        throw Error(
          y(31, "[object Object]" === Object.prototype.toString.call(o) ? "object with keys {" + Object.keys(o).join(", ") + "}" : o, "")
        );
    }
    function J1(c) {
      function d(t, o) {
        var e;
        c &&
          (null !== (e = t.lastEffect) ? ((e.nextEffect = o), (t.lastEffect = o)) : (t.firstEffect = t.lastEffect = o),
          (o.nextEffect = null),
          (o.effectTag = 8));
      }
      function s(t, o) {
        if (c) for (; null !== o; ) d(t, o), (o = o.sibling);
        return null;
      }
      function A(t, o) {
        for (t = new Map(); null !== o; ) null !== o.key ? t.set(o.key, o) : t.set(o.index, o), (o = o.sibling);
        return t;
      }
      function n(t, o) {
        return ((t = $n(t, o)).index = 0), (t.sibling = null), t;
      }
      function x(t, o, e) {
        if (((t.index = e), c)) {
          if (null !== (e = t.alternate)) return (e = e.index) < o ? ((t.effectTag = 2), o) : e;
          t.effectTag = 2;
        }
        return o;
      }
      function l(t) {
        return c && null === t.alternate && (t.effectTag = 2), t;
      }
      function i(t, o, e, r) {
        return null === o || 6 !== o.tag ? ((o = el(e, t.mode, r)).return = t) : ((o = n(o, e)).return = t), o;
      }
      function M(t, o, e, r) {
        return (
          null !== o && o.elementType === e.type
            ? (((r = n(o, e.props)).ref = q1(t, o, e)), (r.return = t))
            : (((r = tl(e.type, e.key, e.props, null, t.mode, r)).ref = q1(t, o, e)), (r.return = t)),
          r
        );
      }
      function g(t, o, e, r) {
        return (
          null === o || 4 !== o.tag || o.stateNode.containerInfo !== e.containerInfo || o.stateNode.implementation !== e.implementation
            ? ((o = rl(e, t.mode, r)).return = t)
            : ((o = n(o, e.children || [])).return = t),
          o
        );
      }
      function u(t, o, e, r, a) {
        return null === o || 7 !== o.tag ? ((o = ol(e, t.mode, r, a)).return = t) : ((o = n(o, e)).return = t), o;
      }
      function w(t, o, e) {
        if ("string" == typeof o || "number" == typeof o) return ((o = el("" + o, t.mode, e)).return = t), o;
        if ("object" == typeof o && null !== o) {
          switch (o.$$typeof) {
            case bt:
              return ((e = tl(o.type, o.key, o.props, null, t.mode, e)).ref = q1(t, null, o)), (e.return = t), e;

            case zt:
              return ((o = rl(o, t.mode, e)).return = t), o;
          }
          if (V1(o) || Ft(o)) return ((o = ol(o, t.mode, e, null)).return = t), o;
          X1(t, o);
        }
        return null;
      }
      function D(t, o, e, r) {
        var a = null !== o ? o.key : null;
        if ("string" == typeof e || "number" == typeof e) return null !== a ? null : i(t, o, "" + e, r);
        if ("object" == typeof e && null !== e) {
          switch (e.$$typeof) {
            case bt:
              return e.key === a ? (e.type === St ? u(t, o, e.props.children, r, a) : M(t, o, e, r)) : null;

            case zt:
              return e.key === a ? g(t, o, e, r) : null;
          }
          if (V1(e) || Ft(e)) return null !== a ? null : u(t, o, e, r, null);
          X1(t, e);
        }
        return null;
      }
      function p(t, o, e, r, a) {
        if ("string" == typeof r || "number" == typeof r) return i(o, (t = t.get(e) || null), "" + r, a);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case bt:
              return (t = t.get(null === r.key ? e : r.key) || null), r.type === St ? u(o, t, r.props.children, a, r.key) : M(o, t, r, a);

            case zt:
              return g(o, (t = t.get(null === r.key ? e : r.key) || null), r, a);
          }
          if (V1(r) || Ft(r)) return u(o, (t = t.get(e) || null), r, a, null);
          X1(o, r);
        }
        return null;
      }
      function h(o, t, e, r) {
        for (var a = null, i = null, n = t, l = (t = 0), M = null; null !== n && l < e.length; l++) {
          n.index > l ? ((M = n), (n = null)) : (M = n.sibling);
          var g = D(o, n, e[l], r);
          if (null === g) {
            null === n && (n = M);
            break;
          }
          c && n && null === g.alternate && d(o, n), (t = x(g, t, l)), null === i ? (a = g) : (i.sibling = g), (i = g), (n = M);
        }
        if (l === e.length) s(o, n);
        else if (null === n)
          for (; l < e.length; l++) null !== (n = w(o, e[l], r)) && ((t = x(n, t, l)), null === i ? (a = n) : (i.sibling = n), (i = n));
        else {
          for (n = A(o, n); l < e.length; l++)
            null !== (M = p(n, o, l, e[l], r)) &&
              (c && null !== M.alternate && n.delete(null === M.key ? l : M.key),
              (t = x(M, t, l)),
              null === i ? (a = M) : (i.sibling = M),
              (i = M));
          c &&
            n.forEach(function (t) {
              return d(o, t);
            });
        }
        return a;
      }
      function I(o, t, e, r) {
        var a = Ft(e);
        if ("function" != typeof a) throw Error(y(150));
        if (null == (e = a.call(e))) throw Error(y(151));
        for (var i = (a = null), n = t, l = (t = 0), M = null, g = e.next(); null !== n && !g.done; l++, g = e.next()) {
          n.index > l ? ((M = n), (n = null)) : (M = n.sibling);
          var u = D(o, n, g.value, r);
          if (null === u) {
            null === n && (n = M);
            break;
          }
          c && n && null === u.alternate && d(o, n), (t = x(u, t, l)), null === i ? (a = u) : (i.sibling = u), (i = u), (n = M);
        }
        if (g.done) s(o, n);
        else if (null === n)
          for (; !g.done; l++, g = e.next())
            null !== (g = w(o, g.value, r)) && ((t = x(g, t, l)), null === i ? (a = g) : (i.sibling = g), (i = g));
        else {
          for (n = A(o, n); !g.done; l++, g = e.next())
            null !== (g = p(n, o, l, g.value, r)) &&
              (c && null !== g.alternate && n.delete(null === g.key ? l : g.key),
              (t = x(g, t, l)),
              null === i ? (a = g) : (i.sibling = g),
              (i = g));
          c &&
            n.forEach(function (t) {
              return d(o, t);
            });
        }
        return a;
      }
      return function (t, o, e, r) {
        var a = "object" == typeof e && null !== e && e.type === St && null === e.key,
          i = "object" == typeof (e = a ? e.props.children : e) && null !== e;
        if (i)
          switch (e.$$typeof) {
            case bt:
              t: {
                for (i = e.key, a = o; null !== a; ) {
                  if (a.key === i) {
                    switch (a.tag) {
                      case 7:
                        if (e.type !== St) break;
                        s(t, a.sibling), ((o = n(a, e.props.children)).return = t), (t = o);
                        break t;

                      default:
                        if (a.elementType === e.type) {
                          s(t, a.sibling), ((o = n(a, e.props)).ref = q1(t, a, e)), (o.return = t), (t = o);
                          break t;
                        }
                    }
                    s(t, a);
                    break;
                  }
                  d(t, a), (a = a.sibling);
                }
                t =
                  e.type === St
                    ? (((o = ol(e.props.children, t.mode, r, e.key)).return = t), o)
                    : (((r = tl(e.type, e.key, e.props, null, t.mode, r)).ref = q1(t, o, e)), (r.return = t), r);
              }
              return l(t);

            case zt:
              t: {
                for (a = e.key; null !== o; ) {
                  if (o.key === a) {
                    if (4 === o.tag && o.stateNode.containerInfo === e.containerInfo && o.stateNode.implementation === e.implementation) {
                      s(t, o.sibling), ((o = n(o, e.children || [])).return = t), (t = o);
                      break t;
                    }
                    s(t, o);
                    break;
                  }
                  d(t, o), (o = o.sibling);
                }
                ((o = rl(e, t.mode, r)).return = t), (t = o);
              }
              return l(t);
          }
        if ("string" == typeof e || "number" == typeof e)
          return (
            (e = "" + e),
            ((o = null !== o && 6 === o.tag ? (s(t, o.sibling), n(o, e)) : (s(t, o), el(e, t.mode, r))).return = t),
            l((t = o))
          );
        if (V1(e)) return h(t, o, e, r);
        if (Ft(e)) return I(t, o, e, r);
        if ((i && X1(t, e), void 0 === e && !a))
          switch (t.tag) {
            case 1:
            case 0:
              throw ((t = t.type), Error(y(152, t.displayName || t.name || "Component")));
          }
        return s(t, o);
      };
    }
    var K1 = J1(!0),
      $1 = J1(!1),
      ta = {},
      oa = {
        current: ta
      },
      ea = {
        current: ta
      },
      ra = {
        current: ta
      };
    function aa(t) {
      if (t === ta) throw Error(y(174));
      return t;
    }
    function ia(t, o) {
      switch ((d(ra, o), d(ea, t), d(oa, ta), (t = o.nodeType))) {
        case 9:
        case 11:
          o = (o = o.documentElement) ? o.namespaceURI : Do(null, "");
          break;

        default:
          o = Do((o = (t = 8 === t ? o.parentNode : o).namespaceURI || null), (t = t.tagName));
      }
      c(oa), d(oa, o);
    }
    function na() {
      c(oa), c(ea), c(ra);
    }
    function la(t) {
      aa(ra.current);
      var o = aa(oa.current),
        e = Do(o, t.type);
      o !== e && (d(ea, t), d(oa, e));
    }
    function Ma(t) {
      ea.current === t && (c(oa), c(ea));
    }
    var j = {
      current: 0
    };
    function ga(t) {
      for (var o = t; null !== o; ) {
        if (13 === o.tag) {
          var e = o.memoizedState;
          if (null !== e && (null === (e = e.dehydrated) || e.data === Ke || e.data === $e)) return o;
        } else if (19 === o.tag && void 0 !== o.memoizedProps.revealOrder) {
          if (0 != (64 & o.effectTag)) return o;
        } else if (null !== o.child) {
          o = (o.child.return = o).child;
          continue;
        }
        if (o === t) break;
        for (; null === o.sibling; ) {
          if (null === o.return || o.return === t) return null;
          o = o.return;
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
      return null;
    }
    function ua(t, o) {
      return {
        responder: t,
        props: o
      };
    }
    var ca = o.ReactCurrentDispatcher,
      M = o.ReactCurrentBatchConfig,
      da = 0,
      L = null,
      C = null,
      T = null,
      sa = !1;
    function g() {
      throw Error(y(321));
    }
    function Aa(t, o) {
      if (null === o) return !1;
      for (var e = 0; e < o.length && e < t.length; e++) if (!N0(t[e], o[e])) return !1;
      return !0;
    }
    function xa(t, o, e, r, a, i) {
      if (
        ((da = i),
        ((L = o).memoizedState = null),
        (o.updateQueue = null),
        (o.expirationTime = 0),
        (ca.current = null === t || null === t.memoizedState ? _a : Ua),
        (t = e(r, a)),
        o.expirationTime === da)
      ) {
        i = 0;
        do {
          if (((o.expirationTime = 0), !(i < 25))) throw Error(y(301));
        } while (((i += 1), (T = C = null), (o.updateQueue = null), (ca.current = Qa), (t = e(r, a)), o.expirationTime === da));
      }
      if (((ca.current = Ba), (o = null !== C && null !== C.next), (da = 0), (T = C = L = null), (sa = !1), o)) throw Error(y(300));
      return t;
    }
    function wa() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return null === T ? (L.memoizedState = T = t) : (T = T.next = t), T;
    }
    function Da() {
      t = null === C ? (null !== (t = L.alternate) ? t.memoizedState : null) : C.next;
      var t,
        o = null === T ? L.memoizedState : T.next;
      if (null !== o) (T = o), (C = t);
      else {
        if (null === t) throw Error(y(310));
        (t = {
          memoizedState: (C = t).memoizedState,
          baseState: C.baseState,
          baseQueue: C.baseQueue,
          queue: C.queue,
          next: null
        }),
          null === T ? (L.memoizedState = T = t) : (T = T.next = t);
      }
      return T;
    }
    function pa(t, o) {
      return "function" == typeof o ? o(t) : o;
    }
    function ha(t) {
      var o = Da(),
        e = o.queue;
      if (null === e) throw Error(y(311));
      e.lastRenderedReducer = t;
      var r,
        a = (n = C).baseQueue,
        i = e.pending;
      if (
        (null !== i && (null !== a && ((r = a.next), (a.next = i.next), (i.next = r)), (n.baseQueue = a = i), (e.pending = null)),
        null !== a)
      ) {
        var a = a.next,
          n = n.baseState,
          l = (r = i = null),
          M = a;
        do {
          var g,
            u = M.expirationTime;
        } while (
          (u < da
            ? ((g = {
                expirationTime: M.expirationTime,
                suspenseConfig: M.suspenseConfig,
                action: M.action,
                eagerReducer: M.eagerReducer,
                eagerState: M.eagerState,
                next: null
              }),
              null === l ? ((r = l = g), (i = n)) : (l = l.next = g),
              u > L.expirationTime && En((L.expirationTime = u)))
            : (null !== l &&
                (l = l.next =
                  {
                    expirationTime: 1073741823,
                    suspenseConfig: M.suspenseConfig,
                    action: M.action,
                    eagerReducer: M.eagerReducer,
                    eagerState: M.eagerState,
                    next: null
                  }),
              vn(u, M.suspenseConfig),
              (n = M.eagerReducer === t ? M.eagerState : t(n, M.action))),
          null !== (M = M.next) && M !== a)
        );
        null === l ? (i = n) : (l.next = r),
          N0(n, o.memoizedState) || (Ja = !0),
          (o.memoizedState = n),
          (o.baseState = i),
          (o.baseQueue = l),
          (e.lastRenderedState = n);
      }
      return [o.memoizedState, e.dispatch];
    }
    function Ia(t) {
      var o = Da(),
        e = o.queue;
      if (null === e) throw Error(y(311));
      e.lastRenderedReducer = t;
      var r = e.dispatch,
        a = e.pending,
        i = o.memoizedState;
      if (null !== a) {
        e.pending = null;
        for (var n = (a = a.next); (i = t(i, n.action)), (n = n.next) !== a; );
        N0(i, o.memoizedState) || (Ja = !0), (o.memoizedState = i), null === o.baseQueue && (o.baseState = i), (e.lastRenderedState = i);
      }
      return [i, r];
    }
    function Na(t) {
      var o = wa();
      return (
        "function" == typeof t && (t = t()),
        (o.memoizedState = o.baseState = t),
        (t = (t = o.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: pa,
            lastRenderedState: t
          }).dispatch =
          Ya.bind(null, L, t)),
        [o.memoizedState, t]
      );
    }
    function ja(t, o, e, r) {
      return (
        (t = {
          tag: t,
          create: o,
          destroy: e,
          deps: r,
          next: null
        }),
        null === (o = L.updateQueue)
          ? ((L.updateQueue = o =
              {
                lastEffect: null
              }).lastEffect = t.next =
              t)
          : null === (e = o.lastEffect)
          ? (o.lastEffect = t.next = t)
          : ((r = e.next), ((e.next = t).next = r), (o.lastEffect = t)),
        t
      );
    }
    function La() {
      return Da().memoizedState;
    }
    function Ca(t, o, e, r) {
      var a = wa();
      (L.effectTag |= t), (a.memoizedState = ja(1 | o, e, void 0, void 0 === r ? null : r));
    }
    function ya(t, o, e, r) {
      var a = Da(),
        i = ((r = void 0 === r ? null : r), void 0);
      if (null !== C) {
        var n = C.memoizedState,
          i = n.destroy;
        if (null !== r && Aa(r, n.deps)) return void ja(o, e, i, r);
      }
      (L.effectTag |= t), (a.memoizedState = ja(1 | o, e, i, r));
    }
    function fa(t, o) {
      return Ca(516, 4, t, o);
    }
    function Ta(t, o) {
      return ya(516, 4, t, o);
    }
    function ma(t, o) {
      return ya(4, 2, t, o);
    }
    function va(t, o) {
      return "function" == typeof o
        ? ((t = t()),
          o(t),
          function () {
            o(null);
          })
        : null != o
        ? ((t = t()),
          (o.current = t),
          function () {
            o.current = null;
          })
        : void 0;
    }
    function Ea(t, o, e) {
      return (e = null != e ? e.concat([t]) : null), ya(4, 2, va.bind(null, o, t), e);
    }
    function ba() {}
    function za(t, o) {
      return (wa().memoizedState = [t, void 0 === o ? null : o]), t;
    }
    function Sa(t, o) {
      var e = Da(),
        r = ((o = void 0 === o ? null : o), e.memoizedState);
      return null !== r && null !== o && Aa(o, r[1]) ? r[0] : ((e.memoizedState = [t, o]), t);
    }
    function ka(t, o) {
      var e = Da(),
        r = ((o = void 0 === o ? null : o), e.memoizedState);
      return null !== r && null !== o && Aa(o, r[1]) ? r[0] : ((t = t()), (e.memoizedState = [t, o]), t);
    }
    function Oa(o, e, r) {
      var t = D1();
      h1(t < 98 ? 98 : t, function () {
        o(!0);
      }),
        h1(97 < t ? 97 : t, function () {
          var t = M.suspense;
          M.suspense = void 0 === e ? null : e;
          try {
            o(!1), r();
          } finally {
            M.suspense = t;
          }
        });
    }
    function Ya(t, o, e) {
      var r = wn(),
        a = {
          expirationTime: (r = Dn(r, t, (a = Q1.suspense))),
          suspenseConfig: a,
          action: e,
          eagerReducer: null,
          eagerState: null,
          next: null
        },
        i = o.pending;
      if (
        (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
        (o.pending = a),
        (i = t.alternate),
        t === L || (null !== i && i === L))
      )
        (sa = !0), (a.expirationTime = da), (L.expirationTime = da);
      else {
        if (0 === t.expirationTime && (null === i || 0 === i.expirationTime) && null !== (i = o.lastRenderedReducer))
          try {
            var n = o.lastRenderedState,
              l = i(n, e);
            if (((a.eagerReducer = i), (a.eagerState = l), N0(l, n))) return;
          } catch (t) {}
        pn(t, r);
      }
    }
    var Ba = {
        readContext: h,
        useCallback: g,
        useContext: g,
        useEffect: g,
        useImperativeHandle: g,
        useLayoutEffect: g,
        useMemo: g,
        useReducer: g,
        useRef: g,
        useState: g,
        useDebugValue: g,
        useResponder: g,
        useDeferredValue: g,
        useTransition: g
      },
      _a = {
        readContext: h,
        useCallback: za,
        useContext: h,
        useEffect: fa,
        useImperativeHandle: function (t, o, e) {
          return (e = null != e ? e.concat([t]) : null), Ca(4, 2, va.bind(null, o, t), e);
        },
        useLayoutEffect: function (t, o) {
          return Ca(4, 2, t, o);
        },
        useMemo: function (t, o) {
          var e = wa();
          return (o = void 0 === o ? null : o), (t = t()), (e.memoizedState = [t, o]), t;
        },
        useReducer: function (t, o, e) {
          var r = wa();
          return (
            (o = void 0 !== e ? e(o) : o),
            (r.memoizedState = r.baseState = o),
            (t = (t = r.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: o
              }).dispatch =
              Ya.bind(null, L, t)),
            [r.memoizedState, t]
          );
        },
        useRef: function (t) {
          return (wa().memoizedState = t =
            {
              current: t
            });
        },
        useState: Na,
        useDebugValue: ba,
        useResponder: ua,
        useDeferredValue: function (o, e) {
          var t = Na(o),
            r = t[0],
            a = t[1];
          return (
            fa(
              function () {
                var t = M.suspense;
                M.suspense = void 0 === e ? null : e;
                try {
                  a(o);
                } finally {
                  M.suspense = t;
                }
              },
              [o, e]
            ),
            r
          );
        },
        useTransition: function (t) {
          var o = (e = Na(!1))[0],
            e = e[1];
          return [za(Oa.bind(null, e, t), [e, t]), o];
        }
      },
      Ua = {
        readContext: h,
        useCallback: Sa,
        useContext: h,
        useEffect: Ta,
        useImperativeHandle: Ea,
        useLayoutEffect: ma,
        useMemo: ka,
        useReducer: ha,
        useRef: La,
        useState: function () {
          return ha(pa);
        },
        useDebugValue: ba,
        useResponder: ua,
        useDeferredValue: function (o, e) {
          var t = ha(pa),
            r = t[0],
            a = t[1];
          return (
            Ta(
              function () {
                var t = M.suspense;
                M.suspense = void 0 === e ? null : e;
                try {
                  a(o);
                } finally {
                  M.suspense = t;
                }
              },
              [o, e]
            ),
            r
          );
        },
        useTransition: function (t) {
          var o = (e = ha(pa))[0],
            e = e[1];
          return [Sa(Oa.bind(null, e, t), [e, t]), o];
        }
      },
      Qa = {
        readContext: h,
        useCallback: Sa,
        useContext: h,
        useEffect: Ta,
        useImperativeHandle: Ea,
        useLayoutEffect: ma,
        useMemo: ka,
        useReducer: Ia,
        useRef: La,
        useState: function () {
          return Ia(pa);
        },
        useDebugValue: ba,
        useResponder: ua,
        useDeferredValue: function (o, e) {
          var t = Ia(pa),
            r = t[0],
            a = t[1];
          return (
            Ta(
              function () {
                var t = M.suspense;
                M.suspense = void 0 === e ? null : e;
                try {
                  a(o);
                } finally {
                  M.suspense = t;
                }
              },
              [o, e]
            ),
            r
          );
        },
        useTransition: function (t) {
          var o = (e = Ia(pa))[0],
            e = e[1];
          return [Sa(Oa.bind(null, e, t), [e, t]), o];
        }
      },
      Za = null,
      Ha = null,
      Ga = !1;
    function Pa(t, o) {
      var e = Xn(5, null, null, 0);
      (e.elementType = "DELETED"),
        (e.type = "DELETED"),
        (e.stateNode = o),
        (e.return = t),
        (e.effectTag = 8),
        null !== t.lastEffect ? ((t.lastEffect.nextEffect = e), (t.lastEffect = e)) : (t.firstEffect = t.lastEffect = e);
    }
    function Wa(t, o) {
      switch (t.tag) {
        case 5:
          var e = t.type;
          return null !== (o = 1 !== o.nodeType || e.toLowerCase() !== o.nodeName.toLowerCase() ? null : o) && ((t.stateNode = o), !0);

        case 6:
          return null !== (o = "" === t.pendingProps || 3 !== o.nodeType ? null : o) && ((t.stateNode = o), !0);

        default:
          return !1;
      }
    }
    function Fa(t) {
      if (Ga) {
        var o = Ha;
        if (o) {
          var e = o;
          if (!Wa(t, o)) {
            if (!(o = nr(e.nextSibling)) || !Wa(t, o)) return (t.effectTag = (-1025 & t.effectTag) | 2), (Ga = !1), void (Za = t);
            Pa(Za, e);
          }
          (Za = t), (Ha = nr(o.firstChild));
        } else (t.effectTag = (-1025 & t.effectTag) | 2), (Ga = !1), (Za = t);
      }
    }
    function Ra(t) {
      for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag; ) t = t.return;
      Za = t;
    }
    function Va(t) {
      if (t !== Za) return !1;
      if (!Ga) return Ra(t), !(Ga = !0);
      var o = t.type;
      if (5 !== t.tag || ("head" !== o && "body" !== o && !rr(o, t.memoizedProps))) for (o = Ha; o; ) Pa(t, o), (o = nr(o.nextSibling));
      if ((Ra(t), 13 === t.tag)) {
        if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(y(317));
        t: {
          for (t = t.nextSibling, o = 0; t; ) {
            if (8 === t.nodeType) {
              var e = t.data;
              if (e === Je) {
                if (0 === o) {
                  Ha = nr(t.nextSibling);
                  break t;
                }
                o--;
              } else (e !== Xe && e !== $e && e !== Ke) || o++;
            }
            t = t.nextSibling;
          }
          Ha = null;
        }
      } else Ha = Za ? nr(t.stateNode.nextSibling) : null;
      return !0;
    }
    function qa() {
      (Ha = Za = null), (Ga = !1);
    }
    var Xa = o.ReactCurrentOwner,
      Ja = !1;
    function I(t, o, e, r) {
      o.child = null === t ? $1(o, null, e, r) : K1(o, t.child, e, r);
    }
    function Ka(t, o, e, r, a) {
      e = e.render;
      var i = o.ref;
      return (
        b1(o, a),
        (r = xa(t, o, e, r, i, a)),
        null === t || Ja
          ? ((o.effectTag |= 1), I(t, o, r, a), o.child)
          : ((o.updateQueue = t.updateQueue), (o.effectTag &= -517), t.expirationTime <= a && (t.expirationTime = 0), ci(t, o, a))
      );
    }
    function $a(t, o, e, r, a, i) {
      var n;
      return null === t
        ? "function" != typeof (n = e.type) || Jn(n) || void 0 !== n.defaultProps || null !== e.compare || void 0 !== e.defaultProps
          ? (((t = tl(e.type, null, r, null, o.mode, i)).ref = o.ref), ((t.return = o).child = t))
          : ((o.tag = 15), (o.type = n), ti(t, o, n, r, a, i))
        : ((n = t.child),
          a < i && ((a = n.memoizedProps), (e = null !== (e = e.compare) ? e : L0)(a, r)) && t.ref === o.ref
            ? ci(t, o, i)
            : ((o.effectTag |= 1), ((t = $n(n, r)).ref = o.ref), ((t.return = o).child = t)));
    }
    function ti(t, o, e, r, a, i) {
      return null !== t && L0(t.memoizedProps, r) && t.ref === o.ref && ((Ja = !1), a < i)
        ? ((o.expirationTime = t.expirationTime), ci(t, o, i))
        : ei(t, o, e, r, i);
    }
    function oi(t, o) {
      var e = o.ref;
      ((null === t && null !== e) || (null !== t && t.ref !== e)) && (o.effectTag |= 128);
    }
    function ei(t, o, e, r, a) {
      var i = V0(o, (i = x(e) ? R0 : s.current));
      return (
        b1(o, a),
        (e = xa(t, o, e, r, i, a)),
        null === t || Ja
          ? ((o.effectTag |= 1), I(t, o, e, a), o.child)
          : ((o.updateQueue = t.updateQueue), (o.effectTag &= -517), t.expirationTime <= a && (t.expirationTime = 0), ci(t, o, a))
      );
    }
    function ri(t, o, e, r, a) {
      var i, n, l, M, g, u, c, d;
      return (
        x(e) ? ((i = !0), K0(o)) : (i = !1),
        b1(o, a),
        (r =
          null === o.stateNode
            ? (null !== t && ((t.alternate = null), (o.alternate = null), (o.effectTag |= 2)), W1(o, e, r), R1(o, e, r, a), !0)
            : null === t
            ? ((n = o.stateNode),
              (l = o.memoizedProps),
              (n.props = l),
              (M = n.context),
              (g = "object" == typeof (g = e.contextType) && null !== g ? h(g) : V0(o, (g = x(e) ? R0 : s.current))),
              (c = "function" == typeof (u = e.getDerivedStateFromProps) || "function" == typeof n.getSnapshotBeforeUpdate) ||
                ("function" != typeof n.UNSAFE_componentWillReceiveProps && "function" != typeof n.componentWillReceiveProps) ||
                (l === r && M === g) ||
                F1(o, n, r, g),
              (z1 = !1),
              (d = o.memoizedState),
              (n.state = d),
              _1(o, r, n, a),
              (M = o.memoizedState),
              l !== r || d !== M || A.current || z1
                ? ("function" == typeof u && (H1(o, e, u, r), (M = o.memoizedState)),
                  (l = z1 || P1(o, e, l, r, d, M, g))
                    ? (c ||
                        ("function" != typeof n.UNSAFE_componentWillMount && "function" != typeof n.componentWillMount) ||
                        ("function" == typeof n.componentWillMount && n.componentWillMount(),
                        "function" == typeof n.UNSAFE_componentWillMount && n.UNSAFE_componentWillMount()),
                      "function" == typeof n.componentDidMount && (o.effectTag |= 4))
                    : ("function" == typeof n.componentDidMount && (o.effectTag |= 4), (o.memoizedProps = r), (o.memoizedState = M)),
                  (n.props = r),
                  (n.state = M),
                  (n.context = g),
                  l)
                : ("function" == typeof n.componentDidMount && (o.effectTag |= 4), !1))
            : ((n = o.stateNode),
              k1(t, o),
              (l = o.memoizedProps),
              (n.props = o.type === o.elementType ? l : p(o.type, l)),
              (M = n.context),
              (g = "object" == typeof (g = e.contextType) && null !== g ? h(g) : V0(o, (g = x(e) ? R0 : s.current))),
              (c = "function" == typeof (u = e.getDerivedStateFromProps) || "function" == typeof n.getSnapshotBeforeUpdate) ||
                ("function" != typeof n.UNSAFE_componentWillReceiveProps && "function" != typeof n.componentWillReceiveProps) ||
                (l === r && M === g) ||
                F1(o, n, r, g),
              (z1 = !1),
              (M = o.memoizedState),
              (n.state = M),
              _1(o, r, n, a),
              (d = o.memoizedState),
              l !== r || M !== d || A.current || z1
                ? ("function" == typeof u && (H1(o, e, u, r), (d = o.memoizedState)),
                  (u = z1 || P1(o, e, l, r, M, d, g))
                    ? (c ||
                        ("function" != typeof n.UNSAFE_componentWillUpdate && "function" != typeof n.componentWillUpdate) ||
                        ("function" == typeof n.componentWillUpdate && n.componentWillUpdate(r, d, g),
                        "function" == typeof n.UNSAFE_componentWillUpdate && n.UNSAFE_componentWillUpdate(r, d, g)),
                      "function" == typeof n.componentDidUpdate && (o.effectTag |= 4),
                      "function" == typeof n.getSnapshotBeforeUpdate && (o.effectTag |= 256))
                    : ("function" != typeof n.componentDidUpdate || (l === t.memoizedProps && M === t.memoizedState) || (o.effectTag |= 4),
                      "function" != typeof n.getSnapshotBeforeUpdate ||
                        (l === t.memoizedProps && M === t.memoizedState) ||
                        (o.effectTag |= 256),
                      (o.memoizedProps = r),
                      (o.memoizedState = d)),
                  (n.props = r),
                  (n.state = d),
                  (n.context = g),
                  u)
                : ("function" != typeof n.componentDidUpdate || (l === t.memoizedProps && M === t.memoizedState) || (o.effectTag |= 4),
                  "function" != typeof n.getSnapshotBeforeUpdate ||
                    (l === t.memoizedProps && M === t.memoizedState) ||
                    (o.effectTag |= 256),
                  !1))),
        ai(t, o, e, r, i, a)
      );
    }
    function ai(t, o, e, r, a, i) {
      oi(t, o);
      var n = 0 != (64 & o.effectTag);
      if (!r && !n) return a && $0(o, e, !1), ci(t, o, i);
      (r = o.stateNode), (Xa.current = o);
      var l = n && "function" != typeof e.getDerivedStateFromError ? null : r.render();
      return (
        (o.effectTag |= 1),
        null !== t && n ? ((o.child = K1(o, t.child, null, i)), (o.child = K1(o, null, l, i))) : I(t, o, l, i),
        (o.memoizedState = r.state),
        a && $0(o, e, !0),
        o.child
      );
    }
    function ii(t) {
      var o = t.stateNode;
      o.pendingContext ? X0(t, o.pendingContext, o.pendingContext !== o.context) : o.context && X0(t, o.context, !1),
        ia(t, o.containerInfo);
    }
    var ni = {
      dehydrated: null,
      retryTime: 0
    };
    function li(t, o, e) {
      var r = o.mode,
        a = o.pendingProps,
        i = j.current,
        n = !1;
      if (
        (0 != (64 & o.effectTag) || (0 != (2 & i) && (null === t || null !== t.memoizedState))
          ? ((n = !0), (o.effectTag &= -65))
          : (null !== t && null === t.memoizedState) || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (i |= 1),
        d(j, 1 & i),
        null === t)
      ) {
        if ((void 0 !== a.fallback && Fa(o), n)) {
          if (((n = a.fallback), 0 == (2 & ((a = ol(null, r, 0, null)).return = o).mode)))
            for (t = (null !== o.memoizedState ? o.child : o).child, a.child = t; null !== t; ) (t.return = a), (t = t.sibling);
          return ((e = ol(n, r, e, null)).return = o), (a.sibling = e), (o.memoizedState = ni), (o.child = a), e;
        }
        return (r = a.children), (o.memoizedState = null), (o.child = $1(o, null, r, e));
      }
      if (null !== t.memoizedState) {
        if (((r = (t = t.child).sibling), n)) {
          if (
            ((a = a.fallback),
            0 == (2 & ((e = $n(t, t.pendingProps)).return = o).mode) && (n = (null !== o.memoizedState ? o.child : o).child) !== t.child)
          )
            for (e.child = n; null !== n; ) (n.return = e), (n = n.sibling);
          return ((r = $n(r, a)).return = o), (e.sibling = r), (e.childExpirationTime = 0), (o.memoizedState = ni), (o.child = e), r;
        }
        return (e = K1(o, t.child, a.children, e)), (o.memoizedState = null), (o.child = e);
      }
      if (((t = t.child), n)) {
        if (((n = a.fallback), ((a = ol(null, r, 0, null)).return = o), null !== (a.child = t) && (t.return = a), 0 == (2 & o.mode)))
          for (t = (null !== o.memoizedState ? o.child : o).child, a.child = t; null !== t; ) (t.return = a), (t = t.sibling);
        return (
          ((e = ol(n, r, e, null)).return = o),
          ((a.sibling = e).effectTag |= 2),
          (a.childExpirationTime = 0),
          (o.memoizedState = ni),
          (o.child = a),
          e
        );
      }
      return (o.memoizedState = null), (o.child = K1(o, t, a.children, e));
    }
    function Mi(t, o) {
      t.expirationTime < o && (t.expirationTime = o);
      var e = t.alternate;
      null !== e && e.expirationTime < o && (e.expirationTime = o), E1(t.return, o);
    }
    function gi(t, o, e, r, a, i) {
      var n = t.memoizedState;
      null === n
        ? (t.memoizedState = {
            isBackwards: o,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: e,
            tailExpiration: 0,
            tailMode: a,
            lastEffect: i
          })
        : ((n.isBackwards = o),
          (n.rendering = null),
          (n.renderingStartTime = 0),
          (n.last = r),
          (n.tail = e),
          (n.tailExpiration = 0),
          (n.tailMode = a),
          (n.lastEffect = i));
    }
    function ui(t, o, e) {
      var r = o.pendingProps,
        a = r.revealOrder,
        i = r.tail;
      if ((I(t, o, r.children, e), 0 != (2 & (r = j.current)))) (r = (1 & r) | 2), (o.effectTag |= 64);
      else {
        if (null !== t && 0 != (64 & t.effectTag))
          t: for (t = o.child; null !== t; ) {
            if (13 === t.tag) null !== t.memoizedState && Mi(t, e);
            else if (19 === t.tag) Mi(t, e);
            else if (null !== t.child) {
              t = (t.child.return = t).child;
              continue;
            }
            if (t === o) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === o) break t;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        r &= 1;
      }
      if ((d(j, r), 0 == (2 & o.mode))) o.memoizedState = null;
      else
        switch (a) {
          case "forwards":
            for (e = o.child, a = null; null !== e; ) null !== (t = e.alternate) && null === ga(t) && (a = e), (e = e.sibling);
            null === (e = a) ? ((a = o.child), (o.child = null)) : ((a = e.sibling), (e.sibling = null)), gi(o, !1, a, e, i, o.lastEffect);
            break;

          case "backwards":
            for (a = o.child, o.child = e = null; null !== a; ) {
              if (null !== (t = a.alternate) && null === ga(t)) {
                o.child = a;
                break;
              }
              (t = a.sibling), (a.sibling = e), (e = a), (a = t);
            }
            gi(o, !0, e, null, i, o.lastEffect);
            break;

          case "together":
            gi(o, !1, null, null, void 0, o.lastEffect);
            break;

          default:
            o.memoizedState = null;
        }
      return o.child;
    }
    function ci(t, o, e) {
      null !== t && (o.dependencies = t.dependencies);
      var r = o.expirationTime;
      if ((0 !== r && En(r), o.childExpirationTime < e)) return null;
      if (null !== t && o.child !== t.child) throw Error(y(153));
      if (null !== o.child) {
        for (e = $n((t = o.child), t.pendingProps), (o.child = e).return = o; null !== t.sibling; )
          (t = t.sibling), ((e = e.sibling = $n(t, t.pendingProps)).return = o);
        e.sibling = null;
      }
      return o.child;
    }
    function di(t, o) {
      switch (t.tailMode) {
        case "hidden":
          o = t.tail;
          for (var e = null; null !== o; ) null !== o.alternate && (e = o), (o = o.sibling);
          null === e ? (t.tail = null) : (e.sibling = null);
          break;

        case "collapsed":
          for (var e = t.tail, r = null; null !== e; ) null !== e.alternate && (r = e), (e = e.sibling);
          null === r ? (o || null === t.tail ? (t.tail = null) : (t.tail.sibling = null)) : (r.sibling = null);
      }
    }
    function si(t, o, e) {
      var r = o.pendingProps;
      switch (o.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;

        case 1:
          return x(o.type) && q0(), null;

        case 3:
          return (
            na(),
            c(A),
            c(s),
            (e = o.stateNode).pendingContext && ((e.context = e.pendingContext), (e.pendingContext = null)),
            (null !== t && null !== t.child) || !Va(o) || (o.effectTag |= 4),
            Di(o),
            null
          );

        case 5:
          Ma(o), (e = aa(ra.current));
          var a = o.type;
          if (null !== t && null != o.stateNode) pi(t, o, a, r, e), t.ref !== o.ref && (o.effectTag |= 128);
          else {
            if (!r) {
              if (null === o.stateNode) throw Error(y(166));
              return null;
            }
            if (((t = aa(oa.current)), Va(o))) {
              var i,
                n,
                r = o.stateNode,
                a = o.type,
                l = o.memoizedProps;
              switch (((r[Mr] = o), (r[gr] = l), a)) {
                case "iframe":
                case "object":
                case "embed":
                  u("load", r);
                  break;

                case "video":
                case "audio":
                  for (t = 0; t < bo.length; t++) u(bo[t], r);
                  break;

                case "source":
                  u("error", r);
                  break;

                case "img":
                case "image":
                case "link":
                  u("error", r), u("load", r);
                  break;

                case "form":
                  u("reset", r), u("submit", r);
                  break;

                case "details":
                  u("toggle", r);
                  break;

                case "input":
                  eo(r, l), u("invalid", r), He(e, "onChange");
                  break;

                case "select":
                  (r._wrapperState = {
                    wasMultiple: !!l.multiple
                  }),
                    u("invalid", r),
                    He(e, "onChange");
                  break;

                case "textarea":
                  co(r, l), u("invalid", r), He(e, "onChange");
              }
              for (i in (Ue(a, l), (t = null), l))
                l.hasOwnProperty(i) &&
                  ((n = l[i]),
                  "children" === i
                    ? "string" == typeof n
                      ? r.textContent !== n && (t = ["children", n])
                      : "number" == typeof n && r.textContent !== "" + n && (t = ["children", "" + n])
                    : et.hasOwnProperty(i) && null != n && He(e, i));
              switch (a) {
                case "input":
                  $t(r), io(r, l, !0);
                  break;

                case "textarea":
                  $t(r), Ao(r);
                  break;

                case "select":
                case "option":
                  break;

                default:
                  "function" == typeof l.onClick && (r.onclick = Ge);
              }
              (e = t), null !== (o.updateQueue = e) && (o.effectTag |= 4);
            } else {
              switch (
                ((i = 9 === e.nodeType ? e : e.ownerDocument),
                (t = t === Ze ? wo(a) : t) === Ze
                  ? "script" === a
                    ? (((t = i.createElement("div")).innerHTML = "<script></script>"), (t = t.removeChild(t.firstChild)))
                    : "string" == typeof r.is
                    ? (t = i.createElement(a, {
                        is: r.is
                      }))
                    : ((t = i.createElement(a)), "select" === a && ((i = t), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                  : (t = i.createElementNS(t, a)),
                (t[Mr] = o),
                (t[gr] = r),
                wi(t, o, !1, !1),
                (o.stateNode = t),
                (i = Qe(a, r)),
                a)
              ) {
                case "iframe":
                case "object":
                case "embed":
                  u("load", t), (n = r);
                  break;

                case "video":
                case "audio":
                  for (n = 0; n < bo.length; n++) u(bo[n], t);
                  n = r;
                  break;

                case "source":
                  u("error", t), (n = r);
                  break;

                case "img":
                case "image":
                case "link":
                  u("error", t), u("load", t), (n = r);
                  break;

                case "form":
                  u("reset", t), u("submit", t), (n = r);
                  break;

                case "details":
                  u("toggle", t), (n = r);
                  break;

                case "input":
                  eo(t, r), (n = oo(t, r)), u("invalid", t), He(e, "onChange");
                  break;

                case "option":
                  n = Mo(t, r);
                  break;

                case "select":
                  (t._wrapperState = {
                    wasMultiple: !!r.multiple
                  }),
                    (n = D({}, r, {
                      value: void 0
                    })),
                    u("invalid", t),
                    He(e, "onChange");
                  break;

                case "textarea":
                  co(t, r), (n = uo(t, r)), u("invalid", t), He(e, "onChange");
                  break;

                default:
                  n = r;
              }
              Ue(a, n);
              var M,
                g = n;
              for (l in g)
                g.hasOwnProperty(l) &&
                  ((M = g[l]),
                  "style" === l
                    ? Be(t, M)
                    : "dangerouslySetInnerHTML" === l
                    ? null != (M = M ? M.__html : void 0) && Io(t, M)
                    : "children" === l
                    ? "string" == typeof M
                      ? ("textarea" === a && "" === M) || No(t, M)
                      : "number" == typeof M && No(t, "" + M)
                    : "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (et.hasOwnProperty(l) ? null != M && He(e, l) : null != M && vt(t, l, M, i)));
              switch (a) {
                case "input":
                  $t(t), io(t, r, !1);
                  break;

                case "textarea":
                  $t(t), Ao(t);
                  break;

                case "option":
                  null != r.value && t.setAttribute("value", "" + Xt(r.value));
                  break;

                case "select":
                  (t.multiple = !!r.multiple),
                    null != (e = r.value) ? go(t, !!r.multiple, e, !1) : null != r.defaultValue && go(t, !!r.multiple, r.defaultValue, !0);
                  break;

                default:
                  "function" == typeof n.onClick && (t.onclick = Ge);
              }
              er(a, r) && (o.effectTag |= 4);
            }
            null !== o.ref && (o.effectTag |= 128);
          }
          return null;

        case 6:
          if (t && null != o.stateNode) hi(t, o, t.memoizedProps, r);
          else {
            if ("string" != typeof r && null === o.stateNode) throw Error(y(166));
            (e = aa(ra.current)),
              aa(oa.current),
              Va(o)
                ? ((e = o.stateNode), (r = o.memoizedProps), (e[Mr] = o), e.nodeValue !== r && (o.effectTag |= 4))
                : (((e = (9 === e.nodeType ? e : e.ownerDocument).createTextNode(r))[Mr] = o).stateNode = e);
          }
          return null;

        case 13:
          return (c(j), (r = o.memoizedState), 0 != (64 & o.effectTag))
            ? ((o.expirationTime = e), o)
            : ((e = null !== r),
              (r = !1),
              null === t
                ? void 0 !== o.memoizedProps.fallback && Va(o)
                : ((r = null !== (a = t.memoizedState)),
                  e ||
                    null === a ||
                    (null !== (a = t.child.sibling) &&
                      (null !== (l = o.firstEffect)
                        ? ((o.firstEffect = a).nextEffect = l)
                        : ((o.firstEffect = o.lastEffect = a).nextEffect = null),
                      (a.effectTag = 8)))),
              e &&
                !r &&
                0 != (2 & o.mode) &&
                ((null === t && !0 !== o.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & j.current)
                  ? k === Wi && (k = Vi)
                  : ((k !== Wi && k !== Vi) || (k = qi), 0 !== on && null !== b && (nl(b, S), ll(b, on)))),
              (e || r) && (o.effectTag |= 4),
              null);

        case 4:
          return na(), Di(o), null;

        case 10:
          return v1(o), null;

        case 17:
          return x(o.type) && q0(), null;

        case 19:
          if ((c(j), null === (r = o.memoizedState))) return null;
          if (((a = 0 != (64 & o.effectTag)), null === (l = r.rendering))) {
            if (a) di(r, !1);
            else if (k !== Wi || (null !== t && 0 != (64 & t.effectTag)))
              for (l = o.child; null !== l; ) {
                if (null !== (t = ga(l))) {
                  for (
                    o.effectTag |= 64,
                      di(r, !1),
                      null !== (a = t.updateQueue) && ((o.updateQueue = a), (o.effectTag |= 4)),
                      null === r.lastEffect && (o.firstEffect = null),
                      o.lastEffect = r.lastEffect,
                      r = o.child;
                    null !== r;

                  )
                    (l = e),
                      ((a = r).effectTag &= 2),
                      (a.nextEffect = null),
                      (a.firstEffect = null),
                      (a.lastEffect = null) === (t = a.alternate)
                        ? ((a.childExpirationTime = 0),
                          (a.expirationTime = l),
                          (a.child = null),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null))
                        : ((a.childExpirationTime = t.childExpirationTime),
                          (a.expirationTime = t.expirationTime),
                          (a.child = t.child),
                          (a.memoizedProps = t.memoizedProps),
                          (a.memoizedState = t.memoizedState),
                          (a.updateQueue = t.updateQueue),
                          (l = t.dependencies),
                          (a.dependencies =
                            null === l
                              ? null
                              : {
                                  expirationTime: l.expirationTime,
                                  firstContext: l.firstContext,
                                  responders: l.responders
                                })),
                      (r = r.sibling);
                  return d(j, (1 & j.current) | 2), o.child;
                }
                l = l.sibling;
              }
          } else {
            if (!a)
              if (null !== (t = ga(l))) {
                if (
                  ((o.effectTag |= 64),
                  (a = !0),
                  null !== (e = t.updateQueue) && ((o.updateQueue = e), (o.effectTag |= 4)),
                  di(r, !0),
                  null === r.tail && "hidden" === r.tailMode && !l.alternate)
                )
                  return null !== (o = o.lastEffect = r.lastEffect) && (o.nextEffect = null), null;
              } else
                2 * w() - r.renderingStartTime > r.tailExpiration &&
                  1 < e &&
                  ((o.effectTag |= 64), di(r, !(a = !0)), (o.expirationTime = o.childExpirationTime = e - 1));
            r.isBackwards
              ? ((l.sibling = o.child), (o.child = l))
              : (null !== (e = r.last) ? (e.sibling = l) : (o.child = l), (r.last = l));
          }
          return null !== r.tail
            ? (0 === r.tailExpiration && (r.tailExpiration = w() + 500),
              (e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.lastEffect = o.lastEffect),
              (r.renderingStartTime = w()),
              (e.sibling = null),
              (o = j.current),
              d(j, a ? (1 & o) | 2 : 1 & o),
              e)
            : null;
      }
      throw Error(y(156, o.tag));
    }
    function Ai(t) {
      switch (t.tag) {
        case 1:
          x(t.type) && q0();
          var o = t.effectTag;
          return 4096 & o ? ((t.effectTag = (-4097 & o) | 64), t) : null;

        case 3:
          if ((na(), c(A), c(s), 0 != (64 & (o = t.effectTag)))) throw Error(y(285));
          return (t.effectTag = (-4097 & o) | 64), t;

        case 5:
          return Ma(t), null;

        case 13:
          return c(j), 4096 & (o = t.effectTag) ? ((t.effectTag = (-4097 & o) | 64), t) : null;

        case 19:
          return c(j), null;

        case 4:
          return na(), null;

        case 10:
          return v1(t), null;

        default:
          return null;
      }
    }
    function xi(t, o) {
      return {
        value: t,
        source: o,
        stack: qt(o)
      };
    }
    var wi = function (t, o) {
        for (var e = o.child; null !== e; ) {
          if (5 === e.tag || 6 === e.tag) t.appendChild(e.stateNode);
          else if (4 !== e.tag && null !== e.child) {
            e = (e.child.return = e).child;
            continue;
          }
          if (e === o) break;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === o) return;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      },
      Di = function () {},
      pi = function (t, o, e, r, a) {
        var i = t.memoizedProps;
        if (i !== r) {
          var n,
            l,
            M = o.stateNode;
          switch ((aa(oa.current), (t = null), e)) {
            case "input":
              (i = oo(M, i)), (r = oo(M, r)), (t = []);
              break;

            case "option":
              (i = Mo(M, i)), (r = Mo(M, r)), (t = []);
              break;

            case "select":
              (i = D({}, i, {
                value: void 0
              })),
                (r = D({}, r, {
                  value: void 0
                })),
                (t = []);
              break;

            case "textarea":
              (i = uo(M, i)), (r = uo(M, r)), (t = []);
              break;

            default:
              "function" != typeof i.onClick && "function" == typeof r.onClick && (M.onclick = Ge);
          }
          for (n in (Ue(e, r), (e = null), i))
            if (!r.hasOwnProperty(n) && i.hasOwnProperty(n) && null != i[n])
              if ("style" === n) for (l in ((M = i[n]), M)) M.hasOwnProperty(l) && ((e = e || {}), (e[l] = ""));
              else
                "dangerouslySetInnerHTML" !== n &&
                  "children" !== n &&
                  "suppressContentEditableWarning" !== n &&
                  "suppressHydrationWarning" !== n &&
                  "autoFocus" !== n &&
                  (et.hasOwnProperty(n) ? (t = t || []) : (t = t || []).push(n, null));
          for (n in r) {
            var g = r[n],
              M = null != i ? i[n] : void 0;
            if (r.hasOwnProperty(n) && g !== M && (null != g || null != M))
              if ("style" === n)
                if (M) {
                  for (l in M) !M.hasOwnProperty(l) || (g && g.hasOwnProperty(l)) || ((e = e || {}), (e[l] = ""));
                  for (l in g) g.hasOwnProperty(l) && M[l] !== g[l] && ((e = e || {}), (e[l] = g[l]));
                } else e || (t = t || []).push(n, e), (e = g);
              else
                "dangerouslySetInnerHTML" === n
                  ? ((g = g ? g.__html : void 0), (M = M ? M.__html : void 0), null != g && M !== g && (t = t || []).push(n, g))
                  : "children" === n
                  ? M === g || ("string" != typeof g && "number" != typeof g) || (t = t || []).push(n, "" + g)
                  : "suppressContentEditableWarning" !== n &&
                    "suppressHydrationWarning" !== n &&
                    (et.hasOwnProperty(n) ? (null != g && He(a, n), t || M === g || (t = [])) : (t = t || []).push(n, g));
          }
          e && (t = t || []).push("style", e), (a = t), (o.updateQueue = a) && (o.effectTag |= 4);
        }
      },
      hi = function (t, o, e, r) {
        e !== r && (o.effectTag |= 4);
      },
      Ii = "function" == typeof WeakSet ? WeakSet : Set;
    function Ni(t, o) {
      var e = o.source;
      null === o.stack && null !== e && qt(e), null !== e && Vt(e.type), (o = o.value), null !== t && 1 === t.tag && Vt(t.type);
      try {
        console.error(o);
      } catch (t) {
        setTimeout(function () {
          throw t;
        });
      }
    }
    function ji(o, t) {
      try {
        (t.props = o.memoizedProps), (t.state = o.memoizedState), t.componentWillUnmount();
      } catch (t) {
        Hn(o, t);
      }
    }
    function Li(o) {
      var t = o.ref;
      if (null !== t)
        if ("function" == typeof t)
          try {
            t(null);
          } catch (t) {
            Hn(o, t);
          }
        else t.current = null;
    }
    function Ci(t, o) {
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;

        case 1:
          var e, r;
          return void (
            256 & o.effectTag &&
            null !== t &&
            ((e = t.memoizedProps),
            (r = t.memoizedState),
            (o = (t = o.stateNode).getSnapshotBeforeUpdate(o.elementType === o.type ? e : p(o.type, e), r)),
            (t.__reactInternalSnapshotBeforeUpdate = o))
          );

        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(y(163));
    }
    function yi(t, o) {
      if (null !== (o = null !== (o = o.updateQueue) ? o.lastEffect : null)) {
        var e,
          r = (o = o.next);
        do {} while (((r.tag & t) === t && ((e = r.destroy), (r.destroy = void 0) !== e) && e(), (r = r.next) !== o));
      }
    }
    function fi(t, o) {
      if (null !== (o = null !== (o = o.updateQueue) ? o.lastEffect : null)) {
        var e,
          r = (o = o.next);
        do {} while (((r.tag & t) === t && ((e = r.create), (r.destroy = e())), (r = r.next) !== o));
      }
    }
    function Ti(t, o, e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return void fi(3, e);

        case 1:
          var r;
          return (
            (t = e.stateNode),
            4 & e.effectTag &&
              (null === o
                ? t.componentDidMount()
                : ((r = e.elementType === e.type ? o.memoizedProps : p(e.type, o.memoizedProps)),
                  t.componentDidUpdate(r, o.memoizedState, t.__reactInternalSnapshotBeforeUpdate))),
            void (null !== (o = e.updateQueue) && U1(e, o, t))
          );

        case 3:
          if (null !== (o = e.updateQueue)) {
            if ((t = null) !== e.child)
              switch (e.child.tag) {
                case 5:
                case 1:
                  t = e.child.stateNode;
              }
            U1(e, o, t);
          }
          return;

        case 5:
          return (t = e.stateNode), void (null === o && 4 & e.effectTag && er(e.type, e.memoizedProps) && t.focus());

        case 6:
        case 4:
        case 12:
          return;

        case 13:
          return void (
            null === e.memoizedState &&
            null !== (e = e.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated) &&
            he(e)
          );

        case 19:
        case 17:
        case 20:
        case 21:
          return;
      }
      throw Error(y(163));
    }
    function mi(t, r, o) {
      switch (("function" == typeof Rn && Rn(r), r.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var a;
          null !== (t = r.updateQueue) &&
            null !== (t = t.lastEffect) &&
            ((a = t.next),
            h1(97 < o ? 97 : o, function () {
              var t = a;
              do {
                var o = t.destroy;
                if (void 0 !== o) {
                  var e = r;
                  try {
                    o();
                  } catch (t) {
                    Hn(e, t);
                  }
                }
              } while ((t = t.next) !== a);
            }));
          break;

        case 1:
          Li(r), "function" == typeof (o = r.stateNode).componentWillUnmount && ji(r, o);
          break;

        case 5:
          Li(r);
          break;

        case 4:
          ki(t, r, o);
      }
    }
    function vi(t) {
      var o = t.alternate;
      (t.return = null),
        (t.child = null),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.dependencies = null),
        (t.alternate = null),
        (t.firstEffect = null),
        (t.lastEffect = null),
        (t.pendingProps = null),
        (t.memoizedProps = null),
        (t.stateNode = null) !== o && vi(o);
    }
    function Ei(t) {
      return 5 === t.tag || 3 === t.tag || 4 === t.tag;
    }
    function bi(t) {
      t: {
        for (var o = t.return; null !== o; ) {
          if (Ei(o)) {
            var e = o;
            break t;
          }
          o = o.return;
        }
        throw Error(y(160));
      }
      switch (((o = e.stateNode), e.tag)) {
        case 5:
          var r = !1;
          break;

        case 3:
        case 4:
          (o = o.containerInfo), (r = !0);
          break;

        default:
          throw Error(y(161));
      }
      16 & e.effectTag && (No(o, ""), (e.effectTag &= -17));
      t: o: for (e = t; ; ) {
        for (; null === e.sibling; ) {
          if (null === e.return || Ei(e.return)) {
            e = null;
            break t;
          }
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
          if (2 & e.effectTag) continue o;
          if (null === e.child || 4 === e.tag) continue o;
          e = (e.child.return = e).child;
        }
        if (!(2 & e.effectTag)) {
          e = e.stateNode;
          break t;
        }
      }
      (r ? zi : Si)(t, e, o);
    }
    function zi(t, o, e) {
      var r = t.tag,
        a = 5 === r || 6 === r;
      if (a)
        (t = a ? t.stateNode : t.stateNode.instance),
          o
            ? (8 === e.nodeType ? e.parentNode : e).insertBefore(t, o)
            : (8 === e.nodeType ? (o = e.parentNode).insertBefore(t, e) : (o = e).appendChild(t),
              null == (e = e._reactRootContainer) && null === o.onclick && (o.onclick = Ge));
      else if (4 !== r && null !== (t = t.child)) for (zi(t, o, e), t = t.sibling; null !== t; ) zi(t, o, e), (t = t.sibling);
    }
    function Si(t, o, e) {
      var r = t.tag,
        a = 5 === r || 6 === r;
      if (a) (t = a ? t.stateNode : t.stateNode.instance), o ? e.insertBefore(t, o) : e.appendChild(t);
      else if (4 !== r && null !== (t = t.child)) for (Si(t, o, e), t = t.sibling; null !== t; ) Si(t, o, e), (t = t.sibling);
    }
    function ki(t, o, e) {
      for (var r, a, i = o, n = !1; ; ) {
        if (!n) {
          n = i.return;
          t: for (;;) {
            if (null === n) throw Error(y(160));
            switch (((r = n.stateNode), n.tag)) {
              case 5:
                a = !1;
                break t;

              case 3:
              case 4:
                (r = r.containerInfo), (a = !0);
                break t;
            }
            n = n.return;
          }
          n = !0;
        }
        if (5 === i.tag || 6 === i.tag) {
          t: for (var l = t, M = i, g = e, u = M; ; )
            if ((mi(l, u, g), null !== u.child && 4 !== u.tag)) (u.child.return = u), (u = u.child);
            else {
              if (u === M) break;
              for (; null === u.sibling; ) {
                if (null === u.return || u.return === M) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
          a ? ((l = r), (M = i.stateNode), (8 === l.nodeType ? l.parentNode : l).removeChild(M)) : r.removeChild(i.stateNode);
        } else if (4 === i.tag) {
          if (null !== i.child) {
            (r = i.stateNode.containerInfo), (a = !0), (i = (i.child.return = i).child);
            continue;
          }
        } else if ((mi(t, i, e), null !== i.child)) {
          i = (i.child.return = i).child;
          continue;
        }
        if (i === o) break;
        for (; null === i.sibling; ) {
          if (null === i.return || i.return === o) return;
          4 === (i = i.return).tag && (n = !1);
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    function Oi(t, o) {
      switch (o.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          return void yi(3, o);

        case 1:
          return;

        case 5:
          var e = o.stateNode;
          if (null != e) {
            var r = o.memoizedProps,
              a = null !== t ? t.memoizedProps : r,
              i = ((t = o.type), o.updateQueue);
            if ((o.updateQueue = null) !== i) {
              for (
                e[gr] = r, "input" === t && "radio" === r.type && null != r.name && ro(e, r), Qe(t, a), o = Qe(t, r), a = 0;
                a < i.length;
                a += 2
              ) {
                var n = i[a],
                  l = i[a + 1];
                "style" === n ? Be(e, l) : "dangerouslySetInnerHTML" === n ? Io(e, l) : "children" === n ? No(e, l) : vt(e, n, l, o);
              }
              switch (t) {
                case "input":
                  ao(e, r);
                  break;

                case "textarea":
                  so(e, r);
                  break;

                case "select":
                  (o = e._wrapperState.wasMultiple),
                    (e._wrapperState.wasMultiple = !!r.multiple),
                    null != (t = r.value)
                      ? go(e, !!r.multiple, t, !1)
                      : o !== !!r.multiple &&
                        (null != r.defaultValue ? go(e, !!r.multiple, r.defaultValue, !0) : go(e, !!r.multiple, r.multiple ? [] : "", !1));
              }
            }
          }
          return;

        case 6:
          if (null === o.stateNode) throw Error(y(162));
          return void (o.stateNode.nodeValue = o.memoizedProps);

        case 3:
          return void ((o = o.stateNode).hydrate && ((o.hydrate = !1), he(o.containerInfo)));

        case 12:
          return;

        case 13:
          if ((null === (e = o).memoizedState ? (r = !1) : ((r = !0), (e = o.child), (rn = w())), null !== e))
            t: for (t = e; ; ) {
              if (5 === t.tag)
                (i = t.stateNode),
                  r
                    ? "function" == typeof (i = i.style).setProperty
                      ? i.setProperty("display", "none", "important")
                      : (i.display = "none")
                    : ((i = t.stateNode),
                      (a = null != (a = t.memoizedProps.style) && a.hasOwnProperty("display") ? a.display : null),
                      (i.style.display = Ye("display", a)));
              else if (6 === t.tag) t.stateNode.nodeValue = r ? "" : t.memoizedProps;
              else {
                if (13 === t.tag && null !== t.memoizedState && null === t.memoizedState.dehydrated) {
                  ((i = t.child.sibling).return = t), (t = i);
                  continue;
                }
                if (null !== t.child) {
                  t = (t.child.return = t).child;
                  continue;
                }
              }
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) break t;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          return void Yi(o);

        case 19:
          return void Yi(o);

        case 17:
          return;
      }
      throw Error(y(163));
    }
    function Yi(e) {
      var r,
        t = e.updateQueue;
      null !== t &&
        ((e.updateQueue = null) === (r = e.stateNode) && (r = e.stateNode = new Ii()),
        t.forEach(function (t) {
          var o = Pn.bind(null, e, t);
          r.has(t) || (r.add(t), t.then(o, o));
        }));
    }
    var Bi = "function" == typeof WeakMap ? WeakMap : Map;
    function _i(t, o, e) {
      ((e = O1(e, null)).tag = 3),
        (e.payload = {
          element: null
        });
      var r = o.value;
      return (
        (e.callback = function () {
          nn || ((nn = !0), (ln = r)), Ni(t, o);
        }),
        e
      );
    }
    function Ui(o, e, t) {
      (t = O1(t, null)).tag = 3;
      var r,
        a = o.type.getDerivedStateFromError,
        i =
          ("function" == typeof a &&
            ((r = e.value),
            (t.payload = function () {
              return Ni(o, e), a(r);
            })),
          o.stateNode);
      return (
        null !== i &&
          "function" == typeof i.componentDidCatch &&
          (t.callback = function () {
            "function" != typeof a && (null === Mn ? (Mn = new Set([this])) : Mn.add(this), Ni(o, e));
            var t = e.stack;
            this.componentDidCatch(e.value, {
              componentStack: null !== t ? t : ""
            });
          }),
        t
      );
    }
    var Qi = Math.ceil,
      Zi = o.ReactCurrentDispatcher,
      Hi = o.ReactCurrentOwner,
      m = 0,
      Gi = 8,
      v = 16,
      Pi = 32,
      Wi = 0,
      Fi = 1,
      Ri = 2,
      Vi = 3,
      qi = 4,
      Xi = 5,
      E = m,
      b = null,
      z = null,
      S = 0,
      k = Wi,
      Ji = null,
      Ki = 1073741823,
      $i = 1073741823,
      tn = null,
      on = 0,
      en = !1,
      rn = 0,
      an = 500,
      O = null,
      nn = !1,
      ln = null,
      Mn = null,
      gn = !1,
      un = null,
      cn = 90,
      dn = null,
      sn = 0,
      An = null,
      xn = 0;
    function wn() {
      return (E & (v | Pi)) !== m ? 1073741821 - ((w() / 10) | 0) : 0 !== xn ? xn : (xn = 1073741821 - ((w() / 10) | 0));
    }
    function Dn(t, o, e) {
      if (0 == (2 & (o = o.mode))) return 1073741823;
      var r = D1();
      if (0 == (4 & o)) return 99 === r ? 1073741823 : 1073741822;
      if ((E & v) !== m) return S;
      if (null !== e) t = L1(t, 0 | e.timeoutMs || 5e3, 250);
      else
        switch (r) {
          case 99:
            t = 1073741823;
            break;

          case 98:
            t = L1(t, 150, 100);
            break;

          case 97:
          case 96:
            t = L1(t, 5e3, 250);
            break;

          case 95:
            t = 2;
            break;

          default:
            throw Error(y(326));
        }
      return null !== b && t === S && --t, t;
    }
    function pn(t, o) {
      if (50 < sn) throw ((sn = 0), (An = null), Error(y(185)));
      var e;
      null !== (t = hn(t, o)) &&
        ((e = D1()),
        1073741823 === o ? ((E & Gi) !== m && (E & (v | Pi)) === m ? jn(t) : (Y(t), E === m && f())) : Y(t),
        (4 & E) === m ||
          (98 !== e && 99 !== e) ||
          (null === dn ? (dn = new Map([[t, o]])) : (void 0 === (e = dn.get(t)) || o < e) && dn.set(t, o)));
    }
    function hn(t, o) {
      t.expirationTime < o && (t.expirationTime = o);
      var e = t.alternate,
        r = (null !== e && e.expirationTime < o && (e.expirationTime = o), t.return),
        a = null;
      if (null === r && 3 === t.tag) a = t.stateNode;
      else
        for (; null !== r; ) {
          if (
            ((e = r.alternate),
            r.childExpirationTime < o && (r.childExpirationTime = o),
            null !== e && e.childExpirationTime < o && (e.childExpirationTime = o),
            null === r.return && 3 === r.tag)
          ) {
            a = r.stateNode;
            break;
          }
          r = r.return;
        }
      return null !== a && (b === a && (En(o), k === qi) && nl(a, S), ll(a, o)), a;
    }
    function In(t) {
      var o,
        e = t.lastExpiredTime;
      return 0 === e && il(t, (e = t.firstPendingTime))
        ? ((o = t.lastPingedTime), (t = (t = t.nextKnownPendingLevel) < o ? o : t) <= 2 && e !== t ? 0 : t)
        : e;
    }
    function Y(t) {
      if (0 !== t.lastExpiredTime)
        (t.callbackExpirationTime = 1073741823), (t.callbackPriority = 99), (t.callbackNode = N1(jn.bind(null, t)));
      else {
        var o = In(t),
          e = t.callbackNode;
        if (0 === o) null !== e && ((t.callbackNode = null), (t.callbackExpirationTime = 0), (t.callbackPriority = 90));
        else {
          var r = wn(),
            r =
              1073741823 === o
                ? 99
                : 1 === o || 2 === o
                ? 95
                : (r = 10 * (1073741821 - o) - 10 * (1073741821 - r)) <= 0
                ? 99
                : r <= 250
                ? 98
                : r <= 5250
                ? 97
                : 95;
          if (null !== e) {
            var a = t.callbackPriority;
            if (t.callbackExpirationTime === o && r <= a) return;
            e !== u1 && e1(e);
          }
          (t.callbackExpirationTime = o),
            (t.callbackPriority = r),
            (o =
              1073741823 === o
                ? N1(jn.bind(null, t))
                : I1(r, Nn.bind(null, t), {
                    timeout: 10 * (1073741821 - o) - w()
                  })),
            (t.callbackNode = o);
        }
      }
    }
    function Nn(o, t) {
      if (((xn = 0), t)) Ml(o, (t = wn())), Y(o);
      else {
        var e = In(o);
        if (0 !== e) {
          if (((t = o.callbackNode), (E & (v | Pi)) !== m)) throw Error(y(327));
          if ((Un(), (o === b && e === S) || fn(o, e), null !== z)) {
            for (var r = E, a = ((E |= v), mn()); ; )
              try {
                zn();
                break;
              } catch (t) {
                Tn(o, t);
              }
            if ((m1(), (E = r), (Zi.current = a), k === Fi)) throw ((t = Ji), fn(o, e), nl(o, e), Y(o), t);
            if (null === z)
              switch (((a = o.finishedWork = o.current.alternate), (o.finishedExpirationTime = e), (r = k), (b = null), r)) {
                case Wi:
                case Fi:
                  throw Error(y(345));

                case Ri:
                  Ml(o, 2 < e ? 2 : e);
                  break;

                case Vi:
                  if (
                    (nl(o, e),
                    e === (r = o.lastSuspendedTime) && (o.nextKnownPendingLevel = On(a)),
                    1073741823 === Ki && 10 < (a = rn + an - w()))
                  ) {
                    if (en) {
                      var i = o.lastPingedTime;
                      if (0 === i || e <= i) {
                        (o.lastPingedTime = e), fn(o, e);
                        break;
                      }
                    }
                    if (0 !== (i = In(o)) && i !== e) break;
                    if (0 !== r && r !== e) {
                      o.lastPingedTime = r;
                      break;
                    }
                    o.timeoutHandle = ar(Yn.bind(null, o), a);
                  } else Yn(o);
                  break;

                case qi:
                  nl(o, e),
                    e === (r = o.lastSuspendedTime) && (o.nextKnownPendingLevel = On(a)),
                    en && (0 === (a = o.lastPingedTime) || e <= a)
                      ? ((o.lastPingedTime = e), fn(o, e))
                      : (0 !== (a = In(o)) && a !== e) ||
                        (0 !== r && r !== e
                          ? (o.lastPingedTime = r)
                          : (1073741823 !== $i
                              ? (r = 10 * (1073741821 - $i) - w())
                              : 1073741823 === Ki
                              ? (r = 0)
                              : ((r = 10 * (1073741821 - Ki) - 5e3),
                                (e = 10 * (1073741821 - e) - (a = w())) <
                                  (r =
                                    ((r = (r = a - r) < 0 ? 0 : r) < 120
                                      ? 120
                                      : r < 480
                                      ? 480
                                      : r < 1080
                                      ? 1080
                                      : r < 1920
                                      ? 1920
                                      : r < 3e3
                                      ? 3e3
                                      : r < 4320
                                      ? 4320
                                      : 1960 * Qi(r / 1960)) - r) && (r = e)),
                            10 < r ? (o.timeoutHandle = ar(Yn.bind(null, o), r)) : Yn(o)));
                  break;

                case Xi:
                  if (1073741823 !== Ki && null !== tn) {
                    var i = Ki,
                      n = tn;
                    if (
                      10 <
                      (r =
                        (r = 0 | n.busyMinDurationMs) <= 0 ||
                        ((a = 0 | n.busyDelayMs), (i = w() - (10 * (1073741821 - i) - (0 | n.timeoutMs || 5e3))) <= a)
                          ? 0
                          : a + r - i)
                    ) {
                      nl(o, e), (o.timeoutHandle = ar(Yn.bind(null, o), r));
                      break;
                    }
                  }
                  Yn(o);
                  break;

                default:
                  throw Error(y(329));
              }
            if ((Y(o), o.callbackNode === t)) return Nn.bind(null, o);
          }
        }
      }
      return null;
    }
    function jn(o) {
      var t = 0 !== (t = o.lastExpiredTime) ? t : 1073741823;
      if ((E & (v | Pi)) !== m) throw Error(y(327));
      if ((Un(), (o === b && t === S) || fn(o, t), null !== z)) {
        for (var e = E, r = ((E |= v), mn()); ; )
          try {
            bn();
            break;
          } catch (t) {
            Tn(o, t);
          }
        if ((m1(), (E = e), (Zi.current = r), k === Fi)) throw ((e = Ji), fn(o, t), nl(o, t), Y(o), e);
        if (null !== z) throw Error(y(261));
        (o.finishedWork = o.current.alternate), (o.finishedExpirationTime = t), (b = null), Yn(o), Y(o);
      }
      return null;
    }
    function Ln() {
      var t;
      null !== dn &&
        ((t = dn),
        (dn = null),
        t.forEach(function (t, o) {
          Ml(o, t), Y(o);
        }),
        f());
    }
    function Cn(t, o) {
      var e = E;
      E |= 1;
      try {
        return t(o);
      } finally {
        (E = e) === m && f();
      }
    }
    function yn(t, o) {
      var e = E;
      E = (-2 & E) | Gi;
      try {
        return t(o);
      } finally {
        (E = e) === m && f();
      }
    }
    function fn(t, o) {
      (t.finishedWork = null), (t.finishedExpirationTime = 0);
      var e = t.timeoutHandle;
      if ((-1 !== e && ((t.timeoutHandle = -1), ir(e)), null !== z))
        for (e = z.return; null !== e; ) {
          var r = e;
          switch (r.tag) {
            case 1:
              null != (r = r.type.childContextTypes) && q0();
              break;

            case 3:
              na(), c(A), c(s);
              break;

            case 5:
              Ma(r);
              break;

            case 4:
              na();
              break;

            case 13:
            case 19:
              c(j);
              break;

            case 10:
              v1(r);
          }
          e = e.return;
        }
      (z = $n((b = t).current, null)), (S = o), (k = Wi), ($i = Ki = 1073741823), (tn = Ji = null), (on = 0), (en = !1);
    }
    function Tn(t, o) {
      do {
        try {
          if ((m1(), (ca.current = Ba), sa))
            for (var e = L.memoizedState; null !== e; ) {
              var r = e.queue;
              null !== r && (r.pending = null), (e = e.next);
            }
          if (((da = 0), (T = C = L = null), (sa = !1), null === z || null === z.return)) return (k = Fi), (Ji = o), (z = null);
          t: {
            var a = t,
              i = z.return,
              n = o;
            if (
              ((o = S),
              ((p = z).effectTag |= 2048),
              (p.firstEffect = p.lastEffect = null) !== n && "object" == typeof n && "function" == typeof n.then)
            ) {
              var l,
                M,
                g,
                u,
                c = n,
                d =
                  (0 == (2 & p.mode) &&
                    ((l = p.alternate)
                      ? ((p.updateQueue = l.updateQueue), (p.memoizedState = l.memoizedState), (p.expirationTime = l.expirationTime))
                      : ((p.updateQueue = null), (p.memoizedState = null))),
                  0 != (1 & j.current)),
                s = i;
              do {
                if (
                  (u = (u = 13 === s.tag)
                    ? null !== (M = s.memoizedState)
                      ? null !== M.dehydrated
                      : void 0 !== (g = s.memoizedProps).fallback && (!0 !== g.unstable_avoidThisFallback || !d)
                    : u)
                ) {
                  var A,
                    x,
                    w = s.updateQueue;
                  if ((null === w ? ((A = new Set()).add(c), (s.updateQueue = A)) : w.add(c), 0 == (2 & s.mode))) {
                    (s.effectTag |= 64),
                      (p.effectTag &= -2981),
                      1 === p.tag && (null === p.alternate ? (p.tag = 17) : (((x = O1(1073741823, null)).tag = 2), Y1(p, x))),
                      (p.expirationTime = 1073741823);
                    break t;
                  }
                  var D,
                    n = void 0,
                    p = o,
                    h = a.pingCache;
                  null === h
                    ? ((h = a.pingCache = new Bi()), (n = new Set()), h.set(c, n))
                    : void 0 === (n = h.get(c)) && ((n = new Set()), h.set(c, n)),
                    n.has(p) || (n.add(p), (D = Gn.bind(null, a, c, p)), c.then(D, D)),
                    (s.effectTag |= 4096),
                    (s.expirationTime = o);
                  break t;
                }
              } while (null !== (s = s.return));
              n = Error(
                (Vt(p.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                  qt(p)
              );
            }
            k !== Xi && (k = Ri), (n = xi(n, p)), (s = i);
            do {
              switch (s.tag) {
                case 3:
                  c = n;
                  (s.effectTag |= 4096), (s.expirationTime = o), B1(s, _i(s, c, o));
                  break t;

                case 1:
                  c = n;
                  var I = s.type,
                    N = s.stateNode;
                  if (
                    0 == (64 & s.effectTag) &&
                    ("function" == typeof I.getDerivedStateFromError ||
                      (null !== N && "function" == typeof N.componentDidCatch && (null === Mn || !Mn.has(N))))
                  ) {
                    (s.effectTag |= 4096), (s.expirationTime = o), B1(s, Ui(s, c, o));
                    break t;
                  }
              }
            } while (null !== (s = s.return));
          }
          z = kn(z);
        } catch (t) {
          o = t;
          continue;
        }
        break;
      } while (1);
    }
    function mn() {
      var t = Zi.current;
      return (Zi.current = Ba), null === t ? Ba : t;
    }
    function vn(t, o) {
      t < Ki && 2 < t && (Ki = t), null !== o && t < $i && 2 < t && (($i = t), (tn = o));
    }
    function En(t) {
      on < t && (on = t);
    }
    function bn() {
      for (; null !== z; ) z = Sn(z);
    }
    function zn() {
      for (; null !== z && !c1(); ) z = Sn(z);
    }
    function Sn(t) {
      var o = Wn(t.alternate, t, S);
      return (t.memoizedProps = t.pendingProps), null === o && (o = kn(t)), (Hi.current = null), o;
    }
    function kn(t) {
      z = t;
      do {
        var o = z.alternate;
        if (((t = z.return), 0 == (2048 & z.effectTag))) {
          if (((o = si(o, z, S)), 1 === S || 1 !== z.childExpirationTime)) {
            for (var e = 0, r = z.child; null !== r; ) {
              var a = r.expirationTime,
                i = r.childExpirationTime;
              (e = e < a ? a : e) < i && (e = i), (r = r.sibling);
            }
            z.childExpirationTime = e;
          }
          if (null !== o) return o;
          null !== t &&
            0 == (2048 & t.effectTag) &&
            (null === t.firstEffect && (t.firstEffect = z.firstEffect),
            null !== z.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = z.firstEffect), (t.lastEffect = z.lastEffect)),
            1 < z.effectTag) &&
            (null !== t.lastEffect ? (t.lastEffect.nextEffect = z) : (t.firstEffect = z), (t.lastEffect = z));
        } else {
          if (null !== (o = Ai(z))) return (o.effectTag &= 2047), o;
          null !== t && ((t.firstEffect = t.lastEffect = null), (t.effectTag |= 2048));
        }
        if (null !== (o = z.sibling)) return o;
      } while (null !== (z = t));
      return k === Wi && (k = Xi), null;
    }
    function On(t) {
      var o = t.expirationTime;
      return (t = t.childExpirationTime) < o ? o : t;
    }
    function Yn(t) {
      var o = D1();
      return h1(99, Bn.bind(null, t, o)), null;
    }
    function Bn(t, o) {
      for (; Un(), null !== un; );
      if ((E & (v | Pi)) !== m) throw Error(y(327));
      var e = t.finishedWork,
        r = t.finishedExpirationTime;
      if (null !== e) {
        if (((t.finishedWork = null), (t.finishedExpirationTime = 0), e === t.current)) throw Error(y(177));
        (t.callbackNode = null), (t.callbackExpirationTime = 0), (t.callbackPriority = 90), (t.nextKnownPendingLevel = 0);
        var a = On(e);
        if (
          ((t.firstPendingTime = a),
          r <= t.lastSuspendedTime
            ? (t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0)
            : r <= t.firstSuspendedTime && (t.firstSuspendedTime = r - 1),
          r <= t.lastPingedTime && (t.lastPingedTime = 0),
          r <= t.lastExpiredTime && (t.lastExpiredTime = 0),
          t === b && ((z = b = null), (S = 0)),
          null !== (a = 1 < e.effectTag ? (null !== e.lastEffect ? (e.lastEffect.nextEffect = e).firstEffect : e) : e.firstEffect))
        ) {
          var i = E,
            n = ((E |= Pi), (Hi.current = null), (tr = me), Ve());
          if (qe(n)) {
            if ("selectionStart" in n)
              var l = {
                start: n.selectionStart,
                end: n.selectionEnd
              };
            else
              t: if (
                (u = (l = ((l = n.ownerDocument) && l.defaultView) || window).getSelection && l.getSelection()) &&
                0 !== u.rangeCount
              ) {
                var l = u.anchorNode,
                  M = u.anchorOffset,
                  g = u.focusNode,
                  u = u.focusOffset;
                try {
                  l.nodeType, g.nodeType;
                } catch (t) {
                  l = null;
                  break t;
                }
                var c,
                  d = 0,
                  s = -1,
                  A = -1,
                  x = 0,
                  w = 0,
                  D = n,
                  p = null;
                o: for (;;) {
                  for (
                    ;
                    D !== l || (0 !== M && 3 !== D.nodeType) || (s = d + M),
                      D !== g || (0 !== u && 3 !== D.nodeType) || (A = d + u),
                      3 === D.nodeType && (d += D.nodeValue.length),
                      null !== (c = D.firstChild);

                  )
                    (p = D), (D = c);
                  for (;;) {
                    if (D === n) break o;
                    if ((p === l && ++x === M && (s = d), p === g && ++w === u && (A = d), null !== (c = D.nextSibling))) break;
                    p = (D = p).parentNode;
                  }
                  D = c;
                }
                l =
                  -1 === s || -1 === A
                    ? null
                    : {
                        start: s,
                        end: A
                      };
              } else l = null;
            l = l || {
              start: 0,
              end: 0
            };
          } else l = null;
          (me = !(or = {
            activeElementDetached: null,
            focusedElem: n,
            selectionRange: l
          })),
            (O = a);
          do {
            try {
              _n();
            } catch (t) {
              if (null === O) throw Error(y(330));
              Hn(O, t), (O = O.nextEffect);
            }
          } while (null !== O);
          O = a;
          do {
            try {
              for (n = t, l = o; null !== O; ) {
                var h,
                  I = O.effectTag;
                switch (
                  (16 & I && No(O.stateNode, ""),
                  128 & I && null !== (N = O.alternate) && null !== (h = N.ref) && ("function" == typeof h ? h(null) : (h.current = null)),
                  1038 & I)
                ) {
                  case 2:
                    bi(O), (O.effectTag &= -3);
                    break;

                  case 6:
                    bi(O), (O.effectTag &= -3), Oi(O.alternate, O);
                    break;

                  case 1024:
                    O.effectTag &= -1025;
                    break;

                  case 1028:
                    (O.effectTag &= -1025), Oi(O.alternate, O);
                    break;

                  case 4:
                    Oi(O.alternate, O);
                    break;

                  case 8:
                    ki(n, (M = O), l), vi(M);
                }
                O = O.nextEffect;
              }
            } catch (t) {
              if (null === O) throw Error(y(330));
              Hn(O, t), (O = O.nextEffect);
            }
          } while (null !== O);
          if (
            ((h = or),
            (N = Ve()),
            (I = h.focusedElem),
            (l = h.selectionRange),
            N !== I && I && I.ownerDocument && Re(I.ownerDocument.documentElement, I))
          ) {
            null !== l &&
              qe(I) &&
              ((N = l.start),
              void 0 === (h = l.end) && (h = N),
              "selectionStart" in I
                ? ((I.selectionStart = N), (I.selectionEnd = Math.min(h, I.value.length)))
                : (h = ((N = I.ownerDocument || document) && N.defaultView) || window).getSelection &&
                  ((h = h.getSelection()),
                  (M = I.textContent.length),
                  (n = Math.min(l.start, M)),
                  (l = void 0 === l.end ? n : Math.min(l.end, M)),
                  !h.extend && l < n && ((M = l), (l = n), (n = M)),
                  (M = Fe(I, n)),
                  (g = Fe(I, l)),
                  M) &&
                  g &&
                  (1 !== h.rangeCount ||
                    h.anchorNode !== M.node ||
                    h.anchorOffset !== M.offset ||
                    h.focusNode !== g.node ||
                    h.focusOffset !== g.offset) &&
                  ((N = N.createRange()).setStart(M.node, M.offset),
                  h.removeAllRanges(),
                  l < n ? (h.addRange(N), h.extend(g.node, g.offset)) : (N.setEnd(g.node, g.offset), h.addRange(N)))),
              (N = []);
            for (h = I; (h = h.parentNode); )
              1 === h.nodeType &&
                N.push({
                  element: h,
                  left: h.scrollLeft,
                  top: h.scrollTop
                });
            for ("function" == typeof I.focus && I.focus(), I = 0; I < N.length; I++)
              ((h = N[I]).element.scrollLeft = h.left), (h.element.scrollTop = h.top);
          }
          (me = !!tr), (or = tr = null), (t.current = e), (O = a);
          do {
            try {
              for (I = t; null !== O; ) {
                var N,
                  j,
                  L,
                  C = O.effectTag;
                36 & C && Ti(I, O.alternate, O),
                  128 & C &&
                    ((N = void 0), null !== (j = O.ref)) &&
                    ((L = O.stateNode), O.tag, (N = L), "function" == typeof j ? j(N) : (j.current = N)),
                  (O = O.nextEffect);
              }
            } catch (t) {
              if (null === O) throw Error(y(330));
              Hn(O, t), (O = O.nextEffect);
            }
          } while (null !== O);
          (O = null), d1(), (E = i);
        } else t.current = e;
        if (gn) (gn = !1), (un = t), (cn = o);
        else for (O = a; null !== O; ) (o = O.nextEffect), (O.nextEffect = null), (O = o);
        if (
          (0 === (o = t.firstPendingTime) && (Mn = null),
          1073741823 === o ? (t === An ? sn++ : ((sn = 0), (An = t))) : (sn = 0),
          "function" == typeof Fn && Fn(e.stateNode, r),
          Y(t),
          nn)
        )
          throw ((nn = !1), (t = ln), (ln = null), t);
        (E & Gi) === m && f();
      }
      return null;
    }
    function _n() {
      for (; null !== O; ) {
        var t = O.effectTag;
        0 != (256 & t) && Ci(O.alternate, O),
          0 == (512 & t) ||
            gn ||
            ((gn = !0),
            I1(97, function () {
              return Un(), null;
            })),
          (O = O.nextEffect);
      }
    }
    function Un() {
      var t;
      if (90 !== cn) return (t = 97 < cn ? 97 : cn), (cn = 90), h1(t, Qn);
    }
    function Qn() {
      if (null === un) return !1;
      var o = un;
      if (((un = null), (E & (v | Pi)) !== m)) throw Error(y(331));
      var t = E;
      for (E |= Pi, o = o.current.firstEffect; null !== o; ) {
        try {
          var e = o;
          if (0 != (512 & e.effectTag))
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                yi(5, e), fi(5, e);
            }
        } catch (t) {
          if (null === o) throw Error(y(330));
          Hn(o, t);
        }
        (e = o.nextEffect), (o.nextEffect = null), (o = e);
      }
      return (E = t), f(), !0;
    }
    function Zn(t, o, e) {
      Y1(t, (o = _i(t, (o = xi(e, o)), 1073741823))), null !== (t = hn(t, 1073741823)) && Y(t);
    }
    function Hn(t, o) {
      if (3 === t.tag) Zn(t, t, o);
      else
        for (var e = t.return; null !== e; ) {
          if (3 === e.tag) {
            Zn(e, t, o);
            break;
          }
          if (1 === e.tag) {
            var r = e.stateNode;
            if (
              "function" == typeof e.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch && (null === Mn || !Mn.has(r)))
            ) {
              Y1(e, (t = Ui(e, (t = xi(o, t)), 1073741823))), null !== (e = hn(e, 1073741823)) && Y(e);
              break;
            }
          }
          e = e.return;
        }
    }
    function Gn(t, o, e) {
      var r = t.pingCache;
      null !== r && r.delete(o),
        b === t && S === e
          ? k === qi || (k === Vi && 1073741823 === Ki && w() - rn < an)
            ? fn(t, S)
            : (en = !0)
          : !il(t, e) || (0 !== (o = t.lastPingedTime) && o < e) || ((t.lastPingedTime = e), Y(t));
    }
    function Pn(t, o) {
      var e = t.stateNode;
      null !== e && e.delete(o), null !== (t = hn(t, (o = (o = 0) === o ? Dn((o = wn()), t, null) : o))) && Y(t);
    }
    var Wn = function (t, o, e) {
        var r = o.expirationTime;
        if (null !== t) {
          var a = o.pendingProps;
          if (t.memoizedProps !== a || A.current) Ja = !0;
          else {
            if (r < e) {
              switch (((Ja = !1), o.tag)) {
                case 3:
                  ii(o), qa();
                  break;

                case 5:
                  if ((la(o), 4 & o.mode && 1 !== e && a.hidden)) return (o.expirationTime = o.childExpirationTime = 1), null;
                  break;

                case 1:
                  x(o.type) && K0(o);
                  break;

                case 4:
                  ia(o, o.stateNode.containerInfo);
                  break;

                case 10:
                  (r = o.memoizedProps.value), (a = o.type._context), d(C1, a._currentValue), (a._currentValue = r);
                  break;

                case 13:
                  if (null !== o.memoizedState)
                    return 0 !== (r = o.child.childExpirationTime) && e <= r
                      ? li(t, o, e)
                      : (d(j, 1 & j.current), null !== (o = ci(t, o, e)) ? o.sibling : null);
                  d(j, 1 & j.current);
                  break;

                case 19:
                  if (((r = o.childExpirationTime >= e), 0 != (64 & t.effectTag))) {
                    if (r) return ui(t, o, e);
                    o.effectTag |= 64;
                  }
                  if ((null !== (a = o.memoizedState) && ((a.rendering = null), (a.tail = null)), d(j, j.current), !r)) return null;
              }
              return ci(t, o, e);
            }
            Ja = !1;
          }
        } else Ja = !1;
        switch (((o.expirationTime = 0), o.tag)) {
          case 2:
            r = o.type;
            return (
              null !== t && ((t.alternate = null), (o.alternate = null), (o.effectTag |= 2)),
              (t = o.pendingProps),
              (a = V0(o, s.current)),
              b1(o, e),
              (a = xa(null, o, r, t, a, e)),
              (o.effectTag |= 1),
              (o =
                "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof
                  ? ((o.tag = 1),
                    (o.memoizedState = null),
                    (o.updateQueue = null),
                    x(r) ? ((i = !0), K0(o)) : (i = !1),
                    (o.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                    S1(o),
                    "function" == typeof (M = r.getDerivedStateFromProps) && H1(o, r, M, t),
                    (a.updater = G1),
                    R1(((o.stateNode = a)._reactInternalFiber = o), r, t, e),
                    ai(null, o, r, !0, i, e))
                  : ((o.tag = 0), I(null, o, a, e), o.child))
            );

          case 16:
            t: {
              if (
                ((a = o.elementType),
                null !== t && ((t.alternate = null), (o.alternate = null), (o.effectTag |= 2)),
                (t = o.pendingProps),
                Rt(a),
                1 !== a._status)
              )
                throw a._result;
              switch (((a = a._result), (o.type = a), (i = o.tag = Kn(a)), (t = p(a, t)), i)) {
                case 0:
                  o = ei(null, o, a, t, e);
                  break t;

                case 1:
                  o = ri(null, o, a, t, e);
                  break t;

                case 11:
                  o = Ka(null, o, a, t, e);
                  break t;

                case 14:
                  o = $a(null, o, a, p(a.type, t), r, e);
                  break t;
              }
              throw Error(y(306, a, ""));
            }
            return o;

          case 0:
            return (r = o.type), (a = o.pendingProps), ei(t, o, r, (a = o.elementType === r ? a : p(r, a)), e);

          case 1:
            return (r = o.type), (a = o.pendingProps), ri(t, o, r, (a = o.elementType === r ? a : p(r, a)), e);

          case 3:
            if ((ii(o), (r = o.updateQueue), null === t || null === r)) throw Error(y(282));
            if (
              ((r = o.pendingProps),
              (a = null !== (a = o.memoizedState) ? a.element : null),
              k1(t, o),
              _1(o, r, null, e),
              (r = o.memoizedState.element) === a)
            )
              qa(), (o = ci(t, o, e));
            else {
              if (((a = o.stateNode.hydrate) && ((Ha = nr(o.stateNode.containerInfo.firstChild)), (Za = o), (a = Ga = !0)), a))
                for (e = $1(o, null, r, e), o.child = e; e; ) (e.effectTag = (-3 & e.effectTag) | 1024), (e = e.sibling);
              else I(t, o, r, e), qa();
              o = o.child;
            }
            return o;

          case 5:
            return (
              la(o),
              null === t && Fa(o),
              (r = o.type),
              (a = o.pendingProps),
              (i = null !== t ? t.memoizedProps : null),
              (M = a.children),
              rr(r, a) ? (M = null) : null !== i && rr(r, i) && (o.effectTag |= 16),
              oi(t, o),
              (o = 4 & o.mode && 1 !== e && a.hidden ? ((o.expirationTime = o.childExpirationTime = 1), null) : (I(t, o, M, e), o.child))
            );

          case 6:
            return null === t && Fa(o), null;

          case 13:
            return li(t, o, e);

          case 4:
            return (
              ia(o, o.stateNode.containerInfo), (r = o.pendingProps), null === t ? (o.child = K1(o, null, r, e)) : I(t, o, r, e), o.child
            );

          case 11:
            return (r = o.type), (a = o.pendingProps), Ka(t, o, r, (a = o.elementType === r ? a : p(r, a)), e);

          case 7:
            return I(t, o, o.pendingProps, e), o.child;

          case 8:
          case 12:
            return I(t, o, o.pendingProps.children, e), o.child;

          case 10:
            t: {
              (r = o.type._context), (a = o.pendingProps), (M = o.memoizedProps);
              var i = a.value,
                n = o.type._context;
              if ((d(C1, n._currentValue), (n._currentValue = i), null !== M))
                if (
                  ((n = M.value),
                  0 ===
                    (i = N0(n, i) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(n, i) : 1073741823)))
                ) {
                  if (M.children === a.children && !A.current) {
                    o = ci(t, o, e);
                    break t;
                  }
                } else
                  for (null !== (n = o.child) && (n.return = o); null !== n; ) {
                    var l = n.dependencies;
                    if (null !== l)
                      for (var M = n.child, g = l.firstContext; null !== g; ) {
                        if (g.context === r && 0 != (g.observedBits & i)) {
                          1 === n.tag && (((g = O1(e, null)).tag = 2), Y1(n, g)),
                            n.expirationTime < e && (n.expirationTime = e),
                            null !== (g = n.alternate) && g.expirationTime < e && (g.expirationTime = e),
                            E1(n.return, e),
                            l.expirationTime < e && (l.expirationTime = e);
                          break;
                        }
                        g = g.next;
                      }
                    else M = 10 === n.tag && n.type === o.type ? null : n.child;
                    if (null !== M) M.return = n;
                    else
                      for (M = n; null !== M; ) {
                        if (M === o) {
                          M = null;
                          break;
                        }
                        if (null !== (n = M.sibling)) {
                          (n.return = M.return), (M = n);
                          break;
                        }
                        M = M.return;
                      }
                    n = M;
                  }
              I(t, o, a.children, e), (o = o.child);
            }
            return o;

          case 9:
            return (
              (a = o.type),
              (r = (i = o.pendingProps).children),
              b1(o, e),
              (r = r((a = h(a, i.unstable_observedBits)))),
              (o.effectTag |= 1),
              I(t, o, r, e),
              o.child
            );

          case 14:
            return (i = p((a = o.type), o.pendingProps)), $a(t, o, a, (i = p(a.type, i)), r, e);

          case 15:
            return ti(t, o, o.type, o.pendingProps, r, e);

          case 17:
            return (
              (r = o.type),
              (a = o.pendingProps),
              (a = o.elementType === r ? a : p(r, a)),
              null !== t && ((t.alternate = null), (o.alternate = null), (o.effectTag |= 2)),
              (o.tag = 1),
              x(r) ? ((t = !0), K0(o)) : (t = !1),
              b1(o, e),
              W1(o, r, a),
              R1(o, r, a, e),
              ai(null, o, r, !0, t, e)
            );

          case 19:
            return ui(t, o, e);
        }
        throw Error(y(156, o.tag));
      },
      Fn = null,
      Rn = null;
    function Vn(t) {
      if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
      var o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!o.isDisabled && o.supportsFiber)
        try {
          var e = o.inject(t);
          (Fn = function (t) {
            try {
              o.onCommitFiberRoot(e, t, void 0, 64 == (64 & t.current.effectTag));
            } catch (t) {}
          }),
            (Rn = function (t) {
              try {
                o.onCommitFiberUnmount(e, t);
              } catch (t) {}
            });
        } catch (t) {}
      return !0;
    }
    function qn(t, o, e, r) {
      (this.tag = t),
        (this.key = e),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = o),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null);
    }
    function Xn(t, o, e, r) {
      return new qn(t, o, e, r);
    }
    function Jn(t) {
      return !(!(t = t.prototype) || !t.isReactComponent);
    }
    function Kn(t) {
      if ("function" == typeof t) return Jn(t) ? 1 : 0;
      if (null != t) {
        if ((t = t.$$typeof) === Ut) return 11;
        if (t === Ht) return 14;
      }
      return 2;
    }
    function $n(t, o) {
      var e = t.alternate;
      return (
        null === e
          ? (((e = Xn(t.tag, o, t.key, t.mode)).elementType = t.elementType),
            (e.type = t.type),
            (e.stateNode = t.stateNode),
            ((e.alternate = t).alternate = e))
          : ((e.pendingProps = o), (e.effectTag = 0), (e.nextEffect = null), (e.firstEffect = null), (e.lastEffect = null)),
        (e.childExpirationTime = t.childExpirationTime),
        (e.expirationTime = t.expirationTime),
        (e.child = t.child),
        (e.memoizedProps = t.memoizedProps),
        (e.memoizedState = t.memoizedState),
        (e.updateQueue = t.updateQueue),
        (o = t.dependencies),
        (e.dependencies =
          null === o
            ? null
            : {
                expirationTime: o.expirationTime,
                firstContext: o.firstContext,
                responders: o.responders
              }),
        (e.sibling = t.sibling),
        (e.index = t.index),
        (e.ref = t.ref),
        e
      );
    }
    function tl(t, o, e, r, a, i) {
      var n = 2;
      if ("function" == typeof (r = t)) Jn(t) && (n = 1);
      else if ("string" == typeof t) n = 5;
      else
        t: switch (t) {
          case St:
            return ol(e.children, a, i, o);

          case _t:
            (n = 8), (a |= 7);
            break;

          case kt:
            (n = 8), (a |= 1);
            break;

          case Ot:
            return ((t = Xn(12, e, o, 8 | a)).elementType = Ot), (t.type = Ot), (t.expirationTime = i), t;

          case Qt:
            return ((t = Xn(13, e, o, a)).type = Qt), (t.elementType = Qt), (t.expirationTime = i), t;

          case Zt:
            return ((t = Xn(19, e, o, a)).elementType = Zt), (t.expirationTime = i), t;

          default:
            if ("object" == typeof t && null !== t)
              switch (t.$$typeof) {
                case Yt:
                  n = 10;
                  break t;

                case Bt:
                  n = 9;
                  break t;

                case Ut:
                  n = 11;
                  break t;

                case Ht:
                  n = 14;
                  break t;

                case Gt:
                  (n = 16), (r = null);
                  break t;

                case Pt:
                  n = 22;
                  break t;
              }
            throw Error(y(130, null == t ? t : typeof t, ""));
        }
      return ((o = Xn(n, e, o, a)).elementType = t), (o.type = r), (o.expirationTime = i), o;
    }
    function ol(t, o, e, r) {
      return ((t = Xn(7, t, r, o)).expirationTime = e), t;
    }
    function el(t, o, e) {
      return ((t = Xn(6, t, null, o)).expirationTime = e), t;
    }
    function rl(t, o, e) {
      return (
        ((o = Xn(4, null !== t.children ? t.children : [], t.key, o)).expirationTime = e),
        (o.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation
        }),
        o
      );
    }
    function al(t, o, e) {
      (this.tag = o),
        (this.current = null),
        (this.containerInfo = t),
        (this.pingCache = this.pendingChildren = null),
        (this.finishedExpirationTime = 0),
        (this.finishedWork = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = e),
        (this.callbackNode = null),
        (this.callbackPriority = 90),
        (this.lastExpiredTime =
          this.lastPingedTime =
          this.nextKnownPendingLevel =
          this.lastSuspendedTime =
          this.firstSuspendedTime =
          this.firstPendingTime =
            0);
    }
    function il(t, o) {
      var e = t.firstSuspendedTime;
      return (t = t.lastSuspendedTime), 0 !== e && o <= e && t <= o;
    }
    function nl(t, o) {
      var e = t.firstSuspendedTime,
        r = t.lastSuspendedTime;
      e < o && (t.firstSuspendedTime = o),
        (o < r || 0 === e) && (t.lastSuspendedTime = o),
        o <= t.lastPingedTime && (t.lastPingedTime = 0),
        o <= t.lastExpiredTime && (t.lastExpiredTime = 0);
    }
    function ll(t, o) {
      o > t.firstPendingTime && (t.firstPendingTime = o);
      var e = t.firstSuspendedTime;
      0 !== e &&
        (e <= o
          ? (t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0)
          : o >= t.lastSuspendedTime && (t.lastSuspendedTime = o + 1),
        o > t.nextKnownPendingLevel) &&
        (t.nextKnownPendingLevel = o);
    }
    function Ml(t, o) {
      var e = t.lastExpiredTime;
      (0 === e || o < e) && (t.lastExpiredTime = o);
    }
    function gl(t, o, e, r) {
      var a = o.current,
        i = wn(),
        n = Q1.suspense,
        i = Dn(i, a, n);
      t: if (e) {
        o: {
          if (ko((e = e._reactInternalFiber)) !== e || 1 !== e.tag) throw Error(y(170));
          var l = e;
          do {
            switch (l.tag) {
              case 3:
                l = l.stateNode.context;
                break o;

              case 1:
                if (x(l.type)) {
                  l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                  break o;
                }
            }
          } while (null !== (l = l.return));
          throw Error(y(171));
        }
        if (1 === e.tag) {
          var M = e.type;
          if (x(M)) {
            e = J0(e, M, l);
            break t;
          }
        }
        e = l;
      } else e = F0;
      return (
        null === o.context ? (o.context = e) : (o.pendingContext = e),
        ((o = O1(i, n)).payload = {
          element: t
        }),
        null !== (r = void 0 === r ? null : r) && (o.callback = r),
        Y1(a, o),
        pn(a, i),
        i
      );
    }
    function ul(t) {
      return (t = t.current).child ? (t.child.tag, t.child.stateNode) : null;
    }
    function cl(t, o) {
      null !== (t = t.memoizedState) && null !== t.dehydrated && t.retryTime < o && (t.retryTime = o);
    }
    function dl(t, o) {
      cl(t, o), (t = t.alternate) && cl(t, o);
    }
    function sl(t, o, e) {
      var r = new al(t, o, (e = null != e && !0 === e.hydrate)),
        a = Xn(3, null, null, 2 === o ? 7 : 1 === o ? 3 : 0);
      ((r.current = a).stateNode = r),
        S1(a),
        (t[ur] = r.current),
        e && 0 !== o && ge(t, 9 === t.nodeType ? t : t.ownerDocument),
        (this._internalRoot = r);
    }
    function Al(t) {
      return !(
        !t ||
        (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
      );
    }
    function xl(t, o) {
      if (
        !(o = o
          ? o
          : !(
              !(o = t ? (9 === t.nodeType ? t.documentElement : t.firstChild) : null) ||
              1 !== o.nodeType ||
              !o.hasAttribute("data-reactroot")
            ))
      )
        for (var e; (e = t.lastChild); ) t.removeChild(e);
      return new sl(
        t,
        0,
        o
          ? {
              hydrate: !0
            }
          : void 0
      );
    }
    function wl(t, o, e, r, a) {
      var i,
        n,
        l,
        M = e._reactRootContainer;
      return (
        M
          ? ((l = M._internalRoot),
            "function" == typeof a &&
              ((i = a),
              (a = function () {
                var t = ul(l);
                i.call(t);
              })),
            gl(o, l, t, a))
          : ((l = (M = e._reactRootContainer = xl(e, r))._internalRoot),
            "function" == typeof a &&
              ((n = a),
              (a = function () {
                var t = ul(l);
                n.call(t);
              })),
            yn(function () {
              gl(o, l, t, a);
            })),
        ul(l)
      );
    }
    function Dl(t, o, e) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: zt,
        key: null == r ? null : "" + r,
        children: t,
        containerInfo: o,
        implementation: e
      };
    }
    function pl(t, o) {
      var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (Al(o)) return Dl(t, o, null, e);
      throw Error(y(200));
    }
    (sl.prototype.render = function (t) {
      gl(t, this._internalRoot, null, null);
    }),
      (sl.prototype.unmount = function () {
        var t = this._internalRoot,
          o = t.containerInfo;
        gl(null, t, null, function () {
          o[ur] = null;
        });
      }),
      (Jo = function (t) {
        var o;
        13 === t.tag && (pn(t, (o = L1(wn(), 150, 100))), dl(t, o));
      }),
      (Ko = function (t) {
        13 === t.tag && (pn(t, 3), dl(t, 3));
      }),
      ($o = function (t) {
        var o;
        13 === t.tag && (pn(t, (o = Dn((o = wn()), t, null))), dl(t, o));
      }),
      (nt = function (t, o, e) {
        switch (o) {
          case "input":
            if ((ao(t, e), (o = e.name), "radio" === e.type && null != o)) {
              for (e = t; e.parentNode; ) e = e.parentNode;
              for (e = e.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), o = 0; o < e.length; o++) {
                var r = e[o];
                if (r !== t && r.form === t.form) {
                  var a = Ar(r);
                  if (!a) throw Error(y(90));
                  to(r), ao(r, a);
                }
              }
            }
            break;

          case "textarea":
            so(t, e);
            break;

          case "select":
            null != (o = e.value) && go(t, !!e.multiple, o, !1);
        }
      }),
      (dt = Cn),
      (st = function (t, o, e, r, a) {
        var i = E;
        E |= 4;
        try {
          return h1(98, t.bind(null, o, e, r, a));
        } finally {
          (E = i) === m && f();
        }
      });
    var hl,
      xt = function (t, o) {
        var e = E;
        E |= 2;
        try {
          return t(o);
        } finally {
          (E = e) === m && f();
        }
      },
      h0 = {
        Events: [
          dr,
          sr,
          Ar,
          at,
          ot,
          Nr,
          function (t) {
            Qo(t, Ir);
          },
          ut,
          ct,
          ze,
          Go,
          Un,
          {
            current: !(At = function () {
              (E & (1 | v | Pi)) === m && (Ln(), Un());
            })
          }
        ]
      };
    (hl = (l0 = {
      findFiberByHostInstance: cr,
      bundleType: 0,
      version: "16.13.1",
      rendererPackageName: "react-dom"
    }).findFiberByHostInstance),
      Vn(
        D({}, l0, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: o.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (t) {
            return null === (t = _o(t)) ? null : t.stateNode;
          },
          findFiberByHostInstance: function (t) {
            return hl ? hl(t) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null
        })
      ),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0),
      (t.createPortal = pl),
      (t.findDOMNode = function (t) {
        if (null == t) return null;
        if (1 !== t.nodeType) {
          var o = t._reactInternalFiber;
          if (void 0 === o) {
            if ("function" == typeof t.render) throw Error(y(188));
            throw Error(y(268, Object.keys(t)));
          }
          t = null === (t = _o(o)) ? null : t.stateNode;
        }
        return t;
      }),
      (t.flushSync = function (t, o) {
        if ((E & (v | Pi)) !== m) throw Error(y(187));
        var e = E;
        E |= 1;
        try {
          return h1(99, t.bind(null, o));
        } finally {
          (E = e), f();
        }
      }),
      (t.hydrate = function (t, o, e) {
        if (Al(o)) return wl(null, t, o, !0, e);
        throw Error(y(200));
      }),
      (t.render = function (t, o, e) {
        if (Al(o)) return wl(null, t, o, !1, e);
        throw Error(y(200));
      }),
      (t.unmountComponentAtNode = function (t) {
        if (Al(t))
          return (
            !!t._reactRootContainer &&
            (yn(function () {
              wl(null, null, t, !1, function () {
                (t._reactRootContainer = null), (t[ur] = null);
              });
            }),
            !0)
          );
        throw Error(y(40));
      }),
      (t.unstable_batchedUpdates = Cn),
      (t.unstable_createPortal = function (t, o) {
        return pl(t, o, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
      }),
      (t.unstable_renderSubtreeIntoContainer = function (t, o, e, r) {
        if (!Al(e)) throw Error(y(200));
        if (null == t || void 0 === t._reactInternalFiber) throw Error(y(38));
        return wl(t, o, e, !1, r);
      }),
      (t.version = "16.13.1");
  },
  function (t, o, e) {
    "use strict";
    t.exports = e(27);
  },
  function (Y, l, B) {
    "use strict";
    /** @license React v0.19.1
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var i, M, g, o, e, r, t, a, n, u, c, d, s, A, x, w, D, p, h, I;
    function N(t, o) {
      var e = t.length;
      for (t.push(o); ; ) {
        var r = (e - 1) >>> 1,
          a = t[r];
        if (!(void 0 !== a && 0 < C(a, o))) break;
        (t[r] = o), (t[e] = a), (e = r);
      }
    }
    function j(t) {
      return void 0 === (t = t[0]) ? null : t;
    }
    function L(t) {
      var o = t[0];
      if (void 0 === o) return null;
      var e = t.pop();
      if (e !== o) {
        t[0] = e;
        for (var r = 0, a = t.length; r < a; ) {
          var i = 2 * (r + 1) - 1,
            n = t[i],
            l = i + 1,
            M = t[l];
          if (void 0 !== n && C(n, e) < 0) r = void 0 !== M && C(M, n) < 0 ? ((t[r] = M), (t[l] = e), l) : ((t[r] = n), (t[i] = e), i);
          else {
            if (!(void 0 !== M && C(M, e) < 0)) break;
            (t[r] = M), (t[l] = e), (r = l);
          }
        }
      }
      return o;
    }
    function C(t, o) {
      var e = t.sortIndex - o.sortIndex;
      return 0 !== e ? e : t.id - o.id;
    }
    "undefined" == typeof window || "function" != typeof MessageChannel
      ? ((e = o = null),
        (r = function () {
          if (null !== o)
            try {
              var t = l.unstable_now();
              o(!0, t), (o = null);
            } catch (t) {
              throw (setTimeout(r, 0), t);
            }
        }),
        (t = Date.now()),
        (l.unstable_now = function () {
          return Date.now() - t;
        }),
        (i = function (t) {
          null !== o ? setTimeout(i, 0, t) : ((o = t), setTimeout(r, 0));
        }),
        (M = function (t, o) {
          e = setTimeout(t, o);
        }),
        (g = function () {
          clearTimeout(e);
        }),
        (p = function () {
          return !1;
        }),
        (h = l.unstable_forceFrameRate = function () {}))
      : ((a = window.performance),
        (n = window.Date),
        (u = window.setTimeout),
        (c = window.clearTimeout),
        "undefined" != typeof console &&
          ((O = window.cancelAnimationFrame),
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            ),
          "function" != typeof O) &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ),
        "object" == typeof a && "function" == typeof a.now
          ? (l.unstable_now = function () {
              return a.now();
            })
          : ((d = n.now()),
            (l.unstable_now = function () {
              return n.now() - d;
            })),
        (s = !1),
        (A = null),
        (x = -1),
        (w = 5),
        (D = 0),
        (p = function () {
          return l.unstable_now() >= D;
        }),
        (h = function () {}),
        (l.unstable_forceFrameRate = function (t) {
          t < 0 || 125 < t
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
              )
            : (w = 0 < t ? Math.floor(1e3 / t) : 5);
        }),
        (O = new MessageChannel()),
        (I = O.port2),
        (O.port1.onmessage = function () {
          if (null !== A) {
            var t = l.unstable_now();
            D = t + w;
            try {
              A(!0, t) ? I.postMessage(null) : ((s = !1), (A = null));
            } catch (t) {
              throw (I.postMessage(null), t);
            }
          } else s = !1;
        }),
        (i = function (t) {
          (A = t), s || ((s = !0), I.postMessage(null));
        }),
        (M = function (t, o) {
          x = u(function () {
            t(l.unstable_now());
          }, o);
        }),
        (g = function () {
          c(x), (x = -1);
        }));
    var y = [],
      f = [],
      _ = 1,
      T = null,
      m = 3,
      v = !1,
      E = !1,
      b = !1;
    function z(t) {
      for (var o = j(f); null !== o; ) {
        if (null === o.callback) L(f);
        else {
          if (!(o.startTime <= t)) break;
          L(f), (o.sortIndex = o.expirationTime), N(y, o);
        }
        o = j(f);
      }
    }
    function S(t) {
      var o;
      (b = !1), z(t), E || (null !== j(y) ? ((E = !0), i(k)) : null !== (o = j(f)) && M(S, o.startTime - t));
    }
    function k(t, o) {
      (E = !1), b && ((b = !1), g()), (v = !0);
      var e = m;
      try {
        for (z(o), T = j(y); null !== T && (!(T.expirationTime > o) || (t && !p())); ) {
          var r,
            a = T.callback;
          null !== a
            ? ((T.callback = null),
              (m = T.priorityLevel),
              (r = a(T.expirationTime <= o)),
              (o = l.unstable_now()),
              "function" == typeof r ? (T.callback = r) : T === j(y) && L(y),
              z(o))
            : L(y),
            (T = j(y));
        }
        var i,
          n = null !== T || (null !== (i = j(f)) && M(S, i.startTime - o), !1);
        return n;
      } finally {
        (T = null), (m = e), (v = !1);
      }
    }
    function U(t) {
      switch (t) {
        case 1:
          return -1;

        case 2:
          return 250;

        case 5:
          return 1073741823;

        case 4:
          return 1e4;

        default:
          return 5e3;
      }
    }
    var O = h;
    (l.unstable_IdlePriority = 5),
      (l.unstable_ImmediatePriority = 1),
      (l.unstable_LowPriority = 4),
      (l.unstable_NormalPriority = 3),
      (l.unstable_Profiling = null),
      (l.unstable_UserBlockingPriority = 2),
      (l.unstable_cancelCallback = function (t) {
        t.callback = null;
      }),
      (l.unstable_continueExecution = function () {
        E || v || ((E = !0), i(k));
      }),
      (l.unstable_getCurrentPriorityLevel = function () {
        return m;
      }),
      (l.unstable_getFirstCallbackNode = function () {
        return j(y);
      }),
      (l.unstable_next = function (t) {
        switch (m) {
          case 1:
          case 2:
          case 3:
            var o = 3;
            break;

          default:
            o = m;
        }
        var e = m;
        m = o;
        try {
          return t();
        } finally {
          m = e;
        }
      }),
      (l.unstable_pauseExecution = function () {}),
      (l.unstable_requestPaint = O),
      (l.unstable_runWithPriority = function (t, o) {
        switch (t) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;

          default:
            t = 3;
        }
        var e = m;
        m = t;
        try {
          return o();
        } finally {
          m = e;
        }
      }),
      (l.unstable_scheduleCallback = function (t, o, e) {
        var r,
          a = l.unstable_now();
        return (
          "object" == typeof e && null !== e
            ? ((r = "number" == typeof (r = e.delay) && 0 < r ? a + r : a), (e = "number" == typeof e.timeout ? e.timeout : U(t)))
            : ((e = U(t)), (r = a)),
          (t = {
            id: _++,
            callback: o,
            priorityLevel: t,
            startTime: r,
            expirationTime: (e = r + e),
            sortIndex: -1
          }),
          a < r
            ? ((t.sortIndex = r), N(f, t), null === j(y) && t === j(f) && (b ? g() : (b = !0), M(S, r - a)))
            : ((t.sortIndex = e), N(y, t), E || v || ((E = !0), i(k))),
          t
        );
      }),
      (l.unstable_shouldYield = function () {
        var t = l.unstable_now(),
          o = (z(t), j(y));
        return (
          (o !== T && null !== T && null !== o && null !== o.callback && o.startTime <= t && o.expirationTime < T.expirationTime) || p()
        );
      }),
      (l.unstable_wrapCallback = function (o) {
        var e = m;
        return function () {
          var t = m;
          m = e;
          try {
            return o.apply(this, arguments);
          } finally {
            m = t;
          }
        };
      });
  },
  ,
  ,
  function (t, o, e) {
    "use strict";
    e.d(o, "b", function () {
      return w;
    }),
      e.d(o, "c", function () {
        return D;
      }),
      e.d(o, "a", function () {
        return h;
      });
    var r = e(35);
    let a,
      i,
      n,
      l,
      M,
      g,
      u,
      c,
      d,
      s = !1,
      A;
    const x = () => {
        window.setTimeout(() => {
          const t = Object(r.b)();
          A !== t &&
            (!(A = t) || t.length < 2
              ? window.postMessage({
                  action: "DESMOS_FRAME_PREDICTION_DATA",
                  results: [],
                  search: ""
                })
              : window.parent.postMessage(
                  {
                    action: "CORE_DESMOS_GET_PREDICTION",
                    search: t
                  },
                  "*"
                ));
        });
      },
      w = (t, o) => {
        const e = Array(t.length).fill("Backspace").join(" ");
        n.keystroke(e),
          o.prekeystroke && 0 < o.prekeystroke.length && n.keystroke(o.prekeystroke),
          o.cmd && 0 < o.cmd.length ? n.cmd(o.cmd) : o.latex && 0 < o.latex.length && n.write(o.latex),
          o.keystroke && 0 < o.keystroke.length && n.keystroke(o.keystroke),
          n.focus();
      },
      D = (t) => {
        s = t;
      },
      p = () => {
        a &&
          (i.removeEventListener("keydown", l, !0),
          a.removeEventListener("click", c),
          i.removeEventListener("input", M),
          i.removeEventListener("blur", u, !0),
          i.removeEventListener("focus", g),
          i.removeEventListener("touchstart", d));
      },
      h = (t) => {
        if (t) {
          p();
          const o = t.mq;
          (n = o),
            (a = o.__controller.container),
            (i = a.querySelector(".dcg-mq-textarea > textarea")),
            (l = (t) => {
              if ("Shift" !== t.key && "Control" !== t.key && "Alt" !== t.key) {
                const o = window.equatioOptions.disabled,
                  e = !!document.querySelector(".equatio-prediction-wrapper");
                if ("Escape" === t.key)
                  window.postMessage({
                    action: "DESMOS_FRAME_SHOW_AUTOCOMPLETE",
                    show: !1
                  }),
                    t.preventDefault(),
                    t.stopImmediatePropagation();
                else if ("ArrowUp" === t.key)
                  window.postMessage({
                    action: "DESMOS_FRAME_PREDICTION_MOVE_SELECTION",
                    amount: -1
                  }),
                    t.preventDefault(),
                    !o && t.stopImmediatePropagation && e && t.stopImmediatePropagation();
                else if ("ArrowDown" === t.key)
                  window.postMessage({
                    action: "DESMOS_FRAME_PREDICTION_MOVE_SELECTION",
                    amount: 1
                  }),
                    t.preventDefault(),
                    !o && t.stopImmediatePropagation && e && t.stopImmediatePropagation();
                else {
                  if ("Enter" === t.key)
                    return (
                      !e ||
                      (window.postMessage({
                        action: "DESMOS_FRAME_PREDICTION_INSERT_SELECTION"
                      }),
                      t.stopImmediatePropagation(),
                      t.preventDefault(),
                      !1)
                    );
                  if ("Tab" !== t.key)
                    return (
                      window.postMessage({
                        action: "DESMOS_FRAME_SHOW_AUTOCOMPLETE",
                        show: !0
                      }),
                      x(),
                      !0
                    );
                  if (!t.shiftKey) {
                    const r = document.querySelector(".equatio-prediction-button");
                    r && 0 < r.offsetHeight && (r.focus(), t.preventDefault());
                  }
                }
              }
              return !1;
            }),
            (M = () => {
              const t = Object(r.a)();
              t && t.scrollIntoViewIfNeeded && t.scrollIntoViewIfNeeded(), x();
            }),
            (g = () => {
              const t = window.equatioOptions.disabled;
              (s = !1),
                window.postMessage({
                  action: "DESMOS_FRAME_SHOW_AUTOCOMPLETE",
                  show: !t
                }),
                x();
            }),
            (u = (t) => (
              (t.relatedTarget && t.relatedTarget.matches(".equatio-prediction-button")) ||
                (window.setTimeout(() => {
                  let t = document.activeElement;
                  t && t.shadowRoot && (t = t.shadowRoot.activeElement),
                    s ||
                      (t && t.closest(".equatio-prediction-button")) ||
                      window.postMessage({
                        action: "DESMOS_FRAME_SHOW_AUTOCOMPLETE",
                        show: !1
                      });
                }),
                t.preventDefault()),
              !1
            )),
            (c = () => {
              const t = window.equatioOptions.disabled;
              window.postMessage({
                action: "DESMOS_FRAME_SHOW_AUTOCOMPLETE",
                show: !t
              }),
                x();
            }),
            (d = () => {
              i && i.focus();
            }),
            a.addEventListener("touchstart", d),
            i.addEventListener("keydown", l, !0),
            a.addEventListener("click", c),
            i.addEventListener("input", M),
            i.addEventListener("blur", u, !0),
            i.addEventListener("focus", g);
        }
      };
  },
  ,
  ,
  ,
  function (t, o, e) {
    "use strict";
    o.a = (t = "en") => {
      switch (t.toLowerCase()) {
        case "enus":
          return "en";

        case "engb":
          return "en-GB";

        case "es":
          return "es-ES";

        case "fr":
          return "fr";

        case "it":
          return "it";

        case "nn":
        case "nb":
          return "no";

        case "sv":
          return "sv-SE";

        default:
          return "en";
      }
    };
  },
  function (t, o, e) {
    "use strict";
    e.d(o, "a", function () {
      return l;
    }),
      e.d(o, "b", function () {
        return r;
      });
    const i = (t) => {
        if (null == t) return null;
        let o = t;
        for (; null == o.previousSibling; ) if (null == (o = o.parentNode) || (o.matches && o.matches("td"))) return null;
        if (null == o.previousSibling) return null;
        for (o = o.previousSibling; null != o.lastChild && 1 === o.lastChild.nodeType; ) o = o.lastChild;
        return o;
      },
      n = (o) => {
        const e = o.length;
        for (let t = e - 1; 0 <= t; --t) {
          const r = o.charCodeAt(t);
          if (!(32 === r || 92 === r || (65 <= r && r <= 90) || (97 <= r && r <= 122) || (192 <= r && r <= 687)) || 215 === r || 247 === r)
            return 92 === r ? "" : o.substring(t + 1);
        }
        return o;
      },
      l = () => Array.from(document.querySelectorAll(".dcg-mq-cursor")).filter((t) => 0 < t.offsetWidth)[0],
      r = (t = l()) => {
        if (!t) return "";
        let o = "",
          e = t.previousSibling;
        for (
          ;
          !(
            null == e ||
            "DIV" === e.tagName ||
            "TEXTAREA" === e.tagName ||
            (e.classList && e.classList.contains("mq-text-mode")) ||
            (e.parentElement && e.parentElement.classList && e.parentElement.classList.contains("mq-text-mode")) ||
            (e.classList && e.classList.contains("dcg-mq-non-leaf"))
          );

        ) {
          let t = "";
          if (
            (null !== e && 3 === e.nodeType && null !== e.nodeValue && 0 < e.nodeValue.length
              ? (t = e.nodeValue)
              : e &&
                e.firstChild &&
                3 === e.firstChild.nodeType &&
                null !== e.firstChild.nodeValue &&
                0 < e.firstChild.nodeValue.length &&
                (t = e.firstChild.nodeValue),
            null !== t && 0 < t.length)
          ) {
            const a = t.charCodeAt(0);
            if (
              !(32 === a || 92 === a || (65 <= a && a <= 90) || (97 <= a && a <= 122) || (192 <= a && a <= 687)) ||
              215 === a ||
              247 === a
            )
              break;
            o = t + o;
          }
          e = i(e);
        }
        let r = o.toLowerCase();
        return (r = n(r));
      };
  },
  ,
  function (t, o) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol viewBox="0 0 24 24" id="equatio-svg-academy-back-button"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor" /></symbol><symbol viewBox="0 0 24 24" id="equatio-svg-academy-icon"><path d="M0 0h24v24H0z" fill="none" /><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor" /></symbol><symbol viewBox="0 0 560 560" id="equatio-svg-accessibility-playback-pause"><path d="M502.9 528.4H349.6c-11 0-20-8-20-17.9v-457c0-9.9 9-17.9 20-17.9h153.3c11 0 20 8 20 17.9v457c0 9.9-8.9 17.9-20 17.9zm-300 0H49.6c-11 0-20-8-20-17.9v-457c0-9.9 9-17.9 20-17.9h153.3c11 0 20 8 20 17.9v457c0 9.9-8.9 17.9-20 17.9z" style="fill:#494949;stroke-width:10;stroke:#494949" /></symbol><symbol viewBox="0 0 560 560" id="equatio-svg-accessibility-playback-play"><path d="M179 48.7c-17.7-17.3-32.1-11.3-32.1 13.5v440.2c0 24.8 14.3 30.7 31.8 13.2l203.9-203.9c17.5-17.5 17.4-46-.3-63.4L179 48.7z" style="fill:currentColor;stroke:currentColor" /><path d="M179 48.7c-17.7-17.3-32.1-11.3-32.1 13.5v440.2c0 24.8 14.3 30.7 31.8 13.2l203.9-203.9c17.5-17.5 17.4-46-.3-63.4L179 48.7z" style="fill:currentColor;stroke-width:10;stroke:currentColor" /></symbol><symbol viewBox="0 0 560 560" id="equatio-svg-accessibility-playback-stop"><path d="M505.1 528.4H47.9c-9.9 0-17.9-8-17.9-17.9V53.3c0-9.9 8-17.9 17.9-17.9h457.2c9.9 0 17.9 8 17.9 17.9v457.2c0 9.9-8 17.9-17.9 17.9z" style="fill:currentColor;stroke-width:10;stroke:currentColor" /></symbol><symbol viewBox="0 0 24 24" class="equatio-copy-button__icon" id="equatio-svg-action-button-copy"><path fill="none" d="M0 0h24v24H0z" /><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" fill="currentColor" /></symbol><symbol viewBox="0 0 16.566 16.566" id="equatio-svg-calculate"><path data-name="Path 3851" d="M13.805 0H2.761A2.761 2.761 0 0 0 0 2.761v11.044a2.761 2.761 0 0 0 2.761 2.761h11.044a2.761 2.761 0 0 0 2.761-2.761V2.761A2.761 2.761 0 0 0 13.805 0Zm1.657 2.761v4.97H8.835V1.1h4.97a1.657 1.657 0 0 1 1.657 1.661ZM2.761 1.1h4.97v6.631H1.1v-4.97A1.657 1.657 0 0 1 2.761 1.1ZM1.1 13.805v-4.97h6.631v6.627h-4.97A1.657 1.657 0 0 1 1.1 13.805Zm12.7 1.657H8.835V8.835h6.627v4.97a1.657 1.657 0 0 1-1.657 1.657ZM9.94 4.418a.552.552 0 0 1 .552-.552h3.313a.552.552 0 0 1 0 1.1h-3.313a.552.552 0 0 1-.552-.548Zm-4.026 8.443a.554.554 0 1 1-.784.784l-.712-.718-.712.718a.554.554 0 1 1-.784-.784l.718-.712-.718-.712a.554.554 0 1 1 .784-.784l.712.718.712-.718a.554.554 0 0 1 .784.784l-.718.712Zm4.622-1.607a.552.552 0 0 1-.044-.21.751.751 0 0 1 0-.11.353.353 0 0 1 .033-.1.42.42 0 0 1 .05-.1l.066-.083a.639.639 0 0 1 .514-.16l.1.033a.42.42 0 0 1 .1.05l.083.066.066.083a.42.42 0 0 1 .05.1.353.353 0 0 1 .033.1.751.751 0 0 1 0 .11.6.6 0 0 1-.16.392l-.083.066a.42.42 0 0 1-.1.05l-.088.055h-.11a.552.552 0 0 1-.21-.044.635.635 0 0 1-.182-.116.552.552 0 0 1-.116-.182Zm3.225 1.789a.519.519 0 0 1 0 .42.5.5 0 0 1-.3.3.552.552 0 0 1-.21.044.58.58 0 0 1-.392-.16.552.552 0 0 1-.116-.182.519.519 0 0 1 0-.42.635.635 0 0 1 .116-.182.571.571 0 0 1 .784 0 .635.635 0 0 1 .116.182Zm-.116-2.391a.552.552 0 0 1 0 .784l-2.209 2.209a.554.554 0 1 1-.784-.784l2.209-2.209a.552.552 0 0 1 .784 0ZM2.209 4.418a.552.552 0 0 1 .552-.552h1.1v-1.1a.552.552 0 1 1 1.1 0v1.1h1.1a.552.552 0 0 1 0 1.1H4.97v1.1a.552.552 0 0 1-1.1 0V4.97h-1.1a.552.552 0 0 1-.561-.552Z" /></symbol><symbol viewBox="0 0 15.204 17.887" id="equatio-svg-calculate-feature"><path data-name="Path 3814" d="M14.31 0H.894A.845.845 0 0 0 0 .894v16.1a.845.845 0 0 0 .894.894H14.31a.845.845 0 0 0 .894-.894V.894A.845.845 0 0 0 14.31 0ZM4.472 16.1H1.789v-1.79h2.683Zm0-3.577H1.789v-1.791h2.683Zm0-3.577H1.789V7.155h2.683ZM8.944 16.1H6.261v-1.79h2.683Zm0-3.577H6.261v-1.791h2.683Zm0-3.577H6.261V7.155h2.683Zm4.472 7.154h-2.684v-1.79h2.683Zm0-3.577h-2.684v-1.791h2.683Zm0-3.577h-2.684V7.155h2.683Zm0-3.577H1.789v-3.58h11.627Z" /></symbol><symbol viewBox="0 0 9.2 5.7" id="equatio-svg-chevron"><path style="fill:currentColor" d="m0 4.6 1.1 1.1 3.5-3.5 3.5 3.5 1.1-1.1L4.6 0z" /></symbol><symbol viewBox="0 0 21 24" id="equatio-svg-contextual-align-center"><path d="M21 12.5a.5.5 0 0 1-.5.5H18v1.232a.5.5 0 0 1-.8.4l-2.92-2.231a.5.5 0 0 1 0-.794l2.92-2.231a.5.5 0 0 1 .524-.052.5.5 0 0 1 .28.449V11h2.5a.5.5 0 0 1 .5.5ZM12 23a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1ZM6.722 12.4 3.8 14.629a.5.5 0 0 1-.8-.4V13H.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H3V9.77a.5.5 0 0 1 .278-.449.494.494 0 0 1 .524.052l2.92 2.227a.5.5 0 0 1 0 .794Z" fill="#666a70" /></symbol><symbol viewBox="0 0 24 24" id="equatio-svg-contextual-align-left"><path d="M24 11.5v1a.5.5 0 0 1-.5.5H21v1.231a.5.5 0 0 1-.8.4L17.277 12.4a.5.5 0 0 1 0-.794L20.2 9.372a.5.5 0 0 1 .8.4V11h2.5a.5.5 0 0 1 .5.5ZM14 0h-1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM1 4h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm8 3H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-8 9h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm8 3H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Z" fill="#666a70" /></symbol><symbol viewBox="0 0 24 24" id="equatio-svg-contextual-align-right"><path d="M12 1v22a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm3 3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm8 3h-8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-8 9h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm8 3h-8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM3.8 9.372a.5.5 0 0 0-.8.4V11H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H3v1.231a.5.5 0 0 0 .8.4L6.723 12.4a.5.5 0 0 0 0-.794Z" fill="#666a70" /></symbol><symbol viewBox="0 0 43 43" id="equatio-svg-contextual-calculate-feature"><circle data-name="Ellipse 76" cx="21.5" cy="21.5" r="21.5" fill="currentColor" /><path data-name="Path 3814" d="M29.211 11.219H13.789a.971.971 0 0 0-1.028 1.028v18.506a.971.971 0 0 0 1.028 1.028h15.422a.971.971 0 0 0 1.028-1.028V12.247a.971.971 0 0 0-1.028-1.028Zm-11.31 18.506h-3.084v-2.056h3.084Zm0-4.112h-3.084v-2.057h3.084Zm0-4.112h-3.084v-2.057h3.084Zm5.14 8.225h-3.08v-2.057h3.084Zm0-4.112h-3.08v-2.058h3.084Zm0-4.112h-3.08v-2.058h3.084Zm5.14 8.225h-3.083v-2.058h3.084Zm0-4.112h-3.083v-2.059h3.084Zm0-4.112h-3.083v-2.059h3.084Zm0-4.112H14.817v-4.116h13.365Z" fill="#666a70" /></symbol><symbol viewBox="0 0 18.059 22.827" id="equatio-svg-contextual-delete-column"><g fill="#666a70"><path d="M6.882 13.288h-4.05V9.414h2.415a7.946 7.946 0 0 1 .151-2.833H2.832V2.832h4.541v.148a7.434 7.434 0 0 1 2.832-1.825A1.18 1.18 0 0 0 9.026-.001H1.18A1.18 1.18 0 0 0 0 1.179v20.467a1.18 1.18 0 0 0 1.18 1.18h7.846a1.18 1.18 0 0 0 1.18-1.18v-5.978a7.477 7.477 0 0 1-3.324-2.38Zm.491 6.707H2.832v-3.874h4.541Z" /><path d="M12.654 2.831a5.563 5.563 0 1 0 5.4 5.561 5.485 5.485 0 0 0-5.4-5.561ZM15.496 8.8a.445.445 0 0 1-.476.406h-4.756a.445.445 0 0 1-.476-.406v-.812a.445.445 0 0 1 .476-.406h4.756a.445.445 0 0 1 .476.406Z" /></g></symbol><symbol viewBox="0 0 22.827 18.738" id="equatio-svg-contextual-delete-row"><g fill="#666a70"><path d="M21.49 0H1.337A1.337 1.337 0 0 0 0 1.337v10.448a1.337 1.337 0 0 0 1.337 1.337h2.616a7.826 7.826 0 0 1 .7-3.208H3.204V3.207h16.413v6.707h-1.45a7.826 7.826 0 0 1 .7 3.208h2.616a1.337 1.337 0 0 0 1.337-1.337V1.337A1.337 1.337 0 0 0 21.49 0Z" /><path d="M11.42 7.615a5.563 5.563 0 1 0 5.4 5.561 5.485 5.485 0 0 0-5.4-5.561Zm2.826 5.975a.445.445 0 0 1-.476.406H9.014a.445.445 0 0 1-.476-.406v-.812a.445.445 0 0 1 .476-.406h4.756a.445.445 0 0 1 .476.406Z" /></g></symbol><symbol viewBox="0 0 43 43" id="equatio-svg-contextual-icon-academy"><g data-name="Group 318"><path data-name="Path 1273" d="M21.5 0A21.5 21.5 0 1 1 0 21.5 21.5 21.5 0 0 1 21.5 0Z" fill="currentColor" /><path data-name="Path 1267" d="M8 8h27.22v27.22H8Z" fill="none" /><path data-name="Path 1268" d="M13.671 22.948v4.537l7.939 4.332 7.939-4.332v-4.537L21.61 27.28Zm7.939-11.546-12.476 6.8 12.476 6.8 10.207-5.569v7.837h2.268v-9.068Z" fill="#00b7ff" /></g></symbol><symbol viewBox="0 0 43 43" id="equatio-svg-contextual-icon-color"><g data-name="Group 306" transform="translate(-5852 1588.818)"><circle data-name="Ellipse 141" cx="21.5" cy="21.5" transform="translate(5852 -1588.818)" fill="currentColor" r="21.5" /><path data-name="Path 1266" d="m5879.553-1566.32-11.654-11.738-1.831 1.844 3.163 3.186-6.659 6.707a1.751 1.751 0 0 0 0 2.683l7.159 7.21a2.015 2.015 0 0 0 2.664 0l7.159-7.21a1.752 1.752 0 0 0-.001-2.682Zm-14.651 1.509 6.16-6.2 6.16 6.2Zm17.814 1.844s-2.664 2.851-2.664 4.528a2.664 2.664 0 1 0 5.327 0c.001-1.677-2.663-4.527-2.663-4.527Z" fill="#666a70" /></g></symbol><symbol viewBox="0 0 43 43" id="equatio-svg-contextual-icon-delete"><g data-name="Group 305" transform="translate(-5907.182 1588.818)"><circle data-name="Ellipse 4" cx="21.5" cy="21.5" transform="translate(5907.182 -1588.818)" fill="currentColor" r="21.5" /><g data-name="Group 302" fill="#666a70"><path data-name="Path 669" d="M5933.517-1571.799h-10.455a.537.537 0 0 0-.568.568v11.25a2.259 2.259 0 0 0 2.159 2.273h7.041a2.185 2.185 0 0 0 2.159-2.273v-11.25c.114-.341 0-.568-.341-.568Z" /><path data-name="Path 670" d="M5934.766-1574.185a1.049 1.049 0 0 1-1.136 1.023h-10.455a1.121 1.121 0 0 1-1.136-1.023 1.049 1.049 0 0 1 1.136-1.023h10.455a1.121 1.121 0 0 1 1.136 1.023Z" /><path data-name="Path 671" d="M5931.243-1573.958v-1.477c0-.682-1.364-1.136-2.955-1.136s-2.955.568-2.955 1.136v1.477Z" /></g></g></symbol><symbol viewBox="0 0 43 43" id="equatio-svg-contextual-icon-favourite"><g data-name="Group 602"><g data-name="Group 600"><path data-name="Path 1273" d="M21.5 0A21.5 21.5 0 1 1 0 21.5 21.5 21.5 0 0 1 21.5 0Z" fill="currentColor" /></g><path d="M22.522 16.021a.6.6 0 0 1-.918-.011c-3.363-4.16-9.209-.922-9.209 3.562 0 3.927 4.795 7.081 8.762 11.406a1.221 1.221 0 0 0 1.8 0c3.967-4.325 8.762-7.479 8.762-11.406-.003-4.484-5.668-7.727-9.197-3.551Zm1.808 9.667c-.52.5-1.048 1-1.579 1.526a.989.989 0 0 1-1.39 0 136.73 136.73 0 0 0-1.579-1.527c-2.388-2.284-4.641-4.444-4.641-6.115a2.835 2.835 0 0 1 2.683-2.7 5.081 5.081 0 0 1 3.055 1.7l.608.547a.843.843 0 0 0 1.141 0l.569-.511a5.153 5.153 0 0 1 3.093-1.733 2.835 2.835 0 0 1 2.683 2.7c0 1.671-2.255 3.831-4.642 6.117Z" fill="#80868b" /></g></symbol><symbol viewBox="0 0 43 43" id="equatio-svg-contextual-icon-more"><g data-name="Group 603"><g data-name="Group 316"><path data-name="Path 1273" d="M21.5 0A21.5 21.5 0 1 1 0 21.5 21.5 21.5 0 0 1 21.5 0Z" fill="currentColor" /></g><g data-name="Group 589"><path data-name="Path 689" d="M13 13h18v18H13Z" fill="none" /><path data-name="Path 690" d="M15.06 20a2.06 2.06 0 1 0 2.06 2.06A2.057 2.057 0 0 0 15.06 20Zm13.73 0a2.06 2.06 0 1 0 2.06 2.06A2.057 2.057 0 0 0 28.79 20Zm-6.865 0a2.06 2.06 0 1 0 2.06 2.06 2.057 2.057 0 0 0-2.06-2.06Z" fill="#666a70" /></g></g></symbol><symbol viewBox="0 0 36 36" id="equatio-svg-contextual-icon-redo"><circle cx="18" cy="18" r="18" fill="currentColor" /><path style="fill:#676b71" d="M10 19.4c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4.5l5-5-5-5v3.5c-4.4 0-8 3.6-8 8z" /></symbol><symbol viewBox="0 0 43 43" id="equatio-svg-contextual-icon-text"><g data-name="Group 316"><path data-name="Path 1272" d="M21.5 0A21.5 21.5 0 1 1 0 21.5 21.5 21.5 0 0 1 21.5 0Z" fill="currentColor" /><path data-name="Path 1265" d="M29.316 17.777c-.138-1.657-.272-3.943-.272-5.049v-.208h-.9l-.069.069a1.442 1.442 0 0 1-1.384.553H16.173c-.692.001-.969-.069-1.315-.553l-.069-.069h-.9v.208c0 .761-.069 1.66-.138 2.7-.069.758-.138 1.592-.207 2.419v.208h1.314l.07-.135a2.959 2.959 0 0 1 1.316-1.526h3.32v9.2c0 2.144-.208 2.214-2.283 2.352h-.209v1.868h8.924v-1.868h-.208c-2.214-.208-2.352-.208-2.352-2.352v-9.2h3.874c.208.069.484.692.692 1.522v.138l1.314-.069Z" fill="#666a70" /></g></symbol><symbol viewBox="0 0 36 36" id="equatio-svg-contextual-icon-undo"><circle cx="18" cy="18" r="18" fill="currentColor" /><path style="fill:#676b71" d="M18 11.4V7.9l-5 5 5 5v-4.5c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6h-2c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8z" /></symbol><symbol viewBox="0 0 18.061 22.827" id="equatio-svg-contextual-new-column"><g fill="#666a70"><path d="M6.883 13.288h-4.05V9.414h2.415a7.946 7.946 0 0 1 .151-2.833H2.833V2.832h4.54v.148a7.436 7.436 0 0 1 2.832-1.825A1.18 1.18 0 0 0 9.026-.001H1.18A1.18 1.18 0 0 0 0 1.179v20.467a1.18 1.18 0 0 0 1.18 1.18h7.845a1.18 1.18 0 0 0 1.18-1.18v-5.978a7.475 7.475 0 0 1-3.322-2.38Zm.49 6.707h-4.54v-3.874h4.54Z" /><path d="M12.656 2.846a5.563 5.563 0 1 0 5.4 5.561 5.485 5.485 0 0 0-5.4-5.561Zm2.965 5.9a.5.5 0 0 1-.5.5h-1.544v1.544a.5.5 0 0 1-.5.5h-.631a.5.5 0 0 1-.5-.5V9.246h-1.602a.445.445 0 0 1-.476-.406v-.812a.445.445 0 0 1 .476-.406h1.566V6.036a.5.5 0 0 1 .5-.5h.673a.5.5 0 0 1 .5.5v1.586h1.544a.5.5 0 0 1 .5.5Z" /></g></symbol><symbol viewBox="0 0 22.827 18.72" id="equatio-svg-contextual-new-row"><path d="M21.49 0H1.337A1.337 1.337 0 0 0 0 1.337v10.448a1.337 1.337 0 0 0 1.337 1.337h2.616a7.821 7.821 0 0 1 .7-3.208H3.204V3.207h16.413v6.707h-1.45a7.829 7.829 0 0 1 .7 3.208h2.616a1.337 1.337 0 0 0 1.337-1.337V1.337A1.337 1.337 0 0 0 21.49 0Z" fill="#666a70" /><path d="M11.408 7.598a5.563 5.563 0 1 0 5.4 5.561 5.485 5.485 0 0 0-5.4-5.561Zm2.922 6.068a.5.5 0 0 1-.5.5h-1.544v1.544a.5.5 0 0 1-.5.5h-.631a.5.5 0 0 1-.5-.5v-1.544H9.048a.445.445 0 0 1-.475-.406v-.812a.445.445 0 0 1 .475-.406h1.566v-1.586a.5.5 0 0 1 .5-.5h.673a.5.5 0 0 1 .5.5v1.586h1.544a.5.5 0 0 1 .5.5Z" fill="#666a70" /></symbol><symbol viewBox="0 0 23.82 24" id="equatio-svg-contextual-relation-align"><g fill="#666a70"><path d="M15.627 1v22a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1ZM7.383 9.33a.5.5 0 0 0-.763.211.509.509 0 0 0-.037.2v1.23H.501a.5.5 0 0 0-.5.5v1.014a.5.5 0 0 0 .5.5h6.082v1.233a.507.507 0 0 0 .242.44.5.5 0 0 0 .559-.029l2.924-2.248a.505.505 0 0 0 0-.8ZM23.82 10.758a.478.478 0 0 1-.511.437h-5.112a.478.478 0 0 1-.511-.437v-.873a.478.478 0 0 1 .511-.437h5.112a.478.478 0 0 1 .511.437ZM23.82 13.892a.478.478 0 0 1-.511.436h-5.112a.478.478 0 0 1-.511-.436v-.873a.478.478 0 0 1 .511-.436h5.112a.478.478 0 0 1 .511.436Z" /></g></symbol><symbol viewBox="0 0 37.018 37.018" id="equatio-svg-discover-dismiss-button"><g transform="translate(-753 -380)"><circle cx="18.509" cy="18.509" r="18.509" transform="translate(753 380)" style="fill:#07aef0" /><path d="M8.3 0v8.3H0v2.767h8.3v8.3h2.767v-8.3h8.3V8.3h-8.3V0Z" transform="rotate(45 -78.889 1124.018)" style="fill:#fff;fill-rule:evenodd" /></g></symbol><symbol viewBox="0 0 38 38" id="equatio-svg-discover-header-warning"><path d="M19 0A19 19 0 1 1 0 19 19 19 0 0 1 19 0Z" style="fill:#eef4fc" /><path d="M9.665 0a9.665 9.665 0 1 0 9.665 9.665A9.693 9.693 0 0 0 9.665 0Zm0 14.5a1.141 1.141 0 0 1-1.208-1.208 1.141 1.141 0 0 1 1.208-1.208 1.141 1.141 0 0 1 1.208 1.208A1.141 1.141 0 0 1 9.665 14.5Zm1.208-3.624H8.457V4.833h2.416Z" transform="translate(9.335 9.335)" style="fill:#00b7ff" /></symbol><symbol viewBox="0 0 77.815 282.645" id="equatio-svg-discover-pointer"><path d="M30.38 6.3C21.882 24.87 13.7 43.44 5.2 62.325A13.325 13.325 0 0 0 7.4 63.9c4.092-4.092 8.813-7.869 12.275-12.59 7.239-9.442 9.757-9.757 18.57-1.889 4.092 3.462 7.869 7.239 11.96 10.7.944-.63 1.889-.944 2.833-1.574L34.157 6.615A16.633 16.633 0 0 0 30.38 6.3Z" transform="rotate(-180 33.35 134.558)" style="fill:none" /><path d="M77.707 86.556A224.654 224.654 0 0 0 49.694 5.351C48.435 3.147 45.6 0 43.4 0s-5.351 3.147-6.61 5.665C22 32.734 8.147 60.432.279 90.648c-.944 3.147.944 6.924 1.259 10.7 3.147-.944 7.239-1.259 9.757-3.147 6.924-5.665 12.9-11.96 20.773-19.2-1.259 29.272-2.518 56.655-3.777 84.038-1.889 38.085-.315 75.855 8.183 113.31.63 2.518 3.462 4.092 5.351 6.295 1.259-2.2 3.147-4.721 3.147-6.924-.315-8.5-1.889-16.682-1.889-25.18.315-56.025.944-112.051 1.259-168.076 0-2.2.63-4.406.944-7.869 7.554 6.924 13.849 12.9 20.459 17.941 2.518 1.889 6.295 2.2 9.442 3.147 1.261-2.832 3.15-6.294 2.52-9.127ZM61.34 73.651c-4.092-3.462-7.869-7.239-11.96-10.7-9.128-7.869-11.331-7.239-18.57 1.889-3.462 4.721-8.183 8.183-12.275 12.59a13.324 13.324 0 0 0-2.2-1.574c8.5-18.57 16.682-37.14 25.18-56.025h3.777l18.881 51.932Z" transform="rotate(-180 38.916 141.322)" style="fill:#fff" /></symbol><symbol viewBox="0 0 32 4" id="equatio-svg-drawer-handle"><g data-name="Group 308"><g data-name="Group 297" transform="translate(-782 -630)" fill="#d8d8d8"><circle data-name="Ellipse 18" cx="2" cy="2" r="2" transform="translate(782 630)" /><circle data-name="Ellipse 19" cx="2" cy="2" r="2" transform="translate(796 630)" /><circle data-name="Ellipse 20" cx="2" cy="2" r="2" transform="translate(810 630)" /></g></g></symbol><symbol viewBox="0 0 36 52.1" id="equatio-svg-drawer-microphone"><path style="fill:currentColor" d="M36 19.4c0-.6-.5-1-1.2-1h-2.4c-.7 0-1.2.5-1.2 1v7c-.1 6.2-6 11.3-13.2 11.3-7.2 0-13.1-5-13.2-11.3v-7c0-.6-.5-1-1.2-1H1.2c-.7 0-1.2.5-1.2 1v6.7C0 34 6.8 40.5 15.6 41.6V48h-5.4c-.7 0-1.2.4-1.2 1v2.1c0 .6.5 1 1.2 1h15.6c.7 0 1.2-.5 1.2-1V49c0-.6-.5-1-1.2-1h-5.4v-6.4C29.2 40.5 36 34 36 26.1v-6.7z" /><path style="fill:currentColor" d="M18 33.8c5 0 9-3.5 9-7.8V7.8C27 3.5 23 0 18 0S9 3.5 9 7.8V26c0 4.3 4.1 7.8 9 7.8z" /></symbol><symbol viewBox="0 0 340 234.5" id="equatio-svg-expired-license"><g style="opacity:.37"><path style="fill:url(#equatio-svg-expired-license_a)" d="M54.4 205.9c-39.4 0-73 3-86.4 7.2v8.2c13.4 4.2 47 7.2 86.4 7.2 51.2 0 92.6-5.1 92.6-11.3.1-6.2-41.4-11.3-92.6-11.3z" /></g><path style="fill:#fd3269" d="M80.6 168c0 7.3-5.9 13.3-13.3 13.3H42.5c-7.3 0-13.3-5.9-13.3-13.3V72c0-7.3 5.9-13.3 13.3-13.3h24.7c7.3 0 13.3 6 13.3 13.3v96z" /><path style="fill:#fd3269" d="M60.3 92.2c0 3.9 2.3 4.8 5 2.1l30.5-30.5c2.8-2.8 1.8-5-2.1-5H67.4c-3.9 0-7.1 3.2-7.1 7.1v26.3z" /><path style="fill:#53a2da" d="M75.3 46.6c-.9 1.9-5.2 2.6-2.9 5.9-2.4-2.9-3.4-10.8.5-13.5 5-3.5 10.7 5.9 2.4 7.6zM39.2 46.6c.9 1.9 5.2 2.6 2.9 5.9 2.3-2.9 3.3-10.9-.5-13.5-5-3.5-10.7 5.9-2.4 7.6z" /><path style="fill:#fd3269" d="M51.1 217c-1.1 0-2-.9-2-2v-41.2c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2zM58.7 217c-1.1 0-2-.9-2-2v-37.9c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2z" /><path style="opacity:.4;fill:#221e20" d="M60.3 97.3s4.8 2.1 8.4.6c0 0-6.8 4.4-8.4-.6z" /><path style="fill:#841627" d="M47.9 98.6S51.5 88.5 62.6 87c11-1.5 9.1 9.2 9.1 9.2l-23.8 2.7" /><path style="fill:#fdf6fa" d="M62.6 87c-4.6.6-8 2.8-10.3 5 0 .1-1 5.2 4.1 4.2l13.1-1.7s1.3-.9 2.1-2.1c-.5-2.9-2.5-6.3-9-5.4z" /><path style="fill:#fdf6fa" d="M52.3 92.1c-.3.3-.5.5-.7.8l.7-.8z" /><path style="fill:#ce544c" d="M54.6 98s6.5-9.9 14.9-2.1c0 0 2.9 2.7-3.6 3-6.5.2-5.5-1.7-5.5-1.7l-4.6.8" /><path style="opacity:.1;fill:#221e20" d="M59.4 94.1s6.2-.6 7.4 1.6c1.1 2.2-.8-2.1-7.4-1.5" /><path style="fill:none;stroke:#fff;stroke-width:1.8549;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M68.8 70.8s-6-2.7-8.9 2.5" /><path style="fill:#fff" d="m71.2 77.8 18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L71.2 76c-.5.5-.5 1.3 0 1.8z" /><path style="fill:#fd3269" d="m94.8 95-15.1 26.7c-.4.6-1.1.8-1.8.5l-3.1-1.8c-.6-.4-.8-1.1-.5-1.8l15.1-26.7c.4-.6 1.1-.8 1.8-.5l3.1 1.8c.6.4.8 1.2.5 1.8z" /><path style="fill:#fd3269" d="m72.1 77.8 18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L72.1 76c-.5.5-.5 1.3 0 1.8z" /><path style="fill:#00417c" d="M103.8 198.3c2 5.7 8.5 10.5 13.7 11.6.7.1 1.3 1.2 2 1.3l.3 4.7c0 .6.5.9 1.1.9h25.6c.6 0 1.1-.2 1.1-.9l2.2-40.2c0-.6-.5-1.1-1.1-1.1h-30.1c-.6 0-1.1.6-1.1 1.2l.3 4.7c-1.4-.6-2.9-.9-4.4-.9-1.1 0-2.1.2-3.2.5-6.2 2.4-9.1 10.5-6.4 18.2zm4.3-9.5c.4-1.2 1.4-3.2 3.6-4 .5-.2 1.1-.3 1.6-.3 2.8 0 3.8 2.9 5 6.4l.8 13.9-.1.1c-3.4 0-9.2-3.8-10.8-8.2-.9-2.6-1-5.5-.1-7.9z" /><path style="fill:#fd3269" d="m37.1 111-24.9 26.1c-.5.5-1.3.5-1.8.1l-2.6-2.4c-.5-.5-.5-1.3-.1-1.8l24.9-26.1c.5-.5 1.3-.5 1.8-.1l2.6 2.4c.6.5.6 1.3.1 1.8z" /><path style="fill:#eaf0f4" d="M236 203c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-44 98-98 98z" /><path style="fill:#000623" d="M237.2 8.2c-53.4 0-96.8 43.4-96.8 96.6 0 53.3 43.4 96.6 96.8 96.6S334 158 334 104.8c0-53.3-43.4-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.9 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" /><path style="fill:#dfe5ea" d="M290.7 23.7c-.1-.1-.1-.1-.2-.1L181.1 186.2c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.2-44.9 18.2-105.9-26.6-136z" /><path style="fill:#515f70" d="M236 7c-54 0-98 44-98 98s44 98 98 98 98-44 98-98c0-54.1-44-98-98-98zm0 178.5c-44.5 0-80.5-36.1-80.5-80.5 0-44.5 36.1-80.5 80.5-80.5 44.5 0 80.5 36.1 80.5 80.5 0 44.5-36 80.5-80.5 80.5z" /><path style="fill:#00b7ff" d="m203.4 156 5 2.9-7.9 13.8-5.1-2.9 8-13.8zM271.5 38l5 3-7.9 13.7-5.1-2.9 8-13.8zM182.4 132.9l3 5.1-13.8 7.9-3-5 13.8-8zM300.4 64.8l2.9 5.1-13.8 7.9-2.9-5 13.8-8zM175.8 102.5v5.8h-15.9v-5.8h15.9zM312 102.5v5.8h-15.9v-5.8H312zM185.4 72.8l-3 5-13.8-7.9 3-5.1 13.8 8zM303.3 140.9l-2.9 5-13.8-7.9 2.9-5.1 13.8 8zM208.4 51.8l-5 2.9-8-13.7 5.1-3 7.9 13.8zM276.5 169.8l-5 2.9-8-13.8 5.1-2.9 7.9 13.8zM238.9 45.2h-5.8V29.3h5.8v15.9zM238.9 181.4h-5.8v-15.9h5.8v15.9z" /><circle style="fill:#00417c" cx="236" cy="106.9" r="7" /><path style="fill:#00417c" d="M236.3 123.5h-.6c-1.3 0-2.4-1.1-2.4-2.4V55c0-1.3 1.1-2.4 2.4-2.4h.6c1.3 0 2.4 1.1 2.4 2.4v66.1c0 1.3-1.1 2.4-2.4 2.4z" /></symbol><radialGradient id="equatio-svg-expired-license_a" cx="614.705" cy="51718.18" r="108.793" gradientTransform="matrix(.6084 0 0 .05166 -319.539 -2454.731)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1d1e1c" /><stop offset=".074" style="stop-color:#151514;stop-opacity:.9256" /><stop offset=".239" style="stop-color:#090909;stop-opacity:.7612" /><stop offset=".462" style="stop-color:#020202;stop-opacity:.5379" /><stop offset="1" style="stop-color:#000;stop-opacity:0" /></radialGradient><symbol viewBox="0 0 340 234.5" id="equatio-svg-expiring-license"><g style="opacity:.37"><path style="fill:url(#equatio-svg-expiring-license_a)" d="M293.1 203.3c-58.9 0-108.7 3.7-129.5 8.9v10.1c20.7 5.2 70.6 8.9 129.5 8.9 76.5 0 138.5-6.3 138.5-14-.1-7.7-62.1-13.9-138.5-13.9z" /></g><path style="fill:#aeca37" d="M256.1 55H308.5c7.5 0 12.9 6.8 12.9 14.3v97.9c0 7.5-5.4 14.3-12.9 14.3h-5.8v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-4.1v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-7c-7.5 0-13.7-6.8-13.7-14.3V76.4L254 60.5c-2.9-2.8-1.9-5.5 2.1-5.5z" /><path style="fill:#fff" d="M279.5 66c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.8 0-3.1-1.4-3.1-3.1z" /><circle style="fill:#fff" cx="282.5" cy="66" r="3.1" /><path style="opacity:.43;fill:#fff" d="M271.1 114.7c1.3-.1 2.2-1.2 2.1-2.5-.1-1.3-1.2-2.2-2.5-2.1l-18.2 1.6c-1.3.1-2.2 1.2-2.1 2.5.1 1.3 1.2 2.2 2.5 2.1h.2l3.4 38.4c.4 4.9 4.8 8.5 9.7 8.1 4.9-.4 8.5-4.8 8.1-9.7l-3.4-38.4h.2z" /><path style="fill:#ebeff2" d="M266.3 163.7c-5.4.5-10.1-3.5-10.6-8.9l-3.4-37.6c-1.4-.2-2.6-1.3-2.8-2.8-.2-1.7 1.1-3.3 2.9-3.4l18.2-1.6c1.7-.2 3.3 1.1 3.4 2.9.1 1.5-.8 2.9-2.2 3.3l3.4 37.6c.5 5.2-3.5 10-8.9 10.5zm-13.7-51c-.8.1-1.3.8-1.3 1.5.1.8.8 1.3 1.5 1.3l1.1-.1 3.5 39.3c.4 4.4 4.3 7.7 8.7 7.3s7.7-4.3 7.3-8.7l-3.5-39.3 1.1-.1c.8-.1 1.3-.8 1.3-1.5-.1-.8-.8-1.3-1.5-1.3l-18.2 1.6z" /><path style="fill:#e94e68" d="m257.1 131.4 2.1 23.1c.3 3.5 3.4 6.1 7 5.8 3.5-.3 6.1-3.4 5.8-7l-2.1-23.1-12.8 1.2z" /><path style="fill:#aeca37" d="M292.2 140c0 1.1-.9 2.1-2.1 2.1h-24.9c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1h24.9c1.2.1 2.1 1 2.1 2.1z" /><path style="fill:#eaf0f4" d="M104.1 203c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-43.9 98-98 98z" /><path style="fill:#000623" d="M105.4 8.2C52 8.2 8.6 51.5 8.6 104.8s43.4 96.6 96.8 96.6 96.8-43.3 96.8-96.6c-.1-53.3-43.5-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.8 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" /><path style="fill:#dfe5ea" d="M158.8 23.7c-.1-.1-.1-.1-.2-.1L49.3 186.2c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.1-44.9 18.2-105.9-26.7-136z" /><path style="fill:#515f70" d="M104.1 7c-54 0-98 44-98 98s44 98 98 98 98-44 98-98-43.9-98-98-98zm0 178.5c-44.5 0-80.5-36-80.5-80.5s36-80.5 80.5-80.5 80.5 36 80.5 80.5c.1 44.5-36 80.5-80.5 80.5z" /><path style="fill:#00b7ff" d="m71.6 156 5 2.9-8 13.8-5-2.9 8-13.8zM139.6 38.1l5.1 2.9-8 13.8-5-2.9 7.9-13.8zM50.6 132.9l2.9 5.1-13.8 7.9-2.9-5 13.8-8zM168.5 64.8l3 5.1-13.8 8-3-5.1 13.8-8zM44 102.5v5.8H28.1v-5.8H44zM180.2 102.5v5.8h-15.9v-5.8h15.9zM53.5 72.8l-2.9 5.1-13.8-8 2.9-5.1 13.8 8zM171.5 140.9l-3 5-13.8-7.9 3-5.1 13.8 8zM76.6 51.9l-5 2.9-8-13.8 5-2.9 8 13.8zM144.7 169.8l-5.1 2.9-7.9-13.8 5-2.9 8 13.8zM107.1 45.3h-5.9v-16h5.9v16zM107.1 181.4h-5.9v-15.9h5.9v15.9z" /><path style="fill:#00417c" d="M102.2 99.6c0-.4.1-.7.3-.9h-.3L87.5 59.4c-.5-1.3-2-2-3.3-1.5-1.3.5-2 2-1.5 3.3l15.1 40.5c1.7 0 4.2-.3 4.4-2.1z" /><path style="fill:#00417c" d="M125.2 90.5c-1-1.6-3.1-2-4.7-1L105.9 99c-1.1-.5-2.4-.6-3.6-.4 0 0-3.5 1.4-4.4 3.1s-1.2 3.7-.5 5.6c1.3 3.4 5 5.1 8.3 3.8 2.8-1 4.4-3.8 4.2-6.6l14.3-9.3c1.6-1 2-3.1 1-4.7z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="M219.8 151.6c-2.6.1-4.5 3.4-4.4 7.3l-1.1 13.1 3.3.1 1.5-5.6v-.1c.5.2 1 .3 1.5.3 2.7-.1 4.6-3.6 4.4-7.8-.2-4.2-2.5-7.5-5.2-7.3zm.1 1.8c2-.1 3.8 2.4 3.9 5.5.2 3.1-1.3 5.8-3.3 5.9-2 .1-3.8-2.4-4-5.5-.1-3.1 1.4-5.8 3.4-5.9z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m216.9 172.1-2.9 34.8-2.2-31.7 3-3.2zM209 151.5c2.6.2 4.4 3.4 4.3 7.4l.9 13.1-3.3.1-1.5-5.6v-.1c-.5.2-1 .3-1.5.3-2.7-.2-4.6-3.7-4.3-7.9.3-4.3 2.7-7.5 5.4-7.3zm-.1 1.8c-2-.1-3.8 2.3-4 5.4-.2 3.1 1.2 5.8 3.2 5.9 2 .1 3.8-2.3 4-5.4.2-3.1-1.2-5.7-3.2-5.9z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m211.6 172 2.4 34.9 2.7-31.7-3-3.2z" /><ellipse transform="matrix(.06818 -.9977 .9977 .06818 21.214 380.346)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" cx="214.2" cy="178.8" rx=".9" ry=".8" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m213.2 188.9 13.5-50.6c.1-.5.7-.8 1.2-.7l7.3 1.9c.5.1.8.7.7 1.2l-13.6 50.6c-.1.5-.7.8-1.2.7l-7.3-1.9c-.4-.1-.7-.6-.6-1.2z" /><path transform="rotate(-75.167 215.542 188.62)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M215.3 186.5h.4v4.3h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m213.6 187.4.1-.4 2 .5-.1.4zM213.9 186.5l.1-.4 2 .5-.1.4zM214.1 185.6l.1-.4 2 .5-.1.4zM214.3 184.7l.2-.4 2 .5-.2.4zM214.6 183.8l.1-.4 4.2 1.1-.1.4zM214.8 182.9l.1-.4 2 .6-.1.4zM215.1 182l.1-.4 2 .6-.1.4zM215.3 181.1l.1-.4 2 .6-.1.4zM215.5 180.3l.1-.5 2.1.6-.2.4zM215.8 179.4l.1-.4 4.2 1.1-.1.4zM216 178.5l.1-.4 2 .5-.1.4zM216.3 177.6l.1-.4 2 .5-.1.4zM216.5 176.7l.1-.4 2 .5-.1.4zM216.7 175.8l.1-.4 2 .5-.1.4zM217 174.9l.1-.4 4.2 1.1-.1.4z" /><path transform="rotate(-74.942 218.264 174.077)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M218.1 173h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m217.4 173.1.2-.4 2 .6-.1.4zM217.7 172.2l.1-.4 2 .6-.1.4zM217.9 171.3l.1-.4 2 .6-.1.4zM218.2 170.5l.1-.5 4.2 1.2-.1.4z" /><path transform="rotate(-74.966 219.457 169.626)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M219.2 168.6h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m218.6 168.7.1-.4 2.1.5-.2.4zM218.9 167.8l.1-.4 2 .5-.1.4zM219.1 166.9l.1-.4 2 .5-.1.4zM219.4 166l.1-.4 4.2 1.1-.2.4z" /><path transform="rotate(-74.971 220.644 165.177)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M220.4 164.1h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m219.8 164.2.1-.4 2 .5-.1.5zM220.1 163.3l.1-.4 2 .6-.1.4zM220.3 162.4l.1-.4 2 .6-.1.4zM220.5 161.6l.2-.5 4.2 1.2-.2.4z" /><path transform="rotate(-74.966 221.843 160.72)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M221.6 159.7h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m221 159.8.1-.4 2 .5-.1.4zM221.3 158.9l.1-.4 2 .5-.1.4z" /><path transform="rotate(-75.173 222.552 158.054)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M222.3 157h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m221.7 157.1.2-.4 4.1 1.1-.1.4zM222 156.2l.1-.4 2 .5-.1.4zM222.2 155.3l.1-.4 2 .5-.1.5zM222.5 154.4l.1-.4 2 .6-.1.4z" /><path transform="rotate(-74.935 223.764 153.605)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M223.5 152.6h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m222.9 152.6.1-.4 4.2 1.2-.1.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m222.9 152.6.1-.4 4.2 1.2-.1.4z" /><path transform="rotate(-75.202 224.234 151.824)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M224 150.8h.4v2.1h-.4z" /><path transform="rotate(-74.966 224.468 150.923)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M224.3 149.9h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m223.7 150 .1-.4 2 .5-.1.4z" /><path transform="rotate(-74.935 224.957 149.152)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M224.7 148.1h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m224.1 148.2.1-.4 4.2 1.1-.1.4z" /><path transform="rotate(-75.167 225.424 147.36)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M225.2 146.3h.4v2.1h-.4z" /><path transform="rotate(-74.942 225.66 146.47)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M225.4 145.4h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m224.8 145.5.2-.4 2 .5-.2.5z" /><path transform="rotate(-74.942 226.14 144.688)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M225.9 143.7h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m225.3 143.7.1-.4 4.2 1.2-.1.4zM225.6 142.9l.1-.5 2 .6-.1.4zM225.8 142l.1-.5 2 .6-.1.4zM226 141.1l.1-.4 2.1.5-.2.4zM226.3 140.2l.1-.4 2 .5-.1.4zM226.5 139.3l.1-.4 4.2 1.1-.1.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m198.8 167.1.1-7.1 3.6 6.1-.8.6-1.9.5z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m199.8 167.3 6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.2-.1.6.3.7.8z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="M200.5 166.1c.5-.1 1 .2 1.2.7l6.4 23.8-1.9.5-6.4-23.8c-.1-.5.2-1.1.7-1.2z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m202.6 166.5 6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.3 0 .6.3.7.8zM198.9 162.2V160l1 1.9zM206.5 162l1.5-6.9 2.3 6.7-.9.4-2 .1z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m207.4 162.4 1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.3.6.9z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="M208.3 161.3c.5 0 1 .4 1 .9l1.4 24.6-1.9.1-1.4-24.6c0-.5.4-.9.9-1z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m210.3 162.2 1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.4.6.9zM207.6 157.1l.4-2 .7 2zM223.8 213.7h3.9v-31.9l-3.9-1.1z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="M200.6 180.2h23.2v33.5h-23.2z" /></symbol><radialGradient id="equatio-svg-expiring-license_a" cx="1157.033" cy="95405.406" r="271.258" gradientTransform="matrix(.3648 0 0 .02555 -129.17 -2220.817)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1d1e1c" /><stop offset=".146" style="stop-color:#1d1e1c;stop-opacity:.8541" /><stop offset="1" style="stop-color:#1d1e1c;stop-opacity:0" /></radialGradient><symbol viewBox="0 0 25.255 25.255" id="equatio-svg-favourite-cancel"><path data-name="Path 1288" d="M12.628 0A12.628 12.628 0 1 1 0 12.628 12.628 12.628 0 0 1 12.628 0Z" fill="currentColor" /><path data-name="Icon awesome-times" d="m15.032 12.826 3.105-3.105a.976.976 0 0 0 0-1.38l-.69-.69a.976.976 0 0 0-1.38 0l-3.105 3.104L9.856 7.65a.976.976 0 0 0-1.38 0l-.69.69a.976.976 0 0 0 0 1.38l3.105 3.105-3.105 3.106a.976.976 0 0 0 0 1.38l.69.69a.976.976 0 0 0 1.38 0l3.105-3.105 3.105 3.105a.976.976 0 0 0 1.38 0l.69-.69a.976.976 0 0 0 0-1.38Z" fill="#666a70" /></symbol><symbol viewBox="0 0 25.255 25.255" id="equatio-svg-favourite-confirm"><path data-name="Path 1288" d="M12.628 0A12.628 12.628 0 1 1 0 12.628 12.628 12.628 0 0 1 12.628 0Z" fill="currentColor" /><path data-name="Icon awesome-check" d="m10.493 17.596-4.372-4.729a.77.77 0 0 1 0-1.029l.952-1.029a.638.638 0 0 1 .952 0l2.947 3.185 6.309-6.822a.638.638 0 0 1 .952 0l.952 1.029a.77.77 0 0 1 0 1.029l-7.74 8.366a.638.638 0 0 1-.952 0Z" fill="#666a70" /></symbol><symbol viewBox="0 0 11.8 24" id="equatio-svg-floating-action-align-centers"><path style="fill:currentColor" d="M-2135 245.5v12.3c0 .3.2.5.5.5h1.9c.3 0 .5-.2.5-.5v-12.3c0-.3-.2-.5-.5-.5h-1.9c-.3 0-.5.2-.5.5zM-2135 264.6v4c0 .3.2.5.5.5h1.9c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-1.9c-.3 0-.5.2-.5.5z" transform="translate(2139.461 -245)" /><path style="fill:currentColor" d="M1578.9 222.6v6.1c0 .3.2.5.5.5h7c.3 0 .5-.2.5-.5v-6.1c0-.3-.2-.5-.5-.5h-7c-.3.1-.5.3-.5.5zM1577 232v7.3c0 .3.2.5.5.5h10.8c.3 0 .5-.2.5-.5V232c0-.3-.2-.5-.5-.5h-10.8c-.3 0-.5.2-.5.5zm9.6 5.6h-7.3v-3.8h7.3v3.8z" transform="translate(-1577 -219)" /></symbol><symbol viewBox="0 0 24 11.8" id="equatio-svg-floating-action-align-centers-horiz"><path style="fill:#484848" d="M-2139 252.3h12.3c.3 0 .5-.2.5-.5v-1.9c0-.3-.2-.5-.5-.5h-12.3c-.3 0-.5.2-.5.5v1.9c0 .3.3.5.5.5zM-2119.9 252.3h4c.3 0 .5-.2.5-.5v-1.9c0-.3-.2-.5-.5-.5h-4c-.3 0-.5.2-.5.5v1.9c0 .3.2.5.5.5z" transform="translate(2139.461 -245)" /><path style="fill:#484848" d="M1580.6 228.9h6.1c.3 0 .5-.2.5-.5v-7c0-.3-.2-.5-.5-.5h-6.1c-.3 0-.5.2-.5.5v7c.1.3.3.5.5.5zM1590 230.8h7.3c.3 0 .5-.2.5-.5v-10.8c0-.3-.2-.5-.5-.5h-7.3c-.3 0-.5.2-.5.5v10.8c0 .3.2.5.5.5zm5.6-9.6v7.3h-3.8v-7.3h3.8z" transform="translate(-1577 -219)" /></symbol><symbol viewBox="0 0 25 18.2" id="equatio-svg-floating-action-align-to-bottom"><path style="fill:currentColor" d="M216.5-573.8h-24c-.3 0-.5-.2-.5-.5v-2.1c0-.3.2-.5.5-.5h24c.3 0 .5.2.5.5v2.1c0 .3-.2.5-.5.5zM213.4-579h-6.7c-.3 0-.5-.2-.5-.5v-7.8c0-.3.2-.5.5-.5h6.7c.3 0 .5.2.5.5v7.8c0 .3-.2.5-.5.5zM203.6-579.5v-12c0-.3-.2-.5-.5-.5H195c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h8.1c.2 0 .4-.2.5-.5zm-2.5-10v8.1h-4.2v-8.1h4.2z" transform="translate(-192 592)" /></symbol><symbol viewBox="0 0 17.4 23.9" id="equatio-svg-floating-action-align-to-left"><path style="fill:currentColor" d="M187-591.5v22.9c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5v-22.9c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5zM192-588.5v6.4c0 .3.2.5.5.5h7.4c.3 0 .5-.2.5-.5v-6.4c0-.3-.2-.5-.5-.5h-7.4c-.3 0-.5.2-.5.5zM192-578.7v7.7c0 .3.2.5.5.5h11.4c.3 0 .5-.2.5-.5v-7.7c0-.3-.2-.5-.5-.5h-11.4c-.3 0-.5.3-.5.5zm10.1 5.9h-7.7v-4.1h7.7v4.1z" transform="translate(-187 592)" /></symbol><symbol viewBox="0 0 17.5 24" id="equatio-svg-floating-action-align-to-right"><path style="fill:currentColor" d="M410.5-634.5v23c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-23c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5zM405.5-631.5v6.4c0 .3-.2.5-.5.5h-7.4c-.3 0-.5-.2-.5-.5v-6.4c0-.3.2-.5.5-.5h7.4c.2 0 .5.2.5.5zM405-622.1h-11.5c-.3 0-.5.2-.5.5v7.8c0 .3.2.5.5.5H405c.3 0 .5-.2.5-.5v-7.8c0-.3-.2-.5-.5-.5zm-9.6 2.4h7.8v4.1h-7.8v-4.1z" transform="translate(-393 635)" /></symbol><symbol viewBox="0 0 25 18.2" id="equatio-svg-floating-action-align-to-top"><path style="fill:currentColor" d="M218.5-592h-24c-.3 0-.5.2-.5.5v2.1c0 .3.2.5.5.5h24c.3 0 .5-.2.5-.5v-2.1c0-.3-.2-.5-.5-.5zM215.4-586.8h-6.7c-.3 0-.5.2-.5.5v7.8c0 .3.2.5.5.5h6.7c.3 0 .5-.2.5-.5v-7.8c0-.2-.2-.5-.5-.5zM205-586.8h-8.1c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h8.1c.3 0 .5-.2.5-.5v-12c.1-.2-.2-.5-.5-.5zm-6.1 10.6v-8.1h4.2v8.1h-4.2z" transform="translate(-194 592)" /></symbol><symbol viewBox="0 0 20 20" id="equatio-svg-floating-action-arrange-bring-forward"><path style="fill:currentColor" d="M597.4-731.4h5.9v5.9c0 .2.2.4.4.4h12.8c.2 0 .4-.2.4-.4v-12.8c0-.2-.2-.4-.4-.4h-5.9v-5.9c0-.2-.2-.4-.4-.4h-12.8c-.2 0-.4.2-.4.4v12.8c0 .2.2.4.4.4zm2.7-10.5h7.5v3.3H604c-.3 0-.6.3-.6.6v3.6h-3.3v-7.5z" transform="translate(-597 745)" /></symbol><symbol viewBox="0 0 20 20.1" id="equatio-svg-floating-action-arrange-bring-to-front"><path style="fill:currentColor" d="M19.6 10.3h-3.4v-6c0-.2-.2-.4-.4-.4h-6V.4c.1-.2-.1-.4-.3-.4H.4C.2 0 0 .2 0 .4v9.1c0 .2.2.4.4.4h3.3v6c0 .2.2.4.4.4h6v3.4c0 .2.2.4.4.4h9.1c.2 0 .4-.2.4-.4v-9.1c0-.1-.2-.3-.4-.3zm-7.3 6h3.5c.2 0 .4-.2.4-.4v-3.4h1.6v5.4h-5.4l-.1-1.6zM3.7 4.2v3.4H2.2V2.2h5.4v1.6H4.1c-.2 0-.4.2-.4.4z" /></symbol><symbol viewBox="0 0 20 20" id="equatio-svg-floating-action-arrange-send-back"><path style="fill:currentColor" d="M493.4-731.4h5.9v5.9c0 .2.2.4.4.4h12.8c.2 0 .4-.2.4-.4v-12.8c0-.2-.2-.4-.4-.4h-5.9v-5.9c0-.2-.2-.4-.4-.4h-12.8c-.2 0-.4.2-.4.4v12.8c0 .2.2.4.4.4zm16.5-4.2v7.5h-7.5v-7.5h7.5z" transform="translate(-493 745)" /></symbol><symbol viewBox="0 0 20 20.1" id="equatio-svg-floating-action-arrange-send-to-back"><path style="fill:currentColor" d="M458.6-734.7h-3.4v-6c0-.2-.2-.4-.4-.4h-6v-3.4c0-.2-.2-.4-.4-.4h-9.1c-.2 0-.4.2-.4.4v9.1c0 .2.2.4.4.4h3.3v6c0 .2.2.4.4.4h6v3.4c0 .2.2.4.4.4h9.1c.2 0 .4-.2.4-.4v-9.1c.1-.2-.1-.4-.3-.4zm-7.3 7.6v-5.4h5.4v5.4h-5.4zm-4.6-15.7v5.4h-5.4v-5.4h5.4z" transform="translate(-439 745)" /></symbol><symbol viewBox="0 0 23.7 23.2" id="equatio-svg-floating-action-grouping-group"><path style="fill:#494949" d="M-1918.8-1501h-4.7c-1.3 0-2.4-1.1-2.4-2.4v-4.6c0-1.3 1.1-2.4 2.4-2.4h4.7c1.3 0 2.4 1.1 2.4 2.4v4.6c0 1.3-1.1 2.4-2.4 2.4z" transform="translate(1930.627 1514.992)" /><path style="fill:#494949" d="M-1914.3-1497.2h-4.7c-1.3 0-2.4-1.1-2.4-2.4v-4.6c0-1.3 1.1-2.4 2.4-2.4h4.7c1.3 0 2.4 1.1 2.4 2.4v4.6c0 1.3-1.1 2.4-2.4 2.4zm-4.7-7.5c-.3 0-.5.2-.5.5v4.6c0 .3.2.5.5.5h4.7c.3 0 .5-.2.5-.5v-4.6c0-.3-.2-.5-.5-.5h-4.7z" transform="translate(1930.627 1514.992)" /><path style="fill:#494949" d="M-1907.7-1510.5c.5 0 .9-.4.9-.9v-2.8c0-.5-.4-.9-.9-.9h-2.8c-.5 0-.9.4-.9.9v.4h-14.7v-.4c0-.5-.4-.9-.9-.9h-2.8c-.5 0-.9.4-.9.9v2.8c0 .5.4.9.9.9h.9v14.2h-.9c-.5 0-.9.4-.9.9v2.8c0 .5.4.9.9.9h2.8c.5 0 .9-.4.9-.9v-.8h14.7v.8c0 .5.4.9.9.9h2.8c.5 0 .9-.4.9-.9v-2.8c0-.5-.4-.9-.9-.9h-.8v-14.2h.8zm-2.1 14.2h-.7c-.5 0-.9.4-.9.9v.8h-14.7v-.8c0-.5-.4-.9-.9-.9h-.7v-14.2h.7c.5 0 .9-.4.9-.9v-1.1h14.7v1.1c0 .5.4.9.9.9h.7v14.2z" transform="translate(1930.627 1514.992)" /><path style="fill:#fff" d="M-1923.5-1508.5c-.3 0-.5.2-.5.5v4.6c0 .3.2.5.5.5h4.7c.3 0 .5-.2.5-.5v-4.6c0-.3-.2-.5-.5-.5h-4.7z" transform="translate(1930.627 1514.992)" /></symbol><symbol viewBox="0 0 21.8 21.8" id="equatio-svg-floating-action-grouping-ungroup"><path style="fill:#494949" d="M1460.2-271.9h-5c-1.4 0-2.6-1.1-2.6-2.6v-5c0-1.4 1.1-2.6 2.6-2.6h5c1.4 0 2.6 1.1 2.6 2.6v5c0 1.4-1.2 2.6-2.6 2.6z" transform="translate(-1449.408 285.593)" /><path style="fill:#494949" d="M1465-267.9h-5c-1.4 0-2.6-1.1-2.6-2.6v-5c0-1.4 1.1-2.6 2.6-2.6h5c1.4 0 2.6 1.1 2.6 2.6v5c0 1.4-1.2 2.6-2.6 2.6zm-5-8.1c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-5z" transform="translate(-1449.408 285.593)" /><path style="fill:#fff" d="M1455.2-280c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-5z" transform="translate(-1449.408 285.593)" /><path style="fill:#494949" d="M-2161.5 53.2h-1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h.3v-.3c0-.4.3-.7.7-.7s.7.3.7.7v1c0 .4-.3.7-.7.7zM-2164.5 53.2h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.4.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM-2180.9 53.2h-1c-.4 0-.7-.3-.7-.7v-1c0-.4.3-.7.7-.7.4 0 .7.3.7.7v.3h.3c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM-2181.9 50.2c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zM-2181.9 33.8c-.4 0-.7-.3-.7-.7v-1c0-.4.3-.7.7-.7h1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7h-.3v.3c0 .4-.3.7-.7.7zM-2164.5 32.8h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.4.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM-2161.5 33.8c-.4 0-.7-.3-.7-.7v-.3h-.3c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h1c.4 0 .7.3.7.7v1c0 .4-.3.7-.7.7zM-2161.5 50.2c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7z" transform="translate(2182.592 -31.407)" /></symbol><symbol viewBox="0 0 14 14" id="equatio-svg-floating-action-move"><path style="fill:currentColor" d="M13.8 6.6c.1.1.2.2.2.4 0 .1-.1.3-.1.3l-2 2c-.1.1-.2.1-.4.1-.1 0-.3-.1-.4-.1-.1-.1-.1-.2-.1-.3V8H8v3h1c.1 0 .3.1.4.1.1.1.1.2.1.4 0 .1-.1.3-.1.4l-2 2c-.2.2-.5.2-.7 0l-2-2c-.1-.1-.1-.2-.1-.3 0-.1.1-.3.1-.4 0-.2.2-.2.3-.2h1V8H3v1c0 .1-.1.3-.1.3-.1.1-.3.2-.4.2-.1 0-.3-.1-.3-.1l-2-2C.1 7.2 0 7.1 0 7c0-.1.1-.3.1-.3l2-2c.1-.1.2-.1.3-.1.1 0 .3.1.3.1.2 0 .3.2.3.3v1h3V3H5c-.2 0-.3-.1-.4-.2-.1 0-.1-.2-.1-.3 0-.1.1-.3.1-.4l2-2c.1 0 .2-.1.4-.1.1 0 .3.1.3.1l2 2c.1.1.1.2.1.4 0 .1-.1.3-.1.4-.1 0-.2.1-.3.1H8v3h3V5c0-.1.1-.3.1-.4.1-.1.2-.1.4-.1.1 0 .3.1.4.1l1.9 2z" /></symbol><symbol viewBox="0 0 8.7 6.4" id="equatio-svg-floating-group-header-collapse"><path style="fill:currentColor" d="M0 0h8.7L4.4 6.4 0 0z" /></symbol><symbol viewBox="0 0 340 234.5" id="equatio-svg-free-license"><path style="fill:#9f5dff" d="M99.5 121.9H36.1c-8.4 0-15.3 6.9-15.3 15.2V181c0 8.4 6.9 15.2 15.3 15.2H49v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8v-17.9h3.5v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8v-17.9H73c8.4 0 15.3-6.9 15.3-15.2v-38.1l14.3-14.3c3.4-3.7 2.2-6.7-3.1-6.7z" /><path style="fill:#fff" d="M76.5 135.1c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.8 2.9-2.8 1.6 0 2.9 1.3 2.9 2.8 0 1.6-1.3 2.9-2.9 2.9z" /><circle style="fill:#fff" cx="76.5" cy="132.3" r="2.9" /><path style="fill:#9f5dff" d="M103.7 138.8c.4.7.2 1.6-.6 2.1l-15.8 9c-.7.4-1.6.2-2.1-.6-.4-.7-.2-1.6.6-2.1l15.8-9c.7-.3 1.6-.1 2.1.6zM4.6 139.1c-.4.8 0 1.7.7 2l16.4 7.8c.8.4 1.7 0 2-.7.4-.8 0-1.7-.7-2l-16.4-7.8c-.8-.3-1.7 0-2 .7z" /><g style="opacity:.37"><path style="fill:url(#equatio-svg-free-license_a)" d="M61.5 193.9c-64 0-118.3 6.2-140.9 14.9v16.8c22.6 8.7 76.8 14.9 140.9 14.9 83.2 0 150.6-10.4 150.6-23.3.1-12.9-67.4-23.3-150.6-23.3z" /></g><path transform="rotate(-15.729 209.665 30.682)" style="fill:#00417c" d="M179.9 29.4h59.5v2.7h-59.5z" /><path transform="rotate(-15.729 213.519 44.369)" style="fill:#00417c" d="M183.8 43h59.5v2.7h-59.5z" /><path transform="rotate(-15.729 217.373 58.056)" style="fill:#00417c" d="M187.6 56.7h59.5v2.7h-59.5z" /><circle transform="rotate(-15.729 193.873 35.336)" style="fill:#00417c" cx="193.9" cy="35.3" r="5" /><path style="fill:#e6e6e6" d="M194.8 30.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.9-2-3.2-3.8-3.5z" /><circle transform="rotate(-15.729 203.444 32.641)" style="fill:#00417c" cx="203.5" cy="32.6" r="5" /><path style="fill:#e6e6e6" d="M204.4 27.8c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" /><circle transform="rotate(-15.729 218.809 43.176)" style="fill:#00417c" cx="218.8" cy="43.2" r="5" /><path style="fill:#e6e6e6" d="M219.8 38.3c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" /><circle transform="rotate(-15.729 207.52 61.008)" style="fill:#00417c" cx="207.5" cy="61" r="5" /><path style="fill:#e6e6e6" d="M208.5 56.2c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" /><circle transform="rotate(-15.729 231.413 39.626)" style="fill:#00417c" cx="231.4" cy="39.6" r="5" /><path style="fill:#e6e6e6" d="M232.4 34.8c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" /><circle transform="rotate(-15.729 218.37 57.952)" style="fill:#00417c" cx="218.4" cy="58" r="5" /><path style="fill:#e6e6e6" d="M219.3 53.1c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.9-2-3.2-3.8-3.5z" /><circle transform="rotate(-15.729 221.408 27.582)" style="fill:#00417c" cx="221.4" cy="27.6" r="5" /><path style="fill:#e6e6e6" d="M222.4 22.7c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" /><path style="fill:#00417c" d="M193 81.3c-1.5.4-2.9-.5-3.3-1.9L176.1 31c-.4-1.5.4-3 1.8-3.4 1.5-.4 2.9.5 3.3 1.9l13.6 48.4c.4 1.5-.3 3-1.8 3.4z" /><path style="fill:#00417c" d="M177.9 27.6 193 81.3c1.7-.5 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.5-1.6-2.4-3.3-1.9zM249.9 65.3c-1.5.4-3.3-.3-3.7-1.8L232.5 15c-.4-1.5.8-3.1 2.3-3.5 1.5-.4 3.3.3 3.7 1.8l13.6 48.4c.5 1.6-.7 3.2-2.2 3.6z" /><path style="fill:#00417c" d="m235.2 11.4 15.1 53.7c.9-.2 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.4-2.4-2.1-3.3-1.9z" /><path style="fill:#00417c" d="m253 66-62.1 17.5c-2.2.6-4.4-.5-5-2.7-.6-2.2.7-4.3 2.9-5l62.1-17.5c2.2-.6 4.4.5 5 2.7.6 2.3-.7 4.4-2.9 5z" /><path style="fill:#00417c" d="M185.7 80.4c.7 2.6 3 3.8 5.2 3.2L253 66c2.2-.6 3.5-2.8 2.8-5.4l-70.1 19.8z" /><path style="fill:#515f70" d="M113.3 116.2H229v98.4H113.3z" /><path style="fill:#3b4651" d="m202 172 6.8 1.8-1.8 6.7 6.7 1.9-1.8 6.7 55.1-31.8-17.3-30.1-50.8 29.4-1.9 6.8 6.8 1.8z" /><path style="fill:#3b4651" d="M228.9 116.2h-29.4l29.4 51.1z" /><path transform="rotate(-30 245.002 149.36)" style="fill:#515f70" d="M224.8 85.7h40.5V213h-40.5z" /><path style="fill:#00b7ff" d="m204.9 170.2 6.7 1.9-1.8 6.7 6.8 1.9-1.8 6.7 55.1-31.8-17.4-30.1-50.8 29.4-1.8 6.8 6.8 1.8zM306.1 104.3c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-31.3 5-35.4 20.5-4.1 15.4 17.4 47 17.4 47s34.3-16.6 38.5-32.1zm-38.7-10.4c4.1-15.4 15.6-15.1 15.6-15.1s2.6 3.4-1.5 18.9c-4.1 15.4-14.6 26.9-14.6 26.9s-3.7-15.2.5-30.7z" /><path style="fill:#00b7ff" d="M335 154.4c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-47 17.4-47 17.4s16.6 34.4 32 38.5c15.5 4.1 31.4-5 35.5-20.5zm-30.8 3.3c-15.4-4.1-26.9-14.6-26.9-14.6s15.2-3.6 30.7.5c15.4 4.1 15.1 15.6 15.1 15.6s-3.5 2.7-18.9-1.5z" /><circle transform="rotate(-30 262.561 139.239)" style="fill:#07a1d1" cx="262.6" cy="139.2" r="17.4" /><path style="fill:#00b7ff" d="M148.5 107.4h-10.8c-.5 0-1.1-.1-1.4-.5l-24-24c-.4-.4-.6-.9-.6-1.4V70.7c0-.5.2-1.1.6-1.4l24-23.9c.4-.4.9-.5 1.4-.5h10.8c.5 0 1.1.1 1.4.5l24.1 24c.4.4.7.9.7 1.4v10.8c0 .5-.3 1.1-.7 1.4l-24 23.9c-.4.4-1 .5-1.5.5zm-10-3.9h9.1l22.6-22.8v-9.1l-22.6-22.8h-9.1l-22.9 22.8v9.1l22.9 22.8zm34-22z" /><path style="fill:#00b7ff" d="M143.7 92.4c-.2 0-.4-.1-.5-.2l-15.3-15.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z" /><path style="fill:#00b7ff" d="M139.1 97.7c-.4 0-.8-.2-1.1-.5l-23.5-23.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l22.4 22.4L142 91c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-4 4c-.2.3-.6.5-1.1.5z" /><path style="fill:#00b7ff" d="M142.8 91.9c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.2-.4.2-.6.2z" /><path style="fill:#00b7ff" d="M139.1 105.5c-.4 0-.8-.2-1.1-.5-.6-.6-.6-1.6 0-2.2l22.4-22.4-2.9-2.9c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l4 4c.6.6.6 1.6 0 2.2L140.2 105c-.3.3-.7.5-1.1.5z" /><path style="fill:#00b7ff" d="M157.8 77c-.2 0-.4-.1-.5-.2L142 61.5c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z" /><path style="fill:#00b7ff" d="M170.6 81.5c-.4 0-.8-.2-1.1-.5l-22.4-22.4-2.9 2.9c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2l4-4c.6-.6 1.6-.6 2.2 0l23.5 23.5c.6.6.6 1.6 0 2.2-.3.4-.7.5-1.1.5z" /><path style="fill:#00b7ff" d="M127.7 77.5c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.2-.4.2-.6.2z" /><path style="fill:#00b7ff" d="M127.3 77.7c-.4 0-.8-.2-1.1-.5l-4-4c-.6-.6-.6-1.6 0-2.2l23.5-23.5c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-22.4 22.4 2.9 2.9c.6.6.6 1.6 0 2.2-.3.4-.7.5-1.1.5zM173 148.6l-5.1 5.2-5.1-5.2-5.2 5.2-5.1-5.2v66h36v-60.8l-5.2-5.2-5.1 5.2z" /></symbol><radialGradient id="equatio-svg-free-license_a" cx="836.354" cy="85059.477" r="453.189" gradientTransform="matrix(.2376 0 0 .02555 -137.32 -1956.492)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1d1e1c" /><stop offset=".146" style="stop-color:#1d1e1c;stop-opacity:.8541" /><stop offset="1" style="stop-color:#1d1e1c;stop-opacity:0" /></radialGradient><symbol viewBox="0 0 66 54" id="equatio-svg-hamburger"><path style="fill:currentColor" d="M0 10.5c0 .8.7 1.5 1.5 1.5h63c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-63C.7 0 0 .7 0 1.5v9zm0 21c0 .8.7 1.5 1.5 1.5h63c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-63c-.8 0-1.5.7-1.5 1.5v9zm0 21c0 .8.7 1.5 1.5 1.5h63c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-63c-.8 0-1.5.7-1.5 1.5v9z" /></symbol><symbol viewBox="0 0 11.275 15.825" id="equatio-svg-help"><path fill="currentColor" d="M6.386 12.589h-1.8a.72.72 0 0 0-.718.718v1.8a.72.72 0 0 0 .718.718h1.8a.717.717 0 0 0 .714-.722v-1.8a.718.718 0 0 0-.718-.718ZM9.31 1.054A6.2 6.2 0 0 0 5.65.003c-.141 0-.285 0-.43.009A6.076 6.076 0 0 0 1.789 1.17 4.786 4.786 0 0 0 .013 4.08a.669.669 0 0 0 .113.523.722.722 0 0 0 .5.292c.263.035.53.066.794.1s.527.063.787.1c.031 0 .063.006.094.006a.844.844 0 0 0 .772-.583 2.646 2.646 0 0 1 2.363-1.94c.078-.006.157-.006.235-.006a2.422 2.422 0 0 1 2.2 1.107 1.559 1.559 0 0 1-.045 1.646 5.21 5.21 0 0 1-1.154 1.2l-.025.022-.216.179C5.189 7.753 3.9 8.813 3.965 11.175a.755.755 0 0 0 .756.715h1.546a.721.721 0 0 0 .709-.712A3.049 3.049 0 0 1 8.46 8.772c.129-.1.26-.213.389-.326.072-.063.144-.125.22-.188a4.981 4.981 0 0 0 2.2-3.406 4.224 4.224 0 0 0-1.959-3.8Z" /></symbol><symbol viewBox="0 0 61.3 143" id="equatio-svg-input-area-hint-texthelper"><path style="fill:#fd3269" d="M58 0H11.6C5 0 0 5.1 0 11.7v86.8c0 6.6 5 12.4 11.6 12.4H18v30.2c0 1 .5 1.8 1.5 1.8s1.5-.8 1.5-1.8V111h4v30.2c0 1 .5 1.8 1.5 1.8s1.5-.8 1.5-1.8V111h6c6.6 0 12-5.8 12-12.4V18L59.8 4.4C62.3 1.9 61.5 0 58 0z" /><path style="fill:#fff" d="M34.5 11.5c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7.1 1.5-1.2 2.7-2.7 2.7z" /><path style="fill:#fff" d="M37.3 8.8c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.4 0 2.7 1.2 2.7 2.7z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-copy"><circle cx="24" cy="24" r="18" fill="currentColor" /><g style="opacity:.54"><path style="fill:none" d="M15.521 15.521h16.958v16.958H15.521z" /><path d="M26.826 16.228h-8.479c-.78 0-1.413.633-1.413 1.413v9.892h1.413v-9.892h8.479v-1.413zm2.12 2.826h-7.772c-.78 0-1.413.633-1.413 1.413v9.892c0 .78.633 1.413 1.413 1.413h7.772c.78 0 1.413-.633 1.413-1.413v-9.892c0-.78-.633-1.413-1.413-1.413zm0 11.305h-7.772v-9.892h7.772v9.892z" /></g></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-cut"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#666a70" d="M22.538 19.615a2.923 2.923 0 1 0-2.924 2.923c.429 0 .832-.097 1.199-.263L22.538 24l-1.725 1.724a2.895 2.895 0 0 0-1.199-.263 2.923 2.923 0 1 0 2.923 2.923c0-.428-.097-.832-.263-1.199L24 25.462l4.385 4.385h2.923l-9.033-9.033c.166-.367.263-.771.263-1.199zm-2.923 1.462a1.462 1.462 0 1 1 0-2.924 1.462 1.462 0 0 1 0 2.924zm0 8.77a1.462 1.462 0 1 1 0-2.924 1.462 1.462 0 0 1 0 2.924zM24 23.635a.364.364 0 1 1 .001.729.364.364 0 0 1-.001-.729zm7.309-5.482h-2.923l-3.654 3.654 1.462 1.462 5.115-5.116z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-delete"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#666a70" d="M28.5 19.9h-9.2c-.3 0-.5.2-.5.5v9.9c0 1.1.9 2 1.9 2h6.2c1.1 0 1.9-.9 1.9-2v-9.9c.1-.3 0-.5-.3-.5zM29.6 17.9c0 .5-.4.9-1 .9h-9.2c-.5 0-1-.4-1-.9s.4-.9 1-.9h9.2c.5-.1 1 .3 1 .9z" /><path style="fill:#666a70" d="M26.5 18.1v-1.3c0-.6-1.2-1-2.6-1-1.4 0-2.6.5-2.6 1v1.3h5.2z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-download"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#fff" d="M31 24v7H17v-7h-2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .7 2.6-2.6 1.4 1.4-5 5-5-5 1.4-1.4 2.6 2.6V15h2v9.7z" /><path fill="none" d="M-2 14h24v24H-2V14z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-insert"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#fff" d="M16.8 33.2h14.4c1.1 0 2-.9 2-2V16.8c0-1.1-.9-2-2-2.1H16.8c-1.1 0-2.1.9-2.1 2.1v14.4c.1 1.1 1 2 2.1 2zm0-12.3h4.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1h4.1v10.3H16.8V20.9zm3.1 5.2H22v3.1h4.1v-3.1h2.1L24 21.9l-4.1 4.2z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-insert-image"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#666a70" d="M30.1 19.4v2.4h-1.6v-2.4h-2.4v-1.6h2.4v-2.4h1.6v2.4h2.4v1.6h-2.4zm-2.3 3.2v-2.4h-2.4v-2.4h-6.3c-.9 0-1.6.7-1.6 1.6v9.5c0 .9.7 1.6 1.6 1.6h9.5c.9 0 1.6-.7 1.6-1.6v-6.3h-2.4zm-8.7 6.3 2.4-3.2 1.6 2.4 2.4-3.2 3.2 3.9h-9.6z" /></symbol><symbol viewBox="0 0 45 45" id="equatio-svg-input-button-math"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#494949" d="M20.08 22.5a.66.66 0 0 1-.495-.222l-3.899-4.386a.662.662 0 0 1 .495-1.102h6.514a.662.662 0 1 1 0 1.324h-5.04l2.92 3.285a.661.661 0 0 1-.495 1.101z" /><path style="fill:#494949" d="M22.695 26.886h-6.514a.662.662 0 0 1-.495-1.102l3.899-4.386a.661.661 0 1 1 .989.879l-2.92 3.285h5.04a.662.662 0 0 1 .001 1.324z" /></symbol><symbol viewBox="0 0 45 45" id="equatio-svg-input-button-math-white"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#fff" d="M20.08 22.5a.66.66 0 0 1-.495-.222l-3.899-4.386a.662.662 0 0 1 .495-1.102h6.514a.662.662 0 1 1 0 1.324h-5.04l2.92 3.285a.661.661 0 0 1-.495 1.101z" /><path style="fill:#fff" d="M22.695 26.886h-6.514a.662.662 0 0 1-.495-1.102l3.899-4.386a.661.661 0 1 1 .989.879l-2.92 3.285h5.04a.662.662 0 0 1 .001 1.324z" /></symbol><symbol viewBox="0 0 25 25" id="equatio-svg-input-button-microphone"><path style="fill:currentColor" d="M19.1 10.1c0-.2-.2-.4-.4-.4h-.9c-.2 0-.4.2-.4.4v2.4c0 2.3-2.2 4.1-4.8 4.1-2.6 0-4.8-1.8-4.8-4.1v-2.4c0-.2-.2-.4-.4-.4h-1c-.2 0-.4.2-.4.4v2.5c0 2.9 2.5 5.3 5.7 5.6v2.3h-2c-.2 0-.4.2-.4.4v.8c0 .2.2.4.4.4h5.7c.2 0 .4-.2.4-.4v-.8c0-.2-.2-.4-.4-.4h-2v-2.3c3.2-.4 5.7-2.7 5.7-5.6v-2.5z" /><path style="fill:currentColor" d="M12.5 15.3c1.8 0 3.3-1.3 3.3-2.8V5.9c0-1.6-1.5-2.8-3.3-2.8S9.2 4.3 9.2 5.9v6.6c0 1.5 1.5 2.8 3.3 2.8z" /></symbol><symbol viewBox="0 0 25 25" id="equatio-svg-input-button-my"><path style="fill:currentColor" d="M6 9.1c0-.5.3-.8.8-.8h.5c.5 0 .7.2.9.6l1.5 3.4 1.5-3.4c.2-.4.4-.6.8-.6h.4c.5 0 .8.3.8.8v5.7c0 .5-.2.8-.6.8h-.3c-.4 0-.6-.3-.6-.8v-4.3l-1.2 2.9c-.1.3-.2.5-.8.5-.7 0-.7-.2-.8-.5l-1.2-2.9v4.2c0 .5-.2.8-.6.8h-.5c-.5 0-.6-.3-.6-.8V9.1zM13.8 10.5c0-.1.4-.5.9-.5.4 0 .7.2.9.8l1.2 3.1 1.1-3.1c.2-.6.5-.8.9-.8s.9.4.9.4l-2.5 6.5c-.2.6-.5.8-.9.8-.5 0-.9-.4-.8-.4l.9-2.1c-.3 0-.4-.1-.5-.4l-2.1-4.3z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-paste"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#666a70" d="M29.444 17H26.19a2.327 2.327 0 0 0-2.191-1.556A2.329 2.329 0 0 0 21.808 17h-3.254c-.858 0-1.554.697-1.554 1.556V31c0 .859.697 1.556 1.556 1.556h10.889c.858 0 1.555-.697 1.555-1.556V18.556c0-.859-.697-1.556-1.556-1.556zM24 17a.778.778 0 1 1 0 1.556A.778.778 0 0 1 24 17zm5.444 14H18.555V18.556h1.556v2.333h7.778v-2.333h1.556V31z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-redo"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#676b71" d="M24.791 18.105v-3.5l5 5-5 5v-4.5a6 6 0 1 0 6 6h2a8 8 0 1 1-8-8z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-save"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#666a70" d="M29.2 14.2H17.8c-1 0-1.9.9-1.9 1.9v13.2c0 1 .8 1.9 1.9 1.9H31c1 0 1.9-.9 1.9-1.9V17.9l-3.7-3.7zm-4.8 15.1c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm2.9-9.5h-9.4V16h9.4v3.8z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-share"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#fff" d="M30.29 27.379c-.764 0-1.454.297-1.979.773l-5.417-3.195c.073-.309.122-.625.122-.957 0-.342-.053-.668-.131-.986l5.402-3.186a2.942 2.942 0 0 0 2.003.793 2.956 2.956 0 0 0 2.957-2.957 2.956 2.956 0 0 0-2.957-2.957 2.956 2.956 0 0 0-2.957 2.957c0 .246.039.481.096.71l-5.284 3.115a4.11 4.11 0 0 0-3.261-1.62 4.131 4.131 0 1 0 0 8.264 4.113 4.113 0 0 0 3.28-1.644l5.273 3.11a2.954 2.954 0 0 0-.104.738 2.956 2.956 0 0 0 2.957 2.957 2.957 2.957 0 1 0 0-5.915z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-submit"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#fff" d="m16.5 32.2 19-8.2-19-8.2v6.3L30.1 24l-13.6 1.8v6.4z" /></symbol><symbol viewBox="0 0 48 48" id="equatio-svg-input-button-undo"><circle cx="24" cy="24" r="18" fill="currentColor" /><path style="fill:#676b71" d="M24 17.385v-3.5l-5 5 5 5v-4.5a6 6 0 1 1-6 6h-2a8 8 0 1 0 8-8z" /></symbol><symbol viewBox="0 0 1169.4 142.4" id="equatio-svg-input-handwriting-placeholder"><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:389 391;stroke-dashoffset:390;animation:lrszlYjZ_draw 303ms ease 0ms forwards" d="M23 29.3s82-24 99 26c0 0 17 50-112 77L48.2 10" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:139 141;stroke-dashoffset:140;animation:lrszlYjZ_draw 108ms ease 303ms forwards" d="M150.6 79.2s3 24.2-8 53.2c0 0 8-47 59-51" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:182 184;stroke-dashoffset:183;animation:lrszlYjZ_draw 142ms ease 412ms forwards" d="M252.6 90.4s1-48-51 33c0 0 4 17 25.5 0s32.5 0 32.5 0 17 13.1 28 7.6" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:227 229;stroke-dashoffset:228;animation:lrszlYjZ_draw 177ms ease 555ms forwards" d="M327 78.1s-56 99.8 30 16.4c0 0 18.1 97.3 54-20.5" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:227 229;stroke-dashoffset:228;animation:lrszlYjZ_draw 177ms ease 732ms forwards" d="M555.1 128.2s56-99.8-30-16.4c0 0-18.1-97.3-54 20.5" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:182 184;stroke-dashoffset:183;animation:lrszlYjZ_draw 142ms ease 910ms forwards" d="M640 90.4s1-48-51 33c0 0 4 17 25.5 0s32.5 0 32.5 0 17 13.1 28 7.6" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:126 128;stroke-dashoffset:127;animation:lrszlYjZ_draw 98ms ease 1052ms forwards" d="M722 39.5s-56 117.4 14 88.2" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:73 75;stroke-dashoffset:74;animation:lrszlYjZ_draw 57ms ease 1151ms forwards" d="m746 73.7-71-12" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:221 223;stroke-dashoffset:222;animation:lrszlYjZ_draw 172ms ease 1209ms forwards" d="m779 35.3-18 97s36-118 50 0" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:221 223;stroke-dashoffset:222;animation:lrszlYjZ_draw 172ms ease 1381ms forwards" d="m889.1 35.3-18 97s36-118 50 0" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:215 217;stroke-dashoffset:216;animation:lrszlYjZ_draw 168ms ease 1554ms forwards" d="M992.2 126.9s-73 24-35-28.5 60-24.5 51-11.5-12 20.8-49 20.9" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:139 141;stroke-dashoffset:140;animation:lrszlYjZ_draw 108ms ease 1722ms forwards" d="M1033.8 79.2s3 24.2-8 53.2c0 0 8-47 59-51" /><path style="fill:none;stroke:#cecece;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:215 217;stroke-dashoffset:216;animation:lrszlYjZ_draw 168ms ease 1831ms forwards" d="M1141.4 126.9s-73 24-35-28.5 60-24.5 51-11.5-12 20.8-49 20.9" /><style>@keyframes lrszlYjZ_draw{to{stroke-dashoffset:0}}@keyframes lrszlYjZ_fade{0%,93.54838709677419%{stroke-opacity:1}to{stroke-opacity:0}}</style></symbol><symbol viewBox="0 0 803.8 200" id="equatio-svg-logo"><path fill="#2a3953" d="M319.7 141.2H279v-32.9h38.3c2.1 0 3.4-1.3 3.4-3.3V93.2c0-2-1.4-3.4-3.4-3.4H279V59.6h40.6c2 0 3.3-1.3 3.3-3.4V44.5c0-2.1-1.3-3.4-3.3-3.4h-57.9c-2 0-3.3 1.3-3.3 3.4v111.9c0 2.1 1.3 3.4 3.3 3.4h57.9c2 0 3.4-1.4 3.4-3.4v-11.7c.1-2.1-1.3-3.5-3.3-3.5zm99.6-65.1h-12.2c-2 0-3.3 1.4-3.3 3.4l-.2 8.2c-6.3-8.9-15.9-13.6-28-13.6-23.4 0-40.3 18.4-40.3 43.8s17 43.8 40.3 43.8c11.5 0 20.8-4.2 27.1-12.3V188c0 2.1 1.3 3.4 3.3 3.4h13.4c2 0 3.3-1.4 3.3-3.4V79.5c-.1-2.1-1.4-3.4-3.4-3.4zm-40.2 67.3c-14.4 0-24.5-10.5-24.5-25.5s10.1-25.5 24.5-25.5c14.2 0 23.8 10.3 23.8 25.6 0 15.2-9.6 25.4-23.8 25.4zm131.7-67.3h-13.2c-2 0-3.3 1.4-3.3 3.4v44.4c0 11.7-7.3 19.3-18.6 19.3-10.9 0-16.9-6.8-16.9-19.3V79.5c0-2.1-1.3-3.4-3.3-3.4h-13.4c-2 0-3.3 1.4-3.3 3.4v47.7c0 21 12 34.5 30.6 34.5 13.1 0 20.7-6.4 24.9-12.7l.4 7.1c0 2.4 1.2 3.6 3.4 3.6h12.5c2 0 3.4-1.4 3.4-3.4V79.5c.3-2-1.1-3.4-3.2-3.4zm99.7 0h-12.2c-2 0-3.3 1.4-3.3 3.4l-.2 8.2c-6.3-8.9-15.9-13.6-28-13.6-23.4 0-40.3 18.4-40.3 43.8s17 43.8 40.3 43.8c12.1 0 21.8-4.7 28-13.6l.2 8.2c0 2.1 1.3 3.4 3.3 3.4h12.2c2 0 3.3-1.3 3.3-3.4V79.5c0-2.1-1.3-3.4-3.3-3.4zm-40.2 67.3c-14.4 0-24.5-10.5-24.5-25.5s10.1-25.5 24.5-25.5c14.2 0 23.8 10.3 23.8 25.6 0 15.2-9.6 25.4-23.8 25.4zm100-67.3H658V57.8c0-2.1-1.3-3.4-3.3-3.4h-13.5c-2 0-3.3 1.3-3.3 3.4v18.3h-9.6c-2 0-3.3 1.3-3.3 3.4v9.4c0 2.1 1.3 3.4 3.3 3.4h9.6v47.5c0 14.2 7.9 22 22.3 22 2.2 0 13.3-.3 13.3-5.3v-8.8c0-1-.3-1.9-.9-2.5-.7-.6-1.8-.9-3.1-.8-1.9.2-3.8.3-5.1.3-4.4 0-6.4-2.2-6.4-6.9V92.3h12.3c2 0 3.4-1.4 3.4-3.4v-9.4c0-2-1.4-3.4-3.4-3.4zm24.9-34.4c-6.4 0-11.4 5-11.4 11.3 0 6.4 5 11.4 11.4 11.4 6.3 0 11.3-5 11.3-11.4-.1-6.4-5-11.3-11.3-11.3zm6.6 34.4h-13.5c-2 0-3.3 1.4-3.3 3.4v76.8c0 2.1 1.3 3.4 3.3 3.4h13.5c2 0 3.3-1.4 3.3-3.4V79.5c0-2-1.3-3.4-3.3-3.4zm58.8-2c-24.7 0-43.3 18.8-43.3 43.8s18.6 43.8 43.3 43.8c24.6 0 43.2-18.8 43.2-43.8s-18.6-43.8-43.2-43.8zm0 69.1c-14 0-24.1-10.6-24.1-25.3s10.1-25.3 24.1-25.3c13.9 0 24 10.6 24 25.3s-10.1 25.3-24 25.3z" /><circle cx="100" cy="100" r="100" fill="#00b7ff" /><path fill="#fff" d="m165.8 85.4-51.2-51.2c-.8-.8-1.9-1.3-3.1-1.3H88.4c-1.1 0-2.2.4-3.1 1.3L34.2 85.4c-.8.8-1.3 1.9-1.3 3.1v23.1c0 1.1.4 2.2 1.3 3.1l51.2 51.2c.8.8 1.9 1.3 3.1 1.3h23.1c1.1 0 2.2-.4 3.1-1.3l51.2-51.2c.8-.8 1.3-1.9 1.3-3.1V88.4c-.1-1.1-.5-2.2-1.4-3zm-7.4 4.8v12.9l-47.6-47.6c-1.3-1.3-3.4-1.3-4.8 0L97.6 64c-1.3 1.3-1.3 3.4-.1 4.7L68.6 97.6l-6.1-6.1 47.8-47.8c.3-.3.5-.6.7-1l47.4 47.5zm-87.7 10L99.9 71l29.1 29.1-29.2 29.2-29.1-29.1zm19.5-58.6h12.7L55.3 89.2c-1.3 1.3-1.3 3.4 0 4.8l8.5 8.5c.7.7 1.5 1 2.4 1 .8 0 1.6-.3 2.2-.9l29.2 29.2-6.1 6.1L43.7 90c-.3-.3-.8-.6-1.2-.8l47.7-47.6zm-48.6 68.2V97.4L89.2 145c.6.6 1.5 1 2.4 1 .9 0 1.7-.3 2.4-1l8.5-8.5c1.3-1.3 1.3-3.4 0-4.8-.1-.1-.2-.1-.2-.2l28.5-28.5 6.1 6.1L89 156.9l-.2.2-47.2-47.3zm68.2 48.6H97l46.9-46.9c1.3-1.3 1.3-3.4 0-4.8l-8.5-8.5c-1.1-1.1-2.9-1.3-4.1-.4l-29-29 6.1-6.1 47.8 47.8c.3.3.6.4.8.6l-47.2 47.3z" /></symbol><symbol viewBox="0 0 803.8 200" id="equatio-svg-logo-color"><path fill="#fff" d="M319.7 141.2H279v-32.9h38.3c2.1 0 3.4-1.3 3.4-3.3V93.2c0-2-1.4-3.4-3.4-3.4H279V59.6h40.6c2 0 3.3-1.3 3.3-3.4V44.5c0-2.1-1.3-3.4-3.3-3.4h-57.9c-2 0-3.3 1.3-3.3 3.4v111.9c0 2.1 1.3 3.4 3.3 3.4h57.9c2 0 3.4-1.4 3.4-3.4v-11.7c.1-2.1-1.3-3.5-3.3-3.5zm99.6-65.1h-12.2c-2 0-3.3 1.4-3.3 3.4l-.2 8.2c-6.3-8.9-15.9-13.6-28-13.6-23.4 0-40.3 18.4-40.3 43.8s17 43.8 40.3 43.8c11.5 0 20.8-4.2 27.1-12.3V188c0 2.1 1.3 3.4 3.3 3.4h13.4c2 0 3.3-1.4 3.3-3.4V79.5c-.1-2.1-1.4-3.4-3.4-3.4zm-40.2 67.3c-14.4 0-24.5-10.5-24.5-25.5s10.1-25.5 24.5-25.5c14.2 0 23.8 10.3 23.8 25.6 0 15.2-9.6 25.4-23.8 25.4zm131.7-67.3h-13.2c-2 0-3.3 1.4-3.3 3.4v44.4c0 11.7-7.3 19.3-18.6 19.3-10.9 0-16.9-6.8-16.9-19.3V79.5c0-2.1-1.3-3.4-3.3-3.4h-13.4c-2 0-3.3 1.4-3.3 3.4v47.7c0 21 12 34.5 30.6 34.5 13.1 0 20.7-6.4 24.9-12.7l.4 7.1c0 2.4 1.2 3.6 3.4 3.6h12.5c2 0 3.4-1.4 3.4-3.4V79.5c.3-2-1.1-3.4-3.2-3.4zm99.7 0h-12.2c-2 0-3.3 1.4-3.3 3.4l-.2 8.2c-6.3-8.9-15.9-13.6-28-13.6-23.4 0-40.3 18.4-40.3 43.8s17 43.8 40.3 43.8c12.1 0 21.8-4.7 28-13.6l.2 8.2c0 2.1 1.3 3.4 3.3 3.4h12.2c2 0 3.3-1.3 3.3-3.4V79.5c0-2.1-1.3-3.4-3.3-3.4zm-40.2 67.3c-14.4 0-24.5-10.5-24.5-25.5s10.1-25.5 24.5-25.5c14.2 0 23.8 10.3 23.8 25.6 0 15.2-9.6 25.4-23.8 25.4zm100-67.3H658V57.8c0-2.1-1.3-3.4-3.3-3.4h-13.5c-2 0-3.3 1.3-3.3 3.4v18.3h-9.6c-2 0-3.3 1.3-3.3 3.4v9.4c0 2.1 1.3 3.4 3.3 3.4h9.6v47.5c0 14.2 7.9 22 22.3 22 2.2 0 13.3-.3 13.3-5.3v-8.8c0-1-.3-1.9-.9-2.5-.7-.6-1.8-.9-3.1-.8-1.9.2-3.8.3-5.1.3-4.4 0-6.4-2.2-6.4-6.9V92.3h12.3c2 0 3.4-1.4 3.4-3.4v-9.4c0-2-1.4-3.4-3.4-3.4zm24.9-34.4c-6.4 0-11.4 5-11.4 11.3 0 6.4 5 11.4 11.4 11.4 6.3 0 11.3-5 11.3-11.4-.1-6.4-5-11.3-11.3-11.3zm6.6 34.4h-13.5c-2 0-3.3 1.4-3.3 3.4v76.8c0 2.1 1.3 3.4 3.3 3.4h13.5c2 0 3.3-1.4 3.3-3.4V79.5c0-2-1.3-3.4-3.3-3.4zm58.8-2c-24.7 0-43.3 18.8-43.3 43.8s18.6 43.8 43.3 43.8c24.6 0 43.2-18.8 43.2-43.8s-18.6-43.8-43.2-43.8zm0 69.1c-14 0-24.1-10.6-24.1-25.3s10.1-25.3 24.1-25.3c13.9 0 24 10.6 24 25.3s-10.1 25.3-24 25.3z" /><circle cx="100" cy="100" r="100" fill="#fff" /><path fill="#00b7ff" d="m165.8 85.4-51.2-51.2c-.8-.8-1.9-1.3-3.1-1.3H88.4c-1.1 0-2.2.4-3.1 1.3L34.2 85.4c-.8.8-1.3 1.9-1.3 3.1v23.1c0 1.1.4 2.2 1.3 3.1l51.2 51.2c.8.8 1.9 1.3 3.1 1.3h23.1c1.1 0 2.2-.4 3.1-1.3l51.2-51.2c.8-.8 1.3-1.9 1.3-3.1V88.4c-.1-1.1-.5-2.2-1.4-3zm-7.4 4.8v12.9l-47.6-47.6c-1.3-1.3-3.4-1.3-4.8 0L97.6 64c-1.3 1.3-1.3 3.4-.1 4.7L68.6 97.6l-6.1-6.1 47.8-47.8c.3-.3.5-.6.7-1l47.4 47.5zm-87.7 10L99.9 71l29.1 29.1-29.2 29.2-29.1-29.1zm19.5-58.6h12.7L55.3 89.2c-1.3 1.3-1.3 3.4 0 4.8l8.5 8.5c.7.7 1.5 1 2.4 1 .8 0 1.6-.3 2.2-.9l29.2 29.2-6.1 6.1L43.7 90c-.3-.3-.8-.6-1.2-.8l47.7-47.6zm-48.6 68.2V97.4L89.2 145c.6.6 1.5 1 2.4 1 .9 0 1.7-.3 2.4-1l8.5-8.5c1.3-1.3 1.3-3.4 0-4.8-.1-.1-.2-.1-.2-.2l28.5-28.5 6.1 6.1L89 156.9l-.2.2-47.2-47.3zm68.2 48.6H97l46.9-46.9c1.3-1.3 1.3-3.4 0-4.8l-8.5-8.5c-1.1-1.1-2.9-1.3-4.1-.4l-29-29 6.1-6.1 47.8 47.8c.3.3.6.4.8.6l-47.2 47.3z" /></symbol><symbol viewBox="0 0 37.4 37.4" id="equatio-svg-logo-icon"><path transform="rotate(-45.001 18.711 18.71)" style="fill:#00b7ff" d="M13.1 13.1h11.2v11.2H13.1z" /><path style="fill:#00b7ff" d="M18.7 27.9c-.3 0-.7-.1-.9-.4l-7.9-7.9c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l7.9-7.9c.5-.5 1.3-.5 1.8 0l7.9 7.9c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-7.9 7.9c-.2.3-.6.4-.9.4zm-6.1-9.2 6.1 6.1 6.1-6.1-6.1-6.1-6.1 6.1z" /><path style="fill:#00b7ff" d="m21.1 8.5 13.3 13.3L21 35.1h-3.1l13.3-13.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7L28.8 18c-.4-.4-1.1-.4-1.5 0l-7.9-7.9 1.7-1.6z" /><path style="fill:#00b7ff" d="M21 36.4h-3.1c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l13.1-13.1-2-2c-.2.1-.5.2-.7.2-.3 0-.7-.1-.9-.4l-8-7.9c-.5-.5-.5-1.3 0-1.8l1.6-1.6c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l13.3 13.3c.5.5.5 1.3 0 1.8L21.9 36c-.2.2-.5.4-.9.4z" /><path style="fill:#00b7ff" d="m21.8 3.1 13.3 13.3v3.1L21.8 6.2c-.4-.4-1.1-.4-1.5 0L18 8.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l-7.9 8-1.6-1.6L21.8 3.1z" /><path style="fill:#00b7ff" d="M35.1 20.8c-.3 0-.7-.1-.9-.4L21.1 7.3l-2 2c.3.5.3 1.2-.2 1.6l-7.9 8c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4l-1.6-1.6c-.2-.2-.4-.6-.4-.9s.1-.7.4-.9L20.9 2.2c.5-.5 1.3-.5 1.8 0L36 15.5c.2.2.4.6.4.9v3.1c0 .5-.3 1-.8 1.2-.2.1-.3.1-.5.1z" /><path style="fill:#00b7ff" d="m2.3 17.9 13.3 13.3c.2.2.5.3.7.3.3 0 .5-.1.7-.3l2.3-2.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7l7.9-7.9 1.6 1.6-13.1 13.1L2.3 21v-3.1z" /><path style="fill:#00b7ff" d="M15.7 35.6c-.3 0-.7-.1-.9-.4L1.4 21.9c-.2-.2-.4-.5-.4-.9v-3.1c0-.5.3-1 .8-1.2.5-.2 1-.1 1.4.3l13.1 13.1 2-2c-.3-.5-.3-1.2.2-1.6l7.9-7.9c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l1.6 1.6c.5.5.5 1.3 0 1.8L16.6 35.3c-.3.2-.6.3-.9.3zm2.8-7.7z" /><path style="fill:#00b7ff" d="M16.4 2.3h3.1L6.2 15.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l2.3 2.3c.4.4 1.1.4 1.5 0l7.9 7.9-1.6 1.6L3.1 15.7 16.4 2.3z" /><path style="fill:#00b7ff" d="M16.4 30.2c-.3 0-.7-.1-.9-.4L2.2 16.6c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9L15.5 1.4c.2-.2.6-.4.9-.4h3.1c.5 0 1 .3 1.2.8s.1 1-.3 1.4L7.3 16.4l2 2c.1-.1.2-.1.2-.1.5-.2 1-.1 1.4.3l7.9 7.9c.5.5.5 1.3 0 1.8l-1.6 1.6c-.2.2-.5.3-.8.3z" /><path style="fill:#00b7ff" d="M21 1.3h.4c.1 0 .1.1.2.1 0 0 .1 0 .1.1.1.1.2.2.3.4.1.1.1.3.1.4 0 .3-.1.5-.3.7l-.8-.7h-1.5l.7-.7c.3-.2.6-.3.8-.3z" /><path style="fill:#00b7ff" d="M21.8 4.4c-.3 0-.7-.1-.9-.4l-.4-.4h-1c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l.7-.7C19.8.2 20.4 0 21 0h.5c.1 0 .1 0 .2.1 0 0 .1 0 .2.1.2.1.3.1.4.2l.1.1c.1 0 .1.1.2.1.2.2.4.5.5.8.1.3.2.6.2.9 0 .6-.3 1.2-.7 1.7-.2.2-.5.4-.8.4zm-.5-1.6zm-.1-.2zm-.1 0zM21.1 1.3H21h.1z" /><path style="fill:#00b7ff" d="M21.1 2.6h-.2c-.7 0-1.3-.6-1.3-1.3.1-.7.7-1.3 1.4-1.3h.3c.6.1 1.1.6 1.1 1.3v.2c-.1.6-.6 1.1-1.3 1.1zM21.2 1.3z" /><path style="fill:#00b7ff" d="M21.2 2.6H21c-.6-.1-1.2-.6-1.2-1.3 0-.7.6-1.3 1.3-1.3H21.4c.7.1 1.2.7 1.1 1.4-.1.7-.6 1.2-1.3 1.2zm-.1 0zM21.4 1.3h-.1.1z" /><path style="fill:#00b7ff" d="M21.4 2.6c-.1 0-.3 0-.4-.1-.6-.1-1-.7-1-1.3V.9c.1-.7.8-1.1 1.5-1 .1 0 .2 0 .3.1.5.2.9.7.9 1.2 0 .1 0 .3-.1.4-.2.7-.7 1-1.2 1zm-.4 0zm-.1 0zM21.4 1.4z" /><path style="fill:#00b7ff" d="M21.4 2.7c-.2 0-.4 0-.5-.1-.5-.2-.8-.7-.8-1.2 0-.1 0-.3.1-.4.2-.7 1-1 1.7-.8 0 0 .1 0 .2.1.5.2.7.7.7 1.2 0 .2 0 .4-.1.6-.3.3-.8.6-1.3.6zM21.7 1.6c0-.1 0-.1 0 0 0-.1 0-.1 0 0z" /><path style="fill:#00b7ff" d="M21.7 2.8c-.3 0-.6-.1-.8-.3-.6-.4-.7-1.2-.3-1.7.4-.6 1.1-.8 1.7-.4l.3.3c.3.2.4.5.4.8 0 .3-.1.7-.4.9-.2.3-.6.4-.9.4zm-.9-.3z" /><path style="fill:#00b7ff" d="M22.1 2.3c0-.1 0-.3-.1-.4-.1-.1-.1-.3-.3-.4l14.1 14.1c.2.2.3.5.3.7V21c0-.3-.1-.5-.3-.7l-.7-.7v-3.1L21.8 3.1c.2-.2.3-.5.3-.8z" /><path style="fill:#00b7ff" d="M36.1 22.3c-.7 0-1.2-.5-1.3-1.2l-.7-.7c-.2-.2-.4-.6-.4-.9v-2.6L20.9 4c-.2-.2-.4-.6-.4-.9 0-.3.1-.5.2-.7-.4-.5-.4-1.1 0-1.6s1.2-.6 1.8-.2c.1.1.1.1.2.1l14.1 14.1c.4.4.7 1 .7 1.7V21c-.1.7-.7 1.3-1.4 1.3zM34.8 21zM20.9 2.5z" /><path style="fill:#00b7ff" d="M19.5 2.3H21l-14 14 2.3 2.3.7.7c-.4.4-1.1.4-1.5 0L6.2 17c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7L19.5 2.3z" /><path style="fill:#00b7ff" d="M9.3 21c-.6 0-1.2-.2-1.6-.7L5.3 18c-.4-.4-.7-1-.7-1.7 0-.6.2-1.2.7-1.7L18.6 1.4c.2-.2.6-.4.9-.4H21c.5 0 1 .3 1.2.8.2.5.1 1-.3 1.4L8.8 16.4l1.4 1.4s.1 0 .1.1l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9-.5.4-1.1.6-1.7.6z" /><path style="fill:#00b7ff" d="m21 2.3.8.8L8.5 16.4l1.6 1.6-.8.7L7 16.4z" /><path style="fill:#00b7ff" d="M9.3 20c-.3 0-.7-.1-.9-.4l-2.3-2.3c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l14-14c.5-.5 1.3-.5 1.8 0l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9L10.3 16.4l.7.7c.5.5.5 1.3 0 1.8l-.7.7c-.3.3-.6.4-1 .4z" /><path style="fill:#00b7ff" d="M20.3 6.2c.4-.4 1.1-.4 1.5 0l13.3 13.3V21l-14-14-2.3 2.3-.8.8c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7l2.3-2.5z" /><path style="fill:#00b7ff" d="M35.1 22.3c-.3 0-.7-.1-.9-.4L21.1 8.8 18.9 11c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4-.4-.4-.7-1-.7-1.7 0-.6.2-1.2.7-1.6l2.3-2.3c.9-.9 2.4-.9 3.3 0L36 18.6c.2.2.4.6.4.9V21c0 .5-.3 1-.8 1.2-.2.1-.3.1-.5.1z" /><path style="fill:#00b7ff" d="m21.1 7 14 14-.8.8L21.1 8.5l-1.6 1.6-.8-.8z" /><path style="fill:#00b7ff" d="M34.3 23.1c-.3 0-.7-.1-.9-.4L21.1 10.3l-.7.7c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4l-.7-.7c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l2.3-2.3c.5-.5 1.3-.5 1.8 0l14 14c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.3.2-.6.3-1 .4z" /><path transform="rotate(-45.001 18.712 10.074)" style="fill:#00b7ff" d="M18.2 9.5h1.1v1.1h-1.1z" /><path style="fill:#00b7ff" d="M18.7 12.1c-.3 0-.7-.1-.9-.4l-.7-.7c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.5-.5 1.3-.5 1.8 0l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.2.3-.6.4-.9.4z" /><path transform="rotate(-45.001 23.03 14.392)" style="fill:#00b7ff" d="M22.5 8.8h1V20h-1z" /><path style="fill:#00b7ff" d="M26.6 20c-.3 0-.7-.1-.9-.4l-7.9-7.9c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l7.9 7.9c.5.5.5 1.3 0 1.8l-.7.7c-.2.3-.6.4-.9.4z" /><path transform="rotate(-45.001 14.393 14.393)" style="fill:#00b7ff" d="M8.8 13.9H20V15H8.8z" /><path style="fill:#00b7ff" d="M10.8 20c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l7.9-7.9c.5-.5 1.3-.5 1.8 0l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-7.9 7.9c-.2.3-.5.4-.9.4zM1.6 15.7 15.7 1.6c.2-.2.5-.3.7-.3H21c-.3 0-.5.1-.7.3l-.7.7h-3.1L3.1 15.7c-.3-.3-.8-.4-1.1-.2-.2 0-.3.1-.4.2z" /><path style="fill:#00b7ff" d="M1.6 17c-.3 0-.6-.1-.8-.3-.5-.5-.6-1.2-.2-1.8l.1-.1L14.7.7c.4-.4 1-.7 1.7-.7H21c.7 0 1.3.6 1.3 1.3 0 .7-.5 1.2-1.2 1.3l-.7.7c-.2.2-.6.4-.9.4h-2.6L4 16.6c-.4.4-1.1.5-1.6.1-.3.2-.6.3-.8.3z" /><path style="fill:#00b7ff" d="m3.1 15.7 13.3 13.2 1.6-1.6.7.8-2.3 2.3-14.1-14z" /><path style="fill:#00b7ff" d="M16.4 31.7c-.3 0-.7-.1-.9-.4l-14-14c-.3-.2-.5-.6-.5-.9 0-.3.1-.7.4-.9l.7-.7c.5-.5 1.3-.5 1.8 0l12.4 12.4.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.5.5.5 1.3 0 1.8l-2.3 2.3c-.2.3-.5.4-.8.4z" /><path style="fill:#00b7ff" d="M1.6 15.7c-.1.1-.1.1-.1.2 0-.1 0-.1.1-.2z" /><path style="fill:#00b7ff" d="M1.4 17.2c-.2 0-.4 0-.6-.1-.4-.2-.7-.7-.7-1.1 0-.2 0-.4.1-.6.1-.2.2-.3.3-.5.5-.5 1.3-.6 1.8-.1.3.3.4.6.4 1 0 .3-.1.6-.3.8-.1.4-.5.6-1 .6zM1.4 15.9s0 .1 0 0c0 .1 0 0 0 0z" /><path style="fill:#00b7ff" d="M1.4 17.3c-.1 0-.3 0-.4-.1-.7-.2-1-1-.8-1.6.1-.2.1-.3.2-.4.4-.6 1.3-.6 1.8-.2.3.3.5.6.5 1 0 .2 0 .4-.1.6-.3.4-.7.7-1.2.7zm1-.6zm0 0zM1.3 16.2s0 .1 0 0c0 .1 0 0 0 0z" /><path style="fill:#00b7ff" d="M1.3 17.6h-.1c-.7-.1-1.2-.7-1.2-1.3 0-.2 0-.3.1-.5.2-.7 1-1 1.6-.8.5.2.9.7.9 1.2v.2c-.1.7-.7 1.2-1.3 1.2zm1.2-1zm0 0zM1.3 16.3z" /><path style="fill:#00b7ff" d="M1.3 17.6c-.6 0-1.2-.4-1.3-1.1V16c.1-.7.8-1.2 1.5-1 .6.1 1 .7 1 1.3v.1c0 .6-.5 1.1-1.1 1.2h-.1zm1.3-1.1z" /><path style="fill:#00b7ff" d="M1.3 16.3v-.1c0-.1 0-.2.1-.2 0-.1.1-.1.1-.2.1-.1.2-.2.4-.3.4-.2.8-.1 1.1.2l-.7.7v1.5l-.7-.7c-.2-.3-.3-.5-.3-.9 0 .1 0 0 0 0z" /><path style="fill:#00b7ff" d="M2.3 19.2c-.3 0-.7-.1-.9-.4l-.7-.7C.2 17.6 0 17 0 16.4v-.5c0-.2.1-.3.1-.5 0 0 0-.1.1-.1v-.1c.1-.2.2-.3.3-.4.2-.2.5-.5.8-.6.9-.4 1.9-.2 2.6.5.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.4.4v.9c0 .5-.3 1-.8 1.2 0 .1-.2.2-.4.2z" /><path style="fill:#00b7ff" d="m2.3 16.4 14 14 2.3-2.3.7-.7c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17 31.1c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3L2.3 17.9v-1.5z" /><path style="fill:#00b7ff" d="M16.4 32.8c-.6 0-1.2-.2-1.7-.7L1.4 18.8c-.2-.2-.4-.6-.4-.9v-1.5c0-.5.3-1 .8-1.2.5-.2 1-.1 1.4.3l13.1 13.1 2.2-2.2c.2-.2.6-.4.9-.4.3 0 .7.1.9.4.4.4.7 1 .7 1.7 0 .6-.2 1.2-.7 1.7L18 32.1c-.4.4-1 .7-1.6.7zm2.1-4.9z" /><path style="fill:#00b7ff" d="M27.3 18c.4-.4 1.1-.4 1.5 0l2.3 2.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17.9 35.1h-1.5l14-14-2.3-2.3-.8-.8z" /><path style="fill:#00b7ff" d="M17.9 36.4h-1.5c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l13.1-13.1-2.2-2.2c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9.4-.4 1-.7 1.7-.7s1.2.2 1.7.7l2.3 2.3c.4.4.7 1 .7 1.7 0 .6-.2 1.2-.7 1.7L18.8 36c-.2.2-.6.4-.9.4z" /><path transform="rotate(-45.001 10.074 18.71)" style="fill:#00b7ff" d="M9.6 18.2h1v1h-1z" /><path style="fill:#00b7ff" d="M10.1 20.7c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.8c-.3.2-.6.3-.9.3z" /><path transform="rotate(-45.001 27.348 18.71)" style="fill:#00b7ff" d="M26.8 18.2h1v1.1h-1z" /><path style="fill:#00b7ff" d="M27.3 20.7c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.2.3-.5.4-.9.4z" /><path style="fill:#00b7ff" d="m26.6 18.7.7.8-7.8 7.8-.8-.7z" /><path style="fill:#00b7ff" d="M19.5 28.6c-.2 0-.3 0-.5-.1s-.3-.2-.5-.3l-.7-.7c-.5-.5-.5-1.3 0-1.8l7.9-7.9c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.5.5.5 1.3 0 1.8l-7.9 7.9c-.2.3-.5.4-.8.4z" /><path transform="rotate(-44.887 14.392 23.028)" style="fill:#00b7ff" d="M13.9 17.4h1v11.2h-1z" /><path style="fill:#00b7ff" d="M18 28.6c-.3 0-.7-.1-.9-.4l-7.9-7.9c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.5-.5 1.3-.5 1.8 0l7.9 7.9c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.3.3-.6.4-.9.4zM28.1 18.7l2.3 2.4-14 14-.7-.8 13.2-13.2-1.6-1.6z" /><path style="fill:#00b7ff" d="M16.4 36.4c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l12.4-12.4-.7-.7c-.5-.5-.5-1.3 0-1.8l.7-.7c.5-.5 1.3-.5 1.8 0l2.3 2.3c.5.5.5 1.3 0 1.8l-14 14c-.2.2-.6.4-.9.4zM35.1 19.5l.7.7c.2.2.3.5.3.7V21.2c0 .1 0 .1-.1.1v.1c0 .1-.1.1-.1.2-.1.1-.2.2-.3.2-.4.2-.8.1-1.1-.2l.7-.7v-1.4z" /><path style="fill:#00b7ff" d="M35.1 23.4c-.6 0-1.2-.2-1.7-.7-.5-.5-.5-1.3 0-1.8l.4-.4v-.9c0-.5.3-1 .8-1.2.5-.2 1-.1 1.4.3l.7.7c.4.4.7 1 .7 1.7v.2c0 .1 0 .2-.1.4v.1c0 .1-.1.2-.1.3 0 .1-.1.1-.1.2-.1.1-.2.3-.3.4l-.1.1c-.2.2-.5.4-.7.5-.3 0-.6.1-.9.1zm-.4-2.2zm0 0zm0 0zm.4-.2zM36.1 21.1V21v.1z" /><path style="fill:#00b7ff" d="M36.1 22.4H36c-.7-.1-1.2-.6-1.2-1.3V21c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3v.2c0 .7-.6 1.2-1.3 1.2zM34.8 21zM36.1 21.3z" /><path style="fill:#00b7ff" d="M36.1 22.6c-.2 0-.3 0-.5-.1-.6-.2-1-.9-.8-1.6v-.2c.2-.6.9-1 1.6-.8.7.2 1.1.9.9 1.6 0 .1 0 .2-.1.3-.2.6-.6.8-1.1.8zm1.2-1zM36 21.5z" /><path style="fill:#00b7ff" d="M36 22.8c-.3 0-.5-.1-.7-.2-.4-.3-.5-.6-.5-1.1 0-.2.1-.4.2-.6.3-.6 1-.9 1.6-.6.5.2.8.7.8 1.2 0 .2 0 .3-.1.5 0 .1-.1.3-.2.4-.3.2-.7.4-1.1.4zM34.8 21zm.1-.2z" /><path style="fill:#00b7ff" d="M35.9 21.7c0-.1.1-.1.1-.2 0 .1-.1.2-.1.2z" /><path style="fill:#00b7ff" d="M35.9 23c-.3 0-.6-.1-.9-.3-.3-.3-.4-.6-.4-1 0-.3.1-.6.3-.8.3-.6 1.1-.8 1.7-.5.4.2.7.7.7 1.1 0 .2 0 .4-.1.6-.1.2-.2.3-.3.4-.3.3-.7.5-1 .5zM35.8 21.7c.1 0 .1 0 0 0 .1 0 .1 0 0 0z" /><path style="fill:#00b7ff" d="M35.8 23c-.3 0-.7-.1-.9-.4-.3-.3-.4-.6-.4-.9 0-.3.1-.6.4-.9l.1-.1c.5-.5 1.3-.5 1.8-.1.5.5.6 1.2.1 1.8 0 .1-.1.1-.1.1-.3.4-.6.5-1 .5zm-.3-1.6-.5-.5.5.5zm-.6-.6zm0 0z" /><path style="fill:#00b7ff" d="m35.8 21.8-14 14c-.2.2-.5.3-.7.3h-4.6c.3 0 .5-.1.7-.3l.7-.7H21l13.3-13.3c.3.3.8.4 1.1.2.2-.1.3-.1.4-.2z" /><path style="fill:#00b7ff" d="M21 37.4h-4.6c-.7 0-1.3-.6-1.3-1.3 0-.7.5-1.2 1.2-1.3l.7-.7c.2-.2.6-.4.9-.4h2.6l12.9-12.9c.2-.2.6-.4.9-.4.3 0 .5.1.7.2.5-.4 1.2-.3 1.6.1.5.5.5 1.3 0 1.8l-14 14c-.4.7-1 .9-1.6.9zM18.7 26.6l.8.7-.8.8-.7-.8z" /><path style="fill:#00b7ff" d="M18.7 29.4c-.3 0-.7-.1-.9-.4l-.7-.7c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.2.2-.5.4-.9.4zM15.7 34.3l.7.7h1.5l-.7.7c-.2.2-.5.3-.7.3h-.4c-.1 0-.1-.1-.2-.1l-.1-.1c-.1-.1-.2-.2-.3-.4-.1-.1-.1-.3-.1-.4-.1-.2.1-.5.3-.7z" /><path style="fill:#00b7ff" d="M16.4 37.4H15.8c-.1 0-.2 0-.3-.1h-.1c-.1-.1-.2-.1-.4-.2-.1 0-.1-.1-.2-.2l-.1-.1c-.2-.2-.4-.5-.6-.8-.1-.3-.2-.6-.2-.9 0-.6.2-1.2.7-1.7.5-.5 1.3-.5 1.8 0l.4.4h1c.5 0 1 .3 1.2.8.2.5.1 1-.3 1.4l-.7.7c-.4.5-1 .7-1.6.7zm-.1-2.6z" /><path style="fill:#00b7ff" d="m15.7 35.8-14.1-14c-.2-.2-.3-.5-.3-.7v-4.6c0 .3.1.5.3.7l.7.7V21l13.3 13.3c-.2.2-.3.5-.3.7 0 .1 0 .3.1.4.1.2.2.4.3.4z" /><path style="fill:#00b7ff" d="M15.7 37.1c-.3 0-.5-.1-.8-.3-.1-.1-.1-.1-.2-.1l-14-14C.3 22.2 0 21.6 0 21v-4.6c0-.7.6-1.3 1.3-1.3.7 0 1.2.5 1.3 1.2l.6.7c.2.2.4.6.4.9v2.6l12.9 12.9c.2.2.4.6.4.9 0 .3-.1.5-.2.7.4.5.4 1.1 0 1.6-.3.4-.6.5-1 .5zm.2-1.5.7-.7-.7.7z" /><path style="fill:#00b7ff" d="m15.7 35.9.1.1c0-.1-.1-.1-.1-.1z" /><path style="fill:#00b7ff" d="M15.8 37.2c-.2 0-.4-.1-.6-.2-.1-.1-.2-.2-.3-.2-.5-.5-.6-1.3-.2-1.8.4-.5 1.1-.6 1.6-.3.1 0 .1.1.2.1.6.4.7 1.2.4 1.7-.2.5-.7.7-1.1.7z" /><path style="fill:#00b7ff" d="M16 36.1c-.1 0-.1-.1-.2-.1.1 0 .1 0 .2.1z" /><path style="fill:#00b7ff" d="M16 37.3c-.1 0-.3 0-.4-.1-.2-.1-.3-.1-.5-.3-.6-.4-.7-1.2-.3-1.8.4-.6 1.2-.7 1.8-.4.6.3.9 1 .7 1.7-.3.6-.8.9-1.3.9zm.4-2.5-.2.4.3-.4c0 .1 0 .1-.1 0zM16 36.1h.1-.1z" /><path style="fill:#00b7ff" d="M16.2 37.4H16c-.1 0-.2-.1-.4-.1-.5-.2-.8-.7-.8-1.2 0-.2 0-.3.1-.5.3-.6 1-1 1.6-.7.7.2 1.1.8.9 1.5-.1.6-.6 1-1.2 1zm.3-2.5zM16.2 36.1z" /><path style="fill:#00b7ff" d="M16.2 37.4h-.4c-.6-.1-1-.7-1-1.2v-.3c.2-.7.8-1.1 1.5-.9.6.1 1.1.6 1.1 1.3v.2c0 .4-.5.9-1.2.9zm.3-2.5zm0 0zm0 0zM16.3 36.1h.1-.1z" /><path style="fill:#00b7ff" d="M16.4 37.4h-.2c-.7-.1-1.2-.6-1.2-1.3V36c.1-.7.7-1.2 1.4-1.2s1.3.6 1.3 1.3c0 .7-.6 1.3-1.3 1.3zm0-2.6z" /><path transform="rotate(-45.001 18.711 18.71)" style="fill:#f2f2f2" d="M13.1 13.1h11.2v11.2H13.1z" /><path style="fill:#f2f2f2" d="m21.1 8.5 13.3 13.3L21 35.1h-3.1l13.3-13.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7L28.8 18c-.4-.4-1.1-.4-1.5 0l-7.9-7.9 1.7-1.6z" /><path style="fill:#f2f2f2" d="m21.8 3.1 13.3 13.3v3.1L21.8 6.2c-.4-.4-1.1-.4-1.5 0L18 8.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l-7.9 8-1.6-1.6L21.8 3.1zM2.3 17.9l13.3 13.3c.2.2.5.3.7.3.3 0 .5-.1.7-.3l2.3-2.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7l7.9-7.9 1.6 1.6-13.1 13.1L2.3 21v-3.1z" /><path style="fill:#f2f2f2" d="M16.4 2.3h3.1L6.2 15.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l2.3 2.3c.4.4 1.1.4 1.5 0l7.9 7.9-1.6 1.6L3.1 15.7 16.4 2.3z" /><path style="fill:#00b7ff" d="M21 1.3h.4c.1 0 .1.1.2.1 0 0 .1 0 .1.1.1.1.2.2.3.4.1.1.1.3.1.4 0 .3-.1.5-.3.7l-.8-.7h-1.5l.7-.7c.3-.2.6-.3.8-.3zM21.1 1.3H21h.1zM21.2 1.3zM21.4 1.3h-.1.1zM21.4 1.4zM21.7 1.6c0-.1 0-.1 0 0 0-.1 0-.1 0 0z" /><path style="fill:#00b7ff" d="M22.1 2.3c0-.1 0-.3-.1-.4-.1-.1-.1-.3-.3-.4l14.1 14.1c.2.2.3.5.3.7V21c0-.3-.1-.5-.3-.7l-.7-.7v-3.1L21.8 3.1c.2-.2.3-.5.3-.8zM19.5 2.3H21l-14 14 2.3 2.3.7.7c-.4.4-1.1.4-1.5 0L6.2 17c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7L19.5 2.3z" /><path style="fill:#00b7ff" d="m21 2.3.8.8L8.5 16.4l1.6 1.6-.8.7L7 16.4zM20.3 6.2c.4-.4 1.1-.4 1.5 0l13.3 13.3V21l-14-14-2.3 2.3-.8.8c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7l2.3-2.5z" /><path style="fill:#00b7ff" d="m21.1 7 14 14-.8.8L21.1 8.5l-1.6 1.6-.8-.8z" /><path transform="rotate(-45.001 18.712 10.074)" style="fill:#00b7ff" d="M18.2 9.5h1.1v1.1h-1.1z" /><path transform="rotate(-45.001 23.03 14.392)" style="fill:#00b7ff" d="M22.5 8.8h1V20h-1z" /><path transform="rotate(-45.001 14.393 14.393)" style="fill:#00b7ff" d="M8.8 13.9H20V15H8.8z" /><path style="fill:#00b7ff" d="M1.6 15.7 15.7 1.6c.2-.2.5-.3.7-.3H21c-.3 0-.5.1-.7.3l-.7.7h-3.1L3.1 15.7c-.3-.3-.8-.4-1.1-.2-.2 0-.3.1-.4.2zM3.1 15.7l13.3 13.2 1.6-1.6.7.8-2.3 2.3-14.1-14zM1.6 15.7c-.1.1-.1.1-.1.2 0-.1 0-.1.1-.2zM1.4 15.9s0 .1 0 0c0 .1 0 0 0 0zM1.3 16.2s0 .1 0 0c0 .1 0 0 0 0zM1.3 16.3z" /><path style="fill:#00b7ff" d="M1.3 16.3v-.1c0-.1 0-.2.1-.2 0-.1.1-.1.1-.2.1-.1.2-.2.4-.3.4-.2.8-.1 1.1.2l-.7.7v1.5l-.7-.7c-.2-.3-.3-.5-.3-.9 0 .1 0 0 0 0z" /><path style="fill:#00b7ff" d="m2.3 16.4 14 14 2.3-2.3.7-.7c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17 31.1c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3L2.3 17.9v-1.5zM27.3 18c.4-.4 1.1-.4 1.5 0l2.3 2.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17.9 35.1h-1.5l14-14-2.3-2.3-.8-.8z" /><path transform="rotate(-45.001 10.074 18.71)" style="fill:#00b7ff" d="M9.6 18.2h1v1h-1z" /><path transform="rotate(-45.001 27.348 18.71)" style="fill:#00b7ff" d="M26.8 18.2h1v1.1h-1z" /><path style="fill:#00b7ff" d="m26.6 18.7.7.8-7.8 7.8-.8-.7z" /><path transform="rotate(-44.887 14.392 23.028)" style="fill:#00b7ff" d="M13.9 17.4h1v11.2h-1z" /><path style="fill:#00b7ff" d="m28.1 18.7 2.3 2.4-14 14-.7-.8 13.2-13.2-1.6-1.6zM35.1 19.5l.7.7c.2.2.3.5.3.7V21.2c0 .1 0 .1-.1.1v.1c0 .1-.1.1-.1.2-.1.1-.2.2-.3.2-.4.2-.8.1-1.1-.2l.7-.7v-1.4zM36.1 21.1V21v.1zM36.1 21.3zM36 21.5zM35.9 21.7c0-.1.1-.1.1-.2 0 .1-.1.2-.1.2zM35.8 21.7c.1 0 .1 0 0 0 .1 0 .1 0 0 0z" /><path style="fill:#00b7ff" d="m35.8 21.8-14 14c-.2.2-.5.3-.7.3h-4.6c.3 0 .5-.1.7-.3l.7-.7H21l13.3-13.3c.3.3.8.4 1.1.2.2-.1.3-.1.4-.2zM18.7 26.6l.8.7-.8.8-.7-.8z" /><path style="fill:#00b7ff" d="m15.7 34.3.7.7h1.5l-.7.7c-.2.2-.5.3-.7.3h-.4c-.1 0-.1-.1-.2-.1l-.1-.1c-.1-.1-.2-.2-.3-.4-.1-.1-.1-.3-.1-.4-.1-.2.1-.5.3-.7z" /><path style="fill:#00b7ff" d="m15.7 35.8-14.1-14c-.2-.2-.3-.5-.3-.7v-4.6c0 .3.1.5.3.7l.7.7V21l13.3 13.3c-.2.2-.3.5-.3.7 0 .1 0 .3.1.4.1.2.2.4.3.4zM15.7 35.9l.1.1c0-.1-.1-.1-.1-.1zM16 36.1c-.1 0-.1-.1-.2-.1.1 0 .1 0 .2.1zM16 36.1h.1-.1zM16.2 36.1zM16.3 36.1h.1-.1z" /></symbol><symbol viewBox="0 0 55.864 55.864" id="equatio-svg-logo-icon-white"><g data-name="Group 1" fill="#fff"><path data-name="Path 1254" d="M32.7 55.864h-9.589a1.759 1.759 0 0 1-1.26-.533L.533 34.012A1.759 1.759 0 0 1 0 32.753v-9.642a1.759 1.759 0 0 1 .533-1.26L21.851.533A1.759 1.759 0 0 1 23.111 0h9.642a1.759 1.759 0 0 1 1.26.533l21.318 21.318a1.759 1.759 0 0 1 .533 1.26v9.642a1.759 1.759 0 0 1-.533 1.26L34.012 55.331a1.872 1.872 0 0 1-1.312.533Zm-8.862-3.634h8.14L52.23 31.978v-8.14L31.978 3.585h-8.14L3.585 23.838v8.14Zm30.185-19.477Z" /><path data-name="Path 1255" d="M28.49 42.394a.622.622 0 0 1-.485-.194L14.342 28.537a.685.685 0 0 1 .969-.969l13.615 13.615a.647.647 0 0 1 0 .969.578.578 0 0 1-.436.242Z" /><path data-name="Path 1256" d="M24.419 47.046a1.353 1.353 0 0 1-.969-.388L2.52 25.776a1.404 1.404 0 0 1 1.986-1.986l19.913 19.913 2.519-2.568a1.404 1.404 0 0 1 1.986 1.986l-3.537 3.537a1.44 1.44 0 0 1-.968.388Z" /><path data-name="Path 1257" d="M27.666 41.959a.622.622 0 0 1-.485-.194.647.647 0 0 1 0-.969l13.615-13.615a.685.685 0 0 1 .969.969L28.15 41.765a1.023 1.023 0 0 1-.484.194Z" /><path data-name="Path 1258" d="M24.323 54.023a1.381 1.381 0 0 1-.969-2.374l19.913-19.913-2.519-2.519a1.404 1.404 0 1 1 1.986-1.986l3.537 3.537a1.434 1.434 0 0 1 0 1.986L25.389 53.635a1.8 1.8 0 0 1-1.066.388Z" /><path data-name="Path 1259" d="M40.989 28.683a.622.622 0 0 1-.485-.194L26.89 14.874a.685.685 0 1 1 .969-.969L41.474 27.52a.647.647 0 0 1 0 .969.622.622 0 0 1-.485.194Z" /><path data-name="Path 1260" d="M52.327 32.705a1.44 1.44 0 0 1-.969-.388L31.445 12.355l-2.568 2.57a1.404 1.404 0 1 1-1.986-1.986l3.537-3.537a1.434 1.434 0 0 1 1.986 0l20.882 20.88a1.434 1.434 0 0 1 0 1.986 1.291 1.291 0 0 1-.969.437Z" /><path data-name="Path 1261" d="M14.294 29.167a.622.622 0 0 1-.485-.194.647.647 0 0 1 0-.969l13.615-13.663a.685.685 0 0 1 .969.969L14.778 28.973a1.023 1.023 0 0 1-.484.194Z" /><path data-name="Path 1262" d="M13.857 29.313a1.44 1.44 0 0 1-.969-.388l-3.537-3.537a1.434 1.434 0 0 1 0-1.986L30.233 2.52a1.404 1.404 0 1 1 1.986 1.986L12.306 24.419l2.519 2.519a1.434 1.434 0 0 1 0 1.986 1.313 1.313 0 0 1-.968.389Z" /></g></symbol><symbol viewBox="0 0 803.8 200" id="equatio-svg-logo-light"><path fill="#fff" d="M319.7 141.2H279v-32.9h38.3c2.1 0 3.4-1.3 3.4-3.3V93.2c0-2-1.4-3.4-3.4-3.4H279V59.6h40.6c2 0 3.3-1.3 3.3-3.4V44.5c0-2.1-1.3-3.4-3.3-3.4h-57.9c-2 0-3.3 1.3-3.3 3.4v111.9c0 2.1 1.3 3.4 3.3 3.4h57.9c2 0 3.4-1.4 3.4-3.4v-11.7c.1-2.1-1.3-3.5-3.3-3.5zm99.6-65.1h-12.2c-2 0-3.3 1.4-3.3 3.4l-.2 8.2c-6.3-8.9-15.9-13.6-28-13.6-23.4 0-40.3 18.4-40.3 43.8s17 43.8 40.3 43.8c11.5 0 20.8-4.2 27.1-12.3V188c0 2.1 1.3 3.4 3.3 3.4h13.4c2 0 3.3-1.4 3.3-3.4V79.5c-.1-2.1-1.4-3.4-3.4-3.4zm-40.2 67.3c-14.4 0-24.5-10.5-24.5-25.5s10.1-25.5 24.5-25.5c14.2 0 23.8 10.3 23.8 25.6 0 15.2-9.6 25.4-23.8 25.4zm131.7-67.3h-13.2c-2 0-3.3 1.4-3.3 3.4v44.4c0 11.7-7.3 19.3-18.6 19.3-10.9 0-16.9-6.8-16.9-19.3V79.5c0-2.1-1.3-3.4-3.3-3.4h-13.4c-2 0-3.3 1.4-3.3 3.4v47.7c0 21 12 34.5 30.6 34.5 13.1 0 20.7-6.4 24.9-12.7l.4 7.1c0 2.4 1.2 3.6 3.4 3.6h12.5c2 0 3.4-1.4 3.4-3.4V79.5c.3-2-1.1-3.4-3.2-3.4zm99.7 0h-12.2c-2 0-3.3 1.4-3.3 3.4l-.2 8.2c-6.3-8.9-15.9-13.6-28-13.6-23.4 0-40.3 18.4-40.3 43.8s17 43.8 40.3 43.8c12.1 0 21.8-4.7 28-13.6l.2 8.2c0 2.1 1.3 3.4 3.3 3.4h12.2c2 0 3.3-1.3 3.3-3.4V79.5c0-2.1-1.3-3.4-3.3-3.4zm-40.2 67.3c-14.4 0-24.5-10.5-24.5-25.5s10.1-25.5 24.5-25.5c14.2 0 23.8 10.3 23.8 25.6 0 15.2-9.6 25.4-23.8 25.4zm100-67.3H658V57.8c0-2.1-1.3-3.4-3.3-3.4h-13.5c-2 0-3.3 1.3-3.3 3.4v18.3h-9.6c-2 0-3.3 1.3-3.3 3.4v9.4c0 2.1 1.3 3.4 3.3 3.4h9.6v47.5c0 14.2 7.9 22 22.3 22 2.2 0 13.3-.3 13.3-5.3v-8.8c0-1-.3-1.9-.9-2.5-.7-.6-1.8-.9-3.1-.8-1.9.2-3.8.3-5.1.3-4.4 0-6.4-2.2-6.4-6.9V92.3h12.3c2 0 3.4-1.4 3.4-3.4v-9.4c0-2-1.4-3.4-3.4-3.4zm24.9-34.4c-6.4 0-11.4 5-11.4 11.3 0 6.4 5 11.4 11.4 11.4 6.3 0 11.3-5 11.3-11.4-.1-6.4-5-11.3-11.3-11.3zm6.6 34.4h-13.5c-2 0-3.3 1.4-3.3 3.4v76.8c0 2.1 1.3 3.4 3.3 3.4h13.5c2 0 3.3-1.4 3.3-3.4V79.5c0-2-1.3-3.4-3.3-3.4zm58.8-2c-24.7 0-43.3 18.8-43.3 43.8s18.6 43.8 43.3 43.8c24.6 0 43.2-18.8 43.2-43.8s-18.6-43.8-43.2-43.8zm0 69.1c-14 0-24.1-10.6-24.1-25.3s10.1-25.3 24.1-25.3c13.9 0 24 10.6 24 25.3s-10.1 25.3-24 25.3z" /><circle cx="100" cy="100" r="100" fill="#00b7ff" /><path fill="#fff" d="m165.8 85.4-51.2-51.2c-.8-.8-1.9-1.3-3.1-1.3H88.4c-1.1 0-2.2.4-3.1 1.3L34.2 85.4c-.8.8-1.3 1.9-1.3 3.1v23.1c0 1.1.4 2.2 1.3 3.1l51.2 51.2c.8.8 1.9 1.3 3.1 1.3h23.1c1.1 0 2.2-.4 3.1-1.3l51.2-51.2c.8-.8 1.3-1.9 1.3-3.1V88.4c-.1-1.1-.5-2.2-1.4-3zm-7.4 4.8v12.9l-47.6-47.6c-1.3-1.3-3.4-1.3-4.8 0L97.6 64c-1.3 1.3-1.3 3.4-.1 4.7L68.6 97.6l-6.1-6.1 47.8-47.8c.3-.3.5-.6.7-1l47.4 47.5zm-87.7 10L99.9 71l29.1 29.1-29.2 29.2-29.1-29.1zm19.5-58.6h12.7L55.3 89.2c-1.3 1.3-1.3 3.4 0 4.8l8.5 8.5c.7.7 1.5 1 2.4 1 .8 0 1.6-.3 2.2-.9l29.2 29.2-6.1 6.1L43.7 90c-.3-.3-.8-.6-1.2-.8l47.7-47.6zm-48.6 68.2V97.4L89.2 145c.6.6 1.5 1 2.4 1 .9 0 1.7-.3 2.4-1l8.5-8.5c1.3-1.3 1.3-3.4 0-4.8-.1-.1-.2-.1-.2-.2l28.5-28.5 6.1 6.1L89 156.9l-.2.2-47.2-47.3zm68.2 48.6H97l46.9-46.9c1.3-1.3 1.3-3.4 0-4.8l-8.5-8.5c-1.1-1.1-2.9-1.3-4.1-.4l-29-29 6.1-6.1 47.8 47.8c.3.3.6.4.8.6l-47.2 47.3z" /></symbol><symbol viewBox="0 0 161.845 54.603" id="equatio-svg-logo-with-slogan"><g data-name="Equatio Logo (1)" transform="translate(-.449 -.571)"><path data-name="Path 1512" d="M64.604 28.653h-8.213v-6.639h7.729a.631.631 0 0 0 .686-.666v-2.381a.657.657 0 0 0-.686-.686h-7.729v-6.095h8.193a.631.631 0 0 0 .666-.686V9.139a.631.631 0 0 0-.666-.686H52.9a.631.631 0 0 0-.666.686V31.72a.631.631 0 0 0 .666.686h11.684a.657.657 0 0 0 .686-.686v-2.361a.637.637 0 0 0-.666-.706Z" fill="#2a3953" /><path data-name="Path 1513" d="M84.703 15.512h-2.462a.641.641 0 0 0-.666.686l-.04 1.655a6.577 6.577 0 0 0-5.65-2.744c-4.722 0-8.133 3.713-8.133 8.839s3.431 8.839 8.133 8.839a6.609 6.609 0 0 0 5.467-2.475v7.789a.631.631 0 0 0 .666.686h2.7a.641.641 0 0 0 .666-.686V16.202a.657.657 0 0 0-.681-.69Zm-8.112 13.581a5.15 5.15 0 0 1 0-10.292c2.865 0 4.8 2.079 4.8 5.166.003 3.071-1.939 5.13-4.8 5.13Z" fill="#2a3953" /><path data-name="Path 1514" d="M103.168 15.516h-2.664a.641.641 0 0 0-.666.686v8.96a3.588 3.588 0 0 1-3.754 3.895c-2.2 0-3.41-1.372-3.41-3.895v-8.96a.631.631 0 0 0-.666-.686h-2.7a.641.641 0 0 0-.666.686v9.626c0 4.238 2.422 6.962 6.175 6.962a5.721 5.721 0 0 0 5.021-2.563l.081 1.433c0 .484.242.726.686.726h2.522a.657.657 0 0 0 .686-.686V16.2a.588.588 0 0 0-.645-.684Z" fill="#2a3953" /><path data-name="Path 1515" d="M123.287 15.512h-2.462a.641.641 0 0 0-.666.686l-.04 1.655a6.577 6.577 0 0 0-5.65-2.744c-4.722 0-8.132 3.713-8.132 8.839s3.43 8.839 8.132 8.839a6.553 6.553 0 0 0 5.65-2.744l.04 1.655a.631.631 0 0 0 .666.686h2.462a.631.631 0 0 0 .666-.686V16.202a.631.631 0 0 0-.666-.69Zm-8.112 13.581a5.15 5.15 0 0 1 0-10.292c2.866 0 4.8 2.079 4.8 5.166.003 3.071-1.939 5.13-4.8 5.13Z" fill="#2a3953" /><path data-name="Path 1516" d="M135.354 15.516h-2.482v-3.693a.631.631 0 0 0-.666-.686h-2.724a.631.631 0 0 0-.666.686v3.693h-1.937a.631.631 0 0 0-.666.686v1.9a.631.631 0 0 0 .666.686h1.934v9.585c0 2.866 1.594 4.44 4.5 4.44.444 0 2.684-.061 2.684-1.07v-1.778a.7.7 0 0 0-.182-.5.857.857 0 0 0-.626-.161c-.383.04-.767.061-1.029.061-.888 0-1.292-.444-1.292-1.392v-9.188h2.482a.657.657 0 0 0 .686-.686v-1.9a.657.657 0 0 0-.682-.683Z" fill="#2a3953" /><path data-name="Path 1517" d="M140.379 8.574a2.29 2.29 0 1 0 2.28 2.28 2.27 2.27 0 0 0-2.28-2.28Z" fill="#2a3953" /><path data-name="Path 1518" d="M141.711 15.516h-2.724a.641.641 0 0 0-.666.686v15.5a.631.631 0 0 0 .666.686h2.724a.641.641 0 0 0 .666-.686v-15.5a.641.641 0 0 0-.666-.686Z" fill="#2a3953" /><path data-name="Path 1519" d="M153.577 15.112a8.84 8.84 0 1 0 8.718 8.839 8.591 8.591 0 0 0-8.718-8.839Zm0 13.944a5.113 5.113 0 1 1 4.843-5.106 4.816 4.816 0 0 1-4.843 5.106Z" fill="#2a3953" /><circle data-name="Ellipse 3" cx="19.974" cy="19.974" r="19.974" transform="translate(.449 .571)" fill="#00b7ff" /><path data-name="Path 1520" d="M33.547 17.392 23.215 7.06a.885.885 0 0 0-.626-.262h-4.661a.871.871 0 0 0-.626.262L6.99 17.392a.885.885 0 0 0-.262.626v4.662a.871.871 0 0 0 .262.626l10.332 10.331a.885.885 0 0 0 .626.261h4.662a.871.871 0 0 0 .626-.262l10.331-10.331a.885.885 0 0 0 .261-.625v-4.682a.9.9 0 0 0-.281-.606Zm-1.493.969v2.6l-9.606-9.602a.694.694 0 0 0-.969 0l-1.7 1.715a.689.689 0 0 0-.02.948l-5.831 5.832-1.231-1.231 9.646-9.646a.725.725 0 0 0 .141-.2Zm-17.7 2.018 5.893-5.893 5.872 5.872-5.891 5.893Zm3.935-11.825h2.563l-9.604 9.605a.694.694 0 0 0 0 .969l1.715 1.715a.656.656 0 0 0 .484.2.626.626 0 0 0 .444-.182l5.893 5.893-1.231 1.231-9.646-9.666a1.014 1.014 0 0 0-.242-.161ZM8.484 22.316v-2.5l9.606 9.606a.7.7 0 0 0 .484.2.656.656 0 0 0 .484-.2l1.715-1.715a.694.694 0 0 0 0-.969c-.02-.02-.04-.02-.04-.04l5.751-5.751 1.231 1.231-9.666 9.646-.04.04Zm13.763 9.807h-2.584l9.465-9.464a.694.694 0 0 0 0-.969l-1.715-1.715a.646.646 0 0 0-.828-.077l-5.857-5.855 1.231-1.231 9.646 9.646c.061.061.121.081.161.121Z" fill="#fff" /><path data-name="Path 1529" d="M58.324 52.098h-1.475v-4.263a1.933 1.933 0 0 0-.3-1.184 1.107 1.107 0 0 0-.937-.391 1.43 1.43 0 0 0-1.247.553 3.245 3.245 0 0 0-.4 1.841v3.444h-1.466v-6.912h1.15l.206.906h.075a1.915 1.915 0 0 1 .834-.763 2.69 2.69 0 0 1 1.2-.269 2.1 2.1 0 0 1 2.116 1.088h.1a2.107 2.107 0 0 1 .862-.8 2.737 2.737 0 0 1 1.275-.287 2.322 2.322 0 0 1 1.8.625 2.768 2.768 0 0 1 .566 1.906v4.506h-1.465v-4.263a1.918 1.918 0 0 0-.3-1.184 1.116 1.116 0 0 0-.941-.391 1.458 1.458 0 0 0-1.256.538 2.755 2.755 0 0 0-.4 1.641Zm10.737 0-.294-.963h-.05a2.832 2.832 0 0 1-1.005.863 3.182 3.182 0 0 1-1.3.228 2.2 2.2 0 0 1-1.591-.55 2.058 2.058 0 0 1-.572-1.559 1.827 1.827 0 0 1 .794-1.612 4.577 4.577 0 0 1 2.419-.594l1.194-.037v-.369a1.4 1.4 0 0 0-.309-.991 1.262 1.262 0 0 0-.959-.328 3.317 3.317 0 0 0-1.019.156 7.688 7.688 0 0 0-.938.369l-.475-1.05a5.112 5.112 0 0 1 1.231-.447 5.666 5.666 0 0 1 1.262-.153 2.99 2.99 0 0 1 1.991.575 2.251 2.251 0 0 1 .672 1.806v4.656Zm-2.187-1a1.819 1.819 0 0 0 1.284-.447 1.62 1.62 0 0 0 .485-1.253v-.6l-.888.037a3.037 3.037 0 0 0-1.509.347 1.054 1.054 0 0 0-.472.947.924.924 0 0 0 .275.716 1.182 1.182 0 0 0 .825.253Zm6.706-2.65.831-1.037 2.088-2.225h1.694l-2.781 2.968 2.956 3.944h-1.725l-2.219-3.031-.806.662v2.369h-1.457v-9.725h1.456v4.744l-.074 1.331Zm8.663 3.775a3.344 3.344 0 0 1-2.522-.941 3.571 3.571 0 0 1-.909-2.591 3.918 3.918 0 0 1 .844-2.662 2.914 2.914 0 0 1 2.319-.969 2.848 2.848 0 0 1 2.163.831 3.176 3.176 0 0 1 .794 2.288v.794h-4.608a2.27 2.27 0 0 0 .544 1.547 1.894 1.894 0 0 0 1.444.541 5.33 5.33 0 0 0 1.137-.116 5.979 5.979 0 0 0 1.134-.384v1.193a4.51 4.51 0 0 1-1.084.363 6.668 6.668 0 0 1-1.256.106Zm-.269-6.05a1.476 1.476 0 0 0-1.122.444 2.115 2.115 0 0 0-.5 1.294h3.137a1.913 1.913 0 0 0-.412-1.3 1.411 1.411 0 0 0-1.103-.438Zm13.775 5.925h-1.475v-4.263a1.933 1.933 0 0 0-.3-1.184 1.107 1.107 0 0 0-.937-.391 1.43 1.43 0 0 0-1.247.553 3.245 3.245 0 0 0-.4 1.841v3.444h-1.466v-6.912h1.15l.206.906h.075a1.915 1.915 0 0 1 .834-.763 2.69 2.69 0 0 1 1.2-.269 2.1 2.1 0 0 1 2.116 1.088h.1a2.107 2.107 0 0 1 .862-.8 2.737 2.737 0 0 1 1.275-.287 2.322 2.322 0 0 1 1.8.625 2.768 2.768 0 0 1 .566 1.906v4.506h-1.465v-4.263a1.918 1.918 0 0 0-.3-1.184 1.116 1.116 0 0 0-.941-.391 1.458 1.458 0 0 0-1.253.538 2.755 2.755 0 0 0-.4 1.641Zm10.738 0-.294-.963h-.05a2.832 2.832 0 0 1-1.006.863 3.182 3.182 0 0 1-1.3.228 2.2 2.2 0 0 1-1.588-.553 2.058 2.058 0 0 1-.572-1.556 1.827 1.827 0 0 1 .794-1.612 4.577 4.577 0 0 1 2.419-.594l1.194-.037v-.369a1.4 1.4 0 0 0-.309-.991 1.262 1.262 0 0 0-.959-.328 3.317 3.317 0 0 0-1.019.156 7.688 7.688 0 0 0-.937.369l-.475-1.05a5.112 5.112 0 0 1 1.231-.447 5.666 5.666 0 0 1 1.263-.153 2.99 2.99 0 0 1 1.991.575 2.251 2.251 0 0 1 .672 1.806v4.656Zm-2.188-1a1.819 1.819 0 0 0 1.284-.447 1.62 1.62 0 0 0 .485-1.253v-.6l-.888.037a3.037 3.037 0 0 0-1.509.347 1.054 1.054 0 0 0-.472.947.924.924 0 0 0 .275.716 1.182 1.182 0 0 0 .825.253Zm7.862-.062a3.572 3.572 0 0 0 1.075-.169v1.106a2.965 2.965 0 0 1-.628.178 4.328 4.328 0 0 1-.8.072q-2.087 0-2.088-2.2v-3.725h-.944v-.65l1.012-.537.5-1.462h.906v1.537h1.969v1.112h-1.964v3.7a1.038 1.038 0 0 0 .266.784.968.968 0 0 0 .697.254Zm8.538 1.062h-1.475v-4.25a1.86 1.86 0 0 0-.322-1.194 1.244 1.244 0 0 0-1.022-.394 1.622 1.622 0 0 0-1.359.553 3.048 3.048 0 0 0-.434 1.853v3.432h-1.469v-9.725h1.469v2.469a11.521 11.521 0 0 1-.075 1.269h.094a2.039 2.039 0 0 1 .834-.775 2.689 2.689 0 0 1 1.247-.275 2.229 2.229 0 0 1 2.512 2.531Zm7.7.125a2.408 2.408 0 0 1-2.019-.937 4.214 4.214 0 0 1-.725-2.631 4.227 4.227 0 0 1 .734-2.647 2.431 2.431 0 0 1 2.034-.947 2.383 2.383 0 0 1 2.076 1.006h.075a8.8 8.8 0 0 1-.106-1.175v-2.519h1.475v9.725h-1.15l-.256-.906h-.069a2.348 2.348 0 0 1-2.069 1.031Zm.394-1.187a1.6 1.6 0 0 0 1.319-.509 2.682 2.682 0 0 0 .425-1.653v-.206a3.1 3.1 0 0 0-.425-1.856 1.577 1.577 0 0 0-1.331-.55 1.351 1.351 0 0 0-1.194.628 3.219 3.219 0 0 0-.419 1.791 3.139 3.139 0 0 0 .406 1.753 1.371 1.371 0 0 0 1.219.602Zm6.719 1.062h-1.469v-6.912h1.469Zm-1.557-8.744a.813.813 0 0 1 .216-.606.84.84 0 0 1 .616-.212.822.822 0 0 1 .6.212.813.813 0 0 1 .216.606.8.8 0 0 1-.216.591.815.815 0 0 1-.6.216.833.833 0 0 1-.616-.216.8.8 0 0 1-.216-.591Zm9.494 1.832v.806l-1.181.219a1.907 1.907 0 0 1 .269.538 2.12 2.12 0 0 1 .106.675 2.068 2.068 0 0 1-.738 1.681 3.086 3.086 0 0 1-2.031.612 3.294 3.294 0 0 1-.6-.05.827.827 0 0 0-.475.688.382.382 0 0 0 .222.356 1.919 1.919 0 0 0 .816.119h1.206a2.682 2.682 0 0 1 1.738.488 1.715 1.715 0 0 1 .593 1.405 2.045 2.045 0 0 1-.969 1.813 5.1 5.1 0 0 1-2.8.638 3.864 3.864 0 0 1-2.156-.501 1.616 1.616 0 0 1-.744-1.425 1.516 1.516 0 0 1 .4-1.072 2.16 2.16 0 0 1 1.128-.6 1.1 1.1 0 0 1-.484-.4 1.018 1.018 0 0 1-.191-.584 1.006 1.006 0 0 1 .219-.656 2.524 2.524 0 0 1 .65-.531 1.925 1.925 0 0 1-.872-.753 2.215 2.215 0 0 1-.334-1.222 2.19 2.19 0 0 1 .709-1.744 2.982 2.982 0 0 1 2.022-.619 4.922 4.922 0 0 1 .619.031 3.875 3.875 0 0 1 .484.084Zm-5.431 7.987a.808.808 0 0 0 .431.731 2.353 2.353 0 0 0 1.2.256 3.635 3.635 0 0 0 1.787-.344 1.03 1.03 0 0 0 .588-.912.685.685 0 0 0-.322-.641 2.585 2.585 0 0 0-1.2-.191h-1.109a1.563 1.563 0 0 0-1 .3.973.973 0 0 0-.375.801Zm.631-5.75a1.391 1.391 0 0 0 .334 1 1.264 1.264 0 0 0 .959.35q1.275 0 1.275-1.362a1.545 1.545 0 0 0-.316-1.041 1.2 1.2 0 0 0-.959-.366 1.236 1.236 0 0 0-.966.362 1.524 1.524 0 0 0-.327 1.057Zm7.55 4.675h-1.469v-6.912h1.469Zm-1.556-8.744a.813.813 0 0 1 .216-.606.84.84 0 0 1 .616-.212.822.822 0 0 1 .6.212.813.813 0 0 1 .216.606.8.8 0 0 1-.216.591.815.815 0 0 1-.6.216.833.833 0 0 1-.616-.216.8.8 0 0 1-.216-.591Zm6.231 7.681a3.572 3.572 0 0 0 1.075-.169v1.107a2.965 2.965 0 0 1-.628.178 4.327 4.327 0 0 1-.8.072q-2.088 0-2.088-2.2v-3.725h-.944v-.65l1.012-.537.5-1.462h.906v1.537h1.969v1.112h-1.964v3.7a1.038 1.038 0 0 0 .266.784.968.968 0 0 0 .696.254Zm6.781 1.063-.294-.963h-.05a2.832 2.832 0 0 1-1.006.859 3.182 3.182 0 0 1-1.3.228 2.2 2.2 0 0 1-1.591-.55 2.058 2.058 0 0 1-.572-1.556 1.827 1.827 0 0 1 .794-1.612 4.577 4.577 0 0 1 2.419-.594l1.194-.037v-.369a1.4 1.4 0 0 0-.309-.991 1.262 1.262 0 0 0-.959-.328 3.317 3.317 0 0 0-1.019.156 7.687 7.687 0 0 0-.937.369l-.475-1.05a5.112 5.112 0 0 1 1.231-.447 5.666 5.666 0 0 1 1.262-.153 2.99 2.99 0 0 1 1.991.575 2.251 2.251 0 0 1 .672 1.806v4.657Zm-2.187-1a1.819 1.819 0 0 0 1.284-.447 1.62 1.62 0 0 0 .484-1.253v-.6l-.888.037a3.037 3.037 0 0 0-1.509.347 1.054 1.054 0 0 0-.472.947.924.924 0 0 0 .275.716 1.181 1.181 0 0 0 .826.253Zm6.756 1h-1.469v-9.725h1.469Z" fill="#2a3953" /></g></symbol><symbol viewBox="0 0 161.845 54.603" id="equatio-svg-logo-with-slogan-color"><g data-name="Equatio Logo (1)" transform="translate(-.449 -.571)"><path data-name="Path 1512" d="M64.604 28.653h-8.213v-6.639h7.729a.631.631 0 0 0 .686-.666v-2.381a.657.657 0 0 0-.686-.686h-7.729v-6.095h8.193a.631.631 0 0 0 .666-.686V9.139a.631.631 0 0 0-.666-.686H52.9a.631.631 0 0 0-.666.686V31.72a.631.631 0 0 0 .666.686h11.684a.657.657 0 0 0 .686-.686v-2.361a.637.637 0 0 0-.666-.706Z" fill="#fff" /><path data-name="Path 1513" d="M84.703 15.512h-2.462a.641.641 0 0 0-.666.686l-.04 1.655a6.577 6.577 0 0 0-5.65-2.744c-4.722 0-8.133 3.713-8.133 8.839s3.431 8.839 8.133 8.839a6.609 6.609 0 0 0 5.467-2.475v7.789a.631.631 0 0 0 .666.686h2.7a.641.641 0 0 0 .666-.686V16.202a.657.657 0 0 0-.681-.69Zm-8.112 13.581a5.15 5.15 0 0 1 0-10.292c2.865 0 4.8 2.079 4.8 5.166.003 3.071-1.939 5.13-4.8 5.13Z" fill="#fff" /><path data-name="Path 1514" d="M103.168 15.516h-2.664a.641.641 0 0 0-.666.686v8.96a3.588 3.588 0 0 1-3.754 3.895c-2.2 0-3.41-1.372-3.41-3.895v-8.96a.631.631 0 0 0-.666-.686h-2.7a.641.641 0 0 0-.666.686v9.626c0 4.238 2.422 6.962 6.175 6.962a5.721 5.721 0 0 0 5.021-2.563l.081 1.433c0 .484.242.726.686.726h2.522a.657.657 0 0 0 .686-.686V16.2a.588.588 0 0 0-.645-.684Z" fill="#fff" /><path data-name="Path 1515" d="M123.287 15.512h-2.462a.641.641 0 0 0-.666.686l-.04 1.655a6.577 6.577 0 0 0-5.65-2.744c-4.722 0-8.132 3.713-8.132 8.839s3.43 8.839 8.132 8.839a6.553 6.553 0 0 0 5.65-2.744l.04 1.655a.631.631 0 0 0 .666.686h2.462a.631.631 0 0 0 .666-.686V16.202a.631.631 0 0 0-.666-.69Zm-8.112 13.581a5.15 5.15 0 0 1 0-10.292c2.866 0 4.8 2.079 4.8 5.166.003 3.071-1.939 5.13-4.8 5.13Z" fill="#fff" /><path data-name="Path 1516" d="M135.354 15.516h-2.482v-3.693a.631.631 0 0 0-.666-.686h-2.724a.631.631 0 0 0-.666.686v3.693h-1.937a.631.631 0 0 0-.666.686v1.9a.631.631 0 0 0 .666.686h1.934v9.585c0 2.866 1.594 4.44 4.5 4.44.444 0 2.684-.061 2.684-1.07v-1.778a.7.7 0 0 0-.182-.5.857.857 0 0 0-.626-.161c-.383.04-.767.061-1.029.061-.888 0-1.292-.444-1.292-1.392v-9.188h2.482a.657.657 0 0 0 .686-.686v-1.9a.657.657 0 0 0-.682-.683Z" fill="#fff" /><path data-name="Path 1517" d="M140.379 8.574a2.29 2.29 0 1 0 2.28 2.28 2.27 2.27 0 0 0-2.28-2.28Z" fill="#fff" /><path data-name="Path 1518" d="M141.711 15.516h-2.724a.641.641 0 0 0-.666.686v15.5a.631.631 0 0 0 .666.686h2.724a.641.641 0 0 0 .666-.686v-15.5a.641.641 0 0 0-.666-.686Z" fill="#fff" /><path data-name="Path 1519" d="M153.577 15.112a8.84 8.84 0 1 0 8.718 8.839 8.591 8.591 0 0 0-8.718-8.839Zm0 13.944a5.113 5.113 0 1 1 4.843-5.106 4.816 4.816 0 0 1-4.843 5.106Z" fill="#fff" /><circle data-name="Ellipse 3" cx="19.974" cy="19.974" r="19.974" transform="translate(.449 .571)" fill="#fff" /><path data-name="Path 1520" d="M33.547 17.392 23.215 7.06a.885.885 0 0 0-.626-.262h-4.661a.871.871 0 0 0-.626.262L6.99 17.392a.885.885 0 0 0-.262.626v4.662a.871.871 0 0 0 .262.626l10.332 10.331a.885.885 0 0 0 .626.261h4.662a.871.871 0 0 0 .626-.262l10.331-10.331a.885.885 0 0 0 .261-.625v-4.682a.9.9 0 0 0-.281-.606Zm-1.493.969v2.6l-9.606-9.602a.694.694 0 0 0-.969 0l-1.7 1.715a.689.689 0 0 0-.02.948l-5.831 5.832-1.231-1.231 9.646-9.646a.725.725 0 0 0 .141-.2Zm-17.7 2.018 5.893-5.893 5.872 5.872-5.891 5.893Zm3.935-11.825h2.563l-9.604 9.605a.694.694 0 0 0 0 .969l1.715 1.715a.656.656 0 0 0 .484.2.626.626 0 0 0 .444-.182l5.893 5.893-1.231 1.231-9.646-9.666a1.014 1.014 0 0 0-.242-.161ZM8.484 22.316v-2.5l9.606 9.606a.7.7 0 0 0 .484.2.656.656 0 0 0 .484-.2l1.715-1.715a.694.694 0 0 0 0-.969c-.02-.02-.04-.02-.04-.04l5.751-5.751 1.231 1.231-9.666 9.646-.04.04Zm13.763 9.807h-2.584l9.465-9.464a.694.694 0 0 0 0-.969l-1.715-1.715a.646.646 0 0 0-.828-.077l-5.857-5.855 1.231-1.231 9.646 9.646c.061.061.121.081.161.121Z" fill="#00b7ff" /><path data-name="Path 1529" d="M58.324 52.098h-1.475v-4.263a1.933 1.933 0 0 0-.3-1.184 1.107 1.107 0 0 0-.937-.391 1.43 1.43 0 0 0-1.247.553 3.245 3.245 0 0 0-.4 1.841v3.444h-1.466v-6.912h1.15l.206.906h.075a1.915 1.915 0 0 1 .834-.763 2.69 2.69 0 0 1 1.2-.269 2.1 2.1 0 0 1 2.116 1.088h.1a2.107 2.107 0 0 1 .862-.8 2.737 2.737 0 0 1 1.275-.287 2.322 2.322 0 0 1 1.8.625 2.768 2.768 0 0 1 .566 1.906v4.506h-1.465v-4.263a1.918 1.918 0 0 0-.3-1.184 1.116 1.116 0 0 0-.941-.391 1.458 1.458 0 0 0-1.256.538 2.755 2.755 0 0 0-.4 1.641Zm10.737 0-.294-.963h-.05a2.832 2.832 0 0 1-1.005.863 3.182 3.182 0 0 1-1.3.228 2.2 2.2 0 0 1-1.591-.55 2.058 2.058 0 0 1-.572-1.559 1.827 1.827 0 0 1 .794-1.612 4.577 4.577 0 0 1 2.419-.594l1.194-.037v-.369a1.4 1.4 0 0 0-.309-.991 1.262 1.262 0 0 0-.959-.328 3.317 3.317 0 0 0-1.019.156 7.688 7.688 0 0 0-.938.369l-.475-1.05a5.112 5.112 0 0 1 1.231-.447 5.666 5.666 0 0 1 1.262-.153 2.99 2.99 0 0 1 1.991.575 2.251 2.251 0 0 1 .672 1.806v4.656Zm-2.187-1a1.819 1.819 0 0 0 1.284-.447 1.62 1.62 0 0 0 .485-1.253v-.6l-.888.037a3.037 3.037 0 0 0-1.509.347 1.054 1.054 0 0 0-.472.947.924.924 0 0 0 .275.716 1.182 1.182 0 0 0 .825.253Zm6.706-2.65.831-1.037 2.088-2.225h1.694l-2.781 2.968 2.956 3.944h-1.725l-2.219-3.031-.806.662v2.369h-1.457v-9.725h1.456v4.744l-.074 1.331Zm8.663 3.775a3.344 3.344 0 0 1-2.522-.941 3.571 3.571 0 0 1-.909-2.591 3.918 3.918 0 0 1 .844-2.662 2.914 2.914 0 0 1 2.319-.969 2.848 2.848 0 0 1 2.163.831 3.176 3.176 0 0 1 .794 2.288v.794h-4.608a2.27 2.27 0 0 0 .544 1.547 1.894 1.894 0 0 0 1.444.541 5.33 5.33 0 0 0 1.137-.116 5.979 5.979 0 0 0 1.134-.384v1.193a4.51 4.51 0 0 1-1.084.363 6.668 6.668 0 0 1-1.256.106Zm-.269-6.05a1.476 1.476 0 0 0-1.122.444 2.115 2.115 0 0 0-.5 1.294h3.137a1.913 1.913 0 0 0-.412-1.3 1.411 1.411 0 0 0-1.103-.438Zm13.775 5.925h-1.475v-4.263a1.933 1.933 0 0 0-.3-1.184 1.107 1.107 0 0 0-.937-.391 1.43 1.43 0 0 0-1.247.553 3.245 3.245 0 0 0-.4 1.841v3.444h-1.466v-6.912h1.15l.206.906h.075a1.915 1.915 0 0 1 .834-.763 2.69 2.69 0 0 1 1.2-.269 2.1 2.1 0 0 1 2.116 1.088h.1a2.107 2.107 0 0 1 .862-.8 2.737 2.737 0 0 1 1.275-.287 2.322 2.322 0 0 1 1.8.625 2.768 2.768 0 0 1 .566 1.906v4.506h-1.465v-4.263a1.918 1.918 0 0 0-.3-1.184 1.116 1.116 0 0 0-.941-.391 1.458 1.458 0 0 0-1.253.538 2.755 2.755 0 0 0-.4 1.641Zm10.738 0-.294-.963h-.05a2.832 2.832 0 0 1-1.006.863 3.182 3.182 0 0 1-1.3.228 2.2 2.2 0 0 1-1.588-.553 2.058 2.058 0 0 1-.572-1.556 1.827 1.827 0 0 1 .794-1.612 4.577 4.577 0 0 1 2.419-.594l1.194-.037v-.369a1.4 1.4 0 0 0-.309-.991 1.262 1.262 0 0 0-.959-.328 3.317 3.317 0 0 0-1.019.156 7.688 7.688 0 0 0-.937.369l-.475-1.05a5.112 5.112 0 0 1 1.231-.447 5.666 5.666 0 0 1 1.263-.153 2.99 2.99 0 0 1 1.991.575 2.251 2.251 0 0 1 .672 1.806v4.656Zm-2.188-1a1.819 1.819 0 0 0 1.284-.447 1.62 1.62 0 0 0 .485-1.253v-.6l-.888.037a3.037 3.037 0 0 0-1.509.347 1.054 1.054 0 0 0-.472.947.924.924 0 0 0 .275.716 1.182 1.182 0 0 0 .825.253Zm7.862-.062a3.572 3.572 0 0 0 1.075-.169v1.106a2.965 2.965 0 0 1-.628.178 4.328 4.328 0 0 1-.8.072q-2.087 0-2.088-2.2v-3.725h-.944v-.65l1.012-.537.5-1.462h.906v1.537h1.969v1.112h-1.964v3.7a1.038 1.038 0 0 0 .266.784.968.968 0 0 0 .697.254Zm8.538 1.062h-1.475v-4.25a1.86 1.86 0 0 0-.322-1.194 1.244 1.244 0 0 0-1.022-.394 1.622 1.622 0 0 0-1.359.553 3.048 3.048 0 0 0-.434 1.853v3.432h-1.469v-9.725h1.469v2.469a11.521 11.521 0 0 1-.075 1.269h.094a2.039 2.039 0 0 1 .834-.775 2.689 2.689 0 0 1 1.247-.275 2.229 2.229 0 0 1 2.512 2.531Zm7.7.125a2.408 2.408 0 0 1-2.019-.937 4.214 4.214 0 0 1-.725-2.631 4.227 4.227 0 0 1 .734-2.647 2.431 2.431 0 0 1 2.034-.947 2.383 2.383 0 0 1 2.076 1.006h.075a8.8 8.8 0 0 1-.106-1.175v-2.519h1.475v9.725h-1.15l-.256-.906h-.069a2.348 2.348 0 0 1-2.069 1.031Zm.394-1.187a1.6 1.6 0 0 0 1.319-.509 2.682 2.682 0 0 0 .425-1.653v-.206a3.1 3.1 0 0 0-.425-1.856 1.577 1.577 0 0 0-1.331-.55 1.351 1.351 0 0 0-1.194.628 3.219 3.219 0 0 0-.419 1.791 3.139 3.139 0 0 0 .406 1.753 1.371 1.371 0 0 0 1.219.602Zm6.719 1.062h-1.469v-6.912h1.469Zm-1.557-8.744a.813.813 0 0 1 .216-.606.84.84 0 0 1 .616-.212.822.822 0 0 1 .6.212.813.813 0 0 1 .216.606.8.8 0 0 1-.216.591.815.815 0 0 1-.6.216.833.833 0 0 1-.616-.216.8.8 0 0 1-.216-.591Zm9.494 1.832v.806l-1.181.219a1.907 1.907 0 0 1 .269.538 2.12 2.12 0 0 1 .106.675 2.068 2.068 0 0 1-.738 1.681 3.086 3.086 0 0 1-2.031.612 3.294 3.294 0 0 1-.6-.05.827.827 0 0 0-.475.688.382.382 0 0 0 .222.356 1.919 1.919 0 0 0 .816.119h1.206a2.682 2.682 0 0 1 1.738.488 1.715 1.715 0 0 1 .593 1.405 2.045 2.045 0 0 1-.969 1.813 5.1 5.1 0 0 1-2.8.638 3.864 3.864 0 0 1-2.156-.501 1.616 1.616 0 0 1-.744-1.425 1.516 1.516 0 0 1 .4-1.072 2.16 2.16 0 0 1 1.128-.6 1.1 1.1 0 0 1-.484-.4 1.018 1.018 0 0 1-.191-.584 1.006 1.006 0 0 1 .219-.656 2.524 2.524 0 0 1 .65-.531 1.925 1.925 0 0 1-.872-.753 2.215 2.215 0 0 1-.334-1.222 2.19 2.19 0 0 1 .709-1.744 2.982 2.982 0 0 1 2.022-.619 4.922 4.922 0 0 1 .619.031 3.875 3.875 0 0 1 .484.084Zm-5.431 7.987a.808.808 0 0 0 .431.731 2.353 2.353 0 0 0 1.2.256 3.635 3.635 0 0 0 1.787-.344 1.03 1.03 0 0 0 .588-.912.685.685 0 0 0-.322-.641 2.585 2.585 0 0 0-1.2-.191h-1.109a1.563 1.563 0 0 0-1 .3.973.973 0 0 0-.375.801Zm.631-5.75a1.391 1.391 0 0 0 .334 1 1.264 1.264 0 0 0 .959.35q1.275 0 1.275-1.362a1.545 1.545 0 0 0-.316-1.041 1.2 1.2 0 0 0-.959-.366 1.236 1.236 0 0 0-.966.362 1.524 1.524 0 0 0-.327 1.057Zm7.55 4.675h-1.469v-6.912h1.469Zm-1.556-8.744a.813.813 0 0 1 .216-.606.84.84 0 0 1 .616-.212.822.822 0 0 1 .6.212.813.813 0 0 1 .216.606.8.8 0 0 1-.216.591.815.815 0 0 1-.6.216.833.833 0 0 1-.616-.216.8.8 0 0 1-.216-.591Zm6.231 7.681a3.572 3.572 0 0 0 1.075-.169v1.107a2.965 2.965 0 0 1-.628.178 4.327 4.327 0 0 1-.8.072q-2.088 0-2.088-2.2v-3.725h-.944v-.65l1.012-.537.5-1.462h.906v1.537h1.969v1.112h-1.964v3.7a1.038 1.038 0 0 0 .266.784.968.968 0 0 0 .696.254Zm6.781 1.063-.294-.963h-.05a2.832 2.832 0 0 1-1.006.859 3.182 3.182 0 0 1-1.3.228 2.2 2.2 0 0 1-1.591-.55 2.058 2.058 0 0 1-.572-1.556 1.827 1.827 0 0 1 .794-1.612 4.577 4.577 0 0 1 2.419-.594l1.194-.037v-.369a1.4 1.4 0 0 0-.309-.991 1.262 1.262 0 0 0-.959-.328 3.317 3.317 0 0 0-1.019.156 7.687 7.687 0 0 0-.937.369l-.475-1.05a5.112 5.112 0 0 1 1.231-.447 5.666 5.666 0 0 1 1.262-.153 2.99 2.99 0 0 1 1.991.575 2.251 2.251 0 0 1 .672 1.806v4.657Zm-2.187-1a1.819 1.819 0 0 0 1.284-.447 1.62 1.62 0 0 0 .484-1.253v-.6l-.888.037a3.037 3.037 0 0 0-1.509.347 1.054 1.054 0 0 0-.472.947.924.924 0 0 0 .275.716 1.181 1.181 0 0 0 .826.253Zm6.756 1h-1.469v-9.725h1.469Z" fill="#fff" /></g></symbol><symbol viewBox="0 0 161.845 54.603" id="equatio-svg-logo-with-slogan-light"><g data-name="Equatio Logo (1)" transform="translate(-.449 -.571)"><path data-name="Path 1512" d="M64.604 28.653h-8.213v-6.639h7.729a.631.631 0 0 0 .686-.666v-2.381a.657.657 0 0 0-.686-.686h-7.729v-6.095h8.193a.631.631 0 0 0 .666-.686V9.139a.631.631 0 0 0-.666-.686H52.9a.631.631 0 0 0-.666.686V31.72a.631.631 0 0 0 .666.686h11.684a.657.657 0 0 0 .686-.686v-2.361a.637.637 0 0 0-.666-.706Z" fill="#fff" /><path data-name="Path 1513" d="M84.703 15.512h-2.462a.641.641 0 0 0-.666.686l-.04 1.655a6.577 6.577 0 0 0-5.65-2.744c-4.722 0-8.133 3.713-8.133 8.839s3.431 8.839 8.133 8.839a6.609 6.609 0 0 0 5.467-2.475v7.789a.631.631 0 0 0 .666.686h2.7a.641.641 0 0 0 .666-.686V16.202a.657.657 0 0 0-.681-.69Zm-8.112 13.581a5.15 5.15 0 0 1 0-10.292c2.865 0 4.8 2.079 4.8 5.166.003 3.071-1.939 5.13-4.8 5.13Z" fill="#fff" /><path data-name="Path 1514" d="M103.168 15.516h-2.664a.641.641 0 0 0-.666.686v8.96a3.588 3.588 0 0 1-3.754 3.895c-2.2 0-3.41-1.372-3.41-3.895v-8.96a.631.631 0 0 0-.666-.686h-2.7a.641.641 0 0 0-.666.686v9.626c0 4.238 2.422 6.962 6.175 6.962a5.721 5.721 0 0 0 5.021-2.563l.081 1.433c0 .484.242.726.686.726h2.522a.657.657 0 0 0 .686-.686V16.2a.588.588 0 0 0-.645-.684Z" fill="#fff" /><path data-name="Path 1515" d="M123.287 15.512h-2.462a.641.641 0 0 0-.666.686l-.04 1.655a6.577 6.577 0 0 0-5.65-2.744c-4.722 0-8.132 3.713-8.132 8.839s3.43 8.839 8.132 8.839a6.553 6.553 0 0 0 5.65-2.744l.04 1.655a.631.631 0 0 0 .666.686h2.462a.631.631 0 0 0 .666-.686V16.202a.631.631 0 0 0-.666-.69Zm-8.112 13.581a5.15 5.15 0 0 1 0-10.292c2.866 0 4.8 2.079 4.8 5.166.003 3.071-1.939 5.13-4.8 5.13Z" fill="#fff" /><path data-name="Path 1516" d="M135.354 15.516h-2.482v-3.693a.631.631 0 0 0-.666-.686h-2.724a.631.631 0 0 0-.666.686v3.693h-1.937a.631.631 0 0 0-.666.686v1.9a.631.631 0 0 0 .666.686h1.934v9.585c0 2.866 1.594 4.44 4.5 4.44.444 0 2.684-.061 2.684-1.07v-1.778a.7.7 0 0 0-.182-.5.857.857 0 0 0-.626-.161c-.383.04-.767.061-1.029.061-.888 0-1.292-.444-1.292-1.392v-9.188h2.482a.657.657 0 0 0 .686-.686v-1.9a.657.657 0 0 0-.682-.683Z" fill="#fff" /><path data-name="Path 1517" d="M140.379 8.574a2.29 2.29 0 1 0 2.28 2.28 2.27 2.27 0 0 0-2.28-2.28Z" fill="#fff" /><path data-name="Path 1518" d="M141.711 15.516h-2.724a.641.641 0 0 0-.666.686v15.5a.631.631 0 0 0 .666.686h2.724a.641.641 0 0 0 .666-.686v-15.5a.641.641 0 0 0-.666-.686Z" fill="#fff" /><path data-name="Path 1519" d="M153.577 15.112a8.84 8.84 0 1 0 8.718 8.839 8.591 8.591 0 0 0-8.718-8.839Zm0 13.944a5.113 5.113 0 1 1 4.843-5.106 4.816 4.816 0 0 1-4.843 5.106Z" fill="#fff" /><circle data-name="Ellipse 3" cx="19.974" cy="19.974" r="19.974" transform="translate(.449 .571)" fill="#00b7ff" /><path data-name="Path 1520" d="M33.547 17.392 23.215 7.06a.885.885 0 0 0-.626-.262h-4.661a.871.871 0 0 0-.626.262L6.99 17.392a.885.885 0 0 0-.262.626v4.662a.871.871 0 0 0 .262.626l10.332 10.331a.885.885 0 0 0 .626.261h4.662a.871.871 0 0 0 .626-.262l10.331-10.331a.885.885 0 0 0 .261-.625v-4.682a.9.9 0 0 0-.281-.606Zm-1.493.969v2.6l-9.606-9.602a.694.694 0 0 0-.969 0l-1.7 1.715a.689.689 0 0 0-.02.948l-5.831 5.832-1.231-1.231 9.646-9.646a.725.725 0 0 0 .141-.2Zm-17.7 2.018 5.893-5.893 5.872 5.872-5.891 5.893Zm3.935-11.825h2.563l-9.604 9.605a.694.694 0 0 0 0 .969l1.715 1.715a.656.656 0 0 0 .484.2.626.626 0 0 0 .444-.182l5.893 5.893-1.231 1.231-9.646-9.666a1.014 1.014 0 0 0-.242-.161ZM8.484 22.316v-2.5l9.606 9.606a.7.7 0 0 0 .484.2.656.656 0 0 0 .484-.2l1.715-1.715a.694.694 0 0 0 0-.969c-.02-.02-.04-.02-.04-.04l5.751-5.751 1.231 1.231-9.666 9.646-.04.04Zm13.763 9.807h-2.584l9.465-9.464a.694.694 0 0 0 0-.969l-1.715-1.715a.646.646 0 0 0-.828-.077l-5.857-5.855 1.231-1.231 9.646 9.646c.061.061.121.081.161.121Z" fill="#fff" /><path data-name="Path 1529" d="M58.324 52.098h-1.475v-4.263a1.933 1.933 0 0 0-.3-1.184 1.107 1.107 0 0 0-.937-.391 1.43 1.43 0 0 0-1.247.553 3.245 3.245 0 0 0-.4 1.841v3.444h-1.466v-6.912h1.15l.206.906h.075a1.915 1.915 0 0 1 .834-.763 2.69 2.69 0 0 1 1.2-.269 2.1 2.1 0 0 1 2.116 1.088h.1a2.107 2.107 0 0 1 .862-.8 2.737 2.737 0 0 1 1.275-.287 2.322 2.322 0 0 1 1.8.625 2.768 2.768 0 0 1 .566 1.906v4.506h-1.465v-4.263a1.918 1.918 0 0 0-.3-1.184 1.116 1.116 0 0 0-.941-.391 1.458 1.458 0 0 0-1.256.538 2.755 2.755 0 0 0-.4 1.641Zm10.737 0-.294-.963h-.05a2.832 2.832 0 0 1-1.005.863 3.182 3.182 0 0 1-1.3.228 2.2 2.2 0 0 1-1.591-.55 2.058 2.058 0 0 1-.572-1.559 1.827 1.827 0 0 1 .794-1.612 4.577 4.577 0 0 1 2.419-.594l1.194-.037v-.369a1.4 1.4 0 0 0-.309-.991 1.262 1.262 0 0 0-.959-.328 3.317 3.317 0 0 0-1.019.156 7.688 7.688 0 0 0-.938.369l-.475-1.05a5.112 5.112 0 0 1 1.231-.447 5.666 5.666 0 0 1 1.262-.153 2.99 2.99 0 0 1 1.991.575 2.251 2.251 0 0 1 .672 1.806v4.656Zm-2.187-1a1.819 1.819 0 0 0 1.284-.447 1.62 1.62 0 0 0 .485-1.253v-.6l-.888.037a3.037 3.037 0 0 0-1.509.347 1.054 1.054 0 0 0-.472.947.924.924 0 0 0 .275.716 1.182 1.182 0 0 0 .825.253Zm6.706-2.65.831-1.037 2.088-2.225h1.694l-2.781 2.968 2.956 3.944h-1.725l-2.219-3.031-.806.662v2.369h-1.457v-9.725h1.456v4.744l-.074 1.331Zm8.663 3.775a3.344 3.344 0 0 1-2.522-.941 3.571 3.571 0 0 1-.909-2.591 3.918 3.918 0 0 1 .844-2.662 2.914 2.914 0 0 1 2.319-.969 2.848 2.848 0 0 1 2.163.831 3.176 3.176 0 0 1 .794 2.288v.794h-4.608a2.27 2.27 0 0 0 .544 1.547 1.894 1.894 0 0 0 1.444.541 5.33 5.33 0 0 0 1.137-.116 5.979 5.979 0 0 0 1.134-.384v1.193a4.51 4.51 0 0 1-1.084.363 6.668 6.668 0 0 1-1.256.106Zm-.269-6.05a1.476 1.476 0 0 0-1.122.444 2.115 2.115 0 0 0-.5 1.294h3.137a1.913 1.913 0 0 0-.412-1.3 1.411 1.411 0 0 0-1.103-.438Zm13.775 5.925h-1.475v-4.263a1.933 1.933 0 0 0-.3-1.184 1.107 1.107 0 0 0-.937-.391 1.43 1.43 0 0 0-1.247.553 3.245 3.245 0 0 0-.4 1.841v3.444h-1.466v-6.912h1.15l.206.906h.075a1.915 1.915 0 0 1 .834-.763 2.69 2.69 0 0 1 1.2-.269 2.1 2.1 0 0 1 2.116 1.088h.1a2.107 2.107 0 0 1 .862-.8 2.737 2.737 0 0 1 1.275-.287 2.322 2.322 0 0 1 1.8.625 2.768 2.768 0 0 1 .566 1.906v4.506h-1.465v-4.263a1.918 1.918 0 0 0-.3-1.184 1.116 1.116 0 0 0-.941-.391 1.458 1.458 0 0 0-1.253.538 2.755 2.755 0 0 0-.4 1.641Zm10.738 0-.294-.963h-.05a2.832 2.832 0 0 1-1.006.863 3.182 3.182 0 0 1-1.3.228 2.2 2.2 0 0 1-1.588-.553 2.058 2.058 0 0 1-.572-1.556 1.827 1.827 0 0 1 .794-1.612 4.577 4.577 0 0 1 2.419-.594l1.194-.037v-.369a1.4 1.4 0 0 0-.309-.991 1.262 1.262 0 0 0-.959-.328 3.317 3.317 0 0 0-1.019.156 7.688 7.688 0 0 0-.937.369l-.475-1.05a5.112 5.112 0 0 1 1.231-.447 5.666 5.666 0 0 1 1.263-.153 2.99 2.99 0 0 1 1.991.575 2.251 2.251 0 0 1 .672 1.806v4.656Zm-2.188-1a1.819 1.819 0 0 0 1.284-.447 1.62 1.62 0 0 0 .485-1.253v-.6l-.888.037a3.037 3.037 0 0 0-1.509.347 1.054 1.054 0 0 0-.472.947.924.924 0 0 0 .275.716 1.182 1.182 0 0 0 .825.253Zm7.862-.062a3.572 3.572 0 0 0 1.075-.169v1.106a2.965 2.965 0 0 1-.628.178 4.328 4.328 0 0 1-.8.072q-2.087 0-2.088-2.2v-3.725h-.944v-.65l1.012-.537.5-1.462h.906v1.537h1.969v1.112h-1.964v3.7a1.038 1.038 0 0 0 .266.784.968.968 0 0 0 .697.254Zm8.538 1.062h-1.475v-4.25a1.86 1.86 0 0 0-.322-1.194 1.244 1.244 0 0 0-1.022-.394 1.622 1.622 0 0 0-1.359.553 3.048 3.048 0 0 0-.434 1.853v3.432h-1.469v-9.725h1.469v2.469a11.521 11.521 0 0 1-.075 1.269h.094a2.039 2.039 0 0 1 .834-.775 2.689 2.689 0 0 1 1.247-.275 2.229 2.229 0 0 1 2.512 2.531Zm7.7.125a2.408 2.408 0 0 1-2.019-.937 4.214 4.214 0 0 1-.725-2.631 4.227 4.227 0 0 1 .734-2.647 2.431 2.431 0 0 1 2.034-.947 2.383 2.383 0 0 1 2.076 1.006h.075a8.8 8.8 0 0 1-.106-1.175v-2.519h1.475v9.725h-1.15l-.256-.906h-.069a2.348 2.348 0 0 1-2.069 1.031Zm.394-1.187a1.6 1.6 0 0 0 1.319-.509 2.682 2.682 0 0 0 .425-1.653v-.206a3.1 3.1 0 0 0-.425-1.856 1.577 1.577 0 0 0-1.331-.55 1.351 1.351 0 0 0-1.194.628 3.219 3.219 0 0 0-.419 1.791 3.139 3.139 0 0 0 .406 1.753 1.371 1.371 0 0 0 1.219.602Zm6.719 1.062h-1.469v-6.912h1.469Zm-1.557-8.744a.813.813 0 0 1 .216-.606.84.84 0 0 1 .616-.212.822.822 0 0 1 .6.212.813.813 0 0 1 .216.606.8.8 0 0 1-.216.591.815.815 0 0 1-.6.216.833.833 0 0 1-.616-.216.8.8 0 0 1-.216-.591Zm9.494 1.832v.806l-1.181.219a1.907 1.907 0 0 1 .269.538 2.12 2.12 0 0 1 .106.675 2.068 2.068 0 0 1-.738 1.681 3.086 3.086 0 0 1-2.031.612 3.294 3.294 0 0 1-.6-.05.827.827 0 0 0-.475.688.382.382 0 0 0 .222.356 1.919 1.919 0 0 0 .816.119h1.206a2.682 2.682 0 0 1 1.738.488 1.715 1.715 0 0 1 .593 1.405 2.045 2.045 0 0 1-.969 1.813 5.1 5.1 0 0 1-2.8.638 3.864 3.864 0 0 1-2.156-.501 1.616 1.616 0 0 1-.744-1.425 1.516 1.516 0 0 1 .4-1.072 2.16 2.16 0 0 1 1.128-.6 1.1 1.1 0 0 1-.484-.4 1.018 1.018 0 0 1-.191-.584 1.006 1.006 0 0 1 .219-.656 2.524 2.524 0 0 1 .65-.531 1.925 1.925 0 0 1-.872-.753 2.215 2.215 0 0 1-.334-1.222 2.19 2.19 0 0 1 .709-1.744 2.982 2.982 0 0 1 2.022-.619 4.922 4.922 0 0 1 .619.031 3.875 3.875 0 0 1 .484.084Zm-5.431 7.987a.808.808 0 0 0 .431.731 2.353 2.353 0 0 0 1.2.256 3.635 3.635 0 0 0 1.787-.344 1.03 1.03 0 0 0 .588-.912.685.685 0 0 0-.322-.641 2.585 2.585 0 0 0-1.2-.191h-1.109a1.563 1.563 0 0 0-1 .3.973.973 0 0 0-.375.801Zm.631-5.75a1.391 1.391 0 0 0 .334 1 1.264 1.264 0 0 0 .959.35q1.275 0 1.275-1.362a1.545 1.545 0 0 0-.316-1.041 1.2 1.2 0 0 0-.959-.366 1.236 1.236 0 0 0-.966.362 1.524 1.524 0 0 0-.327 1.057Zm7.55 4.675h-1.469v-6.912h1.469Zm-1.556-8.744a.813.813 0 0 1 .216-.606.84.84 0 0 1 .616-.212.822.822 0 0 1 .6.212.813.813 0 0 1 .216.606.8.8 0 0 1-.216.591.815.815 0 0 1-.6.216.833.833 0 0 1-.616-.216.8.8 0 0 1-.216-.591Zm6.231 7.681a3.572 3.572 0 0 0 1.075-.169v1.107a2.965 2.965 0 0 1-.628.178 4.327 4.327 0 0 1-.8.072q-2.088 0-2.088-2.2v-3.725h-.944v-.65l1.012-.537.5-1.462h.906v1.537h1.969v1.112h-1.964v3.7a1.038 1.038 0 0 0 .266.784.968.968 0 0 0 .696.254Zm6.781 1.063-.294-.963h-.05a2.832 2.832 0 0 1-1.006.859 3.182 3.182 0 0 1-1.3.228 2.2 2.2 0 0 1-1.591-.55 2.058 2.058 0 0 1-.572-1.556 1.827 1.827 0 0 1 .794-1.612 4.577 4.577 0 0 1 2.419-.594l1.194-.037v-.369a1.4 1.4 0 0 0-.309-.991 1.262 1.262 0 0 0-.959-.328 3.317 3.317 0 0 0-1.019.156 7.687 7.687 0 0 0-.937.369l-.475-1.05a5.112 5.112 0 0 1 1.231-.447 5.666 5.666 0 0 1 1.262-.153 2.99 2.99 0 0 1 1.991.575 2.251 2.251 0 0 1 .672 1.806v4.657Zm-2.187-1a1.819 1.819 0 0 0 1.284-.447 1.62 1.62 0 0 0 .484-1.253v-.6l-.888.037a3.037 3.037 0 0 0-1.509.347 1.054 1.054 0 0 0-.472.947.924.924 0 0 0 .275.716 1.181 1.181 0 0 0 .826.253Zm6.756 1h-1.469v-9.725h1.469Z" fill="#fff" /></g></symbol><symbol viewBox="0 0 11.172 11.172" id="equatio-svg-modal-close"><path fill="currentColor" d="M11.172 1.128 10.043 0 5.586 4.457 1.128 0 0 1.128l4.457 4.458L0 10.043l1.128 1.129 4.458-4.458 4.457 4.458 1.129-1.129-4.458-4.457z" /></symbol><symbol viewBox="0 0 19.5 20.3" id="equatio-svg-option-angle"><path style="fill:none;stroke:currentColor;stroke-width:1.576;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M18.7 15.7H.8L16.9.8" /><path style="fill:none;stroke:currentColor;stroke-width:1.576;stroke-linecap:round;stroke-linejoin:round" d="M8.4.9s.4.2 1 .7" /><path style="fill:none;stroke:currentColor;stroke-width:1.576;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:2.614,2.614" d="M11.2 3.5C13 5.8 15.1 10 15.5 17" /><path style="fill:none;stroke:currentColor;stroke-width:1.576;stroke-linecap:round;stroke-linejoin:round" d="M15.5 18.3v1.2" /></symbol><symbol viewBox="0 0 23.5 25.8" id="equatio-svg-option-prediction"><path style="fill:currentColor" d="M10.5 1.4C4.7 1.4 0 6.1 0 11.8c0 5.8 4.7 10.5 10.5 10.5S21 17.6 21 11.8c-.1-5.7-4.8-10.4-10.5-10.4m-7.6 9c-.7-.8.2-3.2 2.3-5 2.1-1.8 4.5-2.2 5.2-1.5.6.7-1.4 1.8-3.5 3.6-2 1.8-3.4 3.7-4 2.9" /><path style="fill:currentColor" d="M19.6 1.7c-1.3 0-1.5-.2-1.4-1.5 0-.1-.1-.2-.2-.2s-.2.1-.2.2c0 1.3-.2 1.4-1.2 1.4h-.3c-.1 0-.2.1-.2.2s.1.2.2.2c1.3 0 1.5.2 1.4 1.5 0 .1.1.2.2.2s.2-.1.2-.2c0-1.3.2-1.4 1.2-1.4h.3c.1 0 .2-.1.2-.2 0-.2-.1-.2-.2-.2M23.2 4.4c-1.7 0-1.9-.2-1.8-1.9 0-.1-.1-.2-.2-.2s-.2.1-.2.2c0 1.6-.2 1.8-1.6 1.8h-.3c-.1 0-.2.1-.2.2s.1.2.2.2c1.7 0 1.9.2 1.8 1.9 0 .1.1.2.2.2s.2-.1.2-.2c0-1.6.2-1.8 1.6-1.8h.3c.1 0 .2-.1.2-.2.1-.1 0-.2-.2-.2" /><g style="opacity:.43;enable-background:new"><defs><path id="equatio-svg-option-prediction_a" d="M0 1.4h17.5v18.7H0z" /></defs><path style="clip-path:url(#equatio-svg-option-prediction_b);fill:currentColor" d="M.6 12.4C.6 6.6 5.3 1.9 11.1 1.9c2.4 0 4.6.8 6.4 2.2-1.9-1.7-4.3-2.7-7-2.7C4.7 1.4 0 6.1 0 11.8c0 3.4 1.6 6.4 4.1 8.3C2 18.2.6 15.5.6 12.4" /></g><path style="fill:currentColor" d="M18 23.2c-.2-.6-1.5-1.1-3.3-1.5l-.9.3c.7.1 1.1.2 1.1.3 0 .3-2.1.5-4.6.5s-4.6-.2-4.6-.5c0-.1.6-.3 1.5-.3-.3-.1-.6-.2-.8-.3-1.8.3-3.1.8-3.3 1.5-1.5.3-2.3.6-2.3 1 0 .9 4.4 1.6 9.9 1.6 5.4 0 9.9-.7 9.9-1.6-.3-.3-1.2-.7-2.6-1" /></symbol><clipPath id="equatio-svg-option-prediction_b"><use xlink:href="#equatio-svg-option-prediction_a" style="overflow:visible" /></clipPath><symbol viewBox="0 0 11.287 16.628" id="equatio-svg-pages-delete"><g fill="#494949"><path d="M10.178 4.132H.903a.476.476 0 0 0-.5.5v9.98a2 2 0 0 0 1.915 2.02h6.248a1.937 1.937 0 0 0 1.915-2.015V4.632c.1-.3 0-.5-.3-.5zm1.109-2.016a.931.931 0 0 1-1.008.907H1.008A.994.994 0 0 1 0 2.116a.931.931 0 0 1 1.008-.907h9.271a.872.872 0 0 1 1.008.907z" /><path d="M8.163 2.318v-1.31C8.163.408 6.954 0 5.543 0s-2.62.5-2.62 1.008v1.31z" /></g></symbol><symbol viewBox="0 0 16.628 16.628" id="equatio-svg-pages-duplicate"><path d="M9.353 3.118h-2.6a.52.52 0 0 1-.52-.52V0zm-5.2 1.039V.52A.52.52 0 0 0 3.637 0h-2.6A1.039 1.039 0 0 0 0 1.039v9.353a1.039 1.039 0 0 0 1.039 1.039H5.2v-5.2A3.081 3.081 0 0 1 5.388 5.2H5.2a1.039 1.039 0 0 1-1.043-1.043zm9.873 4.157h2.6L13.51 5.2v2.6a.52.52 0 0 0 .52.514zm-2.6 1.039V5.716a.52.52 0 0 0-.52-.52h-2.6a1.039 1.039 0 0 0-1.031 1.039v9.353a1.039 1.039 0 0 0 1.039 1.039h7.275a1.039 1.039 0 0 0 1.039-1.039v-4.676a.52.52 0 0 0-.52-.52h-3.637a1.039 1.039 0 0 1-1.039-1.039z" fill="#494949" /></symbol><symbol viewBox="0 0 9.862 15.918" id="equatio-svg-pages-hide"><path d="m7.959 15.918 1.9-1.9-6.052-6.059 6.056-6.056-1.9-1.9L0 7.959z" fill="#484848" /></symbol><symbol viewBox="0 0 14.77 3.408" id="equatio-svg-pages-more"><path d="M1.7 0a1.7 1.7 0 1 0 1.7 1.7A1.7 1.7 0 0 0 1.7 0zm11.361 0a1.7 1.7 0 1 0 1.7 1.7A1.7 1.7 0 0 0 13.065 0zM7.38 0a1.7 1.7 0 1 0 1.7 1.7A1.7 1.7 0 0 0 7.385 0z" fill="#494949" /></symbol><symbol viewBox="0 0 8.082 16.628" id="equatio-svg-pages-move-beginning"><path d="m7.95 7.78-.635.635a.449.449 0 0 1-.635 0L4.939 6.673v9.506a.449.449 0 0 1-.449.449h-.9a.449.449 0 0 1-.449-.449V6.673L1.4 8.414a.449.449 0 0 1-.635 0L.13 7.779a.449.449 0 0 1 0-.635l3.594-3.591a.449.449 0 0 1 .635 0L7.95 7.145a.449.449 0 0 1 0 .635zM8.082.577v1.155a.577.577 0 0 1-.577.577H.577A.577.577 0 0 1 0 1.732V.577A.577.577 0 0 1 .577 0H7.5a.577.577 0 0 1 .582.577z" fill="#494949" /></symbol><symbol viewBox="0 0 10.175 16.628" id="equatio-svg-pages-move-down"><path d="m.165 11.141.8-.8a.566.566 0 0 1 .8 0l2.192 2.193V.566a.565.565 0 0 1 .565-.565h1.131a.565.565 0 0 1 .565.565v11.968l2.193-2.193a.566.566 0 0 1 .8 0l.8.8a.565.565 0 0 1 0 .8l-4.524 4.521a.565.565 0 0 1-.8 0L.165 11.94a.565.565 0 0 1 0-.799z" fill="#494949" /></symbol><symbol viewBox="0 0 8.082 16.628" id="equatio-svg-pages-move-end"><path d="m.132 8.848.635-.635a.449.449 0 0 1 .635 0l1.741 1.742V.449A.449.449 0 0 1 3.592 0h.9a.449.449 0 0 1 .449.449v9.506l1.741-1.741a.449.449 0 0 1 .635 0l.635.635a.449.449 0 0 1 0 .635l-3.594 3.591a.449.449 0 0 1-.635 0L.132 9.483a.449.449 0 0 1 0-.635zM0 16.051v-1.155a.577.577 0 0 1 .577-.577h6.928a.577.577 0 0 1 .577.577v1.155a.577.577 0 0 1-.577.577H.582A.577.577 0 0 1 0 16.051z" fill="#494949" /></symbol><symbol viewBox="0 0 10.175 16.628" id="equatio-svg-pages-move-up"><path d="m10.01 5.487-.8.8a.566.566 0 0 1-.8 0L6.218 4.094v11.968a.565.565 0 0 1-.565.565H4.522a.565.565 0 0 1-.565-.565V4.094L1.764 6.287a.566.566 0 0 1-.8 0l-.8-.8a.565.565 0 0 1 0-.8L4.686.165a.565.565 0 0 1 .8 0l4.524 4.523a.565.565 0 0 1 0 .799z" fill="#494949" /></symbol><symbol viewBox="0 0 17.3 17.3" id="equatio-svg-pages-new-page"><path d="M17.3 9.886H9.886V17.3H7.415V9.886H0V7.415h7.415V0h2.471v7.415H17.3z" fill="#494949" /></symbol><symbol viewBox="0 0 9.862 15.918" id="equatio-svg-pages-show"><path d="m1.903 0-1.9 1.9 6.052 6.059-6.056 6.056 1.9 1.9 7.963-7.956z" fill="#484848" /></symbol><symbol viewBox="0 0 15.492 13.636" id="equatio-svg-palette-add-favourite"><path d="M8.12 1.525a.487.487 0 0 1-.736-.008C4.684-1.765 0 .793 0 4.327c0 3.1 3.844 5.587 7.025 9a.99.99 0 0 0 1.441 0c3.181-3.412 7.026-5.9 7.026-9 0-3.538-4.546-6.097-7.372-2.802Zm1.449 7.628c-.417.393-.84.792-1.266 1.2a.8.8 0 0 1-1.114 0c-.426-.413-.849-.812-1.266-1.205-1.915-1.8-3.722-3.508-3.722-4.826A2.255 2.255 0 0 1 4.352 2.2a4.091 4.091 0 0 1 2.45 1.34l.487.432a.684.684 0 0 0 .915 0l.457-.4A4.149 4.149 0 0 1 11.14 2.2a2.255 2.255 0 0 1 2.151 2.127c0 1.318-1.808 3.022-3.722 4.826Z" fill="#80868b" /></symbol><symbol viewBox="0 0 20.706 18.693" id="equatio-svg-palette-category-favourites"><path d="M10.853 2.09a.64.64 0 0 1-.984-.011C6.26-2.42 0 1.086 0 5.931c0 4.247 5.138 7.658 9.39 12.335a1.3 1.3 0 0 0 1.925 0c4.252-4.677 9.39-8.089 9.39-12.335.001-4.849-6.071-8.357-9.852-3.841Zm1.937 10.457a170.21 170.21 0 0 0-1.692 1.651 1.053 1.053 0 0 1-1.489 0 159.972 159.972 0 0 0-1.692-1.652c-2.56-2.472-4.971-4.808-4.971-6.615a3.053 3.053 0 0 1 2.871-2.916 5.432 5.432 0 0 1 3.274 1.837l.655.592a.9.9 0 0 0 1.222 0l.61-.553a5.51 5.51 0 0 1 3.315-1.874 3.053 3.053 0 0 1 2.875 2.916c0 1.807-2.416 4.143-4.975 6.616Z" fill="currentColor" /></symbol><symbol viewBox="0 0 24.865 18.693" id="equatio-svg-palette-category-formulas"><path data-name="Icon awesome-square-root-alt" d="m24.644 8.467-1.067-1.068a.755.755 0 0 0-1.068 0l-2.177 2.173-2.169-2.173a.755.755 0 0 0-1.068 0l-1.063 1.068a.755.755 0 0 0 0 1.068l2.173 2.173-2.173 2.172a.755.755 0 0 0 0 1.068l1.067 1.067a.755.755 0 0 0 1.068 0l2.165-2.173 2.173 2.173a.755.755 0 0 0 1.068 0l1.067-1.067a.755.755 0 0 0 0-1.068l-2.173-2.173 2.173-2.173a.755.755 0 0 0 .004-1.067Z" fill="currentColor" /><g data-name="Group 595"><path data-name="Path 1277" d="M1.321 13.23h.671l4.226 4.994a1.368 1.368 0 0 0 1.046.469c.048 0 .1 0 .144-.007A1.32 1.32 0 0 0 8.46 18l8.008-15.594h5.983a1.266 1.266 0 0 0 1.321-1.2 1.266 1.266 0 0 0-1.321-1.2h-6.823a1.336 1.336 0 0 0-1.2.693l-7.446 14.5-3.3-3.9a1.369 1.369 0 0 0-1.046-.469H1.321a1.208 1.208 0 1 0 0 2.406Z" fill="currentColor" /></g></symbol><symbol viewBox="0 0 21.944 18.693" id="equatio-svg-palette-category-general"><path d="M21.944 7.315a.812.812 0 0 1-.813.813h-4.064a.812.812 0 0 1-.813-.813c0-1.523.231-3.089 2.991-4.021 1.073-.363 1.073-.721 1.073-.856a.813.813 0 0 0-.813-.813h-.813a.809.809 0 0 0-.73.456.815.815 0 1 1-1.462-.719A2.427 2.427 0 0 1 18.693 0h.813a2.441 2.441 0 0 1 2.438 2.438c0 1.1-.733 1.906-2.178 2.4-1.383.467-1.752.987-1.85 1.668h3.215a.812.812 0 0 1 .813.813Zm-8.127-4.877h-13A.813.813 0 0 0 0 3.251v2.438a.813.813 0 0 0 .813.813h.813a.813.813 0 0 0 .813-.813v-.813h3.25v11.378h-.813a.813.813 0 0 0-.813.813v.813a.813.813 0 0 0 .813.813h4.876a.813.813 0 0 0 .813-.813v-.813a.813.813 0 0 0-.813-.813H8.94V4.876h3.251v.813A.813.813 0 0 0 13 6.5h.813a.812.812 0 0 0 .812-.813V3.251a.812.812 0 0 0-.808-.813Z" fill="currentColor" /></symbol><symbol viewBox="0 0 18.749 18.749" id="equatio-svg-palette-category-layout"><path data-name="Path 1283" d="M4.018 18.749H6.7v-2.678H4.018ZM0 6.7h2.678V4.018H0Zm0-4.022h2.678V0H0Zm4.018 8.035H6.7V8.035H4.018Zm0-8.035H6.7V0H4.018ZM0 18.749h2.678v-2.678H0Zm0-8.035h2.678V8.035H0Zm0 4.018h2.678v-2.679H0ZM16.071 0v2.678h2.678V0Zm0 10.714h2.678V8.035h-2.678Zm-8.035 8.035h2.678V0H8.035Zm8.035 0h2.678v-2.678h-2.678Zm0-12.053h2.678V4.018h-2.678Zm0 8.035h2.678v-2.678h-2.678Zm-4.018 4.018h2.678v-2.678h-2.678Zm0-8.035h2.678V8.035h-2.678Zm0-8.035h2.678V0h-2.678Z" fill="currentColor" /></symbol><symbol viewBox="0 0 19.813 18.749" id="equatio-svg-palette-category-symbols"><path data-name="Path 1279" d="M15.41 15.197c-2.83-2.21-.833-11.317-.833-11.317h3.46a1.786 1.786 0 0 0 1.777-1.922c0-2.085-1.73-1.957-1.73-1.957H5.346C3.255.001 1.368 2.395.285 4.107c-.577.914-.251 1.171.74.74 3.471-1.52 4.45-.973 4.45-.973.245 1.171.326 6.453-.565 8.538-.9 1.963-2.568 4.45-.122 5.912C6.7 19.408 8.7 17.187 8.5 13.397c-.093-2-.251-9.517-.251-9.517h3.192c-.1 1.171-.641 7.146-.076 10.688.588 5.912 7.012 4.764 8.212 1.416a3.087 3.087 0 0 0 .006-2.173c-.408-1-1.089-1.048-1.013-.582a2.564 2.564 0 0 1-.029.85 2.154 2.154 0 0 1-3.131 1.118Z" fill="currentColor" /></symbol><symbol viewBox="0 0 15.657 13.782" id="equatio-svg-palette-remove-favourite"><path d="M15.657 4.373c0 3.131-3.885 5.646-7.1 9.095a1 1 0 0 1-1.456 0C3.886 10.02.001 7.504.001 4.373c0-3.572 4.734-6.157 7.463-2.84a.492.492 0 0 0 .744.008c2.858-3.33 7.449-.741 7.449 2.832Z" fill="#80868b" /></symbol><symbol viewBox="0 0 56.7 56.7" id="equatio-svg-platform-icon-android"><style>#equatio-svg-platform-icon-android .st0{fill:#a6d050}</style><path class="st0" d="m35 8.6.5-.8.5-.8 1.2-1.8c.1-.2.1-.5-.1-.7-.2-.1-.5-.1-.7.1l-1.3 1.9-.5.8-.6.8C32.2 7.4 30.3 7 28.2 7c-2.1 0-4 .4-5.8 1.1l-.4-.7-.5-.8-1.3-1.9c-.1-.2-.4-.3-.7-.1-.2.1-.3.4-.1.7l1.2 1.8.5.8.5.8c-4.1 1.9-6.9 5.5-6.9 9.7h27.1c.1-4.3-2.7-7.9-6.8-9.8zm-12.5 5.8c-.8 0-1.5-.7-1.5-1.5s.6-1.5 1.5-1.5c.8 0 1.5.6 1.5 1.5s-.7 1.5-1.5 1.5zm11.7 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.6 1.5 1.5-.7 1.5-1.5 1.5zM15 20.2h-.2V41.5c0 1.7 1.4 3.1 3.1 3.1h2.2c-.1.3-.1.5-.1.8v6.2c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9v-6.2c0-.3 0-.6-.1-.8H31c-.1.3-.1.5-.1.8v6.2c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9v-6.2c0-.3 0-.6-.1-.8h2.2c1.7 0 3.1-1.4 3.1-3.1V20.2H15zM9.9 20.2c-1.6 0-2.9 1.3-2.9 2.9v12.4c0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9V23.1c0-1.6-1.3-2.9-2.9-2.9zM46.8 20.2c-1.6 0-2.9 1.3-2.9 2.9v12.4c0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9V23.1c0-1.6-1.3-2.9-2.9-2.9z" /></symbol><symbol viewBox="0 0 56.7 56.7" id="equatio-svg-platform-icon-apple"><path d="M41.8 30.5c-.1-6.2 5.1-9.2 5.3-9.4-2.9-4.2-7.4-4.8-9-4.9-3.8-.4-7.5 2.3-9.4 2.3-1.9 0-4.9-2.2-8.1-2.1-4.2.1-8 2.4-10.2 6.2-4.4 7.5-1.1 18.6 3.1 24.7 2.1 3 4.5 6.3 7.8 6.2 3.1-.1 4.3-2 8.1-2s4.8 2 8.1 2c3.4-.1 5.5-3 7.5-6 2.4-3.5 3.3-6.8 3.4-7-.1-.1-6.6-2.5-6.6-10zM35.6 12.2c1.7-2.1 2.9-5 2.6-7.9-2.5.1-5.5 1.6-7.2 3.7-1.6 1.8-3 4.8-2.6 7.6 2.6.3 5.5-1.3 7.2-3.4z" /></symbol><symbol viewBox="0 0 190 190" id="equatio-svg-platform-icon-chrome"><defs><circle id="equatio-svg-platform-icon-chrome_a" cx="95" cy="95" r="88" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_b)"><path style="fill:#db4437" d="M21 7v108h39.4L95 55h88V7H21z" /><path style="fill:url(#equatio-svg-platform-icon-chrome_c)" d="M21 7v108h39.4L95 55h88V7H21z" /></g><defs><circle id="equatio-svg-platform-icon-chrome_d" cx="95" cy="95" r="88" /></defs><path style="clip-path:url(#equatio-svg-platform-icon-chrome_e);fill:#3e2723;fill-opacity:.15" d="M61.3 114.7 21.5 46.4l-.6 1 39 67.8 1.4-.5z" /><defs><circle id="equatio-svg-platform-icon-chrome_f" cx="95" cy="95" r="88" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_g)"><path style="fill:#0f9d58" d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" /><path style="fill:url(#equatio-svg-platform-icon-chrome_h)" d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" /></g><defs><circle id="equatio-svg-platform-icon-chrome_i" cx="95" cy="95" r="88" /></defs><path style="clip-path:url(#equatio-svg-platform-icon-chrome_j);fill:#263238;fill-opacity:.15" d="m128.8 116.3-.8-.4-38.3 67h1l38.3-67-.2.4z" /><defs><circle id="equatio-svg-platform-icon-chrome_k" cx="95" cy="95" r="88" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_l)"><defs><path id="equatio-svg-platform-icon-chrome_m" d="M7 183h83.8l39-39v-29H60.2L7 23.5z" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_n)"><path style="fill:#ffcd40" d="m95 55 34.6 60L91 183h92V55H95z" /><path style="fill:url(#equatio-svg-platform-icon-chrome_o)" d="m95 55 34.6 60L91 183h92V55H95z" /></g><defs><circle id="equatio-svg-platform-icon-chrome_p" cx="95" cy="95" r="88" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_q)"><path style="fill:#ffcd40" d="m95 55 34.6 60L91 183h92V55H95z" /><path style="fill:url(#equatio-svg-platform-icon-chrome_r)" d="m95 55 34.6 60L91 183h92V55H95z" /></g><defs><circle id="equatio-svg-platform-icon-chrome_s" cx="95" cy="95" r="88" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_t)"><defs><path id="equatio-svg-platform-icon-chrome_u" d="m95 55 34.6 60L91 183h92V55z" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_v)"><path style="fill:#db4437" d="M21 7v108h39.4L95 55h88V7H21z" /><path style="fill:url(#equatio-svg-platform-icon-chrome_w)" d="M21 7v108h39.4L95 55h88V7H21z" /></g><defs><circle id="equatio-svg-platform-icon-chrome_x" cx="95" cy="95" r="88" /></defs><path style="clip-path:url(#equatio-svg-platform-icon-chrome_y);fill:url(#SVGID_26_)" d="M95 55v21l78.4-21H95z" /><defs><circle id="equatio-svg-platform-icon-chrome_z" cx="95" cy="95" r="88" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_A)"><defs><path id="equatio-svg-platform-icon-chrome_B" d="M21 7v40.3L60.4 115 95 55h88V7z" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_C)"><path style="fill:#0f9d58" d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" /><path style="fill:url(#equatio-svg-platform-icon-chrome_D)" d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" /></g><defs><circle id="equatio-svg-platform-icon-chrome_E" cx="95" cy="95" r="88" /></defs><path style="clip-path:url(#equatio-svg-platform-icon-chrome_F);fill:url(#SVGID_34_)" d="m21 47.5 57.2 57.2L60.4 115 21 47.5z" /><defs><circle id="equatio-svg-platform-icon-chrome_G" cx="95" cy="95" r="88" /></defs><path style="clip-path:url(#equatio-svg-platform-icon-chrome_H);fill:url(#SVGID_37_)" d="m90.8 183 21-78.3 17.8 10.3-38.8 68z" /><defs><circle id="equatio-svg-platform-icon-chrome_I" cx="95" cy="95" r="88" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_J)"><circle style="fill:#f1f1f1" cx="95" cy="95" r="40" /><circle style="fill:#4285f4" cx="95" cy="95" r="32" /></g><defs><circle id="equatio-svg-platform-icon-chrome_K" cx="95" cy="95" r="88" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_L)"><path style="fill:#3e2723;fill-opacity:.2" d="M95 54c-22 0-40 18-40 40v1c0-22 18-40 40-40h88v-1H95z" /><path style="fill:#fff;fill-opacity:.1" d="M129.6 115c-7 12-19.8 20-34.6 20s-27.7-8-34.6-20L7 23.5v1L60.4 116c7 12 19.8 20 34.6 20s27.7-8 34.6-20v-1z" /><path style="opacity:.1;fill:#3e2723;enable-background:new" d="M96 55h-.5c22 .3 39.5 18 39.5 40s-17.6 39.7-39.5 40h.5c22 0 40-18 40-40s-18-40-40-40z" /><path style="fill:#fff;fill-opacity:.2" d="M130 116.3c3.4-5.8 5.4-12.6 5.4-20 0-4-.7-8.2-2-12 1 3.4 1.6 7 1.6 10.7 0 7.3-2 14-5.4 20L91 183h1l38.2-66.5-.2-.2z" /></g><defs><circle id="equatio-svg-platform-icon-chrome_M" cx="95" cy="95" r="88" /></defs><g style="clip-path:url(#equatio-svg-platform-icon-chrome_N)"><path style="fill:#fff;fill-opacity:.2" d="M95 8c48.4 0 87.7 39 88 87.5V95c0-48.6-39.4-88-88-88S7 46.4 7 95v.5C7.3 47 46.6 8 95 8z" /><path style="fill:#3e2723;fill-opacity:.15" d="M95 182c48.4 0 87.7-39 88-87.5v.5c0 48.6-39.4 88-88 88S7 143.6 7 95v-.5C7.3 143 46.6 182 95 182z" /></g><circle style="fill:url(#equatio-svg-platform-icon-chrome_O)" cx="95" cy="95" r="88" /><path style="fill:none" d="M-1-1h192v192H-1V-1z" /></g></g></g></symbol><clipPath id="equatio-svg-platform-icon-chrome_b"><use xlink:href="#equatio-svg-platform-icon-chrome_a" style="overflow:visible" /></clipPath><linearGradient id="equatio-svg-platform-icon-chrome_c" gradientUnits="userSpaceOnUse" x1="28.345" y1="117.972" x2="80.845" y2="148.641" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" style="stop-color:#a52714;stop-opacity:.6" /><stop offset=".66" style="stop-color:#a52714;stop-opacity:0" /></linearGradient><clipPath id="equatio-svg-platform-icon-chrome_e"><use xlink:href="#equatio-svg-platform-icon-chrome_d" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_g"><use xlink:href="#equatio-svg-platform-icon-chrome_f" style="overflow:visible" /></clipPath><linearGradient id="equatio-svg-platform-icon-chrome_h" gradientUnits="userSpaceOnUse" x1="109.865" y1="28.491" x2="51.535" y2="62.661" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" style="stop-color:#055524;stop-opacity:.4" /><stop offset=".33" style="stop-color:#055524;stop-opacity:0" /></linearGradient><clipPath id="equatio-svg-platform-icon-chrome_j"><use xlink:href="#equatio-svg-platform-icon-chrome_i" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_l"><use xlink:href="#equatio-svg-platform-icon-chrome_k" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_n"><use xlink:href="#equatio-svg-platform-icon-chrome_m" style="overflow:visible" /></clipPath><linearGradient id="equatio-svg-platform-icon-chrome_o" gradientUnits="userSpaceOnUse" x1="120.964" y1="143.224" x2="135.654" y2="78.894" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" style="stop-color:#ea6100;stop-opacity:.3" /><stop offset=".66" style="stop-color:#ea6100;stop-opacity:0" /></linearGradient><clipPath id="equatio-svg-platform-icon-chrome_q"><use xlink:href="#equatio-svg-platform-icon-chrome_p" style="overflow:visible" /></clipPath><linearGradient id="equatio-svg-platform-icon-chrome_r" gradientUnits="userSpaceOnUse" x1="120.964" y1="143.224" x2="135.654" y2="78.894" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" style="stop-color:#ea6100;stop-opacity:.3" /><stop offset=".66" style="stop-color:#ea6100;stop-opacity:0" /></linearGradient><clipPath id="equatio-svg-platform-icon-chrome_t"><use xlink:href="#equatio-svg-platform-icon-chrome_s" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_v"><use xlink:href="#equatio-svg-platform-icon-chrome_u" style="overflow:visible" /></clipPath><linearGradient id="equatio-svg-platform-icon-chrome_w" gradientUnits="userSpaceOnUse" x1="28.345" y1="117.972" x2="80.845" y2="148.641" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" style="stop-color:#a52714;stop-opacity:.6" /><stop offset=".66" style="stop-color:#a52714;stop-opacity:0" /></linearGradient><clipPath id="equatio-svg-platform-icon-chrome_y"><use xlink:href="#equatio-svg-platform-icon-chrome_x" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_A"><use xlink:href="#equatio-svg-platform-icon-chrome_z" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_C"><use xlink:href="#equatio-svg-platform-icon-chrome_B" style="overflow:visible" /></clipPath><linearGradient id="equatio-svg-platform-icon-chrome_D" gradientUnits="userSpaceOnUse" x1="109.865" y1="28.491" x2="51.535" y2="62.661" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" style="stop-color:#055524;stop-opacity:.4" /><stop offset=".33" style="stop-color:#055524;stop-opacity:0" /></linearGradient><clipPath id="equatio-svg-platform-icon-chrome_F"><use xlink:href="#equatio-svg-platform-icon-chrome_E" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_H"><use xlink:href="#equatio-svg-platform-icon-chrome_G" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_J"><use xlink:href="#equatio-svg-platform-icon-chrome_I" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_L"><use xlink:href="#equatio-svg-platform-icon-chrome_K" style="overflow:visible" /></clipPath><clipPath id="equatio-svg-platform-icon-chrome_N"><use xlink:href="#equatio-svg-platform-icon-chrome_M" style="overflow:visible" /></clipPath><radialGradient id="equatio-svg-platform-icon-chrome_O" cx="33.29" cy="160.99" r="176.75" gradientTransform="matrix(1 0 0 -1 0 192)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#fff;stop-opacity:.1" /><stop offset="1" style="stop-color:#fff;stop-opacity:0" /></radialGradient><symbol viewBox="0 0 512 512" id="equatio-svg-platform-icon-safari"><path style="fill:#fff" d="M105 0h303c58 0 105 47 105 105v302c0 58-47 105-105 105H105C47 512 0 465 0 407V105C0 47 47 0 105 0z" /><circle style="fill:url(#equatio-svg-platform-icon-safari_a)" cx="256" cy="256" r="224" /><path style="fill:red" d="M409 102 237 237l40 40 132-175z" /><path style="fill:#fff" d="m102 409 135-172 40 40-175 132z" /><path style="stroke:#fff;stroke-width:3" d="M256 54v33m0 337v33m35-399.9-5.7 32.5m-58.6 331.8-5.7 32.5M324.9 66.2l-11.3 31M198.4 413.8l-11.3 31M221 57.1l5.7 32.5m58.6 331.8 5.7 32.5M187.1 66.2l11.3 31m115.2 316.6 11.3 31M155.2 81l16.6 28.6m168.5 291.8 16.5 28.6M126.5 101.1l21.2 25.3m216.6 258.2 21.2 25.3M101.6 126l25.3 21.2m258.2 216.6 25.3 21.2M81.5 154.8l28.6 16.5m291.8 168.5 28.6 16.5M66.7 186.6l31 11.3m316.6 115.2 31 11.3M57.6 220.5l32.5 5.7m331.8 58.6 32.5 5.7m-399.9-35h33m337 0h33m-399.9 35 32.5-5.7m331.8-58.6 32.5-5.7M66.7 324.4l31-11.3m316.6-115.2 31-11.3M81.5 356.3l28.6-16.5m291.8-168.5 28.6-16.5M101.6 385l25.3-21.2m258.2-216.6 25.3-21.2M126.5 409.9l21.2-25.3m216.6-258.2 21.2-25.3M155.2 430l16.6-28.6m168.5-291.8L356.8 81M238.4 54.8l1.6 17.9m32 365.6 1.6 17.9M203.8 60.9l4.7 17.4m95 354.4 4.7 17.4M170.8 72.9l7.6 16.3m155.1 332.6 7.7 16.3M140.4 90.4l10.3 14.8m210.6 300.6 10.3 14.8M113.5 113l12.7 12.7m259.6 259.6 12.7 12.7M90.9 139.9l14.8 10.3m300.6 210.6 14.8 10.3M73.4 170.3l16.3 7.6M422.3 333l16.3 7.7M61.4 203.3l17.4 4.7m354.4 95 17.4 4.7M55.3 237.9l17.9 1.6m365.6 32 17.9 1.6m-401.4 0 17.9-1.6m365.6-32 17.9-1.6M61.4 307.7l17.4-4.7m354.4-95 17.4-4.7M73.4 340.7l16.3-7.6m332.6-155.2 16.3-7.6M90.9 371.1l14.8-10.3m300.6-210.6 14.8-10.3M140.4 420.6l10.3-14.8m210.5-300.6 10.4-14.8M170.8 438.1l7.7-16.3m155-332.6 7.7-16.3M203.8 450.1l4.7-17.4m95-354.4 4.7-17.4m-69.8 395.3 1.6-17.9m32-365.6 1.6-17.9" /></symbol><linearGradient id="equatio-svg-platform-icon-safari_a" gradientUnits="userSpaceOnUse" x1="-424.549" y1="640.716" x2="-424.549" y2="639.716" gradientTransform="matrix(448 0 0 -448 190454 287073)"><stop offset="0" style="stop-color:#19d7ff" /><stop offset="1" style="stop-color:#1e64f0" /></linearGradient><symbol viewBox="0 0 200.6 199.5" id="equatio-svg-premium-icon"><path style="fill:currentColor" d="m70.2 74 77.3-51.5c.8-.5 1.6-1 2.5-1.4L194.6.8c4.8-2.2 7.3.1 5.4 5.1l-17.4 46.7c-.5 1.5-1.3 2.9-2.2 4.1l-52.7 73.5c-.4.5-.8 1-1.2 1.4l-42.7 42.8c-4.4 4.4-11.6 4.4-16 0L27.4 134c-4.4-4.4-4.4-11.4-.1-15.9l41-42.5c.6-.6 1.2-1.1 1.9-1.6z" /><path style="fill:currentColor" d="M67.8 75.5c-27.8-.2-50.2 8-65 33.2 6.6 2.8 18 6 25 8.6 1.3.5 26.3-27.9 40-41.8zM126.8 131.5c-13.8 13.6-43 41.4-42.5 43 2.5 7 6.6 15.9 9.3 22.3 25.7-14.8 33.4-37.4 33.2-65.3z" /><path style="fill:#a6ce3c" d="M157.3 55.1c-.1-6.8-5.1-11.4-11.9-11.1-6.2.2-11.2 5.2-11.2 11.3 0 6.2 5.6 11.8 11.8 11.8 6.5-.1 11.4-5.3 11.3-12zM115.3 97.4c6.9-.1 11.3-4.8 11.2-11.7-.1-7.1-4.5-11.2-11.7-11-6.8.2-11.3 5.1-11 12 .3 6.2 5.2 10.8 11.5 10.7zM96.2 116.9c.2-6.7-4.6-11.8-11.4-11.9-6.8-.1-11.7 4.8-11.7 11.5 0 6.4 4.7 11.2 11 11.5 6.8.4 11.9-4.3 12.1-11.1z" /><path style="fill:currentColor" d="M56.9 178.1c-3.3 2.5-6.8 5.5-10.6 8.1-3.1 2.2-6.3 4.9-9.8 5.9-9.9 2.8-19.9 4.9-29.9 7.1-4.3.9-7.5-.4-6.3-5.6 3.5-15.5 2.8-32.6 17.1-44.1 2-1.6 2.5-5.3 3.7-8.3 12.2 12.7 24.2 25 35.8 36.9zm-38.3 6.1c12.8.2 23.9-5.8 21.7-10.5-2.8-5.8-8.4-11.4-14.2-14.3-4.6-2.3-10.6 8.1-10.5 18.6-.1 2.3 2.2 4.7 3 6.2z" /><path style="fill:#fff" d="M157.3 55.1c.1 6.7-4.8 11.9-11.3 11.9-6.3 0-11.8-5.5-11.8-11.8 0-6 5-11.1 11.2-11.3 6.8-.2 11.8 4.4 11.9 11.2zM115.3 97.4c-6.3.1-11.3-4.5-11.5-10.8-.3-6.9 4.2-11.8 11-12 7.3-.2 11.6 3.9 11.7 11 .2 7.1-4.3 11.7-11.2 11.8zM96.2 116.9c-.2 6.7-5.3 11.5-12 11.2-6.3-.3-11-5.2-11-11.5 0-6.7 4.9-11.6 11.7-11.5 6.7.1 11.5 5.1 11.3 11.8z" /></symbol><symbol viewBox="0 0 340 234.5" id="equatio-svg-premium-license"><g style="opacity:.37"><path style="fill:url(#equatio-svg-premium-license_a)" d="M60.1 203.3c-43.9 0-81.2 3.9-96.6 9.5v10.7c15.5 5.6 52.7 9.5 96.6 9.5 57.1 0 103.4-6.6 103.4-14.9 0-8.2-46.3-14.8-103.4-14.8z" /></g><path style="fill:#fd3269" d="M98.3 62.7H48c-7.2 0-13.1 5.8-13.1 13.1v94.3c0 7.2 5.8 13.1 13.1 13.1h6.5v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2H62v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2h6.5c7.2 0 13.1-5.8 13.1-13.1V82.7l15-15c2.7-2.7 1.8-5-2.1-5z" /><path style="fill:#fff" d="M72.9 75.6c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3s-1.4 3-3 3z" /><circle style="fill:#fff" cx="72.9" cy="72.6" r="3" /><path style="fill:#fd3269" d="m111.7 78-45.2 45.2c-1.2 1.2-3.1 1.2-4.2 0l-.7-.7c-1.2-1.2-1.2-3.1 0-4.2L106.8 73c1.2-1.2 3.1-1.2 4.2 0l.7.7c1.2 1.2 1.2 3.1 0 4.3z" /><path style="fill:#fd3269" d="m12.7 81.5 45.2 45.2c1.2 1.2 3.1 1.2 4.2 0l.7-.7c1.2-1.2 1.2-3.1 0-4.2L17.7 76.5c-1.2-1.2-3.1-1.2-4.2 0l-.7.7c-1.3 1.2-1.3 3.1-.1 4.3z" /><path style="fill:#515f70" d="m194.4 83.4 77.3-51.5c.8-.5 1.6-1 2.5-1.4l44.6-20.3c4.8-2.2 7.3.1 5.4 5.1L306.8 62c-.5 1.5-1.3 2.9-2.2 4.1l-52.7 73.5c-.4.5-.8 1-1.2 1.4L208 183.8c-4.4 4.4-11.6 4.4-16 0l-40.4-40.4c-4.4-4.4-4.4-11.4-.1-15.9l41-42.5c.6-.6 1.2-1.1 1.9-1.6z" /><path style="fill:#00b7ff" d="M192 84.9c-27.8-.2-50.2 8-65 33.2 6.6 2.8 18 6 25 8.6 1.3.5 26.3-27.9 40-41.8zM251 140.9c-13.8 13.6-43 41.4-42.5 43 2.5 7 6.6 15.9 9.3 22.3 25.7-14.8 33.4-37.4 33.2-65.3z" /><path style="fill:#a6ce3c" d="M281.5 64.5c-.1-6.8-5.1-11.4-11.9-11.1-6.2.2-11.2 5.2-11.2 11.3 0 6.2 5.6 11.8 11.8 11.8 6.5-.1 11.4-5.3 11.3-12zM239.5 106.8c6.9-.1 11.3-4.8 11.2-11.7-.1-7.1-4.5-11.2-11.7-11-6.8.2-11.3 5.1-11 12 .3 6.2 5.2 10.8 11.5 10.7zM220.4 126.3c.2-6.7-4.6-11.8-11.4-11.9-6.8-.1-11.7 4.8-11.7 11.5 0 6.4 4.7 11.2 11 11.5 6.8.4 11.9-4.3 12.1-11.1z" /><path style="fill:#00417c" d="M181.1 187.5c-3.3 2.5-6.8 5.5-10.6 8.1-3.1 2.2-6.3 4.9-9.8 5.9-9.9 2.8-19.9 4.9-29.9 7.1-4.3.9-7.5-.4-6.3-5.6 3.5-15.5 2.8-32.6 17.1-44.1 2-1.6 2.5-5.3 3.7-8.3 12.2 12.7 24.2 25 35.8 36.9zm-38.3 6.1c12.8.2 23.9-5.8 21.7-10.5-2.8-5.8-8.4-11.4-14.2-14.3-4.6-2.3-10.6 8.1-10.5 18.6-.1 2.3 2.2 4.7 3 6.2z" /><path style="fill:#fff" d="M281.5 64.5c.1 6.7-4.8 11.9-11.3 11.9-6.3 0-11.8-5.5-11.8-11.8 0-6 5-11.1 11.2-11.3 6.8-.2 11.8 4.4 11.9 11.2zM239.5 106.8c-6.3.1-11.3-4.5-11.5-10.8-.3-6.9 4.2-11.8 11-12 7.3-.2 11.6 3.9 11.7 11 .2 7.1-4.3 11.7-11.2 11.8zM220.4 126.3c-.2 6.7-5.3 11.5-12 11.2-6.3-.3-11-5.2-11-11.5 0-6.7 4.9-11.6 11.7-11.5 6.7.1 11.5 5.1 11.3 11.8z" /></symbol><radialGradient id="equatio-svg-premium-license_a" cx="336.384" cy="116107.898" r="288.534" gradientTransform="matrix(.256 0 0 .02555 -26.086 -2748.966)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1d1e1c" /><stop offset=".146" style="stop-color:#1d1e1c;stop-opacity:.8541" /><stop offset="1" style="stop-color:#1d1e1c;stop-opacity:0" /></radialGradient><symbol viewBox="0 0 340 234.5" id="equatio-svg-renew-reminder"><path style="fill:#9f5dff" d="M102.5-418.4H39.1c-8.4 0-15.3 6.9-15.3 15.2v43.9c0 8.4 6.9 15.2 15.3 15.2H52v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8V-344h3.5v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8V-344H76c8.4 0 15.3-6.9 15.3-15.2v-38.1l14.3-14.3c3.4-3.7 2.2-6.8-3.1-6.8z" /><path style="fill:#fff" d="M79.5-405.1c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.8 2.9-2.8 1.6 0 2.9 1.3 2.9 2.8 0 1.6-1.3 2.9-2.9 2.9z" /><circle style="fill:#fff" cx="79.5" cy="-408" r="2.9" /><path style="fill:#9f5dff" d="M106.7-401.4c.4.7.2 1.6-.6 2.1l-15.8 9c-.7.4-1.6.2-2.1-.6-.4-.7-.2-1.6.6-2.1l15.8-9c.7-.4 1.6-.1 2.1.6zM7.6-401.1c-.4.8 0 1.7.7 2l16.4 7.8c.8.4 1.7 0 2-.7.4-.8 0-1.7-.7-2l-16.4-7.8c-.8-.4-1.7-.1-2 .7z" /><g style="opacity:.37"><path style="fill:url(#equatio-svg-renew-reminder_a)" d="M64.5-346.4c-64 0-118.3 6.2-140.9 14.9v16.8c22.6 8.7 76.8 14.9 140.9 14.9 83.2 0 150.6-10.4 150.6-23.3.1-12.9-67.4-23.3-150.6-23.3z" /></g><g style="opacity:.37"><path style="fill:url(#equatio-svg-renew-reminder_b)" d="M295.6-65.7c-58.9 0-108.7 3.7-129.5 8.9v10.1c20.7 5.2 70.6 8.9 129.5 8.9C372-37.8 434-44 434-51.7c0-7.8-62-14-138.4-14z" /></g><path style="fill:#aeca37" d="M258.6-214H311c7.5 0 12.9 6.8 12.9 14.3v97.9c0 7.5-5.4 14.3-12.9 14.3h-5.8v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-4.1v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-7c-7.5 0-13.7-6.8-13.7-14.3v-90.8l-15.5-15.9c-2.9-2.8-1.9-5.5 2.1-5.5z" /><path style="fill:#fff" d="M282-203c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.8 0-3.1-1.4-3.1-3.1z" /><circle style="fill:#fff" cx="285" cy="-203" r="3.1" /><path style="opacity:.43;fill:#fff" d="M273.6-154.3c1.3-.1 2.2-1.2 2.1-2.5-.1-1.3-1.2-2.2-2.5-2.1l-18.2 1.6c-1.3.1-2.2 1.2-2.1 2.5.1 1.3 1.2 2.2 2.5 2.1h.2l3.4 38.4c.4 4.9 4.8 8.5 9.7 8.1 4.9-.4 8.5-4.8 8.1-9.7l-3.4-38.4h.2z" /><path style="fill:#ebeff2" d="M268.8-105.3c-5.4.5-10.1-3.5-10.6-8.9l-3.4-37.6c-1.4-.2-2.6-1.3-2.8-2.8-.2-1.7 1.1-3.3 2.9-3.4l18.2-1.6c1.7-.2 3.3 1.1 3.4 2.9.1 1.5-.8 2.9-2.2 3.3l3.4 37.6c.5 5.2-3.5 10-8.9 10.5zm-13.7-51c-.8.1-1.3.8-1.3 1.5.1.8.8 1.3 1.5 1.3l1.1-.1 3.5 39.3c.4 4.4 4.3 7.7 8.7 7.3s7.7-4.3 7.3-8.7l-3.5-39.3 1.1-.1c.8-.1 1.3-.8 1.3-1.5-.1-.8-.8-1.3-1.5-1.3l-18.2 1.6z" /><path style="fill:#e94e68" d="m259.6-137.6 2.1 23.1c.3 3.5 3.4 6.1 7 5.8 3.5-.3 6.1-3.4 5.8-7l-2.1-23.1-12.8 1.2z" /><path style="fill:#aeca37" d="M294.7-129c0 1.1-.9 2.1-2.1 2.1h-24.9c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1h24.9c1.2.1 2.1 1 2.1 2.1z" /><path style="fill:#eaf0f4" d="M106.6-66c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-43.9 98-98 98z" /><path style="fill:#000623" d="M107.9-260.8c-53.3 0-96.8 43.3-96.8 96.6s43.4 96.6 96.8 96.6 96.8-43.3 96.8-96.6c-.1-53.3-43.5-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.8 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" /><path style="fill:#dfe5ea" d="M161.3-245.3c-.1-.1-.1-.1-.2-.1L51.8-82.8c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.1-44.9 18.2-105.9-26.7-136z" /><path style="fill:#515f70" d="M106.6-262c-54 0-98 44-98 98s44 98 98 98 98-44 98-98-43.9-98-98-98zm0 178.5c-44.5 0-80.5-36-80.5-80.5s36-80.5 80.5-80.5 80.5 36 80.5 80.5c.1 44.5-36 80.5-80.5 80.5z" /><path style="fill:#00b7ff" d="m74.1-113 5 2.9-8 13.8-5-2.9 8-13.8zM142.1-230.9l5.1 2.9-8 13.8-5-2.9 7.9-13.8zM53.1-136.1 56-131l-13.8 7.9-2.9-5 13.8-8zM171-204.2l3 5.1-13.8 8-3-5.1 13.8-8zM46.5-166.5v5.8H30.6v-5.8h15.9zM182.7-166.5v5.8h-15.9v-5.8h15.9zM56-196.2l-2.9 5.1-13.8-8 2.9-5.1 13.8 8zM174-128.1l-3 5-13.8-7.9 3-5.1 13.8 8zM79.1-217.1l-5 2.9-8-13.8 5-2.9 8 13.8zM147.2-99.2l-5.1 2.9-7.9-13.8 5-2.9 8 13.8zM109.6-223.7h-5.9v-16h5.9v16zM109.6-87.6h-5.9v-15.9h5.9v15.9z" /><path style="fill:#00417c" d="M104.7-169.4c0-.4.1-.7.3-.9h-.3L90-209.6c-.5-1.3-2-2-3.3-1.5-1.3.5-2 2-1.5 3.3l15.1 40.5c1.7 0 4.2-.3 4.4-2.1z" /><path style="fill:#00417c" d="M127.7-178.5c-1-1.6-3.1-2-4.7-1l-14.7 9.5c-1.1-.5-2.4-.6-3.6-.4 0 0-3.5 1.4-4.4 3.1s-1.2 3.7-.5 5.6c1.3 3.4 5 5.1 8.3 3.8 2.8-1 4.4-3.8 4.2-6.6l14.3-9.3c1.7-1 2.1-3.1 1.1-4.7z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="M222.3-117.4c-2.6.1-4.5 3.4-4.4 7.3L216.8-97l3.3.1 1.5-5.6v-.1c.5.2 1 .3 1.5.3 2.7-.1 4.6-3.6 4.4-7.8-.2-4.2-2.5-7.5-5.2-7.3zm.1 1.8c2-.1 3.8 2.4 3.9 5.5.2 3.1-1.3 5.8-3.3 5.9-2 .1-3.8-2.4-4-5.5-.1-3.1 1.4-5.8 3.4-5.9z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m219.4-96.9-2.9 34.8-2.2-31.7 3-3.2zM211.5-117.5c2.6.2 4.4 3.4 4.3 7.4l.9 13.1-3.3.1-1.5-5.6v-.1c-.5.2-1 .3-1.5.3-2.7-.2-4.6-3.7-4.3-7.9.3-4.3 2.7-7.5 5.4-7.3zm-.1 1.8c-2-.1-3.8 2.3-4 5.4-.2 3.1 1.2 5.8 3.2 5.9 2 .1 3.8-2.3 4-5.4.2-3.1-1.2-5.7-3.2-5.9z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m214.1-97 2.4 34.9 2.7-31.7-3-3.2z" /><ellipse transform="matrix(.06818 -.9977 .9977 .06818 291.917 132.18)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" cx="216.7" cy="-90.2" rx=".9" ry=".8" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m215.7-80.1 13.5-50.6c.1-.5.7-.8 1.2-.7l7.3 1.9c.5.1.8.7.7 1.2l-13.6 50.6c-.1.5-.7.8-1.2.7l-7.3-1.9c-.4-.1-.7-.6-.6-1.2z" /><path transform="rotate(-75.167 218.038 -80.378)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M217.8-82.5h.4v4.3h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m216.1-81.6.1-.4 2 .5-.1.4zM216.4-82.5l.1-.4 2 .5-.1.4zM216.6-83.4l.1-.4 2 .5-.1.4zM216.8-84.3l.2-.4 2 .5-.2.4zM217.1-85.2l.1-.4 4.2 1.1-.1.4zM217.3-86.1l.1-.4 2 .6-.1.4zM217.6-87l.1-.4 2 .6-.1.4zM217.8-87.9l.1-.4 2 .6-.1.4zM218-88.7l.1-.5 2.1.6-.2.4zM218.3-89.6l.1-.4 4.2 1.1-.1.4zM218.5-90.5l.1-.4 2 .5-.1.4zM218.8-91.4l.1-.4 2 .5-.1.4zM219-92.3l.1-.4 2 .5-.1.4zM219.2-93.2l.1-.4 2 .5-.1.4zM219.5-94.1l.1-.4 4.2 1.1-.1.4z" /><path transform="rotate(-74.942 220.76 -94.918)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M220.6-96h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m219.9-95.9.2-.4 2 .6-.1.4zM220.2-96.8l.1-.4 2 .6-.1.4zM220.4-97.7l.1-.4 2 .6-.1.4zM220.7-98.5l.1-.5 4.2 1.2-.1.4z" /><path transform="rotate(-74.966 221.954 -99.371)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M221.7-100.4h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m221.1-100.3.1-.4 2.1.5-.2.4zM221.4-101.2l.1-.4 2 .5-.1.4zM221.6-102.1l.1-.4 2 .5-.1.4zM221.9-103l.1-.4 4.2 1.1-.2.4z" /><path transform="rotate(-74.971 223.147 -103.817)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M222.9-104.9h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m222.3-104.8.1-.4 2 .5-.1.5zM222.6-105.7l.1-.4 2 .6-.1.4zM222.8-106.6l.1-.4 2 .6-.1.4zM223-107.4l.2-.5 4.2 1.2-.2.4z" /><path transform="rotate(-74.966 224.34 -108.277)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M224.1-109.3h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m223.5-109.2.1-.4 2 .5-.1.4zM223.8-110.1l.1-.4 2 .5-.1.4z" /><path transform="rotate(-75.173 225.057 -110.94)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M224.8-112h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m224.2-111.9.2-.4 4.1 1.1-.1.4zM224.5-112.8l.1-.4 2 .5-.1.4zM224.7-113.7l.1-.4 2 .5-.1.5zM225-114.6l.1-.4 2 .6-.1.4z" /><path transform="rotate(-74.935 226.262 -115.406)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M226-116.4h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m225.4-116.4.1-.4 4.2 1.2-.1.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m225.4-116.4.1-.4 4.2 1.2-.1.4z" /><path transform="rotate(-75.202 226.737 -117.181)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M226.5-118.2h.4v2.1h-.4z" /><path transform="rotate(-74.966 226.965 -118.073)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M226.8-119.1h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m226.2-119 .1-.4 2 .5-.1.4z" /><path transform="rotate(-74.935 227.456 -119.86)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M227.2-120.9h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m226.6-120.8.1-.4 4.2 1.1-.1.4z" /><path transform="rotate(-75.167 227.92 -121.637)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M227.7-122.7h.4v2.1h-.4z" /><path transform="rotate(-74.942 228.157 -122.526)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M227.9-123.6h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m227.3-123.5.2-.4 2 .5-.2.5z" /><path transform="rotate(-74.942 228.635 -124.309)" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="M228.4-125.3h.4v2.1h-.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" d="m227.8-125.3.1-.4 4.2 1.2-.1.4zM228.1-126.1l.1-.5 2 .6-.1.4zM228.3-127l.1-.5 2 .6-.1.4zM228.5-127.9l.1-.4 2.1.5-.2.4zM228.8-128.8l.1-.4 2 .5-.1.4zM229-129.7l.1-.4 4.2 1.1-.1.4z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m201.3-101.9.1-7.1 3.6 6.1-.8.6-1.9.5z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m202.3-101.7 6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.2-.1.6.3.7.8z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="M203-102.9c.5-.1 1 .2 1.2.7l6.4 23.8-1.9.5-6.4-23.8c-.1-.5.2-1.1.7-1.2z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m205.1-102.5 6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.3 0 .6.3.7.8zM201.4-106.8v-2.2l1 1.9zM209-107l1.5-6.9 2.3 6.7-.9.4-2 .1z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m209.9-106.6 1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.3.6.9z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="M210.8-107.7c.5 0 1 .4 1 .9l1.4 24.6-1.9.1-1.4-24.6c0-.5.4-.9.9-1z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="m212.8-106.8 1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.4.6.9zM210.1-111.9l.4-2 .7 2zM226.3-55.3h3.9v-31.9l-3.9-1.1z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#00417c" d="M203.1-88.8h23.2v33.5h-23.2z" /><g style="opacity:.37"><path style="fill:url(#equatio-svg-renew-reminder_c)" d="M54.4 205.9c-39.4 0-73 3-86.4 7.2v8.2c13.4 4.2 47 7.2 86.4 7.2 51.2 0 92.6-5.1 92.6-11.3.1-6.2-41.4-11.3-92.6-11.3z" /></g><path style="fill:#fd3269" d="M80.6 168c0 7.3-5.9 13.3-13.3 13.3H42.5c-7.3 0-13.3-5.9-13.3-13.3V72c0-7.3 5.9-13.3 13.3-13.3h24.7c7.3 0 13.3 6 13.3 13.3v96z" /><path style="fill:#fd3269" d="M60.3 92.2c0 3.9 2.3 4.8 5 2.1l30.5-30.5c2.8-2.8 1.8-5-2.1-5H67.4c-3.9 0-7.1 3.2-7.1 7.1v26.3z" /><path style="fill:#53a2da" d="M75.3 46.6c-.9 1.9-5.2 2.6-2.9 5.9-2.4-2.9-3.4-10.8.5-13.5 5-3.5 10.7 5.9 2.4 7.6zM39.2 46.6c.9 1.9 5.2 2.6 2.9 5.9 2.3-2.9 3.3-10.9-.5-13.5-5-3.5-10.7 5.9-2.4 7.6z" /><path style="fill:#fd3269" d="M51.1 215.1v-41.2M51.1 217c-1.1 0-2-.9-2-2v-41.2c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2zM58.7 215.1v-37.9M58.7 217c-1.1 0-2-.9-2-2v-37.9c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2z" /><path style="opacity:.4;fill:#221e20" d="M60.3 97.3s4.8 2.1 8.4.6c0 0-6.8 4.4-8.4-.6z" /><path style="fill:#841627" d="M47.9 98.6S51.5 88.5 62.6 87c11-1.5 9.1 9.2 9.1 9.2l-23.8 2.7" /><path style="fill:#fdf6fa" d="M62.6 87c-4.6.6-8 2.8-10.3 5 0 .1-1 5.2 4.1 4.2l13.1-1.7s1.3-.9 2.1-2.1c-.5-2.9-2.5-6.3-9-5.4z" /><path style="fill:#fdf6fa" d="M52.3 92.1c-.3.3-.5.5-.7.8l.7-.8z" /><path style="fill:#ce544c" d="M54.6 98s6.5-9.9 14.9-2.1c0 0 2.9 2.7-3.6 3-6.5.2-5.5-1.7-5.5-1.7l-4.6.8" /><path style="opacity:.1;fill:#221e20" d="M59.4 94.1s6.2-.6 7.4 1.6c1.1 2.2-.8-2.1-7.4-1.5" /><path style="fill:none;stroke:#fff;stroke-width:1.8549;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M68.8 70.8s-6-2.7-8.9 2.5" /><path style="fill:#fff" d="m71.2 77.8 18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L71.2 76c-.5.5-.5 1.3 0 1.8z" /><path style="fill:#fd3269" d="m94.8 95-15.1 26.7c-.4.6-1.1.8-1.8.5l-3.1-1.8c-.6-.4-.8-1.1-.5-1.8l15.1-26.7c.4-.6 1.1-.8 1.8-.5l3.1 1.8c.6.4.8 1.2.5 1.8z" /><path style="fill:#fd3269" d="m72.1 77.8 18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L72.1 76c-.5.5-.5 1.3 0 1.8z" /><path style="fill:#00417c" d="M103.8 198.3c2 5.7 8.5 10.5 13.7 11.6.7.1 1.3 1.2 2 1.3l.3 4.7c0 .6.5.9 1.1.9h25.6c.6 0 1.1-.2 1.1-.9l2.2-40.2c0-.6-.5-1.1-1.1-1.1h-30.1c-.6 0-1.1.6-1.1 1.2l.3 4.7c-1.4-.6-2.9-.9-4.4-.9-1.1 0-2.1.2-3.2.5-6.2 2.4-9.1 10.5-6.4 18.2zm4.3-9.5c.4-1.2 1.4-3.2 3.6-4 .5-.2 1.1-.3 1.6-.3 2.8 0 3.8 2.9 5 6.4l.8 13.9-.1.1c-3.4 0-9.2-3.8-10.8-8.2-.9-2.6-1-5.5-.1-7.9z" /><path style="fill:#fd3269" d="m37.1 111-24.9 26.1c-.5.5-1.3.5-1.8.1l-2.6-2.4c-.5-.5-.5-1.3-.1-1.8l24.9-26.1c.5-.5 1.3-.5 1.8-.1l2.6 2.4c.6.5.6 1.3.1 1.8z" /><path style="fill:#eaf0f4" d="M236 203c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-44 98-98 98z" /><path style="fill:#000623" d="M237.2 8.2c-53.4 0-96.8 43.4-96.8 96.6 0 53.3 43.4 96.6 96.8 96.6S334 158 334 104.8c0-53.3-43.4-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.9 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" /><path style="fill:#dfe5ea" d="M290.7 23.7c-.1-.1-.1-.1-.2-.1L181.1 186.2c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.2-44.9 18.2-105.9-26.6-136z" /><path style="fill:#515f70" d="M236 7c-54 0-98 44-98 98s44 98 98 98 98-44 98-98c0-54.1-44-98-98-98zm0 178.5c-44.5 0-80.5-36.1-80.5-80.5 0-44.5 36.1-80.5 80.5-80.5 44.5 0 80.5 36.1 80.5 80.5 0 44.5-36 80.5-80.5 80.5z" /><path style="fill:#00b7ff" d="m203.4 156 5 2.9-7.9 13.8-5.1-2.9 8-13.8zM271.5 38l5 3-7.9 13.7-5.1-2.9 8-13.8zM182.4 132.9l3 5.1-13.8 7.9-3-5 13.8-8zM300.4 64.8l2.9 5.1-13.8 7.9-2.9-5 13.8-8zM175.8 102.5v5.8h-15.9v-5.8h15.9zM312 102.5v5.8h-15.9v-5.8H312zM185.4 72.8l-3 5-13.8-7.9 3-5.1 13.8 8zM303.3 140.9l-2.9 5-13.8-7.9 2.9-5.1 13.8 8zM208.4 51.8l-5 2.9-8-13.7 5.1-3 7.9 13.8zM276.5 169.8l-5 2.9-8-13.8 5.1-2.9 7.9 13.8zM238.9 45.2h-5.8V29.3h5.8v15.9zM238.9 181.4h-5.8v-15.9h5.8v15.9z" /><circle style="fill:#00417c" cx="236" cy="106.9" r="7" /><path style="fill:#00417c" d="M236.3 123.5h-.6c-1.3 0-2.4-1.1-2.4-2.4V55c0-1.3 1.1-2.4 2.4-2.4h.6c1.3 0 2.4 1.1 2.4 2.4v66.1c0 1.3-1.1 2.4-2.4 2.4z" /><g style="opacity:.37"><path style="fill:url(#equatio-svg-renew-reminder_d)" d="M56.6 476.3c-43.9 0-81.2 3.9-96.6 9.5v10.7c15.5 5.6 52.7 9.5 96.6 9.5 57.1 0 103.4-6.6 103.4-14.9 0-8.2-46.3-14.8-103.4-14.8z" /></g><path style="fill:#fd3269" d="M94.8 335.7H44.5c-7.2 0-13.1 5.8-13.1 13.1v94.3c0 7.2 5.8 13.1 13.1 13.1H51v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2h3.6v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2h6.5c7.2 0 13.1-5.8 13.1-13.1v-87.4l15-15c2.8-2.7 1.9-5-2-5z" /><path style="fill:#fff" d="M69.4 348.6c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3s-1.4 3-3 3z" /><circle style="fill:#fff" cx="69.4" cy="345.6" r="3" /><path style="fill:#fd3269" d="M108.2 351 63 396.1c-1.2 1.2-3.1 1.2-4.2 0l-.7-.7c-1.2-1.2-1.2-3.1 0-4.2l45.2-45.2c1.2-1.2 3.1-1.2 4.2 0l.7.7c1.2 1.2 1.2 3.1 0 4.3z" /><path style="fill:#fd3269" d="m9.2 354.5 45.2 45.2c1.2 1.2 3.1 1.2 4.2 0l.7-.7c1.2-1.2 1.2-3.1 0-4.2l-45.2-45.2c-1.2-1.2-3.1-1.2-4.2 0l-.7.7c-1.2 1.1-1.2 3 0 4.2z" /><path style="fill:#515f70" d="m190.9 356.4 77.3-51.5c.8-.5 1.6-1 2.5-1.4l44.6-20.3c4.8-2.2 7.3.1 5.4 5.1L303.3 335c-.5 1.5-1.3 2.9-2.2 4.1l-52.7 73.5c-.4.5-.8 1-1.2 1.4l-42.7 42.7c-4.4 4.4-11.6 4.4-16 0l-40.4-40.4c-4.4-4.4-4.4-11.4-.1-15.9l41-42.4c.6-.6 1.2-1.1 1.9-1.6z" /><path style="fill:#00b7ff" d="M188.5 357.9c-27.8-.2-50.2 8-65 33.2 6.6 2.8 18 6 25 8.6 1.3.5 26.3-27.9 40-41.8zM247.5 413.9c-13.8 13.6-43 41.4-42.5 43 2.5 7 6.6 15.9 9.3 22.3 25.7-14.8 33.4-37.4 33.2-65.3z" /><path style="fill:#a6ce3c" d="M278 337.5c-.1-6.8-5.1-11.4-11.9-11.1-6.2.2-11.2 5.2-11.2 11.3 0 6.2 5.6 11.8 11.8 11.8 6.5-.1 11.4-5.3 11.3-12zM236 379.8c6.9-.1 11.3-4.8 11.2-11.7-.1-7.1-4.5-11.2-11.7-11-6.8.2-11.3 5.1-11 12 .3 6.2 5.2 10.8 11.5 10.7zM216.9 399.3c.2-6.7-4.6-11.8-11.4-11.9-6.8-.1-11.7 4.8-11.7 11.5 0 6.4 4.7 11.2 11 11.5 6.8.4 11.9-4.3 12.1-11.1z" /><path style="fill:#00417c" d="M177.6 460.5c-3.3 2.5-6.8 5.5-10.6 8.1-3.1 2.2-6.3 4.9-9.8 5.9-9.9 2.8-19.9 4.9-29.9 7.1-4.3.9-7.5-.4-6.3-5.6 3.5-15.5 2.8-32.6 17.1-44.1 2-1.6 2.5-5.3 3.7-8.3 12.2 12.7 24.2 25 35.8 36.9zm-38.3 6.1c12.8.2 23.9-5.8 21.7-10.5-2.8-5.8-8.4-11.4-14.2-14.3-4.6-2.3-10.6 8.1-10.5 18.6-.1 2.3 2.2 4.7 3 6.2z" /><path style="fill:#fff" d="M278 337.5c.1 6.7-4.8 11.9-11.3 11.9-6.3 0-11.8-5.5-11.8-11.8 0-6 5-11.1 11.2-11.3 6.8-.2 11.8 4.4 11.9 11.2zM236 379.8c-6.3.1-11.3-4.5-11.5-10.8-.3-6.9 4.2-11.8 11-12 7.3-.2 11.6 3.9 11.7 11 .2 7.1-4.3 11.7-11.2 11.8zM216.9 399.3c-.2 6.7-5.3 11.5-12 11.2-6.3-.3-11-5.2-11-11.5 0-6.7 4.9-11.6 11.7-11.5 6.7.1 11.5 5.1 11.3 11.8z" /><path transform="rotate(-15.729 212.668 -509.518)" style="fill:#00417c" d="M182.9-510.9h59.5v2.7h-59.5z" /><path transform="rotate(-15.729 216.523 -495.831)" style="fill:#00417c" d="M186.8-497.2h59.5v2.7h-59.5z" /><path transform="rotate(-15.729 220.377 -482.144)" style="fill:#00417c" d="M190.6-483.5h59.5v2.7h-59.5z" /><circle transform="rotate(-15.729 196.877 -504.864)" style="fill:#00417c" cx="196.9" cy="-504.9" r="5" /><path style="fill:#e6e6e6" d="M197.8-509.8c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.8-2-3.1-3.8-3.5z" /><circle transform="rotate(-15.729 206.448 -507.559)" style="fill:#00417c" cx="206.5" cy="-507.6" r="5" /><path style="fill:#e6e6e6" d="M207.4-512.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" /><circle transform="rotate(-15.729 221.813 -497.024)" style="fill:#00417c" cx="221.8" cy="-497.1" r="5" /><path style="fill:#e6e6e6" d="M222.8-501.9c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" /><circle transform="rotate(-15.729 210.523 -479.192)" style="fill:#00417c" cx="210.5" cy="-479.2" r="5" /><path style="fill:#e6e6e6" d="M211.5-484.1c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" /><circle transform="rotate(-15.729 234.417 -500.574)" style="fill:#00417c" cx="234.4" cy="-500.6" r="5" /><path style="fill:#e6e6e6" d="M235.4-505.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" /><circle transform="rotate(-15.729 221.375 -482.248)" style="fill:#00417c" cx="221.4" cy="-482.3" r="5" /><path style="fill:#e6e6e6" d="M222.3-487.2c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.8-2-3.1-3.8-3.5z" /><circle transform="rotate(-15.729 224.412 -512.618)" style="fill:#00417c" cx="224.4" cy="-512.7" r="5" /><path style="fill:#e6e6e6" d="M225.4-517.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" /><path style="fill:#00417c" d="M196-459c-1.5.4-2.9-.5-3.3-1.9l-13.6-48.4c-.4-1.5.4-3 1.8-3.4 1.5-.4 2.9.5 3.3 1.9l13.6 48.4c.4 1.5-.3 3-1.8 3.4z" /><path style="fill:#00417c" d="M180.9-512.7 196-459c1.7-.5 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.4-1.6-2.4-3.3-1.9zM252.9-475c-1.5.4-3.3-.3-3.7-1.8l-13.6-48.4c-.4-1.5.8-3.1 2.3-3.5 1.5-.4 3.3.3 3.7 1.8l13.6 48.4c.4 1.5-.8 3.1-2.3 3.5z" /><path style="fill:#00417c" d="m238.2-528.8 15.1 53.7c.9-.2 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.5-2.4-2.2-3.3-1.9z" /><path style="fill:#00417c" d="m256-474.2-62.1 17.5c-2.2.6-4.4-.5-5-2.7-.6-2.2.7-4.3 2.9-5l62.1-17.5c2.2-.6 4.4.5 5 2.7.6 2.2-.7 4.4-2.9 5z" /><path style="fill:#00417c" d="M188.7-459.9c.7 2.6 3 3.8 5.2 3.2l62.1-17.5c2.2-.6 3.5-2.8 2.8-5.4l-70.1 19.7z" /><path style="fill:#515f70" d="M116.3-424H232v98.4H116.3z" /><path style="fill:#3b4651" d="m205-368.3 6.8 1.8-1.8 6.8 6.7 1.8-1.8 6.8 55.1-31.8-17.3-30.1-50.8 29.3-1.9 6.8 6.8 1.8z" /><path style="fill:#3b4651" d="M231.9-424.1h-29.4l29.4 51.2z" /><path transform="rotate(-30 248.031 -390.877)" style="fill:#515f70" d="M227.8-454.6h40.5v127.3h-40.5z" /><path style="fill:#00b7ff" d="m207.9-370 6.7 1.8-1.8 6.8 6.8 1.8-1.8 6.8 55.1-31.9-17.4-30-50.8 29.3-1.8 6.8 6.8 1.8zM309.1-435.9c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-31.3 5-35.4 20.5-4.1 15.4 17.4 47 17.4 47s34.3-16.7 38.5-32.1zm-38.7-10.4c4.1-15.4 15.6-15.1 15.6-15.1s2.6 3.4-1.5 18.9c-4.1 15.4-14.6 26.9-14.6 26.9s-3.7-15.3.5-30.7z" /><path style="fill:#00b7ff" d="M338-385.8c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-47 17.4-47 17.4s16.6 34.4 32 38.5c15.5 4.1 31.4-5.1 35.5-20.5zm-30.8 3.3c-15.4-4.1-26.9-14.6-26.9-14.6s15.2-3.6 30.7.5c15.4 4.1 15.1 15.6 15.1 15.6s-3.5 2.6-18.9-1.5z" /><circle transform="rotate(-30 265.58 -401.035)" style="fill:#07a1d1" cx="265.6" cy="-401" r="17.4" /><path style="fill:#00b7ff" d="M151.5-432.8h-10.8c-.5 0-1.1-.1-1.4-.5l-24-24c-.4-.4-.6-.9-.6-1.4v-10.8c0-.5.2-1.1.6-1.4l24-23.9c.4-.4.9-.5 1.4-.5h10.8c.5 0 1.1.1 1.4.5l24.1 24c.4.4.7.9.7 1.4v10.8c0 .5-.3 1.1-.7 1.4l-24 23.9c-.4.3-1 .5-1.5.5zm-10-4h9.1l22.6-22.8v-9.1l-22.6-22.8h-9.1l-22.9 22.8v9.1l22.9 22.8zm34-22z" /><path style="fill:#00b7ff" d="M146.7-447.8c-.2 0-.4-.1-.5-.2l-15.3-15.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z" /><path style="fill:#00b7ff" d="M142.1-442.6c-.4 0-.8-.2-1.1-.5l-23.5-23.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l22.4 22.4 2.9-2.9c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-4 4c-.2.4-.6.5-1.1.5z" /><path style="fill:#00b7ff" d="M145.8-448.3c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.1-.4.2-.6.2z" /><path style="fill:#00b7ff" d="M142.1-434.8c-.4 0-.8-.2-1.1-.5-.6-.6-.6-1.6 0-2.2l22.4-22.4-2.9-2.9c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l4 4c.6.6.6 1.6 0 2.2l-23.5 23.5c-.3.4-.7.5-1.1.5z" /><path style="fill:#00b7ff" d="M160.8-463.3c-.2 0-.4-.1-.5-.2L145-478.8c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.2-.4.2-.6.2z" /><path style="fill:#00b7ff" d="M173.6-458.7c-.4 0-.8-.2-1.1-.5l-22.4-22.4-2.9 2.9c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2l4-4c.6-.6 1.6-.6 2.2 0l23.5 23.5c.6.6.6 1.6 0 2.2-.3.3-.7.5-1.1.5z" /><path style="fill:#00b7ff" d="M130.7-462.7c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.1-.4.2-.6.2z" /><path style="fill:#00b7ff" d="M130.3-462.5c-.4 0-.8-.2-1.1-.5l-4-4c-.6-.6-.6-1.6 0-2.2l23.5-23.5c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-22.4 22.4 2.9 2.9c.6.6.6 1.6 0 2.2-.3.3-.7.5-1.1.5zM176-391.6l-5.1 5.1-5.1-5.1-5.2 5.1-5.1-5.1v65.9h36v-60.8l-5.2-5.1-5.1 5.1z" /></symbol><radialGradient id="equatio-svg-renew-reminder_a" cx="839.354" cy="84519.219" r="453.189" gradientTransform="matrix(.2376 0 0 .02555 -135.034 -2482.942)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1d1e1c" /><stop offset=".146" style="stop-color:#1d1e1c;stop-opacity:.8541" /><stop offset="1" style="stop-color:#1d1e1c;stop-opacity:0" /></radialGradient><radialGradient id="equatio-svg-renew-reminder_b" cx="1159.533" cy="95136.406" r="271.258" gradientTransform="matrix(.3648 0 0 .02555 -127.583 -2482.942)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1d1e1c" /><stop offset=".146" style="stop-color:#1d1e1c;stop-opacity:.8541" /><stop offset="1" style="stop-color:#1d1e1c;stop-opacity:0" /></radialGradient><radialGradient id="equatio-svg-renew-reminder_c" cx="614.705" cy="51718.18" r="108.793" gradientTransform="matrix(.6084 0 0 .05166 -319.539 -2454.731)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1d1e1c" /><stop offset=".074" style="stop-color:#151514;stop-opacity:.9256" /><stop offset=".239" style="stop-color:#090909;stop-opacity:.7612" /><stop offset=".462" style="stop-color:#020202;stop-opacity:.5379" /><stop offset="1" style="stop-color:#000;stop-opacity:0" /></radialGradient><radialGradient id="equatio-svg-renew-reminder_d" cx="332.884" cy="116380.898" r="288.534" gradientTransform="matrix(.256 0 0 .02555 -28.69 -2482.942)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1d1e1c" /><stop offset=".146" style="stop-color:#1d1e1c;stop-opacity:.8541" /><stop offset="1" style="stop-color:#1d1e1c;stop-opacity:0" /></radialGradient><symbol viewBox="0 0 24 24" id="equatio-svg-smart-contextual-align-left"><path d="M24 11.5v1a.5.5 0 0 1-.5.5H21v1.231a.5.5 0 0 1-.8.4L17.277 12.4a.5.5 0 0 1 0-.794L20.2 9.372a.5.5 0 0 1 .8.4V11h2.5a.5.5 0 0 1 .5.5ZM14 0h-1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM1 4h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm8 3H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-8 9h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm8 3H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Z" fill="#494949" opacity=".502" /></symbol><symbol viewBox="0 0 1 28" id="equatio-svg-smart-contextual-separator"><path d="M.5 0v28" fill="none" stroke="rgba(0,0,0,0.12)" /></symbol><symbol viewBox="0 0 14.927 16.566" id="equatio-svg-solve"><g data-name="noun-lightbulb-3194358 (1)"><path data-name="Path 3815" d="M7.673 2.912a4.561 4.561 0 0 0-3.8 7.376 7.172 7.172 0 0 1 1.186 2.11l.017.052v1.832a.485.485 0 0 0 .4.471 2 2 0 0 0 3.976-.021.471.471 0 0 0 .4-.471v-1.81l.017-.052a6.886 6.886 0 0 1 1.186-2.093 4.516 4.516 0 0 0 .977-3.017 4.622 4.622 0 0 0-4.359-4.377Zm1.222 9.731v1.151h-2.86v-1.151Zm-1.43 2.964a1.049 1.049 0 0 1-1.03-.875h2.06a1.033 1.033 0 0 1-1.031.875Zm2.825-5.912a8.2 8.2 0 0 0-1.186 1.988H5.825a8.544 8.544 0 0 0-1.186-1.988 3.572 3.572 0 0 1-.767-2.232 3.628 3.628 0 0 1 1.116-2.616 3.569 3.569 0 0 1 2.668-.994 3.639 3.639 0 0 1 3.439 3.436 3.713 3.713 0 0 1-.806 2.407Z" /><path data-name="Path 3816" d="M7.464 1.831a.469.469 0 0 0 .471-.471V.471a.471.471 0 1 0-.942 0v.889a.469.469 0 0 0 .471.471Z" /><path data-name="Path 3817" d="M3.993 2.423a.47.47 0 0 0 .419.244.436.436 0 0 0 .244-.07.466.466 0 0 0 .174-.645l-.437-.767a.473.473 0 0 0-.82.471Z" /><path data-name="Path 3818" d="m2.406 3.993-.767-.436a.473.473 0 1 0-.471.82l.767.436a.568.568 0 0 0 .244.07.472.472 0 0 0 .227-.889Z" /><path data-name="Path 3819" d="M1.831 7.464a.469.469 0 0 0-.471-.471H.471a.471.471 0 1 0 0 .942h.889a.458.458 0 0 0 .471-.471Z" /><path data-name="Path 3820" d="m1.936 10.114-.767.436a.478.478 0 0 0 .244.889.436.436 0 0 0 .244-.07l.767-.437a.466.466 0 0 0 .174-.645.486.486 0 0 0-.662-.173Z" /><path data-name="Path 3821" d="m13.758 10.55-.767-.436a.473.473 0 0 0-.471.82l.767.436a.568.568 0 0 0 .244.07.49.49 0 0 0 .419-.244.505.505 0 0 0-.192-.646Z" /><path data-name="Path 3822" d="M14.456 6.993h-.889a.471.471 0 1 0 0 .942h.889a.471.471 0 0 0 0-.942Z" /><path data-name="Path 3823" d="M12.747 4.882a.436.436 0 0 0 .244-.07l.767-.436a.473.473 0 0 0-.471-.82l-.767.436a.466.466 0 0 0-.174.645.431.431 0 0 0 .401.245Z" /><path data-name="Path 3824" d="M10.271 2.598a.568.568 0 0 0 .244.07.49.49 0 0 0 .419-.244l.436-.767a.473.473 0 0 0-.82-.471l-.436.767a.464.464 0 0 0 .157.645Z" /></g></symbol><symbol viewBox="0 0 4.8 19.5" id="equatio-svg-speech-indicator"><style>@keyframes equatio-speech-indicator-fade-1{0%{opacity:0}40%,to{opacity:1}}@keyframes equatio-speech-indicator-fade-2{0%{opacity:0}80%,to{opacity:1}}@keyframes equatio-speech-indicator-fade-3{0%{opacity:0}95%,to{opacity:1}}</style><circle cx="2.4" cy="2.4" r="2.4" fill="#90D850" style="animation:equatio-speech-indicator-fade-1 1s infinite alternate" /><circle cx="2.4" cy="10.7" r="1.7" fill="#90D850" style="animation:equatio-speech-indicator-fade-2 1s infinite alternate" /><circle cx="2.4" cy="18.3" r="1.2" fill="#90D850" style="animation:equatio-speech-indicator-fade-3 1s infinite alternate" /></symbol><symbol viewBox="0 0 36 36" id="equatio-svg-speech-pause"><circle cx="18" cy="18" r="18" fill="currentColor" /><path style="fill:#f7bcbc" d="M11.1 8.9h5.1v17.5h-5.1V8.9zm8.6 0h5.1v17.5h-5.1V8.9z" /></symbol><symbol viewBox="0 0 36 36" id="equatio-svg-speech-start"><circle cx="18" cy="18" r="18" fill="currentColor" /><circle style="fill:#d11515" cx="18" cy="18" r="7.8" /></symbol><symbol viewBox="0 0 38 36.24" id="equatio-svg-texthelp-ai"><defs></defs><g clip-path="url(#equatio-svg-texthelp-ai_a)" data-name="Group 69"><path fill="#4a4a4a" d="M30.208 17.806v-4.514l4.063-3.956c.909-.855.588-1.6-.7-1.6H12.456a4.7 4.7 0 0 0-4.651 4.705v11.33a4.655 4.655 0 0 0 4.651 4.654h13.1a4.655 4.655 0 0 0 4.651-4.652v-5.967Z" data-name="Path 2896" /><path fill="#4a4a4a" d="M13.507 5.5V1.465a1.465 1.465 0 1 0-2.929 0V5.5Z" data-name="Path 2897" /><path fill="#4a4a4a" d="M22.804 5.5V1.465a1.465 1.465 0 0 0-2.929 0V5.5Z" data-name="Path 2898" /><path fill="#4a4a4a" d="M18.155 5.5V1.465a1.465 1.465 0 0 0-2.929 0V5.5Z" data-name="Path 2899" /><path fill="#4a4a4a" d="M27.453 5.5V1.465a1.465 1.465 0 0 0-2.929 0V5.5Z" data-name="Path 2900" /><path fill="#4a4a4a" d="M5.5 16.601H1.465a1.465 1.465 0 1 0 0 2.929H5.5Z" data-name="Path 2901" /><path fill="#4a4a4a" d="M5.5 21.249H1.465a1.465 1.465 0 0 0 0 2.929H5.5Z" data-name="Path 2902" /><path fill="#4a4a4a" d="M5.5 11.952H1.465a1.465 1.465 0 0 0 0 2.929H5.5Z" data-name="Path 2903" /><path fill="#4a4a4a" d="M32.496 19.981h4.039a1.465 1.465 0 1 0 0-2.929h-4.039Z" data-name="Path 2904" /><path fill="#4a4a4a" d="M32.496 24.63h4.039a1.465 1.465 0 1 0 0-2.929h-4.039Z" data-name="Path 2905" /><path fill="#4a4a4a" d="M24.524 30.736v4.039a1.465 1.465 0 1 0 2.929 0v-4.039Z" data-name="Path 2906" /><path fill="#4a4a4a" d="M15.226 30.736v4.039a1.465 1.465 0 1 0 2.929 0v-4.039Z" data-name="Path 2907" /><path fill="#4a4a4a" d="M19.875 30.736v4.039a1.465 1.465 0 1 0 2.929 0v-4.039Z" data-name="Path 2908" /><path fill="#4a4a4a" d="M10.578 30.736v4.039a1.465 1.465 0 1 0 2.929 0v-4.039Z" data-name="Path 2909" /><path fill="#fff" d="m19.585 23.877-.538-1.414h-4.581l-.538 1.445a5.05 5.05 0 0 1-.538 1.141.856.856 0 0 1-.73.3 1.07 1.07 0 0 1-.761-.315.964.964 0 0 1-.331-.715 1.589 1.589 0 0 1 .077-.477q.077-.246.254-.684l2.882-7.318.3-.757a3.827 3.827 0 0 1 .369-.734 1.5 1.5 0 0 1 .515-.473 1.578 1.578 0 0 1 .788-.181 1.6 1.6 0 0 1 .8.181 1.532 1.532 0 0 1 .515.465 3.253 3.253 0 0 1 .331.611q.134.327.342.872l2.944 7.272a3.658 3.658 0 0 1 .346 1.207 1 1 0 0 1-.327.719 1.074 1.074 0 0 1-.788.327 1.022 1.022 0 0 1-.461-.1.945.945 0 0 1-.323-.261 2.4 2.4 0 0 1-.281-.507q-.15-.342-.258-.6m-4.52-3.128h3.357l-1.7-4.65Z" data-name="Path 2910" /><path fill="#fff" d="M20.908 25.533a1.21 1.21 0 0 1-.545-.116 1.136 1.136 0 0 1-.386-.313 2.558 2.558 0 0 1-.305-.548q-.151-.344-.259-.607l-.492-1.293h-4.324l-.492 1.323a5.159 5.159 0 0 1-.564 1.189 1.035 1.035 0 0 1-.88.371 1.257 1.257 0 0 1-.89-.367 1.15 1.15 0 0 1-.389-.851 1.791 1.791 0 0 1 .085-.533c.052-.168.139-.4.259-.7l3.178-8.073a4.043 4.043 0 0 1 .388-.77 1.692 1.692 0 0 1 .578-.531 1.771 1.771 0 0 1 .88-.205 1.789 1.789 0 0 1 .888.2 1.726 1.726 0 0 1 .577.522 3.468 3.468 0 0 1 .35.646c.09.219.206.515.344.877l2.943 7.268a3.762 3.762 0 0 1 .359 1.277 1.183 1.183 0 0 1-.382.851 1.26 1.26 0 0 1-.921.382m-1.148-1.725q.107.259.255.6a2.252 2.252 0 0 0 .256.466.756.756 0 0 0 .26.21.844.844 0 0 0 .377.076.885.885 0 0 0 .655-.272.812.812 0 0 0 .272-.586 3.369 3.369 0 0 0-.331-1.135l-2.945-7.273a35.408 35.408 0 0 0-.342-.871 3.086 3.086 0 0 0-.311-.576 1.353 1.353 0 0 0-.453-.408 1.421 1.421 0 0 0-.7-.156 1.4 1.4 0 0 0-.7.156 1.317 1.317 0 0 0-.452.414 3.669 3.669 0 0 0-.35.7l-.3.757-2.883 7.318c-.116.287-.2.513-.249.671a1.416 1.416 0 0 0-.068.421.778.778 0 0 0 .272.579.882.882 0 0 0 .632.263.677.677 0 0 0 .58-.221 4.949 4.949 0 0 0 .512-1.094l.583-1.567h4.841Zm-1.059-2.872h-3.9l1.933-5.389Zm-3.372-.37h2.832l-1.429-3.912Z" data-name="Path 2911" /><path fill="#fff" d="M25.424 12.837a1.108 1.108 0 0 1-.749-.269 1.044 1.044 0 0 1 .008-1.5 1.072 1.072 0 0 1 .742-.288 1.1 1.1 0 0 1 .723.261.933.933 0 0 1 .315.761.96.96 0 0 1-.307.757 1.063 1.063 0 0 1-.73.273m1.038 5.167v6.07a1.354 1.354 0 0 1-.3.953.993.993 0 0 1-.761.323.948.948 0 0 1-.749-.331 1.4 1.4 0 0 1-.288-.945v-6a1.348 1.348 0 0 1 .288-.938.969.969 0 0 1 .749-.315 1 1 0 0 1 .761.315 1.221 1.221 0 0 1 .3.876" data-name="Path 2912" /><path fill="#fff" d="M25.401 25.533a1.132 1.132 0 0 1-.891-.395 1.58 1.58 0 0 1-.334-1.069v-6a1.531 1.531 0 0 1 .337-1.064 1.154 1.154 0 0 1 .888-.376 1.191 1.191 0 0 1 .9.374 1.406 1.406 0 0 1 .351 1.006v6.065a1.538 1.538 0 0 1-.35 1.081 1.178 1.178 0 0 1-.9.383m0-8.532a.783.783 0 0 0-.611.254 1.18 1.18 0 0 0-.239.811v6a1.223 1.223 0 0 0 .242.822.762.762 0 0 0 .608.266.806.806 0 0 0 .624-.263 1.184 1.184 0 0 0 .25-.825v-6.066a1.034 1.034 0 0 0-.248-.747.818.818 0 0 0-.625-.257m.018-3.974a1.3 1.3 0 0 1-.872-.315 1.231 1.231 0 0 1 0-1.776 1.258 1.258 0 0 1 .868-.337 1.287 1.287 0 0 1 .842.3 1.114 1.114 0 0 1 .383.905 1.144 1.144 0 0 1-.37.9 1.251 1.251 0 0 1-.855.32m0-2.052a.882.882 0 0 0-.616.24.759.759 0 0 0-.257.595.767.767 0 0 0 .246.619.917.917 0 0 0 .627.223.874.874 0 0 0 .606-.225.776.776 0 0 0 .244-.617.749.749 0 0 0-.247-.616.911.911 0 0 0-.6-.218" data-name="Path 2913" /></g></symbol><clipPath id="equatio-svg-texthelp-ai_a"><path fill="none" d="M0 0h38v36.24H0z" data-name="Rectangle 3067" /></clipPath><symbol viewBox="0 0 106.944 21.092" id="equatio-svg-texthelp-logo"><path style="fill:#0ca0a0" d="M23.527 6.748c-.729 0-1.011-.306-1.011-.87v-.165c0-.564.282-.87 1.011-.87h.823V3.104c0-.8.4-1.106 1.034-1.106h.235c.611 0 1.011.235 1.011 1.106v1.739h2.563c.729 0 .987.282.987.847v.164c0 .588-.282.894-1.011.894h-2.562v5.713c0 1.41.4 2.092 1.505 2.092.729 0 1.246-.329 1.599-.8.07-.07.658.259.658.988 0 .87-.964 1.716-2.633 1.716-2.328 0-3.386-1.293-3.386-3.738V6.748h-.823zM36.632 14.624c1.975 0 2.962-.87 3.55-1.881.047-.047 1.223.165 1.223 1.152 0 .987-1.74 2.563-4.82 2.563-3.574 0-5.972-2.375-5.972-5.901 0-3.433 2.445-5.995 5.784-5.995 3.268 0 5.431 2.304 5.431 5.689v.189c0 .493-.164.682-.705.682H32.8c.164 2.068 1.692 3.502 3.832 3.502zm2.938-5.078c-.118-1.951-1.317-3.221-3.197-3.221-1.857 0-3.292 1.34-3.574 3.221h6.771zM47.288 11.732l-2.445 3.55c-.4.635-.87.988-1.458.988-.823 0-1.364-.776-1.27-.87l3.738-4.89-3.691-4.938c-.071-.118.423-.846 1.246-.846.635 0 1.058.329 1.458.964l2.516 3.597 2.469-3.597c.447-.705.964-.964 1.434-.964.847 0 1.364.752 1.293.846L48.84 10.51l3.668 4.89c.071.117-.4.87-1.27.87-.635 0-1.058-.352-1.434-.964 0 0-2.516-3.598-2.516-3.574zM54.254 6.748c-.729 0-1.011-.306-1.011-.87v-.165c0-.564.282-.87 1.011-.87h.823V3.104c0-.8.4-1.106 1.034-1.106h.235c.611 0 1.011.235 1.011 1.106v1.739h2.563c.729 0 .987.282.987.847v.164c0 .588-.282.894-1.011.894h-2.563v5.713c0 1.41.4 2.092 1.505 2.092.729 0 1.246-.329 1.599-.8.071-.07.658.259.658.988 0 .87-.964 1.716-2.633 1.716-2.328 0-3.385-1.293-3.385-3.738V6.748h-.823zM68.214 4.561c2.986 0 4.373 2.069 4.373 4.89v5.689c0 .847-.447 1.105-1.035 1.105h-.258c-.611 0-1.035-.259-1.035-1.105V9.71c0-1.951-.987-3.104-2.61-3.104-1.928 0-3.174 1.27-3.174 3.315v5.219c0 .847-.447 1.105-1.035 1.105h-.259c-.611 0-1.034-.259-1.034-1.105V.259c.001-.071.377-.259.847-.259.705 0 1.481.376 1.481 1.999V6.63c.753-1.199 1.975-2.069 3.739-2.069zM80.032 14.624c1.975 0 2.962-.87 3.55-1.881.047-.047 1.223.165 1.223 1.152 0 .987-1.74 2.563-4.82 2.563-3.574 0-5.972-2.375-5.972-5.901 0-3.433 2.445-5.995 5.784-5.995 3.268 0 5.431 2.304 5.431 5.689v.189c0 .493-.164.682-.705.682H76.2c.164 2.068 1.692 3.502 3.832 3.502zm2.938-5.078c-.117-1.951-1.316-3.221-3.197-3.221-1.857 0-3.291 1.34-3.574 3.221h6.771zM86.355 15.141V.259c0-.071.4-.259.846-.259.729 0 1.481.376 1.481 1.999v13.142c0 .847-.423 1.105-1.035 1.105h-.235c-.61 0-1.057-.258-1.057-1.105zM92.773 19.656c0 .846-.447 1.105-1.035 1.105h-.258c-.611 0-1.035-.259-1.035-1.105V4.984c0-.071.376-.259.846-.259.705 0 1.434.376 1.458 1.951.893-1.317 2.187-2.116 3.973-2.116 3.033 0 5.29 2.328 5.29 5.925 0 3.55-2.234 5.972-5.36 5.972-1.857 0-3.244-1.011-3.879-2.116v5.315zm-.023-8.441c0 1.904 1.599 3.315 3.48 3.315 2.116 0 3.526-1.622 3.526-4.02 0-2.351-1.458-4.021-3.48-4.021-1.716 0-2.939.917-3.526 2.351v2.375z" /><path style="fill:#e8396b" d="M18.112 1.895H3.283A3.292 3.292 0 0 0 0 5.178v7.98a3.293 3.293 0 0 0 3.283 3.283h2.002v3.725a.926.926 0 0 0 1.854 0v-3.725h.885v3.725a.926.926 0 0 0 1.854 0v-3.725h2.545a3.292 3.292 0 0 0 3.283-3.283V5.802l2.867-2.768c.648-.626.441-1.139-.461-1.139zm-5.491 3.218a.892.892 0 1 1 0-1.783.892.892 0 0 1 0 1.783z" /><circle style="fill:#fff" cx="12.621" cy="4.221" r=".892" /><path style="fill:#0ca0a0" d="M102.967 4.147c-.135 0-.21-.068-.21-.196V3.93c0-.129.074-.19.21-.19h1.427c.135 0 .203.061.203.19v.02c0 .128-.068.196-.203.196h-.487v1.488c0 .135-.068.216-.203.216h-.061c-.122 0-.189-.081-.189-.216V4.147h-.487zm1.948 1.487V3.95c0-.149.068-.23.203-.23h.183c.142 0 .189.047.23.156l.406.994.406-.994c.047-.122.108-.156.223-.156h.176c.135 0 .203.081.203.23v1.684c0 .135-.047.216-.183.216h-.062c-.122 0-.183-.081-.183-.216V4.356l-.372.954c-.02.061-.034.108-.216.108-.183 0-.183-.041-.21-.108l-.379-.947v1.271c0 .135-.041.216-.169.216h-.074c-.128.001-.182-.08-.182-.216z" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-calculator"><g data-name="Group 2"><path fill="currentColor" d="M37.501 13.91a2.849 2.849 0 0 0-2.688-2.909H17.91a2.849 2.849 0 0 0-2.909 2.686v22.5a2.849 2.849 0 0 0 2.686 2.91h16.9a1.9 1.9 0 0 0 .781-.112 2.888 2.888 0 0 0 2.127-2.8V13.91zM22.052 36.186h-2.8v-2.8h2.8zm0-5.6h-2.8v-2.8h2.8zm0-5.6h-2.8v-2.8h2.8zm5.6 11.193h-2.8v-2.8h2.8zm0-5.6h-2.8v-2.8h2.8zm0-5.6h-2.8v-2.8h2.8zm5.6 11.193h-2.8v-2.8h2.8zm0-5.6h-2.8v-2.8h2.8zm0-5.6h-2.8v-2.8h2.8zm1.455-5.6H17.91v-5.571h16.791z" /><path fill="none" d="M17.91 19.396h16.794v-5.6H17.91zm5.15-4.142h2.8v2.8h-2.8zm-3.694 0h2.8v2.8h-2.8z" /><path fill="currentColor" d="M25.858 15.254h-2.8v2.8h2.8zm-3.806 0h-2.8v2.8h2.8z" /><path fill="none" d="M19.365 24.992h2.8v-2.8h-2.8zm5.6 0h2.8v-2.8h-2.8zm-5.6 5.6h2.8v-2.8h-2.8zm5.6 0h2.8v-2.8h-2.8zm5.6 0h2.8v-2.8h-2.8zm-11.2 5.594h2.8v-2.8h-2.8zm5.6 0h2.8v-2.8h-2.8zm5.6 0h2.8v-2.8h-2.8zm0-11.193h2.8v-2.8h-2.8z" /></g></symbol><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-circle"><circle style="fill:none;stroke:currentColor;stroke-width:2;stroke-miterlimit:10" cx="27.7" cy="23.6" r="13.3" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-companion"><path style="fill:currentColor" d="M30.9 10.8H20.7c-1.8 0-3.2 1.4-3.2 3.2v21.7c0 1.8 1.4 3.2 3.2 3.2h10.2c1.8 0 3.2-1.4 3.2-3.2V14c0-1.7-1.4-3.2-3.2-3.2zm-5.1 24.9c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .9-.7 1.6-1.6 1.6zm4.9-4.3H21V16.2h9.7v15.2z" /></symbol><symbol viewBox="0 0 60 75" id="equatio-svg-tool-delete"><path style="fill:currentColor" d="M3 72c0 1.6 1.4 3 3 3h48c1.6 0 3-1.4 3-3V21H3v51zm45.7-16.4c1.1 1.8 1.1 3.8.2 5.4-.9 1.6-2.7 2.6-4.8 2.6h-7.5v1.6c0 .7-.4 1-.8 1-.2 0-.4-.1-.7-.3l-5-4.9c-.3-.3-.4-.6-.4-1s.1-.7.4-1l4.9-4.9c.3-.3.6-.3.7-.3.4 0 .8.3.8 1v1.6h4.3l-4.4-7.6 6.2-3.6 6.1 10.4zM25.4 31.2c1.1-1.8 2.7-2.9 4.6-2.9s3.6 1 4.6 2.9l3.7 6.5 1.6-.9.4-.1c.3 0 .5.1.6.3.1.2.2.4.1.9l-1.8 6.7c-.2.6-.7 1-1.3 1h-.4l-6.7-1.8c-.6-.2-.7-.6-.8-.8s0-.6.5-.9l1.4-.8-1.9-3.7-4.4 7.5-6.2-3.6 6-10.3zM11.3 55.6l3.7-6.5-1.4-.8c-.6-.3-.6-.8-.5-.9 0-.2.1-.6.8-.7l6.8-1.8h.3c.6 0 1.1.4 1.3 1l1.8 6.7c.1.4 0 .7-.1.9l-.2.2-.5.1c-.2 0-.4-.1-.6-.2l-1.4-.8-2.1 3.7h8.5v7.2H15.9c-2.1 0-3.9-.9-4.8-2.6-.9-1.7-.9-3.7.2-5.5zM58.5 12H42V6c0-3.3-2.7-6-6-6H24c-3.3 0-6 2.7-6 6v6H1.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h57c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM36 12H24V6h12v6z" /></symbol><symbol fill="none" viewBox="0 0 100 100" id="equatio-svg-tool-desmos-calculator"><path d="M0 0h100v100H0z" /><path d="M27.585 70.282h-.045a2.11 2.11 0 0 1-1.863-1.21l-4.489-9.539-.724.543a2.108 2.108 0 1 1-2.53-3.373l2.795-2.097a2.11 2.11 0 0 1 3.173.79l3.784 8.04 13.406-25.593a2.109 2.109 0 0 1 1.868-1.13h37.738a2.109 2.109 0 0 1 0 4.217H44.236L29.453 69.152a2.109 2.109 0 0 1-1.868 1.13Z" fill="currentColor" /><path d="M75.321 47.262v.693c0 .393-.117.758-.348 1.086l-3.867 5.395c-.805 1.124-1.363 2.687-1.66 4.648-.205 1.344-.309 3.38-.309 6.056 0 1.3-.656 2.043-1.799 2.043-1.61 0-1.785-1.429-1.785-2.043 0-3.574 1.202-7.263 3.573-10.964l.013-.022c.61-.851 1.49-2.1 2.625-3.719h-5.873c-1.04 0-1.425.055-1.56.086-.073.147-.256.649-.524 2.264l-.068.408h-1.123v-.488l.078-.488.863-5.381v-.488h1.153l.043.439c.01.1.04.143.064.168.059.047.508.307 3.096.307h7.408ZM58.893 60.652l-.931 5.918H46.49v-.734c0-.422.152-.807.451-1.143l5.461-6.076c1.89-2.11 2.852-4.117 2.852-5.967 0-1.154-.288-2.13-.85-2.906-.602-.84-1.408-1.246-2.47-1.246-.78 0-1.454.23-2.063.703-.44.34-.783.744-1.045 1.225 1.043.162 1.629.85 1.629 1.937 0 .55-.188 1.022-.56 1.405a1.879 1.879 0 0 1-1.401.585c-1.274 0-2.004-.755-2.004-2.072 0-1.56.584-2.906 1.736-3.998 1.143-1.086 2.516-1.635 4.074-1.635 1.797 0 3.328.536 4.551 1.592 1.3 1.13 1.96 2.615 1.96 4.41 0 1.17-.386 2.313-1.142 3.393-.421.603-1.177 1.433-2.31 2.539l-4.978 4.828h4.472c1.244 0 1.668-.078 1.8-.119.067-.144.232-.637.476-2.225l.064-.414h1.7ZM30.475 43.008c0 1.394-.56 2.584-1.666 3.535-1.043.885-2.273 1.332-3.66 1.332-1.242 0-2.369-.33-3.348-.977-1.16-.771-1.747-1.804-1.747-3.072 0-.512.161-.945.482-1.285.328-.348.76-.525 1.283-.525.496 0 .92.172 1.258.51.338.337.508.76.508 1.257 0 .504-.184.94-.534 1.264-.162.15-.341.266-.539.346.221.193.483.361.79.501.55.252 1.146.381 1.77.381.733 0 1.245-.32 1.612-1.008.309-.587.467-1.347.467-2.26 0-.964-.166-1.743-.492-2.312-.377-.676-.926-.988-1.727-.988h-1.18c-.585 0-.85-.373-.85-.74 0-.25.126-.688.954-.791l.045-.002c.234-.008.467-.02.694-.033.74-.047 1.275-.358 1.634-.946.373-.605.563-1.394.563-2.346 0-.628-.143-1.136-.426-1.505-.291-.385-.707-.572-1.272-.572-.879 0-1.566.195-2.078.593.198.078.366.186.506.322.287.285.434.676.434 1.163 0 .466-.155.861-.461 1.171-.309.315-.703.475-1.174.475-.48 0-.883-.156-1.192-.465-.308-.309-.464-.71-.464-1.191 0-1.131.525-2.05 1.562-2.735.865-.568 1.861-.855 2.967-.855 1.123 0 2.143.287 3.035.851 1.092.688 1.647 1.622 1.647 2.77 0 1.031-.36 1.979-1.067 2.817-.367.439-.793.808-1.277 1.107a5.378 5.378 0 0 1 1.658 1.15c.854.871 1.285 1.9 1.285 3.063Z" fill="currentColor" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-desmos-graph"><defs></defs><g clip-path="url(#equatio-svg-tool-desmos-graph_a)"><path fill="currentColor" d="M10.3 9.4h31v31h-31v-31Z" /><path fill="#f2f2f2" fill-rule="evenodd" d="M38.95 9.4c-.32 1.25-.59 2.25-.59 2.25-1 3.62-2.2 7.55-3.71 11.29-.72 1.79-1.72 4.12-3.11 6.32-.05.01-.1.02-.15.02h-.07c-.19 0-.4-.05-.62-.15-.39-.18-.74-.44-1.07-.74-.03-.03-.06-.05-.09-.08l.06-.1c.05-.08.11-.17.16-.25 1.23-1.93 2.13-4.03 2.92-6.01 1.4-3.52 2.66-7.44 3.93-12.23 0 0 .02-.08.09-.33h2.26Zm-1.1 15.73c.36-.15.74-.25 1.14-.29.86-.08 1.63.11 2.32.46v2.59l-.01-.01-.01-.01c-.12-.11-.25-.21-.38-.31h-.01v-.01c-.02-.01-.04-.03-.05-.04h-.01l-.01-.01c-.02-.01-.03-.02-.05-.03h-.02l-.02-.02c-.02-.01-.03-.02-.05-.03h-.01s-.01 0-.02-.01l-.06-.03h-.03c-.01 0-.02-.01-.03-.02h-.02v-.02h-.01c-.17-.09-.36-.17-.55-.22-.46-.13-.92-.06-1.35.12-.03.01-.06.03-.09.04-.02 0-.03.02-.05.02-.02.01-.05.03-.08.05-.07.05-.15.1-.2.11-.16.11-.31.22-.45.34-.18.15-.35.31-.52.47l-.17.17-.08.08-.03.03c-.17.17-.35.35-.52.53-.7.71-1.41 1.44-2.2 2.04-.01 0-.03.02-.04.03-.01 0-.03.02-.04.03l-.01.01-.01.01-.11.08a1.653 1.653 0 0 1-.15.11c-.09.06-.19.12-.28.18-.06.04-.12.07-.18.1-.02 0-.04.02-.05.03-.04.02-.09.05-.14.07-.01 0-.02 0-.03.01h-.05c-.01 0-.02.01-.04.02-.02 0-.04.02-.06.03h-.02c-.04.02-.07.03-.11.04h-.03s-.02.02-.03.02h-.06c-.01 0-.03 0-.04.01h-.02s.04 0 .06-.02a3.941 3.941 0 0 1-.06.02c-.56.2-1.16.29-1.76.2-.48-.04-.94-.19-1.38-.4-.02 0-.04-.02-.06-.03s0 0-.01 0c-.02-.01-.05-.02-.07-.04-.02 0-.04-.02-.06-.03h-.01s-.07-.04-.1-.06c-.01 0-.02-.01-.03-.02-.74-.41-1.38-.99-1.98-1.59-.22-.22-.44-.45-.65-.67-.05-.05-.1-.11-.15-.16l.05.06s.08.08.11.12c-.08-.08-.15-.16-.23-.24l.06.06c-.13-.14-.27-.27-.4-.41-.07-.07-.14-.14-.21-.2l-.09-.09-.03-.03-.05-.04c-.21-.2-.43-.4-.66-.58-.21-.17-.45-.36-.71-.5-.34-.18-.7-.28-1.09-.25-.43.04-.81.18-1.16.4-.02.01-.04.02-.05.03-.18.12-.35.25-.52.38a.7.7 0 0 1 .1-.08c-.05.04-.1.09-.15.13 0 0 .02-.01.03-.02l.01-.01.01-.01c-.22.19-.43.4-.62.59l-.06.06c-.33.33-.65.66-.99.99-.57.57-1.15 1.15-1.79 1.63-.31.23-.63.44-.97.61l-.27.12c.09-.04.17-.08.26-.12-.57.27-1.17.42-1.79.43.47 0 .94-.09 1.39-.26-.36.14-.73.23-1.12.26-1.06.14-2.18-.35-3.02-.94-.77-.54-1.45-1.22-2.11-1.9v-.02c.16.17.33.34.49.51-.16-.17-.32-.33-.49-.5v-3.02s.06.05.09.07l.02.02a27.772 27.772 0 0 1 1.24 1.22c.53.54 1.05 1.07 1.63 1.55.03.02.05.04.08.06s.01.01.01.01l.03.02h.02c.38.3.8.54 1.26.63a2.214 2.214 0 0 0 .33.04h.17c.51-.03.95-.24 1.37-.53s.04-.03.06-.04c.01 0 .02-.02.03-.02l.13-.1c.02-.02.05-.04.07-.06.01 0 .02-.02.03-.03s.02-.02.02-.03c0 0 .02-.02.03-.02.04-.03.07-.06.11-.1 0 0 .02-.02.03-.02l.02-.02c.04-.04.08-.07.12-.11.01 0 .02-.02.03-.03l.01-.01.12-.12c.12-.11.23-.22.35-.34.09-.09.18-.18.27-.26.2-.2.41-.39.61-.58.25-.23.49-.47.74-.7l-.1.1c.19-.19.39-.37.59-.55l-.33.3c.39-.38.8-.74 1.25-1.03.32-.21.66-.38 1.01-.51.08-.03.17-.06.25-.09h.03c.06-.02.12-.03.18-.05.08-.02.16-.04.24-.05.41-.07.8-.08 1.17-.03-.24-.03-.48-.03-.71-.02.92-.05 1.79.25 2.6.75-.08-.05-.17-.11-.26-.16.61.34 1.16.79 1.67 1.27.28.26.54.54.81.82.1.1.2.21.3.31.09.09.17.18.26.27.03.03.05.06.08.08l.07.07.11.11c.23.24.5.49.78.73l-.15-.12c.4.36.84.68 1.33.85-.43-.15-.82-.42-1.18-.73.17.14.36.27.54.39.39.24.81.44 1.27.47.63.03 1.19-.3 1.68-.67.06-.04.12-.09.17-.14h.01c.35-.29.69-.61 1.02-.93.06-.06.13-.12.19-.19.21-.2.41-.4.62-.61.61-.61 1.23-1.23 1.94-1.72 0 0 .02-.01.03-.02s.02-.02.03-.02c.01 0 .03-.02.04-.03s.02-.01.02-.01H37l.02-.02c.03-.02.07-.04.1-.06.05-.03.09-.06.14-.08 0 0 .01 0 .02-.01 0 0 .02-.01.03-.02.18-.1.36-.19.54-.27Zm0 0c-.07.03-.15.06-.22.1.23-.11.46-.19.7-.26-.16.04-.32.09-.48.16Zm-8.71 7.17-.04.03c-1.13 1.01-2.36 1.53-3.64 1.53h-.03c-1.32 0-2.55-.55-3.79-1.7-.62-.57-1.19-1.23-1.73-1.95.03-.02.06-.05.08-.08.33-.31.66-.64.99-.97l.15-.16.28-.28s.06-.05.08-.08h.01c.51.75.97 1.3 1.45 1.75.66.61 1.44 1.26 2.44 1.26.61 0 1.21-.23 1.84-.69l.02.02s.05.04.07.06c.45.41.87.72 1.27.97.14.09.28.16.42.24.01 0 .03.01.04.02.02.01.05.02.07.03ZM14.31 10s-.06-.23-.14-.6h-2.28c.19.76.38 1.51.58 2.26 1.08 3.91 2.34 7.7 3.75 11.3.49 1.26 1.1 2.74 1.81 4.15v.03s.07-.05.1-.08c.18-.17.35-.34.52-.5.31-.31.63-.62.97-.91l.02-.02c.02-.02.05-.04.07-.06-.61-1.25-1.13-2.51-1.56-3.58-1.63-4.12-2.9-8.41-3.86-12Z" /></g></symbol><clipPath id="equatio-svg-tool-desmos-graph_a"><rect width="31" height="31" x="10.3" y="9.4" fill="none" rx="3.1" ry="3.1" /></clipPath><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-equation"><path style="fill:currentColor" d="M31.7 14.7h1.5v20.8h-1.5zM33.2 13.2h4.5v1.5h-4.5zM27.3 13.2h4.5v1.5h-4.5zM33.2 35.5h4.5V37h-4.5zM27.3 35.5h4.5V37h-4.5zM20.7 25.1c-.3 0-.5-.1-.7-.3l-5.8-6.5c-.3-.3-.3-.7-.2-1.1.2-.4.5-.6.9-.6h9.7c.5 0 1 .4 1 1 0 .5-.4 1-1 1h-7.5l4.3 4.9c.4.4.3 1-.1 1.4-.1.1-.3.2-.6.2z" /><path style="fill:currentColor" d="M24.6 31.6h-9.7c-.4 0-.7-.2-.9-.6-.2-.4-.1-.8.2-1.1l5.8-6.5c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4.3 4.9h7.5c.5 0 1 .4 1 1s-.6 1-1.1 1z" /></symbol><symbol viewBox="0 0 14 13.2" id="equatio-svg-tool-fill"><path style="fill:currentColor" d="m10.5 7-7-7-1 1.1L4.3 3l-4 4c-.5.5-.5 1.2 0 1.7L4.6 13c.2.2.5.3.8.3.3 0 .6-.1.8-.3l4.3-4.3c.5-.6.5-1.3 0-1.7m-8.8.8 3.7-3.7 3.7 3.7H1.7zm10.7 1.1s-1.6 1.7-1.6 2.7c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-1-1.6-2.7-1.6-2.7" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-freehand"><path style="fill:currentColor" d="m34.2 23.6-2.3 10c-.1.6-.7 1-1.3 1H21c-.6 0-1.1-.4-1.3-1l-2.3-10 7.8-13.7v12.5c-1 .3-1.8 1.2-1.8 2.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.1-.8-2.1-1.8-2.4V9.9l7.6 13.7zM19.9 37.3v1.3c0 .7.6 1.3 1.3 1.3h9.2c.7 0 1.3-.6 1.3-1.3v-1.3c0-.7-.6-1.3-1.3-1.3h-9.2c-.7 0-1.3.6-1.3 1.3z" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-graph"><path style="fill:#494949" d="M39.3 40.4h-27c-1.1 0-2-.9-2-2v-27c0-1.1.9-2 2-2h27c1.1 0 2 .9 2 2v27c0 1.1-.9 2-2 2z" /><path style="fill:#fff" d="m39.5 23.7-.2-.2-1.7-1.5c-.3-.2-.6-.3-.9-.3-.3 0-.7.2-.9.5-.2.2-.3.6-.3.9v.6h-6.2v-1.4c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1.4h-3.6c-1.5-6.9-3.1-10-5.3-10.1-.8 0-1.7.5-2.4 1.4-.7.9-1.4 2.3-2.2 4.1-1 2.6-1.6 5.1-1.6 5.1-.1.5.2.9.6 1h4.1v1.5c0 .5.4.9.9.9s.9-.4.9-.9v-1.5h3.7c.2.9.7 2.7 1.4 4.5.7 1.8 1.4 3.2 2.1 4.1.8 1 1.6 1.4 2.4 1.4 2.2 0 3.9-3.1 5.3-10.1h1.6v.7c0 .3.1.6.3.8.2.3.5.4.9.5h.1c.3 0 .5-.1.8-.2l.1-.1 1.7-1.5c.6-.3.7-1.1.2-1.6zM18 21.3c-.5 0-.9.4-.9.9v1.4h-2.8c.3-.9.7-2.4 1.3-3.9 1.6-4.2 2.8-4.4 3-4.4.2 0 .8.2 1.5 1.7.7 1.4 1.4 3.6 2 6.6h-3.3v-1.4c.1-.5-.3-.9-.8-.9zm10.4 6.4c.5 0 .9-.4.9-.9v-1.5h2.8c-.6 2.9-1.3 5.1-2.1 6.6-.8 1.6-1.3 1.7-1.5 1.7-.1 0-.4-.1-1-.6-.6-.7-1.3-2-2-3.8-.6-1.4-1-2.9-1.3-3.9h3.2v1.5c.1.5.5.9 1 .9z" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-handwriting"><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#494949" d="m33 17.4-2.3 2.8-6.4-5.1 2.3-2.8c3.1.9 4.9 2.3 6.4 5.1zm-17 11 3.8 3-2.9 1.2-1.4-1.1c.1-1 .3-2.1.5-3.1zm-2.8 7.3 7.6-3 9-11.2-6.4-5.1-9 11.2-1.2 8.1z" /><path style="fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#494949;stroke-width:1.4769;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M13.9 36.7c2.7.4 6.5.7 8.3-.6 2-1.4.3-3.8 2-4.5.9-.4 2.8-.4 7.6 1.9" /><text transform="translate(30.748 34.527)" style="fill:#494949;font-family:\'Roboto-Bold\';font-size:13.8118px">A</text></symbol><symbol viewBox="0 0 51.6 49.83" id="equatio-svg-tool-latex"><defs></defs><g style="clip-path:url(#equatio-svg-tool-latex_a)"><path style="fill:#494949" d="M15.79 25.09h-.38c-.15 1.54-.36 3.41-3 3.41h-1.23c-.71 0-.74-.11-.74-.6v-8c0-.51 0-.72 1.42-.72h.5v-.45h-4.8v.45h.35c1.16 0 1.19.17 1.19.71v7.91c0 .54 0 .71-1.19.71h-.35V29h7.82Z" /><path style="fill:#494949" d="M15.53 18.7c-.06-.18-.09-.24-.29-.24s-.24.06-.3.24l-2.43 6.15c-.11.26-.29.72-1.22.72V26h2.34v-.38c-.47 0-.75-.21-.75-.51a.66.66 0 0 1 0-.21l.51-1.3h3l.6 1.54a.51.51 0 0 1 .06.18c0 .3-.57.3-.86.3V26h3v-.38H19c-.71 0-.78-.11-.89-.41Zm-.6 1.07 1.34 3.41h-2.68Z" /><path style="fill:#494949" d="M27.6 18.81h-9.17l-.27 3.38h.36c.21-2.43.44-2.92 2.71-2.92a6.32 6.32 0 0 1 .81 0c.32.06.32.23.32.57v7.91c0 .51 0 .72-1.58.72h-.6V29H25.87v-.5h-.6c-1.58 0-1.58-.21-1.58-.72v-7.92c0-.3 0-.51.27-.57a7.1 7.1 0 0 1 .86 0c2.26 0 2.49.5 2.7 2.92h.38Z" /><path style="fill:#494949" d="M35.68 28.48h-.38c-.38 2.31-.72 3.41-3.3 3.41h-2c-.71 0-.74-.11-.74-.6v-4h1.34c1.46 0 1.63.48 1.63 1.76h.38v-4h-.38c0 1.28-.17 1.75-1.63 1.75h-1.32v-3.6c0-.5 0-.6.74-.6h1.93c2.31 0 2.7.83 2.94 2.92h.38l-.42-3.38H26.4v.45h.35c1.16 0 1.19.17 1.19.71v7.87c0 .54 0 .71-1.19.71h-.35v.47H35Z" /><path style="fill:#494949" d="m40.22 23.16 2.06-3a2.28 2.28 0 0 1 2.17-1v-.45h-3.59v.45c.6 0 .93.35.93.69 0 .15 0 .18-.14.35l-1.72 2.53L38 19.85a.62.62 0 0 1-.11-.23c0-.18.33-.44 1-.45v-.45h-4.18v.45H35c.83 0 1.11.11 1.4.53l2.76 4.17-2.44 3.63a2.27 2.27 0 0 1-2.17 1v.5h3.59v-.5c-.69 0-.95-.42-.95-.69s0-.2.15-.36l2.12-3.15 2.38 3.59a.52.52 0 0 1 .08.17c0 .18-.33.44-1 .45V29h4.18v-.5h-.3c-.78 0-1.1-.08-1.42-.54Z" /></g></symbol><clipPath id="equatio-svg-tool-latex_a"><path style="fill:none" d="M0 0h51.6v49.83H0z" /></clipPath><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-line"><path style="fill:none;stroke:currentColor;stroke-width:2;stroke-miterlimit:10" d="M11 22.7h33.2" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-math-screenshot"><path d="M11.3 16.31h2.18v-3.25h3.3v-2.18H11.3v5.43Zm24.75 1.74h2.18v5.43h-2.18v-5.43Zm0-1.74h2.18v-5.43h-5.47v2.18h3.29v3.25ZM25.66 10.7h5.68v2.27h-5.68V10.7Zm-6.86 0h5.68v2.27H18.8V10.7Zm-7.5 7.35h2.18v5.43H11.3v-5.43Zm2.18 14.34H11.3v5.43h5.48v-2.18h-3.3v-3.25Zm4.94 3.25h5.47v2.18h-5.47v-2.18ZM11.3 25.16h2.18v5.43H11.3v-5.43Zm29.4-.57c-.83.73-1.64 1.54-2.44 2.33-.73.72-1.44 1.42-2.14 2.06-.1-.2-.2-.39-.3-.58-.43-.85-.88-1.73-1.29-2.63l-.2-.44-.21.43c-1.17 2.37-2.28 4.85-3.35 7.24-.7 1.57-1.43 3.19-2.16 4.76l-.21.47.49-.17c4.24-1.45 12.71-4.41 12.8-4.44l.42-.15-3.82-2.41c.37-.35.75-.7 1.12-1.04 1.19-1.11 2.42-2.25 3.58-3.41l.17-.17-.2-.15c-.45-.34-.87-.7-1.28-1.07-.22-.2-.45-.4-.69-.6l-.15-.13-.14.13Z" fill="currentColor" /><g fill="currentColor"><path d="M24.48 24.5c-.28 0-.55-.11-.73-.31l-6.06-6.79c-.28-.32-.36-.76-.21-1.15.15-.38.53-.63.94-.63h10.12a1.04 1.04 0 1 1 0 2.08h-7.83l4.49 5.12c.38.41.35 1.05-.07 1.43-.01.01-.02.02-.04.03-.19.11-.4.19-.62.21Z" /><path d="M28.44 31.28H18.32c-.41 0-.78-.24-.94-.63a.96.96 0 0 1 .21-1.15l6.06-6.79c.37-.43 1.03-.48 1.46-.1.43.37.48 1.03.1 1.46l-4.49 5.12h7.83c.58 0 1.04.47 1.04 1.04a1.08 1.08 0 0 1-1.1 1.05h-.06Z" /></g></symbol><symbol viewBox="0 0 42 42" id="equatio-svg-tool-mathspace"><path style="fill:#00b7ff" d="m29.3 19.2-6.4-6.4c-.1-.1-.2-.2-.4-.2h-2.9c-.1 0-.3.1-.4.2l-6.4 6.4c-.1.1-.2.2-.2.4v2.9c0 .1.1.3.2.4l6.4 6.4c.1.1.2.2.4.2h2.9c.1 0 .3-.1.4-.2l6.4-6.4c.1-.1.2-.2.2-.4v-2.9c-.1-.2-.1-.3-.2-.4zm-.9.6v1.6l-6-6c-.2-.2-.4-.2-.6 0l-1.1 1.1c-.2.2-.2.4 0 .6L17 20.7l-.8-.8 6.1-6.1 6.1 6zM17.3 21l3.7-3.7 3.7 3.7-3.7 3.7-3.7-3.7zm2.5-7.4h1.6l-6 6c-.2.2-.2.4 0 .6l1.1 1.1c.1.1.2.1.3.1.1 0 .2 0 .3-.1l3.7 3.7-.8.8-6.1-6.1 5.9-6.1zm-6.2 8.6v-1.6l6 6c.1.1.2.1.3.1.1 0 .2 0 .3-.1l1.1-1.1c.2-.2.2-.4 0-.6l3.6-3.6.8.8-6 6-6.1-5.9zm8.6 6.2h-1.6l5.9-5.9c.2-.2.2-.4 0-.6l-1.1-1.1c-.1-.1-.4-.2-.5-.1l-3.6-3.6.8-.8 6.1 6.1-6 6z" /><path style="fill:#494949" d="m31.8 27.3-10.2 5.9V21.4l10.2-5.9v11.8zM10.2 15.4l10.2 5.9v11.8l-10.2-5.9V15.4zM21 8.5l10.2 5.9L21 20.3l-10.2-5.9L21 8.5zm11.7 5.4L21.3 7.3c-.2-.1-.4-.1-.6 0L9.3 13.9c-.2.1-.3.3-.3.5v13.2c0 .2.1.4.3.5l11.4 6.6c.1.1.2.1.3.1.1 0 .2 0 .3-.1l11.4-6.6c.2-.1.3-.3.3-.5V14.4c0-.2-.1-.4-.3-.5z" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-molecular-viewer"><path d="M41.754 21.696a5.565 5.565 0 0 0-7.7-1.438l-3.543-2.728a4.937 4.937 0 1 0-8.586 1.408l-4.252 5.777a6.707 6.707 0 1 0 2.828 1.731l4.2-5.707a4.916 4.916 0 0 0 3.755-.62l3.537 2.719a5.626 5.626 0 0 0-.292 1.033 5.529 5.529 0 0 0 .9 4.164 5.566 5.566 0 1 0 9.15-6.339ZM16.433 34.407a3.373 3.373 0 1 1 2.559-4.026 3.377 3.377 0 0 1-2.559 4.026Zm9.406-16.9a1.57 1.57 0 1 1 1.57-1.57 1.572 1.572 0 0 1-1.569 1.57Zm11.337 10.351a2.99 2.99 0 1 1 2.99-2.99 2.99 2.99 0 0 1-2.989 2.989Z" fill="currentColor" /></symbol><symbol viewBox="0 0 53 53" id="equatio-svg-tool-more"><path style="fill:currentColor" d="M12 23h6v7h-6zM23 23h6v7h-6zM34 23h6v7h-6z" /></symbol><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-parallel"><path style="fill:none;stroke:currentColor;stroke-width:2;stroke-miterlimit:10" d="M9.3 32.8 18 17h27.8L37 32.8z" /></symbol><symbol viewBox="0 0 51.603 49.831" id="equatio-svg-tool-path"><path style="fill:currentColor" d="m31.141 32.905-15.2-2.721v3.048l15.2 2.72z" /><path style="fill:currentColor" d="M37.082 38.332h-7.707v-7.707h7.707v7.707zm-5.941-1.766h4.175v-4.175h-4.175v4.175zM17.707 35.707H10V28h7.707v7.707zm-5.941-1.766h4.175v-4.175h-4.175v4.175zM41.603 23.317h-7.707V15.61h7.707v7.707zm-5.942-1.766h4.175v-4.175h-4.175v4.175zM18.409 19.207h-7.707V11.5h7.707v7.707zm-5.941-1.766h4.175v-4.175h-4.175v4.175z" /><path style="fill:currentColor" d="M35.661 17.619 18.04 13.91l-.618 2.936 14.129 2.974-14.5 10.471 1.756 2.432 16.854-12.171z" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-periodic-table"><g transform="translate(-324.672 -2724.5)" fill="currentColor"><rect width="4.412" height="4.412" rx="1.704" transform="translate(333.672 2740.698)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(333.672 2746.028)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(333.672 2751.292)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(338.936 2751.292)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(347.556 2751.292)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(352.82 2751.292)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(358.084 2751.292)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(358.084 2746.028)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(358.084 2740.764)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(352.82 2746.028)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(352.82 2740.764)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(347.556 2746.028)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(347.556 2759.188)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(352.82 2759.188)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(358.084 2759.188)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(363.348 2751.292)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(363.348 2746.028)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(363.348 2740.764)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(363.348 2735.5)" /><rect width="4.412" height="4.412" rx="1.704" transform="translate(338.936 2746.028)" /></g></symbol><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-polygon"><path style="fill:none;stroke:currentColor;stroke-width:2;stroke-miterlimit:10" d="m34.2 13.4 6.6 11.5-6.6 11.5H20.9l-6.6-11.5 6.6-11.5z" /></symbol><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-rectangle"><path style="fill:none;stroke:currentColor;stroke-width:2;stroke-miterlimit:10" d="M14.1 11.1h25.5v25.5H14.1z" /></symbol><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-rtriangle"><path style="fill:none;stroke:currentColor;stroke-width:2;stroke-miterlimit:10" d="m11.6 36.6 30-26v26z" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-select"><path style="fill:currentColor" d="M33 28.7 20.2 16.3l.1 17.8 3.9-3.4 3 7.1 3.7-1.5-3.1-7.1z" /></symbol><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-smartshapes"><path style="fill:none;stroke:currentColor;stroke-width:2;stroke-miterlimit:10" d="m34.2 13.4 6.6 11.5-6.6 11.5H20.9l-6.6-11.5 6.6-11.5z" /><path style="fill:currentColor" d="M20 24.9c0 4.2 3.4 7.5 7.5 7.5S35 29 35 24.9s-3.4-7.5-7.5-7.5-7.5 3.3-7.5 7.5zm8.5 4.9c-.3.5-1 .7-1.6.3l-.3-.3-.6-.9c.9-.8 2.2-.8 3.1 0l-.6.9zm1.1-1.6c-1.2-.8-2.8-.8-4 0l-.4-.5c1.3-1.2 3.4-1.2 4.7 0l-.3.5zm2.1-4.4c0 .9-.3 1.9-.9 2.6l-.4.5-.4-.3c-1.5-1-3.4-1-4.9 0l-.4.3-.4-.5c-.6-.7-.9-1.7-.9-2.6 0-2.3 1.9-4.2 4.2-4.2s4.1 1.8 4.1 4.2z" /></symbol><symbol viewBox="0 0 51.6 49.8" id="equatio-svg-tool-speech"><path style="fill:currentColor" d="M35.5 21.3c0-.3-.3-.6-.6-.6h-1.3c-.4 0-.6.3-.6.6V25c-.1 3.3-3.2 6-7.1 6-3.9 0-7-2.7-7.1-6v-3.6c0-.3-.3-.6-.6-.6h-1.3c-.4 0-.6.3-.6.6V25c0 4.2 3.6 7.7 8.4 8.3v3.4h-2.9c-.4 0-.6.3-.6.6v1.1c0 .3.3.6.6.6H30c.4 0 .6-.3.6-.6v-1.1c0-.3-.3-.6-.6-.6h-2.9v-3.4c4.7-.5 8.4-4.1 8.4-8.3v-3.7z" /><path style="fill:currentColor" d="M25.8 29.1c2.7 0 4.8-1.9 4.8-4.2v-9.8c0-2.3-2.2-4.2-4.8-4.2S21 12.8 21 15.1v9.8c0 2.3 2.1 4.2 4.8 4.2z" /></symbol><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-star"><path style="fill:none;stroke:currentColor;stroke-width:2;stroke-miterlimit:10" d="m27.5 30.5 9.4 6.9-3.6-11.1 9.5-6.8H31.1L27.5 8.4 24 19.5H12.3l9.5 6.8-3.7 11.1z" /></symbol><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-stem"><path d="M36.409 32.839 31.29 22.6a.955.955 0 0 1-.1-.428v-7.214a.958.958 0 0 0-.96-.958h-5.75a.958.958 0 0 0-.958.958v7.215a.955.955 0 0 1-.1.428l-5.119 10.238A2.875 2.875 0 0 0 20.873 37h12.964a2.875 2.875 0 0 0 2.572-4.161zm-7.137-2.547a.958.958 0 1 0-1.917 0h-5.637l3.417-6.834a2.888 2.888 0 0 0 .3-1.285v-6.256h3.833v6.256a2.888 2.888 0 0 0 .3 1.285l3.428 6.833zm-.959-6.709a.958.958 0 1 1-.958-.958.958.958 0 0 1 .958.958zm-.958 4.317a1.438 1.438 0 1 1-1.437-1.437 1.438 1.438 0 0 1 1.437 1.437z" fill="currentColor" /></symbol><symbol viewBox="0 0 81 69" id="equatio-svg-tool-text"><path style="fill:currentColor" d="M66 65.2V69H42v-3.8c4.3 0 5.8-4.4 4.6-7.6-.8-2.3-4.7-12.8-4.7-12.8H19.4s-3.3 8.4-5.3 13.5 2.7 6.9 6.9 6.9V69H0v-3.8s3.2-1.4 4.8-3 3-4.3 3-4.3L30.8 0h5.4l22.2 57.4s1.2 2.9 3.5 5.3c2.2 2.5 4.1 2.5 4.1 2.5zM40.4 39l-9.3-26.3L20.9 39h19.5z" /><g style="opacity:.5"><path style="fill:currentColor" d="M81 28.3V30H69v-1.7l3.3-1.5-2.3-6H59.4l-2.7 6 3.3 1.4V30h-9v-1.8l2.8-1.4L65.1 0h2.4l10.9 26.9 2.6 1.4zM69.5 18 65.2 6l-4.7 12h9z" /></g></symbol><symbol viewBox="0 0 51.603 49.831" id="equatio-svg-tool-textedit"><path style="fill:#494949" d="M37.19 20.019c-.187-2.401-.377-5.75-.414-7.31l-.007-.284h-1.32l-.086.097c-.588.658-1.031.848-1.974.848H18.207c-1.015 0-1.388-.064-1.915-.82l-.086-.125H14.87l-.011.279a150.695 150.695 0 0 1-.228 3.85c-.077 1.147-.159 2.366-.225 3.585l-.017.306h1.89l.057-.217c.294-1.135 1.554-2.066 1.87-2.197h4.772v13.262c0 3.05-.278 3.161-3.284 3.412l-.266.022v2.679H32.32v-2.68l-.267-.021c-3.192-.254-3.434-.346-3.434-3.412V18.031h5.65c.348.138.718.972.99 2.151l.055.238 1.899-.105-.023-.296z" /></symbol><symbol viewBox="0 0 55.1 49.8" id="equatio-svg-tool-trapezoid"><path style="fill:none;stroke:currentColor;stroke-width:2;stroke-miterlimit:10" d="M43.7 34.2H11.4l7.3-20.5h17.7z" /></symbol><symbol viewBox="0 0 78.6 74.1" id="equatio-svg-tool-triangle"><g style="opacity:.3"><path style="fill:currentColor" d="M72.4 68.6H6.3l-.2-.2L38.9 5.5l1.9 1z" /></g><path style="fill:none;stroke:currentColor;stroke-width:5;stroke-miterlimit:10" d="M39.3 4.2 5.9 68.1M40.8 5.9l31.9 62.8M72.3 67.5h-66" /><path style="fill:currentColor" d="M45.2 0v11.9H33.4V0" /><path style="fill:#fcfcfc" d="M42.3 3v6h-6V3" /><path style="fill:currentColor" d="M11.9 62.2v11.9H0V62.2" /><path style="fill:#fcfcfc" d="M8.9 65.2v6h-6v-6" /><path style="fill:currentColor" d="M78.6 62.2v11.9H66.8V62.2" /><path style="fill:#fcfcfc" d="M75.7 65.2v6h-6v-6" /></symbol><symbol viewBox="0 0 28 28" id="equatio-svg-traffic-light-disabled"><circle style="opacity:.2;fill:#9b9b9b" cx="14" cy="14" r="10.5" /><path style="opacity:.2;fill:#2c2c2c" d="M18.5 10.4c0-.7-.6-1.4-1.3-1.5-.5 0-1.1.2-1.4.6-.3-.4-.8-.7-1.3-.8-.7-.1-1.4.5-1.6 1.2-.2.9.3 1.8.8 2.4.3.4.6.7 1 1 .1.1.6.5.7.5.1.1.7-.3.8-.4.4-.2.8-.5 1.1-.8.6-.5 1.3-1.3 1.2-2.2zM8.8 9.3c0-.6-.5-1.3-1.2-1.3-.5 0-1 .2-1.3.5-.3-.4-.8-.7-1.2-.7-.7-.1-1.3.5-1.4 1.1-.2.8.3 1.6.7 2.2l.9.9c.1.1.5.5.6.5.1 0 .6-.3.7-.4.4-.2.7-.5 1-.7.6-.6 1.2-1.3 1.2-2.1z" /><path style="fill:#fff" d="M7 15.4s4.2 2.4 8.5.2c0 .1-3.6 10.5-8.5-.2z" /></symbol><symbol viewBox="0 0 28 28" id="equatio-svg-traffic-light-error"><style>#equatio-svg-traffic-light-error .equatio-traffic-light-error-st1{fill:#561717;transform:rotate(15deg) translateY(-4px) translateX(4px)}</style><circle cx="14" cy="14" r="10.5" style="fill:#d35b5b" /><circle class="equatio-traffic-light-error-st1" cx="7.9" cy="13.3" r="1.2" /><circle class="equatio-traffic-light-error-st1" cx="14.5" cy="11.8" r="1.2" /><path class="equatio-traffic-light-error-st1" d="M16.2 19.7c-.2-.1-4-2.6-6.7 1.1l-.8-.6c3.2-4.5 8-1.4 8-1.4l-.5.9z" /></symbol><symbol viewBox="0 0 28 28" id="equatio-svg-traffic-light-meh"><style>#equatio-svg-traffic-light-meh .equatio-traffic-light-meh-st1{fill:#292d2b}#equatio-svg-traffic-light-meh .equatio-traffic-light-meh-st2{fill:none;stroke:#292d2b;stroke-miterlimit:10;stroke-dasharray:10;stroke-dashoffset:8}</style><circle cx="14" cy="14" r="10.5" style="fill:#f7d431" /><circle class="equatio-traffic-light-meh-st1" cx="8.9" cy="10.5" r="1.2" /><circle class="equatio-traffic-light-meh-st1" cx="16.4" cy="10.5" r="1.2" /><path class="equatio-traffic-light-meh-st2" d="M12.6 19.1c1.1 0 2.4-.3 3.7-1.6" /><path class="equatio-traffic-light-meh-st2" d="M13.4 19.1c-1.1 0-2.4-.3-3.7-1.6" /></symbol><symbol viewBox="0 0 28 28" id="equatio-svg-traffic-light-ok"><style>#equatio-svg-traffic-light-ok .equatio-traffic-light-ok-st1{fill:#292d2b}</style><circle cx="14" cy="14" r="10.5" style="fill:#28d88c" /><path class="equatio-traffic-light-ok-st1" d="M18.5 10.4c0-.7-.6-1.4-1.3-1.5-.5 0-1.1.2-1.4.6-.3-.4-.8-.7-1.3-.8-.7-.1-1.4.5-1.6 1.2-.2.9.3 1.8.8 2.4.3.4.6.7 1 1 .1.1.6.5.7.5.1.1.7-.3.8-.4.4-.2.8-.5 1.1-.8.6-.5 1.3-1.3 1.2-2.2zM8.8 9.3c0-.6-.5-1.3-1.2-1.3-.5 0-1 .2-1.3.5-.3-.4-.8-.7-1.2-.7-.7-.1-1.3.5-1.4 1.1-.2.8.3 1.6.7 2.2l.9.9c.1.1.5.5.6.5.1 0 .6-.3.7-.4.4-.2.7-.5 1-.7.6-.6 1.2-1.3 1.2-2.1z" /><path d="M7 15.4s4.2 2.4 8.5.2c0 .1-3.6 10.5-8.5-.2z" style="fill:#fff" /></symbol><symbol viewBox="0 0 47.758 47.761" id="equatio-svg-upgrade-draw-shapes"><circle style="fill:#fff" cx="23.879" cy="23.88" r="23.879" /><path style="fill:#5696a4" d="M18.58 27.813c-.166 0-.248-.138-.248-.305V26.7c0-.167.082-.304.248-.304s.248.137.248.304v.808c0 .167-.082.305-.248.305zM18.58 25.791c-.166 0-.248-.135-.248-.304v-1.212c0-.167.082-.304.248-.304s.248.136.248.304v1.212c0 .169-.082.304-.248.304zm0-2.427c-.166 0-.248-.134-.248-.303v-1.212c0-.167.082-.303.248-.303s.248.135.248.303v1.212c0 .17-.082.303-.248.303zm0-2.424c-.166 0-.248-.134-.248-.303v-1.212c0-.167.082-.303.248-.303s.248.136.248.303v1.212c0 .168-.082.303-.248.303zm0-2.424c-.166 0-.248-.137-.248-.305v-1.212c0-.167.082-.303.248-.303s.248.135.248.303v1.212c0 .168-.082.305-.248.305zm0-2.427c-.166 0-.248-.136-.248-.303v-1.212c0-.17.082-.305.248-.305s.248.135.248.305v1.212c0 .167-.082.303-.248.303zM18.58 13.058c-.166 0-.248-.135-.248-.303v-.809c0-.167.082-.304.248-.304s.248.137.248.304v.809c0 .167-.082.303-.248.303zM34.944 28.596c0 .165-.137.247-.305.247h-.809c-.168 0-.305-.083-.305-.247 0-.167.137-.249.305-.249h.809c.168 0 .305.082.305.249zM32.922 28.596c0 .165-.137.247-.303.247h-1.215c-.166 0-.303-.083-.303-.247 0-.167.137-.249.303-.249h1.215c.166 0 .303.082.303.249zm-2.426 0c0 .165-.137.247-.303.247h-1.211c-.168 0-.305-.083-.305-.247 0-.167.137-.249.305-.249h1.211c.167 0 .303.082.303.249zm-2.424 0c0 .165-.137.247-.307.247h-1.211c-.166 0-.301-.083-.301-.247 0-.167.135-.249.301-.249h1.211c.171 0 .307.082.307.249zm-2.427 0c0 .165-.135.247-.301.247h-1.213c-.17 0-.305-.083-.305-.247 0-.167.135-.249.305-.249h1.213c.166 0 .301.082.301.249zm-2.424 0c0 .165-.137.247-.307.247h-1.209c-.168 0-.303-.083-.303-.247 0-.167.135-.249.303-.249h1.209c.17 0 .307.082.307.249zM20.188 28.596c0 .165-.135.247-.303.247h-.809c-.168 0-.301-.083-.301-.247 0-.167.133-.249.301-.249h.809c.168 0 .303.082.303.249zM18.428 28.666c.119.118.078.27-.039.389l-.857.858c-.121.119-.271.158-.389.04-.119-.118-.08-.272.039-.391l.857-.858c.117-.116.27-.156.389-.038zm-1.717 1.715c.121.119.08.271-.037.39l-.857.858c-.117.12-.271.158-.391.038-.115-.118-.078-.271.041-.39l.859-.857c.116-.119.27-.159.385-.039zm-1.713 1.715c.117.117.078.272-.037.389l-.859.858c-.119.118-.271.157-.389.039-.119-.117-.078-.271.041-.389l.855-.858c.118-.12.272-.157.389-.039zM12.852 34.238c.121.121.082.272-.037.391l-.57.573c-.119.118-.273.156-.391.038-.117-.119-.078-.271.041-.39l.57-.57c.119-.119.272-.159.387-.042z" /><path style="fill:#075574" d="M28.914 18.734H11.936c-.205 0-.389-.081-.469-.271a.484.484 0 0 1 .111-.531l6.469-6.475a.514.514 0 0 1 .359-.155h16.977c.203 0 .389.14.469.329a.53.53 0 0 1-.111.56l-6.469 6.431c-.096.096-.223.112-.358.112zm-15.756-.99h15.547l5.457-5.449H18.61l-5.452 5.449z" /><path style="fill:#075574" d="M29.479 35.327c0 .28-.223.505-.502.505H11.899a.505.505 0 0 1-.504-.505V18.251c0-.28.226-.507.504-.507h17.078c.279 0 .502.228.502.507v17.076zm-17.09-.488H28.49V18.734H12.389v16.105z" /><path style="fill:#075574" d="M28.914 35.832H11.936a.57.57 0 0 1-.541-.541V18.312a.51.51 0 0 1 .166-.356l6.478-6.486a.538.538 0 0 1 .367-.166h16.977c.275 0 .541.262.541.542v16.978a.51.51 0 0 1-.166.356l-6.479 6.487a.539.539 0 0 1-.365.165zm-16.525-.993h16.316l6.227-6.227V12.295H18.61l-6.221 6.229v16.315z" /><path style="fill:#075574" d="M21.313 27.159c-.068-.247-.017-.85.09-1.412l.613-3.283c.195-1.091.539-1.621.887-1.916a1.757 1.757 0 0 1 1.219-.454c.842 0 1.311.558 1.311 1.204a1.43 1.43 0 0 1-.824 1.321l-.009.044c.416.122.771.584.771 1.205 0 1.029-.85 1.715-1.748 1.715-.434 0-.82-.157-1.055-.405h-.014l-.084.559c-.082.453-.176.927-.154 1.421h-1.003zm2.248-4.707c.047 0 .086 0 .131-.017.408-.069.719-.426.719-.932 0-.312-.162-.56-.455-.56-.365 0-.666.34-.834 1.256l-.408 2.197c.139.226.4.409.719.409.477 0 .834-.417.834-.924 0-.424-.291-.695-.668-.75-.055-.006-.107 0-.166 0l.128-.679z" /></symbol><symbol viewBox="0 0 47.758 47.761" id="equatio-svg-upgrade-math-prediction"><circle style="fill:#fff" cx="23.879" cy="23.88" r="23.879" /><path style="fill:#075574" d="M23.644 12.417c-5.604 0-10.15 4.546-10.15 10.145 0 5.604 4.541 10.145 10.145 10.145 5.609.005 10.15-4.541 10.15-10.145 0-5.599-4.541-10.145-10.145-10.145zm-7.373 8.734c-.649-.747.194-3.145 2.194-4.893s4.397-2.178 5.047-1.432c.655.747-1.283 1.8-3.283 3.549-1.995 1.748-3.304 3.522-3.958 2.776z" /><path style="fill:#075574" d="M32.516 12.683c-1.289-.031-1.416-.164-1.386-1.457a.16.16 0 0 0-.159-.164h-.005a.16.16 0 0 0-.159.159c-.031 1.232-.164 1.391-1.207 1.391-.077 0-.164 0-.251-.005h-.005c-.087 0-.159.072-.159.159s.066.164.159.164c1.289.031 1.416.169 1.386 1.457a.16.16 0 0 0 .159.164h.005a.16.16 0 0 0 .159-.159c.031-1.234.169-1.392 1.207-1.392.077 0 .164 0 .251.005h.005c.087 0 .159-.072.159-.159s-.067-.158-.159-.163zM36.059 15.347c-1.667-.041-1.831-.22-1.79-1.882a.211.211 0 0 0-.205-.215h-.004a.214.214 0 0 0-.21.205c-.041 1.595-.215 1.795-1.56 1.795-.102 0-.21 0-.322-.005h-.005a.21.21 0 0 0-.005.42c1.667.041 1.831.22 1.79 1.882a.211.211 0 0 0 .205.215h.005a.21.21 0 0 0 .21-.205c.041-1.595.215-1.795 1.56-1.795.102 0 .21 0 .322.005h.005a.214.214 0 0 0 .21-.205.209.209 0 0 0-.206-.215z" /><path style="opacity:.43;fill:#075574;enable-background:new" d="M14.108 23.078c0-5.604 4.546-10.15 10.15-10.15 2.327 0 4.469.782 6.182 2.102a10.102 10.102 0 0 0-6.796-2.613c-5.604 0-10.15 4.546-10.15 10.145a10.12 10.12 0 0 0 3.963 8.043 10.105 10.105 0 0 1-3.349-7.527z" /><path style="fill:#075574" d="M30.936 33.612c-.225-.588-1.452-1.099-3.221-1.411a9.135 9.135 0 0 1-.91.332c.69.082 1.104.189 1.104.307 0 .261-1.999.465-4.469.465s-4.469-.21-4.469-.465c0-.133.542-.256 1.411-.337a10.708 10.708 0 0 1-.808-.302c-1.769.312-2.996.823-3.221 1.411-1.416.266-2.27.608-2.27.987 0 .844 4.28 1.524 9.562 1.524s9.562-.685 9.562-1.524c-.001-.374-.855-.721-2.271-.987z" /><path style="fill:#fff" d="M26.145 24.962a.543.543 0 0 1-.406-.182l-3.2-3.601a.546.546 0 0 1 .406-.905h5.347a.543.543 0 1 1 0 1.086h-4.137l2.397 2.696a.544.544 0 0 1-.407.906z" /><path style="fill:#fff" d="M28.291 28.563h-5.347a.545.545 0 0 1-.406-.905l3.2-3.601a.544.544 0 0 1 .812.722l-2.397 2.696h4.137a.543.543 0 0 1 .001 1.088z" /></symbol><symbol viewBox="0 0 47.758 47.761" id="equatio-svg-upgrade-speech-to-math"><circle style="fill:#fff" cx="23.879" cy="23.88" r="23.879" /><path style="fill:#075574" d="M31.987 19.99c0-.264-.25-.481-.555-.481h-1.11c-.305 0-.555.217-.555.481V23.196h-.002c-.054 2.877-2.771 5.204-6.105 5.204-3.334 0-6.051-2.327-6.105-5.204h-.003V19.99c0-.264-.25-.481-.555-.481h-1.11c-.305 0-.555.217-.555.481v2.653c0 .035.005.069.013.102a6.328 6.328 0 0 0-.013.366c0 3.658 3.144 6.678 7.218 7.149v2.959h-2.5c-.305 0-.555.217-.555.481v.962c0 .264.25.481.555.481H27.267c.305 0 .555-.217.555-.481V33.7c0-.264-.25-.481-.555-.481H24.77V30.26c4.074-.471 7.218-3.491 7.218-7.149a6.36 6.36 0 0 0-.013-.366.432.432 0 0 0 .013-.102V19.99z" /><path style="fill:#075574" d="M23.659 26.673c2.29 0 4.164-1.623 4.164-3.608v-8.418c0-1.984-1.874-3.608-4.164-3.608s-4.164 1.623-4.164 3.608v8.418c0 1.985 1.874 3.608 4.164 3.608z" /></symbol></defs></svg>';
  },
  ,
  ,
  ,
  function (t, o, e) {
    var r = e(42),
      a = ("string" == typeof r && (r = [[t.i, r, ""]]), {});
    (a.insert = "head"), (a.singleton = !1), e(13)(r, a);
    r.locals && (t.exports = r.locals);
  },
  function (t, o, e) {
    (t.exports = e(12)(void 0)).push([
      t.i,
      ".equatio-toolbar{display:flex;align-items:center;background:#f2f2f2;border-top:1px solid #d3d3d3;height:53px;width:100%}.equatio-toolbar--small{width:auto}.equatio-toolbar-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;height:53px;width:53px;cursor:pointer;position:relative}.equatio-toolbar-button:hover,.equatio-toolbar-button:active{background-color:#d8d8d8}.equatio-toolbar-button[disabled]{opacity:.3;cursor:default}.equatio-toolbar-button--selected{border-top:4px solid #00b7ff}.equatio-toolbar-button--selected.equatio-toolbar-button--with-arrow{background-position-y:2px}.equatio-toolbar-button--selected .equatio-toolbar-button__icon{margin-top:-4px}.equatio-toolbar-button__icon{color:#494949}.equatio-toolbar-button--with-arrow{background:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='5px' width='5px' viewBox='0 0 3.9 3.4'>%3Cpolygon style='fill:%23494949;' points='2,0 3.9,3.4 0,3.4 '/%3E</svg>\") 50% 6px no-repeat;box-sizing:content-box;margin-top:4px}.equatio-logo-button{display:flex;align-items:center;-moz-justify-content:center;justify-content:center;font-family:Roboto,Arial,sans-serif;position:relative;background:#00b7ff;padding:0 14px;height:53px;cursor:pointer;border:0;width:150px;color:#fff;font-weight:500;text-transform:uppercase;-webkit-font-smoothing:antialiased;font-size:.9em;border-radius:0}.equatio-logo-button:hover{-webkit-filter:brightness(105%)}.equatio-logo-button.equatio-logo-button--small{padding:0 7px;width:53px}@-webkit-keyframes logo-button-expiring{10%{background:#ffce00}45%{background:#ffce00}55%{background:#00b7ff}100%{background:#00b7ff}}@keyframes logo-button-expiring{10%{background:#ffce00}45%{background:#ffce00}55%{background:#00b7ff}100%{background:#00b7ff}}@-webkit-keyframes logo-button-expiring-hover{10%{background:#ffd833}45%{background:#ffd833}55%{background:#33c5ff}100%{background:#33c5ff}}@keyframes logo-button-expiring-hover{10%{background:#ffd833}45%{background:#ffd833}55%{background:#33c5ff}100%{background:#33c5ff}}@-webkit-keyframes logo-button-image-expiring{10%{opacity:0}45%{opacity:0}55%{opacity:1}100%{opacity:1}}@keyframes logo-button-image-expiring{10%{opacity:0}45%{opacity:0}55%{opacity:1}100%{opacity:1}}@-webkit-keyframes logo-button-image-text{10%{opacity:1}45%{opacity:1}55%{opacity:0}100%{opacity:0}}@keyframes logo-button-image-text{10%{opacity:1}45%{opacity:1}55%{opacity:0}100%{opacity:0}}.equatio-logo-button--expiring{-webkit-animation:logo-button-expiring 20s infinite;animation:logo-button-expiring 20s infinite;-webkit-animation-delay:5s;animation-delay:5s}.equatio-logo-button--expiring .equatio-logo-button__logo{-webkit-animation:logo-button-image-expiring 20s infinite;animation:logo-button-image-expiring 20s infinite;-webkit-animation-delay:5s;animation-delay:5s}.equatio-logo-button--expiring:before{-webkit-animation:logo-button-image-text 20s infinite;animation:logo-button-image-text 20s infinite;-webkit-animation-delay:5s;animation-delay:5s;position:absolute;content:attr(data-message);display:block;opacity:0;left:0;right:0;text-align:center;margin:auto 22px auto 12px}.equatio-logo-button__logo{color:#fff;height:25px;pointer-events:none}.equatio-logo-button__chevron{color:#fff;height:8px;margin-left:5px;pointer-events:none;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out, -webkit-transform .3s ease-in-out}.equatio-logo-button__chevron--expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.equatio-toolbar__buttonset{display:block;border:0;padding:0;margin:0}.equatio-toolbar__buttonset__legend{display:flex;align-items:center;-moz-justify-content:center;justify-content:center;font-family:Roboto,Arial,sans-serif;height:53px;padding:0;position:absolute;width:90px;color:#484a4f}.equatio-toolbar__buttonset__list{display:flex;list-style-type:none;margin:0;padding:0;height:53px;margin:0 20px}.equatio-toolbar__buttonset__list--with-legend{margin:0 0 0 90px}.equatio-toolbar__buttonset__list__item{display:flex;align-items:center;-moz-justify-content:center;justify-content:center}.equatio-flyout-menu{list-style-type:none;margin:0;padding:0;background:#f2f2f2;max-width:280px;padding:10px 0;visibility:visible;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0);transition:visibility .3s ease-in-out,-webkit-transform .3s ease-in-out,-webkit-clip-path .3s ease-in-out;transition:transform .3s ease-in-out,visibility .3s ease-in-out,clip-path .3s ease-in-out;transition:transform .3s ease-in-out,visibility .3s ease-in-out,clip-path .3s ease-in-out,-webkit-transform .3s ease-in-out,-webkit-clip-path .3s ease-in-out}.equatio-flyout-menu--hidden{-webkit-transform:translateY(100%);transform:translateY(100%);visibility:hidden;-webkit-clip-path:inset(0 0 100% 0);clip-path:inset(0 0 100% 0)}.equatio-flyout-menu__link{color:#494949 !important;text-decoration:none !important}.equatio-flyout-menu__link{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;font-family:\"Open Sans\",Arial,sans-serif;-webkit-font-smoothing:antialiased;display:block;width:100%;text-align:left;font-size:1em;padding:10px;cursor:pointer;box-sizing:border-box}.equatio-flyout-menu__link:hover{color:#fff !important}.equatio-flyout-menu__link:hover{background-color:#00b7ff}.equatio-flyout-menu__link--upgrade{background-color:#71c14c !important;color:#fff !important}.equatio-flyout-menu__link--upgrade{font-weight:600}.equatio-flyout-menu__link--upgrade:hover{background-color:#64b53f !important}.equatio-flyout-menu__link--with-arrow{background:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='9px' width='9px' viewBox='0 0 6.4 7.4'>%3Cpolygon style='fill:%23494949;' points='6.5,3.7 0,7.5 0,0 '/%3E</svg>\") no-repeat calc(100% - 10px) 50%}.equatio-flyout-menu__link--with-arrow:hover{background-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='9px' width='9px' viewBox='0 0 6.4 7.4'>%3Cpolygon style='fill:%23fff;' points='6.5,3.7 0,7.5 0,0 '/%3E</svg>\")}.equatio-color-picker-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;background:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='22px' width='23px' viewBox='0 0 14 13.2'>%3Cpath style='fill:%23494949;' d='M10.5,7l-7-7L2.5,1.1L4.3,3l-4,4c-0.5,0.5-0.5,1.2,0,1.6l4.3,4.3c0.2,0.2,0.5,0.3,0.8,0.3 c0.3,0,0.6-0.1,0.8-0.3l4.3-4.3C11,8.1,11,7.4,10.5,7z M1.7,7.8l3.7-3.7l3.7,3.7H1.7z M12.4,8.9c0,0-1.6,1.7-1.6,2.7 c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C14,10.6,12.4,8.9,12.4,8.9z'/%3E</svg>\") 50% 50% no-repeat;background-size:22px;width:32px;height:32px;margin:0 5px;cursor:pointer}.equatio-color-picker-button:hover{outline:.5px solid #00b7ff}.equatio-color-picker-button[disabled]{opacity:.3;cursor:default;-webkit-filter:grayscale(100%);filter:grayscale(100%)}.equatio-color-picker-button--white{background-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='22px' width='23px' viewBox='0 0 14 13.2'>%3Cpath style='fill:%23FFF;' d='M10.5,7l-7-7L2.5,1.1L4.3,3l-4,4c-0.5,0.5-0.5,1.2,0,1.6l4.3,4.3c0.2,0.2,0.5,0.3,0.8,0.3 c0.3,0,0.6-0.1,0.8-0.3l4.3-4.3C11,8.1,11,7.4,10.5,7z M1.7,7.8l3.7-3.7l3.7,3.7H1.7z M12.4,8.9c0,0-1.6,1.7-1.6,2.7 c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C14,10.6,12.4,8.9,12.4,8.9z'/%3E</svg>\")}.equatio-toolbar-flyout-container{position:relative}.equatio-toolbar-flyout{position:absolute;opacity:0;transition:opacity .15s ease-in-out,-webkit-transform .3s ease-in-out;transition:opacity .15s ease-in-out,transform .3s ease-in-out;transition:opacity .15s ease-in-out,transform .3s ease-in-out,-webkit-transform .3s ease-in-out;background:#f2f2f2;z-index:4;box-shadow:0 0 5px 1px rgba(0,0,0,.2)}.equatio-toolbar-flyout.equatio-toolbar-flyout--shown{opacity:1;pointer-events:all;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.equatio-toolbar-flyout .equatio-toolbar__buttonset__list{margin:0;width:159px;flex-wrap:wrap;height:auto}.equatio-toolbar-flyout .equatio-toolbar__buttonset__list.equatio-toolbar__buttonset__list--vertical{max-height:200px;-moz-flex-direction:column;flex-direction:column}.equatio-toolbar-flyout-list{list-style-type:none;margin:0;padding:0}.equatio-toolbar-flyout-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0}.equatio-flyout-menu-vertical{list-style-type:none;margin:0;padding:0;min-width:200px;height:100px;overflow-y:auto}.equatio-flyout-menu-vertical-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;font-family:Roboto,Arial,sans-serif;display:flex;align-items:center;width:100%;cursor:pointer;text-align:left;font-size:.8em;font-weight:500}.equatio-flyout-menu-vertical-button:hover{background-color:#d8d8d8}.equatio-flyout-menu-vertical-button__icon{height:30px}.equatio-flyout-search{display:block;width:calc(100% - 27px);box-sizing:border-box;margin:5px;font-size:.8em;background:rgba(0,0,0,0);border:1px solid #c3c3c3;padding:5px;font-style:italic;color:#000}.equatio-flyout-search--has-value{font-style:normal}.equatio-flyout-search-close{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;position:absolute;display:block;height:12px;top:12px;right:5px}.equatio-copy-wrapper{position:relative}.equatio-copy-wrapper-menu{list-style-type:none;margin:0;padding:0;background:#fff;min-width:130px;border:1px solid #efefef;box-shadow:0 0 10px 0 rgba(187,187,187,.4);position:absolute;bottom:38px;right:0;-webkit-transform:scaleX(0) scaleY(0);transform:scaleX(0) scaleY(0);-webkit-transform-origin:bottom right;transform-origin:bottom right;transition:visibility .2s ease-in-out,-webkit-transform .2s ease-in-out;transition:visibility .2s ease-in-out,transform .2s ease-in-out;transition:visibility .2s ease-in-out,transform .2s ease-in-out,-webkit-transform .2s ease-in-out;pointer-events:none;visibility:hidden}.equatio-copy-wrapper-menu.equatio-copy-wrapper-menu--shown{pointer-events:all;visibility:visible;-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}.equatio-copy-wrapper-menu-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;font-family:\"Open Sans\",Arial,sans-serif;text-align:left;display:block;width:100%;-webkit-font-smoothing:antialiased;color:#494949;padding:10px;font-size:.9em;cursor:pointer}.equatio-copy-wrapper-menu-button:hover,.equatio-copy-wrapper-menu-button:focus{background:#f4fbfe;color:#000}.equatio-buttonset{display:flex;align-items:center;list-style-type:none;margin:0;padding:0;margin:0 20px}.equatio-buttonset.equatio-buttonset--no-margin{margin:0}.equatio-buttonset__item{margin:0 10px}.equatio-buttonset__item:last-child{margin-right:0}.equatio-buttonset__item--full-width{width:100%}.equatio-buttonset--right,.equatio-buttonset--vertical--right{-moz-flex-direction:row;flex-direction:row;-moz-justify-content:flex-end;justify-content:flex-end}.equatio-buttonset--center,.equatio-buttonset--vertical--center{-moz-flex-direction:row;flex-direction:row;-moz-justify-content:center;justify-content:center}.equatio-buttonset--vertical{display:flex;-moz-flex-direction:column;flex-direction:column;align-items:center;-moz-justify-content:center;justify-content:center;margin:20px 0}.equatio-buttonset--vertical .equatio-buttonset__item{margin:10px 0}.equatio-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;font-family:Roboto,Arial,sans-serif;position:relative;font-family:\"Open Sans\",Arial,sans-serif;font-size:17px;font-weight:600;border:2px solid #00b7ff;color:#00b7ff;padding:11px 22px;font-size:15px;background-color:#fff;border-radius:30px;display:flex;min-width:200px;justify-content:center;align-items:center;text-decoration:none;text-transform:none;box-shadow:none;letter-spacing:-0.2px;transition:background-color ease-in-out .06s;cursor:pointer}.equatio-button:enabled:hover,.equatio-button:enabled:active{background:#00b7ff;color:#fff}.equatio-button:first-child{margin-left:0}.equatio-button:last-child{margin-right:0}.equatio-button[disabled]{opacity:.6;cursor:default}.equatio-button--primary{border:2px solid #00b7ff}.equatio-button--primary:hover:enabled{background-color:#00b7ff}.equatio-button--primary:disabled{background-color:inherit !important}.equatio-button--primary:hover:enabled{color:#fff}.equatio-button--secondary{background-color:#e5e5e6;border:2px solid #e5e5e6;color:#00b7ff}.equatio-button--secondary:hover{color:#fff;background-color:#868d93;border:2px solid #868d93}.equatio-button--secondary:hover:enabled{color:#fff;background-color:#868d93;border:2px solid #868d93}.equatio-button-loading{display:flex;align-items:center;justify-content:center}.equatio-button-loading:before{content:\" \";background:url(\"data:image/svg+xml;base64,CjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgaGVpZ2h0PSc4MCcgdmlld0JveD0nMCAwIDkxMiA5MTInPjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+IC5zdDB7ZmlsbDpub25lO3N0cm9rZTojMDBCN0ZGO3N0cm9rZS13aWR0aDo1Mi41MTM4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9ICAuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzAwQjdGRjtzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30gIC5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDBCN0ZGO3N0cm9rZS13aWR0aDo0MC44MTI5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9ICA8L3N0eWxlPiAgPHBhdGggY2xhc3M9J3N0MCB2alhkbGJiV18wJyBkPSdNODMzLjMsNTEzLjRMNTIzLDgyMy44Yy01NC41LDAtODUuNiwwLTE0MCwwTDcyLjYsNTEzLjRjMC01NC41LDAtODUuNiwtMi0xNDBMMzgzLDYzLjFjNTQuNSwwLDg1LjYsMCwxNDAsMCBsMzEwLjMsMzEwLjNDODMzLjMsNDI3LjksODMzLjMsNDU5LDgzMy4zLDUxMy40eic+PC9wYXRoPiAgPHBhdGggY2xhc3M9J3N0MSB2alhkbGJiV18xJyBkPSdNMjYyLjgsNDQ1LjZMNDYxLjEsNjQzLjknPjwvcGF0aD4gIDxwYXRoIGNsYXNzPSdzdDIgdmpYZGxiYldfMicgZD0nTTQ1My40LDY1MC4yTDQwMS45LDcwMS43TDk3LjgsMzk3LjYnPjwvcGF0aD4gIDxwYXRoIGNsYXNzPSdzdDEgdmpYZGxiYldfMycgZD0nTTQ0OS4xLDYzNy43TDY0Ny40LDQzOS40Jz48L3BhdGg+ICA8cGF0aCBjbGFzcz0nc3QyIHZqWGRsYmJXXzQnIGQ9J002NTMuNyw0NDcuMUw3MDUuMiw0OTguNkw0MDEsODAyLjcnPjwvcGF0aD4gIDxwYXRoIGNsYXNzPSdzdDEgdmpYZGxiYldfNScgZD0nTTY0My4zLDQ0NC41TDQ0NSwyNDYuMic+PC9wYXRoPiAgPHBhdGggY2xhc3M9J3N0MiB2alhkbGJiV182JyBkPSdNNDUyLjgsMjM5LjhMNTA0LjIsMTg4LjRMODA4LjQsNDkyLjUnPjwvcGF0aD4gIDxwYXRoIGNsYXNzPSdzdDEgdmpYZGxiYldfNycgZD0nTTQ1Mi44LDI1My4xTDI1NC41LDQ1MS40Jz48L3BhdGg+ICA8cGF0aCBjbGFzcz0nc3QyIHZqWGRsYmJXXzgnIGQ9J00yNDguMiw0NDMuNkwxOTYuNywzOTIuMkw1MDAuOSw4OC4xJz48L3BhdGg+ICA8c3R5bGU+QHN1cHBvcnRzICgtd2Via2l0LWFwcGVhcmFuY2U6bm9uZSkgeyAudmpYZGxiYldfMHtzdHJva2UtZGFzaGFycmF5OjIzMTYgMjMxODtzdHJva2UtZGFzaG9mZnNldDoyMzE3O2FuaW1hdGlvbjp2alhkbGJiV19kcmF3XzAgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGUsdmpYZGxiYldfZmFkZSAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTt9LnZqWGRsYmJXXzF7c3Ryb2tlLWRhc2hhcnJheToyODEgMjgzO3N0cm9rZS1kYXNob2Zmc2V0OjI4MjthbmltYXRpb246dmpYZGxiYldfZHJhd18xIDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlLHZqWGRsYmJXX2ZhZGUgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGU7fS52alhkbGJiV18ye3N0cm9rZS1kYXNoYXJyYXk6NTAzIDUwNTtzdHJva2UtZGFzaG9mZnNldDo1MDQ7YW5pbWF0aW9uOnZqWGRsYmJXX2RyYXdfMiAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZSx2alhkbGJiV19mYWRlIDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlO30udmpYZGxiYldfM3tzdHJva2UtZGFzaGFycmF5OjI4MSAyODM7c3Ryb2tlLWRhc2hvZmZzZXQ6MjgyO2FuaW1hdGlvbjp2alhkbGJiV19kcmF3XzMgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGUsdmpYZGxiYldfZmFkZSAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTt9LnZqWGRsYmJXXzR7c3Ryb2tlLWRhc2hhcnJheTo1MDMgNTA1O3N0cm9rZS1kYXNob2Zmc2V0OjUwNDthbmltYXRpb246dmpYZGxiYldfZHJhd180IDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlLHZqWGRsYmJXX2ZhZGUgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGU7fS52alhkbGJiV181e3N0cm9rZS1kYXNoYXJyYXk6MjgxIDI4MztzdHJva2UtZGFzaG9mZnNldDoyODI7YW5pbWF0aW9uOnZqWGRsYmJXX2RyYXdfNSAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZSx2alhkbGJiV19mYWRlIDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlO30udmpYZGxiYldfNntzdHJva2UtZGFzaGFycmF5OjUwMyA1MDU7c3Ryb2tlLWRhc2hvZmZzZXQ6NTA0O2FuaW1hdGlvbjp2alhkbGJiV19kcmF3XzYgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGUsdmpYZGxiYldfZmFkZSAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTt9LnZqWGRsYmJXXzd7c3Ryb2tlLWRhc2hhcnJheToyODEgMjgzO3N0cm9rZS1kYXNob2Zmc2V0OjI4MjthbmltYXRpb246dmpYZGxiYldfZHJhd183IDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlLHZqWGRsYmJXX2ZhZGUgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGU7fS52alhkbGJiV184e3N0cm9rZS1kYXNoYXJyYXk6NTAzIDUwNTtzdHJva2UtZGFzaG9mZnNldDo1MDQ7YW5pbWF0aW9uOnZqWGRsYmJXX2RyYXdfOCAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZSx2alhkbGJiV19mYWRlIDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlO31Aa2V5ZnJhbWVzIHZqWGRsYmJXX2RyYXd7MTAwJXtzdHJva2UtZGFzaG9mZnNldDowO319QGtleWZyYW1lcyB2alhkbGJiV19mYWRlezAle3N0cm9rZS1vcGFjaXR5OjE7fTc3Ljc3Nzc3Nzc3Nzc3Nzc3JXtzdHJva2Utb3BhY2l0eToxO30xMDAle3N0cm9rZS1vcGFjaXR5OjA7fX1Aa2V5ZnJhbWVzIHZqWGRsYmJXX2RyYXdfMHswJXtzdHJva2UtZGFzaG9mZnNldDogMjMxNzt9NTUuNTU1NTU1NTU1NTU1NTYle3N0cm9rZS1kYXNob2Zmc2V0OiAwO30xMDAle3N0cm9rZS1kYXNob2Zmc2V0OiAwO319QGtleWZyYW1lcyB2alhkbGJiV19kcmF3XzF7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDI4Mjt9NTUuNTU1NTU1NTU1NTU1NTYle3N0cm9rZS1kYXNob2Zmc2V0OiAwO30xMDAle3N0cm9rZS1kYXNob2Zmc2V0OiAwO319QGtleWZyYW1lcyB2alhkbGJiV19kcmF3XzJ7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDUwNDt9NTUuNTU1NTU1NTU1NTU1NTYle3N0cm9rZS1kYXNob2Zmc2V0OiAwO30xMDAle3N0cm9rZS1kYXNob2Zmc2V0OiAwO319QGtleWZyYW1lcyB2alhkbGJiV19kcmF3XzN7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDI4Mjt9NTUuNTU1NTU1NTU1NTU1NTYle3N0cm9rZS1kYXNob2Zmc2V0OiAwO30xMDAle3N0cm9rZS1kYXNob2Zmc2V0OiAwO319QGtleWZyYW1lcyB2alhkbGJiV19kcmF3XzR7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDUwNDt9NTUuNTU1NTU1NTU1NTU1NTYle3N0cm9rZS1kYXNob2Zmc2V0OiAwO30xMDAle3N0cm9rZS1kYXNob2Zmc2V0OiAwO319QGtleWZyYW1lcyB2alhkbGJiV19kcmF3XzV7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDI4Mjt9NTUuNTU1NTU1NTU1NTU1NTYle3N0cm9rZS1kYXNob2Zmc2V0OiAwO30xMDAle3N0cm9rZS1kYXNob2Zmc2V0OiAwO319QGtleWZyYW1lcyB2alhkbGJiV19kcmF3XzZ7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDUwNDt9NTUuNTU1NTU1NTU1NTU1NTYle3N0cm9rZS1kYXNob2Zmc2V0OiAwO30xMDAle3N0cm9rZS1kYXNob2Zmc2V0OiAwO319QGtleWZyYW1lcyB2alhkbGJiV19kcmF3Xzd7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDI4Mjt9NTUuNTU1NTU1NTU1NTU1NTYle3N0cm9rZS1kYXNob2Zmc2V0OiAwO30xMDAle3N0cm9rZS1kYXNob2Zmc2V0OiAwO319QGtleWZyYW1lcyB2alhkbGJiV19kcmF3Xzh7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDUwNDt9NTUuNTU1NTU1NTU1NTU1NTYle3N0cm9rZS1kYXNob2Zmc2V0OiAwO30xMDAle3N0cm9rZS1kYXNob2Zmc2V0OiAwO319IH08L3N0eWxlPjwvc3ZnPg==\") 0 0 no-repeat;width:24px;height:24px;background-size:24px;margin:-4px 5px -4px -5px}.equatio-button-loading:not([disabled]):hover::before{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBoZWlnaHQ9JzgwJyB2aWV3Qm94PScwIDAgOTEyIDkxMic+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz4gLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjUyLjUxMzg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30gLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9IC5zdDJ7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo0MC44MTI5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9IDwvc3R5bGU+IDxwYXRoIGNsYXNzPSdzdDAgdmpYZGxiYldfMCcgZD0nTTgzMy4zLDUxMy40TDUyMyw4MjMuOGMtNTQuNSwwLTg1LjYsMC0xNDAsMEw3Mi42LDUxMy40YzAtNTQuNSwwLTg1LjYsLTItMTQwTDM4Myw2My4xYzU0LjUsMCw4NS42LDAsMTQwLDAgbDMxMC4zLDMxMC4zQzgzMy4zLDQyNy45LDgzMy4zLDQ1OSw4MzMuMyw1MTMuNHonPjwvcGF0aD4gPHBhdGggY2xhc3M9J3N0MSB2alhkbGJiV18xJyBkPSdNMjYyLjgsNDQ1LjZMNDYxLjEsNjQzLjknPjwvcGF0aD4gPHBhdGggY2xhc3M9J3N0MiB2alhkbGJiV18yJyBkPSdNNDUzLjQsNjUwLjJMNDAxLjksNzAxLjdMOTcuOCwzOTcuNic+PC9wYXRoPiA8cGF0aCBjbGFzcz0nc3QxIHZqWGRsYmJXXzMnIGQ9J000NDkuMSw2MzcuN0w2NDcuNCw0MzkuNCc+PC9wYXRoPiA8cGF0aCBjbGFzcz0nc3QyIHZqWGRsYmJXXzQnIGQ9J002NTMuNyw0NDcuMUw3MDUuMiw0OTguNkw0MDEsODAyLjcnPjwvcGF0aD4gPHBhdGggY2xhc3M9J3N0MSB2alhkbGJiV181JyBkPSdNNjQzLjMsNDQ0LjVMNDQ1LDI0Ni4yJz48L3BhdGg+IDxwYXRoIGNsYXNzPSdzdDIgdmpYZGxiYldfNicgZD0nTTQ1Mi44LDIzOS44TDUwNC4yLDE4OC40TDgwOC40LDQ5Mi41Jz48L3BhdGg+IDxwYXRoIGNsYXNzPSdzdDEgdmpYZGxiYldfNycgZD0nTTQ1Mi44LDI1My4xTDI1NC41LDQ1MS40Jz48L3BhdGg+IDxwYXRoIGNsYXNzPSdzdDIgdmpYZGxiYldfOCcgZD0nTTI0OC4yLDQ0My42TDE5Ni43LDM5Mi4yTDUwMC45LDg4LjEnPjwvcGF0aD4gPHN0eWxlPkBzdXBwb3J0cyAoLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUpIHsgLnZqWGRsYmJXXzB7c3Ryb2tlLWRhc2hhcnJheToyMzE2IDIzMTg7c3Ryb2tlLWRhc2hvZmZzZXQ6MjMxNzthbmltYXRpb246dmpYZGxiYldfZHJhd18wIDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlLHZqWGRsYmJXX2ZhZGUgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGU7fS52alhkbGJiV18xe3N0cm9rZS1kYXNoYXJyYXk6MjgxIDI4MztzdHJva2UtZGFzaG9mZnNldDoyODI7YW5pbWF0aW9uOnZqWGRsYmJXX2RyYXdfMSAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZSx2alhkbGJiV19mYWRlIDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlO30udmpYZGxiYldfMntzdHJva2UtZGFzaGFycmF5OjUwMyA1MDU7c3Ryb2tlLWRhc2hvZmZzZXQ6NTA0O2FuaW1hdGlvbjp2alhkbGJiV19kcmF3XzIgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGUsdmpYZGxiYldfZmFkZSAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTt9LnZqWGRsYmJXXzN7c3Ryb2tlLWRhc2hhcnJheToyODEgMjgzO3N0cm9rZS1kYXNob2Zmc2V0OjI4MjthbmltYXRpb246dmpYZGxiYldfZHJhd18zIDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlLHZqWGRsYmJXX2ZhZGUgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGU7fS52alhkbGJiV180e3N0cm9rZS1kYXNoYXJyYXk6NTAzIDUwNTtzdHJva2UtZGFzaG9mZnNldDo1MDQ7YW5pbWF0aW9uOnZqWGRsYmJXX2RyYXdfNCAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZSx2alhkbGJiV19mYWRlIDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlO30udmpYZGxiYldfNXtzdHJva2UtZGFzaGFycmF5OjI4MSAyODM7c3Ryb2tlLWRhc2hvZmZzZXQ6MjgyO2FuaW1hdGlvbjp2alhkbGJiV19kcmF3XzUgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGUsdmpYZGxiYldfZmFkZSAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTt9LnZqWGRsYmJXXzZ7c3Ryb2tlLWRhc2hhcnJheTo1MDMgNTA1O3N0cm9rZS1kYXNob2Zmc2V0OjUwNDthbmltYXRpb246dmpYZGxiYldfZHJhd182IDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlLHZqWGRsYmJXX2ZhZGUgMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGU7fS52alhkbGJiV183e3N0cm9rZS1kYXNoYXJyYXk6MjgxIDI4MztzdHJva2UtZGFzaG9mZnNldDoyODI7YW5pbWF0aW9uOnZqWGRsYmJXX2RyYXdfNyAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZSx2alhkbGJiV19mYWRlIDM2MDBtcyBsaW5lYXIgMG1zIGluZmluaXRlO30udmpYZGxiYldfOHtzdHJva2UtZGFzaGFycmF5OjUwMyA1MDU7c3Ryb2tlLWRhc2hvZmZzZXQ6NTA0O2FuaW1hdGlvbjp2alhkbGJiV19kcmF3XzggMzYwMG1zIGxpbmVhciAwbXMgaW5maW5pdGUsdmpYZGxiYldfZmFkZSAzNjAwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTt9QGtleWZyYW1lcyB2alhkbGJiV19kcmF3ezEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MDt9fUBrZXlmcmFtZXMgdmpYZGxiYldfZmFkZXswJXtzdHJva2Utb3BhY2l0eToxO303Ny43Nzc3Nzc3Nzc3Nzc3NyV7c3Ryb2tlLW9wYWNpdHk6MTt9MTAwJXtzdHJva2Utb3BhY2l0eTowO319QGtleWZyYW1lcyB2alhkbGJiV19kcmF3XzB7MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDIzMTc7fTU1LjU1NTU1NTU1NTU1NTU2JXtzdHJva2UtZGFzaG9mZnNldDogMDt9MTAwJXtzdHJva2UtZGFzaG9mZnNldDogMDt9fUBrZXlmcmFtZXMgdmpYZGxiYldfZHJhd18xezAle3N0cm9rZS1kYXNob2Zmc2V0OiAyODI7fTU1LjU1NTU1NTU1NTU1NTU2JXtzdHJva2UtZGFzaG9mZnNldDogMDt9MTAwJXtzdHJva2UtZGFzaG9mZnNldDogMDt9fUBrZXlmcmFtZXMgdmpYZGxiYldfZHJhd18yezAle3N0cm9rZS1kYXNob2Zmc2V0OiA1MDQ7fTU1LjU1NTU1NTU1NTU1NTU2JXtzdHJva2UtZGFzaG9mZnNldDogMDt9MTAwJXtzdHJva2UtZGFzaG9mZnNldDogMDt9fUBrZXlmcmFtZXMgdmpYZGxiYldfZHJhd18zezAle3N0cm9rZS1kYXNob2Zmc2V0OiAyODI7fTU1LjU1NTU1NTU1NTU1NTU2JXtzdHJva2UtZGFzaG9mZnNldDogMDt9MTAwJXtzdHJva2UtZGFzaG9mZnNldDogMDt9fUBrZXlmcmFtZXMgdmpYZGxiYldfZHJhd180ezAle3N0cm9rZS1kYXNob2Zmc2V0OiA1MDQ7fTU1LjU1NTU1NTU1NTU1NTU2JXtzdHJva2UtZGFzaG9mZnNldDogMDt9MTAwJXtzdHJva2UtZGFzaG9mZnNldDogMDt9fUBrZXlmcmFtZXMgdmpYZGxiYldfZHJhd181ezAle3N0cm9rZS1kYXNob2Zmc2V0OiAyODI7fTU1LjU1NTU1NTU1NTU1NTU2JXtzdHJva2UtZGFzaG9mZnNldDogMDt9MTAwJXtzdHJva2UtZGFzaG9mZnNldDogMDt9fUBrZXlmcmFtZXMgdmpYZGxiYldfZHJhd182ezAle3N0cm9rZS1kYXNob2Zmc2V0OiA1MDQ7fTU1LjU1NTU1NTU1NTU1NTU2JXtzdHJva2UtZGFzaG9mZnNldDogMDt9MTAwJXtzdHJva2UtZGFzaG9mZnNldDogMDt9fUBrZXlmcmFtZXMgdmpYZGxiYldfZHJhd183ezAle3N0cm9rZS1kYXNob2Zmc2V0OiAyODI7fTU1LjU1NTU1NTU1NTU1NTU2JXtzdHJva2UtZGFzaG9mZnNldDogMDt9MTAwJXtzdHJva2UtZGFzaG9mZnNldDogMDt9fUBrZXlmcmFtZXMgdmpYZGxiYldfZHJhd184ezAle3N0cm9rZS1kYXNob2Zmc2V0OiA1MDQ7fTU1LjU1NTU1NTU1NTU1NTU2JXtzdHJva2UtZGFzaG9mZnNldDogMDt9MTAwJXtzdHJva2UtZGFzaG9mZnNldDogMDt9fSB9PC9zdHlsZT48L3N2Zz4=\")}.equatio-button--white{background:#fff;border:2px solid #fff;color:#00b7ff}.equatio-button--white:enabled:hover{background:#0f86c5;border-color:#0f86c5}.equatio-button--gold{background:#e5bd13;border:2px solid #e5bd13;color:#fff}.equatio-button--gold:enabled:hover{background:#ecc41b}.equatio-button--single{margin:0}.equatio-button--sr{margin-right:5px}.equatio-button--sl{margin-left:5px}.equatio-button--small{min-width:0}.equatio-action-icons-only .equatio-button{width:32px;min-width:0;padding:0;text-indent:-9999px;overflow:hidden;height:32px;background-position:50% 50%;background-repeat:no-repeat;white-space:nowrap}.equatio-action-icons-only .equatio-button-loading-text{display:none}.equatio-action-icons-only .equatio-button-loading:before{margin:0 2px}.equatio-action-icons-only .equatio-button-edit{background-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' width='20px' viewBox='0 0 24 24'>%3Cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' fill='%2300B7FF' /%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E</svg>\")}.equatio-action-icons-only .equatio-button-edit:enabled:hover,.equatio-action-icons-only .equatio-button-edit:enabled:active{background:#00b7ff url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' width='20px' viewBox='0 0 24 24'>%3Cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' fill='%23FFF' /%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E</svg>\") 50% 50% no-repeat}.equatio-action-icons-only .equatio-button-insert{background-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' width='20px' viewBox='0 0 24 24'>%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill='%2300B7FF' /%3E</svg>\")}.equatio-action-icons-only .equatio-button-insert:enabled:hover,.equatio-action-icons-only .equatio-button-insert:enabled:active{background:#00b7ff url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' width='20px' viewBox='0 0 24 24'>%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill='%23FFF' /%3E</svg>\") 50% 50% no-repeat}.equatio-button.equatio-copy-button{font-family:\"Open Sans\",Arial,sans-serif;text-transform:none;padding:0;box-sizing:border-box;height:36px;width:36px;-webkit-font-smoothing:antialiased}.equatio-copy-button__icon{height:20px}.equatio-button--sign-in-th{width:100%;color:#484848}.equatio-button--sign-in-th::before{position:relative;top:3px;right:1px;width:16px;float:left;margin-right:5px;margin-top:-2px}.equatio-button--sign-in-th--twitter::before{top:1px}.equatio-button--sign-in-th--google::before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNMTcuNjQsOS4yYTEwLjM0MSwxMC4zNDEsMCwwLDAtLjE2NC0xLjg0MUg5djMuNDgxaDQuODQ0YTQuMTQsNC4xNCwwLDAsMS0xLjgsMi43MTZWMTUuODJoMi45MDlBOC43NzcsOC43NzcsMCwwLDAsMTcuNjQsOS4yWiIgZmlsbD0iIzQyODVmNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTksMThhOC41OTIsOC41OTIsMCwwLDAsNS45NTYtMi4xOGwtMi45MDktMi4yNThBNS40Myw1LjQzLDAsMCwxLDMuOTY0LDEwLjcxSC45NTd2Mi4zMzJBOSw5LDAsMCwwLDksMThaIiBmaWxsPSIjMzRhODUzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMy45NjQsMTAuNzFhNS4zMjEsNS4zMjEsMCwwLDEsMC0zLjQyVjQuOTU4SC45NTdhOS4wMTEsOS4wMTEsMCwwLDAsMCw4LjA4NEwzLjk2NCwxMC43MVoiIGZpbGw9IiNmYmJjMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik05LDMuNThhNC44NjIsNC44NjIsMCwwLDEsMy40NCwxLjM0NmwyLjU4MS0yLjU4MUE4LjY0OSw4LjY0OSwwLDAsMCw5LDAsOSw5LDAsMCwwLC45NTcsNC45NThMMy45NjQsNy4yOUE1LjM2NCw1LjM2NCwwLDAsMSw5LDMuNThaIiBmaWxsPSIjZWE0MzM1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMCwwSDE4VjE4SDBaIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.equatio-button--sign-in-th--microsoft::before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOC41MTcgMTguNTE3Ij4KICA8cGF0aCBmaWxsPSIjZjNmM2YzIiBkPSJNMCAwaDE4LjUxN3YxOC41MTdIMHoiLz4KICA8cGF0aCBmaWxsPSIjZjM1MzI1IiBkPSJNLjcxNy43MTdIOC45VjguOUguNzE3eiIvPgogIDxwYXRoIGZpbGw9IiM4MWJjMDYiIGQ9Ik05LjYxNy43MTdIMTcuOFY4LjlIOS42MTd6Ii8+CiAgPHBhdGggZmlsbD0iIzA1YTZmMCIgZD0iTS43MTcgOS42MTdIOC45VjE3LjhILjcxN3oiLz4KICA8cGF0aCBmaWxsPSIjZmZiYTA4IiBkPSJNOS42MTcgOS42MTdIMTcuOFYxNy44SDkuNjE3eiIvPgo8L3N2Zz4K)}.equatio-button--sign-in-th--twitter::before{height:14px;content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41MyIgaGVpZ2h0PSIxNS4wNTciIHZpZXdCb3g9IjAgMCAxOC41MyAxNS4wNTciPjxwYXRoIGQ9Ik04MC44MjcsMTEzLjUwN0ExMC43NDQsMTAuNzQ0LDAsMCwwLDkxLjY0NCwxMDIuNjljMC0uMTY1LDAtLjMyOC0uMDExLS40OTFhNy43MzUsNy43MzUsMCwwLDAsMS45LTEuOTY4LDcuNTg5LDcuNTg5LDAsMCwxLTIuMTg0LjYsMy44MTUsMy44MTUsMCwwLDAsMS42NzEtMi4xLDcuNjE5LDcuNjE5LDAsMCwxLTIuNDE0LjkyMywzLjgwNSwzLjgwNSwwLDAsMC02LjQ3OSwzLjQ2NywxMC43OTMsMTAuNzkzLDAsMCwxLTcuODM1LTMuOTcyLDMuOCwzLjgsMCwwLDAsMS4xNzcsNS4wNzUsMy43NzMsMy43NzMsMCwwLDEtMS43MjYtLjQ3NnYuMDQ4YTMuOCwzLjgsMCwwLDAsMy4wNSwzLjcyNywzLjgsMy44LDAsMCwxLTEuNzE3LjA2NSwzLjgwNiwzLjgwNiwwLDAsMCwzLjU1MiwyLjY0LDcuNjI4LDcuNjI4LDAsMCwxLTQuNzIxLDEuNjMxQTcuNzM4LDcuNzM4LDAsMCwxLDc1LDExMS44YTEwLjc2MywxMC43NjMsMCwwLDAsNS44MjcsMS43IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzUgLTk4LjQ1KSIgZmlsbD0iIzFkYTFmMiIvPjwvc3ZnPg==)}.equatio-button--sign-in-th--facebook::before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41MiIgaGVpZ2h0PSIxOC41MiIgdmlld0JveD0iMCAwIDE4LjUyIDE4LjUyIj48cGF0aCBkPSJNMjIuNTIsNS4wMjJWMjEuNUExLjAyMiwxLjAyMiwwLDAsMSwyMS41LDIyLjUySDE2Ljc3OFYxNS4zNDhoMi40MDdsLjM2LTIuOEgxNi43NzhWMTAuNzY5YzAtLjgwOS4yMjUtMS4zNjEsMS4zODUtMS4zNjFoMS40OHYtMi41YTE5LjgsMTkuOCwwLDAsMC0yLjE1Ny0uMTEsMy4zNjgsMy4zNjgsMCwwLDAtMy41OTUsMy42OTV2Mi4wNjFIMTEuNDc5djIuOGgyLjQxNFYyMi41Mkg1LjAyMkExLjAyMiwxLjAyMiwwLDAsMSw0LDIxLjVWNS4wMjJBMS4wMjIsMS4wMjIsMCwwLDEsNS4wMjIsNEgyMS41QTEuMDIyLDEuMDIyLDAsMCwxLDIyLjUyLDUuMDIyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQgLTQpIiBmaWxsPSIjM2I1OTk4Ii8+PC9zdmc+)}.equatio-button--sign-in-th--linkedin::before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41MiIgaGVpZ2h0PSIxOC41MiIgdmlld0JveD0iMCAwIDE4LjUyIDE4LjUyIj48cGF0aCBkPSJNMjEuMTQ5LDRINS4zNjdBMS4zNTIsMS4zNTIsMCwwLDAsNCw1LjMzNVYyMS4xODNBMS4zNTMsMS4zNTMsMCwwLDAsNS4zNjcsMjIuNTJIMjEuMTQ5YTEuMzU1LDEuMzU1LDAsMCwwLDEuMzcxLTEuMzM2VjUuMzM1QTEuMzU0LDEuMzU0LDAsMCwwLDIxLjE0OSw0Wk05LjQ5MywxOS43ODFINi43NDZWMTAuOTQzSDkuNDkzWk04LjEyLDkuNzM1QTEuNTkzLDEuNTkzLDAsMSwxLDkuNzEyLDguMTQyLDEuNTkzLDEuNTkzLDAsMCwxLDguMTIsOS43MzVaTTE5Ljc4MSwxOS43ODFIMTcuMDM2di00LjNjMC0xLjAyNS0uMDE5LTIuMzQ0LTEuNDI3LTIuMzQ0LTEuNDI5LDAtMS42NDgsMS4xMTctMS42NDgsMi4yNjl2NC4zNzJIMTEuMjE1VjEwLjk0M0gxMy44NXYxLjIwOGguMDM3YTIuODg2LDIuODg2LDAsMCwxLDIuNi0xLjQyOGMyLjc4MiwwLDMuMywxLjgzMSwzLjMsNC4yMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00IC00KSIgZmlsbD0iIzBlNzZhOCIvPjwvc3ZnPg==)}.equatio-button--sign-in-th--google:hover:before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy42NCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE3LjY0IDE4Ij48cGF0aCBkPSJNLTgxOS4wNDIsNjUxLjg1MWE4Ljk5LDguOTksMCwwLDEtLjk1OC00LjA0Miw4Ljk4Nyw4Ljk4NywwLDAsMSwuOTU4LTQuMDQyQTksOSwwLDAsMS04MTEsNjM4LjgwOWE4LjY1Myw4LjY1MywwLDAsMSw2LjAyMiwyLjM0NGwtMi41ODEsMi41ODJBNC44NjQsNC44NjQsMCwwLDAtODExLDY0Mi4zODhhNS4zNjQsNS4zNjQsMCwwLDAtNS4wMzYsMy43MTEsNS40MSw1LjQxLDAsMCwwLS4yODIsMS43MSw1LjQxLDUuNDEsMCwwLDAsLjI4MiwxLjcxQTUuMzY1LDUuMzY1LDAsMCwwLTgxMSw2NTMuMjNhNS40MDksNS40MDksMCwwLDAsMy4wNDctLjg1OSw0LjE0MSw0LjE0MSwwLDAsMCwxLjgtMi43MTZILTgxMXYtMy40ODFoOC40NzZhMTAuMzQ4LDEwLjM0OCwwLDAsMSwuMTY0LDEuODQsOC43NzcsOC43NzcsMCwwLDEtMi42ODQsNi42MTVBOC41OTMsOC41OTMsMCwwLDEtODExLDY1Ni44MDksOSw5LDAsMCwxLTgxOS4wNDIsNjUxLjg1MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyMCAtNjM4LjgwOSkiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.equatio-button--sign-in-th--microsoft:hover:before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOC41MTcgMTguNTE3Ij4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNLjcxNy43MTdIOC45VjguOUguNzE3ek05LjYxNy43MTdIMTcuOFY4LjlIOS42MTd6TS43MTcgOS42MTdIOC45VjE3LjhILjcxN3pNOS42MTcgOS42MTdIMTcuOFYxNy44SDkuNjE3eiIvPgo8L3N2Zz4K)}.equatio-button--sign-in-th--twitter:hover:before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41MyIgaGVpZ2h0PSIxNS4wNTciIHZpZXdCb3g9IjAgMCAxOC41MyAxNS4wNTciPjxwYXRoIGQ9Ik04MC44MjcsMTEzLjUwN0ExMC43NDQsMTAuNzQ0LDAsMCwwLDkxLjY0NCwxMDIuNjljMC0uMTY1LDAtLjMyOC0uMDExLS40OTFhNy43MzUsNy43MzUsMCwwLDAsMS45LTEuOTY4LDcuNTg5LDcuNTg5LDAsMCwxLTIuMTg0LjYsMy44MTUsMy44MTUsMCwwLDAsMS42NzEtMi4xLDcuNjE5LDcuNjE5LDAsMCwxLTIuNDE0LjkyMywzLjgwNSwzLjgwNSwwLDAsMC02LjQ3OSwzLjQ2NywxMC43OTMsMTAuNzkzLDAsMCwxLTcuODM1LTMuOTcyLDMuOCwzLjgsMCwwLDAsMS4xNzcsNS4wNzUsMy43NzMsMy43NzMsMCwwLDEtMS43MjYtLjQ3NnYuMDQ4YTMuOCwzLjgsMCwwLDAsMy4wNSwzLjcyNywzLjgsMy44LDAsMCwxLTEuNzE3LjA2NSwzLjgwNiwzLjgwNiwwLDAsMCwzLjU1MiwyLjY0LDcuNjI4LDcuNjI4LDAsMCwxLTQuNzIxLDEuNjMxQTcuNzM4LDcuNzM4LDAsMCwxLDc1LDExMS44YTEwLjc2MywxMC43NjMsMCwwLDAsNS44MjcsMS43IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzUgLTk4LjQ1KSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==)}.equatio-button--sign-in-th--facebook:hover:before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41MiIgaGVpZ2h0PSIxOC41MiIgdmlld0JveD0iMCAwIDE4LjUyIDE4LjUyIj48cGF0aCBkPSJNMjIuNTIsNS4wMjJWMjEuNUExLjAyMiwxLjAyMiwwLDAsMSwyMS41LDIyLjUySDE2Ljc3OFYxNS4zNDhoMi40MDdsLjM2LTIuOEgxNi43NzhWMTAuNzY5YzAtLjgwOS4yMjUtMS4zNjEsMS4zODUtMS4zNjFoMS40OHYtMi41YTE5LjgsMTkuOCwwLDAsMC0yLjE1Ny0uMTEsMy4zNjgsMy4zNjgsMCwwLDAtMy41OTUsMy42OTV2Mi4wNjFIMTEuNDc5djIuOGgyLjQxNFYyMi41Mkg1LjAyMkExLjAyMiwxLjAyMiwwLDAsMSw0LDIxLjVWNS4wMjJBMS4wMjIsMS4wMjIsMCwwLDEsNS4wMjIsNEgyMS41QTEuMDIyLDEuMDIyLDAsMCwxLDIyLjUyLDUuMDIyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQgLTQpIiBmaWxsPSIjZmZmIi8+PC9zdmc+)}.equatio-button--sign-in-th--linkedin:hover:before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41MiIgaGVpZ2h0PSIxOC41MiIgdmlld0JveD0iMCAwIDE4LjUyIDE4LjUyIj48cGF0aCBkPSJNMjEuMTQ5LDRINS4zNjdBMS4zNTIsMS4zNTIsMCwwLDAsNCw1LjMzNVYyMS4xODNBMS4zNTMsMS4zNTMsMCwwLDAsNS4zNjcsMjIuNTJIMjEuMTQ5YTEuMzU1LDEuMzU1LDAsMCwwLDEuMzcxLTEuMzM2VjUuMzM1QTEuMzU0LDEuMzU0LDAsMCwwLDIxLjE0OSw0Wk05LjQ5MywxOS43ODFINi43NDZWMTAuOTQzSDkuNDkzWk04LjEyLDkuNzM1QTEuNTkzLDEuNTkzLDAsMSwxLDkuNzEyLDguMTQyLDEuNTkzLDEuNTkzLDAsMCwxLDguMTIsOS43MzVaTTE5Ljc4MSwxOS43ODFIMTcuMDM2di00LjNjMC0xLjAyNS0uMDE5LTIuMzQ0LTEuNDI3LTIuMzQ0LTEuNDI5LDAtMS42NDgsMS4xMTctMS42NDgsMi4yNjl2NC4zNzJIMTEuMjE1VjEwLjk0M0gxMy44NXYxLjIwOGguMDM3YTIuODg2LDIuODg2LDAsMCwxLDIuNi0xLjQyOGMyLjc4MiwwLDMuMywxLjgzMSwzLjMsNC4yMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00IC00KSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==)}.equatio-button--s1{padding:8px 15px !important;min-width:80px !important;font-size:13px !important}.equatio-button--s2{padding:11px 22px !important;min-width:95px !important;font-size:15px !important}.equatio-button--s3{padding:16px 42px !important;min-width:200px !important;font-size:17px !important}.equatio-form--center{display:flex;align-items:center;-moz-justify-content:center;justify-content:center}.equatio-logo--large{color:#00b7ff;height:55px}.equatio-link-button{font-family:Roboto,Arial,sans-serif;color:#494949;text-decoration:none;-webkit-font-smoothing:antialiased}.equatio-link-button:hover{text-decoration:underline}.equatio-link-button.equatio-link-button--with-underline{text-decoration:underline}.equatio-link-button--small{font-size:.8em}.equatio-select{font-family:\"Open Sans\",Arial,sans-serif;background:#fff url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='24px' width='24px' viewBox='0 0 24 24'>%3Cpath d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'/%3E%3Cpath d='M0-.75h24v24H0z' fill='none'/%3E</svg>\") 95% 50% no-repeat;border:1px solid #dadada;padding:5px 30px 5px 10px;-webkit-appearance:none;font-size:.8em;border-radius:3px;display:block;color:#666a70;background-size:15px}.equatio-select--full-width{width:100%}.equatio-fieldset{border:0;padding:0;margin:0}@-webkit-keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0}}@-webkit-keyframes vjXdlbbW_fade{0%{stroke-opacity:1}77.77777777777777%{stroke-opacity:1}100%{stroke-opacity:0}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1}77.77777777777777%{stroke-opacity:1}100%{stroke-opacity:0}}@-webkit-keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset:2317}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset:2317}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@-webkit-keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset:282}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset:282}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@-webkit-keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset:504}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset:504}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@-webkit-keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset:282}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset:282}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@-webkit-keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset:504}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset:504}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@-webkit-keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset:282}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset:282}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@-webkit-keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset:504}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset:504}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@-webkit-keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset:282}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset:282}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@-webkit-keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset:504}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset:504}55.55555555555556%{stroke-dashoffset:0}100%{stroke-dashoffset:0}}@-webkit-keyframes rotate{20%{-webkit-transform:rotateY(180deg)}30%{-webkit-transform:rotateY(360deg)}100%{-webkit-transform:rotateY(360deg)}}.equatio-save-loading-spinner{padding:0;width:36px;height:36px;border-radius:50%;margin:5px;background:#28d88c url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='27px' width='27px' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat}.equatio-loading-spinner{display:flex;align-items:center;-moz-justify-content:center;justify-content:center;-moz-flex-direction:column;flex-direction:column;box-sizing:border-box;background:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80px' width='80px' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%2300b7ff;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%2300b7ff;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%2300b7ff;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat;padding-top:100px;background-size:80px}.equatio-loading-spinner.equatio-loading-spinner--white{background-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80px' width='80px' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\")}.equatio-loading-spinner.equatio-loading-spinner--white .equatio-loading-spinner__message{color:#fff}.equatio-drawer__content__pane__spinner{height:200px}.equatio-drawer__content__pane__spinner .equatio-loading-spinner__icon{height:80px;-webkit-animation-name:rotate;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out}.equatio-loading-spinner__message{font-family:\"Open Sans\",Arial,sans-serif;color:#00b7ff;font-weight:600;-webkit-font-smoothing:antialiased}.equatio-error{font-size:.8em;color:#e51010}.equatio-radio-checkbox{-webkit-appearance:none;cursor:pointer}.equatio-radio-checkbox:hover:before{-webkit-filter:drop-shadow(1px 1px 2px #666);filter:drop-shadow(1px 1px 2px #666)}.equatio-radio-checkbox:checked:before{content:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='25px' width='36px' viewBox='0 0 24.905 16.056'>%3Cg%3E\t%3Cpath fill='%236BC9F1' d='M22,7.504c0,2.485-2.015,4.5-4.5,4.5h-13c-2.485,0-4.5-2.015-4.5-4.5l0,0c0-2.485,2.015-4.5,4.5-4.5h13\t\tC19.985,3.004,22,5.018,22,7.504L22,7.504z'/%3E\t%3Cg%3E\t\t%3Cg%3E\t\t\t\t\t\t%3Ccircle fill='%2340B0E5' cx='17.029' cy='7.864' r='6.548'/%3E\t\t%3C/g%3E\t\t%3Cg opacity='0.04'%3E\t\t\t%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='17.0286' y1='14.4113' x2='17.0286' y2='1.3161'%3E\t\t\t\t%3Cstop  offset='0' style='stop-color:%23000000'/%3E\t\t\t\t%3Cstop  offset='0.1375' style='stop-color:%23000000;stop-opacity:0.8625'/%3E\t\t\t\t%3Cstop  offset='1' style='stop-color:%23000000;stop-opacity:0'/%3E\t\t\t%3C/linearGradient%3E\t\t\t%3Cpath fill='url(%23SVGID_1_)' d='M17.029,1.643c3.43,0,6.22,2.79,6.22,6.22c0,3.43-2.79,6.22-6.22,6.22s-6.22-2.79-6.22-6.22\t\t\t\tC10.808,4.434,13.599,1.643,17.029,1.643 M17.029,1.316c-3.616,0-6.548,2.932-6.548,6.548c0,3.616,2.931,6.548,6.548,6.548\t\t\t\tc3.616,0,6.548-2.931,6.548-6.548C23.576,4.248,20.645,1.316,17.029,1.316L17.029,1.316z'/%3E\t\t%3C/g%3E\t%3C/g%3E%3C/g%3E</svg>\")}.equatio-radio-checkbox:before{content:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='25px' width='36px' viewBox='0 0 24.905 16.056'>%3Cg style='    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);'%3E\t%3Cpath opacity='0.26' fill='%23221F1F' d='M24.905,8.159c0,2.531-2.049,5-4.576,5H7.22c-2.527,0-4.576-2.469-4.576-5l0,0\t\tc0-2.531,2.049-5,4.576-5h13.109C22.856,3.159,24.905,5.627,24.905,8.159L24.905,8.159z'/%3E\t%3Cg%3E\t\t%3Cg%3E\t\t\t%3Ccircle fill='%23FBFBFB' cx='7.864' cy='7.864' r='6.548'/%3E\t\t%3C/g%3E\t\t%3Cg%3E\t\t\t%3Ccircle fill='%23F1F1F1' cx='7.864' cy='7.864' r='6.548'/%3E\t\t%3C/g%3E\t\t%3Cg opacity='0.04'%3E\t\t\t%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='7.8637' y1='14.4113' x2='7.8637' y2='1.3161'%3E\t\t\t\t%3Cstop  offset='0' style='stop-color:%23000000'/%3E\t\t\t\t%3Cstop  offset='0.1375' style='stop-color:%23000000;stop-opacity:0.8625'/%3E\t\t\t\t%3Cstop  offset='1' style='stop-color:%23000000;stop-opacity:0'/%3E\t\t\t%3C/linearGradient%3E\t\t\t%3Cpath fill='url(%23SVGID_1_)' d='M7.864,1.643c3.43,0,6.22,2.79,6.22,6.22c0,3.43-2.79,6.22-6.22,6.22c-3.43,0-6.22-2.79-6.22-6.22\t\t\t\tC1.643,4.434,4.434,1.643,7.864,1.643 M7.864,1.316c-3.616,0-6.548,2.932-6.548,6.548c0,3.616,2.931,6.548,6.548,6.548\t\t\t\ts6.548-2.931,6.548-6.548C14.411,4.248,11.48,1.316,7.864,1.316L7.864,1.316z'/%3E\t\t%3C/g%3E\t\t%3Cg opacity='0.12'%3E\t\t\t%3ClinearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='7.8637' y1='14.4113' x2='7.8637' y2='1.3161'%3E\t\t\t\t%3Cstop  offset='0' style='stop-color:%23FFFFFF;stop-opacity:0'/%3E\t\t\t\t%3Cstop  offset='0.8625' style='stop-color:%23FFFFFF;stop-opacity:0.8625'/%3E\t\t\t\t%3Cstop  offset='1' style='stop-color:%23FFFFFF'/%3E\t\t\t%3C/linearGradient%3E\t\t\t%3Cpath fill='url(%23SVGID_2_)' d='M7.864,1.643c3.43,0,6.22,2.79,6.22,6.22c0,3.43-2.79,6.22-6.22,6.22c-3.43,0-6.22-2.79-6.22-6.22\t\t\t\tC1.643,4.434,4.434,1.643,7.864,1.643 M7.864,1.316c-3.616,0-6.548,2.932-6.548,6.548c0,3.616,2.931,6.548,6.548,6.548\t\t\t\ts6.548-2.931,6.548-6.548C14.411,4.248,11.48,1.316,7.864,1.316L7.864,1.316z'/%3E\t\t%3C/g%3E\t%3C/g%3E%3C/g%3E</svg>\");display:block}.equatio-text-input{font-family:\"Open Sans\",Arial,sans-serif;background:rgba(0,0,0,0);border:0;border-bottom:2px solid #00b7ff;font-size:.8em;padding:5px 0;color:#666a70}.equatio-text-input[disabled]{background:#f3f3f3;color:#666a70}.equatio-toolbar-button--premium[disabled]{opacity:1}.equatio-toolbar-button--premium[disabled] .equatio-toolbar-button__icon{opacity:.3}.equatio-premium-icon{height:24px;width:24px;color:#00b7ff}.equatio-toolbar-button .equatio-premium-icon{position:absolute;top:-10px;right:-10px;-webkit-transform:scale(0.8);transform:scale(0.8)}.equatio-toolbar-button.equatio-toolbar-button--selected .equatio-premium-icon{top:-12px;right:-12px}@-moz-document url-prefix(){textarea:focus,input:focus{outline:1px solid highlight}}.equatio-drawer{display:flex;-moz-flex-direction:column;flex-direction:column;font-size:15px;background:#fff;position:relative;box-shadow:0 -2px 15px 0 rgba(50,50,50,.35);visibility:visible;transition:visibility .3s ease-in-out,-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out,visibility .3s ease-in-out;transition:transform .3s ease-in-out,visibility .3s ease-in-out,-webkit-transform .3s ease-in-out}.equatio-drawer--hidden{visibility:hidden;-webkit-transform:translateY(calc(100% + 20px));transform:translateY(calc(100% + 20px))}.equatio-drawer__content{padding:0 5px;display:flex;flex:1}.equatio-drawer__handle{display:flex;align-items:center;width:100px;justify-content:center;padding:10px 0 5px;margin:0 auto;cursor:ns-resize}.equatio-drawer__handle:hover .equatio-drawer__handle__image{color:#90969c}.equatio-drawer__handle__image{height:4px;color:#c6c9cc;pointer-events:none}.equatio-drawer__content__pane{display:flex;flex:1;-moz-flex-direction:column;flex-direction:column;position:relative}.equatio-drawer-content-pane-separator{background:rgba(0,0,0,.12);width:1px;-webkit-clip-path:inset(20% 0px 10% 0px);clip-path:inset(20% 0px 10% 0px)}.equatio-drawer__content__pane--hidden{display:none}.equatio-drawer__content__pane--large{flex:2}.equatio-drawer__title{display:flex;align-items:center;margin:0;-webkit-font-smoothing:antialiased;font-size:1.3em;font-weight:500;min-height:41px}.equatio-input-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;width:48px;height:48px;cursor:pointer}.equatio-input-button:enabled:hover .equatio-input-button__icon{color:#e5e5e5}.equatio-input-button:enabled:hover .equatio-input-button__icon.equatio-input-button__icon--red{color:#860909}.equatio-input-button:enabled:hover .equatio-input-button__icon.equatio-input-button__icon--blue{color:#33c5ff}.equatio-input-button[disabled]{opacity:.3;cursor:default}.equatio-input-button--small{width:48px;height:48px}.equatio-input-button--small .equatio-input-button__icon{width:48px;height:48px}.equatio-input-button--with--menu{padding-right:10px}.equatio-input-button__icon{color:#f2f2f2;width:48px;height:48px;transition:box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1)}.equatio-input-button__icon--red{color:#e51010}.equatio-input-button__icon--blue{color:#00b7ff}.equatio-input-button--fixed{position:absolute;top:20px;right:20px}.equatio-input-button--fixed[data-balloon]{position:absolute !important}.equatio-input-area{padding:0 15px;display:flex;-moz-flex-direction:column;flex-direction:column;flex:1}.equatio-mathquill-placeholder-text-paragraph{margin:2px 0 5px}.equatio-palette-wrapper{display:flex;margin:0 5px 0 10px}.equatio-hint-tip{flex:1;display:flex;align-items:center}.equatio-hint-tip__texthelper{height:42px;margin:10px 5px 0 0}.equatio-hint-tip-description{font-family:\"Open Sans\",Arial,sans-serif;background:#eef1f5;padding:7px;color:#000;-webkit-font-smoothing:antialiased;position:relative;border-radius:10px;margin:0 10px 0 13px;font-size:.9em}.equatio-hint-tip-description:before{top:12px;left:-14px;content:\"\";position:absolute;width:0;height:0;border-style:solid;border-width:0px 10px 10px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #eef1f5 rgba(0,0,0,0);border-style:inset;-webkit-transform:rotate(270deg);transform:rotate(270deg);background:#fff}.equatio-drawer-contextual-icons{margin:0;padding:0 0 0 20px;display:flex;flex:1;list-style-type:none;margin-left:10px;align-items:center}.equatio-drawer-contextual-icons--right{justify-content:flex-end}.equatio-drawer-contextual-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;background:rgba(0,0,0,0);width:36px;height:36px}.equatio-drawer-contextual-button:enabled:hover{cursor:pointer}.equatio-drawer-contextual-button:enabled:hover .equatio-drawer-contextual-icon{color:#e5e5e5}.equatio-drawer-contextual-button[disabled]{opacity:.5}.equatio-drawer-contextual-icons-item{display:flex}.equatio-drawer-contextual-icons-item:not(:last-child){margin-right:8px}.equatio-drawer-contextual-icon{width:36px;height:36px;color:#f2f2f2;transition:color ease-in-out .06s}.equatio-drawer-contextual-icons-item-separator{display:flex;align-items:center;justify-content:center;margin:0 23px 0 15px}.equatio-drawer-smart-contextual-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background-color ease-in-out .06s;cursor:pointer}.equatio-drawer-smart-contextual-button:hover{background:#e5e5e5}.equatio-drawer-smart-contextual-button:disabled{opacity:.5}.equatio-drawer-smart-contextual-button__icon{max-width:15px;max-height:15px;width:36px;height:36px}.equatio-drawer-smart-contextual-separator{width:1px;height:28px}.equatio-fixed-close-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1)}.equatio-fixed-close-button:hover{background-color:rgba(158,158,158,.2)}.equatio-fixed-close-button__icon{color:#707070;width:12px;height:12px}.equatio-contextual-color-picker{position:absolute;visibility:hidden;opacity:0;border-radius:10px;background-color:#fff;color:#484848;padding:15px 20px;box-shadow:0px 0px 15px 0px #a8a8a8;max-width:260px;transition:visibility 0s,opacity .1s linear}.equatio-contextual-color-picker:before{content:\"\";position:absolute;width:0;height:0;border-style:solid;border-width:0 15px 15px 15px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff rgba(0,0,0,0);border-style:inset;-webkit-transform:rotate(360deg);top:-10px;left:23px}.equatio-contextual-color-picker--shown{opacity:1;visibility:visible}.equatio-contextual-color-picker-list{list-style-type:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:10px}.equatio-contextual-color-picker-list-item{display:flex;justify-content:center}.equatio-contextual-color-picker-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;border:2px solid rgba(0,0,0,0);display:block;border-radius:50%;width:35px;height:35px;transition:border .2s cubic-bezier(0.4, 0, 1, 1);text-indent:-9999px;overflow:hidden;cursor:pointer}.equatio-contextual-color-picker-button:hover{border-color:#004c71}.equatio-favourite-popup{box-shadow:0px 0px 15px 0px rgba(168,168,168,.32);border-radius:5px;padding:10px 13px 15px;position:relative;width:295px;background:#fff}.equatio-favourite-popup::before{top:-10px;left:23px;content:\"\";position:absolute;width:0;height:0;border-style:solid;border-width:0 15px 15px 15px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff rgba(0,0,0,0);border-style:inset;-webkit-transform:rotate(360deg)}.equatio-favourite-popup-inner{display:flex;align-items:center;border:1px solid #d3d3d3}.equatio-favourite-popup-input-label{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.equatio-favourite-popup-input{font-family:\"Open Sans\",Arial,sans-serif;background:rgba(0,0,0,0);font-size:.9em;padding:8px 5px;border:0;flex:1;color:#484848}.equatio-favourite-popup-confirm,.equatio-favourite-popup-cancel{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;width:25px;height:25px;cursor:pointer;margin:0 5px}.equatio-favourite-popup-confirm:hover .equatio-favourite-popup-confirm__icon,.equatio-favourite-popup-cancel:hover .equatio-favourite-popup-confirm__icon{color:#e5e5e5}.equatio-favourite-popup-confirm__icon{width:25px;height:25px;color:#f2f2f2}.equatio-favourite-popup-warning{margin:5px 3px 10px;padding:0;color:#e24b00;font-size:.9em}.equatio-form--omnibar{display:flex;align-items:center;-moz-justify-content:center;justify-content:center;-moz-flex-direction:column;flex-direction:column;background:#f2f2f2;width:300px;padding:20px 0}.equatio-form--omnibar__subtitle{margin:0 0 10px;font-family:\"Open Sans\",Arial,sans-serif;color:#484a4f;-webkit-font-smoothing:antialiased;font-size:.85em}.equatio-form--omnibar__question{font-family:\"Open Sans\",Arial,sans-serif;color:#484a4f;-webkit-font-smoothing:antialiased;border-bottom:1px solid #00b7ff;font-size:.9em;padding:2px 20px 2px 0;margin-bottom:5px;display:block}.equatio-form--omnibar__linkset{margin-top:20px}.equatio-form--omnibar__title{font-family:\"Open Sans\",Arial,sans-serif;-webkit-font-smoothing:antialiased;font-weight:600;font-size:1em;margin:20px 0 5px;color:#484a4f}.equatio-form--omnibar__title.equatio-form--omnibar__title--with-subtitle{margin-bottom:0}.equatio-form--omnibar-message{margin:0 20px}.equatio-form--omnibar-message__title{font-family:\"Open Sans\",Arial,sans-serif;-webkit-font-smoothing:antialiased;font-weight:600;font-size:1em;margin:20px 0 5px;color:#484a4f}.equatio-form--omnibar-message__text{margin:0 0 10px;font-family:\"Open Sans\",Arial,sans-serif;color:#484a4f;-webkit-font-smoothing:antialiased;font-size:.85em}.equatio-form--omnibar-message__list{list-style-type:none;margin:0;padding:0;width:100%;box-sizing:border-box;color:#484a4f;-webkit-font-smoothing:antialiased;font-size:.95em;font-weight:600}.equatio-form--omnibar-message__list--hyphenated>li{display:flex}.equatio-form--omnibar-message__list--hyphenated>li:before{content:\"-\";display:block;margin-right:5px}.equatio-mathquill-input[disabled]{color:#979797;cursor:default}.equatio-mathquill-wrapper{width:100%;position:relative;flex:1}.equatio-mathquill-input.mq-editable-field.mq-math-mode{border:0;width:100%;top:-20px;position:relative}.equatio-mathquill-placeholder,.equatio-mathquill-input.mq-editable-field.mq-math-mode{opacity:1;transition:opacity .1s ease-in}.equatio-mathquill-input.mq-editable-field.mq-math-mode .mq-root-block{height:100%;overflow:auto;font-size:1.2em}.equatio-mathquill-placeholder{color:#a9a9a9;font-family:Roboto,Arial,sans-serif;font-size:.9em}.equatio-mathquill-input--hidden,.equatio-mathquill-placeholder--hidden{opacity:0;pointer-events:none}.equatio-latex-input{font-family:Roboto,Arial,sans-serif;display:block;width:100%;height:100%;border:0;resize:none;overflow-y:auto;font-size:.9em}.equatio-latex-input::-webkit-input-placeholder{font-size:14px;color:#a9a9a9}.equatio-latex-input::placeholder{font-size:14px;color:#a9a9a9}.equatio-latex-input::-webkit-input-placeholder{font-size:14px;color:#a9a9a9}.equatio-latex-input:-ms-input-placeholder{font-size:14px;color:#a9a9a9}.equatio-latex-input:-moz-placeholder{font-size:14px;color:#a9a9a9}.equatio-latex-input::-moz-placeholder{font-size:14px;color:#a9a9a9}.equatio-sketch-input{width:100%;position:relative;display:flex;flex:1}.equatio-sketch-input__placeholder{font-size:1.5em;color:#ccc;opacity:1;transition:opacity .3s ease-in-out}.equatio-sketch-input__placeholder--hidden{opacity:0}.equatio-sketch-input__canvas{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:200px}.equatio-sketch-input__placeholder__image{height:60px}.equatio-sketch-warning{font-size:.7em;vertical-align:middle;font-weight:400;display:block;margin:0 5px}.equatio-sketch-wrapper{flex:1;display:flex}.equatio-sketch-wrapper--left{flex:1;display:flex;-moz-flex-direction:column;flex-direction:column;margin-right:5px}.equatio-sketch-wrapper--myscript{background:#f9f9f9 url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%20%20%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%3Cg%20id%3D%22Group%22%20stroke%3D%22%23F5F6F7%22%20style%3D%22%26%2310%3B%20%20%20%20stroke%3A%20%23F0F0F0%3B%26%2310%3B%22%3E%20%20%20%20%20%20%3Cpath%20id%3D%22Shape%22%20d%3D%22M6.5%2C0%20L6.5%2C18%20M0%2C6.5%20L18%2C6.5%22/%3E%20%20%20%20%3C/g%3E%20%20%3C/g%3E%3C/svg%3E)}.equatio-sketch-wrapper--myscript .loader{width:80px !important;height:80px !important}.equatio-sketch-wrapper--right{display:flex;-moz-flex-direction:column;flex-direction:column;align-items:center;margin-top:-42px}.equatio-sketch-frame{width:100%;height:100%;border:0}.equatio-sketch-wrapper--left--disabled{background:#e7e7e7 url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4gIDxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxnIGlkPSJHcm91cCIgc3Ryb2tlPSIjRjVGNkY3Ij4gICAgICA8cGF0aCBpZD0iU2hhcGUiIGQ9Ik02LjUsMCBMNi41LDE4IE0wLDYuNSBMMTgsNi41Ii8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=\") 0 0/18px 18px;cursor:not-allowed}.equatio-prediction{list-style-type:none;margin:0;padding:0;background:#fff;box-shadow:0 0 18px 0 rgba(51,51,51,.6);border-radius:5px;max-width:300px}.equatio-prediction-button.equatio-prediction-button--selected{background-color:#00b7ff}.equatio-prediction-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;display:flex;box-sizing:border-box;width:100%;font-family:\"Open Sans\",Arial,sans-serif;font-size:.85em;font-weight:600;-webkit-font-smoothing:antialiased;letter-spacing:-0.2px;padding:10px;cursor:pointer;text-align:left}.equatio-prediction-button:focus,.equatio-prediction-button:hover{background-color:#66d4ff}.equatio-prediction-button:focus{outline-color:#0da0a0}.equatio-prediction-button__text{margin-right:5px}.equatio-prediction-button__icon{max-height:30px;max-width:none;margin:0}.equatio-prediction-button__icon-wrapper{max-width:100px;overflow:hidden;margin:0 5px}.equatio-prediction-button.overflow:after{content:\"...\";display:inline-block;position:relative;padding-left:2px;vertical-align:text-bottom}.equatio-traffic-light{display:flex;align-items:center;-moz-justify-content:flex-end;justify-content:flex-end;margin:5px 0;flex:1}.equatio-traffic-light__message{border-radius:5px;padding:5px 10px;font-size:.9em;color:#fff;font-family:Roboto,Arial,sans-serif;font-weight:500;-webkit-font-smoothing:antialiased;position:relative;margin-right:8px;opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.equatio-traffic-light__message:after{display:block;position:absolute;top:calc(50% - 9px);right:-10px}.equatio-traffic-light__message--shown{opacity:1;pointer-events:all}.equatio-traffic-light__message--ok{background-color:#28d88c}.equatio-traffic-light__message--ok:after{content:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='12px' width='10px' viewBox='0 0 6.2 7.1'>%3Cpolygon class='st0' points='6.2,3.6 0,7.1 0,0' fill='%2328d88c' /%3E</svg>\")}.equatio-traffic-light__message--meh{background-color:#e5bd13}.equatio-traffic-light__message--meh:after{content:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='12px' width='10px' viewBox='0 0 6.2 7.1'>%3Cpolygon class='st0' points='6.2,3.6 0,7.1 0,0' fill='%23e5bd13' /%3E</svg>\")}.equatio-traffic-light__message--error{background-color:#b74444}.equatio-traffic-light__message--error:after{content:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='12px' width='10px' viewBox='0 0 6.2 7.1'>%3Cpolygon class='st0' points='6.2,3.6 0,7.1 0,0' fill='%23b74444' /%3E</svg>\")}.equatio-traffic-light-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0}.equatio-traffic-light-button__icon{height:32px}.equatio-traffic-light__message_button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;text-decoration:underline;cursor:pointer;font-size:.9em;color:#fff;font-family:Roboto,Arial,sans-serif;font-weight:500;-webkit-font-smoothing:antialiased}.equatio-input-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;width:48px;height:48px;cursor:pointer}.equatio-input-button:enabled:hover .equatio-input-button__icon{color:#e5e5e5}.equatio-input-button:enabled:hover .equatio-input-button__icon.equatio-input-button__icon--red{color:#860909}.equatio-input-button:enabled:hover .equatio-input-button__icon.equatio-input-button__icon--blue{color:#33c5ff}.equatio-input-button[disabled]{opacity:.3;cursor:default}.equatio-input-button--small{width:48px;height:48px}.equatio-input-button--small .equatio-input-button__icon{width:48px;height:48px}.equatio-input-button--with--menu{padding-right:10px}.equatio-input-button__icon{color:#f2f2f2;width:48px;height:48px;transition:box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1)}.equatio-input-button__icon--red{color:#e51010}.equatio-input-button__icon--blue{color:#00b7ff}.equatio-input-button--fixed{position:absolute;top:20px;right:20px}.equatio-input-button--fixed[data-balloon]{position:absolute !important}.equatio-speech-wrapper{flex:1;display:flex;margin-bottom:-20px}.equatio-speech-wrapper--left{flex:1;display:flex;-moz-flex-direction:column;flex-direction:column;margin-right:5px}.equatio-speech-wrapper--right{display:flex;-moz-flex-direction:column;flex-direction:column;align-items:center;margin-top:-42px}.equatio-speech-area{top:-20px;position:relative;background:rgba(0,0,0,0);border:0;width:100%;flex:1;font-family:Roboto,Arial,sans-serif;font-size:.9em;resize:none}.equatio-speech-area::-webkit-input-placeholder{font-size:14px;color:#a9a9a9}.equatio-speech-area::placeholder{font-size:14px;color:#a9a9a9}.equatio-speech-area::-webkit-input-placeholder{font-size:14px;color:#a9a9a9}.equatio-speech-area:-ms-input-placeholder{font-size:14px;color:#a9a9a9}.equatio-speech-area:-moz-placeholder{font-size:14px;color:#a9a9a9}.equatio-speech-area::-moz-placeholder{font-size:14px;color:#a9a9a9}.equatio-speech-area[disabled]{color:#979797}.equatio-speech-placeholder{color:#a9a9a9;font-family:Roboto,Arial,sans-serif;font-size:.9em;opacity:1;transition:opacity .3s ease-in-out}.equatio-speech-placeholder--hidden{opacity:0;pointer-events:none}.equatio-speech-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;cursor:pointer;height:36px;width:36px}.equatio-speech-button:hover .equatio-speech-button__icon--start{color:#e5e5e5}.equatio-speech-button:hover .equatio-speech-button__icon--pause{color:#ba1313}.equatio-speech-button__icon{height:36px;width:36px}.equatio-speech-button__icon.equatio-speech-button__icon--start{color:#f2f2f2}.equatio-speech-button__icon.equatio-speech-button__icon--pause{color:#d11515}.equatio-speech-indicator{height:28px;display:none}.equatio-speech-indicator.equatio-speech-indicator--shown{display:block}.equatio-molecular-viewer{width:880px}.equatio-molecular-viewer-action-pane{position:relative;background:#fafafa 0% 0% no-repeat padding-box;width:100%;height:70px;padding:.7rem 1.2rem;display:flex;align-items:center;justify-content:space-between}.equatio-molecular-viewer-action-pane__search-wrapper{flex:1 auto}.equatio-molecular-viewer-action-pane__button-wrapper{flex:2 auto;display:flex;justify-content:space-around;padding:0 .7rem}.equatio-molecular-viewer-main{position:relative;min-height:300px;background-color:rgba(0,0,0,.295)}.equatio-molecular-viewer-footer{position:absolute;left:0;bottom:0;width:100%;justify-content:space-between;border-color:rgba(0,0,0,0);background-color:rgba(0,0,0,0)}.equatio-blur-wrapper--shown{-webkit-filter:blur(3px);pointer-events:none}.equatio-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(255,255,255,.8);display:flex;align-items:center;-moz-justify-content:center;justify-content:center;-moz-flex-direction:column;flex-direction:column;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .3s ease-in-out}.equatio-modal-overlay--shown{opacity:1;pointer-events:all;visibility:visible}.equatio-modal-popup{display:flex;-moz-flex-direction:column;flex-direction:column;min-width:640px;min-height:480px;border:0;background:#fff;box-shadow:0 0 5px 1px rgba(70,70,70,.5);position:relative}.equatio-modal-popup__close{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;display:block;position:absolute;top:10px;right:10px;padding:5px;cursor:pointer}.equatio-modal-popup__close:hover .equatio-modal-popup__close__icon{color:#35373b}.equatio-modal-popup__close__icon{height:12px;color:#666a70}.equatio-settings{display:flex;flex:1}.equatio-settings-pane{flex:1}.equatio-settings-pane--main{flex:2;padding-top:55px;overflow-y:auto}.equatio-settings-nav{display:flex;-moz-flex-direction:column;flex-direction:column;background:#f2f2f2}.equatio-settings-nav__title{font-family:\"Open Sans\",Arial,sans-serif;font-weight:500;-webkit-font-smoothing:antialiased;margin:20px 15px;color:#414042}.equatio-settings-menu{flex:1;list-style-type:none;margin:0;padding:0;margin:5px 0}.equatio-settings-menu-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;display:block;padding:10px 15px;width:100%;text-align:left;font-family:Roboto,Arial,sans-serif;font-size:.9em;color:#666a70;cursor:pointer}.equatio-settings-menu-button:hover{background:#e5e5e5}.equatio-settings-menu-button--selected{border-left:5px solid #00b7ff;background:#d8d8d8;padding-left:10px;font-weight:600}.equatio-settings-logo{color:#00b7ff;height:35px;margin:20px auto 30px;display:block}.equatio-settings-feedback{color:#666a70 !important;text-decoration:none !important}.equatio-settings-feedback{display:inline-block;font-family:Roboto,Arial,sans-serif;font-size:.9em;margin:0 15px}.equatio-settings-feedback:hover{text-decoration:underline !important}.equatio-settings-fieldset{border:0;color:#666a70;font-family:Roboto,Arial,sans-serif;margin:0 20px 10px}.equatio-settings-fieldset .equatio-select{min-width:175px}.equatio-settings-fieldset__legend{padding:0;font-weight:600}.equatio-settings-fieldset__list{list-style-type:none;margin:0;padding:0}.equatio-settings-fieldset__list__item{display:flex;align-items:center;padding:5px 0}.equatio-settings-fieldset__list__item label{flex:1;font-size:.9em}.equatio-settings-pane-message{margin:0 20px;text-align:center}.equatio-settings-pane-link{text-decoration:none !important;color:#00b7ff !important}.equatio-settings-pane-link{display:inline-block;margin:0 5px;vertical-align:middle}.equatio-settings-pane-link:hover{text-decoration:underline !important}.equatio-settings-pane-link svg{height:22px}.equatio-profile-pane-name-input{flex:1;margin:0 5px 0 0}.equatio-profile-pane-name-input:last-child{margin:0 0 0 5px}.equatio-license-pane{padding:0}.equatio-license-wrapper{padding:25px;max-width:435px}.equatio-license-emotion{display:flex;align-items:center;-moz-justify-content:center;justify-content:center;-moz-flex-direction:column;flex-direction:column}.equatio-license-emotion__graphic{height:150px}.equatio-license-wrapper__license-message{margin:0;text-align:left;padding:25px 0 10px;color:#666a70}.equatio-license-pane-list{color:#666a70}.equatio-license-pane-list__item{display:flex;align-items:left;padding-bottom:5px;display:list-item}.equatio-license-pane-list__item label{flex:1;font-size:.9em}.equatio-license-pane-list__item--square{list-style-type:square outside none}.equatio-license-pane__legend{padding:10px 0 0;font-weight:600;color:#666a70}.equatio-license-buttonset{text-align:right;margin-top:35px}.equatio-license-linkbutton{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;font-family:Roboto,Arial,sans-serif;text-transform:uppercase;color:#494949;text-decoration:none;font-size:.85em;cursor:pointer;font-weight:500;-webkit-font-smoothing:antialiased;margin-bottom:3px;margin-right:15px}.equatio-license-linkbutton:hover{text-decoration:underline}.equatio-share-pane__legend{padding:10px 0;font-weight:600;color:#666a70}.equatio-share-pane-social-buttons__list{margin:0 5px}.equatio-share-buttonset{margin:10px 0}.equatio-share-pane-social-buttons{list-style-type:none;margin:0;padding:0;display:flex;-moz-justify-content:center;justify-content:center;margin:20px 0}.equatio-share-pane-social-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;cursor:pointer}.equatio-share-pane-social-button:hover{-webkit-filter:brightness(110%)}.equatio-share-pane-social-button__image{height:38px}.equatio-share-link-selector{display:flex;margin:10px 0}.equatio-share-link-selector__input{flex:1;width:100%;font-size:1em}.equatio-share-link-selector__button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;background:#00b7ff url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='18px' width='18px' viewBox='0 0 72 72'>%3Cpath style='fill:%23FFFFFF;' d='M24,37.5V27l12,12H25.5C24.7,39,24,38.3,24,37.5z M22.5,42H36v28.5c0,0.8-0.7,1.5-1.5,1.5h-33C0.7,72,0,71.3,0,70.5v-42C0,27.7,0.7,27,1.5,27H21v13.5C21,41.3,21.7,42,22.5,42z M42.1,15h17.9c1.7,0,3.1-1.3,3.1-3V9.1C63,7.4,61.6,6,59.9,6H57V3.3C57,1.6,55.6,0,54,0h-6c-1.6,0-3,1.6-3,3.3V6h-2.9C40.4,6,39,7.4,39,9.1V12C39,13.7,40.4,15,42.1,15zM44.4,48.6H39V57h5.4V48.6z M70.5,9H66v6.1c0,1.7-1.4,2.9-3,2.9H39c-1.6,0-3-1.3-3-2.9V9h-4.5C30.7,9,30,9.7,30,10.5V27l8.4,8.4h6V24l18,18l-15,15h23.1c0.8,0,1.5-0.5,1.5-1.3V10.5C72,9.7,71.3,9,70.5,9z M55.8,42L48,34.2V39h-9v6h9v4.8L55.8,42z'/%3E</svg>\") 50% 50% no-repeat;width:32px;margin-left:5px;cursor:pointer}.equatio-share-link-selector__button:hover{-webkit-filter:brightness(110%)}.equatio-share-pane__message{margin:10px 0}.equatio-upgrade-overlay{background:#00b7ff;-webkit-transform:translateY(110%);transform:translateY(110%);transition:all .3s ease-in-out;pointer-events:none;position:fixed;bottom:0;right:0;left:0;visibility:hidden;-webkit-clip-path:inset(0 0 100% 0);clip-path:inset(0 0 100% 0)}.equatio-upgrade-overlay--with-shadow{box-shadow:0 -2px 15px 0 rgba(50,50,50,.35)}.equatio-upgrade-overlay--shown{opacity:.89;pointer-events:all;-webkit-transform:translateY(0);transform:translateY(0);-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}.equatio-upgrade-overlay-wrapper{display:flex;min-height:134px;padding:50px 0}.equatio-upgrade-overlay-section{padding:0 20px}.equatio-upgrade-overlay-section--left{flex:2;text-align:right;border-right:1px solid #94d5f4}.equatio-upgrade-overlay-section--right{flex:4}.equatio-upgrade-overlay-logo{height:55px;color:#fff}.equatio-upgrade-buttonset{margin:20px 0}.equatio-upgrade-buttonset .equatio-buttonset__item:first-child{margin-left:0}.equatio-upgrade-linkbutton{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;font-family:Roboto,Arial,sans-serif;text-transform:uppercase;color:#fff;text-decoration:none;font-size:.85em;cursor:pointer;font-weight:500;-webkit-font-smoothing:antialiased;margin-bottom:3px}.equatio-upgrade-linkbutton:hover{text-decoration:underline}.equatio-upgrade-overlay-section-message{color:#fff;-webkit-font-smoothing:antialiased;font-size:.85em;margin-right:8px}.equatio-upgrade-student-message{font-family:\"Open Sans\",Arial,sans-serif;margin:0;color:#fff;-webkit-font-smoothing:antialiased;letter-spacing:-0.5px;font-weight:600}.equatio-upgrade-teacher-message{font-family:\"Open Sans\",Arial,sans-serif;margin:0;color:#fff;-webkit-font-smoothing:antialiased;letter-spacing:-0.5px}.equatio-upgrade-iconset{list-style-type:none;margin:0;padding:0;display:flex;margin-top:15px;max-width:700px}.equatio-upgrade-iconset__item{flex:1;display:flex;align-items:center}.equatio-upgrade-iconset-image{width:50px;height:50px}.equatio-upgrade-iconset-message{margin:0 10px;color:#fff;-webkit-font-smoothing:antialiased;font-size:.9em;letter-spacing:-0.5px}.equatio-upgrade-privacy-policy{padding:10px 20px;text-align:right}.equatio-upgrade-privacy-policy a{color:#fff;font-size:.85em;-webkit-font-smoothing:antialiased;text-decoration:none}.equatio-upgrade-privacy-policy a:hover{text-decoration:underline}.equatio-upgrade-overlay{background:#00b7ff;-webkit-transform:translateY(110%);transform:translateY(110%);transition:all .3s ease-in-out;pointer-events:none;position:fixed;bottom:0;right:0;left:0;visibility:hidden;-webkit-clip-path:inset(0 0 100% 0);clip-path:inset(0 0 100% 0)}.equatio-upgrade-overlay--with-shadow{box-shadow:0 -2px 15px 0 rgba(50,50,50,.35)}.equatio-upgrade-overlay--shown{opacity:.89;pointer-events:all;-webkit-transform:translateY(0);transform:translateY(0);-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}.equatio-upgrade-overlay-wrapper{display:flex;min-height:134px;padding:50px 0}.equatio-upgrade-overlay-section{padding:0 20px}.equatio-upgrade-overlay-section--left{flex:2;text-align:right;border-right:1px solid #94d5f4}.equatio-upgrade-overlay-section--right{flex:4}.equatio-upgrade-overlay-logo{height:55px;color:#fff}.equatio-upgrade-buttonset{margin:20px 0}.equatio-upgrade-buttonset .equatio-buttonset__item:first-child{margin-left:0}.equatio-upgrade-linkbutton{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;font-family:Roboto,Arial,sans-serif;text-transform:uppercase;color:#fff;text-decoration:none;font-size:.85em;cursor:pointer;font-weight:500;-webkit-font-smoothing:antialiased;margin-bottom:3px}.equatio-upgrade-linkbutton:hover{text-decoration:underline}.equatio-upgrade-overlay-section-message{color:#fff;-webkit-font-smoothing:antialiased;font-size:.85em;margin-right:8px}.equatio-upgrade-student-message{font-family:\"Open Sans\",Arial,sans-serif;margin:0;color:#fff;-webkit-font-smoothing:antialiased;letter-spacing:-0.5px;font-weight:600}.equatio-upgrade-teacher-message{font-family:\"Open Sans\",Arial,sans-serif;margin:0;color:#fff;-webkit-font-smoothing:antialiased;letter-spacing:-0.5px}.equatio-upgrade-iconset{list-style-type:none;margin:0;padding:0;display:flex;margin-top:15px;max-width:700px}.equatio-upgrade-iconset__item{flex:1;display:flex;align-items:center}.equatio-upgrade-iconset-image{width:50px;height:50px}.equatio-upgrade-iconset-message{margin:0 10px;color:#fff;-webkit-font-smoothing:antialiased;font-size:.9em;letter-spacing:-0.5px}.equatio-upgrade-privacy-policy{padding:10px 20px;text-align:right}.equatio-upgrade-privacy-policy a{color:#fff;font-size:.85em;-webkit-font-smoothing:antialiased;text-decoration:none}.equatio-upgrade-privacy-policy a:hover{text-decoration:underline}.equatio-profile-bar{background:#f2f2f2;border-bottom:1px solid #d3d3d3;display:flex;align-items:center;padding:5px 10px}.equatio-profile-actions{list-style-type:none;margin:0;padding:0;flex:1;display:flex;align-items:center}.equatio-profile-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;display:flex;align-items:center;-moz-justify-content:center;justify-content:center;cursor:pointer;margin:0 -5px 0 0}.equatio-profile-button:hover .equatio-profile-button__image{-webkit-filter:brightness(110%);filter:brightness(110%)}.equatio-profile-button__image{border-radius:50%;border:4px solid #00b7ff}.equatio-profile-button__chevron{height:8px;margin:0 5px;-webkit-transform:rotate(180deg);transform:rotate(180deg);transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out, -webkit-transform .5s ease-in-out}.equatio-profile-button__chevron.equatio-profile-button__chevron--expanded{-webkit-transform:rotate(0);transform:rotate(0)}.equatio-profile-flyout{position:relative}.equatio-profile-flyout .equatio-flyout-menu{position:absolute;width:200px;right:-10px;top:46px;z-index:-1;-webkit-transform:translateY(0);transform:translateY(0)}.equatio-profile-flyout .equatio-flyout-menu.equatio-flyout-menu--hidden{-webkit-transform:translateY(-63px);transform:translateY(-63px)}.equatio-profile-action-spacer{flex:1;max-width:20px}.equatio-document-actions{display:flex;align-items:center}.equatio-document-action{display:flex;align-items:center}.equatio-document-action--feedback{margin:0 20px}.equatio-feedback-view-label{font-family:\"Open Sans\",Arial,sans-serif;font-size:.8em;color:#484848;cursor:pointer;-webkit-user-select:none;-webkit-font-smoothing:antialiased}.equatio-feedback-view-label--active{color:#1fbd79}.equatio-document-action--feedback .equatio-radio-checkbox{margin-left:5px}.equatio-profile-label{font-family:\"Open Sans\",Arial,sans-serif;font-size:.8em;color:#484848;-webkit-user-select:none;-webkit-font-smoothing:antialiased}.equatio-radio-checkbox--teacher:before{content:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='23px' width='37px' viewBox='2641.75 -478.762 39.262 23.523'>%3Cg id='Group_325' data-name='Group 325' transform='translate(2468.512 -525)'%3E  %3Cpath id='switch_off_path' style='fill: rgba(255,255,255,0.3); stroke: %23cecece; fill-rule: evenodd;' d='M37,10a6.957,6.957,0,0,1-7,7H10a6.957,6.957,0,0,1-7-7H3a6.957,6.957,0,0,1,7-7H30a6.957,6.957,0,0,1,7,7Z' transform='translate(175 48)'/%3E  %3Cg id='Group_324' data-name='Group 324' transform='translate(-1298 19)'%3E%3Cpath id='switch_off_button' style='fill: %2300b7ff; stroke: rgba(0,0,0,0); stroke-width: 0.5px;' d='M11.512,0A11.512,11.512,0,1,1,0,11.512,11.512,11.512,0,0,1,11.512,0Z' transform='translate(1471.488 27.488)'/%3E%3Cg id='Group_320' data-name='Group 320' transform='translate(1476.73 32.76)'%3E  %3Cpath id='Path_749' data-name='Path 749' style='fill: none;' d='M5.815,2.239,2,5.895v.477c.159.159.159.159.318,0L5.974,2.716c.159-.159.159-.159,0-.318C5.974,2.08,5.974,2.08,5.815,2.239Z' transform='translate(1.179 1.258)'/%3E  %3Cpath id='Path_750' data-name='Path 750' style='fill: none;' d='M.6,6.472v.636H1.713v.954h.636L3.461,6.79,1.872,5.2Z' transform='translate(0.354 3.066)'/%3E  %3Cpath id='Path_751' data-name='Path 751' style='fill: %23fff;' d='M9.033,1.908,7.443.318C7.125.159,6.966,0,6.649,0s-.477.159-.795.318L4.9,1.272l3.02,3.02.954-.954A.852.852,0,0,0,9.351,2.7,1.214,1.214,0,0,0,9.033,1.908Z' transform='translate(2.889)'/%3E  %3Cpath id='Path_752' data-name='Path 752' style='fill: %23fff;' d='M0,8.353v3.02H3.02L10.173,4.22,7.153,1.2ZM2.7,10.42H2.066V9.466H.954V8.83L2.225,7.558l1.59,1.59Zm4.61-7.312L3.656,6.923H3.179V6.446L6.835,2.79c.159-.159.159-.159.318,0C7.471,2.949,7.471,2.949,7.312,3.108Z' transform='translate(0 0.708)'/%3E%3C/g%3E  %3C/g%3E%3C/g%3E</svg>\")}.equatio-radio-checkbox--teacher:checked:before{content:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='23px' width='37px' viewBox='2641.5 -383.762 39.262 23.523'>%3Cg id='Group_323' data-name='Group 323' transform='translate(1166 -440)'%3E  %3Cpath id='switch_off_path' style='fill: %2382e370; stroke: %2382e370; fill-rule: evenodd;' d='M37,10a6.957,6.957,0,0,1-7,7H10a6.957,6.957,0,0,1-7-7H3a6.957,6.957,0,0,1,7-7H30a6.957,6.957,0,0,1,7,7Z' transform='translate(1473 58)'/%3E  %3Cg id='Group_322' data-name='Group 322' transform='translate(20 29)'%3E%3Cpath id='switch_off_button' style='fill: %2300b7ff; stroke: rgba(0,0,0,0); stroke-width: 0.5px;' d='M11.512,0A11.512,11.512,0,1,1,0,11.512,11.512,11.512,0,0,1,11.512,0Z' transform='translate(1471.488 27.488)'/%3E%3Cg id='Group_320' data-name='Group 320' transform='translate(1476.73 32.76)'%3E  %3Cpath id='Path_749' data-name='Path 749' style='fill: none;' d='M5.815,2.239,2,5.895v.477c.159.159.159.159.318,0L5.974,2.716c.159-.159.159-.159,0-.318C5.974,2.08,5.974,2.08,5.815,2.239Z' transform='translate(1.179 1.258)'/%3E  %3Cpath id='Path_750' data-name='Path 750' style='fill: none;' d='M.6,6.472v.636H1.713v.954h.636L3.461,6.79,1.872,5.2Z' transform='translate(0.354 3.066)'/%3E  %3Cpath id='Path_751' data-name='Path 751' style='fill: %23fff;' d='M9.033,1.908,7.443.318C7.125.159,6.966,0,6.649,0s-.477.159-.795.318L4.9,1.272l3.02,3.02.954-.954A.852.852,0,0,0,9.351,2.7,1.214,1.214,0,0,0,9.033,1.908Z' transform='translate(2.889)'/%3E  %3Cpath id='Path_752' data-name='Path 752' style='fill: %23fff;' d='M0,8.353v3.02H3.02L10.173,4.22,7.153,1.2ZM2.7,10.42H2.066V9.466H.954V8.83L2.225,7.558l1.59,1.59Zm4.61-7.312L3.656,6.923H3.179V6.446L6.835,2.79c.159-.159.159-.159.318,0C7.471,2.949,7.471,2.949,7.312,3.108Z' transform='translate(0 0.708)'/%3E%3C/g%3E  %3C/g%3E%3C/g%3E</svg>\")}.equatio-profile-input-title{font-family:\"Open Sans\",Arial,sans-serif;background:rgba(0,0,0,0);border:0;color:#333;font-size:.9em;text-overflow:ellipsis;width:175px;padding:5px}.equatio-profile-input-title::-webkit-input-placeholder{color:#95989a}.equatio-mathspace-floating-window{background:#f7f7f7;max-width:300px;box-shadow:2px 2px 31px -5px rgba(51,51,51,.4)}.equatio-mathspace-floating-header{background:#ededed;border-radius:0 0 15px 15px;display:block;margin:0;padding:10px 15px;border:0}.equatio-mathspace-floating-header__title{overflow:hidden;text-indent:-9999px;height:0;margin:0;padding:0}.equatio-mathspace-floating-move-target{cursor:move}.equatio-mathspace-floating-header__icon{height:14px;color:#acacac}.equatio-mathspace-floating-group{list-style-type:none;margin:0;padding:0;padding:10px 15px}.equatio-mathspace-floating-group-header{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;font-family:\"Open Sans\",Arial,sans-serif;display:block;width:100%;box-sizing:border-box;text-align:left;font-size:.9em;text-transform:uppercase;color:#969696;font-weight:600;-webkit-font-smoothing:antialiased;background:rgba(0,0,0,0) url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='8px' width='10px' viewBox='0 0 8.7 6.4'>%3Cpath id='Path_745' style='fill:%23969696;' d='M0,0h8.7L4.4,6.4L0,0z'/%3E</svg>\") 100% 50% no-repeat}.equatio-mathspace-floating-group-header:hover{cursor:pointer;color:#333;background:rgba(0,0,0,0) url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='8px' width='10px' viewBox='0 0 8.7 6.4'>%3Cpath id='Path_745' style='fill:%23333;' d='M0,0h8.7L4.4,6.4L0,0z'/%3E</svg>\") 100% 50% no-repeat}.equatio-mathspace-floating-group-header--collapsed{background:rgba(0,0,0,0) url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='8px' width='10px' viewBox='0 0 8.7 6.4'>%3Cpath id='Path_745' style='fill:%23969696;' d='M4.4,0l4.4,6.4H0L4.4,0z'/%3E</svg>\") 100% 50% no-repeat}.equatio-mathspace-floating-group-header--collapsed:hover{background:rgba(0,0,0,0) url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='8px' width='10px' viewBox='0 0 8.7 6.4'>%3Cpath id='Path_745' style='fill:%23333;' d='M4.4,0l4.4,6.4H0L4.4,0z'/%3E</svg>\") 100% 50% no-repeat}.equatio-mathspace-floating-iconset{list-style-type:none;margin:0;padding:0;max-height:1000px;transition:max-height 1s ease-in-out;display:grid;grid-template-columns:repeat(4, 1fr);grid-gap:5px;margin:10px 0}.equatio-mathspace-floating-iconset--collapsed{max-height:0;overflow:hidden;transition:max-height 1s cubic-bezier(0, 1, 0, 1)}.equatio-mathspace-floating-iconset-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;display:flex;align-items:center;justify-content:center;cursor:pointer;width:40px;height:40px;border-radius:50%}.equatio-mathspace-floating-iconset-button:hover{background:#ededed}.equatio-mathspace-floating-iconset-button[disabled]{opacity:.3;cursor:default}.equatio-mathspace-floating-iconset-button__icon{color:#484848;max-height:23px}.equatio-settings-fieldset[disabled]{-webkit-filter:grayscale(1.5) brightness(140%)}.equatio-settings-loading-spinner{height:100%;margin:0 auto}.equatio-settings-profile{display:flex;align-items:center}.equatio-settings-profile-image{height:52px;max-width:52px;border-radius:50%;border:4px solid #00b7ff}.equatio-settings-profile-detail{flex:1;margin:0 10px}.equatio-settings-profile-detail-name{font-size:1.2em;max-width:300px;text-overflow:ellipsis;overflow-x:hidden}.equatio-companion-discover{display:flex;-moz-flex-direction:row;flex-direction:row;align-items:center;max-height:350px;min-height:250px}.equatio-companion-discover-title{display:flex;align-items:center}.equatio-companion-discover-details{flex:1;padding:15px;height:100%;box-sizing:border-box}.equatio-companion-discover-qr{width:150px;height:150px}.equatio-companion-discover-link{color:#00b7ff;font-weight:500}.equatio-companion-discover-title-premium-icon{margin-left:7px;height:24px}.equatio-companion-discover-rotator{height:100%;width:180px}.equatio-companion-discover-compatibility-title{margin:0 0 5px;font-size:1em;font-weight:500;-webkit-font-smoothing:antialiased}.equatio-companion-discover-compatibility-table{list-style-type:none;margin:0;padding:0}.equatio-companion-discover-compatibility-table-icon{display:flex;align-items:center;padding:5px 0}.equatio-companion-discover-compatibility-table-icon__label{margin-left:5px}.equatio-companion-discover-compatibility-table-icon__image{height:32px}.equatio-companion-discover-compatibility-table-icon__image--safari{margin-bottom:-4px}.equatio-companion-discover-compatibility-table-browser-label{font-weight:500}.equatio-help-dialog{display:flex;-moz-flex-direction:column;flex-direction:column;border:1px solid #00b7ff;min-height:480px;box-shadow:-2px -1px 34px 1px rgba(0,0,0,.35)}.equatio-help-dialog-header{display:flex;background:#00b7ff}.equatio-help-dialog-draggable{flex:1;cursor:move}.equatio-help-dialog-draggable__logo{height:28px;margin:10px}.equatio-help-dialog-button-wrapper{display:flex;align-items:center}.equatio-help-dialog-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;padding:10px;cursor:pointer}.equatio-help-dialog-button:hover .equatio-help-dialog-button__icon{color:#ccf1ff}.equatio-help-dialog-back-button-icon{width:24px;height:24px;color:#fff}.equatio-help-dialog-button__icon{height:16px;width:16px;color:#fff}.equatio-help-dialog-content{display:flex;flex:1;-moz-flex-direction:row;flex-direction:row}.equatio-help-dialog-content-frame{flex:1;border:0}.equatio-academy-external-link-wrapper{width:22px;height:22px;display:inline-block}.equatio-academy-external-link{width:22px;height:22px;display:inline-block}.equatio-academy-external-link:hover .equatio-academy-external-link__icon{color:#33c5ff}.equatio-academy-external-link__icon{color:#00b7ff;width:22px;height:22px;border:0}.equatio-drawer__title .equatio-academy-external-link-wrapper{margin:0 5px}.equatio-screenshot-reader.equatio-screenshot-reader--discoverability{background:rgba(0,0,0,0)}.equatio-screenshot-reader .equatio-math-discoverability-actions{left:-5px;right:auto}.equatio-screenshot-reader .equatio-math-discoverability-action-item{position:absolute;top:-10px;left:-10px}.equatio-screenshot-reader .equatio-math-discoverability-action-item-button{background:#d11515;width:26px;height:26px;border:2px solid #960a0a;box-shadow:0 0 15px 0 #8a8989}.equatio-screenshot-reader .equatio-math-discoverability-action-item-button:hover,.equatio-screenshot-reader .equatio-math-discoverability-action-item-button:focus{background:#ea2f2f}.equatio-screenshot-reader .equatio-math-discoverability-action-item__icon{width:14px;height:14px}.equatio-apps-discovery-popup{position:fixed;padding:10px 0;margin:0 auto;top:20px;right:25px;width:325px;z-index:10000000;min-height:192px}.equatio-apps-discovery-popup__bubble{position:relative;display:block;border-radius:10px;background-color:#fff;color:#484848;padding:8px 20px;box-shadow:0px 0px 15px 0px #a8a8a8}.equatio-apps-discovery-popup__bubble:before{content:\"\";position:absolute;width:0;height:0;border-style:solid;border-width:0 15px 15px 15px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff rgba(0,0,0,0);border-style:inset;-webkit-transform:rotate(360deg)}.equatio-apps-discovery-popup__bubble--docs:after{content:\"\";position:absolute;width:0;height:0;border-style:solid;border-width:0 15px 15px 15px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #e9e9e9 rgba(0,0,0,0);border-style:inset;-webkit-transform:rotate(360deg)}.equatio-apps-discovery-popup__bubble:before{top:-10px;left:23px}.equatio-apps-discovery-popup__bubble:after{top:-12px;left:23px;z-index:-7}.equatio-apps-discovery-popup__title{position:relative;font-family:\"Open Sans\",Arial,sans-serif;height:37px;margin:8px 0 5px 0;padding:3px;font-weight:900}.equatio-apps-discovery-popup__text{display:inline !important;position:relative !important;line-height:19.7px !important;font-family:\"Open Sans\",Arial,sans-serif !important;font-size:13px !important;margin-bottom:12px !important;margin-top:12px !important}.equatio-apps-discovery-popup__text{z-index:1}.equatio-apps-discovery-popup__button-wrapper{display:flex !important;justify-content:flex-end !important;height:46px !important;padding:3px 0 !important;margin-top:5px !important}.equatio-apps-discovery-popup__button-wrapper{position:relative}.equatio-apps-discovery-popup__instruction-wrapper{position:relative !important;display:flex !important;align-items:center !important;padding:2px 0 !important;height:41px !important;z-index:1 !important}.equatio-apps-discovery-popup__instruction-text{font-family:\"Open Sans\",Arial,sans-serif;font-size:12px;font-weight:300}.equatio-apps-discovery-popup-checkbox__container{display:flex;align-items:center}.equatio-apps-discovery-popup-checkbox{-webkit-appearance:none;position:relative;cursor:pointer;border-radius:5px;height:15px;width:15px;background:#d7e7ff;border:1px solid #c3daff;margin-right:5px}.equatio-apps-discovery-popup-checkbox:checked:after{content:\"\";left:4px;top:0px;width:6px;height:10px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute}.equatio-apps-discovery-popup-checkbox:checked{background-color:#00b7ff}.equatio-apps-discovery-popup-background{position:absolute;top:0;right:0;height:100%}.equatio-apps-discovery-popup-title{position:relative;display:flex;justify-content:space-between;align-items:center;margin:8px 0}.equatio-apps-discovery-popup-title__warning{height:38px}.equatio-apps-discovery-popup-title__logo{height:30px}.equatio-apps-discovery-popup__button{height:40px !important}.equatio-apps-discovery-popup__button{font-family:\"Open Sans\",Arial,sans-serif;background-color:#fff;font-size:13px;color:#00b7ff;position:relative;font-weight:600;padding:10px 24px;border-radius:30px;display:flex;justify-content:center;align-items:center;min-width:20px;text-decoration:none;text-transform:uppercase;margin:3px 4px;border:1px solid #00b7ff;transition:.2s;cursor:pointer;z-index:1}.equatio-apps-discovery-popup__button.equatio-apps-discovery-popup__button--cancel{background:rgba(0,0,0,0);border:0}.equatio-apps-discovery-popup__button.equatio-apps-discovery-popup__button--cancel:hover{background:rgba(0,0,0,0);border:0;color:#0092cc}.equatio-apps-discovery-popup__button:hover{background-color:#00b7ff;color:#fff}.equatio-palette-editor-popup-search{padding:10px 15px}.equatio-palette-editor-popup-search-wrapper{display:flex;align-items:center;border:1px solid #d3d3d3}.equatio-palette-editor-popup-search__label{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.equatio-palette-editor-popup-search__input{font-family:\"Open Sans\",Arial,sans-serif;background:rgba(0,0,0,0);font-size:.9em;padding:8px 5px;border:0;flex:1;color:#484848}.equatio-palette-editor-popup-search-confirm,.equatio-palette-editor-popup-search-cancel{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;width:25px;height:25px;cursor:pointer;margin:0 5px}.equatio-palette-editor-popup-search-confirm:hover .equatio-palette-editor-popup-search-confirm__icon,.equatio-palette-editor-popup-search-cancel:hover .equatio-palette-editor-popup-search-confirm__icon{color:#e5e5e5}.equatio-palette-editor-popup-search-confirm__icon{width:25px;height:25px;color:#f2f2f2}.equatio-palette-editor-popup{background:#fff;box-shadow:0px 0px 15px 0px rgba(168,168,168,.32);border-radius:3px;width:330px}.equatio-palette-editor-popup-category-list{list-style-type:none;margin:0;padding:0;display:flex;padding:8px 10px}.equatio-palette-editor-popup-category-list-item{display:flex;flex:1;align-items:center;justify-content:center}.equatio-palette-editor-popup-category-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;cursor:pointer;transition:background-color ease-in-out .06s}.equatio-palette-editor-popup-category-button:hover{background:#e5e5e5}.equatio-palette-editor-popup-category-button:disabled{opacity:.5}.equatio-palette-editor-popup-category-button--disabled{opacity:.5}.equatio-palette-editor-popup-category-button--active .equatio-palette-editor-popup-category-button__icon{color:#0097e2}.equatio-palette-editor-popup-category-button__icon{height:17px;color:#80868b}.equatio-palette-editor-popup-list::-webkit-scrollbar{background-color:rgba(0,0,0,0);border-radius:0;height:8px;width:8px}.equatio-palette-editor-popup-list::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0)}.equatio-palette-editor-popup-list:hover::-webkit-scrollbar{background-color:rgba(0,0,0,0)}.equatio-palette-editor-popup-list:hover::-webkit-scrollbar-thumb{background-color:rgba(95,99,104,.2);background-clip:padding-box;border-radius:4px;padding:100px 0 0}.equatio-palette-editor-popup-list::-webkit-scrollbar:hover{background-color:rgba(0,0,0,0)}.equatio-palette-editor-popup-list::-webkit-scrollbar:active{background-color:rgba(0,0,0,0)}.equatio-palette-editor-popup-list::-webkit-scrollbar-thumb:hover{background-color:rgba(95,99,104,.2)}.equatio-palette-editor-popup-list::-webkit-scrollbar-thumb:active{background-color:rgba(95,99,104,.322)}.equatio-palette-editor-popup-list::-webkit-scrollbar-corner{background:rgba(0,0,0,0)}.equatio-palette-editor-popup-list{list-style-type:none;margin:0;padding:0;max-height:150px;overflow-y:auto;display:block;padding:0 8px}.equatio-palette-editor-popup-list-item{display:flex;position:relative}.equatio-palette-editor-popup-list-item-button{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;font-family:\"Open Sans\",Arial,sans-serif;padding:8px 50px 8px 10px;display:flex;width:100%;align-items:center;cursor:pointer;color:#484848;font-size:1em;-webkit-font-smoothing:antialiased}.equatio-palette-editor-popup-list-item-button:hover,.equatio-palette-editor-popup-list-item-button:focus{background:#f8f8f8}.equatio-palette-editor-popup-list-item-favourite{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:0;display:flex;align-items:center;justify-content:center;position:absolute;width:43px;height:43px;border-radius:50%;top:calc(50% - 21.5px);right:10px;cursor:pointer}.equatio-palette-editor-popup-list-item-favourite:hover,.equatio-palette-editor-popup-list-item-favourite:focus{background:#f2f2f2}.equatio-palette-editor-popup-list-item-button-wrapper{overflow:hidden;width:80px;display:flex;align-items:center;justify-content:flex-start}.equatio-palette-editor-popup-list-item-favourite__icon{height:14px}.equatio-palette-editor-popup-list-item-button__icon{max-height:30px;max-width:none}.equatio-palette-editor-popup-list-item-button__text{display:block;flex:1;text-align:left;margin-left:12px}.equatio-palette-editor-popup-list.equatio-palette-editor-popup-list--grid{display:grid;grid-template-columns:repeat(5, 1fr);overflow-x:hidden}.equatio-palette-editor-popup-list.equatio-palette-editor-popup-list--grid .equatio-palette-editor-popup-list-item{justify-content:center;align-items:center;margin:8px 0}.equatio-palette-editor-popup-list.equatio-palette-editor-popup-list--grid .equatio-palette-editor-popup-list-item-button{width:36px;height:36px;border-radius:50%;justify-content:center;padding:0}.equatio-palette-editor-popup-list.equatio-palette-editor-popup-list--grid .equatio-palette-editor-popup-list-item-button-wrapper{justify-content:center}.equatio-palette-editor-popup-list.equatio-palette-editor-popup-list--grid .equatio-palette-editor-popup-list-item-button__icon{margin:0;max-height:22px}.equatio-interactive-window-wrapper{z-index:9999;pointer-events:all;background:#fff}.equatio-interactive-close{margin:0;padding:0;border:0;background:rgba(0,0,0,0);border-radius:50%;width:28px;height:28px;float:right;cursor:pointer;position:absolute;top:6px;right:16px}.equatio-interactive-close:hover{background-color:rgba(158,158,158,.2)}.equatio-interactive-content{box-shadow:2px 2px 31px -5px rgba(51,51,51,.4);overflow:auto;width:100%;height:100%;position:absolute;display:flex;flex-direction:column;font-size:16px}.equatio-periodic-table{display:grid;grid-template-columns:repeat(18, auto);width:100%;height:calc(100% - 45px)}.element{border:.5px solid #000;align-items:center;justify-content:center;display:flex;flex-direction:column;margin:0;cursor:pointer;font-size:1em;font-family:\"Open Sans\",arial,sans-serif;min-width:0;overflow:hidden}.element:focus,.element:hover{z-index:2;background-color:#fff}.equatio-element-number{font-size:.6em;text-align:center;display:block}.equatio-element-symbol{font-size:1em;text-align:center;font-weight:bold}.equatio-element-name{font-size:.45em;text-align:center;display:block}.equatio-periodic-table.equatio-periodic-table--small .equatio-element-number{font-size:.5em}.equatio-periodic-table.equatio-periodic-table--small .equatio-element-symbol{font-size:.9em}.equatio-periodic-table.equatio-periodic-table--small .equatio-element-name{display:none}.equatio-periodic-table.equatio-periodic-table--large .equatio-element-number{font-size:.75em}.equatio-periodic-table.equatio-periodic-table--large .equatio-element-symbol{font-size:1.4em}.equatio-periodic-table.equatio-periodic-table--large .equatio-element-name{font-size:.54em}.diatomic{background-color:#aacf53}.noble{background-color:#f0e0dc}.alkali{background-color:#ed9987}.alkaline{background-color:#ff9c21}.metalloid{background-color:#71bc78}.polyatomic{background-color:#81a6aa}.transition{background-color:#fde634}.post-transition{background-color:#75b8fd}.lanthanide{background-color:#ad75ff}.actinide{background-color:#b28ebc}.unknown{background-color:#c0e2e1}.periodic-table-popup{position:absolute;top:10%;left:50%;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);z-index:100000000000000000000;background:#fff;border-radius:4px;overflow:auto;padding:2em 1em;width:80%;box-shadow:rgba(51,51,51,.4) 2px 2px 31px -5px;display:flex}.periodic-table-popup aside{overflow:hidden}.periodic-table-popup-main{flex:1;margin:0 1em;font-family:\"Open Sans\",Arial,sans-serif;font-size:.9em;-webkit-font-smoothing:antialiased}.periodic-table-popup-img{width:320px;height:200px;display:block;margin-left:auto;margin-right:auto}.periodic-table-popup-header{font-weight:bold;margin:0 0 .2em}.periodic-table-popup-summary{max-height:250px;overflow-y:auto}.periodic-table-popup-summary a{color:#00b7ff}.periodic-table-popup-footer{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-around;padding:1em 0 0 0}.periodic-table-popup-table{font-size:.9em;text-align:left;border-spacing:10px;max-width:320px}.periodic-table-category-header{font-size:.55em;display:inline-block;border-radius:50px;padding:.2em .7em;vertical-align:middle;margin:0 .5em}.equatio-th-sign-in{position:relative;overflow:hidden;height:100%;background:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTExLjEzNyA3NzUuOTk0Ij4KICA8ZyBvcGFjaXR5PSIuMSI+CiAgICA8cGF0aCBkPSJNMTQ4Ny4yNzkgNzAuMjMyaC0xMi44OTNhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTctMS4wMTd2LTU5LjA0YTEuMDE0IDEuMDE0IDAgMCAxIDEuMDE3LTEuMDE2aDEyLjg5M2ExLjAxNiAxLjAxNiAwIDAgMSAxLjAxOSAxLjAxNnY1OS4wNGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxN3ptLTExLjg3NS0yLjAzNmgxMC44NTh2LTU3aC0xMC44NTl6Ii8+CiAgICA8cGF0aCBkPSJNMTQ3NC4zODYgMTYuMTEzaDEzLjI1NXYyLjAzNmgtMTMuMjU1ek0xNDc0LjM4NiA2MS4yOTdoMTMuMjU1djIuMDM2aC0xMy4yNTV6TTE1MTcuNjMzIDcwLjIzMmExLjAyMSAxLjAyMSAwIDAgMS0uNTYzLS4xNyAxLjAyMSAxLjAyMSAwIDAgMS0uNDM2LS42NDZsLTExLjY5Mi01Ny44NzNhMS4wMTcgMS4wMTcgMCAwIDEgLjgtMS4ybDEyLjYzOC0yLjU1NWExLjAyMSAxLjAyMSAwIDAgMSAuNzYzLjE0OSAxLjAxMiAxLjAxMiAwIDAgMSAuNDM2LjY0OGwxMS42OTIgNTcuODdhMS4wMTUgMS4wMTUgMCAwIDEtLjc5NSAxLjJsLTEyLjYzOCAyLjU1NGEuOTg5Ljk4OSAwIDAgMS0uMjA1LjAyM3ptLTEwLjQ5My01OC4wODlsMTEuMjkgNTUuODczIDEwLjY0My0yLjE1Mi0xMS4yOS01NS44NzV6Ii8+CiAgICA8cGF0aCBkPSJNMTUwNi45MzkgMTcuMTk1bDEyLjk5NS0yLjYxNy40MDIgMS45OTUtMTIuOTk1IDIuNjE3ek0xNTE1Ljg4NyA2MS40ODdsMTIuOTk0LTIuNjIyLjQwMyAxLjk5Ni0xMi45OTQgMi42MjJ6TTE1MDUuNTk2IDYzLjMzMmgtMTIuODlhMS4wMTggMS4wMTggMCAwIDEtMS4wMTktMS4wMTZ2LTYuMzM0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE5aDEyLjg5YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djYuMzM0YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDE2em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC4zaC0xMC44NTZ6TTE1MDUuNTk2IDE4LjE0M2gtMTIuODlhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTktMS4wMTdWMTAuMTdhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTktMS4wMTZoMTIuODlhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTcgMS4wMTZ2Ni45NTZhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTcgMS4wMTd6bS0xMS44NzUtMi4wMzRoMTAuODU2di00LjkyMWgtMTAuODU2eiIvPgogICAgPHBhdGggZD0iTTE1MDUuNTk2IDcwLjIzMmgtMTIuODlhMS4wMTggMS4wMTggMCAwIDEtMS4wMTktMS4wMTd2LTYuOWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxOWgxMi44OWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxOXY2LjlhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTd6bS0xMS44NzUtMi4wMzdoMTAuODU2di00Ljg2M2gtMTAuODU2ek0xNTA1LjU5NiA1Ni45OThoLTEyLjg5YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5LTEuMDE3VjIzLjA2N2ExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxN2gxMi44OWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxN3YzMi45MTRhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTcgMS4wMTd6bS0xMS44NzUtMi4wMzVoMTAuODU2VjI0LjA4N2gtMTAuODU2eiIvPgogICAgPHBhdGggZD0iTTE1MDUuNTk2IDI0LjA4NmgtMTIuODlhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTlWMTcuMTNhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTktMS4wMTZoMTIuODlhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTcgMS4wMTZ2NS45MzdhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTcgMS4wMTl6bS0xMS44NzUtMi4wMzZoMTAuODU2di0zLjloLTEwLjg1NnpNMTQ1OS40NDYgNjguMTk2aDc5LjQwOHYyLjAzNmgtNzkuNDA4ek0xNDA0LjYzNyA2Ny4xMzhoLTc0LjU0NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOHYtOS4xNTVhMS4wMTggMS4wMTggMCAwIDEgMS4wMTctMS4wMTloNzQuNTQ1YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE5djkuMTU1YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5IDEuMDE4em0tNzMuNTI2LTIuMDM2aDcyLjUwOXYtNy4xMTloLTcyLjUwOXoiLz4KICAgIDxwYXRoIGQ9Ik0xNDA0LjYzNyA1Ny45ODJoLTc0LjU0NWExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNy0xLjAxN1YxOS42OTRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTctMS4wMmgxNy4yNjV2Mi4wMzdoLTE2LjI0NnYzNS4yMzVoNzIuNTA5VjIwLjcxMWgtMTYuMTI3di0yLjAzN2gxNy4xNDRhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTkgMS4wMnYzNy4yNzFhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTkgMS4wMTd6TTEzNzYuMTY5IDc4LjIybC0xLjgyLTExLjA4MmgtMTMuOTY2bC0xLjgyMiAxMS4wODItMi4wMS0uMzMxIDEuOTYzLTExLjkzNGExLjAxOCAxLjAxOCAwIDAgMSAxLS44NTRoMTUuNjkzYTEuMDE4IDEuMDE4IDAgMCAxIDEgLjg1NGwxLjk2MSAxMS45MzR6Ii8+CiAgICA8cGF0aCBkPSJNMTM0OS42ODEgNzcuMDM2aDM1LjM3djIuMDM2aC0zNS4zN3pNMTM4Ny40ODkgNTcuOTgxaC00MC4xM2ExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN1Y0LjAzOGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxN2gzMS45MTlhMS4wMTMgMS4wMTMgMCAwIDEgLjcxOC4zbDguMjE1IDguMjEzYTEuMDE1IDEuMDE1IDAgMCAxIC4zLjcydjQ0LjcxYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDIyIDEuMDE3em0tMzkuMTE3LTIuMDM1aDM4LjF2LTQzLjI3bC03LjYxOC03LjYxOGgtMzAuNDh6Ii8+CiAgICA8cGF0aCBkPSJNMTM4Ny40OTEgMTMuMjcxaC04LjIxNWExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNy0xLjAxN1Y0LjAzOWExLjAxOCAxLjAxOCAwIDAgMSAuNjI4LS45NCAxLjAxOCAxLjAxOCAwIDAgMSAxLjEwOC4yMjJsOC4yMTUgOC4yMTNhMS4wMTcgMS4wMTcgMCAwIDEgLjIyMiAxLjExIDEuMDE4IDEuMDE4IDAgMCAxLS45NDEuNjI3em0tNy4yLTIuMDM2aDQuNzRsLTQuNzQtNC43Mzl6TTEzNTMuMTY3IDE2LjkzOWgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNMTM1My4xNjcgMjIuNDU1aDI4LjUxNnYyLjAzNWgtMjguNTE2ek0xMzUzLjE2NyAyNy45NzFoMjguNTE2djIuMDM2aC0yOC41MTZ6TTEzNTMuMTY3IDMzLjQ4NWgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNMTM1My4xNjcgMzkuMDAxaDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xMzUzLjE2NyA0NC41MTdoMTcuODUzdjIuMDM2aC0xNy44NTN6TTExMDQuMDA2IDc2LjM1NWExLjAyMyAxLjAyMyAwIDAgMS0uMzg5LS4wNzYgMS4wMTggMS4wMTggMCAwIDEtLjYyOC0uOTRWNjQuODUyYTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE3aDEwLjQ4NWExLjAxOSAxLjAxOSAwIDAgMSAuOTQuNjI4IDEuMDIgMS4wMiAwIDAgMS0uMjIyIDEuMTFsLTEwLjQ4NSAxMC40ODRhMS4wMTEgMS4wMTEgMCAwIDEtLjcyLjI5OHptMS4wMTktMTAuNDg0djcuMDFsNy4wMS03LjAxek0xMDk5LjYwNCA0Ni4xMDRhMS4xMDkgMS4xMDkgMCAwIDEtLjItLjAyMWwtOS4xNjUtMS44NTZhMS4wMTUgMS4wMTUgMCAwIDEtLjc3MS0uNyAxLjAxOCAxLjAxOCAwIDAgMSAuMjU0LTEuMDE0bDI5LjIzOC0yOS4yNDdhMS4wMTYgMS4wMTYgMCAwIDEgMS40MzkgMGw1LjUxMSA1LjUxMWExLjAxNiAxLjAxNiAwIDAgMSAuMy43MiAxLjAxOSAxLjAxOSAwIDAgMS0uMy43MjFsLTI1LjU4NyAyNS41ODRhMS4wMTkgMS4wMTkgMCAwIDEtLjcxOS4zMDJ6bS03LjEwNS0zLjVsNi43NzIgMS4zNyAyNC40NzktMjQuNDc5LTQuMDcyLTQuMDcyeiIvPgogICAgPHBhdGggZD0iTTExMDEuNDYyIDU1LjI3MWEuOTg1Ljk4NSAwIDAgMS0uMjk1LS4wNDQgMS4wMjIgMS4wMjIgMCAwIDEtLjctLjc3M2wtMS44NTgtOS4xNjhhMS4wMTYgMS4wMTYgMCAwIDEgLjI3OC0uOTJsMjUuNTg3LTI1LjU4N2ExLjAyNCAxLjAyNCAwIDAgMSAuNzItLjMgMS4wMTYgMS4wMTYgMCAwIDEgLjcxOC4zbDUuNTEzIDUuNTEzYTEuMDE3IDEuMDE3IDAgMCAxIDAgMS40MzhsLTI5LjI0MSAyOS4yNDFhMS4wMTcgMS4wMTcgMCAwIDEtLjcyMi4zem0tLjc1My05Ljg1NGwxLjM3MiA2Ljc3NCAyNy4xODEtMjcuMTgxLTQuMDcyLTQuMDcyeiIvPgogICAgPHBhdGggZD0iTTEwODguNjY3IDU3LjA5OGExLjAxIDEuMDEgMCAwIDEtLjcxOC0uMyAxLjAxMiAxLjAxMiAwIDAgMS0uMjg5LS44NjNsMS44My0xMi43OTRhMS4wMTEgMS4wMTEgMCAwIDEgLjQxOC0uNjg2IDEuMDIgMS4wMiAwIDAgMSAuNzg3LS4xNjdsOS4xIDEuOGExLjAxOSAxLjAxOSAwIDAgMSAuOC44bDEuODU4IDkuMTY3YTEuMDE2IDEuMDE2IDAgMCAxLS4xNjUuNzg5IDEuMDE1IDEuMDE1IDAgMCAxLS42ODguNDIybC0xMi43OTQgMS44MjhhMS4yNTggMS4yNTggMCAwIDEtLjEzOS4wMDR6bTIuNjg2LTEyLjYwNWwtMS40ODUgMTAuMzg4IDEwLjM4Mi0xLjQ4NS0xLjUwOS03LjQ0NHpNMTEzMC42NDUgMjUuOTdhMS4wMTUgMS4wMTUgMCAwIDEtLjcyLS4zbC0xMC45NjUtMTAuOTY2YTEuMDA4IDEuMDA4IDAgMCAxLS4zLS43MTkgMS4wMiAxLjAyIDAgMCAxIC4zLS43MmwyLjc4OS0yLjc5MWExLjAyMiAxLjAyMiAwIDAgMSAuNzItLjMgMS4wMTQgMS4wMTQgMCAwIDEgLjcxOC4zbDEwLjk2NSAxMC45NjhhMS4wMTcgMS4wMTcgMCAwIDEgMCAxLjQzOWwtMi43ODkgMi43ODlhMS4wMDcgMS4wMDcgMCAwIDEtLjcxOC4zem0tOS41MjYtMTEuOTgzbDkuNTI2IDkuNTI1IDEuMzQ4LTEuMzQ4LTkuNTI1LTkuNTI3eiIvPgogICAgPHBhdGggZD0iTTExMzMuNDM0IDIzLjE4MWExLjAxNiAxLjAxNiAwIDAgMS0uNzItLjNsLTEwLjk2Ny0xMC45NjRhMS4wMTkgMS4wMTkgMCAwIDEgMC0xLjQ0bDIuNS0yLjVhNC4xNTIgNC4xNTIgMCAwIDEgMi45Ni0xLjIxNyA0LjI4NiA0LjI4NiAwIDAgMSAzLjA0OSAxLjI2M2w2LjM0OCA2LjM1YTQuMjU0IDQuMjU0IDAgMCAxIC4wNDggNi4wMDhsLTIuNSAyLjVhMS4wMDcgMS4wMDcgMCAwIDEtLjcxOC4zem0tOS41MjctMTEuOTg0bDkuNTI3IDkuNTI2IDEuNzgtMS43ODFhMi4yMTcgMi4yMTcgMCAwIDAtLjA0Ni0zLjEyOGwtNi4zNS02LjM0OGEyLjI3NyAyLjI3NyAwIDAgMC0zLjEzLS4wNDh6TTEwODguNzM1IDUxLjNsMS40NC0xLjQ0IDQuODQ0IDQuODQ0LTEuNDQgMS40NHoiLz4KICAgIDxwYXRoIGQ9Ik0xMTA0LjAwOCA3Ni4zNTVoLTQwLjc0NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxN1Y3Ljc3OWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxN2g1MS4yM2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxN3YxMS4zOTJhMS4wMTkgMS4wMTkgMCAwIDEtLjMuNzE5bC0yMy43NTcgMjMuODc0LTEuNTkgMTEuMTE3IDExLjExNS0xLjU4OSAxMi43OTItMTIuNzkzYTEuMDE1IDEuMDE1IDAgMCAxIDEuMTEtLjIyIDEuMDE4IDEuMDE4IDAgMCAxIC42MjguOTRWNjQuODVhMS4wMTMgMS4wMTMgMCAwIDEtLjMuNzJsLTEwLjQ4NSAxMC40ODVhMS4wMTggMS4wMTggMCAwIDEtLjcxNS4zem0tMzkuNzI4LTIuMDM2aDM5LjNsOS44OS05Ljg4OFY0My42NzdsLTExLjI4OSAxMS4yOTVhMS4wMjUgMS4wMjUgMCAwIDEtLjU3NS4yODhsLTEyLjc5MyAxLjgyOGExLjAxMiAxLjAxMiAwIDAgMS0uODYzLS4yODkgMS4wMTMgMS4wMTMgMCAwIDEtLjI4OS0uODYzbDEuODMtMTIuNzkzYTEuMDIyIDEuMDIyIDAgMCAxIC4yODQtLjU3M2wyMy43LTIzLjgxOFY4Ljc5OGgtNDkuMTk0ek0xNjM2LjM4OSA2Ni4xNDhoLTM3LjY5MmExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNy0xLjAxOFYyNy40MzZhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTctMS4wMTZoMzcuNjkzYTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE3IDEuMDE2VjY1LjEzYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE4IDEuMDE4em0tMzYuNjczLTIuMDM3aDM1LjY1OFYyOC40NDhoLTM1LjY1OHoiLz4KICAgIDxwYXRoIGQ9Ik0xNjQyLjc2IDcxLjg1aC01MC40MzRhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTlWNC45MDhhMS4wMiAxLjAyIDAgMCAxIDEuMDE3LTEuMDJoNTAuNDM0YTEuMDIgMS4wMiAwIDAgMSAxLjAxNyAxLjAydjY1LjkyM2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxOXptLTQ5LjQxNC0yLjAzNmg0OC40VjUuOTI2aC00OC40eiIvPgogICAgPHBhdGggZD0iTTE2MzUuNjczIDIzLjIzMWgtMzYuMjU4YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5VjExLjc3OWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxOWgzNi4yNThhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTcgMS4wMTl2MTAuNDMzYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE5em0tMzUuMjQxLTIuMDM3aDM0LjIyMnYtOC40aC0zNC4yMTl6TTE2MDYuMzU3IDI3LjQzNGgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTE2MDYuMzU3IDM3Ljk0aDIuMDM2djYuODUzaC0yLjAzNnpNMTU5OC42OTYgMzUuMDk2aDYuODUzdjIuMDM2aC02Ljg1M3pNMTYwOS4yMDEgMzUuMDk2aDYuNTE5djIuMDM2aC02LjUxOXpNMTYxOS4zMjYgMzUuMDk2aDYuNTU5djIuMDM2aC02LjU1OXpNMTYyOS41MzYgMzUuMDk2aDYuODUzdjIuMDM2aC02Ljg1M3pNMTU5OC42OTYgNDUuMjY1aDYuODUzVjQ3LjNoLTYuODUzek0xNjA5LjIwMSA0NS4yNjVoNi41MTlWNDcuM2gtNi41MTl6TTE2MTkuMzI2IDQ1LjI2NWg2LjU1OVY0Ny4zaC02LjU1OXpNMTYyOS41MzYgNDUuMjY1aDYuODUzVjQ3LjNoLTYuODUzek0xNTk4LjY5NiA1NS40MzFoNi44NTN2Mi4wMzZoLTYuODUzek0xNjA5LjIwMSA1NS40MzFoNi41MTl2Mi4wMzZoLTYuNTE5ek0xNjA2LjM1NyA0Ny43NzFoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjA2LjM1NyA1OC4yNzZoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjE5LjMyNiA1NS40MzFoNi41NTl2Mi4wMzZoLTYuNTU5ek0xNjI2LjY5MyAyNy40MzRoMi4wMzZ2Ni44NTRoLTIuMDM2ek0xNjI2LjY5MyAzNy45MzloMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjI2LjY5MyA0Ny43NzFoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjI2LjY5MyA1OC4yNzVoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjE2LjUyNSAyNy40MzRoMi4wMzZ2Ni44NTRoLTIuMDM2ek0xNjE2LjUyNSAzNy45MzloMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjE2LjUyNiA0Ny43NzFoMi4wMzV2Ni44NTNoLTIuMDM1ek0xNjE2LjUyNiA1OC4yNzVoMi4wMzV2Ni44NTNoLTIuMDM1ek04MjYuODc0IDcwLjAzMkg4MDUuMjZhMy44NjIgMy44NjIgMCAwIDEtMy44Ni0zLjg1OHYtNS4zNjhhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMThoMTkuNTZ2Mi4wMzdoLTE4LjU0MXY0LjM0OWExLjgyNiAxLjgyNiAwIDAgMCAxLjgyNCAxLjgyNGgyMS42MTR6TTg0OC4yOCAxNS4zNDhoLTQ1Ljg2M2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxN1Y5LjkwOWEzLjg2NCAzLjg2NCAwIDAgMSAzLjg2LTMuODZoNDAuMTc4YTMuODYyIDMuODYyIDAgMCAxIDMuODU4IDMuODZ2NC40MjJhMS4wMTggMS4wMTggMCAwIDEtMS4wMTYgMS4wMTd6bS00NC44NDQtMi4wMzRoNDMuODI1di0zLjRhMS44MjQgMS44MjQgMCAwIDAtMS44MjItMS44MjRIODA1LjI2YTEuODI1IDEuODI1IDAgMCAwLTEuODI0IDEuODI0eiIvPgogICAgPHBhdGggZD0iTTgyMS45NzcgNjEuODI0aC0xOS41NmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOVYxNC4zM2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxN2g0NS44NjNhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMS4wMTd2MjYuNTEzaC0yLjAzNnYtMjUuNWgtNDMuODI1djQ0LjQ0aDE4LjU0MXoiLz4KICAgIDxwYXRoIGQ9Ik04NTQuNDgzIDgwaC0yMi4yMDlhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTctMS4wMTJsLS4wMS0zLjQtOS0xMS4xODdhNC4wNzUgNC4wNzUgMCAwIDEtMS4yNTktMi45MzJWNDkuMzk4YTQuMDkxIDQuMDkxIDAgMCAxIDQuMDg2LTQuMDg2IDQuMDkgNC4wOSAwIDAgMSA0LjA4NiA0LjA4NnY3LjlsMS4xMDYgMS41OVYzNC45MDlhNC4wODkgNC4wODkgMCAwIDEgNC4wODYtNC4wODQgNC4wODkgNC4wODkgMCAwIDEgNC4wODQgNC4wODR2NWE0LjA0OSA0LjA0OSAwIDAgMSAyLjA1OC0uNTU5IDQuMDggNC4wOCAwIDAgMSAzLjA3MSAxLjM5NCA0LjA3OSA0LjA3OSAwIDAgMSAzLjA3MS0xLjM5NCA0LjA5NCA0LjA5NCAwIDAgMSAzLjkzMSAyLjk3MiA0LjA0OCA0LjA0OCAwIDAgMSAyLjIxNi0uNjUzIDQuMDg5IDQuMDg5IDAgMCAxIDQuMDg0IDQuMDg1djIzLjM0M2E0LjA4IDQuMDggMCAwIDEtMS4zNiAzLjA0NXY2Ljg0NUExLjAxOCAxLjAxOCAwIDAgMSA4NTQuNDgzIDgwem0tMjEuMi0yLjAzNGgyMC4xNzl2LTYuMzI0YTEuMDE4IDEuMDE4IDAgMCAxIC40NTItLjg0NSAyLjA0NSAyLjA0NSAwIDAgMCAuOTA4LTEuN1Y0NS43NTRhMi4wNTIgMi4wNTIgMCAwIDAtMi4wNDgtMi4wNTEgMi4wNTMgMi4wNTMgMCAwIDAtMi4wNSAyLjA1MXY2LjhhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTkgMS4wMjQgMS4wMjQgMCAwIDEtMS4wMjUtMS4wMTl2LTkuMTIzYTIuMDUzIDIuMDUzIDAgMCAwLTIuMDUtMi4wNSAyLjA1MyAyLjA1MyAwIDAgMC0yLjA1IDIuMDV2OS4xMjNhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTkgMS4wMjQgMS4wMjQgMCAwIDEtMS4wMjMtMS4wMTl2LTkuMTIzYTIuMDUzIDIuMDUzIDAgMCAwLTIuMDUtMi4wNSAyLjA1MyAyLjA1MyAwIDAgMC0yLjA1IDIuMDV2OS4xMjNhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTkgMS4wMjQgMS4wMjQgMCAwIDEtMS4wMjUtMS4wMTlWMzQuOTAxYTIuMDUxIDIuMDUxIDAgMCAwLTIuMDQ4LTIuMDQ4IDIuMDUxIDIuMDUxIDAgMCAwLTIuMDUgMi4wNDhWNjIuMTJhMS4wMiAxLjAyIDAgMCAxLS43MTIuOTczIDEuMDIxIDEuMDIxIDAgMCAxLTEuMTQtLjM5bC0zLjE0NC00LjUxMmExLjAxOSAxLjAxOSAwIDAgMS0uMTgyLS41ODN2LTguMjE3YTIuMDUyIDIuMDUyIDAgMCAwLTIuMDUtMi4wNTEgMi4wNTIgMi4wNTIgMCAwIDAtMi4wNSAyLjA1MXYxMi4wNzFhMi4wMTYgMi4wMTYgMCAwIDAgLjY4OCAxLjUxNSAxLjEgMS4xIDAgMCAxIC4xODIuMjE1bDkuMTYzIDExLjM5YTEuMDE5IDEuMDE5IDAgMCAxIC4yMjQuNjM1eiIvPgogICAgPHBhdGggZD0iTTg1NS44NDggOTAuNzk0aC0yNC43NWExLjAxNSAxLjAxNSAwIDAgMS0xLjAxNy0xLjAxN1Y3OC45ODRhMS4wMTUgMS4wMTUgMCAwIDEgMS4wMTctMS4wMThoMjQuNzVhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMS4wMTh2MTAuNzkzYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3em0tMjMuNzMzLTIuMDM0aDIyLjcxNFY4MGgtMjIuNzE0eiIvPgogICAgPHBhdGggZD0iTTgzMy44MzUgNzguOTg0aDIuMDM2djEwLjc5NGgtMi4wMzZ6TTgzNy4xNTggODIuMzE1aDMuMTI1djIuMDM2aC0zLjEyNXpNODA4LjY2OSAyMi42MDJoMzMuMzZ2Mi4wMzZoLTMzLjM2ek04MDguNjY5IDI3LjY5MWgzMy4zNnYyLjAzNmgtMzMuMzZ6TTgwOC42NjkgMzIuNzgyaDIyLjYxNnYyLjAzNWgtMjIuNjE2ek04MDguNjY5IDM3Ljg3aDIyLjc4OXYyLjAzNmgtMjIuNzg5ek04MDguNjY5IDQyLjk2aDIyLjYxNnYyLjAzNmgtMjIuNjE2ek04MDguNjY5IDQ4LjA1aDEzLjMzOHYyLjAzNmgtMTMuMzM4ek04MzcuMjEyIDMyLjc4Mmg0LjgxNnYyLjAzNWgtNC44MTZ6TTgyMi4yNzMgOS42ODJoNi4xNTF2Mi4wMzZoLTYuMTUxek0xMjA0LjQxOSA2NC4xNDVhNy40MzUgNy40MzUgMCAwIDEtNy40MjgtNy40MjdWMzguMzI1YTcuNDM2IDcuNDM2IDAgMCAxIDcuNDI4LTcuNDI4IDcuNDM1IDcuNDM1IDAgMCAxIDcuNDI2IDcuNDI4djE4LjM5M2E3LjQzNSA3LjQzNSAwIDAgMS03LjQyNiA3LjQyN3ptMC0zMS4yMTFhNS40IDUuNCAwIDAgMC01LjM5MiA1LjM5MXYxOC4zOTNhNS40IDUuNCAwIDAgMCA1LjM5MiA1LjM5IDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5VjM4LjMyNWE1LjQgNS40IDAgMCAwLTUuMzktNS4zOTF6Ii8+CiAgICA8cGF0aCBkPSJNMTE5OC4wMDYgNTguMjcxYTcuMjYzIDcuMjYzIDAgMCAxLTcuMjU2LTcuMjU0di03YTcuMjY1IDcuMjY1IDAgMCAxIDcuMjU2LTcuMjU3aC4wODdhLjk0OS45NDkgMCAwIDEgLjcxOS4zMy45OTIuOTkyIDAgMCAxIC4yMzYuNzc0Yy0uMDEyLjE0OC0uMDI0LjMtLjAyNC40NXYxOC4zOTNjMCAuMTUxLjAxMi4zLjAyNC40NDhhMS4wMTggMS4wMTggMCAwIDEtLjI2NC43NzcgMS4wMTUgMS4wMTUgMCAwIDEtLjc1MS4zMjl6bS0xLjAxOS0xOS4zODFhNS4yMzcgNS4yMzcgMCAwIDAtNC4yIDUuMTN2N2E1LjIzIDUuMjMgMCAwIDAgNC4yIDUuMTJ6TTEyMDMuNCAzMS45MTZoMi4wMzV2MTUuNjA1aC0yLjAzNXpNMTIwMy40IDUzLjI0NmgyLjAzNXY5Ljg4MWgtMi4wMzV6TTEyNTYuMjAzIDY0LjE0NWE3LjQzNSA3LjQzNSAwIDAgMS03LjQyNi03LjQyN1YzOC4zMjVhNy40MzUgNy40MzUgMCAwIDEgNy40MjYtNy40MjggNy40MzUgNy40MzUgMCAwIDEgNy40MjYgNy40Mjh2MTguMzkzYTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI2IDcuNDI3em0wLTMxLjIxMWE1LjQgNS40IDAgMCAwLTUuMzkgNS4zOTF2MTguMzkzYTUuNCA1LjQgMCAwIDAgNS4zOSA1LjM5IDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5VjM4LjMyNWE1LjQgNS40IDAgMCAwLTUuMzktNS4zOTF6Ii8+CiAgICA8cGF0aCBkPSJNMTI2Mi42MTEgNTguMjdoLS4wODdhLjk1Ni45NTYgMCAwIDEtLjcyLS4zMjcgMSAxIDAgMCAxLS4yMzYtLjc3M2MuMDE0LS4xNDkuMDI0LS4zLjAyNC0uNDUyVjM4LjMyNWMwLS4xNTMtLjAxMi0uMy0uMDI0LS40NTRhMS4wMTYgMS4wMTYgMCAwIDEgLjI2OC0uNzcyLjk4OS45ODkgMCAwIDEgLjc0OS0uMzI5IDcuMjY3IDcuMjY3IDAgMCAxIDcuMjgxIDcuMjU0djdhNy4yNjMgNy4yNjMgMCAwIDEtNy4yNTUgNy4yNDZ6bTEuMDE3LTE5LjM3MXYxNy4yMzdhNS4yMjggNS4yMjggMCAwIDAgNC4yLTUuMTJ2LTdhNS4yMjkgNS4yMjkgMCAwIDAtNC4yMDMtNS4xMTN6TTEyNTUuMTg1IDMxLjkxNmgyLjAzNnYxNS42MDVoLTIuMDM2ek0xMjU1LjE4NSA1My4yNDZoMi4wMzZ2OS44ODFoLTIuMDM2eiIvPgogICAgPHBhdGggZD0iTTEyNTcuMjYgMzEuOTE3aC0yLjAzNnYtMS43MThhMjQuODI5IDI0LjgyOSAwIDAgMC0yLjg3My0xMS41OTJsMS44LS45NTRhMjYuODY3IDI2Ljg2NyAwIDAgMSAzLjExMiAxMi41NDZ6TTEyMDUuNjg0IDMxLjkxN2gtMi4wMzZ2LTEuNzE4YTI2Ljg3NyAyNi44NzcgMCAwIDEgMy4xMTItMTIuNTQ2bDEuOC45NTRhMjQuODM4IDI0LjgzOCAwIDAgMC0yLjg3NCAxMS41OTJ6Ii8+CiAgICA8cGF0aCBkPSJNMTIxMC45OTkgMjAuMTQ3YTEuMDA5IDEuMDA5IDAgMCAxLS4yOTMtLjA0M2wtNi42MzEtMS45ODNhMS4wMTUgMS4wMTUgMCAwIDEtLjY0NC0uNTcxIDEuMDEgMS4wMSAwIDAgMSAuMDI2LS44NiAzMC4wNjkgMzAuMDY5IDAgMCAxIDI3LTE2LjY5MSAzMC4wNzcgMzAuMDc3IDAgMCAxIDI3IDE2LjY5MSAxLjAxNyAxLjAxNyAwIDAgMSAuMDI0Ljg2IDEuMDE1IDEuMDE1IDAgMCAxLS42NDQuNTcxbC02LjYzMyAxLjk4M2ExLjAxNiAxLjAxNiAwIDAgMS0xLjE3NC0uNDY5IDIxLjQ0OCAyMS40NDggMCAwIDAtMTguNTcxLTEwLjgxMiAyMS40NTQgMjEuNDU0IDAgMCAwLTE4LjU3MyAxMC44MTIgMS4wMTYgMS4wMTYgMCAwIDEtLjg4Ny41MTJ6bTE5LjQ1NS0xMy4zNjFhMjMuNDkxIDIzLjQ5MSAwIDAgMSAxOS45MjUgMTEuMTRsNC42ODQtMS40YTI4LjAzMyAyOC4wMzMgMCAwIDAtMjQuNjA4LTE0LjQ5IDI4LjAzMyAyOC4wMzMgMCAwIDAtMjQuNjA4IDE0LjQ5bDQuNjgzIDEuNGEyMy40OTEgMjMuNDkxIDAgMCAxIDE5LjkyNC0xMS4xNHoiLz4KICAgIDxwYXRoIGQ9Ik0xMjMwLjMxMSA1MC40NTRhMTUuMiAxNS4yIDAgMCAxLTE1LjE4Ny0xNS4xODcgMTUuMjA1IDE1LjIwNSAwIDAgMSAxNS4xODctMTUuMTg3IDE1LjIwNSAxNS4yMDUgMCAwIDEgMTUuMTg3IDE1LjE4NyAxNS4yIDE1LjIgMCAwIDEtMTUuMTg3IDE1LjE4N3ptMC0yOC4zMzhhMTMuMTY4IDEzLjE2OCAwIDAgMC0xMy4xNTMgMTMuMTUxIDEzLjE2NiAxMy4xNjYgMCAwIDAgMTMuMTUzIDEzLjE1MSAxMy4xNjYgMTMuMTY2IDAgMCAwIDEzLjE1MS0xMy4xNTEgMTMuMTY3IDEzLjE2NyAwIDAgMC0xMy4xNTEtMTMuMTQ3eiIvPgogICAgPHBhdGggZD0iTTEyMjUuNTI2IDQ0LjAzMmExLjAxMiAxLjAxMiAwIDAgMS0uNTA4LS4xMzcgMS4wMTggMS4wMTggMCAwIDEtLjUxMS0uODgyVjI3LjUyOGExLjAxOCAxLjAxOCAwIDAgMSAuNTExLS44OCAxLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAwbDEzLjQxMSA3Ljc0MWExLjAyMSAxLjAyMSAwIDAgMSAuNTA4Ljg4MSAxLjAxNyAxLjAxNyAwIDAgMS0uNTA4Ljg4MmwtMTMuNDE0IDcuNzQ0YTEuMDEzIDEuMDEzIDAgMCAxLS41MDYuMTM2em0xLjAxOS0xNC43NHYxMS45NmwxMC4zNTYtNS45ODF6TTEyMjIuODcxIDc0LjY4NWgtMTMuMDI0YTYuMzc2IDYuMzc2IDAgMCAxLTYuNDQ3LTYuMjg4di01LjI2OWgyLjAzNnY1LjI2OWE0LjMzNiA0LjMzNiAwIDAgMCA0LjQxMSA0LjI1aDEzLjAyNHoiLz4KICAgIDxwYXRoIGQ9Ik0xMjM0LjQzMiA3OC4wMDJoLTguMjM5YTQuMzQyIDQuMzQyIDAgMCAxLTQuMzM2LTQuMzM3IDQuMzM5IDQuMzM5IDAgMCAxIDQuMzM2LTQuMzM1aDguMjQzYTQuMzM4IDQuMzM4IDAgMCAxIDQuMzM2IDQuMzM1IDQuMzQgNC4zNCAwIDAgMS00LjM0IDQuMzM3em0tOC4yNDMtNi42MzdhMi4zIDIuMyAwIDAgMC0yLjMgMi4zIDIuMyAyLjMgMCAwIDAgMi4zIDIuM2g4LjI0M2EyLjMgMi4zIDAgMCAwIDIuMy0yLjMgMi4zIDIuMyAwIDAgMC0yLjMtMi4zeiIvPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik05OTMuNzA1IDY3LjEzOEg5MTkuMTZhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTh2LTkuMTU1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDE5aDc0LjU0NWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxOXY5LjE1NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxOHptLTczLjUyNi0yLjAzNmg3Mi41MTJ2LTcuMTE5aC03Mi41MTJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik05OTMuNzA1IDU3Ljk4Mkg5MTkuMTZhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTctMS4wMTdWMTkuNjk0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDJoMTcuMjY1djIuMDM3aC0xNi4yNDZ2MzUuMjM1aDcyLjUxMlYyMC43MTFoLTE2LjEzdi0yLjAzN2gxNy4xNDRhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTkgMS4wMnYzNy4yNzFhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTkgMS4wMTd6TTk2NS4yMzcgNzguMjJsLTEuODItMTEuMDgyaC0xMy45NjZsLTEuODIyIDExLjA4Mi0yLjAxLS4zMzEgMS45NjQtMTEuOTM0YTEuMDE2IDEuMDE2IDAgMCAxIDEtLjg1NGgxNS43YTEuMDE4IDEuMDE4IDAgMCAxIDEgLjg1NGwxLjk2MSAxMS45MzR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik05MzguNzQ5IDc3LjAzNmgzNS4zN3YyLjAzNmgtMzUuMzd6TTkyMy4zOSAxOC42NzVoNTYuMDUydjIuMDM2SDkyMy4zOXpNOTYzLjY5MiAzNy4yMjNsLTcuNDIyIDIuMS00LjMyIDYuMzc2LTMuNzM1LTE3LjU1MXpNOTU3LjMxMSA0My4yNjZsMi4zNzctMS43MTYgNC43NjIgNi41OTQtMi4zNzcgMS43MTd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE3NDMuMjg2IDcwLjAzMmgtMjEuNjEyYTMuODYyIDMuODYyIDAgMCAxLTMuODU4LTMuODU4di01LjM2OGExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxOGgxOS41NnYyLjAzN2gtMTguNTR2NC4zNDlhMS44MjYgMS44MjYgMCAwIDAgMS44MjIgMS44MjRoMjEuNjE0ek0xNzY0LjY5MiAxNS4zNDhoLTQ1Ljg2MWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxN1Y5LjkwOWEzLjg2MyAzLjg2MyAwIDAgMSAzLjg1OC0zLjg2aDQwLjE4YTMuODYzIDMuODYzIDAgMCAxIDMuODU4IDMuODZ2NC40MjJhMS4wMTggMS4wMTggMCAwIDEtMS4wMTggMS4wMTd6bS00NC44NDItMi4wMzRoNDMuODI0di0zLjRhMS44MjUgMS44MjUgMCAwIDAtMS44MjItMS44MjRoLTQwLjE3OGExLjgyNCAxLjgyNCAwIDAgMC0xLjgyMiAxLjgyNHoiLz4KICAgICAgPHBhdGggZD0iTTE3MzguMzkgNjEuODI0aC0xOS41NmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOVYxNC4zM2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxN2g0NS44NjFhMS4wMTggMS4wMTggMCAwIDEgMS4wMTkgMS4wMTd2MjYuNTEzaC0yLjAzNnYtMjUuNWgtNDMuODI0djQ0LjQ0aDE4LjU0eiIvPgogICAgICA8cGF0aCBkPSJNMTc3MC44OTkgODBoLTIyLjIxMWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxMmwtLjAwOC0zLjQtOS0xMS4xODdhNC4wODEgNC4wODEgMCAwIDEtMS4yNTctMi45MzJWNDkuMzk4YTQuMDkxIDQuMDkxIDAgMCAxIDQuMDg2LTQuMDg2IDQuMDg5IDQuMDg5IDAgMCAxIDQuMDg0IDQuMDg2djcuOWwxLjEwOCAxLjU5VjM0LjkwOWE0LjA4OSA0LjA4OSAwIDAgMSA0LjA4NC00LjA4NCA0LjA4OSA0LjA4OSAwIDAgMSA0LjA4NiA0LjA4NHY1YTQuMDQ0IDQuMDQ0IDAgMCAxIDIuMDU4LS41NTkgNC4wOCA0LjA4IDAgMCAxIDMuMDcxIDEuMzk0IDQuMDc5IDQuMDc5IDAgMCAxIDMuMDcxLTEuMzk0IDQuMDk0IDQuMDk0IDAgMCAxIDMuOTMxIDIuOTcyIDQuMDQ4IDQuMDQ4IDAgMCAxIDIuMjEyLS42NTIgNC4wODkgNC4wODkgMCAwIDEgNC4wODQgNC4wODV2MjMuMzQzYTQuMDc1IDQuMDc1IDAgMCAxLTEuMzYyIDMuMDQ1djYuODQ1YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE4IDEuMDEyem0tMjEuMi0yLjAzNGgyMC4xNzd2LTYuMzI0YTEuMDE4IDEuMDE4IDAgMCAxIC40NTItLjg0NSAyLjA0MiAyLjA0MiAwIDAgMCAuOTEtMS43VjQ1Ljc1NGEyLjA1MSAyLjA1MSAwIDAgMC0yLjA0OC0yLjA1MSAyLjA1MyAyLjA1MyAwIDAgMC0yLjA1IDIuMDUxdjYuOGExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAxOSAxLjAyNSAxLjAyNSAwIDAgMS0xLjAyNS0xLjAxOXYtOS4xMjNhMi4wNTEgMi4wNTEgMCAwIDAtMi4wNDgtMi4wNSAyLjA1MyAyLjA1MyAwIDAgMC0yLjA1IDIuMDV2OS4xMjNhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTkgMS4wMjMgMS4wMjMgMCAwIDEtMS4wMjMtMS4wMTl2LTkuMTIzYTIuMDUzIDIuMDUzIDAgMCAwLTIuMDUtMi4wNSAyLjA1MiAyLjA1MiAwIDAgMC0yLjA1IDIuMDV2OS4xMjNhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTkgMS4wMjQgMS4wMjQgMCAwIDEtMS4wMjUtMS4wMTlWMzQuOTAxYTIuMDUxIDIuMDUxIDAgMCAwLTIuMDUtMi4wNDggMi4wNTEgMi4wNTEgMCAwIDAtMi4wNDggMi4wNDhWNjIuMTJhMS4wMTkgMS4wMTkgMCAwIDEtLjcxNC45NzMgMS4wMjIgMS4wMjIgMCAwIDEtMS4xNC0uMzlsLTMuMTQyLTQuNTEyYTEuMDE4IDEuMDE4IDAgMCAxLS4xODItLjU4M3YtOC4yMTdhMi4wNTIgMi4wNTIgMCAwIDAtMi4wNS0yLjA1MSAyLjA1MiAyLjA1MiAwIDAgMC0yLjA1IDIuMDUxdjEyLjA3MWEyLjAyMSAyLjAyMSAwIDAgMCAuNjg2IDEuNTE1IDEuMDM0IDEuMDM0IDAgMCAxIC4xODIuMjE1bDkuMTY1IDExLjM5YTEuMDE4IDEuMDE4IDAgMCAxIC4yMjQuNjM1eiIvPgogICAgICA8cGF0aCBkPSJNMTc3Mi4yNjIgOTAuNzk0aC0yNC43NWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN1Y3OC45ODRhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTktMS4wMThoMjQuNzVhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMS4wMTh2MTAuNzkzYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3em0tMjMuNzMzLTIuMDM0aDIyLjcxMlY4MGgtMjIuNzEyeiIvPgogICAgICA8cGF0aCBkPSJNMTc1MC4yNDkgNzguOTg0aDIuMDM2djEwLjc5NGgtMi4wMzZ6TTE3NTMuNTcxIDgyLjMxNWgzLjEyNXYyLjAzNmgtMy4xMjV6TTE3MjUuMDgyIDIyLjYwMmgzMy4zNnYyLjAzNmgtMzMuMzZ6TTE3MjUuMDgyIDI3LjY5MWgzMy4zNnYyLjAzNmgtMzMuMzZ6TTE3MjUuMDgyIDMyLjc4MmgyMi42MTZ2Mi4wMzVoLTIyLjYxNnpNMTcyNS4wODIgMzcuODdoMjIuNzg5djIuMDM2aC0yMi43ODl6TTE3MjUuMDgyIDQyLjk2aDIyLjYxNnYyLjAzNmgtMjIuNjE2ek0xNzI1LjA4MiA0OC4wNWgxMy4zMzh2Mi4wMzZoLTEzLjMzOHpNMTc1My42MjUgMzIuNzgyaDQuODE2djIuMDM1aC00LjgxNnpNMTczOC42ODYgOS42ODJoNi4xNTF2Mi4wMzZoLTYuMTUxeiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xOTEwLjExOSA2Ny4xMzhoLTc0LjU0NWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOHYtOS4xNTVhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTloNzQuNTQ1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djkuMTU1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE4em0tNzMuNTI4LTIuMDM2aDcyLjUwOXYtNy4xMTloLTcyLjUwOXoiLz4KICAgICAgPHBhdGggZD0iTTE5MTAuMTE5IDU3Ljk4MmgtNzQuNTQ1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5LTEuMDE3VjE5LjY5NGExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAyaDE3LjI2NXYyLjAzN2gtMTYuMjQ4djM1LjIzNWg3Mi41MDlWMjAuNzExaC0xNi4xMjd2LTIuMDM3aDE3LjE0NmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAydjM3LjI3MWExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNyAxLjAxN3pNMTg4MS42NTEgNzguMjJsLTEuODIyLTExLjA4MmgtMTMuOTY0bC0xLjgyMiAxMS4wODItMi4wMS0uMzMxIDEuOTYxLTExLjkzNGExLjAxOCAxLjAxOCAwIDAgMSAxLjAwNS0uODU0aDE1LjdhMS4wMTggMS4wMTggMCAwIDEgMSAuODU0bDEuOTU5IDExLjkzNHoiLz4KICAgICAgPHBhdGggZD0iTTE4NTUuMTYyIDc3LjAzNmgzNS4zN3YyLjAzNmgtMzUuMzd6TTE4MzkuODAzIDE4LjY3NWg1Ni4wNTJ2Mi4wMzZoLTU2LjA1MnpNMTg4MC4xMDYgMzcuMjIzbC03LjQyMiAyLjEtNC4zMjEgNi4zNzYtMy43MzUtMTcuNTUxek0xODczLjcyNCA0My4yNjZsMi4zNzctMS43MTYgNC43NjIgNi41OTQtMi4zNzcgMS43MTd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTEwMTguODEyIDIwMi4yMjNoLTEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAydi01OS4wNGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxNmgxMi44OTJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMS4wMTZ2NTkuMDRhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMnptLTExLjg3NS0yLjAzNWgxMC44NTh2LTU3aC0xMC44NTh6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xMDA1LjkyIDE0OC4xMDRoMTMuMjU1djIuMDM2aC0xMy4yNTV6TTEwMDUuOTIgMTkzLjI4OGgxMy4yNTV2Mi4wMzZoLTEzLjI1NXpNMTA0OS4xNzMgMjAyLjIyNGExIDEgMCAwIDEtLjU2My0uMTcyIDEuMDIgMS4wMiAwIDAgMS0uNDM2LS42NDZsLTExLjcwMS01Ny44NjlhMS4wMjEgMS4wMjEgMCAwIDEgLjgtMS4ybDEyLjY0LTIuNTUzYTEuMDA5IDEuMDA5IDAgMCAxIC43NjMuMTQ5IDEuMDI0IDEuMDI0IDAgMCAxIC40MzYuNjQ2bDExLjY5MiA1Ny44NzFhMS4wMTUgMS4wMTUgMCAwIDEtLjggMS4ybC0xMi42MzggMi41NTNhLjk5NC45OTQgMCAwIDEtLjE5My4wMjF6bS0xMC41LTU4LjA5NGwxMS4yODggNTUuODc2IDEwLjY0Mi0yLjE1MS0xMS4yODgtNTUuODc2eiIvPgogICAgICA8cGF0aCBkPSJNMTAzOC40NzQgMTQ5LjE4NmwxMi45OTUtMi42MTcuNDAyIDEuOTk1LTEyLjk5NSAyLjYxN3pNMTA0Ny40MjIgMTkzLjQ3OWwxMi45OTQtMi42MjIuNDAzIDEuOTk2LTEyLjk5NCAyLjYyMnoiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTEwMzcuMTMxIDE5NS4zMjJoLTEyLjg5NGExLjAxNSAxLjAxNSAwIDAgMS0xLjAxNy0xLjAxN3YtNi4zMzJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMmgxMi44OTRhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMnY2LjMzMmExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNyAxLjAxN3ptLTExLjg3NS0yLjAzM2gxMC44NTZ2LTQuM2gtMTAuODU2ek0xMDM3LjEzMSAxNTAuMTM5aC0xMi44OTRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTYuOTU2YTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE3LTEuMDE2aDEyLjg5NGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxNnY2Ljk1NmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxOXptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTQuOTJoLTEwLjg1NnoiLz4KICAgICAgICA8cGF0aCBkPSJNMTAzNy4xMzEgMjAyLjIyNWgtMTIuODk0YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3LTEuMDE5di02LjlhMS4wMTUgMS4wMTUgMCAwIDEgMS4wMTctMS4wMTdoMTIuODk0YTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE3IDEuMDE3djYuOWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxOXptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTQuODY2aC0xMC44NTZ6TTEwMzcuMTMxIDE4OC45OTFoLTEyLjg5NGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxN1YxNTUuMDZhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTctMS4wMThoMTIuODk0YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE4djMyLjkxNGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxN3ptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTMwLjg3OGgtMTAuODU2eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDM3LjEzMSAxNTYuMDc3aC0xMi44OTRhMS4wMTUgMS4wMTUgMCAwIDEtMS4wMTctMS4wMTd2LTUuOTM4YTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE3LTEuMDE3aDEyLjg5NGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxN3Y1LjkzOGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNyAxLjAxN3ptLTExLjg3NS0yLjAzNGgxMC44NTZ2LTMuOWgtMTAuODU2eiIvPgogICAgICA8L2c+CiAgICAgIDxwYXRoIGQ9Ik05OTAuOTggMjAwLjE4N2g3OS40MDh2Mi4wMzZIOTkwLjk4eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik05MzYuMTY5IDE5OS4xMjZoLTc0LjU0M2ExLjAxNSAxLjAxNSAwIDAgMS0xLjAxNy0xLjAxN3YtOS4xNTNhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTloNzQuNTQzYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE5djkuMTUzYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5IDEuMDE3em0tNzMuNTI4LTIuMDM0aDcyLjUwOXYtNy4xMTloLTcyLjUwN3oiLz4KICAgICAgPHBhdGggZD0iTTkzNi4xNjkgMTg5Ljk3NmgtNzQuNTQzYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3LTEuMDE4di0zNy4yNzJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTdoMTcuMjY1djIuMDM2aC0xNi4yNDh2MzUuMjM0aDcyLjUwOXYtMzUuMjM0aC0xNi4xMjd2LTIuMDM2aDE3LjE0NGExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOSAxLjAxN3YzNy4yNzJhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTh6TTkwNy43MDMgMjEwLjIxMWwtMS44Mi0xMS4wODNoLTEzLjk2NmwtMS44MjIgMTEuMDgzLTIuMDEtLjMzIDEuOTYzLTExLjkzNmExLjAxMyAxLjAxMyAwIDAgMSAxLS44NTFoMTUuN2ExLjAxNiAxLjAxNiAwIDAgMSAxIC44NTFsMS45NjEgMTEuOTM2eiIvPgogICAgICA8cGF0aCBkPSJNODgxLjIxNSAyMDkuMDI4aDM1LjM3djIuMDM2aC0zNS4zN3oiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTkxOS4wMjUgMTg5Ljk3NWgtNDAuMTMyYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE3di01Mi45MjlhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTktMS4wMTdoMzEuOTE5YTEuMDE4IDEuMDE4IDAgMCAxIC43MTguM2w4LjIxNSA4LjIxNWExLjAyIDEuMDIgMCAwIDEgLjMuNzE4djQ0LjcxM2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAyIDEuMDE3em0tMzkuMTE1LTIuMDM3aDM4LjF2LTQzLjI2OWwtNy42MTctNy42MTdoLTMwLjQ4eiIvPgogICAgICAgIDxwYXRoIGQ9Ik05MTkuMDI1IDE0NS4yNjVoLTguMjEzYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di04LjIxM2ExLjAxOCAxLjAxOCAwIDAgMSAuNjI4LS45NCAxLjAyIDEuMDIgMCAwIDEgMS4xMS4yMmw4LjIxNSA4LjIxNGExLjAxOCAxLjAxOCAwIDAgMSAuMjIgMS4xMDggMS4wMTcgMS4wMTcgMCAwIDEtLjk0MS42M3ptLTcuMi0yLjAzN2g0LjczOGwtNC43MzgtNC43Mzd6TTg4NC43IDE0OC45MzFoMjguNTE2djIuMDM2SDg4NC43ek04ODQuNyAxNTQuNDQ3aDI4LjUxNnYyLjAzNUg4ODQuN3pNODg0LjcgMTU5Ljk2M2gyOC41MTZ2Mi4wMzZIODg0Ljd6TTg4NC43IDE2NS40NzhoMjguNTE2djIuMDM2SDg4NC43ek04ODQuNyAxNzAuOTkzaDI4LjUxNnYyLjAzNkg4ODQuN3pNODg0LjcgMTc2LjUwOWgxNy44NTN2Mi4wMzZIODg0Ljd6Ii8+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNjM1LjU0IDIwOC4zNDhhMSAxIDAgMCAxLS4zODktLjA3OSAxLjAxNiAxLjAxNiAwIDAgMS0uNjI4LS45NHYtMTAuNDg2YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3LTEuMDE5aDEwLjQ4M2ExLjAxOCAxLjAxOCAwIDAgMSAuOTQuNjI5IDEuMDIgMS4wMiAwIDAgMS0uMjIgMS4xMWwtMTAuNDg1IDEwLjQ4NWExLjAyNiAxLjAyNiAwIDAgMS0uNzE4LjN6bTEuMDE3LTEwLjQ4N3Y3LjAxbDcuMDEyLTcuMDF6TTYzMS4xMzYgMTc4LjA5NWExLjAwNyAxLjAwNyAwIDAgMS0uMi0uMDIxbC05LjE2NS0xLjg1NGExLjAxOSAxLjAxOSAwIDAgMS0uNzczLS43IDEuMDE3IDEuMDE3IDAgMCAxIC4yNTYtMS4wMTNsMjkuMjM5LTI5LjI0MmExLjAxNiAxLjAxNiAwIDAgMSAxLjQ0MSAwbDUuNTExIDUuNTExYTEuMDE2IDEuMDE2IDAgMCAxIC4zLjcyIDEuMDExIDEuMDExIDAgMCAxLS4zLjcxOGwtMjUuNTg3IDI1LjU4NWExLjAxMiAxLjAxMiAwIDAgMS0uNzIyLjI5NnptLTcuMS0zLjVsNi43NzIgMS4zNzMgMjQuNDgxLTI0LjQ4LTQuMDcyLTQuMDcyeiIvPgogICAgICA8cGF0aCBkPSJNNjMyLjk5NCAxODcuMjYyYS45ODguOTg4IDAgMCAxLS4yOTMtLjA0NCAxLjAxNiAxLjAxNiAwIDAgMS0uNy0uNzcxbC0xLjg1OC05LjE2N2ExLjAyIDEuMDIgMCAwIDEgLjI3OC0uOTIybDI1LjU4Ny0yNS41ODVhMS4wMTIgMS4wMTIgMCAwIDEgLjcyLS4zIDEuMDExIDEuMDExIDAgMCAxIC43MTguM2w1LjUxMSA1LjUxYTEuMDIgMS4wMiAwIDAgMSAwIDEuNDQxbC0yOS4yMzkgMjkuMjM5YTEuMDE4IDEuMDE4IDAgMCAxLS43MjQuMjk5em0tLjc1My05Ljg1MmwxLjM3NCA2Ljc3MiAyNy4xNzktMjcuMTc5LTQuMDctNC4wNzJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik02MjAuMiAxODkuMDkxYTEuMDIyIDEuMDIyIDAgMCAxLS43Mi0uMyAxLjAxNiAxLjAxNiAwIDAgMS0uMjg3LS44NjNsMS44MjgtMTIuNzk0YTEuMDIgMS4wMiAwIDAgMSAuNDItLjY4NiAxLjAyIDEuMDIgMCAwIDEgLjc4Ny0uMTdsOS4xIDEuOGExLjAxOSAxLjAxOSAwIDAgMSAuOC43OTVsMS44NTggOS4xNjlhMS4wMTYgMS4wMTYgMCAwIDEtLjE2Ny43ODkgMS4wMTQgMS4wMTQgMCAwIDEtLjY4Ni40MTlsLTEyLjc5NCAxLjgyOWEuODgxLjg4MSAwIDAgMS0uMTM5LjAxMnptMi42ODYtMTIuNmwtMS40ODUgMTAuMzg1IDEwLjM4Mi0xLjQ4My0xLjUwOS03LjQ0NnpNNjYyLjE3OSAxNTcuOTYyYTEuMDEzIDEuMDEzIDAgMCAxLS43Mi0uM2wtMTAuOTY3LTEwLjk2NWExLjAyNCAxLjAyNCAwIDAgMS0uMy0uNzIgMS4wMTggMS4wMTggMCAwIDEgLjMtLjcxOWwyLjc5MS0yLjc5MWExLjAxMSAxLjAxMSAwIDAgMSAuNzE4LS4zIDEuMDE2IDEuMDE2IDAgMCAxIC43Mi4zbDEwLjk2NSAxMC45NjVhMS4wMiAxLjAyIDAgMCAxIDAgMS40NDFsLTIuNzg5IDIuNzg4YTEuMDE5IDEuMDE5IDAgMCAxLS43MTguMzAxem0tOS41MjktMTEuOTgybDkuNTI5IDkuNTI3IDEuMzQ4LTEuMzVMNjU0IDE0NC42M3oiLz4KICAgICAgPHBhdGggZD0iTTY2NC45NjYgMTU1LjE3NmExLjAxOCAxLjAxOCAwIDAgMS0uNzE4LS4zbC0xMC45NjUtMTAuOTY4YTEuMDE2IDEuMDE2IDAgMCAxIDAtMS40MzhsMi41LTIuNWE0LjE2MSA0LjE2MSAwIDAgMSAyLjk2Mi0xLjIxNyA0LjI4IDQuMjggMCAwIDEgMy4wNDcgMS4yNjZsNi4zNSA2LjM0OGE0LjI1NCA0LjI1NCAwIDAgMSAuMDQ2IDYuMDA4bC0yLjUgMi41YTEuMDI2IDEuMDI2IDAgMCAxLS43MjIuMzAxem0tOS41MjUtMTEuOTg0bDkuNTI1IDkuNTI2IDEuNzgyLTEuNzgxYTIuMjE4IDIuMjE4IDAgMCAwLS4wNDktMy4xMzFsLTYuMzQ4LTYuMzQ4YTIuMjc3IDIuMjc3IDAgMCAwLTMuMTMtLjA0N3pNNjIwLjI2OCAxODMuMjkybDEuNDQtMS40NCA0Ljg0NCA0Ljg0NC0xLjQ0IDEuNDR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik02MzUuNTQxIDIwOC4zNWgtNDAuNzQ0YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di02Ny41NThhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTloNTEuMjI4YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE5djExLjM5M2ExLjAxNSAxLjAxNSAwIDAgMS0uMy43MTZsLTIzLjc1OSAyMy44NzUtMS41ODggMTEuMTE1IDExLjExMy0xLjU4OCAxMi43OTQtMTIuNzkyYTEuMDE1IDEuMDE1IDAgMCAxIDEuMTEtLjIyMiAxLjAxOSAxLjAxOSAwIDAgMSAuNjI4Ljk0djIzLjYzNGExLjAxOCAxLjAxOCAwIDAgMS0uMy43MjFsLTEwLjQ4NSAxMC40ODVhMS4wMjggMS4wMjggMCAwIDEtLjcxNi4zem0tMzkuNzI3LTIuMDM0aDM5LjNsOS44OS05Ljg4OXYtMjAuNzU1bC0xMS4yOTQgMTEuM2ExLjAyOCAxLjAyOCAwIDAgMS0uNTc1LjI4N2wtMTIuNzk0IDEuODI5YTEuMDIxIDEuMDIxIDAgMCAxLS44NjYtLjI4NiAxLjAxOCAxLjAxOCAwIDAgMS0uMjg3LS44NjRsMS44MjgtMTIuNzk0YTEuMDM3IDEuMDM3IDAgMCAxIC4yODYtLjU3NGwyMy43LTIzLjgxOHYtOS45NTRoLTQ5LjE4OHoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTE2Ny45MjQgMTk4LjEzN2gtMzcuNjkyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5LTEuMDE3di0zNy42OTFhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTloMzcuNjkyYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djM3LjY5NGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNyAxLjAxNHptLTM2LjY3NS0yLjAzNmgzNS42NTZ2LTM1LjY1OGgtMzUuNjU2eiIvPgogICAgICA8cGF0aCBkPSJNMTE3NC4yOTUgMjAzLjg0aC01MC40MzRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTd2LTY1LjkyNWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxN2g1MC40MzRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTd2NjUuOTI1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE3em0tNDkuNDE0LTIuMDM2aDQ4LjR2LTYzLjg4N2gtNDguNHoiLz4KICAgICAgPHBhdGggZD0iTTExNjcuMjA2IDE1NS4yMjFoLTM2LjI1OGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxOHYtMTAuNDM0YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3LTEuMDE4aDM2LjI1OGExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOSAxLjAxOHYxMC40MzRhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTh6bS0zNS4yMzktMi4wMzVoMzQuMjIydi04LjRoLTM0LjIyMnpNMTEzNy44OTEgMTU5LjQyNWgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTExMzcuODkxIDE2OS45MzFoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xMTMwLjIzIDE2Ny4wODdoNi44NTN2Mi4wMzZoLTYuODUzek0xMTQwLjczNSAxNjcuMDg3aDYuNTE5djIuMDM2aC02LjUxOXpNMTE1MC44NiAxNjcuMDg3aDYuNTU5djIuMDM2aC02LjU1OXpNMTE2MS4wNyAxNjcuMDg3aDYuODUzdjIuMDM2aC02Ljg1M3pNMTEzMC4yMyAxNzcuMjU2aDYuODUzdjIuMDM1aC02Ljg1M3pNMTE0MC43MzUgMTc3LjI1Nmg2LjUxOXYyLjAzNWgtNi41MTl6TTExNTAuODYgMTc3LjI1Nmg2LjU1OXYyLjAzNWgtNi41NTl6TTExNjEuMDcgMTc3LjI1Nmg2Ljg1M3YyLjAzNWgtNi44NTN6TTExMzAuMjMgMTg3LjQyMmg2Ljg1M3YyLjAzNmgtNi44NTN6TTExNDAuNzM2IDE4Ny40MjJoNi41MTl2Mi4wMzZoLTYuNTE5ek0xMTM3Ljg5MSAxNzkuNzYyaDIuMDM2djYuODUzaC0yLjAzNnpNMTEzNy44OTEgMTkwLjI2N2gyLjAzNnY2Ljg1M2gtMi4wMzZ6TTExNTAuODYgMTg3LjQyMmg2LjU1OXYyLjAzNmgtNi41NTl6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMTU4LjIyNyAxNTkuNDI1aDIuMDM2djYuODU0aC0yLjAzNnpNMTE1OC4yMjcgMTY5LjkzaDIuMDM2djYuODUzaC0yLjAzNnpNMTE1OC4yMjcgMTc5Ljc2MmgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTExNTguMjI3IDE5MC4yNjdoMi4wMzZ2Ni44NTNoLTIuMDM2eiIvPgogICAgICA8L2c+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMTQ4LjA1OSAxNTkuNDI1aDIuMDM2djYuODU0aC0yLjAzNnpNMTE0OC4wNTkgMTY5LjkzaDIuMDM2djYuODUzaC0yLjAzNnpNMTE0OC4wNiAxNzkuNzYyaDIuMDM1djYuODUzaC0yLjAzNXpNMTE0OC4wNiAxOTAuMjY3aDIuMDM1djYuODUzaC0yLjAzNXoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0zNTguNDA2IDIwMi4wMjRoLTIxLjYxNWEzLjg2MyAzLjg2MyAwIDAgMS0zLjg1OC0zLjg2di01LjM2N2ExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxNmgxOS41NnYyLjAzNmgtMTguNTR2NC4zNDhhMS44MjUgMS44MjUgMCAwIDAgMS44MjIgMS44MjRoMjEuNjE0ek0zNzkuODEyIDE0Ny4zNDJoLTQ1Ljg2MWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxNy0xLjAxOXYtNC40MjJhMy44NjQgMy44NjQgMCAwIDEgMy44NTgtMy44NThoNDAuMThhMy44NjQgMy44NjQgMCAwIDEgMy44NTggMy44NTh2NC40MjJhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTggMS4wMTl6bS00NC44NDItMi4wMzZoNDMuODIxdi0zLjRhMS44MjQgMS44MjQgMCAwIDAtMS44MjItMS44MjJoLTQwLjE3OGExLjgyMyAxLjgyMyAwIDAgMC0xLjgyMiAxLjgyMnoiLz4KICAgICAgPHBhdGggZD0iTTM1My41MTEgMTkzLjgyMWgtMTkuNTZhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTl2LTQ2LjQ4MWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxNmg0NS44NjFhMS4wMTggMS4wMTggMCAwIDEgMS4wMTkgMS4wMTZ2MjYuNTEzaC0yLjA0VjE0Ny4zNEgzMzQuOTd2NDQuNDM4aDE4LjU0eiIvPgogICAgICA8cGF0aCBkPSJNMzg2LjAxOSAyMTEuOTkzaC0yMi4yMTFhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTVsLS4wMDgtMy40LTktMTEuMTg3YTQuMDgxIDQuMDgxIDAgMCAxLTEuMjU5LTIuOTQxdi0xMi4wNzFhNC4wOTEgNC4wOTEgMCAwIDEgNC4wODYtNC4wODYgNC4wOTEgNC4wOTEgMCAwIDEgNC4wODQgNC4wODZ2Ny45bDEuMTA4IDEuNTg5di0yMy45NzdhNC4wOSA0LjA5IDAgMCAxIDQuMDg0LTQuMDg3IDQuMDg4IDQuMDg4IDAgMCAxIDQuMDg0IDQuMDg3djVhNC4wODIgNC4wODIgMCAwIDEgMi4wNi0uNTU3IDQuMDggNC4wOCAwIDAgMSAzLjA3MSAxLjM5NSA0LjA3NyA0LjA3NyAwIDAgMSAzLjA3MS0xLjM5NSA0LjA5MiA0LjA5MiAwIDAgMSAzLjkzMSAyLjk3IDQuMDU3IDQuMDU3IDAgMCAxIDIuMjEyLS42NTIgNC4wODkgNC4wODkgMCAwIDEgNC4wODQgNC4wODZ2MjMuMzQzYTQuMDc5IDQuMDc5IDAgMCAxLTEuMzYyIDMuMDQ1djYuODQ1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE2IDEuMDIyem0tMjEuMi0yLjAzNmgyMC4xNzd2LTYuMzIyYTEuMDE2IDEuMDE2IDAgMCAxIC40NTItLjg0NSAyLjA0NSAyLjA0NSAwIDAgMCAuOTEtMS43di0yMy4zNDNhMi4wNTEgMi4wNTEgMCAwIDAtMi4wNDgtMi4wNSAyLjA1MiAyLjA1MiAwIDAgMC0yLjA1IDIuMDV2Ni44YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5IDEuMDE3IDEuMDI0IDEuMDI0IDAgMCAxLTEuMDI1LTEuMDE3di05LjEyNWEyLjA1MSAyLjA1MSAwIDAgMC0yLjA0OC0yLjA0OCAyLjA1MiAyLjA1MiAwIDAgMC0yLjA1IDIuMDQ4djkuMTI1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5IDEuMDE3IDEuMDIyIDEuMDIyIDAgMCAxLTEuMDIzLTEuMDE3di05LjEyNWEyLjA1MiAyLjA1MiAwIDAgMC0yLjA1LTIuMDQ4IDIuMDUzIDIuMDUzIDAgMCAwLTIuMDUyIDIuMDQ4djkuMTI1YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3IDEuMDIzIDEuMDIzIDAgMCAxLTEuMDI1LTEuMDE3di0xNy42NTNhMi4wNTQgMi4wNTQgMCAwIDAtMi4wNS0yLjA1MSAyLjA1MiAyLjA1MiAwIDAgMC0yLjA0OCAyLjA1MXYyNy4yMTlhMS4wMTcgMS4wMTcgMCAwIDEtLjcxNC45NzEgMS4wMTggMS4wMTggMCAwIDEtMS4xNC0uMzlsLTMuMTQyLTQuNTExYTEuMDE3IDEuMDE3IDAgMCAxLS4xODQtLjU4MnYtOC4yMTlhMi4wNTEgMi4wNTEgMCAwIDAtMi4wNDgtMi4wNSAyLjA1MyAyLjA1MyAwIDAgMC0yLjA1IDIuMDV2MTIuMDY4YTIuMDI4IDIuMDI4IDAgMCAwIC42ODYgMS41MTguOTQ1Ljk0NSAwIDAgMSAuMTgyLjIxNmw5LjE2MyAxMS4zODlhMSAxIDAgMCAxIC4yMjYuNjM1eiIvPgogICAgICA8cGF0aCBkPSJNMzg3LjM4IDIyMi43ODhoLTI0Ljc0OGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxN3YtMTAuNzkzYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE5aDI0Ljc0OGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxOXYxMC43OTNhMS4wMTggMS4wMTggMCAwIDEtMS4wMTkgMS4wMTd6bS0yMy43MzEtMi4wMzZoMjIuNzA5di04Ljc1OGgtMjIuNzA5eiIvPgogICAgICA8cGF0aCBkPSJNMzY1LjM2OSAyMTAuOTc2aDIuMDM2djEwLjc5NGgtMi4wMzZ6TTM2OC42OTEgMjE0LjMwOGgzLjEyNXYyLjAzNmgtMy4xMjV6TTM0MC4yMDIgMTU0LjU5NGgzMy4zNnYyLjAzNmgtMzMuMzZ6TTM0MC4yMDIgMTU5LjY4M2gzMy4zNnYyLjAzNmgtMzMuMzZ6TTM0MC4yMDIgMTY0Ljc3NGgyMi42MTZ2Mi4wMzVoLTIyLjYxNnpNMzQwLjIwMiAxNjkuODYyaDIyLjc4OXYyLjAzNmgtMjIuNzg5ek0zNDAuMjAyIDE3NC45NTJoMjIuNjE2djIuMDM2aC0yMi42MTZ6TTM0MC4yMDIgMTgwLjA0MmgxMy4zMzh2Mi4wMzZoLTEzLjMzOHpNMzY4Ljc0NSAxNjQuNzc0aDQuODE2djIuMDM1aC00LjgxNnpNMzUzLjgwNiAxNDEuNjc0aDYuMTUxdjIuMDM2aC02LjE1MXoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNzM1Ljk1MSAxOTYuMTM4YTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI2LTcuNDI4di0xOC4zOTRhNy40MzUgNy40MzUgMCAwIDEgNy40MjYtNy40MjYgNy40MzUgNy40MzUgMCAwIDEgNy40MjYgNy40MjZ2MTguMzk0YTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI2IDcuNDI4em0wLTMxLjIxMWE1LjQgNS40IDAgMCAwLTUuMzkgNS4zOXYxOC4zOTRhNS40IDUuNCAwIDAgMCA1LjM5IDUuMzkxIDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5MXYtMTguMzk0YTUuNCA1LjQgMCAwIDAtNS4zOS01LjM5eiIvPgogICAgICA8cGF0aCBkPSJNNzI5LjU0MiAxOTAuMjY2YTcuMjYyIDcuMjYyIDAgMCAxLTcuMjU0LTcuMjU1di03YTcuMjYzIDcuMjYzIDAgMCAxIDcuMjU0LTcuMjU1aC4wODdhLjk1Ljk1IDAgMCAxIC43Mi4zMjkuOTkyLjk5MiAwIDAgMSAuMjM2Ljc3NGMtLjAxNC4xNDktLjAyNC4zLS4wMjQuNDV2MTguMzkzYzAgLjE1NC4wMS4zLjAyNC40NWExLjAyOCAxLjAyOCAwIDAgMS0uMjY0Ljc3NyAxLjAxOCAxLjAxOCAwIDAgMS0uNzUxLjMyOXptLTEuMDE3LTE5LjM3OGE1LjIzNCA1LjIzNCAwIDAgMC00LjIgNS4xMjh2N2E1LjIyNiA1LjIyNiAwIDAgMCA0LjIgNS4xMTl6TTczNC45MzQgMTYzLjkwOGgyLjAzNXYxNS42MDVoLTIuMDM1ek03MzQuOTM0IDE4NS4yMzhoMi4wMzV2OS44ODFoLTIuMDM1ek03ODcuNzM3IDE5Ni4xMzhhNy40MzYgNy40MzYgMCAwIDEtNy40MjgtNy40Mjh2LTE4LjM5NGE3LjQzNSA3LjQzNSAwIDAgMSA3LjQyOC03LjQyNiA3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNiA3LjQyNnYxOC4zOTRhNy40MzUgNy40MzUgMCAwIDEtNy40MjYgNy40Mjh6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOTIgNS4zOXYxOC4zOTRhNS40IDUuNCAwIDAgMCA1LjM5MiA1LjM5MSA1LjQgNS40IDAgMCAwIDUuMzktNS4zOTF2LTE4LjM5NGE1LjQgNS40IDAgMCAwLTUuMzktNS4zOXoiLz4KICAgICAgPHBhdGggZD0iTTc5NC4xNDMgMTkwLjI2NmgtLjA4N2EuOTYyLjk2MiAwIDAgMS0uNzE4LS4zMjcgMS4wMDggMS4wMDggMCAwIDEtLjIzNi0uNzczYy4wMTItLjE0OS4wMjQtLjMuMDI0LS40NTR2LTE4LjM5M2MwLS4xNTQtLjAxMi0uMy0uMDI0LS40NTRhMS4wMiAxLjAyIDAgMCAxIC4yNjYtLjc3My45OTMuOTkzIDAgMCAxIC43NTEtLjMyOSA3LjI2OCA3LjI2OCAwIDAgMSA3LjI4IDcuMjU1djdhNy4yNjIgNy4yNjIgMCAwIDEtNy4yNTYgNy4yNDh6bTEuMDE5LTE5LjM3djE3LjIzNGE1LjIyOCA1LjIyOCAwIDAgMCA0LjItNS4xMTl2LTdhNS4yMjcgNS4yMjcgMCAwIDAtNC4yLTUuMTE0ek03ODYuNzE4IDE2My45MDhoMi4wMzZ2MTUuNjA1aC0yLjAzNnpNNzg2LjcxOCAxODUuMjM4aDIuMDM2djkuODgxaC0yLjAzNnoiLz4KICAgICAgPHBhdGggZD0iTTc4OC43OTQgMTYzLjkwOWgtMi4wMzl2LTEuNzE3YTI0LjgyOSAyNC44MjkgMCAwIDAtMi44NzQtMTEuNTkzbDEuOC0uOTU0YTI2Ljg5MyAyNi44OTMgMCAwIDEgMy4xMTEgMTIuNTQ4ek03MzcuMjE4IDE2My45MWgtMi4wMzZ2LTEuNzE4YTI2Ljg2NSAyNi44NjUgMCAwIDEgMy4xMS0xMi41NDZsMS44Ljk1NWEyNC44IDI0LjggMCAwIDAtMi44NzMgMTEuNTkxeiIvPgogICAgICA8cGF0aCBkPSJNNzQyLjUzMSAxNTIuMTQxYS45OTIuOTkyIDAgMCAxLS4yOTEtLjA0NWwtNi42MzMtMS45ODJhMS4wMjUgMS4wMjUgMCAwIDEtLjY0Mi0uNTczIDEuMDE3IDEuMDE3IDAgMCAxIC4wMjQtLjg2IDMwLjA3OCAzMC4wNzggMCAwIDEgMjctMTYuNjkgMzAuMDc3IDMwLjA3NyAwIDAgMSAyNyAxNi42OSAxLjAxNyAxLjAxNyAwIDAgMSAuMDI2Ljg2IDEuMDIzIDEuMDIzIDAgMCAxLS42NDQuNTczbC02LjYzMyAxLjk4MmExLjAxOCAxLjAxOCAwIDAgMS0xLjE3NC0uNDY5IDIxLjQ0OSAyMS40NDkgMCAwIDAtMTguNTcxLTEwLjgxNCAyMS40NSAyMS40NSAwIDAgMC0xOC41NzMgMTAuODE0IDEuMDE2IDEuMDE2IDAgMCAxLS44ODkuNTE0em0xOS40NTctMTMuMzYzYTIzLjQ4NiAyMy40ODYgMCAwIDEgMTkuOTIzIDExLjE0bDQuNjg2LTEuNGEyOC4wMzcgMjguMDM3IDAgMCAwLTI0LjYwOC0xNC40OTEgMjguMDMyIDI4LjAzMiAwIDAgMC0yNC42MDggMTQuNDkxbDQuNjg0IDEuNGEyMy40OSAyMy40OSAwIDAgMSAxOS45MjMtMTEuMTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NjEuODQzIDE4Mi40NTFhMTUuMiAxNS4yIDAgMCAxLTE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4NyAxNS4xODcgMTUuMiAxNS4yIDAgMCAxLTE1LjE4NyAxNS4xODd6bTAtMjguMzM4YTEzLjE2NyAxMy4xNjcgMCAwIDAtMTMuMTUxIDEzLjE1IDEzLjE2NiAxMy4xNjYgMCAwIDAgMTMuMTUxIDEzLjE1MSAxMy4xNjUgMTMuMTY1IDAgMCAwIDEzLjE1MS0xMy4xNTEgMTMuMTY2IDEzLjE2NiAwIDAgMC0xMy4xNTEtMTMuMTV6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NTcuMDYgMTc2LjAyNGExIDEgMCAwIDEtLjUxMS0uMTM3IDEuMDEzIDEuMDEzIDAgMCAxLS41MDktLjg3OXYtMTUuNDg2YTEuMDE5IDEuMDE5IDAgMCAxIC41MDktLjg4MiAxLjAyIDEuMDIgMCAwIDEgMS4wMTkgMGwxMy40MTEgNy43NDNhMS4wMTggMS4wMTggMCAwIDEgLjUwOC44ODIgMS4wMTggMS4wMTggMCAwIDEtLjUwOC44ODJsLTEzLjQxMSA3Ljc0MWExIDEgMCAwIDEtLjUwOC4xMzZ6bTEuMDE3LTE0LjczOXYxMS45NThsMTAuMzU4LTUuOTc5ek03NTQuNDAzIDIwNi42NzZoLTEzLjAyMmE2LjM3NSA2LjM3NSAwIDAgMS02LjQ0Ny02LjI4NnYtNS4yNzFoMi4wNHY1LjI3MWE0LjMzOCA0LjMzOCAwIDAgMCA0LjQxMSA0LjI1MWgxMy4wMjJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NjUuOTY2IDIwOS45OTRoLTguMjQ1YTQuMzQxIDQuMzQxIDAgMCAxLTQuMzM0LTQuMzM4IDQuMzQgNC4zNCAwIDAgMSA0LjMzNC00LjMzNGg4LjI0NWE0LjM0MSA0LjM0MSAwIDAgMSA0LjMzNiA0LjMzNCA0LjM0MSA0LjM0MSAwIDAgMS00LjMzNiA0LjMzOHptLTguMjQ1LTYuNjM2YTIuMyAyLjMgMCAwIDAtMi4zIDIuMyAyLjMgMi4zIDAgMCAwIDIuMyAyLjNoOC4yNDVhMi4zIDIuMyAwIDAgMCAyLjMtMi4zIDIuMyAyLjMgMCAwIDAtMi4zLTIuM3oiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNTI1LjIzOSAxOTkuMTI1aC03NC41NDVhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTktMS4wMTd2LTkuMTUzYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE5aDc0LjU0NWExLjAxOSAxLjAxOSAwIDAgMSAxLjAxNyAxLjAxOXY5LjE1M2ExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNyAxLjAxN3ptLTczLjUyOC0yLjAzNGg3Mi41MDl2LTcuMTE5aC03Mi41MDl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik01MjUuMjM5IDE4OS45NzVoLTc0LjU0NWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOHYtMzcuMjcyYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE3aDE3LjI2NXYyLjAzNmgtMTYuMjQ4djM1LjIzNGg3Mi41MDl2LTM1LjIzNGgtMTYuMTI3di0yLjAzNmgxNy4xNDZhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTd2MzcuMjcyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE4ek00OTYuNzcxIDIxMC4yMTFsLTEuODIyLTExLjA4M2gtMTMuOTY2bC0xLjgyIDExLjA4My0yLjAxLS4zMyAxLjk2MS0xMS45MzZhMS4wMTYgMS4wMTYgMCAwIDEgMS0uODUxaDE1LjdhMS4wMTQgMS4wMTQgMCAwIDEgMSAuODUxbDEuOTYxIDExLjkzNnoiLz4KICAgICAgPHBhdGggZD0iTTQ3MC4yODIgMjA5LjAyN2gzNS4zN3YyLjAzNmgtMzUuMzd6TTQ1NC45MjMgMTUwLjY2OGg1Ni4wNTJ2Mi4wMzZoLTU2LjA1MnpNNDk1LjIyNiAxNjkuMjE2bC03LjQyMiAyLjEtNC4zMiA2LjM3Ny0zLjczNS0xNy41NTF6TTQ4OC44NDQgMTc1LjI1OGwyLjM3Ny0xLjcxNiA0Ljc2MiA2LjU5NC0yLjM3NyAxLjcxN3oiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTg1Mi41ODUgMTk5LjEyNmgtNzQuNTQ1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5LTEuMDE3di05LjE1M2ExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWg3NC41NDVhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMTl2OS4xNTNhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTcgMS4wMTd6bS03My41MjgtMi4wMzRoNzIuNTA5di03LjExOWgtNzIuNTA5eiIvPgogICAgICA8cGF0aCBkPSJNMTg1Mi41ODUgMTg5Ljk3NmgtNzQuNTQ1YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE4di0zNy4yNzJhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTdoMTcuMjY1djIuMDM2aC0xNi4yNDh2MzUuMjM0aDcyLjUwOXYtMzUuMjM0aC0xNi4xMjZ2LTIuMDM2aDE3LjE0NmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxN3YzNy4yNzJhMS4wMTggMS4wMTggMCAwIDEtMS4wMTggMS4wMTh6TTE4MjQuMTE3IDIxMC4yMTFsLTEuODIyLTExLjA4M2gtMTMuOTY2bC0xLjgyIDExLjA4My0yLjAxLS4zMyAxLjk2MS0xMS45MzZhMS4wMTYgMS4wMTYgMCAwIDEgMS0uODUxaDE1LjdhMS4wMTQgMS4wMTQgMCAwIDEgMSAuODUxbDEuOTYxIDExLjkzNnoiLz4KICAgICAgPHBhdGggZD0iTTE3OTcuNjI4IDIwOS4wMjhoMzUuMzd2Mi4wMzZoLTM1LjM3eiIvPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTgzNS40MzkgMTg5Ljk3NWgtNDAuMTM0YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3LTEuMDE3di01Mi45MjlhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTdoMzEuOTE5YTEuMDIyIDEuMDIyIDAgMCAxIC43Mi4zbDguMjE1IDguMjE1YTEuMDIgMS4wMiAwIDAgMSAuMy43MTh2NDQuNzEzYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDIgMS4wMTd6bS0zOS4xMTUtMi4wMzdoMzguMXYtNDMuMjY5bC03LjYyLTcuNjE3aC0zMC40OHoiLz4KICAgICAgICA8cGF0aCBkPSJNMTgzNS40MzkgMTQ1LjI2NWgtOC4yMTVhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTctMS4wMTl2LTguMjEzYTEuMDE4IDEuMDE4IDAgMCAxIC42MjgtLjk0IDEuMDE5IDEuMDE5IDAgMCAxIDEuMTEuMjJsOC4yMTUgOC4yMTRhMS4wMTkgMS4wMTkgMCAwIDEgLjIyIDEuMTA4IDEuMDE4IDEuMDE4IDAgMCAxLS45NDEuNjN6bS03LjItMi4wMzdoNC43MzhsLTQuNzM4LTQuNzM3ek0xODAxLjExNCAxNDguOTMxaDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xODAxLjExNCAxNTQuNDQ3aDI4LjUxNnYyLjAzNWgtMjguNTE2ek0xODAxLjExNCAxNTkuOTYzaDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xODAxLjExNCAxNjUuNDc4aDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xODAxLjExNCAxNzAuOTkzaDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xODAxLjExNCAxNzYuNTA5aDE3Ljg1M3YyLjAzNmgtMTcuODUzeiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE1NTEuOTU0IDIwOC4zNDhhMSAxIDAgMCAxLS4zODktLjA3OSAxLjAxNiAxLjAxNiAwIDAgMS0uNjI3LS45NHYtMTAuNDg2YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3LTEuMDE5aDEwLjQ4NWExLjAxNyAxLjAxNyAwIDAgMSAuOTQuNjI5IDEuMDIgMS4wMiAwIDAgMS0uMjIgMS4xMWwtMTAuNDg3IDEwLjQ4NWExLjAxOCAxLjAxOCAwIDAgMS0uNzE5LjN6bTEuMDE3LTEwLjQ4N3Y3LjAxbDcuMDEtNy4wMXpNMTU0Ny41NSAxNzguMDk1YS45OTIuOTkyIDAgMCAxLS4yLS4wMjFsLTkuMTY1LTEuODU0YTEuMDEzIDEuMDEzIDAgMCAxLS43NzMtLjcgMS4wMTYgMS4wMTYgMCAwIDEgLjI1NC0xLjAxM2wyOS4yNDEtMjkuMjQyYTEuMDE0IDEuMDE0IDAgMCAxIDEuNDM5IDBsNS41MTMgNS41MTFhMS4wMTUgMS4wMTUgMCAwIDEgLjMuNzIgMS4wMSAxLjAxIDAgMCAxLS4zLjcxOGwtMjUuNTg3IDI1LjU4NWExLjAxOCAxLjAxOCAwIDAgMS0uNzIyLjI5NnptLTcuMTA1LTMuNWw2Ljc3MiAxLjM3MyAyNC40ODEtMjQuNDgtNC4wNzItNC4wNzJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNTQ5LjQwOCAxODcuMjYyYS45NzguOTc4IDAgMCAxLS4yOTMtLjA0NCAxLjAxNiAxLjAxNiAwIDAgMS0uNy0uNzcxbC0xLjg1OS05LjE2N2ExLjAxNSAxLjAxNSAwIDAgMSAuMjc5LS45MjJsMjUuNTg3LTI1LjU4NWExLjAxMiAxLjAxMiAwIDAgMSAuNzE5LS4zIDEuMDE0IDEuMDE0IDAgMCAxIC43Mi4zbDUuNTExIDUuNTFhMS4wMiAxLjAyIDAgMCAxIDAgMS40NDFsLTI5LjIzOSAyOS4yMzlhMS4wMTcgMS4wMTcgMCAwIDEtLjcyNS4yOTl6bS0uNzUzLTkuODUybDEuMzc0IDYuNzcyIDI3LjE3OS0yNy4xNzktNC4wNzItNC4wNzJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNTM2LjYxNCAxODkuMDkxYTEuMDIyIDEuMDIyIDAgMCAxLS43Mi0uMyAxLjAxNiAxLjAxNiAwIDAgMS0uMjg2LS44NjNsMS44MjgtMTIuNzk0YTEuMDIxIDEuMDIxIDAgMCAxIC40Mi0uNjg2IDEuMDE3IDEuMDE3IDAgMCAxIC43ODUtLjE3bDkuMTA3IDEuOGExLjAxOSAxLjAxOSAwIDAgMSAuOC43OTVsMS44NTkgOS4xNjlhMS4wMjQgMS4wMjQgMCAwIDEtLjE2OC43ODkgMS4wMTggMS4wMTggMCAwIDEtLjY4Ni40MTlsLTEyLjc5MyAxLjgyOWEuODgzLjg4MyAwIDAgMS0uMTQ2LjAxMnptMi42ODYtMTIuNmwtMS40ODcgMTAuMzg1IDEwLjM4Mi0xLjQ4My0xLjUwNy03LjQ0NnpNMTU3OC41OTEgMTU3Ljk2MmExLjAyMSAxLjAyMSAwIDAgMS0uNzItLjNsLTEwLjk2NS0xMC45NjVhMS4wMTYgMS4wMTYgMCAwIDEtLjMtLjcyIDEuMDEgMS4wMSAwIDAgMSAuMy0uNzE5bDIuNzg5LTIuNzkxYTEuMDE4IDEuMDE4IDAgMCAxIC43Mi0uMyAxLjAxOSAxLjAxOSAwIDAgMSAuNzIuM2wxMC45NjUgMTAuOTczYTEuMDIxIDEuMDIxIDAgMCAxIDAgMS40NDFsLTIuNzg5IDIuNzg4YTEuMDIgMS4wMiAwIDAgMS0uNzIuMjkzem0tOS41MjctMTEuOTgybDkuNTI3IDkuNTI3IDEuMzUtMS4zNS05LjUyNy05LjUyN3oiLz4KICAgICAgPHBhdGggZD0iTTE1ODEuMzggMTU1LjE3NmExLjAyNiAxLjAyNiAwIDAgMS0uNzItLjNsLTEwLjk2NS0xMC45NjhhMS4wMiAxLjAyIDAgMCAxIDAtMS40MzhsMi41LTIuNWE0LjE1OCA0LjE1OCAwIDAgMSAyLjk2Mi0xLjIxNyA0LjI4IDQuMjggMCAwIDEgMy4wNDcgMS4yNjZsNi4zNSA2LjM0OGE0LjI1NCA0LjI1NCAwIDAgMSAuMDQ3IDYuMDA4bC0yLjUgMi41YTEuMDI2IDEuMDI2IDAgMCAxLS43MjEuMzAxem0tOS41MjYtMTEuOTg0bDkuNTI2IDkuNTI2IDEuNzgyLTEuNzgxYTIuMjE4IDIuMjE4IDAgMCAwLS4wNDgtMy4xMzFsLTYuMzQ4LTYuMzQ4YTIuMjc5IDIuMjc5IDAgMCAwLTMuMTMyLS4wNDd6TTE1MzYuNjgyIDE4My4yOTJsMS40NC0xLjQ0IDQuODQ0IDQuODQ0LTEuNDQgMS40NHoiLz4KICAgICAgPHBhdGggZD0iTTE1NTEuOTU1IDIwOC4zNWgtNDAuNzQ2YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3LTEuMDE5di02Ny41NThhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTctMS4wMTloNTEuMjMzYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE3IDEuMDE5djExLjM5M2ExLjAxNCAxLjAxNCAwIDAgMS0uMjk1LjcxNmwtMjMuNzU5IDIzLjg3NS0xLjU5IDExLjExNSAxMS4xMTUtMS41ODggMTIuNzkyLTEyLjc5MmExLjAxNiAxLjAxNiAwIDAgMSAxLjExLS4yMjIgMS4wMTYgMS4wMTYgMCAwIDEgLjYyNy45NHYyMy42MzRhMS4wMjUgMS4wMjUgMCAwIDEtLjMuNzIxbC0xMC40ODcgMTAuNDg1YTEuMDIxIDEuMDIxIDAgMCAxLS43MTcuM3ptLTM5LjcyNy0yLjAzNGgzOS4zbDkuODktOS44ODl2LTIwLjc1NWwtMTEuMjk0IDExLjNhMS4wMjkgMS4wMjkgMCAwIDEtLjU3NS4yODdsLTEyLjc5MyAxLjgyOWExLjAxOSAxLjAxOSAwIDAgMS0uODY2LS4yODYgMS4wMTkgMS4wMTkgMCAwIDEtLjI4Ny0uODY0bDEuODI4LTEyLjc5NGExLjAyNSAxLjAyNSAwIDAgMSAuMjg3LS41NzRsMjMuNy0yMy44MTh2LTkuOTU0aC00OS4xOXoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTI3NC44MiAyMDIuMDI0aC0yMS42MTRhMy44NjQgMy44NjQgMCAwIDEtMy44Ni0zLjg2di01LjM2N2ExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxNmgxOS41NnYyLjAzNmgtMTguNTQzdjQuMzQ4YTEuODI3IDEuODI3IDAgMCAwIDEuODI0IDEuODI0aDIxLjYxNHpNMTI5Ni4yMjYgMTQ3LjM0MmgtNDUuODY0YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di00LjQyMmEzLjg2NCAzLjg2NCAwIDAgMSAzLjg2LTMuODU4aDQwLjE4MWEzLjg2MiAzLjg2MiAwIDAgMSAzLjg1NiAzLjg1OHY0LjQyMmExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNCAxLjAxOXptLTQ0Ljg0NC0yLjAzNmg0My44Mjd2LTMuNGExLjgyMyAxLjgyMyAwIDAgMC0xLjgyMi0xLjgyMmgtNDAuMTgxYTEuODI1IDEuODI1IDAgMCAwLTEuODI0IDEuODIyeiIvPgogICAgICA8cGF0aCBkPSJNMTI2OS45MjUgMTkzLjgyMWgtMTkuNTYzYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di00Ni40ODFhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTZoNDUuODYxYTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE3IDEuMDE2djI2LjUxM2gtMi4wMzRWMTQ3LjM0aC00My44MjR2NDQuNDM4aDE4LjU0M3oiLz4KICAgICAgPHBhdGggZD0iTTEzMDIuNDMzIDIxMS45OTNoLTIyLjIxMWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxNWwtLjAxLTMuNC05LTExLjE4N2E0LjA4MiA0LjA4MiAwIDAgMS0xLjI1Ny0yLjkzNHYtMTIuMDcxYTQuMDkxIDQuMDkxIDAgMCAxIDQuMDg0LTQuMDg2IDQuMDkxIDQuMDkxIDAgMCAxIDQuMDg2IDQuMDg2djcuOWwxLjEwNiAxLjU4OXYtMjMuOTc3YTQuMDkxIDQuMDkxIDAgMCAxIDQuMDg2LTQuMDg3IDQuMDkgNC4wOSAwIDAgMSA0LjA4NCA0LjA4N3Y1YTQuMDgyIDQuMDgyIDAgMCAxIDIuMDYtLjU1NyA0LjA3NiA0LjA3NiAwIDAgMSAzLjA2OSAxLjM5NSA0LjA4NSA0LjA4NSAwIDAgMSAzLjA3My0xLjM5NSA0LjA4NyA0LjA4NyAwIDAgMSAzLjkyOSAyLjk3IDQuMDY4IDQuMDY4IDAgMCAxIDIuMjEyLS42NTIgNC4wOSA0LjA5IDAgMCAxIDQuMDg2IDQuMDg2djIzLjM0M2E0LjA3OSA0LjA3OSAwIDAgMS0xLjM2MiAzLjA0NXY2Ljg0NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNiAxLjAxNXptLTIxLjItMi4wMzZoMjAuMTgxdi02LjMyMmExLjAxNSAxLjAxNSAwIDAgMSAuNDUyLS44NDUgMi4wNDkgMi4wNDkgMCAwIDAgLjkxLTEuN3YtMjMuMzQzYTIuMDUzIDIuMDUzIDAgMCAwLTIuMDUtMi4wNSAyLjA1MSAyLjA1MSAwIDAgMC0yLjA0OCAyLjA1djYuOGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxNyAxLjAyMyAxLjAyMyAwIDAgMS0xLjAyNS0xLjAxN3YtOS4xMjVhMi4wNTIgMi4wNTIgMCAwIDAtMi4wNDgtMi4wNDggMi4wNTMgMi4wNTMgMCAwIDAtMi4wNTIgMi4wNDh2OS4xMjVhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTcgMS4wMTcgMS4wMjMgMS4wMjMgMCAwIDEtMS4wMjUtMS4wMTd2LTkuMTI1YTIuMDUxIDIuMDUxIDAgMCAwLTIuMDQ4LTIuMDQ4IDIuMDUzIDIuMDUzIDAgMCAwLTIuMDUyIDIuMDQ4djkuMTI1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDE3IDEuMDI1IDEuMDI1IDAgMCAxLTEuMDI3LTEuMDE3di0xNy42NTNhMi4wNTIgMi4wNTIgMCAwIDAtMi4wNDgtMi4wNTEgMi4wNTIgMi4wNTIgMCAwIDAtMi4wNDggMi4wNTF2MjcuMjE5YTEuMDIgMS4wMiAwIDAgMS0uNzE0Ljk3MSAxLjAxOCAxLjAxOCAwIDAgMS0xLjE0LS4zOWwtMy4xNDItNC41MTFhMS4wMTYgMS4wMTYgMCAwIDEtLjE4NC0uNTgydi04LjIxOWEyLjA1MiAyLjA1MiAwIDAgMC0yLjA1LTIuMDUgMi4wNTIgMi4wNTIgMCAwIDAtMi4wNDggMi4wNXYxMi4wNjhhMi4wMjEgMi4wMjEgMCAwIDAgLjY4NiAxLjUxOCAxLjAwOCAxLjAwOCAwIDAgMSAuMTgyLjIxNmw5LjE2MyAxMS4zODlhMS4wMDggMS4wMDggMCAwIDEgLjIyNi42MzV6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xMzAzLjc5MyAyMjIuNzg4aC0yNC43NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxN3YtMTAuNzkzYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDE5aDI0Ljc1YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE5djEwLjc5M2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxN3ptLTIzLjczMS0yLjAzNmgyMi43MTR2LTguNzU4aC0yMi43MTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xMjgxLjc4MiAyMTAuOTc2aDIuMDM2djEwLjc5NGgtMi4wMzZ6TTEyODUuMTA0IDIxNC4zMDhoMy4xMjV2Mi4wMzZoLTMuMTI1ek0xMjU2LjYxNiAxNTQuNTk0aDMzLjM2djIuMDM2aC0zMy4zNnpNMTI1Ni42MTYgMTU5LjY4M2gzMy4zNnYyLjAzNmgtMzMuMzZ6TTEyNTYuNjE2IDE2NC43NzRoMjIuNjE2djIuMDM1aC0yMi42MTZ6TTEyNTYuNjE2IDE2OS44NjJoMjIuNzg5djIuMDM2aC0yMi43ODl6TTEyNTYuNjE2IDE3NC45NTJoMjIuNjE2djIuMDM2aC0yMi42MTZ6TTEyNTYuNjE2IDE4MC4wNDJoMTMuMzM4djIuMDM2aC0xMy4zMzh6TTEyODUuMTU5IDE2NC43NzRoNC44MTZ2Mi4wMzVoLTQuODE2ek0xMjcwLjIyIDE0MS42NzRoNi4xNTF2Mi4wMzZoLTYuMTUxeiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xNjUyLjM2NSAxOTYuMTM4YTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI2LTcuNDI4di0xOC4zOTRhNy40MzUgNy40MzUgMCAwIDEgNy40MjYtNy40MjYgNy40MzUgNy40MzUgMCAwIDEgNy40MjYgNy40MjZ2MTguMzk0YTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI2IDcuNDI4em0wLTMxLjIxMWE1LjQgNS40IDAgMCAwLTUuMzkgNS4zOXYxOC4zOTRhNS40IDUuNCAwIDAgMCA1LjM5IDUuMzkxIDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5MXYtMTguMzk0YTUuNCA1LjQgMCAwIDAtNS4zOS01LjM5eiIvPgogICAgICA8cGF0aCBkPSJNMTY0NS45NTYgMTkwLjI2NmE3LjI2MyA3LjI2MyAwIDAgMS03LjI1Ni03LjI1NXYtN2E3LjI2NCA3LjI2NCAwIDAgMSA3LjI1Ni03LjI1NWguMDg3YS45NTMuOTUzIDAgMCAxIC43Mi4zMjkgMSAxIDAgMCAxIC4yMzYuNzc0Yy0uMDE0LjE0OS0uMDI0LjMtLjAyNC40NXYxOC4zOTNjMCAuMTU0LjAxLjMuMDI0LjQ1YTEuMDM3IDEuMDM3IDAgMCAxLS4yNjQuNzc3IDEuMDIyIDEuMDIyIDAgMCAxLS43NTEuMzI5em0tMS4wMTctMTkuMzc4YTUuMjMyIDUuMjMyIDAgMCAwLTQuMiA1LjEyOHY3YTUuMjI2IDUuMjI2IDAgMCAwIDQuMiA1LjExOXpNMTY1MS4zNDcgMTYzLjkwOGgyLjAzNXYxNS42MDVoLTIuMDM1ek0xNjUxLjM0NyAxODUuMjM4aDIuMDM1djkuODgxaC0yLjAzNXpNMTcwNC4xNTEgMTk2LjEzOGE3LjQzNSA3LjQzNSAwIDAgMS03LjQyOC03LjQyOHYtMTguMzk0YTcuNDM1IDcuNDM1IDAgMCAxIDcuNDI4LTcuNDI2IDcuNDM1IDcuNDM1IDAgMCAxIDcuNDI2IDcuNDI2djE4LjM5NGE3LjQzNSA3LjQzNSAwIDAgMS03LjQyNiA3LjQyOHptMC0zMS4yMTFhNS40IDUuNCAwIDAgMC01LjM5MiA1LjM5djE4LjM5NGE1LjQgNS40IDAgMCAwIDUuMzkyIDUuMzkxIDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5MXYtMTguMzk0YTUuNCA1LjQgMCAwIDAtNS4zOS01LjM5eiIvPgogICAgICA8cGF0aCBkPSJNMTcxMC41NTggMTkwLjI2NmgtLjA4N2EuOTU5Ljk1OSAwIDAgMS0uNzE4LS4zMjcgMSAxIDAgMCAxLS4yMzYtLjc3M2MuMDEyLS4xNDkuMDI0LS4zLjAyNC0uNDU0di0xOC4zOTNjMC0uMTU0LS4wMTItLjMtLjAyNC0uNDU0YTEuMDEyIDEuMDEyIDAgMCAxIC4yNjYtLjc3My45OTMuOTkzIDAgMCAxIC43NTEtLjMyOSA3LjI2OCA3LjI2OCAwIDAgMSA3LjI4MSA3LjI1NXY3YTcuMjYyIDcuMjYyIDAgMCAxLTcuMjU3IDcuMjQ4em0xLjAxOS0xOS4zN3YxNy4yMzRhNS4yMjggNS4yMjggMCAwIDAgNC4yLTUuMTE5di03YTUuMjI3IDUuMjI3IDAgMCAwLTQuMi01LjExNHpNMTcwMy4xMzIgMTYzLjkwOGgyLjAzNnYxNS42MDVoLTIuMDM2ek0xNzAzLjEzMiAxODUuMjM4aDIuMDM2djkuODgxaC0yLjAzNnoiLz4KICAgICAgPHBhdGggZD0iTTE3MDUuMjA2IDE2My45MDloLTIuMDM2di0xLjcxN2EyNC44MzEgMjQuODMxIDAgMCAwLTIuODczLTExLjU5M2wxLjgtLjk1NGEyNi44NjYgMjYuODY2IDAgMCAxIDMuMTEyIDEyLjU0OHpNMTY1My42MyAxNjMuOTFoLTIuMDM0di0xLjcxOGEyNi44NjUgMjYuODY1IDAgMCAxIDMuMTA5LTEyLjU0NmwxLjguOTU1YTI0LjgyMSAyNC44MjEgMCAwIDAtMi44NzUgMTEuNTkxeiIvPgogICAgICA8cGF0aCBkPSJNMTY1OC45NDUgMTUyLjE0MWExLjAxNCAxLjAxNCAwIDAgMS0uMjkyLS4wNDVsLTYuNjMxLTEuOTgyYTEuMDIgMS4wMiAwIDAgMS0uNjQyLS41NzMgMS4wMTcgMS4wMTcgMCAwIDEgLjAyNC0uODYgMzAuMDc3IDMwLjA3NyAwIDAgMSAyNy0xNi42OSAzMC4wNzggMzAuMDc4IDAgMCAxIDI3IDE2LjY5IDEuMDI0IDEuMDI0IDAgMCAxIC4wMjYuODYgMS4wMjMgMS4wMjMgMCAwIDEtLjY0NC41NzNsLTYuNjMzIDEuOTgyYTEuMDIgMS4wMiAwIDAgMS0xLjE3Ni0uNDY5IDIxLjQ0NSAyMS40NDUgMCAwIDAtMTguNTcxLTEwLjgxNCAyMS40NDkgMjEuNDQ5IDAgMCAwLTE4LjU3MSAxMC44MTQgMS4wMTkgMS4wMTkgMCAwIDEtLjg5LjUxNHptMTkuNDU1LTEzLjM2M2EyMy40ODcgMjMuNDg3IDAgMCAxIDE5LjkyNSAxMS4xNGw0LjY4My0xLjRhMjguMDM2IDI4LjAzNiAwIDAgMC0yNC42MDgtMTQuNDkxIDI4LjAzMSAyOC4wMzEgMCAwIDAtMjQuNjA2IDE0LjQ5MWw0LjY4MyAxLjRhMjMuNDg2IDIzLjQ4NiAwIDAgMSAxOS45MjMtMTEuMTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNjc4LjI1OSAxODIuNDUxYTE1LjIgMTUuMiAwIDAgMS0xNS4xODctMTUuMTg3IDE1LjIgMTUuMiAwIDAgMSAxNS4xODctMTUuMTg3IDE1LjIgMTUuMiAwIDAgMSAxNS4xODcgMTUuMTg3IDE1LjIgMTUuMiAwIDAgMS0xNS4xODcgMTUuMTg3em0wLTI4LjMzOGExMy4xNjYgMTMuMTY2IDAgMCAwLTEzLjE1MSAxMy4xNSAxMy4xNjQgMTMuMTY0IDAgMCAwIDEzLjE1MSAxMy4xNTEgMTMuMTY1IDEzLjE2NSAwIDAgMCAxMy4xNTEtMTMuMTUxIDEzLjE2NiAxMy4xNjYgMCAwIDAtMTMuMTUxLTEzLjE1eiIvPgogICAgICA8cGF0aCBkPSJNMTY3My40NzIgMTc2LjAyNGExIDEgMCAwIDEtLjUwOS0uMTM3IDEuMDEzIDEuMDEzIDAgMCAxLS41MDktLjg3OXYtMTUuNDg2YTEuMDE5IDEuMDE5IDAgMCAxIC41MDktLjg4MiAxLjAyIDEuMDIgMCAwIDEgMS4wMTkgMGwxMy40MTEgNy43MzhhMS4wMjMgMS4wMjMgMCAwIDEgLjUwOS44ODIgMS4wMjIgMS4wMjIgMCAwIDEtLjUwOS44ODJsLTEzLjQxMSA3Ljc0MWExIDEgMCAwIDEtLjUxLjE0MXptMS4wMTktMTQuNzM5djExLjk1OGwxMC4zNTYtNS45Nzl6TTE2NzAuODE3IDIwNi42NzZoLTEzLjAyNGE2LjM3NCA2LjM3NCAwIDAgMS02LjQ0NS02LjI4NnYtNS4yNzFoMi4wMzR2NS4yNzFhNC4zMzkgNC4zMzkgMCAwIDAgNC40MTEgNC4yNTFoMTMuMDIzeiIvPgogICAgICA8cGF0aCBkPSJNMTY4Mi4zOCAyMDkuOTk0aC04LjI0NWE0LjM0MSA0LjM0MSAwIDAgMS00LjMzNC00LjMzOCA0LjM0IDQuMzQgMCAwIDEgNC4zMzQtNC4zMzRoOC4yNDVhNC4zNDEgNC4zNDEgMCAwIDEgNC4zMzYgNC4zMzQgNC4zNDEgNC4zNDEgMCAwIDEtNC4zMzYgNC4zMzh6bS04LjI0NS02LjYzNmEyLjMgMi4zIDAgMCAwLTIuMyAyLjMgMi4zIDIuMyAwIDAgMCAyLjMgMi4zaDguMjQ1YTIuMyAyLjMgMCAwIDAgMi4zLTIuMyAyLjMgMi4zIDAgMCAwLTIuMy0yLjN6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE0NDEuNjUyIDE5OS4xMjVoLTc0LjU0M2ExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtOS4xNTNhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTloNzQuNTQzYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE3IDEuMDE5djkuMTUzYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDE3em0tNzMuNTI4LTIuMDM0aDcyLjUwOXYtNy4xMTloLTcyLjUwN3oiLz4KICAgICAgPHBhdGggZD0iTTE0NDEuNjUyIDE4OS45NzVoLTc0LjU0M2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOHYtMzcuMjcyYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE3aDE3LjI2NXYyLjAzNmgtMTYuMjQ4djM1LjIzNGg3Mi41MDl2LTM1LjIzNGgtMTYuMTI3di0yLjAzNmgxNy4xNDRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTd2MzcuMjcyYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE3IDEuMDE4ek0xNDEzLjE4NiAyMTAuMjExbC0xLjgyMi0xMS4wODNoLTEzLjk2NmwtMS44MiAxMS4wODMtMi4wMS0uMzMgMS45NjEtMTEuOTM2YTEuMDE2IDEuMDE2IDAgMCAxIDEtLjg1MWgxNS42OTNhMS4wMTYgMS4wMTYgMCAwIDEgMSAuODUxbDEuOTYxIDExLjkzNnoiLz4KICAgICAgPHBhdGggZD0iTTEzODYuNjk3IDIwOS4wMjdoMzUuMzd2Mi4wMzZoLTM1LjM3ek0xMzcxLjMzOCAxNTAuNjY4aDU2LjA1MnYyLjAzNmgtNTYuMDUyek0xNDExLjY0MSAxNjkuMjE2bC03LjQyMiAyLjEtNC4zMjEgNi4zNzctMy43MzUtMTcuNTUxek0xNDA1LjI1OSAxNzUuMjU4bDIuMzc3LTEuNzE2IDQuNzYyIDYuNTk0LTIuMzc3IDEuNzE3eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xNDg3LjI3OSAzNDYuODM0aC0xMi44OTNhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTctMS4wMTZ2LTU5LjA0MWExLjAxNSAxLjAxNSAwIDAgMSAxLjAxNy0xLjAxNmgxMi44OTNhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTkgMS4wMTZ2NTkuMDQxYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5IDEuMDE2em0tMTEuODc1LTIuMDM2aDEwLjg1OHYtNTdoLTEwLjg1OXoiLz4KICAgICAgPHBhdGggZD0iTTE0NzQuMzg2IDI5Mi43MTZoMTMuMjU1djIuMDM2aC0xMy4yNTV6TTE0NzQuMzg2IDMzNy45aDEzLjI1NXYyLjAzNmgtMTMuMjU1ek0xNTE3LjYzMyAzNDYuODM1YTEuMDEzIDEuMDEzIDAgMCAxLS41NjMtLjE3IDEuMDE2IDEuMDE2IDAgMCAxLS40MzYtLjY0NWwtMTEuNjkyLTU3Ljg3MmExLjAxNyAxLjAxNyAwIDAgMSAuOC0xLjJsMTIuNjM4LTIuNTU0YTEgMSAwIDAgMSAuNzYzLjE1MSAxIDEgMCAwIDEgLjQzNi42NDZsMTEuNjkyIDU3Ljg3MmExLjAxOCAxLjAxOCAwIDAgMS0uNzk1IDEuMmwtMTIuNjM4IDIuNTUyYS45ODguOTg4IDAgMCAxLS4yMDUuMDJ6bS0xMC40OTMtNTguMDkxbDExLjI5IDU1Ljg3NCAxMC42NDMtMi4xNDktMTEuMjktNTUuODc2eiIvPgogICAgICA8cGF0aCBkPSJNMTUwNi45MzkgMjkzLjc5OWwxMi45OTUtMi42MTcuNDAyIDEuOTk1LTEyLjk5NSAyLjYxN3pNMTUxNS44ODcgMzM4LjA5MmwxMi45OTQtMi42MjIuNDAzIDEuOTk2LTEyLjk5NCAyLjYyMnoiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTE1MDUuNTk2IDMzOS45MzVoLTEyLjg5YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE5LTEuMDE2di02LjMzNWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOS0xLjAxN2gxMi44OWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxN3Y2LjMzNWExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNyAxLjAxNnptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTQuM2gtMTAuODU2ek0xNTA1LjU5NiAyOTQuNzUzaC0xMi44OWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAydi02Ljk1NmExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOS0xLjAxNmgxMi44OWExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNyAxLjAxNnY2Ljk1NmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxNyAxLjAyem0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC45MjJoLTEwLjg1NnoiLz4KICAgICAgICA8cGF0aCBkPSJNMTUwNS41OTYgMzQ2LjgzNGgtMTIuODlhMS4wMTggMS4wMTggMCAwIDEtMS4wMTktMS4wMTd2LTYuOWExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWgxMi44OWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxOXY2LjlhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTd6bS0xMS44NzUtMi4wMzZoMTAuODU2di00Ljg2M2gtMTAuODU2ek0xNTA1LjU5NiAzMzMuNjAzaC0xMi44OWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtMzIuOTFhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTloMTIuODlhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTl2MzIuOTEyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE3em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtMzAuODc4aC0xMC44NTZ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE1MDUuNTk2IDMwMC42OWgtMTIuODlhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTh2LTUuOTM4YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE3aDEyLjg5YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE3djUuOTM4YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE3IDEuMDE4em0tMTEuODc1LTIuMDM3aDEwLjg1NnYtMy45aC0xMC44NTZ6Ii8+CiAgICAgIDwvZz4KICAgICAgPHBhdGggZD0iTTE0NTkuNDQ2IDM0NC44aDc5LjQwOHYyLjAzNmgtNzkuNDA4eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xNDA0LjYzNyAzNDMuNzQyaC03NC41NDVhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTd2LTkuMTU2YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3LTEuMDE3aDc0LjU0NWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOSAxLjAxN3Y5LjE1NmExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOSAxLjAxN3ptLTczLjUyNi0yLjAzNGg3Mi41MDl2LTcuMTE4aC03Mi41MDl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNDA0LjYzNyAzMzQuNTg5aC03NC41NDVhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTctMS4wMTl2LTM3LjI3MWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxOWgxNy4yNjV2Mi4wMzZoLTE2LjI0NnYzNS4yMzdoNzIuNTA5di0zNS4yMzdoLTE2LjEyN3YtMi4wMzZoMTcuMTQ0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5IDEuMDE5djM3LjI3MWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAxOXpNMTM3Ni4xNjkgMzU0LjgyM2wtMS44Mi0xMS4wODJoLTEzLjk2NmwtMS44MjIgMTEuMDgyLTIuMDEtLjMzMSAxLjk2My0xMS45MzRhMS4wMTcgMS4wMTcgMCAwIDEgMS0uODUxaDE1LjY5M2ExLjAxNyAxLjAxNyAwIDAgMSAxIC44NTFsMS45NjEgMTEuOTM0eiIvPgogICAgICA8cGF0aCBkPSJNMTM0OS42ODEgMzUzLjY0MWgzNS4zN3YyLjAzNmgtMzUuMzd6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMzg3LjQ4OSAzMzQuNTg5aC00MC4xM2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtNTIuOTI0YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE5aDMxLjkxOWExLjAxIDEuMDEgMCAwIDEgLjcxOC4zbDguMjE1IDguMjEyYTEuMDE3IDEuMDE3IDAgMCAxIC4zLjcyMXY0NC43MWExLjAxOCAxLjAxOCAwIDAgMS0xLjAyMiAxLjAxOXptLTM5LjExNy0yLjAzNmgzOC4xdi00My4yNzZsLTcuNjE4LTcuNjE4aC0zMC40OHoiLz4KICAgICAgICA8cGF0aCBkPSJNMTM4Ny40OTEgMjg5Ljg3N2gtOC4yMTVhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTl2LTguMjE0YTEuMDE1IDEuMDE1IDAgMCAxIC42MjgtLjk0IDEuMDEgMS4wMSAwIDAgMSAxLjEwOC4yMmw4LjIxNSA4LjIxM2ExLjAxOCAxLjAxOCAwIDAgMSAuMjIyIDEuMTEgMS4wMTggMS4wMTggMCAwIDEtLjk0MS42M3ptLTcuMi0yLjAzOGg0Ljc0bC00Ljc0LTQuNzM3ek0xMzUzLjE2NyAyOTMuNTQ0aDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xMzUzLjE2NyAyOTkuMDZoMjguNTE2djIuMDM1aC0yOC41MTZ6TTEzNTMuMTY3IDMwNC41NzZoMjguNTE2djIuMDM2aC0yOC41MTZ6TTEzNTMuMTY3IDMxMC4wOWgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNMTM1My4xNjcgMzE1LjYwNmgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNMTM1My4xNjcgMzIxLjEyMmgxNy44NTN2Mi4wMzZoLTE3Ljg1M3oiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xMTA0LjAwNiAzNTIuOTU5YTEuMDE1IDEuMDE1IDAgMCAxLS4zODktLjA3NyAxLjAxOSAxLjAxOSAwIDAgMS0uNjI4LS45NDF2LTEwLjQ4NGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAyaDEwLjQ4NWExLjAxOCAxLjAxOCAwIDAgMSAuOTQuNjI5IDEuMDE4IDEuMDE4IDAgMCAxLS4yMjIgMS4xMDhsLTEwLjQ4NSAxMC40ODVhMS4wMTEgMS4wMTEgMCAwIDEtLjcyLjN6bTEuMDE5LTEwLjQ4NXY3LjAxbDcuMDEtNy4wMXpNMTA5OS42MDQgMzIyLjcwN2ExLjAxMSAxLjAxMSAwIDAgMS0uMi0uMDJsLTkuMTY1LTEuODU3YTEuMDE0IDEuMDE0IDAgMCAxLS43NzEtLjcgMS4wMiAxLjAyIDAgMCAxIC4yNTQtMS4wMTVsMjkuMjQxLTI5LjI0MmExLjAxNyAxLjAxNyAwIDAgMSAxLjQzOSAwbDUuNTExIDUuNTE0YTEuMDA5IDEuMDA5IDAgMCAxIC4zLjcxNyAxLjAxOCAxLjAxOCAwIDAgMS0uMy43MjFsLTI1LjU4NyAyNS41ODVhMS4wMTEgMS4wMTEgMCAwIDEtLjcyMi4yOTd6bS03LjEwNS0zLjVsNi43NzIgMS4zNyAyNC40NzktMjQuNDc5LTQuMDcyLTQuMDcxeiIvPgogICAgICA8cGF0aCBkPSJNMTEwMS40NjIgMzMxLjg3NWEuOTkzLjk5MyAwIDAgMS0uMjk1LS4wNDQgMS4wMTYgMS4wMTYgMCAwIDEtLjctLjc3MWwtMS44NTgtOS4xNjdhMS4wMTkgMS4wMTkgMCAwIDEgLjI3OC0uOTIzbDI1LjU4Ny0yNS41ODRhMS4wMTYgMS4wMTYgMCAwIDEgLjcyLS4zIDEuMDA4IDEuMDA4IDAgMCAxIC43MTguM2w1LjUxMyA1LjUxYTEuMDE3IDEuMDE3IDAgMCAxIDAgMS40MzhsLTI5LjI0NCAyOS4yNDFhMS4wMTggMS4wMTggMCAwIDEtLjcxOS4zem0tLjc1My05Ljg1M2wxLjM3MiA2Ljc3MyAyNy4xODEtMjcuMTc5LTQuMDcyLTQuMDcyeiIvPgogICAgICA8cGF0aCBkPSJNMTA4OC42NjcgMzMzLjcwM2ExLjAwOSAxLjAwOSAwIDAgMS0uNzE4LS4zIDEuMDE0IDEuMDE0IDAgMCAxLS4yODktLjg2M2wxLjgzLTEyLjc5M2ExLjAxMyAxLjAxMyAwIDAgMSAuNDE4LS42ODcgMS4wMjYgMS4wMjYgMCAwIDEgLjc4Ny0uMTY3bDkuMSAxLjhhMS4wMTIgMS4wMTIgMCAwIDEgLjguNzk0bDEuODU4IDkuMTY3YTEuMDE0IDEuMDE0IDAgMCAxLS4xNjUuNzg5IDEuMDE4IDEuMDE4IDAgMCAxLS42ODguNDIybC0xMi43OTQgMS44MjhhLjg1My44NTMgMCAwIDEtLjEzOS4wMXptMi42ODYtMTIuNmwtMS40ODUgMTAuMzg2IDEwLjM4Mi0xLjQ4My0xLjUwOS03LjQ0NnpNMTEzMC42NDUgMzAyLjU3NWExLjAyMSAxLjAyMSAwIDAgMS0uNzItLjNsLTEwLjk2NS0xMC45NjhhMS4wMDggMS4wMDggMCAwIDEtLjMtLjcxNyAxLjAxOSAxLjAxOSAwIDAgMSAuMy0uNzIxbDIuNzg5LTIuNzg5YTEuMDE4IDEuMDE4IDAgMCAxIC43Mi0uMyAxLjAxIDEuMDEgMCAwIDEgLjcxOC4zbDEwLjk2NSAxMC45NjVhMS4wMiAxLjAyIDAgMCAxIDAgMS40NDFsLTIuNzg5IDIuNzg5YTEuMDEzIDEuMDEzIDAgMCAxLS43MTguM3ptLTkuNTI2LTExLjk4Mmw5LjUyNiA5LjUyNiAxLjM0OC0xLjM1LTkuNTI1LTkuNTI3eiIvPgogICAgICA8cGF0aCBkPSJNMTEzMy40MzQgMjk5Ljc4N2ExLjAyNCAxLjAyNCAwIDAgMS0uNzItLjNsLTEwLjk2Ny0xMC45NjVhMS4wMTYgMS4wMTYgMCAwIDEgMC0xLjQzOGwyLjUtMi41YTQuMTUzIDQuMTUzIDAgMCAxIDIuOTYtMS4yMTcgNC4yODcgNC4yODcgMCAwIDEgMy4wNDkgMS4yNjVsNi4zNDggNi4zNDhhNC4yNTUgNC4yNTUgMCAwIDEgLjA0OCA2LjAwOGwtMi41IDIuNWExLjAxNiAxLjAxNiAwIDAgMS0uNzE4LjI5OXptLTkuNTI3LTExLjk4Nmw5LjUyNyA5LjUyNiAxLjc4LTEuNzhhMi4yMTkgMi4yMTkgMCAwIDAtLjA0Ni0zLjEzbC02LjM1LTYuMzQ4YTIuMjc4IDIuMjc4IDAgMCAwLTMuMTMtLjA0OXpNMTA4OC43MzYgMzI3LjkwNGwxLjQ0LTEuNDQgNC44NDQgNC44NDQtMS40NCAxLjQ0eiIvPgogICAgICA8cGF0aCBkPSJNMTEwNC4wMDggMzUyLjk2M2gtNDAuNzQ1YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE3di02Ny41NTlhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTdoNTEuMjNhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMTd2MTEuNGExLjAxNCAxLjAxNCAwIDAgMS0uMy43MTdsLTIzLjc1NyAyMy44NzUtMS41OSAxMS4xMTUgMTEuMTE1LTEuNTg4IDEyLjc5Mi0xMi43OTNhMS4wMTcgMS4wMTcgMCAwIDEgMS4xMS0uMjIgMS4wMTkgMS4wMTkgMCAwIDEgLjYyOC45NHYyMy42MzRhMS4wMTMgMS4wMTMgMCAwIDEtLjMuNzE5bC0xMC40ODEgMTAuNDc3YTEuMDE2IDEuMDE2IDAgMCAxLS43MTkuM3ptLTM5LjcyNy0yLjA0aDM5LjNsOS44OS05Ljg4OHYtMjAuNzU0bC0xMS4yOSAxMS4yOTVhMS4wMjcgMS4wMjcgMCAwIDEtLjU3NS4yODlsLTEyLjc5MyAxLjgyOGExLjAwOCAxLjAwOCAwIDAgMS0uODYzLS4yODkgMS4wMTMgMS4wMTMgMCAwIDEtLjI4OS0uODYzbDEuODMtMTIuNzkzYTEuMDI0IDEuMDI0IDAgMCAxIC4yODQtLjU3NGwyMy43LTIzLjgxN3YtOS45NTRoLTQ5LjE5NHoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTYzNi4zODkgMzQyLjc1aC0zNy42OTJhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTd2LTM3LjdhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTdoMzcuNjkzYTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE3djM3LjdhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTggMS4wMTd6bS0zNi42NzMtMi4wMzZoMzUuNjU4di0zNS42NThoLTM1LjY1OHoiLz4KICAgICAgPHBhdGggZD0iTTE2NDIuNzYgMzQ4LjQ1MmgtNTAuNDM0YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3LTEuMDE4di02NS45MmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxOGg1MC40MzRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTh2NjUuOTIzYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDE1em0tNDkuNDE0LTIuMDM1aDQ4LjRWMjgyLjUzaC00OC40eiIvPgogICAgICA8cGF0aCBkPSJNMTYzNS42NzMgMjk5LjgzM2gtMzYuMjU4YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5LTEuMDE3VjI4OC4zOGExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOS0xLjAxN2gzNi4yNThhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTcgMS4wMTd2MTAuNDM1YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE4em0tMzUuMjQxLTIuMDM2aDM0LjIyMnYtOC40aC0zNC4yMTl6TTE2MDYuMzU3IDMwNC4wMzhoMi4wMzZ2Ni44NTRoLTIuMDM2ek0xNjA2LjM1NyAzMTQuNTQzaDIuMDM2djYuODUzaC0yLjAzNnpNMTU5OC42OTYgMzExLjY5OWg2Ljg1M3YyLjAzNmgtNi44NTN6TTE2MDkuMjAxIDMxMS42OTloNi41MTl2Mi4wMzZoLTYuNTE5ek0xNjE5LjMyNiAzMTEuNjk5aDYuNTU5djIuMDM2aC02LjU1OXpNMTYyOS41MzYgMzExLjY5OWg2Ljg1M3YyLjAzNmgtNi44NTN6TTE1OTguNjk2IDMyMS44NjhoNi44NTN2Mi4wMzVoLTYuODUzek0xNjA5LjIwMSAzMjEuODY4aDYuNTE5djIuMDM1aC02LjUxOXpNMTYxOS4zMjYgMzIxLjg2OGg2LjU1OXYyLjAzNWgtNi41NTl6TTE2MjkuNTM2IDMyMS44NjhoNi44NTN2Mi4wMzVoLTYuODUzek0xNTk4LjY5NiAzMzIuMDM1aDYuODUzdjIuMDM2aC02Ljg1M3pNMTYwOS4yMDEgMzMyLjAzNWg2LjUxOXYyLjAzNmgtNi41MTl6TTE2MDYuMzU3IDMyNC4zNzVoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjA2LjM1NyAzMzQuODc5aDIuMDM2djYuODUzaC0yLjAzNnpNMTYxOS4zMjYgMzMyLjAzNWg2LjU1OXYyLjAzNmgtNi41NTl6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xNjI2LjY5MyAzMDQuMDM4aDIuMDM2djYuODU0aC0yLjAzNnpNMTYyNi42OTMgMzE0LjU0M2gyLjAzNnY2Ljg1M2gtMi4wMzZ6TTE2MjYuNjkzIDMyNC4zNzVoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjI2LjY5MyAzMzQuODc5aDIuMDM2djYuODUzaC0yLjAzNnoiLz4KICAgICAgPC9nPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTYxNi41MjUgMzA0LjAzOGgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTE2MTYuNTI1IDMxNC41NDNoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjE2LjUyNiAzMjQuMzc1aDIuMDM1djYuODUzaC0yLjAzNXpNMTYxNi41MjYgMzM0Ljg3OWgyLjAzNXY2Ljg1M2gtMi4wMzV6Ii8+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNODI2Ljg3NCAzNDYuNjM2SDgwNS4yNmEzLjg2MyAzLjg2MyAwIDAgMS0zLjg2LTMuODU5di01LjM2N2ExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxN2gxOS41NnYyLjAzNmgtMTguNTQxdjQuMzQ4YTEuODI2IDEuODI2IDAgMCAwIDEuODI0IDEuODI1aDIxLjYxNHpNODQ4LjI4IDI5MS45NTRoLTQ1Ljg2M2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtNC40MmEzLjg2NCAzLjg2NCAwIDAgMSAzLjg2LTMuODYxaDQwLjE3OGEzLjg2MiAzLjg2MiAwIDAgMSAzLjg1OCAzLjg2MXY0LjQyYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE2IDEuMDE5em0tNDQuODQ0LTIuMDM1aDQzLjgyNXYtMy40YTEuODI0IDEuODI0IDAgMCAwLTEuODIyLTEuODIzSDgwNS4yNmExLjgyNCAxLjgyNCAwIDAgMC0xLjgyNCAxLjgyM3oiLz4KICAgICAgPHBhdGggZD0iTTgyMS45NzcgMzM4LjQyOGgtMTkuNTZhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTl2LTQ2LjQ3NGExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxN2g0NS44NjNhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMS4wMTd2MjYuNTEzaC0yLjAzNnYtMjUuNDk0aC00My44MjV2NDQuNDM5aDE4LjU0MXoiLz4KICAgICAgPHBhdGggZD0iTTg1NC40ODMgMzU2LjYwNGgtMjIuMjA5YTEuMDE0IDEuMDE0IDAgMCAxLTEuMDE3LTEuMDEzbC0uMDEtMy40LTktMTEuMTg2YTQuMDgxIDQuMDgxIDAgMCAxLTEuMjU5LTIuOTM0di0xMi4wNzNhNC4wOTEgNC4wOTEgMCAwIDEgNC4wODYtNC4wODYgNC4wOSA0LjA5IDAgMCAxIDQuMDg2IDQuMDg2djcuOWwxLjEwNiAxLjU4OHYtMjMuOTc4YTQuMDg5IDQuMDg5IDAgMCAxIDQuMDg2LTQuMDg0IDQuMDg5IDQuMDg5IDAgMCAxIDQuMDg0IDQuMDg0djVhNC4wNDkgNC4wNDkgMCAwIDEgMi4wNTgtLjU1OSA0LjA4NCA0LjA4NCAwIDAgMSAzLjA3MSAxLjM5NSA0LjA4NCA0LjA4NCAwIDAgMSAzLjA3MS0xLjM5NSA0LjA5NCA0LjA5NCAwIDAgMSAzLjkzMSAyLjk3MyA0LjA2NiA0LjA2NiAwIDAgMSAyLjIxMi0uNjUyIDQuMDg5IDQuMDg5IDAgMCAxIDQuMDg0IDQuMDg1djIzLjM0M2E0LjA3OSA0LjA3OSAwIDAgMS0xLjM2IDMuMDQ1djYuODQ1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDIgMS4wMTZ6bS0yMS4yLTIuMDM0aDIwLjE3OXYtNi4zMjRhMS4wMTQgMS4wMTQgMCAwIDEgLjQ1Mi0uODQzIDIuMDUgMi4wNSAwIDAgMCAuOTA4LTEuN1YzMjIuMzZhMi4wNSAyLjA1IDAgMCAwLTIuMDQ4LTIuMDQ5IDIuMDUyIDIuMDUyIDAgMCAwLTIuMDUgMi4wNDl2Ni44MDZhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTcgMS4wMjQgMS4wMjQgMCAwIDEtMS4wMjUtMS4wMTd2LTkuMTI1YTIuMDUxIDIuMDUxIDAgMCAwLTIuMDUtMi4wNDggMi4wNTEgMi4wNTEgMCAwIDAtMi4wNSAyLjA0OHY5LjEyNWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAxNyAxLjAyMyAxLjAyMyAwIDAgMS0xLjAyMy0xLjAxN3YtOS4xMjVhMi4wNTEgMi4wNTEgMCAwIDAtMi4wNS0yLjA0OCAyLjA1MSAyLjA1MSAwIDAgMC0yLjA1IDIuMDQ4djkuMTI1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5IDEuMDE3IDEuMDI0IDEuMDI0IDAgMCAxLTEuMDI1LTEuMDE3di0xNy42NTVhMi4wNTEgMi4wNTEgMCAwIDAtMi4wNDgtMi4wNDggMi4wNTEgMi4wNTEgMCAwIDAtMi4wNSAyLjA0OHYyNy4yMjJhMS4wMTggMS4wMTggMCAwIDEtLjcxMi45NyAxLjAxOSAxLjAxOSAwIDAgMS0xLjE0LS4zOWwtMy4xNDQtNC41MTFhMS4wMTQgMS4wMTQgMCAwIDEtLjE4Mi0uNTgydi04LjIxOWEyLjA1MyAyLjA1MyAwIDAgMC0yLjA1LTIuMDUxIDIuMDUzIDIuMDUzIDAgMCAwLTIuMDUgMi4wNTF2MTIuMDcxYTIuMDIyIDIuMDIyIDAgMCAwIC42ODggMS41MTcgMS4wMzkgMS4wMzkgMCAwIDEgLjE4Mi4yMTVsOS4xNjMgMTEuMzkyYTEuMDA2IDEuMDA2IDAgMCAxIC4yMjQuNjMzeiIvPgogICAgICA8cGF0aCBkPSJNODU1Ljg0OCAzNjcuNGgtMjQuNzVhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTEwLjc5NGExLjAxNSAxLjAxNSAwIDAgMSAxLjAxNy0xLjAxN2gyNC43NWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxN3YxMC43OTRhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTcgMS4wMTl6bS0yMy43MzMtMi4wMzZoMjIuNzE0di04Ljc2aC0yMi43MTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik04MzMuODM1IDM1NS41ODhoMi4wMzZ2MTAuNzk0aC0yLjAzNnpNODM3LjE1OCAzNTguOTJoMy4xMjV2Mi4wMzZoLTMuMTI1ek04MDguNjY5IDI5OS4yMDZoMzMuMzZ2Mi4wMzZoLTMzLjM2ek04MDguNjY5IDMwNC4yOTVoMzMuMzZ2Mi4wMzZoLTMzLjM2ek04MDguNjY5IDMwOS4zODZoMjIuNjE2djIuMDM1aC0yMi42MTZ6TTgwOC42NjkgMzE0LjQ3NGgyMi43ODl2Mi4wMzZoLTIyLjc4OXpNODA4LjY2OSAzMTkuNTY1aDIyLjYxNnYyLjAzNmgtMjIuNjE2ek04MDguNjY5IDMyNC42NTVoMTMuMzM4djIuMDM2aC0xMy4zMzh6TTgzNy4yMTIgMzA5LjM4Nmg0LjgxNnYyLjAzNWgtNC44MTZ6TTgyMi4yNzMgMjg2LjI4N2g2LjE1MXYyLjAzNmgtNi4xNTF6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTEyMDQuNDE5IDM0MC43NDlhNy40MzQgNy40MzQgMCAwIDEtNy40MjgtNy40MjZ2LTE4LjM5NGE3LjQzMyA3LjQzMyAwIDAgMSA3LjQyOC03LjQyNSA3LjQzMyA3LjQzMyAwIDAgMSA3LjQyNiA3LjQyNXYxOC4zOTRhNy40MzQgNy40MzQgMCAwIDEtNy40MjYgNy40MjZ6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOTIgNS4zOTJ2MTguMzk0YTUuNCA1LjQgMCAwIDAgNS4zOTIgNS4zODkgNS40IDUuNCAwIDAgMCA1LjM5LTUuMzg5VjMxNC45M2E1LjQgNS40IDAgMCAwLTUuMzktNS4zOTF6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xMTk4LjAwNiAzMzQuODc5YTcuMjY0IDcuMjY0IDAgMCAxLTcuMjU2LTcuMjU1di03YTcuMjYyIDcuMjYyIDAgMCAxIDcuMjU2LTcuMjU0aC4wODdhLjk0OS45NDkgMCAwIDEgLjcxOS4zMjggMSAxIDAgMCAxIC4yMzYuNzc1Yy0uMDEyLjE0OS0uMDI0LjMtLjAyNC40NTF2MTguMzkzYzAgLjE1My4wMTIuMy4wMjQuNDVhMS4wMTYgMS4wMTYgMCAwIDEtLjI2NC43NzUgMS4wMTcgMS4wMTcgMCAwIDEtLjc1MS4zMzF6bS0xLjAxOS0xOS4zOGE1LjIzNiA1LjIzNiAwIDAgMC00LjIgNS4xM3Y3YTUuMjMgNS4yMyAwIDAgMCA0LjIgNS4xMnpNMTIwMy40IDMwOC41MjFoMi4wMzV2MTUuNjA1aC0yLjAzNXpNMTIwMy40IDMyOS44NWgyLjAzNXY5Ljg4MWgtMi4wMzV6TTEyNTYuMjAzIDM0MC43NDlhNy40MzQgNy40MzQgMCAwIDEtNy40MjYtNy40MjZ2LTE4LjM5NGE3LjQzMyA3LjQzMyAwIDAgMSA3LjQyNi03LjQyNSA3LjQzMyA3LjQzMyAwIDAgMSA3LjQyNiA3LjQyNXYxOC4zOTRhNy40MzMgNy40MzMgMCAwIDEtNy40MjYgNy40MjZ6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOSA1LjM5MnYxOC4zOTRhNS40IDUuNCAwIDAgMCA1LjM5IDUuMzg5IDUuNCA1LjQgMCAwIDAgNS4zOS01LjM4OVYzMTQuOTNhNS40IDUuNCAwIDAgMC01LjM5LTUuMzkxeiIvPgogICAgICA8cGF0aCBkPSJNMTI2Mi42MTEgMzM0Ljg3OWgtLjA4N2EuOTU2Ljk1NiAwIDAgMS0uNzItLjMyOSAxIDEgMCAwIDEtLjIzNi0uNzcxYy4wMTQtLjE0OS4wMjQtLjMuMDI0LS40NTR2LTE4LjM5NGMwLS4xNTMtLjAxMi0uMy0uMDI0LS40NTRhMS4wMTkgMS4wMTkgMCAwIDEgLjI2OC0uNzczLjk4Ni45ODYgMCAwIDEgLjc0OS0uMzI4IDcuMjY3IDcuMjY3IDAgMCAxIDcuMjgxIDcuMjU0djdhNy4yNjMgNy4yNjMgMCAwIDEtNy4yNTUgNy4yNDl6bTEuMDE3LTE5LjM3djE3LjIzNWE1LjIyOCA1LjIyOCAwIDAgMCA0LjItNS4xMnYtN2E1LjIyNSA1LjIyNSAwIDAgMC00LjIwMy01LjExNXpNMTI1NS4xODUgMzA4LjUyMWgyLjAzNnYxNS42MDVoLTIuMDM2ek0xMjU1LjE4NSAzMjkuODVoMi4wMzZ2OS44ODFoLTIuMDM2ek0xMjU3LjI2IDMwOC41MjFoLTIuMDM2di0xLjcxN2EyNC44MjcgMjQuODI3IDAgMCAwLTIuODczLTExLjU5NGwxLjgtLjk1NGEyNi44NjQgMjYuODY0IDAgMCAxIDMuMTEyIDEyLjU0N3pNMTIwNS42ODQgMzA4LjUyMWgtMi4wMzZ2LTEuNzE3YTI2Ljg2NSAyNi44NjUgMCAwIDEgMy4xMTItMTIuNTQ1bDEuOC45NTVhMjQuODE5IDI0LjgxOSAwIDAgMC0yLjg3NCAxMS41OTF6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xMjEwLjk5OSAyOTYuNzUyYTEuMDI0IDEuMDI0IDAgMCAxLS4yOTMtLjA0MWwtNi42MzEtMS45ODRhMS4wMTMgMS4wMTMgMCAwIDEtLjY0NC0uNTcxIDEuMDExIDEuMDExIDAgMCAxIC4wMjYtLjg2IDMwLjA3IDMwLjA3IDAgMCAxIDI3LTE2LjY5IDMwLjA3OCAzMC4wNzggMCAwIDEgMjcgMTYuNjkgMS4wMTggMS4wMTggMCAwIDEgLjAyNC44NiAxLjAxNCAxLjAxNCAwIDAgMS0uNjQ0LjU3MWwtNi42MzMgMS45ODRhMS4wMTcgMS4wMTcgMCAwIDEtMS4xNzQtLjQ3MSAyMS40NDkgMjEuNDQ5IDAgMCAwLTE4LjU3MS0xMC44MTIgMjEuNDU0IDIxLjQ1NCAwIDAgMC0xOC41NzMgMTAuODEyIDEuMDE2IDEuMDE2IDAgMCAxLS44ODcuNTEyem0xOS40NTUtMTMuMzZhMjMuNDg4IDIzLjQ4OCAwIDAgMSAxOS45MjUgMTEuMTRsNC42ODQtMS40YTI4LjAzNCAyOC4wMzQgMCAwIDAtMjQuNjA4LTE0LjQ5MSAyOC4wMzQgMjguMDM0IDAgMCAwLTI0LjYwOCAxNC40OTFsNC42ODMgMS40YTIzLjQ4OSAyMy40ODkgMCAwIDEgMTkuOTI0LTExLjE0MXoiLz4KICAgICAgPHBhdGggZD0iTTEyMzAuMzExIDMyNy4wNjRhMTUuMiAxNS4yIDAgMCAxLTE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4NyAxNS4xODcgMTUuMiAxNS4yIDAgMCAxLTE1LjE4NyAxNS4xODd6bTAtMjguMzM4YTEzLjE2NiAxMy4xNjYgMCAwIDAtMTMuMTUzIDEzLjE1MSAxMy4xNjUgMTMuMTY1IDAgMCAwIDEzLjE1MyAxMy4xNDggMTMuMTY1IDEzLjE2NSAwIDAgMCAxMy4xNTEtMTMuMTQ4IDEzLjE2NiAxMy4xNjYgMCAwIDAtMTMuMTUxLTEzLjE1MXoiLz4KICAgICAgPHBhdGggZD0iTTEyMjUuNTI2IDMyMC42MzZhMS4wMSAxLjAxIDAgMCAxLS41MDgtLjEzNyAxLjAxNiAxLjAxNiAwIDAgMS0uNTExLS44Nzl2LTE1LjQ4NmExLjAxOCAxLjAxOCAwIDAgMSAuNTExLS44ODIgMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMGwxMy40MTEgNy43NDJhMS4wMTggMS4wMTggMCAwIDEgLjUwOC44ODIgMS4wMjEgMS4wMjEgMCAwIDEtLjUwOC44ODJsLTEzLjQxMSA3Ljc0YTEuMDEgMS4wMSAwIDAgMS0uNTA5LjEzOHptMS4wMTktMTQuNzM4djExLjk1OGwxMC4zNTYtNS45Nzl6TTEyMjIuODcxIDM1MS4yODloLTEzLjAyNGE2LjM3NiA2LjM3NiAwIDAgMS02LjQ0Ny02LjI4OHYtNS4yNjloMi4wMzZ2NS4yNjlhNC4zMzcgNC4zMzcgMCAwIDAgNC40MTEgNC4yNTJoMTMuMDI0eiIvPgogICAgICA8cGF0aCBkPSJNMTIzNC40MzIgMzU0LjYwNmgtOC4yMzlhNC4zNDEgNC4zNDEgMCAwIDEtNC4zMzYtNC4zMzYgNC4zMzkgNC4zMzkgMCAwIDEgNC4zMzYtNC4zMzRoOC4yNDNhNC4zMzggNC4zMzggMCAwIDEgNC4zMzYgNC4zMzQgNC4zNCA0LjM0IDAgMCAxLTQuMzQgNC4zMzZ6bS04LjI0My02LjYzNWEyLjMgMi4zIDAgMCAwLTIuMyAyLjMgMi4zIDIuMyAwIDAgMCAyLjMgMi4zaDguMjQzYTIuMzA1IDIuMzA1IDAgMCAwIDIuMy0yLjMgMi4zIDIuMyAwIDAgMC0yLjMtMi4zeiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik05OTMuNzA1IDM0My43NDJIOTE5LjE2YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3LTEuMDE3di05LjE1NmExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxN2g3NC41NDVhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTkgMS4wMTd2OS4xNTZhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTkgMS4wMTd6bS03My41MjYtMi4wMzRoNzIuNTEydi03LjExOGgtNzIuNTEyeiIvPgogICAgICA8cGF0aCBkPSJNOTkzLjcwNSAzMzQuNTg5SDkxOS4xNmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtMzcuMjcxYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDE5aDE3LjI2NXYyLjAzNmgtMTYuMjQ2djM1LjIzN2g3Mi41MTJ2LTM1LjIzN2gtMTYuMTN2LTIuMDM2aDE3LjE0NGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxOXYzNy4yNzFhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTl6TTk2NS4yMzcgMzU0LjgyM2wtMS44Mi0xMS4wODJoLTEzLjk2NmwtMS44MjIgMTEuMDgyLTIuMDEtLjMzMSAxLjk2NC0xMS45MzRhMS4wMTQgMS4wMTQgMCAwIDEgMS0uODUxaDE1LjdhMS4wMTcgMS4wMTcgMCAwIDEgMSAuODUxbDEuOTY4IDExLjkzNHoiLz4KICAgICAgPHBhdGggZD0iTTkzOC43NDkgMzUzLjY0MWgzNS4zN3YyLjAzNmgtMzUuMzd6TTkyMy4zOSAyOTUuMjhoNTYuMDUydjIuMDM2SDkyMy4zOXpNOTYzLjY5MiAzMTMuODI4bC03LjQyMiAyLjEtNC4zMiA2LjM3Ni0zLjczNS0xNy41NTF6TTk1Ny4zMTEgMzE5Ljg3MWwyLjM3Ny0xLjcxNiA0Ljc2MiA2LjU5NC0yLjM3NyAxLjcxN3oiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTc0My4yODYgMzQ2LjYzNmgtMjEuNjEyYTMuODYyIDMuODYyIDAgMCAxLTMuODU4LTMuODU5di01LjM2N2ExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxN2gxOS41NnYyLjAzNmgtMTguNTR2NC4zNDhhMS44MjYgMS44MjYgMCAwIDAgMS44MjIgMS44MjVoMjEuNjE0ek0xNzY0LjY5MiAyOTEuOTU0aC00NS44NjFhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTQuNDJhMy44NjQgMy44NjQgMCAwIDEgMy44NTgtMy44NjFoNDAuMThhMy44NjQgMy44NjQgMCAwIDEgMy44NTggMy44NjF2NC40MmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOCAxLjAxOXptLTQ0Ljg0Mi0yLjAzNWg0My44MjR2LTMuNGExLjgyNCAxLjgyNCAwIDAgMC0xLjgyMi0xLjgyM2gtNDAuMTc4YTEuODI0IDEuODI0IDAgMCAwLTEuODIyIDEuODIzeiIvPgogICAgICA8cGF0aCBkPSJNMTczOC4zOSAzMzguNDI4aC0xOS41NmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtNDYuNDc0YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3LTEuMDE3aDQ1Ljg2MWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOSAxLjAxN3YyNi41MTNoLTIuMDM2di0yNS40OTRoLTQzLjgyNHY0NC40MzloMTguNTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNzcwLjg5OSAzNTYuNjA0aC0yMi4yMTFhMS4wMTggMS4wMTggMCAwIDEtMS4wMTktMS4wMTNsLS4wMDgtMy40LTktMTEuMTg2YTQuMDg4IDQuMDg4IDAgMCAxLTEuMjU3LTIuOTM0di0xMi4wNzNhNC4wOTEgNC4wOTEgMCAwIDEgNC4wODYtNC4wODYgNC4wODkgNC4wODkgMCAwIDEgNC4wODQgNC4wODZ2Ny45bDEuMTA4IDEuNTg4di0yMy45NzhhNC4wODkgNC4wODkgMCAwIDEgNC4wODQtNC4wODQgNC4wODkgNC4wODkgMCAwIDEgNC4wODYgNC4wODR2NWE0LjA0NCA0LjA0NCAwIDAgMSAyLjA1OC0uNTU5IDQuMDg1IDQuMDg1IDAgMCAxIDMuMDcxIDEuMzk1IDQuMDgzIDQuMDgzIDAgMCAxIDMuMDcxLTEuMzk1IDQuMDk0IDQuMDk0IDAgMCAxIDMuOTMxIDIuOTczIDQuMDY2IDQuMDY2IDAgMCAxIDIuMjEyLS42NTIgNC4wODkgNC4wODkgMCAwIDEgNC4wODQgNC4wODV2MjMuMzQzYTQuMDc0IDQuMDc0IDAgMCAxLTEuMzYyIDMuMDQ1djYuODQ1YTEuMDE1IDEuMDE1IDAgMCAxLTEuMDE4IDEuMDE2em0tMjEuMi0yLjAzNGgyMC4xNzd2LTYuMzI0YTEuMDEzIDEuMDEzIDAgMCAxIC40NTItLjg0MyAyLjA0NyAyLjA0NyAwIDAgMCAuOTEtMS43VjMyMi4zNmEyLjA1IDIuMDUgMCAwIDAtMi4wNDgtMi4wNDkgMi4wNTIgMi4wNTIgMCAwIDAtMi4wNSAyLjA0OXY2LjgwNmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxNyAxLjAyNSAxLjAyNSAwIDAgMS0xLjAyNS0xLjAxN3YtOS4xMjVhMi4wNSAyLjA1IDAgMCAwLTIuMDQxLTIuMDUzIDIuMDUxIDIuMDUxIDAgMCAwLTIuMDUgMi4wNDh2OS4xMjVhMS4wMTggMS4wMTggMCAwIDEtMS4wMTkgMS4wMTcgMS4wMjMgMS4wMjMgMCAwIDEtMS4wMjMtMS4wMTd2LTkuMTI1YTIuMDUxIDIuMDUxIDAgMCAwLTIuMDUtMi4wNDggMi4wNSAyLjA1IDAgMCAwLTIuMDUgMi4wNDh2OS4xMjVhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTcgMS4wMjQgMS4wMjQgMCAwIDEtMS4wMjUtMS4wMTd2LTE3LjY1NWEyLjA1MSAyLjA1MSAwIDAgMC0yLjA1LTIuMDQ4IDIuMDUxIDIuMDUxIDAgMCAwLTIuMDQ4IDIuMDQ4djI3LjIyMmExLjAxOCAxLjAxOCAwIDAgMS0uNzE0Ljk3IDEuMDIgMS4wMiAwIDAgMS0xLjE0LS4zOWwtMy4xNDItNC41MTFhMS4wMTMgMS4wMTMgMCAwIDEtLjE4Mi0uNTgydi04LjIxOWEyLjA1MyAyLjA1MyAwIDAgMC0yLjA1LTIuMDUxIDIuMDUzIDIuMDUzIDAgMCAwLTIuMDUgMi4wNTF2MTIuMDcxYTIuMDI3IDIuMDI3IDAgMCAwIC42ODYgMS41MTcuOTc3Ljk3NyAwIDAgMSAuMTgyLjIxNWw5LjE2NSAxMS4zOTJhMSAxIDAgMCAxIC4yMjQuNjMzeiIvPgogICAgICA8cGF0aCBkPSJNMTc3Mi4yNjIgMzY3LjRoLTI0Ljc1YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di0xMC43OTRhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTktMS4wMTdoMjQuNzVhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMS4wMTd2MTAuNzk0YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE3IDEuMDE5em0tMjMuNzMzLTIuMDM2aDIyLjcxMnYtOC43NmgtMjIuNzEyeiIvPgogICAgICA8cGF0aCBkPSJNMTc1MC4yNDkgMzU1LjU4OGgyLjAzNnYxMC43OTRoLTIuMDM2ek0xNzUzLjU3MSAzNTguOTJoMy4xMjV2Mi4wMzZoLTMuMTI1ek0xNzI1LjA4MiAyOTkuMjA2aDMzLjM2djIuMDM2aC0zMy4zNnpNMTcyNS4wODIgMzA0LjI5NWgzMy4zNnYyLjAzNmgtMzMuMzZ6TTE3MjUuMDgyIDMwOS4zODZoMjIuNjE2djIuMDM1aC0yMi42MTZ6TTE3MjUuMDgyIDMxNC40NzRoMjIuNzg5djIuMDM2aC0yMi43ODl6TTE3MjUuMDgyIDMxOS41NjVoMjIuNjE2djIuMDM2aC0yMi42MTZ6TTE3MjUuMDgyIDMyNC42NTVoMTMuMzM4djIuMDM2aC0xMy4zMzh6TTE3NTMuNjI1IDMwOS4zODZoNC44MTZ2Mi4wMzVoLTQuODE2ek0xNzM4LjY4NiAyODYuMjg3aDYuMTUxdjIuMDM2aC02LjE1MXoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTkxMC4xMTkgMzQzLjc0MmgtNzQuNTQ1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5LTEuMDE3di05LjE1NmExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOS0xLjAxN2g3NC41NDVhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTcgMS4wMTd2OS4xNTZhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTcgMS4wMTd6bS03My41MjgtMi4wMzRoNzIuNTA5di03LjExOGgtNzIuNTA5eiIvPgogICAgICA8cGF0aCBkPSJNMTkxMC4xMTkgMzM0LjU4OWgtNzQuNTQ1YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di0zNy4yNzFhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTloMTcuMjY1djIuMDM2aC0xNi4yNDh2MzUuMjM3aDcyLjUwOXYtMzUuMjM3aC0xNi4xMjd2LTIuMDM2aDE3LjE0NmExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxOXYzNy4yNzFhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTl6TTE4ODEuNjUxIDM1NC44MjNsLTEuODIyLTExLjA4MmgtMTMuOTY0bC0xLjgyMiAxMS4wODItMi4wMS0uMzMxIDEuOTYxLTExLjkzNGExLjAxNyAxLjAxNyAwIDAgMSAxLjAwNS0uODUxaDE1LjdhMS4wMTcgMS4wMTcgMCAwIDEgMSAuODUxbDEuOTU5IDExLjkzNHoiLz4KICAgICAgPHBhdGggZD0iTTE4NTUuMTYyIDM1My42NDFoMzUuMzd2Mi4wMzZoLTM1LjM3ek0xODM5LjgwMyAyOTUuMjhoNTYuMDUydjIuMDM2aC01Ni4wNTJ6TTE4ODAuMTA2IDMxMy44MjhsLTcuNDIyIDIuMS00LjMyMSA2LjM3Ni0zLjczMS0xNy41NTF6TTE4NzMuNzI1IDMxOS44NzFsMi4zNzctMS43MTYgNC43NjIgNi41OTQtMi4zNzcgMS43MTd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTEwMTguODEyIDQ3OC44MjhoLTEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAydi01OS4wMzdhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTloMTIuODkyYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djU5LjAzN2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAxNyAxLjAyem0tMTEuODc1LTIuMDM3aDEwLjg1OHYtNTdoLTEwLjg1OHoiLz4KICAgICAgPHBhdGggZD0iTTEwMDUuOTIgNDI0LjcwOGgxMy4yNTV2Mi4wMzZoLTEzLjI1NXpNMTAwNS45MiA0NjkuODkyaDEzLjI1NXYyLjAzNmgtMTMuMjU1ek0xMDQ5LjE3MyA0NzguODI3YTEuMDA2IDEuMDA2IDAgMCAxLS41NjMtLjE3MSAxLjAxMiAxLjAxMiAwIDAgMS0uNDM2LS42NDZsLTExLjcwMS01Ny44N2ExLjAxOSAxLjAxOSAwIDAgMSAuOC0xLjJsMTIuNjQtMi41NTVhMS4wMSAxLjAxIDAgMCAxIC43NjMuMTQ5IDEuMDMgMS4wMyAwIDAgMSAuNDM2LjY0NWwxMS42OTEgNTcuODc0YTEuMDE1IDEuMDE1IDAgMCAxLS44IDEuMmwtMTIuNjM4IDIuNTU1YTEuMTc5IDEuMTc5IDAgMCAxLS4xOTIuMDE5em0tMTAuNS01OC4wOTNsMTEuMjg4IDU1Ljg3NiAxMC42NDItMi4xNTEtMTEuMjg4LTU1Ljg3NHoiLz4KICAgICAgPHBhdGggZD0iTTEwMzguNDc0IDQyNS43OTFsMTIuOTk1LTIuNjE3LjQwMiAxLjk5NS0xMi45OTUgMi42MTd6TTEwNDcuNDIyIDQ3MC4wODNsMTIuOTk0LTIuNjIyLjQwMyAxLjk5Ni0xMi45OTQgMi42MjJ6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMDM3LjEzMSA0NzEuOTI5aC0xMi44OTRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMnYtNi4zMzJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTloMTIuODk0YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE3IDEuMDE5djYuMzMyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDJ6bS0xMS44NzUtMi4wMzZoMTAuODU2di00LjNoLTEwLjg1NnpNMTAzNy4xMzEgNDI2Ljc0M2gtMTIuODk0YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3LTEuMDE3di02Ljk1NWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxOWgxMi44OTRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTl2Ni45NTVhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTd6bS0xMS44NzUtMi4wMzZoMTAuODU2di00LjkxOWgtMTAuODU2eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDM3LjEzMSA0NzguODI4aC0xMi44OTRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTYuOWExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNy0xLjAxN2gxMi44OTRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTd2Ni45YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE3IDEuMDE5em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC44NjNoLTEwLjg1NnpNMTAzNy4xMzEgNDY1LjU5NGgtMTIuODk0YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3LTEuMDE3di0zMi45MTRhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTctMS4wMTZoMTIuODk0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE2djMyLjkxNGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxN3ptLTExLjg3NS0yLjAzOGgxMC44NTZ2LTMwLjg3NWgtMTAuODU2eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDM3LjEzMSA0MzIuNjg0aC0xMi44OTRhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMnYtNS45MzdhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTloMTIuODk0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djUuOTM3YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE3IDEuMDJ6bS0xMS44NzUtMi4wMzZoMTAuODU2di0zLjloLTEwLjg1NnoiLz4KICAgICAgPC9nPgogICAgICA8cGF0aCBkPSJNOTkwLjk4IDQ3Ni43OTFoNzkuNDA4djIuMDM2SDk5MC45OHoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNOTM2LjE2OSA0NzUuNzM0aC03NC41NDNhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTkuMTUzYTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3LTEuMDE5aDc0LjU0M2ExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOSAxLjAxOXY5LjE1M2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAxOXptLTczLjUyOC0yLjAzNmg3Mi41MDl2LTcuMTE5aC03Mi41MDd6Ii8+CiAgICAgIDxwYXRoIGQ9Ik05MzYuMTY5IDQ2Ni41OGgtNzQuNTQzYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3LTEuMDE3di0zNy4yNzJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMThoMTcuMjY1djIuMDM2aC0xNi4yNDh2MzUuMjM0aDcyLjUwOXYtMzUuMjM0aC0xNi4xMjd2LTIuMDM2aDE3LjE0NGExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOSAxLjAxOHYzNy4yNzJhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTd6TTkwNy43MDMgNDg2LjgxNWwtMS44Mi0xMS4wOGgtMTMuOTY2bC0xLjgyMiAxMS4wOC0yLjAxLS4zMyAxLjk2My0xMS45MzZhMS4wMTQgMS4wMTQgMCAwIDEgMS0uODUxaDE1LjdhMS4wMTggMS4wMTggMCAwIDEgMSAuODUxbDEuOTYxIDExLjkzNnoiLz4KICAgICAgPHBhdGggZD0iTTg4MS4yMTUgNDg1LjYzM2gzNS4zN3YyLjAzNmgtMzUuMzd6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik05MTkuMDI1IDQ2Ni41OGgtNDAuMTMyYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE3di01Mi45MjZhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTdoMzEuOTE5YTEuMDIgMS4wMiAwIDAgMSAuNzE4LjNsOC4yMTUgOC4yMTVhMS4wMjcgMS4wMjcgMCAwIDEgLjMuNzIxdjQ0LjcxMWExLjAxOSAxLjAxOSAwIDAgMS0xLjAyIDEuMDEzem0tMzkuMTE1LTIuMDM2aDM4LjF2LTQzLjI3bC03LjYxNy03LjYxN2gtMzAuNDh6Ii8+CiAgICAgICAgPHBhdGggZD0iTTkxOS4wMjUgNDIxLjg2OWgtOC4yMTNhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTd2LTguMjE1YTEuMDE5IDEuMDE5IDAgMCAxIC42MjgtLjk0IDEuMDIzIDEuMDIzIDAgMCAxIDEuMTEuMjJsOC4yMTUgOC4yMTVhMS4wMiAxLjAyIDAgMCAxIC4yMiAxLjExIDEuMDE5IDEuMDE5IDAgMCAxLS45NDEuNjI3em0tNy4yLTIuMDM3aDQuNzM4bC00LjczOC00LjczOHpNODg0LjcgNDI1LjUzNmgyOC41MTZ2Mi4wMzZIODg0Ljd6TTg4NC43IDQzMS4wNTJoMjguNTE2djIuMDM1SDg4NC43ek04ODQuNyA0MzYuNTY4aDI4LjUxNnYyLjAzNkg4ODQuN3pNODg0LjcgNDQyLjA4M2gyOC41MTZ2Mi4wMzZIODg0Ljd6TTg4NC43IDQ0Ny41OThoMjguNTE2djIuMDM2SDg4NC43ek04ODQuNyA0NTMuMTE0aDE3Ljg1M3YyLjAzNkg4ODQuN3oiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik02MzUuNTQgNDg0Ljk1MmExIDEgMCAwIDEtLjM4OS0uMDc5IDEuMDEzIDEuMDEzIDAgMCAxLS42MjgtLjk0di0xMC40ODVhMS4wMTUgMS4wMTUgMCAwIDEgMS4wMTctMS4wMTdoMTAuNDgzYTEuMDE4IDEuMDE4IDAgMCAxIC45NC42MjcgMS4wMiAxLjAyIDAgMCAxLS4yMiAxLjExbC0xMC40ODUgMTAuNDg1YTEuMDE1IDEuMDE1IDAgMCAxLS43MTguMjk5em0xLjAxNy0xMC40ODV2Ny4wMWw3LjAxMi03LjAxek02MzEuMTM2IDQ1NC42OTlhLjk1Ny45NTcgMCAwIDEtLjItLjAyMWwtOS4xNjUtMS44NTRhMS4wMjEgMS4wMjEgMCAwIDEtLjc3My0uNyAxLjAxOCAxLjAxOCAwIDAgMSAuMjU2LTEuMDEzbDI5LjIzOS0yOS4yNDFhMS4wMTkgMS4wMTkgMCAwIDEgMS40NDEgMGw1LjUxMSA1LjUxYTEuMDE3IDEuMDE3IDAgMCAxIC4zLjcyIDEuMDE4IDEuMDE4IDAgMCAxLS4zLjcybC0yNS41ODcgMjUuNTg1YTEuMDE3IDEuMDE3IDAgMCAxLS43MjIuMjk0em0tNy4xLTMuNWw2Ljc3MiAxLjM3MiAyNC40ODEtMjQuNDc5LTQuMDcyLTQuMDcyeiIvPgogICAgICA8cGF0aCBkPSJNNjMyLjk5NCA0NjMuODY2YTEuMDM2IDEuMDM2IDAgMCAxLS4yOTMtLjA0MyAxLjAxOSAxLjAxOSAwIDAgMS0uNy0uNzczbC0xLjg1OC05LjE2N2ExLjAyMiAxLjAyMiAwIDAgMSAuMjc4LS45MjNsMjUuNTg3LTI1LjU4NWExLjAyMiAxLjAyMiAwIDAgMSAuNzItLjMgMS4wMjEgMS4wMjEgMCAwIDEgLjcxOC4zbDUuNTExIDUuNTEzYTEuMDE3IDEuMDE3IDAgMCAxIDAgMS40MzlsLTI5LjIzOSAyOS4yNDFhMS4wMTYgMS4wMTYgMCAwIDEtLjcyNC4yOTh6bS0uNzUzLTkuODUxbDEuMzc0IDYuNzc0IDI3LjE3OS0yNy4xODItNC4wNy00LjA3MnoiLz4KICAgICAgPHBhdGggZD0iTTYyMC4yIDQ2NS42OTRhMS4wMjQgMS4wMjQgMCAwIDEtLjcyLS4zIDEuMDE0IDEuMDE0IDAgMCAxLS4yODctLjg2NGwxLjgyOC0xMi43OTRhMS4wMjIgMS4wMjIgMCAwIDEgLjQyLS42ODYgMS4wMjkgMS4wMjkgMCAwIDEgLjc4Ny0uMTY5bDkuMSAxLjhhMS4wMjIgMS4wMjIgMCAwIDEgLjguOGwxLjg1OCA5LjE2OGExLjAxNyAxLjAxNyAwIDAgMS0uMTY3Ljc4OSAxLjAyIDEuMDIgMCAwIDEtLjY4Ni40MmwtMTIuNzk0IDEuODI5YTEuMDc2IDEuMDc2IDAgMCAxLS4xMzkuMDA3em0yLjY4Ni0xMi42MDZsLTEuNDg1IDEwLjM4OCAxMC4zODItMS40ODUtMS41MDktNy40NDZ6TTY2Mi4xNzkgNDM0LjU2OWExLjAwOSAxLjAwOSAwIDAgMS0uNzItLjNsLTEwLjk2Ny0xMC45NjZhMS4wMjUgMS4wMjUgMCAwIDEtLjMtLjcxOSAxLjAyIDEuMDIgMCAwIDEgLjMtLjcybDIuNzkxLTIuNzkyYTEuMDE4IDEuMDE4IDAgMCAxIC43MTgtLjMgMS4wMjMgMS4wMjMgMCAwIDEgLjcyLjNsMTAuOTY1IDEwLjk2OGExLjAxNyAxLjAxNyAwIDAgMSAwIDEuNDM4bC0yLjc4OSAyLjc4OWExLjAxNSAxLjAxNSAwIDAgMS0uNzE4LjMwMnptLTkuNTI5LTExLjk4Mmw5LjUyOSA5LjUyNCAxLjM0OC0xLjM1LTkuNTI3LTkuNTI2eiIvPgogICAgICA8cGF0aCBkPSJNNjY0Ljk2NiA0MzEuNzc4YTEuMDA5IDEuMDA5IDAgMCAxLS43MTgtLjNsLTEwLjk2NS0xMC45NjdhMS4wMTcgMS4wMTcgMCAwIDEgMC0xLjQzOWwyLjUtMi41YTQuMTYyIDQuMTYyIDAgMCAxIDIuOTYyLTEuMjE3IDQuMjgxIDQuMjgxIDAgMCAxIDMuMDQ3IDEuMjY1bDYuMzUgNi4zNDhhNC4yNTYgNC4yNTYgMCAwIDEgLjA0NiA2LjAwOWwtMi41IDIuNWExLjAxNyAxLjAxNyAwIDAgMS0uNzIyLjMwMXptLTkuNTI1LTExLjk4NGw5LjUyNSA5LjUyNiAxLjc4Mi0xLjc4MmEyLjIxNyAyLjIxNyAwIDAgMC0uMDQ5LTMuMTNsLTYuMzQ4LTYuMzQ4YTIuMjc5IDIuMjc5IDAgMCAwLTMuMTMtLjA0N3pNNjIwLjI2OCA0NTkuODk2bDEuNDQtMS40NCA0Ljg0NCA0Ljg0NC0xLjQ0IDEuNDR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik02MzUuNTQxIDQ4NC45NTJoLTQwLjc0NGExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtNjcuNTU3YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDJoNTEuMjI4YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDJ2MTEuMzkzYTEuMDIyIDEuMDIyIDAgMCAxLS4zLjcxOGwtMjMuNzU5IDIzLjg3NC0xLjU4OCAxMS4xMTYgMTEuMTEzLTEuNTkgMTIuNzk0LTEyLjc5MmExLjAxNSAxLjAxNSAwIDAgMSAxLjExLS4yMTkgMS4wMTYgMS4wMTYgMCAwIDEgLjYyOC45NDF2MjMuNjMxYTEuMDE1IDEuMDE1IDAgMCAxLS4zLjcybC0xMC40ODUgMTAuNDg1YTEuMDE1IDEuMDE1IDAgMCAxLS43MTYuMjk5em0tMzkuNzI2LTIuMDM2aDM5LjNsOS44OS05Ljg5di0yMC43NTJsLTExLjI5NCAxMS4yOTVhMS4wMTggMS4wMTggMCAwIDEtLjU3NS4yODdsLTEyLjc5NCAxLjgzYTEuMDI4IDEuMDI4IDAgMCAxLS44NjYtLjI4OCAxLjAxNyAxLjAxNyAwIDAgMS0uMjg3LS44NjVsMS44MjgtMTIuNzkzYTEuMDM0IDEuMDM0IDAgMCAxIC4yODYtLjU3NWwyMy43LTIzLjgxNXYtOS45NTdoLTQ5LjE4OXoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTE2Ny45MjQgNDc0Ljc0MWgtMzcuNjkyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5LTEuMDE3VjQzNi4wM2ExLjAyIDEuMDIgMCAwIDEgMS4wMTktMS4wMTloMzcuNjkyYTEuMDIgMS4wMiAwIDAgMSAxLjAxNyAxLjAxOXYzNy42OTRhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTd6bS0zNi42NzUtMi4wMzVoMzUuNjU2di0zNS42NTloLTM1LjY1NnoiLz4KICAgICAgPHBhdGggZD0iTTExNzQuMjk1IDQ4MC40NDdoLTUwLjQzNGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAydi02NS45MjJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTloNTAuNDM0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djY1LjkyMmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAyem0tNDkuNDE0LTIuMDM4aDQ4LjR2LTYzLjg4N2gtNDguNHoiLz4KICAgICAgPHBhdGggZD0iTTExNjcuMjA2IDQzMS44MjdoLTM2LjI1OGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAydi0xMC40MzJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMThoMzYuMjU4YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5IDEuMDE4djEwLjQzMmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAyem0tMzUuMjM5LTIuMDM2aDM0LjIyMnYtOC40aC0zNC4yMjJ6TTExMzcuODkxIDQzNi4wM2gyLjAzNnY2Ljg1NGgtMi4wMzZ6TTExMzcuODkxIDQ0Ni41MzZoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xMTMwLjIzIDQ0My42OTJoNi44NTN2Mi4wMzZoLTYuODUzek0xMTQwLjczNSA0NDMuNjkyaDYuNTE5djIuMDM2aC02LjUxOXpNMTE1MC44NiA0NDMuNjkyaDYuNTU5djIuMDM2aC02LjU1OXpNMTE2MS4wNyA0NDMuNjkyaDYuODUzdjIuMDM2aC02Ljg1M3pNMTEzMC4yMyA0NTMuODYxaDYuODUzdjIuMDM1aC02Ljg1M3pNMTE0MC43MzUgNDUzLjg2MWg2LjUxOXYyLjAzNWgtNi41MTl6TTExNTAuODYgNDUzLjg2MWg2LjU1OXYyLjAzNWgtNi41NTl6TTExNjEuMDcgNDUzLjg2MWg2Ljg1M3YyLjAzNWgtNi44NTN6TTExMzAuMjMgNDY0LjAyN2g2Ljg1M3YyLjAzNmgtNi44NTN6TTExNDAuNzM2IDQ2NC4wMjdoNi41MTl2Mi4wMzZoLTYuNTE5ek0xMTM3Ljg5MSA0NTYuMzY3aDIuMDM2djYuODUzaC0yLjAzNnpNMTEzNy44OTEgNDY2Ljg3MmgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTExNTAuODYgNDY0LjAyN2g2LjU1OXYyLjAzNmgtNi41NTl6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMTU4LjIyNyA0MzYuMDNoMi4wMzZ2Ni44NTRoLTIuMDM2ek0xMTU4LjIyNyA0NDYuNTM1aDIuMDM2djYuODUzaC0yLjAzNnpNMTE1OC4yMjcgNDU2LjM2N2gyLjAzNnY2Ljg1M2gtMi4wMzZ6TTExNTguMjI3IDQ2Ni44NzJoMi4wMzZ2Ni44NTNoLTIuMDM2eiIvPgogICAgICA8L2c+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMTQ4LjA1OSA0MzYuMDNoMi4wMzZ2Ni44NTRoLTIuMDM2ek0xMTQ4LjA1OSA0NDYuNTM1aDIuMDM2djYuODUzaC0yLjAzNnpNMTE0OC4wNiA0NTYuMzY3aDIuMDM1djYuODUzaC0yLjAzNXpNMTE0OC4wNiA0NjYuODcyaDIuMDM1djYuODUzaC0yLjAzNXoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0zNTguNDA2IDQ3OC42MjhoLTIxLjYxNWEzLjg2MyAzLjg2MyAwIDAgMS0zLjg1OC0zLjg1OHYtNS4zNjhhMS4wMTggMS4wMTggMCAwIDEgMS4wMTctMS4wMTloMTkuNTZ2Mi4wMzZoLTE4LjU0djQuMzVhMS44MjQgMS44MjQgMCAwIDAgMS44MjEgMS44MjNoMjEuNjE0ek0zNzkuODEyIDQyMy45NDRoLTQ1Ljg2MWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtNC40MmEzLjg2MyAzLjg2MyAwIDAgMSAzLjg1OC0zLjg1OWg0MC4xOGEzLjg2MyAzLjg2MyAwIDAgMSAzLjg1OCAzLjg1OXY0LjQyYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE4IDEuMDE5em0tNDQuODQyLTIuMDM2aDQzLjgyMXYtMy40YTEuODI0IDEuODI0IDAgMCAwLTEuODIyLTEuODIzaC00MC4xNzhhMS44MjQgMS44MjQgMCAwIDAtMS44MjIgMS44MjN6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zNTMuNTExIDQ3MC40MTloLTE5LjU2YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3LTEuMDE4di00Ni40NzVhMS4wMTggMS4wMTggMCAwIDEgMS4wMTctMS4wMTdoNDUuODYxYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5IDEuMDE3djI2LjUxM2gtMi4wNHYtMjUuNDkxSDMzNC45N3Y0NC40MzloMTguNTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zODYuMDE5IDQ4OC41OTdoLTIyLjIxMWExLjAyIDEuMDIgMCAwIDEtMS4wMTktMS4wMTVsLS4wMDgtMy40LTktMTEuMTg4YTQuMDc4IDQuMDc4IDAgMCAxLTEuMjU3LTIuOTMxdi0xMi4wNzRhNC4wOSA0LjA5IDAgMCAxIDQuMDg2LTQuMDg0IDQuMDkgNC4wOSAwIDAgMSA0LjA4NCA0LjA4NHY3LjlsMS4xMDggMS41ODhWNDQzLjVhNC4wODkgNC4wODkgMCAwIDEgNC4wODQtNC4wODYgNC4wODggNC4wODggMCAwIDEgNC4wODQgNC4wODZ2NWE0LjA3IDQuMDcgMCAwIDEgMi4wNi0uNTU4IDQuMDc5IDQuMDc5IDAgMCAxIDMuMDcxIDEuMzk1IDQuMDc2IDQuMDc2IDAgMCAxIDMuMDcxLTEuMzk1IDQuMDk0IDQuMDk0IDAgMCAxIDMuOTMxIDIuOTcxIDQuMDU0IDQuMDU0IDAgMCAxIDIuMjEyLS42NTMgNC4wOTEgNC4wOTEgMCAwIDEgNC4wODQgNC4wODZ2MjMuMzQzYTQuMDc5IDQuMDc5IDAgMCAxLTEuMzYyIDMuMDQ2djYuODQ0YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE4IDEuMDE4em0tMjEuMi0yLjAzN2gyMC4xNzd2LTYuMzIyYTEuMDIgMS4wMiAwIDAgMSAuNDUyLS44NDYgMi4wNDMgMi4wNDMgMCAwIDAgLjkxLTEuN3YtMjMuMzQzYTIuMDUgMi4wNSAwIDAgMC0yLjA0OC0yLjA0OSAyLjA1MSAyLjA1MSAwIDAgMC0yLjA1IDIuMDQ5djYuOGExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAxOSAxLjAyNiAxLjAyNiAwIDAgMS0xLjAyNS0xLjAxOXYtOS4xMjNhMi4wNTIgMi4wNTIgMCAwIDAtMi4wNDQtMi4wNDggMi4wNTQgMi4wNTQgMCAwIDAtMi4wNSAyLjA1MXY5LjEyM2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAxOSAxLjAyNCAxLjAyNCAwIDAgMS0xLjAyMy0xLjAxOXYtOS4xMjNhMi4wNTQgMi4wNTQgMCAwIDAtMi4wNS0yLjA1MSAyLjA1NCAyLjA1NCAwIDAgMC0yLjA1MiAyLjA1MXY5LjEyM2ExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNyAxLjAxOSAxLjAyNCAxLjAyNCAwIDAgMS0xLjAyNS0xLjAxOXYtMTcuNjUzYTIuMDUzIDIuMDUzIDAgMCAwLTIuMDUtMi4wNSAyLjA1MSAyLjA1MSAwIDAgMC0yLjA0OCAyLjA1djI3LjIyYTEuMDE5IDEuMDE5IDAgMCAxLS43MTQuOTcgMS4wMjEgMS4wMjEgMCAwIDEtMS4xNC0uMzg3bC0zLjE0Mi00LjUxM2ExLjAyMSAxLjAyMSAwIDAgMS0uMTg0LS41ODN2LTguMjE5YTIuMDUxIDIuMDUxIDAgMCAwLTIuMDQ4LTIuMDUgMi4wNTMgMi4wNTMgMCAwIDAtMi4wNSAyLjA1djEyLjA3NGEyLjAyMyAyLjAyMyAwIDAgMCAuNjg2IDEuNTE1Ljk4Ljk4IDAgMCAxIC4xODIuMjE3bDkuMTYzIDExLjM4OWExLjAwNyAxLjAwNyAwIDAgMSAuMjI2LjYzNXoiLz4KICAgICAgPHBhdGggZD0iTTM4Ny4zOCA0OTkuMzloLTI0Ljc0OGExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxN3YtMTAuNzk0YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE5aDI0Ljc0OGExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOSAxLjAxOXYxMC43OTRhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTd6bS0yMy43MzEtMi4wMzZoMjIuNzA5di04Ljc1N2gtMjIuNzA5eiIvPgogICAgICA8cGF0aCBkPSJNMzY1LjM2OSA0ODcuNTc5aDIuMDM2djEwLjc5NGgtMi4wMzZ6TTM2OC42OTEgNDkwLjkxMWgzLjEyNXYyLjAzNmgtMy4xMjV6TTM0MC4yMDIgNDMxLjE5N2gzMy4zNnYyLjAzNmgtMzMuMzZ6TTM0MC4yMDIgNDM2LjI4NmgzMy4zNnYyLjAzNmgtMzMuMzZ6TTM0MC4yMDIgNDQxLjM3N2gyMi42MTZ2Mi4wMzVoLTIyLjYxNnpNMzQwLjIwMiA0NDYuNDY1aDIyLjc4OXYyLjAzNmgtMjIuNzg5ek0zNDAuMjAyIDQ1MS41NTZoMjIuNjE2djIuMDM2aC0yMi42MTZ6TTM0MC4yMDIgNDU2LjY0NmgxMy4zMzh2Mi4wMzZoLTEzLjMzOHpNMzY4Ljc0NSA0NDEuMzc3aDQuODE2djIuMDM1aC00LjgxNnpNMzUzLjgwNiA0MTguMjc4aDYuMTUxdjIuMDM2aC02LjE1MXoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNzM1Ljk1MSA0NzIuNzQxYTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI2LTcuNDI4di0xOC4zOTRhNy40MzQgNy40MzQgMCAwIDEgNy40MjYtNy40MjUgNy40MzQgNy40MzQgMCAwIDEgNy40MjYgNy40MjV2MTguMzk0YTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI2IDcuNDI4em0wLTMxLjIxMWE1LjQgNS40IDAgMCAwLTUuMzkgNS4zOXYxOC4zOTRhNS40IDUuNCAwIDAgMCA1LjM5IDUuMzkxIDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5MXYtMTguMzk1YTUuNCA1LjQgMCAwIDAtNS4zOS01LjM4OXoiLz4KICAgICAgPHBhdGggZD0iTTcyOS41NDIgNDY2Ljg3MmE3LjI2MyA3LjI2MyAwIDAgMS03LjI1NC03LjI1NnYtN2E3LjI2MyA3LjI2MyAwIDAgMSA3LjI1NC03LjI1NWguMDg3YS45NDYuOTQ2IDAgMCAxIC43Mi4zMzEuOTg1Ljk4NSAwIDAgMSAuMjM2Ljc3MmMtLjAxNC4xNS0uMDI0LjMtLjAyNC40NXYxOC4zOTNjMCAuMTU0LjAxLjMuMDI0LjQ1YTEuMDI3IDEuMDI3IDAgMCAxLS4yNjQuNzc3IDEuMDE4IDEuMDE4IDAgMCAxLS43NTEuMzI5em0tMS4wMTctMTkuMzhhNS4yMzUgNS4yMzUgMCAwIDAtNC4yIDUuMTI4djdhNS4yMjUgNS4yMjUgMCAwIDAgNC4yIDUuMTE5ek03MzQuOTM0IDQ0MC41MTJoMi4wMzV2MTUuNjA1aC0yLjAzNXpNNzM0LjkzNCA0NjEuODQyaDIuMDM1djkuODgxaC0yLjAzNXpNNzg3LjczNyA0NzIuNzQxYTcuNDM2IDcuNDM2IDAgMCAxLTcuNDI4LTcuNDI4di0xOC4zOTRhNy40MzQgNy40MzQgMCAwIDEgNy40MjgtNy40MjUgNy40MzQgNy40MzQgMCAwIDEgNy40MjYgNy40MjV2MTguMzk0YTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI2IDcuNDI4em0wLTMxLjIxMWE1LjQgNS40IDAgMCAwLTUuMzkyIDUuMzl2MTguMzk0YTUuNCA1LjQgMCAwIDAgNS4zOTIgNS4zOTEgNS40IDUuNCAwIDAgMCA1LjM5LTUuMzkxdi0xOC4zOTVhNS40IDUuNCAwIDAgMC01LjM5LTUuMzg5eiIvPgogICAgICA8cGF0aCBkPSJNNzk0LjE0MyA0NjYuODcyaC0uMDg3YS45NTQuOTU0IDAgMCAxLS43MTgtLjMyNyAxIDEgMCAwIDEtLjIzNi0uNzcyYy4wMTItLjE1LjAyNC0uMy4wMjQtLjQ1NHYtMTguMzk0YzAtLjE1My0uMDEyLS4zLS4wMjQtLjQ1NGExLjAyMSAxLjAyMSAwIDAgMSAuMjY2LS43NzIuOTk0Ljk5NCAwIDAgMSAuNzUxLS4zMjcgNy4yNjYgNy4yNjYgMCAwIDEgNy4yOCA3LjI1MnY3YTcuMjY0IDcuMjY0IDAgMCAxLTcuMjU2IDcuMjQ4em0xLjAxOS0xOS4zNzJ2MTcuMjM1YTUuMjI3IDUuMjI3IDAgMCAwIDQuMi01LjExOXYtN2E1LjIzMiA1LjIzMiAwIDAgMC00LjItNS4xMTZ6TTc4Ni43MTggNDQwLjUxMmgyLjAzNnYxNS42MDVoLTIuMDM2ek03ODYuNzE4IDQ2MS44NDJoMi4wMzZ2OS44ODFoLTIuMDM2ek03ODguNzk0IDQ0MC41MTJoLTIuMDM5di0xLjcxOGEyNC44MjUgMjQuODI1IDAgMCAwLTIuODc0LTExLjU5M2wxLjgtLjk1MmEyNi44OCAyNi44OCAwIDAgMSAzLjExMSAxMi41NDV6TTczNy4yMTggNDQwLjUxMmgtMi4wMzZ2LTEuNzE4YTI2Ljg2MSAyNi44NjEgMCAwIDEgMy4xMS0xMi41NDVsMS44Ljk1NWEyNC44IDI0LjggMCAwIDAtMi44NzMgMTEuNTl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NDIuNTMxIDQyOC43NDJhLjk5MS45OTEgMCAwIDEtLjI5MS0uMDQ0bC02LjYzMy0xLjk4MmExLjAyNiAxLjAyNiAwIDAgMS0uNjQyLS41NzIgMS4wMjIgMS4wMjIgMCAwIDEgLjAyNC0uODYyIDMwLjA3NSAzMC4wNzUgMCAwIDEgMjctMTYuNjg3IDMwLjA3NCAzMC4wNzQgMCAwIDEgMjcgMTYuNjg3IDEuMDIyIDEuMDIyIDAgMCAxIC4wMjYuODYyIDEuMDI1IDEuMDI1IDAgMCAxLS42NDQuNTcybC02LjYzMyAxLjk4MmExLjAxOSAxLjAxOSAwIDAgMS0xLjE3NC0uNDY5IDIxLjQ1MiAyMS40NTIgMCAwIDAtMTguNTcxLTEwLjgxNCAyMS40NTMgMjEuNDUzIDAgMCAwLTE4LjU3MyAxMC44MTQgMS4wMTUgMS4wMTUgMCAwIDEtLjg4OS41MTN6bTE5LjQ1Ny0xMy4zNjFhMjMuNDg5IDIzLjQ4OSAwIDAgMSAxOS45MjMgMTEuMTM5bDQuNjg2LTEuNGEyOC4wMzcgMjguMDM3IDAgMCAwLTI0LjYwOS0xNC40ODcgMjguMDMyIDI4LjAzMiAwIDAgMC0yNC42MDggMTQuNDkxbDQuNjg0IDEuNGEyMy40OTMgMjMuNDkzIDAgMCAxIDE5LjkyNC0xMS4xNDN6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NjEuODQzIDQ1OS4wNTVhMTUuMiAxNS4yIDAgMCAxLTE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4NyAxNS4xODcgMTUuMiAxNS4yIDAgMCAxLTE1LjE4NyAxNS4xODd6bTAtMjguMzM3YTEzLjE2NyAxMy4xNjcgMCAwIDAtMTMuMTU2IDEzLjE0NyAxMy4xNjUgMTMuMTY1IDAgMCAwIDEzLjE1MSAxMy4xNSAxMy4xNjQgMTMuMTY0IDAgMCAwIDEzLjE1MS0xMy4xNSAxMy4xNjYgMTMuMTY2IDAgMCAwLTEzLjE0Ni0xMy4xNDh6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NTcuMDYgNDUyLjYyN2ExLjAyOCAxLjAyOCAwIDAgMS0uNTExLS4xMzUgMS4wMiAxLjAyIDAgMCAxLS41MDktLjg4MnYtMTUuNDg1YTEuMDIyIDEuMDIyIDAgMCAxIC41MDktLjg4MiAxLjAyMyAxLjAyMyAwIDAgMSAxLjAxOSAwbDEzLjQxMSA3Ljc0M2ExLjAxNyAxLjAxNyAwIDAgMSAuNTA4Ljg4MiAxLjAxOSAxLjAxOSAwIDAgMS0uNTA4Ljg4MWwtMTMuNDExIDcuNzQzYTEuMDIxIDEuMDIxIDAgMCAxLS41MDguMTM1em0xLjAxNy0xNC43Mzl2MTEuOTU4bDEwLjM1OC01Ljk3OHpNNzU0LjQwMyA0ODMuMjc3aC0xMy4wMjJhNi4zNzUgNi4zNzUgMCAwIDEtNi40NDctNi4yODZ2LTUuMjcxaDIuMDR2NS4yNzFhNC4zMzcgNC4zMzcgMCAwIDAgNC40MTEgNC4yNWgxMy4wMjJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NjUuOTY2IDQ4Ni41OTloLTguMjQ1YTQuMzQxIDQuMzQxIDAgMCAxLTQuMzM0LTQuMzM3IDQuMzQxIDQuMzQxIDAgMCAxIDQuMzM0LTQuMzM2aDguMjQ1YTQuMzQxIDQuMzQxIDAgMCAxIDQuMzM2IDQuMzM2IDQuMzQxIDQuMzQxIDAgMCAxLTQuMzM2IDQuMzM3em0tOC4yNDUtNi42MzdhMi4zIDIuMyAwIDAgMC0yLjMgMi4zIDIuMyAyLjMgMCAwIDAgMi4zIDIuM2g4LjI0NWEyLjMgMi4zIDAgMCAwIDIuMy0yLjMgMi4zIDIuMyAwIDAgMC0yLjMtMi4zeiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik01MjUuMjM5IDQ3NS43MzNoLTc0LjU0NWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtOS4xNTNhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTloNzQuNTQ1YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE3IDEuMDE5djkuMTUzYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE3IDEuMDE5em0tNzMuNTI4LTIuMDM2aDcyLjUwOXYtNy4xMTloLTcyLjUwOXoiLz4KICAgICAgPHBhdGggZD0iTTUyNS4yMzkgNDY2LjU3OWgtNzQuNTQ1YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE3VjQyOC4yOWExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOGgxNy4yNjV2Mi4wMzZoLTE2LjI0OHYzNS4yMzRoNzIuNTA5di0zNS4yMzRoLTE2LjEyN3YtMi4wMzZoMTcuMTQ2YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE4djM3LjI3MmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxN3pNNDk2Ljc3MSA0ODYuODE0bC0xLjgyMi0xMS4wOGgtMTMuOTY2bC0xLjgyIDExLjA4LTIuMDEtLjMzIDEuOTYxLTExLjkzNmExLjAxOCAxLjAxOCAwIDAgMSAxLS44NTFoMTUuN2ExLjAxNiAxLjAxNiAwIDAgMSAxIC44NTFsMS45NjEgMTEuOTM2eiIvPgogICAgICA8cGF0aCBkPSJNNDcwLjI4MiA0ODUuNjMyaDM1LjM3djIuMDM2aC0zNS4zN3pNNDU0LjkyMyA0MjcuMjcyaDU2LjA1MnYyLjAzNmgtNTYuMDUyek00OTUuMjI2IDQ0NS44MTlsLTcuNDIyIDIuMS00LjMyIDYuMzc3LTMuNzM1LTE3LjU1MXpNNDg4Ljg0NCA0NTEuODYybDIuMzc3LTEuNzE2IDQuNzYyIDYuNTk0LTIuMzc3IDEuNzE3eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xODUyLjU4NSA0NzUuNzM0aC03NC41NDVhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTl2LTkuMTUzYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE5aDc0LjU0NWExLjAxOSAxLjAxOSAwIDAgMSAxLjAxNyAxLjAxOXY5LjE1M2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxOXptLTczLjUyOC0yLjAzNmg3Mi41MDl2LTcuMTE5aC03Mi41MDl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xODUyLjU4NSA0NjYuNThoLTc0LjU0NWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxN3YtMzcuMjcyYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE4aDE3LjI2NXYyLjAzNmgtMTYuMjQ4djM1LjIzNGg3Mi41MDl2LTM1LjIzNGgtMTYuMTI2di0yLjAzNmgxNy4xNDZhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTh2MzcuMjcyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE4IDEuMDE3ek0xODI0LjExNyA0ODYuODE1bC0xLjgyMi0xMS4wOGgtMTMuOTY2bC0xLjgyIDExLjA4LTIuMDEtLjMzIDEuOTYxLTExLjkzNmExLjAxOCAxLjAxOCAwIDAgMSAxLS44NTFoMTUuN2ExLjAxNiAxLjAxNiAwIDAgMSAxIC44NTFsMS45NjEgMTEuOTM2eiIvPgogICAgICA8cGF0aCBkPSJNMTc5Ny42MjggNDg1LjYzM2gzNS4zN3YyLjAzNmgtMzUuMzd6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xODM1LjQzOSA0NjYuNThoLTQwLjEzNGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxN3YtNTIuOTI2YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDE3aDMxLjkxOWExLjAyNCAxLjAyNCAwIDAgMSAuNzIuM2w4LjIxNSA4LjIxNWExLjAyNyAxLjAyNyAwIDAgMSAuMy43MjF2NDQuNzExYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDIgMS4wMTN6bS0zOS4xMTUtMi4wMzZoMzguMXYtNDMuMjdsLTcuNjItNy42MTdoLTMwLjQ4eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xODM1LjQzOSA0MjEuODY5aC04LjIxNWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxNy0xLjAxN3YtOC4yMTVhMS4wMTkgMS4wMTkgMCAwIDEgLjYyOC0uOTQgMS4wMjMgMS4wMjMgMCAwIDEgMS4xMS4yMmw4LjIxNSA4LjIxNWExLjAyMSAxLjAyMSAwIDAgMSAuMjIgMS4xMSAxLjAxOSAxLjAxOSAwIDAgMS0uOTQxLjYyN3ptLTcuMi0yLjAzN2g0LjczOGwtNC43MzgtNC43Mzh6TTE4MDEuMTE0IDQyNS41MzZoMjguNTE2djIuMDM2aC0yOC41MTZ6TTE4MDEuMTE0IDQzMS4wNTJoMjguNTE2djIuMDM1aC0yOC41MTZ6TTE4MDEuMTE0IDQzNi41NjhoMjguNTE2djIuMDM2aC0yOC41MTZ6TTE4MDEuMTE0IDQ0Mi4wODNoMjguNTE2djIuMDM2aC0yOC41MTZ6TTE4MDEuMTE0IDQ0Ny41OThoMjguNTE2djIuMDM2aC0yOC41MTZ6TTE4MDEuMTE0IDQ1My4xMTRoMTcuODUzdjIuMDM2aC0xNy44NTN6Ii8+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTU1MS45NTQgNDg0Ljk1MmExIDEgMCAwIDEtLjM4OS0uMDc5IDEuMDEyIDEuMDEyIDAgMCAxLS42MjctLjk0di0xMC40ODVhMS4wMTUgMS4wMTUgMCAwIDEgMS4wMTctMS4wMTdoMTAuNDg1YTEuMDE3IDEuMDE3IDAgMCAxIC45NC42MjcgMS4wMiAxLjAyIDAgMCAxLS4yMiAxLjExbC0xMC40ODcgMTAuNDg1YTEuMDA4IDEuMDA4IDAgMCAxLS43MTkuMjk5em0xLjAxNy0xMC40ODV2Ny4wMWw3LjAxLTcuMDF6TTE1NDcuNTUgNDU0LjY5OWEuOTQzLjk0MyAwIDAgMS0uMi0uMDIxbC05LjE2NS0xLjg1NGExLjAxNSAxLjAxNSAwIDAgMS0uNzczLS43IDEuMDE3IDEuMDE3IDAgMCAxIC4yNTQtMS4wMTNsMjkuMjQxLTI5LjI0MWExLjAxNyAxLjAxNyAwIDAgMSAxLjQzOSAwbDUuNTEzIDUuNTFhMS4wMTYgMS4wMTYgMCAwIDEgLjMuNzIgMS4wMTcgMS4wMTcgMCAwIDEtLjMuNzJsLTI1LjU4NyAyNS41ODVhMS4wMjQgMS4wMjQgMCAwIDEtLjcyMi4yOTR6bS03LjEwNS0zLjVsNi43NzIgMS4zNzIgMjQuNDgxLTI0LjQ3OS00LjA3Mi00LjA3MnoiLz4KICAgICAgPHBhdGggZD0iTTE1NDkuNDA4IDQ2My44NjZhMS4wMjUgMS4wMjUgMCAwIDEtLjI5My0uMDQzIDEuMDE5IDEuMDE5IDAgMCAxLS43LS43NzNsLTEuODU5LTkuMTY3YTEuMDE2IDEuMDE2IDAgMCAxIC4yNzktLjkyM2wyNS41ODctMjUuNTg1YTEuMDIyIDEuMDIyIDAgMCAxIC43MTktLjMgMS4wMjQgMS4wMjQgMCAwIDEgLjcyLjNsNS41MTEgNS41MTNhMS4wMTcgMS4wMTcgMCAwIDEgMCAxLjQzOWwtMjkuMjM5IDI5LjI0MWExLjAxNSAxLjAxNSAwIDAgMS0uNzI1LjI5OHptLS43NTMtOS44NTFsMS4zNzQgNi43NzQgMjcuMTc5LTI3LjE4Mi00LjA3Mi00LjA3MnoiLz4KICAgICAgPHBhdGggZD0iTTE1MzYuNjE0IDQ2NS42OTRhMS4wMjQgMS4wMjQgMCAwIDEtLjcyLS4zIDEuMDE0IDEuMDE0IDAgMCAxLS4yODYtLjg2NGwxLjgyOC0xMi43OTRhMS4wMjIgMS4wMjIgMCAwIDEgLjQyLS42ODYgMS4wMjcgMS4wMjcgMCAwIDEgLjc4NS0uMTY5bDkuMTA3IDEuOGExLjAyMiAxLjAyMiAwIDAgMSAuOC44bDEuODU5IDkuMTY4YTEuMDI1IDEuMDI1IDAgMCAxLS4xNjguNzg5IDEuMDI0IDEuMDI0IDAgMCAxLS42ODYuNDJsLTEyLjc5MyAxLjgyOWExLjA3OCAxLjA3OCAwIDAgMS0uMTQ2LjAwN3ptMi42ODYtMTIuNjA2bC0xLjQ4NyAxMC4zODggMTAuMzgyLTEuNDg1LTEuNTA3LTcuNDQ2ek0xNTc4LjU5MSA0MzQuNTY5YTEuMDE3IDEuMDE3IDAgMCAxLS43Mi0uM2wtMTAuOTY1LTEwLjk2NmExLjAxNyAxLjAxNyAwIDAgMS0uMy0uNzE5IDEuMDEyIDEuMDEyIDAgMCAxIC4zLS43MmwyLjc4OS0yLjc5MmExLjAyNSAxLjAyNSAwIDAgMSAuNzItLjMgMS4wMjcgMS4wMjcgMCAwIDEgLjcyLjNsMTAuOTY1IDEwLjk2OGExLjAxNyAxLjAxNyAwIDAgMSAwIDEuNDM4bC0yLjc4OSAyLjc4OWExLjAxNiAxLjAxNiAwIDAgMS0uNzIuMzAyem0tOS41MjctMTEuOTgybDkuNTI3IDkuNTI0IDEuMzUtMS4zNS05LjUyNy05LjUyNnoiLz4KICAgICAgPHBhdGggZD0iTTE1ODEuMzggNDMxLjc3OGExLjAxNyAxLjAxNyAwIDAgMS0uNzItLjNsLTEwLjk2NS0xMC45NjdhMS4wMjEgMS4wMjEgMCAwIDEgMC0xLjQzOWwyLjUtMi41YTQuMTU5IDQuMTU5IDAgMCAxIDIuOTYyLTEuMjE3IDQuMjggNC4yOCAwIDAgMSAzLjA0NyAxLjI2NWw2LjM1IDYuMzQ4YTQuMjU2IDQuMjU2IDAgMCAxIC4wNDcgNi4wMDlsLTIuNSAyLjVhMS4wMTYgMS4wMTYgMCAwIDEtLjcyMS4zMDF6bS05LjUyNi0xMS45ODRsOS41MjYgOS41MjYgMS43ODItMS43ODJhMi4yMTcgMi4yMTcgMCAwIDAtLjA0OC0zLjEzbC02LjM0OC02LjM0OGEyLjI4MSAyLjI4MSAwIDAgMC0zLjEzMi0uMDQ3ek0xNTM2LjY4MiA0NTkuODk2bDEuNDQtMS40NCA0Ljg0NCA0Ljg0NC0xLjQ0IDEuNDR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNTUxLjk1NSA0ODQuOTUyaC00MC43NDZhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTl2LTY3LjU1N2ExLjAxOSAxLjAxOSAwIDAgMSAxLjAxNy0xLjAyaDUxLjIzM2ExLjAxOSAxLjAxOSAwIDAgMSAxLjAxNyAxLjAydjExLjM5M2ExLjAyIDEuMDIgMCAwIDEtLjI5NS43MThsLTIzLjc1OSAyMy44NzQtMS41OSAxMS4xMTYgMTEuMTE1LTEuNTkgMTIuNzkyLTEyLjc5MmExLjAxNiAxLjAxNiAwIDAgMSAxLjExLS4yMTkgMS4wMTMgMS4wMTMgMCAwIDEgLjYyNy45NDF2MjMuNjMxYTEuMDIyIDEuMDIyIDAgMCAxLS4zLjcybC0xMC40ODcgMTAuNDg1YTEuMDA3IDEuMDA3IDAgMCAxLS43MTcuMjk5em0tMzkuNzI3LTIuMDM2aDM5LjNsOS44OS05Ljg5di0yMC43NTJsLTExLjI5NCAxMS4yOTVhMS4wMTkgMS4wMTkgMCAwIDEtLjU3NS4yODdsLTEyLjc5MyAxLjgzYTEuMDI2IDEuMDI2IDAgMCAxLS44NjYtLjI4OCAxLjAxNyAxLjAxNyAwIDAgMS0uMjg3LS44NjVsMS44MjgtMTIuNzkzYTEuMDIyIDEuMDIyIDAgMCAxIC4yODctLjU3NWwyMy43LTIzLjgxNXYtOS45NTdoLTQ5LjE5eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xMjc0LjgyIDQ3OC42MjhoLTIxLjYxNGEzLjg2NCAzLjg2NCAwIDAgMS0zLjg2LTMuODU4di01LjM2OGExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWgxOS41NnYyLjAzNmgtMTguNTQzdjQuMzVhMS44MjUgMS44MjUgMCAwIDAgMS44MjQgMS44MjJoMjEuNjE0ek0xMjk2LjIyNiA0MjMuOTQ0aC00NS44NjRhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTl2LTQuNDJhMy44NjQgMy44NjQgMCAwIDEgMy44Ni0zLjg1OWg0MC4xODFhMy44NjEgMy44NjEgMCAwIDEgMy44NTYgMy44NTl2NC40MmExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNCAxLjAxOXptLTQ0Ljg0NC0yLjAzNmg0My44Mjd2LTMuNGExLjgyNCAxLjgyNCAwIDAgMC0xLjgyMi0xLjgyM2gtNDAuMTgxYTEuODI2IDEuODI2IDAgMCAwLTEuODI0IDEuODIzeiIvPgogICAgICA8cGF0aCBkPSJNMTI2OS45MjUgNDcwLjQxOWgtMTkuNTYzYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5LTEuMDE4di00Ni40NzVhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTdoNDUuODYxYTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE3djI2LjUxM2gtMi4wMzR2LTI1LjQ5MWgtNDMuODI0djQ0LjQzOWgxOC41NDN6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xMzAyLjQzMyA0ODguNTk3aC0yMi4yMTFhMS4wMTggMS4wMTggMCAwIDEtMS4wMTktMS4wMTVsLS4wMS0zLjQtOS0xMS4xODhhNC4wNzggNC4wNzggMCAwIDEtMS4yNTctMi45MzF2LTEyLjA3NGE0LjA5IDQuMDkgMCAwIDEgNC4wODQtNC4wODQgNC4wOSA0LjA5IDAgMCAxIDQuMDg2IDQuMDg0djcuOWwxLjEwNiAxLjU4OFY0NDMuNWE0LjA5MSA0LjA5MSAwIDAgMSA0LjA4Ni00LjA4NiA0LjA4OSA0LjA4OSAwIDAgMSA0LjA4NCA0LjA4NnY1YTQuMDcgNC4wNyAwIDAgMSAyLjA2LS41NTggNC4wNzUgNC4wNzUgMCAwIDEgMy4wNjkgMS4zOTUgNC4wODQgNC4wODQgMCAwIDEgMy4wNzMtMS4zOTUgNC4wODkgNC4wODkgMCAwIDEgMy45MjkgMi45NzEgNC4wNjQgNC4wNjQgMCAwIDEgMi4yMTItLjY1MyA0LjA5MiA0LjA5MiAwIDAgMSA0LjA4NiA0LjA4NnYyMy4zNDNhNC4wNzkgNC4wNzkgMCAwIDEtMS4zNjIgMy4wNDZ2Ni44NDRhMS4wMTggMS4wMTggMCAwIDEtMS4wMTYgMS4wMTh6bS0yMS4yLTIuMDM3aDIwLjE4MXYtNi4zMjJhMS4wMiAxLjAyIDAgMCAxIC40NTItLjg0NiAyLjA0NyAyLjA0NyAwIDAgMCAuOTEtMS43di0yMy4zNDNhMi4wNTIgMi4wNTIgMCAwIDAtMi4wNS0yLjA0OSAyLjA1IDIuMDUgMCAwIDAtMi4wNDggMi4wNDl2Ni44YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5IDEuMDE5IDEuMDI0IDEuMDI0IDAgMCAxLTEuMDI1LTEuMDE5di05LjEyM2EyLjA1NCAyLjA1NCAwIDAgMC0yLjA0OC0yLjA1MSAyLjA1NCAyLjA1NCAwIDAgMC0yLjA1MiAyLjA1MXY5LjEyM2ExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNyAxLjAxOSAxLjAyNCAxLjAyNCAwIDAgMS0xLjAyNS0xLjAxOXYtOS4xMjNhMi4wNTIgMi4wNTIgMCAwIDAtMi4wNDgtMi4wNDggMi4wNTQgMi4wNTQgMCAwIDAtMi4wNTIgMi4wNTF2OS4xMjNhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTcgMS4wMTkgMS4wMjYgMS4wMjYgMCAwIDEtMS4wMjctMS4wMTl2LTE3LjY1M2EyLjA1MSAyLjA1MSAwIDAgMC0yLjA0OC0yLjA1IDIuMDUxIDIuMDUxIDAgMCAwLTIuMDQ4IDIuMDV2MjcuMjJhMS4wMjEgMS4wMjEgMCAwIDEtLjcxNC45NyAxLjAyMSAxLjAyMSAwIDAgMS0xLjE0LS4zODdsLTMuMTQyLTQuNTEzYTEuMDIgMS4wMiAwIDAgMS0uMTg0LS41ODN2LTguMjE5YTIuMDUyIDIuMDUyIDAgMCAwLTIuMDUtMi4wNSAyLjA1MyAyLjA1MyAwIDAgMC0yLjA0OCAyLjA1djEyLjA3NGEyLjAxNiAyLjAxNiAwIDAgMCAuNjg2IDEuNTE1IDEuMDQ3IDEuMDQ3IDAgMCAxIC4xODIuMjE3bDkuMTYzIDExLjM4OWExLjAxOSAxLjAxOSAwIDAgMSAuMjI2LjYzNXoiLz4KICAgICAgPHBhdGggZD0iTTEzMDMuNzkzIDQ5OS4zOWgtMjQuNzVhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTd2LTEwLjc5NGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxOWgyNC43NWExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOSAxLjAxOXYxMC43OTRhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTd6bS0yMy43MzEtMi4wMzZoMjIuNzE0di04Ljc1N2gtMjIuNzE0eiIvPgogICAgICA8cGF0aCBkPSJNMTI4MS43ODIgNDg3LjU3OWgyLjAzNnYxMC43OTRoLTIuMDM2ek0xMjg1LjEwNCA0OTAuOTExaDMuMTI1djIuMDM2aC0zLjEyNXpNMTI1Ni42MTYgNDMxLjE5N2gzMy4zNnYyLjAzNmgtMzMuMzZ6TTEyNTYuNjE2IDQzNi4yODZoMzMuMzZ2Mi4wMzZoLTMzLjM2ek0xMjU2LjYxNiA0NDEuMzc3aDIyLjYxNnYyLjAzNWgtMjIuNjE2ek0xMjU2LjYxNiA0NDYuNDY1aDIyLjc4OXYyLjAzNmgtMjIuNzg5ek0xMjU2LjYxNiA0NTEuNTU2aDIyLjYxNnYyLjAzNmgtMjIuNjE2ek0xMjU2LjYxNiA0NTYuNjQ2aDEzLjMzOHYyLjAzNmgtMTMuMzM4ek0xMjg1LjE1OSA0NDEuMzc3aDQuODE2djIuMDM1aC00LjgxNnpNMTI3MC4yMiA0MTguMjc4aDYuMTUxdjIuMDM2aC02LjE1MXoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTY1Mi4zNjUgNDcyLjc0MWE3LjQzNSA3LjQzNSAwIDAgMS03LjQyNi03LjQyOHYtMTguMzk0YTcuNDM0IDcuNDM0IDAgMCAxIDcuNDI2LTcuNDI1IDcuNDM0IDcuNDM0IDAgMCAxIDcuNDI2IDcuNDI1djE4LjM5NGE3LjQzNSA3LjQzNSAwIDAgMS03LjQyNiA3LjQyOHptMC0zMS4yMTFhNS40IDUuNCAwIDAgMC01LjM5IDUuMzl2MTguMzk0YTUuNCA1LjQgMCAwIDAgNS4zOSA1LjM5MSA1LjQgNS40IDAgMCAwIDUuMzktNS4zOTF2LTE4LjM5NWE1LjQgNS40IDAgMCAwLTUuMzktNS4zODl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNjQ1Ljk1NiA0NjYuODcyYTcuMjY0IDcuMjY0IDAgMCAxLTcuMjU2LTcuMjU2di03YTcuMjY0IDcuMjY0IDAgMCAxIDcuMjU2LTcuMjU1aC4wODdhLjk0OS45NDkgMCAwIDEgLjcyLjMzMS45OTMuOTkzIDAgMCAxIC4yMzYuNzcyYy0uMDE0LjE1LS4wMjQuMy0uMDI0LjQ1djE4LjM5M2MwIC4xNTQuMDEuMy4wMjQuNDVhMS4wMzYgMS4wMzYgMCAwIDEtLjI2NC43NzcgMS4wMjIgMS4wMjIgMCAwIDEtLjc1MS4zMjl6bS0xLjAxNy0xOS4zOGE1LjIzMyA1LjIzMyAwIDAgMC00LjIgNS4xMjh2N2E1LjIyNSA1LjIyNSAwIDAgMCA0LjIgNS4xMTl6TTE2NTEuMzQ3IDQ0MC41MTJoMi4wMzV2MTUuNjA1aC0yLjAzNXpNMTY1MS4zNDcgNDYxLjg0MmgyLjAzNXY5Ljg4MWgtMi4wMzV6TTE3MDQuMTUxIDQ3Mi43NDFhNy40MzYgNy40MzYgMCAwIDEtNy40MjgtNy40Mjh2LTE4LjM5NGE3LjQzNCA3LjQzNCAwIDAgMSA3LjQyOC03LjQyNSA3LjQzNCA3LjQzNCAwIDAgMSA3LjQyNiA3LjQyNXYxOC4zOTRhNy40MzUgNy40MzUgMCAwIDEtNy40MjYgNy40Mjh6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOTIgNS4zOXYxOC4zOTRhNS40IDUuNCAwIDAgMCA1LjM5MiA1LjM5MSA1LjQgNS40IDAgMCAwIDUuMzktNS4zOTF2LTE4LjM5NWE1LjQgNS40IDAgMCAwLTUuMzktNS4zODl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNzEwLjU1OCA0NjYuODcyaC0uMDg3YS45NTEuOTUxIDAgMCAxLS43MTgtLjMyNyAxIDEgMCAwIDEtLjIzNi0uNzcyYy4wMTItLjE1LjAyNC0uMy4wMjQtLjQ1NHYtMTguMzk0YzAtLjE1My0uMDEyLS4zLS4wMjQtLjQ1NGExLjAxMyAxLjAxMyAwIDAgMSAuMjY2LS43NzIuOTk0Ljk5NCAwIDAgMSAuNzUxLS4zMjcgNy4yNjYgNy4yNjYgMCAwIDEgNy4yODEgNy4yNTJ2N2E3LjI2NCA3LjI2NCAwIDAgMS03LjI1NyA3LjI0OHptMS4wMTktMTkuMzcydjE3LjIzNWE1LjIyNyA1LjIyNyAwIDAgMCA0LjItNS4xMTl2LTdhNS4yMzIgNS4yMzIgMCAwIDAtNC4yLTUuMTE2ek0xNzAzLjEzMiA0NDAuNTEyaDIuMDM2djE1LjYwNWgtMi4wMzZ6TTE3MDMuMTMyIDQ2MS44NDJoMi4wMzZ2OS44ODFoLTIuMDM2ek0xNzA1LjIwNiA0NDAuNTEyaC0yLjAzNnYtMS43MThhMjQuODI3IDI0LjgyNyAwIDAgMC0yLjg3My0xMS41OTNsMS44LS45NTJhMjYuODU0IDI2Ljg1NCAwIDAgMSAzLjExMiAxMi41NDV6TTE2NTMuNjMgNDQwLjUxMmgtMi4wMzR2LTEuNzE4YTI2Ljg2MiAyNi44NjIgMCAwIDEgMy4xMDktMTIuNTQ1bDEuOC45NTVhMjQuODE4IDI0LjgxOCAwIDAgMC0yLjg3NSAxMS41OXoiLz4KICAgICAgPHBhdGggZD0iTTE2NTguOTQ1IDQyOC43NDJhMS4wMTIgMS4wMTIgMCAwIDEtLjI5Mi0uMDQ0bC02LjYzMS0xLjk4MmExLjAyMSAxLjAyMSAwIDAgMS0uNjQyLS41NzIgMS4wMjEgMS4wMjEgMCAwIDEgLjAyNC0uODYyIDMwLjA3NCAzMC4wNzQgMCAwIDEgMjctMTYuNjg3IDMwLjA3NSAzMC4wNzUgMCAwIDEgMjcgMTYuNjg3IDEuMDI5IDEuMDI5IDAgMCAxIC4wMjYuODYyIDEuMDI1IDEuMDI1IDAgMCAxLS42NDQuNTcybC02LjYzMyAxLjk4MmExLjAyMSAxLjAyMSAwIDAgMS0xLjE3Ni0uNDY5IDIxLjQ0OCAyMS40NDggMCAwIDAtMTguNTcxLTEwLjgxNCAyMS40NTIgMjEuNDUyIDAgMCAwLTE4LjU3MSAxMC44MTQgMS4wMTggMS4wMTggMCAwIDEtLjg5LjUxM3ptMTkuNDU1LTEzLjM2MWEyMy40OSAyMy40OSAwIDAgMSAxOS45MjUgMTEuMTM5bDQuNjgzLTEuNGEyOC4wMzYgMjguMDM2IDAgMCAwLTI0LjYwOC0xNC40ODcgMjguMDMyIDI4LjAzMiAwIDAgMC0yNC42MDYgMTQuNDkxbDQuNjgzIDEuNGEyMy40ODkgMjMuNDg5IDAgMCAxIDE5LjkyMy0xMS4xNDN6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNjc4LjI1OSA0NTkuMDU1YTE1LjIgMTUuMiAwIDAgMS0xNS4xODctMTUuMTg3IDE1LjIgMTUuMiAwIDAgMSAxNS4xODctMTUuMTg3IDE1LjIgMTUuMiAwIDAgMSAxNS4xODcgMTUuMTg3IDE1LjIgMTUuMiAwIDAgMS0xNS4xODcgMTUuMTg3em0wLTI4LjMzN2ExMy4xNjUgMTMuMTY1IDAgMCAwLTEzLjE1MSAxMy4xNTEgMTMuMTY0IDEzLjE2NCAwIDAgMCAxMy4xNTEgMTMuMTUgMTMuMTY0IDEzLjE2NCAwIDAgMCAxMy4xNTEtMTMuMTUgMTMuMTY2IDEzLjE2NiAwIDAgMC0xMy4xNTEtMTMuMTUyeiIvPgogICAgICA8cGF0aCBkPSJNMTY3My40NzIgNDUyLjYyN2ExLjAyNiAxLjAyNiAwIDAgMS0uNTA5LS4xMzUgMS4wMiAxLjAyIDAgMCAxLS41MDktLjg4MnYtMTUuNDg1YTEuMDIyIDEuMDIyIDAgMCAxIC41MDktLjg4MiAxLjAyNCAxLjAyNCAwIDAgMSAxLjAxOSAwbDEzLjQxMSA3Ljc0M2ExLjAyMSAxLjAyMSAwIDAgMSAuNTA5Ljg4MiAxLjAyMyAxLjAyMyAwIDAgMS0uNTA5Ljg4MWwtMTMuNDExIDcuNzQzYTEuMDIzIDEuMDIzIDAgMCAxLS41MS4xMzV6bTEuMDE5LTE0LjczOXYxMS45NThsMTAuMzU2LTUuOTc4ek0xNjcwLjgxNyA0ODMuMjc3aC0xMy4wMjRhNi4zNzQgNi4zNzQgMCAwIDEtNi40NDUtNi4yODZ2LTUuMjcxaDIuMDM0djUuMjcxYTQuMzM5IDQuMzM5IDAgMCAwIDQuNDExIDQuMjVoMTMuMDIzeiIvPgogICAgICA8cGF0aCBkPSJNMTY4Mi4zOCA0ODYuNTk5aC04LjI0NWE0LjM0MSA0LjM0MSAwIDAgMS00LjMzNC00LjMzNyA0LjM0MSA0LjM0MSAwIDAgMSA0LjMzNC00LjMzNmg4LjI0NWE0LjM0MSA0LjM0MSAwIDAgMSA0LjMzNiA0LjMzNiA0LjM0MSA0LjM0MSAwIDAgMS00LjMzNiA0LjMzN3ptLTguMjQ1LTYuNjM3YTIuMyAyLjMgMCAwIDAtMi4zIDIuMyAyLjMgMi4zIDAgMCAwIDIuMyAyLjNoOC4yNDVhMi4zIDIuMyAwIDAgMCAyLjMtMi4zIDIuMyAyLjMgMCAwIDAtMi4zLTIuM3oiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTQ0MS42NTIgNDc1LjczM2gtNzQuNTQzYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di05LjE1M2ExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWg3NC41NDNhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMTl2OS4xNTNhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTcgMS4wMTl6bS03My41MjgtMi4wMzZoNzIuNTA5di03LjExOWgtNzIuNTA3eiIvPgogICAgICA8cGF0aCBkPSJNMTQ0MS42NTIgNDY2LjU3OWgtNzQuNTQzYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5LTEuMDE3VjQyOC4yOWExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOGgxNy4yNjV2Mi4wMzZoLTE2LjI0OHYzNS4yMzRoNzIuNTA5di0zNS4yMzRoLTE2LjEyN3YtMi4wMzZoMTcuMTQ0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE4djM3LjI3MmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxN3pNMTQxMy4xODYgNDg2LjgxNGwtMS44MjItMTEuMDhoLTEzLjk2NmwtMS44MiAxMS4wOC0yLjAxLS4zMyAxLjk2MS0xMS45MzZhMS4wMTggMS4wMTggMCAwIDEgMS0uODUxaDE1LjY5M2ExLjAxOCAxLjAxOCAwIDAgMSAxIC44NTFsMS45NjEgMTEuOTM2eiIvPgogICAgICA8cGF0aCBkPSJNMTM4Ni42OTcgNDg1LjYzMmgzNS4zN3YyLjAzNmgtMzUuMzd6TTEzNzEuMzM4IDQyNy4yNzJoNTYuMDUydjIuMDM2aC01Ni4wNTJ6TTE0MTEuNjQxIDQ0NS44MTlsLTcuNDIyIDIuMS00LjMyMSA2LjM3Ny0zLjczNS0xNy41NTF6TTE0MDUuMjU5IDQ1MS44NjJsMi4zNzctMS43MTYgNC43NjIgNi41OTQtMi4zNzcgMS43MTd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE0ODcuMjc5IDYyMy40NDFoLTEyLjg5M2ExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxOXYtNTkuMDM5YTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE3LTEuMDE3aDEyLjg5M2ExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxN3Y1OS4wMzlhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMTl6bS0xMS44NzUtMi4wMzZoMTAuODU4di01N2gtMTAuODU5eiIvPgogICAgICA8cGF0aCBkPSJNMTQ3NC4zODYgNTY5LjMyMWgxMy4yNTV2Mi4wMzZoLTEzLjI1NXpNMTQ3NC4zODYgNjE0LjUwNWgxMy4yNTV2Mi4wMzZoLTEzLjI1NXpNMTUxNy42MzMgNjIzLjQ0MWExLjAwOSAxLjAwOSAwIDAgMS0uNTYzLS4xNzEgMS4wMjIgMS4wMjIgMCAwIDEtLjQzNi0uNjQ2bC0xMS42OTItNTcuODY5YTEuMDE3IDEuMDE3IDAgMCAxIC44LTEuMkwxNTE4LjM4IDU2MWExLjAxOCAxLjAxOCAwIDAgMSAuNzYzLjE1MSAxLjAwNiAxLjAwNiAwIDAgMSAuNDM2LjY0NmwxMS42OTIgNTcuODcxYTEuMDE1IDEuMDE1IDAgMCAxLS43OTUgMS4ybC0xMi42MzggMi41NTNhMS4wMjggMS4wMjggMCAwIDEtLjIwNS4wMnptLTEwLjQ5My01OC4wOTRsMTEuMjkgNTUuODc2IDEwLjY0My0yLjE1MS0xMS4yOS01NS44NzV6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNTA2LjkzOSA1NzAuNDA0bDEyLjk5NS0yLjYxNy40MDIgMS45OTUtMTIuOTk1IDIuNjE3ek0xNTE1Ljg4NyA2MTQuNjk2bDEyLjk5NC0yLjYyMi40MDMgMS45OTYtMTIuOTk0IDIuNjIyeiIvPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTUwNS41OTYgNjE2LjUzOWgtMTIuODlhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTktMS4wMTZ2LTYuMzM1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE3aDEyLjg5YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE3djYuMzM1YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE2em0tMTEuODc1LTIuMDMzaDEwLjg1NnYtNC4zaC0xMC44NTZ6TTE1MDUuNTk2IDU3MS4zNTdoLTEyLjg5YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di02Ljk1NmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxN2gxMi44OWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxN3Y2Ljk1NmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxNyAxLjAxOXptLTExLjg3NS0yLjAzN2gxMC44NTZ2LTQuOTE5aC0xMC44NTZ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE1MDUuNTk2IDYyMy40NDFoLTEyLjg5YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDJ2LTYuOWExLjAxNiAxLjAxNiAwIDAgMSAxLjAxOS0xLjAxNmgxMi44OWExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNyAxLjAxNnY2LjlhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTcgMS4wMnptLTExLjg3NS0yLjAzN2gxMC44NTZ2LTQuODY1aC0xMC44NTZ6TTE1MDUuNTk2IDYxMC4yMDRoLTEyLjg5YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di0zMi45MTJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTktMS4wMTdoMTIuODlhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMS4wMTd2MzIuOTEyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE5em0tMTEuODc1LTIuMDM2aDEwLjg1NlY1NzcuMjloLTEwLjg1NnoiLz4KICAgICAgICA8cGF0aCBkPSJNMTUwNS41OTYgNTc3LjI5M2gtMTIuODlhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTktMS4wMTd2LTUuOTM4YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE3aDEyLjg5YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE3IDEuMDE3djUuOTM4YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3em0tMTEuODc1LTIuMDM0aDEwLjg1NnYtMy45aC0xMC44NTZ6Ii8+CiAgICAgIDwvZz4KICAgICAgPHBhdGggZD0iTTE0NTkuNDQ2IDYyMS40MDRoNzkuNDA4djIuMDM2aC03OS40MDh6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE0MDQuNjM3IDYyMC4zNDVoLTc0LjU0NWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxN3YtOS4xNTVhMS4wMTggMS4wMTggMCAwIDEgMS4wMTctMS4wMTdoNzQuNTQ1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5IDEuMDE3djkuMTU1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5IDEuMDE3em0tNzMuNTI2LTIuMDM0aDcyLjUwOXYtNy4xMTloLTcyLjUwOXoiLz4KICAgICAgPHBhdGggZD0iTTE0MDQuNjM3IDYxMS4xOTNoLTc0LjU0NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtMzcuMjdhMS4wMTggMS4wMTggMCAwIDEgMS4wMTctMS4wMTdoMTcuMjY1djIuMDM3aC0xNi4yNDZ2MzUuMjM1aDcyLjUwOXYtMzUuMjM1aC0xNi4xMjd2LTIuMDM3aDE3LjE0NGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxN3YzNy4yN2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAxOXpNMTM3Ni4xNjkgNjMxLjQyN2wtMS44Mi0xMS4wODNoLTEzLjk2NmwtMS44MjIgMTEuMDgzLTIuMDEtLjMyOCAxLjk2My0xMS45MzdhMS4wMTcgMS4wMTcgMCAwIDEgMS0uODUxaDE1LjY5M2ExLjAxNyAxLjAxNyAwIDAgMSAxIC44NTFsMS45NjEgMTEuOTM3eiIvPgogICAgICA8cGF0aCBkPSJNMTM0OS42ODEgNjMwLjI0NWgzNS4zN3YyLjAzNmgtMzUuMzd6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMzg3LjQ4OSA2MTEuMTkzaC00MC4xM2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtNTIuOTIzYTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE4aDMxLjkxOWExLjAxOSAxLjAxOSAwIDAgMSAuNzE4LjNsOC4yMTUgOC4yMTVhMS4wMTQgMS4wMTQgMCAwIDEgLjMuNzE5djQ0LjcxYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDIyIDEuMDE2em0tMzkuMTE3LTIuMDM2aDM4LjF2LTQzLjI3MmwtNy42MTgtNy42MTVoLTMwLjQ4eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMzg3LjQ5MSA1NjYuNDgxaC04LjIxNWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxOXYtOC4yMTNhMS4wMTUgMS4wMTUgMCAwIDEgLjYyOC0uOTQgMS4wMTUgMS4wMTUgMCAwIDEgMS4xMDguMjJsOC4yMTUgOC4yMTVhMS4wMTQgMS4wMTQgMCAwIDEgLjIyMiAxLjEwOCAxLjAxNyAxLjAxNyAwIDAgMS0uOTQxLjYyOXptLTcuMi0yLjAzNmg0Ljc0bC00Ljc0LTQuNzM4ek0xMzUzLjE2NyA1NzAuMTQ4aDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xMzUzLjE2NyA1NzUuNjY0aDI4LjUxNnYyLjAzNWgtMjguNTE2ek0xMzUzLjE2NyA1ODEuMThoMjguNTE2djIuMDM2aC0yOC41MTZ6TTEzNTMuMTY3IDU4Ni42OTVoMjguNTE2djIuMDM2aC0yOC41MTZ6TTEzNTMuMTY3IDU5Mi4yMWgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNMTM1My4xNjcgNTk3LjcyNmgxNy44NTN2Mi4wMzZoLTE3Ljg1M3oiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xMTA0LjAwNiA2MjkuNTY0YTEuMDA2IDEuMDA2IDAgMCAxLS4zODktLjA3NyAxLjAxOCAxLjAxOCAwIDAgMS0uNjI4LS45NHYtMTAuNDg1YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE5aDEwLjQ4NWExLjAxNyAxLjAxNyAwIDAgMSAuOTQuNjMgMS4wMjEgMS4wMjEgMCAwIDEtLjIyMiAxLjEwOWwtMTAuNDg1IDEwLjQ4NmExLjAyIDEuMDIgMCAwIDEtLjcyLjI5NnptMS4wMTktMTAuNDg1djcuMDFsNy4wMS03LjAxek0xMDk5LjYwNCA1OTkuMzEyYTEuMDI5IDEuMDI5IDAgMCAxLS4yLS4wMmwtOS4xNjUtMS44NTdhMS4wMDggMS4wMDggMCAwIDEtLjc3MS0uNyAxLjAyMSAxLjAyMSAwIDAgMSAuMjU0LTEuMDE1bDI5LjI0MS0yOS4yMzlhMS4wMTMgMS4wMTMgMCAwIDEgMS40MzkgMGw1LjUxMSA1LjUxYTEuMDE0IDEuMDE0IDAgMCAxIC4zLjcyIDEuMDEgMS4wMSAwIDAgMS0uMy43MThsLTI1LjU4NyAyNS41ODVhMS4wMDkgMS4wMDkgMCAwIDEtLjcyMi4yOTh6bS03LjEwNS0zLjVsNi43NzIgMS4zNzMgMjQuNDc5LTI0LjQ4LTQuMDcyLTQuMDczeiIvPgogICAgICA8cGF0aCBkPSJNMTEwMS40NjIgNjA4LjQ3OWEuOTkzLjk5MyAwIDAgMS0uMjk1LS4wNDUgMS4wMTYgMS4wMTYgMCAwIDEtLjctLjc3MWwtMS44NTgtOS4xNjdhMS4wMTkgMS4wMTkgMCAwIDEgLjI3OC0uOTIybDI1LjU4Ny0yNS41ODRhMS4wMTQgMS4wMTQgMCAwIDEgLjcyLS4zIDEuMDA2IDEuMDA2IDAgMCAxIC43MTguM2w1LjUxMyA1LjUxYTEuMDIgMS4wMiAwIDAgMSAwIDEuNDQxbC0yOS4yNDEgMjkuMjRhMS4wMiAxLjAyIDAgMCAxLS43MjIuMjk4em0tLjc1My05Ljg1MmwxLjM3MiA2Ljc3MSAyNy4xODEtMjcuMTc4LTQuMDcyLTQuMDcyeiIvPgogICAgICA8cGF0aCBkPSJNMTA4OC42NjcgNjEwLjMwM2ExLjAxOCAxLjAxOCAwIDAgMS0uNzE4LS4zIDEuMDE5IDEuMDE5IDAgMCAxLS4yODktLjg2NGwxLjgzLTEyLjc5M2ExIDEgMCAwIDEgLjQxOC0uNjg2IDEuMDIyIDEuMDIyIDAgMCAxIC43ODctLjE3bDkuMSAxLjhhMS4wMTUgMS4wMTUgMCAwIDEgLjguOGwxLjg1OCA5LjE2OWExLjAwOCAxLjAwOCAwIDAgMS0uMTY1Ljc4NyAxLjAxNyAxLjAxNyAwIDAgMS0uNjg4LjQyMmwtMTIuNzk0IDEuODI4YS44MjkuODI5IDAgMCAxLS4xMzkuMDA3em0yLjY4Ni0xMi42bC0xLjQ4NSAxMC4zODYgMTAuMzgyLTEuNDgzLTEuNTA5LTcuNDQ2ek0xMTMwLjY0NSA1NzkuMTc4YTEuMDIzIDEuMDIzIDAgMCAxLS43Mi0uM2wtMTAuOTY1LTEwLjk2MmExLjAxNiAxLjAxNiAwIDAgMS0uMy0uNzIgMS4wMDkgMS4wMDkgMCAwIDEgLjMtLjcxOWwyLjc4OS0yLjc5MWExLjAxNiAxLjAxNiAwIDAgMSAuNzItLjMgMS4wMDggMS4wMDggMCAwIDEgLjcxOC4zbDEwLjk2NSAxMC45NjVhMS4wMiAxLjAyIDAgMCAxIDAgMS40NDFsLTIuNzg5IDIuNzg5YTEuMDE1IDEuMDE1IDAgMCAxLS43MTguMjk3em0tOS41MjYtMTEuOTgybDkuNTI2IDkuNTI2IDEuMzQ4LTEuMzUtOS41MjUtOS41MjZ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xMTMzLjQzNCA1NzYuMzkzYTEuMDIzIDEuMDIzIDAgMCAxLS43Mi0uM2wtMTAuOTY3LTEwLjk2NmExLjAxNyAxLjAxNyAwIDAgMSAwLTEuNDM4bDIuNS0yLjVhNC4xNTQgNC4xNTQgMCAwIDEgMi45Ni0xLjIxOCA0LjI4NiA0LjI4NiAwIDAgMSAzLjA0OSAxLjI2Nmw2LjM0OCA2LjM0OGE0LjI1NSA0LjI1NSAwIDAgMSAuMDQ4IDYuMDA4bC0yLjUgMi41YTEuMDE1IDEuMDE1IDAgMCAxLS43MTguM3ptLTkuNTI3LTExLjk4Nmw5LjUyNyA5LjUyNyAxLjc4LTEuNzhhMi4yMTkgMi4yMTkgMCAwIDAtLjA0Ni0zLjEzbC02LjM1LTYuMzQ4YTIuMjc2IDIuMjc2IDAgMCAwLTMuMTMtLjA0NnpNMTA4OC43MzUgNjA0LjUwOWwxLjQ0LTEuNDQgNC44NDQgNC44NDQtMS40NCAxLjQ0eiIvPgogICAgICA8cGF0aCBkPSJNMTEwNC4wMDggNjI5LjU2NWgtNDAuNzQ1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5LTEuMDE3di02Ny41NTVhMS4wMiAxLjAyIDAgMCAxIDEuMDE5LTEuMDJoNTEuMjNhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMnYxMS4zOTNhMS4wMTUgMS4wMTUgMCAwIDEtLjMuNzE2bC0yMy43NTcgMjMuODc2LTEuNTkgMTEuMTE1IDExLjExNS0xLjU4OCAxMi43OTItMTIuNzkyYTEuMDE1IDEuMDE1IDAgMCAxIDEuMTEtLjIyMiAxLjAxOSAxLjAxOSAwIDAgMSAuNjI4Ljk0djIzLjYzNGExLjAxNyAxLjAxNyAwIDAgMS0uMy43MjFsLTEwLjQ4NSAxMC40ODVhMS4wMjIgMS4wMjIgMCAwIDEtLjcxNS4yOTR6bS0zOS43MjgtMi4wMzRoMzkuM2w5Ljg5LTkuODl2LTIwLjc1NGwtMTEuMjg5IDExLjI5M2ExLjAyNiAxLjAyNiAwIDAgMS0uNTc1LjI4OWwtMTIuNzkzIDEuODI4YTEuMDE0IDEuMDE0IDAgMCAxLS44NjMtLjI4NiAxLjAxOSAxLjAxOSAwIDAgMS0uMjg5LS44NjRsMS44My0xMi43OTRhMS4wMiAxLjAyIDAgMCAxIC4yODQtLjU3NWwyMy43LTIzLjgxN3YtOS45NTRoLTQ5LjE5NHoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTYzNi4zODkgNjE5LjM1NGgtMzcuNjkyYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3LTEuMDE2di0zNy42OTVhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTloMzcuNjkzYTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE5djM3LjY5NWExLjAxNiAxLjAxNiAwIDAgMS0xLjAxOCAxLjAxNnptLTM2LjY3My0yLjAzNmgzNS42NTh2LTM1LjY1OWgtMzUuNjU4eiIvPgogICAgICA8cGF0aCBkPSJNMTY0Mi43NiA2MjUuMDU3aC01MC40MzRhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTl2LTY1LjkyMmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxN2g1MC40MzRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTd2NjUuOTIyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE5em0tNDkuNDE0LTIuMDM2aDQ4LjR2LTYzLjg4N2gtNDguNHoiLz4KICAgICAgPHBhdGggZD0iTTE2MzUuNjczIDU3Ni40MzhoLTM2LjI1OGExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOHYtMTAuNDM0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE3aDM2LjI1OGExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxN3YxMC40MzRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTcgMS4wMTh6bS0zNS4yNDEtMi4wMzZoMzQuMjIydi04LjRoLTM0LjIxOXpNMTYwNi4zNTcgNTgwLjY0MmgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTE2MDYuMzU3IDU5MS4xNDhoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNTk4LjY5NiA1ODguMzA0aDYuODUzdjIuMDM2aC02Ljg1M3pNMTYwOS4yMDEgNTg4LjMwNGg2LjUxOXYyLjAzNmgtNi41MTl6TTE2MTkuMzI2IDU4OC4zMDRoNi41NTl2Mi4wMzZoLTYuNTU5ek0xNjI5LjUzNiA1ODguMzA0aDYuODUzdjIuMDM2aC02Ljg1M3pNMTU5OC42OTYgNTk4LjQ3M2g2Ljg1M3YyLjAzNWgtNi44NTN6TTE2MDkuMjAxIDU5OC40NzNoNi41MTl2Mi4wMzVoLTYuNTE5ek0xNjE5LjMyNiA1OTguNDczaDYuNTU5djIuMDM1aC02LjU1OXpNMTYyOS41MzYgNTk4LjQ3M2g2Ljg1M3YyLjAzNWgtNi44NTN6TTE1OTguNjk2IDYwOC42MzloNi44NTN2Mi4wMzZoLTYuODUzek0xNjA5LjIwMSA2MDguNjM5aDYuNTE5djIuMDM2aC02LjUxOXpNMTYwNi4zNTcgNjAwLjk3OWgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTE2MDYuMzU3IDYxMS40ODRoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjE5LjMyNiA2MDguNjM5aDYuNTU5djIuMDM2aC02LjU1OXoiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTE2MjYuNjkzIDU4MC42NDJoMi4wMzZ2Ni44NTRoLTIuMDM2ek0xNjI2LjY5MyA1OTEuMTQ3aDIuMDM2VjU5OGgtMi4wMzZ6TTE2MjYuNjkzIDYwMC45NzloMi4wMzZ2Ni44NTNoLTIuMDM2ek0xNjI2LjY5MyA2MTEuNDg0aDIuMDM2djYuODUzaC0yLjAzNnoiLz4KICAgICAgPC9nPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTYxNi41MjUgNTgwLjY0MmgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTE2MTYuNTI1IDU5MS4xNDdoMi4wMzZWNTk4aC0yLjAzNnpNMTYxNi41MjYgNjAwLjk3OWgyLjAzNXY2Ljg1M2gtMi4wMzV6TTE2MTYuNTI2IDYxMS40ODRoMi4wMzV2Ni44NTNoLTIuMDM1eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTgyNi44NzQgNjIzLjIzOUg4MDUuMjZhMy44NjQgMy44NjQgMCAwIDEtMy44Ni0zLjg2di01LjM2OGExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxNmgxOS41NnYyLjAzNWgtMTguNTQxdjQuMzQ5YTEuODI1IDEuODI1IDAgMCAwIDEuODI0IDEuODI0aDIxLjYxNHpNODQ4LjI4IDU2OC41NTdoLTQ1Ljg2M2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtNC40MjFhMy44NjQgMy44NjQgMCAwIDEgMy44Ni0zLjg1OWg0MC4xNzhhMy44NjMgMy44NjMgMCAwIDEgMy44NTggMy44NTl2NC40MjFhMS4wMTggMS4wMTggMCAwIDEtMS4wMTYgMS4wMTl6bS00NC44NDQtMi4wMzZoNDMuODI1di0zLjRhMS44MjQgMS44MjQgMCAwIDAtMS44MjItMS44MjJIODA1LjI2YTEuODI0IDEuODI0IDAgMCAwLTEuODI0IDEuODIyeiIvPgogICAgICA8cGF0aCBkPSJNODIxLjk3NyA2MTUuMDMyaC0xOS41NmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxNy0xLjAydi00Ni40NzRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTctMS4wMTdoNDUuODYzYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE3djI2LjUxM2gtMi4wMzZ2LTI1LjQ5NGgtNDMuODI1djQ0LjQzOGgxOC41NDF6Ii8+CiAgICAgIDxwYXRoIGQ9Ik04NTQuNDgzIDYzMy4yMDloLTIyLjIwOWExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNy0xLjAxNWwtLjAxLTMuNC05LTExLjE4N2E0LjA3OSA0LjA3OSAwIDAgMS0xLjI1OS0yLjkzNHYtMTIuMDcxYTQuMDkyIDQuMDkyIDAgMCAxIDQuMDg2LTQuMDg2IDQuMDkxIDQuMDkxIDAgMCAxIDQuMDg2IDQuMDg2djcuOWwxLjEwNiAxLjU4OHYtMjMuOTc3YTQuMDg5IDQuMDg5IDAgMCAxIDQuMDg2LTQuMDg2IDQuMDg5IDQuMDg5IDAgMCAxIDQuMDg0IDQuMDg2djVhNC4wNTMgNC4wNTMgMCAwIDEgMi4wNTgtLjU1NyA0LjA3NiA0LjA3NiAwIDAgMSAzLjA3MSAxLjM5NSA0LjA3NiA0LjA3NiAwIDAgMSAzLjA3MS0xLjM5NSA0LjA5MiA0LjA5MiAwIDAgMSAzLjkzMSAyLjk3MSA0LjA2NCA0LjA2NCAwIDAgMSAyLjIxMi0uNjUyIDQuMDg5IDQuMDg5IDAgMCAxIDQuMDg0IDQuMDg2djIzLjM0M2E0LjA4NCA0LjA4NCAwIDAgMS0xLjM2IDMuMDQ0djYuODQzYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDIgMS4wMTh6bS0yMS4yLTIuMDM1aDIwLjE3OXYtNi4zMjNhMS4wMTUgMS4wMTUgMCAwIDEgLjQ1Mi0uODQ1IDIuMDQ4IDIuMDQ4IDAgMCAwIC45MDgtMS43di0yMy4zNDNhMi4wNTIgMi4wNTIgMCAwIDAtMi4wNDgtMi4wNTEgMi4wNTQgMi4wNTQgMCAwIDAtMi4wNSAyLjA1MXY2LjhhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTYgMS4wMjMgMS4wMjMgMCAwIDEtMS4wMjUtMS4wMTZ2LTkuMTI1YTIuMDUzIDIuMDUzIDAgMCAwLTIuMDUtMi4wNDggMi4wNTMgMi4wNTMgMCAwIDAtMi4wNSAyLjA0OHY5LjEyNWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxNiAxLjAyMyAxLjAyMyAwIDAgMS0xLjAyMy0xLjAxNnYtOS4xMjVhMi4wNTMgMi4wNTMgMCAwIDAtMi4wNS0yLjA0OCAyLjA1MyAyLjA1MyAwIDAgMC0yLjA1IDIuMDQ4djkuMTI1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5IDEuMDE2IDEuMDIzIDEuMDIzIDAgMCAxLTEuMDI1LTEuMDE2VjU4OC4xMWEyLjA1MyAyLjA1MyAwIDAgMC0yLjA0OC0yLjA1MSAyLjA1MyAyLjA1MyAwIDAgMC0yLjA1IDIuMDUxdjI3LjIxOWExLjAxOCAxLjAxOCAwIDAgMS0uNzEyLjk3IDEuMDIgMS4wMiAwIDAgMS0xLjE0LS4zOWwtMy4xNDQtNC41MTFhMS4wMTMgMS4wMTMgMCAwIDEtLjE4Mi0uNTgydi04LjIxOWEyLjA1MyAyLjA1MyAwIDAgMC0yLjA1LTIuMDUgMi4wNTMgMi4wNTMgMCAwIDAtMi4wNSAyLjA1djEyLjA3MWEyLjAyNCAyLjAyNCAwIDAgMCAuNjg4IDEuNTE4Ljk4NC45ODQgMCAwIDEgLjE4Mi4yMTZsOS4xNjMgMTEuMzlhMS4wMDYgMS4wMDYgMCAwIDEgLjIyNC42MzV6Ii8+CiAgICAgIDxwYXRoIGQ9Ik04NTUuODQ4IDY0NC4wMDJoLTI0Ljc1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3LTEuMDE3di0xMC44YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3LTEuMDE3aDI0Ljc1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE3djEwLjhhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTd6bS0yMy43MzMtMi4wMzZoMjIuNzE0di04Ljc1OGgtMjIuNzE0eiIvPgogICAgICA8cGF0aCBkPSJNODMzLjgzNSA2MzIuMTkxaDIuMDM2djEwLjc5NGgtMi4wMzZ6TTgzNy4xNTggNjM1LjUyM2gzLjEyNXYyLjAzNmgtMy4xMjV6TTgwOC42NjkgNTc1LjgxaDMzLjM2djIuMDM2aC0zMy4zNnpNODA4LjY2OSA1ODAuODk5aDMzLjM2djIuMDM2aC0zMy4zNnpNODA4LjY2OSA1ODUuOTloMjIuNjE2djIuMDM1aC0yMi42MTZ6TTgwOC42NjkgNTkxLjA3OGgyMi43ODl2Mi4wMzZoLTIyLjc4OXpNODA4LjY2OSA1OTYuMTY4aDIyLjYxNnYyLjAzNmgtMjIuNjE2ek04MDguNjY5IDYwMS4yNThoMTMuMzM4djIuMDM2aC0xMy4zMzh6TTgzNy4yMTIgNTg1Ljk5aDQuODE2djIuMDM1aC00LjgxNnpNODIyLjI3MyA1NjIuODloNi4xNTF2Mi4wMzZoLTYuMTUxeiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xMjA0LjQxOSA2MTcuMzUzYTcuNDM0IDcuNDM0IDAgMCAxLTcuNDI4LTcuNDI2di0xOC4zOTNhNy40MzUgNy40MzUgMCAwIDEgNy40MjgtNy40MjYgNy40MzUgNy40MzUgMCAwIDEgNy40MjYgNy40MjZ2MTguMzkzYTcuNDMzIDcuNDMzIDAgMCAxLTcuNDI2IDcuNDI2em0wLTMxLjIxMWE1LjQgNS40IDAgMCAwLTUuMzkyIDUuMzkydjE4LjM5M2E1LjQgNS40IDAgMCAwIDUuMzkyIDUuMzkyIDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5MnYtMTguMzkzYTUuNCA1LjQgMCAwIDAtNS4zOS01LjM5MnoiLz4KICAgICAgPHBhdGggZD0iTTExOTguMDA2IDYxMS40ODNhNy4yNjMgNy4yNjMgMCAwIDEtNy4yNTYtNy4yNTV2LTdhNy4yNjQgNy4yNjQgMCAwIDEgNy4yNTYtNy4yNTVoLjA4N2EuOTUxLjk1MSAwIDAgMSAuNzE5LjMyOS45OTMuOTkzIDAgMCAxIC4yMzYuNzc1Yy0uMDEyLjE0OS0uMDI0LjMtLjAyNC40NDl2MTguNDAzYzAgLjE1My4wMTIuMy4wMjQuNDVhMS4wMTkgMS4wMTkgMCAwIDEtLjI2NC43NzYgMS4wMjMgMS4wMjMgMCAwIDEtLjc1MS4zM3ptLTEuMDE5LTE5LjM4YTUuMjM3IDUuMjM3IDAgMCAwLTQuMiA1LjEzdjdhNS4yMjggNS4yMjggMCAwIDAgNC4yIDUuMTE5ek0xMjAzLjQgNTg1LjEyNWgyLjAzNXYxNS42MDVoLTIuMDM1ek0xMjAzLjQgNjA2LjQ1NWgyLjAzNXY5Ljg4MWgtMi4wMzV6TTEyNTYuMjAzIDYxNy4zNTNhNy40MzMgNy40MzMgMCAwIDEtNy40MjYtNy40MjZ2LTE4LjM5M2E3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNi03LjQyNiA3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNiA3LjQyNnYxOC4zOTNhNy40MzMgNy40MzMgMCAwIDEtNy40MjYgNy40MjZ6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOSA1LjM5MnYxOC4zOTNhNS40IDUuNCAwIDAgMCA1LjM5IDUuMzkyIDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5MnYtMTguMzkzYTUuNCA1LjQgMCAwIDAtNS4zOS01LjM5MnoiLz4KICAgICAgPHBhdGggZD0iTTEyNjIuNjExIDYxMS40ODNoLS4wODdhLjk2My45NjMgMCAwIDEtLjcyLS4zMjcgMS4wMDYgMS4wMDYgMCAwIDEtLjIzNi0uNzczYy4wMTQtLjE1LjAyNC0uMy4wMjQtLjQ1NHYtMTguNGMwLS4xNTMtLjAxMi0uMy0uMDI0LS40NTNhMS4wMjMgMS4wMjMgMCAwIDEgLjI2OC0uNzczLjk4OC45ODggMCAwIDEgLjc0OS0uMzI5IDcuMjY4IDcuMjY4IDAgMCAxIDcuMjgxIDcuMjU1djdhNy4yNjIgNy4yNjIgMCAwIDEtNy4yNTUgNy4yNTR6bTEuMDE3LTE5LjM3djE3LjIzNWE1LjIyNiA1LjIyNiAwIDAgMCA0LjItNS4xMTl2LTdhNS4yMjYgNS4yMjYgMCAwIDAtNC4yMDMtNS4xMTZ6TTEyNTUuMTg1IDU4NS4xMjVoMi4wMzZ2MTUuNjA1aC0yLjAzNnpNMTI1NS4xODUgNjA2LjQ1NWgyLjAzNnY5Ljg4MWgtMi4wMzZ6TTEyNTcuMjYgNTg1LjEyNGgtMi4wMzZ2LTEuNzE3YTI0LjgyIDI0LjgyIDAgMCAwLTIuODczLTExLjU5M2wxLjgtLjk1NGEyNi44NjQgMjYuODY0IDAgMCAxIDMuMTEyIDEyLjU0N3pNMTIwNS42ODQgNTg1LjEyNWgtMi4wMzZ2LTEuNzE4YTI2Ljg2NSAyNi44NjUgMCAwIDEgMy4xMTItMTIuNTQ1bDEuOC45NTVhMjQuODI1IDI0LjgyNSAwIDAgMC0yLjg3NCAxMS41OXoiLz4KICAgICAgPHBhdGggZD0iTTEyMTAuOTk5IDU3My4zNTdhLjk3OS45NzkgMCAwIDEtLjI5My0uMDQ0bC02LjYzMS0xLjk4MWExLjAyNCAxLjAyNCAwIDAgMS0uNjQ0LS41NzQgMS4wMDggMS4wMDggMCAwIDEgLjAyNi0uODU5IDMwLjA2OSAzMC4wNjkgMCAwIDEgMjctMTYuNjkxIDMwLjA3NiAzMC4wNzYgMCAwIDEgMjcgMTYuNjkxIDEuMDE1IDEuMDE1IDAgMCAxIC4wMjQuODU5IDEuMDI1IDEuMDI1IDAgMCAxLS42NDQuNTc0bC02LjYzMyAxLjk4MWExLjAxNiAxLjAxNiAwIDAgMS0xLjE3NC0uNDcxIDIxLjQ0OSAyMS40NDkgMCAwIDAtMTguNTcxLTEwLjgxMiAyMS40NTUgMjEuNDU1IDAgMCAwLTE4LjU3MyAxMC44MTIgMS4wMTIgMS4wMTIgMCAwIDEtLjg4Ny41MTV6bTE5LjQ1NS0xMy4zNjNhMjMuNDg4IDIzLjQ4OCAwIDAgMSAxOS45MjUgMTEuMTQxbDQuNjg0LTEuNGEyOC4wMzcgMjguMDM3IDAgMCAwLTI0LjYwOC0xNC40OTEgMjguMDM2IDI4LjAzNiAwIDAgMC0yNC42MDggMTQuNDkxbDQuNjgzIDEuNGEyMy40ODkgMjMuNDg5IDAgMCAxIDE5LjkyNC0xMS4xNDF6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xMjMwLjMxMSA2MDMuNjY4YTE1LjIgMTUuMiAwIDAgMS0xNS4xODctMTUuMTg3IDE1LjIgMTUuMiAwIDAgMSAxNS4xODctMTUuMTg2IDE1LjIgMTUuMiAwIDAgMSAxNS4xODcgMTUuMTg2IDE1LjIgMTUuMiAwIDAgMS0xNS4xODcgMTUuMTg3em0wLTI4LjMzN2ExMy4xNjUgMTMuMTY1IDAgMCAwLTEzLjE1MyAxMy4xNSAxMy4xNjYgMTMuMTY2IDAgMCAwIDEzLjE1MyAxMy4xNTEgMTMuMTY2IDEzLjE2NiAwIDAgMCAxMy4xNTEtMTMuMTUxIDEzLjE2NSAxMy4xNjUgMCAwIDAtMTMuMTUxLTEzLjE1MXoiLz4KICAgICAgPHBhdGggZD0iTTEyMjUuNTI2IDU5Ny4yNDFhMSAxIDAgMCAxLS41MDgtLjEzNyAxLjAxNyAxLjAxNyAwIDAgMS0uNTExLS44OHYtMTUuNDg1YTEuMDI0IDEuMDI0IDAgMCAxIC41MTEtLjg4MyAxLjAyMiAxLjAyMiAwIDAgMSAxLjAxNyAwbDEzLjQxMSA3Ljc0NGExLjAxNyAxLjAxNyAwIDAgMSAuNTA4Ljg4MiAxLjAxNiAxLjAxNiAwIDAgMS0uNTA4Ljg4MWwtMTMuNDExIDcuNzQyYTEgMSAwIDAgMS0uNTA5LjEzNnptMS4wMTktMTQuNzM5djExLjk1OGwxMC4zNTYtNS45Nzl6TTEyMjIuODcxIDYyNy44OTJoLTEzLjAyNGE2LjM3NiA2LjM3NiAwIDAgMS02LjQ0Ny02LjI4OHYtNS4yNjhoMi4wMzZ2NS4yNjhhNC4zMzcgNC4zMzcgMCAwIDAgNC40MTEgNC4yNTJoMTMuMDI0eiIvPgogICAgICA8cGF0aCBkPSJNMTIzNC40MzIgNjMxLjIxM2gtOC4yMzlhNC4zNDIgNC4zNDIgMCAwIDEtNC4zMzYtNC4zMzkgNC4zNDEgNC4zNDEgMCAwIDEgNC4zMzYtNC4zMzRoOC4yNDNhNC4zNCA0LjM0IDAgMCAxIDQuMzM2IDQuMzM0IDQuMzQxIDQuMzQxIDAgMCAxLTQuMzQgNC4zMzl6bS04LjI0My02LjYzN2EyLjMgMi4zIDAgMCAwLTIuMyAyLjMgMi4zMDYgMi4zMDYgMCAwIDAgMi4zIDIuM2g4LjI0M2EyLjMwNiAyLjMwNiAwIDAgMCAyLjMtMi4zIDIuMyAyLjMgMCAwIDAtMi4zLTIuM3oiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNOTkzLjcwNSA2MjAuMzQ0SDkxOS4xNmExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxN3YtOS4xNTVhMS4wMTggMS4wMTggMCAwIDEgMS4wMTctMS4wMTdoNzQuNTQ1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5IDEuMDE3djkuMTU1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5IDEuMDE3em0tNzMuNTI2LTIuMDM0aDcyLjUxMnYtNy4xMTloLTcyLjUxMnoiLz4KICAgICAgPHBhdGggZD0iTTk5My43MDUgNjExLjE5Mkg5MTkuMTZhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTl2LTM3LjI3YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDE3aDE3LjI2NXYyLjAzN2gtMTYuMjQ2djM1LjIzNWg3Mi41MTJ2LTM1LjIzNWgtMTYuMTN2LTIuMDM3aDE3LjE0NGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxN3YzNy4yN2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAxOXpNOTY1LjIzNyA2MzEuNDI3bC0xLjgyLTExLjA4M2gtMTMuOTY2bC0xLjgyMiAxMS4wODMtMi4wMS0uMzI4IDEuOTY0LTExLjkzN2ExLjAxNSAxLjAxNSAwIDAgMSAxLS44NTFoMTUuN2ExLjAxNyAxLjAxNyAwIDAgMSAxIC44NTFsMS45NjEgMTEuOTM3eiIvPgogICAgICA8cGF0aCBkPSJNOTM4Ljc0OSA2MzAuMjQ0aDM1LjM3djIuMDM2aC0zNS4zN3pNOTIzLjM5IDU3MS44ODVoNTYuMDUydjIuMDM2SDkyMy4zOXpNOTYzLjY5MiA1OTAuNDMzbC03LjQyMiAyLjEtNC4zMiA2LjM3Ny0zLjczNS0xNy41NTF6TTk1Ny4zMTEgNTk2LjQ3NWwyLjM3Ny0xLjcxNiA0Ljc2MiA2LjU5NC0yLjM3NyAxLjcxN3oiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTc0My4yODYgNjIzLjIzOWgtMjEuNjEyYTMuODYzIDMuODYzIDAgMCAxLTMuODU4LTMuODZ2LTUuMzY4YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3LTEuMDE2aDE5LjU2djIuMDM1aC0xOC41NHY0LjM0OWExLjgyNSAxLjgyNSAwIDAgMCAxLjgyMiAxLjgyNGgyMS42MTR6TTE3NjQuNjkyIDU2OC41NTdoLTQ1Ljg2MWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtNC40MjFhMy44NjQgMy44NjQgMCAwIDEgMy44NTgtMy44NTloNDAuMThhMy44NjQgMy44NjQgMCAwIDEgMy44NTggMy44NTl2NC40MjFhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTggMS4wMTl6bS00NC44NDItMi4wMzZoNDMuODI0di0zLjRhMS44MjQgMS44MjQgMCAwIDAtMS44MjItMS44MjJoLTQwLjE3OGExLjgyNCAxLjgyNCAwIDAgMC0xLjgyMiAxLjgyMnoiLz4KICAgICAgPHBhdGggZD0iTTE3MzguMzkgNjE1LjAzMmgtMTkuNTZhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTctMS4wMnYtNDYuNDc0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDE3aDQ1Ljg2MWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxN3YyNi41MTNoLTIuMDM2di0yNS40OTRoLTQzLjgyNHY0NC40MzhoMTguNTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNzcwLjg5OSA2MzMuMjA5aC0yMi4yMTFhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTVsLS4wMDgtMy40LTktMTEuMTg3YTQuMDg1IDQuMDg1IDAgMCAxLTEuMjU3LTIuOTM0di0xMi4wNzFhNC4wOTIgNC4wOTIgMCAwIDEgNC4wODYtNC4wODYgNC4wOSA0LjA5IDAgMCAxIDQuMDg0IDQuMDg2djcuOWwxLjEwOCAxLjU4OHYtMjMuOTc3YTQuMDg5IDQuMDg5IDAgMCAxIDQuMDg0LTQuMDg2IDQuMDkgNC4wOSAwIDAgMSA0LjA4NiA0LjA4NnY1YTQuMDQ4IDQuMDQ4IDAgMCAxIDIuMDU4LS41NTcgNC4wNzYgNC4wNzYgMCAwIDEgMy4wNzEgMS4zOTUgNC4wNzUgNC4wNzUgMCAwIDEgMy4wNzEtMS4zOTUgNC4wOTIgNC4wOTIgMCAwIDEgMy45MzEgMi45NzEgNC4wNjMgNC4wNjMgMCAwIDEgMi4yMTItLjY1MiA0LjA4OSA0LjA4OSAwIDAgMSA0LjA4NCA0LjA4NnYyMy4zNDNhNC4wOCA0LjA4IDAgMCAxLTEuMzYyIDMuMDQ0djYuODQzYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE4IDEuMDE4em0tMjEuMi0yLjAzNWgyMC4xNzd2LTYuMzIzYTEuMDE0IDEuMDE0IDAgMCAxIC40NTItLjg0NSAyLjA0NSAyLjA0NSAwIDAgMCAuOTEtMS43di0yMy4zNDNhMi4wNTIgMi4wNTIgMCAwIDAtMi4wNDgtMi4wNTEgMi4wNTQgMi4wNTQgMCAwIDAtMi4wNSAyLjA1MXY2LjhhMS4wMTggMS4wMTggMCAwIDEtMS4wMTkgMS4wMTYgMS4wMjUgMS4wMjUgMCAwIDEtMS4wMjUtMS4wMTZ2LTkuMTI1YTIuMDUxIDIuMDUxIDAgMCAwLTIuMDQ4LTIuMDQ4IDIuMDUzIDIuMDUzIDAgMCAwLTIuMDUgMi4wNDh2OS4xMjVhMS4wMTggMS4wMTggMCAwIDEtMS4wMTkgMS4wMTYgMS4wMjMgMS4wMjMgMCAwIDEtMS4wMjMtMS4wMTZ2LTkuMTI1YTIuMDUzIDIuMDUzIDAgMCAwLTIuMDUtMi4wNDggMi4wNTIgMi4wNTIgMCAwIDAtMi4wNSAyLjA0OHY5LjEyNWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxNiAxLjAyNCAxLjAyNCAwIDAgMS0xLjAyNS0xLjAxNlY1ODguMTFhMi4wNTMgMi4wNTMgMCAwIDAtMi4wNS0yLjA1MSAyLjA1MyAyLjA1MyAwIDAgMC0yLjA0OCAyLjA1MXYyNy4yMTlhMS4wMTcgMS4wMTcgMCAwIDEtLjcxNC45NyAxLjAyMSAxLjAyMSAwIDAgMS0xLjE0LS4zOWwtMy4xNDItNC41MTFhMS4wMTIgMS4wMTIgMCAwIDEtLjE4Mi0uNTgydi04LjIxOWEyLjA1MyAyLjA1MyAwIDAgMC0yLjA1LTIuMDUgMi4wNTMgMi4wNTMgMCAwIDAtMi4wNSAyLjA1djEyLjA3MWEyLjAyOSAyLjAyOSAwIDAgMCAuNjg2IDEuNTE4LjkyOS45MjkgMCAwIDEgLjE4Mi4yMTZsOS4xNjUgMTEuMzlhMS4wMDYgMS4wMDYgMCAwIDEgLjIyNC42MzV6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNzcyLjI2MiA2NDQuMDAyaC0yNC43NWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxN3YtMTAuOGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxN2gyNC43NWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxN3YxMC44YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE3em0tMjMuNzMzLTIuMDM2aDIyLjcxMnYtOC43NThoLTIyLjcxMnoiLz4KICAgICAgPHBhdGggZD0iTTE3NTAuMjQ5IDYzMi4xOTFoMi4wMzZ2MTAuNzk0aC0yLjAzNnpNMTc1My41NzEgNjM1LjUyM2gzLjEyNXYyLjAzNmgtMy4xMjV6TTE3MjUuMDgyIDU3NS44MWgzMy4zNnYyLjAzNmgtMzMuMzZ6TTE3MjUuMDgyIDU4MC44OTloMzMuMzZ2Mi4wMzZoLTMzLjM2ek0xNzI1LjA4MiA1ODUuOTloMjIuNjE2djIuMDM1aC0yMi42MTZ6TTE3MjUuMDgyIDU5MS4wNzhoMjIuNzg5djIuMDM2aC0yMi43ODl6TTE3MjUuMDgyIDU5Ni4xNjhoMjIuNjE2djIuMDM2aC0yMi42MTZ6TTE3MjUuMDgyIDYwMS4yNThoMTMuMzM4djIuMDM2aC0xMy4zMzh6TTE3NTMuNjI1IDU4NS45OWg0LjgxNnYyLjAzNWgtNC44MTZ6TTE3MzguNjg2IDU2Mi44OWg2LjE1MXYyLjAzNmgtNi4xNTF6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE5MTAuMTE5IDYyMC4zNDRoLTc0LjU0NWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtOS4xNTVhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTdoNzQuNTQ1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE3djkuMTU1YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3em0tNzMuNTI4LTIuMDM0aDcyLjUwOXYtNy4xMTloLTcyLjUwOXoiLz4KICAgICAgPHBhdGggZD0iTTE5MTAuMTE5IDYxMS4xOTJoLTc0LjU0NWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtMzcuMjdhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTdoMTcuMjY1djIuMDM3aC0xNi4yNDh2MzUuMjM1aDcyLjUwOXYtMzUuMjM1aC0xNi4xMjd2LTIuMDM3aDE3LjE0NmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxN3YzNy4yN2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxOXpNMTg4MS42NTEgNjMxLjQyN2wtMS44MjItMTEuMDgzaC0xMy45NjRsLTEuODIyIDExLjA4My0yLjAxLS4zMjggMS45NjEtMTEuOTM3YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDA1LS44NTFoMTUuN2ExLjAxNyAxLjAxNyAwIDAgMSAxIC44NTFsMS45NTkgMTEuOTM3eiIvPgogICAgICA8cGF0aCBkPSJNMTg1NS4xNjIgNjMwLjI0NGgzNS4zN3YyLjAzNmgtMzUuMzd6TTE4MzkuODAzIDU3MS44ODVoNTYuMDUydjIuMDM2aC01Ni4wNTJ6TTE4ODAuMTA2IDU5MC40MzNsLTcuNDIyIDIuMS00LjMyMSA2LjM3Ny0zLjczNS0xNy41NTF6TTE4NzMuNzI1IDU5Ni40NzVsMi4zNzctMS43MTYgNC43NjIgNi41OTQtMi4zNzcgMS43MTd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTEwMTguODEyIDc1NS40MzJoLTEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtNTkuMDM4YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE3aDEyLjg5MmExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxN3Y1OS4wMzhhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTl6bS0xMS44NzUtMi4wMzZoMTAuODU4di01N2gtMTAuODU4eiIvPgogICAgICA8cGF0aCBkPSJNMTAwNS45MiA3MDEuMzEzaDEzLjI1NXYyLjAzNmgtMTMuMjU1ek0xMDA1LjkyIDc0Ni40OTdoMTMuMjU1djIuMDM2aC0xMy4yNTV6TTEwNDkuMTczIDc1NS40MzJhMS4wMjIgMS4wMjIgMCAwIDEtLjU2My0uMTY5IDEuMDE3IDEuMDE3IDAgMCAxLS40MzYtLjY0OGwtMTEuNzAxLTU3Ljg3YTEuMDE5IDEuMDE5IDAgMCAxIC44LTEuMmwxMi42NC0yLjU1NWExLjAwOCAxLjAwOCAwIDAgMSAuNzYzLjE0OSAxLjAyNSAxLjAyNSAwIDAgMSAuNDM2LjY0N2wxMS42OTIgNTcuODdhMS4wMTUgMS4wMTUgMCAwIDEtLjggMS4ybC0xMi42MzggMi41NTRhLjk0MS45NDEgMCAwIDEtLjE5My4wMjJ6bS0xMC41LTU4LjA5MWwxMS4yODggNTUuODc0IDEwLjY0Mi0yLjE1Mi0xMS4yODgtNTUuODc0eiIvPgogICAgICA8cGF0aCBkPSJNMTAzOC40NzQgNzAyLjM5NmwxMi45OTUtMi42MTcuNDAyIDEuOTk1LTEyLjk5NSAyLjYxN3pNMTA0Ny40MjIgNzQ2LjY4OGwxMi45OTQtMi42MjIuNDAzIDEuOTk2LTEyLjk5NCAyLjYyMnoiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTEwMzcuMTMxIDc0OC41MzNoLTEyLjg5NGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxOXYtNi4zMzJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTloMTIuODk0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djYuMzMyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE5em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC4zaC0xMC44NTZ6TTEwMzcuMTMxIDcwMy4zNDhoLTEyLjg5NGExLjAxNSAxLjAxNSAwIDAgMS0xLjAxNy0xLjAxN3YtNi45NTZhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTctMS4wMTdoMTIuODk0YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE3djYuOTU2YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDE3em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC45MmgtMTAuODU2eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDM3LjEzMSA3NTUuNDMxaC0xMi44OTRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTYuOWExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNy0xLjAxN2gxMi44OTRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTd2Ni45YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE5em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC44NjNoLTEwLjg1NnpNMTAzNy4xMzEgNzQyLjE5OWgtMTIuODk0YTEuMDE1IDEuMDE1IDAgMCAxLTEuMDE3LTEuMDE3di0zMi45MTRhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTctMS4wMTZoMTIuODk0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE2djMyLjkxNGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNyAxLjAxN3ptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTMwLjg3N2gtMTAuODU2eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDM3LjEzMSA3MDkuMjloLTEyLjg5NGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAydi01LjkzNmExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxOWgxMi44OTRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTl2NS45MzZhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTcgMS4wMnptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTMuOWgtMTAuODU2eiIvPgogICAgICA8L2c+CiAgICAgIDxwYXRoIGQ9Ik05OTAuOTggNzUzLjM5Nmg3OS40MDh2Mi4wMzZIOTkwLjk4eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik05MzYuMTY5IDc1Mi4zMzdoLTc0LjU0M2ExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxOXYtOS4xNTNhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTloNzQuNTQzYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE5djkuMTUzYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5IDEuMDE5em0tNzMuNTI4LTIuMDM2aDcyLjUwOXYtNy4xMThoLTcyLjUwN3oiLz4KICAgICAgPHBhdGggZD0iTTkzNi4xNjkgNzQzLjE4M2gtNzQuNTQzYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3LTEuMDE3di0zNy4yN2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAyaDE3LjI2NXYyLjAzNmgtMTYuMjQ4djM1LjIzNGg3Mi41MDl2LTM1LjIzNGgtMTYuMTI3di0yLjAzNmgxNy4xNDRhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTkgMS4wMnYzNy4yN2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxN3pNOTA3LjcwMyA3NjMuNDE4bC0xLjgyLTExLjA4aC0xMy45NjZsLTEuODIyIDExLjA4LTIuMDEtLjMyOCAxLjk2My0xMS45MzRhMS4wMTUgMS4wMTUgMCAwIDEgMS0uODU0aDE1LjdhMS4wMTkgMS4wMTkgMCAwIDEgMSAuODU0bDEuOTYxIDExLjkzNHoiLz4KICAgICAgPHBhdGggZD0iTTg4MS4yMTUgNzYyLjIzN2gzNS4zN3YyLjAzNmgtMzUuMzd6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik05MTkuMDI1IDc0My4xODdoLTQwLjEzMmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxN3YtNTIuOTI2YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE3aDMxLjkxOWExLjAxNCAxLjAxNCAwIDAgMSAuNzE4LjNsOC4yMTUgOC4yMTNhMS4wMjcgMS4wMjcgMCAwIDEgLjMuNzJ2NDQuNzExYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDIgMS4wMTZ6bS0zOS4xMTUtMi4wMzZoMzguMXYtNDMuMjdsLTcuNjE3LTcuNjE3aC0zMC40OHoiLz4KICAgICAgICA8cGF0aCBkPSJNOTE5LjAyNSA2OTguNDcyaC04LjIxM2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxN3YtOC4yMTVhMS4wMjIgMS4wMjIgMCAwIDEgLjYyOC0uOTQgMS4wMiAxLjAyIDAgMCAxIDEuMTEuMjIybDguMjE1IDguMjEzYTEuMDIgMS4wMiAwIDAgMSAuMjIgMS4xMSAxLjAxOCAxLjAxOCAwIDAgMS0uOTQxLjYyN3ptLTcuMi0yLjAzNmg0LjczOGwtNC43MzgtNC43Mzh6TTg4NC43IDcwMi4xNGgyOC41MTZ2Mi4wMzZIODg0Ljd6TTg4NC43IDcwNy42NTZoMjguNTE2djIuMDM1SDg4NC43ek04ODQuNyA3MTMuMTcxaDI4LjUxNnYyLjAzNkg4ODQuN3pNODg0LjcgNzE4LjY4NmgyOC41MTZ2Mi4wMzZIODg0Ljd6TTg4NC43IDcyNC4yMDFoMjguNTE2djIuMDM2SDg4NC43ek04ODQuNyA3MjkuNzE3aDE3Ljg1M3YyLjAzNkg4ODQuN3oiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik02MzUuNTQgNzYxLjU1NmExLjA0MyAxLjA0MyAwIDAgMS0uMzg5LS4wNzYgMS4wMTcgMS4wMTcgMCAwIDEtLjYyOC0uOTR2LTEwLjQ4N2ExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNy0xLjAxN2gxMC40ODNhMS4wMTkgMS4wMTkgMCAwIDEgLjk0LjYyOCAxLjAxOSAxLjAxOSAwIDAgMS0uMjIgMS4xMWwtMTAuNDg1IDEwLjQ4NWExLjAxOCAxLjAxOCAwIDAgMS0uNzE4LjI5N3ptMS4wMTctMTAuNDg0djcuMDFsNy4wMTItNy4wMXpNNjMxLjEzNiA3MzEuMzA1YTEuMDEgMS4wMSAwIDAgMS0uMi0uMDIybC05LjE2NS0xLjg1NWExLjAyIDEuMDIgMCAwIDEtLjc3My0uNyAxLjAxOCAxLjAxOCAwIDAgMSAuMjU2LTEuMDEzbDI5LjIzOS0yOS4yNDFhMS4wMTkgMS4wMTkgMCAwIDEgMS40NDEgMGw1LjUxMSA1LjUxMWExLjAxNiAxLjAxNiAwIDAgMSAuMy43MiAxLjAxOSAxLjAxOSAwIDAgMS0uMy43MmwtMjUuNTg5IDI1LjU4YTEuMDIxIDEuMDIxIDAgMCAxLS43Mi4zem0tNy4xLTMuNWw2Ljc3MiAxLjM3IDI0LjQ4MS0yNC40NzktNC4wNzItNC4wNzJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik02MzIuOTk0IDc0MC40NzJhLjk1OC45NTggMCAwIDEtLjI5My0uMDQ1IDEuMDE5IDEuMDE5IDAgMCAxLS43LS43NzNsLTEuODU4LTkuMTY3YTEuMDIzIDEuMDIzIDAgMCAxIC4yNzgtLjkyM2wyNS41ODctMjUuNTg0YTEuMDIyIDEuMDIyIDAgMCAxIC43Mi0uMyAxLjAyMSAxLjAyMSAwIDAgMSAuNzE4LjNsNS41MTEgNS41MTNhMS4wMTcgMS4wMTcgMCAwIDEgMCAxLjQzOWwtMjkuMjM5IDI5LjI0MmExLjAyIDEuMDIgMCAwIDEtLjcyNC4yOTh6bS0uNzUzLTkuODUzbDEuMzc0IDYuNzc0IDI3LjE3OS0yNy4xODEtNC4wNy00LjA3M3oiLz4KICAgICAgPHBhdGggZD0iTTYyMC4yIDc0Mi4yOTlhMS4wMjUgMS4wMjUgMCAwIDEtLjcyLS4zIDEuMDE1IDEuMDE1IDAgMCAxLS4yODctLjg2NGwxLjgyOC0xMi43OTNhMS4wMTkgMS4wMTkgMCAwIDEgLjQyLS42ODYgMS4wMTYgMS4wMTYgMCAwIDEgLjc4Ny0uMTY4bDkuMSAxLjhhMS4wMjEgMS4wMjEgMCAwIDEgLjguOGwxLjg1OCA5LjE2OGExLjAxOCAxLjAxOCAwIDAgMS0uMTY3Ljc4OSAxLjAxMSAxLjAxMSAwIDAgMS0uNjg2LjQyMWwtMTIuNzg3IDEuODE5YTEuMjA5IDEuMjA5IDAgMCAxLS4xNDYuMDE0em0yLjY4Ni0xMi42MDVsLTEuNDg1IDEwLjM4OCAxMC4zODItMS40ODUtMS41MDktNy40NDR6TTY2Mi4xNzkgNzExLjE3MWExLjAwNiAxLjAwNiAwIDAgMS0uNzItLjNsLTEwLjk2Ny0xMC45NjZhMS4wMTggMS4wMTggMCAwIDEtLjMtLjcxOCAxLjAyNCAxLjAyNCAwIDAgMSAuMy0uNzJsMi43OTEtMi43OTFhMS4wMTUgMS4wMTUgMCAwIDEgLjcxOC0uMyAxLjAyIDEuMDIgMCAwIDEgLjcyLjNsMTAuOTY1IDEwLjk2OGExLjAxNyAxLjAxNyAwIDAgMSAwIDEuNDM5bC0yLjc4OSAyLjc4OWExLjAxMiAxLjAxMiAwIDAgMS0uNzE4LjI5OXptLTkuNTI5LTExLjk4Mmw5LjUyOSA5LjUyNCAxLjM0OC0xLjM0Ny05LjUyNy05LjUyOXoiLz4KICAgICAgPHBhdGggZD0iTTY2NC45NjYgNzA4LjM4MmExLjAwNyAxLjAwNyAwIDAgMS0uNzE4LS4zbC0xMC45NjUtMTAuOTY2YTEuMDE5IDEuMDE5IDAgMCAxIDAtMS40NGwyLjUtMi41YTQuMTY1IDQuMTY1IDAgMCAxIDIuOTYyLTEuMjE2IDQuMjc5IDQuMjc5IDAgMCAxIDMuMDQ3IDEuMjYzbDYuMzUgNi4zNWE0LjI1NCA0LjI1NCAwIDAgMSAuMDQ2IDYuMDA3bC0yLjUgMi41YTEuMDE1IDEuMDE1IDAgMCAxLS43MjIuMzAyem0tOS41MjUtMTEuOTg0bDkuNTI1IDkuNTI2IDEuNzgyLTEuNzgxYTIuMjE0IDIuMjE0IDAgMCAwLS4wNDktMy4xMjhsLTYuMzQ4LTYuMzQ5YTIuMjc5IDIuMjc5IDAgMCAwLTMuMTMtLjA0OHpNNjIwLjI2OCA3MzYuNTAxbDEuNDQtMS40NCA0Ljg0NCA0Ljg0NC0xLjQ0IDEuNDR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik02MzUuNTQxIDc2MS41NTZoLTQwLjc0NGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxNnYtNjcuNTZhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTktMS4wMTdoNTEuMjI4YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5IDEuMDE3djExLjM5NGExLjAyMiAxLjAyMiAwIDAgMS0uMy43MThsLTIzLjc1OSAyMy44NzQtMS41ODggMTEuMTE3IDExLjExMy0xLjU5IDEyLjc5NC0xMi43OTJhMS4wMTUgMS4wMTUgMCAwIDEgMS4xMS0uMjIgMS4wMTggMS4wMTggMCAwIDEgLjYyOC45NHYyMy42MzFhMS4wMTcgMS4wMTcgMCAwIDEtLjMuNzIxbC0xMC40ODUgMTAuNDg1YTEuMDE1IDEuMDE1IDAgMCAxLS43MTYuMjk4em0tMzkuNzI2LTIuMDM1aDM5LjNsOS44OS05Ljg4OXYtMjAuNzU4bC0xMS4yOTEgMTEuM2ExLjAzMSAxLjAzMSAwIDAgMS0uNTc1LjI4OWwtMTIuNzk0IDEuODI4YTEuMDE5IDEuMDE5IDAgMCAxLS44NjYtLjI4OCAxLjAxNyAxLjAxNyAwIDAgMS0uMjg3LS44NjRsMS44MjgtMTIuNzkzYTEuMDM1IDEuMDM1IDAgMCAxIC4yODYtLjU3M2wyMy43LTIzLjgxN3YtOS45NTVoLTQ5LjE5MnoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMTE2Ny45MjQgNzUxLjM0NWgtMzcuNjkyYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5LTEuMDE3di0zNy42OTRhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTdoMzcuNjkyYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE3djM3LjY5NGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNyAxLjAxN3ptLTM2LjY3NS0yLjAzNmgzNS42NTZ2LTM1LjY1NmgtMzUuNjU2eiIvPgogICAgICA8cGF0aCBkPSJNMTE3NC4yOTUgNzU3LjA1aC01MC40MzRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTY1LjkyM2ExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxOWg1MC40MzRhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMTl2NjUuOTIzYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE3IDEuMDE5em0tNDkuNDE0LTIuMDM2aDQ4LjR2LTYzLjg5aC00OC40eiIvPgogICAgICA8cGF0aCBkPSJNMTE2Ny4yMDYgNzA4LjQzaC0zNi4yNThhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTEwLjQzM2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxOWgzNi4yNThhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTkgMS4wMTl2MTAuNDMzYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5IDEuMDE5em0tMzUuMjM5LTIuMDRoMzQuMjIydi04LjRoLTM0LjIyMnpNMTEzNy44OTEgNzEyLjYzNGgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTExMzcuODkxIDcyMy4xMzloMi4wMzZ2Ni44NTNoLTIuMDM2ek0xMTMwLjIzIDcyMC4yOTZoNi44NTN2Mi4wMzZoLTYuODUzek0xMTQwLjczNSA3MjAuMjk2aDYuNTE5djIuMDM2aC02LjUxOXpNMTE1MC44NiA3MjAuMjk2aDYuNTU5djIuMDM2aC02LjU1OXpNMTE2MS4wNyA3MjAuMjk2aDYuODUzdjIuMDM2aC02Ljg1M3pNMTEzMC4yMyA3MzAuNDY0aDYuODUzdjIuMDM1aC02Ljg1M3pNMTE0MC43MzUgNzMwLjQ2NGg2LjUxOXYyLjAzNWgtNi41MTl6TTExNTAuODYgNzMwLjQ2NGg2LjU1OXYyLjAzNWgtNi41NTl6TTExNjEuMDcgNzMwLjQ2NGg2Ljg1M3YyLjAzNWgtNi44NTN6TTExMzAuMjMgNzQwLjYzMWg2Ljg1M3YyLjAzNmgtNi44NTN6TTExNDAuNzM2IDc0MC42MzFoNi41MTl2Mi4wMzZoLTYuNTE5ek0xMTM3Ljg5MSA3MzIuOTdoMi4wMzZ2Ni44NTNoLTIuMDM2ek0xMTM3Ljg5MSA3NDMuNDc2aDIuMDM2djYuODUzaC0yLjAzNnpNMTE1MC44NiA3NDAuNjMxaDYuNTU5djIuMDM2aC02LjU1OXoiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTExNTguMjI3IDcxMi42MzRoMi4wMzZ2Ni44NTRoLTIuMDM2ek0xMTU4LjIyNyA3MjMuMTM5aDIuMDM2djYuODUzaC0yLjAzNnpNMTE1OC4yMjcgNzMyLjk3aDIuMDM2djYuODUzaC0yLjAzNnpNMTE1OC4yMjcgNzQzLjQ3NWgyLjAzNnY2Ljg1M2gtMi4wMzZ6Ii8+CiAgICAgIDwvZz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTExNDguMDU5IDcxMi42MzRoMi4wMzZ2Ni44NTRoLTIuMDM2ek0xMTQ4LjA1OSA3MjMuMTM5aDIuMDM2djYuODUzaC0yLjAzNnpNMTE0OC4wNiA3MzIuOTdoMi4wMzV2Ni44NTNoLTIuMDM1ek0xMTQ4LjA2IDc0My40NzVoMi4wMzV2Ni44NTNoLTIuMDM1eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTM1OC40MDYgNzU1LjIzMmgtMjEuNjE1YTMuODYyIDMuODYyIDAgMCAxLTMuODU4LTMuODU4di01LjM2N2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxN2gxOS41NnYyLjAzNWgtMTguNTR2NC4zNDlhMS44MjYgMS44MjYgMCAwIDAgMS44MjIgMS44MjRoMjEuNjE0ek0zNzkuODEyIDcwMC41NDloLTQ1Ljg2MWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxN3YtNC40MjJhMy44NjQgMy44NjQgMCAwIDEgMy44NTgtMy44Nmg0MC4xOGEzLjg2NCAzLjg2NCAwIDAgMSAzLjg1OCAzLjg2djQuNDIyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE4IDEuMDE3em0tNDQuODQyLTIuMDM2aDQzLjgyMXYtMy40YTEuODI0IDEuODI0IDAgMCAwLTEuODIyLTEuODIzaC00MC4xNzhhMS44MjQgMS44MjQgMCAwIDAtMS44MjIgMS44MjN6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zNTMuNTExIDc0Ny4wMjZoLTE5LjU2YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3LTEuMDE5di00Ni40NzRhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTctMS4wMTloNDUuODYxYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE5djI2LjUxNGgtMi4wNHYtMjUuNUgzMzQuOTd2NDQuNDRoMTguNTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zODYuMDE5IDc2NS4yMDFoLTIyLjIxMWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxNWwtLjAwOC0zLjQtOS0xMS4xODhhNC4wNzkgNC4wNzkgMCAwIDEtMS4yNTctMi45MzF2LTEyLjA3MmE0LjA5IDQuMDkgMCAwIDEgNC4wODYtNC4wODYgNC4wOSA0LjA5IDAgMCAxIDQuMDg0IDQuMDg2djcuOWwxLjEwOCAxLjU4OXYtMjMuOTc3YTQuMDg5IDQuMDg5IDAgMCAxIDQuMDg0LTQuMDg0IDQuMDg4IDQuMDg4IDAgMCAxIDQuMDg0IDQuMDg0djVhNC4wNjEgNC4wNjEgMCAwIDEgMi4wNi0uNTU4IDQuMDggNC4wOCAwIDAgMSAzLjA3MSAxLjM5NCA0LjA3NyA0LjA3NyAwIDAgMSAzLjA3MS0xLjM5NCA0LjA5MyA0LjA5MyAwIDAgMSAzLjkzMSAyLjk3MiA0LjA0NiA0LjA0NiAwIDAgMSAyLjIxMi0uNjU0IDQuMDkxIDQuMDkxIDAgMCAxIDQuMDg0IDQuMDg2djIzLjM0M2E0LjA3NyA0LjA3NyAwIDAgMS0xLjM2MiAzLjA0NXY2Ljg0NGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOCAxLjAxNnptLTIxLjItMi4wMzRoMjAuMTc3di02LjMyNGExLjAxOSAxLjAxOSAwIDAgMSAuNDUyLS44NDYgMi4wNDIgMi4wNDIgMCAwIDAgLjkxLTEuN3YtMjMuMzQzYTIuMDUxIDIuMDUxIDAgMCAwLTIuMDQ4LTIuMDUgMi4wNTIgMi4wNTIgMCAwIDAtMi4wNSAyLjA1djYuOGExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOSAxLjAyIDEuMDI1IDEuMDI1IDAgMCAxLTEuMDI1LTEuMDJ2LTkuMTIyYTIuMDUyIDIuMDUyIDAgMCAwLTIuMDQ4LTIuMDUxIDIuMDUzIDIuMDUzIDAgMCAwLTIuMDUgMi4wNTF2OS4xMjJhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMiAxLjAyNCAxLjAyNCAwIDAgMS0xLjAyMy0xLjAydi05LjEyMmEyLjA1MyAyLjA1MyAwIDAgMC0yLjA1LTIuMDUxIDIuMDU0IDIuMDU0IDAgMCAwLTIuMDUyIDIuMDUxdjkuMTIyYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDIgMS4wMjQgMS4wMjQgMCAwIDEtMS4wMjUtMS4wMnYtMTcuNjUyYTIuMDUxIDIuMDUxIDAgMCAwLTIuMDUtMi4wNDggMi4wNDkgMi4wNDkgMCAwIDAtMi4wNDggMi4wNDh2MjcuMjE5YTEuMDE5IDEuMDE5IDAgMCAxLS43MTQuOTcyIDEuMDE5IDEuMDE5IDAgMCAxLTEuMTQtLjM4OWwtMy4xNDItNC41MTJhMS4wMTggMS4wMTggMCAwIDEtLjE4NC0uNTgzdi04LjIxN2EyLjA1IDIuMDUgMCAwIDAtMi4wNDgtMi4wNSAyLjA1MiAyLjA1MiAwIDAgMC0yLjA1IDIuMDV2MTIuMDcyYTIuMDI1IDIuMDI1IDAgMCAwIC42ODYgMS41MTUgMS4wMjkgMS4wMjkgMCAwIDEgLjE4Mi4yMTZsOS4xNjMgMTEuMzlhMSAxIDAgMCAxIC4yMjYuNjM1eiIvPgogICAgICA8cGF0aCBkPSJNMzg3LjM4IDc3NS45OTJoLTI0Ljc0OGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtMTAuNzk0YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE2aDI0Ljc0OGExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOSAxLjAxNnYxMC43OTRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTkgMS4wMTd6bS0yMy43MzEtMi4wMzRoMjIuNzA5di04Ljc2aC0yMi43MDl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zNjUuMzY5IDc2NC4xODRoMi4wMzZ2MTAuNzk0aC0yLjAzNnpNMzY4LjY5MSA3NjcuNTE2aDMuMTI1djIuMDM2aC0zLjEyNXpNMzQwLjIwMiA3MDcuODAyaDMzLjM2djIuMDM2aC0zMy4zNnpNMzQwLjIwMiA3MTIuODkxaDMzLjM2djIuMDM2aC0zMy4zNnpNMzQwLjIwMiA3MTcuOTgyaDIyLjYxNnYyLjAzNWgtMjIuNjE2ek0zNDAuMjAyIDcyMy4wN2gyMi43ODl2Mi4wMzZoLTIyLjc4OXpNMzQwLjIwMiA3MjguMTYxaDIyLjYxNnYyLjAzNmgtMjIuNjE2ek0zNDAuMjAyIDczMy4yNTFoMTMuMzM4djIuMDM2aC0xMy4zMzh6TTM2OC43NDUgNzE3Ljk4Mmg0LjgxNnYyLjAzNWgtNC44MTZ6TTM1My44MDYgNjk0Ljg4M2g2LjE1MXYyLjAzNmgtNi4xNTF6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTczNS45NTEgNzQ5LjM0OWE3LjQzNCA3LjQzNCAwIDAgMS03LjQyNi03LjQyNnYtMTguNGE3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNi03LjQyNSA3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNiA3LjQyNXYxOC40YTcuNDM0IDcuNDM0IDAgMCAxLTcuNDI2IDcuNDI2em0wLTMxLjIxYTUuNCA1LjQgMCAwIDAtNS4zOSA1LjM4OXYxOC40YTUuNCA1LjQgMCAwIDAgNS4zOSA1LjM5IDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5di0xOC40YTUuNCA1LjQgMCAwIDAtNS4zOS01LjM5M3oiLz4KICAgICAgPHBhdGggZD0iTTcyOS41NDIgNzQzLjQ3NmE3LjI2NCA3LjI2NCAwIDAgMS03LjI1NC03LjI1NnYtNi45OTRhNy4yNjQgNy4yNjQgMCAwIDEgNy4yNTQtNy4yNTZoLjA4N2EuOTUyLjk1MiAwIDAgMSAuNzIuMzI5Ljk5NC45OTQgMCAwIDEgLjIzNi43NzVjLS4wMTQuMTQ3LS4wMjQuMy0uMDI0LjQ0OHYxOC40YzAgLjE1MS4wMS4zLjAyNC40NDhhMS4wMjQgMS4wMjQgMCAwIDEtLjI2NC43NzYgMS4wMiAxLjAyIDAgMCAxLS43NTEuMzI5em0tMS4wMTctMTkuMzhhNS4yMzUgNS4yMzUgMCAwIDAtNC4yIDUuMTI5djYuOTk0YTUuMjMgNS4yMyAwIDAgMCA0LjIgNS4xMjF6TTczNC45MzQgNzE3LjExN2gyLjAzNXYxNS42MDVoLTIuMDM1ek03MzQuOTM0IDczOC40NDdoMi4wMzV2OS44ODFoLTIuMDM1ek03ODcuNzM3IDc0OS4zNDlhNy40MzUgNy40MzUgMCAwIDEtNy40MjgtNy40MjZ2LTE4LjRhNy40MzUgNy40MzUgMCAwIDEgNy40MjgtNy40MjUgNy40MzUgNy40MzUgMCAwIDEgNy40MjYgNy40MjV2MTguNGE3LjQzNCA3LjQzNCAwIDAgMS03LjQyNiA3LjQyNnptMC0zMS4yMWE1LjQgNS40IDAgMCAwLTUuMzkyIDUuMzg5djE4LjRhNS40IDUuNCAwIDAgMCA1LjM5MiA1LjM5IDUuNCA1LjQgMCAwIDAgNS4zOS01LjM5di0xOC40YTUuNCA1LjQgMCAwIDAtNS4zOS01LjM5M3oiLz4KICAgICAgPHBhdGggZD0iTTc5NC4xNDMgNzQzLjQ3NWgtLjA4N2EuOTU0Ljk1NCAwIDAgMS0uNzE4LS4zMjcgMSAxIDAgMCAxLS4yMzYtLjc3MmMuMDEyLS4xNDkuMDI0LS4zLjAyNC0uNDUzdi0xOC40YzAtLjE1MS0uMDEyLS4zLS4wMjQtLjQ1MmExLjAxNSAxLjAxNSAwIDAgMSAuMjY2LS43NzIuOTkyLjk5MiAwIDAgMSAuNzUxLS4zMjkgNy4yNjggNy4yNjggMCAwIDEgNy4yOCA3LjI1NHY2Ljk5NWE3LjI2NCA3LjI2NCAwIDAgMS03LjI1NiA3LjI1NnptMS4wMTktMTkuMzcxdjE3LjIzNmE1LjIzMiA1LjIzMiAwIDAgMCA0LjItNS4xMjF2LTYuOTk1YTUuMjMxIDUuMjMxIDAgMCAwLTQuMi01LjEyek03ODYuNzE4IDcxNy4xMTdoMi4wMzZ2MTUuNjA1aC0yLjAzNnpNNzg2LjcxOCA3MzguNDQ3aDIuMDM2djkuODgxaC0yLjAzNnpNNzg4Ljc5NCA3MTcuMTE1aC0yLjAzOXYtMS43MTdhMjQuODEgMjQuODEgMCAwIDAtMi44NzQtMTEuNTlsMS44LS45NTRhMjYuODg1IDI2Ljg4NSAwIDAgMSAzLjExMSAxMi41NDR6TTczNy4yMTggNzE3LjExNWgtMi4wMzZ2LTEuNzE3YTI2Ljg2MyAyNi44NjMgMCAwIDEgMy4xMS0xMi41NDRsMS44Ljk1NGEyNC44MDYgMjQuODA2IDAgMCAwLTIuODczIDExLjU5eiIvPgogICAgICA8cGF0aCBkPSJNNzQyLjUzMSA3MDUuMzQ4YTEuMDQxIDEuMDQxIDAgMCAxLS4yOTEtLjA0M2wtNi42MzMtMS45ODNhMS4wMTcgMS4wMTcgMCAwIDEtLjY0Mi0uNTcxIDEuMDE5IDEuMDE5IDAgMCAxIC4wMjQtLjg2IDMwLjA3NCAzMC4wNzQgMCAwIDEgMjctMTYuNjg5IDMwLjA3MyAzMC4wNzMgMCAwIDEgMjcgMTYuNjg5IDEuMDE5IDEuMDE5IDAgMCAxIC4wMjYuODYgMS4wMTYgMS4wMTYgMCAwIDEtLjY0NC41NzFsLTYuNjMzIDEuOTgzYTEuMDE4IDEuMDE4IDAgMCAxLTEuMTc0LS40NjkgMjEuNDUxIDIxLjQ1MSAwIDAgMC0xOC41NzEtMTAuODEyIDIxLjQ1MiAyMS40NTIgMCAwIDAtMTguNTczIDEwLjgxMiAxLjAxNyAxLjAxNyAwIDAgMS0uODg5LjUxMnptMTkuNDU3LTEzLjM2MWEyMy40ODggMjMuNDg4IDAgMCAxIDE5LjkyMyAxMS4xMzlsNC42ODYtMS40YTI4LjAzMyAyOC4wMzMgMCAwIDAtMjQuNjA4LTE0LjQ5IDI4LjAyOCAyOC4wMjggMCAwIDAtMjQuNjA4IDE0LjQ5bDQuNjg0IDEuNGEyMy40OTIgMjMuNDkyIDAgMCAxIDE5LjkyMy0xMS4xMzl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NjEuODQzIDczNS42NTlhMTUuMiAxNS4yIDAgMCAxLTE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4NyAxNS4xODggMTUuMiAxNS4yIDAgMCAxLTE1LjE4NyAxNS4xODZ6bTAtMjguMzM3YTEzLjE2NyAxMy4xNjcgMCAwIDAtMTMuMTUxIDEzLjE1MSAxMy4xNjUgMTMuMTY1IDAgMCAwIDEzLjE1MSAxMy4xNSAxMy4xNjQgMTMuMTY0IDAgMCAwIDEzLjE1MS0xMy4xNSAxMy4xNjUgMTMuMTY1IDAgMCAwLTEzLjE1MS0xMy4xNTJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NTcuMDYgNzI5LjIzNmExLjAyNSAxLjAyNSAwIDAgMS0uNTExLS4xMzcgMS4wMiAxLjAyIDAgMCAxLS41MDktLjg4MnYtMTUuNDg1YTEuMDE1IDEuMDE1IDAgMCAxIC41MDktLjg3OSAxLjAxIDEuMDEgMCAwIDEgMS4wMTkgMGwxMy40MTEgNy43NDFhMS4wMjEgMS4wMjEgMCAwIDEgLjUwOC44ODIgMS4wMTggMS4wMTggMCAwIDEtLjUwOC44ODJsLTEzLjQxMSA3Ljc0MmExLjAxOCAxLjAxOCAwIDAgMS0uNTA4LjEzNnptMS4wMTctMTQuNzQxdjExLjk1OGwxMC4zNTgtNS45Nzh6TTc1NC40MDMgNzU5Ljg4NmgtMTMuMDIyYTYuMzc2IDYuMzc2IDAgMCAxLTYuNDQ3LTYuMjg3di01LjI2OWgyLjA0djUuMjY5YTQuMzM2IDQuMzM2IDAgMCAwIDQuNDExIDQuMjQ5aDEzLjAyMnoiLz4KICAgICAgPHBhdGggZD0iTTc2NS45NjYgNzYzLjIwM2gtOC4yNDVhNC4zNDIgNC4zNDIgMCAwIDEtNC4zMzQtNC4zMzcgNC4zNCA0LjM0IDAgMCAxIDQuMzM0LTQuMzM1aDguMjQ1YTQuMzQgNC4zNCAwIDAgMSA0LjMzNiA0LjMzNSA0LjM0MiA0LjM0MiAwIDAgMS00LjMzNiA0LjMzN3ptLTguMjQ1LTYuNjM4YTIuMyAyLjMgMCAwIDAtMi4zIDIuMyAyLjMgMi4zIDAgMCAwIDIuMyAyLjNoOC4yNDVhMi4zIDIuMyAwIDAgMCAyLjMtMi4zIDIuMyAyLjMgMCAwIDAtMi4zLTIuM3oiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNTI1LjIzOSA3NTIuMzM3aC03NC41NDVhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTl2LTkuMTUzYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE5aDc0LjU0NWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxOXY5LjE1M2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxOXptLTczLjUyOC0yLjAzNmg3Mi41MDl2LTcuMTE4aC03Mi41MDl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik01MjUuMjM5IDc0My4xODNoLTc0LjU0NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxN3YtMzcuMjdhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMmgxNy4yNjV2Mi4wMzZoLTE2LjI0OHYzNS4yMzRoNzIuNTA5di0zNS4yMzRoLTE2LjEyN3YtMi4wMzZoMTcuMTQ2YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDJ2MzcuMjdhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTcgMS4wMTd6TTQ5Ni43NzEgNzYzLjQxOGwtMS44MjItMTEuMDhoLTEzLjk2NmwtMS44MiAxMS4wOC0yLjAxLS4zMjggMS45NjEtMTEuOTM0YTEuMDE5IDEuMDE5IDAgMCAxIDEtLjg1NGgxNS43YTEuMDE3IDEuMDE3IDAgMCAxIDEgLjg1NGwxLjk2MSAxMS45MzR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik00NzAuMjgyIDc2Mi4yMzdoMzUuMzd2Mi4wMzZoLTM1LjM3ek00NTQuOTIzIDcwMy44NzZoNTYuMDUydjIuMDM2aC01Ni4wNTJ6TTQ5NS4yMjYgNzIyLjQyNGwtNy40MjIgMi4xLTQuMzIgNi4zNzctMy43MzUtMTcuNTUxek00ODguODQ0IDcyOC40NjdsMi4zNzctMS43MTYgNC43NjIgNi41OTQtMi4zNzcgMS43MTd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE4NTIuNTg1IDc1Mi4zMzdoLTc0LjU0NWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtOS4xNTNhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTloNzQuNTQ1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djkuMTUzYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE5em0tNzMuNTI4LTIuMDM2aDcyLjUwOXYtNy4xMThoLTcyLjUwOXoiLz4KICAgICAgPHBhdGggZD0iTTE4NTIuNTg1IDc0My4xODNoLTc0LjU0NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxN3YtMzcuMjdhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMmgxNy4yNjV2Mi4wMzZoLTE2LjI0OHYzNS4yMzRoNzIuNTA5di0zNS4yMzRoLTE2LjEyNnYtMi4wMzZoMTcuMTQ2YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDJ2MzcuMjdhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTggMS4wMTd6TTE4MjQuMTE3IDc2My40MThsLTEuODIyLTExLjA4aC0xMy45NjZsLTEuODIgMTEuMDgtMi4wMS0uMzI4IDEuOTYxLTExLjkzNGExLjAxOSAxLjAxOSAwIDAgMSAxLS44NTRoMTUuN2ExLjAxNyAxLjAxNyAwIDAgMSAxIC44NTRsMS45NjEgMTEuOTM0eiIvPgogICAgICA8cGF0aCBkPSJNMTc5Ny42MjggNzYyLjIzN2gzNS4zN3YyLjAzNmgtMzUuMzd6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xODM1LjQzOSA3NDMuMTg3aC00MC4xMzRhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTd2LTUyLjkyNmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxN2gzMS45MTlhMS4wMTggMS4wMTggMCAwIDEgLjcyLjNsOC4yMTUgOC4yMTNhMS4wMjcgMS4wMjcgMCAwIDEgLjMuNzJ2NDQuNzExYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDIgMS4wMTZ6bS0zOS4xMTUtMi4wMzZoMzguMXYtNDMuMjdsLTcuNjItNy42MTdoLTMwLjQ4eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xODM1LjQzOSA2OTguNDcyaC04LjIxNWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxN3YtOC4yMTVhMS4wMjIgMS4wMjIgMCAwIDEgLjYyOC0uOTQgMS4wMiAxLjAyIDAgMCAxIDEuMTEuMjIybDguMjE1IDguMjEzYTEuMDIxIDEuMDIxIDAgMCAxIC4yMiAxLjExIDEuMDE4IDEuMDE4IDAgMCAxLS45NDEuNjI3em0tNy4yLTIuMDM2aDQuNzM4bC00LjczOC00LjczOHpNMTgwMS4xMTQgNzAyLjE0aDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xODAxLjExNCA3MDcuNjU2aDI4LjUxNnYyLjAzNWgtMjguNTE2ek0xODAxLjExNCA3MTMuMTcxaDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xODAxLjExNCA3MTguNjg2aDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xODAxLjExNCA3MjQuMjAxaDI4LjUxNnYyLjAzNmgtMjguNTE2ek0xODAxLjExNCA3MjkuNzE3aDE3Ljg1M3YyLjAzNmgtMTcuODUzeiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE1NTEuOTU0IDc2MS41NTZhMS4wNDMgMS4wNDMgMCAwIDEtLjM4OS0uMDc2IDEuMDE3IDEuMDE3IDAgMCAxLS42MjctLjk0di0xMC40ODdhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTctMS4wMTdoMTAuNDg1YTEuMDE4IDEuMDE4IDAgMCAxIC45NC42MjggMS4wMTkgMS4wMTkgMCAwIDEtLjIyIDEuMTFsLTEwLjQ4NyAxMC40ODVhMS4wMSAxLjAxIDAgMCAxLS43MTkuMjk3em0xLjAxNy0xMC40ODR2Ny4wMWw3LjAxLTcuMDF6TTE1NDcuNTUgNzMxLjMwNWEuOTk0Ljk5NCAwIDAgMS0uMi0uMDIybC05LjE2NS0xLjg1NWExLjAxNCAxLjAxNCAwIDAgMS0uNzczLS43IDEuMDE3IDEuMDE3IDAgMCAxIC4yNTQtMS4wMTNsMjkuMjQxLTI5LjI0MWExLjAxNyAxLjAxNyAwIDAgMSAxLjQzOSAwbDUuNTEzIDUuNTExYTEuMDE1IDEuMDE1IDAgMCAxIC4zLjcyIDEuMDE4IDEuMDE4IDAgMCAxLS4zLjcybC0yNS41ODkgMjUuNThhMS4wMjggMS4wMjggMCAwIDEtLjcyLjN6bS03LjEwNS0zLjVsNi43NzIgMS4zNyAyNC40ODEtMjQuNDc5LTQuMDcyLTQuMDcyeiIvPgogICAgICA8cGF0aCBkPSJNMTU0OS40MDggNzQwLjQ3MmEuOTQ5Ljk0OSAwIDAgMS0uMjkzLS4wNDUgMS4wMTkgMS4wMTkgMCAwIDEtLjctLjc3M2wtMS44NTktOS4xNjdhMS4wMTcgMS4wMTcgMCAwIDEgLjI3OS0uOTIzbDI1LjU4Ny0yNS41ODRhMS4wMjIgMS4wMjIgMCAwIDEgLjcxOS0uMyAxLjAyNSAxLjAyNSAwIDAgMSAuNzIuM2w1LjUxMSA1LjUxM2ExLjAxNyAxLjAxNyAwIDAgMSAwIDEuNDM5bC0yOS4yMzkgMjkuMjQyYTEuMDIgMS4wMiAwIDAgMS0uNzI1LjI5OHptLS43NTMtOS44NTNsMS4zNzQgNi43NzQgMjcuMTc5LTI3LjE4MS00LjA3Mi00LjA3M3oiLz4KICAgICAgPHBhdGggZD0iTTE1MzYuNjE0IDc0Mi4yOTlhMS4wMjUgMS4wMjUgMCAwIDEtLjcyLS4zIDEuMDE1IDEuMDE1IDAgMCAxLS4yODYtLjg2NGwxLjgyOC0xMi43OTNhMS4wMiAxLjAyIDAgMCAxIC40Mi0uNjg2IDEuMDE0IDEuMDE0IDAgMCAxIC43ODUtLjE2OGw5LjEwNyAxLjhhMS4wMjIgMS4wMjIgMCAwIDEgLjguOGwxLjg1OSA5LjE2OGExLjAyNiAxLjAyNiAwIDAgMS0uMTY4Ljc4OSAxLjAxNSAxLjAxNSAwIDAgMS0uNjg2LjQyMWwtMTIuNzk2IDEuODE5YTEuMjEyIDEuMjEyIDAgMCAxLS4xNDMuMDE0em0yLjY4Ni0xMi42MDVsLTEuNDg3IDEwLjM4OCAxMC4zODItMS40ODUtMS41MDctNy40NDR6TTE1NzguNTkxIDcxMS4xNzFhMS4wMTQgMS4wMTQgMCAwIDEtLjcyLS4zbC0xMC45NjUtMTAuOTY2YTEuMDEgMS4wMSAwIDAgMS0uMy0uNzE4IDEuMDE3IDEuMDE3IDAgMCAxIC4zLS43MmwyLjc4OS0yLjc5MWExLjAyMyAxLjAyMyAwIDAgMSAuNzItLjMgMS4wMjQgMS4wMjQgMCAwIDEgLjcyLjNsMTAuOTY1IDEwLjk2OGExLjAxNyAxLjAxNyAwIDAgMSAwIDEuNDM5bC0yLjc4OSAyLjc4OWExLjAxMiAxLjAxMiAwIDAgMS0uNzIuMjk5em0tOS41MjctMTEuOTgybDkuNTI3IDkuNTI0IDEuMzUtMS4zNDctOS41MjctOS41Mjl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNTgxLjM4IDcwOC4zODJhMS4wMTUgMS4wMTUgMCAwIDEtLjcyLS4zbC0xMC45NjUtMTAuOTY2YTEuMDIyIDEuMDIyIDAgMCAxIDAtMS40NGwyLjUtMi41YTQuMTYyIDQuMTYyIDAgMCAxIDIuOTYyLTEuMjE2IDQuMjc4IDQuMjc4IDAgMCAxIDMuMDQ3IDEuMjYzbDYuMzUgNi4zNWE0LjI1NCA0LjI1NCAwIDAgMSAuMDQ3IDYuMDA3bC0yLjUgMi41YTEuMDE1IDEuMDE1IDAgMCAxLS43MjEuMzAyem0tOS41MjYtMTEuOTg0bDkuNTI2IDkuNTI2IDEuNzgyLTEuNzgxYTIuMjE0IDIuMjE0IDAgMCAwLS4wNDgtMy4xMjhsLTYuMzQ4LTYuMzQ5YTIuMjgxIDIuMjgxIDAgMCAwLTMuMTMyLS4wNDh6TTE1MzYuNjgyIDczNi41bDEuNDQtMS40NCA0Ljg0NCA0Ljg0NC0xLjQ0IDEuNDR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNTUxLjk1NSA3NjEuNTU2aC00MC43NDZhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTZ2LTY3LjU2YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3LTEuMDE3aDUxLjIzM2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxN3YxMS4zOTRhMS4wMiAxLjAyIDAgMCAxLS4yOTUuNzE4bC0yMy43NTkgMjMuODc0LTEuNTkgMTEuMTE3IDExLjExNS0xLjU5IDEyLjc5Mi0xMi43OTJhMS4wMTYgMS4wMTYgMCAwIDEgMS4xMS0uMjIgMS4wMTUgMS4wMTUgMCAwIDEgLjYyNy45NHYyMy42MzFhMS4wMjQgMS4wMjQgMCAwIDEtLjMuNzIxbC0xMC40ODcgMTAuNDg1YTEuMDA4IDEuMDA4IDAgMCAxLS43MTcuMjk4em0tMzkuNzI3LTIuMDM1aDM5LjNsOS44OS05Ljg4OXYtMjAuNzU4bC0xMS4yOSAxMS4zYTEuMDMyIDEuMDMyIDAgMCAxLS41NzUuMjg5bC0xMi43OTMgMS44MjhhMS4wMTcgMS4wMTcgMCAwIDEtLjg2Ni0uMjg4IDEuMDE3IDEuMDE3IDAgMCAxLS4yODctLjg2NGwxLjgyOC0xMi43OTNhMS4wMjMgMS4wMjMgMCAwIDEgLjI4Ny0uNTczbDIzLjctMjMuODE3di05Ljk1NWgtNDkuMTk0eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xMjc0LjgyIDc1NS4yMzJoLTIxLjYxNGEzLjg2MyAzLjg2MyAwIDAgMS0zLjg2LTMuODU4di01LjM2N2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOS0xLjAxN2gxOS41NnYyLjAzNWgtMTguNTQzdjQuMzQ5YTEuODI3IDEuODI3IDAgMCAwIDEuODI0IDEuODI0aDIxLjYxNHpNMTI5Ni4yMjYgNzAwLjU0OWgtNDUuODY0YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5LTEuMDE3di00LjQyMmEzLjg2NSAzLjg2NSAwIDAgMSAzLjg2LTMuODZoNDAuMTgxYTMuODYyIDMuODYyIDAgMCAxIDMuODU2IDMuODZ2NC40MjJhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTQgMS4wMTd6bS00NC44NDQtMi4wMzRoNDMuODI3di0zLjRhMS44MjQgMS44MjQgMCAwIDAtMS44MjItMS44MjNoLTQwLjE4MWExLjgyNSAxLjgyNSAwIDAgMC0xLjgyNCAxLjgyM3oiLz4KICAgICAgPHBhdGggZD0iTTEyNjkuOTI1IDc0Ny4wMjZoLTE5LjU2M2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxOXYtNDYuNDc0YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE5aDQ1Ljg2MWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxOXYyNi41MTRoLTIuMDM0di0yNS41aC00My44MjR2NDQuNDRoMTguNTQzeiIvPgogICAgICA8cGF0aCBkPSJNMTMwMi40MzMgNzY1LjIwMWgtMjIuMjExYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5LTEuMDE1bC0uMDEtMy40LTktMTEuMTg4YTQuMDggNC4wOCAwIDAgMS0xLjI1Ny0yLjkzMXYtMTIuMDcyYTQuMDkgNC4wOSAwIDAgMSA0LjA4NC00LjA4NiA0LjA5IDQuMDkgMCAwIDEgNC4wODYgNC4wODZ2Ny45bDEuMTA2IDEuNTg5di0yMy45NzdhNC4wOTEgNC4wOTEgMCAwIDEgNC4wODYtNC4wODQgNC4wODkgNC4wODkgMCAwIDEgNC4wODQgNC4wODR2NWE0LjA2MSA0LjA2MSAwIDAgMSAyLjA2LS41NTggNC4wNzYgNC4wNzYgMCAwIDEgMy4wNjkgMS4zOTQgNC4wODUgNC4wODUgMCAwIDEgMy4wNzMtMS4zOTQgNC4wODkgNC4wODkgMCAwIDEgMy45MjkgMi45NzIgNC4wNTcgNC4wNTcgMCAwIDEgMi4yMTItLjY1NCA0LjA5MiA0LjA5MiAwIDAgMSA0LjA4NiA0LjA4NnYyMy4zNDNhNC4wNzggNC4wNzggMCAwIDEtMS4zNjIgMy4wNDV2Ni44NDRhMS4wMTggMS4wMTggMCAwIDEtMS4wMTYgMS4wMTZ6bS0yMS4yLTIuMDM0aDIwLjE4MXYtNi4zMjRhMS4wMTkgMS4wMTkgMCAwIDEgLjQ1Mi0uODQ2IDIuMDQ2IDIuMDQ2IDAgMCAwIC45MS0xLjd2LTIzLjM0M2EyLjA1MyAyLjA1MyAwIDAgMC0yLjA1LTIuMDUgMi4wNTEgMi4wNTEgMCAwIDAtMi4wNDggMi4wNXY2LjhhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTkgMS4wMiAxLjAyNCAxLjAyNCAwIDAgMS0xLjAyNS0xLjAydi05LjEyMmEyLjA1MyAyLjA1MyAwIDAgMC0yLjA0OC0yLjA1MSAyLjA1NCAyLjA1NCAwIDAgMC0yLjA1MiAyLjA1MXY5LjEyMmExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNyAxLjAyIDEuMDI0IDEuMDI0IDAgMCAxLTEuMDI1LTEuMDJ2LTkuMTIyYTIuMDUyIDIuMDUyIDAgMCAwLTIuMDQ4LTIuMDUxIDIuMDU0IDIuMDU0IDAgMCAwLTIuMDUyIDIuMDUxdjkuMTIyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDIgMS4wMjYgMS4wMjYgMCAwIDEtMS4wMjctMS4wMnYtMTcuNjUyYTIuMDQ5IDIuMDQ5IDAgMCAwLTIuMDQ4LTIuMDQ4IDIuMDQ5IDIuMDQ5IDAgMCAwLTIuMDQ4IDIuMDQ4djI3LjIxOWExLjAyMSAxLjAyMSAwIDAgMS0uNzE0Ljk3MiAxLjAxOSAxLjAxOSAwIDAgMS0xLjE0LS4zODlsLTMuMTQyLTQuNTEyYTEuMDE3IDEuMDE3IDAgMCAxLS4xODQtLjU4M3YtOC4yMTdhMi4wNTEgMi4wNTEgMCAwIDAtMi4wNS0yLjA1IDIuMDUyIDIuMDUyIDAgMCAwLTIuMDQ4IDIuMDV2MTIuMDcyYTIuMDE4IDIuMDE4IDAgMCAwIC42ODYgMS41MTUgMS4xIDEuMSAwIDAgMSAuMTgyLjIxNmw5LjE2MyAxMS4zOWExLjAxNyAxLjAxNyAwIDAgMSAuMjI2LjYzNXoiLz4KICAgICAgPHBhdGggZD0iTTEzMDMuNzkzIDc3NS45OTJoLTI0Ljc1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3LTEuMDE3di0xMC43OTRhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTctMS4wMTZoMjQuNzVhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTkgMS4wMTZ2MTAuNzk0YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5IDEuMDE3em0tMjMuNzMxLTIuMDM0aDIyLjcxNHYtOC43NmgtMjIuNzE0eiIvPgogICAgICA8cGF0aCBkPSJNMTI4MS43ODIgNzY0LjE4NGgyLjAzNnYxMC43OTRoLTIuMDM2ek0xMjg1LjEwNCA3NjcuNTE2aDMuMTI1djIuMDM2aC0zLjEyNXpNMTI1Ni42MTYgNzA3LjgwMmgzMy4zNnYyLjAzNmgtMzMuMzZ6TTEyNTYuNjE2IDcxMi44OTFoMzMuMzZ2Mi4wMzZoLTMzLjM2ek0xMjU2LjYxNiA3MTcuOTgyaDIyLjYxNnYyLjAzNWgtMjIuNjE2ek0xMjU2LjYxNiA3MjMuMDdoMjIuNzg5djIuMDM2aC0yMi43ODl6TTEyNTYuNjE2IDcyOC4xNjFoMjIuNjE2djIuMDM2aC0yMi42MTZ6TTEyNTYuNjE2IDczMy4yNTFoMTMuMzM4djIuMDM2aC0xMy4zMzh6TTEyODUuMTU5IDcxNy45ODJoNC44MTZ2Mi4wMzVoLTQuODE2ek0xMjcwLjIyIDY5NC44ODNoNi4xNTF2Mi4wMzZoLTYuMTUxeiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xNjUyLjM2NSA3NDkuMzQ5YTcuNDM0IDcuNDM0IDAgMCAxLTcuNDI2LTcuNDI2di0xOC40YTcuNDM0IDcuNDM0IDAgMCAxIDcuNDI2LTcuNDI1IDcuNDM1IDcuNDM1IDAgMCAxIDcuNDI2IDcuNDI1djE4LjRhNy40MzQgNy40MzQgMCAwIDEtNy40MjYgNy40MjZ6bTAtMzEuMjFhNS40IDUuNCAwIDAgMC01LjM5IDUuMzg5djE4LjRhNS40IDUuNCAwIDAgMCA1LjM5IDUuMzkgNS40IDUuNCAwIDAgMCA1LjM5LTUuMzl2LTE4LjRhNS40IDUuNCAwIDAgMC01LjM5LTUuMzkzeiIvPgogICAgICA8cGF0aCBkPSJNMTY0NS45NTYgNzQzLjQ3NmE3LjI2NCA3LjI2NCAwIDAgMS03LjI1Ni03LjI1NnYtNi45OTRhNy4yNjQgNy4yNjQgMCAwIDEgNy4yNTYtNy4yNTZoLjA4N2EuOTU2Ljk1NiAwIDAgMSAuNzIuMzI5IDEgMSAwIDAgMSAuMjM2Ljc3NWMtLjAxNC4xNDctLjAyNC4zLS4wMjQuNDQ4djE4LjRjMCAuMTUxLjAxLjMuMDI0LjQ0OGExLjAzMyAxLjAzMyAwIDAgMS0uMjY0Ljc3NiAxLjAyNCAxLjAyNCAwIDAgMS0uNzUxLjMyOXptLTEuMDE3LTE5LjM4YTUuMjMzIDUuMjMzIDAgMCAwLTQuMiA1LjEyOXY2Ljk5NGE1LjIzIDUuMjMgMCAwIDAgNC4yIDUuMTIxek0xNjUxLjM0NyA3MTcuMTE3aDIuMDM1djE1LjYwNWgtMi4wMzV6TTE2NTEuMzQ3IDczOC40NDdoMi4wMzV2OS44ODFoLTIuMDM1ek0xNzA0LjE1MSA3NDkuMzQ5YTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI4LTcuNDI2di0xOC40YTcuNDM1IDcuNDM1IDAgMCAxIDcuNDI4LTcuNDI1IDcuNDM1IDcuNDM1IDAgMCAxIDcuNDI2IDcuNDI1djE4LjRhNy40MzQgNy40MzQgMCAwIDEtNy40MjYgNy40MjZ6bTAtMzEuMjFhNS40IDUuNCAwIDAgMC01LjM5MiA1LjM4OXYxOC40YTUuNCA1LjQgMCAwIDAgNS4zOTIgNS4zOSA1LjQgNS40IDAgMCAwIDUuMzktNS4zOXYtMTguNGE1LjQgNS40IDAgMCAwLTUuMzktNS4zOTN6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNzEwLjU1OCA3NDMuNDc1aC0uMDg3YS45NTEuOTUxIDAgMCAxLS43MTgtLjMyNy45OTMuOTkzIDAgMCAxLS4yMzYtLjc3MmMuMDEyLS4xNDkuMDI0LS4zLjAyNC0uNDUzdi0xOC40YzAtLjE1MS0uMDEyLS4zLS4wMjQtLjQ1MmExLjAwNyAxLjAwNyAwIDAgMSAuMjY2LS43NzIuOTkyLjk5MiAwIDAgMSAuNzUxLS4zMjkgNy4yNjggNy4yNjggMCAwIDEgNy4yODEgNy4yNTR2Ni45OTVhNy4yNjQgNy4yNjQgMCAwIDEtNy4yNTcgNy4yNTZ6bTEuMDE5LTE5LjM3MXYxNy4yMzZhNS4yMzIgNS4yMzIgMCAwIDAgNC4yLTUuMTIxdi02Ljk5NWE1LjIzMSA1LjIzMSAwIDAgMC00LjItNS4xMnpNMTcwMy4xMzIgNzE3LjExN2gyLjAzNnYxNS42MDVoLTIuMDM2ek0xNzAzLjEzMiA3MzguNDQ3aDIuMDM2djkuODgxaC0yLjAzNnpNMTcwNS4yMDYgNzE3LjExNWgtMi4wMzZ2LTEuNzE3YTI0LjgxMiAyNC44MTIgMCAwIDAtMi44NzMtMTEuNTlsMS44LS45NTRhMjYuODU5IDI2Ljg1OSAwIDAgMSAzLjExMiAxMi41NDR6TTE2NTMuNjMgNzE3LjExNWgtMi4wMzR2LTEuNzE3YTI2Ljg2MyAyNi44NjMgMCAwIDEgMy4xMDktMTIuNTQ0bDEuOC45NTRhMjQuODI4IDI0LjgyOCAwIDAgMC0yLjg3NSAxMS41OXoiLz4KICAgICAgPHBhdGggZD0iTTE2NTguOTQ1IDcwNS4zNDhhMS4wNjMgMS4wNjMgMCAwIDEtLjI5Mi0uMDQzbC02LjYzMS0xLjk4M2ExLjAxMiAxLjAxMiAwIDAgMS0uNjQyLS41NzEgMS4wMTggMS4wMTggMCAwIDEgLjAyNC0uODYgMzAuMDczIDMwLjA3MyAwIDAgMSAyNy0xNi42ODkgMzAuMDc0IDMwLjA3NCAwIDAgMSAyNyAxNi42ODkgMS4wMjYgMS4wMjYgMCAwIDEgLjAyNi44NiAxLjAxNiAxLjAxNiAwIDAgMS0uNjQ0LjU3MWwtNi42MzMgMS45ODNhMS4wMjEgMS4wMjEgMCAwIDEtMS4xNzYtLjQ2OSAyMS40NDYgMjEuNDQ2IDAgMCAwLTE4LjU3MS0xMC44MTIgMjEuNDUxIDIxLjQ1MSAwIDAgMC0xOC41NzEgMTAuODEyIDEuMDIgMS4wMiAwIDAgMS0uODkuNTEyem0xOS40NTUtMTMuMzYxYTIzLjQ4OSAyMy40ODkgMCAwIDEgMTkuOTI1IDExLjEzOWw0LjY4My0xLjRhMjguMDMyIDI4LjAzMiAwIDAgMC0yNC42MDgtMTQuNDkgMjguMDI3IDI4LjAyNyAwIDAgMC0yNC42MDYgMTQuNDlsNC42ODMgMS40YTIzLjQ4OCAyMy40ODggMCAwIDEgMTkuOTIzLTExLjEzOXoiLz4KICAgICAgPHBhdGggZD0iTTE2NzguMjU5IDczNS42NTlhMTUuMiAxNS4yIDAgMCAxLTE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4Ny0xNS4xODcgMTUuMiAxNS4yIDAgMCAxIDE1LjE4NyAxNS4xODggMTUuMiAxNS4yIDAgMCAxLTE1LjE4NyAxNS4xODZ6bTAtMjguMzM3YTEzLjE2NSAxMy4xNjUgMCAwIDAtMTMuMTUxIDEzLjE1MSAxMy4xNjQgMTMuMTY0IDAgMCAwIDEzLjE1MSAxMy4xNSAxMy4xNjQgMTMuMTY0IDAgMCAwIDEzLjE1MS0xMy4xNSAxMy4xNjYgMTMuMTY2IDAgMCAwLTEzLjE1MS0xMy4xNTJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNjczLjQ3MiA3MjkuMjM2YTEuMDI0IDEuMDI0IDAgMCAxLS41MDktLjEzNyAxLjAyIDEuMDIgMCAwIDEtLjUwOS0uODgydi0xNS40ODVhMS4wMTUgMS4wMTUgMCAwIDEgLjUwOS0uODc5IDEuMDExIDEuMDExIDAgMCAxIDEuMDE5IDBsMTMuNDExIDcuNzQxYTEuMDI2IDEuMDI2IDAgMCAxIC41MDkuODgyIDEuMDIyIDEuMDIyIDAgMCAxLS41MDkuODgybC0xMy40MTEgNy43NDJhMS4wMiAxLjAyIDAgMCAxLS41MS4xMzZ6bTEuMDE5LTE0Ljc0MXYxMS45NThsMTAuMzU2LTUuOTc4ek0xNjcwLjgxNyA3NTkuODg2aC0xMy4wMjRhNi4zNzUgNi4zNzUgMCAwIDEtNi40NDUtNi4yODd2LTUuMjY5aDIuMDM0djUuMjY5YTQuMzM3IDQuMzM3IDAgMCAwIDQuNDExIDQuMjQ5aDEzLjAyM3oiLz4KICAgICAgPHBhdGggZD0iTTE2ODIuMzggNzYzLjIwM2gtOC4yNDVhNC4zNDEgNC4zNDEgMCAwIDEtNC4zMzQtNC4zMzcgNC4zMzkgNC4zMzkgMCAwIDEgNC4zMzQtNC4zMzVoOC4yNDVhNC4zNCA0LjM0IDAgMCAxIDQuMzM2IDQuMzM1IDQuMzQyIDQuMzQyIDAgMCAxLTQuMzM2IDQuMzM3em0tOC4yNDUtNi42MzhhMi4zIDIuMyAwIDAgMC0yLjMgMi4zIDIuMyAyLjMgMCAwIDAgMi4zIDIuM2g4LjI0NWEyLjMgMi4zIDAgMCAwIDIuMy0yLjMgMi4zIDIuMyAwIDAgMC0yLjMtMi4zeiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xNDQxLjY1MiA3NTIuMzM3aC03NC41NDNhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTl2LTkuMTUzYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE5aDc0LjU0M2ExLjAxOSAxLjAxOSAwIDAgMSAxLjAxNyAxLjAxOXY5LjE1M2ExLjAxOSAxLjAxOSAwIDAgMS0xLjAxNyAxLjAxOXptLTczLjUyOC0yLjAzNmg3Mi41MDl2LTcuMTE4aC03Mi41MDd6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xNDQxLjY1MiA3NDMuMTgzaC03NC41NDNhMS4wMTggMS4wMTggMCAwIDEtMS4wMTktMS4wMTd2LTM3LjI3YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDJoMTcuMjY1djIuMDM2aC0xNi4yNDh2MzUuMjM0aDcyLjUwOXYtMzUuMjM0aC0xNi4xMjd2LTIuMDM2aDE3LjE0NGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAydjM3LjI3YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE3ek0xNDEzLjE4NiA3NjMuNDE4bC0xLjgyMi0xMS4wOGgtMTMuOTY2bC0xLjgyIDExLjA4LTIuMDEtLjMyOCAxLjk2MS0xMS45MzRhMS4wMTkgMS4wMTkgMCAwIDEgMS0uODU0aDE1LjY5M2ExLjAxOSAxLjAxOSAwIDAgMSAxIC44NTRsMS45NjEgMTEuOTM0eiIvPgogICAgICA8cGF0aCBkPSJNMTM4Ni42OTcgNzYyLjIzN2gzNS4zN3YyLjAzNmgtMzUuMzd6TTEzNzEuMzM4IDcwMy44NzZoNTYuMDUydjIuMDM2aC01Ni4wNTJ6TTE0MTEuNjQxIDcyMi40MjRsLTcuNDIyIDIuMS00LjMyMSA2LjM3Ny0zLjczNS0xNy41NTF6TTE0MDUuMjU5IDcyOC40NjdsMi4zNzctMS43MTYgNC43NjIgNi41OTQtMi4zNzcgMS43MTd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTU2OS4xMzcgNzAuMjMyaC0xMi44OTRhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTd2LTU5LjA0YTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE3LTEuMDE2aDEyLjg5NGExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNyAxLjAxNnY1OS4wNGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxN3ptLTExLjg3Ny0yLjAzNmgxMC44NjN2LTU3SDU1Ny4yNnoiLz4KICAgICAgPHBhdGggZD0iTTU1Ni4yNDQgMTYuMTEzaDEzLjI1NXYyLjAzNmgtMTMuMjU1ek01NTYuMjQ0IDYxLjI5N2gxMy4yNTV2Mi4wMzZoLTEzLjI1NXpNNTk5LjQ5MSA3MC4yMzJhMS4wMDkgMS4wMDkgMCAwIDEtLjU2MS0uMTcgMS4wMTMgMS4wMTMgMCAwIDEtLjQzNi0uNjQ2TDU4Ni44IDExLjU0M2ExLjAxOCAxLjAxOCAwIDAgMSAuOC0xLjJsMTIuNjM4LTIuNTU1YTEuMDI3IDEuMDI3IDAgMCAxIC43NjUuMTQ5IDEuMDE4IDEuMDE4IDAgMCAxIC40MzQuNjQ4bDExLjY5NCA1Ny44N2ExLjAxOCAxLjAxOCAwIDAgMS0uOCAxLjJsLTEyLjYzOCAyLjU1NGEuOTc2Ljk3NiAwIDAgMS0uMjAyLjAyM3ptLTEwLjQ5My01OC4wODlsMTEuMjkgNTUuODczIDEwLjY0Mi0yLjE1Mi0xMS4yOS01NS44NzV6Ii8+CiAgICAgIDxwYXRoIGQ9Ik01ODguNzk3IDE3LjE5NWwxMi45OTUtMi42MTcuNDAyIDEuOTk1LTEyLjk5NSAyLjYxN3pNNTk3Ljc0NiA2MS40ODdsMTIuOTk0LTIuNjIyLjQwMyAxLjk5Ni0xMi45OTQgMi42MjJ6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik01ODcuNDUzIDYzLjMzMmgtMTIuODkxYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5LTEuMDE2di02LjMzNGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxOWgxMi44OTJhMS4wMTggMS4wMTggMCAwIDEgMS4wMTkgMS4wMTl2Ni4zMzRhMS4wMTggMS4wMTggMCAwIDEtMS4wMiAxLjAxNnptLTExLjg3NS0yLjAzNmgxMC44NTh2LTQuM2gtMTAuODU4ek01ODcuNDUzIDE4LjE0M2gtMTIuODkxYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5LTEuMDE3VjEwLjE3YTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE5LTEuMDE2aDEyLjg5MmExLjAxNiAxLjAxNiAwIDAgMSAxLjAxOSAxLjAxNnY2Ljk1NmExLjAxNyAxLjAxNyAwIDAgMS0xLjAyIDEuMDE3em0tMTEuODc1LTIuMDM0aDEwLjg1OHYtNC45MjFoLTEwLjg1OHoiLz4KICAgICAgICA8cGF0aCBkPSJNNTg3LjQ1MyA3MC4yMzJoLTEyLjg5MWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxN3YtNi45YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE5aDEyLjg5MmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxOXY2LjlhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMiAxLjAxN3ptLTExLjg3NS0yLjAzN2gxMC44NTh2LTQuODYzaC0xMC44NTh6TTU4Ny40NTMgNTYuOTk4aC0xMi44OTFhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTktMS4wMTdWMjMuMDY3YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE3aDEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOSAxLjAxN3YzMi45MTRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMiAxLjAxN3ptLTExLjg3NS0yLjAzNWgxMC44NThWMjQuMDg3aC0xMC44NTh6Ii8+CiAgICAgICAgPHBhdGggZD0iTTU4Ny40NTMgMjQuMDg2aC0xMi44OTFhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTlWMTcuMTNhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTktMS4wMTZoMTIuODkyYTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE5IDEuMDE2djUuOTM3YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDIgMS4wMTl6bS0xMS44NzUtMi4wMzZoMTAuODU4di0zLjloLTEwLjg1OHoiLz4KICAgICAgPC9nPgogICAgICA8cGF0aCBkPSJNNTQxLjMwNCA2OC4xOTZoNzkuNDA4djIuMDM2aC03OS40MDh6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTQ4Ni40OTYgNjcuMTM4aC03NC41NDVhMS4wMTggMS4wMTggMCAwIDEtMS4wMTktMS4wMTh2LTkuMTU1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE5aDc0LjU0NWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxOXY5LjE1NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxOHptLTczLjUyOC0yLjAzNmg3Mi41MDl2LTcuMTE5aC03Mi41MDl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik00ODYuNDk2IDU3Ljk4MmgtNzQuNTQ1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5LTEuMDE3VjE5LjY5NGExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAyaDE3LjI2NXYyLjAzN2gtMTYuMjQ4djM1LjIzNWg3Mi41MDlWMjAuNzExSDQ2OS4zNXYtMi4wMzdoMTcuMTQ2YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDJ2MzcuMjcxYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3ek00NTguMDI4IDc4LjIybC0xLjgyMi0xMS4wODJINDQyLjI0bC0xLjgyIDExLjA4Mi0yLjAxLS4zMzEgMS45NjEtMTEuOTM0YTEuMDE4IDEuMDE4IDAgMCAxIDEtLjg1NGgxNS42OTNhMS4wMTggMS4wMTggMCAwIDEgMSAuODU0bDEuOTYxIDExLjkzNHoiLz4KICAgICAgPHBhdGggZD0iTTQzMS41MzkgNzcuMDM2aDM1LjM3djIuMDM2aC0zNS4zN3oiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTQ2OS4zNDYgNTcuOTgxaC00MC4xM2ExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNy0xLjAxN1Y0LjAzOGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxN2gzMS45MTlhMS4wMTggMS4wMTggMCAwIDEgLjcyLjNsOC4yMTUgOC4yMTNhMS4wMjQgMS4wMjQgMCAwIDEgLjMuNzJ2NDQuNzFhMS4wMTggMS4wMTggMCAwIDEtMS4wMjQgMS4wMTd6bS0zOS4xMTUtMi4wMzVoMzguMXYtNDMuMjdsLTcuNjE4LTcuNjE4aC0zMC40Nzh6Ii8+CiAgICAgICAgPHBhdGggZD0iTTQ2OS4zNDcgMTMuMjcxaC04LjIxNWExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNy0xLjAxN1Y0LjAzOWExLjAyMSAxLjAyMSAwIDAgMSAuNjI4LS45NCAxLjAyMSAxLjAyMSAwIDAgMSAxLjExLjIyMmw4LjIxNSA4LjIxM2ExLjAyIDEuMDIgMCAwIDEgLjIyIDEuMTEgMS4wMTggMS4wMTggMCAwIDEtLjk0MS42Mjd6bS03LjItMi4wMzZoNC43NGwtNC43NC00LjczOXpNNDM1LjAyNCAxNi45MzloMjguNTE2djIuMDM2aC0yOC41MTZ6TTQzNS4wMjQgMjIuNDU1aDI4LjUxNnYyLjAzNWgtMjguNTE2ek00MzUuMDI0IDI3Ljk3MWgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNNDM1LjAyNCAzMy40ODVoMjguNTE2djIuMDM2aC0yOC41MTZ6TTQzNS4wMjQgMzkuMDAxaDI4LjUxNnYyLjAzNmgtMjguNTE2ek00MzUuMDI0IDQ0LjUxN2gxNy44NTN2Mi4wMzZoLTE3Ljg1M3oiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xODUuODY0IDc2LjM1NWExLjAxNiAxLjAxNiAwIDAgMS0uMzg5LS4wNzYgMS4wMTcgMS4wMTcgMCAwIDEtLjYzLS45NFY2NC44NTJhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTdoMTAuNDg1YTEuMDE5IDEuMDE5IDAgMCAxIC45NC42MjggMS4wMTYgMS4wMTYgMCAwIDEtLjIyMiAxLjExbC0xMC40ODUgMTAuNDg0YTEuMDA5IDEuMDA5IDAgMCAxLS43MTguMjk4em0xLjAxNy0xMC40ODR2Ny4wMWw3LjAxLTcuMDF6TTE4MS40NiA0Ni4xMDRhMS4wODggMS4wODggMCAwIDEtLjItLjAyMWwtOS4xNjUtMS44NTZhMS4wMTUgMS4wMTUgMCAwIDEtLjc3My0uNyAxLjAxOCAxLjAxOCAwIDAgMSAuMjU0LTEuMDE0bDI5LjI0LTI5LjI0N2ExLjAxNiAxLjAxNiAwIDAgMSAxLjQzOSAwbDUuNTEzIDUuNTExYTEuMDI1IDEuMDI1IDAgMCAxIC4zLjcyIDEuMDI3IDEuMDI3IDAgMCAxLS4zLjcyMWwtMjUuNTg3IDI1LjU4NGExLjAyOCAxLjAyOCAwIDAgMS0uNzIxLjMwMnptLTcuMTA1LTMuNWw2Ljc3MiAxLjM3IDI0LjQ4MS0yNC40NzktNC4wNzItNC4wNzJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xODMuMzE5IDU1LjI3MWEuOTg0Ljk4NCAwIDAgMS0uMjk1LS4wNDQgMS4wMjIgMS4wMjIgMCAwIDEtLjctLjc3M2wtMS44NTYtOS4xNjhhMS4wMTUgMS4wMTUgMCAwIDEgLjI3Ni0uOTJsMjUuNTg3LTI1LjU4N2ExLjAyNCAxLjAyNCAwIDAgMSAuNzItLjMgMS4wMjQgMS4wMjQgMCAwIDEgLjcyLjNsNS41MTEgNS41MTNhMS4wMTcgMS4wMTcgMCAwIDEgMCAxLjQzOGwtMjkuMjQxIDI5LjI0MWExLjAxIDEuMDEgMCAwIDEtLjcyMi4zem0tLjc1My05Ljg1NGwxLjM3NCA2Ljc3NCAyNy4xNzktMjcuMTgxLTQuMDcyLTQuMDcyeiIvPgogICAgICA8cGF0aCBkPSJNMTcwLjUyNSA1Ny4wOThhMS4wMTIgMS4wMTIgMCAwIDEtLjcyLS4zIDEuMDE5IDEuMDE5IDAgMCAxLS4yODktLjg2M2wxLjgzLTEyLjc5NGExLjAyMSAxLjAyMSAwIDAgMSAuNDItLjY4NiAxLjAxMyAxLjAxMyAwIDAgMSAuNzg1LS4xNjdsOS4xMDcgMS44YTEuMDIxIDEuMDIxIDAgMCAxIC44LjhsMS44NTYgOS4xNjdhMS4wMTYgMS4wMTYgMCAwIDEtLjE2NS43ODkgMS4wMTUgMS4wMTUgMCAwIDEtLjY4OC40MjJsLTEyLjc5NCAxLjgyOGExLjIyOCAxLjIyOCAwIDAgMS0uMTQyLjAwNHptMi42ODYtMTIuNjA1bC0xLjQ4NyAxMC4zODggMTAuMzgyLTEuNDg1LTEuNTA5LTcuNDQ0ek0yMTIuNTAxIDI1Ljk3YTEuMDE1IDEuMDE1IDAgMCAxLS43Mi0uM2wtMTAuOTY1LTEwLjk2NmExLjAwOCAxLjAwOCAwIDAgMS0uMy0uNzE5IDEuMDIgMS4wMiAwIDAgMSAuMy0uNzJsMi43ODktMi43OTFhMS4wMjIgMS4wMjIgMCAwIDEgLjcyLS4zIDEuMDIyIDEuMDIyIDAgMCAxIC43Mi4zbDEwLjk2NSAxMC45NjhhMS4wMTcgMS4wMTcgMCAwIDEgMCAxLjQzOWwtMi43ODkgMi43ODlhMS4wMTUgMS4wMTUgMCAwIDEtLjcyLjN6bS05LjUyNy0xMS45ODNsOS41MjcgOS41MjUgMS4zNDgtMS4zNDgtOS41MjQtOS41Mjd6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0yMTUuMjkgMjMuMTgxYTEuMDE2IDEuMDE2IDAgMCAxLS43Mi0uM2wtMTAuOTY4LTEwLjk2NGExLjAxOSAxLjAxOSAwIDAgMSAwLTEuNDRsMi41LTIuNWE0LjE1NyA0LjE1NyAwIDAgMSAyLjk2Mi0xLjIxNyA0LjI4MSA0LjI4MSAwIDAgMSAzLjA0NyAxLjI2M2w2LjM0OCA2LjM1YTQuMjUyIDQuMjUyIDAgMCAxIC4wNDggNi4wMDhsLTIuNSAyLjVhMS4wMTYgMS4wMTYgMCAwIDEtLjcxNy4zem0tOS41MjctMTEuOTg0bDkuNTI3IDkuNTI2IDEuNzgyLTEuNzgxYTIuMjE3IDIuMjE3IDAgMCAwLS4wNDgtMy4xMjhsLTYuMzQ4LTYuMzQ4YTIuMjggMi4yOCAwIDAgMC0zLjEzMi0uMDQ4ek0xNzAuNTkyIDUxLjNsMS40NC0xLjQ0IDQuODQ0IDQuODQ0LTEuNDQgMS40NHoiLz4KICAgICAgPHBhdGggZD0iTTE4NS44NjQgNzYuMzU1aC00MC43NDVhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTdWNy43NzlhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTdoNTEuMjMxYTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE3djExLjM5MmExLjAxMSAxLjAxMSAwIDAgMS0uMy43MTlsLTIzLjc1NCAyMy44NzQtMS41OSAxMS4xMTcgMTEuMTE1LTEuNTg5IDEyLjc5MS0xMi43OTNhMS4wMTUgMS4wMTUgMCAwIDEgMS4xMS0uMjIgMS4wMTUgMS4wMTUgMCAwIDEgLjYyOC45NFY2NC44NWExLjAxMyAxLjAxMyAwIDAgMS0uMy43MmwtMTAuNDg1IDEwLjQ4NWExLjAxMSAxLjAxMSAwIDAgMS0uNzE4LjN6bS0zOS43MjctMi4wMzZoMzkuM2w5LjktOS44ODVWNDMuNjhsLTExLjMgMTEuMjk0YTEuMDEzIDEuMDEzIDAgMCAxLS41NzUuMjg4bC0xMi43OTMgMS44MjhhMS4wMTQgMS4wMTQgMCAwIDEtLjg2NC0uMjg5IDEuMDE5IDEuMDE5IDAgMCAxLS4yODktLjg2M2wxLjgzLTEyLjc5M2ExLjAxMiAxLjAxMiAwIDAgMSAuMjg3LS41NzNsMjMuNzA0LTIzLjgyVjguNzk4aC00OS4yeiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik03MTguMjQ2IDY2LjE0OGgtMzcuNjlhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTktMS4wMThWMjcuNDM2YTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE5LTEuMDE2aDM3LjY5YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5IDEuMDE2VjY1LjEzYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE5IDEuMDE4em0tMzYuNjczLTIuMDM3aDM1LjY1N1YyOC40NDhoLTM1LjY1N3oiLz4KICAgICAgPHBhdGggZD0iTTcyNC42MTYgNzEuODVoLTUwLjQzMWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxOVY0LjkwOGExLjAyIDEuMDIgMCAwIDEgMS4wMTktMS4wMmg1MC40MzFhMS4wMiAxLjAyIDAgMCAxIDEuMDE5IDEuMDJ2NjUuOTIzYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5IDEuMDE5em0tNDkuNDE0LTIuMDM2aDQ4LjRWNS45MjZoLTQ4LjR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03MTcuNTMgMjMuMjMxaC0zNi4yNThhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTlWMTEuNzc5YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE5aDM2LjI1OGExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxOXYxMC40MzNhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTl6bS0zNS4yNDEtMi4wMzdoMzQuMjI0di04LjRoLTM0LjIyMnpNNjg4LjIxNSAyNy40MzRoMi4wMzZ2Ni44NTRoLTIuMDM2ek02ODguMjE1IDM3Ljk0aDIuMDM2djYuODUzaC0yLjAzNnpNNjgwLjU1NCAzNS4wOTZoNi44NTN2Mi4wMzZoLTYuODUzek02OTEuMDU5IDM1LjA5Nmg2LjUxOXYyLjAzNmgtNi41MTl6TTcwMS4xODQgMzUuMDk2aDYuNTU5djIuMDM2aC02LjU1OXpNNzExLjM5NCAzNS4wOTZoNi44NTN2Mi4wMzZoLTYuODUzek02ODAuNTU0IDQ1LjI2NWg2Ljg1M1Y0Ny4zaC02Ljg1M3pNNjkxLjA1OSA0NS4yNjVoNi41MTlWNDcuM2gtNi41MTl6TTcwMS4xODQgNDUuMjY1aDYuNTU5VjQ3LjNoLTYuNTU5ek03MTEuMzk0IDQ1LjI2NWg2Ljg1M1Y0Ny4zaC02Ljg1M3pNNjgwLjU1NCA1NS40MzFoNi44NTN2Mi4wMzZoLTYuODUzek02OTEuMDU5IDU1LjQzMWg2LjUxOXYyLjAzNmgtNi41MTl6TTY4OC4yMTUgNDcuNzcxaDIuMDM2djYuODUzaC0yLjAzNnpNNjg4LjIxNSA1OC4yNzZoMi4wMzZ2Ni44NTNoLTIuMDM2ek03MDEuMTg0IDU1LjQzMWg2LjU1OXYyLjAzNmgtNi41NTl6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik03MDguNTUgMjcuNDM0aDIuMDM2djYuODU0aC0yLjAzNnpNNzA4LjU1IDM3LjkzOWgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTcwOC41NSA0Ny43NzFoMi4wMzZ2Ni44NTNoLTIuMDM2ek03MDguNTUgNTguMjc1aDIuMDM2djYuODUzaC0yLjAzNnoiLz4KICAgICAgPC9nPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNNjk4LjM4MyAyNy40MzRoMi4wMzZ2Ni44NTRoLTIuMDM2ek02OTguMzgzIDM3LjkzOWgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTY5OC4zODQgNDcuNzcxaDIuMDM1djYuODUzaC0yLjAzNXpNNjk4LjM4NCA1OC4yNzVoMi4wMzV2Ni44NTNoLTIuMDM1eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTI4Ni4yNzYgNjQuMTQ1YTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI2LTcuNDI3VjM4LjMyNWE3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNi03LjQyOCA3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNiA3LjQyOHYxOC4zOTNhNy40MzUgNy40MzUgMCAwIDEtNy40MjYgNy40Mjd6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOTIgNS4zOTF2MTguMzkzYTUuNCA1LjQgMCAwIDAgNS4zOTIgNS4zOSA1LjQgNS40IDAgMCAwIDUuMzktNS4zOVYzOC4zMjVhNS40IDUuNCAwIDAgMC01LjM5LTUuMzkxeiIvPgogICAgICA8cGF0aCBkPSJNMjc5Ljg2NyA1OC4yNzFhNy4yNjMgNy4yNjMgMCAwIDEtNy4yNTYtNy4yNTR2LTdhNy4yNjUgNy4yNjUgMCAwIDEgNy4yNTYtNy4yNTdoLjA4N2EuOTU2Ljk1NiAwIDAgMSAuNzIuMzMgMSAxIDAgMCAxIC4yMzYuNzc0Yy0uMDE0LjE0OC0uMDI2LjMtLjAyNi40NXYxOC4zOTNjMCAuMTUxLjAxMi4zLjAyNi40NDhhMS4wMjcgMS4wMjcgMCAwIDEtLjI2Ni43NzcgMS4wMTQgMS4wMTQgMCAwIDEtLjc0OS4zMjl6TTI3OC44NSAzOC44OWE1LjIzNiA1LjIzNiAwIDAgMC00LjIgNS4xM3Y3YTUuMjI5IDUuMjI5IDAgMCAwIDQuMiA1LjEyek0yODUuMjU4IDMxLjkxNmgyLjAzNXYxNS42MDVoLTIuMDM1ek0yODUuMjU4IDUzLjI0NmgyLjAzNXY5Ljg4MWgtMi4wMzV6TTMzOC4wNjIgNjQuMTQ1YTcuNDM1IDcuNDM1IDAgMCAxLTcuNDI4LTcuNDI3VjM4LjMyNWE3LjQzNiA3LjQzNiAwIDAgMSA3LjQyOC03LjQyOCA3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNiA3LjQyOHYxOC4zOTNhNy40MzUgNy40MzUgMCAwIDEtNy40MjYgNy40Mjd6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOTIgNS4zOTF2MTguMzkzYTUuNCA1LjQgMCAwIDAgNS4zOTIgNS4zOSA1LjQgNS40IDAgMCAwIDUuMzg4LTUuMzlWMzguMzI1YTUuNCA1LjQgMCAwIDAtNS4zODgtNS4zOTF6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zNDQuNDY5IDU4LjI3aC0uMDg3YS45NTIuOTUyIDAgMCAxLS43MTgtLjMyNy45ODguOTg4IDAgMCAxLS4yMzYtLjc3M2MuMDEyLS4xNDkuMDIyLS4zLjAyMi0uNDUyVjM4LjMyNWMwLS4xNTMtLjAxLS4zLS4wMjItLjQ1NGExLjAwNyAxLjAwNyAwIDAgMSAuMjY2LS43NzIuOTkuOTkgMCAwIDEgLjc1MS0uMzI5IDcuMjY3IDcuMjY3IDAgMCAxIDcuMjgxIDcuMjU0djdhNy4yNjUgNy4yNjUgMCAwIDEtNy4yNTcgNy4yNDZ6bTEuMDE5LTE5LjM3MXYxNy4yMzdhNS4yMyA1LjIzIDAgMCAwIDQuMi01LjEydi03YTUuMjMxIDUuMjMxIDAgMCAwLTQuMi01LjExM3pNMzM3LjA0MiAzMS45MTZoMi4wMzZ2MTUuNjA1aC0yLjAzNnpNMzM3LjA0MiA1My4yNDZoMi4wMzZ2OS44ODFoLTIuMDM2eiIvPgogICAgICA8cGF0aCBkPSJNMzM5LjExNyAzMS45MTdoLTIuMDM2di0xLjcxOGEyNC44MjggMjQuODI4IDAgMCAwLTIuODczLTExLjU5MmwxLjgtLjk1NGEyNi44NjggMjYuODY4IDAgMCAxIDMuMTEyIDEyLjU0NnpNMjg3LjU0MSAzMS45MTdoLTIuMDM0di0xLjcxOGEyNi44NzQgMjYuODc0IDAgMCAxIDMuMTEtMTIuNTQ2bDEuOC45NTRhMjQuODYgMjQuODYgMCAwIDAtMi44NzMgMTEuNTkyeiIvPgogICAgICA8cGF0aCBkPSJNMjkyLjg1NyAyMC4xNDdhMS4wMjEgMS4wMjEgMCAwIDEtLjI5My0uMDQzbC02LjYzMS0xLjk4M2ExLjAwNyAxLjAwNyAwIDAgMS0uNjQyLS41NzEgMS4wMSAxLjAxIDAgMCAxIC4wMjQtLjg2IDMwLjA3NCAzMC4wNzQgMCAwIDEgMjctMTYuNjkxIDMwLjA3NyAzMC4wNzcgMCAwIDEgMjcgMTYuNjkxIDEuMDI0IDEuMDI0IDAgMCAxIC4wMjYuODYgMS4wMjUgMS4wMjUgMCAwIDEtLjY0NC41NzFsLTYuNjMzIDEuOTgzYTEuMDE5IDEuMDE5IDAgMCAxLTEuMTc2LS40NjkgMjEuNDQ2IDIxLjQ0NiAwIDAgMC0xOC41NzItMTAuODEyIDIxLjQ1MSAyMS40NTEgMCAwIDAtMTguNTcxIDEwLjgxMiAxLjAyMiAxLjAyMiAwIDAgMS0uODg4LjUxMnptMTkuNDU1LTEzLjM2MWEyMy40OTEgMjMuNDkxIDAgMCAxIDE5LjkyNSAxMS4xNGw0LjY4NC0xLjRhMjguMDMzIDI4LjAzMyAwIDAgMC0yNC42MDgtMTQuNDkgMjguMDI4IDI4LjAyOCAwIDAgMC0yNC42MDYgMTQuNDlsNC42ODQgMS40YTIzLjQ4OCAyMy40ODggMCAwIDEgMTkuOTI1LTExLjE0eiIvPgogICAgICA8cGF0aCBkPSJNMzEyLjE2OCA1MC40NTRhMTUuMiAxNS4yIDAgMCAxLTE1LjE4Ny0xNS4xODcgMTUuMjA1IDE1LjIwNSAwIDAgMSAxNS4xODctMTUuMTg3IDE1LjIwNSAxNS4yMDUgMCAwIDEgMTUuMTg3IDE1LjE4NyAxNS4yIDE1LjIgMCAwIDEtMTUuMTg3IDE1LjE4N3ptMC0yOC4zMzhhMTMuMTY2IDEzLjE2NiAwIDAgMC0xMy4xNTEgMTMuMTUxIDEzLjE2NCAxMy4xNjQgMCAwIDAgMTMuMTUxIDEzLjE1MSAxMy4xNjYgMTMuMTY2IDAgMCAwIDEzLjE1MS0xMy4xNTEgMTMuMTY3IDEzLjE2NyAwIDAgMC0xMy4xNTEtMTMuMTQ3eiIvPgogICAgICA8cGF0aCBkPSJNMzA3LjM4MyA0NC4wMzJhMS4wMTggMS4wMTggMCAwIDEtLjUwOC0uMTM3IDEuMDE2IDEuMDE2IDAgMCAxLS41MDktLjg4MlYyNy41MjhhMS4wMTUgMS4wMTUgMCAwIDEgLjUwOS0uODggMS4wMjIgMS4wMjIgMCAwIDEgMS4wMTkgMGwxMy40MDkgNy43NDFhMS4wMjMgMS4wMjMgMCAwIDEgLjUxMS44ODEgMS4wMTkgMS4wMTkgMCAwIDEtLjUxMS44ODJsLTEzLjQxNCA3Ljc0NGExLjAyIDEuMDIgMCAwIDEtLjUwNi4xMzZ6bTEuMDE5LTE0Ljc0djExLjk2bDEwLjM1Ni01Ljk4MXpNMzA0LjcyOCA3NC42ODVoLTEzLjAyNGE2LjM3NSA2LjM3NSAwIDAgMS02LjQ0NS02LjI4OHYtNS4yNjloMi4wMzR2NS4yNjlhNC4zMzggNC4zMzggMCAwIDAgNC40MTEgNC4yNWgxMy4wMjR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zMTYuMjkxIDc4LjAwMmgtOC4yNDFhNC4zNDEgNC4zNDEgMCAwIDEtNC4zMzQtNC4zMzcgNC4zMzkgNC4zMzkgMCAwIDEgNC4zMzQtNC4zMzVoOC4yNDVhNC4zNCA0LjM0IDAgMCAxIDQuMzM2IDQuMzM1IDQuMzQyIDQuMzQyIDAgMCAxLTQuMzQgNC4zMzd6bS04LjI0NS02LjYzN2EyLjMgMi4zIDAgMCAwLTIuMyAyLjMgMi4zIDIuMyAwIDAgMCAyLjMgMi4zaDguMjQ1YTIuMyAyLjMgMCAwIDAgMi4zLTIuMyAyLjMgMi4zIDAgMCAwLTIuMy0yLjN6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTc1LjU2NCA2Ny4xMzhIMS4wMTdBMS4wMTggMS4wMTggMCAwIDEgMCA2Ni4xMnYtOS4xNTVhMS4wMTggMS4wMTggMCAwIDEgMS4wMTctMS4wMTloNzQuNTQ3YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djkuMTU1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE4ek0yLjAzNiA2NS4xMDJoNzIuNTExdi03LjExOUgyLjAzNnoiLz4KICAgICAgPHBhdGggZD0iTTc1LjU2NCA1Ny45ODJIMS4wMTdBMS4wMTYgMS4wMTYgMCAwIDEgMCA1Ni45NjVWMTkuNjk0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDJoMTcuMjY3djIuMDM3SDIuMDM2djM1LjIzNWg3Mi41MTFWMjAuNzExSDU4LjQxOHYtMi4wMzdoMTcuMTQ2YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDJ2MzcuMjcxYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3ek00Ny4wOTQgNzguMjJsLTEuODItMTEuMDgySDMxLjMwOEwyOS40ODYgNzguMjJsLTIuMDA4LS4zMzEgMS45NjEtMTEuOTM0YTEuMDE4IDEuMDE4IDAgMCAxIDEtLjg1NGgxNS42OTlhMS4wMTggMS4wMTggMCAwIDEgMSAuODU0bDEuOTYxIDExLjkzNHoiLz4KICAgICAgPHBhdGggZD0iTTIwLjYwNyA3Ny4wMzZoMzUuMzd2Mi4wMzZoLTM1LjM3ek01LjI0NyAxOC42NzVoNTYuMDUydjIuMDM2SDUuMjQ3ek00NS41NSAzNy4yMjNsLTcuNDIyIDIuMS00LjMyMSA2LjM3Ni0zLjczNS0xNy41NTF6TTM5LjE2OCA0My4yNjZsMi4zNzctMS43MTYgNC43NjIgNi41OTQtMi4zNzcgMS43MTd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTEwMC42NjkgMjAyLjIyM0g4Ny43NzdhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMnYtNTkuMDRhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTctMS4wMTZoMTIuODkyYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5IDEuMDE2djU5LjA0YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5IDEuMDJ6bS0xMS44NzUtMi4wMzVoMTAuODU4di01N0g4OC43OTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik04Ny43NzcgMTQ4LjEwNGgxMy4yNTV2Mi4wMzZIODcuNzc3ek04Ny43NzcgMTkzLjI4OGgxMy4yNTV2Mi4wMzZIODcuNzc3ek0xMzEuMDI4IDIwMi4yMjRhMSAxIDAgMCAxLS41NjMtLjE3MiAxLjAyIDEuMDIgMCAwIDEtLjQzNi0uNjQ2bC0xMS42OTItNTcuODY5YTEuMDE4IDEuMDE4IDAgMCAxIC44LTEuMmwxMi42MzgtMi41NTNhMS4wMDcgMS4wMDcgMCAwIDEgLjc2My4xNDkgMS4wMDkgMS4wMDkgMCAwIDEgLjQzNi42NDZsMTEuNjkyIDU3Ljg3MWExLjAxNiAxLjAxNiAwIDAgMS0uOCAxLjJsLTEyLjYzOCAyLjU1MWExLjAxMyAxLjAxMyAwIDAgMS0uMi4wMjN6bS0xMC41LTU4LjA5NGwxMS4yOSA1NS44NzYgMTAuNjQyLTIuMTUxLTExLjI5LTU1Ljg3NnoiLz4KICAgICAgPHBhdGggZD0iTTEyMC4zMyAxNDkuMTg2bDEyLjk5NS0yLjYxNy40MDIgMS45OTUtMTIuOTk1IDIuNjE3ek0xMjkuMjc4IDE5My40NzlsMTIuOTk0LTIuNjIyLjQwMyAxLjk5Ni0xMi45OTQgMi42MjJ6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMTguOTg3IDE5NS4zMjJoLTEyLjg5MmExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtNi4zMzJhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMmgxMi44OTJhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMnY2LjMzMmExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNyAxLjAxN3ptLTExLjg3NS0yLjAzM2gxMC44NTZ2LTQuM2gtMTAuODU2ek0xMTguOTg3IDE1MC4xMzloLTEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtNi45NTZhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTZoMTIuODkyYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE2djYuOTU2YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE5em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC45MmgtMTAuODU2eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTguOTg3IDIwMi4yMjVoLTEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtNi45YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE3aDEyLjg5MmExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNyAxLjAxN3Y2LjlhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTl6bS0xMS44NzUtMi4wMzZoMTAuODU2di00Ljg2NmgtMTAuODU2ek0xMTguOTg3IDE4OC45OTFoLTEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxN1YxNTUuMDZhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMThoMTIuODkyYTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE4djMyLjkxNGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxN3ptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTMwLjg3OGgtMTAuODU2eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTguOTg3IDE1Ni4wNzdoLTEyLjg5MmExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtNS45MzhhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTdoMTIuODkyYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE3djUuOTM4YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3em0tMTEuODc1LTIuMDM0aDEwLjg1NnYtMy45aC0xMC44NTZ6Ii8+CiAgICAgIDwvZz4KICAgICAgPHBhdGggZD0iTTcyLjgzNyAyMDAuMTg3aDc5LjQwOHYyLjAzNkg3Mi44Mzd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTI0OS43OCAxOTguMTM3aC0zNy42OTJhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTctMS4wMTd2LTM3LjY5MWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxOWgzNy42OTJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMS4wMTl2MzcuNjk0YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE0em0tMzYuNjczLTIuMDM2aDM1LjY1NnYtMzUuNjU4aC0zNS42NTZ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0yNTYuMTUgMjAzLjg0aC01MC40MzFhMS4wMTggMS4wMTggMCAwIDEtMS4wMTktMS4wMTd2LTY1LjkyNWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxN2g1MC40MzFhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTd2NjUuOTI1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE3em0tNDkuNDE0LTIuMDM2aDQ4LjR2LTYzLjg4N2gtNDguNHoiLz4KICAgICAgPHBhdGggZD0iTTI0OS4wNjQgMTU1LjIyMWgtMzYuMjU4YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE4di0xMC40MzRhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMThoMzYuMjU4YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE4djEwLjQzNGExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNyAxLjAxOHptLTM1LjI0MS0yLjAzNWgzNC4yMjJ2LTguNGgtMzQuMjIyek0yMTkuNzQ4IDE1OS40MjVoMi4wMzZ2Ni44NTRoLTIuMDM2ek0yMTkuNzQ4IDE2OS45MzFoMi4wMzZ2Ni44NTNoLTIuMDM2ek0yMTIuMDg3IDE2Ny4wODdoNi44NTN2Mi4wMzZoLTYuODUzek0yMjIuNTkyIDE2Ny4wODdoNi41MTl2Mi4wMzZoLTYuNTE5ek0yMzIuNzE3IDE2Ny4wODdoNi41NTl2Mi4wMzZoLTYuNTU5ek0yNDIuOTI3IDE2Ny4wODdoNi44NTN2Mi4wMzZoLTYuODUzek0yMTIuMDg3IDE3Ny4yNTZoNi44NTN2Mi4wMzVoLTYuODUzek0yMjIuNTkyIDE3Ny4yNTZoNi41MTl2Mi4wMzVoLTYuNTE5ek0yMzIuNzE3IDE3Ny4yNTZoNi41NTl2Mi4wMzVoLTYuNTU5ek0yNDIuOTI3IDE3Ny4yNTZoNi44NTN2Mi4wMzVoLTYuODUzek0yMTIuMDg3IDE4Ny40MjJoNi44NTN2Mi4wMzZoLTYuODUzek0yMjIuNTkyIDE4Ny40MjJoNi41MTl2Mi4wMzZoLTYuNTE5ek0yMTkuNzQ4IDE3OS43NjJoMi4wMzZ2Ni44NTNoLTIuMDM2ek0yMTkuNzQ4IDE5MC4yNjdoMi4wMzZ2Ni44NTNoLTIuMDM2ek0yMzIuNzE3IDE4Ny40MjJoNi41NTl2Mi4wMzZoLTYuNTU5eiIvPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMjQwLjA4NCAxNTkuNDI1aDIuMDM2djYuODU0aC0yLjAzNnpNMjQwLjA4NCAxNjkuOTNoMi4wMzZ2Ni44NTNoLTIuMDM2ek0yNDAuMDg0IDE3OS43NjJoMi4wMzZ2Ni44NTNoLTIuMDM2ek0yNDAuMDg0IDE5MC4yNjdoMi4wMzZ2Ni44NTNoLTIuMDM2eiIvPgogICAgICA8L2c+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0yMjkuOTE2IDE1OS40MjVoMi4wMzZ2Ni44NTRoLTIuMDM2ek0yMjkuOTE2IDE2OS45M2gyLjAzNnY2Ljg1M2gtMi4wMzZ6TTIyOS45MTcgMTc5Ljc2MmgyLjAzNXY2Ljg1M2gtMi4wMzV6TTIyOS45MTcgMTkwLjI2N2gyLjAzNXY2Ljg1M2gtMi4wMzV6Ii8+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNTY5LjEzNyAzNDYuODM0aC0xMi44OTRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTZ2LTU5LjA0MWExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNy0xLjAxNmgxMi44OTRhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTcgMS4wMTZ2NTkuMDQxYTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDE2em0tMTEuODc3LTIuMDM2aDEwLjg2M3YtNTdINTU3LjI2eiIvPgogICAgICA8cGF0aCBkPSJNNTU2LjI0NCAyOTIuNzE2aDEzLjI1NXYyLjAzNmgtMTMuMjU1ek01NTYuMjQ0IDMzNy45aDEzLjI1NXYyLjAzNmgtMTMuMjU1ek01OTkuNDkxIDM0Ni44MzVhMSAxIDAgMCAxLS41NjEtLjE3IDEuMDA3IDEuMDA3IDAgMCAxLS40MzYtLjY0NUw1ODYuOCAyODguMTQ4YTEuMDE4IDEuMDE4IDAgMCAxIC44LTEuMmwxMi42MzgtMi41NTRhMS4wMSAxLjAxIDAgMCAxIC43NjUuMTUxIDEuMDEgMS4wMSAwIDAgMSAuNDM0LjY0NmwxMS42OTQgNTcuODcyYTEuMDIgMS4wMiAwIDAgMS0uOCAxLjJsLTEyLjYzOCAyLjU1MmEuOTc1Ljk3NSAwIDAgMS0uMjAyLjAyem0tMTAuNDkzLTU4LjA5MWwxMS4yOSA1NS44NzQgMTAuNjQyLTIuMTQ5LTExLjI5LTU1Ljg3NnoiLz4KICAgICAgPHBhdGggZD0iTTU4OC43OTcgMjkzLjc5OWwxMi45OTUtMi42MTcuNDAyIDEuOTk1LTEyLjk5NSAyLjYxN3pNNTk3Ljc0NiAzMzguMDkybDEyLjk5NC0yLjYyMi40MDMgMS45OTYtMTIuOTk0IDIuNjIyeiIvPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNNTg3LjQ1MyAzMzkuOTM1aC0xMi44OTFhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTktMS4wMTZ2LTYuMzM1YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE3aDEyLjg5MmExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOSAxLjAxN3Y2LjMzNWExLjAxNyAxLjAxNyAwIDAgMS0xLjAyIDEuMDE2em0tMTEuODc1LTIuMDM2aDEwLjg1OHYtNC4zaC0xMC44NTh6TTU4Ny40NTMgMjk0Ljc1M2gtMTIuODkxYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDJ2LTYuOTU2YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE2aDEyLjg5MmExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOSAxLjAxNnY2Ljk1NmExLjAxOSAxLjAxOSAwIDAgMS0xLjAyIDEuMDJ6bS0xMS44NzUtMi4wMzZoMTAuODU4di00LjkyMmgtMTAuODU4eiIvPgogICAgICAgIDxwYXRoIGQ9Ik01ODcuNDUzIDM0Ni44MzRoLTEyLjg5MWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxN3YtNi45YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE5aDEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOSAxLjAxOXY2LjlhMS4wMTggMS4wMTggMCAwIDEtMS4wMiAxLjAxN3ptLTExLjg3NS0yLjAzNmgxMC44NTh2LTQuODYzaC0xMC44NTh6TTU4Ny40NTMgMzMzLjYwM2gtMTIuODkxYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di0zMi45MWExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWgxMi44OTJhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTkgMS4wMTl2MzIuOTEyYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDIgMS4wMTd6bS0xMS44NzUtMi4wMzZoMTAuODU4di0zMC44NzhoLTEwLjg1OHoiLz4KICAgICAgICA8cGF0aCBkPSJNNTg3LjQ1MyAzMDAuNjloLTEyLjg5MWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOHYtNS45MzhhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTdoMTIuODkyYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5IDEuMDE3djUuOTM4YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDIgMS4wMTh6bS0xMS44NzUtMi4wMzdoMTAuODU4di0zLjloLTEwLjg1OHoiLz4KICAgICAgPC9nPgogICAgICA8cGF0aCBkPSJNNTQxLjMwNCAzNDQuOGg3OS40MDh2Mi4wMzZoLTc5LjQwOHoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNDg2LjQ5NiAzNDMuNzQyaC03NC41NDVhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTktMS4wMTd2LTkuMTU2YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE3aDc0LjU0NWExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxN3Y5LjE1NmExLjAxNiAxLjAxNiAwIDAgMS0xLjAxNyAxLjAxN3ptLTczLjUyOC0yLjAzNGg3Mi41MDl2LTcuMTE4aC03Mi41MDl6Ii8+CiAgICAgIDxwYXRoIGQ9Ik00ODYuNDk2IDMzNC41ODloLTc0LjU0NWExLjAxOSAxLjAxOSAwIDAgMS0xLjAxNS0xLjAxNnYtMzcuMjcxYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE5aDE3LjI2MXYyLjAzNmgtMTYuMjQ4djM1LjIzN2g3Mi41MDl2LTM1LjIzN0g0NjkuMzV2LTIuMDM2aDE3LjE0NmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxOXYzNy4yNzFhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTZ6TTQ1OC4wMjggMzU0LjgyM2wtMS44MjItMTEuMDgySDQ0Mi4yNGwtMS44MiAxMS4wODItMi4wMS0uMzMxIDEuOTYxLTExLjkzNGExLjAxNyAxLjAxNyAwIDAgMSAxLS44NTFoMTUuNjkzYTEuMDE3IDEuMDE3IDAgMCAxIDEgLjg1MWwxLjk2MSAxMS45MzR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik00MzEuNTM5IDM1My42NDFoMzUuMzd2Mi4wMzZoLTM1LjM3eiIvPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNNDY5LjM0NiAzMzQuNTg5aC00MC4xM2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtNTIuOTI0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDE5aDMxLjkxOWExLjAxNSAxLjAxNSAwIDAgMSAuNzIuM2w4LjIxNSA4LjIxMmExLjAyNiAxLjAyNiAwIDAgMSAuMy43MjF2NDQuNzFhMS4wMiAxLjAyIDAgMCAxLTEuMDI0IDEuMDE5em0tMzkuMTE1LTIuMDM2aDM4LjF2LTQzLjI3NmwtNy42MTgtNy42MThoLTMwLjQ3OHoiLz4KICAgICAgICA8cGF0aCBkPSJNNDY5LjM0NyAyODkuODc3aC04LjIxNWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtOC4yMTRhMS4wMTggMS4wMTggMCAwIDEgLjYyOC0uOTQgMS4wMTQgMS4wMTQgMCAwIDEgMS4xMS4yMmw4LjIxNSA4LjIxM2ExLjAyMSAxLjAyMSAwIDAgMSAuMjIgMS4xMSAxLjAxOCAxLjAxOCAwIDAgMS0uOTQxLjYzem0tNy4yLTIuMDM4aDQuNzRsLTQuNzQtNC43Mzd6TTQzNS4wMjQgMjkzLjU0NGgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNNDM1LjAyNCAyOTkuMDZoMjguNTE2djIuMDM1aC0yOC41MTZ6TTQzNS4wMjQgMzA0LjU3NmgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNNDM1LjAyNCAzMTAuMDloMjguNTE2djIuMDM2aC0yOC41MTZ6TTQzNS4wMjQgMzE1LjYwNmgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNNDM1LjAyNCAzMjEuMTIyaDE3Ljg1M3YyLjAzNmgtMTcuODUzeiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE4NS44NjQgMzUyLjk1OWExLjAwNyAxLjAwNyAwIDAgMS0uMzg5LS4wNzcgMS4wMTcgMS4wMTcgMCAwIDEtLjYzLS45NDF2LTEwLjQ4NGExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAyaDEwLjQ4NWExLjAxOCAxLjAxOCAwIDAgMSAuOTQuNjI5IDEuMDE1IDEuMDE1IDAgMCAxLS4yMjIgMS4xMDhsLTEwLjQ4NSAxMC40ODVhMS4wMSAxLjAxIDAgMCAxLS43MTguM3ptMS4wMTctMTAuNDg1djcuMDFsNy4wMS03LjAxek0xODEuNDYgMzIyLjcwN2EuOTkyLjk5MiAwIDAgMS0uMi0uMDJsLTkuMTY1LTEuODU3YTEuMDE0IDEuMDE0IDAgMCAxLS43NzMtLjcgMS4wMjEgMS4wMjEgMCAwIDEgLjI1NC0xLjAxNWwyOS4yNDEtMjkuMjQyYTEuMDE3IDEuMDE3IDAgMCAxIDEuNDM5IDBsNS41MTMgNS41MTRhMS4wMTggMS4wMTggMCAwIDEgLjMuNzE3IDEuMDI3IDEuMDI3IDAgMCAxLS4zLjcyMWwtMjUuNTg3IDI1LjU4NWExLjAxOSAxLjAxOSAwIDAgMS0uNzIyLjI5N3ptLTcuMTA1LTMuNWw2Ljc3MiAxLjM3IDI0LjQ4MS0yNC40NzktNC4wNzItNC4wNzF6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xODMuMzE5IDMzMS44NzVhLjk5Mi45OTIgMCAwIDEtLjI5NS0uMDQ0IDEuMDE2IDEuMDE2IDAgMCAxLS43LS43NzFsLTEuODU2LTkuMTY3YTEuMDE4IDEuMDE4IDAgMCAxIC4yNzYtLjkyM2wyNS41ODctMjUuNTg0YTEuMDE2IDEuMDE2IDAgMCAxIC43Mi0uMyAxLjAxNiAxLjAxNiAwIDAgMSAuNzIuM2w1LjUxMSA1LjUxYTEuMDE3IDEuMDE3IDAgMCAxIDAgMS40MzhsLTI5LjI0NSAyOS4yNDFhMS4wMTEgMS4wMTEgMCAwIDEtLjcxOC4zem0tLjc1My05Ljg1M2wxLjM3NCA2Ljc3MyAyNy4xNzktMjcuMTc5LTQuMDcyLTQuMDcyeiIvPgogICAgICA8cGF0aCBkPSJNMTcwLjUyNSAzMzMuNzAzYTEuMDExIDEuMDExIDAgMCAxLS43Mi0uMyAxLjAyIDEuMDIgMCAwIDEtLjI4OS0uODYzbDEuODMtMTIuNzkzYTEuMDIzIDEuMDIzIDAgMCAxIC40Mi0uNjg3IDEuMDE5IDEuMDE5IDAgMCAxIC43ODUtLjE2N2w5LjEwNyAxLjhhMS4wMTUgMS4wMTUgMCAwIDEgLjguNzk0bDEuODU2IDkuMTY3YTEuMDE0IDEuMDE0IDAgMCAxLS4xNjUuNzg5IDEuMDE4IDEuMDE4IDAgMCAxLS42ODguNDIybC0xMi43OTQgMS44MjhhLjgzMi44MzIgMCAwIDEtLjE0Mi4wMXptMi42ODYtMTIuNmwtMS40ODcgMTAuMzg2IDEwLjM4Mi0xLjQ4My0xLjUwOS03LjQ0NnpNMjEyLjUwMSAzMDIuNTc1YTEuMDIxIDEuMDIxIDAgMCAxLS43Mi0uM2wtMTAuOTY1LTEwLjk2OGExLjAwOCAxLjAwOCAwIDAgMS0uMy0uNzE3IDEuMDE4IDEuMDE4IDAgMCAxIC4zLS43MjFsMi43ODktMi43ODlhMS4wMTkgMS4wMTkgMCAwIDEgLjcyLS4zIDEuMDE5IDEuMDE5IDAgMCAxIC43Mi4zbDEwLjk2NSAxMC45NjVhMS4wMiAxLjAyIDAgMCAxIDAgMS40NDFsLTIuNzg5IDIuNzg5YTEuMDIxIDEuMDIxIDAgMCAxLS43Mi4zem0tOS41MjctMTEuOTgybDkuNTI3IDkuNTI2IDEuMzQ4LTEuMzUtOS41MjQtOS41Mjd6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0yMTUuMjkgMjk5Ljc4N2ExLjAyNCAxLjAyNCAwIDAgMS0uNzItLjNsLTEwLjk2OC0xMC45NjVhMS4wMTYgMS4wMTYgMCAwIDEgMC0xLjQzOGwyLjUtMi41YTQuMTU4IDQuMTU4IDAgMCAxIDIuOTYyLTEuMjE3IDQuMjgyIDQuMjgyIDAgMCAxIDMuMDQ3IDEuMjY1bDYuMzQ4IDYuMzQ4YTQuMjUzIDQuMjUzIDAgMCAxIC4wNDggNi4wMDhsLTIuNSAyLjVhMS4wMjQgMS4wMjQgMCAwIDEtLjcxNy4yOTl6bS05LjUyNy0xMS45ODZsOS41MjcgOS41MjYgMS43ODItMS43OGEyLjIxOCAyLjIxOCAwIDAgMC0uMDQ4LTMuMTNsLTYuMzQ4LTYuMzQ4YTIuMjggMi4yOCAwIDAgMC0zLjEzMi0uMDQ5ek0xNzAuNTkyIDMyNy45MDRsMS40NC0xLjQ0IDQuODQ0IDQuODQ0LTEuNDQgMS40NHoiLz4KICAgICAgPHBhdGggZD0iTTE4NS44NjQgMzUyLjk2M2gtNDAuNzQ1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3LTEuMDE3di02Ny41NTlhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTctMS4wMTdoNTEuMjMxYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE3IDEuMDE3djExLjRhMS4wMDYgMS4wMDYgMCAwIDEtLjMuNzE3bC0yMy43NTcgMjMuODc1LTEuNTkgMTEuMTE1IDExLjExNS0xLjU4OCAxMi43OTEtMTIuNzkzYTEuMDE3IDEuMDE3IDAgMCAxIDEuMTEtLjIyIDEuMDE2IDEuMDE2IDAgMCAxIC42MjguOTR2MjMuNjM0YTEuMDEzIDEuMDEzIDAgMCAxLS4zLjcxOWwtMTAuNDgxIDEwLjQ3N2ExLjAwOSAxLjAwOSAwIDAgMS0uNzE5LjN6bS0zOS43MjctMi4wNGgzOS4zbDkuODktOS44ODh2LTIwLjc1NGwtMTEuMyAxMS4yOTRhMS4wMTUgMS4wMTUgMCAwIDEtLjU3NS4yODlsLTEyLjc5MyAxLjgyOGExLjAxMSAxLjAxMSAwIDAgMS0uODY0LS4yODkgMS4wMiAxLjAyIDAgMCAxLS4yODktLjg2M2wxLjgzLTEyLjc5M2ExLjAxNCAxLjAxNCAwIDAgMSAuMjg3LS41NzRsMjMuNzE0LTIzLjgxN3YtOS45NTRoLTQ5LjJ6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTcxOC4yNDYgMzQyLjc1aC0zNy42OWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtMzcuN2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOS0xLjAxN2gzNy42OWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxN3YzNy43YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5IDEuMDE3em0tMzYuNjczLTIuMDM2aDM1LjY1N3YtMzUuNjU4aC0zNS42NTd6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03MjQuNjE2IDM0OC40NTJoLTUwLjQzMWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxOHYtNjUuOTJhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMThoNTAuNDMxYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE4djY1LjkyM2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxNXptLTQ5LjQxNC0yLjAzNWg0OC40VjI4Mi41M2gtNDguNHoiLz4KICAgICAgPHBhdGggZD0iTTcxNy41MyAyOTkuODMzaC0zNi4yNThhMS4wMTggMS4wMTggMCAwIDEtMS4wMTktMS4wMTdWMjg4LjM4YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE3aDM2LjI1OGExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNyAxLjAxN3YxMC40MzVhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTcgMS4wMTh6bS0zNS4yNDEtMi4wMzZoMzQuMjI0di04LjRoLTM0LjIyMnpNNjg4LjIxNSAzMDQuMDM4aDIuMDM2djYuODU0aC0yLjAzNnpNNjg4LjIxNSAzMTQuNTQzaDIuMDM2djYuODUzaC0yLjAzNnpNNjgwLjU1NCAzMTEuNjk5aDYuODUzdjIuMDM2aC02Ljg1M3pNNjkxLjA1OSAzMTEuNjk5aDYuNTE5djIuMDM2aC02LjUxOXpNNzAxLjE4NCAzMTEuNjk5aDYuNTU5djIuMDM2aC02LjU1OXpNNzExLjM5NCAzMTEuNjk5aDYuODUzdjIuMDM2aC02Ljg1M3pNNjgwLjU1NCAzMjEuODY4aDYuODUzdjIuMDM1aC02Ljg1M3pNNjkxLjA1OSAzMjEuODY4aDYuNTE5djIuMDM1aC02LjUxOXpNNzAxLjE4NCAzMjEuODY4aDYuNTU5djIuMDM1aC02LjU1OXpNNzExLjM5NCAzMjEuODY4aDYuODUzdjIuMDM1aC02Ljg1M3pNNjgwLjU1NCAzMzIuMDM1aDYuODUzdjIuMDM2aC02Ljg1M3pNNjkxLjA1OSAzMzIuMDM1aDYuNTE5djIuMDM2aC02LjUxOXpNNjg4LjIxNSAzMjQuMzc1aDIuMDM2djYuODUzaC0yLjAzNnpNNjg4LjIxNSAzMzQuODc5aDIuMDM2djYuODUzaC0yLjAzNnpNNzAxLjE4NCAzMzIuMDM1aDYuNTU5djIuMDM2aC02LjU1OXoiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTcwOC41NSAzMDQuMDM4aDIuMDM2djYuODU0aC0yLjAzNnpNNzA4LjU1IDMxNC41NDNoMi4wMzZ2Ni44NTNoLTIuMDM2ek03MDguNTUgMzI0LjM3NWgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTcwOC41NSAzMzQuODc5aDIuMDM2djYuODUzaC0yLjAzNnoiLz4KICAgICAgPC9nPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNNjk4LjM4MyAzMDQuMDM4aDIuMDM2djYuODU0aC0yLjAzNnpNNjk4LjM4MyAzMTQuNTQzaDIuMDM2djYuODUzaC0yLjAzNnpNNjk4LjM4NCAzMjQuMzc1aDIuMDM1djYuODUzaC0yLjAzNXpNNjk4LjM4NCAzMzQuODc5aDIuMDM1djYuODUzaC0yLjAzNXoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0yODYuMjc2IDM0MC43NDlhNy40MzQgNy40MzQgMCAwIDEtNy40MjYtNy40MjZ2LTE4LjM5NGE3LjQzMyA3LjQzMyAwIDAgMSA3LjQyNi03LjQyNSA3LjQzMyA3LjQzMyAwIDAgMSA3LjQyNiA3LjQyNXYxOC4zOTRhNy40MzQgNy40MzQgMCAwIDEtNy40MjYgNy40MjZ6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOTIgNS4zOTJ2MTguMzk0YTUuNCA1LjQgMCAwIDAgNS4zOTIgNS4zODkgNS40IDUuNCAwIDAgMCA1LjM5LTUuMzg5VjMxNC45M2E1LjQgNS40IDAgMCAwLTUuMzktNS4zOTF6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0yNzkuODY3IDMzNC44NzlhNy4yNjQgNy4yNjQgMCAwIDEtNy4yNTYtNy4yNTV2LTdhNy4yNjIgNy4yNjIgMCAwIDEgNy4yNTYtNy4yNTRoLjA4N2EuOTU2Ljk1NiAwIDAgMSAuNzIuMzI4IDEgMSAwIDAgMSAuMjM2Ljc3NSA0LjgzIDQuODMgMCAwIDAtLjAyNi40NTF2MTguMzkzYzAgLjE1My4wMTIuMy4wMjYuNDVhMS4wMjUgMS4wMjUgMCAwIDEtLjI2Ni43NzUgMS4wMTYgMS4wMTYgMCAwIDEtLjc0OS4zMzF6bS0xLjAxNy0xOS4zOGE1LjIzNiA1LjIzNiAwIDAgMC00LjIgNS4xM3Y3YTUuMjI5IDUuMjI5IDAgMCAwIDQuMiA1LjEyek0yODUuMjU4IDMwOC41MjFoMi4wMzV2MTUuNjA1aC0yLjAzNXpNMjg1LjI1OCAzMjkuODVoMi4wMzV2OS44ODFoLTIuMDM1ek0zMzguMDYyIDM0MC43NDlhNy40MzQgNy40MzQgMCAwIDEtNy40MjgtNy40MjZ2LTE4LjM5NGE3LjQzMyA3LjQzMyAwIDAgMSA3LjQyOC03LjQyNSA3LjQzMyA3LjQzMyAwIDAgMSA3LjQyNiA3LjQyNXYxOC4zOTRhNy40MzQgNy40MzQgMCAwIDEtNy40MjYgNy40MjZ6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOTIgNS4zOTJ2MTguMzk0YTUuNCA1LjQgMCAwIDAgNS4zOTIgNS4zODkgNS40IDUuNCAwIDAgMCA1LjM4OC01LjM4OVYzMTQuOTNhNS40IDUuNCAwIDAgMC01LjM4OC01LjM5MXoiLz4KICAgICAgPHBhdGggZD0iTTM0NC40NjkgMzM0Ljg3OWgtLjA4N2EuOTUyLjk1MiAwIDAgMS0uNzE4LS4zMjkuOTg0Ljk4NCAwIDAgMS0uMjM2LS43NzFjLjAxMi0uMTQ5LjAyMi0uMy4wMjItLjQ1NHYtMTguMzk0YzAtLjE1My0uMDEtLjMtLjAyMi0uNDU0YTEuMDEgMS4wMSAwIDAgMSAuMjY2LS43NzMuOTg3Ljk4NyAwIDAgMSAuNzUxLS4zMjggNy4yNjcgNy4yNjcgMCAwIDEgNy4yODEgNy4yNTR2N2E3LjI2NSA3LjI2NSAwIDAgMS03LjI1NyA3LjI0OXptMS4wMTktMTkuMzd2MTcuMjM1YTUuMjMgNS4yMyAwIDAgMCA0LjItNS4xMnYtN2E1LjIyNyA1LjIyNyAwIDAgMC00LjItNS4xMTV6TTMzNy4wNDIgMzA4LjUyMWgyLjAzNnYxNS42MDVoLTIuMDM2ek0zMzcuMDQyIDMyOS44NWgyLjAzNnY5Ljg4MWgtMi4wMzZ6TTMzOS4xMTcgMzA4LjUyMWgtMi4wMzZ2LTEuNzE3YTI0LjgyNiAyNC44MjYgMCAwIDAtMi44NzMtMTEuNTk0bDEuOC0uOTU0YTI2Ljg2NSAyNi44NjUgMCAwIDEgMy4xMTIgMTIuNTQ3ek0yODcuNTQxIDMwOC41MjFoLTIuMDM0di0xLjcxN2EyNi44NjMgMjYuODYzIDAgMCAxIDMuMTEtMTIuNTQ1bDEuOC45NTVhMjQuODQxIDI0Ljg0MSAwIDAgMC0yLjg3MyAxMS41OTF6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0yOTIuODU3IDI5Ni43NTJhMS4wMzYgMS4wMzYgMCAwIDEtLjI5My0uMDQxbC02LjYzMS0xLjk4NGExIDEgMCAwIDEtLjY0Mi0uNTcxIDEuMDExIDEuMDExIDAgMCAxIC4wMjQtLjg2IDMwLjA3NSAzMC4wNzUgMCAwIDEgMjctMTYuNjkgMzAuMDc4IDMwLjA3OCAwIDAgMSAyNyAxNi42OSAxLjAyNSAxLjAyNSAwIDAgMSAuMDI2Ljg2IDEuMDIzIDEuMDIzIDAgMCAxLS42NDQuNTcxbC02LjYzMyAxLjk4NGExLjAyIDEuMDIgMCAwIDEtMS4xNzYtLjQ3MSAyMS40NDYgMjEuNDQ2IDAgMCAwLTE4LjU3MS0xMC44MTIgMjEuNDUxIDIxLjQ1MSAwIDAgMC0xOC41NzEgMTAuODEyIDEuMDIyIDEuMDIyIDAgMCAxLS44ODkuNTEyem0xOS40NTUtMTMuMzZhMjMuNDg5IDIzLjQ4OSAwIDAgMSAxOS45MjUgMTEuMTRsNC42ODQtMS40YTI4LjAzNCAyOC4wMzQgMCAwIDAtMjQuNjA4LTE0LjQ5MSAyOC4wMjggMjguMDI4IDAgMCAwLTI0LjYwNiAxNC40OTFsNC42ODQgMS40YTIzLjQ4NSAyMy40ODUgMCAwIDEgMTkuOTI1LTExLjE0MXoiLz4KICAgICAgPHBhdGggZD0iTTMxMi4xNjggMzI3LjA2NGExNS4yIDE1LjIgMCAwIDEtMTUuMTg3LTE1LjE4NyAxNS4yIDE1LjIgMCAwIDEgMTUuMTg3LTE1LjE4NyAxNS4yIDE1LjIgMCAwIDEgMTUuMTg3IDE1LjE4NyAxNS4yIDE1LjIgMCAwIDEtMTUuMTg3IDE1LjE4N3ptMC0yOC4zMzhhMTMuMTY0IDEzLjE2NCAwIDAgMC0xMy4xNTEgMTMuMTUxIDEzLjE2NCAxMy4xNjQgMCAwIDAgMTMuMTUxIDEzLjE0OCAxMy4xNjUgMTMuMTY1IDAgMCAwIDEzLjE1MS0xMy4xNDggMTMuMTY2IDEzLjE2NiAwIDAgMC0xMy4xNTEtMTMuMTUxeiIvPgogICAgICA8cGF0aCBkPSJNMzA3LjM4MyAzMjAuNjM2YTEuMDE2IDEuMDE2IDAgMCAxLS41MDgtLjEzNyAxLjAxNCAxLjAxNCAwIDAgMS0uNTA5LS44Nzl2LTE1LjQ4NmExLjAxNiAxLjAxNiAwIDAgMSAuNTA5LS44ODIgMS4wMjEgMS4wMjEgMCAwIDEgMS4wMTkgMGwxMy40MDkgNy43NDJhMS4wMiAxLjAyIDAgMCAxIC41MTEuODgyIDEuMDIyIDEuMDIyIDAgMCAxLS41MTEuODgybC0xMy40MDkgNy43NGExLjAxOCAxLjAxOCAwIDAgMS0uNTExLjEzOHptMS4wMTktMTQuNzM4djExLjk1OGwxMC4zNTYtNS45Nzl6TTMwNC43MjggMzUxLjI4OWgtMTMuMDI0YTYuMzc2IDYuMzc2IDAgMCAxLTYuNDQ1LTYuMjg4di01LjI2OWgyLjAzNHY1LjI2OWE0LjMzOCA0LjMzOCAwIDAgMCA0LjQxMSA0LjI1MmgxMy4wMjR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zMTYuMjkxIDM1NC42MDZoLTguMjQxYTQuMzQxIDQuMzQxIDAgMCAxLTQuMzM0LTQuMzM2IDQuMzM5IDQuMzM5IDAgMCAxIDQuMzM0LTQuMzM0aDguMjQ1YTQuMzM5IDQuMzM5IDAgMCAxIDQuMzM2IDQuMzM0IDQuMzQxIDQuMzQxIDAgMCAxLTQuMzQgNC4zMzZ6bS04LjI0NS02LjYzNWEyLjMgMi4zIDAgMCAwLTIuMyAyLjMgMi4zIDIuMyAwIDAgMCAyLjMgMi4zaDguMjQ1YTIuMyAyLjMgMCAwIDAgMi4zLTIuMyAyLjMgMi4zIDAgMCAwLTIuMy0yLjN6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTc1LjU2NCAzNDMuNzQySDEuMDE3QTEuMDE2IDEuMDE2IDAgMCAxIDAgMzQyLjcyNXYtOS4xNTZhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTctMS4wMTdoNzQuNTQ3YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE3djkuMTU2YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3em0tNzMuNTI4LTIuMDM0aDcyLjUxMXYtNy4xMThIMi4wMzZ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik03NS41NjQgMzM0LjU4OUgxLjAxN0ExLjAxOCAxLjAxOCAwIDAgMSAwIDMzMy41N3YtMzcuMjcxYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDE5aDE3LjI2N3YyLjAzNkgyLjAzNnYzNS4yMzdoNzIuNTExdi0zNS4yMzdINTguNDE4di0yLjAzNmgxNy4xNDZhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTl2MzcuMjcxYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE5ek00Ny4wOTQgMzU0LjgyM2wtMS44Mi0xMS4wODJIMzEuMzA4bC0xLjgyMiAxMS4wODItMi4wMDgtLjMzMSAxLjk2MS0xMS45MzRhMS4wMTcgMS4wMTcgMCAwIDEgMS0uODUxaDE1LjY5OWExLjAxNyAxLjAxNyAwIDAgMSAxIC44NTFsMS45NyAxMS45MzR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0yMC42MDcgMzUzLjY0MWgzNS4zN3YyLjAzNmgtMzUuMzd6TTUuMjQ3IDI5NS4yOGg1Ni4wNTJ2Mi4wMzZINS4yNDd6TTQ1LjU1IDMxMy44MjhsLTcuNDIyIDIuMS00LjMyMSA2LjM3Ni0zLjczNS0xNy41NTF6TTM5LjE2OSAzMTkuODcxbDIuMzc3LTEuNzE2IDQuNzYyIDYuNTk0LTIuMzc3IDEuNzE3eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xMDAuNjY5IDQ3OC44MjhIODcuNzc3YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3LTEuMDJ2LTU5LjAzN2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxOWgxMi44OTJhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTkgMS4wMTl2NTkuMDM3YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5IDEuMDJ6bS0xMS44NzUtMi4wMzdoMTAuODU4di01N0g4OC43OTR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik04Ny43NzcgNDI0LjcwOGgxMy4yNTV2Mi4wMzZIODcuNzc3ek04Ny43NzcgNDY5Ljg5MmgxMy4yNTV2Mi4wMzZIODcuNzc3ek0xMzEuMDI4IDQ3OC44MjdhMS4wMDYgMS4wMDYgMCAwIDEtLjU2My0uMTcxIDEuMDEyIDEuMDEyIDAgMCAxLS40MzYtLjY0NmwtMTEuNjkyLTU3Ljg2OWExLjAxNiAxLjAxNiAwIDAgMSAuOC0xLjJsMTIuNjM4LTIuNTU1YTEuMDA4IDEuMDA4IDAgMCAxIC43NjMuMTQ5IDEuMDE0IDEuMDE0IDAgMCAxIC40MzYuNjQ1bDExLjY4NSA1Ny44NzNhMS4wMTUgMS4wMTUgMCAwIDEtLjggMS4ybC0xMi42MzEgMi41NTVhMS4yIDEuMiAwIDAgMS0uMi4wMTl6bS0xMC41LTU4LjA5M2wxMS4yOSA1NS44NzYgMTAuNjQyLTIuMTUxLTExLjI5LTU1Ljg3NHoiLz4KICAgICAgPHBhdGggZD0iTTEyMC4zMyA0MjUuNzkxbDEyLjk5NS0yLjYxNy40MDIgMS45OTUtMTIuOTk1IDIuNjE3ek0xMjkuMjc4IDQ3MC4wODNsMTIuOTk0LTIuNjIyLjQwMyAxLjk5Ni0xMi45OTQgMi42MjJ6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMTguOTg3IDQ3MS45MjloLTEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAydi02LjMzMmExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWgxMi44OTJhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMTl2Ni4zMzJhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMnptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTQuM2gtMTAuODU2ek0xMTguOTg3IDQyNi43NDNoLTEyLjg5MmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOS0xLjAxN3YtNi45NTVhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTloMTIuODkyYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE5djYuOTU1YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE3em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC45MTloLTEwLjg1NnoiLz4KICAgICAgICA8cGF0aCBkPSJNMTE4Ljk4NyA0NzguODI4aC0xMi44OTJhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTl2LTYuOWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxN2gxMi44OTJhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTd2Ni45YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE3IDEuMDE5em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC44NjNoLTEwLjg1NnpNMTE4Ljk4NyA0NjUuNTk0aC0xMi44OTJhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTd2LTMyLjkxNGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxNmgxMi44OTJhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTZ2MzIuOTE0YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE3em0tMTEuODc1LTIuMDM4aDEwLjg1NnYtMzAuODc1aC0xMC44NTZ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTExOC45ODcgNDMyLjY4NGgtMTIuODkyYTEuMDIgMS4wMiAwIDAgMS0xLjAxOS0xLjAydi01LjkzN2ExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWgxMi44OTJhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTl2NS45MzdhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTcgMS4wMnptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTMuOWgtMTAuODU2eiIvPgogICAgICA8L2c+CiAgICAgIDxwYXRoIGQ9Ik03Mi44MzcgNDc2Ljc5MWg3OS40MDh2Mi4wMzZINzIuODM3eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0yNDkuNzggNDc0Ljc0MWgtMzcuNjkyYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3LTEuMDE3VjQzNi4wM2ExLjAxOSAxLjAxOSAwIDAgMSAxLjAxNy0xLjAxOWgzNy42OTJhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMTl2MzcuNjk0YTEuMDE2IDEuMDE2IDAgMCAxLTEuMDE3IDEuMDE3em0tMzYuNjczLTIuMDM1aDM1LjY1NnYtMzUuNjU5aC0zNS42NTZ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0yNTYuMTUgNDgwLjQ0N2gtNTAuNDMxYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDJ2LTY1LjkyMmExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWg1MC40MzFhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTl2NjUuOTIyYTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDJ6bS00OS40MTQtMi4wMzhoNDguNHYtNjMuODg3aC00OC40eiIvPgogICAgICA8cGF0aCBkPSJNMjQ5LjA2NCA0MzEuODI3aC0zNi4yNThhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMnYtMTAuNDMyYTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE4aDM2LjI1OGExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNyAxLjAxOHYxMC40MzJhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTcgMS4wMnptLTM1LjI0MS0yLjAzNmgzNC4yMjJ2LTguNGgtMzQuMjIyek0yMTkuNzQ4IDQzNi4wM2gyLjAzNnY2Ljg1NGgtMi4wMzZ6TTIxOS43NDggNDQ2LjUzNmgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTIxMi4wODcgNDQzLjY5Mmg2Ljg1M3YyLjAzNmgtNi44NTN6TTIyMi41OTIgNDQzLjY5Mmg2LjUxOXYyLjAzNmgtNi41MTl6TTIzMi43MTcgNDQzLjY5Mmg2LjU1OXYyLjAzNmgtNi41NTl6TTI0Mi45MjcgNDQzLjY5Mmg2Ljg1M3YyLjAzNmgtNi44NTN6TTIxMi4wODcgNDUzLjg2MWg2Ljg1M3YyLjAzNWgtNi44NTN6TTIyMi41OTIgNDUzLjg2MWg2LjUxOXYyLjAzNWgtNi41MTl6TTIzMi43MTcgNDUzLjg2MWg2LjU1OXYyLjAzNWgtNi41NTl6TTI0Mi45MjcgNDUzLjg2MWg2Ljg1M3YyLjAzNWgtNi44NTN6TTIxMi4wODcgNDY0LjAyN2g2Ljg1M3YyLjAzNmgtNi44NTN6TTIyMi41OTIgNDY0LjAyN2g2LjUxOXYyLjAzNmgtNi41MTl6TTIxOS43NDggNDU2LjM2N2gyLjAzNnY2Ljg1M2gtMi4wMzZ6TTIxOS43NDggNDY2Ljg3MmgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTIzMi43MTcgNDY0LjAyN2g2LjU1OXYyLjAzNmgtNi41NTl6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0yNDAuMDg0IDQzNi4wM2gyLjAzNnY2Ljg1NGgtMi4wMzZ6TTI0MC4wODQgNDQ2LjUzNWgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTI0MC4wODQgNDU2LjM2N2gyLjAzNnY2Ljg1M2gtMi4wMzZ6TTI0MC4wODQgNDY2Ljg3MmgyLjAzNnY2Ljg1M2gtMi4wMzZ6Ii8+CiAgICAgIDwvZz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTIyOS45MTYgNDM2LjAzaDIuMDM2djYuODU0aC0yLjAzNnpNMjI5LjkxNiA0NDYuNTM1aDIuMDM2djYuODUzaC0yLjAzNnpNMjI5LjkxNyA0NTYuMzY3aDIuMDM1djYuODUzaC0yLjAzNXpNMjI5LjkxNyA0NjYuODcyaDIuMDM1djYuODUzaC0yLjAzNXoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik01NjkuMTM3IDYyMy40NDFoLTEyLjg5NGExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNy0xLjAxOXYtNTkuMDM5YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3LTEuMDE3aDEyLjg5NGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxN3Y1OS4wMzlhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTl6bS0xMS44NzctMi4wMzZoMTAuODYzdi01N0g1NTcuMjZ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik01NTYuMjQ0IDU2OS4zMjFoMTMuMjU1djIuMDM2aC0xMy4yNTV6TTU1Ni4yNDQgNjE0LjUwNWgxMy4yNTV2Mi4wMzZoLTEzLjI1NXpNNTk5LjQ5MSA2MjMuNDQxYTEgMSAwIDAgMS0uNTYxLS4xNzEgMS4wMTQgMS4wMTQgMCAwIDEtLjQzNi0uNjQ2TDU4Ni44IDU2NC43NTVhMS4wMTkgMS4wMTkgMCAwIDEgLjgtMS4ybDEyLjY0LTIuNTUzYTEuMDIzIDEuMDIzIDAgMCAxIC43NjUuMTUxIDEuMDExIDEuMDExIDAgMCAxIC40MzQuNjQ2bDExLjY5NCA1Ny44NzFhMS4wMTggMS4wMTggMCAwIDEtLjggMS4ybC0xMi42MzggMi41NTNhMS4wMTMgMS4wMTMgMCAwIDEtLjIwNC4wMTh6bS0xMC40OTMtNTguMDk0bDExLjI5IDU1Ljg3NiAxMC42NDItMi4xNTEtMTEuMjktNTUuODc1eiIvPgogICAgICA8cGF0aCBkPSJNNTg4Ljc5NyA1NzAuNDA0bDEyLjk5NS0yLjYxNy40MDIgMS45OTUtMTIuOTk1IDIuNjE3ek01OTcuNzQ2IDYxNC42OTZsMTIuOTk0LTIuNjIyLjQwMyAxLjk5Ni0xMi45OTQgMi42MjJ6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik01ODcuNDUzIDYxNi41MzloLTEyLjg5MWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxNnYtNi4zMzVhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTdoMTIuODkyYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE3djYuMzM1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDIgMS4wMTZ6bS0xMS44NzUtMi4wMzNoMTAuODU4di00LjNoLTEwLjg1OHpNNTg3LjQ1MyA1NzEuMzU3aC0xMi44OTFhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTl2LTYuOTU2YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE3aDEyLjg5MmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOSAxLjAxN3Y2Ljk1NmExLjAxOSAxLjAxOSAwIDAgMS0xLjAyIDEuMDE5em0tMTEuODc1LTIuMDM3aDEwLjg1OHYtNC45MTloLTEwLjg1OHoiLz4KICAgICAgICA8cGF0aCBkPSJNNTg3LjQ1MyA2MjMuNDQxaC0xMi44OTFhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMnYtNi45YTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE5LTEuMDE2aDEyLjg5MmExLjAxNiAxLjAxNiAwIDAgMSAxLjAxOSAxLjAxNnY2LjlhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMiAxLjAyem0tMTEuODc1LTIuMDM3aDEwLjg1OHYtNC44NjVoLTEwLjg1OHpNNTg3LjQ1MyA2MTAuMjA0aC0xMi44OTFhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTl2LTMyLjkxMmExLjAxNyAxLjAxNyAwIDAgMSAxLjAxOS0xLjAxN2gxMi44OTJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTkgMS4wMTd2MzIuOTEyYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDIgMS4wMTl6bS0xMS44NzUtMi4wMzZoMTAuODU4VjU3Ny4yOWgtMTAuODU4eiIvPgogICAgICAgIDxwYXRoIGQ9Ik01ODcuNDUzIDU3Ny4yOTNoLTEyLjg5MWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtNS45MzhhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTdoMTIuODkyYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE3djUuOTM4YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDIgMS4wMTd6bS0xMS44NzUtMi4wMzRoMTAuODU4di0zLjloLTEwLjg1OHoiLz4KICAgICAgPC9nPgogICAgICA8cGF0aCBkPSJNNTQxLjMwNCA2MjEuNDA0aDc5LjQwOHYyLjAzNmgtNzkuNDA4eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik00ODYuNDk2IDYyMC4zNDVoLTc0LjU0NWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtOS4xNTVhMS4wMTggMS4wMTggMCAwIDEgMS4wMTktMS4wMTdoNzQuNTQ1YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE3djkuMTU1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDE3em0tNzMuNTI4LTIuMDM0aDcyLjUwOXYtNy4xMTloLTcyLjUwOXoiLz4KICAgICAgPHBhdGggZD0iTTQ4Ni40OTYgNjExLjE5M2gtNzQuNTQ1YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE1LTEuMDJ2LTM3LjI3YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE3aDE3LjI2MXYyLjAzN2gtMTYuMjQ4djM1LjIzNWg3Mi41MDl2LTM1LjIzNUg0NjkuMzV2LTIuMDM3aDE3LjE0NmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxN3YzNy4yN2ExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAyek00NTguMDI4IDYzMS40MjdsLTEuODIyLTExLjA4M0g0NDIuMjRsLTEuODIgMTEuMDgzLTIuMDEtLjMyOCAxLjk2MS0xMS45MzdhMS4wMTcgMS4wMTcgMCAwIDEgMS0uODUxaDE1LjY5M2ExLjAxNyAxLjAxNyAwIDAgMSAxIC44NTFsMS45NjEgMTEuOTM3eiIvPgogICAgICA8cGF0aCBkPSJNNDMxLjUzOSA2MzAuMjQ1aDM1LjM3djIuMDM2aC0zNS4zN3oiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTQ2OS4zNDYgNjExLjE5M2gtNDAuMTNhMS4wMTggMS4wMTggMCAwIDEtMS4wMTctMS4wMTl2LTUyLjkyM2ExLjAxNyAxLjAxNyAwIDAgMSAxLjAxNy0xLjAxOGgzMS45MTlhMS4wMjQgMS4wMjQgMCAwIDEgLjcyLjNsOC4yMTUgOC4yMTVhMS4wMjIgMS4wMjIgMCAwIDEgLjMuNzE5djQ0LjcxYTEuMDIgMS4wMiAwIDAgMS0xLjAyNCAxLjAxNnptLTM5LjExNS0yLjAzNmgzOC4xdi00My4yNzJsLTcuNjE4LTcuNjE1aC0zMC40Nzh6Ii8+CiAgICAgICAgPHBhdGggZD0iTTQ2OS4zNDcgNTY2LjQ4MWgtOC4yMTVhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTguMjEzYTEuMDE4IDEuMDE4IDAgMCAxIC42MjgtLjk0IDEuMDE4IDEuMDE4IDAgMCAxIDEuMTEuMjJsOC4yMTUgOC4yMTVhMS4wMTcgMS4wMTcgMCAwIDEgLjIyIDEuMTA4IDEuMDE3IDEuMDE3IDAgMCAxLS45NDEuNjI5em0tNy4yLTIuMDM2aDQuNzRsLTQuNzQtNC43Mzh6TTQzNS4wMjQgNTcwLjE0OGgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNNDM1LjAyNCA1NzUuNjY0aDI4LjUxNnYyLjAzNWgtMjguNTE2ek00MzUuMDI0IDU4MS4xOGgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNNDM1LjAyNCA1ODYuNjk1aDI4LjUxNnYyLjAzNmgtMjguNTE2ek00MzUuMDI0IDU5Mi4yMWgyOC41MTZ2Mi4wMzZoLTI4LjUxNnpNNDM1LjAyNCA1OTcuNzI2aDE3Ljg1M3YyLjAzNmgtMTcuODUzeiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE4NS44NjQgNjI5LjU2NGExIDEgMCAwIDEtLjM4OS0uMDc3IDEuMDE3IDEuMDE3IDAgMCAxLS42My0uOTR2LTEwLjQ4NWExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWgxMC40ODVhMS4wMTcgMS4wMTcgMCAwIDEgLjk0LjYzIDEuMDE3IDEuMDE3IDAgMCAxLS4yMjIgMS4xMDlsLTEwLjQ4NSAxMC40ODZhMS4wMTkgMS4wMTkgMCAwIDEtLjcxOC4yOTZ6bTEuMDE3LTEwLjQ4NXY3LjAxbDcuMDA4LTcuMDA4ek0xODEuNDYgNTk5LjMxMmExLjAxIDEuMDEgMCAwIDEtLjItLjAybC05LjE2NS0xLjg1N2ExLjAwOCAxLjAwOCAwIDAgMS0uNzczLS43IDEuMDIxIDEuMDIxIDAgMCAxIC4yNTQtMS4wMTVsMjkuMjQxLTI5LjIzOWExLjAxMyAxLjAxMyAwIDAgMSAxLjQzOSAwbDUuNTEzIDUuNTFhMS4wMjMgMS4wMjMgMCAwIDEgLjMuNzIgMS4wMTkgMS4wMTkgMCAwIDEtLjMuNzE4bC0yNS41ODcgMjUuNTg1YTEuMDE3IDEuMDE3IDAgMCAxLS43MjIuMjk4em0tNy4xMDUtMy41bDYuNzcyIDEuMzczIDI0LjQ4MS0yNC40OC00LjA3Mi00LjA3M3oiLz4KICAgICAgPHBhdGggZD0iTTE4My4zMTkgNjA4LjQ3OWEuOTkzLjk5MyAwIDAgMS0uMjk1LS4wNDUgMS4wMTYgMS4wMTYgMCAwIDEtLjctLjc3MWwtMS44NTYtOS4xNjdhMS4wMTkgMS4wMTkgMCAwIDEgLjI3Ni0uOTIybDI1LjU4Ny0yNS41ODRhMS4wMTQgMS4wMTQgMCAwIDEgLjcyLS4zIDEuMDE0IDEuMDE0IDAgMCAxIC43Mi4zbDUuNTExIDUuNTFhMS4wMiAxLjAyIDAgMCAxIDAgMS40NDFsLTI5LjI0MSAyOS4yNGExLjAxMyAxLjAxMyAwIDAgMS0uNzIyLjI5OHptLS43NTMtOS44NTJsMS4zNzQgNi43NzEgMjcuMTc5LTI3LjE3OC00LjA3Mi00LjA3MnoiLz4KICAgICAgPHBhdGggZD0iTTE3MC41MjUgNjEwLjMwM2ExLjAyIDEuMDIgMCAwIDEtLjcyLS4zIDEuMDI2IDEuMDI2IDAgMCAxLS4yODktLjg2NGwxLjgzLTEyLjc5M2ExLjAxNSAxLjAxNSAwIDAgMSAuNDItLjY4NiAxLjAxNiAxLjAxNiAwIDAgMSAuNzg1LS4xN2w5LjEwNyAxLjhhMS4wMTggMS4wMTggMCAwIDEgLjguOGwxLjg1NiA5LjE2OWExLjAwOCAxLjAwOCAwIDAgMS0uMTY1Ljc4NyAxLjAxNyAxLjAxNyAwIDAgMS0uNjg4LjQyMmwtMTIuNzk0IDEuODI4YS44MDkuODA5IDAgMCAxLS4xNDIuMDA3em0yLjY4Ni0xMi42bC0xLjQ4NyAxMC4zODYgMTAuMzgyLTEuNDgzLTEuNTA5LTcuNDQ2ek0yMTIuNTAxIDU3OS4xNzhhMS4wMjMgMS4wMjMgMCAwIDEtLjcyLS4zbC0xMC45NjUtMTAuOTYyYTEuMDE1IDEuMDE1IDAgMCAxLS4zLS43MiAxLjAwOSAxLjAwOSAwIDAgMSAuMy0uNzE5bDIuNzg5LTIuNzkxYTEuMDE2IDEuMDE2IDAgMCAxIC43Mi0uMyAxLjAxNiAxLjAxNiAwIDAgMSAuNzIuM2wxMC45NjUgMTAuOTY1YTEuMDIgMS4wMiAwIDAgMSAwIDEuNDQxbC0yLjc4OSAyLjc4OWExLjAyMyAxLjAyMyAwIDAgMS0uNzIuMjk3em0tOS41MjYtMTEuOTgybDkuNTI3IDkuNTI2IDEuMzQ4LTEuMzUtOS41MjQtOS41MjZ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0yMTUuMjkgNTc2LjM5M2ExLjAyMyAxLjAyMyAwIDAgMS0uNzItLjNsLTEwLjk2OC0xMC45NjZhMS4wMTcgMS4wMTcgMCAwIDEgMC0xLjQzOGwyLjUtMi41YTQuMTU5IDQuMTU5IDAgMCAxIDIuOTYyLTEuMjE4IDQuMjgyIDQuMjgyIDAgMCAxIDMuMDQ3IDEuMjY2bDYuMzQ4IDYuMzQ4YTQuMjUzIDQuMjUzIDAgMCAxIC4wNDggNi4wMDhsLTIuNSAyLjVhMS4wMjMgMS4wMjMgMCAwIDEtLjcxNy4zem0tOS41MjctMTEuOTg2bDkuNTI3IDkuNTI3IDEuNzgyLTEuNzhhMi4yMTggMi4yMTggMCAwIDAtLjA0OC0zLjEzbC02LjM0OC02LjM0OGEyLjI3OSAyLjI3OSAwIDAgMC0zLjEzMi0uMDQ2ek0xNzAuNTkyIDYwNC41MDlsMS40NC0xLjQ0IDQuODQ0IDQuODQ0LTEuNDQgMS40NHoiLz4KICAgICAgPHBhdGggZD0iTTE4NS44NjQgNjI5LjU2NWgtNDAuNzQ1YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3LTEuMDE3di02Ny41NTVhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTctMS4wMmg1MS4yMzFhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTcgMS4wMnYxMS4zOTNhMS4wMDYgMS4wMDYgMCAwIDEtLjMuNzE2bC0yMy43NTcgMjMuODc2LTEuNTkgMTEuMTE1IDExLjExNS0xLjU4OCAxMi43OTEtMTIuNzkyYTEuMDE2IDEuMDE2IDAgMCAxIDEuMTEtLjIyMiAxLjAxNiAxLjAxNiAwIDAgMSAuNjI4Ljk0djIzLjYzNGExLjAxNyAxLjAxNyAwIDAgMS0uMy43MjFsLTEwLjQ4NSAxMC40ODVhMS4wMTUgMS4wMTUgMCAwIDEtLjcxNS4yOTR6bS0zOS43MjctMi4wMzRoMzkuM2w5Ljg5LTkuODl2LTIwLjc1NGwtMTEuMyAxMS4yOTRhMS4wMTQgMS4wMTQgMCAwIDEtLjU3NS4yODlsLTEyLjc4NCAxLjgyM2ExLjAxNiAxLjAxNiAwIDAgMS0uODY0LS4yODYgMS4wMjUgMS4wMjUgMCAwIDEtLjI4OS0uODY0bDEuODMtMTIuNzk0YTEuMDA5IDEuMDA5IDAgMCAxIC4yODctLjU3NWwyMy43MDUtMjMuODEydi05Ljk1NGgtNDkuMnoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNzE4LjI0NiA2MTkuMzU0aC0zNy42OWExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxNnYtMzcuNjk1YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE5LTEuMDE5aDM3LjY5YTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5IDEuMDE5djM3LjY5NWExLjAxOCAxLjAxOCAwIDAgMS0xLjAxOSAxLjAxNnptLTM2LjY3My0yLjAzNmgzNS42NTd2LTM1LjY1OWgtMzUuNjU3eiIvPgogICAgICA8cGF0aCBkPSJNNzI0LjYxNiA2MjUuMDU3aC01MC40MzFhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTl2LTY1LjkyMmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxN2g1MC40MzFhMS4wMTggMS4wMTggMCAwIDEgMS4wMTkgMS4wMTd2NjUuOTIyYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5IDEuMDE5em0tNDkuNDE0LTIuMDM2aDQ4LjR2LTYzLjg4N2gtNDguNHoiLz4KICAgICAgPHBhdGggZD0iTTcxNy41MyA1NzYuNDM4aC0zNi4yNThhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTh2LTEwLjQzNGExLjAxOCAxLjAxOCAwIDAgMSAxLjAxOS0xLjAxN2gzNi4yNThhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTcgMS4wMTd2MTAuNDM0YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDE4em0tMzUuMjQxLTIuMDM2aDM0LjIyNHYtOC40aC0zNC4yMjJ6TTY4OC4yMTUgNTgwLjY0MmgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTY4OC4yMTUgNTkxLjE0OGgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTY4MC41NTQgNTg4LjMwNGg2Ljg1M3YyLjAzNmgtNi44NTN6TTY5MS4wNTkgNTg4LjMwNGg2LjUxOXYyLjAzNmgtNi41MTl6TTcwMS4xODQgNTg4LjMwNGg2LjU1OXYyLjAzNmgtNi41NTl6TTcxMS4zOTQgNTg4LjMwNGg2Ljg1M3YyLjAzNmgtNi44NTN6TTY4MC41NTQgNTk4LjQ3M2g2Ljg1M3YyLjAzNWgtNi44NTN6TTY5MS4wNTkgNTk4LjQ3M2g2LjUxOXYyLjAzNWgtNi41MTl6TTcwMS4xODQgNTk4LjQ3M2g2LjU1OXYyLjAzNWgtNi41NTl6TTcxMS4zOTQgNTk4LjQ3M2g2Ljg1M3YyLjAzNWgtNi44NTN6TTY4MC41NTQgNjA4LjYzOWg2Ljg1M3YyLjAzNmgtNi44NTN6TTY5MS4wNTkgNjA4LjYzOWg2LjUxOXYyLjAzNmgtNi41MTl6TTY4OC4yMTUgNjAwLjk3OWgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTY4OC4yMTUgNjExLjQ4NGgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTcwMS4xODQgNjA4LjYzOWg2LjU1OXYyLjAzNmgtNi41NTl6Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik03MDguNTUgNTgwLjY0MmgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTcwOC41NSA1OTEuMTQ3aDIuMDM2VjU5OGgtMi4wMzZ6TTcwOC41NSA2MDAuOTc5aDIuMDM2djYuODUzaC0yLjAzNnpNNzA4LjU1IDYxMS40ODRoMi4wMzZ2Ni44NTNoLTIuMDM2eiIvPgogICAgICA8L2c+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik02OTguMzgzIDU4MC42NDJoMi4wMzZ2Ni44NTRoLTIuMDM2ek02OTguMzgzIDU5MS4xNDdoMi4wMzZWNTk4aC0yLjAzNnpNNjk4LjM4NCA2MDAuOTc5aDIuMDM1djYuODUzaC0yLjAzNXpNNjk4LjM4NCA2MTEuNDg0aDIuMDM1djYuODUzaC0yLjAzNXoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0yODYuMjc2IDYxNy4zNTNhNy40MzMgNy40MzMgMCAwIDEtNy40MjYtNy40MjZ2LTE4LjM5M2E3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNi03LjQyNiA3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNiA3LjQyNnYxOC4zOTNhNy40MzMgNy40MzMgMCAwIDEtNy40MjYgNy40MjZ6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOTIgNS4zOTJ2MTguMzkzYTUuNCA1LjQgMCAwIDAgNS4zOTIgNS4zOTIgNS40IDUuNCAwIDAgMCA1LjM5LTUuMzkydi0xOC4zOTNhNS40IDUuNCAwIDAgMC01LjM5LTUuMzkyeiIvPgogICAgICA8cGF0aCBkPSJNMjc5Ljg2NyA2MTEuNDgzYTcuMjYzIDcuMjYzIDAgMCAxLTcuMjU2LTcuMjU1di03YTcuMjY0IDcuMjY0IDAgMCAxIDcuMjU2LTcuMjU1aC4wODdhLjk1OC45NTggMCAwIDEgLjcyLjMyOSAxIDEgMCAwIDEgLjIzNi43NzVjLS4wMTQuMTQ5LS4wMjYuMy0uMDI2LjQ0OXYxOC40MDNjMCAuMTUzLjAxMi4zLjAyNi40NWExLjAyOSAxLjAyOSAwIDAgMS0uMjY2Ljc3NiAxLjAyMiAxLjAyMiAwIDAgMS0uNzQ5LjMzem0tMS4wMTctMTkuMzhhNS4yMzcgNS4yMzcgMCAwIDAtNC4yIDUuMTN2N2E1LjIyNyA1LjIyNyAwIDAgMCA0LjIgNS4xMTl6TTI4NS4yNTggNTg1LjEyNWgyLjAzNXYxNS42MDVoLTIuMDM1ek0yODUuMjU4IDYwNi40NTVoMi4wMzV2OS44ODFoLTIuMDM1ek0zMzguMDYyIDYxNy4zNTNhNy40MzQgNy40MzQgMCAwIDEtNy40MjgtNy40MjZ2LTE4LjM5M2E3LjQzNSA3LjQzNSAwIDAgMSA3LjQyOC03LjQyNiA3LjQzNSA3LjQzNSAwIDAgMSA3LjQyNiA3LjQyNnYxOC4zOTNhNy40MzMgNy40MzMgMCAwIDEtNy40MjYgNy40MjZ6bTAtMzEuMjExYTUuNCA1LjQgMCAwIDAtNS4zOTIgNS4zOTJ2MTguMzkzYTUuNCA1LjQgMCAwIDAgNS4zOTIgNS4zOTIgNS40IDUuNCAwIDAgMCA1LjM4OC01LjM5MnYtMTguMzkzYTUuNCA1LjQgMCAwIDAtNS4zODgtNS4zOTJ6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zNDQuNDY5IDYxMS40ODNoLS4wODdhLjk1OS45NTkgMCAwIDEtLjcxOC0uMzI3Ljk5Ljk5IDAgMCAxLS4yMzYtLjc3M2MuMDEyLS4xNS4wMjItLjMuMDIyLS40NTR2LTE4LjRjMC0uMTUzLS4wMS0uMy0uMDIyLS40NTNhMS4wMTQgMS4wMTQgMCAwIDEgLjI2Ni0uNzczLjk4OS45ODkgMCAwIDEgLjc1MS0uMzI5IDcuMjY4IDcuMjY4IDAgMCAxIDcuMjgxIDcuMjU1djdhNy4yNjQgNy4yNjQgMCAwIDEtNy4yNTcgNy4yNTR6bTEuMDE5LTE5LjM3djE3LjIzNWE1LjIyOCA1LjIyOCAwIDAgMCA0LjItNS4xMTl2LTdhNS4yMjggNS4yMjggMCAwIDAtNC4yLTUuMTE2ek0zMzcuMDQyIDU4NS4xMjVoMi4wMzZ2MTUuNjA1aC0yLjAzNnpNMzM3LjA0MiA2MDYuNDU1aDIuMDM2djkuODgxaC0yLjAzNnpNMzM5LjExNyA1ODUuMTI0aC0yLjAzNnYtMS43MTdhMjQuODE5IDI0LjgxOSAwIDAgMC0yLjg3My0xMS41OTNsMS44LS45NTRhMjYuODY1IDI2Ljg2NSAwIDAgMSAzLjExMiAxMi41NDd6TTI4Ny41NDEgNTg1LjEyNWgtMi4wMzR2LTEuNzE4YTI2Ljg2MyAyNi44NjMgMCAwIDEgMy4xMS0xMi41NDVsMS44Ljk1NWEyNC44NDcgMjQuODQ3IDAgMCAwLTIuODczIDExLjU5eiIvPgogICAgICA8cGF0aCBkPSJNMjkyLjg1NyA1NzMuMzU3YS45OS45OSAwIDAgMS0uMjkzLS4wNDRsLTYuNjMxLTEuOTgxYTEuMDE2IDEuMDE2IDAgMCAxLS42NDItLjU3NCAxLjAwOCAxLjAwOCAwIDAgMSAuMDI0LS44NTkgMzAuMDczIDMwLjA3MyAwIDAgMSAyNy0xNi42OTEgMzAuMDc2IDMwLjA3NiAwIDAgMSAyNyAxNi42OTEgMS4wMjIgMS4wMjIgMCAwIDEgLjAyNi44NTkgMS4wMzUgMS4wMzUgMCAwIDEtLjY0NC41NzRsLTYuNjMzIDEuOTgxYTEuMDE5IDEuMDE5IDAgMCAxLTEuMTc2LS40NzEgMjEuNDQ3IDIxLjQ0NyAwIDAgMC0xOC41NzEtMTAuODEyIDIxLjQ1MiAyMS40NTIgMCAwIDAtMTguNTcxIDEwLjgxMiAxLjAxOCAxLjAxOCAwIDAgMS0uODg5LjUxNXptMTkuNDU1LTEzLjM2M2EyMy40ODggMjMuNDg4IDAgMCAxIDE5LjkyNSAxMS4xNDFsNC42ODQtMS40YTI4LjAzNyAyOC4wMzcgMCAwIDAtMjQuNjA4LTE0LjQ5MSAyOC4wMzEgMjguMDMxIDAgMCAwLTI0LjYwNiAxNC40OTFsNC42ODQgMS40YTIzLjQ4NSAyMy40ODUgMCAwIDEgMTkuOTI1LTExLjE0MXoiLz4KICAgICAgPHBhdGggZD0iTTMxMi4xNjggNjAzLjY2OGExNS4yIDE1LjIgMCAwIDEtMTUuMTg3LTE1LjE4NyAxNS4yIDE1LjIgMCAwIDEgMTUuMTg3LTE1LjE4NiAxNS4yIDE1LjIgMCAwIDEgMTUuMTg3IDE1LjE4NiAxNS4yIDE1LjIgMCAwIDEtMTUuMTg3IDE1LjE4N3ptMC0yOC4zMzdhMTMuMTY0IDEzLjE2NCAwIDAgMC0xMy4xNTEgMTMuMTUgMTMuMTY1IDEzLjE2NSAwIDAgMCAxMy4xNTEgMTMuMTUxIDEzLjE2NiAxMy4xNjYgMCAwIDAgMTMuMTUxLTEzLjE1MSAxMy4xNjUgMTMuMTY1IDAgMCAwLTEzLjE1MS0xMy4xNTF6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zMDcuMzgzIDU5Ny4yNDFhMS4wMTEgMS4wMTEgMCAwIDEtLjUwOC0uMTM3IDEuMDE1IDEuMDE1IDAgMCAxLS41MDktLjg4di0xNS40ODVhMS4wMjIgMS4wMjIgMCAwIDEgLjUwOS0uODgzIDEuMDI2IDEuMDI2IDAgMCAxIDEuMDE5IDBsMTMuNDA5IDcuNzQ0YTEuMDE5IDEuMDE5IDAgMCAxIC41MTEuODgyIDEuMDE4IDEuMDE4IDAgMCAxLS41MTEuODgxbC0xMy40MDkgNy43NDJhMS4wMTIgMS4wMTIgMCAwIDEtLjUxMS4xMzZ6bTEuMDE5LTE0LjczOXYxMS45NThsMTAuMzU2LTUuOTc5ek0zMDQuNzI4IDYyNy44OTJoLTEzLjAyNGE2LjM3NiA2LjM3NiAwIDAgMS02LjQ0NS02LjI4OHYtNS4yNjhoMi4wMzR2NS4yNjhhNC4zMzkgNC4zMzkgMCAwIDAgNC40MTEgNC4yNTJoMTMuMDI0eiIvPgogICAgICA8cGF0aCBkPSJNMzE2LjI5MSA2MzEuMjEzaC04LjI0MWE0LjM0MiA0LjM0MiAwIDAgMS00LjMzNC00LjMzOSA0LjM0MSA0LjM0MSAwIDAgMSA0LjMzNC00LjMzNGg4LjI0NWE0LjM0MSA0LjM0MSAwIDAgMSA0LjMzNiA0LjMzNCA0LjM0MiA0LjM0MiAwIDAgMS00LjM0IDQuMzM5em0tOC4yNDUtNi42MzdhMi4zIDIuMyAwIDAgMC0yLjMgMi4zIDIuMyAyLjMgMCAwIDAgMi4zIDIuM2g4LjI0NWEyLjMwNSAyLjMwNSAwIDAgMCAyLjMtMi4zIDIuMyAyLjMgMCAwIDAtMi4zLTIuM3oiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNzUuNTY0IDYyMC4zNDRIMS4wMTdBMS4wMTYgMS4wMTYgMCAwIDEgMCA2MTkuMzI3di05LjE1NWExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxN2g3NC41NDdhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTd2OS4xNTVhMS4wMTYgMS4wMTYgMCAwIDEtMS4wMTcgMS4wMTd6TTIuMDM2IDYxOC4zMWg3Mi41MTF2LTcuMTE5SDIuMDM2eiIvPgogICAgICA8cGF0aCBkPSJNNzUuNTY0IDYxMS4xOTJIMS4wMTdBMS4wMTggMS4wMTggMCAwIDEgMCA2MTAuMTczdi0zNy4yN2ExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNy0xLjAxN2gxNy4yNjd2Mi4wMzdIMi4wMzZ2MzUuMjM1aDcyLjUxMXYtMzUuMjM1SDU4LjQxOHYtMi4wMzdoMTcuMTQ2YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE3IDEuMDE3djM3LjI3YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE3IDEuMDE5ek00Ny4wOTQgNjMxLjQyN2wtMS44Mi0xMS4wODNIMzEuMzA4bC0xLjgyMiAxMS4wODMtMi4wMDgtLjMyOCAxLjk2MS0xMS45MzdhMS4wMTcgMS4wMTcgMCAwIDEgMS0uODUxaDE1LjY5OWExLjAxNyAxLjAxNyAwIDAgMSAxIC44NTFsMS45NjEgMTEuOTM3eiIvPgogICAgICA8cGF0aCBkPSJNMjAuNjA3IDYzMC4yNDRoMzUuMzd2Mi4wMzZoLTM1LjM3ek01LjI0NyA1NzEuODg1aDU2LjA1MnYyLjAzNkg1LjI0N3pNNDUuNTUgNTkwLjQzM2wtNy40MjIgMi4xLTQuMzIxIDYuMzc3LTMuNzM1LTE3LjU1MXpNMzkuMTY5IDU5Ni40NzVsMi4zNzctMS43MTYgNC43NjIgNi41OTQtMi4zNzcgMS43MTd6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTEwMC42NjkgNzU1LjQzMkg4Ny43NzdhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTctMS4wMTl2LTU5LjAzOGExLjAxNiAxLjAxNiAwIDAgMSAxLjAxNy0xLjAxN2gxMi44OTJhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTkgMS4wMTd2NTkuMDM4YTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5IDEuMDE5em0tMTEuODc1LTIuMDM2aDEwLjg1OHYtNTdIODguNzk0eiIvPgogICAgICA8cGF0aCBkPSJNODcuNzc3IDcwMS4zMTNoMTMuMjU1djIuMDM2SDg3Ljc3N3pNODcuNzc3IDc0Ni40OTdoMTMuMjU1djIuMDM2SDg3Ljc3N3pNMTMxLjAyOCA3NTUuNDMyYTEuMDIyIDEuMDIyIDAgMCAxLS41NjMtLjE2OSAxLjAxNyAxLjAxNyAwIDAgMS0uNDM2LS42NDhsLTExLjY5Mi01Ny44NjlhMS4wMTYgMS4wMTYgMCAwIDEgLjgtMS4ybDEyLjYzOC0yLjU1NWExLjAwNiAxLjAwNiAwIDAgMSAuNzYzLjE0OSAxLjAxIDEuMDEgMCAwIDEgLjQzNi42NDdsMTEuNjkyIDU3Ljg3YTEuMDE1IDEuMDE1IDAgMCAxLS44IDEuMmwtMTIuNjM4IDIuNTU1YS45NTkuOTU5IDAgMCAxLS4yLjAyem0tMTAuNS01OC4wOTFsMTEuMjkgNTUuODc0IDEwLjY0Mi0yLjE1Mi0xMS4yOS01NS44NzR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0xMjAuMzMgNzAyLjM5NmwxMi45OTUtMi42MTcuNDAyIDEuOTk1LTEyLjk5NSAyLjYxN3pNMTI5LjI3OCA3NDYuNjg4bDEyLjk5NC0yLjYyMi40MDMgMS45OTYtMTIuOTk0IDIuNjIyeiIvPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTE4Ljk4NyA3NDguNTMzaC0xMi44OTJhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTktMS4wMTl2LTYuMzMyYTEuMDE5IDEuMDE5IDAgMCAxIDEuMDE5LTEuMDE5aDEyLjg5MmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxOXY2LjMzMmExLjAxOCAxLjAxOCAwIDAgMS0xLjAxNyAxLjAxOXptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTQuM2gtMTAuODU2ek0xMTguOTg3IDcwMy4zNDhoLTEyLjg5MmExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtNi45NTZhMS4wMTcgMS4wMTcgMCAwIDEgMS4wMTktMS4wMTdoMTIuODkyYTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE3djYuOTU2YTEuMDE3IDEuMDE3IDAgMCAxLTEuMDE3IDEuMDE3em0tMTEuODc1LTIuMDM2aDEwLjg1NnYtNC45MmgtMTAuODU2eiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTguOTg3IDc1NS40MzFoLTEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAxOXYtNi45YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE3aDEyLjg5MmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxN3Y2LjlhMS4wMTggMS4wMTggMCAwIDEtMS4wMTcgMS4wMTl6bS0xMS44NzUtMi4wMzZoMTAuODU2di00Ljg2M2gtMTAuODU2ek0xMTguOTg3IDc0Mi4xOTloLTEyLjg5MmExLjAxNyAxLjAxNyAwIDAgMS0xLjAxOS0xLjAxN3YtMzIuOTE0YTEuMDE4IDEuMDE4IDAgMCAxIDEuMDE5LTEuMDE2aDEyLjg5MmExLjAxOCAxLjAxOCAwIDAgMSAxLjAxNyAxLjAxNnYzMi45MTRhMS4wMTcgMS4wMTcgMCAwIDEtMS4wMTcgMS4wMTd6bS0xMS44NzUtMi4wMzZoMTAuODU2di0zMC44NzdoLTEwLjg1NnoiLz4KICAgICAgICA8cGF0aCBkPSJNMTE4Ljk4NyA3MDkuMjloLTEyLjg5MmExLjAxOSAxLjAxOSAwIDAgMS0xLjAxOS0xLjAydi01LjkzNmExLjAxOSAxLjAxOSAwIDAgMSAxLjAxOS0xLjAxOWgxMi44OTJhMS4wMTggMS4wMTggMCAwIDEgMS4wMTcgMS4wMTl2NS45MzZhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTcgMS4wMnptLTExLjg3NS0yLjAzNmgxMC44NTZ2LTMuOWgtMTAuODU2eiIvPgogICAgICA8L2c+CiAgICAgIDxwYXRoIGQ9Ik03Mi44MzcgNzUzLjM5Nmg3OS40MDh2Mi4wMzZINzIuODM3eiIvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0yNDkuNzggNzUxLjM0NWgtMzcuNjkyYTEuMDE1IDEuMDE1IDAgMCAxLTEuMDE3LTEuMDE3di0zNy42OTRhMS4wMTYgMS4wMTYgMCAwIDEgMS4wMTctMS4wMTdoMzcuNjkyYTEuMDE2IDEuMDE2IDAgMCAxIDEuMDE3IDEuMDE3djM3LjY5NGExLjAxNSAxLjAxNSAwIDAgMS0xLjAxNyAxLjAxN3ptLTM2LjY3My0yLjAzNmgzNS42NTZ2LTM1LjY1NmgtMzUuNjU2eiIvPgogICAgICA8cGF0aCBkPSJNMjU2LjE1IDc1Ny4wNWgtNTAuNDMxYTEuMDE5IDEuMDE5IDAgMCAxLTEuMDE5LTEuMDE5di02NS45MjNhMS4wMiAxLjAyIDAgMCAxIDEuMDE5LTEuMDE5aDUwLjQzMWExLjAxOSAxLjAxOSAwIDAgMSAxLjAxNyAxLjAxOXY2NS45MjNhMS4wMTkgMS4wMTkgMCAwIDEtMS4wMTcgMS4wMTl6bS00OS40MTQtMi4wMzZoNDguNHYtNjMuODloLTQ4LjR6Ii8+CiAgICAgIDxwYXRoIGQ9Ik0yNDkuMDY0IDcwOC40M2gtMzYuMjU4YTEuMDE4IDEuMDE4IDAgMCAxLTEuMDE5LTEuMDE5di0xMC40MzNhMS4wMTkgMS4wMTkgMCAwIDEgMS4wMTktMS4wMTloMzYuMjU4YTEuMDE3IDEuMDE3IDAgMCAxIDEuMDE3IDEuMDE5djEwLjQzM2ExLjAxNyAxLjAxNyAwIDAgMS0xLjAxNyAxLjAxOXptLTM1LjI0MS0yLjA0aDM0LjIyMnYtOC40aC0zNC4yMjJ6TTIxOS43NDggNzEyLjYzNGgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTIxOS43NDggNzIzLjEzOWgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTIxMi4wODcgNzIwLjI5Nmg2Ljg1M3YyLjAzNmgtNi44NTN6TTIyMi41OTIgNzIwLjI5Nmg2LjUxOXYyLjAzNmgtNi41MTl6TTIzMi43MTcgNzIwLjI5Nmg2LjU1OXYyLjAzNmgtNi41NTl6TTI0Mi45MjcgNzIwLjI5Nmg2Ljg1M3YyLjAzNmgtNi44NTN6TTIxMi4wODcgNzMwLjQ2NGg2Ljg1M3YyLjAzNWgtNi44NTN6TTIyMi41OTIgNzMwLjQ2NGg2LjUxOXYyLjAzNWgtNi41MTl6TTIzMi43MTcgNzMwLjQ2NGg2LjU1OXYyLjAzNWgtNi41NTl6TTI0Mi45MjcgNzMwLjQ2NGg2Ljg1M3YyLjAzNWgtNi44NTN6TTIxMi4wODcgNzQwLjYzMWg2Ljg1M3YyLjAzNmgtNi44NTN6TTIyMi41OTIgNzQwLjYzMWg2LjUxOXYyLjAzNmgtNi41MTl6TTIxOS43NDggNzMyLjk3aDIuMDM2djYuODUzaC0yLjAzNnpNMjE5Ljc0OCA3NDMuNDc2aDIuMDM2djYuODUzaC0yLjAzNnpNMjMyLjcxNyA3NDAuNjMxaDYuNTU5djIuMDM2aC02LjU1OXoiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTI0MC4wODQgNzEyLjYzNGgyLjAzNnY2Ljg1NGgtMi4wMzZ6TTI0MC4wODQgNzIzLjEzOWgyLjAzNnY2Ljg1M2gtMi4wMzZ6TTI0MC4wODQgNzMyLjk3aDIuMDM2djYuODUzaC0yLjAzNnpNMjQwLjA4NCA3NDMuNDc1aDIuMDM2djYuODUzaC0yLjAzNnoiLz4KICAgICAgPC9nPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMjI5LjkxNiA3MTIuNjM0aDIuMDM2djYuODU0aC0yLjAzNnpNMjI5LjkxNiA3MjMuMTM5aDIuMDM2djYuODUzaC0yLjAzNnpNMjI5LjkxNyA3MzIuOTdoMi4wMzV2Ni44NTNoLTIuMDM1ek0yMjkuOTE3IDc0My40NzVoMi4wMzV2Ni44NTNoLTIuMDM1eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=\");background-size:cover;background-position:50% 50%;z-index:0}.equatio-th-sign-in::before{position:absolute;height:100%;width:100%;content:\"\";background-color:rgba(0,183,255,.639);top:0;left:0;z-index:1}.equatio-th-sign-in__inner{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin:0 auto;min-height:450px;max-width:600px;margin-top:70px}.equatio-th-sign-in__texthelp-logo-area{position:relative;padding:7px 0}.equatio-th-sign-in__texthelp-logo-area__wrapper{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:row;padding:1rem}.equatio-th-sign-in__texthelp-logo{position:relative;height:39px;z-index:10}.equatio-th-sign-in__wrapper{background:rgba(0,0,0,0);border-radius:5px;z-index:10}.equatio-th-sign-in-container{border:none !important}.equatio-th-sign-in-container{position:relative;display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff;top:0;left:0;border-radius:10px;background-clip:padding-box;width:auto;height:auto;padding:0px;min-width:298px;max-width:298px;z-index:2147483636;-webkit-font-smoothing:antialiased;box-shadow:0px 1px 10px 1px rgba(0,0,0,.2)}.equatio-th-sign-in-container__wrapper{position:relative;display:flex;flex-direction:column;justify-content:center;padding:1.2rem}.equatio-th-sign-in__logo-area{position:relative;padding:7px 0}.equatio-th-sign-in__logo-area__wrapper{display:flex;justify-content:center;align-items:center;padding:.2rem 1rem .2rem 1rem}.equatio-th-sign-in__logo{position:relative;height:39px}.equatio-th-sign-in__content-wrapper{padding:0 0 .9rem 0}.equatio-th-sign-in__content{font-size:14px;font-weight:400;text-align:center;color:#484848}.equatio-th-sign-in__content span.strong{font-weight:700}.equatio-th-sign-in-container__button-wrapper{position:relative;display:flex;justify-content:center;padding:5px 0 2px 0}.equatio-th-sign-in-container__button-wrapper:last-child{padding:5px 0 10px 0}.equatio-mobile-background{position:relative;display:flex;flex-direction:column;width:100%;height:100%;min-height:100vh;background:#fff;background:linear-gradient(0deg, rgb(255, 255, 255) 58%, rgb(0, 183, 255) 58%)}.equatio-mobile-content{display:flex;flex-grow:1;width:100%;height:inherit;border-top-left-radius:3.3em;border-top-right-radius:3.3em;background-color:#fff;flex-direction:column;padding:2.2em;font-size:10px}.equatio-mobile-content--square-corners{border-top-left-radius:0;border-top-right-radius:0}.equatio-mobile-content__title{margin:1.3em 0 2em 0;text-transform:uppercase;font-size:1.8em;font-weight:600;color:var(--th-slate-dark);text-align:center}.equatio-mobile-content__title--sub{font-size:1.4em;font-weight:400;color:var(--th-grey-dark)}.equatio-mobile-content__status-wrapper{display:flex;flex-direction:column;flex-grow:1;padding:1.4em;align-items:center;justify-content:center;text-align:center}.equatio-mobile-content__status-icon{width:8.6em}.equatio-mobile-content__status-texthelper{width:20em}.equatio-mobile-content__status-text{margin-top:1em;font-size:1.8em;line-height:1.7em;color:var(--th-slate)}.equatio-mobile-content__status-button{max-width:400px;width:100%;padding-top:1em}.equatio-mobile-content__status-dualbuttons{padding-top:1em}.equatio-mobile-content__status-dualbuttons button{margin:.5em}.equatio-mobile-content__cta{margin-top:auto;margin-bottom:5.8em}.equatio-mobile-content__cta button{margin-top:.6em}.equatio-mobile-qr{position:relative;width:100%;height:8em;display:flex;justify-content:center;align-items:center;box-shadow:0 3px 8px rgba(0,0,0,.2)}.equatio-mobile-qr::before{position:absolute;top:auto;top:initial;bottom:-1.2em;left:50%;content:\"\";width:0;height:0;border-left:1em solid rgba(0,0,0,0);border-right:1em solid rgba(0,0,0,0);border-top:1.2em solid var(--white);border-bottom:none;-webkit-transform:translate(-50%);transform:translate(-50%);z-index:11}.equatio-mobile-qr::after{position:absolute;top:auto;top:initial;bottom:-1.4em;left:50%;content:\"\";width:0;height:0;border-left:1em solid rgba(0,0,0,0);border-right:1em solid rgba(0,0,0,0);border-top:1.2em solid var(--th-grey);border-bottom:none;-webkit-transform:translate(-50%);transform:translate(-50%);z-index:-2}.equatio-mobile-bottom-wrapper{position:-webkit-sticky;position:sticky;bottom:0;width:100%;display:flex;flex-direction:column;z-index:10;align-items:center;margin-top:auto}.equatio-mobile-menu-wrapper{position:absolute;bottom:10em;width:calc(100% - 7.4em);margin-bottom:2em;z-index:11}.equatio-mobile-photobutton-outline{width:7em;height:7em;display:flex;justify-content:inherit;align-items:inherit;border:2px solid #fff;border-radius:10em}.equatio-mobile-photobutton-circle{width:5.6em;height:5.6em;background-color:#fff;border-radius:10em}.equatio-mobile-home-nav-area{background-color:#fff;font-size:10px}.equatio-mobile-home-nav-menu{font-size:10px}.equatio-mobile-home-nav-menu li{padding:1.8em 0 1.8em 4em;border-top-left-radius:0;border-top-right-radius:0;font-size:1.5em;font-weight:400;color:var(--th-slate-dark);background-color:#f7f7f7;fill:#0097e2}.equatio-mobile-home-nav-menu__icon{font-size:10px;width:4.6em;height:4.6em;position:relative;vertical-align:middle;bottom:.1em;border-radius:0px;box-sizing:border-box;padding:8px;background:rgba(0,0,0,0);background-repeat:no-repeat;background-position:50%,50%;fill:#0097e2}.equatio-mobile-home-nav-menu__icon--strip{width:4em;height:4em}.equatio-mobile-home-nav-menu__logo{width:14em;height:3.2em}.equatio-mobile-home-nav-menu__item.gw-list-group__item:first-of-type{border-top-left-radius:0;border-top-right-radius:0}.equatio-mobile-home-nav-menu__item.gw-list-group__item:last-of-type{border-bottom-left-radius:0;border-bottom-right-radius:0}.equatio-mobile-popup{width:100%;padding:1.5em;background-color:#fff;margin:.5em 0 0 0;border-radius:15px;box-shadow:0 3px 6px rgba(0,0,0,.2)}.equatio-mobile-popup p{font-size:1.5em;line-height:1.6em;color:var(--th-slate)}.equatio-mobile-popup--error{max-width:400px;align-self:center}.equatio-mobile-emptystate{width:12.4em;height:12.4em;margin-top:3em;background-color:#eef0f4;border-radius:20em;fill:#dde1e8;display:flex;justify-content:center;align-items:center}.equatio-mobile-emptystate__icon{width:6.1em;height:7.8em}.equatio-mobile-strip-button-wrapper{display:flex;justify-content:center;align-items:center;width:100%;height:6.2em;color:#fff;border-top:1px dashed rgba(255,255,255,.6);background-color:var(--brandColorBlue);list-style-type:none}.equatio-mobile-strip-button-wrapper:hover{background-color:#00aaed}.equatio-mobile-strip-button-wrapper:active{background-color:#00aaed}.equatio-mobile-strip-button{font-size:1.4em;font-weight:600;color:#fff}.equatio-mobile-strip-button__icon{font-size:10px;width:4em;height:4em;position:relative;vertical-align:middle;bottom:.1em;border-radius:0px;box-sizing:border-box;padding:8px;background:rgba(0,0,0,0);background-repeat:no-repeat;background-position:50%,50%;fill:#0097e2}\n",
      ""
    ]);
  },
  function (t, o) {
    const e = () => {
      window.parent.postMessage(
        {
          action: "EQUATIO_CHROME_API_IFRAME_FOCUS_CHANGE"
        },
        "*"
      );
    };
    window.addEventListener("focus", e), window.addEventListener("blur", e);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, l, M) {
    "use strict";
    !function (i) {
      M.d(l, "a", function () {
        return a;
      });
      var t = M(4),
        o = M.n(t),
        t = M(0),
        n = M(66),
        e = M(67),
        r = M(30);
      class a extends t.Component {
        constructor() {
          super(),
            o()(this, "listener", (t) => {
              if (t.source === window) {
                const o = t.data;
                switch (o.action) {
                  case "DESMOS_FRAME_PREDICTION_DATA":
                    this.setState({
                      items: o.results,
                      search: o.search,
                      currentItem: 0
                    });
                    break;

                  case "DESMOS_FRAME_SHOW_AUTOCOMPLETE":
                    this.setState({
                      shown: o.show
                    });
                    break;

                  case "DESMOS_FRAME_PREDICTION_DISABLED":
                    this.setState({
                      isFeatureDisabled: o.disabled
                    });
                    break;

                  case "DESMOS_FRAME_PREDICTION_MOVE_SELECTION":
                    this.updateSelection(o.amount);
                    break;

                  case "DESMOS_FRAME_PREDICTION_INSERT_SELECTION":
                    this.insertSelectedPrediction(o.index);
                    break;

                  case "DESMOS_FRAME_OPTIONS": {
                    const e = this.state.isFeatureDisabled,
                      r = o.options.disabled;
                    e !== r &&
                      this.setState({
                        isFeatureDisabled: r
                      });
                    break;
                  }
                }
              }
            }),
            o()(this, "hidePrediction", () => {
              this.setState({
                shown: !1
              });
            }),
            o()(this, "insertItem", (t) => {
              const o = this.state.search;
              Object(r.b)(o, t), this.resetPrediction();
            });
          const t = window.equatioOptions.disabled;
          this.state = {
            items: [],
            search: "",
            shown: !1,
            currentItem: 0,
            isFeatureDisabled: t
          };
        }
        componentDidMount() {
          window.addEventListener("message", this.listener);
        }
        componentDidUpdate() {
          this.prediction && this.list && Object.assign(this.prediction.style, Object(e.a)(this.prediction, this.list));
        }
        componentWillUnmount() {
          window.removeEventListener("message", this.listener);
        }
        updateSelection(t) {
          const o = this.state.currentItem,
            e = o + t;
          this.setState({
            currentItem: e < 0 ? 0 : e
          });
        }
        resetPrediction() {
          this.setState({
            items: [],
            search: "",
            shown: !1,
            currentItem: 0
          });
        }
        insertSelectedPrediction(t) {
          const o = this.state,
            e = o.items,
            r = o.currentItem;
          t ? this.insertItem(e[t]) : this.insertItem(e[r]);
        }
        render() {
          const t = this.state,
            e = t.items,
            o = t.shown,
            r = t.currentItem,
            a = t.isFeatureDisabled;
          return !a && e.length && o
            ? i.createElement(
                "div",
                {
                  className: "equatio-prediction-wrapper",
                  style: {
                    position: "fixed"
                  },
                  ref: (t) => {
                    this.prediction = t;
                  }
                },
                i.createElement(
                  "ul",
                  {
                    className: "equatio-prediction",
                    style: {
                      overflowY: "auto",
                      height: "100%"
                    },
                    ref: (t) => {
                      this.list = t;
                    }
                  },
                  e.map((t, o) =>
                    i.createElement(n.a, {
                      key: t.text,
                      item: t,
                      isFirst: 0 === o,
                      isLast: o === e.length - 1,
                      selected: r === o,
                      onClicked: this.insertItem,
                      hidePrediction: this.hidePrediction
                    })
                  )
                )
              )
            : null;
        }
      }
    }.call(this, M(0));
  },
  function (t, a, n) {
    "use strict";
    !function (l) {
      n.d(a, "a", function () {
        return r;
      });
      var t = n(4),
        o = n.n(t),
        t = n(0),
        e = n(15),
        M = n.n(e),
        g = n(30);
      const i = () => {
        const t = document.querySelector(".dcg-mq-textarea > textarea");
        t && t.focus && t.focus();
      };
      class r extends t.Component {
        constructor(...t) {
          super(...t),
            o()(this, "onKeyDown", (t) => {
              const o = this.props,
                e = o.isFirst,
                r = o.isLast,
                a = o.hidePrediction;
              (e || r) &&
                (e && "Tab" === t.key && t.shiftKey && (i(), t.preventDefault(), t.stopPropagation()), r) &&
                "Tab" === t.key &&
                !t.shiftKey &&
                (i(), setTimeout(() => a()), t.preventDefault(), t.stopPropagation());
            });
        }
        componentDidUpdate() {
          const t = this.props.selected;
          t && this.item && this.item.scrollIntoViewIfNeeded();
        }
        render() {
          const t = this.props,
            o = t.item,
            e = t.onClicked,
            r = t.selected,
            a = o.text,
            i = o.displayLatex,
            n = o.latex;
          return l.createElement(
            "li",
            {
              className: "equatio-prediction-item",
              ref: (t) => {
                this.item = t;
              }
            },
            l.createElement(
              "button",
              {
                className: M()("equatio-prediction-button", {
                  "equatio-prediction-button--selected": r
                }),
                onClickCapture: () => {
                  e(o), Object(g.c)(!1);
                },
                onKeyDown: this.onKeyDown,
                "aria-label": a,
                ref: (t) => {
                  this.btn = t;
                },
                onMouseDown: () => {
                  this.btn.focus();
                },
                onTouchStart: () => {
                  Object(g.c)(!0);
                },
                type: "button"
              },
              l.createElement(
                "span",
                {
                  className: "equatio-prediction-button__text"
                },
                a
              ),
              l.createElement(
                "div",
                {
                  className: "equatio-prediction-button__icon-wrapper"
                },
                i || n
                  ? l.createElement("img", {
                      className: "equatio-prediction-button__icon",
                      src: "https://equatio-api.texthelp.com/svg/" + encodeURIComponent(i || n),
                      alt: a,
                      onError: (t) => {
                        t.currentTarget.parentNode.removeChild(t.currentTarget);
                      }
                    })
                  : null
              )
            )
          );
        }
      }
    }.call(this, n(0));
  },
  function (t, o, e) {
    "use strict";
    var A = e(35);
    const r = () => {
        try {
          return document.createEvent("TouchEvent"), !0;
        } catch (t) {
          return !1;
        }
      },
      x = /iPad|iPhone|iPod/.test(navigator.platform) || ("MacIntel" === navigator.platform && r());
    o.a = (t, o) => {
      const e = Object(A.a)();
      if (!e) return {};
      const r = e.getBoundingClientRect();
      let a = r.left + 5;
      const i = window.getComputedStyle(t);
      let n = parseInt(i.getPropertyValue("width"), 10);
      n < 100 && (n = 100);
      const l = a + n,
        M = window.innerWidth,
        g = window.innerHeight,
        u = r.top + o.scrollHeight,
        c = (l > M && (a = M - n - 50), x ? r.top + window.scrollY + "px" : r.top + "px"),
        d = a + "px",
        s = u > g ? "0" : "auto";
      return {
        top: c,
        left: d,
        bottom: s
      };
    };
  },
  function (t, o, e) {
    var r = e(109),
      a = e(110),
      i = e(111),
      n = e(113);
    function l(t, o) {
      return r(t) || a(t, o) || i(t, o) || n();
    }
    (t.exports = l), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  function (t, o, e) {
    "use strict";
    var r = e(5),
      r = e.n(r),
      a = e(4),
      i = e.n(a),
      a = e(2),
      n = e.n(a),
      l = e(6);
    function M(o, t) {
      var e,
        r = Object.keys(o);
      return (
        Object.getOwnPropertySymbols &&
          ((e = Object.getOwnPropertySymbols(o)),
          t &&
            (e = e.filter(function (t) {
              return Object.getOwnPropertyDescriptor(o, t).enumerable;
            })),
          r.push.apply(r, e)),
        r
      );
    }
    function g(o) {
      for (var t = 1; t < arguments.length; t++) {
        var e = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? M(Object(e), !0).forEach(function (t) {
              i()(o, t, e[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e))
          : M(Object(e)).forEach(function (t) {
              Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
            });
      }
      return o;
    }
    const u = {
        math: !0,
        chemistry: !0,
        formulas: !0,
        locale: "enUS",
        disabled: !1
      },
      c =
        ((window.equatioOptions = u),
        (t) => {
          (window.equatioOptions = g(g({}, window.equatioOptions), t)),
            window.postMessage({
              action: "DESMOS_FRAME_OPTIONS",
              options: window.equatioOptions
            });
        }),
      d = (t) => {
        const o = t.data;
        t.source === window.parent &&
          (o.action === l.a.GraphUpdateSettings && c(o.options), o.action === l.a.GraphDisablePrediction) &&
          o.disabled !== window.equatioOptions.disabled &&
          c({
            disabled: o.disabled
          });
      };
    window.addEventListener("message", d),
      (o.a = r()(
        n.a.mark(function t() {
          return n.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    window.parent.postMessage(
                      {
                        action: l.a.GraphUpdateSettings
                      },
                      "*"
                    )
                  );

                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      ));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, o, i) {
    "use strict";
    i.r(o),
      function (t) {
        var o = i(16),
          e = i(65),
          r = (i(41), i(106), i(37), i(108), i(43), i(114), i(69));
        Object(r.a)();
        const a = t.createElement(e.a, null);
        Object(o.render)(a, document.querySelector("#root"));
      }.call(this, i(0));
  },
  function (t, o, e) {
    var r = e(107),
      a = ("string" == typeof r && (r = [[t.i, r, ""]]), {});
    (a.insert = "head"), (a.singleton = !1), e(13)(r, a);
    r.locals && (t.exports = r.locals);
  },
  function (t, o, e) {
    (t.exports = e(12)(void 0)).push([
      t.i,
      ""
    ]);
  },
  function (t, o, e) {
    "use strict";
    var r = e(68),
      i = e.n(r),
      r = e(5),
      a = e.n(r),
      r = e(2),
      n = e.n(r),
      l = e(34),
      M = e(30),
      g = e(6);
    const u = (t, o) =>
      window.parent.postMessage(
        {
          action: t,
          result: o
        },
        "*"
      );
    let c,
      d,
      s,
      A = !1;
    const x = "EquatioGraphContainer",
      w = () => ({
        keypad: A,
        expressions: A,
        settingsMenu: !0,
        expressionsTopbar: A,
        pointsOfInterest: !0,
        expressionsCollapsed: !1,
        pasteGraphLink: A,
        images: A,
        folders: A,
        notes: A,
        links: A,
        restrictedFunctions: !A,
        pasteTableData: A,
        trace: !0,
        authorFeatures: A
      }),
      D = (function () {
        var t = a()(
          n.a.mark(function t() {
            var o;
            return n.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (c) {
                        t.next = 14;
                        break;
                      }
                      return (t.prev = 1), (t.next = 4), e.e(0).then(e.bind(null, 71));

                    case 4:
                      return (o = t.sent), (o = o.default), (c = o), t.abrupt("return", !0);

                    case 10:
                      return (t.prev = 10), (t.t0 = t.catch(1)), console.error(t.t0), t.abrupt("return", !1);

                    case 14:
                      return t.abrupt("return", !0);

                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 10]]
            );
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      p = (t) => {
        d &&
          t &&
          0 < t.length &&
          d.setExpression({
            id: "graph1",
            latex: t,
            color: c.Colors.RED
          });
      },
      h = (t) => {
        if (2 <= t.length) return !1;
        const o = i()(t, 1),
          e = o[0];
        if (!e) return !0;
        const r = e.type,
          a = e.latex;
        return "expression" === r && !a;
      },
      I = () => {
        const t = d.getState();
        t && (s = t);
      },
      N = (t) => {
        d &&
          d.updateSettings({
            language: Object(l.a)(t)
          });
      },
      j = () => {
        d && (d.destroy(), (d = null));
      },
      L = (t, o) => {
        const e = document.getElementById(x);
        if (
          (!d || (e && 0 === e.childElementCount)) &&
          ((A = t),
          d && d.destroy(),
          (d = c.GraphingCalculator(e, w())).observe("focusedMathQuill", () => {
            Object(M.a)(d.focusedMathQuill);
          }),
          d.observeEvent("change", () => {
            I();
          }),
          d.observeEvent("graphReset", () => {
            s = null;
          }),
          o ? p(o) : t && s && d.setState(s),
          !t)
        ) {
          const r = document.getElementsByClassName("dcg-overgraph-pillbox-elements")[0];
          r && (r.style.top = "10px");
        }
      },
      C = (t, o) => {
        D().then(() => {
          L(o, t), p(t), o ? d.focusFirstExpression() : u("CORE_DESMOS_DISPATCH_LATEX", t);
        });
      },
      y = (g, u) => {
        D().then(() => {
          L(u);
          let o;
          o = "string" == typeof g ? (0 < g.length ? JSON.parse(g) : null) : g && 0 < Object.keys(g).length ? g : null;
          const t = d.getState(),
            e = JSON.stringify(t),
            r = t.expressions ? t.expressions.list : [],
            a = r.length && r[0].latex ? r[0].latex : "",
            i = e === JSON.stringify(o) && "" !== a,
            n = h(r);
          if (!i)
            if (u) {
              const l = null !== o && h(o.expressions.list),
                M = null !== o && 1 === o.expressions.list.length;
              M && n ? 0 !== a.length || l || d.setState(o) : l || (null !== o && d.setState(o)), d.focusFirstExpression();
            } else {
              let t = "";
              0 === t.length && o && o.expressions.list && (t = o.expressions.list[0].latex || ""), C(t, u);
            }
        });
      },
      f = (t, o, e) => {
        let r;
        if (null !== (r = "string" == typeof o ? (0 < o.length ? JSON.parse(o) : null) : 0 < Object.keys(o).length ? o : null)) {
          const a = h(r.expressions.list);
          a ? C(t, e) : y(r, e);
        } else C(t, e);
      },
      T = () => {
        d && (d.setBlank(), (s = null));
      },
      m = () =>
        new Promise((o) => {
          const t = {
            mode: d.isProjectionUniform() ? "contain" : "stretch",
            width: 800,
            height: 600,
            showLabels: !0
          };
          d.asyncScreenshot(t, (t) => o(t));
        }),
      v = () => d.getState(),
      E = () => {
        d && d.focusFirstExpression();
      };
    window.addEventListener(
      "message",
      (function () {
        var o = a()(
          n.a.mark(function t(o) {
            var e, r, a;
            return n.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (o.source !== window.parent) return t.abrupt("return");
                      t.next = 2;
                      break;

                    case 2:
                      (e = o.data),
                        (t.t0 = e.action),
                        (t.next =
                          t.t0 === g.a.GraphLoad
                            ? 6
                            : t.t0 === g.a.GraphSetExpression
                            ? 16
                            : t.t0 === g.a.GraphDestroy
                            ? 18
                            : t.t0 === g.a.GraphInitialise
                            ? 20
                            : t.t0 === g.a.GraphSetLocale
                            ? 22
                            : t.t0 === g.a.GraphSetState
                            ? 24
                            : t.t0 === g.a.GraphSetLatex
                            ? 26
                            : t.t0 === g.a.GraphSetCalculator
                            ? 28
                            : t.t0 === g.a.GraphClear
                            ? 30
                            : t.t0 === g.a.GraphGetScreenshot
                            ? 32
                            : t.t0 === g.a.GraphGetState
                            ? 43
                            : t.t0 === g.a.GraphFocus
                            ? 45
                            : t.t0 === g.a.GraphSetPrediction
                            ? 47
                            : 50);
                      break;

                    case 6:
                      return (t.prev = 6), (t.next = 9), D();

                    case 9:
                      u(e.action, !0), (t.next = 15);
                      break;

                    case 12:
                      (t.prev = 12), (t.t1 = t.catch(6)), u(e.action, !1);

                    case 15:
                      return t.abrupt("break", 51);

                    case 16:
                      return p(e.latex), t.abrupt("break", 51);

                    case 18:
                      return j(), t.abrupt("break", 51);

                    case 20:
                      return L(e.isPremium, e.latex), t.abrupt("break", 51);

                    case 22:
                      return N(e.locale), t.abrupt("break", 51);

                    case 24:
                      return y(e.calculatorState, e.isPremium), t.abrupt("break", 51);

                    case 26:
                      return C(e.latex, e.isPremium), t.abrupt("break", 51);

                    case 28:
                      return f(e.latex, e.calculatorState, e.isPremium), t.abrupt("break", 51);

                    case 30:
                      return T(), t.abrupt("break", 51);

                    case 32:
                      return (t.prev = 32), (t.next = 35), m();

                    case 35:
                      (r = t.sent), u(e.action, r), (t.next = 42);
                      break;

                    case 39:
                      (t.prev = 39), (t.t2 = t.catch(32)), u(e.action, null);

                    case 42:
                      return t.abrupt("break", 51);

                    case 43:
                      return u(e.action, v()), t.abrupt("break", 51);

                    case 45:
                      return E(), t.abrupt("break", 51);

                    case 47:
                      return (
                        (r = e.results),
                        (a = e.search),
                        window.postMessage({
                          action: "DESMOS_FRAME_PREDICTION_DATA",
                          results: r,
                          search: a
                        }),
                        t.abrupt("break", 51)
                      );

                    case 50:
                      return t.abrupt("break", 51);

                    case 51:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [
                [6, 12],
                [32, 39]
              ]
            );
          })
        );
        return function (t) {
          return o.apply(this, arguments);
        };
      })()
    );
  },
  function (t, o) {
    function e(t) {
      if (Array.isArray(t)) return t;
    }
    (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  function (t, o) {
    function e(t, o) {
      var e = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
      if (null != e) {
        var r,
          a,
          i,
          n,
          l = [],
          M = !0,
          g = !1;
        try {
          if (((i = (e = e.call(t)).next), 0 === o)) {
            if (Object(e) !== e) return;
            M = !1;
          } else for (; !(M = (r = i.call(e)).done) && (l.push(r.value), l.length !== o); M = !0);
        } catch (t) {
          (g = !0), (a = t);
        } finally {
          try {
            if (!M && null != e.return && ((n = e.return()), Object(n) !== n)) return;
          } finally {
            if (g) throw a;
          }
        }
        return l;
      }
    }
    (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  function (t, o, e) {
    var r = e(112);
    function a(t, o) {
      var e;
      if (t)
        return "string" == typeof t
          ? r(t, o)
          : "Map" === (e = "Object" === (e = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : e) ||
            "Set" === e
          ? Array.from(t)
          : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          ? r(t, o)
          : void 0;
    }
    (t.exports = a), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  function (t, o) {
    function e(t, o) {
      (null == o || o > t.length) && (o = t.length);
      for (var e = 0, r = new Array(o); e < o; e++) r[e] = t[e];
      return r;
    }
    (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  function (t, o) {
    function e() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  function (t, o, e) {
    var r = e(115),
      a = ("string" == typeof r && (r = [[t.i, r, ""]]), {});
    (a.insert = "head"), (a.singleton = !1), e(13)(r, a);
    r.locals && (t.exports = r.locals);
  },
  function (t, o, e) {
    (t.exports = e(12)(void 0)).push([
      t.i,
      "html {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    font-size: 16px;\n    overflow: hidden;\n}\n\n#EquatioGraphContainer {\n    height: 100%;\n    width: 100%;\n}\n\n#root > div {\n    z-index: 999999;\n}",
      ""
    ]);
  }
]);