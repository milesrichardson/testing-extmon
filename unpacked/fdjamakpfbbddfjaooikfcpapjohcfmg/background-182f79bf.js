/*! For license information please see background-182f79bf.js.LICENSE.txt */
"use strict";
(self.webpackChunk_dashlane_amphora = self.webpackChunk_dashlane_amphora || []).push([
  [782],
  {
    54964: (t, r, e) => {
      e.d(r, { G: () => f });
      e(35758),
        e(82312),
        e(23041),
        e(24957),
        e(68126),
        e(13560),
        e(75815),
        e(70758),
        e(4473),
        e(45749),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(92204),
        o = e(25601);
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          i(t)
        );
      }
      function a() {
        a = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          c = o.iterator || "@@iterator",
          u = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, c) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, a, c, u) {
            var s = h(t[n], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == i(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, c, u);
                    },
                    function (t) {
                      o("throw", t, c, u);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return o("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (a = a ? a.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[c];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, s, "Generator"),
          l(w, c, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function c(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function u(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              c(i, n, o, a, u, "next", t);
            }
            function u(t) {
              c(i, n, o, a, u, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function s(t) {
        if (
          !(
            t.buildType &&
            "string" == typeof t.buildType &&
            Object.values(o.ApplicationBuildType)
              .map(function (t) {
                return t.toString();
              })
              .includes(t.buildType)
          )
        )
          throw new Error("Build type from runtime-config.json is invalid");
        return o.ApplicationBuildType[t.buildType];
      }
      var l = (function () {
          var t = u(
            a().mark(function t() {
              var r, e, o, i;
              return a().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ((r = (0, n.A)("runtime-config.json"))) {
                          t.next = 3;
                          break;
                        }
                        throw new Error("Could not build path to runtime-config.json");
                      case 3:
                        return (t.prev = 3), (t.next = 6), fetch(r);
                      case 6:
                        return (e = t.sent), (t.next = 9), e.json();
                      case 9:
                        return (o = t.sent), (i = { buildType: s(o) }), t.abrupt("return", i);
                      case 14:
                        throw ((t.prev = 14), (t.t0 = t.catch(3)), new Error("Unable to read buildType from runtime-config.json"));
                      case 17:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[3, 14]]
              );
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        f = (function () {
          var t = u(
            a().mark(function t() {
              var r, e;
              return a().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), l();
                    case 2:
                      return (r = t.sent), (e = r.buildType), t.abrupt("return", e);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
    },
    11429: (t, r, e) => {
      e.d(r, { c: () => f, n: () => l });
      e(2165),
        e(72424),
        e(32202),
        e(7541),
        e(2191),
        e(75986),
        e(22440),
        e(94973),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(296),
        e(30094),
        e(83746),
        e(37944),
        e(75815),
        e(4473),
        e(68126),
        e(32721);
      var n,
        o = e(55664);
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          i(t)
        );
      }
      function a(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function c(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(e), !0).forEach(function (r) {
                u(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : a(Object(e)).forEach(function (r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return t;
      }
      function u(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== i(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== i(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === i(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      var s = { styxAccess: "DASHQ7DNHYSPYSG6JSF6", styxSecret: "LNS273zaVvwNM+VKOjotBYygJyPaM0CXshpdf0j7" },
        l = function () {},
        f = c(c(c({}, o.i), s), null != (n = l()) ? n : {});
    },
    17532: (t, r, e) => {
      e.d(r, { v: () => S });
      e(75815),
        e(45749),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(4473),
        e(68126),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n,
        o = e(25601),
        i = e(63272),
        a = e(28509),
        c = e(84318),
        u = {
          platformName: "server_standalone",
          appVersion: (0, c.W)().version,
          browser: i.getBrowserName(),
          browserVersion: i.getBrowserVersion(),
          country: i.getBrowserCountry(),
          os: null != (n = a.getOSName()) ? n : "",
          osCountry: i.getBrowserCountry(),
          osVersion: a.getOSVersion(),
          lang: i.getBrowserLanguage(),
          manifestVersion: (0, c.W)().manifest_version
        },
        s = e(11429),
        l = e(54964);
      e(296), e(30094), e(32721), e(72424), e(32202), e(7541), e(22440), e(94973), e(98590), e(4639), e(32381), e(503), e(80719), e(93349);
      function f(t) {
        return (
          (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          f(t)
        );
      }
      function h(t, r) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, r) {
            var e = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
            if (null != e) {
              var n,
                o,
                i,
                a,
                c = [],
                u = !0,
                s = !1;
              try {
                if (((i = (e = e.call(t)).next), 0 === r)) {
                  if (Object(e) !== e) return;
                  u = !1;
                } else for (; !(u = (n = i.call(e)).done) && (c.push(n.value), c.length !== r); u = !0);
              } catch (t) {
                (s = !0), (o = t);
              } finally {
                try {
                  if (!u && null != e.return && ((a = e.return()), Object(a) !== a)) return;
                } finally {
                  if (s) throw o;
                }
              }
              return c;
            }
          })(t, r) ||
          (function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return p(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return p(t, r);
          })(t, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function y(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== f(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== f(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === f(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      function v(t) {
        return (
          (v =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          v(t)
        );
      }
      function d(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function m(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== v(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== v(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === v(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      var g,
        b,
        w = (function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var e = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? d(Object(e), !0).forEach(function (r) {
                  m(t, r, e[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
              : d(Object(e)).forEach(function (r) {
                  Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                });
          }
          return t;
        })(
          { LOG_LEVEL: 4, CODE_NAME: "amphora", MANIFEST_VERSION: (0, c.W)().manifest_version },
          (y((g = {}), o.DashlaneAPISchemesNames.DASHLANE_API_HOST_WITH_SCHEME, "https://api.dashlane.com"),
          y(g, o.DashlaneAPISchemesNames.DASHLANE_WS_HOST_WITH_SCHEME, ""),
          (b = g),
          Object.fromEntries(
            Object.entries(b).filter(function (t) {
              return h(t, 2)[1];
            })
          ))
        ),
        x = e(80524);
      function L(t) {
        return (
          (L =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          L(t)
        );
      }
      function E() {
        E = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function s(t, r, e, o) {
          var i = r && r.prototype instanceof h ? r : h,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: x(t, e, c) }), a;
        }
        function l(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var f = {};
        function h() {}
        function p() {}
        function y() {}
        var v = {};
        u(v, i, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          m = d && d(d(P([])));
        m && m !== r && e.call(m, i) && (v = m);
        var g = (y.prototype = h.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function w(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == L(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, a, c);
                    },
                    function (t) {
                      o("throw", t, a, c);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return o("throw", t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (i = i ? i.then(n, n) : n());
            }
          });
        }
        function x(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = l(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === f)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              f
            );
          var o = l(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), f;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                f)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), f);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = y),
          n(g, "constructor", { value: y, configurable: !0 }),
          n(y, "constructor", { value: p, configurable: !0 }),
          (p.displayName = u(y, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === p || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          u(g, c, "Generator"),
          u(g, i, function () {
            return this;
          }),
          u(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), f) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                f
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), f;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), f;
            }
          }),
          t
        );
      }
      function O(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function S(t) {
        return j.apply(this, arguments);
      }
      function j() {
        var t;
        return (
          (t = E().mark(function t(r) {
            var e, n, i, a, c, f, h, p, y, v, d;
            return E().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = r.apiConnector),
                      (n = r.debugConnector),
                      (i = r.infrastructureConnectors),
                      (a = r.legacyExtensionConnector),
                      (c = r.legacyWebappConnector),
                      (f = r.legacyMaverickConnector),
                      (h = r.publicPath),
                      (p = r.storageLayer),
                      (y = r.sessionStorage),
                      (v = r.app),
                      (0, x._v)({ message: "Carbon initialization started", tags: ["initCarbon"] }),
                      (t.t0 = o.init),
                      (t.t1 = { api: e, debug: n, extension: a, leeloo: c, maverick: f }),
                      (t.t2 = { connectors: i }),
                      (t.t3 = u),
                      (t.t4 = h),
                      (t.t5 = p),
                      (t.t6 = y),
                      (t.t7 = s.c),
                      (t.t8 = w),
                      (t.next = 13),
                      (0, l.G)()
                    );
                  case 13:
                    return (
                      (t.t9 = t.sent),
                      (t.t10 = { syncWithLocalClients: !0 }),
                      (t.t11 = { buildType: t.t9, sync: t.t10 }),
                      (t.t12 = v.createClient),
                      (t.t13 = {
                        connectors: t.t1,
                        infrastructure: t.t2,
                        platformInfo: t.t3,
                        publicPath: t.t4,
                        storageLayer: t.t5,
                        sessionStorage: t.t6,
                        keys: t.t7,
                        config: t.t8,
                        settings: t.t11,
                        createClients: t.t12
                      }),
                      (t.next = 20),
                      (0, t.t0)(t.t13)
                    );
                  case 20:
                    return (
                      (d = t.sent), (0, x._v)({ message: "Carbon initialization finished", tags: ["initCarbon"] }), t.abrupt("return", d)
                    );
                  case 23:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (j = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                O(i, n, o, a, c, "next", t);
              }
              function c(t) {
                O(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          j.apply(this, arguments)
        );
      }
    },
    25512: (t, r, e) => {
      e.d(r, { K: () => m, Z: () => g });
      e(75815),
        e(45749),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(4473),
        e(68126),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549),
        e(296),
        e(30094),
        e(32721);
      var n = e(25601),
        o = e(41808),
        i = e(45441),
        a = e(9244),
        c = e(52477),
        u = e(15026),
        s = e(56847),
        l = e(79563);
      function f(t) {
        return (
          (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          f(t)
        );
      }
      function h(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== f(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== f(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === f(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      function p() {
        p = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function s(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function l(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var h = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        u(m, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, i) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                h = s.value;
              return h && "object" == f(h) && e.call(h, "__await")
                ? r.resolve(h.__await).then(
                    function (t) {
                      o("next", t, a, c);
                    },
                    function (t) {
                      o("throw", t, a, c);
                    }
                  )
                : r.resolve(h).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return o("throw", t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (i = i ? i.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = l(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === h)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              h
            );
          var o = l(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), h;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                h)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), h);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          u(L.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          u(w, c, "Generator"),
          u(w, i, function () {
            return this;
          }),
          u(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), h) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                h
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), h;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), h;
            }
          }),
          t
        );
      }
      function y(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function v(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              y(i, n, o, a, c, "next", t);
            }
            function c(t) {
              y(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function d(t) {
        return "string" == typeof t || null === t;
      }
      function m() {
        return new n.CarbonStorage({
          itemExists:
            ((c = v(
              p().mark(function t(r) {
                return p().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, l.j)(r);
                      case 2:
                        return t.abrupt("return", t.sent);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            function (t) {
              return c.apply(this, arguments);
            }),
          readItem:
            ((e = v(
              p().mark(function t(r) {
                var e, n;
                return p().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, o.U)(r);
                      case 2:
                        if (((e = t.sent), d((n = e[r])))) {
                          t.next = 6;
                          break;
                        }
                        return t.abrupt("return", null);
                      case 6:
                        return t.abrupt("return", n);
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            function (t) {
              return e.apply(this, arguments);
            }),
          removeItem:
            ((r = v(
              p().mark(function t(r) {
                return p().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, i.O)(r);
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            function (t) {
              return r.apply(this, arguments);
            }),
          writeItem:
            ((t = v(
              p().mark(function t(r, e) {
                var n;
                return p().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = h({}, r, e)), (t.next = 3), (0, a.t)(n);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            function (r, e) {
              return t.apply(this, arguments);
            })
        });
        var t, r, e, c;
      }
      function g() {
        return {
          removeItem:
            ((e = v(
              p().mark(function t(r) {
                return p().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, c.O)(r);
                      case 2:
                        return t.abrupt("return", t.sent);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            function (t) {
              return e.apply(this, arguments);
            }),
          getItem:
            ((r = v(
              p().mark(function t(r) {
                var e;
                return p().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, u.U)(r);
                      case 2:
                        return (e = t.sent), t.abrupt("return", e[r]);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            function (t) {
              return r.apply(this, arguments);
            }),
          setItem:
            ((t = v(
              p().mark(function t(r, e) {
                var n;
                return p().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = h({}, r, e)), (t.next = 3), (0, s.t)(n);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            function (r, e) {
              return t.apply(this, arguments);
            })
        };
        var t, r, e;
      }
    },
    17594: (t, r, e) => {
      e.d(r, { s: () => E });
      e(86847),
        e(32381),
        e(83746),
        e(37944),
        e(75815),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(503),
        e(18549),
        e(37391),
        e(80719),
        e(93349),
        e(4473),
        e(68126);
      var n = e(71796),
        o = e(53576),
        i = e(13186);
      function a(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return c(t);
          })(t) ||
          (function (t) {
            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
          })(t) ||
          (function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return c(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return c(t, r);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function u(t) {
        return (0, n.createEventBus)({ events: o.CarbonApiConnector, channels: t });
      }
      function s(t) {
        return (0, n.createEventBus)({ events: o.ExtensionCarbonConnector, channels: t });
      }
      function l(t, r) {
        return (0, n.createEventBus)({ events: o.CarbonLeelooConnector, channels: t, ignoredEvents: r });
      }
      function f(t) {
        return (0, n.createEventBus)({ events: o.CarbonMaverickConnector, channels: t });
      }
      function h(t) {
        return (0, n.createEventBus)({ events: o.DeviceLimitCapabilityConnector, channels: t });
      }
      var p = 3e4;
      var y = e(97875),
        v = e(89515),
        d = e(16946),
        m = e(71439),
        g = 5e3,
        b = d.O.PopupCarbon,
        w = d.O.PopupCarbonLoader,
        x = d.O.OptionsCarbon,
        L = d.O.WebappCarbon;
      function E() {
        var t = new y.s(w, g);
        t.connect();
        var r = new y.s(b, g);
        r.connect();
        var e = new y.s(x, g);
        e.connect();
        var c = new v.Y(L, g);
        c.connect();
        var d,
          E,
          O,
          S = new i.y(),
          j = new i.y(p),
          _ = new i.y(),
          P = new i.y(),
          k = f([S]),
          N =
            ((d = [t, r]),
            (E = new i.y()),
            (O = new i.y()),
            (0, i.P)(E, O),
            { carbonToExtensionLegacyConnector: s([].concat(a(d), [E])), extensionToCarbonLegacyConnector: s([O]) }),
          T = N.carbonToExtensionLegacyConnector,
          C = N.extensionToCarbonLegacyConnector,
          A = new i.y(p),
          G = new i.y(p);
        (0, i.P)(A, G);
        var I,
          F,
          D,
          R,
          U = l([c, A]),
          W = l([G], m.LEGACY_LEELOO_SLOTS_TO_IGNORE),
          Y = u([t, r, e, c, S, j, _, P]),
          B = (0, n.createEventBus)({ events: o.CarbonDebugConnector }),
          H = { deviceLimit: h([c]) },
          M = (function (t) {
            var r = new i.y();
            return (0, i.P)(t, r), { autofillEngineCarbonConnector: u([r]), autofillEngineLegacyCarbonConnector: f([r]) };
          })(S),
          V = M.autofillEngineCarbonConnector,
          $ = M.autofillEngineLegacyCarbonConnector,
          z = ((I = P), (F = new i.y()), (0, i.P)(I, F), u([F])),
          K = (function (t) {
            var r = new i.y(p);
            return (0, i.P)(t, r), u([r]);
          })(j);
        return {
          applicationModulesToCarbonApiConnector: K,
          autofillEngineCarbonConnector: V,
          autofillEngineLegacyCarbonConnector: $,
          carbonApiConnector: Y,
          carbonDebugConnector: B,
          carbonInfrastructureConnectors: H,
          carbonLegacyMaverickConnector: k,
          carbonLegacyWebappConnector: U,
          carbonToExtensionLegacyConnector: T,
          extensionToCarbonApiConnector: ((D = _), (R = new i.y()), (0, i.P)(D, R), u([R])),
          extensionToCarbonLegacyConnector: C,
          tiresiasBackgroundToCarbonConnector: z,
          carbonLegacyWebappConnectorForGraphene: W
        };
      }
    },
    67550: (t, r, e) => {
      e.d(r, { W: () => xr });
      e(75815),
        e(45749),
        e(296),
        e(30094),
        e(83746),
        e(37944),
        e(4473),
        e(68126),
        e(32721),
        e(2165),
        e(72424),
        e(32202),
        e(7541),
        e(2191),
        e(75986),
        e(22440),
        e(94973),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(35396),
        o = e(25601),
        i = e(80310),
        a = e(14785),
        c = e(28365),
        u = e(13843),
        s = e(12642),
        l = e(26954),
        f = e(36988),
        h = e(20491),
        p = e(55808),
        y = e(11375),
        v = e(49069),
        d = e(31638),
        m = e(7876),
        g = e(14463),
        b = e(25504),
        w = e(32697),
        x = e(1665),
        L = e(82482),
        E = e(44985),
        O = e(64555),
        S = e(16988),
        j = e(73881),
        _ = e(83958),
        P = e(47190),
        k = e(29659),
        N = e(37935),
        T = e(114),
        C = e(1824),
        A = e(18590),
        G = e(65613),
        I = e(97040),
        F = e(17802),
        D = e(11565),
        R = e(66917),
        U = e(42973),
        W = e(83074),
        Y = e(64391),
        B = e(86381),
        H = e(39560),
        M = e(76254),
        V = e(80954),
        $ = e(48264),
        z = e(64396),
        K = e(420),
        X = e(26857),
        Z = e(39911),
        J = e(43838),
        Q = e(39387),
        q = e(396),
        tt = e(57487),
        rt = e(84473),
        et = e(62853),
        nt = e(25951),
        ot = e(63277),
        it = e(54112),
        at = e(59348),
        ct = e(32217),
        ut = e(47032),
        st = e(8443),
        lt = e(64017),
        ft = e(3786),
        ht = e(99600),
        pt = e(93202),
        yt = e(59550),
        vt = e(17556),
        dt = e(29748),
        mt = e(29125),
        gt = e(59123),
        bt = e(61845),
        wt = e(80034),
        xt = e(26399),
        Lt = e(5540),
        Et = e(4070),
        Ot = e(43897),
        St = e(36577),
        jt = e(57318),
        _t = e(69031),
        Pt = e(97386),
        kt = e(52886),
        Nt = e(55664),
        Tt = e(31370),
        Ct = e(44862),
        At = e(63090),
        Gt = e(92447),
        It = e(34431),
        Ft = e(56922),
        Dt = e(93193),
        Rt = e(72488),
        Ut = e(65529),
        Wt = e(80260),
        Yt = e(97500),
        Bt = e(46093),
        Ht = e(11429),
        Mt = (e(35758), e(82312), e(32381), e(503), e(80719), e(93349), e(24814), e(73636), e(55566), e(29406)),
        Vt = e(87065),
        $t = e(95233),
        zt = e(30523),
        Kt = e(37298),
        Xt = e(63364),
        Zt = e(83042);
      function Jt(t) {
        return (
          (Jt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          Jt(t)
        );
      }
      function Qt(t, r) {
        for (var e = 0; e < r.length; e++) {
          var n = r[e];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(
              t,
              ((o = n.key),
              (i = void 0),
              (i = (function (t, r) {
                if ("object" !== Jt(t) || null === t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var n = e.call(t, r || "default");
                  if ("object" !== Jt(n)) return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
              })(o, "string")),
              "symbol" === Jt(i) ? i : String(i)),
              n
            );
        }
        var o, i;
      }
      function qt(t, r) {
        return (
          (qt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, r) {
                return (t.__proto__ = r), t;
              }),
          qt(t, r)
        );
      }
      function tr(t) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            n = rr(t);
          if (r) {
            var o = rr(this).constructor;
            e = Reflect.construct(n, arguments, o);
          } else e = n.apply(this, arguments);
          return (function (t, r) {
            if (r && ("object" === Jt(r) || "function" == typeof r)) return r;
            if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
            return (function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
            })(t);
          })(this, e);
        };
      }
      function rr(t) {
        return (
          (rr = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          rr(t)
        );
      }
      function er(t, r) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, r) {
            var e = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
            if (null != e) {
              var n,
                o,
                i,
                a,
                c = [],
                u = !0,
                s = !1;
              try {
                if (((i = (e = e.call(t)).next), 0 === r)) {
                  if (Object(e) !== e) return;
                  u = !1;
                } else for (; !(u = (n = i.call(e)).done) && (c.push(n.value), c.length !== r); u = !0);
              } catch (t) {
                (s = !0), (o = t);
              } finally {
                try {
                  if (!u && null != e.return && ((a = e.return()), Object(a) !== a)) return;
                } finally {
                  if (s) throw o;
                }
              }
              return c;
            }
          })(t, r) ||
          (function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return nr(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return nr(t, r);
          })(t, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function nr(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function or(t) {
        var r = (0, Zt.PV)({ column: t.colno, line: t.lineno, name: t.filename });
        return { error: t.error, fileLocation: r, origin: "uncaughtException" };
      }
      function ir(t) {
        return { error: t.reason, origin: "unhandledPromiseRejection" };
      }
      function ar(t) {
        var r;
        if (
          t.reason instanceof TypeError &&
          "Failed to fetch" === t.reason.message &&
          null !== (r = t.reason.stack) &&
          void 0 !== r &&
          r.includes("assets/argon2/argon2.min.js")
        )
          return !1;
        return !0;
      }
      function cr(t) {
        t.preventDefault();
      }
      function ur(t) {
        return (
          (ur =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          ur(t)
        );
      }
      function sr() {
        sr = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function s(t, r, e, o) {
          var i = r && r.prototype instanceof h ? r : h,
            a = Object.create(i.prototype),
            c = new S(o || []);
          return n(a, "_invoke", { value: x(t, e, c) }), a;
        }
        function l(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var f = {};
        function h() {}
        function p() {}
        function y() {}
        var v = {};
        u(v, i, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          m = d && d(d(j([])));
        m && m !== r && e.call(m, i) && (v = m);
        var g = (y.prototype = h.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function w(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == ur(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, a, c);
                    },
                    function (t) {
                      o("throw", t, a, c);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return o("throw", t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (i = i ? i.then(n, n) : n());
            }
          });
        }
        function x(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return _();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = L(a, e);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = l(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === f)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function L(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), L(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              f
            );
          var o = l(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), f;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                f)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), f);
        }
        function E(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function O(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function S(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(E, this), this.reset(!0);
        }
        function j(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: _ };
        }
        function _() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = y),
          n(g, "constructor", { value: y, configurable: !0 }),
          n(y, "constructor", { value: p, configurable: !0 }),
          (p.displayName = u(y, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === p || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          u(g, c, "Generator"),
          u(g, i, function () {
            return this;
          }),
          u(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = j),
          (S.prototype = {
            constructor: S,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), f) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                f
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), O(e), f;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    O(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: j(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), f;
            }
          }),
          t
        );
      }
      function lr(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function fr(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? lr(Object(e), !0).forEach(function (r) {
                hr(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : lr(Object(e)).forEach(function (r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return t;
      }
      function hr(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== ur(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== ur(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === ur(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      function pr(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      var yr = new ((function (t) {
          !(function (t, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(r && r.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              r && qt(t, r);
          })(i, t);
          var r,
            e,
            n,
            o = tr(i);
          function i(t) {
            !(function (t, r) {
              if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
            })(this, i);
            var r = (0, Mt.T)(
              (function (t) {
                var r;
                return new Kt.j(
                  {
                    addListener: function (e) {
                      (r = function (r) {
                        e(r, t);
                      }),
                        t.addEventListener("error", r);
                    },
                    removeListener: function () {
                      t.removeEventListener("error", r);
                    }
                  },
                  function (t) {
                    return !0;
                  }
                ).events$.pipe(
                  (0, Vt.U)(function (t) {
                    return er(t, 1)[0];
                  }),
                  (0, $t.b)(cr),
                  (0, Vt.U)(or)
                );
              })(t),
              (function (t) {
                var r;
                return new Kt.j(
                  {
                    addListener: function (e) {
                      (r = function (r) {
                        e(r, t);
                      }),
                        t.addEventListener("unhandledrejection", r);
                    },
                    removeListener: function () {
                      t.removeEventListener("unhandledrejection", r);
                    }
                  },
                  function (t) {
                    return !0;
                  }
                ).events$.pipe(
                  (0, Vt.U)(function (t) {
                    return er(t, 1)[0];
                  }),
                  (0, $t.b)(cr),
                  (0, zt.h)(ar),
                  (0, Vt.U)(ir)
                );
              })(t)
            );
            return o.call(this, r);
          }
          return (r = i), e && Qt(r.prototype, e), n && Qt(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
        })(Xt.fW))(self),
        vr = new D.y(),
        dr = new R.P("graphene-background-port"),
        mr = { accessKey: "", secretKey: "" },
        gr = ((0, St.xp)("prod"), "prod"),
        br = (0, Ht.n)(),
        wr = (0, U.e)();
      function xr() {
        return Lr.apply(this, arguments);
      }
      function Lr() {
        var t;
        return (
          (t = sr().mark(function t() {
            var r, e;
            return sr().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = new o.CarbonLegacyInfrastructure()),
                      (t.next = 3),
                      (0, v.u)({
                        appDefinition: n.R,
                        channels: {},
                        channelsListener: dr,
                        currentNode: "background",
                        exceptionLogging: { sink: (0, d.$)(w.u), uncaughtErrorSource: (0, d.z)(yr) },
                        implementations: {
                          accountDeletion: { module: I.X },
                          accountReferral: { module: F.o },
                          analytics: { module: x.I },
                          taskTracking: { module: m.c },
                          requestContext: { module: g.q },
                          featureFlips: { module: L.k },
                          "carbon-legacy": { module: o.CarbonLegacyModule, configurations: { infrastructure: (0, d.z)(r) } },
                          permissions: { module: Ot.B },
                          passwordHealth: { module: nt.C },
                          authenticationFlow: {
                            module: lt.c,
                            configurations: { authenticationFlowContextInfrastructure: (0, d.z)(new vt.e()) }
                          },
                          deviceTransfer: { module: ft.I },
                          activityLogs: { module: Et.Z },
                          identityVerificationFlow: { module: ht.f },
                          autofillSettings: { module: dt.P },
                          autofillData: { module: mt.U },
                          autofillTracking: { module: gt.V },
                          autofillSecurity: { module: bt.k },
                          autofillNotifications: { module: wt.r },
                          linkedWebsites: { module: xt.J },
                          enclaveSdkApi: {
                            module: jt.E,
                            configurations: { enclaveApiSettings: (0, d.z)(new St.N6(mr, "https://sso.nitro.dashlane.com/", gr)) }
                          },
                          confidentialSSOApi: { module: _t.D, configurations: { enclaveLoginContextInfrastructure: (0, d.z)(new kt.X()) } },
                          scim: { module: Pt.i },
                          session: { module: a._ },
                          sync: { module: i.R },
                          vaultReport: { module: ot.E },
                          vaultItemsCrud: { module: l.z },
                          vaultSearch: { module: f.U },
                          vaultNotifications: { module: h.K },
                          vaultOrganization: { module: p.H },
                          passwordLimit: { module: y.a },
                          otp: { module: it.f },
                          masterPasswordSecurity: { module: Yt.f },
                          emailMonitoring: { module: at.S },
                          breaches: { module: ct.t },
                          sharingCollections: { module: Tt.a },
                          sharingItems: { module: Ct.F },
                          sharingInvites: { module: At.p },
                          antiphishing: { module: ut.v },
                          overrides: { module: Lt.x },
                          accountRecoveryKey: { module: st.D },
                          teamMembers: { module: Gt.X },
                          teamVat: { module: It.K },
                          teamGetStarted: { module: Ft.q },
                          teamPlanDetails: { module: Dt.H },
                          teamAdminNotifications: { module: Rt.E },
                          notifications: { module: Wt.F },
                          changeMasterPassword: { module: c.M },
                          teamPasswordHealth: { module: Ut.V },
                          userConsents: { module: Bt.K },
                          vaultAccess: { module: u.r },
                          userVerification: { module: pt.Z }
                        },
                        otherModules: [
                          { module: E.i },
                          { module: O.F, configurations: { settings: (0, d.z)(new S.L()) } },
                          { module: b.X, configurations: { infrastructure: (0, d.z)(new W.A()) } },
                          {
                            module: j.Q,
                            configurations: {
                              remoteFileUpdateInfrastructure: (0, d.$)(_.U),
                              remoteFileUpdateDownloaderInfrastructure: (0, d.$)(P.P),
                              decipherInfrastructure: (0, d.$)(k.c)
                            }
                          },
                          {
                            module: N.D,
                            configurations: {
                              infrastructure: (0, d.z)(
                                new T.i({
                                  computeHash: Y.x,
                                  decryptAes256: B.$,
                                  decryptRsaOaep: H.G,
                                  deriveKeyArgon2d: M.f,
                                  deriveKeyPbkdf2: V.x,
                                  encryptAes256: $.P,
                                  encryptRsaOaep: z.b,
                                  generateKeyAes256: K.o,
                                  generateKeyPairRsaOaep: X.Y,
                                  getRandomValues: Z.P,
                                  signHmacSha: J.n,
                                  signRsassaPkcs1: Q.f,
                                  unsafeComputeMd5Hash: q.H,
                                  verifyHmacSha: tt.o
                                })
                              )
                            }
                          },
                          {
                            module: C.n,
                            configurations: {
                              serverApi: (0, d.z)(
                                new A.$y(
                                  fr(
                                    {
                                      baseUrl: "https://api.dashlane.com",
                                      appKeys: { appAccessKey: Nt.i.appAccess, appSecretKey: Nt.i.appSecret }
                                    },
                                    br
                                      ? {
                                          cloudflareKeys: {
                                            cloudflareAccessKey: br.cloudflareAccess,
                                            cloudflareSecretKey: br.cloudflareSecret
                                          }
                                        }
                                      : {}
                                  )
                                )
                              ),
                              serverApiInfrastructure: (0, d.$)(yt.Q)
                            }
                          }
                        ],
                        storeInfrastructureFactory: wr,
                        jsonFetcher: new rt.W(),
                        cronSource: vr,
                        keyValueStorageInfrastructure: new et.e(),
                        defaultDeviceStorageEncryptionCodec: (0, d.$)(G.n),
                        defaultUserStorageEncryptionCodec: (0, d.$)(s.Y)
                      })
                    );
                  case 3:
                    return (
                      (e = t.sent),
                      t.abrupt("return", {
                        app: e,
                        signalCarbonReady: function (t, e, n) {
                          var o = t.storeService;
                          r.ready({ apiEvents: e, state$: o.getState$(), leelooEvents: n, leelooEventsCommands: n });
                        }
                      })
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (Lr = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                pr(i, n, o, a, c, "next", t);
              }
              function c(t) {
                pr(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          Lr.apply(this, arguments)
        );
      }
    },
    55664: (t, r, e) => {
      e.d(r, { i: () => n });
      var n = {
        appAccess: "C4F8H4SEAMXNBQVSASVBWDDZNCVTESMY",
        appSecret: "Na9Dz3WcmjMZ5pdYU1AmC5TdYkeWAOzvOK6PkbU4QjfjPQTSaXY8pjPwrvHfVH14"
      };
    },
    41659: (t, r, e) => {
      e.d(r, { E5: () => o, U6: () => a, e7: () => i, fL: () => n });
      var n = "https://www.dashlane.com",
        o = "https://app.dashlane.com",
        i = "https://console.dashlane.com",
        a = "/signup";
    },
    36773: (t, r, e) => {
      e.d(r, { Z: () => o });
      var n = e(7019);
      function o(t) {
        (0, n.U)(function (r) {
          "install" === r.reason && t(r);
        });
      }
    },
    7019: (t, r, e) => {
      e.d(r, { U: () => o });
      var n = e(23386);
      function o(t) {
        n.Y.addListener(t);
      }
    },
    91524: (t, r, e) => {
      function n(t) {
        t();
      }
      e.d(r, { H: () => n });
    },
    61425: (t, r, e) => {
      e.d(r, { f: () => o });
      var n = e(7019);
      function o(t) {
        (0, n.U)(function (r) {
          "update" === r.reason && t(r);
        });
      }
    },
    84836: (t, r, e) => {
      function n() {
        return "serviceWorker" in self;
      }
      e.d(r, { M: () => n });
    },
    80524: (t, r, e) => {
      e.d(r, { o7: () => h, H: () => p, PN: () => y, _v: () => v, yN: () => d });
      e(72424), e(4473), e(68126), e(32202), e(75815), e(68039), e(15442), e(86847);
      var n = e(56008),
        o = (function (t) {
          return (
            (t[(t.VERBOSE = 0)] = "VERBOSE"),
            (t[(t.DEBUG = 1)] = "DEBUG"),
            (t[(t.INFO = 2)] = "INFO"),
            (t[(t.WARNING = 3)] = "WARNING"),
            (t[(t.ERROR = 4)] = "ERROR"),
            (t[(t.SILENT = 10)] = "SILENT"),
            t
          );
        })({}),
        i = o.DEBUG,
        a = o.ERROR,
        c = o.INFO,
        u = o.VERBOSE,
        s = o.WARNING;
      function l(t, r) {
        var e = Object.keys(t),
          o = e
            .filter(function (r) {
              return !(t[r] instanceof Error);
            })
            .reduce(function (r, e) {
              return (r[e] = t[e]), r;
            }, {});
        return (0, n.WO)(o, r ? 2 : 0);
      }
      function f(t) {
        return function (r) {
          var e = r.details,
            o = void 0 === e ? {} : e,
            i = r.message,
            a = void 0 === i ? "" : i,
            c = r.tags,
            u = void 0 === c ? [] : c,
            s = r.indentDetails,
            f = void 0 !== s && s,
            h = (function (t) {
              var r = t.join("/");
              return r ? "[".concat(r, "]") : "";
            })(u),
            p = l(o, f),
            y = (function (t) {
              return t
                .filter(function (t) {
                  return !!t;
                })
                .join(n.ZJ);
            })([h, a]);
          if ("{}" !== p) {
            var v = f ? "\n" : n.ZJ;
            y += "".concat(v).concat(p);
          }
          var d = (function (t) {
              return t.error instanceof Error ? t.error : null;
            })(o),
            m = d ? [y, "\n", d] : [y];
          t.apply(void 0, m);
        };
      }
      function h(t) {
        4 > i || f(console.debug)(t);
      }
      function p(t) {
        4 > a || f(console.error)(t);
      }
      function y(t) {
        4 > c || f(console.info)(t);
      }
      function v(t) {
        4 > u || f(console.log)(t);
      }
      function d(t) {
        4 > s || f(console.warn)(t);
      }
    },
    63437: (t, r, e) => {
      e.d(r, { u: () => n });
      var n = (function (t) {
        return (t[(t.UNKNOWN = 0)] = "UNKNOWN"), (t[(t.WARNING = 1)] = "WARNING"), (t[(t.ERROR = 2)] = "ERROR"), t;
      })({});
    },
    83042: (t, r, e) => {
      e.d(r, { PV: () => a, Qp: () => c, xQ: () => i });
      e(4473), e(68126), e(37391), e(86847), e(83746), e(37944), e(75815), e(55402), e(22250), e(92665), e(88737);
      function n(t) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          n(t)
        );
      }
      var o = e(63437).u.ERROR;
      function i(t) {
        return "object" === n(t) && null !== t && "message" in t;
      }
      function a(t) {
        var r = t.column,
          e = t.line,
          n = t.name;
        return r || e || n ? "".concat(n, ":").concat(e, ":").concat(r) : "";
      }
      function c(t) {
        try {
          var r = (function (t) {
            return "object" === n(t) && Boolean(t);
          })(t);
          if (!r) return { code: o, fileName: "make.ts", funcName: "makeException", legacy: !1, message: "Potential error is not object" };
          var e = t.columnNumber,
            i = t.fileName,
            c = t.funcName,
            u = t.level,
            s = t.lineNumber,
            l = t.message,
            f = t.stack,
            h = a({ column: e, line: s, name: i });
          return {
            code: null != u ? u : o,
            fileName: h,
            funcName: null != c ? c : "",
            legacy: !1,
            line: s,
            message: null != l ? l : "",
            precisions: f
          };
        } catch (t) {
          return { code: o, fileName: "make.ts", funcName: "makeException", legacy: !1, message: "Caught exception inception" };
        }
      }
    },
    56008: (t, r, e) => {
      e.d(r, { WO: () => a, ZJ: () => i, e5: () => o });
      e(27091), e(83746), e(37944), e(75815), e(55402), e(22250), e(92665), e(88737);
      function n(t) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          n(t)
        );
      }
      var o = " | ",
        i = " - ";
      function a(t, r) {
        return "object" === n(t) ? JSON.stringify(t, null, r) : String(t);
      }
    },
    55692: (t, r, e) => {
      e.d(r, { C: () => n, W: () => o });
      var n = "assets/argon2/argon2.min.js",
        o = "assets/argon2/argon2.wasm";
    },
    64215: (t, r, e) => {
      e.d(r, { U: () => u });
      e(75815),
        e(45749),
        e(22250),
        e(42051),
        e(70188),
        e(16702),
        e(40280),
        e(77796),
        e(69890),
        e(19142),
        e(92483),
        e(42173),
        e(81700),
        e(57353),
        e(11358),
        e(44263),
        e(7195),
        e(73889),
        e(1192),
        e(37037),
        e(61988),
        e(92410),
        e(45363),
        e(23097),
        e(93224),
        e(99264),
        e(84535),
        e(96886),
        e(29686),
        e(42403),
        e(98849),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(4473),
        e(68126),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(55692);
      function o(t) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          o(t)
        );
      }
      function i() {
        i = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          c = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, c) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function i(n, a, c, u) {
            var s = h(t[n], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == o(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      i("next", t, c, u);
                    },
                    function (t) {
                      i("throw", t, c, u);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return i("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  i(t, e, r, n);
                });
              }
              return (a = a ? a.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[c];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, s, "Generator"),
          l(w, c, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function a(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function c(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function c(t) {
              a(i, n, o, c, u, "next", t);
            }
            function u(t) {
              a(i, n, o, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      function u() {
        (self.loadArgon2WasmModule = function () {
          return importScripts(n.C), Promise.resolve();
        }),
          (self.loadArgon2WasmBinary = c(
            i().mark(function t() {
              var r, e;
              return i().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), fetch(n.W);
                    case 2:
                      return (r = t.sent), (t.next = 5), r.arrayBuffer();
                    case 5:
                      return (e = t.sent), t.abrupt("return", new Uint8Array(e));
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          importScripts(n.C);
      }
    },
    822: (t, r, e) => {
      e.d(r, { I: () => u });
      e(75815),
        e(45749),
        e(22250),
        e(42051),
        e(70188),
        e(16702),
        e(40280),
        e(77796),
        e(69890),
        e(19142),
        e(92483),
        e(42173),
        e(81700),
        e(57353),
        e(11358),
        e(44263),
        e(7195),
        e(73889),
        e(1192),
        e(37037),
        e(61988),
        e(92410),
        e(45363),
        e(23097),
        e(93224),
        e(99264),
        e(84535),
        e(96886),
        e(29686),
        e(42403),
        e(98849),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(4473),
        e(68126),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(55692);
      function o(t) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          o(t)
        );
      }
      function i() {
        i = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          c = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, c) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function i(n, a, c, u) {
            var s = h(t[n], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == o(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      i("next", t, c, u);
                    },
                    function (t) {
                      i("throw", t, c, u);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return i("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  i(t, e, r, n);
                });
              }
              return (a = a ? a.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[c];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, s, "Generator"),
          l(w, c, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function a(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function c(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function c(t) {
              a(i, n, o, c, u, "next", t);
            }
            function u(t) {
              a(i, n, o, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      function u() {
        self.loadArgon2WasmBinary = c(
          i().mark(function t() {
            var r, e;
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), fetch(n.W);
                  case 2:
                    return (r = t.sent), (t.next = 5), r.arrayBuffer();
                  case 5:
                    return (e = t.sent), t.abrupt("return", new Uint8Array(e));
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
      }
    },
    1667: (t, r, e) => {
      e.d(r, { k: () => o });
      var n = e(70920);
      function o() {
        (0, n.D)();
      }
    },
    85224: (t, r, e) => {
      e.d(r, { u: () => w });
      var n = e(44566),
        o = e(80524),
        i =
          (e(22250),
          e(26589),
          e(75815),
          e(92665),
          e(88737),
          e(45749),
          e(72424),
          e(296),
          e(30094),
          e(83746),
          e(37944),
          e(4473),
          e(68126),
          e(32721),
          e(2165),
          e(55402),
          e(97979),
          e(38509),
          e(95665),
          e(41533),
          e(72029),
          e(71632),
          e(2191),
          e(75986),
          e(37391),
          e(41437),
          e(5744),
          e(18549),
          e(15026)),
        a = e(52477),
        c = e(56847),
        u = e(32012);
      function s(t, r, e) {
        return (r = m(r)) in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e), t;
      }
      function l() {
        l = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function s(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function f(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var h = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        u(m, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, i) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, i, a, c) {
            var u = f(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == p(l) && e.call(l, "__await")
                ? r.resolve(l.__await).then(
                    function (t) {
                      o("next", t, a, c);
                    },
                    function (t) {
                      o("throw", t, a, c);
                    }
                  )
                : r.resolve(l).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return o("throw", t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (i = i ? i.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = f(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === h)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              h
            );
          var o = f(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), h;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                h)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), h);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          u(L.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          u(w, c, "Generator"),
          u(w, i, function () {
            return this;
          }),
          u(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), h) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                h
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), h;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), h;
            }
          }),
          t
        );
      }
      function f(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function h(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              f(i, n, o, a, c, "next", t);
            }
            function c(t) {
              f(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function p(t) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          p(t)
        );
      }
      function y(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function v(t, r) {
        for (var e = 0; e < r.length; e++) {
          var n = r[e];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, m(n.key), n);
        }
      }
      function d(t, r, e) {
        return r && v(t.prototype, r), e && v(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      function m(t) {
        var r = (function (t, r) {
          if ("object" !== p(t) || null === t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, r || "default");
            if ("object" !== p(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(t);
        })(t, "string");
        return "symbol" === p(r) ? r : String(r);
      }
      var g = (function () {
          function t() {
            y(this, t), (this.state = new Map());
          }
          return (
            d(t, [
              {
                key: "getState",
                value: function (t) {
                  var r = this.state.get(t);
                  return r ? Promise.resolve(r) : Promise.resolve({});
                }
              },
              {
                key: "setState",
                value: function (t, r) {
                  return 0 === Object.keys(r).length ? this.state.delete(t) : this.state.set(t, r), Promise.resolve();
                }
              }
            ]),
            t
          );
        })(),
        b = (function () {
          function t() {
            y(this, t);
          }
          var r, e;
          return (
            d(t, [
              {
                key: "getState",
                value:
                  ((e = h(
                    l().mark(function t(r) {
                      var e;
                      return l().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), (0, i.U)(r);
                            case 2:
                              if (!(e = t.sent)[r]) {
                                t.next = 5;
                                break;
                              }
                              return t.abrupt("return", e[r]);
                            case 5:
                              return t.abrupt("return", {});
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )),
                  function (t) {
                    return e.apply(this, arguments);
                  })
              },
              {
                key: "setState",
                value:
                  ((r = h(
                    l().mark(function t(r, e) {
                      return l().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (0 !== Object.keys(e).length) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), (0, a.O)(r);
                            case 3:
                              t.next = 7;
                              break;
                            case 5:
                              return (t.next = 7), (0, c.t)(s({}, r, e));
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )),
                  function (t, e) {
                    return r.apply(this, arguments);
                  })
              }
            ]),
            t
          );
        })();
      function w(t) {
        var r = t.connectors,
          e = r.autofillEngineCarbonConnector,
          i = r.autofillEngineLegacyCarbonConnector,
          a = t.app,
          c = (0, u.G)() ? new b() : new g(),
          s = new n.WebExtensionApiManager().getBrowserApi();
        (0, n.startAutofillEngine)(
          s,
          { carbon: e, legacyCarbon: i },
          c,
          function (t, r) {
            (0, o.o7)({ message: t, details: r, indentDetails: !0, tags: ["AutofillEngine"] });
          },
          a.then(function (t) {
            return t.createClient();
          })
        ),
          (0, n.startDispatcher)(s);
      }
    },
    33886: (t, r, e) => {
      e.d(r, { C: () => p });
      e(75815),
        e(45749),
        e(2191),
        e(75986),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(4473),
        e(68126),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(41808),
        o = e(61222),
        i = e(21763),
        a = e(80524);
      function c(t) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          c(t)
        );
      }
      function u() {
        u = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, i) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, i, a, u) {
            var s = h(t[n], t, i);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == c(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, a, u);
                    },
                    function (t) {
                      o("throw", t, a, u);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return o("throw", t, a, u);
                    }
                  );
            }
            u(s.arg);
          }
          var i;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (i = i ? i.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, s, "Generator"),
          l(w, i, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function s(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      var l = ["/content/injectedts/vendors.js", "/content/contentScripts/kwift.CHROME.js"],
        f = "options.useInjectScriptOnStart";
      function h() {
        var t;
        return (
          (t = u().mark(function t() {
            return u().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), (0, n.U)(f);
                    case 3:
                      if (!t.sent[f]) {
                        t.next = 9;
                        break;
                      }
                      return (t.next = 7), (0, o.I)({ url: ["http://*/*", "https://*/*"] });
                    case 7:
                      t.sent.forEach(function (t) {
                        var r = t.id;
                        r && (0, i.k)({ target: { tabId: r, allFrames: !0 }, files: l });
                      });
                    case 9:
                      t.next = 14;
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(0)),
                        (0, a.H)({ message: "Failed to inject script on existing tabs", details: { error: t.t0 } });
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 11]]
            );
          })),
          (h = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                s(i, n, o, a, c, "next", t);
              }
              function c(t) {
                s(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          h.apply(this, arguments)
        );
      }
      function p() {
        !(function () {
          h.apply(this, arguments);
        })();
      }
    },
    39614: (t, r, e) => {
      e.d(r, { m: () => o });
      var n = e(56386);
      function o(t) {
        var r = t.connectors.extensionToCarbonApiConnector,
          e = !1;
        r.liveDidOpen.on(function (t) {
          e && !t && (0, n.H)(), (e = t);
        });
      }
    },
    81645: (t, r, e) => {
      e.d(r, { g: () => f });
      e(68585),
        e(75815),
        e(45749),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(4473),
        e(68126),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(13090),
        o = e(54422);
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          i(t)
        );
      }
      function a() {
        a = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          c = o.iterator || "@@iterator",
          u = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, c) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, a, c, u) {
            var s = h(t[n], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == i(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, c, u);
                    },
                    function (t) {
                      o("throw", t, c, u);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return o("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (a = a ? a.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[c];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, s, "Generator"),
          l(w, c, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function c(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      var u = 60;
      function s(t) {
        var r = t.find(function (t) {
          return "accepted" === t.status;
        });
        return r ? r.info.forceAutomaticLogout * u : 0;
      }
      function l(t, r) {
        var e,
          i = function (t) {
            "idle" === t && r();
          };
        t.liveLoginStatus.on(
          (function () {
            var r,
              u =
                ((r = a().mark(function r(c) {
                  var u, l, f, h;
                  return a().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (((u = c.loggedIn), e && n.e.removeListener(e), !u)) {
                            r.next = 10;
                            break;
                          }
                          return (r.next = 5), t.getPremiumStatus();
                        case 5:
                          (l = r.sent), (f = l.spaces), (h = s(void 0 === f ? [] : f)) && ((0, o.X)(h), (e = n.e.addListener(i)));
                        case 10:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })),
                function () {
                  var t = this,
                    e = arguments;
                  return new Promise(function (n, o) {
                    var i = r.apply(t, e);
                    function a(t) {
                      c(i, n, o, a, u, "next", t);
                    }
                    function u(t) {
                      c(i, n, o, a, u, "throw", t);
                    }
                    a(void 0);
                  });
                });
            return function (t) {
              return u.apply(this, arguments);
            };
          })()
        );
      }
      function f(t) {
        var r = t.connectors,
          e = r.extensionToCarbonApiConnector,
          n = r.extensionToCarbonLegacyConnector;
        l(e, function () {
          n.closeSession({});
        });
      }
    },
    92005: (t, r, e) => {
      e.d(r, { f: () => u });
      e(37853), e(75815), e(72424), e(2191), e(75986), e(4473), e(68126);
      var n = e(80524),
        o = (e(23041), e(15442), e(56008)),
        i = "carbonDebugConnector";
      function a(t) {
        var r = t.date,
          e = t.message,
          n = t.optionalParams,
          i = "string" == typeof e ? e : "Invalid message type",
          a = n.map(o.WO).join(o.e5);
        return (a ? [r, i, a] : [r, i]).join(o.ZJ);
      }
      var c = { error: n.H, info: n.PN, log: n._v, warning: n.yN };
      function u(t) {
        var r,
          e = t.connectors.carbonDebugConnector;
        (r = e),
          Object.keys(c).forEach(function (t) {
            r[t].on(function (r) {
              if (
                !(function (t) {
                  return ["error", "info", "log", "warning"].some(function (r) {
                    return r === t;
                  });
                })(t)
              )
                throw new Error("Invalid debug connector event");
              (0, c[t])({ message: a(r), tags: [i] });
            });
          });
      }
    },
    15239: (t, r, e) => {
      e.d(r, { J: () => g });
      e(75815),
        e(45749),
        e(72424),
        e(296),
        e(30094),
        e(83746),
        e(37944),
        e(4473),
        e(68126),
        e(32721),
        e(2165),
        e(32202),
        e(7541),
        e(2191),
        e(75986),
        e(22440),
        e(94973),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(329),
        o = e(60765),
        i = e(83042),
        a = e(63437),
        c = null;
      function u(t) {
        return (
          (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          u(t)
        );
      }
      function s() {
        s = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, i) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, i, a, c) {
            var s = h(t[n], t, i);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == u(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, a, c);
                    },
                    function (t) {
                      o("throw", t, a, c);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return o("throw", t, a, c);
                    }
                  );
            }
            c(s.arg);
          }
          var i;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (i = i ? i.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, c, "Generator"),
          l(w, i, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function l(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function f(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(e), !0).forEach(function (r) {
                h(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : l(Object(e)).forEach(function (r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return t;
      }
      function h(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== u(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== u(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === u(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      function p(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function y(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              p(i, n, o, a, c, "next", t);
            }
            function c(t) {
              p(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function v() {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = y(
          s().mark(function t() {
            var r, e, o, u, l, h;
            return s().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), (0, n.g)({ domain: "dashlane.com", name: "userFunnelCookie" });
                    case 2:
                      if (!(r = t.sent)[0]) {
                        t.next = 16;
                        break;
                      }
                      return (e = decodeURIComponent(r[0].value)), (t.prev = 5), t.abrupt("return", JSON.parse(e));
                    case 9:
                      (t.prev = 9),
                        (t.t0 = t.catch(5)),
                        (o = a.u.WARNING),
                        (u = { message: "Error parsing userFunnelCookie" }),
                        (l = (0, i.xQ)(t.t0) ? t.t0 : u),
                        (h = (0, i.Qp)(f(f({}, l), {}, { level: o }))),
                        (s = h),
                        c ? c(s) : console.error("Send exception log function not set");
                    case 16:
                      return t.abrupt("return", {});
                    case 17:
                    case "end":
                      return t.stop();
                  }
                var s;
              },
              t,
              null,
              [[5, 9]]
            );
          })
        )).apply(this, arguments);
      }
      function m(t) {
        return "" !== t ? t : void 0;
      }
      function g(t) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = y(
          s().mark(function t(r) {
            var e, n, i;
            return s().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (e = r.connectors.extensionToCarbonApiConnector), (t.next = 3), v();
                  case 3:
                    (n = t.sent),
                      (i =
                        0 === Object.keys(n).length
                          ? { has_cookie: !1 }
                          : {
                              has_cookie: !0,
                              heap_identity: n.trackingId,
                              gclid: n.gclid,
                              everflow_transaction_id: n.transaction_id,
                              utm_pathname: n.pathname,
                              utm_referrer: m(n.referrer),
                              utm_source: m(n.utm_source),
                              utm_campaign: m(n.utm_campaign),
                              utm_medium: m(n.utm_medium),
                              utm_content: m(n.utm_content),
                              utm_term: m(n.utm_term),
                              utm_visit_timestamp: n.utm_visitTimestamp,
                              utm_last_click_pathname: n.last_click_pathname,
                              utm_last_click_referrer: m(n.last_click_referrer),
                              utm_last_click_source: m(n.last_click_source),
                              utm_last_click_campaign: m(n.last_click_campaign),
                              utm_last_click_medium: m(n.last_click_medium),
                              utm_last_click_content: m(n.last_click_content),
                              utm_last_click_term: m(n.last_click_term),
                              utm_last_click_visit_timestamp: n.last_click_visitTimestamp
                            }),
                      e.logEvent({ event: new o.UserFirstLaunchEvent({ web: i }) });
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    95013: (t, r, e) => {
      e.d(r, { T: () => s });
      e(75815),
        e(45749),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(4473),
        e(68126),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(24715),
        o = e(36956);
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          i(t)
        );
      }
      function a() {
        a = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          c = o.iterator || "@@iterator",
          u = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, c) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, a, c, u) {
            var s = h(t[n], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == i(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, c, u);
                    },
                    function (t) {
                      o("throw", t, c, u);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return o("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (a = a ? a.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[c];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, s, "Generator"),
          l(w, c, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function c(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function u() {
        var t;
        return (
          (t = a().mark(function t(r, e) {
            var i;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((i = e.flowLoginCredentialOnWebSite)) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return");
                  case 3:
                    return (t.next = 5), (0, o.$)(i.domain);
                  case 5:
                    return (t.next = 7), (0, n.U)({ url: i.url });
                  case 7:
                    return (t.next = 9), r.updateWebOnboardingMode({ flowLoginCredentialOnWebSite: null });
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (u = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                c(i, n, o, a, u, "next", t);
              }
              function u(t) {
                c(i, n, o, a, u, "throw", t);
              }
              a(void 0);
            });
          }),
          u.apply(this, arguments)
        );
      }
      function s(t) {
        var r = t.connectors,
          e = r.extensionToCarbonApiConnector,
          n = r.extensionToCarbonLegacyConnector;
        e.liveWebOnboardingMode.on(function (t) {
          !(function (t, r) {
            u.apply(this, arguments);
          })(n, t);
        });
      }
    },
    67873: (t, r, e) => {
      e.d(r, { U: () => h });
      e(86847),
        e(68039),
        e(75815),
        e(503),
        e(92665),
        e(23041),
        e(32381),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(88737),
        e(18549),
        e(37391),
        e(80719),
        e(93349),
        e(4473),
        e(68126);
      var n = e(92204),
        o = e(31460),
        i = e(48291),
        a = e(64718),
        c = e(98085);
      e(75491), e(99141), e(61238), e(65109);
      function u(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return s(t);
          })(t) ||
          (function (t) {
            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
          })(t) ||
          (function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return s(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return s(t, r);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function l(t, r) {
        return "".concat(t, "?token=").concat(((e = new a.Y(r).getRootDomain()), btoa(encodeURIComponent(e))), "#/anti-phishing");
        var e;
      }
      function f(t) {
        var r = t.tabId,
          e = t.url;
        if (!r) return {};
        var i = (0, n.A)(""),
          a = (0, c.F)(i);
        return (0, o.V)(t.tabId, { url: l(a, e) }), {};
      }
      function h(t) {
        t.connectors.extensionToCarbonApiConnector.livePhishingURLList.on(function (t) {
          !(function (t) {
            if (t.size) {
              var r = Array.from(t).reduce(function (t, r) {
                var e = ["https", "http"].map(function (t) {
                  return "".concat(t, "://*.").concat(r, "/*");
                });
                return [].concat(u(t), u(e));
              }, []);
              i.a.hasListener(f) && i.a.removeListener(f), i.a.addListener(f, { urls: r, types: ["main_frame"] });
            }
          })(t);
        });
      }
    },
    98085: (t, r, e) => {
      e.d(r, { F: () => o });
      e(22250), e(75815), e(92665), e(88737), e(23389), e(21675), e(80719), e(23234), e(35758), e(82312), e(86847), e(40440);
      var n = e(92204);
      function o(t) {
        var r = new URL(t),
          e = r.hostname,
          o = r.hash,
          i = r.search,
          a = e.includes("console.dashlane.com")
            ? "index.html".concat(i, "#/console").concat(o.replace("#", "/").replace("//", "/"))
            : "index.html".concat(i).concat(o.replace("#", "#/").replace("//", "/"));
        return (0, n.A)(a);
      }
    },
    87329: (t, r, e) => {
      e.d(r, { r: () => v });
      e(92411), e(57560), e(80719), e(73736), e(70758), e(35758), e(82312), e(33409), e(2191), e(75815), e(75986);
      var n = e(31460),
        o = e(92204),
        i = e(48291),
        a = e(65881),
        c = e(41659),
        u = e(98085),
        s = new RegExp("(console|app).dashlane.com/cdn-cgi/access/authorized"),
        l = ["".concat(c.E5, "/*"), "".concat(c.e7, "/*")],
        f = ["https://sso.nitro.dashlane.com/saml/callback", "https://sso.nitrostaging.dashlane.com/saml/callback"],
        h = "main_frame";
      function p(t) {
        var r = t.url,
          e = t.tabId,
          o = r.includes("/sso");
        return (
          (function (t) {
            return t.includes("noredirect") || Boolean(t.match(s));
          })(r) || (0, n.V)(e, { active: !o, url: (0, u.F)(r) }),
          {}
        );
      }
      function y(t) {
        var r = t.tabId;
        return (0, n.V)(r, { active: !0, url: (0, o.A)("loading.html") }), { cancel: !0 };
      }
      var v = function () {
        l.forEach(function (t) {
          i.a.addListener(p, { urls: [t], types: [h] }, [a.X.Blocking]);
        }),
          i.a.addListener(y, { urls: f, types: [h, "sub_frame"] }, [a.X.Blocking]);
      };
    },
    67576: (t, r, e) => {
      e.d(r, { D: () => _ });
      e(86847),
        e(503),
        e(92665),
        e(75815),
        e(45749),
        e(23041),
        e(32381),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(88737),
        e(18549),
        e(37391),
        e(80719),
        e(93349),
        e(4473),
        e(68126),
        e(2165),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(75986),
        e(41437),
        e(5744);
      var n = e(6212),
        o = e(92204),
        i = e(84867);
      e(23389),
        e(21675),
        e(75491),
        e(99141),
        e(61238),
        e(65109),
        e(296),
        e(30094),
        e(32721),
        e(72424),
        e(32202),
        e(7541),
        e(22440),
        e(94973);
      function a(t) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          a(t)
        );
      }
      function c(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function u(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== a(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== a(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === a(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      var s = 1;
      function l(t) {
        return t.map(function (t, r) {
          return (function (t) {
            for (var r = 1; r < arguments.length; r++) {
              var e = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? c(Object(e), !0).forEach(function (r) {
                    u(t, r, e[r]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : c(Object(e)).forEach(function (r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                  });
            }
            return t;
          })({ id: r + s }, t);
        });
      }
      var f = "^https?://w*\\.?app\\.dashlane\\.com(\\??[^/#]*)[^#]*#?/?(.*)$",
        h = "^https?://w*\\.?console\\.dashlane\\.com(\\??[^/#]*)[^#]*#?/?(.*)$",
        p = "^.*sso.nitro*.dashlane.com/saml/callback.*$";
      var y = "https?://w*\\.?[a-z]+\\.dashlane\\.com.+noredirect.*$",
        v = "https?:w*\\.?[a-z]+\\.dashlane\\.com/cdn-cgi/access/authorized.*$";
      function d(t) {
        return (
          (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          d(t)
        );
      }
      function m() {
        m = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function s(t, r, e, o) {
          var i = r && r.prototype instanceof h ? r : h,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function l(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var f = {};
        function h() {}
        function p() {}
        function y() {}
        var v = {};
        u(v, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, i) && (v = b);
        var w = (y.prototype = h.prototype = Object.create(v));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == d(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, a, c);
                    },
                    function (t) {
                      o("throw", t, a, c);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return o("throw", t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (i = i ? i.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = l(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === f)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              f
            );
          var o = l(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), f;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                f)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), f);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = y),
          n(w, "constructor", { value: y, configurable: !0 }),
          n(y, "constructor", { value: p, configurable: !0 }),
          (p.displayName = u(y, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === p || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          u(L.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          u(w, c, "Generator"),
          u(w, i, function () {
            return this;
          }),
          u(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), f) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                f
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), f;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), f;
            }
          }),
          t
        );
      }
      function g(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return b(t);
          })(t) ||
          (function (t) {
            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
          })(t) ||
          (function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return b(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return b(t, r);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function b(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function w(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function x(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              w(i, n, o, a, c, "next", t);
            }
            function c(t) {
              w(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function L() {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = x(
          m().mark(function t() {
            var r;
            return m().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), (0, n.z)();
                  case 2:
                    return (
                      (r = t.sent),
                      t.abrupt(
                        "return",
                        r.map(function (t) {
                          return t.id;
                        })
                      )
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function O(t, r) {
        var e,
          n = (0, o.A)(""),
          i = new URL(n).hostname,
          a = (function (t) {
            return new URL(t).protocol;
          })(n),
          c = (function (t, r, e) {
            return [
              {
                priority: e,
                action: { type: "redirect", redirect: { regexSubstitution: "".concat(r, "//").concat(t, "/index.html\\1#/\\2") } },
                condition: { regexFilter: f, resourceTypes: ["main_frame"] }
              },
              {
                priority: e,
                action: { type: "redirect", redirect: { regexSubstitution: "".concat(r, "//").concat(t, "/index.html\\1#/console/\\2") } },
                condition: { regexFilter: h, resourceTypes: ["main_frame"] }
              },
              {
                priority: e + 1,
                action: { type: "redirect", redirect: { regexSubstitution: "".concat(r, "//").concat(t, "/loading.html") } },
                condition: { regexFilter: p, resourceTypes: ["main_frame", "sub_frame"] }
              }
            ];
          })(i, a, r),
          u = [
            { priority: (e = r + 1), action: { type: "allowAllRequests" }, condition: { regexFilter: v, resourceTypes: ["main_frame"] } },
            { priority: e, action: { type: "allowAllRequests" }, condition: { regexFilter: y, resourceTypes: ["main_frame"] } }
          ],
          s = (function (t, r, e, n) {
            return t.map(function (t) {
              return {
                priority: n,
                action: {
                  type: "redirect",
                  redirect: {
                    regexSubstitution: ""
                      .concat(e, "//")
                      .concat(r, "/index.html?token=")
                      .concat(((o = t), btoa(encodeURIComponent(o))), "#/anti-phishing")
                  }
                },
                condition: { regexFilter: "^https?://.*".concat(t, ".*$"), resourceTypes: ["main_frame"] }
              };
              var o;
            });
          })(t, i, a, r + 2);
        return l([].concat(g(c), g(u), g(s)));
      }
      function S(t) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = x(
          m().mark(function t(r) {
            var e, n;
            return m().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), L();
                  case 2:
                    (e = t.sent), (n = O(r, 1)), (0, i.O)({ removeRuleIds: e, addRules: n });
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function _(t) {
        var r = t.connectors.extensionToCarbonApiConnector;
        S([]),
          r.livePhishingURLList.on(function (t) {
            S(Array.from(t));
          });
      }
    },
    72121: (t, r, e) => {
      e.d(r, { S: () => o, d: () => n });
      e(2191), e(75815), e(75986);
      function n(t, r) {
        return function (e, n) {
          e.forEach(function (e) {
            return e({ app: r, connectors: t }, n);
          });
        };
      }
      function o(t, r) {
        return function (e, n) {
          r.then(function (r) {
            e.forEach(function (e) {
              return e({ app: r, connectors: t }, n);
            });
          });
        };
      }
    },
    96390: (t, r, e) => {
      e.d(r, { u: () => a });
      var n = e(55329),
        o = e(80524);
      function i(t, r) {
        (0, o.o7)({ message: t, details: r, indentDetails: !0, tags: ["Tiresias"] });
      }
      function a(t) {
        var r = t.connectors.tiresiasBackgroundToCarbonConnector,
          e = t.app;
        new n.TiresiasBackground({ messageLogger: i, carbonConnectorApi: r, grapheneClient: e.createClient() });
      }
    },
    21959: (t, r, e) => {
      e.d(r, { X: () => p });
      e(75815),
        e(45749),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(4473),
        e(68126),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(84318),
        o = e(86554),
        i = e(96873),
        a = e(54964);
      function c(t) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          c(t)
        );
      }
      function u() {
        u = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, i) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, i, a, u) {
            var s = h(t[n], t, i);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == c(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, a, u);
                    },
                    function (t) {
                      o("throw", t, a, u);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return o("throw", t, a, u);
                    }
                  );
            }
            u(s.arg);
          }
          var i;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (i = i ? i.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, s, "Generator"),
          l(w, i, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function s(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      var l = "#FFB81C",
        f = "#09363F";
      function h(t, r) {
        return "BETA" === t ? { text: "BETA", color: l } : 3 === r ? { text: "MV3", color: f } : null;
      }
      function p() {
        return y.apply(this, arguments);
      }
      function y() {
        var t;
        return (
          (t = u().mark(function t() {
            var r, e, c;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), (0, a.G)();
                  case 2:
                    (r = t.sent),
                      (e = (0, n.W)().manifest_version),
                      (c = h(r, e)) && ((0, o.d)({ text: c.text }), (0, i._)({ color: c.color }));
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (y = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                s(i, n, o, a, c, "next", t);
              }
              function c(t) {
                s(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          y.apply(this, arguments)
        );
      }
    },
    6421: (t, r, e) => {
      e.d(r, { k: () => f });
      e(75815),
        e(45749),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(22250),
        e(92665),
        e(88737),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(4473),
        e(68126),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(88417),
        o = e(80524);
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          i(t)
        );
      }
      function a() {
        a = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          c = o.iterator || "@@iterator",
          u = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, c) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, a, c, u) {
            var s = h(t[n], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == i(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, c, u);
                    },
                    function (t) {
                      o("throw", t, c, u);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return o("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (a = a ? a.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[c];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, s, "Generator"),
          l(w, c, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function c(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function u(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              c(i, n, o, a, u, "next", t);
            }
            function u(t) {
              c(i, n, o, a, u, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function s(t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = u(
          a().mark(function t(r) {
            return a().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), (0, n.F)({ isUserAuthenticated: r });
                    case 3:
                      t.next = 8;
                      break;
                    case 5:
                      (t.prev = 5),
                        (t.t0 = t.catch(0)),
                        (0, o.H)({ message: "Failed to update toolbar action icon", details: { error: t.t0 } });
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 5]]
            );
          })
        )).apply(this, arguments);
      }
      function f(t) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = u(
          a().mark(function t(r) {
            var e, n, i, c;
            return a().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (e = r.connectors.extensionToCarbonApiConnector), (t.next = 3), e.getUserLoginStatus();
                    case 3:
                      return (n = t.sent), (i = n.loggedIn), (t.prev = 5), (t.next = 8), s(i);
                    case 8:
                      t.next = 13;
                      break;
                    case 10:
                      (t.prev = 10),
                        (t.t0 = t.catch(5)),
                        (0, o.H)({ message: "Failed to update toolbar action icon", details: { error: t.t0 } });
                    case 13:
                      (c = !1),
                        e.liveLoginStatus.on(function (t) {
                          var r = t.loggedIn;
                          r !== c && s(r), (c = r);
                        });
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[5, 10]]
            );
          })
        )).apply(this, arguments);
      }
    },
    38952: (t, r, e) => {
      e.d(r, { R: () => u });
      e(75815),
        e(45749),
        e(22250),
        e(92665),
        e(88737),
        e(23389),
        e(21675),
        e(68126),
        e(13560),
        e(70758),
        e(2165),
        e(83746),
        e(37944),
        e(55402),
        e(97979),
        e(38509),
        e(95665),
        e(41533),
        e(72029),
        e(71632),
        e(2191),
        e(4473),
        e(75986),
        e(37391),
        e(41437),
        e(5744),
        e(18549);
      var n = e(2927),
        o = e(41659);
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          i(t)
        );
      }
      function a() {
        a = function () {
          return t;
        };
        var t = {},
          r = Object.prototype,
          e = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, r, e) {
              t[r] = e.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          c = o.iterator || "@@iterator",
          u = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function l(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function f(t, r, e, o) {
          var i = r && r.prototype instanceof y ? r : y,
            a = Object.create(i.prototype),
            c = new _(o || []);
          return n(a, "_invoke", { value: E(t, e, c) }), a;
        }
        function h(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        l(m, c, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== r && e.call(b, c) && (m = b);
        var w = (d.prototype = y.prototype = Object.create(m));
        function x(t) {
          ["next", "throw", "return"].forEach(function (r) {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function L(t, r) {
          function o(n, a, c, u) {
            var s = h(t[n], t, a);
            if ("throw" !== s.type) {
              var l = s.arg,
                f = l.value;
              return f && "object" == i(f) && e.call(f, "__await")
                ? r.resolve(f.__await).then(
                    function (t) {
                      o("next", t, c, u);
                    },
                    function (t) {
                      o("throw", t, c, u);
                    }
                  )
                : r.resolve(f).then(
                    function (t) {
                      (l.value = t), c(l);
                    },
                    function (t) {
                      return o("throw", t, c, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          n(this, "_invoke", {
            value: function (t, e) {
              function n() {
                return new r(function (r, n) {
                  o(t, e, r, n);
                });
              }
              return (a = a ? a.then(n, n) : n());
            }
          });
        }
        function E(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = O(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var u = h(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function O(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), O(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              p
            );
          var o = h(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function j(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function P(t) {
          if (t) {
            var r = t[c];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                o = function r() {
                  for (; ++n < t.length; ) if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                  return (r.value = void 0), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = d),
          n(w, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = l(d, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), l(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          l(w, s, "Generator"),
          l(w, c, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = Object(t),
              e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (_.prototype = {
            constructor: _,
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
                for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function n(e, n) {
                return (a.type = "throw"), (a.arg = t), (r.next = e), n && ((r.method = "next"), (r.arg = void 0)), !!n;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, "catchLoc"),
                    u = e.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                p
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), p;
            }
          }),
          t
        );
      }
      function c(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function u(t) {
        return s.apply(this, arguments);
      }
      function s() {
        var t;
        return (
          (t = a().mark(function t(r) {
            var e, i, c, u;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = r.connectors.extensionToCarbonApiConnector),
                      (i = new URL("".concat(o.fL, "/feedback"))),
                      (t.next = 4),
                      e.getPlatformName()
                    );
                  case 4:
                    return (c = t.sent), i.searchParams.append("platform", c), (t.next = 8), e.getAnonymousComputerId();
                  case 8:
                    (u = t.sent), i.searchParams.append("aci", u), (0, n.S)(i.toString());
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (s = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                c(i, n, o, a, u, "next", t);
              }
              function u(t) {
                c(i, n, o, a, u, "throw", t);
              }
              a(void 0);
            });
          }),
          s.apply(this, arguments)
        );
      }
    },
    21516: (t, r, e) => {
      e.d(r, { b: () => i });
      var n = e(48758),
        o = e(41659);
      function i() {
        (0, n.b)({ route: o.U6 });
      }
    },
    21178: (t, r, e) => {
      e.r(r), e.d(r, { ParsedURL: () => n.Y });
      var n = e(64718);
    },
    64718: (t, r, e) => {
      e.d(r, { Y: () => h });
      var n = e(11590),
        o = e(33377);
      const i = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/,
        a = (t) => i.test(t),
        c = (t) => t.startsWith("["),
        u = (t) => {
          const r = (function (t) {
              if (!t) return "";
              const r = (function (t) {
                const r = [];
                let e = t.split(".");
                for (; 1 !== e.length; ) (e = e.slice(1)), r.push(e.join("."));
                return r;
              })(t);
              if (0 === r.length) return "";
              if (o.x.exception.has(t)) return r[0];
              for (let t = 0; t < r.length; t++) {
                const e = r[t];
                if (o.x.exception.has(e)) return r[t + 1];
                if (o.x.basic.has(e)) return e;
                const n = r[t + 1];
                if (o.x.wildcard.has(n)) return e;
              }
              return "";
            })(t),
            e = ((t, r) => (r && (t = t.slice(0, -r.length - 1)), t.replace(/^www\./, "")))(t, r).split(".");
          return { etld: r, mainDomain: e[e.length - 1] ? e[e.length - 1] : "", subdomain: e.length > 1 ? e.slice(0, -1).join(".") : "" };
        },
        s = /^[A-Za-z+\-.]+:\/\//,
        l = (t) => s.test(t),
        f = (t) => "" !== t;
      class h {
        constructor(t) {
          this.appendETLD = (t) => (this.etld ? `${t}.${this.etld}` : t);
          const r = ((t) => {
            const r = {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                password: "",
                pathname: "",
                port: "",
                protocol: "",
                search: "",
                username: "",
                userInput: "",
                userInputWithProtocol: ""
              },
              e = t;
            if (!(t = t.trim())) return r;
            l(t) || (t = `https://${t}`);
            try {
              const r = new URL(((t) => (t.endsWith(".") ? t.slice(0, -1) : t))(t));
              return {
                hash: r.hash,
                host: r.host,
                hostname: r.hostname,
                href: r.href,
                origin: r.origin,
                password: r.password,
                pathname: r.pathname,
                port: r.port,
                protocol: r.protocol,
                search: r.search,
                username: r.username,
                userInput: e,
                userInputWithProtocol: t
              };
            } catch (t) {
              return r;
            }
          })((t = "string" == typeof t ? t : ""));
          (this.isUnicode = t !== (0, n.H9)(t)),
            (this.hostname = r.hostname),
            (this.host = r.host),
            (this.pathname = r.pathname),
            (this.piiStrippedURL = ((t) => {
              if (!t) return "";
              if (!["http:", "https:"].includes(t.protocol)) return t.href;
              try {
                return (
                  (l(t.userInput) ? t.origin : t.origin.split("://")[1]) +
                  (() => {
                    if ("/" !== t.pathname) return t.pathname;
                    const r = t.userInput.split(t.host);
                    return r.length > 1 && r[1].startsWith("/") ? t.pathname : "";
                  })() +
                  t.hash
                );
              } catch (t) {
                return "";
              }
            })(r)),
            (this.search = r.search),
            (this.hasHTTPProtocol = ((t) => t.startsWith("http://") || t.startsWith("https://"))(t));
          const {
            etld: e,
            mainDomain: o,
            subdomain: i
          } = !(s = this.hostname) || ((t) => t.startsWith(".") || t.endsWith("."))(s)
            ? { etld: "", mainDomain: "", subdomain: "" }
            : "localhost" === s
            ? { etld: "", mainDomain: s, subdomain: "" }
            : a(s)
            ? ((t) => ({ etld: "", mainDomain: t, subdomain: "" }))(s)
            : c(s)
            ? ((t) => ({ etld: "", mainDomain: t.slice(1, -1), subdomain: "" }))(s)
            : u(s);
          var s;
          (this.etld = e),
            (this.rootDomainName = o),
            (this.subdomain = i),
            (this.userInput = r.userInput),
            (this.userInputWithProtocol = r.userInputWithProtocol);
        }
        getRootDomain() {
          const t = this.appendETLD(this.rootDomainName);
          return this.isUnicode ? (0, n.xX)(t) : t;
        }
        getRootDomainName() {
          return this.isUnicode ? (0, n.xX)(this.rootDomainName) : this.rootDomainName;
        }
        getSubdomain() {
          return this.isUnicode ? (0, n.xX)(this.subdomain) : this.subdomain;
        }
        getHostname() {
          return this.isUnicode ? (0, n.xX)(this.hostname) : this.hostname;
        }
        getHost() {
          return this.isUnicode ? (0, n.xX)(this.host) : this.host;
        }
        getETLD() {
          return this.isUnicode ? (0, n.xX)(this.etld) : this.etld;
        }
        getPIIStrippedURL() {
          if (this.isUnicode) {
            const t = this.piiStrippedURL.split("://");
            return `${t[0]}://${(0, n.xX)(t[1])}`;
          }
          return this.piiStrippedURL;
        }
        getSearch() {
          return this.isUnicode ? (0, n.xX)(this.search) : this.search;
        }
        getPathname() {
          return this.pathname;
        }
        isUrlValid(t = {}) {
          const { IPv4Allowed: r = !0, IPv6Allowed: e = !0, mustBeHttpOrHttps: n = !1, requireEtld: o = !1 } = t;
          return (
            !(!r && a(this.hostname)) &&
            !(!e && c(this.hostname)) &&
            !(n && !this.hasHTTPProtocol) &&
            !(o && !f(this.etld)) &&
            (this.hasHTTPProtocol || f(this.etld) || this.isUrlIP())
          );
        }
        hasHTTPLikeProtocol() {
          return this.hasHTTPProtocol;
        }
        getUrlWithFallbackHttpsProtocol() {
          return this.isUnicode ? (0, n.xX)(this.userInputWithProtocol) : this.userInputWithProtocol;
        }
        isUrlIP() {
          return a(this.hostname) || c(this.hostname);
        }
      }
    }
  }
]);
