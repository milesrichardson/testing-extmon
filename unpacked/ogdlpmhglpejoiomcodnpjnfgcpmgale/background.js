!(function (t) {
  var r = {};
  function e(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = r),
    (e.d = function (t, r, n) {
      e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: n });
    }),
    (e.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function (t, r) {
      if ((1 & r && (t = e(t)), 8 & r)) return t;
      if (4 & r && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if ((e.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & r && "string" != typeof t))
        for (var o in t)
          e.d(
            n,
            o,
            function (r) {
              return t[r];
            }.bind(null, o)
          );
      return n;
    }),
    (e.n = function (t) {
      var r =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(r, "a", r), r;
    }),
    (e.o = function (t, r) {
      return Object.prototype.hasOwnProperty.call(t, r);
    }),
    (e.p = ""),
    e((e.s = 0));
})([
  function (t, r, e) {
    "use strict";
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
    }
    function o(t, r) {
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
    function i(t) {
      for (var r = 1; r < arguments.length; r++) {
        var e = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? o(Object(e), !0).forEach(function (r) {
              a(t, r, e[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : o(Object(e)).forEach(function (r) {
              Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
            });
      }
      return t;
    }
    function a(t, r, e) {
      return r in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e), t;
    }
    function c() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ c =
        function () {
          return t;
        };
      var t = {},
        r = Object.prototype,
        e = r.hasOwnProperty,
        o =
          Object.defineProperty ||
          function (t, r, e) {
            t[r] = e.value;
          },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        f = i.toStringTag || "@@toStringTag";
      function s(t, r, e) {
        return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, r, e) {
          return (t[r] = e);
        };
      }
      function l(t, r, e, n) {
        var i = r && r.prototype instanceof y ? r : y,
          a = Object.create(i.prototype),
          c = new S(n || []);
        return o(a, "_invoke", { value: O(t, e, c) }), a;
      }
      function h(t, r, e) {
        try {
          return { type: "normal", arg: t.call(r, e) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = l;
      var p = {};
      function y() {}
      function v() {}
      function d() {}
      var m = {};
      s(m, a, function () {
        return this;
      });
      var g = Object.getPrototypeOf,
        w = g && g(g(P([])));
      w && w !== r && e.call(w, a) && (m = w);
      var b = (d.prototype = y.prototype = Object.create(m));
      function x(t) {
        ["next", "throw", "return"].forEach(function (r) {
          s(t, r, function (t) {
            return this._invoke(r, t);
          });
        });
      }
      function L(t, r) {
        var i;
        o(this, "_invoke", {
          value: function (o, a) {
            function c() {
              return new r(function (i, c) {
                !(function o(i, a, c, u) {
                  var f = h(t[i], t, a);
                  if ("throw" !== f.type) {
                    var s = f.arg,
                      l = s.value;
                    return l && "object" == n(l) && e.call(l, "__await")
                      ? r.resolve(l.__await).then(
                          function (t) {
                            o("next", t, c, u);
                          },
                          function (t) {
                            o("throw", t, c, u);
                          }
                        )
                      : r.resolve(l).then(
                          function (t) {
                            (s.value = t), c(s);
                          },
                          function (t) {
                            return o("throw", t, c, u);
                          }
                        );
                  }
                  u(f.arg);
                })(o, a, i, c);
              });
            }
            return (i = i ? i.then(c, c) : c());
          }
        });
      }
      function O(t, r, e) {
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
              var c = E(a, e);
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
      function E(t, r) {
        var e = t.iterator[r.method];
        if (void 0 === e) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (t.iterator.return && ((r.method = "return"), (r.arg = void 0), E(t, r), "throw" === r.method)) return p;
            (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return p;
        }
        var n = h(e, t.iterator, r.arg);
        if ("throw" === n.type) return (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), p;
        var o = n.arg;
        return o
          ? o.done
            ? ((r[t.resultName] = o.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
              (r.delegate = null),
              p)
            : o
          : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), p);
      }
      function j(t) {
        var r = { tryLoc: t[0] };
        1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
      }
      function _(t) {
        var r = t.completion || {};
        (r.type = "normal"), delete r.arg, (t.completion = r);
      }
      function S(t) {
        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(j, this), this.reset(!0);
      }
      function P(t) {
        if (t) {
          var r = t[a];
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
        o(b, "constructor", { value: d, configurable: !0 }),
        o(d, "constructor", { value: v, configurable: !0 }),
        (v.displayName = s(d, f, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var r = "function" == typeof t && t.constructor;
          return !!r && (r === v || "GeneratorFunction" === (r.displayName || r.name));
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), s(t, f, "GeneratorFunction")),
            (t.prototype = Object.create(b)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        x(L.prototype),
        s(L.prototype, u, function () {
          return this;
        }),
        (t.AsyncIterator = L),
        (t.async = function (r, e, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new L(l(r, e, n, o), i);
          return t.isGeneratorFunction(e)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        x(b),
        s(b, f, "Generator"),
        s(b, a, function () {
          return this;
        }),
        s(b, "toString", function () {
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
              this.tryEntries.forEach(_),
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
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), _(e), p;
            }
          },
          catch: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.tryLoc === t) {
                var n = e.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(e);
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
    function u(t, r, e, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void e(t);
      }
      c.done ? r(u) : Promise.resolve(u).then(n, o);
    }
    function f(t) {
      return function () {
        var r = this,
          e = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(r, e);
          function a(t) {
            u(i, n, o, a, c, "next", t);
          }
          function c(t) {
            u(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    e.r(r);
    var s = (function () {
        var t = f(
          c().mark(function t() {
            var r, e;
            return c().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch("/libs/collections.json").then(function (t) {
                        return t.json();
                      })
                    );
                  case 2:
                    (r = t.sent),
                      (e = {
                        domain: "https://custom-cursor.com/",
                        collection: r,
                        size: 32,
                        counterTab: 1,
                        myCollection: {},
                        version: chrome.runtime.getManifest().version,
                        favorites: [],
                        rotator: { status: !1, type: "request", value: 60 },
                        di: new Date().getTime(),
                        uid: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                          var r = (16 * Math.random()) | 0;
                          return ("x" == t ? r : (3 & r) | 8).toString(16);
                        })
                      }),
                      chrome.storage.local.set(e, function () {
                        return (
                          chrome.tabs.create({
                            url: "https://custom-cursor.com/successful_installation?utm_source=ext&utm_medium=install&utm_campaign=install_succesful"
                          }),
                          chrome.tabs.query({}, function (t) {
                            t.forEach(function (t) {
                              chrome.scripting.executeScript({ target: { tabId: t.id }, files: ["content.js"] }, function () {});
                            });
                          }),
                          !0
                        );
                      });
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
      })(),
      l = (function () {
        var t = f(
          c().mark(function t() {
            return c().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    chrome.storage.local.set(
                      { du: new Date().getTime(), size: 32, rotator: { status: !1, type: "request", value: 60 } },
                      function () {
                        return !0;
                      }
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      h = (function () {
        var t = f(
          c().mark(function t() {
            var r;
            return c().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), chrome.scripting.unregisterContentScripts();
                  case 2:
                    return (
                      (r = { matches: ["*://*/*"], allFrames: !0, matchOriginAsFallback: !0, runAt: "document_start" }),
                      (t.next = 5),
                      chrome.scripting.registerContentScripts([i({ id: "cursor", js: ["content.js"], world: "ISOLATED" }, r)])
                    );
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
    var p = function () {
        return new Promise(function (t, r) {
          chrome.storage.local.get(function (e) {
            if (chrome.runtime.lastError) return r(chrome.runtime.lastError);
            t(e);
          });
        });
      },
      y = function (t) {
        return new Promise(function (r, e) {
          try {
            chrome.storage.local.set(t, function () {
              r({ status: !0, data: t });
            });
          } catch (t) {
            e(t);
          }
        });
      };
    function v(t) {
      return (v =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
    }
    function d() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ d =
        function () {
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
      function f(t, r, e, o) {
        var i = r && r.prototype instanceof h ? r : h,
          a = Object.create(i.prototype),
          c = new S(o || []);
        return n(a, "_invoke", { value: O(t, e, c) }), a;
      }
      function s(t, r, e) {
        try {
          return { type: "normal", arg: t.call(r, e) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = f;
      var l = {};
      function h() {}
      function p() {}
      function y() {}
      var m = {};
      u(m, i, function () {
        return this;
      });
      var g = Object.getPrototypeOf,
        w = g && g(g(P([])));
      w && w !== r && e.call(w, i) && (m = w);
      var b = (y.prototype = h.prototype = Object.create(m));
      function x(t) {
        ["next", "throw", "return"].forEach(function (r) {
          u(t, r, function (t) {
            return this._invoke(r, t);
          });
        });
      }
      function L(t, r) {
        var o;
        n(this, "_invoke", {
          value: function (n, i) {
            function a() {
              return new r(function (o, a) {
                !(function n(o, i, a, c) {
                  var u = s(t[o], t, i);
                  if ("throw" !== u.type) {
                    var f = u.arg,
                      l = f.value;
                    return l && "object" == v(l) && e.call(l, "__await")
                      ? r.resolve(l.__await).then(
                          function (t) {
                            n("next", t, a, c);
                          },
                          function (t) {
                            n("throw", t, a, c);
                          }
                        )
                      : r.resolve(l).then(
                          function (t) {
                            (f.value = t), a(f);
                          },
                          function (t) {
                            return n("throw", t, a, c);
                          }
                        );
                  }
                  c(u.arg);
                })(n, i, o, a);
              });
            }
            return (o = o ? o.then(a, a) : a());
          }
        });
      }
      function O(t, r, e) {
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
              var c = E(a, e);
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
            var u = s(t, r, e);
            if ("normal" === u.type) {
              if (((n = e.done ? "completed" : "suspendedYield"), u.arg === l)) continue;
              return { value: u.arg, done: e.done };
            }
            "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
          }
        };
      }
      function E(t, r) {
        var e = t.iterator[r.method];
        if (void 0 === e) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (t.iterator.return && ((r.method = "return"), (r.arg = void 0), E(t, r), "throw" === r.method)) return l;
            (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return l;
        }
        var n = s(e, t.iterator, r.arg);
        if ("throw" === n.type) return (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((r[t.resultName] = o.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
              (r.delegate = null),
              l)
            : o
          : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), l);
      }
      function j(t) {
        var r = { tryLoc: t[0] };
        1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
      }
      function _(t) {
        var r = t.completion || {};
        (r.type = "normal"), delete r.arg, (t.completion = r);
      }
      function S(t) {
        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(j, this), this.reset(!0);
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
          var a = new L(f(r, e, n, o), i);
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
              this.tryEntries.forEach(_),
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
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), _(e), l;
            }
          },
          catch: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.tryLoc === t) {
                var n = e.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(e);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, r, e) {
            return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), l;
          }
        }),
        t
      );
    }
    function m(t, r, e, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void e(t);
      }
      c.done ? r(u) : Promise.resolve(u).then(n, o);
    }
    function g(t) {
      return function () {
        var r = this,
          e = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(r, e);
          function a(t) {
            m(i, n, o, a, c, "next", t);
          }
          function c(t) {
            m(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function w(t, r) {
      return new Promise(
        (function () {
          var e = g(
            d().mark(function e(n, o) {
              return d().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      fetch(t)
                        .then(function (t) {
                          return t.blob();
                        })
                        .then(createImageBitmap)
                        .then(function (t) {
                          var e = new OffscreenCanvas(r, r);
                          e.getContext("2d").drawImage(t, 0, 0, r, r),
                            e.convertToBlob().then(
                              (function () {
                                var t = g(
                                  d().mark(function t(r) {
                                    var e;
                                    return d().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            (e = new FileReader()).readAsDataURL(r),
                                              (e.onload = function (t) {
                                                n(t.target.result);
                                              });
                                          case 3:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                );
                                return function (r) {
                                  return t.apply(this, arguments);
                                };
                              })()
                            );
                        });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()
      );
    }
    function b(t) {
      return (b =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
    }
    function x() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ x =
        function () {
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
      function f(t, r, e, o) {
        var i = r && r.prototype instanceof h ? r : h,
          a = Object.create(i.prototype),
          c = new S(o || []);
        return n(a, "_invoke", { value: O(t, e, c) }), a;
      }
      function s(t, r, e) {
        try {
          return { type: "normal", arg: t.call(r, e) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = f;
      var l = {};
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
      function w(t) {
        ["next", "throw", "return"].forEach(function (r) {
          u(t, r, function (t) {
            return this._invoke(r, t);
          });
        });
      }
      function L(t, r) {
        var o;
        n(this, "_invoke", {
          value: function (n, i) {
            function a() {
              return new r(function (o, a) {
                !(function n(o, i, a, c) {
                  var u = s(t[o], t, i);
                  if ("throw" !== u.type) {
                    var f = u.arg,
                      l = f.value;
                    return l && "object" == b(l) && e.call(l, "__await")
                      ? r.resolve(l.__await).then(
                          function (t) {
                            n("next", t, a, c);
                          },
                          function (t) {
                            n("throw", t, a, c);
                          }
                        )
                      : r.resolve(l).then(
                          function (t) {
                            (f.value = t), a(f);
                          },
                          function (t) {
                            return n("throw", t, a, c);
                          }
                        );
                  }
                  c(u.arg);
                })(n, i, o, a);
              });
            }
            return (o = o ? o.then(a, a) : a());
          }
        });
      }
      function O(t, r, e) {
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
              var c = E(a, e);
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
            var u = s(t, r, e);
            if ("normal" === u.type) {
              if (((n = e.done ? "completed" : "suspendedYield"), u.arg === l)) continue;
              return { value: u.arg, done: e.done };
            }
            "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
          }
        };
      }
      function E(t, r) {
        var e = t.iterator[r.method];
        if (void 0 === e) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (t.iterator.return && ((r.method = "return"), (r.arg = void 0), E(t, r), "throw" === r.method)) return l;
            (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return l;
        }
        var n = s(e, t.iterator, r.arg);
        if ("throw" === n.type) return (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((r[t.resultName] = o.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
              (r.delegate = null),
              l)
            : o
          : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), l);
      }
      function j(t) {
        var r = { tryLoc: t[0] };
        1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
      }
      function _(t) {
        var r = t.completion || {};
        (r.type = "normal"), delete r.arg, (t.completion = r);
      }
      function S(t) {
        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(j, this), this.reset(!0);
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
        w(L.prototype),
        u(L.prototype, a, function () {
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
        (t.values = P),
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
              this.tryEntries.forEach(_),
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
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), _(e), l;
            }
          },
          catch: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.tryLoc === t) {
                var n = e.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(e);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, r, e) {
            return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), l;
          }
        }),
        t
      );
    }
    function L(t, r, e, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void e(t);
      }
      c.done ? r(u) : Promise.resolve(u).then(n, o);
    }
    var O = (function () {
        var t,
          r =
            ((t = x().mark(function t(r, e) {
              var n, o, i, a;
              return x().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((n = r.cursor.originalPath), (o = r.pointer.originalPath), !n)) {
                        t.next = 8;
                        break;
                      }
                      return (t.next = 5), w(n, e);
                    case 5:
                      (t.t0 = t.sent), (t.next = 9);
                      break;
                    case 8:
                      t.t0 = null;
                    case 9:
                      if (((i = t.t0), !o)) {
                        t.next = 16;
                        break;
                      }
                      return (t.next = 13), w(o, e);
                    case 13:
                      (t.t1 = t.sent), (t.next = 17);
                      break;
                    case 16:
                      t.t1 = null;
                    case 17:
                      return (a = t.t1), t.abrupt("return", [i, a]);
                    case 19:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })),
            function () {
              var r = this,
                e = arguments;
              return new Promise(function (n, o) {
                var i = t.apply(r, e);
                function a(t) {
                  L(i, n, o, a, c, "next", t);
                }
                function c(t) {
                  L(i, n, o, a, c, "throw", t);
                }
                a(void 0);
              });
            });
        return function (t, e) {
          return r.apply(this, arguments);
        };
      })(),
      E = function (t, r) {
        var e = 128 / r;
        return {
          nextCursorOffsetX: Math.floor(t.cursor.offsetX / e),
          nextCursorOffsetY: Math.floor(t.cursor.offsetY / e),
          nextPointerOffsetX: Math.floor(t.pointer.offsetX / e),
          nextPointerOffsetY: Math.floor(t.pointer.offsetY / e)
        };
      };
    function j(t) {
      return (j =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
    }
    function _() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _ =
        function () {
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
      function f(t, r, e, o) {
        var i = r && r.prototype instanceof h ? r : h,
          a = Object.create(i.prototype),
          c = new S(o || []);
        return n(a, "_invoke", { value: x(t, e, c) }), a;
      }
      function s(t, r, e) {
        try {
          return { type: "normal", arg: t.call(r, e) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = f;
      var l = {};
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
      function w(t) {
        ["next", "throw", "return"].forEach(function (r) {
          u(t, r, function (t) {
            return this._invoke(r, t);
          });
        });
      }
      function b(t, r) {
        var o;
        n(this, "_invoke", {
          value: function (n, i) {
            function a() {
              return new r(function (o, a) {
                !(function n(o, i, a, c) {
                  var u = s(t[o], t, i);
                  if ("throw" !== u.type) {
                    var f = u.arg,
                      l = f.value;
                    return l && "object" == j(l) && e.call(l, "__await")
                      ? r.resolve(l.__await).then(
                          function (t) {
                            n("next", t, a, c);
                          },
                          function (t) {
                            n("throw", t, a, c);
                          }
                        )
                      : r.resolve(l).then(
                          function (t) {
                            (f.value = t), a(f);
                          },
                          function (t) {
                            return n("throw", t, a, c);
                          }
                        );
                  }
                  c(u.arg);
                })(n, i, o, a);
              });
            }
            return (o = o ? o.then(a, a) : a());
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
              var c = L(a, e);
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
            var u = s(t, r, e);
            if ("normal" === u.type) {
              if (((n = e.done ? "completed" : "suspendedYield"), u.arg === l)) continue;
              return { value: u.arg, done: e.done };
            }
            "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
          }
        };
      }
      function L(t, r) {
        var e = t.iterator[r.method];
        if (void 0 === e) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (t.iterator.return && ((r.method = "return"), (r.arg = void 0), L(t, r), "throw" === r.method)) return l;
            (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return l;
        }
        var n = s(e, t.iterator, r.arg);
        if ("throw" === n.type) return (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((r[t.resultName] = o.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
              (r.delegate = null),
              l)
            : o
          : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), l);
      }
      function O(t) {
        var r = { tryLoc: t[0] };
        1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
      }
      function E(t) {
        var r = t.completion || {};
        (r.type = "normal"), delete r.arg, (t.completion = r);
      }
      function S(t) {
        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(O, this), this.reset(!0);
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
        w(b.prototype),
        u(b.prototype, a, function () {
          return this;
        }),
        (t.AsyncIterator = b),
        (t.async = function (r, e, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(f(r, e, n, o), i);
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
        (t.values = P),
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
              this.tryEntries.forEach(E),
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
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), l;
            }
          },
          catch: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.tryLoc === t) {
                var n = e.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  E(e);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, r, e) {
            return (this.delegate = { iterator: P(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), l;
          }
        }),
        t
      );
    }
    function S(t, r) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, r) {
          var e = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
          if (null == e) return;
          var n,
            o,
            i = [],
            a = !0,
            c = !1;
          try {
            for (e = e.call(t); !(a = (n = e.next()).done) && (i.push(n.value), !r || i.length !== r); a = !0);
          } catch (t) {
            (c = !0), (o = t);
          } finally {
            try {
              a || null == e.return || e.return();
            } finally {
              if (c) throw o;
            }
          }
          return i;
        })(t, r) ||
        (function (t, r) {
          if (!t) return;
          if ("string" == typeof t) return P(t, r);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === e && t.constructor && (e = t.constructor.name);
          if ("Map" === e || "Set" === e) return Array.from(t);
          if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return P(t, r);
        })(t, r) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function P(t, r) {
      (null == r || r > t.length) && (r = t.length);
      for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
      return n;
    }
    function k(t, r) {
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
    function N(t) {
      for (var r = 1; r < arguments.length; r++) {
        var e = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? k(Object(e), !0).forEach(function (r) {
              T(t, r, e[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : k(Object(e)).forEach(function (r) {
              Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
            });
      }
      return t;
    }
    function T(t, r, e) {
      return r in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e), t;
    }
    function G(t, r, e, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void e(t);
      }
      c.done ? r(u) : Promise.resolve(u).then(n, o);
    }
    function I(t) {
      return function () {
        var r = this,
          e = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(r, e);
          function a(t) {
            G(i, n, o, a, c, "next", t);
          }
          function c(t) {
            G(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function A(t, r) {
      return F.apply(this, arguments);
    }
    function F() {
      return (F = I(
        _().mark(function t(r, e) {
          var n, o, i, a, c, u;
          return _().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (n = N({}, r)), (t.next = 3), O(n, e);
                case 3:
                  return (
                    (o = t.sent),
                    (i = S(o, 2)),
                    (a = i[0]),
                    (c = i[1]),
                    (u = E(r, e)),
                    (n.cursor.path = a),
                    (n.pointer.path = c),
                    (n.cursor.offsetSizeX = u.nextCursorOffsetX),
                    (n.cursor.offsetSizeY = u.nextCursorOffsetY),
                    (n.pointer.offsetSizeX = u.nextPointerOffsetX),
                    (n.pointer.offsetSizeY = u.nextPointerOffsetY),
                    t.abrupt("return", n)
                  );
                case 15:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function Y(t) {
      return (Y =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
    }
    function M() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ M =
        function () {
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
      function f(t, r, e, o) {
        var i = r && r.prototype instanceof h ? r : h,
          a = Object.create(i.prototype),
          c = new j(o || []);
        return n(a, "_invoke", { value: x(t, e, c) }), a;
      }
      function s(t, r, e) {
        try {
          return { type: "normal", arg: t.call(r, e) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = f;
      var l = {};
      function h() {}
      function p() {}
      function y() {}
      var v = {};
      u(v, i, function () {
        return this;
      });
      var d = Object.getPrototypeOf,
        m = d && d(d(_([])));
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
        var o;
        n(this, "_invoke", {
          value: function (n, i) {
            function a() {
              return new r(function (o, a) {
                !(function n(o, i, a, c) {
                  var u = s(t[o], t, i);
                  if ("throw" !== u.type) {
                    var f = u.arg,
                      l = f.value;
                    return l && "object" == Y(l) && e.call(l, "__await")
                      ? r.resolve(l.__await).then(
                          function (t) {
                            n("next", t, a, c);
                          },
                          function (t) {
                            n("throw", t, a, c);
                          }
                        )
                      : r.resolve(l).then(
                          function (t) {
                            (f.value = t), a(f);
                          },
                          function (t) {
                            return n("throw", t, a, c);
                          }
                        );
                  }
                  c(u.arg);
                })(n, i, o, a);
              });
            }
            return (o = o ? o.then(a, a) : a());
          }
        });
      }
      function x(t, r, e) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n) throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return S();
          }
          for (e.method = o, e.arg = i; ; ) {
            var a = e.delegate;
            if (a) {
              var c = L(a, e);
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
            var u = s(t, r, e);
            if ("normal" === u.type) {
              if (((n = e.done ? "completed" : "suspendedYield"), u.arg === l)) continue;
              return { value: u.arg, done: e.done };
            }
            "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
          }
        };
      }
      function L(t, r) {
        var e = t.iterator[r.method];
        if (void 0 === e) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (t.iterator.return && ((r.method = "return"), (r.arg = void 0), L(t, r), "throw" === r.method)) return l;
            (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return l;
        }
        var n = s(e, t.iterator, r.arg);
        if ("throw" === n.type) return (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((r[t.resultName] = o.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
              (r.delegate = null),
              l)
            : o
          : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), l);
      }
      function O(t) {
        var r = { tryLoc: t[0] };
        1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
      }
      function E(t) {
        var r = t.completion || {};
        (r.type = "normal"), delete r.arg, (t.completion = r);
      }
      function j(t) {
        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(O, this), this.reset(!0);
      }
      function _(t) {
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
        return { next: S };
      }
      function S() {
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
          var a = new b(f(r, e, n, o), i);
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
        (t.values = _),
        (j.prototype = {
          constructor: j,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(E),
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
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), l;
            }
          },
          catch: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.tryLoc === t) {
                var n = e.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  E(e);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, r, e) {
            return (this.delegate = { iterator: _(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), l;
          }
        }),
        t
      );
    }
    function C(t, r, e, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void e(t);
      }
      c.done ? r(u) : Promise.resolve(u).then(n, o);
    }
    function D(t) {
      return function () {
        var r = this,
          e = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(r, e);
          function a(t) {
            C(i, n, o, a, c, "next", t);
          }
          function c(t) {
            C(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function z(t, r) {
      return U.apply(this, arguments);
    }
    function U() {
      return (U = D(
        M().mark(function t(r, e) {
          var n;
          return M().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), A(r, e);
                case 2:
                  n = t.sent;
                  try {
                    chrome.storage.local.set({ selected: n, size: e }, function () {
                      chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
                        t.forEach(function (t) {
                          chrome.tabs.sendMessage(t.id, { action: "changeCursorPack" }, function (t) {});
                        });
                      });
                    });
                  } catch (t) {}
                  return t.abrupt("return", n);
                case 5:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function X(t, r) {
      var e = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
      if (!e) {
        if (
          Array.isArray(t) ||
          (e = (function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return R(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return R(t, r);
          })(t)) ||
          (r && t && "number" == typeof t.length)
        ) {
          e && (t = e);
          var n = 0,
            o = function () {};
          return {
            s: o,
            n: function () {
              return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
            },
            e: function (t) {
              throw t;
            },
            f: o
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var i,
        a = !0,
        c = !1;
      return {
        s: function () {
          e = e.call(t);
        },
        n: function () {
          var t = e.next();
          return (a = t.done), t;
        },
        e: function (t) {
          (c = !0), (i = t);
        },
        f: function () {
          try {
            a || null == e.return || e.return();
          } finally {
            if (c) throw i;
          }
        }
      };
    }
    function R(t, r) {
      (null == r || r > t.length) && (r = t.length);
      for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
      return n;
    }
    (Array.prototype.current = 0),
      (Array.prototype.next = function () {
        return this[++this.current];
      }),
      (Array.prototype.prev = function () {
        return this[--this.current];
      }),
      (Array.prototype.cycle = function (t) {
        var r = this.indexOf(t);
        if (-1 !== r) return this[(r + 1) % this.length];
      });
    var q = function () {
        try {
          chrome.alarms.getAll(function (t) {
            t.some(function (t) {
              return "rotationTime" == t.name;
            }) && chrome.alarms.clear("rotationTime"),
              p().then(function (t) {
                var r = t.rotator;
                r.status && "time" == r.type && chrome.alarms.create("rotationTime", { periodInMinutes: r.value / 60 });
              });
          });
        } catch (t) {}
      },
      B = function () {
        p()
          .then(function (t) {
            var r = t.favorites,
              e = t.selected,
              n = t.collection,
              o = t.size,
              i = r.cycle(e.id);
            (function (t) {
              var r = t.collections,
                e = t.packId;
              t.size;
              return new Promise(function (t, n) {
                var o,
                  i = X(r);
                try {
                  for (i.s(); !(o = i.n()).done; ) {
                    var a = o.value.items.find(function (t) {
                      return t.id === e;
                    });
                    if (a) {
                      a.cursor.originalPath || (a.cursor.originalPath = a.cursor.path),
                        a.pointer.originalPath || (a.pointer.originalPath = a.pointer.path),
                        t(a);
                      break;
                    }
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
                n(null);
              });
            })({ collections: Object.values(n), packId: i }).then(function (t) {
              z(t, o);
            });
          })
          .catch(function (t) {});
      },
      $ = function (t, r, e) {
        try {
          r &&
            "complete" == r.status &&
            "complete" == e.status &&
            p().then(function (t) {
              var r = t.counterTab,
                e = t.rotator;
              e.status &&
                "request" == e.type &&
                (Number.isInteger(parseInt(r)) || (r = 0),
                e.value > parseInt(r) && (B(), chrome.storage.local.set({ counterTab: 0 })),
                chrome.storage.local.set({ counterTab: parseInt(r) + 1 }));
            });
        } catch (t) {}
      };
    (Array.prototype.current = 0),
      (Array.prototype.next = function () {
        return this[++this.current];
      }),
      (Array.prototype.prev = function () {
        return this[--this.current];
      });
    var H = function (t) {
      "checkNotification" == t.name &&
        fetch("https://custom-cursor.com/api/notification/custom-cursor-helper/".concat(uid), { cors: "no-cors", method: "POST" })
          .then(function (t) {
            return t.json();
          })
          .then(function (t) {}),
        "showNotification" == t.name &&
          chrome.notifications.create("Hi", {
            type: "basic",
            iconUrl: "assets/images/logo.png",
            title: "New cursor pack ",
            message: "hi",
            priority: 2
          }),
        t.name,
        "rotationTime" == t.name && B();
    };
    function W(t) {
      return (W =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
    }
    function J() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ J =
        function () {
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
      function f(t, r, e, o) {
        var i = r && r.prototype instanceof h ? r : h,
          a = Object.create(i.prototype),
          c = new j(o || []);
        return n(a, "_invoke", { value: x(t, e, c) }), a;
      }
      function s(t, r, e) {
        try {
          return { type: "normal", arg: t.call(r, e) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = f;
      var l = {};
      function h() {}
      function p() {}
      function y() {}
      var v = {};
      u(v, i, function () {
        return this;
      });
      var d = Object.getPrototypeOf,
        m = d && d(d(_([])));
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
        var o;
        n(this, "_invoke", {
          value: function (n, i) {
            function a() {
              return new r(function (o, a) {
                !(function n(o, i, a, c) {
                  var u = s(t[o], t, i);
                  if ("throw" !== u.type) {
                    var f = u.arg,
                      l = f.value;
                    return l && "object" == W(l) && e.call(l, "__await")
                      ? r.resolve(l.__await).then(
                          function (t) {
                            n("next", t, a, c);
                          },
                          function (t) {
                            n("throw", t, a, c);
                          }
                        )
                      : r.resolve(l).then(
                          function (t) {
                            (f.value = t), a(f);
                          },
                          function (t) {
                            return n("throw", t, a, c);
                          }
                        );
                  }
                  c(u.arg);
                })(n, i, o, a);
              });
            }
            return (o = o ? o.then(a, a) : a());
          }
        });
      }
      function x(t, r, e) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n) throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return S();
          }
          for (e.method = o, e.arg = i; ; ) {
            var a = e.delegate;
            if (a) {
              var c = L(a, e);
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
            var u = s(t, r, e);
            if ("normal" === u.type) {
              if (((n = e.done ? "completed" : "suspendedYield"), u.arg === l)) continue;
              return { value: u.arg, done: e.done };
            }
            "throw" === u.type && ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
          }
        };
      }
      function L(t, r) {
        var e = t.iterator[r.method];
        if (void 0 === e) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (t.iterator.return && ((r.method = "return"), (r.arg = void 0), L(t, r), "throw" === r.method)) return l;
            (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return l;
        }
        var n = s(e, t.iterator, r.arg);
        if ("throw" === n.type) return (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((r[t.resultName] = o.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
              (r.delegate = null),
              l)
            : o
          : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), l);
      }
      function O(t) {
        var r = { tryLoc: t[0] };
        1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
      }
      function E(t) {
        var r = t.completion || {};
        (r.type = "normal"), delete r.arg, (t.completion = r);
      }
      function j(t) {
        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(O, this), this.reset(!0);
      }
      function _(t) {
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
        return { next: S };
      }
      function S() {
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
          var a = new b(f(r, e, n, o), i);
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
        (t.values = _),
        (j.prototype = {
          constructor: j,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(E),
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
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), l;
            }
          },
          catch: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.tryLoc === t) {
                var n = e.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  E(e);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, r, e) {
            return (this.delegate = { iterator: _(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = void 0), l;
          }
        }),
        t
      );
    }
    function K(t, r, e, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void e(t);
      }
      c.done ? r(u) : Promise.resolve(u).then(n, o);
    }
    function Q(t) {
      return function () {
        var r = this,
          e = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(r, e);
          function a(t) {
            K(i, n, o, a, c, "next", t);
          }
          function c(t) {
            K(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    chrome.runtime.onInstalled.addListener(function (t) {
      t.reason === chrome.runtime.OnInstalledReason.INSTALL
        ? s().then(function (t) {})
        : t.reason === chrome.runtime.OnInstalledReason.UPDATE && l().then(function (t) {});
    }),
      chrome.runtime.onMessageExternal.addListener(
        (function () {
          var t = Q(
            J().mark(function t(r, e, n) {
              return J().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        p().then(
                          (function () {
                            var t = Q(
                              J().mark(function t(e) {
                                var o, i, a;
                                return J().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        (t.t0 = r.action),
                                          (t.next =
                                            "getInstalled" === t.t0 || "get_config" === t.t0
                                              ? 3
                                              : "install_collection" === t.t0
                                              ? 5
                                              : "set_config" === t.t0
                                              ? 9
                                              : 24);
                                        break;
                                      case 3:
                                        return n(e), t.abrupt("break", 24);
                                      case 5:
                                        return (
                                          (o = r.slug),
                                          (i = r.collection),
                                          Object.prototype.hasOwnProperty.call(e.collection, o) || (e.collection[o] = {}),
                                          (e.collection[o] = i),
                                          chrome.storage.local.set({ collection: e.collection }, function () {
                                            n({ status: !0, action: "install_collection" });
                                          }),
                                          t.abrupt("break", 24)
                                        );
                                      case 9:
                                        if (!r.data.selected) {
                                          t.next = 21;
                                          break;
                                        }
                                        return (
                                          ((a = r.data.selected).path = a.image),
                                          (a.cursor.originalPath = a.cursor.image),
                                          (a.pointer.path = a.pointer.path),
                                          (a.pointer.originalPath = a.pointer.image),
                                          (t.next = 17),
                                          z(r.data.selected, e.size)
                                        );
                                      case 17:
                                        return n({ status: !0, action: "set_config" }), t.abrupt("break", 24);
                                      case 21:
                                        return (
                                          (t.next = 23),
                                          y(r.data).then(function (t) {
                                            return n(t);
                                          })
                                        );
                                      case 23:
                                        return t.abrupt("break", 24);
                                      case 24:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (r) {
                              return t.apply(this, arguments);
                            };
                          })()
                        )
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r, e, n) {
            return t.apply(this, arguments);
          };
        })()
      ),
      chrome.runtime.onMessage.addListener(
        (function () {
          var t = Q(
            J().mark(function t(r, e, n) {
              var o;
              return J().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (o = r.action),
                          (t.t0 = o),
                          (t.next = "startRotator" === t.t0 ? 4 : "stopRotator" === t.t0 ? 14 : "getOffset" === t.t0 ? 24 : 26);
                        break;
                      case 4:
                        return (t.prev = 4), (t.next = 7), q();
                      case 7:
                        n({}), (t.next = 13);
                        break;
                      case 10:
                        (t.prev = 10), (t.t1 = t.catch(4)), n({ error: t.t1 });
                      case 13:
                        return t.abrupt("break", 26);
                      case 14:
                        return (
                          (t.prev = 14),
                          (t.next = 17),
                          void chrome.alarms.getAll(function (t) {
                            t.some(function (t) {
                              return "rotationTime" == t.name;
                            }) && chrome.alarms.clear("rotationTime");
                          })
                        );
                      case 17:
                        n({}), (t.next = 23);
                        break;
                      case 20:
                        (t.prev = 20), (t.t2 = t.catch(14)), n({ error: t.t2 });
                      case 23:
                        return t.abrupt("break", 26);
                      case 24:
                        return n({ getOffset: !1 }), t.abrupt("break", 26);
                      case 26:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [
                  [4, 10],
                  [14, 20]
                ]
              );
            })
          );
          return function (r, e, n) {
            return t.apply(this, arguments);
          };
        })()
      ),
      chrome.runtime.onStartup.addListener(h),
      chrome.runtime.onInstalled.addListener(h),
      chrome.runtime.setUninstallURL("https://custom-cursor.com/uninstall?utm_source=ext&utm_medium=uninstall&utm_campaign=uninstall");
    try {
      chrome.tabs.onCreated.addListener($), chrome.tabs.onUpdated.addListener($);
    } catch (t) {}
    try {
      chrome.alarms.create("noSleep", { periodInMinutes: 1 }),
        chrome.alarms.onAlarm.addListener(H),
        (function () {
          try {
            chrome.alarms.getAll(function (t) {
              t.some(function (t) {
                return "rotationTime" == t.name;
              }) ||
                p().then(function (t) {
                  var r = t.rotator;
                  r.status && "time" == r.type && chrome.alarms.create("rotationTime", { periodInMinutes: r.value / 60 });
                });
            });
          } catch (t) {}
        })();
    } catch (t) {}
  }
]);
