(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([
  [1],
  {
    104: function (t, e, r) {
      "use strict";
      var n = r(338),
        o = {
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
        l = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        r = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};
      function h(t) {
        return n.isMemo(t) ? i : a[t.$$typeof] || o;
      }
      (a[n.ForwardRef] = r), (a[n.Memo] = i);
      var f = Object.defineProperty,
        m = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        b = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        g = Object.prototype;
      function E(t, e, r) {
        if ("string" != typeof e) {
          g && (n = d(e)) && n !== g && E(t, n, r);
          for (var n, o = m(e), i = (p && (o = o.concat(p(e))), h(t)), a = h(e), s = 0; s < o.length; ++s) {
            var c = o[s];
            if (!(l[c] || (r && r[c]) || (a && a[c]) || (i && i[c]))) {
              var u = b(e, c);
              try {
                f(t, c, u);
              } catch (t) {}
            }
          }
        }
        return t;
      }
      t.exports = E;
    },
    12: function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return n;
      }),
        r.d(e, "a", function () {
          return o;
        }),
        r.d(e, "c", function () {
          return i;
        });
      var s = r(8),
        c = r(2),
        e = r(104),
        u = r.n(e),
        l = r(60);
      function h(t) {
        return t.displayName || t.name || "Component";
      }
      var e = c.createContext(null),
        f = e.Consumer,
        n = e.Provider,
        o = e;
      function i(n, t) {
        var t = t || {},
          e = t.intlPropName,
          o = void 0 === e ? "intl" : e,
          e = t.forwardRef,
          i = void 0 !== e && e,
          e = t.enforceContext,
          a = void 0 === e || e,
          r = function (r) {
            return c.createElement(f, null, function (t) {
              a && Object(l.c)(t), ((e = {})[o] = t);
              var e,
                t = e;
              return c.createElement(
                n,
                Object(s.a)({}, r, t, {
                  ref: i ? r.forwardedRef : null
                })
              );
            });
          };
        return (
          (r.displayName = "injectIntl(".concat(h(n), ")")),
          (r.WrappedComponent = n),
          i
            ? u()(
                c.forwardRef(function (t, e) {
                  return c.createElement(
                    r,
                    Object(s.a)({}, t, {
                      forwardedRef: e
                    })
                  );
                }),
                n
              )
            : u()(r, n)
        );
      }
    },
    171: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return g;
      }),
        r.d(e, "c", function () {
          return T;
        }),
        r.d(e, "b", function () {
          return O;
        });
      var g,
        E = r(43),
        y = r(94);
      function v(t) {
        return t.length < 2
          ? t
          : t.reduce(function (t, e) {
              var r = t[t.length - 1];
              return r && r.type === g.literal && e.type === g.literal ? (r.value += e.value) : t.push(e), t;
            }, []);
      }
      function T(t) {
        return "function" == typeof t;
      }
      function O(t, e, r, n, o, i, a) {
        if (1 === t.length && Object(E.e)(t[0]))
          return [
            {
              type: g.literal,
              value: t[0].value
            }
          ];
        for (var s = [], c = 0, u = t; c < u.length; c++) {
          var l = u[c];
          if (Object(E.e)(l))
            s.push({
              type: g.literal,
              value: l.value
            });
          else if (Object(E.i)(l))
            "number" == typeof i &&
              s.push({
                type: g.literal,
                value: r.getNumberFormat(e).format(i)
              });
          else {
            var h = l.value;
            if (!(o && h in o)) throw new y.e(h, a);
            var f,
              h = o[h];
            if (Object(E.b)(l))
              (h && "string" != typeof h && "number" != typeof h) || (h = "string" == typeof h || "number" == typeof h ? String(h) : ""),
                s.push({
                  type: "string" == typeof h ? g.literal : g.object,
                  value: h
                });
            else if (Object(E.c)(l)) {
              var m = "string" == typeof l.style ? n.date[l.style] : Object(E.d)(l.style) ? l.style.parsedOptions : void 0;
              s.push({
                type: g.literal,
                value: r.getDateTimeFormat(e, m).format(h)
              });
            } else if (Object(E.l)(l)) {
              var m = "string" == typeof l.style ? n.time[l.style] : Object(E.d)(l.style) ? l.style.parsedOptions : n.time.medium;
              s.push({
                type: g.literal,
                value: r.getDateTimeFormat(e, m).format(h)
              });
            } else if (Object(E.f)(l))
              (m = "string" == typeof l.style ? n.number[l.style] : Object(E.g)(l.style) ? l.style.parsedOptions : void 0) &&
                m.scale &&
                (h *= m.scale || 1),
                s.push({
                  type: g.literal,
                  value: r.getNumberFormat(e, m).format(h)
                });
            else {
              if (Object(E.k)(l)) {
                var p = l.children,
                  b = l.value,
                  d = o[b];
                if (!T(d)) throw new y.d(b, "function", a);
                b = d(
                  O(p, e, r, n, o, i).map(function (t) {
                    return t.value;
                  })
                );
                Array.isArray(b) || (b = [b]),
                  s.push.apply(
                    s,
                    b.map(function (t) {
                      return {
                        type: "string" == typeof t ? g.literal : g.object,
                        value: t
                      };
                    })
                  );
              }
              if (Object(E.j)(l)) {
                if (!(f = l.options[h] || l.options.other)) throw new y.c(l.value, h, Object.keys(l.options), a);
                s.push.apply(s, O(f.value, e, r, n, o));
              } else if (Object(E.h)(l)) {
                if (!(f = l.options["=".concat(h)])) {
                  if (!Intl.PluralRules)
                    throw new y.b(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      y.a.MISSING_INTL_API,
                      a
                    );
                  d = r
                    .getPluralRules(e, {
                      type: l.pluralType
                    })
                    .select(h - (l.offset || 0));
                  f = l.options[d] || l.options.other;
                }
                if (!f) throw new y.c(l.value, h, Object.keys(l.options), a);
                s.push.apply(s, O(f.value, e, r, n, o, h - (l.offset || 0)));
              }
            }
          }
        }
        return v(s);
      }
      ((e = g = g || {})[(e.literal = 0)] = "literal"), (e[(e.object = 1)] = "object");
    },
    22: function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return n;
      }),
        r.d(e, "a", function () {
          return i;
        }),
        r.d(e, "h", function () {
          return c;
        }),
        r.d(e, "d", function () {
          return h;
        }),
        r.d(e, "f", function () {
          return p;
        }),
        r.d(e, "c", function () {
          return g;
        }),
        r.d(e, "e", function () {
          return v;
        }),
        r.d(e, "g", function () {
          return _;
        });
      var n,
        o,
        e = r(8),
        i =
          (((r = n = n || {}).FORMAT_ERROR = "FORMAT_ERROR"),
          (r.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER"),
          (r.INVALID_CONFIG = "INVALID_CONFIG"),
          (r.MISSING_DATA = "MISSING_DATA"),
          (r.MISSING_TRANSLATION = "MISSING_TRANSLATION"),
          (o = Error),
          Object(e.b)(a, o),
          a);
      function a(t, e, r) {
        var n = this,
          r = r ? (r instanceof Error ? r : new Error(String(r))) : void 0;
        return (
          ((n =
            o.call(
              this,
              "[@formatjs/intl Error "
                .concat(t, "] ")
                .concat(e, " \n")
                .concat(r ? "\n".concat(r.message, "\n").concat(r.stack) : "")
            ) || this).code = t),
          "function" == typeof Error.captureStackTrace && Error.captureStackTrace(n, a),
          n
        );
      }
      (s = i), Object(e.b)(u, s);
      var s,
        c = u;
      function u(t, e) {
        return s.call(this, n.UNSUPPORTED_FORMATTER, t, e) || this;
      }
      (l = i), Object(e.b)(f, l);
      var l,
        h = f;
      function f(t, e) {
        return l.call(this, n.INVALID_CONFIG, t, e) || this;
      }
      (m = i), Object(e.b)(b, m);
      var m,
        p = b;
      function b(t, e) {
        return m.call(this, n.MISSING_DATA, t, e) || this;
      }
      (d = i), Object(e.b)(E, d);
      var d,
        g = E;
      function E(t, e, r) {
        return d.call(this, n.FORMAT_ERROR, "".concat(t, " \nLocale: ").concat(e, "\n"), r) || this;
      }
      (y = g), Object(e.b)(T, y);
      var y,
        v = T;
      function T(t, e, r, n) {
        t =
          y.call(
            this,
            ""
              .concat(t, " \nMessageID: ")
              .concat(null == r ? void 0 : r.id, "\nDefault Message: ")
              .concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ")
              .concat(null == r ? void 0 : r.description, " \n"),
            e,
            n
          ) || this;
        return (t.descriptor = r), t;
      }
      (O = i), Object(e.b)(S, O);
      var O,
        _ = S;
      function S(t, e) {
        e =
          O.call(
            this,
            n.MISSING_TRANSLATION,
            'Missing message: "'
              .concat(t.id, '" for locale "')
              .concat(e, '", using ')
              .concat(t.defaultMessage ? "default message" : "id", " as fallback.")
          ) || this;
        return (e.descriptor = t), e;
      }
    },
    338: function (t, e, r) {
      "use strict";
      t.exports = r(339);
    },
    339: function (t, e, r) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        a = n ? Symbol.for("react.fragment") : 60107,
        s = n ? Symbol.for("react.strict_mode") : 60108,
        c = n ? Symbol.for("react.profiler") : 60114,
        u = n ? Symbol.for("react.provider") : 60109,
        l = n ? Symbol.for("react.context") : 60110,
        h = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        m = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        b = n ? Symbol.for("react.suspense_list") : 60120,
        d = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        E = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        v = n ? Symbol.for("react.responder") : 60118,
        T = n ? Symbol.for("react.scope") : 60119;
      function O(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case o:
              switch ((t = t.type)) {
                case h:
                case f:
                case a:
                case c:
                case s:
                case p:
                  return t;

                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case m:
                    case g:
                    case d:
                    case u:
                      return t;

                    default:
                      return e;
                  }
              }

            case i:
              return e;
          }
        }
      }
      function _(t) {
        return O(t) === f;
      }
      (e.AsyncMode = h),
        (e.ConcurrentMode = f),
        (e.ContextConsumer = l),
        (e.ContextProvider = u),
        (e.Element = o),
        (e.ForwardRef = m),
        (e.Fragment = a),
        (e.Lazy = g),
        (e.Memo = d),
        (e.Portal = i),
        (e.Profiler = c),
        (e.StrictMode = s),
        (e.Suspense = p),
        (e.isAsyncMode = function (t) {
          return _(t) || O(t) === h;
        }),
        (e.isConcurrentMode = _),
        (e.isContextConsumer = function (t) {
          return O(t) === l;
        }),
        (e.isContextProvider = function (t) {
          return O(t) === u;
        }),
        (e.isElement = function (t) {
          return "object" == typeof t && null !== t && t.$$typeof === o;
        }),
        (e.isForwardRef = function (t) {
          return O(t) === m;
        }),
        (e.isFragment = function (t) {
          return O(t) === a;
        }),
        (e.isLazy = function (t) {
          return O(t) === g;
        }),
        (e.isMemo = function (t) {
          return O(t) === d;
        }),
        (e.isPortal = function (t) {
          return O(t) === i;
        }),
        (e.isProfiler = function (t) {
          return O(t) === c;
        }),
        (e.isStrictMode = function (t) {
          return O(t) === s;
        }),
        (e.isSuspense = function (t) {
          return O(t) === p;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" == typeof t ||
            "function" == typeof t ||
            t === a ||
            t === f ||
            t === c ||
            t === s ||
            t === p ||
            t === b ||
            ("object" == typeof t &&
              null !== t &&
              (t.$$typeof === g ||
                t.$$typeof === d ||
                t.$$typeof === u ||
                t.$$typeof === l ||
                t.$$typeof === m ||
                t.$$typeof === y ||
                t.$$typeof === v ||
                t.$$typeof === T ||
                t.$$typeof === E))
          );
        }),
        (e.typeOf = O);
    },
    36: function (t, e, r) {
      "use strict";
      function n(t, e) {
        var r = e && e.cache ? e.cache : m,
          n = e && e.serializer ? e.serializer : h;
        return (e && e.strategy ? e.strategy : c)(t, {
          cache: r,
          serializer: n
        });
      }
      function i(t) {
        return null == t || "number" == typeof t || "boolean" == typeof t;
      }
      function o(t, e, r, n) {
        var r = i(n) ? n : r(n),
          o = e.get(r);
        return void 0 === o && ((o = t.call(this, n)), e.set(r, o)), o;
      }
      function a(t, e, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          r = r(n),
          o = e.get(r);
        return void 0 === o && ((o = t.apply(this, n)), e.set(r, o)), o;
      }
      function s(t, e, r, n, o) {
        return r.bind(e, t, n, o);
      }
      function c(t, e) {
        return s(t, this, 1 === t.length ? o : a, e.cache.create(), e.serializer);
      }
      function u(t, e) {
        return s(t, this, a, e.cache.create(), e.serializer);
      }
      function l(t, e) {
        return s(t, this, o, e.cache.create(), e.serializer);
      }
      r.d(e, "a", function () {
        return n;
      }),
        r.d(e, "b", function () {
          return p;
        });
      var h = function () {
        return JSON.stringify(arguments);
      };
      function f() {
        this.cache = Object.create(null);
      }
      (f.prototype.get = function (t) {
        return this.cache[t];
      }),
        (f.prototype.set = function (t, e) {
          this.cache[t] = e;
        });
      var m = {
          create: function () {
            return new f();
          }
        },
        p = {
          variadic: u,
          monadic: l
        };
    },
    365: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return n;
      });
      function n(t, e, r) {
        if ((void 0 === r && (r = Error), !t)) throw new r(e);
      }
    },
    366: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return l;
      });
      var o = r(8),
        e = r(43),
        n = r(36),
        i = r(171);
      function a(r, n) {
        return n
          ? Object(o.a)(
              Object(o.a)(Object(o.a)({}, r || {}), n || {}),
              Object.keys(r).reduce(function (t, e) {
                return (t[e] = Object(o.a)(Object(o.a)({}, r[e]), n[e] || {})), t;
              }, {})
            )
          : r;
      }
      function s(r, n) {
        return n
          ? Object.keys(r).reduce(
              function (t, e) {
                return (t[e] = a(r[e], n[e])), t;
              },
              Object(o.a)({}, r)
            )
          : r;
      }
      function c(r) {
        return {
          create: function () {
            return {
              get: function (t) {
                return r[t];
              },
              set: function (t, e) {
                r[t] = e;
              }
            };
          }
        };
      }
      function u(t) {
        return (
          void 0 === t &&
            (t = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }),
          {
            getNumberFormat: Object(n.a)(
              function () {
                for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new ((t = Intl.NumberFormat).bind.apply(t, Object(o.d)([void 0], e, !1)))();
              },
              {
                cache: c(t.number),
                strategy: n.b.variadic
              }
            ),
            getDateTimeFormat: Object(n.a)(
              function () {
                for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new ((t = Intl.DateTimeFormat).bind.apply(t, Object(o.d)([void 0], e, !1)))();
              },
              {
                cache: c(t.dateTime),
                strategy: n.b.variadic
              }
            ),
            getPluralRules: Object(n.a)(
              function () {
                for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new ((t = Intl.PluralRules).bind.apply(t, Object(o.d)([void 0], e, !1)))();
              },
              {
                cache: c(t.pluralRules),
                strategy: n.b.variadic
              }
            )
          }
        );
      }
      Object.defineProperty(h, "defaultLocale", {
        get: function () {
          return (
            h.memoizedDefaultLocale || (h.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), h.memoizedDefaultLocale
          );
        },
        enumerable: !1,
        configurable: !0
      }),
        (h.memoizedDefaultLocale = null),
        (h.resolveLocale = function (t) {
          var e = Intl.NumberFormat.supportedLocalesOf(t);
          return 0 < e.length ? new Intl.Locale(e[0]) : new Intl.Locale("string" == typeof t ? t : t[0]);
        }),
        (h.__parse = e.m),
        (h.formats = {
          number: {
            integer: {
              maximumFractionDigits: 0
            },
            currency: {
              style: "currency"
            },
            percent: {
              style: "percent"
            }
          },
          date: {
            short: {
              month: "numeric",
              day: "numeric",
              year: "2-digit"
            },
            medium: {
              month: "short",
              day: "numeric",
              year: "numeric"
            },
            long: {
              month: "long",
              day: "numeric",
              year: "numeric"
            },
            full: {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          time: {
            short: {
              hour: "numeric",
              minute: "numeric"
            },
            medium: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            },
            long: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            },
            full: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            }
          }
        });
      var l = h;
      function h(t, e, r, n) {
        var o = this;
        if (
          (void 0 === e && (e = h.defaultLocale),
          (this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }),
          (this.format = function (t) {
            var t = o.formatToParts(t);
            return 1 === t.length
              ? t[0].value
              : (t = t.reduce(function (t, e) {
                  return (
                    t.length && e.type === i.a.literal && "string" == typeof t[t.length - 1]
                      ? (t[t.length - 1] += e.value)
                      : t.push(e.value),
                    t
                  );
                }, [])).length <= 1
              ? t[0] || ""
              : t;
          }),
          (this.formatToParts = function (t) {
            return Object(i.b)(o.ast, o.locales, o.formatters, o.formats, t, void 0, o.message);
          }),
          (this.resolvedOptions = function () {
            return {
              locale: o.resolvedLocale.toString()
            };
          }),
          (this.getAst = function () {
            return o.ast;
          }),
          (this.locales = e),
          (this.resolvedLocale = h.resolveLocale(e)),
          "string" == typeof t)
        ) {
          if (((this.message = t), !h.__parse))
            throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
          this.ast = h.__parse(t, {
            ignoreTag: null == n ? void 0 : n.ignoreTag,
            locale: this.resolvedLocale
          });
        } else this.ast = t;
        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
        (this.formats = s(h.formats, r)), (this.formatters = (n && n.formatters) || u(this.formatterCache));
      }
    },
    37: function (t, e, r) {
      "use strict";
      r.d(e, "d", function () {
        return n;
      }),
        r.d(e, "a", function () {
          return o;
        }),
        r.d(e, "c", function () {
          return h;
        }),
        r.d(e, "b", function () {
          return a;
        }),
        r.d(e, "e", function () {
          return s;
        });
      var c = r(8),
        u = r(366),
        l = r(36),
        i = r(22);
      function n(r, t, n) {
        return (
          void 0 === n && (n = {}),
          t.reduce(function (t, e) {
            return e in r ? (t[e] = r[e]) : e in n && (t[e] = n[e]), t;
          }, {})
        );
      }
      var o = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function (t) {},
        onWarn: function (t) {}
      };
      function h() {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        };
      }
      function f(r) {
        return {
          create: function () {
            return {
              get: function (t) {
                return r[t];
              },
              set: function (t, e) {
                r[t] = e;
              }
            };
          }
        };
      }
      function a(t) {
        void 0 === t && (t = h());
        var r = Intl.RelativeTimeFormat,
          n = Intl.ListFormat,
          o = Intl.DisplayNames,
          i = Object(l.a)(
            function () {
              for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
              return new ((t = Intl.DateTimeFormat).bind.apply(t, Object(c.d)([void 0], e, !1)))();
            },
            {
              cache: f(t.dateTime),
              strategy: l.b.variadic
            }
          ),
          a = Object(l.a)(
            function () {
              for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
              return new ((t = Intl.NumberFormat).bind.apply(t, Object(c.d)([void 0], e, !1)))();
            },
            {
              cache: f(t.number),
              strategy: l.b.variadic
            }
          ),
          s = Object(l.a)(
            function () {
              for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
              return new ((t = Intl.PluralRules).bind.apply(t, Object(c.d)([void 0], e, !1)))();
            },
            {
              cache: f(t.pluralRules),
              strategy: l.b.variadic
            }
          );
        return {
          getDateTimeFormat: i,
          getNumberFormat: a,
          getMessageFormat: Object(l.a)(
            function (t, e, r, n) {
              return new u.a(
                t,
                e,
                r,
                Object(c.a)(
                  {
                    formatters: {
                      getNumberFormat: a,
                      getDateTimeFormat: i,
                      getPluralRules: s
                    }
                  },
                  n || {}
                )
              );
            },
            {
              cache: f(t.message),
              strategy: l.b.variadic
            }
          ),
          getRelativeTimeFormat: Object(l.a)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              return new (r.bind.apply(r, Object(c.d)([void 0], t, !1)))();
            },
            {
              cache: f(t.relativeTime),
              strategy: l.b.variadic
            }
          ),
          getPluralRules: s,
          getListFormat: Object(l.a)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              return new (n.bind.apply(n, Object(c.d)([void 0], t, !1)))();
            },
            {
              cache: f(t.list),
              strategy: l.b.variadic
            }
          ),
          getDisplayNames: Object(l.a)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              return new (o.bind.apply(o, Object(c.d)([void 0], t, !1)))();
            },
            {
              cache: f(t.displayNames),
              strategy: l.b.variadic
            }
          )
        };
      }
      function s(t, e, r, n) {
        var o,
          t = t && t[e];
        if ((o = t ? t[r] : o)) return o;
        n(new i.h("No ".concat(e, " format named: ").concat(r)));
      }
    },
    43: function (F, t, e) {
      "use strict";
      var p,
        b,
        d,
        g = e(8);
      function w(t) {
        return t.type === b.literal;
      }
      function D(t) {
        return t.type === b.argument;
      }
      function r(t) {
        return t.type === b.number;
      }
      function n(t) {
        return t.type === b.date;
      }
      function o(t) {
        return t.type === b.time;
      }
      function i(t) {
        return t.type === b.select;
      }
      function a(t) {
        return t.type === b.plural;
      }
      function U(t) {
        return t.type === b.pound;
      }
      function s(t) {
        return t.type === b.tag;
      }
      function c(t) {
        return !(!t || "object" != typeof t || t.type !== d.number);
      }
      function u(t) {
        return !(!t || "object" != typeof t || t.type !== d.dateTime);
      }
      ((l = p = p || {})[(l.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = "EXPECT_ARGUMENT_CLOSING_BRACE"),
        (l[(l.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
        (l[(l.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
        (l[(l.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
        (l[(l.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
        (l[(l.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
        (l[(l.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
        (l[(l.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
        (l[(l.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
        (l[(l.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
        (l[(l.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
        (l[(l.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] = "EXPECT_SELECT_ARGUMENT_OPTIONS"),
        (l[(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (l[(l.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (l[(l.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] = "EXPECT_SELECT_ARGUMENT_SELECTOR"),
        (l[(l.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] = "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
        (l[(l.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
        (l[(l.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
        (l[(l.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] = "INVALID_PLURAL_ARGUMENT_SELECTOR"),
        (l[(l.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
        (l[(l.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
        (l[(l.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
        (l[(l.INVALID_TAG = 23)] = "INVALID_TAG"),
        (l[(l.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
        (l[(l.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
        (l[(l.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG"),
        ((l = b = b || {})[(l.literal = 0)] = "literal"),
        (l[(l.argument = 1)] = "argument"),
        (l[(l.number = 2)] = "number"),
        (l[(l.date = 3)] = "date"),
        (l[(l.time = 4)] = "time"),
        (l[(l.select = 5)] = "select"),
        (l[(l.plural = 6)] = "plural"),
        (l[(l.pound = 7)] = "pound"),
        (l[(l.tag = 8)] = "tag"),
        ((l = d = d || {})[(l.number = 0)] = "number"),
        (l[(l.dateTime = 1)] = "dateTime");
      var l = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        G =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function k(t) {
        var r = {};
        return (
          t.replace(G, function (t) {
            var e = t.length;
            switch (t[0]) {
              case "G":
                r.era = 4 === e ? "long" : 5 === e ? "narrow" : "short";
                break;

              case "y":
                r.year = 2 === e ? "2-digit" : "numeric";
                break;

              case "Y":
              case "u":
              case "U":
              case "r":
                throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");

              case "q":
              case "Q":
                throw new RangeError("`q/Q` (quarter) patterns are not supported");

              case "M":
              case "L":
                r.month = ["numeric", "2-digit", "short", "long", "narrow"][e - 1];
                break;

              case "w":
              case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");

              case "d":
                r.day = ["numeric", "2-digit"][e - 1];
                break;

              case "D":
              case "F":
              case "g":
                throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");

              case "E":
                r.weekday = 4 !== e && 5 === e ? "narrow" : "short";
                break;

              case "e":
                if (e < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                r.weekday = ["short", "long", "narrow", "short"][e - 4];
                break;

              case "c":
                if (e < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                r.weekday = ["short", "long", "narrow", "short"][e - 4];
                break;

              case "a":
                r.hour12 = !0;
                break;

              case "b":
              case "B":
                throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");

              case "h":
                (r.hourCycle = "h12"), (r.hour = ["numeric", "2-digit"][e - 1]);
                break;

              case "H":
                (r.hourCycle = "h23"), (r.hour = ["numeric", "2-digit"][e - 1]);
                break;

              case "K":
                (r.hourCycle = "h11"), (r.hour = ["numeric", "2-digit"][e - 1]);
                break;

              case "k":
                (r.hourCycle = "h24"), (r.hour = ["numeric", "2-digit"][e - 1]);
                break;

              case "j":
              case "J":
              case "C":
                throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");

              case "m":
                r.minute = ["numeric", "2-digit"][e - 1];
                break;

              case "s":
                r.second = ["numeric", "2-digit"][e - 1];
                break;

              case "S":
              case "A":
                throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");

              case "z":
                r.timeZoneName = e < 4 ? "short" : "long";
                break;

              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
            }
            return "";
          }),
          r
        );
      }
      var x = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
      function V(t) {
        if (0 === t.length) throw new Error("Number skeleton cannot be empty");
        for (
          var e = [],
            r = 0,
            n = t.split(x).filter(function (t) {
              return 0 < t.length;
            });
          r < n.length;
          r++
        ) {
          var o = n[r].split("/");
          if (0 === o.length) throw new Error("Invalid number skeleton");
          for (var i = o[0], o = o.slice(1), a = 0, s = o; a < s.length; a++)
            if (0 === s[a].length) throw new Error("Invalid number skeleton");
          e.push({
            stem: i,
            options: o
          });
        }
        return e;
      }
      function X(t) {
        return t.replace(/^(.*?)-/, "");
      }
      var h = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        f = /^(@+)?(\+|#+)?[rs]?$/g,
        K = /(\*)(0+)|(#+)(0+)|(0+)/g,
        m = /^(0+)$/;
      function E(t) {
        var n = {};
        return (
          "r" === t[t.length - 1]
            ? (n.roundingPriority = "morePrecision")
            : "s" === t[t.length - 1] && (n.roundingPriority = "lessPrecision"),
          t.replace(f, function (t, e, r) {
            return (
              "string" != typeof r
                ? ((n.minimumSignificantDigits = e.length), (n.maximumSignificantDigits = e.length))
                : "+" === r
                ? (n.minimumSignificantDigits = e.length)
                : "#" === e[0]
                ? (n.maximumSignificantDigits = e.length)
                : ((n.minimumSignificantDigits = e.length),
                  (n.maximumSignificantDigits = e.length + ("string" == typeof r ? r.length : 0))),
              ""
            );
          }),
          n
        );
      }
      function y(t) {
        switch (t) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };

          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };

          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };

          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always",
              currencySign: "accounting"
            };

          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };

          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero",
              currencySign: "accounting"
            };

          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            };
        }
      }
      function Z(t) {
        var e;
        if (
          ("E" === t[0] && "E" === t[1]
            ? ((e = {
                notation: "engineering"
              }),
              (t = t.slice(2)))
            : "E" === t[0] &&
              ((e = {
                notation: "scientific"
              }),
              (t = t.slice(1))),
          e)
        ) {
          var r = t.slice(0, 2);
          if (
            ("+!" === r ? ((e.signDisplay = "always"), (t = t.slice(2))) : "+?" === r && ((e.signDisplay = "exceptZero"), (t = t.slice(2))),
            !m.test(t))
          )
            throw new Error("Malformed concise eng/scientific notation");
          e.minimumIntegerDigits = t.length;
        }
        return e;
      }
      function v(t) {
        var e = {},
          t = y(t);
        return t || e;
      }
      function $(t) {
        for (var a = {}, e = 0, r = t; e < r.length; e++) {
          var n,
            o = r[e];
          switch (o.stem) {
            case "percent":
            case "%":
              a.style = "percent";
              continue;

            case "%x100":
              (a.style = "percent"), (a.scale = 100);
              continue;

            case "currency":
              (a.style = "currency"), (a.currency = o.options[0]);
              continue;

            case "group-off":
            case ",_":
              a.useGrouping = !1;
              continue;

            case "precision-integer":
            case ".":
              a.maximumFractionDigits = 0;
              continue;

            case "measure-unit":
            case "unit":
              (a.style = "unit"), (a.unit = X(o.options[0]));
              continue;

            case "compact-short":
            case "K":
              (a.notation = "compact"), (a.compactDisplay = "short");
              continue;

            case "compact-long":
            case "KK":
              (a.notation = "compact"), (a.compactDisplay = "long");
              continue;

            case "scientific":
              a = Object(g.a)(
                Object(g.a)(Object(g.a)({}, a), {
                  notation: "scientific"
                }),
                o.options.reduce(function (t, e) {
                  return Object(g.a)(Object(g.a)({}, t), v(e));
                }, {})
              );
              continue;

            case "engineering":
              a = Object(g.a)(
                Object(g.a)(Object(g.a)({}, a), {
                  notation: "engineering"
                }),
                o.options.reduce(function (t, e) {
                  return Object(g.a)(Object(g.a)({}, t), v(e));
                }, {})
              );
              continue;

            case "notation-simple":
              a.notation = "standard";
              continue;

            case "unit-width-narrow":
              (a.currencyDisplay = "narrowSymbol"), (a.unitDisplay = "narrow");
              continue;

            case "unit-width-short":
              (a.currencyDisplay = "code"), (a.unitDisplay = "short");
              continue;

            case "unit-width-full-name":
              (a.currencyDisplay = "name"), (a.unitDisplay = "long");
              continue;

            case "unit-width-iso-code":
              a.currencyDisplay = "symbol";
              continue;

            case "scale":
              a.scale = parseFloat(o.options[0]);
              continue;

            case "integer-width":
              if (1 < o.options.length) throw new RangeError("integer-width stems only accept a single optional option");
              o.options[0].replace(K, function (t, e, r, n, o, i) {
                if (e) a.minimumIntegerDigits = r.length;
                else {
                  if (n && o) throw new Error("We currently do not support maximum integer digits");
                  if (i) throw new Error("We currently do not support exact integer digits");
                }
                return "";
              });
              continue;
          }
          if (m.test(o.stem)) a.minimumIntegerDigits = o.stem.length;
          else if (h.test(o.stem)) {
            if (1 < o.options.length) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(h, function (t, e, r, n, o, i) {
              return (
                "*" === r
                  ? (a.minimumFractionDigits = e.length)
                  : n && "#" === n[0]
                  ? (a.maximumFractionDigits = n.length)
                  : o && i
                  ? ((a.minimumFractionDigits = o.length), (a.maximumFractionDigits = o.length + i.length))
                  : ((a.minimumFractionDigits = e.length), (a.maximumFractionDigits = e.length)),
                ""
              );
            });
            var i = o.options[0];
            "w" === i
              ? (a = Object(g.a)(Object(g.a)({}, a), {
                  trailingZeroDisplay: "stripIfInteger"
                }))
              : i && (a = Object(g.a)(Object(g.a)({}, a), E(i)));
          } else
            f.test(o.stem)
              ? (a = Object(g.a)(Object(g.a)({}, a), E(o.stem)))
              : ((i = y(o.stem)) && (a = Object(g.a)(Object(g.a)({}, a), i)), (n = Z(o.stem)) && (a = Object(g.a)(Object(g.a)({}, a), n)));
        }
        return a;
      }
      var T,
        O = {
          AX: ["H"],
          BQ: ["H"],
          CP: ["H"],
          CZ: ["H"],
          DK: ["H"],
          FI: ["H"],
          ID: ["H"],
          IS: ["H"],
          ML: ["H"],
          NE: ["H"],
          RU: ["H"],
          SE: ["H"],
          SJ: ["H"],
          SK: ["H"],
          AS: ["h", "H"],
          BT: ["h", "H"],
          DJ: ["h", "H"],
          ER: ["h", "H"],
          GH: ["h", "H"],
          IN: ["h", "H"],
          LS: ["h", "H"],
          PG: ["h", "H"],
          PW: ["h", "H"],
          SO: ["h", "H"],
          TO: ["h", "H"],
          VU: ["h", "H"],
          WS: ["h", "H"],
          "001": ["H", "h"],
          AL: ["h", "H", "hB"],
          TD: ["h", "H", "hB"],
          "ca-ES": ["H", "h", "hB"],
          CF: ["H", "h", "hB"],
          CM: ["H", "h", "hB"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          LU: ["H", "h", "hB"],
          NP: ["H", "h", "hB"],
          PF: ["H", "h", "hB"],
          SC: ["H", "h", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          TF: ["H", "h", "hB"],
          VA: ["H", "h", "hB"],
          CY: ["h", "H", "hb", "hB"],
          GR: ["h", "H", "hb", "hB"],
          CO: ["h", "H", "hB", "hb"],
          DO: ["h", "H", "hB", "hb"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          NA: ["h", "H", "hB", "hb"],
          PA: ["h", "H", "hB", "hb"],
          PR: ["h", "H", "hB", "hb"],
          VE: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AI: ["H", "h", "hb", "hB"],
          BW: ["H", "h", "hb", "hB"],
          BZ: ["H", "h", "hb", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CX: ["H", "h", "hb", "hB"],
          DG: ["H", "h", "hb", "hB"],
          FK: ["H", "h", "hb", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GI: ["H", "h", "hb", "hB"],
          IE: ["H", "h", "hb", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IO: ["H", "h", "hb", "hB"],
          JE: ["H", "h", "hb", "hB"],
          LT: ["H", "h", "hb", "hB"],
          MK: ["H", "h", "hb", "hB"],
          MN: ["H", "h", "hb", "hB"],
          MS: ["H", "h", "hb", "hB"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          PN: ["H", "h", "hb", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SX: ["H", "h", "hb", "hB"],
          TA: ["H", "h", "hb", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          "af-ZA": ["H", "h", "hB", "hb"],
          AR: ["H", "h", "hB", "hb"],
          CL: ["H", "h", "hB", "hb"],
          CR: ["H", "h", "hB", "hb"],
          CU: ["H", "h", "hB", "hb"],
          EA: ["H", "h", "hB", "hb"],
          "es-BO": ["H", "h", "hB", "hb"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-EC": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "es-PE": ["H", "h", "hB", "hb"],
          GT: ["H", "h", "hB", "hb"],
          HN: ["H", "h", "hB", "hb"],
          IC: ["H", "h", "hB", "hb"],
          KG: ["H", "h", "hB", "hb"],
          KM: ["H", "h", "hB", "hb"],
          LK: ["H", "h", "hB", "hb"],
          MA: ["H", "h", "hB", "hb"],
          MX: ["H", "h", "hB", "hb"],
          NI: ["H", "h", "hB", "hb"],
          PY: ["H", "h", "hB", "hb"],
          SV: ["H", "h", "hB", "hb"],
          UY: ["H", "h", "hB", "hb"],
          JP: ["H", "h", "K"],
          AD: ["H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AT: ["H", "hB"],
          AW: ["H", "hB"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BR: ["H", "hB"],
          CG: ["H", "hB"],
          CI: ["H", "hB"],
          CV: ["H", "hB"],
          DE: ["H", "hB"],
          EE: ["H", "hB"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GF: ["H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GW: ["H", "hB"],
          HR: ["H", "hB"],
          IL: ["H", "hB"],
          IT: ["H", "hB"],
          KZ: ["H", "hB"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          MF: ["H", "hB"],
          MQ: ["H", "hB"],
          MZ: ["H", "hB"],
          NC: ["H", "hB"],
          NL: ["H", "hB"],
          PM: ["H", "hB"],
          PT: ["H", "hB"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          SI: ["H", "hB"],
          SR: ["H", "hB"],
          ST: ["H", "hB"],
          TG: ["H", "hB"],
          TR: ["H", "hB"],
          WF: ["H", "hB"],
          YT: ["H", "hB"],
          BD: ["h", "hB", "H"],
          PK: ["h", "hB", "H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BG: ["H", "hB", "h"],
          CH: ["H", "hB", "h"],
          GE: ["H", "hB", "h"],
          LI: ["H", "hB", "h"],
          ME: ["H", "hB", "h"],
          RS: ["H", "hB", "h"],
          UA: ["H", "hB", "h"],
          UZ: ["H", "hB", "h"],
          XK: ["H", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          BB: ["h", "hb", "H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          CA: ["h", "hb", "H", "hB"],
          DM: ["h", "hb", "H", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          FJ: ["h", "hb", "H", "hB"],
          FM: ["h", "hb", "H", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GM: ["h", "hb", "H", "hB"],
          GU: ["h", "hb", "H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          JM: ["h", "hb", "H", "hB"],
          KI: ["h", "hb", "H", "hB"],
          KN: ["h", "hb", "H", "hB"],
          KY: ["h", "hb", "H", "hB"],
          LC: ["h", "hb", "H", "hB"],
          LR: ["h", "hb", "H", "hB"],
          MH: ["h", "hb", "H", "hB"],
          MP: ["h", "hb", "H", "hB"],
          MW: ["h", "hb", "H", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          SB: ["h", "hb", "H", "hB"],
          SG: ["h", "hb", "H", "hB"],
          SL: ["h", "hb", "H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          SZ: ["h", "hb", "H", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          BO: ["H", "hB", "h", "hb"],
          EC: ["H", "hB", "h", "hb"],
          ES: ["H", "hB", "h", "hb"],
          GQ: ["H", "hB", "h", "hb"],
          PE: ["H", "hB", "h", "hb"],
          AE: ["h", "hB", "hb", "H"],
          "ar-001": ["h", "hB", "hb", "H"],
          BH: ["h", "hB", "hb", "H"],
          DZ: ["h", "hB", "hb", "H"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          HK: ["h", "hB", "hb", "H"],
          IQ: ["h", "hB", "hb", "H"],
          JO: ["h", "hB", "hb", "H"],
          KW: ["h", "hB", "hb", "H"],
          LB: ["h", "hB", "hb", "H"],
          LY: ["h", "hB", "hb", "H"],
          MO: ["h", "hB", "hb", "H"],
          MR: ["h", "hB", "hb", "H"],
          OM: ["h", "hB", "hb", "H"],
          PH: ["h", "hB", "hb", "H"],
          PS: ["h", "hB", "hb", "H"],
          QA: ["h", "hB", "hb", "H"],
          SA: ["h", "hB", "hb", "H"],
          SD: ["h", "hB", "hb", "H"],
          SY: ["h", "hB", "hb", "H"],
          TN: ["h", "hB", "hb", "H"],
          YE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          LA: ["H", "hb", "hB", "h"],
          CN: ["H", "hB", "hb", "h"],
          LV: ["H", "hB", "hb", "h"],
          TL: ["H", "hB", "hb", "h"],
          "zu-ZA": ["H", "hB", "hb", "h"],
          CD: ["hB", "H"],
          IR: ["hB", "H"],
          "hi-IN": ["hB", "h", "H"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "te-IN": ["hB", "h", "H"],
          KH: ["hB", "h", "H", "hb"],
          "ta-IN": ["hB", "h", "hb", "H"],
          BN: ["hb", "hB", "h", "H"],
          MY: ["hb", "hB", "h", "H"],
          ET: ["hB", "hb", "h", "H"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          TW: ["hB", "hb", "h", "H"],
          KE: ["hB", "hb", "H", "h"],
          MM: ["hB", "hb", "H", "h"],
          TZ: ["hB", "hb", "H", "h"],
          UG: ["hB", "hb", "H", "h"]
        };
      function Y(t, e) {
        for (var r = "", n = 0; n < t.length; n++) {
          var o = t.charAt(n);
          if ("j" === o) {
            for (var i = 0; n + 1 < t.length && t.charAt(n + 1) === o; ) i++, n++;
            var a = 1 + (1 & i),
              s = i < 2 ? 1 : 3 + (i >> 1),
              c = "a",
              u = W(e);
            for (("H" != u && "k" != u) || (s = 0); 0 < s--; ) r += c;
            for (; 0 < a--; ) r = u + r;
          } else r += "J" === o ? "H" : o;
        }
        return r;
      }
      function W(t) {
        var e = t.hourCycle;
        if ((e = void 0 === e && t.hourCycles && t.hourCycles.length ? t.hourCycles[0] : e))
          switch (e) {
            case "h24":
              return "k";

            case "h23":
              return "H";

            case "h12":
              return "h";

            case "h11":
              return "K";

            default:
              throw new Error("Invalid hourCycle");
          }
        var r,
          e = t.language;
        return "root" !== e && (r = t.maximize().region), (O[r || ""] || O[e || ""] || O["".concat(e, "-001")] || O["001"])[0];
      }
      var z = new RegExp("^".concat(l.source, "*")),
        q = new RegExp("".concat(l.source, "*$"));
      function _(t, e) {
        return {
          start: t,
          end: e
        };
      }
      var l = !!String.prototype.startsWith,
        J = !!String.fromCodePoint,
        Q = !!Object.fromEntries,
        tt = !!String.prototype.codePointAt,
        et = !!String.prototype.trimStart,
        rt = !!String.prototype.trimEnd,
        nt = !!Number.isSafeInteger
          ? Number.isSafeInteger
          : function (t) {
              return "number" == typeof t && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
            },
        S = !0;
      try {
        S = "a" === (null == (T = I("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) ? void 0 : T[0]);
      } catch (t) {
        S = !1;
      }
      var A,
        H,
        P = l
          ? function (t, e, r) {
              return t.startsWith(e, r);
            }
          : function (t, e, r) {
              return t.slice(r, r + e.length) === e;
            },
        R = J
          ? String.fromCodePoint
          : function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              for (var r, n = "", o = t.length, i = 0; i < o; ) {
                if (1114111 < (r = t[i++])) throw RangeError(r + " is not a valid code point");
                n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), (r % 1024) + 56320);
              }
              return n;
            },
        N = Q
          ? Object.fromEntries
          : function (t) {
              for (var e = {}, r = 0, n = t; r < n.length; r++) {
                var o = n[r],
                  i = o[0],
                  o = o[1];
                e[i] = o;
              }
              return e;
            },
        B = tt
          ? function (t, e) {
              return t.codePointAt(e);
            }
          : function (t, e) {
              var r,
                n = t.length;
              if (!(e < 0 || n <= e))
                return (r = t.charCodeAt(e)) < 55296 || 56319 < r || e + 1 === n || (n = t.charCodeAt(e + 1)) < 56320 || 57343 < n
                  ? r
                  : n - 56320 + ((r - 55296) << 10) + 65536;
            },
        ot = et
          ? function (t) {
              return t.trimStart();
            }
          : function (t) {
              return t.replace(z, "");
            },
        it = rt
          ? function (t) {
              return t.trimEnd();
            }
          : function (t) {
              return t.replace(q, "");
            };
      function I(t, e) {
        return new RegExp(t, e);
      }
      H = S
        ? ((A = I("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")),
          function (t, e) {
            return (A.lastIndex = e), null != (e = A.exec(t)[1]) ? e : "";
          })
        : function (t, e) {
            for (var r = []; ; ) {
              var n = B(t, e);
              if (void 0 === n || C(n) || ut(n)) break;
              r.push(n), (e += 65536 <= n ? 2 : 1);
            }
            return R.apply(void 0, r);
          };
      (L.prototype.parse = function () {
        if (0 !== this.offset()) throw Error("parser can only be used once");
        return this.parseMessage(0, "", !1);
      }),
        (L.prototype.parseMessage = function (t, e, r) {
          for (var n = []; !this.isEOF(); ) {
            var o,
              i = this.char();
            if (123 === i) {
              if ((o = this.parseArgument(t, r)).err) return o;
              n.push(o.val);
            } else {
              if (125 === i && 0 < t) break;
              if (35 !== i || ("plural" !== e && "selectordinal" !== e)) {
                if (60 === i && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(p.UNMATCHED_CLOSING_TAG, _(this.clonePosition(), this.clonePosition()));
                }
                if (60 === i && !this.ignoreTag && j(this.peek() || 0)) {
                  if ((o = this.parseTag(t, e)).err) return o;
                } else if ((o = this.parseLiteral(t, e)).err) return o;
                n.push(o.val);
              } else {
                i = this.clonePosition();
                this.bump(),
                  n.push({
                    type: b.pound,
                    location: _(i, this.clonePosition())
                  });
              }
            }
          }
          return {
            val: n,
            err: null
          };
        }),
        (L.prototype.parseTag = function (t, e) {
          var r,
            n = this.clonePosition(),
            o = (this.bump(), this.parseTagName());
          return (
            this.bumpSpace(),
            this.bumpIf("/>")
              ? {
                  val: {
                    type: b.literal,
                    value: "<".concat(o, "/>"),
                    location: _(n, this.clonePosition())
                  },
                  err: null
                }
              : this.bumpIf(">")
              ? (t = this.parseMessage(t + 1, e, !0)).err
                ? t
                : ((e = t.val),
                  (t = this.clonePosition()),
                  this.bumpIf("</")
                    ? this.isEOF() || !j(this.char())
                      ? this.error(p.INVALID_TAG, _(t, this.clonePosition()))
                      : ((r = this.clonePosition()),
                        o !== this.parseTagName()
                          ? this.error(p.UNMATCHED_CLOSING_TAG, _(r, this.clonePosition()))
                          : (this.bumpSpace(),
                            this.bumpIf(">")
                              ? {
                                  val: {
                                    type: b.tag,
                                    value: o,
                                    children: e,
                                    location: _(n, this.clonePosition())
                                  },
                                  err: null
                                }
                              : this.error(p.INVALID_TAG, _(t, this.clonePosition()))))
                    : this.error(p.UNCLOSED_TAG, _(n, this.clonePosition())))
              : this.error(p.INVALID_TAG, _(n, this.clonePosition()))
          );
        }),
        (L.prototype.parseTagName = function () {
          var t = this.offset();
          for (this.bump(); !this.isEOF() && ct(this.char()); ) this.bump();
          return this.message.slice(t, this.offset());
        }),
        (L.prototype.parseLiteral = function (t, e) {
          for (var r = this.clonePosition(), n = ""; ; ) {
            var o = this.tryParseQuote(e);
            if (o) n += o;
            else {
              o = this.tryParseUnquoted(t, e);
              if (o) n += o;
              else {
                o = this.tryParseLeftAngleBracket();
                if (!o) break;
                n += o;
              }
            }
          }
          r = _(r, this.clonePosition());
          return {
            val: {
              type: b.literal,
              value: n,
              location: r
            },
            err: null
          };
        }),
        (L.prototype.tryParseLeftAngleBracket = function () {
          return this.isEOF() || 60 !== this.char() || (!this.ignoreTag && st(this.peek() || 0)) ? null : (this.bump(), "<");
        }),
        (L.prototype.tryParseQuote = function (t) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";

            case 123:
            case 60:
            case 62:
            case 125:
              break;

            case 35:
              if ("plural" === t || "selectordinal" === t) break;
              return null;

            default:
              return null;
          }
          this.bump();
          var e = [this.char()];
          for (this.bump(); !this.isEOF(); ) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break;
              }
              e.push(39), this.bump();
            } else e.push(r);
            this.bump();
          }
          return R.apply(void 0, e);
        }),
        (L.prototype.tryParseUnquoted = function (t, e) {
          var r;
          return this.isEOF() ||
            60 === (r = this.char()) ||
            123 === r ||
            (35 === r && ("plural" === e || "selectordinal" === e)) ||
            (125 === r && 0 < t)
            ? null
            : (this.bump(), R(r));
        }),
        (L.prototype.parseArgument = function (t, e) {
          var r = this.clonePosition();
          if ((this.bump(), this.bumpSpace(), this.isEOF())) return this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, _(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(p.EMPTY_ARGUMENT, _(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(p.MALFORMED_ARGUMENT, _(r, this.clonePosition()));
          if ((this.bumpSpace(), this.isEOF())) return this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, _(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return (
                this.bump(),
                {
                  val: {
                    type: b.argument,
                    value: n,
                    location: _(r, this.clonePosition())
                  },
                  err: null
                }
              );

            case 44:
              return (
                this.bump(),
                this.bumpSpace(),
                this.isEOF()
                  ? this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, _(r, this.clonePosition()))
                  : this.parseArgumentOptions(t, e, n, r)
              );

            default:
              return this.error(p.MALFORMED_ARGUMENT, _(r, this.clonePosition()));
          }
        }),
        (L.prototype.parseIdentifierIfPossible = function () {
          var t = this.clonePosition(),
            e = this.offset(),
            r = H(this.message, e),
            e = e + r.length;
          return (
            this.bumpTo(e),
            {
              value: r,
              location: _(t, this.clonePosition())
            }
          );
        }),
        (L.prototype.parseArgumentOptions = function (t, e, r, n) {
          var o = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (i) {
            case "":
              return this.error(p.EXPECT_ARGUMENT_TYPE, _(o, a));

            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var s = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((l = this.parseSimpleArgStyleIfPossible()).err) return l;
                if (0 === (h = it(l.val)).length) return this.error(p.EXPECT_ARGUMENT_STYLE, _(this.clonePosition(), this.clonePosition()));
                s = {
                  style: h,
                  styleLocation: _(c, this.clonePosition())
                };
              }
              return (c = this.tryParseArgumentClose(n)).err
                ? c
                : ((f = _(n, this.clonePosition())),
                  s && P(null == s ? void 0 : s.style, "::", 0)
                    ? ((m = ot(s.style.slice(2))),
                      "number" === i
                        ? (l = this.parseNumberSkeletonFromString(m, s.styleLocation)).err
                          ? l
                          : {
                              val: {
                                type: b.number,
                                value: r,
                                location: f,
                                style: l.val
                              },
                              err: null
                            }
                        : 0 === m.length
                        ? this.error(p.EXPECT_DATE_TIME_SKELETON, f)
                        : ((u = m),
                          this.locale && (u = Y(m, this.locale)),
                          (h = {
                            type: d.dateTime,
                            pattern: u,
                            location: s.styleLocation,
                            parsedOptions: this.shouldParseSkeletons ? k(u) : {}
                          }),
                          {
                            val: {
                              type: "date" === i ? b.date : b.time,
                              value: r,
                              location: f,
                              style: h
                            },
                            err: null
                          }))
                    : {
                        val: {
                          type: "number" === i ? b.number : "date" === i ? b.date : b.time,
                          value: r,
                          location: f,
                          style: null != (m = null == s ? void 0 : s.style) ? m : null
                        },
                        err: null
                      });

            case "plural":
            case "selectordinal":
            case "select":
              var u = this.clonePosition();
              if ((this.bumpSpace(), !this.bumpIf(","))) return this.error(p.EXPECT_SELECT_ARGUMENT_OPTIONS, _(u, Object(g.a)({}, u)));
              this.bumpSpace();
              var l,
                h = this.parseIdentifierIfPossible(),
                f = 0;
              if ("select" !== i && "offset" === h.value) {
                if (!this.bumpIf(":"))
                  return this.error(p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, _(this.clonePosition(), this.clonePosition()));
                if (
                  (this.bumpSpace(),
                  (l = this.tryParseDecimalInteger(p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, p.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)
                )
                  return l;
                this.bumpSpace(), (h = this.parseIdentifierIfPossible()), (f = l.val);
              }
              var m,
                s = this.tryParsePluralOrSelectOptions(t, i, e, h);
              return s.err
                ? s
                : (c = this.tryParseArgumentClose(n)).err
                ? c
                : ((m = _(n, this.clonePosition())),
                  "select" === i
                    ? {
                        val: {
                          type: b.select,
                          value: r,
                          options: N(s.val),
                          location: m
                        },
                        err: null
                      }
                    : {
                        val: {
                          type: b.plural,
                          value: r,
                          options: N(s.val),
                          offset: f,
                          pluralType: "plural" === i ? "cardinal" : "ordinal",
                          location: m
                        },
                        err: null
                      });

            default:
              return this.error(p.INVALID_ARGUMENT_TYPE, _(o, a));
          }
        }),
        (L.prototype.tryParseArgumentClose = function (t) {
          return this.isEOF() || 125 !== this.char()
            ? this.error(p.EXPECT_ARGUMENT_CLOSING_BRACE, _(t, this.clonePosition()))
            : (this.bump(),
              {
                val: !0,
                err: null
              });
        }),
        (L.prototype.parseSimpleArgStyleIfPossible = function () {
          for (var t = 0, e = this.clonePosition(); !this.isEOF(); )
            switch (this.char()) {
              case 39:
                this.bump();
                var r = this.clonePosition();
                if (!this.bumpUntil("'")) return this.error(p.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, _(r, this.clonePosition()));
                this.bump();
                break;

              case 123:
                (t += 1), this.bump();
                break;

              case 125:
                if (!(0 < t))
                  return {
                    val: this.message.slice(e.offset, this.offset()),
                    err: null
                  };
                --t;
                break;

              default:
                this.bump();
            }
          return {
            val: this.message.slice(e.offset, this.offset()),
            err: null
          };
        }),
        (L.prototype.parseNumberSkeletonFromString = function (t, e) {
          var r = [];
          try {
            r = V(t);
          } catch (t) {
            return this.error(p.INVALID_NUMBER_SKELETON, e);
          }
          return {
            val: {
              type: d.number,
              tokens: r,
              location: e,
              parsedOptions: this.shouldParseSkeletons ? $(r) : {}
            },
            err: null
          };
        }),
        (L.prototype.tryParsePluralOrSelectOptions = function (t, e, r, n) {
          for (var o = !1, i = [], a = new Set(), s = n.value, c = n.location; ; ) {
            if (0 === s.length) {
              var u = this.clonePosition();
              if ("select" === e || !this.bumpIf("=")) break;
              var l = this.tryParseDecimalInteger(p.EXPECT_PLURAL_ARGUMENT_SELECTOR, p.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (l.err) return l;
              (c = _(u, this.clonePosition())), (s = this.message.slice(u.offset, this.offset()));
            }
            if (a.has(s))
              return this.error("select" === e ? p.DUPLICATE_SELECT_ARGUMENT_SELECTOR : p.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === s && (o = !0), this.bumpSpace();
            l = this.clonePosition();
            if (!this.bumpIf("{"))
              return this.error(
                "select" === e ? p.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : p.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                _(this.clonePosition(), this.clonePosition())
              );
            u = this.parseMessage(t + 1, e, r);
            if (u.err) return u;
            var h = this.tryParseArgumentClose(l);
            if (h.err) return h;
            i.push([
              s,
              {
                value: u.val,
                location: _(l, this.clonePosition())
              }
            ]),
              a.add(s),
              this.bumpSpace(),
              (s = (h = this.parseIdentifierIfPossible()).value),
              (c = h.location);
          }
          return 0 === i.length
            ? this.error(
                "select" === e ? p.EXPECT_SELECT_ARGUMENT_SELECTOR : p.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                _(this.clonePosition(), this.clonePosition())
              )
            : this.requiresOtherClause && !o
            ? this.error(p.MISSING_OTHER_CLAUSE, _(this.clonePosition(), this.clonePosition()))
            : {
                val: i,
                err: null
              };
        }),
        (L.prototype.tryParseDecimalInteger = function (t, e) {
          for (var r = 1, n = this.clonePosition(), o = (this.bumpIf("+") || (this.bumpIf("-") && (r = -1)), !1), i = 0; !this.isEOF(); ) {
            var a = this.char();
            if (!(48 <= a && a <= 57)) break;
            (o = !0), (i = 10 * i + (a - 48)), this.bump();
          }
          n = _(n, this.clonePosition());
          return o
            ? nt((i *= r))
              ? {
                  val: i,
                  err: null
                }
              : this.error(e, n)
            : this.error(t, n);
        }),
        (L.prototype.offset = function () {
          return this.position.offset;
        }),
        (L.prototype.isEOF = function () {
          return this.offset() === this.message.length;
        }),
        (L.prototype.clonePosition = function () {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          };
        }),
        (L.prototype.char = function () {
          var t = this.position.offset;
          if (t >= this.message.length) throw Error("out of bound");
          var e = B(this.message, t);
          if (void 0 === e) throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
          return e;
        }),
        (L.prototype.error = function (t, e) {
          return {
            val: null,
            err: {
              kind: t,
              message: this.message,
              location: e
            }
          };
        }),
        (L.prototype.bump = function () {
          var t;
          this.isEOF() ||
            (10 === (t = this.char())
              ? ((this.position.line += 1), (this.position.column = 1), (this.position.offset += 1))
              : ((this.position.column += 1), (this.position.offset += t < 65536 ? 1 : 2)));
        }),
        (L.prototype.bumpIf = function (t) {
          if (P(this.message, t, this.offset())) {
            for (var e = 0; e < t.length; e++) this.bump();
            return !0;
          }
          return !1;
        }),
        (L.prototype.bumpUntil = function (t) {
          var e = this.offset(),
            t = this.message.indexOf(t, e);
          return 0 <= t ? (this.bumpTo(t), !0) : (this.bumpTo(this.message.length), !1);
        }),
        (L.prototype.bumpTo = function (t) {
          if (this.offset() > t)
            throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (t = Math.min(t, this.message.length); ; ) {
            var e = this.offset();
            if (e === t) break;
            if (t < e) throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
            if ((this.bump(), this.isEOF())) break;
          }
        }),
        (L.prototype.bumpSpace = function () {
          for (; !this.isEOF() && C(this.char()); ) this.bump();
        }),
        (L.prototype.peek = function () {
          var t, e;
          return !this.isEOF() && ((t = this.char()), (e = this.offset()), null != (e = this.message.charCodeAt(e + (65536 <= t ? 2 : 1))))
            ? e
            : null;
        });
      var at = L;
      function L(t, e) {
        void 0 === e && (e = {}),
          (this.message = t),
          (this.position = {
            offset: 0,
            line: 1,
            column: 1
          }),
          (this.ignoreTag = !!e.ignoreTag),
          (this.locale = e.locale),
          (this.requiresOtherClause = !!e.requiresOtherClause),
          (this.shouldParseSkeletons = !!e.shouldParseSkeletons);
      }
      function j(t) {
        return (97 <= t && t <= 122) || (65 <= t && t <= 90);
      }
      function st(t) {
        return j(t) || 47 === t;
      }
      function ct(t) {
        return (
          45 === t ||
          46 === t ||
          (48 <= t && t <= 57) ||
          95 === t ||
          (97 <= t && t <= 122) ||
          (65 <= t && t <= 90) ||
          183 == t ||
          (192 <= t && t <= 214) ||
          (216 <= t && t <= 246) ||
          (248 <= t && t <= 893) ||
          (895 <= t && t <= 8191) ||
          (8204 <= t && t <= 8205) ||
          (8255 <= t && t <= 8256) ||
          (8304 <= t && t <= 8591) ||
          (11264 <= t && t <= 12271) ||
          (12289 <= t && t <= 55295) ||
          (63744 <= t && t <= 64975) ||
          (65008 <= t && t <= 65533) ||
          (65536 <= t && t <= 983039)
        );
      }
      function C(t) {
        return (9 <= t && t <= 13) || 32 === t || 133 === t || (8206 <= t && t <= 8207) || 8232 === t || 8233 === t;
      }
      function ut(t) {
        return (
          (33 <= t && t <= 35) ||
          36 === t ||
          (37 <= t && t <= 39) ||
          40 === t ||
          41 === t ||
          42 === t ||
          43 === t ||
          44 === t ||
          45 === t ||
          (46 <= t && t <= 47) ||
          (58 <= t && t <= 59) ||
          (60 <= t && t <= 62) ||
          (63 <= t && t <= 64) ||
          91 === t ||
          92 === t ||
          93 === t ||
          94 === t ||
          96 === t ||
          123 === t ||
          124 === t ||
          125 === t ||
          126 === t ||
          161 === t ||
          (162 <= t && t <= 165) ||
          166 === t ||
          167 === t ||
          169 === t ||
          171 === t ||
          172 === t ||
          174 === t ||
          176 === t ||
          177 === t ||
          182 === t ||
          187 === t ||
          191 === t ||
          215 === t ||
          247 === t ||
          (8208 <= t && t <= 8213) ||
          (8214 <= t && t <= 8215) ||
          8216 === t ||
          8217 === t ||
          8218 === t ||
          (8219 <= t && t <= 8220) ||
          8221 === t ||
          8222 === t ||
          8223 === t ||
          (8224 <= t && t <= 8231) ||
          (8240 <= t && t <= 8248) ||
          8249 === t ||
          8250 === t ||
          (8251 <= t && t <= 8254) ||
          (8257 <= t && t <= 8259) ||
          8260 === t ||
          8261 === t ||
          8262 === t ||
          (8263 <= t && t <= 8273) ||
          8274 === t ||
          8275 === t ||
          (8277 <= t && t <= 8286) ||
          (8592 <= t && t <= 8596) ||
          (8597 <= t && t <= 8601) ||
          (8602 <= t && t <= 8603) ||
          (8604 <= t && t <= 8607) ||
          8608 === t ||
          (8609 <= t && t <= 8610) ||
          8611 === t ||
          (8612 <= t && t <= 8613) ||
          8614 === t ||
          (8615 <= t && t <= 8621) ||
          8622 === t ||
          (8623 <= t && t <= 8653) ||
          (8654 <= t && t <= 8655) ||
          (8656 <= t && t <= 8657) ||
          8658 === t ||
          8659 === t ||
          8660 === t ||
          (8661 <= t && t <= 8691) ||
          (8692 <= t && t <= 8959) ||
          (8960 <= t && t <= 8967) ||
          8968 === t ||
          8969 === t ||
          8970 === t ||
          8971 === t ||
          (8972 <= t && t <= 8991) ||
          (8992 <= t && t <= 8993) ||
          (8994 <= t && t <= 9e3) ||
          9001 === t ||
          9002 === t ||
          (9003 <= t && t <= 9083) ||
          9084 === t ||
          (9085 <= t && t <= 9114) ||
          (9115 <= t && t <= 9139) ||
          (9140 <= t && t <= 9179) ||
          (9180 <= t && t <= 9185) ||
          (9186 <= t && t <= 9254) ||
          (9255 <= t && t <= 9279) ||
          (9280 <= t && t <= 9290) ||
          (9291 <= t && t <= 9311) ||
          (9472 <= t && t <= 9654) ||
          9655 === t ||
          (9656 <= t && t <= 9664) ||
          9665 === t ||
          (9666 <= t && t <= 9719) ||
          (9720 <= t && t <= 9727) ||
          (9728 <= t && t <= 9838) ||
          9839 === t ||
          (9840 <= t && t <= 10087) ||
          10088 === t ||
          10089 === t ||
          10090 === t ||
          10091 === t ||
          10092 === t ||
          10093 === t ||
          10094 === t ||
          10095 === t ||
          10096 === t ||
          10097 === t ||
          10098 === t ||
          10099 === t ||
          10100 === t ||
          10101 === t ||
          (10132 <= t && t <= 10175) ||
          (10176 <= t && t <= 10180) ||
          10181 === t ||
          10182 === t ||
          (10183 <= t && t <= 10213) ||
          10214 === t ||
          10215 === t ||
          10216 === t ||
          10217 === t ||
          10218 === t ||
          10219 === t ||
          10220 === t ||
          10221 === t ||
          10222 === t ||
          10223 === t ||
          (10224 <= t && t <= 10239) ||
          (10240 <= t && t <= 10495) ||
          (10496 <= t && t <= 10626) ||
          10627 === t ||
          10628 === t ||
          10629 === t ||
          10630 === t ||
          10631 === t ||
          10632 === t ||
          10633 === t ||
          10634 === t ||
          10635 === t ||
          10636 === t ||
          10637 === t ||
          10638 === t ||
          10639 === t ||
          10640 === t ||
          10641 === t ||
          10642 === t ||
          10643 === t ||
          10644 === t ||
          10645 === t ||
          10646 === t ||
          10647 === t ||
          10648 === t ||
          (10649 <= t && t <= 10711) ||
          10712 === t ||
          10713 === t ||
          10714 === t ||
          10715 === t ||
          (10716 <= t && t <= 10747) ||
          10748 === t ||
          10749 === t ||
          (10750 <= t && t <= 11007) ||
          (11008 <= t && t <= 11055) ||
          (11056 <= t && t <= 11076) ||
          (11077 <= t && t <= 11078) ||
          (11079 <= t && t <= 11084) ||
          (11085 <= t && t <= 11123) ||
          (11124 <= t && t <= 11125) ||
          (11126 <= t && t <= 11157) ||
          11158 === t ||
          (11159 <= t && t <= 11263) ||
          (11776 <= t && t <= 11777) ||
          11778 === t ||
          11779 === t ||
          11780 === t ||
          11781 === t ||
          (11782 <= t && t <= 11784) ||
          11785 === t ||
          11786 === t ||
          11787 === t ||
          11788 === t ||
          11789 === t ||
          (11790 <= t && t <= 11798) ||
          11799 === t ||
          (11800 <= t && t <= 11801) ||
          11802 === t ||
          11803 === t ||
          11804 === t ||
          11805 === t ||
          (11806 <= t && t <= 11807) ||
          11808 === t ||
          11809 === t ||
          11810 === t ||
          11811 === t ||
          11812 === t ||
          11813 === t ||
          11814 === t ||
          11815 === t ||
          11816 === t ||
          11817 === t ||
          (11818 <= t && t <= 11822) ||
          11823 === t ||
          (11824 <= t && t <= 11833) ||
          (11834 <= t && t <= 11835) ||
          (11836 <= t && t <= 11839) ||
          11840 === t ||
          11841 === t ||
          11842 === t ||
          (11843 <= t && t <= 11855) ||
          (11856 <= t && t <= 11857) ||
          11858 === t ||
          (11859 <= t && t <= 11903) ||
          (12289 <= t && t <= 12291) ||
          12296 === t ||
          12297 === t ||
          12298 === t ||
          12299 === t ||
          12300 === t ||
          12301 === t ||
          12302 === t ||
          12303 === t ||
          12304 === t ||
          12305 === t ||
          (12306 <= t && t <= 12307) ||
          12308 === t ||
          12309 === t ||
          12310 === t ||
          12311 === t ||
          12312 === t ||
          12313 === t ||
          12314 === t ||
          12315 === t ||
          12316 === t ||
          12317 === t ||
          (12318 <= t && t <= 12319) ||
          12320 === t ||
          12336 === t ||
          64830 === t ||
          64831 === t ||
          (65093 <= t && t <= 65094)
        );
      }
      function M(t) {
        t.forEach(function (t) {
          if ((delete t.location, i(t) || a(t))) for (var e in t.options) delete t.options[e].location, M(t.options[e].value);
          else (r(t) && c(t.style)) || ((n(t) || o(t)) && u(t.style)) ? delete t.style.location : s(t) && M(t.children);
        });
      }
      function lt(t, e) {
        void 0 === e && (e = {}),
          (e = Object(g.a)(
            {
              shouldParseSkeletons: !0,
              requiresOtherClause: !0
            },
            e
          ));
        var r,
          t = new at(t, e).parse();
        if (t.err) throw (((r = SyntaxError(p[t.err.kind])).location = t.err.location), (r.originalMessage = t.err.message), r);
        return (null != e && e.captureLocation) || M(t.val), t.val;
      }
      e.d(t, "m", function () {
        return lt;
      }),
        e.d(t, "a", function () {
          return b;
        }),
        e.d(t, "e", function () {
          return w;
        }),
        e.d(t, "b", function () {
          return D;
        }),
        e.d(t, "f", function () {
          return r;
        }),
        e.d(t, "c", function () {
          return n;
        }),
        e.d(t, "l", function () {
          return o;
        }),
        e.d(t, "j", function () {
          return i;
        }),
        e.d(t, "h", function () {
          return a;
        }),
        e.d(t, "i", function () {
          return U;
        }),
        e.d(t, "k", function () {
          return s;
        }),
        e.d(t, "g", function () {
          return c;
        }),
        e.d(t, "d", function () {
          return u;
        });
    },
    50: function (F, t, e) {
      "use strict";
      var b = e(8),
        a = e(2),
        r = e(12),
        o = e(60),
        d = e(365),
        n = e(366),
        g = e(22),
        E = e(43);
      function i(r, n) {
        return Object.keys(r).reduce(function (t, e) {
          return (
            (t[e] = Object(b.a)(
              {
                timeZone: n
              },
              r[e]
            )),
            t
          );
        }, {});
      }
      function s(r, n) {
        return Object.keys(Object(b.a)(Object(b.a)({}, r), n)).reduce(function (t, e) {
          return (t[e] = Object(b.a)(Object(b.a)({}, r[e] || {}), n[e] || {})), t;
        }, {});
      }
      function y(t, e) {
        var r;
        return e
          ? ((r = n.a.formats),
            Object(b.a)(Object(b.a)(Object(b.a)({}, r), t), {
              date: s(i(r.date, e), i(t.date || {}, e)),
              time: s(i(r.time, e), i(t.time || {}, e))
            }))
          : t;
      }
      function c(t, e, r, n, o) {
        var i = t.locale,
          a = t.formats,
          s = t.messages,
          c = t.defaultLocale,
          u = t.defaultFormats,
          l = t.fallbackOnEmptyString,
          h = t.onError,
          f = t.timeZone,
          t = t.defaultRichTextElements,
          m = (r =
            void 0 === r
              ? {
                  id: ""
                }
              : r).id,
          p = r.defaultMessage,
          m =
            (Object(d.a)(
              !!m,
              "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue"
            ),
            String(m)),
          s = s && Object.prototype.hasOwnProperty.call(s, m) && s[m];
        if (Array.isArray(s) && 1 === s.length && s[0].type === E.a.literal) return s[0].value;
        if (!n && s && "string" == typeof s && !t) return s.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (((n = Object(b.a)(Object(b.a)({}, t), n || {})), (a = y(a, f)), (u = y(u, f)), !s)) {
          if (!1 === l && "" === s) return s;
          if (((!p || (i && i.toLowerCase() !== c.toLowerCase())) && h(new g.g(r, i)), p))
            try {
              return e.getMessageFormat(p, c, u, o).format(n);
            } catch (t) {
              return (
                h(new g.e('Error formatting default message for: "'.concat(m, '", rendering default message verbatim'), i, r, t)),
                "string" == typeof p ? p : m
              );
            }
          return m;
        }
        try {
          return e
            .getMessageFormat(
              s,
              i,
              a,
              Object(b.a)(
                {
                  formatters: e
                },
                o || {}
              )
            )
            .format(n);
        } catch (t) {
          h(new g.e('Error formatting message: "'.concat(m, '", using ').concat(p ? "default message" : "id", " as fallback."), i, r, t));
        }
        if (p)
          try {
            return e.getMessageFormat(p, c, u, o).format(n);
          } catch (t) {
            h(new g.e('Error formatting the default message for: "'.concat(m, '", rendering message verbatim'), i, r, t));
          }
        return "string" == typeof s ? s : "string" == typeof p ? p : m;
      }
      var u = e(37),
        l = [
          "localeMatcher",
          "style",
          "currency",
          "currencyDisplay",
          "unit",
          "unitDisplay",
          "useGrouping",
          "minimumIntegerDigits",
          "minimumFractionDigits",
          "maximumFractionDigits",
          "minimumSignificantDigits",
          "maximumSignificantDigits",
          "compactDisplay",
          "currencyDisplay",
          "currencySign",
          "notation",
          "signDisplay",
          "unit",
          "unitDisplay",
          "numberingSystem"
        ];
      function h(t, e, r) {
        var n = t.locale,
          o = t.formats,
          t = t.onError,
          i = (r = void 0 === r ? {} : r).format,
          o = (i && Object(u.e)(o, "number", i, t)) || {};
        return e(n, Object(u.d)(r, l, o));
      }
      function f(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return h(e, t, n).format(r);
        } catch (t) {
          e.onError(new g.a(g.b.FORMAT_ERROR, "Error formatting number.", t));
        }
        return String(r);
      }
      function m(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return h(e, t, n).formatToParts(r);
        } catch (t) {
          e.onError(new g.a(g.b.FORMAT_ERROR, "Error formatting number.", t));
        }
        return [];
      }
      var p = e(94),
        v = ["numeric", "style"];
      function T(t, e, r) {
        var n = t.locale,
          o = t.formats,
          t = t.onError,
          i = (r = void 0 === r ? {} : r).format,
          o = (!!i && Object(u.e)(o, "relative", i, t)) || {};
        return e(n, Object(u.d)(r, v, o));
      }
      function O(e, t, r, n, o) {
        void 0 === o && (o = {}),
          (n = n || "second"),
          Intl.RelativeTimeFormat ||
            e.onError(
              new p.b(
                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                p.a.MISSING_INTL_API
              )
            );
        try {
          return T(e, t, o).format(r, n);
        } catch (t) {
          e.onError(new g.c("Error formatting relative time.", e.locale, t));
        }
        return String(r);
      }
      var _ = [
        "localeMatcher",
        "formatMatcher",
        "timeZone",
        "hour12",
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "hourCycle",
        "dateStyle",
        "timeStyle",
        "calendar",
        "numberingSystem"
      ];
      function S(t, e, r, n) {
        var o = t.locale,
          i = t.formats,
          a = t.onError,
          t = t.timeZone,
          s = (n = void 0 === n ? {} : n).format,
          t = Object(b.a)(
            Object(b.a)(
              {},
              t && {
                timeZone: t
              }
            ),
            s && Object(u.e)(i, e, s, a)
          ),
          i = Object(u.d)(n, _, t);
        return r(
          o,
          (i =
            "time" !== e || i.hour || i.minute || i.second || i.timeStyle || i.dateStyle
              ? i
              : Object(b.a)(Object(b.a)({}, i), {
                  hour: "numeric",
                  minute: "numeric"
                }))
        );
      }
      function A(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          i = void 0 === i ? {} : i,
          o = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(e, "date", t, i).format(o);
        } catch (t) {
          e.onError(new g.a(g.b.FORMAT_ERROR, "Error formatting date.", t));
        }
        return String(o);
      }
      function H(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          i = void 0 === i ? {} : i,
          o = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(e, "time", t, i).format(o);
        } catch (t) {
          e.onError(new g.a(g.b.FORMAT_ERROR, "Error formatting time.", t));
        }
        return String(o);
      }
      function P(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = r[2],
          a = void 0 === a ? {} : a,
          s = e.timeZone,
          c = e.locale,
          e = e.onError,
          a = Object(u.d)(
            a,
            _,
            s
              ? {
                  timeZone: s
                }
              : {}
          );
        try {
          return t(c, a).formatRange(o, i);
        } catch (t) {
          e(new g.a(g.b.FORMAT_ERROR, "Error formatting date time range.", t));
        }
        return String(o);
      }
      function R(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          i = void 0 === i ? {} : i,
          o = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(e, "date", t, i).formatToParts(o);
        } catch (t) {
          e.onError(new g.a(g.b.FORMAT_ERROR, "Error formatting date.", t));
        }
        return [];
      }
      function w(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          i = void 0 === i ? {} : i,
          o = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return S(e, "time", t, i).formatToParts(o);
        } catch (t) {
          e.onError(new g.a(g.b.FORMAT_ERROR, "Error formatting time.", t));
        }
        return [];
      }
      var D = ["localeMatcher", "type"];
      function U(e, t, r, n) {
        var o = e.locale,
          e = e.onError,
          n =
            (void 0 === n && (n = {}),
            Intl.PluralRules ||
              e(
                new p.b(
                  'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                  p.a.MISSING_INTL_API
                )
              ),
            Object(u.d)(n, D));
        try {
          return t(o, n).select(r);
        } catch (t) {
          e(new g.c("Error formatting plural.", o, t));
        }
        return "other";
      }
      var G = ["localeMatcher", "type", "style"],
        N = Date.now();
      function k(t) {
        return "".concat(N, "_").concat(t, "_").concat(N);
      }
      function x(t, e, r, n) {
        t = B(t, e, r, (n = void 0 === n ? {} : n)).reduce(function (t, e) {
          e = e.value;
          return "string" == typeof e && "string" == typeof t[t.length - 1] ? (t[t.length - 1] += e) : t.push(e), t;
        }, []);
        return 1 === t.length ? t[0] : t;
      }
      function B(e, t, r, n) {
        var o = e.locale,
          e = e.onError;
        void 0 === n && (n = {});
        Intl.ListFormat ||
          e(
            new p.b(
              'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
              p.a.MISSING_INTL_API
            )
          );
        n = Object(u.d)(n, G);
        try {
          var i = {},
            a = r.map(function (t, e) {
              return "object" == typeof t ? ((e = k(e)), (i[e] = t), e) : String(t);
            });
          return t(o, n)
            .formatToParts(a)
            .map(function (t) {
              return "literal" === t.type
                ? t
                : Object(b.a)(Object(b.a)({}, t), {
                    value: i[t.value] || t.value
                  });
            });
        } catch (t) {
          e(new g.a(g.b.FORMAT_ERROR, "Error formatting list.", t));
        }
        return r;
      }
      var V = ["localeMatcher", "style", "type", "fallback"];
      function X(e, t, r, n) {
        var o = e.locale,
          e = e.onError,
          n =
            (Intl.DisplayNames ||
              e(
                new p.b(
                  'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
                  p.a.MISSING_INTL_API
                )
              ),
            Object(u.d)(n, V));
        try {
          return t(o, n).of(r);
        } catch (t) {
          e(new g.a(g.b.FORMAT_ERROR, "Error formatting display name.", t));
        }
      }
      function K(t) {
        return "string" == typeof (t ? t[Object.keys(t)[0]] : void 0);
      }
      function Z(t) {
        t.onWarn &&
          t.defaultRichTextElements &&
          K(t.messages || {}) &&
          t.onWarn(
            '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution'
          );
      }
      function $(t, e) {
        var e = Object(u.b)(e),
          t = Object(b.a)(Object(b.a)({}, u.a), t),
          r = t.locale,
          n = t.defaultLocale,
          o = t.onError;
        return (
          r
            ? !Intl.NumberFormat.supportedLocalesOf(r).length && o
              ? o(
                  new g.f(
                    'Missing locale data for locale: "'
                      .concat(r, '" in Intl.NumberFormat. Using default locale: "')
                      .concat(n, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')
                  )
                )
              : !Intl.DateTimeFormat.supportedLocalesOf(r).length &&
                o &&
                o(
                  new g.f(
                    'Missing locale data for locale: "'
                      .concat(r, '" in Intl.DateTimeFormat. Using default locale: "')
                      .concat(n, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')
                  )
                )
            : (o &&
                o(
                  new g.d(
                    '"locale" was not configured, using "'.concat(
                      n,
                      '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'
                    )
                  )
                ),
              (t.locale = t.defaultLocale || "en")),
          Z(t),
          Object(b.a)(Object(b.a)({}, t), {
            formatters: e,
            formatNumber: f.bind(null, t, e.getNumberFormat),
            formatNumberToParts: m.bind(null, t, e.getNumberFormat),
            formatRelativeTime: O.bind(null, t, e.getRelativeTimeFormat),
            formatDate: A.bind(null, t, e.getDateTimeFormat),
            formatDateToParts: R.bind(null, t, e.getDateTimeFormat),
            formatTime: H.bind(null, t, e.getDateTimeFormat),
            formatDateTimeRange: P.bind(null, t, e.getDateTimeFormat),
            formatTimeToParts: w.bind(null, t, e.getDateTimeFormat),
            formatPlural: U.bind(null, t, e.getPluralRules),
            formatMessage: c.bind(null, t, e),
            $t: c.bind(null, t, e),
            formatList: x.bind(null, t, e.getListFormat),
            formatListToParts: B.bind(null, t, e.getListFormat),
            formatDisplayName: X.bind(null, t, e.getDisplayNames)
          })
        );
      }
      var Y = e(171);
      function I(t) {
        return {
          locale: t.locale,
          timeZone: t.timeZone,
          fallbackOnEmptyString: t.fallbackOnEmptyString,
          formats: t.formats,
          textComponent: t.textComponent,
          messages: t.messages,
          defaultLocale: t.defaultLocale,
          defaultFormats: t.defaultFormats,
          onError: t.onError,
          onWarn: t.onWarn,
          wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
          defaultRichTextElements: t.defaultRichTextElements
        };
      }
      function L(n) {
        return (
          n &&
          Object.keys(n).reduce(function (t, e) {
            var r = n[e];
            return (t[e] = Object(Y.c)(r) ? Object(o.b)(r) : r), t;
          }, {})
        );
      }
      e.d(t, "a", function () {
        return C;
      });
      var j,
        W = function (t, e, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          (n = L(n)), (t = c.apply(void 0, Object(b.d)([t, e, r, n], o, !1)));
          return Array.isArray(t) ? a.Children.toArray(t) : t;
        },
        C = function (t, e) {
          var r = t.defaultRichTextElements,
            t = Object(b.c)(t, ["defaultRichTextElements"]),
            r = L(r),
            t = $(
              Object(b.a)(Object(b.a)(Object(b.a)({}, o.a), t), {
                defaultRichTextElements: r
              }),
              e
            );
          return Object(b.a)(Object(b.a)({}, t), {
            formatMessage: W.bind(
              null,
              {
                locale: t.locale,
                timeZone: t.timeZone,
                fallbackOnEmptyString: t.fallbackOnEmptyString,
                formats: t.formats,
                defaultLocale: t.defaultLocale,
                defaultFormats: t.defaultFormats,
                messages: t.messages,
                onError: t.onError,
                defaultRichTextElements: r
              },
              t.formatters
            )
          });
        },
        e =
          ((j = a.PureComponent),
          Object(b.b)(M, j),
          (M.getDerivedStateFromProps = function (t, e) {
            var r = e.prevConfig,
              e = e.cache,
              t = I(t);
            return Object(o.d)(r, t)
              ? null
              : {
                  intl: C(t, e),
                  prevConfig: t
                };
          }),
          (M.prototype.render = function () {
            return (
              Object(o.c)(this.state.intl),
              a.createElement(
                r.b,
                {
                  value: this.state.intl
                },
                this.props.children
              )
            );
          }),
          (M.displayName = "IntlProvider"),
          (M.defaultProps = o.a),
          M);
      function M() {
        var t = (null !== j && j.apply(this, arguments)) || this;
        return (
          (t.cache = Object(u.c)()),
          (t.state = {
            cache: t.cache,
            intl: C(I(t.props), t.cache),
            prevConfig: I(t.props)
          }),
          t
        );
      }
      t.b = e;
    },
    53: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r(2),
        o = r(12),
        i = r(60);
      function a() {
        var t = n.useContext(o.a);
        return Object(i.c)(t), t;
      }
    },
    6: function (t, e, r) {
      "use strict";
      var o = r(8),
        u = r(2),
        l = r(53),
        i = r(60);
      function n(t, e) {
        var r = t.values,
          t = Object(o.c)(t, ["values"]),
          n = e.values,
          e = Object(o.c)(e, ["values"]);
        return Object(i.d)(n, r) && Object(i.d)(t, e);
      }
      function a(t) {
        var e = Object(l.a)(),
          r = e.formatMessage,
          e = e.textComponent,
          e = void 0 === e ? u.Fragment : e,
          n = t.id,
          o = t.description,
          i = t.defaultMessage,
          a = t.values,
          s = t.children,
          c = t.tagName,
          e = void 0 === c ? e : c,
          c = r(
            {
              id: n,
              description: o,
              defaultMessage: i
            },
            a,
            {
              ignoreTag: t.ignoreTag
            }
          );
        return "function" == typeof s
          ? s(Array.isArray(c) ? c : [c])
          : e
          ? u.createElement(e, null, u.Children.toArray(c))
          : u.createElement(u.Fragment, null, c);
      }
      a.displayName = "FormattedMessage";
      r = u.memo(a, n);
      (r.displayName = "MemoizedFormattedMessage"), (e.a = r);
    },
    60: function (t, e, r) {
      "use strict";
      r.d(e, "c", function () {
        return i;
      }),
        r.d(e, "a", function () {
          return a;
        }),
        r.d(e, "b", function () {
          return s;
        }),
        r.d(e, "d", function () {
          return c;
        });
      var e = r(8),
        n = r(2),
        o = r(365),
        r = r(37);
      function i(t) {
        Object(o.a)(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
      }
      var a = Object(e.a)(Object(e.a)({}, r.a), {
        textComponent: n.Fragment
      });
      function s(e) {
        return function (t) {
          return e(n.Children.toArray(t));
        };
      }
      function c(t, e) {
        if (t !== e) {
          if (!t || !e) return !1;
          var r = Object.keys(t),
            n = Object.keys(e),
            o = r.length;
          if (n.length !== o) return !1;
          for (var i = 0; i < o; i++) {
            var a = r[i];
            if (t[a] !== e[a] || !Object.prototype.hasOwnProperty.call(e, a)) return !1;
          }
        }
        return !0;
      }
    },
    8: function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return o;
      }),
        r.d(e, "a", function () {
          return i;
        }),
        r.d(e, "c", function () {
          return a;
        }),
        r.d(e, "d", function () {
          return s;
        });
      var n = function (t, e) {
        return (n =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array
            ? function (t, e) {
                t.__proto__ = e;
              }
            : function (t, e) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              }))(t, e);
      };
      function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      function a(t, e) {
        var r = {};
        for (o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (var n = 0, o = Object.getOwnPropertySymbols(t); n < o.length; n++)
            e.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[n]) && (r[o[n]] = t[o[n]]);
        return r;
      }
      Object.create;
      function s(t, e, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, i = e.length; o < i; o++) (!n && o in e) || ((n = n || Array.prototype.slice.call(e, 0, o))[o] = e[o]);
        return t.concat(n || Array.prototype.slice.call(e));
      }
      Object.create;
    },
    9: function (F, t, e) {
      "use strict";
      e.r(t);
      var r,
        n,
        f = e(8),
        m = e(2),
        a = e(53),
        o =
          (((_ = r = r || {}).formatDate = "FormattedDate"),
          (_.formatTime = "FormattedTime"),
          (_.formatNumber = "FormattedNumber"),
          (_.formatList = "FormattedList"),
          (_.formatDisplayName = "FormattedDisplayName"),
          ((_ = n = n || {}).formatDate = "FormattedDateParts"),
          (_.formatTime = "FormattedTimeParts"),
          (_.formatNumber = "FormattedNumberParts"),
          (_.formatList = "FormattedListParts"),
          function (t) {
            var e = Object(a.a)(),
              r = t.value,
              n = t.children,
              t = Object(f.c)(t, ["value", "children"]);
            return n(e.formatNumberToParts(r, t));
          }),
        i =
          ((o.displayName = "FormattedNumberParts"),
          function (t) {
            var e = Object(a.a)(),
              r = t.value,
              n = t.children,
              t = Object(f.c)(t, ["value", "children"]);
            return n(e.formatListToParts(r, t));
          });
      function s(o) {
        var t = function (t) {
          var e = Object(a.a)(),
            r = t.value,
            n = t.children,
            t = Object(f.c)(t, ["value", "children"]),
            r = "string" == typeof r ? new Date(r || 0) : r;
          return n("formatDate" === o ? e.formatDateToParts(r, t) : e.formatTimeToParts(r, t));
        };
        return (t.displayName = n[o]), t;
      }
      function c(o) {
        var t = function (t) {
          var e = Object(a.a)(),
            r = t.value,
            n = t.children,
            t = Object(f.c)(t, ["value", "children"]),
            r = e[o](r, t);
          return "function" == typeof n ? n(r) : ((t = e.textComponent || m.Fragment), m.createElement(t, null, r));
        };
        return (t.displayName = r[o]), t;
      }
      o.displayName = "FormattedNumberParts";
      var u = e(12),
        l = e(50),
        p = e(365),
        h = 60,
        b = 3600,
        d = 86400;
      function g(t) {
        t = Math.abs(t);
        return t < h ? "second" : t < b ? "minute" : t < d ? "hour" : "day";
      }
      function E(t) {
        switch (t) {
          case "second":
            return 1;

          case "minute":
            return h;

          case "hour":
            return b;

          default:
            return d;
        }
      }
      function y(t, e) {
        if (!t) return 0;
        switch (e) {
          case "second":
            return t;

          case "minute":
            return t * h;

          default:
            return t * b;
        }
      }
      var v = ["second", "minute", "hour"];
      function T(t) {
        return -1 < v.indexOf((t = void 0 === t ? "second" : t));
      }
      var O = function (t) {
          var e = Object(a.a)(),
            r = e.formatRelativeTime,
            e = e.textComponent,
            n = t.children,
            r = r(t.value || 0, t.unit, Object(f.c)(t, ["children", "value", "unit"]));
          return "function" == typeof n ? n(r) : e ? m.createElement(e, null, r) : m.createElement(m.Fragment, null, r);
        },
        _ = function (t) {
          var o,
            e = t.value,
            i = t.unit,
            a = t.updateIntervalInSeconds,
            t = Object(f.c)(t, ["value", "unit", "updateIntervalInSeconds"]),
            r = (Object(p.a)(!a || !(!a || !T(i)), "Cannot schedule update with unit longer than hour"), m.useState()),
            n = r[0],
            r = r[1],
            s = m.useState(0),
            c = s[0],
            s = s[1],
            u = m.useState(0),
            l = u[0],
            h = u[1],
            u =
              ((i === n && e === c) || (s(e || 0), r(i), h(T(i) ? y(e, i) : 0)),
              m.useEffect(
                function () {
                  function t() {
                    clearTimeout(o);
                  }
                  var e, r, n;
                  return (
                    t(),
                    a &&
                      T(i) &&
                      "day" !== (n = g((e = l - a))) &&
                      ((n = E(n)), (r = l <= (e = e - (e % n)) ? e - n : e), (n = Math.abs(r - l)), l !== r) &&
                      (o = setTimeout(function () {
                        return h(r);
                      }, 1e3 * n)),
                    t
                  );
                },
                [l, a, i]
              ),
              e || 0),
            n = i;
          return (
            T(i) && "number" == typeof l && a && ((c = E((n = g(l)))), (u = Math.round(l / c))),
            m.createElement(
              O,
              Object(f.a)(
                {
                  value: u,
                  unit: n
                },
                t
              )
            )
          );
        },
        S =
          ((_.displayName = "FormattedRelativeTime"),
          (_.defaultProps = {
            value: 0,
            unit: "second"
          }),
          _),
        _ = function (t) {
          var e = Object(a.a)(),
            r = e.formatPlural,
            e = e.textComponent,
            n = t.value,
            o = t.other,
            i = t.children,
            r = t[r(n, t)] || o;
          return "function" == typeof i ? i(r) : e ? m.createElement(e, null, r) : r;
        },
        A =
          ((_.defaultProps = {
            type: "cardinal"
          }),
          (_.displayName = "FormattedPlural"),
          _),
        H = e(6),
        _ = function (t) {
          var e = Object(a.a)(),
            r = t.from,
            n = t.to,
            o = t.children,
            t = Object(f.c)(t, ["from", "to", "children"]),
            r = e.formatDateTimeRange(r, n, t);
          return "function" == typeof o ? o(r) : ((n = e.textComponent || m.Fragment), m.createElement(n, null, r));
        },
        P = ((_.displayName = "FormattedDateTimeRange"), _),
        R = e(37),
        N = e(22);
      function B(t) {
        return t;
      }
      function I(t) {
        return t;
      }
      e.d(t, "defineMessages", function () {
        return B;
      }),
        e.d(t, "defineMessage", function () {
          return I;
        }),
        e.d(t, "FormattedDate", function () {
          return L;
        }),
        e.d(t, "FormattedTime", function () {
          return j;
        }),
        e.d(t, "FormattedNumber", function () {
          return C;
        }),
        e.d(t, "FormattedList", function () {
          return M;
        }),
        e.d(t, "FormattedDisplayName", function () {
          return w;
        }),
        e.d(t, "FormattedDateParts", function () {
          return D;
        }),
        e.d(t, "FormattedTimeParts", function () {
          return U;
        }),
        e.d(t, "FormattedDateTimeRange", function () {
          return P;
        }),
        e.d(t, "FormattedMessage", function () {
          return H.a;
        }),
        e.d(t, "FormattedPlural", function () {
          return A;
        }),
        e.d(t, "FormattedRelativeTime", function () {
          return S;
        }),
        e.d(t, "IntlContext", function () {
          return u.a;
        }),
        e.d(t, "IntlProvider", function () {
          return l.b;
        }),
        e.d(t, "RawIntlProvider", function () {
          return u.b;
        }),
        e.d(t, "createIntl", function () {
          return l.a;
        }),
        e.d(t, "injectIntl", function () {
          return u.c;
        }),
        e.d(t, "useIntl", function () {
          return a.a;
        }),
        e.d(t, "createIntlCache", function () {
          return R.c;
        }),
        e.d(t, "UnsupportedFormatterError", function () {
          return N.h;
        }),
        e.d(t, "InvalidConfigError", function () {
          return N.d;
        }),
        e.d(t, "MissingDataError", function () {
          return N.f;
        }),
        e.d(t, "MessageFormatError", function () {
          return N.e;
        }),
        e.d(t, "MissingTranslationError", function () {
          return N.g;
        }),
        e.d(t, "ReactIntlErrorCode", function () {
          return N.b;
        }),
        e.d(t, "ReactIntlError", function () {
          return N.a;
        }),
        e.d(t, "FormattedNumberParts", function () {
          return o;
        }),
        e.d(t, "FormattedListParts", function () {
          return i;
        });
      var L = c("formatDate"),
        j = c("formatTime"),
        C = c("formatNumber"),
        M = c("formatList"),
        w = c("formatDisplayName"),
        D = s("formatDate"),
        U = s("formatTime");
    },
    94: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return o;
      }),
        r.d(e, "b", function () {
          return i;
        }),
        r.d(e, "c", function () {
          return c;
        }),
        r.d(e, "d", function () {
          return h;
        }),
        r.d(e, "e", function () {
          return p;
        });
      var o,
        n,
        e = r(8),
        i =
          (((r = o = o || {}).MISSING_VALUE = "MISSING_VALUE"),
          (r.INVALID_VALUE = "INVALID_VALUE"),
          (r.MISSING_INTL_API = "MISSING_INTL_API"),
          (n = Error),
          Object(e.b)(a, n),
          (a.prototype.toString = function () {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
          }),
          a);
      function a(t, e, r) {
        t = n.call(this, t) || this;
        return (t.code = e), (t.originalMessage = r), t;
      }
      (s = i), Object(e.b)(u, s);
      var s,
        c = u;
      function u(t, e, r, n) {
        return (
          s.call(
            this,
            'Invalid values for "'.concat(t, '": "').concat(e, '". Options are "').concat(Object.keys(r).join('", "'), '"'),
            o.INVALID_VALUE,
            n
          ) || this
        );
      }
      (l = i), Object(e.b)(f, l);
      var l,
        h = f;
      function f(t, e, r) {
        return l.call(this, 'Value for "'.concat(t, '" must be of type ').concat(e), o.INVALID_VALUE, r) || this;
      }
      (m = i), Object(e.b)(b, m);
      var m,
        p = b;
      function b(t, e) {
        return (
          m.call(
            this,
            'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(e, '"'),
            o.MISSING_VALUE,
            e
          ) || this
        );
      }
    }
  }
]);
