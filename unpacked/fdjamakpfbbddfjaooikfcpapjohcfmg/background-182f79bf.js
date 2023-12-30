/*! For license information please see background-182f79bf.js.LICENSE.txt */
"use strict";
(self.webpackChunk_dashlane_amphora = self.webpackChunk_dashlane_amphora || []).push([
  [782],
  {
    18607: (t, r, e) => {
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
        i = e(25601),
        a = e(63272),
        c = e(28509),
        u = e(84318),
        s = (e(35758), e(82312), e(23041), e(24957), e(13560), e(70758), e(92204)),
        l = e(59894);
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
      function h() {
        h = function () {
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
        var p = {};
        function y() {}
        function v() {}
        function d() {}
        var m = {};
        u(m, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          w = g && g(g(P([])));
        w && w !== r && e.call(w, i) && (m = w);
        var b = (d.prototype = y.prototype = Object.create(m));
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
              var u = l(t, r, e);
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
          var o = l(n, t.iterator, r.arg);
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
          n(b, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(d, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
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
          x(b),
          u(b, c, "Generator"),
          u(b, i, function () {
            return this;
          }),
          u(b, "toString", function () {
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
      function v(t) {
        if (
          !(
            t.buildType &&
            "string" == typeof t.buildType &&
            Object.values(l.P)
              .map(function (t) {
                return t.toString();
              })
              .includes(t.buildType)
          )
        )
          throw new Error("Build type from runtime-config.json is invalid");
        return l.P[t.buildType];
      }
      var d = (function () {
          var t = y(
            h().mark(function t() {
              var r, e, n, o;
              return h().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ((r = (0, s.A)("runtime-config.json"))) {
                          t.next = 3;
                          break;
                        }
                        throw new Error("Could not build path to runtime-config.json");
                      case 3:
                        return (t.prev = 3), (t.next = 6), fetch(r);
                      case 6:
                        return (e = t.sent), (t.next = 9), e.json();
                      case 9:
                        return (n = t.sent), (o = { buildType: v(n) }), t.abrupt("return", o);
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
        m = (function () {
          var t = y(
            h().mark(function t() {
              var r, e;
              return h().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), d();
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
      function g(t) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          g(t)
        );
      }
      function w() {
        w = function () {
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
        var d = Object.getPrototypeOf,
          m = d && d(d(P([])));
        m && m !== r && e.call(m, i) && (v = m);
        var b = (y.prototype = h.prototype = Object.create(v));
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
              return f && "object" == g(f) && e.call(f, "__await")
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
          n(b, "constructor", { value: y, configurable: !0 }),
          n(y, "constructor", { value: p, configurable: !0 }),
          (p.displayName = u(y, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === p || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
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
          x(b),
          u(b, c, "Generator"),
          u(b, i, function () {
            return this;
          }),
          u(b, "toString", function () {
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
      function b(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function x() {
        return L.apply(this, arguments);
      }
      function L() {
        var t;
        return (
          (t = w().mark(function t() {
            var r, e;
            return w().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), m();
                  case 2:
                    return (
                      (e = t.sent),
                      t.abrupt("return", {
                        platformName: "server_standalone",
                        appVersion: (0, u.W)().version,
                        browser: a.getBrowserName(),
                        browserVersion: a.getBrowserVersion(),
                        country: a.getBrowserCountry(),
                        os: null != (r = c.getOSName()) ? r : "",
                        osCountry: a.getBrowserCountry(),
                        osVersion: c.getOSVersion(),
                        lang: a.getBrowserLanguage(),
                        manifestVersion: (0, u.W)().manifest_version,
                        buildType: e
                      })
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (L = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                b(i, n, o, a, c, "next", t);
              }
              function c(t) {
                b(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          L.apply(this, arguments)
        );
      }
      e(72424), e(32202), e(7541), e(22440), e(94973), e(296), e(30094), e(32721);
      var E = {
        appAccess: "C4F8H4SEAMXNBQVSASVBWDDZNCVTESMY",
        appSecret: "Na9Dz3WcmjMZ5pdYU1AmC5TdYkeWAOzvOK6PkbU4QjfjPQTSaXY8pjPwrvHfVH14"
      };
      function O(t) {
        return (
          (O =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          O(t)
        );
      }
      function S(t, r) {
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
      function j(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? S(Object(e), !0).forEach(function (r) {
                _(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : S(Object(e)).forEach(function (r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return t;
      }
      function _(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== O(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== O(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === O(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      var P = { styxAccess: "DASHQ7DNHYSPYSG6JSF6", styxSecret: "LNS273zaVvwNM+VKOjotBYygJyPaM0CXshpdf0j7" },
        k = j(j(j({}, E), P), null != void 0 ? undefined : {});
      e(98590), e(4639), e(32381), e(503), e(80719), e(93349);
      function N(t) {
        return (
          (N =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          N(t)
        );
      }
      function T(t, r) {
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
            if ("string" == typeof t) return G(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return G(t, r);
          })(t, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function G(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function A(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== N(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== N(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === N(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      function I(t) {
        return (
          (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          I(t)
        );
      }
      function C(t, r) {
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
      function F(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== I(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== I(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === I(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      var R,
        D,
        U = (function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var e = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? C(Object(e), !0).forEach(function (r) {
                  F(t, r, e[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
              : C(Object(e)).forEach(function (r) {
                  Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                });
          }
          return t;
        })(
          { LOG_LEVEL: 4, CODE_NAME: "amphora", MANIFEST_VERSION: (0, u.W)().manifest_version },
          (A((R = {}), i.DashlaneAPISchemesNames.DASHLANE_API_HOST_WITH_SCHEME, "https://api.dashlane.com"),
          A(R, i.DashlaneAPISchemesNames.DASHLANE_WS_HOST_WITH_SCHEME, ""),
          (D = R),
          Object.fromEntries(
            Object.entries(D).filter(function (t) {
              return T(t, 2)[1];
            })
          ))
        );
      e(68039), e(15442), e(27091);
      function W(t) {
        return (
          (W =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          W(t)
        );
      }
      var Y = " | ",
        B = " - ";
      function H(t, r) {
        return "object" === W(t) ? JSON.stringify(t, null, r) : String(t);
      }
      var M = (function (t) {
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
        $ = M.DEBUG,
        V = M.ERROR,
        z = M.INFO,
        K = M.VERBOSE,
        X = M.WARNING;
      function q(t, r) {
        var e = Object.keys(t);
        return H(
          e
            .filter(function (r) {
              return !(t[r] instanceof Error);
            })
            .reduce(function (r, e) {
              return (r[e] = t[e]), r;
            }, {}),
          r ? 2 : 0
        );
      }
      function Q(t) {
        return function (r) {
          var e = r.details,
            n = void 0 === e ? {} : e,
            o = r.message,
            i = void 0 === o ? "" : o,
            a = r.tags,
            c = void 0 === a ? [] : a,
            u = r.indentDetails,
            s = void 0 !== u && u,
            l = (function (t) {
              var r = t.join("/");
              return r ? "[".concat(r, "]") : "";
            })(c),
            f = q(n, s),
            h = (function (t) {
              return t
                .filter(function (t) {
                  return !!t;
                })
                .join(B);
            })([l, i]);
          "{}" !== f && (h += "".concat(s ? "\n" : B).concat(f));
          var p = (function (t) {
              return t.error instanceof Error ? t.error : null;
            })(n),
            y = p ? [h, "\n", p] : [h];
          t.apply(void 0, y);
        };
      }
      function J(t) {
        4 > $ || Q(console.debug)(t);
      }
      function Z(t) {
        4 > V || Q(console.error)(t);
      }
      function tt(t) {
        4 > K || Q(console.log)(t);
      }
      function rt(t) {
        return (
          (rt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          rt(t)
        );
      }
      function et() {
        et = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == rt(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function nt(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function ot(t) {
        return it.apply(this, arguments);
      }
      function it() {
        var t;
        return (
          (t = et().mark(function t(r) {
            var e, n, o, a, c, u, s, l, f, h, p, y;
            return et().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = r.apiConnector),
                      (n = r.debugConnector),
                      (o = r.infrastructureConnectors),
                      (a = r.legacyExtensionConnector),
                      (c = r.legacyWebappConnector),
                      (u = r.legacyMaverickConnector),
                      (s = r.publicPath),
                      (l = r.storageLayer),
                      (f = r.sessionStorage),
                      (h = r.app),
                      tt({ message: "Carbon initialization started", tags: ["initCarbon"] }),
                      (t.next = 4),
                      x()
                    );
                  case 4:
                    return (
                      (p = t.sent),
                      (t.next = 7),
                      (0, i.init)({
                        connectors: { api: e, debug: n, extension: a, leeloo: c, maverick: u },
                        infrastructure: { connectors: o },
                        platformInfo: p,
                        publicPath: s,
                        storageLayer: l,
                        sessionStorage: f,
                        keys: k,
                        config: U,
                        settings: { sync: { syncWithLocalClients: !0 } },
                        createClients: h.createClient
                      })
                    );
                  case 7:
                    return (y = t.sent), tt({ message: "Carbon initialization finished", tags: ["initCarbon"] }), t.abrupt("return", y);
                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (it = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                nt(i, n, o, a, c, "next", t);
              }
              function c(t) {
                nt(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          it.apply(this, arguments)
        );
      }
      var at = e(41808),
        ct = e(45441),
        ut = e(9244),
        st = e(52477),
        lt = e(15026),
        ft = e(56847),
        ht = e(59488);
      function pt(t) {
        return (
          (pt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          pt(t)
        );
      }
      function yt(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== pt(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== pt(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === pt(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      function vt() {
        vt = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == pt(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function dt(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function mt(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              dt(i, n, o, a, c, "next", t);
            }
            function c(t) {
              dt(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function gt(t) {
        return "string" == typeof t || null === t;
      }
      function wt() {
        return new i.CarbonStorage({
          itemExists:
            ((n = mt(
              vt().mark(function t(r) {
                return vt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, ht.j)(r);
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
              return n.apply(this, arguments);
            }),
          readItem:
            ((e = mt(
              vt().mark(function t(r) {
                var e, n;
                return vt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, at.U)(r);
                      case 2:
                        if (((e = t.sent), gt((n = e[r])))) {
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
            ((r = mt(
              vt().mark(function t(r) {
                return vt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, ct.O)(r);
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
            ((t = mt(
              vt().mark(function t(r, e) {
                var n;
                return vt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = yt({}, r, e)), (t.next = 3), (0, ut.t)(n);
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
        var t, r, e, n;
      }
      function bt() {
        return {
          removeItem:
            ((e = mt(
              vt().mark(function t(r) {
                return vt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, st.O)(r);
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
            ((r = mt(
              vt().mark(function t(r) {
                var e;
                return vt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, lt.U)(r);
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
            ((t = mt(
              vt().mark(function t(r, e) {
                var n;
                return vt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = yt({}, r, e)), (t.next = 3), (0, ft.t)(n);
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
      var xt = e(71796),
        Lt = e(49594),
        Et = e(62029),
        Ot = e(98052),
        St = e(92486),
        jt = e(35096),
        _t = e(98558),
        Pt = e(88771);
      function kt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Nt(t);
          })(t) ||
          (function (t) {
            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
          })(t) ||
          (function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return Nt(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Nt(t, r);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Nt(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function Tt(t) {
        return (0, xt.createEventBus)({ events: Lt.X, channels: t });
      }
      function Gt(t) {
        return (0, xt.createEventBus)({ events: Ot.z, channels: t });
      }
      function At(t, r) {
        return (0, xt.createEventBus)({ events: St.N, channels: t, ignoredEvents: r });
      }
      function It(t) {
        return (0, xt.createEventBus)({ events: jt.I, channels: t });
      }
      function Ct(t) {
        return (0, xt.createEventBus)({ events: _t.D, channels: t });
      }
      var Ft = 3e4;
      var Rt = e(28367),
        Dt = e(33666),
        Ut = e(63879),
        Wt = e(71439),
        Yt = 5e3,
        Bt = Ut.O.PopupCarbon,
        Ht = Ut.O.PopupCarbonLoader,
        Mt = Ut.O.OptionsCarbon,
        $t = Ut.O.WebappCarbon;
      function Vt() {
        var t = new Rt.s(Ht, Yt);
        t.connect();
        var r = new Rt.s(Bt, Yt);
        r.connect();
        var e = new Rt.s(Mt, Yt);
        e.connect();
        var n = new Dt.Y($t, Yt);
        n.connect();
        var o,
          i,
          a,
          c = new Pt.y(),
          u = new Pt.y(Ft),
          s = new Pt.y(),
          l = new Pt.y(),
          f = It([c]),
          h =
            ((o = [t, r]),
            (i = new Pt.y()),
            (a = new Pt.y()),
            (0, Pt.P)(i, a),
            { carbonToExtensionLegacyConnector: Gt([].concat(kt(o), [i])), extensionToCarbonLegacyConnector: Gt([a]) }),
          p = h.carbonToExtensionLegacyConnector,
          y = h.extensionToCarbonLegacyConnector,
          v = new Pt.y(Ft),
          d = new Pt.y(Ft);
        (0, Pt.P)(v, d);
        var m,
          g,
          w,
          b,
          x = At([n, v]),
          L = At([d], Wt.LEGACY_LEELOO_SLOTS_TO_IGNORE),
          E = Tt([t, r, e, n, c, u, s, l]),
          O = (0, xt.createEventBus)({ events: Et.o }),
          S = { deviceLimit: Ct([n]) },
          j = (function (t) {
            var r = new Pt.y();
            return (0, Pt.P)(t, r), { autofillEngineCarbonConnector: Tt([r]), autofillEngineLegacyCarbonConnector: It([r]) };
          })(c),
          _ = j.autofillEngineCarbonConnector,
          P = j.autofillEngineLegacyCarbonConnector,
          k = ((m = l), (g = new Pt.y()), (0, Pt.P)(m, g), Tt([g])),
          N = (function (t) {
            var r = new Pt.y(Ft);
            return (0, Pt.P)(t, r), Tt([r]);
          })(u);
        return {
          applicationModulesToCarbonApiConnector: N,
          autofillEngineCarbonConnector: _,
          autofillEngineLegacyCarbonConnector: P,
          carbonApiConnector: E,
          carbonDebugConnector: O,
          carbonInfrastructureConnectors: S,
          carbonLegacyMaverickConnector: f,
          carbonLegacyWebappConnector: x,
          carbonToExtensionLegacyConnector: p,
          extensionToCarbonApiConnector: ((w = s), (b = new Pt.y()), (0, Pt.P)(w, b), Tt([b])),
          extensionToCarbonLegacyConnector: y,
          tiresiasBackgroundToCarbonConnector: k,
          carbonLegacyWebappConnectorForGraphene: L
        };
      }
      var zt = e(23386);
      function Kt(t) {
        zt.Y.addListener(t);
      }
      e(37853);
      var Xt = "carbonDebugConnector";
      function qt(t) {
        var r = t.date,
          e = t.message,
          n = t.optionalParams,
          o = "string" == typeof e ? e : "Invalid message type",
          i = n.map(H).join(Y);
        return (i ? [r, o, i] : [r, o]).join(B);
      }
      var Qt = {
        error: Z,
        info: function (t) {
          4 > z || Q(console.info)(t);
        },
        log: tt,
        warning: function (t) {
          4 > X || Q(console.warn)(t);
        }
      };
      function Jt(t) {
        var r,
          e = t.connectors.carbonDebugConnector;
        (r = e),
          Object.keys(Qt).forEach(function (t) {
            r[t].on(function (r) {
              if (
                !(function (t) {
                  return ["error", "info", "log", "warning"].some(function (r) {
                    return r === t;
                  });
                })(t)
              )
                throw new Error("Invalid debug connector event");
              (0, Qt[t])({ message: qt(r), tags: [Xt] });
            });
          });
      }
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
        e(78895),
        e(45595),
        e(25676);
      var Zt = "assets/argon2/argon2.min.js",
        tr = "assets/argon2/argon2.wasm";
      function rr(t) {
        return (
          (rr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          rr(t)
        );
      }
      function er() {
        er = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == rr(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function nr(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function or(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              nr(i, n, o, a, c, "next", t);
            }
            function c(t) {
              nr(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ir() {
        self.loadArgon2WasmBinary = or(
          er().mark(function t() {
            var r, e;
            return er().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), fetch(tr);
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
      function ar(t) {
        return (
          (ar =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          ar(t)
        );
      }
      function cr() {
        cr = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == ar(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function ur(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function sr(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              ur(i, n, o, a, c, "next", t);
            }
            function c(t) {
              ur(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function lr() {
        (self.loadArgon2WasmModule = function () {
          return importScripts(Zt), Promise.resolve();
        }),
          (self.loadArgon2WasmBinary = sr(
            cr().mark(function t() {
              var r, e;
              return cr().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), fetch(tr);
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
          importScripts(Zt);
      }
      e(68585);
      var fr = e(13090),
        hr = e(54422);
      function pr(t) {
        return (
          (pr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          pr(t)
        );
      }
      function yr() {
        yr = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == pr(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function vr(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      var dr = 60;
      function mr(t) {
        var r = t.find(function (t) {
          return "accepted" === t.status;
        });
        return r ? r.info.forceAutomaticLogout * dr : 0;
      }
      function gr(t, r) {
        var e,
          n = function (t) {
            "idle" === t && r();
          };
        t.liveLoginStatus.on(
          (function () {
            var r,
              o =
                ((r = yr().mark(function r(o) {
                  var i, a, c, u;
                  return yr().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (((i = o.loggedIn), e && fr.e.removeListener(e), !i)) {
                            r.next = 10;
                            break;
                          }
                          return (r.next = 5), t.getPremiumStatus();
                        case 5:
                          (a = r.sent), (c = a.spaces), (u = mr(void 0 === c ? [] : c)) && ((0, hr.X)(u), (e = fr.e.addListener(n)));
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
                      vr(i, n, o, a, c, "next", t);
                    }
                    function c(t) {
                      vr(i, n, o, a, c, "throw", t);
                    }
                    a(void 0);
                  });
                });
            return function (t) {
              return o.apply(this, arguments);
            };
          })()
        );
      }
      function wr(t) {
        var r = t.connectors,
          e = r.extensionToCarbonApiConnector,
          n = r.extensionToCarbonLegacyConnector;
        gr(e, function () {
          n.closeSession({});
        });
      }
      var br = e(24715),
        xr = e(96002);
      function Lr(t) {
        return (
          (Lr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          Lr(t)
        );
      }
      function Er() {
        Er = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == Lr(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function Or(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function Sr() {
        var t;
        return (
          (t = Er().mark(function t(r, e) {
            var n;
            return Er().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((n = e.flowLoginCredentialOnWebSite)) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return");
                  case 3:
                    return (t.next = 5), (0, xr.$)(n.domain);
                  case 5:
                    return (t.next = 7), (0, br.U)({ url: n.url });
                  case 7:
                    return (t.next = 9), r.updateWebOnboardingMode({ flowLoginCredentialOnWebSite: null });
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (Sr = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                Or(i, n, o, a, c, "next", t);
              }
              function c(t) {
                Or(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          Sr.apply(this, arguments)
        );
      }
      function jr(t) {
        var r = t.connectors,
          e = r.extensionToCarbonApiConnector,
          n = r.extensionToCarbonLegacyConnector;
        e.liveWebOnboardingMode.on(function (t) {
          !(function (t, r) {
            Sr.apply(this, arguments);
          })(n, t);
        });
      }
      e(23389), e(21675);
      var _r = e(2927),
        Pr = "https://www.dashlane.com",
        kr = "/signup";
      function Nr(t) {
        return (
          (Nr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          Nr(t)
        );
      }
      function Tr() {
        Tr = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == Nr(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function Gr(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function Ar(t) {
        return Ir.apply(this, arguments);
      }
      function Ir() {
        var t;
        return (
          (t = Tr().mark(function t(r) {
            var e, n, o, i;
            return Tr().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = r.connectors.extensionToCarbonApiConnector),
                      (n = new URL("".concat(Pr, "/feedback"))),
                      (t.next = 4),
                      e.getPlatformName()
                    );
                  case 4:
                    return (o = t.sent), n.searchParams.append("platform", o), (t.next = 8), e.getAnonymousComputerId();
                  case 8:
                    (i = t.sent), n.searchParams.append("aci", i), (0, _r.S)(n.toString());
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (Ir = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                Gr(i, n, o, a, c, "next", t);
              }
              function c(t) {
                Gr(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          Ir.apply(this, arguments)
        );
      }
      var Cr = e(47940);
      function Fr() {
        (0, Cr.b)({ route: kr });
      }
      var Rr = e(329),
        Dr = e(93039),
        Ur = (function (t) {
          return (t[(t.UNKNOWN = 0)] = "UNKNOWN"), (t[(t.WARNING = 1)] = "WARNING"), (t[(t.ERROR = 2)] = "ERROR"), t;
        })({});
      function Wr(t) {
        return (
          (Wr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          Wr(t)
        );
      }
      var Yr = Ur.ERROR;
      function Br(t) {
        var r = t.column,
          e = t.line,
          n = t.name;
        return r || e || n ? "".concat(n, ":").concat(e, ":").concat(r) : "";
      }
      function Hr(t) {
        try {
          var r = (function (t) {
            return "object" === Wr(t) && Boolean(t);
          })(t);
          if (!r) return { code: Yr, fileName: "make.ts", funcName: "makeException", legacy: !1, message: "Potential error is not object" };
          var e = t.columnNumber,
            n = t.fileName,
            o = t.funcName,
            i = t.level,
            a = t.lineNumber,
            c = t.message,
            u = t.stack,
            s = Br({ column: e, line: a, name: n });
          return {
            code: null != i ? i : Yr,
            fileName: s,
            funcName: null != o ? o : "",
            legacy: !1,
            line: a,
            message: null != c ? c : "",
            precisions: u
          };
        } catch (t) {
          return { code: Yr, fileName: "make.ts", funcName: "makeException", legacy: !1, message: "Caught exception inception" };
        }
      }
      var Mr = null;
      function $r(t) {
        return (
          ($r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          $r(t)
        );
      }
      function Vr() {
        Vr = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == $r(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function zr(t, r) {
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
      function Kr(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? zr(Object(e), !0).forEach(function (r) {
                Xr(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : zr(Object(e)).forEach(function (r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return t;
      }
      function Xr(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== $r(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== $r(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === $r(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      function qr(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function Qr(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              qr(i, n, o, a, c, "next", t);
            }
            function c(t) {
              qr(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Jr() {
        return Zr.apply(this, arguments);
      }
      function Zr() {
        return (
          (Zr = Qr(
            Vr().mark(function t() {
              var r, e, n, o, i, a;
              return Vr().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), (0, Rr.g)({ domain: "dashlane.com", name: "userFunnelCookie" });
                      case 2:
                        if (!(r = t.sent)[0]) {
                          t.next = 16;
                          break;
                        }
                        return (e = decodeURIComponent(r[0].value)), (t.prev = 5), t.abrupt("return", JSON.parse(e));
                      case 9:
                        (t.prev = 9),
                          (t.t0 = t.catch(5)),
                          (n = Ur.WARNING),
                          (o = { message: "Error parsing userFunnelCookie" }),
                          (u = t.t0),
                          (i = "object" === Wr(u) && null !== u && "message" in u ? t.t0 : o),
                          (a = Hr(Kr(Kr({}, i), {}, { level: n }))),
                          (c = a),
                          Mr ? Mr(c) : console.error("Send exception log function not set");
                      case 16:
                        return t.abrupt("return", {});
                      case 17:
                      case "end":
                        return t.stop();
                    }
                  var c, u;
                },
                t,
                null,
                [[5, 9]]
              );
            })
          )),
          Zr.apply(this, arguments)
        );
      }
      function te(t) {
        return "" !== t ? t : void 0;
      }
      function re(t) {
        return ee.apply(this, arguments);
      }
      function ee() {
        return (ee = Qr(
          Vr().mark(function t(r) {
            var e, n, o;
            return Vr().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (e = r.connectors.extensionToCarbonApiConnector), (t.next = 3), Jr();
                  case 3:
                    (n = t.sent),
                      (o =
                        0 === Object.keys(n).length
                          ? { has_cookie: !1 }
                          : {
                              has_cookie: !0,
                              heap_identity: n.trackingId,
                              gclid: n.gclid,
                              everflow_transaction_id: n.transaction_id,
                              utm_pathname: n.pathname,
                              utm_referrer: te(n.referrer),
                              utm_source: te(n.utm_source),
                              utm_campaign: te(n.utm_campaign),
                              utm_medium: te(n.utm_medium),
                              utm_content: te(n.utm_content),
                              utm_term: te(n.utm_term),
                              utm_visit_timestamp: n.utm_visitTimestamp,
                              utm_last_click_pathname: n.last_click_pathname,
                              utm_last_click_referrer: te(n.last_click_referrer),
                              utm_last_click_source: te(n.last_click_source),
                              utm_last_click_campaign: te(n.last_click_campaign),
                              utm_last_click_medium: te(n.last_click_medium),
                              utm_last_click_content: te(n.last_click_content),
                              utm_last_click_term: te(n.last_click_term),
                              utm_last_click_visit_timestamp: n.last_click_visitTimestamp
                            }),
                      e.logEvent({ event: new Dr.UserFirstLaunchEvent({ web: o }) });
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var ne = e(39973);
      function oe() {
        (0, ne.D)();
      }
      var ie = e(56386);
      function ae(t) {
        var r = t.connectors.extensionToCarbonApiConnector,
          e = !1;
        r.liveDidOpen.on(function (t) {
          e && !t && (0, ie.H)(), (e = t);
        });
      }
      var ce = e(58821);
      function ue(t) {
        return (
          (ue =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          ue(t)
        );
      }
      function se() {
        se = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == ue(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function le(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function fe(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              le(i, n, o, a, c, "next", t);
            }
            function c(t) {
              le(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function he(t) {
        return pe.apply(this, arguments);
      }
      function pe() {
        return (pe = fe(
          se().mark(function t(r) {
            return se().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), (0, ce.F)({ isUserAuthenticated: r });
                    case 3:
                      t.next = 8;
                      break;
                    case 5:
                      (t.prev = 5), (t.t0 = t.catch(0)), Z({ message: "Failed to update toolbar action icon", details: { error: t.t0 } });
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
      function ye(t) {
        return ve.apply(this, arguments);
      }
      function ve() {
        return (ve = fe(
          se().mark(function t(r) {
            var e, n, o, i;
            return se().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (e = r.connectors.extensionToCarbonApiConnector), (t.next = 3), e.getUserLoginStatus();
                    case 3:
                      return (n = t.sent), (o = n.loggedIn), (t.prev = 5), (t.next = 8), he(o);
                    case 8:
                      t.next = 13;
                      break;
                    case 10:
                      (t.prev = 10), (t.t0 = t.catch(5)), Z({ message: "Failed to update toolbar action icon", details: { error: t.t0 } });
                    case 13:
                      (i = !1),
                        e.liveLoginStatus.on(function (t) {
                          var r = t.loggedIn;
                          r !== i && he(r), (i = r);
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
      var de = e(86554),
        me = e(96873);
      function ge(t) {
        return (
          (ge =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          ge(t)
        );
      }
      function we() {
        we = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == ge(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function be(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      var xe = "#FFB81C",
        Le = "#09363F";
      function Ee(t, r) {
        return "BETA" === t ? { text: "BETA", color: xe } : 3 === r ? { text: "MV3", color: Le } : null;
      }
      function Oe() {
        return Se.apply(this, arguments);
      }
      function Se() {
        var t;
        return (
          (t = we().mark(function t() {
            var r, e, n;
            return we().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), m();
                  case 2:
                    (r = t.sent),
                      (e = (0, u.W)().manifest_version),
                      (n = Ee(r, e)) && ((0, de.d)({ text: n.text }), (0, me._)({ color: n.color }));
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (Se = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                be(i, n, o, a, c, "next", t);
              }
              function c(t) {
                be(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          Se.apply(this, arguments)
        );
      }
      var je = e(6212),
        _e = e(84867);
      e(75491), e(99141), e(61238), e(65109);
      function Pe(t) {
        return (
          (Pe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          Pe(t)
        );
      }
      function ke(t, r) {
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
      function Ne(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== Pe(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== Pe(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === Pe(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      var Te = 1;
      function Ge(t) {
        return t.map(function (t, r) {
          return (function (t) {
            for (var r = 1; r < arguments.length; r++) {
              var e = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? ke(Object(e), !0).forEach(function (r) {
                    Ne(t, r, e[r]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : ke(Object(e)).forEach(function (r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                  });
            }
            return t;
          })({ id: r + Te }, t);
        });
      }
      var Ae = "^https?://w*\\.?app\\.dashlane\\.com(\\??[^/#]*)[^#]*#?/?(.*)$",
        Ie = "^https?://w*\\.?console\\.dashlane\\.com(\\??[^/#]*)[^#]*#?/?(.*)$",
        Ce = "^.*sso.nitro*.dashlane.com/saml/callback.*$";
      var Fe = "https?://w*\\.?[a-z]+\\.dashlane\\.com.+noredirect.*$",
        Re = "https?:w*\\.?[a-z]+\\.dashlane\\.com/cdn-cgi/access/authorized.*$";
      function De(t) {
        return (
          (De =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          De(t)
        );
      }
      function Ue() {
        Ue = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == De(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function We(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Ye(t);
          })(t) ||
          (function (t) {
            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
          })(t) ||
          (function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return Ye(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ye(t, r);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ye(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function Be(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function He(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              Be(i, n, o, a, c, "next", t);
            }
            function c(t) {
              Be(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Me() {
        return $e.apply(this, arguments);
      }
      function $e() {
        return ($e = He(
          Ue().mark(function t() {
            var r;
            return Ue().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), (0, je.z)();
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
      function Ve(t, r) {
        var e,
          n = (0, s.A)(""),
          o = new URL(n).hostname,
          i = (function (t) {
            return new URL(t).protocol;
          })(n),
          a = (function (t, r, e) {
            return [
              {
                priority: e,
                action: { type: "redirect", redirect: { regexSubstitution: "".concat(r, "//").concat(t, "/index.html\\1#/\\2") } },
                condition: { regexFilter: Ae, resourceTypes: ["main_frame"] }
              },
              {
                priority: e,
                action: { type: "redirect", redirect: { regexSubstitution: "".concat(r, "//").concat(t, "/index.html\\1#/console/\\2") } },
                condition: { regexFilter: Ie, resourceTypes: ["main_frame"] }
              },
              {
                priority: e + 1,
                action: { type: "redirect", redirect: { regexSubstitution: "".concat(r, "//").concat(t, "/loading.html") } },
                condition: { regexFilter: Ce, resourceTypes: ["main_frame", "sub_frame"] }
              }
            ];
          })(o, i, r),
          c = [
            { priority: (e = r + 1), action: { type: "allowAllRequests" }, condition: { regexFilter: Re, resourceTypes: ["main_frame"] } },
            { priority: e, action: { type: "allowAllRequests" }, condition: { regexFilter: Fe, resourceTypes: ["main_frame"] } }
          ],
          u = (function (t, r, e, n) {
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
          })(t, o, i, r + 2);
        return Ge([].concat(We(a), We(c), We(u)));
      }
      function ze(t) {
        return Ke.apply(this, arguments);
      }
      function Ke() {
        return (Ke = He(
          Ue().mark(function t(r) {
            var e, n;
            return Ue().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Me();
                  case 2:
                    (e = t.sent), (n = Ve(r, 1)), (0, _e.O)({ removeRuleIds: e, addRules: n });
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Xe(t) {
        var r = t.connectors.extensionToCarbonApiConnector;
        ze([]),
          r.livePhishingURLList.on(function (t) {
            ze(Array.from(t));
          });
      }
      e(92411), e(57560), e(73736), e(33409);
      var qe = e(31460),
        Qe = e(48291),
        Je = e(65881);
      e(23234), e(40440);
      function Ze(t) {
        var r = new URL(t),
          e = r.hostname,
          n = r.hash,
          o = r.search,
          i = e.includes("console.dashlane.com")
            ? "index.html".concat(o, "#/console").concat(n.replace("#", "/").replace("//", "/"))
            : "index.html".concat(o).concat(n.replace("#", "#/").replace("//", "/"));
        return (0, s.A)(i);
      }
      var tn = new RegExp("(console|app).dashlane.com/cdn-cgi/access/authorized"),
        rn = ["".concat("https://app.dashlane.com", "/*"), "".concat("https://console.dashlane.com", "/*")],
        en = ["https://sso.nitro.dashlane.com/saml/callback", "https://sso.nitrostaging.dashlane.com/saml/callback"],
        nn = "main_frame";
      function on(t) {
        var r = t.url,
          e = t.tabId,
          n = r.includes("/sso");
        return (
          (function (t) {
            return t.includes("noredirect") || Boolean(t.match(tn));
          })(r) || (0, qe.V)(e, { active: !n, url: Ze(r) }),
          {}
        );
      }
      function an(t) {
        var r = t.tabId;
        return (0, qe.V)(r, { active: !0, url: (0, s.A)("loading.html") }), { cancel: !0 };
      }
      var cn = function () {
          rn.forEach(function (t) {
            Qe.a.addListener(on, { urls: [t], types: [nn] }, [Je.X.Blocking]);
          }),
            Qe.a.addListener(an, { urls: en, types: [nn, "sub_frame"] }, [Je.X.Blocking]);
        },
        un = e(64718);
      function sn(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ln(t);
          })(t) ||
          (function (t) {
            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
          })(t) ||
          (function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return ln(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ln(t, r);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ln(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function fn(t, r) {
        return "".concat(t, "?token=").concat(((e = new un.Y(r).getRootDomain()), btoa(encodeURIComponent(e))), "#/anti-phishing");
        var e;
      }
      function hn(t) {
        var r = t.tabId,
          e = t.url;
        if (!r) return {};
        var n = Ze((0, s.A)(""));
        return (0, qe.V)(t.tabId, { url: fn(n, e) }), {};
      }
      function pn(t) {
        t.connectors.extensionToCarbonApiConnector.livePhishingURLList.on(function (t) {
          !(function (t) {
            if (t.size) {
              var r = Array.from(t).reduce(function (t, r) {
                var e = ["https", "http"].map(function (t) {
                  return "".concat(t, "://*.").concat(r, "/*");
                });
                return [].concat(sn(t), sn(e));
              }, []);
              Qe.a.hasListener(hn) && Qe.a.removeListener(hn), Qe.a.addListener(hn, { urls: r, types: ["main_frame"] });
            }
          })(t);
        });
      }
      var yn = e(44566);
      e(26589);
      function vn(t, r, e) {
        return (r = En(r)) in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e), t;
      }
      function dn() {
        dn = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == wn(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function mn(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function gn(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(r, e);
            function a(t) {
              mn(i, n, o, a, c, "next", t);
            }
            function c(t) {
              mn(i, n, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function wn(t) {
        return (
          (wn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          wn(t)
        );
      }
      function bn(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function xn(t, r) {
        for (var e = 0; e < r.length; e++) {
          var n = r[e];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, En(n.key), n);
        }
      }
      function Ln(t, r, e) {
        return r && xn(t.prototype, r), e && xn(t, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      function En(t) {
        var r = (function (t, r) {
          if ("object" !== wn(t) || null === t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, r || "default");
            if ("object" !== wn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(t);
        })(t, "string");
        return "symbol" === wn(r) ? r : String(r);
      }
      var On = (function () {
          function t() {
            bn(this, t), (this.state = new Map());
          }
          return (
            Ln(t, [
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
        Sn = (function () {
          function t() {
            bn(this, t);
          }
          var r, e;
          return (
            Ln(t, [
              {
                key: "getState",
                value:
                  ((e = gn(
                    dn().mark(function t(r) {
                      var e;
                      return dn().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), (0, lt.U)(r);
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
                  ((r = gn(
                    dn().mark(function t(r, e) {
                      return dn().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (0 !== Object.keys(e).length) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), (0, st.O)(r);
                            case 3:
                              t.next = 7;
                              break;
                            case 5:
                              return (t.next = 7), (0, ft.t)(vn({}, r, e));
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
      function jn(t) {
        var r = t.connectors,
          e = r.autofillEngineCarbonConnector,
          o = r.autofillEngineLegacyCarbonConnector,
          i = t.app,
          a = (0, n.G)() ? new Sn() : new On(),
          c = new yn.WebExtensionApiManager().getBrowserApi();
        (0, yn.startAutofillEngine)(
          c,
          { carbon: e, legacyCarbon: o },
          a,
          function (t, r) {
            J({ message: t, details: r, indentDetails: !0, tags: ["AutofillEngine"] });
          },
          i.then(function (t) {
            return t.createClient();
          })
        ),
          (0, yn.startDispatcher)(c);
      }
      var _n = e(55329);
      function Pn(t, r) {
        J({ message: t, details: r, indentDetails: !0, tags: ["Tiresias"] });
      }
      function kn(t) {
        var r = t.connectors.tiresiasBackgroundToCarbonConnector,
          e = t.app;
        new _n.TiresiasBackground({ messageLogger: Pn, carbonConnectorApi: r, grapheneClient: e.createClient() });
      }
      var Nn = e(35396),
        Tn = e(80310),
        Gn = e(14785),
        An = e(28365),
        In = e(44580),
        Cn = e(12642),
        Fn = e(94417),
        Rn = e(36988),
        Dn = e(20491),
        Un = e(55808),
        Wn = e(11375),
        Yn = e(49069),
        Bn = e(31638),
        Hn = e(7876),
        Mn = e(23370),
        $n = e(25504),
        Vn = e(32697),
        zn = e(1665),
        Kn = e(82482),
        Xn = e(93850),
        qn = e(18590),
        Qn = e(43673),
        Jn = e(64555),
        Zn = e(16988),
        to = e(73881),
        ro = e(83958),
        eo = e(47190),
        no = e(29659),
        oo = e(37935),
        io = e(114),
        ao = e(65613),
        co = e(77993),
        uo = e(2301),
        so = e(3460),
        lo = e(66917),
        fo = e(10026),
        ho = e(83074),
        po = e(64391),
        yo = e(86381),
        vo = e(39560),
        mo = e(76254),
        go = e(80954),
        wo = e(48264),
        bo = e(64396),
        xo = e(420),
        Lo = e(26857),
        Eo = e(39911),
        Oo = e(43838),
        So = e(39387),
        jo = e(396),
        _o = e(57487),
        Po = e(84473),
        ko = e(62853),
        No = e(24192),
        To = e(63277),
        Go = e(54112),
        Ao = e(59348),
        Io = e(32217),
        Co = e(47032),
        Fo = e(32537),
        Ro = e(65589),
        Do = e(3786),
        Uo = e(99600),
        Wo = e(93202),
        Yo = e(38487),
        Bo = e(59550),
        Ho = e(17556),
        Mo = e(29748),
        $o = e(29125),
        Vo = e(59123),
        zo = e(61845),
        Ko = e(80034),
        Xo = e(67739),
        qo = e(5540),
        Qo = e(4070),
        Jo = e(43897),
        Zo = e(36577),
        ti = e(57318),
        ri = e(16445),
        ei = e(29213),
        ni = e(26667),
        oi = e(64057),
        ii = e(35887),
        ai = e(44997),
        ci = e(92447),
        ui = e(34431),
        si = e(56922),
        li = e(49355),
        fi = e(72488),
        hi = e(90692),
        pi = e(65529),
        yi = e(16834),
        vi = e(80260),
        di = e(97500),
        mi = e(46093),
        gi = e(17103),
        wi = (e(24814), e(73636), e(55566), e(29406)),
        bi = e(87065),
        xi = e(30523),
        Li = e(37298);
      function Ei(t) {
        return (
          (Ei =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          Ei(t)
        );
      }
      function Oi(t, r) {
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
                if ("object" !== Ei(t) || null === t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var n = e.call(t, r || "default");
                  if ("object" !== Ei(n)) return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
              })(o, "string")),
              "symbol" === Ei(i) ? i : String(i)),
              n
            );
        }
        var o, i;
      }
      function Si(t, r) {
        return (
          (Si = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, r) {
                return (t.__proto__ = r), t;
              }),
          Si(t, r)
        );
      }
      function ji(t) {
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
            n = _i(t);
          if (r) {
            var o = _i(this).constructor;
            e = Reflect.construct(n, arguments, o);
          } else e = n.apply(this, arguments);
          return (function (t, r) {
            if (r && ("object" === Ei(r) || "function" == typeof r)) return r;
            if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
            return (function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
            })(t);
          })(this, e);
        };
      }
      function _i(t) {
        return (
          (_i = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          _i(t)
        );
      }
      function Pi(t, r) {
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
            if ("string" == typeof t) return ki(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ki(t, r);
          })(t, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ki(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function Ni(t) {
        var r = Br({ column: t.colno, line: t.lineno, name: t.filename });
        return { error: t.error, fileLocation: r, origin: "uncaughtException" };
      }
      function Ti(t) {
        return { error: t.reason, origin: "unhandledPromiseRejection" };
      }
      function Gi(t) {
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
      function Ai(t) {
        t.preventDefault();
      }
      function Ii(t) {
        return (
          (Ii =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          Ii(t)
        );
      }
      function Ci() {
        Ci = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == Ii(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function Fi(t, r) {
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
      function Ri(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Fi(Object(e), !0).forEach(function (r) {
                Di(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : Fi(Object(e)).forEach(function (r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return t;
      }
      function Di(t, r, e) {
        return (
          (r = (function (t) {
            var r = (function (t, r) {
              if ("object" !== Ii(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, r || "default");
                if ("object" !== Ii(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === r ? String : Number)(t);
            })(t, "string");
            return "symbol" === Ii(r) ? r : String(r);
          })(r)) in t
            ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
            : (t[r] = e),
          t
        );
      }
      function Ui(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      var Wi = new ((function (t) {
          !(function (t, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(r && r.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              r && Si(t, r);
          })(i, t);
          var r,
            e,
            n,
            o = ji(i);
          function i(t) {
            !(function (t, r) {
              if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
            })(this, i);
            var r = (0, wi.T)(
              (function (t) {
                var r;
                return new Li.j(
                  {
                    addListener: function (e) {
                      (r = function (r) {
                        return Ai(r), e(r, t);
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
                  (0, bi.U)(function (t) {
                    return Pi(t, 1)[0];
                  }),
                  (0, bi.U)(Ni)
                );
              })(t),
              (function (t) {
                var r;
                return new Li.j(
                  {
                    addListener: function (e) {
                      (r = function (r) {
                        return Ai(r), e(r, t);
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
                  (0, bi.U)(function (t) {
                    return Pi(t, 1)[0];
                  }),
                  (0, xi.h)(Gi),
                  (0, bi.U)(Ti)
                );
              })(t)
            );
            return o.call(this, r);
          }
          return (r = i), e && Oi(r.prototype, e), n && Oi(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
        })(e(63364).fW))(self),
        Yi = new so.y(),
        Bi = new lo.P("graphene-background-port"),
        Hi = { accessKey: "", secretKey: "" },
        Mi = ((0, Zo.xp)("prod"), "prod"),
        $i = void 0,
        Vi = (0, fo.e)();
      function zi() {
        return Ki.apply(this, arguments);
      }
      function Ki() {
        var t;
        return (
          (t = Ci().mark(function t() {
            var r, e;
            return Ci().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = new i.CarbonLegacyInfrastructure()),
                      (t.next = 3),
                      (0, Yn.u)({
                        appDefinition: Nn.R,
                        channels: {},
                        channelsListener: Bi,
                        currentNode: "background",
                        exceptionLogging: { sink: (0, Bn.$)(Vn.u), uncaughtErrorSource: (0, Bn.z)(Wi) },
                        implementations: {
                          deleteOrResetAccount: { module: co.T },
                          accountReferral: { module: uo.o },
                          analytics: { module: zn.I },
                          taskTracking: { module: Hn.c },
                          requestContext: { module: Mn.q },
                          featureFlips: { module: Kn.k },
                          "carbon-legacy": { module: i.CarbonLegacyModule, configurations: { infrastructure: (0, Bn.z)(r) } },
                          permissions: { module: Jo.B },
                          passwordHealth: { module: No.C },
                          authenticationFlow: {
                            module: Ro.c,
                            configurations: { authenticationFlowContextInfrastructure: (0, Bn.z)(new Ho.e()) }
                          },
                          deviceTransfer: { module: Do.I },
                          activityLogs: { module: Qo.Z },
                          identityVerificationFlow: { module: Uo.f },
                          autofillSettings: { module: Mo.P },
                          autofillData: { module: $o.U },
                          autofillTracking: { module: Vo.V },
                          autofillSecurity: { module: zo.k },
                          autofillNotifications: { module: Ko.r },
                          linkedWebsites: { module: Xo.J },
                          enclaveSdkApi: {
                            module: ti.E,
                            configurations: { enclaveApiSettings: (0, Bn.z)(new Zo.N6(Hi, "https://sso.nitro.dashlane.com/", Mi)) }
                          },
                          confidentialSSOApi: {
                            module: ri.D,
                            configurations: { enclaveLoginContextInfrastructure: (0, Bn.z)(new ni.X()) }
                          },
                          scim: { module: ei.i },
                          session: { module: Gn._ },
                          sync: { module: Tn.R },
                          vaultReport: { module: To.E },
                          vaultItemsCrud: { module: Fn.z },
                          vaultSearch: { module: Rn.U },
                          vaultNotifications: { module: Dn.K },
                          vaultOrganization: { module: Un.H },
                          passwordLimit: { module: Wn.a },
                          otp: { module: Go.f },
                          masterPasswordSecurity: { module: di.f },
                          emailMonitoring: { module: Ao.S },
                          breaches: { module: Io.t },
                          sharingCollections: { module: oi.a },
                          sharingItems: { module: ii.F },
                          sharingInvites: { module: ai.p },
                          antiphishing: { module: Co.v },
                          overrides: { module: qo.x },
                          accountRecoveryKey: { module: Fo.D },
                          teamMembers: { module: ci.X },
                          teamVat: { module: ui.K },
                          teamGetStarted: { module: si.q },
                          teamPlanDetails: { module: li.H },
                          teamAdminNotifications: { module: fi.E },
                          teamOffers: { module: hi.I },
                          notifications: { module: vi.F },
                          changeMasterPassword: { module: An.M },
                          teamPasswordHealth: { module: pi.V },
                          userConsents: { module: mi.K },
                          vaultAccess: { module: In.r },
                          userVerification: { module: Wo.Z },
                          teamMidcycleTier: { module: yi.V },
                          getStarted: { module: gi.$ },
                          deviceRegistration: { module: Yo._ },
                          webServices: {
                            module: Xn.n,
                            configurations: {
                              serverApi: (0, Bn.z)(
                                new qn.$y(
                                  Ri(
                                    {
                                      baseUrl: "https://api.dashlane.com",
                                      appKeys: { appAccessKey: E.appAccess, appSecretKey: E.appSecret }
                                    },
                                    $i
                                      ? {
                                          cloudflareKeys: {
                                            cloudflareAccessKey: $i.cloudflareAccess,
                                            cloudflareSecretKey: $i.cloudflareSecret
                                          }
                                        }
                                      : {}
                                  )
                                )
                              ),
                              serverApiInfrastructure: (0, Bn.$)(Bo.Q)
                            }
                          },
                          platformInfo: { module: Qn.i }
                        },
                        otherModules: [
                          { module: Jn.F, configurations: { settings: (0, Bn.z)(new Zn.L()) } },
                          { module: $n.X, configurations: { infrastructure: (0, Bn.z)(new ho.A()) } },
                          {
                            module: to.Q,
                            configurations: {
                              remoteFileUpdateInfrastructure: (0, Bn.$)(ro.U),
                              remoteFileUpdateDownloaderInfrastructure: (0, Bn.$)(eo.P),
                              decipherInfrastructure: (0, Bn.$)(no.c)
                            }
                          },
                          {
                            module: oo.D,
                            configurations: {
                              infrastructure: (0, Bn.z)(
                                new io.i({
                                  computeHash: po.x,
                                  decryptAes256: yo.$,
                                  decryptRsaOaep: vo.G,
                                  deriveKeyArgon2d: mo.f,
                                  deriveKeyPbkdf2: go.x,
                                  encryptAes256: wo.P,
                                  encryptRsaOaep: bo.b,
                                  generateKeyAes256: xo.o,
                                  generateKeyPairRsaOaep: Lo.Y,
                                  getRandomValues: Eo.P,
                                  signHmacSha: Oo.n,
                                  signRsassaPkcs1: So.f,
                                  unsafeComputeMd5Hash: jo.H,
                                  verifyHmacSha: _o.o
                                })
                              )
                            }
                          }
                        ],
                        storeInfrastructureFactory: Vi,
                        jsonFetcher: new Po.W(),
                        cronSource: Yi,
                        keyValueStorageInfrastructure: new ko.e(),
                        defaultDeviceStorageEncryptionCodec: (0, Bn.$)(ao.n),
                        defaultUserStorageEncryptionCodec: (0, Bn.$)(Cn.Y)
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
          (Ki = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                Ui(i, n, o, a, c, "next", t);
              }
              function c(t) {
                Ui(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          Ki.apply(this, arguments)
        );
      }
      var Xi = e(61222),
        qi = e(21763);
      function Qi(t) {
        return (
          (Qi =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          Qi(t)
        );
      }
      function Ji() {
        Ji = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == Qi(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function Zi(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      var ta = ["/content/injectedts/vendors.js", "/content/contentScripts/kwift.CHROME.js"],
        ra = "options.useInjectScriptOnStart";
      function ea() {
        var t;
        return (
          (t = Ji().mark(function t() {
            return Ji().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), (0, at.U)(ra);
                    case 3:
                      if (!t.sent[ra]) {
                        t.next = 9;
                        break;
                      }
                      return (t.next = 7), (0, Xi.I)({ url: ["http://*/*", "https://*/*"] });
                    case 7:
                      t.sent.forEach(function (t) {
                        var r = t.id;
                        r && (0, qi.k)({ target: { tabId: r, allFrames: !0 }, files: ta });
                      });
                    case 9:
                      t.next = 14;
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(0)),
                        Z({ message: "Failed to inject script on existing tabs", details: { error: t.t0 } });
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
          (ea = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                Zi(i, n, o, a, c, "next", t);
              }
              function c(t) {
                Zi(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          ea.apply(this, arguments)
        );
      }
      function na() {
        !(function () {
          ea.apply(this, arguments);
        })();
      }
      function oa(t) {
        return (
          (oa =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          oa(t)
        );
      }
      function ia() {
        ia = function () {
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
        function w(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function b(t, r) {
          function o(n, i, a, c) {
            var u = l(t[n], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == oa(f) && e.call(f, "__await")
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
          w(b.prototype),
          u(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(g),
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
      function aa(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function ca() {
        var t;
        return (
          (t = ia().mark(function t(r) {
            var e, o, i, a, c, u, s, l, f, h, p, y, v, d;
            return ia().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (e = wt()), (o = (0, n.G)() ? bt() : void 0), (t.next = 4), zi();
                  case 4:
                    return (
                      (i = t.sent),
                      (a = i.app),
                      (c = i.signalCarbonReady),
                      (u = r.applicationModulesToCarbonApiConnector),
                      (s = r.carbonApiConnector),
                      (l = r.carbonDebugConnector),
                      (f = r.carbonLegacyWebappConnectorForGraphene),
                      (h = r.carbonInfrastructureConnectors),
                      (p = r.carbonToExtensionLegacyConnector),
                      (y = r.carbonLegacyWebappConnector),
                      (v = r.carbonLegacyMaverickConnector),
                      (t.next = 10),
                      ot({
                        apiConnector: s,
                        debugConnector: l,
                        infrastructureConnectors: h,
                        legacyExtensionConnector: p,
                        legacyWebappConnector: y,
                        legacyMaverickConnector: v,
                        publicPath: "./",
                        storageLayer: e,
                        sessionStorage: o,
                        app: a
                      })
                    );
                  case 10:
                    return (d = t.sent), c(d, u, f), t.abrupt("return", a);
                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (ca = function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                aa(i, n, o, a, c, "next", t);
              }
              function c(t) {
                aa(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          }),
          ca.apply(this, arguments)
        );
      }
      !(function () {
        tt({ message: "Background initialization started", tags: ["initBackground", "initialization"] });
        var t,
          r = Vt(),
          e = (function (t) {
            return ca.apply(this, arguments);
          })(r),
          n = (function (t, r) {
            return function (e, n) {
              r.then(function (r) {
                e.forEach(function (e) {
                  return e({ app: r, connectors: t }, n);
                });
              });
            };
          })(r, e),
          i = (function (t, r) {
            return function (e, n) {
              e.forEach(function (e) {
                return e({ app: r, connectors: t }, n);
              });
            };
          })(r, e),
          a = (0, o.G)() ? [Xe] : [cn, pn];
        i([ae, "serviceWorker" in self ? lr : ir, jn]),
          n([].concat(a, [Jt, wr, jr, Ar, ye, Oe, kn])),
          (t = function () {
            n([re, Fr]);
          }),
          Kt(function (r) {
            "install" === r.reason && t(r);
          }),
          Kt(function () {
            return n([oe]);
          }),
          (function (t) {
            Kt(function (r) {
              "update" === r.reason && t(r);
            });
          })(function () {
            return n([na]);
          }),
          tt({ message: "Background initialization finished", tags: ["initBackground", "initialization"] });
      })();
    },
    21178: (t, r, e) => {
      e.r(r), e.d(r, { ParsedURL: () => n.Y });
      var n = e(64718);
    },
    64718: (t, r, e) => {
      e.d(r, { Y: () => h });
      var n = e(11590),
        o = e(2509);
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
