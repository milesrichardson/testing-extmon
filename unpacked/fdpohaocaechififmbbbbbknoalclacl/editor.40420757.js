(() => {
  function e(e, t, r, n) {
    Object.defineProperty(e, t, { get: r, set: n, enumerable: !0, configurable: !0 });
  }
  var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {};
  function r(e) {
    Object.defineProperty(e, "__esModule", { value: !0, configurable: !0 });
  }
  function n(e) {
    return e && e.__esModule ? e.default : e;
  }
  var o = {},
    i = {},
    a = t.parcelRequire60cc;
  null == a &&
    (((a = function (e) {
      if (e in o) return o[e].exports;
      if (e in i) {
        var t = i[e];
        delete i[e];
        var r = { id: e, exports: {} };
        return (o[e] = r), t.call(r.exports, r, r.exports), r.exports;
      }
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = "MODULE_NOT_FOUND"), n);
    }).register = function (e, t) {
      i[e] = t;
    }),
    (t.parcelRequire60cc = a)),
    a.register("aQ47y", function (e, t) {
      "use strict";
      var r = a("7O5ct"),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        s = {};
      function l(e) {
        return r.isMemo(e) ? i : s[e.$$typeof] || n;
      }
      (s[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (s[r.Memo] = i);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (h) {
            var i = f(r);
            i && i !== h && e(t, i, n);
          }
          var a = c(r);
          d && (a = a.concat(d(r)));
          for (var s = l(t), g = l(r), m = 0; m < a.length; ++m) {
            var v = a[m];
            if (!(o[v] || (n && n[v]) || (g && g[v]) || (s && s[v]))) {
              var y = p(r, v);
              try {
                u(t, v, y);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    }),
    a.register("7O5ct", function (e, t) {
      "use strict";
      e.exports = a("88OZc");
    }),
    a.register("88OZc", function (t, r) {
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var n, o, i, a, s, l, u, c, d, p, f, h, g, m, v, y, b, x, w, E, _, S, O, k, C, T, R, P;
      e(
        t.exports,
        "AsyncMode",
        () => n,
        (e) => (n = e)
      ),
        e(
          t.exports,
          "ConcurrentMode",
          () => o,
          (e) => (o = e)
        ),
        e(
          t.exports,
          "ContextConsumer",
          () => i,
          (e) => (i = e)
        ),
        e(
          t.exports,
          "ContextProvider",
          () => a,
          (e) => (a = e)
        ),
        e(
          t.exports,
          "Element",
          () => s,
          (e) => (s = e)
        ),
        e(
          t.exports,
          "ForwardRef",
          () => l,
          (e) => (l = e)
        ),
        e(
          t.exports,
          "Fragment",
          () => u,
          (e) => (u = e)
        ),
        e(
          t.exports,
          "Lazy",
          () => c,
          (e) => (c = e)
        ),
        e(
          t.exports,
          "Memo",
          () => d,
          (e) => (d = e)
        ),
        e(
          t.exports,
          "Portal",
          () => p,
          (e) => (p = e)
        ),
        e(
          t.exports,
          "Profiler",
          () => f,
          (e) => (f = e)
        ),
        e(
          t.exports,
          "StrictMode",
          () => h,
          (e) => (h = e)
        ),
        e(
          t.exports,
          "Suspense",
          () => g,
          (e) => (g = e)
        ),
        e(
          t.exports,
          "isAsyncMode",
          () => m,
          (e) => (m = e)
        ),
        e(
          t.exports,
          "isConcurrentMode",
          () => v,
          (e) => (v = e)
        ),
        e(
          t.exports,
          "isContextConsumer",
          () => y,
          (e) => (y = e)
        ),
        e(
          t.exports,
          "isContextProvider",
          () => b,
          (e) => (b = e)
        ),
        e(
          t.exports,
          "isElement",
          () => x,
          (e) => (x = e)
        ),
        e(
          t.exports,
          "isForwardRef",
          () => w,
          (e) => (w = e)
        ),
        e(
          t.exports,
          "isFragment",
          () => E,
          (e) => (E = e)
        ),
        e(
          t.exports,
          "isLazy",
          () => _,
          (e) => (_ = e)
        ),
        e(
          t.exports,
          "isMemo",
          () => S,
          (e) => (S = e)
        ),
        e(
          t.exports,
          "isPortal",
          () => O,
          (e) => (O = e)
        ),
        e(
          t.exports,
          "isProfiler",
          () => k,
          (e) => (k = e)
        ),
        e(
          t.exports,
          "isStrictMode",
          () => C,
          (e) => (C = e)
        ),
        e(
          t.exports,
          "isSuspense",
          () => T,
          (e) => (T = e)
        ),
        e(
          t.exports,
          "isValidElementType",
          () => R,
          (e) => (R = e)
        ),
        e(
          t.exports,
          "typeOf",
          () => P,
          (e) => (P = e)
        );
      var j = "function" == typeof Symbol && Symbol.for,
        M = j ? Symbol.for("react.element") : 60103,
        D = j ? Symbol.for("react.portal") : 60106,
        L = j ? Symbol.for("react.fragment") : 60107,
        A = j ? Symbol.for("react.strict_mode") : 60108,
        N = j ? Symbol.for("react.profiler") : 60114,
        I = j ? Symbol.for("react.provider") : 60109,
        H = j ? Symbol.for("react.context") : 60110,
        F = j ? Symbol.for("react.async_mode") : 60111,
        U = j ? Symbol.for("react.concurrent_mode") : 60111,
        B = j ? Symbol.for("react.forward_ref") : 60112,
        z = j ? Symbol.for("react.suspense") : 60113,
        W = j ? Symbol.for("react.suspense_list") : 60120,
        q = j ? Symbol.for("react.memo") : 60115,
        V = j ? Symbol.for("react.lazy") : 60116,
        Y = j ? Symbol.for("react.block") : 60121,
        $ = j ? Symbol.for("react.fundamental") : 60117,
        G = j ? Symbol.for("react.responder") : 60118,
        K = j ? Symbol.for("react.scope") : 60119;
      function X(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case M:
              switch ((e = e.type)) {
                case F:
                case U:
                case L:
                case N:
                case A:
                case z:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case H:
                    case B:
                    case V:
                    case q:
                    case I:
                      return e;
                    default:
                      return t;
                  }
              }
            case D:
              return t;
          }
        }
      }
      function Z(e) {
        return X(e) === U;
      }
      (n = F),
        (o = U),
        (i = H),
        (a = I),
        (s = M),
        (l = B),
        (u = L),
        (c = V),
        (d = q),
        (p = D),
        (f = N),
        (h = A),
        (g = z),
        (m = function (e) {
          return Z(e) || X(e) === F;
        }),
        (v = Z),
        (y = function (e) {
          return X(e) === H;
        }),
        (b = function (e) {
          return X(e) === I;
        }),
        (x = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === M;
        }),
        (w = function (e) {
          return X(e) === B;
        }),
        (E = function (e) {
          return X(e) === L;
        }),
        (_ = function (e) {
          return X(e) === V;
        }),
        (S = function (e) {
          return X(e) === q;
        }),
        (O = function (e) {
          return X(e) === D;
        }),
        (k = function (e) {
          return X(e) === N;
        }),
        (C = function (e) {
          return X(e) === A;
        }),
        (T = function (e) {
          return X(e) === z;
        }),
        (R = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === L ||
            e === U ||
            e === N ||
            e === A ||
            e === z ||
            e === W ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === V ||
                e.$$typeof === q ||
                e.$$typeof === I ||
                e.$$typeof === H ||
                e.$$typeof === B ||
                e.$$typeof === $ ||
                e.$$typeof === G ||
                e.$$typeof === K ||
                e.$$typeof === Y))
          );
        }),
        (P = X);
    }),
    a.register("dehX7", function (n, o) {
      r(n.exports),
        e(
          n.exports,
          "default",
          () => l,
          (e) => (l = e)
        );
      var i,
        s = a("4lPxA");
      i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : n;
      var l = (0, s.default)(i);
    }),
    a.register("4lPxA", function (t, r) {
      function n(e) {
        var t,
          r = e.Symbol;
        return (
          "function" == typeof r ? (r.observable ? (t = r.observable) : ((t = r("observable")), (r.observable = t))) : (t = "@@observable"),
          t
        );
      }
      e(t.exports, "default", () => n);
    }),
    a.register("4qadp", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.dangerouslyUseGlobalCSS,
            r = void 0 !== t && t,
            o = e.productionPrefix,
            i = void 0 === o ? "jss" : o,
            a = e.seed,
            s = void 0 === a ? "" : a,
            l = 0;
          return function (e, t) {
            return (
              (l += 1),
              r && t && t.options.name
                ? "".concat(((o = t.options.name), String(o).replace(n, "-")), "-").concat(e.key)
                : "".concat(i).concat(s).concat(l)
            );
            var o;
          };
        });
      r(a("fqT2K"));
      var n = /([[\].#*$><+~=|^:(),"'`\s])/g;
    }),
    a.register("iIdtL", function (e, t) {
      e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    }),
    a.register("fqT2K", function (e, t) {
      "use strict";
      var r = function () {};
      e.exports = r;
    }),
    a.register("9ar8U", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      r(a("7WJzX"));
      var n = r(a("4SXfL")),
        o = r(a("c4c0k")),
        i = r(a("7Cnnu")),
        s = r(a("gsWKG")),
        l = (r(a("fqT2K")), r(a("lctrP"))),
        u = r(a("bVxwA")),
        c = r(a("8f9dW")),
        d = r(a("xyHxY")),
        p = r(a("hGi4Z")),
        f = r(a("3Z5LX")),
        h = r(a("5JzwV")),
        g = r(a("6sAGw")),
        m = r(a("bR0XP"));
      var v = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.breakpoints,
          r = void 0 === t ? {} : t,
          a = e.mixins,
          v = void 0 === a ? {} : a,
          y = e.palette,
          b = void 0 === y ? {} : y,
          x = e.shadows,
          w = e.spacing,
          E = void 0 === w ? {} : w,
          _ = e.typography,
          S = void 0 === _ ? {} : _,
          O = (0, o.default)(e, ["breakpoints", "mixins", "palette", "shadows", "spacing", "typography"]),
          k = (0, c.default)(b),
          C = (0, l.default)(r),
          T = (0, n.default)({}, h.default, E);
        return (0, n.default)(
          {
            breakpoints: C,
            direction: "ltr",
            mixins: (0, u.default)(C, T, v),
            overrides: {},
            palette: k,
            props: {},
            shadows: x || p.default,
            typography: (0, d.default)(k, S)
          },
          (0, i.default)({ shape: f.default, spacing: T, transitions: g.default, zIndex: m.default }, O, { isMergeableObject: s.default })
        );
      };
      e.exports.default = v;
    }),
    a.register("7WJzX", function (e, t) {
      e.exports = function (e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      };
    }),
    a.register("4SXfL", function (e, t) {
      function r() {
        return (
          (e.exports = r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      e.exports = r;
    }),
    a.register("c4c0k", function (e, t) {
      var r = a("79oYM");
      e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          o,
          i = r(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      };
    }),
    a.register("79oYM", function (e, t) {
      e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      };
    }),
    a.register("7Cnnu", function (e, t) {
      e.exports,
        (e.exports = (function () {
          "use strict";
          var e = function (e) {
            return t(e) && !r(e);
          };
          function t(e) {
            return !!e && "object" == typeof e;
          }
          function r(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || o(e);
          }
          var n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
          function o(e) {
            return e.$$typeof === n;
          }
          function i(e) {
            return Array.isArray(e) ? [] : {};
          }
          function a(e, t) {
            return !1 !== t.clone && t.isMergeableObject(e) ? p(i(e), e, t) : e;
          }
          function s(e, t, r) {
            return e.concat(t).map(function (e) {
              return a(e, r);
            });
          }
          function l(e, t) {
            if (!t.customMerge) return p;
            var r = t.customMerge(e);
            return "function" == typeof r ? r : p;
          }
          function u(e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (t) {
                  return e.propertyIsEnumerable(t);
                })
              : [];
          }
          function c(e) {
            return Object.keys(e).concat(u(e));
          }
          function d(e, t, r) {
            var n = {};
            return (
              r.isMergeableObject(e) &&
                c(e).forEach(function (t) {
                  n[t] = a(e[t], r);
                }),
              c(t).forEach(function (o) {
                r.isMergeableObject(t[o]) && e[o] ? (n[o] = l(o, r)(e[o], t[o], r)) : (n[o] = a(t[o], r));
              }),
              n
            );
          }
          function p(t, r, n) {
            ((n = n || {}).arrayMerge = n.arrayMerge || s), (n.isMergeableObject = n.isMergeableObject || e);
            var o = Array.isArray(r);
            return o === Array.isArray(t) ? (o ? n.arrayMerge(t, r, n) : d(t, r, n)) : a(r, n);
          }
          return (
            (p.all = function (e, t) {
              if (!Array.isArray(e)) throw new Error("first argument should be an array");
              return e.reduce(function (e, r) {
                return p(e, r, t);
              }, {});
            }),
            p
          );
        })());
    }),
    a.register("gsWKG", function (e, t) {
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */
      "use strict";
      var r = a("42PRP");
      function n(e) {
        return !0 === r(e) && "[object Object]" === Object.prototype.toString.call(e);
      }
      e.exports = function (e) {
        var t, r;
        return (
          !1 !== n(e) && "function" == typeof (t = e.constructor) && !1 !== n((r = t.prototype)) && !1 !== r.hasOwnProperty("isPrototypeOf")
        );
      };
    }),
    a.register("42PRP", function (e, t) {
      /*!
       * isobject <https://github.com/jonschlinkert/isobject>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */
      "use strict";
      e.exports = function (e) {
        return null != e && "object" == typeof e && !1 === Array.isArray(e);
      };
    }),
    a.register("lctrP", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e) {
          var t = e.values,
            r = void 0 === t ? { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 } : t,
            a = e.unit,
            s = void 0 === a ? "px" : a,
            l = e.step,
            u = void 0 === l ? 5 : l,
            c = (0, o.default)(e, ["values", "unit", "step"]);
          function d(e) {
            var t = "number" == typeof r[e] ? r[e] : e;
            return "@media (min-width:".concat(t).concat(s, ")");
          }
          function p(e, t) {
            var n = i.indexOf(t) + 1;
            return n === i.length
              ? d(e)
              : "@media (min-width:".concat(r[e]).concat(s, ") and ") + "(max-width:".concat(r[i[n]] - u / 100).concat(s, ")");
          }
          return (0, n.default)(
            {
              keys: i,
              values: r,
              up: d,
              down: function (e) {
                var t = i.indexOf(e) + 1,
                  n = r[i[t]];
                return t === i.length
                  ? d("xs")
                  : "@media (max-width:".concat(("number" == typeof n && t > 0 ? n : e) - u / 100).concat(s, ")");
              },
              between: p,
              only: function (e) {
                return p(e, e);
              },
              width: function (e) {
                return r[e];
              }
            },
            c
          );
        }),
        (e.exports.keys = void 0);
      var n = r(a("4SXfL")),
        o = r(a("c4c0k")),
        i = ["xs", "sm", "md", "lg", "xl"];
      e.exports.keys = i;
    }),
    a.register("bVxwA", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e, t, r) {
          var i;
          return (0, o.default)(
            {
              gutters: function () {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, o.default)(
                  { paddingLeft: 2 * t.unit, paddingRight: 2 * t.unit },
                  r,
                  (0, n.default)({}, e.up("sm"), (0, o.default)({ paddingLeft: 3 * t.unit, paddingRight: 3 * t.unit }, r[e.up("sm")]))
                );
              },
              toolbar:
                ((i = { minHeight: 56 }),
                (0, n.default)(i, "".concat(e.up("xs"), " and (orientation: landscape)"), { minHeight: 48 }),
                (0, n.default)(i, e.up("sm"), { minHeight: 64 }),
                i)
            },
            r
          );
        });
      var n = r(a("7WJzX")),
        o = r(a("4SXfL"));
    }),
    a.register("8f9dW", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e) {
          var t = e.primary,
            r = void 0 === t ? { light: s.default[300], main: s.default[500], dark: s.default[700] } : t,
            a = e.secondary,
            m = void 0 === a ? { light: l.default.A200, main: l.default.A400, dark: l.default.A700 } : a,
            v = e.error,
            y = void 0 === v ? { light: c.default[300], main: c.default[500], dark: c.default[700] } : v,
            b = e.type,
            x = void 0 === b ? "light" : b,
            w = e.contrastThreshold,
            E = void 0 === w ? 3 : w,
            _ = e.tonalOffset,
            S = void 0 === _ ? 0.2 : _,
            O = (0, o.default)(e, ["primary", "secondary", "error", "type", "contrastThreshold", "tonalOffset"]);
          function k(e) {
            return (0, p.getContrastRatio)(e, h.text.primary) >= E ? h.text.primary : f.text.primary;
          }
          function C(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300,
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 700;
            return (
              !e.main && e[t] && (e.main = e[t]), g(e, "light", r, S), g(e, "dark", n, S), e.contrastText || (e.contrastText = k(e.main)), e
            );
          }
          C(r), C(m, "A400", "A200", "A700"), C(y);
          var T = { dark: h, light: f };
          return (0, i.default)(
            (0, n.default)(
              {
                common: d.default,
                type: x,
                primary: r,
                secondary: m,
                error: y,
                grey: u.default,
                contrastThreshold: E,
                getContrastText: k,
                augmentColor: C,
                tonalOffset: S
              },
              T[x]
            ),
            O,
            { clone: !1 }
          );
        }),
        (e.exports.dark = e.exports.light = void 0);
      var n = r(a("4SXfL")),
        o = r(a("c4c0k")),
        i = (r(a("fqT2K")), r(a("7Cnnu"))),
        s = r(a("4oyWJ")),
        l = r(a("3cCT1")),
        u = r(a("5IcMH")),
        c = r(a("kcW7D")),
        d = r(a("8gyO0")),
        p = a("496ij"),
        f = {
          text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
          },
          divider: "rgba(0, 0, 0, 0.12)",
          background: { paper: d.default.white, default: u.default[50] },
          action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(0, 0, 0, 0.14)",
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)"
          }
        };
      e.exports.light = f;
      var h = {
        text: {
          primary: d.default.white,
          secondary: "rgba(255, 255, 255, 0.7)",
          disabled: "rgba(255, 255, 255, 0.5)",
          hint: "rgba(255, 255, 255, 0.5)",
          icon: "rgba(255, 255, 255, 0.5)"
        },
        divider: "rgba(255, 255, 255, 0.12)",
        background: { paper: u.default[800], default: "#303030" },
        action: {
          active: d.default.white,
          hover: "rgba(255, 255, 255, 0.1)",
          hoverOpacity: 0.1,
          selected: "rgba(255, 255, 255, 0.2)",
          disabled: "rgba(255, 255, 255, 0.3)",
          disabledBackground: "rgba(255, 255, 255, 0.12)"
        }
      };
      function g(e, t, r, n) {
        e[t] ||
          (e.hasOwnProperty(r)
            ? (e[t] = e[r])
            : "light" === t
            ? (e.light = (0, p.lighten)(e.main, n))
            : "dark" === t && (e.dark = (0, p.darken)(e.main, 1.5 * n)));
      }
      e.exports.dark = h;
    }),
    a.register("4oyWJ", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = {
        50: "#e8eaf6",
        100: "#c5cae9",
        200: "#9fa8da",
        300: "#7986cb",
        400: "#5c6bc0",
        500: "#3f51b5",
        600: "#3949ab",
        700: "#303f9f",
        800: "#283593",
        900: "#1a237e",
        A100: "#8c9eff",
        A200: "#536dfe",
        A400: "#3d5afe",
        A700: "#304ffe"
      };
      e.exports.default = r;
    }),
    a.register("3cCT1", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = {
        50: "#fce4ec",
        100: "#f8bbd0",
        200: "#f48fb1",
        300: "#f06292",
        400: "#ec407a",
        500: "#e91e63",
        600: "#d81b60",
        700: "#c2185b",
        800: "#ad1457",
        900: "#880e4f",
        A100: "#ff80ab",
        A200: "#ff4081",
        A400: "#f50057",
        A700: "#c51162"
      };
      e.exports.default = r;
    }),
    a.register("5IcMH", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#d5d5d5",
        A200: "#aaaaaa",
        A400: "#303030",
        A700: "#616161"
      };
      e.exports.default = r;
    }),
    a.register("kcW7D", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        A100: "#ff8a80",
        A200: "#ff5252",
        A400: "#ff1744",
        A700: "#d50000"
      };
      e.exports.default = r;
    }),
    a.register("8gyO0", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = { black: "#000", white: "#fff" };
      e.exports.default = r;
    }),
    a.register("496ij", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.convertHexToRGB = o),
        (e.exports.rgbToHex = function (e) {
          if (0 === e.indexOf("#")) return e;
          var t = i(e).values;
          return (
            (t = t.map(function (e) {
              return 1 === (t = e.toString(16)).length ? "0".concat(t) : t;
              var t;
            })),
            "#".concat(t.join(""))
          );
        }),
        (e.exports.decomposeColor = i),
        (e.exports.recomposeColor = s),
        (e.exports.getContrastRatio = function (e, t) {
          var r = l(e),
            n = l(t);
          return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
        }),
        (e.exports.getLuminance = l),
        (e.exports.emphasize = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.15;
          return l(e) > 0.5 ? u(e, t) : c(e, t);
        }),
        (e.exports.fade = function (e, t) {
          if (!e) return e;
          (e = i(e)), (t = n(t)), ("rgb" === e.type || "hsl" === e.type) && (e.type += "a");
          return (e.values[3] = t), s(e);
        }),
        (e.exports.darken = u),
        (e.exports.lighten = c);
      r(a("fqT2K"));
      function n(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e < t ? t : e > r ? r : e;
      }
      function o(e) {
        e = e.substr(1);
        var t = new RegExp(".{1,".concat(e.length / 3, "}"), "g"),
          r = e.match(t);
        return (
          r &&
            1 === r[0].length &&
            (r = r.map(function (e) {
              return e + e;
            })),
          r
            ? "rgb(".concat(
                r
                  .map(function (e) {
                    return parseInt(e, 16);
                  })
                  .join(", "),
                ")"
              )
            : ""
        );
      }
      function i(e) {
        if ("#" === e.charAt(0)) return i(o(e));
        var t = e.indexOf("("),
          r = e.substring(0, t),
          n = e.substring(t + 1, e.length - 1).split(",");
        return {
          type: r,
          values: (n = n.map(function (e) {
            return parseFloat(e);
          }))
        };
      }
      function s(e) {
        var t = e.type,
          r = e.values;
        return (
          -1 !== t.indexOf("rgb") &&
            (r = r.map(function (e, t) {
              return t < 3 ? parseInt(e, 10) : e;
            })),
          -1 !== t.indexOf("hsl") && ((r[1] = "".concat(r[1], "%")), (r[2] = "".concat(r[2], "%"))),
          "".concat(e.type, "(").concat(r.join(", "), ")")
        );
      }
      function l(e) {
        var t = i(e);
        if (-1 !== t.type.indexOf("rgb")) {
          var r = t.values.map(function (e) {
            return (e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
          });
          return Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
        }
        return t.values[2] / 100;
      }
      function u(e, t) {
        if (!e) return e;
        if (((e = i(e)), (t = n(t)), -1 !== e.type.indexOf("hsl"))) e.values[2] *= 1 - t;
        else if (-1 !== e.type.indexOf("rgb")) for (var r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
        return s(e);
      }
      function c(e, t) {
        if (!e) return e;
        if (((e = i(e)), (t = n(t)), -1 !== e.type.indexOf("hsl"))) e.values[2] += (100 - e.values[2]) * t;
        else if (-1 !== e.type.indexOf("rgb")) for (var r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
        return s(e);
      }
    }),
    a.register("xyHxY", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e, t) {
          var r = "function" == typeof t ? t(e) : t,
            a = r.fontFamily,
            d = void 0 === a ? c : a,
            p = r.fontSize,
            f = void 0 === p ? 14 : p,
            h = r.fontWeightLight,
            g = void 0 === h ? 300 : h,
            m = r.fontWeightRegular,
            v = void 0 === m ? 400 : m,
            y = r.fontWeightMedium,
            b = void 0 === y ? 500 : y,
            x = r.htmlFontSize,
            w = void 0 === x ? 16 : x,
            E = r.useNextVariants,
            _ = void 0 === E ? Boolean(s.default.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__) : E,
            S = (r.suppressWarning, r.allVariants),
            O = (0, o.default)(r, [
              "fontFamily",
              "fontSize",
              "fontWeightLight",
              "fontWeightRegular",
              "fontWeightMedium",
              "htmlFontSize",
              "useNextVariants",
              "suppressWarning",
              "allVariants"
            ]),
            k = f / 14,
            C = function (e) {
              return "".concat((e / w) * k, "rem");
            },
            T = function (t, r, o, i, a) {
              return (0, n.default)(
                { color: e.text.primary, fontFamily: d, fontWeight: t, fontSize: C(r), lineHeight: o },
                d === c ? { letterSpacing: "".concat(l(i / r), "em") } : {},
                a,
                S
              );
            },
            R = {
              h1: T(g, 96, 1, -1.5),
              h2: T(g, 60, 1, -0.5),
              h3: T(v, 48, 1.04, 0),
              h4: T(v, 34, 1.17, 0.25),
              h5: T(v, 24, 1.33, 0),
              h6: T(b, 20, 1.6, 0.15),
              subtitle1: T(v, 16, 1.75, 0.15),
              subtitle2: T(b, 14, 1.57, 0.1),
              body1Next: T(v, 16, 1.5, 0.15),
              body2Next: T(v, 14, 1.5, 0.15),
              buttonNext: T(b, 14, 1.75, 0.4, u),
              captionNext: T(v, 12, 1.66, 0.4),
              overline: T(v, 12, 2.66, 1, u)
            },
            P = {
              display4: (0, n.default)(
                {
                  fontSize: C(112),
                  fontWeight: g,
                  fontFamily: d,
                  letterSpacing: "-.04em",
                  lineHeight: "".concat(l(128 / 112), "em"),
                  marginLeft: "-.04em",
                  color: e.text.secondary
                },
                S
              ),
              display3: (0, n.default)(
                {
                  fontSize: C(56),
                  fontWeight: v,
                  fontFamily: d,
                  letterSpacing: "-.02em",
                  lineHeight: "".concat(l(73 / 56), "em"),
                  marginLeft: "-.02em",
                  color: e.text.secondary
                },
                S
              ),
              display2: (0, n.default)(
                {
                  fontSize: C(45),
                  fontWeight: v,
                  fontFamily: d,
                  lineHeight: "".concat(l(51 / 45), "em"),
                  marginLeft: "-.02em",
                  color: e.text.secondary
                },
                S
              ),
              display1: (0, n.default)(
                { fontSize: C(34), fontWeight: v, fontFamily: d, lineHeight: "".concat(l(41 / 34), "em"), color: e.text.secondary },
                S
              ),
              headline: (0, n.default)(
                { fontSize: C(24), fontWeight: v, fontFamily: d, lineHeight: "".concat(l(32.5 / 24), "em"), color: e.text.primary },
                S
              ),
              title: (0, n.default)(
                { fontSize: C(21), fontWeight: b, fontFamily: d, lineHeight: "".concat(l(24.5 / 21), "em"), color: e.text.primary },
                S
              ),
              subheading: (0, n.default)(
                { fontSize: C(16), fontWeight: v, fontFamily: d, lineHeight: "".concat(l(1.5), "em"), color: e.text.primary },
                S
              ),
              body2: (0, n.default)(
                { fontSize: C(14), fontWeight: b, fontFamily: d, lineHeight: "".concat(l(24 / 14), "em"), color: e.text.primary },
                S
              ),
              body1: (0, n.default)(
                { fontSize: C(14), fontWeight: v, fontFamily: d, lineHeight: "".concat(l(20.5 / 14), "em"), color: e.text.primary },
                S
              ),
              caption: (0, n.default)(
                { fontSize: C(12), fontWeight: v, fontFamily: d, lineHeight: "".concat(l(1.375), "em"), color: e.text.secondary },
                S
              ),
              button: (0, n.default)(
                { fontSize: C(14), textTransform: "uppercase", fontWeight: b, fontFamily: d, color: e.text.primary },
                S
              )
            };
          return (0, i.default)(
            (0, n.default)(
              { pxToRem: C, round: l, fontFamily: d, fontSize: f, fontWeightLight: g, fontWeightRegular: v, fontWeightMedium: b },
              P,
              R,
              _ ? { body1: R.body1Next, body2: R.body2Next, button: R.buttonNext, caption: R.captionNext } : {},
              { useNextVariants: _ }
            ),
            O,
            { clone: !1 }
          );
        });
      var n = r(a("4SXfL")),
        o = r(a("c4c0k")),
        i = r(a("7Cnnu")),
        s = (r(a("fqT2K")), a("4ZECF"));
      function l(e) {
        return Math.round(1e5 * e) / 1e5;
      }
      var u = { textTransform: "uppercase" },
        c = '"Roboto", "Helvetica", "Arial", sans-serif';
    }),
    a.register("4ZECF", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")();
      e.exports.default = r;
    }),
    a.register("hGi4Z", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = 0.2,
        n = 0.14,
        o = 0.12;
      function i() {
        return [
          ""
            .concat(arguments.length <= 0 ? void 0 : arguments[0], "px ")
            .concat(arguments.length <= 1 ? void 0 : arguments[1], "px ")
            .concat(arguments.length <= 2 ? void 0 : arguments[2], "px ")
            .concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,")
            .concat(r, ")"),
          ""
            .concat(arguments.length <= 4 ? void 0 : arguments[4], "px ")
            .concat(arguments.length <= 5 ? void 0 : arguments[5], "px ")
            .concat(arguments.length <= 6 ? void 0 : arguments[6], "px ")
            .concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,")
            .concat(n, ")"),
          ""
            .concat(arguments.length <= 8 ? void 0 : arguments[8], "px ")
            .concat(arguments.length <= 9 ? void 0 : arguments[9], "px ")
            .concat(arguments.length <= 10 ? void 0 : arguments[10], "px ")
            .concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,")
            .concat(o, ")")
        ].join(",");
      }
      var a = [
        "none",
        i(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
        i(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
        i(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
        i(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
        i(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
        i(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
        i(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
        i(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
        i(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
        i(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
        i(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
        i(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
        i(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
        i(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
        i(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
        i(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
        i(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
        i(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
        i(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
        i(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
        i(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
        i(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
        i(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
        i(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
      ];
      e.exports.default = a;
    }),
    a.register("3Z5LX", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = { borderRadius: 4 };
      e.exports.default = r;
    }),
    a.register("5JzwV", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = { unit: 8 };
      e.exports.default = r;
    }),
    a.register("6sAGw", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = e.exports.isNumber = e.exports.isString = e.exports.formatMs = e.exports.duration = e.exports.easing = void 0);
      var n = r(a("c4c0k")),
        o =
          (r(a("fqT2K")),
          {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
          });
      e.exports.easing = o;
      var i = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
      e.exports.duration = i;
      var s = function (e) {
        return "".concat(Math.round(e), "ms");
      };
      e.exports.formatMs = s;
      e.exports.isString = function (e) {
        return "string" == typeof e;
      };
      e.exports.isNumber = function (e) {
        return !isNaN(parseFloat(e));
      };
      var l = {
        easing: o,
        duration: i,
        create: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["all"],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = t.duration,
            a = void 0 === r ? i.standard : r,
            l = t.easing,
            u = void 0 === l ? o.easeInOut : l,
            c = t.delay,
            d = void 0 === c ? 0 : c;
          (0, n.default)(t, ["duration", "easing", "delay"]);
          return (Array.isArray(e) ? e : [e])
            .map(function (e) {
              return ""
                .concat(e, " ")
                .concat("string" == typeof a ? a : s(a), " ")
                .concat(u, " ")
                .concat("string" == typeof d ? d : s(d));
            })
            .join(",");
        },
        getAutoHeightDuration: function (e) {
          if (!e) return 0;
          var t = e / 36;
          return Math.round(10 * (4 + 15 * Math.pow(t, 0.25) + t / 5));
        }
      };
      e.exports.default = l;
    }),
    a.register("bR0XP", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = { mobileStepper: 1e3, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
      e.exports.default = r;
    }),
    a.register("2TfOV", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var n = r(a("d5vUM")),
        o = r(a("gj9wC")),
        i = r(a("8xi1w")),
        s = r(a("7JAt6")),
        l = r(a("3XVoX")),
        u = r(a("h9UUm"));
      var c = function () {
        return {
          plugins: [
            (0, n.default)(),
            (0, o.default)(),
            (0, i.default)(),
            (0, s.default)(),
            "undefined" == typeof window ? null : (0, l.default)(),
            (0, u.default)()
          ]
        };
      };
      e.exports.default = c;
    }),
    a.register("d5vUM", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      e.exports.default = function () {
        return {
          onCreateRule: function (e, t, r) {
            if (e === s) return new u(e, t, r);
            if ("@" === e[0] && e.substr(0, l.length) === l) return new c(e, t, r);
            var n = r.parent;
            return (
              n && (("global" !== n.type && "global" !== n.options.parent.type) || (r.global = !0)), r.global && (r.selector = e), null
            );
          },
          onProcessRule: function (e) {
            "style" === e.type &&
              ((function (e) {
                var t = e.options,
                  n = e.style,
                  o = n[s];
                if (o) {
                  for (var i in o) t.sheet.addRule(i, o[i], r({}, t, { selector: p(i, e.selector) }));
                  delete n[s];
                }
              })(e),
              (function (e) {
                var t = e.options,
                  n = e.style;
                for (var o in n)
                  if (o.substr(0, s.length) === s) {
                    var i = p(o.substr(s.length), e.selector);
                    t.sheet.addRule(i, n[o], r({}, t, { selector: i })), delete n[o];
                  }
              })(e));
          }
        };
      };
      var o = a("2q33Q");
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      var s = "@global",
        l = "@global ",
        u = (function () {
          function e(t, n, a) {
            for (var s in (i(this, e),
            (this.type = "global"),
            (this.key = t),
            (this.options = a),
            (this.rules = new o.RuleList(r({}, a, { parent: this }))),
            n))
              this.rules.add(s, n[s], { selector: s });
            this.rules.process();
          }
          return (
            n(e, [
              {
                key: "getRule",
                value: function (e) {
                  return this.rules.get(e);
                }
              },
              {
                key: "addRule",
                value: function (e, t, r) {
                  var n = this.rules.add(e, t, r);
                  return this.options.jss.plugins.onProcessRule(n), n;
                }
              },
              {
                key: "indexOf",
                value: function (e) {
                  return this.rules.indexOf(e);
                }
              },
              {
                key: "toString",
                value: function () {
                  return this.rules.toString();
                }
              }
            ]),
            e
          );
        })(),
        c = (function () {
          function e(t, n, o) {
            i(this, e), (this.name = t), (this.options = o);
            var a = t.substr(l.length);
            this.rule = o.jss.createRule(a, n, r({}, o, { parent: this, selector: a }));
          }
          return (
            n(e, [
              {
                key: "toString",
                value: function (e) {
                  return this.rule.toString(e);
                }
              }
            ]),
            e
          );
        })(),
        d = /\s*,\s*/g;
      function p(e, t) {
        for (var r = e.split(d), n = "", o = 0; o < r.length; o++) (n += t + " " + r[o].trim()), r[o + 1] && (n += ", ");
        return n;
      }
    }),
    a.register("2q33Q", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.create =
          e.exports.createGenerateClassName =
          e.exports.sheets =
          e.exports.RuleList =
          e.exports.SheetsManager =
          e.exports.SheetsRegistry =
          e.exports.toCssValue =
          e.exports.getDynamicStyles =
            void 0);
      var r = a("4AKn8");
      Object.defineProperty(e.exports, "getDynamicStyles", {
        enumerable: !0,
        get: function () {
          return d(r).default;
        }
      });
      var n = a("gx5rx");
      Object.defineProperty(e.exports, "toCssValue", {
        enumerable: !0,
        get: function () {
          return d(n).default;
        }
      });
      var o = a("idzVf");
      Object.defineProperty(e.exports, "SheetsRegistry", {
        enumerable: !0,
        get: function () {
          return d(o).default;
        }
      });
      var i = a("eTG3U");
      Object.defineProperty(e.exports, "SheetsManager", {
        enumerable: !0,
        get: function () {
          return d(i).default;
        }
      });
      var s = a("8N8Yy");
      Object.defineProperty(e.exports, "RuleList", {
        enumerable: !0,
        get: function () {
          return d(s).default;
        }
      });
      var l = a("j38dx");
      Object.defineProperty(e.exports, "sheets", {
        enumerable: !0,
        get: function () {
          return d(l).default;
        }
      });
      var u = a("aR5kd");
      Object.defineProperty(e.exports, "createGenerateClassName", {
        enumerable: !0,
        get: function () {
          return d(u).default;
        }
      });
      var c = d(a("fU6pq"));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var p = (e.exports.create = function (e) {
        return new c.default(e);
      });
      e.exports.default = p();
    }),
    a.register("4AKn8", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            };
      e.exports.default = function e(t) {
        var n = null;
        for (var o in t) {
          var i = t[o],
            a = void 0 === i ? "undefined" : r(i);
          if ("function" === a) n || (n = {}), (n[o] = i);
          else if ("object" === a && null !== i && !Array.isArray(i)) {
            var s = e(i);
            s && (n || (n = {}), (n[o] = s));
          }
        }
        return n;
      };
    }),
    a.register("gx5rx", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!Array.isArray(e)) return e;
          var n = "";
          if (Array.isArray(e[0])) for (var o = 0; o < e.length && "!important" !== e[o]; o++) n && (n += ", "), (n += r(e[o], " "));
          else n = r(e, ", ");
          t || "!important" !== e[e.length - 1] || (n += " !important");
          return n;
        });
      var r = function (e, t) {
        for (var r = "", n = 0; n < e.length && "!important" !== e[n]; n++) r && (r += t), (r += e[n]);
        return r;
      };
    }),
    a.register("idzVf", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r = (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      var n = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.registry = []);
        }
        return (
          r(e, [
            {
              key: "add",
              value: function (e) {
                var t = this.registry,
                  r = e.options.index;
                if (-1 === t.indexOf(e))
                  if (0 === t.length || r >= this.index) t.push(e);
                  else for (var n = 0; n < t.length; n++) if (t[n].options.index > r) return void t.splice(n, 0, e);
              }
            },
            {
              key: "reset",
              value: function () {
                this.registry = [];
              }
            },
            {
              key: "remove",
              value: function (e) {
                var t = this.registry.indexOf(e);
                this.registry.splice(t, 1);
              }
            },
            {
              key: "toString",
              value: function (e) {
                return this.registry
                  .filter(function (e) {
                    return e.attached;
                  })
                  .map(function (t) {
                    return t.toString(e);
                  })
                  .join("\n");
              }
            },
            {
              key: "index",
              get: function () {
                return 0 === this.registry.length ? 0 : this.registry[this.registry.length - 1].options.index;
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = n;
    }),
    a.register("eTG3U", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r,
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        o = a("ifWlI"),
        i = (r = o) && r.__esModule ? r : { default: r };
      var s = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.sheets = []),
            (this.refs = []),
            (this.keys = []);
        }
        return (
          n(e, [
            {
              key: "get",
              value: function (e) {
                var t = this.keys.indexOf(e);
                return this.sheets[t];
              }
            },
            {
              key: "add",
              value: function (e, t) {
                var r = this.sheets,
                  n = this.refs,
                  o = this.keys,
                  i = r.indexOf(t);
                return -1 !== i ? i : (r.push(t), n.push(0), o.push(e), r.length - 1);
              }
            },
            {
              key: "manage",
              value: function (e) {
                var t = this.keys.indexOf(e),
                  r = this.sheets[t];
                return 0 === this.refs[t] && r.attach(), this.refs[t]++, this.keys[t] || this.keys.splice(t, 0, e), r;
              }
            },
            {
              key: "unmanage",
              value: function (e) {
                var t = this.keys.indexOf(e);
                -1 !== t
                  ? this.refs[t] > 0 && (this.refs[t]--, 0 === this.refs[t] && this.sheets[t].detach())
                  : (0, i.default)(!1, "SheetsManager: can't find sheet to unmanage");
              }
            },
            {
              key: "size",
              get: function () {
                return this.keys.length;
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = s;
    }),
    a.register("ifWlI", function (e, t) {
      "use strict";
      e.exports = function () {};
    }),
    a.register("8N8Yy", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        o = u(a("g9DUP")),
        i = u(a("kg5Mk")),
        s = u(a("fOVIp")),
        l = u(a("ix1YH"));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function () {
        function e(t) {
          var r = this;
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.map = {}),
            (this.raw = {}),
            (this.index = []),
            (this.update = function (e, t) {
              var n = r.options,
                o = n.jss.plugins,
                i = n.sheet;
              if ("string" == typeof e) o.onUpdate(t, r.get(e), i);
              else for (var a = 0; a < r.index.length; a++) o.onUpdate(e, r.index[a], i);
            }),
            (this.options = t),
            (this.classes = t.classes);
        }
        return (
          n(e, [
            {
              key: "add",
              value: function (e, t, n) {
                var i = this.options,
                  a = i.parent,
                  u = i.sheet,
                  c = i.jss,
                  d = i.Renderer,
                  p = i.generateClassName;
                !(n = r({ classes: this.classes, parent: a, sheet: u, jss: c, Renderer: d, generateClassName: p }, n)).selector &&
                  this.classes[e] &&
                  (n.selector = "." + (0, l.default)(this.classes[e])),
                  (this.raw[e] = t);
                var f = (0, o.default)(e, t, n),
                  h = void 0;
                !n.selector && f instanceof s.default && ((h = p(f, u)), (f.selector = "." + (0, l.default)(h))), this.register(f, h);
                var g = void 0 === n.index ? this.index.length : n.index;
                return this.index.splice(g, 0, f), f;
              }
            },
            {
              key: "get",
              value: function (e) {
                return this.map[e];
              }
            },
            {
              key: "remove",
              value: function (e) {
                this.unregister(e), this.index.splice(this.indexOf(e), 1);
              }
            },
            {
              key: "indexOf",
              value: function (e) {
                return this.index.indexOf(e);
              }
            },
            {
              key: "process",
              value: function () {
                var e = this.options.jss.plugins;
                this.index.slice(0).forEach(e.onProcessRule, e);
              }
            },
            {
              key: "register",
              value: function (e, t) {
                (this.map[e.key] = e), e instanceof s.default && ((this.map[e.selector] = e), t && (this.classes[e.key] = t));
              }
            },
            {
              key: "unregister",
              value: function (e) {
                delete this.map[e.key], e instanceof s.default && (delete this.map[e.selector], delete this.classes[e.key]);
              }
            },
            {
              key: "link",
              value: function (e) {
                for (var t = this.options.sheet.renderer.getUnescapedKeysMap(this.index), r = 0; r < e.length; r++) {
                  var n = e[r],
                    o = this.options.sheet.renderer.getKey(n);
                  t[o] && (o = t[o]);
                  var a = this.map[o];
                  a && (0, i.default)(a, n);
                }
              }
            },
            {
              key: "toString",
              value: function (e) {
                for (var t = "", r = this.options.sheet, n = !!r && r.options.link, o = 0; o < this.index.length; o++) {
                  var i = this.index[o].toString(e);
                  (i || n) && (t && (t += "\n"), (t += i));
                }
                return t;
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = c;
    }),
    a.register("g9DUP", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unnamed",
            t = arguments[1],
            i = arguments[2],
            a = i.jss,
            s = (0, o.default)(t),
            l = a.plugins.onCreateRule(e, s, i);
          if (l) return l;
          "@" === e[0] && (0, r.default)(!1, "[JSS] Unknown at-rule %s", e);
          return new n.default(e, s, i);
        });
      var r = i(a("ifWlI")),
        n = i(a("fOVIp")),
        o = i(a("cm5VC"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
    }),
    a.register("fOVIp", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              },
        o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        i = u(a("ifWlI")),
        s = u(a("5TMak")),
        l = u(a("gx5rx"));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function () {
        function e(t, r, n) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.type = "style"),
            (this.isProcessed = !1);
          var o = n.sheet,
            i = n.Renderer,
            a = n.selector;
          (this.key = t), (this.options = n), (this.style = r), a && (this.selectorText = a), (this.renderer = o ? o.renderer : new i());
        }
        return (
          o(e, [
            {
              key: "prop",
              value: function (e, t) {
                if (void 0 === t) return this.style[e];
                if (this.style[e] === t) return this;
                var r = null == (t = this.options.jss.plugins.onChangeValue(t, e, this)) || !1 === t,
                  n = e in this.style;
                if (r && !n) return this;
                var o = r && n;
                if ((o ? delete this.style[e] : (this.style[e] = t), this.renderable))
                  return o ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, t), this;
                var a = this.options.sheet;
                return a && a.attached && (0, i.default)(!1, 'Rule is not linked. Missing sheet option "link: true".'), this;
              }
            },
            {
              key: "applyTo",
              value: function (e) {
                var t = this.toJSON();
                for (var r in t) this.renderer.setProperty(e, r, t[r]);
                return this;
              }
            },
            {
              key: "toJSON",
              value: function () {
                var e = {};
                for (var t in this.style) {
                  var r = this.style[t];
                  "object" !== (void 0 === r ? "undefined" : n(r)) ? (e[t] = r) : Array.isArray(r) && (e[t] = (0, l.default)(r));
                }
                return e;
              }
            },
            {
              key: "toString",
              value: function (e) {
                var t = this.options.sheet,
                  n = !!t && t.options.link ? r({}, e, { allowEmpty: !0 }) : e;
                return (0, s.default)(this.selector, this.style, n);
              }
            },
            {
              key: "selector",
              set: function (e) {
                if (
                  e !== this.selectorText &&
                  ((this.selectorText = e), this.renderable && !this.renderer.setSelector(this.renderable, e) && this.renderable)
                ) {
                  var t = this.renderer.replaceRule(this.renderable, this);
                  t && (this.renderable = t);
                }
              },
              get: function () {
                return this.selectorText;
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = c;
    }),
    a.register("5TMak", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = "";
          if (!t) return n;
          var a = r.indent,
            s = void 0 === a ? 0 : a,
            l = t.fallbacks;
          if ((s++, l))
            if (Array.isArray(l))
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                for (var d in c) {
                  var p = c[d];
                  null != p && (n += "\n" + i(d + ": " + (0, o.default)(p) + ";", s));
                }
              }
            else
              for (var f in l) {
                var h = l[f];
                null != h && (n += "\n" + i(f + ": " + (0, o.default)(h) + ";", s));
              }
          for (var g in t) {
            var m = t[g];
            null != m && "fallbacks" !== g && (n += "\n" + i(g + ": " + (0, o.default)(m) + ";", s));
          }
          return n || r.allowEmpty ? (s--, (n = i(e + " {" + n + "\n", s) + i("}", s))) : n;
        });
      var r,
        n = a("gx5rx"),
        o = (r = n) && r.__esModule ? r : { default: r };
      function i(e, t) {
        for (var r = "", n = 0; n < t; n++) r += "  ";
        return r + e;
      }
    }),
    a.register("cm5VC", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            };
      e.exports.default = function e(t) {
        if (null == t) return t;
        var n = void 0 === t ? "undefined" : r(t);
        if ("string" === n || "number" === n || "function" === n) return t;
        if (s(t)) return t.map(e);
        if ((0, i.default)(t)) return t;
        var o = {};
        for (var a in t) {
          var l = t[a];
          "object" !== (void 0 === l ? "undefined" : r(l)) ? (o[a] = l) : (o[a] = e(l));
        }
        return o;
      };
      var n,
        o = a("220Tc"),
        i = (n = o) && n.__esModule ? n : { default: n };
      var s = Array.isArray;
    }),
    a.register("220Tc", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r,
        n = a("dehX7"),
        o = (r = n) && r.__esModule ? r : { default: r };
      e.exports.default = function (e) {
        return e && e[o.default] && e === e[o.default]();
      };
    }),
    a.register("kg5Mk", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e, t) {
          (e.renderable = t), e.rules && t.cssRules && e.rules.link(t.cssRules);
        });
    }),
    a.register("ix1YH", function (e, r) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      t.CSS;
      e.exports.default = function (e) {
        return e;
      };
    }),
    a.register("j38dx", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r,
        n = a("idzVf"),
        o = (r = n) && r.__esModule ? r : { default: r };
      e.exports.default = new o.default();
    }),
    a.register("aR5kd", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r = o(a("ifWlI")),
        n = (o(a("g1iaR")), o(a("18mR7")));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports.default = function () {
        var e = 0;
        return function (t, o) {
          (e += 1) > 1e10 && (0, r.default)(!1, "[JSS] You might have a memory leak. Rule counter is at %s.", e);
          var i = "c",
            a = "";
          return (
            o && ((i = o.options.classNamePrefix || "c"), null != o.options.jss.id && (a += o.options.jss.id)), "" + i + n.default + a + e
          );
        };
      };
    }),
    a.register("g1iaR", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        o = s(a("kg5Mk")),
        i = s(a("8N8Yy"));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (function () {
        function e(t, n) {
          var o = this;
          for (var a in ((function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
          (this.update = function (e, t) {
            return "string" == typeof e ? o.rules.update(e, t) : o.rules.update(e), o;
          }),
          (this.attached = !1),
          (this.deployed = !1),
          (this.linked = !1),
          (this.classes = {}),
          (this.options = r({}, n, { sheet: this, parent: this, classes: this.classes })),
          (this.renderer = new n.Renderer(this)),
          (this.rules = new i.default(this.options)),
          t))
            this.rules.add(a, t[a]);
          this.rules.process();
        }
        return (
          n(e, [
            {
              key: "attach",
              value: function () {
                return (
                  this.attached ||
                    (this.deployed || this.deploy(),
                    this.renderer.attach(),
                    !this.linked && this.options.link && this.link(),
                    (this.attached = !0)),
                  this
                );
              }
            },
            {
              key: "detach",
              value: function () {
                return this.attached ? (this.renderer.detach(), (this.attached = !1), this) : this;
              }
            },
            {
              key: "addRule",
              value: function (e, t, r) {
                var n = this.queue;
                this.attached && !n && (this.queue = []);
                var o = this.rules.add(e, t, r);
                return (
                  this.options.jss.plugins.onProcessRule(o),
                  this.attached
                    ? this.deployed
                      ? (n
                          ? n.push(o)
                          : (this.insertRule(o), this.queue && (this.queue.forEach(this.insertRule, this), (this.queue = void 0))),
                        o)
                      : o
                    : ((this.deployed = !1), o)
                );
              }
            },
            {
              key: "insertRule",
              value: function (e) {
                var t = this.renderer.insertRule(e);
                t && this.options.link && (0, o.default)(e, t);
              }
            },
            {
              key: "addRules",
              value: function (e, t) {
                var r = [];
                for (var n in e) r.push(this.addRule(n, e[n], t));
                return r;
              }
            },
            {
              key: "getRule",
              value: function (e) {
                return this.rules.get(e);
              }
            },
            {
              key: "deleteRule",
              value: function (e) {
                var t = this.rules.get(e);
                return !!t && (this.rules.remove(t), !this.attached || !t.renderable || this.renderer.deleteRule(t.renderable));
              }
            },
            {
              key: "indexOf",
              value: function (e) {
                return this.rules.indexOf(e);
              }
            },
            {
              key: "deploy",
              value: function () {
                return this.renderer.deploy(), (this.deployed = !0), this;
              }
            },
            {
              key: "link",
              value: function () {
                var e = this.renderer.getRules();
                return e && this.rules.link(e), (this.linked = !0), this;
              }
            },
            {
              key: "toString",
              value: function (e) {
                return this.rules.toString(e);
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = l;
    }),
    a.register("18mR7", function (e, r) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var n = "2f1acc6c3a606b082e5eef5e54414ffb";
      null == t[n] && (t[n] = 0), (e.exports.default = t[n]++);
    }),
    a.register("fU6pq", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              },
        n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        i = y(a("elFTB")),
        s = y(a("g1iaR")),
        l = y(a("bD3rJ")),
        u = y(a("2eYGG")),
        c = y(a("e4S2w")),
        d = y(a("iMmFN")),
        p = y(a("j38dx")),
        f = y(a("fOVIp")),
        h = y(a("aR5kd")),
        g = y(a("g9DUP")),
        m = y(a("b7voq")),
        v = y(a("5Seiu"));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var b = u.default.concat([c.default, d.default]),
        x = 0,
        w = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.id = x++),
              (this.version = "9.8.7"),
              (this.plugins = new l.default()),
              (this.options = { createGenerateClassName: h.default, Renderer: i.default ? m.default : v.default, plugins: [] }),
              (this.generateClassName = (0, h.default)()),
              this.use.apply(this, b),
              this.setup(t);
          }
          return (
            o(e, [
              {
                key: "setup",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return (
                    e.createGenerateClassName &&
                      ((this.options.createGenerateClassName = e.createGenerateClassName),
                      (this.generateClassName = e.createGenerateClassName())),
                    null != e.insertionPoint && (this.options.insertionPoint = e.insertionPoint),
                    (e.virtual || e.Renderer) && (this.options.Renderer = e.Renderer || (e.virtual ? v.default : m.default)),
                    e.plugins && this.use.apply(this, e.plugins),
                    this
                  );
                }
              },
              {
                key: "createStyleSheet",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.index;
                  "number" != typeof r && (r = 0 === p.default.index ? 0 : p.default.index + 1);
                  var o = new s.default(
                    e,
                    n({}, t, {
                      jss: this,
                      generateClassName: t.generateClassName || this.generateClassName,
                      insertionPoint: this.options.insertionPoint,
                      Renderer: this.options.Renderer,
                      index: r
                    })
                  );
                  return this.plugins.onProcessSheet(o), o;
                }
              },
              {
                key: "removeStyleSheet",
                value: function (e) {
                  return e.detach(), p.default.remove(e), this;
                }
              },
              {
                key: "createRule",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  "object" === (void 0 === e ? "undefined" : r(e)) && ((n = t), (t = e), (e = void 0));
                  var o = n;
                  (o.jss = this),
                    (o.Renderer = this.options.Renderer),
                    o.generateClassName || (o.generateClassName = this.generateClassName),
                    o.classes || (o.classes = {});
                  var i = (0, g.default)(e, t, o);
                  return (
                    !o.selector && i instanceof f.default && (i.selector = "." + o.generateClassName(i)), this.plugins.onProcessRule(i), i
                  );
                }
              },
              {
                key: "use",
                value: function () {
                  for (var e = this, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                  return (
                    r.forEach(function (t) {
                      -1 === e.options.plugins.indexOf(t) && (e.options.plugins.push(t), e.plugins.use(t));
                    }),
                    this
                  );
                }
              }
            ]),
            e
          );
        })();
      e.exports.default = w;
    }),
    a.register("elFTB", function (t, n) {
      r(t.exports), e(t.exports, "isBrowser", () => i), e(t.exports, "default", () => a);
      var o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              },
        i =
          "object" === ("undefined" == typeof window ? "undefined" : o(window)) &&
          "object" === ("undefined" == typeof document ? "undefined" : o(document)) &&
          9 === document.nodeType,
        a = i;
    }),
    a.register("bD3rJ", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r,
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        o = a("ifWlI"),
        i = (r = o) && r.__esModule ? r : { default: r };
      var s = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.hooks = { onCreateRule: [], onProcessRule: [], onProcessStyle: [], onProcessSheet: [], onChangeValue: [], onUpdate: [] });
        }
        return (
          n(e, [
            {
              key: "onCreateRule",
              value: function (e, t, r) {
                for (var n = 0; n < this.hooks.onCreateRule.length; n++) {
                  var o = this.hooks.onCreateRule[n](e, t, r);
                  if (o) return o;
                }
                return null;
              }
            },
            {
              key: "onProcessRule",
              value: function (e) {
                if (!e.isProcessed) {
                  for (var t = e.options.sheet, r = 0; r < this.hooks.onProcessRule.length; r++) this.hooks.onProcessRule[r](e, t);
                  e.style && this.onProcessStyle(e.style, e, t), (e.isProcessed = !0);
                }
              }
            },
            {
              key: "onProcessStyle",
              value: function (e, t, r) {
                for (var n = e, o = 0; o < this.hooks.onProcessStyle.length; o++)
                  (n = this.hooks.onProcessStyle[o](n, t, r)), (t.style = n);
              }
            },
            {
              key: "onProcessSheet",
              value: function (e) {
                for (var t = 0; t < this.hooks.onProcessSheet.length; t++) this.hooks.onProcessSheet[t](e);
              }
            },
            {
              key: "onUpdate",
              value: function (e, t, r) {
                for (var n = 0; n < this.hooks.onUpdate.length; n++) this.hooks.onUpdate[n](e, t, r);
              }
            },
            {
              key: "onChangeValue",
              value: function (e, t, r) {
                for (var n = e, o = 0; o < this.hooks.onChangeValue.length; o++) n = this.hooks.onChangeValue[o](n, t, r);
                return n;
              }
            },
            {
              key: "use",
              value: function (e) {
                for (var t in e) this.hooks[t] ? this.hooks[t].push(e[t]) : (0, i.default)(!1, '[JSS] Unknown hook "%s".', t);
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = s;
    }),
    a.register("2eYGG", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r = l(a("8pyBJ")),
        n = l(a("4qG3i")),
        o = l(a("8pLTn")),
        i = l(a("58XyG")),
        s = l(a("1M1b3"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = {
          "@charset": r.default,
          "@import": r.default,
          "@namespace": r.default,
          "@keyframes": n.default,
          "@media": o.default,
          "@supports": o.default,
          "@font-face": i.default,
          "@viewport": s.default,
          "@-ms-viewport": s.default
        },
        c = Object.keys(u).map(function (e) {
          var t = new RegExp("^" + e),
            r = u[e];
          return {
            onCreateRule: function (e, n, o) {
              return t.test(e) ? new r(e, n, o) : null;
            }
          };
        });
      e.exports.default = c;
    }),
    a.register("8pyBJ", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r = (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      var n = (function () {
        function e(t, r, n) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.type = "simple"),
            (this.isProcessed = !1),
            (this.key = t),
            (this.value = r),
            (this.options = n);
        }
        return (
          r(e, [
            {
              key: "toString",
              value: function (e) {
                if (Array.isArray(this.value)) {
                  for (var t = "", r = 0; r < this.value.length; r++)
                    (t += this.key + " " + this.value[r] + ";"), this.value[r + 1] && (t += "\n");
                  return t;
                }
                return this.key + " " + this.value + ";";
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = n;
    }),
    a.register("4qG3i", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r,
        n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        i = a("8N8Yy"),
        s = (r = i) && r.__esModule ? r : { default: r };
      var l = (function () {
        function e(t, r, o) {
          for (var i in ((function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
          (this.type = "keyframes"),
          (this.isProcessed = !1),
          (this.key = t),
          (this.options = o),
          (this.rules = new s.default(n({}, o, { parent: this }))),
          r))
            this.rules.add(i, r[i], n({}, this.options, { parent: this, selector: i }));
          this.rules.process();
        }
        return (
          o(e, [
            {
              key: "toString",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { indent: 1 },
                  t = this.rules.toString(e);
                return t && (t += "\n"), this.key + " {\n" + t + "}";
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = l;
    }),
    a.register("8pLTn", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r,
        n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        i = a("8N8Yy"),
        s = (r = i) && r.__esModule ? r : { default: r };
      var l = (function () {
        function e(t, r, o) {
          for (var i in ((function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
          (this.type = "conditional"),
          (this.isProcessed = !1),
          (this.key = t),
          (this.options = o),
          (this.rules = new s.default(n({}, o, { parent: this }))),
          r))
            this.rules.add(i, r[i]);
          this.rules.process();
        }
        return (
          o(e, [
            {
              key: "getRule",
              value: function (e) {
                return this.rules.get(e);
              }
            },
            {
              key: "indexOf",
              value: function (e) {
                return this.rules.indexOf(e);
              }
            },
            {
              key: "addRule",
              value: function (e, t, r) {
                var n = this.rules.add(e, t, r);
                return this.options.jss.plugins.onProcessRule(n), n;
              }
            },
            {
              key: "toString",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { indent: 1 },
                  t = this.rules.toString(e);
                return t ? this.key + " {\n" + t + "\n}" : "";
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = l;
    }),
    a.register("58XyG", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r,
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        o = a("5TMak"),
        i = (r = o) && r.__esModule ? r : { default: r };
      var s = (function () {
        function e(t, r, n) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.type = "font-face"),
            (this.isProcessed = !1),
            (this.key = t),
            (this.style = r),
            (this.options = n);
        }
        return (
          n(e, [
            {
              key: "toString",
              value: function (e) {
                if (Array.isArray(this.style)) {
                  for (var t = "", r = 0; r < this.style.length; r++)
                    (t += (0, i.default)(this.key, this.style[r])), this.style[r + 1] && (t += "\n");
                  return t;
                }
                return (0, i.default)(this.key, this.style, e);
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = s;
    }),
    a.register("1M1b3", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r,
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        o = a("5TMak"),
        i = (r = o) && r.__esModule ? r : { default: r };
      var s = (function () {
        function e(t, r, n) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.type = "viewport"),
            (this.isProcessed = !1),
            (this.key = t),
            (this.style = r),
            (this.options = n);
        }
        return (
          n(e, [
            {
              key: "toString",
              value: function (e) {
                return (0, i.default)(this.key, this.style, e);
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = s;
    }),
    a.register("e4S2w", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r = i(a("fOVIp")),
        n = i(a("g9DUP")),
        o = i(a("220Tc"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports.default = {
        onCreateRule: function (e, t, r) {
          if (!(0, o.default)(t)) return null;
          var i = t,
            a = (0, n.default)(e, {}, r);
          return (
            i.subscribe(function (e) {
              for (var t in e) a.prop(t, e[t]);
            }),
            a
          );
        },
        onProcessRule: function (e) {
          if (e instanceof r.default) {
            var t = e,
              n = t.style,
              i = function (e) {
                var r = n[e];
                if (!(0, o.default)(r)) return "continue";
                delete n[e],
                  r.subscribe({
                    next: function (r) {
                      t.prop(e, r);
                    }
                  });
              };
            for (var a in n) i(a);
          }
        }
      };
    }),
    a.register("iMmFN", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r = i(a("8N8Yy")),
        n = i(a("fOVIp")),
        o = i(a("g9DUP"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = Date.now(),
        l = "fnValues" + s,
        u = "fnStyle" + ++s;
      e.exports.default = {
        onCreateRule: function (e, t, r) {
          if ("function" != typeof t) return null;
          var n = (0, o.default)(e, {}, r);
          return (n[u] = t), n;
        },
        onProcessStyle: function (e, t) {
          var r = {};
          for (var n in e) {
            var o = e[n];
            "function" == typeof o && (delete e[n], (r[n] = o));
          }
          return (t[l] = r), e;
        },
        onUpdate: function (e, t) {
          if (t.rules instanceof r.default) t.rules.update(e);
          else if (t instanceof n.default) {
            if (t[l]) for (var o in t[l]) t.prop(o, t[l][o](e));
            var i = t[u];
            if (i) {
              var a = i(e);
              for (var s in a) t.prop(s, a[s]);
            }
          }
        }
      };
    }),
    a.register("b7voq", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        n = l(a("ifWlI")),
        o = l(a("j38dx")),
        i = l(a("fOVIp")),
        s = l(a("gx5rx"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = function (e) {
        var t = void 0;
        return function () {
          return t || (t = e()), t;
        };
      };
      function c(e, t) {
        try {
          return e.style.getPropertyValue(t);
        } catch (e) {
          return "";
        }
      }
      function d(e, t, r) {
        try {
          var n = r;
          if (Array.isArray(r) && ((n = (0, s.default)(r, !0)), "!important" === r[r.length - 1]))
            return e.style.setProperty(t, n, "important"), !0;
          e.style.setProperty(t, n);
        } catch (e) {
          return !1;
        }
        return !0;
      }
      function p(e, t) {
        try {
          e.style.removeProperty(t);
        } catch (e) {
          (0, n.default)(!1, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', e.message, t);
        }
      }
      var f,
        h = 1,
        g = 7,
        m =
          ((f = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return e.substr(t, e.indexOf("{") - 1);
          }),
          function (e) {
            if (e.type === h) return e.selectorText;
            if (e.type === g) {
              var t = e.name;
              if (t) return "@keyframes " + t;
              var r = e.cssText;
              return "@" + f(r, r.indexOf("keyframes"));
            }
            return f(e.cssText);
          });
      function v(e, t) {
        return (e.selectorText = t), e.selectorText === t;
      }
      var y,
        b,
        x = u(function () {
          return document.head || document.getElementsByTagName("head")[0];
        }),
        w =
          ((y = void 0),
          (b = !1),
          function (e) {
            var t = {};
            y || (y = document.createElement("style"));
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              if (n instanceof i.default) {
                var o = n.selector;
                if (o && -1 !== o.indexOf("\\")) {
                  b || (x().appendChild(y), (b = !0)), (y.textContent = o + " {}");
                  var a = y.sheet;
                  if (a) {
                    var s = a.cssRules;
                    s && (t[s[0].selectorText] = n.key);
                  }
                }
              }
            }
            return b && (x().removeChild(y), (b = !1)), t;
          });
      function E(e) {
        var t = o.default.registry;
        if (t.length > 0) {
          var r = (function (e, t) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              if (n.attached && n.options.index > t.index && n.options.insertionPoint === t.insertionPoint) return n;
            }
            return null;
          })(t, e);
          if (r) return r.renderer.element;
          if (
            ((r = (function (e, t) {
              for (var r = e.length - 1; r >= 0; r--) {
                var n = e[r];
                if (n.attached && n.options.insertionPoint === t.insertionPoint) return n;
              }
              return null;
            })(t, e)),
            r)
          )
            return r.renderer.element.nextElementSibling;
        }
        var i = e.insertionPoint;
        if (i && "string" == typeof i) {
          var a = (function (e) {
            for (var t = x(), r = 0; r < t.childNodes.length; r++) {
              var n = t.childNodes[r];
              if (8 === n.nodeType && n.nodeValue.trim() === e) return n;
            }
            return null;
          })(i);
          if (a) return a.nextSibling;
          (0, n.default)("jss" === i, '[JSS] Insertion point "%s" not found.', i);
        }
        return null;
      }
      var _ = u(function () {
          var e = document.querySelector('meta[property="csp-nonce"]');
          return e ? e.getAttribute("content") : null;
        }),
        S = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.getPropertyValue = c),
              (this.setProperty = d),
              (this.removeProperty = p),
              (this.setSelector = v),
              (this.getKey = m),
              (this.getUnescapedKeysMap = w),
              (this.hasInsertedRules = !1),
              t && o.default.add(t),
              (this.sheet = t);
            var r = this.sheet ? this.sheet.options : {},
              n = r.media,
              i = r.meta,
              a = r.element;
            (this.element = a || document.createElement("style")),
              this.element.setAttribute("data-jss", ""),
              n && this.element.setAttribute("media", n),
              i && this.element.setAttribute("data-meta", i);
            var s = _();
            s && this.element.setAttribute("nonce", s);
          }
          return (
            r(e, [
              {
                key: "attach",
                value: function () {
                  !this.element.parentNode &&
                    this.sheet &&
                    (this.hasInsertedRules && (this.deploy(), (this.hasInsertedRules = !1)),
                    (function (e, t) {
                      var r = t.insertionPoint,
                        o = E(t);
                      if (o) {
                        var i = o.parentNode;
                        i && i.insertBefore(e, o);
                      } else if (r && "number" == typeof r.nodeType) {
                        var a = r,
                          s = a.parentNode;
                        s ? s.insertBefore(e, a.nextSibling) : (0, n.default)(!1, "[JSS] Insertion point is not in the DOM.");
                      } else x().insertBefore(e, o);
                    })(this.element, this.sheet.options));
                }
              },
              {
                key: "detach",
                value: function () {
                  this.element.parentNode.removeChild(this.element);
                }
              },
              {
                key: "deploy",
                value: function () {
                  this.sheet && (this.element.textContent = "\n" + this.sheet.toString() + "\n");
                }
              },
              {
                key: "insertRule",
                value: function (e, t) {
                  var r = this.element.sheet,
                    o = r.cssRules,
                    i = e.toString();
                  if ((t || (t = o.length), !i)) return !1;
                  try {
                    r.insertRule(i, t);
                  } catch (t) {
                    return (0, n.default)(!1, "[JSS] Can not insert an unsupported rule \n\r%s", e), !1;
                  }
                  return (this.hasInsertedRules = !0), o[t];
                }
              },
              {
                key: "deleteRule",
                value: function (e) {
                  var t = this.element.sheet,
                    r = this.indexOf(e);
                  return -1 !== r && (t.deleteRule(r), !0);
                }
              },
              {
                key: "indexOf",
                value: function (e) {
                  for (var t = this.element.sheet.cssRules, r = 0; r < t.length; r++) if (e === t[r]) return r;
                  return -1;
                }
              },
              {
                key: "replaceRule",
                value: function (e, t) {
                  var r = this.indexOf(e),
                    n = this.insertRule(t, r);
                  return this.element.sheet.deleteRule(r), n;
                }
              },
              {
                key: "getRules",
                value: function () {
                  return this.element.sheet.cssRules;
                }
              }
            ]),
            e
          );
        })();
      e.exports.default = S;
    }),
    a.register("5Seiu", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r = (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      var n = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        return (
          r(e, [
            {
              key: "setProperty",
              value: function () {
                return !0;
              }
            },
            {
              key: "getPropertyValue",
              value: function () {
                return "";
              }
            },
            { key: "removeProperty", value: function () {} },
            {
              key: "setSelector",
              value: function () {
                return !0;
              }
            },
            {
              key: "getKey",
              value: function () {
                return "";
              }
            },
            { key: "attach", value: function () {} },
            { key: "detach", value: function () {} },
            { key: "deploy", value: function () {} },
            {
              key: "insertRule",
              value: function () {
                return !1;
              }
            },
            {
              key: "deleteRule",
              value: function () {
                return !0;
              }
            },
            {
              key: "replaceRule",
              value: function () {
                return !1;
              }
            },
            { key: "getRules", value: function () {} },
            {
              key: "indexOf",
              value: function () {
                return -1;
              }
            }
          ]),
          e
        );
      })();
      e.exports.default = n;
    }),
    a.register("gj9wC", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
      e.exports.default = function () {
        function e(e) {
          return function (t, r) {
            var n = e.getRule(r);
            return n ? n.selector : ((0, i.default)(!1, "[JSS] Could not find the referenced rule %s in %s.", r, e.options.meta || e), r);
          };
        }
        var t = function (e) {
          return -1 !== e.indexOf("&");
        };
        function n(e, r) {
          for (var n = r.split(s), o = e.split(s), i = "", a = 0; a < n.length; a++)
            for (var u = n[a], c = 0; c < o.length; c++) {
              var d = o[c];
              i && (i += ", "), (i += t(d) ? d.replace(l, u) : u + " " + d);
            }
          return i;
        }
        function o(e, t, n) {
          if (n) return r({}, n, { index: n.index + 1 });
          var o = e.options.nestingLevel;
          return (o = void 0 === o ? 1 : o + 1), r({}, e.options, { nestingLevel: o, index: t.indexOf(e) + 1 });
        }
        return {
          onProcessStyle: function (i, a) {
            if ("style" !== a.type) return i;
            var s = a.options.parent,
              l = void 0,
              c = void 0;
            for (var d in i) {
              var p = t(d),
                f = "@" === d[0];
              if (p || f) {
                if (((l = o(a, s, l)), p)) {
                  var h = n(d, a.selector);
                  c || (c = e(s)), (h = h.replace(u, c)), s.addRule(h, i[d], r({}, l, { selector: h }));
                } else f && s.addRule(d, null, l).addRule(a.key, i[d], { selector: a.selector });
                delete i[d];
              }
            }
            return i;
          }
        };
      };
      var n,
        o = a("jR8Te"),
        i = (n = o) && n.__esModule ? n : { default: n };
      var s = /\s*,\s*/g,
        l = /&/g,
        u = /\$([\w-]+)/g;
    }),
    a.register("jR8Te", function (e, t) {
      "use strict";
      e.exports = function () {};
    }),
    a.register("8xi1w", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function () {
          return {
            onProcessStyle: function (e) {
              if (Array.isArray(e)) {
                for (var t = 0; t < e.length; t++) e[t] = i(e[t]);
                return e;
              }
              return i(e);
            },
            onChangeValue: function (e, t, r) {
              var n = (0, o.default)(t);
              return t === n ? e : (r.prop(n, e), null);
            }
          };
        });
      var r,
        n = a("cg7sf"),
        o = (r = n) && r.__esModule ? r : { default: r };
      function i(e) {
        var t = {};
        for (var r in e) t[(0, o.default)(r)] = e[r];
        return e.fallbacks && (Array.isArray(e.fallbacks) ? (t.fallbacks = e.fallbacks.map(i)) : (t.fallbacks = i(e.fallbacks))), t;
      }
    }),
    a.register("cg7sf", function (t, n) {
      r(t.exports), e(t.exports, "default", () => l);
      var o = /[A-Z]/g,
        i = /^ms-/,
        a = {};
      function s(e) {
        return "-" + e.toLowerCase();
      }
      var l = function (e) {
        if (a.hasOwnProperty(e)) return a[e];
        var t = e.replace(o, s);
        return (a[e] = i.test(t) ? "-" + t : t);
      };
    }),
    a.register("7JAt6", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            };
      e.exports.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = i(e);
        return {
          onProcessStyle: function (e, r) {
            if ("style" !== r.type) return e;
            for (var n in e) e[n] = l(n, e[n], t);
            return e;
          },
          onChangeValue: function (e, r) {
            return l(r, e, t);
          }
        };
      };
      var n,
        o = a("c9ng8");
      function i(e) {
        var t = /(-[a-z])/g,
          r = function (e) {
            return e[1].toUpperCase();
          },
          n = {};
        for (var o in e) (n[o] = e[o]), (n[o.replace(t, r)] = e[o]);
        return n;
      }
      var s = i(((n = o) && n.__esModule ? n : { default: n }).default);
      function l(e, t, n) {
        if (!t) return t;
        var o = t,
          i = void 0 === t ? "undefined" : r(t);
        switch (("object" === i && Array.isArray(t) && (i = "array"), i)) {
          case "object":
            if ("fallbacks" === e) {
              for (var a in t) t[a] = l(a, t[a], n);
              break;
            }
            for (var u in t) t[u] = l(e + "-" + u, t[u], n);
            break;
          case "array":
            for (var c = 0; c < t.length; c++) t[c] = l(e, t[c], n);
            break;
          case "number":
            0 !== t && (o = t + (n[e] || s[e] || ""));
        }
        return o;
      }
    }),
    a.register("c9ng8", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = {
          "animation-delay": "ms",
          "animation-duration": "ms",
          "background-position": "px",
          "background-position-x": "px",
          "background-position-y": "px",
          "background-size": "px",
          border: "px",
          "border-bottom": "px",
          "border-bottom-left-radius": "px",
          "border-bottom-right-radius": "px",
          "border-bottom-width": "px",
          "border-left": "px",
          "border-left-width": "px",
          "border-radius": "px",
          "border-right": "px",
          "border-right-width": "px",
          "border-spacing": "px",
          "border-top": "px",
          "border-top-left-radius": "px",
          "border-top-right-radius": "px",
          "border-top-width": "px",
          "border-width": "px",
          "border-after-width": "px",
          "border-before-width": "px",
          "border-end-width": "px",
          "border-horizontal-spacing": "px",
          "border-start-width": "px",
          "border-vertical-spacing": "px",
          bottom: "px",
          "box-shadow": "px",
          "column-gap": "px",
          "column-rule": "px",
          "column-rule-width": "px",
          "column-width": "px",
          "flex-basis": "px",
          "font-size": "px",
          "font-size-delta": "px",
          height: "px",
          left: "px",
          "letter-spacing": "px",
          "logical-height": "px",
          "logical-width": "px",
          margin: "px",
          "margin-after": "px",
          "margin-before": "px",
          "margin-bottom": "px",
          "margin-left": "px",
          "margin-right": "px",
          "margin-top": "px",
          "max-height": "px",
          "max-width": "px",
          "margin-end": "px",
          "margin-start": "px",
          "mask-position-x": "px",
          "mask-position-y": "px",
          "mask-size": "px",
          "max-logical-height": "px",
          "max-logical-width": "px",
          "min-height": "px",
          "min-width": "px",
          "min-logical-height": "px",
          "min-logical-width": "px",
          motion: "px",
          "motion-offset": "px",
          outline: "px",
          "outline-offset": "px",
          "outline-width": "px",
          padding: "px",
          "padding-bottom": "px",
          "padding-left": "px",
          "padding-right": "px",
          "padding-top": "px",
          "padding-after": "px",
          "padding-before": "px",
          "padding-end": "px",
          "padding-start": "px",
          "perspective-origin-x": "%",
          "perspective-origin-y": "%",
          perspective: "px",
          right: "px",
          "shape-margin": "px",
          size: "px",
          "text-indent": "px",
          "text-stroke": "px",
          "text-stroke-width": "px",
          top: "px",
          "transform-origin": "%",
          "transform-origin-x": "%",
          "transform-origin-y": "%",
          "transform-origin-z": "%",
          "transition-delay": "ms",
          "transition-duration": "ms",
          "vertical-align": "px",
          width: "px",
          "word-spacing": "px",
          "box-shadow-x": "px",
          "box-shadow-y": "px",
          "box-shadow-blur": "px",
          "box-shadow-spread": "px",
          "font-line-height": "px",
          "text-shadow-x": "px",
          "text-shadow-y": "px",
          "text-shadow-blur": "px"
        });
    }),
    a.register("3XVoX", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function () {
          return {
            onProcessRule: function (e) {
              "keyframes" === e.type && (e.key = "@" + r.prefix.css + e.key.substr(1));
            },
            onProcessStyle: function (e, t) {
              if ("style" !== t.type) return e;
              for (var n in e) {
                var o = e[n],
                  i = !1,
                  a = r.supportedProperty(n);
                a && a !== n && (i = !0);
                var s = !1,
                  l = r.supportedValue(a, o);
                l && l !== o && (s = !0), (i || s) && (i && delete e[n], (e[a || n] = l || o));
              }
              return e;
            },
            onChangeValue: function (e, t) {
              return r.supportedValue(t, e);
            }
          };
        });
      var r = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      })(a("1QWXu"));
    }),
    a.register("1QWXu", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.supportedValue = e.exports.supportedProperty = e.exports.prefix = void 0);
      var r = i(a("jv63y")),
        n = i(a("8Su5Z")),
        o = i(a("a0wGf"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (e.exports.default = { prefix: r.default, supportedProperty: n.default, supportedValue: o.default }),
        /**
         * CSS Vendor prefix detection and property feature testing.
         *
         * @copyright Oleg Slobodskoi 2015
         * @website https://github.com/jsstyles/css-vendor
         * @license MIT
         */
        (e.exports.prefix = r.default),
        (e.exports.supportedProperty = n.default),
        (e.exports.supportedValue = o.default);
    }),
    a.register("jv63y", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 });
      var r,
        n = a("elFTB");
      var o = "",
        i = "";
      if (((r = n) && r.__esModule ? r : { default: r }).default) {
        var s = { Moz: "-moz-", ms: "-ms-", O: "-o-", Webkit: "-webkit-" },
          l = document.createElement("p").style;
        for (var u in s)
          if (u + "Transform" in l) {
            (o = u), (i = s[u]);
            break;
          }
      }
      e.exports.default = { js: o, css: i };
    }),
    a.register("8Su5Z", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e) {
          if (!s) return e;
          if (null != l[e]) return l[e];
          (0, o.default)(e) in s.style
            ? (l[e] = e)
            : n.default.js + (0, o.default)("-" + e) in s.style
            ? (l[e] = n.default.css + e)
            : (l[e] = !1);
          return l[e];
        });
      var r = i(a("elFTB")),
        n = i(a("jv63y")),
        o = i(a("iyTkx"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = void 0,
        l = {};
      if (r.default) {
        s = document.createElement("p");
        var u = window.getComputedStyle(document.documentElement, "");
        for (var c in u) isNaN(c) || (l[u[c]] = u[c]);
      }
    }),
    a.register("iyTkx", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e) {
          return e.replace(r, n);
        });
      var r = /[-\s]+(.)?/g;
      function n(e, t) {
        return t ? t.toUpperCase() : "";
      }
    }),
    a.register("a0wGf", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e, t) {
          if (!s) return t;
          if ("string" != typeof t || !isNaN(parseInt(t, 10))) return t;
          var r = e + t;
          if (null != i[r]) return i[r];
          try {
            s.style[e] = t;
          } catch (e) {
            return (i[r] = !1), !1;
          }
          "" !== s.style[e]
            ? (i[r] = t)
            : ("-ms-flex" === (t = n.default.css + t) && (t = "-ms-flexbox"), (s.style[e] = t), "" !== s.style[e] && (i[r] = t));
          i[r] || (i[r] = !1);
          return (s.style[e] = ""), i[r];
        });
      var r = o(a("elFTB")),
        n = o(a("jv63y"));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = {},
        s = void 0;
      r.default && (s = document.createElement("p"));
    }),
    a.register("h9UUm", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function () {
          function e(e, t) {
            return e.length - t.length;
          }
          return {
            onProcessStyle: function (t, r) {
              if ("style" !== r.type) return t;
              var n = {},
                o = Object.keys(t).sort(e);
              for (var i in o) n[o[i]] = t[o[i]];
              return n;
            }
          };
        });
    }),
    a.register("7jMHD", function (e, t) {
      "use strict";
      var r = a("kIg7K"),
        n = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = e.exports.MuiThemeProviderOld = void 0);
      var o = n(a("4SXfL")),
        i = n(a("7WJzX")),
        s = n(a("6vi5T")),
        l = n(a("hyPzA")),
        u = n(a("kqQfm")),
        c = n(a("3dqKW")),
        d = n(a("4uUdr")),
        p = n(a("7b0kr")),
        f = n(a("3pr9z")),
        h = (n(a("fqT2K")), n(a("cOMZD"))),
        g = a("4ZECF"),
        m = r(a("h2SXa")),
        v = (function (e) {
          function t(e, r) {
            var n;
            return (
              (0, s.default)(this, t),
              ((n = (0, u.default)(this, (0, c.default)(t).call(this))).broadcast = (0, h.default)()),
              (n.outerTheme = m.default.initial(r)),
              n.broadcast.setState(n.mergeOuterLocalTheme(e.theme)),
              n
            );
          }
          return (
            (0, d.default)(t, e),
            (0, l.default)(t, [
              {
                key: "getChildContext",
                value: function () {
                  var e,
                    t = this.props,
                    r = t.disableStylesGeneration,
                    n = t.sheetsCache,
                    o = t.sheetsManager,
                    a = this.context.muiThemeProviderOptions || {};
                  return (
                    void 0 !== r && (a.disableStylesGeneration = r),
                    void 0 !== n && (a.sheetsCache = n),
                    void 0 !== o && (a.sheetsManager = o),
                    (e = {}),
                    (0, i.default)(e, m.CHANNEL, this.broadcast),
                    (0, i.default)(e, "muiThemeProviderOptions", a),
                    e
                  );
                }
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.unsubscribeId = m.default.subscribe(this.context, function (t) {
                    (e.outerTheme = t), e.broadcast.setState(e.mergeOuterLocalTheme(e.props.theme));
                  });
                }
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.theme !== e.theme && this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
                }
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  null !== this.unsubscribeId && m.default.unsubscribe(this.context, this.unsubscribeId);
                }
              },
              {
                key: "mergeOuterLocalTheme",
                value: function (e) {
                  return "function" == typeof e ? e(this.outerTheme) : this.outerTheme ? (0, o.default)({}, this.outerTheme, e) : e;
                }
              },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                }
              }
            ]),
            t
          );
        })(p.default.Component);
      (e.exports.MuiThemeProviderOld = v),
        (v.childContextTypes = (0, o.default)({}, m.default.contextTypes, { muiThemeProviderOptions: f.default.object })),
        (v.contextTypes = (0, o.default)({}, m.default.contextTypes, { muiThemeProviderOptions: f.default.object })),
        g.default.__MUI_STYLES__ || (g.default.__MUI_STYLES__ = {}),
        g.default.__MUI_STYLES__.MuiThemeProvider || (g.default.__MUI_STYLES__.MuiThemeProvider = v);
      var y = g.default.__MUI_STYLES__.MuiThemeProvider;
      e.exports.default = y;
    }),
    a.register("kIg7K", function (e, t) {
      var r = a("c9Tee");
      function n() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      e.exports = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
        var t = n();
        if (t && t.has(e)) return t.get(e);
        var o = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set) ? Object.defineProperty(o, a, s) : (o[a] = e[a]);
          }
        return (o.default = e), t && t.set(e, o), o;
      };
    }),
    a.register("c9Tee", function (e, t) {
      function r(t) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? (e.exports = r =
                function (e) {
                  return typeof e;
                })
            : (e.exports = r =
                function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }),
          r(t)
        );
      }
      e.exports = r;
    }),
    a.register("6vi5T", function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      };
    }),
    a.register("hyPzA", function (e, t) {
      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      e.exports = function (e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    }),
    a.register("kqQfm", function (e, t) {
      var r = a("c9Tee"),
        n = a("1zDLT");
      e.exports = function (e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t) ? n(e) : t;
      };
    }),
    a.register("1zDLT", function (e, t) {
      e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      };
    }),
    a.register("3dqKW", function (e, t) {
      function r(t) {
        return (
          (e.exports = r =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          r(t)
        );
      }
      e.exports = r;
    }),
    a.register("4uUdr", function (e, t) {
      var r = a("gzWLl");
      e.exports = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && r(e, t);
      };
    }),
    a.register("gzWLl", function (e, t) {
      function r(t, n) {
        return (
          (e.exports = r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          r(t, n)
        );
      }
      e.exports = r;
    }),
    a.register("cOMZD", function (t, n) {
      r(t.exports), e(t.exports, "default", () => o);
      var o = function (e) {
        var t = {},
          r = 1,
          n = e;
        return {
          getState: function () {
            return n;
          },
          setState: function (e) {
            n = e;
            for (var r = Object.keys(t), o = 0, i = r.length; o < i; o++) t[r[o]] && t[r[o]](e);
          },
          subscribe: function (e) {
            if ("function" != typeof e) throw new Error("listener must be a function.");
            var n = r;
            return (t[n] = e), (r += 1), n;
          },
          unsubscribe: function (e) {
            delete t[e];
          }
        };
      };
    }),
    a.register("h2SXa", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = e.exports.CHANNEL = void 0);
      var n = r(a("7WJzX")),
        o = "__THEMING__";
      e.exports.CHANNEL = o;
      var i = {
        contextTypes: (0, n.default)({}, o, function () {}),
        initial: function (e) {
          return e[o] ? e[o].getState() : null;
        },
        subscribe: function (e, t) {
          return e[o] ? e[o].subscribe(t) : null;
        },
        unsubscribe: function (e, t) {
          e[o] && e[o].unsubscribe(t);
        }
      };
      e.exports.default = i;
    }),
    a.register("aL7xc", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.default = function (e) {
          return e;
        });
    }),
    a.register("a6dSz", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = e.exports.sheetsManager = void 0);
      var n = r(a("7WJzX")),
        o = r(a("4SXfL")),
        i = r(a("6vi5T")),
        s = r(a("hyPzA")),
        l = r(a("kqQfm")),
        u = r(a("3dqKW")),
        c = r(a("4uUdr")),
        d = r(a("c4c0k")),
        p = r(a("7b0kr")),
        f = r(a("3pr9z")),
        h = (r(a("fqT2K")), r(a("aQ47y"))),
        g = a("4ZECF"),
        m = a("2q33Q"),
        v = r(a("kT228")),
        y = r(a("2TfOV")),
        b = r(a("7wqX3")),
        x = r(a("bgmoH")),
        w = r(a("9ar8U")),
        E = r(a("h2SXa")),
        _ = r(a("4qadp")),
        S = r(a("e9bMm")),
        O = r(a("7v6ez")),
        k = (0, m.create)((0, y.default)()),
        C = (0, _.default)(),
        T = -1e11,
        R = new Map();
      e.exports.sheetsManager = R;
      var P = {},
        j = (0, w.default)({ typography: { suppressWarning: !0 } });
      g.default.__MUI_STYLES__ || (g.default.__MUI_STYLES__ = {}),
        g.default.__MUI_STYLES__.withStyles ||
          (g.default.__MUI_STYLES__.withStyles = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return function (r) {
              var a,
                g = t.withTheme,
                m = void 0 !== g && g,
                y = t.flip,
                w = void 0 === y ? null : y,
                _ = t.name,
                M = (0, d.default)(t, ["withTheme", "flip", "name"]),
                D = (0, S.default)(e),
                L = D.themingEnabled || "string" == typeof _ || m;
              (T += 1), (D.options.index = T);
              var A = (function (e) {
                function t(e, r) {
                  var n;
                  (0, i.default)(this, t),
                    ((n = (0, l.default)(this, (0, u.default)(t).call(this, e, r))).jss = r[v.default.jss] || k),
                    (n.sheetsManager = R),
                    (n.unsubscribeId = null);
                  var a = r.muiThemeProviderOptions;
                  return (
                    a &&
                      (a.sheetsManager && (n.sheetsManager = a.sheetsManager),
                      (n.sheetsCache = a.sheetsCache),
                      (n.disableStylesGeneration = a.disableStylesGeneration)),
                    (n.stylesCreatorSaved = D),
                    (n.sheetOptions = (0, o.default)({ generateClassName: C }, r[v.default.sheetOptions])),
                    (n.theme = L ? E.default.initial(r) || j : P),
                    n.attach(n.theme),
                    (n.cacheClasses = { value: null, lastProp: null, lastJSS: {} }),
                    n
                  );
                }
                return (
                  (0, c.default)(t, e),
                  (0, s.default)(t, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e = this;
                        L &&
                          (this.unsubscribeId = E.default.subscribe(this.context, function (t) {
                            var r = e.theme;
                            (e.theme = t),
                              e.attach(e.theme),
                              e.setState({}, function () {
                                e.detach(r);
                              });
                          }));
                      }
                    },
                    {
                      key: "componentDidUpdate",
                      value: function () {
                        this.stylesCreatorSaved;
                      }
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.detach(this.theme), null !== this.unsubscribeId && E.default.unsubscribe(this.context, this.unsubscribeId);
                      }
                    },
                    {
                      key: "getClasses",
                      value: function () {
                        if (this.disableStylesGeneration) return this.props.classes || {};
                        var e = !1,
                          t = x.default.get(this.sheetsManager, this.stylesCreatorSaved, this.theme);
                        return (
                          t.sheet.classes !== this.cacheClasses.lastJSS && ((this.cacheClasses.lastJSS = t.sheet.classes), (e = !0)),
                          this.props.classes !== this.cacheClasses.lastProp &&
                            ((this.cacheClasses.lastProp = this.props.classes), (e = !0)),
                          e &&
                            (this.cacheClasses.value = (0, b.default)({
                              baseClasses: this.cacheClasses.lastJSS,
                              newClasses: this.props.classes,
                              Component: r
                            })),
                          this.cacheClasses.value
                        );
                      }
                    },
                    {
                      key: "attach",
                      value: function (e) {
                        if (!this.disableStylesGeneration) {
                          var t = this.stylesCreatorSaved,
                            r = x.default.get(this.sheetsManager, t, e);
                          if ((r || ((r = { refs: 0, sheet: null }), x.default.set(this.sheetsManager, t, e, r)), 0 === r.refs)) {
                            var n;
                            this.sheetsCache && (n = x.default.get(this.sheetsCache, t, e)),
                              n || ((n = this.createSheet(e)).attach(), this.sheetsCache && x.default.set(this.sheetsCache, t, e, n)),
                              (r.sheet = n);
                            var o = this.context[v.default.sheetsRegistry];
                            o && o.add(n);
                          }
                          r.refs += 1;
                        }
                      }
                    },
                    {
                      key: "createSheet",
                      value: function (e) {
                        var t = this.stylesCreatorSaved.create(e, _),
                          n = _;
                        return this.jss.createStyleSheet(
                          t,
                          (0, o.default)(
                            { meta: n, classNamePrefix: n, flip: "boolean" == typeof w ? w : "rtl" === e.direction, link: !1 },
                            this.sheetOptions,
                            this.stylesCreatorSaved.options,
                            { name: _ || r.displayName },
                            M
                          )
                        );
                      }
                    },
                    {
                      key: "detach",
                      value: function (e) {
                        if (!this.disableStylesGeneration) {
                          var t = x.default.get(this.sheetsManager, this.stylesCreatorSaved, e);
                          if (((t.refs -= 1), 0 === t.refs)) {
                            x.default.delete(this.sheetsManager, this.stylesCreatorSaved, e), this.jss.removeStyleSheet(t.sheet);
                            var r = this.context[v.default.sheetsRegistry];
                            r && r.remove(t.sheet);
                          }
                        }
                      }
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.props,
                          t = (e.classes, e.innerRef),
                          n = (0, d.default)(e, ["classes", "innerRef"]),
                          i = (0, O.default)({ theme: this.theme, name: _, props: n });
                        return (
                          m && !i.theme && (i.theme = this.theme),
                          p.default.createElement(r, (0, o.default)({}, i, { classes: this.getClasses(), ref: t }))
                        );
                      }
                    }
                  ]),
                  t
                );
              })(p.default.Component);
              return (
                (A.contextTypes = (0, o.default)(
                  ((a = { muiThemeProviderOptions: f.default.object }),
                  (0, n.default)(a, v.default.jss, f.default.object),
                  (0, n.default)(a, v.default.sheetOptions, f.default.object),
                  (0, n.default)(a, v.default.sheetsRegistry, f.default.object),
                  a),
                  L ? E.default.contextTypes : {}
                )),
                (0, h.default)(A, r),
                A
              );
            };
          });
      e.exports.default = function (e, t) {
        return g.default.__MUI_STYLES__.withStyles(e, (0, o.default)({ defaultTheme: j }, t));
      };
    }),
    a.register("kT228", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = {
        jss: "64a55d578f856d258dc345b094a2a2b3",
        sheetsRegistry: "d4bd0baacbc52bbd48bbb9eb24344ecd",
        sheetOptions: "6fc570d6bd61383819d0f9e7407c452d"
      };
      e.exports.default = r;
    }),
    a.register("7wqX3", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var n = r(a("4SXfL"));
      r(a("fqT2K"));
      var o = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.baseClasses,
          r = e.newClasses;
        if ((e.Component, !r)) return t;
        var o = (0, n.default)({}, t);
        return (
          Object.keys(r).forEach(function (e) {
            r[e] && (o[e] = "".concat(t[e], " ").concat(r[e]));
          }),
          o
        );
      };
      e.exports.default = o;
    }),
    a.register("bgmoH", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = {
        set: function (e, t, r, n) {
          var o = e.get(t);
          o || ((o = new Map()), e.set(t, o)), o.set(r, n);
        },
        get: function (e, t, r) {
          var n = e.get(t);
          return n ? n.get(r) : void 0;
        },
        delete: function (e, t, r) {
          e.get(t).delete(r);
        }
      };
      e.exports.default = r;
    }),
    a.register("e9bMm", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var n = r(a("4SXfL")),
        o = (r(a("c9Tee")), r(a("fqT2K")), r(a("7Cnnu")));
      function i(e, t) {
        return t;
      }
      var s = function (e) {
        var t = "function" == typeof e;
        return {
          create: function (r, a) {
            var s = t ? e(r) : e;
            if (!a || !r.overrides || !r.overrides[a]) return s;
            var l = r.overrides[a],
              u = (0, n.default)({}, s);
            return (
              Object.keys(l).forEach(function (e) {
                u[e] = (0, o.default)(u[e], l[e], { arrayMerge: i });
              }),
              u
            );
          },
          options: {},
          themingEnabled: t
        };
      };
      e.exports.default = s;
    }),
    a.register("7v6ez", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = function (e) {
        var t = e.theme,
          r = e.name,
          n = e.props;
        if (!t.props || !r || !t.props[r]) return n;
        var o,
          i = t.props[r];
        for (o in i) void 0 === n[o] && (n[o] = i[o]);
        return n;
      };
      e.exports.default = r;
    }),
    a.register("gA3jP", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var n,
        o = r(a("4SXfL")),
        i = r(a("c4c0k")),
        s = r(a("6vi5T")),
        l = r(a("hyPzA")),
        u = r(a("kqQfm")),
        c = r(a("3dqKW")),
        d = r(a("4uUdr")),
        p = r(a("7b0kr")),
        f = (r(a("3pr9z")), r(a("aQ47y"))),
        h = a("4ZECF"),
        g = r(a("9ar8U")),
        m = r(a("h2SXa"));
      h.default.__MUI_STYLES__ || (h.default.__MUI_STYLES__ = {}),
        h.default.__MUI_STYLES__.withTheme ||
          (h.default.__MUI_STYLES__.withTheme = function () {
            return function (e) {
              var t = (function (t) {
                function r(e, t) {
                  var o;
                  return (
                    (0, s.default)(this, r),
                    ((o = (0, u.default)(this, (0, c.default)(r).call(this))).state = {
                      theme: m.default.initial(t) || n || (n = (0, g.default)({ typography: { suppressWarning: !0 } }))
                    }),
                    o
                  );
                }
                return (
                  (0, d.default)(r, t),
                  (0, l.default)(r, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e = this;
                        this.unsubscribeId = m.default.subscribe(this.context, function (t) {
                          e.setState({ theme: t });
                        });
                      }
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        null !== this.unsubscribeId && m.default.unsubscribe(this.context, this.unsubscribeId);
                      }
                    },
                    {
                      key: "render",
                      value: function () {
                        var t = this.props,
                          r = t.innerRef,
                          n = (0, i.default)(t, ["innerRef"]);
                        return p.default.createElement(e, (0, o.default)({ theme: this.state.theme, ref: r }, n));
                      }
                    }
                  ]),
                  r
                );
              })(p.default.Component);
              return (t.contextTypes = m.default.contextTypes), (0, f.default)(t, e), t;
            };
          });
      var v = h.default.__MUI_STYLES__.withTheme;
      e.exports.default = v;
    }),
    a.register("gwJFa", function (e, t) {
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var t = {}.hasOwnProperty;
        function r() {
          for (var e = [], n = 0; n < arguments.length; n++) {
            var o = arguments[n];
            if (o) {
              var i = typeof o;
              if ("string" === i || "number" === i) e.push(o);
              else if (Array.isArray(o) && o.length) {
                var a = r.apply(null, o);
                a && e.push(a);
              } else if ("object" === i) for (var s in o) t.call(o, s) && o[s] && e.push(s);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : "function" == typeof define && "object" == typeof define.amd && define.amd
          ? define("classnames", [], function () {
              return r;
            })
          : (window.classNames = r);
      })();
    }),
    a.register("brH8f", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = e.exports.styles = void 0);
      var n = r(a("4SXfL")),
        o = r(a("c4c0k")),
        i = r(a("6vi5T")),
        s = r(a("hyPzA")),
        l = r(a("kqQfm")),
        u = r(a("3dqKW")),
        c = r(a("4uUdr")),
        d = r(a("7WJzX")),
        p = r(a("7b0kr")),
        f = (r(a("3pr9z")), r(a("fqT2K")), r(a("gwJFa"))),
        h = r(a("fZrQz")),
        g = r(a("a6dSz")),
        m = a("cyZ5J"),
        v = r(a("5d24F")),
        y = r(a("bJWTS")),
        b = function (e) {
          return {
            popper: { zIndex: e.zIndex.tooltip, opacity: 0.9, pointerEvents: "none" },
            popperInteractive: { pointerEvents: "auto" },
            tooltip: {
              backgroundColor: e.palette.grey[700],
              borderRadius: e.shape.borderRadius,
              color: e.palette.common.white,
              fontFamily: e.typography.fontFamily,
              padding: "4px 8px",
              fontSize: e.typography.pxToRem(10),
              lineHeight: "".concat(e.typography.round(1.4), "em"),
              maxWidth: 300
            },
            touch: { padding: "8px 16px", fontSize: e.typography.pxToRem(14), lineHeight: "".concat(e.typography.round(16 / 14), "em") },
            tooltipPlacementLeft: (0, d.default)({ transformOrigin: "right center", margin: "0 24px " }, e.breakpoints.up("sm"), {
              margin: "0 14px"
            }),
            tooltipPlacementRight: (0, d.default)({ transformOrigin: "left center", margin: "0 24px" }, e.breakpoints.up("sm"), {
              margin: "0 14px"
            }),
            tooltipPlacementTop: (0, d.default)({ transformOrigin: "center bottom", margin: "24px 0" }, e.breakpoints.up("sm"), {
              margin: "14px 0"
            }),
            tooltipPlacementBottom: (0, d.default)({ transformOrigin: "center top", margin: "24px 0" }, e.breakpoints.up("sm"), {
              margin: "14px 0"
            })
          };
        };
      e.exports.styles = b;
      var x = (function (e) {
        function t(e) {
          var r;
          return (
            (0, i.default)(this, t),
            ((r = (0, l.default)(this, (0, u.default)(t).call(this))).ignoreNonTouchEvents = !1),
            (r.onRootRef = function (e) {
              r.childrenRef = e;
            }),
            (r.handleFocus = function (e) {
              r.childrenRef || (r.childrenRef = e.currentTarget), r.handleEnter(e);
              var t = r.props.children.props;
              t.onFocus && t.onFocus(e);
            }),
            (r.handleEnter = function (e) {
              var t = r.props,
                n = t.children,
                o = t.enterDelay,
                i = n.props;
              "mouseover" === e.type && i.onMouseOver && i.onMouseOver(e),
                (r.ignoreNonTouchEvents && "touchstart" !== e.type) ||
                  (r.childrenRef.setAttribute("title", ""),
                  clearTimeout(r.enterTimer),
                  clearTimeout(r.leaveTimer),
                  o
                    ? (e.persist(),
                      (r.enterTimer = setTimeout(function () {
                        r.handleOpen(e);
                      }, o)))
                    : r.handleOpen(e));
            }),
            (r.handleOpen = function (e) {
              r.isControlled || r.state.open || r.setState({ open: !0 }), r.props.onOpen && r.props.onOpen(e);
            }),
            (r.handleLeave = function (e) {
              var t = r.props,
                n = t.children,
                o = t.leaveDelay,
                i = n.props;
              "blur" === e.type && i.onBlur && i.onBlur(e),
                "mouseleave" === e.type && i.onMouseLeave && i.onMouseLeave(e),
                clearTimeout(r.enterTimer),
                clearTimeout(r.leaveTimer),
                o
                  ? (e.persist(),
                    (r.leaveTimer = setTimeout(function () {
                      r.handleClose(e);
                    }, o)))
                  : r.handleClose(e);
            }),
            (r.handleClose = function (e) {
              r.isControlled || r.setState({ open: !1 }),
                r.props.onClose && r.props.onClose(e),
                clearTimeout(r.closeTimer),
                (r.closeTimer = setTimeout(function () {
                  r.ignoreNonTouchEvents = !1;
                }, r.props.theme.transitions.duration.shortest));
            }),
            (r.handleTouchStart = function (e) {
              r.ignoreNonTouchEvents = !0;
              var t = r.props,
                n = t.children,
                o = t.enterTouchDelay;
              n.props.onTouchStart && n.props.onTouchStart(e),
                clearTimeout(r.leaveTimer),
                clearTimeout(r.closeTimer),
                clearTimeout(r.touchTimer),
                e.persist(),
                (r.touchTimer = setTimeout(function () {
                  r.handleEnter(e);
                }, o));
            }),
            (r.handleTouchEnd = function (e) {
              var t = r.props,
                n = t.children,
                o = t.leaveTouchDelay;
              n.props.onTouchEnd && n.props.onTouchEnd(e),
                clearTimeout(r.touchTimer),
                clearTimeout(r.leaveTimer),
                e.persist(),
                (r.leaveTimer = setTimeout(function () {
                  r.handleClose(e);
                }, o));
            }),
            (r.isControlled = null != e.open),
            (r.state = { open: null }),
            r.isControlled || (r.state.open = !1),
            r
          );
        }
        return (
          (0, c.default)(t, e),
          (0, s.default)(t, [
            {
              key: "componentDidMount",
              value: function () {
                (this.defaultId = "mui-tooltip-".concat(Math.round(1e5 * Math.random()))), this.props.open && this.forceUpdate();
              }
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.closeTimer),
                  clearTimeout(this.enterTimer),
                  clearTimeout(this.focusTimer),
                  clearTimeout(this.leaveTimer),
                  clearTimeout(this.touchTimer);
              }
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.children,
                  i = t.classes,
                  a = t.disableFocusListener,
                  s = t.disableHoverListener,
                  l = t.disableTouchListener,
                  u = (t.enterDelay, t.enterTouchDelay, t.id),
                  c = t.interactive,
                  g = (t.leaveDelay, t.leaveTouchDelay, t.onClose, t.onOpen, t.open),
                  v = t.placement,
                  b = t.PopperProps,
                  x = t.theme,
                  w = t.title,
                  E = t.TransitionComponent,
                  _ = t.TransitionProps,
                  S = (0, o.default)(t, [
                    "children",
                    "classes",
                    "disableFocusListener",
                    "disableHoverListener",
                    "disableTouchListener",
                    "enterDelay",
                    "enterTouchDelay",
                    "id",
                    "interactive",
                    "leaveDelay",
                    "leaveTouchDelay",
                    "onClose",
                    "onOpen",
                    "open",
                    "placement",
                    "PopperProps",
                    "theme",
                    "title",
                    "TransitionComponent",
                    "TransitionProps"
                  ]),
                  O = this.isControlled ? g : this.state.open;
                "" === w && (O = !1);
                var k = !O && !s,
                  C = (0, n.default)(
                    { "aria-describedby": O ? u || this.defaultId : null, title: k && "string" == typeof w ? w : null },
                    S,
                    r.props,
                    { className: (0, f.default)(S.className, r.props.className) }
                  );
                l || ((C.onTouchStart = this.handleTouchStart), (C.onTouchEnd = this.handleTouchEnd)),
                  s || ((C.onMouseOver = this.handleEnter), (C.onMouseLeave = this.handleLeave)),
                  a || ((C.onFocus = this.handleFocus), (C.onBlur = this.handleLeave));
                var T = c ? { onMouseOver: C.onMouseOver, onMouseLeave: C.onMouseLeave, onFocus: C.onFocus, onBlur: C.onBlur } : {};
                return p.default.createElement(
                  p.default.Fragment,
                  null,
                  p.default.createElement(h.default, { rootRef: this.onRootRef }, p.default.cloneElement(r, C)),
                  p.default.createElement(
                    y.default,
                    (0, n.default)(
                      {
                        className: (0, f.default)(i.popper, (0, d.default)({}, i.popperInteractive, c)),
                        placement: v,
                        anchorEl: this.childrenRef,
                        open: O,
                        id: C["aria-describedby"],
                        transition: !0
                      },
                      T,
                      b
                    ),
                    function (t) {
                      var r = t.placement,
                        o = t.TransitionProps;
                      return p.default.createElement(
                        E,
                        (0, n.default)({ timeout: x.transitions.duration.shorter }, o, _),
                        p.default.createElement(
                          "div",
                          {
                            className: (0, f.default)(
                              i.tooltip,
                              (0, d.default)({}, i.touch, e.ignoreNonTouchEvents),
                              i["tooltipPlacement".concat((0, m.capitalize)(r.split("-")[0]))]
                            )
                          },
                          w
                        )
                      );
                    }
                  )
                );
              }
            }
          ]),
          t
        );
      })(p.default.Component);
      x.defaultProps = {
        disableFocusListener: !1,
        disableHoverListener: !1,
        disableTouchListener: !1,
        enterDelay: 0,
        enterTouchDelay: 1e3,
        interactive: !1,
        leaveDelay: 0,
        leaveTouchDelay: 1500,
        placement: "bottom",
        TransitionComponent: v.default
      };
      var w = (0, g.default)(b, { name: "MuiTooltip", withTheme: !0 })(x);
      e.exports.default = w;
    }),
    a.register("fZrQz", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        Object.defineProperty(e.exports, "default", {
          enumerable: !0,
          get: function () {
            return n.default;
          }
        });
      var n = r(a("8ec5a"));
    }),
    a.register("8ec5a", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var n = r(a("6vi5T")),
        o = r(a("hyPzA")),
        i = r(a("kqQfm")),
        s = r(a("3dqKW")),
        l = r(a("4uUdr")),
        u = r(a("7b0kr")),
        c = r(a("iiDPj")),
        d = (r(a("3pr9z")), a("iTYq1")),
        p = (function (e) {
          function t() {
            return (0, n.default)(this, t), (0, i.default)(this, (0, s.default)(t).apply(this, arguments));
          }
          return (
            (0, l.default)(t, e),
            (0, o.default)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.ref = c.default.findDOMNode(this)), (0, d.setRef)(this.props.rootRef, this.ref);
                }
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = c.default.findDOMNode(this);
                  (e.rootRef === this.props.rootRef && this.ref === t) ||
                    (e.rootRef !== this.props.rootRef && (0, d.setRef)(e.rootRef, null),
                    (this.ref = t),
                    (0, d.setRef)(this.props.rootRef, this.ref));
                }
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this.ref = null), (0, d.setRef)(this.props.rootRef, null);
                }
              },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                }
              }
            ]),
            t
          );
        })(u.default.Component),
        f = p;
      e.exports.default = f;
    }),
    a.register("iTYq1", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.cloneElementWithClassName = i),
        (e.exports.cloneChildrenWithClassName = function (e, t) {
          return n.default.Children.map(e, function (e) {
            return n.default.isValidElement(e) && i(e, t);
          });
        }),
        (e.exports.isMuiElement = function (e, t) {
          return n.default.isValidElement(e) && -1 !== t.indexOf(e.type.muiName);
        }),
        (e.exports.setRef = function (e, t) {
          "function" == typeof e ? e(t) : e && (e.current = t);
        });
      var n = r(a("7b0kr")),
        o = r(a("gwJFa"));
      function i(e, t) {
        return n.default.cloneElement(e, { className: (0, o.default)(e.props.className, t) });
      }
    }),
    a.register("cyZ5J", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.capitalize = function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }),
        (e.exports.contains = o),
        (e.exports.findIndex = i),
        (e.exports.find = function (e, t) {
          var r = i(e, t);
          return r > -1 ? e[r] : void 0;
        }),
        (e.exports.createChainedFunction = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return t.reduce(
            function (e, t) {
              return null == t
                ? e
                : function () {
                    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    e.apply(this, n), t.apply(this, n);
                  };
            },
            function () {}
          );
        });
      var n = r(a("c9Tee"));
      r(a("fqT2K"));
      function o(e, t) {
        return Object.keys(t).every(function (r) {
          return e.hasOwnProperty(r) && e[r] === t[r];
        });
      }
      function i(e, t) {
        for (var r = (0, n.default)(t), i = 0; i < e.length; i += 1) {
          if ("function" === r && !0 == !!t(e[i], i, e)) return i;
          if ("object" === r && o(e[i], t)) return i;
          if (-1 !== ["string", "number", "boolean"].indexOf(r)) return e.indexOf(t);
        }
        return -1;
      }
    }),
    a.register("5d24F", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        Object.defineProperty(e.exports, "default", {
          enumerable: !0,
          get: function () {
            return n.default;
          }
        });
      var n = r(a("cEIrC"));
    }),
    a.register("cEIrC", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var n = r(a("4SXfL")),
        o = r(a("c4c0k")),
        i = r(a("6vi5T")),
        s = r(a("hyPzA")),
        l = r(a("kqQfm")),
        u = r(a("3dqKW")),
        c = r(a("4uUdr")),
        d = r(a("7b0kr")),
        p = (r(a("3pr9z")), r(a("dLN3a"))),
        f = r(a("gA3jP")),
        h = a("7mfWr");
      function g(e) {
        return "scale(".concat(e, ", ").concat(Math.pow(e, 2), ")");
      }
      var m = { entering: { opacity: 1, transform: g(1) }, entered: { opacity: 1, transform: "".concat(g(1), " translateZ(0)") } },
        v = (function (e) {
          function t() {
            var e, r;
            (0, i.default)(this, t);
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            return (
              ((r = (0, l.default)(this, (e = (0, u.default)(t)).call.apply(e, [this].concat(o)))).handleEnter = function (e) {
                var t = r.props,
                  n = t.theme,
                  o = t.timeout;
                (0, h.reflow)(e);
                var i = (0, h.getTransitionProps)(r.props, { mode: "enter" }),
                  a = i.duration,
                  s = i.delay,
                  l = 0;
                "auto" === o ? ((l = n.transitions.getAutoHeightDuration(e.clientHeight)), (r.autoTimeout = l)) : (l = a),
                  (e.style.transition = [
                    n.transitions.create("opacity", { duration: l, delay: s }),
                    n.transitions.create("transform", { duration: 0.666 * l, delay: s })
                  ].join(",")),
                  r.props.onEnter && r.props.onEnter(e);
              }),
              (r.handleExit = function (e) {
                var t = r.props,
                  n = t.theme,
                  o = t.timeout,
                  i = 0,
                  a = (0, h.getTransitionProps)(r.props, { mode: "exit" }),
                  s = a.duration,
                  l = a.delay;
                "auto" === o ? ((i = n.transitions.getAutoHeightDuration(e.clientHeight)), (r.autoTimeout = i)) : (i = s),
                  (e.style.transition = [
                    n.transitions.create("opacity", { duration: i, delay: l }),
                    n.transitions.create("transform", { duration: 0.666 * i, delay: l || 0.333 * i })
                  ].join(",")),
                  (e.style.opacity = "0"),
                  (e.style.transform = g(0.75)),
                  r.props.onExit && r.props.onExit(e);
              }),
              (r.addEndListener = function (e, t) {
                "auto" === r.props.timeout && (r.timer = setTimeout(t, r.autoTimeout || 0));
              }),
              r
            );
          }
          return (
            (0, c.default)(t, e),
            (0, s.default)(t, [
              {
                key: "componentWillUnmount",
                value: function () {
                  clearTimeout(this.timer);
                }
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = (e.onEnter, e.onExit, e.style),
                    i = (e.theme, e.timeout),
                    a = (0, o.default)(e, ["children", "onEnter", "onExit", "style", "theme", "timeout"]),
                    s = (0, n.default)({}, r, d.default.isValidElement(t) ? t.props.style : {});
                  return d.default.createElement(
                    p.default,
                    (0, n.default)(
                      {
                        appear: !0,
                        onEnter: this.handleEnter,
                        onExit: this.handleExit,
                        addEndListener: this.addEndListener,
                        timeout: "auto" === i ? null : i
                      },
                      a
                    ),
                    function (e, r) {
                      return d.default.cloneElement(
                        t,
                        (0, n.default)({ style: (0, n.default)({ opacity: 0, transform: g(0.75) }, m[e], s) }, r)
                      );
                    }
                  );
                }
              }
            ]),
            t
          );
        })(d.default.Component);
      (v.defaultProps = { timeout: "auto" }), (v.muiSupportAuto = !0);
      var y = (0, f.default)()(v);
      e.exports.default = y;
    }),
    a.register("dLN3a", function (t, n) {
      var o, i, s, l, u, c, d;
      r(t.exports),
        e(
          t.exports,
          "__esModule",
          () => o,
          (e) => (o = e)
        ),
        e(
          t.exports,
          "default",
          () => i,
          (e) => (i = e)
        ),
        e(
          t.exports,
          "EXITING",
          () => s,
          (e) => (s = e)
        ),
        e(
          t.exports,
          "ENTERED",
          () => l,
          (e) => (l = e)
        ),
        e(
          t.exports,
          "ENTERING",
          () => u,
          (e) => (u = e)
        ),
        e(
          t.exports,
          "EXITED",
          () => c,
          (e) => (c = e)
        ),
        e(
          t.exports,
          "UNMOUNTED",
          () => d,
          (e) => (d = e)
        ),
        (o = !0),
        (i = s = l = u = c = d = void 0);
      var p = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(a("3pr9z")),
        f = m(a("7b0kr")),
        h = m(a("iiDPj")),
        g = a("fK2Xs");
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var v = "unmounted";
      d = v;
      var y = "exited";
      c = y;
      var b = "entering";
      u = b;
      var x = "entered";
      l = x;
      var w = "exiting";
      s = w;
      var E = (function (e) {
        var t, r;
        function n(t, r) {
          var n;
          n = e.call(this, t, r) || this;
          var o,
            i = r.transitionGroup,
            a = i && !i.isMounting ? t.enter : t.appear;
          return (
            (n.appearStatus = null),
            t.in ? (a ? ((o = y), (n.appearStatus = b)) : (o = x)) : (o = t.unmountOnExit || t.mountOnEnter ? v : y),
            (n.state = { status: o }),
            (n.nextCallback = null),
            n
          );
        }
        (r = e), ((t = n).prototype = Object.create(r.prototype)), (t.prototype.constructor = t), (t.__proto__ = r);
        var o = n.prototype;
        return (
          (o.getChildContext = function () {
            return { transitionGroup: null };
          }),
          (n.getDerivedStateFromProps = function (e, t) {
            return e.in && t.status === v ? { status: y } : null;
          }),
          (o.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
          }),
          (o.componentDidUpdate = function (e) {
            var t = null;
            if (e !== this.props) {
              var r = this.state.status;
              this.props.in ? r !== b && r !== x && (t = b) : (r !== b && r !== x) || (t = w);
            }
            this.updateStatus(!1, t);
          }),
          (o.componentWillUnmount = function () {
            this.cancelNextCallback();
          }),
          (o.getTimeouts = function () {
            var e,
              t,
              r,
              n = this.props.timeout;
            return (
              (e = t = r = n),
              null != n && "number" != typeof n && ((e = n.exit), (t = n.enter), (r = void 0 !== n.appear ? n.appear : t)),
              { exit: e, enter: t, appear: r }
            );
          }),
          (o.updateStatus = function (e, t) {
            if ((void 0 === e && (e = !1), null !== t)) {
              this.cancelNextCallback();
              var r = h.default.findDOMNode(this);
              t === b ? this.performEnter(r, e) : this.performExit(r);
            } else this.props.unmountOnExit && this.state.status === y && this.setState({ status: v });
          }),
          (o.performEnter = function (e, t) {
            var r = this,
              n = this.props.enter,
              o = this.context.transitionGroup ? this.context.transitionGroup.isMounting : t,
              i = this.getTimeouts(),
              a = o ? i.appear : i.enter;
            t || n
              ? (this.props.onEnter(e, o),
                this.safeSetState({ status: b }, function () {
                  r.props.onEntering(e, o),
                    r.onTransitionEnd(e, a, function () {
                      r.safeSetState({ status: x }, function () {
                        r.props.onEntered(e, o);
                      });
                    });
                }))
              : this.safeSetState({ status: x }, function () {
                  r.props.onEntered(e);
                });
          }),
          (o.performExit = function (e) {
            var t = this,
              r = this.props.exit,
              n = this.getTimeouts();
            r
              ? (this.props.onExit(e),
                this.safeSetState({ status: w }, function () {
                  t.props.onExiting(e),
                    t.onTransitionEnd(e, n.exit, function () {
                      t.safeSetState({ status: y }, function () {
                        t.props.onExited(e);
                      });
                    });
                }))
              : this.safeSetState({ status: y }, function () {
                  t.props.onExited(e);
                });
          }),
          (o.cancelNextCallback = function () {
            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (o.safeSetState = function (e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
          }),
          (o.setNextCallback = function (e) {
            var t = this,
              r = !0;
            return (
              (this.nextCallback = function (n) {
                r && ((r = !1), (t.nextCallback = null), e(n));
              }),
              (this.nextCallback.cancel = function () {
                r = !1;
              }),
              this.nextCallback
            );
          }),
          (o.onTransitionEnd = function (e, t, r) {
            this.setNextCallback(r);
            var n = null == t && !this.props.addEndListener;
            e && !n
              ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback),
                null != t && setTimeout(this.nextCallback, t))
              : setTimeout(this.nextCallback, 0);
          }),
          (o.render = function () {
            var e = this.state.status;
            if (e === v) return null;
            var t = this.props,
              r = t.children,
              n = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
              })(t, ["children"]);
            if (
              (delete n.in,
              delete n.mountOnEnter,
              delete n.unmountOnExit,
              delete n.appear,
              delete n.enter,
              delete n.exit,
              delete n.timeout,
              delete n.addEndListener,
              delete n.onEnter,
              delete n.onEntering,
              delete n.onEntered,
              delete n.onExit,
              delete n.onExiting,
              delete n.onExited,
              "function" == typeof r)
            )
              return r(e, n);
            var o = f.default.Children.only(r);
            return f.default.cloneElement(o, n);
          }),
          n
        );
      })(f.default.Component);
      function _() {}
      (E.contextTypes = { transitionGroup: p.object }),
        (E.childContextTypes = { transitionGroup: function () {} }),
        (E.propTypes = {}),
        (E.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: _,
          onEntering: _,
          onEntered: _,
          onExit: _,
          onExiting: _,
          onExited: _
        }),
        (E.UNMOUNTED = 0),
        (E.EXITED = 1),
        (E.ENTERING = 2),
        (E.ENTERED = 3),
        (E.EXITING = 4);
      var S = (0, g.polyfill)(E);
      i = S;
    }),
    a.register("fK2Xs", function (t, r) {
      function n() {
        var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
        null != e && this.setState(e);
      }
      function o(e) {
        this.setState(
          function (t) {
            var r = this.constructor.getDerivedStateFromProps(e, t);
            return null != r ? r : null;
          }.bind(this)
        );
      }
      function i(e, t) {
        try {
          var r = this.props,
            n = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, n));
        } finally {
          (this.props = r), (this.state = n);
        }
      }
      function a(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
        if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e;
        var r = null,
          a = null,
          s = null;
        if (
          ("function" == typeof t.componentWillMount
            ? (r = "componentWillMount")
            : "function" == typeof t.UNSAFE_componentWillMount && (r = "UNSAFE_componentWillMount"),
          "function" == typeof t.componentWillReceiveProps
            ? (a = "componentWillReceiveProps")
            : "function" == typeof t.UNSAFE_componentWillReceiveProps && (a = "UNSAFE_componentWillReceiveProps"),
          "function" == typeof t.componentWillUpdate
            ? (s = "componentWillUpdate")
            : "function" == typeof t.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"),
          null !== r || null !== a || null !== s)
        ) {
          var l = e.displayName || e.name,
            u = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              l +
              " uses " +
              u +
              " but also contains the following legacy lifecycles:" +
              (null !== r ? "\n  " + r : "") +
              (null !== a ? "\n  " + a : "") +
              (null !== s ? "\n  " + s : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
          );
        }
        if (
          ("function" == typeof e.getDerivedStateFromProps && ((t.componentWillMount = n), (t.componentWillReceiveProps = o)),
          "function" == typeof t.getSnapshotBeforeUpdate)
        ) {
          if ("function" != typeof t.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
            );
          t.componentWillUpdate = i;
          var c = t.componentDidUpdate;
          t.componentDidUpdate = function (e, t, r) {
            var n = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : r;
            c.call(this, e, t, n);
          };
        }
        return e;
      }
      e(t.exports, "polyfill", () => a),
        (n.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0),
        (i.__suppressDeprecationWarning = !0);
    }),
    a.register("7mfWr", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        (e.exports.getTransitionProps = function (e, t) {
          var r = e.timeout,
            n = e.style,
            o = void 0 === n ? {} : n;
          return { duration: o.transitionDuration || "number" == typeof r ? r : r[t.mode], delay: o.transitionDelay };
        }),
        (e.exports.reflow = void 0);
      e.exports.reflow = function (e) {
        return e.scrollTop;
      };
    }),
    a.register("bJWTS", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        Object.defineProperty(e.exports, "default", {
          enumerable: !0,
          get: function () {
            return n.default;
          }
        });
      var n = r(a("f9WFz"));
    }),
    a.register("f9WFz", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var n = r(a("c4c0k")),
        o = r(a("4SXfL")),
        i = r(a("6vi5T")),
        s = r(a("hyPzA")),
        l = r(a("kqQfm")),
        u = r(a("3dqKW")),
        c = r(a("4uUdr")),
        d = r(a("1zDLT")),
        p = r(a("7b0kr")),
        f = r(a("iiDPj")),
        h = (r(a("3pr9z")), r(a("bphlS"))),
        g = r(a("fkrH5"));
      function m(e) {
        if ("rtl" !== (("undefined" != typeof window && document.body.getAttribute("dir")) || "ltr")) return e;
        switch (e) {
          case "bottom-end":
            return "bottom-start";
          case "bottom-start":
            return "bottom-end";
          case "top-end":
            return "top-start";
          case "top-start":
            return "top-end";
          default:
            return e;
        }
      }
      var v = (function (e) {
        function t(e) {
          var r;
          return (
            (0, i.default)(this, t),
            ((r = (0, l.default)(this, (0, u.default)(t).call(this))).handleOpen = function () {
              var e = r.props,
                t = e.anchorEl,
                n = e.modifiers,
                i = e.open,
                a = e.placement,
                s = e.popperOptions,
                l = void 0 === s ? {} : s,
                u = e.disablePortal,
                c = f.default.findDOMNode((0, d.default)((0, d.default)(r)));
              c &&
                t &&
                i &&
                (r.popper && (r.popper.destroy(), (r.popper = null)),
                (r.popper = new h.default(
                  (function (e) {
                    return "function" == typeof e ? e() : e;
                  })(t),
                  c,
                  (0, o.default)({ placement: m(a) }, l, {
                    modifiers: (0, o.default)({}, u ? {} : { preventOverflow: { boundariesElement: "window" } }, n, l.modifiers),
                    onCreate: r.handlePopperUpdate,
                    onUpdate: r.handlePopperUpdate
                  })
                )));
            }),
            (r.handlePopperUpdate = function (e) {
              e.placement !== r.state.placement && r.setState({ placement: e.placement });
            }),
            (r.handleExited = function () {
              r.setState({ exited: !0 }), r.handleClose();
            }),
            (r.handleClose = function () {
              r.popper && (r.popper.destroy(), (r.popper = null));
            }),
            (r.state = { exited: !e.open }),
            r
          );
        }
        return (
          (0, c.default)(t, e),
          (0, s.default)(
            t,
            [
              {
                key: "componentDidUpdate",
                value: function (e) {
                  e.open === this.props.open || this.props.open || this.props.transition || this.handleClose(),
                    (e.open === this.props.open &&
                      e.anchorEl === this.props.anchorEl &&
                      e.popperOptions === this.props.popperOptions &&
                      e.modifiers === this.props.modifiers &&
                      e.disablePortal === this.props.disablePortal &&
                      e.placement === this.props.placement) ||
                      this.handleOpen();
                }
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.handleClose();
                }
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = (e.anchorEl, e.children),
                    r = e.container,
                    i = e.disablePortal,
                    a = e.keepMounted,
                    s = (e.modifiers, e.open),
                    l = e.placement,
                    u = (e.popperOptions, e.transition),
                    c = (0, n.default)(e, [
                      "anchorEl",
                      "children",
                      "container",
                      "disablePortal",
                      "keepMounted",
                      "modifiers",
                      "open",
                      "placement",
                      "popperOptions",
                      "transition"
                    ]),
                    d = this.state,
                    f = d.exited,
                    h = d.placement;
                  if (!a && !s && (!u || f)) return null;
                  var v = { placement: h || m(l) };
                  return (
                    u && (v.TransitionProps = { in: s, onExited: this.handleExited }),
                    p.default.createElement(
                      g.default,
                      { onRendered: this.handleOpen, disablePortal: i, container: r },
                      p.default.createElement(
                        "div",
                        (0, o.default)({ role: "tooltip", style: { position: "absolute" } }, c),
                        "function" == typeof t ? t(v) : t
                      )
                    )
                  );
                }
              }
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e) {
                  return e.open ? { exited: !1 } : e.transition ? null : { exited: !0 };
                }
              }
            ]
          ),
          t
        );
      })(p.default.Component);
      v.defaultProps = { disablePortal: !1, placement: "bottom", transition: !1 };
      var y = v;
      e.exports.default = y;
    }),
    a.register("bphlS", function (n, o) {
      r(n.exports), e(n.exports, "default", () => ie);
      /**!
       * @fileOverview Kickass library to create and place poppers near their reference elements.
       * @version 1.16.1
       * @license
       * Copyright (c) 2016 Federico Zivolo and contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      var i = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        a = (function () {
          for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
            if (i && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
          return 0;
        })();
      var s =
        i && window.Promise
          ? function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  window.Promise.resolve().then(function () {
                    (t = !1), e();
                  }));
              };
            }
          : function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  setTimeout(function () {
                    (t = !1), e();
                  }, a));
              };
            };
      function l(e) {
        return e && "[object Function]" === {}.toString.call(e);
      }
      function u(e, t) {
        if (1 !== e.nodeType) return [];
        var r = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? r[t] : r;
      }
      function c(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
      }
      function d(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;
          case "#document":
            return e.body;
        }
        var t = u(e),
          r = t.overflow,
          n = t.overflowX,
          o = t.overflowY;
        return /(auto|scroll|overlay)/.test(r + o + n) ? e : d(c(e));
      }
      function p(e) {
        return e && e.referenceNode ? e.referenceNode : e;
      }
      var f = i && !(!window.MSInputMethodContext || !document.documentMode),
        h = i && /MSIE 10/.test(navigator.userAgent);
      function g(e) {
        return 11 === e ? f : 10 === e ? h : f || h;
      }
      function m(e) {
        if (!e) return document.documentElement;
        for (var t = g(10) ? document.body : null, r = e.offsetParent || null; r === t && e.nextElementSibling; )
          r = (e = e.nextElementSibling).offsetParent;
        var n = r && r.nodeName;
        return n && "BODY" !== n && "HTML" !== n
          ? -1 !== ["TH", "TD", "TABLE"].indexOf(r.nodeName) && "static" === u(r, "position")
            ? m(r)
            : r
          : e
          ? e.ownerDocument.documentElement
          : document.documentElement;
      }
      function v(e) {
        return null !== e.parentNode ? v(e.parentNode) : e;
      }
      function y(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          n = r ? e : t,
          o = r ? t : e,
          i = document.createRange();
        i.setStart(n, 0), i.setEnd(o, 0);
        var a,
          s,
          l = i.commonAncestorContainer;
        if ((e !== l && t !== l) || n.contains(o))
          return "BODY" === (s = (a = l).nodeName) || ("HTML" !== s && m(a.firstElementChild) !== a) ? m(l) : l;
        var u = v(e);
        return u.host ? y(u.host, t) : y(e, v(t).host);
      }
      function b(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
          r = e.nodeName;
        if ("BODY" === r || "HTML" === r) {
          var n = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || n)[t];
        }
        return e[t];
      }
      function x(e, t) {
        var r = "x" === t ? "Left" : "Top",
          n = "Left" === r ? "Right" : "Bottom";
        return parseFloat(e["border" + r + "Width"]) + parseFloat(e["border" + n + "Width"]);
      }
      function w(e, t, r, n) {
        return Math.max(
          t["offset" + e],
          t["scroll" + e],
          r["client" + e],
          r["offset" + e],
          r["scroll" + e],
          g(10)
            ? parseInt(r["offset" + e]) +
                parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) +
                parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")])
            : 0
        );
      }
      function E(e) {
        var t = e.body,
          r = e.documentElement,
          n = g(10) && getComputedStyle(r);
        return { height: w("Height", t, r, n), width: w("Width", t, r, n) };
      }
      var _ = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        S = function (e, t, r) {
          return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        },
        O =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
      function k(e) {
        return O({}, e, { right: e.left + e.width, bottom: e.top + e.height });
      }
      function C(e) {
        var t = {};
        try {
          if (g(10)) {
            t = e.getBoundingClientRect();
            var r = b(e, "top"),
              n = b(e, "left");
            (t.top += r), (t.left += n), (t.bottom += r), (t.right += n);
          } else t = e.getBoundingClientRect();
        } catch (e) {}
        var o = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
          i = "HTML" === e.nodeName ? E(e.ownerDocument) : {},
          a = i.width || e.clientWidth || o.width,
          s = i.height || e.clientHeight || o.height,
          l = e.offsetWidth - a,
          c = e.offsetHeight - s;
        if (l || c) {
          var d = u(e);
          (l -= x(d, "x")), (c -= x(d, "y")), (o.width -= l), (o.height -= c);
        }
        return k(o);
      }
      function T(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = g(10),
          o = "HTML" === t.nodeName,
          i = C(e),
          a = C(t),
          s = d(e),
          l = u(t),
          c = parseFloat(l.borderTopWidth),
          p = parseFloat(l.borderLeftWidth);
        r && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
        var f = k({ top: i.top - a.top - c, left: i.left - a.left - p, width: i.width, height: i.height });
        if (((f.marginTop = 0), (f.marginLeft = 0), !n && o)) {
          var h = parseFloat(l.marginTop),
            m = parseFloat(l.marginLeft);
          (f.top -= c - h), (f.bottom -= c - h), (f.left -= p - m), (f.right -= p - m), (f.marginTop = h), (f.marginLeft = m);
        }
        return (
          (n && !r ? t.contains(s) : t === s && "BODY" !== s.nodeName) &&
            (f = (function (e, t) {
              var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = b(t, "top"),
                o = b(t, "left"),
                i = r ? -1 : 1;
              return (e.top += n * i), (e.bottom += n * i), (e.left += o * i), (e.right += o * i), e;
            })(f, t)),
          f
        );
      }
      function R(e) {
        var t = e.nodeName;
        if ("BODY" === t || "HTML" === t) return !1;
        if ("fixed" === u(e, "position")) return !0;
        var r = c(e);
        return !!r && R(r);
      }
      function P(e) {
        if (!e || !e.parentElement || g()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === u(t, "transform"); ) t = t.parentElement;
        return t || document.documentElement;
      }
      function j(e, t, r, n) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          i = { top: 0, left: 0 },
          a = o ? P(e) : y(e, p(t));
        if ("viewport" === n)
          i = (function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = e.ownerDocument.documentElement,
              n = T(e, r),
              o = Math.max(r.clientWidth, window.innerWidth || 0),
              i = Math.max(r.clientHeight, window.innerHeight || 0),
              a = t ? 0 : b(r),
              s = t ? 0 : b(r, "left");
            return k({ top: a - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: o, height: i });
          })(a, o);
        else {
          var s = void 0;
          "scrollParent" === n
            ? "BODY" === (s = d(c(t))).nodeName && (s = e.ownerDocument.documentElement)
            : (s = "window" === n ? e.ownerDocument.documentElement : n);
          var l = T(s, a, o);
          if ("HTML" !== s.nodeName || R(a)) i = l;
          else {
            var u = E(e.ownerDocument),
              f = u.height,
              h = u.width;
            (i.top += l.top - l.marginTop), (i.bottom = f + l.top), (i.left += l.left - l.marginLeft), (i.right = h + l.left);
          }
        }
        var g = "number" == typeof (r = r || 0);
        return (
          (i.left += g ? r : r.left || 0),
          (i.top += g ? r : r.top || 0),
          (i.right -= g ? r : r.right || 0),
          (i.bottom -= g ? r : r.bottom || 0),
          i
        );
      }
      function M(e, t, r, n, o) {
        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = j(r, n, i, o),
          s = {
            top: { width: a.width, height: t.top - a.top },
            right: { width: a.right - t.right, height: a.height },
            bottom: { width: a.width, height: a.bottom - t.bottom },
            left: { width: t.left - a.left, height: a.height }
          },
          l = Object.keys(s)
            .map(function (e) {
              return O({ key: e }, s[e], { area: ((t = s[e]), t.width * t.height) });
              var t;
            })
            .sort(function (e, t) {
              return t.area - e.area;
            }),
          u = l.filter(function (e) {
            var t = e.width,
              n = e.height;
            return t >= r.clientWidth && n >= r.clientHeight;
          }),
          c = u.length > 0 ? u[0].key : l[0].key,
          d = e.split("-")[1];
        return c + (d ? "-" + d : "");
      }
      function D(e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return T(r, n ? P(t) : y(t, p(r)), n);
      }
      function L(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
          r = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          n = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return { width: e.offsetWidth + n, height: e.offsetHeight + r };
      }
      function A(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function (e) {
          return t[e];
        });
      }
      function N(e, t, r) {
        r = r.split("-")[0];
        var n = L(e),
          o = { width: n.width, height: n.height },
          i = -1 !== ["right", "left"].indexOf(r),
          a = i ? "top" : "left",
          s = i ? "left" : "top",
          l = i ? "height" : "width",
          u = i ? "width" : "height";
        return (o[a] = t[a] + t[l] / 2 - n[l] / 2), (o[s] = r === s ? t[s] - n[u] : t[A(s)]), o;
      }
      function I(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
      }
      function H(e, t, r) {
        return (
          (void 0 === r
            ? e
            : e.slice(
                0,
                (function (e, t, r) {
                  if (Array.prototype.findIndex)
                    return e.findIndex(function (e) {
                      return e[t] === r;
                    });
                  var n = I(e, function (e) {
                    return e[t] === r;
                  });
                  return e.indexOf(n);
                })(e, "name", r)
              )
          ).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var r = e.function || e.fn;
            e.enabled && l(r) && ((t.offsets.popper = k(t.offsets.popper)), (t.offsets.reference = k(t.offsets.reference)), (t = r(t, e)));
          }),
          t
        );
      }
      function F() {
        if (!this.state.isDestroyed) {
          var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
          (e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed)),
            (e.placement = M(
              this.options.placement,
              e.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding
            )),
            (e.originalPlacement = e.placement),
            (e.positionFixed = this.options.positionFixed),
            (e.offsets.popper = N(this.popper, e.offsets.reference, e.placement)),
            (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
            (e = H(this.modifiers, e)),
            this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
      }
      function U(e, t) {
        return e.some(function (e) {
          var r = e.name;
          return e.enabled && r === t;
        });
      }
      function B(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], r = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
          var o = t[n],
            i = o ? "" + o + r : e;
          if (void 0 !== document.body.style[i]) return i;
        }
        return null;
      }
      function z() {
        return (
          (this.state.isDestroyed = !0),
          U(this.modifiers, "applyStyle") &&
            (this.popper.removeAttribute("x-placement"),
            (this.popper.style.position = ""),
            (this.popper.style.top = ""),
            (this.popper.style.left = ""),
            (this.popper.style.right = ""),
            (this.popper.style.bottom = ""),
            (this.popper.style.willChange = ""),
            (this.popper.style[B("transform")] = "")),
          this.disableEventListeners(),
          this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
          this
        );
      }
      function W(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
      }
      function q(e, t, r, n) {
        var o = "BODY" === e.nodeName,
          i = o ? e.ownerDocument.defaultView : e;
        i.addEventListener(t, r, { passive: !0 }), o || q(d(i.parentNode), t, r, n), n.push(i);
      }
      function V(e, t, r, n) {
        (r.updateBound = n), W(e).addEventListener("resize", r.updateBound, { passive: !0 });
        var o = d(e);
        return q(o, "scroll", r.updateBound, r.scrollParents), (r.scrollElement = o), (r.eventsEnabled = !0), r;
      }
      function Y() {
        this.state.eventsEnabled || (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate));
      }
      function $() {
        var e, t;
        this.state.eventsEnabled &&
          (cancelAnimationFrame(this.scheduleUpdate),
          (this.state =
            ((e = this.reference),
            (t = this.state),
            W(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
              e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t)));
      }
      function G(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
      }
      function K(e, t) {
        Object.keys(t).forEach(function (r) {
          var n = "";
          -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(r) && G(t[r]) && (n = "px"), (e.style[r] = t[r] + n);
        });
      }
      var X = i && /Firefox/i.test(navigator.userAgent);
      function Z(e, t, r) {
        var n = I(e, function (e) {
            return e.name === t;
          }),
          o =
            !!n &&
            e.some(function (e) {
              return e.name === r && e.enabled && e.order < n.order;
            });
        if (!o) {
          var i = "`" + t + "`",
            a = "`" + r + "`";
          console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!");
        }
        return o;
      }
      var J = [
          "auto-start",
          "auto",
          "auto-end",
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start"
        ],
        Q = J.slice(3);
      function ee(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = Q.indexOf(e),
          n = Q.slice(r + 1).concat(Q.slice(0, r));
        return t ? n.reverse() : n;
      }
      var te = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };
      function re(e, t, r, n) {
        var o = [0, 0],
          i = -1 !== ["right", "left"].indexOf(n),
          a = e.split(/(\+|\-)/).map(function (e) {
            return e.trim();
          }),
          s = a.indexOf(
            I(a, function (e) {
              return -1 !== e.search(/,|\s/);
            })
          );
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
          u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
        return (
          (u = u.map(function (e, n) {
            var o = (1 === n ? !i : i) ? "height" : "width",
              a = !1;
            return e
              .reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                  ? ((e[e.length - 1] = t), (a = !0), e)
                  : a
                  ? ((e[e.length - 1] += t), (a = !1), e)
                  : e.concat(t);
              }, [])
              .map(function (e) {
                return (function (e, t, r, n) {
                  var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                    i = +o[1],
                    a = o[2];
                  if (!i) return e;
                  if (0 === a.indexOf("%")) {
                    return (k("%p" === a ? r : n)[t] / 100) * i;
                  }
                  if ("vh" === a || "vw" === a)
                    return (
                      (("vh" === a
                        ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                        : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) /
                        100) *
                      i
                    );
                  return i;
                })(e, o, t, r);
              });
          })),
          u.forEach(function (e, t) {
            e.forEach(function (r, n) {
              G(r) && (o[t] += r * ("-" === e[n - 1] ? -1 : 1));
            });
          }),
          o
        );
      }
      var ne = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn: function (e) {
                var t = e.placement,
                  r = t.split("-")[0],
                  n = t.split("-")[1];
                if (n) {
                  var o = e.offsets,
                    i = o.reference,
                    a = o.popper,
                    s = -1 !== ["bottom", "top"].indexOf(r),
                    l = s ? "left" : "top",
                    u = s ? "width" : "height",
                    c = { start: S({}, l, i[l]), end: S({}, l, i[l] + i[u] - a[u]) };
                  e.offsets.popper = O({}, a, c[n]);
                }
                return e;
              }
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function (e, t) {
                var r = t.offset,
                  n = e.placement,
                  o = e.offsets,
                  i = o.popper,
                  a = o.reference,
                  s = n.split("-")[0],
                  l = void 0;
                return (
                  (l = G(+r) ? [+r, 0] : re(r, i, a, s)),
                  "left" === s
                    ? ((i.top += l[0]), (i.left -= l[1]))
                    : "right" === s
                    ? ((i.top += l[0]), (i.left += l[1]))
                    : "top" === s
                    ? ((i.left += l[0]), (i.top -= l[1]))
                    : "bottom" === s && ((i.left += l[0]), (i.top += l[1])),
                  (e.popper = i),
                  e
                );
              },
              offset: 0
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function (e, t) {
                var r = t.boundariesElement || m(e.instance.popper);
                e.instance.reference === r && (r = m(r));
                var n = B("transform"),
                  o = e.instance.popper.style,
                  i = o.top,
                  a = o.left,
                  s = o[n];
                (o.top = ""), (o.left = ""), (o[n] = "");
                var l = j(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
                (o.top = i), (o.left = a), (o[n] = s), (t.boundaries = l);
                var u = t.priority,
                  c = e.offsets.popper,
                  d = {
                    primary: function (e) {
                      var r = c[e];
                      return c[e] < l[e] && !t.escapeWithReference && (r = Math.max(c[e], l[e])), S({}, e, r);
                    },
                    secondary: function (e) {
                      var r = "right" === e ? "left" : "top",
                        n = c[r];
                      return (
                        c[e] > l[e] && !t.escapeWithReference && (n = Math.min(c[r], l[e] - ("right" === e ? c.width : c.height))),
                        S({}, r, n)
                      );
                    }
                  };
                return (
                  u.forEach(function (e) {
                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                    c = O({}, c, d[t](e));
                  }),
                  (e.offsets.popper = c),
                  e
                );
              },
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function (e) {
                var t = e.offsets,
                  r = t.popper,
                  n = t.reference,
                  o = e.placement.split("-")[0],
                  i = Math.floor,
                  a = -1 !== ["top", "bottom"].indexOf(o),
                  s = a ? "right" : "bottom",
                  l = a ? "left" : "top",
                  u = a ? "width" : "height";
                return r[s] < i(n[l]) && (e.offsets.popper[l] = i(n[l]) - r[u]), r[l] > i(n[s]) && (e.offsets.popper[l] = i(n[s])), e;
              }
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function (e, t) {
                var r;
                if (!Z(e.instance.modifiers, "arrow", "keepTogether")) return e;
                var n = t.element;
                if ("string" == typeof n) {
                  if (!(n = e.instance.popper.querySelector(n))) return e;
                } else if (!e.instance.popper.contains(n))
                  return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                var o = e.placement.split("-")[0],
                  i = e.offsets,
                  a = i.popper,
                  s = i.reference,
                  l = -1 !== ["left", "right"].indexOf(o),
                  c = l ? "height" : "width",
                  d = l ? "Top" : "Left",
                  p = d.toLowerCase(),
                  f = l ? "left" : "top",
                  h = l ? "bottom" : "right",
                  g = L(n)[c];
                s[h] - g < a[p] && (e.offsets.popper[p] -= a[p] - (s[h] - g)),
                  s[p] + g > a[h] && (e.offsets.popper[p] += s[p] + g - a[h]),
                  (e.offsets.popper = k(e.offsets.popper));
                var m = s[p] + s[c] / 2 - g / 2,
                  v = u(e.instance.popper),
                  y = parseFloat(v["margin" + d]),
                  b = parseFloat(v["border" + d + "Width"]),
                  x = m - e.offsets.popper[p] - y - b;
                return (
                  (x = Math.max(Math.min(a[c] - g, x), 0)),
                  (e.arrowElement = n),
                  (e.offsets.arrow = (S((r = {}), p, Math.round(x)), S(r, f, ""), r)),
                  e
                );
              },
              element: "[x-arrow]"
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function (e, t) {
                if (U(e.instance.modifiers, "inner")) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                var r = j(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                  n = e.placement.split("-")[0],
                  o = A(n),
                  i = e.placement.split("-")[1] || "",
                  a = [];
                switch (t.behavior) {
                  case te.FLIP:
                    a = [n, o];
                    break;
                  case te.CLOCKWISE:
                    a = ee(n);
                    break;
                  case te.COUNTERCLOCKWISE:
                    a = ee(n, !0);
                    break;
                  default:
                    a = t.behavior;
                }
                return (
                  a.forEach(function (s, l) {
                    if (n !== s || a.length === l + 1) return e;
                    (n = e.placement.split("-")[0]), (o = A(n));
                    var u = e.offsets.popper,
                      c = e.offsets.reference,
                      d = Math.floor,
                      p =
                        ("left" === n && d(u.right) > d(c.left)) ||
                        ("right" === n && d(u.left) < d(c.right)) ||
                        ("top" === n && d(u.bottom) > d(c.top)) ||
                        ("bottom" === n && d(u.top) < d(c.bottom)),
                      f = d(u.left) < d(r.left),
                      h = d(u.right) > d(r.right),
                      g = d(u.top) < d(r.top),
                      m = d(u.bottom) > d(r.bottom),
                      v = ("left" === n && f) || ("right" === n && h) || ("top" === n && g) || ("bottom" === n && m),
                      y = -1 !== ["top", "bottom"].indexOf(n),
                      b =
                        !!t.flipVariations &&
                        ((y && "start" === i && f) || (y && "end" === i && h) || (!y && "start" === i && g) || (!y && "end" === i && m)),
                      x =
                        !!t.flipVariationsByContent &&
                        ((y && "start" === i && h) || (y && "end" === i && f) || (!y && "start" === i && m) || (!y && "end" === i && g)),
                      w = b || x;
                    (p || v || w) &&
                      ((e.flipped = !0),
                      (p || v) && (n = a[l + 1]),
                      w &&
                        (i = (function (e) {
                          return "end" === e ? "start" : "start" === e ? "end" : e;
                        })(i)),
                      (e.placement = n + (i ? "-" + i : "")),
                      (e.offsets.popper = O({}, e.offsets.popper, N(e.instance.popper, e.offsets.reference, e.placement))),
                      (e = H(e.instance.modifiers, e, "flip")));
                  }),
                  e
                );
              },
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
              flipVariations: !1,
              flipVariationsByContent: !1
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function (e) {
                var t = e.placement,
                  r = t.split("-")[0],
                  n = e.offsets,
                  o = n.popper,
                  i = n.reference,
                  a = -1 !== ["left", "right"].indexOf(r),
                  s = -1 === ["top", "left"].indexOf(r);
                return (
                  (o[a ? "left" : "top"] = i[r] - (s ? o[a ? "width" : "height"] : 0)), (e.placement = A(t)), (e.offsets.popper = k(o)), e
                );
              }
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function (e) {
                if (!Z(e.instance.modifiers, "hide", "preventOverflow")) return e;
                var t = e.offsets.reference,
                  r = I(e.instance.modifiers, function (e) {
                    return "preventOverflow" === e.name;
                  }).boundaries;
                if (t.bottom < r.top || t.left > r.right || t.top > r.bottom || t.right < r.left) {
                  if (!0 === e.hide) return e;
                  (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                } else {
                  if (!1 === e.hide) return e;
                  (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                }
                return e;
              }
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function (e, t) {
                var r = t.x,
                  n = t.y,
                  o = e.offsets.popper,
                  i = I(e.instance.modifiers, function (e) {
                    return "applyStyle" === e.name;
                  }).gpuAcceleration;
                void 0 !== i &&
                  console.warn(
                    "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                  );
                var a = void 0 !== i ? i : t.gpuAcceleration,
                  s = m(e.instance.popper),
                  l = C(s),
                  u = { position: o.position },
                  c = (function (e, t) {
                    var r = e.offsets,
                      n = r.popper,
                      o = r.reference,
                      i = Math.round,
                      a = Math.floor,
                      s = function (e) {
                        return e;
                      },
                      l = i(o.width),
                      u = i(n.width),
                      c = -1 !== ["left", "right"].indexOf(e.placement),
                      d = -1 !== e.placement.indexOf("-"),
                      p = t ? (c || d || l % 2 == u % 2 ? i : a) : s,
                      f = t ? i : s;
                    return {
                      left: p(l % 2 == 1 && u % 2 == 1 && !d && t ? n.left - 1 : n.left),
                      top: f(n.top),
                      bottom: f(n.bottom),
                      right: p(n.right)
                    };
                  })(e, window.devicePixelRatio < 2 || !X),
                  d = "bottom" === r ? "top" : "bottom",
                  p = "right" === n ? "left" : "right",
                  f = B("transform"),
                  h = void 0,
                  g = void 0;
                if (
                  ((g = "bottom" === d ? ("HTML" === s.nodeName ? -s.clientHeight + c.bottom : -l.height + c.bottom) : c.top),
                  (h = "right" === p ? ("HTML" === s.nodeName ? -s.clientWidth + c.right : -l.width + c.right) : c.left),
                  a && f)
                )
                  (u[f] = "translate3d(" + h + "px, " + g + "px, 0)"), (u[d] = 0), (u[p] = 0), (u.willChange = "transform");
                else {
                  var v = "bottom" === d ? -1 : 1,
                    y = "right" === p ? -1 : 1;
                  (u[d] = g * v), (u[p] = h * y), (u.willChange = d + ", " + p);
                }
                var b = { "x-placement": e.placement };
                return (
                  (e.attributes = O({}, b, e.attributes)),
                  (e.styles = O({}, u, e.styles)),
                  (e.arrowStyles = O({}, e.offsets.arrow, e.arrowStyles)),
                  e
                );
              },
              gpuAcceleration: !0,
              x: "bottom",
              y: "right"
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function (e) {
                var t, r;
                return (
                  K(e.instance.popper, e.styles),
                  (t = e.instance.popper),
                  (r = e.attributes),
                  Object.keys(r).forEach(function (e) {
                    !1 !== r[e] ? t.setAttribute(e, r[e]) : t.removeAttribute(e);
                  }),
                  e.arrowElement && Object.keys(e.arrowStyles).length && K(e.arrowElement, e.arrowStyles),
                  e
                );
              },
              onLoad: function (e, t, r, n, o) {
                var i = D(o, t, e, r.positionFixed),
                  a = M(r.placement, i, t, e, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
                return t.setAttribute("x-placement", a), K(t, { position: r.positionFixed ? "fixed" : "absolute" }), r;
              },
              gpuAcceleration: void 0
            }
          }
        },
        oe = (function () {
          function e(t, r) {
            var n = this,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.scheduleUpdate = function () {
                return requestAnimationFrame(n.update);
              }),
              (this.update = s(this.update.bind(this))),
              (this.options = O({}, e.Defaults, o)),
              (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
              (this.reference = t && t.jquery ? t[0] : t),
              (this.popper = r && r.jquery ? r[0] : r),
              (this.options.modifiers = {}),
              Object.keys(O({}, e.Defaults.modifiers, o.modifiers)).forEach(function (t) {
                n.options.modifiers[t] = O({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {});
              }),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function (e) {
                  return O({ name: e }, n.options.modifiers[e]);
                })
                .sort(function (e, t) {
                  return e.order - t.order;
                })),
              this.modifiers.forEach(function (e) {
                e.enabled && l(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
              }),
              this.update();
            var i = this.options.eventsEnabled;
            i && this.enableEventListeners(), (this.state.eventsEnabled = i);
          }
          return (
            _(e, [
              {
                key: "update",
                value: function () {
                  return F.call(this);
                }
              },
              {
                key: "destroy",
                value: function () {
                  return z.call(this);
                }
              },
              {
                key: "enableEventListeners",
                value: function () {
                  return Y.call(this);
                }
              },
              {
                key: "disableEventListeners",
                value: function () {
                  return $.call(this);
                }
              }
            ]),
            e
          );
        })();
      (oe.Utils = ("undefined" != typeof window ? window : t).PopperUtils), (oe.placements = J), (oe.Defaults = ne);
      var ie = oe;
    }),
    a.register("fkrH5", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }),
        Object.defineProperty(e.exports, "default", {
          enumerable: !0,
          get: function () {
            return n.default;
          }
        });
      var n = r(a("1zfcx"));
    }),
    a.register("1zfcx", function (e, t) {
      "use strict";
      var r = a("iIdtL");
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var n = r(a("6vi5T")),
        o = r(a("hyPzA")),
        i = r(a("kqQfm")),
        s = r(a("3dqKW")),
        l = r(a("4uUdr")),
        u = r(a("7b0kr")),
        c = r(a("iiDPj")),
        d = (r(a("3pr9z")), r(a("inhjG")));
      var p = (function (e) {
        function t() {
          var e, r;
          (0, n.default)(this, t);
          for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
          return (
            ((r = (0, i.default)(this, (e = (0, s.default)(t)).call.apply(e, [this].concat(a)))).getMountNode = function () {
              return r.mountNode;
            }),
            r
          );
        }
        return (
          (0, l.default)(t, e),
          (0, o.default)(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.setMountNode(this.props.container), this.props.disablePortal || this.forceUpdate(this.props.onRendered);
              }
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this;
                (e.container === this.props.container && e.disablePortal === this.props.disablePortal) ||
                  (this.setMountNode(this.props.container),
                  this.props.disablePortal ||
                    this.forceUpdate(function () {
                      t.props.onRendered && (clearTimeout(t.renderedTimer), (t.renderedTimer = setTimeout(t.props.onRendered)));
                    }));
              }
            },
            {
              key: "componentWillUnmount",
              value: function () {
                (this.mountNode = null), clearTimeout(this.renderedTimer);
              }
            },
            {
              key: "setMountNode",
              value: function (e) {
                var t;
                this.props.disablePortal
                  ? (this.mountNode = c.default.findDOMNode(this).parentElement)
                  : (this.mountNode = (function (e, t) {
                      return (e = "function" == typeof e ? e() : e), c.default.findDOMNode(e) || t;
                    })(e, ((t = this), (0, d.default)(c.default.findDOMNode(t))).body));
              }
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.children;
                return e.disablePortal ? t : this.mountNode ? c.default.createPortal(t, this.mountNode) : null;
              }
            }
          ]),
          t
        );
      })(u.default.Component);
      p.defaultProps = { disablePortal: !1 };
      var f = p;
      e.exports.default = f;
    }),
    a.register("inhjG", function (e, t) {
      "use strict";
      Object.defineProperty(e.exports, "__esModule", { value: !0 }), (e.exports.default = void 0);
      var r = function (e) {
        return (e && e.ownerDocument) || document;
      };
      e.exports.default = r;
    }),
    a.register("bauOe", function (e, t) {
      var r = a("gs5dt"),
        n = a("dHuyX"),
        o = t && !t.nodeType && t,
        i = o && e && !e.nodeType && e,
        s = i && i.exports === o ? r.Buffer : void 0,
        l = (s ? s.isBuffer : void 0) || n;
      e.exports = l;
    }),
    a.register("gs5dt", function (e, t) {
      var r = a("93eP0"),
        n = "object" == typeof self && self && self.Object === Object && self,
        o = r || n || Function("return this")();
      e.exports = o;
    }),
    a.register("93eP0", function (e, r) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.exports = n;
    }),
    a.register("dHuyX", function (e, t) {
      e.exports = function () {
        return !1;
      };
    }),
    a.register("4gNYe", function (e, t) {
      var r = a("93eP0"),
        n = t && !t.nodeType && t,
        o = n && e && !e.nodeType && e,
        i = o && o.exports === n && r.process,
        s = (function () {
          try {
            var e = o && o.require && o.require("util").types;
            return e || (i && i.binding && i.binding("util"));
          } catch (e) {}
        })();
      e.exports = s;
    }),
    a.register("5ofoy", function (e, t) {
      var r = a("gs5dt"),
        n = t && !t.nodeType && t,
        o = n && e && !e.nodeType && e,
        i = o && o.exports === n ? r.Buffer : void 0,
        s = i ? i.allocUnsafe : void 0;
      e.exports = function (e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = s ? s(r) : new e.constructor(r);
        return e.copy(n), n;
      };
    }),
    a.register("gL3ml", function (t, r) {
      e(
        t.exports,
        "default",
        () => u,
        (e) => (u = e)
      );
      var n = a("7z16b"),
        o = r && !r.nodeType && r,
        i = o && t && !t.nodeType && t,
        s = i && i.exports === o ? n.default.Buffer : void 0,
        l = s ? s.allocUnsafe : void 0;
      var u = function (e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = l ? l(r) : new e.constructor(r);
        return e.copy(n), n;
      };
    }),
    a.register("7z16b", function (t, r) {
      e(t.exports, "default", () => i);
      var n = a("29BGw"),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n.default || o || Function("return this")();
    }),
    a.register("29BGw", function (r, n) {
      e(r.exports, "default", () => o);
      var o = "object" == typeof t && t && t.Object === Object && t;
    }),
    a.register("enva8", function (t, r) {
      e(
        t.exports,
        "default",
        () => u,
        (e) => (u = e)
      );
      var n = a("7z16b"),
        o = a("lcNuU"),
        i = r && !r.nodeType && r,
        s = i && t && !t.nodeType && t,
        l = s && s.exports === i ? n.default.Buffer : void 0,
        u = (l ? l.isBuffer : void 0) || o.default;
    }),
    a.register("lcNuU", function (t, r) {
      e(t.exports, "default", () => n);
      var n = function () {
        return !1;
      };
    }),
    a.register("iUcuf", function (t, r) {
      e(
        t.exports,
        "default",
        () => l,
        (e) => (l = e)
      );
      var n = a("29BGw"),
        o = r && !r.nodeType && r,
        i = o && t && !t.nodeType && t,
        s = i && i.exports === o && n.default.process,
        l = (function () {
          try {
            var e = i && i.require && i.require("util").types;
            return e || (s && s.binding && s.binding("util"));
          } catch (e) {}
        })();
    }),
    a("fquJx").register(
      JSON.parse(
        '{"jNUyp":"editor.40420757.js","4bIyF":"icon-camera-fm.39046717.svg","l1JRo":"hand2.ea55fedf.png","fRaJR":"hand2@2x.88cf7bd5.png","liT8a":"left_ptr.f58b5136.png","eQGfm":"left_ptr@2x.2d33be1e.png","1B54I":"wave-emoji-20-27.8619a450.png","82Kei":"wave-emoji-20-27@2x.41ccecf4.png","j8dWM":"emoji-smiling-face-16-20.de75cec0.png","kdsjn":"emoji-smiling-face-16-20@2x.5ff79d8e.png","6iPKz":"capture.88f199e8.css","kf5Lb":"editor.ddbd6582.css","ayiND":"editor.0a5332d6.css","7OJsf":"welcome.2ac67d4d.js","9qDfe":"popup.6158ebed.js","h4kbu":"editor.8a5d852f.js","aWhca":"capture.839f08c2.css","1TQHo":"welcome.4c610233.js","jmyoH":"welcome.0f0b38c0.js"}'
      )
    );
  var s = a("7b0kr"),
    l = a("iiDPj"),
    u = a("ceb36");
  s = a("7b0kr");
  function c(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
  }
  s = a("7b0kr");
  var d = a("3pr9z"),
    p = n((s = a("7b0kr"))).createContext(null),
    f = (function (e) {
      function t(t) {
        var r;
        r = e.call(this, t) || this;
        var n = t.store;
        return (r.state = { storeState: n.getState(), store: n }), r;
      }
      c(t, e);
      var r = t.prototype;
      return (
        (r.componentDidMount = function () {
          (this._isMounted = !0), this.subscribe();
        }),
        (r.componentWillUnmount = function () {
          this.unsubscribe && this.unsubscribe(), (this._isMounted = !1);
        }),
        (r.componentDidUpdate = function (e) {
          this.props.store !== e.store && (this.unsubscribe && this.unsubscribe(), this.subscribe());
        }),
        (r.subscribe = function () {
          var e = this,
            t = this.props.store;
          this.unsubscribe = t.subscribe(function () {
            var r = t.getState();
            e._isMounted &&
              e.setState(function (e) {
                return e.storeState === r ? null : { storeState: r };
              });
          });
          var r = t.getState();
          r !== this.state.storeState && this.setState({ storeState: r });
        }),
        (r.render = function () {
          var e = this.props.context || p;
          return n(s).createElement(e.Provider, { value: this.state }, this.props.children);
        }),
        t
      );
    })(s.Component);
  f.propTypes = {
    store: n(d).shape({ subscribe: n(d).func.isRequired, dispatch: n(d).func.isRequired, getState: n(d).func.isRequired }),
    context: n(d).object,
    children: n(d).any
  };
  var h = f;
  function g(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function m() {
    return (
      (m =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      m.apply(this, arguments)
    );
  }
  function v(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
    return o;
  }
  var y = a("aQ47y"),
    b = {};
  b = function (e, t, r, n, o, i, a, s) {
    if (!e) {
      var l;
      if (void 0 === t)
        l = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var u = [r, n, o, i, a, s],
          c = 0;
        (l = new Error(
          t.replace(/%s/g, function () {
            return u[c++];
          })
        )).name = "Invariant Violation";
      }
      throw ((l.framesToPop = 1), l);
    }
  };
  s = a("7b0kr");
  var x = a("7O5ct");
  function w(e, t) {
    void 0 === t && (t = {});
    var r = t,
      o = r.getDisplayName,
      i =
        void 0 === o
          ? function (e) {
              return "ConnectAdvanced(" + e + ")";
            }
          : o,
      a = r.methodName,
      l = void 0 === a ? "connectAdvanced" : a,
      u = r.renderCountProp,
      d = void 0 === u ? void 0 : u,
      f = r.shouldHandleStateChanges,
      h = void 0 === f || f,
      w = r.storeKey,
      E = void 0 === w ? "store" : w,
      _ = r.withRef,
      S = void 0 !== _ && _,
      O = r.forwardRef,
      k = void 0 !== O && O,
      C = r.context,
      T = void 0 === C ? p : C,
      R = v(r, [
        "getDisplayName",
        "methodName",
        "renderCountProp",
        "shouldHandleStateChanges",
        "storeKey",
        "withRef",
        "forwardRef",
        "context"
      ]);
    n(b)(void 0 === d, "renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"),
      n(b)(!S, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
    var P =
      "To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    n(b)("store" === E, "storeKey has been removed and does not do anything. " + P);
    var j = T;
    return function (t) {
      var r = t.displayName || t.name || "Component",
        o = i(r),
        a = m({}, R, {
          getDisplayName: i,
          methodName: l,
          renderCountProp: d,
          shouldHandleStateChanges: h,
          storeKey: E,
          displayName: o,
          wrappedComponentName: r,
          WrappedComponent: t
        }),
        u = R.pure,
        p = s.Component;
      u && (p = s.PureComponent);
      var f = (function (r) {
        function i(t) {
          var o, i, a, l, c, d, p, f, h, v, y;
          return (
            (o = r.call(this, t) || this),
            n(b)(k ? !t.wrapperProps[E] : !t[E], "Passing redux store in props has been removed and does not do anything. " + P),
            (o.selectDerivedProps = function (t, r, n, o) {
              if (u && i === r && a === t) return l;
              (n === c && d === o) || ((c = n), (d = o), (p = e(n.dispatch, o))), (i = r), (a = t);
              var s = p(t, r);
              return (l = s);
            }),
            (o.selectChildElement = function (e, t, r) {
              return (t === f && r === h && y === e) || ((f = t), (h = r), (y = e), (v = n(s).createElement(e, m({}, t, { ref: r })))), v;
            }),
            (o.indirectRenderWrappedComponent = o.indirectRenderWrappedComponent.bind(g(o))),
            o
          );
        }
        c(i, r);
        var l = i.prototype;
        return (
          (l.indirectRenderWrappedComponent = function (e) {
            return this.renderWrappedComponent(e);
          }),
          (l.renderWrappedComponent = function (e) {
            n(b)(
              e,
              'Could not find "store" in the context of "' +
                o +
                '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' +
                o +
                " in connect options."
            );
            var r,
              i = e.storeState,
              s = e.store,
              l = this.props;
            k && ((l = this.props.wrapperProps), (r = this.props.forwardedRef));
            var u = this.selectDerivedProps(i, l, s, a);
            return this.selectChildElement(t, u, r);
          }),
          (l.render = function () {
            var e =
              this.props.context &&
              this.props.context.Consumer &&
              (0, x.isContextConsumer)(n(s).createElement(this.props.context.Consumer, null))
                ? this.props.context
                : j;
            return n(s).createElement(e.Consumer, null, this.indirectRenderWrappedComponent);
          }),
          i
        );
      })(p);
      if (((f.WrappedComponent = t), (f.displayName = o), k)) {
        var v = n(s).forwardRef(function (e, t) {
          return n(s).createElement(f, { wrapperProps: e, forwardedRef: t });
        });
        return (v.displayName = o), (v.WrappedComponent = t), n(y)(v, t);
      }
      return n(y)(f, t);
    };
  }
  var E = Object.prototype.hasOwnProperty;
  function _(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
  }
  function S(e, t) {
    if (_(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (var o = 0; o < r.length; o++) if (!E.call(t, r[o]) || !_(e[r[o]], t[r[o]])) return !1;
    return !0;
  }
  var O = a("dehX7"),
    k = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
    C = {
      INIT: "@@redux/INIT" + k(),
      REPLACE: "@@redux/REPLACE" + k(),
      PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + k();
      }
    };
  function T(e) {
    if ("object" != typeof e || null === e) return !1;
    for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
  }
  function R(e, t, r) {
    var n;
    if (("function" == typeof t && "function" == typeof r) || ("function" == typeof r && "function" == typeof arguments[3]))
      throw new Error(
        "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
      );
    if (("function" == typeof t && void 0 === r && ((r = t), (t = void 0)), void 0 !== r)) {
      if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
      return r(R)(e, t);
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var o = e,
      i = t,
      a = [],
      s = a,
      l = !1;
    function u() {
      s === a && (s = a.slice());
    }
    function c() {
      if (l)
        throw new Error(
          "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
        );
      return i;
    }
    function d(e) {
      if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
      if (l)
        throw new Error(
          "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
        );
      var t = !0;
      return (
        u(),
        s.push(e),
        function () {
          if (t) {
            if (l)
              throw new Error(
                "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
              );
            (t = !1), u();
            var r = s.indexOf(e);
            s.splice(r, 1), (a = null);
          }
        }
      );
    }
    function p(e) {
      if (!T(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (l) throw new Error("Reducers may not dispatch actions.");
      try {
        (l = !0), (i = o(i, e));
      } finally {
        l = !1;
      }
      for (var t = (a = s), r = 0; r < t.length; r++) {
        (0, t[r])();
      }
      return e;
    }
    return (
      p({ type: C.INIT }),
      ((n = {
        dispatch: p,
        subscribe: d,
        getState: c,
        replaceReducer: function (e) {
          if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
          (o = e), p({ type: C.REPLACE });
        }
      })[O.default] = function () {
        var e,
          t = d;
        return (
          ((e = {
            subscribe: function (e) {
              if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");
              function r() {
                e.next && e.next(c());
              }
              return r(), { unsubscribe: t(r) };
            }
          })[O.default] = function () {
            return this;
          }),
          e
        );
      }),
      n
    );
  }
  function P(e, t) {
    var r = t && t.type;
    return (
      "Given " +
      ((r && 'action "' + String(r) + '"') || "an action") +
      ', reducer "' +
      e +
      '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    );
  }
  function j(e) {
    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
      var o = t[n];
      "function" == typeof e[o] && (r[o] = e[o]);
    }
    var i,
      a = Object.keys(r);
    try {
      !(function (e) {
        Object.keys(e).forEach(function (t) {
          var r = e[t];
          if (void 0 === r(void 0, { type: C.INIT }))
            throw new Error(
              'Reducer "' +
                t +
                "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
            );
          if (void 0 === r(void 0, { type: C.PROBE_UNKNOWN_ACTION() }))
            throw new Error(
              'Reducer "' +
                t +
                "\" returned undefined when probed with a random type. Don't try to handle " +
                C.INIT +
                ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
            );
        });
      })(r);
    } catch (e) {
      i = e;
    }
    return function (e, t) {
      if ((void 0 === e && (e = {}), i)) throw i;
      for (var n = !1, o = {}, s = 0; s < a.length; s++) {
        var l = a[s],
          u = r[l],
          c = e[l],
          d = u(c, t);
        if (void 0 === d) {
          var p = P(l, t);
          throw new Error(p);
        }
        (o[l] = d), (n = n || d !== c);
      }
      return (n = n || a.length !== Object.keys(e).length) ? o : e;
    };
  }
  function M(e, t) {
    return function () {
      return t(e.apply(this, arguments));
    };
  }
  function D(e, t) {
    if ("function" == typeof e) return M(e, t);
    if ("object" != typeof e || null === e)
      throw new Error(
        "bindActionCreators expected an object or a function, instead received " +
          (null === e ? "null" : typeof e) +
          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
      );
    var r = {};
    for (var n in e) {
      var o = e[n];
      "function" == typeof o && (r[n] = M(o, t));
    }
    return r;
  }
  function L(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
  }
  function A(e, t) {
    var r = Object.keys(e);
    return (
      Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(e)),
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
      r
    );
  }
  function N() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return 0 === t.length
      ? function (e) {
          return e;
        }
      : 1 === t.length
      ? t[0]
      : t.reduce(function (e, t) {
          return function () {
            return e(t.apply(void 0, arguments));
          };
        });
  }
  function I() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return function (e) {
      return function () {
        var r = e.apply(void 0, arguments),
          n = function () {
            throw new Error(
              "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch."
            );
          },
          o = {
            getState: r.getState,
            dispatch: function () {
              return n.apply(void 0, arguments);
            }
          },
          i = t.map(function (e) {
            return e(o);
          });
        return (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? A(r, !0).forEach(function (t) {
                  L(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : A(r).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
          }
          return e;
        })({}, r, { dispatch: (n = N.apply(void 0, i)(r.dispatch)) });
      };
    };
  }
  function H(e) {
    return function (t, r) {
      var n = e(t, r);
      function o() {
        return n;
      }
      return (o.dependsOnOwnProps = !1), o;
    };
  }
  function F(e) {
    return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
  }
  function U(e, t) {
    return function (t, r) {
      r.displayName;
      var n = function (e, t) {
        return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e);
      };
      return (
        (n.dependsOnOwnProps = !0),
        (n.mapToProps = function (t, r) {
          (n.mapToProps = e), (n.dependsOnOwnProps = F(e));
          var o = n(t, r);
          return "function" == typeof o && ((n.mapToProps = o), (n.dependsOnOwnProps = F(o)), (o = n(t, r))), o;
        }),
        n
      );
    };
  }
  var B = [
    function (e) {
      return "function" == typeof e ? U(e) : void 0;
    },
    function (e) {
      return e
        ? void 0
        : H(function (e) {
            return { dispatch: e };
          });
    },
    function (e) {
      return e && "object" == typeof e
        ? H(function (t) {
            return D(e, t);
          })
        : void 0;
    }
  ];
  var z = [
    function (e) {
      return "function" == typeof e ? U(e) : void 0;
    },
    function (e) {
      return e
        ? void 0
        : H(function () {
            return {};
          });
    }
  ];
  function W(e, t, r) {
    return m({}, r, e, t);
  }
  var q = [
    function (e) {
      return "function" == typeof e
        ? (function (e) {
            return function (t, r) {
              r.displayName;
              var n,
                o = r.pure,
                i = r.areMergedPropsEqual,
                a = !1;
              return function (t, r, s) {
                var l = e(t, r, s);
                return a ? (o && i(l, n)) || (n = l) : ((a = !0), (n = l)), n;
              };
            };
          })(e)
        : void 0;
    },
    function (e) {
      return e
        ? void 0
        : function () {
            return W;
          };
    }
  ];
  function V(e, t, r, n) {
    return function (o, i) {
      return r(e(o, i), t(n, i), i);
    };
  }
  function Y(e, t, r, n, o) {
    var i,
      a,
      s,
      l,
      u,
      c = o.areStatesEqual,
      d = o.areOwnPropsEqual,
      p = o.areStatePropsEqual,
      f = !1;
    function h(o, f) {
      var h,
        g,
        m = !d(f, a),
        v = !c(o, i);
      return (
        (i = o),
        (a = f),
        m && v
          ? ((s = e(i, a)), t.dependsOnOwnProps && (l = t(n, a)), (u = r(s, l, a)))
          : m
          ? (e.dependsOnOwnProps && (s = e(i, a)), t.dependsOnOwnProps && (l = t(n, a)), (u = r(s, l, a)))
          : v
          ? ((h = e(i, a)), (g = !p(h, s)), (s = h), g && (u = r(s, l, a)), u)
          : u
      );
    }
    return function (o, c) {
      return f ? h(o, c) : ((s = e((i = o), (a = c))), (l = t(n, a)), (u = r(s, l, a)), (f = !0), u);
    };
  }
  function $(e, t) {
    var r = t.initMapStateToProps,
      n = t.initMapDispatchToProps,
      o = t.initMergeProps,
      i = v(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
      a = r(e, i),
      s = n(e, i),
      l = o(e, i);
    return (i.pure ? Y : V)(a, s, l, e, i);
  }
  function G(e, t, r) {
    for (var n = t.length - 1; n >= 0; n--) {
      var o = t[n](e);
      if (o) return o;
    }
    return function (t, n) {
      throw new Error(
        "Invalid value of type " + typeof e + " for " + r + " argument when connecting component " + n.wrappedComponentName + "."
      );
    };
  }
  function K(e, t) {
    return e === t;
  }
  var X,
    Z,
    J,
    Q,
    ee,
    te,
    re,
    ne,
    oe,
    ie,
    ae,
    se,
    le =
      ((J = (Z = void 0 === X ? {} : X).connectHOC),
      (Q = void 0 === J ? w : J),
      (ee = Z.mapStateToPropsFactories),
      (te = void 0 === ee ? z : ee),
      (re = Z.mapDispatchToPropsFactories),
      (ne = void 0 === re ? B : re),
      (oe = Z.mergePropsFactories),
      (ie = void 0 === oe ? q : oe),
      (ae = Z.selectorFactory),
      (se = void 0 === ae ? $ : ae),
      function (e, t, r, n) {
        void 0 === n && (n = {});
        var o = n,
          i = o.pure,
          a = void 0 === i || i,
          s = o.areStatesEqual,
          l = void 0 === s ? K : s,
          u = o.areOwnPropsEqual,
          c = void 0 === u ? S : u,
          d = o.areStatePropsEqual,
          p = void 0 === d ? S : d,
          f = o.areMergedPropsEqual,
          h = void 0 === f ? S : f,
          g = v(o, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
          y = G(e, te, "mapStateToProps"),
          b = G(t, ne, "mapDispatchToProps"),
          x = G(r, ie, "mergeProps");
        return Q(
          se,
          m(
            {
              methodName: "connect",
              getDisplayName: function (e) {
                return "Connect(" + e + ")";
              },
              shouldHandleStateChanges: Boolean(e),
              initMapStateToProps: y,
              initMapDispatchToProps: b,
              initMergeProps: x,
              pure: a,
              areStatesEqual: l,
              areOwnPropsEqual: c,
              areStatePropsEqual: p,
              areMergedPropsEqual: h
            },
            g
          )
        );
      }),
    ue = a("8rN6d"),
    ce = a("iPbYd"),
    de = a("jBCXK"),
    pe = a("ff4Ef"),
    fe = a("8bPtr"),
    he = a("e0Kwl"),
    ge = a("ld3ci"),
    me = a("2z2pA"),
    ve = a("fYpxg");
  const ye = (...e) => {
    e.splice(1, 0, "color:#C70;background:#FED"), (e[0] = `%c${e[0]}`), me.default.apply(me.default, e);
  };
  ye("NODE_ENV", "production", true), (window._abr = () => ve.default.setObj({ ab: {}, login_data: {}, has_logged_in: !1 }));
  const be = (function () {
    var e = (0, ue.default)(function (e) {
      return (0, fe.__generator)(this, function (t) {
        return void 0 !== e && e, [2, !0];
      });
    });
    return function () {
      return e.apply(this, arguments);
    };
  })();
  class xe {
    canRequestTest() {
      const e = he.DateTime.now().diff(this.waitUntil, "milliseconds").milliseconds;
      return (
        ye(
          `[canRequestTest] ${!this.hasUser} && ${!this.token} (${this.token}) && ${e} (${this.waitUntil.toLocaleString(
            he.DateTime.DATETIME_FULL
          )})`
        ),
        !this.hasUser && !this.token && (e >= -1e3 || "e9ce" !== this.curTest)
      );
    }
    save() {
      var e = this;
      return (0, ue.default)(function () {
        return (0, fe.__generator)(this, function (t) {
          return [2, ve.default.set("ab", (0, de.default)({}, e._ab))];
        });
      })();
    }
    _validate(e) {
      return (
        e &&
        "object" == typeof e &&
        Object.entries(xe._types).every((t) => {
          let r = (0, pe.default)(t, 2),
            n = r[0],
            o = r[1];
          return null === e[n] || void 0 === e[n] ? xe._nullables.has(n) : typeof e[n] === o;
        })
      );
    }
    constructor(e, t) {
      (this._ab = e),
        (this.hasUser = !(!t || !t.userId)),
        (this.isValid = !1),
        (this.reqToken = null == e ? void 0 : e.reqToken),
        (this.curTest = null == e ? void 0 : e.curTest),
        (this.token = null),
        (this.waitUntil = he.DateTime.now()),
        (this.data = {}),
        this._validate(e) &&
          ((this.isValid = !0),
          (this.token = e.token || null),
          (this.waitUntil = e.waitUntil && e.waitUntil > 0 ? he.DateTime.fromSeconds(e.waitUntil) : he.DateTime.now().plus({ years: 100 })),
          (this.data = e.data || {})),
        (this.showPremium = this.hasUser || this.data.showPremium);
    }
  }
  (0, ce.default)(xe, "makeNeverState", (e, t, r) => {
    const o = new xe({ reqToken: e, token: null, curTest: r, waitUntil: -1, data: null, ext: t });
    return n(ge)(o.isValid, "Generated ABState is invalid!"), o;
  }),
    (0, ce.default)(xe, "makeDelayState", (e, t) => {
      const r = new xe({
        reqToken: e,
        token: null,
        curTest: t,
        waitUntil: Math.floor(he.DateTime.now().plus({ days: 7 }).toSeconds()),
        data: null
      });
      return n(ge)(r.isValid, "Generated ABState is invalid!"), r;
    }),
    (0, ce.default)(
      xe,
      "lookup",
      (0, ue.default)(function () {
        var e;
        return (0, fe.__generator)(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, ve.default.load()];
            case 1:
              return (e = t.sent()), [2, new xe(e.ab, e.login_data)];
          }
        });
      })
    ),
    (0, ce.default)(xe, "_types", { reqToken: "string", token: "string", waitUntil: "number", data: "object" }),
    (0, ce.default)(xe, "_nullables", new Set(["token", "data"]));
  var we,
    Ee = a("6pLLc"),
    _e = a("kOtTY");
  (ue = a("8rN6d")), (de = a("jBCXK")), (fe = a("8bPtr"));
  function Se(e, t, r) {
    var n, o, i, a, s;
    function l() {
      var u = Date.now() - a;
      u < t && u >= 0 ? (n = setTimeout(l, t - u)) : ((n = null), r || ((s = e.apply(i, o)), (i = o = null)));
    }
    null == t && (t = 100);
    var u = function () {
      (i = this), (o = arguments), (a = Date.now());
      var u = r && !n;
      return n || (n = setTimeout(l, t)), u && ((s = e.apply(i, o)), (i = o = null)), s;
    };
    return (
      (u.clear = function () {
        n && (clearTimeout(n), (n = null));
      }),
      (u.flush = function () {
        n && ((s = e.apply(i, o)), (i = o = null), clearTimeout(n), (n = null));
      }),
      u
    );
  }
  (Se.debounce = Se), (we = Se);
  he = a("e0Kwl");
  var Oe = a("eC8rE");
  me = a("2z2pA");
  var ke = new (0, a("fiP9V").default)("defaults", { shapeDefaults: { type: "json", default: () => ({}) } }),
    Ce = a("avfZw"),
    Te = a("dChev"),
    Re = ((_e = a("kOtTY")), a("1I2HB")),
    Pe = ((de = a("jBCXK")), a("8DwkQ")),
    je = ((ve = a("fYpxg")), (Te = a("dChev")), a("fueUa")),
    Me = a("fAoww");
  const De = {},
    Le = "capture/WELCOME_CLOSE",
    Ae = "capture/LOGIN_DATA_UPDATE",
    Ne = "capture/TOUR_DEMO_HIDE",
    Ie = "capture/TOUR_DEMO_SHOW";
  const He = (e, t) => {
      let r = void 0 !== t && t;
      const n = e.subState !== Te.SUB_BAD;
      return {
        type: Ae,
        payload: {
          isSubOk: n,
          subState: e.subState,
          subUserId: e.userId,
          showWelcome: r && "#welcome" === window.location.hash,
          hasPreviouslyLoggedIn: e.store.has_logged_in || !1,
          showTourDemo: e.store.show_editor_tour || !1,
          lastDlType: e.store.last_dl_type,
          planAmount: (e.store.ab && e.store.ab.data && e.store.ab.data.amount) || Pe.DEFAULT_PLAN_AMOUNT
        }
      };
    },
    Fe = (e) => {
      if (e !== Pe.DL_TYPE_IMAGE && e !== Pe.DL_TYPE_PDF) throw new Error(`Invalid lastDlType: "${e}"`);
      return ve.default.set("last_dl_type", e), { type: "capture/LAST_DL_TYPE_UPDATE", payload: { lastDlType: e } };
    };
  de = a("jBCXK");
  var Ue = a("hGGFE"),
    Be = a("4fNEN");
  (je = a("fueUa")), (Me = a("fAoww"));
  function ze(e) {
    if (Array.isArray(e)) return e;
  }
  function We(e, t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
      var r = [],
        n = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
      } catch (e) {
        (o = !0), (i = e);
      } finally {
        try {
          n || null == s.return || s.return();
        } finally {
          if (o) throw i;
        }
      }
      return r;
    }
  }
  function qe(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Ve(e, t) {
    if (e) {
      if ("string" == typeof e) return qe(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === r && e.constructor && (r = e.constructor.name),
        "Map" === r || "Set" === r
          ? Array.from(e)
          : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? qe(e, t)
          : void 0
      );
    }
  }
  function Ye() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function $e(e, t) {
    return ze(e) || We(e, t) || Ve(e, t) || Ye();
  }
  function Ge(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
  }
  function Ke(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(r).filter(function (e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable;
          })
        )),
        n.forEach(function (t) {
          Ge(e, t, r[t]);
        });
    }
    return e;
  }
  function Xe(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function Ze(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function Je(e, t, r) {
    return t && Ze(e.prototype, t), r && Ze(e, r), e;
  }
  function Qe(e) {
    return (
      (Qe =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }),
      Qe(e)
    );
  }
  function et(e, t) {
    return !t || ("object" !== Qe(t) && "function" != typeof t) ? g(e) : t;
  }
  function tt(e) {
    return (
      (tt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      tt(e)
    );
  }
  function rt(e, t) {
    return (
      (rt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        }),
      rt(e, t)
    );
  }
  function nt(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && rt(e, t);
  }
  (s = a("7b0kr")), (d = a("3pr9z")), (l = a("iiDPj"));
  function ot(e) {
    if (Array.isArray(e)) return qe(e);
  }
  function it(e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
  }
  function at() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function st(e) {
    return ot(e) || it(e) || Ve(e) || at();
  }
  var lt = (function () {
    function e() {
      Xe(this, e), Ge(this, "refs", {});
    }
    return (
      Je(e, [
        {
          key: "add",
          value: function (e, t) {
            this.refs[e] || (this.refs[e] = []), this.refs[e].push(t);
          }
        },
        {
          key: "remove",
          value: function (e, t) {
            var r = this.getIndex(e, t);
            -1 !== r && this.refs[e].splice(r, 1);
          }
        },
        {
          key: "isActive",
          value: function () {
            return this.active;
          }
        },
        {
          key: "getActive",
          value: function () {
            var e = this;
            return this.refs[this.active.collection].find(function (t) {
              return t.node.sortableInfo.index == e.active.index;
            });
          }
        },
        {
          key: "getIndex",
          value: function (e, t) {
            return this.refs[e].indexOf(t);
          }
        },
        {
          key: "getOrderedRefs",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
            return this.refs[e].sort(ut);
          }
        }
      ]),
      e
    );
  })();
  function ut(e, t) {
    return e.node.sortableInfo.index - t.node.sortableInfo.index;
  }
  function ct(e, t) {
    return Object.keys(e).reduce(function (r, n) {
      return -1 === t.indexOf(n) && (r[n] = e[n]), r;
    }, {});
  }
  var dt = { end: ["touchend", "touchcancel", "mouseup"], move: ["touchmove", "mousemove"], start: ["touchstart", "mousedown"] },
    pt = (function () {
      if ("undefined" == typeof window || "undefined" == typeof document) return "";
      var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
        t = (Array.prototype.slice
          .call(e)
          .join("")
          .match(/-(moz|webkit|ms)-/) ||
          ("" === e.OLink && ["", "o"]))[1];
      return "ms" === t ? "ms" : t && t.length ? t[0].toUpperCase() + t.substr(1) : "";
    })();
  function ft(e, t) {
    Object.keys(t).forEach(function (r) {
      e.style[r] = t[r];
    });
  }
  function ht(e, t) {
    e.style["".concat(pt, "Transform")] = null == t ? "" : "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)");
  }
  function gt(e, t) {
    e.style["".concat(pt, "TransitionDuration")] = null == t ? "" : "".concat(t, "ms");
  }
  function mt(e, t) {
    for (; e; ) {
      if (t(e)) return e;
      e = e.parentNode;
    }
    return null;
  }
  function vt(e, t, r) {
    return Math.max(e, Math.min(r, t));
  }
  function yt(e) {
    return "px" === e.substr(-2) ? parseFloat(e) : 0;
  }
  function bt(e, t) {
    var r = t.displayName || t.name;
    return r ? "".concat(e, "(").concat(r, ")") : e;
  }
  function xt(e, t) {
    var r = e.getBoundingClientRect();
    return { top: r.top + t.top, left: r.left + t.left };
  }
  function wt(e) {
    return e.touches && e.touches.length
      ? { x: e.touches[0].pageX, y: e.touches[0].pageY }
      : e.changedTouches && e.changedTouches.length
      ? { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY }
      : { x: e.pageX, y: e.pageY };
  }
  function Et(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { left: 0, top: 0 };
    if (e) {
      var n = { left: r.left + e.offsetLeft, top: r.top + e.offsetTop };
      return e.parentNode === t ? n : Et(e.parentNode, t, n);
    }
  }
  function _t(e) {
    var t = e.lockOffset,
      r = e.width,
      o = e.height,
      i = t,
      a = t,
      s = "px";
    if ("string" == typeof t) {
      var l = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);
      n(b)(null !== l, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', t),
        (i = parseFloat(t)),
        (a = parseFloat(t)),
        (s = l[1]);
    }
    return (
      n(b)(isFinite(i) && isFinite(a), "lockOffset value should be a finite. Given %s", t),
      "%" === s && ((i = (i * r) / 100), (a = (a * o) / 100)),
      { x: i, y: a }
    );
  }
  function St(e) {
    return e instanceof HTMLElement
      ? (function (e) {
          var t = window.getComputedStyle(e),
            r = /(auto|scroll)/;
          return ["overflow", "overflowX", "overflowY"].find(function (e) {
            return r.test(t[e]);
          });
        })(e)
        ? e
        : St(e.parentNode)
      : null;
  }
  var Ot = 27,
    kt = 32,
    Ct = 37,
    Tt = 38,
    Rt = 39,
    Pt = 40,
    jt = { Anchor: "A", Button: "BUTTON", Canvas: "CANVAS", Input: "INPUT", Option: "OPTION", Textarea: "TEXTAREA", Select: "SELECT" };
  function Mt(e) {
    return null != e.sortableHandle;
  }
  var Dt = (function () {
    function e(t, r) {
      Xe(this, e), (this.container = t), (this.onScrollCallback = r);
    }
    return (
      Je(e, [
        {
          key: "clear",
          value: function () {
            null != this.interval && (clearInterval(this.interval), (this.interval = null));
          }
        },
        {
          key: "update",
          value: function (e) {
            var t = this,
              r = e.translate,
              n = e.minTranslate,
              o = e.maxTranslate,
              i = e.width,
              a = e.height,
              s = { x: 0, y: 0 },
              l = { x: 1, y: 1 },
              u = 10,
              c = 10,
              d = this.container,
              p = d.scrollTop,
              f = d.scrollLeft,
              h = d.scrollHeight,
              g = d.scrollWidth,
              m = 0 === p,
              v = h - p - d.clientHeight == 0,
              y = 0 === f,
              b = g - f - d.clientWidth == 0;
            r.y >= o.y - a / 2 && !v
              ? ((s.y = 1), (l.y = c * Math.abs((o.y - a / 2 - r.y) / a)))
              : r.x >= o.x - i / 2 && !b
              ? ((s.x = 1), (l.x = u * Math.abs((o.x - i / 2 - r.x) / i)))
              : r.y <= n.y + a / 2 && !m
              ? ((s.y = -1), (l.y = c * Math.abs((r.y - a / 2 - n.y) / a)))
              : r.x <= n.x + i / 2 && !y && ((s.x = -1), (l.x = u * Math.abs((r.x - i / 2 - n.x) / i))),
              this.interval && (this.clear(), (this.isAutoScrolling = !1)),
              (0 === s.x && 0 === s.y) ||
                (this.interval = setInterval(function () {
                  t.isAutoScrolling = !0;
                  var e = { left: l.x * s.x, top: l.y * s.y };
                  (t.container.scrollTop += e.top), (t.container.scrollLeft += e.left), t.onScrollCallback(e);
                }, 5));
          }
        }
      ]),
      e
    );
  })();
  var Lt = {
      axis: n(d).oneOf(["x", "y", "xy"]),
      contentWindow: n(d).any,
      disableAutoscroll: n(d).bool,
      distance: n(d).number,
      getContainer: n(d).func,
      getHelperDimensions: n(d).func,
      helperClass: n(d).string,
      helperContainer: n(d).oneOfType([n(d).func, "undefined" == typeof HTMLElement ? n(d).any : n(d).instanceOf(HTMLElement)]),
      hideSortableGhost: n(d).bool,
      keyboardSortingTransitionDuration: n(d).number,
      lockAxis: n(d).string,
      lockOffset: n(d).oneOfType([n(d).number, n(d).string, n(d).arrayOf(n(d).oneOfType([n(d).number, n(d).string]))]),
      lockToContainerEdges: n(d).bool,
      onSortEnd: n(d).func,
      onSortMove: n(d).func,
      onSortOver: n(d).func,
      onSortStart: n(d).func,
      pressDelay: n(d).number,
      pressThreshold: n(d).number,
      keyCodes: n(d).shape({
        lift: n(d).arrayOf(n(d).number),
        drop: n(d).arrayOf(n(d).number),
        cancel: n(d).arrayOf(n(d).number),
        up: n(d).arrayOf(n(d).number),
        down: n(d).arrayOf(n(d).number)
      }),
      shouldCancelStart: n(d).func,
      transitionDuration: n(d).number,
      updateBeforeSortStart: n(d).func,
      useDragHandle: n(d).bool,
      useWindowAsScrollContainer: n(d).bool
    },
    At = { lift: [kt], drop: [kt], cancel: [Ot], up: [Tt, Ct], down: [Pt, Rt] },
    Nt = {
      axis: "y",
      disableAutoscroll: !1,
      distance: 0,
      getHelperDimensions: function (e) {
        var t = e.node;
        return { height: t.offsetHeight, width: t.offsetWidth };
      },
      hideSortableGhost: !0,
      lockOffset: "50%",
      lockToContainerEdges: !1,
      pressDelay: 0,
      pressThreshold: 5,
      keyCodes: At,
      shouldCancelStart: function (e) {
        return (
          -1 !== [jt.Input, jt.Textarea, jt.Select, jt.Option, jt.Button].indexOf(e.target.tagName) ||
          !!mt(e.target, function (e) {
            return "true" === e.contentEditable;
          })
        );
      },
      transitionDuration: 300,
      useWindowAsScrollContainer: !1
    },
    It = Object.keys(Lt);
  var Ht = { index: n(d).number.isRequired, collection: n(d).oneOfType([n(d).number, n(d).string]), disabled: n(d).bool },
    Ft = Object.keys(Ht);
  const Ut = [],
    Bt = "layers/BATCH_LAYER_ADD",
    zt = "layers/LAYER_ADD",
    Wt = "layers/LAYERS_REMOVE",
    qt = "layers/LAYER_MOVE";
  const Vt = (e, t) => ({ type: Bt, payload: e, groupAsUpdate: Boolean(t) }),
    Yt = (e, t, r, n, o, i, a, s) => ({
      type: zt,
      payload: { id: e, shapeKey: t, x1: r, y1: n, x2: o, y2: i, groups: a, bottom: s || !1 }
    }),
    $t = (e, t) => ({ type: qt, payload: { oldIndex: e, newIndex: t } }),
    Gt = "select",
    Kt = "crop",
    Xt = [Gt, Kt],
    Zt = "@@redux-undo/",
    Jt = {
      selectedLayerIds: [],
      hoveringLayerId: null,
      mode: Gt,
      showLoginDropdown: !1,
      showDemoModal: !1,
      showHeaderUpdatedModal: !1,
      showHeaderUpdatedThrob: !1
    },
    Qt = Object.assign({ zoom: 75 }, Jt),
    er = "editor/LAYERS_SELECT",
    tr = "editor/LAYERS_DESELECT",
    rr = "editor/LAYER_HOVER",
    nr = "editor/LAYER_UNHOVER",
    or = "editor/ZOOM_CHANGE",
    ir = "editor/SHAPE_KEY_CHANGE",
    ar = "editor/CROP_ENABLE",
    sr = "editor/CROP_DISABLE",
    lr = "editor/BORDER_EDIT",
    ur = "editor/TEMPLATE_EDIT",
    cr = "editor/HELP_ENABLE",
    dr = "editor/UPDATE_THEME_ENABLE",
    pr = "editor/LOGIN_DROPDOWN_SHOW",
    fr = "editor/LOGIN_DROPDOWN_HIDE",
    hr = "editor/SHOW_DEMO_MODAL_UPDATE",
    gr = "editor/NOTIFY_TEXT_SET",
    mr = "editor/CLICK_DIALOG_OPEN",
    vr = "editor/CLICK_DIALOG_CLOSE",
    yr = "editor/UPDATED_HEADER_MODAL_CLOSE",
    br = "editor/UPDATED_HEADER_THROB_HIDE";
  const xr = (e) => ({ type: er, payload: { selectedLayerIds: e.slice() } }),
    wr = (e) => ({ type: rr, payload: { hoveringLayerId: e } }),
    Er = (e) => ({ type: nr, payload: { hoveringLayerId: null } }),
    _r = (e) => ({ type: or, payload: { zoom: e } }),
    Sr = (e, t) => ({
      type: lr,
      payload: { mode: Gt, selectedLayerIds: [je.BORDER_ID], hoveringLayerId: null },
      isToggle: e,
      defaultGroups: t
    }),
    Or = (e) => ({ type: ur, payload: { mode: Gt, selectedLayerIds: [je.TEMPLATE_ID], hoveringLayerId: null }, defaultGroups: e }),
    kr = (e) => ({ type: cr, payload: { showHelp: void 0 === e || e } }),
    Cr = (e) => ({ type: dr, payload: { showUpdateTheme: void 0 === e || e } }),
    Tr = (e) => ({ type: hr, payload: { showDemoModal: void 0 === e || e } }),
    Rr = (e, t) => (
      n(Be).ok("number" == typeof e, "enableCrop width is not a number"),
      n(Be).ok("number" == typeof t, "enableCrop height is not a number"),
      { type: ar, payload: { mode: Kt, selectedLayerIds: [], hoveringLayerId: null }, base: { width: e, height: t } }
    ),
    Pr = () => ((0, Me.default)(window, je.EVT_REFOCUS), { type: sr, payload: { mode: Gt, selectedLayerIds: [], hoveringLayerId: null } }),
    jr = (e) => ({ type: gr, payload: { notifyText: e } }),
    Mr = (e, t) => ({ type: mr, payload: { clickDialog: { pageX: e, pageY: t } } }),
    Dr = (function () {
      var e = (0, ue.default)(function (e, t) {
        var r, n, o, i, a, s, l, u, c, d, p, f, h, g, m;
        return (0, fe.__generator)(this, function (v) {
          switch (v.label) {
            case 0:
              return (r = void 0 === t ? 0 : t), [4, Te.default.loginStateProm(!0)];
            case 1:
              return (
                (n = v.sent()),
                (o = { capture: He(n, !0).payload }),
                (0, me.default)(`%c> loginState? ${JSON.stringify(n)}`, "color:magenta;background:#FFEEF3"),
                (e = Fr(e)),
                (r = Fr(r)),
                null === e || null === r ? [3, 3] : ((0, me.default)("LOOKUP", e), [4, Oe.Capture.lookup(e)])
              );
            case 2:
              (i = v.sent()), (0, me.default)("CAPTURE", i), (v.label = 3);
            case 3:
              if (null === e || null === r || !i || r >= i.images.length)
                throw (
                  (((a = new Error(
                    "There appears to be no screenshot for this URL. Please return to the view screenshot page and click back into the editor from a valid screenshot."
                  )).name = "CaptureNotFoundError"),
                  (a.title = "Capture not found"),
                  a)
                );
              return (s = i.edits) && s.length && s[r]
                ? [3, 5]
                : ((l = { id: r, imageId: r }), (0, me.default)("CREATE NEW EDIT", r, l), [4, i.addEdit(r, r)]);
            case 4:
              (i = v.sent()), (0, me.default)("SUCCESS", i), (v.label = 5);
            case 5:
              return i.scaleMultiplier ? [3, 7] : [4, i.updateScaleMultiplier()];
            case 6:
              v.sent(), (v.label = 7);
            case 7:
              return (
                (u = i.edits[r]),
                (0, me.default)("EDIT", u),
                Object.assign(o.capture, {
                  id: i.id,
                  editId: r,
                  imageId: u.imageId,
                  format: i.format,
                  src: i.fullPaths[u.imageId],
                  url: i.url,
                  title: i.title || "",
                  extUrl: i.displayURL,
                  links: (i.metadata && i.metadata.links) || [],
                  time: i.dateTime,
                  pixelDensity: i.scaleMultiplier,
                  updated: he.DateTime.fromJSDate(u.updated),
                  created: he.DateTime.fromJSDate(u.created)
                }),
                [4, ke.load()]
              );
            case 8:
              return (
                (c = v.sent()),
                (d = c.shapeDefaults),
                (o.globalShapeDefaults = d),
                (o.shapeDefaults = d),
                u.undos &&
                  ((o.undos = u.undos),
                  o.undos.present &&
                    o.undos.present.layersById &&
                    (p = o.undos.present.layersById.__border__) &&
                    !p.padding &&
                    delete o.undos.present.layersById.__border__),
                [4, Ce.default.load()]
              );
            case 9:
              return (
                (f = v.sent()),
                (o.editor = o.editor || (0, de.default)({}, Qt)),
                null == (h = (0, _e.getQueryString)())[(g = "forceUpdatedHeaderModal")]
                  ? [3, 11]
                  : (delete h[g],
                    (m = (0, _e.toQueryString)(h)),
                    [4, Ce.default.setObj({ didUpdatedHeaderModal: !1, didUpdatedHeaderThrob: !1, firstKnownVersion: "7.6" })])
              );
            case 10:
              v.sent(), (window.location.href = `${window.location.pathname}${m ? "?" : ""}${m}${window.location.hash}`), (v.label = 11);
            case 11:
              return (
                f.firstKnownVersion &&
                  (0, Re.compareVersions)(f.firstKnownVersion, Ce.UPDATED_HEADER_MIN_VERSION) < 0 &&
                  ((o.editor.showHeaderUpdatedModal = !f.didUpdatedHeaderModal),
                  (o.editor.showHeaderUpdatedThrob = !f.didUpdatedHeaderThrob)),
                [2, o]
              );
          }
        });
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    })();
  let Lr = Promise.resolve(),
    Ar = null,
    Nr = null;
  const Ir = (0, we.debounce)((e) => {
      const t = e.capture;
      if (t && void 0 !== t.id && void 0 !== t.editId) {
        const r = t.id,
          n = t.editId;
        Lr = Lr.then(() =>
          Promise.all([
            (function () {
              const t = e.undos;
              if (t !== Ar) return Oe.Capture.updateEditState(r, n, t).then(() => (Ar = t));
            })(),
            (function () {
              const t = e.globalShapeDefaults;
              if (t !== Nr) return ke.set("shapeDefaults", t).then(() => (Nr = t));
            })()
          ])
        ).catch((e) => {
          me.default.error("!!! UNABLE TO SAVE STATE !!!"), me.default.error(e);
        });
      }
    }, 750),
    Hr = (e) => {
      let t = e.getState;
      return (e) => (r) => {
        const n = e(r);
        return Ir(t()), n;
      };
    };
  window._resetUser = () => (0, Te.resetUser)();
  const Fr = (e) => {
    switch (typeof e) {
      case "string":
        return /^\d+$/.test(e) ? parseInt(e) : null;
      case "number":
        return isFinite(e) ? Math.round(e) : null;
      default:
        return null;
    }
  };
  var Ur = {};
  !(function (e) {
    "use strict";
    function r(e, t) {
      (e.super_ = t),
        (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }));
    }
    function n(e, t) {
      Object.defineProperty(this, "kind", { value: e, enumerable: !0 }),
        t && t.length && Object.defineProperty(this, "path", { value: t, enumerable: !0 });
    }
    function o(e, t, r) {
      o.super_.call(this, "E", e),
        Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }),
        Object.defineProperty(this, "rhs", { value: r, enumerable: !0 });
    }
    function i(e, t) {
      i.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
    }
    function a(e, t) {
      a.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 });
    }
    function s(e, t, r) {
      s.super_.call(this, "A", e),
        Object.defineProperty(this, "index", { value: t, enumerable: !0 }),
        Object.defineProperty(this, "item", { value: r, enumerable: !0 });
    }
    function l(e, t, r) {
      var n = e.slice((r || t) + 1 || e.length);
      return (e.length = t < 0 ? e.length + t : t), e.push.apply(e, n), e;
    }
    function u(e) {
      var t = void 0 === e ? "undefined" : P(e);
      return "object" !== t
        ? t
        : e === Math
        ? "math"
        : null === e
        ? "null"
        : Array.isArray(e)
        ? "array"
        : "[object Date]" === Object.prototype.toString.call(e)
        ? "date"
        : "function" == typeof e.toString && /^\/.*\//.test(e.toString())
        ? "regexp"
        : "object";
    }
    function c(e, t, r, n, d, p, f) {
      f = f || [];
      var h = (d = d || []).slice(0);
      if (void 0 !== p) {
        if (n) {
          if ("function" == typeof n && n(h, p)) return;
          if ("object" === (void 0 === n ? "undefined" : P(n))) {
            if (n.prefilter && n.prefilter(h, p)) return;
            if (n.normalize) {
              var g = n.normalize(h, p, e, t);
              g && ((e = g[0]), (t = g[1]));
            }
          }
        }
        h.push(p);
      }
      "regexp" === u(e) && "regexp" === u(t) && ((e = e.toString()), (t = t.toString()));
      var m = void 0 === e ? "undefined" : P(e),
        v = void 0 === t ? "undefined" : P(t),
        y = "undefined" !== m || (f && f[f.length - 1].lhs && f[f.length - 1].lhs.hasOwnProperty(p)),
        b = "undefined" !== v || (f && f[f.length - 1].rhs && f[f.length - 1].rhs.hasOwnProperty(p));
      if (!y && b) r(new i(h, t));
      else if (!b && y) r(new a(h, e));
      else if (u(e) !== u(t)) r(new o(h, e, t));
      else if ("date" === u(e) && e - t != 0) r(new o(h, e, t));
      else if ("object" === m && null !== e && null !== t)
        if (
          f.filter(function (t) {
            return t.lhs === e;
          }).length
        )
          e !== t && r(new o(h, e, t));
        else {
          if ((f.push({ lhs: e, rhs: t }), Array.isArray(e))) {
            var x;
            for (e.length, x = 0; x < e.length; x++) x >= t.length ? r(new s(h, x, new a(void 0, e[x]))) : c(e[x], t[x], r, n, h, x, f);
            for (; x < t.length; ) r(new s(h, x, new i(void 0, t[x++])));
          } else {
            var w = Object.keys(e),
              E = Object.keys(t);
            w.forEach(function (o, i) {
              var a = E.indexOf(o);
              a >= 0 ? (c(e[o], t[o], r, n, h, o, f), (E = l(E, a))) : c(e[o], void 0, r, n, h, o, f);
            }),
              E.forEach(function (e) {
                c(void 0, t[e], r, n, h, e, f);
              });
          }
          f.length = f.length - 1;
        }
      else e !== t && (("number" === m && isNaN(e) && isNaN(t)) || r(new o(h, e, t)));
    }
    function d(e, t, r, n) {
      return (
        (n = n || []),
        c(
          e,
          t,
          function (e) {
            e && n.push(e);
          },
          r
        ),
        n.length ? n : void 0
      );
    }
    function p(e, t, r) {
      if (r.path && r.path.length) {
        var n,
          o = e[t],
          i = r.path.length - 1;
        for (n = 0; n < i; n++) o = o[r.path[n]];
        switch (r.kind) {
          case "A":
            p(o[r.path[n]], r.index, r.item);
            break;
          case "D":
            delete o[r.path[n]];
            break;
          case "E":
          case "N":
            o[r.path[n]] = r.rhs;
        }
      } else
        switch (r.kind) {
          case "A":
            p(e[t], r.index, r.item);
            break;
          case "D":
            e = l(e, t);
            break;
          case "E":
          case "N":
            e[t] = r.rhs;
        }
      return e;
    }
    function f(e, t, r) {
      if (e && t && r && r.kind) {
        for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i; )
          void 0 === n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), (n = n[r.path[o]]);
        switch (r.kind) {
          case "A":
            p(r.path ? n[r.path[o]] : n, r.index, r.item);
            break;
          case "D":
            delete n[r.path[o]];
            break;
          case "E":
          case "N":
            n[r.path[o]] = r.rhs;
        }
      }
    }
    function h(e, t, r) {
      if (r.path && r.path.length) {
        var n,
          o = e[t],
          i = r.path.length - 1;
        for (n = 0; n < i; n++) o = o[r.path[n]];
        switch (r.kind) {
          case "A":
            h(o[r.path[n]], r.index, r.item);
            break;
          case "D":
          case "E":
            o[r.path[n]] = r.lhs;
            break;
          case "N":
            delete o[r.path[n]];
        }
      } else
        switch (r.kind) {
          case "A":
            h(e[t], r.index, r.item);
            break;
          case "D":
          case "E":
            e[t] = r.lhs;
            break;
          case "N":
            e = l(e, t);
        }
      return e;
    }
    function g(e, t, r) {
      if (e && t && r && r.kind) {
        var n,
          o,
          i = e;
        for (o = r.path.length - 1, n = 0; n < o; n++) void 0 === i[r.path[n]] && (i[r.path[n]] = {}), (i = i[r.path[n]]);
        switch (r.kind) {
          case "A":
            h(i[r.path[n]], r.index, r.item);
            break;
          case "D":
          case "E":
            i[r.path[n]] = r.lhs;
            break;
          case "N":
            delete i[r.path[n]];
        }
      }
    }
    function m(e, t, r) {
      e &&
        t &&
        c(e, t, function (n) {
          (r && !r(e, t, n)) || f(e, t, n);
        });
    }
    function v(e) {
      return "color: " + D[e].color + "; font-weight: bold";
    }
    function y(e) {
      var t = e.kind,
        r = e.path,
        n = e.lhs,
        o = e.rhs,
        i = e.index,
        a = e.item;
      switch (t) {
        case "E":
          return [r.join("."), n, "→", o];
        case "N":
          return [r.join("."), o];
        case "D":
          return [r.join(".")];
        case "A":
          return [r.join(".") + "[" + i + "]", a];
        default:
          return [];
      }
    }
    function b(e, t, r, n) {
      var o = d(e, t);
      try {
        n ? r.groupCollapsed("diff") : r.group("diff");
      } catch (e) {
        r.log("diff");
      }
      o
        ? o.forEach(function (e) {
            var t = e.kind,
              n = y(e);
            r.log.apply(r, ["%c " + D[t].text, v(t)].concat(j(n)));
          })
        : r.log("—— no diff ——");
      try {
        r.groupEnd();
      } catch (e) {
        r.log("—— diff end —— ");
      }
    }
    function x(e, t, r, n) {
      switch (void 0 === e ? "undefined" : P(e)) {
        case "object":
          return "function" == typeof e[n] ? e[n].apply(e, j(r)) : e[n];
        case "function":
          return e(t);
        default:
          return e;
      }
    }
    function w(e) {
      var t = e.timestamp,
        r = e.duration;
      return function (e, n, o) {
        var i = ["action"];
        return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ");
      };
    }
    function E(e, t) {
      var r = t.logger,
        n = t.actionTransformer,
        o = t.titleFormatter,
        i = void 0 === o ? w(t) : o,
        a = t.collapsed,
        s = t.colors,
        l = t.level,
        u = t.diff,
        c = void 0 === t.titleFormatter;
      e.forEach(function (o, d) {
        var p = o.started,
          f = o.startedTime,
          h = o.action,
          g = o.prevState,
          m = o.error,
          v = o.took,
          y = o.nextState,
          w = e[d + 1];
        w && ((y = w.prevState), (v = w.started - p));
        var E = n(h),
          _ =
            "function" == typeof a
              ? a(
                  function () {
                    return y;
                  },
                  h,
                  o
                )
              : a,
          S = T(f),
          O = s.title ? "color: " + s.title(E) + ";" : "",
          k = ["color: gray; font-weight: lighter;"];
        k.push(O), t.timestamp && k.push("color: gray; font-weight: lighter;"), t.duration && k.push("color: gray; font-weight: lighter;");
        var C = i(E, S, v);
        try {
          _
            ? s.title && c
              ? r.groupCollapsed.apply(r, ["%c " + C].concat(k))
              : r.groupCollapsed(C)
            : s.title && c
            ? r.group.apply(r, ["%c " + C].concat(k))
            : r.group(C);
        } catch (e) {
          r.log(C);
        }
        var R = x(l, E, [g], "prevState"),
          P = x(l, E, [E], "action"),
          j = x(l, E, [m, g], "error"),
          M = x(l, E, [y], "nextState");
        if (R)
          if (s.prevState) {
            var D = "color: " + s.prevState(g) + "; font-weight: bold";
            r[R]("%c prev state", D, g);
          } else r[R]("prev state", g);
        if (P)
          if (s.action) {
            var L = "color: " + s.action(E) + "; font-weight: bold";
            r[P]("%c action    ", L, E);
          } else r[P]("action    ", E);
        if (m && j)
          if (s.error) {
            var A = "color: " + s.error(m, g) + "; font-weight: bold;";
            r[j]("%c error     ", A, m);
          } else r[j]("error     ", m);
        if (M)
          if (s.nextState) {
            var N = "color: " + s.nextState(y) + "; font-weight: bold";
            r[M]("%c next state", N, y);
          } else r[M]("next state", y);
        u && b(g, y, r, _);
        try {
          r.groupEnd();
        } catch (e) {
          r.log("—— log end ——");
        }
      });
    }
    function _() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = Object.assign({}, L, e),
        r = t.logger,
        n = t.stateTransformer,
        o = t.errorTransformer,
        i = t.predicate,
        a = t.logErrors,
        s = t.diffPredicate;
      if (void 0 === r)
        return function () {
          return function (e) {
            return function (t) {
              return e(t);
            };
          };
        };
      if (e.getState && e.dispatch)
        return (
          console.error(
            "[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"
          ),
          function () {
            return function (e) {
              return function (t) {
                return e(t);
              };
            };
          }
        );
      var l = [];
      return function (e) {
        var r = e.getState;
        return function (e) {
          return function (u) {
            if ("function" == typeof i && !i(r, u)) return e(u);
            var c = {};
            l.push(c), (c.started = R.now()), (c.startedTime = new Date()), (c.prevState = n(r())), (c.action = u);
            var d = void 0;
            if (a)
              try {
                d = e(u);
              } catch (e) {
                c.error = o(e);
              }
            else d = e(u);
            (c.took = R.now() - c.started), (c.nextState = n(r()));
            var p = t.diff && "function" == typeof s ? s(r, u) : t.diff;
            if ((E(l, Object.assign({}, t, { diff: p })), (l.length = 0), c.error)) throw c.error;
            return d;
          };
        };
      };
    }
    var S,
      O,
      k = function (e, t) {
        return new Array(t + 1).join(e);
      },
      C = function (e, t) {
        return k("0", t - e.toString().length) + e;
      },
      T = function (e) {
        return C(e.getHours(), 2) + ":" + C(e.getMinutes(), 2) + ":" + C(e.getSeconds(), 2) + "." + C(e.getMilliseconds(), 3);
      },
      R = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
      P =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            },
      j = function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
          return r;
        }
        return Array.from(e);
      },
      M = [];
    (S = "object" === (void 0 === t ? "undefined" : P(t)) && t ? t : "undefined" != typeof window ? window : {}),
      (O = S.DeepDiff) &&
        M.push(function () {
          void 0 !== O && S.DeepDiff === d && ((S.DeepDiff = O), (O = void 0));
        }),
      r(o, n),
      r(i, n),
      r(a, n),
      r(s, n),
      Object.defineProperties(d, {
        diff: { value: d, enumerable: !0 },
        observableDiff: { value: c, enumerable: !0 },
        applyDiff: { value: m, enumerable: !0 },
        applyChange: { value: f, enumerable: !0 },
        revertChange: { value: g, enumerable: !0 },
        isConflict: {
          value: function () {
            return void 0 !== O;
          },
          enumerable: !0
        },
        noConflict: {
          value: function () {
            return (
              M &&
                (M.forEach(function (e) {
                  e();
                }),
                (M = null)),
              d
            );
          },
          enumerable: !0
        }
      });
    var D = {
        E: { color: "#2196F3", text: "CHANGED:" },
        N: { color: "#4CAF50", text: "ADDED:" },
        D: { color: "#F44336", text: "DELETED:" },
        A: { color: "#2196F3", text: "ARRAY:" }
      },
      L = {
        level: "log",
        logger: console,
        logErrors: !0,
        collapsed: void 0,
        predicate: void 0,
        duration: !1,
        timestamp: !0,
        stateTransformer: function (e) {
          return e;
        },
        actionTransformer: function (e) {
          return e;
        },
        errorTransformer: function (e) {
          return e;
        },
        colors: {
          title: function () {
            return "inherit";
          },
          prevState: function () {
            return "#9E9E9E";
          },
          action: function () {
            return "#03A9F4";
          },
          nextState: function () {
            return "#4CAF50";
          },
          error: function () {
            return "#F20404";
          }
        },
        diff: !1,
        diffPredicate: void 0,
        transformer: void 0
      },
      A = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.dispatch,
          r = e.getState;
        return "function" == typeof t || "function" == typeof r
          ? _()({ dispatch: t, getState: r })
          : void console.error(
              "\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n"
            );
      };
    (e.defaults = L), (e.createLogger = _), (e.logger = A), (e.default = A), Object.defineProperty(e, "__esModule", { value: !0 });
  })(Ur);
  var Br =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
  function zr(e) {
    return null !== e && "object" === (void 0 === e ? "undefined" : Br(e)) && e && "function" == typeof e.then;
  }
  var Wr = a("jhCkN"),
    qr = function (e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e))
        return (function (e, t) {
          var r = [],
            n = !0,
            o = !1,
            i = void 0;
          try {
            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              !n && s.return && s.return();
            } finally {
              if (o) throw i;
            }
          }
          return r;
        })(e, t);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    },
    Vr =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    Yr = { Pending: "PENDING", Fulfilled: "FULFILLED", Rejected: "REJECTED" };
  function $r() {
    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).dispatch;
    return "function" == typeof e
      ? (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = [Yr.Pending, Yr.Fulfilled, Yr.Rejected],
            r = e.promiseTypeSuffixes || t,
            n = e.promiseTypeDelimiter || "_";
          return function (e) {
            var t = e.dispatch;
            return function (e) {
              return function (o) {
                var i = void 0,
                  a = void 0;
                if (!o.payload) return e(o);
                var s = o.payload;
                if (zr(s)) i = s;
                else if (zr(s.promise)) (i = s.promise), (a = s.data);
                else {
                  if ("function" != typeof s && "function" != typeof s.promise) return e(o);
                  if (((i = s.promise ? s.promise() : s()), (a = s.promise ? s.data : void 0), !zr(i))) return e(Vr({}, o, { payload: i }));
                }
                var l = o.type,
                  u = o.meta,
                  c = qr(r, 3),
                  d = c[0],
                  p = c[1],
                  f = c[2],
                  h = function (e, t) {
                    return Vr(
                      { type: [l, t ? f : p].join(n) },
                      null == e ? {} : { payload: e },
                      void 0 !== u ? { meta: u } : {},
                      t ? { error: !0 } : {}
                    );
                  };
                return (
                  e(Vr({ type: [l, d].join(n) }, void 0 !== a ? { payload: a } : {}, void 0 !== u ? { meta: u } : {})),
                  i.then(
                    function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        r = h(e, !1);
                      return t(r), { value: e, action: r };
                    },
                    function (e) {
                      var r = h(e, !0);
                      throw (t(r), e);
                    }
                  )
                );
              };
            };
          };
        })()({ dispatch: e })
      : (Wr && Wr.env, null);
  }
  var Gr = {};
  Object.defineProperty(Gr, "__esModule", { value: !0 });
  var Kr = {};
  Object.defineProperty(Kr, "__esModule", { value: !0 });
  var Xr = (Kr.ActionTypes = {
    UNDO: "@@redux-undo/UNDO",
    REDO: "@@redux-undo/REDO",
    JUMP_TO_FUTURE: "@@redux-undo/JUMP_TO_FUTURE",
    JUMP_TO_PAST: "@@redux-undo/JUMP_TO_PAST",
    JUMP: "@@redux-undo/JUMP",
    CLEAR_HISTORY: "@@redux-undo/CLEAR_HISTORY"
  });
  Kr.ActionCreators = {
    undo: function () {
      return { type: Xr.UNDO };
    },
    redo: function () {
      return { type: Xr.REDO };
    },
    jumpToFuture: function (e) {
      return { type: Xr.JUMP_TO_FUTURE, index: e };
    },
    jumpToPast: function (e) {
      return { type: Xr.JUMP_TO_PAST, index: e };
    },
    jump: function (e) {
      return { type: Xr.JUMP, index: e };
    },
    clearHistory: function () {
      return { type: Xr.CLEAR_HISTORY };
    }
  };
  Object.defineProperty(Gr, "ActionTypes", {
    enumerable: !0,
    get: function () {
      return Kr.ActionTypes;
    }
  }),
    Object.defineProperty(Gr, "ActionCreators", {
      enumerable: !0,
      get: function () {
        return Kr.ActionCreators;
      }
    });
  var Zr = {};
  function Jr(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return Array.isArray(e) ? e : "string" == typeof e ? [e] : t;
  }
  Object.defineProperty(Zr, "__esModule", { value: !0 }),
    (Zr.parseActions = Jr),
    (Zr.isHistory = function (e) {
      return void 0 !== e.present && void 0 !== e.future && void 0 !== e.past && Array.isArray(e.future) && Array.isArray(e.past);
    }),
    (Zr.distinctState = function () {
      return (
        console.warn(
          "distinctState is deprecated in beta4 and newer. The distinctState behavior is now default, which means only actions resulting in a new state are recorded. See https://github.com/omnidan/redux-undo#filtering-actions for more details."
        ),
        function () {
          return !0;
        }
      );
    }),
    (Zr.includeAction = function (e) {
      var t = Jr(e);
      return function (e) {
        return t.indexOf(e.type) >= 0;
      };
    }),
    (Zr.excludeAction = function (e) {
      var t = Jr(e);
      return function (e) {
        return t.indexOf(e.type) < 0;
      };
    }),
    (Zr.combineFilters = function () {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return t.reduce(
        function (e, t) {
          return function (r, n, o) {
            return e(r, n, o) && t(r, n, o);
          };
        },
        function () {
          return !0;
        }
      );
    }),
    (Zr.groupByActionTypes = function (e) {
      var t = Jr(e);
      return function (e) {
        return t.indexOf(e.type) >= 0 ? e.type : null;
      };
    }),
    (Zr.newHistory = function (e, t, r) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      return { past: e, present: t, future: r, group: n, _latestUnfiltered: t, index: e.length, limit: e.length + r.length + 1 };
    }),
    Object.defineProperty(Gr, "parseActions", {
      enumerable: !0,
      get: function () {
        return Zr.parseActions;
      }
    }),
    Object.defineProperty(Gr, "isHistory", {
      enumerable: !0,
      get: function () {
        return Zr.isHistory;
      }
    }),
    Object.defineProperty(Gr, "distinctState", {
      enumerable: !0,
      get: function () {
        return Zr.distinctState;
      }
    }),
    Object.defineProperty(Gr, "includeAction", {
      enumerable: !0,
      get: function () {
        return Zr.includeAction;
      }
    }),
    Object.defineProperty(Gr, "excludeAction", {
      enumerable: !0,
      get: function () {
        return Zr.excludeAction;
      }
    }),
    Object.defineProperty(Gr, "combineFilters", {
      enumerable: !0,
      get: function () {
        return Zr.combineFilters;
      }
    }),
    Object.defineProperty(Gr, "groupByActionTypes", {
      enumerable: !0,
      get: function () {
        return Zr.groupByActionTypes;
      }
    }),
    Object.defineProperty(Gr, "newHistory", {
      enumerable: !0,
      get: function () {
        return Zr.newHistory;
      }
    });
  var Qr = {};
  Object.defineProperty(Qr, "__esModule", { value: !0 });
  var en =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    };
  Qr.default = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ln.set(t.debug);
    var r = {
        initTypes: (0, Zr.parseActions)(t.initTypes, ["@@redux-undo/INIT"]),
        limit: t.limit,
        filter:
          t.filter ||
          function () {
            return !0;
          },
        groupBy:
          t.groupBy ||
          function () {
            return null;
          },
        undoType: t.undoType || Kr.ActionTypes.UNDO,
        redoType: t.redoType || Kr.ActionTypes.REDO,
        jumpToPastType: t.jumpToPastType || Kr.ActionTypes.JUMP_TO_PAST,
        jumpToFutureType: t.jumpToFutureType || Kr.ActionTypes.JUMP_TO_FUTURE,
        jumpType: t.jumpType || Kr.ActionTypes.JUMP,
        clearHistoryType: Array.isArray(t.clearHistoryType) ? t.clearHistoryType : [t.clearHistoryType || Kr.ActionTypes.CLEAR_HISTORY],
        neverSkipReducer: t.neverSkipReducer || !1,
        ignoreInitialState: t.ignoreInitialState || !1,
        syncFilter: t.syncFilter || !1
      },
      n = r.history;
    return function () {
      for (var t = arguments.length, o = Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++) o[i - 2] = arguments[i];
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      ln.start(s, a);
      var l = a;
      if (!n)
        if ((ln.log("history is uninitialized"), void 0 === a)) {
          var u = { type: Kr.ActionTypes.CLEAR_HISTORY };
          (l = cn(e.apply(void 0, [a, u].concat(o)), r.ignoreInitialState)), ln.log("do not set initialState on probe actions");
        } else
          (0, Zr.isHistory)(a)
            ? ((l = n = r.ignoreInitialState ? a : (0, Zr.newHistory)(a.past, a.present, a.future)),
              ln.log("initialHistory initialized: initialState is a history", n))
            : ((l = n = cn(a, r.ignoreInitialState)), ln.log("initialHistory initialized: initialState is not a history", n));
      var c,
        d = function (t) {
          return r.neverSkipReducer ? en({}, t, { present: e.apply(void 0, [t.present, s].concat(o)) }) : t;
        },
        p = void 0;
      switch (s.type) {
        case void 0:
          return l;
        case r.undoType:
          return (p = hn(l, -1)), ln.log("perform undo"), ln.end(p), d(p);
        case r.redoType:
          return (p = hn(l, 1)), ln.log("perform redo"), ln.end(p), d(p);
        case r.jumpToPastType:
          return (p = fn(l, s.index)), ln.log("perform jumpToPast to " + s.index), ln.end(p), d(p);
        case r.jumpToFutureType:
          return (p = pn(l, s.index)), ln.log("perform jumpToFuture to " + s.index), ln.end(p), d(p);
        case r.jumpType:
          return (p = hn(l, s.index)), ln.log("perform jump to " + s.index), ln.end(p), d(p);
        case ((c = s.type), r.clearHistoryType.indexOf(c) > -1 ? c : !c):
          return (p = cn(l.present)), ln.log("perform clearHistory"), ln.end(p), d(p);
        default:
          if (
            ((p = e.apply(void 0, [l.present, s].concat(o))),
            r.initTypes.some(function (e) {
              return e === s.type;
            }))
          )
            return ln.log("reset history due to init action"), ln.end(n), n;
          if (l._latestUnfiltered === p) return l;
          var f = "function" == typeof r.filter && !r.filter(s, p, l),
            h = r.groupBy(s, p, l);
          if (f) {
            var g = (0, Zr.newHistory)(l.past, p, l.future, l.group);
            return (
              r.syncFilter || (g._latestUnfiltered = l._latestUnfiltered),
              ln.log("filter ignored action, not storing it in past"),
              ln.end(g),
              g
            );
          }
          if (null != h && h === l.group) {
            var m = (0, Zr.newHistory)(l.past, p, l.future, l.group);
            return ln.log("groupBy grouped the action with the previous action"), ln.end(m), m;
          }
          return (
            (l = (function (e, t, r, n) {
              ln.log("inserting", t), ln.log("new free: ", r - dn(e));
              var o = e.past,
                i = e._latestUnfiltered,
                a = r && dn(e) >= r,
                s = o.slice(a ? 1 : 0),
                l = null != i ? [].concat(un(s), [i]) : s;
              return (0, Zr.newHistory)(l, t, [], n);
            })(l, p, r.limit, h)),
            ln.log("inserted new state into history"),
            ln.end(l),
            l
          );
      }
    };
  };
  var tn = {};
  function rn(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
      return r;
    }
    return Array.from(e);
  }
  Object.defineProperty(tn, "__esModule", { value: !0 });
  var nn = void 0,
    on = void 0,
    an = { prevState: "#9E9E9E", action: "#03A9F4", nextState: "#4CAF50" };
  function sn(e, t, r) {
    return ["%c" + e, "color: " + t + "; font-weight: bold", r];
  }
  (tn.set = function (e) {
    nn = e;
  }),
    (tn.start = function (e, t) {
      (on = { header: [], prev: [], action: [], next: [], msgs: [] }),
        nn &&
          (console.group
            ? ((on.header = ["%credux-undo", "font-style: italic", "action", e.type]),
              (on.action = sn("action", an.action, e)),
              (on.prev = sn("prev history", an.prevState, t)))
            : ((on.header = ["redux-undo action", e.type]), (on.action = ["action", e]), (on.prev = ["prev history", t])));
    }),
    (tn.end = function (e) {
      var t, r, n, o, i, a, s, l, u, c, d, p, f, h, g, m;
      nn &&
        (console.group ? (on.next = sn("next history", an.nextState, e)) : (on.next = ["next history", e]),
        (p = (d = on).header),
        (f = d.prev),
        (h = d.next),
        (g = d.action),
        (m = d.msgs),
        console.group
          ? ((t = console).groupCollapsed.apply(t, rn(p)),
            (r = console).log.apply(r, rn(f)),
            (n = console).log.apply(n, rn(g)),
            (o = console).log.apply(o, rn(h)),
            (i = console).log.apply(i, rn(m)),
            console.groupEnd())
          : ((a = console).log.apply(a, rn(p)),
            (s = console).log.apply(s, rn(f)),
            (l = console).log.apply(l, rn(g)),
            (u = console).log.apply(u, rn(h)),
            (c = console).log.apply(c, rn(m))));
    }),
    (tn.log = function () {
      if (nn) {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        on.msgs = on.msgs.concat([].concat(t, ["\n"]));
      }
    });
  var ln = (function (e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return (t.default = e), t;
  })(tn);
  function un(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
      return r;
    }
    return Array.from(e);
  }
  function cn(e, t) {
    var r = (0, Zr.newHistory)([], e, []);
    return t && (r._latestUnfiltered = null), r;
  }
  function dn(e) {
    return e.past.length + 1;
  }
  function pn(e, t) {
    if (t < 0 || t >= e.future.length) return e;
    var r = e.past,
      n = e.future,
      o = e._latestUnfiltered,
      i = [].concat(un(r), [o], un(n.slice(0, t))),
      a = n[t],
      s = n.slice(t + 1);
    return (0, Zr.newHistory)(i, a, s);
  }
  function fn(e, t) {
    if (t < 0 || t >= e.past.length) return e;
    var r = e.past,
      n = e.future,
      o = e._latestUnfiltered,
      i = r.slice(0, t),
      a = [].concat(un(r.slice(t + 1)), [o], un(n)),
      s = r[t];
    return (0, Zr.newHistory)(i, s, a);
  }
  function hn(e, t) {
    return t > 0 ? pn(e, t - 1) : t < 0 ? fn(e, e.past.length + t) : e;
  }
  (Qr = Qr.default),
    Object.defineProperty(Gr, "default", {
      enumerable: !0,
      get: function () {
        return ((e = Qr), e && e.__esModule ? e : { default: e }).default;
        var e;
      }
    });
  me = a("2z2pA");
  var gn = a("hDtYW");
  const mn = {},
    vn = "base/LOAD_FULFILLED",
    yn = "base/LOAD_REJECTED";
  const bn = (e, t, r, n) => ({
      type: "base/LOAD",
      payload: (0, gn.loadImage)(e).then((e) => {
        let o = e.img,
          i = e.src,
          a = e.width,
          s = e.height;
        return (a /= t), (s /= t), { img: o, src: i, width: a, height: s, pixelDensity: t, url: r, title: n };
      })
    }),
    xn = { error: null, prevError: null },
    wn = "error/ERROR_SET",
    En = "error/ERROR_CLEAR";
  const _n = (e) => ({ type: wn, payload: e });
  (de = a("jBCXK")), (Ue = a("hGGFE"));
  var Sn = a("5Xemj"),
    On = ((je = a("fueUa")), a("1AJdn"));
  (s = a("7b0kr")),
    (pe = a("ff4Ef")),
    (s = a("7b0kr")),
    (s = a("7b0kr")),
    (s = a("7b0kr")),
    (s = a("7b0kr")),
    (s = a("7b0kr")),
    (ce = a("iPbYd")),
    (pe = a("ff4Ef")),
    (s = a("7b0kr"));
  const kn = n((d = a("3pr9z"))).string;
  var Cn = {
    color: kn,
    shapeKey: n(d).string.isRequired,
    box: n(d).shape({
      x: n(d).number.isRequired,
      y: n(d).number.isRequired,
      width: n(d).number.isRequired,
      height: n(d).number.isRequired
    }),
    line: n(d).shape({ x1: n(d).number.isRequired, y1: n(d).number.isRequired, x2: n(d).number.isRequired, y2: n(d).number.isRequired }),
    text: n(d).shape({ text: n(d).string, autoHeight: n(d).bool }),
    font: n(d).shape({ size: n(d).number.isRequired, fontFamily: n(d).string.isRequired, bold: n(d).boolean, italic: n(d).boolean }),
    fill: n(d).shape({ fill: kn }),
    stroke: n(d).shape({ width: n(d).number, color: kn }),
    corners: n(d).shape({ radius: n(d).number }),
    icon: n(d).shape({
      src1x: n(d).string.isRequired,
      src2x: n(d).string.isRequired,
      width: n(d).number.isRequired,
      height: n(d).number.isRequired
    }),
    editor: n(d).shape({
      zoom: n(d).number,
      selectedLayerIds: n(d).arrayOf(n(d).string.isRequired).isRequired,
      hoveringLayerId: n(d).string
    })
  };
  const Tn = (e) => {
    let t = e.x1,
      r = e.y1,
      n = e.x2,
      o = e.y2,
      i = Math.abs(n - t),
      a = Math.abs(o - r);
    return { x: Math.min(n, t), y: Math.min(o, r), width: i, height: a };
  };
  (ce = a("iPbYd")), (d = a("3pr9z")), (s = a("7b0kr"));
  class Rn extends s.Component {
    componentDidMount() {
      this.props.onFinishedComponentMount();
    }
  }
  (0, ce.default)(Rn, "propTypes", { onFinishedComponentMount: n(d).func.isRequired });
  class Pn extends s.PureComponent {
    componentDidMount() {
      this.props.onFinishedComponentMount();
    }
  }
  (0, ce.default)(Pn, "propTypes", { onFinishedComponentMount: n(d).func.isRequired });
  const jn = ["x1", "y1", "x2", "y2"];
  class Mn extends Rn {
    render() {
      let e = this.props,
        t = e.line,
        r = e.stroke,
        o = r.width || 0,
        i = r.color || "none",
        a = Math.ceil(2 * o) + 20,
        l = -a,
        u = -a,
        c = Tn(t),
        d = c.width,
        p = c.height,
        f = c.x + l,
        h = c.y + u,
        g = (0, pe.default)(
          jn.map((e, r) => t[e] - (r % 2 == 0 ? f : h)),
          4
        ),
        m = g[0],
        v = g[1],
        y = g[2],
        b = g[3],
        x = { position: "absolute", left: `${l}px`, top: `${u}px`, width: `${d + 2 * a}px`, height: `${p + 2 * a}px` },
        w = 2.8 * o,
        E = Math.atan((b - v) / (y - m)),
        _ = y - (y < m ? -1 : 1) * w * Math.cos(E),
        S = b - (y < m ? -1 : 1) * w * Math.sin(E),
        O = 0.5 * w,
        k = `${_ + O * Math.cos(E - Math.PI / 2)} ${S + O * Math.sin(E - Math.PI / 2)} ${y} ${b} ${_ + O * Math.cos(E + Math.PI / 2)} ${
          S + O * Math.sin(E + Math.PI / 2)
        }`;
      return n(s).createElement(
        "svg",
        { style: x },
        n(s).createElement("line", { x1: m, y1: v, x2: _, y2: S, stroke: i, strokeWidth: o, strokeLinecap: "round" }),
        n(s).createElement("polygon", { stroke: "none", fill: i, points: k })
      );
    }
  }
  (0, ce.default)(Mn, "propTypes", { line: Cn.line, stroke: Cn.stroke });
  (d = a("3pr9z")), (s = a("7b0kr"));
  function Dn(e) {
    return (
      (Dn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }),
      Dn(e)
    );
  }
  /**
   * StackBlur - a fast almost Gaussian Blur For Canvas
   *
   * In case you find this class useful - especially in commercial projects -
   * I am not totally unhappy for a small donation to my PayPal account
   * mario@quasimondo.de
   *
   * Or support me on flattr:
   * {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
   *
   * @module StackBlur
   * @author Mario Klingemann
   * Contact: mario@quasimondo.com
   * Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
   * Twitter: @quasimondo
   *
   * @copyright (c) 2010 Mario Klingemann
   *
   * Permission is hereby granted, free of charge, to any person
   * obtaining a copy of this software and associated documentation
   * files (the "Software"), to deal in the Software without
   * restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the
   * Software is furnished to do so, subject to the following
   * conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
   * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
   * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
   * OTHER DEALINGS IN THE SOFTWARE.
   */
  var Ln = [
      512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360,
      335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360,
      347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320,
      312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360,
      354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461,
      454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320,
      316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470,
      465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360,
      357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285,
      282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259
    ],
    An = [
      9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21,
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
      22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
      23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
      23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
      24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
      24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24
    ];
  function Nn(e, t, r, n, o) {
    if (("string" == typeof e && (e = document.getElementById(e)), !e || "object" !== Dn(e) || !("getContext" in e)))
      throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
    var i = e.getContext("2d");
    try {
      return i.getImageData(t, r, n, o);
    } catch (e) {
      throw new Error("unable to access image data: " + e);
    }
  }
  function In(e, t, r, n, o, i) {
    if (!(isNaN(i) || i < 1)) {
      i |= 0;
      var a = Nn(e, t, r, n, o);
      (a = (function (e, t, r, n, o, i) {
        for (
          var a, s = e.data, l = 2 * i + 1, u = n - 1, c = o - 1, d = i + 1, p = (d * (d + 1)) / 2, f = new Hn(), h = f, g = 1;
          g < l;
          g++
        )
          (h = h.next = new Hn()), g === d && (a = h);
        h.next = f;
        for (var m, v, y = null, b = null, x = Ln[i], w = An[i], E = 0, _ = 0, S = 0; S < o; S++) {
          var O = s[_],
            k = s[_ + 1],
            C = s[_ + 2],
            T = d * O,
            R = d * k,
            P = d * C,
            j = p * O,
            M = p * k,
            D = p * C;
          h = f;
          for (var L = 0; L < d; L++) (h.r = O), (h.g = k), (h.b = C), (h = h.next);
          for (var A = 0, N = 0, I = 0, H = 1; H < d; H++)
            (m = _ + ((u < H ? u : H) << 2)),
              (j += (h.r = O = s[m]) * (v = d - H)),
              (M += (h.g = k = s[m + 1]) * v),
              (D += (h.b = C = s[m + 2]) * v),
              (A += O),
              (N += k),
              (I += C),
              (h = h.next);
          (y = f), (b = a);
          for (var F = 0; F < n; F++)
            (s[_] = (j * x) >> w),
              (s[_ + 1] = (M * x) >> w),
              (s[_ + 2] = (D * x) >> w),
              (j -= T),
              (M -= R),
              (D -= P),
              (T -= y.r),
              (R -= y.g),
              (P -= y.b),
              (m = (E + ((m = F + i + 1) < u ? m : u)) << 2),
              (j += A += y.r = s[m]),
              (M += N += y.g = s[m + 1]),
              (D += I += y.b = s[m + 2]),
              (y = y.next),
              (T += O = b.r),
              (R += k = b.g),
              (P += C = b.b),
              (A -= O),
              (N -= k),
              (I -= C),
              (b = b.next),
              (_ += 4);
          E += n;
        }
        for (var U = 0; U < n; U++) {
          var B = s[(_ = U << 2)],
            z = s[_ + 1],
            W = s[_ + 2],
            q = d * B,
            V = d * z,
            Y = d * W,
            $ = p * B,
            G = p * z,
            K = p * W;
          h = f;
          for (var X = 0; X < d; X++) (h.r = B), (h.g = z), (h.b = W), (h = h.next);
          for (var Z = 0, J = 0, Q = 0, ee = 1, te = n; ee <= i; ee++)
            (_ = (te + U) << 2),
              ($ += (h.r = B = s[_]) * (v = d - ee)),
              (G += (h.g = z = s[_ + 1]) * v),
              (K += (h.b = W = s[_ + 2]) * v),
              (Z += B),
              (J += z),
              (Q += W),
              (h = h.next),
              ee < c && (te += n);
          (_ = U), (y = f), (b = a);
          for (var re = 0; re < o; re++)
            (s[(m = _ << 2)] = ($ * x) >> w),
              (s[m + 1] = (G * x) >> w),
              (s[m + 2] = (K * x) >> w),
              ($ -= q),
              (G -= V),
              (K -= Y),
              (q -= y.r),
              (V -= y.g),
              (Y -= y.b),
              (m = (U + ((m = re + d) < c ? m : c) * n) << 2),
              ($ += Z += y.r = s[m]),
              (G += J += y.g = s[m + 1]),
              (K += Q += y.b = s[m + 2]),
              (y = y.next),
              (q += B = b.r),
              (V += z = b.g),
              (Y += W = b.b),
              (Z -= B),
              (J -= z),
              (Q -= W),
              (b = b.next),
              (_ += n);
        }
        return e;
      })(a, 0, 0, n, o, i)),
        e.getContext("2d").putImageData(a, t, r);
    }
  }
  var Hn = function e() {
    !(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    })(this, e),
      (this.r = 0),
      (this.g = 0),
      (this.b = 0),
      (this.a = 0),
      (this.next = null);
  };
  class Fn extends Pn {
    componentDidMount() {
      this._renderCanvas(), super.componentDidMount();
    }
    componentDidUpdate() {
      this._renderCanvas();
    }
    _renderCanvas() {
      let e = this.canvasRef.current;
      if (e) {
        let t = this.props,
          r = t.base,
          n = t.basePixelDensity,
          o = t.box,
          i = (t.text, e.getContext("2d"));
        i.save(), i.scale(n, n), i.drawImage(r.img, o.x * n, o.y * n, o.width * n, o.height * n, 0, 0, o.width, o.height), i.restore();
        let a = this.props.blur.radius;
        null == a && (a = 5), e.width && e.width > 0 && e.height && e.height > 0 && In(e, 0, 0, e.width, e.height, a * n);
      }
    }
    render() {
      let e = this.props,
        t = e.basePixelDensity,
        r = e.box,
        o = { position: "absolute", left: "0", top: "0", width: `${r.width}px`, height: `${r.height}px` };
      return n(s).createElement("canvas", { style: o, width: r.width * t, height: r.height * t, ref: this.canvasRef });
    }
    constructor(e) {
      super(e), (this.canvasRef = n(s).createRef());
    }
  }
  Fn.propTypes = {
    base: n(d).object.isRequired,
    basePixelDensity: n(d).number.isRequired,
    box: Cn.box,
    blur: n(d).shape({ radius: n(d).number })
  };
  var Un = Fn,
    Bn = ((ce = a("iPbYd")), (d = a("3pr9z")), (s = a("7b0kr")), a("5Gpcw")),
    zn = ((je = a("fueUa")), a("fDLJ6"));
  class Wn extends Pn {
    componentDidMount() {
      this._renderCanvas(), super.componentDidMount();
    }
    componentDidUpdate() {
      this._renderCanvas();
    }
    _renderCanvas() {
      let e = this.canvasRef.current;
      if (e) {
        let t = this.props,
          r = (t.basePixelDensity, t.text),
          n = e.width,
          o = e.height,
          i = o * ((0, Bn.getIsMac)() ? 1 : 0.8);
        const a = 40;
        if (i < a) {
          const e = -6;
          (i = (i * (a - e)) / a + e), (i = Math.max(1, i));
        }
        const s = e.getContext("2d");
        s.save(),
          s.clearRect(0, 0, n, o),
          (s.textBaseline = "middle"),
          (s.textAlign = "center"),
          (s.font = `${i}px ${je.FONT_FAMILY_EMOJIS}`),
          s.fillText(r.text, n / 2, o / 2 + 0.1 * o),
          s.restore();
      }
    }
    render() {
      let e = this.props,
        t = e.basePixelDensity,
        r = e.box,
        o = { position: "absolute", left: "0", top: "0", width: `${r.width}px`, height: `${r.height}px` },
        i = r.width * t,
        a = r.height * t;
      return (
        -1 !== this.emojiMaxSize && a > this.emojiMaxSize && ((i = (i * this.emojiMaxSize) / a), (a = this.emojiMaxSize)),
        n(s).createElement("canvas", { style: o, width: i, height: a, ref: this.canvasRef })
      );
    }
    constructor(e) {
      super(e), (this.canvasRef = n(s).createRef()), (this.emojiMaxSize = (0, zn.getEmojiMaxSize)());
    }
  }
  (0, ce.default)(Wn, "propTypes", { basePixelDensity: n(d).number.isRequired, box: Cn.box, text: Cn.text });
  var qn = Wn;
  (ce = a("iPbYd")), (d = a("3pr9z")), (s = a("7b0kr"));
  class Vn extends Pn {
    render() {
      const e = this.props,
        t = e.basePixelDensity,
        r = e.box,
        o = e.icon,
        i = t >= 2 ? o.src2x : o.src1x,
        a = r.width,
        l = r.height,
        u = { position: "relative", left: 0, top: 0, width: `${a}px`, height: `${l}px` },
        c = { position: "absolute", left: "0", top: "0", width: `${a}px`, height: `${l}px`, pointerEvents: "none" };
      return n(s).createElement("div", { className: "draggable", style: u }, n(s).createElement("img", { style: c, src: i }));
    }
  }
  (0, ce.default)(Vn, "propTypes", { basePixelDensity: n(d).number.isRequired, box: Cn.box, icon: Cn.icon });
  var Yn = Vn;
  (ce = a("iPbYd")), (s = a("7b0kr"));
  class $n extends Rn {
    render() {
      let e = this.props,
        t = e.line,
        r = e.stroke,
        o = t.x1,
        i = t.y1,
        a = t.x2,
        l = t.y2,
        u = Tn(t),
        c = r.width || 0,
        d = Math.ceil(0.8 * c),
        p = -d,
        f = -d,
        h = u.width,
        g = u.height,
        m = u.x + p,
        v = u.y + f,
        y = { position: "absolute", left: `${p}px`, top: `${f}px`, width: `${h + 2 * d}px`, height: `${g + 2 * d}px` };
      return n(s).createElement(
        "svg",
        { style: y },
        n(s).createElement("line", { x1: o - m, y1: i - v, x2: a - m, y2: l - v, stroke: r.color || "transparent", strokeWidth: c })
      );
    }
  }
  (0, ce.default)($n, "propTypes", { line: Cn.line, stroke: Cn.stroke });
  (ce = a("iPbYd")), (s = a("7b0kr"));
  class Gn extends Rn {
    render() {
      let e = this.props,
        t = e.box,
        r = e.fill,
        o = e.stroke,
        i = t.width,
        a = t.height,
        l = o.width || 0,
        u = l / 2,
        c = { position: "absolute", left: `${-u}px`, top: `${-u}px`, width: `${i + 2 * u}px`, height: `${a + 2 * u}px` },
        d = i / 2,
        p = a / 2,
        f = u + d,
        h = u + p;
      return n(s).createElement(
        "svg",
        { style: c },
        n(s).createElement("ellipse", {
          cx: f,
          cy: h,
          rx: d,
          ry: p,
          stroke: o.color || "transparent",
          fill: r.fill || "transparent",
          strokeWidth: l
        })
      );
    }
  }
  (0, ce.default)(Gn, "propTypes", { box: Cn.box, fill: Cn.fill, stroke: Cn.stroke });
  (ce = a("iPbYd")), (s = a("7b0kr"));
  class Kn extends Rn {
    render() {
      let e = this.props,
        t = e.box,
        r = e.fill,
        o = e.stroke,
        i = e.corners,
        a = t.width,
        l = t.height,
        u = (o && o.width) || 0,
        c = (i && i.radius) || 0,
        d = Math.ceil(u / 2),
        p = { position: "absolute", left: -d + "px", top: -d + "px", width: `${a + 2 * d}px`, height: `${l + 2 * d}px` };
      return n(s).createElement(
        "svg",
        { style: p },
        n(s).createElement("rect", {
          x: d,
          y: d,
          rx: c,
          ry: c,
          width: a,
          height: l,
          style: { fill: (r && r.fill) || "transparent", stroke: (o && o.color) || "transparent", strokeWidth: u }
        })
      );
    }
  }
  (0, ce.default)(Kn, "propTypes", { box: Cn.box.isRequired, fill: Cn.fill, stroke: Cn.stroke, corners: Cn.corners });
  (ce = a("iPbYd")), (d = a("3pr9z")), (s = a("7b0kr")), (me = a("2z2pA")), (Sn = a("5Xemj")), (je = a("fueUa")), (On = a("1AJdn"));
  const Xn = "bool",
    Zn = "string",
    Jn = "color",
    Qn = "positive-integer",
    eo = "number",
    to = "font",
    ro = "textarea",
    no = "color",
    oo = "font",
    io = "flat-select",
    ao = "left",
    so = "center",
    lo = "right",
    uo = {
      [Xn]: { convert: (e) => Boolean(e), inputType: "checkbox", valueAttr: "checked" },
      [Zn]: { convert: (e) => e || "", inputType: "text" },
      [Jn]: { convert: (e) => e || "", inputType: "text" },
      [to]: { convert: (e) => e || je.FONT_FAMILY_HELVETICA, inputType: "text" },
      [Qn]: {
        convert: (e) => {
          const t = parseFloat(e);
          return isNaN(t) || t < 0 ? 0 : t;
        },
        inputType: "number"
      },
      [eo]: {
        convert: (e) => {
          const t = parseFloat(e);
          return isNaN(t) ? 0 : t;
        },
        inputType: "number"
      },
      "stroke-position": { convert: (e) => e || "", inputType: "text" }
    },
    co = Object.keys(uo),
    po = [
      { name: "enabled", controls: [{ name: "on", type: Xn, title: (0, Sn.tr)("On") }], title: (0, Sn.tr)("Enabled") },
      {
        name: "box",
        controls: [
          { name: "x", type: eo, title: "X" },
          { name: "y", type: eo, title: "Y" },
          { name: "width", type: Qn, title: "W" },
          { name: "height", type: Qn, title: "H" }
        ],
        title: (0, Sn.tr)("Position")
      },
      {
        name: "line",
        controls: [
          { name: "x1", type: eo, title: "X1" },
          { name: "y1", type: eo, title: "Y1" },
          { name: "x2", type: eo, title: "X2" },
          { name: "y2", type: eo, title: "Y2" }
        ],
        title: (0, Sn.tr)("Position")
      },
      { name: "padding", controls: [{ name: "padding", title: (0, Sn.tr)("Pad"), type: Qn }], title: (0, Sn.tr)("Padding") },
      {
        name: "text",
        controls: [
          { name: "text", type: Zn, widget: ro },
          { name: "autoHeight", type: Xn }
        ],
        hide: !0
      },
      {
        name: "icon",
        controls: [
          { name: "src1x", type: Zn },
          { name: "src2x", type: Zn },
          { name: "width", type: Qn },
          { name: "height", type: Qn }
        ],
        hide: !0
      },
      {
        name: "font",
        controls: [
          { name: "size", type: Qn, title: (0, Sn.tr)("Size") },
          {
            name: "fontFamily",
            type: to,
            widget: oo,
            title: (0, Sn.tr)("Type"),
            choices: [
              { title: "Helvetica", value: je.FONT_FAMILY_HELVETICA },
              { title: "Arial", value: je.FONT_FAMILY_ARIAL },
              { title: "Comic Sans", value: je.FONT_FAMILY_COMIC_SANS },
              { title: "Impact", value: je.FONT_FAMILY_IMPACT },
              { title: "Courier New", value: je.FONT_FAMILY_COURIER },
              { title: "Georgia", value: je.FONT_FAMILY_GEORGIA }
            ]
          },
          {
            name: "align",
            type: Zn,
            choices: [
              { title: "left", value: ao },
              { title: "center", value: so },
              { title: "right", value: lo }
            ],
            widget: oo,
            title: (0, Sn.tr)("Align")
          },
          { name: "bold", type: Xn, title: (0, Sn.tr)("Bold") },
          { name: "italic", type: Xn, title: (0, Sn.tr)("Italic") }
        ],
        title: (0, Sn.tr)("Font")
      },
      { name: "fill", controls: [{ name: "fill", type: Jn, widget: no, title: (0, Sn.tr)("Fill") }], title: (0, Sn.tr)("Fill") },
      {
        name: "stroke",
        controls: [
          { name: "color", type: Jn, widget: no, title: (0, Sn.tr)("Color") },
          { name: "width", type: Qn, title: (0, Sn.tr)("Width") }
        ],
        title: (0, Sn.tr)("Outline")
      },
      { name: "corners", controls: [{ name: "radius", type: Qn, title: (0, Sn.tr)("Radius") }], title: (0, Sn.tr)("Rounded corners") },
      { name: "blur", controls: [{ name: "radius", type: Qn, title: (0, Sn.tr)("Radius") }], title: (0, Sn.tr)("Blur") },
      {
        name: "template",
        controls: [
          {
            name: "templateId",
            type: Zn,
            widget: io,
            choices: Object.values(On.BROWSER_TEMPLATES).map((e) => ({ title: e.title, value: e.key }))
          }
        ],
        title: je.TEMPLATE_LAYER_DISPLAY_NAME
      },
      {
        name: "include_date",
        controls: [
          {
            name: "format",
            type: Zn,
            title: (0, Sn.tr)("Format"),
            widget: io,
            choices: Object.values(je.DATE_FORMATS).map((e) => ({ title: e.title, value: e.value })),
            dim: (e) => {
              var t;
              return !(null == e || null === (t = e.template) || void 0 === t ? void 0 : t.templateId);
            },
            dimTitle: "Select URL & Browser to enable showing a date"
          }
        ],
        title: (0, Sn.tr)("Date & Time of Capture")
      }
    ],
    fo = po.find((e) => "box" === e.name),
    ho = Object.assign({}, fo, { controls: fo.controls.filter((e) => "x" === e.name || "y" === e.name) }),
    go = "http://www.w3.org/2000/svg";
  let mo;
  const vo = {},
    yo = ["fontSize", "fontFamily", "fontWeight", "fontStyle", "whiteSpace"],
    bo = (e, t, r, n) => {
      let o = ((e, t, r, n) => `${e}|${t}|${r}|${n ? yo.map((e) => n[e]) : ""}`)(e, (t = t || 10), r, n);
      if (o in vo) return vo[o];
      let i = xo(e, r, n),
        a = [];
      return (
        e.split("\n").forEach((e, r) => {
          if (!e) return void a.push({ text: "", width: 0 });
          let n = _o(e);
          for (; n.length; ) {
            let e = "",
              r = 0;
            for (;;) {
              let o = e + n[0].trimRight();
              i.textContent = o;
              let s = i.getBBox().width;
              if (s > t) {
                if (!e) {
                  let o = n[0].trimRight(),
                    a = o.length,
                    s = a;
                  for (let e = 2; e <= a; e++) {
                    let n = o.substring(0, e);
                    i.textContent = n;
                    let a = i.getBBox().width;
                    if (a > t) {
                      s = e - 1;
                      break;
                    }
                    r = a;
                  }
                  (e = o.substring(0, s)), (n[0] = n[0].substring(s));
                }
                a.push({ text: e.trimRight(), width: r });
                break;
              }
              if (((r = s), (e += n.shift()), 0 === n.length)) {
                a.push({ text: e.trimRight(), width: r });
                break;
              }
            }
          }
        }),
        (vo[o] = a),
        a
      );
    },
    xo = (e, t, r) => {
      let n = `text${Eo()}`,
        o = document.createElementNS(go, "text");
      return o.setAttribute("class", n), o.setAttribute("stroke-width", t), r && Object.assign(o.style, r), mo.appendChild(o), o;
    };
  let wo = 0;
  const Eo = () => wo++,
    _o = (e) => {
      let t = [],
        r = e.split(/(\s+|-)/),
        n = 0,
        o = r.length;
      for (; n < o; n += 2) t.push(n + 1 < o ? r[n] + r[n + 1] : r[n]);
      return t;
    };
  (mo = document.createElementNS(go, "svg")),
    Object.assign(mo.style, { position: "absolute", top: "-999px", left: "-999px" }),
    document.body.appendChild(mo);
  class So extends Rn {
    componentDidMount() {
      this.doFocus(), super.componentDidMount();
    }
    componentDidUpdate() {
      this.doFocus();
    }
    doFocus() {
      if (this.props.editing) {
        let e = this.textareaRef.current;
        e && e.focus();
      }
    }
    render() {
      let e = this.props,
        t = e.box,
        r = e.text,
        o = e.font,
        i = e.fill,
        a = e.stroke,
        l = o.size || 30,
        u = a.width || 0,
        c = 1.25 * l,
        d = o.align || ao,
        p = {
          fontSize: `${l}px`,
          fontFamily: o.fontFamily,
          fontWeight: o.bold ? "bold" : "normal",
          fontStyle: o.italic ? "italic" : "normal",
          textAlign: o.align || "left",
          whiteSpace: "pre"
        },
        f = bo(r.text, t.width, u, p),
        h = t.width,
        g = t.height,
        m = Math.ceil(u / 2),
        v = l + (c - l) / 2;
      if (this.props.editing) {
        let e = { position: "absolute", top: 0, left: 0, width: `${h}px`, height: `${g}px` },
          t = Object.assign({}, p, {
            position: "absolute",
            zIndex: 9999,
            pointerEvents: "all",
            resize: "none",
            boxSizing: "border-box",
            margin: 0,
            border: 0,
            padding: v - 0.78005 * c + "px 0 0",
            left: 0,
            top: 0,
            width: `${h}px`,
            height: `${g}px`,
            lineHeight: `${c}px`,
            whiteSpace: "pre-wrap",
            background: "transparent",
            color: i.fill || "#000"
          });
        return n(s).createElement(
          "div",
          { className: "text--editing", style: e },
          n(s).createElement("textarea", {
            ref: this.textareaRef,
            style: t,
            value: r.text,
            onBlur: this.handleBlur,
            onChange: this.handleTextareaChange,
            onMouseDown: this.stopPropagation,
            onMouseUp: this.stopPropagation,
            onMouseMove: this.stopPropagation,
            onKeyDown: this.stopPropagation,
            onKeyUp: this.stopPropagation
          })
        );
      }
      let y = { position: "absolute", left: -m + "px", top: -m + "px", width: `${h + 2 * m}px`, height: `${g + 2 * m}px` };
      const b = f.map((e, t) => {
        let r = 0;
        switch (d) {
          case so:
            r = (h - e.width) / 2;
            break;
          case lo:
            r = h - e.width;
        }
        return n(s).createElement(
          "text",
          { key: t, style: p, x: m + r, y: m + v + t * c, fill: i.fill || "none", stroke: a.color || "none", strokeWidth: u },
          e.text
        );
      });
      return n(s).createElement("svg", { className: "text", style: y, onDoubleClick: this.handleDoubleClick }, b);
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "handleDoubleClick", (e) => {
          (0, me.default)("[Text.onDoubleClick]"), e.stopPropagation(), this.props.onChangeEditing(!0);
        }),
        (0, ce.default)(this, "handleBlur", (e) => {
          (0, me.default)("[Text.onBlur]"), this.props.onChangeEditing(!1);
        }),
        (0, ce.default)(this, "handleTextareaChange", (e) => {
          let t = this.props,
            r = e.target,
            n = r.value,
            o = r.scrollHeight - r.offsetHeight;
          o > 0 && t.onChangeProperties(t.layerId, t.shapeKey, "box", Object.assign({}, t.box, { height: t.box.height + o })),
            (0, me.default)("[Text.onChange]", n, r.offsetHeight, r.scrollHeight),
            t.onChangeProperties(t.layerId, t.shapeKey, "text", Object.assign({}, t.text, { text: n }));
        }),
        (0, ce.default)(this, "stopPropagation", (e) => {
          e.stopPropagation();
        }),
        (this.textareaRef = n(s).createRef());
    }
  }
  So.propTypes = {
    box: Cn.box,
    fill: Cn.fill,
    stroke: Cn.stroke,
    text: Cn.text,
    font: Cn.font,
    selected: n(d).bool,
    onChangeProperties: n(d).func,
    layerId: n(d).string,
    shapeKey: n(d).string.isRequired,
    editing: n(d).bool.isRequired,
    onChangeEditing: n(d).func.isRequired
  };
  var Oo = So;
  const ko = "arrow",
    Co = "blur",
    To = "border",
    Ro = "emoji",
    Po = "icon",
    jo = "line",
    Mo = "oval",
    Do = "slice",
    Lo = "rectangle",
    Ao = "text",
    No = "multi",
    Io = "template",
    Ho = [
      { id: "W", left: 0, top: "50%", marginTop: 0 },
      { id: "S", bottom: 0, left: "50%", marginLeft: 0 },
      { id: "E", right: 0, top: "50%", marginTop: 0 },
      { id: "N", top: 0, left: "50%", marginLeft: 0 },
      { id: "SW", bottom: 0, left: 0 },
      { id: "SE", bottom: 0, right: 0 },
      { id: "NE", top: 0, right: 0 },
      { id: "NW", top: 0, left: 0 }
    ],
    Fo = [
      { id: "2", point: { x: "x2", y: "y2" } },
      { id: "1", point: { x: "x1", y: "y1" } }
    ],
    Uo = {
      [Lo]: {
        type: Lo,
        title: (0, Sn.tr)("Rectangle"),
        isBox: !0,
        controlPoints: Ho,
        component: Kn,
        Icon: (e) => {
          let t = e.className,
            r = e.stroke,
            o = void 0 === r ? "#151515" : r;
          return n(s).createElement(
            "svg",
            { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            n(s).createElement("rect", { x: "3.5", y: "4.5", width: "19", height: "15", fill: "none", stroke: o })
          );
        },
        insertKey: "R",
        defaults: { fill: { color: "" }, stroke: { width: 6, color: "#BD10E0" }, corners: { radius: 0 } },
        remember: ["fill", "stroke", "corners"]
      },
      [No]: { type: No, isBox: !0, controlPoints: [], component: Kn, defaults: {}, remember: [], hide: !0 },
      [Do]: { type: Do, isBox: !0, controlPoints: Ho, component: Kn, defaults: {}, hide: !0 },
      [Mo]: {
        type: Mo,
        title: (0, Sn.tr)("Oval"),
        isBox: !0,
        controlPoints: Ho,
        component: Gn,
        Icon: (e) => {
          let t = e.className,
            r = e.stroke,
            o = void 0 === r ? "#151515" : r;
          return n(s).createElement(
            "svg",
            { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            n(s).createElement("path", {
              d: "M22.5 12C22.5 16.0438 18.3566 19.5 13 19.5C7.64341 19.5 3.5 16.0438 3.5 12C3.5 7.95621 7.64341 4.5 13 4.5C18.3566 4.5 22.5 7.95621 22.5 12Z",
              fill: "none",
              stroke: o
            })
          );
        },
        insertKey: "O",
        defaults: { fill: { color: "" }, stroke: { width: 6, color: "#BD10E0" } },
        remember: ["fill", "stroke"]
      },
      [jo]: {
        type: jo,
        title: (0, Sn.tr)("Line"),
        isBox: !1,
        controlPoints: Fo,
        component: $n,
        Icon: (e) => {
          let t = e.className,
            r = e.fill,
            o = void 0 === r ? "#000" : r;
          return n(s).createElement(
            "svg",
            { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            n(s).createElement("line", { x1: "4.67737", y1: "17.9479", x2: "22.3363", y2: "8.5585", stroke: o })
          );
        },
        insertKey: "L",
        defaults: { stroke: { width: 6, color: "#000000" } },
        remember: ["stroke"]
      },
      [ko]: {
        type: ko,
        title: (0, Sn.tr)("Arrow"),
        isBox: !1,
        controlPoints: Fo,
        component: Mn,
        Icon: (e) => {
          let t = e.className,
            r = e.fill,
            o = void 0 === r ? "#000" : r;
          return n(s).createElement(
            "svg",
            { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            n(s).createElement("path", {
              d: "M23.1454 7.77262C23.2261 7.50855 23.0775 7.22902 22.8134 7.14829L18.5101 5.83261C18.246 5.75188 17.9665 5.9005 17.8857 6.16458C17.805 6.42866 17.9536 6.70818 18.2177 6.78892L22.0429 7.9584L20.8734 11.7836C20.7927 12.0477 20.9413 12.3272 21.2054 12.408C21.4695 12.4887 21.749 12.3401 21.8297 12.076L23.1454 7.77262ZM5.24304 17.4573L22.902 8.06791L22.4325 7.18496L4.77356 16.5744L5.24304 17.4573Z",
              fill: o
            })
          );
        },
        insertKey: "A",
        defaults: { stroke: { width: 6, color: "#BD10E0" } },
        remember: ["stroke"]
      },
      [Ao]: {
        type: Ao,
        title: (0, Sn.tr)("Text"),
        isBox: !0,
        controlPoints: [
          { id: "W", left: 0, top: "50%", marginTop: 0 },
          { id: "S", bottom: 0, left: "50%", marginLeft: 0 },
          { id: "E", right: 0, top: "50%", marginTop: 0 }
        ],
        component: Oo,
        Icon: (e) => {
          let t = e.className,
            r = e.fill,
            o = void 0 === r ? "#151515" : r,
            i = e.fill2,
            a = void 0 === i ? "#666666" : i;
          return n(s).createElement(
            "svg",
            { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            n(s).createElement("path", { d: "M19.5703 6V7.36719H15.7031V17.4766H14.125V7.36719H10.2578V6H19.5703Z", fill: o }),
            n(s).createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 22L5 2L6 2L6 22L5 22Z", fill: a })
          );
        },
        insertKey: "T",
        defaults: {
          fill: { fill: "#BD10E0" },
          stroke: { width: 0, color: "" },
          text: { text: (0, Sn.tr)("Enter text here"), autoHeight: !0 },
          font: { size: 32, fontFamily: je.FONT_FAMILY_HELVETICA, bold: !1, italic: !1 }
        },
        remember: ["fill", "stroke", "font"]
      },
      [Co]: {
        type: Co,
        title: (0, Sn.tr)("Blur"),
        isBox: !0,
        takesBase: !0,
        controlPoints: Ho,
        component: Un,
        Icon: (e) => {
          let t = e.className,
            r = e.fill,
            o = void 0 === r ? "#CCC" : r,
            i = e.stroke,
            a = void 0 === i ? "#151515" : i;
          const l = (0, pe.default)((0, s.useState)(`filter-${new Date().getTime()}-${Math.floor(1e6 * Math.random())}`), 2),
            u = l[0];
          l[1];
          return n(s).createElement(
            "svg",
            { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            n(s).createElement(
              "g",
              { filter: `url(#${u})` },
              n(s).createElement("ellipse", { cx: "13", cy: "12", rx: "7", ry: "6", fill: o }),
              n(s).createElement("path", {
                d: "M19 12C19 14.6224 16.4639 17 13 17C9.53612 17 7 14.6224 7 12C7 9.37764 9.53612 7 13 7C16.4639 7 19 9.37764 19 12Z",
                stroke: a,
                strokeWidth: "2"
              })
            ),
            n(s).createElement(
              "defs",
              null,
              n(s).createElement(
                "filter",
                { id: u, x: "0", y: "0", width: "26", height: "24", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                n(s).createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                n(s).createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                n(s).createElement("feGaussianBlur", { stdDeviation: "3", result: "effect1_foregroundBlur" })
              )
            )
          );
        },
        insertKey: "B",
        defaults: { blur: { radius: 5 } },
        remember: ["blur"],
        addToBottom: !1
      },
      [Ro]: { type: Ro, title: (0, Sn.tr)("Emoji"), isBox: !0, isSquare: !0, controlPoints: Ho, component: qn, defaults: {}, hide: !0 },
      [Po]: { type: Po, title: (0, Sn.tr)("Icon"), isBox: !0, isSquare: !0, controlPoints: Ho, component: Yn, defaults: {}, hide: !0 },
      [To]: {
        type: To,
        title: (0, Sn.tr)("Padding / Border"),
        isBox: !0,
        defaults: { enabled: { on: !1 }, padding: { padding: 40 }, fill: { fill: "#50E3C2" }, stroke: { width: 1, color: "#9B9B9B" } },
        remember: ["enabled", "padding", "fill", "stroke"],
        hide: !0
      },
      [Io]: {
        type: Io,
        title: je.TEMPLATE_LAYER_DISPLAY_NAME_HEADER,
        defaults: { template: { templateId: On.BROWSER_TEMPLATE_ID_NONE }, include_date: { on: !1, format: je.DATE_FORMAT_NONE } },
        remember: ["template", "include_date"],
        hide: !0
      }
    },
    Bo = (e) => Object.assign({}, e),
    zo = (e) => JSON.parse(JSON.stringify(e)),
    Wo = {},
    qo = "globalShapeDefaults/UPDATE_DEFAULTS",
    Vo = "globalShapeDefaults/UPDATE_ALL_DEFAULTS";
  const Yo = (e, t, r, n) => {
      const o = Uo[t];
      if (o.remember && -1 !== o.remember.indexOf(r)) {
        const o = Object.assign({}, e[t]);
        return (o[r] = Object.assign({}, o[r], n)), (0, Ue.default)((0, de.default)({}, e), { [t]: o });
      }
      return e;
    },
    $o = (e, t, r) => ({ type: qo, payload: { shapeKey: e, groupName: t, updates: r } });
  (de = a("jBCXK")), (Ue = a("hGGFE")), (pe = a("ff4Ef")), (je = a("fueUa")), (On = a("1AJdn"));
  const Go = { width: { E: "W", W: "E" }, height: { N: "S", S: "N" } },
    Ko = (e, t) => Zo[e || (t ? "__line__" : "__box__")],
    Xo = {
      N: { y: { dim: "dy", delta: 1 }, height: { dim: "dy", delta: -1 } },
      E: { width: { dim: "dx", delta: 1 } },
      S: { height: { dim: "dy", delta: 1 } },
      W: { x: { dim: "dx", delta: 1 }, width: { dim: "dx", delta: -1 } },
      1: { x1: { dim: "dx", delta: 1 }, y1: { dim: "dy", delta: 1 } },
      2: { x2: { dim: "dx", delta: 1 }, y2: { dim: "dy", delta: 1 } }
    },
    Zo = Object.assign(
      {},
      {
        __box__: { x: { dim: "dx", delta: 1 }, y: { dim: "dy", delta: 1 } },
        __line__: { x1: { dim: "dx", delta: 1 }, y1: { dim: "dy", delta: 1 }, x2: { dim: "dx", delta: 1 }, y2: { dim: "dy", delta: 1 } }
      }
    );
  ["NE", "SE", "SW", "NW", "N", "S", "E", "W", "1", "2"].forEach((e) => {
    Zo[e] = ((e) => {
      let t = {};
      return (
        (e = e || "").split("").forEach((e) => {
          Object.assign(t, Xo[e]);
        }),
        t
      );
    })(e);
  });
  const Jo = {},
    Qo = "layers/PROPERTIES_UPDATE",
    ei = "layers/BATCH_PROPERTIES_UPDATE";
  const ti = (e, t, r, n, o, i, a) => {
      let s = Uo[t],
        l = { id: e, shapeKey: t };
      if (
        (Object.assign(l, zo(s.defaults)),
        a &&
          Object.entries(a).forEach((e) => {
            let t = (0, pe.default)(e, 2),
              r = t[0],
              n = t[1];
            l[r] = Object.assign(l[r] || {}, n);
          }),
        t === To || t === Io)
      );
      else if (s.isBox) {
        if (
          ((l.box = { x: Math.min(r, o), y: Math.min(n, i), width: Math.abs(o - r), height: Math.abs(i - n) }),
          s.isSquare && l.box.width !== l.box.height)
        ) {
          let e = l.box,
            t = (e.x, e.y, e.width),
            a = e.height,
            s = t > a ? Xo[o > r ? "E" : "W"] : Xo[i > n ? "S" : "N"],
            u = -Math.abs(t - a);
          Object.entries(s).forEach((e) => {
            let t = (0, pe.default)(e, 2),
              r = t[0],
              n = t[1];
            l.box[r] += u * n.delta;
          });
        }
      } else l.line = { x1: r, y1: n, x2: o, y2: i };
      return l;
    },
    ri = (e) => ({ type: ei, payload: e }),
    ni = (e, t, r, n, o) => ({ type: Qo, id: e, payload: { shapeKey: t, groupName: r, updates: n, isMultiLayer: o } }),
    oi = (e, t, r) => {
      switch (e.type) {
        case Bt:
          if (e.groupAsUpdate) {
            const t = e.payload.length;
            return `${Qo}--${t > 1 ? je.MULTI_LAYER_ID : e.payload[t - 1].payload.id}--${["height", "width", "x", "y"].join("|")}`;
          }
          return null;
        case ei:
          return oi(e.payload[e.payload.length - 1], t, r);
        case Qo: {
          const t = e.payload.isMultiLayer ? je.MULTI_LAYER_ID : e.id,
            r = Object.keys(e.payload.updates);
          return r.sort(), `${e.type}--${t}--${r.join("|")}`;
        }
        default:
          return null;
      }
    };
  je = a("fueUa");
  const ii = {};
  var ai = j({
    capture: function (e, t) {
      let r = void 0 === e ? De : e;
      switch (t.type) {
        case Ae:
        case Le:
        case Ne:
        case Ie:
          return (0, de.default)({}, r, t.payload);
        default:
          return r;
      }
    },
    base: function (e, t) {
      let r = void 0 === e ? mn : e;
      switch (t.type) {
        case vn:
          return Object.assign({}, r, t.payload);
        case yn:
          return me.default.error("ERROR LOADING BASE!", t.payload), r;
        default:
          return r;
      }
    },
    editor: function (e, t) {
      let r = void 0 === e ? Qt : e;
      switch ((t.type.startsWith(Zt) && (r = Object.assign({}, r, Jt)), t.type)) {
        case er:
        case tr:
        case rr:
        case nr:
        case or:
        case ir:
        case ar:
        case sr:
        case lr:
        case ur:
        case cr:
        case dr:
        case pr:
        case fr:
        case hr:
        case gr:
        case mr:
        case vr:
        case yr:
        case br:
          return (
            t.type === or &&
              window.setTimeout(() => {
                (0, Me.default)(window, je.EVT_RESIZE);
              }, 50),
            Object.assign({}, r, t.payload)
          );
        case zt:
          return (0, Ue.default)((0, de.default)({}, r), { selectedLayerIds: [t.payload.id] });
        case Wt: {
          const e = t.payload.ids,
            n = r.selectedLayerIds.filter((t) => !e.includes(t));
          return (0, Ue.default)((0, de.default)({}, r), { selectedLayerIds: n });
        }
        default:
          return r;
      }
    },
    error: function (e, t) {
      let r = void 0 === e ? xn : e;
      switch (t.type) {
        case wn:
        case En:
          return { error: t.payload, prevError: r.error || r.prevError };
        default:
          return r;
      }
    },
    globalShapeDefaults: function (e, t) {
      let r = void 0 === e ? Wo : e;
      switch (t.type) {
        case qo: {
          const e = t.payload,
            n = e.shapeKey,
            o = e.groupName,
            i = e.updates;
          return Yo(r, n, o, i);
        }
        case Vo:
          return zo(t.payload);
        default:
          return r;
      }
    },
    shapeDefaults: function (e, t) {
      let r = void 0 === e ? ii : e;
      switch (t.type) {
        case Qo:
        case qo:
          if (t.id !== je.CROP_ID) {
            const e = t.payload,
              n = e.shapeKey,
              o = e.groupName,
              i = e.updates;
            return Yo(r, n, o, i);
          }
          return r;
        case Vo:
          return zo(t.payload);
        default:
          return r;
      }
    },
    undos: n(Gr)(
      j({
        layersById: function e(t, r) {
          let n = void 0 === t ? Jo : t,
            o = r.id ? n[r.id] : void 0;
          switch (r.type) {
            case ar:
              if (!(je.CROP_ID in n)) {
                let e = r.base,
                  t = e.width,
                  n = e.height;
                r = Yt(je.CROP_ID, Do, 0, 0, t, n);
              }
              break;
            case lr: {
              const e = r.isToggle;
              if (je.BORDER_ID in n) e && ((o = n[je.BORDER_ID]), (r = ni(o.id, To, "enabled", { on: !o.enabled.on }, !1)));
              else if (((r = Yt(je.BORDER_ID, To, 0, 0, 0, 0, r.defaultGroups)), e)) {
                const e = r.payload.groups || {};
                (e.enabled = { on: !0 }), (r.payload.groups = e);
              }
              break;
            }
            case ur:
              je.TEMPLATE_ID in n ||
                (r = Yt(
                  je.TEMPLATE_ID,
                  Io,
                  0,
                  0,
                  0,
                  0,
                  Object.assign({ template: { templateId: On.BROWSER_TEMPLATE_ID_NONE } }, r.defaultGroups)
                ));
          }
          switch (r.type) {
            case Bt:
            case ei:
              return r.payload.reduce(e, n);
            case Qo: {
              let e = r.payload,
                t = e.groupName,
                i = e.updates;
              return (
                (o = Object.assign({}, o)), (o[t] = Object.assign({}, o[t], i)), (0, Ue.default)((0, de.default)({}, n), { [r.id]: o })
              );
            }
            case zt: {
              let e = r.payload,
                t = e.id,
                o = e.shapeKey,
                i = e.x1,
                a = e.y1,
                s = e.x2,
                l = e.y2,
                u = e.groups;
              return (0, Ue.default)((0, de.default)({}, n), { [t]: ti(t, o, i, a, s, l, u) });
            }
            case Wt: {
              const e = r.payload.ids;
              return (
                (n = Object.assign({}, n)),
                e.forEach((e) => {
                  delete n[e];
                }),
                n
              );
            }
            default:
              return n;
          }
        },
        layersIds: function e(t, r) {
          let n = void 0 === t ? Ut : t;
          switch (r.type) {
            case Bt:
              return r.payload.reduce(e, n);
            case zt:
              return (n = Array.from(n)), n[r.payload.bottom ? "push" : "unshift"](r.payload.id), n;
            case Wt:
              return n.filter((e) => !r.payload.ids.includes(e));
            case qt: {
              let e = r.payload,
                t = e.oldIndex,
                s = e.newIndex;
              return (i = t), (a = s), (o = (o = n).slice()).splice(a < 0 ? o.length + a : a, 0, o.splice(i, 1)[0]), o;
            }
            default:
              return n;
          }
          var o, i, a;
        }
      }),
      { limit: 100, groupBy: oi }
    )
  });
  var si = (e) => {
      const t = [$r, Hr];
      const r = I.apply(null, t);
      return R(ai, e, r);
    },
    li = ((me = a("2z2pA")), {}),
    ui = a("iIdtL");
  Object.defineProperty(li, "__esModule", { value: !0 }),
    Object.defineProperty(li, "createGenerateClassName", {
      enumerable: !0,
      get: function () {
        return ci.default;
      }
    }),
    Object.defineProperty(li, "createMuiTheme", {
      enumerable: !0,
      get: function () {
        return di.default;
      }
    }),
    Object.defineProperty(li, "jssPreset", {
      enumerable: !0,
      get: function () {
        return pi.default;
      }
    }),
    Object.defineProperty(li, "MuiThemeProvider", {
      enumerable: !0,
      get: function () {
        return fi.default;
      }
    }),
    Object.defineProperty(li, "createStyles", {
      enumerable: !0,
      get: function () {
        return hi.default;
      }
    }),
    Object.defineProperty(li, "withStyles", {
      enumerable: !0,
      get: function () {
        return gi.default;
      }
    }),
    Object.defineProperty(li, "withTheme", {
      enumerable: !0,
      get: function () {
        return mi.default;
      }
    });
  var ci = ui(a("4qadp")),
    di = ui(a("9ar8U")),
    pi = ui(a("2TfOV")),
    fi = ui(a("7jMHD")),
    hi = ui(a("aL7xc")),
    gi = ui(a("a6dSz")),
    mi = ui(a("gA3jP")),
    vi =
      ((s = a("7b0kr")),
      (u = a("ceb36")),
      (me = a("2z2pA")),
      (Ce = a("avfZw")),
      (ce = a("iPbYd")),
      (de = a("jBCXK")),
      (Ue = a("hGGFE")),
      (pe = a("ff4Ef")),
      (Be = a("4fNEN")),
      a("gwJFa")),
    yi = ((s = a("7b0kr")), (Pe = a("8DwkQ")), (Sn = a("5Xemj")), a("erNYL")),
    bi =
      ((me = a("2z2pA")),
      (Te = a("dChev")),
      (je = a("fueUa")),
      (d = a("3pr9z")),
      (s = a("7b0kr")),
      (de = a("jBCXK")),
      (vi = a("gwJFa")),
      (s = a("7b0kr")),
      a("kRWUw")),
    xi = a("8vc73"),
    wi = (e) => {
      const t = Object.assign({}, e);
      t.className = n(vi)(e.className, "closelink");
      let r = { size: 10 };
      return (
        "fill" in t && ((r.fill = t.fill), delete t.fill),
        n(s).createElement(
          "a",
          (0, de.default)({ href: "#" }, t),
          n(s).createElement(bi.default, r),
          n(s).createElement(xi.default, null, "Close")
        )
      );
    };
  (vi = a("gwJFa")), (d = a("3pr9z")), (s = a("7b0kr"));
  const Ei = (e) => (
    (e = Object.assign({ role: "img" }, e)).label && ((e["aria-label"] = e.label), delete e.label),
    (e.className = n(vi)(e.className, "emoji")),
    n(s).createElement("span", e)
  );
  Ei.propTypes = { label: n(d).string.isRequired };
  var _i = Ei;
  const Si = (e) => {
    let t = e.error,
      r = e.reportUrl,
      o = e.onClearError;
    if (!t) return null;
    const i = t.displayMessage || t.message || "Error",
      a = t.title || "Oh no, there was an error!",
      l = t.permanent ? null : o;
    return n(s).createElement(
      "div",
      { className: "errormessage error" },
      n(s).createElement("strong", null, a, " ", !t.noEmoji && n(s).createElement(_i, { label: "Surprised face" }, "😯")),
      n(s).createElement("br", null),
      n(s).createElement("br", null),
      i,
      n(s).createElement("br", null),
      n(s).createElement("br", null),
      "If this persists, please",
      " ",
      n(s).createElement("a", { className: "nowrap", href: r, target: "_blank", rel: "noopener noreferrer" }, "contact support"),
      ".",
      l && n(s).createElement(wi, { onClick: l, fill: "#900" })
    );
  };
  Si.props = { error: n(d).object, reportUrl: n(d).string.isRequired, onClearError: n(d).func.isRequired };
  var Oi = Si;
  function ki(e, t) {
    return e === t;
  }
  var Ci = (function (e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
    return function () {
      for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
      var i = 0,
        a = n.pop(),
        s = (function (e) {
          var t = Array.isArray(e[0]) ? e[0] : e;
          if (
            !t.every(function (e) {
              return "function" == typeof e;
            })
          ) {
            var r = t
              .map(function (e) {
                return typeof e;
              })
              .join(", ");
            throw new Error(
              "Selector creators expect all input-selectors to be functions, instead received the following types: [" + r + "]"
            );
          }
          return t;
        })(n),
        l = e.apply(
          void 0,
          [
            function () {
              return i++, a.apply(null, arguments);
            }
          ].concat(r)
        ),
        u = e(function () {
          for (var e = [], t = s.length, r = 0; r < t; r++) e.push(s[r].apply(null, arguments));
          return l.apply(null, e);
        });
      return (
        (u.resultFunc = a),
        (u.dependencies = s),
        (u.recomputations = function () {
          return i;
        }),
        (u.resetRecomputations = function () {
          return (i = 0);
        }),
        u
      );
    };
  })(function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ki,
      r = null,
      n = null;
    return function () {
      return (
        (function (e, t, r) {
          if (null === t || null === r || t.length !== r.length) return !1;
          for (var n = t.length, o = 0; o < n; o++) if (!e(t[o], r[o])) return !1;
          return !0;
        })(t, r, arguments) || (n = e.apply(null, arguments)),
        (r = arguments),
        n
      );
    };
  });
  var Ti = a("h1Khz");
  (je = a("fueUa")), (On = a("1AJdn"));
  const Ri = () => Object.values(Uo).filter((e) => e.remember && e.remember.length),
    Pi = (e) => {
      const t = {};
      return (
        e.forEach((e) => {
          const r = {};
          (t[e.type] = r),
            e.remember.forEach((t) => {
              const n = e.defaults[t];
              n && (r[t] = zo(n));
            });
        }),
        t
      );
    },
    ji = (e, ...t) => {
      var r = !0,
        n = !1,
        o = void 0;
      try {
        for (var i, a = t[Symbol.iterator](); !(r = (i = a.next()).done); r = !0) {
          let t = i.value;
          if (!e || "object" != typeof e) return;
          e = e[t];
        }
      } catch (e) {
        (n = !0), (o = e);
      } finally {
        try {
          r || null == a.return || a.return();
        } finally {
          if (n) throw o;
        }
      }
      return e;
    };
  var Mi = a("3cJ8u");
  const Di = Ci([(e) => e.undos.present.layersById, (e) => e.undos.present.layersIds], (e, t) => t.map((t) => e[t]).filter((e) => e)),
    Li = Ci([(e) => e.editor.mode, (e) => e.undos.present.layersById[je.CROP_ID], (e) => e.editor.selectedLayerIds], (e, t, r) =>
      e === Kt ? (t ? [je.CROP_ID] : []) : r
    ),
    Ai = Ci([(e) => Li(e)], (e) => e.filter((e) => e !== je.BORDER_ID && e !== je.TEMPLATE_ID)),
    Ni = (e) => (e.editor.mode === Kt ? null : e.editor.hoveringLayerId),
    Ii = (e) => e.undos.present.layersById[je.CROP_ID] || null,
    Hi = (e) => {
      const t = e.undos.present.layersById[je.BORDER_ID];
      return t && t.enabled.on ? t : null;
    },
    Fi = Ci([(e) => e.base], (e) => ({ x: 0, y: 0, width: e.width || 0, height: e.height || 0 })),
    Ui = Ci([(e) => e.editor.mode, (e) => e.base, Ii], (e, t, r) => (e !== Kt && r ? r.box : Fi({ base: t }))),
    Bi = (e) => {
      const t = e.undos.present.layersById[je.TEMPLATE_ID];
      return t ? t.template.templateId : On.BROWSER_TEMPLATE_ID_NONE;
    },
    zi = (e) => {
      const t = e.undos.present.layersById[je.TEMPLATE_ID],
        r = t && t.include_date;
      if (r) {
        if (r.format) return r.format;
        if (r.on) return je.DATE_FORMAT_DATE;
      }
      return je.DATE_FORMAT_NONE;
    },
    Wi = Ci([(e) => e.base, Bi, (e) => (zi(e) !== je.DATE_FORMAT_NONE && e.capture.time) || null, zi, Ui], (e, t, r, n, o) =>
      (0, On.createBrowserTemplate)(t, e.url, o.width || 0, o.height || 0, e.pixelDensity || 1, e.title, r, (0, je.formatDate)(r, n))
    ),
    qi = Ci([(e) => Ai(e), (e) => e.undos.present.layersById], (e, t) => {
      if (e.length <= 1) return null;
      const r = e.map((e) => t[e]),
        n = (0, Mi.computeLayersMinMax)(r);
      n.minX, n.minY, n.maxX, n.minX, n.maxY, n.minY;
      return ti(je.MULTI_LAYER_ID, No, n.minX, n.minY, n.maxX, n.maxY);
    }),
    Vi = Ci(
      [
        (e) => e.error.error || e.error.prevError,
        (e) => window.location.href,
        (e) => e.capture && e.capture.subUserId,
        (e) => e.capture && e.capture.subState
      ],
      (e, t, r, n) => (0, Ti.getReportUrl)({ url: t, error: e, userId: r, subState: n })
    ),
    Yi = Ci(
      [
        (e) => e.error.error || e.error.prevError,
        (e) => window.location.href,
        (e) => e.capture && e.capture.subUserId,
        (e) => e.capture && e.capture.subState
      ],
      (e, t, r, n) => (o) => (0, Ti.getReportUrl)({ type: o, url: t, error: e, userId: r, subState: n })
    ),
    $i = Ci(
      [(e) => e.globalShapeDefaults && e.globalShapeDefaults[To], (e) => e.globalShapeDefaults && e.globalShapeDefaults[Io]],
      (e, t) => {
        const r = Pi(Ri());
        return { borderDefaults: (e = Object.assign(r[To], e)), templateDefaults: (t = Object.assign(r[Io], t)) };
      }
    ),
    Gi = Ci(
      [
        (e) => !(!e.capture || !e.capture.subUserId),
        (e) => (e.capture && e.capture.hasPreviouslyLoggedIn) || !1,
        (e) => (e.capture && e.capture.isSubOk) || !1
      ],
      (e, t, r) => ({ isLoggedIn: e, hasPreviouslyLoggedIn: t, isSubOk: r })
    );
  var Ki = le(
      (e) => ({ error: e.error.error || null, reportUrl: Vi(e) }),
      (e) => ({ onClearError: () => e({ type: En, payload: null }) })
    )(Oi),
    Xi = ((Ce = a("avfZw")), {});
  ui = a("iIdtL");
  Object.defineProperty(Xi, "__esModule", { value: !0 }),
    Object.defineProperty(Xi, "default", {
      enumerable: !0,
      get: function () {
        return Ji.default;
      }
    });
  var Zi,
    Ji = ui(a("brH8f"));
  (d = a("3pr9z")), (s = a("7b0kr"));
  Zi = a("8r5Kp").getBundleURL("jNUyp") + a("fquJx").resolve("4bIyF");
  (Sn = a("5Xemj")),
    (ue = a("8rN6d")),
    (ce = a("iPbYd")),
    (de = a("jBCXK")),
    (Ue = a("hGGFE")),
    (pe = a("ff4Ef")),
    (fe = a("8bPtr")),
    (Be = a("4fNEN"));
  var Qi = {};
  ((e) => {
    "use strict";
    const t = Math.clz32,
      r = String.fromCharCode,
      n = String.fromCodePoint,
      o = atob,
      i = btoa,
      a = (e) => {
        let t = e.codePointAt(0);
        return 127 >= t
          ? e
          : 2047 >= t
          ? r(192 | (t >>> 6), 128 | (63 & t))
          : 65535 >= t
          ? r(224 | (t >>> 12), 128 | ((t >>> 6) & 63), 128 | (63 & t))
          : r(240 | (t >>> 18), 128 | ((t >>> 12) & 63), 128 | ((t >>> 6) & 63), 128 | (63 & t));
      },
      s = (e, t) => i((t ? "ï»¿" : "") + e.replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, a)),
      l = (e) => {
        let r = e.charCodeAt(0) << 24,
          o = 0,
          i = "";
        const a = t(~r),
          s = 0 | e.length;
        if (5 > a && s >= a) {
          for (r = (r << a) >>> (24 + a), o = 1; o < a; o = (o + 1) | 0) r = (r << 6) | (63 & e.charCodeAt(o));
          i = n(r);
        }
        for (; o < s; o = (o + 1) | 0) i += "�";
        return i;
      },
      u = (e, t) => ((e = o(e)), t || "ï»¿" !== e.substring(0, 3) || (e = e.substring(3)), e.replace(/[\xc0-\xff][\x80-\xbf]*/g, l)),
      c = (e) => ((e.btoaUTF8 = s), (e.atobUTF8 = u), e);
    typeof define == typeof c && define.amd ? define(() => c({})) : c(Qi);
  })();
  (vi = a("gwJFa")), (he = a("e0Kwl")), (d = a("3pr9z")), (s = a("7b0kr")), (l = a("iiDPj"));
  var ea = a("j4JJz"),
    ta = a("ekuHd"),
    ra = a("95ETH"),
    na = a("i9kVF"),
    oa = ((Pe = a("8DwkQ")), (Sn = a("5Xemj")), (yi = a("erNYL")), (u = a("ceb36")), a("Bqk7F")),
    ia = ((me = a("2z2pA")), a("1RQvI")),
    aa = a("5kOv9"),
    sa = a("8ioZ3"),
    la =
      ((Te = a("dChev")),
      (_e = a("kOtTY")),
      (je = a("fueUa")),
      (Me = a("fAoww")),
      (Mi = a("3cJ8u")),
      (gn = a("hDtYW")),
      (de = a("jBCXK")),
      (Ue = a("hGGFE")),
      (vi = a("gwJFa")),
      n((s = a("7b0kr"))).forwardRef((e, t) =>
        n(s).createElement(
          "button",
          (0, Ue.default)((0, de.default)({ ref: t, type: "button" }, e), { className: n(vi)(e.className, "fpsc-button") })
        )
      ));
  const ua = n(s).forwardRef((e, t) =>
    n(s).createElement("a", (0, Ue.default)((0, de.default)({ ref: t, href: "#" }, e), { className: n(vi)(e.className, "fpsc-button") }))
  );
  (d = a("3pr9z")), (s = a("7b0kr"));
  const ca = (e) => {
    let t = e.cents,
      r = e.monthly,
      o = e.simplify,
      i = (t / 100 / (r ? 12 : 1)).toLocaleString(void 0, { style: "currency", currency: "USD" });
    return o && (i.endsWith(".00") || i.endsWith(",00")) && (i = i.substring(0, i.length - 3)), n(s).createElement(n(s).Fragment, null, i);
  };
  ca.propTypes = { cents: n(d).number.isRequired };
  var da = ca,
    pa =
      ((s = a("7b0kr")),
      (e) => {
        let t = e.fill,
          r = void 0 === t ? "#fff" : t;
        return n(s).createElement(
          "svg",
          { width: "14", height: "15", viewBox: "0 0 14 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          n(s).createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.4443 4.5H9.33322V0H4.66655V4.5H1.55544L6.99988 9.75L12.4443 4.5ZM0 12V15H14V12H0Z",
            fill: r
          })
        );
      });
  s = a("7b0kr");
  var fa = (e) => {
    let t = e.fill,
      r = e.fitWidth,
      o = e.fitHeight;
    t = t || "#151515";
    const i = { verticalAlign: "middle" };
    return (
      r && (i.width = `${r}px`),
      o && (i.height = `${o}px`),
      n(s).createElement(
        "svg",
        { width: "18", height: "20", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: i },
        n(s).createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M16 6H12V0H6V6H2L9 13L16 6V6ZM0 16V20H18V16H0V16Z",
          fill: t
        })
      )
    );
  };
  s = a("7b0kr");
  const ha = "#151515";
  var ga = (e) => {
    let t = e.fill,
      r = e.fitWidth,
      o = e.fitHeight;
    (t = t || ha), (t = t || ha);
    const i = { verticalAlign: "middle" };
    return (
      r && (i.width = `${r}px`),
      o && (i.height = `${o}px`),
      n(s).createElement(
        "svg",
        { width: "18", height: "21", viewBox: "0 0 18 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: i },
        n(s).createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 6H12V0H6V6H2L9 13L16 6V6Z", fill: t }),
        n(s).createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1.5 16.5H3.5V17.5H1.5V16.5ZM5 17.5C5 18.35 4.35 19 3.5 19H1.5V21H0V15H3.5C4.35 15 5 15.65 5 16.5V17.5V17.5Z",
          fill: t
        }),
        n(s).createElement("path", { d: "M13 15H17.5V16.5H14.5V17.5H16.6V19H14.5V21H13V15Z", fill: t }),
        n(s).createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10 19.5H8V16.5H10V19.5V19.5ZM10 15H6.5V21H10C10.8 21 11.5 20.3 11.5 19.5V16.5C11.5 15.7 10.8 15 10 15V15Z",
          fill: t
        })
      )
    );
  };
  (ce = a("iPbYd")), (s = a("7b0kr")), (d = a("3pr9z")), (ea = a("j4JJz")), (me = a("2z2pA"));
  let ma = 0;
  class va extends s.Component {
    componentDidMount() {
      this._renderImg();
    }
    componentDidUpdate() {
      this._renderImg();
    }
    _renderImg() {
      let e = this.imgRef.current;
      if (e) {
        const t = this.props.base,
          r = t.img,
          n = t.width,
          o = t.height,
          i = t.pixelDensity,
          a = this.props,
          s = a.browserTemplate,
          l = a.cropBox,
          u = [r.src, n, o, i, s.id, s.time, s.timeText, l.x, l.y, l.width, l.height];
        if (this._isNewRender(u)) {
          e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P4/PnzfwAJjwPZUvo+oQAAAABJRU5ErkJggg==";
          let t = this._nextCounter();
          (0, me.default)(`%c> [${t}] REDRAW IMAGE BASE! (${new Date().toString().replace(/ \([^\)]*\)$/, "")})`, "color:pink");
          const n = document.createElement("canvas"),
            o = n.getContext("2d"),
            a = s.offsets.fullWidth,
            u = s.offsets.fullHeight;
          (n.width = a * i),
            (n.height = u * i),
            o.scale(i, i),
            ya(o, r, i, l, s.offsets.left, s.offsets.top),
            s
              .draw(o, this.props.base.url)
              .then(() => (this._expired(t) ? null : (0, ea.canvasToBlob)(n)))
              .then((r) => {
                r && !this._expired(t) && (e.src = (0, ea.blobToUrl)(r));
              })
              .catch((e) => {
                me.default.error("[ImageBase._renderImg.ERROR]", e),
                  (e.customMessage = "Error rendering base image."),
                  this.props.onSetError(e);
              });
        }
      }
    }
    _isNewRender(e) {
      let t,
        r = this._lastRenderArgs;
      if (null !== r && r.length === e.length && !r.some((t, r) => t !== e[r])) return !1;
      if (null === r) t = `... lastArgs === null (${JSON.stringify(e)})`;
      else {
        let n = e.map((e, t) => (e !== r[t] ? [t, e, r[t]] : null)).filter((e) => null !== e);
        t = `... diffs: ${JSON.stringify(n)}`;
      }
      return (0, me.default)(`%c${t}`, "color:pink"), (this._lastRenderArgs = e), !0;
    }
    render() {
      const e = this.props,
        t = (e.base, e.baseLeft),
        r = e.baseTop,
        o = e.browserTemplate,
        i = e.onClick,
        a = { top: `${r}px`, left: `${t}px`, width: `${o.offsets.fullWidth}px`, height: `${o.offsets.fullHeight}px` },
        l = ["imagebase", `template-${this.props.browserTemplate.id || "none"}`];
      return (
        this.props.browserTemplate.id || this.props.border || l.push("imagebase-border"),
        n(s).createElement("img", { ref: this.imgRef, style: a, className: l.join(" "), onClick: i })
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "_nextCounter", () => ++ma),
        (0, ce.default)(this, "_expired", (e) => e < ma),
        (this.imgRef = n(s).createRef()),
        (this._lastRenderArgs = null);
    }
  }
  const ya = (e, t, r, n, o, i) => {
    let a = void 0 === o ? 0 : o,
      s = void 0 === i ? 0 : i;
    e.drawImage(t, n.x * r, n.y * r, n.width * r, n.height * r, a, s, n.width, n.height);
  };
  va.propTypes = {
    base: n(d).object.isRequired,
    baseLeft: n(d).number.isRequired,
    baseTop: n(d).number.isRequired,
    border: n(d).object,
    browserTemplate: n(d).object.isRequired,
    cropBox: n(d).shape({
      x: n(d).number.isRequired,
      y: n(d).number.isRequired,
      width: n(d).number.isRequired,
      height: n(d).number.isRequired
    }).isRequired,
    onSetError: n(d).func.isRequired,
    onClick: n(d).func
  };
  var ba = va;
  (ce = a("iPbYd")),
    (de = a("jBCXK")),
    (Ue = a("hGGFE")),
    (s = a("7b0kr")),
    (vi = a("gwJFa")),
    (d = a("3pr9z")),
    (vi = a("gwJFa")),
    (d = a("3pr9z")),
    (s = a("7b0kr"));
  const xa = (e) => {
    let t = { width: `${e.width}px`, height: `${e.height}px` };
    const r = n(vi)("controlborder", { hover: e.hovering && !e.selected, spotlight: e.spotlight });
    return n(s).createElement("div", { className: r, style: t });
  };
  xa.propTypes = {
    width: n(d).number.isRequired,
    height: n(d).number.isRequired,
    selected: n(d).bool.isRequired,
    hovering: n(d).bool.isRequired,
    spotlight: n(d).bool
  };
  var wa = xa;
  (vi = a("gwJFa")), (d = a("3pr9z")), (s = a("7b0kr"));
  const Ea = (e) => {
    let t = e.line,
      r = t.x1,
      o = t.y1,
      i = t.x2,
      a = t.y2,
      l = Tn(e.line),
      u = { position: "absolute", left: "-1px", top: "-1px", width: `${l.width + 2}px`, height: `${l.height + 2}px` },
      c = e.spotlight ? "rgba(81, 203, 238, 1)" : e.hovering && !e.selected ? "#69f" : "#999";
    const d = n(vi)("controlline", { spotlight: e.spotlight });
    return n(s).createElement(
      "svg",
      { className: d, style: u },
      n(s).createElement("line", { x1: r - l.x + 1, y1: o - l.y + 1, x2: i - l.x + 1, y2: a - l.y + 1, stroke: c, strokeWidth: 1 })
    );
  };
  Ea.propTypes = { line: Cn.line.isRequired, selected: n(d).bool.isRequired, hovering: n(d).bool.isRequired, spotlight: n(d).bool };
  var _a = Ea;
  (s = a("7b0kr")), (me = a("2z2pA"));
  const Sa = (e) => 10 / (e < 1 ? e : 1);
  var Oa = (e) => {
    let t = Sa(e.pxPerModel),
      r = ["controlpoint", `controlpoint-${e.id.toLowerCase()}`],
      o = {
        position: "absolute",
        boxSizing: "border-box",
        width: `${t}px`,
        height: `${t}px`,
        background: "white",
        border: "1px solid #111"
      };
    return (
      e.point
        ? ((o.left = e.line[e.point.x] - e.box.x - t / 2 + "px"), (o.top = e.line[e.point.y] - e.box.y - t / 2 + "px"))
        : ["top", "right", "bottom", "left", "marginTop", "marginLeft"].forEach((r) => {
            void 0 !== e[r] && (o[r] = "number" == typeof e[r] ? e[r] - t / 2 + "px" : e[r]);
          }),
      n(s).createElement("div", {
        className: r.join(" "),
        style: o,
        onMouseDown: (t) =>
          ((e, t) => {
            e.preventDefault(), e.stopPropagation(), (0, me.default)("[ControlPoint.mouseDown]", t.id), t.onMouseDown(e, t.id);
          })(t, e)
      })
    );
  };
  me = a("2z2pA");
  class ka extends s.PureComponent {
    render() {
      let e,
        t = this.props,
        r = this.state,
        o = n(vi)({ layer: !0, selected: t.selected, spotlight: t.spotlight }),
        i = Uo[t.shapeKey],
        a = Boolean(t.line),
        l = a ? Tn(t.line) : t.box,
        u = { top: `${t.yOffset + l.y}px`, left: `${t.xOffset + l.x}px`, width: `${l.width}px`, height: `${l.height}px` },
        c = [];
      (t.selected || t.hovering || t.secondarySelected) &&
        !r.editing &&
        (e = a
          ? n(s).createElement(_a, { line: t.line, selected: t.selected, hovering: t.hovering, spotlight: t.spotlight })
          : n(s).createElement(wa, {
              width: l.width,
              height: l.height,
              selected: t.selected,
              hovering: t.hovering,
              spotlight: t.spotlight
            }));
      const d = Sa(t.pxPerModel);
      if (t.selected && !r.editing) {
        let e = i.controlPoints;
        t.box &&
          (t.box.height < 2.25 * d && (e = e.filter((e) => "E" !== e.id && "W" !== e.id)),
          t.box.width < 2.25 * d && (e = e.filter((e) => "N" != e.id && "S" !== e.id))),
          (c = e.map((e) =>
            n(s).createElement(
              Oa,
              (0, Ue.default)((0, de.default)({ key: e.id, line: t.line, box: l, pxPerModel: t.pxPerModel }, e), {
                onMouseDown: this.handleControlPointMouseDown
              })
            )
          ));
      }
      let p = {
        onChangeEditing: this.handleChangeEditing,
        editing: r.editing,
        basePixelDensity: t.basePixelDensity,
        shapeKey: t.shapeKey,
        onFinishedComponentMount: t.onFinishedComponentMount
      };
      return (
        po.forEach((e) => {
          p[e.name] = t[e.name];
        }),
        t.shapeKey === Ao && ((p.onChangeProperties = t.onChangeProperties), (p.selected = t.selected), (p.layerId = t.id)),
        i.isSquare && (p.isSquare = !0),
        i.takesBase && (p.base = t.base),
        n(s).createElement(
          "div",
          {
            className: o,
            style: u,
            onMouseDown: this.handleMouseDown,
            onMouseOver: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut
          },
          n(s).createElement(i.component, p),
          e,
          c
        )
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "handleMouseDown", (e) => {
          e.stopPropagation(), (0, me.default)("[Layer.onMouseDown]"), this.props.onMouseDown(e, this.props.id);
        }),
        (0, ce.default)(this, "handleControlPointMouseDown", (e, t) => {
          this.props.onMouseDown(e, this.props.id, t);
        }),
        (0, ce.default)(this, "handleMouseOver", (e) => {
          this.props.onHoverLayer(this.props.id);
        }),
        (0, ce.default)(this, "handleMouseOut", (e) => {
          this.props.onUnhoverLayer();
        }),
        (0, ce.default)(this, "handleChangeEditing", (e) => {
          this.setState({ editing: e });
        }),
        (this.state = { editing: !1 });
    }
  }
  (0, ce.default)(ka, "propTypes", {
    yOffset: n(d).number.isRequired,
    xOffset: n(d).number.isRequired,
    pxPerModel: n(d).number.isRequired,
    basePixelDensity: n(d).number.isRequired,
    selected: n(d).bool.isRequired,
    hovering: n(d).bool.isRequired,
    secondarySelected: n(d).bool,
    onMouseDown: n(d).func.isRequired,
    onHoverLayer: n(d).func.isRequired,
    onUnhoverLayer: n(d).func.isRequired,
    spotlight: n(d).bool,
    id: n(d).string.isRequired,
    shapeKey: n(d).string.isRequired,
    box: Cn.box,
    text: Cn.text,
    font: Cn.font,
    fill: Cn.fill,
    stroke: Cn.stroke,
    onFinishedComponentMount: n(d).func.isRequired
  }),
    (0, ce.default)(ka, "defaultProps", { onFinishedComponentMount: () => {} });
  s = a("7b0kr");
  var Ca = (e) => {
      let t = e.fill,
        r = void 0 === t ? "#666666" : t,
        o = e.width,
        i = void 0 === o ? 52 : o,
        a = e.height,
        l = void 0 === a ? 12 : a,
        u = e.scale,
        c = void 0 === u ? 1 : u,
        d = e.style,
        p = void 0 === d ? {} : d;
      return n(s).createElement(
        "svg",
        {
          version: "1.1",
          id: "L4",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 52 12",
          enableBackground: "new 0 0 0 0",
          xmlSpace: "preserve",
          width: i * c,
          height: l * c,
          style: p
        },
        n(s).createElement("title", null, "Loading"),
        n(s).createElement(
          "circle",
          { fill: r, stroke: "none", cx: "6", cy: "6", r: "6", opacity: "0" },
          n(s).createElement("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: "0.1" })
        ),
        n(s).createElement(
          "circle",
          { fill: r, stroke: "none", cx: "26", cy: "6", r: "6", opacity: "0" },
          n(s).createElement("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: "0.2" })
        ),
        n(s).createElement(
          "circle",
          { fill: r, stroke: "none", cx: "46", cy: "6", r: "6", opacity: "0" },
          n(s).createElement("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: "0.3" })
        )
      );
    },
    Ta = a("2kaV1");
  const Ra = "default",
    Pa = "copy",
    ja = "saveas",
    Ma = "editor_export";
  class Da extends s.Component {
    componentDidMount() {
      (this._mounted = !0),
        yi.on(je.EVT_DO_EXPORT, this._onTriggerExport),
        window.addEventListener(je.EVT_DROPDOWN_CLEAR, this._clearDLOptsHover),
        Te.default.setWebsiteABState();
    }
    componentWillUnmount() {
      (this._mounted = !1),
        yi.off(je.EVT_DO_EXPORT, this._onTriggerExport),
        window.removeEventListener(je.EVT_DROPDOWN_CLEAR, this._clearDLOptsHover);
    }
    componentDidUpdate(e) {
      const t = this.props.pastCount;
      !this.state.autoSlidedownEnabled && t > 8 && this.setState({ autoSlidedownEnabled: !0 });
    }
    doExport(e, t, r) {
      let o = void 0 === t ? null : t,
        i = void 0 === r ? Ra : r;
      const a = he.DateTime.now();
      if (this.state.isExporting) return;
      if (!this.props.user.isSubOk)
        return void (0, Ta.triggerNotifyText)(`😮 ${(0, Sn.tr)("You need to sign up in order to export your edited image.")}`, 4e3);
      const c = i === Pa,
        d = i === ja;
      if (c && !(0, na.canCopyBlobToClipboard)()) return void me.default.error("Cannot copy to clipboard, browser does not support it");
      this.setState({ isExporting: !0 }),
        (o = o || this.props.lastDlType),
        o !== this.props.lastDlType && this.props.onUpdateLastDlType(o),
        c && ((o = Pe.DL_TYPE_IMAGE), Ta.triggerNotifyText.copyingImage());
      const p = this.props,
        f = p.base,
        h = p.border,
        g = p.browserTemplate,
        m = p.cropBox,
        v = p.layers,
        y = p.format,
        b = p.links,
        x = c ? oa.default.png.canvas : (0, oa.getImageFormat)(y).canvas,
        w = x === oa.default.png.canvas,
        E = (0, Mi.computeBaseOffsets)(f.width, f.height, f.pixelDensity, m, g, 100, v, h, 0),
        _ = o === Pe.DL_TYPE_PDF;
      let S = g.offsets,
        O = document.createElement("canvas"),
        k = O.getContext("2d"),
        C = f.pixelDensity,
        T = k.webkitBackingStorePixelRatio || k.backingStorePixelRatio || 1,
        R = C / T;
      if (
        ((O.width = E.outerWidth * R),
        (O.height = E.outerHeight * R),
        (x === oa.default.jpg.canvas || _) && ((k.fillStyle = "#fff"), k.fillRect(0, 0, O.width, O.height)),
        k.scale(R, R),
        h)
      ) {
        const e = E.outerWidth,
          t = E.outerHeight;
        if ((h.stroke.width && ((k.fillStyle = h.stroke.color || "transparent"), k.fillRect(0, 0, e, t)), h.fill.fill || h.stroke.width)) {
          const r = h.stroke.width || 0,
            n = h.fill.fill ? "fillRect" : "clearRect";
          (k.fillStyle = h.fill.fill || "transparent"), k[n](r, r, e - 2 * r, t - 2 * r);
        }
      }
      k.translate(E.baseLeft, E.baseTop), ya(k, f.img, R, m, S.left, S.top);
      let P,
        j,
        M = 1e4,
        D = [],
        L = !1;
      var A = this;
      Promise.resolve()
        .then(() => g.draw(k, f.url))
        .then(() => {
          let e = S.left - m.x,
            t = S.top - m.y;
          return (0, gn.serialMap)(Ua(v), (r) =>
            new Promise((o, i) => {
              let a = document.createElement("div");
              Fa(a, { position: "absolute", left: "-10000px", top: "-10000px" }),
                n(l).render(
                  n(s).createElement(
                    ka,
                    (0, Ue.default)((0, de.default)({ xOffset: e, yOffset: t, pxPerModel: 1, basePixelDensity: C, base: f }, r), {
                      selected: !1,
                      hovering: !1,
                      onMouseDown: () => {},
                      onHoverLayer: () => {},
                      onUnhoverLayer: () => {},
                      onChangeProperties: () => {},
                      onFinishedComponentMount: () => o(a)
                    })
                  ),
                  a
                );
            })
              .then((e) => {
                document.body.appendChild(e), D.push(e);
                let t = e.querySelector("svg") || e.querySelector("canvas") || e.querySelector("img"),
                  n = t && t.getBoundingClientRect(),
                  o = n ? n.left + M : 0,
                  i = n ? n.top + M : 0,
                  a = t ? t.nodeName.toLowerCase() : "";
                switch (a) {
                  case "svg":
                    let e = Ha(t, n.width, n.height);
                    return (0, gn.loadImage)(e).then((e) => ((e.left = o), (e.top = i), e));
                  case "img":
                    return Promise.resolve({ img: t, left: o, top: i, width: t.width, height: t.height });
                  case "canvas":
                    const s = t.style.width ? parseInt(t.style.width) : t.width / C,
                      l = t.style.height ? parseInt(t.style.height) : t.height / C;
                    return Promise.resolve({ img: t, left: o, top: i, width: s, height: l });
                  default:
                    let u = new Error(`Unexpected nodeName: "${a}" for ${r.shapeKey}`);
                    throw ((u.name = "ExportLayerError"), u);
                }
              })
              .then((e) => {
                k.drawImage(e.img, e.left, e.top, e.width, e.height);
              })
          );
        })
        .then(() => {
          w ||
            (k.save(),
            (k.globalCompositeOperation = "destination-over"),
            (k.fillStyle = "#fff"),
            k.fillRect(0, 0, O.width, O.height),
            k.restore());
        })
        .then(
          (0, ue.default)(function () {
            var e, t, r, n, o, i, a;
            return (0, fe.__generator)(this, function (s) {
              switch (s.label) {
                case 0:
                  return [4, Promise.all([sa.default.load(), Te.default.loginStateProm()])];
                case 1:
                  return (
                    (e = pe.default.apply(void 0, [s.sent(), 2])),
                    (t = e[0]),
                    (r = e[1]),
                    _
                      ? ((n = (0, oa.getImageFormat)("jpg")),
                        (o = []),
                        g.textCoords && o.push((0, Ue.default)((0, de.default)({}, g.textCoords), { url: f.url })),
                        (i = t.pdf_insert_links && r && r.store.show_experimental),
                        b &&
                          Array.isArray(b) &&
                          b.length &&
                          i &&
                          (0, ta.flattenBounds)(b).forEach((e) => {
                            let t = e.x,
                              r = e.y,
                              n = e.width,
                              i = e.height;
                            if (t < m.x) {
                              if (t + n <= m.x) return;
                              (n -= m.x - t), (t = m.x);
                            } else if (t + n >= m.x + m.width) {
                              if (t >= m.x + m.width) return;
                              n -= t + n - (m.x + m.width);
                            }
                            if (r < m.y) {
                              if (r + i <= m.y) return;
                              (i -= m.y - r), (r = m.y);
                            } else if (r + i >= m.y + m.height) {
                              if (r >= m.y + m.height) return;
                              i -= r + i - (m.y + m.height);
                            }
                            (t += E.xOffset),
                              (r += E.yOffset),
                              o.push((0, Ue.default)((0, de.default)({}, e), { width: n, height: i, x: t, y: r }));
                          }),
                        [
                          2,
                          (0, aa.toPDF)(
                            [{ img: O, width: O.width, height: O.height }],
                            n,
                            R,
                            t.pdf_format,
                            t.pdf_smart_page && r && "sub-ok" === r.subState,
                            o
                          ).then((e) => e)
                        ])
                      : (c &&
                          t.fit_copies &&
                          ((a = (0, pe.default)((0, na.fitToMaxPixels)(O, na.GOOGLE_DOCS_MAX_PIXELS), 2)), (O = a[0]), (L = a[1])),
                        [2, (0, ea.canvasToBlob)(O, x)])
                  );
              }
            });
          })
        )
        .then(
          (function () {
            var t = (0, ue.default)(function (t) {
              var r, o, i, s, l, p, h;
              return (0, fe.__generator)(this, function (g) {
                switch (g.label) {
                  case 0:
                    if (c)
                      return (
                        u.default.event(Ma, "copy_img", e, v.length),
                        [
                          2,
                          (0, na.copyBlobToClipboard)(t)
                            .then(() => {
                              (0, me.default)("Copied to clipboard!"), Ta.triggerNotifyText.copiedImage(L);
                            })
                            .catch((e) => {
                              Ta.triggerNotifyText.clear(),
                                (e.title = ia.ERR_TITLE_COPY),
                                (e.displayMessage = ia.ERR_MSG_COPY),
                                (e.customMessage = "Error copying image."),
                                (e.noEmoji = !0),
                                (0, _e.addViaToError)(e, "Export.doExport.copyImage"),
                                A.props.onSetError(e);
                            })
                        ]
                      );
                    (P = (0, ea.blobToUrl)(t)),
                      n(Be).ok(f.src, `Missing base.src! ${f.src}`),
                      (r = f.src.split("/").pop()),
                      (o = r.split(".")),
                      (i = o.length > 1 ? `.${o.pop()}` : ""),
                      (s = _ ? ".pdf" : i),
                      (l = o.join(".")),
                      (j = `${l}-edit${s}`),
                      (g.label = 1);
                  case 1:
                    return g.trys.push([1, 3, , 7]), [4, A._doDownload(P, j, e, d)];
                  case 2:
                    return g.sent(), [3, 7];
                  case 3:
                    return (
                      (p = g.sent()),
                      me.default.error("[doExport._doDownload.ERROR]", p),
                      (h = he.DateTime.now()),
                      h.diff(a, "milliseconds").milliseconds + 10 > _e.GESTURE_TIMEOUT ||
                      (p &&
                        p.message &&
                        "string" == typeof p.message &&
                        -1 !== p.message.indexOf("This function must be called during a user gesture"))
                        ? [
                            4,
                            new Promise((t, r) => {
                              A._mounted &&
                                (A.setState({ retryModalOnClick: (r) => t(A._doDownload(P, j, e)) }),
                                window.setTimeout(() => {
                                  A.retryBtnRef.current && A.retryBtnRef.current.focus();
                                }, 250));
                            })
                          ]
                        : [3, 5]
                    );
                  case 4:
                    return g.sent(), [3, 6];
                  case 5:
                    throw p;
                  case 6:
                    return [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
            return function (e) {
              return t.apply(this, arguments);
            };
          })()
        )
        .catch((e) => {
          me.default.error("[doExport.ERROR]", e),
            c && (0, Ta.triggerNotifyText)(""),
            (e.customMessage = "Error exporting document."),
            (0, _e.addViaToError)(e, "Export.doExport"),
            this.props.onSetError(e);
        })
        .then(() => {
          this._mounted && this.setState({ isExporting: !1 }),
            D.forEach((e) => {
              e.parentNode.removeChild(e);
            }),
            (0, ea.revokeObjectUrl)(P);
        });
    }
    _doDownload(e, t, r, n) {
      let o = void 0 !== n && n;
      var i = this;
      return (0, ue.default)(function () {
        var n, a, s, l, c, d;
        return (0, fe.__generator)(this, function (p) {
          switch (p.label) {
            case 0:
              return (n = i.props.layers), [4, (0, ra.requestDownloads)()];
            case 1:
              return p.sent() ? [4, (0, _e.fullServiceDownload)([{ url: e, filename: t }], !1, o)] : [2];
            case 2:
              if (((a = p.sent()), (s = a.hasPerms), (l = a.results), (c = a.failCount), !s))
                throw (((d = new Error("No downloads perm despite just getting it!")).name = "UnreachableError"), d);
              if (c) throw l.find((e) => !1 === e.success).error;
              return void 0, u.default.event(Ma, "download", r, n.length), [2, undefined];
          }
        });
      })();
    }
    render() {
      const e = this.props,
        t = e.planAmount,
        r = e.isShowLoginDropdown,
        o = e.format,
        i = this.props.user,
        a = i.hasPreviouslyLoggedIn,
        l = i.isLoggedIn,
        u = i.isSubOk,
        c = this.state,
        d = c.isExporting,
        p = c.retryModalOnClick,
        f = c.autoSlidedownEnabled,
        h = c.hasDismissedSlidedown,
        g = c.showDownloadOptions,
        m = r || (f && !h);
      let v = n(vi)("dl-btn", { highlight: u }),
        y = {},
        b = {},
        x = (0, Sn.tr)("Download & Export"),
        w = null;
      return (
        u
          ? ((b = { onClick: this.makeHandleClick() }),
            (y = {
              onMouseOver: (e) => {
                this._clearDLOptsHoverDebounced.clear(),
                  (0, Me.default)(window, je.EVT_DROPDOWN_CLEAR),
                  this.setState({ showDownloadOptions: !0 });
              },
              onMouseLeave: (e) => {
                this._clearDLOptsHoverDebounced();
              }
            }),
            g &&
              (w = n(s).createElement(Na, {
                onClickDownloadImage: this.makeHandleClick(Pe.DL_TYPE_IMAGE),
                onClickDownloadPdf: this.makeHandleClick(Pe.DL_TYPE_PDF),
                lastDlType: this.props.lastDlType,
                format: o
              })))
          : !l && a
          ? ((x = (0, Sn.tr)("Login to Export")), (b = { onClick: this.props.onShowLoginPopup }))
          : ((x = (0, Sn.tr)("Sign up to Export")),
            (b = {
              onClick: this.props.onShowLoginDropdown,
              onMouseOver: (e) => (this.state.autoSlidedownEnabled && this.props.onShowLoginDropdown(e)) || !0
            }),
            m &&
              (w = n(s).createElement(Aa, {
                onShowLoginPopup: this.props.onShowLoginPopup,
                onShowSignupPopup: this.props.onShowSignupPopup,
                onHideLoginDropdown: this.handleHideLoginDropdown,
                planAmount: t
              }))),
        n(s).createElement(
          n(s).Fragment,
          null,
          n(s).createElement(
            "div",
            (0, de.default)({ className: "export header--text" }, y),
            n(s).createElement(
              la,
              (0, de.default)({ className: v }, b),
              n(s).createElement("span", { className: n(vi)("dl-btn-inner", { "is-exporting": d }) }, x, n(s).createElement(pa, null)),
              d && n(s).createElement("span", { className: "loader" }, n(s).createElement(Ca, { fill: "#fff" }))
            ),
            w
          ),
          p &&
            n(s).createElement(
              "div",
              { className: "export-retrymodal" },
              n(s).createElement(
                "div",
                { className: "export-retrymodal-inner" },
                "Image rendering finished:",
                n(s).createElement("br", null),
                n(s).createElement("br", null),
                n(s).createElement(
                  la,
                  {
                    ref: this.retryBtnRef,
                    className: "retry-btn",
                    type: "button",
                    onClick: (e) => {
                      var t = this;
                      Promise.resolve()
                        .then(
                          (0, ue.default)(function () {
                            return (0, fe.__generator)(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  return [4, p(e)];
                                case 1:
                                  return r.sent(), t.setState({ retryModalOnClick: null }), [2];
                              }
                            });
                          })
                        )
                        .catch((e) => {
                          (e.customMessage = "Error retrying exporting document."),
                            (0, _e.addViaToError)(e, "Export.retryModal"),
                            this.props.onSetError(e);
                        });
                    }
                  },
                  "Complete download",
                  n(s).createElement(pa, null)
                )
              )
            )
        )
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "_onTriggerExport", (e) => {
          let t = e.copy,
            r = e.saveAs,
            n = e.dlType,
            o = e.via;
          if (n) {
            if (!{ [Pe.DL_TYPE_IMAGE]: !0, [Pe.DL_TYPE_PDF]: !0 }[n]) throw new Error(`UNKNOWN DL TYPE: ${n}`);
          } else n = null;
          const i = !0 === t ? Pa : !0 === r ? ja : Ra;
          (o = o || "keyboard"), this.doExport(o, n, i);
        }),
        (0, ce.default)(this, "makeHandleClick", (e) => (t) => {
          this.doExport("mouse", e);
        }),
        (0, ce.default)(this, "handleHideLoginDropdown", () => {
          this.state.hasDismissedSlidedown || this.setState({ hasDismissedSlidedown: !0 }), this.props.onHideLoginDropdown();
        }),
        (this.state = {
          isExporting: !1,
          retryModalOnClick: null,
          autoSlidedownEnabled: !1,
          hasDismissedSlidedown: !1,
          showDownloadOptions: !1
        }),
        (this.retryBtnRef = n(s).createRef()),
        (this._clearDLOptsHover = () => this.setState({ showDownloadOptions: !1 })),
        (this._clearDLOptsHoverDebounced = (0, we.debounce)(this._clearDLOptsHover, 300));
    }
  }
  (0, ce.default)(Da, "propTypes", {
    layers: n(d).array,
    browserTemplate: n(d).object,
    cropBox: n(d).shape({
      x: n(d).number.isRequired,
      y: n(d).number.isRequired,
      width: n(d).number.isRequired,
      height: n(d).number.isRequired
    }).isRequired,
    base: n(d).shape({
      img: n(d).object.isRequired,
      src: n(d).string.isRequired,
      width: n(d).number.isRequired,
      height: n(d).number.isRequired,
      pixelDensity: n(d).number.isRequired
    }),
    format: n(d).oneOf(["jpg", "png"]).isRequired,
    links: n(d).arrayOf(
      n(d).shape({
        bounds: n(d).arrayOf(
          n(d).shape({
            x: n(d).number.isRequired,
            y: n(d).number.isRequired,
            width: n(d).number.isRequired,
            height: n(d).number.isRequired
          })
        ),
        url: n(d).string.isRequired
      })
    ),
    pastCount: n(d).number.isRequired,
    lastDlType: n(d).oneOf([Pe.DL_TYPE_IMAGE, Pe.DL_TYPE_PDF]).isRequired,
    user: n(d).shape({ isLoggedIn: n(d).bool.isRequired, hasPreviouslyLoggedIn: n(d).bool.isRequired, isSubOk: n(d).bool.isRequired }),
    isShowLoginDropdown: n(d).bool.isRequired,
    planAmount: n(d).number.isRequired,
    onSetError: n(d).func.isRequired,
    onShowLoginPopup: n(d).func.isRequired,
    onShowLoginDropdown: n(d).func.isRequired,
    onHideLoginDropdown: n(d).func.isRequired,
    onUpdateLastDlType: n(d).func.isRequired
  });
  const La = (e) => {
      let t = e.children,
        r = e.className;
      const o = (0, pe.default)((0, s.useState)(!1), 2),
        i = o[0],
        a = o[1];
      return (
        (0, s.useEffect)(() => {
          a(!0);
        }, []),
        (0, s.useEffect)(
          () => () => {
            a(!1);
          },
          []
        ),
        n(s).createElement(
          "div",
          { className: n(vi)("exportdropdown", r) },
          n(s).createElement("div", { className: n(vi)("exportdropdown--content", { show: i }) }, t)
        )
      );
    },
    Aa = (e) => {
      let t = e.onShowLoginPopup,
        r = e.onShowSignupPopup,
        o = e.onHideLoginDropdown,
        i = e.planAmount;
      return n(s).createElement(
        La,
        { className: "logindropdown" },
        n(s).createElement("p", null, (0, Sn.tr)("Sign up for a free 7-day trial to unlock the editor and download your masterpiece.")),
        n(s).createElement(
          "p",
          null,
          n(s).createElement(
            la,
            {
              className: "checkout",
              onClick: () => {
                Ia("checkout"), r();
              }
            },
            (0, Sn.tr)("Start your free trial")
          )
        ),
        n(s).createElement(
          "p",
          { className: "small" },
          n(s).createElement(da, { cents: i, monthly: !0, simplify: !0 }),
          "/mo ",
          `(${(0, Sn.tr)("billed annually")})`,
          " ",
          n(s).createElement("span", { className: "nowrap" }, (0, Sn.tr)("upon trial completion"), ","),
          " ",
          n(s).createElement("span", { className: "nowrap" }, (0, Sn.tr)("cancel anytime"))
        ),
        n(s).createElement(
          "p",
          { className: "small" },
          n(s).createElement(
            "a",
            {
              className: "plainlink underline",
              href: Pe.PREMIUM_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: () => {
                Ia("learnMore");
              }
            },
            (0, Sn.tr)("Learn more")
          ),
          n(s).createElement(
            "a",
            {
              href: "#",
              className: "plainlink underline",
              onClick: (e) => {
                e.preventDefault(), Ia("noThanks"), o();
              }
            },
            (0, Sn.tr)("No thanks continue editing")
          ),
          n(s).createElement("a", { href: "#", className: "plainlink underline", onClick: t }, (0, Sn.tr)("Sign in with existing account"))
        )
      );
    },
    Na = (e) => {
      let t = e.onClickDownloadImage,
        r = e.onClickDownloadPdf,
        o = e.lastDlType,
        i = e.format;
      const a = [
          {
            name: `${(0, Sn.tr)("Download image", "actionDownloadImage")} (${i && i.toUpperCase()})`,
            Icon: fa,
            onClick: t,
            dlType: Pe.DL_TYPE_IMAGE
          },
          { name: (0, Sn.tr)("Download PDF", "actionDownloadPDF"), Icon: ga, onClick: r, dlType: Pe.DL_TYPE_PDF }
        ],
        l = (0, pe.default)((0, s.useState)(o), 2),
        u = l[0],
        c = l[1];
      return n(s).createElement(
        La,
        { className: "exportoptionsdropdown" },
        n(s).createElement(
          "ul",
          null,
          a.map((e) => {
            let t = e.name,
              r = e.Icon,
              o = e.onClick,
              i = e.dlType;
            return n(s).createElement(
              "li",
              {
                key: t,
                className: n(vi)({ active: i === u }),
                onClick: ((a = o), (e) => (e.preventDefault(), e.stopPropagation(), a(e))),
                onMouseOver: () => {
                  c(i);
                }
              },
              n(s).createElement(r, { fitWidth: 16, fitHeight: 16 }),
              " ",
              t
            );
            var a;
          })
        )
      );
    },
    Ia = (e) => {
      u.default.event("loginDropdown", e);
    },
    Ha = (e, t, r) => {
      const n = `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${r}">${e.innerHTML}</svg>`;
      return `data:image/svg+xml;base64,${(0, Qi.btoaUTF8)(n)}`;
    },
    Fa = (e, t) => {
      Object.entries(t).forEach((t) => {
        let r = (0, pe.default)(t, 2),
          n = r[0],
          o = r[1];
        e.style[n] = o;
      });
    },
    Ua = (e) => e.slice(0).reverse();
  var Ba = Da;
  (Pe = a("8DwkQ")), (pe = a("ff4Ef"));
  const za = (e, t, r, n) => {
      let o = void 0 === n ? {} : n;
      const i = window.outerWidth,
        a = window.outerHeight,
        s = window.screenX,
        l = window.screenY;
      let u = (r = Object.assign({}, r)).width,
        c = r.height,
        d = r.left,
        p = r.top;
      const f = o.center,
        h = o.focus;
      (u = u || window.outerWidth),
        (c = c || window.outerHeight),
        Object.assign(r, { width: u, height: c }),
        f && ((d = s + (i - u) / 2), d < 0 && (d = 100), (p = l + (a - c) / 2), p < 0 && (p = 100), Object.assign(r, { left: d, top: p }));
      const g = Object.entries(r)
          .map((e) => {
            let t = (0, pe.default)(e, 2),
              r = t[0],
              n = t[1];
            return `${r}=${"boolean" == typeof n ? (n ? "yes" : "no") : n}`;
          })
          .join(","),
        m = window.open(e, t || "_blank", g);
      return h && m.focus(), m;
    },
    Wa = () => Va(Pe.IFRAME_LOGIN_URL),
    qa = () => Va(Pe.IFRAME_SIGNUP_URL),
    Va = (e) => {
      za(
        e,
        "fpsc_login",
        { width: 540, height: 770, menubar: !1, toolbar: !1, location: !0, status: !1, scrollbars: !0 },
        { center: !0, focus: !0 }
      );
    };
  var Ya = le(
      (e) => ({
        base: e.base.img ? e.base : null,
        format: (e.capture && e.capture.format) || "png",
        border: Hi(e),
        browserTemplate: Wi(e),
        cropBox: Ui(e),
        layers: Di(e),
        links: e.capture.links || null,
        pastCount: e.undos.past.length,
        lastDlType: e.capture.lastDlType,
        user: Gi(e),
        isShowLoginDropdown: e.editor.showLoginDropdown || !1,
        planAmount: e.capture.planAmount
      }),
      (e) => ({
        onSetError: (t) => e(_n(t)),
        onShowLoginDropdown: () => e({ type: pr, payload: { showLoginDropdown: !0 } }),
        onHideLoginDropdown: () => e({ type: fr, payload: { showLoginDropdown: !1 } }),
        onShowLoginPopup: () => Wa(),
        onShowSignupPopup: () => qa(),
        onUpdateLastDlType: (t) => e(Fe(t))
      })
    )(Ba),
    $a =
      ((yi = a("erNYL")),
      (u = a("ceb36")),
      (ce = a("iPbYd")),
      (de = a("jBCXK")),
      (Ue = a("hGGFE")),
      (pe = a("ff4Ef")),
      (Be = a("4fNEN")),
      (d = a("3pr9z")),
      (s = a("7b0kr")),
      (yi = a("erNYL")),
      (je = a("fueUa")),
      a("iCPfM")),
    Ga = ((Mi = a("3cJ8u")), (ce = a("iPbYd")), (Be = a("4fNEN")), (vi = a("gwJFa")), (d = a("3pr9z")), (s = a("7b0kr")), a("nKr4g"));
  (Sn = a("5Xemj")), (je = a("fueUa"));
  const Ka = [],
    Xa = (e, t, r) => {
      let n = Ka.find((t) => t.elt === e);
      if ((n || ((n = { elt: e, evts: {} }), Ka.push(n)), !n.evts[t])) {
        const r = [],
          o = Ja(r);
        (n.evts[t] = { handler: o, fns: r }), e.addEventListener(t, o, !1);
      }
      n.evts[t].fns.push(r);
    },
    Za = (e, t, r) => {
      let n = 0,
        o = Ka.find((t, r) => ((n = r), t.elt === e));
      if (o && o.evts[t]) {
        let i = o.evts[t].fns,
          a = 0;
        i.find((e, t) => ((a = t), r === e)) && i.splice(a, 1),
          i.length || (e.removeEventListener(t, o.evts[t].handler), delete o.evts[t], 0 === Object.keys(o.evts).length && Ka.splice(n, 1));
      }
    },
    Ja = (e) => (t) => {
      e.forEach((e) => {
        e.call(t.target, t);
      });
    };
  (Me = a("fAoww")), (Bn = a("5Gpcw"));
  const Qa = (e) => {
      let t = e.cmd,
        r = e.ctrl,
        n = e.alt,
        o = e.shift,
        i = e.char;
      const a = (0, Bn.getIsMac)(),
        s = [];
      return t && s.push(a ? "⌘" : "⌃"), r && s.push("⌃"), n && s.push("⌥"), o && s.push("⇧"), s.push(i), s.join("");
    },
    es = (e) => ((0, Bn.getIsMac)() ? e.metaKey : e.ctrlKey),
    ts = (e) => ("which" in e ? 3 === e.which : "button" in e && 2 === e.button),
    rs = (e) => ((null !== ns && !0 !== e) || (ns = os()), ns);
  let ns = null;
  const os = () => {
      let e = document.createElement("div");
      Object.assign(e.style, {
        width: "100px",
        height: "100px",
        overflow: "scroll",
        position: "absolute",
        top: "-9999px",
        left: "-9999px"
      }),
        document.body.appendChild(e);
      let t = e.offsetWidth - e.clientWidth,
        r = e.offsetHeight - e.clientHeight;
      return document.body.removeChild(e), { width: t, height: r };
    },
    is = (e, t) => {
      t = t || e.currentTarget;
      const r = ss(e, t),
        n = r.targetX,
        o = r.targetY;
      return as(t, n, o);
    },
    as = (e, t, r) => {
      const n = e.clientWidth,
        o = e.clientHeight;
      return t >= n || r >= o;
    },
    ss = (e, t) => {
      t = t || e.currentTarget;
      let r = ls(t),
        n = r.left,
        o = r.top;
      return { targetX: e.pageX - n, targetY: e.pageY - o };
    },
    ls = (e) => {
      let t = 0,
        r = 0;
      for (; e; ) (t += e.offsetLeft), (r += e.offsetTop), (e = e.offsetParent);
      return { left: t, top: r };
    },
    us = je.LAYOUT_ROWS,
    cs = { [je.LAYOUT_ROWS]: { className: "layout-rows" }, [je.LAYOUT_GRID]: { className: "layout-grid" } };
  let ds = 0;
  n(Be).ok(Object.keys(cs).length === je.LAYOUTS.length, "Missing a known layout");
  class ps extends s.PureComponent {
    componentDidMount() {
      (this._isMounted = !0), Xa(window, je.EVT_DROPDOWN_CLEAR, this._clearHover);
    }
    componentWillUnmount() {
      (this._isMounted = !1), Za(window, je.EVT_DROPDOWN_CLEAR, this._clearHover);
    }
    _makeRowsUl(e, t, r) {
      const o = this.props,
        i = o.rowClassFn,
        a = o.renderRow,
        l = o.layout,
        u = this.state.searchText,
        c = e.rows,
        d = e.key,
        p = e.className,
        f = e.layout,
        h = e.isSearch,
        g = e.didSearch,
        m = c.length,
        v = c.map((e, r) =>
          n(s).createElement(
            "li",
            {
              key: e.key || e.id || r,
              className: n(vi)(!0 === e.noInsert ? "no-insert" : null, i ? i(e) : "", e.className, { "is-link": e.isLink }),
              title: e.title || "",
              onMouseDown: (n) => this.handleMouseDown(n, e, t, r),
              onMouseOver: (t) => {
                if ((t.preventDefault(), this.props.onSetSubCfg))
                  if (e.subCfg) {
                    const r = t.currentTarget,
                      n = Ga.$.offsets(r),
                      o = Ga.$.offsets(this.wrapperRef.current),
                      i = { x: n.left - o.left, y: n.top - o.top, width: r.offsetWidth, height: r.offsetHeight };
                    this.props.onSetSubCfg({ subCfg: e.subCfg, offsets: i });
                  } else this.props.onSetSubCfg({ subCfg: null });
              }
            },
            a(e, t, r)
          )
        ),
        y = cs[f || l];
      r.add(`has-${y.className}`);
      const b = n(vi)(y.className, p);
      let x = 0 === m ? null : n(s).createElement("ul", { key: d || t, className: b }, v);
      return (
        h &&
          (x = n(s).createElement(
            "div",
            { key: d || t, className: "dropdown--search--wrap" },
            n(s).createElement(
              "div",
              { className: "dropdown--search" },
              n(s).createElement("input", {
                ref: this.searchInputRef,
                type: "text",
                className: "dropdown--search--text",
                placeholder: (0, Sn.tr)("search…"),
                value: u,
                onChange: this.handleSearchChange,
                onKeyDown: this.stopProp,
                onKeyUp: this.handleSearchKeyUp
              }),
              u && n(s).createElement(wi, { onClick: this.handleClearSearch, fill: "#333" })
            ),
            x,
            g && 0 === m && n(s).createElement("div", { className: "dropdown--search--msg" }, "No matches found")
          )),
        x
      );
    }
    render() {
      const e = this.props,
        t = e.title,
        r = e.alignRight,
        o = e.icon,
        i = e.search,
        a = e.offsets,
        l = e.hideHeader,
        u = e.children;
      let c = this.props.sections;
      const d = this.state,
        p = d.showCount,
        f = d.searchText;
      let h = l || this.state.hovering;
      if (p < this._totalRows()) {
        let e = p;
        c = c
          .map((t) => {
            let r = t.rows.slice(0, e);
            return (e -= r.length), Object.assign({}, t, { rows: r });
          })
          .filter((e) => e.rows.length > 0);
      }
      const g = new Set();
      i && (c = [i.fn(f.toLowerCase().trim())].concat(c));
      const m = c.map((e, t) => {
          const r = e.heading,
            o = e.key,
            i = this._makeRowsUl(e, t, g);
          return r
            ? n(s).createElement(
                "div",
                { key: o || t, className: "dropdown--heading--wrap" },
                n(s).createElement("div", { className: "dropdown--heading" }, r),
                i
              )
            : i;
        }),
        v = n(vi)("dropdown--rows", { hover: h }, Array.from(g));
      let y;
      this.props.width && (y = { width: `${this.props.width + rs().width}px` });
      const b = n(vi)("dropdown", this.props.className, { "align-right": r, "is-hovering": h }),
        x = a ? { position: "absolute", left: `${a.x + a.width + 1}px`, top: a.y - 3 + "px" } : void 0;
      return n(s).createElement(
        "div",
        {
          className: b,
          onMouseOver: this.handleMouseOver,
          onMouseLeave: this.handleMouseLeave,
          onClick: (e) => e.stopPropagation(),
          onMouseDown: (e) => e.stopPropagation(),
          style: x,
          ref: this.wrapperRef
        },
        !l && n(s).createElement("span", { className: "dropdown--title header--text selectable" }, t, o),
        n(s).createElement("div", { ref: this.listRef, style: y, className: v, onScroll: this.handleScroll }, m),
        h && u
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "handleScroll", (e) => {
          const t = e.currentTarget,
            r = this._totalRows();
          this.state.showCount < r &&
            t &&
            1.5 * t.offsetHeight + t.scrollTop >= t.scrollHeight &&
            this.setState((e, t) => ({ showCount: e.showCount + t.showCountIncr }));
        }),
        (0, ce.default)(this, "handleMouseOver", (e) => {
          this._clearHoverDebounced.clear(),
            (0, Me.default)(window, je.EVT_DROPDOWN_CLEAR, { index: this.dropdownIndex, depth: this.props.depth }),
            this.setState({ hovering: !0 }),
            this.props.onMouseOver && this.props.onMouseOver(e);
        }),
        (0, ce.default)(this, "handleMouseLeave", (e) => {
          this._clearHoverDebounced();
        }),
        (0, ce.default)(this, "handleMouseDown", (e, t, r, n) => {
          !!e.target.closest("a") ||
            (e.preventDefault(), e.stopPropagation(), t.noInsert || (this.setState({ hovering: !1 }), this.props.onSelectRow(t, r, n)));
        }),
        (0, ce.default)(this, "handleSearchChange", (e) => {
          e.stopPropagation(), this.setState({ searchText: e.target.value });
        }),
        (0, ce.default)(this, "handleSearchKeyUp", (e) => {
          e.stopPropagation(), 27 === e.keyCode && this._clearHover();
        }),
        (0, ce.default)(this, "handleClearSearch", (e) => {
          this.setState({ searchText: "" }), this.searchInputRef.current && this.searchInputRef.current.focus();
        }),
        (0, ce.default)(this, "stopProp", (e) => {
          e.stopPropagation();
        }),
        (0, ce.default)(this, "_totalRows", () => this.props.sections.reduce((e, t) => e + t.rows.length, 0)),
        (this.dropdownIndex = ++ds),
        (this.state = { hovering: !1, showCount: e.showCountIncr, searchText: "" }),
        (this._clearHover = (e) => {
          if (!this._isMounted) return;
          const t = (e && e.detail) || {},
            r = t.depth || -1,
            n = t.index || -1;
          this.dropdownIndex !== n &&
            this.props.depth >= r &&
            (this.setState({ hovering: !1 }), this.props.onClear && this.props.onClear());
        }),
        (this._clearHoverDebounced = (0, we.debounce)(this._clearHover, 400)),
        (this.wrapperRef = n(s).createRef()),
        (this.listRef = n(s).createRef()),
        (this.searchInputRef = n(s).createRef());
    }
  }
  (0, ce.default)(ps, "propTypes", {
    className: n(d).string,
    showCountIncr: n(d).number.isRequired,
    title: n(d).any.isRequired,
    sections: n(d).arrayOf(n(d).shape({ heading: n(d).string, rows: n(d).array.isRequired, layout: n(d).oneOf(je.LAYOUTS) })).isRequired,
    search: n(d).shape({ fn: n(d).func.isRequired }),
    layout: n(d).oneOf(je.LAYOUTS),
    width: n(d).number,
    rowClassFn: n(d).func,
    renderRow: n(d).func.isRequired,
    onSelectRow: n(d).func.isRequired,
    onSetSubCfg: n(d).func,
    onMouseOver: n(d).func,
    alignRight: n(d).bool.isRequired,
    icon: n(d).node,
    offsets: n(d).shape({
      x: n(d).number.isRequired,
      y: n(d).number.isRequired,
      width: n(d).number.isRequired,
      height: n(d).number.isRequired
    }),
    depth: n(d).number,
    hideHeader: n(d).bool,
    onClear: n(d).func
  }),
    (0, ce.default)(ps, "defaultProps", { showCountIncr: 160, alignRight: !1, layout: us, depth: 0 });
  var fs = ps;
  const hs = { x: 0, y: 0, width: 0, heigt: 0 };
  class gs extends s.PureComponent {
    componentDidMount() {
      this._mounted = !0;
      "shapes" === this.props.cfg.key && ((this._attachedHandler = !0), yi.on(je.EVT_INSERT_SHAPE, this._onInsertShape));
    }
    componentWillUnmount() {
      (this._mounted = !1), this._attachedHandler && yi.off(je.EVT_INSERT_SHAPE, this._onInsertShape);
    }
    render() {
      const e = this.props.cfg,
        t = e.title,
        r = e.search,
        o = e.sections,
        i = e.width,
        a = this.props,
        l = a.offsets,
        u = a.depth,
        c = this.state,
        d = c.subCfg,
        p = c.subCfgEltOffsets;
      return n(s).createElement(
        fs,
        {
          className: "insertwidget",
          title: t,
          search: r,
          sections: o,
          width: i,
          offsets: l,
          hideHeader: Boolean(l),
          renderRow: this.renderRow,
          onSelectRow: this.handleSelectRow,
          onSetSubCfg: this.handleSetSubCfg,
          onClear: this.handleClear,
          depth: u
        },
        d && p && n(s).createElement(gs, (0, Ue.default)((0, de.default)({}, this.props), { cfg: d, offsets: p, depth: u + 1 }))
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "_onInsertShape", (e) => {
          let t = e.type;
          var r = !0,
            n = !1,
            o = void 0;
          try {
            for (var i, a = this.props.cfg.sections[Symbol.iterator](); !(r = (i = a.next()).done); r = !0) {
              let e = i.value;
              var s = !0,
                l = !1,
                u = void 0;
              try {
                for (var c, d = e.rows[Symbol.iterator](); !(s = (c = d.next()).done); s = !0) {
                  let e = c.value;
                  if (e.shape.type === t) {
                    this.handleSelectRow(e);
                    break;
                  }
                }
              } catch (e) {
                (l = !0), (u = e);
              } finally {
                try {
                  s || null == d.return || d.return();
                } finally {
                  if (l) throw u;
                }
              }
            }
          } catch (e) {
            (n = !0), (o = e);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (n) throw o;
            }
          }
        }),
        (0, ce.default)(this, "handleSelectRow", (e) => {
          let t = e.shape,
            r = e.groups;
          if (e.noInsert) return;
          let o = (0, $a.generateLayerId)();
          const i = this.props.shapeDefaults;
          i[t.type] &&
            ((r = r ? zo(r) : {}),
            Object.entries(i[t.type]).forEach((e) => {
              let t = (0, pe.default)(e, 2),
                n = t[0],
                o = t[1];
              r[n] = Object.assign(r[n] || {}, o);
            }));
          const a = this.props,
            s = a.browserTemplate,
            l = a.cropBox,
            u = a.zoom,
            c = (0, Mi.getCenterCoords)(s, l, u),
            d = c.centerX,
            p = c.centerY;
          c.width, c.height;
          let f,
            h,
            g = 0,
            m = 0;
          var v, y;
          t.type === Ao
            ? ((f = g + 200), (h = m + 100))
            : t.type === Po
            ? ((f = g + r.icon.width),
              (h = m + r.icon.height),
              n(Be).number(f, "InsertWidget.handleClick.icon.x2"),
              n(Be).number(h, "InsertWidget.handleClick.icon.y2"))
            : t.isSquare && t.isBox
            ? ((f = g + 100), (h = m + 100))
            : t.isBox
            ? ((f = g + 200), (h = m + 100))
            : ((f = g + 150), (h = m + 0)),
            (g = (v = [d - Math.floor((g + f) / 2), d + Math.ceil((g + f) / 2)])[0]),
            (f = v[1]),
            (m = (y = [p - Math.floor((m + h) / 2), p + Math.ceil((m + h) / 2)])[0]),
            (h = y[1]),
            n(Be).number(g, "x1"),
            n(Be).number(m, "y1"),
            n(Be).number(f, "x2"),
            n(Be).number(h, "y2");
          const b = t.addToBottom || !1;
          this.props.addLayer(o, t.type, g, m, f, h, r, b);
        }),
        (0, ce.default)(this, "handleSetSubCfg", (e) => {
          let t = e.subCfg,
            r = e.offsets;
          if (t && r) {
            const e = 357,
              n = 60;
            r.y + e > window.innerHeight && (r.y = Math.max(n, window.innerHeight - e)), this.setState({ subCfg: t, subCfgEltOffsets: r });
          } else this.setState({ subCfg: null, subCfgEltOffsets: hs });
        }),
        (0, ce.default)(this, "handleClear", () => {
          this.setState({ subCfg: null, subCfgEltOffsets: hs });
        }),
        (0, ce.default)(this, "renderRow", (e) => {
          let t = e.shape,
            r = (e.groups, e.text),
            o = (e.title, e.className, e.imgData);
          e.subCfg;
          return (
            (r = r || t.title),
            o
              ? n(s).createElement("img", { src: o.src1x, srcSet: `${o.src2x} 2x`, width: o.width, height: o.height, alt: r })
              : t.Icon
              ? n(s).createElement(
                  "div",
                  { className: "layout-row--icon" },
                  t.insertKey && n(s).createElement("span", { className: "insert-shortcut" }, t.insertKey),
                  n(s).createElement(t.Icon, { className: "insert-icon" }),
                  r
                )
              : r
          );
        }),
        (this.state = { subCfg: null, subCfgEltOffsets: hs });
    }
  }
  (0, ce.default)(gs, "defaultProps", { depth: 0 }),
    (0, ce.default)(gs, "propTypes", {
      cfg: n(d).shape({
        key: n(d).string.isRequired,
        title: n(d).string.isRequired,
        search: n(d).shape({ fn: n(d).func.isRequired }),
        sections: n(d).arrayOf(
          n(d).shape({
            heading: n(d).string,
            rows: n(d).arrayOf(
              n(d).shape({
                title: n(d).string,
                shape: n(d).object.isRequired,
                groups: n(d).object,
                text: n(d).string,
                imgData: n(d).object
              })
            ),
            layout: n(d).oneOf(je.LAYOUTS).isRequired,
            isSearch: n(d).bool
          })
        ).isRequired
      }).isRequired,
      zoom: n(d).number.isRequired,
      browserTemplate: n(d).object,
      cropBox: n(d).object,
      shapeDefaults: n(d).object,
      offsets: n(d).shape({
        x: n(d).number.isRequired,
        y: n(d).number.isRequired,
        width: n(d).number.isRequired,
        height: n(d).number.isRequired
      }),
      depth: n(d).number
    });
  var ms = gs;
  (je = a("fueUa")), (pe = a("ff4Ef")), (s = a("7b0kr")), (Sn = a("5Xemj")), (de = a("jBCXK"));
  function vs(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
    return o;
  }
  function ys(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = vs(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  s = a("7b0kr");
  const bs = (e) => {
    var t = e.fill,
      r = void 0 === t ? "#666" : t,
      o = ys(e, ["fill"]);
    return n(s).createElement(
      "svg",
      (0, de.default)({ width: "8", height: "8", viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o),
      n(s).createElement("path", { d: "M8 4L1.27147e-07 7.99998L0 -3.49691e-07L8 4Z", fill: r })
    );
  };
  bs.displayName = "MoreArrow";
  var xs = bs;
  s = a("7b0kr");
  const ws = (e) => {
    let t = e.className;
    return n(s).createElement(
      "div",
      {
        style: { width: "26px", height: "26px", display: "inline-block", fontSize: "16px", lineHeight: "24px", textAlign: "center" },
        className: t
      },
      "🙂"
    );
  };
  ws.displayName = "ShapeSticker";
  var Es,
    _s = ws;
  (je = a("fueUa")), (zn = a("fDLJ6"));
  Es = a("8r5Kp").getBundleURL("jNUyp") + a("fquJx").resolve("l1JRo");
  var Ss;
  Ss = a("8r5Kp").getBundleURL("jNUyp") + a("fquJx").resolve("fRaJR");
  var Os;
  Os = a("8r5Kp").getBundleURL("jNUyp") + a("fquJx").resolve("liT8a");
  var ks;
  ks = a("8r5Kp").getBundleURL("jNUyp") + a("fquJx").resolve("eQGfm");
  var Cs = {
    default: { width: 25, height: 25, densities: { "1x": n(Os), "2x": n(ks) } },
    pointer: { width: 25, height: 25, densities: { "1x": n(Es), "2x": n(Ss) } }
  };
  const Ts = {
    key: "stickers",
    title: (0, Sn.tr)("Stickers"),
    width: 256,
    sections: [
      {
        key: "icons",
        heading: (0, Sn.tr)("Elements"),
        rows: Object.entries(Cs).map((e) => {
          let t = (0, pe.default)(e, 2),
            r = t[0],
            n = t[1],
            o = { src1x: n.densities["1x"], src2x: n.densities["2x"], width: n.width, height: n.height };
          return { title: "", text: r, shape: Uo[Po], groups: { icon: o }, imgData: o };
        }),
        layout: je.LAYOUT_GRID
      }
    ]
  };
  if (
    (zn.default.forEach((e) => {
      let t = e.group,
        r = e.emojis;
      Ts.sections.push({
        key: `emojis-${t}`,
        heading: t,
        rows: r.map((e) => {
          let t = e.text;
          return { title: e.name, text: t, shape: Uo[Ro], className: "emoji", groups: { text: { text: t } } };
        }),
        layout: je.LAYOUT_GRID
      });
    }),
    zn.default.length)
  ) {
    let e = 48;
    Ts.search = {
      fn: (t) => {
        let r = !1,
          n = [];
        return (
          ((t = t.startsWith("num") ? "keycap" : { smile: "smil", "?": "question", "!": "exclam", x: "cross" }[t] || t).length >= 2 ||
            /^\d+$/.test(t)) &&
            ((r = !0),
            (n = Ts.sections.reduce((r, n) => {
              let o = n.rows;
              return r.length >= e ? r : r.concat(o.filter((e) => ~e.title.indexOf(t)));
            }, [])),
            n.length > e && (n = n.slice(0, e))),
          { heading: "", rows: n, layout: je.LAYOUT_GRID, isSearch: !0, didSearch: r }
        );
      }
    };
  }
  const Rs = {
    key: "shapes",
    title: (0, Sn.tr)("Shapes"),
    sections: [
      {
        key: "shapes",
        heading: "",
        rows: Object.entries(Uo)
          .filter((e) => {
            let t = (0, pe.default)(e, 2);
            t[0];
            return !t[1].hide;
          })
          .map((e) => {
            let t = (0, pe.default)(e, 2);
            t[0];
            return { shape: t[1] };
          }),
        layout: je.LAYOUT_ROWS
      },
      {
        key: "stickers",
        heading: "",
        rows: [
          {
            shape: { title: "Stickers…", Icon: _s, insertKey: n(s).createElement(xs, { className: "insert-arrow" }) },
            subCfg: Ts,
            noInsert: !0
          }
        ],
        layout: je.LAYOUT_ROWS
      }
    ]
  };
  var Ps = [Rs].map((e) =>
    le(
      (t) => ({ cfg: e, zoom: t.editor.zoom || 100, browserTemplate: Wi(t), cropBox: Ui(t), shapeDefaults: t.shapeDefaults }),
      (e) => ({
        addLayer: (t, r, n, o, i, a, s, l) => (
          u.default.event("editor_insert", r, "dropdown"), (0, yi.trigger)(je.EVT_ADD_LAYER, { id: t }), e(Yt(t, r, n, o, i, a, s, l))
        )
      })
    )(ms)
  );
  (u = a("ceb36")), (s = a("7b0kr")), (Sn = a("5Xemj")), (d = a("3pr9z"));
  const js = (e) => {
    let t = { cursor: "pointer", userSelect: "none" };
    return n(s).createElement(
      n(s).Fragment,
      null,
      n(s).createElement(
        "div",
        { className: "header--text selectable", style: t, onClick: (t) => e.onUndo() },
        (0, Sn.tr)("Undo"),
        " (",
        e.pastCount,
        ")"
      ),
      n(s).createElement(
        "div",
        { className: "header--text selectable", style: t, onClick: (t) => e.onRedo() },
        (0, Sn.tr)("Redo"),
        " (",
        e.futureCount,
        ")"
      )
    );
  };
  js.propTypes = {
    pastCount: n(d).number.isRequired,
    futureCount: n(d).number.isRequired,
    onUndo: n(d).func.isRequired,
    onRedo: n(d).func.isRequired
  };
  var Ms = js;
  var Ds = le(
      (e) => ({ pastCount: e.undos.past.length, futureCount: e.undos.future.length }),
      (e) => ({
        onUndo: () => (u.default.event("editor_undo", "undo"), e(Gr.ActionCreators.undo())),
        onRedo: () => (u.default.event("editor_undo", "redo"), e(Gr.ActionCreators.redo()))
      })
    )(Ms),
    Ls =
      ((u = a("ceb36")),
      (ce = a("iPbYd")),
      (s = a("7b0kr")),
      (d = a("3pr9z")),
      (ce = a("iPbYd")),
      (de = a("jBCXK")),
      (vi = a("gwJFa")),
      (d = a("3pr9z")),
      (s = a("7b0kr")),
      (je = a("fueUa")),
      (Me = a("fAoww")),
      (ce = a("iPbYd")),
      (vi = a("gwJFa")),
      (d = a("3pr9z")),
      (s = a("7b0kr")),
      (s = a("7b0kr")),
      {});
  Object.defineProperty(Ls, "__esModule", { value: !0 }), (Ls.ReactCSS = Ls.loop = Ls.handleActive = Ls.handleHover = Ls.hover = void 0);
  var As = {};
  Object.defineProperty(As, "__esModule", { value: !0 }), (As.flattenNames = void 0);
  var Ns,
    Is = {};
  Ns = (Nu = a("gs5dt")).Symbol;
  var Hs = {},
    Fs = Object.prototype,
    Us = Fs.hasOwnProperty,
    Bs = Fs.toString,
    zs = Ns ? Ns.toStringTag : void 0;
  Hs = function (e) {
    var t = Us.call(e, zs),
      r = e[zs];
    try {
      e[zs] = void 0;
      var n = !0;
    } catch (e) {}
    var o = Bs.call(e);
    return n && (t ? (e[zs] = r) : delete e[zs]), o;
  };
  var Ws = {},
    qs = Object.prototype.toString;
  Ws = function (e) {
    return qs.call(e);
  };
  var Vs = "[object Null]",
    Ys = "[object Undefined]",
    $s = Ns ? Ns.toStringTag : void 0;
  Is = function (e) {
    return null == e ? (void 0 === e ? Ys : Vs) : $s && $s in Object(e) ? Hs(e) : Ws(e);
  };
  var Gs = {},
    Ks = Array.isArray;
  Gs = Ks;
  var Xs = {};
  Xs = function (e) {
    return null != e && "object" == typeof e;
  };
  var Zs = "[object String]";
  var Js,
    Qs = sp(function (e) {
      return "string" == typeof e || (!Gs(e) && Xs(e) && Is(e) == Zs);
    }),
    el = {},
    tl = {},
    rl = {};
  rl = function (e) {
    return function (t, r, n) {
      for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
        var l = a[e ? s : ++o];
        if (!1 === r(i[l], l, i)) break;
      }
      return t;
    };
  };
  var nl = rl();
  tl = nl;
  var ol = {},
    il = {},
    al = {};
  al = function (e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  };
  var sl = {},
    ll = {},
    ul = "[object Arguments]";
  ll = function (e) {
    return Xs(e) && Is(e) == ul;
  };
  var cl = Object.prototype,
    dl = cl.hasOwnProperty,
    pl = cl.propertyIsEnumerable,
    fl = ll(
      (function () {
        return arguments;
      })()
    )
      ? ll
      : function (e) {
          return Xs(e) && dl.call(e, "callee") && !pl.call(e, "callee");
        };
  sl = fl;
  var hl = a("bauOe"),
    gl = {},
    ml = 9007199254740991,
    vl = /^(?:0|[1-9]\d*)$/;
  gl = function (e, t) {
    var r = typeof e;
    return !!(t = null == t ? ml : t) && ("number" == r || ("symbol" != r && vl.test(e))) && e > -1 && e % 1 == 0 && e < t;
  };
  var yl,
    bl = {},
    xl = {},
    wl = 9007199254740991;
  xl = function (e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= wl;
  };
  var El = {};
  (El["[object Float32Array]"] =
    El["[object Float64Array]"] =
    El["[object Int8Array]"] =
    El["[object Int16Array]"] =
    El["[object Int32Array]"] =
    El["[object Uint8Array]"] =
    El["[object Uint8ClampedArray]"] =
    El["[object Uint16Array]"] =
    El["[object Uint32Array]"] =
      !0),
    (El["[object Arguments]"] =
      El["[object Array]"] =
      El["[object ArrayBuffer]"] =
      El["[object Boolean]"] =
      El["[object DataView]"] =
      El["[object Date]"] =
      El["[object Error]"] =
      El["[object Function]"] =
      El["[object Map]"] =
      El["[object Number]"] =
      El["[object Object]"] =
      El["[object RegExp]"] =
      El["[object Set]"] =
      El["[object String]"] =
      El["[object WeakMap]"] =
        !1),
    (yl = function (e) {
      return Xs(e) && xl(e.length) && !!El[Is(e)];
    });
  var _l = {};
  _l = function (e) {
    return function (t) {
      return e(t);
    };
  };
  var Sl = (Ef = a("4gNYe")) && Ef.isTypedArray,
    Ol = Sl ? _l(Sl) : yl;
  bl = Ol;
  var kl = Object.prototype.hasOwnProperty;
  il = function (e, t) {
    var r = Gs(e),
      n = !r && sl(e),
      o = !r && !n && hl(e),
      i = !r && !n && !o && bl(e),
      a = r || n || o || i,
      s = a ? al(e.length, String) : [],
      l = s.length;
    for (var u in e)
      (!t && !kl.call(e, u)) ||
        (a &&
          ("length" == u ||
            (o && ("offset" == u || "parent" == u)) ||
            (i && ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
            gl(u, l))) ||
        s.push(u);
    return s;
  };
  var Cl = {},
    Tl = {},
    Rl = Object.prototype;
  Tl = function (e) {
    var t = e && e.constructor;
    return e === (("function" == typeof t && t.prototype) || Rl);
  };
  var Pl = {},
    jl = {};
  jl = function (e, t) {
    return function (r) {
      return e(t(r));
    };
  };
  var Ml = jl(Object.keys, Object);
  Pl = Ml;
  var Dl = Object.prototype.hasOwnProperty;
  Cl = function (e) {
    if (!Tl(e)) return Pl(e);
    var t = [];
    for (var r in Object(e)) Dl.call(e, r) && "constructor" != r && t.push(r);
    return t;
  };
  var Ll = {},
    Al = {},
    Nl = {};
  Nl = function (e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  };
  var Il = "[object AsyncFunction]",
    Hl = "[object Function]",
    Fl = "[object GeneratorFunction]",
    Ul = "[object Proxy]";
  (Al = function (e) {
    if (!Nl(e)) return !1;
    var t = Is(e);
    return t == Hl || t == Fl || t == Il || t == Ul;
  }),
    (Ll = function (e) {
      return null != e && xl(e.length) && !Al(e);
    }),
    (ol = function (e) {
      return Ll(e) ? il(e) : Cl(e);
    }),
    (el = function (e, t) {
      return e && tl(e, t, ol);
    });
  var Bl = {},
    zl = {};
  (zl = function (e) {
    return e;
  }),
    (Bl = function (e) {
      return "function" == typeof e ? e : zl;
    });
  var Wl = sp(
      (Js = function (e, t) {
        return e && el(e, Bl(t));
      })
    ),
    ql = {},
    Vl = jl(Object.getPrototypeOf, Object);
  ql = Vl;
  var Yl = "[object Object]",
    $l = Function.prototype,
    Gl = Object.prototype,
    Kl = $l.toString,
    Xl = Gl.hasOwnProperty,
    Zl = Kl.call(Object);
  var Jl = sp(function (e) {
      if (!Xs(e) || Is(e) != Yl) return !1;
      var t = ql(e);
      if (null === t) return !0;
      var r = Xl.call(t, "constructor") && t.constructor;
      return "function" == typeof r && r instanceof r && Kl.call(r) == Zl;
    }),
    Ql = {};
  Ql = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
    return o;
  };
  var eu,
    tu = {},
    ru = {},
    nu = {},
    ou = {},
    iu = {};
  eu = function () {
    (this.__data__ = []), (this.size = 0);
  };
  var au,
    su = {},
    lu = {};
  (lu = function (e, t) {
    return e === t || (e != e && t != t);
  }),
    (su = function (e, t) {
      for (var r = e.length; r--; ) if (lu(e[r][0], t)) return r;
      return -1;
    });
  var uu = Array.prototype.splice;
  au = function (e) {
    var t = this.__data__,
      r = su(t, e);
    return !(r < 0) && (r == t.length - 1 ? t.pop() : uu.call(t, r, 1), --this.size, !0);
  };
  var cu;
  cu = function (e) {
    var t = this.__data__,
      r = su(t, e);
    return r < 0 ? void 0 : t[r][1];
  };
  var du;
  du = function (e) {
    return su(this.__data__, e) > -1;
  };
  var pu;
  function fu(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (pu = function (e, t) {
    var r = this.__data__,
      n = su(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }),
    (fu.prototype.clear = eu),
    (fu.prototype.delete = au),
    (fu.prototype.get = cu),
    (fu.prototype.has = du),
    (fu.prototype.set = pu),
    (iu = fu);
  var hu;
  hu = function () {
    (this.__data__ = new iu()), (this.size = 0);
  };
  var gu;
  gu = function (e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  };
  var mu;
  mu = function (e) {
    return this.__data__.get(e);
  };
  var vu;
  vu = function (e) {
    return this.__data__.has(e);
  };
  var yu,
    bu,
    xu,
    wu = {},
    Eu = {},
    _u = {},
    Su = {},
    Ou = (Nu = a("gs5dt"))["__core-js_shared__"],
    ku = (xu = /[^.]+$/.exec(((bu = Ou) && bu.keys && bu.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + xu : "";
  Su = function (e) {
    return !!ku && ku in e;
  };
  var Cu = {},
    Tu = Function.prototype.toString;
  Cu = function (e) {
    if (null != e) {
      try {
        return Tu.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  };
  var Ru = /^\[object .+?Constructor\]$/,
    Pu = Function.prototype,
    ju = Object.prototype,
    Mu = Pu.toString,
    Du = ju.hasOwnProperty,
    Lu = RegExp(
      "^" +
        Mu.call(Du)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$"
    );
  _u = function (e) {
    return !(!Nl(e) || Su(e)) && (Al(e) ? Lu : Ru).test(Cu(e));
  };
  var Au = {};
  (Au = function (e, t) {
    return null == e ? void 0 : e[t];
  }),
    (Eu = function (e, t) {
      var r = Au(e, t);
      return _u(r) ? r : void 0;
    });
  var Nu = a("gs5dt"),
    Iu = Eu(Nu, "Map");
  wu = Iu;
  var Hu,
    Fu,
    Uu = {},
    Bu = {},
    zu = {},
    Wu = Eu(Object, "create");
  (zu = Wu),
    (Fu = function () {
      (this.__data__ = zu ? zu(null) : {}), (this.size = 0);
    });
  var qu;
  qu = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  };
  var Vu,
    Yu = "__lodash_hash_undefined__",
    $u = Object.prototype.hasOwnProperty;
  Vu = function (e) {
    var t = this.__data__;
    if (zu) {
      var r = t[e];
      return r === Yu ? void 0 : r;
    }
    return $u.call(t, e) ? t[e] : void 0;
  };
  var Gu,
    Ku = Object.prototype.hasOwnProperty;
  Gu = function (e) {
    var t = this.__data__;
    return zu ? void 0 !== t[e] : Ku.call(t, e);
  };
  var Xu,
    Zu = "__lodash_hash_undefined__";
  function Ju(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (Xu = function (e, t) {
    var r = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (r[e] = zu && void 0 === t ? Zu : t), this;
  }),
    (Ju.prototype.clear = Fu),
    (Ju.prototype.delete = qu),
    (Ju.prototype.get = Vu),
    (Ju.prototype.has = Gu),
    (Ju.prototype.set = Xu),
    (Bu = Ju),
    (Hu = function () {
      (this.size = 0), (this.__data__ = { hash: new Bu(), map: new (wu || iu)(), string: new Bu() });
    });
  var Qu,
    ec = {},
    tc = {};
  (tc = function (e) {
    var t = typeof e;
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
  }),
    (ec = function (e, t) {
      var r = e.__data__;
      return tc(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
    }),
    (Qu = function (e) {
      var t = ec(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    });
  var rc;
  rc = function (e) {
    return ec(this, e).get(e);
  };
  var nc;
  nc = function (e) {
    return ec(this, e).has(e);
  };
  var oc;
  function ic(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (oc = function (e, t) {
    var r = ec(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }),
    (ic.prototype.clear = Hu),
    (ic.prototype.delete = Qu),
    (ic.prototype.get = rc),
    (ic.prototype.has = nc),
    (ic.prototype.set = oc),
    (Uu = ic);
  var ac = 200;
  function sc(e) {
    var t = (this.__data__ = new iu(e));
    this.size = t.size;
  }
  (yu = function (e, t) {
    var r = this.__data__;
    if (r instanceof iu) {
      var n = r.__data__;
      if (!wu || n.length < ac - 1) return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new Uu(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }),
    (sc.prototype.clear = hu),
    (sc.prototype.delete = gu),
    (sc.prototype.get = mu),
    (sc.prototype.has = vu),
    (sc.prototype.set = yu),
    (ou = sc);
  var lc,
    uc = {},
    cc = {},
    dc = {},
    pc = {},
    fc = "__lodash_hash_undefined__";
  lc = function (e) {
    return this.__data__.set(e, fc), this;
  };
  var hc;
  function gc(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.__data__ = new Uu(); ++t < r; ) this.add(e[t]);
  }
  (hc = function (e) {
    return this.__data__.has(e);
  }),
    (gc.prototype.add = gc.prototype.push = lc),
    (gc.prototype.has = hc),
    (pc = gc);
  var mc = {};
  mc = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
    return !1;
  };
  var vc = {};
  vc = function (e, t) {
    return e.has(t);
  };
  var yc = 1,
    bc = 2;
  dc = function (e, t, r, n, o, i) {
    var a = r & yc,
      s = e.length,
      l = t.length;
    if (s != l && !(a && l > s)) return !1;
    var u = i.get(e),
      c = i.get(t);
    if (u && c) return u == t && c == e;
    var d = -1,
      p = !0,
      f = r & bc ? new pc() : void 0;
    for (i.set(e, t), i.set(t, e); ++d < s; ) {
      var h = e[d],
        g = t[d];
      if (n) var m = a ? n(g, h, d, t, e, i) : n(h, g, d, e, t, i);
      if (void 0 !== m) {
        if (m) continue;
        p = !1;
        break;
      }
      if (f) {
        if (
          !mc(t, function (e, t) {
            if (!vc(f, t) && (h === e || o(h, e, r, n, i))) return f.push(t);
          })
        ) {
          p = !1;
          break;
        }
      } else if (h !== g && !o(h, g, r, n, i)) {
        p = !1;
        break;
      }
    }
    return i.delete(e), i.delete(t), p;
  };
  var xc = {},
    wc = {},
    Ec = (Nu = a("gs5dt")).Uint8Array;
  wc = Ec;
  var _c = {};
  _c = function (e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (e, n) {
        r[++t] = [n, e];
      }),
      r
    );
  };
  var Sc = {};
  Sc = function (e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (e) {
        r[++t] = e;
      }),
      r
    );
  };
  var Oc = 1,
    kc = 2,
    Cc = "[object Boolean]",
    Tc = "[object Date]",
    Rc = "[object Error]",
    Pc = "[object Map]",
    jc = "[object Number]",
    Mc = "[object RegExp]",
    Dc = "[object Set]",
    Lc = "[object String]",
    Ac = "[object Symbol]",
    Nc = "[object ArrayBuffer]",
    Ic = "[object DataView]",
    Hc = Ns ? Ns.prototype : void 0,
    Fc = Hc ? Hc.valueOf : void 0;
  xc = function (e, t, r, n, o, i, a) {
    switch (r) {
      case Ic:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        (e = e.buffer), (t = t.buffer);
      case Nc:
        return !(e.byteLength != t.byteLength || !i(new wc(e), new wc(t)));
      case Cc:
      case Tc:
      case jc:
        return lu(+e, +t);
      case Rc:
        return e.name == t.name && e.message == t.message;
      case Mc:
      case Lc:
        return e == t + "";
      case Pc:
        var s = _c;
      case Dc:
        var l = n & Oc;
        if ((s || (s = Sc), e.size != t.size && !l)) return !1;
        var u = a.get(e);
        if (u) return u == t;
        (n |= kc), a.set(e, t);
        var c = dc(s(e), s(t), n, o, i, a);
        return a.delete(e), c;
      case Ac:
        if (Fc) return Fc.call(e) == Fc.call(t);
    }
    return !1;
  };
  var Uc = {},
    Bc = {},
    zc = {},
    Wc = {};
  (Wc = function (e, t) {
    for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
    return e;
  }),
    (zc = function (e, t, r) {
      var n = t(e);
      return Gs(e) ? n : Wc(n, r(e));
    });
  var qc = {},
    Vc = {};
  Vc = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, o = 0, i = []; ++r < n; ) {
      var a = e[r];
      t(a, r, e) && (i[o++] = a);
    }
    return i;
  };
  var Yc;
  Yc = function () {
    return [];
  };
  var $c = Object.prototype.propertyIsEnumerable,
    Gc = Object.getOwnPropertySymbols;
  (qc = Gc
    ? function (e) {
        return null == e
          ? []
          : ((e = Object(e)),
            Vc(Gc(e), function (t) {
              return $c.call(e, t);
            }));
      }
    : Yc),
    (Bc = function (e) {
      return zc(e, ol, qc);
    });
  var Kc = 1,
    Xc = Object.prototype.hasOwnProperty;
  Uc = function (e, t, r, n, o, i) {
    var a = r & Kc,
      s = Bc(e),
      l = s.length;
    if (l != Bc(t).length && !a) return !1;
    for (var u = l; u--; ) {
      var c = s[u];
      if (!(a ? c in t : Xc.call(t, c))) return !1;
    }
    var d = i.get(e),
      p = i.get(t);
    if (d && p) return d == t && p == e;
    var f = !0;
    i.set(e, t), i.set(t, e);
    for (var h = a; ++u < l; ) {
      var g = e[(c = s[u])],
        m = t[c];
      if (n) var v = a ? n(m, g, c, t, e, i) : n(g, m, c, e, t, i);
      if (!(void 0 === v ? g === m || o(g, m, r, n, i) : v)) {
        f = !1;
        break;
      }
      h || (h = "constructor" == c);
    }
    if (f && !h) {
      var y = e.constructor,
        b = t.constructor;
      y == b ||
        !("constructor" in e) ||
        !("constructor" in t) ||
        ("function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b) ||
        (f = !1);
    }
    return i.delete(e), i.delete(t), f;
  };
  var Zc = {},
    Jc = {};
  Nu = a("gs5dt");
  Jc = Eu(Nu, "DataView");
  var Qc = {};
  Nu = a("gs5dt");
  Qc = Eu(Nu, "Promise");
  var ed = {};
  Nu = a("gs5dt");
  ed = Eu(Nu, "Set");
  var td = {};
  Nu = a("gs5dt");
  td = Eu(Nu, "WeakMap");
  var rd = "[object Map]",
    nd = "[object Promise]",
    od = "[object Set]",
    id = "[object WeakMap]",
    ad = "[object DataView]",
    sd = Cu(Jc),
    ld = Cu(wu),
    ud = Cu(Qc),
    cd = Cu(ed),
    dd = Cu(td),
    pd = Is;
  ((Jc && pd(new Jc(new ArrayBuffer(1))) != ad) ||
    (wu && pd(new wu()) != rd) ||
    (Qc && pd(Qc.resolve()) != nd) ||
    (ed && pd(new ed()) != od) ||
    (td && pd(new td()) != id)) &&
    (pd = function (e) {
      var t = Is(e),
        r = "[object Object]" == t ? e.constructor : void 0,
        n = r ? Cu(r) : "";
      if (n)
        switch (n) {
          case sd:
            return ad;
          case ld:
            return rd;
          case ud:
            return nd;
          case cd:
            return od;
          case dd:
            return id;
        }
      return t;
    }),
    (Zc = pd);
  hl = a("bauOe");
  var fd = 1,
    hd = "[object Arguments]",
    gd = "[object Array]",
    md = "[object Object]",
    vd = Object.prototype.hasOwnProperty;
  (cc = function (e, t, r, n, o, i) {
    var a = Gs(e),
      s = Gs(t),
      l = a ? gd : Zc(e),
      u = s ? gd : Zc(t),
      c = (l = l == hd ? md : l) == md,
      d = (u = u == hd ? md : u) == md,
      p = l == u;
    if (p && hl(e)) {
      if (!hl(t)) return !1;
      (a = !0), (c = !1);
    }
    if (p && !c) return i || (i = new ou()), a || bl(e) ? dc(e, t, r, n, o, i) : xc(e, t, l, r, n, o, i);
    if (!(r & fd)) {
      var f = c && vd.call(e, "__wrapped__"),
        h = d && vd.call(t, "__wrapped__");
      if (f || h) {
        var g = f ? e.value() : e,
          m = h ? t.value() : t;
        return i || (i = new ou()), o(g, m, r, n, i);
      }
    }
    return !!p && (i || (i = new ou()), Uc(e, t, r, n, o, i));
  }),
    (uc = function e(t, r, n, o, i) {
      return t === r || (null == t || null == r || (!Xs(t) && !Xs(r)) ? t != t && r != r : cc(t, r, n, o, e, i));
    });
  var yd = 1,
    bd = 2;
  nu = function (e, t, r, n) {
    var o = r.length,
      i = o,
      a = !n;
    if (null == e) return !i;
    for (e = Object(e); o--; ) {
      var s = r[o];
      if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
    }
    for (; ++o < i; ) {
      var l = (s = r[o])[0],
        u = e[l],
        c = s[1];
      if (a && s[2]) {
        if (void 0 === u && !(l in e)) return !1;
      } else {
        var d = new ou();
        if (n) var p = n(u, c, l, e, t, d);
        if (!(void 0 === p ? uc(c, u, yd | bd, n, d) : p)) return !1;
      }
    }
    return !0;
  };
  var xd = {},
    wd = {};
  (wd = function (e) {
    return e == e && !Nl(e);
  }),
    (xd = function (e) {
      for (var t = ol(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, wd(o)];
      }
      return t;
    });
  var Ed = {};
  (Ed = function (e, t) {
    return function (r) {
      return null != r && r[e] === t && (void 0 !== t || e in Object(r));
    };
  }),
    (ru = function (e) {
      var t = xd(e);
      return 1 == t.length && t[0][2]
        ? Ed(t[0][0], t[0][1])
        : function (r) {
            return r === e || nu(r, e, t);
          };
    });
  var _d = {},
    Sd = {},
    Od = {},
    kd = {},
    Cd = {},
    Td = {},
    Rd = "[object Symbol]";
  Td = function (e) {
    return "symbol" == typeof e || (Xs(e) && Is(e) == Rd);
  };
  var Pd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    jd = /^\w*$/;
  Cd = function (e, t) {
    if (Gs(e)) return !1;
    var r = typeof e;
    return (
      !("number" != r && "symbol" != r && "boolean" != r && null != e && !Td(e)) ||
      jd.test(e) ||
      !Pd.test(e) ||
      (null != t && e in Object(t))
    );
  };
  var Md = {},
    Dd = {},
    Ld = {},
    Ad = "Expected a function";
  function Nd(e, t) {
    if ("function" != typeof e || (null != t && "function" != typeof t)) throw new TypeError(Ad);
    var r = function () {
      var n = arguments,
        o = t ? t.apply(this, n) : n[0],
        i = r.cache;
      if (i.has(o)) return i.get(o);
      var a = e.apply(this, n);
      return (r.cache = i.set(o, a) || i), a;
    };
    return (r.cache = new (Nd.Cache || Uu)()), r;
  }
  (Nd.Cache = Uu), (Ld = Nd);
  var Id = 500;
  Dd = function (e) {
    var t = Ld(e, function (e) {
        return r.size === Id && r.clear(), e;
      }),
      r = t.cache;
    return t;
  };
  var Hd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Fd = /\\(\\)?/g,
    Ud = Dd(function (e) {
      var t = [];
      return (
        46 === e.charCodeAt(0) && t.push(""),
        e.replace(Hd, function (e, r, n, o) {
          t.push(n ? o.replace(Fd, "$1") : r || e);
        }),
        t
      );
    });
  Md = Ud;
  var Bd = {},
    zd = {},
    Wd = 1 / 0,
    qd = Ns ? Ns.prototype : void 0,
    Vd = qd ? qd.toString : void 0;
  (zd = function e(t) {
    if ("string" == typeof t) return t;
    if (Gs(t)) return Ql(t, e) + "";
    if (Td(t)) return Vd ? Vd.call(t) : "";
    var r = t + "";
    return "0" == r && 1 / t == -Wd ? "-0" : r;
  }),
    (Bd = function (e) {
      return null == e ? "" : zd(e);
    }),
    (kd = function (e, t) {
      return Gs(e) ? e : Cd(e, t) ? [e] : Md(Bd(e));
    });
  var Yd = {},
    $d = 1 / 0;
  (Yd = function (e) {
    if ("string" == typeof e || Td(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -$d ? "-0" : t;
  }),
    (Od = function (e, t) {
      for (var r = 0, n = (t = kd(t, e)).length; null != e && r < n; ) e = e[Yd(t[r++])];
      return r && r == n ? e : void 0;
    }),
    (Sd = function (e, t, r) {
      var n = null == e ? void 0 : Od(e, t);
      return void 0 === n ? r : n;
    });
  var Gd = {},
    Kd = {};
  Kd = function (e, t) {
    return null != e && t in Object(e);
  };
  var Xd = {};
  (Xd = function (e, t, r) {
    for (var n = -1, o = (t = kd(t, e)).length, i = !1; ++n < o; ) {
      var a = Yd(t[n]);
      if (!(i = null != e && r(e, a))) break;
      e = e[a];
    }
    return i || ++n != o ? i : !!(o = null == e ? 0 : e.length) && xl(o) && gl(a, o) && (Gs(e) || sl(e));
  }),
    (Gd = function (e, t) {
      return null != e && Xd(e, t, Kd);
    });
  var Zd = 1,
    Jd = 2;
  _d = function (e, t) {
    return Cd(e) && wd(t)
      ? Ed(Yd(e), t)
      : function (r) {
          var n = Sd(r, e);
          return void 0 === n && n === t ? Gd(r, e) : uc(t, n, Zd | Jd);
        };
  };
  var Qd = {},
    ep = {};
  ep = function (e) {
    return function (t) {
      return null == t ? void 0 : t[e];
    };
  };
  var tp = {};
  (tp = function (e) {
    return function (t) {
      return Od(t, e);
    };
  }),
    (Qd = function (e) {
      return Cd(e) ? ep(Yd(e)) : tp(e);
    }),
    (tu = function (e) {
      return "function" == typeof e ? e : null == e ? zl : "object" == typeof e ? (Gs(e) ? _d(e[0], e[1]) : ru(e)) : Qd(e);
    });
  var rp = {},
    np = {},
    op = {};
  op = function (e, t) {
    return function (r, n) {
      if (null == r) return r;
      if (!Ll(r)) return e(r, n);
      for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && !1 !== n(a[i], i, a); );
      return r;
    };
  };
  var ip = op(el);
  (np = ip),
    (rp = function (e, t) {
      var r = -1,
        n = Ll(e) ? Array(e.length) : [];
      return (
        np(e, function (e, o, i) {
          n[++r] = t(e, o, i);
        }),
        n
      );
    });
  var ap = sp(function (e, t) {
    return (Gs(e) ? Ql : rp)(e, tu(t, 3));
  });
  function sp(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var lp = (As.flattenNames = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      r = [];
    return (
      (0, ap.default)(t, function (t) {
        Array.isArray(t)
          ? e(t).map(function (e) {
              return r.push(e);
            })
          : (0, Jl.default)(t)
          ? (0, Wl.default)(t, function (e, t) {
              !0 === e && r.push(t), r.push(t + "-" + e);
            })
          : (0, Qs.default)(t) && r.push(t);
      }),
      r
    );
  });
  As.default = lp;
  var up = sh(As),
    cp = {};
  Object.defineProperty(cp, "__esModule", { value: !0 }), (cp.mergeClasses = void 0);
  var dp = If(Js),
    pp = {},
    fp = {};
  fp = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e); );
    return e;
  };
  var hp = {},
    gp = {},
    mp = {},
    vp = (function () {
      try {
        var e = Eu(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch (e) {}
    })();
  (mp = vp),
    (gp = function (e, t, r) {
      "__proto__" == t && mp ? mp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
    });
  var yp = Object.prototype.hasOwnProperty;
  hp = function (e, t, r) {
    var n = e[t];
    (yp.call(e, t) && lu(n, r) && (void 0 !== r || t in e)) || gp(e, t, r);
  };
  var bp = {},
    xp = {};
  (xp = function (e, t, r, n) {
    var o = !r;
    r || (r = {});
    for (var i = -1, a = t.length; ++i < a; ) {
      var s = t[i],
        l = n ? n(r[s], e[s], s, r, e) : void 0;
      void 0 === l && (l = e[s]), o ? gp(r, s, l) : hp(r, s, l);
    }
    return r;
  }),
    (bp = function (e, t) {
      return e && xp(t, ol(t), e);
    });
  var wp = {},
    Ep = {},
    _p = {},
    Sp = {};
  Sp = function (e) {
    var t = [];
    if (null != e) for (var r in Object(e)) t.push(r);
    return t;
  };
  var Op = Object.prototype.hasOwnProperty;
  (_p = function (e) {
    if (!Nl(e)) return Sp(e);
    var t = Tl(e),
      r = [];
    for (var n in e) ("constructor" != n || (!t && Op.call(e, n))) && r.push(n);
    return r;
  }),
    (Ep = function (e) {
      return Ll(e) ? il(e, !0) : _p(e);
    }),
    (wp = function (e, t) {
      return e && xp(t, Ep(t), e);
    });
  var kp = a("5ofoy"),
    Cp = {};
  Cp = function (e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  };
  var Tp = {};
  Tp = function (e, t) {
    return xp(e, qc(e), t);
  };
  var Rp = {},
    Pp = {},
    jp = Object.getOwnPropertySymbols;
  (Pp = jp
    ? function (e) {
        for (var t = []; e; ) Wc(t, qc(e)), (e = ql(e));
        return t;
      }
    : Yc),
    (Rp = function (e, t) {
      return xp(e, Pp(e), t);
    });
  var Mp = {};
  Mp = function (e) {
    return zc(e, Ep, Pp);
  };
  var Dp = {},
    Lp = Object.prototype.hasOwnProperty;
  Dp = function (e) {
    var t = e.length,
      r = new e.constructor(t);
    return t && "string" == typeof e[0] && Lp.call(e, "index") && ((r.index = e.index), (r.input = e.input)), r;
  };
  var Ap = {},
    Np = {};
  Np = function (e) {
    var t = new e.constructor(e.byteLength);
    return new wc(t).set(new wc(e)), t;
  };
  var Ip = {};
  Ip = function (e, t) {
    var r = t ? Np(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  };
  var Hp = {},
    Fp = /\w*$/;
  Hp = function (e) {
    var t = new e.constructor(e.source, Fp.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  };
  var Up = {},
    Bp = Ns ? Ns.prototype : void 0,
    zp = Bp ? Bp.valueOf : void 0;
  Up = function (e) {
    return zp ? Object(zp.call(e)) : {};
  };
  var Wp = {};
  Wp = function (e, t) {
    var r = t ? Np(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  };
  var qp = "[object Boolean]",
    Vp = "[object Date]",
    Yp = "[object Map]",
    $p = "[object Number]",
    Gp = "[object RegExp]",
    Kp = "[object Set]",
    Xp = "[object String]",
    Zp = "[object Symbol]",
    Jp = "[object ArrayBuffer]",
    Qp = "[object DataView]",
    ef = "[object Float32Array]",
    tf = "[object Float64Array]",
    rf = "[object Int8Array]",
    nf = "[object Int16Array]",
    of = "[object Int32Array]",
    af = "[object Uint8Array]",
    sf = "[object Uint8ClampedArray]",
    lf = "[object Uint16Array]",
    uf = "[object Uint32Array]";
  Ap = function (e, t, r) {
    var n = e.constructor;
    switch (t) {
      case Jp:
        return Np(e);
      case qp:
      case Vp:
        return new n(+e);
      case Qp:
        return Ip(e, r);
      case ef:
      case tf:
      case rf:
      case nf:
      case of:
      case af:
      case sf:
      case lf:
      case uf:
        return Wp(e, r);
      case Yp:
        return new n();
      case $p:
      case Xp:
        return new n(e);
      case Gp:
        return Hp(e);
      case Kp:
        return new n();
      case Zp:
        return Up(e);
    }
  };
  var cf = {},
    df = {},
    pf = Object.create,
    ff = (function () {
      function e() {}
      return function (t) {
        if (!Nl(t)) return {};
        if (pf) return pf(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  (df = ff),
    (cf = function (e) {
      return "function" != typeof e.constructor || Tl(e) ? {} : df(ql(e));
    });
  hl = a("bauOe");
  var hf,
    gf = {},
    mf = "[object Map]";
  hf = function (e) {
    return Xs(e) && Zc(e) == mf;
  };
  var vf = (Ef = a("4gNYe")) && Ef.isMap,
    yf = vf ? _l(vf) : hf;
  gf = yf;
  var bf,
    xf = {},
    wf = "[object Set]";
  bf = function (e) {
    return Xs(e) && Zc(e) == wf;
  };
  var Ef,
    _f = (Ef = a("4gNYe")) && Ef.isSet,
    Sf = _f ? _l(_f) : bf;
  xf = Sf;
  var Of = 1,
    kf = 2,
    Cf = 4,
    Tf = "[object Arguments]",
    Rf = "[object Function]",
    Pf = "[object GeneratorFunction]",
    jf = "[object Object]",
    Mf = {};
  (Mf[Tf] =
    Mf["[object Array]"] =
    Mf["[object ArrayBuffer]"] =
    Mf["[object DataView]"] =
    Mf["[object Boolean]"] =
    Mf["[object Date]"] =
    Mf["[object Float32Array]"] =
    Mf["[object Float64Array]"] =
    Mf["[object Int8Array]"] =
    Mf["[object Int16Array]"] =
    Mf["[object Int32Array]"] =
    Mf["[object Map]"] =
    Mf["[object Number]"] =
    Mf[jf] =
    Mf["[object RegExp]"] =
    Mf["[object Set]"] =
    Mf["[object String]"] =
    Mf["[object Symbol]"] =
    Mf["[object Uint8Array]"] =
    Mf["[object Uint8ClampedArray]"] =
    Mf["[object Uint16Array]"] =
    Mf["[object Uint32Array]"] =
      !0),
    (Mf["[object Error]"] = Mf[Rf] = Mf["[object WeakMap]"] = !1),
    (pp = function e(t, r, n, o, i, a) {
      var s,
        l = r & Of,
        u = r & kf,
        c = r & Cf;
      if ((n && (s = i ? n(t, o, i, a) : n(t)), void 0 !== s)) return s;
      if (!Nl(t)) return t;
      var d = Gs(t);
      if (d) {
        if (((s = Dp(t)), !l)) return Cp(t, s);
      } else {
        var p = Zc(t),
          f = p == Rf || p == Pf;
        if (hl(t)) return kp(t, l);
        if (p == jf || p == Tf || (f && !i)) {
          if (((s = u || f ? {} : cf(t)), !l)) return u ? Rp(t, wp(s, t)) : Tp(t, bp(s, t));
        } else {
          if (!Mf[p]) return i ? t : {};
          s = Ap(t, p, l);
        }
      }
      a || (a = new ou());
      var h = a.get(t);
      if (h) return h;
      a.set(t, s),
        xf(t)
          ? t.forEach(function (o) {
              s.add(e(o, r, n, o, t, a));
            })
          : gf(t) &&
            t.forEach(function (o, i) {
              s.set(i, e(o, r, n, i, t, a));
            });
      var g = d ? void 0 : (c ? (u ? Mp : Bc) : u ? Ep : ol)(t);
      return (
        fp(g || t, function (o, i) {
          g && (o = t[(i = o)]), hp(s, i, e(o, r, n, i, t, a));
        }),
        s
      );
    });
  var Df = 1,
    Lf = 4;
  var Af = If(function (e) {
      return pp(e, Df | Lf);
    }),
    Nf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
  function If(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var Hf = (cp.mergeClasses = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      r = (e.default && (0, Af.default)(e.default)) || {};
    return (
      t.map(function (t) {
        var n = e[t];
        return (
          n &&
            (0, dp.default)(n, function (e, t) {
              r[t] || (r[t] = {}), (r[t] = Nf({}, r[t], n[t]));
            }),
          t
        );
      }),
      r
    );
  });
  cp.default = Hf;
  var Ff = sh(cp),
    Uf = {};
  Object.defineProperty(Uf, "__esModule", { value: !0 }), (Uf.autoprefix = void 0);
  var Bf,
    zf = (Bf = Js) && Bf.__esModule ? Bf : { default: Bf },
    Wf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
  var qf = {
      borderRadius: function (e) {
        return { msBorderRadius: e, MozBorderRadius: e, OBorderRadius: e, WebkitBorderRadius: e, borderRadius: e };
      },
      boxShadow: function (e) {
        return { msBoxShadow: e, MozBoxShadow: e, OBoxShadow: e, WebkitBoxShadow: e, boxShadow: e };
      },
      userSelect: function (e) {
        return { WebkitTouchCallout: e, KhtmlUserSelect: e, MozUserSelect: e, msUserSelect: e, WebkitUserSelect: e, userSelect: e };
      },
      flex: function (e) {
        return { WebkitBoxFlex: e, MozBoxFlex: e, WebkitFlex: e, msFlex: e, flex: e };
      },
      flexBasis: function (e) {
        return { WebkitFlexBasis: e, flexBasis: e };
      },
      justifyContent: function (e) {
        return { WebkitJustifyContent: e, justifyContent: e };
      },
      transition: function (e) {
        return { msTransition: e, MozTransition: e, OTransition: e, WebkitTransition: e, transition: e };
      },
      transform: function (e) {
        return { msTransform: e, MozTransform: e, OTransform: e, WebkitTransform: e, transform: e };
      },
      absolute: function (e) {
        var t = e && e.split(" ");
        return { position: "absolute", top: t && t[0], right: t && t[1], bottom: t && t[2], left: t && t[3] };
      },
      extend: function (e, t) {
        var r = t[e];
        return r || { extend: e };
      }
    },
    Vf = (Uf.autoprefix = function (e) {
      var t = {};
      return (
        (0, zf.default)(e, function (e, r) {
          var n = {};
          (0, zf.default)(e, function (e, t) {
            var r = qf[t];
            r ? (n = Wf({}, n, r(e))) : (n[t] = e);
          }),
            (t[r] = n);
        }),
        t
      );
    });
  Uf.default = Vf;
  var Yf = sh(Uf),
    $f = {};
  Object.defineProperty($f, "__esModule", { value: !0 }), ($f.hover = void 0);
  var Gf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    Kf = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })((s = a("7b0kr")));
  function Xf(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  var Zf = ($f.hover = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return (function (r) {
      function n() {
        var r, o, i;
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, n);
        for (var a = arguments.length, s = Array(a), l = 0; l < a; l++) s[l] = arguments[l];
        return (
          (o = i = Xf(this, (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(r, [this].concat(s)))),
          (i.state = { hover: !1 }),
          (i.handleMouseOver = function () {
            return i.setState({ hover: !0 });
          }),
          (i.handleMouseOut = function () {
            return i.setState({ hover: !1 });
          }),
          (i.render = function () {
            return Kf.default.createElement(
              t,
              { onMouseOver: i.handleMouseOver, onMouseOut: i.handleMouseOut },
              Kf.default.createElement(e, Gf({}, i.props, i.state))
            );
          }),
          Xf(i, o)
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(n, r),
        n
      );
    })(Kf.default.Component);
  });
  $f.default = Zf;
  var Jf = sh($f),
    Qf = {};
  Object.defineProperty(Qf, "__esModule", { value: !0 }), (Qf.active = void 0);
  var eh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    th = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })((s = a("7b0kr")));
  function rh(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  var nh = (Qf.active = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return (function (r) {
      function n() {
        var r, o, i;
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, n);
        for (var a = arguments.length, s = Array(a), l = 0; l < a; l++) s[l] = arguments[l];
        return (
          (o = i = rh(this, (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(r, [this].concat(s)))),
          (i.state = { active: !1 }),
          (i.handleMouseDown = function () {
            return i.setState({ active: !0 });
          }),
          (i.handleMouseUp = function () {
            return i.setState({ active: !1 });
          }),
          (i.render = function () {
            return th.default.createElement(
              t,
              { onMouseDown: i.handleMouseDown, onMouseUp: i.handleMouseUp },
              th.default.createElement(e, eh({}, i.props, i.state))
            );
          }),
          rh(i, o)
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(n, r),
        n
      );
    })(th.default.Component);
  });
  Qf.default = nh;
  var oh = sh(Qf),
    ih = {};
  Object.defineProperty(ih, "__esModule", { value: !0 });
  ih.default = function (e, t) {
    var r = {},
      n = function (e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        r[e] = t;
      };
    return (
      0 === e && n("first-child"),
      e === t - 1 && n("last-child"),
      (0 === e || e % 2 == 0) && n("even"),
      1 === Math.abs(e % 2) && n("odd"),
      n("nth-child", e),
      r
    );
  };
  var ah = sh(ih);
  function sh(e) {
    return e && e.__esModule ? e : { default: e };
  }
  (Ls.hover = Jf.default), (Ls.handleHover = Jf.default), (Ls.handleActive = oh.default), (Ls.loop = ah.default);
  var lh = (Ls.ReactCSS = function (e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
    var o = (0, up.default)(r),
      i = (0, Ff.default)(e, o);
    return (0, Yf.default)(i);
  });
  Ls.default = lh;
  (s = a("7b0kr")), (s = a("7b0kr"));
  var uh = {},
    ch = function (e, t, r, n) {
      var o = e + "-" + t + "-" + r + (n ? "-server" : "");
      if (uh[o]) return uh[o];
      var i = (function (e, t, r, n) {
        if ("undefined" == typeof document && !n) return null;
        var o = n ? new n() : document.createElement("canvas");
        (o.width = 2 * r), (o.height = 2 * r);
        var i = o.getContext("2d");
        return i
          ? ((i.fillStyle = e),
            i.fillRect(0, 0, o.width, o.height),
            (i.fillStyle = t),
            i.fillRect(0, 0, r, r),
            i.translate(r, r),
            i.fillRect(0, 0, r, r),
            o.toDataURL())
          : null;
      })(e, t, r, n);
      return (uh[o] = i), i;
    },
    dh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    ph = function (e) {
      var t = e.white,
        r = e.grey,
        o = e.size,
        i = e.renderers,
        a = e.borderRadius,
        l = e.boxShadow,
        u = e.children,
        c = n(Ls)({
          default: {
            grid: {
              borderRadius: a,
              boxShadow: l,
              absolute: "0px 0px 0px 0px",
              background: "url(" + ch(t, r, o, i.canvas) + ") center left"
            }
          }
        });
      return (0, s.isValidElement)(u)
        ? n(s).cloneElement(u, dh({}, u.props, { style: dh({}, u.props.style, c.grid) }))
        : n(s).createElement("div", { style: c.grid });
    };
  ph.defaultProps = { size: 8, white: "transparent", grey: "rgba(0,0,0,.08)", renderers: {} };
  var fh = ph,
    hh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    gh = (function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    })();
  function mh(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  var vh = (function (e) {
      function t() {
        var e, r, n;
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, t);
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return (
          (r = n = mh(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i)))),
          (n.handleChange = function (e) {
            var t = (function (e, t, r, n, o) {
              var i = o.clientWidth,
                a = o.clientHeight,
                s = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                u = s - (o.getBoundingClientRect().left + window.pageXOffset),
                c = l - (o.getBoundingClientRect().top + window.pageYOffset);
              if ("vertical" === r) {
                var d = void 0;
                if (((d = c < 0 ? 0 : c > a ? 1 : Math.round((100 * c) / a) / 100), t.a !== d))
                  return { h: t.h, s: t.s, l: t.l, a: d, source: "rgb" };
              } else {
                var p = void 0;
                if (n !== (p = u < 0 ? 0 : u > i ? 1 : Math.round((100 * u) / i) / 100))
                  return { h: t.h, s: t.s, l: t.l, a: p, source: "rgb" };
              }
              return null;
            })(e, n.props.hsl, n.props.direction, n.props.a, n.container);
            t && "function" == typeof n.props.onChange && n.props.onChange(t, e);
          }),
          (n.handleMouseDown = function (e) {
            n.handleChange(e), window.addEventListener("mousemove", n.handleChange), window.addEventListener("mouseup", n.handleMouseUp);
          }),
          (n.handleMouseUp = function () {
            n.unbindEventListeners();
          }),
          (n.unbindEventListeners = function () {
            window.removeEventListener("mousemove", n.handleChange), window.removeEventListener("mouseup", n.handleMouseUp);
          }),
          mh(n, r)
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        gh(t, [
          {
            key: "componentWillUnmount",
            value: function () {
              this.unbindEventListeners();
            }
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = this.props.rgb,
                r = n(Ls)(
                  {
                    default: {
                      alpha: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius },
                      checkboard: { absolute: "0px 0px 0px 0px", overflow: "hidden", borderRadius: this.props.radius },
                      gradient: {
                        absolute: "0px 0px 0px 0px",
                        background:
                          "linear-gradient(to right, rgba(" +
                          t.r +
                          "," +
                          t.g +
                          "," +
                          t.b +
                          ", 0) 0%,\n           rgba(" +
                          t.r +
                          "," +
                          t.g +
                          "," +
                          t.b +
                          ", 1) 100%)",
                        boxShadow: this.props.shadow,
                        borderRadius: this.props.radius
                      },
                      container: { position: "relative", height: "100%", margin: "0 3px" },
                      pointer: { position: "absolute", left: 100 * t.a + "%" },
                      slider: {
                        width: "4px",
                        borderRadius: "1px",
                        height: "8px",
                        boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                        background: "#fff",
                        marginTop: "1px",
                        transform: "translateX(-2px)"
                      }
                    },
                    vertical: {
                      gradient: {
                        background:
                          "linear-gradient(to bottom, rgba(" +
                          t.r +
                          "," +
                          t.g +
                          "," +
                          t.b +
                          ", 0) 0%,\n           rgba(" +
                          t.r +
                          "," +
                          t.g +
                          "," +
                          t.b +
                          ", 1) 100%)"
                      },
                      pointer: { left: 0, top: 100 * t.a + "%" }
                    },
                    overwrite: hh({}, this.props.style)
                  },
                  { vertical: "vertical" === this.props.direction, overwrite: !0 }
                );
              return n(s).createElement(
                "div",
                { style: r.alpha },
                n(s).createElement("div", { style: r.checkboard }, n(s).createElement(fh, { renderers: this.props.renderers })),
                n(s).createElement("div", { style: r.gradient }),
                n(s).createElement(
                  "div",
                  {
                    style: r.container,
                    ref: function (t) {
                      return (e.container = t);
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                  },
                  n(s).createElement(
                    "div",
                    { style: r.pointer },
                    this.props.pointer ? n(s).createElement(this.props.pointer, this.props) : n(s).createElement("div", { style: r.slider })
                  )
                )
              );
            }
          }
        ]),
        t
      );
    })(s.PureComponent || s.Component),
    yh = vh,
    bh =
      ((s = a("7b0kr")),
      (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })());
  var xh = [38, 40],
    wh = 1,
    Eh = (function (e) {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, t);
        var r = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
          (r.handleBlur = function () {
            r.state.blurValue && r.setState({ value: r.state.blurValue, blurValue: null });
          }),
          (r.handleChange = function (e) {
            r.setUpdatedValue(e.target.value, e);
          }),
          (r.handleKeyDown = function (e) {
            var t,
              n = (function (e) {
                return Number(String(e).replace(/%/g, ""));
              })(e.target.value);
            if (!isNaN(n) && ((t = e.keyCode), xh.indexOf(t) > -1)) {
              var o = r.getArrowOffset(),
                i = 38 === e.keyCode ? n + o : n - o;
              r.setUpdatedValue(i, e);
            }
          }),
          (r.handleDrag = function (e) {
            if (r.props.dragLabel) {
              var t = Math.round(r.props.value + e.movementX);
              t >= 0 && t <= r.props.dragMax && r.props.onChange && r.props.onChange(r.getValueObjectWithLabel(t), e);
            }
          }),
          (r.handleMouseDown = function (e) {
            r.props.dragLabel &&
              (e.preventDefault(),
              r.handleDrag(e),
              window.addEventListener("mousemove", r.handleDrag),
              window.addEventListener("mouseup", r.handleMouseUp));
          }),
          (r.handleMouseUp = function () {
            r.unbindEventListeners();
          }),
          (r.unbindEventListeners = function () {
            window.removeEventListener("mousemove", r.handleDrag), window.removeEventListener("mouseup", r.handleMouseUp);
          }),
          (r.state = { value: String(e.value).toUpperCase(), blurValue: String(e.value).toUpperCase() }),
          (r.inputId = "rc-editable-input-" + wh++),
          r
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        bh(t, [
          {
            key: "componentDidUpdate",
            value: function (e, t) {
              this.props.value === this.state.value ||
                (e.value === this.props.value && t.value === this.state.value) ||
                (this.input === document.activeElement
                  ? this.setState({ blurValue: String(this.props.value).toUpperCase() })
                  : this.setState({
                      value: String(this.props.value).toUpperCase(),
                      blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
                    }));
            }
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.unbindEventListeners();
            }
          },
          {
            key: "getValueObjectWithLabel",
            value: function (e) {
              return (function (e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
              })({}, this.props.label, e);
            }
          },
          {
            key: "getArrowOffset",
            value: function () {
              return this.props.arrowOffset || 1;
            }
          },
          {
            key: "setUpdatedValue",
            value: function (e, t) {
              var r = this.props.label ? this.getValueObjectWithLabel(e) : e;
              this.props.onChange && this.props.onChange(r, t), this.setState({ value: e });
            }
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = n(Ls)(
                  {
                    default: { wrap: { position: "relative" } },
                    "user-override": {
                      wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                      input: this.props.style && this.props.style.input ? this.props.style.input : {},
                      label: this.props.style && this.props.style.label ? this.props.style.label : {}
                    },
                    "dragLabel-true": { label: { cursor: "ew-resize" } }
                  },
                  { "user-override": !0 },
                  this.props
                );
              return n(s).createElement(
                "div",
                { style: t.wrap },
                n(s).createElement("input", {
                  id: this.inputId,
                  style: t.input,
                  ref: function (t) {
                    return (e.input = t);
                  },
                  value: this.state.value,
                  onKeyDown: this.handleKeyDown,
                  onChange: this.handleChange,
                  onBlur: this.handleBlur,
                  placeholder: this.props.placeholder,
                  spellCheck: "false"
                }),
                this.props.label && !this.props.hideLabel
                  ? n(s).createElement(
                      "label",
                      { htmlFor: this.inputId, style: t.label, onMouseDown: this.handleMouseDown },
                      this.props.label
                    )
                  : null
              );
            }
          }
        ]),
        t
      );
    })(s.PureComponent || s.Component),
    _h = Eh,
    Sh =
      ((s = a("7b0kr")),
      (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })());
  function Oh(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  var kh = (function (e) {
      function t() {
        var e, r, n;
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, t);
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return (
          (r = n = Oh(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i)))),
          (n.handleChange = function (e) {
            var t = (function (e, t, r, n) {
              var o = n.clientWidth,
                i = n.clientHeight,
                a = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                l = a - (n.getBoundingClientRect().left + window.pageXOffset),
                u = s - (n.getBoundingClientRect().top + window.pageYOffset);
              if ("vertical" === t) {
                var c = void 0;
                if (((c = u < 0 ? 359 : u > i ? 0 : (360 * ((-100 * u) / i + 100)) / 100), r.h !== c))
                  return { h: c, s: r.s, l: r.l, a: r.a, source: "hsl" };
              } else {
                var d = void 0;
                if (((d = l < 0 ? 0 : l > o ? 359 : (((100 * l) / o) * 360) / 100), r.h !== d))
                  return { h: d, s: r.s, l: r.l, a: r.a, source: "hsl" };
              }
              return null;
            })(e, n.props.direction, n.props.hsl, n.container);
            t && "function" == typeof n.props.onChange && n.props.onChange(t, e);
          }),
          (n.handleMouseDown = function (e) {
            n.handleChange(e), window.addEventListener("mousemove", n.handleChange), window.addEventListener("mouseup", n.handleMouseUp);
          }),
          (n.handleMouseUp = function () {
            n.unbindEventListeners();
          }),
          Oh(n, r)
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        Sh(t, [
          {
            key: "componentWillUnmount",
            value: function () {
              this.unbindEventListeners();
            }
          },
          {
            key: "unbindEventListeners",
            value: function () {
              window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
            }
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = this.props.direction,
                r = void 0 === t ? "horizontal" : t,
                o = n(Ls)(
                  {
                    default: {
                      hue: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius, boxShadow: this.props.shadow },
                      container: { padding: "0 2px", position: "relative", height: "100%", borderRadius: this.props.radius },
                      pointer: { position: "absolute", left: (100 * this.props.hsl.h) / 360 + "%" },
                      slider: {
                        marginTop: "1px",
                        width: "4px",
                        borderRadius: "1px",
                        height: "8px",
                        boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                        background: "#fff",
                        transform: "translateX(-2px)"
                      }
                    },
                    vertical: { pointer: { left: "0px", top: (-100 * this.props.hsl.h) / 360 + 100 + "%" } }
                  },
                  { vertical: "vertical" === r }
                );
              return n(s).createElement(
                "div",
                { style: o.hue },
                n(s).createElement(
                  "div",
                  {
                    className: "hue-" + r,
                    style: o.container,
                    ref: function (t) {
                      return (e.container = t);
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                  },
                  n(s).createElement(
                    "style",
                    null,
                    "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "
                  ),
                  n(s).createElement(
                    "div",
                    { style: o.pointer },
                    this.props.pointer ? n(s).createElement(this.props.pointer, this.props) : n(s).createElement("div", { style: o.slider })
                  )
                )
              );
            }
          }
        ]),
        t
      );
    })(s.PureComponent || s.Component),
    Ch = kh;
  (s = a("7b0kr")), (d = a("3pr9z"));
  var Th = function () {
    (this.__data__ = []), (this.size = 0);
  };
  var Rh = function (e, t) {
    return e === t || (e != e && t != t);
  };
  var Ph = function (e, t) {
      for (var r = e.length; r--; ) if (Rh(e[r][0], t)) return r;
      return -1;
    },
    jh = Array.prototype.splice;
  var Mh = function (e) {
    var t = this.__data__,
      r = Ph(t, e);
    return !(r < 0) && (r == t.length - 1 ? t.pop() : jh.call(t, r, 1), --this.size, !0);
  };
  var Dh = function (e) {
    var t = this.__data__,
      r = Ph(t, e);
    return r < 0 ? void 0 : t[r][1];
  };
  var Lh = function (e) {
    return Ph(this.__data__, e) > -1;
  };
  var Ah = function (e, t) {
    var r = this.__data__,
      n = Ph(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  };
  function Nh(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (Nh.prototype.clear = Th), (Nh.prototype.delete = Mh), (Nh.prototype.get = Dh), (Nh.prototype.has = Lh), (Nh.prototype.set = Ah);
  var Ih = Nh;
  var Hh = function () {
    (this.__data__ = new Ih()), (this.size = 0);
  };
  var Fh = function (e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  };
  var Uh = function (e) {
    return this.__data__.get(e);
  };
  var Bh = function (e) {
      return this.__data__.has(e);
    },
    zh = (xg = a("7z16b")).default.Symbol,
    Wh = Object.prototype,
    qh = Wh.hasOwnProperty,
    Vh = Wh.toString,
    Yh = zh ? zh.toStringTag : void 0;
  var $h = function (e) {
      var t = qh.call(e, Yh),
        r = e[Yh];
      try {
        e[Yh] = void 0;
        var n = !0;
      } catch (e) {}
      var o = Vh.call(e);
      return n && (t ? (e[Yh] = r) : delete e[Yh]), o;
    },
    Gh = Object.prototype.toString;
  var Kh = function (e) {
      return Gh.call(e);
    },
    Xh = "[object Null]",
    Zh = "[object Undefined]",
    Jh = zh ? zh.toStringTag : void 0;
  var Qh = function (e) {
    return null == e ? (void 0 === e ? Zh : Xh) : Jh && Jh in Object(e) ? $h(e) : Kh(e);
  };
  var eg = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    },
    tg = "[object AsyncFunction]",
    rg = "[object Function]",
    ng = "[object GeneratorFunction]",
    og = "[object Proxy]";
  var ig = function (e) {
      if (!eg(e)) return !1;
      var t = Qh(e);
      return t == rg || t == ng || t == tg || t == og;
    },
    ag = (xg = a("7z16b")).default["__core-js_shared__"],
    sg = (function () {
      var e = /[^.]+$/.exec((ag && ag.keys && ag.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  var lg = function (e) {
      return !!sg && sg in e;
    },
    ug = Function.prototype.toString;
  var cg = function (e) {
      if (null != e) {
        try {
          return ug.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    },
    dg = /^\[object .+?Constructor\]$/,
    pg = Function.prototype,
    fg = Object.prototype,
    hg = pg.toString,
    gg = fg.hasOwnProperty,
    mg = RegExp(
      "^" +
        hg
          .call(gg)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$"
    );
  var vg = function (e) {
    return !(!eg(e) || lg(e)) && (ig(e) ? mg : dg).test(cg(e));
  };
  var yg = function (e, t) {
    return null == e ? void 0 : e[t];
  };
  var bg = function (e, t) {
      var r = yg(e, t);
      return vg(r) ? r : void 0;
    },
    xg = a("7z16b"),
    wg = bg(xg.default, "Map"),
    Eg = bg(Object, "create");
  var _g = function () {
    (this.__data__ = Eg ? Eg(null) : {}), (this.size = 0);
  };
  var Sg = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    },
    Og = "__lodash_hash_undefined__",
    kg = Object.prototype.hasOwnProperty;
  var Cg = function (e) {
      var t = this.__data__;
      if (Eg) {
        var r = t[e];
        return r === Og ? void 0 : r;
      }
      return kg.call(t, e) ? t[e] : void 0;
    },
    Tg = Object.prototype.hasOwnProperty;
  var Rg = function (e) {
      var t = this.__data__;
      return Eg ? void 0 !== t[e] : Tg.call(t, e);
    },
    Pg = "__lodash_hash_undefined__";
  var jg = function (e, t) {
    var r = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (r[e] = Eg && void 0 === t ? Pg : t), this;
  };
  function Mg(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (Mg.prototype.clear = _g), (Mg.prototype.delete = Sg), (Mg.prototype.get = Cg), (Mg.prototype.has = Rg), (Mg.prototype.set = jg);
  var Dg = Mg;
  var Lg = function () {
    (this.size = 0), (this.__data__ = { hash: new Dg(), map: new (wg || Ih)(), string: new Dg() });
  };
  var Ag = function (e) {
    var t = typeof e;
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
  };
  var Ng = function (e, t) {
    var r = e.__data__;
    return Ag(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
  };
  var Ig = function (e) {
    var t = Ng(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  };
  var Hg = function (e) {
    return Ng(this, e).get(e);
  };
  var Fg = function (e) {
    return Ng(this, e).has(e);
  };
  var Ug = function (e, t) {
    var r = Ng(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  };
  function Bg(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (Bg.prototype.clear = Lg), (Bg.prototype.delete = Ig), (Bg.prototype.get = Hg), (Bg.prototype.has = Fg), (Bg.prototype.set = Ug);
  var zg = Bg,
    Wg = 200;
  var qg = function (e, t) {
    var r = this.__data__;
    if (r instanceof Ih) {
      var n = r.__data__;
      if (!wg || n.length < Wg - 1) return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new zg(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  };
  function Vg(e) {
    var t = (this.__data__ = new Ih(e));
    this.size = t.size;
  }
  (Vg.prototype.clear = Hh), (Vg.prototype.delete = Fh), (Vg.prototype.get = Uh), (Vg.prototype.has = Bh), (Vg.prototype.set = qg);
  var Yg = Vg,
    $g = (function () {
      try {
        var e = bg(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch (e) {}
    })(),
    Gg = $g;
  var Kg = function (e, t, r) {
    "__proto__" == t && Gg ? Gg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
  };
  var Xg = function (e, t, r) {
    ((void 0 !== r && !Rh(e[t], r)) || (void 0 === r && !(t in e))) && Kg(e, t, r);
  };
  var Zg,
    Jg = function (e, t, r) {
      for (var n = -1, o = Object(e), i = r(e), a = i.length; a--; ) {
        var s = i[Zg ? a : ++n];
        if (!1 === t(o[s], s, o)) break;
      }
      return e;
    },
    Qg = a("gL3ml"),
    em = (xg = a("7z16b")).default.Uint8Array;
  var tm = function (e) {
    var t = new e.constructor(e.byteLength);
    return new em(t).set(new em(e)), t;
  };
  var rm = function (e, t) {
    var r = t ? tm(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  };
  var nm = function (e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    },
    om = Object.create,
    im = (function () {
      function e() {}
      return function (t) {
        if (!eg(t)) return {};
        if (om) return om(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  var am = function (e, t) {
      return function (r) {
        return e(t(r));
      };
    },
    sm = am(Object.getPrototypeOf, Object),
    lm = Object.prototype;
  var um = function (e) {
    var t = e && e.constructor;
    return e === (("function" == typeof t && t.prototype) || lm);
  };
  var cm = function (e) {
    return "function" != typeof e.constructor || um(e) ? {} : im(sm(e));
  };
  var dm = function (e) {
      return null != e && "object" == typeof e;
    },
    pm = "[object Arguments]";
  var fm = function (e) {
      return dm(e) && Qh(e) == pm;
    },
    hm = Object.prototype,
    gm = hm.hasOwnProperty,
    mm = hm.propertyIsEnumerable,
    vm = fm(
      (function () {
        return arguments;
      })()
    )
      ? fm
      : function (e) {
          return dm(e) && gm.call(e, "callee") && !mm.call(e, "callee");
        },
    ym = Array.isArray,
    bm = 9007199254740991;
  var xm = function (e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= bm;
  };
  var wm = function (e) {
    return null != e && xm(e.length) && !ig(e);
  };
  var Em = function (e) {
      return dm(e) && wm(e);
    },
    _m = a("enva8"),
    Sm = "[object Object]",
    Om = Function.prototype,
    km = Object.prototype,
    Cm = Om.toString,
    Tm = km.hasOwnProperty,
    Rm = Cm.call(Object);
  var Pm = function (e) {
      if (!dm(e) || Qh(e) != Sm) return !1;
      var t = sm(e);
      if (null === t) return !0;
      var r = Tm.call(t, "constructor") && t.constructor;
      return "function" == typeof r && r instanceof r && Cm.call(r) == Rm;
    },
    jm = {};
  (jm["[object Float32Array]"] =
    jm["[object Float64Array]"] =
    jm["[object Int8Array]"] =
    jm["[object Int16Array]"] =
    jm["[object Int32Array]"] =
    jm["[object Uint8Array]"] =
    jm["[object Uint8ClampedArray]"] =
    jm["[object Uint16Array]"] =
    jm["[object Uint32Array]"] =
      !0),
    (jm["[object Arguments]"] =
      jm["[object Array]"] =
      jm["[object ArrayBuffer]"] =
      jm["[object Boolean]"] =
      jm["[object DataView]"] =
      jm["[object Date]"] =
      jm["[object Error]"] =
      jm["[object Function]"] =
      jm["[object Map]"] =
      jm["[object Number]"] =
      jm["[object Object]"] =
      jm["[object RegExp]"] =
      jm["[object Set]"] =
      jm["[object String]"] =
      jm["[object WeakMap]"] =
        !1);
  var Mm = function (e) {
    return dm(e) && xm(e.length) && !!jm[Qh(e)];
  };
  var Dm,
    Lm = a("iUcuf"),
    Am = Lm.default && Lm.default.isTypedArray,
    Nm = Am
      ? ((Dm = Am),
        function (e) {
          return Dm(e);
        })
      : Mm;
  var Im = function (e, t) {
      if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
    },
    Hm = Object.prototype.hasOwnProperty;
  var Fm = function (e, t, r) {
    var n = e[t];
    (Hm.call(e, t) && Rh(n, r) && (void 0 !== r || t in e)) || Kg(e, t, r);
  };
  var Um = function (e, t, r, n) {
    var o = !r;
    r || (r = {});
    for (var i = -1, a = t.length; ++i < a; ) {
      var s = t[i],
        l = n ? n(r[s], e[s], s, r, e) : void 0;
      void 0 === l && (l = e[s]), o ? Kg(r, s, l) : Fm(r, s, l);
    }
    return r;
  };
  var Bm = function (e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    },
    zm = ((_m = a("enva8")), 9007199254740991),
    Wm = /^(?:0|[1-9]\d*)$/;
  var qm = function (e, t) {
      var r = typeof e;
      return !!(t = null == t ? zm : t) && ("number" == r || ("symbol" != r && Wm.test(e))) && e > -1 && e % 1 == 0 && e < t;
    },
    Vm = Object.prototype.hasOwnProperty;
  var Ym = function (e, t) {
    var r = ym(e),
      n = !r && vm(e),
      o = !r && !n && (0, _m.default)(e),
      i = !r && !n && !o && Nm(e),
      a = r || n || o || i,
      s = a ? Bm(e.length, String) : [],
      l = s.length;
    for (var u in e)
      (!t && !Vm.call(e, u)) ||
        (a &&
          ("length" == u ||
            (o && ("offset" == u || "parent" == u)) ||
            (i && ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
            qm(u, l))) ||
        s.push(u);
    return s;
  };
  var $m = function (e) {
      var t = [];
      if (null != e) for (var r in Object(e)) t.push(r);
      return t;
    },
    Gm = Object.prototype.hasOwnProperty;
  var Km = function (e) {
    if (!eg(e)) return $m(e);
    var t = um(e),
      r = [];
    for (var n in e) ("constructor" != n || (!t && Gm.call(e, n))) && r.push(n);
    return r;
  };
  var Xm = function (e) {
    return wm(e) ? Ym(e, !0) : Km(e);
  };
  var Zm = function (e) {
    return Um(e, Xm(e));
  };
  var Jm = function (e, t, r, n, o, i, a) {
    var s = Im(e, r),
      l = Im(t, r),
      u = a.get(l);
    if (u) Xg(e, r, u);
    else {
      var c = i ? i(s, l, r + "", e, t, a) : void 0,
        d = void 0 === c;
      if (d) {
        var p = ym(l),
          f = !p && (0, _m.default)(l),
          h = !p && !f && Nm(l);
        (c = l),
          p || f || h
            ? ym(s)
              ? (c = s)
              : Em(s)
              ? (c = nm(s))
              : f
              ? ((d = !1), (c = (0, Qg.default)(l, !0)))
              : h
              ? ((d = !1), (c = rm(l, !0)))
              : (c = [])
            : Pm(l) || vm(l)
            ? ((c = s), vm(s) ? (c = Zm(s)) : (eg(s) && !ig(s)) || (c = cm(l)))
            : (d = !1);
      }
      d && (a.set(l, c), o(c, l, n, i, a), a.delete(l)), Xg(e, r, c);
    }
  };
  var Qm = function e(t, r, n, o, i) {
    t !== r &&
      Jg(
        r,
        function (a, s) {
          if ((i || (i = new Yg()), eg(a))) Jm(t, r, s, n, e, o, i);
          else {
            var l = o ? o(Im(t, s), a, s + "", t, r, i) : void 0;
            void 0 === l && (l = a), Xg(t, s, l);
          }
        },
        Xm
      );
  };
  var ev = function (e) {
    return e;
  };
  var tv = function (e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    },
    rv = Math.max;
  var nv = function (e, t, r) {
    return (
      (t = rv(void 0 === t ? e.length - 1 : t, 0)),
      function () {
        for (var n = arguments, o = -1, i = rv(n.length - t, 0), a = Array(i); ++o < i; ) a[o] = n[t + o];
        o = -1;
        for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
        return (s[t] = r(a)), tv(e, this, s);
      }
    );
  };
  var ov = function (e) {
      return function () {
        return e;
      };
    },
    iv = Gg
      ? function (e, t) {
          return Gg(e, "toString", { configurable: !0, enumerable: !1, value: ov(t), writable: !0 });
        }
      : ev,
    av = iv,
    sv = 800,
    lv = 16,
    uv = Date.now;
  var cv = function (e) {
      var t = 0,
        r = 0;
      return function () {
        var n = uv(),
          o = lv - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= sv) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    },
    dv = cv(av);
  var pv = function (e, t) {
    return dv(nv(e, t, ev), e + "");
  };
  var fv = function (e, t, r) {
    if (!eg(r)) return !1;
    var n = typeof t;
    return !!("number" == n ? wm(r) && qm(t, r.length) : "string" == n && t in r) && Rh(r[t], e);
  };
  var hv,
    gv =
      ((hv = function (e, t, r) {
        Qm(e, t, r);
      }),
      pv(function (e, t) {
        var r = -1,
          n = t.length,
          o = n > 1 ? t[n - 1] : void 0,
          i = n > 2 ? t[2] : void 0;
        for (
          o = hv.length > 3 && "function" == typeof o ? (n--, o) : void 0,
            i && fv(t[0], t[1], i) && ((o = n < 3 ? void 0 : o), (n = 1)),
            e = Object(e);
          ++r < n;

        ) {
          var a = t[r];
          a && hv(e, a, r, o);
        }
        return e;
      })),
    mv = function (e) {
      var t = e.zDepth,
        r = e.radius,
        o = e.background,
        i = e.children,
        a = e.styles,
        l = void 0 === a ? {} : a,
        u = n(Ls)(
          gv(
            {
              default: {
                wrap: { position: "relative", display: "inline-block" },
                content: { position: "relative" },
                bg: {
                  absolute: "0px 0px 0px 0px",
                  boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
                  borderRadius: r,
                  background: o
                }
              },
              "zDepth-0": { bg: { boxShadow: "none" } },
              "zDepth-1": { bg: { boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)" } },
              "zDepth-2": { bg: { boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)" } },
              "zDepth-3": { bg: { boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)" } },
              "zDepth-4": { bg: { boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)" } },
              "zDepth-5": { bg: { boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)" } },
              square: { bg: { borderRadius: "0" } },
              circle: { bg: { borderRadius: "50%" } }
            },
            l
          ),
          { "zDepth-1": 1 === t }
        );
      return n(s).createElement(
        "div",
        { style: u.wrap },
        n(s).createElement("div", { style: u.bg }),
        n(s).createElement("div", { style: u.content }, i)
      );
    };
  (mv.propTypes = { background: n(d).string, zDepth: n(d).oneOf([0, 1, 2, 3, 4, 5]), radius: n(d).number, styles: n(d).object }),
    (mv.defaultProps = { background: "#fff", zDepth: 1, radius: 2, styles: {} });
  var vv = mv,
    yv =
      ((s = a("7b0kr")),
      (xg = a("7z16b")),
      function () {
        return xg.default.Date.now();
      }),
    bv = /\s/;
  var xv = function (e) {
      for (var t = e.length; t-- && bv.test(e.charAt(t)); );
      return t;
    },
    wv = /^\s+/;
  var Ev = function (e) {
      return e ? e.slice(0, xv(e) + 1).replace(wv, "") : e;
    },
    _v = "[object Symbol]";
  var Sv = function (e) {
      return "symbol" == typeof e || (dm(e) && Qh(e) == _v);
    },
    Ov = NaN,
    kv = /^[-+]0x[0-9a-f]+$/i,
    Cv = /^0b[01]+$/i,
    Tv = /^0o[0-7]+$/i,
    Rv = parseInt;
  var Pv = function (e) {
      if ("number" == typeof e) return e;
      if (Sv(e)) return Ov;
      if (eg(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = eg(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = Ev(e);
      var r = Cv.test(e);
      return r || Tv.test(e) ? Rv(e.slice(2), r ? 2 : 8) : kv.test(e) ? Ov : +e;
    },
    jv = "Expected a function",
    Mv = Math.max,
    Dv = Math.min;
  var Lv = function (e, t, r) {
      var n,
        o,
        i,
        a,
        s,
        l,
        u = 0,
        c = !1,
        d = !1,
        p = !0;
      if ("function" != typeof e) throw new TypeError(jv);
      function f(t) {
        var r = n,
          i = o;
        return (n = o = void 0), (u = t), (a = e.apply(i, r));
      }
      function h(e) {
        var r = e - l;
        return void 0 === l || r >= t || r < 0 || (d && e - u >= i);
      }
      function g() {
        var e = yv();
        if (h(e)) return m(e);
        s = setTimeout(
          g,
          (function (e) {
            var r = t - (e - l);
            return d ? Dv(r, i - (e - u)) : r;
          })(e)
        );
      }
      function m(e) {
        return (s = void 0), p && n ? f(e) : ((n = o = void 0), a);
      }
      function v() {
        var e = yv(),
          r = h(e);
        if (((n = arguments), (o = this), (l = e), r)) {
          if (void 0 === s)
            return (function (e) {
              return (u = e), (s = setTimeout(g, t)), c ? f(e) : a;
            })(l);
          if (d) return clearTimeout(s), (s = setTimeout(g, t)), f(l);
        }
        return void 0 === s && (s = setTimeout(g, t)), a;
      }
      return (
        (t = Pv(t) || 0),
        eg(r) && ((c = !!r.leading), (i = (d = "maxWait" in r) ? Mv(Pv(r.maxWait) || 0, t) : i), (p = "trailing" in r ? !!r.trailing : p)),
        (v.cancel = function () {
          void 0 !== s && clearTimeout(s), (u = 0), (n = l = o = s = void 0);
        }),
        (v.flush = function () {
          return void 0 === s ? a : m(yv());
        }),
        v
      );
    },
    Av = "Expected a function";
  var Nv = function (e, t, r) {
      var n = !0,
        o = !0;
      if ("function" != typeof e) throw new TypeError(Av);
      return (
        eg(r) && ((n = "leading" in r ? !!r.leading : n), (o = "trailing" in r ? !!r.trailing : o)),
        Lv(e, t, { leading: n, maxWait: t, trailing: o })
      );
    },
    Iv = (function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    })();
  var Hv = (function (e) {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, t);
        var r = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return (
          (r.handleChange = function (e) {
            "function" == typeof r.props.onChange &&
              r.throttle(
                r.props.onChange,
                (function (e, t, r) {
                  var n = r.getBoundingClientRect(),
                    o = n.width,
                    i = n.height,
                    a = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                    s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                    l = a - (r.getBoundingClientRect().left + window.pageXOffset),
                    u = s - (r.getBoundingClientRect().top + window.pageYOffset);
                  l < 0 ? (l = 0) : l > o && (l = o), u < 0 ? (u = 0) : u > i && (u = i);
                  var c = l / o,
                    d = 1 - u / i;
                  return { h: t.h, s: c, v: d, a: t.a, source: "hsv" };
                })(e, r.props.hsl, r.container),
                e
              );
          }),
          (r.handleMouseDown = function (e) {
            r.handleChange(e);
            var t = r.getContainerRenderWindow();
            t.addEventListener("mousemove", r.handleChange), t.addEventListener("mouseup", r.handleMouseUp);
          }),
          (r.handleMouseUp = function () {
            r.unbindEventListeners();
          }),
          (r.throttle = Nv(function (e, t, r) {
            e(t, r);
          }, 50)),
          r
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        Iv(t, [
          {
            key: "componentWillUnmount",
            value: function () {
              this.throttle.cancel(), this.unbindEventListeners();
            }
          },
          {
            key: "getContainerRenderWindow",
            value: function () {
              for (var e = this.container, t = window; !t.document.contains(e) && t.parent !== t; ) t = t.parent;
              return t;
            }
          },
          {
            key: "unbindEventListeners",
            value: function () {
              var e = this.getContainerRenderWindow();
              e.removeEventListener("mousemove", this.handleChange), e.removeEventListener("mouseup", this.handleMouseUp);
            }
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = this.props.style || {},
                r = t.color,
                o = t.white,
                i = t.black,
                a = t.pointer,
                l = t.circle,
                u = n(Ls)(
                  {
                    default: {
                      color: {
                        absolute: "0px 0px 0px 0px",
                        background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                        borderRadius: this.props.radius
                      },
                      white: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius },
                      black: { absolute: "0px 0px 0px 0px", boxShadow: this.props.shadow, borderRadius: this.props.radius },
                      pointer: {
                        position: "absolute",
                        top: -100 * this.props.hsv.v + 100 + "%",
                        left: 100 * this.props.hsv.s + "%",
                        cursor: "default"
                      },
                      circle: {
                        width: "4px",
                        height: "4px",
                        boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                        borderRadius: "50%",
                        cursor: "hand",
                        transform: "translate(-2px, -2px)"
                      }
                    },
                    custom: { color: r, white: o, black: i, pointer: a, circle: l }
                  },
                  { custom: !!this.props.style }
                );
              return n(s).createElement(
                "div",
                {
                  style: u.color,
                  ref: function (t) {
                    return (e.container = t);
                  },
                  onMouseDown: this.handleMouseDown,
                  onTouchMove: this.handleChange,
                  onTouchStart: this.handleChange
                },
                n(s).createElement(
                  "style",
                  null,
                  "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "
                ),
                n(s).createElement(
                  "div",
                  { style: u.white, className: "saturation-white" },
                  n(s).createElement("div", { style: u.black, className: "saturation-black" }),
                  n(s).createElement(
                    "div",
                    { style: u.pointer },
                    this.props.pointer ? n(s).createElement(this.props.pointer, this.props) : n(s).createElement("div", { style: u.circle })
                  )
                )
              );
            }
          }
        ]),
        t
      );
    })(s.PureComponent || s.Component),
    Fv = Hv;
  s = a("7b0kr");
  var Uv = function (e, t) {
      for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e); );
      return e;
    },
    Bv = am(Object.keys, Object),
    zv = Object.prototype.hasOwnProperty;
  var Wv = function (e) {
    if (!um(e)) return Bv(e);
    var t = [];
    for (var r in Object(e)) zv.call(e, r) && "constructor" != r && t.push(r);
    return t;
  };
  var qv = function (e) {
    return wm(e) ? Ym(e) : Wv(e);
  };
  var Vv = function (e, t) {
      return function (r, n) {
        if (null == r) return r;
        if (!wm(r)) return e(r, n);
        for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && !1 !== n(a[i], i, a); );
        return r;
      };
    },
    Yv = Vv(function (e, t) {
      return e && Jg(e, t, qv);
    });
  var $v = function (e) {
    return "function" == typeof e ? e : ev;
  };
  var Gv = {};
  !(function (e) {
    var t = /^\s+/,
      r = /\s+$/,
      n = 0,
      o = e.round,
      i = e.min,
      a = e.max,
      s = e.random;
    function l(s, u) {
      if (((u = u || {}), (s = s || "") instanceof l)) return s;
      if (!(this instanceof l)) return new l(s, u);
      var c = (function (n) {
        var o = { r: 0, g: 0, b: 0 },
          s = 1,
          l = null,
          u = null,
          c = null,
          d = !1,
          p = !1;
        "string" == typeof n &&
          (n = (function (e) {
            e = e.replace(t, "").replace(r, "").toLowerCase();
            var n,
              o = !1;
            if (k[e]) (e = k[e]), (o = !0);
            else if ("transparent" == e) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
            return (n = F.rgb.exec(e))
              ? { r: n[1], g: n[2], b: n[3] }
              : (n = F.rgba.exec(e))
              ? { r: n[1], g: n[2], b: n[3], a: n[4] }
              : (n = F.hsl.exec(e))
              ? { h: n[1], s: n[2], l: n[3] }
              : (n = F.hsla.exec(e))
              ? { h: n[1], s: n[2], l: n[3], a: n[4] }
              : (n = F.hsv.exec(e))
              ? { h: n[1], s: n[2], v: n[3] }
              : (n = F.hsva.exec(e))
              ? { h: n[1], s: n[2], v: n[3], a: n[4] }
              : (n = F.hex8.exec(e))
              ? { r: j(n[1]), g: j(n[2]), b: j(n[3]), a: A(n[4]), format: o ? "name" : "hex8" }
              : (n = F.hex6.exec(e))
              ? { r: j(n[1]), g: j(n[2]), b: j(n[3]), format: o ? "name" : "hex" }
              : (n = F.hex4.exec(e))
              ? {
                  r: j(n[1] + "" + n[1]),
                  g: j(n[2] + "" + n[2]),
                  b: j(n[3] + "" + n[3]),
                  a: A(n[4] + "" + n[4]),
                  format: o ? "name" : "hex8"
                }
              : !!(n = F.hex3.exec(e)) && {
                  r: j(n[1] + "" + n[1]),
                  g: j(n[2] + "" + n[2]),
                  b: j(n[3] + "" + n[3]),
                  format: o ? "name" : "hex"
                };
          })(n));
        "object" == typeof n &&
          (U(n.r) && U(n.g) && U(n.b)
            ? ((f = n.r),
              (h = n.g),
              (g = n.b),
              (o = { r: 255 * R(f, 255), g: 255 * R(h, 255), b: 255 * R(g, 255) }),
              (d = !0),
              (p = "%" === String(n.r).substr(-1) ? "prgb" : "rgb"))
            : U(n.h) && U(n.s) && U(n.v)
            ? ((l = D(n.s)),
              (u = D(n.v)),
              (o = (function (t, r, n) {
                (t = 6 * R(t, 360)), (r = R(r, 100)), (n = R(n, 100));
                var o = e.floor(t),
                  i = t - o,
                  a = n * (1 - r),
                  s = n * (1 - i * r),
                  l = n * (1 - (1 - i) * r),
                  u = o % 6,
                  c = [n, s, a, a, l, n][u],
                  d = [l, n, n, s, a, a][u],
                  p = [a, a, l, n, n, s][u];
                return { r: 255 * c, g: 255 * d, b: 255 * p };
              })(n.h, l, u)),
              (d = !0),
              (p = "hsv"))
            : U(n.h) &&
              U(n.s) &&
              U(n.l) &&
              ((l = D(n.s)),
              (c = D(n.l)),
              (o = (function (e, t, r) {
                var n, o, i;
                function a(e, t, r) {
                  return (
                    r < 0 && (r += 1),
                    r > 1 && (r -= 1),
                    r < 1 / 6 ? e + 6 * (t - e) * r : r < 0.5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                  );
                }
                if (((e = R(e, 360)), (t = R(t, 100)), (r = R(r, 100)), 0 === t)) n = o = i = r;
                else {
                  var s = r < 0.5 ? r * (1 + t) : r + t - r * t,
                    l = 2 * r - s;
                  (n = a(l, s, e + 1 / 3)), (o = a(l, s, e)), (i = a(l, s, e - 1 / 3));
                }
                return { r: 255 * n, g: 255 * o, b: 255 * i };
              })(n.h, l, c)),
              (d = !0),
              (p = "hsl")),
          n.hasOwnProperty("a") && (s = n.a));
        var f, h, g;
        return (s = T(s)), { ok: d, format: n.format || p, r: i(255, a(o.r, 0)), g: i(255, a(o.g, 0)), b: i(255, a(o.b, 0)), a: s };
      })(s);
      (this._originalInput = s),
        (this._r = c.r),
        (this._g = c.g),
        (this._b = c.b),
        (this._a = c.a),
        (this._roundA = o(100 * this._a) / 100),
        (this._format = u.format || c.format),
        (this._gradientType = u.gradientType),
        this._r < 1 && (this._r = o(this._r)),
        this._g < 1 && (this._g = o(this._g)),
        this._b < 1 && (this._b = o(this._b)),
        (this._ok = c.ok),
        (this._tc_id = n++);
    }
    function u(e, t, r) {
      (e = R(e, 255)), (t = R(t, 255)), (r = R(r, 255));
      var n,
        o,
        s = a(e, t, r),
        l = i(e, t, r),
        u = (s + l) / 2;
      if (s == l) n = o = 0;
      else {
        var c = s - l;
        switch (((o = u > 0.5 ? c / (2 - s - l) : c / (s + l)), s)) {
          case e:
            n = (t - r) / c + (t < r ? 6 : 0);
            break;
          case t:
            n = (r - e) / c + 2;
            break;
          case r:
            n = (e - t) / c + 4;
        }
        n /= 6;
      }
      return { h: n, s: o, l: u };
    }
    function c(e, t, r) {
      (e = R(e, 255)), (t = R(t, 255)), (r = R(r, 255));
      var n,
        o,
        s = a(e, t, r),
        l = i(e, t, r),
        u = s,
        c = s - l;
      if (((o = 0 === s ? 0 : c / s), s == l)) n = 0;
      else {
        switch (s) {
          case e:
            n = (t - r) / c + (t < r ? 6 : 0);
            break;
          case t:
            n = (r - e) / c + 2;
            break;
          case r:
            n = (e - t) / c + 4;
        }
        n /= 6;
      }
      return { h: n, s: o, v: u };
    }
    function d(e, t, r, n) {
      var i = [M(o(e).toString(16)), M(o(t).toString(16)), M(o(r).toString(16))];
      return n && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1)
        ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
        : i.join("");
    }
    function p(e, t, r, n) {
      return [M(L(n)), M(o(e).toString(16)), M(o(t).toString(16)), M(o(r).toString(16))].join("");
    }
    function f(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = l(e).toHsl();
      return (r.s -= t / 100), (r.s = P(r.s)), l(r);
    }
    function h(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = l(e).toHsl();
      return (r.s += t / 100), (r.s = P(r.s)), l(r);
    }
    function g(e) {
      return l(e).desaturate(100);
    }
    function m(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = l(e).toHsl();
      return (r.l += t / 100), (r.l = P(r.l)), l(r);
    }
    function v(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = l(e).toRgb();
      return (
        (r.r = a(0, i(255, r.r - o((-t / 100) * 255)))),
        (r.g = a(0, i(255, r.g - o((-t / 100) * 255)))),
        (r.b = a(0, i(255, r.b - o((-t / 100) * 255)))),
        l(r)
      );
    }
    function y(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = l(e).toHsl();
      return (r.l -= t / 100), (r.l = P(r.l)), l(r);
    }
    function b(e, t) {
      var r = l(e).toHsl(),
        n = (r.h + t) % 360;
      return (r.h = n < 0 ? 360 + n : n), l(r);
    }
    function x(e) {
      var t = l(e).toHsl();
      return (t.h = (t.h + 180) % 360), l(t);
    }
    function w(e) {
      var t = l(e).toHsl(),
        r = t.h;
      return [l(e), l({ h: (r + 120) % 360, s: t.s, l: t.l }), l({ h: (r + 240) % 360, s: t.s, l: t.l })];
    }
    function E(e) {
      var t = l(e).toHsl(),
        r = t.h;
      return [
        l(e),
        l({ h: (r + 90) % 360, s: t.s, l: t.l }),
        l({ h: (r + 180) % 360, s: t.s, l: t.l }),
        l({ h: (r + 270) % 360, s: t.s, l: t.l })
      ];
    }
    function _(e) {
      var t = l(e).toHsl(),
        r = t.h;
      return [l(e), l({ h: (r + 72) % 360, s: t.s, l: t.l }), l({ h: (r + 216) % 360, s: t.s, l: t.l })];
    }
    function S(e, t, r) {
      (t = t || 6), (r = r || 30);
      var n = l(e).toHsl(),
        o = 360 / r,
        i = [l(e)];
      for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; ) (n.h = (n.h + o) % 360), i.push(l(n));
      return i;
    }
    function O(e, t) {
      t = t || 6;
      for (var r = l(e).toHsv(), n = r.h, o = r.s, i = r.v, a = [], s = 1 / t; t--; ) a.push(l({ h: n, s: o, v: i })), (i = (i + s) % 1);
      return a;
    }
    (l.prototype = {
      isDark: function () {
        return this.getBrightness() < 128;
      },
      isLight: function () {
        return !this.isDark();
      },
      isValid: function () {
        return this._ok;
      },
      getOriginalInput: function () {
        return this._originalInput;
      },
      getFormat: function () {
        return this._format;
      },
      getAlpha: function () {
        return this._a;
      },
      getBrightness: function () {
        var e = this.toRgb();
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
      },
      getLuminance: function () {
        var t,
          r,
          n,
          o = this.toRgb();
        return (
          (t = o.r / 255),
          (r = o.g / 255),
          (n = o.b / 255),
          0.2126 * (t <= 0.03928 ? t / 12.92 : e.pow((t + 0.055) / 1.055, 2.4)) +
            0.7152 * (r <= 0.03928 ? r / 12.92 : e.pow((r + 0.055) / 1.055, 2.4)) +
            0.0722 * (n <= 0.03928 ? n / 12.92 : e.pow((n + 0.055) / 1.055, 2.4))
        );
      },
      setAlpha: function (e) {
        return (this._a = T(e)), (this._roundA = o(100 * this._a) / 100), this;
      },
      toHsv: function () {
        var e = c(this._r, this._g, this._b);
        return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
      },
      toHsvString: function () {
        var e = c(this._r, this._g, this._b),
          t = o(360 * e.h),
          r = o(100 * e.s),
          n = o(100 * e.v);
        return 1 == this._a ? "hsv(" + t + ", " + r + "%, " + n + "%)" : "hsva(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
      },
      toHsl: function () {
        var e = u(this._r, this._g, this._b);
        return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
      },
      toHslString: function () {
        var e = u(this._r, this._g, this._b),
          t = o(360 * e.h),
          r = o(100 * e.s),
          n = o(100 * e.l);
        return 1 == this._a ? "hsl(" + t + ", " + r + "%, " + n + "%)" : "hsla(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
      },
      toHex: function (e) {
        return d(this._r, this._g, this._b, e);
      },
      toHexString: function (e) {
        return "#" + this.toHex(e);
      },
      toHex8: function (e) {
        return (function (e, t, r, n, i) {
          var a = [M(o(e).toString(16)), M(o(t).toString(16)), M(o(r).toString(16)), M(L(n))];
          return i &&
            a[0].charAt(0) == a[0].charAt(1) &&
            a[1].charAt(0) == a[1].charAt(1) &&
            a[2].charAt(0) == a[2].charAt(1) &&
            a[3].charAt(0) == a[3].charAt(1)
            ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
            : a.join("");
        })(this._r, this._g, this._b, this._a, e);
      },
      toHex8String: function (e) {
        return "#" + this.toHex8(e);
      },
      toRgb: function () {
        return { r: o(this._r), g: o(this._g), b: o(this._b), a: this._a };
      },
      toRgbString: function () {
        return 1 == this._a
          ? "rgb(" + o(this._r) + ", " + o(this._g) + ", " + o(this._b) + ")"
          : "rgba(" + o(this._r) + ", " + o(this._g) + ", " + o(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function () {
        return { r: o(100 * R(this._r, 255)) + "%", g: o(100 * R(this._g, 255)) + "%", b: o(100 * R(this._b, 255)) + "%", a: this._a };
      },
      toPercentageRgbString: function () {
        return 1 == this._a
          ? "rgb(" + o(100 * R(this._r, 255)) + "%, " + o(100 * R(this._g, 255)) + "%, " + o(100 * R(this._b, 255)) + "%)"
          : "rgba(" +
              o(100 * R(this._r, 255)) +
              "%, " +
              o(100 * R(this._g, 255)) +
              "%, " +
              o(100 * R(this._b, 255)) +
              "%, " +
              this._roundA +
              ")";
      },
      toName: function () {
        return 0 === this._a ? "transparent" : !(this._a < 1) && (C[d(this._r, this._g, this._b, !0)] || !1);
      },
      toFilter: function (e) {
        var t = "#" + p(this._r, this._g, this._b, this._a),
          r = t,
          n = this._gradientType ? "GradientType = 1, " : "";
        if (e) {
          var o = l(e);
          r = "#" + p(o._r, o._g, o._b, o._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + t + ",endColorstr=" + r + ")";
      },
      toString: function (e) {
        var t = !!e;
        e = e || this._format;
        var r = !1,
          n = this._a < 1 && this._a >= 0;
        return t || !n || ("hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e)
          ? ("rgb" === e && (r = this.toRgbString()),
            "prgb" === e && (r = this.toPercentageRgbString()),
            ("hex" !== e && "hex6" !== e) || (r = this.toHexString()),
            "hex3" === e && (r = this.toHexString(!0)),
            "hex4" === e && (r = this.toHex8String(!0)),
            "hex8" === e && (r = this.toHex8String()),
            "name" === e && (r = this.toName()),
            "hsl" === e && (r = this.toHslString()),
            "hsv" === e && (r = this.toHsvString()),
            r || this.toHexString())
          : "name" === e && 0 === this._a
          ? this.toName()
          : this.toRgbString();
      },
      clone: function () {
        return l(this.toString());
      },
      _applyModification: function (e, t) {
        var r = e.apply(null, [this].concat([].slice.call(t)));
        return (this._r = r._r), (this._g = r._g), (this._b = r._b), this.setAlpha(r._a), this;
      },
      lighten: function () {
        return this._applyModification(m, arguments);
      },
      brighten: function () {
        return this._applyModification(v, arguments);
      },
      darken: function () {
        return this._applyModification(y, arguments);
      },
      desaturate: function () {
        return this._applyModification(f, arguments);
      },
      saturate: function () {
        return this._applyModification(h, arguments);
      },
      greyscale: function () {
        return this._applyModification(g, arguments);
      },
      spin: function () {
        return this._applyModification(b, arguments);
      },
      _applyCombination: function (e, t) {
        return e.apply(null, [this].concat([].slice.call(t)));
      },
      analogous: function () {
        return this._applyCombination(S, arguments);
      },
      complement: function () {
        return this._applyCombination(x, arguments);
      },
      monochromatic: function () {
        return this._applyCombination(O, arguments);
      },
      splitcomplement: function () {
        return this._applyCombination(_, arguments);
      },
      triad: function () {
        return this._applyCombination(w, arguments);
      },
      tetrad: function () {
        return this._applyCombination(E, arguments);
      }
    }),
      (l.fromRatio = function (e, t) {
        if ("object" == typeof e) {
          var r = {};
          for (var n in e) e.hasOwnProperty(n) && (r[n] = "a" === n ? e[n] : D(e[n]));
          e = r;
        }
        return l(e, t);
      }),
      (l.equals = function (e, t) {
        return !(!e || !t) && l(e).toRgbString() == l(t).toRgbString();
      }),
      (l.random = function () {
        return l.fromRatio({ r: s(), g: s(), b: s() });
      }),
      (l.mix = function (e, t, r) {
        r = 0 === r ? 0 : r || 50;
        var n = l(e).toRgb(),
          o = l(t).toRgb(),
          i = r / 100;
        return l({ r: (o.r - n.r) * i + n.r, g: (o.g - n.g) * i + n.g, b: (o.b - n.b) * i + n.b, a: (o.a - n.a) * i + n.a });
      }),
      (l.readability = function (t, r) {
        var n = l(t),
          o = l(r);
        return (e.max(n.getLuminance(), o.getLuminance()) + 0.05) / (e.min(n.getLuminance(), o.getLuminance()) + 0.05);
      }),
      (l.isReadable = function (e, t, r) {
        var n,
          o,
          i = l.readability(e, t);
        switch (
          ((o = !1),
          (n = (function (e) {
            var t, r;
            (t = ((e = e || { level: "AA", size: "small" }).level || "AA").toUpperCase()),
              (r = (e.size || "small").toLowerCase()),
              "AA" !== t && "AAA" !== t && (t = "AA");
            "small" !== r && "large" !== r && (r = "small");
            return { level: t, size: r };
          })(r)).level + n.size)
        ) {
          case "AAsmall":
          case "AAAlarge":
            o = i >= 4.5;
            break;
          case "AAlarge":
            o = i >= 3;
            break;
          case "AAAsmall":
            o = i >= 7;
        }
        return o;
      }),
      (l.mostReadable = function (e, t, r) {
        var n,
          o,
          i,
          a,
          s = null,
          u = 0;
        (o = (r = r || {}).includeFallbackColors), (i = r.level), (a = r.size);
        for (var c = 0; c < t.length; c++) (n = l.readability(e, t[c])) > u && ((u = n), (s = l(t[c])));
        return l.isReadable(e, s, { level: i, size: a }) || !o
          ? s
          : ((r.includeFallbackColors = !1), l.mostReadable(e, ["#fff", "#000"], r));
      });
    var k = (l.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
      }),
      C = (l.hexNames = (function (e) {
        var t = {};
        for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
        return t;
      })(k));
    function T(e) {
      return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
    }
    function R(t, r) {
      (function (e) {
        return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e);
      })(t) && (t = "100%");
      var n = (function (e) {
        return "string" == typeof e && -1 != e.indexOf("%");
      })(t);
      return (t = i(r, a(0, parseFloat(t)))), n && (t = parseInt(t * r, 10) / 100), e.abs(t - r) < 1e-6 ? 1 : (t % r) / parseFloat(r);
    }
    function P(e) {
      return i(1, a(0, e));
    }
    function j(e) {
      return parseInt(e, 16);
    }
    function M(e) {
      return 1 == e.length ? "0" + e : "" + e;
    }
    function D(e) {
      return e <= 1 && (e = 100 * e + "%"), e;
    }
    function L(t) {
      return e.round(255 * parseFloat(t)).toString(16);
    }
    function A(e) {
      return j(e) / 255;
    }
    var N,
      I,
      H,
      F =
        ((I = "[\\s|\\(]+(" + (N = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?"),
        (H = "[\\s|\\(]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?"),
        {
          CSS_UNIT: new RegExp(N),
          rgb: new RegExp("rgb" + I),
          rgba: new RegExp("rgba" + H),
          hsl: new RegExp("hsl" + I),
          hsla: new RegExp("hsla" + H),
          hsv: new RegExp("hsv" + I),
          hsva: new RegExp("hsva" + H),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });
    function U(e) {
      return !!F.CSS_UNIT.exec(e);
    }
    Gv
      ? (Gv = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : (window.tinycolor = l);
  })(Math);
  var Kv = function (e) {
      var t,
        r,
        n = 0,
        o = 0;
      return (
        (r = function (t) {
          e[t] && ((n += 1), isNaN(e[t]) || (o += 1), "s" === t || "l" === t) && /^\d+%$/.test(e[t]) && (o += 1);
        }),
        (ym((t = ["r", "g", "b", "a", "h", "s", "l", "v"])) ? Uv : Yv)(t, $v(r)),
        n === o && e
      );
    },
    Xv = function (e, t) {
      var r = e.hex ? n(Gv)(e.hex) : n(Gv)(e),
        o = r.toHsl(),
        i = r.toHsv(),
        a = r.toRgb(),
        s = r.toHex();
      return (
        0 === o.s && ((o.h = t || 0), (i.h = t || 0)),
        { hsl: o, hex: "000000" === s && 0 === a.a ? "transparent" : "#" + s, rgb: a, hsv: i, oldHue: e.h || t || o.h, source: e.source }
      );
    },
    Zv = function (e) {
      if ("transparent" === e) return !0;
      var t = "#" === String(e).charAt(0) ? 1 : 0;
      return e.length !== 4 + t && e.length < 7 + t && n(Gv)(e).isValid();
    },
    Jv = function (e) {
      if (!e) return "#fff";
      var t = Xv(e);
      return "transparent" === t.hex ? "rgba(0,0,0,0.4)" : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128 ? "#000" : "#fff";
    },
    Qv = function (e, t) {
      var r = e.replace("°", "");
      return n(Gv)(t + " (" + r + ")")._ok;
    },
    ey =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    ty = (function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    })();
  var ry = function (e) {
      var t = (function (t) {
        function r(e) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, r);
          var t = (function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
          })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
          return (
            (t.handleChange = function (e, r) {
              if (Kv(e)) {
                var n = Xv(e, e.h || t.state.oldHue);
                t.setState(n),
                  t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, n, r),
                  t.props.onChange && t.props.onChange(n, r);
              }
            }),
            (t.handleSwatchHover = function (e, r) {
              if (Kv(e)) {
                var n = Xv(e, e.h || t.state.oldHue);
                t.props.onSwatchHover && t.props.onSwatchHover(n, r);
              }
            }),
            (t.state = ey({}, Xv(e.color, 0))),
            (t.debounce = Lv(function (e, t, r) {
              e(t, r);
            }, 100)),
            t
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
          })(r, t),
          ty(
            r,
            [
              {
                key: "render",
                value: function () {
                  var t = {};
                  return (
                    this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover),
                    n(s).createElement(e, ey({}, this.props, this.state, { onChange: this.handleChange }, t))
                  );
                }
              }
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  return ey({}, Xv(e.color, t.oldHue));
                }
              }
            ]
          ),
          r
        );
      })(s.PureComponent || s.Component);
      return (t.propTypes = ey({}, e.propTypes)), (t.defaultProps = ey({}, e.defaultProps, { color: { h: 250, s: 0.5, l: 0.2, a: 1 } })), t;
    },
    ny =
      ((s = a("7b0kr")),
      (s = a("7b0kr")),
      Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    oy = (function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    })();
  function iy(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  var ay =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    sy = (function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
      return (function (r) {
        function o() {
          var e, t, r;
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, o);
          for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
          return (
            (t = r = iy(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(i)))),
            (r.state = { focus: !1 }),
            (r.handleFocus = function () {
              return r.setState({ focus: !0 });
            }),
            (r.handleBlur = function () {
              return r.setState({ focus: !1 });
            }),
            iy(r, t)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
          })(o, r),
          oy(o, [
            {
              key: "render",
              value: function () {
                return n(s).createElement(
                  t,
                  { onFocus: this.handleFocus, onBlur: this.handleBlur },
                  n(s).createElement(e, ny({}, this.props, this.state))
                );
              }
            }
          ]),
          o
        );
      })(n(s).Component);
    })(function (e) {
      var t = e.color,
        r = e.style,
        o = e.onClick,
        i = void 0 === o ? function () {} : o,
        a = e.onHover,
        l = e.title,
        u = void 0 === l ? t : l,
        c = e.children,
        d = e.focus,
        p = e.focusStyle,
        f = void 0 === p ? {} : p,
        h = "transparent" === t,
        g = n(Ls)({
          default: {
            swatch: ay(
              { background: t, height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none" },
              r,
              d ? f : {}
            )
          }
        }),
        m = {};
      return (
        a &&
          (m.onMouseOver = function (e) {
            return a(t, e);
          }),
        n(s).createElement(
          "div",
          ay(
            {
              style: g.swatch,
              onClick: function (e) {
                return i(t, e);
              },
              title: u,
              tabIndex: 0,
              onKeyDown: function (e) {
                return 13 === e.keyCode && i(t, e);
              }
            },
            m
          ),
          c,
          h && n(s).createElement(fh, { borderRadius: g.swatch.borderRadius, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" })
        )
      );
    }),
    ly =
      ((s = a("7b0kr")),
      function (e) {
        var t = e.direction,
          r = n(Ls)(
            {
              default: {
                picker: {
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  transform: "translate(-9px, -1px)",
                  backgroundColor: "rgb(248, 248, 248)",
                  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
              },
              vertical: { picker: { transform: "translate(-3px, -9px)" } }
            },
            { vertical: "vertical" === t }
          );
        return n(s).createElement("div", { style: r.picker });
      }),
    uy =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    cy = function (e) {
      var t = e.rgb,
        r = e.hsl,
        o = e.width,
        i = e.height,
        a = e.onChange,
        l = e.direction,
        u = e.style,
        c = e.renderers,
        d = e.pointer,
        p = e.className,
        f = void 0 === p ? "" : p,
        h = n(Ls)({ default: { picker: { position: "relative", width: o, height: i }, alpha: { radius: "2px", style: u } } });
      return n(s).createElement(
        "div",
        { style: h.picker, className: "alpha-picker " + f },
        n(s).createElement(yh, uy({}, h.alpha, { rgb: t, hsl: r, pointer: d, renderers: c, onChange: a, direction: l }))
      );
    };
  cy.defaultProps = { width: "316px", height: "16px", direction: "horizontal", pointer: ly };
  ry(cy), (s = a("7b0kr")), (d = a("3pr9z")), (s = a("7b0kr"));
  var dy = function (e, t) {
      for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
      return o;
    },
    py = "__lodash_hash_undefined__";
  var fy = function (e) {
    return this.__data__.set(e, py), this;
  };
  var hy = function (e) {
    return this.__data__.has(e);
  };
  function gy(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.__data__ = new zg(); ++t < r; ) this.add(e[t]);
  }
  (gy.prototype.add = gy.prototype.push = fy), (gy.prototype.has = hy);
  var my = gy;
  var vy = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
    return !1;
  };
  var yy = function (e, t) {
      return e.has(t);
    },
    by = 1,
    xy = 2;
  var wy = function (e, t, r, n, o, i) {
    var a = r & by,
      s = e.length,
      l = t.length;
    if (s != l && !(a && l > s)) return !1;
    var u = i.get(e),
      c = i.get(t);
    if (u && c) return u == t && c == e;
    var d = -1,
      p = !0,
      f = r & xy ? new my() : void 0;
    for (i.set(e, t), i.set(t, e); ++d < s; ) {
      var h = e[d],
        g = t[d];
      if (n) var m = a ? n(g, h, d, t, e, i) : n(h, g, d, e, t, i);
      if (void 0 !== m) {
        if (m) continue;
        p = !1;
        break;
      }
      if (f) {
        if (
          !vy(t, function (e, t) {
            if (!yy(f, t) && (h === e || o(h, e, r, n, i))) return f.push(t);
          })
        ) {
          p = !1;
          break;
        }
      } else if (h !== g && !o(h, g, r, n, i)) {
        p = !1;
        break;
      }
    }
    return i.delete(e), i.delete(t), p;
  };
  var Ey = function (e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (e, n) {
        r[++t] = [n, e];
      }),
      r
    );
  };
  var _y = function (e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (e) {
          r[++t] = e;
        }),
        r
      );
    },
    Sy = 1,
    Oy = 2,
    ky = "[object Boolean]",
    Cy = "[object Date]",
    Ty = "[object Error]",
    Ry = "[object Map]",
    Py = "[object Number]",
    jy = "[object RegExp]",
    My = "[object Set]",
    Dy = "[object String]",
    Ly = "[object Symbol]",
    Ay = "[object ArrayBuffer]",
    Ny = "[object DataView]",
    Iy = zh ? zh.prototype : void 0,
    Hy = Iy ? Iy.valueOf : void 0;
  var Fy = function (e, t, r, n, o, i, a) {
    switch (r) {
      case Ny:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        (e = e.buffer), (t = t.buffer);
      case Ay:
        return !(e.byteLength != t.byteLength || !i(new em(e), new em(t)));
      case ky:
      case Cy:
      case Py:
        return Rh(+e, +t);
      case Ty:
        return e.name == t.name && e.message == t.message;
      case jy:
      case Dy:
        return e == t + "";
      case Ry:
        var s = Ey;
      case My:
        var l = n & Sy;
        if ((s || (s = _y), e.size != t.size && !l)) return !1;
        var u = a.get(e);
        if (u) return u == t;
        (n |= Oy), a.set(e, t);
        var c = wy(s(e), s(t), n, o, i, a);
        return a.delete(e), c;
      case Ly:
        if (Hy) return Hy.call(e) == Hy.call(t);
    }
    return !1;
  };
  var Uy = function (e, t) {
    for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
    return e;
  };
  var By = function (e, t, r) {
    var n = t(e);
    return ym(e) ? n : Uy(n, r(e));
  };
  var zy = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, o = 0, i = []; ++r < n; ) {
      var a = e[r];
      t(a, r, e) && (i[o++] = a);
    }
    return i;
  };
  var Wy = function () {
      return [];
    },
    qy = Object.prototype.propertyIsEnumerable,
    Vy = Object.getOwnPropertySymbols,
    Yy = Vy
      ? function (e) {
          return null == e
            ? []
            : ((e = Object(e)),
              zy(Vy(e), function (t) {
                return qy.call(e, t);
              }));
        }
      : Wy;
  var $y = function (e) {
      return By(e, qv, Yy);
    },
    Gy = 1,
    Ky = Object.prototype.hasOwnProperty;
  var Xy = function (e, t, r, n, o, i) {
      var a = r & Gy,
        s = $y(e),
        l = s.length;
      if (l != $y(t).length && !a) return !1;
      for (var u = l; u--; ) {
        var c = s[u];
        if (!(a ? c in t : Ky.call(t, c))) return !1;
      }
      var d = i.get(e),
        p = i.get(t);
      if (d && p) return d == t && p == e;
      var f = !0;
      i.set(e, t), i.set(t, e);
      for (var h = a; ++u < l; ) {
        var g = e[(c = s[u])],
          m = t[c];
        if (n) var v = a ? n(m, g, c, t, e, i) : n(g, m, c, e, t, i);
        if (!(void 0 === v ? g === m || o(g, m, r, n, i) : v)) {
          f = !1;
          break;
        }
        h || (h = "constructor" == c);
      }
      if (f && !h) {
        var y = e.constructor,
          b = t.constructor;
        y == b ||
          !("constructor" in e) ||
          !("constructor" in t) ||
          ("function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b) ||
          (f = !1);
      }
      return i.delete(e), i.delete(t), f;
    },
    Zy = ((xg = a("7z16b")), bg(xg.default, "DataView")),
    Jy = ((xg = a("7z16b")), bg(xg.default, "Promise")),
    Qy = ((xg = a("7z16b")), bg(xg.default, "Set")),
    eb = ((xg = a("7z16b")), bg(xg.default, "WeakMap")),
    tb = "[object Map]",
    rb = "[object Promise]",
    nb = "[object Set]",
    ob = "[object WeakMap]",
    ib = "[object DataView]",
    ab = cg(Zy),
    sb = cg(wg),
    lb = cg(Jy),
    ub = cg(Qy),
    cb = cg(eb),
    db = Qh;
  ((Zy && db(new Zy(new ArrayBuffer(1))) != ib) ||
    (wg && db(new wg()) != tb) ||
    (Jy && db(Jy.resolve()) != rb) ||
    (Qy && db(new Qy()) != nb) ||
    (eb && db(new eb()) != ob)) &&
    (db = function (e) {
      var t = Qh(e),
        r = "[object Object]" == t ? e.constructor : void 0,
        n = r ? cg(r) : "";
      if (n)
        switch (n) {
          case ab:
            return ib;
          case sb:
            return tb;
          case lb:
            return rb;
          case ub:
            return nb;
          case cb:
            return ob;
        }
      return t;
    });
  var pb = db,
    fb = ((_m = a("enva8")), 1),
    hb = "[object Arguments]",
    gb = "[object Array]",
    mb = "[object Object]",
    vb = Object.prototype.hasOwnProperty;
  var yb = function (e, t, r, n, o, i) {
    var a = ym(e),
      s = ym(t),
      l = a ? gb : pb(e),
      u = s ? gb : pb(t),
      c = (l = l == hb ? mb : l) == mb,
      d = (u = u == hb ? mb : u) == mb,
      p = l == u;
    if (p && (0, _m.default)(e)) {
      if (!(0, _m.default)(t)) return !1;
      (a = !0), (c = !1);
    }
    if (p && !c) return i || (i = new Yg()), a || Nm(e) ? wy(e, t, r, n, o, i) : Fy(e, t, l, r, n, o, i);
    if (!(r & fb)) {
      var f = c && vb.call(e, "__wrapped__"),
        h = d && vb.call(t, "__wrapped__");
      if (f || h) {
        var g = f ? e.value() : e,
          m = h ? t.value() : t;
        return i || (i = new Yg()), o(g, m, r, n, i);
      }
    }
    return !!p && (i || (i = new Yg()), Xy(e, t, r, n, o, i));
  };
  var bb = function e(t, r, n, o, i) {
      return t === r || (null == t || null == r || (!dm(t) && !dm(r)) ? t != t && r != r : yb(t, r, n, o, e, i));
    },
    xb = 1,
    wb = 2;
  var Eb = function (e, t, r, n) {
    var o = r.length,
      i = o,
      a = !n;
    if (null == e) return !i;
    for (e = Object(e); o--; ) {
      var s = r[o];
      if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
    }
    for (; ++o < i; ) {
      var l = (s = r[o])[0],
        u = e[l],
        c = s[1];
      if (a && s[2]) {
        if (void 0 === u && !(l in e)) return !1;
      } else {
        var d = new Yg();
        if (n) var p = n(u, c, l, e, t, d);
        if (!(void 0 === p ? bb(c, u, xb | wb, n, d) : p)) return !1;
      }
    }
    return !0;
  };
  var _b = function (e) {
    return e == e && !eg(e);
  };
  var Sb = function (e) {
    for (var t = qv(e), r = t.length; r--; ) {
      var n = t[r],
        o = e[n];
      t[r] = [n, o, _b(o)];
    }
    return t;
  };
  var Ob = function (e, t) {
    return function (r) {
      return null != r && r[e] === t && (void 0 !== t || e in Object(r));
    };
  };
  var kb = function (e) {
      var t = Sb(e);
      return 1 == t.length && t[0][2]
        ? Ob(t[0][0], t[0][1])
        : function (r) {
            return r === e || Eb(r, e, t);
          };
    },
    Cb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Tb = /^\w*$/;
  var Rb = function (e, t) {
      if (ym(e)) return !1;
      var r = typeof e;
      return (
        !("number" != r && "symbol" != r && "boolean" != r && null != e && !Sv(e)) ||
        Tb.test(e) ||
        !Cb.test(e) ||
        (null != t && e in Object(t))
      );
    },
    Pb = "Expected a function";
  function jb(e, t) {
    if ("function" != typeof e || (null != t && "function" != typeof t)) throw new TypeError(Pb);
    var r = function () {
      var n = arguments,
        o = t ? t.apply(this, n) : n[0],
        i = r.cache;
      if (i.has(o)) return i.get(o);
      var a = e.apply(this, n);
      return (r.cache = i.set(o, a) || i), a;
    };
    return (r.cache = new (jb.Cache || zg)()), r;
  }
  jb.Cache = zg;
  var Mb = jb,
    Db = 500;
  var Lb = function (e) {
      var t = Mb(e, function (e) {
          return r.size === Db && r.clear(), e;
        }),
        r = t.cache;
      return t;
    },
    Ab = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Nb = /\\(\\)?/g,
    Ib = Lb(function (e) {
      var t = [];
      return (
        46 === e.charCodeAt(0) && t.push(""),
        e.replace(Ab, function (e, r, n, o) {
          t.push(n ? o.replace(Nb, "$1") : r || e);
        }),
        t
      );
    }),
    Hb = 1 / 0,
    Fb = zh ? zh.prototype : void 0,
    Ub = Fb ? Fb.toString : void 0;
  var Bb = function e(t) {
    if ("string" == typeof t) return t;
    if (ym(t)) return dy(t, e) + "";
    if (Sv(t)) return Ub ? Ub.call(t) : "";
    var r = t + "";
    return "0" == r && 1 / t == -Hb ? "-0" : r;
  };
  var zb = function (e) {
    return null == e ? "" : Bb(e);
  };
  var Wb = function (e, t) {
      return ym(e) ? e : Rb(e, t) ? [e] : Ib(zb(e));
    },
    qb = 1 / 0;
  var Vb = function (e) {
    if ("string" == typeof e || Sv(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -qb ? "-0" : t;
  };
  var Yb = function (e, t) {
    for (var r = 0, n = (t = Wb(t, e)).length; null != e && r < n; ) e = e[Vb(t[r++])];
    return r && r == n ? e : void 0;
  };
  var $b = function (e, t, r) {
    var n = null == e ? void 0 : Yb(e, t);
    return void 0 === n ? r : n;
  };
  var Gb = function (e, t) {
    return null != e && t in Object(e);
  };
  var Kb = function (e, t, r) {
    for (var n = -1, o = (t = Wb(t, e)).length, i = !1; ++n < o; ) {
      var a = Vb(t[n]);
      if (!(i = null != e && r(e, a))) break;
      e = e[a];
    }
    return i || ++n != o ? i : !!(o = null == e ? 0 : e.length) && xm(o) && qm(a, o) && (ym(e) || vm(e));
  };
  var Xb = function (e, t) {
      return null != e && Kb(e, t, Gb);
    },
    Zb = 1,
    Jb = 2;
  var Qb = function (e, t) {
    return Rb(e) && _b(t)
      ? Ob(Vb(e), t)
      : function (r) {
          var n = $b(r, e);
          return void 0 === n && n === t ? Xb(r, e) : bb(t, n, Zb | Jb);
        };
  };
  var ex = function (e) {
    return function (t) {
      return null == t ? void 0 : t[e];
    };
  };
  var tx = function (e) {
    return function (t) {
      return Yb(t, e);
    };
  };
  var rx = function (e) {
    return Rb(e) ? ex(Vb(e)) : tx(e);
  };
  var nx = function (e) {
    return "function" == typeof e ? e : null == e ? ev : "object" == typeof e ? (ym(e) ? Qb(e[0], e[1]) : kb(e)) : rx(e);
  };
  var ox = function (e, t) {
    var r = -1,
      n = wm(e) ? Array(e.length) : [];
    return (
      Yv(e, function (e, o, i) {
        n[++r] = t(e, o, i);
      }),
      n
    );
  };
  var ix = function (e, t) {
      return (ym(e) ? dy : ox)(e, nx(t, 3));
    },
    ax = function (e) {
      var t = e.colors,
        r = e.onClick,
        o = e.onSwatchHover,
        i = n(Ls)({
          default: {
            swatches: { marginRight: "-10px" },
            swatch: { width: "22px", height: "22px", float: "left", marginRight: "10px", marginBottom: "10px", borderRadius: "4px" },
            clear: { clear: "both" }
          }
        });
      return n(s).createElement(
        "div",
        { style: i.swatches },
        ix(t, function (e) {
          return n(s).createElement(sy, {
            key: e,
            color: e,
            style: i.swatch,
            onClick: r,
            onHover: o,
            focusStyle: { boxShadow: "0 0 4px " + e }
          });
        }),
        n(s).createElement("div", { style: i.clear })
      );
    },
    sx = function (e) {
      var t = e.onChange,
        r = e.onSwatchHover,
        o = e.hex,
        i = e.colors,
        a = e.width,
        l = e.triangle,
        u = e.styles,
        c = void 0 === u ? {} : u,
        d = e.className,
        p = void 0 === d ? "" : d,
        f = "transparent" === o,
        h = function (e, r) {
          Zv(e) && t({ hex: e, source: "hex" }, r);
        },
        g = n(Ls)(
          gv(
            {
              default: {
                card: { width: a, background: "#fff", boxShadow: "0 1px rgba(0,0,0,.1)", borderRadius: "6px", position: "relative" },
                head: {
                  height: "110px",
                  background: o,
                  borderRadius: "6px 6px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                },
                body: { padding: "10px" },
                label: { fontSize: "18px", color: Jv(o), position: "relative" },
                triangle: {
                  width: "0px",
                  height: "0px",
                  borderStyle: "solid",
                  borderWidth: "0 10px 10px 10px",
                  borderColor: "transparent transparent " + o + " transparent",
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  marginLeft: "-10px"
                },
                input: {
                  width: "100%",
                  fontSize: "12px",
                  color: "#666",
                  border: "0px",
                  outline: "none",
                  height: "22px",
                  boxShadow: "inset 0 0 0 1px #ddd",
                  borderRadius: "4px",
                  padding: "0 7px",
                  boxSizing: "border-box"
                }
              },
              "hide-triangle": { triangle: { display: "none" } }
            },
            c
          ),
          { "hide-triangle": "hide" === l }
        );
      return n(s).createElement(
        "div",
        { style: g.card, className: "block-picker " + p },
        n(s).createElement("div", { style: g.triangle }),
        n(s).createElement(
          "div",
          { style: g.head },
          f && n(s).createElement(fh, { borderRadius: "6px 6px 0 0" }),
          n(s).createElement("div", { style: g.label }, o)
        ),
        n(s).createElement(
          "div",
          { style: g.body },
          n(s).createElement(ax, { colors: i, onClick: h, onSwatchHover: r }),
          n(s).createElement(_h, { style: { input: g.input }, value: o, onChange: h })
        )
      );
    };
  (sx.propTypes = {
    width: n(d).oneOfType([n(d).string, n(d).number]),
    colors: n(d).arrayOf(n(d).string),
    triangle: n(d).oneOf(["top", "hide"]),
    styles: n(d).object
  }),
    (sx.defaultProps = {
      width: 170,
      colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
      triangle: "top",
      styles: {}
    });
  ry(sx), (s = a("7b0kr")), (d = a("3pr9z"));
  var lx = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      a100: "#ff8a80",
      a200: "#ff5252",
      a400: "#ff1744",
      a700: "#d50000"
    },
    ux = {
      50: "#fce4ec",
      100: "#f8bbd0",
      200: "#f48fb1",
      300: "#f06292",
      400: "#ec407a",
      500: "#e91e63",
      600: "#d81b60",
      700: "#c2185b",
      800: "#ad1457",
      900: "#880e4f",
      a100: "#ff80ab",
      a200: "#ff4081",
      a400: "#f50057",
      a700: "#c51162"
    },
    cx = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      a100: "#ea80fc",
      a200: "#e040fb",
      a400: "#d500f9",
      a700: "#aa00ff"
    },
    dx = {
      50: "#ede7f6",
      100: "#d1c4e9",
      200: "#b39ddb",
      300: "#9575cd",
      400: "#7e57c2",
      500: "#673ab7",
      600: "#5e35b1",
      700: "#512da8",
      800: "#4527a0",
      900: "#311b92",
      a100: "#b388ff",
      a200: "#7c4dff",
      a400: "#651fff",
      a700: "#6200ea"
    },
    px = {
      50: "#e8eaf6",
      100: "#c5cae9",
      200: "#9fa8da",
      300: "#7986cb",
      400: "#5c6bc0",
      500: "#3f51b5",
      600: "#3949ab",
      700: "#303f9f",
      800: "#283593",
      900: "#1a237e",
      a100: "#8c9eff",
      a200: "#536dfe",
      a400: "#3d5afe",
      a700: "#304ffe"
    },
    fx = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      a100: "#82b1ff",
      a200: "#448aff",
      a400: "#2979ff",
      a700: "#2962ff"
    },
    hx = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      a100: "#80d8ff",
      a200: "#40c4ff",
      a400: "#00b0ff",
      a700: "#0091ea"
    },
    gx = {
      50: "#e0f7fa",
      100: "#b2ebf2",
      200: "#80deea",
      300: "#4dd0e1",
      400: "#26c6da",
      500: "#00bcd4",
      600: "#00acc1",
      700: "#0097a7",
      800: "#00838f",
      900: "#006064",
      a100: "#84ffff",
      a200: "#18ffff",
      a400: "#00e5ff",
      a700: "#00b8d4"
    },
    mx = {
      50: "#e0f2f1",
      100: "#b2dfdb",
      200: "#80cbc4",
      300: "#4db6ac",
      400: "#26a69a",
      500: "#009688",
      600: "#00897b",
      700: "#00796b",
      800: "#00695c",
      900: "#004d40",
      a100: "#a7ffeb",
      a200: "#64ffda",
      a400: "#1de9b6",
      a700: "#00bfa5"
    },
    vx = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      a100: "#b9f6ca",
      a200: "#69f0ae",
      a400: "#00e676",
      a700: "#00c853"
    },
    yx = {
      50: "#f1f8e9",
      100: "#dcedc8",
      200: "#c5e1a5",
      300: "#aed581",
      400: "#9ccc65",
      500: "#8bc34a",
      600: "#7cb342",
      700: "#689f38",
      800: "#558b2f",
      900: "#33691e",
      a100: "#ccff90",
      a200: "#b2ff59",
      a400: "#76ff03",
      a700: "#64dd17"
    },
    bx = {
      50: "#f9fbe7",
      100: "#f0f4c3",
      200: "#e6ee9c",
      300: "#dce775",
      400: "#d4e157",
      500: "#cddc39",
      600: "#c0ca33",
      700: "#afb42b",
      800: "#9e9d24",
      900: "#827717",
      a100: "#f4ff81",
      a200: "#eeff41",
      a400: "#c6ff00",
      a700: "#aeea00"
    },
    xx = {
      50: "#fffde7",
      100: "#fff9c4",
      200: "#fff59d",
      300: "#fff176",
      400: "#ffee58",
      500: "#ffeb3b",
      600: "#fdd835",
      700: "#fbc02d",
      800: "#f9a825",
      900: "#f57f17",
      a100: "#ffff8d",
      a200: "#ffff00",
      a400: "#ffea00",
      a700: "#ffd600"
    },
    wx = {
      50: "#fff8e1",
      100: "#ffecb3",
      200: "#ffe082",
      300: "#ffd54f",
      400: "#ffca28",
      500: "#ffc107",
      600: "#ffb300",
      700: "#ffa000",
      800: "#ff8f00",
      900: "#ff6f00",
      a100: "#ffe57f",
      a200: "#ffd740",
      a400: "#ffc400",
      a700: "#ffab00"
    },
    Ex = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      a100: "#ffd180",
      a200: "#ffab40",
      a400: "#ff9100",
      a700: "#ff6d00"
    },
    _x = {
      50: "#fbe9e7",
      100: "#ffccbc",
      200: "#ffab91",
      300: "#ff8a65",
      400: "#ff7043",
      500: "#ff5722",
      600: "#f4511e",
      700: "#e64a19",
      800: "#d84315",
      900: "#bf360c",
      a100: "#ff9e80",
      a200: "#ff6e40",
      a400: "#ff3d00",
      a700: "#dd2c00"
    },
    Sx = {
      50: "#efebe9",
      100: "#d7ccc8",
      200: "#bcaaa4",
      300: "#a1887f",
      400: "#8d6e63",
      500: "#795548",
      600: "#6d4c41",
      700: "#5d4037",
      800: "#4e342e",
      900: "#3e2723"
    },
    Ox = {
      50: "#eceff1",
      100: "#cfd8dc",
      200: "#b0bec5",
      300: "#90a4ae",
      400: "#78909c",
      500: "#607d8b",
      600: "#546e7a",
      700: "#455a64",
      800: "#37474f",
      900: "#263238"
    },
    kx =
      ((s = a("7b0kr")),
      function (e) {
        var t = e.color,
          r = e.onClick,
          o = e.onSwatchHover,
          i = e.hover,
          a = e.active,
          l = e.circleSize,
          u = e.circleSpacing,
          c = n(Ls)(
            {
              default: {
                swatch: { width: l, height: l, marginRight: u, marginBottom: u, transform: "scale(1)", transition: "100ms transform ease" },
                Swatch: {
                  borderRadius: "50%",
                  background: "transparent",
                  boxShadow: "inset 0 0 0 " + (l / 2 + 1) + "px " + t,
                  transition: "100ms box-shadow ease"
                }
              },
              hover: { swatch: { transform: "scale(1.2)" } },
              active: { Swatch: { boxShadow: "inset 0 0 0 3px " + t } }
            },
            { hover: i, active: a }
          );
        return n(s).createElement(
          "div",
          { style: c.swatch },
          n(s).createElement(sy, {
            style: c.Swatch,
            color: t,
            onClick: r,
            onHover: o,
            focusStyle: { boxShadow: c.Swatch.boxShadow + ", 0 0 5px " + t }
          })
        );
      });
  kx.defaultProps = { circleSize: 28, circleSpacing: 14 };
  var Cx = (0, Ls.handleHover)(kx),
    Tx = function (e) {
      var t = e.width,
        r = e.onChange,
        o = e.onSwatchHover,
        i = e.colors,
        a = e.hex,
        l = e.circleSize,
        u = e.styles,
        c = void 0 === u ? {} : u,
        d = e.circleSpacing,
        p = e.className,
        f = void 0 === p ? "" : p,
        h = n(Ls)(gv({ default: { card: { width: t, display: "flex", flexWrap: "wrap", marginRight: -d, marginBottom: -d } } }, c)),
        g = function (e, t) {
          return r({ hex: e, source: "hex" }, t);
        };
      return n(s).createElement(
        "div",
        { style: h.card, className: "circle-picker " + f },
        ix(i, function (e) {
          return n(s).createElement(Cx, {
            key: e,
            color: e,
            onClick: g,
            onSwatchHover: o,
            active: a === e.toLowerCase(),
            circleSize: l,
            circleSpacing: d
          });
        })
      );
    };
  (Tx.propTypes = {
    width: n(d).oneOfType([n(d).string, n(d).number]),
    circleSize: n(d).number,
    circleSpacing: n(d).number,
    styles: n(d).object
  }),
    (Tx.defaultProps = {
      width: 252,
      circleSize: 28,
      circleSpacing: 14,
      colors: [
        lx[500],
        ux[500],
        cx[500],
        dx[500],
        px[500],
        fx[500],
        hx[500],
        gx[500],
        mx[500],
        vx[500],
        yx[500],
        bx[500],
        xx[500],
        wx[500],
        Ex[500],
        _x[500],
        Sx[500],
        Ox[500]
      ],
      styles: {}
    });
  ry(Tx), (s = a("7b0kr")), (d = a("3pr9z")), (s = a("7b0kr"));
  var Rx = function (e) {
      return void 0 === e;
    },
    Px = {};
  Object.defineProperty(Px, "__esModule", { value: !0 });
  var jx =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    Mx = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })((s = a("7b0kr")));
  Px.default = function (e) {
    var t = e.fill,
      r = void 0 === t ? "currentColor" : t,
      n = e.width,
      o = void 0 === n ? 24 : n,
      i = e.height,
      a = void 0 === i ? 24 : i,
      s = e.style,
      l = void 0 === s ? {} : s,
      u = (function (e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
        return r;
      })(e, ["fill", "width", "height", "style"]);
    return Mx.default.createElement(
      "svg",
      jx({ viewBox: "0 0 24 24", style: jx({ fill: r, width: o, height: a }, l) }, u),
      Mx.default.createElement("path", {
        d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
      })
    );
  };
  var Dx = (function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  })();
  var Lx = (function (e) {
    function t(e) {
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, t);
      var r = (function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return (
        (r.toggleViews = function () {
          "hex" === r.state.view
            ? r.setState({ view: "rgb" })
            : "rgb" === r.state.view
            ? r.setState({ view: "hsl" })
            : "hsl" === r.state.view && (1 === r.props.hsl.a ? r.setState({ view: "hex" }) : r.setState({ view: "rgb" }));
        }),
        (r.handleChange = function (e, t) {
          e.hex
            ? Zv(e.hex) && r.props.onChange({ hex: e.hex, source: "hex" }, t)
            : e.r || e.g || e.b
            ? r.props.onChange({ r: e.r || r.props.rgb.r, g: e.g || r.props.rgb.g, b: e.b || r.props.rgb.b, source: "rgb" }, t)
            : e.a
            ? (e.a < 0 ? (e.a = 0) : e.a > 1 && (e.a = 1),
              r.props.onChange({ h: r.props.hsl.h, s: r.props.hsl.s, l: r.props.hsl.l, a: Math.round(100 * e.a) / 100, source: "rgb" }, t))
            : (e.h || e.s || e.l) &&
              ("string" == typeof e.s && e.s.includes("%") && (e.s = e.s.replace("%", "")),
              "string" == typeof e.l && e.l.includes("%") && (e.l = e.l.replace("%", "")),
              1 == e.s ? (e.s = 0.01) : 1 == e.l && (e.l = 0.01),
              r.props.onChange(
                {
                  h: e.h || r.props.hsl.h,
                  s: Number(Rx(e.s) ? r.props.hsl.s : e.s),
                  l: Number(Rx(e.l) ? r.props.hsl.l : e.l),
                  source: "hsl"
                },
                t
              ));
        }),
        (r.showHighlight = function (e) {
          e.currentTarget.style.background = "#eee";
        }),
        (r.hideHighlight = function (e) {
          e.currentTarget.style.background = "transparent";
        }),
        1 !== e.hsl.a && "hex" === e.view ? (r.state = { view: "rgb" }) : (r.state = { view: e.view }),
        r
      );
    }
    return (
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      })(t, e),
      Dx(
        t,
        [
          {
            key: "render",
            value: function () {
              var e = this,
                t = n(Ls)(
                  {
                    default: {
                      wrap: { paddingTop: "16px", display: "flex" },
                      fields: { flex: "1", display: "flex", marginLeft: "-6px" },
                      field: { paddingLeft: "6px", width: "100%" },
                      alpha: { paddingLeft: "6px", width: "100%" },
                      toggle: { width: "32px", textAlign: "right", position: "relative" },
                      icon: { marginRight: "-4px", marginTop: "12px", cursor: "pointer", position: "relative" },
                      iconHighlight: {
                        position: "absolute",
                        width: "24px",
                        height: "28px",
                        background: "#eee",
                        borderRadius: "4px",
                        top: "10px",
                        left: "12px",
                        display: "none"
                      },
                      input: {
                        fontSize: "11px",
                        color: "#333",
                        width: "100%",
                        borderRadius: "2px",
                        border: "none",
                        boxShadow: "inset 0 0 0 1px #dadada",
                        height: "21px",
                        textAlign: "center"
                      },
                      label: {
                        textTransform: "uppercase",
                        fontSize: "11px",
                        lineHeight: "11px",
                        color: "#969696",
                        textAlign: "center",
                        display: "block",
                        marginTop: "12px"
                      },
                      svg: { fill: "#333", width: "24px", height: "24px", border: "1px transparent solid", borderRadius: "5px" }
                    },
                    disableAlpha: { alpha: { display: "none" } }
                  },
                  this.props,
                  this.state
                ),
                r = void 0;
              return (
                "hex" === this.state.view
                  ? (r = n(s).createElement(
                      "div",
                      { style: t.fields, className: "flexbox-fix" },
                      n(s).createElement(
                        "div",
                        { style: t.field },
                        n(s).createElement(_h, {
                          style: { input: t.input, label: t.label },
                          label: "hex",
                          value: this.props.hex,
                          onChange: this.handleChange
                        })
                      )
                    ))
                  : "rgb" === this.state.view
                  ? (r = n(s).createElement(
                      "div",
                      { style: t.fields, className: "flexbox-fix" },
                      n(s).createElement(
                        "div",
                        { style: t.field },
                        n(s).createElement(_h, {
                          style: { input: t.input, label: t.label },
                          label: "r",
                          value: this.props.rgb.r,
                          onChange: this.handleChange
                        })
                      ),
                      n(s).createElement(
                        "div",
                        { style: t.field },
                        n(s).createElement(_h, {
                          style: { input: t.input, label: t.label },
                          label: "g",
                          value: this.props.rgb.g,
                          onChange: this.handleChange
                        })
                      ),
                      n(s).createElement(
                        "div",
                        { style: t.field },
                        n(s).createElement(_h, {
                          style: { input: t.input, label: t.label },
                          label: "b",
                          value: this.props.rgb.b,
                          onChange: this.handleChange
                        })
                      ),
                      n(s).createElement(
                        "div",
                        { style: t.alpha },
                        n(s).createElement(_h, {
                          style: { input: t.input, label: t.label },
                          label: "a",
                          value: this.props.rgb.a,
                          arrowOffset: 0.01,
                          onChange: this.handleChange
                        })
                      )
                    ))
                  : "hsl" === this.state.view &&
                    (r = n(s).createElement(
                      "div",
                      { style: t.fields, className: "flexbox-fix" },
                      n(s).createElement(
                        "div",
                        { style: t.field },
                        n(s).createElement(_h, {
                          style: { input: t.input, label: t.label },
                          label: "h",
                          value: Math.round(this.props.hsl.h),
                          onChange: this.handleChange
                        })
                      ),
                      n(s).createElement(
                        "div",
                        { style: t.field },
                        n(s).createElement(_h, {
                          style: { input: t.input, label: t.label },
                          label: "s",
                          value: Math.round(100 * this.props.hsl.s) + "%",
                          onChange: this.handleChange
                        })
                      ),
                      n(s).createElement(
                        "div",
                        { style: t.field },
                        n(s).createElement(_h, {
                          style: { input: t.input, label: t.label },
                          label: "l",
                          value: Math.round(100 * this.props.hsl.l) + "%",
                          onChange: this.handleChange
                        })
                      ),
                      n(s).createElement(
                        "div",
                        { style: t.alpha },
                        n(s).createElement(_h, {
                          style: { input: t.input, label: t.label },
                          label: "a",
                          value: this.props.hsl.a,
                          arrowOffset: 0.01,
                          onChange: this.handleChange
                        })
                      )
                    )),
                n(s).createElement(
                  "div",
                  { style: t.wrap, className: "flexbox-fix" },
                  r,
                  n(s).createElement(
                    "div",
                    { style: t.toggle },
                    n(s).createElement(
                      "div",
                      {
                        style: t.icon,
                        onClick: this.toggleViews,
                        ref: function (t) {
                          return (e.icon = t);
                        }
                      },
                      n(s).createElement(n(Px), {
                        style: t.svg,
                        onMouseOver: this.showHighlight,
                        onMouseEnter: this.showHighlight,
                        onMouseOut: this.hideHighlight
                      })
                    )
                  )
                )
              );
            }
          }
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (e, t) {
              return 1 !== e.hsl.a && "hex" === t.view ? { view: "rgb" } : null;
            }
          }
        ]
      ),
      t
    );
  })(n(s).Component);
  Lx.defaultProps = { view: "hex" };
  var Ax = Lx,
    Nx =
      ((s = a("7b0kr")),
      function () {
        var e = n(Ls)({
          default: {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              transform: "translate(-6px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
            }
          }
        });
        return n(s).createElement("div", { style: e.picker });
      }),
    Ix =
      ((s = a("7b0kr")),
      function () {
        var e = n(Ls)({
          default: {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 0 1px #fff",
              transform: "translate(-6px, -6px)"
            }
          }
        });
        return n(s).createElement("div", { style: e.picker });
      }),
    Hx = function (e) {
      var t = e.width,
        r = e.onChange,
        o = e.disableAlpha,
        i = e.rgb,
        a = e.hsl,
        l = e.hsv,
        u = e.hex,
        c = e.renderers,
        d = e.styles,
        p = void 0 === d ? {} : d,
        f = e.className,
        h = void 0 === f ? "" : f,
        g = e.defaultView,
        m = n(Ls)(
          gv(
            {
              default: {
                picker: {
                  width: t,
                  background: "#fff",
                  borderRadius: "2px",
                  boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                  boxSizing: "initial",
                  fontFamily: "Menlo"
                },
                saturation: { width: "100%", paddingBottom: "55%", position: "relative", borderRadius: "2px 2px 0 0", overflow: "hidden" },
                Saturation: { radius: "2px 2px 0 0" },
                body: { padding: "16px 16px 12px" },
                controls: { display: "flex" },
                color: { width: "32px" },
                swatch: { marginTop: "6px", width: "16px", height: "16px", borderRadius: "8px", position: "relative", overflow: "hidden" },
                active: {
                  absolute: "0px 0px 0px 0px",
                  borderRadius: "8px",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                  background: "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + i.a + ")",
                  zIndex: "2"
                },
                toggles: { flex: "1" },
                hue: { height: "10px", position: "relative", marginBottom: "8px" },
                Hue: { radius: "2px" },
                alpha: { height: "10px", position: "relative" },
                Alpha: { radius: "2px" }
              },
              disableAlpha: {
                color: { width: "22px" },
                alpha: { display: "none" },
                hue: { marginBottom: "0px" },
                swatch: { width: "10px", height: "10px", marginTop: "0px" }
              }
            },
            p
          ),
          { disableAlpha: o }
        );
      return n(s).createElement(
        "div",
        { style: m.picker, className: "chrome-picker " + h },
        n(s).createElement(
          "div",
          { style: m.saturation },
          n(s).createElement(Fv, { style: m.Saturation, hsl: a, hsv: l, pointer: Ix, onChange: r })
        ),
        n(s).createElement(
          "div",
          { style: m.body },
          n(s).createElement(
            "div",
            { style: m.controls, className: "flexbox-fix" },
            n(s).createElement(
              "div",
              { style: m.color },
              n(s).createElement(
                "div",
                { style: m.swatch },
                n(s).createElement("div", { style: m.active }),
                n(s).createElement(fh, { renderers: c })
              )
            ),
            n(s).createElement(
              "div",
              { style: m.toggles },
              n(s).createElement("div", { style: m.hue }, n(s).createElement(Ch, { style: m.Hue, hsl: a, pointer: Nx, onChange: r })),
              n(s).createElement(
                "div",
                { style: m.alpha },
                n(s).createElement(yh, { style: m.Alpha, rgb: i, hsl: a, pointer: Nx, renderers: c, onChange: r })
              )
            )
          ),
          n(s).createElement(Ax, { rgb: i, hsl: a, hex: u, view: g, onChange: r, disableAlpha: o })
        )
      );
    };
  (Hx.propTypes = {
    width: n(d).oneOfType([n(d).string, n(d).number]),
    disableAlpha: n(d).bool,
    styles: n(d).object,
    defaultView: n(d).oneOf(["hex", "rgb", "hsl"])
  }),
    (Hx.defaultProps = { width: 225, disableAlpha: !1, styles: {} });
  ry(Hx), (s = a("7b0kr")), (d = a("3pr9z")), (s = a("7b0kr"));
  var Fx = function (e) {
      var t = e.color,
        r = e.onClick,
        o = void 0 === r ? function () {} : r,
        i = e.onSwatchHover,
        a = e.active,
        l = n(Ls)(
          {
            default: {
              color: {
                background: t,
                width: "15px",
                height: "15px",
                float: "left",
                marginRight: "5px",
                marginBottom: "5px",
                position: "relative",
                cursor: "pointer"
              },
              dot: { absolute: "5px 5px 5px 5px", background: Jv(t), borderRadius: "50%", opacity: "0" }
            },
            active: { dot: { opacity: "1" } },
            "color-#FFFFFF": { color: { boxShadow: "inset 0 0 0 1px #ddd" }, dot: { background: "#000" } },
            transparent: { dot: { background: "#000" } }
          },
          { active: a, "color-#FFFFFF": "#FFFFFF" === t, transparent: "transparent" === t }
        );
      return n(s).createElement(
        sy,
        { style: l.color, color: t, onClick: o, onHover: i, focusStyle: { boxShadow: "0 0 4px " + t } },
        n(s).createElement("div", { style: l.dot })
      );
    },
    Ux =
      ((s = a("7b0kr")),
      function (e) {
        var t = e.hex,
          r = e.rgb,
          o = e.onChange,
          i = n(Ls)({
            default: {
              fields: { display: "flex", paddingBottom: "6px", paddingRight: "5px", position: "relative" },
              active: { position: "absolute", top: "6px", left: "5px", height: "9px", width: "9px", background: t },
              HEXwrap: { flex: "6", position: "relative" },
              HEXinput: {
                width: "80%",
                padding: "0px",
                paddingLeft: "20%",
                border: "none",
                outline: "none",
                background: "none",
                fontSize: "12px",
                color: "#333",
                height: "16px"
              },
              HEXlabel: { display: "none" },
              RGBwrap: { flex: "3", position: "relative" },
              RGBinput: {
                width: "70%",
                padding: "0px",
                paddingLeft: "30%",
                border: "none",
                outline: "none",
                background: "none",
                fontSize: "12px",
                color: "#333",
                height: "16px"
              },
              RGBlabel: {
                position: "absolute",
                top: "3px",
                left: "0px",
                lineHeight: "16px",
                textTransform: "uppercase",
                fontSize: "12px",
                color: "#999"
              }
            }
          }),
          a = function (e, t) {
            e.r || e.g || e.b ? o({ r: e.r || r.r, g: e.g || r.g, b: e.b || r.b, source: "rgb" }, t) : o({ hex: e.hex, source: "hex" }, t);
          };
        return n(s).createElement(
          "div",
          { style: i.fields, className: "flexbox-fix" },
          n(s).createElement("div", { style: i.active }),
          n(s).createElement(_h, { style: { wrap: i.HEXwrap, input: i.HEXinput, label: i.HEXlabel }, label: "hex", value: t, onChange: a }),
          n(s).createElement(_h, { style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel }, label: "r", value: r.r, onChange: a }),
          n(s).createElement(_h, { style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel }, label: "g", value: r.g, onChange: a }),
          n(s).createElement(_h, { style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel }, label: "b", value: r.b, onChange: a })
        );
      }),
    Bx = function (e) {
      var t = e.onChange,
        r = e.onSwatchHover,
        o = e.colors,
        i = e.hex,
        a = e.rgb,
        l = e.styles,
        u = void 0 === l ? {} : l,
        c = e.className,
        d = void 0 === c ? "" : c,
        p = n(Ls)(
          gv(
            {
              default: {
                Compact: { background: "#f6f6f6", radius: "4px" },
                compact: { paddingTop: "5px", paddingLeft: "5px", boxSizing: "initial", width: "240px" },
                clear: { clear: "both" }
              }
            },
            u
          )
        ),
        f = function (e, r) {
          e.hex ? Zv(e.hex) && t({ hex: e.hex, source: "hex" }, r) : t(e, r);
        };
      return n(s).createElement(
        vv,
        { style: p.Compact, styles: u },
        n(s).createElement(
          "div",
          { style: p.compact, className: "compact-picker " + d },
          n(s).createElement(
            "div",
            null,
            ix(o, function (e) {
              return n(s).createElement(Fx, { key: e, color: e, active: e.toLowerCase() === i, onClick: f, onSwatchHover: r });
            }),
            n(s).createElement("div", { style: p.clear })
          ),
          n(s).createElement(Ux, { hex: i, rgb: a, onChange: f })
        )
      );
    };
  (Bx.propTypes = { colors: n(d).arrayOf(n(d).string), styles: n(d).object }),
    (Bx.defaultProps = {
      colors: [
        "#4D4D4D",
        "#999999",
        "#FFFFFF",
        "#F44E3B",
        "#FE9200",
        "#FCDC00",
        "#DBDF00",
        "#A4DD00",
        "#68CCCA",
        "#73D8FF",
        "#AEA1FF",
        "#FDA1FF",
        "#333333",
        "#808080",
        "#cccccc",
        "#D33115",
        "#E27300",
        "#FCC400",
        "#B0BC00",
        "#68BC00",
        "#16A5A5",
        "#009CE0",
        "#7B64FF",
        "#FA28FF",
        "#000000",
        "#666666",
        "#B3B3B3",
        "#9F0500",
        "#C45100",
        "#FB9E00",
        "#808900",
        "#194D33",
        "#0C797D",
        "#0062B1",
        "#653294",
        "#AB149E"
      ],
      styles: {}
    });
  ry(Bx), (s = a("7b0kr")), (d = a("3pr9z")), (s = a("7b0kr"));
  var zx = (0, Ls.handleHover)(function (e) {
      var t = e.hover,
        r = e.color,
        o = e.onClick,
        i = e.onSwatchHover,
        a = { position: "relative", zIndex: "2", outline: "2px solid #fff", boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)" },
        l = n(Ls)({ default: { swatch: { width: "25px", height: "25px", fontSize: "0" } }, hover: { swatch: a } }, { hover: t });
      return n(s).createElement("div", { style: l.swatch }, n(s).createElement(sy, { color: r, onClick: o, onHover: i, focusStyle: a }));
    }),
    Wx = function (e) {
      var t = e.width,
        r = e.colors,
        o = e.onChange,
        i = e.onSwatchHover,
        a = e.triangle,
        l = e.styles,
        u = void 0 === l ? {} : l,
        c = e.className,
        d = void 0 === c ? "" : c,
        p = n(Ls)(
          gv(
            {
              default: {
                card: {
                  width: t,
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.2)",
                  boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                  borderRadius: "4px",
                  position: "relative",
                  padding: "5px",
                  display: "flex",
                  flexWrap: "wrap"
                },
                triangle: { position: "absolute", border: "7px solid transparent", borderBottomColor: "#fff" },
                triangleShadow: { position: "absolute", border: "8px solid transparent", borderBottomColor: "rgba(0,0,0,0.15)" }
              },
              "hide-triangle": { triangle: { display: "none" }, triangleShadow: { display: "none" } },
              "top-left-triangle": { triangle: { top: "-14px", left: "10px" }, triangleShadow: { top: "-16px", left: "9px" } },
              "top-right-triangle": { triangle: { top: "-14px", right: "10px" }, triangleShadow: { top: "-16px", right: "9px" } },
              "bottom-left-triangle": {
                triangle: { top: "35px", left: "10px", transform: "rotate(180deg)" },
                triangleShadow: { top: "37px", left: "9px", transform: "rotate(180deg)" }
              },
              "bottom-right-triangle": {
                triangle: { top: "35px", right: "10px", transform: "rotate(180deg)" },
                triangleShadow: { top: "37px", right: "9px", transform: "rotate(180deg)" }
              }
            },
            u
          ),
          {
            "hide-triangle": "hide" === a,
            "top-left-triangle": "top-left" === a,
            "top-right-triangle": "top-right" === a,
            "bottom-left-triangle": "bottom-left" === a,
            "bottom-right-triangle": "bottom-right" === a
          }
        ),
        f = function (e, t) {
          return o({ hex: e, source: "hex" }, t);
        };
      return n(s).createElement(
        "div",
        { style: p.card, className: "github-picker " + d },
        n(s).createElement("div", { style: p.triangleShadow }),
        n(s).createElement("div", { style: p.triangle }),
        ix(r, function (e) {
          return n(s).createElement(zx, { color: e, key: e, onClick: f, onSwatchHover: i });
        })
      );
    };
  (Wx.propTypes = {
    width: n(d).oneOfType([n(d).string, n(d).number]),
    colors: n(d).arrayOf(n(d).string),
    triangle: n(d).oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
    styles: n(d).object
  }),
    (Wx.defaultProps = {
      width: 200,
      colors: [
        "#B80000",
        "#DB3E00",
        "#FCCB00",
        "#008B02",
        "#006B76",
        "#1273DE",
        "#004DCF",
        "#5300EB",
        "#EB9694",
        "#FAD0C3",
        "#FEF3BD",
        "#C1E1C5",
        "#BEDADC",
        "#C4DEF6",
        "#BED3F3",
        "#D4C4FB"
      ],
      triangle: "top-left",
      styles: {}
    });
  ry(Wx), (s = a("7b0kr")), (d = a("3pr9z")), (s = a("7b0kr"));
  var qx = function (e) {
      var t = e.direction,
        r = n(Ls)(
          {
            default: {
              picker: {
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                transform: "translate(-9px, -1px)",
                backgroundColor: "rgb(248, 248, 248)",
                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
              }
            },
            vertical: { picker: { transform: "translate(-3px, -9px)" } }
          },
          { vertical: "vertical" === t }
        );
      return n(s).createElement("div", { style: r.picker });
    },
    Vx =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    Yx = function (e) {
      var t = e.width,
        r = e.height,
        o = e.onChange,
        i = e.hsl,
        a = e.direction,
        l = e.pointer,
        u = e.styles,
        c = void 0 === u ? {} : u,
        d = e.className,
        p = void 0 === d ? "" : d,
        f = n(Ls)(gv({ default: { picker: { position: "relative", width: t, height: r }, hue: { radius: "2px" } } }, c));
      return n(s).createElement(
        "div",
        { style: f.picker, className: "hue-picker " + p },
        n(s).createElement(
          Ch,
          Vx({}, f.hue, {
            hsl: i,
            pointer: l,
            onChange: function (e) {
              return o({ a: 1, h: e.h, l: 0.5, s: 1 });
            },
            direction: a
          })
        )
      );
    };
  (Yx.propTypes = { styles: n(d).object }),
    (Yx.defaultProps = { width: "316px", height: "16px", direction: "horizontal", pointer: qx, styles: {} });
  ry(Yx),
    (s = a("7b0kr")),
    ry(function (e) {
      var t = e.onChange,
        r = e.hex,
        o = e.rgb,
        i = e.styles,
        a = void 0 === i ? {} : i,
        l = e.className,
        u = void 0 === l ? "" : l,
        c = n(Ls)(
          gv(
            {
              default: {
                material: { width: "98px", height: "98px", padding: "16px", fontFamily: "Roboto" },
                HEXwrap: { position: "relative" },
                HEXinput: {
                  width: "100%",
                  marginTop: "12px",
                  fontSize: "15px",
                  color: "#333",
                  padding: "0px",
                  border: "0px",
                  borderBottom: "2px solid " + r,
                  outline: "none",
                  height: "30px"
                },
                HEXlabel: {
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  fontSize: "11px",
                  color: "#999999",
                  textTransform: "capitalize"
                },
                Hex: { style: {} },
                RGBwrap: { position: "relative" },
                RGBinput: {
                  width: "100%",
                  marginTop: "12px",
                  fontSize: "15px",
                  color: "#333",
                  padding: "0px",
                  border: "0px",
                  borderBottom: "1px solid #eee",
                  outline: "none",
                  height: "30px"
                },
                RGBlabel: {
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  fontSize: "11px",
                  color: "#999999",
                  textTransform: "capitalize"
                },
                split: { display: "flex", marginRight: "-10px", paddingTop: "11px" },
                third: { flex: "1", paddingRight: "10px" }
              }
            },
            a
          )
        ),
        d = function (e, r) {
          e.hex
            ? Zv(e.hex) && t({ hex: e.hex, source: "hex" }, r)
            : (e.r || e.g || e.b) && t({ r: e.r || o.r, g: e.g || o.g, b: e.b || o.b, source: "rgb" }, r);
        };
      return n(s).createElement(
        vv,
        { styles: a },
        n(s).createElement(
          "div",
          { style: c.material, className: "material-picker " + u },
          n(s).createElement(_h, { style: { wrap: c.HEXwrap, input: c.HEXinput, label: c.HEXlabel }, label: "hex", value: r, onChange: d }),
          n(s).createElement(
            "div",
            { style: c.split, className: "flexbox-fix" },
            n(s).createElement(
              "div",
              { style: c.third },
              n(s).createElement(_h, {
                style: { wrap: c.RGBwrap, input: c.RGBinput, label: c.RGBlabel },
                label: "r",
                value: o.r,
                onChange: d
              })
            ),
            n(s).createElement(
              "div",
              { style: c.third },
              n(s).createElement(_h, {
                style: { wrap: c.RGBwrap, input: c.RGBinput, label: c.RGBlabel },
                label: "g",
                value: o.g,
                onChange: d
              })
            ),
            n(s).createElement(
              "div",
              { style: c.third },
              n(s).createElement(_h, {
                style: { wrap: c.RGBwrap, input: c.RGBinput, label: c.RGBlabel },
                label: "b",
                value: o.b,
                onChange: d
              })
            )
          )
        )
      );
    }),
    (s = a("7b0kr")),
    (d = a("3pr9z")),
    (s = a("7b0kr"));
  var $x = function (e) {
      var t = e.onChange,
        r = e.rgb,
        o = e.hsv,
        i = e.hex,
        a = n(Ls)({
          default: {
            fields: { paddingTop: "5px", paddingBottom: "9px", width: "80px", position: "relative" },
            divider: { height: "5px" },
            RGBwrap: { position: "relative" },
            RGBinput: {
              marginLeft: "40%",
              width: "40%",
              height: "18px",
              border: "1px solid #888888",
              boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
              marginBottom: "5px",
              fontSize: "13px",
              paddingLeft: "3px",
              marginRight: "10px"
            },
            RGBlabel: {
              left: "0px",
              top: "0px",
              width: "34px",
              textTransform: "uppercase",
              fontSize: "13px",
              height: "18px",
              lineHeight: "22px",
              position: "absolute"
            },
            HEXwrap: { position: "relative" },
            HEXinput: {
              marginLeft: "20%",
              width: "80%",
              height: "18px",
              border: "1px solid #888888",
              boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
              marginBottom: "6px",
              fontSize: "13px",
              paddingLeft: "3px"
            },
            HEXlabel: {
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "14px",
              textTransform: "uppercase",
              fontSize: "13px",
              height: "18px",
              lineHeight: "22px"
            },
            fieldSymbols: { position: "absolute", top: "5px", right: "-7px", fontSize: "13px" },
            symbol: { height: "20px", lineHeight: "22px", paddingBottom: "7px" }
          }
        }),
        l = function (e, n) {
          e["#"]
            ? Zv(e["#"]) && t({ hex: e["#"], source: "hex" }, n)
            : e.r || e.g || e.b
            ? t({ r: e.r || r.r, g: e.g || r.g, b: e.b || r.b, source: "rgb" }, n)
            : (e.h || e.s || e.v) && t({ h: e.h || o.h, s: e.s || o.s, v: e.v || o.v, source: "hsv" }, n);
        };
      return n(s).createElement(
        "div",
        { style: a.fields },
        n(s).createElement(_h, {
          style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
          label: "h",
          value: Math.round(o.h),
          onChange: l
        }),
        n(s).createElement(_h, {
          style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
          label: "s",
          value: Math.round(100 * o.s),
          onChange: l
        }),
        n(s).createElement(_h, {
          style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
          label: "v",
          value: Math.round(100 * o.v),
          onChange: l
        }),
        n(s).createElement("div", { style: a.divider }),
        n(s).createElement(_h, { style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel }, label: "r", value: r.r, onChange: l }),
        n(s).createElement(_h, { style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel }, label: "g", value: r.g, onChange: l }),
        n(s).createElement(_h, { style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel }, label: "b", value: r.b, onChange: l }),
        n(s).createElement("div", { style: a.divider }),
        n(s).createElement(_h, {
          style: { wrap: a.HEXwrap, input: a.HEXinput, label: a.HEXlabel },
          label: "#",
          value: i.replace("#", ""),
          onChange: l
        }),
        n(s).createElement(
          "div",
          { style: a.fieldSymbols },
          n(s).createElement("div", { style: a.symbol }, "°"),
          n(s).createElement("div", { style: a.symbol }, "%"),
          n(s).createElement("div", { style: a.symbol }, "%")
        )
      );
    },
    Gx =
      ((s = a("7b0kr")),
      function (e) {
        var t = e.hsl,
          r = n(Ls)(
            {
              default: {
                picker: {
                  width: "12px",
                  height: "12px",
                  borderRadius: "6px",
                  boxShadow: "inset 0 0 0 1px #fff",
                  transform: "translate(-6px, -6px)"
                }
              },
              "black-outline": { picker: { boxShadow: "inset 0 0 0 1px #000" } }
            },
            { "black-outline": t.l > 0.5 }
          );
        return n(s).createElement("div", { style: r.picker });
      }),
    Kx =
      ((s = a("7b0kr")),
      function () {
        var e = n(Ls)({
          default: {
            triangle: {
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "4px 0 4px 6px",
              borderColor: "transparent transparent transparent #fff",
              position: "absolute",
              top: "1px",
              left: "1px"
            },
            triangleBorder: {
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "5px 0 5px 8px",
              borderColor: "transparent transparent transparent #555"
            },
            left: { Extend: "triangleBorder", transform: "translate(-13px, -4px)" },
            leftInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
            right: { Extend: "triangleBorder", transform: "translate(20px, -14px) rotate(180deg)" },
            rightInside: { Extend: "triangle", transform: "translate(-8px, -5px)" }
          }
        });
        return n(s).createElement(
          "div",
          { style: e.pointer },
          n(s).createElement("div", { style: e.left }, n(s).createElement("div", { style: e.leftInside })),
          n(s).createElement("div", { style: e.right }, n(s).createElement("div", { style: e.rightInside }))
        );
      }),
    Xx =
      ((s = a("7b0kr")),
      function (e) {
        var t = e.onClick,
          r = e.label,
          o = e.children,
          i = e.active,
          a = n(Ls)(
            {
              default: {
                button: {
                  backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                  border: "1px solid #878787",
                  borderRadius: "2px",
                  height: "20px",
                  boxShadow: "0 1px 0 0 #EAEAEA",
                  fontSize: "14px",
                  color: "#000",
                  lineHeight: "20px",
                  textAlign: "center",
                  marginBottom: "10px",
                  cursor: "pointer"
                }
              },
              active: { button: { boxShadow: "0 0 0 1px #878787" } }
            },
            { active: i }
          );
        return n(s).createElement("div", { style: a.button, onClick: t }, r || o);
      }),
    Zx =
      ((s = a("7b0kr")),
      function (e) {
        var t = e.rgb,
          r = e.currentColor,
          o = n(Ls)({
            default: {
              swatches: { border: "1px solid #B3B3B3", borderBottom: "1px solid #F0F0F0", marginBottom: "2px", marginTop: "1px" },
              new: {
                height: "34px",
                background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
                boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
              },
              current: { height: "34px", background: r, boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000" },
              label: { fontSize: "14px", color: "#000", textAlign: "center" }
            }
          });
        return n(s).createElement(
          "div",
          null,
          n(s).createElement("div", { style: o.label }, "new"),
          n(s).createElement(
            "div",
            { style: o.swatches },
            n(s).createElement("div", { style: o.new }),
            n(s).createElement("div", { style: o.current })
          ),
          n(s).createElement("div", { style: o.label }, "current")
        );
      }),
    Jx = (function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    })();
  var Qx = (function (e) {
    function t(e) {
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, t);
      var r = (function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return (r.state = { currentColor: e.hex }), r;
    }
    return (
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      })(t, e),
      Jx(t, [
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.styles,
              r = void 0 === t ? {} : t,
              o = e.className,
              i = void 0 === o ? "" : o,
              a = n(Ls)(
                gv(
                  {
                    default: {
                      picker: {
                        background: "#DCDCDC",
                        borderRadius: "4px",
                        boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                        boxSizing: "initial",
                        width: "513px"
                      },
                      head: {
                        backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                        borderBottom: "1px solid #B1B1B1",
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                        height: "23px",
                        lineHeight: "24px",
                        borderRadius: "4px 4px 0 0",
                        fontSize: "13px",
                        color: "#4D4D4D",
                        textAlign: "center"
                      },
                      body: { padding: "15px 15px 0", display: "flex" },
                      saturation: {
                        width: "256px",
                        height: "256px",
                        position: "relative",
                        border: "2px solid #B3B3B3",
                        borderBottom: "2px solid #F0F0F0",
                        overflow: "hidden"
                      },
                      hue: {
                        position: "relative",
                        height: "256px",
                        width: "19px",
                        marginLeft: "10px",
                        border: "2px solid #B3B3B3",
                        borderBottom: "2px solid #F0F0F0"
                      },
                      controls: { width: "180px", marginLeft: "10px" },
                      top: { display: "flex" },
                      previews: { width: "60px" },
                      actions: { flex: "1", marginLeft: "20px" }
                    }
                  },
                  r
                )
              );
            return n(s).createElement(
              "div",
              { style: a.picker, className: "photoshop-picker " + i },
              n(s).createElement("div", { style: a.head }, this.props.header),
              n(s).createElement(
                "div",
                { style: a.body, className: "flexbox-fix" },
                n(s).createElement(
                  "div",
                  { style: a.saturation },
                  n(s).createElement(Fv, { hsl: this.props.hsl, hsv: this.props.hsv, pointer: Gx, onChange: this.props.onChange })
                ),
                n(s).createElement(
                  "div",
                  { style: a.hue },
                  n(s).createElement(Ch, { direction: "vertical", hsl: this.props.hsl, pointer: Kx, onChange: this.props.onChange })
                ),
                n(s).createElement(
                  "div",
                  { style: a.controls },
                  n(s).createElement(
                    "div",
                    { style: a.top, className: "flexbox-fix" },
                    n(s).createElement(
                      "div",
                      { style: a.previews },
                      n(s).createElement(Zx, { rgb: this.props.rgb, currentColor: this.state.currentColor })
                    ),
                    n(s).createElement(
                      "div",
                      { style: a.actions },
                      n(s).createElement(Xx, { label: "OK", onClick: this.props.onAccept, active: !0 }),
                      n(s).createElement(Xx, { label: "Cancel", onClick: this.props.onCancel }),
                      n(s).createElement($x, {
                        onChange: this.props.onChange,
                        rgb: this.props.rgb,
                        hsv: this.props.hsv,
                        hex: this.props.hex
                      })
                    )
                  )
                )
              )
            );
          }
        }
      ]),
      t
    );
  })(n(s).Component);
  (Qx.propTypes = { header: n(d).string, styles: n(d).object }), (Qx.defaultProps = { header: "Color Picker", styles: {} });
  ry(Qx), (s = a("7b0kr")), (d = a("3pr9z")), (s = a("7b0kr"));
  var ew = function (e) {
      var t = e.onChange,
        r = e.rgb,
        o = e.hsl,
        i = e.hex,
        a = e.disableAlpha,
        l = n(Ls)(
          {
            default: {
              fields: { display: "flex", paddingTop: "4px" },
              single: { flex: "1", paddingLeft: "6px" },
              alpha: { flex: "1", paddingLeft: "6px" },
              double: { flex: "2" },
              input: { width: "80%", padding: "4px 10% 3px", border: "none", boxShadow: "inset 0 0 0 1px #ccc", fontSize: "11px" },
              label: {
                display: "block",
                textAlign: "center",
                fontSize: "11px",
                color: "#222",
                paddingTop: "3px",
                paddingBottom: "4px",
                textTransform: "capitalize"
              }
            },
            disableAlpha: { alpha: { display: "none" } }
          },
          { disableAlpha: a }
        ),
        u = function (e, n) {
          e.hex
            ? Zv(e.hex) && t({ hex: e.hex, source: "hex" }, n)
            : e.r || e.g || e.b
            ? t({ r: e.r || r.r, g: e.g || r.g, b: e.b || r.b, a: r.a, source: "rgb" }, n)
            : e.a &&
              (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100), (e.a /= 100), t({ h: o.h, s: o.s, l: o.l, a: e.a, source: "rgb" }, n));
        };
      return n(s).createElement(
        "div",
        { style: l.fields, className: "flexbox-fix" },
        n(s).createElement(
          "div",
          { style: l.double },
          n(s).createElement(_h, { style: { input: l.input, label: l.label }, label: "hex", value: i.replace("#", ""), onChange: u })
        ),
        n(s).createElement(
          "div",
          { style: l.single },
          n(s).createElement(_h, {
            style: { input: l.input, label: l.label },
            label: "r",
            value: r.r,
            onChange: u,
            dragLabel: "true",
            dragMax: "255"
          })
        ),
        n(s).createElement(
          "div",
          { style: l.single },
          n(s).createElement(_h, {
            style: { input: l.input, label: l.label },
            label: "g",
            value: r.g,
            onChange: u,
            dragLabel: "true",
            dragMax: "255"
          })
        ),
        n(s).createElement(
          "div",
          { style: l.single },
          n(s).createElement(_h, {
            style: { input: l.input, label: l.label },
            label: "b",
            value: r.b,
            onChange: u,
            dragLabel: "true",
            dragMax: "255"
          })
        ),
        n(s).createElement(
          "div",
          { style: l.alpha },
          n(s).createElement(_h, {
            style: { input: l.input, label: l.label },
            label: "a",
            value: Math.round(100 * r.a),
            onChange: u,
            dragLabel: "true",
            dragMax: "100"
          })
        )
      );
    },
    tw =
      ((s = a("7b0kr")),
      (d = a("3pr9z")),
      Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    rw = function (e) {
      var t = e.colors,
        r = e.onClick,
        o = void 0 === r ? function () {} : r,
        i = e.onSwatchHover,
        a = n(Ls)(
          {
            default: {
              colors: {
                margin: "0 -10px",
                padding: "10px 0 0 10px",
                borderTop: "1px solid #eee",
                display: "flex",
                flexWrap: "wrap",
                position: "relative"
              },
              swatchWrap: { width: "16px", height: "16px", margin: "0 10px 10px 0" },
              swatch: { borderRadius: "3px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)" }
            },
            "no-presets": { colors: { display: "none" } }
          },
          { "no-presets": !t || !t.length }
        ),
        l = function (e, t) {
          o({ hex: e, source: "hex" }, t);
        };
      return n(s).createElement(
        "div",
        { style: a.colors, className: "flexbox-fix" },
        t.map(function (e) {
          var t = "string" == typeof e ? { color: e } : e,
            r = "" + t.color + (t.title || "");
          return n(s).createElement(
            "div",
            { key: r, style: a.swatchWrap },
            n(s).createElement(
              sy,
              tw({}, t, {
                style: a.swatch,
                onClick: l,
                onHover: i,
                focusStyle: { boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color }
              })
            )
          );
        })
      );
    };
  rw.propTypes = { colors: n(d).arrayOf(n(d).oneOfType([n(d).string, n(d).shape({ color: n(d).string, title: n(d).string })])).isRequired };
  var nw = rw,
    ow =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    iw = function (e) {
      var t = e.width,
        r = e.rgb,
        o = e.hex,
        i = e.hsv,
        a = e.hsl,
        l = e.onChange,
        u = e.onSwatchHover,
        c = e.disableAlpha,
        d = e.presetColors,
        p = e.renderers,
        f = e.styles,
        h = void 0 === f ? {} : f,
        g = e.className,
        m = void 0 === g ? "" : g,
        v = n(Ls)(
          gv(
            {
              default: ow(
                {
                  picker: {
                    width: t,
                    padding: "10px 10px 0",
                    boxSizing: "initial",
                    background: "#fff",
                    borderRadius: "4px",
                    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
                  },
                  saturation: { width: "100%", paddingBottom: "75%", position: "relative", overflow: "hidden" },
                  Saturation: { radius: "3px", shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" },
                  controls: { display: "flex" },
                  sliders: { padding: "4px 0", flex: "1" },
                  color: { width: "24px", height: "24px", position: "relative", marginTop: "4px", marginLeft: "4px", borderRadius: "3px" },
                  activeColor: {
                    absolute: "0px 0px 0px 0px",
                    borderRadius: "2px",
                    background: "rgba(" + r.r + "," + r.g + "," + r.b + "," + r.a + ")",
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                  },
                  hue: { position: "relative", height: "10px", overflow: "hidden" },
                  Hue: { radius: "2px", shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" },
                  alpha: { position: "relative", height: "10px", marginTop: "4px", overflow: "hidden" },
                  Alpha: { radius: "2px", shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" }
                },
                h
              ),
              disableAlpha: { color: { height: "10px" }, hue: { height: "10px" }, alpha: { display: "none" } }
            },
            h
          ),
          { disableAlpha: c }
        );
      return n(s).createElement(
        "div",
        { style: v.picker, className: "sketch-picker " + m },
        n(s).createElement("div", { style: v.saturation }, n(s).createElement(Fv, { style: v.Saturation, hsl: a, hsv: i, onChange: l })),
        n(s).createElement(
          "div",
          { style: v.controls, className: "flexbox-fix" },
          n(s).createElement(
            "div",
            { style: v.sliders },
            n(s).createElement("div", { style: v.hue }, n(s).createElement(Ch, { style: v.Hue, hsl: a, onChange: l })),
            n(s).createElement(
              "div",
              { style: v.alpha },
              n(s).createElement(yh, { style: v.Alpha, rgb: r, hsl: a, renderers: p, onChange: l })
            )
          ),
          n(s).createElement("div", { style: v.color }, n(s).createElement(fh, null), n(s).createElement("div", { style: v.activeColor }))
        ),
        n(s).createElement(ew, { rgb: r, hsl: a, hex: o, onChange: l, disableAlpha: c }),
        n(s).createElement(nw, { colors: d, onClick: l, onSwatchHover: u })
      );
    };
  (iw.propTypes = { disableAlpha: n(d).bool, width: n(d).oneOfType([n(d).string, n(d).number]), styles: n(d).object }),
    (iw.defaultProps = {
      disableAlpha: !1,
      width: 200,
      styles: {},
      presetColors: [
        "#D0021B",
        "#F5A623",
        "#F8E71C",
        "#8B572A",
        "#7ED321",
        "#417505",
        "#BD10E0",
        "#9013FE",
        "#4A90E2",
        "#50E3C2",
        "#B8E986",
        "#000000",
        "#4A4A4A",
        "#9B9B9B",
        "#FFFFFF"
      ]
    });
  var aw = ry(iw),
    sw =
      ((s = a("7b0kr")),
      (d = a("3pr9z")),
      (s = a("7b0kr")),
      (s = a("7b0kr")),
      function (e) {
        var t = e.hsl,
          r = e.offset,
          o = e.onClick,
          i = void 0 === o ? function () {} : o,
          a = e.active,
          l = e.first,
          u = e.last,
          c = n(Ls)(
            {
              default: { swatch: { height: "12px", background: "hsl(" + t.h + ", 50%, " + 100 * r + "%)", cursor: "pointer" } },
              first: { swatch: { borderRadius: "2px 0 0 2px" } },
              last: { swatch: { borderRadius: "0 2px 2px 0" } },
              active: { swatch: { transform: "scaleY(1.8)", borderRadius: "3.6px/2px" } }
            },
            { active: a, first: l, last: u }
          );
        return n(s).createElement("div", {
          style: c.swatch,
          onClick: function (e) {
            return i({ h: t.h, s: 0.5, l: r, source: "hsl" }, e);
          }
        });
      }),
    lw = function (e) {
      var t = e.onClick,
        r = e.hsl,
        o = n(Ls)({
          default: {
            swatches: { marginTop: "20px" },
            swatch: { boxSizing: "border-box", width: "20%", paddingRight: "1px", float: "left" },
            clear: { clear: "both" }
          }
        }),
        i = 0.1;
      return n(s).createElement(
        "div",
        { style: o.swatches },
        n(s).createElement(
          "div",
          { style: o.swatch },
          n(s).createElement(sw, {
            hsl: r,
            offset: ".80",
            active: Math.abs(r.l - 0.8) < i && Math.abs(r.s - 0.5) < i,
            onClick: t,
            first: !0
          })
        ),
        n(s).createElement(
          "div",
          { style: o.swatch },
          n(s).createElement(sw, { hsl: r, offset: ".65", active: Math.abs(r.l - 0.65) < i && Math.abs(r.s - 0.5) < i, onClick: t })
        ),
        n(s).createElement(
          "div",
          { style: o.swatch },
          n(s).createElement(sw, { hsl: r, offset: ".50", active: Math.abs(r.l - 0.5) < i && Math.abs(r.s - 0.5) < i, onClick: t })
        ),
        n(s).createElement(
          "div",
          { style: o.swatch },
          n(s).createElement(sw, { hsl: r, offset: ".35", active: Math.abs(r.l - 0.35) < i && Math.abs(r.s - 0.5) < i, onClick: t })
        ),
        n(s).createElement(
          "div",
          { style: o.swatch },
          n(s).createElement(sw, {
            hsl: r,
            offset: ".20",
            active: Math.abs(r.l - 0.2) < i && Math.abs(r.s - 0.5) < i,
            onClick: t,
            last: !0
          })
        ),
        n(s).createElement("div", { style: o.clear })
      );
    },
    uw =
      ((s = a("7b0kr")),
      function () {
        var e = n(Ls)({
          default: {
            picker: {
              width: "14px",
              height: "14px",
              borderRadius: "6px",
              transform: "translate(-7px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
            }
          }
        });
        return n(s).createElement("div", { style: e.picker });
      }),
    cw = function (e) {
      var t = e.hsl,
        r = e.onChange,
        o = e.pointer,
        i = e.styles,
        a = void 0 === i ? {} : i,
        l = e.className,
        u = void 0 === l ? "" : l,
        c = n(Ls)(gv({ default: { hue: { height: "12px", position: "relative" }, Hue: { radius: "2px" } } }, a));
      return n(s).createElement(
        "div",
        { style: c.wrap || {}, className: "slider-picker " + u },
        n(s).createElement("div", { style: c.hue }, n(s).createElement(Ch, { style: c.Hue, hsl: t, pointer: o, onChange: r })),
        n(s).createElement("div", { style: c.swatches }, n(s).createElement(lw, { hsl: t, onClick: r }))
      );
    };
  (cw.propTypes = { styles: n(d).object }), (cw.defaultProps = { pointer: uw, styles: {} });
  ry(cw), (s = a("7b0kr")), (d = a("3pr9z")), (s = a("7b0kr")), (s = a("7b0kr"));
  var dw = {};
  Object.defineProperty(dw, "__esModule", { value: !0 });
  var pw =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
    fw = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })((s = a("7b0kr")));
  dw.default = function (e) {
    var t = e.fill,
      r = void 0 === t ? "currentColor" : t,
      n = e.width,
      o = void 0 === n ? 24 : n,
      i = e.height,
      a = void 0 === i ? 24 : i,
      s = e.style,
      l = void 0 === s ? {} : s,
      u = (function (e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
        return r;
      })(e, ["fill", "width", "height", "style"]);
    return fw.default.createElement(
      "svg",
      pw({ viewBox: "0 0 24 24", style: pw({ fill: r, width: o, height: a }, l) }, u),
      fw.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
    );
  };
  var hw = function (e) {
      var t = e.color,
        r = e.onClick,
        o = void 0 === r ? function () {} : r,
        i = e.onSwatchHover,
        a = e.first,
        l = e.last,
        u = e.active,
        c = n(Ls)(
          {
            default: {
              color: { width: "40px", height: "24px", cursor: "pointer", background: t, marginBottom: "1px" },
              check: { color: Jv(t), marginLeft: "8px", display: "none" }
            },
            first: { color: { overflow: "hidden", borderRadius: "2px 2px 0 0" } },
            last: { color: { overflow: "hidden", borderRadius: "0 0 2px 2px" } },
            active: { check: { display: "block" } },
            "color-#FFFFFF": { color: { boxShadow: "inset 0 0 0 1px #ddd" }, check: { color: "#333" } },
            transparent: { check: { color: "#333" } }
          },
          { first: a, last: l, active: u, "color-#FFFFFF": "#FFFFFF" === t, transparent: "transparent" === t }
        );
      return n(s).createElement(
        sy,
        { color: t, style: c.color, onClick: o, onHover: i, focusStyle: { boxShadow: "0 0 4px " + t } },
        n(s).createElement("div", { style: c.check }, n(s).createElement(n(dw), null))
      );
    },
    gw = function (e) {
      var t = e.onClick,
        r = e.onSwatchHover,
        o = e.group,
        i = e.active,
        a = n(Ls)({ default: { group: { paddingBottom: "10px", width: "40px", float: "left", marginRight: "10px" } } });
      return n(s).createElement(
        "div",
        { style: a.group },
        ix(o, function (e, a) {
          return n(s).createElement(hw, {
            key: e,
            color: e,
            active: e.toLowerCase() === i,
            first: 0 === a,
            last: a === o.length - 1,
            onClick: t,
            onSwatchHover: r
          });
        })
      );
    },
    mw = function (e) {
      var t = e.width,
        r = e.height,
        o = e.onChange,
        i = e.onSwatchHover,
        a = e.colors,
        l = e.hex,
        u = e.styles,
        c = void 0 === u ? {} : u,
        d = e.className,
        p = void 0 === d ? "" : d,
        f = n(Ls)(
          gv(
            {
              default: {
                picker: { width: t, height: r },
                overflow: { height: r, overflowY: "scroll" },
                body: { padding: "16px 0 6px 16px" },
                clear: { clear: "both" }
              }
            },
            c
          )
        ),
        h = function (e, t) {
          return o({ hex: e, source: "hex" }, t);
        };
      return n(s).createElement(
        "div",
        { style: f.picker, className: "swatches-picker " + p },
        n(s).createElement(
          vv,
          null,
          n(s).createElement(
            "div",
            { style: f.overflow },
            n(s).createElement(
              "div",
              { style: f.body },
              ix(a, function (e) {
                return n(s).createElement(gw, { key: e.toString(), group: e, active: l, onClick: h, onSwatchHover: i });
              }),
              n(s).createElement("div", { style: f.clear })
            )
          )
        )
      );
    };
  (mw.propTypes = {
    width: n(d).oneOfType([n(d).string, n(d).number]),
    height: n(d).oneOfType([n(d).string, n(d).number]),
    colors: n(d).arrayOf(n(d).arrayOf(n(d).string)),
    styles: n(d).object
  }),
    (mw.defaultProps = {
      width: 320,
      height: 240,
      colors: [
        [lx[900], lx[700], lx[500], lx[300], lx[100]],
        [ux[900], ux[700], ux[500], ux[300], ux[100]],
        [cx[900], cx[700], cx[500], cx[300], cx[100]],
        [dx[900], dx[700], dx[500], dx[300], dx[100]],
        [px[900], px[700], px[500], px[300], px[100]],
        [fx[900], fx[700], fx[500], fx[300], fx[100]],
        [hx[900], hx[700], hx[500], hx[300], hx[100]],
        [gx[900], gx[700], gx[500], gx[300], gx[100]],
        [mx[900], mx[700], mx[500], mx[300], mx[100]],
        ["#194D33", vx[700], vx[500], vx[300], vx[100]],
        [yx[900], yx[700], yx[500], yx[300], yx[100]],
        [bx[900], bx[700], bx[500], bx[300], bx[100]],
        [xx[900], xx[700], xx[500], xx[300], xx[100]],
        [wx[900], wx[700], wx[500], wx[300], wx[100]],
        [Ex[900], Ex[700], Ex[500], Ex[300], Ex[100]],
        [_x[900], _x[700], _x[500], _x[300], _x[100]],
        [Sx[900], Sx[700], Sx[500], Sx[300], Sx[100]],
        [Ox[900], Ox[700], Ox[500], Ox[300], Ox[100]],
        ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
      ],
      styles: {}
    });
  ry(mw), (s = a("7b0kr")), (d = a("3pr9z"));
  var vw = function (e) {
    var t = e.onChange,
      r = e.onSwatchHover,
      o = e.hex,
      i = e.colors,
      a = e.width,
      l = e.triangle,
      u = e.styles,
      c = void 0 === u ? {} : u,
      d = e.className,
      p = void 0 === d ? "" : d,
      f = n(Ls)(
        gv(
          {
            default: {
              card: {
                width: a,
                background: "#fff",
                border: "0 solid rgba(0,0,0,0.25)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                borderRadius: "4px",
                position: "relative"
              },
              body: { padding: "15px 9px 9px 15px" },
              label: { fontSize: "18px", color: "#fff" },
              triangle: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 9px 10px 9px",
                borderColor: "transparent transparent #fff transparent",
                position: "absolute"
              },
              triangleShadow: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 9px 10px 9px",
                borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
                position: "absolute"
              },
              hash: {
                background: "#F0F0F0",
                height: "30px",
                width: "30px",
                borderRadius: "4px 0 0 4px",
                float: "left",
                color: "#98A1A4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              input: {
                width: "100px",
                fontSize: "14px",
                color: "#666",
                border: "0px",
                outline: "none",
                height: "28px",
                boxShadow: "inset 0 0 0 1px #F0F0F0",
                boxSizing: "content-box",
                borderRadius: "0 4px 4px 0",
                float: "left",
                paddingLeft: "8px"
              },
              swatch: { width: "30px", height: "30px", float: "left", borderRadius: "4px", margin: "0 6px 6px 0" },
              clear: { clear: "both" }
            },
            "hide-triangle": { triangle: { display: "none" }, triangleShadow: { display: "none" } },
            "top-left-triangle": { triangle: { top: "-10px", left: "12px" }, triangleShadow: { top: "-11px", left: "12px" } },
            "top-right-triangle": { triangle: { top: "-10px", right: "12px" }, triangleShadow: { top: "-11px", right: "12px" } }
          },
          c
        ),
        { "hide-triangle": "hide" === l, "top-left-triangle": "top-left" === l, "top-right-triangle": "top-right" === l }
      ),
      h = function (e, r) {
        Zv(e) && t({ hex: e, source: "hex" }, r);
      };
    return n(s).createElement(
      "div",
      { style: f.card, className: "twitter-picker " + p },
      n(s).createElement("div", { style: f.triangleShadow }),
      n(s).createElement("div", { style: f.triangle }),
      n(s).createElement(
        "div",
        { style: f.body },
        ix(i, function (e, t) {
          return n(s).createElement(sy, {
            key: t,
            color: e,
            hex: e,
            style: f.swatch,
            onClick: h,
            onHover: r,
            focusStyle: { boxShadow: "0 0 4px " + e }
          });
        }),
        n(s).createElement("div", { style: f.hash }, "#"),
        n(s).createElement(_h, { label: null, style: { input: f.input }, value: o.replace("#", ""), onChange: h }),
        n(s).createElement("div", { style: f.clear })
      )
    );
  };
  (vw.propTypes = {
    width: n(d).oneOfType([n(d).string, n(d).number]),
    triangle: n(d).oneOf(["hide", "top-left", "top-right"]),
    colors: n(d).arrayOf(n(d).string),
    styles: n(d).object
  }),
    (vw.defaultProps = {
      width: 276,
      colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
      triangle: "top-left",
      styles: {}
    });
  ry(vw), (s = a("7b0kr")), (d = a("3pr9z")), (s = a("7b0kr")), (d = a("3pr9z"));
  var yw = function (e) {
    var t = n(Ls)({
      default: {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          border: "2px #fff solid",
          transform: "translate(-12px, -13px)",
          background: "hsl(" + Math.round(e.hsl.h) + ", " + Math.round(100 * e.hsl.s) + "%, " + Math.round(100 * e.hsl.l) + "%)"
        }
      }
    });
    return n(s).createElement("div", { style: t.picker });
  };
  (yw.propTypes = { hsl: n(d).shape({ h: n(d).number, s: n(d).number, l: n(d).number, a: n(d).number }) }),
    (yw.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
  var bw = yw,
    xw =
      ((s = a("7b0kr")),
      (d = a("3pr9z")),
      function (e) {
        var t = n(Ls)({
          default: {
            picker: {
              width: "20px",
              height: "20px",
              borderRadius: "22px",
              transform: "translate(-10px, -7px)",
              background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
              border: "2px white solid"
            }
          }
        });
        return n(s).createElement("div", { style: t.picker });
      });
  (xw.propTypes = { hsl: n(d).shape({ h: n(d).number, s: n(d).number, l: n(d).number, a: n(d).number }) }),
    (xw.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
  var ww = xw,
    Ew =
      ((s = a("7b0kr")),
      function (e) {
        var t = e.onChange,
          r = e.rgb,
          o = e.hsl,
          i = e.hex,
          a = e.hsv,
          l = function (e, r) {
            if (e.hex) Zv(e.hex) && t({ hex: e.hex, source: "hex" }, r);
            else if (e.rgb) {
              var n = e.rgb.split(",");
              Qv(e.rgb, "rgb") && t({ r: n[0], g: n[1], b: n[2], a: 1, source: "rgb" }, r);
            } else if (e.hsv) {
              var o = e.hsv.split(",");
              Qv(e.hsv, "hsv") &&
                ((o[2] = o[2].replace("%", "")),
                (o[1] = o[1].replace("%", "")),
                (o[0] = o[0].replace("°", "")),
                1 == o[1] ? (o[1] = 0.01) : 1 == o[2] && (o[2] = 0.01),
                t({ h: Number(o[0]), s: Number(o[1]), v: Number(o[2]), source: "hsv" }, r));
            } else if (e.hsl) {
              var i = e.hsl.split(",");
              Qv(e.hsl, "hsl") &&
                ((i[2] = i[2].replace("%", "")),
                (i[1] = i[1].replace("%", "")),
                (i[0] = i[0].replace("°", "")),
                1 == p[1] ? (p[1] = 0.01) : 1 == p[2] && (p[2] = 0.01),
                t({ h: Number(i[0]), s: Number(i[1]), v: Number(i[2]), source: "hsl" }, r));
            }
          },
          u = n(Ls)({
            default: {
              wrap: { display: "flex", height: "100px", marginTop: "4px" },
              fields: { width: "100%" },
              column: { paddingTop: "10px", display: "flex", justifyContent: "space-between" },
              double: { padding: "0px 4.4px", boxSizing: "border-box" },
              input: {
                width: "100%",
                height: "38px",
                boxSizing: "border-box",
                padding: "4px 10% 3px",
                textAlign: "center",
                border: "1px solid #dadce0",
                fontSize: "11px",
                textTransform: "lowercase",
                borderRadius: "5px",
                outline: "none",
                fontFamily: "Roboto,Arial,sans-serif"
              },
              input2: {
                height: "38px",
                width: "100%",
                border: "1px solid #dadce0",
                boxSizing: "border-box",
                fontSize: "11px",
                textTransform: "lowercase",
                borderRadius: "5px",
                outline: "none",
                paddingLeft: "10px",
                fontFamily: "Roboto,Arial,sans-serif"
              },
              label: {
                textAlign: "center",
                fontSize: "12px",
                background: "#fff",
                position: "absolute",
                textTransform: "uppercase",
                color: "#3c4043",
                width: "35px",
                top: "-6px",
                left: "0",
                right: "0",
                marginLeft: "auto",
                marginRight: "auto",
                fontFamily: "Roboto,Arial,sans-serif"
              },
              label2: {
                left: "10px",
                textAlign: "center",
                fontSize: "12px",
                background: "#fff",
                position: "absolute",
                textTransform: "uppercase",
                color: "#3c4043",
                width: "32px",
                top: "-6px",
                fontFamily: "Roboto,Arial,sans-serif"
              },
              single: { flexGrow: "1", margin: "0px 4.4px" }
            }
          }),
          c = r.r + ", " + r.g + ", " + r.b,
          d = Math.round(o.h) + "°, " + Math.round(100 * o.s) + "%, " + Math.round(100 * o.l) + "%",
          p = Math.round(a.h) + "°, " + Math.round(100 * a.s) + "%, " + Math.round(100 * a.v) + "%";
        return n(s).createElement(
          "div",
          { style: u.wrap, className: "flexbox-fix" },
          n(s).createElement(
            "div",
            { style: u.fields },
            n(s).createElement(
              "div",
              { style: u.double },
              n(s).createElement(_h, { style: { input: u.input, label: u.label }, label: "hex", value: i, onChange: l })
            ),
            n(s).createElement(
              "div",
              { style: u.column },
              n(s).createElement(
                "div",
                { style: u.single },
                n(s).createElement(_h, { style: { input: u.input2, label: u.label2 }, label: "rgb", value: c, onChange: l })
              ),
              n(s).createElement(
                "div",
                { style: u.single },
                n(s).createElement(_h, { style: { input: u.input2, label: u.label2 }, label: "hsv", value: p, onChange: l })
              ),
              n(s).createElement(
                "div",
                { style: u.single },
                n(s).createElement(_h, { style: { input: u.input2, label: u.label2 }, label: "hsl", value: d, onChange: l })
              )
            )
          )
        );
      }),
    _w = function (e) {
      var t = e.width,
        r = e.onChange,
        o = e.rgb,
        i = e.hsl,
        a = e.hsv,
        l = e.hex,
        u = e.header,
        c = e.styles,
        d = void 0 === c ? {} : c,
        p = e.className,
        f = void 0 === p ? "" : p,
        h = n(Ls)(
          gv(
            {
              default: {
                picker: {
                  width: t,
                  background: "#fff",
                  border: "1px solid #dfe1e5",
                  boxSizing: "initial",
                  display: "flex",
                  flexWrap: "wrap",
                  borderRadius: "8px 8px 0px 0px"
                },
                head: {
                  height: "57px",
                  width: "100%",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  paddingLeft: "16px",
                  fontSize: "20px",
                  boxSizing: "border-box",
                  fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
                },
                saturation: { width: "70%", padding: "0px", position: "relative", overflow: "hidden" },
                swatch: {
                  width: "30%",
                  height: "228px",
                  padding: "0px",
                  background: "rgba(" + o.r + ", " + o.g + ", " + o.b + ", 1)",
                  position: "relative",
                  overflow: "hidden"
                },
                body: { margin: "auto", width: "95%" },
                controls: { display: "flex", boxSizing: "border-box", height: "52px", paddingTop: "22px" },
                color: { width: "32px" },
                hue: { height: "8px", position: "relative", margin: "0px 16px 0px 16px", width: "100%" },
                Hue: { radius: "2px" }
              }
            },
            d
          )
        );
      return n(s).createElement(
        "div",
        { style: h.picker, className: "google-picker " + f },
        n(s).createElement("div", { style: h.head }, u),
        n(s).createElement("div", { style: h.swatch }),
        n(s).createElement("div", { style: h.saturation }, n(s).createElement(Fv, { hsl: i, hsv: a, pointer: bw, onChange: r })),
        n(s).createElement(
          "div",
          { style: h.body },
          n(s).createElement(
            "div",
            { style: h.controls, className: "flexbox-fix" },
            n(s).createElement(
              "div",
              { style: h.hue },
              n(s).createElement(Ch, { style: h.Hue, hsl: i, radius: "4px", pointer: ww, onChange: r })
            )
          ),
          n(s).createElement(Ew, { rgb: o, hsl: i, hex: l, hsv: a, onChange: r })
        )
      );
    };
  (_w.propTypes = { width: n(d).oneOfType([n(d).string, n(d).number]), styles: n(d).object, header: n(d).string }),
    (_w.defaultProps = { width: 652, styles: {}, header: "Color picker" });
  ry(_w), (je = a("fueUa")), (ce = a("iPbYd")), (de = a("jBCXK")), (Ue = a("hGGFE"));
  a("3pr9z");
  (s = a("7b0kr")), (je = a("fueUa"));
  class Sw extends s.Component {
    componentDidMount() {
      je.RESIZE_EVENTS.forEach((e) => window.addEventListener(e, this._debouncedCheck, !1)), this._check();
    }
    componentWillUnmount() {
      je.RESIZE_EVENTS.forEach((e) => window.removeEventListener(e, this._debouncedCheck));
    }
    render() {
      const e = this.state.topOffset;
      let t = Object.assign({}, this.props);
      if (e) {
        const r = Object.assign({}, t.style);
        (r.marginTop = `${parseInt(r.marginTop || 0) + e}px`), (t.style = r);
      }
      return n(s).createElement("div", (0, Ue.default)((0, de.default)({}, t), { ref: this.eltRef }));
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "_check", () => {
          const e = this.eltRef.current;
          if (e) {
            const t = e.offsetTop + e.offsetHeight,
              r = window.innerHeight,
              n = this.state.topOffset;
            t > r && this.setState({ topOffset: n + r - t });
          }
        }),
        (this.eltRef = n(s).createRef()),
        (this.state = { topOffset: 0 }),
        (this._debouncedCheck = (0, we.debounce)(this._check, 200));
    }
  }
  class Ow extends s.PureComponent {
    componentDidMount() {
      Xa(window, je.EVT_MOUSEUP, this._clearFocused), Xa(window, je.EVT_FOCUS_FORMCONTROL, this._clearFocused);
    }
    componentWillUnmount() {
      Za(window, je.EVT_MOUSEUP, this._clearFocused), Za(window, je.EVT_FOCUS_FORMCONTROL, this._clearFocused);
    }
    render() {
      let e = this.props,
        t = this.state,
        r = e.value || t.lastValue || "#fff",
        o = { backgroundColor: r },
        i = null;
      if (this.state.focused) {
        let t = { position: "absolute", right: "200px", marginTop: "-50px" };
        i = n(s).createElement(
          Sw,
          { style: t, "data-nodispatch": "1", onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, className: "colorinput--picker" },
          n(s).createElement(aw, { styles: { default: { picker: { borderRadius: 0 } } }, color: r, onChangeComplete: this.handleChange })
        );
      }
      let a = { colorinput: !0 };
      return (
        e.className && (a[e.className] = !0),
        (a = n(vi)(a)),
        n(s).createElement(
          "div",
          { className: a, "data-modal-ignore": "true" },
          n(s).createElement("input", {
            className: "colorinput--checkbox",
            type: "checkbox",
            checked: Boolean(e.value),
            onChange: this.handleCheckboxChange,
            onMouseUp: this.handleCheckboxMouseUp
          }),
          n(s).createElement(
            "div",
            { className: "colorinput--color" },
            n(s).createElement("div", {
              className: "handle",
              tabIndex: 0,
              style: o,
              onFocus: this.handleFocus,
              onKeyDown: e.onKeyDown,
              onKeyUp: e.onKeyUp,
              onMouseUp: e.onMouseUp
            })
          ),
          i
        )
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "_clearFocused", (e) => this.setState({ focused: !1 })),
        (0, ce.default)(this, "handleChange", (e) => {
          let t = e.hex,
            r = e.rgb.a;
          1 != r && (t += kw(r)), this.props.onUpdateValue(t), t && this.setState({ lastValue: t });
        }),
        (0, ce.default)(this, "handleFocus", (e) => {
          this.props.onFocus && this.props.onFocus(), this.setState({ focused: !0 });
        }),
        (0, ce.default)(this, "handleCheckboxMouseUp", (e) => {
          e.stopPropagation();
        }),
        (0, ce.default)(this, "handleCheckboxChange", (e) => {
          if (e.target.checked)
            this.state.lastValue && this.props.onUpdateValue(this.state.lastValue), this.state.focused || this.handleFocus(e);
          else {
            let e = !1;
            const t = {};
            this.state.focused && ((e = !0), (t.focused = !1)),
              this.props.value && this.state.lastValue !== this.props.value && ((e = !0), (t.lastValue = this.props.value)),
              e && this.setState(t),
              this.props.onUpdateValue("");
          }
        }),
        (this.state = { focused: !1, lastValue: e.value || "#ffffff" });
    }
  }
  const kw = (e) => {
    let t = Math.round(255 * e, 10).toString(16);
    return 1 === t.length && (t = "0" + t), t;
  };
  Ow.propTypes = { color: n(d).string };
  var Cw = Ow;
  class Tw extends s.Component {
    _getTypeDetails() {
      return uo[this.props.type];
    }
    render() {
      let e = this.props,
        t = this._getTypeDetails(),
        r = Rw(e.value),
        o = e.namespace ? `id_${e.namespace}-${e.name}` : null;
      const i = {
          type: t.inputType,
          className: "formcontrol--input",
          [t.valueAttr || "value"]: "number" === t.inputType ? r.toString() : r,
          onChange: this.handleChange
        },
        a = { onKeyDown: this.stopPropagation, onKeyUp: this.stopPropagation, onMouseUp: this.stopPropagation, onFocus: this.handleFocus };
      let l;
      switch ((o && (a.id = o), Object.assign(i, a), e.widget)) {
        case no:
          (i.onUpdateValue = this.handleUpdateValue), (l = n(s).createElement(Cw, i));
          break;
        case ro:
          l = n(s).createElement("textarea", i);
          break;
        case oo:
          l = n(s).createElement(
            "select",
            i,
            e.choices.map((e) => n(s).createElement("option", { key: e.title, value: e.value }, e.title))
          );
          break;
        case io:
          l = n(s).createElement(
            "div",
            (0, de.default)({ className: "formcontrol--flat-select" }, a),
            n(s).createElement(
              "ul",
              null,
              e.choices.map((e) =>
                n(s).createElement(
                  "li",
                  {
                    className: n(vi)({ active: Rw(e.value) === r }),
                    key: e.value || "_blank",
                    onClick: (t) => this.handleUpdateValue(e.value)
                  },
                  e.title
                )
              )
            )
          );
          break;
        default:
          l = n(s).createElement("input", i);
      }
      const u = n(s).createElement(
          "div",
          { className: n(vi)("formcontrol", e.widget && `formcontrol--widget--${e.widget}`) },
          n(s).createElement(
            "div",
            { className: n(vi)("formcontrol--labelwrap", e.isDim && "formcontrol--dim") },
            n(s).createElement("label", { htmlFor: o, className: "formcontrol--label" }, e.title || e.name)
          ),
          n(s).createElement("div", { className: n(vi)("formcontrol--inputwrap", e.isDim && "formcontrol--dim") }, l)
        ),
        c = (e.isDim && e.dimTitle) || null;
      return c ? n(s).createElement(n(Xi), { title: c }, u) : u;
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "handleUpdateValue", (e) => {
          let t = this.props;
          (0, t.onChange)(t.name, this._getTypeDetails().convert(e));
        }),
        (0, ce.default)(this, "handleChange", (e) => {
          let t = e.target,
            r = "checkbox" === t.type ? t.checked : t.value;
          this.handleUpdateValue(r);
        }),
        (0, ce.default)(this, "handleFocus", (e) => {
          (0, Me.default)(window, je.EVT_FOCUS_FORMCONTROL);
        }),
        (0, ce.default)(this, "stopPropagation", (e) => {
          e.stopPropagation();
        });
    }
  }
  const Rw = (e) => (null == e ? "" : e);
  Tw.propTypes = {
    namespace: n(d).string,
    name: n(d).string.isRequired,
    type: n(d).oneOf(co).isRequired,
    value: n(d).any,
    isDim: n(d).bool,
    dimTitle: n(d).string,
    onChange: n(d).func.isRequired
  };
  var Pw = Tw;
  (je = a("fueUa")), (Me = a("fAoww"));
  const jw = [12.5, 25, 50, 75, 100, 200, 400],
    Mw = jw.slice(0).reverse(),
    Dw = Mw[0],
    Lw = jw[0],
    Aw = (e) => Mw.find((t) => t < e) || e,
    Nw = (e) => jw.find((t) => t > e) || e;
  class Iw extends s.Component {
    render() {
      const e = this.props.zoom,
        t = ((e) => e > Lw)(e),
        r = ((e) => e < Dw)(e);
      return n(s).createElement(
        "div",
        { className: "zoomwidget header--text" },
        n(s).createElement(
          "div",
          { className: "zoomwidget--buttons" },
          n(s).createElement(
            "button",
            { className: "step-btn dec-btn", type: "button", disabled: !t, onClick: this.handleClickZoomOut },
            "–"
          ),
          n(s).createElement(
            "button",
            { className: "text-btn", type: "button", onClick: this.handleClickZoomIcon },
            100 === e ? "Zoom" : `${e}%`
          ),
          n(s).createElement(
            "button",
            { className: "step-btn inc-btn", type: "button", disabled: !r, onClick: this.handleClickZoomIn },
            "+"
          )
        )
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "handleClickZoomOut", (e) => {
          const t = this.props,
            r = t.zoom,
            n = t.onChange,
            o = Aw(r);
          o !== r && n(o, o < r);
        }),
        (0, ce.default)(this, "handleClickZoomIn", (e) => {
          const t = this.props,
            r = t.zoom,
            n = t.onChange,
            o = Nw(r);
          o !== r && n(o);
        }),
        (0, ce.default)(this, "handleClickZoomIcon", (e) => {
          this.props.zoom;
          (0, Me.default)(window, je.EVT_MOUSE_ZOOM), document.querySelector(".editor").focus();
        });
    }
  }
  Iw.propTypes = { zoom: n(d).number, onChange: n(d).func.isRequired };
  var Hw = Iw;
  (je = a("fueUa")), (Me = a("fAoww"));
  var Fw = le(
      (e) => ({ zoom: e.editor.zoom }),
      (e) => ({
        onChange: (t, r) => (
          (0, Me.default)(window, je.EVT_CHANGE_ZOOM, { zoom: t }), u.default.event("editor_zoom", r ? "out" : "in", "header", t), e(_r(t))
        )
      })
    )(Hw),
    Uw =
      ((ce = a("iPbYd")),
      (de = a("jBCXK")),
      (Ue = a("hGGFE")),
      (s = a("7b0kr")),
      (Sn = a("5Xemj")),
      (Be = a("4fNEN")),
      (d = a("3pr9z")),
      (s = a("7b0kr")),
      (Sn = a("5Xemj")),
      (s = a("7b0kr")),
      (e) => {
        let t = e.className,
          r = e.fill,
          o = void 0 === r ? "#151515" : r;
        return n(s).createElement(
          "svg",
          { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          n(s).createElement("rect", { x: "3.5", y: "4.5", width: "19", height: "15", fill: "none", stroke: o }),
          n(s).createElement("rect", { x: "11", y: "5", width: "4", height: "2", fill: o }),
          n(s).createElement("rect", { x: "20", y: "5", width: "2", height: "2", fill: o }),
          n(s).createElement("rect", { x: "4", y: "5", width: "2", height: "2", fill: o }),
          n(s).createElement("rect", { x: "21", y: "10", width: "2", height: "4", fill: o }),
          n(s).createElement("rect", { x: "3", y: "10", width: "2", height: "4", fill: o }),
          n(s).createElement("rect", { x: "11", y: "17", width: "4", height: "2", fill: o }),
          n(s).createElement("rect", { x: "20", y: "17", width: "2", height: "2", fill: o }),
          n(s).createElement("rect", { x: "4", y: "17", width: "2", height: "2", fill: o })
        );
      });
  const Bw = (e) => {
    if (null === e.baseWidth) return null;
    n(Be).number(e.baseHeight, "baseHeight not defined in Crop!");
    let t = e.mode === Kt,
      r = t ? (0, Sn.tr)("Done Cropping") : (0, Sn.tr)("Crop Image"),
      o = (r) => {
        r && r.preventDefault(), t ? e.disableCrop() : e.enableCrop(e.baseWidth, e.baseHeight);
      };
    return (
      e.addClickHandler && (e.addClickHandler(o), (o = null)),
      n(s).createElement(
        "div",
        { className: "layout-row--icon", onClick: o },
        n(s).createElement("span", { className: "pull-right dim" }, "C"),
        n(s).createElement(Uw, null),
        r
      )
    );
  };
  Bw.propTypes = {
    mode: n(d).oneOf(Xt).isRequired,
    baseWidth: n(d).number,
    baseHeight: n(d).number,
    enableCrop: n(d).func.isRequired,
    disableCrop: n(d).func.isRequired,
    addClickHandler: n(d).func
  };
  var zw = Bw;
  var Ww = le(
      (e, t) => ({
        mode: e.editor.mode,
        baseWidth: (e.base && e.base.width) || null,
        baseHeight: (e.base && e.base.height) || null,
        addClickHandler: t.addClickHandler
      }),
      (e) => ({ enableCrop: (t, r) => e(Rr(t, r)), disableCrop: () => e(Pr()) })
    )(zw),
    qw =
      ((d = a("3pr9z")),
      (s = a("7b0kr")),
      (s = a("7b0kr")),
      (e) => {
        let t = e.className,
          r = e.fill,
          o = void 0 === r ? "#151515" : r;
        return n(s).createElement(
          "svg",
          { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          n(s).createElement("rect", { x: "3.5", y: "4.5", width: "19", height: "15", fill: "none", stroke: o }),
          n(s).createElement("rect", { x: "5.5", y: "6.5", width: "15", height: "11", fill: "none", stroke: o })
        );
      });
  const Vw = (e) => {
    let t = e.onEdit,
      r = e.addClickHandler,
      o = e.border,
      i = e.globalShapeDefaults,
      a = (e) => {
        e && e.preventDefault();
        t(!o, i.borderDefaults);
      };
    r && (r(a), (a = null));
    const l = Uo[To].title;
    return n(s).createElement(
      "div",
      { className: "layout-row--icon", onClick: a },
      n(s).createElement("span", { className: "pull-right dim" }, "P"),
      n(s).createElement(qw, null),
      l
    );
  };
  Vw.propTypes = { onEdit: n(d).func.isRequired, border: n(d).object, addClickHandler: n(d).func };
  var Yw = Vw;
  var $w = le(
      (e, t) => ({ addClickHandler: t.addClickHandler, border: Hi(e), globalShapeDefaults: $i(e) }),
      (e) => ({ onEdit: (t, r) => e(Sr(t, r)) })
    )(Yw),
    Gw =
      ((d = a("3pr9z")),
      (s = a("7b0kr")),
      (s = a("7b0kr")),
      (e) => {
        let t = e.className,
          r = e.fill,
          o = void 0 === r ? "#151515" : r,
          i = e.fill2,
          a = void 0 === i ? "black" : i;
        return n(s).createElement(
          "svg",
          { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          n(s).createElement("path", { d: "M7.20711 4.5H22.5V19.5H3.5V8.20711L7.20711 4.5Z", stroke: o }),
          n(s).createElement("path", {
            d: "M6.37158 10.4014L6.84766 12.4619L6.9502 13.0356L7.05518 12.4741L7.46045 10.4014H8.25391L8.68115 12.4619L8.79102 13.0356L8.90088 12.4839L9.38184 10.4014H10.146L9.13281 14H8.41504L7.98047 11.8955L7.85352 11.1997L7.72656 11.8955L7.29199 14H6.59375L5.57324 10.4014H6.37158ZM11.5933 10.4014L12.0693 12.4619L12.1719 13.0356L12.2769 12.4741L12.6821 10.4014H13.4756L13.9028 12.4619L14.0127 13.0356L14.1226 12.4839L14.6035 10.4014H15.3677L14.3545 14H13.6367L13.2021 11.8955L13.0752 11.1997L12.9482 11.8955L12.5137 14H11.8154L10.7949 10.4014H11.5933ZM16.8149 10.4014L17.291 12.4619L17.3936 13.0356L17.4985 12.4741L17.9038 10.4014H18.6973L19.1245 12.4619L19.2344 13.0356L19.3442 12.4839L19.8252 10.4014H20.5894L19.5762 14H18.8584L18.4238 11.8955L18.2969 11.1997L18.1699 11.8955L17.7354 14H17.0371L16.0166 10.4014H16.8149Z",
            fill: a
          })
        );
      });
  const Kw = (e) => {
    e.isEditing;
    let t = e.onEdit,
      r = (e.templateId, e.addClickHandler),
      o = (e) => {
        e && e.preventDefault(), t();
      };
    r && (r(o), (o = null));
    const i = Uo[Io].title;
    return n(s).createElement(
      "div",
      { className: "layout-row--icon", onClick: o },
      n(s).createElement("span", { className: "pull-right dim" }, "U"),
      n(s).createElement(Gw, null),
      i
    );
  };
  (Kw.propTypes = { templateId: n(d).string, isEditing: n(d).bool.isRequired, onEdit: n(d).func.isRequired, addClickHandler: n(d).func }),
    (Kw.defaultProps = { isEditing: !1 });
  var Xw = Kw;
  var Zw = le(
    (e, t) => ({ templateId: Bi(e), addClickHandler: t.addClickHandler }),
    (e) => ({ onEdit: () => e(Or()) })
  )(Xw);
  (pe = a("ff4Ef")), (vi = a("gwJFa")), (s = a("7b0kr"));
  const Jw = () => {
    const e = (0, pe.default)((0, s.useState)(!1), 2),
      t = e[0],
      r = e[1];
    return (
      (0, s.useEffect)(() => {
        let e = window.setTimeout(() => {
          r(!0);
        }, 1e3);
        return () => {
          window.clearTimeout(e);
        };
      }, []),
      n(s).createElement(
        "span",
        { className: "newthrob" },
        n(s).createElement("span", { className: n(vi)("throb", "will-fade", { "fade-in": t }), title: "New!" })
      )
    );
  };
  Jw.displayName = "NewThrob";
  var Qw = Jw;
  const eE = (0, Sn.tr)("Formatting");
  class tE extends s.Component {
    render() {
      const e = this.props,
        t = e.alignRight,
        r = void 0 !== t && t,
        o = e.showHeaderUpdatedThrob,
        i = e.onHideHeaderUpdatedThrob,
        a = [{ className: "divider", Comps: [Ww, Zw, $w] }].map((e, t) => {
          var r = e.className,
            o = e.Comps,
            i = ys(e, ["className", "Comps"]);
          return (0, Ue.default)((0, de.default)({}, i), {
            className: r,
            rows: o.map((e, r) => n(s).createElement(e, { addClickHandler: this.makeAddClickHandler(t, r) }))
          });
        });
      return n(s).createElement(fs, {
        className: "headerformatting",
        title: n(s).createElement(n(s).Fragment, null, eE, o && n(s).createElement(Qw, null)),
        onMouseOver: o ? () => i() : void 0,
        sections: a,
        renderRow: this.renderRow,
        onSelectRow: this.onSelectRow,
        alignRight: r
      });
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "makeAddClickHandler", (e, t) => (r) => {
          this._clickHandlers[e] || (this._clickHandlers[e] = []), (this._clickHandlers[e][t] = r);
        }),
        (0, ce.default)(this, "renderRow", (e) => e),
        (0, ce.default)(this, "onSelectRow", (e, t, r) => {
          this._clickHandlers[t] && this._clickHandlers[t][r] && this._clickHandlers[t][r]();
        }),
        (this._clickHandlers = []);
    }
  }
  (ce = a("iPbYd")),
    (de = a("jBCXK")),
    (Ue = a("hGGFE")),
    (s = a("7b0kr")),
    (Sn = a("5Xemj")),
    (d = a("3pr9z")),
    (s = a("7b0kr")),
    (Sn = a("5Xemj")),
    (s = a("7b0kr"));
  var rE = (e) => {
    let t = e.className,
      r = e.fill,
      o = void 0 === r ? "#151515" : r;
    return n(s).createElement(
      "svg",
      { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      n(s).createElement("path", {
        d: "M3.5 12C3.5 6.77614 7.77614 2.5 13 2.5C18.2239 2.5 22.5 6.77614 22.5 12C22.5 17.2239 18.2239 21.5 13 21.5C7.77614 21.5 3.5 17.2239 3.5 12Z",
        stroke: o
      }),
      n(s).createElement("path", {
        d: "M12.3516 16.375H13.9062V18H12.3516V16.375ZM9.71875 10.1172C9.71875 8.99219 10.0365 8.08854 10.6719 7.40625C11.3073 6.71875 12.1797 6.375 13.2891 6.375C14.3151 6.375 15.1354 6.66927 15.75 7.25781C16.3698 7.84115 16.6797 8.58854 16.6797 9.5C16.6797 10.0521 16.5651 10.5 16.3359 10.8438C16.112 11.1875 15.6562 11.6927 14.9688 12.3594C14.4688 12.8438 14.1432 13.2552 13.9922 13.5938C13.8464 13.9271 13.7734 14.4219 13.7734 15.0781H12.3828C12.3828 14.3333 12.4714 13.7344 12.6484 13.2812C12.8255 12.8229 13.2135 12.2995 13.8125 11.7109L14.4375 11.0938C14.625 10.9167 14.776 10.7318 14.8906 10.5391C15.099 10.2005 15.2031 9.84896 15.2031 9.48438C15.2031 8.97396 15.0495 8.53125 14.7422 8.15625C14.4401 7.78125 13.9375 7.59375 13.2344 7.59375C12.3646 7.59375 11.763 7.91667 11.4297 8.5625C11.2422 8.92188 11.1354 9.4401 11.1094 10.1172H9.71875Z",
        fill: o
      })
    );
  };
  const nE = (e) => {
    let t = e.addClickHandler,
      r = e.onEnable,
      o = (e) => {
        e && e.preventDefault(), r();
      };
    return (
      t && (t(o), (o = null)),
      n(s).createElement("div", { className: "layout-row--icon", onClick: o }, n(s).createElement(rE, null), (0, Sn.tr)("Help / Shortcuts"))
    );
  };
  nE.propTypes = { onEnable: n(d).func.isRequired };
  var oE = nE;
  var iE = le(
      (e, t) => ({}),
      (e) => ({ onEnable: () => e(kr(!0)) })
    )(oE),
    aE =
      ((d = a("3pr9z")),
      (s = a("7b0kr")),
      (Sn = a("5Xemj")),
      (s = a("7b0kr")),
      (e) => {
        let t = e.className,
          r = e.fill,
          o = void 0 === r ? "#151515" : r;
        return n(s).createElement(
          "svg",
          { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          n(s).createElement("line", { x1: "5.5", y1: "4", x2: "5.5", y2: "20", stroke: o }),
          n(s).createElement("line", { x1: "12.5", y1: "4", x2: "12.5", y2: "20", stroke: o }),
          n(s).createElement("line", { x1: "19.5", y1: "4", x2: "19.5", y2: "20", stroke: o }),
          n(s).createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 6H7V7H8V10H7V11H4V10H3V7H4V6Z", fill: o }),
          n(s).createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11 13H14V14H15V17H14V18H11V17H10V14H11V13Z",
            fill: o
          }),
          n(s).createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 7H21V8H22V11H21V12H18V11H17V8H18V7Z", fill: o })
        );
      });
  const sE = (e) => {
    let t = e.addClickHandler,
      r = e.onEnable,
      o = (e) => {
        e && e.preventDefault(), r();
      };
    return (
      t && (t(o), (o = null)),
      n(s).createElement(
        "div",
        { className: "layout-row--icon", onClick: o },
        n(s).createElement(aE, null),
        (0, Sn.tr)("Set theme defaults")
      )
    );
  };
  sE.propTypes = { onEnable: n(d).func.isRequired };
  var lE = sE;
  var uE = le(
      (e, t) => ({}),
      (e) => ({ onEnable: () => e(Cr(!0)) })
    )(lE),
    cE =
      ((s = a("7b0kr")),
      (e) => {
        let t = e.fill,
          r = void 0 === t ? "#fff" : t;
        return n(s).createElement(
          "svg",
          { width: "10", height: "6", viewBox: "0 0 10 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          n(s).createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0.5L5 5.5L10 0.5H0Z", fill: r })
        );
      }),
    dE = ((d = a("3pr9z")), (s = a("7b0kr")), (Sn = a("5Xemj")), a("crHLg"));
  _e = a("kOtTY");
  const pE = () => {
      const e = (0, _e.getQueryString)(),
        t = e.id || e.oid,
        r = e.e,
        n = e.url;
      return { options: gE(t, r, n), history: mE(t, r, n), capture: t ? fE(t, n) : void 0, editor: t && r ? hE(t, r, n) : void 0 };
    },
    fE = (e, t) => {
      let r = void 0 === t ? null : t;
      const n = { id: e };
      r && (n.url = r);
      return "/capture.html" + ("?" + (0, _e.toQueryString)(n));
    },
    hE = (e, t, r) => {
      let n = void 0 === r ? null : r;
      const o = { id: e, e: t };
      n && (o.url = n);
      return "/editor.html" + ("?" + (0, _e.toQueryString)(o));
    },
    gE = (e, t, r) => {
      let n = void 0 === e ? null : e,
        o = void 0 === t ? null : t,
        i = void 0 === r ? null : r,
        a = "";
      if (n) {
        const e = { id: n };
        o && (e.e = o), i && (e.url = i), (a = "?" + (0, _e.toQueryString)(e));
      }
      return "/options.html" + a;
    },
    mE = (e, t, r) => {
      let n = void 0 === e ? null : e,
        o = void 0 === t ? null : t,
        i = void 0 === r ? null : r,
        a = "";
      if (n) {
        const e = { oid: n };
        o && (e.e = o), i && (e.url = i), (a = "?" + (0, _e.toQueryString)(e));
      }
      return "/capture.html" + a;
    };
  s = a("7b0kr");
  var vE = (e) => {
      let t = e.className,
        r = e.style,
        o = void 0 === r ? null : r,
        i = e.fill,
        a = void 0 === i ? "#151515" : i;
      return n(s).createElement(
        "svg",
        { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: o },
        n(s).createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21 5H5V18H21V5ZM5 4H4V5V18V19H5H21H22V18V5V4H21H5ZM18 9H8V8H18V9V9ZM18 12H8V11H18V12V12ZM14 15H8V14H14V15V15Z",
          fill: a
        })
      );
    },
    yE =
      ((s = a("7b0kr")),
      (e) => {
        let t = e.className,
          r = e.style,
          o = void 0 === r ? null : r,
          i = e.fill,
          a = void 0 === i ? "#151515" : i;
        return n(s).createElement(
          "svg",
          { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: o },
          n(s).createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.61 13.03v-.527a3.565 3.565 0 01.06-.596 2.26 2.26 0 00.037-.36c0-.417-.01-.531-.044-.633l-.225-.665.549-.438 1.654-1.32-1.424-2.454-2.05.808-.535.21-.451-.355c-.387-.305-.87-.547-1.47-.843l-.466-.23-.08-.513L13.834 3h-2.9l-.318 2.109-.092.609-.585.192c-.318.104-.575.278-.984.555-.126.085-.266.18-.426.285l-.441.29-.488-.2-1.977-.812-1.448 2.496 1.691 1.27.4.3v.499a3.563 3.563 0 01-.06.596c-.024.15-.037.251-.037.359 0 .417.01.531.044.634l.225.665-.548.437-1.655 1.32 1.424 2.455 2.05-.809.535-.21.452.355c.387.306.869.547 1.47.844l.466.23.08.512.315 2.019h3.015l.315-2.019.08-.513.466-.23c.601-.296 1.084-.537 1.47-.843l.452-.355.534.21 2.006.791 1.45-2.5-1.77-1.214-.436-.297zm3.326 1.573l-1.938 3.342c-.097.19-.388.286-.581.19l-2.423-.954c-.485.382-1.066.668-1.648.955l-.387 2.482c0 .191-.291.382-.485.382h-3.877c-.29 0-.484-.191-.484-.382l-.388-2.482c-.581-.287-1.163-.573-1.647-.955l-2.423.955c-.291.095-.485 0-.582-.096L3.135 14.7c-.097-.191-.097-.382.097-.573l2.035-1.623c-.097-.287-.097-.573-.097-.955 0-.205.028-.382.054-.547.022-.142.043-.275.043-.408L3.232 9.065c-.194-.19-.29-.477-.194-.573l1.938-3.341c.194-.191.388-.287.679-.191l2.326.955c.118-.078.233-.156.345-.233.438-.297.84-.57 1.302-.722l.388-2.578c0-.191.29-.382.484-.382h3.877c.194 0 .485.19.388.477l.387 2.483c.582.286 1.163.573 1.648.955l2.423-.955c.29-.096.484 0 .581.095l1.939 3.342c.096.19.096.382-.097.573l-2.036 1.623c.097.286.097.573.097.955 0 .204-.027.382-.053.546-.023.143-.044.276-.044.409l2.23 1.527c.193.096.193.382.096.573zM9 11.5c0 1.89 1.61 3.5 3.5 3.5s3.5-1.61 3.5-3.5S14.39 8 12.5 8 9 9.61 9 11.5zm-1 0c0 2.443 2.057 4.5 4.5 4.5s4.5-2.057 4.5-4.5S14.943 7 12.5 7 8 9.057 8 11.5z",
            fill: a
          })
        );
      }),
    bE =
      ((s = a("7b0kr")),
      (e) => {
        let t = e.className,
          r = e.style,
          o = void 0 === r ? null : r,
          i = e.fill,
          a = void 0 === i ? "#151515" : i;
        return n(s).createElement(
          "svg",
          { className: t, width: "26", height: "24", viewBox: "0 0 26 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: o },
          n(s).createElement("circle", { cx: "13", cy: "9", r: "2.5", stroke: a }),
          n(s).createElement("path", { d: "M7.5 17.5001V16.1699C10.2977 12.6101 15.7023 12.6101 18.5 16.1699V17.5001H7.5Z", stroke: a })
        );
      });
  const xE = { opacity: 0.25 },
    wE = () => {
      const e = (0, Sn.tr)("Go to Files"),
        t = pE().history;
      return n(s).createElement(SE, { href: t }, n(s).createElement(vE, { style: xE }), e);
    },
    EE = () => {
      const e = (0, Sn.tr)("Go to Options"),
        t = pE().options;
      return n(s).createElement(SE, { href: t }, n(s).createElement(yE, { style: xE }), e);
    },
    _E = () => {
      const e = (0, Sn.tr)("Go to Account"),
        t = (0, dE.makeLoginUrl)();
      return n(s).createElement(SE, { href: t }, n(s).createElement(bE, { style: xE }), e);
    },
    SE = (e) => {
      var t = e.children,
        r = ys(e, ["children"]);
      return n(s).createElement("a", r, n(s).createElement("span", { className: "layout-row--icon" }, t));
    };
  (SE.displayName = "RowWrap"), (SE.propTypes = { href: n(d).string.isRequired });
  const OE = (0, Sn.tr)("More");
  class kE extends s.Component {
    render() {
      const e = this.props.alignRight,
        t = void 0 === e || e,
        r = [{ className: "divider", Comps: [uE] }, { className: "divider is-links", Comps: [wE, EE, _E] }, { Comps: [iE] }].map((e, t) => {
          var r = e.className,
            o = e.Comps,
            i = ys(e, ["className", "Comps"]);
          return (0, Ue.default)((0, de.default)({}, i), {
            className: r,
            rows: o.map((e, r) => n(s).createElement(e, { addClickHandler: this.makeAddClickHandler(t, r) }))
          });
        });
      return n(s).createElement(fs, {
        className: "headermore",
        title: OE,
        icon: n(s).createElement(cE, null),
        sections: r,
        renderRow: this.renderRow,
        onSelectRow: this.onSelectRow,
        alignRight: t
      });
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "makeAddClickHandler", (e, t) => (r) => {
          this._clickHandlers[e] || (this._clickHandlers[e] = []), (this._clickHandlers[e][t] = r);
        }),
        (0, ce.default)(this, "renderRow", (e) => e),
        (0, ce.default)(this, "onSelectRow", (e, t, r) => {
          this._clickHandlers[t] && this._clickHandlers[t][r] && this._clickHandlers[t][r]();
        }),
        (this._clickHandlers = []);
    }
  }
  s = a("7b0kr");
  var CE = (e) => {
    let t = e.fill,
      r = void 0 === t ? "#fff" : t;
    return n(s).createElement(
      "svg",
      { width: "6", height: "10", viewBox: "0 0 6 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      n(s).createElement("path", { d: "M 0.5,5 5.5,0 5.5,10 Z", fill: r })
    );
  };
  const TE = (e) => (e && e.extUrl) || chrome.extension.getURL("/capture.html"),
    RE = (e) => {
      let t = e.capture,
        r = e.showHeaderUpdatedThrob,
        o = e.onHideHeaderUpdatedThrob,
        i = TE(t);
      return n(s).createElement(
        "div",
        { className: "header" },
        n(s).createElement(
          "div",
          { className: "header--left" },
          n(s).createElement(
            "h1",
            { className: "header--text" },
            n(s).createElement(
              n(Xi),
              { title: (0, Sn.tr)("Back to capture (changes are auto-saved in the editor)") },
              n(s).createElement("a", { className: "header--ext-back", href: i }, n(s).createElement(CE, null))
            ),
            n(s).createElement("img", { src: n(Zi) }),
            "Editor"
          ),
          Ps.map((e, t) => n(s).createElement(e, { key: t })),
          n(s).createElement(tE, { showHeaderUpdatedThrob: r, onHideHeaderUpdatedThrob: o }),
          n(s).createElement(Ds, null),
          n(s).createElement(Fw, null)
        ),
        n(s).createElement("div", { className: "header--right" }, n(s).createElement(kE, { alignRight: !0 }), n(s).createElement(Ya, null))
      );
    };
  RE.propTypes = { capture: n(d).object, showHeaderUpdatedThrob: n(d).bool.isRequired, onHideHeaderUpdatedThrob: n(d).func.isRequired };
  var PE = RE;
  var jE = le(
    (e) => ({ capture: e.capture, showHeaderUpdatedThrob: e.editor.showHeaderUpdatedThrob || !1 }),
    (e) => ({
      onHideHeaderUpdatedThrob: () => (
        Ce.default.set("didUpdatedHeaderThrob", !0).catch((e) => log.error(e)), e({ type: br, payload: { showHeaderUpdatedThrob: !1 } })
      )
    })
  )(PE);
  (u = a("ceb36")),
    (ce = a("iPbYd")),
    (s = a("7b0kr")),
    (d = a("3pr9z")),
    (ce = a("iPbYd")),
    (de = a("jBCXK")),
    (Ue = a("hGGFE")),
    (vi = a("gwJFa")),
    (d = a("3pr9z")),
    (s = a("7b0kr")),
    (je = a("fueUa"));
  class ME extends s.Component {
    render() {
      let e = this.props,
        t = e.layerId,
        r = e.layer,
        o = e.cfg,
        i = e.data,
        a = e.onDisableCrop,
        l = o.controls.map((e) => {
          var t = e.dim,
            o = ys(e, ["dim"]);
          const a = (t && t(r)) || !1;
          return n(s).createElement(
            Pw,
            (0, Ue.default)((0, de.default)({ readOnly: a, key: o.name, value: i[o.name] }, o), {
              isDim: a,
              namespace: "propertieswidgets",
              onChange: this.handleFormControlChange
            })
          );
        });
      const u = t === je.CROP_ID && "box" === o.name,
        c = n(vi)("propertieswidget", `propertieswidget--type--${o.name}`);
      let d = null,
        p = null;
      return (
        u &&
          ((d = n(s).createElement(
            "div",
            { className: "propertieswidget propertieswidget--over" },
            n(s).createElement("div", { className: "propertieswidget--title" }, "Crop")
          )),
          (p = n(s).createElement(
            "div",
            { className: "propertieswidget propertieswidget--under" },
            n(s).createElement("button", { type: "button", onClick: a }, "Done cropping")
          ))),
        n(s).createElement(
          n(s).Fragment,
          null,
          d,
          n(s).createElement(
            "div",
            { className: c },
            n(s).createElement("div", { className: "propertieswidget--title" }, o.title || o.name),
            l
          ),
          p
        )
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "handleFormControlChange", (e, t) => {
          let r = this.props;
          r.onChange(r.cfg.name, e, t);
        });
    }
  }
  (0, ce.default)(ME, "propTypes", {
    layerId: n(d).string.isRequired,
    data: n(d).object.isRequired,
    cfg: n(d).shape({
      name: n(d).string.isRequired,
      title: n(d).string,
      controls: n(d).arrayOf(n(d).shape({ name: n(d).string.isRequired, type: n(d).string.isRequired, widget: n(d).string })).isRequired,
      hide: n(d).bool
    }).isRequired,
    layer: n(d).shape({ id: n(d).string.isRequired, shapeKey: n(d).string.isRequired }).isRequired,
    onChange: n(d).func.isRequired,
    onDisableCrop: n(d).func.isRequired
  });
  var DE = ME;
  je = a("fueUa");
  const LE = (e, t, r) => (n, o, i, a, s) => (
    n === je.CROP_ID &&
      "box" === i &&
      (a = ((e, t, r) => {
        const n = Math.max(0, e.x),
          o = Math.max(0, e.y);
        return { x: n, y: o, width: Math.min(t, e.x + e.width) - n, height: Math.min(r, e.y + e.height) - o };
      })((a = Object.assign({}, r.box, a)), t.width, t.height)),
    e(n, o, i, a, s)
  );
  class AE extends s.Component {
    render() {
      const e = this.props,
        t = e.layer,
        r = e.onDisableCrop;
      let o;
      if (t) {
        let e = Uo[t.shapeKey].coordsOnly;
        o = po
          .map((o) => {
            const i = o.hide
              ? null
              : ((e, t) => {
                  const r = e[t];
                  return r || (Uo[e.shapeKey].defaults || {})[t];
                })(t, o.name);
            return i
              ? n(s).createElement(DE, {
                  layerId: t.id,
                  key: o.name,
                  data: i,
                  cfg: "box" === o.name && e ? ho : o,
                  layer: t,
                  onChange: this.handlePropertiesWidgetChange,
                  onDisableCrop: r
                })
              : null;
          })
          .filter((e) => e);
      }
      return n(s).createElement("div", { className: "properties", onMouseDown: this.handleMouseDown }, o);
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "handleMouseDown", (e) => {
          e.stopPropagation();
        }),
        (0, ce.default)(this, "handlePropertiesWidgetChange", (e, t, r) => {
          const n = this.props;
          let o = { [t]: r };
          if (Uo[n.layer.shapeKey].isSquare) {
            let e = ["width", "height"];
            -1 !== e.indexOf(t) &&
              e.forEach((e) => {
                e !== t && (o[e] = r);
              });
          }
          LE(n.onChangeProperties, n.base, n.layer)(n.layer.id, n.layer.shapeKey, e, o);
        }),
        (this.state = {});
    }
  }
  (0, ce.default)(AE, "propTypes", {
    base: n(d).object.isRequired,
    layer: n(d).object,
    onChangeProperties: n(d).func.isRequired,
    onDisableCrop: n(d).func.isRequired
  });
  var NE = AE;
  je = a("fueUa");
  var IE = le(
    (e) => {
      const t = Li(e),
        r = 1 === t.length ? t[0] : null,
        n = (r && e.undos.present.layersById[r]) || null;
      return { base: e.base, layer: n };
    },
    (e) => ({
      onChangeProperties: (t, r, n, o) => {
        switch (t) {
          case je.BORDER_ID:
            if ("border" === n && o && void 0 !== o.on) {
              const e = o.on;
              u.default.event("editor_padding", e ? "enabled" : "disabled");
            }
            break;
          case je.TEMPLATE_ID:
            if ("template" === n && o && void 0 !== o.templateId) {
              const e = o.templateId || "none";
              u.default.event("editor_browserurl", e);
            }
        }
        return e(ni(t, r, n, o));
      },
      onDisableCrop: () => (u.default.event("editor_crop", "cropped"), e(Pr()))
    })
  )(NE);
  (ce = a("iPbYd")), (d = a("3pr9z")), (s = a("7b0kr")), (Sn = a("5Xemj")), (je = a("fueUa")), (Me = a("fAoww"));
  bi = a("kRWUw");
  var HE = a("jIppf");
  class FE extends s.Component {
    render() {
      const e = this.props,
        t = e.globalShapeDefaults,
        r = e.onToggle;
      return n(s).createElement(HE.default, {
        className: "themedefaultsmodal",
        onToggle: r,
        width: 780,
        radius: 0,
        render: (e) => {
          let r = e.onClose,
            o = e.parentRef;
          return n(s).createElement(
            "div",
            { onMouseUp: this.handleMouseUp },
            n(s).createElement(
              "div",
              { className: "td-header" },
              n(s).createElement("h2", null, (0, Sn.tr)("Theme Defaults")),
              n(s).createElement("a", { className: "close", href: "#", onClick: r }, n(s).createElement(bi.default, { fill: "#333" }))
            ),
            n(s).createElement(
              "div",
              { className: "td-body" },
              n(s).createElement(
                "div",
                { className: "shapeddefaults" },
                n(s).createElement(
                  "p",
                  null,
                  (0, Sn.tr)("These settings will apply to all future edits of screenshots. Changes are autosaved."),
                  n(s).createElement("br", null),
                  n(s).createElement("br", null)
                )
              ),
              this.shapes.map((e) => {
                const r = this.makeOnFormControlChange(e.type),
                  o = { id: "temp", shapeKey: e.type };
                return (
                  e.remember.forEach((r) => {
                    const n = Object.assign({}, ji(this.hardcodedDefaults, e.type, r), ji(t, e.type, r));
                    o[r] = n;
                  }),
                  n(s).createElement(
                    "div",
                    { key: e.type, className: "shapedefaults" },
                    n(s).createElement(
                      "h3",
                      null,
                      e.Icon && n(s).createElement(e.Icon, { className: "insert-icon" }),
                      n(s).createElement("span", null, e.title || (i = e.type).substring(0, 1).toUpperCase() + i.substring(1))
                    ),
                    e.remember.map((t) => {
                      const i = o[t],
                        a = po.find((e) => e.name === t) || null;
                      return (
                        i &&
                        a &&
                        n(s).createElement(DE, {
                          key: t,
                          layerId: `${e.type}-${t}`,
                          layer: o,
                          data: i,
                          cfg: a,
                          onChange: r,
                          onDisableCrop: () => {}
                        })
                      );
                    })
                  )
                );
                var i;
              }),
              n(s).createElement(
                "div",
                { className: "shapedefaults" },
                n(s).createElement("a", { href: "#", onClick: this.makeHandleRestoreDefaults(o) }, (0, Sn.tr)("restore factory defaults"))
              )
            )
          );
        }
      });
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "makeOnFormControlChange", (e) => (t, r, n) => {
          (0, this.props.onUpdateGroupDefaults)(e, t, { [r]: n });
        }),
        (0, ce.default)(this, "handleMouseUp", (e) => {
          (0, Me.checkCanDispatch)(e) && (0, Me.default)(window, je.EVT_MOUSEUP);
        }),
        (0, ce.default)(this, "makeHandleRestoreDefaults", (e) => (t) => {
          t.preventDefault();
          const r = this.props.onUpdateAllGroupDefaults;
          confirm((0, Sn.tr)("Are you sure you want to reset to the extension’s original theme defaults?")) &&
            (r(this.hardcodedDefaults), e.current && e.current.scrollTo(0, 0));
        }),
        (this.shapes = Ri()),
        (this.hardcodedDefaults = Pi(this.shapes));
    }
  }
  (0, ce.default)(FE, "propTypes", {
    globalShapeDefaults: n(d).objectOf(n(d).objectOf(n(d).object)).isRequired,
    onUpdateGroupDefaults: n(d).func.isRequired,
    onToggle: n(d).func.isRequired
  });
  var UE = le(
    (e) => ({ globalShapeDefaults: e.globalShapeDefaults }),
    (e) => ({ onUpdateGroupDefaults: (t, r, n) => e($o(t, r, n)), onUpdateAllGroupDefaults: (t) => e({ type: Vo, payload: t }) })
  )(FE);
  (On = a("1AJdn")), (Me = a("fAoww")), ($a = a("iCPfM")), (Mi = a("3cJ8u"));
  const BE = {},
    zE = {},
    WE = {},
    qE = (e, t, r) => {
      const n = BE[e];
      (BE[e] = t),
        n ||
          (zE[e] = window.setTimeout(() => {
            WE[e] = window.requestAnimationFrame(() => {
              const t = BE[e];
              delete BE[e], t && t();
            });
          }, r));
    },
    VE = ["x1", "y1", "x2", "y2"],
    YE = (e, t) => {
      e.save(),
        (e.strokeStyle = "#F00"),
        (e.lineWidth = 1),
        t.forEach((t) => {
          let r = t.x1,
            n = t.y1,
            o = t.x2,
            i = t.y2;
          return $E(e, r, n, o, i);
        }),
        e.restore();
    },
    $E = (e, t, r, n, o) => {
      r === o && (GE(e, t, r - 3, t, r + 3), GE(e, n, o - 3, n, o + 3)),
        t === n && (GE(e, t - 3, r, t + 3, r), GE(e, n - 3, o, n + 3, o)),
        GE(e, t, r, n, o);
    },
    GE = (e, t, r, n, o) => {
      e.beginPath(), e.moveTo(t, r), e.lineTo(n, o), e.stroke();
    };
  var KE = (e, t, r, n, o, i, a, s, l, u, c) => {
      if ((e.clearRect(0, 0, t, r), s === Kt && u)) {
        let n = u.box,
          s = i + n.x,
          l = a + n.y;
        e.save(), (e.fillStyle = "#00000044"), e.fillRect(0, 0, t, r), e.clearRect(s * o, l * o, n.width * o, n.height * o), e.restore();
      }
      if (n && n.length) {
        let t = n.map((e) => {
          let t = {};
          return (
            VE.forEach((r, n) => {
              let s = e[r];
              (s = n % 2 == 0 ? (s + i) * o : (s + a) * o), (t[r] = Math.floor(s) + 0.5);
            }),
            t
          );
        });
        YE(e, t);
      }
      if (c) {
        const t = (i + Math.min(c.x1, c.x2)) * o,
          r = (a + Math.min(c.y1, c.y2)) * o,
          n = Math.abs(c.x1 - c.x2) * o,
          s = Math.abs(c.y1 - c.y2) * o;
        e.save(),
          (e.strokeStyle = "#39f"),
          (e.fillStyle = "#3399ff44"),
          (e.lineWidth = 1),
          e.fillRect(t, r, n, s),
          e.strokeRect(t, r, n, s),
          e.restore();
      }
    },
    XE = a("94TAZ");
  (ce = a("iPbYd")),
    (d = a("3pr9z")),
    (s = a("7b0kr")),
    (Pe = a("8DwkQ")),
    (u = a("ceb36")),
    (bi = a("kRWUw")),
    (HE = a("jIppf")),
    (ce = a("iPbYd")),
    (vi = a("gwJFa")),
    (s = a("7b0kr"));
  class ZE extends n(s).Component {
    componentDidMount() {
      window.addEventListener("resize", this.recomputeSizeDebounced), this.recomputeSize();
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.recomputeSizeDebounced);
    }
    render() {
      const e = this.props,
        t = e.className,
        r = e.children,
        o = e.ratioWidth,
        i = e.ratioHeight,
        a = e.style,
        l = this.state,
        u = l.width,
        c = l.height,
        d = o / i;
      let p = u,
        f = c;
      u / c > d ? (p = Math.floor(c * d)) : (f = Math.floor(u / d));
      const h = { width: `${p}px`, height: `${f}px` };
      return n(s).createElement(
        "div",
        { ref: this.wrapRef, className: n(vi)("ratio-box", t), style: a },
        n(s).createElement("div", { className: "ratio-box-inner", style: h }, r)
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "wrapRef", n(s).createRef()),
        (0, ce.default)(this, "state", { width: 0, height: 0 }),
        (0, ce.default)(this, "recomputeSize", () => {
          const e = this.wrapRef.current;
          e && this.setState({ width: e.offsetWidth, height: e.offsetHeight });
        }),
        (0, ce.default)(this, "recomputeSizeDebounced", (0, we.debounce)(this.recomputeSize, 160));
    }
  }
  var JE = ZE;
  (de = a("jBCXK")), (vi = a("gwJFa")), (s = a("7b0kr"));
  var QE = (e) => {
    var t = e.width,
      r = e.height,
      o = e.style,
      i = e.className,
      a = ys(e, ["width", "height", "style", "className"]);
    const l = t && r ? (100 * r) / t + "%" : "56.25%";
    return (
      (o = Object.assign({ paddingBottom: l }, o)),
      (i = n(vi)(i, "videowrap")),
      n(s).createElement("div", (0, de.default)({ style: o, className: i }, a))
    );
  };
  class e_ extends s.Component {
    componentDidMount() {
      const e = window.location,
        t = "/editor/demo-video-modal";
      u.default.pageview(t, `${e.protocol}//${e.host}${t}`);
    }
    componentWillUnmount() {
      u.default.pageview();
    }
    render() {
      return n(s).createElement(HE.default, {
        className: "demomodal",
        onToggle: this.props.onToggle,
        fullscreen: !0,
        render: (e) => {
          let t = e.onClose;
          return n(s).createElement(
            n(s).Fragment,
            null,
            n(s).createElement(
              "div",
              { className: "hm-header" },
              n(s).createElement("h2", null, "Editor Demo"),
              n(s).createElement("a", { className: "close", href: "#", onClick: t }, n(s).createElement(bi.default, null))
            ),
            n(s).createElement(
              "div",
              { className: "hm-body", style: { maxWidth: "" } },
              n(s).createElement(
                JE,
                { ratioWidth: 16, ratioHeight: 9 },
                n(s).createElement(QE, null, n(s).createElement("iframe", { allowFullScreen: !0, src: Pe.INLINE_DEMO_EDITOR_URL }))
              )
            )
          );
        }
      });
    }
  }
  (0, ce.default)(e_, "propTypes", { onToggle: n(d).func.isRequired });
  (pe = a("ff4Ef")), (s = a("7b0kr")), (Sn = a("5Xemj"));
  var t_ = a("3utT5"),
    r_ = ((bi = a("kRWUw")), (HE = a("jIppf")), a("eYuPW"));
  var n_,
    o_ = (e) => {
      let t = e.onClose,
        r = e.triggerShowTourDemo;
      const o = (0, pe.default)((0, s.useState)(!1), 2),
        i = o[0],
        a = o[1],
        l = (0, s.useCallback)(
          (e) => {
            e.preventDefault(),
              i ||
                (a(!0),
                window.setTimeout(() => {
                  t();
                }, 500));
          },
          [i]
        );
      (0, s.useEffect)(() => {
        window.setTimeout(() => {
          r();
        }, 0);
      }, []);
      const u = { transition: "opacity 500ms ease-in-out", opacity: i ? 0 : 1 },
        c = (0, Sn.tr)("Some menu options have moved!"),
        d = (0, Sn.tr)(
          'Don’t worry, your favorite features are still here! Crop, URL, datestamp, and padding are now in the new “Formatting” menu. Watch <a href="https://gofullpage.com/demos#editor" target="_blank" and rel="noopener noreferrer">the demo</a> to see more.',
          void 0,
          void 0,
          void 0,
          !0
        ),
        p = (0, Sn.tr)("Bonus: we have added new timestamp formats too!"),
        f = (0, Sn.tr)("Got it!");
      return n(s).createElement(
        n(s).Fragment,
        null,
        n(s).createElement(
          HE.default,
          { style: u, className: "welcomemodal big-modal", dimBg: !0, width: 540 },
          n(s).createElement("h2", { className: "br" }, c),
          n(s).createElement(r_.default, null),
          n(s).createElement("p", { className: "br", dangerouslySetInnerHTML: { __html: d } }),
          n(s).createElement("p", { className: "br15 strong" }, p),
          n(s).createElement("div", null, n(s).createElement("a", { className: "btn", href: "#", onClick: l }, f)),
          n(s).createElement(
            "a",
            { className: "close close-topright", href: "#", onClick: l },
            n(s).createElement(bi.default, { fill: "#CCC" })
          )
        ),
        n(s).createElement(t_.default, { style: u })
      );
    },
    i_ = ((ce = a("iPbYd")), /[|\\{}()[\]^$+*?.]/g);
  n_ = function (e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(i_, "\\$&");
  };
  (d = a("3pr9z")), (s = a("7b0kr")), (Pe = a("8DwkQ")), (Sn = a("5Xemj")), (u = a("ceb36")), (Bn = a("5Gpcw"));
  var a_ = a("6wFiT");
  (bi = a("kRWUw")), (HE = a("jIppf"));
  var s_,
    l_ = {
      groups: [
        {
          key: "left",
          sections: [
            {
              title: (0, (Sn = a("5Xemj")).tr)("Insert shapes"),
              lines: [
                { a: (0, Sn.tr)("Rectangle"), c: "R" },
                { a: (0, Sn.tr)("Oval"), c: "O" },
                { a: (0, Sn.tr)("Line"), c: "L" },
                { a: (0, Sn.tr)("Arrow"), c: "A" },
                { a: (0, Sn.tr)("Text"), c: "T" },
                { a: (0, Sn.tr)("Blur"), c: "B" }
              ]
            },
            {
              title: (0, Sn.tr)("Document edits"),
              lines: [
                { a: (0, Sn.tr)("Toggle crop"), c: "C" },
                { a: (0, Sn.tr)("Toggle URL / browser"), c: "U" },
                { a: (0, Sn.tr)("Toggle padding / border"), c: "P" }
              ]
            },
            {
              title: (0, Sn.tr)("Zoom"),
              lines: [
                { a: (0, Sn.tr)("Zoom in"), c: "Z" },
                { a: (0, Sn.tr)("Zoom out"), c: "{{OPTION}} + Z" },
                { a: (0, Sn.tr)("Exit zoom"), c: "Escape (or V)" }
              ]
            }
          ]
        },
        {
          key: "right",
          sections: [
            {
              title: (0, Sn.tr)("Layers"),
              lines: [
                { a: (0, Sn.tr)("Select layer"), c: (0, Sn.tr)("Mouse or layers pane") },
                { a: (0, Sn.tr)("Move layer"), c: (0, Sn.tr)("Mouse or arrow keys") },
                { a: (0, Sn.tr)("Resize layer"), c: (0, Sn.tr)("Drag layer control points") },
                { a: (0, Sn.tr)("Order layer"), c: (0, Sn.tr)("Click + drag in layers pane") },
                { a: (0, Sn.tr)("Duplicate selection"), c: "{{CMD}} + D" },
                { a: (0, Sn.tr)("Delete current selection"), c: (0, Sn.tr)("Delete") }
              ]
            },
            {
              title: (0, Sn.tr)("Document"),
              lines: [
                { a: (0, Sn.tr)("Undo"), c: "{{CMD}} + Z" },
                { a: (0, Sn.tr)("Redo"), c: "{{CMD}} + Y" },
                { a: (0, Sn.tr)("Export"), c: "{{CMD}} + E" },
                { a: (0, Sn.tr)("Export save as"), c: "{{CMD}} + Shift + E" },
                { a: (0, Sn.tr)("Copy to clipboard"), c: "{{CMD}} + {{OPTION}} + E" },
                { a: (0, Sn.tr)("Help"), c: "Shift + ?" }
              ]
            }
          ]
        }
      ]
    };
  s_ = a("8r5Kp").getBundleURL("jNUyp") + a("fquJx").resolve("1B54I");
  var u_;
  u_ = a("8r5Kp").getBundleURL("jNUyp") + a("fquJx").resolve("82Kei");
  var c_;
  c_ = a("8r5Kp").getBundleURL("jNUyp") + a("fquJx").resolve("j8dWM");
  var d_;
  d_ = a("8r5Kp").getBundleURL("jNUyp") + a("fquJx").resolve("kdsjn");
  class p_ extends s.Component {
    componentDidMount() {
      const e = window.location,
        t = "/editor/help";
      u.default.pageview(t, `${e.protocol}//${e.host}${t}`);
    }
    componentWillUnmount() {
      u.default.pageview();
    }
    render() {
      return n(s).createElement(HE.default, {
        className: "helpmodal",
        onToggle: this.props.onToggle,
        width: 680,
        render: (e) => {
          let t = e.onClose;
          return n(s).createElement(
            n(s).Fragment,
            null,
            n(s).createElement(
              "div",
              { className: "hm-header" },
              n(s).createElement(
                "h2",
                null,
                n(s).createElement("img", { src: (0, a_.pickDensity)(n(s_), n(u_)), width: "22", height: "27" }),
                (0, Sn.tr)("Help")
              ),
              n(s).createElement("a", { className: "close", href: "#", onClick: t }, n(s).createElement(bi.default, null))
            ),
            n(s).createElement(
              "div",
              { className: "hm-body" },
              l_.groups.map((e) => {
                let t = e.key,
                  r = e.sections;
                return n(s).createElement(
                  "div",
                  { className: `hm-body-${t}`, key: t },
                  r.map((e, t) => {
                    let r = e.title,
                      o = e.lines;
                    return n(s).createElement(
                      "div",
                      { className: "hm-section", key: t },
                      n(s).createElement("h3", null, r, ":"),
                      o.map((e, t) =>
                        n(s).createElement(
                          "div",
                          { className: "hm-line", key: t },
                          n(s).createElement("span", null, e.a),
                          n(s).createElement("span", null, h_(e.c))
                        )
                      )
                    );
                  }),
                  "right" === t &&
                    n(s).createElement(
                      "div",
                      { className: "hm-section hm-extra-note" },
                      n(s).createElement(
                        "p",
                        null,
                        n(s).createElement("img", {
                          style: { verticalAlign: "top", marginLeft: "5px", opacity: 0.95 },
                          src: (0, a_.pickDensity)(n(c_), n(d_)),
                          width: "16",
                          height: "20",
                          alt: "smile"
                        }),
                        " ",
                        "All screenshot edits are auto-saved"
                      ),
                      n(s).createElement(
                        "p",
                        null,
                        "Need more help?",
                        " ",
                        n(s).createElement("a", { href: Pe.DEMO_URL, target: "_blank", rel: "noopener noreferrer" }, "Watch the demo video")
                      )
                    )
                );
              })
            )
          );
        }
      });
    }
  }
  (0, ce.default)(p_, "propTypes", { onToggle: n(d).func.isRequired });
  const f_ = [
    { token: "{{CMD}}", mac: "Cmd", other: "Ctrl" },
    { token: "{{OPTION}}", mac: "Option", other: "Alt" }
  ];
  f_.forEach((e) => (e.regex = new RegExp(n(n_)(e.token), "g")));
  const h_ = (e) => {
    const t = (0, Bn.getIsMac)();
    return f_.reduce((e, r) => e.replace(r.regex, t ? r.mac : r.other), e);
  };
  (window.escapeStringRegexp = n(n_)), (window._matchOs = h_);
  (s = a("7b0kr")),
    (ce = a("iPbYd")),
    (vi = a("gwJFa")),
    (d = a("3pr9z")),
    (s = a("7b0kr")),
    (Sn = a("5Xemj")),
    (ce = a("iPbYd")),
    (vi = a("gwJFa")),
    (d = a("3pr9z")),
    (s = a("7b0kr"));
  class g_ extends s.Component {
    render() {
      let e = this.props,
        t = n(vi)({
          layersbarwidget: !0,
          hover: e.hovering,
          selected: e.selected,
          even: e.position % 2 == 0,
          odd: e.position % 2 == 1,
          [`shape-${e.shapeKey}`]: !0
        });
      return n(s).createElement(
        "div",
        { className: t, onMouseDown: e.onMouseDown, onMouseOver: e.onMouseOver, onMouseLeave: e.onMouseOut },
        n(s).createElement("strong", null, e.label)
      );
    }
  }
  (0, ce.default)(g_, "propTypes", {
    position: n(d).number.isRequired,
    label: n(d).string.isRequired,
    shapeKey: n(d).string.isRequired,
    selected: n(d).bool.isRequired,
    hovering: n(d).bool.isRequired,
    onMouseDown: n(d).func.isRequired,
    onMouseOver: n(d).func.isRequired,
    onMouseOut: n(d).func.isRequired
  });
  var m_ = g_;
  const v_ = (function (e) {
      var t,
        r,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 };
      return (
        (r = t =
          (function (t) {
            function r() {
              return Xe(this, r), et(this, tt(r).apply(this, arguments));
            }
            return (
              nt(r, t),
              Je(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.register();
                  }
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.node &&
                      (e.index !== this.props.index && (this.node.sortableInfo.index = this.props.index),
                      e.disabled !== this.props.disabled && (this.node.sortableInfo.disabled = this.props.disabled)),
                      e.collection !== this.props.collection && (this.unregister(e.collection), this.register());
                  }
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.unregister();
                  }
                },
                {
                  key: "register",
                  value: function () {
                    var e = this.props,
                      t = e.collection,
                      r = e.disabled,
                      n = e.index,
                      o = (0, l.findDOMNode)(this);
                    (o.sortableInfo = { collection: t, disabled: r, index: n, manager: this.context.manager }),
                      (this.node = o),
                      (this.ref = { node: o }),
                      this.context.manager.add(t, this.ref);
                  }
                },
                {
                  key: "unregister",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.collection;
                    this.context.manager.remove(e, this.ref);
                  }
                },
                {
                  key: "getWrappedInstance",
                  value: function () {
                    return (
                      n(b)(
                        o.withRef,
                        "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"
                      ),
                      this.refs.wrappedInstance
                    );
                  }
                },
                {
                  key: "render",
                  value: function () {
                    var t = o.withRef ? "wrappedInstance" : null;
                    return (0, s.createElement)(e, m({ ref: t }, ct(this.props, Ft)));
                  }
                }
              ]),
              r
            );
          })(s.Component)),
        Ge(t, "displayName", bt("sortableElement", e)),
        Ge(t, "contextTypes", { manager: n(d).object.isRequired }),
        Ge(t, "propTypes", Ht),
        Ge(t, "defaultProps", { collection: 0 }),
        r
      );
    })((e) => n(s).createElement("li", { className: "layersbar--item" }, n(s).createElement(m_, e))),
    y_ = (function (e) {
      var t,
        r,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 };
      return (
        (r = t =
          (function (t) {
            function r(e) {
              var t;
              return (
                Xe(this, r),
                Ge(g(g((t = et(this, tt(r).call(this, e))))), "state", {}),
                Ge(g(g(t)), "handleStart", function (e) {
                  var r = t.props,
                    n = r.distance,
                    o = r.shouldCancelStart;
                  if (2 !== e.button && !o(e)) {
                    (t.touched = !0), (t.position = wt(e));
                    var i = mt(e.target, function (e) {
                      return null != e.sortableInfo;
                    });
                    if (i && i.sortableInfo && t.nodeIsChild(i) && !t.state.sorting) {
                      var a = t.props.useDragHandle,
                        s = i.sortableInfo,
                        l = s.index,
                        u = s.collection;
                      if (s.disabled) return;
                      if (a && !mt(e.target, Mt)) return;
                      (t.manager.active = { collection: u, index: l }),
                        (function (e) {
                          return (e.touches && e.touches.length) || (e.changedTouches && e.changedTouches.length);
                        })(e) ||
                          e.target.tagName !== jt.Anchor ||
                          e.preventDefault(),
                        n ||
                          (0 === t.props.pressDelay
                            ? t.handlePress(e)
                            : (t.pressTimer = setTimeout(function () {
                                return t.handlePress(e);
                              }, t.props.pressDelay)));
                    }
                  }
                }),
                Ge(g(g(t)), "nodeIsChild", function (e) {
                  return e.sortableInfo.manager === t.manager;
                }),
                Ge(g(g(t)), "handleMove", function (e) {
                  var r = t.props,
                    n = r.distance,
                    o = r.pressThreshold;
                  if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
                    var i = wt(e),
                      a = { x: t.position.x - i.x, y: t.position.y - i.y },
                      s = Math.abs(a.x) + Math.abs(a.y);
                    (t.delta = a),
                      n || (o && !(s >= o))
                        ? n && s >= n && t.manager.isActive() && t.handlePress(e)
                        : (clearTimeout(t.cancelTimer), (t.cancelTimer = setTimeout(t.cancel, 0)));
                  }
                }),
                Ge(g(g(t)), "handleEnd", function () {
                  (t.touched = !1), t.cancel();
                }),
                Ge(g(g(t)), "cancel", function () {
                  var e = t.props.distance;
                  t.state.sorting || (e || clearTimeout(t.pressTimer), (t.manager.active = null));
                }),
                Ge(g(g(t)), "handlePress", function (e) {
                  try {
                    var r = t.manager.getActive(),
                      n = (function () {
                        if (r) {
                          var n = function () {
                              var r,
                                n,
                                o,
                                u,
                                g,
                                m,
                                v = p.sortableInfo.index,
                                y =
                                  ((r = p),
                                  {
                                    bottom: yt((n = window.getComputedStyle(r)).marginBottom),
                                    left: yt(n.marginLeft),
                                    right: yt(n.marginRight),
                                    top: yt(n.marginTop)
                                  }),
                                b = (function (e) {
                                  var t = window.getComputedStyle(e);
                                  return "grid" === t.display ? { x: yt(t.gridColumnGap), y: yt(t.gridRowGap) } : { x: 0, y: 0 };
                                })(t.container),
                                x = t.scrollContainer.getBoundingClientRect(),
                                w = a({ index: v, node: p, collection: f });
                              if (
                                ((t.node = p),
                                (t.margin = y),
                                (t.gridGap = b),
                                (t.width = w.width),
                                (t.height = w.height),
                                (t.marginOffset = {
                                  x: t.margin.left + t.margin.right + t.gridGap.x,
                                  y: Math.max(t.margin.top, t.margin.bottom, t.gridGap.y)
                                }),
                                (t.boundingClientRect = p.getBoundingClientRect()),
                                (t.containerBoundingRect = x),
                                (t.index = v),
                                (t.newIndex = v),
                                (t.axis = { x: i.indexOf("x") >= 0, y: i.indexOf("y") >= 0 }),
                                (t.offsetEdge = Et(p, t.container)),
                                (t.initialOffset = wt(
                                  h ? Ke({}, e, { pageX: t.boundingClientRect.left, pageY: t.boundingClientRect.top }) : e
                                )),
                                (t.initialScroll = { left: t.scrollContainer.scrollLeft, top: t.scrollContainer.scrollTop }),
                                (t.initialWindowScroll = { left: window.pageXOffset, top: window.pageYOffset }),
                                (t.helper = t.helperContainer.appendChild(
                                  ((u = "input, textarea, select, canvas, [contenteditable]"),
                                  (g = (o = p).querySelectorAll(u)),
                                  st((m = o.cloneNode(!0)).querySelectorAll(u)).forEach(function (e, t) {
                                    "file" !== e.type && (e.value = g[t].value),
                                      "radio" === e.type && e.name && (e.name = "__sortableClone__".concat(e.name)),
                                      e.tagName === jt.Canvas &&
                                        g[t].width > 0 &&
                                        g[t].height > 0 &&
                                        e.getContext("2d").drawImage(g[t], 0, 0);
                                  }),
                                  m)
                                )),
                                ft(t.helper, {
                                  boxSizing: "border-box",
                                  height: "".concat(t.height, "px"),
                                  left: "".concat(t.boundingClientRect.left - y.left, "px"),
                                  pointerEvents: "none",
                                  position: "fixed",
                                  top: "".concat(t.boundingClientRect.top - y.top, "px"),
                                  width: "".concat(t.width, "px")
                                }),
                                h && t.helper.focus(),
                                l && ((t.sortableGhost = p), ft(p, { opacity: 0, visibility: "hidden" })),
                                (t.minTranslate = {}),
                                (t.maxTranslate = {}),
                                h)
                              ) {
                                var E = d
                                    ? { top: 0, left: 0, width: t.contentWindow.innerWidth, height: t.contentWindow.innerHeight }
                                    : t.containerBoundingRect,
                                  _ = E.top,
                                  S = E.left,
                                  O = E.width,
                                  k = _ + E.height,
                                  C = S + O;
                                t.axis.x &&
                                  ((t.minTranslate.x = S - t.boundingClientRect.left),
                                  (t.maxTranslate.x = C - (t.boundingClientRect.left + t.width))),
                                  t.axis.y &&
                                    ((t.minTranslate.y = _ - t.boundingClientRect.top),
                                    (t.maxTranslate.y = k - (t.boundingClientRect.top + t.height)));
                              } else
                                t.axis.x &&
                                  ((t.minTranslate.x = (d ? 0 : x.left) - t.boundingClientRect.left - t.width / 2),
                                  (t.maxTranslate.x =
                                    (d ? t.contentWindow.innerWidth : x.left + x.width) - t.boundingClientRect.left - t.width / 2)),
                                  t.axis.y &&
                                    ((t.minTranslate.y = (d ? 0 : x.top) - t.boundingClientRect.top - t.height / 2),
                                    (t.maxTranslate.y =
                                      (d ? t.contentWindow.innerHeight : x.top + x.height) - t.boundingClientRect.top - t.height / 2));
                              s &&
                                s.split(" ").forEach(function (e) {
                                  return t.helper.classList.add(e);
                                }),
                                (t.listenerNode = e.touches ? p : t.contentWindow),
                                h
                                  ? (t.listenerNode.addEventListener("wheel", t.handleKeyEnd, !0),
                                    t.listenerNode.addEventListener("mousedown", t.handleKeyEnd, !0),
                                    t.listenerNode.addEventListener("keydown", t.handleKeyDown))
                                  : (dt.move.forEach(function (e) {
                                      return t.listenerNode.addEventListener(e, t.handleSortMove, !1);
                                    }),
                                    dt.end.forEach(function (e) {
                                      return t.listenerNode.addEventListener(e, t.handleSortEnd, !1);
                                    })),
                                t.setState({ sorting: !0, sortingIndex: v }),
                                c &&
                                  c(
                                    {
                                      node: p,
                                      index: v,
                                      collection: f,
                                      isKeySorting: h,
                                      nodes: t.manager.getOrderedRefs(),
                                      helper: t.helper
                                    },
                                    e
                                  ),
                                h && t.keyMove(0);
                            },
                            o = t.props,
                            i = o.axis,
                            a = o.getHelperDimensions,
                            s = o.helperClass,
                            l = o.hideSortableGhost,
                            u = o.updateBeforeSortStart,
                            c = o.onSortStart,
                            d = o.useWindowAsScrollContainer,
                            p = r.node,
                            f = r.collection,
                            h = t.manager.isKeySorting,
                            g = (function () {
                              if ("function" == typeof u) {
                                t._awaitingUpdateBeforeSortStart = !0;
                                var r = (function (e, t) {
                                  try {
                                    var r = e();
                                  } catch (e) {
                                    return t(!0, e);
                                  }
                                  return r && r.then ? r.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, value);
                                })(
                                  function () {
                                    var t = p.sortableInfo.index;
                                    return Promise.resolve(u({ collection: f, index: t, node: p, isKeySorting: h }, e)).then(
                                      function () {}
                                    );
                                  },
                                  function (e, r) {
                                    if (((t._awaitingUpdateBeforeSortStart = !1), e)) throw r;
                                    return r;
                                  }
                                );
                                if (r && r.then) return r.then(function () {});
                              }
                            })();
                          return g && g.then ? g.then(n) : n();
                        }
                      })();
                    return Promise.resolve(n && n.then ? n.then(function () {}) : void 0);
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
                Ge(g(g(t)), "handleSortMove", function (e) {
                  var r = t.props.onSortMove;
                  "function" == typeof e.preventDefault && e.preventDefault(),
                    t.updateHelperPosition(e),
                    t.animateNodes(),
                    t.autoscroll(),
                    r && r(e);
                }),
                Ge(g(g(t)), "handleSortEnd", function (e) {
                  var r = t.props,
                    n = r.hideSortableGhost,
                    o = r.onSortEnd,
                    i = t.manager,
                    a = i.active.collection,
                    s = i.isKeySorting,
                    l = t.manager.getOrderedRefs();
                  t.listenerNode &&
                    (s
                      ? (t.listenerNode.removeEventListener("wheel", t.handleKeyEnd, !0),
                        t.listenerNode.removeEventListener("mousedown", t.handleKeyEnd, !0),
                        t.listenerNode.removeEventListener("keydown", t.handleKeyDown))
                      : (dt.move.forEach(function (e) {
                          return t.listenerNode.removeEventListener(e, t.handleSortMove);
                        }),
                        dt.end.forEach(function (e) {
                          return t.listenerNode.removeEventListener(e, t.handleSortEnd);
                        }))),
                    t.helper.parentNode.removeChild(t.helper),
                    n && t.sortableGhost && ft(t.sortableGhost, { opacity: "", visibility: "" });
                  for (var u = 0, c = l.length; u < c; u++) {
                    var d = l[u],
                      p = d.node;
                    (d.edgeOffset = null), (d.boundingClientRect = null), ht(p, null), gt(p, null), (d.translate = null);
                  }
                  t.autoScroller.clear(),
                    (t.manager.active = null),
                    (t.manager.isKeySorting = !1),
                    t.setState({ sorting: !1, sortingIndex: null }),
                    "function" == typeof o && o({ collection: a, newIndex: t.newIndex, oldIndex: t.index, isKeySorting: s, nodes: l }, e),
                    (t.touched = !1);
                }),
                Ge(g(g(t)), "autoscroll", function () {
                  var e = t.props.disableAutoscroll,
                    r = t.manager.isKeySorting;
                  if (e) t.autoScroller.clear();
                  else {
                    if (r) {
                      var n = Ke({}, t.translate),
                        o = 0,
                        i = 0;
                      return (
                        t.axis.x &&
                          ((n.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x))), (o = t.translate.x - n.x)),
                        t.axis.y &&
                          ((n.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y))), (i = t.translate.y - n.y)),
                        (t.translate = n),
                        ht(t.helper, t.translate),
                        (t.scrollContainer.scrollLeft += o),
                        void (t.scrollContainer.scrollTop += i)
                      );
                    }
                    t.autoScroller.update({
                      height: t.height,
                      maxTranslate: t.maxTranslate,
                      minTranslate: t.minTranslate,
                      translate: t.translate,
                      width: t.width
                    });
                  }
                }),
                Ge(g(g(t)), "onAutoScroll", function (e) {
                  (t.translate.x += e.left), (t.translate.y += e.top), t.animateNodes();
                }),
                Ge(g(g(t)), "handleKeyDown", function (e) {
                  var r = e.keyCode,
                    n = t.props,
                    o = n.shouldCancelStart,
                    i = n.keyCodes,
                    a = Ke({}, At, void 0 === i ? {} : i);
                  (t.manager.active && !t.manager.isKeySorting) ||
                    !(t.manager.active || (a.lift.includes(r) && !o(e) && t.isValidSortingTarget(e))) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    a.lift.includes(r) && !t.manager.active
                      ? t.keyLift(e)
                      : a.drop.includes(r) && t.manager.active
                      ? t.keyDrop(e)
                      : a.cancel.includes(r)
                      ? ((t.newIndex = t.manager.active.index), t.keyDrop(e))
                      : a.up.includes(r)
                      ? t.keyMove(-1)
                      : a.down.includes(r) && t.keyMove(1));
                }),
                Ge(g(g(t)), "keyLift", function (e) {
                  var r = e.target,
                    n = mt(r, function (e) {
                      return null != e.sortableInfo;
                    }).sortableInfo,
                    o = n.index,
                    i = n.collection;
                  (t.initialFocusedNode = r),
                    (t.manager.isKeySorting = !0),
                    (t.manager.active = { index: o, collection: i }),
                    t.handlePress(e);
                }),
                Ge(g(g(t)), "keyMove", function (e) {
                  var r = t.manager.getOrderedRefs(),
                    n = r[r.length - 1].node.sortableInfo.index,
                    o = t.newIndex + e,
                    i = t.newIndex;
                  if (!(o < 0 || o > n)) {
                    (t.prevIndex = i), (t.newIndex = o);
                    var a = (function (e, t, r) {
                        return e < r && e > t ? e - 1 : e > r && e < t ? e + 1 : e;
                      })(t.newIndex, t.prevIndex, t.index),
                      s = r.find(function (e) {
                        return e.node.sortableInfo.index === a;
                      }),
                      l = s.node,
                      u = t.containerScrollDelta,
                      c = s.boundingClientRect || xt(l, u),
                      d = s.translate || { x: 0, y: 0 },
                      p = c.top + d.y - u.top,
                      f = c.left + d.x - u.left,
                      h = i < o,
                      g = h && t.axis.x ? l.offsetWidth - t.width : 0,
                      m = h && t.axis.y ? l.offsetHeight - t.height : 0;
                    t.handleSortMove({ pageX: f + g, pageY: p + m, ignoreTransition: 0 === e });
                  }
                }),
                Ge(g(g(t)), "keyDrop", function (e) {
                  t.handleSortEnd(e), t.initialFocusedNode && t.initialFocusedNode.focus();
                }),
                Ge(g(g(t)), "handleKeyEnd", function (e) {
                  t.manager.active && t.keyDrop(e);
                }),
                Ge(g(g(t)), "isValidSortingTarget", function (e) {
                  var r = t.props.useDragHandle,
                    n = e.target,
                    o = mt(n, function (e) {
                      return null != e.sortableInfo;
                    });
                  return o && o.sortableInfo && !o.sortableInfo.disabled && (r ? Mt(n) : n.sortableInfo);
                }),
                (function (e) {
                  n(b)(
                    !(e.distance && e.pressDelay),
                    "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."
                  );
                })(e),
                (t.manager = new lt()),
                (t.events = { end: t.handleEnd, move: t.handleMove, start: t.handleStart }),
                t
              );
            }
            return (
              nt(r, t),
              Je(r, [
                {
                  key: "getChildContext",
                  value: function () {
                    return { manager: this.manager };
                  }
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this,
                      t = this.props.useWindowAsScrollContainer,
                      r = this.getContainer();
                    Promise.resolve(r).then(function (r) {
                      (e.container = r), (e.document = e.container.ownerDocument || document);
                      var n = e.props.contentWindow || e.document.defaultView || window;
                      (e.contentWindow = "function" == typeof n ? n() : n),
                        (e.scrollContainer = t
                          ? e.document.scrollingElement || e.document.documentElement
                          : St(e.container) || e.container),
                        (e.autoScroller = new Dt(e.scrollContainer, e.onAutoScroll)),
                        Object.keys(e.events).forEach(function (t) {
                          return dt[t].forEach(function (r) {
                            return e.container.addEventListener(r, e.events[t], !1);
                          });
                        }),
                        e.container.addEventListener("keydown", e.handleKeyDown);
                    });
                  }
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    var e = this;
                    this.helper && this.helper.parentNode && this.helper.parentNode.removeChild(this.helper),
                      this.container &&
                        (Object.keys(this.events).forEach(function (t) {
                          return dt[t].forEach(function (r) {
                            return e.container.removeEventListener(r, e.events[t]);
                          });
                        }),
                        this.container.removeEventListener("keydown", this.handleKeyDown));
                  }
                },
                {
                  key: "updateHelperPosition",
                  value: function (e) {
                    var t = this.props,
                      r = t.lockAxis,
                      o = t.lockOffset,
                      i = t.lockToContainerEdges,
                      a = t.transitionDuration,
                      s = t.keyboardSortingTransitionDuration,
                      l = void 0 === s ? a : s,
                      u = this.manager.isKeySorting,
                      c = e.ignoreTransition,
                      d = wt(e),
                      p = { x: d.x - this.initialOffset.x, y: d.y - this.initialOffset.y };
                    if (
                      ((p.y -= window.pageYOffset - this.initialWindowScroll.top),
                      (p.x -= window.pageXOffset - this.initialWindowScroll.left),
                      (this.translate = p),
                      i)
                    ) {
                      var f = (function (e) {
                          var t = e.height,
                            r = e.width,
                            o = e.lockOffset,
                            i = Array.isArray(o) ? o : [o, o];
                          n(b)(
                            2 === i.length,
                            "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",
                            o
                          );
                          var a = $e(i, 2),
                            s = a[0],
                            l = a[1];
                          return [_t({ height: t, lockOffset: s, width: r }), _t({ height: t, lockOffset: l, width: r })];
                        })({ height: this.height, lockOffset: o, width: this.width }),
                        h = $e(f, 2),
                        g = h[0],
                        m = h[1],
                        v = { x: this.width / 2 - g.x, y: this.height / 2 - g.y },
                        y = { x: this.width / 2 - m.x, y: this.height / 2 - m.y };
                      (p.x = vt(this.minTranslate.x + v.x, this.maxTranslate.x - y.x, p.x)),
                        (p.y = vt(this.minTranslate.y + v.y, this.maxTranslate.y - y.y, p.y));
                    }
                    "x" === r ? (p.y = 0) : "y" === r && (p.x = 0), u && l && !c && gt(this.helper, l), ht(this.helper, p);
                  }
                },
                {
                  key: "animateNodes",
                  value: function () {
                    var e = this.props,
                      t = e.transitionDuration,
                      r = e.hideSortableGhost,
                      n = e.onSortOver,
                      o = this.containerScrollDelta,
                      i = this.windowScrollDelta,
                      a = this.manager.getOrderedRefs(),
                      s = this.offsetEdge.left + this.translate.x + o.left,
                      l = this.offsetEdge.top + this.translate.y + o.top,
                      u = this.manager.isKeySorting,
                      c = this.newIndex;
                    this.newIndex = null;
                    for (var d = 0, p = a.length; d < p; d++) {
                      var f = a[d].node,
                        h = f.sortableInfo.index,
                        g = f.offsetWidth,
                        m = f.offsetHeight,
                        v = { height: this.height > m ? m / 2 : this.height / 2, width: this.width > g ? g / 2 : this.width / 2 },
                        y = u && h > this.index && h <= c,
                        b = u && h < this.index && h >= c,
                        x = { x: 0, y: 0 },
                        w = a[d].edgeOffset;
                      w || ((w = Et(f, this.container)), (a[d].edgeOffset = w), u && (a[d].boundingClientRect = xt(f, o)));
                      var E = d < a.length - 1 && a[d + 1],
                        _ = d > 0 && a[d - 1];
                      E && !E.edgeOffset && ((E.edgeOffset = Et(E.node, this.container)), u && (E.boundingClientRect = xt(E.node, o))),
                        h !== this.index
                          ? (t && gt(f, t),
                            this.axis.x
                              ? this.axis.y
                                ? b ||
                                  (h < this.index &&
                                    ((s + i.left - v.width <= w.left && l + i.top <= w.top + v.height) || l + i.top + v.height <= w.top))
                                  ? ((x.x = this.width + this.marginOffset.x),
                                    w.left + x.x > this.containerBoundingRect.width - v.width &&
                                      E &&
                                      ((x.x = E.edgeOffset.left - w.left), (x.y = E.edgeOffset.top - w.top)),
                                    null === this.newIndex && (this.newIndex = h))
                                  : (y ||
                                      (h > this.index &&
                                        ((s + i.left + v.width >= w.left && l + i.top + v.height >= w.top) ||
                                          l + i.top + v.height >= w.top + m))) &&
                                    ((x.x = -(this.width + this.marginOffset.x)),
                                    w.left + x.x < this.containerBoundingRect.left + v.width &&
                                      _ &&
                                      ((x.x = _.edgeOffset.left - w.left), (x.y = _.edgeOffset.top - w.top)),
                                    (this.newIndex = h))
                                : y || (h > this.index && s + i.left + v.width >= w.left)
                                ? ((x.x = -(this.width + this.marginOffset.x)), (this.newIndex = h))
                                : (b || (h < this.index && s + i.left <= w.left + v.width)) &&
                                  ((x.x = this.width + this.marginOffset.x), null == this.newIndex && (this.newIndex = h))
                              : this.axis.y &&
                                (y || (h > this.index && l + i.top + v.height >= w.top)
                                  ? ((x.y = -(this.height + this.marginOffset.y)), (this.newIndex = h))
                                  : (b || (h < this.index && l + i.top <= w.top + v.height)) &&
                                    ((x.y = this.height + this.marginOffset.y), null == this.newIndex && (this.newIndex = h))),
                            ht(f, x),
                            (a[d].translate = x))
                          : r && ((this.sortableGhost = f), ft(f, { opacity: 0, visibility: "hidden" }));
                    }
                    null == this.newIndex && (this.newIndex = this.index), u && (this.newIndex = c);
                    var S = u ? this.prevIndex : c;
                    n &&
                      this.newIndex !== S &&
                      n({
                        collection: this.manager.active.collection,
                        index: this.index,
                        newIndex: this.newIndex,
                        oldIndex: S,
                        isKeySorting: u,
                        nodes: a,
                        helper: this.helper
                      });
                  }
                },
                {
                  key: "getWrappedInstance",
                  value: function () {
                    return (
                      n(b)(
                        o.withRef,
                        "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"
                      ),
                      this.refs.wrappedInstance
                    );
                  }
                },
                {
                  key: "getContainer",
                  value: function () {
                    var e = this.props.getContainer;
                    return "function" != typeof e ? (0, l.findDOMNode)(this) : e(o.withRef ? this.getWrappedInstance() : void 0);
                  }
                },
                {
                  key: "render",
                  value: function () {
                    var t = o.withRef ? "wrappedInstance" : null;
                    return (0, s.createElement)(e, m({ ref: t }, ct(this.props, It)));
                  }
                },
                {
                  key: "helperContainer",
                  get: function () {
                    var e = this.props.helperContainer;
                    return "function" == typeof e ? e() : this.props.helperContainer || this.document.body;
                  }
                },
                {
                  key: "containerScrollDelta",
                  get: function () {
                    return this.props.useWindowAsScrollContainer
                      ? { left: 0, top: 0 }
                      : {
                          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                          top: this.scrollContainer.scrollTop - this.initialScroll.top
                        };
                  }
                },
                {
                  key: "windowScrollDelta",
                  get: function () {
                    return {
                      left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
                      top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
                    };
                  }
                }
              ]),
              r
            );
          })(s.Component)),
        Ge(t, "displayName", bt("sortableList", e)),
        Ge(t, "defaultProps", Nt),
        Ge(t, "propTypes", Lt),
        Ge(t, "childContextTypes", { manager: n(d).object.isRequired }),
        r
      );
    })((e) => {
      let t = e.props,
        r = e.onSelectLayerId;
      return n(s).createElement(
        "ol",
        { className: "layersbar--items" },
        t.layers.map((e, o) =>
          n(s).createElement(v_, {
            key: e.id,
            index: o,
            disabled: !t.canEdit,
            position: o,
            label: (e.text && e.text.text) || x_(e.shapeKey),
            shapeKey: e.shapeKey,
            selected: t.selectedLayerIds.includes(e.id),
            hovering: e.id === t.hoveringLayerId,
            onMouseDown: (n) => t.canEdit && r(n, e.id),
            onMouseOver: () => t.canEdit && t.onHoverLayer(e.id),
            onMouseOut: () => t.canEdit && t.onUnhoverLayer()
          })
        )
      );
    });
  class b_ extends s.Component {
    render() {
      return n(s).createElement(
        "div",
        { className: n(vi)("layersbar", this.props.className) },
        n(s).createElement("h2", null, (0, Sn.tr)("Layers")),
        n(s).createElement(
          "div",
          { onMouseDown: this.handleMouseDown },
          n(s).createElement(y_, {
            props: this.props,
            onSelectLayerId: this.handleSelectLayerId,
            onSortEnd: this.handleSortEnd,
            pressDelay: 1,
            helperClass: "layersbar--item--moving"
          })
        )
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "handleMouseDown", (e) => {
          e.stopPropagation();
        }),
        (0, ce.default)(this, "handleSortEnd", (e) => {
          let t = e.oldIndex,
            r = e.newIndex;
          this.props.onMoveLayer(t, r);
        }),
        (0, ce.default)(this, "handleSelectLayerId", (e, t) => {
          const r = es(e),
            n = !r && e.shiftKey;
          let o = this.props.selectedLayerIds;
          if (r) o = o.includes(t) ? o.filter((e) => e !== t) : o.concat([t]);
          else if (n) {
            let e = o[o.length - 1];
            if (e) {
              let r = 0,
                n = this.props.layers
                  .filter((n) => {
                    let o = 1 === r;
                    return (n.id !== t && n.id !== e) || (r += 1), 1 === r || o;
                  })
                  .map((e) => e.id);
              o = o.filter((e) => !n.includes(e)).concat(n);
            } else o = [t];
          } else o = [t];
          this.props.onSelectLayers(o);
        });
    }
  }
  b_.propTypes = {
    className: n(d).string,
    canEdit: n(d).bool.isRequired,
    layers: n(d).arrayOf(n(d).object.isRequired),
    selectedLayerIds: n(d).arrayOf(n(d).string.isRequired).isRequired,
    hoveringLayerId: n(d).string,
    onSelectLayers: n(d).func.isRequired,
    onHoverLayer: n(d).func.isRequired,
    onUnhoverLayer: n(d).func.isRequired
  };
  const x_ = (e) => {
    const t = Uo[e];
    return t ? t.title.toLowerCase() || t.type : e;
  };
  var w_ = b_;
  var E_ = le(
      (e) => {
        let t = e.editor.mode === Gt;
        return { layers: Di(e), selectedLayerIds: t ? Ai(e) : [], hoveringLayerId: t ? e.editor.hoveringLayerId : null, canEdit: t };
      },
      (e) => ({
        onSelectLayers: (t) => e(xr(t)),
        onHoverLayer: (t) => e(wr(t)),
        onUnhoverLayer: () => e(Er()),
        onMoveLayer: (t, r) => e($t(t, r))
      })
    )(w_),
    __ =
      ((ce = a("iPbYd")),
      (vi = a("gwJFa")),
      (d = a("3pr9z")),
      (s = a("7b0kr")),
      (Sn = a("5Xemj")),
      (s = a("7b0kr")),
      (e) => {
        let t = e.fill,
          r = void 0 === t ? "#fff" : t,
          o = e.scale,
          i = void 0 === o ? 1 : o;
        return n(s).createElement(
          "svg",
          { width: 15 * i, height: 17 * i, viewBox: "0 0 15 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          n(s).createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.4 2L9 0H0V17H2V10H7.6L8 12H15V2H9.4Z", fill: r })
        );
      });
  class S_ extends s.Component {
    render() {
      const e = this.props,
        t = e.className,
        r = (0, e.makeReportUrl)("EditorReportButton");
      return n(s).createElement(
        "div",
        { className: n(vi)("reportissue", t) },
        n(s).createElement(
          ua,
          { href: r, target: "_blank", rel: "noopener noreferrer" },
          (0, Sn.tr)("Any issues?"),
          n(s).createElement(__, { scale: 0.75, fill: "#888" })
        )
      );
    }
  }
  (0, ce.default)(S_, "propTypes", { className: n(d).string, makeReportUrl: n(d).func.isRequired });
  var O_ = le((e) => ({ makeReportUrl: Yi(e) }))(S_);
  (pe = a("ff4Ef")), (vi = a("gwJFa")), (d = a("3pr9z")), (s = a("7b0kr")), (Sn = a("5Xemj"));
  const k_ = (e) => {
    if (!e.showTourDemo) return null;
    const t = (0, pe.default)((0, s.useState)(!1), 2),
      r = t[0],
      o = t[1];
    return n(s).createElement(
      "div",
      { className: n(vi)("tour", e.className, { slideup: r }) },
      n(s).createElement(wi, {
        fill: "#161616",
        onClick: (t) => {
          t.preventDefault(),
            o(!0),
            window.setTimeout(() => {
              e.onClose();
            }, 80);
        }
      }),
      n(s).createElement(
        "p",
        null,
        n(s).createElement(_i, { label: "Hurray" }, "🎉"),
        " ",
        (0, Sn.tr)("Welcome to the GoFullPage Editor!")
      ),
      n(s).createElement(la, { className: "highlight", style: { width: "100%" }, onClick: e.onShowDemoModal }, (0, Sn.tr)("Watch Demo"))
    );
  };
  k_.propTypes = {
    className: n(d).string,
    showTourDemo: n(d).bool.isRequired,
    onClose: n(d).func.isRequired,
    onShowDemoModal: n(d).func.isRequired
  };
  var C_ = k_;
  var T_ = le(
      (e) => ({ showTourDemo: e.capture && e.capture.showTourDemo }),
      (e) => ({
        onClose: () => e((ve.default.set("show_editor_tour", !1), { type: Ne, payload: { showTourDemo: !1 } })),
        onShowDemoModal: () => e(Tr(!0))
      })
    )(C_),
    R_ = () =>
      n(s).createElement(
        "div",
        { className: "leftsidebar" },
        n(s).createElement(T_, { className: "leftsidebar-tight" }),
        n(s).createElement(E_, { className: "leftsidebar-wide" }),
        n(s).createElement(O_, { className: "leftsidebar-tight" })
      );
  (Ta = a("2kaV1")),
    (ce = a("iPbYd")),
    (d = a("3pr9z")),
    (s = a("7b0kr")),
    (Pe = a("8DwkQ")),
    (Sn = a("5Xemj")),
    (bi = a("kRWUw")),
    (HE = a("jIppf")),
    (r_ = a("eYuPW")),
    (t_ = a("3utT5"));
  class P_ extends s.Component {
    render() {
      const e = this.props,
        t = (e.capture, e.hasEdits),
        r = { transition: "opacity 500ms ease-in-out", opacity: this.state.closing ? 0 : 1 };
      let o, i, a;
      const l = (0, Sn.tr)("We’re excited to have you aboard.");
      return (
        t
          ? ((o = (0, Sn.tr)("Thank you for supporting GoFullPage")), (i = l), (a = (0, Sn.tr)("Continue editing")))
          : ((o = (0, Sn.tr)("Welcome to the official GoFullPage Editor!")), (i = l), (a = (0, Sn.tr)("Get started"))),
        n(s).createElement(
          n(s).Fragment,
          null,
          n(s).createElement(
            HE.default,
            { style: r, className: "welcomemodal big-modal", dimBg: !0, width: 540 },
            n(s).createElement("h2", { className: "br" }, o),
            n(s).createElement(r_.default, null),
            n(s).createElement("p", { className: "br15" }, i),
            n(s).createElement(
              "div",
              null,
              n(s).createElement("a", { className: "btn br15", href: "#", onClick: this.handleClose }, a),
              n(s).createElement(
                "p",
                { className: "dim" },
                (0, Sn.tr)("or") + " ",
                n(s).createElement(
                  "a",
                  { href: Pe.DEMO_URL, target: "_blank", rel: "noopener noreferrer" },
                  (0, Sn.tr)("watch a demo video")
                )
              )
            ),
            n(s).createElement(
              "a",
              { className: "close close-topright", href: "#", onClick: this.handleClose },
              n(s).createElement(bi.default, { fill: "#CCC" })
            )
          ),
          n(s).createElement(t_.default, { style: r })
        )
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "handleClose", (e) => {
          e.preventDefault(),
            this.state.closing ||
              (this.setState({ closing: !0 }),
              window.setTimeout(() => {
                this.props.onClose();
              }, 500));
        }),
        (this.state = { closing: !1 });
    }
  }
  (0, ce.default)(P_, "propTypes", { onClose: n(d).func.isRequired, hasEdits: n(d).bool.isRequired }),
    (0, ce.default)(P_, "defaultProps", { hasEdits: !1 });
  const j_ = {
      defaults: {
        baseLeft: 0,
        baseTop: 0,
        outerWidth: 0,
        outerHeight: 0,
        xOffset: 0,
        yOffset: 0,
        gutterLeft: 0,
        gutterRight: 0,
        gutterTop: 0,
        gutterBottom: 0
      },
      isDiff: (e, t) =>
        Object.entries(t).some((t) => {
          let r = (0, pe.default)(t, 2),
            n = r[0],
            o = r[1];
          return e[n] !== o;
        }),
      create: (e) => {
        let t = {};
        return Object.keys(j_.defaults).forEach((r) => (t[r] = e[r])), t;
      }
    },
    M_ = "Editor.computedOffsets",
    D_ = [je.EVT_REFOCUS, je.EVT_MODAL_CLOSE];
  class L_ extends s.Component {
    componentDidMount() {
      const e = this.props.capture,
        t = e.src,
        r = e.url,
        n = e.pixelDensity,
        o = e.title;
      t && this.props.loadBase(t, n, r, o),
        this._renderCanvas(),
        window.addEventListener(je.EVT_MOUSE_ZOOM, this._zoomMouseListener, !1),
        window.addEventListener(je.EVT_CHANGE_ZOOM, this._zoomListener, !1),
        window.addEventListener("mouseup", this._windowMouseUpListener, !1),
        (this._debouncedResizeEvt = (0, we.debounce)(this._resizeEvt, 200)),
        je.RESIZE_EVENTS.forEach((e) => window.addEventListener(e, this._debouncedResizeEvt, !1)),
        window.setTimeout(this._resizeEvt, 60),
        this._focus(),
        D_.forEach((e) => window.addEventListener(e, this._focus, !1)),
        Te.default.addListener(this._userListener),
        yi.on(je.EVT_ADD_LAYER, this._layerSpotlightListener),
        (0, Ta.onNotifyText)(this._notifyTextListener);
      const i = this.props,
        a = i.undosCount,
        s = i.redosCount,
        l = this.props.globalShapeDefaults,
        u = l.borderDefaults,
        c = l.templateDefaults;
      0 === a &&
        0 === s &&
        (u && u && u.enabled && u.enabled.on && this.props.onEditBorder(!1, u),
        c && c.template && c.template.templateId !== On.BROWSER_TEMPLATE_ID_NONE && this.props.onEditTemplate(c));
      const d = {
        animFrameId: null,
        stop: () => {
          window.cancelAnimationFrame(d.animFrameId);
        },
        loop: () => {
          d.animFrameId = window.requestAnimationFrame(() => {
            if (this.state.isMouseDown && this.nonreactState.lastMouse && !this.state.isSpacebarDown) {
              let e = this.nonreactState.lastMouse,
                t = e.pageX,
                r = e.pageY;
              const n = this.canvasParentRef.current;
              (t -= n.offsetLeft), (r -= n.offsetTop);
              const o = this._scrollElt(),
                i = o.offsetWidth,
                a = o.offsetHeight,
                s = Math.min(t, i - t),
                l = Math.min(r, a - r),
                u = s === t ? -1 : 1,
                c = l === r ? -1 : 1;
              if (s <= 30) {
                let e = 3;
                s <= 15 && ((e = 10), s <= 5 && (e = 20)), (o.scrollLeft += e * u);
              }
              if (l <= 30) {
                let e = 3;
                l <= 15 && ((e = 10), l <= 5 && (e = 20)), (o.scrollTop += e * c);
              }
            }
            return d.loop();
          });
        }
      };
      d.loop(), (this._edgeScroller = d);
    }
    componentWillUnmount() {
      var e;
      window.removeEventListener(je.EVT_MOUSE_ZOOM, this._zoomMouseListener),
        window.removeEventListener(je.EVT_CHANGE_ZOOM, this._zoomListener),
        window.removeEventListener("mouseup", this._windowMouseUpListener),
        je.RESIZE_EVENTS.forEach((e) => window.removeEventListener(e, this._debouncedResizeEvt)),
        D_.forEach((e) => window.removeEventListener(e, this._focus)),
        (e = M_),
        window.clearTimeout(zE[e]),
        window.cancelAnimationFrame(WE[e]),
        yi.off(je.EVT_ADD_LAYER, this._layerSpotlightListener),
        (0, Ta.offNotifyText)(this._notifyTextListener),
        Te.default.removeListener(this._userListener),
        this._edgeScroller.stop();
    }
    componentDidUpdate() {
      this._resizeEvt(),
        this.state.computedOffsets === this.nonreactState.throttledComputedOffsets &&
          ((this.nonreactState.throttledComputedOffsets = null), this.handleMouseMove());
    }
    _mousePosition(e) {
      let t = e || this.nonreactState.lastMouse,
        r = t.pageX,
        n = t.pageY;
      e && (this.nonreactState.lastMouse = { pageX: r, pageY: n });
      let o = this._zoomData(),
        i = (o.zoom, o.pxPerModel),
        a = this.canvasParentRef.current;
      return (
        (r -= a.offsetLeft - this.nonreactState.scroll.scrollLeft),
        (n -= a.offsetTop - this.nonreactState.scroll.scrollTop),
        { x: Math.round(r / i - this.state.computedOffsets.xOffset, 10), y: Math.round(n / i - this.state.computedOffsets.yOffset, 10) }
      );
    }
    _selectedLayers(e, t) {
      e = e || this.props;
      const r = !0 === t ? e.selectedLayerIds.filter((e) => e !== je.CROP_ID) : e.selectedLayerIds;
      return this._getLayers(r, e);
    }
    _getLayers(e, t) {
      return (
        (t = t || this.props),
        e.map((e) => (e === je.MULTI_LAYER_ID ? t.multiLayer : e === je.CROP_ID ? t.cropLayer : t.layers.find((t) => t.id === e)))
      );
    }
    _zoomData() {
      let e = this.props.zoom;
      return { zoom: e, pxPerModel: e / 100 };
    }
    _zoomChecker() {
      let e = this._lastZoomCoords;
      if (e && e.newZoom === this.props.zoom) {
        const t = this.props,
          r = t.browserTemplate,
          n = t.cropBox,
          o = t.zoom,
          i = (0, Mi.getCenterCoords)(r, n, o),
          a = i.centerX,
          s = i.centerY,
          l = o / 100,
          u = this._scrollElt();
        if (u) {
          const t = Math.floor((e.centerX - a) * l),
            r = Math.floor((e.centerY - s) * l);
          t && (u.scrollLeft += t), r && (u.scrollTop += r);
        }
        this._lastZoomCoords = void 0;
      }
    }
    _copyPaste(e, t, r, n) {
      const o = [],
        i = [],
        a = {};
      e.forEach((e) => (a[e.id] = e));
      this.props.layers
        .map((e) => a[e.id])
        .filter((e) => void 0 !== e)
        .reverse()
        .forEach((e) => {
          const n = {};
          po.forEach((t) => {
            let r = t.name;
            e[r] && (n[r] = e[r]);
          });
          const a = (0, $a.getBounds)(e),
            s = (0, $a.generateLayerId)();
          i.push(s), o.push(Yt(s, e.shapeKey, a.x1 + t, a.y1 + r, a.x2 + t, a.y2 + r, n));
        }),
        this.props.onBatchAddLayer(o, !0, n),
        this.props.onSelectLayers(i);
    }
    _renderCanvas() {
      let e = this.canvasOverlayRef.current;
      if (e) {
        let t = this,
          r = t.props,
          n = t.state;
        window.cancelAnimationFrame(this._lastAnimFrame),
          (this._lastAnimFrame = window.requestAnimationFrame(() =>
            KE(
              e.getContext("2d"),
              e.width,
              e.height,
              n.snapPairsCoords,
              r.zoom / 100,
              n.computedOffsets.xOffset,
              n.computedOffsets.yOffset,
              r.mode,
              r.cropBox,
              r.cropLayer,
              n.mouseSelectBox
            )
          ));
      }
    }
    render() {
      const e = this.props,
        t = this.state,
        r = {
          editor: !0,
          "cursor-zoom": t.isZoomMode && !t.isZoomOut,
          "cursor-zoomout": t.isZoomMode && t.isZoomOut,
          "cursor-move-canvas": t.isSpacebarDown
        },
        o = this._zoomData().pxPerModel,
        i = t.computedOffsets;
      let a,
        l,
        u,
        c,
        d = 0,
        p = 0;
      if (e.base && void 0 !== e.base.pixelDensity) {
        const l = i.outerWidth,
          f = i.outerHeight;
        (d = l * o), (p = f * o), (a = { width: `${l}px`, height: `${f}px`, transform: `scale(${o})` });
        const h = i.baseLeft,
          g = i.baseTop,
          m = i.xOffset,
          v = i.yOffset;
        u = n(s).createElement(ba, {
          base: e.base,
          baseLeft: h,
          baseTop: g,
          border: e.border,
          browserTemplate: e.browserTemplate,
          cropBox: e.cropBox,
          onSetError: e.onSetError,
          onClick: this.handleClickImageBase
        });
        this._isMouseSelect();
        const y = e.multiLayer ? e.multiLayer.id : 1 === e.selectedLayerIds.length ? e.selectedLayerIds[0] : null;
        c = [];
        let b = e.layers;
        e.selectedLayerIds.includes(je.CROP_ID) && (b = [e.cropLayer].concat(b)), e.multiLayer && (b = [...b, e.multiLayer]);
        let x = b.length;
        for (; 0 !== x; ) {
          x--;
          let r = b[x];
          c.push(
            n(s).createElement(
              ka,
              (0, Ue.default)(
                (0, de.default)(
                  {
                    key: r.id,
                    spotlight: r.id === t.spotlightLayerId,
                    xOffset: m,
                    yOffset: v,
                    pxPerModel: o,
                    basePixelDensity: e.base.pixelDensity,
                    base: e.base
                  },
                  r
                ),
                {
                  selected: r.id === y,
                  hovering: r.id === e.hoveringLayerId,
                  secondarySelected: e.selectedLayerIds.includes(r.id),
                  onMouseDown: this.handleLayerMouseDown,
                  onHoverLayer: e.onHoverLayer,
                  onUnhoverLayer: e.onUnhoverLayer,
                  onChangeProperties: e.onChangeProperties
                }
              )
            )
          );
        }
        t.selectedControlPointId
          ? (r[`cursor-${t.selectedControlPointId.toLowerCase()}`] = !0)
          : t.isMouseDown && e.selectedLayerIds.length && (r["cursor-dragging"] = !0);
      }
      if (e.border && i.outerWidth > 0) {
        const t = i.gutterLeft,
          r = i.gutterRight,
          o = i.gutterTop,
          a = i.gutterBottom,
          u = i.outerWidth,
          c = i.outerHeight,
          d = e.border.padding.padding || 0,
          p = e.border.stroke.width || 0,
          f = {
            position: "absolute",
            boxSizing: "border-box",
            left: `${t - d - p}px`,
            top: `${o - d - p}px`,
            width: `${u - t - r + 2 * d + 2 * p}px`,
            height: `${c - o - a + 2 * d + 2 * p}px`,
            background: e.border.fill.fill || "transparent",
            border: `${p}px solid ${e.border.stroke.color || "transparent"}`
          };
        l = n(s).createElement("div", { className: "document-border imagebase-border", onClick: this.handlePaddingBorderClick, style: f });
      }
      const f = t.cssHeight ? { height: t.cssHeight } : null,
        h = {
          rows: [
            {
              text: (0, Sn.tr)("Export Image As…"),
              shortcut: e.capture.lastDlType !== Pe.DL_TYPE_PDF ? Qa({ cmd: !0, shift: !0, char: "E" }) : void 0,
              disabled: !e.user.isSubOk,
              onClick: (e) => yi.trigger(je.EVT_DO_EXPORT, { saveAs: !0, dlType: Pe.DL_TYPE_IMAGE })
            },
            {
              text: (0, Sn.tr)("Export PDF As…"),
              shortcut: e.capture.lastDlType === Pe.DL_TYPE_PDF ? Qa({ cmd: !0, shift: !0, char: "E" }) : void 0,
              disabled: !e.user.isSubOk,
              onClick: (e) => yi.trigger(je.EVT_DO_EXPORT, { saveAs: !0, dlType: Pe.DL_TYPE_PDF })
            },
            {
              text: (0, Sn.tr)("Copy Image"),
              shortcut: Qa({ cmd: !0, alt: !0, char: "E" }),
              disabled: !e.user.isSubOk,
              onClick: (e) => yi.trigger(je.EVT_DO_EXPORT, { copy: !0 })
            },
            { divider: !0 },
            { text: (0, Sn.tr)("Help / Shortcuts"), onClick: (t) => e.onToggleHelp(!0) }
          ]
        };
      return (
        e.user.isSubOk ||
          ((h.title = (0, Sn.tr)("Sign up for Premium in order to export your edits.")),
          (h.rows = [
            { text: (0, Sn.tr)("Sign Up"), onClick: (e) => qa() },
            { text: (0, Sn.tr)("Sign In"), onClick: (e) => Wa() },
            { text: (0, Sn.tr)("Learn more"), onClick: (e) => window.open(Pe.PREMIUM_URL, "_blank", "noopener") },
            { text: (0, Sn.tr)("Go back"), onClick: (t) => (window.location = TE(e.capture)) },
            { divider: !0 },
            ...h.rows
          ])),
        n(s).createElement(
          "div",
          {
            className: n(vi)(r),
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            onMouseMove: this.handleMouseMove,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            onContextMenu: this.handleContextMenu,
            tabIndex: 1,
            style: f,
            ref: this.editorRef
          },
          n(s).createElement(jE, null),
          n(s).createElement(R_, null),
          n(s).createElement(
            "div",
            { ref: this.canvasParentRef, className: "canvas", onMouseUp: this.handleCanvasMouseUp, onScroll: this.handleScroll },
            n(s).createElement(
              "div",
              { className: "canvas-inner-wrap", style: { width: `${d}px`, height: `${p}px` } },
              n(s).createElement("div", { className: "canvas-inner", style: a }, l, u, c)
            ),
            n(s).createElement("canvas", {
              ref: this.canvasOverlayRef,
              className: "canvas-overlay",
              width: d,
              height: p,
              style: { width: `${d}px`, height: `${p}px` }
            })
          ),
          n(s).createElement(IE, null),
          this.props.showHelp
            ? n(s).createElement(p_, { onToggle: this.props.onToggleHelp })
            : this.props.showUpdateTheme
            ? n(s).createElement(UE, { onToggle: this.props.onToggleUpdateTheme })
            : this.props.capture.showWelcome
            ? n(s).createElement(P_, { onClose: this.props.onCloseWelcome, hasEdits: this.props.undosCount > 0 })
            : this.props.showDemoModal
            ? n(s).createElement(e_, { onToggle: this.props.onToggleDemoModal })
            : this.props.showHeaderUpdatedModal
            ? n(s).createElement(o_, { onClose: this.props.onCloseHeaderUpdatedModal, triggerShowTourDemo: this.props.triggerShowTourDemo })
            : null,
          n(s).createElement(Ki, null),
          e.notifyText && n(s).createElement(Ta.default, { text: e.notifyText }),
          e.clickDialog &&
            n(s).createElement(XE.default, {
              pageX: e.clickDialog.pageX,
              pageY: e.clickDialog.pageY,
              onClose: e.onCloseClickDialog,
              onUpdatePosition: (t, r) => e.onOpenClickDialog(t, r),
              cfg: h
            })
        )
      );
    }
    constructor(e) {
      super(e),
        (0, ce.default)(this, "_notifyTextListener", (e) => {
          let t = e.text;
          this.props.setNotifyText(t);
        }),
        (0, ce.default)(this, "_userListener", (e) => {
          this.props.onUpdateLoginState(e);
        }),
        (0, ce.default)(this, "_focus", () => {
          this.editorRef.current && this.editorRef.current.focus();
        }),
        (0, ce.default)(this, "_resizeEvt", () => {
          this._hackFixHorizontalScrollBar();
          let e = !1,
            t = this.canvasParentRef.current;
          if (t && this.props.base && this.props.base.width) {
            const r = this,
              n = r.props,
              o = r.state;
            let i = (0, Mi.computeBaseOffsets)(
              n.base.width,
              n.base.height,
              n.base.pixelDensity,
              n.cropBox,
              n.browserTemplate,
              n.zoom,
              n.layers,
              n.border,
              Mi.DEFAULT_BASE_OFFSET,
              t.clientWidth || t.offsetWidth,
              t.clientHeight || t.offsetHeight
            );
            if (j_.isDiff(i, o.computedOffsets)) {
              const t = j_.create(i);
              this._isMovingLayers()
                ? qE(
                    M_,
                    (e) => {
                      me.default.debug("[Editor.resizeEvt] computedOffsets"),
                        (this.nonreactState.throttledComputedOffsets = t),
                        this.setState({ computedOffsets: t });
                    },
                    2e3
                  )
                : (me.default.debug("[Editor.resizeEvt] computedOffsets"), (e = !0), this.setState({ computedOffsets: t }));
            }
          }
          e || (this._zoomChecker(), this._renderCanvas());
        }),
        (0, ce.default)(this, "_hackFixHorizontalScrollBar", () => {
          const e = rs().height;
          e && window.innerWidth < 1050
            ? this.state.cssHeight || this.setState({ cssHeight: window.innerHeight - e + "px" })
            : this.state.cssHeight && this.setState({ cssHeight: "" });
        }),
        (0, ce.default)(this, "_layerSpotlightListener", (e) => {
          e &&
            e.id &&
            window.setTimeout(() => {
              this.setState({ spotlightLayerId: e.id }),
                window.setTimeout(() => {
                  this.setState({ spotlightLayerId: null });
                }, 300);
            }, 100);
        }),
        (0, ce.default)(this, "handleMouseDown", (e) => {
          if (ts(e)) e.preventDefault();
          else if (
            ((this.nonreactState.lastMouseDownCoords = { x: e.pageX, y: e.pageY }),
            !e.target.classList.contains("canvas") || !is(e, e.target))
          ) {
            if (this.state.isSpacebarDown) return this._spacebarMouseDown(e);
            if (this._isMouseSelect()) {
              const t = this._mousePosition(e),
                r = t.x,
                n = t.y,
                o = { mouseSelectBox: { x1: r, y1: n, x2: r, y2: n }, mouseSelectAdded: [] };
              e.shiftKey ||
                (null === this.state.selectedControlPointId && 0 === this.props.selectedLayerIds.length) ||
                (this.props.onDeselectLayers(), (o.selectedControlPointId = null)),
                this.setState(o);
            }
          }
        }),
        (0, ce.default)(this, "handleLayerMouseDown", (e, t, r) => {
          const n = this.props;
          if (ts(e)) return;
          if (this.state.isSpacebarDown) return this._spacebarMouseDown(e);
          if (!this._isMouseSelectOrCrop(t)) return;
          const o = this._mousePosition(e),
            i = o.x,
            a = o.y,
            s = this._getLayers([t])[0],
            l = n.multiLayer || s;
          if (l) {
            this.nonreactState.dragDidCopy = !1;
            let o = n.selectedLayerIds,
              s = !1;
            if (
              (t !== je.MULTI_LAYER_ID &&
                (e.shiftKey
                  ? o.includes(t)
                    ? r || ((o = o.filter((e) => e !== t)), (s = !0))
                    : (o = o.concat([t]))
                  : o.includes(t) || (o = [t]),
                o !== n.selectedLayerIds && n.onSelectLayers(o)),
              s)
            )
              return;
            return this.setState({
              isMouseDown: !0,
              mouseLastX: i,
              mouseLastY: a,
              selectedControlPointId: r,
              mouseSelectBox: null,
              mouseSelectAdded: null,
              mouseBox: Bo(l.line || l.box),
              snapPoints: H_(n.cropBox, n.cropLayer, n.layers, o)
            });
          }
        }),
        (0, ce.default)(
          this,
          "_spacebarMouseDown",
          (e) => ((this.nonreactState.moveCanvasLastPos = { x: e.pageX, y: e.pageY }), this.setState({ isMouseDown: !0 }))
        ),
        (0, ce.default)(this, "handlePaddingBorderClick", (e) => {
          if (this._isMouseSelect()) {
            const t = this.nonreactState.lastMouseDownCoords,
              r = t.x,
              n = t.y;
            Math.abs(r - e.pageX) <= 2 &&
              Math.abs(n - e.pageY) <= 2 &&
              (e.preventDefault(), e.stopPropagation(), this.props.onEditBorder(!1, this.props.globalShapeDefaults.borderDefaults));
          }
        }),
        (0, ce.default)(this, "handleClickImageBase", (e) => {
          if (this._isMouseSelect && this.props.browserTemplate) {
            const t = this.nonreactState.lastMouseSelectBox;
            if (!t || (t.x1 === t.x2 && t.y1 === t.y2)) {
              const t = this.props.browserTemplate,
                r = this._mousePosition(e).y;
              (r < 0 || (t._borders.bottom && r > t.offsets.fullHeight - t._borders.bottom.size)) &&
                (e.preventDefault(), e.stopPropagation(), this.props.onEditTemplate());
            }
          }
        }),
        (0, ce.default)(this, "handleMouseUp", (e) => {
          if (!this.state.isSpacebarDown && !this._isMouseSelectOrCrop()) return;
          this.nonreactState.lastMouseSelectBox = this.state.mouseSelectBox;
          let t = {
            isMouseDown: !1,
            selectedControlPointId: null,
            mouseSelectBox: null,
            mouseSelectAdded: null,
            mouseBox: null,
            snapPoints: null,
            snapPairsCoords: null
          };
          Object.entries(t).some((e) => {
            let t = (0, pe.default)(e, 2),
              r = t[0],
              n = t[1];
            return this.state[r] !== n;
          }) && this.setState(t);
          (0, Me.checkCanDispatch)(e) && (0, Me.default)(window, je.EVT_MOUSEUP);
        }),
        (0, ce.default)(this, "handleMouseMove", (e) => {
          if (this.state.mouseSelectBox) {
            const t = this,
              r = t.props,
              n = t.state,
              o = this._mousePosition(e),
              i = o.x,
              a = o.y,
              s = Object.assign({}, n.mouseSelectBox, { x2: i, y2: a });
            let l = n.mouseSelectAdded;
            const u = (0, Mi.findOverlappingLayers)(s, r.layers).map((e) => e.id),
              c = u.filter((e) => !r.selectedLayerIds.includes(e)),
              d = l.filter((e) => !u.includes(e));
            return (
              (c.length || d.length) && r.onSelectLayers(I_(r.selectedLayerIds, c, d)),
              void this.setState({ mouseSelectBox: s, mouseSelectAdded: I_(l, c, d) })
            );
          }
          if (this._isMovingCanvas() && e) {
            const t = this.nonreactState.moveCanvasLastPos,
              r = t.x,
              n = t.y,
              o = e.pageX,
              i = e.pageY;
            this.nonreactState.moveCanvasLastPos = { x: o, y: i };
            const a = this._scrollElt();
            if (a) {
              const e = o - r,
                t = i - n;
              (a.scrollLeft -= e), (a.scrollTop -= t);
            }
            return;
          }
          if (!this._isMovingLayers()) return;
          const t = this._mousePosition(e),
            r = t.x,
            o = t.y;
          if (this.nonreactState.isAltPressed && !this.nonreactState.dragDidCopy && !this.state.selectedControlPointId) {
            this.nonreactState.dragDidCopy = !0;
            const e = r - this.state.mouseLastX,
              t = o - this.state.mouseLastY,
              n = this._selectedLayers(null, !0);
            return this._copyPaste(n, e, t, "duplicate_drag"), void this.setState({ mouseLastX: r, mouseLastY: o });
          }
          this.setState((e, t) => {
            const i = { mouseLastX: r, mouseLastY: o },
              a = r - e.mouseLastX,
              s = o - e.mouseLastY,
              l = e.mouseBox,
              u = e.snapPoints;
            n(Be).ok(l, "No state.mouseBox in drag!"), n(Be).ok(u, "No state.snapPoints in drag!");
            const c = this._selectedLayers(t),
              d = t.multiLayer || c[0],
              p = Boolean(t.multiLayer),
              f = Boolean(d.line),
              h = e.selectedControlPointId,
              g = Ko(h, f),
              m = f
                ? this._mouseMoveLine(l, d.line, a, s, h, g, u)
                : this._mouseMoveBox(l, d.box, a, s, h, g, u, Boolean(Uo[d.shapeKey].isSquare), Boolean(d.text && d.text.autoHeight)),
              v = m.groupName,
              y = m.updates,
              b = m.newMouseBox,
              x = m.newCtrlId,
              w = m.snapPairsCoords,
              E = [];
            if (p) {
              const e = { x: y.x - d.box.x, y: y.y - d.box.y, width: y.width - d.box.width, height: y.height - d.box.height };
              (e.x1 = e.x),
                (e.x2 = e.x),
                (e.y1 = e.y),
                (e.y2 = e.y),
                c.forEach((r) => {
                  const n = r.line ? "line" : "box",
                    o = {};
                  Object.entries(r[n]).forEach((t) => {
                    let r = (0, pe.default)(t, 2),
                      n = r[0],
                      i = r[1];
                    o[n] = i + e[n];
                  }),
                    E.push(LE(ni, t.base, r)(r.id, r.shapeKey, n, o, p));
                });
            } else E.push(LE(ni, t.base, d)(d.id, d.shapeKey, v, y, p));
            return t.onBatchChangeProperties(E), Object.assign(i, { selectedControlPointId: x || h, mouseBox: b, snapPairsCoords: w });
          });
        }),
        (0, ce.default)(this, "_mouseMoveLine", (e, t, r, n, o, i, a) => {
          e = Bo(e);
          let s = [];
          Object.entries(i).forEach((t) => {
            let o = (0, pe.default)(t, 2),
              i = o[0],
              a = o[1];
            e[i] += ("dx" === a.dim ? r : n) * a.delta;
          });
          let l = Bo(e),
            u = new Set(),
            c = A_(l.x1, l.x2),
            d = A_(l.y1, l.y2);
          if (0 !== c && c < 15 && 0 !== d) {
            let e = (0, pe.default)(i.x1 ? ["x1", "x2"] : ["x2", "x1"], 2),
              t = e[0],
              r = e[1];
            (l[t] = l[r]), u.add(t);
          } else if (0 !== d && d < 15 && 0 !== c) {
            let e = (0, pe.default)(i.y1 ? ["y1", "y2"] : ["y2", "y1"], 2),
              t = e[0],
              r = e[1];
            (l[t] = l[r]), u.add(t);
          }
          let p = ["x1", "x2"],
            f = ["y1", "y2"],
            h = [],
            g = (0, pe.default)(F_(l), 2),
            m = g[0],
            v = g[1];
          return (
            p.some((e) => u.has(e)) || h.push({ others: a.xSnaps, snaps: m, snapAttrs: p }),
            f.some((e) => u.has(e)) || h.push({ others: a.ySnaps, snaps: v, snapAttrs: f }),
            h.length && (s = B_(l, o, i, h)),
            { groupName: "line", updates: l, newMouseBox: e, snapPairsCoords: s }
          );
        }),
        (0, ce.default)(this, "_mouseMoveBox", (e, t, r, o, i, a, s, l, u) => {
          let c = t;
          e = Bo(e);
          let d = !1;
          Object.entries(a).forEach((t) => {
            let n = (0, pe.default)(t, 2),
              i = n[0],
              a = n[1];
            e[i] += ("dx" === a.dim ? r : o) * a.delta;
          });
          let p = Bo(e),
            f = (0, pe.default)(U_(p), 2),
            h = f[0],
            g = f[1],
            m = [
              { others: s.xSnaps, snaps: h, snapAttrs: ["x", "width"] },
              { others: s.ySnaps, snaps: g, snapAttrs: ["y", "height"] }
            ],
            v = B_(p, i, a, m);
          if (0 === p.width || (l && 0 === p.height)) {
            let t = !l && e.width ? e : c,
              r = t.width,
              n = t.x;
            (p.width = r), (p.x = n), (v = v.filter((e) => "y" !== e.adjustAxis));
          }
          if (0 === p.height || (l && 0 === p.width)) {
            let t = !l && e.height ? e : c,
              r = t.height,
              n = t.y;
            (p.height = r), (p.y = n), (v = v.filter((e) => "x" !== e.adjustAxis));
          }
          p.width < 0 && ((p.width *= -1), (p.x -= p.width)), p.height < 0 && ((p.height *= -1), (p.y -= p.height));
          let y = {};
          if (
            (e.width < 0 && (Object.assign(y, Go.width), (d = !0), (e.width *= -1), (e.x -= e.width)),
            e.height < 0 && (Object.assign(y, Go.height), (d = !0), (e.height *= -1), (e.y -= e.height)),
            d &&
              (i = i
                .split("")
                .map((e) => y[e] || e)
                .join("")),
            l)
          )
            if (["width", "height"].every((e) => e in a)) {
              let e = p.width,
                t = p.height;
              if (e !== t) {
                let r = 1,
                  o = t * r,
                  i = e / r,
                  s = { dx: o > e ? 0 : o - e, dy: i > t ? 0 : i - t },
                  l = JSON.stringify(a);
                s.dx && (n(Be).ok("width" in a, `isSquare no width: ${l}`), (s.dx *= a.width.delta)),
                  s.dy && (n(Be).ok("height" in a, `isSquare height ${l}`), (s.dy *= a.height.delta)),
                  Object.entries(a).forEach((e) => {
                    let t = (0, pe.default)(e, 2),
                      r = t[0],
                      n = t[1],
                      o = s[n.dim] * n.delta;
                    p[r] += o;
                    let i = "dx" === n.dim ? "y" : "x";
                    v = v.filter((e) => e.adjustAxis !== i);
                  });
              }
            } else {
              "width" in a ? (p.height = p.width) : (p.width = p.height);
            }
          return { groupName: "box", updates: p, newMouseBox: e, newCtrlId: i, snapPairsCoords: v };
        }),
        (0, ce.default)(this, "handleKeyDown", (e) => {
          const t = this.props,
            r = this.state,
            n = es(e),
            o = e.shiftKey;
          if (
            (18 === e.keyCode && (this.nonreactState.isAltPressed = !0),
            r.isZoomMode && (e.metaKey && n ? this._toggleZoomMode() : 18 === e.keyCode && this.setState({ isZoomOut: !0 })),
            n)
          )
            switch (e.keyCode) {
              case 90:
                return e.preventDefault(), void (o ? t.onRedo() : t.onUndo());
              case 89:
                return e.preventDefault(), void t.onRedo();
              case 67: {
                if (e.shiftKey) return;
                if (window.getSelection) {
                  if (window.getSelection().toString().trim()) return;
                }
                e.preventDefault();
                const t = this.nonreactState.clipboard;
                return void Object.assign(t, { offset: 0, layers: this._selectedLayers(null, !0) });
              }
              case 86:
                if ((e.preventDefault(), this.nonreactState.clipboard.layers)) {
                  const e = this.nonreactState.clipboard;
                  (e.offset += e.delta), this._copyPaste(e.layers, e.offset, e.offset, "paste_key");
                }
                return;
              case 68: {
                e.preventDefault();
                const t = this._selectedLayers(null, !0);
                return void this._copyPaste(t, 50, 50, "duplicate_key");
              }
              case 69: {
                e.preventDefault();
                const t = e.altKey ? { copy: !0 } : e.shiftKey ? { saveAs: !0 } : {};
                return void yi.trigger(je.EVT_DO_EXPORT, t);
              }
              case 83:
                return e.preventDefault(), void (0, Ta.triggerNotifyText)(`😎 ${(0, Sn.tr)("All edits are auto-saved")}`, 2e3);
              case 65: {
                e.preventDefault();
                const r = t.layers.map((e) => e.id);
                return void t.onSelectLayers(r);
              }
              case 189:
              case 187:
              case 48: {
                let r;
                switch ((e.preventDefault(), e.keyCode)) {
                  case 189:
                    r = Aw(t.zoom);
                    break;
                  case 187:
                    r = Nw(t.zoom);
                    break;
                  case 48:
                    r = 100;
                }
                return void (r !== t.zoom && (this._recordLastZoomCoords(r), t.onChangeZoom(r, r < t.zoom, "keyboard")));
              }
            }
          if (90 === e.keyCode && !n) return void (r.isZoomMode || this.setState({ isZoomMode: !0, isZoomOut: Boolean(e.altKey) }));
          if (32 === e.keyCode)
            return e.preventDefault(), void (r.isSpacebarDown || r.isMouseDown || this.setState({ isSpacebarDown: !0 }));
          if (!this._isMouseSelectOrCrop()) return;
          let i = 0,
            a = 0;
          switch (e.keyCode) {
            case 38:
              a = -1;
              break;
            case 40:
              a = 1;
              break;
            case 37:
              i = -1;
              break;
            case 39:
              i = 1;
          }
          if ((e.shiftKey && ((i *= 10), (a *= 10)), i || a)) {
            e.preventDefault();
            const r = [];
            this._selectedLayers().forEach((e) => {
              let n = Boolean(e.line),
                o = n ? "line" : "box",
                s = Bo(e[o]);
              (n
                ? [
                    { delta: i, attrs: ["x1", "x2"] },
                    { delta: a, attrs: ["y1", "y2"] }
                  ]
                : [
                    { delta: i, attrs: ["x"] },
                    { delta: a, attrs: ["y"] }
                  ]
              ).forEach((e) => {
                let t = e.delta;
                return e.attrs.forEach((e) => (s[e] += t));
              }),
                r.push(LE(ni, t.base, e)(e.id, e.shapeKey, o, s, Boolean(t.multiLayer)));
            }),
              t.onBatchChangeProperties(r);
          }
        }),
        (0, ce.default)(this, "handleKeyUp", (e) => {
          const t = this.props,
            r = this.state,
            n = es(e),
            o = e.shiftKey,
            i = r.isSpacebarDown,
            a = n || o || i;
          if (
            (18 === e.keyCode && (this.nonreactState.isAltPressed = !1),
            r.isZoomOut && 18 === e.keyCode && this.setState({ isZoomOut: !1 }),
            90 === e.keyCode && this.state.isZoomMode)
          )
            this._toggleZoomMode();
          else if ((i && 32 === e.keyCode && this.setState({ isSpacebarDown: !1, isMouseDown: !1 }), r.isZoomMode))
            (27 !== e.keyCode && 86 !== e.keyCode) || this._toggleZoomMode();
          else if ((191 === e.keyCode && o) || (this.props.showHelp && 27 === e.keyCode)) this.props.onToggleHelp(!this.props.showHelp);
          else {
            if (!a) {
              const t = this._isCrop();
              switch (e.keyCode) {
                case 67:
                  return void (t
                    ? this.props.disableCrop()
                    : this.props.base && this.props.base.width && this.props.enableCrop(this.props.base.width, this.props.base.height));
                case 27:
                  return void this.props.disableCrop();
                case 13:
                  if (t) return void this.props.disableCrop();
                  break;
                case 85:
                  return void this.props.onEditTemplate();
                case 80:
                  return void this.props.onEditBorder(!0, this.props.globalShapeDefaults.borderDefaults);
              }
            }
            if (this._isMouseSelect()) {
              switch (e.keyCode) {
                case 27:
                case 13:
                  return void (t.selectedLayerIds.length && t.onDeselectLayers());
                case 8:
                case 46:
                  return void (t.selectedLayerIds && t.onRemoveLayers(t.selectedLayerIds));
              }
              if (!a) {
                const t = e.key ? e.key.toUpperCase() : String.fromCharCode(e.keyCode),
                  r = Object.values(Uo).find((e) => e.insertKey === t);
                if (r) return void yi.trigger(je.EVT_INSERT_SHAPE, r);
              }
            }
          }
        }),
        (0, ce.default)(this, "handleCanvasMouseUp", (e) => {
          if (this.state.isZoomMode) {
            const t = this.state.isZoomOut,
              r = t ? Aw(this.props.zoom) : Nw(this.props.zoom);
            if (r !== this.props.zoom) {
              const n = this._mousePosition(e),
                o = n.x,
                i = n.y;
              this._recordLastZoomCoords(r, o, i), this.props.onChangeZoom(r, t, "mouse");
            }
          } else;
        }),
        (0, ce.default)(this, "_windowMouseUpListener", (e) => {
          const t = e.pageX || 0,
            r = e.pageY || 0;
          (t < 0 || t > window.innerWidth || r < 0 || r > window.innerHeight) && this.handleMouseUp(e);
        }),
        (0, ce.default)(this, "handleContextMenu", (e) => {
          e.preventDefault();
          !!e.target.closest(".canvas") && this.props.onOpenClickDialog(e.pageX - window.scrollX, e.pageY - window.scrollY);
        }),
        (0, ce.default)(this, "handleScroll", (e) => {
          const t = e.currentTarget;
          this.nonreactState.scroll = { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
        }),
        (0, ce.default)(this, "_isMouseSelect", () => !this.state.isSpacebarDown && !this.state.isZoomMode && this.props.mode === Gt),
        (0, ce.default)(this, "_isCrop", () => !this.state.isSpacebarDown && !this.state.isZoomMode && this.props.mode === Kt),
        (0, ce.default)(this, "_isMouseSelectOrCrop", (e) =>
          e === je.CROP_ID || this.props.selectedLayerIds.includes(je.CROP_ID) ? this._isCrop() : this._isMouseSelect()
        ),
        (0, ce.default)(
          this,
          "_isMovingLayers",
          () => this.state.isMouseDown && (this.props.selectedLayerIds.length, !0) && !this.state.isSpacebarDown
        ),
        (0, ce.default)(this, "_isMovingCanvas", () => this.state.isMouseDown && this.state.isSpacebarDown),
        (0, ce.default)(this, "_scrollElt", () => this.canvasParentRef.current),
        (0, ce.default)(this, "_zoomMouseListener", (e) => this._toggleZoomMode()),
        (0, ce.default)(this, "_toggleZoomMode", () => {
          this.setState((e, t) => ({ isZoomMode: !e.isZoomMode, isZoomOut: !1 }));
        }),
        (0, ce.default)(this, "_zoomListener", (e) => {
          if (!this.props.base || !this.props.base.img) return;
          const t = e.detail.zoom,
            r = this._recordLastZoomCoords(t);
          (0, me.default)(`[Editor._zoomListener] ${JSON.stringify(r)}`);
        }),
        (0, ce.default)(this, "_recordLastZoomCoords", (e, t, r) => {
          const n = this.props.zoom;
          if (void 0 === t || void 0 === r) {
            const e = this.props,
              i = e.browserTemplate,
              a = e.cropBox;
            var o;
            (t = (o = (0, Mi.getCenterCoords)(i, a, n)).centerX), (r = o.centerY);
          }
          const i = { centerX: t, centerY: r, zoom: n, newZoom: e };
          return (this._lastZoomCoords = i), i;
        }),
        (this.state = {
          computedOffsets: j_.defaults,
          isSpacebarDown: !1,
          isZoomMode: !1,
          isZoomOut: !1,
          isMouseDown: !1,
          selectedControlPointId: null,
          mouseSelectBox: null,
          mouseSelectAdded: null,
          mouseLastX: null,
          mouseLastY: null,
          mouseBox: null,
          snapPoints: null,
          snapPairsCoords: null
        }),
        (this.nonreactState = {
          clipboard: { offset: 0, layers: null, delta: 50 },
          scroll: { scrollLeft: 0, scrollTop: 0 },
          throttledComputedOffsets: null,
          lastMouse: { pageX: 0, pageY: 0 },
          moveCanvasLastPos: { pageX: 0, pageY: 0 },
          isAltPressed: !1,
          dragDidCopy: !0,
          lastMouseDownCoords: { pageX: 0, pageY: 0 },
          lastMouseSelectBox: null
        }),
        (this.editorRef = n(s).createRef()),
        (this.canvasParentRef = n(s).createRef()),
        (this.canvasOverlayRef = n(s).createRef());
    }
  }
  const A_ = (e, t) => Math.abs(t - e),
    N_ = (e, t) => e.push.apply(e, t),
    I_ = (e, t, r) => (t.length && (e = e.concat(t)), r.length && (e = e.filter((e) => !r.includes(e))), e),
    H_ = (e, t, r, n) => {
      let o = [],
        i = [];
      if (e) {
        let t = e.width,
          r = e.height,
          n = 15,
          a = [-n, 0, Math.floor(t / 2), t, t + n].map((t) => t + e.x),
          s = [-n, 0, Math.floor(r / 2), r, r + n].map((t) => t + e.y);
        o.push.apply(
          o,
          a.map((e) => ({ pixel: e, exact: e, axis: "x", otherDims: s }))
        ),
          i.push.apply(
            i,
            s.map((e) => ({ pixel: e, exact: e, axis: "y", otherDims: a }))
          );
      }
      return (
        r.forEach((e) => {
          if (n && n.includes(e.id)) return;
          let t = (0, pe.default)(e.line ? F_(e.line, e) : U_(e.box, e), 2),
            r = t[0],
            a = t[1];
          N_(o, r), N_(i, a);
        }),
        { xSnaps: o, ySnaps: i }
      );
    },
    F_ = (e, t) => {
      let r = (e.x1 + e.x2) / 2,
        n = (e.y1 + e.y2) / 2;
      return [
        [
          { pixel: e.x1, exact: e.x1, axis: "x", otherDims: [e.y1], dir: "1", type: "point", layer: t },
          { pixel: e.x2, exact: e.x2, axis: "x", otherDims: [e.y2], dir: "2", type: "point", layer: t },
          { pixel: Math.floor(r), exact: r, axis: "x", otherDims: [Math.floor(n)], type: "center-point", layer: t }
        ],
        [
          { pixel: e.y1, exact: e.y1, axis: "y", otherDims: [e.x1], dir: "1", type: "point", layer: t },
          { pixel: e.y2, exact: e.y2, axis: "y", otherDims: [e.x2], dir: "2", type: "point", layer: t },
          { pixel: Math.floor(n), exact: n, axis: "y", otherDims: [Math.floor(r)], type: "center-point", layer: t }
        ]
      ];
    },
    U_ = (e, t) => {
      let r = e.x + e.width / 2,
        n = e.y + e.height / 2,
        o = e.x + e.width,
        i = e.y + e.height,
        a = [e.y, i],
        s = [e.x, o];
      return [
        [
          { pixel: Math.floor(r), exact: r, axis: "x", otherDims: a, type: "center", layer: t },
          { pixel: e.x, exact: e.x, axis: "x", otherDims: a, dir: "W", type: "left", layer: t },
          { pixel: o, exact: o, axis: "x", otherDims: a, dir: "E", type: "right", layer: t }
        ],
        [
          { pixel: Math.floor(n), exact: n, axis: "y", otherDims: s, type: "center", layer: t },
          { pixel: e.y, exact: e.y, axis: "y", dir: "N", otherDims: s, type: "top", layer: t },
          { pixel: i, exact: i, axis: "y", dir: "S", otherDims: s, type: "bottom", layer: t }
        ]
      ];
    },
    B_ = (e, t, r, n) => {
      let o = [],
        i = { x: 0, y: 0 };
      return (
        n.forEach((n) => {
          let a = n.others,
            s = n.snaps,
            l = n.snapAttrs;
          t && (s = s.filter((e) => e.dir && -1 !== t.indexOf(e.dir)));
          let u =
            ((c = (e) => {
              return (
                (t = (t) => (A_(e.pixel, t.pixel) < 8 ? [t, e] : void 0)),
                s.reduce((e, r) => {
                  let n = t(r);
                  return null != n && e.push(n), e;
                }, [])
              );
              var t;
            }),
            a.map(c).reduce((e, t) => e.concat(t), []));
          var c;
          let d = null,
            p = null,
            f = null,
            h = null;
          if (
            (u.forEach((e) => {
              let t = ((e, t) => {
                  let r = null,
                    n = null,
                    o = null;
                  return (
                    e.forEach((e) => {
                      t.forEach((t) => {
                        let i = A_(e, t);
                        (null === r || i < r) && ((r = i), (n = e), (o = t));
                      });
                    }),
                    { diff: r, val1: n, val2: o }
                  );
                })(e[0].otherDims, e[1].otherDims),
                r = t.diff,
                n = t.val1,
                o = t.val2;
              (null === d || r < d) && ((d = r), (p = e), (f = n), (h = o));
            }),
            p)
          ) {
            let t = (0, pe.default)(p, 2),
              n = t[0],
              a = t[1],
              s = a.pixel - n.pixel,
              u = n.axis;
            (i[u] = s),
              o.push(
                "x" === u
                  ? { x1: a.pixel, y1: f, x2: a.pixel, y2: h, adjustAxis: "y" }
                  : { x1: f, y1: a.pixel, x2: h, y2: a.pixel, adjustAxis: "x" }
              ),
              l.forEach((t) => {
                if (r[t]) {
                  let n = s * r[t].delta;
                  e[t] += n;
                }
              });
          }
        }),
        o.forEach((e) => {
          i[e.adjustAxis] && (e[`${e.adjustAxis}1`] += i[e.adjustAxis]);
        }),
        o
      );
    };
  var z_ = L_;
  var W_ = le(
    (e) => ({
      base: e.base,
      capture: e.capture,
      error: e.error.error,
      browserTemplate: Wi(e),
      layers: Di(e),
      zoom: e.editor.zoom,
      selectedLayerIds: Ai(e),
      hoveringLayerId: Ni(e),
      multiLayer: qi(e),
      mode: e.editor.mode,
      cropLayer: Ii(e),
      cropBox: Ui(e),
      border: Hi(e),
      showHelp: e.editor.showHelp || !1,
      showUpdateTheme: e.editor.showUpdateTheme || !1,
      showDemoModal: e.editor.showDemoModal || !1,
      showHeaderUpdatedModal: e.editor.showHeaderUpdatedModal || !1,
      undosCount: e.undos.past.length,
      redosCount: e.undos.future.length,
      globalShapeDefaults: $i(e),
      notifyText: e.editor.notifyText,
      clickDialog: e.editor.clickDialog,
      user: Gi(e)
    }),
    (e) => ({
      loadBase: (t, r, n, o) => e(bn(t, r, n, o)),
      enableCrop: (t, r) => e(Rr(t, r)),
      disableCrop: () => e(Pr()),
      onChangeZoom: (t, r, n) => (u.default.event("editor_zoom", r ? "out" : "in", n, t), e(_r(t))),
      onSelectLayers: (t) => e(xr(t)),
      onDeselectLayers: () => e({ type: tr, payload: { selectedLayerIds: [] } }),
      onHoverLayer: (t) => e(wr(t)),
      onUnhoverLayer: () => e(Er()),
      onChangeProperties: (t, r, n, o, i) => e(ni(t, r, n, o, i)),
      onBatchChangeProperties: (t) => e(ri(t)),
      onBatchAddLayer: (t, r, n) => (u.default.event("editor_insert", "batch", n), e(Vt(t, r))),
      onRemoveLayers: (t) => e({ type: Wt, payload: { ids: t } }),
      onEditBorder: (t, r) => e(Sr(t, r)),
      onEditTemplate: (t) => e(Or(t)),
      onSetError: (t) => e(_n(t)),
      onUndo: () => (u.default.event("editor_undo", "undo", "keyboard"), e(Gr.ActionCreators.undo())),
      onRedo: () => (u.default.event("editor_undo", "redo", "keyboard"), e(Gr.ActionCreators.redo())),
      onToggleHelp: (t) => e(kr(t)),
      onToggleUpdateTheme: (t) => e(Cr(t)),
      onToggleDemoModal: (t) => e(Tr(t)),
      setNotifyText: (t) => e(jr(t)),
      onOpenClickDialog: (t, r) => e(Mr(t, r)),
      onCloseClickDialog: () => e({ type: vr, payload: { clickDialog: null } }),
      onCloseHeaderUpdatedModal: () => (
        Ce.default.set("didUpdatedHeaderModal", !0).catch((e) => me.default.error(e)),
        e({ type: yr, payload: { showHeaderUpdatedModal: !1 } })
      ),
      triggerShowTourDemo: () => e((ve.default.set("show_editor_tour", !0), { type: Ie, payload: { showTourDemo: !0 } })),
      onUpdateLoginState: (t) => e(He(t))
    })
  )(z_);
  var q_ = (0, li.createMuiTheme)({
    typography: { useNextVariants: !0 },
    overrides: { MuiTooltip: { tooltip: { fontSize: "12px", backgroundColor: "#000000e4" } } }
  });
  class V_ extends s.Component {
    render() {
      return n(s).createElement(li.MuiThemeProvider, { theme: q_ }, n(s).createElement(W_, null));
    }
  }
  (de = a("jBCXK")), (Ue = a("hGGFE")), (s = a("7b0kr"));
  var Y_ = (e) => {
    let t = e.hasError;
    const r = {};
    return (
      void 0 !== t && t && (r.fill = "#F00"),
      n(s).createElement(
        Ca,
        (0, Ue.default)((0, de.default)({}, r), { scale: 3, style: { display: "block", margin: "20vh auto 0", opacity: 0.2 } })
      )
    );
  };
  class $_ extends s.Component {
    componentDidMount() {
      this._mounted = !0;
      const e = (0, _e.getQueryString)();
      let t = e.id,
        r = e.e;
      be()
        .catch(
          (e) => (
            me.default.error("ERROR CHECKING", e), this._mounted && this.setState({ loaderError: !0 }), (0, Ee.sleep)(5e3).then(() => !1)
          )
        )
        .then((e) =>
          e
            ? Dr(t, r).catch(
                (e) => (
                  me.default.error("Caught error loading initial state"), me.default.error(e), (e.permanent = !0), { error: { error: e } }
                )
              )
            : ((window.location = chrome.extension.getURL("/capture.html")), null)
        )
        .then((e) => {
          if (((0, me.default)("initial state?", e), null !== e)) {
            const t = si(e);
            this._mounted && this.setState({ store: t });
          }
        });
    }
    componentWillUnmount() {
      this._mounted = !1;
    }
    render() {
      return (
        (0, me.default)("[STORE_LOADER.render]", this.state.store),
        this.state.store
          ? n(s).createElement(h, { store: this.state.store }, n(s).createElement(V_, null))
          : n(s).createElement(Y_, { hasError: this.state.loaderError })
      );
    }
    constructor(e) {
      super(e), (this.state = { store: null, loaderError: !1 });
    }
  }
  u.default.pageview(), (0, l.render)(n(s).createElement($_, null), document.getElementById("root"));
})();
//# sourceMappingURL=editor.40420757.js.map
