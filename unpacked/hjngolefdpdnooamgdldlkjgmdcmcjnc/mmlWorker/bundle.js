!(function (u) {
  function t(t) {
    for (var e, n, r = t[0], o = t[1], i = 0, a = []; i < r.length; i++)
      (n = r[i]), Object.prototype.hasOwnProperty.call(s, n) && s[n] && a.push(s[n][0]), (s[n] = 0);
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (u[e] = o[e]);
    for (f && f(t); a.length; ) a.shift()();
  }
  var n = {},
    s = {
      6: 0
    };
  function c(t) {
    return l.p + "frameChunks/" + t + ".js";
  }
  function l(t) {
    var e;
    return (
      n[t] ||
      ((e = n[t] =
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
  (l.e = function (n) {
    var t,
      e = [],
      r = function (e) {
        const n = c(e);
        chrome.runtime.sendMessage(
          "hjngolefdpdnooamgdldlkjgmdcmcjnc",
          {
            action: "EQUATIO_WEBPACK_LOAD_DEPENDENCY",
            scriptPath: n
          },
          function () {
            chrome.runtime.lastError && console.error("Failed to load dependency", n);
            const t = s[e];
            0 !== t && (t && t[1](), (s[e] = void 0));
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
            (i.src = c(o)),
            0 !== i.src.indexOf(window.location.origin + "/") && (i.crossOrigin = "anonymous"),
            (t = function (t) {
              (i.onerror = i.onload = null), clearTimeout(a);
              var e,
                n,
                r = s[o];
              0 !== r &&
                (r &&
                  ((e = t && ("load" === t.type ? "missing" : t.type)),
                  (t = t && t.target && t.target.src),
                  ((n = new Error("Loading chunk " + o + " failed.\n(" + e + ": " + t + ")")).type = e),
                  (n.request = t),
                  r[1](n)),
                (s[o] = void 0));
            }),
            setTimeout(function () {
              t({
                type: "timeout",
                target: i
              });
            }, 12e4));
        (i.onerror = i.onload = t), e.appendChild(i);
      },
      i = s[n];
    return (
      0 !== i &&
        (i
          ? e.push(i[2])
          : ((t = new Promise(function (t, e) {
              i = s[n] = [t, e];
            })),
            e.push((i[2] = t)),
            ("chrome" === window.equatioCoreChunkLoading ? r : o)(n))),
      Promise.all(e)
    );
  }),
    (l.m = u),
    (l.c = n),
    (l.d = function (t, e, n) {
      l.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
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
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          l.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
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
  var e = (r = window.equatioChromeJsonp = window.equatioChromeJsonp || []).push.bind(r);
  r.push = t;
  for (var r = r.slice(), o = 0; o < r.length; o++) t(r[o]);
  var f = e;
  l((l.s = 95));
})({
  18: function (O, t, e) {
    var A = e(8).default;
    function C() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (O.exports = C =
        function () {
          return a;
        }),
        (O.exports.__esModule = !0),
        (O.exports.default = O.exports);
      var a = {},
        t = Object.prototype,
        s = t.hasOwnProperty,
        o =
          Object.defineProperty ||
          function (t, e, n) {
            t[e] = n.value;
          },
        e = "function" == typeof Symbol ? Symbol : {},
        r = e.iterator || "@@iterator",
        n = e.asyncIterator || "@@asyncIterator",
        i = e.toStringTag || "@@toStringTag";
      function u(t, e, n) {
        return (
          Object.defineProperty(t, e, {
            value: n,
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
        u = function (t, e, n) {
          return (t[e] = n);
        };
      }
      function c(t, e, n, r) {
        (e = e && e.prototype instanceof m ? e : m), (e = Object.create(e.prototype)), (r = new w(r || []));
        return (
          o(e, "_invoke", {
            value: x(t, n, r)
          }),
          e
        );
      }
      function l(t, e, n) {
        try {
          return {
            type: "normal",
            arg: t.call(e, n)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }
      a.wrap = c;
      var f = {};
      function m() {}
      function p() {}
      function h() {}
      var e = {},
        d =
          (u(e, r, function () {
            return this;
          }),
          Object.getPrototypeOf),
        d = d && d(d(T([]))),
        g = (d && d !== t && s.call(d, r) && (e = d), (h.prototype = m.prototype = Object.create(e)));
      function y(t) {
        ["next", "throw", "return"].forEach(function (e) {
          u(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function v(i, a) {
        function u(t, e, n, r) {
          var o,
            t = l(i[t], i, e);
          if ("throw" !== t.type)
            return (e = (o = t.arg).value) && "object" == A(e) && s.call(e, "__await")
              ? a.resolve(e.__await).then(
                  function (t) {
                    u("next", t, n, r);
                  },
                  function (t) {
                    u("throw", t, n, r);
                  }
                )
              : a.resolve(e).then(
                  function (t) {
                    (o.value = t), n(o);
                  },
                  function (t) {
                    return u("throw", t, n, r);
                  }
                );
          r(t.arg);
        }
        var e;
        o(this, "_invoke", {
          value: function (n, r) {
            function t() {
              return new a(function (t, e) {
                u(n, r, t, e);
              });
            }
            return (e = e ? e.then(t, t) : t());
          }
        });
      }
      function x(r, o, i) {
        var a = "suspendedStart";
        return function (t, e) {
          if ("executing" === a) throw new Error("Generator is already running");
          if ("completed" === a) {
            if ("throw" === t) throw e;
            return E();
          }
          for (i.method = t, i.arg = e; ; ) {
            var n = i.delegate;
            if (n) {
              n = N(n, i);
              if (n) {
                if (n === f) continue;
                return n;
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;
            else if ("throw" === i.method) {
              if ("suspendedStart" === a) throw ((a = "completed"), i.arg);
              i.dispatchException(i.arg);
            } else "return" === i.method && i.abrupt("return", i.arg);
            a = "executing";
            n = l(r, o, i);
            if ("normal" === n.type) {
              if (((a = i.done ? "completed" : "suspendedYield"), n.arg === f)) continue;
              return {
                value: n.arg,
                done: i.done
              };
            }
            "throw" === n.type && ((a = "completed"), (i.method = "throw"), (i.arg = n.arg));
          }
        };
      }
      function N(t, e) {
        var n = e.method,
          r = t.iterator[n];
        return void 0 === r
          ? ((e.delegate = null),
            ("throw" === n && t.iterator.return && ((e.method = "return"), (e.arg = void 0), N(t, e), "throw" === e.method)) ||
              ("return" !== n && ((e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
            f)
          : "throw" === (n = l(r, t.iterator, e.arg)).type
          ? ((e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f)
          : (r = n.arg)
          ? r.done
            ? ((e[t.resultName] = r.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              f)
            : r
          : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), f);
      }
      function b(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
      }
      function S(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function w(t) {
        (this.tryEntries = [
          {
            tryLoc: "root"
          }
        ]),
          t.forEach(b, this),
          this.reset(!0);
      }
      function T(e) {
        if (e) {
          var n,
            t = e[r];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length))
            return (
              (n = -1),
              ((t = function t() {
                for (; ++n < e.length; ) if (s.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              }).next = t)
            );
        }
        return {
          next: E
        };
      }
      function E() {
        return {
          value: void 0,
          done: !0
        };
      }
      return (
        (p.prototype = h),
        o(g, "constructor", {
          value: h,
          configurable: !0
        }),
        o(h, "constructor", {
          value: p,
          configurable: !0
        }),
        (p.displayName = u(h, i, "GeneratorFunction")),
        (a.isGeneratorFunction = function (t) {
          t = "function" == typeof t && t.constructor;
          return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (a.mark = function (t) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : ((t.__proto__ = h), u(t, i, "GeneratorFunction")),
            (t.prototype = Object.create(g)),
            t
          );
        }),
        (a.awrap = function (t) {
          return {
            __await: t
          };
        }),
        y(v.prototype),
        u(v.prototype, n, function () {
          return this;
        }),
        (a.AsyncIterator = v),
        (a.async = function (t, e, n, r, o) {
          void 0 === o && (o = Promise);
          var i = new v(c(t, e, n, r), o);
          return a.isGeneratorFunction(e)
            ? i
            : i.next().then(function (t) {
                return t.done ? t.value : i.next();
              });
        }),
        y(g),
        u(g, i, "Generator"),
        u(g, r, function () {
          return this;
        }),
        u(g, "toString", function () {
          return "[object Generator]";
        }),
        (a.keys = function (t) {
          var e,
            n = Object(t),
            r = [];
          for (e in n) r.push(e);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var e = r.pop();
                if (e in n) return (t.value = e), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (a.values = T),
        (w.prototype = {
          constructor: w,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
              !t)
            )
              for (var e in this) "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (n) {
            if (this.done) throw n;
            var r = this;
            function t(t, e) {
              return (i.type = "throw"), (i.arg = n), (r.next = t), e && ((r.method = "next"), (r.arg = void 0)), !!e;
            }
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var o = this.tryEntries[e],
                i = o.completion;
              if ("root" === o.tryLoc) return t("end");
              if (o.tryLoc <= this.prev) {
                var a = s.call(o, "catchLoc"),
                  u = s.call(o, "finallyLoc");
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
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var r = this.tryEntries[n];
              if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var o = r;
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
              var n = this.tryEntries[e];
              if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), f;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
              var n,
                r,
                o = this.tryEntries[e];
              if (o.tryLoc === t) return "throw" === (n = o.completion).type && ((r = n.arg), S(o)), r;
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, n) {
            return (
              (this.delegate = {
                iterator: T(t),
                resultName: e,
                nextLoc: n
              }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          }
        }),
        a
      );
    }
    (O.exports = C), (O.exports.__esModule = !0), (O.exports.default = O.exports);
  },
  2: function (t, e, n) {
    n = n(18)();
    t.exports = n;
    try {
      regeneratorRuntime = n;
    } catch (t) {
      "object" == typeof globalThis ? (globalThis.regeneratorRuntime = n) : Function("r", "regeneratorRuntime = r")(n);
    }
  },
  23: function (t, e, n) {
    var r;
    void 0 !==
      (n =
        "function" ==
        typeof (r = function () {
          "use strict";
          if (!Array.isArray)
            Array.isArray = function (t) {
              return Object.prototype.toString.call(t) === "[object Array]";
            };
          function c(t) {
            var e = Object.prototype.hasOwnProperty,
              n = [],
              r;
            for (r in t) if (e.call(t, r)) n.push(r);
            return n;
          }
          function f(t) {
            if (t === undefined) return null;
            if (t) return decodeURIComponent(t);
            return t;
          }
          function l(t) {
            switch (typeof t) {
              case "string":
                return encodeURIComponent(t);

              case "boolean":
                return t ? "true" : "false";

              case "number":
                return isFinite(t) ? t : "";

              case "object":
                if (t === undefined || t === null) return "";
                if (JSON && JSON.stringify) return encodeURIComponent(JSON.stringify(t));
                return "";

              default:
                return "";
            }
          }
          return {
            version: "1.3.2",
            parse: function (t, e, n) {
              var r;
              e = e || "&";
              n = n || "=";
              var o = Object.create(null);
              if (typeof t !== "string") return o;
              r = t.indexOf("?");
              if (r < 0 && t.indexOf(n) < 0) return o;
              if (r >= 0) t = t.substr(r + 1);
              t = t.replace(/^[\s\uFEFF\xA0\?#&]+|[\s\uFEFF\xA0&]+$/g, "");
              r = t.lastIndexOf("#");
              if (r > 0) t = t.substr(0, r);
              var i = t.split(e);
              for (r = 0; r < i.length; ++r) {
                var a = i[r].replace(/\+/g, " ");
                var u = a.indexOf(n);
                var s, c;
                if (u === 0 || a.length === 0) continue;
                if (u < 0) {
                  s = f(a);
                  c = null;
                } else {
                  s = f(a.substr(0, u));
                  c = f(a.substr(u + 1));
                }
                var l = o[s];
                if (l === undefined) o[s] = c;
                else if (Array.isArray(l)) l.push(c);
                else o[s] = [l, c];
              }
              return o;
            },
            stringify: function (t, e, n) {
              e = e || "&";
              n = n || "=";
              if ((typeof t !== "object" && typeof t !== "function") || t === null) return "";
              var r = c(t);
              if (!r || !r.length) return "";
              var o = [];
              var i = 0,
                a,
                u,
                s;
              for (; i < r.length; i++) {
                u = l(r[i]);
                s = t[u];
                if (s !== undefined && typeof s !== "function")
                  if (Array.isArray(s)) for (a = 0; a < s.length; ++a) o.push(u + n + (s[a] ? l(s[a]) : ""));
                  else {
                    if (s !== null) s = l(s);
                    o.push(s === null || s === undefined ? u : u + n + s);
                  }
              }
              return o.join(e);
            }
          };
        })
          ? r.call(e, n, e, t)
          : r) && (t.exports = n);
  },
  48: function (t, e, n) {
    /*! @license DOMPurify 2.4.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.4/LICENSE */
    t.exports = (function () {
      "use strict";
      function Gt(t) {
        return (Gt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              })(t);
      }
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function r() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function i(t, e, n) {
        return (i = r()
          ? Reflect.construct
          : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              e = new (Function.bind.apply(t, r))();
              return n && o(e, n.prototype), e;
            }).apply(null, arguments);
      }
      function jt(t) {
        return e(t) || n(t) || a(t) || p();
      }
      function e(t) {
        if (Array.isArray(t)) return u(t);
      }
      function n(t) {
        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
      }
      function a(t, e) {
        var n;
        if (t)
          return "string" == typeof t
            ? u(t, e)
            : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) ||
              "Set" === n
            ? Array.from(t)
            : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? u(t, e)
            : void 0;
      }
      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function p() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var h = Object.hasOwnProperty,
        s = Object.setPrototypeOf,
        d = Object.isFrozen,
        g = Object.getPrototypeOf,
        y = Object.getOwnPropertyDescriptor,
        qt = Object.freeze,
        t = Object.seal,
        v = Object.create,
        c = "undefined" != typeof Reflect && Reflect,
        l = c.apply,
        f = c.construct,
        l =
          l ||
          function (t, e, n) {
            return t.apply(e, n);
          },
        qt =
          qt ||
          function (t) {
            return t;
          },
        t =
          t ||
          function (t) {
            return t;
          },
        f =
          f ||
          function (t, e) {
            return i(t, jt(e));
          },
        me = m(Array.prototype.forEach),
        $t = m(Array.prototype.pop),
        Qt = m(Array.prototype.push),
        Kt = m(String.prototype.toLowerCase),
        Vt = m(String.prototype.toString),
        pe = m(String.prototype.match),
        Ht = m(String.prototype.replace),
        he = m(String.prototype.indexOf),
        de = m(String.prototype.trim),
        Yt = m(RegExp.prototype.test),
        Wt = x(TypeError);
      function m(o) {
        return function (t) {
          for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
          return l(o, t, n);
        };
      }
      function x(r) {
        return function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          return f(r, e);
        };
      }
      function Zt(t, e, n) {
        (n = n || Kt), s && s(t, null);
        for (var r = e.length; r--; ) {
          var o,
            i = e[r];
          "string" == typeof i && (o = n(i)) !== i && (d(e) || (e[r] = o), (i = o)), (t[i] = !0);
        }
        return t;
      }
      function te(t) {
        var e,
          n = v(null);
        for (e in t) !0 === l(h, t, [e]) && (n[e] = t[e]);
        return n;
      }
      function ee(t, e) {
        for (; null !== t; ) {
          var n = y(t, e);
          if (n) {
            if (n.get) return m(n.get);
            if ("function" == typeof n.value) return m(n.value);
          }
          t = g(t);
        }
        function r(t) {
          return null;
        }
        return r;
      }
      var ne = qt([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr"
        ]),
        re = qt([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern"
        ]),
        oe = qt([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence"
        ]),
        ge = qt([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "fedropshadow",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use"
        ]),
        ie = qt([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover"
        ]),
        ye = qt([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none"
        ]),
        ae = qt(["#text"]),
        ue = qt([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "nonce",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "playsinline",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "xmlns",
          "slot"
        ]),
        se = qt([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clippathunits",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "startoffset",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "systemlanguage",
          "tabindex",
          "targetx",
          "targety",
          "transform",
          "transform-origin",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan"
        ]),
        ce = qt([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns"
        ]),
        le = qt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        ve = t(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        xe = t(/<%[\w\W]*|[\w\W]*%>/gm),
        Ne = t(/\${[\w\W]*}/gm),
        be = t(/^data-[\-\w.\u00B7-\uFFFF]/),
        Se = t(/^aria-[\-\w]+$/),
        we = t(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        Te = t(/^(?:\w+script|data):/i),
        Ee = t(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Oe = t(/^html$/i),
        Ae = function () {
          return "undefined" == typeof window ? null : window;
        },
        Ce = function (t, e) {
          if ("object" !== Gt(t) || "function" != typeof t.createPolicy) return null;
          var n = null,
            r = "data-tt-policy-suffix",
            e =
              "dompurify" + ((n = e.currentScript && e.currentScript.hasAttribute(r) ? e.currentScript.getAttribute(r) : n) ? "#" + n : "");
          try {
            return t.createPolicy(e, {
              createHTML: function (t) {
                return t;
              },
              createScriptURL: function (t) {
                return t;
              }
            });
          } catch (t) {
            return null;
          }
        };
      function fe() {
        var u = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ae(),
          c = function (t) {
            return fe(t);
          };
        if (((c.version = "2.4.4"), (c.removed = []), u && u.document && 9 === u.document.nodeType)) {
          var s = u.document,
            o = u.document,
            P = u.DocumentFragment,
            t = u.HTMLTemplateElement,
            l = u.Node,
            U = u.Element,
            e = u.NodeFilter,
            n = u.NamedNodeMap,
            R = void 0 === n ? u.NamedNodeMap || u.MozNamedAttrMap : n,
            B = u.HTMLFormElement,
            X = u.DOMParser,
            f = u.trustedTypes,
            n = U.prototype,
            L = ee(n, "cloneNode"),
            z = ee(n, "nextSibling"),
            J = ee(n, "childNodes"),
            a = ee(n, "parentNode"),
            m =
              ("function" == typeof t &&
                (n = o.createElement("template")).content &&
                n.content.ownerDocument &&
                (o = n.content.ownerDocument),
              Ce(f, s)),
            G = m ? m.createHTML("") : "",
            t = o,
            j = t.implementation,
            q = t.createNodeIterator,
            $ = t.createDocumentFragment,
            Q = t.getElementsByTagName,
            K = s.importNode,
            n = {};
          try {
            n = te(o).documentMode ? o.documentMode : {};
          } catch (t) {}
          var i,
            p,
            r = {},
            V = ((c.isSupported = "function" == typeof a && j && void 0 !== j.createHTMLDocument && 9 !== n), ve),
            H = xe,
            Y = Ne,
            W = be,
            Z = Se,
            tt = Te,
            et = Ee,
            nt = we,
            h = null,
            rt = Zt({}, [].concat(jt(ne), jt(re), jt(oe), jt(ie), jt(ae))),
            d = null,
            ot = Zt({}, [].concat(jt(ue), jt(se), jt(ce), jt(le))),
            g = Object.seal(
              Object.create(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1
                }
              })
            ),
            y = null,
            it = null,
            at = !0,
            ut = !0,
            st = !1,
            ct = !0,
            v = !1,
            x = !1,
            lt = !1,
            ft = !1,
            N = !1,
            b = !1,
            S = !1,
            mt = !0,
            pt = !1,
            ht = "user-content-",
            dt = !0,
            w = !1,
            T = {},
            E = null,
            gt = Zt({}, [
              "annotation-xml",
              "audio",
              "colgroup",
              "desc",
              "foreignobject",
              "head",
              "iframe",
              "math",
              "mi",
              "mn",
              "mo",
              "ms",
              "mtext",
              "noembed",
              "noframes",
              "noscript",
              "plaintext",
              "script",
              "style",
              "svg",
              "template",
              "thead",
              "title",
              "video",
              "xmp"
            ]),
            yt = null,
            vt = Zt({}, ["audio", "video", "img", "source", "image", "track"]),
            xt = null,
            Nt = Zt({}, [
              "alt",
              "class",
              "for",
              "id",
              "label",
              "name",
              "pattern",
              "placeholder",
              "role",
              "summary",
              "title",
              "value",
              "style",
              "xmlns"
            ]),
            O = "http://www.w3.org/1998/Math/MathML",
            A = "http://www.w3.org/2000/svg",
            C = "http://www.w3.org/1999/xhtml",
            D = C,
            bt = !1,
            St = null,
            wt = Zt({}, [O, A, C], Vt),
            Tt = ["application/xhtml+xml", "text/html"],
            Et = "text/html",
            _ = null,
            Ot = o.createElement("form"),
            At = function (t) {
              return t instanceof RegExp || t instanceof Function;
            },
            Ct = function (t) {
              (_ && _ === t) ||
                ((t = te((t = t && "object" === Gt(t) ? t : {}))),
                (i = i = -1 === Tt.indexOf(t.PARSER_MEDIA_TYPE) ? Et : t.PARSER_MEDIA_TYPE),
                (p = "application/xhtml+xml" === i ? Vt : Kt),
                (h = "ALLOWED_TAGS" in t ? Zt({}, t.ALLOWED_TAGS, p) : rt),
                (d = "ALLOWED_ATTR" in t ? Zt({}, t.ALLOWED_ATTR, p) : ot),
                (St = "ALLOWED_NAMESPACES" in t ? Zt({}, t.ALLOWED_NAMESPACES, Vt) : wt),
                (xt = "ADD_URI_SAFE_ATTR" in t ? Zt(te(Nt), t.ADD_URI_SAFE_ATTR, p) : Nt),
                (yt = "ADD_DATA_URI_TAGS" in t ? Zt(te(vt), t.ADD_DATA_URI_TAGS, p) : vt),
                (E = "FORBID_CONTENTS" in t ? Zt({}, t.FORBID_CONTENTS, p) : gt),
                (y = "FORBID_TAGS" in t ? Zt({}, t.FORBID_TAGS, p) : {}),
                (it = "FORBID_ATTR" in t ? Zt({}, t.FORBID_ATTR, p) : {}),
                (T = "USE_PROFILES" in t && t.USE_PROFILES),
                (at = !1 !== t.ALLOW_ARIA_ATTR),
                (ut = !1 !== t.ALLOW_DATA_ATTR),
                (st = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (ct = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                (v = t.SAFE_FOR_TEMPLATES || !1),
                (x = t.WHOLE_DOCUMENT || !1),
                (N = t.RETURN_DOM || !1),
                (b = t.RETURN_DOM_FRAGMENT || !1),
                (S = t.RETURN_TRUSTED_TYPE || !1),
                (ft = t.FORCE_BODY || !1),
                (mt = !1 !== t.SANITIZE_DOM),
                (pt = t.SANITIZE_NAMED_PROPS || !1),
                (dt = !1 !== t.KEEP_CONTENT),
                (w = t.IN_PLACE || !1),
                (nt = t.ALLOWED_URI_REGEXP || nt),
                (D = t.NAMESPACE || C),
                t.CUSTOM_ELEMENT_HANDLING &&
                  At(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (g.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                t.CUSTOM_ELEMENT_HANDLING &&
                  At(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (g.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                t.CUSTOM_ELEMENT_HANDLING &&
                  "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                  (g.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                v && (ut = !1),
                b && (N = !0),
                T &&
                  ((h = Zt({}, jt(ae))),
                  (d = []),
                  !0 === T.html && (Zt(h, ne), Zt(d, ue)),
                  !0 === T.svg && (Zt(h, re), Zt(d, se), Zt(d, le)),
                  !0 === T.svgFilters && (Zt(h, oe), Zt(d, se), Zt(d, le)),
                  !0 === T.mathMl) &&
                  (Zt(h, ie), Zt(d, ce), Zt(d, le)),
                t.ADD_TAGS && Zt((h = h === rt ? te(h) : h), t.ADD_TAGS, p),
                t.ADD_ATTR && Zt((d = d === ot ? te(d) : d), t.ADD_ATTR, p),
                t.ADD_URI_SAFE_ATTR && Zt(xt, t.ADD_URI_SAFE_ATTR, p),
                t.FORBID_CONTENTS && Zt((E = E === gt ? te(E) : E), t.FORBID_CONTENTS, p),
                dt && (h["#text"] = !0),
                x && Zt(h, ["html", "head", "body"]),
                h.table && (Zt(h, ["tbody"]), delete y.tbody),
                qt && qt(t),
                (_ = t));
            },
            Dt = Zt({}, ["mi", "mo", "mn", "ms", "mtext"]),
            _t = Zt({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            Mt = Zt({}, ["title", "style", "font", "a", "script"]),
            M = Zt({}, re),
            Ft = (Zt(M, oe), Zt(M, ge), Zt({}, ie)),
            It =
              (Zt(Ft, ye),
              function (t) {
                var e = a(t),
                  n =
                    ((e && e.tagName) ||
                      (e = {
                        namespaceURI: D,
                        tagName: "template"
                      }),
                    Kt(t.tagName)),
                  r = Kt(e.tagName);
                return (
                  !!St[t.namespaceURI] &&
                  (t.namespaceURI === A
                    ? e.namespaceURI === C
                      ? "svg" === n
                      : e.namespaceURI === O
                      ? "svg" === n && ("annotation-xml" === r || Dt[r])
                      : Boolean(M[n])
                    : t.namespaceURI === O
                    ? e.namespaceURI === C
                      ? "math" === n
                      : e.namespaceURI === A
                      ? "math" === n && _t[r]
                      : Boolean(Ft[n])
                    : t.namespaceURI === C
                    ? !((e.namespaceURI === A && !_t[r]) || (e.namespaceURI === O && !Dt[r]) || Ft[n]) && (Mt[n] || !M[n])
                    : !("application/xhtml+xml" !== i || !St[t.namespaceURI]))
                );
              }),
            F = function (e) {
              Qt(c.removed, {
                element: e
              });
              try {
                e.parentNode.removeChild(e);
              } catch (t) {
                try {
                  e.outerHTML = G;
                } catch (t) {
                  e.remove();
                }
              }
            },
            kt = function (t, e) {
              try {
                Qt(c.removed, {
                  attribute: e.getAttributeNode(t),
                  from: e
                });
              } catch (t) {
                Qt(c.removed, {
                  attribute: null,
                  from: e
                });
              }
              if ((e.removeAttribute(t), "is" === t && !d[t]))
                if (N || b)
                  try {
                    F(e);
                  } catch (t) {}
                else
                  try {
                    e.setAttribute(t, "");
                  } catch (t) {}
            },
            Pt = function (t) {
              ft ? (t = "<remove></remove>" + t) : (n = (n = pe(t, /^[\r\n\t ]+/)) && n[0]),
                "application/xhtml+xml" === i &&
                  D === C &&
                  (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
              var e,
                n,
                r = m ? m.createHTML(t) : t;
              if (D === C)
                try {
                  e = new X().parseFromString(r, i);
                } catch (t) {}
              if (!e || !e.documentElement) {
                e = j.createDocument(D, "template", null);
                try {
                  e.documentElement.innerHTML = bt ? G : r;
                } catch (t) {}
              }
              r = e.body || e.documentElement;
              return (
                t && n && r.insertBefore(o.createTextNode(n), r.childNodes[0] || null),
                D === C ? Q.call(e, x ? "html" : "body")[0] : x ? e.documentElement : r
              );
            },
            Ut = function (t) {
              return q.call(t.ownerDocument || t, t, e.SHOW_ELEMENT | e.SHOW_COMMENT | e.SHOW_TEXT, null, !1);
            },
            Rt = function (t) {
              return (
                t instanceof B &&
                ("string" != typeof t.nodeName ||
                  "string" != typeof t.textContent ||
                  "function" != typeof t.removeChild ||
                  !(t.attributes instanceof R) ||
                  "function" != typeof t.removeAttribute ||
                  "function" != typeof t.setAttribute ||
                  "string" != typeof t.namespaceURI ||
                  "function" != typeof t.insertBefore ||
                  "function" != typeof t.hasChildNodes)
              );
            },
            I = function (t) {
              return "object" === Gt(l)
                ? t instanceof l
                : t && "object" === Gt(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName;
            },
            k = function (t, e, n) {
              r[t] &&
                me(r[t], function (t) {
                  t.call(c, e, n, _);
                });
            },
            Bt = function (t) {
              var e;
              if ((k("beforeSanitizeElements", t, null), !Rt(t) && !Yt(/[\u0080-\uFFFF]/, t.nodeName))) {
                var n = p(t.nodeName);
                if (
                  (k("uponSanitizeElement", t, {
                    tagName: n,
                    allowedTags: h
                  }),
                  (!t.hasChildNodes() ||
                    I(t.firstElementChild) ||
                    (I(t.content) && I(t.content.firstElementChild)) ||
                    !Yt(/<[/\w]/g, t.innerHTML) ||
                    !Yt(/<[/\w]/g, t.textContent)) &&
                    ("select" !== n || !Yt(/<template/i, t.innerHTML)))
                ) {
                  if (h[n] && !y[n])
                    return (!(t instanceof U) || It(t)) &&
                      (("noscript" !== n && "noembed" !== n) || !Yt(/<\/no(script|embed)/i, t.innerHTML))
                      ? (v &&
                          3 === t.nodeType &&
                          ((e = t.textContent), (e = Ht(e, V, " ")), (e = Ht(e, H, " ")), (e = Ht(e, Y, " ")), t.textContent !== e) &&
                          (Qt(c.removed, {
                            element: t.cloneNode()
                          }),
                          (t.textContent = e)),
                        k("afterSanitizeElements", t, null),
                        !1)
                      : (F(t), !0);
                  if (!y[n] && Lt(n)) {
                    if (g.tagNameCheck instanceof RegExp && Yt(g.tagNameCheck, n)) return !1;
                    if (g.tagNameCheck instanceof Function && g.tagNameCheck(n)) return !1;
                  }
                  if (dt && !E[n]) {
                    var r = a(t) || t.parentNode,
                      o = J(t) || t.childNodes;
                    if (o && r) for (var i = o.length - 1; 0 <= i; --i) r.insertBefore(L(o[i], !0), z(t));
                  }
                }
              }
              return F(t), !0;
            },
            Xt = function (t, e, n) {
              if (mt && ("id" === e || "name" === e) && (n in o || n in Ot)) return !1;
              if ((!ut || it[e] || !Yt(W, e)) && (!at || !Yt(Z, e)))
                if (!d[e] || it[e]) {
                  if (
                    !(
                      (Lt(t) &&
                        ((g.tagNameCheck instanceof RegExp && Yt(g.tagNameCheck, t)) ||
                          (g.tagNameCheck instanceof Function && g.tagNameCheck(t))) &&
                        ((g.attributeNameCheck instanceof RegExp && Yt(g.attributeNameCheck, e)) ||
                          (g.attributeNameCheck instanceof Function && g.attributeNameCheck(e)))) ||
                      ("is" === e &&
                        g.allowCustomizedBuiltInElements &&
                        ((g.tagNameCheck instanceof RegExp && Yt(g.tagNameCheck, n)) ||
                          (g.tagNameCheck instanceof Function && g.tagNameCheck(n))))
                    )
                  )
                    return !1;
                } else if (
                  !xt[e] &&
                  !Yt(nt, Ht(n, et, "")) &&
                  (("src" !== e && "xlink:href" !== e && "href" !== e) || "script" === t || 0 !== he(n, "data:") || !yt[t]) &&
                  (!st || Yt(tt, Ht(n, et, ""))) &&
                  n
                )
                  return !1;
              return !0;
            },
            Lt = function (t) {
              return 0 < t.indexOf("-");
            },
            zt = function (t) {
              k("beforeSanitizeAttributes", t, null);
              var e = t.attributes;
              if (e) {
                for (
                  var n = {
                      attrName: "",
                      attrValue: "",
                      keepAttr: !0,
                      allowedAttributes: d
                    },
                    r = e.length;
                  r--;

                ) {
                  var o = (u = e[r]),
                    i = o.name,
                    o = o.namespaceURI,
                    a = "value" === i ? u.value : de(u.value),
                    u = p(i);
                  if (
                    ((n.attrName = u),
                    (n.attrValue = a),
                    (n.keepAttr = !0),
                    (n.forceKeepAttr = void 0),
                    k("uponSanitizeAttribute", t, n),
                    (a = n.attrValue),
                    !n.forceKeepAttr && (kt(i, t), n.keepAttr))
                  )
                    if (!ct && Yt(/\/>/i, a)) kt(i, t);
                    else {
                      v && ((a = Ht(a, V, " ")), (a = Ht(a, H, " ")), (a = Ht(a, Y, " ")));
                      var s = p(t.nodeName);
                      if (Xt(s, u, a)) {
                        if (
                          (!pt || ("id" !== u && "name" !== u) || (kt(i, t), (a = ht + a)),
                          m && "object" === Gt(f) && "function" == typeof f.getAttributeType && !o)
                        )
                          switch (f.getAttributeType(s, u)) {
                            case "TrustedHTML":
                              a = m.createHTML(a);
                              break;

                            case "TrustedScriptURL":
                              a = m.createScriptURL(a);
                          }
                        try {
                          o ? t.setAttributeNS(o, i, a) : t.setAttribute(i, a), $t(c.removed);
                        } catch (t) {}
                      }
                    }
                }
                k("afterSanitizeAttributes", t, null);
              }
            },
            Jt = function t(e) {
              var n,
                r = Ut(e);
              for (k("beforeSanitizeShadowDOM", e, null); (n = r.nextNode()); )
                k("uponSanitizeShadowNode", n, null), Bt(n) || (n.content instanceof P && t(n.content), zt(n));
              k("afterSanitizeShadowDOM", e, null);
            };
          (c.sanitize = function (t) {
            var e,
              n,
              r,
              o,
              i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if ("string" != typeof (t = (bt = !t) ? "\x3c!--\x3e" : t) && !I(t)) {
              if ("function" != typeof t.toString) throw Wt("toString is not a function");
              if ("string" != typeof (t = t.toString())) throw Wt("dirty is not a string, aborting");
            }
            if (!c.isSupported) {
              if ("object" === Gt(u.toStaticHTML) || "function" == typeof u.toStaticHTML) {
                if ("string" == typeof t) return u.toStaticHTML(t);
                if (I(t)) return u.toStaticHTML(t.outerHTML);
              }
              return t;
            }
            if ((lt || Ct(i), (c.removed = []), (w = "string" == typeof t ? !1 : w))) {
              if (t.nodeName) {
                var i = p(t.nodeName);
                if (!h[i] || y[i]) throw Wt("root node is forbidden and cannot be sanitized in-place");
              }
            } else if (t instanceof l)
              (1 === (i = (e = Pt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === i.nodeName) ||
              "HTML" === i.nodeName
                ? (e = i)
                : e.appendChild(i);
            else {
              if (!N && !v && !x && -1 === t.indexOf("<")) return m && S ? m.createHTML(t) : t;
              if (!(e = Pt(t))) return N ? null : S ? G : "";
            }
            e && ft && F(e.firstChild);
            for (var a = Ut(w ? t : e); (n = a.nextNode()); )
              (3 === n.nodeType && n === r) || Bt(n) || (n.content instanceof P && Jt(n.content), zt(n), (r = n));
            if (((r = null), w)) return t;
            if (N) {
              if (b) for (o = $.call(e.ownerDocument); e.firstChild; ) o.appendChild(e.firstChild);
              else o = e;
              return (o = d.shadowroot || d.shadowrootmod ? K.call(s, o, !0) : o);
            }
            i = x ? e.outerHTML : e.innerHTML;
            return (
              x &&
                h["!doctype"] &&
                e.ownerDocument &&
                e.ownerDocument.doctype &&
                e.ownerDocument.doctype.name &&
                Yt(Oe, e.ownerDocument.doctype.name) &&
                (i = "<!DOCTYPE " + e.ownerDocument.doctype.name + ">\n" + i),
              v && ((i = Ht(i, V, " ")), (i = Ht(i, H, " ")), (i = Ht(i, Y, " "))),
              m && S ? m.createHTML(i) : i
            );
          }),
            (c.setConfig = function (t) {
              Ct(t), (lt = !0);
            }),
            (c.clearConfig = function () {
              (_ = null), (lt = !1);
            }),
            (c.isValidAttribute = function (t, e, n) {
              _ || Ct({});
              (t = p(t)), (e = p(e));
              return Xt(t, e, n);
            }),
            (c.addHook = function (t, e) {
              "function" == typeof e && ((r[t] = r[t] || []), Qt(r[t], e));
            }),
            (c.removeHook = function (t) {
              if (r[t]) return $t(r[t]);
            }),
            (c.removeHooks = function (t) {
              r[t] && (r[t] = []);
            }),
            (c.removeAllHooks = function () {
              r = {};
            });
        } else c.isSupported = !1;
        return c;
      }
      return fe();
    })();
  },
  5: function (t, e) {
    function s(t, e, n, r, o, i, a) {
      try {
        var u = t[i](a),
          s = u.value;
      } catch (t) {
        return void n(t);
      }
      u.done ? e(s) : Promise.resolve(s).then(r, o);
    }
    function n(u) {
      return function () {
        var t = this,
          a = arguments;
        return new Promise(function (e, n) {
          var r = u.apply(t, a);
          function o(t) {
            s(r, e, n, o, i, "next", t);
          }
          function i(t) {
            s(r, e, n, o, i, "throw", t);
          }
          o(void 0);
        });
      };
    }
    (t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  64: function (t, m, li) {
    "use strict";
    !function (si) {
      var a = li(48);
      function s(t, e, n, r, o, i, a) {
        try {
          var u = t[i](a),
            s = u.value;
        } catch (t) {
          return void n(t);
        }
        u.done ? e(s) : Promise.resolve(s).then(r, o);
      }
      function t(u) {
        return function () {
          var t = this,
            a = arguments;
          return new Promise(function (e, n) {
            var r = u.apply(t, a);
            function o(t) {
              s(r, e, n, o, i, "next", t);
            }
            function i(t) {
              s(r, e, n, o, i, "throw", t);
            }
            o(void 0);
          });
        };
      }
      function i(t, e) {
        return n(t) || r(t, e) || o();
      }
      function n(t) {
        if (Array.isArray(t)) return t;
      }
      function r(t, e) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
          } catch (t) {
            (o = !0), (i = t);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
      }
      function o() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
      var e,
        ci = (function () {
          var U = (function () {
            try {
              var e = new DOMParser().parseFromString("<", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
            } catch (t) {}
            function n(t) {
              return 0 < t.getElementsByTagNameNS(e, "parsererror").length;
            }
            var l = {
              inBrowser: !0,
              asyncGet: function (e, n, t) {
                var r = new XMLHttpRequest();
                return (
                  r.open("GET", e, !0),
                  0 !== t && (r.timeout = t),
                  (r.onload = function (t) {
                    4 === r.readyState && (200 === r.status ? n(r.responseText) : n(new _(r.statusText + ": " + e, "SXJS0006")));
                  }),
                  (r.ontimeout = function (t) {
                    n(new _("Document fetch timeout: " + e, "SXJS0008"));
                  }),
                  (r.onabort = function (t) {
                    n(new _("Document fetch aborted: " + e, "SXJS0008"));
                  }),
                  (r.onerror = function (t) {
                    n(new _("Document fetch failed: " + e, "SXJS0006"));
                  }),
                  r.send(null),
                  r
                );
              },
              asyncGetXml: function (n, r, t) {
                return l.asyncGet(
                  n,
                  function (t) {
                    var e = null;
                    t instanceof _ ? (e = t) : ((e = l.parseXmlFromString(t))._saxonBaseUri = n), r(n, e);
                  },
                  t
                );
              },
              asyncGetMultipleXml: function (t, n) {
                var r = t.length,
                  o = {};
                function e(t, e) {
                  if (e instanceof _) throw e;
                  (o[t] = e), --r <= 0 && n(o);
                }
                for (var i = 0; i < t.length; i++) t[i] ? l.asyncGetXml(t[i], e, 0) : r--;
              },
              addXml: function (t, n, r, e) {
                function o(t, e) {
                  P("Add to pool " + t, 2), (r[t] = e), n(r);
                }
                return !r[t] || r[t] instanceof _ ? l.asyncGetXml(t, o, e) : (P("Doc already in pool " + t, 2), n(r), null);
              },
              addMultipleXml: function (t, e, n, r) {
                var o = t.length,
                  i = {};
                function a(t) {
                  --o <= 0 && n(t);
                }
                for (var u = 0; u < t.length; u++) t[u] ? (i[t[u]] = l.addXml(t[u], a, e, r)) : o--;
                return i;
              },
              makeHttpRequest: function (t, o, e) {
                var i = M.convertToJS(t, !1, !0);
                function r(t, e) {
                  var n, r;
                  return (
                    t instanceof DocumentFragment &&
                      ((r = (n = document.implementation.createDocument(null, null, null)).importNode(t, !0)), n.appendChild(r), (t = n)),
                    t
                  );
                }
                function n(e) {
                  if (!e.href) throw _("'href' must be specified in HTTP request", "SXJS0006");
                  function t(t) {
                    throw _(t + " in HTTP request to: " + e.href, "SXJS0006");
                  }
                  e.method || t("'method' must be specified"),
                    (e.method = e.method.toUpperCase()),
                    "status-only" in e && "boolean" != typeof e["status-only"] && t("'status-only' parameter must be of type xs:boolean"),
                    (e.allowedBody = "GET" != e.method && "HEAD" != e.method),
                    (e.hasData = "body" in e || "multipart-bodies" in e),
                    ("multipart-bodies" in e || "multipart-headers" in e) && t("Multipart requests not yet implemented"),
                    !e.allowedBody && e.hasData && t("Body and multipart body content must be null for " + e.method + " request"),
                    "headers" in e || (e.headers = {});
                  var n = e["media-type"] || e.headers["content-type"] || "";
                  return (
                    e.hasData && "" === n && t("No content type specified"),
                    "media-type" in e && (e.headers["content-type"] = n),
                    "multipart-bodies" in e &&
                      !/$multipart\//.test(n) &&
                      t("Content type must be multipart media type for multipart request"),
                    (("username" in e && !("password" in e)) || (!("username" in e) && "password" in e)) &&
                      t("Must set both (or neither) username and password"),
                    e.body instanceof DocumentFragment && (e.body = r(e.body, n)),
                    ("text/xml" != n &&
                      "application/xml" != n &&
                      "text/xml-external-parsed-entity" != n &&
                      "application/xml-external-parsed-entity" != n &&
                      !/\+xml$/.test(n) &&
                      "text/html" != n) ||
                      e.body instanceof XMLDocument ||
                      t("HTTP request body must be a document node, supplied item is: " + p(e.body)),
                    P("HTTP request prepared", 2),
                    e
                  );
                }
                n(i);
                var a,
                  u = new (XMLHttpRequest =
                    "undefined" == typeof XMLHttpRequest
                      ? function () {
                          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                        }
                      : XMLHttpRequest)();
                for (a in ("override-media-type" in i && u.overrideMimeType(i["override-media-type"]),
                "username" in i ? u.open(i.method, i.href, !0, i.username, i.password) : u.open(i.method, i.href, !0),
                0 !== (e = "timeout" in i && 0 === e ? i.timeout : e) && (u.timeout = e),
                i.headers))
                  i.headers.hasOwnProperty(a) && u.setRequestHeader(a, i.headers[a]);
                var s = {};
                function c(e, n) {
                  return function (t) {
                    (s.status = 0), (s.message = e + ": " + i.href), (s.error = n), (s.type = t.type), o(M.convertFromJS(s, !1, !0));
                  };
                }
                return (
                  (u.ontimeout = c("HTTP request timeout", "SXJS0008")),
                  (u.onabort = c("HTTP request aborted", "SXJS0008")),
                  (u.onerror = c("HTTP request failed", "SXJS0009")),
                  (u.onload = function (t) {
                    function e(n, t) {
                      t = t.getAllResponseHeaders();
                      "" !== t &&
                        t.split(/\r\n/).forEach(function (t) {
                          var e;
                          "" !== t.trim() &&
                            (0 <= (e = t.indexOf(":"))
                              ? (n.headers[t.substring(0, e).toLowerCase()] = t.substring(e + 1).trim())
                              : P("No ':' separator found in HTTP response header " + t));
                        });
                    }
                    if (
                      (P("Saxon-JS processing httpRequest response", 2),
                      (s.headers = {}),
                      (s.status = u.status),
                      (s.message = u.statusText),
                      (s.type = t.type),
                      !i["status-only"] && u.status < 400)
                    ) {
                      var t = u.getResponseHeader("Content-Type").split(/;/),
                        n = t[0],
                        r = (t[1].trim(), i["override-media-type"] || n);
                      switch ((s["media-type"] = r)) {
                        case "text/xml":
                        case "application/xml":
                        case "text/xml-external-parsed-entity":
                        case "application/xml-external-parsed-entity":
                        case "text/html":
                          s.body = u.responseXML || l.parseXmlFromString(u.responseText);
                          break;

                        default:
                          /\+xml$/.test(r)
                            ? (s.body = u.responseXML || l.parseXmlFromString(u.responseText))
                            : (/^text\//.test(r) || /^multipart\//.test(r), (s.body = u.responseText));
                      }
                    }
                    e(s, u), o(M.convertFromJS(s, !1, !0));
                  }),
                  u.send(i.body),
                  u
                );
              },
              parseXmlFromString: function (t) {
                t = t.replace(/\r\n|\r(?!\n)/g, "\n");
                try {
                  if (!/Edge\//.test(window.navigator.userAgent) && /^.+<\?xml/i.test(t)) throw new Error();
                  var e = new DOMParser().parseFromString(t, "application/xml");
                  e.documentElement;
                  if (n(e)) throw new Error();
                  return e;
                } catch (t) {
                  throw _("Misplaced or malformed XML", "FODC0002");
                }
              },
              readResource: function (t) {
                var e = new XMLHttpRequest(),
                  n = l.resolveUri(t, l.baseUri());
                if ((e.open("GET", n, !1), e.send(null), 200 != e.status)) throw _("Failed to read resource at " + t, "SXJS0006");
                if ("\ufeff" == (n = e.responseText).charAt(0)) throw _(n.substring(1), "FODC0002");
                return n;
              },
              readFile: function (e, t) {
                var n = new XMLHttpRequest();
                try {
                  n.open("GET", e, !1), n.send(null);
                } catch (t) {
                  throw _("Get failure " + e, "FODC0002");
                }
                if (200 != n.status) throw _("Failed to read file at " + e, "FODC0002");
                if ("\ufeff" == (e = n.responseText).charAt(0)) throw _(e.substring(1), "FODC0002");
                if (0 <= e.indexOf("\0")) throw _("External file contains non-XML characters", "FOUT1190");
                return e;
              },
              resolveUri: function (e, n) {
                try {
                  var t,
                    r = document,
                    o = r.getElementsByTagName("base")[0],
                    i = o && o.href,
                    a = r.head || r.getElementsByTagName("head")[0],
                    u = o || a.appendChild(r.createElement("base")),
                    s = r.createElement("a");
                  return (u.href = n || ""), (s.href = e), (t = s.href), o ? (o.href = i) : a.removeChild(u), t;
                } catch (t) {
                  throw _("Illegal URI: href=" + e + " base=" + n, "FODC0005");
                }
              },
              baseUri: function () {
                for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++)
                  if (/SaxonJS(\.min)?.js/.test(t[e].getAttribute("src"))) return t[e].src;
                return t[t.length - 1].src;
              },
              initialize: function () {
                t(), x._init();
              },
              deliverMessage: function (t) {
                "function" != typeof t.deliverMessage && (t.deliverMessage = function (t) {});
              },
              saxonPrint: function (t) {}
            };
            function t() {
              (Math.trunc =
                Math.trunc ||
                function (t) {
                  return t < 0 ? Math.ceil(t) : Math.floor(t);
                }),
                Array.prototype.findIndex ||
                  Object.defineProperty(Array.prototype, "findIndex", {
                    value: function (t) {
                      if (null == this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                      if ("function" != typeof t) throw new TypeError("predicate must be a function");
                      for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++)
                        if (((e = n[i]), t.call(o, e, i, n))) return i;
                      return -1;
                    },
                    enumerable: !1,
                    configurable: !1,
                    writable: !1
                  }),
                String.prototype.includes ||
                  (String.prototype.includes = function (t, e) {
                    return !((e = "number" != typeof e ? 0 : e) + t.length > this.length) && -1 !== this.indexOf(t, e);
                  });
            }
            return {
              platform: l
            };
          })();
          function p(t) {
            if (null === t) return "#null";
            if (void 0 === t) return "#undefined";
            var e;
            if (t instanceof M.XdmArray) {
              for (var n = "[", r = 0; r < t.value.length && r < 3; r++) 0 !== r && (n += ","), (n += p(t.value[r]));
              return 4 <= t.value.length && (n += ",...(" + t.value.length + ")"), (n += "]");
            }
            if (t instanceof y)
              return (
                (n = "map{"),
                t.forAllPairs(function (t) {
                  n = (n = n + p(t.k) + ": ") + p(t.v) + ", ";
                }),
                (n += "}")
              );
            if (t instanceof M.XDMValue) return "XDMValue " + p(t.value);
            if (t instanceof M.JSValue) return "JSValue " + p(t.value);
            if (!C.isNode(t) || C.isAttr(t) || C.isNSNode(t)) {
              if (C.isAttr(t)) return "attribute @" + t.name;
              if (C.isNSNode(t)) return "ns:" + t.prefix + "=" + t.uri;
              if (t.type)
                return "string" === t.type
                  ? '"' + t.toString() + '"'
                  : "integer" === t.type || "boolean" === t.type
                  ? t.toString()
                  : "xs:" + t.type + "(" + t.toString() + ")";
              if ("object" == typeof t && "length" in t) {
                for (n = "(", e = 0; e < t.length && e < 3; e++) 0 !== e && (n += ","), (n += p(t[e]));
                return 4 <= t.length && (n += ",...(" + t.length + ")"), (n += ")");
              }
              return "function" == typeof t ? t.toString() : "??? " + t;
            }
            if (
              ((n = {
                1: "element <" + t.tagName + ">",
                2: "attribute @" + t.name,
                3: "text:" + (t.nodeValue ? t.nodeValue.substring(0, 8) : "''"),
                7: "pi",
                8: "comment",
                9: "document " + (t._saxonDocumentNumber ? "#" + t._saxonDocumentNumber : "(No nr / #0)"),
                11: "docFrag"
              }[t.nodeType]),
              "9" == t.nodeType)
            )
              for (var o = 0; o < t.childNodes.length; o++) n += "~>" + p(t.childNodes[o]);
            return n;
          }
          (R = {
            "integer<decimal": 1,
            "decimal<numeric": 1,
            "double<numeric": 1,
            "float<numeric": 1,
            "integer<numeric": 1,
            "dateTimeStamp<dateTime": 1
          }),
            (B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
            (s.prototype = {
              value: null,
              type: "string",
              _hash: 0,
              toString: function () {
                return this.value;
              },
              compareTo: function (t) {
                return t instanceof s
                  ? A.codepointComparison(this.value, t.value)
                  : "untypedAtomic" == this.type
                  ? x[t.type].cast(this).compareTo(t)
                  : void K(this.type, t.type);
              },
              equals: function (t) {
                return 0 === this.compareTo(t);
              },
              hashCode: function () {
                if (this.value.length <= 4) return this.value;
                var t = this._hash,
                  e = this.value.length;
                if (0 === t && 0 < e) {
                  for (var n = 0; n < e; n++) t = 31 * t + this.value.charAt(n++);
                  this._hash = t;
                }
                return H(t);
              },
              matchKey: function () {
                return "s" + this.toString();
              }
            }),
            (et.prototype = {
              value: null,
              type: "hexBinary",
              toString: function () {
                return ("hexBinary" == this.type ? Z : Y)(this.value);
              },
              compareTo: function (t) {
                if (t instanceof et && this.type == t.type) return A.codepointComparison(this.value, t.value);
                K(this.type, t.type);
              },
              equals: function (t) {
                return 0 === this.compareTo(t);
              },
              hashCode: function () {
                return new s(this.value).hashCode();
              },
              matchKey: function () {
                return ("hexBinary" == this.type ? "h" : "i") + this.toString();
              }
            }),
            (e.prototype = {
              value: 0,
              type: "double",
              toString: function () {
                var t, e, n, r;
                return 0 === this.value
                  ? 1 / this.value < 0
                    ? "-0"
                    : "0"
                  : this.value == Number.POSITIVE_INFINITY
                  ? "INF"
                  : this.value == Number.NEGATIVE_INFINITY
                  ? "-INF"
                  : ((t = this.value),
                    1e6 <= (n = Math.abs(t)) || n < 1e-6
                      ? ((n = (e = t.toExponential()).indexOf("e")),
                        (r = e.substring(0, n)).includes(".") || (r += ".0"),
                        r + "E" + e.substring(n + 1).replace("+", ""))
                      : "float" === this.type && t % 1 != 0
                      ? ((r = (e = (t < 0 ? t - 5e-8 : t + 5e-8).toString()).indexOf(".")), (e = e.substring(0, r + 6)).replace(/0+$/, ""))
                      : t.toString());
              },
              equals: function (t) {
                return 0 === this.compareTo(t);
              },
              compareTo: function (t) {
                if ("toNumber" in t) return this.value < t.toNumber() ? -1 : this.value == t.toNumber() ? 0 : 1;
                K(this.type, t.type);
              },
              hashCode: function () {
                return H(this.value);
              },
              matchKey: function () {
                return "n" + this.hashCode();
              },
              toNumber: function () {
                return this.value;
              },
              toDouble: function () {
                return this;
              },
              abs: function () {
                return new e(Math.abs(this.value), this.type);
              },
              negate: function () {
                return new e(-this.value, this.type);
              },
              ceiling: function () {
                return new e(Math.ceil(this.value), this.type);
              },
              floor: function () {
                return new e(Math.floor(this.value), this.type);
              },
              round: function (t) {
                return new e(0 === t ? Math.round(this.value) : ((t = Math.pow(10, -t)), Math.round(this.value / t) * t), this.type);
              },
              roundHalfToEven: function (t) {
                return isNaN(this.value) || !isFinite(this.value)
                  ? this
                  : (0 === (t = new i(Big(this.value)).roundHalfToEven(t)).toNumber() && this.value < 0 && (t = x.double.fromString("-0")),
                    x[this.type].cast(t));
              }
            }),
            (nt.prototype = {
              value: 0,
              type: "integer",
              toString: function () {
                return this.value.toString();
              },
              equals: function (t) {
                return 0 === this.compareTo(t);
              },
              compareTo: function (t) {
                if ("toNumber" in t) return this.value - t.toNumber();
                K(this.type, t.type);
              },
              hashCode: function () {
                return H(this.value);
              },
              matchKey: function () {
                return "n" + this.hashCode();
              },
              toDouble: function () {
                return new e(this.value);
              },
              toNumber: function () {
                return this.value;
              },
              toBig: function () {
                return new Big(this.value);
              },
              abs: function () {
                return new nt(Math.abs(this.value));
              },
              negate: function () {
                return new nt(-this.value);
              },
              ceiling: function () {
                return this;
              },
              floor: function () {
                return this;
              },
              round: function (t) {
                return t < 0 ? ((t = Math.pow(10, -t)), new nt(Math.round(this.value / t) * t)) : this;
              },
              roundHalfToEven: function (t) {
                return t < 0 ? ((t = Math.pow(10, -t)), new nt(parseInt(Big(this.value).div(t).round(0, 2).times(t), 10))) : this;
              }
            }),
            (i.prototype = {
              value: null,
              type: "decimal",
              toString: function () {
                return this.value.toFixed();
              },
              equals: function (t) {
                return 0 === this.compareTo(t);
              },
              compareTo: function (t) {
                return t instanceof i
                  ? this.value.cmp(t.value)
                  : "toDouble" in t
                  ? this.value - t.toDouble().value
                  : void K(this.type, t.type);
              },
              hashCode: function () {
                return H(this.toNumber());
              },
              matchKey: function () {
                return "n" + this.hashCode();
              },
              toBig: function () {
                return this.value;
              },
              toDouble: function () {
                return new e(parseFloat(this.value));
              },
              toNumber: function () {
                return parseFloat(this.value);
              },
              abs: function () {
                return new i(this.value.abs(), this.type);
              },
              negate: function () {
                var t = Big(this.value);
                return (t.s = -t.s), new i(t, "decimal" == this.type ? "decimal" : "integer");
              },
              ceiling: function () {
                return new i(this.value.round(0, this.value.s < 0 ? 0 : 3), this.type);
              },
              floor: function () {
                return new i(this.value.round(0, this.value.s < 0 ? 3 : 0), this.type);
              },
              round: function (t) {
                function e(t, e) {
                  t = new Big(t);
                  return (t.e += e), t;
                }
                var n = this.value,
                  r = 0,
                  o = (t < 0 && ((r = t), (t = 0), (n = e(n, r))), 0 < n.s ? Big(0) : this.floor().abs()),
                  n = n.plus(o).round(t, 1).minus(o);
                return new i((n = 0 !== e ? e(n, -r) : n), "decimal" == this.type ? "decimal" : "integer");
              },
              roundHalfToEven: function (t) {
                var e;
                return new i(
                  t < 0 ? ((e = Big(10).pow(-t)), this.value.div(e).round(0, 2).times(e)) : this.value.round(t, 2),
                  "decimal" == this.type ? "decimal" : "integer"
                );
              }
            }),
            (rt.prototype = {
              value: null,
              type: "boolean",
              toString: function () {
                return this.value.toString();
              },
              toBoolean: function () {
                return this.value;
              },
              compareTo: function (t) {
                if (t instanceof rt) return (this.value ? 1 : 0) - (t.value ? 1 : 0);
                K(this.type, t.type);
              },
              equals: function (t) {
                return 0 === this.compareTo(t);
              },
              hashCode: function () {
                return this.value.toString();
              },
              matchKey: function () {
                return "b" + this.toString();
              }
            }),
            (ot.prototype = {
              prefix: null,
              uri: null,
              local: null,
              type: "QName",
              toEQName: function () {
                return "Q{" + this.uri + "}" + this.local;
              },
              toString: function () {
                return (0 < this.prefix.length ? this.prefix + ":" : "") + this.local;
              },
              equals: function (t) {
                return t instanceof ot || K(this.type, t.type), t instanceof ot && this.local == t.local && this.uri == t.uri;
              },
              compareTo: function () {
                throw new _("QNames are not ordered", "FORG0006");
              },
              hashCode: function () {
                return this.uri.substring(this.uri.length - 3) + ":" + new s(this.local).hashCode();
              },
              matchKey: function () {
                return "q" + this.toEQName();
              }
            }),
            (l.prototype = {
              type: "dateTime",
              UTCdate: null,
              timezoneOffset: null,
              proxy: function () {
                var t = new Date(),
                  t = null !== this.timezoneOffset ? this.timezoneOffset : -t.getTimezoneOffset();
                return new Date(this.UTCdate.getTime() + 60 * t * 1e3);
              },
              _ISOEdit: function (t) {
                if (((t = t.substr(0, t.length - 1)), 0 === this.UTCdate.getUTCMilliseconds())) t = t.replace(".000", "");
                else for (; "0" == t.charAt(t.length - 1); ) t = t.substr(0, t.length - 1);
                return (t = t.replace(/^-0?0?/, "-"));
              },
              toString: function () {
                var e = this._ISOEdit(this.proxy().toISOString()),
                  n = "-" == e.charAt(0) ? 1 : 0;
                function t(t) {
                  switch (t) {
                    case "dateTime":
                    case "dateTimeStamp":
                      return e;

                    case "date":
                      return e.substring(0, 10 + n);

                    case "time":
                      return e.substring(11 + n);

                    case "gYearMonth":
                      return e.substring(0, 7 + n);

                    case "gYear":
                      return e.substring(0, 4 + n);

                    case "gMonthDay":
                      return "-" + e.substring(4 + n, 10 + n);

                    case "gMonth":
                      return "-" + e.substring(4 + n, 7 + n);

                    case "gDay":
                      return "--" + e.substring(7 + n, 10 + n);

                    default:
                      throw "type not recognised " + t;
                  }
                }
                return t(this.type) + this.tzOffsetToString();
              },
              compareTo: function (t) {
                if (t instanceof l && ($(t.type, this.type) || $(this.type, t.type))) return +this.UTCdate.getTime() - t.UTCdate.getTime();
                K(this.type, t.type);
              },
              equals: function (t) {
                return 0 === this.compareTo(t);
              },
              hashCode: function () {
                return H(this.UTCdate.getTime() - 1454346732296);
              },
              matchKey: function () {
                return "t" + this.hashCode();
              },
              adjustByMinutes: function (t) {
                return x.dateTime.fromDate(new Date(this.UTCdate.getTime() + 60 * t * 1e3), this.timezoneOffset);
              },
              addMonths: function (t) {
                var e = this.toString(),
                  n = parseInt(e.substring(0, 4), 10),
                  r = parseInt(e.substring(5, 7), 10),
                  o = parseInt(e.substring(8, 10), 10),
                  i = n + Math.floor((r + t - 1) / 12),
                  n = i < 0,
                  a = ((r + t - 1) % 12) + 1;
                for (a <= 0 && (a += 12); !lt([i, a, o, 0, 0, 0]); ) --o;
                return x[this.type].fromString((n ? "-" + at(-i) : at(i)) + "-" + it(a) + "-" + it(o) + e.substring(10));
              },
              tzOffsetToString: function () {
                var t,
                  e = this.timezoneOffset;
                return null === e
                  ? ""
                  : 0 === e
                  ? "Z"
                  : ((t = Math.abs(e)), (e < 0 ? "-" : "+") + it(Math.floor(t / 60)) + ":" + it(t % 60));
              }
            }),
            (ut.prototype = {
              type: "duration",
              months: 0,
              milliseconds: 0,
              parts: function () {
                var n = [];
                function t(e, t) {
                  t.forEach(function (t) {
                    1e3 != t ? (n.push(Math.floor(e / t)), (e %= t)) : n.push(e / t);
                  });
                }
                return t(Math.abs(this.months), [12, 1]), t(Math.abs(this.milliseconds), [864e5, 36e5, 6e4, 1e3]), n;
              },
              signum: function () {
                var t = this.months + this.milliseconds;
                return t < 0 ? -1 : 0 < t ? 1 : 0;
              },
              toString: function () {
                var t = this.signum(),
                  n =
                    0 === t
                      ? "yearMonthDuration" == this.type
                        ? "P0M"
                        : "PT0S"
                      : ((n = t < 0 ? "-P" : "P"),
                        this.parts().forEach(function (t, e) {
                          3 == e && (n += "T"), 0 !== t && (n += 6 == e ? t / 1e3 + "S" : t + ["Y", "M", "D", "H", "M", "S"][e]);
                        }),
                        n.replace(/T$/, ""));
                return n;
              },
              compareTo: function (t) {
                if (t instanceof ut) {
                  if (x.yearMonthDuration.matches(this) && x.yearMonthDuration.matches(t)) return this.months - t.months;
                  if (x.dayTimeDuration.matches(this) && x.dayTimeDuration.matches(t)) return this.milliseconds - t.milliseconds;
                  throw new _("Cannot compare durations that mix months and seconds", "XPTY0004");
                }
                K(this.type, t.type);
              },
              equals: function (t) {
                return (
                  t instanceof ut || K(this.type, t.type), t instanceof ut && this.months == t.months && this.milliseconds == t.milliseconds
                );
              },
              hashCode: function () {
                return this.months.toString() + ":" + this.milliseconds.toString();
              },
              matchKey: function () {
                return "d" + this.hashCode();
              }
            }),
            (u = {
              hierarchy: R,
              isSubtype: $,
              anyAtomicType: {
                name: "anyAtomicType",
                matches: function (t) {
                  return (
                    t instanceof s ||
                    t instanceof i ||
                    t instanceof nt ||
                    t instanceof e ||
                    t instanceof et ||
                    t instanceof rt ||
                    t instanceof ut ||
                    t instanceof l ||
                    t instanceof ot
                  );
                }
              },
              untypedAtomic: {
                name: "untypedAtomic",
                fromString: function (t) {
                  return new s(t, "untypedAtomic");
                },
                matches: function (t) {
                  return "untypedAtomic" == t.type;
                },
                cast: function (t) {
                  return new s(t.toString(), "untypedAtomic");
                }
              },
              string: {
                name: "string",
                fromString: function (t) {
                  return new s(t, "string");
                },
                matches: function (t) {
                  return $(t.type, "string");
                },
                cast: function (t) {
                  return new s(t.toString(), "string");
                },
                isStringLike: function (t) {
                  return t instanceof s;
                }
              },
              anyURI: {
                name: "anyURI",
                fromString: function (t) {
                  return new s(t.replace(/[ \r\t\n]+/g, " ").replace(/^[ ]|[ ]$/g, ""), "anyURI");
                },
                matches: function (t) {
                  return "anyURI" == t.type;
                },
                cast: function (t) {
                  if (t instanceof s) return x.anyURI.fromString(t.toString());
                  r(t, "anyURI");
                }
              },
              double: {
                name: "double",
                fromString: function (t) {
                  return new e(V(t, !0));
                },
                fromStringUnfailing: function (t) {
                  return new e(V(t, !1));
                },
                fromNumber: function (t) {
                  return new e(t);
                },
                matches: function (t) {
                  return "double" == t.type;
                },
                cast: function (t) {
                  return null == t
                    ? x.double.fromNumber(NaN)
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.double.fromString(t.toString())
                    : x.numeric.matches(t)
                    ? x.double.fromNumber(t.toNumber())
                    : x.boolean.matches(t)
                    ? x.double.fromNumber(t.toBoolean() ? 1 : 0)
                    : "number" == typeof t
                    ? x.double.fromNumber(t)
                    : void r(t, "double");
                }
              },
              decimal: {
                name: "decimal",
                fromString: function (t) {
                  if (((t = N.trim(t)), /^(\+|-)?([0-9]+(\.[0-9]*)?|\.[0-9]+)$/.test(t))) return new i(new Big(t));
                  /INF|NaN/.test(t) && Q(t, "decimal"), c(t, "decimal");
                },
                fromBig: function (t) {
                  return new i(t);
                },
                fromNumber: function (t) {
                  if (isNaN(t) || !isFinite(t)) throw new _("Cannot convert NaN or INF to a decimal", "FOCA0002");
                  return new i(new Big(t));
                },
                matches: function (t) {
                  return t instanceof i || t instanceof nt;
                },
                cast: function (t) {
                  return x.decimal.matches(t)
                    ? new i(t.value, "decimal")
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.decimal.fromString(t.toString())
                    : x.numeric.matches(t)
                    ? x.decimal.fromNumber(t.toNumber())
                    : x.boolean.matches(t)
                    ? x.decimal.fromString(t.toBoolean() ? "1" : "0")
                    : void r(t, "decimal");
                }
              },
              float: {
                name: "float",
                fromString: function (t) {
                  return new e(V(t, !0), "float");
                },
                fromNumber: function (t) {
                  return new e((t = Math.fround ? Math.fround(t) : t), "float");
                },
                matches: function (t) {
                  return "float" == t.type;
                },
                cast: function (t) {
                  return x.float.fromNumber(x.double.cast(t).toNumber());
                }
              },
              boolean: {
                name: "boolean",
                fromString: function (t) {
                  switch (N.trim(t)) {
                    case "true":
                    case "1":
                      return new rt(!0);

                    case "false":
                    case "0":
                      return new rt(!1);

                    default:
                      c(t, "boolean");
                  }
                },
                fromBoolean: function (t) {
                  return new rt(t);
                },
                matches: function (t) {
                  return t instanceof rt;
                },
                cast: function (t) {
                  return x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.boolean.fromString(t.toString())
                    : x.numeric.matches(t)
                    ? x.boolean.fromBoolean(0 !== t.toNumber() && !isNaN(t.toNumber()))
                    : x.boolean.matches(t)
                    ? t
                    : "boolean" == typeof t
                    ? x.boolean.fromBoolean(t)
                    : void r(t, "boolean");
                }
              },
              integer: {
                name: "integer",
                base: "decimal",
                matches: function (t) {
                  return $(t.type, "integer");
                },
                fromString: function (t) {
                  if (/^\s*(\-|\+)?[0-9]+\s*$/.test(t)) return 9 < t.length ? new i(t, "integer") : new nt(parseInt(t, 10));
                  /INF|NaN/.test(t) && Q(t, "integer"), c(t, "integer");
                },
                fromNumber: function (t) {
                  if (isNaN(t) || t == Number.NEGATIVE_INFINITY || t == Number.POSITIVE_INFINITY)
                    throw new _("Cannot convert NaN or INF to an integer", "FOCA0002");
                  return new nt(Math.trunc(t));
                },
                fromBig: function (t) {
                  return new i(t, "integer");
                },
                valid: function (t) {
                  return 0 === t.value.mod(1);
                },
                cast: function (t) {
                  return x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.integer.fromString(t.toString())
                    : x.numeric.matches(t)
                    ? x.integer.fromNumber(t.toNumber())
                    : x.boolean.matches(t)
                    ? x.integer.fromNumber(t.toBoolean() ? 1 : 0)
                    : void r(t, "integer");
                },
                convertFromJS: function (t) {
                  return "number" == typeof t
                    ? x.integer.fromNumber(t)
                    : "boolean" == typeof t
                    ? x.integer.fromNumber(t ? 1 : 0)
                    : "string" == typeof t
                    ? x.integer.fromString(t)
                    : x.integer.fromString(t.toString());
                }
              },
              numeric: {
                name: "numeric",
                members: ["double", "decimal", "float"],
                matches: function (t) {
                  return t instanceof e || t instanceof nt || t instanceof i;
                },
                cast: function (t) {
                  return x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.double.fromString(t.toString())
                    : x.numeric.matches(t)
                    ? t
                    : x.boolean.matches(t)
                    ? x.double.fromNumber(t.toBoolean() ? 1 : 0)
                    : void r(t, "numeric");
                },
                numberFn: function (t) {
                  var e = x.double;
                  if (null === t) return e.fromNumber(Number.NaN);
                  if (x.boolean.matches(t)) return e.fromNumber(t.toBoolean() ? 1 : 0);
                  if (x.numeric.matches(t)) return e.cast(t);
                  try {
                    return e.fromString(t.toString());
                  } catch (t) {
                    return e.fromNumber(Number.NaN);
                  }
                }
              },
              QName: {
                name: "QName",
                matches: function (t) {
                  return t instanceof ot;
                },
                fromParts: function (t, e, n) {
                  return new ot(t, e, n);
                },
                fromString: function (t, e) {
                  if ("Q{" == (t = N.trim(t)).substring(0, 2)) return x.QName.fromEQName(t);
                  N.isQName(t) || c(t, "QName");
                  t = t.split(":");
                  if (1 == t.length) return x.QName.fromParts("", e(""), t[0]);
                  e = e(t[0]);
                  if (null === e) throw _("Undeclared prefix: " + t[0], "FONS0004");
                  return x.QName.fromParts(t[0], e, t[1]);
                },
                fromEQName: function (t) {
                  var e = t.indexOf("{"),
                    n = t.indexOf("}"),
                    e = M.wsCollapse(t.substring(e + 1, n));
                  if ("http://www.w3.org/2000/xmlns/" == e) throw _("Use of reserved namespace: " + e, "XQST0070");
                  return new ot("", e, t.substring(n + 1));
                },
                cast: function (t, e) {
                  if (x.string.matches(t) || x.untypedAtomic.matches(t)) {
                    if (e) return x.QName.fromString(t.toString(), e);
                    throw _("Casting to QName requires a namespace resolver", "FORG0001");
                  }
                  if (x.QName.matches(t)) return t;
                  r(t, "QName");
                }
              },
              dateTime: {
                name: "dateTime",
                matches: function (t) {
                  return $(t.type, "dateTime");
                },
                fromString: function (t) {
                  return mt(t, "dateTime");
                },
                fromDate: function (t, e) {
                  return new l(t, e, "dateTime");
                },
                cast: function (t) {
                  return x.dateTime.matches(t)
                    ? t
                    : x.date.matches(t)
                    ? x.dateTime.fromDate(t.UTCdate, t.timezoneOffset)
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.dateTime.fromString(t.toString())
                    : void r(t, "dateTime");
                }
              },
              date: {
                name: "date",
                matches: function (t) {
                  return t instanceof l && "date" == t.type;
                },
                fromString: function (t) {
                  return mt(t, "date");
                },
                fromDate: function (t, e) {
                  var t = new l(t, e, "date").toString(),
                    n = "-" == t.charAt(0) ? 11 : 10;
                  return new l(x.dateTime.fromString(t.substring(0, n) + "T00:00:00" + t.substring(n)).UTCdate, e, "date");
                },
                cast: function (t) {
                  return x.date.matches(t)
                    ? t
                    : x.dateTime.matches(t)
                    ? x.date.fromDate(t.UTCdate, t.timezoneOffset)
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.date.fromString(t.toString())
                    : void r(t, "date");
                }
              },
              time: {
                name: "time",
                matches: function (t) {
                  return t instanceof l && "time" == t.type;
                },
                fromString: function (t) {
                  return mt(t, "time");
                },
                fromDate: function (t, e) {
                  t = new l(t, e, "time");
                  return new l(x.dateTime.fromString("1972-01-01T" + t.toString()).UTCdate, e, "time");
                },
                cast: function (t) {
                  return x.time.matches(t)
                    ? t
                    : x.dateTime.matches(t)
                    ? x.time.fromDate(t.UTCdate, t.timezoneOffset)
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.time.fromString(t.toString())
                    : void r(t, "time");
                }
              },
              dateTimeStamp: {
                name: "dateTimeStamp",
                matches: function (t) {
                  return t instanceof l && "dateTimeStamp" == t.type;
                },
                fromString: function (t) {
                  return mt(t, "dateTimeStamp");
                },
                fromDate: function (t, e) {
                  return new l(t, e, "dateTimeStamp");
                },
                cast: function (t) {
                  return x.dateTimeStamp.matches(t)
                    ? t
                    : x.dateTime.matches(t) || x.date.matches(t)
                    ? x.dateTimeStamp.fromDate(t.UTCdate, t.timezoneOffset)
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.dateTimeStamp.fromString(t.toString())
                    : void r(t, "dateTimeStamp");
                }
              },
              duration: {
                name: "duration",
                matches: function (t) {
                  return $(t.type, "duration");
                },
                fromString: function (t) {
                  return ht(t, "duration");
                },
                fromMonthsMilliseconds: function (t, e) {
                  return new ut(t, e, "duration");
                },
                cast: function (t) {
                  return x.duration.matches(t)
                    ? t
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? x.duration.fromString(t.toString())
                    : void r(t, "duration");
                }
              },
              hexBinary: {
                name: "hexBinary",
                matches: function (t) {
                  return "hexBinary" === t.type;
                },
                fromString: function (t) {
                  return new et(tt(t), "hexBinary");
                },
                cast: function (t) {
                  return t instanceof et
                    ? new et(t.value, "hexBinary")
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? new et(tt(t.toString()), "hexBinary")
                    : void r(t, "hexBinary");
                }
              },
              base64Binary: {
                name: "base64Binary",
                matches: function (t) {
                  return "base64Binary" === t.type;
                },
                fromString: function (t) {
                  return new et(W(t), "base64Binary");
                },
                encodeFromString: function (t) {
                  return new et(t, "base64Binary");
                },
                cast: function (t) {
                  return t instanceof et
                    ? new et(t.value, "base64Binary")
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? new et(W(t.toString()), "base64Binary")
                    : void r(t, "base64Binary");
                }
              }
            }),
            st("gYearMonth"),
            st("gYear"),
            st("gMonthDay"),
            st("gMonth"),
            st("gDay"),
            (X = {
              dateTime:
                /^\s*(-?(?:[1-9][0-9]{4,}|[0-9]{4})-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?)(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
              date: /^\s*(-?(?:[1-9][0-9]{4,}|[0-9]{4})-[0-9]{2}-[0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
              time: /^\s*([0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?)(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
              dateTimeStamp: /^\s*(-?[0-9]+-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?)(Z|(\+|-)[0-9]{2}:[0-9]{2})\s*$/,
              gYearMonth: /^\s*(-?(?:[1-9][0-9]{4,}|[0-9]{4})-[0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
              gYear: /^\s*(-?[1-9][0-9]{4,}|-?[0-9]{4})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
              gMonthDay: /^\s*--([0-9]{2}-[0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
              gMonth: /^\s*--([0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
              gDay: /^\s*---([0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
              duration:
                /^\s*\-?P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]*)?)S)?)?\s*$/,
              dayTimeDuration: /^\s*\-?P(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]*)?)S)?)?\s*$/,
              yearMonthDuration: /^\s*\-?P(?:([0-9]+)Y)?(?:([0-9]+)M)?\s*$/
            }),
            (L = {
              dateTime: function (t) {
                return ct(t);
              },
              date: function (t) {
                return t + "T00:00:00";
              },
              time: function (t) {
                return "1972-01-01T" + ct(t);
              },
              dateTimeStamp: function (t) {
                return ct(t);
              },
              gYearMonth: function (t) {
                return t + "-01T00:00:00";
              },
              gYear: function (t) {
                return t + "-01-01T00:00:00";
              },
              gMonthDay: function (t) {
                return "1972-" + t + "T00:00:00";
              },
              gMonth: function (t) {
                return "1972-" + t + "-01T00:00:00";
              },
              gDay: function (t) {
                return "1972-01-" + t + "T00:00:00";
              }
            }),
            (z = function (t, e) {
              return e * (void 0 === t ? 0 : parseInt(t, 10));
            }),
            (J = function (t, e) {
              return e * (void 0 === t ? 0 : Math.round(1e3 * parseFloat(t)));
            }),
            (G = function (t, e) {
              return e ? -t : t;
            }),
            (j = [
              function (t, e) {
                return G(z(t[1], 12) + z(t[2], 1), e.match(/^\s*\-.*/));
              },
              function (t, e) {
                return G(z(t[3], 864e5) + z(t[4], 36e5) + z(t[5], 6e4) + J(t[6], 1), e.match(/^\s*\-.*/));
              },
              function (t, e) {
                return G(z(t[1], 864e5) + z(t[2], 36e5) + z(t[3], 6e4) + J(t[4], 1), e.match(/^\s*\-.*/));
              },
              function () {
                return 0;
              }
            ]),
            (q = {
              duration: [0, 1],
              dayTimeDuration: [3, 2],
              yearMonthDuration: [0, 3]
            }),
            (u._init = dt);
          var R,
            B,
            u,
            X,
            L,
            z,
            J,
            G,
            j,
            q,
            x = u;
          function $(t, e) {
            return t == e || 1 == R[t + "<" + e];
          }
          function r(t, e) {
            throw new _("Casting from xs:" + t.type + " to xs:" + e + " is not allowed", "XPTY0004");
          }
          function c(t, e, n) {
            throw new _('Supplied value "' + t + '" is not a valid xs:' + e + (n ? " (" + n + ")" : ""), "FORG0001");
          }
          function Q(t, e) {
            throw new _('Supplied value "' + t + '" is not a valid xs:' + e, "FORG0001");
          }
          function K(t, e) {
            throw new _("Cannot compare xs:" + t + " with xs:" + e, "XPTY0004");
          }
          function V(t, e) {
            if (((t = N.trim(t)), /.\.$/.test(t) && (t += "0"), /^(\-|\+)?([0-9]+(\.[0-9]*)?|\.[0-9]+)([Ee](\-|\+)?[0-9]+)?$/.test(t)))
              return parseFloat(t);
            if (!/^(\-|\+)?NaN$/.test(t)) {
              if (/^\-INF$/.test(t)) return -1 / 0;
              if (/^(\+)?INF$/.test(t)) return 1 / 0;
              if (e) throw new _("Cannot convert string '" + t + "' to a number", "FORG0001");
            }
            return NaN;
          }
          function H(t) {
            return t.toString(36);
          }
          function Y(t) {
            var e,
              n,
              r,
              o,
              i = 0,
              a = 0,
              u = [];
            if (!t) return t;
            for (
              ;
              (e = ((o = (t.charCodeAt(i++) << 16) | (t.charCodeAt(i++) << 8) | t.charCodeAt(i++)) >> 12) & 63),
                (n = (o >> 6) & 63),
                (r = 63 & o),
                (u[a++] = B.charAt((o >> 18) & 63) + B.charAt(e) + B.charAt(n) + B.charAt(r)),
                i < t.length;

            );
            var s = u.join(""),
              c = t.length % 3;
            return (c ? s.slice(0, c - 3) : s) + "===".slice(c || 3);
          }
          function W(t) {
            (t = t.replace(/\s/g, "")),
              /^(....)*$/.test(t) || c(t, "base64Binary", "length must be a multiple of 4"),
              /^[A-Za-z0-9+/]*=?=?$/.test(t) || c(t, "base64Binary", "only [A-Za-z0-9+/] allowed, or '=' at the end"),
              /^([^=]*|.*[AQgw]==|.*[AEIMQUYcgkosw048]=)$/.test(t) || c(t, "base64Binary", "invalid characters before '='");
            var e,
              n,
              r,
              o,
              i,
              a = 0,
              u = 0,
              s = [];
            if (0 === t.length) return t;
            for (
              t += "";
              (e =
                ((i =
                  (B.indexOf(t.charAt(a++)) << 18) |
                  (B.indexOf(t.charAt(a++)) << 12) |
                  ((r = B.indexOf(t.charAt(a++))) << 6) |
                  (o = B.indexOf(t.charAt(a++)))) >>
                  16) &
                255),
                (n = (i >> 8) & 255),
                (i = 255 & i),
                (s[u++] = 64 == r ? String.fromCharCode(e) : 64 == o ? String.fromCharCode(e, n) : String.fromCharCode(e, n, i)),
                a < t.length;

            );
            return s.join("");
          }
          function Z(t) {
            var e = "";
            return (
              M.stringToCodepoints(t).forEach(function (t) {
                e += (t + 256).toString(16).substring(1).toUpperCase();
              }),
              e
            );
          }
          function tt(t) {
            (t = N.trim(t)), /^([a-fA-F0-9][a-fA-F0-9])*$/.test(t) || c(t, "hexBinary");
            for (var e = [], n = 0; n < t.length; n += 2) e.push(String.fromCharCode(parseInt(t.substring(n, n + 2), 16)));
            return e.join("");
          }
          function s(t, e) {
            (this.value = t),
              (this.type = e || "string"),
              "string" != typeof t && M.internalError("bad input to string constructor " + p(t));
          }
          function et(t, e) {
            (this.value = t), (this.type = e);
          }
          function e(t, e) {
            "number" != typeof t && M.internalError("type of value supplied to XdmDouble is not number: " + typeof t),
              (this.value = t),
              (this.type = e || "double");
          }
          function nt(t, e) {
            "number" != typeof t && M.internalError("type of value supplied to XdmInteger is not number: " + typeof t),
              (this.value = t),
              (this.type = e || "integer");
          }
          function i(t, e) {
            (this.value = new Big(t)), (this.type = e || "decimal");
          }
          function rt(t) {
            "boolean" != typeof (this.value = t) && M.internalError("type of value supplied to XdmBoolean is not boolean: " + typeof t);
          }
          function ot(t, e, n) {
            if (((this.prefix = t || ""), (this.uri = e || ""), (this.local = n), "" !== t && !N.isNCName(t)))
              throw new _("Invalid prefix: '" + t + "'", "FORG0001");
            if (!N.isNCName(n)) throw new _("Invalid local name: '" + n + "'", "FORG0001");
          }
          function l(t, e, n) {
            (this.UTCdate = t),
              (this.timezoneOffset = e),
              (this.type = n || "dateTime"),
              t instanceof Date || M.internalError("type of UTCdate supplied to XdmDateTime is not Date"),
              e &&
                "number" != typeof e &&
                M.internalError("type of value for timezone offset supplied to XdmDateTime is not number: " + typeof value);
          }
          function it(t) {
            return (100 + t).toString().substring(1);
          }
          function at(t) {
            return (1e4 + t).toString().substring(1);
          }
          function ut(t, e, n) {
            if (
              ((this.months = t),
              (this.milliseconds = e),
              ("number" == typeof t && "number" == typeof e) ||
                M.internalError("type of value supplied to XdmDuration is not number: " + typeof t + ", " + typeof e),
              (0 < t && e < 0) || (t < 0 && 0 < e))
            )
              throw new _("Months/seconds must both be negative or both positive", "FORG0001");
            this.type = n || "duration";
          }
          function st(n) {
            var t = (u[n] = {});
            (t.name = n),
              (t.matches = function (t) {
                return t instanceof l && t.type == n;
              }),
              (t.fromString = function (t) {
                return mt(t, n);
              }),
              (t.fromDate = function (t, e) {
                return new l(t, e, n);
              }),
              (t.cast = function (t) {
                var e;
                return u[n].matches(t)
                  ? t
                  : x.dateTime.matches(t) || x.date.matches(t)
                  ? (e = u[n]).fromString(e.fromDate(t.UTCdate, t.timezoneOffset).toString())
                  : x.string.matches(t) || x.untypedAtomic.matches(t)
                  ? u[n].fromString(t.toString())
                  : void r(t, n);
              });
          }
          function ct(t) {
            if (-1 != t.indexOf(".", t.length - 4)) {
              for (var e = t.split("."), n = e[1]; n.length < 3; ) n += "0";
              t = e[0] + "." + n;
            }
            return t;
          }
          function lt(t) {
            var e = t[0],
              n = t[1],
              r = t[2],
              o = t[3],
              i = t[4],
              t = t[5];
            return !(
              n < 1 ||
              12 < n ||
              r < 1 ||
              [31, e % 4 == 0 && !(e % 100 == 0 && e % 400 != 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1] < r ||
              24 <= o ||
              60 <= i ||
              60 <= t
            );
          }
          function ft(t, e) {
            var t = t.split(/[\-T:]/).map(function (t) {
                return parseFloat(t);
              }),
              n = t[0];
            if (n < 1 || 9999 < n) throw _("Year " + n + " is out of range", "FODT0001");
            if (!lt(t)) throw new _("Invalid date " + e, "FORG0001");
          }
          function mt(t, e) {
            var n,
              r,
              o,
              i = t.match(X[e]),
              a = (null === i && c(t, e), i[2] || ""),
              u = L[e](i[1]) + a;
            return (
              "-" ==
              (u = /24:00:00(\.0+)?([Z\+\-]|$)/.test(u)
                ? "time" == e
                  ? u.substring(0, 10) + "T00:00:00"
                  : gr["t+u"](mt(u.substring(0, 10), "date"), ht("P1D", "dayTimeDuration")).toString() + "T00:00:00"
                : u).charAt(0)
                ? (ft(u.substring(1, 20), t),
                  (o = u
                    .substr(1)
                    .split(/[\-T:]/)
                    .map(function (t) {
                      return parseFloat(t);
                    })),
                  (r = new Date(Date.UTC(-o[0], o[1] - 1, o[2], o[3], o[4], o[5]))))
                : (ft(u.substring(0, 19), t),
                  (t = u.split(/[\-T:]/)),
                  (n =
                    (u = (o = u.split(/[\-T:]/).map(function (t) {
                      return parseFloat(t);
                    }))[5]) - Math.floor(u)),
                  (r = new Date(Date.UTC(t[0], o[1] - 1, o[2], o[3], o[4], u, Math.round(1e3 * n)))).setUTCFullYear(t[0])),
              new l(
                (r =
                  "" === a
                    ? ((o = new Date()), new Date(r.getTime() + 60 * o.getTimezoneOffset() * 1e3))
                    : new Date(r.getTime() - 60 * pt(a) * 1e3)),
                pt(i[2] || ""),
                e
              )
            );
          }
          function pt(t) {
            if ("" === t) return null;
            if ("Z" == t) return 0;
            var e = t.split(":"),
              n = parseInt(e[0], 10),
              r = /^\-.*/.test(e[0]),
              n = Math.abs(n),
              e = parseInt(e[1], 10);
            if (14 < n || 59 < e) throw _("Invalid timezone " + t, "FORG0001");
            return (r ? -1 : 1) * (60 * n + e);
          }
          function ht(t, e) {
            var n = t.match(X[e]);
            return (null !== n && /\d/.test(t) && !/T$/.test(t)) || c(t, e), new ut(j[q[e][0]](n, t), j[q[e][1]](n, t), e);
          }
          function dt() {
            function i(t) {
              for (var e = u[t]; e.base; ) (R[t + "<" + (void 0 !== e.base.name ? e.base.name : e.base)] = 1), (e = e.base);
              ("decimal" != e && "double" != e && "float" != e) || (R[t + "<numeric"] = 1);
            }
            function a(e, t, n) {
              var r = (u[e] = {}),
                o = u[t];
              (r.name = e),
                (r.base = o),
                (r.matches = function (t) {
                  return $(t.type, e);
                }),
                (r.downCast = function (t) {
                  return n(t) || c(t.toString(), e), (t.type = e), t;
                }),
                (r.fromString = function (t) {
                  return r.downCast(o.fromString(t));
                }),
                (r.cast = function (t) {
                  return r.downCast(o.cast(t));
                }),
                i(e);
            }
            function t(n, t, r) {
              a(n, t, r);
              var e = u[n],
                o = u[t];
              function i(t) {
                var e = t.toNumber();
                return (!isNaN(e) && isFinite(e)) || Q(t.toString(), n), r(t) || c(t.toString(), n), (t.type = n), t;
              }
              (e.fromString = function (t) {
                return /INF|NaN/.test(t) && Q(t, n), e.downCast(o.fromString(t));
              }),
                (e.fromNumber = function (t) {
                  return i(o.fromNumber(t));
                });
            }
            function e(e, t, n, r) {
              a(e, t, n);
              var o = u[e],
                i = u[t];
              (o.downCast = function (t) {
                t = r(t.toString());
                return n(t) || c(t, e), new s(t, e);
              }),
                (o.fromString = function (t) {
                  return o.downCast(i.fromString(r(t)));
                });
            }
            function n(e, t, n) {
              a(e, t, n);
              var r = u[e],
                o = u[t];
              (r.downCast = function (t) {
                return t instanceof ut
                  ? new ut("yearMonthDuration" == e ? t.months : 0, "dayTimeDuration" == e ? t.milliseconds : 0, e)
                  : (n(t) || c(t.toString(), e), (t.type = e), t);
              }),
                (r.fromMonthsMilliseconds = function (t, e) {
                  return r.downCast(o.fromMonthsMilliseconds(t, e));
                }),
                (r.cast = function (t) {
                  return o.matches(t)
                    ? r.downCast(t)
                    : x.string.matches(t) || x.untypedAtomic.matches(t)
                    ? ht(t.toString(), e)
                    : r.downCast(o.cast(t));
                });
            }
            (x.double.NaN = x.double.fromNumber(NaN)),
              t("nonPositiveInteger", "integer", function (t) {
                return t.toNumber() <= 0;
              }),
              t("negativeInteger", "nonPositiveInteger", function (t) {
                return t.toNumber() < 0;
              }),
              t("long", "integer", function (t) {
                t = t.toBig();
                return 0 <= t.cmp(Big("-9223372036854775808")) && t.cmp(Big("9223372036854775807")) <= 0;
              }),
              t("int", "long", function (t) {
                return -2147483648 <= t.toNumber() && t.toNumber() <= 2147483647;
              }),
              t("short", "int", function (t) {
                return -32768 <= t.toNumber() && t.toNumber() <= 32767;
              }),
              t("byte", "short", function (t) {
                return -128 <= t.toNumber() && t.toNumber() <= 127;
              }),
              t("nonNegativeInteger", "integer", function (t) {
                return 0 <= t.toNumber();
              }),
              t("positiveInteger", "nonNegativeInteger", function (t) {
                return 0 < t.toNumber();
              }),
              t("unsignedLong", "nonNegativeInteger", function (t) {
                return 0 <= t.toNumber() && t.toBig().cmp(Big("18446744073709551615")) <= 0;
              }),
              t("unsignedInt", "unsignedLong", function (t) {
                return 0 <= t.toNumber() && t.toBig().cmp(Big("4294967295")) <= 0;
              }),
              t("unsignedShort", "unsignedInt", function (t) {
                return 0 <= t.toNumber() && t.toNumber() <= 65535;
              }),
              t("unsignedByte", "unsignedShort", function (t) {
                return 0 <= t.toNumber() && t.toNumber() <= 255;
              });
            var r = function () {
              return !0;
            };
            e("normalizedString", "string", r, function (t) {
              return t.replace(/[ \r\t\n]/g, " ");
            }),
              e("token", "normalizedString", r, M.wsCollapse),
              e(
                "language",
                "token",
                function (t) {
                  return /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/.test(t);
                },
                M.wsCollapse
              ),
              e("NMTOKEN", "token", N.isNMTOKEN, M.wsCollapse),
              e("Name", "token", N.isName, M.wsCollapse),
              e("NCName", "Name", N.isNCName, M.wsCollapse),
              e("ID", "NCName", N.isNCName, M.wsCollapse),
              e("IDREF", "NCName", N.isNCName, M.wsCollapse),
              e("ENTITY", "NCName", N.isNCName, M.wsCollapse),
              n("yearMonthDuration", "duration", function (t) {
                return 0 === t.milliseconds;
              }),
              n("dayTimeDuration", "duration", function (t) {
                return 0 === t.months;
              }),
              (u.dayTimeDuration.fromNumberOfMinutes = function (t) {
                return new ut(0, 60 * t * 1e3, "dayTimeDuration");
              }),
              (u.showValue = p),
              (u._init = function () {});
          }
          yt = "http://www.w3.org/2013/collation/UCA";
          var gt,
            yt,
            A = {
              allocateCodedComparer: Pt,
              allocateCompareFn: Rt,
              caseblindCollation: ne,
              cmpFn: kt,
              codepointCollation: ee,
              codepointCollationUri: (gt = "http://www.w3.org/2005/xpath-functions/collation/codepoint"),
              codepointComparison: Kt,
              compareFnWithProps: Bt,
              deepEqualItems: Jt,
              deepEqualSequences: zt,
              eqFn: It,
              fotsCaseblindCollationUri: "http://www.w3.org/2010/09/qt-fots-catalog/collation/caseblind",
              gc: vt,
              gc10comparer: xt,
              generalComparison: Nt,
              getCollation: Yt,
              getCollatingFn: oe,
              getConverters: jt,
              grouping: $t,
              htmlCaseInsensitiveCollationUri: "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive",
              itemIsNaN: Tt,
              lexicographicCompare: Gt,
              sortKeyProps: Ut,
              sortSequence: qt,
              testComparison: Xt,
              testEquality: Lt,
              trieWithCollation: re,
              xsltsCaseblindCollationUri: "http://www.w3.org/xslts/collation/caseblind"
            };
          function vt(t, e, n, r) {
            for (var o, i = x.numeric.matches, a = x.untypedAtomic.matches; null !== (o = t.next()); )
              for (var u = F.ForArray(e); null !== (c = u.next()); ) {
                var s = a(o) ? (a(c) ? x.string : i(c) ? x.double : x[c.type]).cast(o) : o,
                  c = a(c) ? (a(o) ? x.string : i(o) ? x.double : x[o.type]).cast(c) : c;
                if (!((i(s) && isNaN(s.value)) || (i(c) && isNaN(c.value))))
                  if ("=" == n ? r.equals(s, c) : "!=" == n ? !r.equals(s, c) : Xt(n, r.compare(s, c))) return F.oneBoolean(!0);
              }
            return F.oneBoolean(!1);
          }
          function xt(o) {
            return {
              equals: function (t, e) {
                var n = x.numeric.matches,
                  r = function (t) {
                    return x.numeric.numberFn(t).toNumber();
                  };
                x.untypedAtomic.matches;
                return n(t) || n(e) ? r(t) === r(e) : o.equals(t, e);
              },
              compare: o.compare
            };
          }
          function Nt(t, e, n) {
            var r = M,
              o = r.evalChild1(t, e),
              r = r.evalChild2(t, e).expand(),
              e = Pt(t.getAttribute("comp"), e);
            return vt(o, r, (n = n || t.getAttribute("op")), e);
          }
          function bt(t, e) {
            return t.equals(e);
          }
          function St(t, e) {
            return t.compareTo(e);
          }
          function wt(t) {
            return null === t;
          }
          function Tt(t) {
            return (x.double.matches(t) || x.float.matches(t)) && isNaN(t.toNumber());
          }
          function Et(n, r) {
            return function (t, e) {
              return r(t) || r(e) ? !!r(t) && r(e) : n(t, e);
            };
          }
          function Ot(n, r) {
            return function (t, e) {
              return r(t) || r(e) ? (r(t) ? (r(e) ? 0 : -1) : 1) : n(t, e);
            };
          }
          function At(t) {
            return Ot(t, wt);
          }
          function Ct(t) {
            return Ot(t, Tt);
          }
          function Dt(t, e) {
            return null === t
              ? NaN
              : (x.numeric.matches(t) ? t : e ? x.double.fromString(t.toString()) : x.double.fromStringUnfailing(t.toString())).toNumber();
          }
          function _t(n) {
            return function (t, e) {
              (t = Dt(t, n)), (e = Dt(e, n));
              return isNaN(t) ? (isNaN(e) ? 0 : -1) : isNaN(e) ? 1 : t - e;
            };
          }
          function Mt(n) {
            return function (t, e) {
              (t = Dt(t, n)), (e = Dt(e, n));
              return isNaN(t) ? isNaN(e) : !isNaN(e) && t - e == 0;
            };
          }
          function Ft(i, a) {
            return function (t, e) {
              var n = t.toString(),
                r = e.toString(),
                t = n.toLowerCase(),
                e = r.toLowerCase(),
                t = i(t, e);
              if (0 !== t) return t;
              for (var o = 0; o < n.length; o++)
                if (n.charAt(o) != r.charAt(o)) return a == (n.charAt(o) == n.charAt(o).toLowerCase()) ? -1 : 1;
              return 0;
            };
          }
          function It(n) {
            return function (t, e) {
              return x.string.isStringLike(t) && x.string.isStringLike(e) ? n(t.value, e.value) : t.equals(e);
            };
          }
          function kt(n) {
            return function (t, e) {
              return x.string.isStringLike(t) && x.string.isStringLike(e) ? n(t.value, e.value) : t.compareTo(e);
            };
          }
          function Pt(t, e) {
            var n,
              r = t.split("|");
            if ("DESC" == r[0])
              return {
                equals: (n = Pt(t.slice(5), e)).equals,
                compare: function (t, e) {
                  return n.compare(e, t);
                }
              };
            var o,
              i,
              a = {};
            switch (r[0]) {
              case "NC":
                return (a.equals = Mt(!1)), (a.compare = _t(!1)), a;

              case "QUNC":
                return (a.equals = Mt(!0)), (a.compare = _t(!0)), a;

              case "DblSC":
                return (a.equals = Et(bt, Tt)), (a.compare = At(Ct(St))), a;

              case "CCC":
                return (a.equals = It(ee().equals)), (a.compare = At(kt(ee().compare))), a;

              case "TEXT":
                (o = r[1] || gt), te((i = Zt(o, e)), o);
                var u = function (t, e) {
                    return i.equals(t.toString(), e.toString());
                  },
                  u =
                    ((a.equals = Et(u, wt)),
                    function (t, e) {
                      return kt(i.compare)(x.string.cast(t), x.string.cast(e));
                    });
                return (a.compare = At(u)), a;

              case "CAVC":
              case "DecSC":
              case "GAC":
              case "AtSC":
              case "CalVC":
                return {
                  equals: Et(bt, wt),
                  compare: At(Ct(St))
                };

              case "EQC":
                return (
                  (a.equals = Et(bt, wt)),
                  (a.compare = function (t, e) {
                    return a.equals(t, e) ? 0 : 1;
                  }),
                  a
                );

              case "CAC":
                return (
                  (o = r[1] || gt),
                  te((i = Zt(o, e)), o),
                  (a.equals = function (t, e) {
                    return i.equals(t.toString(), e.toString());
                  }),
                  (a.compare = function (t, e) {
                    return i.compare(t.toString(), e.toString());
                  }),
                  a
                );

              default:
                throw new _("Unknown comparer " + t, "SXJS0003");
            }
          }
          function Ut(t, e) {
            var n = M,
              r = null,
              o =
                (t.hasAttribute("comp") && (r = (r = t.getAttribute("comp")).replace(/^DESC\|/, "")),
                n.evaluateIfPresent(n.argRole(t, "collation"), e).next()),
              i = n.evaluateIfPresent(n.argRole(t, "order"), e).next(),
              a = n.evaluateIfPresent(n.argRole(t, "lang"), e).next(),
              u = n.evaluateIfPresent(n.argRole(t, "caseOrder"), e).next(),
              n = n.evaluateIfPresent(n.argRole(t, "dataType"), e).next(),
              u = null === o && null !== u ? u.toString() : "#default";
            try {
              a = null === o && null !== a && "" !== a.toString() ? x.language.fromString(a.toString()) : null;
            } catch (t) {
              throw _("@lang: " + t.message, "XTDE0030");
            }
            return (
              (i = null === i ? "ascending" : i.toString()),
              (n = null === n ? null : n.toString()),
              {
                comp: r,
                collation: (o = null === o ? gt : o.toString()),
                order: i,
                lang: a,
                caseOrder: u,
                dataType: n
              }
            );
          }
          function Rt(t, e) {
            return Bt(Ut(t, e), e);
          }
          function Bt(t, e) {
            var e = Zt(t.collation, e),
              e = (te(e, t.collation), e.compare),
              n = "#default" != t.caseOrder ? Ft(e, "lower-first" == t.caseOrder) : kt(e);
            function r(n) {
              return "descending" == t.order
                ? function (t, e) {
                    return n(e, t);
                  }
                : n;
            }
            if ("number" == t.dataType) return r(_t(!1));
            if ("text" == t.dataType)
              return r(
                At(function (t, e) {
                  return n(x.string.cast(t), x.string.cast(e));
                })
              );
            if (t.comp) {
              e = t.comp;
              if ("DblSC" == e) return r(At(Ct(St)));
              if ("CalVC" == e || "DecSC" == e) return r(At(St));
              if ("CCC" == e) return r(At(n));
            }
            return r(n);
          }
          function Xt(t, e) {
            switch (t) {
              case "=":
              case "eq":
                return 0 === e;

              case "<":
              case "lt":
                return e < 0;

              case ">":
              case "gt":
                return 0 < e;

              case ">=":
              case "ge":
                return 0 <= e;

              case "<=":
              case "le":
                return e <= 0;

              case "!=":
              case "ne":
                return 0 !== e;

              default:
                throw new _("Unknown operator " + t, "SXJS0003");
            }
          }
          function Lt(t, e) {
            switch (t) {
              case "=":
              case "eq":
                return e;

              case "!=":
              case "ne":
                return !e;

              case "<":
              case "lt":
              case ">":
              case "gt":
              case ">=":
              case "ge":
              case "<=":
              case "le":
                throw new _("Operator " + t + " not allowed for unordered types", "SXJS0003");

              default:
                throw new _("Unknown operator " + t, "SXJS0003");
            }
          }
          function zt(t, e, n) {
            var r,
              o,
              i = t.expand(),
              a = e.expand();
            for (t = F.ForArray(i), e = F.ForArray(a); ; ) {
              if (((r = t.next()), (o = e.next()), null === r)) return null === o;
              if (null === o) return !1;
              if (!Jt(r, o, n)) return !1;
            }
          }
          function Jt(e, n, t) {
            var r,
              o,
              i = C;
            if (e === n) return !0;
            if (i.isNode(e)) {
              if (!i.isNode(n) || !i.isSameNodeType(e.nodeType, n.nodeType)) return !1;
              switch (e.nodeType) {
                case i.DOCUMENT_NODE:
                case i.DOCUMENT_FRAGMENT_NODE:
                  return zt(D.child(e), D.child(n));

                case i.ELEMENT_NODE:
                  if (!i.nameOfNode(e).equals(i.nameOfNode(n))) return !1;
                  var a,
                    u = D.attribute(e).expand();
                  if (u.length != D.attribute(n).count()) return !1;
                  for (a = 0; a < u.length; a++) {
                    var s = u[a],
                      c = i.nameOfNode(s),
                      l = c.uri || null;
                    if (!n.hasAttributeNS(l, c.local)) return !1;
                    if (n.getAttributeNS(l, c.local) != s.value) return !1;
                  }
                  return zt(D.child(e), D.child(n), t);

                case i.ATTRIBUTE_NODE:
                  return i.nameOfNode(e).equals(i.nameOfNode(n)) && e.value == n.value;

                case i.NAMESPACE_NODE:
                  return e.prefix == n.prefix && e.uri == n.uri;

                case i.PROCESSING_INSTRUCTION_NODE:
                  return e.target == n.target && (t ? t(e.textContent, n.textContent) : e.textContent == n.textContent);

                case i.TEXT_NODE:
                case i.COMMENT_NODE:
                  return t ? t(e.textContent, n.textContent) : e.textContent == n.textContent;

                default:
                  throw new _("Unknown node type " + e.nodeType, "SXJS0003");
              }
            } else {
              if (M.isArray(e)) {
                if (!M.isArray(n) || n.value.length != e.value.length) return !1;
                for (var f = 0; f < e.value.length; f++) if (!zt(F.ForArray(e.value[f]), F.ForArray(n.value[f], t))) return !1;
                return !0;
              }
              if (M.isMap(e))
                return (
                  !!M.isMap(n) &&
                  ((r = e.keys()), (o = n.keys()), r.length == o.length) &&
                  F.ForArray(r).every(function (t) {
                    return n.containsKey(t) && zt(F.ForArray(e.get(t)), F.ForArray(n.get(t)));
                  })
                );
              if (Tt(e) && Tt(n)) return !0;
              if (t && x.string.isStringLike(e) && x.string.isStringLike(n)) return t(e.value, n.value);
              try {
                return e.equals(n);
              } catch (t) {
                return !1;
              }
            }
          }
          function Gt(t, e, n) {
            for (var r = t.next(), o = e.next(); ; ) {
              if (null === r) return null === o ? 0 : -1;
              if (null === o) return 1;
              if (n) {
                if (!Jt(r, o, n.equals))
                  return Tt(r) ? -1 : x.string.matches(r) && x.string.matches(o) ? n.compare(r.value, o.value) : r.compareTo(o);
              } else if (!Jt(r, o)) return Tt(r) ? -1 : r.compareTo(o);
              (r = t.next()), (o = e.next());
            }
          }
          function jt(t, e) {
            return t.map(function (t) {
              (t = M.argRole(t, "dataType")), (t = null === t ? null : M.evaluate(t, e).next());
              return "number" == t
                ? function (t) {
                    return null === t ? null : x.double.fromStringUnfailing(t.toString());
                  }
                : "text" == t
                ? function (t) {
                    return null === t ? null : x.string.cast(t);
                  }
                : function (t) {
                    return t;
                  };
            });
          }
          function qt(t, e) {
            var n = C,
              r = F.Tracker(M.evalChild1(t, e)),
              o = [],
              i = n.getChildElements(t, "sortKey"),
              a = i.map(function (t) {
                return Rt(t, e);
              }),
              u = jt(i, e),
              s = e.newContext(!1);
            return (
              (s.tempOutputState = "sort key"),
              (s.focus = r).forEachItem(function (t) {
                var e = i.map(function (t, e) {
                  return u[e](M.evalChild1(t, s).next());
                });
                o.push({
                  item: t,
                  keys: e
                });
              }),
              o.sort(function (t, e) {
                for (var n = 0; n < a.length; n++) {
                  var r = a[n](t.keys[n], e.keys[n]);
                  if (0 !== r) return r;
                }
                return 0;
              }),
              F.ForArray(o).mapOneToOne(function (t) {
                return t.item;
              })
            );
          }
          function $t(u, s) {
            var a = F.Tracker(M.evaluate(M.argRole(u, "select"), s)),
              c = s.newContext(!1);
            function l(e) {
              var n = [];
              return (
                a.forEachItem(function (t) {
                  e(n, t);
                }),
                n
              );
            }
            c.focus = a;
            for (
              var o,
                i,
                t = {
                  starting: function () {
                    var n = Jn(M.argRole(u, "match"));
                    return l(function (t, e) {
                      1 == a.position || n(e, c)
                        ? t.push({
                            group: [e]
                          })
                        : t[t.length - 1].group.push(e);
                    });
                  },
                  ending: function () {
                    var n = Jn(M.argRole(u, "match")),
                      r = !1;
                    return l(function (t, e) {
                      1 == a.position || r
                        ? t.push({
                            group: [e]
                          })
                        : t[t.length - 1].group.push(e),
                        (r = n(e, c));
                    });
                  },
                  adjacent: function () {
                    var t = M.argRole(u, "collation"),
                      r = Zt(t ? M.evaluate(t, s).next().toString() : gt, s),
                      o = M.argRole(u, "key"),
                      i = null;
                    return l(function (t, e) {
                      var n = M.evaluate(o, c).expand();
                      1 != a.position && zt(F.ForArray(n), F.ForArray(i), r.equals)
                        ? t[t.length - 1].group.push(e)
                        : (t.push({
                            group: [e],
                            key: n
                          }),
                          (i = n));
                    });
                  },
                  by: function () {
                    var t = M.argRole(u, "collation"),
                      t = Zt(t ? M.evaluate(t, s).next().toString() : gt, s),
                      i = A.trieWithCollation(t),
                      a = M.argRole(u, "key");
                    return l(function (e, n) {
                      var r,
                        o = [];
                      M.evaluate(a, c).forEachItem(function (t) {
                        i.containsKey(t)
                          ? ((r = i.get(t)),
                            o.findIndex(function (t) {
                              return t == r;
                            }) < 0 && (e[r].group.push(n), o.push(r)))
                          : ((r = e.length),
                            e.push({
                              group: [n],
                              key: [t]
                            }),
                            i.inSituPut(t, r),
                            o.push(r));
                      });
                    });
                  },
                  by_c: function () {
                    var t = M.argRole(u, "collation"),
                      n = Zt(t ? M.evaluate(t, s).next().toString() : gt, s),
                      o = M.argRole(u, "key"),
                      i = new y(),
                      e = n.collationKey;
                    if (e)
                      return (
                        (i.options = {
                          sameKey: function (t, e) {
                            return zt(F.ForArray(t), F.ForArray(e), n.equals);
                          },
                          hash: function (t) {
                            return t
                              .map(function (t) {
                                return x.string.isStringLike(t) ? e(t.matchKey()) : t.matchKey();
                              })
                              .join();
                          }
                        }),
                        l(function (t, e) {
                          var n,
                            r = M.evaluate(o, c).expand();
                          i.containsKey(r)
                            ? t[(n = i.get(r))].group.push(e)
                            : ((n = t.length),
                              t.push({
                                group: [e],
                                key: r
                              }),
                              i.inSituPut(r, n));
                        })
                      );
                    throw new _("Collation is unsuitable for keys and grouping", "XTDE1110");
                  }
                },
                e = ((t.adjacent_c = t.adjacent), u.getAttribute("algorithm") + (M.hasFlag(u, "c") ? "_c" : "")),
                n = t[e](),
                f = C.getChildElements(u, "sortKey"),
                r =
                  (0 < f.length &&
                    ((t = F.Tracker(F.ForArray(n))),
                    ((o = s.newContext(!1)).focus = t),
                    (i = f.map(function (t) {
                      return Rt(t, s);
                    })),
                    t.forEachItem(function (n, r) {
                      n.sortKeys = f.map(function (t) {
                        var e = o.focus;
                        return (
                          (e.current = n.group[0]),
                          (e.position = r + 1),
                          (o.currentGroup = n.group),
                          (o.currentGroupingKey = n.key),
                          M.evalChild1(t, o).next()
                        );
                      });
                    }),
                    n.sort(function (t, e) {
                      for (var n = 0; n < i.length; n++) {
                        var r = i[n](t.sortKeys[n], e.sortKeys[n]);
                        if (r < 0) return -1;
                        if (0 < r) return 1;
                      }
                      return 0;
                    })),
                  s.newContext(!1)),
                m = ((r.focus = F.Tracker(F.ForArray(n))), M.argRole(u, "content")),
                p = [],
                h = 0;
              null !== r.focus.next();

            ) {
              var d = n[h++],
                g = r.focus;
              (g.current = d.group[0]),
                (g.position = h),
                (r.currentGroup = d.group),
                (r.currentGroupingKey = d.key),
                Array.prototype.push.apply(p, M.evaluate(m, r).expand());
            }
            return F.ForArray(p);
          }
          function Qt(t, e) {
            for (var n = M, r = n.stringToCodepoints(t.toString()), o = n.stringToCodepoints(e.toString()), i = 0; ; ) {
              if (i == r.length) return i == o.length ? 0 : -1;
              if (i == o.length) return 1;
              if (r[i] != o[i]) return r[i] - o[i];
              i++;
            }
          }
          function Kt(t, e) {
            var n;
            return M.isAstral(t) || M.isAstral(e) ? ((n = Qt(t, e)) < 0 ? -1 : 0 === n ? 0 : 1) : t < e ? -1 : t == e ? 0 : 1;
          }
          function Vt(t, e) {
            return t.substring(0, e.length) === e;
          }
          function Ht(t, e) {
            return t.substring(t.length - e.length) === e;
          }
          function Yt(t, e, n) {
            return Zt(Wt(t, e), n);
          }
          function Wt(t, e) {
            return e ? e.next().toString() : C.getAttribute(t, "collation");
          }
          function Zt(t, e) {
            e = t && !Vt(t, yt) ? e.fixed.options.collations[t] : ee();
            if (e) return e;
            throw _("Unrecognized collation " + t, "FOCH0002");
          }
          function te(t, e) {
            if (!t.hasOwnProperty("compare") || !t.hasOwnProperty("compare"))
              throw _("Collation " + e + " cannot be used for sorting", "XTDE1035");
          }
          function ee() {
            return {
              equals: function (t, e) {
                return t === e;
              },
              compare: function (t, e) {
                return Kt(t, e);
              },
              contains: function (t, e) {
                return -1 != t.indexOf(e);
              },
              startsWith: function (t, e) {
                return Vt(t, e);
              },
              endsWith: function (t, e) {
                return Ht(t, e);
              },
              indexOf: function (t, e) {
                return t.indexOf(e);
              },
              collationKey: function (t) {
                return t;
              }
            };
          }
          function ne() {
            function n(t) {
              return t ? (t + "").toUpperCase() : "";
            }
            return {
              equals: function (t, e) {
                return n(t) === n(e);
              },
              compare: function (t, e) {
                return Kt(n(t), n(e));
              },
              contains: function (t, e) {
                return -1 != n(t).indexOf(n(e));
              },
              startsWith: function (t, e) {
                return Vt(n(t), n(e));
              },
              endsWith: function (t, e) {
                return Ht(n(t), n(e));
              },
              indexOf: function (t, e) {
                return n(t).indexOf(n(e));
              },
              collationKey: function (t) {
                return n(t);
              }
            };
          }
          function re(t) {
            var n,
              e = new y(),
              r = t.collationKey;
            if (r)
              return (
                (n = function (t) {
                  return x.string.isStringLike(t) ? r(t.matchKey()) : t.matchKey();
                }),
                (e.options = {
                  sameKey: function (t, e) {
                    return n(t) === n(e);
                  },
                  hash: function (t) {
                    return n(t);
                  }
                }),
                e
              );
            throw new _("Collation is unsuitable for keys and grouping", "XTDE1110");
          }
          function oe(t, e, n, r) {
            (e = Wt(t, e)), (r = Zt(e, r)[n]);
            if (r) return r;
            throw _("Collation " + e + " has no " + n + " method", "FOCH0002", t);
          }
          var t = 13;
          function ie(t, e, n) {
            (this.prefix = null === t ? "" : t), (this.uri = null === e ? "" : e), n && (this.parentNode = n);
          }
          ie.prototype = {
            prefix: null,
            uri: null,
            parentNode: null,
            nodeType: t
          };
          t = 2;
          function ae(t, e, n) {
            (this.qname = t),
              (this.value = e),
              (this.parent = n),
              (this.name = this.qname.toString()),
              (this.namespaceURI = this.qname.uri),
              (this.localName = this.qname.local),
              (this.prefix = this.qname.prefix);
          }
          ae.prototype = {
            qname: null,
            value: null,
            parent: null,
            nodeType: t
          };
          var ue,
            se,
            ce,
            C = {
              ELEMENT_NODE: (ue = 1),
              ATTRIBUTE_NODE: 2,
              TEXT_NODE: 3,
              CDATA_SECTION: 4,
              PROCESSING_INSTRUCTION_NODE: 7,
              COMMENT_NODE: 8,
              DOCUMENT_NODE: 9,
              DOCUMENT_TYPE_NODE: 10,
              DOCUMENT_FRAGMENT_NODE: 11,
              NAMESPACE_NODE: 13,
              shallowCopy: function (t, e, n, r) {
                if (C.isNode(t)) {
                  switch (t.nodeType) {
                    case C.DOCUMENT_NODE:
                    case C.DOCUMENT_FRAGMENT_NODE:
                      var o = e.resultDocument.createDocumentFragment(),
                        i = e.newContext(!1);
                      M.makeComplexContent(o, r(i), e);
                      break;

                    case C.ELEMENT_NODE:
                      (i = C.nameOfNode(t)),
                        (o = e.createElement(i.uri, i.toString())),
                        n &&
                          0 <= n.indexOf("c") &&
                          !(ci.getPlatform().inBrowser && o instanceof HTMLElement) &&
                          C.inScopeNamespaces(t).forEach(function (t) {
                            C.declareNS(o, t.prefix, t.uri);
                          }),
                        (o._saxonBaseUri = C.baseURI(t)),
                        M.makeComplexContent(M.markLocal(o, n), r(e), e);
                      break;

                    case C.ATTRIBUTE_NODE:
                      o = new ae(C.nameOfNode(t), t.value, null);
                      break;

                    case C.TEXT_NODE:
                      o = e.resultDocument.createTextNode(t.textContent);
                      break;

                    case C.COMMENT_NODE:
                      o = e.resultDocument.createComment(t.textContent);
                      break;

                    case C.PROCESSING_INSTRUCTION_NODE:
                      o = e.resultDocument.createProcessingInstruction(t.target, t.textContent);
                      break;

                    case C.NAMESPACE_NODE:
                      o = new ie(t.prefix, t.uri);
                      break;

                    default:
                      throw _("Unknown node type " + t.nodeType, "SXJS0003");
                  }
                  return F.Singleton(M.markLocal(o, n));
                }
                return F.Singleton(t);
              },
              copyItem: function (t, e, n) {
                if (!C.isNode(t)) return t;
                var r,
                  o,
                  i = function (t, e) {
                    n && 0 <= n.indexOf("m") && (e._saxonOriginal = t);
                  };
                switch (t.nodeType) {
                  case C.DOCUMENT_NODE:
                  case C.DOCUMENT_FRAGMENT_NODE:
                    var a = e.resultDocument.createDocumentFragment();
                    return (
                      ((a = C.obtainDocumentNumber(a))._saxonBaseUri = t._saxonBaseUri),
                      M.makeComplexContent(
                        a,
                        D.child(t).mapOneToOne(function (t) {
                          return C.copyItem(t, e, n);
                        }),
                        e
                      ),
                      i(t, a),
                      M.markLocal(a, n)
                    );

                  case C.NAMESPACE_NODE:
                    return new ie(t.prefix, t.uri);

                  case C.ELEMENT_NODE:
                    return (
                      (o = C.nameOfNode(t)),
                      (r = e.createElement(o.uri, o.toString())),
                      n &&
                        0 <= n.indexOf("c") &&
                        !(ci.getPlatform().inBrowser && r instanceof HTMLElement) &&
                        C.inScopeNamespaces(t).forEach(function (t) {
                          C.declareNS(r, t.prefix, t.uri);
                        }),
                      D.attribute(t).forEachItem(function (t) {
                        var e = "" === t.namespaceURI ? null : t.namespaceURI;
                        r.setAttributeNS(e, t.name, t.value);
                      }),
                      D.child(t).forEachItem(function (t) {
                        t = C.copyItem(t, e, n);
                        t.nodeType == C.ELEMENT_NODE && "" === C.nameOfNode(t).uri && "" !== o.uri && C.declareNS(t, "", ""),
                          r.appendChild(t);
                      }),
                      (r._saxonBaseUri = C.baseURI(t)),
                      i(t, r),
                      M.markLocal(r, n)
                    );

                  case C.DOCUMENT_TYPE_NODE:
                    return null;

                  case C.ATTRIBUTE_NODE:
                    return new ae(C.nameOfNode(t), t.value, null);

                  default:
                    return (
                      i(t, (r = ci.getPlatform().inBrowser ? window.document.importNode(t, !0) : cloneNode(e.resultDocument, t, !0))),
                      M.markLocal(r, n)
                    );
                }
              },
              ownerDocument: function (t) {
                return D.ancestorOrSelf(t).expand().pop();
              },
              obtainDocumentNumber: function (t) {
                return "_saxonDocumentNumber" in t || (t._saxonDocumentNumber = ue++), t;
              },
              documentNumber: function (t) {
                return C.obtainDocumentNumber(t)._saxonDocumentNumber;
              },
              nameOfNode: function (t) {
                if (!t || !t.nodeType) return null;
                switch (t.nodeType) {
                  case C.ELEMENT_NODE:
                    return ci.getPlatform().inBrowser && t instanceof HTMLElement && "http://www.w3.org/1999/xhtml" == t.namespaceURI
                      ? x.QName.fromParts("", "", t.localName)
                      : x.QName.fromParts(t.prefix, t.namespaceURI, t.localName);

                  case C.ATTRIBUTE_NODE:
                    return "xml" == t.prefix ? x.QName.fromParts(t.prefix, M.KNOWN_URI.xml, t.localName) : t.qname;

                  case C.PROCESSING_INSTRUCTION_NODE:
                    return x.QName.fromParts("", "", t.target);

                  case C.NAMESPACE_NODE:
                    return t.prefix ? x.QName.fromParts("", "", t.prefix) : null;

                  default:
                    return null;
                }
              },
              getChildElements: function (t, e) {
                for (var n = [], r = t.firstChild; null !== r; )
                  r.nodeType != C.ELEMENT_NODE || (e && e != r.tagName) || n.push(r), (r = r.nextSibling);
                return n;
              },
              firstElementChild: function (t, e) {
                for (var n = t.firstChild; null !== n; ) {
                  if (n.nodeType == C.ELEMENT_NODE && (!e || e == n.tagName)) return n;
                  n = n.nextSibling;
                }
                return null;
              },
              inDocumentOrder: function (t) {
                var n = t.expand();
                return (
                  n.sort(C.compareDocumentOrder),
                  F.ForArray(n).mapOneToOne(function (t, e) {
                    return 0 < e && C.isSameNode(t, n[e - 1]) ? null : t;
                  })
                );
              },
              compareDocumentOrder: function (t, e) {
                function n(t) {
                  return D.ancestor(t).count();
                }
                if (C.isSameNode(t, e)) return 0;
                var r = C.xdmParentNode(t),
                  o = C.xdmParentNode(e);
                if (null === r)
                  return null === o
                    ? (a = C.obtainDocumentNumber)(t)._saxonDocumentNumber < a(e)._saxonDocumentNumber
                      ? -1
                      : 1
                    : t === o
                    ? -1
                    : C.compareDocumentOrder(t, o);
                if (null === o) return e === r ? 1 : C.compareDocumentOrder(r, e);
                if (r !== o)
                  return t === o
                    ? -1
                    : e === r
                    ? 1
                    : (a = n(r)) == (i = n(o))
                    ? C.compareDocumentOrder(r, o)
                    : i < a
                    ? C.compareDocumentOrder(r, e)
                    : C.compareDocumentOrder(t, o);
                var i = t.nodeType,
                  a = e.nodeType;
                if (i == C.ATTRIBUTE_NODE) {
                  if (a != C.ATTRIBUTE_NODE) return a == C.NAMESPACE_NODE ? 1 : -1;
                  for (var u = r.attributes, s = 0; s < u.length; s++) {
                    var c = x.QName.fromParts(u[s].prefix, u[s].namespaceURI, u[s].localName);
                    if (c.equals(C.nameOfNode(t))) return -1;
                    if (c.equals(C.nameOfNode(e))) return 1;
                  }
                  throw _("Att not found in parent", "SXJS0004");
                }
                if (i == C.NAMESPACE_NODE) return a != C.NAMESPACE_NODE || t.prefix < e.prefix ? -1 : 1;
                if (a == C.ATTRIBUTE_NODE || a == C.NAMESPACE_NODE) return 1;
                for (var l = t, f = e; ; ) {
                  if (null === (l = l.previousSibling)) return -1;
                  if (l === e) return 1;
                  if (null === (f = f.previousSibling)) return 1;
                  if (f === t) return -1;
                }
              },
              xdmParentNode: function (t) {
                return C.isAttr(t) ? t.parent : t.parentNode;
              },
              declareNS: function (t, e, n) {
                t.setAttributeNS("http://www.w3.org/2000/xmlns/", "" === e ? "xmlns" : "xmlns:" + e, n);
              },
              inScopeNamespaces: function (t) {
                for (
                  var e,
                    n = [
                      {
                        prefix: "xml",
                        uri: M.KNOWN_URI.xml
                      }
                    ],
                    r = {
                      xml: !0
                    },
                    o = D.ancestorOrSelf(t);
                  null !== (e = o.next()) && e.nodeType == C.ELEMENT_NODE;

                )
                  for (var i = e.attributes, a = 0; a < i.length; a++) {
                    var u = i[a].name;
                    "xmlns" == u.substring(0, 5) &&
                      (5 != u.length || r[""]
                        ? ":" != u.charAt(5) ||
                          r[(u = u.substring(6))] ||
                          ((r[u] = !0),
                          n.push({
                            prefix: u,
                            uri: i[a].value
                          }))
                        : ((r[""] = !0),
                          "" !== i[a].value &&
                            n.push({
                              prefix: "",
                              uri: i[a].value
                            })));
                  }
                return n;
              },
              hasNamespaceUndeclaration: function (t) {
                t = t.attributes.getNamedItem("xmlns");
                return t && "" === t.value;
              },
              getInheritedAttribute: function (t, e) {
                for (var n = t; n && n.nodeType == C.ELEMENT_NODE; ) {
                  if (n.hasAttribute(e)) return n.getAttribute(e);
                  n = n.parentNode;
                }
                return null;
              },
              getAttribute: function (t, e, n) {
                return t.hasAttribute(e) ? t.getAttribute(e) : 2 < arguments.length ? n : null;
              },
              getAttributeAsEQName: function (t, e, n) {
                t = C.getAttributeAsQName(t, e, n);
                return null === t ? null : "Q{" + t.uri + "}" + t.local;
              },
              getAttributeAsQName: function (t, e, n) {
                return t.hasAttribute(e) ? C.resolveLexicalQName(t, t.getAttribute(e), n) : null;
              },
              resolveLexicalQName: function (e, t, n) {
                var r = x.QName;
                return /^Q\{/.test(t)
                  ? r.fromEQName(t)
                  : /:/.test(t)
                  ? r.fromString(t, function (t) {
                      return "xml" == t ? M.KNOWN_URI.xml : e.lookupNamespaceURI(t);
                    })
                  : ((n = (n && e.lookupNamespaceURI(null)) || ""), r.fromParts("", n, t));
              },
              isAttr: function (t) {
                return t instanceof ae;
              },
              isNSNode: function (t) {
                return t instanceof ie;
              },
              isNode: function (t) {
                return (
                  (t instanceof Node && !(t.nodeType == C.PROCESSING_INSTRUCTION_NODE && "xml" == t.target)) || C.isAttr(t) || C.isNSNode(t)
                );
              },
              isSameNode: function (t, e) {
                return (
                  t === e ||
                  (C.isNSNode(t) &&
                    C.isNSNode(e) &&
                    t.parentNode &&
                    e.parentNode &&
                    t.parentNode == e.parentNode &&
                    t.prefix == e.prefix) ||
                  (C.isAttr(t) && C.isAttr(e) && t.parent && e.parent && t.parent == e.parent && C.nameOfNode(t).equals(C.nameOfNode(e)))
                );
              },
              isSameNodeType: function (t, e) {
                return (
                  t == e ||
                  (t == C.DOCUMENT_NODE && e == C.DOCUMENT_FRAGMENT_NODE) ||
                  (e == C.DOCUMENT_NODE && t == C.DOCUMENT_FRAGMENT_NODE)
                );
              },
              isAbsoluteURI: function (t) {
                return /^(?:[a-z]+:)?\/\//i.test(t);
              },
              baseURI: function (t) {
                function e(t) {
                  var e = C.xdmParentNode(t);
                  return e ? C.baseURI(e) : t._saxonBaseUri || null;
                }
                var n;
                return null === t || C.isNSNode(t)
                  ? null
                  : t.nodeType == C.ELEMENT_NODE && t.hasAttribute("xml:base")
                  ? ((n = t.getAttribute("xml:base")), C.isAbsoluteURI(n) ? n : ci.getPlatform().resolveUri(n.toString(), e(t)).toString())
                  : e(t);
              },
              xmlToString: function (t, e) {
                for (var v = e["saxon:line-length"], e = e["saxon:indent-spaces"], x = "", n = e; 0 < n--; ) x += " ";
                var N = "  ";
                function b(t) {
                  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\n/g, "&#xa;");
                }
                function S(t, e, n, r) {
                  var o,
                    i,
                    a,
                    u,
                    s = n,
                    c = r,
                    l = 0,
                    f = "";
                  function m() {
                    f.length - l > v && (l = (f += "\n" + e + N).length);
                  }
                  var p = !1,
                    h = !1,
                    d = !1;
                  switch (t.nodeType) {
                    case C.DOCUMENT_NODE:
                      for (i = t.childNodes, u = 0; u < i.length; ++u) (a = i[u]), (l = f.length), (f += (0 < u ? "\n" : "") + S(a, ""));
                      break;

                    case C.DOCUMENT_FRAGMENT_NODE:
                      for (i = t.childNodes, u = 0; u < i.length; ++u) (a = i[u]), (l = f.length), (f += "\n" + S(a, ""));
                      break;

                    case C.ELEMENT_NODE:
                      (o = C.nameOfNode(t)), (f += e + "<" + o);
                      var g = "",
                        y = t.parentNode;
                      if (
                        (y && y.nodeType != C.ELEMENT_NODE && (y = null),
                        D.namespace(t).forEachItem(function (t) {
                          g = "";
                          var e = y ? y.lookupNamespaceURI(t.prefix) : "unknown";
                          e || "" !== t.prefix || (e = y.lookupNamespaceURI(null)),
                            (y && e == t.uri) ||
                              ("xml" != t.prefix &&
                                (g = "" === t.prefix ? ' xmlns="' + t.uri + '"' : " xmlns:" + t.prefix + '="' + t.uri + '"')),
                            (f += g),
                            m();
                        }),
                        C.hasNamespaceUndeclaration(t) && ((f += g = ' xmlns=""'), m()),
                        D.attribute(t).forEachItem(function (t) {
                          (g = " " + t.name + '="' + b(t.value) + '"'), (f += g), m();
                        }),
                        (f = f.replace(/\s+$/, "")),
                        0 === (i = t.childNodes).length)
                      )
                        f += "/>";
                      else {
                        for (f += ">", u = 0; u < i.length; ++u)
                          (p = (a = i[u]).nodeType == C.TEXT_NODE && "" !== a.nodeValue),
                            (f = (f += (d = p || h) ? "" : "\n") + S(a, d ? "" : e + x, s, c)),
                            (h = p);
                        d || (f += "\n" + e), (f += "</" + o + ">");
                      }
                      break;

                    case C.ATTRIBUTE_NODE:
                      (o = C.nameOfNode(t).toString()), (f += o + '="' + b(t.value) + '"');
                      break;

                    case C.TEXT_NODE:
                      f = t.nodeValue.replace(/&/g, "&amp;").replace(/</g, "&lt;");
                      break;

                    case C.COMMENT_NODE:
                      f += "\x3c!--" + t.nodeValue + "--\x3e";
                      break;

                    case C.PROCESSING_INSTRUCTION_NODE:
                      f += "<?" + t.target + " " + t.nodeValue + "?>";
                      break;

                    case C.DOCUMENT_TYPE_NODE:
                      f += "<!DOCTYPE " + t.name + ' SYSTEM "' + t.systemId + '">';
                      break;

                    case C.NAMESPACE_NODE:
                      break;

                    case C.CDATA_SECTION:
                      return t.data;

                    default:
                      throw _("Unknown node type " + t.nodeType, "SXJS0003");
                  }
                  return f;
                }
                return S(t, "", [], "");
              }
            },
            y =
              ((se = 0),
              (ce = {
                hash: function (t) {
                  return t.hashCode();
                },
                sameKey: function (t, e) {
                  function n(t) {
                    return "timezoneOffset" in t && null !== t.timezoneOffset;
                  }
                  try {
                    return (t.equals(e) || (A.itemIsNaN(t) && A.itemIsNaN(e))) && n(t) == n(e);
                  } catch (t) {
                    return !1;
                  }
                }
              }),
              (de.prototype = {
                leafKVPs: [],
                subTries: {},
                options: ce,
                containsKey: function (t) {
                  return null !== fe(this, t);
                },
                get: function (t) {
                  t = fe(this, t);
                  return null === t ? [] : t.v;
                },
                inSituPut: function (t, e) {
                  me(this, t, e, this.options.hash(t));
                },
                put: function (t, e) {
                  return pe(this, t, e, this.options.hash(t));
                },
                remove: function (t) {
                  return he(this, t, this.options.hash(t));
                },
                forAllPairs: function (t) {
                  for (var e in (this.leafKVPs.forEach(t), this.subTries))
                    this.subTries.hasOwnProperty(e) && this.subTries[e].forAllPairs(t);
                },
                display: function () {
                  function r(t, e) {
                    for (var n in (0 < e && P("Subtrie " + e),
                    t.leafKVPs.forEach(function (t) {
                      P(p(t.k) + ": " + p(t.v));
                    }),
                    t.subTries))
                      t.subTries.hasOwnProperty(n) && r(t.subTries[n], e + 1);
                  }
                  P("HashTrie:"), r(this, 0);
                },
                keys: function () {
                  var e = [];
                  return (
                    this.forAllPairs(function (t) {
                      e.push(t.k);
                    }),
                    e
                  );
                },
                conforms: function (n, r, o) {
                  var i = this;
                  return F.ForArray(i.keys()).every(function (t) {
                    var e = i.get(t);
                    return n(t) && o(e.length) && F.ForArray(e).every(r);
                  });
                }
              }),
              de);
          function le(t, e) {
            var n;
            return "" === e ? t.leafKVPs : ((n = e.charAt(0)), t.subTries.hasOwnProperty(n) ? le(t.subTries[n], e.substring(1)) : []);
          }
          function fe(t, e) {
            for (var n = le(t, t.options.hash(e)), r = 0; r < n.length; r++) if (t.options.sameKey(n[r].k, e)) return n[r];
            return null;
          }
          function me(t, e, n, r) {
            if ("" === r) {
              for (var o = 0; o < t.leafKVPs.length; o++)
                if (t.options.sameKey(t.leafKVPs[o].k, e))
                  return void (t.leafKVPs[o] = {
                    k: e,
                    v: n
                  });
              t.leafKVPs.push({
                k: e,
                v: n
              });
            } else {
              var i,
                a = r.charAt(0);
              t.subTries.hasOwnProperty(a) ? (i = t.subTries[a]) : (((i = new de(t.options)).id = se++), (t.subTries[a] = i)),
                me(i, e, n, r.substring(1));
            }
          }
          function pe(e, n, r, t) {
            var o = new de(e.options),
              i = !1;
            if ("" === t)
              (o.leafKVPs = e.leafKVPs.map(function (t) {
                return e.options.sameKey(t.k, n)
                  ? ((i = !0),
                    {
                      k: n,
                      v: r
                    })
                  : t;
              })),
                i ||
                  o.leafKVPs.push({
                    k: n,
                    v: r
                  }),
                (o.subTries = e.subTries);
            else {
              var a,
                u,
                s = t.charAt(0);
              for (a in e.subTries)
                e.subTries.hasOwnProperty(a) &&
                  (a == s ? ((o.subTries[a] = pe(e.subTries[a], n, r, t.substring(1))), (i = !0)) : (o.subTries[a] = e.subTries[a]));
              i || ((u = pe((u = new de(e.options)), n, r, t.substring(1))), (o.subTries[s] = u)), (o.leafKVPs = e.leafKVPs);
            }
            return o;
          }
          function he(e, n, t) {
            var r = new de(e.options);
            if ("" === t)
              (r.leafKVPs = e.leafKVPs.filter(function (t) {
                return !e.options.sameKey(t.k, n);
              })),
                (r.subTries = e.subTries);
            else {
              var o,
                i = t.charAt(0);
              for (o in e.subTries)
                e.subTries.hasOwnProperty(o) && (r.subTries[o] = o == i ? he(e.subTries[o], n, t.substring(1)) : e.subTries[o]);
              r.leafKVPs = e.leafKVPs;
            }
            return r;
          }
          function de(t) {
            (this.leafKVPs = []),
              (this.subTries = {}),
              (this.options = t || {
                hash: ce.hash,
                sameKey: ce.sameKey
              });
          }
          (a = C),
            ((t = {
              ancestor: function (t) {
                var e;
                switch (t.nodeType) {
                  case a.DOCUMENT_NODE:
                  case a.DOCUMENT_FRAGMENT_NODE:
                    return F.Empty;

                  case a.ATTRIBUTE_NODE:
                    return t.parent
                      ? F.Stepping(t.parent, function (t) {
                          return t.parentNode;
                        })
                      : F.Empty;

                  default:
                    return (e = t.parentNode)
                      ? F.Stepping(e, function (t) {
                          return t.parentNode;
                        })
                      : F.Empty;
                }
              },
              ancestorOrSelf: function (t) {
                return F.Join([F.Singleton(t), D.ancestor(t)]);
              },
              attribute: function (t) {
                if (t.nodeType != a.ELEMENT_NODE) return F.Empty;
                for (var e, n = t.attributes, r = [], o = 0; o < n.length; o++)
                  ("xmlns" != (e = n[o].name).substring(0, 5) || (5 != e.length && ":" != e.charAt(5))) &&
                    r.push(new ae(x.QName.fromParts(n[o].prefix, n[o].namespaceURI, n[o].localName), n[o].value, t));
                return F.ForArray(r);
              },
              child: function (t) {
                function e(t) {
                  return F.Stepping(t.firstChild, function (t) {
                    return t.nextSibling;
                  });
                }
                if (null === t) return F.Empty;
                switch (t.nodeType) {
                  case a.DOCUMENT_NODE:
                    return e(t).filter(function (t) {
                      return !((t.nodeType == a.PROCESSING_INSTRUCTION_NODE && "xml" == t.target) || t.nodeType == a.TEXT_NODE);
                    });

                  case a.DOCUMENT_FRAGMENT_NODE:
                  case a.ELEMENT_NODE:
                    return e(t);

                  default:
                    return F.Empty;
                }
              },
              descendant: function (t) {
                return D.child(t).mapOneToMany(function (t) {
                  return D.descendantOrSelf(t);
                });
              },
              descendantOrSelf: function (t) {
                return F.Join([F.Singleton(t), D.descendant(t)]);
              },
              following: function (t) {
                switch (t.nodeType) {
                  case a.DOCUMENT_NODE:
                  case a.DOCUMENT_FRAGMENT_NODE:
                    return F.Empty;

                  case a.ATTRIBUTE_NODE:
                  case a.NAMESPACE_NODE:
                    var e = a.xdmParentNode(t);
                    return null === e ? F.Empty : F.Join([D.descendant(e), D.following(e)]);

                  default:
                    return D.ancestorOrSelf(t).mapOneToMany(function (t) {
                      return D.followingSibling(t).mapOneToMany(D.descendantOrSelf);
                    });
                }
              },
              followingSibling: function (t) {
                switch (t.nodeType) {
                  case a.DOCUMENT_NODE:
                  case a.DOCUMENT_FRAGMENT_NODE:
                  case a.ATTRIBUTE_NODE:
                  case a.NAMESPACE_NODE:
                    return F.Empty;

                  default:
                    return F.Stepping(t.nextSibling, function (t) {
                      return t.nextSibling;
                    });
                }
              },
              namespace: function (e) {
                return e.nodeType == a.ELEMENT_NODE
                  ? F.ForArray(
                      a.inScopeNamespaces(e).map(function (t) {
                        return new ie(t.prefix, t.uri, e);
                      })
                    )
                  : F.Empty;
              },
              parent: function (t) {
                return F.Singleton(a.xdmParentNode(t));
              },
              preceding: function (t) {
                return D.ancestorOrSelf(t).mapOneToMany(function (t) {
                  return D.precedingSibling(t).mapOneToMany(function (t) {
                    return F.ForArray(D.descendantOrSelf(t).expand().reverse());
                  });
                });
              },
              precedingSibling: function (t) {
                switch (t.nodeType) {
                  case a.DOCUMENT_NODE:
                  case a.DOCUMENT_FRAGMENT_NODE:
                  case a.ATTRIBUTE_NODE:
                  case a.NAMESPACE_NODE:
                    return F.Empty;

                  default:
                    return F.Stepping(t.previousSibling, function (t) {
                      return t.previousSibling;
                    });
                }
              },
              self: function (t) {
                return F.Singleton(t);
              }
            })["ancestor-or-self"] = t.ancestorOrSelf),
            (t["descendant-or-self"] = t.descendantOrSelf),
            (t["following-sibling"] = t.followingSibling),
            (t["preceding-sibling"] = t.precedingSibling);
          var a,
            D = t;
          function _(t, e, n) {
            if (!(this instanceof _)) return new _(t, e, n);
            (this.name = "XError"),
              (this.message = t || "Default Message"),
              (this.code = e || "FORG0001"),
              n && this.setExpr(n),
              (this.stack = new Error().stack);
          }
          (_.prototype = Object.create(Error.prototype)),
            ((_.prototype.constructor = _).prototype.code = null),
            (_.prototype.xsltLineNr = null),
            (_.prototype.xsltModule = null),
            (_.prototype.compiledLineNr = null),
            (_.prototype.isGlobal = !1),
            (_.prototype.setExpr = function (t) {
              (this.xsltLineNr = C.getInheritedAttribute(t, "line")),
                (this.xsltModule = C.getInheritedAttribute(t, "module")),
                (this.compiledLineNr = t.lineNumber),
                null !== this.xsltLineNr && (this.message += " at " + this.xsltModule + "#" + this.xsltLineNr);
            }),
            (_.test = function (t) {
              if (t) throw _.call(this, arguments[1], arguments[2], arguments[3]);
            });
          (h = C),
            (ge = function () {}),
            (ye = {
              among: function (t, e) {
                var n = g(t, e).next();
                return v(t, e).filter(function (t) {
                  return t === n;
                });
              },
              analyzeString: function (t, e) {
                var n, r, o, i, a, u, s;
                return null === (n = d(m(t, "select"), e).next())
                  ? F.Empty
                  : ((n = n.toString()),
                    (r = d(m(t, "regex"), e).next().toString()),
                    (o = d(m(t, "flags"), e).next().toString()),
                    (i = m(t, "matching")),
                    (a = m(t, "nonMatching")),
                    (u = Te(n, r, o, !0, !1)),
                    (s = e.newContext(!1)),
                    (t = u.map(function (t) {
                      return t.string;
                    })),
                    (s.focus = F.Tracker(F.ForArray(t))),
                    s.focus.mapOneToMany(function (t) {
                      var e = u[s.focus.position - 1];
                      return e.matching
                        ? ((s.focus.regexGroups = e.groups), i ? d(i, s) : F.Empty)
                        : ((s.focus.regexGroups = []), a ? d(a, s) : F.Empty);
                    }));
              },
              and: function (t, e) {
                return F.oneBoolean(f(g(t, e)) && f(v(t, e)));
              },
              applyImports: function (t, e) {
                var n = e.currentMode.mode;
                if (!n) throw _("applyImports: no current mode", "XTDE0560", t);
                if (e.noCurrentFocus()) throw _("applyImports: no context item", "XTDE0560", t);
                var r = e.newContext(!0);
                return (
                  (r.currentComponent = e.currentMode),
                  _e(t, e, r),
                  (r.focus = F.Solo(e.getCurrentFocus())),
                  (r.focus.regexGroups = e.focus.regexGroups),
                  n.applyImports(r)
                );
              },
              applyT: function (t, e) {
                var n = e.newContext(!0);
                if (Xe(t, "c")) {
                  var r = e.currentComponent.actor.tagName,
                    r = "function" === r || "globalVariable" === r || "globalParam" === r ? e.fixed.modes[""] : e.currentMode.mode;
                  n.currentComponent = e.currentMode;
                } else {
                  var o = $e(t, e, "mode");
                  if ((r = o.mode).mustBeTyped)
                    throw _("Mode " + C.getAttribute(r._expr, "name") + " only handles typed nodes", "XTTE3100", t);
                  n.currentComponent = o;
                }
                return (
                  _e(t, e, n),
                  (n.focus = F.Tracker(g(t, e))),
                  (n.focus.regexGroups = e.focus ? e.focus.regexGroups : null),
                  r.applyTemplates(n)
                );
              },
              arith: function (t, e) {
                var n = gr[t.getAttribute("calc")];
                return n || Re("arithmetic (" + t.getAttribute("calc") + ")", t), F.Singleton(Ie(t, e, n));
              },
              arith10: function (t, e) {
                function n(t) {
                  t = t.next();
                  return null === t ? x.double.fromNumber(NaN) : x.double.cast(t);
                }
                var r = gr[t.getAttribute("calc")];
                return F.Singleton(r(n(g(t, e)), n(v(t, e))));
              },
              array: function (t, e) {
                t = h.getChildElements(t).map(function (t) {
                  return d(t, e).expand();
                });
                return F.Singleton(new sn(t));
              },
              arrayBlock: function (t, e) {
                t = h.getChildElements(t).map(function (t) {
                  return d(t, e).expand();
                });
                return F.Singleton(new sn(t));
              },
              atomic: function (t) {
                var e = t.getAttribute("val"),
                  n = t.getAttribute("type").substring(3);
                return x[n] || qe("Unknown type: " + n, t), F.Singleton(x[n].fromString(e));
              },
              atomSing: function (t, e) {
                var n,
                  e = g(t, e).mapOneToMany(Oe);
                if (!t.hasAttribute("card") && null === (e = F.LookAhead(e)).peek())
                  throw _("The " + (n = we(t.getAttribute("diag"))).required + " is empty", n.code, t);
                return e;
              },
              att: function (t, e) {
                var n = on(g(t, e));
                if (
                  null ===
                  (r = t.hasAttribute("nsuri")
                    ? ((r = t.getAttribute("name").split(":")), x.QName.fromParts(r[0], t.getAttribute("nsuri"), r[1]))
                    : h.getAttributeAsQName(t, "name"))
                )
                  throw _("Invalid attribute name " + t.getAttribute("name"), "XTDE0850", t);
                var e = e.createAttributeFromQName(r),
                  r = ((e.value = n), t.hasAttribute("flags") ? t.getAttribute("flags") : "");
                return F.Singleton(Me(e, r));
              },
              attVal: function (t, e) {
                var n = h.getAttributeAsQName(t, "name");
                if (e.noCurrentFocus()) throw _("attVal: no context item", "XPDY0002", t);
                var e = e.getCurrentFocus();
                if (h.isNode(e))
                  return e.nodeType != h.ELEMENT_NODE ||
                    null ===
                      (e =
                        "" === n.uri
                          ? e.hasAttribute(n.local)
                            ? e.getAttribute(n.local)
                            : null
                          : n.uri === ve.xml
                          ? e.hasAttribute("xml:" + n.local)
                            ? e.getAttribute("xml:" + n.local)
                            : null
                          : e.hasAttributeNS(n.uri, n.local)
                          ? e.getAttributeNS(n.uri, n.local)
                          : null)
                    ? F.Empty
                    : F.Singleton(x.untypedAtomic.fromString(e));
                throw _("Context item for 'attVal' must be a node", "XPTY0020", t);
              },
              axis: function (t, e) {
                var n = new Function("item", t.getAttribute("jsTest")),
                  r = t.getAttribute("name");
                if (e.noCurrentFocus()) throw _("Context item is absent for " + r + " axis", "XPDY0002", t);
                e = e.getCurrentFocus();
                if (h.isNode(e)) return D[r](e).filter(n);
                throw _("Context item for " + r + " axis is not a node", "XPTY0020", t);
              },
              break: function (t, e) {
                var n = new be();
                return null !== t.firstChild && (n.content = g(t, e).expand()), F.Join([F.Empty, F.Singleton(n)]);
              },
              callT: function (t, e) {
                var n = $e(t, e, "template"),
                  r = e.newContext(!0);
                return (r.currentMergeGroup = null), un((r.currentComponent = n).actor, r), _e(t, e, r), g(n.actor, r);
              },
              cast: function (e, t) {
                var t = g(e, t),
                  n = t.next(),
                  r = e.getAttribute("as");
                if (null === n) {
                  if ("?" == r.slice(-1) || "1" == e.getAttribute("emptiable")) return F.Empty;
                  throw _("Empty sequence casting to " + r, "XPTY0004", e);
                }
                if (null !== t.next()) throw _("Multiple sequence casting to " + r, "XPTY0004", e);
                try {
                  var o = ke((r = r.replace(/(\?|\*)$/, ""))),
                    i = "QName" == o.name ? ze(e, !0) : null;
                  return F.Singleton(o.cast(n, i));
                } catch (t) {
                  if (null !== t.code) throw t;
                  throw _("Failed to cast to type " + r, "XPTY0004", e);
                }
              },
              castable: function (t, e) {
                var n,
                  e = g(t, e).mapOneToMany(Oe).expand();
                if (0 === e.length) n = "1" == t.getAttribute("emptiable");
                else if (1 < e.length) n = !1;
                else
                  try {
                    var r = ke(t.getAttribute("as")),
                      o = "QName" == r.name ? ze(t, !0) : null;
                    r.cast(e[0], o), (n = !0);
                  } catch (t) {
                    n = !1;
                  }
                return F.oneBoolean(n);
              },
              cfn: function (t, e) {
                var n,
                  r = t.getAttribute("name");
                return "_format-number_1" == r
                  ? ((n = [g(t, e), F.oneString(t.getAttribute("pic"))]),
                    t.hasAttribute("format") && n.push(F.oneString(t.getAttribute("format"))),
                    Gn["format-number"](n, e, t))
                  : "_translate_1" == r
                  ? ((n = [g(t, e), F.oneString(t.getAttribute("a1")), F.oneString(t.getAttribute("a2"))]), Gn.translate(n, e))
                  : void qe("Unimplemented: cfn " + r, t);
              },
              check: function (n, t) {
                var r = n.getAttribute("card"),
                  o = {
                    "*": "zero or more",
                    "+": "one or more",
                    "?": "zero or one",
                    "\xb0": "zero",
                    1: "exactly one"
                  };
                function e(t) {
                  var e = we(n.getAttribute("diag"));
                  throw _("Required cardinality of " + e.required + " is " + o[r] + "; supplied value " + t, e.code, n);
                }
                t = g(n, t);
                if ("*" == r) return t;
                var t = F.LookAhead(t),
                  i = t.peek();
                if (null === i) {
                  if ("?" == r || "\xb0" == r) return F.Empty;
                  e("is empty");
                } else "\xb0" == r && e("is not empty (first item " + p(i) + ")");
                if ("+" == r) return t;
                t.next();
                var a = t.next();
                return (
                  null !== a && e("contains " + (t = t.count() + 2) + " items (" + p(i) + ", " + p(a) + (2 < t ? ",... )" : ")")),
                  F.Singleton(i)
                );
              },
              choose: function (t, e) {
                for (var n = h.getChildElements(t), r = 0; r < n.length; r += 2) if (f(d(n[r], e))) return d(n[r + 1], e);
                return F.Empty;
              },
              comment: function (t, e) {
                var n = g(t, e),
                  e = e.resultDocument.createComment(on(n).replace(/--/g, "- -").replace(/-$/, "- ")),
                  n = t.hasAttribute("flags") ? t.getAttribute("flags") : "";
                return F.Singleton(Me(e, n));
              },
              compareToInt: function (t, e) {
                var n = t.getAttribute("op"),
                  e = g(t, e).next();
                return null === e
                  ? F.Empty
                  : A.itemIsNaN(e)
                  ? F.oneBoolean("ne" == n)
                  : ((t = x.integer.fromString(t.getAttribute("val"))), F.oneBoolean(A.testComparison(n, e.compareTo(t))));
              },
              compAtt: function (e, n) {
                var r = e.hasAttribute("flags") ? e.getAttribute("flags") : "";
                return Fe(e, n, function (t) {
                  t = n.createAttributeFromQName(t);
                  return ((t = Me(t, r)).value = on(d(m(e, "select"), n))), t;
                });
              },
              compElem: function (r, o) {
                var i = r.hasAttribute("flags") ? r.getAttribute("flags") : "";
                return Fe(r, o, function (t, e) {
                  var n = e.split(":"),
                    e = ("" === t && 2 == n.length && (e = n[1]), o.createElement(t, e));
                  return "" !== t && h.declareNS(e, 1 == n.length ? "" : n[0], t), an(e, d(m(r, "content"), o), o), Me(e, i);
                });
              },
              condCont: function (t, e) {
                return g(t, e).filter(function (t) {
                  if (!h.isNode(t)) return ln(t) ? 0 < t.keys().length : "" !== x.string.cast(t).value;
                  switch (t.nodeType) {
                    case h.DOCUMENT_NODE:
                    case h.DOCUMENT_FRAGMENT_NODE:
                    case h.ELEMENT_NODE:
                      return t.hasChildNodes();

                    default:
                      return "" !== Ae(t).value;
                  }
                });
              },
              condSeq: function (t, n) {
                var r = [],
                  o = [],
                  i = !0;
                function a(t) {
                  if (t instanceof Node) {
                    if (t.nodeType == h.DOCUMENT_NODE || t.nodeType == h.DOCUMENT_FRAGMENT_NODE) return !t.hasChildNodes();
                    if (t.nodeType == h.TEXT_NODE) return "" === t.nodeValue;
                  } else {
                    if (t.isAtomic) return "" === x.string.cast(t).value;
                    if (cn(t))
                      return !gn(F.Singleton(t)).some(function (t) {
                        return !a(t);
                      });
                  }
                  return !1;
                }
                h.getChildElements(t).map(function (t) {
                  var e;
                  "onEmpty" == t.tagName
                    ? i && (r = d(t, n).expand())
                    : "onNonEmpty" == t.tagName
                    ? ((e = r.length),
                      o.unshift(function () {
                        r.splice.apply(r, [e, 0].concat(d(t, n).expand()));
                      }))
                    : d(t, n).forEachItem(function (t) {
                        a(t) || (i = !1), r.push(t);
                      });
                });
                return (
                  i ||
                    o.forEach(function (t) {
                      t();
                    }),
                  F.ForArray(r)
                );
              },
              conditionalSort: function (t, e) {
                return f(g(t, e)) ? v(t, e) : g(h.getChildElements(t)[1], e);
              },
              convert: function (t, e) {
                var n = ke(t.getAttribute("to"));
                return g(t, e).mapOneToOne(
                  Xe(t, "p")
                    ? function (t) {
                        return rn(t, n.name);
                      }
                    : n.cast
                );
              },
              copy: function (e, t) {
                if (t.noCurrentFocus()) throw _("copy: no context item", "XTTE0945", e);
                var n = t.getCurrentFocus(),
                  r = e.getAttribute("flags");
                return h.shallowCopy(n, t, r, function (t) {
                  return g(e, t);
                });
              },
              copyOf: function (t, e) {
                var n = t.getAttribute("flags");
                return g(t, e).mapOneToOne(function (t) {
                  return h.copyItem(t, e, n);
                });
              },
              currentGroup: function (t, e) {
                if (e && e.currentGroup) return F.ForArray(e.currentGroup);
                throw _("There is no current group", "XTDE1061", t);
              },
              currentGroupingKey: function (t, e) {
                if (e && e.currentGroupingKey) return F.ForArray(e.currentGroupingKey);
                throw _("There is no current grouping key", "XTDE1071", t);
              },
              cvUntyped: function (t, e) {
                var e = g(t, e),
                  t = t.getAttribute("to"),
                  n = ke(t).cast,
                  r = "xs:string" == t;
                return e.mapOneToOne(function (t) {
                  return x.untypedAtomic.matches(t) || (r && x.anyURI.matches(t)) ? n(t) : t;
                });
              },
              data: function (t, e) {
                return g(t, e).mapOneToMany(Oe);
              },
              dbl: function (t) {
                t = t.getAttribute("val");
                return F.Singleton(x.double.fromString(t));
              },
              dec: function (t) {
                t = t.getAttribute("val");
                return F.oneDecimal(Big(t));
              },
              doc: function (t, e) {
                (e = Ue(h.getChildElements(t)[0], e)), (t = t.hasAttribute("flags") ? t.getAttribute("flags") : "");
                return F.Singleton(Me(e, t));
              },
              docOrder: function (t, e) {
                return h.inDocumentOrder(g(t, e));
              },
              dot: function (t, e) {
                if (e.noCurrentFocus()) throw _("dot: no context item", "XPDY0002", t);
                return F.Singleton(e.getCurrentFocus());
              },
              elem: function (e, t) {
                var n,
                  r = !1,
                  o = e.getAttribute("name"),
                  i = o.split(":"),
                  a = null;
                if (
                  (e.hasAttribute("nsuri") && ((a = e.getAttribute("nsuri")), (r = !0)),
                  2 == i.length && null === a && (null === (a = e.lookupNamespaceURI(i[0])) && (a = ze(e, !0)(i[0])), (r = !0)),
                  "http://www.w3.org/2000/xmlns/" == (a = null === a ? "" : a))
                )
                  throw _("Disallowed namespace " + a, "XTDE0835", e);
                try {
                  n = t.createElement(a, o);
                } catch (t) {
                  throw _("Element name '" + o + "' is not a lexical QName", "XTDE0820", e);
                }
                if (e.hasAttribute("namespaces"))
                  for (var u = e.getAttribute("namespaces").toString().split(" "), s = 0; s < u.length; s++) {
                    var c = u[s].split("="),
                      l = c[0],
                      c = ("#" == l && (l = ""), 2 == c.length ? c[1] : ze(e, !0)(l));
                    h.declareNS(n, l, c);
                  }
                r && h.declareNS(n, 2 == i.length ? i[0] : "", a), an(n, g(e, t), t);
                o = e.hasAttribute("flags") ? e.getAttribute("flags") : "";
                return F.Singleton(Me(n, o));
              },
              empty: function () {
                return F.Empty;
              },
              emptyTextNodeRemover: function (t, e) {
                return g(t, e).filter(function (t) {
                  return !(t instanceof Node && t.nodeType == h.TEXT_NODE && "" === t.textContent);
                });
              },
              error: function (t) {
                throw _(t.getAttribute("message"), t.getAttribute("code"), t);
              },
              evaluate: function (e, n) {
                var t = {
                    language: "XSLT",
                    contextType: "item()"
                  },
                  r = d(m(e, "xpath"), n).next().toString(),
                  o = d(m(e, "cxt"), n),
                  i = new y(),
                  a =
                    (h.getChildElements(e, "withParam").forEach(function (t) {
                      i.inSituPut(x.string.fromString(t.getAttribute("name")), g(t, n).expand());
                    }),
                    d(m(e, "wp"), n)),
                  u =
                    (a &&
                      a.next().forAllPairs(function (t) {
                        if (!x.QName.matches(t.k))
                          throw _("Parameter names in xsl:evaluate/@with-params map must be QNames:" + t.k.toString(), "XTTE3165", e);
                        i.inSituPut(t.k, t.v);
                      }),
                    (i = F.Singleton(i)),
                    {}),
                  a = m(e, "sa");
                if (a) {
                  a = d(a, n).next().toString();
                  if ("true" == a || "yes" == a || "1" == a) throw _("Saxon-JS does not support schema-aware evaluation", "XTDE1665", e);
                }
                (a = e.getAttribute("as")),
                  a && (t.requiredType = a.toString()),
                  (a = e.getAttribute("dxns")),
                  null !== a && (t.xpathDefaultNamespace = a.toString()),
                  (a = m(e, "nsCxt"));
                if (a)
                  for (var s = d(a, n).next().attributes, c = 0; c < s.length; ++c) {
                    var l = s[c];
                    "xmlns" == l.prefix
                      ? (u[l.localName] = l.value)
                      : "xmlns" == l.name && ((u[""] = l.value), (t.xpathDefaultNamespace = l.value));
                  }
                else u = Le(e);
                (t.params = i), (t.namespaces = u), (t.staticTyping = !0);
                a = m(e, "baseUri");
                return a && (t.staticBaseURI = d(a, n).next().toString()), ci.XPath.evaluateXDM(r, o, i, n, u, t);
              },
              every: function (t, e) {
                var n = parseInt(t.getAttribute("slot"), 10),
                  r = g(t, e),
                  o = Ye(t);
                return F.oneBoolean(
                  !r.some(function (t) {
                    return (e.localVars[n] = [t]), !f(o(e));
                  })
                );
              },
              except: function (t, e) {
                var n = g(t, e),
                  t = v(t, e);
                return F.Difference(n, t, h.compareDocumentOrder);
              },
              false: function () {
                return F.oneBoolean(!1);
              },
              filter: function (t, e) {
                var n,
                  r,
                  o,
                  i,
                  a = g(t, e),
                  u = Ye(t);
                return Xe(t, "i")
                  ? 1 == (i = u(e).expand()).length && x.numeric.matches(i[0])
                    ? ((n = i[0].toNumber()),
                      a instanceof F.ForArray
                        ? F.Singleton(a.expand()[n - 1] || null)
                        : (r = F.Tracker(a)).filter(function () {
                            return r.position == n;
                          }))
                    : f(F.ForArray(i))
                    ? a
                    : F.Empty
                  : (((o = e.newContext(!1)).focus = F.Tracker(a)),
                    (i = Xe(t, "p")
                      ? function () {
                          var t = u(o).expand();
                          return 1 == t.length && x.numeric.matches(t[0]) ? o.focus.position == t[0].toNumber() : f(F.ForArray(t));
                        }
                      : function () {
                          return f(u(o));
                        }),
                    o.focus.filter(i));
              },
              first: function (t, e) {
                return F.Singleton(g(t, e).next());
              },
              fnRef: function (t) {
                throw _("Saxon-JS does not support higher-order functions", "XTSE3540", t);
              },
              follows: function (t, e) {
                return F.Singleton(
                  Ie(t, e, function (t, e) {
                    return x.boolean.fromBoolean(0 < h.compareDocumentOrder(t, e));
                  })
                );
              },
              for: function (t, e) {
                var n = parseInt(t.getAttribute("slot"), 10),
                  r = Ye(t);
                return g(t, e).mapOneToMany(function (t) {
                  return (e.localVars[n] = [t]), r(e);
                });
              },
              forEach: function (t, e) {
                var n = e.newContext(!1),
                  r = ((n.focus = F.Tracker(g(t, e))), (n.currentTemplate = null), Ye(t)),
                  e = function () {
                    return r(n);
                  };
                return n.focus.mapOneToMany(e);
              },
              forEachGroup: function (t, e) {
                return A.grouping(t, e);
              },
              fork: Se,
              fn: function (t, e) {
                var n = Gn[t.getAttribute("name")];
                return (
                  n || Re(t.getAttribute("name") + "()", t),
                  n(
                    h.getChildElements(t).map(function (t) {
                      return d(t, e);
                    }),
                    e,
                    t
                  )
                );
              },
              functionCall: function (t) {
                Re(t.getAttribute("name") + "()", t);
              },
              gc: A.generalComparison,
              gc10: function (t, e) {
                function n(t) {
                  return 1 == t.length && x.boolean.matches(t[0]);
                }
                function r(t) {
                  return [x.boolean.fromBoolean(f(F.ForArray(t)))];
                }
                function o(t) {
                  return F.ForArray(t).mapOneToMany(Oe).expand();
                }
                function i(t) {
                  return F.ForArray(t).mapOneToOne(x.numeric.numberFn).expand();
                }
                var a = g(t, e).expand(),
                  u = v(t, e).expand(),
                  e =
                    (n(a) ? (u = r(u)) : n(u) ? (a = r(a)) : ((a = o(a)), (u = o(u))), A.allocateCodedComparer(t.getAttribute("comp"), e)),
                  t = t.getAttribute("op");
                return "=" !== t && "!=" !== t ? ((a = i(a)), (u = i(u))) : (e = A.gc10comparer(e)), A.gc(F.ForArray(a), u, t, e);
              },
              gcEE: A.generalComparison,
              gVarRef: function (t, e) {
                var t = $e(t, e),
                  n = t.actor,
                  r = n.getAttribute("name");
                if (t.value === ge) throw (((o = _("Circularity in global variable " + r, "XTDE0640")).isGlobal = !0), o);
                if (null === t.value || void 0 === t.value) {
                  if ("globalParam" == n.tagName) {
                    var o = e.fixed.options.stylesheetParams[r];
                    if (
                      void 0 !== (o = void 0 === o && /^Q\{\}/.test(r) ? e.fixed.options.stylesheetParams[x.QName.fromEQName(r).local] : o)
                    ) {
                      null === o && (o = []);
                      var i = new Function("val", n.getAttribute("jsAcceptor")),
                        o = fn(
                          o,
                          new Function("n", n.getAttribute("jsCardCheck") + " return c(n);"),
                          i,
                          r,
                          "item()" !== n.getAttribute("type").substr(0, 6)
                        );
                      t.value = Array.isArray(o) ? o : [o];
                    } else {
                      if (Xe(n, "r")) throw _("Parameter " + r + " is required", "XTDE0050", n);
                      if (Xe(n, "i")) throw _("Parameter " + r + " cannot be empty", "XTDE0700", n);
                      0 === h.getChildElements(n).length && (t.value = []);
                    }
                  }
                  if (null === t.value || void 0 === t.value) {
                    i = e.newContext(!0);
                    (i.tempOutputState = "variable"),
                      (i.currentMode = {}),
                      (i.currentTemplate = null),
                      (i.currentComponent = t),
                      (i.focus = F.Solo(e.fixed.globalContextItem));
                    try {
                      (t.value = ge), (t.value = g(n, i).expand());
                    } catch (t) {
                      throw (t instanceof _ && x.QName.fromEQName(r).uri != ve.saxon + "generated-variable" && (t.isGlobal = !0), t);
                    }
                  }
                }
                return F.ForArray(t.value);
              },
              homCheck: function (e, t) {
                var n,
                  t = new F.LookAhead(g(e, t)),
                  r = t.peek();
                return null === r
                  ? F.Empty
                  : ((n = h.isNode(r)),
                    (r = t.filter(function (t) {
                      if (h.isNode(t) != n) throw _("Cannot mix nodes and atomic values in the result of a path expression", "XPTY0018", e);
                      return !0;
                    })),
                    n ? h.inDocumentOrder(r) : r);
              },
              ifCall: function (e, n) {
                var r,
                  t = h.getAttributeAsQName(e, "name", !1);
                if ("schedule-action" == t.local) {
                  var o = 2 == h.getChildElements(e).length,
                    i = 4 == h.getChildElements(e).length;
                  if (4 < h.getChildElements(e).length)
                    throw _(
                      "Only attributes @wait, @document and @http-request are available on ixsl:schedule-action in this version of Saxon-JS",
                      "SXJS0002",
                      e
                    );
                  var a,
                    u = g(e, n).next().toNumber(),
                    s = o ? null : v(e, n).next(),
                    i = i ? d(h.getChildElements(e)[3], n).next() : null,
                    c = null,
                    l = ((a = n.newContext(!0)).clearGrouping(), h.getChildElements(e)[o ? 1 : 2]),
                    f = $e(l, n, "template"),
                    m = f.actor;
                  return (
                    null === i &&
                      (n.noCurrentFocus() || ((a.focus = new F.Tracker(new F.Singleton(n.getCurrentFocus()))), a.focus.next()),
                      (a.currentMergeGroup = null),
                      (a.currentComponent = f),
                      (a.tempOutputState = !1),
                      un(f.actor, a),
                      _e(l, n, a)),
                    (r = function () {
                      g(m, a).expand();
                    }),
                    null !== i
                      ? ((o = function (t) {
                          (a.focus = new F.Tracker(new F.Singleton(t))),
                            a.focus.next(),
                            (a.currentMergeGroup = null),
                            (a.currentComponent = f),
                            (a.tempOutputState = !1),
                            un(f.actor, a),
                            _e(l, n, a),
                            r();
                        }),
                        (c = ci.getPlatform().makeHttpRequest(i, o, u)))
                      : null !== s
                      ? ((o = (i = s.toString().split(" ")).map(function (t) {
                          return ci.getPlatform().resolveUri(t, M.staticBaseUri(e, n));
                        })),
                        (s = ci.getPlatform().addMultipleXml(o, n.fixed.documentPool, r, u)),
                        (c = 1 === i.length ? s[o[0]] : s))
                      : 0 !== u && setTimeout(r, u),
                    c ? F.Singleton(c) : F.Empty
                  );
                }
                i = h.getChildElements(e).map(function (t, e) {
                  return d(t, n);
                });
                return dr(t.uri, t.local, i, n, e);
              },
              indexedFilter: function (t, e) {
                var n = e.newContext(!1),
                  r = ((n.focus = F.Tracker(g(t, e))), Ye(t)),
                  e = function () {
                    return f(r(n));
                  };
                return n.focus.filter(e);
              },
              indexedFilter2: function (t, e) {
                var n = m(t, "base"),
                  r = m(t, "use"),
                  o = m(t, "search"),
                  i = A.allocateCodedComparer(t.comp, e),
                  a = e.newContext(!1),
                  u = ((a.focus = F.Tracker(d(n, e))), d(o, e).expand()),
                  t = function () {
                    var t = d(r, a);
                    return A.gc(t, u, "=", i).next().toBoolean();
                  };
                return a.focus.filter(t);
              },
              indexedLookup: function (t, e) {
                return A.generalComparison(t, e, "=");
              },
              inlineFn: function (t) {
                Re("inline function", t);
              },
              instance: function (t, e) {
                var n = {
                    "*": {
                      min: 0,
                      max: 1 / 0
                    },
                    "+": {
                      min: 1,
                      max: 1 / 0
                    },
                    "?": {
                      min: 0,
                      max: 1
                    },
                    "\xb0": {
                      min: 0,
                      max: 0
                    },
                    1: {
                      min: 1,
                      max: 1
                    }
                  },
                  r = g(t, e),
                  e = t.getAttribute("of");
                if ("empty-sequence()" == e) return F.oneBoolean(null === r.next());
                for (
                  var o,
                    i = e.charAt(e.length - 1),
                    a = 0 <= "*+?\xb0".indexOf(i),
                    u = n[a ? i : "1"],
                    s = (a && (e = e.substring(0, e.length - 1)), new Function("item", t.getAttribute("jsTest"))),
                    c = 0;
                  null !== (o = r.next());

                )
                  if (++c > u.max || !s(o)) return F.oneBoolean(!1);
                return F.oneBoolean(c >= u.min);
              },
              int: function (t) {
                t = t.getAttribute("val");
                return F.Singleton(x.integer.fromString(t));
              },
              intersect: function (t, e) {
                var n = g(t, e),
                  t = v(t, e);
                return F.Intersect(n, t, h.compareDocumentOrder);
              },
              intRangeTest: function (t, e) {
                var n,
                  r,
                  o = g(t, e),
                  t = h.getChildElements(t),
                  i = d(t[1], e).next(),
                  t = d(t[2], e).next();
                return i && t
                  ? ((n = i.toNumber()),
                    (r = t.toNumber()),
                    (e = o.some(function (t) {
                      t = t.value;
                      return n <= t && t <= r;
                    })),
                    F.oneBoolean(e))
                  : F.oneBoolean(!1);
              },
              is: function (t, e) {
                return F.Singleton(
                  Ie(t, e, function (t, e) {
                    return x.boolean.fromBoolean(h.isSameNode(t, e));
                  })
                );
              },
              isLast: function (t, e) {
                return F.oneBoolean((e.focus.position == e.focus.last()) == ("1" == t.getAttribute("test")));
              },
              iterate: function (t, e) {
                h.getChildElements(h.getChildElements(t)[1]).forEach(function (t) {
                  d(t, e);
                });
                for (
                  var n = e.newContext(!1),
                    r = ((n.focus = F.Tracker(g(t, e))), (n.currentTemplate = null), m(t, "action")),
                    t = m(t, "on-completion"),
                    o = [],
                    i = !1;
                  null !== (u = n.focus.next());

                ) {
                  var a = n.newContext(!1),
                    u = ((a.focus.current = u), M.evaluate(r, a));
                  if ((Array.prototype.push.apply(o, u.expand()), o[o.length - 1] instanceof be)) {
                    u = o.pop();
                    Array.prototype.push.apply(o, u.content), (i = !0);
                    break;
                  }
                  n.localVars = a.localVars;
                }
                return i || null === t || Array.prototype.push.apply(o, M.evaluate(t, n).expand()), F.ForArray(o);
              },
              javaCall: function (t, n) {
                var e = h.getAttributeAsQName(t, "name", !1),
                  r = h.getChildElements(t).map(function (t, e) {
                    return d(t, n);
                  });
                return dr(e.uri, e.local, r, n, t);
              },
              lastOf: function (t, e) {
                var n = F.LookAhead(g(t, e));
                return n.filter(function () {
                  return null === n.peek();
                });
              },
              let: function (t, e) {
                var n = e.tempOutputState,
                  r = ((e.tempOutputState = "variable"), g(t, e).expand()),
                  n = ((e.tempOutputState = n), parseInt(t.getAttribute("slot"), 10));
                return (e.localVars[n] = r), v(t, e);
              },
              literal: Se,
              lookup: function (n, t) {
                for (
                  var e,
                    r = g(n, t),
                    t = v(n, t),
                    o = [],
                    i = t.expand(),
                    a = function (e) {
                      return function (t) {
                        if (!x.integer.matches(t))
                          throw new _("Array lookup key must be of type xs:integer; supplied value is " + p(t), "XPTY0004", n);
                        t = t.toNumber();
                        if (t < 1 || t > e.length)
                          throw new _("Array index (" + t + ") out of bounds (1 to " + e.length + ")", "FOAY0001", n);
                        o = o.concat(e[t - 1]);
                      };
                    },
                    u = function (t) {
                      o = o.concat(e.get(t));
                    };
                  null !== (e = r.next());

                )
                  if (M.isArray(e)) {
                    var s = a(e.value);
                    i.forEach(s);
                  } else {
                    if (!M.isMap(e))
                      throw new _(
                        "The source for a lookup operator (?) must be of type array() or map(); supplied value is " + p(e),
                        "XPTY0004",
                        n
                      );
                    i.forEach(u);
                  }
                return F.ForArray(o);
              },
              lookupAll: function (t, e) {
                for (
                  var n,
                    r = g(t, e),
                    o = [],
                    i = function (t) {
                      o = o.concat(n.get(t));
                    },
                    a = function (t) {
                      o = o.concat(t);
                    };
                  null !== (n = r.next());

                )
                  if (M.isArray(n)) n.value.forEach(a);
                  else {
                    if (!M.isMap(n))
                      throw new _(
                        "The source for a lookup operator ('?') must be of type array() or map(); supplied value is " + p(n),
                        "XPTY0004",
                        t
                      );
                    n.keys().forEach(i);
                  }
                return F.ForArray(o);
              },
              map: function (t, e) {
                var n = new y(),
                  r = null;
                return (
                  h.getChildElements(t).forEach(function (t) {
                    r = null === r ? d(t, e).next() : (n.inSituPut(r, d(t, e).expand()), null);
                  }),
                  F.Singleton(n)
                );
              },
              merge: function (t, e) {
                return Fo.merge(t, e);
              },
              mergeAdj: function (t, e) {
                function n(t) {
                  return t instanceof Node && t.nodeType == h.TEXT_NODE;
                }
                for (var r, o = [], i = g(t, e), a = !1; null !== (r = i.next()); ) {
                  var u = n(r);
                  (u && "" === r.nodeValue) ||
                    (a && u ? o.push(e.resultDocument.createTextNode(o.pop().nodeValue + r.nodeValue)) : ((a = u), o.push(r)));
                }
                return F.ForArray(o);
              },
              message: function (t, e) {
                var n = "",
                  r = e.tempOutputState,
                  o =
                    ((e.tempOutputState = "variable"),
                    g(t, e)
                      .mapOneToMany(Oe)
                      .forEachItem(function (t) {
                        n += " " + t.toString();
                      }),
                    d(m(t, "terminate"), e).next()),
                  i = d(m(t, "error"), e).next();
                if ("yes" == o || "true" == o || "1" == o) throw _("Terminated with " + n, i.toString(), t);
                if ("no" != o && "false" != o && "0" != o)
                  throw _("The terminate attribute of xsl:message must be yes|no|true|false|1|0", "XTDE0030", t);
                return e.fixed.options.deliverMessage && e.fixed.options.deliverMessage(n), (e.tempOutputState = r), F.Empty;
              },
              minus: function (t, e) {
                return g(t, e).mapOneToOne(function (t) {
                  return t.negate();
                });
              },
              namespace: function (t, e) {
                var n = g(t, e).next().toString(),
                  e = v(t, e).next().toString();
                if ("" !== n && !N.isNCName(n)) throw _("Prefix " + n + " is not an NCName", "XTDE0920", t);
                if ("" === e) throw _("Namespace is zero-length", "XTDE0930", t);
                if ("xmlns" == n || "http://www.w3.org/2000/xmlns/" == e) throw _("Disallowed prefix/namespace " + e, "XTDE0835", t);
                return F.Singleton(new ie(n, e));
              },
              nextIteration: function (t, e) {
                var n,
                  t = h.getChildElements(t, "withParam"),
                  r = [];
                for (n in (t.forEach(function (t) {
                  (n = parseInt(t.getAttribute("slot"), 10)), (r[n] = g(t, e).expand());
                }),
                r))
                  e.localVars[n] = r[n];
                return F.Empty;
              },
              nextMatch: function (t, e) {
                var n = e.currentMode.mode;
                if (!n) throw _("next-match: no current mode", "XTDE0560", t);
                if (!e.currentTemplate) throw _("next-match: no current template", "XTDE0560", t);
                if (e.noCurrentFocus()) throw _("next-match: no context item", "XTDE0560", t);
                var r = e.newContext(!0);
                return (r.currentComponent = e.currentMode), _e(t, e, r), n.nextMatch(r);
              },
              nodeNum: function (t, e) {
                return E.nodeNum(t, e);
              },
              numSeqFmt: function (t, e) {
                return E.numSeqFmt(t, e);
              },
              onEmpty: Se,
              onNonEmpty: Se,
              or: function (t, e) {
                return F.oneBoolean(f(g(t, e)) || f(v(t, e)));
              },
              param: function (e, t) {
                var n = h.getAttributeAsEQName(e, "name"),
                  r = parseInt(e.getAttribute("slot"), 10),
                  o = (Xe(e, "t") ? t.tunnelParams : t.localParams)[n];
                if (!o) {
                  var i = m(e, "select");
                  if (!i || Xe(e, "r")) throw _("Required parameter $" + n + " not supplied", "XTDE0700", e);
                  var a = t.tempOutputState;
                  (t.tempOutputState = "xsl:param"), (o = d(i, t).expand()), (t.tempOutputState = a);
                }
                if (!Array.isArray(o)) throw _("Param value of $" + n + " is not an array", "SXJS0004", e);
                t.localVars[r] = o;
                i = m(e, "conversion");
                if (null !== i)
                  try {
                    t.localVars[r] = d(i, t).expand();
                  } catch (t) {
                    throw _("Supplied value for parameter $" + n + " could not be converted to required type", "XTTE0590", e);
                  }
                return F.Empty;
              },
              precedes: function (t, e) {
                return F.Singleton(
                  Ie(t, e, function (t, e) {
                    return x.boolean.fromBoolean(h.compareDocumentOrder(t, e) < 0);
                  })
                );
              },
              procInst: function (t, e) {
                var n = g(t, e).next().value,
                  t = v(t, e),
                  e = e.resultDocument.createProcessingInstruction(n, on(t).replace(/\?>/g, "? >").replace(/^\s+/, ""));
                return F.Singleton(e);
              },
              qName: function (t) {
                var e = t.getAttribute("pre"),
                  n = t.getAttribute("uri"),
                  t = t.getAttribute("loc");
                return F.Singleton(x.QName.fromParts(e, n, t));
              },
              range: function (t) {
                return De(x.integer.fromString(t.getAttribute("from")), x.integer.fromString(t.getAttribute("to")));
              },
              resultDoc: function (t, e) {
                if (e.tempOutputState) throw _("Cannot call xsl:result-document while evaluating " + e.tempOutputState, "XTDE1480", t);
                var n = m(t, "href"),
                  n = null === n ? "" : d(n, e).next().toString(),
                  r = !1,
                  o = !1,
                  i =
                    (t
                      .getAttribute("local")
                      .split(/\r?\n/)
                      .forEach(function (t) {
                        /^method=/.test(t) &&
                          /interactiveXSLT\}/.test(t) &&
                          ((r = /interactiveXSLT\}replace-content$/.test(t)) || /interactiveXSLT\}append-content$/.test(t) || (o = t));
                      }),
                    m(t, "Q{}method")),
                  a =
                    (i &&
                      ((a = Je(i, (i = d(i, e).next().toString()), !1)).uri === ve.ixsl && "replace-content" === a.local
                        ? (r = !0)
                        : (a.uri === ve.ixsl && "append-content" === a.local) || (o = i)),
                    "#" == n.charAt(0) || "?." == n),
                  i = Ue(m(t, "content"), e, a),
                  u = function (t, e) {
                    D.child(t).forEachItem(function (t) {
                      e.appendChild(t);
                    });
                  };
                if ("" === n) return F.Singleton(i);
                if (a)
                  (a = "?." === n ? e.getCurrentFocus() : window.document.getElementById(n.substring(1)))
                    ? "?." === n && a.ownerDocument !== window.document
                      ? P("Result document href=" + n + ": current node is not in HTML page", 1)
                      : (o && P("Result document method not recognized (defaulting to append-content): " + o, 1),
                        r && (a.innerHTML = ""),
                        u(i, a),
                        (window.document._saxonIndexes = {}))
                    : P("Result document href=" + n + ": no such node", 1);
                else {
                  if (e.fixed.resultDocUris[n]) throw _("A result document with URI " + n + " has already been created", "XTDE1490", t);
                  (e.fixed.resultDocUris[n] = !0), e.fixed.options.deliverResultDocument(n, i);
                }
                return F.Empty;
              },
              root: function (t, e) {
                if (e.noCurrentFocus()) throw _("Focus is absent", "XPDY0002", t);
                e = e.getCurrentFocus();
                if (!h.isNode(e)) throw _("Context item for '/' must be a node", "XPTY0020", t);
                var n = h.ownerDocument(e);
                if (n.nodeType != h.DOCUMENT_NODE && n.nodeType != h.DOCUMENT_FRAGMENT_NODE)
                  throw _("Root node for '/' must be a document node", "XPDY0050", t);
                return F.Singleton(h.ownerDocument(e));
              },
              sequence: Se,
              slash: function (t, e) {
                var n = e.newContext(!1),
                  r = ((n.focus = F.Tracker(g(t, e))), Ye(t)),
                  e = function () {
                    return r(n);
                  };
                return n.focus.mapOneToMany(e);
              },
              some: function (t, e) {
                var n = parseInt(t.getAttribute("slot"), 10),
                  r = g(t, e),
                  o = Ye(t);
                return F.oneBoolean(
                  r.some(function (t) {
                    return (e.localVars[n] = [t]), f(o(e));
                  })
                );
              },
              sort: A.sortSequence,
              str: function (t) {
                t = t.getAttribute("val");
                return F.oneString(t);
              },
              subscript: function (t, e) {
                var n = g(t, e),
                  r = v(t, e).next().value;
                return n instanceof F.ForArray
                  ? ((t = n.expand()[r - 1]), F.Singleton((t = void 0 === t ? null : t)))
                  : ((e = n
                      .mapOneToOne(function (t, e) {
                        return e + 1 == r ? t : null;
                      })
                      .next()),
                    F.Singleton(e));
              },
              supplied: function (t, e) {
                (t = parseInt(t.getAttribute("slot"), 10)), (e = e.localVars[t]);
                return F.ForArray(e);
              },
              switch: function (t, e) {
                var n = e.fixed.options.saxonVersion;
                if (
                  (n && "9.7.0" == n.substring(0, 5) && parseInt(n.split(".")[3], 10) < 15 && Be("9.7.0.15", t),
                  null === (r = g(t, e).next()))
                )
                  return F.oneBoolean(!1);
                for (var r = x.base64Binary.cast(r), o = h.getChildElements(t, "case"), i = 0; i < o.length; i++)
                  if (g(o[i], e).next().equals(r)) return v(o[i], e);
                return d(m(t, "default"), e);
              },
              tail: function (t, e) {
                var n = parseInt(t.getAttribute("start"), 10) - 1;
                return g(t, e).filter(function (t) {
                  return n-- <= 0;
                });
              },
              tailCallLoop: function (t, e) {
                return g(t, e);
              },
              to: function (t, e) {
                var n = g(t, e).next(),
                  t = v(t, e).next();
                return null === n || null === t || 0 < n.compareTo(t) ? F.Empty : De(n, t);
              },
              treat: function (n, t) {
                var r = new Function("item", n.getAttribute("jsTest"));
                return g(n, t).mapOneToOne(function (t) {
                  var e;
                  if (r(t)) return t;
                  throw _(
                    "Required item type of " +
                      (e = we(n.getAttribute("diag"))).required +
                      " is " +
                      n.getAttribute("as") +
                      "; supplied value is " +
                      p(t),
                    e.code,
                    n
                  );
                });
              },
              true: function () {
                return F.oneBoolean(!0);
              },
              try: function (e, n) {
                try {
                  return F.ForArray(g(e, n).expand());
                } catch (t) {
                  if (t instanceof _ && !t.isGlobal) {
                    null === (n.currentError = t).compiledLineNr && t.setExpr(e);
                    for (
                      var r,
                        o = x.QName.fromParts("", "http://www.w3.org/2005/xqt-errors", t.code),
                        i = F.ForArray(h.getChildElements(e, "catch"));
                      null !== (r = i.next());

                    )
                      if (new Function("q", "return " + r.getAttribute("test") + ";")(o)) return g(r, n);
                  } else t instanceof _ || (Error.dumpStack && Error.dumpStack());
                  throw t;
                }
              },
              ufCall: function (t, e) {
                var n = $e(t, e, "function"),
                  r = n.actor,
                  t = h.getChildElements(t),
                  o = e.newContext(!0);
                return (
                  (o.currentComponent = n),
                  o.clearGrouping(),
                  (o.tempOutputState = "function"),
                  (o.currentMode = {}),
                  (o.currentTemplate = null),
                  (o.focus = null),
                  (o.localVars = t.map(function (t) {
                    return d(t, e).expand();
                  })),
                  (o.localParams = {}),
                  d(m(r, "body"), o)
                );
              },
              union: function (t, e) {
                var n = g(t, e),
                  t = v(t, e);
                return F.Union(n, t, h.compareDocumentOrder);
              },
              useAS: function (t, e) {
                var t = $e(t, e, "attributeSet"),
                  n = t.actor,
                  e = e.newContext(!0);
                return (e.tempOutputState = "attribute set"), (e.currentComponent = t), g(n, e);
              },
              valueOf: function (t, e) {
                var n = g(t, e),
                  e = e.resultDocument.createTextNode(on(n)),
                  n = t.hasAttribute("flags") ? t.getAttribute("flags") : "";
                return F.Singleton(Me(e, n));
              },
              varRef: function (t, e) {
                (t = parseInt(t.getAttribute("slot"), 10)), (e = e.localVars[t]);
                return F.ForArray(e);
              },
              vc: function (t, e) {
                function n(t) {
                  return null === t ? null : x.untypedAtomic.matches(t) ? x.string.cast(t) : t;
                }
                var r = t.getAttribute("op"),
                  o = t.getAttribute("onEmpty"),
                  i = g(t, e),
                  a = v(t, e),
                  u = n(i.next()),
                  s = n(a.next());
                if (null === u || null === s) return o ? F.oneBoolean("1" == o) : F.Empty;
                if (null !== i.next() || null !== a.next()) throw _("Value comparison only applicable to single values", "XPTY0004", t);
                return (x.isSubtype(u.type, "numeric") && isNaN(u.value)) || (x.isSubtype(s.type, "numeric") && isNaN(s.value))
                  ? F.oneBoolean("ne" == r)
                  : ((o = A.allocateCodedComparer(t.getAttribute("comp"), e)),
                    "=" == r || "eq" == r || "!=" == r || "ne" == r
                      ? F.oneBoolean(A.testEquality(r, o.equals(u, s)))
                      : F.oneBoolean(A.testComparison(r, o.compare(u, s))));
              },
              xslNumber: function (t, e) {
                return E.xslNumber(t, e);
              }
            }),
            (ve = {
              xsl: "http://www.w3.org/1999/XSL/Transform",
              fn: "http://www.w3.org/2005/xpath-functions",
              math: "http://www.w3.org/2005/xpath-functions/math",
              map: "http://www.w3.org/2005/xpath-functions/map",
              array: "http://www.w3.org/2005/xpath-functions/array",
              xml: "http://www.w3.org/XML/1998/namespace",
              xs: "http://www.w3.org/2001/XMLSchema",
              xsi: "http://www.w3.org/2001/XMLSchema-instance",
              err: "http://www.w3.org/2005/xqt-errors",
              ixsl: "http://saxonica.com/ns/interactiveXSLT",
              js: "http://saxonica.com/ns/globalJS",
              saxon: "http://saxon.sf.net/"
            }),
            (d = function (t, e) {
              return (10 == ci.getLogLevel() ? Ke : Ve)(t, e);
            }),
            (xe = 0),
            (Ne = "                       "),
            (sn.prototype = {
              value: [],
              get: function (t) {
                if ("number" != typeof t) throw _("Array subscript is not numeric", "XPTY0004");
                if (t < 1 || t >= this.value.length)
                  throw _("Array index (" + t + ") out of bounds (1 to " + this.value.length + ")", "FOAY0001");
                return this.value[t - 1];
              }
            }),
            (mn.prototype = {
              value: null,
              containsKey: function (t) {
                return void 0 !== this.value[t];
              },
              get: function (t) {
                t = hn(this.value[t]);
                return Array.isArray(t) ? t : [t];
              },
              inSituPut: function (t, e) {
                throw _("inSituPut() not allowed for JSValue", "SXJS0005");
              },
              put: function (t, e) {
                throw _("put() not allowed for JSValue", "SXJS0005");
              },
              remove: function (t) {
                throw _("remove() not allowed for JSValue", "SXJS0005");
              },
              keys: function () {
                throw _("keys() not allowed for JSValue", "SXJS0005");
              },
              forAllPairs: function (t) {
                throw _("forEach() not allowed for JSValue", "SXJS0005");
              },
              conforms: function (t, e, n) {
                throw _("conforms() not allowed for JSValue", "SXJS0005");
              }
            }),
            (pn.prototype = {
              value: null
            });
          var h,
            ge,
            ye,
            ve,
            d,
            xe,
            Ne,
            M = {
              analyze: Te,
              argRole: m,
              atomize: Oe,
              checkTemplateFocus: un,
              codepointsToString: en,
              convertFromJS: hn,
              convertToJS: dn,
              declaringPackage: Qe,
              ebv: f,
              evalChild1: g,
              evalChild2: v,
              evaluate: d,
              evaluateIfPresent: We,
              flatten: gn,
              getSourceLoc: Ge,
              hasFlag: Xe,
              internalError: qe,
              isArray: cn,
              isAstral: tn,
              isMap: ln,
              JSValue: mn,
              makeComplexContent: an,
              markLocal: Me,
              notImplemented: Re,
              promote: rn,
              roleDiagnostic: we,
              serialize: yn,
              staticBaseUri: Pe,
              stringToCodepoints: nn,
              stylesheetResolver: ze,
              untypedToDouble: Ce,
              wsCollapse: Ee,
              XdmArray: sn,
              XDMValue: pn,
              KNOWN_URI: ve
            };
          function be() {}
          function Se(t, e) {
            t = h.getChildElements(t);
            return F.Block(t, e);
          }
          function we(t) {
            var t = t.split("|"),
              e = t[0],
              n = t[1],
              r = "" === t[2] ? "XPTY0004" : t[2],
              o = t[3],
              i = [
                "ancestor",
                "ancestor-or-self",
                "attribute",
                "child",
                "descendant",
                "descendant-or-self",
                "following",
                "following-sibling",
                "namespace",
                "parent",
                "preceding",
                "preceding-sibling",
                "self",
                "preceding-or-ancestor"
              ],
              a = function (t) {
                switch (t) {
                  case 1:
                    return "first";

                  case 2:
                    return "second";

                  case 3:
                    return "third";

                  default:
                    return t + "th";
                }
              };
            return {
              required: (function () {
                switch (parseInt(e, 10)) {
                  case 0:
                    return a(+n + 1) + " argument of " + ("" === o ? "anonymous function" : o + "()");

                  case 1:
                    return a(+n + 1) + " operand of '" + o + "'";

                  case 9:
                    return "operand of '-'";

                  case 2:
                    return "value in '" + o + "' expression";

                  case 3:
                    return "saxon:context-item" == o ? "context item" : "value of variable $" + o;

                  case 4:
                    var t = o.split("/");
                    return "@" + t[1] + " attribute of " + ("LRE" == t[0] ? "a literal result element" : t[0]);

                  case 5:
                    return "result of call to " + ("" === o ? "anonymous function" : "function " + o);

                  case 7:
                    return "result of template " + o;

                  case 6:
                    return a(+n + 1) + " sort key";

                  case 8:
                    return "value of parameter $" + o;

                  case 11:
                    return "value of the grouping key";

                  case 12:
                    return "result of evaluate()";

                  case 13:
                    return "the context item";

                  case 14:
                    return "the context item for the " + i[n] + " axis";

                  case 15:
                    return "the value of the " + o + " option";

                  case 17:
                    return "document-order sorter";

                  default:
                    return "";
                }
              })(),
              code: r
            };
          }
          function Te(t, e, n, r, o) {
            if (!n.match(/^[smijxq]*$/)) throw _("Illegal flags for regular expression: " + n, "FORX0001");
            var i = N.prepareRegex(e, n + "g", t);
            if (!r && i.test("")) throw _("Regular expression matches zero-length string", "FORX0003");
            for (var a, u = [], s = 0, c = 0; null !== (a = i.exec(t)); )
              if (
                ((a.index > s || (a.index == s && o)) &&
                  u.push({
                    matching: !1,
                    string: x.string.fromString(t.substring(s, a.index))
                  }),
                u.push({
                  matching: !0,
                  groups: a,
                  string: x.string.fromString(a[0])
                }),
                (s = i.lastIndex),
                0 === a[0].length && i.lastIndex++,
                1e3 < c++)
              )
                throw _("looping???", "SXJS0004");
            return (
              t.length > s &&
                u.push({
                  matching: !1,
                  string: x.string.fromString(t.substring(s, t.length))
                }),
              u
            );
          }
          function Ee(t) {
            return t.replace(/[ \n\r\t]+/g, " ").replace(/^[ ]|[ ]$/g, "");
          }
          function Oe(t) {
            if (h.isNode(t)) return F.Singleton(Ae(t));
            if (cn(t))
              return F.Join(
                t.value.map(function (t) {
                  return F.ForArray(t);
                })
              ).mapOneToMany(Oe);
            if (ln(t)) throw _("Cannot atomize a map", "FOTY0013");
            return F.Singleton(t);
          }
          function Ae(t) {
            var e = x.string.fromString,
              n = x.untypedAtomic.fromString;
            switch (t.nodeType) {
              case h.DOCUMENT_NODE:
                return n(t.documentElement.textContent);

              case h.DOCUMENT_FRAGMENT_NODE:
              case h.ELEMENT_NODE:
              case h.TEXT_NODE:
                return n(t.textContent || "");

              case h.ATTRIBUTE_NODE:
                return n(t.value);

              case h.COMMENT_NODE:
                return e(t.textContent);

              case h.PROCESSING_INSTRUCTION_NODE:
                return e(t.data);

              case h.NAMESPACE_NODE:
                return e(t.uri);

              default:
                throw _("Unknown node type " + t.nodeType, "SXJS0003");
            }
          }
          function f(t) {
            var e,
              n = t.next();
            function r(t) {
              throw _("Effective boolean value is not defined for " + t, "FORG0006");
            }
            function o() {
              if (null === t.next()) return !0;
              r("an atomic sequence of length > 1");
            }
            return (
              null !== n &&
              (!!h.isNode(n) ||
                (x.boolean.matches(n)
                  ? o() && n.toBoolean()
                  : x.numeric.matches(n)
                  ? ((e = n.toNumber()), o() && !isNaN(e) && 0 !== e)
                  : x.string.matches(n) || x.untypedAtomic.matches(n) || x.anyURI.matches(n)
                  ? o() && 0 !== n.toString().length
                  : void r("type " + n.type)))
            );
          }
          function Ce(t) {
            return "untypedAtomic" === t.type ? x.double.cast(t) : t;
          }
          function De(t, e) {
            var n = gr["i+i"],
              r = x.integer.fromNumber(1);
            return F.Stepping(t, function (t) {
              t = n(t, r);
              return 0 < t.compareTo(e) ? null : t;
            });
          }
          function _e(t, r, e) {
            var n,
              t = h.getChildElements(t, "withParam"),
              o = [{}, {}];
            for (n in r.tunnelParams) r.tunnelParams.hasOwnProperty(n) && (o[1][n] = r.tunnelParams[n]);
            var i = r.tempOutputState;
            (r.tempOutputState = "template parameter"),
              t.forEach(function (t) {
                var e = h.getAttributeAsEQName(t, "name"),
                  n = Xe(t, "t") ? 1 : 0;
                o[n][e] = g(t, r).expand();
              }),
              (r.tempOutputState = i),
              (e.localParams = o[0]),
              (e.tunnelParams = o[1]);
          }
          function Me(t, e) {
            return e && 0 <= e.indexOf("l") && (t._saxonIsLocal = !0), t;
          }
          function Fe(e, t, n) {
            var r,
              o,
              i = "compAtt" == e.tagName,
              a = N.trim(d(m(e, "name"), t).next().toString()),
              u = m(e, "namespace");
            function s() {
              throw new _((i ? "Attribute" : "Element") + " name '" + a + "' is not a lexical QName", i ? "XTDE0850" : "XTDE0820", e);
            }
            if (null === u) {
              if (i && "xmlns" == a) throw _("Attribute must not be named xmlns", "XTDE0855", e);
              try {
                o = Je(e, a, !i);
              } catch (t) {
                if (t instanceof _) {
                  if ("XTDE0290" === t.code)
                    throw new _((i ? "Attribute" : "Element") + " name '" + a + "' has an unbound prefix", i ? "XTDE0860" : "XTDE0830", e);
                  "FORG0001" === t.code && s();
                }
                throw t;
              }
              r = o.uri;
            } else if (((r = d(u, t).next().value), i))
              if ("" === r && a.includes(":")) (a = a.replace(/^.*:/, "")), (o = x.QName.fromParts("", r, a));
              else if (a.includes(":")) {
                u = a.split(":");
                if ("" === u[0] || "" === u[1])
                  throw _((i ? "Attribute" : "Element") + " name '" + a + "' is not a lexical QName", i ? "XTDE0850" : "XTDE0820", e);
                o = x.QName.fromParts(u[0], r, u[1]);
              } else o = x.QName.fromParts("", r, a);
            if ("http://www.w3.org/2000/xmlns/" === r) throw new _("Disallowed namespace " + r, i ? "XTDE0865" : "XTDE0835", e);
            return i ? F.Singleton(n(o)) : F.Singleton(n(r, a));
          }
          function Ie(t, e, n) {
            var r = g(t, e).next(),
              t = v(t, e).next();
            return null === r || null === t ? null : n(r, t);
          }
          function ke(t) {
            if ("xs:" != t.substring(0, 3)) throw _("Unknown type " + t, "SXJS0003");
            var e = x[t.substring(3)];
            if (e) return e;
            throw _("Unimplemented type " + t, "SXJS0002");
          }
          function Pe(t, e) {
            if (null !== e.fixed.staticBaseURI) return e.fixed.staticBaseURI;
            for (var n = t; ; ) {
              if (n.hasAttribute("baseUri")) return n.getAttribute("baseUri");
              if (null === (n = h.xdmParentNode(n)) || n.nodeType != h.ELEMENT_NODE) return null;
            }
          }
          function Ue(t, e, n) {
            var r = e.resultDocument.createDocumentFragment(),
              r = h.obtainDocumentNumber(r),
              e = ((r._saxonBaseUri = Pe(t, e)), e.newContext(!1));
            return n && (e.resultDocument = window.document), an(r, d(t, e), e), r;
          }
          function Re(t, e) {
            throw _("The " + t + " construct is not implemented in Saxon-JS", "SXJS0002", e);
          }
          function Be(t, e) {
            throw _("The SEF is out of date, regenerate using Saxon-EE " + t + " or later", "SXJS0002", e);
          }
          function g(t, e) {
            var n = h.getChildElements(t)[0];
            if (n) return d(n, e);
            throw _("Expr has no children", "SXJS0004", t);
          }
          function v(t, e) {
            return d(h.getChildElements(t)[1], e);
          }
          function m(t, e) {
            for (var n = t.childNodes, r = 0; r < n.length; r++) {
              var o = n[r];
              if (o.nodeType == h.ELEMENT_NODE && o.getAttribute("role") == e) return o;
            }
            return null;
          }
          function Xe(t, e) {
            return t.hasAttribute("flags") && 0 <= t.getAttribute("flags").indexOf(e);
          }
          function Le(t) {
            var e = {},
              t = h.getInheritedAttribute(t, "ns");
            if (null !== t)
              for (var n = t.split(" "), r = 0; r < n.length; r++) {
                var o = n[r].split("=");
                "~" == o[1] ? (e[o[0]] = ve[o[0]]) : (e[o[0]] = o[1]);
              }
            return e;
          }
          function ze(t, n) {
            var r = Le(t);
            return function (t) {
              if ("" === t && !n) return "";
              var e = r[t];
              if (e) return e;
              if ("" === t) return "";
              throw _("Undeclared prefix: " + t, "XTDE0290");
            };
          }
          function Je(t, e, n) {
            return x.QName.fromString(e, ze(t, n));
          }
          function Ge(t) {
            if (void 0 !== t) return je(t, "module", 20) + "#" + je(t, "line", 10);
          }
          function je(t, e, n) {
            var r;
            if (null !== t && 0 < n) return null !== (r = h.getAttribute(t, e)) && "" !== r ? r : je(t.parentNode, e, n - 1);
          }
          function qe(t) {
            throw (Error.dumpStack && Error.dumpStack(), _("Internal error: " + t, "SXJS0004"));
          }
          function $e(t, e, n) {
            var r,
              o,
              i = t.getAttribute("bSlot");
            if (
              (i
                ? ((i = parseInt(i)), (o = e.currentComponent.bindings[i]), (r = e.fixed.components[o]))
                : (o = t.getAttribute("coId"))
                ? (r = e.fixed.components[parseInt(o)])
                : qe("No binding slot or component Id for component"),
              r || qe("Target component not found"),
              "ABSENT" === r.visibility)
            )
              throw _("Cannot invoke absent component " + r.actor.tagName + " " + r.actor.getAttribute("name"), "XTDE3052");
            return n && r.actor.tagName != n && qe("Expected " + n + ", found " + r.actor.tagName), r;
          }
          function Qe(t, e) {
            for (var n = t.parentNode; "package" != n.tagName; ) n = n.parentNode;
            return e.fixed.packages[n.getAttribute("name")];
          }
          function Ke(t, e) {
            e || qe("No context supplied!"), xe++, Ne.length < xe && (Ne += Ne);
            var n = t.hasAttribute("name") ? " name='" + t.getAttribute("name") + "'" : "",
              n =
                (P(
                  Ne.substring(0, xe) +
                    "<" +
                    t.tagName +
                    " line='" +
                    h.getInheritedAttribute(t, "line") +
                    "'" +
                    n +
                    " focus='" +
                    (e.noCurrentFocus() ? "absent" : p(e.getCurrentFocus())) +
                    "'>"
                ),
                Ve(t, e));
            return (
              ("object" == typeof n && "next" in n) || qe("Result of " + t.tagName + " is not an iterator"),
              P(Ne.substring(0, xe) + "</" + t.tagName + ">"),
              xe--,
              n
            );
          }
          function Ve(e, n) {
            var t = ye[e.tagName];
            t || qe("Unknown expr: " + e.tagName);
            try {
              return t(e, n);
            } catch (t) {
              throw (
                (t instanceof _ && null === (n.currentError = t).compiledLineNr && null === t.xsltLineNr && (t.setExpr(e), t.xsltLineNr), t)
              );
            }
          }
          function He(n) {
            var t = ye[n.tagName];
            return (
              t || qe("Unknown expr: " + n.tagName),
              function (e) {
                try {
                  return t(n, e);
                } catch (t) {
                  throw (t instanceof _ && null === (e.currentError = t).compiledLineNr && t.setExpr(n), t);
                }
              }
            );
          }
          function Ye(t) {
            return He(h.getChildElements(t)[1]);
          }
          function We(t, e) {
            return null === t ? F.Empty : d(t, e);
          }
          function Ze(t) {
            if (t < 1 || (55295 < t && t < 57344) || (65533 < t && t < 65536) || 1114111 < t)
              throw _("Invalid XML character 0x" + t.toString(16), "FOCH0001");
          }
          function tn(t) {
            for (var e = 0; e < t.length; e++) {
              var n = t.charCodeAt(e);
              if (55296 <= n && n <= 56319) return !0;
            }
            return !1;
          }
          function en(t) {
            var e = "";
            return (
              t.forEach(function (t) {
                return (
                  Ze(t),
                  (e +=
                    t < 65536
                      ? String.fromCharCode(t)
                      : String.fromCharCode(55296 + ((t - 65536) >> 10)) + String.fromCharCode(56320 + ((t - 65536) & 1023)))
                );
              }),
              e
            );
          }
          function nn(t) {
            for (var e = [], n = 0; n < t.length; n++) {
              var r = t.charCodeAt(n);
              e.push(55296 <= r && r <= 56319 ? 1024 * (r - 55296) + (t.charCodeAt(++n) - 56320) + 65536 : r);
            }
            return e;
          }
          function rn(t, e) {
            function n(t, e) {
              return x.decimal.matches(t)
                ? "decimal" == e || "float" == e || "double" == e
                : !!x.float.matches(t) && ("float" == e || "double" == e);
            }
            if (x[e].matches(t)) return t;
            if (n(t, e)) return x[e].cast(t);
            throw _("Incompatible operands: " + t.type + " and " + e, "XPTY0004");
          }
          function on(t) {
            var e = "";
            return (
              t.forEachItem(function (t) {
                "" !== e && (e += " "), (e += t.toString());
              }),
              e
            );
          }
          function an(r, t, s) {
            s || qe("No context in makeComplexContent for " + p(r));
            var c = !1,
              l = !1;
            function f(t, e) {
              function n(t) {
                return t instanceof ie ? "a namespace" : "an attribute";
              }
              if (e) throw _("Cannot create " + n(t) + " node after creating children", "XTDE0410");
              if (r.nodeType == h.DOCUMENT_FRAGMENT_NODE || r.nodeType == h.DOCUMENT_NODE)
                throw _("Cannot add " + n(t) + " to a document node", "XTDE0410");
            }
            function m(e, t) {
              var n = t._saxonIsLocal || !1;
              if (cn(t))
                t.value.forEach(function (t) {
                  t.forEach(function (t) {
                    m(e, t);
                  });
                });
              else {
                if (ln(t)) throw _("A map can't be a child of an XML node", "XPTY0004");
                if (
                  (h.isNode(t)
                    ? ((l = !1), t.nodeType, h.TEXT_NODE)
                    : ((t = s.resultDocument.createTextNode((l ? " " : "") + t.toString())), (l = !0)),
                  e.nodeType == h.ELEMENT_NODE || e.nodeType == h.DOCUMENT_FRAGMENT_NODE)
                )
                  if (h.isNSNode(t))
                    if (ci.getPlatform().inBrowser && e instanceof HTMLElement) e.appendChild(e.ownerDocument.importNode(t, !0));
                    else {
                      if ((f(t, c), t.prefix == e.prefix && t.uri != e.namespaceURI))
                        throw _("Saxon-JS restriction: namespace nodes in content clash with the element prefix", "SXJS0002");
                      if ("" === t.prefix) {
                        if ("" === e.namespaceURI) throw _("Cannot add a default namespace to a no-namespace element", "XTDE0440");
                        if (e.hasAttributeNS("", "xmlns")) {
                          if (e.getAttributeNS("", "xmlns") != t.uri) throw _("Cannot have two different default namespaces", "XTDE0430");
                        } else
                          (ci.getPlatform().inBrowser && e instanceof HTMLElement) ||
                            e.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", t.uri);
                      } else {
                        var r = "http://www.w3.org/2000/xmlns/",
                          o = "xmlns:" + t.prefix,
                          i = t.uri;
                        if (
                          ("~" == t.uri && void 0 !== ve[t.prefix] && (i = ve[t.prefix]),
                          e.hasAttributeNS(r, t.prefix) && e.getAttributeNS(r, t.prefix) != i)
                        )
                          throw _("Cannot have two namespaces with the same prefix '" + t.prefix + "'", "XTDE0430");
                        e.setAttributeNS(r, o, i);
                      }
                    }
                  else if (t.nodeType == h.ATTRIBUTE_NODE) {
                    if ((f(t, c), "" !== t.namespaceURI)) {
                      var a = t.name.split(":");
                      if (2 != a.length || e.lookupNamespaceURI(a[0]) != t.namespaceURI)
                        if (2 == a.length && null === e.lookupNamespaceURI(a[0]))
                          e.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + a[0], t.namespaceURI);
                        else
                          for (var u = 2 == a.length ? a[0] : "ns"; ; ) {
                            if (null === e.lookupNamespaceURI(u)) {
                              e.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + u, t.namespaceURI),
                                (t.name = u + ":" + a[a.length - 1]);
                              break;
                            }
                            u += "_1";
                          }
                    }
                    var r = "" === t.namespaceURI ? null : t.namespaceURI;
                    e.setAttributeNS(r, t.name, t.value);
                  } else
                    t.nodeType == h.TEXT_NODE
                      ? t.nodeValue &&
                        "" !== t.nodeValue &&
                        ((o = e.lastChild) && o.nodeType == h.TEXT_NODE
                          ? (o.nodeValue = o.nodeValue + t.nodeValue)
                          : e.appendChild(h.copyItem(t, s, "")))
                      : t.nodeType == h.DOCUMENT_NODE || t.nodeType == h.DOCUMENT_FRAGMENT_NODE
                      ? D.child(t).forEachItem(function (t) {
                          m(e, t);
                        })
                      : ((c = !0),
                        (ci.getPlatform().inBrowser && s.resultDocument == window.document) ||
                          t.nodeType != h.ELEMENT_NODE ||
                          (ci.getPlatform().inBrowser && t instanceof HTMLElement) ||
                          ((i = t.prefix || ""),
                          (t.lookupNamespaceURI(i) || "") !== (r = t.namespaceURI || "") && h.declareNS(t, i, r),
                          !t.lookupNamespaceURI(null) && e.lookupNamespaceURI(null) && h.declareNS(t, "", "")),
                        (!n || (ci.getPlatform().inBrowser && e instanceof HTMLElement != t instanceof HTMLElement)) &&
                          (t = h.copyItem(t, s, "c")),
                        e.appendChild(t),
                        (t._saxonIsLocal = !1));
                else {
                  if (e.nodeType != h.DOCUMENT_NODE) throw _("Unknown parent node type " + e.nodeType, "SXJS0003");
                  null !== t && (e.documentElement = t);
                }
              }
            }
            t.forEachItem(function (t) {
              m(r, t);
            });
          }
          function un(e, t) {
            function n(t) {
              return "Context item for template " + e.getAttribute("name") + " must be " + t;
            }
            if (t.noCurrentFocus() && -1 == e.getAttribute("flags").indexOf("o")) throw _(n("supplied"), "XTTE3090", e);
            t.noCurrentFocus() || -1 != e.getAttribute("flags").indexOf("s") || (t.focus = {});
            var r = e.getAttribute("jsTest");
            if (r && !t.noCurrentFocus() && !new Function("item", r)(t.getCurrentFocus()))
              throw _(n("instance of " + e.getAttribute("cxt")), "XTTE0590", e);
          }
          function sn(t) {
            this.value = t;
          }
          function cn(t) {
            return t instanceof sn;
          }
          function ln(t) {
            return t instanceof y || t instanceof mn;
          }
          function fn(t, e, n, r, o) {
            function i(t) {
              return h.isNode(t) || x.untypedAtomic.matches(t) || x.string.matches(t) || x.boolean.matches(t) || x.double.matches(t);
            }
            function a(t, e) {
              return null === t || i(t) ? t : hn(t, e, o);
            }
            if (void 0 === n) return t;
            if (Array.isArray(t)) {
              if (e(t.length))
                return t.map(function (t) {
                  return a(n(t), !0);
                });
              throw _("Supplied value for parameter " + r + " has wrong cardinality", "XTTE0590");
            }
            return a(n(t));
          }
          function mn(t) {
            this.value = t;
          }
          function pn(t) {
            this.value = t;
          }
          function hn(t, e, n) {
            function r(t, e) {
              var n,
                r,
                o = new y();
              for (n in t) t.hasOwnProperty(n) && ((r = hn(t[n], e, !0)), o.inSituPut(hn(n, e, !0), Array.isArray(r) ? r : [r]));
              return o;
            }
            if (x.anyAtomicType.matches(t)) return t;
            switch (typeof t) {
              case "undefined":
                return [];

              case "string":
                return x.string.fromString(t);

              case "number":
                return x.double.fromNumber(t);

              case "boolean":
                return x.boolean.fromBoolean(t);

              case "function":
                return new mn(t);

              case "object":
                var o;
                return C.isNode(t)
                  ? t
                  : t instanceof Date
                  ? x.dateTime.fromString(t.toISOString())
                  : Array.isArray(t)
                  ? ((o = []),
                    e
                      ? (t.forEach(function (t) {
                          (t = hn(t, !0, n)), (t = Array.isArray(t) ? t : [t]);
                          o.push(t);
                        }),
                        new M.XdmArray(o))
                      : (t.forEach(function (t) {
                          o.push(hn(t, !0, n));
                        }),
                        o))
                  : null === t
                  ? []
                  : t instanceof pn
                  ? t.value
                  : n
                  ? r(t, e)
                  : new mn(t);

              default:
                return t;
            }
          }
          function dn(t, e, n) {
            var r, o;
            return null === t
              ? null
              : e && x.anyAtomicType.matches(t)
              ? t
              : x.string.matches(t) ||
                x.anyURI.matches(t) ||
                x.duration.matches(t) ||
                x.hexBinary.matches(t) ||
                x.base64Binary.matches(t) ||
                x.untypedAtomic.matches(t)
              ? t.toString()
              : x.numeric.matches(t)
              ? t.toNumber()
              : x.boolean.matches(t)
              ? t.toBoolean()
              : x.dateTime.matches(t) ||
                x.date.matches(t) ||
                x.dateTimeStamp.matches(t) ||
                x.time.matches(t) ||
                x.gYearMonth.matches(t) ||
                x.gYear.matches(t) ||
                x.gMonthDay.matches(t) ||
                x.gMonth.matches(t) ||
                x.gDay.matches(t)
              ? t.toString()
              : x.QName.matches(t)
              ? t.toEQName()
              : h.isNode(t)
              ? t
              : t instanceof M.XdmArray
              ? ((r = []),
                0 !== t.value.length &&
                  t.value.forEach(function (t) {
                    r.push(dn(t, e, n));
                  }),
                r)
              : Array.isArray(t)
              ? ((r = []),
                0 === t.length
                  ? null
                  : 1 == t.length
                  ? dn(t[0], e, n)
                  : (t.forEach(function (t) {
                      r.push(dn(t, e, n));
                    }),
                    r))
              : t instanceof y
              ? n
                ? ((o = {}),
                  t.forAllPairs(function (t) {
                    o[t.k.toString()] = dn(t.v, e, n);
                  }),
                  o)
                : new pn(t)
              : t instanceof mn
              ? t.value
              : new pn(t);
          }
          function gn(t) {
            return t.mapOneToMany(function (t) {
              return cn(t)
                ? F.Join(
                    t.value.map(function (t) {
                      return gn(F.ForArray(t));
                    })
                  )
                : F.Singleton(t);
            });
          }
          function yn(t, e) {
            var e = e ? (e instanceof F.AnyIterator ? e.next() : e) : {},
              n = {},
              e =
                (e instanceof y
                  ? e.forAllPairs(function (t) {
                      n[t.k.toString()] = dn(t.v);
                    })
                  : (n = e),
                "json" == n.method),
              r = e
                ? n
                : {
                    "saxon:line-length": 80,
                    "saxon:indent-spaces": 3,
                    indent: "  "
                  };
            if (!e) for (var o in n) r[o] = n[o];
            function i(t) {
              var e, n;
              return void 0 === t
                ? "undefined"
                : cn(t)
                ? ((e = "["),
                  t.value.forEach(function (t) {
                    "[" != e && (e += ","), (e += a(t));
                  }),
                  e + "]")
                : t instanceof y
                ? ((n = "map{"),
                  t.forAllPairs(function (t) {
                    "map{" != n && (n += ",\n"), (n = (n += i(t.k) + ":") + a(t.v));
                  }),
                  n + "}")
                : h.isNode(t)
                ? h.xmlToString(t, r)
                : x.string.matches(t) || x.untypedAtomic.matches(t)
                ? '"' + t.toString().replace(/""/g, '"').replace(/''/g, "'") + '"'
                : x.integer.matches(t) || x.numeric.matches(t) || x.boolean.matches(t)
                ? t.toString()
                : t instanceof F.Singleton
                ? i(t.next())
                : p(t);
            }
            function a(t) {
              var e;
              return void 0 === t
                ? "(undefined)"
                : 1 == t.length
                ? i(t[0])
                : ((e = "("),
                  t.forEach(function (t) {
                    "(" != e && (e += ","), (e += i(t));
                  }),
                  e + ")");
            }
            return "json" == r.method ? vn(t, r) : a(t.expand());
          }
          function vn(t, e) {
            var n,
              r = {
                "allow-duplicate-names": "no",
                "byte-order-mark": "no",
                encoding: "utf-8",
                indent: "no",
                "normalization-form": "none",
                "json-node-output-method": "xml"
              };
            for (n in e) r[n] = e[n];
            if (!0 !== r.indent && !1 !== r.indent && "yes" != r.indent && "no" != r.indent)
              throw _("Serialize indent option wrong type", "XPTY0004");
            function i(t, n) {
              var e, r, o;
              if (cn(t))
                return (
                  (e = "["),
                  t.value.forEach(function (t) {
                    "[" != e && (e += ","), (e += a(t, n));
                  }),
                  e + "]"
                );
              if (t instanceof y)
                return (
                  (r = "{"),
                  (o = {}),
                  t.forAllPairs(function (t) {
                    "{" != r && (r += ",\n");
                    var e = i(x.string.cast(t.k), n);
                    if ("no" == n["allow-duplicate-names"]) {
                      if (1 == o[e]) throw _("Duplicate keys in serialized JSON map", "SERE0022");
                      o[e] = 1;
                    }
                    r = (r += e + ":") + a(t.v, n);
                  }),
                  r + "}"
                );
              if (h.isNode(t))
                return u(
                  h.xmlToString(t, {
                    method: "xml",
                    "omit-xml-declaration": "yes"
                  })
                );
              if (x.integer.matches(t) || x.numeric.matches(t)) {
                if (isNaN(t.value) || !isFinite(t.value)) throw _("Cannot serialize numeric (to JSON): " + p(t), "SERE0020");
                return t.toString();
              }
              if (x.boolean.matches(t)) return t.toString();
              if (x.anyAtomicType.matches(t)) return u(t);
              if (t instanceof F.Singleton) return i(t.next(), n);
              throw _("Cannot serialize item (to JSON): " + p(t), "SERE0021");
            }
            function a(t, e) {
              if (0 === t.length) return "null";
              if (1 === t.length) return i(t[0], e);
              throw _("Cannot serialize (to JSON) a sequence of length greater than one", "SERE0023");
            }
            function u(t) {
              return JSON.stringify(t.toString()).replace(/\//g, "\\/");
            }
            return a(t.expand(), r);
          }
          ((xn = {
            TC: function (t, e, n) {
              if (!C.isNode(t))
                return x.anyAtomicType.matches(t) ? F.Singleton(n.resultDocument.createTextNode(t.toString())) : F.Singleton(t);
              switch (t.nodeType) {
                case C.DOCUMENT_NODE:
                case C.DOCUMENT_FRAGMENT_NODE:
                case C.ELEMENT_NODE:
                  var r = n.newContext(!1);
                  return (r.focus = F.Tracker(D.child(t))), e.applyTemplates(r);

                case C.TEXT_NODE:
                case C.CDATA_SECTION:
                  return F.Singleton(C.copyItem(t, n));

                case C.ATTRIBUTE_NODE:
                  return F.Singleton(n.resultDocument.createTextNode(t.value));

                default:
                  return F.Empty;
              }
            },
            SC: function (n, r, t) {
              function e(t) {
                var t = t.newContext(!1),
                  e = [];
                return (e[0] = F.Tracker(D.attribute(n))), (e[1] = F.Tracker(D.child(n))), (t.focus = F.Join(e)), r.applyTemplates(t);
              }
              return C.shallowCopy(n, t, "c", e);
            },
            DC: function (t, e, n) {
              return F.Singleton(C.copyItem(t, n, "c"));
            },
            DS: function (t, e, n) {
              return F.Empty;
            },
            SS: function (t, e, n) {
              if (!C.isNode(t)) return F.Singleton(t);
              switch (t.nodeType) {
                case C.DOCUMENT_NODE:
                case C.DOCUMENT_FRAGMENT_NODE:
                case C.ELEMENT_NODE:
                  var r = n.newContext(!1),
                    o = [];
                  return (o[0] = F.Tracker(D.attribute(t))), (o[1] = F.Tracker(D.child(t))), (r.focus = F.Join(o)), e.applyTemplates(r);

                default:
                  return F.Empty;
              }
            },
            bubble: function (t, e, n) {
              return C.isNode(t)
                ? t.nodeType !== C.ELEMENT_NODE
                  ? F.Empty
                  : (((n = n.newContext(!1)).focus = F.Tracker(D.parent(t))), e.applyTemplates(n))
                : F.Singleton(t);
            }
          }).TO = xn.TC),
            (En.prototype = {
              _expr: null,
              _rules: null,
              onNoMatch: "TC",
              mustBeTyped: !1,
              failOnMultipleMatch: !1,
              applyTemplates: function (e) {
                var n = this;
                return e.focus.mapOneToMany(function (t) {
                  return n._processItem(t, e);
                });
              },
              applyImports: function (t) {
                var e = t.currentTemplate;
                if (e)
                  return this._processItem(t.getCurrentFocus(), t, function (t) {
                    return t.prec >= e.minImp && t.prec < e.prec;
                  });
                throw _("No current template rule", "XTDE0560");
              },
              nextMatch: function (t) {
                var e = t.currentTemplate;
                if (e)
                  return this._processItem(t.getCurrentFocus(), t, function (t) {
                    return bn(t, e) < 0;
                  });
                throw _("No current template rule", "XTDE0560");
              },
              findBestRule: function (n, r, o) {
                var t = this._rules,
                  i = null;
                return (
                  this.failOnMultipleMatch
                    ? t.forEach(function (t) {
                        if ((!o || o(t)) && (!i || 0 <= Sn(t, i))) {
                          var e = !1;
                          try {
                            e = t.pattern(n, r);
                          } catch (t) {}
                          if (e) {
                            if (null !== i && 0 === Sn(t, i))
                              throw (
                                ((e = "Multiple templates matched item:"),
                                _(
                                  (e =
                                    (e = (e += M.serialize(F.Singleton(n))) + ("\n    " + i.rule.getAttribute("module"))) +
                                    ("\nand " + t.rule.getAttribute("module"))),
                                  "XTDE0540"
                                ))
                              );
                            i = t;
                          }
                        }
                      })
                    : t.forEach(function (t) {
                        if ((!o || o(t)) && (!i || 0 < bn(t, i))) {
                          var e = !1;
                          try {
                            e = t.pattern(n, r);
                          } catch (t) {}
                          e && (i = t);
                        }
                      }),
                  i
                );
              },
              isNonDOMmode: function (t) {
                return null !== this.findBestRule(M.JSValue(window), t);
              },
              _processItem: function (t, e, n) {
                n = this.findBestRule(t, e, n);
                if (null !== n)
                  return (
                    M.checkTemplateFocus(n.rule, e), (e.currentTemplate = n), (e.currentMode = e.currentComponent), M.evaluate(n.action, e)
                  );
                (n = C.getAttribute(this._expr, "name")),
                  (n = null !== n && n.split("}")[0] == "Q{" + M.KNOWN_URI.ixsl ? "bubble" : this.onNoMatch.split("+")[0]),
                  (n = xn[n]);
                if (n) return n(t, this, e);
                throw _("No matching template rule for " + p(t) + " onNoMatch = " + this.onNoMatch, "XTDE0555");
              },
              printRules: function () {
                var t = this._rules,
                  e = "";
                return (
                  t.forEach(function (t) {
                    e += wn(t);
                  }),
                  e
                );
              }
            });
          var xn,
            Nn = En;
          function bn(t, e) {
            return t.prec == e.prec ? (t.prio == e.prio ? t.seq - e.seq : t.prio - e.prio) : t.prec - e.prec;
          }
          function Sn(t, e) {
            return t.prec == e.prec ? (t.prio == e.prio ? 0 : t.prio - e.prio) : t.prec - e.prec;
          }
          function wn(t) {
            return JSON.stringify({
              prec: t.prec,
              prio: t.prio,
              seq: t.seq,
              line: t.line,
              match: t.pattern
            });
          }
          function Tn(t) {
            return Jn(M.argRole(t, "match"));
          }
          function En(t) {
            (this._expr = t),
              (this.onNoMatch = t.getAttribute("onNo")),
              (this.mustBeTyped = M.hasFlag(t, "t")),
              M.hasFlag(t, "F") && (this.failOnMultipleMatch = !0),
              (this._rules = C.getChildElements(t)
                .map(function (t) {
                  return {
                    rule: t,
                    prec: parseInt(t.getAttribute("prec"), 10),
                    prio: parseFloat(t.getAttribute("prio")),
                    seq: parseInt(t.getAttribute("seq"), 10),
                    minImp: parseInt(t.getAttribute("minImp"), 10),
                    pattern: Tn(t),
                    action: M.argRole(t, "action")
                  };
                })
                .sort(bn)
                .reverse());
          }
          (o.prototype = {
            filter: function (t) {
              return Dn(this, t);
            },
            mapOneToOne: function (t) {
              return Mn(this, t);
            },
            mapOneToMany: function (t) {
              return new _n(this, t);
            },
            forEachItem: function (t) {
              for (var e; null !== (e = this.next()); ) t(e);
            },
            some: function (t) {
              for (var e; null !== (e = this.next()); ) if (t(e)) return !0;
              return !1;
            },
            every: function (t) {
              for (var e; null !== (e = this.next()); ) if (!t(e)) return !1;
              return !0;
            },
            count: function () {
              var t = 0;
              return (
                this.forEachItem(function () {
                  t++;
                }),
                t
              );
            },
            expand: function () {
              var e = [];
              return (
                this.forEachItem(function (t) {
                  e.push(t);
                }),
                e
              );
            }
          }),
            (An.prototype = Object.create(o.prototype)),
            ((An.prototype.constructor = An).prototype._item = null),
            (An.prototype.next = function () {
              var t = this._item;
              return (this._item = null), t;
            }),
            (An.prototype.peek = function () {
              return this._item;
            }),
            (An.prototype.expand = function () {
              return null === this._item ? [] : [this._item];
            }),
            (On = {
              next: function () {
                return null;
              },
              peek: function () {
                return null;
              },
              expand: function () {
                return [];
              },
              count: function () {
                return 0;
              },
              filter: function () {
                return On;
              },
              mapOneToOne: function () {
                return On;
              },
              mapOneToMany: function () {
                return On;
              },
              forEachItem: function () {},
              some: function () {
                return !1;
              }
            }),
            (Cn.prototype = Object.create(o.prototype)),
            ((Cn.prototype.constructor = Cn).prototype._array = null),
            (Cn.prototype._index = 0),
            (Cn.prototype.next = function () {
              return this._index < this._array.length ? this._array[this._index++] : null;
            }),
            (Cn.prototype.peek = function () {
              return this._index < this._array.length ? this._array[this._index] : null;
            }),
            (Cn.prototype.expand = function () {
              return this._array;
            }),
            (Cn.prototype.count = function () {
              return this._array.length;
            }),
            (Dn.prototype = Object.create(o.prototype)),
            ((Dn.prototype.constructor = Dn).prototype._base = null),
            (Dn.prototype._predicate = null),
            (Dn.prototype.next = function () {
              for (;;) {
                var t = this._base.next();
                if (!t) return null;
                if (this._predicate(t)) return t;
              }
            }),
            (_n.prototype = Object.create(o.prototype)),
            ((_n.prototype.constructor = _n).prototype._base = null),
            (_n.prototype._mapper = null),
            (_n.prototype._currentIter = null),
            (_n.prototype.next = function () {
              for (;;) {
                if (null !== this._currentIter) {
                  var t = this._currentIter.next();
                  if (t) return t;
                }
                t = this._base.next();
                if (null === t) return null;
                (this._currentIter = this._mapper(t)),
                  this._currentIter &&
                    !this._currentIter.next &&
                    M.internalError("Result of mapper is not an iterator, mapper = " + this._mapper);
              }
            }),
            (Mn.prototype = Object.create(o.prototype)),
            ((Mn.prototype.constructor = Mn).prototype._base = null),
            (Mn.prototype._mapper = null),
            (Mn.prototype._position = 0),
            (Mn.prototype.next = function () {
              for (;;) {
                var t = this._base.next();
                if (null === t) return null;
                t = this._mapper(t, this._position++);
                if (t) return t;
              }
            }),
            (Fn.prototype = Object.create(o.prototype)),
            ((Fn.prototype.constructor = Fn).prototype._step = null),
            (Fn.prototype._next = null),
            (Fn.prototype.next = function () {
              var t = this._next;
              return t ? ((this._next = this._step(t)), t) : null;
            }),
            (Fn.prototype.peek = function () {
              return this._next;
            }),
            (In.prototype = Object.create(o.prototype)),
            ((In.prototype.constructor = In).prototype._iterators = []),
            (In.prototype.current = null),
            (In.prototype.next = function () {
              for (;;) {
                if (0 === this._iterators.length) return (this.current = null);
                var t = this._iterators[0].next();
                if (null !== t) return (this.current = t);
                this._iterators.shift();
              }
            }),
            (kn.prototype = Object.create(o.prototype)),
            ((kn.prototype.constructor = kn).prototype._iter1 = null),
            (kn.prototype._iter2 = null),
            (kn.prototype._compare = null),
            (kn.prototype.current = null),
            (kn.prototype.next = function () {
              var t,
                e = this._iter1.peek(),
                n = this._iter2.peek();
              return e && n
                ? ((t = this._compare(e, n)) < 0
                    ? (this.current = this._iter1.next())
                    : 0 < t
                    ? (this.current = this._iter2.next())
                    : ((this.current = this._iter1.next()), this._iter2.next()),
                  this.current)
                : e
                ? ((this.current = this._iter1.next()), this.current)
                : n
                ? ((this.current = this._iter2.next()), this.current)
                : (this.current = null);
            }),
            (Pn.prototype = Object.create(o.prototype)),
            ((Pn.prototype.constructor = Pn).prototype._iter1 = null),
            (Pn.prototype._iter2 = null),
            (Pn.prototype._compare = null),
            (Pn.prototype.current = null),
            (Pn.prototype.next = function () {
              for (var t = this._iter1.peek(), e = this._iter2.peek(); t && e; ) {
                var n = this._compare(t, e);
                if (n < 0) this._iter1.next(), (t = this._iter1.peek());
                else {
                  if (!(0 < n)) return (this.current = this._iter1.next()), this._iter2.next(), this.current;
                  this._iter2.next(), (e = this._iter2.peek());
                }
              }
              return (this.current = null);
            }),
            (Un.prototype = Object.create(o.prototype)),
            ((Un.prototype.constructor = Un).prototype._iter1 = null),
            (Un.prototype._iter2 = null),
            (Un.prototype._compare = null),
            (Un.prototype.current = null),
            (Un.prototype.next = function () {
              for (var t = this._iter1.peek(), e = this._iter2.peek(); t && e; ) {
                var n = this._compare(t, e);
                if (n < 0) return (this.current = this._iter1.next()), this.current;
                e = (0 < n ? this._iter2.next() : (this._iter1.next(), this._iter2.next(), (t = this._iter1.peek())), this._iter2.peek());
              }
              return t && !e ? ((this.current = this._iter1.next()), this.current) : (this.current = null);
            }),
            (Rn.prototype = Object.create(o.prototype)),
            ((Rn.prototype.constructor = Rn).prototype._base = null),
            (Rn.prototype.next = function () {
              var t = this._nextButOne;
              return t && (this._nextButOne = this._base.next()), t;
            }),
            (Rn.prototype.peek = function () {
              return this._nextButOne;
            }),
            (Bn.prototype = Object.create(o.prototype)),
            ((Bn.prototype.constructor = Bn).prototype._base = null),
            (Bn.prototype._last = -1),
            (Bn.prototype.position = 0),
            (Bn.prototype.current = null),
            (Bn.prototype.regexGroups = []),
            (Bn.prototype.next = function () {
              return this.position++, (this.current = this._base.next()), null === this.current && (this.position = -1), this.current;
            }),
            (Bn.prototype.last = function () {
              if (this._last < 0)
                if (this._base instanceof Cn) this._last = this._base.expand().length;
                else {
                  for (var t, e = []; null !== (t = this._base.next()); ) e.push(t);
                  (this._last = this.position + e.length), (this._base = F.ForArray(e));
                }
              return this._last;
            }),
            (Xn.prototype = Object.create(o.prototype)),
            ((Xn.prototype.constructor = Xn).prototype.position = 1),
            (Xn.prototype.current = null),
            (Xn.prototype.next = function () {
              return null;
            }),
            (Xn.prototype.last = function () {
              return 1;
            }),
            (Ln.prototype = Object.create(o.prototype)),
            ((Ln.prototype.constructor = Ln).prototype._instructions = []),
            (Ln.prototype._currentIterator = null),
            (Ln.prototype._context = null),
            (Ln.prototype.current = null),
            (Ln.prototype.next = function () {
              for (;;) {
                if (null === this._currentIterator) {
                  if (0 === this._instructions.length) return (this.current = null);
                  this._currentIterator = M.evaluate(this._instructions[0], this._context);
                }
                var t = this._currentIterator.next();
                if (null !== t) return (this.current = t);
                this._instructions.shift(), (this._currentIterator = null);
              }
            });
          var On,
            F = {
              Empty: On,
              Singleton: An,
              Join: In,
              Stepping: Fn,
              LookAhead: Rn,
              Tracker: Bn,
              Solo: Xn,
              ForArray: Cn,
              Union: kn,
              Intersect: Pn,
              Difference: Un,
              AnyIterator: o,
              Block: Ln,
              trace: function (t, e, n) {
                for (var r, o = []; null !== (r = e.next()); ) {
                  var i =
                    "object" == typeof r
                      ? r instanceof Node
                        ? n
                          ? r.toString()
                          : r.nodeType + ":" + (r.tagName || r.textContent)
                        : r instanceof ie
                        ? "xmlns:" + r.prefix + "=" + r.uri
                        : r.toString()
                      : typeof r;
                  P(t + ": " + i), o.push(r);
                }
                return 0 === o.length && P(t + ": <empty>"), F.ForArray(o);
              },
              oneString: function (t) {
                return F.Singleton(x.string.fromString(t));
              },
              oneInteger: function (t) {
                return F.Singleton(x.integer.fromNumber(t));
              },
              oneDouble: function (t) {
                return F.Singleton(x.double.fromNumber(t));
              },
              oneFloat: function (t) {
                return F.Singleton(x.float.fromNumber(t));
              },
              oneDecimal: function (t) {
                return F.Singleton(x.decimal.fromBig(t));
              },
              oneBoolean: function (t) {
                return F.Singleton(x.boolean.fromBoolean(t));
              }
            };
          function o() {}
          function An(t) {
            if (!(this instanceof An)) return new An(t);
            o.call(this), (this._item = t);
          }
          function Cn(t) {
            if (!(this instanceof Cn)) return new Cn(t);
            o.call(this), Array.isArray(t) || M.internalError("ForArray expects array"), (this._array = t);
          }
          function Dn(t, e) {
            if (!(this instanceof Dn)) return new Dn(t, e);
            o.call(this), (this._base = t), (this._predicate = e) || M.internalError("Filter iterator undefined predicate");
          }
          function _n(t, e) {
            if (!(this instanceof _n)) return new _n(t, e);
            o.call(this), (this._base = t), (this._mapper = e);
          }
          function Mn(t, e) {
            if (!(this instanceof Mn)) return new Mn(t, e);
            o.call(this),
              ("object" == typeof (this._base = t) && "next" in t) || M.internalError("Base not an iterator"),
              (this._mapper = e);
          }
          function Fn(t, e) {
            if (!(this instanceof Fn)) return new Fn(t, e);
            o.call(this), (this._next = t), (this._step = e);
          }
          function In(t) {
            if (!(this instanceof In)) return new In(t);
            o.call(this), Array.isArray(t) || M.internalError("Join iterator expects array"), (this._iterators = t);
          }
          function kn(t, e, n) {
            if (!(this instanceof kn)) return new kn(t, e, n);
            o.call(this), (this._iter1 = F.LookAhead(t)), (this._iter2 = F.LookAhead(e)), (this._compare = n);
          }
          function Pn(t, e, n) {
            if (!(this instanceof Pn)) return new Pn(t, e, n);
            o.call(this), (this._iter1 = F.LookAhead(t)), (this._iter2 = F.LookAhead(e)), (this._compare = n);
          }
          function Un(t, e, n) {
            if (!(this instanceof Un)) return new Un(t, e, n);
            o.call(this), (this._iter1 = F.LookAhead(t)), (this._iter2 = F.LookAhead(e)), (this._compare = n);
          }
          function Rn(t) {
            return "peek" in t ? t : this instanceof Rn ? (o.call(this), (this._base = t), void (this._nextButOne = t.next())) : new Rn(t);
          }
          function Bn(t) {
            if (!(this instanceof Bn)) return new Bn(t);
            o.call(this), (this._base = t);
          }
          function Xn(t) {
            if (!(this instanceof Xn)) return new Xn(t);
            o.call(this), (this.current = t);
          }
          function Ln(t, e) {
            if (!(this instanceof Ln)) return new Ln(t, e);
            o.call(this),
              Array.isArray(t) || M.internalError("Block iterator expects array"),
              (this._instructions = t),
              (this._currentIterator = null),
              (this._context = e);
          }
          var I,
            k,
            zn,
            Jn = function (t) {
              var e = {
                "p.any": function (t) {
                  return function () {
                    return !0;
                  };
                },
                "p.booleanExp": function (n) {
                  return function (t, e) {
                    e = e.newContext();
                    return (e.focus = F.Solo(t)), M.ebv(M.evalChild1(n, e));
                  };
                },
                "p.genNode": function (t) {
                  var u = C.getChildElements(t)[0];
                  return function (t, e) {
                    if (C.isNode(t))
                      for (var n, r = D.ancestorOrSelf(t); null !== (n = r.next()); )
                        for (var o, i = e.newContext(!1), a = ((i.focus = F.Solo(n)), M.evaluate(u, i)); null !== (o = a.next()); )
                          if (C.isSameNode(o, t)) return !0;
                    return !1;
                  };
                },
                "p.genPos": function (r) {
                  var o = new Function("item", r.getAttribute("jsTest"));
                  return function (t, e) {
                    var n;
                    return (
                      !!o(t) &&
                      ((n = D["preceding-sibling"](e.getCurrentFocus()).filter(o).expand()),
                      ((e = e.newContext(!1)).focus = F.Solo(t)),
                      (e.focus.position = n.length + 1),
                      M.ebv(M.evalChild1(r, e)))
                    );
                  };
                },
                "p.nodeSet": function (o) {
                  return function (t, e) {
                    for (var n, r = M.evalChild1(o, e); null !== (n = r.next()); ) if (n == t) return !0;
                    return !1;
                  };
                },
                "p.nodeTest": function (t) {
                  return new Function("item", t.getAttribute("jsTest"));
                },
                "p.simPos": function (t) {
                  var n = new Function("item", t.getAttribute("jsTest")),
                    r = parseInt(t.getAttribute("pos"), 10);
                  return function (t, e) {
                    return n(t) && D.precedingSibling(t).filter(n).count() == r - 1;
                  };
                },
                "p.venn": function (t) {
                  var e = C.getChildElements(t),
                    n = Jn(e[0]),
                    r = Jn(e[1]),
                    o = t.getAttribute("op");
                  switch (o) {
                    case "union":
                      return function (t, e) {
                        return n(t, e) || r(t, e);
                      };

                    case "intersect":
                      return function (t, e) {
                        return n(t, e) && r(t, e);
                      };

                    case "except":
                      return function (t, e) {
                        return n(t, e) && !r(t, e);
                      };

                    default:
                      throw _("unknown op " + o, "SXJS0003");
                  }
                },
                "p.withCurrent": function (t) {
                  var n = Jn(C.getChildElements(t)[0]);
                  return function (t, e) {
                    e = e.newContext(!0);
                    return (e.localVars[0] = [t]), n(t, e);
                  };
                },
                "p.withPredicate": function (t) {
                  var t = C.getChildElements(t),
                    n = Jn(t[0]),
                    r = t[1];
                  return function (t, e) {
                    return !!n(t, e) && (((e = e.newContext(!1)).focus = F.Solo(t)), M.ebv(M.evaluate(r, e)));
                  };
                },
                "p.withUpper": function (t) {
                  var e = C.getChildElements(t),
                    o = Jn(e[0]),
                    i = Jn(e[1]),
                    a = t.getAttribute("axis");
                  return "parent" == a
                    ? "true" == t.getAttribute("upFirst")
                      ? function (t, e) {
                          var n = C.xdmParentNode(t);
                          return n && i(n, e) && o(t, e);
                        }
                      : function (t, e) {
                          var n = C.xdmParentNode(t);
                          return n && o(t, e) && i(n, e);
                        }
                    : function (t, e) {
                        if (o(t, e)) for (var n, r = D[a](t); null !== (n = r.next()); ) if (i(n, e)) return !0;
                        return !1;
                      };
                }
              }[t.tagName];
              if (e) return e(t);
              throw _("Unimplemented pattern " + t.tagName, "SXJS0002");
            },
            N = (function () {
              var e = null,
                T = !1;
              try {
                T = 1 == "\ud83d\ude80".match(new RegExp(".", "gu")).length;
              } catch (t) {
                T = !1;
              }
              function E() {
                var t;
                return (
                  null === e &&
                    (P("Loading categories.json", 2),
                    (t = ci.getPlatform().readResource("opt/categories.json")),
                    (e = JSON.parse(t)),
                    P("Finished loading categories.json", 2)),
                  e
                );
              }
              function t(e, n, t) {
                function r(t, e) {
                  function r(t) {
                    for (var e = t.toString(16); e.length < 4; ) e = "0" + e;
                    return "\\u" + (T && 4 < e.length ? "{" + e + "}" : e);
                  }
                  function o(t) {
                    for (var e = "", n = 0; n < t.length; n += 2)
                      (T || t[n + 1] < 65536) && ((e += r(t[n])), t[n + 1] > t[n]) && (e += "-" + r(t[n + 1]));
                    return e;
                  }
                  function i(t) {
                    var e = [];
                    0 !== t[0] && (e.push(0), e.push(t[0] - 1));
                    for (var n = 2; n < t.length; n += 2) e.push(t[n - 1] + 1), e.push(t[n] - 1);
                    var r = t[t.length - 1];
                    return (T || r < 65535) && (e.push(r + 1), e.push(T ? 1114111 : 65535)), e;
                  }
                  function a(t, e, n) {
                    n = o((t = n ? i(t) : t));
                    return (n = e ? n : "[" + n + "]");
                  }
                  function n(t, e, n) {
                    var r = [];
                    return (
                      Array.isArray(t) || h("Ranges must be array"),
                      t.forEach(function (t) {
                        r.push(parseInt(t[0], 16)), r.push(parseInt(t[1], 16));
                      }),
                      a(r, e, n)
                    );
                  }
                  var u,
                    s,
                    c,
                    l,
                    f,
                    m = t.charAt(e + 1);
                  return (
                    "nrt\\|.-^?*+{}()[]pPsSiIcCdDwW$".indexOf(m) < 0 &&
                      (0 !== N || !/[0-9]/.test(m)) &&
                      h("\\" + m + " is not allowed in XPath regular expressions"),
                    "p" == m || "P" == m
                      ? ((u = t.indexOf("}", e)),
                        (s = t.substring(e + 3, u)),
                        p("x") && (s = s.replace(/[ \n\r\t]+/g, "")),
                        (l = (c = E())[s]) || h("Unknown category " + s),
                        1 == s.length
                          ? ((f = []),
                            l.split("|").forEach(function (t) {
                              f = f.concat(c[t]);
                            }))
                          : (f = l),
                        (d += n(f, 0 < N, "P" == m)),
                        (e = u))
                      : "d" == m
                      ? ((d += n(E().Nd, 0 < N, !1)), e++)
                      : "i" == m
                      ? ((d += a(g, 0 < N, !1)), e++)
                      : "c" == m
                      ? ((d += a(y, 0 < N, !1)), e++)
                      : "I" == m
                      ? ((d += a(g, 0 < N, !0)), e++)
                      : "C" == m
                      ? ((d += a(y, 0 < N, !0)), e++)
                      : /[0-9]/.test(m)
                      ? 0 < N
                        ? h("Numeric escape within charclass")
                        : (v[parseInt(m, 10)] || h("No capturing expression #" + m),
                          (d += "\\" + m),
                          x <= 9 && /[0-9]/.test(t.charAt(e + 2)) && (d += "(?:)"),
                          e++)
                      : ("-" == m ? (0 < N && (d += "\\"), (d += m)) : (d += "\\" + m), e++),
                    {
                      output: d,
                      i: e
                    }
                  );
                }
                if (((n = n ? n.toString() : ""), !T && t && M.isAstral(t)))
                  throw new _("Cannot handle non-BMP characters with regular expressions in this browser", "SXJS0002");
                function p(t) {
                  return 0 <= n.indexOf(t);
                }
                function h(t) {
                  throw new _("Invalid XPath regular expression: " + t, "FORX0002");
                }
                t = (p("i") ? "i" : "") + (p("m") ? "m" : "") + (p("g") ? "g" : "") + (T ? "u" : "");
                if (p("j")) return new RegExp(e, n.replace("j", ""));
                if (p("q")) return new RegExp(e.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), t);
                var d = "",
                  g = [
                    58, 58, 65, 90, 95, 95, 97, 122, 192, 214, 216, 246, 248, 767, 880, 893, 895, 8191, 8204, 8205, 8304, 8591, 11264,
                    12271, 12289, 55295, 63744, 64975, 65008, 65533, 65536, 983039
                  ],
                  y = [
                    45, 46, 48, 58, 65, 90, 95, 95, 97, 122, 183, 183, 192, 214, 216, 246, 248, 893, 895, 8191, 8204, 8205, 8255, 8256,
                    8304, 8591, 11264, 12271, 12289, 55295, 63744, 64975, 65008, 65533, 65536, 983039
                  ],
                  o = [],
                  v = [],
                  x = 1,
                  N = 0,
                  i = [];
                for (w = 0; w < e.length; w++) {
                  var a,
                    u = e.charAt(w);
                  switch (u) {
                    case "[":
                      0 < N && h("Nested square brackets");
                      for (var s = !1, c = !1, l = w + 2; l < e.length - 3; l++) {
                        if (!c && "-[" == e.substring(l, l + 2)) {
                          for (var f, m = e.substring(w + 1, l), b = l + 2; b < e.length; b++)
                            if ("]" == e.charAt(b) && "\\" != e.charAt(b - 1)) {
                              f = e.substring(l + 2, b + 1);
                              break;
                            }
                          "^" == m && h("Invalid subtraction"),
                            (e = e.substring(0, w) + "(?![" + f + ")[" + m + "]" + e.substring(b + 2)),
                            w--,
                            (s = !0);
                          break;
                        }
                        if (!c && "]" == e.charAt(l)) break;
                        c = "\\" == e.charAt(l) && !c;
                      }
                      s || ("]" == e.charAt(w + 1) && h("Character group is empty"), N++, i.push(d.length), (d += u));
                      break;

                    case "]":
                      0 === N && h("Unmatched ']'"), N--, i.pop(), (d += u);
                      break;

                    case "(":
                      0 === N &&
                        ((a = !0),
                        w + 2 < e.length &&
                          "?" === e.charAt(w + 1) &&
                          (":" === e.charAt(w + 2) || (s && "!" === e.charAt(w + 2)) ? (a = !1) : h("'(?' must be followed by ':'")),
                        o.push(a ? x++ : -1)),
                        (d += u);
                      break;

                    case ")":
                      0 === N && (0 === o.length && h("Unmatched ')'"), 0 < (a = o.pop())) && (v[a] = !0), (d += u);
                      break;

                    case ".":
                      0 === N && p("s") ? (d += "[^]") : (d += u);
                      break;

                    case "{":
                      if ("," == e.charAt(w + 1)) throw _("{,x} not allowed in XPath regex dialect", "FORX0002");
                      d += u;
                      break;

                    case " ":
                    case "\n":
                    case "\r":
                    case "\t":
                      (!p("x") || 0 < N) && (d += u);
                      break;

                    case "\\":
                      if (p("q")) d += "\\\\";
                      else {
                        if (!(w + 1 < e.length)) throw _("No character for escape code in XPath regex", "FORX0002");
                        p("x") && /\s/.test(e.charAt(w + 1)) && w++;
                        var S = r(e, w),
                          d = S.output,
                          w = S.i;
                      }
                      break;

                    default:
                      d += u;
                  }
                }
                0 < N && h("Unmatched '['"), 0 !== o.length && h("Unmatched '(");
                try {
                  return new RegExp(d, t);
                } catch (t) {
                  throw /^[imsxjqg]*$/.test(n)
                    ? new _("Invalid regular expression /" + e + "/: " + t.message, "FORX0002")
                    : new _("Invalid regex flags: " + n, "FORX0001");
                }
              }
              function n(t, e) {
                if (((e = e.toString()), /j/.test(e))) return t;
                if (/q/.test(e)) return t.replace(/\$/g, "$$$$");
                if (/(^|[^\\])\$([^0-9]|$)/.test(t) || /(^|[^\\])\\([^\\\$]|$)/.test(t))
                  throw new _("Invalid replacement string: " + t, "FORX0004");
                for (var n = !1, r = !1, o = "", i = 0; i < t.length; i++) {
                  var a = t.charAt(i);
                  switch (a) {
                    case "\\":
                      n && (o += a), (n = !n);
                      break;

                    case "$":
                      n ? ((o += "$$"), (n = !n)) : (r = !0);
                      break;

                    case "0":
                      r ? ((o += "$&"), (r = !1)) : (o += a);
                      break;

                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                      r ? ((o += "$" + a), (r = !1)) : (o += a);
                      break;

                    default:
                      o += a;
                  }
                }
                return o;
              }
              var r = t("^\\i\\c*$", ""),
                o = t("^\\c+$", "");
              return {
                obtainCategoryEscapes: E,
                prepareRegex: t,
                convertReplacement: n,
                isNCName: function (t) {
                  return r.test(t) && !/:/.test(t);
                },
                isName: function (t) {
                  return r.test(t);
                },
                isNMTOKEN: function (t) {
                  return o.test(t);
                },
                isQName: function (t) {
                  return r.test(t) && /^[^:]+(:[^:]+)?$/.test(t);
                },
                trim: function (t) {
                  return t.replace(/^[ \t\r\n]+|[ \t\r\n]+$/g, "");
                }
              };
            })(),
            Gn =
              ((I = M),
              (k = C),
              (zn = {
                version: "3.0",
                vendor: "Saxonica",
                "vendor-url": "http://www.saxonica.com/",
                "product-name": "Saxon-JS",
                "product-version": "1.2.0",
                "is-schema-aware": "no",
                "supports-serialization": "no",
                "supports-backwards-compatibility": "yes",
                "supports-namespace-axis": "yes",
                "supports-streaming": "no",
                "supports-dynamic-evaluation": "yes",
                "supports-higher-order-functions": "no",
                "xpath-version": "3.1",
                "xsd-version": "1.1"
              }),
              {
                abs: function (t) {
                  t = t[0].next();
                  return null === t ? F.Empty : F.Singleton(t.abs());
                },
                "accumulator-after": function (t, e, n) {
                  t = Hn(t[0], n, "XTDE3340");
                  return F.ForArray(Do.accumAfter(t, e.getCurrentFocus(), e));
                },
                "accumulator-before": function (t, e, n) {
                  t = Hn(t[0], n, "XTDE3340");
                  return F.ForArray(Do.accumBefore(t, e.getCurrentFocus(), e));
                },
                "adjust-date-to-timezone": function (t, e) {
                  return ir(t, "date", e);
                },
                "adjust-dateTime-to-timezone": function (t, e) {
                  return ir(t, "dateTime", e);
                },
                "adjust-time-to-timezone": function (t, e) {
                  return ir(t, "time", e);
                },
                "analyze-string": function (t, c) {
                  var e = b(t[0]),
                    n = c.resultDocument.createDocumentFragment(),
                    l = M.KNOWN_URI.fn,
                    f = c.resultDocument.createElementNS(l, "analyze-string-result");
                  return (
                    n.appendChild(f),
                    "" !== e &&
                      ((n = t[1].next().toString()),
                      (t = t[2] ? t[2].next().toString() : ""),
                      M.analyze(e, n, t, !1, !1).forEach(function (t) {
                        var e;
                        if (t.matching) {
                          for (var n, r, o, i = t.groups, a = c.resultDocument.createElementNS(l, "match"), u = 0, s = 1; s < i.length; s++)
                            i[s] &&
                              (u < (n = i[0].indexOf(i[s], u)) &&
                                ((e = c.resultDocument.createTextNode(i[0].substring(u, n))), a.appendChild(e)),
                              (r = c.resultDocument.createElementNS(l, "group")).setAttribute("nr", s),
                              (o = c.resultDocument.createTextNode(i[s])),
                              r.appendChild(o),
                              a.appendChild(r),
                              (u = n + i[s].length));
                          u < i[0].length && ((e = c.resultDocument.createTextNode(i[0].substring(u, n))), a.appendChild(e));
                        } else
                          (a = c.resultDocument.createElementNS(l, "non-match")),
                            (e = c.resultDocument.createTextNode(t.string)),
                            a.appendChild(e);
                        f.appendChild(a);
                      })),
                    F.Singleton(f)
                  );
                },
                apply: Zn,
                _APPLY: Zn,
                "available-environment-variables": function () {
                  return F.Empty;
                },
                "available-system-properties": function () {
                  var t,
                    e = [];
                  for (t in zn) zn.hasOwnProperty(t) && e.push(x.QName.fromParts("xsl", M.KNOWN_URI.xsl, t));
                  return F.ForArray(e);
                },
                avg: function (t) {
                  var t = t[0].mapOneToOne(I.untypedToDouble),
                    e = t.next();
                  if (null === e) return F.Empty;
                  var e = {
                      sum: e,
                      count: 1
                    },
                    n = gr["a+a"];
                  try {
                    var r = nr(t, e, function (t, e) {
                      return {
                        sum: n(e.sum, t),
                        count: e.count + 1
                      };
                    });
                    return F.Singleton(gr["a/a"](r.sum, x.integer.fromNumber(r.count)));
                  } catch (t) {
                    throw new _("Input to avg() contains a mix of numeric and non-numeric values ", "FORG0006");
                  }
                },
                "base-uri": function (t) {
                  return t[0].mapOneToOne(function (t) {
                    t = k.baseURI(t);
                    return null === t ? null : x.anyURI.fromString(t);
                  });
                },
                boolean: function (t) {
                  return F.oneBoolean(I.ebv(t[0]));
                },
                ceiling: function (t) {
                  t = t[0].next();
                  return F.Singleton(null === t ? null : t.ceiling());
                },
                "codepoint-equal": function (t) {
                  var e = t[0].next(),
                    t = t[1].next();
                  return null === e || null === t ? F.Empty : F.oneBoolean(e.toString() === t.toString());
                },
                "codepoints-to-string": function (t) {
                  return F.oneString(
                    I.codepointsToString(
                      t[0].expand().map(function (t) {
                        return t.toNumber();
                      })
                    )
                  );
                },
                "collation-key": function (t, e, n) {
                  var r = t[0].next(),
                    n = A.getCollatingFn(n, t[1], "collationKey", e);
                  return F.Singleton(x.base64Binary.encodeFromString(n(r.value)));
                },
                collection: function (t, e, n) {
                  var r = e.fixed.options.collectionFinder;
                  if (r && "function" == typeof r) {
                    var o,
                      i = null;
                    if (
                      void 0 ===
                      (a = (i = t[0] && null !== (o = t[0].next()) ? ci.getPlatform().resolveUri(o.toString(), I.staticBaseUri(n, e)) : i)
                        ? r(i)
                        : r())
                    )
                      throw new _("No available collection for supplied URI: " + i, "FODC0002", n);
                    var a = I.convertFromJS(a),
                      u = e.fixed.spaceStripper;
                    if (null !== u) for (var s = 0; s < a.length; s++) a[s] = u(a[s]);
                    return Array.isArray(a) ? F.ForArray(a) : F.Singleton(a);
                  }
                  if (t[0]) throw new _("Unknown collection (no collectionFinder supplied)", "FODC0002", n);
                  return F.Empty;
                },
                compare: function (t, e, n) {
                  var r = t[0].next(),
                    o = t[1].next();
                  return null === r || null === o
                    ? F.Empty
                    : ((n = A.getCollatingFn(n, t[2], "compare", e)), F.oneInteger(n(r.value, o.value)));
                },
                concat: function (t) {
                  return F.oneString(
                    t
                      .map(function (t) {
                        t = t.next();
                        return null === t ? "" : x.string.cast(t);
                      })
                      .join("")
                  );
                },
                contains: function (t, e, n) {
                  var r = b(t[0]),
                    o = b(t[1]),
                    n = A.getCollatingFn(n, t[2], "contains", e);
                  return F.oneBoolean(n(r, o));
                },
                "contains-token": function (t, e, n) {
                  var r = b(t[1]),
                    r = N.trim(r);
                  if ("" !== r)
                    for (
                      var o,
                        i = A.getCollatingFn(n, t[2], "equals", e),
                        a = function (t) {
                          return i(t, r);
                        };
                      null !== (o = t[0].next());

                    )
                      if (
                        0 <=
                        o
                          .toString()
                          .split(/[ \n\r\t]+/)
                          .findIndex(a)
                      )
                        return F.oneBoolean(!0);
                  return F.oneBoolean(!1);
                },
                count: function (t) {
                  return F.oneInteger(t[0].count());
                },
                "current-date": function (t, e) {
                  return F.Singleton(x.date.fromDate(e.fixed.currentDate, -e.fixed.currentDate.getTimezoneOffset()));
                },
                "current-dateTime": function (t, e) {
                  return F.Singleton(x.dateTimeStamp.fromDate(e.fixed.currentDate, -e.fixed.currentDate.getTimezoneOffset()));
                },
                "current-merge-group": function (t, e) {
                  if (null === e.currentMergeGroup) throw _("There is no current merge group", "XTDE3480");
                  if (t[0]) {
                    var t = t[0].next().value,
                      n = e.currentMergeGroup.groups[t];
                    if (n) return F.ForArray(n);
                    throw _("Unknown merge source " + t, "XTDE3490");
                  }
                  return F.ForArray(e.currentMergeGroup.items);
                },
                "current-merge-key": function (t, e) {
                  if (null === e.currentMergeGroup) throw _("There is no current merge group", "XTDE3510");
                  return F.ForArray(e.currentMergeGroup.keys);
                },
                "current-time": function (t, e) {
                  return F.Singleton(x.time.fromDate(e.fixed.currentDate, -e.fixed.currentDate.getTimezoneOffset()));
                },
                data: function (t) {
                  return t[0].mapOneToOne(I.atomize);
                },
                dateTime: function (t) {
                  var e = t[0].next(),
                    t = t[1].next();
                  if (null === e || null === t) return F.Empty;
                  var n = "";
                  if (null !== e.timezoneOffset)
                    if (null === t.timezoneOffset) n = e.tzOffsetToString();
                    else if (null !== t.timezoneOffset && e.timezoneOffset != t.timezoneOffset)
                      throw new _("timezones are incompatible ", "FORG0005");
                  return F.Singleton(x.dateTime.fromString(e.toString().substring(0, 10) + "T" + t.toString() + n));
                },
                "day-from-date": function (t) {
                  return n(t, "getUTCDate");
                },
                "day-from-dateTime": function (t) {
                  return n(t, "getUTCDate");
                },
                "days-from-duration": function (t) {
                  return or(t, 2);
                },
                "deep-equal": function (t, e, n) {
                  n = A.getCollatingFn(n, t[2], "equals", e);
                  return F.oneBoolean(A.deepEqualSequences(t[0], t[1], n));
                },
                "default-collation": function () {
                  return F.oneString(A.codepointCollationUri);
                },
                "default-language": function () {
                  return F.Singleton(x.language.fromString("en"));
                },
                "distinct-values": function (t, e, n) {
                  var n = A.getCollation(n, t[1], e),
                    r = A.trieWithCollation(n);
                  return t[0].filter(function (t) {
                    return !r.containsKey(t) && (r.inSituPut(t, !0), !0);
                  });
                },
                doc: function (t, e, n) {
                  var t = Qn(t, e, n);
                  return null === t
                    ? F.Singleton(null)
                    : ((n = qn(t, e)), null !== (t = e.fixed.spaceStripper) && (n = t(n)), F.Singleton(n));
                },
                "doc-available": function (t, e, n) {
                  var r = Qn(t, e, n);
                  return null === r
                    ? F.oneBoolean(!1)
                    : Vn(function () {
                        qn(r, e);
                      });
                },
                document: function (t, n, e) {
                  var r,
                    o = (o = t[1] && (r = k.baseURI(t[1].next())) ? r : o) || I.staticBaseUri(e, n);
                  return t[0].mapOneToMany(function (t) {
                    var e = k.isNode(t) ? k.baseURI(t) : o;
                    return I.atomize(t).mapOneToOne(function (t) {
                      if (null === e) throw new _("No base URI for document('" + t + "')", "XTDE1162");
                      return qn(ci.getPlatform().resolveUri(t.toString(), e), n);
                    });
                  });
                },
                "document-uri": function (t) {
                  t = t[0].next();
                  return null !== t && t.nodeType == k.DOCUMENT_NODE && t._saxonBaseUri
                    ? F.Singleton(x.anyURI.fromString(t._saxonBaseUri))
                    : F.Empty;
                },
                "element-available": function (t, e, n) {
                  t = "http://www.w3.org/1999/XSL/Transform" == Hn(t[0], n, "XTDE1440").split("}")[0].substring(2);
                  return F.oneBoolean(t);
                },
                "element-with-id": function (t, e) {
                  t = b(t[0]);
                  if (e.noCurrentFocus()) throw new _("No context item for element-with-id()", "XPDY0002");
                  return F.Singleton(k.ownerDocument(e.getCurrentFocus()).getElementById(t));
                },
                empty: function (t) {
                  return F.oneBoolean(null === t[0].next());
                },
                "encode-for-uri": function (t) {
                  t = encodeURIComponent(b(t[0])).replace(/[!'()*]/g, function (t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                  });
                  return F.oneString(t);
                },
                "ends-with": function (t, e, n) {
                  var r = b(t[0]),
                    o = b(t[1]),
                    n = A.getCollatingFn(n, t[2], "endsWith", e);
                  return F.oneBoolean(n(r, o));
                },
                "environment-variable": function () {
                  return F.Empty;
                },
                error: function (t) {
                  if (void 0 === t[0]) throw new _("fn:error() invoked", "FOER0000");
                  var e = (e = t[0].next()) ? e.local : "FOER0000";
                  throw new _(t[1] ? b(t[1]) : "", e);
                },
                "escape-html-uri": function (t) {
                  return Yn(t, function (t) {
                    return t < 32 || 126 < t;
                  });
                },
                "exactly-one": function (t) {
                  t = t[0].expand();
                  if (1 != t.length) throw new _("Required length 1, actual length " + t.length, "FORG0005");
                  return F.Singleton(t[0]);
                },
                exists: function (t) {
                  return F.oneBoolean(null !== t[0].next());
                },
                false: function () {
                  return F.oneBoolean(!1);
                },
                floor: function (t) {
                  return t[0].mapOneToOne(function (t) {
                    return t.floor();
                  });
                },
                "format-date": function (t) {
                  return (
                    Wn("format-date", t),
                    t[2]
                      ? F.oneString(E.formatDateTime("date", t[0].next(), t[1].next().toString(), t[2].next(), t[3].next(), t[4].next()))
                      : F.oneString(E.formatDateTime("date", t[0].next(), t[1].next().toString()))
                  );
                },
                "format-dateTime": function (t) {
                  return (
                    Wn("format-dateTime", t),
                    t[2]
                      ? F.oneString(
                          E.formatDateTime("dateTime", t[0].next(), t[1].next().toString(), t[2].next(), t[3].next(), t[4].next())
                        )
                      : F.oneString(E.formatDateTime("dateTime", t[0].next(), t[1].next().toString()))
                  );
                },
                "format-integer": function (t) {
                  var e = t[0].next();
                  return null === e ? F.oneString("") : F.oneString(E.formatInteger(e, t[1].next().toString()));
                },
                "format-number": function (t, e, n) {
                  var r,
                    o = t[2] ? Hn(t[2], n, "XTDE1260") : "Q{}",
                    n = M.declaringPackage(n, e).decimalFormats[null !== o ? o : "Q{}"];
                  if (n)
                    return (
                      (r = null === (r = t[0].next()) ? Number.NaN : r.toDouble().value),
                      F.oneString(E.formatNumber(r, t[1].next().toString(), n, e))
                    );
                  throw _("Unknown decimal format " + o, "FODF1280");
                },
                "format-time": function (t) {
                  return (
                    Wn("format-time", t),
                    t[2]
                      ? F.oneString(E.formatDateTime("time", t[0].next(), t[1].next().toString(), t[2].next(), t[3].next(), t[4].next()))
                      : F.oneString(E.formatDateTime("time", t[0].next(), t[1].next().toString()))
                  );
                },
                "function-available": function (t, e, n) {
                  var r = !1,
                    n = Hn(t[0], n, "XTDE1400", M.KNOWN_URI.fn),
                    t = t[1] ? t[1].next().toNumber() : -1;
                  return (
                    (r = !(
                      !e.fixed.userFunctions[n + "#" + t] &&
                      ((e = x.QName.fromEQName(n)),
                      (n = ci.getPlatform().readResource("opt/functions.json")),
                      !(n = JSON.parse(n)[e.uri]) || !n[e.local] || (0 <= t && !(0 <= n[e.local].indexOf(t))))
                    )),
                    F.oneBoolean(r)
                  );
                },
                "generate-id": function (t, e) {
                  t = t[0].next();
                  if (null === t) return F.oneString("");
                  for (var n, r = D.ancestorOrSelf(t).expand().reverse(), o = "", i = 0; i < r.length; i++)
                    r[i] instanceof ie
                      ? (o += "N" + r[i].prefix)
                      : r[i].nodeType == k.ATTRIBUTE_NODE
                      ? (o += "A" + k.nameOfNode(r[i]).local)
                      : ((n = D.precedingSibling(r[i]).count() + 1), (o += E.formatInteger(n, i % 2 == 0 ? "a" : "A")));
                  return (o = "d" + k.documentNumber(r[0], e) + o), F.oneString(o);
                },
                "has-children": function (t) {
                  return F.oneBoolean(null !== D.child(t[0].next()).next());
                },
                head: function (t) {
                  return F.Singleton(t[0].next());
                },
                "hours-from-dateTime": function (t) {
                  return n(t, "getUTCHours");
                },
                "hours-from-duration": function (t) {
                  return or(t, 3);
                },
                "hours-from-time": function (t) {
                  return n(t, "getUTCHours");
                },
                id: function (t, e) {
                  var n = b(t[0]).trim(),
                    t = t[1] ? t[1].next() : k.ownerDocument(e.getCurrentFocus());
                  if (!k.isNode(t)) throw new _("Context item is not a node for fn:id()", "XPTY0004");
                  if ((t = t.nodeType != C.DOCUMENT_NODE ? k.ownerDocument(t) : t).nodeType == C.DOCUMENT_NODE)
                    return F.Singleton(t.getElementById(n));
                  if (t.nodeType == C.DOCUMENT_FRAGMENT_NODE)
                    for (var r, o = D.descendant(t); null !== (r = o.next()); )
                      if (r.nodeType == C.ELEMENT_NODE && r.getAttributeNS(M.KNOWN_URI.xml, "id") === n) return F.Singleton(r);
                  return F.Empty;
                },
                idref: function () {
                  return F.Empty;
                },
                "implicit-timezone": function (t, e) {
                  return F.Singleton(x.dayTimeDuration.fromNumberOfMinutes(-e.fixed.currentDate.getTimezoneOffset()));
                },
                "index-of": function (t, e, n) {
                  var r = F.Tracker(t[0]),
                    o = t[1].next(),
                    n = A.getCollatingFn(n, t[2], "equals", e),
                    i = A.eqFn(n);
                  return r.mapOneToOne(function (t) {
                    try {
                      return i(t, o) ? x.integer.fromNumber(r.position) : null;
                    } catch (t) {
                      return null;
                    }
                  });
                },
                innermost: function (t, e, n) {
                  var r = [];
                  return (
                    (I.hasFlag(n, "p") ? t[0] : k.inDocumentOrder(t[0])).forEachItem(function (t) {
                      0 < r.length &&
                        D.ancestor(t).some(function (t) {
                          return t == r[r.length - 1];
                        }) &&
                        r.pop(),
                        r.push(t);
                    }),
                    F.ForArray(r)
                  );
                },
                "in-scope-prefixes": function (t) {
                  t = t[0].next();
                  return F.ForArray(
                    k.inScopeNamespaces(t).map(function (t) {
                      return x.string.fromString(t.prefix);
                    })
                  );
                },
                "insert-before": function (e) {
                  var n = e[1].next().value,
                    t = e[2],
                    r = F.Tracker(e[0]);
                  return n < 1
                    ? F.Join([t, r])
                    : n > r.last()
                    ? F.Join([r, t])
                    : r.mapOneToMany(function (t) {
                        return r.position == n ? F.Join([e[2], F.Singleton(t)]) : F.Singleton(t);
                      });
                },
                "iri-to-uri": function (t) {
                  return Yn(t, function (t, e) {
                    return t <= 32 || 126 < t || /[<>"{}|\\\^`]/.test(e);
                  });
                },
                "json-doc": function (t, e, n) {
                  var r,
                    o = Qn(t, e, n);
                  if (!o) return F.Empty;
                  try {
                    r = $n(o, e);
                  } catch (t) {
                    throw _(t.message, "FOUT1170", n);
                  }
                  o = t[1] ? t[1].next() : null;
                  return F.Singleton(No.parseToMap(r, o));
                },
                "json-to-xml": function (t, e, n) {
                  var r = t[0].next();
                  return r
                    ? ((t = t[1] ? t[1].next() : null),
                      (r = No.parseToXml(r.toString(), t, e)),
                      (t = e.resultDocument.createDocumentFragment()).appendChild(r),
                      (t._saxonBaseUri = I.staticBaseUri(n, e)),
                      F.Singleton(t))
                    : F.Empty;
                },
                key: function (t, e, n) {
                  var r,
                    o,
                    i = Hn(t[0], n, "XTDE1260"),
                    a = M.declaringPackage(n, e),
                    u = a.keys[i];
                  if (!u) throw _("Unknown key " + i, "XTDE1280");
                  function s(t) {
                    return {
                      visibility: "PRIVATE",
                      decl: t,
                      pack: a,
                      actor: t,
                      bindings: t
                        .getAttribute("binds")
                        .split(" ")
                        .map(function (t) {
                          return parseInt(t);
                        })
                    };
                  }
                  if (
                    (t[2]
                      ? ((r = t[2].next()), k.isNode(r) && (o = k.ownerDocument(r)))
                      : ((c = e.getCurrentFocus()), k.isNode(c) && ((r = k.ownerDocument(c)), (o = r))),
                    !o || (o.nodeType !== k.DOCUMENT_NODE && o.nodeType !== k.DOCUMENT_FRAGMENT_NODE))
                  )
                    throw new _("No containing document for key()", "XTDE1270", n);
                  "_saxonIndexes" in o || (o._saxonIndexes = {});
                  var c = o._saxonIndexes;
                  if (!(l = c[i])) {
                    var n = A.getCollation(u[0], null, e),
                      l = A.trieWithCollation(n);
                    c[i] = l;
                    for (
                      var f = function (t) {
                          return F.Join([D.namespace(t), D.attribute(t)]);
                        },
                        m = function (t) {
                          return D.attribute(t);
                        },
                        p = function (t) {
                          return D.namespace(t);
                        },
                        h = function (t) {
                          return (S.focus = F.Solo(o)), g(t, S);
                        },
                        d = 0;
                      d < u.length;
                      d++
                    ) {
                      var g,
                        y,
                        v,
                        x,
                        N = u[d],
                        b = k.getChildElements(N)[0],
                        S = e.newContext(!0),
                        w =
                          ((S.currentComponent = s(N)),
                          (S.focus = F.Solo(o)),
                          (v =
                            "p.nodeSet" == b.tagName
                              ? I.evaluate(k.getChildElements(b)[0], S)
                              : ((g = Jn(b)),
                                (b = N.hasAttribute("flags") ? N.getAttribute("flags") : ""),
                                (v = D.descendantOrSelf(o)),
                                (y = -1 != b.indexOf("a")),
                                (b = -1 != b.indexOf("n")),
                                (v = y || b ? v.mapOneToMany(y && b ? f : y ? m : p) : v).filter(h))),
                          k.getChildElements(N)[1]),
                        T = e.newContext(!0);
                      for (T.currentComponent = s(N); null !== (x = v.next()); ) {
                        T.focus = F.Solo(x);
                        for (var E, O = I.evaluate(w, T); null !== (E = O.next()); )
                          A.itemIsNaN(E) ||
                            (l.containsKey(E)
                              ? -1 == l.get(E).indexOf(x) && (l.get(E).push(x), 1 < u.length) && l.get(E).sort(C.compareDocumentOrder)
                              : l.inSituPut(E, [x]));
                      }
                    }
                  }
                  return t[1].mapOneToMany(function (t) {
                    return l.containsKey(t)
                      ? ((t = F.ForArray(l.get(t))),
                        o == r
                          ? t
                          : t.filter(function (t) {
                              return (
                                null !==
                                D.ancestorOrSelf(t)
                                  .filter(function (t) {
                                    return t == r;
                                  })
                                  .next()
                              );
                            }))
                      : F.Empty;
                  });
                },
                lang: function (t, e) {
                  var e = t[1] ? t[1].next() : e.getCurrentFocus();
                  if (!e) throw new _("No context item for lang()", "XPDY0002");
                  if (k.isNode(e))
                    return (
                      (t = b(t[0]).toLowerCase()),
                      (e = D.ancestorOrSelf(e)
                        .filter(function (t) {
                          return t.nodeType == k.ELEMENT_NODE && t.hasAttribute("xml:lang");
                        })
                        .next())
                        ? ((e =
                            t == (e = e.getAttribute("xml:lang").toLowerCase()) ||
                            (e.length > t.length + 1 && e.substring(0, t.length) == t && "-" == e.charAt(t.length))),
                          F.oneBoolean(e))
                        : F.oneBoolean(!1)
                    );
                  throw new _("Context item is not a node in lang()", "XPTY0004");
                },
                last: function (t, e) {
                  if (e.noCurrentFocus()) throw new _("No context item for last()", "XPDY0002");
                  return F.oneInteger(e.focus.last());
                },
                "load-xquery-module": function () {
                  throw new _("No XQuery processor available", "FOQM0006");
                },
                "local-name": function (t) {
                  t = k.nameOfNode(t[0].next());
                  return F.oneString(t ? t.local : "");
                },
                "local-name-from-QName": function (t) {
                  t = t[0].next();
                  return null === t ? F.Empty : F.Singleton(x.NCName.fromString(t.local));
                },
                "lower-case": function (t) {
                  return F.oneString(b(t[0]).toLowerCase());
                },
                matches: function (t) {
                  var e = b(t[0]),
                    n = t[1].next().toString(),
                    t = t[2] ? t[2].next().toString() : "";
                  if (t.match(/^[smijxq]*$/)) return (n = N.prepareRegex(n, t, e)), F.oneBoolean(0 <= e.search(n));
                  throw new _("Illegal flags for regular expression: " + t, "FORX0001");
                },
                max: rr("max"),
                min: rr("min"),
                "minutes-from-dateTime": function (t) {
                  return n(t, "getUTCMinutes");
                },
                "minutes-from-duration": function (t) {
                  return or(t, 4);
                },
                "minutes-from-time": function (t) {
                  return n(t, "getUTCMinutes");
                },
                "month-from-date": function (t) {
                  return n(t, "getUTCMonth");
                },
                "month-from-dateTime": function (t) {
                  return n(t, "getUTCMonth");
                },
                "months-from-duration": function (t) {
                  return or(t, 1);
                },
                name: function (t) {
                  t = k.nameOfNode(t[0].next());
                  return F.oneString(t ? t.toString() : "");
                },
                "namespace-uri": function (t) {
                  t = k.nameOfNode(t[0].next());
                  return F.Singleton(x.anyURI.fromString(t ? t.uri : ""));
                },
                "namespace-uri-for-prefix": function (t) {
                  var e = b(t[0]),
                    t = t[1].next(),
                    t = "xml" == e ? M.KNOWN_URI.xml : t.lookupNamespaceURI("" === e ? null : e);
                  return t ? F.Singleton(x.anyURI.fromString(t)) : F.Empty;
                },
                "namespace-uri-from-QName": function (t) {
                  t = t[0].next();
                  return null === t ? F.Empty : F.Singleton(x.anyURI.fromString(t.uri));
                },
                nilled: function (t) {
                  t = t[0].next();
                  return t && t.nodeType == k.ELEMENT_NODE ? F.oneBoolean(!1) : F.Empty;
                },
                "node-name": function (t) {
                  return F.Singleton(k.nameOfNode(t[0].next()));
                },
                "normalize-space": function (t) {
                  t = b(t[0]);
                  return F.oneString(M.wsCollapse(t));
                },
                "normalize-unicode": function (t) {
                  if (String.prototype.normalize) {
                    var e = b(t[0]),
                      t = t[1].next().toString().toUpperCase().trim();
                    if ("NFC" == t || "NFD" == t || "NFKC" == t || "NFKD" == t) return F.oneString(e.normalize(t));
                    if ("" === t) return F.oneString(e);
                  }
                  throw new _("normalize-unicode(): not supported on this Javascript platform", "FOCH0003");
                },
                not: function (t) {
                  return F.oneBoolean(!I.ebv(t[0]));
                },
                number: function (t) {
                  return F.Singleton(x.numeric.numberFn(t[0].next()));
                },
                "one-or-more": function (t) {
                  t = F.LookAhead(t[0]);
                  if (null === t.peek()) throw new _("Required length >= 1, actual length zero", "FORG0004");
                  return t;
                },
                outermost: function (t, e, n) {
                  var n = I.hasFlag(n, "p"),
                    t = t[0],
                    r = (n || (t = k.inDocumentOrder(t)), null);
                  return t.filter(function (t) {
                    return (
                      (null === r ||
                        null ===
                          D.ancestor(t)
                            .filter(function (t) {
                              return t === r;
                            })
                            .next()) &&
                      ((r = t), !0)
                    );
                  });
                },
                "parse-ietf-date": function (t) {
                  return t[0].mapOneToOne(function (t) {
                    var e,
                      n,
                      r,
                      o,
                      i,
                      a = function () {
                        throw new _("Invalid IETF date/time " + t.toString(), "FORG0010");
                      },
                      u = function (t) {
                        return 1 == t.length ? "0" + t : t;
                      },
                      s = (s = t.toString().trim().toLowerCase()).replace(
                        /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tue|wed|thu|fri|sat|sun),?\s+/,
                        ""
                      ),
                      s =
                        (/^[a-z]/.test(s)
                          ? null !==
                            (c =
                              /^([a-z]{3})(?:\s*\-\s*|\s+)(\d\d\d?\d?)\s+([\d:\.]+)\s*([a-z]+|[+\-]\d\d?:?(?:\d\d)?(?:\s*\(\s*[a-z]+\s*\))?)?\s+(\d+)$/.exec(
                                s
                              ))
                            ? ((i = c[1]), (e = c[2]), (r = c[3]), (o = c[4]), (n = c[5]))
                            : a()
                          : null !==
                            (c =
                              /^(\d+)(?:\s*\-\s*|\s+)([a-z]{3})(?:\s*\-\s*|\s+)(\d\d\d?\d?)\s+([\d:\.]+)\s*([a-z]+|[+\-]\d\d?:?(?:\d\d)?(?:\s*\(\s*[a-z]+\s*\))?)?$/.exec(
                                s
                              ))
                          ? ((e = c[1]), (i = c[2]), (n = c[3]), (r = c[4]), (o = c[5]))
                          : a(),
                        2 == n.length && (n = "19" + n),
                        "jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec".indexOf(i)),
                      c =
                        (s < 0 && a(),
                        {
                          ut: "Z",
                          utc: "Z",
                          gmt: "Z",
                          est: "-05:00",
                          edt: "-04:00",
                          cst: "-06:00",
                          cdt: "-05:00",
                          mst: "-07:00",
                          mdt: "-06:00",
                          pst: "-08:00",
                          pdt: "-07:00"
                        }),
                      a =
                        (5 == (r = /^[0-9]:/.test(r) ? "0" + r : r).length && (r += ":00"),
                        o &&
                          (((!(i = /([a-z]+)|([+\-]\d\d?:?(?:\d\d)?)(?:\s*\(\s*([a-z]+)\s*\))?$/.exec(o))[3] || i[3] in c) &&
                            (!i[1] || i[1] in c)) ||
                            a(),
                          (o = i[1] || i[2]),
                          (o = /^[+\-][0-9]((:|$)|[0-9]{2}$)/.test(o) ? o.substring(0, 1) + "0" + o.substring(1) : o) in c
                            ? (o = c[o])
                            : 3 == o.length
                            ? (o += ":00")
                            : 4 == o.length
                            ? (o += "00")
                            : 5 == o.length && (o = o.substring(0, 3) + ":" + o.substring(3))),
                        n + "-" + u((s / 4 + 1).toString()) + "-" + u(e) + "T" + r + (o || "Z"));
                    return x.dateTime.fromString(a);
                  });
                },
                "parse-json": function (t) {
                  var e = t[0].next().toString(),
                    t = t[1] ? t[1].next() : null;
                  return F.Singleton(No.parseToMap(e, t));
                },
                "parse-xml": function (t, e, n) {
                  t = t[0].next().toString();
                  try {
                    var r = ci.getPlatform().parseXmlFromString(t);
                    return (r._saxonBaseUri = I.staticBaseUri(n, e)), F.Singleton(r);
                  } catch (t) {
                    throw new _("Misplaced or malformed XML:", "FODC0006");
                  }
                },
                "parse-xml-fragment": function (t, o, i) {
                  return t[0].mapOneToOne(function (t) {
                    var e,
                      n = /^<\?xml(?:\s+version\s*=\s*(['"])1.[0-9]+['"])?\s+encoding\s*=\s*(['"][A-Za-z](?:[A-Za-z0-9._\-])*)['"]\s*\?>/,
                      t = t.toString().replace(n, "");
                    try {
                      e = ci.getPlatform().parseXmlFromString("<z>" + t + "</z>");
                    } catch (t) {
                      throw new _("Misplaced or malformed XML:", "FODC0006");
                    }
                    var r = o.resultDocument.createDocumentFragment();
                    return (
                      D.child(e.documentElement).forEachItem(function (t) {
                        r.appendChild(t);
                      }),
                      (r._saxonBaseUri = I.staticBaseUri(i, o)),
                      r
                    );
                  });
                },
                path: function (t) {
                  return t[0].mapOneToOne(function (t) {
                    var o = "";
                    return (
                      D.ancestorOrSelf(t).forEachItem(function (e) {
                        var n,
                          r = function (e) {
                            return D.precedingSibling(e).filter(function (t) {
                              return e.nodeType == t.nodeType;
                            });
                          },
                          t = function (t) {
                            return 1 + r(t).count();
                          };
                        switch (e.nodeType) {
                          case k.DOCUMENT_NODE:
                          case k.DOCUMENT_FRAGMENT_NODE:
                            break;

                          case k.ELEMENT_NODE:
                            (n = k.nameOfNode(e)),
                              (o =
                                "/" +
                                n.toEQName() +
                                "[" +
                                (1 +
                                  r(e)
                                    .filter(function (t) {
                                      return k.nameOfNode(t).equals(n);
                                    })
                                    .count()) +
                                "]" +
                                o);
                            break;

                          case k.TEXT_NODE:
                            o = "/text()[" + t(e) + "]";
                            break;

                          case k.COMMENT_NODE:
                            o = "/comment()[" + t(e) + "]";
                            break;

                          case k.PROCESSING_INSTRUCTION_NODE:
                            o =
                              "/processing-instruction(" +
                              e.target +
                              ")[" +
                              (1 +
                                r(e)
                                  .filter(function (t) {
                                    return e.target == t.target;
                                  })
                                  .count()) +
                              "]";
                            break;

                          case k.ATTRIBUTE_NODE:
                            o = "/@" + (e.name.indexOf(":") < 0 ? e.name : k.nameOfNode(e).toEQName());
                            break;

                          case k.NAMESPACE_NODE:
                            o = "/namespace::" + ("" !== e.prefix ? e.prefix : "*[Q{" + M.KNOWN_URI.fn + '}local-name()=""]');
                        }
                      }),
                      "" === o && (o = "/"),
                      x.string.fromString(o)
                    );
                  });
                },
                "prefix-from-QName": function (t) {
                  return t[0].mapOneToOne(function (t) {
                    return "" === t.prefix ? null : x.NCName.fromString(t.prefix);
                  });
                },
                position: function (t, e) {
                  if (e.noCurrentFocus()) throw new _("No context item for position()", "XPDY0002");
                  return F.oneInteger(e.focus.position);
                },
                QName: function (t) {
                  var e = t[1].next().value.split(":"),
                    n = 2 == e.length ? e[0] : "",
                    t = b(t[0]);
                  if ("" !== n && "" === t) throw new _("Prefix but no URI for QName()", "FOCA0002");
                  if (!((2 == e.length && "" === n) || ("" !== n && !N.isNCName(n)))) {
                    e = 2 == e.length ? e[1] : e[0];
                    if (N.isNCName(e)) return F.Singleton(x.QName.fromParts(n, t, e));
                  }
                  throw new _("$paramQName not valid for QName()", "FOCA0002");
                },
                "regex-group": function (t, e) {
                  t = t[0].next().toNumber();
                  try {
                    return F.oneString(e.focus.regexGroups[t] || "");
                  } catch (t) {
                    return F.oneString("");
                  }
                },
                remove: function (t) {
                  var e = t[1].next().toNumber(),
                    n = F.Tracker(t[0]);
                  return n.filter(function (t) {
                    return n.position != e;
                  });
                },
                replace: function (t) {
                  var e = b(t[0]),
                    n = t[3] ? t[3].next().toString() : "";
                  if (!n.match(/^[smijxq]*$/)) throw new _("Illegal flags for regular expression: " + n, "FORX0001");
                  var r = N.prepareRegex(t[1].next().toString(), n + "g");
                  if (r.test("")) throw new _("Regular expression matches zero-length string", "FORX0003");
                  t = N.convertReplacement(t[2].next().toString(), n);
                  return F.oneString(e.replace(r, t));
                },
                "resolve-QName": function (t) {
                  var n = t[1].next();
                  return t[0].mapOneToOne(function (e) {
                    try {
                      return k.resolveLexicalQName(n, e.toString(), !0);
                    } catch (t) {
                      throw (t instanceof _ && "FORG0001" == t.code && (t.code = N.isQName(e) ? "FONS0004" : "FOCA0002"), t);
                    }
                  });
                },
                "resolve-uri": function (t, e, n) {
                  n = t[1] ? t[1].next().toString() : I.staticBaseUri(n, e);
                  if (null === (e = t[0].next())) return F.Empty;
                  var r,
                    n = n.replace(/^file:\/(?!\/)/, "file:///"),
                    e = e.toString(),
                    t = C.isAbsoluteURI(e);
                  if (!t && !C.isAbsoluteURI(n)) throw new _("resolve-uri: invalid URI (base=" + n + ", relative=" + e + ")", "FORG0002");
                  if (!ci.getPlatform().inBrowser && /#/.test(n))
                    throw new _("Base URI " + n + " contains a fragment identifier", "FORG0002");
                  try {
                    r = t ? e : ci.getPlatform().resolveUri(e, n).toString();
                  } catch (t) {
                    throw t;
                  }
                  return F.Singleton(x.anyURI.fromString(r));
                },
                reverse: function (t) {
                  return F.ForArray(t[0].expand().slice().reverse());
                },
                root: function (t) {
                  return t[0]
                    .mapOneToMany(function (t) {
                      return D.ancestorOrSelf(t);
                    })
                    .filter(function (t) {
                      return null === k.xdmParentNode(t);
                    });
                },
                round: function (e) {
                  return e[0].mapOneToOne(function (t) {
                    return t.round(e[1] ? e[1].next().value : 0);
                  });
                },
                "round-half-to-even": function (e) {
                  return e[0].mapOneToOne(function (t) {
                    return t.roundHalfToEven(e[1] ? e[1].next().value : 0);
                  });
                },
                "seconds-from-dateTime": function (t) {
                  return n(t, "seconds");
                },
                "seconds-from-duration": function (t) {
                  return or(t, 5);
                },
                "seconds-from-time": function (t) {
                  return n(t, "seconds");
                },
                serialize: function (t) {
                  return F.oneString(I.serialize(t[0], t[1] || void 0));
                },
                snapshot: function (t, o, e) {
                  return t[0].mapOneToOne(function (t) {
                    var e = k.copyItem(t, o, "cm"),
                      r = e;
                    return (
                      D.ancestor(t).forEachItem(function (t) {
                        var n = k
                          .shallowCopy(t, o, "c", function () {
                            return F.Empty;
                          })
                          .next();
                        D.attribute(t).forEachItem(function (t) {
                          var e = "" === t.namespaceURI ? null : t.namespaceURI;
                          n.setAttributeNS(e, t.name, t.value);
                        }),
                          (n._saxonOriginal = t),
                          n.appendChild(r),
                          (r = n);
                      }),
                      e
                    );
                  });
                },
                "starts-with": function (t, e, n) {
                  var r = b(t[0]),
                    o = b(t[1]),
                    n = A.getCollatingFn(n, t[2], "startsWith", e);
                  return F.oneBoolean(n(r, o));
                },
                "static-base-uri": function (t, e, n) {
                  return F.oneString(I.staticBaseUri(n, e));
                },
                "stream-available": function () {
                  return F.oneBoolean(!1);
                },
                string: function (t) {
                  t = t[0].next();
                  if (!t) return F.oneString("");
                  if (I.isArray(t) || I.isMap(t)) throw new _("Input to string() is a function item ", "FOTY0014");
                  return I.atomize(t).mapOneToOne(function (t) {
                    return x.string.cast(t);
                  });
                },
                "string-join": function (t) {
                  for (var e, n = "", r = t[1] ? t[1].next().value : "", o = !0; null !== (e = t[0].next()); )
                    o || (n += r), (n += e.toString()), (o = !1);
                  return F.oneString(n);
                },
                "string-length": function (t) {
                  return F.oneInteger(tr(t[0]).length);
                },
                "string-to-codepoints": function (t) {
                  return F.ForArray(tr(t[0]).map(x.integer.fromNumber));
                },
                subsequence: function (t) {
                  return F.ForArray(er(t[0].expand(), t[1], t[2]));
                },
                substring: function (t) {
                  var e = tr(t[0]);
                  return F.oneString(I.codepointsToString(er(e, t[1], t[2])));
                },
                "substring-after": function (t, e, n) {
                  var r = "",
                    o = b(t[0]),
                    i = b(t[1]);
                  return -1 != (n = A.getCollatingFn(n, t[2], "indexOf", e)(o, i)) && (r = o.substring(n + i.length)), F.oneString(r);
                },
                "substring-before": function (t, e, n) {
                  var r = "",
                    o = b(t[0]),
                    i = b(t[1]);
                  return -1 != (n = A.getCollatingFn(n, t[2], "indexOf", e)(o, i)) && (r = o.substring(0, n)), F.oneString(r);
                },
                sum: function (t) {
                  var e = t[0].mapOneToOne(I.untypedToDouble),
                    n = e.next();
                  return null === n ? (1 == t.length ? F.oneInteger(0) : t[1]) : (gr["a+a"](n, n), F.Singleton(nr(e, n, gr["a+a"])));
                },
                "system-property": function (t, e, n) {
                  var r,
                    t = x.QName.fromEQName(Hn(t[0], n, "XTDE1390"));
                  return t.uri == M.KNOWN_URI.xsl && (r = zn[t.local]), F.oneString(r || "");
                },
                tail: function (t) {
                  var e = F.Tracker(t[0]);
                  return e.filter(function () {
                    return 1 != e.position;
                  });
                },
                "timezone-from-date": function (t) {
                  return n(t, "timezone");
                },
                "timezone-from-dateTime": function (t) {
                  return n(t, "timezone");
                },
                "timezone-from-time": function (t) {
                  return n(t, "timezone");
                },
                tokenize: function (t) {
                  var e,
                    n,
                    r = b(t[0]);
                  return "" === (r = t[1] ? r : M.wsCollapse(r))
                    ? F.Empty
                    : ((e = t[1] ? t[1].next().toString() : "[ \\n\\r\\t]+"),
                      (r = M.analyze(r, e, t[2] ? t[2].next().toString() : "", !1, !0)),
                      (e = t[1] && r[0].matching),
                      (n = r[r.length - 1]),
                      (t = t[1] && n.matching),
                      (n = r
                        .filter(function (t) {
                          return !t.matching;
                        })
                        .map(function (t) {
                          return t.string;
                        })),
                      e && n.unshift(x.string.fromString("")),
                      t && n.push(x.string.fromString("")),
                      F.ForArray(n));
                },
                trace: function (t) {
                  var e = t[0].expand();
                  return P((t[1] ? t[1].next().toString() + ": " : "") + p(e), 1), F.ForArray(e);
                },
                transform: function (t, e, n) {
                  var t = t[0].next(),
                    r = F.oneString("stylesheet-node"),
                    o = F.oneString("source-node"),
                    i = F.oneString("initial-template"),
                    a = F.oneString("initial-mode"),
                    u = F.oneString("stylesheet-parameters"),
                    s = document.implementation.createDocument(null, null, null),
                    r = F.ForArray(t.get(r.next())).peek().cloneNode(!0),
                    c = (r instanceof XMLDocument && (r = r.documentElement), s.appendChild(r), null),
                    o = F.ForArray(t.get(o.next())).peek();
                  if (null !== o)
                    if (
                      (((c = document.implementation.createDocument(null, null, null))._saxonBaseUri = o._saxonBaseUri),
                      o instanceof XMLDocument)
                    )
                      for (var l = o.childNodes, f = 0; f < l.length; f++) c.appendChild(l[f].cloneNode(!0));
                    else (r = o.cloneNode(!0)), c.appendChild(r);
                  (o = F.ForArray(t.get(i.next())).peek()),
                    null !== o && (t.initialTemplate = o.toString()),
                    (r = F.ForArray(t.get(a.next())).peek()),
                    null !== r && (t.initialMode = r.toString()),
                    (t.stylesheetParams = {}),
                    (i = F.ForArray(t.get(u.next())).peek());
                  null !== i && (t.stylesheetParams = M.convertToJS(i, !1, !0)), (t.isDynamicStylesheet = !0);
                  try {
                    ci.internalTransform(s, c, t);
                  } catch (t) {
                    if (t instanceof _ && t.isGlobal) throw new _(t.message, t.code);
                    throw t;
                  }
                  return ci.U.Iter.Singleton(t.principalResult);
                },
                translate: function (t) {
                  var e = tr(t[0]),
                    n = tr(t[1]),
                    r = tr(t[2]),
                    o = [];
                  return (
                    e.forEach(function (t) {
                      var e;
                      -1 != (e = n.indexOf(t)) ? e < r.length && o.push(r[e]) : o.push(t);
                    }),
                    F.oneString(I.codepointsToString(o))
                  );
                },
                true: function () {
                  return F.oneBoolean(!0);
                },
                "type-available": function (t, e, n) {
                  t = Hn(t[0], n, "XTDE1428").split("}");
                  return F.oneBoolean("Q{http://www.w3.org/2001/XMLSchema" == t[0] && (t[1] in x || "untyped" === t[1]));
                },
                unordered: function (t) {
                  return t[0];
                },
                "unparsed-entity-public-id": function () {
                  return F.Empty;
                },
                "unparsed-entity-uri": function () {
                  return F.Empty;
                },
                "unparsed-text": function (t, e, n) {
                  return F.oneString(Kn(t, e, n));
                },
                "unparsed-text-available": function (t, e, n) {
                  return Vn(function () {
                    Kn(t, e, n);
                  });
                },
                "unparsed-text-lines": function (t, e, n) {
                  t = Kn(t, e, n).split(/\r?\n|\r/);
                  return (
                    0 < t.length && "" === t[t.length - 1] && --t.length,
                    F.ForArray(t).mapOneToOne(function (t) {
                      return x.string.fromString(t);
                    })
                  );
                },
                "upper-case": function (t) {
                  return F.oneString(b(t[0]).toUpperCase());
                },
                "uri-collection": function () {
                  return F.Empty;
                },
                "xml-to-json": function (t) {
                  var e = t[1] ? t[1].next() : new y();
                  return t[0].mapOneToOne(function (t) {
                    return x.string.fromString(No.xmlToJson(t, e));
                  });
                },
                "year-from-date": function (t) {
                  return n(t, "getUTCFullYear");
                },
                "year-from-dateTime": function (t) {
                  return n(t, "getUTCFullYear");
                },
                "years-from-duration": function (t) {
                  return or(t, 0);
                },
                "zero-or-one": function (t) {
                  t = t[0].expand();
                  if (1 < t.length) throw new _("Required length 0-1, actual length " + t.length, "FORG0003");
                  return F.Singleton(t[0] || null);
                }
              });
          function jn(t, e, n) {
            var r = e.fixed.documentPool[t];
            if (!r) {
              try {
                r = n();
              } catch (t) {
                r = t;
              }
              e.fixed.documentPool[t] = r;
            }
            if (r instanceof _) throw r;
            return r;
          }
          function qn(e, t) {
            if (0 <= e.indexOf("#")) throw _("Fragments not supported in external document URIs", "FODC0002");
            return jn(e, t, function () {
              var t = ci.getPlatform().readFile(e),
                t = k.obtainDocumentNumber(ci.getPlatform().parseXmlFromString(t));
              return (t._saxonBaseUri = e), t;
            });
          }
          function $n(t, e) {
            if (0 <= t.indexOf("#")) throw _("Fragments not supported in external document URIs", "FODC0002");
            return jn(t, e, function () {
              return ci.getPlatform().readFile(t, "utf-8");
            });
          }
          function Qn(t, e, n) {
            (n = I.staticBaseUri(n, e)), (e = t[0].next());
            return null === e ? null : ci.getPlatform().resolveUri(e.toString(), n);
          }
          function Kn(t, e, n) {
            var r;
            try {
              r = Qn(t, e, n);
            } catch (t) {
              throw _(t.message, "FOUT1170", n);
            }
            if (r.match(/#/)) throw _("Fragment identifier for unparsed-text" + r.toString(), "FOUT1170", n);
            var o = "";
            if (t[1] && "utf-8" != (o = b(t[1]).toLowerCase()) && "utf-16" != o) throw _("Unrecognized encoding " + o, "FOUT1190");
            return null === r
              ? null
              : jn(r, e, function () {
                  try {
                    return ci.getPlatform().readFile(r, o);
                  } catch (t) {
                    throw _("Cannot retrieve unparsed-text " + r.toString(), "FOUT1170", n);
                  }
                });
          }
          function Vn(t) {
            try {
              return t(), F.oneBoolean(!0);
            } catch (t) {
              return F.oneBoolean(!1);
            }
          }
          function Hn(t, e, n, r) {
            t = t.next();
            if (t) {
              t = N.trim(t.toString());
              if (r && N.isNCName(t)) return "Q{" + r + "}" + t;
              r = x.QName.fromString(t, I.stylesheetResolver(e, !1));
              if (null === r) throw new _("Invalid QName " + t, n, e);
              return "Q{" + r.uri + "}" + r.local;
            }
            return null;
          }
          function Yn(t, n) {
            var t = b(t[0]),
              r = "";
            return (
              M.stringToCodepoints(t).forEach(function (t) {
                var e = M.codepointsToString([t]);
                r += n(t, e) ? encodeURIComponent(e) : e;
              }),
              F.oneString(r)
            );
          }
          function Wn(t, e) {
            if (2 != e.length && 5 != e.length) throw new _("Wrong number of arguments (" + e.length + ") for  " + t, "XPST0017");
          }
          function Zn(t) {
            var e = t[0].next(),
              t = t[1].next(),
              t = M.atomize(t.value[0][0]).next();
            return e instanceof M.XdmArray && (t = (x.numeric.matches(t) ? t : x.double.cast(t)).toNumber()), F.ForArray(e.get(t));
          }
          function b(t) {
            t = t.next();
            return t ? t.value : "";
          }
          function tr(t) {
            return I.stringToCodepoints(b(t));
          }
          function er(t, e, n) {
            var r = Math.round(e.next().toNumber()),
              o = n ? r + Math.round(n.next().toNumber()) : t.length + 1;
            return t.filter(function (t, e) {
              return r <= e + 1 && e + 1 < o;
            });
          }
          function nr(t, e, n) {
            var r = e;
            return (
              t.forEachItem(function (t) {
                r = n(t, r);
              }),
              r
            );
          }
          function rr(g) {
            var y =
              "max" == g
                ? function (t) {
                    return 0 < t;
                  }
                : function (t) {
                    return t < 0;
                  };
            function v(t) {
              throw new _(t, "FORG0006");
            }
            return function (t, e, n) {
              var r = t[0],
                n =
                  (I.hasFlag(n, "i") &&
                    (r = r.filter(function (t) {
                      return !A.itemIsNaN(t);
                    })),
                  A.getCollatingFn(n, t[1], "compare", e)),
                o = A.cmpFn(n),
                i = x.untypedAtomic.matches,
                a = x.numeric.matches,
                u = x.double.matches,
                s = x.float.matches,
                c = x.anyURI.matches,
                l = x.string.matches,
                t = x.duration.matches,
                f = x.yearMonthDuration.matches,
                m = x.dayTimeDuration.matches,
                e = x.QName.matches,
                p = x.double.cast,
                h = x.float.cast,
                d = x.string.cast,
                n = (r = r.mapOneToOne(function (t) {
                  return i(t) ? p(t) : t;
                })).next();
              return null === n
                ? F.Empty
                : (e(n) && v(g + "() not defined over QName"),
                  !t(n) || f(n) || m(n) || v(g + "() not defined over mixed duations"),
                  F.Singleton(
                    nr(r, n, function (t, e) {
                      return (
                        ((l(t) && a(e)) || (l(e) && a(t))) && v("Cannot compare string with numeric"),
                        ((f(t) && !f(e)) || (m(t) && !m(e))) && v("Cannot compare mixed duations"),
                        A.itemIsNaN(e)
                          ? u(t)
                            ? p(e)
                            : e
                          : A.itemIsNaN(t)
                          ? u(e)
                            ? p(t)
                            : t
                          : (u(e) && !l(t)
                              ? (t = p(t))
                              : u(t) && !l(e)
                              ? (e = p(e))
                              : s(e) && !l(t)
                              ? (t = h(t))
                              : s(t) && !l(e) && (e = h(e)),
                            c(e) && l(t) ? (e = d(e)) : c(t) && l(e) && (t = d(t)),
                            y(o(t, e)) ? t : e)
                      );
                    })
                  ));
            };
          }
          function n(t, e) {
            var n,
              t = t[0].next();
            return null === t
              ? F.Empty
              : "timezone" == e
              ? null === t.timezoneOffset
                ? F.Empty
                : F.Singleton(x.dayTimeDuration.fromNumberOfMinutes(t.timezoneOffset))
              : "seconds" == e
              ? ((n = t.proxy()), F.oneDecimal(n.getUTCSeconds() + n.getUTCMilliseconds() / 1e3))
              : ((n = t.proxy()[e]()), "getUTCMonth" == e && n++, F.oneInteger(n));
          }
          function or(t, e) {
            t = t[0].next();
            return null === t ? F.Empty : 5 != e ? F.oneInteger(t.parts()[e] * t.signum()) : F.oneDecimal(t.parts()[e] * t.signum());
          }
          function ir(t, n, e) {
            var r = t[0].next();
            if (!r) return F.Empty;
            e = e.fixed.currentDate.getTimezoneOffset();
            if (t[1]) {
              var o,
                t = t[1].next();
              if (null !== (o = null !== t ? t.milliseconds / 6e4 : null) && (o < -840 || 840 < o))
                throw new _("timezone out of bounds " + t, "FODT0003");
            } else o = -e;
            t = r.timezoneOffset;
            return null === t && null === o
              ? F.Singleton(r)
              : null === t && null !== o
              ? i(r.adjustByMinutes(-e - o).UTCdate, o)
              : null !== t && null === o
              ? i(r.adjustByMinutes(e + t).UTCdate, null)
              : null !== t && null !== o
              ? i(r.UTCdate, o)
              : void 0;
            function i(t, e) {
              return F.Singleton(x[n].fromDate(t, e));
            }
          }
          (ar = function (n, t, e, r) {
            var o = !1;
            function i(t) {
              return null === t ? ((o = !0), Number.NaN) : t.toNumber();
            }
            function a() {
              return i(M.evalChild1(r, e).next());
            }
            function u() {
              return i(M.evalChild2(r, e).next());
            }
            function s() {
              switch (n) {
                case "pi":
                  return Math.PI;

                case "exp":
                  return Math.exp(a());

                case "exp10":
                  return Math.pow(10, a());

                case "log":
                  return Math.log(a());

                case "log10":
                  return Math.log(a()) / Math.LN10;

                case "pow":
                  var t = a(),
                    e = u();
                  return (-1 == t && (e == 1 / 0 || e == -1 / 0)) || 1 == t ? 1 : Math.pow(t, e);

                case "sqrt":
                  return Math.sqrt(a());

                case "sin":
                  return Math.sin(a());

                case "cos":
                  return Math.cos(a());

                case "tan":
                  return Math.tan(a());

                case "asin":
                  return Math.asin(a());

                case "acos":
                  return Math.acos(a());

                case "atan":
                  return Math.atan(a());

                case "atan2":
                  return Math.atan2(a(), u());

                default:
                  throw _("Unknown math function " + r.getAttribute("name"), "XPST0017", r);
              }
            }
            var c = s();
            return o ? F.Empty : F.oneDouble(c);
          }),
            (ur = function (t, e, n, a) {
              var r = {
                contains: function (t) {
                  var e = t[0].next(),
                    t = t[1].next();
                  return F.oneBoolean(e.containsKey(t));
                },
                create: function (t) {
                  var e = new y();
                  return (
                    t[0].forEachItem(function (t) {
                      t.forAllPairs(function (t) {
                        e.inSituPut(t.k, t.v);
                      });
                    }),
                    F.Singleton(e)
                  );
                },
                entry: function (t) {
                  var e = new y();
                  return e.inSituPut(t[0].next(), t[1].expand()), F.Singleton(e);
                },
                find: function (t) {
                  var n = [],
                    r = t[1].next();
                  function e(e) {
                    M.isArray(e)
                      ? e.value.forEach(o)
                      : M.isMap(e) &&
                        (e.containsKey(r) && n.push(e.get(r)),
                        e.keys().forEach(function (t) {
                          o(e.get(t));
                        }));
                  }
                  function o(t) {
                    t.forEach(e);
                  }
                  return o(t[0].expand()), F.Singleton(new M.XdmArray(n));
                },
                get: function (t) {
                  var e = t[0].next(),
                    t = t[1].next();
                  return F.ForArray(e.get(t));
                },
                keys: function (t) {
                  t = t[0].next();
                  return F.ForArray(t.keys());
                },
                merge: function (t) {
                  var o = new y(),
                    i = t[1] ? t[1].next() : null;
                  return (
                    t[0].forEachItem(function (t) {
                      t.forAllPairs(function (t) {
                        var e,
                          n,
                          r = x.string.fromString("duplicates"),
                          r = i && i.containsKey(r) ? i.get(r).toString() : "use-first";
                        if (o.containsKey(t.k) && "use-last" != r && "unspecified" != r && "use-any" != r) {
                          if ("reject" == r)
                            throw (
                              ((e = x.string.fromString("duplicates-error-code")),
                              (e = i.containsKey(e) ? i.get(e).toString() : "FOJS0003"),
                              _("Duplicate key value '" + t.k.toString() + "'", e, a))
                            );
                          "combine" == r &&
                            ((n = o.get(t.k)),
                            t.v.forEach(function (t) {
                              n.push(t);
                            }),
                            o.inSituPut(t.k, n));
                        } else o.inSituPut(t.k, t.v);
                      });
                    }),
                    F.Singleton(o)
                  );
                },
                _new: function (t) {
                  var e = new y();
                  return (
                    t[0] &&
                      t[0].forEachItem(function (t) {
                        t.forAllPairs(function (t) {
                          if (e.containsKey(t.k)) throw _("Duplicate key value '" + t.k.toString() + "'", "XQDY0137", a);
                          e.inSituPut(t.k, t.v);
                        });
                      }),
                    F.Singleton(e)
                  );
                },
                put: function (t) {
                  var e = t[0].next(),
                    n = t[1].next(),
                    t = t[2].expand();
                  return F.Singleton(e.put(n, t));
                },
                remove: function (t) {
                  var e = t[0].next();
                  return (
                    t[1].forEachItem(function (t) {
                      e = e.remove(t);
                    }),
                    F.Singleton(e)
                  );
                },
                size: function (t) {
                  var t = t[0].next(),
                    e = 0;
                  return (
                    t.forAllPairs(function () {
                      e++;
                    }),
                    F.oneInteger(e)
                  );
                },
                "untyped-contains": function (t) {
                  var e = t[0].next(),
                    t = t[1].next();
                  return F.oneBoolean(e.containsKey(t));
                }
              };
              if (r[t]) return r[t](e, n, a);
              throw _("Unknown map function: " + t, "SXJS0003", a);
            }),
            (sr = function (t, e, n, i) {
              function r(t, e) {
                if (t < 1 || e < t) throw _("Array index (" + t + ") out of bounds (1 to " + e + ")", "FOAY0001", i);
              }
              function a(t) {
                return t[0].next().value;
              }
              function o(t) {
                return t[1].next().toNumber();
              }
              function u(t) {
                return F.Singleton(new M.XdmArray(t));
              }
              var s = {
                append: function (t) {
                  return u(a(t).concat([t[1].expand()]));
                },
                flatten: function (t) {
                  return M.flatten(t[0]);
                },
                "_from-sequence": function (t) {
                  var e = [];
                  return (
                    t[0].forEachItem(function (t) {
                      e.push([t]);
                    }),
                    u(e)
                  );
                },
                get: function (t) {
                  var e = a(t),
                    t = o(t);
                  return r(t, e.length), F.ForArray(e[t - 1]);
                },
                head: function (t) {
                  t = a(t);
                  return r(1, t.length), F.ForArray(t[0]);
                },
                "insert-before": function (t) {
                  var e = a(t),
                    n = o(t),
                    t = (r(n, e.length + 1), t[2].expand());
                  return u(
                    e
                      .slice(0, n - 1)
                      .concat([t])
                      .concat(e.slice(n - 1))
                  );
                },
                join: function (t) {
                  var e = [];
                  return (
                    t[0].forEachItem(function (t) {
                      t.value.forEach(function (t) {
                        e.push(t);
                      });
                    }),
                    u(e)
                  );
                },
                put: function (t) {
                  var e = a(t),
                    n = o(t),
                    t = (r(n, e.length), t[2].expand());
                  return u(
                    e
                      .slice(0, n - 1)
                      .concat([t])
                      .concat(e.slice(n))
                  );
                },
                remove: function (t) {
                  var e = a(t),
                    n = [];
                  return (
                    t[1].forEachItem(function (t) {
                      t = t.toNumber();
                      r(t, e.length), n.push(t - 1);
                    }),
                    u(
                      e.filter(function (t, e) {
                        return n.indexOf(e) < 0;
                      })
                    )
                  );
                },
                reverse: function (t) {
                  return u(a(t).slice().reverse());
                },
                size: function (t) {
                  return F.oneInteger(a(t).length);
                },
                sort: function (r) {
                  var o = A.getCollation(i, r[1], n);
                  function t(t, e) {
                    var n = function (t) {
                      return F.ForArray(t).mapOneToMany(M.atomize);
                    };
                    return r[1] ? A.lexicographicCompare(n(t), n(e), o) : A.lexicographicCompare(n(t), n(e));
                  }
                  return u(a(r).slice().sort(t));
                },
                subarray: function (t) {
                  var e = a(t),
                    n = o(t),
                    t = (r(n, e.length + 1), t[2] ? t[2].next().toNumber() : e.length - n + 1);
                  return _.test(t < 0, "Length is negative", "FOAY0002"), r(n + t, e.length + 1), u(e.slice(n - 1, n + t - 1));
                },
                tail: function (t) {
                  t = a(t);
                  return r(1, t.length), u(t.slice(1));
                },
                "_to-sequence": function (t) {
                  var e = [];
                  return (
                    a(t).forEach(function (t) {
                      t.forEach(function (t) {
                        e.push(t);
                      });
                    }),
                    F.ForArray(e)
                  );
                }
              };
              if (s[t]) return s[t](e, n, i);
              throw _("Unknown array function: " + t, "SXJS0003", i);
            }),
            (cr = function (t, e, n, o) {
              function u(t, e) {
                for (var n = t, r = 0; r < e.length; r++) {
                  try {
                    n = n[e[r]];
                  } catch (t) {
                    if (null !== t.code) throw t;
                    throw _("Failed to get property " + e[r], "SXJS0007", o);
                  }
                  if (void 0 === n) return;
                }
                return n;
              }
              function i(e, t, n) {
                var r;
                try {
                  r = e.apply(n, t);
                } catch (t) {
                  if (null !== t.code) throw t;
                  throw _("Failed to call method " + e, "SXJS0007", o);
                }
                return null == r ? F.Empty : ((n = M.convertFromJS(r)), Array.isArray(n) ? F.ForArray(n) : F.Singleton(n));
              }
              function s(t) {
                return t instanceof M.JSValue ? t.value : t;
              }
              var r = {
                apply: function (t) {
                  var e = s(t[0].next());
                  if ("function" != typeof e) throw _("ixsl:apply: first argument is not a function", "SXJS0007", o);
                  return i(e, M.convertToJS(t[1].next()), null);
                },
                call: function (t) {
                  var e = s(t[0].next()),
                    n = t[1].next().toString(),
                    r = u(e, n.split("."));
                  if (void 0 === r) throw _("ixsl:call: object method '" + n + "' not found", "SXJS0007", o);
                  if ("function" != typeof r) throw _("ixsl:call: property '" + n + "' is not a function", "SXJS0007", o);
                  return i(r, M.convertToJS(t[2].next()), e);
                },
                eval: function (t) {
                  (t = t[0].next().toString()), (t = new Function("return " + t)), (t = M.convertFromJS(t()));
                  return Array.isArray(t) ? F.ForArray(t) : F.Singleton(t);
                },
                event: function (t, e) {
                  return null === e.currentEvent ? F.Empty : F.Singleton(M.convertFromJS(e.currentEvent));
                },
                get: function (t) {
                  var e = s(t[0].next());
                  return null === e
                    ? F.Empty
                    : void 0 === (t = u(e, (e = t[1].next().toString()).split(".")))
                    ? (P("Warning ixsl:get: object property '" + e + "' not found", 1), F.Empty)
                    : ((e = M.convertFromJS(t)), Array.isArray(e) ? F.ForArray(e) : F.Singleton(e));
                },
                location: function () {
                  return F.Singleton(M.convertFromJS(window.location.toString()));
                },
                page: function () {
                  return F.Singleton(M.convertFromJS(window.document));
                },
                "query-params": function () {
                  for (
                    var t,
                      e = /\+/g,
                      n = /([^&=]+)=?([^&]*)/g,
                      r = function (t) {
                        return x.string.fromString(decodeURIComponent(t.replace(e, " ")));
                      },
                      o = window.location.search.substring(1),
                      i = new y();
                    null !== (t = n.exec(o));

                  ) {
                    var a = i.get(r(t[1]));
                    a.push(r(t[2])), i.inSituPut(r(t[1]), a);
                  }
                  return F.Singleton(i);
                },
                source: function (t, e) {
                  return null === e.fixed.globalContextItem ? F.Empty : F.Singleton(M.convertFromJS(e.fixed.globalContextItem));
                },
                style: function (t) {
                  for (
                    var t = t[0].next(), e = t instanceof Element ? window.getComputedStyle(t) : {}, n = new y(), r = 0;
                    r < e.length;
                    r++
                  ) {
                    var o = e.item(r),
                      i = e.getPropertyValue(o);
                    null == i
                      ? n.inSituPut(x.string.fromString(o), [])
                      : n.inSituPut(x.string.fromString(o), [x.string.fromString(i.toString())]);
                  }
                  return F.Singleton(n);
                },
                window: function () {
                  return F.Singleton(M.convertFromJS(window));
                },
                "remove-attribute": function (t, e, n) {
                  (t = t[0].next().toString()), (t = x.QName.fromString(t, M.stylesheetResolver(n, !1)));
                  if (e.noCurrentFocus()) throw _("No context item for ixsl:remove-attribute", "SXJS0007", n);
                  e = e.getCurrentFocus();
                  if (e instanceof Element && e.ownerDocument == window.document) return e.removeAttribute(t.local), F.Empty;
                  throw _("Context item for ixsl:remove-attribute must be an element in the HTML page", "SXJS0007", n);
                },
                "schedule-action": function () {
                  throw _("ixsl:schedule-action - shouldn't be here", "SXJS0007", o);
                },
                "set-attribute": function (t, e, n) {
                  var r = t[0].next().toString(),
                    t = t[1].next().toString(),
                    o = x.QName.fromString(r, M.stylesheetResolver(n, !1));
                  if (null === o) throw _("Invalid attribute name " + r, "XTDE1260");
                  if (e.noCurrentFocus()) throw _("No context item for ixsl:set-attribute", "SXJS0007", n);
                  r = e.getCurrentFocus();
                  if (r instanceof Element && r.ownerDocument == window.document) return r.setAttribute(o.local, t), F.Empty;
                  throw _("Context item for ixsl:set-attribute must be an element in the HTML page", "SXJS0007", n);
                },
                "set-property": function (t, e, n) {
                  var r = t[0].next().toString(),
                    o = M.convertToJS(t[1].next()),
                    t = s(t[2].next()),
                    i = r.split("."),
                    a = i.pop(),
                    t = u(t, i);
                  return (
                    void 0 === t || "" === t ? P("Warning ixsl:set-property: '" + r + "' not found for supplied object", 1) : (t[a] = o),
                    F.Empty
                  );
                },
                "set-style": function (t, e, n) {
                  var r = t[0].next().toString(),
                    o = M.convertToJS(t[1].next()),
                    t = t[2] ? t[2].next() : e.getCurrentFocus();
                  if (t)
                    return (
                      t instanceof Element && "style" in t
                        ? (t.style[r] = o)
                        : P("Warning ixsl:set-style: style '" + r + "' cannot be set for supplied object", 1),
                      F.Empty
                    );
                  throw _("No context item for ixsl:set-style", "SXJS0007", n);
                }
              };
              if (r[t]) return r[t](e, n, o);
              throw _("Unknown ixsl function: " + t, "SXJS0003", o);
            }),
            (lr = function (t, e, o, i) {
              var n = {
                apply: Gn.apply,
                "compile-XPath": function (t) {
                  var e,
                    n,
                    r = t[0].next().toString();
                  return (
                    1 < t.length && (e = null !== (e = t[1].next()) ? M.convertToJS(e) : {}),
                    2 < t.length && (n = t[2]),
                    ci.XPath.compile(r, e, n, i, o)
                  );
                },
                "discard-document": function (t, e, n) {
                  var r,
                    t = t[0].next();
                  if (null !== t && t.nodeType == C.DOCUMENT_NODE && t._saxonBaseUri)
                    return (t = t._saxonBaseUri), (r = e.fixed.documentPool[t]), delete e.fixed.documentPool[t], F.Singleton(r);
                  throw new _("Node supplied to saxon:discard-document() is not a document node", "XPTY0004", n);
                },
                doc: Gn.doc,
                "dynamic-error-info": function (t) {
                  var e = o.currentError;
                  if (null === e) return F.Empty;
                  var n = t[0].next().toString();
                  switch (n) {
                    case "description":
                      return F.oneString(e.message);

                    case "code":
                      return F.Singleton(x.QName.fromParts("err", "http://www.w3.org/2005/xqt-errors", e.code));

                    case "value":
                      return F.Empty;

                    case "module":
                      return F.oneString(e.xsltModule);

                    case "line-number":
                      return F.oneInteger(e.xsltLineNr);

                    case "column-number":
                      return F.oneInteger(-1);

                    default:
                      throw _("unknown error info field " + n, "SXJS0003");
                  }
                },
                "parse-XPath": function (t) {
                  var e,
                    n = t[0].next().toString(),
                    r = "parse";
                  return 1 < t.length && (r = t[1].next().toString()), 2 < t.length && (e = t[2]), ci.XPath.parse(n, r, e);
                },
                timestamp: function (t) {
                  return F.Singleton(x.dateTimeStamp.fromDate(new Date(), -o.fixed.currentDate.getTimezoneOffset()));
                }
              };
              if (n[t]) return n[t](e, o, i);
              throw _("Unknown saxon function: " + t, "SXJS0003", i);
            });
          var ar,
            ur,
            sr,
            cr,
            lr,
            fr,
            mr,
            S,
            pr,
            hr,
            dr = function (t, e, n, r, o) {
              switch (t) {
                case M.KNOWN_URI.fn + "/math":
                  return ar(e, n, r, o);

                case M.KNOWN_URI.fn + "/map":
                  return ur(e, n, r, o);

                case M.KNOWN_URI.fn + "/array":
                  return sr(e, n, r, o);

                case M.KNOWN_URI.ixsl:
                  return cr(e, n, r, o);

                case M.KNOWN_URI.saxon:
                  return lr(e, n, r, o);

                default:
                  throw _("Unknown namespace " + t, "SXJS0003", o);
              }
            },
            gr =
              ((fr = x.double),
              (mr = x.decimal),
              (S = x.integer),
              (pr = x.float),
              (hr = {
                "d+d": function (t, e) {
                  (t = t.toNumber()), (e = e.toNumber());
                  return fr.fromNumber(t + e);
                },
                "d-d": function (t, e) {
                  (t = t.toNumber()), (e = e.toNumber());
                  return fr.fromNumber(t - e);
                },
                "d*d": function (t, e) {
                  (t = t.toNumber()), (e = e.toNumber());
                  return fr.fromNumber(t * e);
                },
                "d/d": function (t, e) {
                  (t = t.toNumber()), (e = e.toNumber());
                  return fr.fromNumber(t / e);
                },
                "d%d": function (t, e) {
                  var n = t.toNumber(),
                    e = e.toNumber();
                  return isNaN(n) || isNaN(e) || n == 1 / 0 || n == -1 / 0 || 0 === e
                    ? fr.fromNumber(NaN)
                    : e == 1 / 0 || e == -1 / 0 || 0 === n
                    ? t
                    : fr.fromNumber(n % e);
                },
                "d~d": function (t, e) {
                  try {
                    var n = t.toNumber(),
                      r = e.toNumber(),
                      o = fr.fromNumber(Math.trunc(n / r));
                    return (o != 1 / 0 && o != -1 / 0 && !isNaN(o)) || xr(), yr(o) ? S.fromNumber(o) : o;
                  } catch (t) {
                    xr();
                  }
                },
                "f+f": function (t, e) {
                  (t = t.toNumber()), (e = e.toNumber());
                  return pr.fromNumber(t + e);
                },
                "f-f": function (t, e) {
                  (t = t.toNumber()), (e = e.toNumber());
                  return pr.fromNumber(t - e);
                },
                "f*f": function (t, e) {
                  (t = t.toNumber()), (e = e.toNumber());
                  return pr.fromNumber(t * e);
                },
                "f/f": function (t, e) {
                  (t = t.toNumber()), (e = e.toNumber());
                  return pr.fromNumber(t / e);
                },
                "f%f": function (t, e) {
                  var n = t.toNumber(),
                    e = e.toNumber();
                  return isNaN(n) || isNaN(e) || n == 1 / 0 || n == -1 / 0 || 0 === e
                    ? pr.fromNumber(NaN)
                    : e == 1 / 0 || e == -1 / 0 || 0 === n
                    ? t
                    : (((t = pr.fromNumber(n % e)) != 1 / 0 && t != -1 / 0 && !isNaN(t)) || xr(), t);
                },
                "f~f": function (t, e) {
                  try {
                    var n = t.toNumber(),
                      r = e.toNumber(),
                      o = pr.fromNumber(Math.trunc(n / r));
                    return (o != 1 / 0 && o != -1 / 0 && !isNaN(o)) || xr(), yr(o) ? S.fromNumber(o) : o;
                  } catch (t) {
                    xr();
                  }
                },
                "i+i": function (t, e) {
                  var n = t.toNumber() + e.toNumber();
                  return yr(n) ? S.fromNumber(n) : S.fromBig(Big(t.toBig().plus(e.toBig())));
                },
                "i-i": function (t, e) {
                  var n = t.toNumber() - e.toNumber();
                  return yr(n) ? S.fromNumber(n) : S.fromBig(Big(t.toBig().minus(e.toBig())));
                },
                "i*i": function (t, e) {
                  var n = t.toNumber() * e.toNumber();
                  return yr(n) ? S.fromNumber(n) : S.fromBig(Big(t.toBig().times(e.toBig())));
                },
                "i/i": function (t, e) {
                  try {
                    var n = t.toBig(),
                      r = e.toBig();
                    return mr.fromBig(n.div(r));
                  } catch (t) {
                    xr();
                  }
                },
                "i%i": function (t, e) {
                  var n = t.toNumber(),
                    r = e.toNumber();
                  return isNaN(n) || isNaN(r) || n == 1 / 0 || n == -1 / 0 || 0 === r
                    ? S.fromNumber(NaN)
                    : r == 1 / 0 || r == -1 / 0 || 0 === n
                    ? t
                    : (((r = t.toNumber() % e.toNumber()) != 1 / 0 && r != -1 / 0 && !isNaN(r)) || xr(),
                      yr(r) ? S.fromNumber(r) : S.fromBig(Big(t.toBig().mod(e.toBig()))));
                },
                "i~i": function (t, e) {
                  var n = t.toNumber() / e.toNumber();
                  return (
                    (n != 1 / 0 && n != -1 / 0 && !isNaN(n)) || xr(),
                    yr(n) ? S.fromNumber(Math.trunc(n)) : S.fromBig(Big(t.toBig().div(e.toBig())).round(0, 0))
                  );
                },
                "c+c": function (t, e) {
                  var n = t.toBig(),
                    r = e.toBig();
                  return vr(t, e).fromBig(n.plus(r));
                },
                "c-c": function (t, e) {
                  var n = t.toBig(),
                    r = e.toBig();
                  return vr(t, e).fromBig(n.minus(r));
                },
                "c*c": function (t, e) {
                  var n = t.toBig(),
                    r = e.toBig();
                  return vr(t, e).fromBig(n.times(r));
                },
                "c/c": function (t, e) {
                  try {
                    var n = t.toBig(),
                      r = e.toBig();
                    return mr.fromBig(n.div(r));
                  } catch (t) {
                    xr();
                  }
                },
                "c%c": function (t, e) {
                  try {
                    var n = t.toBig(),
                      r = e.toBig();
                    return mr.fromBig(n.mod(r));
                  } catch (t) {
                    xr();
                  }
                },
                "c~c": function (t, e) {
                  try {
                    var n = t.toBig(),
                      r = e.toBig(),
                      o = n.div(r).round(0, 0);
                    return yr(o) ? S.fromNumber(o) : mr.fromBig(o);
                  } catch (t) {
                    xr();
                  }
                },
                "a+a": function (t, e) {
                  return br(t, e, "+");
                },
                "a-a": function (t, e) {
                  return br(t, e, "-");
                },
                "a*a": function (t, e) {
                  return br(t, e, "*");
                },
                "a/a": function (t, e) {
                  return br(t, e, "/");
                },
                "a%a": function (t, e) {
                  return br(t, e, "%");
                },
                "a~a": function (t, e) {
                  return br(t, e, "~");
                },
                "u+u": function (t, e) {
                  var n = x.dayTimeDuration,
                    r = x.yearMonthDuration;
                  return (
                    (n.matches(t) && n.matches(e)) || (r.matches(t) && r.matches(e)) || Nr(t, e, "+"),
                    r.matches(t)
                      ? r.fromMonthsMilliseconds(t.months + e.months, 0)
                      : n.fromMonthsMilliseconds(0, t.milliseconds + e.milliseconds)
                  );
                },
                "u-u": function (t, e) {
                  var n = x.dayTimeDuration,
                    r = x.yearMonthDuration;
                  return (
                    (n.matches(t) && n.matches(e)) || (r.matches(t) && r.matches(e)) || Nr(t, e, "-"),
                    r.matches(t)
                      ? r.fromMonthsMilliseconds(t.months - e.months, 0)
                      : n.fromMonthsMilliseconds(0, t.milliseconds - e.milliseconds)
                  );
                },
                "u*n": function (t, e) {
                  var n = x.dayTimeDuration,
                    r = x.yearMonthDuration,
                    e = (n.matches(t) || r.matches(t) || Nr(t, e, "*"), e.toNumber());
                  if (e == 1 / 0 || e == -1 / 0) throw new _("Cannot multiply duration by +/-INF", "FODT0002");
                  if (isNaN(e)) throw new _("Cannot multiply duration by NaN", "FOCA0005");
                  return r.matches(t)
                    ? r.fromMonthsMilliseconds(Math.round(t.months * e), 0)
                    : n.fromMonthsMilliseconds(0, Math.round(t.milliseconds * e));
                },
                "n*u": function (t, e) {
                  return gr["u*n"](e, t);
                },
                "u/n": function (t, e) {
                  var n = x.dayTimeDuration,
                    r = x.yearMonthDuration,
                    e =
                      (n.matches(t) || r.matches(t) || Nr(t, e, "/"),
                      r.matches(t) ? t.months / e.toNumber() : t.milliseconds / e.toNumber());
                  return (
                    (e != 1 / 0 && e != -1 / 0 && !isNaN(e)) || xr("FODT0002"),
                    r.matches(t) ? r.fromMonthsMilliseconds(Math.round(e), 0) : n.fromMonthsMilliseconds(0, Math.round(e))
                  );
                },
                "u/u": function (t, e) {
                  var n = x.dayTimeDuration,
                    r = x.yearMonthDuration,
                    n =
                      ((n.matches(t) && n.matches(e)) || (r.matches(t) && r.matches(e)) || Nr(t, e, "/"),
                      new Big(r.matches(t) ? t.months : t.milliseconds)),
                    t = new Big(r.matches(e) ? e.months : e.milliseconds);
                  try {
                    return mr.fromBig(n.div(t));
                  } catch (t) {
                    xr();
                  }
                },
                "t+u": function (t, e) {
                  var n = x.dayTimeDuration,
                    r = x.yearMonthDuration;
                  return (
                    n.matches(e) || r.matches(e) || Nr(t, e, "+"),
                    n.matches(e)
                      ? x[t.type].fromDate(new Date(t.UTCdate.getTime() + e.milliseconds), t.timezoneOffset)
                      : t.addMonths(e.months)
                  );
                },
                "u+t": function (t, e) {
                  return gr["t+u"](e, t);
                },
                "t-u": function (t, e) {
                  var n = x.dayTimeDuration,
                    r = x.yearMonthDuration;
                  return (
                    n.matches(e) || r.matches(e) || Nr(t, e, "-"),
                    n.matches(e)
                      ? x[t.type].fromDate(new Date(t.UTCdate.getTime() - e.milliseconds), t.timezoneOffset)
                      : t.addMonths(-e.months)
                  );
                },
                "t-t": function (t, e) {
                  return x.dayTimeDuration.fromMonthsMilliseconds(0, t.UTCdate.getTime() - e.UTCdate.getTime());
                }
              }));
          function yr(t) {
            return Math.abs(t) < Math.pow(2, 52);
          }
          function vr(t, e) {
            return S.matches(t) && S.matches(e) ? S : mr;
          }
          function xr(t) {
            throw new _("Division by zero", t || "FOAR0001");
          }
          function Nr(t, e, n) {
            throw new _("Arithmetic operation '" + n + "' not available for operands " + t.type + " and " + e.type, "XPTY0004");
          }
          function br(t, e, n) {
            function r(t) {
              return x.dateTime.matches(t) || x.date.matches(t) || x.time.matches(t);
            }
            var o,
              i,
              a,
              u = x.dayTimeDuration,
              s = x.yearMonthDuration;
            return (
              (u.matches(t) || s.matches(t)) && x.numeric.matches(e)
                ? ((a = "u" + n + "n"), (o = t.type), (i = e.type))
                : (u.matches(e) || s.matches(e)) && x.numeric.matches(t)
                ? ((a = "n" + n + "u"), (o = t.type), (i = e.type))
                : S.matches(t) && S.matches(e)
                ? ((a = "i" + n + "i"), (o = i = "integer"))
                : fr.matches(t) || fr.matches(e)
                ? ((a = "d" + n + "d"), (o = i = "double"))
                : pr.matches(t) || pr.matches(e)
                ? ((a = "f" + n + "f"), (o = i = "float"))
                : mr.matches(t) || mr.matches(e)
                ? ((a = "c" + n + "c"), (o = i = "decimal"))
                : r(t) && r(e)
                ? ((a = "t" + n + "t"), (o = t.type), (i = e.type))
                : r(t) && (u.matches(e) || s.matches(e))
                ? ((a = "t" + n + "u"), (o = t.type), (i = e.type))
                : (u.matches(t) || s.matches(t)) && r(e)
                ? ((a = "u" + n + "t"), (o = t.type), (i = e.type))
                : (u.matches(t) && u.matches(e)) || (s.matches(t) && s.matches(e))
                ? ((a = "u" + n + "u"), (o = i = t.type))
                : Nr(n, t, e),
              hr[a] || Nr(n, t, e),
              hr[a](M.promote(t, o), M.promote(e, i))
            );
          }
          (w = M),
            (Sr = C),
            (wr = {
              "decimal-separator": "46",
              "grouping-separator": "44",
              digit: "35",
              "minus-sign": "45",
              percent: "37",
              "per-mille": "8240",
              "zero-digit": "48",
              "exponent-separator": "101",
              "pattern-separator": "59",
              infinity: "Infinity",
              NaN: "NaN"
            }),
            (Tr = {
              Y: "getUTCFullYear",
              M: "getUTCMonth",
              D: "getUTCDate",
              F: "getUTCDay",
              H: "getUTCHours",
              m: "getUTCMinutes",
              s: "getUTCSeconds",
              f: "getUTCMilliseconds"
            }),
            (Er = {
              d: no,
              W: oo,
              w: io,
              h: ao,
              P: uo,
              E: function () {
                return "AD";
              }
            });
          var w,
            Sr,
            wr,
            Tr,
            Er,
            Or,
            Ar,
            Cr,
            Dr,
            _r,
            Mr,
            Fr,
            T,
            Ir,
            E = {
              xslNumber: Xr,
              nodeNum: kr,
              numSeqFmt: Ur,
              formatInteger: Yr,
              addGroupingSeparators: function (t, e, n) {
                for (var r = "", o = 0; o < t.length; o++)
                  (r += t.charAt(o)), (1 == n || (t.length - o) % n == 1) && o < t.length - 1 && (r += e);
                return r;
              },
              formatNumber: lo,
              formatDateTime: function (e, n, t, r, o, i) {
                function a(t) {
                  return "[[" == t ? "[" : "]]" == t ? "]" : co(e, n, t.substring(1, t.length - 1).replace(/\s+/g, ""), r, o, i);
                }
                if (/\[(\[|[^\]]*\])|\]\]/g.test(t)) return t.replace(/\[(\[|[^\]]*\])|\]\]/g, a);
                throw _("Date format picture doesn't match required syntax", "FOFD1340");
              }
            };
          function kr(t, e) {
            return Pr(t.getAttribute("level"), w.argRole(t, "select"), w.argRole(t, "count"), w.argRole(t, "from"), e);
          }
          function Pr(t, e, n, r, o) {
            var i;
            if (e) i = w.evaluate(e, o).next();
            else {
              if (o.noCurrentFocus()) throw _("No context item in Numberer", "SXJS0004", e);
              i = o.getCurrentFocus();
            }
            var a,
              u,
              s,
              c = Sr.nameOfNode(i),
              l = function (t) {
                return null === Sr.xdmParentNode(t);
              },
              f = function (t) {
                return t.nodeType == i.nodeType && (null === c || Sr.nameOfNode(t).equals(c));
              },
              m = f;
            switch (
              (null !== n &&
                ((a = Jn(n)),
                (m = function (t) {
                  return a(t, o);
                })),
              (s =
                null === r
                  ? l
                  : ((u = Jn(r)),
                    function (t) {
                      return l(t) || u(t, o);
                    })),
              t)
            ) {
              case "simple":
                return (y = D.precedingSibling(i).filter(f)), F.oneInteger(y.count() + 1);

              case "single":
                return (
                  (p = D.ancestorOrSelf(i).filter(m).next()),
                  (h = D.ancestorOrSelf(i).filter(s).next()),
                  null ===
                  (d =
                    null !== p &&
                    null !==
                      D.ancestorOrSelf(p)
                        .filter(function (t) {
                          return Sr.isSameNode(t, h);
                        })
                        .next()
                      ? p
                      : null)
                    ? F.Empty
                    : ((y = D.precedingSibling(d).filter(m)), F.oneInteger(y.count() + 1))
                );

              case "multi":
                var p = F.ForArray(D.ancestorOrSelf(i).filter(m).expand().reverse()),
                  h = D.ancestorOrSelf(i).filter(s).next(),
                  d = p.filter(function (t) {
                    return (
                      null !==
                      D.ancestorOrSelf(t)
                        .filter(function (t) {
                          return Sr.isSameNode(t, h);
                        })
                        .next()
                    );
                  }),
                  g = x.integer.fromNumber;
                return d.mapOneToOne(function (t, e) {
                  return g(D.precedingSibling(t).filter(m).count() + 1);
                });

              case "any":
                var y = function (t, e) {
                    return Sr.compareDocumentOrder(e, t);
                  },
                  y =
                    ((p = F.Union(D.preceding(i).filter(m), D.ancestorOrSelf(i).filter(m), y)),
                    null === (h = F.Union(D.preceding(i).filter(s), D.ancestorOrSelf(i).filter(s), y).next()) &&
                      M.internalError("from pattern selected empty"),
                    (d = p.filter(function (t) {
                      return 0 <= Sr.compareDocumentOrder(t, h);
                    })).count());
                return 0 === y ? F.Empty : F.oneInteger(y);

              default:
                M.internalError("unknown xsl:number/@level " + t);
            }
          }
          function Ur(t, e) {
            var n = w.argRole(t, "value"),
              r = w.argRole(t, "format"),
              o = w.evaluateIfPresent(w.argRole(t, "gpSep"), e).next(),
              i = w.evaluateIfPresent(w.argRole(t, "gpSize"), e).next(),
              a = w.evaluateIfPresent(w.argRole(t, "ordinal"), e).next(),
              u = w.evaluateIfPresent(w.argRole(t, "lang"), e).next(),
              s = t.getAttribute("flags") || "",
              t = w.argRole(t, "startAt"),
              s = /1/.test(s),
              n = Br(w.evaluate(n, e), s, t, !0, e);
            return null === n ? F.oneString("NaN") : Rr(n, r, o, i, a, u, e);
          }
          function Rr(t, e, i, a, u, n, s) {
            function c(t) {
              if (/^[\x01-\x7f]*$/.test((t = "" === t ? "1" : t)))
                (r = t.split(/\b/)),
                  (e = function (t, e) {
                    return /\w+/.test(t);
                  });
              else {
                if (t.length != w.stringToCodepoints(t).length)
                  throw _("Cannot handle non-BMP characters in format-number picture", "SXJS0002");
                var n = w.analyze(t, "[\\p{Nd}\\p{Nl}\\p{No}\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}]+", "", !0, !1),
                  e = function (t, e) {
                    return n[e].matching;
                  },
                  r = n.map(function (t) {
                    return t.string.toString();
                  });
              }
              for (
                var o = {
                    prefix: "",
                    fTokens: [],
                    suffix: ""
                  },
                  i = ".",
                  a = 0;
                a < r.length;
                a++
              ) {
                var u = r[a];
                e(u, a)
                  ? (o.fTokens.push({
                      chars: u,
                      sep: i
                    }),
                    (i = "."))
                  : (0 === a && (o.prefix = u), a == r.length - 1 ? (o.suffix = u) : 0 !== a && (i = u));
              }
              return (
                0 === o.fTokens.length &&
                  (o.fTokens.push({
                    chars: "1",
                    sep: "."
                  }),
                  (o.suffix = o.prefix)),
                o
              );
            }
            function r(t) {
              var r = c(null === e ? "1" : w.evaluate(e, s).next().toString()),
                o = r.prefix;
              return (
                t.forEach(function (t, e) {
                  var n = e >= r.fTokens.length ? r.fTokens[r.fTokens.length - 1] : r.fTokens[e],
                    e = (0 !== e && (o += n.sep), n.chars),
                    n = ("yes" == u && (e += ";o"), E.formatInteger(t.toNumber(), e));
                  null !== i && null !== a && (n = E.addGroupingSeparators(n, i, a)), (o += n);
                }),
                (o += r.suffix),
                F.oneString(o)
              );
            }
            if (null !== n)
              try {
                x.language.cast(n);
              } catch (t) {
                throw _("@lang=" + n + ": invalid language code", "XTDE0030");
              }
            return r(t.expand());
          }
          function Br(t, e, n, r, o) {
            var i = [1];
            if (
              (null !== n &&
                (i = w
                  .evaluate(n, o)
                  .next()
                  .toString()
                  .split(/\s+/)
                  .map(function (t) {
                    if (/^-?[0-9]+$/.test(t)) return parseInt(t, 10);
                    throw _("xsl:number/@start-at must be a sequence of integers.Offending value: " + t, "XTSE0020");
                  })),
              e && r)
            ) {
              n = t.next();
              if (null === n) return null;
              try {
                n = x.integer.cast(n.round(0));
              } catch (t) {
                return null;
              }
              t = F.ForArray([n]);
            }
            o = function (t, e) {
              if ((t = x.numeric.matches(t) ? t.toDouble() : x.double.fromStringUnfailing(t.toString())).toNumber() < 0)
                throw _("xsl:number/@value is less than zero", "XTDE0980");
              try {
                t = x.integer.cast(t.round(0));
              } catch (t) {
                throw ((t.code = "XTDE0980"), t);
              }
              e = e >= i.length ? i[i.length - 1] : i[e];
              return (t = 1 != e ? x.integer.fromNumber(t.toNumber() + (e - 1)) : t);
            };
            return t.mapOneToOne(o);
          }
          function Xr(t, e) {
            var n = w.argRole(t, "value"),
              r = w.argRole(t, "format"),
              o = w.evaluateIfPresent(w.argRole(t, "gpSep"), e).next(),
              i = w.evaluateIfPresent(w.argRole(t, "gpSize"), e).next(),
              a = w.evaluateIfPresent(w.argRole(t, "ordinal"), e).next(),
              u = w.evaluateIfPresent(w.argRole(t, "lang"), e).next(),
              s = t.getAttribute("flags") || "",
              s = /1/.test(s),
              c = w.argRole(t, "startAt");
            return null ===
              (n = n
                ? Br(w.evaluate(n, e), s, c, !0, e)
                : Br(Pr(t.getAttribute("level"), w.argRole(t, "select"), w.argRole(t, "count"), w.argRole(t, "from"), e), s, c, !1, e))
              ? F.oneString("NaN")
              : Rr(n, r, o, i, a, u, e);
          }
          function Lr(t) {
            if (t < 1 || 4999 < t) return t.toString();
            for (
              var e = "",
                n = ["m", "cm", "d", "cd", "c", "xc", "l", "xl", "x", "ix", "v", "iv", "i"],
                r = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                o = 0;
              o < n.length;
              o++
            )
              for (; t >= r[o]; ) (e += n[o]), (t -= r[o]);
            return e;
          }
          function zr(t, e) {
            var n;
            return t < 1 ? t.toString() : ((n = e.length), r(t));
            function r(t) {
              return (n < t ? r(Math.floor((t - 1) / n)) : "") + e.charAt((t - 1) % n);
            }
          }
          function Jr(t, e) {
            return t < e.length ? e[t] : t.toString();
          }
          function Gr(t, e) {
            for (var n = Math.abs(t), r = n < 999999 ? n.toString() : Big(n).toFixed(); r.length < e; ) r = "0" + r;
            return (r = t < 0 ? "-" + r : r);
          }
          function jr(t) {
            var e = M,
              n = e.stringToCodepoints(t),
              r = {},
              o = !0,
              i = 0,
              a = N.prepareRegex("\\p{Nd}", null),
              u = t.search(a);
            if (u < 0) o = !1;
            else {
              for (var s = N.obtainCategoryEscapes().Nd, c = 0; c < s.length; c++) {
                var l,
                  f = s[c];
                if ((l = parseInt(f[0], 16)) <= n[u] && n[u] <= l + 10) break;
              }
              for (c = 0; c < n.length; c++)
                if (128 <= n[c]) {
                  var m = String.fromCharCode(n[c]);
                  if (a.test(m)) {
                    if (l > n[c] || n[c] > l + 10) throw _("Picture string mixes digits from different digit families: " + t, "FODF1310");
                  } else if (N.prepareRegex("\\p{N}\\p{L}", null).test(m)) throw _("Picture string is invalid: " + t, "FODF1310");
                }
              var p = [],
                i = l - 48;
              n.forEach(function (t) {
                l <= t && t <= l + 10 ? p.push(48) : p.push(t);
              }),
                (t = e.codepointsToString(p));
            }
            return (r.isDecimalDigitPattern = o), (r.format = t), (r.diff = i), (r.zeroDigit = l), r;
          }
          function qr(t, e) {
            var n = [];
            return (
              M.stringToCodepoints(t).forEach(function (t) {
                48 <= t && t <= 57 ? n.push(t + e) : n.push(t);
              }),
              M.codepointsToString(n)
            );
          }
          function $r(t, e, n, r, o) {
            for (var i, a = 0, u = t, s = 0; s < u.length; s++)
              s == e[a] &&
                (0 < (i = o ? s + 1 : u.length - s) && (u = u.substring(0, i) + (n ? n[o ? a : n.length - a - 1] : r) + u.substring(i)),
                a++);
            return u;
          }
          function Qr(t, e) {
            function n(t, e) {
              if (!/^(([0-9]|#|[^A-Za-z0-9])+?)$/.test(e))
                throw _("The decimal digit pattern in the picture string is invalid: " + e, "FODF1310");
              var n,
                r = e,
                o = !0;
              if (/[^0-9A-Za-z#]/.test(r)) {
                if (1 < (n = r.match(/[^0-9A-Za-z#]/g)).length)
                  for (u = 1; u < n.length; u++)
                    if (n[0] != n[u]) {
                      o = !1;
                      break;
                    }
                r = r.replace(/[^0-9A-Za-z#]/g, ",");
              }
              if (/^,|,,|,$/.test(r)) throw _("Grouping in picture string is invalid: " + e, "FODF1310");
              if (/[0-9].*#/.test(r)) throw _("Picture string is invalid: " + e, "FODF1310");
              e = Gr(t, r.replace(/[#,]/g, "").length);
              if (n) {
                for (var i = M.stringToCodepoints(r).reverse(), a = [], u = 0; u < i.length; u++) 44 == i[u] && a.push(u);
                var s = !0;
                if ((s = i.length - a[a.length - 1] - 1 > a[0] ? !1 : s))
                  for (u = 1; u < a.length; u++)
                    if ((a[u] + 1) % (a[0] + 1) != 0) {
                      s = !1;
                      break;
                    }
                e = s && o ? E.addGroupingSeparators(e, n[0], a[0]) : $r(e, a, n);
              }
              return e;
            }
            var r = !0,
              o = !0,
              i = 0;
            if (M.stringToCodepoints(e).length != e.length)
              throw _("Cannot handle non-BMP characters in format-integer picture", "SXJS0002");
            (r = /^[\x01-\x7f]*$/.test(e) ? r : !1)
              ? (o = /[0-9]/.test(e))
              : ((e = (a = jr(e)).format), (o = a.isDecimalDigitPattern), (i = a.diff));
            var a = n(t, (e = o ? e : "1"));
            return (a = r ? a : qr(a, i));
          }
          function Kr(t) {
            var e = [
                "Zero",
                "One",
                "Two",
                "Three",
                "Four",
                "Five",
                "Six",
                "Seven",
                "Eight",
                "Nine",
                "Ten",
                "Eleven",
                "Twelve",
                "Thirteen",
                "Fourteen",
                "Fifteen",
                "Sixteen",
                "Seventeen",
                "Eighteen",
                "Nineteen"
              ],
              n = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
            return t < 20
              ? e[t]
              : t < 100
              ? n[Math.floor(t / 10)] + (t % 10 == 0 ? "" : " " + e[t % 10])
              : t < 1e3
              ? Kr(Math.floor(t / 100)) + " Hundred" + (t % 100 == 0 ? "" : " and " + Kr(t % 100))
              : t < 1e6
              ? Kr(Math.floor(t / 1e3)) + " Thousand" + (t % 1e3 == 0 ? "" : (t % 1e3 < 100 ? " and " : " ") + Kr(t % 1e3))
              : t < 1e9
              ? Kr(Math.floor(t / 1e6)) + " Million" + (t % 1e3 == 0 ? "" : (t % 1e3 < 100 ? " and " : " ") + Kr(t % 1e6))
              : t.toString();
          }
          function Vr(t) {
            var e = [
                "Zeroth",
                "First",
                "Second",
                "Third",
                "Fourth",
                "Fifth",
                "Sixth",
                "Seventh",
                "Eighth",
                "Ninth",
                "Tenth",
                "Eleventh",
                "Twelfth",
                "Thirteenth",
                "Fourteenth",
                "Fifteenth",
                "Sixteenth",
                "Seventeenth",
                "Eighteenth",
                "Nineteenth"
              ],
              n = ["", "", "Twent", "Thirt", "Fort", "Fift", "Sixt", "Sevent", "Eight", "Ninet"];
            return t < 20
              ? e[t]
              : t < 100
              ? n[Math.floor(t / 10)] + (t % 10 == 0 ? "ieth" : "y " + e[t % 10])
              : t < 1e3
              ? Kr(Math.floor(t / 100)) + " Hundred" + (t % 100 == 0 ? "th" : " and " + Vr(t % 100))
              : t < 1e6
              ? Kr(Math.floor(t / 1e3)) + " Thousand" + (t % 1e3 == 0 ? "th" : (t % 1e3 < 100 ? " and " : " ") + Vr(t % 1e3))
              : t < 1e9
              ? Kr(Math.floor(t / 1e6)) + " Million" + (t % 1e3 == 0 ? "th" : (t % 1e3 < 100 ? " and " : " ") + Vr(t % 1e6))
              : t.toString();
          }
          function Hr(t) {
            return t % 10 == 1 && t % 100 != 11 ? "st" : t % 10 == 2 && t % 100 != 12 ? "nd" : t % 10 == 3 && t % 100 != 13 ? "rd" : "th";
          }
          function Yr(t, e) {
            var n,
              r = null;
            if (-1 != (n = e.lastIndexOf(";"))) {
              if (((r = e.substring(n + 1)), !/^([co](\(.+\))?)?[at]?$/.test(r)))
                throw _("Invalid format modifier in picture string: " + r, "FODF1310");
              (r = r.charAt(0)), (e = e.substring(0, n));
            }
            if ("" === e) throw _("In the picture string, the picture cannot be empty", "FODF1310");
            var o = t < 0 ? "-" : "";
            if ("o" == r)
              switch (e.toString()) {
                case "a":
                case "A":
                case "i":
                case "I":
                  break;

                case "Ww":
                  return o + Vr(Math.abs(t));

                case "W":
                  return o + Vr(Math.abs(t)).toUpperCase();

                case "w":
                  return o + Vr(Math.abs(t)).toLowerCase();

                default:
                  return Qr(t, e) + Hr(Math.abs(t));
              }
            function i(t, e) {
              for (var n = "", r = t.charCodeAt(0), o = 0; o < e; r++, o++) n += String.fromCharCode(r);
              return n;
            }
            switch (e.toString()) {
              case "a":
                return zr(t, i("a", 26));

              case "A":
                return zr(t, i("A", 26));

              case "\u03b1":
                return zr(t, i("\u03b1", 25));

              case "\u0391":
                return zr(t, i("\u0391", 25));

              case "i":
                return Lr(t);

              case "I":
                return Lr(t).toUpperCase();

              case "Ww":
                return o + Kr(Math.abs(t));

              case "W":
                return o + Kr(Math.abs(t)).toUpperCase();

              case "w":
                return o + Kr(Math.abs(t)).toLowerCase();

              case "\u2460":
                return Jr(t, "\u24ea" + i("\u2460", 20) + i("\u3251", 15) + i("\u32b1", 15));

              case "\u2474":
                return Jr(t, "0" + i("\u2474", 20));

              case "\u2488":
                return 0 === t ? "\ud83c\udd00" : Jr(t, "0" + i("\u2488", 20));

              case "\u2776":
                return Jr(t, "\u24ff" + i("\u2776", 10) + i("\u24eb", 10));

              case "\u2780":
                return 0 === t ? "\ud83c\udd0b" : Jr(t, "0" + i("\u2780", 10));

              case "\u278a":
                return 0 === t ? "\ud83c\udd0c" : Jr(t, "0" + i("\u278a", 10));

              case "\u24f5":
                return Jr(t, "0" + i("\u24f5", 10));

              case "\u3220":
                return Jr(t, "0" + i("\u3220", 10));

              case "\u3280":
                return Jr(t, "0" + i("\u3280", 10));

              default:
                return Qr(t, e);
            }
          }
          function Wr(t, e, n) {
            for (var r = "", o = 0; o < t.length; o++) {
              var i = t.charAt(o),
                a = e.indexOf(i);
              a < 0 ? (r += i) : a < n.length && (r += n.charAt(a));
            }
            return r;
          }
          function Zr(t, e) {
            t = Sr.getAttribute(t, e, wr[e]);
            return String.fromCharCode(parseInt(t, 10));
          }
          function to(t, e) {
            function n(e) {
              throw (
                ([
                  ["$gs", "grouping separator"],
                  ["$es", "exponent separator"],
                  ["$ds", "decimal separator"],
                  ["$pc", "non-prefix passive character"],
                  ["$pp", "percent|permille"],
                  ["$od", "optional digit"],
                  ["$md", "mandatory digit"],
                  ["$ip", "integer part"],
                  ["$fp", "fractional part"]
                ].forEach(function (t) {
                  e = e.replace(t[0], t[1]);
                }),
                _("Invalid picture: " + e, "FODF1310"))
              );
            }
            var r,
              o,
              i,
              a = {},
              u = t.indexOf(e.decimalSeparator),
              s = 0 <= u,
              c = e.zeroDigit.charCodeAt(0),
              l = 0,
              f = 0,
              m = [],
              p = [],
              h = [],
              d = -1,
              g = -1,
              y = !1,
              v = !1,
              x = -1,
              N = 0,
              b = s ? u : t.length;
            for (A = 0; A < b; A++)
              c <= (o = t.charCodeAt(A)) && o < c + 10
                ? (0 < g && n("digit follows $pc"), y ? N++ : (l < 1 && d < 0 && (d = A), l++, f++))
                : o == e.digit.charCodeAt(0)
                ? (0 < g && n("digit follows $pc"),
                  y && n("$od follows $es"),
                  0 < l && n("$od follows $md in $ip"),
                  d < 0 && ((d = A), (v = !0)),
                  f++)
                : o == e.groupingSeparator.charCodeAt(0)
                ? (d < 0 && n("$gs before any digit"), 0 < h.length && n("$gs follows $pc"), y && n("$gs follows $es"), m.push(A))
                : o == e.percent.charCodeAt(0) || o == e.permille.charCodeAt(0)
                ? s
                  ? n("$pp before $ds")
                  : (d < 0 && n("$pp before any digit"),
                    0 < g && n("$pp follows $pc"),
                    y && n("$pp follows $es"),
                    h.push(o),
                    g < 0 && (g = A),
                    o == e.percent.charCodeAt(0) ? (a.percent = !0) : (a.permille = !0))
                : !s && 0 <= d && o == e.exponentSeparator.charCodeAt(0) && g < 0
                ? y
                  ? (h.push(o), 0 < N ? g < 0 && (g = A) : (h.push(o), (y = !1), (x = -1), g < 0 && (g = A - 1)))
                  : ((y = !0), (x = A))
                : 0 <= d && s
                ? n("$pc before $ds")
                : y && 0 === N
                ? ((y = !1), (x = -1), h.push(e.exponentSeparator.charCodeAt(0)), h.push(o), g < 0 && (g = A - 1))
                : 0 <= d
                ? (h.push(o), g < 0 && (g = A))
                : p.push(o);
            if (
              (0 < m.length &&
                ((i = s ? u : y ? x : 0 < g ? g : t.length),
                (m = m
                  .map(function (t) {
                    return i - t - 1;
                  })
                  .reverse())),
              0 !== m.length)
            )
              for (0 === m[0] && n("$gs at end of $ip"), r = 0; r < m.length - 1; r++) m[r] + 1 == m[r + 1] && n("consecutive $gs in $ip");
            var S = 0,
              w = 0,
              T = [];
            if (s)
              for (var E = -1, O = t.substring(u + 1), A = 0; A < O.length; A++)
                c <= (o = O.charCodeAt(A)) && o < c + 10
                  ? y && g < 0
                    ? N++
                    : 0 <= E || 0 <= g
                    ? n("$md follows $od or $pc in $fp")
                    : (S++, w++)
                  : o == e.digit.charCodeAt(0)
                  ? ((0 <= g || y) && n("$od follows $pc or $es"), E < 0 && (E = A), w++)
                  : o == e.groupingSeparator.charCodeAt(0)
                  ? ((0 <= g || y) && n("$gs follows $pc or $es"), T.push(A - u + 1))
                  : o == e.decimalSeparator.charCodeAt(0)
                  ? n("more than one $ds")
                  : o == e.percent.charCodeAt(0) || o == e.permille.charCodeAt(0)
                  ? ((0 <= g || y) && n("$pp follows $pc or $es"),
                    h.push(o),
                    (g = A),
                    o == e.percent.charCodeAt(0) ? (a.percent = !0) : (a.permille = !0))
                  : o == e.exponentSeparator.charCodeAt(0) && g < 0
                  ? y
                    ? (h.push(o), 0 < N ? g < 0 && (g = A) : (h.push(o), (y = !1), (x = -1), g < 0 && (g = A - 1)))
                    : ((y = !0), (x = A))
                  : y && 0 === N
                  ? ((y = !1), (x = -1), h.push(e.exponentSeparator.charCodeAt(0)), h.push(o), g < 0 && (g = A - 1))
                  : (h.push(o), g < 0 && (g = A));
            if ((d < 0 && 0 === w && n("mantissa contains no digits"), 0 !== T.length))
              for (0 === T[0] && n("$gs at beginning of $fp"), r = 0; r < T.length - 1; r++)
                T[r] + 1 == T[r + 1] && n("consecutive $gs in $fp");
            return (
              0 === l && 0 === w && (y ? (w = S = 1) : (l = 1)),
              0 === (l = y && 0 === l && v ? 1 : l) && 0 === S && (S = 1),
              (a.minimumIntegerPartSize = l),
              (a.prefix = p),
              (a.intGpPos = m),
              (a.picIntPartContainsOptDigit = v),
              (a.picIntPartSize = f),
              (a.minimumFractionalPartSize = S),
              (a.maximumFractionalPartSize = w),
              (a.fracGpPos = T),
              (a.expPartSize = N),
              (a.exponentSeparator = e.exponentSeparator || "e"),
              (a.suffix = h),
              a
            );
          }
          function eo(t, e) {
            var n = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            return "M" == e
              ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][
                  t - 1
                ]
              : "F" == e
              ? n[t - 1]
              : t;
          }
          function no(t) {
            var e = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
            return Math.floor((t.getTime() - e.getTime()) / 864e5) + 1;
          }
          function ro(t, e) {
            var n = e ? no(t) : t.getUTCDate(),
              t = new Date(Date.UTC(t.getUTCFullYear(), e ? 0 : t.getUTCMonth(), 1)),
              r = t.getUTCDay();
            return 4 < (r = 0 === r ? 7 : r) && r + n <= 8
              ? ro(new Date(t.getTime() - 864e5), e)
              : ((t = r < 5 ? 1 : 0), Math.floor((n + r - 2) / 7) + t);
          }
          function oo(t) {
            return ro(t, !0);
          }
          function io(t) {
            return ro(t, !1);
          }
          function ao(t) {
            return t.getUTCHours() < 13 ? (0 === t.getUTCHours() ? 12 : t.getUTCHours()) : t.getUTCHours() - 12;
          }
          function uo(t) {
            return t.getUTCHours() < 12 ? "Am" : "Pm";
          }
          function so(t, e, n, r, o, i, a) {
            if ("" === t) return "Z" == n ? "J" : "";
            e = "z" == e ? "GMT" : "";
            if ("t" == r && "+00:00" == t && "Z" != n && "N" != n) return "Z";
            if ("" === n) return e + t;
            r = t.match(/^([+\-])([0-9])([0-9]):([0-9]{2})$/);
            if ("Z" == n || "N" == n) {
              if ("Z" == n)
                var u = parseInt(r[1] + r[2] + r[3], 10),
                  u = u < -12 || 12 < u || "00" != r[4] ? t : "YXWVUTSRQPONZABCDEFGHIKLM".charAt(u + 12);
              else if ("N" == n) throw _("Timezone names not implemented", "SXJS0002");
            } else {
              a && !/[0-9]+/.test(n) && (n = "00:00");
              var s,
                c,
                t = function (t, e) {
                  return "0" == e[2] && 1 == t.length ? e[3] : e[2] + e[3];
                },
                l = function (t, e) {
                  return (
                    ("0" != e[2] || (1 != t.length && 3 != t.length) ? e[2] + e[3] : e[3]) +
                    (2 < t.length ? e[4] : "00" != e[4] ? ":" + e[4] : "")
                  );
                },
                f = 0;
              a || ((n = (s = jr(n)).format), (f = s.diff)),
                (u = /[^0-9A-Za-z]/.test(n)
                  ? ((c = n.match(/^([0-9]+)([^0-9A-Za-z])([0-9]+)$/)), r[1] + t(c[1], r) + c[2] + r[4])
                  : ((c = n.match(/^[0-9]+$/)), r[1] + l(c[0], r))),
                a || (u = qr(u, f));
            }
            return e + u;
          }
          function co(t, e, n, r, o, i) {
            function a(t, e, n, r, o) {
              for (var i = 0, a = (o || ((e = (s = jr(e)).format), (i = s.diff)), t.toString()); a.length < 3; ) a = "0" + a;
              var u = M.stringToCodepoints(a),
                s = parseInt(M.codepointsToString(u.reverse()), 10);
              if (!n && !r && /^[0-9]$/.test(e)) for (; u.length > e.length; ) e += "#";
              if (n && "*" != n) {
                for (var t = /^([0-9]*)(#*)$/.exec(e), c = t[1] || "", l = t[2] || ""; n > c.length; ) (c += "0"), (l = l.slice(0, -1));
                e = c + l;
              }
              if (r) for ("*" == r && (r = u.length); e.length < r; ) e += "#";
              for (
                var t = Yr(s, M.codepointsToString(M.stringToCodepoints(e).reverse())),
                  f = M.codepointsToString(M.stringToCodepoints(t).reverse());
                f.length > e.length;

              )
                f = f.slice(0, -1);
              return (n && "*" != n) || 0 !== parseInt(f, 10) || (f = "0"), (f = o ? f : qr(f, i));
            }
            var u,
              s = n.match(/^([YMDdWwFHhmsfZzPCE])(.*)$/);
            if (null === s) throw _("Date/time component [" + n + "] not recognised", "FOFD1340");
            var c = s[1],
              s = s[2] || "";
            if (("date" == t && /[HhPmsf]/.test(c)) || ("time" == t && /[YMDdFWwCE]/.test(c)))
              throw _("Date/time component [" + n + "] not available in " + t, "FOFD1350");
            if (-1 != (n = s.lastIndexOf(","))) {
              var t = s.substring(n + 1).split("-"),
                s = s.substring(0, n),
                l = t[0],
                f = t[1] || "*";
              if (("*" != l && l < 1) || ("*" != f && f < 1) || ("*" != l && "*" != f && f < l))
                throw _("Invalid width modifier in date/time formatting picture", "FOFD1340");
            }
            var m,
              n = null,
              t =
                (1 < s.length && /[atco]/.test(s.charAt(s.length - 1))
                  ? ((m = s.substring(0, s.length - 1)), (n = s.charAt(s.length - 1)))
                  : (m = s),
                !0);
            if (!/^[\x01-\x7f]*$/.test(m)) {
              if (m.length != M.stringToCodepoints(m).length)
                throw _("Cannot handle non-BMP characters in date/time formatting picture", "SXJS0002");
              t = !1;
            }
            if (/[Zz]/.test(c)) return so("Z" == e.tzOffsetToString() ? "+00:00" : e.tzOffsetToString(), c, m, n, l, f, t);
            (s = e.proxy()), (e = Tr[c] ? s[Tr[c]]() : Er[c] ? Er[c](s) : null);
            if (null === e) throw _("Component specifier not implemented: [" + c + "]", "SXJS0002");
            if (
              ("M" == c ? e++ : "F" == c && 0 === e && (e = 7),
              "" === m && (m = /[FPCE]/.test(c) ? "n" : /[ms]/.test(c) ? "01" : "1"),
              "f" == c)
            )
              return a(e, m, l, f, t);
            if (/[nN]/.test(m))
              (u = eo(e, c)),
                "n" == m ? (u = u.toLowerCase()) : "N" == m && (u = u.toUpperCase()),
                f && "*" != f && u.length > f && (u = u.substring(0, f));
            else {
              s = /;/.test(m) ? m + ";" : m;
              if (
                (n && (s += (";" == s.charAt(s.length - 1) ? "" : ";") + n),
                (u = Yr(e, s)),
                "Y" == c && /[^iIwWnN]/.test(m.charAt(m.length - 1)) && ((!l && 2 == m.length) || 2 == f))
              )
                for (; 2 < u.length; ) u = u.substring(1);
              if (l) {
                var p = "*" == l ? 0 : parseInt(l, 10);
                if (0 < p && u.length < p)
                  if (/[YMDdWwHhms]/.test(c) && /[^iIwWnN]/.test(m.charAt(m.length - 1))) {
                    var h = "0";
                    for (t || (h = String.fromCharCode(jr(s).zeroDigit)); u.length < p; ) u = h + u;
                  } else {
                    if ("Y" != c || !/[iIwWnN]/.test(m.charAt(m.length - 1)))
                      throw _("Not implemented min width modification with specifier " + c + " and format " + m, "SXJS0002");
                    for (; u.length < p; ) u += " ";
                  }
              }
            }
            return u;
          }
          function lo(t, e, n, r) {
            var o = t < 0 || (0 === t && 1 / t < 0),
              i = {
                decimalSeparator: Zr(n, "decimal-separator"),
                groupingSeparator: Zr(n, "grouping-separator"),
                digit: Zr(n, "digit"),
                minusSign: Zr(n, "minus-sign"),
                percent: Zr(n, "percent"),
                permille: Zr(n, "per-mille"),
                zeroDigit: Zr(n, "zero-digit"),
                exponentSeparator: Zr(n, "exponent-separator"),
                patternSeparator: Zr(n, "pattern-separator"),
                infinity: Sr.getAttribute(n, "infinity", wr.infinity),
                nan: Sr.getAttribute(n, "NaN", wr.NaN)
              };
            if (isNaN(t)) return i.nan;
            n = e.includes(i.patternSeparator) ? e.split(i.patternSeparator) : [e];
            if (2 < n.length) throw _("Invalid picture: multiple pattern separators", "FODF1310");
            var a,
              u,
              s = to(1 < n.length && t < 0 ? n[1] : n[0], i);
            if (isFinite(t)) {
              if (0 < s.expPartSize) u = fo(t, s);
              else {
                var e = Math.abs(t),
                  c =
                    (s.percent && (e = Math.abs(100 * t)),
                    (u =
                      (e = s.permille ? Math.abs(1e3 * t) : e) + "" == "Infinity"
                        ? e + ""
                        : e < 999999
                        ? e.toString()
                        : Big(e).toFixed()).indexOf(".")),
                  l =
                    (c < 0 && ((c = u.length), 0 < s.minimumFractionalPartSize) && (u += "."),
                    0 <= s.maximumFractionalPartSize &&
                      "." != u.substring(c) &&
                      c != u.length &&
                      (0 < s.maximumFractionalPartSize
                        ? (u = Big(u).round(s.maximumFractionalPartSize, 1).toString()).indexOf(".") < 0 && (u += ".0")
                        : (u = Big(u).round(0, 1).toString())),
                    u.length - 1 - c);
                if (0 < s.minimumFractionalPartSize) for (; l < s.minimumFractionalPartSize; ) (u += "0"), l++;
                for (; c < s.minimumIntegerPartSize; ) (u = "0" + u), c++;
                "0" == (u = 0 < l && 0 === s.minimumIntegerPartSize && "0" == u.substring(0, c) ? u.substring(c) : u) &&
                  0 === s.minimumIntegerPartSize &&
                  0 === s.minimumFractionalPartSize &&
                  0 < s.maximumFractionalPartSize &&
                  (u = ".0");
              }
              for (var f = "", m = 0; m < 10; m++) f += String.fromCharCode(i.zeroDigit.charCodeAt(0) + m);
              if (((a = Wr(u, "0123456789.", (f += i.decimalSeparator))), 0 < s.intGpPos.length || 0 < s.fracGpPos.length)) {
                (t = a.indexOf(i.decimalSeparator)), (e = (t < 0 && (t = a.length), a.substring(0, t))), (t = a.substring(t));
                if (0 < s.intGpPos.length) {
                  for (var p = !0, h = 1; h < s.intGpPos.length; h++)
                    if ((s.intGpPos[h] + 1) % (s.intGpPos[0] + 1) != 0) {
                      p = !1;
                      break;
                    }
                  e = (p = p && s.picIntPartSize + s.intGpPos.length - s.intGpPos[s.intGpPos.length - 1] - 1 > s.intGpPos[0] ? !1 : p)
                    ? E.addGroupingSeparators(e, i.groupingSeparator, s.intGpPos[0])
                    : $r(e, s.intGpPos, null, i.groupingSeparator);
                }
                a = e + (t = 0 < s.fracGpPos.length ? $r(t, s.fracGpPos, null, i.groupingSeparator, !0) : t);
              }
            } else a = i.infinity;
            return (
              0 < s.prefix.length && (a = M.codepointsToString(s.prefix) + a),
              0 < s.suffix.length && (a += M.codepointsToString(s.suffix)),
              (a = o && 1 == n.length ? i.minusSign + a : a)
            );
          }
          function fo(t, e) {
            for (
              var n = e.minimumIntegerPartSize,
                r = e.minimumFractionalPartSize,
                o = e.maximumFractionalPartSize,
                i = e.exponentSeparator,
                a = 1 == n && e.picIntPartContainsOptDigit,
                u = (a && (n = 0) === r && ((r = 1), 0 === o) && (o = 1), e.expPartSize),
                t = Big(t),
                s = t.c,
                c = 0 !== n ? n + o : o,
                c = t.e != (t = s.length > c ? Big(t.toPrecision(c)) : t).e,
                l = (c && (n += 1), 1 < n ? (t = t.div(Big(10).pow(n - 1))) : 0 === n && (t = t.times(Big(10))), 0 !== n ? n + r : r),
                s = t.c;
              s.length < l;

            )
              s.push(0);
            var f = "";
            if (!(0 < s.length)) throw _("Empty mantissa", "SXJS0004");
            if (0 === n && e.picIntPartContainsOptDigit) f += "0";
            else for (var m = 0; m < n; m++) f += s[m];
            return !(0 < o && s.length > n) || (a && c) || (f += "." + s.join("").slice(n)), f + i + Gr(t.e, u);
          }
          function mo() {
            function n(t) {
              var e = this;
              if (!(e instanceof n)) return void 0 === t ? mo() : new n(t);
              t instanceof n ? ((e.s = t.s), (e.e = t.e), (e.c = t.c.slice())) : ho(e, t), (e.constructor = n);
            }
            return (n.prototype = T), (n.DP = Ar), (n.RM = Cr), (n.E_NEG = Mr), (n.E_POS = Fr), n;
          }
          function po(t, e, n) {
            var r = t.constructor,
              o = e - (t = new r(t)).e,
              i = t.c;
            for (i.length > ++e && go(t, o, r.RM), i[0] ? (o = n ? e : ((i = t.c), t.e + o + 1)) : ++o; i.length < o; i.push(0));
            return (
              (o = t.e),
              1 === n || (n && (e <= o || o <= r.E_NEG))
                ? (t.s < 0 && i[0] ? "-" : "") + (1 < i.length ? i[0] + "." + i.join("").slice(1) : i[0]) + (o < 0 ? "e" : "e+") + o
                : t.toString()
            );
          }
          function ho(t, e) {
            var n, r, o;
            for (
              0 === e && 1 / e < 0 ? (e = "-0") : Ir.test((e += "")) || yo(NaN),
                t.s = "-" == e.charAt(0) ? ((e = e.slice(1)), -1) : 1,
                0 < (r = (e = -1 < (n = e.indexOf(".")) ? e.replace(".", "") : e).search(/e/i))
                  ? (n < 0 && (n = r), (n += +e.slice(r + 1)), (e = e.substring(0, r)))
                  : n < 0 && (n = e.length),
                r = 0;
              "0" == e.charAt(r);
              r++
            );
            if (r == (o = e.length)) t.c = [(t.e = 0)];
            else {
              for (; "0" == e.charAt(--o); );
              for (t.e = n - r - 1, t.c = [], n = 0; r <= o; t.c[n++] = +e.charAt(r++));
            }
            return t;
          }
          function go(t, e, n, r) {
            var o,
              i = t.c,
              a = t.e + e + 1;
            if (
              (1 === n
                ? (r = 5 <= i[a])
                : 2 === n
                ? (r = 5 < i[a] || (5 == i[a] && (r || a < 0 || i[a + 1] !== o || 1 & i[a - 1])))
                : 3 === n
                ? (r = r || i[a] !== o || a < 0)
                : ((r = !1), 0 !== n && yo("!Big.RM!")),
              a < 1 || !i[0])
            )
              r ? ((t.e = -e), (t.c = [1])) : (t.c = [(t.e = 0)]);
            else {
              if (((i.length = a--), r)) for (; 9 < ++i[a]; ) (i[a] = 0), a-- || (++t.e, i.unshift(1));
              for (a = i.length; !i[--a]; i.pop());
            }
            return t;
          }
          function yo(t) {
            t = new Error(t);
            throw ((t.name = "BigError"), t);
          }
          (t = this),
            (Ar = 20),
            (Cr = 1),
            (_r = Dr = 1e6),
            (Mr = -7),
            (Fr = 21),
            (Ir = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i),
            ((T = {
              abs: function () {
                var t = new this.constructor(this);
                return (t.s = 1), t;
              },
              cmp: function (t) {
                var e,
                  n = this,
                  r = n.c,
                  o = (t = new n.constructor(t)).c,
                  i = n.s,
                  a = t.s,
                  n = n.e,
                  t = t.e;
                if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -a : 0;
                if (i != a) return i;
                if (((e = i < 0), n != t)) return (t < n) ^ e ? 1 : -1;
                for (i = -1, a = (n = r.length) < (t = o.length) ? n : t; ++i < a; ) if (r[i] != o[i]) return (r[i] > o[i]) ^ e ? 1 : -1;
                return n == t ? 0 : (t < n) ^ e ? 1 : -1;
              },
              div: function (t) {
                var e = this,
                  n = e.constructor,
                  r = e.c,
                  o = (t = new n(t)).c,
                  i = e.s == t.s ? 1 : -1,
                  a = n.DP;
                if (((a !== ~~a || a < 0 || Dr < a) && yo("!Big.DP!"), !r[0] || !o[0]))
                  return r[0] == o[0] && yo(NaN), o[0] || yo(i / 0), new n(0 * i);
                var u,
                  s,
                  c,
                  l,
                  f,
                  m,
                  p = o.slice(),
                  h = (u = o.length),
                  d = r.length,
                  g = r.slice(0, u),
                  y = g.length,
                  v = t,
                  x = (v.c = []),
                  N = 0,
                  e = a + (v.e = e.e - t.e) + 1;
                for (v.s = i, i = e < 0 ? 0 : e, p.unshift(0); y++ < u; g.push(0));
                do {
                  for (c = 0; c < 10; c++) {
                    if (u != (y = g.length)) l = y < u ? 1 : -1;
                    else
                      for (f = -1, l = 0; ++f < u; )
                        if (o[f] != g[f]) {
                          l = o[f] > g[f] ? 1 : -1;
                          break;
                        }
                    if (!(l < 0)) break;
                    for (s = y == u ? o : p; y; ) {
                      if (g[--y] < s[y]) {
                        for (f = y; f && !g[--f]; g[f] = 9);
                        --g[f], (g[y] += 10);
                      }
                      g[y] -= s[y];
                    }
                    for (; !g[0]; g.shift());
                  }
                } while (((x[N++] = l ? c : ++c), g[0] && l ? (g[y] = r[h] || 0) : (g = [r[h]]), (h++ < d || g[0] !== m) && i--));
                return x[0] || 1 == N || (x.shift(), v.e--), e < N && go(v, a, n.RM, g[0] !== m), v;
              },
              eq: function (t) {
                return !this.cmp(t);
              },
              gt: function (t) {
                return 0 < this.cmp(t);
              },
              gte: function (t) {
                return -1 < this.cmp(t);
              },
              lt: function (t) {
                return this.cmp(t) < 0;
              },
              lte: function (t) {
                return this.cmp(t) < 1;
              }
            }).sub = T.minus =
              function (t) {
                var e,
                  n,
                  r,
                  o,
                  i = this,
                  a = i.constructor,
                  u = i.s,
                  s = (t = new a(t)).s;
                if (u != s) return (t.s = -s), i.plus(t);
                var c = i.c.slice(),
                  l = i.e,
                  f = t.c,
                  m = t.e;
                if (!c[0] || !f[0]) return f[0] ? ((t.s = -s), t) : new a(c[0] ? i : 0);
                if ((u = l - m)) {
                  for ((r = (o = u < 0) ? ((u = -u), c) : ((m = l), f)).reverse(), s = u; s--; r.push(0));
                  r.reverse();
                } else
                  for (n = ((o = c.length < f.length) ? c : f).length, u = s = 0; s < n; s++)
                    if (c[s] != f[s]) {
                      o = c[s] < f[s];
                      break;
                    }
                if ((o && ((r = c), (c = f), (f = r), (t.s = -t.s)), 0 < (s = (n = f.length) - (e = c.length)))) for (; s--; c[e++] = 0);
                for (s = e; u < n; ) {
                  if (c[--n] < f[n]) {
                    for (e = n; e && !c[--e]; c[e] = 9);
                    --c[e], (c[n] += 10);
                  }
                  c[n] -= f[n];
                }
                for (; 0 === c[--s]; c.pop());
                for (; 0 === c[0]; ) c.shift(), --m;
                return c[0] || ((t.s = 1), (c = [(m = 0)])), (t.c = c), (t.e = m), t;
              }),
            (T.mod = function (t) {
              var e,
                n = this,
                r = n.constructor,
                o = n.s,
                i = (t = new r(t)).s;
              return (
                t.c[0] || yo(NaN),
                (e = (n.s = t.s = 1) == t.cmp(n)),
                (n.s = o),
                (t.s = i),
                e ? new r(n) : ((o = r.DP), (i = r.RM), (r.DP = r.RM = 0), (n = n.div(t)), (r.DP = o), (r.RM = i), this.minus(n.times(t)))
              );
            }),
            (T.add = T.plus =
              function (t) {
                var e,
                  n = this,
                  r = n.constructor,
                  o = n.s,
                  i = (t = new r(t)).s;
                if (o != i) return (t.s = -i), n.minus(t);
                var a = n.e,
                  u = n.c,
                  s = t.e,
                  c = t.c;
                if (!u[0] || !c[0]) return c[0] ? t : new r(u[0] ? n : 0 * o);
                if (((u = u.slice()), (o = a - s))) {
                  for ((e = 0 < o ? ((s = a), c) : ((o = -o), u)).reverse(); o--; e.push(0));
                  e.reverse();
                }
                for (u.length - c.length < 0 && ((e = c), (c = u), (u = e)), o = c.length, i = 0; o; )
                  (i = ((u[--o] = u[o] + c[o] + i) / 10) | 0), (u[o] %= 10);
                for (i && (u.unshift(i), ++s), o = u.length; 0 === u[--o]; u.pop());
                return (t.c = u), (t.e = s), t;
              }),
            (T.pow = function (t) {
              var e = this,
                n = new e.constructor(1),
                r = n,
                o = t < 0;
              for ((t !== ~~t || t < -_r || _r < t) && yo("!pow!"), t = o ? -t : t; 1 & t && (r = r.times(e)), (t >>= 1); ) e = e.times(e);
              return o ? n.div(r) : r;
            }),
            (T.round = function (t, e) {
              var n = this,
                r = n.constructor;
              return null == t ? (t = 0) : (t !== ~~t || t < 0 || Dr < t) && yo("!round!"), go((n = new r(n)), t, null == e ? r.RM : e), n;
            }),
            (T.sqrt = function () {
              var t,
                e,
                n = this,
                r = n.constructor,
                o = n.c,
                i = n.s,
                a = n.e,
                u = new r("0.5");
              if (!o[0]) return new r(n);
              for (
                i < 0 && yo(NaN),
                  0 === (i = Math.sqrt(n.toString())) || i === 1 / 0
                    ? (((o = o.join("")).length + a) & 1 || (o += "0"),
                      ((t = new r(Math.sqrt(o).toString())).e = (((a + 1) / 2) | 0) - (a < 0 || 1 & a)))
                    : (t = new r(i.toString())),
                  i = t.e + (r.DP += 4);
                (e = t), (t = u.times(e.plus(n.div(e)))), e.c.slice(0, i).join("") !== t.c.slice(0, i).join("");

              );
              return go(t, (r.DP -= 4), r.RM), t;
            }),
            (T.mul = T.times =
              function (t) {
                var e,
                  n = this,
                  r = n.constructor,
                  o = n.c,
                  i = (t = new r(t)).c,
                  a = o.length,
                  u = i.length,
                  s = n.e,
                  c = t.e;
                if (((t.s = n.s == t.s ? 1 : -1), !o[0] || !i[0])) return new r(0 * t.s);
                for (
                  t.e = s + c, a < u && ((e = o), (o = i), (i = e), (c = a), (a = u), (u = c)), e = new Array((c = a + u));
                  c--;
                  e[c] = 0
                );
                for (s = u; s--; ) {
                  for (u = 0, c = a + s; s < c; ) (u = e[c] + i[s] * o[c - s - 1] + u), (e[c--] = u % 10), (u = (u / 10) | 0);
                  e[c] = (e[c] + u) % 10;
                }
                for (u && ++t.e, e[0] || e.shift(), s = e.length; !e[--s]; e.pop());
                return (t.c = e), t;
              }),
            (T.toString =
              T.valueOf =
              T.toJSON =
                function () {
                  var t = this,
                    e = t.constructor,
                    n = t.e,
                    r = t.c.join(""),
                    o = r.length;
                  if (n <= e.E_NEG || n >= e.E_POS) r = r.charAt(0) + (1 < o ? "." + r.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
                  else if (n < 0) {
                    for (; ++n; r = "0" + r);
                    r = "0." + r;
                  } else if (0 < n)
                    if (++n > o) for (n -= o; n--; r += "0");
                    else n < o && (r = r.slice(0, n) + "." + r.slice(n));
                  else 1 < o && (r = r.charAt(0) + "." + r.slice(1));
                  return t.s < 0 && t.c[0] ? "-" + r : r;
                }),
            (T.toExponential = function (t) {
              return null == t ? (t = this.c.length - 1) : (t !== ~~t || t < 0 || Dr < t) && yo("!toExp!"), po(this, t, 1);
            }),
            (T.toFixed = function (t) {
              var e,
                n = this,
                r = n.constructor,
                o = r.E_NEG,
                i = r.E_POS;
              return (
                (r.E_NEG = -(r.E_POS = 1 / 0)),
                null == t
                  ? (e = n.toString())
                  : t === ~~t && 0 <= t && t <= Dr && ((e = po(n, n.e + t)), n.s < 0) && n.c[0] && e.indexOf("-") < 0 && (e = "-" + e),
                (r.E_NEG = o),
                (r.E_POS = i),
                e || yo("!toFix!"),
                e
              );
            }),
            (T.toPrecision = function (t) {
              return null == t ? this.toString() : ((t !== ~~t || t < 1 || Dr < t) && yo("!toPre!"), po(this, t - 1, 2));
            }),
            (Or = mo()),
            "function" == typeof define && li(97)
              ? define(function () {
                  return Or;
                })
              : si.exports
              ? (si.exports = Or)
              : ((window || t).Big = Or);
          (vo = M.KNOWN_URI.fn),
            (xo = /[\x00-\x08\x0B\x0C\x0E-\x0F\x80-\x9F]/),
            (Oo.prototype = {
              _valStack: [],
              _keyStack: [],
              _optionsMap: {},
              _escape: !1,
              _duplicates: "use-first",
              reEscape: function (t) {
                return this._escape
                  ? JSON.stringify(t)
                      .replace(/^"|"$/g, "")
                      .replace(/\\"/g, '"')
                      .replace(/[\uD800-\uDFFF]/g, Eo)
                  : To(t);
              },
              peek: function () {
                return this._valStack[this._valStack.length - 1];
              },
              writeItem: function (t) {
                if (0 === this._valStack.length) this._valStack.push(t);
                else if (this.peek() instanceof M.XdmArray) this.peek().value.push(t);
                else {
                  var e = this.peek(),
                    n = x.string.fromString(this._keyStack.pop());
                  if (e.containsKey(n))
                    switch (this._duplicates) {
                      case "reject":
                        throw _("json-to-xml: duplicate key '" + n.toString() + "'", "FOJS0003");

                      case "use-first":
                        return;
                    }
                  e.inSituPut(n, t);
                }
              },
              emitNull: function () {
                this.writeItem([]);
              },
              emitBoolean: function (t) {
                this.writeItem([x.boolean.fromString(t)]);
              },
              emitNumber: function (t) {
                this.writeItem([x.double.fromNumber(parseFloat(t))]);
              },
              emitString: function (t) {
                this.writeItem([x.string.fromString(this.reEscape(wo(t)))]);
              },
              emitKey: function (t) {
                this._keyStack.push(this.reEscape(wo(t)));
              },
              startArray: function () {
                this._valStack.push(new M.XdmArray([]));
              },
              endArray: function () {
                this.writeItem([this._valStack.pop()]);
              },
              startMap: function () {
                this._valStack.push(new y());
              },
              endMap: function () {
                this.writeItem([this._valStack.pop()]);
              },
              result: function () {
                return void 0 !== this.peek()[0] ? this.peek()[0] : null;
              }
            }),
            (Ao.prototype = {
              _valStack: [],
              _keyStack: [{}],
              _mapStack: [],
              _context: null,
              _optionsMap: {},
              _escape: !1,
              _duplicates: "use-first",
              reEscape: function (t) {
                return this._escape
                  ? JSON.stringify(t)
                      .replace(/^"|"$/g, "")
                      .replace(/\\"/g, '"')
                      .replace(/[\uD800-\uDFFF]/g, Eo)
                  : To(t);
              },
              peek: function () {
                return this._valStack[this._valStack.length - 1];
              },
              writeItem: function (t) {
                if (0 === this._valStack.length) t.setAttribute("xmlns", vo), this._valStack.push(t);
                else {
                  var e = this.peek();
                  if ("map" == e.tagName) {
                    var n = this._keyStack.pop(),
                      r = this._mapStack[this._mapStack.length - 1];
                    if (n in r)
                      switch (this._duplicates) {
                        case "reject":
                          throw _("parse-json: duplicate key '" + n.toString() + "'", "FOJS0003");

                        case "use-first":
                          return;
                      }
                    (r[n] = t).setAttribute("key", n), this._escape && /\\/.test(n.toString()) && t.setAttribute("escaped-key", "true");
                  }
                  e.appendChild(t);
                }
              },
              emitNull: function () {
                var t = this._context.resultDocument.createElementNS(vo, "null");
                this.writeItem(t);
              },
              emitBoolean: function (t) {
                var e = this._context.resultDocument.createElementNS(vo, "boolean"),
                  t = this._context.resultDocument.createTextNode(t.toString());
                e.appendChild(t), this.writeItem(e);
              },
              emitNumber: function (t) {
                var e = this._context.resultDocument.createElementNS(vo, "number"),
                  t = this._context.resultDocument.createTextNode(t.toString());
                e.appendChild(t), this.writeItem(e);
              },
              emitString: function (t) {
                var e,
                  n = this._context.resultDocument.createElementNS(vo, "string");
                "" !== t &&
                  ((t = this.reEscape(wo(t))),
                  (e = this._context.resultDocument.createTextNode(t)),
                  this._escape && /\\/.test(t) && n.setAttribute("escaped", "true"),
                  n.appendChild(e)),
                  this.writeItem(n);
              },
              emitKey: function (t) {
                this._keyStack.push(this.reEscape(wo(t)));
              },
              startArray: function () {
                var t = this._context.resultDocument.createElementNS(vo, "array");
                this._valStack.push(t);
              },
              endArray: function () {
                this.writeItem(this._valStack.pop());
              },
              startMap: function () {
                var t = this._context.resultDocument.createElementNS(vo, "map");
                this._valStack.push(t), this._mapStack.push({});
              },
              endMap: function () {
                this._mapStack.pop(), this.writeItem(this._valStack.pop());
              },
              result: function () {
                return this.peek();
              }
            });
          var vo,
            xo,
            No = {
              parseToMap: function (t, e) {
                return So(t, e, new Oo(e));
              },
              parseToXml: function (t, e, n) {
                return So(t, e, new Ao(e, n));
              },
              xmlToJson: Co
            };
          function bo(t, e, n, r, o) {
            var i = x.string.fromString(e);
            if (t && t.containsKey(i)) {
              t = t.get(i);
              if ("function" == n) throw _("Option " + i + " must be a function", "XPTY0004");
              if (1 == t.length && x[n].matches(t[0])) {
                if (o && o.indexOf(t[0].value) < 0) throw _("Invalid value " + i + "=" + t[0], "FOJS0005");
                return t[0].value;
              }
              throw _("Invalid option: " + e + ": must be " + n, "XPTY0004");
            }
            return r;
          }
          function So(r, t, e) {
            var o = 0,
              i = n();
            function a(t) {
              throw _(t, "FOJS0001");
            }
            function n() {
              return (i = u());
            }
            function u() {
              var t, e;
              for (i = ""; ; ) {
                if (o >= r.length) return ["eof"];
                if (((e = r.charAt(o++)), !/[ \n\r\t]/.test(e))) break;
              }
              switch (e) {
                case "[":
                case "{":
                case "]":
                case "}":
                case ":":
                case ",":
                  return [e];

                case '"':
                  for (var n = !1; ; ) {
                    if ('"' == (t = r.charAt(o++)) && !n) return ["string", i];
                    (i += t), (n = "\\" == t && !n), o >= r.length && a("Unclosed quotes in string literal");
                  }
                  return ["string", i];

                case "-":
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  for (i += e; o < r.length; ) {
                    if (((t = r.charAt(o++)), !/[0-9\-+\.eE]/.test(t))) {
                      o--;
                      break;
                    }
                    i += t;
                  }
                  return ["number", s(i)];

                case "t":
                case "f":
                case "n":
                  for (i += e; ; ) {
                    if (!("a" <= (t = r.charAt(o)) && t <= "z")) break;
                    if (((i += t), ++o >= r.length)) break;
                  }
                  if (/^(true|false|null)$/.test(i)) return [i];
                  a("Unknown constant " + i);
                  break;

                default:
                  return a("Unexpected character '" + e + "' (" + M.stringToCodepoints(e) + ") at position " + o), -1;
              }
            }
            function s(t) {
              return /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/.test(t) ? t : a("Invalid JSON number " + t);
            }
            function c(t) {
              i[0] !== t && a("Expected " + t + ", found " + i[0]);
            }
            function l(t) {
              return i[0] === t && (n(), !0);
            }
            function f(t) {
              return i[0] === t ? (n(), !0) : "," === i[0] ? (n(), !1) : void a("Expected ',' or '" + t + "', found '" + i[0] + "'");
            }
            function m() {
              switch (i[0]) {
                case "[":
                  n(), p();
                  break;

                case "{":
                  n(), h();
                  break;

                case "string":
                  e.emitString(i[1]), n();
                  break;

                case "number":
                  e.emitNumber(i[1]), n();
                  break;

                case "true":
                case "false":
                  e.emitBoolean(i[0]), n();
                  break;

                case "null":
                  e.emitNull(), n();
                  break;

                default:
                  a("Unexpected token " + i[0]);
              }
            }
            function p() {
              if ((e.startArray(), !l("]"))) for (; m(), !f("]"); );
              e.endArray();
            }
            function h() {
              if ((e.startMap(), !l("}"))) for (; c("string"), e.emitKey(i[1]), n(), c(":"), n(), m(), !f("}"); );
              e.endMap();
            }
            return m(), c("eof"), e.result();
          }
          function wo(t) {
            try {
              return JSON.parse('"' + t + '"');
            } catch (t) {
              throw _(t.toString(), "FOJS0001");
            }
          }
          function To(t) {
            return t.replace(xo, "\ufffd").replace(/[\uD800-\uDFFF]+/g, function (t) {
              for (var e = "", n = 0; n < t.length; n++) {
                var r = t.charAt(n);
                e += n % 2 == r < "\udc00" || (n == t.length - 1 && r < "\udc00") ? "\ufffd" : r;
              }
              return e;
            });
          }
          function Eo(t) {
            for (var e = t.charCodeAt(0).toString(16); e.length < 4; ) e = "0" + e;
            return "\\u" + e.toUpperCase();
          }
          function Oo(t) {
            (this._valStack = []),
              bo(t, "liberal", "boolean", !(this._keyStack = [])),
              (this._escape = bo(t, "escape", "boolean", !1)),
              (this._duplicates = bo(t, "duplicates", "string", "use-first", ["reject", "use-first", "use-last"]));
          }
          function Ao(t, e) {
            (this._valStack = []),
              (this._keyStack = []),
              (this._mapStack = []),
              (this._context = e),
              bo(t, "liberal", "boolean", !1),
              bo(t, "validate", "boolean", !1),
              bo(t, "fallback", "function"),
              (this._escape = bo(t, "escape", "boolean", !1)),
              (this._duplicates = bo(t, "duplicates", "string", "use-first", ["reject", "use-first", "retain"]));
          }
          function Co(t, e) {
            var l = C;
            function f(t) {
              throw new _("Invalid input to xml-to-json(): " + t, "FOJS0006");
            }
            function m(t) {
              0 !== l.getChildElements(t).length && f("node " + t.tagName + " must have no element children");
            }
            function p(t) {
              D.child(t)
                .filter(function (t) {
                  return t.nodeType == l.TEXT_NODE && t.nodeValue && "" !== N.trim(t.nodeValue);
                })
                .next() && f("node " + t.tagName + " must have no text content");
            }
            function h(e) {
              try {
                return x.boolean.fromString(e).toBoolean();
              } catch (t) {
                f("invalid boolean: '" + e + "'");
              }
            }
            function d(t) {
              try {
                JSON.parse('"' + t + '"');
              } catch (t) {
                throw _("invalid escape sequence: " + t.toString(), "FOJS0007");
              }
            }
            function g(e) {
              var t;
              if (e.nodeType == l.DOCUMENT_NODE || e.nodeType == l.DOCUMENT_FRAGMENT_NODE)
                return 1 != (t = l.getChildElements(e)).length && f("document node has " + t.length + " element children"), g(t[0]);
              if (e.nodeType == l.ELEMENT_NODE) {
                var n,
                  r = !1;
                if (e.namespaceURI == vo)
                  switch (
                    (D.attribute(e).forEachItem(function (t) {
                      (t.name.indexOf(":") < 0 || t.namespaceURI == vo) &&
                        ("key" == t.name || "escaped-key" == t.name
                          ? "escaped-key" == t.name
                            ? ((l.xdmParentNode(e) && "map" == l.xdmParentNode(e).localName) ||
                                f("@escaped-key is allowed only on children of map"),
                              h(t.value) && d(e.getAttribute("key")))
                            : (l.xdmParentNode(e) && "map" === l.xdmParentNode(e).localName) || f("@key is allowed only on children of map")
                          : "escaped" == t.name
                          ? ("string" != e.localName && f("@escaped is allowed only on string"), (r = h(t.value)))
                          : f("invalid attribute " + t.name));
                    }),
                    !e.hasAttribute("escaped-key") ||
                      (l.xdmParentNode && "map" != l.xdmParentNode.localName) ||
                      f("escaped-key is allowed only on children of map"),
                    e.localName)
                  ) {
                    case "null":
                      return (
                        D.child(e)
                          .filter(function (t) {
                            return t.nodeType != l.COMMENT_NODE && t.nodeType != l.PROCESSING_INSTRUCTION_NODE;
                          })
                          .next() && f("null element must have no content"),
                        "null"
                      );

                    case "string":
                      m(e);
                      var o = e.textContent;
                      return r
                        ? (d(
                            (o = o
                              .replace(/^"/g, '\\"')
                              .replace(/^[\b]/g, "\\b")
                              .replace(/^\f/g, "\\f")
                              .replace(/^\n/g, "\\n")
                              .replace(/^\r/g, "\\r")
                              .replace(/^\t/g, "\\t")
                              .replace(/^\//g, "\\/")
                              .replace(/([^\\])"/g, '$1\\"')
                              .replace(/([^\\])[\b]/g, "$1\\b")
                              .replace(/([^\\])\f/g, "$1\\f")
                              .replace(/([^\\])\n/g, "$1\\n")
                              .replace(/([^\\])\r/g, "$1\\r")
                              .replace(/([^\\])\t/g, "$1\\t")
                              .replace(/([^\\])\//g, "$1\\/")
                              .replace(/[\u0001-\u001F\u007F-\u009F]/g, Eo))
                          ),
                          '"' + o + '"')
                        : JSON.stringify(o).replace(/\//g, "\\/");

                    case "number":
                      m(e);
                      try {
                        n = x.double.fromString(e.textContent);
                      } catch (t) {
                        f("invalid number");
                      }
                      return isFinite(n.toNumber()) || f("NaN and INF not allowed"), n.toString();

                    case "boolean":
                      return m(e), h(e.textContent), x.boolean.fromString(e.textContent).toString();

                    case "array":
                      p(e);
                      var i = "[",
                        a = "";
                      return (
                        l.getChildElements(e).forEach(function (t) {
                          (i += a + g(t)), (a = ",");
                        }),
                        i + "]"
                      );

                    case "map":
                      p(e);
                      var u = "{",
                        s = "",
                        c = {};
                      return (
                        l.getChildElements(e).forEach(function (t) {
                          t.hasAttribute("key") || f("child element of map must have a key");
                          var e = l.getAttribute(t, "key"),
                            n = e,
                            r = l.getAttribute(t, "escaped-key"),
                            o = !1;
                          r && h(r) && ((o = !0), (n = wo(e))),
                            c[n] && f("duplicate key '" + e + "'"),
                            (c[n] = !0),
                            (u += s + (o ? '"' + e + '"' : JSON.stringify(e).replace(/\//g, "\\/")) + ":" + g(t)),
                            (s = ",");
                        }),
                        u + "}"
                      );

                    default:
                      f("unknown local name " + e.localName);
                  }
                else f("wrong namespace " + e.namespaceURI);
              } else l.isNode(e) || f("not a node"), Error.dumpStack && Error.dumpStack(), f("wrong node kind " + e.nodeType);
            }
            return bo(e, "indent", "boolean", !1), g(t);
          }
          var Do = {
            accumBefore: function (t, e, n) {
              return Mo(t, e, n, "pre");
            },
            accumAfter: function (t, e, n) {
              return Mo(t, e, n, "post");
            }
          };
          function _o(t, n, r) {
            var e = r.fixed.accumulators[n];
            if (!e) throw _("Unknown accumulator " + n, "XTDE3340");
            var o = C.getChildElements(e, "pre")[0],
              i = C.getChildElements(e, "post")[0],
              a = c(C.getChildElements(o, "accRule")),
              u = c(C.getChildElements(i, "accRule")),
              s = M.evaluate(M.argRole(e, "init"), r).expand();
            function c(t) {
              for (var e = [], n = t.length - 1; 0 <= n; n--)
                e.push({
                  rule: t[n],
                  action: C.getChildElements(t[n])[1],
                  pattern: Jn(C.getChildElements(t[n])[0])
                });
              return e;
            }
            function l(t) {
              t._saxonAccumulators || (t._saxonAccumulators = {}), (t._saxonAccumulators[n] = {});
              var e = f(a, t);
              e && (s = m(e, t)),
                (t._saxonAccumulators[n].pre = s),
                D.child(t).forEachItem(l),
                (e = f(u, t)) && (s = m(e, t)),
                (t._saxonAccumulators[n].post = s);
            }
            function f(t, e) {
              for (var n = 0, r = t.length; n < r; n++) if (t[n].pattern(e)) return t[n];
              return null;
            }
            function m(t, e) {
              var n = r.newContext(!0);
              return (n.focus = F.Solo(e)), (n.localVars = [s]), M.evaluate(t.action, n).expand();
            }
            l(t);
          }
          function Mo(t, e, n, r) {
            if (e.nodeType == C.ATTRIBUTE_NODE || e.nodeType == C.NAMESPACE_NODE)
              throw _("Accumulators are not available on attribute or namespace nodes", "XTTE3360");
            return e._saxonOriginal
              ? Mo(t, e._saxonOriginal, n, r)
              : ((e._saxonAccumulators && e._saxonAccumulators.hasOwnProperty(t)) || _o(C.ownerDocument(e), t, n),
                e._saxonAccumulators[t][r]);
          }
          var Fo = {
            merge: Xo
          };
          function Io(t, e, n) {
            for (
              var r,
                o = ko(e),
                i = C.getChildElements(e, "sortKey"),
                a = A.getConverters(i, n),
                u = [],
                s = n.newContext(!1),
                c =
                  ((s.focus = F.Tracker(t)),
                  function (t, e) {
                    var t = M.evalChild1(t, s),
                      n = t.next();
                    if (n && t.next()) throw _("Multiple values in merge key", "XTTE1020");
                    return a[e](n);
                  });
              null !== (r = s.focus.next());

            ) {
              var l = i.map(c);
              u.push({
                item: r,
                keys: l,
                ms: o
              });
            }
            return u;
          }
          function ko(t) {
            return t.hasAttribute("name") ? t.getAttribute("name") : "#unnamed";
          }
          function Po(t, e, n) {
            for (var r = [], o = 0, i = 0; ; ) {
              if (o >= t.length) {
                for (; i < e.length; ) r.push(e[i++]);
                break;
              }
              if (i >= e.length) {
                for (; o < t.length; ) r.push(t[o++]);
                break;
              }
              var a = n(t[o], e[i]);
              a <= 0 && r.push(t[o++]), 0 <= a && r.push(e[i++]);
            }
            return r;
          }
          function Uo(t, e) {
            return C.getChildElements(t, "sortKey").map(function (t) {
              return A.sortKeyProps(t, e);
            });
          }
          function Ro(o) {
            return function (t, e) {
              for (var n = 0; n < o.length; n++) {
                var r = o[n](t.keys[n], e.keys[n]);
                if (0 !== r) return r;
              }
              return 0;
            };
          }
          function Bo(t, e, n) {
            for (var r = null, o = [], i = {}, a = 0; a < e.length; a++) {
              var u = e[a];
              if (null === r || 0 !== n(r, u)) {
                for (
                  var i = {
                      items: [u.item],
                      keys: u.keys,
                      groups: {}
                    },
                    s = 0;
                  s < t.length;
                  s++
                )
                  i.groups[ko(t[s])] = [];
                (i.groups[u.ms] = [u.item]), o.push(i);
              } else i.items.push(u.item), i.groups[u.ms].push(u.item);
              r = u;
            }
            return o;
          }
          function Xo(t, e) {
            for (
              var n = C.getChildElements(t, "mergeSrc"),
                r = n.map(function (t) {
                  return Uo(t, e);
                }),
                o = r[0],
                i = 1;
              i < r.length;
              i++
            )
              for (var a = 0; a < o.length; a++) {
                var u = o[a],
                  s = r[i][a];
                if (u.order !== s.order || u.lang !== s.lang || u.caseOrder !== s.caseOrder || u.dataType !== s.dataType)
                  throw _("All merge sources must have compatible merge keys", "XTDE2210");
              }
            for (
              var c = Ro(
                  o.map(function (t) {
                    return A.compareFnWithProps(t, e);
                  })
                ),
                l = null,
                f = 0;
              f < n.length;
              f++
            )
              for (
                var m = n[f],
                  p = e.newContext(!1),
                  h = M.argRole(m, "forEachItem"),
                  d =
                    ((p.focus = h ? F.Tracker(M.evaluate(h, e)) : F.Tracker(F.Singleton(e.getCurrentFocus()))), M.argRole(m, "selectRows"));
                null !== p.focus.next();

              )
                var g = Io(M.evaluate(d, p), m, p), l = null === l ? g : Po(l, g, c);
            if (null === l) return F.Empty;
            for (var y = Bo(n, l, c), v = M.argRole(t, "action"), x = [], N = 0; N < y.length; N++)
              for (
                var b,
                  S = e.newContext(!1),
                  w = ((S.focus = F.Tracker(F.Singleton(y[N].items[0]))), (S.currentMergeGroup = y[N]), M.evaluate(v, S));
                null !== (b = w.next());

              )
                x.push(b);
            return F.ForArray(x);
          }
          t = {
            parse: function () {
              return Lo(), ci.XPath.parse.apply(null, arguments);
            },
            compile: function () {
              return Lo(), ci.XPath.compile.apply(null, arguments);
            },
            evaluate: function () {
              return Lo(), ci.XPath.evaluate.apply(null, arguments);
            },
            evaluateXDM: function () {
              return Lo(), ci.XPath.evaluateXDM.apply(null, arguments);
            },
            setStaticContext: function () {
              return Lo(), ci.XPath.setStaticContext.apply(null, arguments);
            }
          };
          function Lo() {
            var t = ci.getPlatform().readResource("lib/xpath/XPathJS.min.js"),
              t = ((t += "return XPath;"), new Function(t));
            ci.XPath = t();
          }
          var O = {},
            zo = "undefined" != typeof window;
          function Jo() {
            zo
              ? (Go(U.platform), P("Saxon-JS " + ai().productVersion + " in browser", 0))
              : (Go(JSTestDriver.platform), P("Saxon-JS " + ai().productVersion + " in Nashorn")),
              "function" == typeof O.initialize && O.initialize();
          }
          function Go(t) {
            O = t;
          }
          var jo = 1;
          function P(t, e) {
            (e = 0 !== e ? e || 1 : e) <= jo && O.saxonPrint(t);
          }
          var qo = null;
          function $o() {
            return qo;
          }
          var Qo,
            Ko = null;
          function Vo(t) {
            var s = new Function("uri", "local", t ? t.getAttribute("test") : "return false");
            function c(t) {
              switch (t.nodeType) {
                case C.DOCUMENT_NODE:
                  c(t.documentElement);
                  break;

                case C.DOCUMENT_FRAGMENT_NODE:
                case C.ELEMENT_NODE:
                  for (
                    var e = C.nameOfNode(t),
                      n = C.getInheritedAttribute(t, "xml:space"),
                      r = s(e.uri, e.local) && !(n && "preserve" == n),
                      o = t.childNodes,
                      i = 0;
                    i < o.length;

                  ) {
                    var a,
                      u = o[i];
                    u.nodeType == C.CDATA_SECTION && ((a = C.ownerDocument(t).createTextNode(u.nodeValue)), t.replaceChild(a, u), (u = a)),
                      u.nodeType == C.TEXT_NODE ? (r && "" === N.trim(u.nodeValue) ? t.removeChild(u) : i++) : (c(u), i++);
                  }
              }
            }
            return function (t) {
              return c(t), t;
            };
          }
          function Ho(t, e, n) {
            var r = D.child(t.documentElement)
                .filter(function (t) {
                  return "stripJS" == t.tagName;
                })
                .next(),
              r = ((Ko = Vo(r)), e && Ko && (e = Ko(e)), (n.saxonVersion = $o()), ni(t, e, n)),
              o =
                ((r.fixed.spaceStripper = Ko),
                e &&
                  (C.obtainDocumentNumber(e),
                  P("Adding " + (o = e._saxonBaseUri) + " to doc pool (doc " + e._saxonBaseUri + ")", 2),
                  (r.fixed.documentPool[o] = e)),
                n.destination),
              i =
                ((o = zo && void 0 === n.destination ? "application" : o) &&
                  !/^(appendToBody|prependToBody|replaceBody|application|native)$/.test(o) &&
                  P("Warning: supplied transformation option not recognised - destination: " + o, 1),
                zo && /^(appendToBody|prependToBody|replaceBody)$/.test(o) && (r.resultDocument = window.document),
                n.initialTemplate),
              a = (i && i.indexOf("Q{") < 0 && (i = "Q{}" + i), n.initialFunction),
              u = n.initialMode,
              t =
                ("" !==
                  (u =
                    "#unnamed" ==
                    (u = u || (t.documentElement.hasAttribute("defaultMode") ? t.documentElement.getAttribute("defaultMode") : ""))
                      ? ""
                      : u) &&
                  u.indexOf("Q{") < 0 &&
                  (u = "Q{}" + u),
                "Q{" + M.KNOWN_URI.xsl + "}initial-template");
            if ((e || i || (ri(r, t) && (i = t)), a)) {
              var t = n.functionParams || [],
                s = t.length,
                c = oi(r, a, s);
              if (!c) throw _("Unknown initial function " + a + "#" + s, "XTDE0041");
              a = C.firstElementChild(c.decl);
              (r.focus = {}),
                (r.currentComponent = c),
                r.clearGrouping(),
                (r.tempOutputState = "function"),
                (r.currentMode = {}),
                (r.currentTemplate = null),
                (r.localVars = t.map(function (t) {
                  t = M.convertFromJS(t, !1, !0);
                  return Array.isArray(t) ? t : [t];
                })),
                (r.localParams = {}),
                (s = M.evaluate(M.argRole(a, "body"), r));
            } else if (i) {
              c = ri(r, i);
              if (!c) throw _("Unknown initial template " + i, "XTDE0040");
              t = C.firstElementChild(c.decl);
              r.fixed.globalContextItem ? (r.focus = F.Solo(e)) : ((r.focus = F.Tracker(F.Empty)), r.focus.next()),
                M.checkTemplateFocus(t, r),
                (r.currentComponent = c),
                (r.currentMode = {}),
                Yo(n, r),
                (s = M.evalChild1(t, r));
            } else {
              a = r.fixed.modes[u];
              if (!a) throw _("Unknown initial mode " + u, "XTDE0045");
              if (!e) throw _("No source document, initial template, or initial mode supplied", "SXJS0006");
              i = parseInt(a._expr.parentNode.getAttribute("id"));
              (r.currentComponent = r.fixed.components[i]), (r.focus = F.Tracker(F.Singleton(e))), Yo(n, r), (s = a.applyTemplates(r));
            }
            if ("application" == o) n.principalResult = n.isDynamicStylesheet ? s : M.convertToJS(s.expand());
            else if ("native" == o) {
              c = s.expand();
              1 == c.length && C.isNode(c[0]) && (c[0] = x.string.fromString(M.serialize(F.ForArray(c)))), (n.principalResult = c);
            } else {
              M.makeComplexContent(r.resultRoot, s, r);
              t = D.child(r.resultRoot);
              if (t)
                if (zo) {
                  var l = window.document.body;
                  if ("appendToBody" == o)
                    t.forEachItem(function (t) {
                      l.appendChild(t);
                    });
                  else if ("prependToBody" == o) {
                    var f = l.firstChild;
                    t.forEachItem(function (t) {
                      l.insertBefore(t, f);
                    });
                  } else if ("replaceBody" == o) {
                    for (; 0 < l.childNodes.length; ) l.removeChild(l.childNodes[0]);
                    t.forEachItem(function (t) {
                      l.appendChild(t);
                    });
                  }
                } else n.principalResult = r.resultRoot;
            }
            zo && ti(r);
          }
          function Yo(t, e) {
            function n(t) {
              var e,
                n,
                r = {};
              for (e in t)
                t.hasOwnProperty(e) &&
                  ((n = M.convertFromJS(t[e], !1, !0)), (r[e.indexOf("Q{") < 0 ? "Q{}" + e : e] = Array.isArray(n) ? n : [n]));
              return r;
            }
            t.templateParams && (e.localParams = n(t.templateParams)), t.tunnelParams && (e.tunnelParams = n(t.tunnelParams));
          }
          function Wo(n, r) {
            function t(t) {
              var e,
                n = "";
              for (e in t) t.hasOwnProperty(e) && (n += e + ", ");
              return n;
            }
            var e, o;
            function i(t, e) {
              if (null === t) throw _("No stylesheet supplied", "SXJS0006");
              Zo(t), Ho(t, e, n), r && r(n.principalResult);
            }
            if (
              (P("Transform options supplied: " + t(n), 0),
              n.stylesheetParams || (n.stylesheetParams = {}),
              "function" == typeof O.deliverMessage && O.deliverMessage(n),
              "number" == typeof n.logLevel && ui(n.logLevel),
              zo)
            ) {
              var a = [],
                u = window.document.baseURI;
              n.stylesheetLocation &&
                ((n.stylesheetLocation = O.resolveUri(n.stylesheetLocation.toString(), u)), a.push(n.stylesheetLocation)),
                n.sourceLocation && ((n.sourceLocation = O.resolveUri(n.sourceLocation.toString(), u)), a.push(n.sourceLocation)),
                (e = n.stylesheetNode || null),
                (o = n.sourceNode || (n.sourceText ? O.parseXmlFromString(n.sourceText) : null)),
                n.sourceNode && n.sourceNode.baseURI && (o._saxonBaseUri = n.sourceNode.baseURI),
                0 === a.length
                  ? i(e, o)
                  : O.asyncGetMultipleXml(a, function (t) {
                      (e = n.stylesheetLocation ? t[n.stylesheetLocation] : e), (o = n.sourceLocation ? t[n.sourceLocation] : o), i(e, o);
                    });
            } else {
              if (!(e = n.stylesheetNode)) {
                var u = n.stylesheetText;
                if (!u) {
                  var a = n.stylesheetFileName;
                  if (!a) throw _("No stylesheet supplied", "SXJS0006");
                  u = O.readFile(a);
                }
                e = O.parseXmlFromString(u);
              }
              (o = n.sourceNode) && n.sourceNode.baseURI && (o._saxonBaseUri = n.sourceNode.baseURI),
                o ||
                  ((a = n.sourceText) || ((u = n.sourceFileName) && (a = O.readFile(u))),
                  a && ((o = O.parseXmlFromString(a))._saxonBaseUri = n.sourceLocation || n.sourceFileName)),
                i(e, o);
            }
          }
          function Zo(t) {
            var n = 0,
              e = 0;
            function r(t, e) {
              for (var n = e << 8, r = 0; r < t.length; r++) n = (n << 1) + t.charCodeAt(r);
              return n;
            }
            function o(t, e) {
              return r(t.local, e) ^ r(t.uri, e);
            }
            function i(t) {
              (n ^= o(C.nameOfNode(t), e++)),
                D.attribute(t).forEachItem(function (t) {
                  n = (n ^= o(C.nameOfNode(t), e)) ^ r(t.value, e);
                }),
                D.child(t)
                  .filter(function (t) {
                    return t.nodeType == C.ELEMENT_NODE;
                  })
                  .forEachItem(function (t) {
                    i(t);
                  }),
                (n ^= 1);
            }
            var a = !1;
            if (
              (D.child(t).forEachItem(function (t) {
                if (t.nodeType == C.ELEMENT_NODE) {
                  if ("package" == C.nameOfNode(t).local) {
                    var e = C.getAttribute(t, "target", "not specified");
                    if (
                      ((qo = C.getAttribute(t, "saxonVersion", "9.7.0.7")),
                      (Qo = C.getAttribute(t, "relocatable", "false")),
                      P("SEF generated by Saxon-EE version " + qo + " with -target:" + e + " -relocate:" + Qo, 0),
                      "9.7.0.7" != qo && "JS" != e)
                    )
                      throw _(
                        "Supplied SEF is not customized for use with Saxon-JS. The option -target:JS should be set when generating the export. target is: " +
                          e,
                        "SXJS0006"
                      );
                    if (t.hasAttribute("expiry"))
                      if (x.date.fromString(t.getAttribute("expiry")).compareTo(x.date.fromDate(new Date(), 0)) < 0)
                        throw _("Development license for supplied stylesheet has expired", "SXJS0006");
                  }
                  i(t);
                } else if (t.nodeType == C.PROCESSING_INSTRUCTION_NODE && C.nameOfNode(t).local == String.fromCharCode(931)) {
                  e = (n < 0 ? 4294967295 + n + 1 : n).toString(16);
                  if (e != t.data) throw _("Invalid checksum in SEF " + t.data + " != " + e, "SXJS0006");
                  a = !0;
                }
              }),
              !a)
            )
              throw _("No checksum found in SEF", "SXJS0006");
          }
          function ti(o) {
            function t(r, t) {
              var e = function (t) {
                var e = t.target,
                  n = o.newContext(!0),
                  t =
                    ((n.tempOutputState = !1),
                    (n.currentEvent = t),
                    (n.focus = F.Tracker(F.Singleton(M.convertFromJS(e)))),
                    parseInt(r._expr.parentNode.getAttribute("id")));
                (n.currentComponent = o.fixed.components[t]), r.applyTemplates(n).expand();
              };
              (-1 ==
              [
                "httpabort",
                "afterprint",
                "beforeprint",
                "beforeunload",
                "hashchange",
                "languagechange",
                "message",
                "offline",
                "online",
                "pagehide",
                "pageshow",
                "popstate",
                "storage",
                "unhandledrejection",
                "unload"
              ].indexOf(t)
                ? window.document
                : window
              ).addEventListener(t, e, !1);
            }
            var e,
              n,
              r = o.fixed.modes;
            for (e in r) r.hasOwnProperty(e) && (n = e.split("}"))[0] == "Q{" + M.KNOWN_URI.ixsl && t(r[e], n[1].replace(/^on/, ""));
          }
          var ei =
            zo && window.performance && window.performance.now
              ? window.performance.now
              : function () {
                  return Date.now().valueOf();
                };
          function ni(n, t, e) {
            function r(e, t) {
              D.descendant(n)
                .filter(function (t) {
                  return t.nodeType == C.ELEMENT_NODE && t.tagName == e;
                })
                .forEachItem(t);
            }
            function l(t) {
              t = C.getAttribute(t, "name");
              return t ? (/^Q\{/.test(t) ? t : "Q{}" + t) : null;
            }
            var f = new ii();
            function m(t, r) {
              function e(t) {
                for (var e = C.getChildElements(t, "co"), n = 0; n < e.length; n++) r(e[n]);
              }
              e(t);
              t = C.firstElementChild(t, "overridden");
              null !== t && e(t);
            }
            if (
              ((f.fixed = {
                options: e,
                stylesheet: n,
                globalContextItem: t,
                topPackage: null,
                packages: {},
                components: {},
                globalVars: {},
                modes: {},
                userFunctions: {},
                accumulators: {},
                decimalFormats: {},
                resultDocUris: {},
                _nextDocumentNumber: 0,
                currentDate: {}
              }),
              e.collations || (e.collations = {}),
              (e.collations[A.codepointCollationUri] = A.codepointCollation()),
              (e.collations[A.fotsCaseblindCollationUri] = A.caseblindCollation()),
              (e.collations[A.htmlCaseInsensitiveCollationUri] = A.caseblindCollation()),
              (e.collations[A.xsltsCaseblindCollationUri] = A.caseblindCollation()),
              r("package", function (t) {
                var n = {
                  name: t.getAttribute("name"),
                  decl: t,
                  decimalFormats: {},
                  keys: {}
                };
                (f.fixed.packages[n.name] = n),
                  f.fixed.topPackage || (f.fixed.topPackage = n),
                  m(t, function (t) {
                    var e = parseInt(t.getAttribute("id"));
                    f.fixed.components[e] = {
                      id: e,
                      visibility: t.getAttribute("vis"),
                      decl: t,
                      pack: n,
                      actor: null,
                      bindings: t
                        .getAttribute("binds")
                        .split(" ")
                        .map(function (t) {
                          return parseInt(t);
                        })
                    };
                  });
              }),
              r("package", function (t) {
                for (
                  var e = f.fixed.packages[t.getAttribute("name")],
                    n =
                      (m(t, function (t) {
                        var e = parseInt(t.getAttribute("id")),
                          e = f.fixed.components[e],
                          n = C.firstElementChild(t);
                        null === n &&
                          (f.fixed.packages[t.getAttribute("dpack")],
                          (t = f.fixed.components[parseInt(t.getAttribute("base"))].decl),
                          (n = C.firstElementChild(t))),
                          "globalVariable" === (e.actor = n).tagName || "globalParam" === n.tagName
                            ? (e.value = null)
                            : "mode" === n.tagName && ((t = new Nn(n)), (e.mode = t), (e = l(n)), (f.fixed.modes[null === e ? "" : e] = t));
                      }),
                      C.getChildElements(t, "decimalFormat")),
                    r = 0;
                  r < n.length;
                  r++
                ) {
                  var o = n[r],
                    i = l(o);
                  e.decimalFormats[null === i ? "Q{}" : i] = o;
                }
                for (var a = C.getChildElements(t, "key"), u = 0; u < a.length; u++) {
                  var s = a[u],
                    c = l(s);
                  e.keys[c] ? e.keys[c].push(s) : (e.keys[c] = [s]);
                }
              }),
              r("mode", function (t) {
                var e = l(t);
                f.fixed.modes[null === e ? "" : e] = new Nn(t);
              }),
              r("globalVariable", function (t) {
                var e = l(t);
                f.fixed.globalVars[e] = {
                  decl: t,
                  value: null,
                  isParam: !1
                };
              }),
              r("globalParam", function (t) {
                var e = l(t);
                f.fixed.globalVars[e] = {
                  decl: t,
                  value: null,
                  isParam: !0
                };
              }),
              r("function", function (t) {
                M.hasFlag(t, "m") && M.notImplemented("memo function");
                var e = l(t),
                  n = D.child(t)
                    .filter(function (t) {
                      return "arg" == t.tagName;
                    })
                    .count();
                (f.fixed.userFunctions[e + "#" + n] = M.argRole(t, "body")), (f.fixed.userFunctions[e + "#-1"] = !0);
              }),
              r("accumulator", function (t) {
                var e = l(t);
                f.fixed.accumulators[e] = t;
              }),
              (f.fixed.documentPool = {}),
              (f.fixed._nextDocumentNumber = 0),
              (f.fixed.currentDate = new Date()),
              zo)
            ) {
              t = window.document.baseURI;
              if (
                ((f.fixed.htmlURI = t),
                (f.fixed.javascriptURI = O.baseUri()),
                e.stylesheetLocation && !C.isAbsoluteURI(e.stylesheetLocation))
              )
                throw _("stylesheetLocation should be absolute by now", "SXJS0004");
              f.fixed.staticBaseURI = !e.isDynamicStylesheet && "true" === Qo ? e.stylesheetLocation || t : null;
            } else f.fixed.staticBaseURI = "true" === Qo ? e.stylesheetFileName : null;
            return (
              (f.currentComponent = null),
              (f.resultDocument = zo ? document.implementation.createDocument(null, "html", null) : new Document()),
              (f.resultRoot = f.resultDocument.createDocumentFragment()),
              (f.localVars = []),
              (f.localParams = {}),
              (f.tunnelParams = {}),
              f
            );
          }
          function ri(t, e) {
            for (var n = t.fixed.topPackage, r = C.getChildElements(n.decl, "co"), o = 0; o < r.length; o++) {
              var i = parseInt(r[o].getAttribute("id")),
                i = t.fixed.components[i],
                a = i.actor;
              if ("template" === a.tagName && a.getAttribute("name") === e) return i;
            }
          }
          function oi(t, e, n) {
            for (var r = t.fixed.topPackage, o = C.getChildElements(r.decl, "co"), i = 0; i < o.length; i++) {
              var a = parseInt(o[i].getAttribute("id")),
                a = t.fixed.components[a],
                u = a.actor;
              if ("function" === u.tagName && u.getAttribute("name") === e && C.getChildElements(u, "arg").length == n) return a;
            }
          }
          function ii() {}
          function ai() {
            return {
              version: 3,
              vendor: "Saxonica",
              vendorURL: "http://www.saxonica.com/",
              productName: "Saxon-JS",
              productVersion: "1.2.0",
              isSchemaAware: !1,
              supportsSerialization: !1,
              supportsBackwardsCompatibility: !0,
              supportsNamespaceAxis: !0,
              supportsStreaming: !1,
              supportsDynamicEvaluation: !0,
              supportsHigherOrderFunctions: !1,
              xPathVersion: 3.1,
              xsdVersion: 1.1
            };
          }
          function ui(t) {
            "number" == typeof t && (jo = t);
          }
          return (
            (ii.prototype = {
              depth: 0,
              focus: null,
              currentComponent: null,
              resultDocument: null,
              tempOutputState: !1,
              fixed: {},
              localParams: {},
              tunnelParams: {},
              currentTemplate: null,
              currentMode: {},
              currentError: null,
              currentEvent: null,
              currentGroup: null,
              currentGroupingKey: null,
              currentMergeGroup: null,
              localVars: [],
              toString: function () {
                var t,
                  e = "{";
                for (t in this.localParams) this.localParams.hasOwnProperty(t) && (e += t + ":(" + this.localParams[t] + "),");
                return (e += "}"), "context: " + this.getCurrentFocus() + " localParams: " + e;
              },
              newContext: function (t) {
                var e = this,
                  n = new ii();
                return (
                  (n.depth = e.depth + 1),
                  (n.focus = e.focus),
                  (n.currentComponent = e.currentComponent),
                  (n.resultDocument = e.resultDocument),
                  (n.currentMode = e.currentMode),
                  (n.currentTemplate = e.currentTemplate),
                  (n.currentError = e.currentError),
                  (n.currentGroup = e.currentGroup),
                  (n.currentGroupingKey = e.currentGroupingKey),
                  (n.currentMergeGroup = e.currentMergeGroup),
                  (n.fixed = e.fixed),
                  (n.tempOutputState = e.tempOutputState),
                  (n.currentEvent = e.currentEvent),
                  t
                    ? ((n.localParams = {}), (n.tunnelParams = {}), (n.localVars = []))
                    : ((n.localParams = e.localParams), (n.tunnelParams = e.tunnelParams), (n.localVars = e.localVars)),
                  n
                );
              },
              clearGrouping: function () {
                (this.currentGroup = null), (this.currentGroupingKey = null), (this.currentMergeGroup = null);
              },
              createElement: function (t, e) {
                t =
                  ("" !== t && "http://www.w3.org/1999/xhtml" != t) || !zo || this.resultDocument != window.document
                    ? this.resultDocument.createElementNS(t, e)
                    : this.resultDocument.createElement(e);
                return t;
              },
              createAttribute: function (t, e) {
                return new ae(new x.QName.fromEQName("Q{" + t + "}" + e), null, null);
              },
              createAttributeFromQName: function (t) {
                return new ae(t, null, null);
              },
              noCurrentFocus: function () {
                return !this.focus || !this.focus.current;
              },
              getCurrentFocus: function () {
                return this.noCurrentFocus() ? null : this.focus.current;
              }
            }),
            Jo(),
            {
              transform: Wo,
              getProcessorInfo: ai,
              setLogLevel: ui,
              getLogLevel: function () {
                return jo;
              },
              setPlatform: Go,
              getPlatform: function () {
                return O;
              },
              getNavigator: function () {
                return window.navigator.userAgent;
              },
              timeStamp: ei,
              internalTransform: Ho,
              U: {
                Atomic: x,
                Axis: D,
                Context: ii,
                Compare: A,
                calculator: gr,
                nameOfNode: C.nameOfNode,
                isNode: C.isNode,
                isAttr: C.isAttr,
                isNamespaceNode: C.isNSNode,
                declareNS: C.declareNS,
                getInheritedAttribute: C.getInheritedAttribute,
                getChildElements: C.getChildElements,
                isMap: M.isMap,
                isArray: M.isArray,
                roleDiagnostic: M.roleDiagnostic,
                wsCollapse: M.wsCollapse,
                ForArray: F.ForArray,
                AnyIterator: F.AnyIterator,
                obtainDocumentNumber: C.obtainDocumentNumber,
                evaluate: M.evaluate,
                declaringPackage: M.declaringPackage,
                Iter: F,
                convertFromJS: M.convertFromJS,
                convertToJS: M.convertToJS,
                stringToCodepoints: M.stringToCodepoints
              },
              XError: _,
              XPath: t
            }
          );
        })(),
        u = Object.freeze({
          default: ci
        }),
        c = t(function* () {
          return (e =
            e ||
            t(function* () {
              var t = i(
                  yield Promise.all([
                    li.e(0).then(li.bind(null, 118)),
                    li.e(0).then(li.bind(null, 119)),
                    li.e(0).then(li.bind(null, 120)),
                    li.e(0).then(li.bind(null, 121))
                  ]),
                  4
                ),
                n = t[0],
                r = t[1],
                e = t[2],
                o = t[3];
              return Object.assign({}, ci.getPlatform(), {
                saxonPrint: function (t) {
                  t && t.match(/Saxon\-JS .*? in browser/);
                },
                baseUri: function () {
                  return "SaxonJS.js";
                },
                readFile: function (t) {
                  return t ? (t.endsWith("texmap.xml") ? e.default : t.endsWith("texmap-upgreek.xml") ? o.default : null) : null;
                },
                readResource: function (t) {
                  var e;
                  return t
                    ? t.endsWith("categories.json")
                      ? "string" == typeof (e = n.default || n)
                        ? e
                        : JSON.stringify(e)
                      : t.endsWith("functions.json")
                      ? "string" == typeof (e = r.default || r)
                        ? e
                        : JSON.stringify(e)
                      : null
                    : null;
                }
              });
            })());
        }),
        l = function (t) {
          return `<?xml version="1.0" encoding="UTF-8"?>
<article xmlns="http://docbook.org/ns/docbook" version="5.0">
  <equation>
  ${t}
  </equation>
</article>`;
        },
        f = (function () {
          var e = t(function* (t) {
            var r = (yield Promise.resolve().then(function () {
              return u;
            })).default;
            window.SaxonJS = r;
            var e = (yield li.e(0).then(li.bind(null, 122))).default,
              n = yield c();
            r.setLogLevel(-1), r.setPlatform(n);
            var o = new DOMParser().parseFromString(e, "application/xml"),
              n = (n = Object(a.sanitize)(t, {
                USE_PROFILES: {
                  mathMl: !0
                }
              })).replace(/&nbsp;/g, "&#xa0;"),
              i = l(n);
            return new Promise(function (e, n) {
              try {
                r.transform(
                  {
                    stylesheetNode: o,
                    sourceText: i,
                    deliverMessage: function () {}
                  },
                  function (t) {
                    t = t.querySelector("equation");
                    !t || t.childNodes.length < 2 || "function" != typeof t.childNodes[1].data.trim
                      ? e(null)
                      : e(t.childNodes[1].data.trim());
                  }
                );
              } catch (t) {
                n(t);
              }
            });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      m.a = f;
    }.call(this, li(96)(t));
  },
  8: function (e, t) {
    function n(t) {
      return (
        (e.exports = n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        n(t)
      );
    }
    (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  95: function (t, e, n) {
    "use strict";
    n.r(e);
    var e = n(5),
      e = n.n(e),
      r = n(2),
      o = n.n(r),
      i = n(64),
      r = n(23);
    const a = Object(r.parse)(window.location.search),
      u = a.mathml;
    e()(
      o.a.mark(function t() {
        var e;
        return o.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.prev = 0), (t.next = 3), Object(i.a)(u);

                case 3:
                  (e = t.sent),
                    window.parent.postMessage(
                      {
                        type: "EQUATIO_MATHML_RESULT",
                        latex: e
                      },
                      "https://docs.google.com"
                    ),
                    (t.next = 10);
                  break;

                case 7:
                  (t.prev = 7),
                    (t.t0 = t.catch(0)),
                    window.parent.postMessage(
                      {
                        type: "EQUATIO_MATHML_RESULT",
                        error: "failed"
                      },
                      "https://docs.google.com"
                    );

                case 10:
                case "end":
                  return t.stop();
              }
          },
          t,
          null,
          [[0, 7]]
        );
      })
    )();
  },
  96: function (t, e) {
    t.exports = function (t) {
      var e;
      return (
        t.webpackPolyfill ||
          ((e = Object.create(t)).children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            }
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            }
          }),
          Object.defineProperty(e, "exports", {
            enumerable: !0
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  97: function (e, t) {
    !function (t) {
      e.exports = t;
    }.call(this, {});
  }
});
