!(function () {
  var e = {
      52209: function (e) {
        function t(e) {
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        }
        (t.keys = function () {
          return [];
        }),
          (t.resolve = t),
          (t.id = 52209),
          (e.exports = t);
      },
      16886: function (e) {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      12693: function (e) {
        (e.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      71459: function (e) {
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        (e.exports = function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      2153: function (e, t, n) {
        var r = n(10381);
        (e.exports = function (e, t) {
          var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (!n) {
            if (Array.isArray(e) || (n = r(e)) || (t && e && "number" == typeof e.length)) {
              n && (e = n);
              var o = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                },
                e: function (e) {
                  throw e;
                },
                f: i
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var a,
            s = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (s = e.done), e;
            },
            e: function (e) {
              (u = !0), (a = e);
            },
            f: function () {
              try {
                s || null == n.return || n.return();
              } finally {
                if (u) throw a;
              }
            }
          };
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      10381: function (e, t, n) {
        var r = n(16886);
        (e.exports = function (e, t) {
          if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(e, t)
                : void 0
            );
          }
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      28379: function (e, t, n) {
        var r = n(396);
        e.exports = function (e) {
          if (!r(e)) throw TypeError(String(e) + " is not an object");
          return e;
        };
      },
      53273: function (e, t, n) {
        var r = n(10450),
          o = n(17900),
          i = n(67234);
        e.exports = r
          ? function (e, t, n) {
              return o.f(e, t, i(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      67234: function (e) {
        e.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
      },
      35241: function (e, t, n) {
        var r = n(97382),
          o = n(45289),
          i = n(46420),
          a = n(17900).f;
        e.exports = function (e) {
          var t = r.Symbol || (r.Symbol = {});
          o(t, e) || a(t, e, { value: i.f(e) });
        };
      },
      10450: function (e, t, n) {
        var r = n(7741);
        e.exports = !r(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              }
            })[1]
          );
        });
      },
      96009: function (e, t, n) {
        var r = n(11665),
          o = n(396),
          i = r.document,
          a = o(i) && o(i.createElement);
        e.exports = function (e) {
          return a ? i.createElement(e) : {};
        };
      },
      86865: function (e, t, n) {
        var r = n(67490);
        e.exports = r("navigator", "userAgent") || "";
      },
      69408: function (e, t, n) {
        var r,
          o,
          i = n(11665),
          a = n(86865),
          s = i.process,
          u = s && s.versions,
          c = u && u.v8;
        c
          ? (o = (r = c.split("."))[0] < 4 ? 1 : r[0] + r[1])
          : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]),
          (e.exports = o && +o);
      },
      7741: function (e) {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (t) {
            return !0;
          }
        };
      },
      67490: function (e, t, n) {
        var r = n(97382),
          o = n(11665),
          i = function (e) {
            return "function" == typeof e ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? i(r[e]) || i(o[e]) : (r[e] && r[e][t]) || (o[e] && o[e][t]);
        };
      },
      11665: function (e) {
        var t = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          t("object" == typeof globalThis && globalThis) ||
          t("object" == typeof window && window) ||
          t("object" == typeof self && self) ||
          t("object" == typeof global && global) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      45289: function (e, t, n) {
        var r = n(38099),
          o = {}.hasOwnProperty;
        e.exports = function (e, t) {
          return o.call(r(e), t);
        };
      },
      95369: function (e, t, n) {
        var r = n(10450),
          o = n(7741),
          i = n(96009);
        e.exports =
          !r &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(i("div"), "a", {
                get: function () {
                  return 7;
                }
              }).a
            );
          });
      },
      396: function (e) {
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      80084: function (e) {
        e.exports = !1;
      },
      64998: function (e, t, n) {
        var r = n(69408),
          o = n(7741);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            return !String(Symbol()) || (!Symbol.sham && r && r < 41);
          });
      },
      17900: function (e, t, n) {
        var r = n(10450),
          o = n(95369),
          i = n(28379),
          a = n(26589),
          s = Object.defineProperty;
        t.f = r
          ? s
          : function (e, t, n) {
              if ((i(e), (t = a(t, !0)), i(n), o))
                try {
                  return s(e, t, n);
                } catch (r) {}
              if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      97382: function (e, t, n) {
        var r = n(11665);
        e.exports = r;
      },
      48215: function (e) {
        e.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on " + e);
          return e;
        };
      },
      7767: function (e, t, n) {
        var r = n(11665),
          o = n(53273);
        e.exports = function (e, t) {
          try {
            o(r, e, t);
          } catch (n) {
            r[e] = t;
          }
          return t;
        };
      },
      14144: function (e, t, n) {
        var r = n(11665),
          o = n(7767),
          i = "__core-js_shared__",
          a = r[i] || o(i, {});
        e.exports = a;
      },
      46222: function (e, t, n) {
        var r = n(80084),
          o = n(14144);
        (e.exports = function (e, t) {
          return o[e] || (o[e] = void 0 !== t ? t : {});
        })("versions", []).push({ version: "3.12.1", mode: r ? "pure" : "global", copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)" });
      },
      38099: function (e, t, n) {
        var r = n(48215);
        e.exports = function (e) {
          return Object(r(e));
        };
      },
      26589: function (e, t, n) {
        var r = n(396);
        e.exports = function (e, t) {
          if (!r(e)) return e;
          var n, o;
          if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
          if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
          if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      23763: function (e) {
        var t = 0,
          n = Math.random();
        e.exports = function (e) {
          return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + n).toString(36);
        };
      },
      4016: function (e, t, n) {
        var r = n(64998);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      46420: function (e, t, n) {
        var r = n(20864);
        t.f = r;
      },
      20864: function (e, t, n) {
        var r = n(11665),
          o = n(46222),
          i = n(45289),
          a = n(23763),
          s = n(64998),
          u = n(4016),
          c = o("wks"),
          l = r.Symbol,
          f = u ? l : (l && l.withoutSetter) || a;
        e.exports = function (e) {
          return (i(c, e) && (s || "string" == typeof c[e])) || (c[e] = s && i(l, e) ? l[e] : f("Symbol." + e)), c[e];
        };
      },
      98512: function (e, t, n) {
        n(35241)("asyncIterator");
      },
      39747: function () {
        var e;
        !(function (e) {
          !(function (t) {
            var n =
                "object" == typeof global
                  ? global
                  : "object" == typeof self
                  ? self
                  : "object" == typeof this
                  ? this
                  : Function("return this;")(),
              r = o(e);
            function o(e, t) {
              return function (n, r) {
                "function" != typeof e[n] && Object.defineProperty(e, n, { configurable: !0, writable: !0, value: r }), t && t(n, r);
              };
            }
            void 0 === n.Reflect ? (n.Reflect = e) : (r = o(n.Reflect, r)),
              (function (e) {
                var t = Object.prototype.hasOwnProperty,
                  n = "function" == typeof Symbol,
                  r = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                  o = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                  i = "function" == typeof Object.create,
                  a = { __proto__: [] } instanceof Array,
                  s = !i && !a,
                  u = {
                    create: i
                      ? function () {
                          return M(Object.create(null));
                        }
                      : a
                      ? function () {
                          return M({ __proto__: null });
                        }
                      : function () {
                          return M({});
                        },
                    has: s
                      ? function (e, n) {
                          return t.call(e, n);
                        }
                      : function (e, t) {
                          return t in e;
                        },
                    get: s
                      ? function (e, n) {
                          return t.call(e, n) ? e[n] : void 0;
                        }
                      : function (e, t) {
                          return e[t];
                        }
                  },
                  c = Object.getPrototypeOf(Function),
                  l = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL,
                  f =
                    l || "function" != typeof Map || "function" != typeof Map.prototype.entries
                      ? (function () {
                          var e = {},
                            t = [],
                            n = (function () {
                              function e(e, t, n) {
                                (this._index = 0), (this._keys = e), (this._values = t), (this._selector = n);
                              }
                              return (
                                (e.prototype["@@iterator"] = function () {
                                  return this;
                                }),
                                (e.prototype[o] = function () {
                                  return this;
                                }),
                                (e.prototype.next = function () {
                                  var e = this._index;
                                  if (e >= 0 && e < this._keys.length) {
                                    var n = this._selector(this._keys[e], this._values[e]);
                                    return (
                                      e + 1 >= this._keys.length
                                        ? ((this._index = -1), (this._keys = t), (this._values = t))
                                        : this._index++,
                                      { value: n, done: !1 }
                                    );
                                  }
                                  return { value: void 0, done: !0 };
                                }),
                                (e.prototype.throw = function (e) {
                                  throw (this._index >= 0 && ((this._index = -1), (this._keys = t), (this._values = t)), e);
                                }),
                                (e.prototype.return = function (e) {
                                  return (
                                    this._index >= 0 && ((this._index = -1), (this._keys = t), (this._values = t)), { value: e, done: !0 }
                                  );
                                }),
                                e
                              );
                            })();
                          return (function () {
                            function t() {
                              (this._keys = []), (this._values = []), (this._cacheKey = e), (this._cacheIndex = -2);
                            }
                            return (
                              Object.defineProperty(t.prototype, "size", {
                                get: function () {
                                  return this._keys.length;
                                },
                                enumerable: !0,
                                configurable: !0
                              }),
                              (t.prototype.has = function (e) {
                                return this._find(e, !1) >= 0;
                              }),
                              (t.prototype.get = function (e) {
                                var t = this._find(e, !1);
                                return t >= 0 ? this._values[t] : void 0;
                              }),
                              (t.prototype.set = function (e, t) {
                                var n = this._find(e, !0);
                                return (this._values[n] = t), this;
                              }),
                              (t.prototype.delete = function (t) {
                                var n = this._find(t, !1);
                                if (n >= 0) {
                                  for (var r = this._keys.length, o = n + 1; o < r; o++)
                                    (this._keys[o - 1] = this._keys[o]), (this._values[o - 1] = this._values[o]);
                                  return (
                                    this._keys.length--,
                                    this._values.length--,
                                    t === this._cacheKey && ((this._cacheKey = e), (this._cacheIndex = -2)),
                                    !0
                                  );
                                }
                                return !1;
                              }),
                              (t.prototype.clear = function () {
                                (this._keys.length = 0), (this._values.length = 0), (this._cacheKey = e), (this._cacheIndex = -2);
                              }),
                              (t.prototype.keys = function () {
                                return new n(this._keys, this._values, r);
                              }),
                              (t.prototype.values = function () {
                                return new n(this._keys, this._values, i);
                              }),
                              (t.prototype.entries = function () {
                                return new n(this._keys, this._values, a);
                              }),
                              (t.prototype["@@iterator"] = function () {
                                return this.entries();
                              }),
                              (t.prototype[o] = function () {
                                return this.entries();
                              }),
                              (t.prototype._find = function (e, t) {
                                return (
                                  this._cacheKey !== e && (this._cacheIndex = this._keys.indexOf((this._cacheKey = e))),
                                  this._cacheIndex < 0 &&
                                    t &&
                                    ((this._cacheIndex = this._keys.length), this._keys.push(e), this._values.push(void 0)),
                                  this._cacheIndex
                                );
                              }),
                              t
                            );
                          })();
                          function r(e, t) {
                            return e;
                          }
                          function i(e, t) {
                            return t;
                          }
                          function a(e, t) {
                            return [e, t];
                          }
                        })()
                      : Map,
                  p =
                    l || "function" != typeof Set || "function" != typeof Set.prototype.entries
                      ? (function () {
                          function e() {
                            this._map = new f();
                          }
                          return (
                            Object.defineProperty(e.prototype, "size", {
                              get: function () {
                                return this._map.size;
                              },
                              enumerable: !0,
                              configurable: !0
                            }),
                            (e.prototype.has = function (e) {
                              return this._map.has(e);
                            }),
                            (e.prototype.add = function (e) {
                              return this._map.set(e, e), this;
                            }),
                            (e.prototype.delete = function (e) {
                              return this._map.delete(e);
                            }),
                            (e.prototype.clear = function () {
                              this._map.clear();
                            }),
                            (e.prototype.keys = function () {
                              return this._map.keys();
                            }),
                            (e.prototype.values = function () {
                              return this._map.values();
                            }),
                            (e.prototype.entries = function () {
                              return this._map.entries();
                            }),
                            (e.prototype["@@iterator"] = function () {
                              return this.keys();
                            }),
                            (e.prototype[o] = function () {
                              return this.keys();
                            }),
                            e
                          );
                        })()
                      : Set,
                  h = new (
                    l || "function" != typeof WeakMap
                      ? (function () {
                          var e = u.create(),
                            n = r();
                          return (function () {
                            function e() {
                              this._key = r();
                            }
                            return (
                              (e.prototype.has = function (e) {
                                var t = o(e, !1);
                                return void 0 !== t && u.has(t, this._key);
                              }),
                              (e.prototype.get = function (e) {
                                var t = o(e, !1);
                                return void 0 !== t ? u.get(t, this._key) : void 0;
                              }),
                              (e.prototype.set = function (e, t) {
                                return (o(e, !0)[this._key] = t), this;
                              }),
                              (e.prototype.delete = function (e) {
                                var t = o(e, !1);
                                return void 0 !== t && delete t[this._key];
                              }),
                              (e.prototype.clear = function () {
                                this._key = r();
                              }),
                              e
                            );
                          })();
                          function r() {
                            var t;
                            do {
                              t = "@@WeakMap@@" + a();
                            } while (u.has(e, t));
                            return (e[t] = !0), t;
                          }
                          function o(e, r) {
                            if (!t.call(e, n)) {
                              if (!r) return;
                              Object.defineProperty(e, n, { value: u.create() });
                            }
                            return e[n];
                          }
                          function i(e, t) {
                            for (var n = 0; n < t; ++n) e[n] = (255 * Math.random()) | 0;
                            return e;
                          }
                          function a() {
                            var e,
                              t =
                                ((e = 16),
                                "function" == typeof Uint8Array
                                  ? "undefined" != typeof crypto
                                    ? crypto.getRandomValues(new Uint8Array(e))
                                    : "undefined" != typeof msCrypto
                                    ? msCrypto.getRandomValues(new Uint8Array(e))
                                    : i(new Uint8Array(e), e)
                                  : i(new Array(e), e));
                            (t[6] = (79 & t[6]) | 64), (t[8] = (191 & t[8]) | 128);
                            for (var n = "", r = 0; r < 16; ++r) {
                              var o = t[r];
                              (4 !== r && 6 !== r && 8 !== r) || (n += "-"), o < 16 && (n += "0"), (n += o.toString(16).toLowerCase());
                            }
                            return n;
                          }
                        })()
                      : WeakMap
                  )();
                function d(e, t, n) {
                  var r = h.get(e);
                  if (S(r)) {
                    if (!n) return;
                    (r = new f()), h.set(e, r);
                  }
                  var o = r.get(t);
                  if (S(o)) {
                    if (!n) return;
                    (o = new f()), r.set(t, o);
                  }
                  return o;
                }
                function v(e, t, n) {
                  if (y(e, t, n)) return !0;
                  var r = j(t);
                  return !T(r) && v(e, r, n);
                }
                function y(e, t, n) {
                  var r = d(t, n, !1);
                  return !S(r) && !!r.has(e);
                }
                function m(e, t, n) {
                  if (y(e, t, n)) return g(e, t, n);
                  var r = j(t);
                  return T(r) ? void 0 : m(e, r, n);
                }
                function g(e, t, n) {
                  var r = d(t, n, !1);
                  if (!S(r)) return r.get(e);
                }
                function b(e, t, n, r) {
                  d(n, r, !0).set(e, t);
                }
                function _(e, t) {
                  var n = k(e, t),
                    r = j(e);
                  if (null === r) return n;
                  var o = _(r, t);
                  if (o.length <= 0) return n;
                  if (n.length <= 0) return o;
                  for (var i = new p(), a = [], s = 0, u = n; s < u.length; s++) i.has((f = u[s])) || (i.add(f), a.push(f));
                  for (var c = 0, l = o; c < l.length; c++) {
                    var f;
                    i.has((f = l[c])) || (i.add(f), a.push(f));
                  }
                  return a;
                }
                function k(e, t) {
                  var n = [],
                    r = d(e, t, !1);
                  if (S(r)) return n;
                  for (
                    var i = (function (e) {
                        var t = A(e, o);
                        if (!x(t)) throw new TypeError();
                        var n = t.call(e);
                        if (!E(n)) throw new TypeError();
                        return n;
                      })(r.keys()),
                      a = 0;
                    ;

                  ) {
                    var s = I(i);
                    if (!s) return (n.length = a), n;
                    var u = s.value;
                    try {
                      n[a] = u;
                    } catch (c) {
                      try {
                        D(i);
                      } finally {
                        throw c;
                      }
                    }
                    a++;
                  }
                }
                function w(e) {
                  if (null === e) return 1;
                  switch (typeof e) {
                    case "undefined":
                      return 0;
                    case "boolean":
                      return 2;
                    case "string":
                      return 3;
                    case "symbol":
                      return 4;
                    case "number":
                      return 5;
                    case "object":
                      return null === e ? 1 : 6;
                    default:
                      return 6;
                  }
                }
                function S(e) {
                  return void 0 === e;
                }
                function T(e) {
                  return null === e;
                }
                function E(e) {
                  return "object" == typeof e ? null !== e : "function" == typeof e;
                }
                function O(e) {
                  var t = (function (e, t) {
                    switch (w(e)) {
                      case 0:
                      case 1:
                      case 2:
                      case 3:
                      case 4:
                      case 5:
                        return e;
                    }
                    var n = 3 === t ? "string" : 5 === t ? "number" : "default",
                      o = A(e, r);
                    if (void 0 !== o) {
                      var i = o.call(e, n);
                      if (E(i)) throw new TypeError();
                      return i;
                    }
                    return (function (e, t) {
                      if ("string" === t) {
                        var n = e.toString;
                        if (x(n) && !E((o = n.call(e)))) return o;
                        if (x((r = e.valueOf)) && !E((o = r.call(e)))) return o;
                      } else {
                        var r;
                        if (x((r = e.valueOf)) && !E((o = r.call(e)))) return o;
                        var o,
                          i = e.toString;
                        if (x(i) && !E((o = i.call(e)))) return o;
                      }
                      throw new TypeError();
                    })(e, "default" === n ? "number" : n);
                  })(e, 3);
                  return "symbol" == typeof t
                    ? t
                    : (function (e) {
                        return "" + e;
                      })(t);
                }
                function P(e) {
                  return Array.isArray
                    ? Array.isArray(e)
                    : e instanceof Object
                    ? e instanceof Array
                    : "[object Array]" === Object.prototype.toString.call(e);
                }
                function x(e) {
                  return "function" == typeof e;
                }
                function C(e) {
                  return "function" == typeof e;
                }
                function A(e, t) {
                  var n = e[t];
                  if (null != n) {
                    if (!x(n)) throw new TypeError();
                    return n;
                  }
                }
                function I(e) {
                  var t = e.next();
                  return !t.done && t;
                }
                function D(e) {
                  var t = e.return;
                  t && t.call(e);
                }
                function j(e) {
                  var t = Object.getPrototypeOf(e);
                  if ("function" != typeof e || e === c) return t;
                  if (t !== c) return t;
                  var n = e.prototype,
                    r = n && Object.getPrototypeOf(n);
                  if (null == r || r === Object.prototype) return t;
                  var o = r.constructor;
                  return "function" != typeof o || o === e ? t : o;
                }
                function M(e) {
                  return (e.__ = void 0), delete e.__, e;
                }
                e("decorate", function (e, t, n, r) {
                  if (S(n)) {
                    if (!P(e)) throw new TypeError();
                    if (!C(t)) throw new TypeError();
                    return (function (e, t) {
                      for (var n = e.length - 1; n >= 0; --n) {
                        var r = (0, e[n])(t);
                        if (!S(r) && !T(r)) {
                          if (!C(r)) throw new TypeError();
                          t = r;
                        }
                      }
                      return t;
                    })(e, t);
                  }
                  if (!P(e)) throw new TypeError();
                  if (!E(t)) throw new TypeError();
                  if (!E(r) && !S(r) && !T(r)) throw new TypeError();
                  return (
                    T(r) && (r = void 0),
                    (function (e, t, n, r) {
                      for (var o = e.length - 1; o >= 0; --o) {
                        var i = (0, e[o])(t, n, r);
                        if (!S(i) && !T(i)) {
                          if (!E(i)) throw new TypeError();
                          r = i;
                        }
                      }
                      return r;
                    })(e, t, (n = O(n)), r)
                  );
                }),
                  e("metadata", function (e, t) {
                    return function (n, r) {
                      if (!E(n)) throw new TypeError();
                      if (
                        !S(r) &&
                        !(function (e) {
                          switch (w(e)) {
                            case 3:
                            case 4:
                              return !0;
                            default:
                              return !1;
                          }
                        })(r)
                      )
                        throw new TypeError();
                      b(e, t, n, r);
                    };
                  }),
                  e("defineMetadata", function (e, t, n, r) {
                    if (!E(n)) throw new TypeError();
                    return S(r) || (r = O(r)), b(e, t, n, r);
                  }),
                  e("hasMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    return S(n) || (n = O(n)), v(e, t, n);
                  }),
                  e("hasOwnMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    return S(n) || (n = O(n)), y(e, t, n);
                  }),
                  e("getMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    return S(n) || (n = O(n)), m(e, t, n);
                  }),
                  e("getOwnMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    return S(n) || (n = O(n)), g(e, t, n);
                  }),
                  e("getMetadataKeys", function (e, t) {
                    if (!E(e)) throw new TypeError();
                    return S(t) || (t = O(t)), _(e, t);
                  }),
                  e("getOwnMetadataKeys", function (e, t) {
                    if (!E(e)) throw new TypeError();
                    return S(t) || (t = O(t)), k(e, t);
                  }),
                  e("deleteMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    S(n) || (n = O(n));
                    var r = d(t, n, !1);
                    if (S(r)) return !1;
                    if (!r.delete(e)) return !1;
                    if (r.size > 0) return !0;
                    var o = h.get(t);
                    return o.delete(n), o.size > 0 || h.delete(t), !0;
                  });
              })(r);
          })();
        })(e || (e = {}));
      },
      98981: function (e, t, n) {
        "use strict";
        var r = n(2153).default,
          o = n(12693).default,
          i = n(71459).default,
          a =
            ((function (e) {
              var t = e.performance;
              function n(e) {
                t && t.mark && t.mark(e);
              }
              function r(e, n) {
                t && t.measure && t.measure(e, n);
              }
              n("Zone");
              var a = e.__Zone_symbol_prefix || "__zone_symbol__";
              function s(e) {
                return a + e;
              }
              var u = !0 === e[s("forceDuplicateZoneCheck")];
              if (e.Zone) {
                if (u || "function" != typeof e.Zone.__symbol__) throw new Error("Zone already loaded.");
                return e.Zone;
              }
              var c = (function () {
                function t(e, n) {
                  o(this, t),
                    (this._parent = e),
                    (this._name = n ? n.name || "unnamed" : "<root>"),
                    (this._properties = (n && n.properties) || {}),
                    (this._zoneDelegate = new p(this, this._parent && this._parent._zoneDelegate, n));
                }
                return (
                  i(
                    t,
                    [
                      {
                        key: "parent",
                        get: function () {
                          return this._parent;
                        }
                      },
                      {
                        key: "name",
                        get: function () {
                          return this._name;
                        }
                      },
                      {
                        key: "get",
                        value: function (e) {
                          var t = this.getZoneWith(e);
                          if (t) return t._properties[e];
                        }
                      },
                      {
                        key: "getZoneWith",
                        value: function (e) {
                          for (var t = this; t; ) {
                            if (t._properties.hasOwnProperty(e)) return t;
                            t = t._parent;
                          }
                          return null;
                        }
                      },
                      {
                        key: "fork",
                        value: function (e) {
                          if (!e) throw new Error("ZoneSpec required!");
                          return this._zoneDelegate.fork(this, e);
                        }
                      },
                      {
                        key: "wrap",
                        value: function (e, t) {
                          if ("function" != typeof e) throw new Error("Expecting function got: " + e);
                          var n = this._zoneDelegate.intercept(this, e, t),
                            r = this;
                          return function () {
                            return r.runGuarded(n, this, arguments, t);
                          };
                        }
                      },
                      {
                        key: "run",
                        value: function (e, t, n, r) {
                          j = { parent: j, zone: this };
                          try {
                            return this._zoneDelegate.invoke(this, e, t, n, r);
                          } finally {
                            j = j.parent;
                          }
                        }
                      },
                      {
                        key: "runGuarded",
                        value: function (e) {
                          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = arguments.length > 3 ? arguments[3] : void 0;
                          j = { parent: j, zone: this };
                          try {
                            try {
                              return this._zoneDelegate.invoke(this, e, t, n, r);
                            } catch (o) {
                              if (this._zoneDelegate.handleError(this, o)) throw o;
                            }
                          } finally {
                            j = j.parent;
                          }
                        }
                      },
                      {
                        key: "runTask",
                        value: function (e, t, n) {
                          if (e.zone != this)
                            throw new Error(
                              "A task can only be run in the zone of creation! (Creation: " +
                                (e.zone || k).name +
                                "; Execution: " +
                                this.name +
                                ")"
                            );
                          if (e.state !== w || (e.type !== A && e.type !== C)) {
                            var r = e.state != E;
                            r && e._transitionTo(E, T), e.runCount++;
                            var o = M;
                            (M = e), (j = { parent: j, zone: this });
                            try {
                              e.type == C && e.data && !e.data.isPeriodic && (e.cancelFn = void 0);
                              try {
                                return this._zoneDelegate.invokeTask(this, e, t, n);
                              } catch (i) {
                                if (this._zoneDelegate.handleError(this, i)) throw i;
                              }
                            } finally {
                              e.state !== w &&
                                e.state !== P &&
                                (e.type == A || (e.data && e.data.isPeriodic)
                                  ? r && e._transitionTo(T, E)
                                  : ((e.runCount = 0), this._updateTaskCount(e, -1), r && e._transitionTo(w, E, w))),
                                (j = j.parent),
                                (M = o);
                            }
                          }
                        }
                      },
                      {
                        key: "scheduleTask",
                        value: function (e) {
                          if (e.zone && e.zone !== this)
                            for (var t = this; t; ) {
                              if (t === e.zone)
                                throw Error(
                                  "can not reschedule task to "
                                    .concat(this.name, " which is descendants of the original zone ")
                                    .concat(e.zone.name)
                                );
                              t = t.parent;
                            }
                          e._transitionTo(S, w);
                          var n = [];
                          (e._zoneDelegates = n), (e._zone = this);
                          try {
                            e = this._zoneDelegate.scheduleTask(this, e);
                          } catch (r) {
                            throw (e._transitionTo(P, S, w), this._zoneDelegate.handleError(this, r), r);
                          }
                          return e._zoneDelegates === n && this._updateTaskCount(e, 1), e.state == S && e._transitionTo(T, S), e;
                        }
                      },
                      {
                        key: "scheduleMicroTask",
                        value: function (e, t, n, r) {
                          return this.scheduleTask(new h(x, e, t, n, r, void 0));
                        }
                      },
                      {
                        key: "scheduleMacroTask",
                        value: function (e, t, n, r, o) {
                          return this.scheduleTask(new h(C, e, t, n, r, o));
                        }
                      },
                      {
                        key: "scheduleEventTask",
                        value: function (e, t, n, r, o) {
                          return this.scheduleTask(new h(A, e, t, n, r, o));
                        }
                      },
                      {
                        key: "cancelTask",
                        value: function (e) {
                          if (e.zone != this)
                            throw new Error(
                              "A task can only be cancelled in the zone of creation! (Creation: " +
                                (e.zone || k).name +
                                "; Execution: " +
                                this.name +
                                ")"
                            );
                          e._transitionTo(O, T, E);
                          try {
                            this._zoneDelegate.cancelTask(this, e);
                          } catch (t) {
                            throw (e._transitionTo(P, O), this._zoneDelegate.handleError(this, t), t);
                          }
                          return this._updateTaskCount(e, -1), e._transitionTo(w, O), (e.runCount = 0), e;
                        }
                      },
                      {
                        key: "_updateTaskCount",
                        value: function (e, t) {
                          var n = e._zoneDelegates;
                          -1 == t && (e._zoneDelegates = null);
                          for (var r = 0; r < n.length; r++) n[r]._updateTaskCount(e.type, t);
                        }
                      }
                    ],
                    [
                      {
                        key: "assertZonePatched",
                        value: function () {
                          if (e.Promise !== I.ZoneAwarePromise)
                            throw new Error(
                              "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                            );
                        }
                      },
                      {
                        key: "root",
                        get: function () {
                          for (var e = t.current; e.parent; ) e = e.parent;
                          return e;
                        }
                      },
                      {
                        key: "current",
                        get: function () {
                          return j.zone;
                        }
                      },
                      {
                        key: "currentTask",
                        get: function () {
                          return M;
                        }
                      },
                      {
                        key: "__load_patch",
                        value: function (o, i) {
                          var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          if (I.hasOwnProperty(o)) {
                            if (!a && u) throw Error("Already loaded patch: " + o);
                          } else if (!e["__Zone_disable_" + o]) {
                            var s = "Zone:" + o;
                            n(s), (I[o] = i(e, t, D)), r(s, s);
                          }
                        }
                      }
                    ]
                  ),
                  t
                );
              })();
              c.__symbol__ = s;
              var l,
                f = {
                  name: "",
                  onHasTask: function (e, t, n, r) {
                    return e.hasTask(n, r);
                  },
                  onScheduleTask: function (e, t, n, r) {
                    return e.scheduleTask(n, r);
                  },
                  onInvokeTask: function (e, t, n, r, o, i) {
                    return e.invokeTask(n, r, o, i);
                  },
                  onCancelTask: function (e, t, n, r) {
                    return e.cancelTask(n, r);
                  }
                },
                p = (function () {
                  function e(t, n, r) {
                    o(this, e),
                      (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
                      (this.zone = t),
                      (this._parentDelegate = n),
                      (this._forkZS = r && (r && r.onFork ? r : n._forkZS)),
                      (this._forkDlgt = r && (r.onFork ? n : n._forkDlgt)),
                      (this._forkCurrZone = r && (r.onFork ? this.zone : n._forkCurrZone)),
                      (this._interceptZS = r && (r.onIntercept ? r : n._interceptZS)),
                      (this._interceptDlgt = r && (r.onIntercept ? n : n._interceptDlgt)),
                      (this._interceptCurrZone = r && (r.onIntercept ? this.zone : n._interceptCurrZone)),
                      (this._invokeZS = r && (r.onInvoke ? r : n._invokeZS)),
                      (this._invokeDlgt = r && (r.onInvoke ? n : n._invokeDlgt)),
                      (this._invokeCurrZone = r && (r.onInvoke ? this.zone : n._invokeCurrZone)),
                      (this._handleErrorZS = r && (r.onHandleError ? r : n._handleErrorZS)),
                      (this._handleErrorDlgt = r && (r.onHandleError ? n : n._handleErrorDlgt)),
                      (this._handleErrorCurrZone = r && (r.onHandleError ? this.zone : n._handleErrorCurrZone)),
                      (this._scheduleTaskZS = r && (r.onScheduleTask ? r : n._scheduleTaskZS)),
                      (this._scheduleTaskDlgt = r && (r.onScheduleTask ? n : n._scheduleTaskDlgt)),
                      (this._scheduleTaskCurrZone = r && (r.onScheduleTask ? this.zone : n._scheduleTaskCurrZone)),
                      (this._invokeTaskZS = r && (r.onInvokeTask ? r : n._invokeTaskZS)),
                      (this._invokeTaskDlgt = r && (r.onInvokeTask ? n : n._invokeTaskDlgt)),
                      (this._invokeTaskCurrZone = r && (r.onInvokeTask ? this.zone : n._invokeTaskCurrZone)),
                      (this._cancelTaskZS = r && (r.onCancelTask ? r : n._cancelTaskZS)),
                      (this._cancelTaskDlgt = r && (r.onCancelTask ? n : n._cancelTaskDlgt)),
                      (this._cancelTaskCurrZone = r && (r.onCancelTask ? this.zone : n._cancelTaskCurrZone)),
                      (this._hasTaskZS = null),
                      (this._hasTaskDlgt = null),
                      (this._hasTaskDlgtOwner = null),
                      (this._hasTaskCurrZone = null);
                    var i = r && r.onHasTask;
                    (i || (n && n._hasTaskZS)) &&
                      ((this._hasTaskZS = i ? r : f),
                      (this._hasTaskDlgt = n),
                      (this._hasTaskDlgtOwner = this),
                      (this._hasTaskCurrZone = t),
                      r.onScheduleTask ||
                        ((this._scheduleTaskZS = f), (this._scheduleTaskDlgt = n), (this._scheduleTaskCurrZone = this.zone)),
                      r.onInvokeTask || ((this._invokeTaskZS = f), (this._invokeTaskDlgt = n), (this._invokeTaskCurrZone = this.zone)),
                      r.onCancelTask || ((this._cancelTaskZS = f), (this._cancelTaskDlgt = n), (this._cancelTaskCurrZone = this.zone)));
                  }
                  return (
                    i(e, [
                      {
                        key: "fork",
                        value: function (e, t) {
                          return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, e, t) : new c(e, t);
                        }
                      },
                      {
                        key: "intercept",
                        value: function (e, t, n) {
                          return this._interceptZS
                            ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, e, t, n)
                            : t;
                        }
                      },
                      {
                        key: "invoke",
                        value: function (e, t, n, r, o) {
                          return this._invokeZS
                            ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, e, t, n, r, o)
                            : t.apply(n, r);
                        }
                      },
                      {
                        key: "handleError",
                        value: function (e, t) {
                          return (
                            !this._handleErrorZS ||
                            this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, e, t)
                          );
                        }
                      },
                      {
                        key: "scheduleTask",
                        value: function (e, t) {
                          var n = t;
                          if (this._scheduleTaskZS)
                            this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner),
                              (n = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, e, t)) ||
                                (n = t);
                          else if (t.scheduleFn) t.scheduleFn(t);
                          else {
                            if (t.type != x) throw new Error("Task is missing scheduleFn.");
                            b(t);
                          }
                          return n;
                        }
                      },
                      {
                        key: "invokeTask",
                        value: function (e, t, n, r) {
                          return this._invokeTaskZS
                            ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, e, t, n, r)
                            : t.callback.apply(n, r);
                        }
                      },
                      {
                        key: "cancelTask",
                        value: function (e, t) {
                          var n;
                          if (this._cancelTaskZS) n = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, e, t);
                          else {
                            if (!t.cancelFn) throw Error("Task is not cancelable");
                            n = t.cancelFn(t);
                          }
                          return n;
                        }
                      },
                      {
                        key: "hasTask",
                        value: function (e, t) {
                          try {
                            this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, e, t);
                          } catch (n) {
                            this.handleError(e, n);
                          }
                        }
                      },
                      {
                        key: "_updateTaskCount",
                        value: function (e, t) {
                          var n = this._taskCounts,
                            r = n[e],
                            o = (n[e] = r + t);
                          if (o < 0) throw new Error("More tasks executed then were scheduled.");
                          (0 != r && 0 != o) ||
                            this.hasTask(this.zone, {
                              microTask: n.microTask > 0,
                              macroTask: n.macroTask > 0,
                              eventTask: n.eventTask > 0,
                              change: e
                            });
                        }
                      }
                    ]),
                    e
                  );
                })(),
                h = (function () {
                  function t(n, r, i, a, s, u) {
                    if (
                      (o(this, t),
                      (this._zone = null),
                      (this.runCount = 0),
                      (this._zoneDelegates = null),
                      (this._state = "notScheduled"),
                      (this.type = n),
                      (this.source = r),
                      (this.data = a),
                      (this.scheduleFn = s),
                      (this.cancelFn = u),
                      !i)
                    )
                      throw new Error("callback is not defined");
                    this.callback = i;
                    var c = this;
                    this.invoke =
                      n === A && a && a.useG
                        ? t.invokeTask
                        : function () {
                            return t.invokeTask.call(e, c, this, arguments);
                          };
                  }
                  return (
                    i(
                      t,
                      [
                        {
                          key: "zone",
                          get: function () {
                            return this._zone;
                          }
                        },
                        {
                          key: "state",
                          get: function () {
                            return this._state;
                          }
                        },
                        {
                          key: "cancelScheduleRequest",
                          value: function () {
                            this._transitionTo(w, S);
                          }
                        },
                        {
                          key: "_transitionTo",
                          value: function (e, t, n) {
                            if (this._state !== t && this._state !== n)
                              throw new Error(
                                ""
                                  .concat(this.type, " '")
                                  .concat(this.source, "': can not transition to '")
                                  .concat(e, "', expecting state '")
                                  .concat(t, "'")
                                  .concat(n ? " or '" + n + "'" : "", ", was '")
                                  .concat(this._state, "'.")
                              );
                            (this._state = e), e == w && (this._zoneDelegates = null);
                          }
                        },
                        {
                          key: "toString",
                          value: function () {
                            return this.data && void 0 !== this.data.handleId
                              ? this.data.handleId.toString()
                              : Object.prototype.toString.call(this);
                          }
                        },
                        {
                          key: "toJSON",
                          value: function () {
                            return {
                              type: this.type,
                              state: this.state,
                              source: this.source,
                              zone: this.zone.name,
                              runCount: this.runCount
                            };
                          }
                        }
                      ],
                      [
                        {
                          key: "invokeTask",
                          value: function (e, t, n) {
                            e || (e = this), L++;
                            try {
                              return e.runCount++, e.zone.runTask(e, t, n);
                            } finally {
                              1 == L && _(), L--;
                            }
                          }
                        }
                      ]
                    ),
                    t
                  );
                })(),
                d = s("setTimeout"),
                v = s("Promise"),
                y = s("then"),
                m = [],
                g = !1;
              function b(t) {
                if (0 === L && 0 === m.length)
                  if ((l || (e[v] && (l = e[v].resolve(0))), l)) {
                    var n = l[y];
                    n || (n = l.then), n.call(l, _);
                  } else e[d](_, 0);
                t && m.push(t);
              }
              function _() {
                if (!g) {
                  for (g = !0; m.length; ) {
                    var e = m;
                    m = [];
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      try {
                        n.zone.runTask(n, null, null);
                      } catch (r) {
                        D.onUnhandledError(r);
                      }
                    }
                  }
                  D.microtaskDrainDone(), (g = !1);
                }
              }
              var k = { name: "NO ZONE" },
                w = "notScheduled",
                S = "scheduling",
                T = "scheduled",
                E = "running",
                O = "canceling",
                P = "unknown",
                x = "microTask",
                C = "macroTask",
                A = "eventTask",
                I = {},
                D = {
                  symbol: s,
                  currentZoneFrame: function () {
                    return j;
                  },
                  onUnhandledError: N,
                  microtaskDrainDone: N,
                  scheduleMicroTask: b,
                  showUncaughtError: function () {
                    return !c[s("ignoreConsoleErrorUncaughtError")];
                  },
                  patchEventTarget: function () {
                    return [];
                  },
                  patchOnProperties: N,
                  patchMethod: function () {
                    return N;
                  },
                  bindArguments: function () {
                    return [];
                  },
                  patchThen: function () {
                    return N;
                  },
                  patchMacroTask: function () {
                    return N;
                  },
                  patchEventPrototype: function () {
                    return N;
                  },
                  isIEOrEdge: function () {
                    return !1;
                  },
                  getGlobalObjects: function () {},
                  ObjectDefineProperty: function () {
                    return N;
                  },
                  ObjectGetOwnPropertyDescriptor: function () {},
                  ObjectCreate: function () {},
                  ArraySlice: function () {
                    return [];
                  },
                  patchClass: function () {
                    return N;
                  },
                  wrapWithCurrentZone: function () {
                    return N;
                  },
                  filterProperties: function () {
                    return [];
                  },
                  attachOriginToPatched: function () {
                    return N;
                  },
                  _redefineProperty: function () {
                    return N;
                  },
                  patchCallbacks: function () {
                    return N;
                  }
                },
                j = { parent: null, zone: new c(null, null) },
                M = null,
                L = 0;
              function N() {}
              r("Zone", "Zone"), (e.Zone = c);
            })(("undefined" != typeof window && window) || ("undefined" != typeof self && self) || global),
            Object.getOwnPropertyDescriptor),
          s = Object.defineProperty,
          u = Object.getPrototypeOf,
          c = Object.create,
          l = Array.prototype.slice,
          f = "addEventListener",
          p = "removeEventListener",
          h = Zone.__symbol__(f),
          d = Zone.__symbol__(p),
          v = "true",
          y = "false",
          m = Zone.__symbol__("");
        function g(e, t) {
          return Zone.current.wrap(e, t);
        }
        function b(e, t, n, r, o) {
          return Zone.current.scheduleMacroTask(e, t, n, r, o);
        }
        var _ = Zone.__symbol__,
          k = "undefined" != typeof window,
          w = k ? window : void 0,
          S = (k && w) || ("object" == typeof self && self) || global,
          T = [null];
        function E(e, t) {
          for (var n = e.length - 1; n >= 0; n--) "function" == typeof e[n] && (e[n] = g(e[n], t + "_" + n));
          return e;
        }
        function O(e) {
          return !e || (!1 !== e.writable && !("function" == typeof e.get && void 0 === e.set));
        }
        var P = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
          x = !("nw" in S) && void 0 !== S.process && "[object process]" === {}.toString.call(S.process),
          C = !x && !P && !(!k || !w.HTMLElement),
          A = void 0 !== S.process && "[object process]" === {}.toString.call(S.process) && !P && !(!k || !w.HTMLElement),
          I = {},
          D = function (e) {
            if ((e = e || S.event)) {
              var t = I[e.type];
              t || (t = I[e.type] = _("ON_PROPERTY" + e.type));
              var n,
                r = this || e.target || S,
                o = r[t];
              if (C && r === w && "error" === e.type) {
                var i = e;
                !0 === (n = o && o.call(this, i.message, i.filename, i.lineno, i.colno, i.error)) && e.preventDefault();
              } else null == (n = o && o.apply(this, arguments)) || n || e.preventDefault();
              return n;
            }
          };
        function j(e, t, n) {
          var r = a(e, t);
          if ((!r && n && a(n, t) && (r = { enumerable: !0, configurable: !0 }), r && r.configurable)) {
            var o = _("on" + t + "patched");
            if (!e.hasOwnProperty(o) || !e[o]) {
              delete r.writable, delete r.value;
              var i = r.get,
                u = r.set,
                c = t.substr(2),
                l = I[c];
              l || (l = I[c] = _("ON_PROPERTY" + c)),
                (r.set = function (t) {
                  var n = this;
                  n || e !== S || (n = S),
                    n &&
                      (n[l] && n.removeEventListener(c, D),
                      u && u.apply(n, T),
                      "function" == typeof t ? ((n[l] = t), n.addEventListener(c, D, !1)) : (n[l] = null));
                }),
                (r.get = function () {
                  var n = this;
                  if ((n || e !== S || (n = S), !n)) return null;
                  var o = n[l];
                  if (o) return o;
                  if (i) {
                    var a = i && i.call(this);
                    if (a) return r.set.call(this, a), "function" == typeof n.removeAttribute && n.removeAttribute(t), a;
                  }
                  return null;
                }),
                s(e, t, r),
                (e[o] = !0);
            }
          }
        }
        function M(e, t, n) {
          if (t) for (var r = 0; r < t.length; r++) j(e, "on" + t[r], n);
          else {
            var o = [];
            for (var i in e) "on" == i.substr(0, 2) && o.push(i);
            for (var a = 0; a < o.length; a++) j(e, o[a], n);
          }
        }
        var L = _("originalInstance");
        function N(e) {
          var t = S[e];
          if (t) {
            (S[_(e)] = t),
              (S[e] = function () {
                var n = E(arguments, e);
                switch (n.length) {
                  case 0:
                    this[L] = new t();
                    break;
                  case 1:
                    this[L] = new t(n[0]);
                    break;
                  case 2:
                    this[L] = new t(n[0], n[1]);
                    break;
                  case 3:
                    this[L] = new t(n[0], n[1], n[2]);
                    break;
                  case 4:
                    this[L] = new t(n[0], n[1], n[2], n[3]);
                    break;
                  default:
                    throw new Error("Arg list too long.");
                }
              }),
              Z(S[e], t);
            var n,
              r = new t(function () {});
            for (n in r)
              ("XMLHttpRequest" === e && "responseBlob" === n) ||
                (function (t) {
                  "function" == typeof r[t]
                    ? (S[e].prototype[t] = function () {
                        return this[L][t].apply(this[L], arguments);
                      })
                    : s(S[e].prototype, t, {
                        set: function (n) {
                          "function" == typeof n ? ((this[L][t] = g(n, e + "." + t)), Z(this[L][t], n)) : (this[L][t] = n);
                        },
                        get: function () {
                          return this[L][t];
                        }
                      });
                })(n);
            for (n in t) "prototype" !== n && t.hasOwnProperty(n) && (S[e][n] = t[n]);
          }
        }
        function z(e, t, n) {
          for (var r = e; r && !r.hasOwnProperty(t); ) r = u(r);
          !r && e[t] && (r = e);
          var o = _(t),
            i = null;
          if (r && (!(i = r[o]) || !r.hasOwnProperty(o)) && ((i = r[o] = r[t]), O(r && a(r, t)))) {
            var s = n(i, o, t);
            (r[t] = function () {
              return s(this, arguments);
            }),
              Z(r[t], i);
          }
          return i;
        }
        function R(e, t, n) {
          var r = null;
          function o(e) {
            var t = e.data;
            return (
              (t.args[t.cbIdx] = function () {
                e.invoke.apply(this, arguments);
              }),
              r.apply(t.target, t.args),
              e
            );
          }
          r = z(e, t, function (e) {
            return function (t, r) {
              var i = n(t, r);
              return i.cbIdx >= 0 && "function" == typeof r[i.cbIdx] ? b(i.name, r[i.cbIdx], i, o) : e.apply(t, r);
            };
          });
        }
        function Z(e, t) {
          e[_("OriginalDelegate")] = t;
        }
        var F = !1,
          H = !1;
        function V() {
          if (F) return H;
          F = !0;
          try {
            var e = w.navigator.userAgent;
            (-1 === e.indexOf("MSIE ") && -1 === e.indexOf("Trident/") && -1 === e.indexOf("Edge/")) || (H = !0);
          } catch (t) {}
          return H;
        }
        Zone.__load_patch("ZoneAwarePromise", function (e, t, n) {
          var a = Object.getOwnPropertyDescriptor,
            s = Object.defineProperty,
            u = n.symbol,
            c = [],
            l = !0 === e[u("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
            f = u("Promise"),
            p = u("then");
          (n.onUnhandledError = function (e) {
            if (n.showUncaughtError()) {
              var t = e && e.rejection;
              t
                ? console.error(
                    "Unhandled Promise rejection:",
                    t instanceof Error ? t.message : t,
                    "; Zone:",
                    e.zone.name,
                    "; Task:",
                    e.task && e.task.source,
                    "; Value:",
                    t,
                    t instanceof Error ? t.stack : void 0
                  )
                : console.error(e);
            }
          }),
            (n.microtaskDrainDone = function () {
              for (
                var e = function () {
                  var e = c.shift();
                  try {
                    e.zone.runGuarded(function () {
                      if (e.throwOriginal) throw e.rejection;
                      throw e;
                    });
                  } catch (r) {
                    !(function (e) {
                      n.onUnhandledError(e);
                      try {
                        var r = t[h];
                        "function" == typeof r && r.call(this, e);
                      } catch (o) {}
                    })(r);
                  }
                };
                c.length;

              )
                e();
            });
          var h = u("unhandledPromiseRejectionHandler");
          function d(e) {
            return e && e.then;
          }
          function v(e) {
            return e;
          }
          function y(e) {
            return D.reject(e);
          }
          var m = u("state"),
            g = u("value"),
            b = u("finally"),
            _ = u("parentPromiseValue"),
            k = u("parentPromiseState"),
            w = null,
            S = !0,
            T = !1;
          function E(e, t) {
            return function (n) {
              try {
                P(e, t, n);
              } catch (r) {
                P(e, !1, r);
              }
            };
          }
          var O = u("currentTaskTrace");
          function P(e, r, o) {
            var i,
              a,
              u =
                ((i = !1),
                function (e) {
                  return function () {
                    i || ((i = !0), e.apply(null, arguments));
                  };
                });
            if (e === o) throw new TypeError("Promise resolved with itself");
            if (e[m] === w) {
              var f = null;
              try {
                ("object" != typeof o && "function" != typeof o) || (f = o && o.then);
              } catch (y) {
                return (
                  u(function () {
                    P(e, !1, y);
                  })(),
                  e
                );
              }
              if (r !== T && o instanceof D && o.hasOwnProperty(m) && o.hasOwnProperty(g) && o[m] !== w) C(o), P(e, o[m], o[g]);
              else if (r !== T && "function" == typeof f)
                try {
                  f.call(o, u(E(e, r)), u(E(e, !1)));
                } catch (y) {
                  u(function () {
                    P(e, !1, y);
                  })();
                }
              else {
                e[m] = r;
                var p = e[g];
                if (((e[g] = o), e[b] === b && r === S && ((e[m] = e[k]), (e[g] = e[_])), r === T && o instanceof Error)) {
                  var h = t.currentTask && t.currentTask.data && t.currentTask.data.__creationTrace__;
                  h && s(o, O, { configurable: !0, enumerable: !1, writable: !0, value: h });
                }
                for (var d = 0; d < p.length; ) A(e, p[d++], p[d++], p[d++], p[d++]);
                if (0 == p.length && r == T) {
                  e[m] = 0;
                  var v = o;
                  try {
                    throw new Error(
                      "Uncaught (in promise): " +
                        ((a = o) && a.toString === Object.prototype.toString
                          ? ((a.constructor && a.constructor.name) || "") + ": " + JSON.stringify(a)
                          : a
                          ? a.toString()
                          : Object.prototype.toString.call(a)) +
                        (o && o.stack ? "\n" + o.stack : "")
                    );
                  } catch (y) {
                    v = y;
                  }
                  l && (v.throwOriginal = !0),
                    (v.rejection = o),
                    (v.promise = e),
                    (v.zone = t.current),
                    (v.task = t.currentTask),
                    c.push(v),
                    n.scheduleMicroTask();
                }
              }
            }
            return e;
          }
          var x = u("rejectionHandledHandler");
          function C(e) {
            if (0 === e[m]) {
              try {
                var n = t[x];
                n && "function" == typeof n && n.call(this, { rejection: e[g], promise: e });
              } catch (o) {}
              e[m] = T;
              for (var r = 0; r < c.length; r++) e === c[r].promise && c.splice(r, 1);
            }
          }
          function A(e, t, n, r, o) {
            C(e);
            var i = e[m],
              a = i ? ("function" == typeof r ? r : v) : "function" == typeof o ? o : y;
            t.scheduleMicroTask(
              "Promise.then",
              function () {
                try {
                  var r = e[g],
                    o = !!n && b === n[b];
                  o && ((n[_] = r), (n[k] = i));
                  var s = t.run(a, void 0, o && a !== y && a !== v ? [] : [r]);
                  P(n, !0, s);
                } catch (u) {
                  P(n, !1, u);
                }
              },
              n
            );
          }
          var I = function () {},
            D = (function () {
              function e(t) {
                o(this, e);
                var n = this;
                if (!(n instanceof e)) throw new Error("Must be an instanceof Promise.");
                (n[m] = w), (n[g] = []);
                try {
                  t && t(E(n, S), E(n, T));
                } catch (r) {
                  P(n, !1, r);
                }
              }
              return (
                i(
                  e,
                  [
                    {
                      key: Symbol.toStringTag,
                      get: function () {
                        return "Promise";
                      }
                    },
                    {
                      key: Symbol.species,
                      get: function () {
                        return e;
                      }
                    },
                    {
                      key: "then",
                      value: function (n, r) {
                        var o = this.constructor[Symbol.species];
                        (o && "function" == typeof o) || (o = this.constructor || e);
                        var i = new o(I),
                          a = t.current;
                        return this[m] == w ? this[g].push(a, i, n, r) : A(this, a, i, n, r), i;
                      }
                    },
                    {
                      key: "catch",
                      value: function (e) {
                        return this.then(null, e);
                      }
                    },
                    {
                      key: "finally",
                      value: function (n) {
                        var r = this.constructor[Symbol.species];
                        (r && "function" == typeof r) || (r = e);
                        var o = new r(I);
                        o[b] = b;
                        var i = t.current;
                        return this[m] == w ? this[g].push(i, o, n, n) : A(this, i, o, n, n), o;
                      }
                    }
                  ],
                  [
                    {
                      key: "toString",
                      value: function () {
                        return "function ZoneAwarePromise() { [native code] }";
                      }
                    },
                    {
                      key: "resolve",
                      value: function (e) {
                        return P(new this(null), S, e);
                      }
                    },
                    {
                      key: "reject",
                      value: function (e) {
                        return P(new this(null), T, e);
                      }
                    },
                    {
                      key: "race",
                      value: function (e) {
                        var t,
                          n,
                          o = new this(function (e, r) {
                            (t = e), (n = r);
                          });
                        function i(e) {
                          t(e);
                        }
                        function a(e) {
                          n(e);
                        }
                        var s,
                          u = r(e);
                        try {
                          for (u.s(); !(s = u.n()).done; ) {
                            var c = s.value;
                            d(c) || (c = this.resolve(c)), c.then(i, a);
                          }
                        } catch (l) {
                          u.e(l);
                        } finally {
                          u.f();
                        }
                        return o;
                      }
                    },
                    {
                      key: "all",
                      value: function (t) {
                        return e.allWithCallback(t);
                      }
                    },
                    {
                      key: "allSettled",
                      value: function (t) {
                        return (this && this.prototype instanceof e ? this : e).allWithCallback(t, {
                          thenCallback: function (e) {
                            return { status: "fulfilled", value: e };
                          },
                          errorCallback: function (e) {
                            return { status: "rejected", reason: e };
                          }
                        });
                      }
                    },
                    {
                      key: "allWithCallback",
                      value: function (e, t) {
                        var n,
                          o,
                          i,
                          a = this,
                          s = new this(function (e, t) {
                            (n = e), (o = t);
                          }),
                          u = 2,
                          c = 0,
                          l = [],
                          f = r(e);
                        try {
                          var p = function () {
                            var e = i.value;
                            d(e) || (e = a.resolve(e));
                            var r = c;
                            try {
                              e.then(
                                function (e) {
                                  (l[r] = t ? t.thenCallback(e) : e), 0 == --u && n(l);
                                },
                                function (e) {
                                  t ? ((l[r] = t.errorCallback(e)), 0 == --u && n(l)) : o(e);
                                }
                              );
                            } catch (s) {
                              o(s);
                            }
                            u++, c++;
                          };
                          for (f.s(); !(i = f.n()).done; ) p();
                        } catch (h) {
                          f.e(h);
                        } finally {
                          f.f();
                        }
                        return 0 == (u -= 2) && n(l), s;
                      }
                    }
                  ]
                ),
                e
              );
            })();
          (D.resolve = D.resolve), (D.reject = D.reject), (D.race = D.race), (D.all = D.all);
          var j = (e[f] = e.Promise);
          e.Promise = D;
          var M = u("thenPatched");
          function L(e) {
            var t = e.prototype,
              n = a(t, "then");
            if (!n || (!1 !== n.writable && n.configurable)) {
              var r = t.then;
              (t[p] = r),
                (e.prototype.then = function (e, t) {
                  var n = this;
                  return new D(function (e, t) {
                    r.call(n, e, t);
                  }).then(e, t);
                }),
                (e[M] = !0);
            }
          }
          return (
            (n.patchThen = L),
            j &&
              (L(j),
              z(e, "fetch", function (e) {
                return (
                  (t = e),
                  function (e, n) {
                    var r = t.apply(e, n);
                    if (r instanceof D) return r;
                    var o = r.constructor;
                    return o[M] || L(o), r;
                  }
                );
                var t;
              })),
            (Promise[t.__symbol__("uncaughtPromiseErrors")] = c),
            D
          );
        }),
          Zone.__load_patch("toString", function (e) {
            var t = Function.prototype.toString,
              n = _("OriginalDelegate"),
              r = _("Promise"),
              o = _("Error"),
              i = function () {
                if ("function" == typeof this) {
                  var i = this[n];
                  if (i) return "function" == typeof i ? t.call(i) : Object.prototype.toString.call(i);
                  if (this === Promise) {
                    var a = e[r];
                    if (a) return t.call(a);
                  }
                  if (this === Error) {
                    var s = e[o];
                    if (s) return t.call(s);
                  }
                }
                return t.call(this);
              };
            (i[n] = t), (Function.prototype.toString = i);
            var a = Object.prototype.toString;
            Object.prototype.toString = function () {
              return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : a.call(this);
            };
          });
        var U = !1;
        if ("undefined" != typeof window)
          try {
            var B = Object.defineProperty({}, "passive", {
              get: function () {
                U = !0;
              }
            });
            window.addEventListener("test", B, B), window.removeEventListener("test", B, B);
          } catch (me) {
            U = !1;
          }
        var W = { useG: !0 },
          G = {},
          q = {},
          K = new RegExp("^" + m + "(\\w+)(true|false)$"),
          Y = _("propagationStopped");
        function J(e, t) {
          var n = (t ? t(e) : e) + y,
            r = (t ? t(e) : e) + v,
            o = m + n,
            i = m + r;
          (G[e] = {}), (G[e].false = o), (G[e].true = i);
        }
        function X(e, t, n) {
          var r = (n && n.add) || f,
            o = (n && n.rm) || p,
            i = (n && n.listeners) || "eventListeners",
            a = (n && n.rmAll) || "removeAllListeners",
            s = _(r),
            c = "." + r + ":",
            l = function (e, t, n) {
              if (!e.isRemoved) {
                var r = e.callback;
                "object" == typeof r &&
                  r.handleEvent &&
                  ((e.callback = function (e) {
                    return r.handleEvent(e);
                  }),
                  (e.originalDelegate = r)),
                  e.invoke(e, t, [n]);
                var i = e.options;
                i && "object" == typeof i && i.once && t[o].call(t, n.type, e.originalDelegate ? e.originalDelegate : e.callback, i);
              }
            },
            h = function (t) {
              if ((t = t || e.event)) {
                var n = this || t.target || e,
                  r = n[G[t.type].false];
                if (r)
                  if (1 === r.length) l(r[0], n, t);
                  else for (var o = r.slice(), i = 0; i < o.length && (!t || !0 !== t[Y]); i++) l(o[i], n, t);
              }
            },
            d = function (t) {
              if ((t = t || e.event)) {
                var n = this || t.target || e,
                  r = n[G[t.type].true];
                if (r)
                  if (1 === r.length) l(r[0], n, t);
                  else for (var o = r.slice(), i = 0; i < o.length && (!t || !0 !== t[Y]); i++) l(o[i], n, t);
              }
            };
          function g(t, n) {
            if (!t) return !1;
            var l = !0;
            n && void 0 !== n.useG && (l = n.useG);
            var f = n && n.vh,
              p = !0;
            n && void 0 !== n.chkDup && (p = n.chkDup);
            var g = !1;
            n && void 0 !== n.rt && (g = n.rt);
            for (var b = t; b && !b.hasOwnProperty(r); ) b = u(b);
            if ((!b && t[r] && (b = t), !b)) return !1;
            if (b[s]) return !1;
            var k,
              w = n && n.eventNameToString,
              S = {},
              T = (b[s] = b[r]),
              E = (b[_(o)] = b[o]),
              O = (b[_(i)] = b[i]),
              P = (b[_(a)] = b[a]);
            function C(e, t) {
              return !U && "object" == typeof e && e
                ? !!e.capture
                : U && t
                ? "boolean" == typeof e
                  ? { capture: e, passive: !0 }
                  : e
                  ? "object" == typeof e && !1 !== e.passive
                    ? Object.assign(Object.assign({}, e), { passive: !0 })
                    : e
                  : { passive: !0 }
                : e;
            }
            n && n.prepend && (k = b[_(n.prepend)] = b[n.prepend]);
            var A = l
                ? function (e) {
                    if (!S.isExisting) return T.call(S.target, S.eventName, S.capture ? d : h, S.options);
                  }
                : function (e) {
                    return T.call(S.target, S.eventName, e.invoke, S.options);
                  },
              I = l
                ? function (e) {
                    if (!e.isRemoved) {
                      var t,
                        n = G[e.eventName];
                      n && (t = n[e.capture ? v : y]);
                      var r = t && e.target[t];
                      if (r)
                        for (var o = 0; o < r.length; o++)
                          if (r[o] === e) {
                            r.splice(o, 1), (e.isRemoved = !0), 0 === r.length && ((e.allRemoved = !0), (e.target[t] = null));
                            break;
                          }
                    }
                    if (e.allRemoved) return E.call(e.target, e.eventName, e.capture ? d : h, e.options);
                  }
                : function (e) {
                    return E.call(e.target, e.eventName, e.invoke, e.options);
                  },
              D =
                n && n.diff
                  ? n.diff
                  : function (e, t) {
                      var n = typeof t;
                      return ("function" === n && e.callback === t) || ("object" === n && e.originalDelegate === t);
                    },
              j = Zone[_("UNPATCHED_EVENTS")],
              M = e[_("PASSIVE_EVENTS")],
              L = function (t, r, o, i) {
                var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                  s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                return function () {
                  var u = this || e,
                    c = arguments[0];
                  n && n.transferEventName && (c = n.transferEventName(c));
                  var h = arguments[1];
                  if (!h) return t.apply(this, arguments);
                  if (x && "uncaughtException" === c) return t.apply(this, arguments);
                  var d = !1;
                  if ("function" != typeof h) {
                    if (!h.handleEvent) return t.apply(this, arguments);
                    d = !0;
                  }
                  if (!f || f(t, h, u, arguments)) {
                    var m = U && !!M && -1 !== M.indexOf(c),
                      g = C(arguments[2], m);
                    if (j) for (var b = 0; b < j.length; b++) if (c === j[b]) return m ? t.call(u, c, h, g) : t.apply(this, arguments);
                    var _ = !!g && ("boolean" == typeof g || g.capture),
                      k = !(!g || "object" != typeof g) && g.once,
                      T = Zone.current,
                      E = G[c];
                    E || (J(c, w), (E = G[c]));
                    var O,
                      P = E[_ ? v : y],
                      A = u[P],
                      I = !1;
                    if (A) {
                      if (((I = !0), p)) for (var L = 0; L < A.length; L++) if (D(A[L], h)) return;
                    } else A = u[P] = [];
                    var N = u.constructor.name,
                      z = q[N];
                    z && (O = z[c]),
                      O || (O = N + r + (w ? w(c) : c)),
                      (S.options = g),
                      k && (S.options.once = !1),
                      (S.target = u),
                      (S.capture = _),
                      (S.eventName = c),
                      (S.isExisting = I);
                    var R = l ? W : void 0;
                    R && (R.taskData = S);
                    var Z = T.scheduleEventTask(O, h, R, o, i);
                    return (
                      (S.target = null),
                      R && (R.taskData = null),
                      k && (g.once = !0),
                      (U || "boolean" != typeof Z.options) && (Z.options = g),
                      (Z.target = u),
                      (Z.capture = _),
                      (Z.eventName = c),
                      d && (Z.originalDelegate = h),
                      s ? A.unshift(Z) : A.push(Z),
                      a ? u : void 0
                    );
                  }
                };
              };
            return (
              (b[r] = L(T, c, A, I, g)),
              k &&
                (b.prependListener = L(
                  k,
                  ".prependListener:",
                  function (e) {
                    return k.call(S.target, S.eventName, e.invoke, S.options);
                  },
                  I,
                  g,
                  !0
                )),
              (b[o] = function () {
                var t = this || e,
                  r = arguments[0];
                n && n.transferEventName && (r = n.transferEventName(r));
                var o = arguments[2],
                  i = !!o && ("boolean" == typeof o || o.capture),
                  a = arguments[1];
                if (!a) return E.apply(this, arguments);
                if (!f || f(E, a, t, arguments)) {
                  var s,
                    u = G[r];
                  u && (s = u[i ? v : y]);
                  var c = s && t[s];
                  if (c)
                    for (var l = 0; l < c.length; l++) {
                      var p = c[l];
                      if (D(p, a)) {
                        if (
                          (c.splice(l, 1), (p.isRemoved = !0), 0 === c.length && ((p.allRemoved = !0), (t[s] = null), "string" == typeof r))
                        ) {
                          var h = m + "ON_PROPERTY" + r;
                          t[h] = null;
                        }
                        return p.zone.cancelTask(p), g ? t : void 0;
                      }
                    }
                  return E.apply(this, arguments);
                }
              }),
              (b[i] = function () {
                var t = this || e,
                  r = arguments[0];
                n && n.transferEventName && (r = n.transferEventName(r));
                for (var o = [], i = $(t, w ? w(r) : r), a = 0; a < i.length; a++) {
                  var s = i[a],
                    u = s.originalDelegate ? s.originalDelegate : s.callback;
                  o.push(u);
                }
                return o;
              }),
              (b[a] = function () {
                var t = this || e,
                  r = arguments[0];
                if (r) {
                  n && n.transferEventName && (r = n.transferEventName(r));
                  var i = G[r];
                  if (i) {
                    var s = i.false,
                      u = i.true,
                      c = t[s],
                      l = t[u];
                    if (c)
                      for (var f = c.slice(), p = 0; p < f.length; p++) {
                        var h = f[p],
                          d = h.originalDelegate ? h.originalDelegate : h.callback;
                        this[o].call(this, r, d, h.options);
                      }
                    if (l)
                      for (var v = l.slice(), y = 0; y < v.length; y++) {
                        var m = v[y],
                          b = m.originalDelegate ? m.originalDelegate : m.callback;
                        this[o].call(this, r, b, m.options);
                      }
                  }
                } else {
                  for (var _ = Object.keys(t), k = 0; k < _.length; k++) {
                    var w = _[k],
                      S = K.exec(w),
                      T = S && S[1];
                    T && "removeListener" !== T && this[a].call(this, T);
                  }
                  this[a].call(this, "removeListener");
                }
                if (g) return this;
              }),
              Z(b[r], T),
              Z(b[o], E),
              P && Z(b[a], P),
              O && Z(b[i], O),
              !0
            );
          }
          for (var b = [], k = 0; k < t.length; k++) b[k] = g(t[k], n);
          return b;
        }
        function $(e, t) {
          if (!t) {
            var n = [];
            for (var r in e) {
              var o = K.exec(r),
                i = o && o[1];
              if (i && (!t || i === t)) {
                var a = e[r];
                if (a) for (var s = 0; s < a.length; s++) n.push(a[s]);
              }
            }
            return n;
          }
          var u = G[t];
          u || (J(t), (u = G[t]));
          var c = e[u.false],
            l = e[u.true];
          return c ? (l ? c.concat(l) : c.slice()) : l ? l.slice() : [];
        }
        function Q(e, t) {
          var n = e.Event;
          n &&
            n.prototype &&
            t.patchMethod(n.prototype, "stopImmediatePropagation", function (e) {
              return function (t, n) {
                (t[Y] = !0), e && e.apply(t, n);
              };
            });
        }
        function ee(e, t, n, r, o) {
          var i = Zone.__symbol__(r);
          if (!t[i]) {
            var a = (t[i] = t[r]);
            (t[r] = function (i, s, u) {
              return (
                s &&
                  s.prototype &&
                  o.forEach(function (t) {
                    var o = "".concat(n, ".").concat(r, "::") + t,
                      i = s.prototype;
                    if (i.hasOwnProperty(t)) {
                      var a = e.ObjectGetOwnPropertyDescriptor(i, t);
                      a && a.value
                        ? ((a.value = e.wrapWithCurrentZone(a.value, o)), e._redefineProperty(s.prototype, t, a))
                        : i[t] && (i[t] = e.wrapWithCurrentZone(i[t], o));
                    } else i[t] && (i[t] = e.wrapWithCurrentZone(i[t], o));
                  }),
                a.call(t, i, s, u)
              );
            }),
              e.attachOriginToPatched(t[r], a);
          }
        }
        var te = [
            "absolutedeviceorientation",
            "afterinput",
            "afterprint",
            "appinstalled",
            "beforeinstallprompt",
            "beforeprint",
            "beforeunload",
            "devicelight",
            "devicemotion",
            "deviceorientation",
            "deviceorientationabsolute",
            "deviceproximity",
            "hashchange",
            "languagechange",
            "message",
            "mozbeforepaint",
            "offline",
            "online",
            "paint",
            "pageshow",
            "pagehide",
            "popstate",
            "rejectionhandled",
            "storage",
            "unhandledrejection",
            "unload",
            "userproximity",
            "vrdisplayconnected",
            "vrdisplaydisconnected",
            "vrdisplaypresentchange"
          ],
          ne = ["encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend"],
          re = ["load"],
          oe = ["blur", "error", "focus", "load", "resize", "scroll", "messageerror"],
          ie = ["bounce", "finish", "start"],
          ae = ["loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange"],
          se = ["upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close"],
          ue = ["close", "error", "open", "message"],
          ce = ["error", "message"],
          le = [
            "abort",
            "animationcancel",
            "animationend",
            "animationiteration",
            "auxclick",
            "beforeinput",
            "blur",
            "cancel",
            "canplay",
            "canplaythrough",
            "change",
            "compositionstart",
            "compositionupdate",
            "compositionend",
            "cuechange",
            "click",
            "close",
            "contextmenu",
            "curechange",
            "dblclick",
            "drag",
            "dragend",
            "dragenter",
            "dragexit",
            "dragleave",
            "dragover",
            "drop",
            "durationchange",
            "emptied",
            "ended",
            "error",
            "focus",
            "focusin",
            "focusout",
            "gotpointercapture",
            "input",
            "invalid",
            "keydown",
            "keypress",
            "keyup",
            "load",
            "loadstart",
            "loadeddata",
            "loadedmetadata",
            "lostpointercapture",
            "mousedown",
            "mouseenter",
            "mouseleave",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "mousewheel",
            "orientationchange",
            "pause",
            "play",
            "playing",
            "pointercancel",
            "pointerdown",
            "pointerenter",
            "pointerleave",
            "pointerlockchange",
            "mozpointerlockchange",
            "webkitpointerlockerchange",
            "pointerlockerror",
            "mozpointerlockerror",
            "webkitpointerlockerror",
            "pointermove",
            "pointout",
            "pointerover",
            "pointerup",
            "progress",
            "ratechange",
            "reset",
            "resize",
            "scroll",
            "seeked",
            "seeking",
            "select",
            "selectionchange",
            "selectstart",
            "show",
            "sort",
            "stalled",
            "submit",
            "suspend",
            "timeupdate",
            "volumechange",
            "touchcancel",
            "touchmove",
            "touchstart",
            "touchend",
            "transitioncancel",
            "transitionend",
            "waiting",
            "wheel"
          ].concat(
            ["webglcontextrestored", "webglcontextlost", "webglcontextcreationerror"],
            ["autocomplete", "autocompleteerror"],
            ["toggle"],
            [
              "afterscriptexecute",
              "beforescriptexecute",
              "DOMContentLoaded",
              "freeze",
              "fullscreenchange",
              "mozfullscreenchange",
              "webkitfullscreenchange",
              "msfullscreenchange",
              "fullscreenerror",
              "mozfullscreenerror",
              "webkitfullscreenerror",
              "msfullscreenerror",
              "readystatechange",
              "visibilitychange",
              "resume"
            ],
            te,
            [
              "beforecopy",
              "beforecut",
              "beforepaste",
              "copy",
              "cut",
              "paste",
              "dragstart",
              "loadend",
              "animationstart",
              "search",
              "transitionrun",
              "transitionstart",
              "webkitanimationend",
              "webkitanimationiteration",
              "webkitanimationstart",
              "webkittransitionend"
            ],
            [
              "activate",
              "afterupdate",
              "ariarequest",
              "beforeactivate",
              "beforedeactivate",
              "beforeeditfocus",
              "beforeupdate",
              "cellchange",
              "controlselect",
              "dataavailable",
              "datasetchanged",
              "datasetcomplete",
              "errorupdate",
              "filterchange",
              "layoutcomplete",
              "losecapture",
              "move",
              "moveend",
              "movestart",
              "propertychange",
              "resizeend",
              "resizestart",
              "rowenter",
              "rowexit",
              "rowsdelete",
              "rowsinserted",
              "command",
              "compassneedscalibration",
              "deactivate",
              "help",
              "mscontentzoom",
              "msmanipulationstatechanged",
              "msgesturechange",
              "msgesturedoubletap",
              "msgestureend",
              "msgesturehold",
              "msgesturestart",
              "msgesturetap",
              "msgotpointercapture",
              "msinertiastart",
              "mslostpointercapture",
              "mspointercancel",
              "mspointerdown",
              "mspointerenter",
              "mspointerhover",
              "mspointerleave",
              "mspointermove",
              "mspointerout",
              "mspointerover",
              "mspointerup",
              "pointerout",
              "mssitemodejumplistitemremoved",
              "msthumbnailclick",
              "stop",
              "storagecommit"
            ]
          );
        function fe(e, t, n) {
          if (!n || 0 === n.length) return t;
          var r = n.filter(function (t) {
            return t.target === e;
          });
          if (!r || 0 === r.length) return t;
          var o = r[0].ignoreProperties;
          return t.filter(function (e) {
            return -1 === o.indexOf(e);
          });
        }
        function pe(e, t, n, r) {
          e && M(e, fe(e, t, n), r);
        }
        function he(e, t) {
          if ((!x || A) && !Zone[e.symbol("patchEvents")]) {
            var n = "undefined" != typeof WebSocket,
              r = t.__Zone_ignore_on_properties;
            if (C) {
              var o = window,
                i = (function () {
                  try {
                    var e = w.navigator.userAgent;
                    if (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/")) return !0;
                  } catch (t) {}
                  return !1;
                })()
                  ? [{ target: o, ignoreProperties: ["error"] }]
                  : [];
              pe(o, le.concat(["messageerror"]), r ? r.concat(i) : r, u(o)),
                pe(Document.prototype, le, r),
                void 0 !== o.SVGElement && pe(o.SVGElement.prototype, le, r),
                pe(Element.prototype, le, r),
                pe(HTMLElement.prototype, le, r),
                pe(HTMLMediaElement.prototype, ne, r),
                pe(HTMLFrameSetElement.prototype, te.concat(oe), r),
                pe(HTMLBodyElement.prototype, te.concat(oe), r),
                pe(HTMLFrameElement.prototype, re, r),
                pe(HTMLIFrameElement.prototype, re, r);
              var a = o.HTMLMarqueeElement;
              a && pe(a.prototype, ie, r);
              var s = o.Worker;
              s && pe(s.prototype, ce, r);
            }
            var c = t.XMLHttpRequest;
            c && pe(c.prototype, ae, r);
            var l = t.XMLHttpRequestEventTarget;
            l && pe(l && l.prototype, ae, r),
              "undefined" != typeof IDBIndex &&
                (pe(IDBIndex.prototype, se, r),
                pe(IDBRequest.prototype, se, r),
                pe(IDBOpenDBRequest.prototype, se, r),
                pe(IDBDatabase.prototype, se, r),
                pe(IDBTransaction.prototype, se, r),
                pe(IDBCursor.prototype, se, r)),
              n && pe(WebSocket.prototype, ue, r);
          }
        }
        Zone.__load_patch("util", function (e, t, n) {
          (n.patchOnProperties = M), (n.patchMethod = z), (n.bindArguments = E), (n.patchMacroTask = R);
          var r = t.__symbol__("BLACK_LISTED_EVENTS"),
            o = t.__symbol__("UNPATCHED_EVENTS");
          e[o] && (e[r] = e[o]),
            e[r] && (t[r] = t[o] = e[r]),
            (n.patchEventPrototype = Q),
            (n.patchEventTarget = X),
            (n.isIEOrEdge = V),
            (n.ObjectDefineProperty = s),
            (n.ObjectGetOwnPropertyDescriptor = a),
            (n.ObjectCreate = c),
            (n.ArraySlice = l),
            (n.patchClass = N),
            (n.wrapWithCurrentZone = g),
            (n.filterProperties = fe),
            (n.attachOriginToPatched = Z),
            (n._redefineProperty = Object.defineProperty),
            (n.patchCallbacks = ee),
            (n.getGlobalObjects = function () {
              return {
                globalSources: q,
                zoneSymbolEventNames: G,
                eventNames: le,
                isBrowser: C,
                isMix: A,
                isNode: x,
                TRUE_STR: v,
                FALSE_STR: y,
                ZONE_SYMBOL_PREFIX: m,
                ADD_EVENT_LISTENER_STR: f,
                REMOVE_EVENT_LISTENER_STR: p
              };
            });
        });
        var de = _("zoneTask");
        function ve(e, t, n, r) {
          var o = null,
            i = null;
          n += r;
          var a = {};
          function s(t) {
            var n = t.data;
            return (
              (n.args[0] = function () {
                return t.invoke.apply(this, arguments);
              }),
              (n.handleId = o.apply(e, n.args)),
              t
            );
          }
          function u(t) {
            return i.call(e, t.data.handleId);
          }
          (o = z(e, (t += r), function (n) {
            return function (o, i) {
              if ("function" == typeof i[0]) {
                var c = { isPeriodic: "Interval" === r, delay: "Timeout" === r || "Interval" === r ? i[1] || 0 : void 0, args: i },
                  l = i[0];
                i[0] = function () {
                  try {
                    return l.apply(this, arguments);
                  } finally {
                    c.isPeriodic || ("number" == typeof c.handleId ? delete a[c.handleId] : c.handleId && (c.handleId[de] = null));
                  }
                };
                var f = b(t, i[0], c, s, u);
                if (!f) return f;
                var p = f.data.handleId;
                return (
                  "number" == typeof p ? (a[p] = f) : p && (p[de] = f),
                  p &&
                    p.ref &&
                    p.unref &&
                    "function" == typeof p.ref &&
                    "function" == typeof p.unref &&
                    ((f.ref = p.ref.bind(p)), (f.unref = p.unref.bind(p))),
                  "number" == typeof p || p ? p : f
                );
              }
              return n.apply(e, i);
            };
          })),
            (i = z(e, n, function (t) {
              return function (n, r) {
                var o,
                  i = r[0];
                "number" == typeof i ? (o = a[i]) : (o = i && i[de]) || (o = i),
                  o && "string" == typeof o.type
                    ? "notScheduled" !== o.state &&
                      ((o.cancelFn && o.data.isPeriodic) || 0 === o.runCount) &&
                      ("number" == typeof i ? delete a[i] : i && (i[de] = null), o.zone.cancelTask(o))
                    : t.apply(e, r);
              };
            }));
        }
        function ye(e, t) {
          if (!Zone[t.symbol("patchEventTarget")]) {
            for (
              var n = t.getGlobalObjects(),
                r = n.eventNames,
                o = n.zoneSymbolEventNames,
                i = n.TRUE_STR,
                a = n.FALSE_STR,
                s = n.ZONE_SYMBOL_PREFIX,
                u = 0;
              u < r.length;
              u++
            ) {
              var c = r[u],
                l = s + (c + a),
                f = s + (c + i);
              (o[c] = {}), (o[c][a] = l), (o[c][i] = f);
            }
            var p = e.EventTarget;
            if (p && p.prototype) return t.patchEventTarget(e, [p && p.prototype]), !0;
          }
        }
        Zone.__load_patch("legacy", function (e) {
          var t = e[Zone.__symbol__("legacyPatch")];
          t && t();
        }),
          Zone.__load_patch("queueMicrotask", function (e, t, n) {
            n.patchMethod(e, "queueMicrotask", function (e) {
              return function (e, n) {
                t.current.scheduleMicroTask("queueMicrotask", n[0]);
              };
            });
          }),
          Zone.__load_patch("timers", function (e) {
            var t = "set",
              n = "clear";
            ve(e, t, n, "Timeout"), ve(e, t, n, "Interval"), ve(e, t, n, "Immediate");
          }),
          Zone.__load_patch("requestAnimationFrame", function (e) {
            ve(e, "request", "cancel", "AnimationFrame"),
              ve(e, "mozRequest", "mozCancel", "AnimationFrame"),
              ve(e, "webkitRequest", "webkitCancel", "AnimationFrame");
          }),
          Zone.__load_patch("blocking", function (e, t) {
            for (var n = ["alert", "prompt", "confirm"], r = 0; r < n.length; r++)
              z(e, n[r], function (n, r, o) {
                return function (r, i) {
                  return t.current.run(n, e, i, o);
                };
              });
          }),
          Zone.__load_patch("EventTarget", function (e, t, n) {
            !(function (e, t) {
              t.patchEventPrototype(e, t);
            })(e, n),
              ye(e, n);
            var r = e.XMLHttpRequestEventTarget;
            r && r.prototype && n.patchEventTarget(e, [r.prototype]);
          }),
          Zone.__load_patch("MutationObserver", function (e, t, n) {
            N("MutationObserver"), N("WebKitMutationObserver");
          }),
          Zone.__load_patch("IntersectionObserver", function (e, t, n) {
            N("IntersectionObserver");
          }),
          Zone.__load_patch("FileReader", function (e, t, n) {
            N("FileReader");
          }),
          Zone.__load_patch("on_property", function (e, t, n) {
            he(n, e);
          }),
          Zone.__load_patch("customElements", function (e, t, n) {
            !(function (e, t) {
              var n = t.getGlobalObjects();
              (n.isBrowser || n.isMix) &&
                e.customElements &&
                "customElements" in e &&
                t.patchCallbacks(t, e.customElements, "customElements", "define", [
                  "connectedCallback",
                  "disconnectedCallback",
                  "adoptedCallback",
                  "attributeChangedCallback"
                ]);
            })(e, n);
          }),
          Zone.__load_patch("XHR", function (e, t) {
            !(function (e) {
              var u = e.XMLHttpRequest;
              if (u) {
                var c = u.prototype,
                  l = c[h],
                  f = c[d];
                if (!l) {
                  var p = e.XMLHttpRequestEventTarget;
                  if (p) {
                    var v = p.prototype;
                    (l = v[h]), (f = v[d]);
                  }
                }
                var y = "readystatechange",
                  m = "scheduled",
                  g = z(c, "open", function () {
                    return function (e, t) {
                      return (e[r] = 0 == t[2]), (e[a] = t[1]), g.apply(e, t);
                    };
                  }),
                  k = _("fetchTaskAborting"),
                  w = _("fetchTaskScheduling"),
                  S = z(c, "send", function () {
                    return function (e, n) {
                      if (!0 === t.current[w]) return S.apply(e, n);
                      if (e[r]) return S.apply(e, n);
                      var o = { target: e, url: e[a], isPeriodic: !1, args: n, aborted: !1 },
                        i = b("XMLHttpRequest.send", O, o, E, P);
                      e && !0 === e[s] && !o.aborted && i.state === m && i.invoke();
                    };
                  }),
                  T = z(c, "abort", function () {
                    return function (e, r) {
                      var o = e[n];
                      if (o && "string" == typeof o.type) {
                        if (null == o.cancelFn || (o.data && o.data.aborted)) return;
                        o.zone.cancelTask(o);
                      } else if (!0 === t.current[k]) return T.apply(e, r);
                    };
                  });
              }
              function E(e) {
                var r = e.data,
                  a = r.target;
                (a[i] = !1), (a[s] = !1);
                var u = a[o];
                l || ((l = a[h]), (f = a[d])), u && f.call(a, y, u);
                var c = (a[o] = function () {
                  if (a.readyState === a.DONE)
                    if (!r.aborted && a[i] && e.state === m) {
                      var n = a[t.__symbol__("loadfalse")];
                      if (0 !== a.status && n && n.length > 0) {
                        var o = e.invoke;
                        (e.invoke = function () {
                          for (var n = a[t.__symbol__("loadfalse")], i = 0; i < n.length; i++) n[i] === e && n.splice(i, 1);
                          r.aborted || e.state !== m || o.call(e);
                        }),
                          n.push(e);
                      } else e.invoke();
                    } else r.aborted || !1 !== a[i] || (a[s] = !0);
                });
                return l.call(a, y, c), a[n] || (a[n] = e), S.apply(a, r.args), (a[i] = !0), e;
              }
              function O() {}
              function P(e) {
                var t = e.data;
                return (t.aborted = !0), T.apply(t.target, t.args);
              }
            })(e);
            var n = _("xhrTask"),
              r = _("xhrSync"),
              o = _("xhrListener"),
              i = _("xhrScheduled"),
              a = _("xhrURL"),
              s = _("xhrErrorBeforeScheduled");
          }),
          Zone.__load_patch("geolocation", function (e) {
            e.navigator &&
              e.navigator.geolocation &&
              (function (e, t) {
                for (
                  var n = e.constructor.name,
                    r = function (r) {
                      var o = t[r],
                        i = e[o];
                      if (i) {
                        if (!O(a(e, o))) return "continue";
                        e[o] = (function (e) {
                          var t = function () {
                            return e.apply(this, E(arguments, n + "." + o));
                          };
                          return Z(t, e), t;
                        })(i);
                      }
                    },
                    o = 0;
                  o < t.length;
                  o++
                )
                  r(o);
              })(e.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
          }),
          Zone.__load_patch("PromiseRejectionEvent", function (e, t) {
            function n(t) {
              return function (n) {
                $(e, t).forEach(function (r) {
                  var o = e.PromiseRejectionEvent;
                  if (o) {
                    var i = new o(t, { promise: n.promise, reason: n.rejection });
                    r.invoke(i);
                  }
                });
              };
            }
            e.PromiseRejectionEvent &&
              ((t[_("unhandledPromiseRejectionHandler")] = n("unhandledrejection")),
              (t[_("rejectionHandledHandler")] = n("rejectionhandled")));
          });
      }
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
    (function () {
      "use strict";
      n(98981), window.navigator.userAgent.includes("Macintosh");
      var e = window.chrome && !(!chrome.runtime || !chrome.runtime.id);
      function t(e) {
        return e instanceof Error ? Promise.reject(e.toString()) : Promise.reject(e);
      }
      function r(e, n) {
        Promise.resolve(n)
          .catch(t)
          .then(
            function (t) {
              e({ type: "result", data: t });
            },
            function (t) {
              e({ type: "error", data: t });
            }
          );
      }
      window, window;
      var o = function (e, t) {
        return (o =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
          this.constructor = e;
        }
        o(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      }
      var a = function () {
        return (a =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t, n, r) {
        var o,
          i = arguments.length,
          a = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }
      function c(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function l(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (s) {
                  (i = [6, s]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function p(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
        } catch (s) {
          o = { error: s };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function h(e, t) {
        for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
        return e;
      }
      function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function y(e, t, n) {
        return t && v(e.prototype, t), n && v(e, n), e;
      }
      function m(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function b(e, t, n) {
        return (b =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var r = (function (e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = g(e)); );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function _(e, t) {
        return (_ =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function k(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && _(e, t);
      }
      function w(e) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function S(e, t) {
        return !t || ("object" !== w(t) && "function" != typeof t) ? m(e) : t;
      }
      function T(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = g(e);
          if (t) {
            var o = g(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return S(this, n);
        };
      }
      function E(e) {
        return "function" == typeof e;
      }
      var O = !1,
        P = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            if (e) {
              var t = new Error();
              console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack);
            } else O && console.log("RxJS: Back to a better error behavior. Thank you. <3");
            O = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return O;
          }
        };
      function x(e) {
        setTimeout(function () {
          throw e;
        }, 0);
      }
      var C = {
          closed: !0,
          next: function (e) {},
          error: function (e) {
            if (P.useDeprecatedSynchronousErrorHandling) throw e;
            x(e);
          },
          complete: function () {}
        },
        A = (function () {
          return (
            Array.isArray ||
            function (e) {
              return e && "number" == typeof e.length;
            }
          );
        })();
      function I(e) {
        return null !== e && "object" == typeof e;
      }
      var D = (function () {
          function e(e) {
            return (
              Error.call(this),
              (this.message = e
                ? "".concat(e.length, " errors occurred during unsubscription:\n").concat(
                    e
                      .map(function (e, t) {
                        return "".concat(t + 1, ") ").concat(e.toString());
                      })
                      .join("\n  ")
                  )
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = e),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        j = (function () {
          var e = (function () {
            function e(t) {
              d(this, e),
                (this.closed = !1),
                (this._parentOrParents = null),
                (this._subscriptions = null),
                t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
            }
            return (
              y(e, [
                {
                  key: "unsubscribe",
                  value: function () {
                    var t;
                    if (!this.closed) {
                      var n = this._parentOrParents,
                        r = this._ctorUnsubscribe,
                        o = this._unsubscribe,
                        i = this._subscriptions;
                      if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof e))
                        n.remove(this);
                      else if (null !== n) for (var a = 0; a < n.length; ++a) n[a].remove(this);
                      if (E(o)) {
                        r && (this._unsubscribe = void 0);
                        try {
                          o.call(this);
                        } catch (l) {
                          t = l instanceof D ? M(l.errors) : [l];
                        }
                      }
                      if (A(i))
                        for (var s = -1, u = i.length; ++s < u; ) {
                          var c = i[s];
                          if (I(c))
                            try {
                              c.unsubscribe();
                            } catch (l) {
                              (t = t || []), l instanceof D ? (t = t.concat(M(l.errors))) : t.push(l);
                            }
                        }
                      if (t) throw new D(t);
                    }
                  }
                },
                {
                  key: "add",
                  value: function (t) {
                    var n = t;
                    if (!t) return e.EMPTY;
                    switch (typeof t) {
                      case "function":
                        n = new e(t);
                      case "object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof e)) {
                          var r = n;
                          (n = new e())._subscriptions = [r];
                        }
                        break;
                      default:
                        throw new Error("unrecognized teardown " + t + " added to Subscription.");
                    }
                    var o = n._parentOrParents;
                    if (null === o) n._parentOrParents = this;
                    else if (o instanceof e) {
                      if (o === this) return n;
                      n._parentOrParents = [o, this];
                    } else {
                      if (-1 !== o.indexOf(this)) return n;
                      o.push(this);
                    }
                    var i = this._subscriptions;
                    return null === i ? (this._subscriptions = [n]) : i.push(n), n;
                  }
                },
                {
                  key: "remove",
                  value: function (e) {
                    var t = this._subscriptions;
                    if (t) {
                      var n = t.indexOf(e);
                      -1 !== n && t.splice(n, 1);
                    }
                  }
                }
              ]),
              e
            );
          })();
          return (
            (e.EMPTY = (function (e) {
              return (e.closed = !0), e;
            })(new e())),
            e
          );
        })();
      function M(e) {
        return e.reduce(function (e, t) {
          return e.concat(t instanceof D ? t.errors : t);
        }, []);
      }
      var L = (function () {
          return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
        })(),
        N = (function (e) {
          k(n, e);
          var t = T(n);
          function n(e, r, o) {
            var i;
            switch (
              (d(this, n),
              ((i = t.call(this)).syncErrorValue = null),
              (i.syncErrorThrown = !1),
              (i.syncErrorThrowable = !1),
              (i.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                i.destination = C;
                break;
              case 1:
                if (!e) {
                  i.destination = C;
                  break;
                }
                if ("object" == typeof e) {
                  e instanceof n
                    ? ((i.syncErrorThrowable = e.syncErrorThrowable), (i.destination = e), e.add(m(i)))
                    : ((i.syncErrorThrowable = !0), (i.destination = new z(m(i), e)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0), (i.destination = new z(m(i), e, r, o));
            }
            return i;
          }
          return (
            y(
              n,
              [
                {
                  key: L,
                  value: function () {
                    return this;
                  }
                },
                {
                  key: "next",
                  value: function (e) {
                    this.isStopped || this._next(e);
                  }
                },
                {
                  key: "error",
                  value: function (e) {
                    this.isStopped || ((this.isStopped = !0), this._error(e));
                  }
                },
                {
                  key: "complete",
                  value: function () {
                    this.isStopped || ((this.isStopped = !0), this._complete());
                  }
                },
                {
                  key: "unsubscribe",
                  value: function () {
                    this.closed || ((this.isStopped = !0), b(g(n.prototype), "unsubscribe", this).call(this));
                  }
                },
                {
                  key: "_next",
                  value: function (e) {
                    this.destination.next(e);
                  }
                },
                {
                  key: "_error",
                  value: function (e) {
                    this.destination.error(e), this.unsubscribe();
                  }
                },
                {
                  key: "_complete",
                  value: function () {
                    this.destination.complete(), this.unsubscribe();
                  }
                },
                {
                  key: "_unsubscribeAndRecycle",
                  value: function () {
                    var e = this._parentOrParents;
                    return (
                      (this._parentOrParents = null),
                      this.unsubscribe(),
                      (this.closed = !1),
                      (this.isStopped = !1),
                      (this._parentOrParents = e),
                      this
                    );
                  }
                }
              ],
              [
                {
                  key: "create",
                  value: function (e, t, r) {
                    var o = new n(e, t, r);
                    return (o.syncErrorThrowable = !1), o;
                  }
                }
              ]
            ),
            n
          );
        })(j),
        z = (function (e) {
          k(n, e);
          var t = T(n);
          function n(e, r, o, i) {
            var a, s;
            d(this, n), ((a = t.call(this))._parentSubscriber = e);
            var u = m(a);
            return (
              E(r)
                ? (s = r)
                : r &&
                  ((s = r.next),
                  (o = r.error),
                  (i = r.complete),
                  r !== C &&
                    (E((u = Object.create(r)).unsubscribe) && a.add(u.unsubscribe.bind(u)), (u.unsubscribe = a.unsubscribe.bind(m(a))))),
              (a._context = u),
              (a._next = s),
              (a._error = o),
              (a._complete = i),
              a
            );
          }
          return (
            y(n, [
              {
                key: "next",
                value: function (e) {
                  if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber;
                    P.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                      ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                      : this.__tryOrUnsub(this._next, e);
                  }
                }
              },
              {
                key: "error",
                value: function (e) {
                  if (!this.isStopped) {
                    var t = this._parentSubscriber,
                      n = P.useDeprecatedSynchronousErrorHandling;
                    if (this._error)
                      n && t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                        : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                    else if (t.syncErrorThrowable) n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : x(e), this.unsubscribe();
                    else {
                      if ((this.unsubscribe(), n)) throw e;
                      x(e);
                    }
                  }
                }
              },
              {
                key: "complete",
                value: function () {
                  var e = this;
                  if (!this.isStopped) {
                    var t = this._parentSubscriber;
                    if (this._complete) {
                      var n = function () {
                        return e._complete.call(e._context);
                      };
                      P.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, n), this.unsubscribe())
                        : (this.__tryOrUnsub(n), this.unsubscribe());
                    } else this.unsubscribe();
                  }
                }
              },
              {
                key: "__tryOrUnsub",
                value: function (e, t) {
                  try {
                    e.call(this._context, t);
                  } catch (n) {
                    if ((this.unsubscribe(), P.useDeprecatedSynchronousErrorHandling)) throw n;
                    x(n);
                  }
                }
              },
              {
                key: "__tryOrSetError",
                value: function (e, t, n) {
                  if (!P.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                  try {
                    t.call(this._context, n);
                  } catch (r) {
                    return P.useDeprecatedSynchronousErrorHandling ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0) : (x(r), !0);
                  }
                  return !1;
                }
              },
              {
                key: "_unsubscribe",
                value: function () {
                  var e = this._parentSubscriber;
                  (this._context = null), (this._parentSubscriber = null), e.unsubscribe();
                }
              }
            ]),
            n
          );
        })(N),
        R = (function () {
          return ("function" == typeof Symbol && Symbol.observable) || "@@observable";
        })();
      function Z(e) {
        return e;
      }
      function F(e) {
        return 0 === e.length
          ? Z
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
      var H = (function () {
        var e = (function () {
          function e(t) {
            d(this, e), (this._isScalar = !1), t && (this._subscribe = t);
          }
          return (
            y(e, [
              {
                key: "lift",
                value: function (t) {
                  var n = new e();
                  return (n.source = this), (n.operator = t), n;
                }
              },
              {
                key: "subscribe",
                value: function (e, t, n) {
                  var r = this.operator,
                    o = (function (e, t, n) {
                      if (e) {
                        if (e instanceof N) return e;
                        if (e[L]) return e[L]();
                      }
                      return e || t || n ? new N(e, t, n) : new N(C);
                    })(e, t, n);
                  if (
                    (o.add(
                      r
                        ? r.call(o, this.source)
                        : this.source || (P.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable)
                        ? this._subscribe(o)
                        : this._trySubscribe(o)
                    ),
                    P.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && ((o.syncErrorThrowable = !1), o.syncErrorThrown))
                  )
                    throw o.syncErrorValue;
                  return o;
                }
              },
              {
                key: "_trySubscribe",
                value: function (e) {
                  try {
                    return this._subscribe(e);
                  } catch (t) {
                    P.useDeprecatedSynchronousErrorHandling && ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                      (function (e) {
                        for (; e; ) {
                          var t = e.destination;
                          if (e.closed || e.isStopped) return !1;
                          e = t && t instanceof N ? t : null;
                        }
                        return !0;
                      })(e)
                        ? e.error(t)
                        : console.warn(t);
                  }
                }
              },
              {
                key: "forEach",
                value: function (e, t) {
                  var n = this;
                  return new (t = V(t))(function (t, r) {
                    var o;
                    o = n.subscribe(
                      function (t) {
                        try {
                          e(t);
                        } catch (n) {
                          r(n), o && o.unsubscribe();
                        }
                      },
                      r,
                      t
                    );
                  });
                }
              },
              {
                key: "_subscribe",
                value: function (e) {
                  var t = this.source;
                  return t && t.subscribe(e);
                }
              },
              {
                key: R,
                value: function () {
                  return this;
                }
              },
              {
                key: "pipe",
                value: function () {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  return 0 === t.length ? this : F(t)(this);
                }
              },
              {
                key: "toPromise",
                value: function (e) {
                  var t = this;
                  return new (e = V(e))(function (e, n) {
                    var r;
                    t.subscribe(
                      function (e) {
                        return (r = e);
                      },
                      function (e) {
                        return n(e);
                      },
                      function () {
                        return e(r);
                      }
                    );
                  });
                }
              }
            ]),
            e
          );
        })();
        return (
          (e.create = function (t) {
            return new e(t);
          }),
          e
        );
      })();
      function V(e) {
        if ((e || (e = P.Promise || Promise), !e)) throw new Error("no Promise impl found");
        return e;
      }
      var U = function (e) {
        return function (t) {
          for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
          t.complete();
        };
      };
      function B() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
      }
      var W = B(),
        G = function (e) {
          return e && "number" == typeof e.length && "function" != typeof e;
        };
      function q(e) {
        return !!e && "function" != typeof e.subscribe && "function" == typeof e.then;
      }
      var K = function (e) {
        if (e && "function" == typeof e[R])
          return (
            (r = e),
            function (e) {
              var t = r[R]();
              if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
              return t.subscribe(e);
            }
          );
        if (G(e)) return U(e);
        if (q(e))
          return (
            (t = e),
            function (e) {
              return (
                t
                  .then(
                    function (t) {
                      e.closed || (e.next(t), e.complete());
                    },
                    function (t) {
                      return e.error(t);
                    }
                  )
                  .then(null, x),
                e
              );
            }
          );
        var t;
        if (e && "function" == typeof e[W])
          return (
            (n = e),
            function (e) {
              for (var t = n[W](); ; ) {
                var r = void 0;
                try {
                  r = t.next();
                } catch (o) {
                  return e.error(o), e;
                }
                if (r.done) {
                  e.complete();
                  break;
                }
                if ((e.next(r.value), e.closed)) break;
              }
              return (
                "function" == typeof t.return &&
                  e.add(function () {
                    t.return && t.return();
                  }),
                e
              );
            }
          );
        var n,
          r,
          o = I(e) ? "an invalid object" : "'".concat(e, "'"),
          i = "You provided ".concat(o, " where a stream was expected.") + " You can provide an Observable, Promise, Array, or Iterable.";
        throw new TypeError(i);
      };
      function Y(e, t) {
        return new H(function (n) {
          var r = new j(),
            o = 0;
          return (
            r.add(
              t.schedule(function () {
                o !== e.length ? (n.next(e[o++]), n.closed || r.add(this.schedule())) : n.complete();
              })
            ),
            r
          );
        });
      }
      function J(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if (
                  (function (e) {
                    return e && "function" == typeof e[R];
                  })(e)
                )
                  return (function (e, t) {
                    return new H(function (n) {
                      var r = new j();
                      return (
                        r.add(
                          t.schedule(function () {
                            var o = e[R]();
                            r.add(
                              o.subscribe({
                                next: function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      return n.next(e);
                                    })
                                  );
                                },
                                error: function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      return n.error(e);
                                    })
                                  );
                                },
                                complete: function () {
                                  r.add(
                                    t.schedule(function () {
                                      return n.complete();
                                    })
                                  );
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (q(e))
                  return (function (e, t) {
                    return new H(function (n) {
                      var r = new j();
                      return (
                        r.add(
                          t.schedule(function () {
                            return e.then(
                              function (e) {
                                r.add(
                                  t.schedule(function () {
                                    n.next(e),
                                      r.add(
                                        t.schedule(function () {
                                          return n.complete();
                                        })
                                      );
                                  })
                                );
                              },
                              function (e) {
                                r.add(
                                  t.schedule(function () {
                                    return n.error(e);
                                  })
                                );
                              }
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (G(e)) return Y(e, t);
                if (
                  (function (e) {
                    return e && "function" == typeof e[W];
                  })(e) ||
                  "string" == typeof e
                )
                  return (function (e, t) {
                    if (!e) throw new Error("Iterable cannot be null");
                    return new H(function (n) {
                      var r,
                        o = new j();
                      return (
                        o.add(function () {
                          r && "function" == typeof r.return && r.return();
                        }),
                        o.add(
                          t.schedule(function () {
                            (r = e[W]()),
                              o.add(
                                t.schedule(function () {
                                  if (!n.closed) {
                                    var e, t;
                                    try {
                                      var o = r.next();
                                      (e = o.value), (t = o.done);
                                    } catch (i) {
                                      return void n.error(i);
                                    }
                                    t ? n.complete() : (n.next(e), this.schedule());
                                  }
                                })
                              );
                          })
                        ),
                        o
                      );
                    });
                  })(e, t);
              }
              throw new TypeError(((null !== e && typeof e) || e) + " is not observable");
            })(e, t)
          : e instanceof H
          ? e
          : new H(K(e));
      }
      function X(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function $(e, t) {
        if (e) {
          if ("string" == typeof e) return X(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? X(e, t)
              : void 0
          );
        }
      }
      function Q(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return X(e);
          })(e) ||
          (function (e) {
            if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
          })(e) ||
          $(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ee(e, t) {
        return function (n) {
          if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
          return n.lift(new te(e, t));
        };
      }
      var te = (function () {
          function e(t, n) {
            d(this, e), (this.project = t), (this.thisArg = n);
          }
          return (
            y(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new ne(e, this.project, this.thisArg));
                }
              }
            ]),
            e
          );
        })(),
        ne = (function (e) {
          k(n, e);
          var t = T(n);
          function n(e, r, o) {
            var i;
            return d(this, n), ((i = t.call(this, e)).project = r), (i.count = 0), (i.thisArg = o || m(i)), i;
          }
          return (
            y(n, [
              {
                key: "_next",
                value: function (e) {
                  var t;
                  try {
                    t = this.project.call(this.thisArg, e, this.count++);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  this.destination.next(t);
                }
              }
            ]),
            n
          );
        })(N);
      function re(e, t, n, r) {
        return (
          E(n) && ((r = n), (n = void 0)),
          r
            ? re(e, t, n).pipe(
                ee(function (e) {
                  return A(e) ? r.apply(void 0, Q(e)) : r(e);
                })
              )
            : new H(function (r) {
                oe(
                  e,
                  t,
                  function (e) {
                    r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : e);
                  },
                  r,
                  n
                );
              })
        );
      }
      function oe(e, t, n, r, o) {
        var i;
        if (
          (function (e) {
            return e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener;
          })(e)
        ) {
          var a = e;
          e.addEventListener(t, n, o),
            (i = function () {
              return a.removeEventListener(t, n, o);
            });
        } else if (
          (function (e) {
            return e && "function" == typeof e.on && "function" == typeof e.off;
          })(e)
        ) {
          var s = e;
          e.on(t, n),
            (i = function () {
              return s.off(t, n);
            });
        } else if (
          (function (e) {
            return e && "function" == typeof e.addListener && "function" == typeof e.removeListener;
          })(e)
        ) {
          var u = e;
          e.addListener(t, n),
            (i = function () {
              return u.removeListener(t, n);
            });
        } else {
          if (!e || !e.length) throw new TypeError("Invalid event target");
          for (var c = 0, l = e.length; c < l; c++) oe(e[c], t, n, r, o);
        }
        r.add(i);
      }
      var ie = (function (e) {
          k(n, e);
          var t = T(n);
          function n(e) {
            var r;
            return d(this, n), ((r = t.call(this)).parent = e), r;
          }
          return (
            y(n, [
              {
                key: "_next",
                value: function (e) {
                  this.parent.notifyNext(e);
                }
              },
              {
                key: "_error",
                value: function (e) {
                  this.parent.notifyError(e), this.unsubscribe();
                }
              },
              {
                key: "_complete",
                value: function () {
                  this.parent.notifyComplete(), this.unsubscribe();
                }
              }
            ]),
            n
          );
        })(N),
        ae = (function (e) {
          k(n, e);
          var t = T(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            y(n, [
              {
                key: "notifyNext",
                value: function (e) {
                  this.destination.next(e);
                }
              },
              {
                key: "notifyError",
                value: function (e) {
                  this.destination.error(e);
                }
              },
              {
                key: "notifyComplete",
                value: function () {
                  this.destination.complete();
                }
              }
            ]),
            n
          );
        })(N);
      function se(e, t) {
        if (!t.closed) {
          if (e instanceof H) return e.subscribe(t);
          var n;
          try {
            n = K(e)(t);
          } catch (r) {
            t.error(r);
          }
          return n;
        }
      }
      function ue(e, t) {
        return "function" == typeof t
          ? function (n) {
              return n.pipe(
                ue(function (n, r) {
                  return J(e(n, r)).pipe(
                    ee(function (e, o) {
                      return t(n, e, r, o);
                    })
                  );
                })
              );
            }
          : function (t) {
              return t.lift(new ce(e));
            };
      }
      var ce = (function () {
          function e(t) {
            d(this, e), (this.project = t);
          }
          return (
            y(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new le(e, this.project));
                }
              }
            ]),
            e
          );
        })(),
        le = (function (e) {
          k(n, e);
          var t = T(n);
          function n(e, r) {
            var o;
            return d(this, n), ((o = t.call(this, e)).project = r), (o.index = 0), o;
          }
          return (
            y(n, [
              {
                key: "_next",
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.project(e, n);
                  } catch (r) {
                    return void this.destination.error(r);
                  }
                  this._innerSub(t);
                }
              },
              {
                key: "_innerSub",
                value: function (e) {
                  var t = this.innerSubscription;
                  t && t.unsubscribe();
                  var n = new ie(this),
                    r = this.destination;
                  r.add(n), (this.innerSubscription = se(e, n)), this.innerSubscription !== n && r.add(this.innerSubscription);
                }
              },
              {
                key: "_complete",
                value: function () {
                  var e = this.innerSubscription;
                  (e && !e.closed) || b(g(n.prototype), "_complete", this).call(this), this.unsubscribe();
                }
              },
              {
                key: "_unsubscribe",
                value: function () {
                  this.innerSubscription = void 0;
                }
              },
              {
                key: "notifyComplete",
                value: function () {
                  (this.innerSubscription = void 0), this.isStopped && b(g(n.prototype), "_complete", this).call(this);
                }
              },
              {
                key: "notifyNext",
                value: function (e) {
                  this.destination.next(e);
                }
              }
            ]),
            n
          );
        })(ae);
      function fe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function pe(e, t) {
        var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = $(e)) || (t && e && "number" == typeof e.length)) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
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
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          }
        };
      }
      function he(e) {
        return e && "function" == typeof e.schedule;
      }
      function de(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
        return "function" == typeof t
          ? function (r) {
              return r.pipe(
                de(function (n, r) {
                  return J(e(n, r)).pipe(
                    ee(function (e, o) {
                      return t(n, e, r, o);
                    })
                  );
                }, n)
              );
            }
          : ("number" == typeof t && (n = t),
            function (t) {
              return t.lift(new ve(e, n));
            });
      }
      var ve = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
            d(this, e), (this.project = t), (this.concurrent = n);
          }
          return (
            y(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new ye(e, this.project, this.concurrent));
                }
              }
            ]),
            e
          );
        })(),
        ye = (function (e) {
          k(n, e);
          var t = T(n);
          function n(e, r) {
            var o,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
            return (
              d(this, n),
              ((o = t.call(this, e)).project = r),
              (o.concurrent = i),
              (o.hasCompleted = !1),
              (o.buffer = []),
              (o.active = 0),
              (o.index = 0),
              o
            );
          }
          return (
            y(n, [
              {
                key: "_next",
                value: function (e) {
                  this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
                }
              },
              {
                key: "_tryNext",
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.project(e, n);
                  } catch (r) {
                    return void this.destination.error(r);
                  }
                  this.active++, this._innerSub(t);
                }
              },
              {
                key: "_innerSub",
                value: function (e) {
                  var t = new ie(this),
                    n = this.destination;
                  n.add(t);
                  var r = se(e, t);
                  r !== t && n.add(r);
                }
              },
              {
                key: "_complete",
                value: function () {
                  (this.hasCompleted = !0),
                    0 === this.active && 0 === this.buffer.length && this.destination.complete(),
                    this.unsubscribe();
                }
              },
              {
                key: "notifyNext",
                value: function (e) {
                  this.destination.next(e);
                }
              },
              {
                key: "notifyComplete",
                value: function () {
                  var e = this.buffer;
                  this.active--,
                    e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
                }
              }
            ]),
            n
          );
        })(ae);
      function me(e, t) {
        return t ? Y(e, t) : new H(U(e));
      }
      function ge(e) {
        return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 };
      }
      Error,
        "undefined" != typeof globalThis && globalThis,
        "undefined" != typeof window && window,
        "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        "undefined" != typeof global && global,
        Symbol;
      var be = window.navigator,
        _e = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return i(t, e), t;
        })(Error),
        ke = (function () {
          function e() {
            this._hasDisplayMedia = be.mediaDevices && "getDisplayMedia" in be.mediaDevices;
          }
          return (
            Object.defineProperty(e.prototype, "hasDisplayMedia", {
              get: function () {
                return this._hasDisplayMedia;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype._throwWrappedPermissionError = function (e) {
              if (this.isPermissionError(e)) throw new _e();
              throw e;
            }),
            (e.prototype.getUserMedia = function (e) {
              return c(this, void 0, void 0, function () {
                var t;
                return l(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 3]), [4, navigator.mediaDevices.getUserMedia(e)];
                    case 1:
                      return [2, n.sent()];
                    case 2:
                      return (t = n.sent()), this._throwWrappedPermissionError(t), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getDisplayMedia = function (e) {
              return c(this, void 0, void 0, function () {
                var t;
                return l(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!this._hasDisplayMedia) return [3, 5];
                      n.label = 1;
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, navigator.mediaDevices.getDisplayMedia(e)];
                    case 2:
                      return [2, n.sent()];
                    case 3:
                      return (t = n.sent()), this._throwWrappedPermissionError(t), [3, 4];
                    case 4:
                      return [3, 6];
                    case 5:
                      throw new Error(
                        "getDisplayMedia() not supported, make sure chrome://flags/#enable-experimental-web-platform-features is enabled"
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getSources = function () {
              return c(this, void 0, void 0, function () {
                return l(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return be.mediaDevices ? [4, be.mediaDevices.enumerateDevices()] : [2, []];
                    case 1:
                      return [
                        2,
                        e
                          .sent()
                          .filter(function (e) {
                            return e.kind.endsWith("input");
                          })
                          .map(function (e) {
                            return { id: e.deviceId, label: e.label, kind: e.kind.substring(0, e.kind.length - 5) };
                          })
                      ];
                  }
                });
              });
            }),
            (e.prototype.getSourcesByKind = function (e) {
              return c(this, void 0, void 0, function () {
                return l(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.getSources()];
                    case 1:
                      return [
                        2,
                        t.sent().filter(function (t) {
                          return t.kind === e;
                        })
                      ];
                  }
                });
              });
            }),
            (e.prototype.getVideoSources = function () {
              return this.getSourcesByKind("video");
            }),
            (e.prototype.getAudioSources = function () {
              return this.getSourcesByKind("audio");
            }),
            (e.prototype.hasCamera = function () {
              return c(this, void 0, void 0, function () {
                return l(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.getVideoSources()];
                    case 1:
                      return [2, e.sent().length > 0];
                  }
                });
              });
            }),
            (e.prototype.hasMicrophone = function () {
              return c(this, void 0, void 0, function () {
                return l(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.getAudioSources()];
                    case 1:
                      return [2, e.sent().length > 0];
                  }
                });
              });
            }),
            (e.prototype.hasLabel = function (e) {
              return e.some(function (e) {
                return !!e.label;
              });
            }),
            (e.prototype.hasVideoAccess = function () {
              return c(this, void 0, void 0, function () {
                var e;
                return l(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (e = this.hasLabel), [4, this.getVideoSources()];
                    case 1:
                      return [2, e.apply(this, [t.sent()])];
                  }
                });
              });
            }),
            (e.prototype.hasAudioAccess = function () {
              return c(this, void 0, void 0, function () {
                var e;
                return l(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (e = this.hasLabel), [4, this.getAudioSources()];
                    case 1:
                      return [2, e.apply(this, [t.sent()])];
                  }
                });
              });
            }),
            (e.prototype.getCameraAndMicPermission = function () {
              return c(this, void 0, void 0, function () {
                var e, t, n, r;
                return l(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, this.hasCamera()];
                    case 1:
                      (e = o.sent()), (t = !1), (n = !1), (o.label = 2);
                    case 2:
                      return o.trys.push([2, 4, , 5]), [4, navigator.mediaDevices.getUserMedia({ audio: !0, video: e })];
                    case 3:
                      return (
                        (r = o.sent()),
                        (n = !!r.getVideoTracks().length),
                        (t = !!r.getAudioTracks().length),
                        r.getTracks().forEach(function (e) {
                          e.stop();
                        }),
                        [3, 5]
                      );
                    case 4:
                      return o.sent(), [3, 5];
                    case 5:
                      return [2, { video: n, audio: t }];
                  }
                });
              });
            }),
            (e.prototype.checkPermission = function (e) {
              return c(this, void 0, void 0, function () {
                return l(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, navigator.permissions.query({ name: e })];
                    case 1:
                      return [2, t.sent().state];
                  }
                });
              });
            }),
            (e.prototype.onPermission = function (e) {
              return J(navigator.permissions.query({ name: e })).pipe(
                ue(function (e) {
                  return re(e, "change");
                }),
                ee(function (e) {
                  return e.currentTarget;
                })
              );
            }),
            (e.prototype.isPermissionError = function (e) {
              return (
                e &&
                ("PermissionDeniedError" === e.name ||
                  "MediaDeviceFailedDueToShutdown" === e.name ||
                  "NotAllowedError" === e.name ||
                  "InvalidStateError" === e.name)
              );
            }),
            (e.ɵprov = ge({
              token: e,
              factory: (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              providedIn: "root"
            })),
            e
          );
        })();
      function we() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t[t.length - 1];
        return he(r) ? (t.pop(), Y(t, r)) : me(t);
      }
      function Se(e, t) {
        if (!(t instanceof Object)) return t;
        switch (t.constructor) {
          case Date:
            return new Date(t.getTime());
          case Object:
            void 0 === e && (e = {});
            break;
          case Array:
            e = [];
            break;
          default:
            return t;
        }
        for (var n in t) t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = Se(e[n], t[n]));
        return e;
      }
      n(98512), n(39747);
      var Te = (function () {
        function e() {
          var e = this;
          (this.reject = function () {}),
            (this.resolve = function () {}),
            (this.promise = new Promise(function (t, n) {
              (e.resolve = t), (e.reject = n);
            }));
        }
        return (
          (e.prototype.wrapCallback = function (e) {
            var t = this;
            return function (n, r) {
              n ? t.reject(n) : t.resolve(r), "function" == typeof e && (t.promise.catch(function () {}), 1 === e.length ? e(n) : e(n, r));
            };
          }),
          e
        );
      })();
      function Ee() {
        try {
          return "[object process]" === Object.prototype.toString.call(global.process);
        } catch (e) {
          return !1;
        }
      }
      var Oe = (function (e) {
          function t(n, r, o) {
            var i = e.call(this, r) || this;
            return (
              (i.code = n),
              (i.customData = o),
              (i.name = "FirebaseError"),
              Object.setPrototypeOf(i, t.prototype),
              Error.captureStackTrace && Error.captureStackTrace(i, Pe.prototype.create),
              i
            );
          }
          return i(t, e), t;
        })(Error),
        Pe = (function () {
          function e(e, t, n) {
            (this.service = e), (this.serviceName = t), (this.errors = n);
          }
          return (
            (e.prototype.create = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
              var r = t[0] || {},
                o = this.service + "/" + e,
                i = this.errors[e],
                a = i ? xe(i, r) : "Error",
                s = this.serviceName + ": " + a + " (" + o + ").",
                u = new Oe(o, s, r);
              return u;
            }),
            e
          );
        })();
      function xe(e, t) {
        return e.replace(Ce, function (e, n) {
          var r = t[n];
          return null != r ? String(r) : "<" + n + "?>";
        });
      }
      var Ce = /\{\$([^}]+)}/g;
      function Ae(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function Ie(e, t) {
        var n = new De(e, t);
        return n.subscribe.bind(n);
      }
      var De = (function () {
        function e(e, t) {
          var n = this;
          (this.observers = []),
            (this.unsubscribes = []),
            (this.observerCount = 0),
            (this.task = Promise.resolve()),
            (this.finalized = !1),
            (this.onNoObservers = t),
            this.task
              .then(function () {
                e(n);
              })
              .catch(function (e) {
                n.error(e);
              });
        }
        return (
          (e.prototype.next = function (e) {
            this.forEachObserver(function (t) {
              t.next(e);
            });
          }),
          (e.prototype.error = function (e) {
            this.forEachObserver(function (t) {
              t.error(e);
            }),
              this.close(e);
          }),
          (e.prototype.complete = function () {
            this.forEachObserver(function (e) {
              e.complete();
            }),
              this.close();
          }),
          (e.prototype.subscribe = function (e, t, n) {
            var r,
              o = this;
            if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
            void 0 ===
              (r = (function (e, t) {
                if ("object" != typeof e || null === e) return !1;
                for (var n = 0, r = ["next", "error", "complete"]; n < r.length; n++) {
                  var o = r[n];
                  if (o in e && "function" == typeof e[o]) return !0;
                }
                return !1;
              })(e)
                ? e
                : { next: e, error: t, complete: n }).next && (r.next = je),
              void 0 === r.error && (r.error = je),
              void 0 === r.complete && (r.complete = je);
            var i = this.unsubscribeOne.bind(this, this.observers.length);
            return (
              this.finalized &&
                this.task.then(function () {
                  try {
                    o.finalError ? r.error(o.finalError) : r.complete();
                  } catch (e) {}
                }),
              this.observers.push(r),
              i
            );
          }),
          (e.prototype.unsubscribeOne = function (e) {
            void 0 !== this.observers &&
              void 0 !== this.observers[e] &&
              (delete this.observers[e],
              (this.observerCount -= 1),
              0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
          }),
          (e.prototype.forEachObserver = function (e) {
            if (!this.finalized) for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e);
          }),
          (e.prototype.sendOne = function (e, t) {
            var n = this;
            this.task.then(function () {
              if (void 0 !== n.observers && void 0 !== n.observers[e])
                try {
                  t(n.observers[e]);
                } catch (r) {
                  "undefined" != typeof console && console.error && console.error(r);
                }
            });
          }),
          (e.prototype.close = function (e) {
            var t = this;
            this.finalized ||
              ((this.finalized = !0),
              void 0 !== e && (this.finalError = e),
              this.task.then(function () {
                (t.observers = void 0), (t.onNoObservers = void 0);
              }));
          }),
          e
        );
      })();
      function je() {}
      var Me,
        Le = (function () {
          function e(e, t, n) {
            (this.name = e),
              (this.instanceFactory = t),
              (this.type = n),
              (this.multipleInstances = !1),
              (this.serviceProps = {}),
              (this.instantiationMode = "LAZY"),
              (this.onInstanceCreated = null);
          }
          return (
            (e.prototype.setInstantiationMode = function (e) {
              return (this.instantiationMode = e), this;
            }),
            (e.prototype.setMultipleInstances = function (e) {
              return (this.multipleInstances = e), this;
            }),
            (e.prototype.setServiceProps = function (e) {
              return (this.serviceProps = e), this;
            }),
            (e.prototype.setInstanceCreatedCallback = function (e) {
              return (this.onInstanceCreated = e), this;
            }),
            e
          );
        })(),
        Ne = "[DEFAULT]",
        ze = (function () {
          function e(e, t) {
            (this.name = e),
              (this.container = t),
              (this.component = null),
              (this.instances = new Map()),
              (this.instancesDeferred = new Map()),
              (this.onInitCallbacks = new Set());
          }
          return (
            (e.prototype.get = function (e) {
              void 0 === e && (e = Ne);
              var t = this.normalizeInstanceIdentifier(e);
              if (!this.instancesDeferred.has(t)) {
                var n = new Te();
                if ((this.instancesDeferred.set(t, n), this.isInitialized(t) || this.shouldAutoInitialize()))
                  try {
                    var r = this.getOrInitializeService({ instanceIdentifier: t });
                    r && n.resolve(r);
                  } catch (o) {}
              }
              return this.instancesDeferred.get(t).promise;
            }),
            (e.prototype.getImmediate = function (e) {
              var t = a({ identifier: Ne, optional: !1 }, e),
                n = t.optional,
                r = this.normalizeInstanceIdentifier(t.identifier);
              if (!this.isInitialized(r) && !this.shouldAutoInitialize()) {
                if (n) return null;
                throw Error("Service " + this.name + " is not available");
              }
              try {
                return this.getOrInitializeService({ instanceIdentifier: r });
              } catch (o) {
                if (n) return null;
                throw o;
              }
            }),
            (e.prototype.getComponent = function () {
              return this.component;
            }),
            (e.prototype.setComponent = function (e) {
              var t, n;
              if (e.name !== this.name) throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
              if (this.component) throw Error("Component for " + this.name + " has already been provided");
              if (((this.component = e), this.shouldAutoInitialize())) {
                if (
                  (function (e) {
                    return "EAGER" === e.instantiationMode;
                  })(e)
                )
                  try {
                    this.getOrInitializeService({ instanceIdentifier: Ne });
                  } catch (c) {}
                try {
                  for (var r = f(this.instancesDeferred.entries()), o = r.next(); !o.done; o = r.next()) {
                    var i = p(o.value, 2),
                      a = i[1],
                      s = this.normalizeInstanceIdentifier(i[0]);
                    try {
                      var u = this.getOrInitializeService({ instanceIdentifier: s });
                      a.resolve(u);
                    } catch (c) {}
                  }
                } catch (l) {
                  t = { error: l };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }
            }),
            (e.prototype.clearInstance = function (e) {
              void 0 === e && (e = Ne), this.instancesDeferred.delete(e), this.instances.delete(e);
            }),
            (e.prototype.delete = function () {
              return c(this, void 0, void 0, function () {
                var e;
                return l(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = Array.from(this.instances.values())),
                        [
                          4,
                          Promise.all(
                            h(
                              h(
                                [],
                                p(
                                  e
                                    .filter(function (e) {
                                      return "INTERNAL" in e;
                                    })
                                    .map(function (e) {
                                      return e.INTERNAL.delete();
                                    })
                                )
                              ),
                              p(
                                e
                                  .filter(function (e) {
                                    return "_delete" in e;
                                  })
                                  .map(function (e) {
                                    return e._delete();
                                  })
                              )
                            )
                          )
                        ]
                      );
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.isComponentSet = function () {
              return null != this.component;
            }),
            (e.prototype.isInitialized = function (e) {
              return void 0 === e && (e = Ne), this.instances.has(e);
            }),
            (e.prototype.initialize = function (e) {
              var t, n;
              void 0 === e && (e = {});
              var r = e.instanceIdentifier,
                o = e.options,
                i = void 0 === o ? {} : o,
                a = this.normalizeInstanceIdentifier(void 0 === r ? Ne : r);
              if (this.isInitialized(a)) throw Error(this.name + "(" + a + ") has already been initialized");
              if (!this.isComponentSet()) throw Error("Component " + this.name + " has not been registered yet");
              var s = this.getOrInitializeService({ instanceIdentifier: a, options: i });
              try {
                for (var u = f(this.instancesDeferred.entries()), c = u.next(); !c.done; c = u.next()) {
                  var l = p(c.value, 2),
                    h = l[1];
                  a === this.normalizeInstanceIdentifier(l[0]) && h.resolve(s);
                }
              } catch (d) {
                t = { error: d };
              } finally {
                try {
                  c && !c.done && (n = u.return) && n.call(u);
                } finally {
                  if (t) throw t.error;
                }
              }
              return this.invokeOnInitCallbacks(s, a), s;
            }),
            (e.prototype.onInit = function (e) {
              var t = this;
              return (
                this.onInitCallbacks.add(e),
                function () {
                  t.onInitCallbacks.delete(e);
                }
              );
            }),
            (e.prototype.invokeOnInitCallbacks = function (e, t) {
              var n, r;
              try {
                for (var o = f(this.onInitCallbacks), i = o.next(); !i.done; i = o.next()) {
                  var a = i.value;
                  try {
                    a(e, t);
                  } catch (s) {}
                }
              } catch (u) {
                n = { error: u };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
            }),
            (e.prototype.getOrInitializeService = function (e) {
              var t,
                n = e.instanceIdentifier,
                r = e.options,
                o = void 0 === r ? {} : r,
                i = this.instances.get(n);
              if (
                !i &&
                this.component &&
                ((i = this.component.instanceFactory(this.container, { instanceIdentifier: ((t = n), t === Ne ? void 0 : t), options: o })),
                this.instances.set(n, i),
                this.component.onInstanceCreated)
              )
                try {
                  this.component.onInstanceCreated(this.container, n, i);
                } catch (a) {}
              return i || null;
            }),
            (e.prototype.normalizeInstanceIdentifier = function (e) {
              return this.component ? (this.component.multipleInstances ? e : Ne) : e;
            }),
            (e.prototype.shouldAutoInitialize = function () {
              return !!this.component && "EXPLICIT" !== this.component.instantiationMode;
            }),
            e
          );
        })(),
        Re = (function () {
          function e(e) {
            (this.name = e), (this.providers = new Map());
          }
          return (
            (e.prototype.addComponent = function (e) {
              var t = this.getProvider(e.name);
              if (t.isComponentSet()) throw new Error("Component " + e.name + " has already been registered with " + this.name);
              t.setComponent(e);
            }),
            (e.prototype.addOrOverwriteComponent = function (e) {
              this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
            }),
            (e.prototype.getProvider = function (e) {
              if (this.providers.has(e)) return this.providers.get(e);
              var t = new ze(e, this);
              return this.providers.set(e, t), t;
            }),
            (e.prototype.getProviders = function () {
              return Array.from(this.providers.values());
            }),
            e
          );
        })();
      function Ze() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          o = 0;
        for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
        return r;
      }
      var Fe,
        He = [],
        Ve = (function (e) {
          return (
            (e[(e.DEBUG = 0)] = "DEBUG"),
            (e[(e.VERBOSE = 1)] = "VERBOSE"),
            (e[(e.INFO = 2)] = "INFO"),
            (e[(e.WARN = 3)] = "WARN"),
            (e[(e.ERROR = 4)] = "ERROR"),
            (e[(e.SILENT = 5)] = "SILENT"),
            e
          );
        })({}),
        Ue = { debug: Ve.DEBUG, verbose: Ve.VERBOSE, info: Ve.INFO, warn: Ve.WARN, error: Ve.ERROR, silent: Ve.SILENT },
        Be = Ve.INFO,
        We =
          (((Me = {})[Ve.DEBUG] = "log"),
          (Me[Ve.VERBOSE] = "log"),
          (Me[Ve.INFO] = "info"),
          (Me[Ve.WARN] = "warn"),
          (Me[Ve.ERROR] = "error"),
          Me),
        Ge = function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
          if (!(t < e.logLevel)) {
            var o = new Date().toISOString(),
              i = We[t];
            if (!i) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
            console[i].apply(console, Ze(["[" + o + "]  " + e.name + ":"], n));
          }
        },
        qe = (function () {
          function e(e) {
            (this.name = e), (this._logLevel = Be), (this._logHandler = Ge), (this._userLogHandler = null), He.push(this);
          }
          return (
            Object.defineProperty(e.prototype, "logLevel", {
              get: function () {
                return this._logLevel;
              },
              set: function (e) {
                if (!(e in Ve)) throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
                this._logLevel = e;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.setLogLevel = function (e) {
              this._logLevel = "string" == typeof e ? Ue[e] : e;
            }),
            Object.defineProperty(e.prototype, "logHandler", {
              get: function () {
                return this._logHandler;
              },
              set: function (e) {
                if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                this._logHandler = e;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "userLogHandler", {
              get: function () {
                return this._userLogHandler;
              },
              set: function (e) {
                this._userLogHandler = e;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              this._userLogHandler && this._userLogHandler.apply(this, Ze([this, Ve.DEBUG], e)),
                this._logHandler.apply(this, Ze([this, Ve.DEBUG], e));
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              this._userLogHandler && this._userLogHandler.apply(this, Ze([this, Ve.VERBOSE], e)),
                this._logHandler.apply(this, Ze([this, Ve.VERBOSE], e));
            }),
            (e.prototype.info = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              this._userLogHandler && this._userLogHandler.apply(this, Ze([this, Ve.INFO], e)),
                this._logHandler.apply(this, Ze([this, Ve.INFO], e));
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              this._userLogHandler && this._userLogHandler.apply(this, Ze([this, Ve.WARN], e)),
                this._logHandler.apply(this, Ze([this, Ve.WARN], e));
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              this._userLogHandler && this._userLogHandler.apply(this, Ze([this, Ve.ERROR], e)),
                this._logHandler.apply(this, Ze([this, Ve.ERROR], e));
            }),
            e
          );
        })();
      function Ke(e) {
        He.forEach(function (t) {
          t.setLogLevel(e);
        });
      }
      var Ye,
        Je =
          (((Fe = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
          (Fe["bad-app-name"] = "Illegal App name: '{$appName}"),
          (Fe["duplicate-app"] = "Firebase App named '{$appName}' already exists"),
          (Fe["app-deleted"] = "Firebase App named '{$appName}' already deleted"),
          (Fe["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance."),
          (Fe["invalid-log-argument"] = "First argument to `onLog` must be null or a function."),
          Fe),
        Xe = new Pe("app", "Firebase", Je),
        $e = "@firebase/app",
        Qe = "[DEFAULT]",
        et =
          (((Ye = {})[$e] = "fire-core"),
          (Ye["@firebase/analytics"] = "fire-analytics"),
          (Ye["@firebase/app-check"] = "fire-app-check"),
          (Ye["@firebase/auth"] = "fire-auth"),
          (Ye["@firebase/database"] = "fire-rtdb"),
          (Ye["@firebase/functions"] = "fire-fn"),
          (Ye["@firebase/installations"] = "fire-iid"),
          (Ye["@firebase/messaging"] = "fire-fcm"),
          (Ye["@firebase/performance"] = "fire-perf"),
          (Ye["@firebase/remote-config"] = "fire-rc"),
          (Ye["@firebase/storage"] = "fire-gcs"),
          (Ye["@firebase/firestore"] = "fire-fst"),
          (Ye["fire-js"] = "fire-js"),
          (Ye["firebase-wrapper"] = "fire-js-all"),
          Ye),
        tt = new qe("@firebase/app"),
        nt = (function () {
          function e(e, t, n) {
            var r = this;
            (this.firebase_ = n),
              (this.isDeleted_ = !1),
              (this.name_ = t.name),
              (this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1),
              (this.options_ = Se(void 0, e)),
              (this.container = new Re(t.name)),
              this._addComponent(
                new Le(
                  "app",
                  function () {
                    return r;
                  },
                  "PUBLIC"
                )
              ),
              this.firebase_.INTERNAL.components.forEach(function (e) {
                return r._addComponent(e);
              });
          }
          return (
            Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", {
              get: function () {
                return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
              },
              set: function (e) {
                this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = e);
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "name", {
              get: function () {
                return this.checkDestroyed_(), this.name_;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "options", {
              get: function () {
                return this.checkDestroyed_(), this.options_;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.delete = function () {
              var e = this;
              return new Promise(function (t) {
                e.checkDestroyed_(), t();
              })
                .then(function () {
                  return (
                    e.firebase_.INTERNAL.removeApp(e.name_),
                    Promise.all(
                      e.container.getProviders().map(function (e) {
                        return e.delete();
                      })
                    )
                  );
                })
                .then(function () {
                  e.isDeleted_ = !0;
                });
            }),
            (e.prototype._getService = function (e, t) {
              var n;
              void 0 === t && (t = Qe), this.checkDestroyed_();
              var r = this.container.getProvider(e);
              return (
                r.isInitialized() ||
                  "EXPLICIT" !== (null === (n = r.getComponent()) || void 0 === n ? void 0 : n.instantiationMode) ||
                  r.initialize(),
                r.getImmediate({ identifier: t })
              );
            }),
            (e.prototype._removeServiceInstance = function (e, t) {
              void 0 === t && (t = Qe), this.container.getProvider(e).clearInstance(t);
            }),
            (e.prototype._addComponent = function (e) {
              try {
                this.container.addComponent(e);
              } catch (t) {
                tt.debug("Component " + e.name + " failed to register with FirebaseApp " + this.name, t);
              }
            }),
            (e.prototype._addOrOverwriteComponent = function (e) {
              this.container.addOrOverwriteComponent(e);
            }),
            (e.prototype.toJSON = function () {
              return { name: this.name, automaticDataCollectionEnabled: this.automaticDataCollectionEnabled, options: this.options };
            }),
            (e.prototype.checkDestroyed_ = function () {
              if (this.isDeleted_) throw Xe.create("app-deleted", { appName: this.name_ });
            }),
            e
          );
        })();
      (nt.prototype.name && nt.prototype.options) || nt.prototype.delete || console.log("dc");
      var rt = (function e() {
          var t = (function (e) {
            var t = {},
              n = new Map(),
              r = {
                __esModule: !0,
                initializeApp: function (n, o) {
                  void 0 === o && (o = {}), ("object" == typeof o && null !== o) || (o = { name: o });
                  var i = o;
                  void 0 === i.name && (i.name = Qe);
                  var a = i.name;
                  if ("string" != typeof a || !a) throw Xe.create("bad-app-name", { appName: String(a) });
                  if (Ae(t, a)) throw Xe.create("duplicate-app", { appName: a });
                  var s = new e(n, i, r);
                  return (t[a] = s), s;
                },
                app: o,
                registerVersion: function (e, t, n) {
                  var r,
                    o = null !== (r = et[e]) && void 0 !== r ? r : e;
                  n && (o += "-" + n);
                  var a = o.match(/\s|\//),
                    s = t.match(/\s|\//);
                  if (a || s) {
                    var u = ['Unable to register library "' + o + '" with version "' + t + '":'];
                    return (
                      a && u.push('library name "' + o + '" contains illegal characters (whitespace or "/")'),
                      a && s && u.push("and"),
                      s && u.push('version name "' + t + '" contains illegal characters (whitespace or "/")'),
                      void tt.warn(u.join(" "))
                    );
                  }
                  i(
                    new Le(
                      o + "-version",
                      function () {
                        return { library: o, version: t };
                      },
                      "VERSION"
                    )
                  );
                },
                setLogLevel: Ke,
                onLog: function (e, t) {
                  if (null !== e && "function" != typeof e) throw Xe.create("invalid-log-argument");
                  !(function (e, t) {
                    for (
                      var n = function (n) {
                          var r = null;
                          t && t.level && (r = Ue[t.level]),
                            (n.userLogHandler =
                              null === e
                                ? null
                                : function (t, n) {
                                    for (var o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
                                    var a = o
                                      .map(function (e) {
                                        if (null == e) return null;
                                        if ("string" == typeof e) return e;
                                        if ("number" == typeof e || "boolean" == typeof e) return e.toString();
                                        if (e instanceof Error) return e.message;
                                        try {
                                          return JSON.stringify(e);
                                        } catch (t) {
                                          return null;
                                        }
                                      })
                                      .filter(function (e) {
                                        return e;
                                      })
                                      .join(" ");
                                    n >= (null != r ? r : t.logLevel) &&
                                      e({ level: Ve[n].toLowerCase(), message: a, args: o, type: t.name });
                                  });
                        },
                        r = 0,
                        o = He;
                      r < o.length;
                      r++
                    )
                      n(o[r]);
                  })(e, t);
                },
                apps: null,
                SDK_VERSION: "8.6.1",
                INTERNAL: {
                  registerComponent: i,
                  removeApp: function (e) {
                    delete t[e];
                  },
                  components: n,
                  useAsService: function (e, t) {
                    return "serverAuth" === t ? null : t;
                  }
                }
              };
            function o(e) {
              if (!Ae(t, (e = e || Qe))) throw Xe.create("no-app", { appName: e });
              return t[e];
            }
            function i(i) {
              var a = i.name;
              if (n.has(a))
                return tt.debug("There were multiple attempts to register component " + a + "."), "PUBLIC" === i.type ? r[a] : null;
              if ((n.set(a, i), "PUBLIC" === i.type)) {
                var s = function (e) {
                  if ((void 0 === e && (e = o()), "function" != typeof e[a])) throw Xe.create("invalid-app-argument", { appName: a });
                  return e[a]();
                };
                void 0 !== i.serviceProps && Se(s, i.serviceProps),
                  (r[a] = s),
                  (e.prototype[a] = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return this._getService.bind(this, a).apply(this, i.multipleInstances ? e : []);
                  });
              }
              for (var u = 0, c = Object.keys(t); u < c.length; u++) t[c[u]]._addComponent(i);
              return "PUBLIC" === i.type ? r[a] : null;
            }
            return (
              (r.default = r),
              Object.defineProperty(r, "apps", {
                get: function () {
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                }
              }),
              (o.App = e),
              r
            );
          })(nt);
          return (
            (t.INTERNAL = a(a({}, t.INTERNAL), {
              createFirebaseNamespace: e,
              extendNamespace: function (e) {
                Se(t, e);
              },
              createSubscribe: Ie,
              ErrorFactory: Pe,
              deepExtend: Se
            })),
            t
          );
        })(),
        ot = (function () {
          function e(e) {
            this.container = e;
          }
          return (
            (e.prototype.getPlatformInfoString = function () {
              return this.container
                .getProviders()
                .map(function (e) {
                  if (
                    (function (e) {
                      var t = e.getComponent();
                      return "VERSION" === (null == t ? void 0 : t.type);
                    })(e)
                  ) {
                    var t = e.getImmediate();
                    return t.library + "/" + t.version;
                  }
                  return null;
                })
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            }),
            e
          );
        })();
      if ("object" == typeof self && self.self === self && void 0 !== self.firebase) {
        tt.warn(
          "\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "
        );
        var it = self.firebase.SDK_VERSION;
        it &&
          it.indexOf("LITE") >= 0 &&
          tt.warn(
            "\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "
          );
      }
      var at = rt.initializeApp;
      rt.initializeApp = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return (
          Ee() &&
            tt.warn(
              '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '
            ),
          at.apply(void 0, e)
        );
      };
      var st = rt;
      !(function (e, t) {
        e.INTERNAL.registerComponent(
          new Le(
            "platform-logger",
            function (e) {
              return new ot(e);
            },
            "PRIVATE"
          )
        ),
          e.registerVersion($e, "0.6.22", void 0),
          e.registerVersion("fire-js", "");
      })(st);
      var ut = st;
      function ct() {
        return (function () {
          return de(Z, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY);
        })(1);
      }
      ut.registerVersion("firebase", "8.6.1", "app");
      var lt,
        ft,
        pt = (function () {
          function e(t, n) {
            d(this, e), (this.predicate = t), (this.thisArg = n);
          }
          return (
            y(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new ht(e, this.predicate, this.thisArg));
                }
              }
            ]),
            e
          );
        })(),
        ht = (function (e) {
          k(n, e);
          var t = T(n);
          function n(e, r, o) {
            var i;
            return d(this, n), ((i = t.call(this, e)).predicate = r), (i.thisArg = o), (i.count = 0), i;
          }
          return (
            y(n, [
              {
                key: "_next",
                value: function (e) {
                  var t;
                  try {
                    t = this.predicate.call(this.thisArg, e, this.count++);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  t && this.destination.next(e);
                }
              }
            ]),
            n
          );
        })(N),
        dt = (function () {
          function e(t, n) {
            d(this, e), (this.compare = t), (this.keySelector = n);
          }
          return (
            y(e, [
              {
                key: "call",
                value: function (e, t) {
                  return t.subscribe(new vt(e, this.compare, this.keySelector));
                }
              }
            ]),
            e
          );
        })(),
        vt = (function (e) {
          k(n, e);
          var t = T(n);
          function n(e, r, o) {
            var i;
            return d(this, n), ((i = t.call(this, e)).keySelector = o), (i.hasKey = !1), "function" == typeof r && (i.compare = r), i;
          }
          return (
            y(n, [
              {
                key: "compare",
                value: function (e, t) {
                  return e === t;
                }
              },
              {
                key: "_next",
                value: function (e) {
                  var t;
                  try {
                    var n = this.keySelector;
                    t = n ? n(e) : e;
                  } catch (o) {
                    return this.destination.error(o);
                  }
                  var r = !1;
                  if (this.hasKey)
                    try {
                      r = (0, this.compare)(this.key, t);
                    } catch (o) {
                      return this.destination.error(o);
                    }
                  else this.hasKey = !0;
                  r || ((this.key = t), this.destination.next(e));
                }
              }
            ]),
            n
          );
        })(N),
        yt = function () {
          throw new Error(
            "fbWrapper.configure() not called before using wrapper. Make sure you only import the main edit-models module (no direct file imports)"
          );
        },
        mt = ut.firestore;
      function gt() {
        return lt || (lt = yt().app().firestore()), lt;
      }
      !(function (e) {
        function t(e) {
          return H.create(function (t) {
            return e.onSnapshot(
              function (e) {
                return t.next(e);
              },
              function (e) {
                return t.error(e);
              },
              function () {
                return t.complete();
              }
            );
          });
        }
        function n(e, t) {
          if (e) {
            var n = e[t];
            if (n) return n.toDate().valueOf();
          }
        }
        (e._runQuery = function (e) {
          return J(e.get()).pipe(
            ue(function (e) {
              return J(e.docs);
            })
          );
        }),
          (e._observeQuery = t),
          (e._observeQueryAdd = function (e) {
            return t(e).pipe(
              de(
                function (e) {
                  return e.docChanges();
                },
                void 0,
                1
              ),
              ((n = function (e) {
                return "added" === e.type;
              }),
              function (e) {
                return e.lift(new pt(n, undefined));
              }),
              ee(function (e) {
                return e.doc;
              })
            );
            var n;
          }),
          (e._observeRef = function (e) {
            return (function (e) {
              return void 0 === e && (e = gt()), !("disableNetwork" in ("firestore" in e ? e.firestore : e));
            })()
              ? (function () {
                  return ct()(we.apply(void 0, arguments));
                })(
                  J(e.get()),
                  H.create(function (t) {
                    return e.onSnapshot(
                      function (e) {
                        return t.next(e);
                      },
                      function (e) {
                        return t.error(e);
                      }
                    );
                  })
                ).pipe(
                  ((t = function (e, t) {
                    return n(e, "updateTime") === n(t, "updateTime");
                  }),
                  function (e) {
                    return e.lift(new dt(t, undefined));
                  })
                )
              : H.create(function (t) {
                  return e.onSnapshot(t);
                });
            var t;
          }),
          (e._safeGetTimestamp = n),
          (e._ensureReadTime = function (e) {
            if (!("readTime" in e)) {
              var t = new Date(Date.now());
              e.readTime = {
                toDate: function () {
                  return t;
                }
              };
            }
            return e;
          }),
          (e._ensureWriteTime = function (e) {
            if ((e || (e = {}), !("writeTime" in e))) {
              var t = new Date(Date.now());
              e.writeTime = {
                toDate: function () {
                  return t;
                }
              };
            }
            return e;
          }),
          (e._isDocumentSnapshot = function (e) {
            return (
              e.constructor.name === mt.DocumentSnapshot.prototype.constructor.name ||
              e.constructor.name === mt.QueryDocumentSnapshot.prototype.constructor.name ||
              "TestOnlyNullDocumentSnapshot" === e.constructor.name
            );
          }),
          (e._isDocumentReference = function (e) {
            return e.constructor.name === mt.DocumentReference.prototype.constructor.name;
          }),
          (e._serverTimestamp = function () {
            var e = yt().api().firestore.FieldValue.serverTimestamp();
            if (!e) throw new Error("could not obtain valid Timestamp implementation from firestore api");
            return e;
          }),
          (e._timestamp = function () {
            return yt().api().firestore.Timestamp;
          }),
          (e._increment = function (e) {
            return yt().api().firestore.FieldValue.increment(e);
          });
      })(ft || (ft = {}));
      var bt = (function () {
        function e(e) {
          e && Object.assign(this, e);
        }
        return (
          (e._ensureDatastructures = function (e) {
            e.hasOwnProperty("__fisSerializations") || (e.__fisSerializations = a({}, e.__fisSerializations || {})),
              e.hasOwnProperty("__fisDeserializations") || (e.__fisDeserializations = a({}, e.__fisDeserializations || {})),
              e.hasOwnProperty("_subcollections") || (e._subcollections = h([], p(e._subcollections || [])));
          }),
          Object.defineProperty(e, "Timestamp", {
            get: function () {
              return ft._timestamp();
            },
            enumerable: !1,
            configurable: !0
          }),
          (e.prototype._fisSerialize = function (e) {
            var t, n;
            void 0 === e && (e = !1);
            var r = {};
            try {
              for (var o = f(Object.entries(this.__fisSerializations || {})), i = o.next(); !i.done; i = o.next()) {
                var a = p(i.value, 2),
                  s = a[0],
                  u = (0, a[1])(this, e);
                void 0 !== u && (r[s] = u);
              }
            } catch (c) {
              t = { error: c };
            } finally {
              try {
                i && !i.done && (n = o.return) && n.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
            return r;
          }),
          (e.prototype._fisDeserialize = function (e) {
            var t, n;
            try {
              for (var r = f(Object.entries(this.__fisDeserializations || {})), o = r.next(); !o.done; o = r.next()) {
                var i = p(o.value, 2),
                  a = i[0];
                void 0 !== e[a] && (this[a] = (0, i[1])(e));
              }
            } catch (s) {
              t = { error: s };
            } finally {
              try {
                o && !o.done && (n = r.return) && n.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
            return this;
          }),
          (e.prototype.toJSON = function () {
            return this._fisSerialize(!0);
          }),
          e
        );
      })();
      function _t(e, t, n) {
        return (
          void 0 === t && (t = !0),
          void 0 === n && (n = !0),
          function (r, o) {
            bt._ensureDatastructures(r),
              n &&
                (r.__fisSerializations[o] = function (t) {
                  var n;
                  if (o in t && void 0 !== t[o]) {
                    if (e) {
                      if (t[o] && "_fisSerialize" in t[o] && t[o]._fisSerialize instanceof Function) return t[o]._fisSerialize();
                      if (t[o] instanceof Object) return JSON.parse(JSON.stringify(((n = {}), (n[o] = t[o]), n)))[o];
                    }
                    return t[o];
                  }
                }),
              t &&
                (r.__fisDeserializations[o] = function (t) {
                  if (e && t[o] instanceof Object) {
                    var n = e(t[o]);
                    return "_fisDeserialize" in n && n._fisDeserialize instanceof Function ? n._fisDeserialize(t[o]) : n;
                  }
                  return t[o];
                });
          }
        );
      }
      var kt = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            i(t, e),
            s([_t(), u("design:type", Number)], t.prototype, "zipcode", void 0),
            s([_t(), u("design:type", String)], t.prototype, "city", void 0),
            t
          );
        })(bt),
        wt = (function () {
          return function (e) {
            Object.assign(this, e);
          };
        })(),
        St = {
          firstName: "John",
          surname: "Doe",
          birthDate: 999e3,
          address: { zipcode: 1234, city: "Chicago" },
          school: { name: "someSchool" },
          hobbies: ["sports", "reading"],
          voice: { pitch: "high" },
          addressbook: { fred: { zipcode: 123, city: "someCity" }, max: { zipcode: 321, city: "Musterstadt" } }
        };
      function Tt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Et(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Tt(Object(n), !0).forEach(function (t) {
                fe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Tt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      a(a({}, St), {
        address: new kt(St.address),
        school: new wt(St.school),
        addressbook: { fred: new kt(St.addressbook.fred), max: new kt(St.addressbook.max) }
      });
      var Ot = (function (e) {
          return (
            (e[(e.PLAIN_TO_CLASS = 0)] = "PLAIN_TO_CLASS"),
            (e[(e.CLASS_TO_PLAIN = 1)] = "CLASS_TO_PLAIN"),
            (e[(e.CLASS_TO_CLASS = 2)] = "CLASS_TO_CLASS"),
            e
          );
        })({}),
        Pt = new ((function () {
          function e() {
            d(this, e),
              (this._typeMetadatas = new Map()),
              (this._transformMetadatas = new Map()),
              (this._exposeMetadatas = new Map()),
              (this._excludeMetadatas = new Map()),
              (this._ancestorsMap = new Map());
          }
          return (
            y(e, [
              {
                key: "addTypeMetadata",
                value: function (e) {
                  this._typeMetadatas.has(e.target) || this._typeMetadatas.set(e.target, new Map()),
                    this._typeMetadatas.get(e.target).set(e.propertyName, e);
                }
              },
              {
                key: "addTransformMetadata",
                value: function (e) {
                  this._transformMetadatas.has(e.target) || this._transformMetadatas.set(e.target, new Map()),
                    this._transformMetadatas.get(e.target).has(e.propertyName) ||
                      this._transformMetadatas.get(e.target).set(e.propertyName, []),
                    this._transformMetadatas.get(e.target).get(e.propertyName).push(e);
                }
              },
              {
                key: "addExposeMetadata",
                value: function (e) {
                  this._exposeMetadatas.has(e.target) || this._exposeMetadatas.set(e.target, new Map()),
                    this._exposeMetadatas.get(e.target).set(e.propertyName, e);
                }
              },
              {
                key: "addExcludeMetadata",
                value: function (e) {
                  this._excludeMetadatas.has(e.target) || this._excludeMetadatas.set(e.target, new Map()),
                    this._excludeMetadatas.get(e.target).set(e.propertyName, e);
                }
              },
              {
                key: "findTransformMetadatas",
                value: function (e, t, n) {
                  return this.findMetadatas(this._transformMetadatas, e, t).filter(function (e) {
                    return (
                      !e.options ||
                      (!0 === e.options.toClassOnly && !0 === e.options.toPlainOnly) ||
                      (!0 === e.options.toClassOnly
                        ? n === Ot.CLASS_TO_CLASS || n === Ot.PLAIN_TO_CLASS
                        : !0 !== e.options.toPlainOnly || n === Ot.CLASS_TO_PLAIN)
                    );
                  });
                }
              },
              {
                key: "findExcludeMetadata",
                value: function (e, t) {
                  return this.findMetadata(this._excludeMetadatas, e, t);
                }
              },
              {
                key: "findExposeMetadata",
                value: function (e, t) {
                  return this.findMetadata(this._exposeMetadatas, e, t);
                }
              },
              {
                key: "findExposeMetadataByCustomName",
                value: function (e, t) {
                  return this.getExposedMetadatas(e).find(function (e) {
                    return e.options && e.options.name === t;
                  });
                }
              },
              {
                key: "findTypeMetadata",
                value: function (e, t) {
                  return this.findMetadata(this._typeMetadatas, e, t);
                }
              },
              {
                key: "getStrategy",
                value: function (e) {
                  var t = this._excludeMetadatas.get(e),
                    n = t && t.get(void 0),
                    r = this._exposeMetadatas.get(e),
                    o = r && r.get(void 0);
                  return (n && o) || (!n && !o) ? "none" : n ? "excludeAll" : "exposeAll";
                }
              },
              {
                key: "getExposedMetadatas",
                value: function (e) {
                  return this.getMetadata(this._exposeMetadatas, e);
                }
              },
              {
                key: "getExcludedMetadatas",
                value: function (e) {
                  return this.getMetadata(this._excludeMetadatas, e);
                }
              },
              {
                key: "getExposedProperties",
                value: function (e, t) {
                  return this.getExposedMetadatas(e)
                    .filter(function (e) {
                      return (
                        !e.options ||
                        (!0 === e.options.toClassOnly && !0 === e.options.toPlainOnly) ||
                        (!0 === e.options.toClassOnly
                          ? t === Ot.CLASS_TO_CLASS || t === Ot.PLAIN_TO_CLASS
                          : !0 !== e.options.toPlainOnly || t === Ot.CLASS_TO_PLAIN)
                      );
                    })
                    .map(function (e) {
                      return e.propertyName;
                    });
                }
              },
              {
                key: "getExcludedProperties",
                value: function (e, t) {
                  return this.getExcludedMetadatas(e)
                    .filter(function (e) {
                      return (
                        !e.options ||
                        (!0 === e.options.toClassOnly && !0 === e.options.toPlainOnly) ||
                        (!0 === e.options.toClassOnly
                          ? t === Ot.CLASS_TO_CLASS || t === Ot.PLAIN_TO_CLASS
                          : !0 !== e.options.toPlainOnly || t === Ot.CLASS_TO_PLAIN)
                      );
                    })
                    .map(function (e) {
                      return e.propertyName;
                    });
                }
              },
              {
                key: "clear",
                value: function () {
                  this._typeMetadatas.clear(), this._exposeMetadatas.clear(), this._excludeMetadatas.clear(), this._ancestorsMap.clear();
                }
              },
              {
                key: "getMetadata",
                value: function (e, t) {
                  var n,
                    r = e.get(t);
                  r &&
                    (n = Array.from(r.values()).filter(function (e) {
                      return void 0 !== e.propertyName;
                    }));
                  var o,
                    i = [],
                    a = pe(this.getAncestors(t));
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      var s = e.get(o.value);
                      if (s) {
                        var u = Array.from(s.values()).filter(function (e) {
                          return void 0 !== e.propertyName;
                        });
                        i.push.apply(i, Q(u));
                      }
                    }
                  } catch (c) {
                    a.e(c);
                  } finally {
                    a.f();
                  }
                  return i.concat(n || []);
                }
              },
              {
                key: "findMetadata",
                value: function (e, t, n) {
                  var r = e.get(t);
                  if (r) {
                    var o = r.get(n);
                    if (o) return o;
                  }
                  var i,
                    a = pe(this.getAncestors(t));
                  try {
                    for (a.s(); !(i = a.n()).done; ) {
                      var s = e.get(i.value);
                      if (s) {
                        var u = s.get(n);
                        if (u) return u;
                      }
                    }
                  } catch (c) {
                    a.e(c);
                  } finally {
                    a.f();
                  }
                }
              },
              {
                key: "findMetadatas",
                value: function (e, t, n) {
                  var r,
                    o = e.get(t);
                  o && (r = o.get(n));
                  var i,
                    a = [],
                    s = pe(this.getAncestors(t));
                  try {
                    for (s.s(); !(i = s.n()).done; ) {
                      var u = e.get(i.value);
                      u && u.has(n) && a.push.apply(a, Q(u.get(n)));
                    }
                  } catch (c) {
                    s.e(c);
                  } finally {
                    s.f();
                  }
                  return a
                    .slice()
                    .reverse()
                    .concat((r || []).slice().reverse());
                }
              },
              {
                key: "getAncestors",
                value: function (e) {
                  if (!e) return [];
                  if (!this._ancestorsMap.has(e)) {
                    for (
                      var t = [], n = Object.getPrototypeOf(e.prototype.constructor);
                      void 0 !== n.prototype;
                      n = Object.getPrototypeOf(n.prototype.constructor)
                    )
                      t.push(n);
                    this._ancestorsMap.set(e, t);
                  }
                  return this._ancestorsMap.get(e);
                }
              }
            ]),
            e
          );
        })())();
      function xt() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : void 0;
      }
      function Ct(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.then;
      }
      function At(e) {
        var t = new e();
        return t instanceof Set || "push" in t ? t : [];
      }
      var It = (function () {
          function e(t, n) {
            d(this, e), (this.transformationType = t), (this.options = n), (this.recursionStack = new Set());
          }
          return (
            y(e, [
              {
                key: "transform",
                value: function (e, t, n, r, o) {
                  var i = this,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                  if (Array.isArray(t) || t instanceof Set) {
                    var s = r && this.transformationType === Ot.PLAIN_TO_CLASS ? At(r) : [];
                    return (
                      t.forEach(function (t, r) {
                        var o = e ? e[r] : void 0;
                        if (i.options.enableCircularCheck && i.isCircular(t))
                          i.transformationType === Ot.CLASS_TO_CLASS && (s instanceof Set ? s.add(t) : s.push(t));
                        else {
                          var u;
                          if (
                            "function" != typeof n &&
                            n &&
                            n.options &&
                            n.options.discriminator &&
                            n.options.discriminator.property &&
                            n.options.discriminator.subTypes
                          ) {
                            if (i.transformationType === Ot.PLAIN_TO_CLASS) {
                              u = n.options.discriminator.subTypes.find(function (e) {
                                return e.name === t[n.options.discriminator.property];
                              });
                              var c = n.typeFunction({ newObject: s, object: t, property: void 0 });
                              (u = void 0 === u ? c : u.value),
                                n.options.keepDiscriminatorProperty || delete t[n.options.discriminator.property];
                            }
                            i.transformationType === Ot.CLASS_TO_CLASS && (u = t.constructor),
                              i.transformationType === Ot.CLASS_TO_PLAIN &&
                                (t[n.options.discriminator.property] = n.options.discriminator.subTypes.find(function (e) {
                                  return e.value === t.constructor;
                                }).name);
                          } else u = n;
                          var l = i.transform(o, t, u, void 0, t instanceof Map, a + 1);
                          s instanceof Set ? s.add(l) : s.push(l);
                        }
                      }),
                      s
                    );
                  }
                  if (n !== String || o) {
                    if (n !== Number || o) {
                      if (n !== Boolean || o) {
                        if ((n === Date || t instanceof Date) && !o)
                          return t instanceof Date ? new Date(t.valueOf()) : null == t ? t : new Date(t);
                        if (xt().Buffer && (n === Buffer || t instanceof Buffer) && !o) return null == t ? t : Buffer.from(t);
                        if (Ct(t) && !o)
                          return new Promise(function (e, r) {
                            t.then(function (t) {
                              return e(i.transform(void 0, t, n, void 0, void 0, a + 1));
                            }, r);
                          });
                        if (o || null === t || "object" != typeof t || "function" != typeof t.then) {
                          if ("object" == typeof t && null !== t) {
                            n || t.constructor === Object || (n = t.constructor),
                              !n && e && (n = e.constructor),
                              this.options.enableCircularCheck && this.recursionStack.add(t);
                            var u = this.getKeys(n, t, o),
                              c = e || {};
                            e ||
                              (this.transformationType !== Ot.PLAIN_TO_CLASS && this.transformationType !== Ot.CLASS_TO_CLASS) ||
                              (c = o ? new Map() : n ? new n() : {});
                            var l,
                              f = pe(u);
                            try {
                              var p = function () {
                                var r = l.value;
                                if ("__proto__" === r || "constructor" === r) return "continue";
                                var s = r,
                                  u = r,
                                  f = r;
                                if (!i.options.ignoreDecorators && n)
                                  if (i.transformationType === Ot.PLAIN_TO_CLASS) {
                                    var p = Pt.findExposeMetadataByCustomName(n, r);
                                    p && ((f = p.propertyName), (u = p.propertyName));
                                  } else if (i.transformationType === Ot.CLASS_TO_PLAIN || i.transformationType === Ot.CLASS_TO_CLASS) {
                                    var h = Pt.findExposeMetadata(n, r);
                                    h && h.options && h.options.name && (u = h.options.name);
                                  }
                                var d = void 0;
                                d = t instanceof Map ? t.get(s) : t[s] instanceof Function ? t[s]() : t[s];
                                var v = void 0,
                                  y = d instanceof Map;
                                if (n && o) v = n;
                                else if (n) {
                                  var m = Pt.findTypeMetadata(n, f);
                                  if (m) {
                                    var g = m.typeFunction ? m.typeFunction({ newObject: c, object: t, property: f }) : m.reflectedType;
                                    m.options &&
                                    m.options.discriminator &&
                                    m.options.discriminator.property &&
                                    m.options.discriminator.subTypes
                                      ? t[s] instanceof Array
                                        ? (v = m)
                                        : (i.transformationType === Ot.PLAIN_TO_CLASS &&
                                            ((v =
                                              void 0 ===
                                              (v = m.options.discriminator.subTypes.find(function (e) {
                                                if (d && d instanceof Object && m.options.discriminator.property in d)
                                                  return e.name === d[m.options.discriminator.property];
                                              }))
                                                ? g
                                                : v.value),
                                            m.options.keepDiscriminatorProperty ||
                                              (d &&
                                                d instanceof Object &&
                                                m.options.discriminator.property in d &&
                                                delete d[m.options.discriminator.property])),
                                          i.transformationType === Ot.CLASS_TO_CLASS && (v = d.constructor),
                                          i.transformationType === Ot.CLASS_TO_PLAIN &&
                                            (d[m.options.discriminator.property] = m.options.discriminator.subTypes.find(function (e) {
                                              return e.value === d.constructor;
                                            }).name))
                                      : (v = g),
                                      (y = y || m.reflectedType === Map);
                                  } else if (i.options.targetMaps)
                                    i.options.targetMaps
                                      .filter(function (e) {
                                        return e.target === n && !!e.properties[f];
                                      })
                                      .forEach(function (e) {
                                        return (v = e.properties[f]);
                                      });
                                  else if (i.options.enableImplicitConversion && i.transformationType === Ot.PLAIN_TO_CLASS) {
                                    var b = Reflect.getMetadata("design:type", n.prototype, f);
                                    b && (v = b);
                                  }
                                }
                                var _ = Array.isArray(t[s]) ? i.getReflectedType(n, f) : void 0,
                                  k = e ? e[s] : void 0;
                                if (c.constructor.prototype) {
                                  var w = Object.getOwnPropertyDescriptor(c.constructor.prototype, u);
                                  if (
                                    (i.transformationType === Ot.PLAIN_TO_CLASS || i.transformationType === Ot.CLASS_TO_CLASS) &&
                                    ((w && !w.set) || c[u] instanceof Function)
                                  )
                                    return "continue";
                                }
                                if (i.options.enableCircularCheck && i.isCircular(d)) {
                                  if (i.transformationType === Ot.CLASS_TO_CLASS) {
                                    var S = d;
                                    (void 0 !== (S = i.applyCustomTransformations(S, n, r, t, i.transformationType)) ||
                                      i.options.exposeUnsetFields) &&
                                      (c instanceof Map ? c.set(u, S) : (c[u] = S));
                                  }
                                } else {
                                  var T,
                                    E = i.transformationType === Ot.PLAIN_TO_CLASS ? u : r;
                                  i.transformationType === Ot.CLASS_TO_PLAIN
                                    ? ((T = i.applyCustomTransformations((T = t[E]), n, E, t, i.transformationType)),
                                      (T = i.transform(k, (T = t[E] === T ? d : T), v, _, y, a + 1)))
                                    : void 0 === d && i.options.exposeDefaultValues
                                    ? (T = c[u])
                                    : ((T = i.transform(k, d, v, _, y, a + 1)),
                                      (T = i.applyCustomTransformations(T, n, E, t, i.transformationType))),
                                    (void 0 !== T || i.options.exposeUnsetFields) && (c instanceof Map ? c.set(u, T) : (c[u] = T));
                                }
                              };
                              for (f.s(); !(l = f.n()).done; ) p();
                            } catch (h) {
                              f.e(h);
                            } finally {
                              f.f();
                            }
                            return this.options.enableCircularCheck && this.recursionStack.delete(t), c;
                          }
                          return t;
                        }
                        return t;
                      }
                      return null == t ? t : Boolean(t);
                    }
                    return null == t ? t : Number(t);
                  }
                  return null == t ? t : String(t);
                }
              },
              {
                key: "applyCustomTransformations",
                value: function (e, t, n, r, o) {
                  var i = this,
                    a = Pt.findTransformMetadatas(t, n, this.transformationType);
                  return (
                    void 0 !== this.options.version &&
                      (a = a.filter(function (e) {
                        return !e.options || i.checkVersion(e.options.since, e.options.until);
                      })),
                    (a = a.filter(
                      this.options.groups && this.options.groups.length
                        ? function (e) {
                            return !e.options || i.checkGroups(e.options.groups);
                          }
                        : function (e) {
                            return !e.options || !e.options.groups || !e.options.groups.length;
                          }
                    )).forEach(function (t) {
                      e = t.transformFn({ value: e, key: n, obj: r, type: o, options: i.options });
                    }),
                    e
                  );
                }
              },
              {
                key: "isCircular",
                value: function (e) {
                  return this.recursionStack.has(e);
                }
              },
              {
                key: "getReflectedType",
                value: function (e, t) {
                  if (e) {
                    var n = Pt.findTypeMetadata(e, t);
                    return n ? n.reflectedType : void 0;
                  }
                }
              },
              {
                key: "getKeys",
                value: function (e, t, n) {
                  var r = this,
                    o = Pt.getStrategy(e);
                  "none" === o && (o = this.options.strategy || "exposeAll");
                  var i = [];
                  if ((("exposeAll" === o || n) && (i = t instanceof Map ? Array.from(t.keys()) : Object.keys(t)), n)) return i;
                  if (!this.options.ignoreDecorators && e) {
                    var a = Pt.getExposedProperties(e, this.transformationType);
                    this.transformationType === Ot.PLAIN_TO_CLASS &&
                      (a = a.map(function (t) {
                        var n = Pt.findExposeMetadata(e, t);
                        return n && n.options && n.options.name ? n.options.name : t;
                      })),
                      (i = this.options.excludeExtraneousValues ? a : i.concat(a));
                    var s = Pt.getExcludedProperties(e, this.transformationType);
                    s.length > 0 &&
                      (i = i.filter(function (e) {
                        return !s.includes(e);
                      })),
                      void 0 !== this.options.version &&
                        (i = i.filter(function (t) {
                          var n = Pt.findExposeMetadata(e, t);
                          return !n || !n.options || r.checkVersion(n.options.since, n.options.until);
                        })),
                      (i = i.filter(
                        this.options.groups && this.options.groups.length
                          ? function (t) {
                              var n = Pt.findExposeMetadata(e, t);
                              return !n || !n.options || r.checkGroups(n.options.groups);
                            }
                          : function (t) {
                              var n = Pt.findExposeMetadata(e, t);
                              return !(n && n.options && n.options.groups && n.options.groups.length);
                            }
                      ));
                  }
                  return (
                    this.options.excludePrefixes &&
                      this.options.excludePrefixes.length &&
                      (i = i.filter(function (e) {
                        return r.options.excludePrefixes.every(function (t) {
                          return e.substr(0, t.length) !== t;
                        });
                      })),
                    i.filter(function (e, t, n) {
                      return n.indexOf(e) === t;
                    })
                  );
                }
              },
              {
                key: "checkVersion",
                value: function (e, t) {
                  var n = !0;
                  return n && e && (n = this.options.version >= e), n && t && (n = this.options.version < t), n;
                }
              },
              {
                key: "checkGroups",
                value: function (e) {
                  return (
                    !e ||
                    this.options.groups.some(function (t) {
                      return e.includes(t);
                    })
                  );
                }
              }
            ]),
            e
          );
        })(),
        Dt = {
          enableCircularCheck: !1,
          enableImplicitConversion: !1,
          excludeExtraneousValues: !1,
          excludePrefixes: void 0,
          exposeDefaultValues: !1,
          exposeUnsetFields: !0,
          groups: void 0,
          ignoreDecorators: !1,
          strategy: void 0,
          targetMaps: void 0,
          version: void 0
        };
      new ((function () {
        function e() {
          d(this, e);
        }
        return (
          y(e, [
            {
              key: "classToPlain",
              value: function (e, t) {
                return new It(Ot.CLASS_TO_PLAIN, Et(Et({}, Dt), t)).transform(void 0, e, void 0, void 0, void 0, void 0);
              }
            },
            {
              key: "classToPlainFromExist",
              value: function (e, t, n) {
                return new It(Ot.CLASS_TO_PLAIN, Et(Et({}, Dt), n)).transform(t, e, void 0, void 0, void 0, void 0);
              }
            },
            {
              key: "plainToClass",
              value: function (e, t, n) {
                return new It(Ot.PLAIN_TO_CLASS, Et(Et({}, Dt), n)).transform(void 0, t, e, void 0, void 0, void 0);
              }
            },
            {
              key: "plainToClassFromExist",
              value: function (e, t, n) {
                return new It(Ot.PLAIN_TO_CLASS, Et(Et({}, Dt), n)).transform(e, t, void 0, void 0, void 0, void 0);
              }
            },
            {
              key: "classToClass",
              value: function (e, t) {
                return new It(Ot.CLASS_TO_CLASS, Et(Et({}, Dt), t)).transform(void 0, e, void 0, void 0, void 0, void 0);
              }
            },
            {
              key: "classToClassFromExist",
              value: function (e, t, n) {
                return new It(Ot.CLASS_TO_CLASS, Et(Et({}, Dt), n)).transform(t, e, void 0, void 0, void 0, void 0);
              }
            },
            {
              key: "serialize",
              value: function (e, t) {
                return JSON.stringify(this.classToPlain(e, t));
              }
            },
            {
              key: "deserialize",
              value: function (e, t, n) {
                var r = JSON.parse(t);
                return this.plainToClass(e, r, n);
              }
            },
            {
              key: "deserializeArray",
              value: function (e, t, n) {
                var r = JSON.parse(t);
                return this.plainToClass(e, r, n);
              }
            }
          ]),
          e
        );
      })())(),
        (function (t) {
          var n, o;
          void 0 === t && (t = new ke());
          var i = {};
          function a() {
            n.pause(),
              o.getTracks().forEach(function (e) {
                e.stop();
              }),
              (o = null);
          }
          (i.start = function (e) {
            return (
              o && a(),
              ((r = e), t.getUserMedia({ video: r })).then(function (e) {
                o = e;
                var t = new Promise(function (e) {
                  n || (((n = document.createElement("video")).volume = 0), document.body.appendChild(n)),
                    n.addEventListener("canplay", function t() {
                      n.removeEventListener("canplay", t), e({ width: n.videoWidth, height: n.videoHeight });
                    });
                });
                return (n.srcObject = o), n.play(), t;
              })
            );
            var r;
          }),
            (i.stop = function () {
              a();
            }),
            (i.getVideoDevices = function () {
              return t.getVideoSources();
            });
          var s,
            u =
              ((s = function (e) {
                window.parent.postMessage(e, "http://localhost:4201");
              }),
              function (e, t) {
                var n = !0,
                  r = function (e) {
                    s({ type: "result", msgId: t.msgId, data: e, isComplete: !0, isNext: n });
                  },
                  o = function (e) {
                    s({ type: "result", msgId: t.msgId, data: e, isError: !0 });
                  };
                Promise.resolve(e).then(function (e) {
                  var i;
                  (i = e) && (i instanceof H || ("function" == typeof i.lift && "function" == typeof i.subscribe))
                    ? ((n = !1),
                      e.subscribe(
                        function (e) {
                          s({ type: "result", msgId: t.msgId, data: e, isNext: !0 });
                        },
                        o,
                        function () {
                          return r(void 0);
                        }
                      ))
                    : r(e);
                }, o);
              });
          function c(e) {
            return e instanceof Error ? Promise.reject(e.toString()) : Promise.reject(e);
          }
          e
            ? chrome.runtime.onMessage.addListener(function (e, t, n) {
                return (
                  !!(e && "camFrameMsgWithResult" === e.type && (e = e.data) && i.hasOwnProperty(e.type)) && (r(n, i[e.type](e.data)), !0)
                );
              })
            : (console.log("camFrame: using dev-only messaging"),
              window.addEventListener("message", function (e) {
                var t = e.data;
                if (i.hasOwnProperty(t.type)) {
                  var n = Promise.resolve(i[t.type](t.data)).catch(c);
                  u(n, t);
                }
              })),
            window.parent.postMessage("castifyDrawCamFrameReady", "*");
        })();
    })();
})();
