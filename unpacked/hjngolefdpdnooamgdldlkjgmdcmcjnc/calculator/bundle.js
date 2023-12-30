!(function (u) {
  function t(t) {
    for (var e, r, n = t[0], o = t[1], i = 0, a = []; i < n.length; i++)
      (r = n[i]), Object.prototype.hasOwnProperty.call(c, r) && c[r] && a.push(c[r][0]), (c[r] = 0);
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (u[e] = o[e]);
    for (f && f(t); a.length; ) a.shift()();
  }
  var r = {},
    c = {
      2: 0
    };
  function s(t) {
    return l.p + "frameChunks/" + t + ".js";
  }
  function l(t) {
    var e;
    return (
      r[t] ||
      ((e = r[t] =
        {
          i: t,
          l: !1,
          exports: {}
        }),
      u[t].call(e.exports, e, e.exports, l),
      (e.l = !0),
      e)
    ).exports;
  }
  (l.e = function (r) {
    var t,
      e = [],
      n = function (e) {
        const r = s(e);
        chrome.runtime.sendMessage(
          "hjngolefdpdnooamgdldlkjgmdcmcjnc",
          {
            action: "EQUATIO_WEBPACK_LOAD_DEPENDENCY",
            scriptPath: r
          },
          function () {
            chrome.runtime.lastError && console.error("Failed to load dependency", r);
            const t = c[e];
            0 !== t && (t && t[1](), (c[e] = void 0));
          }
        );
      },
      o = function (o) {
        var t,
          e = document.getElementsByTagName("head")[0],
          i = document.createElement("script"),
          a =
            ((i.charset = "utf-8"),
            (i.timeout = 120),
            l.nc && i.setAttribute("nonce", l.nc),
            (i.src = s(o)),
            0 !== i.src.indexOf(window.location.origin + "/") && (i.crossOrigin = "anonymous"),
            (t = function (t) {
              (i.onerror = i.onload = null), clearTimeout(a);
              var e,
                r,
                n = c[o];
              0 !== n &&
                (n &&
                  ((e = t && ("load" === t.type ? "missing" : t.type)),
                  (t = t && t.target && t.target.src),
                  ((r = new Error("Loading chunk " + o + " failed.\n(" + e + ": " + t + ")")).type = e),
                  (r.request = t),
                  n[1](r)),
                (c[o] = void 0));
            }),
            setTimeout(function () {
              t({
                type: "timeout",
                target: i
              });
            }, 12e4));
        (i.onerror = i.onload = t), e.appendChild(i);
      },
      i = c[r];
    return (
      0 !== i &&
        (i
          ? e.push(i[2])
          : ((t = new Promise(function (t, e) {
              i = c[r] = [t, e];
            })),
            e.push((i[2] = t)),
            ("chrome" === window.equatioCoreChunkLoading ? n : o)(r))),
      Promise.all(e)
    );
  }),
    (l.m = u),
    (l.c = r),
    (l.d = function (t, e, r) {
      l.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: r
        });
    }),
    (l.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
    }),
    (l.t = function (e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (l.r(r),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
        }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          l.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (l.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return l.d(e, "a", e), e;
    }),
    (l.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (l.p = "/"),
    (l.oe = function (t) {
      throw (console.error(t), t);
    });
  var e = (n = window.equatioChromeJsonp = window.equatioChromeJsonp || []).push.bind(n);
  n.push = t;
  for (var n = n.slice(), o = 0; o < n.length; o++) t(n[o]);
  var f = e;
  l((l.s = 104));
})({
  104: function (t, e, r) {
    "use strict";
    r.r(e);
    var e = r(5),
      n = r.n(e),
      e = r(2),
      o = r.n(e),
      i = r(34),
      a = r(6);
    r(43);
    let u, c, s;
    const l = (function () {
        var t = n()(
          o.a.mark(function t() {
            var e;
            return o.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (u) {
                        t.next = 12;
                        break;
                      }
                      return (t.prev = 1), (t.next = 4), r.e(0).then(r.bind(null, 71));

                    case 4:
                      (e = t.sent), (e = e.default), (u = e), (t.next = 12);
                      break;

                    case 9:
                      return (t.prev = 9), (t.t0 = t.catch(1)), t.abrupt("return", Promise.reject(new Error(t.t0)));

                    case 12:
                      return t.abrupt("return", Promise.resolve(u));

                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 9]]
            );
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      f = (t) => {
        c &&
          c.updateSettings({
            language: Object(i.a)(t)
          });
      },
      p = (t) => {
        if (u && !c) {
          const e = document.querySelector("#EquatioCalculatorContainer");
          (c = u.ScientificCalculator(e)), f(t), s && c.setState(s);
        }
      },
      h = () => {
        c && ((s = c.getState()), c.destroy(), (c = null));
      };
    window.addEventListener(
      "message",
      (function () {
        var e = n()(
          o.a.mark(function t(e) {
            var r, n;
            return o.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e.source !== window.parent) return t.abrupt("return");
                      t.next = 2;
                      break;

                    case 2:
                      (r = e.data),
                        (t.t0 = r.action),
                        (t.next =
                          t.t0 === a.a.CalcLoad
                            ? 6
                            : t.t0 === a.a.CalcSetLocale
                            ? 18
                            : t.t0 === a.a.CalcInitialise
                            ? 20
                            : t.t0 === a.a.CalcDestroy
                            ? 22
                            : 24);
                      break;

                    case 6:
                      return (
                        (n = (t) =>
                          window.parent.postMessage(
                            {
                              action: r.action,
                              result: t
                            },
                            "*"
                          )),
                        (t.prev = 7),
                        (t.next = 10),
                        l()
                      );

                    case 10:
                      n(!0), (t.next = 17);
                      break;

                    case 13:
                      (t.prev = 13), (t.t1 = t.catch(7)), console.error(t.t1), n(!1);

                    case 17:
                      return t.abrupt("break", 25);

                    case 18:
                      return f(r.locale), t.abrupt("break", 25);

                    case 20:
                      return p(r.locale), t.abrupt("break", 25);

                    case 22:
                      return h(), t.abrupt("break", 25);

                    case 24:
                      return t.abrupt("break", 25);

                    case 25:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[7, 13]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })()
    );
  },
  18: function (x, t, e) {
    var L = e(8).default;
    function T() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (x.exports = T =
        function () {
          return a;
        }),
        (x.exports.__esModule = !0),
        (x.exports.default = x.exports);
      var a = {},
        t = Object.prototype,
        c = t.hasOwnProperty,
        o =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        e = "function" == typeof Symbol ? Symbol : {},
        n = e.iterator || "@@iterator",
        r = e.asyncIterator || "@@asyncIterator",
        i = e.toStringTag || "@@toStringTag";
      function u(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          t[e]
        );
      }
      try {
        u({}, "");
      } catch (t) {
        u = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function s(t, e, r, n) {
        (e = e && e.prototype instanceof p ? e : p), (e = Object.create(e.prototype)), (n = new b(n || []));
        return (
          o(e, "_invoke", {
            value: S(t, r, n)
          }),
          e
        );
      }
      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      a.wrap = s;
      var f = {};
      function p() {}
      function h() {}
      function d() {}
      var e = {},
        y =
          (u(e, n, function () {
            return this;
          }),
          Object.getPrototypeOf),
        y = y && y(y(w([]))),
        v = (y && y !== t && c.call(y, n) && (e = y), (d.prototype = p.prototype = Object.create(e)));
      function E(t) {
        ["next", "throw", "return"].forEach(function (e) {
          u(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function _(i, a) {
        function u(t, e, r, n) {
          var o,
            t = l(i[t], i, e);
          if ("throw" !== t.type)
            return (e = (o = t.arg).value) && "object" == L(e) && c.call(e, "__await")
              ? a.resolve(e.__await).then(
                  function (t) {
                    u("next", t, r, n);
                  },
                  function (t) {
                    u("throw", t, r, n);
                  }
                )
              : a.resolve(e).then(
                  function (t) {
                    (o.value = t), r(o);
                  },
                  function (t) {
                    return u("throw", t, r, n);
                  }
                );
          n(t.arg);
        }
        var e;
        o(this, "_invoke", {
          value: function (r, n) {
            function t() {
              return new a(function (t, e) {
                u(r, n, t, e);
              });
            }
            return (e = e ? e.then(t, t) : t());
          }
        });
      }
      function S(n, o, i) {
        var a = "suspendedStart";
        return function (t, e) {
          if ("executing" === a) throw new Error("Generator is already running");
          if ("completed" === a) {
            if ("throw" === t) throw e;
            return C();
          }
          for (i.method = t, i.arg = e; ; ) {
            var r = i.delegate;
            if (r) {
              r = m(r, i);
              if (r) {
                if (r === f) continue;
                return r;
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;
            else if ("throw" === i.method) {
              if ("suspendedStart" === a) throw ((a = "completed"), i.arg);
              i.dispatchException(i.arg);
            } else "return" === i.method && i.abrupt("return", i.arg);
            a = "executing";
            r = l(n, o, i);
            if ("normal" === r.type) {
              if (((a = i.done ? "completed" : "suspendedYield"), r.arg === f)) continue;
              return {
                value: r.arg,
                done: i.done
              };
            }
            "throw" === r.type && ((a = "completed"), (i.method = "throw"), (i.arg = r.arg));
          }
        };
      }
      function m(t, e) {
        var r = e.method,
          n = t.iterator[r];
        return void 0 === n
          ? ((e.delegate = null),
            ("throw" === r && t.iterator.return && ((e.method = "return"), (e.arg = void 0), m(t, e), "throw" === e.method)) ||
              ("return" !== r && ((e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
            f)
          : "throw" === (r = l(n, t.iterator, e.arg)).type
          ? ((e.method = "throw"), (e.arg = r.arg), (e.delegate = null), f)
          : (n = r.arg)
          ? n.done
            ? ((e[t.resultName] = n.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              f)
            : n
          : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), f);
      }
      function g(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
      }
      function O(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function b(t) {
        (this.tryEntries = [
          {
            tryLoc: "root"
          }
        ]),
          t.forEach(g, this),
          this.reset(!0);
      }
      function w(e) {
        if (e) {
          var r,
            t = e[n];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length))
            return (
              (r = -1),
              ((t = function t() {
                for (; ++r < e.length; ) if (c.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              }).next = t)
            );
        }
        return {
          next: C
        };
      }
      function C() {
        return {
          value: void 0,
          done: !0
        };
      }
      return (
        (h.prototype = d),
        o(v, "constructor", {
          value: d,
          configurable: !0
        }),
        o(d, "constructor", {
          value: h,
          configurable: !0
        }),
        (h.displayName = u(d, i, "GeneratorFunction")),
        (a.isGeneratorFunction = function (t) {
          t = "function" == typeof t && t.constructor;
          return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (a.mark = function (t) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), u(t, i, "GeneratorFunction")),
            (t.prototype = Object.create(v)),
            t
          );
        }),
        (a.awrap = function (t) {
          return {
            __await: t
          };
        }),
        E(_.prototype),
        u(_.prototype, r, function () {
          return this;
        }),
        (a.AsyncIterator = _),
        (a.async = function (t, e, r, n, o) {
          void 0 === o && (o = Promise);
          var i = new _(s(t, e, r, n), o);
          return a.isGeneratorFunction(e)
            ? i
            : i.next().then(function (t) {
                return t.done ? t.value : i.next();
              });
        }),
        E(v),
        u(v, i, "Generator"),
        u(v, n, function () {
          return this;
        }),
        u(v, "toString", function () {
          return "[object Generator]";
        }),
        (a.keys = function (t) {
          var e,
            r = Object(t),
            n = [];
          for (e in r) n.push(e);
          return (
            n.reverse(),
            function t() {
              for (; n.length; ) {
                var e = n.pop();
                if (e in r) return (t.value = e), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (a.values = w),
        (b.prototype = {
          constructor: b,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(O),
              !t)
            )
              for (var e in this) "t" === e.charAt(0) && c.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (r) {
            if (this.done) throw r;
            var n = this;
            function t(t, e) {
              return (i.type = "throw"), (i.arg = r), (n.next = t), e && ((n.method = "next"), (n.arg = void 0)), !!e;
            }
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var o = this.tryEntries[e],
                i = o.completion;
              if ("root" === o.tryLoc) return t("end");
              if (o.tryLoc <= this.prev) {
                var a = c.call(o, "catchLoc"),
                  u = c.call(o, "finallyLoc");
                if (a && u) {
                  if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                } else if (a) {
                  if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var n = this.tryEntries[r];
              if (n.tryLoc <= this.prev && c.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var o = n;
                break;
              }
            }
            var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
            return (i.type = t), (i.arg = e), o ? ((this.method = "next"), (this.next = o.finallyLoc), f) : this.complete(i);
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              f
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), f;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var r,
                n,
                o = this.tryEntries[e];
              if (o.tryLoc === t) return "throw" === (r = o.completion).type && ((n = r.arg), O(o)), n;
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = {
                iterator: w(t),
                resultName: e,
                nextLoc: r
              }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          }
        }),
        a
      );
    }
    (x.exports = T), (x.exports.__esModule = !0), (x.exports.default = x.exports);
  },
  2: function (t, e, r) {
    r = r(18)();
    t.exports = r;
    try {
      regeneratorRuntime = r;
    } catch (t) {
      "object" == typeof globalThis ? (globalThis.regeneratorRuntime = r) : Function("r", "regeneratorRuntime = r")(r);
    }
  },
  20: function (t, e, r) {
    var n = r(8).default,
      o = r(21);
    function i(t) {
      t = o(t, "string");
      return "symbol" === n(t) ? t : String(t);
    }
    (t.exports = i), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  21: function (t, e, r) {
    var n = r(8).default;
    function o(t, e) {
      if ("object" !== n(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 === r) return ("string" === e ? String : Number)(t);
      r = r.call(t, e || "default");
      if ("object" !== n(r)) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    (t.exports = o), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  34: function (t, e, r) {
    "use strict";
    e.a = (t = "en") => {
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
  4: function (t, e, r) {
    var n = r(20);
    function o(t, e, r) {
      return (
        (e = n(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    (t.exports = o), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  43: function (t, e) {
    const r = () => {
      window.parent.postMessage(
        {
          action: "EQUATIO_CHROME_API_IFRAME_FOCUS_CHANGE"
        },
        "*"
      );
    };
    window.addEventListener("focus", r), window.addEventListener("blur", r);
  },
  5: function (t, e) {
    function c(t, e, r, n, o, i, a) {
      try {
        var u = t[i](a),
          c = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function r(u) {
      return function () {
        var t = this,
          a = arguments;
        return new Promise(function (e, r) {
          var n = u.apply(t, a);
          function o(t) {
            c(n, e, r, o, i, "next", t);
          }
          function i(t) {
            c(n, e, r, o, i, "throw", t);
          }
          o(void 0);
        });
      };
    }
    (t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  6: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return n;
    });
    r(4);
    const n = {
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
      CalcDestroy: "CORE_DESMOS_SCIENTIFIC_DESTROY",
      GraphPredictionAnalytics: "CORE_DESMOS_PREDICTION_ANALYTICS"
    };
  },
  8: function (e, t) {
    function r(t) {
      return (
        (e.exports = r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        r(t)
      );
    }
    (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  }
});
