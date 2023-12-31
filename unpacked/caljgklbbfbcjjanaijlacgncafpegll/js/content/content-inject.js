/**
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 *
 * @license
 *
 */
!(function () {
  return function n(t, e, r) {
    function i(a, s) {
      if (!e[a]) {
        if (!t[a]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(a, !0);
          if (o) return o(a, !0);
          var c = new Error("Cannot find module '" + a + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var u = (e[a] = { exports: {} });
        t[a][0].call(
          u.exports,
          function (n) {
            return i(t[a][1][n] || n);
          },
          u,
          u.exports,
          n,
          t,
          e,
          r
        );
      }
      return e[a].exports;
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i;
  };
})()(
  {
    1: [
      function (n, t, e) {
        var r = n("../internals/is-callable"),
          i = n("../internals/try-to-string"),
          o = TypeError;
        t.exports = function (n) {
          if (r(n)) return n;
          throw o(i(n) + " is not a function");
        };
      },
      { "../internals/is-callable": 34, "../internals/try-to-string": 65 }
    ],
    2: [
      function (n, t, e) {
        var r = n("../internals/is-object"),
          i = String,
          o = TypeError;
        t.exports = function (n) {
          if (r(n)) return n;
          throw o(i(n) + " is not an object");
        };
      },
      { "../internals/is-object": 37 }
    ],
    3: [
      function (n, t, e) {
        var r = n("../internals/to-indexed-object"),
          i = n("../internals/to-absolute-index"),
          o = n("../internals/length-of-array-like"),
          a = function (n) {
            return function (t, e, a) {
              var s,
                l = r(t),
                c = o(l),
                u = i(a, c);
              if (n && e != e) {
                for (; c > u; ) if ((s = l[u++]) != s) return !0;
              } else for (; c > u; u++) if ((n || u in l) && l[u] === e) return n || u || 0;
              return !n && -1;
            };
          };
        t.exports = { includes: a(!0), indexOf: a(!1) };
      },
      { "../internals/length-of-array-like": 40, "../internals/to-absolute-index": 58, "../internals/to-indexed-object": 59 }
    ],
    4: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this");
        t.exports = r([].slice);
      },
      { "../internals/function-uncurry-this": 24 }
    ],
    5: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this-raw"),
          i = r({}.toString),
          o = r("".slice);
        t.exports = function (n) {
          return o(i(n), 8, -1);
        };
      },
      { "../internals/function-uncurry-this-raw": 23 }
    ],
    6: [
      function (n, t, e) {
        var r = n("../internals/has-own-property"),
          i = n("../internals/own-keys"),
          o = n("../internals/object-get-own-property-descriptor"),
          a = n("../internals/object-define-property");
        t.exports = function (n, t, e) {
          for (var s = i(t), l = a.f, c = o.f, u = 0; u < s.length; u++) {
            var f = s[u];
            r(n, f) || (e && r(e, f)) || l(n, f, c(t, f));
          }
        };
      },
      {
        "../internals/has-own-property": 28,
        "../internals/object-define-property": 43,
        "../internals/object-get-own-property-descriptor": 44,
        "../internals/own-keys": 51
      }
    ],
    7: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/object-define-property"),
          o = n("../internals/create-property-descriptor");
        t.exports = r
          ? function (n, t, e) {
              return i.f(n, t, o(1, e));
            }
          : function (n, t, e) {
              return (n[t] = e), n;
            };
      },
      { "../internals/create-property-descriptor": 8, "../internals/descriptors": 11, "../internals/object-define-property": 43 }
    ],
    8: [
      function (n, t, e) {
        t.exports = function (n, t) {
          return { enumerable: !(1 & n), configurable: !(2 & n), writable: !(4 & n), value: t };
        };
      },
      {}
    ],
    9: [
      function (n, t, e) {
        var r = n("../internals/is-callable"),
          i = n("../internals/object-define-property"),
          o = n("../internals/make-built-in"),
          a = n("../internals/define-global-property");
        t.exports = function (n, t, e, s) {
          s || (s = {});
          var l = s.enumerable,
            c = void 0 !== s.name ? s.name : t;
          if ((r(e) && o(e, c, s), s.global)) l ? (n[t] = e) : a(t, e);
          else {
            try {
              s.unsafe ? n[t] && (l = !0) : delete n[t];
            } catch (n) {}
            l ? (n[t] = e) : i.f(n, t, { value: e, enumerable: !1, configurable: !s.nonConfigurable, writable: !s.nonWritable });
          }
          return n;
        };
      },
      {
        "../internals/define-global-property": 10,
        "../internals/is-callable": 34,
        "../internals/make-built-in": 41,
        "../internals/object-define-property": 43
      }
    ],
    10: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = Object.defineProperty;
        t.exports = function (n, t) {
          try {
            i(r, n, { value: t, configurable: !0, writable: !0 });
          } catch (e) {
            r[n] = t;
          }
          return t;
        };
      },
      { "../internals/global": 27 }
    ],
    11: [
      function (n, t, e) {
        var r = n("../internals/fails");
        t.exports = !r(function () {
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
      { "../internals/fails": 18 }
    ],
    12: [
      function (n, t, e) {
        var r = "object" == typeof document && document.all,
          i = void 0 === r && void 0 !== r;
        t.exports = { all: r, IS_HTMLDDA: i };
      },
      {}
    ],
    13: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/is-object"),
          o = r.document,
          a = i(o) && i(o.createElement);
        t.exports = function (n) {
          return a ? o.createElement(n) : {};
        };
      },
      { "../internals/global": 27, "../internals/is-object": 37 }
    ],
    14: [
      function (n, t, e) {
        var r = n("../internals/get-built-in");
        t.exports = r("navigator", "userAgent") || "";
      },
      { "../internals/get-built-in": 25 }
    ],
    15: [
      function (n, t, e) {
        var r,
          i,
          o = n("../internals/global"),
          a = n("../internals/engine-user-agent"),
          s = o.process,
          l = o.Deno,
          c = (s && s.versions) || (l && l.version),
          u = c && c.v8;
        u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
          !i && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = +r[1]),
          (t.exports = i);
      },
      { "../internals/engine-user-agent": 14, "../internals/global": 27 }
    ],
    16: [
      function (n, t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      },
      {}
    ],
    17: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/object-get-own-property-descriptor").f,
          o = n("../internals/create-non-enumerable-property"),
          a = n("../internals/define-built-in"),
          s = n("../internals/define-global-property"),
          l = n("../internals/copy-constructor-properties"),
          c = n("../internals/is-forced");
        t.exports = function (n, t) {
          var e,
            u,
            f,
            p,
            b,
            y = n.target,
            d = n.global,
            v = n.stat;
          if ((e = d ? r : v ? r[y] || s(y, {}) : (r[y] || {}).prototype))
            for (u in t) {
              if (
                ((p = t[u]),
                (f = n.dontCallGetSet ? (b = i(e, u)) && b.value : e[u]),
                !c(d ? u : y + (v ? "." : "#") + u, n.forced) && void 0 !== f)
              ) {
                if (typeof p == typeof f) continue;
                l(p, f);
              }
              (n.sham || (f && f.sham)) && o(p, "sham", !0), a(e, u, p, n);
            }
        };
      },
      {
        "../internals/copy-constructor-properties": 6,
        "../internals/create-non-enumerable-property": 7,
        "../internals/define-built-in": 9,
        "../internals/define-global-property": 10,
        "../internals/global": 27,
        "../internals/is-forced": 35,
        "../internals/object-get-own-property-descriptor": 44
      }
    ],
    18: [
      function (n, t, e) {
        t.exports = function (n) {
          try {
            return !!n();
          } catch (n) {
            return !0;
          }
        };
      },
      {}
    ],
    19: [
      function (n, t, e) {
        var r = n("../internals/function-bind-native"),
          i = Function.prototype,
          o = i.apply,
          a = i.call;
        t.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (r
            ? a.bind(o)
            : function () {
                return a.apply(o, arguments);
              });
      },
      { "../internals/function-bind-native": 20 }
    ],
    20: [
      function (n, t, e) {
        var r = n("../internals/fails");
        t.exports = !r(function () {
          var n = function () {}.bind();
          return "function" != typeof n || n.hasOwnProperty("prototype");
        });
      },
      { "../internals/fails": 18 }
    ],
    21: [
      function (n, t, e) {
        var r = n("../internals/function-bind-native"),
          i = Function.prototype.call;
        t.exports = r
          ? i.bind(i)
          : function () {
              return i.apply(i, arguments);
            };
      },
      { "../internals/function-bind-native": 20 }
    ],
    22: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/has-own-property"),
          o = Function.prototype,
          a = r && Object.getOwnPropertyDescriptor,
          s = i(o, "name"),
          l = s && "something" === function () {}.name,
          c = s && (!r || (r && a(o, "name").configurable));
        t.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: c };
      },
      { "../internals/descriptors": 11, "../internals/has-own-property": 28 }
    ],
    23: [
      function (n, t, e) {
        var r = n("../internals/function-bind-native"),
          i = Function.prototype,
          o = i.call,
          a = r && i.bind.bind(o, o);
        t.exports = function (n) {
          return r
            ? a(n)
            : function () {
                return o.apply(n, arguments);
              };
        };
      },
      { "../internals/function-bind-native": 20 }
    ],
    24: [
      function (n, t, e) {
        var r = n("../internals/classof-raw"),
          i = n("../internals/function-uncurry-this-raw");
        t.exports = function (n) {
          if ("Function" === r(n)) return i(n);
        };
      },
      { "../internals/classof-raw": 5, "../internals/function-uncurry-this-raw": 23 }
    ],
    25: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/is-callable");
        t.exports = function (n, t) {
          return arguments.length < 2 ? ((e = r[n]), i(e) ? e : void 0) : r[n] && r[n][t];
          var e;
        };
      },
      { "../internals/global": 27, "../internals/is-callable": 34 }
    ],
    26: [
      function (n, t, e) {
        var r = n("../internals/a-callable"),
          i = n("../internals/is-null-or-undefined");
        t.exports = function (n, t) {
          var e = n[t];
          return i(e) ? void 0 : r(e);
        };
      },
      { "../internals/a-callable": 1, "../internals/is-null-or-undefined": 36 }
    ],
    27: [
      function (n, t, e) {
        (function (n) {
          (function () {
            var e = function (n) {
              return n && n.Math == Math && n;
            };
            t.exports =
              e("object" == typeof globalThis && globalThis) ||
              e("object" == typeof window && window) ||
              e("object" == typeof self && self) ||
              e("object" == typeof n && n) ||
              (function () {
                return this;
              })() ||
              Function("return this")();
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    28: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = n("../internals/to-object"),
          o = r({}.hasOwnProperty);
        t.exports =
          Object.hasOwn ||
          function (n, t) {
            return o(i(n), t);
          };
      },
      { "../internals/function-uncurry-this": 24, "../internals/to-object": 62 }
    ],
    29: [
      function (n, t, e) {
        t.exports = {};
      },
      {}
    ],
    30: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/fails"),
          o = n("../internals/document-create-element");
        t.exports =
          !r &&
          !i(function () {
            return (
              7 !=
              Object.defineProperty(o("div"), "a", {
                get: function () {
                  return 7;
                }
              }).a
            );
          });
      },
      { "../internals/descriptors": 11, "../internals/document-create-element": 13, "../internals/fails": 18 }
    ],
    31: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = n("../internals/fails"),
          o = n("../internals/classof-raw"),
          a = Object,
          s = r("".split);
        t.exports = i(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (n) {
              return "String" == o(n) ? s(n, "") : a(n);
            }
          : a;
      },
      { "../internals/classof-raw": 5, "../internals/fails": 18, "../internals/function-uncurry-this": 24 }
    ],
    32: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = n("../internals/is-callable"),
          o = n("../internals/shared-store"),
          a = r(Function.toString);
        i(o.inspectSource) ||
          (o.inspectSource = function (n) {
            return a(n);
          }),
          (t.exports = o.inspectSource);
      },
      { "../internals/function-uncurry-this": 24, "../internals/is-callable": 34, "../internals/shared-store": 55 }
    ],
    33: [
      function (n, t, e) {
        var r,
          i,
          o,
          a = n("../internals/weak-map-basic-detection"),
          s = n("../internals/global"),
          l = n("../internals/is-object"),
          c = n("../internals/create-non-enumerable-property"),
          u = n("../internals/has-own-property"),
          f = n("../internals/shared-store"),
          p = n("../internals/shared-key"),
          b = n("../internals/hidden-keys"),
          y = s.TypeError,
          d = s.WeakMap;
        if (a || f.state) {
          var v = f.state || (f.state = new d());
          (v.get = v.get),
            (v.has = v.has),
            (v.set = v.set),
            (r = function (n, t) {
              if (v.has(n)) throw y("Object already initialized");
              return (t.facade = n), v.set(n, t), t;
            }),
            (i = function (n) {
              return v.get(n) || {};
            }),
            (o = function (n) {
              return v.has(n);
            });
        } else {
          var g = p("state");
          (b[g] = !0),
            (r = function (n, t) {
              if (u(n, g)) throw y("Object already initialized");
              return (t.facade = n), c(n, g, t), t;
            }),
            (i = function (n) {
              return u(n, g) ? n[g] : {};
            }),
            (o = function (n) {
              return u(n, g);
            });
        }
        t.exports = {
          set: r,
          get: i,
          has: o,
          enforce: function (n) {
            return o(n) ? i(n) : r(n, {});
          },
          getterFor: function (n) {
            return function (t) {
              var e;
              if (!l(t) || (e = i(t)).type !== n) throw y("Incompatible receiver, " + n + " required");
              return e;
            };
          }
        };
      },
      {
        "../internals/create-non-enumerable-property": 7,
        "../internals/global": 27,
        "../internals/has-own-property": 28,
        "../internals/hidden-keys": 29,
        "../internals/is-object": 37,
        "../internals/shared-key": 54,
        "../internals/shared-store": 55,
        "../internals/weak-map-basic-detection": 70
      }
    ],
    34: [
      function (n, t, e) {
        var r = n("../internals/document-all"),
          i = r.all;
        t.exports = r.IS_HTMLDDA
          ? function (n) {
              return "function" == typeof n || n === i;
            }
          : function (n) {
              return "function" == typeof n;
            };
      },
      { "../internals/document-all": 12 }
    ],
    35: [
      function (n, t, e) {
        var r = n("../internals/fails"),
          i = n("../internals/is-callable"),
          o = /#|\.prototype\./,
          a = function (n, t) {
            var e = l[s(n)];
            return e == u || (e != c && (i(t) ? r(t) : !!t));
          },
          s = (a.normalize = function (n) {
            return String(n).replace(o, ".").toLowerCase();
          }),
          l = (a.data = {}),
          c = (a.NATIVE = "N"),
          u = (a.POLYFILL = "P");
        t.exports = a;
      },
      { "../internals/fails": 18, "../internals/is-callable": 34 }
    ],
    36: [
      function (n, t, e) {
        t.exports = function (n) {
          return null === n || void 0 === n;
        };
      },
      {}
    ],
    37: [
      function (n, t, e) {
        var r = n("../internals/is-callable"),
          i = n("../internals/document-all"),
          o = i.all;
        t.exports = i.IS_HTMLDDA
          ? function (n) {
              return "object" == typeof n ? null !== n : r(n) || n === o;
            }
          : function (n) {
              return "object" == typeof n ? null !== n : r(n);
            };
      },
      { "../internals/document-all": 12, "../internals/is-callable": 34 }
    ],
    38: [
      function (n, t, e) {
        t.exports = !1;
      },
      {}
    ],
    39: [
      function (n, t, e) {
        var r = n("../internals/get-built-in"),
          i = n("../internals/is-callable"),
          o = n("../internals/object-is-prototype-of"),
          a = n("../internals/use-symbol-as-uid"),
          s = Object;
        t.exports = a
          ? function (n) {
              return "symbol" == typeof n;
            }
          : function (n) {
              var t = r("Symbol");
              return i(t) && o(t.prototype, s(n));
            };
      },
      {
        "../internals/get-built-in": 25,
        "../internals/is-callable": 34,
        "../internals/object-is-prototype-of": 47,
        "../internals/use-symbol-as-uid": 67
      }
    ],
    40: [
      function (n, t, e) {
        var r = n("../internals/to-length");
        t.exports = function (n) {
          return r(n.length);
        };
      },
      { "../internals/to-length": 61 }
    ],
    41: [
      function (n, t, e) {
        var r = n("../internals/fails"),
          i = n("../internals/is-callable"),
          o = n("../internals/has-own-property"),
          a = n("../internals/descriptors"),
          s = n("../internals/function-name").CONFIGURABLE,
          l = n("../internals/inspect-source"),
          c = n("../internals/internal-state"),
          u = c.enforce,
          f = c.get,
          p = Object.defineProperty,
          b =
            a &&
            !r(function () {
              return 8 !== p(function () {}, "length", { value: 8 }).length;
            }),
          y = String(String).split("String"),
          d = (t.exports = function (n, t, e) {
            "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              e && e.getter && (t = "get " + t),
              e && e.setter && (t = "set " + t),
              (!o(n, "name") || (s && n.name !== t)) && (a ? p(n, "name", { value: t, configurable: !0 }) : (n.name = t)),
              b && e && o(e, "arity") && n.length !== e.arity && p(n, "length", { value: e.arity });
            try {
              e && o(e, "constructor") && e.constructor ? a && p(n, "prototype", { writable: !1 }) : n.prototype && (n.prototype = void 0);
            } catch (n) {}
            var r = u(n);
            return o(r, "source") || (r.source = y.join("string" == typeof t ? t : "")), n;
          });
        Function.prototype.toString = d(function () {
          return (i(this) && f(this).source) || l(this);
        }, "toString");
      },
      {
        "../internals/descriptors": 11,
        "../internals/fails": 18,
        "../internals/function-name": 22,
        "../internals/has-own-property": 28,
        "../internals/inspect-source": 32,
        "../internals/internal-state": 33,
        "../internals/is-callable": 34
      }
    ],
    42: [
      function (n, t, e) {
        var r = Math.ceil,
          i = Math.floor;
        t.exports =
          Math.trunc ||
          function (n) {
            var t = +n;
            return (t > 0 ? i : r)(t);
          };
      },
      {}
    ],
    43: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/ie8-dom-define"),
          o = n("../internals/v8-prototype-define-bug"),
          a = n("../internals/an-object"),
          s = n("../internals/to-property-key"),
          l = TypeError,
          c = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor;
        e.f = r
          ? o
            ? function (n, t, e) {
                if (
                  (a(n), (t = s(t)), a(e), "function" == typeof n && "prototype" === t && "value" in e && "writable" in e && !e.writable)
                ) {
                  var r = u(n, t);
                  r &&
                    r.writable &&
                    ((n[t] = e.value),
                    (e = {
                      configurable: "configurable" in e ? e.configurable : r.configurable,
                      enumerable: "enumerable" in e ? e.enumerable : r.enumerable,
                      writable: !1
                    }));
                }
                return c(n, t, e);
              }
            : c
          : function (n, t, e) {
              if ((a(n), (t = s(t)), a(e), i))
                try {
                  return c(n, t, e);
                } catch (n) {}
              if ("get" in e || "set" in e) throw l("Accessors not supported");
              return "value" in e && (n[t] = e.value), n;
            };
      },
      {
        "../internals/an-object": 2,
        "../internals/descriptors": 11,
        "../internals/ie8-dom-define": 30,
        "../internals/to-property-key": 64,
        "../internals/v8-prototype-define-bug": 68
      }
    ],
    44: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/function-call"),
          o = n("../internals/object-property-is-enumerable"),
          a = n("../internals/create-property-descriptor"),
          s = n("../internals/to-indexed-object"),
          l = n("../internals/to-property-key"),
          c = n("../internals/has-own-property"),
          u = n("../internals/ie8-dom-define"),
          f = Object.getOwnPropertyDescriptor;
        e.f = r
          ? f
          : function (n, t) {
              if (((n = s(n)), (t = l(t)), u))
                try {
                  return f(n, t);
                } catch (n) {}
              if (c(n, t)) return a(!i(o.f, n, t), n[t]);
            };
      },
      {
        "../internals/create-property-descriptor": 8,
        "../internals/descriptors": 11,
        "../internals/function-call": 21,
        "../internals/has-own-property": 28,
        "../internals/ie8-dom-define": 30,
        "../internals/object-property-is-enumerable": 49,
        "../internals/to-indexed-object": 59,
        "../internals/to-property-key": 64
      }
    ],
    45: [
      function (n, t, e) {
        var r = n("../internals/object-keys-internal"),
          i = n("../internals/enum-bug-keys").concat("length", "prototype");
        e.f =
          Object.getOwnPropertyNames ||
          function (n) {
            return r(n, i);
          };
      },
      { "../internals/enum-bug-keys": 16, "../internals/object-keys-internal": 48 }
    ],
    46: [
      function (n, t, e) {
        e.f = Object.getOwnPropertySymbols;
      },
      {}
    ],
    47: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this");
        t.exports = r({}.isPrototypeOf);
      },
      { "../internals/function-uncurry-this": 24 }
    ],
    48: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = n("../internals/has-own-property"),
          o = n("../internals/to-indexed-object"),
          a = n("../internals/array-includes").indexOf,
          s = n("../internals/hidden-keys"),
          l = r([].push);
        t.exports = function (n, t) {
          var e,
            r = o(n),
            c = 0,
            u = [];
          for (e in r) !i(s, e) && i(r, e) && l(u, e);
          for (; t.length > c; ) i(r, (e = t[c++])) && (~a(u, e) || l(u, e));
          return u;
        };
      },
      {
        "../internals/array-includes": 3,
        "../internals/function-uncurry-this": 24,
        "../internals/has-own-property": 28,
        "../internals/hidden-keys": 29,
        "../internals/to-indexed-object": 59
      }
    ],
    49: [
      function (n, t, e) {
        "use strict";
        var r = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          o = i && !r.call({ 1: 2 }, 1);
        e.f = o
          ? function (n) {
              var t = i(this, n);
              return !!t && t.enumerable;
            }
          : r;
      },
      {}
    ],
    50: [
      function (n, t, e) {
        var r = n("../internals/function-call"),
          i = n("../internals/is-callable"),
          o = n("../internals/is-object"),
          a = TypeError;
        t.exports = function (n, t) {
          var e, s;
          if ("string" === t && i((e = n.toString)) && !o((s = r(e, n)))) return s;
          if (i((e = n.valueOf)) && !o((s = r(e, n)))) return s;
          if ("string" !== t && i((e = n.toString)) && !o((s = r(e, n)))) return s;
          throw a("Can't convert object to primitive value");
        };
      },
      { "../internals/function-call": 21, "../internals/is-callable": 34, "../internals/is-object": 37 }
    ],
    51: [
      function (n, t, e) {
        var r = n("../internals/get-built-in"),
          i = n("../internals/function-uncurry-this"),
          o = n("../internals/object-get-own-property-names"),
          a = n("../internals/object-get-own-property-symbols"),
          s = n("../internals/an-object"),
          l = i([].concat);
        t.exports =
          r("Reflect", "ownKeys") ||
          function (n) {
            var t = o.f(s(n)),
              e = a.f;
            return e ? l(t, e(n)) : t;
          };
      },
      {
        "../internals/an-object": 2,
        "../internals/function-uncurry-this": 24,
        "../internals/get-built-in": 25,
        "../internals/object-get-own-property-names": 45,
        "../internals/object-get-own-property-symbols": 46
      }
    ],
    52: [
      function (n, t, e) {
        var r = n("../internals/is-null-or-undefined"),
          i = TypeError;
        t.exports = function (n) {
          if (r(n)) throw i("Can't call method on " + n);
          return n;
        };
      },
      { "../internals/is-null-or-undefined": 36 }
    ],
    53: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/function-apply"),
          o = n("../internals/is-callable"),
          a = n("../internals/engine-user-agent"),
          s = n("../internals/array-slice"),
          l = n("../internals/validate-arguments-length"),
          c = /MSIE .\./.test(a),
          u = r.Function,
          f = function (n) {
            return c
              ? function (t, e) {
                  var r = l(arguments.length, 1) > 2,
                    a = o(t) ? t : u(t),
                    c = r ? s(arguments, 2) : void 0;
                  return n(
                    r
                      ? function () {
                          i(a, this, c);
                        }
                      : a,
                    e
                  );
                }
              : n;
          };
        t.exports = { setTimeout: f(r.setTimeout), setInterval: f(r.setInterval) };
      },
      {
        "../internals/array-slice": 4,
        "../internals/engine-user-agent": 14,
        "../internals/function-apply": 19,
        "../internals/global": 27,
        "../internals/is-callable": 34,
        "../internals/validate-arguments-length": 69
      }
    ],
    54: [
      function (n, t, e) {
        var r = n("../internals/shared"),
          i = n("../internals/uid"),
          o = r("keys");
        t.exports = function (n) {
          return o[n] || (o[n] = i(n));
        };
      },
      { "../internals/shared": 56, "../internals/uid": 66 }
    ],
    55: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/define-global-property"),
          o = r["__core-js_shared__"] || i("__core-js_shared__", {});
        t.exports = o;
      },
      { "../internals/define-global-property": 10, "../internals/global": 27 }
    ],
    56: [
      function (n, t, e) {
        var r = n("../internals/is-pure"),
          i = n("../internals/shared-store");
        (t.exports = function (n, t) {
          return i[n] || (i[n] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.25.5",
          mode: r ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
      },
      { "../internals/is-pure": 38, "../internals/shared-store": 55 }
    ],
    57: [
      function (n, t, e) {
        var r = n("../internals/engine-v8-version"),
          i = n("../internals/fails");
        t.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            var n = Symbol();
            return !String(n) || !(Object(n) instanceof Symbol) || (!Symbol.sham && r && r < 41);
          });
      },
      { "../internals/engine-v8-version": 15, "../internals/fails": 18 }
    ],
    58: [
      function (n, t, e) {
        var r = n("../internals/to-integer-or-infinity"),
          i = Math.max,
          o = Math.min;
        t.exports = function (n, t) {
          var e = r(n);
          return e < 0 ? i(e + t, 0) : o(e, t);
        };
      },
      { "../internals/to-integer-or-infinity": 60 }
    ],
    59: [
      function (n, t, e) {
        var r = n("../internals/indexed-object"),
          i = n("../internals/require-object-coercible");
        t.exports = function (n) {
          return r(i(n));
        };
      },
      { "../internals/indexed-object": 31, "../internals/require-object-coercible": 52 }
    ],
    60: [
      function (n, t, e) {
        var r = n("../internals/math-trunc");
        t.exports = function (n) {
          var t = +n;
          return t != t || 0 === t ? 0 : r(t);
        };
      },
      { "../internals/math-trunc": 42 }
    ],
    61: [
      function (n, t, e) {
        var r = n("../internals/to-integer-or-infinity"),
          i = Math.min;
        t.exports = function (n) {
          return n > 0 ? i(r(n), 9007199254740991) : 0;
        };
      },
      { "../internals/to-integer-or-infinity": 60 }
    ],
    62: [
      function (n, t, e) {
        var r = n("../internals/require-object-coercible"),
          i = Object;
        t.exports = function (n) {
          return i(r(n));
        };
      },
      { "../internals/require-object-coercible": 52 }
    ],
    63: [
      function (n, t, e) {
        var r = n("../internals/function-call"),
          i = n("../internals/is-object"),
          o = n("../internals/is-symbol"),
          a = n("../internals/get-method"),
          s = n("../internals/ordinary-to-primitive"),
          l = n("../internals/well-known-symbol"),
          c = TypeError,
          u = l("toPrimitive");
        t.exports = function (n, t) {
          if (!i(n) || o(n)) return n;
          var e,
            l = a(n, u);
          if (l) {
            if ((void 0 === t && (t = "default"), (e = r(l, n, t)), !i(e) || o(e))) return e;
            throw c("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), s(n, t);
        };
      },
      {
        "../internals/function-call": 21,
        "../internals/get-method": 26,
        "../internals/is-object": 37,
        "../internals/is-symbol": 39,
        "../internals/ordinary-to-primitive": 50,
        "../internals/well-known-symbol": 71
      }
    ],
    64: [
      function (n, t, e) {
        var r = n("../internals/to-primitive"),
          i = n("../internals/is-symbol");
        t.exports = function (n) {
          var t = r(n, "string");
          return i(t) ? t : t + "";
        };
      },
      { "../internals/is-symbol": 39, "../internals/to-primitive": 63 }
    ],
    65: [
      function (n, t, e) {
        var r = String;
        t.exports = function (n) {
          try {
            return r(n);
          } catch (n) {
            return "Object";
          }
        };
      },
      {}
    ],
    66: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = 0,
          o = Math.random(),
          a = r((1).toString);
        t.exports = function (n) {
          return "Symbol(" + (void 0 === n ? "" : n) + ")_" + a(++i + o, 36);
        };
      },
      { "../internals/function-uncurry-this": 24 }
    ],
    67: [
      function (n, t, e) {
        var r = n("../internals/symbol-constructor-detection");
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      { "../internals/symbol-constructor-detection": 57 }
    ],
    68: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/fails");
        t.exports =
          r &&
          i(function () {
            return 42 != Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype;
          });
      },
      { "../internals/descriptors": 11, "../internals/fails": 18 }
    ],
    69: [
      function (n, t, e) {
        var r = TypeError;
        t.exports = function (n, t) {
          if (n < t) throw r("Not enough arguments");
          return n;
        };
      },
      {}
    ],
    70: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/is-callable"),
          o = r.WeakMap;
        t.exports = i(o) && /native code/.test(String(o));
      },
      { "../internals/global": 27, "../internals/is-callable": 34 }
    ],
    71: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/shared"),
          o = n("../internals/has-own-property"),
          a = n("../internals/uid"),
          s = n("../internals/symbol-constructor-detection"),
          l = n("../internals/use-symbol-as-uid"),
          c = i("wks"),
          u = r.Symbol,
          f = u && u.for,
          p = l ? u : (u && u.withoutSetter) || a;
        t.exports = function (n) {
          if (!o(c, n) || (!s && "string" != typeof c[n])) {
            var t = "Symbol." + n;
            s && o(u, n) ? (c[n] = u[n]) : (c[n] = l && f ? f(t) : p(t));
          }
          return c[n];
        };
      },
      {
        "../internals/global": 27,
        "../internals/has-own-property": 28,
        "../internals/shared": 56,
        "../internals/symbol-constructor-detection": 57,
        "../internals/uid": 66,
        "../internals/use-symbol-as-uid": 67
      }
    ],
    72: [
      function (n, t, e) {
        var r = n("../internals/export"),
          i = n("../internals/global"),
          o = n("../internals/schedulers-fix").setInterval;
        r({ global: !0, bind: !0, forced: i.setInterval !== o }, { setInterval: o });
      },
      { "../internals/export": 17, "../internals/global": 27, "../internals/schedulers-fix": 53 }
    ],
    73: [
      function (n, t, e) {
        var r = n("../internals/export"),
          i = n("../internals/global"),
          o = n("../internals/schedulers-fix").setTimeout;
        r({ global: !0, bind: !0, forced: i.setTimeout !== o }, { setTimeout: o });
      },
      { "../internals/export": 17, "../internals/global": 27, "../internals/schedulers-fix": 53 }
    ],
    74: [
      function (n, t, e) {
        n("../modules/web.set-interval"), n("../modules/web.set-timeout");
      },
      { "../modules/web.set-interval": 72, "../modules/web.set-timeout": 73 }
    ],
    75: [
      function (n, t, e) {
        "use strict";
        function r() {
          setTimeout(function () {
            chrome.runtime.sendMessage({ eventName: "injectContentScript", payload: {} });
          }, 500);
        }
        n("core-js/modules/web.timers.js"),
          "complete" === document.readyState
            ? r()
            : window.addEventListener("load", function () {
                r();
              });
      },
      { "core-js/modules/web.timers.js": 74 }
    ]
  },
  {},
  [75]
);
null;
