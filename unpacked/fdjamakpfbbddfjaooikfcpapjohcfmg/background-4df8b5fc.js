/*! For license information please see background-4df8b5fc.js.LICENSE.txt */
"use strict";
(self.webpackChunk_dashlane_amphora = self.webpackChunk_dashlane_amphora || []).push([
  [458],
  {
    63891: (t, r, e) => {
      e(86847),
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
      var n = e(32012),
        o = e(25417),
        i = e(17532),
        a = e(25512),
        c = e(80524),
        u = e(17594),
        s = e(84836),
        f = e(7019),
        l = e(36773),
        h = e(91524),
        p = e(61425),
        y = e(72121),
        v = e(92005),
        d = e(822),
        g = e(64215),
        m = e(81645),
        b = e(95013),
        w = e(38952),
        L = e(21516),
        x = e(15239),
        E = e(1667),
        k = e(39614),
        _ = e(6421),
        C = e(21959),
        O = e(67576),
        S = e(87329),
        j = e(67873),
        G = e(85224),
        P = e(96390),
        N = e(67550),
        T = e(33886);
      function F(t) {
        return (
          (F =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          F(t)
        );
      }
      function I() {
        I = function () {
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
          return n(a, "_invoke", { value: L(t, e, c) }), a;
        }
        function f(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var l = {};
        function h() {}
        function p() {}
        function y() {}
        var v = {};
        u(v, i, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          g = d && d(d(C([])));
        g && g !== r && e.call(g, i) && (v = g);
        var m = (y.prototype = h.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function w(t, r) {
          function o(n, i, a, c) {
            var u = f(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" == F(l) && e.call(l, "__await")
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
        function L(t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return O();
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = x(a, e);
                if (c) {
                  if (c === l) continue;
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
                if (((n = e.done ? "completed" : "suspendedYield"), u.arg === l)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function x(t, r) {
          var e = r.method,
            n = t.iterator[e];
          if (void 0 === n)
            return (
              (r.delegate = null),
              ("throw" === e && t.iterator.return && ((r.method = "return"), (r.arg = void 0), x(t, r), "throw" === r.method)) ||
                ("return" !== e && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + e + "' method")))),
              l
            );
          var o = f(n, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), l;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                (r.delegate = null),
                l)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), l);
        }
        function E(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function k(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(E, this), this.reset(!0);
        }
        function C(t) {
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
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = y),
          n(m, "constructor", { value: y, configurable: !0 }),
          n(y, "constructor", { value: p, configurable: !0 }),
          (p.displayName = u(y, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === p || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
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
          b(m),
          u(m, c, "Generator"),
          u(m, i, function () {
            return this;
          }),
          u(m, "toString", function () {
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
          (t.values = C),
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
                this.tryEntries.forEach(k),
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
              return (a.type = t), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), l) : this.complete(a);
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                l
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), k(e), l;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    k(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (this.delegate = { iterator: C(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), l;
            }
          }),
          t
        );
      }
      function z(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function A() {
        var t;
        return (
          (t = I().mark(function t(r) {
            var e, o, c, u, s, f, l, h, p, y, v, d, g, m;
            return I().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (e = (0, a.K)()), (o = (0, n.G)() ? (0, a.Z)() : void 0), (t.next = 4), (0, N.W)();
                  case 4:
                    return (
                      (c = t.sent),
                      (u = c.app),
                      (s = c.signalCarbonReady),
                      (f = r.applicationModulesToCarbonApiConnector),
                      (l = r.carbonApiConnector),
                      (h = r.carbonDebugConnector),
                      (p = r.carbonLegacyWebappConnectorForGraphene),
                      (y = r.carbonInfrastructureConnectors),
                      (v = r.carbonToExtensionLegacyConnector),
                      (d = r.carbonLegacyWebappConnector),
                      (g = r.carbonLegacyMaverickConnector),
                      (t.next = 10),
                      (0, i.v)({
                        apiConnector: l,
                        debugConnector: h,
                        infrastructureConnectors: y,
                        legacyExtensionConnector: v,
                        legacyWebappConnector: d,
                        legacyMaverickConnector: g,
                        publicPath: "./",
                        storageLayer: e,
                        sessionStorage: o,
                        app: u
                      })
                    );
                  case 10:
                    return (m = t.sent), s(m, f, p), t.abrupt("return", u);
                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (A = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                z(i, n, o, a, c, "next", t);
              }
              function c(t) {
                z(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          A.apply(this, arguments)
        );
      }
      !(function () {
        (0, c._v)({ message: "Background initialization started", tags: ["initBackground", "initialization"] });
        var t = (0, u.s)(),
          r = (function (t) {
            return A.apply(this, arguments);
          })(t),
          e = (0, y.S)(t, r),
          n = (0, y.d)(t, r),
          i = (0, o.G)() ? [O.D] : [S.r, j.U];
        (0, h.H)(function () {
          n([(0, s.M)() ? g.U : d.I, G.u]), e([].concat(i, [v.f, k.m, m.g, b.T, w.R, _.k, C.X, P.u]));
        }),
          (0, l.Z)(function () {
            e([x.J, L.b]);
          }),
          (0, f.U)(function () {
            return e([E.k]);
          }),
          (0, p.f)(function () {
            return e([T.C]);
          }),
          (0, c._v)({ message: "Background initialization finished", tags: ["initBackground", "initialization"] });
      })();
    }
  }
]);
