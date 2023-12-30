/*! For license information please see spdf.js.LICENSE.txt */
(() => {
  var e = {
      8679: (e, t, n) => {
        "use strict";
        var r = n(1296),
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
          i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
          a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
          l = {};
        function s(e) {
          return r.isMemo(e) ? a : l[e.$$typeof] || o;
        }
        (l[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (l[r.Memo] = a);
        var c = Object.defineProperty,
          u = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (h) {
              var o = p(n);
              o && o !== h && e(t, o, r);
            }
            var a = u(n);
            d && (a = a.concat(d(n)));
            for (var l = s(t), m = s(n), g = 0; g < a.length; ++g) {
              var v = a[g];
              if (!(i[v] || (r && r[v]) || (m && m[v]) || (l && l[v]))) {
                var y = f(n, v);
                try {
                  c(t, v, y);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      6103: (e, t) => {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          i = n ? Symbol.for("react.fragment") : 60107,
          a = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          s = n ? Symbol.for("react.provider") : 60109,
          c = n ? Symbol.for("react.context") : 60110,
          u = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          f = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          g = n ? Symbol.for("react.lazy") : 60116,
          v = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          w = n ? Symbol.for("react.responder") : 60118,
          b = n ? Symbol.for("react.scope") : 60119;
        function E(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case u:
                  case d:
                  case i:
                  case l:
                  case a:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case f:
                      case g:
                      case m:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function L(e) {
          return E(e) === d;
        }
        (t.AsyncMode = u),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = c),
          (t.ContextProvider = s),
          (t.Element = r),
          (t.ForwardRef = f),
          (t.Fragment = i),
          (t.Lazy = g),
          (t.Memo = m),
          (t.Portal = o),
          (t.Profiler = l),
          (t.StrictMode = a),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return L(e) || E(e) === u;
          }),
          (t.isConcurrentMode = L),
          (t.isContextConsumer = function (e) {
            return E(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return E(e) === s;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return E(e) === f;
          }),
          (t.isFragment = function (e) {
            return E(e) === i;
          }),
          (t.isLazy = function (e) {
            return E(e) === g;
          }),
          (t.isMemo = function (e) {
            return E(e) === m;
          }),
          (t.isPortal = function (e) {
            return E(e) === o;
          }),
          (t.isProfiler = function (e) {
            return E(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return E(e) === a;
          }),
          (t.isSuspense = function (e) {
            return E(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === i ||
              e === d ||
              e === l ||
              e === a ||
              e === p ||
              e === h ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === m ||
                  e.$$typeof === s ||
                  e.$$typeof === c ||
                  e.$$typeof === f ||
                  e.$$typeof === y ||
                  e.$$typeof === w ||
                  e.$$typeof === b ||
                  e.$$typeof === v))
            );
          }),
          (t.typeOf = E);
      },
      1296: (e, t, n) => {
        "use strict";
        e.exports = n(6103);
      },
      7418: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function o(e) {
          if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, i) {
              for (var a, l, s = o(e), c = 1; c < arguments.length; c++) {
                for (var u in (a = Object(arguments[c]))) n.call(a, u) && (s[u] = a[u]);
                if (t) {
                  l = t(a);
                  for (var d = 0; d < l.length; d++) r.call(a, l[d]) && (s[l[d]] = a[l[d]]);
                }
              }
              return s;
            };
      },
      4448: (e, t, n) => {
        "use strict";
        var r = n(7294),
          o = n(7418),
          i = n(3840);
        function a(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(a(227));
        var l = new Set(),
          s = {};
        function c(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var d = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          m = {};
        function g(e, t, n, r, o, i, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = a);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            v[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
            v[e] = new g(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function w(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = v.hasOwnProperty(t) ? v[t] : null;
          (null !== o ? 0 === o.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return !!p.call(m, e) || (!p.call(h, e) && (f.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)));
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, w);
            v[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
            var t = e.replace(y, w);
            v[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, w);
            v[t] = new g(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          L = 60103,
          _ = 60106,
          x = 60107,
          S = 60108,
          A = 60114,
          k = 60109,
          C = 60110,
          P = 60112,
          T = 60113,
          I = 60120,
          R = 60115,
          O = 60116,
          N = 60121,
          D = 60128,
          F = 60129,
          M = 60130,
          $ = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var j = Symbol.for;
          (L = j("react.element")),
            (_ = j("react.portal")),
            (x = j("react.fragment")),
            (S = j("react.strict_mode")),
            (A = j("react.profiler")),
            (k = j("react.provider")),
            (C = j("react.context")),
            (P = j("react.forward_ref")),
            (T = j("react.suspense")),
            (I = j("react.suspense_list")),
            (R = j("react.memo")),
            (O = j("react.lazy")),
            (N = j("react.block")),
            j("react.scope"),
            (D = j("react.opaque.id")),
            (F = j("react.debug_trace_mode")),
            (M = j("react.offscreen")),
            ($ = j("react.legacy_hidden"));
        }
        var z,
          U = "function" == typeof Symbol && Symbol.iterator;
        function V(e) {
          return null === e || "object" != typeof e ? null : "function" == typeof (e = (U && e[U]) || e["@@iterator"]) ? e : null;
        }
        function K(e) {
          if (void 0 === z)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              z = (t && t[1]) || "";
            }
          return "\n" + z + e;
        }
        var H = !1;
        function B(e, t) {
          if (!e || H) return "";
          H = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  }
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (e) {
            if (e && r && "string" == typeof e.stack) {
              for (
                var o = e.stack.split("\n"), i = r.stack.split("\n"), a = o.length - 1, l = i.length - 1;
                1 <= a && 0 <= l && o[a] !== i[l];

              )
                l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== i[l]) {
                  if (1 !== a || 1 !== l)
                    do {
                      if ((a--, 0 > --l || o[a] !== i[l])) return "\n" + o[a].replace(" at new ", " at ");
                    } while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            (H = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? K(e) : "";
        }
        function G(e) {
          switch (e.tag) {
            case 5:
              return K(e.type);
            case 16:
              return K("Lazy");
            case 13:
              return K("Suspense");
            case 19:
              return K("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 22:
              return (e = B(e.type._render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function Y(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case _:
              return "Portal";
            case A:
              return "Profiler";
            case S:
              return "StrictMode";
            case T:
              return "Suspense";
            case I:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case k:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (t = t.displayName || t.name || ""), e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
              case R:
                return Y(e.type);
              case N:
                return Y(e._render);
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return Y(e(t));
                } catch (e) {}
            }
          return null;
        }
        function Z(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var o = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    }
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    }
                  }
                );
              }
            })(e));
        }
        function X(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return e && (r = W(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
        }
        function Q(e) {
          if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Z(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
            });
        }
        function te(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Z(t.value),
            r = t.type;
          if (null != n)
            "number" === r ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
          t.hasOwnProperty("value") ? oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && oe(e, t.type, Z(t.defaultValue)),
            null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
            (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== n && (e.name = n);
        }
        function oe(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ie(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ae(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Z(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return o({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
        }
        function se(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Z(n) };
        }
        function ce(e, t) {
          var n = Z(t.value),
            r = Z(t.defaultValue);
          null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ue(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
        }
        var de = "http://www.w3.org/1999/xhtml",
          fe = "http://www.w3.org/2000/svg";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function he(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var me,
          ge,
          ve =
            ((ge = function (e, t) {
              if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (me = me || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = me.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ge(e, t);
                  });
                }
              : ge);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var we = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
          },
          be = ["Webkit", "ms", "Moz", "O"];
        function Ee(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n || "number" != typeof t || 0 === t || (we.hasOwnProperty(e) && we[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function Le(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = Ee(n, t[n], r);
              "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(we).forEach(function (e) {
          be.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (we[t] = we[e]);
          });
        });
        var _e = o(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
          }
        );
        function xe(e, t) {
          if (t) {
            if (_e[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
            }
            if (null != t.style && "object" != typeof t.style) throw Error(a(62));
          }
        }
        function Se(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Ae(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ce = null,
          Pe = null;
        function Te(e) {
          if ((e = ro(e))) {
            if ("function" != typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = io(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ie(e) {
          Ce ? (Pe ? Pe.push(e) : (Pe = [e])) : (Ce = e);
        }
        function Re() {
          if (Ce) {
            var e = Ce,
              t = Pe;
            if (((Pe = Ce = null), Te(e), t)) for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Ne(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function De() {}
        var Fe = Oe,
          Me = !1,
          $e = !1;
        function je() {
          (null === Ce && null === Pe) || (De(), Re());
        }
        function ze(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = io(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Ue = !1;
        if (d)
          try {
            var Ve = {};
            Object.defineProperty(Ve, "passive", {
              get: function () {
                Ue = !0;
              }
            }),
              window.addEventListener("test", Ve, Ve),
              window.removeEventListener("test", Ve, Ve);
          } catch (ge) {
            Ue = !1;
          }
        function Ke(e, t, n, r, o, i, a, l, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            this.onError(e);
          }
        }
        var He = !1,
          Be = null,
          Ge = !1,
          Ye = null,
          Ze = {
            onError: function (e) {
              (He = !0), (Be = e);
            }
          };
        function We(e, t, n, r, o, i, a, l, s) {
          (He = !1), (Be = null), Ke.apply(Ze, arguments);
        }
        function qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Xe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
          }
          return null;
        }
        function Qe(e) {
          if (qe(e) !== e) throw Error(a(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = qe(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Qe(o), e;
                    if (i === r) return Qe(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          ot,
          it = !1,
          at = [],
          lt = null,
          st = null,
          ct = null,
          ut = new Map(),
          dt = new Map(),
          ft = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function ht(e, t, n, r, o) {
          return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: o, targetContainers: [r] };
        }
        function mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              lt = null;
              break;
            case "dragenter":
            case "dragleave":
              st = null;
              break;
            case "mouseover":
            case "mouseout":
              ct = null;
              break;
            case "pointerover":
            case "pointerout":
              ut.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              dt.delete(t.pointerId);
          }
        }
        function gt(e, t, n, r, o, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = ht(t, n, r, o, i)), null !== t && null !== (t = ro(t)) && nt(t), e)
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== o && -1 === t.indexOf(o) && t.push(o), e);
        }
        function vt(e) {
          var t = no(e.target);
          if (null !== t) {
            var n = qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Xe(n)))
                  return (
                    (e.blockedOn = t),
                    void ot(e.lanePriority, function () {
                      i.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = ro(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function wt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function bt() {
          for (it = !1; 0 < at.length; ) {
            var e = at[0];
            if (null !== e.blockedOn) {
              null !== (e = ro(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && at.shift();
          }
          null !== lt && yt(lt) && (lt = null),
            null !== st && yt(st) && (st = null),
            null !== ct && yt(ct) && (ct = null),
            ut.forEach(wt),
            dt.forEach(wt);
        }
        function Et(e, t) {
          e.blockedOn === t && ((e.blockedOn = null), it || ((it = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, bt)));
        }
        function Lt(e) {
          function t(t) {
            return Et(t, e);
          }
          if (0 < at.length) {
            Et(at[0], e);
            for (var n = 1; n < at.length; n++) {
              var r = at[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== lt && Et(lt, e), null !== st && Et(st, e), null !== ct && Et(ct, e), ut.forEach(t), dt.forEach(t), n = 0;
            n < ft.length;
            n++
          )
            (r = ft[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ft.length && null === (n = ft[0]).blockedOn; ) vt(n), null === n.blockedOn && ft.shift();
        }
        function _t(e, t) {
          var n = {};
          return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
        }
        var xt = {
            animationend: _t("Animation", "AnimationEnd"),
            animationiteration: _t("Animation", "AnimationIteration"),
            animationstart: _t("Animation", "AnimationStart"),
            transitionend: _t("Transition", "TransitionEnd")
          },
          St = {},
          At = {};
        function kt(e) {
          if (St[e]) return St[e];
          if (!xt[e]) return e;
          var t,
            n = xt[e];
          for (t in n) if (n.hasOwnProperty(t) && t in At) return (St[e] = n[t]);
          return e;
        }
        d &&
          ((At = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xt.animationend.animation, delete xt.animationiteration.animation, delete xt.animationstart.animation),
          "TransitionEvent" in window || delete xt.transitionend.transition);
        var Ct = kt("animationend"),
          Pt = kt("animationiteration"),
          Tt = kt("animationstart"),
          It = kt("transitionend"),
          Rt = new Map(),
          Ot = new Map(),
          Nt = [
            "abort",
            "abort",
            Ct,
            "animationEnd",
            Pt,
            "animationIteration",
            Tt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            It,
            "transitionEnd",
            "waiting",
            "waiting"
          ];
        function Dt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            (o = "on" + (o[0].toUpperCase() + o.slice(1))), Ot.set(r, t), Rt.set(r, o), c(o, [r]);
          }
        }
        (0, i.unstable_now)();
        var Ft = 8;
        function Mt(e) {
          if (0 != (1 & e)) return (Ft = 15), 1;
          if (0 != (2 & e)) return (Ft = 14), 2;
          if (0 != (4 & e)) return (Ft = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Ft = 12), t)
            : 0 != (32 & e)
            ? ((Ft = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((Ft = 10), t)
            : 0 != (256 & e)
            ? ((Ft = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((Ft = 8), t)
            : 0 != (4096 & e)
            ? ((Ft = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((Ft = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((Ft = 5), t)
            : 67108864 & e
            ? ((Ft = 4), 67108864)
            : 0 != (134217728 & e)
            ? ((Ft = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((Ft = 2), t)
            : 0 != (1073741824 & e)
            ? ((Ft = 1), 1073741824)
            : ((Ft = 8), e);
        }
        function $t(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Ft = 0);
          var r = 0,
            o = 0,
            i = e.expiredLanes,
            a = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== i) (r = i), (o = Ft = 15);
          else if (0 !== (i = 134217727 & n)) {
            var s = i & ~a;
            0 !== s ? ((r = Mt(s)), (o = Ft)) : 0 !== (l &= i) && ((r = Mt(l)), (o = Ft));
          } else 0 !== (i = n & ~a) ? ((r = Mt(i)), (o = Ft)) : 0 !== l && ((r = Mt(l)), (o = Ft));
          if (0 === r) return 0;
          if (((r = n & (((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 == (t & a))) {
            if ((Mt(t), o <= Ft)) return t;
            Ft = o;
          }
          if (0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t; ) (o = 1 << (n = 31 - Ht(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function jt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function zt(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ut(24 & ~t)) ? zt(10, t) : e;
            case 10:
              return 0 === (e = Ut(192 & ~t)) ? zt(8, t) : e;
            case 8:
              return 0 === (e = Ut(3584 & ~t)) && 0 === (e = Ut(4186112 & ~t)) && (e = 512), e;
            case 2:
              return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(a(358, e));
        }
        function Ut(e) {
          return e & -e;
        }
        function Vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Kt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Ht(t))] = n);
        }
        var Ht = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Bt(e) / Gt) | 0)) | 0;
              },
          Bt = Math.log,
          Gt = Math.LN2;
        var Yt = i.unstable_UserBlockingPriority,
          Zt = i.unstable_runWithPriority,
          Wt = !0;
        function qt(e, t, n, r) {
          Me || De();
          var o = Qt,
            i = Me;
          Me = !0;
          try {
            Ne(o, e, t, n, r);
          } finally {
            (Me = i) || je();
          }
        }
        function Xt(e, t, n, r) {
          Zt(Yt, Qt.bind(null, e, t, n, r));
        }
        function Qt(e, t, n, r) {
          var o;
          if (Wt)
            if ((o = 0 == (4 & t)) && 0 < at.length && -1 < pt.indexOf(e)) (e = ht(null, e, t, n, r)), at.push(e);
            else {
              var i = Jt(e, t, n, r);
              if (null === i) o && mt(e, r);
              else {
                if (o) {
                  if (-1 < pt.indexOf(e)) return (e = ht(i, e, t, n, r)), void at.push(e);
                  if (
                    (function (e, t, n, r, o) {
                      switch (t) {
                        case "focusin":
                          return (lt = gt(lt, e, t, n, r, o)), !0;
                        case "dragenter":
                          return (st = gt(st, e, t, n, r, o)), !0;
                        case "mouseover":
                          return (ct = gt(ct, e, t, n, r, o)), !0;
                        case "pointerover":
                          var i = o.pointerId;
                          return ut.set(i, gt(ut.get(i) || null, e, t, n, r, o)), !0;
                        case "gotpointercapture":
                          return (i = o.pointerId), dt.set(i, gt(dt.get(i) || null, e, t, n, r, o)), !0;
                      }
                      return !1;
                    })(i, e, t, n, r)
                  )
                    return;
                  mt(e, r);
                }
                Dr(e, t, r, null, n);
              }
            }
        }
        function Jt(e, t, n, r) {
          var o = Ae(r);
          if (null !== (o = no(o))) {
            var i = qe(o);
            if (null === i) o = null;
            else {
              var a = i.tag;
              if (13 === a) {
                if (null !== (o = Xe(i))) return o;
                o = null;
              } else if (3 === a) {
                if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                o = null;
              } else i !== o && (o = null);
            }
          }
          return Dr(e, t, r, o, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            o = "value" in en ? en.value : en.textContent,
            i = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
          return (nn = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function on(e) {
          var t = e.keyCode;
          return (
            "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function ln() {
          return !1;
        }
        function sn(e) {
          function t(t, n, r, o, i) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
            return (
              (this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? an : ln),
              (this.isPropagationStopped = ln),
              this
            );
          }
          return (
            o(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an
            }),
            t
          );
        }
        var cn,
          un,
          dn,
          fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
          },
          pn = sn(fn),
          hn = o({}, fn, { view: 0, detail: 0 }),
          mn = sn(hn),
          gn = o({}, hn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== dn &&
                    (dn && "mousemove" === e.type ? ((cn = e.screenX - dn.screenX), (un = e.screenY - dn.screenY)) : (un = cn = 0),
                    (dn = e)),
                  cn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : un;
            }
          }),
          vn = sn(gn),
          yn = sn(o({}, gn, { dataTransfer: 0 })),
          wn = sn(o({}, hn, { relatedTarget: 0 })),
          bn = sn(o({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          En = o({}, fn, {
            clipboardData: function (e) {
              return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
          }),
          Ln = sn(En),
          _n = sn(o({}, fn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
          },
          An = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = An[e]) && !!t[e];
        }
        function Cn() {
          return kn;
        }
        var Pn = o({}, hn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = on(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? on(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type ? on(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            }
          }),
          Tn = sn(Pn),
          In = sn(
            o({}, gn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0
            })
          ),
          Rn = sn(
            o({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn
            })
          ),
          On = sn(o({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Nn = o({}, gn, {
            deltaX: function (e) {
              return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
          }),
          Dn = sn(Nn),
          Fn = [9, 13, 27, 32],
          Mn = d && "CompositionEvent" in window,
          $n = null;
        d && "documentMode" in document && ($n = document.documentMode);
        var jn = d && "TextEvent" in window && !$n,
          zn = d && (!Mn || ($n && 8 < $n && 11 >= $n)),
          Un = String.fromCharCode(32),
          Vn = !1;
        function Kn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Fn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var Bn = !1;
        var Gn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0
        };
        function Yn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Gn[e.type] : "textarea" === t;
        }
        function Zn(e, t, n, r) {
          Ie(r), 0 < (t = Mr(t, "onChange")).length && ((n = new pn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
        }
        var Wn = null,
          qn = null;
        function Xn(e) {
          Pr(e, 0);
        }
        function Qn(e) {
          if (X(oo(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var er = !1;
        if (d) {
          var tr;
          if (d) {
            var nr = "oninput" in document;
            if (!nr) {
              var rr = document.createElement("div");
              rr.setAttribute("oninput", "return;"), (nr = "function" == typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function or() {
          Wn && (Wn.detachEvent("onpropertychange", ir), (qn = Wn = null));
        }
        function ir(e) {
          if ("value" === e.propertyName && Qn(qn)) {
            var t = [];
            if ((Zn(t, qn, e, Ae(e)), (e = Xn), Me)) e(t);
            else {
              Me = !0;
              try {
                Oe(e, t);
              } finally {
                (Me = !1), je();
              }
            }
          }
        }
        function ar(e, t, n) {
          "focusin" === e ? (or(), (qn = n), (Wn = t).attachEvent("onpropertychange", ir)) : "focusout" === e && or();
        }
        function lr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Qn(qn);
        }
        function sr(e, t) {
          if ("click" === e) return Qn(t);
        }
        function cr(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var ur =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                },
          dr = Object.prototype.hasOwnProperty;
        function fr(e, t) {
          if (ur(e, t)) return !0;
          if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) if (!dr.call(t, n[r]) || !ur(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function hr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function mr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? mr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function gr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function vr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yr = d && "documentMode" in document && 11 >= document.documentMode,
          wr = null,
          br = null,
          Er = null,
          Lr = !1;
        function _r(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          Lr ||
            null == wr ||
            wr !== Q(r) ||
            ("selectionStart" in (r = wr) && vr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset
                }),
            (Er && fr(Er, r)) ||
              ((Er = r),
              0 < (r = Mr(br, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = wr))));
        }
        Dt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Dt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Dt(Nt, 2);
        for (
          var xr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Sr = 0;
          Sr < xr.length;
          Sr++
        )
          Ot.set(xr[Sr], 0);
        u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
          c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
          c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
          c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
          c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
          c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          kr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
        function Cr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, s, c) {
              if ((We.apply(this, arguments), He)) {
                if (!He) throw Error(a(198));
                var u = Be;
                (He = !1), (Be = null), Ge || ((Ge = !0), (Ye = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Pr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var l = r[a],
                    s = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
                  Cr(o, l, c), (i = s);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (((s = (l = r[a]).instance), (c = l.currentTarget), (l = l.listener), s !== i && o.isPropagationStopped())) break e;
                  Cr(o, l, c), (i = s);
                }
            }
          }
          if (Ge) throw ((e = Ye), (Ge = !1), (Ye = null), e);
        }
        function Tr(e, t) {
          var n = ao(t),
            r = e + "__bubble";
          n.has(r) || (Nr(t, e, 2, !1), n.add(r));
        }
        var Ir = "_reactListening" + Math.random().toString(36).slice(2);
        function Rr(e) {
          e[Ir] ||
            ((e[Ir] = !0),
            l.forEach(function (t) {
              kr.has(t) || Or(t, !1, e, null), Or(t, !0, e, null);
            }));
        }
        function Or(e, t, n, r) {
          var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
            i = n;
          if (("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument), null !== r && !t && kr.has(e))) {
            if ("scroll" !== e) return;
            (o |= 2), (i = r);
          }
          var a = ao(i),
            l = e + "__" + (t ? "capture" : "bubble");
          a.has(l) || (t && (o |= 4), Nr(i, e, o, t), a.add(l));
        }
        function Nr(e, t, n, r) {
          var o = Ot.get(t);
          switch (void 0 === o ? 2 : o) {
            case 0:
              o = qt;
              break;
            case 1:
              o = Xt;
              break;
            default:
              o = Qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ue || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Dr(e, t, n, r, o) {
          var i = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var s = a.tag;
                    if ((3 === s || 4 === s) && ((s = a.stateNode.containerInfo) === o || (8 === s.nodeType && s.parentNode === o))) return;
                    a = a.return;
                  }
                for (; null !== l; ) {
                  if (null === (a = no(l))) return;
                  if (5 === (s = a.tag) || 6 === s) {
                    r = i = a;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if ($e) return e(t, n);
            $e = !0;
            try {
              Fe(e, t, n);
            } finally {
              ($e = !1), je();
            }
          })(function () {
            var r = i,
              o = Ae(n),
              a = [];
            e: {
              var l = Rt.get(e);
              if (void 0 !== l) {
                var s = pn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === on(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Tn;
                    break;
                  case "focusin":
                    (c = "focus"), (s = wn);
                    break;
                  case "focusout":
                    (c = "blur"), (s = wn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = wn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = vn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Rn;
                    break;
                  case Ct:
                  case Pt:
                  case Tt:
                    s = bn;
                    break;
                  case It:
                    s = On;
                    break;
                  case "scroll":
                    s = mn;
                    break;
                  case "wheel":
                    s = Dn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = Ln;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = In;
                }
                var u = 0 != (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== l ? l + "Capture" : null) : l;
                u = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if ((5 === p.tag && null !== m && ((p = m), null !== f && null != (m = ze(h, f)) && u.push(Fr(h, m, p))), d)) break;
                  h = h.return;
                }
                0 < u.length && ((l = new s(l, c, null, n, o)), a.push({ event: l, listeners: u }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 != (16 & t) ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!no(c) && !c[eo])) &&
                  (s || l) &&
                  ((l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window),
                  s
                    ? ((s = r),
                      null !== (c = (c = n.relatedTarget || n.toElement) ? no(c) : null) &&
                        (c !== (d = qe(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((u = vn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = In), (m = "onPointerLeave"), (f = "onPointerEnter"), (h = "pointer")),
                  (d = null == s ? l : oo(s)),
                  (p = null == c ? l : oo(c)),
                  ((l = new u(m, h + "leave", s, n, o)).target = d),
                  (l.relatedTarget = p),
                  (m = null),
                  no(o) === r && (((u = new u(f, h + "enter", c, n, o)).target = p), (u.relatedTarget = d), (m = u)),
                  (d = m),
                  s && c)
                )
                  e: {
                    for (f = c, h = 0, p = u = s; p; p = $r(p)) h++;
                    for (p = 0, m = f; m; m = $r(m)) p++;
                    for (; 0 < h - p; ) (u = $r(u)), h--;
                    for (; 0 < p - h; ) (f = $r(f)), p--;
                    for (; h--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = $r(u)), (f = $r(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== s && jr(a, l, s, u, !1), null !== c && null !== d && jr(a, d, c, u, !0);
              }
              if ("select" === (s = (l = r ? oo(r) : window).nodeName && l.nodeName.toLowerCase()) || ("input" === s && "file" === l.type))
                var g = Jn;
              else if (Yn(l))
                if (er) g = cr;
                else {
                  g = lr;
                  var v = ar;
                }
              else (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (g = sr);
              switch (
                (g && (g = g(e, r))
                  ? Zn(a, g, n, o)
                  : (v && v(e, l, r),
                    "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && oe(l, "number", l.value)),
                (v = r ? oo(r) : window),
                e)
              ) {
                case "focusin":
                  (Yn(v) || "true" === v.contentEditable) && ((wr = v), (br = r), (Er = null));
                  break;
                case "focusout":
                  Er = br = wr = null;
                  break;
                case "mousedown":
                  Lr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (Lr = !1), _r(a, n, o);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  _r(a, n, o);
              }
              var y;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var w = "onCompositionStart";
                      break e;
                    case "compositionend":
                      w = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      w = "onCompositionUpdate";
                      break e;
                  }
                  w = void 0;
                }
              else Bn ? Kn(e, n) && (w = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (w = "onCompositionStart");
              w &&
                (zn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== w
                    ? "onCompositionEnd" === w && Bn && (y = rn())
                    : ((tn = "value" in (en = o) ? en.value : en.textContent), (Bn = !0))),
                0 < (v = Mr(r, w)).length &&
                  ((w = new _n(w, e, null, n, o)),
                  a.push({ event: w, listeners: v }),
                  y ? (w.data = y) : null !== (y = Hn(n)) && (w.data = y))),
                (y = jn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Vn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Vn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn) return "compositionend" === e || (!Mn && Kn(e, t)) ? ((e = rn()), (nn = tn = en = null), (Bn = !1), e) : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return zn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Mr(r, "onBeforeInput")).length &&
                  ((o = new _n("onBeforeInput", "beforeinput", null, n, o)), a.push({ event: o, listeners: r }), (o.data = y));
            }
            Pr(a, t);
          });
        }
        function Fr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Mr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              i = o.stateNode;
            5 === o.tag &&
              null !== i &&
              ((o = i), null != (i = ze(e, n)) && r.unshift(Fr(e, i, o)), null != (i = ze(e, t)) && r.push(Fr(e, i, o))),
              (e = e.return);
          }
          return r;
        }
        function $r(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function jr(e, t, n, r, o) {
          for (var i = t._reactName, a = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              c = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c), o ? null != (s = ze(n, i)) && a.unshift(Fr(n, s, l)) : o || (null != (s = ze(n, i)) && a.push(Fr(n, s, l)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        function zr() {}
        var Ur = null,
          Vr = null;
        function Kr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Hr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Br = "function" == typeof setTimeout ? setTimeout : void 0,
          Gr = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function Yr(e) {
          1 === e.nodeType ? (e.textContent = "") : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Zr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Wr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var qr = 0;
        var Xr = Math.random().toString(36).slice(2),
          Qr = "__reactFiber$" + Xr,
          Jr = "__reactProps$" + Xr,
          eo = "__reactContainer$" + Xr,
          to = "__reactEvents$" + Xr;
        function no(e) {
          var t = e[Qr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[eo] || n[Qr])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Wr(e); null !== e; ) {
                  if ((n = e[Qr])) return n;
                  e = Wr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ro(e) {
          return !(e = e[Qr] || e[eo]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
        }
        function oo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function io(e) {
          return e[Jr] || null;
        }
        function ao(e) {
          var t = e[to];
          return void 0 === t && (t = e[to] = new Set()), t;
        }
        var lo = [],
          so = -1;
        function co(e) {
          return { current: e };
        }
        function uo(e) {
          0 > so || ((e.current = lo[so]), (lo[so] = null), so--);
        }
        function fo(e, t) {
          so++, (lo[so] = e.current), (e.current = t);
        }
        var po = {},
          ho = co(po),
          mo = co(!1),
          go = po;
        function vo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return po;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i
          );
        }
        function yo(e) {
          return null != (e = e.childContextTypes);
        }
        function wo() {
          uo(mo), uo(ho);
        }
        function bo(e, t, n) {
          if (ho.current !== po) throw Error(a(168));
          fo(ho, t), fo(mo, n);
        }
        function Eo(e, t, n) {
          var r = e.stateNode;
          if (((e = t.childContextTypes), "function" != typeof r.getChildContext)) return n;
          for (var i in (r = r.getChildContext())) if (!(i in e)) throw Error(a(108, Y(t) || "Unknown", i));
          return o({}, n, r);
        }
        function Lo(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || po),
            (go = ho.current),
            fo(ho, e),
            fo(mo, mo.current),
            !0
          );
        }
        function _o(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n ? ((e = Eo(e, t, go)), (r.__reactInternalMemoizedMergedChildContext = e), uo(mo), uo(ho), fo(ho, e)) : uo(mo), fo(mo, n);
        }
        var xo = null,
          So = null,
          Ao = i.unstable_runWithPriority,
          ko = i.unstable_scheduleCallback,
          Co = i.unstable_cancelCallback,
          Po = i.unstable_shouldYield,
          To = i.unstable_requestPaint,
          Io = i.unstable_now,
          Ro = i.unstable_getCurrentPriorityLevel,
          Oo = i.unstable_ImmediatePriority,
          No = i.unstable_UserBlockingPriority,
          Do = i.unstable_NormalPriority,
          Fo = i.unstable_LowPriority,
          Mo = i.unstable_IdlePriority,
          $o = {},
          jo = void 0 !== To ? To : function () {},
          zo = null,
          Uo = null,
          Vo = !1,
          Ko = Io(),
          Ho =
            1e4 > Ko
              ? Io
              : function () {
                  return Io() - Ko;
                };
        function Bo() {
          switch (Ro()) {
            case Oo:
              return 99;
            case No:
              return 98;
            case Do:
              return 97;
            case Fo:
              return 96;
            case Mo:
              return 95;
            default:
              throw Error(a(332));
          }
        }
        function Go(e) {
          switch (e) {
            case 99:
              return Oo;
            case 98:
              return No;
            case 97:
              return Do;
            case 96:
              return Fo;
            case 95:
              return Mo;
            default:
              throw Error(a(332));
          }
        }
        function Yo(e, t) {
          return (e = Go(e)), Ao(e, t);
        }
        function Zo(e, t, n) {
          return (e = Go(e)), ko(e, t, n);
        }
        function Wo() {
          if (null !== Uo) {
            var e = Uo;
            (Uo = null), Co(e);
          }
          qo();
        }
        function qo() {
          if (!Vo && null !== zo) {
            Vo = !0;
            var e = 0;
            try {
              var t = zo;
              Yo(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (zo = null);
            } catch (t) {
              throw (null !== zo && (zo = zo.slice(e + 1)), ko(Oo, Wo), t);
            } finally {
              Vo = !1;
            }
          }
        }
        var Xo = E.ReactCurrentBatchConfig;
        function Qo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Jo = co(null),
          ei = null,
          ti = null,
          ni = null;
        function ri() {
          ni = ti = ei = null;
        }
        function oi(e) {
          var t = Jo.current;
          uo(Jo), (e.type._context._currentValue = t);
        }
        function ii(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ai(e, t) {
          (ei = e),
            (ni = ti = null),
            null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (Ma = !0), (e.firstContext = null));
        }
        function li(e, t) {
          if (ni !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) || ((ni = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ti)
            ) {
              if (null === ei) throw Error(a(308));
              (ti = t), (ei.dependencies = { lanes: 0, firstContext: t, responders: null });
            } else ti = ti.next = t;
          return e._currentValue;
        }
        var si = !1;
        function ci(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null
          };
        }
        function ui(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
              });
        }
        function di(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function fi(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
          }
        }
        function pi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
        }
        function hi(e, t, n, r) {
          var i = e.updateQueue;
          si = !1;
          var a = i.firstBaseUpdate,
            l = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var c = s,
              u = c.next;
            (c.next = null), null === l ? (a = u) : (l.next = u), (l = c);
            var d = e.alternate;
            if (null !== d) {
              var f = (d = d.updateQueue).lastBaseUpdate;
              f !== l && (null === f ? (d.firstBaseUpdate = u) : (f.next = u), (d.lastBaseUpdate = c));
            }
          }
          if (null !== a) {
            for (f = i.baseState, l = 0, d = u = c = null; ; ) {
              s = a.lane;
              var p = a.eventTime;
              if ((r & s) === s) {
                null !== d && (d = d.next = { eventTime: p, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                  var h = e,
                    m = a;
                  switch (((s = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" == typeof (h = m.payload)) {
                        f = h.call(p, f, s);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (null == (s = "function" == typeof (h = m.payload) ? h.call(p, f, s) : h)) break e;
                      f = o({}, f, s);
                      break e;
                    case 2:
                      si = !0;
                  }
                }
                null !== a.callback && ((e.flags |= 32), null === (s = i.effects) ? (i.effects = [a]) : s.push(a));
              } else
                (p = { eventTime: p, lane: s, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                  null === d ? ((u = d = p), (c = f)) : (d = d.next = p),
                  (l |= s);
              if (null === (a = a.next)) {
                if (null === (s = i.shared.pending)) break;
                (a = s.next), (s.next = null), (i.lastBaseUpdate = s), (i.shared.pending = null);
              }
            }
            null === d && (c = f),
              (i.baseState = c),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = d),
              (Ul |= l),
              (e.lanes = l),
              (e.memoizedState = f);
          }
        }
        function mi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" != typeof o)) throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var gi = new r.Component().refs;
        function vi(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var yi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = fs(),
              o = ps(e),
              i = di(r, o);
            (i.payload = t), null != n && (i.callback = n), fi(e, i), hs(e, o, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = fs(),
              o = ps(e),
              i = di(r, o);
            (i.tag = 1), (i.payload = t), null != n && (i.callback = n), fi(e, i), hs(e, o, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = fs(),
              r = ps(e),
              o = di(n, r);
            (o.tag = 2), null != t && (o.callback = t), fi(e, o), hs(e, r, n);
          }
        };
        function wi(e, t, n, r, o, i, a) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !t.prototype || !t.prototype.isPureReactComponent || !fr(n, r) || !fr(o, i);
        }
        function bi(e, t, n) {
          var r = !1,
            o = po,
            i = t.contextType;
          return (
            "object" == typeof i && null !== i
              ? (i = li(i))
              : ((o = yo(t) ? go : ho.current), (i = (r = null != (r = t.contextTypes)) ? vo(e, o) : po)),
            (t = new t(n, i)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = yi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Ei(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && yi.enqueueReplaceState(t, t.state, null);
        }
        function Li(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = gi), ci(e);
          var i = t.contextType;
          "object" == typeof i && null !== i ? (o.context = li(i)) : ((i = yo(t) ? go : ho.current), (o.context = vo(e, i))),
            hi(e, n, o, r),
            (o.state = e.memoizedState),
            "function" == typeof (i = t.getDerivedStateFromProps) && (vi(e, t, i, n), (o.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof o.getSnapshotBeforeUpdate ||
              ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
              ((t = o.state),
              "function" == typeof o.componentWillMount && o.componentWillMount(),
              "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              t !== o.state && yi.enqueueReplaceState(o, o.state, null),
              hi(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" == typeof o.componentDidMount && (e.flags |= 4);
        }
        var _i = Array.isArray;
        function xi(e, t, n) {
          if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = "" + e;
              return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === gi && (t = r.refs = {}), null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" != typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Si(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              a(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t)
            );
        }
        function Ai(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Gs(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n;
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag ? (((t = qs(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = xi(e, t, n)), (r.return = e), r)
              : (((r = Ys(n.type, n.key, n.props, null, e.mode, r)).ref = xi(e, t, n)), (r.return = e), r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Xs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag ? (((t = Zs(n, e.mode, r, i)).return = e), t) : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return ((t = qs("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case L:
                  return ((n = Ys(t.type, t.key, t.props, null, e.mode, n)).ref = xi(e, null, t)), (n.return = e), n;
                case _:
                  return ((t = Xs(t, e.mode, n)).return = e), t;
              }
              if (_i(t) || V(t)) return ((t = Zs(t, e.mode, n, null)).return = e), t;
              Si(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== o ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case L:
                  return n.key === o ? (n.type === x ? d(e, t, n.props.children, r, o) : c(e, t, n, r)) : null;
                case _:
                  return n.key === o ? u(e, t, n, r) : null;
              }
              if (_i(n) || V(n)) return null !== o ? null : d(e, t, n, r, null);
              Si(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r) return s(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case L:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null), r.type === x ? d(t, e, r.props.children, o, r.key) : c(t, e, r, o)
                  );
                case _:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
              }
              if (_i(r) || V(r)) return d(t, (e = e.get(n) || null), r, o, null);
              Si(t, r);
            }
            return null;
          }
          function m(o, a, l, s) {
            for (var c = null, u = null, d = a, m = (a = 0), g = null; null !== d && m < l.length; m++) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(o, d, l[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(o, d), (a = i(v, a, m)), null === u ? (c = v) : (u.sibling = v), (u = v), (d = g);
            }
            if (m === l.length) return n(o, d), c;
            if (null === d) {
              for (; m < l.length; m++) null !== (d = f(o, l[m], s)) && ((a = i(d, a, m)), null === u ? (c = d) : (u.sibling = d), (u = d));
              return c;
            }
            for (d = r(o, d); m < l.length; m++)
              null !== (g = h(d, o, m, l[m], s)) &&
                (e && null !== g.alternate && d.delete(null === g.key ? m : g.key),
                (a = i(g, a, m)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          function g(o, l, s, c) {
            var u = V(s);
            if ("function" != typeof u) throw Error(a(150));
            if (null == (s = u.call(s))) throw Error(a(151));
            for (var d = (u = null), m = l, g = (l = 0), v = null, y = s.next(); null !== m && !y.done; g++, y = s.next()) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var w = p(o, m, y.value, c);
              if (null === w) {
                null === m && (m = v);
                break;
              }
              e && m && null === w.alternate && t(o, m), (l = i(w, l, g)), null === d ? (u = w) : (d.sibling = w), (d = w), (m = v);
            }
            if (y.done) return n(o, m), u;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(o, y.value, c)) && ((l = i(y, l, g)), null === d ? (u = y) : (d.sibling = y), (d = y));
              return u;
            }
            for (m = r(o, m); !y.done; g++, y = s.next())
              null !== (y = h(m, o, g, y.value, c)) &&
                (e && null !== y.alternate && m.delete(null === y.key ? g : y.key),
                (l = i(y, l, g)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              u
            );
          }
          return function (e, r, i, s) {
            var c = "object" == typeof i && null !== i && i.type === x && null === i.key;
            c && (i = i.props.children);
            var u = "object" == typeof i && null !== i;
            if (u)
              switch (i.$$typeof) {
                case L:
                  e: {
                    for (u = i.key, c = r; null !== c; ) {
                      if (c.key === u) {
                        if (7 === c.tag) {
                          if (i.type === x) {
                            n(e, c.sibling), ((r = o(c, i.props.children)).return = e), (e = r);
                            break e;
                          }
                        } else if (c.elementType === i.type) {
                          n(e, c.sibling), ((r = o(c, i.props)).ref = xi(e, c, i)), (r.return = e), (e = r);
                          break e;
                        }
                        n(e, c);
                        break;
                      }
                      t(e, c), (c = c.sibling);
                    }
                    i.type === x
                      ? (((r = Zs(i.props.children, e.mode, s, i.key)).return = e), (e = r))
                      : (((s = Ys(i.type, i.key, i.props, null, e.mode, s)).ref = xi(e, r, i)), (s.return = e), (e = s));
                  }
                  return l(e);
                case _:
                  e: {
                    for (c = i.key; null !== r; ) {
                      if (r.key === c) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === i.containerInfo &&
                          r.stateNode.implementation === i.implementation
                        ) {
                          n(e, r.sibling), ((r = o(r, i.children || [])).return = e), (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Xs(i, e.mode, s)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" == typeof i || "number" == typeof i)
              return (
                (i = "" + i),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r))
                  : (n(e, r), ((r = qs(i, e.mode, s)).return = e), (e = r)),
                l(e)
              );
            if (_i(i)) return m(e, r, i, s);
            if (V(i)) return g(e, r, i, s);
            if ((u && Si(e, i), void 0 === i && !c))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(a(152, Y(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var ki = Ai(!0),
          Ci = Ai(!1),
          Pi = {},
          Ti = co(Pi),
          Ii = co(Pi),
          Ri = co(Pi);
        function Oi(e) {
          if (e === Pi) throw Error(a(174));
          return e;
        }
        function Ni(e, t) {
          switch ((fo(Ri, t), fo(Ii, e), fo(Ti, Pi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
              break;
            default:
              t = he((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          uo(Ti), fo(Ti, t);
        }
        function Di() {
          uo(Ti), uo(Ii), uo(Ri);
        }
        function Fi(e) {
          Oi(Ri.current);
          var t = Oi(Ti.current),
            n = he(t, e.type);
          t !== n && (fo(Ii, e), fo(Ti, n));
        }
        function Mi(e) {
          Ii.current === e && (uo(Ti), uo(Ii));
        }
        var $i = co(0);
        function ji(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var zi = null,
          Ui = null,
          Vi = !1;
        function Ki(e, t) {
          var n = Hs(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
        }
        function Hi(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), !0);
            case 6:
              return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
            default:
              return !1;
          }
        }
        function Bi(e) {
          if (Vi) {
            var t = Ui;
            if (t) {
              var n = t;
              if (!Hi(e, t)) {
                if (!(t = Zr(n.nextSibling)) || !Hi(e, t)) return (e.flags = (-1025 & e.flags) | 2), (Vi = !1), void (zi = e);
                Ki(zi, n);
              }
              (zi = e), (Ui = Zr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Vi = !1), (zi = e);
          }
        }
        function Gi(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
          zi = e;
        }
        function Yi(e) {
          if (e !== zi) return !1;
          if (!Vi) return Gi(e), (Vi = !0), !1;
          var t = e.type;
          if (5 !== e.tag || ("head" !== t && "body" !== t && !Hr(t, e.memoizedProps))) for (t = Ui; t; ) Ki(e, t), (t = Zr(t.nextSibling));
          if ((Gi(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Ui = Zr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ui = null;
            }
          } else Ui = zi ? Zr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Zi() {
          (Ui = zi = null), (Vi = !1);
        }
        var Wi = [];
        function qi() {
          for (var e = 0; e < Wi.length; e++) Wi[e]._workInProgressVersionPrimary = null;
          Wi.length = 0;
        }
        var Xi = E.ReactCurrentDispatcher,
          Qi = E.ReactCurrentBatchConfig,
          Ji = 0,
          ea = null,
          ta = null,
          na = null,
          ra = !1,
          oa = !1;
        function ia() {
          throw Error(a(321));
        }
        function aa(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!ur(e[n], t[n])) return !1;
          return !0;
        }
        function la(e, t, n, r, o, i) {
          if (
            ((Ji = i),
            (ea = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Xi.current = null === e || null === e.memoizedState ? Oa : Na),
            (e = n(r, o)),
            oa)
          ) {
            i = 0;
            do {
              if (((oa = !1), !(25 > i))) throw Error(a(301));
              (i += 1), (na = ta = null), (t.updateQueue = null), (Xi.current = Da), (e = n(r, o));
            } while (oa);
          }
          if (((Xi.current = Ra), (t = null !== ta && null !== ta.next), (Ji = 0), (na = ta = ea = null), (ra = !1), t))
            throw Error(a(300));
          return e;
        }
        function sa() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return null === na ? (ea.memoizedState = na = e) : (na = na.next = e), na;
        }
        function ca() {
          if (null === ta) {
            var e = ea.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ta.next;
          var t = null === na ? ea.memoizedState : na.next;
          if (null !== t) (na = t), (ta = e);
          else {
            if (null === e) throw Error(a(310));
            (e = { memoizedState: (ta = e).memoizedState, baseState: ta.baseState, baseQueue: ta.baseQueue, queue: ta.queue, next: null }),
              null === na ? (ea.memoizedState = na = e) : (na = na.next = e);
          }
          return na;
        }
        function ua(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function da(e) {
          var t = ca(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = ta,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var s = (l = i = null),
              c = o;
            do {
              var u = c.lane;
              if ((Ji & u) === u)
                null !== s &&
                  (s = s.next = { lane: 0, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null }),
                  (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
              else {
                var d = { lane: u, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null };
                null === s ? ((l = s = d), (i = r)) : (s = s.next = d), (ea.lanes |= u), (Ul |= u);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (i = r) : (s.next = l),
              ur(r, t.memoizedState) || (Ma = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function fa(e) {
          var t = ca(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            ur(i, t.memoizedState) || (Ma = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function pa(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = t._workInProgressVersionPrimary;
          if (
            (null !== o
              ? (e = o === r)
              : ((e = e.mutableReadLanes), (e = (Ji & e) === e) && ((t._workInProgressVersionPrimary = r), Wi.push(t))),
            e)
          )
            return n(t._source);
          throw (Wi.push(t), Error(a(350)));
        }
        function ha(e, t, n, r) {
          var o = Ol;
          if (null === o) throw Error(a(349));
          var i = t._getVersion,
            l = i(t._source),
            s = Xi.current,
            c = s.useState(function () {
              return pa(o, t, n);
            }),
            u = c[1],
            d = c[0];
          c = na;
          var f = e.memoizedState,
            p = f.refs,
            h = p.getSnapshot,
            m = f.source;
          f = f.subscribe;
          var g = ea;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            s.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = u);
                var e = i(t._source);
                if (!ur(l, e)) {
                  (e = n(t._source)),
                    ur(d, e) || (u(e), (e = ps(g)), (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, a = e; 0 < a; ) {
                    var s = 31 - Ht(a),
                      c = 1 << s;
                    (r[s] |= e), (a &= ~c);
                  }
                }
              },
              [n, t, r]
            ),
            s.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = ps(g);
                    o.mutableReadLanes |= r & o.pendingLanes;
                  } catch (e) {
                    n(function () {
                      throw e;
                    });
                  }
                });
              },
              [t, r]
            ),
            (ur(h, n) && ur(m, t) && ur(f, r)) ||
              (((e = { pending: null, dispatch: null, lastRenderedReducer: ua, lastRenderedState: d }).dispatch = u = Ia.bind(null, ea, e)),
              (c.queue = e),
              (c.baseQueue = null),
              (d = pa(o, t, n)),
              (c.memoizedState = c.baseState = d)),
            d
          );
        }
        function ma(e, t, n) {
          return ha(ca(), e, t, n);
        }
        function ga(e) {
          var t = sa();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: ua, lastRenderedState: e }).dispatch =
              Ia.bind(null, ea, e)),
            [t.memoizedState, e]
          );
        }
        function va(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ea.updateQueue)
              ? ((t = { lastEffect: null }), (ea.updateQueue = t), (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function ya(e) {
          return (e = { current: e }), (sa().memoizedState = e);
        }
        function wa() {
          return ca().memoizedState;
        }
        function ba(e, t, n, r) {
          var o = sa();
          (ea.flags |= e), (o.memoizedState = va(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ea(e, t, n, r) {
          var o = ca();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== ta) {
            var a = ta.memoizedState;
            if (((i = a.destroy), null !== r && aa(r, a.deps))) return void va(t, n, i, r);
          }
          (ea.flags |= e), (o.memoizedState = va(1 | t, n, i, r));
        }
        function La(e, t) {
          return ba(516, 4, e, t);
        }
        function _a(e, t) {
          return Ea(516, 4, e, t);
        }
        function xa(e, t) {
          return Ea(4, 2, e, t);
        }
        function Sa(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Aa(e, t, n) {
          return (n = null != n ? n.concat([e]) : null), Ea(4, 2, Sa.bind(null, t, e), n);
        }
        function ka() {}
        function Ca(e, t) {
          var n = ca();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && aa(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Pa(e, t) {
          var n = ca();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && aa(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ta(e, t) {
          var n = Bo();
          Yo(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Yo(97 < n ? 97 : n, function () {
              var n = Qi.transition;
              Qi.transition = 1;
              try {
                e(!1), t();
              } finally {
                Qi.transition = n;
              }
            });
        }
        function Ia(e, t, n) {
          var r = fs(),
            o = ps(e),
            i = { lane: o, action: n, eagerReducer: null, eagerState: null, next: null },
            a = t.pending;
          if (
            (null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)),
            (t.pending = i),
            (a = e.alternate),
            e === ea || (null !== a && a === ea))
          )
            oa = ra = !0;
          else {
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
              try {
                var l = t.lastRenderedState,
                  s = a(l, n);
                if (((i.eagerReducer = a), (i.eagerState = s), ur(s, l))) return;
              } catch (e) {}
            hs(e, o, r);
          }
        }
        var Ra = {
            readContext: li,
            useCallback: ia,
            useContext: ia,
            useEffect: ia,
            useImperativeHandle: ia,
            useLayoutEffect: ia,
            useMemo: ia,
            useReducer: ia,
            useRef: ia,
            useState: ia,
            useDebugValue: ia,
            useDeferredValue: ia,
            useTransition: ia,
            useMutableSource: ia,
            useOpaqueIdentifier: ia,
            unstable_isNewReconciler: !1
          },
          Oa = {
            readContext: li,
            useCallback: function (e, t) {
              return (sa().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: li,
            useEffect: La,
            useImperativeHandle: function (e, t, n) {
              return (n = null != n ? n.concat([e]) : null), ba(4, 2, Sa.bind(null, t, e), n);
            },
            useLayoutEffect: function (e, t) {
              return ba(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = sa();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = sa();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch =
                  Ia.bind(null, ea, e)),
                [r.memoizedState, e]
              );
            },
            useRef: ya,
            useState: ga,
            useDebugValue: ka,
            useDeferredValue: function (e) {
              var t = ga(e),
                n = t[0],
                r = t[1];
              return (
                La(
                  function () {
                    var t = Qi.transition;
                    Qi.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Qi.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = ga(!1),
                t = e[0];
              return ya((e = Ta.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = sa();
              return (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }), ha(r, e, t, n);
            },
            useOpaqueIdentifier: function () {
              if (Vi) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: D, toString: e, valueOf: e };
                  })(function () {
                    throw (e || ((e = !0), n("r:" + (qr++).toString(36))), Error(a(355)));
                  }),
                  n = ga(t)[1];
                return (
                  0 == (2 & ea.mode) &&
                    ((ea.flags |= 516),
                    va(
                      5,
                      function () {
                        n("r:" + (qr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return ga((t = "r:" + (qr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1
          },
          Na = {
            readContext: li,
            useCallback: Ca,
            useContext: li,
            useEffect: _a,
            useImperativeHandle: Aa,
            useLayoutEffect: xa,
            useMemo: Pa,
            useReducer: da,
            useRef: wa,
            useState: function () {
              return da(ua);
            },
            useDebugValue: ka,
            useDeferredValue: function (e) {
              var t = da(ua),
                n = t[0],
                r = t[1];
              return (
                _a(
                  function () {
                    var t = Qi.transition;
                    Qi.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Qi.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = da(ua)[0];
              return [wa().current, e];
            },
            useMutableSource: ma,
            useOpaqueIdentifier: function () {
              return da(ua)[0];
            },
            unstable_isNewReconciler: !1
          },
          Da = {
            readContext: li,
            useCallback: Ca,
            useContext: li,
            useEffect: _a,
            useImperativeHandle: Aa,
            useLayoutEffect: xa,
            useMemo: Pa,
            useReducer: fa,
            useRef: wa,
            useState: function () {
              return fa(ua);
            },
            useDebugValue: ka,
            useDeferredValue: function (e) {
              var t = fa(ua),
                n = t[0],
                r = t[1];
              return (
                _a(
                  function () {
                    var t = Qi.transition;
                    Qi.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Qi.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fa(ua)[0];
              return [wa().current, e];
            },
            useMutableSource: ma,
            useOpaqueIdentifier: function () {
              return fa(ua)[0];
            },
            unstable_isNewReconciler: !1
          },
          Fa = E.ReactCurrentOwner,
          Ma = !1;
        function $a(e, t, n, r) {
          t.child = null === e ? Ci(t, null, n, r) : ki(t, e.child, n, r);
        }
        function ja(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            ai(t, o),
            (r = la(e, t, n, r, i, o)),
            null === e || Ma
              ? ((t.flags |= 1), $a(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), il(e, t, o))
          );
        }
        function za(e, t, n, r, o, i) {
          if (null === e) {
            var a = n.type;
            return "function" != typeof a || Bs(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps
              ? (((e = Ys(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
              : ((t.tag = 15), (t.type = a), Ua(e, t, a, r, o, i));
          }
          return (
            (a = e.child),
            0 == (o & i) && ((o = a.memoizedProps), (n = null !== (n = n.compare) ? n : fr)(o, r) && e.ref === t.ref)
              ? il(e, t, i)
              : ((t.flags |= 1), ((e = Gs(a, r)).ref = t.ref), (e.return = t), (t.child = e))
          );
        }
        function Ua(e, t, n, r, o, i) {
          if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Ma = !1), 0 == (i & o))) return (t.lanes = e.lanes), il(e, t, i);
            0 != (16384 & e.flags) && (Ma = !0);
          }
          return Ha(e, t, n, r, i);
        }
        function Va(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), Ls(t, n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  Ls(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }), Ls(t, null !== i ? i.baseLanes : n);
            }
          else null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), Ls(t, r);
          return $a(e, t, o, n), t.child;
        }
        function Ka(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
        }
        function Ha(e, t, n, r, o) {
          var i = yo(n) ? go : ho.current;
          return (
            (i = vo(t, i)),
            ai(t, o),
            (n = la(e, t, n, r, i, o)),
            null === e || Ma
              ? ((t.flags |= 1), $a(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), il(e, t, o))
          );
        }
        function Ba(e, t, n, r, o) {
          if (yo(n)) {
            var i = !0;
            Lo(t);
          } else i = !1;
          if ((ai(t, o), null === t.stateNode))
            null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)), bi(t, n, r), Li(t, n, r, o), (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var s = a.context,
              c = n.contextType;
            "object" == typeof c && null !== c ? (c = li(c)) : (c = vo(t, (c = yo(n) ? go : ho.current)));
            var u = n.getDerivedStateFromProps,
              d = "function" == typeof u || "function" == typeof a.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps) ||
              ((l !== r || s !== c) && Ei(t, a, r, c)),
              (si = !1);
            var f = t.memoizedState;
            (a.state = f),
              hi(t, r, a, o),
              (s = t.memoizedState),
              l !== r || f !== s || mo.current || si
                ? ("function" == typeof u && (vi(t, n, u, r), (s = t.memoizedState)),
                  (l = si || wi(t, n, l, r, f, s, c))
                    ? (d ||
                        ("function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount && a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount && (t.flags |= 4))
                    : ("function" == typeof a.componentDidMount && (t.flags |= 4), (t.memoizedProps = r), (t.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = c),
                  (r = l))
                : ("function" == typeof a.componentDidMount && (t.flags |= 4), (r = !1));
          } else {
            (a = t.stateNode),
              ui(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : Qo(t.type, l)),
              (a.props = c),
              (d = t.pendingProps),
              (f = a.context),
              "object" == typeof (s = n.contextType) && null !== s ? (s = li(s)) : (s = vo(t, (s = yo(n) ? go : ho.current)));
            var p = n.getDerivedStateFromProps;
            (u = "function" == typeof p || "function" == typeof a.getSnapshotBeforeUpdate) ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps) ||
              ((l !== d || f !== s) && Ei(t, a, r, s)),
              (si = !1),
              (f = t.memoizedState),
              (a.state = f),
              hi(t, r, a, o);
            var h = t.memoizedState;
            l !== d || f !== h || mo.current || si
              ? ("function" == typeof p && (vi(t, n, p, r), (h = t.memoizedState)),
                (c = si || wi(t, n, c, r, f, h, s))
                  ? (u ||
                      ("function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate) ||
                      ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, h, s),
                      "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 256))
                  : ("function" != typeof a.componentDidUpdate || (l === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate || (l === e.memoizedProps && f === e.memoizedState) || (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = s),
                (r = c))
              : ("function" != typeof a.componentDidUpdate || (l === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate || (l === e.memoizedProps && f === e.memoizedState) || (t.flags |= 256),
                (r = !1));
          }
          return Ga(e, t, n, r, i, o);
        }
        function Ga(e, t, n, r, o, i) {
          Ka(e, t);
          var a = 0 != (64 & t.flags);
          if (!r && !a) return o && _o(t, n, !1), il(e, t, i);
          (r = t.stateNode), (Fa.current = t);
          var l = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && a ? ((t.child = ki(t, e.child, null, i)), (t.child = ki(t, null, l, i))) : $a(e, t, l, i),
            (t.memoizedState = r.state),
            o && _o(t, n, !0),
            t.child
          );
        }
        function Ya(e) {
          var t = e.stateNode;
          t.pendingContext ? bo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && bo(0, t.context, !1),
            Ni(e, t.containerInfo);
        }
        var Za,
          Wa,
          qa,
          Xa = { dehydrated: null, retryLane: 0 };
        function Qa(e, t, n) {
          var r,
            o = t.pendingProps,
            i = $i.current,
            a = !1;
          return (
            (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
            r
              ? ((a = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (i |= 1),
            fo($i, 1 & i),
            null === e
              ? (void 0 !== o.fallback && Bi(t),
                (e = o.children),
                (i = o.fallback),
                a
                  ? ((e = Ja(t, e, i, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Xa), e)
                  : "number" == typeof o.unstable_expectedLoadTime
                  ? ((e = Ja(t, e, i, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Xa), (t.lanes = 33554432), e)
                  : (((n = Ws({ mode: "visible", children: e }, t.mode, n, null)).return = t), (t.child = n)))
              : (e.memoizedState,
                a
                  ? ((o = tl(e, t, o.children, o.fallback, n)),
                    (a = t.child),
                    (i = e.child.memoizedState),
                    (a.memoizedState = null === i ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
                    (a.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Xa),
                    o)
                  : ((n = el(e, t, o.children, n)), (t.memoizedState = null), n))
          );
        }
        function Ja(e, t, n, r) {
          var o = e.mode,
            i = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 == (2 & o) && null !== i ? ((i.childLanes = 0), (i.pendingProps = t)) : (i = Ws(t, o, 0, null)),
            (n = Zs(n, o, r, null)),
            (i.return = e),
            (n.return = e),
            (i.sibling = n),
            (e.child = i),
            n
          );
        }
        function el(e, t, n, r) {
          var o = e.child;
          return (
            (e = o.sibling),
            (n = Gs(o, { mode: "visible", children: n })),
            0 == (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tl(e, t, n, r, o) {
          var i = t.mode,
            a = e.child;
          e = a.sibling;
          var l = { mode: "hidden", children: n };
          return (
            0 == (2 & i) && t.child !== a
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (a = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect), (t.lastEffect = a), (a.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = Gs(a, l)),
            null !== e ? (r = Gs(e, r)) : ((r = Zs(r, i, o, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ii(e.return, t);
        }
        function rl(e, t, n, r, o, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o, lastEffect: i })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o),
              (a.lastEffect = i));
        }
        function ol(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if (($a(e, t, r.children, n), 0 != (2 & (r = $i.current)))) (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 != (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                else if (19 === e.tag) nl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((fo($i, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; ) null !== (e = n.alternate) && null === ji(e) && (o = n), (n = n.sibling);
                null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                  rl(t, !1, o, n, i, t.lastEffect);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ji(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                rl(t, !0, n, null, i, t.lastEffect);
                break;
              case "together":
                rl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function il(e, t, n) {
          if ((null !== e && (t.dependencies = e.dependencies), (Ul |= t.lanes), 0 != (n & t.childLanes))) {
            if (null !== e && t.child !== e.child) throw Error(a(153));
            if (null !== t.child) {
              for (n = Gs((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
                (e = e.sibling), ((n = n.sibling = Gs(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function al(e, t) {
          if (!Vi)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
            }
        }
        function ll(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return yo(t.type) && wo(), null;
            case 3:
              return (
                Di(),
                uo(mo),
                uo(ho),
                qi(),
                (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) || (Yi(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Mi(t);
              var i = Oi(Ri.current);
              if (((n = t.type), null !== e && null != t.stateNode)) Wa(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return null;
                }
                if (((e = Oi(Ti.current)), Yi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Qr] = t), (r[Jr] = l), n)) {
                    case "dialog":
                      Tr("cancel", r), Tr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Ar.length; e++) Tr(Ar[e], r);
                      break;
                    case "source":
                      Tr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", r), Tr("load", r);
                      break;
                    case "details":
                      Tr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Tr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }), Tr("invalid", r);
                      break;
                    case "textarea":
                      se(r, l), Tr("invalid", r);
                  }
                  for (var c in (xe(n, l), (e = null), l))
                    l.hasOwnProperty(c) &&
                      ((i = l[c]),
                      "children" === c
                        ? "string" == typeof i
                          ? r.textContent !== i && (e = ["children", i])
                          : "number" == typeof i && r.textContent !== "" + i && (e = ["children", "" + i])
                        : s.hasOwnProperty(c) && null != i && "onScroll" === c && Tr("scroll", r));
                  switch (n) {
                    case "input":
                      q(r), re(r, l, !0);
                      break;
                    case "textarea":
                      q(r), ue(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (r.onclick = zr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((c = 9 === i.nodeType ? i : i.ownerDocument),
                    e === de && (e = pe(n)),
                    e === de
                      ? "script" === n
                        ? (((e = c.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = c.createElement(n, { is: r.is }))
                        : ((e = c.createElement(n)),
                          "select" === n && ((c = e), r.multiple ? (c.multiple = !0) : r.size && (c.size = r.size)))
                      : (e = c.createElementNS(e, n)),
                    (e[Qr] = t),
                    (e[Jr] = r),
                    Za(e, t),
                    (t.stateNode = e),
                    (c = Se(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Tr("cancel", e), Tr("close", e), (i = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", e), (i = r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Ar.length; i++) Tr(Ar[i], e);
                      i = r;
                      break;
                    case "source":
                      Tr("error", e), (i = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", e), Tr("load", e), (i = r);
                      break;
                    case "details":
                      Tr("toggle", e), (i = r);
                      break;
                    case "input":
                      ee(e, r), (i = J(e, r)), Tr("invalid", e);
                      break;
                    case "option":
                      i = ie(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }), (i = o({}, r, { value: void 0 })), Tr("invalid", e);
                      break;
                    case "textarea":
                      se(e, r), (i = le(e, r)), Tr("invalid", e);
                      break;
                    default:
                      i = r;
                  }
                  xe(n, i);
                  var u = i;
                  for (l in u)
                    if (u.hasOwnProperty(l)) {
                      var d = u[l];
                      "style" === l
                        ? Le(e, d)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (d = d ? d.__html : void 0) && ve(e, d)
                        : "children" === l
                        ? "string" == typeof d
                          ? ("textarea" !== n || "" !== d) && ye(e, d)
                          : "number" == typeof d && ye(e, "" + d)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (s.hasOwnProperty(l) ? null != d && "onScroll" === l && Tr("scroll", e) : null != d && b(e, l, d, c));
                    }
                  switch (n) {
                    case "input":
                      q(e), re(e, r, !1);
                      break;
                    case "textarea":
                      q(e), ue(e);
                      break;
                    case "option":
                      null != r.value && e.setAttribute("value", "" + Z(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? ae(e, !!r.multiple, l, !1)
                          : null != r.defaultValue && ae(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof i.onClick && (e.onclick = zr);
                  }
                  Kr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) qa(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode) throw Error(a(166));
                (n = Oi(Ri.current)),
                  Oi(Ti.current),
                  Yi(t)
                    ? ((r = t.stateNode), (n = t.memoizedProps), (r[Qr] = t), r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Qr] = t), (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                uo($i),
                (r = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? void 0 !== t.memoizedProps.fallback && Yi(t) : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 != (2 & t.mode) &&
                      ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & $i.current)
                        ? 0 === $l && ($l = 3)
                        : ((0 !== $l && 3 !== $l) || ($l = 4),
                          null === Ol || (0 == (134217727 & Ul) && 0 == (134217727 & Vl)) || ys(Ol, Dl))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Di(), null === e && Rr(t.stateNode.containerInfo), null;
            case 10:
              return oi(t), null;
            case 19:
              if ((uo($i), null === (r = t.memoizedState))) return null;
              if (((l = 0 != (64 & t.flags)), null === (c = r.rendering)))
                if (l) al(r, !1);
                else {
                  if (0 !== $l || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (c = ji(e))) {
                        for (
                          t.flags |= 64,
                            al(r, !1),
                            null !== (l = c.updateQueue) && ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (c = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = c.childLanes),
                                (l.lanes = c.lanes),
                                (l.child = c.child),
                                (l.memoizedProps = c.memoizedProps),
                                (l.memoizedState = c.memoizedState),
                                (l.updateQueue = c.updateQueue),
                                (l.type = c.type),
                                (e = c.dependencies),
                                (l.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return fo($i, (1 & $i.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail && Ho() > Gl && ((t.flags |= 64), (l = !0), al(r, !1), (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = ji(c))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      al(r, !0),
                      null === r.tail && "hidden" === r.tailMode && !c.alternate && !Vi)
                    )
                      return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                  } else
                    2 * Ho() - r.renderingStartTime > Gl &&
                      1073741824 !== n &&
                      ((t.flags |= 64), (l = !0), al(r, !1), (t.lanes = 33554432));
                r.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c), (r.last = c));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ho()),
                  (n.sibling = null),
                  (t = $i.current),
                  fo($i, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                _s(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(a(156, t.tag));
        }
        function sl(e) {
          switch (e.tag) {
            case 1:
              yo(e.type) && wo();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Di(), uo(mo), uo(ho), qi(), 0 != (64 & (t = e.flags)))) throw Error(a(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Mi(e), null;
            case 13:
              return uo($i), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 19:
              return uo($i), null;
            case 4:
              return Di(), null;
            case 10:
              return oi(e), null;
            case 23:
            case 24:
              return _s(), null;
            default:
              return null;
          }
        }
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += G(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: o };
        }
        function ul(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        (Za = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Wa = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), Oi(Ti.current);
              var a,
                l = null;
              switch (n) {
                case "input":
                  (i = J(e, i)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (i = ie(e, i)), (r = ie(e, r)), (l = []);
                  break;
                case "select":
                  (i = o({}, i, { value: void 0 })), (r = o({}, r, { value: void 0 })), (l = []);
                  break;
                case "textarea":
                  (i = le(e, i)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" != typeof i.onClick && "function" == typeof r.onClick && (e.onclick = zr);
              }
              for (d in (xe(n, r), (n = null), i))
                if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && null != i[d])
                  if ("style" === d) {
                    var c = i[d];
                    for (a in c) c.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== d &&
                      "children" !== d &&
                      "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      "autoFocus" !== d &&
                      (s.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
              for (d in r) {
                var u = r[d];
                if (((c = null != i ? i[d] : void 0), r.hasOwnProperty(d) && u !== c && (null != u || null != c)))
                  if ("style" === d)
                    if (c) {
                      for (a in c) !c.hasOwnProperty(a) || (u && u.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ""));
                      for (a in u) u.hasOwnProperty(a) && c[a] !== u[a] && (n || (n = {}), (n[a] = u[a]));
                    } else n || (l || (l = []), l.push(d, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === d
                      ? ((u = u ? u.__html : void 0), (c = c ? c.__html : void 0), null != u && c !== u && (l = l || []).push(d, u))
                      : "children" === d
                      ? ("string" != typeof u && "number" != typeof u) || (l = l || []).push(d, "" + u)
                      : "suppressContentEditableWarning" !== d &&
                        "suppressHydrationWarning" !== d &&
                        (s.hasOwnProperty(d)
                          ? (null != u && "onScroll" === d && Tr("scroll", e), l || c === u || (l = []))
                          : "object" == typeof u && null !== u && u.$$typeof === D
                          ? u.toString()
                          : (l = l || []).push(d, u));
              }
              n && (l = l || []).push("style", n);
              var d = l;
              (t.updateQueue = d) && (t.flags |= 4);
            }
          }),
          (qa = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var dl = "function" == typeof WeakMap ? WeakMap : Map;
        function fl(e, t, n) {
          ((n = di(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              ql || ((ql = !0), (Xl = r)), ul(0, t);
            }),
            n
          );
        }
        function pl(e, t, n) {
          (n = di(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var o = t.value;
            n.payload = function () {
              return ul(0, t), r(o);
            };
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" == typeof i.componentDidCatch &&
              (n.callback = function () {
                "function" != typeof r && (null === Ql ? (Ql = new Set([this])) : Ql.add(this), ul(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
              }),
            n
          );
        }
        var hl = "function" == typeof WeakSet ? WeakSet : Set;
        function ml(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                zs(e, t);
              }
            else t.current = null;
        }
        function gl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Qo(t.type, n), r)),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Yr(t.stateNode.containerInfo));
          }
          throw Error(a(163));
        }
        function vl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                  if (3 == (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                  var o = e;
                  (r = o.next), 0 != (4 & (o = o.tag)) && 0 != (1 & o) && (Ms(n, e), Fs(n, e)), (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r = n.elementType === n.type ? t.memoizedProps : Qo(n.type, t.memoizedProps)),
                      e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                void (null !== (t = n.updateQueue) && mi(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                mi(n, t, e);
              }
              return;
            case 5:
              return (e = n.stateNode), void (null === t && 4 & n.flags && Kr(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate), null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && Lt(n))))
              );
          }
          throw Error(a(163));
        }
        function yl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t) "function" == typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : (r.display = "none");
              else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                (o = null != o && o.hasOwnProperty("display") ? o.display : null), (r.style.display = Ee("display", o));
              }
            } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function wl(e, t) {
          if (So && "function" == typeof So.onCommitFiberUnmount)
            try {
              So.onCommitFiberUnmount(xo, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    o = r.destroy;
                  if (((r = r.tag), void 0 !== o))
                    if (0 != (4 & r)) Ms(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (e) {
                        zs(r, e);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if ((ml(t), "function" == typeof (e = t.stateNode).componentWillUnmount))
                try {
                  (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
                } catch (e) {
                  zs(t, e);
                }
              break;
            case 5:
              ml(t);
              break;
            case 4:
              Sl(e, t);
          }
        }
        function bl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function El(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function Ll(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (El(t)) break e;
              t = t.return;
            }
            throw Error(a(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(a(161));
          }
          16 & n.flags && (ye(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || El(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? _l(e, n, t) : xl(e, n, t);
        }
        function _l(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = zr));
          else if (4 !== r && null !== (e = e.child)) for (_l(e, t, n), e = e.sibling; null !== e; ) _l(e, t, n), (e = e.sibling);
        }
        function xl(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o) (e = o ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child)) for (xl(e, t, n), e = e.sibling; null !== e; ) xl(e, t, n), (e = e.sibling);
        }
        function Sl(e, t) {
          for (var n, r, o = t, i = !1; ; ) {
            if (!i) {
              i = o.return;
              e: for (;;) {
                if (null === i) throw Error(a(160));
                switch (((n = i.stateNode), i.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                i = i.return;
              }
              i = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var l = e, s = o, c = s; ; )
                if ((wl(l, c), null !== c.child && 4 !== c.tag)) (c.child.return = c), (c = c.child);
                else {
                  if (c === s) break e;
                  for (; null === c.sibling; ) {
                    if (null === c.return || c.return === s) break e;
                    c = c.return;
                  }
                  (c.sibling.return = c.return), (c = c.sibling);
                }
              r
                ? ((l = n), (s = o.stateNode), 8 === l.nodeType ? l.parentNode.removeChild(s) : l.removeChild(s))
                : n.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (n = o.stateNode.containerInfo), (r = !0), (o.child.return = o), (o = o.child);
                continue;
              }
            } else if ((wl(e, o), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (i = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function Al(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 == (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var i = t.updateQueue;
                if (((t.updateQueue = null), null !== i)) {
                  for (
                    n[Jr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), Se(e, o), t = Se(e, r), o = 0;
                    o < i.length;
                    o += 2
                  ) {
                    var l = i[o],
                      s = i[o + 1];
                    "style" === l ? Le(n, s) : "dangerouslySetInnerHTML" === l ? ve(n, s) : "children" === l ? ye(n, s) : b(n, l, s, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ce(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (i = r.value)
                          ? ae(n, !!r.multiple, i, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ae(n, !!r.multiple, r.defaultValue, !0)
                              : ae(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(a(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), Lt(n.containerInfo)));
            case 13:
              return null !== t.memoizedState && ((Bl = Ho()), yl(t.child, !0)), void kl(t);
            case 19:
              return void kl(t);
            case 23:
            case 24:
              return void yl(t, null !== t.memoizedState);
          }
          throw Error(a(163));
        }
        function kl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hl()),
              t.forEach(function (t) {
                var r = Vs.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Cl(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Pl = Math.ceil,
          Tl = E.ReactCurrentDispatcher,
          Il = E.ReactCurrentOwner,
          Rl = 0,
          Ol = null,
          Nl = null,
          Dl = 0,
          Fl = 0,
          Ml = co(0),
          $l = 0,
          jl = null,
          zl = 0,
          Ul = 0,
          Vl = 0,
          Kl = 0,
          Hl = null,
          Bl = 0,
          Gl = 1 / 0;
        function Yl() {
          Gl = Ho() + 500;
        }
        var Zl,
          Wl = null,
          ql = !1,
          Xl = null,
          Ql = null,
          Jl = !1,
          es = null,
          ts = 90,
          ns = [],
          rs = [],
          os = null,
          is = 0,
          as = null,
          ls = -1,
          ss = 0,
          cs = 0,
          us = null,
          ds = !1;
        function fs() {
          return 0 != (48 & Rl) ? Ho() : -1 !== ls ? ls : (ls = Ho());
        }
        function ps(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Bo() ? 1 : 2;
          if ((0 === ss && (ss = zl), 0 !== Xo.transition)) {
            0 !== cs && (cs = null !== Hl ? Hl.pendingLanes : 0), (e = ss);
            var t = 4186112 & ~cs;
            return 0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
          }
          return (
            (e = Bo()),
            0 != (4 & Rl) && 98 === e
              ? (e = zt(12, ss))
              : (e = zt(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  ss
                )),
            e
          );
        }
        function hs(e, t, n) {
          if (50 < is) throw ((is = 0), (as = null), Error(a(185)));
          if (null === (e = ms(e, t))) return null;
          Kt(e, t, n), e === Ol && ((Vl |= t), 4 === $l && ys(e, Dl));
          var r = Bo();
          1 === t
            ? 0 != (8 & Rl) && 0 == (48 & Rl)
              ? ws(e)
              : (gs(e, n), 0 === Rl && (Yl(), Wo()))
            : (0 == (4 & Rl) || (98 !== r && 99 !== r) || (null === os ? (os = new Set([e])) : os.add(e)), gs(e, n)),
            (Hl = e);
        }
        function ms(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function gs(e, t) {
          for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
            var s = 31 - Ht(l),
              c = 1 << s,
              u = i[s];
            if (-1 === u) {
              if (0 == (c & r) || 0 != (c & o)) {
                (u = t), Mt(c);
                var d = Ft;
                i[s] = 10 <= d ? u + 250 : 6 <= d ? u + 5e3 : -1;
              }
            } else u <= t && (e.expiredLanes |= c);
            l &= ~c;
          }
          if (((r = $t(e, e === Ol ? Dl : 0)), (t = Ft), 0 === r))
            null !== n && (n !== $o && Co(n), (e.callbackNode = null), (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== $o && Co(n);
            }
            15 === t
              ? ((n = ws.bind(null, e)), null === zo ? ((zo = [n]), (Uo = ko(Oo, qo))) : zo.push(n), (n = $o))
              : 14 === t
              ? (n = Zo(99, ws.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(a(358, e));
                  }
                })(t)),
                (n = Zo(n, vs.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function vs(e) {
          if (((ls = -1), (cs = ss = 0), 0 != (48 & Rl))) throw Error(a(327));
          var t = e.callbackNode;
          if (Ds() && e.callbackNode !== t) return null;
          var n = $t(e, e === Ol ? Dl : 0);
          if (0 === n) return null;
          var r = n,
            o = Rl;
          Rl |= 16;
          var i = As();
          for ((Ol === e && Dl === r) || (Yl(), xs(e, r)); ; )
            try {
              Ps();
              break;
            } catch (t) {
              Ss(e, t);
            }
          if ((ri(), (Tl.current = i), (Rl = o), null !== Nl ? (r = 0) : ((Ol = null), (Dl = 0), (r = $l)), 0 != (zl & Vl))) xs(e, 0);
          else if (0 !== r) {
            if (
              (2 === r && ((Rl |= 64), e.hydrate && ((e.hydrate = !1), Yr(e.containerInfo)), 0 !== (n = jt(e)) && (r = ks(e, n))), 1 === r)
            )
              throw ((t = jl), xs(e, 0), ys(e, n), gs(e, Ho()), t);
            switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
              case 0:
              case 1:
                throw Error(a(345));
              case 2:
              case 5:
                Rs(e);
                break;
              case 3:
                if ((ys(e, n), (62914560 & n) === n && 10 < (r = Bl + 500 - Ho()))) {
                  if (0 !== $t(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    fs(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = Br(Rs.bind(null, e), r);
                  break;
                }
                Rs(e);
                break;
              case 4:
                if ((ys(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var l = 31 - Ht(n);
                  (i = 1 << l), (l = r[l]) > o && (o = l), (n &= ~i);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = Ho() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Pl(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Br(Rs.bind(null, e), n);
                  break;
                }
                Rs(e);
                break;
              default:
                throw Error(a(329));
            }
          }
          return gs(e, Ho()), e.callbackNode === t ? vs.bind(null, e) : null;
        }
        function ys(e, t) {
          for (t &= ~Kl, t &= ~Vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
            var n = 31 - Ht(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ws(e) {
          if (0 != (48 & Rl)) throw Error(a(327));
          if ((Ds(), e === Ol && 0 != (e.expiredLanes & Dl))) {
            var t = Dl,
              n = ks(e, t);
            0 != (zl & Vl) && (n = ks(e, (t = $t(e, t))));
          } else n = ks(e, (t = $t(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Rl |= 64), e.hydrate && ((e.hydrate = !1), Yr(e.containerInfo)), 0 !== (t = jt(e)) && (n = ks(e, t))),
            1 === n)
          )
            throw ((n = jl), xs(e, 0), ys(e, t), gs(e, Ho()), n);
          return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Rs(e), gs(e, Ho()), null;
        }
        function bs(e, t) {
          var n = Rl;
          Rl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Rl = n) && (Yl(), Wo());
          }
        }
        function Es(e, t) {
          var n = Rl;
          (Rl &= -2), (Rl |= 8);
          try {
            return e(t);
          } finally {
            0 === (Rl = n) && (Yl(), Wo());
          }
        }
        function Ls(e, t) {
          fo(Ml, Fl), (Fl |= t), (zl |= t);
        }
        function _s() {
          (Fl = Ml.current), uo(Ml);
        }
        function xs(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Gr(n)), null !== Nl))
            for (n = Nl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && wo();
                  break;
                case 3:
                  Di(), uo(mo), uo(ho), qi();
                  break;
                case 5:
                  Mi(r);
                  break;
                case 4:
                  Di();
                  break;
                case 13:
                case 19:
                  uo($i);
                  break;
                case 10:
                  oi(r);
                  break;
                case 23:
                case 24:
                  _s();
              }
              n = n.return;
            }
          (Ol = e), (Nl = Gs(e.current, null)), (Dl = Fl = zl = t), ($l = 0), (jl = null), (Kl = Vl = Ul = 0);
        }
        function Ss(e, t) {
          for (;;) {
            var n = Nl;
            try {
              if ((ri(), (Xi.current = Ra), ra)) {
                for (var r = ea.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ra = !1;
              }
              if (((Ji = 0), (na = ta = ea = null), (oa = !1), (Il.current = null), null === n || null === n.return)) {
                ($l = 1), (jl = t), (Nl = null);
                break;
              }
              e: {
                var i = e,
                  a = n.return,
                  l = n,
                  s = t;
                if (
                  ((t = Dl),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== s && "object" == typeof s && "function" == typeof s.then)
                ) {
                  var c = s;
                  if (0 == (2 & l.mode)) {
                    var u = l.alternate;
                    u
                      ? ((l.updateQueue = u.updateQueue), (l.memoizedState = u.memoizedState), (l.lanes = u.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var d = 0 != (1 & $i.current),
                    f = a;
                  do {
                    var p;
                    if ((p = 13 === f.tag)) {
                      var h = f.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var m = f.memoizedProps;
                        p = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !d);
                      }
                    }
                    if (p) {
                      var g = f.updateQueue;
                      if (null === g) {
                        var v = new Set();
                        v.add(c), (f.updateQueue = v);
                      } else g.add(c);
                      if (0 == (2 & f.mode)) {
                        if (((f.flags |= 64), (l.flags |= 16384), (l.flags &= -2981), 1 === l.tag))
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var y = di(-1, 1);
                            (y.tag = 2), fi(l, y);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (s = void 0), (l = t);
                      var w = i.pingCache;
                      if (
                        (null === w
                          ? ((w = i.pingCache = new dl()), (s = new Set()), w.set(c, s))
                          : void 0 === (s = w.get(c)) && ((s = new Set()), w.set(c, s)),
                        !s.has(l))
                      ) {
                        s.add(l);
                        var b = Us.bind(null, i, c, l);
                        c.then(b, b);
                      }
                      (f.flags |= 4096), (f.lanes = t);
                      break e;
                    }
                    f = f.return;
                  } while (null !== f);
                  s = Error(
                    (Y(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== $l && ($l = 2), (s = cl(s, l)), (f = a);
                do {
                  switch (f.tag) {
                    case 3:
                      (i = s), (f.flags |= 4096), (t &= -t), (f.lanes |= t), pi(f, fl(0, i, t));
                      break e;
                    case 1:
                      i = s;
                      var E = f.type,
                        L = f.stateNode;
                      if (
                        0 == (64 & f.flags) &&
                        ("function" == typeof E.getDerivedStateFromError ||
                          (null !== L && "function" == typeof L.componentDidCatch && (null === Ql || !Ql.has(L))))
                      ) {
                        (f.flags |= 4096), (t &= -t), (f.lanes |= t), pi(f, pl(f, i, t));
                        break e;
                      }
                  }
                  f = f.return;
                } while (null !== f);
              }
              Is(n);
            } catch (e) {
              (t = e), Nl === n && null !== n && (Nl = n = n.return);
              continue;
            }
            break;
          }
        }
        function As() {
          var e = Tl.current;
          return (Tl.current = Ra), null === e ? Ra : e;
        }
        function ks(e, t) {
          var n = Rl;
          Rl |= 16;
          var r = As();
          for ((Ol === e && Dl === t) || xs(e, t); ; )
            try {
              Cs();
              break;
            } catch (t) {
              Ss(e, t);
            }
          if ((ri(), (Rl = n), (Tl.current = r), null !== Nl)) throw Error(a(261));
          return (Ol = null), (Dl = 0), $l;
        }
        function Cs() {
          for (; null !== Nl; ) Ts(Nl);
        }
        function Ps() {
          for (; null !== Nl && !Po(); ) Ts(Nl);
        }
        function Ts(e) {
          var t = Zl(e.alternate, e, Fl);
          (e.memoizedProps = e.pendingProps), null === t ? Is(e) : (Nl = t), (Il.current = null);
        }
        function Is(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (n = ll(n, t, Fl))) return void (Nl = n);
              if ((24 !== (n = t).tag && 23 !== n.tag) || null === n.memoizedState || 0 != (1073741824 & Fl) || 0 == (4 & n.mode)) {
                for (var r = 0, o = n.child; null !== o; ) (r |= o.lanes | o.childLanes), (o = o.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 == (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
                1 < t.flags && (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
            } else {
              if (null !== (n = sl(t))) return (n.flags &= 2047), void (Nl = n);
              null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Nl = t);
            Nl = t = e;
          } while (null !== t);
          0 === $l && ($l = 5);
        }
        function Rs(e) {
          var t = Bo();
          return Yo(99, Os.bind(null, e, t)), null;
        }
        function Os(e, t) {
          do {
            Ds();
          } while (null !== es);
          if (0 != (48 & Rl)) throw Error(a(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(a(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            o = r,
            i = e.pendingLanes & ~o;
          (e.pendingLanes = o),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= o),
            (e.mutableReadLanes &= o),
            (e.entangledLanes &= o),
            (o = e.entanglements);
          for (var l = e.eventTimes, s = e.expirationTimes; 0 < i; ) {
            var c = 31 - Ht(i),
              u = 1 << c;
            (o[c] = 0), (l[c] = -1), (s[c] = -1), (i &= ~u);
          }
          if (
            (null !== os && 0 == (24 & r) && os.has(e) && os.delete(e),
            e === Ol && ((Nl = Ol = null), (Dl = 0)),
            1 < n.flags ? (null !== n.lastEffect ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect)) : (r = n)) : (r = n.firstEffect),
            null !== r)
          ) {
            if (((o = Rl), (Rl |= 32), (Il.current = null), (Ur = Wt), vr((l = gr())))) {
              if ("selectionStart" in l) s = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((s = ((s = l.ownerDocument) && s.defaultView) || window), (u = s.getSelection && s.getSelection()) && 0 !== u.rangeCount)
                ) {
                  (s = u.anchorNode), (i = u.anchorOffset), (c = u.focusNode), (u = u.focusOffset);
                  try {
                    s.nodeType, c.nodeType;
                  } catch (e) {
                    s = null;
                    break e;
                  }
                  var d = 0,
                    f = -1,
                    p = -1,
                    h = 0,
                    m = 0,
                    g = l,
                    v = null;
                  t: for (;;) {
                    for (
                      var y;
                      g !== s || (0 !== i && 3 !== g.nodeType) || (f = d + i),
                        g !== c || (0 !== u && 3 !== g.nodeType) || (p = d + u),
                        3 === g.nodeType && (d += g.nodeValue.length),
                        null !== (y = g.firstChild);

                    )
                      (v = g), (g = y);
                    for (;;) {
                      if (g === l) break t;
                      if ((v === s && ++h === i && (f = d), v === c && ++m === u && (p = d), null !== (y = g.nextSibling))) break;
                      v = (g = v).parentNode;
                    }
                    g = y;
                  }
                  s = -1 === f || -1 === p ? null : { start: f, end: p };
                } else s = null;
              s = s || { start: 0, end: 0 };
            } else s = null;
            (Vr = { focusedElem: l, selectionRange: s }), (Wt = !1), (us = null), (ds = !1), (Wl = r);
            do {
              try {
                Ns();
              } catch (e) {
                if (null === Wl) throw Error(a(330));
                zs(Wl, e), (Wl = Wl.nextEffect);
              }
            } while (null !== Wl);
            (us = null), (Wl = r);
            do {
              try {
                for (l = e; null !== Wl; ) {
                  var w = Wl.flags;
                  if ((16 & w && ye(Wl.stateNode, ""), 128 & w)) {
                    var b = Wl.alternate;
                    if (null !== b) {
                      var E = b.ref;
                      null !== E && ("function" == typeof E ? E(null) : (E.current = null));
                    }
                  }
                  switch (1038 & w) {
                    case 2:
                      Ll(Wl), (Wl.flags &= -3);
                      break;
                    case 6:
                      Ll(Wl), (Wl.flags &= -3), Al(Wl.alternate, Wl);
                      break;
                    case 1024:
                      Wl.flags &= -1025;
                      break;
                    case 1028:
                      (Wl.flags &= -1025), Al(Wl.alternate, Wl);
                      break;
                    case 4:
                      Al(Wl.alternate, Wl);
                      break;
                    case 8:
                      Sl(l, (s = Wl));
                      var L = s.alternate;
                      bl(s), null !== L && bl(L);
                  }
                  Wl = Wl.nextEffect;
                }
              } catch (e) {
                if (null === Wl) throw Error(a(330));
                zs(Wl, e), (Wl = Wl.nextEffect);
              }
            } while (null !== Wl);
            if (
              ((E = Vr),
              (b = gr()),
              (w = E.focusedElem),
              (l = E.selectionRange),
              b !== w && w && w.ownerDocument && mr(w.ownerDocument.documentElement, w))
            ) {
              null !== l &&
                vr(w) &&
                ((b = l.start),
                void 0 === (E = l.end) && (E = b),
                "selectionStart" in w
                  ? ((w.selectionStart = b), (w.selectionEnd = Math.min(E, w.value.length)))
                  : (E = ((b = w.ownerDocument || document) && b.defaultView) || window).getSelection &&
                    ((E = E.getSelection()),
                    (s = w.textContent.length),
                    (L = Math.min(l.start, s)),
                    (l = void 0 === l.end ? L : Math.min(l.end, s)),
                    !E.extend && L > l && ((s = l), (l = L), (L = s)),
                    (s = hr(w, L)),
                    (i = hr(w, l)),
                    s &&
                      i &&
                      (1 !== E.rangeCount ||
                        E.anchorNode !== s.node ||
                        E.anchorOffset !== s.offset ||
                        E.focusNode !== i.node ||
                        E.focusOffset !== i.offset) &&
                      ((b = b.createRange()).setStart(s.node, s.offset),
                      E.removeAllRanges(),
                      L > l ? (E.addRange(b), E.extend(i.node, i.offset)) : (b.setEnd(i.node, i.offset), E.addRange(b))))),
                (b = []);
              for (E = w; (E = E.parentNode); ) 1 === E.nodeType && b.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
              for ("function" == typeof w.focus && w.focus(), w = 0; w < b.length; w++)
                ((E = b[w]).element.scrollLeft = E.left), (E.element.scrollTop = E.top);
            }
            (Wt = !!Ur), (Vr = Ur = null), (e.current = n), (Wl = r);
            do {
              try {
                for (w = e; null !== Wl; ) {
                  var _ = Wl.flags;
                  if ((36 & _ && vl(w, Wl.alternate, Wl), 128 & _)) {
                    b = void 0;
                    var x = Wl.ref;
                    if (null !== x) {
                      var S = Wl.stateNode;
                      Wl.tag, (b = S), "function" == typeof x ? x(b) : (x.current = b);
                    }
                  }
                  Wl = Wl.nextEffect;
                }
              } catch (e) {
                if (null === Wl) throw Error(a(330));
                zs(Wl, e), (Wl = Wl.nextEffect);
              }
            } while (null !== Wl);
            (Wl = null), jo(), (Rl = o);
          } else e.current = n;
          if (Jl) (Jl = !1), (es = e), (ts = t);
          else
            for (Wl = r; null !== Wl; )
              (t = Wl.nextEffect), (Wl.nextEffect = null), 8 & Wl.flags && (((_ = Wl).sibling = null), (_.stateNode = null)), (Wl = t);
          if (
            (0 === (r = e.pendingLanes) && (Ql = null),
            1 === r ? (e === as ? is++ : ((is = 0), (as = e))) : (is = 0),
            (n = n.stateNode),
            So && "function" == typeof So.onCommitFiberRoot)
          )
            try {
              So.onCommitFiberRoot(xo, n, void 0, 64 == (64 & n.current.flags));
            } catch (e) {}
          if ((gs(e, Ho()), ql)) throw ((ql = !1), (e = Xl), (Xl = null), e);
          return 0 != (8 & Rl) || Wo(), null;
        }
        function Ns() {
          for (; null !== Wl; ) {
            var e = Wl.alternate;
            ds || null === us || (0 != (8 & Wl.flags) ? et(Wl, us) && (ds = !0) : 13 === Wl.tag && Cl(e, Wl) && et(Wl, us) && (ds = !0));
            var t = Wl.flags;
            0 != (256 & t) && gl(e, Wl),
              0 == (512 & t) ||
                Jl ||
                ((Jl = !0),
                Zo(97, function () {
                  return Ds(), null;
                })),
              (Wl = Wl.nextEffect);
          }
        }
        function Ds() {
          if (90 !== ts) {
            var e = 97 < ts ? 97 : ts;
            return (ts = 90), Yo(e, $s);
          }
          return !1;
        }
        function Fs(e, t) {
          ns.push(t, e),
            Jl ||
              ((Jl = !0),
              Zo(97, function () {
                return Ds(), null;
              }));
        }
        function Ms(e, t) {
          rs.push(t, e),
            Jl ||
              ((Jl = !0),
              Zo(97, function () {
                return Ds(), null;
              }));
        }
        function $s() {
          if (null === es) return !1;
          var e = es;
          if (((es = null), 0 != (48 & Rl))) throw Error(a(331));
          var t = Rl;
          Rl |= 32;
          var n = rs;
          rs = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              i = n[r + 1],
              l = o.destroy;
            if (((o.destroy = void 0), "function" == typeof l))
              try {
                l();
              } catch (e) {
                if (null === i) throw Error(a(330));
                zs(i, e);
              }
          }
          for (n = ns, ns = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (i = n[r + 1]);
            try {
              var s = o.create;
              o.destroy = s();
            } catch (e) {
              if (null === i) throw Error(a(330));
              zs(i, e);
            }
          }
          for (s = e.current.firstEffect; null !== s; )
            (e = s.nextEffect), (s.nextEffect = null), 8 & s.flags && ((s.sibling = null), (s.stateNode = null)), (s = e);
          return (Rl = t), Wo(), !0;
        }
        function js(e, t, n) {
          fi(e, (t = fl(0, (t = cl(n, t)), 1))), (t = fs()), null !== (e = ms(e, 1)) && (Kt(e, 1, t), gs(e, t));
        }
        function zs(e, t) {
          if (3 === e.tag) js(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                js(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch && (null === Ql || !Ql.has(r)))
                ) {
                  var o = pl(n, (e = cl(t, e)), 1);
                  if ((fi(n, o), (o = fs()), null !== (n = ms(n, 1)))) Kt(n, 1, o), gs(n, o);
                  else if ("function" == typeof r.componentDidCatch && (null === Ql || !Ql.has(r)))
                    try {
                      r.componentDidCatch(t, e);
                    } catch (e) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Us(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = fs()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ol === e && (Dl & n) === n && (4 === $l || (3 === $l && (62914560 & Dl) === Dl && 500 > Ho() - Bl) ? xs(e, 0) : (Kl |= n)),
            gs(e, t);
        }
        function Vs(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                ? (t = 99 === Bo() ? 1 : 2)
                : (0 === ss && (ss = zl), 0 === (t = Ut(62914560 & ~ss)) && (t = 4194304))),
            (n = fs()),
            null !== (e = ms(e, t)) && (Kt(e, t, n), gs(e, n));
        }
        function Ks(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Hs(e, t, n, r) {
          return new Ks(e, t, n, r);
        }
        function Bs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Gs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Hs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ys(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" == typeof e)) Bs(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case x:
                return Zs(n.children, o, i, t);
              case F:
                (l = 8), (o |= 16);
                break;
              case S:
                (l = 8), (o |= 1);
                break;
              case A:
                return ((e = Hs(12, n, t, 8 | o)).elementType = A), (e.type = A), (e.lanes = i), e;
              case T:
                return ((e = Hs(13, n, t, o)).type = T), (e.elementType = T), (e.lanes = i), e;
              case I:
                return ((e = Hs(19, n, t, o)).elementType = I), (e.lanes = i), e;
              case M:
                return Ws(n, o, i, t);
              case $:
                return ((e = Hs(24, n, t, o)).elementType = $), (e.lanes = i), e;
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case k:
                      l = 10;
                      break e;
                    case C:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case R:
                      l = 14;
                      break e;
                    case O:
                      (l = 16), (r = null);
                      break e;
                    case N:
                      l = 22;
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return ((t = Hs(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t;
        }
        function Zs(e, t, n, r) {
          return ((e = Hs(7, e, r, t)).lanes = n), e;
        }
        function Ws(e, t, n, r) {
          return ((e = Hs(23, e, r, t)).elementType = M), (e.lanes = n), e;
        }
        function qs(e, t, n) {
          return ((e = Hs(6, e, null, t)).lanes = n), e;
        }
        function Xs(e, t, n) {
          return (
            ((t = Hs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
          );
        }
        function Qs(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Vt(0)),
            (this.expirationTimes = Vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Vt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Js(e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return { $$typeof: _, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
        }
        function ec(e, t, n, r) {
          var o = t.current,
            i = fs(),
            l = ps(o);
          e: if (n) {
            t: {
              if (qe((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(a(170));
              var s = n;
              do {
                switch (s.tag) {
                  case 3:
                    s = s.stateNode.context;
                    break t;
                  case 1:
                    if (yo(s.type)) {
                      s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                s = s.return;
              } while (null !== s);
              throw Error(a(171));
            }
            if (1 === n.tag) {
              var c = n.type;
              if (yo(c)) {
                n = Eo(n, c, s);
                break e;
              }
            }
            n = s;
          } else n = po;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = di(i, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            fi(o, t),
            hs(o, l, i),
            l
          );
        }
        function tc(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function nc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function rc(e, t) {
          nc(e, t), (e = e.alternate) && nc(e, t);
        }
        function oc(e, t, n) {
          var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
          if (
            ((n = new Qs(e, t, null != n && !0 === n.hydrate)),
            (t = Hs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ci(t),
            (e[eo] = n.current),
            Rr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var o = (t = r[e])._getVersion;
              (o = o(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, o])
                  : n.mutableSourceEagerHydrationData.push(t, o);
            }
          this._internalRoot = n;
        }
        function ic(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function ac(e, t, n, r, o) {
          var i = n._reactRootContainer;
          if (i) {
            var a = i._internalRoot;
            if ("function" == typeof o) {
              var l = o;
              o = function () {
                var e = tc(a);
                l.call(e);
              };
            }
            ec(t, a, e, o);
          } else {
            if (
              ((i = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new oc(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (a = i._internalRoot),
              "function" == typeof o)
            ) {
              var s = o;
              o = function () {
                var e = tc(a);
                s.call(e);
              };
            }
            Es(function () {
              ec(t, a, e, o);
            });
          }
          return tc(a);
        }
        function lc(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!ic(t)) throw Error(a(200));
          return Js(e, t, null, n);
        }
        (Zl = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || mo.current) Ma = !0;
            else {
              if (0 == (n & r)) {
                switch (((Ma = !1), t.tag)) {
                  case 3:
                    Ya(t), Zi();
                    break;
                  case 5:
                    Fi(t);
                    break;
                  case 1:
                    yo(t.type) && Lo(t);
                    break;
                  case 4:
                    Ni(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var o = t.type._context;
                    fo(Jo, o._currentValue), (o._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 != (n & t.child.childLanes)
                        ? Qa(e, t, n)
                        : (fo($i, 1 & $i.current), null !== (t = il(e, t, n)) ? t.sibling : null);
                    fo($i, 1 & $i.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                      if (r) return ol(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (o = t.memoizedState) && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                      fo($i, $i.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Va(e, t, n);
                }
                return il(e, t, n);
              }
              Ma = 0 != (16384 & e.flags);
            }
          else Ma = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = vo(t, ho.current)),
                ai(t, n),
                (o = la(null, t, r, e, o, n)),
                (t.flags |= 1),
                "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof)
              ) {
                if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), yo(r))) {
                  var i = !0;
                  Lo(t);
                } else i = !1;
                (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null), ci(t);
                var l = r.getDerivedStateFromProps;
                "function" == typeof l && vi(t, r, l, e),
                  (o.updater = yi),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  Li(t, r, e, n),
                  (t = Ga(null, t, r, !0, i, n));
              } else (t.tag = 0), $a(null, t, o, n), (t = t.child);
              return t;
            case 16:
              o = t.elementType;
              e: {
                switch (
                  (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                  (e = t.pendingProps),
                  (o = (i = o._init)(o._payload)),
                  (t.type = o),
                  (i = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Bs(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = Qo(o, e)),
                  i)
                ) {
                  case 0:
                    t = Ha(null, t, o, e, n);
                    break e;
                  case 1:
                    t = Ba(null, t, o, e, n);
                    break e;
                  case 11:
                    t = ja(null, t, o, e, n);
                    break e;
                  case 14:
                    t = za(null, t, o, Qo(o.type, e), r, n);
                    break e;
                }
                throw Error(a(306, o, ""));
              }
              return t;
            case 0:
              return (r = t.type), (o = t.pendingProps), Ha(e, t, r, (o = t.elementType === r ? o : Qo(r, o)), n);
            case 1:
              return (r = t.type), (o = t.pendingProps), Ba(e, t, r, (o = t.elementType === r ? o : Qo(r, o)), n);
            case 3:
              if ((Ya(t), (r = t.updateQueue), null === e || null === r)) throw Error(a(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                ui(e, t),
                hi(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                Zi(), (t = il(e, t, n));
              else {
                if (((i = (o = t.stateNode).hydrate) && ((Ui = Zr(t.stateNode.containerInfo.firstChild)), (zi = t), (i = Vi = !0)), i)) {
                  if (null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2) ((i = e[o])._workInProgressVersionPrimary = e[o + 1]), Wi.push(i);
                  for (n = Ci(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else $a(e, t, r, n), Zi();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Fi(t),
                null === e && Bi(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                Hr(r, o) ? (l = null) : null !== i && Hr(r, i) && (t.flags |= 16),
                Ka(e, t),
                $a(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Bi(t), null;
            case 13:
              return Qa(e, t, n);
            case 4:
              return (
                Ni(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = ki(t, null, r, n)) : $a(e, t, r, n), t.child
              );
            case 11:
              return (r = t.type), (o = t.pendingProps), ja(e, t, r, (o = t.elementType === r ? o : Qo(r, o)), n);
            case 7:
              return $a(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return $a(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context), (o = t.pendingProps), (l = t.memoizedProps), (i = o.value);
                var s = t.type._context;
                if ((fo(Jo, s._currentValue), (s._currentValue = i), null !== l))
                  if (
                    ((s = l.value),
                    0 ===
                      (i = ur(s, i) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, i) : 1073741823)))
                  ) {
                    if (l.children === o.children && !mo.current) {
                      t = il(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                      var c = s.dependencies;
                      if (null !== c) {
                        l = s.child;
                        for (var u = c.firstContext; null !== u; ) {
                          if (u.context === r && 0 != (u.observedBits & i)) {
                            1 === s.tag && (((u = di(-1, n & -n)).tag = 2), fi(s, u)),
                              (s.lanes |= n),
                              null !== (u = s.alternate) && (u.lanes |= n),
                              ii(s.return, n),
                              (c.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else l = 10 === s.tag && s.type === t.type ? null : s.child;
                      if (null !== l) l.return = s;
                      else
                        for (l = s; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (s = l.sibling)) {
                            (s.return = l.return), (l = s);
                            break;
                          }
                          l = l.return;
                        }
                      s = l;
                    }
                $a(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (i = t.pendingProps).children),
                ai(t, n),
                (r = r((o = li(o, i.unstable_observedBits)))),
                (t.flags |= 1),
                $a(e, t, r, n),
                t.child
              );
            case 14:
              return (i = Qo((o = t.type), t.pendingProps)), za(e, t, o, (i = Qo(o.type, i)), r, n);
            case 15:
              return Ua(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Qo(r, o)),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                yo(r) ? ((e = !0), Lo(t)) : (e = !1),
                ai(t, n),
                bi(t, r, o),
                Li(t, r, o, n),
                Ga(null, t, r, !0, e, n)
              );
            case 19:
              return ol(e, t, n);
            case 23:
            case 24:
              return Va(e, t, n);
          }
          throw Error(a(156, t.tag));
        }),
          (oc.prototype.render = function (e) {
            ec(e, this._internalRoot, null, null);
          }),
          (oc.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            ec(null, e, null, function () {
              t[eo] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (hs(e, 4, fs()), rc(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (hs(e, 67108864, fs()), rc(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = fs(),
                n = ps(e);
              hs(e, n, t), rc(e, n);
            }
          }),
          (ot = function (e, t) {
            return t();
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = io(r);
                      if (!o) throw Error(a(90));
                      X(r), ne(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ce(e, n);
                break;
              case "select":
                null != (t = n.value) && ae(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = bs),
          (Ne = function (e, t, n, r, o) {
            var i = Rl;
            Rl |= 4;
            try {
              return Yo(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (Rl = i) && (Yl(), Wo());
            }
          }),
          (De = function () {
            0 == (49 & Rl) &&
              ((function () {
                if (null !== os) {
                  var e = os;
                  (os = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), gs(e, Ho());
                    });
                }
                Wo();
              })(),
              Ds());
          }),
          (Fe = function (e, t) {
            var n = Rl;
            Rl |= 2;
            try {
              return e(t);
            } finally {
              0 === (Rl = n) && (Yl(), Wo());
            }
          });
        var sc = { Events: [ro, oo, io, Ie, Re, Ds, { current: !1 }] },
          cc = { findFiberByHostInstance: no, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" },
          uc = {
            bundleType: cc.bundleType,
            version: cc.version,
            rendererPackageName: cc.rendererPackageName,
            rendererConfig: cc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: E.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              cc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var dc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!dc.isDisabled && dc.supportsFiber)
            try {
              (xo = dc.inject(uc)), (So = dc);
            } catch (ge) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sc),
          (t.createPortal = lc),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(a(188));
              throw Error(a(268, Object.keys(e)));
            }
            return (e = null === (e = Je(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Rl;
            if (0 != (48 & n)) return e(t);
            Rl |= 1;
            try {
              if (e) return Yo(99, e.bind(null, t));
            } finally {
              (Rl = n), Wo();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!ic(t)) throw Error(a(200));
            return ac(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!ic(t)) throw Error(a(200));
            return ac(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!ic(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (Es(function () {
                ac(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[eo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = bs),
          (t.unstable_createPortal = function (e, t) {
            return lc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!ic(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ac(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      3935: (e, t, n) => {
        "use strict";
        !(function e() {
          if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(4448));
      },
      9921: (e, t) => {
        "use strict";
        var n = 60103,
          r = 60106,
          o = 60107,
          i = 60108,
          a = 60114,
          l = 60109,
          s = 60110,
          c = 60112,
          u = 60113,
          d = 60120,
          f = 60115,
          p = 60116,
          h = 60121,
          m = 60122,
          g = 60117,
          v = 60129,
          y = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var w = Symbol.for;
          (n = w("react.element")),
            (r = w("react.portal")),
            (o = w("react.fragment")),
            (i = w("react.strict_mode")),
            (a = w("react.profiler")),
            (l = w("react.provider")),
            (s = w("react.context")),
            (c = w("react.forward_ref")),
            (u = w("react.suspense")),
            (d = w("react.suspense_list")),
            (f = w("react.memo")),
            (p = w("react.lazy")),
            (h = w("react.block")),
            (m = w("react.server.block")),
            (g = w("react.fundamental")),
            (v = w("react.debug_trace_mode")),
            (y = w("react.legacy_hidden"));
        }
        function b(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case o:
                  case a:
                  case i:
                  case u:
                  case d:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case c:
                      case p:
                      case f:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case r:
                return t;
            }
          }
        }
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === a ||
            e === v ||
            e === i ||
            e === u ||
            e === d ||
            e === y ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === p ||
                e.$$typeof === f ||
                e.$$typeof === l ||
                e.$$typeof === s ||
                e.$$typeof === c ||
                e.$$typeof === g ||
                e.$$typeof === h ||
                e[0] === m))
          );
        }),
          (t.typeOf = b);
      },
      9864: (e, t, n) => {
        "use strict";
        e.exports = n(9921);
      },
      2408: (e, t, n) => {
        "use strict";
        var r = n(7418),
          o = 60103,
          i = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var a = 60109,
          l = 60110,
          s = 60112;
        t.Suspense = 60113;
        var c = 60115,
          u = 60116;
        if ("function" == typeof Symbol && Symbol.for) {
          var d = Symbol.for;
          (o = d("react.element")),
            (i = d("react.portal")),
            (t.Fragment = d("react.fragment")),
            (t.StrictMode = d("react.strict_mode")),
            (t.Profiler = d("react.profiler")),
            (a = d("react.provider")),
            (l = d("react.context")),
            (s = d("react.forward_ref")),
            (t.Suspense = d("react.suspense")),
            (c = d("react.memo")),
            (u = d("react.lazy"));
        }
        var f = "function" == typeof Symbol && Symbol.iterator;
        function p(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
          },
          m = {};
        function g(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
        }
        function v() {}
        function y(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e) throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = g.prototype);
        var w = (y.prototype = new v());
        (w.constructor = y), r(w, g.prototype), (w.isPureReactComponent = !0);
        var b = { current: null },
          E = Object.prototype.hasOwnProperty,
          L = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, n) {
          var r,
            i = {},
            a = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t))
              E.call(t, r) && !L.hasOwnProperty(r) && (i[r] = t[r]);
          var s = arguments.length - 2;
          if (1 === s) i.children = n;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            i.children = c;
          }
          if (e && e.defaultProps) for (r in (s = e.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
          return { $$typeof: o, type: e, key: a, ref: l, props: i, _owner: b.current };
        }
        function x(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }
        var S = /\/+/g;
        function A(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function k(e, t, n, r, a) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case i:
                    s = !0;
                }
            }
          if (s)
            return (
              (a = a((s = e))),
              (e = "" === r ? "." + A(s, 0) : r),
              Array.isArray(a)
                ? ((n = ""),
                  null != e && (n = e.replace(S, "$&/") + "/"),
                  k(a, t, n, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (x(a) &&
                    (a = (function (e, t) {
                      return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                    })(a, n + (!a.key || (s && s.key === a.key) ? "" : ("" + a.key).replace(S, "$&/") + "/") + e)),
                  t.push(a)),
              1
            );
          if (((s = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var c = 0; c < e.length; c++) {
              var u = r + A((l = e[c]), c);
              s += k(l, t, n, u, a);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" != typeof e ? null : "function" == typeof (e = (f && e[f]) || e["@@iterator"]) ? e : null;
            })(e)),
            "function" == typeof u)
          )
            for (e = u.call(e), c = 0; !(l = e.next()).done; ) s += k((l = l.value), t, n, (u = r + A(l, c++)), a);
          else if ("object" === l)
            throw ((t = "" + e), Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
          return s;
        }
        function C(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            k(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var T = { current: null };
        function I() {
          var e = T.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var R = {
          ReactCurrentDispatcher: T,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: b,
          IsSomeRendererActing: { current: !1 },
          assign: r
        };
        (t.Children = {
          map: C,
          forEach: function (e, t, n) {
            C(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              C(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              C(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!x(e)) throw Error(p(143));
            return e;
          }
        }),
          (t.Component = g),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error(p(267, e));
            var i = r({}, e.props),
              a = e.key,
              l = e.ref,
              s = e._owner;
            if (null != t) {
              if ((void 0 !== t.ref && ((l = t.ref), (s = b.current)), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps))
                var c = e.type.defaultProps;
              for (u in t) E.call(t, u) && !L.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = n;
            else if (1 < u) {
              c = Array(u);
              for (var d = 0; d < u; d++) c[d] = arguments[d + 2];
              i.children = c;
            }
            return { $$typeof: o, type: e.type, key: a, ref: l, props: i, _owner: s };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = x),
          (t.lazy = function (e) {
            return { $$typeof: u, _payload: { _status: -1, _result: e }, _init: P };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return I().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return I().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return I().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return I().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return I().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I().useRef(e);
          }),
          (t.useState = function (e) {
            return I().useState(e);
          }),
          (t.version = "17.0.2");
      },
      7294: (e, t, n) => {
        "use strict";
        e.exports = n(2408);
      },
      53: (e, t) => {
        "use strict";
        var n, r, o, i;
        if ("object" == typeof performance && "function" == typeof performance.now) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        if ("undefined" == typeof window || "function" != typeof MessageChannel) {
          var c = null,
            u = null,
            d = function () {
              if (null !== c)
                try {
                  var e = t.unstable_now();
                  c(!0, e), (c = null);
                } catch (e) {
                  throw (setTimeout(d, 0), e);
                }
            };
          (n = function (e) {
            null !== c ? setTimeout(n, 0, e) : ((c = e), setTimeout(d, 0));
          }),
            (r = function (e, t) {
              u = setTimeout(e, t);
            }),
            (o = function () {
              clearTimeout(u);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (i = t.unstable_forceFrameRate = function () {});
        } else {
          var f = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" != typeof console) {
            var h = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" != typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var m = !1,
            g = null,
            v = -1,
            y = 5,
            w = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= w;
          }),
            (i = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var b = new MessageChannel(),
            E = b.port2;
          (b.port1.onmessage = function () {
            if (null !== g) {
              var e = t.unstable_now();
              w = e + y;
              try {
                g(!0, e) ? E.postMessage(null) : ((m = !1), (g = null));
              } catch (e) {
                throw (E.postMessage(null), e);
              }
            } else m = !1;
          }),
            (n = function (e) {
              (g = e), m || ((m = !0), E.postMessage(null));
            }),
            (r = function (e, n) {
              v = f(function () {
                e(t.unstable_now());
              }, n);
            }),
            (o = function () {
              p(v), (v = -1);
            });
        }
        function L(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(void 0 !== o && 0 < S(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function _(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function x(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var i = 2 * (r + 1) - 1,
                  a = e[i],
                  l = i + 1,
                  s = e[l];
                if (void 0 !== a && 0 > S(a, n))
                  void 0 !== s && 0 > S(s, a) ? ((e[r] = s), (e[l] = n), (r = l)) : ((e[r] = a), (e[i] = n), (r = i));
                else {
                  if (!(void 0 !== s && 0 > S(s, n))) break e;
                  (e[r] = s), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function S(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var A = [],
          k = [],
          C = 1,
          P = null,
          T = 3,
          I = !1,
          R = !1,
          O = !1;
        function N(e) {
          for (var t = _(k); null !== t; ) {
            if (null === t.callback) x(k);
            else {
              if (!(t.startTime <= e)) break;
              x(k), (t.sortIndex = t.expirationTime), L(A, t);
            }
            t = _(k);
          }
        }
        function D(e) {
          if (((O = !1), N(e), !R))
            if (null !== _(A)) (R = !0), n(F);
            else {
              var t = _(k);
              null !== t && r(D, t.startTime - e);
            }
        }
        function F(e, n) {
          (R = !1), O && ((O = !1), o()), (I = !0);
          var i = T;
          try {
            for (N(n), P = _(A); null !== P && (!(P.expirationTime > n) || (e && !t.unstable_shouldYield())); ) {
              var a = P.callback;
              if ("function" == typeof a) {
                (P.callback = null), (T = P.priorityLevel);
                var l = a(P.expirationTime <= n);
                (n = t.unstable_now()), "function" == typeof l ? (P.callback = l) : P === _(A) && x(A), N(n);
              } else x(A);
              P = _(A);
            }
            if (null !== P) var s = !0;
            else {
              var c = _(k);
              null !== c && r(D, c.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (P = null), (T = i), (I = !1);
          }
        }
        var M = i;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            R || I || ((R = !0), n(F));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return _(A);
          }),
          (t.unstable_next = function (e) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = T;
            }
            var n = T;
            T = t;
            try {
              return e();
            } finally {
              T = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = M),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = T;
            T = e;
            try {
              return t();
            } finally {
              T = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var l = t.unstable_now();
            switch (("object" == typeof a && null !== a ? (a = "number" == typeof (a = a.delay) && 0 < a ? l + a : l) : (a = l), e)) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = { id: C++, callback: i, priorityLevel: e, startTime: a, expirationTime: (s = a + s), sortIndex: -1 }),
              a > l
                ? ((e.sortIndex = a), L(k, e), null === _(A) && e === _(k) && (O ? o() : (O = !0), r(D, a - l)))
                : ((e.sortIndex = s), L(A, e), R || I || ((R = !0), n(F))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = T;
            return function () {
              var n = T;
              T = t;
              try {
                return e.apply(this, arguments);
              } finally {
                T = n;
              }
            };
          });
      },
      3840: (e, t, n) => {
        "use strict";
        e.exports = n(53);
      },
      6774: (e) => {
        e.exports = function (e, t, n, r) {
          var o = n ? n.call(r, e, t) : void 0;
          if (void 0 !== o) return !!o;
          if (e === t) return !0;
          if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
          var i = Object.keys(e),
            a = Object.keys(t);
          if (i.length !== a.length) return !1;
          for (var l = Object.prototype.hasOwnProperty.bind(t), s = 0; s < i.length; s++) {
            var c = i[s];
            if (!l(c)) return !1;
            var u = e[c],
              d = t[c];
            if (!1 === (o = n ? n.call(r, u, d, c) : void 0) || (void 0 === o && u !== d)) return !1;
          }
          return !0;
        };
      },
      1238: (e, t, n) => {
        "use strict";
        e.exports = n.p + "79acfc8edcfa43859513.svg";
      },
      5973: (e, t, n) => {
        "use strict";
        e.exports = n.p + "9b1b06a2d6f14a05f17d.svg";
      },
      1564: (e, t, n) => {
        "use strict";
        e.exports = n.p + "c84cdc08b86476730e86.svg";
      },
      7295: (e, t, n) => {
        "use strict";
        e.exports = n.p + "3c3567198ee1bddc175b.svg";
      },
      1375: (e, t, n) => {
        "use strict";
        e.exports = n.p + "662364405034307d4bca.svg";
      },
      6011: (e, t, n) => {
        "use strict";
        e.exports = n.p + "eb538990acfd13e350fd.svg";
      },
      8638: (e, t, n) => {
        "use strict";
        e.exports = n.p + "1f9f39632c073047e658.svg";
      },
      1899: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M4.54616461,4.54616461 L6.40962346,12 L4.54616461,19.4538354 L12,17.5903765 L19.4538354,19.4538354 L17.5903765,12 L19.4538354,4.54616461 L12,6.40962346 L4.54616461,4.54616461 Z M3,3 L12,5.25 L21,3 L18.75,12 L21,21 L12,18.75 L3,21 L5.25,12 L3,3 Z"/>\n</svg>\n';
      },
      7861: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M18,7 L13.2286363,7 L14.5,8.1990569 L13.6507576,9 L11,6.5 L13.6507576,4 L14.5,4.8009431 L13.2286363,6 L18,6 L19,6 L19,11 L18,11 L18,7 Z M6,17 L10.7713637,17 L9.5,15.8009431 L10.3492424,15 L13,17.5 L10.3492424,20 L9.5,19.1990569 L10.7713637,18 L6,18 L5,18 L5,13 L6,13 L6,17 Z M3,3 L10,3 L10,12 L3,12 L3,3 Z M4,11 L9,11 L9,4 L4,4 L4,11 Z M14,12 L21,12 L21,21 L14,21 L14,12 Z M15,20 L20,20 L20,13 L15,13 L15,20 Z"/>\n</svg>\n';
      },
      3850: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M8,7 L8,4 L16,4 L16,7 L20,7 L20,8 L17.9340659,8 L17.1428571,20 L6.85714286,20 L6.06593407,8 L4,8 L4,7 L8,7 Z M16,8 L8,8 L7,8 L7.73708433,19 L16.2629157,19 L17,8 L16,8 Z M11.5,9 L12.5,9 L12.5,18 L11.5,18 L11.5,9 Z M9,9 L10,9 L10,18 L9,18 L9,9 Z M14,9 L15,9 L15,18 L14,18 L14,9 Z M9,5 L9,7 L15,7 L15,5 L9,5 Z"/>\n</svg>\n';
      },
      8405: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M8,18 L8,13 L6,13 L6,12 L11,12 L11,13 L9,13 L9,18 L11,18 L11,19 L6,19 L6,18 L8,18 Z M18,20 L18,9 L19,9 L19,21 L4,21 L4,3 L16,3 L16,4 L5,4 L5,20 L18,20 Z M12,10 L19,3 L21,5 L14,12 L12,12 L12,10 Z"/>\n</svg>\n';
      },
      9269: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L14,8 L14,16 L14,17 L11,17 L11,20 L20,20 Z M21,20 L21,21 L10,21 L10,20 L10,17 L3,17 L3,16 L3,4 L3,3 L14,3 L14,4 L14,7 L21,7 L21,8 L21,20 Z M13,16 L13,4 L4,4 L4,16 L13,16 Z M9,14 L11,14 L11,12 L9,12 L9,14 Z M8,14 L8,12 L6,12 L6,14 L8,14 Z M9,9 L9,11 L11,11 L11,9 L9,9 Z M8,9 L6,9 L6,11 L8,11 L8,9 Z M12,14 L12,15 L5,15 L5,14 L5,8 L6,8 L12,8 L12,9 L12,14 Z"/>\n</svg>\n';
      },
      1215: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,17.1833491 L18.9232994,16.0660185 L15.4050892,18.5 L14,17.0418887 L14.0403655,17 L10.988368,17 L10,17.7161353 L10,20 L20,20 L20,17.1833491 Z M20,15.4622643 L20,8 L15,8 L15,16 L15,16.3585396 L15.5545169,16.9339815 L19.072727,14.5 L20,15.4622643 Z M21,20 L21,21 L9,21 L9,20 L9,17 L3,17 L3,16 L3,4 L3,3 L15,3 L15,4 L15,7 L21,7 L21,8 L21,20 Z M14,16 L14,4 L4,4 L4,16 L14,16 Z M17.5,14 C16.6715729,14 16,13.3284271 16,12.5 C16,11.6715729 16.6715729,11 17.5,11 C18.3284271,11 19,11.6715729 19,12.5 C19,13.3284271 18.3284271,14 17.5,14 Z"/>\n</svg>\n';
      },
      5802: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L15,8 L15,16 L15,17 L10,17 L10,20 L20,20 Z M21,20 L21,21 L9,21 L9,20 L9,17 L3,17 L3,16 L3,4 L3,3 L15,3 L15,4 L15,7 L21,7 L21,8 L21,20 Z M14,16 L14,13.6263753 L12.9568458,12.542563 L9.49546776,14.9400889 L7.1878824,12.542563 L4,14.750652 L4,16 L14,16 Z M14,4 L4,4 L4,13.3099182 L7.33489622,11 L9.64248158,13.3975259 L13.1038596,11 L14,11.9310684 L14,4 Z M11.5,10 C10.6715729,10 10,9.32842712 10,8.5 C10,7.67157288 10.6715729,7 11.5,7 C12.3284271,7 13,7.67157288 13,8.5 C13,9.32842712 12.3284271,10 11.5,10 Z"/>\n</svg>\n';
      },
      387: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M14,15 L14,12 L15,12 L15,15 L18,15 L18,16 L15,16 L15,19 L14,19 L14,16 L11,16 L11,15 L14,15 Z M15,7 L15,3 L4,3 L4,16 L8,16 L8,7 L15,7 Z M16,7 L21,7 L21,22 L8,22 L8,17 L3,17 L3,2 L16,2 L16,7 Z M9,8 L9,21 L20,21 L20,8 L9,8 Z"/>\n</svg>\n';
      },
      5519: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L14,8 L14,12 L19,12 L19,13 L19,18 L19,19 L12,19 L12,18 L12,17 L11,17 L11,20 L20,20 Z M21,20 L21,21 L10,21 L10,20 L10,17 L3,17 L3,16 L3,4 L3,3 L14,3 L14,4 L14,7 L21,7 L21,8 L21,20 Z M13,15 L13,4 L4,4 L4,16 L13,16 L13,15 Z M14,15 L15,15 L15,13 L14,13 L14,15 Z M14,16 L14,17 L13,17 L13,18 L15,18 L15,16 L14,16 Z M16,18 L18,18 L18,16 L16,16 L16,18 Z M16,13 L16,15 L18,15 L18,13 L16,13 Z"/>\n</svg>\n';
      },
      471: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M10,21 L9,21 L9,17 L3,17 L3,16 L3,4 L3,3 L15,3 L15,4 L15,6 L20,6 L21,6 L21,21 L20,21 L10,21 Z M10,20 L20,20 L20,7 L15,7 L15,11 C17.209139,11 19,12.790861 19,15 C19,17.209139 17.209139,19 15,19 C13.5194353,19 12.2267476,18.1956027 11.5351288,17 L10,17 L10,20 Z M14,6 L14,4 L4,4 L4,16 L14,16 L14,7 L14,6 Z M15,12 L15,14.5 L17.9585208,14.5 C17.7204817,13.0811433 16.4864981,12 15,12 Z M15,15.5 L15,16 L15,17 L12.7633794,17 C13.3228061,17.6257453 14.1284363,18 15,18 C16.4864981,18 17.7204817,16.9188567 17.9585208,15.5 L15,15.5 Z"/>\n</svg>\n';
      },
      1593: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L14,8 L14,13 L19,13 L19,14 L14,14 L14,15 L19,15 L19,16 L14,16 L14,17 L19,17 L19,18 L12,18 L12,17 L11,17 L11,20 L20,20 Z M21,20 L21,21 L10,21 L10,20 L10,17 L3,17 L3,16 L3,4 L3,3 L14,3 L14,4 L14,7 L21,7 L21,8 L21,20 Z M13,15 L13,4 L4,4 L4,16 L13,16 L13,15 Z"/>\n</svg>\n';
      },
      1432: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M11.8292943,12 L9,12 L8.5,12 L8.5,8.04147922 C7.08114333,8.27951827 6,9.51350186 6,11 C6,12.6568542 7.34314575,14 9,14 C10.3062188,14 11.4174579,13.1651924 11.8292943,12 Z M12,11 C12,9.51350186 10.9188567,8.27951827 9.5,8.04147922 L9.5,11 L12,11 Z M20,20 L20,7 L15,7 L15,16 L15,17 L10,17 L10,20 L20,20 Z M21,20 L21,21 L9,21 L9,20 L9,17 L3,17 L3,16 L3,4 L3,3 L15,3 L15,4 L15,6 L21,6 L21,7 L21,20 Z M14,16 L14,4 L4,4 L4,16 L14,16 Z M9,15 C6.790861,15 5,13.209139 5,11 C5,8.790861 6.790861,7 9,7 C11.209139,7 13,8.790861 13,11 C13,13.209139 11.209139,15 9,15 Z"/>\n</svg>\n';
      },
      8786: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M8.28997343,17.2429821 C9.19593898,18.1375786 10.166301,18.8391859 11.1333007,19.367903 C11.4889618,19.5623644 11.7899577,19.7058067 12.0189601,19.803413 C12.2446403,19.7148505 12.5410138,19.583361 12.8911493,19.4029629 C13.852071,18.9078734 14.8166273,18.2358264 15.7176224,17.3627445 C18.1377542,15.0175892 19.6610011,11.690045 19.854971,7.1471145 C19.2366509,6.91524436 18.5737541,6.66665808 16.1049863,5.74087016 L11.6049865,4.05337034 L12.3950142,4.05337033 L7.89501403,5.74087034 L4.8012639,6.9010266 C4.43875712,7.03696663 4.29612784,7.09045261 4.14586918,7.1467996 C4.34323673,11.5516807 5.86673089,14.8501492 8.28997343,17.2429821 Z M3,6.375 C2.99999995,6.37500005 12,3 12,3 C12,3 21,6.37499955 21,6.375 C20.8910799,18.4364737 12,21 12,21 C12,21 3.10658955,18.0970558 3,6.375 Z"/>\n</svg>\n';
      },
      4661: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M11.068085,18.8082824 L10,17.8009431 L10.8492424,17 L13.5,19.5 L10.8492424,22 L10,21.1990569 L11.3013692,19.971701 C6.93375013,19.6163834 3.5,15.9591894 3.5,11.5 L4.63333333,11.5 C4.63333333,15.2528284 7.43955627,18.3502282 11.068085,18.8082824 Z M12.8972064,4.68741965 L14.5,6.1990569 L13.6507576,7 L11,4.5 L12,3.5568734 L12,3.5 C12.0200438,3.5 12.0400714,3.50006938 12.0600826,3.5002079 L13.6507576,2 L14.5,2.8009431 L13.5994694,3.65025748 C17.5292545,4.39851286 20.5,7.85232903 20.5,12 L19.3666667,12 C19.3666667,8.23521439 16.5425329,5.13004057 12.8972064,4.68741965 Z M8,8 L17,8 L17,16 L8,16 L8,8 Z M9,15 L16,15 L16,9 L9,9 L9,15 Z"/>\n</svg>\n';
      },
      6070: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M7.35355339,16.3535534 C7.15829124,16.5488155 6.84170876,16.5488155 6.64644661,16.3535534 C6.45118446,16.1582912 6.45118446,15.8417088 6.64644661,15.6464466 L9.64644661,12.6464466 C9.903582,12.3893112 10.3404805,12.4839475 10.4681646,12.8244383 L11.2469226,14.9011264 L12.7226499,13.9173082 C12.9601836,13.7589524 13.2818682,13.8312884 13.4287465,14.0760855 L14.1905269,15.3457195 L15.7763932,14.5527864 C16.0233825,14.4292918 16.323719,14.529404 16.4472136,14.7763932 C16.5707082,15.0233825 16.470596,15.323719 16.2236068,15.4472136 L14.2236068,16.4472136 C13.9899215,16.5640563 13.7056749,16.4812835 13.5712535,16.2572479 L12.8410428,15.04023 L11.2773501,16.0826918 C11.0093945,16.2613289 10.6449121,16.1437662 10.5318354,15.8422284 L9.8044835,13.9026233 L7.35355339,16.3535534 Z M18,20 L18,9 L19,9 L19,21 L4,21 L4,3 L16,3 L16,4 L5,4 L5,20 L18,20 Z M6,18 L17,18 L17,19 L6,19 L6,18 Z M12,10 L19,3 L21,5 L14,12 L12,12 L12,10 Z"/>\n</svg>\n';
      },
      6232: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M11.355763,11.6544154 L8.14285714,3 L8.88064959,3.37144149 C9.42498837,3.64548876 9.84393276,4.11140048 10.0534237,4.67569377 L12,9.91907196 L13.9465763,4.67569377 C14.1560672,4.11140048 14.5750116,3.64548876 15.1193504,3.37144149 L15.8571429,3 L12.644237,11.6544154 L14.162376,15.7437368 C14.5691123,14.9972491 15.2466804,14.3898078 16.1208753,14.0778576 C18.0059605,13.4051785 20.0915013,14.3612388 20.7790611,16.2132782 C21.4666209,18.0653175 20.4958347,20.1120063 18.6107495,20.7846854 C16.7256643,21.4573645 14.6401235,20.5013042 13.9525637,18.6492648 L12,13.3897588 L10.0474363,18.6492648 C9.35987648,20.5013042 7.27433566,21.4573645 5.38925047,20.7846854 C3.50416527,20.1120063 2.53337912,18.0653175 3.22093891,16.2132782 C3.9084987,14.3612388 5.99403952,13.4051785 7.87912472,14.0778576 C8.75331964,14.3898078 9.43088769,14.9972491 9.83762405,15.7437368 L11.355763,11.6544154 Z M5.80422951,19.6668808 C7.06095297,20.1153335 8.45131352,19.47796 8.90968671,18.2432671 C9.36805991,17.0085742 8.72086914,15.644115 7.46414568,15.1956622 C6.20742221,14.7472095 4.81706166,15.384583 4.35868847,16.619276 C3.90031528,17.8539689 4.54750605,19.218428 5.80422951,19.6668808 Z M18.1957705,19.6668808 C19.452494,19.218428 20.0996847,17.8539689 19.6413115,16.619276 C19.1829383,15.384583 17.7925778,14.7472095 16.5358543,15.1956622 C15.2791309,15.644115 14.6319401,17.0085742 15.0903133,18.2432671 C15.5486865,19.47796 16.939047,20.1153335 18.1957705,19.6668808 Z"/>\n</svg>\n';
      },
      7245: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,8 C20,5.85222597 18.147774,4 16,4 C13.852226,4 12,5.85222597 12,8 L12,10 L17,10 L17,21 L3,21 L3,10 L11,10 L11,8 C11,5.23857625 13.2385763,3 16,3 C18.7614237,3 21,5.23857625 21,8 L21,10 L20,10 L20,8 Z M4,20 L16,20 L16,11 L4,11 L4,20 Z"/>\n</svg>\n';
      },
      5487: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L14,8 L14,16 L14,17 L11,17 L11,20 L20,20 Z M21,20 L21,21 L10,21 L10,20 L10,17 L3,17 L3,16 L3,4 L3,3 L14,3 L14,4 L14,7 L21,7 L21,8 L21,20 Z M13,16 L13,4 L4,4 L4,16 L13,16 Z M5,13 L12,13 L12,14 L5,14 L5,13 Z M5,11 L12,11 L12,12 L5,12 L5,11 Z M5,9 L12,9 L12,10 L5,10 L5,9 Z"/>\n</svg>\n';
      },
      6071: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#F23030"/>\n<path d="M5.68718 5.68718L11.8787 7.23507L12 7.26539L12.1213 7.23507L18.3128 5.68718L16.7649 11.8787L16.7346 12L16.7649 12.1213L18.3128 18.3128L12.1213 16.7649L12 16.7346L11.8787 16.7649L5.68718 18.3128L7.23507 12.1213L7.26539 12L7.23507 11.8787L5.68718 5.68718Z" stroke="white"/>\n</svg>\n';
      },
      7634: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#0FC0C5"/>\n<path d="M8.5 8V5.5H15.5V8" stroke="white"/>\n<path d="M5 8.5H19" stroke="white"/>\n<path d="M8.5 18.5L7.5 10.5001L16.5 10.5L15.5 18.5H8.5Z" stroke="white"/>\n<path d="M10.5 12V16" stroke="white"/>\n<path d="M13.5 12V16" stroke="white"/>\n</svg>\n';
      },
      2732: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#0FC0C5"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.4444L17.4444 5L19 6.55556L13.5556 12H12V10.4444Z" fill="white"/>\n<path d="M15 5.5H5.5V18.5H15.5V12" stroke="white"/>\n<path d="M7 12.5H10" stroke="white"/>\n<path d="M7 16.5H10" stroke="white"/>\n<path d="M8.5 12.5V16.5" stroke="white"/>\n</svg>\n';
      },
      7430: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#00CC44"/>\n<path d="M10.1416 11.6667L5 19H8.63422L11.9174 14.1569L15.1386 19H19L13.8584 11.6863L18.587 5H15.0354L12.0413 9.47059L9.15044 5H5.39233L10.1416 11.6667Z" fill="white"/>\n</svg>\n';
      },
      3302: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="24" height="24" rx="4" fill="#0FC0C5"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H18V10H14V5ZM13 4H14H18H19V5V10V11H18H14H13V10V5V4ZM19 13H13V20H19V13ZM10 14H6V19H10V14ZM6 13H5V14V19V20H6H10H11V19V14V13H10H6ZM11 4H5V11H11V4Z" fill="white"/>\n</svg>\n';
      },
      6628: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#7961F2"/>\n<path d="M10 16H6V5H14V8" stroke="white"/>\n<path d="M10.5 8.5H18.5V18.5H10.5V8.5Z" stroke="white"/>\n<path d="M14.5 11V16" stroke="white"/>\n<path d="M12 13.5H17" stroke="white"/>\n</svg>\n';
      },
      1937: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#F23030"/>\n<rect x="5.5" y="5.5" width="4" height="6" stroke="white"/>\n<rect x="14.5" y="12.5" width="4" height="6" stroke="white"/>\n<path d="M12 7.00014L11.6464 6.64658L11.2929 7.00014L11.6464 7.35369L12 7.00014ZM17 7H17.5V6.49999L17 6.5L17 7ZM13.9091 5.79813L14.2627 5.44458L13.5556 4.73747L13.202 5.09103L13.9091 5.79813ZM13.202 8.90924L13.5556 9.2628L14.2627 8.55569L13.9091 8.20214L13.202 8.90924ZM12 7.50014L17 7.5L17 6.5L12 6.50014L12 7.50014ZM16.5 7V11H17.5V7H16.5ZM12.3536 7.35369L13.9091 5.79813L13.202 5.09103L11.6464 6.64658L12.3536 7.35369ZM11.6464 7.35369L13.202 8.90924L13.9091 8.20214L12.3536 6.64658L11.6464 7.35369Z" fill="white"/>\n<path d="M12 17L12.3536 17.3536L12.7071 17L12.3536 16.6464L12 17ZM7 17L6.5 17L6.49999 17.5H7V17ZM10.0909 18.202L9.73734 18.5556L10.4444 19.2627L10.798 18.9091L10.0909 18.202ZM10.798 15.0909L10.4444 14.7373L9.73734 15.4444L10.0909 15.798L10.798 15.0909ZM12 16.5H7V17.5H12V16.5ZM7.5 17L7.50007 13L6.50007 13L6.5 17L7.5 17ZM11.6464 16.6464L10.0909 18.202L10.798 18.9091L12.3536 17.3536L11.6464 16.6464ZM12.3536 16.6464L10.798 15.0909L10.0909 15.798L11.6464 17.3536L12.3536 16.6464Z" fill="white"/>\n</svg>\n';
      },
      7071: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z" fill="#0C4"/><path d="M10.142 11.667 5 19h3.634l3.283-4.843L15.14 19H19l-5.142-7.314L18.587 5h-3.552l-2.994 4.47L9.151 5H5.391l4.75 6.667Z" fill="#fff"/></svg>';
      },
      2536: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#FF8000"/>\n<path d="M9.31107 11.5882V7.39216H11.884C12.2636 7.39216 12.6292 7.4183 12.9807 7.47059C13.3322 7.52288 13.6415 7.62745 13.9086 7.78431C14.1757 7.9281 14.3866 8.13725 14.5413 8.41176C14.71 8.68627 14.7944 9.04575 14.7944 9.4902C14.7944 9.93464 14.71 10.2941 14.5413 10.5686C14.3866 10.8431 14.1757 11.0588 13.9086 11.2157C13.6415 11.3595 13.3322 11.4575 12.9807 11.5098C12.6292 11.5621 12.2636 11.5882 11.884 11.5882H9.31107ZM6 5V19H9.31107V13.9804H12.7909C13.7329 13.9804 14.5343 13.8562 15.1951 13.6078C15.8559 13.3464 16.3902 13.0065 16.7979 12.5882C17.2197 12.1699 17.522 11.6928 17.7047 11.1569C17.9016 10.6078 18 10.0523 18 9.4902C18 8.91503 17.9016 8.35948 17.7047 7.82353C17.522 7.28758 17.2197 6.81046 16.7979 6.39216C16.3902 5.97386 15.8559 5.64052 15.1951 5.39216C14.5343 5.13072 13.7329 5 12.7909 5H6Z" fill="white"/>\n</svg>\n';
      },
      9619: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#3D99F5"/>\n<path d="M17.3156 19L21 5H18.0448L15.7996 14.6471H15.7612L13.42 5H10.5991L8.21962 14.5294H8.18124L6.01279 5H3L6.62687 19H9.67804L11.9616 9.47059H12L14.322 19H17.3156Z" fill="white"/>\n</svg>\n';
      },
      5971: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#FF8000"/>\n<path d="M9.31107 11.5882V7.39216H11.884C12.2636 7.39216 12.6292 7.4183 12.9807 7.47059C13.3322 7.52288 13.6415 7.62745 13.9086 7.78431C14.1757 7.9281 14.3866 8.13725 14.5413 8.41176C14.71 8.68627 14.7944 9.04575 14.7944 9.4902C14.7944 9.93464 14.71 10.2941 14.5413 10.5686C14.3866 10.8431 14.1757 11.0588 13.9086 11.2157C13.6415 11.3595 13.3322 11.4575 12.9807 11.5098C12.6292 11.5621 12.2636 11.5882 11.884 11.5882H9.31107ZM6 5V19H9.31107V13.9804H12.7909C13.7329 13.9804 14.5343 13.8562 15.1951 13.6078C15.8559 13.3464 16.3902 13.0065 16.7979 12.5882C17.2197 12.1699 17.522 11.6928 17.7047 11.1569C17.9016 10.6078 18 10.0523 18 9.4902C18 8.91503 17.9016 8.35948 17.7047 7.82353C17.522 7.28758 17.2197 6.81046 16.7979 6.39216C16.3902 5.97386 15.8559 5.64052 15.1951 5.39216C14.5343 5.13072 13.7329 5 12.7909 5H6Z" fill="white"/>\n</svg>\n';
      },
      215: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#FF5975"/>\n<path d="M11.8748 5.58096L12 5.534L12.1252 5.58096L12.9182 5.87832L15.3244 6.78066L17.7307 7.68301L18.4936 7.96909C18.3717 12.3117 16.7249 14.9298 15.1218 16.4699C14.2936 17.2655 13.4687 17.7813 12.8535 18.0971C12.5461 18.2549 12.2921 18.3622 12.1177 18.4294C12.0768 18.4451 12.0403 18.4586 12.0086 18.47C11.9761 18.4572 11.9385 18.4419 11.8963 18.4242C11.7209 18.3505 11.4657 18.2339 11.1572 18.0657C10.5395 17.7291 9.71169 17.188 8.88098 16.3743C7.27294 14.7991 5.62989 12.1803 5.50664 7.96901L6.26931 7.68301L8.67556 6.78066L11.0818 5.87832L11.8748 5.58096Z" stroke="white"/>\n</svg>\n';
      },
      589: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#0FC0C5"/>\n<path d="M12 18.5C15.3137 18.5 18 15.8664 18 12.6176C18 11.0144 17.3458 9.56103 16.2849 8.5" stroke="white" stroke-width="0.5" stroke-dasharray="1 1"/>\n<path d="M12 18.5C8.68629 18.5 6 15.8137 6 12.5C6 9.18629 8.68629 6.5 12 6.5" stroke="white"/>\n<path d="M12 4L14.5 6.5L12 9V4Z" fill="white"/>\n</svg>\n';
      },
      6653: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#E667E6"/>\n<path d="M16.4795 10.9074L12 18.9704L7.52205 10.9101L8.09391 7.5H15.9471L16.4795 10.9074Z" stroke="white"/>\n<path d="M12 13V18" stroke="white"/>\n<path d="M8.30775 7.50205L6.80571 4.49795H17.1943L15.6922 7.50205H8.30775Z" stroke="white" stroke-width="0.995907"/>\n<circle cx="12" cy="11" r="2" stroke="white"/>\n</svg>\n';
      },
      3810: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#7961F2"/>\n<path fill-rule="evenodd" clip-rule="evenodd" fill="#ffff" d="M6.85831 18.8325C8.32448 19.3557 9.94657 18.6121 10.4813 17.1717L11.9999 13.0811L13.5185 17.1717C14.0533 18.6121 15.6754 19.3557 17.1416 18.8325C18.6077 18.3093 19.3628 16.7175 18.828 15.277C18.2933 13.8365 16.6712 13.0929 15.205 13.6161C14.5251 13.8587 13.9981 14.3312 13.6817 14.9118L12.501 11.7314L15 5L14.4262 5.2889C14.0028 5.50205 13.6769 5.86442 13.514 6.30332L11.9999 10.3817L10.4859 6.30332C10.3229 5.86442 9.99709 5.50205 9.57372 5.2889L8.99988 5L11.4989 11.7314L10.3182 14.9118C10.0018 14.3312 9.4748 13.8587 8.79487 13.6161C7.3287 13.0929 5.70661 13.8365 5.17184 15.277C4.63707 16.7175 5.39213 18.3093 6.85831 18.8325ZM7.18109 17.963C8.15854 18.3118 9.23993 17.8161 9.59645 16.8558C9.95296 15.8955 9.44959 14.8342 8.47214 14.4854C7.49468 14.1366 6.41329 14.6324 6.05678 15.5927C5.70027 16.553 6.20364 17.6142 7.18109 17.963ZM16.8188 17.963C17.7963 17.6142 18.2996 16.553 17.9431 15.5927C17.5866 14.6324 16.5052 14.1366 15.5278 14.4854C14.5503 14.8342 14.0469 15.8955 14.4035 16.8558C14.76 17.8161 15.8414 18.3118 16.8188 17.963Z"/>\n</svg>\n';
      },
      7803: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#FF5975"/>\n<rect x="5.5" y="10.5" width="10" height="8" stroke="white"/>\n<path d="M18.5 8C18.5 6.34315 16.933 5 15 5C13.067 5 11.5 6.34315 11.5 8" stroke="white"/>\n<path d="M11.5 8V10" stroke="white"/>\n<path d="M18.5 8V9" stroke="white"/>\n</svg>\n';
      },
      8345: (e) => {
        "use strict";
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#3D99F5"/>\n<path d="M17.3156 19L21 5H18.0448L15.7996 14.6471H15.7612L13.42 5H10.5991L8.21962 14.5294H8.18124L6.01279 5H3L6.62687 19H9.67804L11.9616 9.47059H12L14.322 19H17.3156Z" fill="white"/>\n</svg>\n';
      },
      9289: (e) => {
        "use strict";
        e.exports =
          '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="46" height="70" viewBox="0 0 46 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <polygon fill="#FFFFFF" points="10.45315 0.0469 0.57815 9.95315 25.64065 35.01562 0.57815 60.04692 10.45315 69.95312 45.42185 35.01562"></polygon>\n</svg>';
      },
      627: (e) => {
        "use strict";
        e.exports =
          '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H7.25V2.75H2.75V13.25H13.25V8.75H14V14H2V2ZM13.25 2H8.75V2.75H12.5384L7.25 8.03837L7.96163 8.75L13.25 3.46163V7.25H14V2.75V2.71163V2H13.2884H13.25Z"/>\n</svg>\n';
      },
      3869: (e) => {
        "use strict";
        e.exports =
          '<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n    <path d="M2.11063 2.98456C2.83534 2.19853 3.82976 1.76562 4.9109 1.76562C5.71904 1.76562 6.45914 2.02112 7.11069 2.52495C7.43945 2.77927 7.73735 3.09041 8 3.45357C8.26254 3.09052 8.56055 2.77927 8.88942 2.52495C9.54086 2.02112 10.281 1.76562 11.0891 1.76562C12.1702 1.76562 13.1648 2.19853 13.8895 2.98456C14.6055 3.7614 15 4.82268 15 5.97304C15 7.15704 14.5588 8.24086 13.6115 9.38396C12.764 10.4065 11.546 11.4445 10.1356 12.6464C9.65398 13.0569 9.10806 13.5222 8.54121 14.0178C8.39146 14.1489 8.19931 14.2211 8 14.2211C7.8008 14.2211 7.60854 14.1489 7.459 14.018C6.89215 13.5223 6.34592 13.0568 5.86409 12.6461C4.45386 11.4444 3.23589 10.4065 2.38844 9.38385C1.44113 8.24086 1 7.15704 1 5.97293C1 4.82268 1.39445 3.7614 2.11063 2.98456Z"/>\n</svg>\n';
      },
      1332: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n     viewBox="0 0 24 24" fill="currentColor">\n    <path d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M10.232233,14.3890873 L6.69669914,10.8535534 L5.28248558,12.267767 L10.232233,17.2175144 L18.7175144,8.73223305 L17.3033009,7.31801948 L10.232233,14.3890873 Z"/>\n</svg>\n';
      },
      9395: (e) => {
        "use strict";
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><g><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11v-2a9 9 0 009-9 9 9 0 00-9-9V1z"/><path fill-opacity=".3" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11v-2a9 9 0 01-9-9 9 9 0 019-9V1z"/><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.4s" repeatCount="indefinite"/></g></svg>\n';
      }
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.p = "/"),
    (() => {
      "use strict";
      var e = n(7294),
        t = n(3935),
        r = n(9864),
        o = n(6774),
        i = n.n(o);
      const a = function (e) {
        function t(e, r, s, c, f) {
          for (
            var p,
              h,
              m,
              g,
              b,
              L = 0,
              _ = 0,
              x = 0,
              S = 0,
              A = 0,
              R = 0,
              N = (m = p = 0),
              F = 0,
              M = 0,
              $ = 0,
              j = 0,
              z = s.length,
              U = z - 1,
              V = "",
              K = "",
              H = "",
              B = "";
            F < z;

          ) {
            if (
              ((h = s.charCodeAt(F)),
              F === U && 0 !== _ + S + x + L && (0 !== _ && (h = 47 === _ ? 10 : 47), (S = x = L = 0), z++, U++),
              0 === _ + S + x + L)
            ) {
              if (F === U && (0 < M && (V = V.replace(d, "")), 0 < V.trim().length)) {
                switch (h) {
                  case 32:
                  case 9:
                  case 59:
                  case 13:
                  case 10:
                    break;
                  default:
                    V += s.charAt(F);
                }
                h = 59;
              }
              switch (h) {
                case 123:
                  for (p = (V = V.trim()).charCodeAt(0), m = 1, j = ++F; F < z; ) {
                    switch ((h = s.charCodeAt(F))) {
                      case 123:
                        m++;
                        break;
                      case 125:
                        m--;
                        break;
                      case 47:
                        switch ((h = s.charCodeAt(F + 1))) {
                          case 42:
                          case 47:
                            e: {
                              for (N = F + 1; N < U; ++N)
                                switch (s.charCodeAt(N)) {
                                  case 47:
                                    if (42 === h && 42 === s.charCodeAt(N - 1) && F + 2 !== N) {
                                      F = N + 1;
                                      break e;
                                    }
                                    break;
                                  case 10:
                                    if (47 === h) {
                                      F = N + 1;
                                      break e;
                                    }
                                }
                              F = N;
                            }
                        }
                        break;
                      case 91:
                        h++;
                      case 40:
                        h++;
                      case 34:
                      case 39:
                        for (; F++ < U && s.charCodeAt(F) !== h; );
                    }
                    if (0 === m) break;
                    F++;
                  }
                  if (((m = s.substring(j, F)), 0 === p && (p = (V = V.replace(u, "").trim()).charCodeAt(0)), 64 === p)) {
                    switch ((0 < M && (V = V.replace(d, "")), (h = V.charCodeAt(1)))) {
                      case 100:
                      case 109:
                      case 115:
                      case 45:
                        M = r;
                        break;
                      default:
                        M = I;
                    }
                    if (
                      ((j = (m = t(r, M, m, h, f + 1)).length),
                      0 < O &&
                        ((b = l(3, m, (M = n(I, V, $)), r, C, k, j, h, f, c)),
                        (V = M.join("")),
                        void 0 !== b && 0 === (j = (m = b.trim()).length) && ((h = 0), (m = ""))),
                      0 < j)
                    )
                      switch (h) {
                        case 115:
                          V = V.replace(E, a);
                        case 100:
                        case 109:
                        case 45:
                          m = V + "{" + m + "}";
                          break;
                        case 107:
                          (m = (V = V.replace(v, "$1 $2")) + "{" + m + "}"),
                            (m = 1 === T || (2 === T && i("@" + m, 3)) ? "@-webkit-" + m + "@" + m : "@" + m);
                          break;
                        default:
                          (m = V + m), 112 === c && ((K += m), (m = ""));
                      }
                    else m = "";
                  } else m = t(r, n(r, V, $), m, c, f + 1);
                  (H += m), (m = $ = M = N = p = 0), (V = ""), (h = s.charCodeAt(++F));
                  break;
                case 125:
                case 59:
                  if (1 < (j = (V = (0 < M ? V.replace(d, "") : V).trim()).length))
                    switch (
                      (0 === N && ((p = V.charCodeAt(0)), 45 === p || (96 < p && 123 > p)) && (j = (V = V.replace(" ", ":")).length),
                      0 < O && void 0 !== (b = l(1, V, r, e, C, k, K.length, c, f, c)) && 0 === (j = (V = b.trim()).length) && (V = "\0\0"),
                      (p = V.charCodeAt(0)),
                      (h = V.charCodeAt(1)),
                      p)
                    ) {
                      case 0:
                        break;
                      case 64:
                        if (105 === h || 99 === h) {
                          B += V + s.charAt(F);
                          break;
                        }
                      default:
                        58 !== V.charCodeAt(j - 1) && (K += o(V, p, h, V.charCodeAt(2)));
                    }
                  ($ = M = N = p = 0), (V = ""), (h = s.charCodeAt(++F));
              }
            }
            switch (h) {
              case 13:
              case 10:
                47 === _ ? (_ = 0) : 0 === 1 + p && 107 !== c && 0 < V.length && ((M = 1), (V += "\0")),
                  0 < O * D && l(0, V, r, e, C, k, K.length, c, f, c),
                  (k = 1),
                  C++;
                break;
              case 59:
              case 125:
                if (0 === _ + S + x + L) {
                  k++;
                  break;
                }
              default:
                switch ((k++, (g = s.charAt(F)), h)) {
                  case 9:
                  case 32:
                    if (0 === S + L + _)
                      switch (A) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                          g = "";
                          break;
                        default:
                          32 !== h && (g = " ");
                      }
                    break;
                  case 0:
                    g = "\\0";
                    break;
                  case 12:
                    g = "\\f";
                    break;
                  case 11:
                    g = "\\v";
                    break;
                  case 38:
                    0 === S + _ + L && ((M = $ = 1), (g = "\f" + g));
                    break;
                  case 108:
                    if (0 === S + _ + L + P && 0 < N)
                      switch (F - N) {
                        case 2:
                          112 === A && 58 === s.charCodeAt(F - 3) && (P = A);
                        case 8:
                          111 === R && (P = R);
                      }
                    break;
                  case 58:
                    0 === S + _ + L && (N = F);
                    break;
                  case 44:
                    0 === _ + x + S + L && ((M = 1), (g += "\r"));
                    break;
                  case 34:
                  case 39:
                    0 === _ && (S = S === h ? 0 : 0 === S ? h : S);
                    break;
                  case 91:
                    0 === S + _ + x && L++;
                    break;
                  case 93:
                    0 === S + _ + x && L--;
                    break;
                  case 41:
                    0 === S + _ + L && x--;
                    break;
                  case 40:
                    if (0 === S + _ + L) {
                      if (0 === p)
                        if (2 * A + 3 * R == 533);
                        else p = 1;
                      x++;
                    }
                    break;
                  case 64:
                    0 === _ + x + S + L + N + m && (m = 1);
                    break;
                  case 42:
                  case 47:
                    if (!(0 < S + L + x))
                      switch (_) {
                        case 0:
                          switch (2 * h + 3 * s.charCodeAt(F + 1)) {
                            case 235:
                              _ = 47;
                              break;
                            case 220:
                              (j = F), (_ = 42);
                          }
                          break;
                        case 42:
                          47 === h &&
                            42 === A &&
                            j + 2 !== F &&
                            (33 === s.charCodeAt(j + 2) && (K += s.substring(j, F + 1)), (g = ""), (_ = 0));
                      }
                }
                0 === _ && (V += g);
            }
            (R = A), (A = h), F++;
          }
          if (0 < (j = K.length)) {
            if (((M = r), 0 < O && void 0 !== (b = l(2, K, M, e, C, k, j, c, f, c)) && 0 === (K = b).length)) return B + K + H;
            if (((K = M.join(",") + "{" + K + "}"), 0 != T * P)) {
              switch ((2 !== T || i(K, 2) || (P = 0), P)) {
                case 111:
                  K = K.replace(w, ":-moz-$1") + K;
                  break;
                case 112:
                  K = K.replace(y, "::-webkit-input-$1") + K.replace(y, "::-moz-$1") + K.replace(y, ":-ms-input-$1") + K;
              }
              P = 0;
            }
          }
          return B + K + H;
        }
        function n(e, t, n) {
          var o = t.trim().split(m);
          t = o;
          var i = o.length,
            a = e.length;
          switch (a) {
            case 0:
            case 1:
              var l = 0;
              for (e = 0 === a ? "" : e[0] + " "; l < i; ++l) t[l] = r(e, t[l], n).trim();
              break;
            default:
              var s = (l = 0);
              for (t = []; l < i; ++l) for (var c = 0; c < a; ++c) t[s++] = r(e[c] + " ", o[l], n).trim();
          }
          return t;
        }
        function r(e, t, n) {
          var r = t.charCodeAt(0);
          switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
            case 38:
              return t.replace(g, "$1" + e.trim());
            case 58:
              return e.trim() + t.replace(g, "$1" + e.trim());
            default:
              if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim());
          }
          return e + t;
        }
        function o(e, t, n, r) {
          var a = e + ";",
            l = 2 * t + 3 * n + 4 * r;
          if (944 === l) {
            e = a.indexOf(":", 9) + 1;
            var s = a.substring(e, a.length - 1).trim();
            return (s = a.substring(0, e).trim() + s + ";"), 1 === T || (2 === T && i(s, 1)) ? "-webkit-" + s + s : s;
          }
          if (0 === T || (2 === T && !i(a, 1))) return a;
          switch (l) {
            case 1015:
              return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
            case 951:
              return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
            case 963:
              return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
            case 1009:
              if (100 !== a.charCodeAt(4)) break;
            case 969:
            case 942:
              return "-webkit-" + a + a;
            case 978:
              return "-webkit-" + a + "-moz-" + a + a;
            case 1019:
            case 983:
              return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
            case 883:
              if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
              if (0 < a.indexOf("image-set(", 11)) return a.replace(A, "$1-webkit-$2") + a;
              break;
            case 932:
              if (45 === a.charCodeAt(4))
                switch (a.charCodeAt(5)) {
                  case 103:
                    return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                  case 115:
                    return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                  case 98:
                    return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
                }
              return "-webkit-" + a + "-ms-" + a + a;
            case 964:
              return "-webkit-" + a + "-ms-flex-" + a + a;
            case 1023:
              if (99 !== a.charCodeAt(8)) break;
              return (
                "-webkit-box-pack" +
                (s = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) +
                "-webkit-" +
                a +
                "-ms-flex-pack" +
                s +
                a
              );
            case 1005:
              return p.test(a) ? a.replace(f, ":-webkit-") + a.replace(f, ":-moz-") + a : a;
            case 1e3:
              switch (((t = (s = a.substring(13).trim()).indexOf("-") + 1), s.charCodeAt(0) + s.charCodeAt(t))) {
                case 226:
                  s = a.replace(b, "tb");
                  break;
                case 232:
                  s = a.replace(b, "tb-rl");
                  break;
                case 220:
                  s = a.replace(b, "lr");
                  break;
                default:
                  return a;
              }
              return "-webkit-" + a + "-ms-" + s + a;
            case 1017:
              if (-1 === a.indexOf("sticky", 9)) break;
            case 975:
              switch (
                ((t = (a = e).length - 10),
                (l =
                  (s = (33 === a.charCodeAt(t) ? a.substring(0, t) : a).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) +
                  (0 | s.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > s.charCodeAt(8)) break;
                case 115:
                  a = a.replace(s, "-webkit-" + s) + ";" + a;
                  break;
                case 207:
                case 102:
                  a =
                    a.replace(s, "-webkit-" + (102 < l ? "inline-" : "") + "box") +
                    ";" +
                    a.replace(s, "-webkit-" + s) +
                    ";" +
                    a.replace(s, "-ms-" + s + "box") +
                    ";" +
                    a;
              }
              return a + ";";
            case 938:
              if (45 === a.charCodeAt(5))
                switch (a.charCodeAt(6)) {
                  case 105:
                    return (s = a.replace("-items", "")), "-webkit-" + a + "-webkit-box-" + s + "-ms-flex-" + s + a;
                  case 115:
                    return "-webkit-" + a + "-ms-flex-item-" + a.replace(_, "") + a;
                  default:
                    return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(_, "") + a;
                }
              break;
            case 973:
            case 989:
              if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === S.test(e))
                return 115 === (s = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                  ? o(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch")
                  : a.replace(s, "-webkit-" + s) + a.replace(s, "-moz-" + s.replace("fill-", "")) + a;
              break;
            case 962:
              if (
                ((a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a),
                211 === n + r && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
              )
                return a.substring(0, a.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + a;
          }
          return a;
        }
        function i(e, t) {
          var n = e.indexOf(1 === t ? ":" : "{"),
            r = e.substring(0, 3 !== t ? n : 10);
          return (n = e.substring(n + 1, e.length - 1)), N(2 !== t ? r : r.replace(x, "$1"), n, t);
        }
        function a(e, t) {
          var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return n !== t + ";" ? n.replace(L, " or ($1)").substring(4) : "(" + t + ")";
        }
        function l(e, t, n, r, o, i, a, l, s, u) {
          for (var d, f = 0, p = t; f < O; ++f)
            switch ((d = R[f].call(c, e, p, n, r, o, i, a, l, s, u))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                p = d;
            }
          if (p !== t) return p;
        }
        function s(e) {
          return void 0 !== (e = e.prefix) && ((N = null), e ? ("function" != typeof e ? (T = 1) : ((T = 2), (N = e))) : (T = 0)), s;
        }
        function c(e, n) {
          var r = e;
          if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < O)) {
            var o = l(-1, n, r, r, C, k, 0, 0, 0, 0);
            void 0 !== o && "string" == typeof o && (n = o);
          }
          var i = t(I, r, n, 0, 0);
          return 0 < O && void 0 !== (o = l(-2, i, r, r, C, k, i.length, 0, 0, 0)) && (i = o), "", (P = 0), (k = C = 1), i;
        }
        var u = /^\0+/g,
          d = /[\0\r\f]/g,
          f = /: */g,
          p = /zoo|gra/,
          h = /([,: ])(transform)/g,
          m = /,\r+?/g,
          g = /([\t\r\n ])*\f?&/g,
          v = /@(k\w+)\s*(\S*)\s*/,
          y = /::(place)/g,
          w = /:(read-only)/g,
          b = /[svh]\w+-[tblr]{2}/,
          E = /\(\s*(.*)\s*\)/g,
          L = /([\s\S]*?);/g,
          _ = /-self|flex-/g,
          x = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          S = /stretch|:\s*\w+\-(?:conte|avail)/,
          A = /([^-])(image-set\()/,
          k = 1,
          C = 1,
          P = 0,
          T = 1,
          I = [],
          R = [],
          O = 0,
          N = null,
          D = 0;
        return (
          (c.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                O = R.length = 0;
                break;
              default:
                if ("function" == typeof t) R[O++] = t;
                else if ("object" == typeof t) for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                else D = 0 | !!t;
            }
            return e;
          }),
          (c.set = s),
          void 0 !== e && s(e),
          c
        );
      };
      const l = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
      var s =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      const c = (function (e) {
        var t = Object.create(null);
        return function (n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      })(function (e) {
        return s.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91);
      });
      var u = n(8679),
        d = n.n(u);
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var p = function (e, t) {
          for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
          return n;
        },
        h = function (e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, r.typeOf)(e)
          );
        },
        m = Object.freeze([]),
        g = Object.freeze({});
      function v(e) {
        return "function" == typeof e;
      }
      function y(e) {
        return e.displayName || e.name || "Component";
      }
      function w(e) {
        return e && "string" == typeof e.styledComponentId;
      }
      var b =
          ("undefined" != typeof process &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
              REACT_APP_ENVIRONMENT: "production",
              REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
              REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
              REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
              REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
              REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
              REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
              REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
              REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
              REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
              REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
              REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
              REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
              REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                  "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
                REACT_APP_ENVIRONMENT: "production",
                REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
                REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
                REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
                REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
                REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
                REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
                REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
                REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
                REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
                REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
                REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
                REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
                REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
              }.SC_ATTR)) ||
          "data-styled",
        E = "undefined" != typeof window && "HTMLElement" in window,
        L = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                    "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_ENVIRONMENT: "production",
                  REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
                  REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
                  REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
                  REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
                  REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
                  REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
                  REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
                  REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
                  REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
                  REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
                  REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
                  REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                    "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_ENVIRONMENT: "production",
                  REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
                  REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
                  REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
                  REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
                  REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
                  REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
                  REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
                  REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
                  REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
                  REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
                  REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
                  REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                    "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_ENVIRONMENT: "production",
                  REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
                  REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
                  REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
                  REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
                  REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
                  REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
                  REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
                  REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
                  REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
                  REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
                  REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
                  REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                  "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
                REACT_APP_ENVIRONMENT: "production",
                REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
                REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
                REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
                REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
                REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
                REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
                REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
                REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
                REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
                REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
                REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
                REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
                REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
              }.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                    "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_ENVIRONMENT: "production",
                  REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
                  REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
                  REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
                  REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
                  REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
                  REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
                  REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
                  REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
                  REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
                  REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
                  REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
                  REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
                }.SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                    "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_ENVIRONMENT: "production",
                  REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
                  REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
                  REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
                  REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
                  REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
                  REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
                  REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
                  REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
                  REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
                  REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
                  REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
                  REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
                }.SC_DISABLE_SPEEDY &&
              "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                    "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_ENVIRONMENT: "production",
                  REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
                  REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
                  REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
                  REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
                  REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
                  REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
                  REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
                  REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
                  REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
                  REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
                  REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
                  REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
                  REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                REACT_APP_SMALLPDF_CHROME_EXTENSION_URL:
                  "https://chrome.google.com/webstore/detail/smallpdf/ohfgljdgelakfkefopgklcohadegdpjf",
                REACT_APP_ENVIRONMENT: "production",
                REACT_APP_SMALLPDF_BASE_URL: "https://smallpdf.com",
                REACT_APP_SMALLPDF_FILESERVER: "https://files.smallpdf.com",
                REACT_APP_SMALLPDF_FILESTORAGE: "https://filestorage.smallpdf.com",
                REACT_APP_SMALLPDF_TASKSERVER: "https://task.smallpdf.com",
                REACT_APP_SMALLPDF_PRO_ENDPOINTS: "https://pro.smallpdf.com",
                REACT_APP_SMALLPDF_ANALYTICS_ENDPOINT: "https://analytics.smallpdf.com",
                REACT_APP_SMALLPDF_WEBSYNC_URL: "https://smallpdf.com/connect-chrome-extension",
                REACT_APP_SMALLPDF_KEYCLOAK_ENDPOINT: "keycloak.smallpdf.com",
                REACT_APP_SMALLPDF_KEYCLOAK_REALM: "smallpdf-production",
                REACT_APP_SMALLPDF_KEYCLOAK_CLIENT: "chrome-extension",
                REACT_APP_SMALLPDF_EXTENSION_ID: "ohfgljdgelakfkefopgklcohadegdpjf",
                REACT_APP_SMALLPDF_TRACKJS_TOKEN: "e077d0c6c2a0458181122426faed8af3",
                REACT_APP_SMALLPDF_TRACKJS_APPLICATION_NAME: "smallpdf-chrome-extension"
              }.SC_DISABLE_SPEEDY
        );
      function _(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        throw new Error(
          "An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")
        );
      }
      var x = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
          }
          var t = e.prototype;
          return (
            (t.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (t.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, o = r; e >= o; ) (o <<= 1) < 0 && _(16, "" + e);
                (this.groupSizes = new Uint32Array(o)), this.groupSizes.set(n), (this.length = o);
                for (var i = r; i < o; i++) this.groupSizes[i] = 0;
              }
              for (var a = this.indexOfGroup(e + 1), l = 0, s = t.length; l < s; l++)
                this.tag.insertRule(a, t[l]) && (this.groupSizes[e]++, a++);
            }),
            (t.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var o = n; o < r; o++) this.tag.deleteRule(n);
              }
            }),
            (t.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, i = r; i < o; i++)
                t += this.tag.getRule(i) + "/*!sc*/\n";
              return t;
            }),
            e
          );
        })(),
        S = new Map(),
        A = new Map(),
        k = 1,
        C = function (e) {
          if (S.has(e)) return S.get(e);
          for (; A.has(k); ) k++;
          var t = k++;
          return S.set(e, t), A.set(t, e), t;
        },
        P = function (e) {
          return A.get(e);
        },
        T = function (e, t) {
          t >= k && (k = t + 1), S.set(e, t), A.set(t, e);
        },
        I = "style[" + b + '][data-styled-version="5.3.5"]',
        R = new RegExp("^" + b + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
        O = function (e, t, n) {
          for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
        },
        N = function (e, t) {
          for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, i = n.length; o < i; o++) {
            var a = n[o].trim();
            if (a) {
              var l = a.match(R);
              if (l) {
                var s = 0 | parseInt(l[1], 10),
                  c = l[2];
                0 !== s && (T(c, s), O(e, c, l[3]), e.getTag().insertRules(s, r)), (r.length = 0);
              } else r.push(a);
            }
          }
        },
        D = function () {
          return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
        },
        F = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            o = (function (e) {
              for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                var r = t[n];
                if (r && 1 === r.nodeType && r.hasAttribute(b)) return r;
              }
            })(n),
            i = void 0 !== o ? o.nextSibling : null;
          r.setAttribute(b, "active"), r.setAttribute("data-styled-version", "5.3.5");
          var a = D();
          return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
        },
        M = (function () {
          function e(e) {
            var t = (this.element = F(e));
            t.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                  var o = t[n];
                  if (o.ownerNode === e) return o;
                }
                _(17);
              })(t)),
              (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (t.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (t.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        $ = (function () {
          function e(e) {
            var t = (this.element = F(e));
            (this.nodes = t.childNodes), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t),
                  r = this.nodes[e];
                return this.element.insertBefore(n, r || null), this.length++, !0;
              }
              return !1;
            }),
            (t.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        j = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
            }),
            (t.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        z = E,
        U = { isServer: !E, useCSSOMInjection: !L },
        V = (function () {
          function e(e, t, n) {
            void 0 === e && (e = g),
              void 0 === t && (t = {}),
              (this.options = f({}, U, {}, e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                E &&
                z &&
                ((z = !1),
                (function (e) {
                  for (var t = document.querySelectorAll(I), n = 0, r = t.length; n < r; n++) {
                    var o = t[n];
                    o && "active" !== o.getAttribute(b) && (N(e, o), o.parentNode && o.parentNode.removeChild(o));
                  }
                })(this));
          }
          e.registerId = function (e) {
            return C(e);
          };
          var t = e.prototype;
          return (
            (t.reconstructWithOptions = function (t, n) {
              return void 0 === n && (n = !0), new e(f({}, this.options, {}, t), this.gs, (n && this.names) || void 0);
            }),
            (t.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (t.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((n = (t = this.options).isServer),
                  (r = t.useCSSOMInjection),
                  (o = t.target),
                  (e = n ? new j(o) : r ? new M(o) : new $(o)),
                  new x(e)))
              );
              var e, t, n, r, o;
            }),
            (t.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (t.registerName = function (e, t) {
              if ((C(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (t.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(C(e), n);
            }),
            (t.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (t.clearRules = function (e) {
              this.getTag().clearGroup(C(e)), this.clearNames(e);
            }),
            (t.clearTag = function () {
              this.tag = void 0;
            }),
            (t.toString = function () {
              return (function (e) {
                for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
                  var i = P(o);
                  if (void 0 !== i) {
                    var a = e.names.get(i),
                      l = t.getGroup(o);
                    if (a && l && a.size) {
                      var s = b + ".g" + o + '[id="' + i + '"]',
                        c = "";
                      void 0 !== a &&
                        a.forEach(function (e) {
                          e.length > 0 && (c += e + ",");
                        }),
                        (r += "" + l + s + '{content:"' + c + '"}/*!sc*/\n');
                    }
                  }
                }
                return r;
              })(this);
            }),
            e
          );
        })(),
        K = /(a)(d)/gi,
        H = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function B(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = H(t % 52) + n;
        return (H(t % 52) + n).replace(K, "$1-$2");
      }
      var G = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        Y = function (e) {
          return G(5381, e);
        };
      function Z(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (v(n) && !w(n)) return !1;
        }
        return !0;
      }
      var W = Y("5.3.5"),
        q = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && Z(e)),
              (this.componentId = t),
              (this.baseHash = G(W, t)),
              (this.baseStyle = n),
              V.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.componentId,
                o = [];
              if ((this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash))
                if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
                else {
                  var i = he(this.rules, e, t, n).join(""),
                    a = B(G(this.baseHash, i) >>> 0);
                  if (!t.hasNameForId(r, a)) {
                    var l = n(i, "." + a, void 0, r);
                    t.insertRules(r, a, l);
                  }
                  o.push(a), (this.staticRulesId = a);
                }
              else {
                for (var s = this.rules.length, c = G(this.baseHash, n.hash), u = "", d = 0; d < s; d++) {
                  var f = this.rules[d];
                  if ("string" == typeof f) u += f;
                  else if (f) {
                    var p = he(f, e, t, n),
                      h = Array.isArray(p) ? p.join("") : p;
                    (c = G(c, h + d)), (u += h);
                  }
                }
                if (u) {
                  var m = B(c >>> 0);
                  if (!t.hasNameForId(r, m)) {
                    var g = n(u, "." + m, void 0, r);
                    t.insertRules(r, m, g);
                  }
                  o.push(m);
                }
              }
              return o.join(" ");
            }),
            e
          );
        })(),
        X = /^\s*\/\/.*$/gm,
        Q = [":", "[", ".", "#"];
      function J(e) {
        var t,
          n,
          r,
          o,
          i = void 0 === e ? g : e,
          l = i.options,
          s = void 0 === l ? g : l,
          c = i.plugins,
          u = void 0 === c ? m : c,
          d = new a(s),
          f = [],
          p = (function (e) {
            function t(t) {
              if (t)
                try {
                  e(t + "}");
                } catch (e) {}
            }
            return function (n, r, o, i, a, l, s, c, u, d) {
              switch (n) {
                case 1:
                  if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                  break;
                case 2:
                  if (0 === c) return r + "/*|*/";
                  break;
                case 3:
                  switch (c) {
                    case 102:
                    case 112:
                      return e(o[0] + r), "";
                    default:
                      return r + (0 === d ? "/*|*/" : "");
                  }
                case -2:
                  r.split("/*|*/}").forEach(t);
              }
            };
          })(function (e) {
            f.push(e);
          }),
          h = function (e, r, i) {
            return (0 === r && -1 !== Q.indexOf(i[n.length])) || i.match(o) ? e : "." + t;
          };
        function v(e, i, a, l) {
          void 0 === l && (l = "&");
          var s = e.replace(X, ""),
            c = i && a ? a + " " + i + " { " + s + " }" : s;
          return (
            (t = l), (n = i), (r = new RegExp("\\" + n + "\\b", "g")), (o = new RegExp("(\\" + n + "\\b){2,}")), d(a || !i ? "" : i, c)
          );
        }
        return (
          d.use(
            [].concat(u, [
              function (e, t, o) {
                2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, h));
              },
              p,
              function (e) {
                if (-2 === e) {
                  var t = f;
                  return (f = []), t;
                }
              }
            ])
          ),
          (v.hash = u.length
            ? u
                .reduce(function (e, t) {
                  return t.name || _(15), G(e, t.name);
                }, 5381)
                .toString()
            : ""),
          v
        );
      }
      var ee = e.createContext(),
        te = (ee.Consumer, e.createContext()),
        ne = (te.Consumer, new V()),
        re = J();
      function oe() {
        return (0, e.useContext)(ee) || ne;
      }
      function ie() {
        return (0, e.useContext)(te) || re;
      }
      function ae(t) {
        var n = (0, e.useState)(t.stylisPlugins),
          r = n[0],
          o = n[1],
          a = oe(),
          l = (0, e.useMemo)(
            function () {
              var e = a;
              return (
                t.sheet ? (e = t.sheet) : t.target && (e = e.reconstructWithOptions({ target: t.target }, !1)),
                t.disableCSSOMInjection && (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
                e
              );
            },
            [t.disableCSSOMInjection, t.sheet, t.target]
          ),
          s = (0, e.useMemo)(
            function () {
              return J({ options: { prefix: !t.disableVendorPrefixes }, plugins: r });
            },
            [t.disableVendorPrefixes, r]
          );
        return (
          (0, e.useEffect)(
            function () {
              i()(r, t.stylisPlugins) || o(t.stylisPlugins);
            },
            [t.stylisPlugins]
          ),
          e.createElement(ee.Provider, { value: l }, e.createElement(te.Provider, { value: s }, t.children))
        );
      }
      var le = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = re);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
            }),
              (this.toString = function () {
                return _(12, String(n.name));
              }),
              (this.name = e),
              (this.id = "sc-keyframes-" + e),
              (this.rules = t);
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = re), this.name + e.hash;
            }),
            e
          );
        })(),
        se = /([A-Z])/,
        ce = /([A-Z])/g,
        ue = /^ms-/,
        de = function (e) {
          return "-" + e.toLowerCase();
        };
      function fe(e) {
        return se.test(e) ? e.replace(ce, de).replace(ue, "-ms-") : e;
      }
      var pe = function (e) {
        return null == e || !1 === e || "" === e;
      };
      function he(e, t, n, r) {
        if (Array.isArray(e)) {
          for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
            "" !== (o = he(e[a], t, n, r)) && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
          return i;
        }
        return pe(e)
          ? ""
          : w(e)
          ? "." + e.styledComponentId
          : v(e)
          ? "function" != typeof (c = e) || (c.prototype && c.prototype.isReactComponent) || !t
            ? e
            : he(e(t), t, n, r)
          : e instanceof le
          ? n
            ? (e.inject(n, r), e.getName(r))
            : e
          : h(e)
          ? (function e(t, n) {
              var r,
                o,
                i = [];
              for (var a in t)
                t.hasOwnProperty(a) &&
                  !pe(t[a]) &&
                  ((Array.isArray(t[a]) && t[a].isCss) || v(t[a])
                    ? i.push(fe(a) + ":", t[a], ";")
                    : h(t[a])
                    ? i.push.apply(i, e(t[a], a))
                    : i.push(
                        fe(a) +
                          ": " +
                          ((r = a),
                          (null == (o = t[a]) || "boolean" == typeof o || "" === o
                            ? ""
                            : "number" != typeof o || 0 === o || r in l
                            ? String(o).trim()
                            : o + "px") + ";")
                      ));
              return n ? [n + " {"].concat(i, ["}"]) : i;
            })(e)
          : e.toString();
        var c;
      }
      var me = function (e) {
        return Array.isArray(e) && (e.isCss = !0), e;
      };
      function ge(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return v(e) || h(e)
          ? me(he(p(m, [e].concat(n))))
          : 0 === n.length && 1 === e.length && "string" == typeof e[0]
          ? e
          : me(he(p(e, n)));
      }
      new Set();
      var ve = function (e, t, n) {
          return void 0 === n && (n = g), (e.theme !== n.theme && e.theme) || t || n.theme;
        },
        ye = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        we = /(^-|-$)/g;
      function be(e) {
        return e.replace(ye, "-").replace(we, "");
      }
      var Ee = function (e) {
        return B(Y(e) >>> 0);
      };
      function Le(e) {
        return "string" == typeof e && !0;
      }
      var _e = function (e) {
          return "function" == typeof e || ("object" == typeof e && null !== e && !Array.isArray(e));
        },
        xe = function (e) {
          return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
        };
      function Se(e, t, n) {
        var r = e[n];
        _e(t) && _e(r) ? Ae(r, t) : (e[n] = t);
      }
      function Ae(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        for (var o = 0, i = n; o < i.length; o++) {
          var a = i[o];
          if (_e(a)) for (var l in a) xe(l) && Se(e, a[l], l);
        }
        return e;
      }
      var ke = e.createContext();
      ke.Consumer;
      var Ce = {};
      function Pe(t, n, r) {
        var o = w(t),
          i = !Le(t),
          a = n.attrs,
          l = void 0 === a ? m : a,
          s = n.componentId,
          u =
            void 0 === s
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : be(e);
                  Ce[n] = (Ce[n] || 0) + 1;
                  var r = n + "-" + Ee("5.3.5" + n + Ce[n]);
                  return t ? t + "-" + r : r;
                })(n.displayName, n.parentComponentId)
              : s,
          p = n.displayName,
          h =
            void 0 === p
              ? (function (e) {
                  return Le(e) ? "styled." + e : "Styled(" + y(e) + ")";
                })(t)
              : p,
          b = n.displayName && n.componentId ? be(n.displayName) + "-" + n.componentId : n.componentId || u,
          E = o && t.attrs ? Array.prototype.concat(t.attrs, l).filter(Boolean) : l,
          L = n.shouldForwardProp;
        o &&
          t.shouldForwardProp &&
          (L = n.shouldForwardProp
            ? function (e, r, o) {
                return t.shouldForwardProp(e, r, o) && n.shouldForwardProp(e, r, o);
              }
            : t.shouldForwardProp);
        var _,
          x = new q(r, b, o ? t.componentStyle : void 0),
          S = x.isStatic && 0 === l.length,
          A = function (t, n) {
            return (function (t, n, r, o) {
              var i = t.attrs,
                a = t.componentStyle,
                l = t.defaultProps,
                s = t.foldedComponentIds,
                u = t.shouldForwardProp,
                d = t.styledComponentId,
                p = t.target,
                h = (function (e, t, n) {
                  void 0 === e && (e = g);
                  var r = f({}, t, { theme: e }),
                    o = {};
                  return (
                    n.forEach(function (e) {
                      var t,
                        n,
                        i,
                        a = e;
                      for (t in (v(a) && (a = a(r)), a))
                        r[t] = o[t] = "className" === t ? ((n = o[t]), (i = a[t]), n && i ? n + " " + i : n || i) : a[t];
                    }),
                    [r, o]
                  );
                })(ve(n, (0, e.useContext)(ke), l) || g, n, i),
                m = h[0],
                y = h[1],
                w = (function (e, t, n, r) {
                  var o = oe(),
                    i = ie();
                  return t ? e.generateAndInjectStyles(g, o, i) : e.generateAndInjectStyles(n, o, i);
                })(a, o, m),
                b = r,
                E = y.$as || n.$as || y.as || n.as || p,
                L = Le(E),
                _ = y !== n ? f({}, n, {}, y) : n,
                x = {};
              for (var S in _)
                "$" !== S[0] && "as" !== S && ("forwardedAs" === S ? (x.as = _[S]) : (u ? u(S, c, E) : !L || c(S)) && (x[S] = _[S]));
              return (
                n.style && y.style !== n.style && (x.style = f({}, n.style, {}, y.style)),
                (x.className = Array.prototype
                  .concat(s, d, w !== d ? w : null, n.className, y.className)
                  .filter(Boolean)
                  .join(" ")),
                (x.ref = b),
                (0, e.createElement)(E, x)
              );
            })(_, t, n, S);
          };
        return (
          (A.displayName = h),
          ((_ = e.forwardRef(A)).attrs = E),
          (_.componentStyle = x),
          (_.displayName = h),
          (_.shouldForwardProp = L),
          (_.foldedComponentIds = o ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : m),
          (_.styledComponentId = b),
          (_.target = o ? t.target : t),
          (_.withComponent = function (e) {
            var t = n.componentId,
              o = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(n, ["componentId"]),
              i = t && t + "-" + (Le(e) ? e : be(y(e)));
            return Pe(e, f({}, o, { attrs: E, componentId: i }), r);
          }),
          Object.defineProperty(_, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = o ? Ae({}, t.defaultProps, e) : e;
            }
          }),
          (_.toString = function () {
            return "." + _.styledComponentId;
          }),
          i &&
            d()(_, t, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0
            }),
          _
        );
      }
      var Te = function (e) {
        return (function e(t, n, o) {
          if ((void 0 === o && (o = g), !(0, r.isValidElementType)(n))) return _(1, String(n));
          var i = function () {
            return t(n, o, ge.apply(void 0, arguments));
          };
          return (
            (i.withConfig = function (r) {
              return e(t, n, f({}, o, {}, r));
            }),
            (i.attrs = function (r) {
              return e(t, n, f({}, o, { attrs: Array.prototype.concat(o.attrs, r).filter(Boolean) }));
            }),
            i
          );
        })(Pe, e);
      };
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
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
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "textPath",
        "tspan"
      ].forEach(function (e) {
        Te[e] = Te(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e), (this.componentId = t), (this.isStatic = Z(e)), V.registerId(this.componentId + 1);
        }
        var t = e.prototype;
        (t.createStyles = function (e, t, n, r) {
          var o = r(he(this.rules, t, n, r).join(""), ""),
            i = this.componentId + e;
          n.insertRules(i, i, o);
        }),
          (t.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (t.renderStyles = function (e, t, n, r) {
            e > 2 && V.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
          });
      })();
      function Ie(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        var o = ge.apply(void 0, [e].concat(n)).join(""),
          i = Ee(o);
        return new le(i, o);
      }
      !(function () {
        function t() {
          var t = this;
          (this._emitSheetCSS = function () {
            var e = t.instance.toString();
            if (!e) return "";
            var n = D();
            return (
              "<style " +
              [n && 'nonce="' + n + '"', b + '="true"', 'data-styled-version="5.3.5"'].filter(Boolean).join(" ") +
              ">" +
              e +
              "</style>"
            );
          }),
            (this.getStyleTags = function () {
              return t.sealed ? _(2) : t._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (t.sealed) return _(2);
              var r =
                  (((n = {})[b] = ""),
                  (n["data-styled-version"] = "5.3.5"),
                  (n.dangerouslySetInnerHTML = { __html: t.instance.toString() }),
                  n),
                o = D();
              return o && (r.nonce = o), [e.createElement("style", f({}, r, { key: "sc-0-0" }))];
            }),
            (this.seal = function () {
              t.sealed = !0;
            }),
            (this.instance = new V({ isServer: !0 })),
            (this.sealed = !1);
        }
        var n = t.prototype;
        (n.collectStyles = function (t) {
          return this.sealed ? _(2) : e.createElement(ae, { sheet: this.instance }, t);
        }),
          (n.interleaveWithNodeStream = function (e) {
            return _(3);
          });
      })();
      const Re = Te,
        Oe = 36e5;
      function Ne(e) {
        return 6e4 * e;
      }
      var De;
      function Fe({ message: e, name: t, severity: n, cause: r, metadata: o }) {
        const i = new Error(e);
        return (
          void 0 !== t && Object.defineProperty(i, "name", { value: t, enumerable: !1, writable: !0 }),
          void 0 !== r && (i.cause = r),
          void 0 !== n && (i.severity = n),
          void 0 !== o && (i.metadata = Object.assign({}, o)),
          i
        );
      }
      !(function (e) {
        (e.TIMEOUT = "timeout"),
          (e.FAILED = "failed"),
          (e.PASSWORD = "password"),
          (e.SCAN = "scan"),
          (e.CORRUPTED_FILE = "corrupt_pdf"),
          (e.EMPTY_FILE = "no_pages_in_pdf"),
          (e.INTERNAL_ERROR = "internal_server_error"),
          (e.INPUT = "input"),
          (e.INPUT_TOKENS = "input_tokens"),
          (e.EMPTY_INPUT_TOKENS = "empty_input_tokens"),
          (e.INVALID_OPTIONS = "invalid_options"),
          (e.MISSING_PASSWORD = "password-not-set"),
          (e.SOURCE_NOT_READABLE = "pdf_source_not_readable"),
          (e.SOURCE_EMPTY = "pdf_source_empty"),
          (e.EMPTY_RESULT = "no_result");
      })(De || (De = {}));
      var Me = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      var $e;
      !(function (e) {
        (e.GOOGLE = "google"), (e.FACEBOOK = "facebook"), (e.CREDENTIALS = "credentials"), (e.UNKNOWN = "unknown");
      })($e || ($e = {}));
      const je = 3 * Oe;
      function ze() {
        return {
          host: "keycloak.smallpdf.com",
          realm: "smallpdf-production",
          clientID: "chrome-extension",
          getRealmURL(e) {
            return new URL(`https://${this.host}/auth/realms/${this.realm}/${e}`);
          }
        };
      }
      function Ue(e) {
        return Me(this, void 0, void 0, function* () {
          const t = yield e.json();
          if ("object" != typeof t) throw new Error("authentication: Invalid Keycloak payload: Not an object");
          if ("string" == typeof t.error) {
            if ("invalid_grant" === t.error)
              switch (e.status) {
                case 401:
                  throw Fe({ name: "InvalidCredentialsError", message: "Invalid credentials" });
                case 400:
                case 403:
                  throw Fe({ name: "UnauthorizedError", message: "Unauthorized request" });
                case 429:
                  throw Fe({ name: "TooManyRequestsError", message: "Too many requests" });
              }
            throw new Error(`authentication: Unknown error: ${t.error}`);
          }
          if ("string" != typeof t.refresh_token || "string" != typeof t.access_token)
            throw new Error("authentication: Invalid Keycloak payload: Missing refresh or access token");
          return { accessToken: t.access_token, refreshToken: t.refresh_token };
        });
      }
      function Ve(e) {
        const t = e.split(".")[1];
        if (t) {
          const e = t.replace(/-/g, "+").replace(/_/g, "/"),
            n = decodeURIComponent(
              atob(e)
                .split("")
                .map((e) => `%${`00${e.charCodeAt(0).toString(16)}`.slice(-2)}`)
                .join("")
            ),
            r = JSON.parse(n);
          if ("object" != typeof r) throw new Error("authentication: Invalid JWT token");
          return r;
        }
        return {};
      }
      function Ke(e) {
        const t = Ve(e);
        if ("string" != typeof t.sub || "number" != typeof t.exp) throw new Error("authentication: Invalid JWT token");
        return {
          value: e,
          subject: t.sub,
          expireAt: 1e3 * t.exp,
          privateShare: "boolean" == typeof t.private_sharing ? t.private_sharing : null
        };
      }
      function He(e) {
        const t = Ve(e);
        if ("string" != typeof t.sub || "number" != typeof t.exp) throw new Error("authentication: Invalid JWT token");
        return { value: e, subject: t.sub, expireAt: 1e3 * t.exp };
      }
      function Be() {
        return Me(this, void 0, void 0, function* () {
          const e = yield Zn([Bn.ACCESS_TOKEN, Bn.REFRESH_TOKEN]);
          return e
            ? { accessToken: e[Bn.ACCESS_TOKEN] || null, refreshToken: e[Bn.REFRESH_TOKEN] || null }
            : { accessToken: null, refreshToken: null };
        });
      }
      function Ge(e, t) {
        return Me(this, void 0, void 0, function* () {
          return Wn({ [Bn.ACCESS_TOKEN]: e, [Bn.REFRESH_TOKEN]: t });
        });
      }
      function Ye() {
        return Me(this, void 0, void 0, function* () {
          const e = yield Be();
          return { accessToken: e.accessToken ? Ke(e.accessToken) : null, refreshToken: e.refreshToken ? He(e.refreshToken) : null };
        });
      }
      function Ze() {
        var e;
        return Me(this, void 0, void 0, function* () {
          const t = yield Ye();
          return !(null === (e = t.accessToken) || void 0 === e ? void 0 : e.expireAt) || t.accessToken.expireAt <= Date.now();
        });
      }
      function We() {
        var e;
        return Me(this, void 0, void 0, function* () {
          const t = yield Ye();
          return !t || !(null === (e = t.refreshToken) || void 0 === e ? void 0 : e.expireAt) || t.refreshToken.expireAt <= Date.now();
        });
      }
      function qe() {
        return Me(this, void 0, void 0, function* () {
          const e = Date.now() - je,
            t = (yield Zn(Bn.FAILED_LOGIN_ATTEMPTS, [])).filter((t) => t.ts > e);
          if (t.length >= 10) throw Fe({ name: "ERROR_LOGIN_ATTEMPTS_RATE_EXCEEDED", message: "Too many login attempts" });
          return Wn({ [Bn.FAILED_LOGIN_ATTEMPTS]: t });
        });
      }
      var Xe = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      function Qe() {
        var e, t;
        return Xe(this, void 0, void 0, function* () {
          try {
            if (yield We()) throw new Error("User not authenticated");
            const n = yield yt(`${gt}/pro/account`, { headers: { Accept: "application/json" } }),
              r = yield n.json(),
              o = !!(null === (t = null === (e = null == r ? void 0 : r.data) || void 0 === e ? void 0 : e.app_metadata) || void 0 === t
                ? void 0
                : t.signedUp);
            return yield Wn({ [Bn.USER_ACTIVE_PRO]: o }), yield Wn({ [Bn.PROFILE]: null == r ? void 0 : r.data }), r.data;
          } catch (e) {
            return Vn(e), yield Je(), null;
          }
        });
      }
      function Je() {
        return Xe(this, void 0, void 0, function* () {
          yield Wn({ [Bn.USER_ACTIVE_PRO]: !1 }), yield Wn({ [Bn.PROFILE]: null });
        });
      }
      for (
        var et = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          tt = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
          nt = 0;
        nt < et.length;
        nt++
      )
        tt[et.charCodeAt(nt)] = nt;
      var rt = function (e) {
          var t,
            n = new Uint8Array(e),
            r = n.length,
            o = "";
          for (t = 0; t < r; t += 3)
            (o += et[n[t] >> 2]),
              (o += et[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
              (o += et[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
              (o += et[63 & n[t + 2]]);
          return r % 3 == 2 ? (o = o.substring(0, o.length - 1) + "=") : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o;
        },
        ot = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      var it;
      function at() {
        const e = crypto.getRandomValues(new Uint8Array(72));
        return btoa(String.fromCharCode(...e))
          .split("")
          .filter((e) => !"+/=".includes(e))
          .join("");
      }
      function lt() {}
      !(function (e) {
        (e.IDLE = "Idle"), (e.PENDING = "Pending"), (e.COMPLETED = "Completed"), (e.CANCELED = "Canceled"), (e.FAILED = "Failed");
      })(it || (it = {}));
      var st = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      function ct(e, t) {
        return st(this, void 0, void 0, function* () {
          return navigator.locks.request(_t, { ifAvailable: !0 }, (n) =>
            st(this, void 0, void 0, function* () {
              if ((null == n ? void 0 : n.name) !== _t) return;
              const r = ze(),
                o = r.getRealmURL("protocol/openid-connect/token"),
                i = new URLSearchParams();
              i.set("grant_type", "password"), i.set("client_id", r.clientID || ""), i.set("username", e), i.set("password", t), yield qe();
              const a = yield fetch(o.toString(), {
                method: "POST",
                redirect: "follow",
                credentials: "omit",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: i
              });
              a.ok ||
                (yield (function () {
                  return Me(this, void 0, void 0, function* () {
                    const e = yield Zn(Bn.FAILED_LOGIN_ATTEMPTS, []);
                    e.push({ ts: Date.now() }), yield Wn({ [Bn.FAILED_LOGIN_ATTEMPTS]: e });
                  });
                })());
              const l = yield Ue(a);
              yield Ge(l.accessToken, l.refreshToken);
            })
          );
        });
      }
      function ut(e) {
        return st(this, void 0, void 0, function* () {
          const t = ze(),
            n = chrome.runtime.getURL("/handle-auth.html"),
            r = yield at(),
            [o, i] = yield (function () {
              return ot(this, void 0, void 0, function* () {
                const e = at(),
                  t = new TextEncoder(),
                  n = yield crypto.subtle.digest("SHA-256", t.encode(e));
                return [e, ((r = rt(n)), r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""))];
                var r;
              });
            })(),
            a = t.getRealmURL("protocol/openid-connect/auth");
          a.searchParams.set("response_type", "code"),
            a.searchParams.set("client_id", t.clientID || ""),
            a.searchParams.set("kc_idp_hint", e),
            a.searchParams.set("response_mode", "fragment"),
            a.searchParams.set("code_challenge", i),
            a.searchParams.set("state", r),
            a.searchParams.set("code_challenge_method", "S256"),
            a.searchParams.set("prompt", "select_account"),
            a.searchParams.set("redirect_uri", n),
            yield Wn({ [Bn.AUTH_CODE_VERIFIER]: o, [Bn.AUTH_STATE_CODE]: r, [Bn.AUTH_PROVIDER]: e });
          if (!(yield chrome.tabs.create({ active: !0, url: a.toString() })))
            throw new Error("Unable to create popup for OpenIDConnect flow");
        });
      }
      function dt() {
        return st(this, void 0, void 0, function* () {
          const e = yield Be(),
            t = ze(),
            n = t.getRealmURL("protocol/openid-connect/revoke"),
            r = new URLSearchParams();
          r.set("token", e.refreshToken), r.set("token_type_hint", "refresh_token"), r.set("client_id", t.clientID || "");
          try {
            yield fetch(n.toString(), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: r });
          } catch (e) {
            Vn(e);
          }
          yield Je(),
            yield (function () {
              return Me(this, void 0, void 0, function* () {
                yield qn([Bn.ACCESS_TOKEN, Bn.REFRESH_TOKEN]);
              });
            })();
        });
      }
      function ft() {
        return st(this, void 0, void 0, function* () {
          const e = yield Be();
          if (!e.refreshToken) throw Fe({ name: "ERROR_REFRESH_TOKEN_INVALID" });
          return navigator.locks.request(Lt, { ifAvailable: !0 }, (t) =>
            st(this, void 0, void 0, function* () {
              if ((null == t ? void 0 : t.name) !== Lt) return;
              const n = ze(),
                r = n.getRealmURL("protocol/openid-connect/token"),
                o = new URLSearchParams();
              o.set("grant_type", "refresh_token"), o.set("client_id", n.clientID || ""), o.set("refresh_token", e.refreshToken);
              const i = yield fetch(r.toString(), {
                  method: "POST",
                  redirect: "follow",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: o
                }),
                a = yield Ue(i);
              yield Ge(a.accessToken, a.refreshToken);
            })
          );
        });
      }
      var pt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const ht = "https://smallpdf.com/connect-chrome-extension",
        mt = "https://smallpdf.com",
        gt = "https://pro.smallpdf.com";
      var vt;
      function yt(e, t) {
        return pt(this, void 0, void 0, function* () {
          if (yield We()) throw Fe({ name: "ERROR_REFRESH_TOKEN_EXPIRED" });
          (yield Ze()) && (yield ft());
          const n = yield Be();
          return fetch(
            e,
            Object.assign(Object.assign({}, t), {
              credentials: "omit",
              headers: Object.assign(
                Object.assign({}, null == t ? void 0 : t.headers),
                ((r = n.accessToken), null === r ? {} : { Authorization: `${r}` })
              )
            })
          );
          var r;
        });
      }
      !(function (e) {
        (e.ACCOUNT = "account"), (e.HELP = "help"), (e.APPS = "downloads");
      })(vt || (vt = {}));
      var wt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const bt = "utm_source=ce_popup",
        Et = "LOCK_TRIGGER_AB",
        Lt = "LOCK_REFRESH_TOKEN",
        _t = "LOCK_LOG_WITH_PASSWORD",
        xt = ["oocdfmjddengaeklcbnalloigpicjiji", "heknaefbgilbgfalgdncagdgnmdooima"];
      var St;
      function At() {
        return wt(this, void 0, void 0, function* () {
          const e = yield Zn([Bn.SYSTEM_OS, Bn.SYSTEM_LOCALE]);
          return { os: e[Bn.SYSTEM_OS], locale: e[Bn.SYSTEM_LOCALE] };
        });
      }
      function kt() {
        const e = { version: "0.0.0", major: 0, minor: 0 },
          t = chrome.runtime.getManifest().version;
        if (t) {
          const [n = 0, r = 0] = t.split(".");
          (e.version = t), (e.major = +n), (e.minor = +r);
        }
        return e;
      }
      function Ct(e) {
        const t = (e && (e.match(/(\.[^\.]+$)/) || [])[1]) || "",
          n = (function () {
            if (!crypto || !crypto.getRandomValues)
              return (function () {
                let e = "";
                for (let t = 0; t < 8; t += 1) e += ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
                return e.toLowerCase();
              })();
            const e = new Uint8Array(16);
            return (
              crypto.getRandomValues(e),
              [].slice
                .call(e)
                .map((e) => {
                  const t = e.toString(16);
                  return t.length > 1 ? t : `0${t}`;
                })
                .join("")
            );
          })();
        return n + t;
      }
      !(function (e) {
        (e.Windows = "windows"),
          (e.Linux = "linux"),
          (e.MacOS = "mac_os"),
          (e.Android = "android"),
          (e.OpenBSD = "openbsd"),
          (e.ChromeODS = "chrome_os");
      })(St || (St = {}));
      function Pt() {
        var e, t;
        if (chrome) {
          const n =
            null ===
              (t =
                null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.userAgentData) || void 0 === e
                  ? void 0
                  : e.brands[2]) || void 0 === t
              ? void 0
              : t.brand;
          return null != n ? n : void 0;
        }
      }
      function Tt() {
        var e, t;
        if (chrome) {
          const n =
            null ===
              (t =
                null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.userAgentData) || void 0 === e
                  ? void 0
                  : e.brands[2]) || void 0 === t
              ? void 0
              : t.version;
          return null != n ? n : void 0;
        }
      }
      function It(e, t, n) {
        const r = kt();
        return {
          ts: e.ts,
          id: e.id,
          event: e.event,
          local_token: t.localToken,
          country_geo_ip: t.countryGeoIP,
          user_id: t.profile && t.profile.user_id,
          active_pro: !!t.activePro,
          os: n.os,
          os_major: void 0,
          os_minor: void 0,
          agent: "chrome-extension",
          agent_major: r.major,
          agent_minor: r.minor,
          agent_version: r.version,
          default_app: void 0,
          page: chrome.runtime.id,
          mode: null,
          custom_boolean1: e.bool1,
          custom_boolean2: e.bool2,
          custom_boolean3: e.bool3,
          custom_int1: e.int1,
          custom_int2: e.int2,
          custom_int3: e.int3,
          custom_string1: e.string1,
          custom_string2: e.string2,
          custom_string3: e.string3,
          browser: Pt(),
          browser_major: Tt(),
          browser_minor: void 0,
          rt: t.rt,
          locale: n.locale,
          agent_identifier: chrome.runtime.id
        };
      }
      var Rt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const Ot = () =>
        Rt(void 0, void 0, void 0, function* () {
          const e = yield Zn([Bn.LOCAL_TOKEN, Bn.USER_COUNTRY_GEO_IP, Bn.USER_PROFILE, Bn.USER_ACTIVE_PRO, Bn.USER_RT]);
          return {
            countryGeoIP: e[Bn.USER_COUNTRY_GEO_IP],
            localToken: e[Bn.LOCAL_TOKEN],
            profile: e[Bn.USER_PROFILE],
            activePro: e[Bn.USER_ACTIVE_PRO],
            rt: e[Bn.USER_RT]
          };
        });
      function Nt() {
        return Rt(this, void 0, void 0, function* () {
          return Zn(Bn.USER_ACTIVE_PRO, !1);
        });
      }
      var Dt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      function Ft(e) {
        return Dt(this, void 0, void 0, function* () {
          const t = (function (e) {
            return {
              id: Ct(),
              v: 1,
              ts: Date.now(),
              event: e.event,
              bool1: e.customBoolean1,
              bool2: e.customBoolean2,
              bool3: e.customBoolean3,
              int1: e.customInt1,
              int2: e.customInt2,
              int3: e.customInt3,
              string1: e.customString1,
              string2: e.customString2,
              string3: e.customString3
            };
          })(e);
          Hn(`%cTrack event: ${e.event}`, "background: #0033E7; color: #E2E2E2", t);
          const n = yield Zn([Bn.USER_DATA_SYNCED]);
          navigator.onLine && n[Bn.USER_DATA_SYNCED]
            ? yield (function (e) {
                return Dt(this, void 0, void 0, function* () {
                  const t = yield Ot(),
                    n = yield At(),
                    r = It(e, t, n);
                  Hn(`Send event ${r.event}`, r);
                  const o = yield fetch("https://analytics.smallpdf.com/v2/events", { method: "POST", body: JSON.stringify([r]) });
                  if (!o.ok) throw new Error(`Pluto response status: ${o.status}`);
                  {
                    const e = yield o.json();
                    if (!(null == e ? void 0 : e.success)) throw new Error(`Pluto response error: ${e.error}`);
                  }
                });
              })(t)
            : yield (function (e) {
                return Dt(this, void 0, void 0, function* () {
                  return navigator.locks.request("LOCK_QUEUE_EVENT", () =>
                    Dt(this, void 0, void 0, function* () {
                      const t = yield Zn(Bn.TRACKING_EVENTS, []);
                      t.push(e);
                      try {
                        yield Wn({ [Bn.TRACKING_EVENTS]: t });
                      } catch (e) {
                        e instanceof Error &&
                          (e.name.includes("QUOTA_BYTES") || e.message.includes("QUOTA_BYTES")) &&
                          (yield Wn({ [Bn.TRACKING_EVENTS]: [] }));
                      }
                    })
                  );
                });
              })(t);
        });
      }
      function Mt() {
        return Dt(this, void 0, void 0, function* () {
          const e = yield Zn([Bn.TRACKING_EVENTS, Bn.USER_DATA_SYNCED]);
          if (!e || !e[Bn.USER_DATA_SYNCED]) return;
          const t = e[Bn.TRACKING_EVENTS] || [];
          if (0 !== t.length && navigator.onLine) {
            try {
              const e = t.splice(0, 100);
              yield (function (e) {
                return Dt(this, void 0, void 0, function* () {
                  const t = yield Ot(),
                    n = yield At(),
                    r = e.map((e) => It(e, t, n));
                  Hn("Send events", r);
                  const o = yield fetch("https://analytics.smallpdf.com/v2/events", { method: "POST", body: JSON.stringify(r) });
                  if (!o.ok) throw new Error(`Pluto response status: ${o.status}`);
                  {
                    const e = yield o.json();
                    if (!e.success) throw new Error(`Pluto response error: ${e.error}`);
                  }
                });
              })(e);
            } catch (e) {
              return void Hn("Failed to submit events", e);
            }
            try {
              yield Wn({ [Bn.TRACKING_EVENTS]: t });
            } catch (e) {
              yield qn(Bn.TRACKING_EVENTS), Hn("Failed to update event queue", e);
            }
          }
        });
      }
      var $t = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const jt = "#F23030",
        zt = "#FF9F19",
        Ut = "#EBC50C",
        Vt = "#74D941",
        Kt = "#49C8F2",
        Ht = "#7961F2",
        Bt = "#B366FF",
        Gt = "#FF59AC",
        Yt = "#00CC44";
      var Zt;
      !(function (e) {
        (e.APPLICATION_JSON = "application/json"),
          (e.APPLICATION_PDF = "application/pdf"),
          (e.APPLICATION_ZIP = "application/zip"),
          (e.APPLICATION_DOC = "application/msword"),
          (e.APPLICATION_DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
          (e.APPLICATION_XLS = "application/vnd.ms-excel"),
          (e.APPLICATION_XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),
          (e.APPLICATION_PPT = "application/vnd.ms-powerpoint"),
          (e.APPLICATION_PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation"),
          (e.IMAGE_JPEG = "image/jpeg"),
          (e.IMAGE_GIF = "image/gif"),
          (e.IMAGE_BMP = "image/bmp"),
          (e.IMAGE_PNG = "image/png"),
          (e.IMAGE_TIFF = "image/tiff"),
          (e.IMAGE_SVG = "image/svg+xml"),
          (e.UNKNOWN = "application/octet-stream");
      })(Zt || (Zt = {}));
      Zt.APPLICATION_JSON,
        Zt.APPLICATION_PDF,
        Zt.APPLICATION_ZIP,
        Zt.APPLICATION_DOC,
        Zt.APPLICATION_DOCX,
        Zt.APPLICATION_XLS,
        Zt.APPLICATION_XLSX,
        Zt.APPLICATION_PPT,
        Zt.APPLICATION_PPTX,
        Zt.IMAGE_JPEG,
        Zt.IMAGE_GIF,
        Zt.IMAGE_BMP,
        Zt.IMAGE_PNG,
        Zt.IMAGE_TIFF,
        Zt.IMAGE_SVG;
      var Wt = n(1899),
        qt = n(7861),
        Xt = n(5802),
        Qt = n(1215),
        Jt = n(1432),
        en = n(471),
        tn = n(9269),
        nn = n(5519),
        rn = n(5487),
        on = n(1593),
        an = n(8405),
        ln = n(3850),
        sn = n(387),
        cn = n(6232),
        un = n(4661),
        dn = n(6070),
        fn = n(7245),
        pn = n(8786),
        hn = n(6071),
        mn = n(1937),
        gn = n(3302),
        vn = n(5971),
        yn = n(2536),
        wn = n(7430),
        bn = n(7071),
        En = n(8345),
        Ln = n(9619),
        _n = n(2732),
        xn = n(7634),
        Sn = n(6628),
        An = n(3810),
        kn = n(589),
        Cn = n(6653),
        Pn = n(7803),
        Tn = n(215);
      const In = {
          compress: {
            pt: [
              "comprimir pdf",
              "compactar pdf",
              "reduzir pdf",
              "diminuir pdf",
              "reduzir tamanho pdf",
              "diminuir tamanho pdf",
              "pdf compressor",
              "compressor de pdf",
              "compressor pdf",
              "comprimir arquivo pdf"
            ],
            es: [
              "comprimir pdf",
              "reducir tamaño pdf",
              "reducir tamaño de pdf",
              "reducir pdf",
              "comprimir archivos",
              "comprimir archivos pdf",
              "comprimir pdf online",
              "compresor de pdf",
              "como comprimir un archivo pdf",
              "comprimir pdf gratis"
            ],
            fr: [
              "compresser pdf",
              "réduire taille pdf",
              "compression pdf",
              "reduire pdf",
              "reduire taille pdf",
              "compresseur pdf",
              "compresser un pdf",
              "compresser un fichier pdf",
              "réduire la taille d'un pdf",
              "compresser un fichier"
            ],
            de: [
              "pdf verkleinern",
              "pdf komprimieren",
              "pdf datei verkleinern",
              "pdf kleiner machen",
              "pdf komprimieren online",
              "pdf verkleinern mac",
              "pdf größe reduzieren",
              "pdf komprimieren mac",
              "pdf verkleinern kostenlos",
              "dateien komprimieren"
            ],
            it: [
              "comprimi pdf",
              "comprimere pdf",
              "riduci pdf",
              "ridurre dimensioni pdf",
              "compressione pdf",
              "ridurre pdf",
              "comprimere pdf online",
              "comprimere file pdf",
              "riduzione pdf",
              "riduci dimensioni pdf"
            ],
            ru: [
              "сжать пдф",
              "сжать pdf",
              "сжать пдф онлайн",
              "уменьшить размер пдф",
              "сжать пдф файл",
              "уменьшить пдф",
              "уменьшить размер pdf",
              "сжатие пдф",
              "сжать файл пдф",
              "сжать файл"
            ],
            en: [
              "compress pdf",
              "pdf compress",
              "pdf compressor",
              "file compressor",
              "reduce pdf size",
              "how to compress a pdf",
              "reduce pdf file size",
              "compress",
              "how to reduce pdf file size",
              "pdf compress",
              "shrink pdf"
            ]
          },
          converter2: {
            pt: [
              "converter pdf",
              "conversor pdf",
              "converter para pdf",
              "converter em pdf",
              "transformar em pdf",
              "conversor de pdf",
              "pdf converter",
              "conversor para pdf",
              "transformar arquivo em pdf",
              "converter arquivo para pdf"
            ],
            es: [
              "convertir a pdf",
              "convertidor pdf",
              "convertidor a pdf",
              "convertir pdf",
              "pasar a pdf",
              "convertidor de pdf",
              "convertir en pdf",
              "transformar a pdf",
              "convertir archivos a pdf",
              "conversor a pdf"
            ],
            fr: [
              "convertisseur pdf",
              "convertir en pdf",
              "convertir pdf",
              "conversion pdf",
              "transformer en pdf",
              "pdf convertisseur",
              "convertir fichier en pdf",
              "convertisseur pdf gratuit",
              "pdf en ligne",
              "convertir un fichier en pdf"
            ],
            de: [
              "pdf umwandeln",
              "pdf konverter",
              "in pdf umwandeln",
              "datei in pdf umwandeln",
              "pdf konvertieren",
              "pdf umwandler",
              "pdf converter kostenlos",
              "umwandeln in pdf",
              "dateien in pdf umwandeln",
              "dokument in pdf umwandeln"
            ],
            it: [
              "convertitore",
              "convertitore pdf",
              "converti in pdf",
              "trasforma in pdf",
              "converti pdf",
              "convertire in pdf",
              "convertitore in pdf",
              "convertire file in pdf",
              "convertire pdf",
              "trasformare file in pdf"
            ],
            ru: [
              "конвертер пдф",
              "пдф конвертер",
              "конвертировать в пдф",
              "конвертер в пдф",
              "онлайн конвертер",
              "преобразовать в пдф",
              "конвертация в пдф",
              "перевод в пдф",
              "конвертер pdf",
              "конвектор пдф"
            ],
            en: [
              "pdf converter",
              "convert to pdf",
              "file converter",
              "free pdf converter",
              "pdf converter free",
              "convert file to pdf",
              "convert to pdf free",
              "online pdf converter",
              "convert pdf",
              "pdf file converter"
            ]
          },
          ppt: {
            pt: [
              "converter powerpoint em pdf",
              "converter ppt em pdf",
              "powerpoint para pdf",
              "transformar powerpoint em pdf",
              "ppt para pdf",
              "pptx para pdf",
              "converter pptx em pdf",
              "converter powerpoint para pdf",
              "transformar ppt em pdf",
              "power point para pdf"
            ],
            es: [
              "convertir powerpoint a pdf",
              "convertir ppt a pdf",
              "powerpoint a pdf",
              "ppt a pdf",
              "convertidor de powerpoint a pdf",
              "convertir de powerpoint a pdf",
              "de powerpoint a pdf",
              "de ppt a pdf",
              "power point a pdf",
              "convertir de ppt a pdf"
            ],
            fr: [
              "convertir ppt en pdf",
              "convertir powerpoint en pdf",
              "powerpoint en pdf",
              "convertisseur ppt en pdf",
              "ppt en pdf",
              "convertir pptx en pdf",
              "convertisseur powerpoint pdf",
              "pptx en pdf",
              "conversion ppt en pdf",
              "convertisseur powerpoint en pdf"
            ],
            de: [
              "powerpoint in pdf",
              "powerpoint in pdf umwandeln",
              "powerpoint zu pdf",
              "pptx in pdf",
              "ppt in pdf",
              "ppt zu pdf",
              "power point in pdf",
              "ppp in pdf",
              "ppt in pdf umwandeln",
              "pp in pdf"
            ],
            it: [
              "da ppt a pdf",
              "convertire ppt in pdf",
              "da powerpoint a pdf",
              "convertire powerpoint in pdf",
              "convertitore powerpoint pdf",
              "convertitore ppt in pdf",
              "trasforma ppt in pdf",
              "trasformare powerpoint in pdf",
              "converti ppt in pdf",
              "trasforma powerpoint in pdf"
            ],
            ru: [
              "pptx в pdf",
              "конвертировать презентацию в пдф",
              "из pptx в pdf",
              "ппт в пдф",
              "из ппт в пдф",
              "powerpoint в pdf",
              "ppt в pdf",
              "презентацию в пдф",
              "открыть ppt онлайн",
              "из презентации в пдф"
            ],
            en: [
              "ppt to pdf",
              "powerpoint to pdf",
              "convert ppt to pdf",
              "pptx to pdf",
              "convert powerpoint to pdf",
              "ppt to pdf converter",
              "powerpoint to pdf converter",
              "how to convert powerpoint to pdf",
              "how to convert ppt to pdf",
              "power point to pdf"
            ]
          },
          "pdf-to-ppt": {
            pt: [
              "converter pdf em powerpoint",
              "converter pdf em ppt",
              "pdf para powerpoint",
              "transformar pdf em powerpoint",
              "pdf para ppt",
              "transformar pdf em ppt",
              "converter pdf para powerpoint",
              "converter pdf para ppt",
              "pdf em powerpoint",
              "pdf em ppt"
            ],
            es: [
              "convertir pdf a powerpoint",
              "convertir pdf a ppt",
              "pdf a powerpoint",
              "pdf a ppt",
              "convertidor de pdf a powerpoint",
              "convertir de pdf a powerpoint",
              "convertidor de pdf a ppt",
              "convertir de pdf a ppt",
              "de pdf a powerpoint",
              "de pdf a ppt"
            ],
            fr: [
              "convertir pdf en ppt",
              "convertir pdf en powerpoint",
              "pdf en ppt",
              "pdf en powerpoint",
              "transformer pdf en ppt",
              "convertir pdf en powerpoint gratuit",
              "convertisseur pdf en ppt",
              "convertir pdf en ppt gratuit",
              "conversion pdf en ppt",
              "convertisseur pdf ppt"
            ],
            de: [
              "pdf in powerpoint umwandeln",
              "pdf in ppt umwandeln",
              "pdf in ppt",
              "pdf in powerpoint",
              "pdf zu powerpoint",
              "pdf zu ppt",
              "pdf in pptx",
              "pdf in pptx umwandeln",
              "pdf umwandeln in powerpoint",
              "pdf in power point"
            ],
            it: [
              "da pdf a ppt",
              "converti pdf in ppt",
              "convertire pdf in ppt",
              "da pdf a powerpoint",
              "convertire pdf in powerpoint",
              "convertitore pdf ppt",
              "trasforma pdf in ppt",
              "convertitore pdf powerpoint",
              "trasformare pdf in ppt",
              "converti pdf in powerpoint"
            ],
            ru: [
              "из пдф в ппт",
              "из пдф в повер поинт",
              "пдф в ппт",
              "конвертировать пдф в ппт",
              "pdf в ppt",
              "из pdf в ppt",
              "пдф в повер поинт",
              "pdf в pptx",
              "из пдф в пптх",
              "конвертировать pdf в ppt"
            ],
            en: [
              "pdf to ppt",
              "pdf to powerpoint",
              "convert pdf to powerpoint",
              "convert pdf to ppt",
              "pdf to powerpoint converter",
              "pdf to ppt converter",
              "how to convert pdf to powerpoint",
              "pdf to pptx",
              "how to convert pdf to ppt",
              "convert pdf to powerpoint free"
            ]
          },
          jpg: {
            pt: [
              "converter jpg em pdf",
              "jpg para pdf",
              "transformar jpg em pdf",
              "converter imagem em pdf",
              "transformar foto em pdf",
              "jpg em pdf",
              "transformar imagem em pdf",
              "converter foto em pdf",
              "converter jpg para pdf",
              "imagem para pdf"
            ],
            es: [
              "jpg a pdf",
              "convertir jpg a pdf",
              "convertir imagen a pdf",
              "de jpg a pdf",
              "imagen a pdf",
              "convertir de jpg a pdf",
              "convertidor de jpg a pdf",
              "convertir pdf a jpg",
              "pasar de jpg a pdf",
              "convertidor jpg a pdf"
            ],
            fr: [
              "jpeg en pdf",
              "convertir jpg en pdf",
              "convertir jpeg en pdf",
              "convertir image en pdf",
              "jpg en pdf",
              "convertir photo en pdf",
              "convertisseur jpg en pdf",
              "image en pdf",
              "transformer jpeg en pdf",
              "photo en pdf"
            ],
            de: [
              "jpg in pdf",
              "jpg in pdf umwandeln",
              "jpeg in pdf",
              "bild in pdf umwandeln",
              "jpg zu pdf",
              "bilder in pdf umwandeln",
              "foto in pdf umwandeln",
              "jpeg in pdf umwandeln",
              "jpeg to pdf",
              "bild zu pdf",
              "bild in pdf",
              "bild als pdf",
              "jpg umwandeln in pdf",
              "jpeg umwandeln in pdf",
              "jpg als pdf",
              "jpeg als pdf"
            ],
            it: [
              "da jpg a pdf",
              "convertire jpg in pdf",
              "trasforma jpg in pdf",
              "converti jpg in pdf",
              "crea pdf",
              "convertitore jpg pdf",
              "trasformare foto in pdf",
              "trasforma in pdf",
              "trasformare jpg in pdf",
              "convertire foto in pdf"
            ],
            ru: [
              "фото в пдф",
              "из jpg в pdf",
              "конвертировать в пдф",
              "джипег в пдф",
              "из джипег в пдф",
              "перевести в пдф",
              "перевод в пдф",
              "конвертировать jpg в pdf",
              "jpg в pdf",
              "из фото в пдф"
            ],
            en: [
              "jpg to pdf",
              "convert jpg to pdf",
              "jpeg to pdf",
              "image to pdf",
              "how to convert jpg to pdf",
              "jpg to pdf converter",
              "convert image to pdf",
              "picture to pdf",
              "convert to jpg",
              "photo to pdf"
            ]
          },
          "pdf-to-jpg": {
            pt: [
              "converter pdf em jpg",
              "pdf para jpg",
              "transformar pdf em jpg",
              "converter pdf para jpg",
              "pdf em jpg",
              "converter pdf em imagem",
              "conversor pdf para jpg",
              "conversor de pdf para jpg",
              "converter pdf em jpeg",
              "pdf para jpeg"
            ],
            es: [
              "convertir pdf a jpg",
              "pdf a jpg",
              "de pdf a jpg",
              "convertir de pdf a jpg",
              "convertidor de pdf a jpg",
              "pasar de pdf a jpg",
              "convertir pdf a imagen",
              "pdf a imagen",
              "pasar pdf a jpg",
              "convertidor pdf a jpg"
            ],
            fr: [
              "convertir pdf en jpg",
              "pdf en jpeg",
              "convertir pdf en jpeg",
              "pdf en jpg",
              "transformer pdf en jpeg",
              "convertir pdf en image",
              "convertisseur pdf jpeg",
              "convertisseur pdf en jpg",
              "pdf jpeg",
              "transformer un pdf en jpeg"
            ],
            de: [
              "pdf in jpg umwandeln",
              "pdf in jpg",
              "pdf zu jpg",
              "pdf in bild umwandeln",
              "pdf in jpeg",
              "pdf umwandeln in jpg",
              "pdf als jpg",
              "pdf jpg",
              "pdf als bild speichern",
              "pdf zu jpeg"
            ],
            it: [
              "da pdf a jpg",
              "convertire pdf in jpg",
              "converti pdf in jpg",
              "trasforma pdf in jpg",
              "convertitore pdf jpg",
              "trasformare pdf in jpg",
              "da pdf a jpeg",
              "convertitore pdf in jpg",
              "da pdf a jpg online",
              "converti da pdf a jpg"
            ],
            ru: [
              "пдф в джипег",
              "из пдф в джипег",
              "конвертировать пдф в джипег",
              "pdf в jpg",
              "из pdf в jpg",
              "перевести пдф в джипег",
              "пдф в jpg",
              "конвертировать пдф в jpg",
              "из пдф в jpg",
              "конвертер пдф в джипег"
            ],
            en: [
              "pdf to jpg",
              "convert pdf to jpg",
              "pdf to jpeg",
              "pdf to jpg converter",
              "how to convert pdf to jpg",
              "pdf to image",
              "convert pdf to jpeg",
              "convert pdf to image",
              "save pdf as jpeg",
              "change pdf to jpg"
            ]
          },
          edit: {
            pt: [
              "editar pdf",
              "editor de pdf",
              "editar pdf online",
              "como editar pdf",
              "editor pdf",
              "editor de pdf online",
              "editar pdf gratis",
              "editor pdf online",
              "editar pdf online gratis",
              "editor de pdf gratuito"
            ],
            es: [
              "editar pdf",
              "editor de pdf",
              "editor pdf",
              "modificar pdf",
              "editar pdf online",
              "como editar un pdf",
              "editar pdf en linea",
              "editar pdf gratis",
              "editor pdf online",
              "modificar pdf online"
            ],
            fr: [
              "modifier pdf",
              "modifier pdf en ligne",
              "modifier un pdf",
              "comment modifier un pdf",
              "modifier pdf gratuit",
              "modifier un pdf gratuit",
              "modification pdf",
              "modifier un pdf en ligne",
              "ecrire sur un pdf",
              "modifier pdf en ligne gratuit"
            ],
            de: [
              "pdf bearbeiten",
              "pdf bearbeiten kostenlos",
              "pdf online bearbeiten",
              "pdf editor",
              "pdf datei bearbeiten",
              "pdf bearbeiten online",
              "pdf ausfüllen",
              "in pdf schreiben",
              "pdf text bearbeiten kostenlos",
              "pdf dateien bearbeiten",
              "pdf datei bearbeiten",
              "pdf schwärzen",
              "pdf kostenlos bearbeiten",
              "pdf dokument bearbeiten"
            ],
            it: [
              "modifica pdf",
              "modificare pdf",
              "modifica pdf online",
              "modificare pdf online",
              "come modificare un pdf",
              "modifica pdf online gratis",
              "scrivere su pdf",
              "modificare pdf gratis",
              "modifica pdf gratis",
              "modificare un pdf"
            ],
            ru: [
              "редактировать пдф",
              "редактор пдф",
              "редактировать пдф онлайн",
              "pdf редактор",
              "редактировать pdf",
              "пдф редактор",
              "редактор pdf",
              "редактор пдф онлайн",
              "редактирование pdf",
              "пдф онлайн"
            ],
            en: [
              "pdf editor",
              "free pdf editor",
              "how to edit a pdf",
              "edit pdf",
              "pdf editor free",
              "edit pdf online",
              "online pdf editor",
              "pdf editor online",
              "how to edit pdf",
              "edit pdf online free"
            ]
          },
          rotate: {
            pt: [
              "girar pdf",
              "rodar pdf",
              "virar pdf",
              "girar pdf online",
              "rotacionar pdf",
              "como girar pdf",
              "inverter pdf",
              "girar arquivo pdf",
              "girar pagina pdf",
              "como girar um pdf"
            ],
            es: [
              "girar pdf",
              "rotar pdf",
              "voltear pdf",
              "como girar un pdf",
              "rotar pdf online",
              "girar pdf online",
              "girar un pdf",
              "girar paginas pdf",
              "rotar paginas pdf",
              "girar hojas de pdf"
            ],
            fr: [
              "rotation pdf",
              "pivoter pdf",
              "retourner pdf",
              "tourner pdf",
              "retourner un pdf",
              "tourner un pdf",
              "faire pivoter un pdf",
              "pdf rotation",
              "pivoter un pdf",
              "rotation pdf en ligne"
            ],
            de: [
              "pdf drehen",
              "pdf drehen und speichern",
              "pdf datei drehen",
              "pdf seiten drehen",
              "pdf drehen online",
              "pdf seite drehen",
              "pdf dokument drehen",
              "pdf online drehen",
              "pdf einzelne seiten drehen",
              "pdf dauerhaft drehen"
            ],
            it: [
              "ruota pdf",
              "ruotare pdf",
              "ruota pdf online",
              "ruotare pdf online",
              "girare pdf",
              "ruotare un pdf",
              "gira pdf",
              "come ruotare un pdf",
              "ruota pagine pdf",
              "ruotare pagine pdf"
            ],
            ru: [
              "повернуть пдф",
              "перевернуть пдф",
              "повернуть пдф онлайн",
              "перевернуть пдф онлайн",
              "повернуть pdf",
              "перевернуть pdf",
              "перевернуть страницы в пдф",
              "повернуть страницы в пдф",
              "развернуть пдф",
              "поворот пдф"
            ],
            en: [
              "rotate pdf",
              "pdf rotate",
              "rotate pdf online",
              "flip pdf",
              "pdf rotator",
              "rotate pdf and save",
              "how to rotate pdf",
              "how to rotate a pdf",
              "rotate pdf free",
              "pdf rotater"
            ]
          },
          excel: {
            pt: [
              "converter excel em pdf",
              "excel para pdf",
              "transformar excel em pdf",
              "excel em pdf",
              "converter excel para pdf",
              "transformar pdf em excel",
              "conversor excel para pdf",
              "conversor de excel para pdf",
              "converter xlsx para pdf",
              "xlsx para pdf"
            ],
            es: [
              "convertir excel a pdf",
              "excel a pdf",
              "convertir de excel a pdf",
              "convertidor de excel a pdf",
              "de excel a pdf",
              "convertidor excel a pdf",
              "pasar de excel a pdf",
              "pasar excel a pdf",
              "convertir excel a word",
              "transformar excel a pdf"
            ],
            fr: [
              "convertir excel en pdf",
              "excel en pdf",
              "convertisseur excel pdf",
              "convertisseur excel to pdf",
              "transformer excel en pdf",
              "convertir excel en pdf en ligne",
              "convertir xls en pdf",
              "excel pdf",
              "convertir excel en pdf gratuit",
              "convertir fichier excel en pdf"
            ],
            de: [
              "excel in pdf",
              "excel in pdf umwandeln",
              "excel zu pdf",
              "excel datei in pdf umwandeln",
              "exel in pdf",
              "excel in pdf formular umwandeln",
              "xls in pdf",
              "excel tabelle in pdf umwandeln",
              "excel pdf",
              "von excel in pdf"
            ],
            it: [
              "da excel a pdf",
              "convertire excel in pdf",
              "convertitore excel pdf",
              "trasforma excel in pdf",
              "converti excel pdf",
              "trasformare excel in pdf",
              "convertitore da excel a pdf",
              "converti da excel a pdf",
              "da xls a pdf",
              "convertire file excel in pdf"
            ],
            ru: [
              "эксель в пдф",
              "из эксель в пдф",
              "эксель онлайн",
              "ексель в пдф",
              "excel в pdf",
              "конвертировать эксель в пдф",
              "из excel в pdf",
              "конвертировать ексель в пдф",
              "из ексель в пдф",
              "перевести эксель в пдф"
            ],
            en: [
              "excel to pdf",
              "convert excel to pdf",
              "excel to pdf converter",
              "xls to pdf",
              "convert xls to pdf",
              "how to convert excel to pdf",
              "convert excel to pdf free",
              "exel to pdf",
              "excel to pdf online",
              "free excel to pdf converter"
            ]
          },
          "pdf-to-excel": {
            pt: [
              "converter pdf em excel",
              "pdf para excel",
              "transformar pdf em excel",
              "converter pdf para excel",
              "pdf em excel",
              "conversor pdf para excel",
              "conversor de pdf para excel",
              "converter pdf em excel gratis",
              "transformar pdf em excel gratis",
              "converter de pdf para excel"
            ],
            es: [
              "convertir pdf a excel",
              "pdf a excel",
              "convertidor de pdf a excel",
              "convertir de pdf a excel",
              "de pdf a excel",
              "convertidor pdf a excel",
              "pasar de pdf a excel",
              "convertir pdf a excel gratis",
              "convertir pdf en excel",
              "pasar pdf a excel"
            ],
            fr: [
              "convertir pdf en excel",
              "pdf en excel",
              "convertisseur pdf excel",
              "transformer pdf en excel",
              "convertir pdf en excel gratuit",
              "convertir un pdf en excel",
              "convertisseur pdf en excel",
              "transformer un pdf en excel",
              "pdf en excel gratuit",
              "pdf excel"
            ],
            de: [
              "pdf in excel umwandeln",
              "pdf in excel",
              "pdf zu excel",
              "pdf umwandeln in excel",
              "pdf in excel konvertieren",
              "pdf excel",
              "pdf in excel umwandeln kostenlos",
              "pdf tabelle in excel",
              "pdf datei in excel umwandeln",
              "pdf in excel umwandeln online"
            ],
            it: [
              "da pdf a excel",
              "convertire pdf in excel",
              "converti pdf in excel",
              "trasforma pdf in excel",
              "convertitore pdf excel",
              "trasformare pdf in excel",
              "conversione pdf excel",
              "convertitore pdf in excel",
              "conversione pdf in excel",
              "da pdf a excel gratis"
            ],
            ru: [
              "из пдф в эксель",
              "пдф в эксель",
              "pdf в excel",
              "пдф в ексель",
              "конвертировать пдф в эксель",
              "преобразовать пдф в эксель",
              "конвертер pdf в excel",
              "конвертировать пдф в ексель",
              "из pdf в excel",
              "конвертер пдф в эксель"
            ],
            en: [
              "pdf to excel",
              "convert pdf to excel",
              "pdf to excel converter",
              "how to convert pdf to excel",
              "convert pdf to excel free",
              "export pdf to excel",
              "free pdf to excel converter",
              "pdf to excel free",
              "converting pdf to excel",
              "pdf converter to excel"
            ]
          },
          word: {
            pt: [
              "converter word em pdf",
              "word para pdf",
              "converter word para pdf",
              "transformar word em pdf",
              "word em pdf",
              "conversor de word para pdf",
              "conversor word para pdf",
              "converter de word para pdf",
              "converte word em pdf",
              "doc para pdf"
            ],
            es: [
              "convertir word a pdf",
              "word a pdf",
              "convertidor de word a pdf",
              "convertir de word a pdf",
              "de word a pdf",
              "pasar de word a pdf",
              "convertidor word a pdf",
              "pasar word a pdf",
              "convertir word a pdf gratis",
              "transformar de word a pdf"
            ],
            fr: [
              "convertir word en pdf",
              "word en pdf",
              "convertisseur word pdf",
              "convertisseur word en pdf",
              "convertir word en pdf gratuit",
              "transformer word en pdf",
              "word pdf",
              "conversion word pdf",
              "convertir word to pdf",
              "convertisseur word to pdf"
            ],
            de: [
              "word in pdf",
              "word in pdf umwandeln",
              "word zu pdf",
              "word datei in pdf umwandeln",
              "word dokument in pdf umwandeln",
              "word zu pdf konvertieren",
              "doc in pdf",
              "docx in pdf",
              "dokument in pdf umwandeln",
              "word pdf"
            ],
            it: [
              "da word a pdf",
              "convertire word in pdf",
              "convertitore word pdf",
              "trasforma word in pdf",
              "convertire da word a pdf",
              "trasformare word in pdf",
              "trasforma in pdf",
              "converti word in pdf",
              "convertitore da word a pdf",
              "trasforma pdf in word"
            ],
            ru: [
              "ворд в пдф",
              "из ворд в пдф",
              "конвертировать ворд в пдф",
              "перевести ворд в пдф",
              "из ворда в пдф",
              "конвертер ворд в пдф",
              "конвертация ворд в пдф",
              "перевод ворд в пдф",
              "преобразовать ворд в пдф",
              "word в pdf"
            ],
            en: [
              "word to pdf",
              "convert word to pdf",
              "word to pdf converter",
              "doc to pdf",
              "how to convert word to pdf",
              "convert doc to pdf",
              "doc to pdf converter",
              "word doc to pdf",
              "word to pdf converter free",
              "word document to pdf"
            ]
          },
          "pdf-to-word": {
            pt: [
              "converter pdf em word",
              "pdf para word",
              "transformar pdf em word",
              "converter pdf para word",
              "conversor de pdf para word",
              "pdf em word",
              "conversor pdf para word",
              "transformar word em pdf",
              "como converter pdf em word",
              "converter de pdf para word"
            ],
            es: [
              "convertir pdf a word",
              "pdf a word",
              "convertidor de pdf a word",
              "convertir de pdf a word",
              "de pdf a word",
              "pasar de pdf a word",
              "convertidor pdf a word",
              "pasar pdf a word",
              "transformar de pdf a word",
              "transformar pdf a word"
            ],
            fr: [
              "convertir pdf en word",
              "pdf en word",
              "convertisseur pdf word",
              "transformer pdf en word",
              "convertisseur pdf en word",
              "convertir pdf en word gratuit",
              "convertir un pdf en word",
              "conversion pdf en word",
              "conversion pdf word",
              "convertir pdf en word en ligne"
            ],
            de: [
              "pdf in word umwandeln",
              "pdf in word",
              "pdf zu word",
              "pdf zu word konvertieren",
              "pdf umwandeln in word",
              "pdf in word umwandeln online",
              "pdf in word konvertieren",
              "pdf datei in word umwandeln",
              "pdf in word umwandeln kostenfrei",
              "pdf in word umwandeln kostenlos"
            ],
            it: [
              "da pdf a word",
              "convertire pdf in word",
              "converti pdf in word",
              "trasforma pdf in word",
              "convertitore pdf word",
              "trasformare pdf in word",
              "conversione pdf in word",
              "convertitore da pdf a word",
              "convertire pdf in word gratis",
              "modifica pdf in word"
            ],
            ru: [
              "пдф в ворд",
              "из пдф в ворд",
              "конвертировать пдф в ворд",
              "перевести пдф в ворд",
              "преобразовать пдф в ворд",
              "конвертер пдф в ворд",
              "конвертация пдф в ворд",
              "перевод пдф в ворд",
              "pdf в word",
              "перевод из пдф в ворд"
            ],
            en: [
              "pdf to word",
              "convert pdf to word",
              "pdf to word converter",
              "how to convert pdf to word",
              "free pdf to word converter",
              "pdf to word doc",
              "pdf to doc",
              "convert pdf to word free",
              "how to convert a pdf to word",
              "pdf converter to word"
            ]
          },
          delete: {
            pt: [
              "excluir pagina pdf",
              "excluir pdf",
              "excluir paginas pdf",
              "remover pagina pdf",
              "excluir página pdf",
              "remover paginas pdf",
              "remover pdf",
              "eliminar paginas pdf",
              "excluir páginas pdf",
              "excluir pagina de pdf"
            ],
            es: [
              "eliminar paginas pdf",
              "eliminar hojas de pdf",
              "eliminar pdf",
              "eliminar paginas de un pdf",
              "eliminar hojas de un pdf",
              "quitar paginas pdf",
              "eliminar paginas de pdf",
              "quitar hojas de pdf",
              "eliminar hojas pdf",
              "quitar hojas pdf"
            ],
            fr: [
              "supprimer page pdf",
              "supprimer des pages d'un pdf",
              "supprimer une page d'un pdf",
              "supprimer pages pdf",
              "supprimer une page pdf",
              "pdf supprimer page",
              "enlever une page d'un pdf",
              "enlever page pdf",
              "comment supprimer une page d'un pdf",
              "supprimer pdf"
            ],
            de: [
              "pdf seiten löschen",
              "pdf seite löschen",
              "pdf seiten entfernen",
              "seiten aus pdf löschen",
              "seite aus pdf löschen",
              "pdf seite entfernen",
              "pdf löschen",
              "pdf-seiten löschen",
              "pdf seiten löschen online",
              "pdf eine seite löschen"
            ],
            it: [
              "elimina pagine pdf",
              "eliminare pagine pdf",
              "elimina pagina pdf",
              "elimina pdf",
              "elimina pagine da pdf",
              "eliminare pagine da pdf",
              "togliere pagine pdf",
              "rimuovi pagine pdf",
              "eliminare pagina pdf",
              "eliminare pagine da un pdf"
            ],
            ru: [
              "удалить страницы из пдф",
              "удалить страницы пдф",
              "удалить страницу в пдф",
              "удалить страницу из пдф",
              "удалить страницы из pdf",
              "удалить листы из пдф",
              "как удалить страницу в пдф",
              "как удалить страницы в пдф",
              "удалить страницу из pdf",
              "pdf удалить страницы"
            ],
            en: [
              "delete pages from pdf",
              "remove pages from pdf",
              "how to delete pages from pdf",
              "delete pdf pages",
              "how to remove pages from a pdf",
              "pdf page remover",
              "how to delete a page in pdf",
              "remove page from pdf",
              "pdf delete pages",
              "delete page from pdf"
            ]
          },
          merge: {
            pt: [
              "juntar pdf",
              "unir pdf",
              "juntar pdfs",
              "juntar pdf online",
              "juntar arquivos pdf",
              "unificar pdf",
              "junta pdf",
              "agrupar pdf",
              "mesclar pdf",
              "unir pdfs"
            ],
            es: [
              "unir pdf",
              "juntar pdf",
              "combinar pdf",
              "unir pdf online",
              "unir pdfs",
              "unificar pdf",
              "unir pdf gratis",
              "unir archivos pdf",
              "fusionar pdf",
              "unir dos pdf"
            ],
            fr: [
              "fusionner pdf",
              "fusion pdf",
              "combiner pdf",
              "fusionner pdf en ligne",
              "assembler pdf",
              "fusionner 2 pdf",
              "fusionner des pdf",
              "pdf fusion",
              "fusionner plusieurs pdf",
              "fusionner deux pdf"
            ],
            de: [
              "pdf zusammenfügen",
              "pdfs zusammenfügen",
              "pdf dateien zusammenfügen",
              "pdf zusammenführen",
              "pdf zusammenfügen online",
              "pdf zusammenfügen kostenlos",
              "mehrere pdf zusammenfügen",
              "pdf online zusammenfügen",
              "pdf zusammenfügen windows 10",
              "pdf dokumente zusammenfügen",
              "pdf verbinden"
            ],
            it: [
              "unisci pdf",
              "unire pdf",
              "unire file pdf",
              "unire pdf online",
              "unire due pdf",
              "unione pdf",
              "unisci pdf online",
              "unisci file pdf",
              "unisci pdf gratis",
              "come unire due pdf"
            ],
            ru: [
              "объединить пдф",
              "объединить pdf",
              "объединение пдф",
              "объединить пдф файлы",
              "пдф объединить",
              "объединить пдф онлайн",
              "объеденить пдф",
              "объединить файлы пдф",
              "склеить пдф",
              "обьединить пдф"
            ],
            en: [
              "combine pdf",
              "merge pdf",
              "pdf combiner",
              "pdf merge",
              "how to combine pdf files",
              "pdf merger",
              "combine pdf files",
              "combine pdfs",
              "pdf combine",
              "how to merge pdf files",
              "join pdf",
              "pdf join",
              "merge document"
            ]
          },
          split: {
            pt: [
              "dividir pdf",
              "separar pdf",
              "cortar pdf",
              "desmembrar pdf",
              "extrair pdf",
              "quebrar pdf",
              "separa pdf",
              "recortar pdf",
              "dividir pdf online",
              "separador de pdf"
            ],
            es: [
              "dividir pdf",
              "separar pdf",
              "cortar pdf",
              "recortar pdf",
              "extraer pdf",
              "dividir pdf online",
              "extraer paginas pdf",
              "desunir pdf",
              "separa pdf",
              "extraer paginas de un pdf"
            ],
            fr: [
              "diviser pdf",
              "séparer pdf",
              "scinder pdf",
              "supprimer page pdf",
              "couper pdf",
              "extraire page pdf",
              "diviser un pdf",
              "dissocier pdf",
              "extraire pdf",
              "découper pdf"
            ],
            de: [
              "pdf teilen",
              "pdf trennen",
              "pdf seiten trennen",
              "pdf extrahieren",
              "pdf splitten",
              "pdf aufteilen",
              "pdf schneiden",
              "pdf trennen online",
              "pdf seiten extrahieren",
              "pdf auseinandernehmen"
            ],
            it: [
              "dividi pdf",
              "dividere pdf",
              "separa pdf",
              "taglia pdf",
              "dividi pdf online",
              "estrai pdf",
              "dividere pdf online",
              "tagliare pdf",
              "estrai pagine pdf",
              "estrarre pagine da pdf"
            ],
            ru: [
              "разделить пдф",
              "разбить пдф",
              "разделить pdf",
              "разделить пдф онлайн",
              "разъединить пдф",
              "обрезать пдф",
              "разделить пдф файл",
              "пдф разделить",
              "извлечь страницы из пдф",
              "вырезать страницы из пдф"
            ],
            en: [
              "split pdf",
              "pdf splitter",
              "pdf split",
              "how to separate pages in pdf",
              "extract pages from pdf",
              "how to extract pages from pdf",
              "split pdf online",
              "separate pdf pages",
              "split pdf pages",
              "how to separate pdf pages"
            ]
          },
          sign: {
            pt: [
              "assinatura digital",
              "assinatura eletronica",
              "como fazer assinatura digital",
              "assinatura digital como fazer",
              "assinar pdf",
              "assinatura digital gratis",
              "assinatura digital pdf",
              "assinatura online",
              "assinar documento digitalmente",
              "assinar pdf online"
            ],
            es: [
              "firma digital",
              "firmar pdf",
              "firma electronica",
              "firma digital online",
              "firma digital pdf",
              "firmar pdf online",
              "firmas digitales",
              "firmar documento pdf",
              "firma pdf",
              "como hacer una firma digital"
            ],
            fr: [
              "signature électronique",
              "signature electronique",
              "signer un pdf",
              "signer pdf",
              "signer un document pdf",
              "signature en ligne",
              "signature électronique pdf",
              "signature pdf",
              "signature numérique",
              "signature électronique gratuite"
            ],
            de: [
              "unterschrift erstellen",
              "digitale unterschrift",
              "pdf unterschreiben",
              "unterschrift in pdf einfügen",
              "digitale unterschrift erstellen",
              "online unterschrift",
              "pdf unterschrift einfügen",
              "pdf digital unterschreiben",
              "digitale unterschrift pdf",
              "pdf online unterschreiben"
            ],
            it: [
              "firma digitale gratis",
              "firma digitale",
              "firma pdf",
              "firma digitale online",
              "firma digitale online gratis",
              "firma pdf online",
              "firmare documento pdf",
              "firma digitale pdf",
              "firma online",
              "firma digitale gratuita"
            ],
            ru: [
              "подпись онлайн",
              "онлайн подпись",
              "подписать документ онлайн",
              "электронная подпись онлайн",
              "подписать pdf",
              "подписать пдф",
              "поставить подпись онлайн",
              "подписать пдф онлайн",
              "нарисовать подпись онлайн",
              "роспись онлайн"
            ],
            en: [
              "electronic signature",
              "esign",
              "signature",
              "how to sign a pdf",
              "e signature",
              "sign pdf",
              "online signature",
              "pdf signature",
              "add signature to pdf",
              "sign documents online"
            ]
          },
          unlock: {
            pt: [
              "desbloquear pdf",
              "desproteger pdf",
              "tirar senha de pdf",
              "remover senha pdf",
              "desbloquear pdf online",
              "tirar senha pdf",
              "como tirar senha de pdf",
              "retirar senha pdf",
              "quebrar senha pdf",
              "desbloquear pdf com senha"
            ],
            es: [
              "desbloquear pdf",
              "quitar contraseña pdf",
              "desproteger pdf",
              "quitar clave pdf",
              "quitar contraseña a pdf",
              "quitar proteccion pdf",
              "desbloquear pdf online",
              "desproteger pdf online",
              "como quitar contraseña a un pdf",
              "quitar clave a pdf"
            ],
            fr: [
              "déverrouiller pdf",
              "deverouiller pdf",
              "enlever protection pdf",
              "debloquer pdf",
              "enlever mot de passe pdf",
              "supprimer mot de passe pdf",
              "pdf protégé",
              "craquer un pdf",
              "déprotéger pdf",
              "mot de passe pdf"
            ],
            de: [
              "pdf passwort entfernen",
              "pdf entsperren",
              "pdf kennwort entfernen",
              "pdf kennwortschutz aufheben",
              "pdf entschlüsseln",
              "pdf schutz aufheben",
              "pdf passwortschutz entfernen",
              "passwort pdf entfernen",
              "pdf passwort entfernen online",
              "kennwortschutz pdf aufheben"
            ],
            it: [
              "sblocca pdf",
              "sbloccare pdf",
              "sblocco pdf",
              "togliere protezione pdf",
              "sproteggere pdf",
              "togliere password pdf",
              "sbloccare pdf online",
              "rimuovere password pdf",
              "sblocca pdf online",
              "pdf protetto"
            ],
            ru: [
              "снять защиту с pdf",
              "снять защиту с пдф",
              "разблокировать пдф",
              "разблокировать pdf",
              "снять защиту pdf",
              "снять пароль с pdf",
              "снять пароль с пдф",
              "как снять защиту с pdf",
              "pdf снять защиту",
              "снять защиту пдф"
            ],
            en: [
              "unlock pdf",
              "remove password from pdf",
              "how to remove password from pdf",
              "pdf unlock",
              "pdf password remover",
              "remove pdf password",
              "pdf unlocker",
              "how to unlock a pdf",
              "remove security from pdf",
              "unsecure pdf"
            ]
          },
          protect: {
            pt: [
              "proteger pdf",
              "senha pdf",
              "colocar senha em pdf",
              "pdf com senha",
              "proteger pdf com senha",
              "colocar senha no pdf",
              "como colocar senha em pdf",
              "colocar senha pdf",
              "como colocar senha no pdf",
              "pdf senha"
            ],
            es: [
              "proteger pdf",
              "encriptar pdf",
              "proteger pdf con contraseña",
              "cifrar pdf",
              "contraseña pdf",
              "poner contraseña a pdf",
              "poner contraseña a un pdf",
              "como encriptar un pdf",
              "poner clave a pdf",
              "clave pdf"
            ],
            fr: ["protéger un pdf", "protege pdf", "crypter un pdf"],
            de: [
              "pdf verschlüsseln",
              "pdf passwort schützen",
              "pdf mit passwort schützen",
              "pdf schützen",
              "pdf verschlüsseln kostenlos",
              "pdf online verschlüsseln",
              "pdf datei verschlüsseln",
              "pdf verschlüsseln online",
              "pdf mit passwort schützen kostenlos",
              "pdf schützen passwort"
            ],
            it: [
              "proteggere pdf",
              "proteggi pdf",
              "proteggere pdf con password",
              "criptare pdf",
              "creare pdf protetto",
              "password a pdf",
              "proteggi pdf con password",
              "proteggere file pdf",
              "blocca pdf",
              "bloccare pdf"
            ],
            ru: ["пароль на pdf", "как поставить пароль на pdf файл"],
            en: [
              "how to password protect a pdf",
              "password protect pdf",
              "encrypt pdf",
              "password protect pdf free",
              "add password to pdf",
              "pdf password protect",
              "pdf password",
              "how to encrypt a pdf",
              "password protect a pdf",
              "how to password protect a pdf for free"
            ]
          },
          reader: {
            pt: [
              "leitor de pdf",
              "leitor de pdf online",
              "abrir pdf online",
              "leitor pdf",
              "leitor pdf online",
              "visualizador de pdf online",
              "ler pdf online",
              "visualizar pdf online",
              "pdf reader online",
              "abrir arquivo pdf online"
            ],
            es: [
              "abrir pdf",
              "abrir pdf online",
              "lector de pdf online",
              "lector pdf online",
              "ver pdf online",
              "abrir pdf en linea",
              "abrir archivos pdf",
              "lector de pdf",
              "visor pdf online",
              "lector pdf"
            ],
            fr: [
              "lecteur pdf en ligne",
              "ouvrir pdf en ligne",
              "lire pdf en ligne",
              "ouvrir un pdf en ligne",
              "ouvrir fichier pdf en ligne",
              "visionneuse pdf en ligne",
              "lire un pdf en ligne",
              "lecteur de pdf en ligne",
              "lecteur pdf online",
              "lecteur pdf en ligne gratuit"
            ],
            de: [
              "pdf online",
              "pdf reader",
              "pdf reader online",
              "pdf viewer online",
              "online pdf viewer",
              "pdf online öffnen",
              "online pdf reader",
              "pdf lesen",
              "pdf öffnen online",
              "pdf online reader"
            ],
            it: [
              "lettore pdf online",
              "aprire pdf online",
              "apri pdf online",
              "visualizzatore pdf online",
              "apri pdf",
              "aprire file pdf online",
              "visualizza pdf online",
              "lettore pdf on line",
              "apri file online"
            ],
            ru: [
              "pdf reader",
              "pdf reader online",
              "пдф онлайн",
              "пдф ридер онлайн",
              "просмотр пдф онлайн",
              "просмотр pdf",
              "pdf online reader",
              "open pdf online",
              "pdf online",
              "пдф ридер"
            ],
            en: [
              "pdf reader",
              "pdf reader online",
              "online pdf reader",
              "pdf viewer online",
              "online pdf viewer",
              "open pdf online",
              "pdf opener",
              "pdf opener online",
              "view pdf online",
              "read pdf online"
            ]
          },
          "number-pages": {
            pt: [
              "numerar pdf",
              "numerar paginas pdf",
              "numerar pdf online",
              "paginar pdf",
              "numerar páginas pdf",
              "paginar pdf online",
              "como numerar pdf"
            ],
            es: [
              "enumerar pdf",
              "foliar pdf",
              "numerar pdf",
              "numerar paginas pdf",
              "enumerar pdf de atrás hacia adelante",
              "enumerar paginas en pdf",
              "paginar pdf",
              "como enumerar paginas en pdf",
              "numerar pdf online",
              "numerar hojas en pdf"
            ],
            fr: ["numéroter pdf", "numeroter pdf", "numéroter pages pdf"],
            de: ["pdf seitenzahlen einfügen", "pdf nummerieren", "pdf seiten nummerieren"],
            it: ["numerare pagine pdf", "numera pdf", "numerare pdf", "numera pagine pdf"],
            ru: ["пронумеровать пдф", "пронумеровать страницы в пдф", "нумерация пдф онлайн"],
            en: [
              "add page numbers to pdf",
              "how to add page numbers to a pdf",
              "how to add page numbers to pdf",
              "insert page numbers in pdf",
              "adding page numbers to pdf",
              "pdf page number",
              "how to add page numbers in pdf",
              "pdf page numbers",
              "number pdf",
              "number pages in pdf"
            ]
          }
        },
        Rn = [
          {
            key: "compress",
            translationKey: "compress",
            pdfiumTranslationKey: "11wp3g5",
            actionTranslationKey: "compress",
            title: "Compress PDF",
            iconLegacy: Wt,
            icon: hn,
            color: jt,
            url: "https://smallpdf.com/compress-pdf",
            showInPDFViewerTools: !0,
            searchTags: ["compress pdfs", "small", "reduce size", "reduce pdf size", "make smaller", "make pdf smaller", "email", "send"],
            serpKeywords: In.compress,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "converter2",
            translationKey: "converter",
            pdfiumTranslationKey: "11wp3jn",
            actionTranslationKey: "converter",
            title: "Convert PDF",
            iconLegacy: qt,
            icon: mn,
            color: "#FF4c23",
            url: "https://smallpdf.com/pdf-converter",
            showInPDFViewerTools: !1,
            searchTags: ["convert", "convert pdfs", "pdf converter"],
            serpKeywords: In.converter2,
            inputTypes: [
              Zt.APPLICATION_PDF,
              Zt.APPLICATION_DOC,
              Zt.APPLICATION_DOCX,
              Zt.APPLICATION_XLS,
              Zt.APPLICATION_XLSX,
              Zt.APPLICATION_PPT,
              Zt.APPLICATION_PPTX
            ],
            outputTypes: [Zt.APPLICATION_PDF, Zt.APPLICATION_DOCX, Zt.APPLICATION_XLSX, Zt.APPLICATION_PPTX]
          },
          {
            key: "pdf-to-ppt",
            translationKey: "pdf_to_ppt",
            pdfiumTranslationKey: "pdf_to_ppt",
            actionTranslationKey: "action_convert_to",
            title: "PDF to PPT",
            iconLegacy: en,
            icon: yn,
            color: "#FF7919",
            url: "https://smallpdf.com/pdf-to-ppt",
            showInPDFViewerTools: !0,
            searchTags: ["convert", "microsoft office", "pdf to ppt", "pdf to pptx", "pdf to powerpoint", "edit pdfs", "pdf editor"],
            serpKeywords: In["pdf-to-ppt"],
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PPTX]
          },
          {
            key: "ppt",
            translationKey: "ppt",
            pdfiumTranslationKey: "ppt",
            actionTranslationKey: "action_convert_to",
            title: "PPT to PDF",
            iconLegacy: Jt,
            icon: vn,
            color: zt,
            url: "https://smallpdf.com/ppt-to-pdf",
            showInPDFViewerTools: !1,
            searchTags: ["convert", "microsoft office", "ppt to pdfs", "pptx to pdfs", "powerpoint to pdfs"],
            serpKeywords: In.ppt,
            inputTypes: [Zt.APPLICATION_PPT, Zt.APPLICATION_PPTX],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "jpg",
            translationKey: "jpg",
            pdfiumTranslationKey: "jpg",
            actionTranslationKey: "action_convert_to",
            title: "JPG to PDF",
            iconLegacy: Xt,
            icon: Xt,
            color: Ut,
            url: "https://smallpdf.com/jpg-to-pdf",
            showInPDFViewerTools: !1,
            searchTags: ["convert", "photo", "foto", "jpg to pdfs", "jpeg to pdfs", "image to pdfs"],
            serpKeywords: In.jpg,
            inputTypes: [Zt.IMAGE_JPEG, Zt.IMAGE_GIF, Zt.IMAGE_BMP, Zt.IMAGE_PNG, Zt.IMAGE_TIFF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "pdf-to-jpg",
            translationKey: "extract",
            pdfiumTranslationKey: "extract",
            actionTranslationKey: "action_convert_to",
            title: "PDF to JPG",
            iconLegacy: Qt,
            icon: gn,
            color: "#E6D739",
            url: "https://smallpdf.com/pdf-to-jpg",
            showInPDFViewerTools: !0,
            searchTags: [
              "convert",
              "photo",
              "foto",
              "pdf to jpg",
              "pdf to jpeg",
              "pdf to image",
              "extract images",
              "extract jpg",
              "extract jpeg"
            ],
            serpKeywords: In["pdf-to-jpg"],
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.IMAGE_JPEG]
          },
          {
            key: "excel",
            translationKey: "excel",
            pdfiumTranslationKey: "excel",
            actionTranslationKey: "action_convert_to",
            title: "Excel to PDF",
            iconLegacy: tn,
            icon: wn,
            color: Vt,
            url: "https://smallpdf.com/excel-to-pdf",
            showInPDFViewerTools: !1,
            searchTags: ["convert", "microsoft office", "sheet", "xls to pdfs", "xlsx to pdfs", "excel to pdf", "table", "tables"],
            serpKeywords: In.excel,
            inputTypes: [Zt.APPLICATION_XLS, Zt.APPLICATION_XLSX],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "pdf-to-excel",
            translationKey: "pdf_to_excel",
            pdfiumTranslationKey: "pdf_to_excel",
            actionTranslationKey: "action_convert_to",
            title: "PDF to Excel",
            iconLegacy: nn,
            icon: bn,
            color: Yt,
            url: "https://smallpdf.com/pdf-to-excel",
            showInPDFViewerTools: !0,
            searchTags: [
              "convert",
              "microsoft office",
              "sheet",
              "pdf to xls",
              "pdf to xlsx",
              "pdf to excel",
              "table",
              "tables",
              "edit pdf",
              "pdf editor"
            ],
            serpKeywords: In["pdf-to-excel"],
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_XLSX]
          },
          {
            key: "delete",
            translationKey: "delete",
            pdfiumTranslationKey: "delete",
            actionTranslationKey: "delete",
            title: "Delete PDF Pages",
            iconLegacy: ln,
            icon: xn,
            color: "#0FB2B8",
            url: "https://smallpdf.com/delete-pages-from-pdf",
            showInPDFViewerTools: !0,
            searchTags: ["delete pages", "remove pages", "delete page from pdf", "delete pages from pdf", "remove pages from pdf"],
            serpKeywords: In.delete,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "edit",
            translationKey: "edit",
            pdfiumTranslationKey: "11wp338",
            actionTranslationKey: "edit",
            title: "Edit PDF",
            iconLegacy: an,
            icon: _n,
            color: "#0FC0C5",
            url: "https://smallpdf.com/edit-pdf",
            showInPDFViewerTools: !0,
            searchTags: ["text", "add text", "add shape", "add image", "edit pdfs", "pdf editor", "draw"],
            serpKeywords: In.edit,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "word",
            translationKey: "word",
            pdfiumTranslationKey: "word",
            actionTranslationKey: "action_convert_to",
            title: "Word to PDF",
            iconLegacy: rn,
            icon: En,
            color: Kt,
            url: "https://smallpdf.com/word-to-pdf",
            showInPDFViewerTools: !1,
            searchTags: ["convert", "microsoft office", "doc to pdfs", "docx to pdfs", "word to pdfs"],
            serpKeywords: In.word,
            inputTypes: [Zt.APPLICATION_DOC, Zt.APPLICATION_DOCX],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "pdf-to-word",
            translationKey: "pdf_to_word",
            pdfiumTranslationKey: "11wp39c",
            actionTranslationKey: "action_convert_to",
            title: "PDF to Word",
            iconLegacy: on,
            icon: Ln,
            color: "#3D99F5",
            url: "https://smallpdf.com/pdf-to-word",
            showInPDFViewerTools: !0,
            searchTags: ["convert", "microsoft office", "pdf to doc", "pdf to docx", "pdf to word", "edit pdfs", "pdf editor"],
            serpKeywords: In["pdf-to-word"],
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_DOCX]
          },
          {
            key: "merge",
            translationKey: "merge",
            pdfiumTranslationKey: "11wp3j6",
            actionTranslationKey: "merge",
            title: "Merge PDF",
            iconLegacy: sn,
            icon: Sn,
            color: Ht,
            url: "https://smallpdf.com/merge-pdf",
            showInPDFViewerTools: !0,
            searchTags: ["merge pdfs", "merge documents", "combine pdfs", "combine documents", "join pdfs", "pdf joiner", "combiner"],
            serpKeywords: In.merge,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "split",
            translationKey: "split",
            pdfiumTranslationKey: "split",
            actionTranslationKey: "split",
            title: "Split PDF",
            iconLegacy: cn,
            icon: An,
            color: "#9966FF",
            url: "https://smallpdf.com/split-pdf",
            showInPDFViewerTools: !0,
            searchTags: ["split pdfs", "extract pages", "select pages"],
            serpKeywords: In.split,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "rotate",
            translationKey: "rotate",
            pdfiumTranslationKey: "rotate",
            actionTranslationKey: "rotate",
            title: "Rotate PDF",
            iconLegacy: un,
            icon: kn,
            color: Bt,
            url: "https://smallpdf.com/rotate-pdf",
            showInPDFViewerTools: !0,
            searchTags: ["rotate pdfs", "rotate pages", "turn pages"],
            serpKeywords: In.rotate,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "sign",
            translationKey: "sign",
            pdfiumTranslationKey: "11wp3gn",
            actionTranslationKey: "sign",
            title: "Sign PDF",
            iconLegacy: dn,
            icon: Cn,
            color: "#E667E6",
            url: "https://smallpdf.com/sign-pdf",
            showInPDFViewerTools: !0,
            searchTags: ["sign pdfs", "signature", "add signature", "esign", "sign documents", "e sign", "e-sign"],
            serpKeywords: In.sign,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "unlock",
            translationKey: "unlock",
            pdfiumTranslationKey: "unlock",
            actionTranslationKey: "unlock",
            title: "Unlock PDF",
            iconLegacy: fn,
            icon: Pn,
            color: Gt,
            url: "https://smallpdf.com/unlock-pdf",
            showInPDFViewerTools: !0,
            searchTags: ["remove password", "unlock pdfs", "password remover", "hack pdfs", "security"],
            serpKeywords: In.unlock,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "protect",
            translationKey: "protect",
            pdfiumTranslationKey: "protect",
            actionTranslationKey: "protect",
            title: "Protect PDF",
            iconLegacy: pn,
            icon: Tn,
            color: "#FF5975",
            url: "https://smallpdf.com/protect-pdf",
            showInPDFViewerTools: !0,
            searchTags: ["protect pdfs", "protect documents", "add passwords", "security", "secure"],
            serpKeywords: In.protect,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "reader",
            translationKey: "reader",
            pdfiumTranslationKey: "reader",
            actionTranslationKey: "reader",
            title: "PDF Reader",
            iconLegacy: pn,
            icon: Tn,
            color: "#FF0000",
            url: "https://smallpdf.com/pdf-reader",
            showInPDFViewerTools: !1,
            searchTags: In.reader.en,
            serpKeywords: In.reader,
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          },
          {
            key: "number-pages",
            translationKey: "number_pages",
            pdfiumTranslationKey: "number_pages",
            actionTranslationKey: "number_pages",
            title: "Number Pages",
            iconLegacy: pn,
            icon: Tn,
            color: "#0FB2B8",
            url: "https://smallpdf.com/add-page-numbers-to-pdf",
            showInPDFViewerTools: !1,
            searchTags: In["number-pages"].en,
            serpKeywords: In["number-pages"],
            inputTypes: [Zt.APPLICATION_PDF],
            outputTypes: [Zt.APPLICATION_PDF]
          }
        ];
      function On(e) {
        return Rn.find((t) => t.key === e);
      }
      var Nn = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      function Dn(e) {
        return Nn(this, void 0, void 0, function* () {
          let t = "https://files.smallpdf.com/upload-url";
          (yield Nt()) && (t = `${t}-fast`), (t = `${t}/${e}`);
          const n = yield (function (e, t) {
            return fetch(e, t).then((e) => e.json());
          })(t);
          return n.url;
        });
      }
      var Fn;
      !(function (e) {
        (e.ID_JOB_RESULT = "jobResult"), (e.ID_RESULT = "result");
      })(Fn || (Fn = {}));
      chrome.runtime.getURL("images/smallpdf_48.png");
      const Mn = "send-analytics-event",
        $n = "dev-logger";
      var jn = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      let zn;
      function Un() {
        return jn(this, void 0, void 0, function* () {
          if ("boolean" == typeof zn) return zn;
          return yield Zn([Bn.SERVICE_WORKER_LOGS])
            .then((e) => e[Bn.SERVICE_WORKER_LOGS])
            .then((e) => "boolean" == typeof e && ((zn = e), e));
        });
      }
      function Vn(...e) {
        return jn(this, void 0, void 0, function* () {
          (yield Un()) && console.log.apply(null, e);
        });
      }
      function Kn(...e) {
        return jn(this, void 0, void 0, function* () {
          if (yield Un())
            try {
              chrome.runtime.sendMessage(chrome.runtime.id, { request: $n, event: e });
            } catch (e) {
              Hn("sendLogToServiceWorker failed to send message", e);
            }
        });
      }
      function Hn(...e) {
        return jn(this, void 0, void 0, function* () {
          (yield Un()) && console.log.apply(null, e);
        });
      }
      var Bn,
        Gn,
        Yn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      function Zn(e, t) {
        return Yn(this, void 0, void 0, function* () {
          try {
            const n = yield chrome.storage.local.get(e);
            return "string" == typeof e ? n[e] || t : n;
          } catch (n) {
            return Vn(chrome.runtime.lastError, n), Array.isArray(e) ? {} : t;
          }
        });
      }
      function Wn(e) {
        return Yn(this, void 0, void 0, function* () {
          try {
            yield chrome.storage.local.set(e);
          } catch (e) {
            throw (Vn(chrome.runtime.lastError), e);
          }
        });
      }
      function qn(e) {
        return Yn(this, void 0, void 0, function* () {
          try {
            yield chrome.storage.local.remove(e);
          } catch (e) {
            throw (Vn(chrome.runtime.lastError), e);
          }
        });
      }
      function Xn(e, t) {
        return Yn(this, void 0, void 0, function* () {
          try {
            const n = yield chrome.storage.sync.get(e);
            if (Array.isArray(e)) return n;
            const r = n[e];
            return void 0 === r ? t : r;
          } catch (n) {
            return Vn(chrome.runtime.lastError, n), Array.isArray(e) ? {} : t;
          }
        });
      }
      function Qn(e) {
        return Yn(this, void 0, void 0, function* () {
          try {
            yield chrome.storage.sync.set(e);
          } catch (e) {
            throw (Vn(chrome.runtime.lastError), e);
          }
        });
      }
      !(function (e) {
        (e.IS_PDIUM_OPEN_ON_LOAD = "smallpdf.pdfium.isOpen"),
          (e.MIGRATIONS_SCHEMA_VERSION = "smallpdf.msv"),
          (e.JOB_RESULT_TAB = "smallpdf.jobResult.tab"),
          (e.USER_FAVORITES = "smallpdf.user.favorites"),
          (e.LOCAL_TOKEN = "smallpdf.user.localToken"),
          (e.USER_COUNTRY_GEO_IP = "smallpdf.user.countryGeoIP"),
          (e.USER_PROFILE = "smallpdf.user.profile"),
          (e.USER_ACTIVE_PRO = "smallpdf.user.ap"),
          (e.USER_RT = "smallpdf.user.rt"),
          (e.ACCESS_TOKEN = "KEY_AUTH_AT"),
          (e.REFRESH_TOKEN = "KEY_AUTH_RT"),
          (e.TRACKING_EVENTS = "STORAGE_KEY_TRACKING_EVENTS_QUEUE"),
          (e.USER_DATA_SYNCED = "STORAGE_KEY_USER_DATA_SYNCED"),
          (e.USER_DATA_LAST_SYNC = "smallpdf.dls"),
          (e.FILE_HANDLE = "STORAGE_KEY_FILE_HANDLE"),
          (e.FILE_HANDLE_RESULT = "STORAGE_KEY_FILE_HANDLE_RESULT"),
          (e.TASK = "STORAGE_KEY_TASK"),
          (e.SYSTEM_OS = "STORAGE_KEY_SYSTEM_OS"),
          (e.SYSTEM_LOCALE = "STORAGE_KEY_SYSTEM_LOCALE"),
          (e.INSTALLATION_DATE = "STORAGE_KEY_INSTALLATION_DATE"),
          (e.PROFILE = "STORAGE_KEY_PROFILE"),
          (e.AUTH_CODE_VERIFIER = "STORAGE_KEY_AUTH_CODE_VERIFIER"),
          (e.AUTH_STATE_CODE = "STORAGE_KEY_AUTH_STATE_CODE"),
          (e.AUTH_PROVIDER = "STORAGE_KEY_AUTH_PROVIDER"),
          (e.FAILED_LOGIN_ATTEMPTS = "smallpdf.fla"),
          (e.THANKS_PAGE_LOGGED_ONCE = "smallpdf.thanks_event"),
          (e.SERVICE_WORKER_LOGS = "smallpdf.service_worker_logs");
      })(Bn || (Bn = {})),
        (function (e) {
          (e.PreferenceGoogleSERPEnabled = "smallpdf.options.googleSerpEnabled"),
            (e.PreferenceAutoDownloadEnabled = "STORAGE_KEY_OPTIONS_AUTO_DOWNLOAD"),
            (e.Experiments = "STORAGE_KEY_EXPERIMENTS"),
            (e.TasksCount = "STORAGE_KEY_TASKS_COUNT"),
            (e.LastTaskTime = "STORAGE_KEY_LAST_TASK_TIME"),
            (e.FreeTasksResetTime = "smallpdf.ftrt"),
            (e.MIGRATIONS_SCHEMA_VERSION = "smallpdf.msv");
        })(Gn || (Gn = {}));
      var Jn = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const er = "files";
      var tr, nr, rr, or;
      function ir() {
        return Jn(this, void 0, void 0, function* () {
          return Zn(Bn.FILE_HANDLE);
        });
      }
      function ar() {
        return Jn(this, void 0, void 0, function* () {
          return Zn(Bn.FILE_HANDLE_RESULT);
        });
      }
      !(function (e) {
        (e.DROP_AREA = "droparea"), (e.DRAG_AND_DROP = "drag-and-drop"), (e.RETRY = "retry");
      })(tr || (tr = {})),
        (function (e) {
          (e.FILE_HANDLE_IDLE = "fileHandleIdle"),
            (e.FILE_HANDLE_PROGRESS = "fileHandleProgress"),
            (e.FILE_HANDLE_FAILURE = "fileHandleFailure");
        })(nr || (nr = {})),
        (function (e) {
          (e.FORCE = "force"), (e.AUTO = "auto"), (e.CUSTOM = "custom"), (e.OFF = "off");
        })(rr || (rr = {})),
        (function (e) {
          (e.HIGH = "COMPRESS_OPTION_HIGH"), (e.BALANCED = "COMPRESS_OPTION_BALANCED"), (e.CUSTOM = "COMPRESS_OPTION_CUSTOM");
        })(or || (or = {}));
      var lr = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      var sr, cr;
      function ur() {
        return lr(this, void 0, void 0, function* () {
          return Zn(Bn.TASK);
        });
      }
      function dr() {
        return lr(this, void 0, void 0, function* () {
          return Xn(Gn.TasksCount, 0);
        });
      }
      function fr() {
        return lr(this, void 0, void 0, function* () {
          yield Qn({ [Gn.TasksCount]: 0 });
        });
      }
      !(function (e) {
        (e.CREATED = "Created"), (e.REQUEST = "Request"), (e.PENDING = "Pending"), (e.SUCCESS = "Success"), (e.FAILURE = "Failure");
      })(sr || (sr = {})),
        (function (e) {
          (e.AUTO = "auto"), (e.NOTIFICATION = "notification"), (e.RESULT_SCREEN = "result"), (e.UNKNOWN = "unknown");
        })(cr || (cr = {}));
      class pr {
        constructor(e, t, n, r) {
          (this.r = e), (this.g = t), (this.b = n), (this.a = r);
        }
        toString() {
          return this.value || (this.value = `rgba(${this.r},${this.g},${this.b},${this.a})`), this.value;
        }
      }
      function hr(e, t) {
        const n = parseInt(e, 16);
        return Number.isNaN(n) ? t : n;
      }
      function mr(e, t, n, r = 1) {
        return new pr(e, t, n, r);
      }
      function gr(e) {
        const t = hr(e.substr(1, 2), 255),
          n = hr(e.substr(3, 2), 255),
          r = hr(e.substr(5, 2), 255),
          o = hr(e.substr(7, 2), 1);
        return new pr(t, n, r, o);
      }
      const vr = gr("#0055FF"),
        yr = gr("#0048D9"),
        wr = gr("#003CB2"),
        br = (gr("#003399"), gr("#00194C"), gr("#F2F6FF"), gr("#E5EEFF")),
        Er = gr("#CCDDFF"),
        Lr = gr("#B3CCFF"),
        _r = gr("#1A1A1A"),
        xr = (gr("#FAFAFA"), gr("#F4F4F4")),
        Sr = gr("#E8E8E8"),
        Ar = gr("#DDDDDD"),
        kr = gr("#BABABA"),
        Cr = gr("#A3A3A3"),
        Pr = gr("#757575"),
        Tr = (gr("#5E5E5E"), gr("#3C3C3C")),
        Ir = gr("#FFFFFF"),
        Rr = gr("#000000"),
        Or = gr("#F23030"),
        Nr = gr("#D92B2B"),
        Dr = gr("#BF2626"),
        Fr = gr("#911D1D"),
        Mr = (gr("#FEEBEB"), gr("#FCD6D6")),
        $r = gr("#FAACAC"),
        jr = (gr("#FF8000"), gr("#E57300"), gr("#CC6600"), gr("#FFF3E6")),
        zr = gr("#FFCC99"),
        Ur = gr("#FFB700"),
        Vr = (gr("#E5A500"), gr("#CC9200"), gr("#996E00")),
        Kr = (gr("#FFF8E6"), gr("#FFF1CC")),
        Hr = (gr("#FFE299"), gr("#00CC44"), gr("#00B23B"), gr("#009933"), gr("#007A29")),
        Br = (gr("#E6FAED"), gr("#CCF5DA")),
        Gr = gr("#99EBB4"),
        Yr = (gr("#0FC0C5"), gr("#0DA7AB"), gr("#0B8E91"), gr("#097376")),
        Zr = (gr("#E7F9FA"), gr("#CFF2F3")),
        Wr = (gr("#9FE6E8"), gr("#3D99F5"), gr("#3789DB"), gr("#3079C2"), gr("#255C93")),
        qr = (gr("#ECF5FE"), gr("#D8EBFD")),
        Xr = (gr("#B1D6FB"), gr("#7961F2"), gr("#6C57D9"), gr("#604DBF"), gr("#493A91")),
        Qr = (gr("#F2F0FE"), gr("#E4DFFC")),
        Jr =
          (gr("#C9C0FA"),
          gr("#E667E6"),
          gr("#CC5BCC"),
          gr("#B250B2"),
          gr("#8A3E8A"),
          gr("#FDF0FD"),
          gr("#F5C2F5"),
          gr("#FF5975"),
          gr("#E55069"),
          gr("#CC475E"),
          gr("#993546"),
          gr("#FFEFF2"),
          gr("#FFBDC8"),
          gr("#E32B24"),
          gr("#C92620"),
          gr("#B0211C"),
          gr("#0055FF"),
          gr("#0048D9"),
          gr("#003CB2"),
          gr("#FFB700"),
          gr("#E5A500"),
          gr("#CC9200"),
          gr("#996E00"),
          gr("#00D958"));
      gr("#00BF4D"),
        gr("#00A643"),
        gr("#008034"),
        gr("#0061FF"),
        gr("#1977F3"),
        gr("#4885ED"),
        gr("#DB3236"),
        gr("#C32AA3"),
        gr("#0077B5"),
        gr("#1ED760"),
        gr("#1DA1F2"),
        gr("#25D366"),
        gr("#D9252A"),
        mr(26, 26, 26, 0.8),
        mr(26, 26, 26, 0.5),
        mr(26, 26, 26, 0.3),
        mr(26, 26, 26, 0.1);
      const eo = [
          { key: "sm", min: 0 },
          { key: "md", min: 640 },
          { key: "lg", min: 1024 }
        ],
        to = (() => {
          const e = {};
          return (
            eo.forEach((t, n) => {
              const r = eo[n + 1],
                o = t.min;
              let i = null;
              r && (i = r.min - 1), (e[t.key] = { min: o, max: i });
            }),
            e
          );
        })();
      function no(e) {
        return to[e].min;
      }
      function ro(...e) {
        const t = e.slice(0);
        t.sort((e, t) => no(e) - no(t));
        let n = "";
        const r = (e, t) => ` (${e}: ${t}px)`;
        let o = !1;
        return (
          t.forEach((e, i) => {
            const a = t[i + 1],
              l = no(e),
              s = (function (e) {
                return to[e].max;
              })(e),
              c = a ? no(a) : Number.POSITIVE_INFINITY;
            let u = "",
              d = !1;
            o || (u += r("min-width", l)),
              null !== s && ((d = s + 1 === c), d || (u && (u += " and"), (u += r("max-width", s)))),
              u && (n && (n += o ? " and" : ","), (n += u)),
              (o = d);
          }),
          `@media${n}`
        );
      }
      const oo = ge`
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-stretch: 400;
`,
        io =
          (ge`
  ${oo}

  font-weight: 700;

  ${ro("sm")} {
    font-size: 48px;
    line-height: 56px;
  }

  ${ro("md")} {
    font-size: 64px;
    line-height: 80px;
  }

  ${ro("lg")} {
    font-size: 96px;
    line-height: 112px;
  }
`,
          ge`
  ${oo}

  font-weight: 700;

  ${ro("sm")} {
    font-size: 42px;
    line-height: 52px;
  }

  ${ro("md")} {
    font-size: 48px;
    line-height: 56px;
  }

  ${ro("lg")} {
    font-size: 64px;
    line-height: 80px;
  }
`,
          ge`
  ${oo}

  font-weight: 700;

  ${ro("sm")} {
    font-size: 32px;
    line-height: 40px;
  }

  ${ro("md")} {
    font-size: 36px;
    line-height: 48px;
  }

  ${ro("lg")} {
    font-size: 42px;
    line-height: 56px;
  }
`,
          ge`
  ${oo}

  font-weight: 700;

  ${ro("sm")} {
    font-size: 24px;
    line-height: 32px;
  }

  ${ro("md")} {
    font-size: 26px;
    line-height: 36px;
  }

  ${ro("lg")} {
    font-size: 32px;
    line-height: 40px;
  }
`,
          ge`
  ${oo}

  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
`),
        ao = ge`
  ${oo}

  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`,
        lo =
          (ge`
  ${oo}

  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
`,
          ge`
  ${oo}

  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
`,
          ge`
  ${oo}

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`),
        so = ge`
  ${oo}

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`,
        co = ge`
  ${oo}

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`,
        uo =
          (ge`
  ${oo}

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  text-transform: uppercase;
`,
          Re.div`
  overflow: hidden;

  ${({ size: e }) => ge`
    & > svg {
      display: block;
      width: ${e}px;
      height: ${e}px;
    }
  `}
`);
      function fo({ className: t, size: n, content: r, onClick: o, padding: i, transform: a }) {
        return e.createElement(uo, {
          className: t,
          dangerouslySetInnerHTML: { __html: r },
          style: { width: n, height: n, padding: i, transform: a },
          onClick: o,
          size: n
        });
      }
      const po = Re.button`
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;

  overflow: visible;
  background-color: red;
  user-select: none;
  background-color: transparent;
  text-decoration: inherit;
  color: inherit;

  /* Firefox */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;
      function ho(e) {
        if ("undefined" == typeof window) return !1;
        return new RegExp(`^https://${window.location.host}`).test(e);
      }
      const mo = Re.a`
  text-decoration: inherit;
  color: inherit;

  margin: 0;
`,
        go = e.forwardRef(
          ({ children: t, className: n, behavior: r, href: o, download: i, title: a, withNoFollow: l = !1, onClick: s }, c) => {
            const u = (function (e) {
                return { isSameDomain: "/" === e[0] || "#" === e[0] || ho(e), isMailTo: /^mailto:/.test(e) };
              })(o),
              d = (() => {
                switch (r) {
                  case "blank":
                    return "_blank";
                  case "default":
                    return;
                  case "auto":
                    return u.isMailTo || !u.isSameDomain ? "_blank" : void 0;
                  default:
                    return unreachable(r);
                }
              })(),
              f = (() => {
                const e = [];
                if (("_blank" !== d || u.isSameDomain || e.push("noopener", "noreferrer"), l && e.push("nofollow"), 0 !== e.length))
                  return e.join(" ");
              })();
            return e.createElement(mo, { className: n, ref: c, target: d, rel: f, href: o, download: i, title: a, onClick: s }, t);
          }
        );
      var vo = n(9395);
      const yo = Re.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Must go above parent border */
  position: absolute;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  top: -1px;
  left: -1px;

  border-radius: inherit;
  background: ${String(Ar)};
  color: ${String(vr)};

  ${({ layout: e }) =>
    "tertiary" === e &&
    ge`
      background: transparent;
    `}
`;
      function wo({ layout: t, className: n, ariaLabel: r }) {
        return e.createElement(
          yo,
          { layout: t, className: n, role: "status", "aria-label": r },
          e.createElement(fo, { size: 24, content: vo })
        );
      }
      var bo = n(1332);
      const Eo = Re.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Must go above parent border */
  position: absolute;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  top: -1px;
  left: -1px;

  border-radius: inherit;
  color: ${String(Ir)};
  background: ${String(Jr)};

  ${({ layout: e }) =>
    "tertiary" === e &&
    ge`
      background: transparent;
      color: ${String(Jr)};
    `}
`;
      function Lo({ layout: t, className: n, ariaLabel: r }) {
        return e.createElement(
          Eo,
          { layout: t, className: n, role: "status", "aria-label": r },
          e.createElement(fo, { size: 24, content: bo })
        );
      }
      var _o = n(6011);
      ge`
  box-shadow: 0px 0px 2px rgba(26, 26, 26, 0.2);
`,
        ge`
  box-shadow: 0px 0px 4px rgba(26, 26, 26, 0.2);
`,
        ge`
  box-shadow: 0px 0px 12px rgba(26, 26, 26, 0.2);
`,
        ge`
  box-shadow: 0px 0px 24px rgba(26, 26, 26, 0.2);
`;
      const xo = ge`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,
        So =
          (ge`
  filter: grayscale(1);

  &::after{
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${String(Ir)};
    opacity: 0.5;
    cursor: not-allowed;
    border-radius: inherit;
  }
`,
          ge`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`),
        Ao = Re.div``,
        ko = Re.div`
  display: flex;
  align-items: center;
`,
        Co = Re.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${({ layout: e, withIconOnly: t }) => ("tertiary" === e ? "0 4px" : t ? "0 8px" : "0 16px")};
  opacity: ${({ isHidden: e }) => (e ? 0 : 1)};

  &:focus {
    outline: none;
  }

  & > :not(:first-child) {
    padding-left: 4px;
  }
`,
        Po = Re.span`
  ${So}
  text-transform: capitalize;
`;
      function To({ layout: t, label: n, leftIcon: r, rightIcon: o, withDropdownIcon: i = !1, isHidden: a = !1 }) {
        return e.createElement(
          Co,
          { layout: t, isHidden: a, "aria-hidden": a, tabIndex: -1, withIconOnly: !n },
          void 0 !== r && e.createElement(Ao, null, e.createElement(fo, { size: 24, content: r })),
          n && e.createElement(Po, null, n),
          void 0 !== o && e.createElement(Ao, null, e.createElement(fo, { size: 24, content: o })),
          i && e.createElement(ko, null, e.createElement(fo, { size: 16, content: _o }))
        );
      }
      const Io = ({ layout: e, isSelected: t, isDisabled: n }) => ge`
  position: relative;
  display: inline-flex;

  flex-direction: row;
  align-items: center;
  user-select: none;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0;

  cursor: ${n ? "not-allowed" : "pointer"};

  &:focus {
    outline: none;

    &::after {
      content: "";
      position: absolute;
      height: calc(100% + 2px);
      width: calc(100% + 2px);
      top: -5px;
      left: -5px;
      border: 4px solid ${String(Er)};
      border-radius: 8px;
    }
  }

  ${(() => {
    switch (e) {
      case "primary":
        return ge`
          ${so}

          height: 40px;
          background: ${String(vr)};
          color: ${String(Ir)};

          ${
            n
              ? ge`
                background: ${String(Ar)};
              `
              : ge`
                &:hover {
                  background: ${String(yr)};
                }
                &:active {
                  background: ${String(wr)};
                }
              `
          }
        `;
      case "secondary":
        return ge`
          ${so}

          height: 40px;
          background: transparent;
          color: ${String(vr)};
          border-color: ${String(vr)};

          ${
            n
              ? ge`
                background: ${String(Ar)};
                border-color: ${String(Ar)};
                color: ${String(Ir)};
              `
              : ge`
                &:hover {
                  background: ${String(yr)};
                  border-color: ${String(yr)};
                  color: ${String(Ir)};
                }
                &:active {
                  background: ${String(wr)};
                  border-color: ${String(wr)};
                  color: ${String(Ir)};
                }
              `
          }
        `;
      case "tertiary":
        return ge`
          ${lo}

          height: 24px;
          background: transparent;
          color: ${String(vr)};
          text-decoration: underline;

          ${
            n
              ? ge`
                color: ${String(kr)};
              `
              : ge`
                &:hover {
                  color: ${String(yr)};
                }
                &:active {
                  color: ${String(wr)};
                }
              `
          }
        `;
      case "solid":
        return ge`
          ${lo}

          height: 40px;
          background: ${String(t ? br : xr)};
          color: ${String(_r)};

          ${
            n
              ? ge`
                color: ${String(kr)};
                background: ${String(xr)};
              `
              : ge`
                &:hover {
                  background: ${String(t ? Er : Sr)};
                }
                &:active {
                  background: ${String(t ? Lr : Ar)};
                }
              `
          }
        `;
      case "outline":
        return ge`
          ${lo}

          height: 40px;
          background: ${String(t ? br : "transparent")};
          color: ${String(_r)};
          border-color: ${String(t ? br : Sr)};

          ${
            n
              ? ge`
                background: transparent;
                border-color: ${String(Sr)};
                color: ${String(kr)};
              `
              : ge`
                &:hover {
                  background: ${String(t ? Er : Sr)};
                  border-color: ${String(t ? Er : Sr)};
                }
                &:active {
                  background: ${String(t ? Lr : Ar)};
                  border-color: ${String(t ? Lr : Ar)};
                }
              `
          }
        `;
      case "ghost":
        return ge`
          ${lo}

          height: 40px;
          background: ${String(t ? br : "transparent")};
          color: ${String(_r)};

          ${
            n
              ? ge`
                background: transparent;
                color: ${String(kr)};
              `
              : ge`
                &:hover {
                  background: ${String(t ? Er : Sr)};
                }
                &:active {
                  background: ${String(t ? Lr : Ar)};
                }
              `
          }
        `;
      case "danger":
        return ge`
          ${so}

          height: 40px;
          background: ${String(Or)};
          color: ${String(Ir)};

          ${
            n
              ? ge`
                background: ${String(Ar)};
              `
              : ge`
                &:hover {
                  background: ${String(Nr)};
                }
                &:active {
                  background: ${String(Dr)};
                }
              `
          }
        `;
      case "inverted":
        return ge`
          ${so}

          height: 40px;
          background: ${String(Ir)};
          color: ${String(_r)};

          ${
            n
              ? ge`
                color: ${String(kr)};
              `
              : ge`
                &:hover {
                  background: ${String(xr)};
                }
                &:active {
                  background: ${String(Sr)};
                }
              `
          }
        `;
      default:
        throw new Error(`Button: unexpected Button layout ${e}`);
    }
  })()}
`,
        Ro = Re(po)(Io),
        Oo = Re(go)(Io),
        No = Re.div(Io),
        Do = e.forwardRef((t, n) => {
          switch (t.renderAs) {
            case "link": {
              const {
                layout: r,
                className: o,
                label: i,
                leftIcon: a,
                rightIcon: l,
                withDropdownIcon: s,
                isSelected: c = !1,
                withNoFollow: u = !1,
                href: d,
                behavior: f,
                download: p,
                onClick: h
              } = t;
              return e.createElement(
                Oo,
                {
                  ref: n,
                  className: o,
                  layout: r,
                  isSelected: c,
                  isDisabled: !1,
                  href: d,
                  behavior: f,
                  download: p,
                  onClick: h,
                  withNoFollow: u
                },
                e.createElement(To, { layout: r, leftIcon: a, rightIcon: l, withDropdownIcon: s, label: i })
              );
            }
            case "button": {
              const {
                  layout: r,
                  className: o,
                  label: i,
                  leftIcon: a,
                  rightIcon: l,
                  withDropdownIcon: s,
                  isSelected: c = !1,
                  status: u = "default",
                  isDisabled: d = !1,
                  onClick: f,
                  type: p = "submit"
                } = t,
                h = d || "default" !== u;
              return e.createElement(
                Ro,
                { ref: n, className: o, layout: r, isSelected: c, onClick: f, isDisabled: h, disabled: h, type: p },
                e.createElement(To, { layout: r, leftIcon: a, rightIcon: l, withDropdownIcon: s, label: i, isHidden: "default" !== u }),
                (() => {
                  if ("button" !== t.renderAs) return null;
                  const { status: n, layout: r } = t;
                  switch (n) {
                    case "success":
                      return e.createElement(Lo, { layout: r });
                    case "process":
                      return e.createElement(wo, { layout: r });
                    case "default":
                    case void 0:
                      return null;
                    default:
                      return unreachable(n);
                  }
                })()
              );
            }
            case "div": {
              const {
                layout: r,
                className: o,
                label: i,
                leftIcon: a,
                rightIcon: l,
                withDropdownIcon: s,
                isSelected: c = !1,
                isDisabled: u = !1
              } = t;
              return e.createElement(
                No,
                { ref: n, className: o, layout: r, isSelected: c, isDisabled: u },
                e.createElement(To, { layout: r, leftIcon: a, rightIcon: l, withDropdownIcon: s, label: i })
              );
            }
            default:
              return unreachable(t);
          }
        }),
        Fo = Re.input`
  ${co}
  color: ${String(_r)};
  display: block;

  width: 100%;
  height: 40px;

  box-sizing: border-box;
  padding: 6px;

  border: 0;
  border-radius: 0;
  outline: none;
  background: transparent;
  box-shadow: none; /* Firefox */

  &[type=number]::-webkit-outer-spin-button,
  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }

  /* Fix zoom on IOS devices when you press the input */
  @supports (-webkit-touch-callout: none) {
    &[type="text"], &[type="password"],
    &[type="datetime"], &[type="datetime-local"],
    &[type="date"], &[type="month"], &[type="time"],
    &[type="week"], &[type="number"], &[type="email"],
    &[type="url"]{ font-size: 16px; }
  }
`,
        Mo = Re.div`
  border: 1px solid ${String(Ar)};
  border-radius: 4px;
`;
      function $o({
        name: t,
        value: n,
        type: r,
        defaultValue: o,
        placeholder: i,
        tabIndex: a,
        disabled: l,
        required: s,
        autoFocus: c,
        withoutAutocomplete: u = !1,
        onChange: d,
        onKeyPress: f,
        onFocus: p,
        onBlur: h
      }) {
        return e.createElement(
          Mo,
          null,
          e.createElement(Fo, {
            required: s,
            name: t,
            type: r,
            value: n,
            defaultValue: o,
            placeholder: i,
            tabIndex: a,
            disabled: l,
            autoFocus: c,
            autoComplete: u ? "off" : "on",
            onChange: d,
            onKeyPress: f,
            onFocus: p,
            onBlur: h
          })
        );
      }
      n(1375);
      Re.img`
  display: block;
  width: 100%;
  height: 100%;
`,
        Re.div`
  ${({ size: e }) => ge`
    width: ${e}px;
    height: ${e}px;
  `}
`;
      const jo = Re.div`
  display: flex;
  height: 30px;
`,
        zo = Re.button`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0 8px;
  margin-right: -1px;

  font-size: 14px;
  text-align: center;
  color: #212121;

  background: #ffffff;
  border: 1px solid #e0e0e0;
  outline: 0;

  cursor: pointer;
  user-select: none;

  transition: background 0.2s, border 0.2s, color 0.2s;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  ${({ selected: e, disabled: t }) =>
    !e &&
    !t &&
    ge`
      &:hover,
      &:focus {
        background: rgba(0, 0, 0, 0.05);
      }
      &:active {
        background: rgba(0, 0, 0, 0.1);
      }
    `};

  ${({ selected: e }) =>
    e &&
    ge`
      background: #215fff;
      border-color: #215fff;
      color: #ffffff;
      z-index: 1;
    `}

  ${({ disabled: e, selected: t }) =>
    e &&
    ge`
      cursor: default;
      background: #efefef;

      ${() =>
        t &&
        ge`
          background: #ababab;
          border-color: #ababab;
        `}
    `};
`;
      function Uo({ options: t, value: n, disabled: r, onChange: o }) {
        return e.createElement(
          jo,
          null,
          t.map((t) =>
            e.createElement(
              zo,
              {
                key: t.key,
                selected: n === t.key,
                disabled: r,
                onClick: () => {
                  return (e = t.key), void (r || e === n || o(e));
                  var e;
                }
              },
              t.label
            )
          )
        );
      }
      const Vo = Re.button`
  position: relative;
  width: 48px;

  border: 0;
  border-radius: 0;
  background: none;
  outline: 0;

  cursor: pointer;
  user-select: none;

  ${({ disabled: e }) =>
    e &&
    ge`
      cursor: default;
    `}
`,
        Ko = Re.div`
  position: relative;
  height: 21px;
`,
        Ho = Re.div`
  position: absolute;

  width: 32px;
  height: 13px;

  left: 0;
  top: 4px;

  background-color: #bdbdbd;
  border-radius: 12px;

  transition: background 0.2s;

  ${Vo}:focus & {
    background: #9c9c9c;
  }

  ${({ checked: e }) =>
    e &&
    ge`
      background-color: #7098fb;

      ${Vo}:focus & {
        background-color: #648ef3;
      }
    `}

  ${({ disabled: e }) =>
    e &&
    ge`
      background: #dedede;
    `};
`,
        Bo = Re.div`
  position: absolute;

  width: 21px;
  height: 21px;

  left: 0;
  top: 0;

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border-radius: 50%;

  transform: translateX(-8px) translateZ(0);
  transition: background 0.2s, transform 0.2s;

  ${Vo}:focus & {
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
  }

  ${({ checked: e }) =>
    e &&
    ge`
      background-color: #215fff;
      border-color: #215fff;
      transform: translateX(19px);
    `}

  ${({ disabled: e }) =>
    e &&
    ge`
      background: #efefef;
    `};

  ${({ disabled: e, checked: t }) =>
    e &&
    t &&
    ge`
      background: #ababab;
    `};
`;
      function Go({ checked: t, disabled: n = !1, onChange: r }) {
        const o = e.useCallback(() => {
          n || r(!t);
        }, [n, t, r]);
        return e.createElement(
          Vo,
          { disabled: n, onClick: o },
          e.createElement(Ko, null, e.createElement(Ho, { checked: t, disabled: n }), e.createElement(Bo, { checked: t, disabled: n }))
        );
      }
      const Yo = Re.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  margin: 0;
  padding: 0 8px;
  height: 20px;

  border-radius: 20px;

  user-select: none;

  ${oo}
  font-size: 12px;
  line-height: 12px;
  white-space: nowrap;

  ${({ layout: e }) => {
    switch (e) {
      case "new":
        return ge`
          background: ${String(_r)};
          color: ${String(Ir)};
          font-weight: 700;
        `;
      case "pro-feature":
        return ge`
          background: ${String(Ur)};
          color: ${String(_r)};
          font-weight: 700;
          text-transform: uppercase;
        `;
      default:
        throw new Error(`Cannot render Pill: unexpected layout ${e}`);
    }
  }}
`,
        Zo = Re.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  margin: 0;
  padding: 0 8px;
  height: 20px;

  border-radius: 20px;

  user-select: none;

  ${oo}
  font-size: 12px;
  line-height: 12px;
  white-space: nowrap;

  ${({ variant: e }) => ge`
    height: 24px;
    font-weight: 700;
    ${((e) => {
      switch (e) {
        case "green":
          return ge`
        background: ${String([Br])};
        color: ${String(Hr)};
      `;
        case "azure":
          return ge`
        background: ${String(qr)};
        color: ${String(Wr)};
      `;
        case "yellow":
          return ge`
        background: ${String(Kr)};
        color: ${String(Vr)};
      `;
        case "red":
          return ge`
        background: ${String(Mr)};
        color: ${String(Fr)};
      `;
        case "purple":
          return ge`
        background: ${String(Qr)};
        color: ${String(Xr)};
      `;
        case "turquoise":
          return ge`
        background: ${String(Zr)};
        color: ${String(Yr)};
      `;
        case "gray":
          return ge`
        background: ${String(Ar)};
        color: ${String(Tr)};
      `;
        default:
          throw new Error(`Variant unexpected: ${e}`);
      }
    })(e)};
  `}
`,
        Wo = Re.div`
  margin-right: 4px;
`;
      e.forwardRef((t, n) => {
        if ("generic" === t.layout) {
          const { variant: r, leftIcon: o, label: i } = t;
          return e.createElement(
            Zo,
            { ref: n, variant: r || "gray" },
            void 0 !== o && e.createElement(Wo, null, e.createElement(fo, { size: 16, content: o })),
            i
          );
        }
        const { label: r, layout: o } = t;
        return e.createElement(Yo, { ref: n, layout: o }, r);
      }),
        Re.div`
  display: flex;
  padding: 2px;

  /* Since z-index: -1 is used for the focus outline down below, it is better to promote this component to a new layer to avoid issues */
  z-index: 0;
`,
        Re.div`
  height: 20px;
  width: 20px;
  min-width: 20px;
  position: relative;
  cursor: ${({ isDisabled: e }) => (e ? "not-allowed" : "pointer")};
  border: 1px solid;
  border-radius: 50%;
  border-color: ${({ isOn: e }) => String(e ? vr : Cr)};

  /* Middle blue circle */
  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: ${({ isOn: e }) => String(e ? vr : "transparent")};
    height: 14px;
    width: 14px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
  }

  /* Custom focus outline */
  &::before {
    content: "";
    z-index: -1;
    display: ${({ isInputFocused: e }) => (e ? "block" : "none")};
    position: absolute;
    height: 24px;
    width: 24px;
    top: -3px;
    left: -3px;
    border-radius: 50%;
    background-color: ${String(Lr)};
  }

  &:hover {
    ${({ isDisabled: e, isOn: t }) =>
      !e &&
      !t &&
      ge`
        border-color: ${String(_r)};

        &::after {
          background-color: "transparent";
        }
      `}
  }

  &:active {
    ${({ isDisabled: e, isOn: t }) =>
      !e &&
      !t &&
      ge`
        border-color: ${String(_r)};
        background-color: ${String(Sr)};

        &::after {
          background-color: "transparent";
        }
      `}
  }

  ${({ isDisabled: e, isOn: t }) =>
    e &&
    ge`
      border-color: ${String(Sr)};

      &::after {
        background-color: ${String(t ? Sr : "transparent")};
      }
    `}

  ${({ isInputFocused: e, isOn: t }) =>
    e &&
    ge`
      border-color: ${String(vr)};
      background-color: ${String(t ? "transparent" : Ir)};
    `}
`,
        Re.input`
  ${xo};
`;
      var qo = n(7295),
        Xo = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      function Qo(e) {
        return Xo(this, void 0, void 0, function* () {
          try {
            yield Hn("trackFromSW:", e), yield chrome.runtime.sendMessage(chrome.runtime.id, { request: Mn, event: e });
          } catch (t) {
            yield Hn("trackFromSW error:", t, e), yield Kn("trackFromSW error:", t, e);
          }
        });
      }
      const Jo = Re.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${String(xr)};
  position: relative;
  width: 280px;
  min-height: 580px;
  margin: auto;
  border: 1px solid ${String(Ar)};
`,
        ei = Re.div`
  display: flex;
  justify-content: center;
`,
        ti = Re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  color: ${String(_r)};
`,
        ni = Re.img`
  width: auto;
  min-height: 150px;
`,
        ri = Re.div`
  ${io}
  padding: 6px 0;
`,
        oi = Re.div`
  ${lo}
  text-align: center;
`,
        ii = Re.div`
  padding: 24px 0;
`;
      function ai() {
        return (
          e.useEffect(() => {
            Qo({ event: "chrome.action.error_screen_seen" });
          }, []),
          e.createElement(
            Jo,
            null,
            e.createElement(
              ei,
              null,
              e.createElement(
                ti,
                null,
                e.createElement(ni, { src: qo, alt: "Confused PDF character" }),
                e.createElement(ri, null, chrome.i18n.getMessage("uh_something_wrong")),
                e.createElement(oi, null, "Something went wrong, Smallpdf has crashed. Please refresh the page to continue."),
                e.createElement(
                  ii,
                  null,
                  e.createElement(Do, {
                    renderAs: "button",
                    layout: "secondary",
                    onClick: () => {
                      window.location.reload();
                    },
                    label: "Refresh page"
                  })
                ),
                e.createElement(oi, null, "Should this error persist, contact our support.")
              )
            )
          )
        );
      }
      function li(e) {
        try {
          e instanceof Error && Ft({ event: "chrome.system.unhandled_error_seen", customString1: (t = e.toString()) });
        } catch (t) {
          Vn(t);
        }
        var t;
      }
      const si = { error: null };
      class ci extends e.Component {
        constructor() {
          super(...arguments),
            (this.state = si),
            (this.resetErrorBoundary = (...e) => {
              var t, n;
              null === (n = (t = this.props).onReset) || void 0 === n || n.call(t, ...e), this.reset();
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidUpdate(e, t) {
          var n, r;
          const { error: o } = this.state,
            { resetKeys: i } = this.props;
          null !== o &&
            null !== t.error &&
            ((e = [], t = []) => e.length !== t.length || e.some((e, n) => !Object.is(e, t[n])))(e.resetKeys, i) &&
            (null === (r = (n = this.props).onResetKeysChange) || void 0 === r || r.call(n, e.resetKeys, i), this.reset());
        }
        componentDidCatch(e, t) {
          var n, r;
          li(e), null === (r = (n = this.props).onError) || void 0 === r || r.call(n, e, t);
        }
        reset() {
          this.setState(si);
        }
        render() {
          const { error: t } = this.state,
            { fallbackRender: n, FallbackComponent: r, fallback: o } = this.props;
          if (null !== t) {
            const i = { error: t, resetErrorBoundary: this.resetErrorBoundary };
            if (e.isValidElement(o)) return o;
            if ("function" == typeof n) return n(i);
            if (r) return e.createElement(r, Object.assign({}, i));
            throw new Error("ErrorBoundary requires either a fallback, fallbackRender, or FallbackComponent prop");
          }
          return this.props.children;
        }
      }
      var ui = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      function di() {
        return ui(this, void 0, void 0, function* () {
          return !(yield We());
        });
      }
      function fi() {
        return ui(this, void 0, void 0, function* () {
          return Zn(Bn.PROFILE, null);
        });
      }
      var pi = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const hi = e.createContext({
        isLimitationReached: !1,
        isPro: !1,
        tasksCount: 0,
        isLoggedIn: !1,
        isLimitationVisible: !1,
        isLogInVisible: !1,
        isAccountVisible: !1,
        profile: {},
        showLimitation: lt,
        hideLimitation: lt,
        showAccount: lt,
        hideAccount: lt,
        showLogIn: lt,
        hideLogIn: lt,
        authenticate: (e, t, n) => {},
        logOutUser: lt
      });
      function mi({ children: t }) {
        const [n, r] = e.useState(!1),
          [o, i] = e.useState(!1),
          [a, l] = e.useState(0),
          [s, c] = e.useState(!1),
          [u, d] = e.useState(!1),
          [f, p] = e.useState(!1),
          [h, m] = e.useState(!1),
          [g, v] = e.useState(null),
          y = () =>
            pi(this, void 0, void 0, function* () {
              yield Qe(), i(!0);
              (yield Nt()) && (yield fr());
            }),
          w = (e) =>
            pi(this, void 0, void 0, function* () {
              if (e[Bn.USER_ACTIVE_PRO]) {
                const e = yield Nt();
                r(e);
              }
              if (e[Gn.TasksCount]) {
                const e = yield dr();
                l(e), c(e >= 2);
              }
              if (e[Bn.PROFILE]) {
                const e = yield fi();
                v(e);
              }
              if (e[Bn.ACCESS_TOKEN] || e[Bn.REFRESH_TOKEN]) {
                (yield di()) && (yield y());
              }
            }),
          b = () =>
            pi(this, void 0, void 0, function* () {
              const e = yield di();
              i(e);
              const t = yield Nt();
              r(t);
              const n = yield fi();
              v(n);
              const o = yield dr();
              l(o), c(o >= 2);
            }),
          E = {
            isLimitationReached: s,
            isPro: n,
            tasksCount: a,
            isLoggedIn: o,
            isLimitationVisible: u,
            showLimitation: () => {
              d(!0);
            },
            hideLimitation: () => {
              d(!1);
            },
            isLogInVisible: f,
            showAccount: () => {
              m(!0);
            },
            hideAccount: () => {
              m(!1);
            },
            isAccountVisible: h,
            showLogIn: () => {
              p(!0), d(!1);
            },
            hideLogIn: () => {
              p(!1);
            },
            authenticate: (e, t, n) =>
              pi(this, void 0, void 0, function* () {
                try {
                  e === $e.CREDENTIALS ? (yield ct(t, n), yield y()) : yield ut(e);
                } catch (e) {
                  throw (i(!1), e);
                }
              }),
            logOutUser: () =>
              pi(this, void 0, void 0, function* () {
                yield dt(), m(!1), i(!1);
              }),
            profile: g
          };
        return (
          e.useEffect(
            () => (
              b(),
              chrome.storage.onChanged.addListener(w),
              () => {
                chrome.storage.onChanged.removeListener(w);
              }
            ),
            []
          ),
          e.createElement(hi.Provider, { value: E }, t)
        );
      }
      var gi = n(3869);
      const vi = Ie`
  1% {
    transform: scale(1.25);
  }

  10% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.25);
  }

  18% {
    transform: scale(1);
  }
`,
        yi = Re(fo).attrs({ size: 16, content: gi })`
  color: ${String(Or)};
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${vi} 2s infinite;
  }
`,
        wi = Re.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background-color: ${String(xr)};
`,
        bi = Re.a`
  color: ${String(Rr)};
  text-decoration: none;
`,
        Ei = Re.div`
  ${lo}
  color: ${String(_r)};
  flex: 1 1 auto;
`,
        Li = Re.div`
  ${lo}
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`,
        _i = Re.div`
  ${lo}
  color: ${String(_r)};

  &:hover {
    color: ${String(Pr)};
  }

  margin: 0 20px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
      function xi() {
        return e.createElement(
          wi,
          null,
          e.createElement(
            Ei,
            null,
            "©",
            " ",
            new Date().getFullYear(),
            " ",
            "Smallpdf AG",
            " — ",
            "Made with",
            e.createElement(yi, null),
            "for the people of the internet."
          ),
          e.createElement(
            Li,
            null,
            e.createElement(
              _i,
              null,
              e.createElement(bi, { href: "https://smallpdf.com/privacy?utm_source=ce_generic" }, "Privacy & Terms")
            ),
            e.createElement(
              _i,
              null,
              e.createElement(bi, { href: "https://smallpdf.com/support?utm_source=ce_generic", target: "_blank" }, "Contact Us")
            )
          )
        );
      }
      var Si = n(5973);
      const Ai = Re.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 12px;
  background: white;
  box-shadow: 0 0 2px 0 ${"rgba(0, 0, 0, 0.2)"};
`,
        ki = Re.img`
  height: 24px;
  width: auto;
`;
      function Ci() {
        return e.createElement(Ai, null, e.createElement(ki, { src: Si, alt: "Smallpdf" }));
      }
      const Pi = Re.div`
  display: flex;
  flex-direction: center;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid transparent;
  border-bottom: none;
  padding: 4px 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;

  ${({ isSelected: e }) =>
    e &&
    ge`
    border-color: ${String(Cr)};
  `}
`,
        Ti = Re.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid ${String(Cr)};
  width: 100%;
`,
        Ii = Re.div`
  padding: 12px 0;
`,
        Ri = Re.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`,
        Oi = Re.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  padding: 24px;

  ${ro("lg")} {
    width: 800px;
  }
`,
        Ni = Re.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;

  ${ro("lg")} {
    align-items: center;
  }
`,
        Di = Re.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 100vh;
`;
      function Fi({ tabs: t, initialTabIndex: n = 0 }) {
        const [r, o] = e.useState(n),
          i = [],
          a = [];
        Object.keys(t).forEach((e) => {
          const n = t[e];
          i.push(e), a.push(n);
        });
        const l = (e) => () => {
          o(e);
        };
        return e.createElement(
          Di,
          null,
          e.createElement(Ci, null),
          e.createElement(
            Ni,
            null,
            e.createElement(
              Oi,
              null,
              e.createElement(
                Ti,
                null,
                i.map((t, n) => e.createElement(Pi, { key: t, isSelected: n === r, onClick: l(n) }, t))
              ),
              e.createElement(
                Ri,
                null,
                a.map((t, n) => (n === r ? e.createElement(Ii, { key: i[n] }, t) : null))
              )
            )
          ),
          e.createElement(xi, null)
        );
      }
      const Mi = Re.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 8px;
`,
        $i = Re.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 520px;
`;
      function ji({ onSubmit: t }) {
        const [n, r] = e.useState(""),
          [o, i] = e.useState("");
        return e.createElement(
          $i,
          {
            action: "",
            onSubmit: (e) => {
              e.preventDefault(), t(n, o);
            }
          },
          e.createElement(
            Mi,
            null,
            e.createElement($o, {
              type: "email",
              onChange: (e) => {
                r(e.target.value);
              },
              placeholder: "email",
              value: n,
              name: "login[username]",
              required: !0
            })
          ),
          e.createElement(
            Mi,
            null,
            e.createElement($o, {
              type: "password",
              onChange: (e) => {
                i(e.target.value);
              },
              placeholder: "password",
              value: o,
              name: "login[password]",
              required: !0
            })
          ),
          e.createElement(Mi, null, e.createElement(Do, { renderAs: "button", layout: "primary", label: "Log In", type: "submit" }))
        );
      }
      const zi = Re.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 48px;
  height: 48px;
  
  div {
    animation: cubeAnimation 1600ms ease 0ms infinite;
  }

  div:nth-child(7) {
    animation-delay: 0ms; 
  }
  
  div:nth-child(4) {
    animation-delay: 100ms; 
  }
  div:nth-child(8) {
    animation-delay: 100ms; 
  }
  
  div:nth-child(1) {
    animation-delay: 200ms; 
  }
  div:nth-child(5) {
    animation-delay: 200ms; 
  }
  div:nth-child(9) {
    animation-delay: 200ms; 
  }
  
  div:nth-child(2) {
    animation-delay: 300ms; 
  }
  div:nth-child(6) {
    animation-delay: 300ms; 
  }
  
  div:nth-child(3) {
    animation-delay: 400ms; 
  }

  @keyframes cubeAnimation {
    0% {
      transform: scale(1);
    }
    75% {
      transform: scale(0);
    }  
    100% {
      transform: scale(1);
    }
  }
`,
        Ui = Re.div`
  width: 33%;
  height: 33%;
  background-color: ${({ color: e }) => e};
`,
        Vi = [jt, zt, Ut, Kt, Yt, Vt, Ht, Bt, Gt];
      function Ki() {
        return e.createElement(
          zi,
          null,
          Vi.map((t) => e.createElement(Ui, { key: t.toString(), color: t.toString() }))
        );
      }
      const Hi = Re.div`
  border: 1px solid transparent;
  padding: 4px 8px;
  border-radius: 8px;
  color: ${String(_r)};

  ${({ status: e }) => {
    switch (e) {
      case "valid":
        return ge`
          border-color: ${String(Gr)};
          background-color: ${String(Br)};
        `;
      case "expired":
        return ge`
          border-color: ${String(zr)};
          background-color: ${String(jr)};
        `;
      case "invalid":
        return ge`
          border-color: ${String($r)};
          background-color: ${String(Mr)};
        `;
      default:
        return null;
    }
  }}
`,
        Bi = Re.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,
        Gi = Re.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,
        Yi = Re.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
      var Zi = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const Wi = Ie`
  0% {
    transform: translateY(0);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
`,
        qi = Re.div`
  position: absolute;
  display: flex;

  right: 0;
  justify-content: center;
  align-items: center;

  top: 0;

  padding: 2px 6px;
  border-radius: 4px;
  background: #2bd982;

  text-align: center;
  font-size: 14px;
  color: white;

  transform: translateY(-30px);
  opacity: 0;

  pointer-events: none;

  animation: ${Wi} 1.5s ease-out;
`,
        Xi = Re.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,
        Qi = Re.div`
  width: 100%;
  border-bottom: 1px solid ${String(Cr)};
  padding-bottom: 12px;
  margin-bottom: 12px;
`,
        Ji = Re.div`
  ${ao}
  color: ${String(_r)};
  padding-bottom: 12px;
  position: relative;
`,
        ea = Re.div`
  ${co}
  font-weight: 700;
`,
        ta = Re.div``,
        na = Re.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
      function ra() {
        var t, n, r, o, i, a, l, s, c, u, d, f, p, h;
        const m = e.useRef(null),
          g = e.useRef(null),
          [v, y] = e.useState(!1),
          [w, b] = e.useState(!1),
          [E, L] = e.useState(it.IDLE),
          [_, x] = e.useState(it.IDLE),
          [S, A] = e.useState(!1),
          k = () =>
            Zi(this, void 0, void 0, function* () {
              x(it.PENDING), (m.current = yield Be()), (g.current = yield Ye());
              const e = yield Ze(),
                t = yield We();
              console.log("readableTokens.current", g.current), y(e), b(t), x(it.IDLE), yield Qe();
            }),
          C = (e) => () => {
            navigator.clipboard.writeText(e), A(!0), setTimeout(() => A(!1), 1800);
            const t = window.getSelection();
            t && t.removeAllRanges();
          },
          P = (t) =>
            t
              ? t.expireAt -
                  (function (e) {
                    return 1e3 * e;
                  })(160) <=
                Date.now()
                ? e.createElement(Hi, { status: "expired" }, "Expired")
                : e.createElement(Hi, { status: "valid" }, "Valid")
              : e.createElement(Hi, { status: "invalid" }, "Invalid");
        return (
          e.useEffect(() => {
            k();
          }, []),
          e.createElement(
            na,
            null,
            e.createElement(Ji, null, e.createElement("span", null, "Tokens"), S && e.createElement(qi, null, "Copied!")),
            e.createElement(
              Bi,
              null,
              e.createElement(
                Gi,
                null,
                e.createElement(ea, null, "Access Token expiration date:"),
                e.createElement(Hi, null, P(null === (t = g.current) || void 0 === t ? void 0 : t.accessToken)),
                e.createElement(
                  ta,
                  null,
                  new Date(
                    null === (r = null === (n = g.current) || void 0 === n ? void 0 : n.accessToken) || void 0 === r ? void 0 : r.expireAt
                  ).toUTCString()
                )
              ),
              (null === (i = null === (o = g.current) || void 0 === o ? void 0 : o.accessToken) || void 0 === i ? void 0 : i.value) &&
                e.createElement(
                  Yi,
                  null,
                  e.createElement(Do, {
                    renderAs: "button",
                    layout: "outline",
                    label: "Copy value",
                    onClick: C(
                      (null === (l = null === (a = g.current) || void 0 === a ? void 0 : a.accessToken) || void 0 === l
                        ? void 0
                        : l.value) || ""
                    )
                  })
                )
            ),
            e.createElement(
              Bi,
              null,
              e.createElement(
                Gi,
                null,
                e.createElement(ea, null, "Refresh Token expiration date:"),
                e.createElement(Hi, null, P(null === (s = g.current) || void 0 === s ? void 0 : s.refreshToken)),
                e.createElement(
                  ta,
                  null,
                  new Date(
                    null === (u = null === (c = g.current) || void 0 === c ? void 0 : c.refreshToken) || void 0 === u ? void 0 : u.expireAt
                  ).toUTCString()
                )
              ),
              (null === (f = null === (d = g.current) || void 0 === d ? void 0 : d.refreshToken) || void 0 === f ? void 0 : f.value) &&
                e.createElement(
                  Yi,
                  null,
                  e.createElement(Do, {
                    renderAs: "button",
                    layout: "outline",
                    label: "Copy value",
                    onClick: C(
                      (null === (h = null === (p = g.current) || void 0 === p ? void 0 : p.refreshToken) || void 0 === h
                        ? void 0
                        : h.value) || ""
                    )
                  })
                )
            ),
            e.createElement(Qi, null),
            e.createElement(Ji, null, "Test Authentication"),
            e.createElement(
              Bi,
              null,
              e.createElement(ea, null, "Test authenticated request (", E, "):"),
              e.createElement(Do, {
                renderAs: "button",
                layout: "outline",
                label: "Test auth request",
                onClick: () =>
                  Zi(this, void 0, void 0, function* () {
                    L(it.PENDING);
                    try {
                      yield (() =>
                        Zi(this, void 0, void 0, function* () {
                          const e = yield yt("https://filestorage.smallpdf.com/v2/files", {
                              headers: { Accept: "application/json", Pragma: "no-cache" }
                            }),
                            t = yield e.json();
                          console.log("result", t);
                        }))(),
                        yield k(),
                        L(it.COMPLETED);
                    } catch (e) {
                      console.log("error", e), L(it.FAILED);
                    }
                  })
              })
            ),
            e.createElement(
              Bi,
              null,
              e.createElement(ea, null, "Test authenticated request (", E, "):"),
              e.createElement(Do, {
                renderAs: "button",
                layout: "outline",
                label: "Get pro account",
                onClick: () =>
                  Zi(this, void 0, void 0, function* () {
                    L(it.PENDING);
                    try {
                      yield (() =>
                        Zi(this, void 0, void 0, function* () {
                          const e = yield yt(`${gt}/pro/account`, { headers: { Accept: "application/json" } }),
                            t = yield e.json();
                          console.log("result", t);
                        }))(),
                        yield k(),
                        L(it.COMPLETED);
                    } catch (e) {
                      console.log("error", e), L(it.FAILED);
                    }
                  })
              })
            ),
            e.createElement(
              Bi,
              null,
              e.createElement(ea, null, "Refresh access token:"),
              e.createElement(Do, {
                renderAs: "button",
                isDisabled: w,
                layout: "outline",
                label: "refresh access token",
                onClick: () =>
                  Zi(this, void 0, void 0, function* () {
                    try {
                      x(it.PENDING), yield ft(), yield k(), x(it.IDLE);
                    } catch (e) {
                      console.log("error", e), x(it.FAILED);
                    }
                  })
              })
            ),
            e.createElement(Qi, null),
            e.createElement(Ji, null, "Login/Signup"),
            _ === it.PENDING && e.createElement(Ki, null),
            _ !== it.PENDING &&
              e.createElement(
                e.Fragment,
                null,
                !w &&
                  e.createElement(
                    Bi,
                    null,
                    e.createElement(ea, null, "Logout:"),
                    e.createElement(Do, {
                      renderAs: "button",
                      layout: "outline",
                      label: "Logout",
                      onClick: () =>
                        Zi(this, void 0, void 0, function* () {
                          x(it.PENDING), yield dt(), yield k(), x(it.IDLE);
                        })
                    })
                  ),
                v &&
                  e.createElement(
                    "div",
                    null,
                    e.createElement(
                      Xi,
                      null,
                      e.createElement(
                        Bi,
                        null,
                        e.createElement(Do, {
                          renderAs: "button",
                          layout: "outline",
                          label: "log in with Google",
                          onClick: () =>
                            Zi(this, void 0, void 0, function* () {
                              x(it.PENDING);
                              try {
                                yield ut($e.GOOGLE), yield k(), x(it.IDLE);
                              } catch (e) {
                                console.log(e), x(it.FAILED);
                              }
                            })
                        })
                      ),
                      e.createElement(
                        Bi,
                        null,
                        e.createElement(Do, {
                          renderAs: "button",
                          layout: "outline",
                          label: "log in with Facebook",
                          onClick: () =>
                            Zi(this, void 0, void 0, function* () {
                              x(it.PENDING);
                              try {
                                yield ut($e.FACEBOOK), yield k(), x(it.IDLE);
                              } catch (e) {
                                console.log(e), x(it.FAILED);
                              }
                            })
                        })
                      )
                    ),
                    e.createElement(ji, {
                      onSubmit: (e, t) =>
                        Zi(this, void 0, void 0, function* () {
                          x(it.PENDING);
                          try {
                            yield ct(e, t), yield k(), x(it.IDLE);
                          } catch (e) {
                            console.log(e), x(it.FAILED);
                          }
                        })
                    })
                  ),
                _ === it.FAILED && e.createElement("div", null, "Error")
              )
          )
        );
      }
      var oa,
        ia,
        aa = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      !(function (e) {
        e.TOOL_PICKER = "ce_tool_picker";
      })(oa || (oa = {})),
        (function (e) {
          (e.ORIGINAL = "original"),
            (e.VARIANT = "variant"),
            (e.VARIANT_1 = "variant_1"),
            (e.VARIANT_2 = "variant_2"),
            (e.VARIANT_3 = "variant_3"),
            (e.VARIANT_4 = "variant_4");
        })(ia || (ia = {}));
      const la = [
        {
          key: oa.TOOL_PICKER,
          segments: { [ia.ORIGINAL]: 0.5, [ia.VARIANT]: 0.5 },
          version: 1,
          keepSegmented: !0,
          isSegmentationEnabled: () =>
            aa(void 0, void 0, void 0, function* () {
              return !0;
            }),
          isActive: () =>
            aa(void 0, void 0, void 0, function* () {
              return !0;
            })
        }
      ];
      var sa = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      function ca(e) {
        return sa(this, void 0, void 0, function* () {
          return e.version > 1 ? `${e.key}_v${e.version}` : e.key;
        });
      }
      function ua(e) {
        return la.find((t) => t.key === e);
      }
      function da(e) {
        const t = Object.keys(e.segments),
          n = Object.values(e.segments).map((e) => (null != e ? e : 0)),
          r = n.reduce((e, t) => e + t, 0);
        let o = 0;
        const i = n.map((e) => ((o = e + o), o)),
          a = Math.random() * r;
        return t[i.findIndex((e) => e > a)];
      }
      function fa(e) {
        return sa(this, void 0, void 0, function* () {
          if (!ua(e)) return !1;
          const t = yield Xn(Gn.Experiments, {});
          return !!Object.keys(t).find((t) => t === e);
        });
      }
      function pa() {
        return sa(this, void 0, void 0, function* () {
          const e = yield Xn(Gn.Experiments, {});
          return Object.keys(e)
            .filter((e) =>
              sa(this, void 0, void 0, function* () {
                return (function (e) {
                  return sa(this, void 0, void 0, function* () {
                    const t = ua(e);
                    return !!t && t.isActive();
                  });
                })(e);
              })
            )
            .reduce((t, n) => Object.assign(Object.assign({}, t), { [n]: e[n] }), {});
        });
      }
      function ha(e) {
        var t;
        return sa(this, void 0, void 0, function* () {
          if (!(yield ua(e))) return ia.ORIGINAL;
          const n = yield Xn(Gn.Experiments, {});
          return (null === (t = n[e]) || void 0 === t ? void 0 : t.segment) || ia.ORIGINAL;
        });
      }
      function ma(e) {
        return sa(this, void 0, void 0, function* () {
          return navigator.locks.request(Et, { ifAvailable: !0 }, (t) =>
            sa(this, void 0, void 0, function* () {
              if ((null == t ? void 0 : t.name) !== Et) return ia.ORIGINAL;
              const n = ua(e);
              if (!n) return Kn(`triggerAB: experiment ${e} undefined`), ia.ORIGINAL;
              if (yield fa(e)) {
                const t = yield (function (e) {
                  return sa(this, void 0, void 0, function* () {
                    return (yield pa())[e];
                  });
                })(e);
                if (t && n.version > t.version && n.keepSegmented) return ha(e);
                if (t && n.version === t.version) return ha(e);
              }
              const r = yield n.isActive(),
                o = yield n.isSegmentationEnabled();
              if (!r || !o) return ia.ORIGINAL;
              const i = da(n),
                a = yield Xn(Gn.Experiments, {}),
                l = yield ca(n),
                s = Object.assign(Object.assign({}, a), { [e]: { segment: i, version: n.version, name: l } });
              var c, u;
              return (
                yield Qn({ [Gn.Experiments]: s }),
                Kn(`triggerAB: ${l} -> ${i}`),
                yield chrome.runtime.sendMessage(chrome.runtime.id, {
                  request: Mn,
                  event: ((c = l), (u = i), { event: "web.ab.sample", customString1: c, customString2: u })
                }),
                i
              );
            })
          );
        });
      }
      var ga = n(8638),
        va = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      const ya = Re.div`
  position: relative;
  display: flex;

  min-height: 42px;
  box-sizing: border-box;
  padding: 6px 12px;

  background: white;
  border-radius: 4px;

  &:nth-child(odd) {
    background: #f5f5f5;
  }
`,
        wa = Re.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
`,
        ba = Re.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`,
        Ea = Re.div`
  padding: 2px 0;
  font-size: 12px;
  color: #9e9e9e;
`,
        La = Re.div`
  margin-right: 4px;

  font-size: 16px;
  color: #212121;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 700;
`,
        _a = Re.div`
  margin-right: 4px;

  font-size: 16px;
  color: #212121;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,
        xa = Ie`
  0% {
    transform: translateY(0);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
`,
        Sa = Re.div`
  position: absolute;
  display: flex;

  justify-content: center;
  align-items: center;

  top: 0;
  left: 30px;

  padding: 2px 6px;
  border-radius: 4px;
  background: #2BD982;

  text-align: center;
  font-size: 14px;
  color: white;

  transform: translateY(-30px);
  opacity: 0;

  pointer-events: none;

  animation: ${xa} 1.5s ease-out;
`,
        Aa = Re.div`
  display: none;
  margin: 0 4px;
  cursor: pointer;
  color: ${String(_r)};

  ${ya}:hover & {
    display: block;
  }
`,
        ka = Re.img.attrs(() => ({ src: ga, alt: "Untrigger icon" }))`
  display: block;
  width: 8px;
  height: 8px;
`,
        Ca = Re.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 auto;
  margin-left: 12px;
`,
        Pa = Re.div`
  margin: 0 4px;
`,
        Ta = Re.div`
  margin: 0 4px;
`;
      function Ia({ test: t, isTriggered: n, isActive: r, activeSegment: o, onTrigger: i, onUntrigger: a, onSegmentChange: l }) {
        const [s, c] = e.useState(!1),
          u = (e) =>
            va(this, void 0, void 0, function* () {
              const t = yield ca(e);
              navigator.clipboard.writeText(t), c(!0), setTimeout(() => c(!1), 1800);
              const n = window.getSelection();
              n && n.removeAllRanges();
            });
        return e.createElement(
          ya,
          null,
          e.createElement(
            wa,
            null,
            e.createElement(
              ba,
              null,
              e.createElement(La, { title: t.key, onDoubleClick: () => u(t) }, t.key),
              t.version > 1 && e.createElement(_a, null, `version: ${t.version || 1}`),
              n && e.createElement(Aa, { onClick: a }, e.createElement(ka, { title: "Untrigger" }))
            ),
            !(() => {
              const e = [];
              return (
                Object.values(t.segments).forEach((t) => {
                  e.includes(t) || e.push(t);
                }),
                1 === e.length
              );
            })() &&
              e.createElement(
                Ea,
                null,
                Object.entries(t.segments)
                  .map(([e, t]) => `${e}: ${100 * t}%`)
                  .join("; ")
              )
          ),
          s && e.createElement(Sa, null, "Copied!"),
          e.createElement(
            Ca,
            null,
            n
              ? e.createElement(
                  Pa,
                  null,
                  (() => {
                    const e = Object.keys(t.segments);
                    return 2 === e.length && e.includes(ia.ORIGINAL) && e.includes(ia.VARIANT);
                  })()
                    ? e.createElement(Go, { checked: o === ia.VARIANT, disabled: !r, onChange: (e) => l(e ? ia.VARIANT : ia.ORIGINAL) })
                    : e.createElement(Uo, {
                        options: Object.keys(t.segments).map((e) => ({ key: e, label: e })),
                        value: o || void 0,
                        disabled: !r,
                        onChange: (e) => l(e)
                      })
                )
              : e.createElement(
                  Ta,
                  null,
                  e.createElement(Do, { renderAs: "button", isDisabled: !r, onClick: i, layout: "outline", label: "Trigger" })
                )
          )
        );
      }
      var Ra = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const Oa = Re.div`
  display: flex;
  padding: 18px 0 12px 0;
`,
        Na = Re.div`
  flex: 1 1 auto;
  font-size: 18px;
  font-weight: bold;
`,
        Da = Re.div`
  font-size: 14px;
`,
        Fa = Re.div`
  padding: 6px 0;
`,
        Ma = Re.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
      function $a() {
        const [t, n] = e.useState([]),
          [r, o] = e.useState([]),
          i = () =>
            Ra(this, void 0, void 0, function* () {
              const e = [],
                t = [];
              yield Promise.all(
                la.map((n) =>
                  Ra(this, void 0, void 0, function* () {
                    (yield fa(n.key))
                      ? e.push(Object.assign(Object.assign({}, n), { activeSegment: yield ha(n.key), isActive: yield n.isActive() }))
                      : t.push(Object.assign(Object.assign({}, n), { activeSegment: void 0, isActive: yield n.isActive() }));
                  })
                )
              ),
                n(e),
                o(t);
            }),
          a = (e) =>
            Ra(this, void 0, void 0, function* () {
              const t = ua(e);
              if (!t) return;
              const n = da(t),
                r = yield Xn(Gn.Experiments, {}),
                o = yield ca(t);
              yield Qn({ [Gn.Experiments]: Object.assign(Object.assign({}, r), { [e]: { segment: n, version: t.version, name: o } }) }),
                Vn(`triggerAB: ${o} -> ${n}`),
                i();
            }),
          l = (e) =>
            Ra(this, void 0, void 0, function* () {
              if (!ua(e)) return;
              const t = yield Xn(Gn.Experiments, {});
              delete t[e], yield Qn({ [Gn.Experiments]: t }), i();
            }),
          s = (e, t) =>
            Ra(this, void 0, void 0, function* () {
              const n = ua(e);
              if (!n) return;
              const r = yield Xn(Gn.Experiments, {}),
                o = yield ca(n);
              yield Qn({ [Gn.Experiments]: Object.assign(Object.assign({}, r), { [e]: { segment: t, version: n.version, name: o } }) }),
                i();
            }),
          c = (e, t) => {
            "sync" === t && e[Gn.Experiments] && i();
          };
        return (
          e.useEffect(
            () => (
              i(),
              chrome.storage.onChanged.addListener(c),
              () => {
                chrome.storage.onChanged.removeListener(c);
              }
            ),
            []
          ),
          e.createElement(
            Ma,
            null,
            e.createElement(
              "div",
              null,
              t.length > 0 &&
                e.createElement(
                  e.Fragment,
                  null,
                  e.createElement(
                    Oa,
                    null,
                    e.createElement(Na, null, "Triggered Experiments"),
                    e.createElement(
                      Da,
                      null,
                      e.createElement(Do, {
                        onClick: () =>
                          Ra(this, void 0, void 0, function* () {
                            yield Qn({ [Gn.Experiments]: {} }), i();
                          }),
                        label: "Reset all",
                        layout: "ghost",
                        renderAs: "button"
                      })
                    )
                  ),
                  e.createElement(
                    Fa,
                    null,
                    t
                      .reverse()
                      .map((t) =>
                        e.createElement(Ia, {
                          key: t.key,
                          test: t,
                          activeSegment: t.activeSegment,
                          isTriggered: !0,
                          isActive: t.isActive,
                          onTrigger: () => a(t.key),
                          onUntrigger: () => l(t.key),
                          onSegmentChange: (e) => s(t.key, e)
                        })
                      )
                  )
                ),
              r.length > 0 &&
                e.createElement(
                  e.Fragment,
                  null,
                  e.createElement(Oa, null, e.createElement(Na, null, "Inactive Experiments")),
                  e.createElement(
                    Fa,
                    null,
                    r
                      .reverse()
                      .map((t) =>
                        e.createElement(Ia, {
                          key: t.key,
                          activeSegment: t.activeSegment,
                          isTriggered: !1,
                          isActive: t.isActive,
                          test: t,
                          onTrigger: () => a(t.key),
                          onUntrigger: () => l(t.key),
                          onSegmentChange: (e) => s(t.key, e)
                        })
                      )
                  )
                )
            )
          )
        );
      }
      var ja = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      var za = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const Ua = Re.div`
  ${ao}
  color: ${String(_r)};
  padding-bottom: 12px;
  position: relative;
`,
        Va = Re.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`,
        Ka = Re.div`
  ${co}
  font-weight: 700;
`;
      function Ha() {
        const {
          tasksCount: t,
          isLimitationReached: n,
          isPro: r
        } = (function () {
          const t = e.useContext(hi);
          if (!t) throw new Error("useAccount: AccountProvider is missing.");
          return t;
        })();
        return e.createElement(
          Va,
          null,
          e.createElement(Ua, null, "Account"),
          e.createElement(
            Bi,
            null,
            e.createElement(
              Gi,
              null,
              e.createElement(Ka, null, "Pro status:"),
              " ",
              r ? e.createElement(Hi, { status: "valid" }, "Pro user") : e.createElement(Hi, { status: "expired" }, "Free user")
            )
          ),
          e.createElement(
            Bi,
            null,
            e.createElement(
              Gi,
              null,
              e.createElement(Ka, null, "Free daily tasks completed:", t),
              " ",
              n ? e.createElement(Hi, { status: "invalid" }, "Blocked") : e.createElement(Hi, { status: "valid" }, "OK")
            ),
            e.createElement(
              Yi,
              null,
              e.createElement(Do, {
                renderAs: "button",
                layout: "outline",
                label: "Reset",
                onClick: () =>
                  za(this, void 0, void 0, function* () {
                    yield fr();
                  })
              })
            )
          ),
          e.createElement(
            Bi,
            null,
            e.createElement(Gi, null, e.createElement(Ka, null, "Initialize storage")),
            e.createElement(
              Yi,
              null,
              e.createElement(Do, {
                renderAs: "button",
                layout: "outline",
                label: "Initialize storages",
                onClick: () =>
                  za(this, void 0, void 0, function* () {
                    !(function () {
                      ja(this, void 0, void 0, function* () {
                        yield Wn({
                          [Bn.MIGRATIONS_SCHEMA_VERSION]: Date.now(),
                          [Bn.IS_PDIUM_OPEN_ON_LOAD]: null,
                          [Bn.LOCAL_TOKEN]: null,
                          [Bn.USER_COUNTRY_GEO_IP]: null,
                          [Bn.USER_PROFILE]: null,
                          [Bn.USER_ACTIVE_PRO]: !1,
                          [Bn.USER_RT]: !1,
                          [Bn.ACCESS_TOKEN]: null,
                          [Bn.REFRESH_TOKEN]: null,
                          [Bn.TRACKING_EVENTS]: [],
                          [Bn.USER_DATA_SYNCED]: !1,
                          [Bn.USER_DATA_LAST_SYNC]: null,
                          [Bn.FILE_HANDLE]: null,
                          [Bn.FILE_HANDLE_RESULT]: null,
                          [Bn.TASK]: null,
                          [Bn.SYSTEM_OS]: null,
                          [Bn.SYSTEM_LOCALE]: "en",
                          [Bn.INSTALLATION_DATE]: Date.now(),
                          [Bn.PROFILE]: null,
                          [Bn.AUTH_CODE_VERIFIER]: null,
                          [Bn.AUTH_STATE_CODE]: null,
                          [Bn.AUTH_PROVIDER]: null,
                          [Bn.FAILED_LOGIN_ATTEMPTS]: []
                        }),
                          yield Qn({
                            [Gn.PreferenceGoogleSERPEnabled]: !0,
                            [Gn.PreferenceAutoDownloadEnabled]: !1,
                            [Gn.Experiments]: {},
                            [Gn.TasksCount]: 0,
                            [Gn.FreeTasksResetTime]: null,
                            [Gn.MIGRATIONS_SCHEMA_VERSION]: Date.now()
                          });
                      });
                    })();
                  })
              })
            )
          ),
          e.createElement(
            Bi,
            null,
            e.createElement(Gi, null, e.createElement(Ka, null, "Print storages")),
            e.createElement(
              Yi,
              null,
              e.createElement(Do, {
                renderAs: "button",
                layout: "outline",
                label: "Print storages",
                onClick: () =>
                  za(this, void 0, void 0, function* () {
                    !(function () {
                      Yn(this, void 0, void 0, function* () {
                        console.log("============= LOCAL =============");
                        const e = Object.values(Bn),
                          t = yield Zn(e);
                        console.log(t), console.log("============= SYNC =============");
                        const n = Object.values(Gn),
                          r = yield Xn(n);
                        console.log(r);
                      });
                    })();
                  })
              })
            )
          )
        );
      }
      var Ba = n(627),
        Ga = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      const Ya = Re.div`
  box-sizing: border-box;
  background-color: white;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
`,
        Za = Re.div`
  color: #757575;
`,
        Wa = Re.button`
  color: #0055ff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  text-decoration: underline;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,
        qa = Re.span`
  position: relative;
  top: 1px;
  margin-left: 10px;
  width: 16px;
  height: 16px;
`;
      function Xa() {
        return e.createElement(
          Ya,
          null,
          e.createElement(Za, null, chrome.runtime.getManifest().version),
          e.createElement(
            Wa,
            {
              onClick: () =>
                Ga(this, void 0, void 0, function* () {
                  yield Qo({ event: "chrome.browser_action.smallpdf_apps_clicked" });
                  const e = document.createElement("a");
                  (e.target = "_blank"),
                    (e.href = `https://smallpdf.com/download?${bt}`),
                    document.body.appendChild(e),
                    e.click(),
                    document.body.removeChild(e);
                })
            },
            e.createElement("span", null, "Smallpdf apps"),
            e.createElement(qa, null, e.createElement(fo, { size: 16, content: Ba }))
          )
        );
      }
      const Qa = 280;
      var Ja = n(9289);
      function el() {
        return (
          (el =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          el.apply(this, arguments)
        );
      }
      function tl(e, t) {
        return (
          (tl =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          tl(e, t)
        );
      }
      function nl(e) {
        return (
          (nl = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          nl(e)
        );
      }
      function rl() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function ol(e, t, n) {
        return (
          (ol = rl()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r))();
                return n && tl(o, n.prototype), o;
              }),
          ol.apply(null, arguments)
        );
      }
      function il(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (il = function (e) {
            if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return ol(e, arguments, nl(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
              tl(r, e)
            );
          }),
          il(e)
        );
      }
      var al = (function (e) {
        var t, n;
        function r(t) {
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(
            e.call(
              this,
              "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
                t +
                " for more information."
            ) || this
          );
        }
        return (n = e), ((t = r).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), tl(t, n), r;
      })(il(Error));
      function ll(e) {
        return Math.round(255 * e);
      }
      function sl(e, t, n) {
        return ll(e) + "," + ll(t) + "," + ll(n);
      }
      function cl(e, t, n, r) {
        if ((void 0 === r && (r = sl), 0 === t)) return r(n, n, n);
        var o = (((e % 360) + 360) % 360) / 60,
          i = (1 - Math.abs(2 * n - 1)) * t,
          a = i * (1 - Math.abs((o % 2) - 1)),
          l = 0,
          s = 0,
          c = 0;
        o >= 0 && o < 1
          ? ((l = i), (s = a))
          : o >= 1 && o < 2
          ? ((l = a), (s = i))
          : o >= 2 && o < 3
          ? ((s = i), (c = a))
          : o >= 3 && o < 4
          ? ((s = a), (c = i))
          : o >= 4 && o < 5
          ? ((l = a), (c = i))
          : o >= 5 && o < 6 && ((l = i), (c = a));
        var u = n - i / 2;
        return r(l + u, s + u, c + u);
      }
      var ul = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
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
        fuchsia: "ff00ff",
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
        rebeccapurple: "639",
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
      };
      var dl = /^#[a-fA-F0-9]{6}$/,
        fl = /^#[a-fA-F0-9]{8}$/,
        pl = /^#[a-fA-F0-9]{3}$/,
        hl = /^#[a-fA-F0-9]{4}$/,
        ml = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
        gl = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,
        vl = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
        yl = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
      function wl(e) {
        if ("string" != typeof e) throw new al(3);
        var t = (function (e) {
          if ("string" != typeof e) return e;
          var t = e.toLowerCase();
          return ul[t] ? "#" + ul[t] : e;
        })(e);
        if (t.match(dl))
          return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16) };
        if (t.match(fl)) {
          var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
          return {
            red: parseInt("" + t[1] + t[2], 16),
            green: parseInt("" + t[3] + t[4], 16),
            blue: parseInt("" + t[5] + t[6], 16),
            alpha: n
          };
        }
        if (t.match(pl))
          return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16) };
        if (t.match(hl)) {
          var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
          return {
            red: parseInt("" + t[1] + t[1], 16),
            green: parseInt("" + t[2] + t[2], 16),
            blue: parseInt("" + t[3] + t[3], 16),
            alpha: r
          };
        }
        var o = ml.exec(t);
        if (o) return { red: parseInt("" + o[1], 10), green: parseInt("" + o[2], 10), blue: parseInt("" + o[3], 10) };
        var i = gl.exec(t.substring(0, 50));
        if (i)
          return {
            red: parseInt("" + i[1], 10),
            green: parseInt("" + i[2], 10),
            blue: parseInt("" + i[3], 10),
            alpha: parseFloat("" + i[4])
          };
        var a = vl.exec(t);
        if (a) {
          var l = "rgb(" + cl(parseInt("" + a[1], 10), parseInt("" + a[2], 10) / 100, parseInt("" + a[3], 10) / 100) + ")",
            s = ml.exec(l);
          if (!s) throw new al(4, t, l);
          return { red: parseInt("" + s[1], 10), green: parseInt("" + s[2], 10), blue: parseInt("" + s[3], 10) };
        }
        var c = yl.exec(t.substring(0, 50));
        if (c) {
          var u = "rgb(" + cl(parseInt("" + c[1], 10), parseInt("" + c[2], 10) / 100, parseInt("" + c[3], 10) / 100) + ")",
            d = ml.exec(u);
          if (!d) throw new al(4, t, u);
          return {
            red: parseInt("" + d[1], 10),
            green: parseInt("" + d[2], 10),
            blue: parseInt("" + d[3], 10),
            alpha: parseFloat("" + c[4])
          };
        }
        throw new al(5);
      }
      var bl = function (e) {
        return 7 === e.length && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
      };
      function El(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t : t;
      }
      function Ll(e, t, n) {
        if ("number" == typeof e && "number" == typeof t && "number" == typeof n) return bl("#" + El(e) + El(t) + El(n));
        if ("object" == typeof e && void 0 === t && void 0 === n) return bl("#" + El(e.red) + El(e.green) + El(e.blue));
        throw new al(6);
      }
      function _l(e, t, n, r) {
        if ("string" == typeof e && "number" == typeof t) {
          var o = wl(e);
          return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
        }
        if ("number" == typeof e && "number" == typeof t && "number" == typeof n && "number" == typeof r)
          return r >= 1 ? Ll(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
        if ("object" == typeof e && void 0 === t && void 0 === n && void 0 === r)
          return e.alpha >= 1 ? Ll(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
        throw new al(7);
      }
      function xl(e, t, n) {
        return function () {
          var r = n.concat(Array.prototype.slice.call(arguments));
          return r.length >= t ? e.apply(this, r) : xl(e, t, r);
        };
      }
      function Sl(e) {
        return xl(e, e.length, []);
      }
      function Al(e, t, n) {
        if ("transparent" === t) return n;
        if ("transparent" === n) return t;
        if (0 === e) return n;
        var r = wl(t),
          o = el({}, r, { alpha: "number" == typeof r.alpha ? r.alpha : 1 }),
          i = wl(n),
          a = el({}, i, { alpha: "number" == typeof i.alpha ? i.alpha : 1 }),
          l = o.alpha - a.alpha,
          s = 2 * parseFloat(e) - 1,
          c = ((s * l == -1 ? s : s + l) / (1 + s * l) + 1) / 2,
          u = 1 - c;
        return _l({
          red: Math.floor(o.red * c + a.red * u),
          green: Math.floor(o.green * c + a.green * u),
          blue: Math.floor(o.blue * c + a.blue * u),
          alpha: o.alpha * parseFloat(e) + a.alpha * (1 - parseFloat(e))
        });
      }
      var kl = Sl(Al);
      function Cl(e, t) {
        return "transparent" === t ? t : kl(parseFloat(e), "rgb(0, 0, 0)", t);
      }
      var Pl = Sl(Cl);
      const Tl = Re.span`
  display: inline-block;
  overflow: hidden;
  ${({ width: e }) =>
    e
      ? ge`
          width: ${e}px;
        `
      : ge`
          width: auto;
        `}
  ${({ height: e }) =>
    e
      ? ge`
          height: ${e}px;
        `
      : ge`
          height: auto;
        `}
  & > svg {
    display: block;
    
    ${({ width: e }) =>
      e
        ? ge`
      width: ${e}px;
    `
        : ge`
      width: auto;
    `}
    ${({ height: e }) =>
      e
        ? ge`
      height: ${e}px;
    `
        : ge`
      height: auto;
    `}
  }
`,
        Il = ({ className: t, width: n, height: r, content: o, onClick: i }) =>
          e.createElement(Tl, { width: n, height: r, className: t, dangerouslySetInnerHTML: { __html: o }, onClick: i });
      var Rl = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const Ol = Re.span`
  position: absolute;
  right: ${18}px;
  top: 14px;
  display: inline-block;
  width: 12px;
  height: 18px;
  padding: 6px;
`,
        Nl = Re.a`
  position: relative;
  background-color: ${(e) => e.toolLinkColor};
  color: white;
  box-sizing: border-box;
  display: block;

  transition: background-color 100ms ease-in-out, height 500ms ease-in-out;

  overflow: hidden;
  height: ${(e) => (e.visible ? 56 : 0)}px;

  &:focus,
  &:hover {
    background-color: ${(e) => Pl(0.1, e.toolLinkColor)};
  }

  ${Ol} {
    transition: opacity 100ms;
    opacity: 0;
  }
  &:hover ${Ol}, &:focus ${Ol} {
    opacity: 0.5;
  }
`;
      function Dl({ toolKey: t, url: n, color: r, visible: o, children: i }) {
        return e.createElement(
          Nl,
          {
            toolLinkColor: r,
            onClick: (e) =>
              Rl(this, void 0, void 0, function* () {
                e.preventDefault(),
                  yield Qo(((e) => ({ event: "chrome.browser_action.tool_clicked", customString1: e }))(t)),
                  (function (e) {
                    const t = Rn.find((t) => t.key === e);
                    t &&
                      (window.chrome && window.chrome.tabs
                        ? window.chrome.tabs.create({ url: `${t.url}?${bt}` })
                        : (window.location.href = `${t.url}?${bt}`));
                  })(t);
              }),
            href: n,
            visible: o,
            tabIndex: o ? 0 : -1
          },
          i,
          e.createElement(Ol, null, e.createElement(Il, { content: Ja, width: 12, height: 18 }))
        );
      }
      var Fl = n(1238),
        Ml = n(1564);
      const $l = Re.input`
  position: absolute;
  top: ${12}px;
  right: 0;
  left: ${Qa}px;
  font-size: 15px;
  width: ${202}px;
  border: 1px solid #ccc;
  padding: 5px 9px;
  box-sizing: border-box;
  &:hover {
    border: 1px solid #333;
  }
`,
        jl = Re.div`
  position: absolute;
  overflow: hidden;
  height: ${56}px;
  width: ${Qa}px;
`,
        zl = Re.div`
  position: relative;
  left: ${({ showSearch: e }) => (e ? -223 : 0)}px;
  transition: left ${300}ms ease-out;
`,
        Ul = Re.img`
  position: absolute;
  cursor: pointer;
  opacity: ${({ showSearch: e }) => (e ? 0.9 : 0.3)};
  transition: opacity 200ms ease-in-out;
  left: ${226}px;
  top: 3;
  padding: ${18}px;

  &:hover {
    opacity: 0.9;
  }
`,
        Vl = Re.a`
  position: absolute;
  display: block;
  padding: ${18}px;
  top: 2px;
`,
        Kl = Re.div`
  height: ${56}px;
  position: relative;
  z-index: 1;
`;
      function Hl({ onSearch: t }) {
        const n = e.useRef(null),
          r = e.useRef(null),
          [o, i] = e.useState(!1),
          a = () => {
            const e = n.current;
            if (!e) return;
            const r = !o;
            i(r),
              setTimeout(() => {
                r ? e.focus() : (e.value = ""), t(e.value);
              }, 300);
          },
          l = (e) => {
            requestAnimationFrame(() => {
              r.current && (r.current.scrollLeft = 0);
            });
          };
        return e.createElement(
          Kl,
          null,
          e.createElement(
            jl,
            { ref: r },
            e.createElement(
              zl,
              { showSearch: o },
              e.createElement(
                Vl,
                { href: "https://smallpdf.com?utm_source=ce_generic", target: "_SMALLPDF", tabIndex: -1 },
                e.createElement("img", { src: Ml, width: "92", alt: "Smallpdf" })
              ),
              e.createElement(Ul, { src: Fl, width: "20", showSearch: o, onClick: a }),
              e.createElement($l, {
                ref: n,
                placeholder: "Search...",
                type: "text",
                onFocus: l,
                onInput: (e) => {
                  o ? n.current && t(n.current.value) : (l(), a());
                }
              })
            )
          )
        );
      }
      const Bl = Re.span`
  position: absolute;
  left: ${18}px;
  top: 16px;
`,
        Gl = Re.span`
  position: absolute;
  font-size: 15px;
  padding: ${18}px ${60}px;
`,
        Yl = Re.div`
  height: ${336}px;
  box-sizing: border-box;
  overflow-y: scroll;
`,
        Zl = Re.div`
  width: ${Qa}px;
  height: ${392}px;
  position: relative;
`,
        Wl = Re.div`
  display: block;
  border-top: 1px solid #e8e8e8;
`;
      function ql(e, t) {
        return !![e.key, e.title, ...e.searchTags].find((e) => e.includes(t.toLowerCase().trim()));
      }
      function Xl({ favorites: t }) {
        const n = e.useRef(),
          [r, o] = e.useState(""),
          i = Rn.filter((e) => t[e.key] > 0),
          a = Rn.filter((e) => !t[e.key]),
          l = i
            .concat(a)
            .map((t) =>
              e.createElement(
                Dl,
                { key: t.key, toolKey: t.key, color: t.color, url: `${t.url}?${bt}`, visible: ql(t, r) },
                e.createElement(Bl, null, e.createElement(fo, { content: t.iconLegacy, size: 24 })),
                e.createElement(Gl, null, chrome.i18n.getMessage(t.translationKey))
              )
            );
        return (
          e.useEffect(() => {
            Qo({ event: "chrome.browser_action.popup_seen" });
          }, []),
          e.createElement(
            Zl,
            null,
            e.createElement(Hl, {
              onSearch: (e) => {
                o(e),
                  n.current && clearTimeout(n.current),
                  (n.current = setTimeout(() => {
                    const e = r
                      .replace(/[^\w'"%!=$,+\-?.:(){}[\]\/\\ ]+/g, "")
                      .toLowerCase()
                      .trim();
                    e && Qo(((e) => ({ event: "chrome.browser_action.search_used", customString1: e }))(e));
                  }, 750));
              }
            }),
            e.createElement(Yl, null, l),
            e.createElement(Wl, null, e.createElement(Xa, null))
          )
        );
      }
      function Ql() {
        const e = chrome.i18n.getUILanguage();
        switch (e) {
          case "pt-BR":
            return "pt";
          case "zh-CN":
            return "zh-Hans";
          case "zh-TW":
            return "zh-Hant";
          case "ja":
          case "ko":
          case "ar":
          case "da":
          case "de":
          case "en":
          case "es":
          case "fr":
          case "hi":
          case "id":
          case "it":
          case "ms-MY":
          case "nb":
          case "nl":
          case "pl":
          case "ru":
          case "sv":
          case "th":
          case "tr":
          case "uk":
          case "vi":
            return e;
          default:
            return "en";
        }
      }
      var Jl = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const es = "iframe_sync_data";
      function ts() {
        const t = () => {
          const e = new Promise((e, t) => {
              setTimeout(() => {
                t(new Error("WebSyncError: Cross-document messaging timeout"));
              }, 1e4);
            }),
            t = new Promise((e, t) => {
              const n = window.document.getElementById(es);
              n && n.remove();
              const r = window.document.createElement("iframe");
              (r.id = es), (r.style.display = "none");
              const o = Ct();
              r.setAttribute("src", ht),
                r.addEventListener("error", (e) => {
                  Vn("[WebSync] Error: Request failed", e), t(new Error("[WebSync] Error: Request failed"));
                }),
                r.addEventListener("load", () =>
                  Jl(this, void 0, void 0, function* () {
                    var n;
                    const i = (n) => {
                      (n.data && n.data.id && n.data.id !== o) ||
                        (Vn("[WebSync] Cross-document respond received"),
                        window.removeEventListener("message", i),
                        r.remove(),
                        n.origin === mt
                          ? n.data
                            ? n.data.error
                              ? t(new Error(n.data.error))
                              : (Vn("[WebSync] Cross-document data received", n.data), e(n.data))
                            : t(new Error("WebSyncError: No data received"))
                          : t(new Error("WebSyncError: Message received with invalid origin")));
                    };
                    window.addEventListener("message", i),
                      null === (n = null == r ? void 0 : r.contentWindow) ||
                        void 0 === n ||
                        n.postMessage({ id: o, type: "GET_USER_DATA" }, mt),
                      Vn("[WebSync] Cross-document data requested, waiting for response...");
                  })
                ),
                window.document.body.append(r),
                Vn(`[WebSync] Iframe created, loading ${ht}...`);
            });
          return Promise.race([e, t]);
        };
        return e.useCallback(
          () =>
            Jl(this, void 0, void 0, function* () {
              if (yield Zn(Bn.USER_DATA_LAST_SYNC, null)) return;
              const e = yield (function () {
                  return wt(this, void 0, void 0, function* () {
                    return new Promise((e, t) => {
                      try {
                        chrome.runtime.getPlatformInfo((t) => {
                          switch (t.os) {
                            case "mac":
                              e(St.MacOS);
                              break;
                            case "win":
                              e(St.Windows);
                              break;
                            case "android":
                              e(St.Android);
                              break;
                            case "cros":
                              e(St.ChromeODS);
                              break;
                            case "linux":
                              e(St.Linux);
                              break;
                            case "openbsd":
                              e(St.OpenBSD);
                              break;
                            default:
                              e(null);
                          }
                        });
                      } catch (e) {
                        t(e);
                      }
                    });
                  });
                })(),
                n = Ql(),
                r = yield Nt(),
                o = yield fi();
              try {
                yield Qo({ event: "chrome.system.user_data_sync_started" });
                const i = yield t();
                let a = null == i ? void 0 : i.localToken;
                a || (a = Ct()),
                  yield Wn({
                    [Bn.LOCAL_TOKEN]: a,
                    [Bn.USER_COUNTRY_GEO_IP]: i.countryGeoIP,
                    [Bn.USER_PROFILE]: o,
                    [Bn.USER_ACTIVE_PRO]: r,
                    [Bn.USER_RT]: i.rt,
                    [Bn.SYSTEM_OS]: e,
                    [Bn.SYSTEM_LOCALE]: n,
                    [Bn.USER_DATA_SYNCED]: !0,
                    [Bn.USER_DATA_LAST_SYNC]: Date.now()
                  }),
                  yield Qo({ event: "chrome.system.user_data_sync_completed" });
              } catch (t) {
                Vn("useSyncUserData: error, using fallback values", t);
                const i = yield (function () {
                    return wt(this, void 0, void 0, function* () {
                      return Zn(Bn.USER_COUNTRY_GEO_IP, null);
                    });
                  })(),
                  a = Ct();
                yield Wn({
                  [Bn.LOCAL_TOKEN]: a,
                  [Bn.USER_COUNTRY_GEO_IP]: i,
                  [Bn.USER_PROFILE]: o,
                  [Bn.USER_ACTIVE_PRO]: r,
                  [Bn.USER_RT]: !1,
                  [Bn.SYSTEM_OS]: e,
                  [Bn.SYSTEM_LOCALE]: n,
                  [Bn.USER_DATA_SYNCED]: !0,
                  [Bn.USER_DATA_LAST_SYNC]: Date.now()
                });
              }
              yield Mt(),
                yield (function () {
                  return wt(this, void 0, void 0, function* () {
                    const e = yield Zn(Bn.SYSTEM_LOCALE, null),
                      t = e
                        ? `https://smallpdf.com/${e}/page?utm_source=ce_generic#chrome-extension-feedback`
                        : "https://smallpdf.com/page?utm_source=ce_generic#chrome-extension-feedback";
                    chrome.runtime.setUninstallURL(t);
                  });
                })();
            }),
          []
        );
      }
      var ns = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      function rs() {
        const t = ts(),
          [n, r] = e.useState({});
        return (
          e.useEffect(() => {
            (() => {
              ns(this, void 0, void 0, function* () {
                t();
                const e = yield (function () {
                  return $t(this, void 0, void 0, function* () {
                    return Zn(Bn.UserFavorites, {});
                  });
                })();
                r(e);
              });
            })();
          }, []),
          e.createElement(Xl, { favorites: n })
        );
      }
      function os() {
        return e.createElement(rs, null);
      }
      var is = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const as = {
          triggerAB: (e) =>
            is(void 0, void 0, void 0, function* () {
              return ia.ORIGINAL;
            }),
          isInABVariant: () => !1,
          getSegment: (e) => ia.ORIGINAL,
          waitForAB: (e) => !1
        },
        ls = e.createContext(as);
      function ss({ children: t }) {
        const [n, r] = e.useState({}),
          o = (e) => n[e].segment,
          i = {
            triggerAB: ma,
            isInABVariant: (e) => {
              const t = o(e);
              return !!t && t !== ia.ORIGINAL;
            },
            getSegment: o,
            waitForAB: (e) => !!n[e]
          },
          a = (e) =>
            is(this, void 0, void 0, function* () {
              e[Gn.Experiments] && r(yield pa());
            });
        return (
          e.useEffect(
            () => (
              (() => {
                is(this, void 0, void 0, function* () {
                  const e = yield pa();
                  r(e);
                });
              })(),
              chrome.storage.onChanged.addListener(a),
              () => {
                chrome.storage.onChanged.removeListener(a);
              }
            ),
            []
          ),
          e.createElement(ls.Provider, { value: i }, t)
        );
      }
      let cs, us;
      const ds = new WeakMap(),
        fs = new WeakMap(),
        ps = new WeakMap(),
        hs = new WeakMap(),
        ms = new WeakMap();
      let gs = {
        get(e, t, n) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return fs.get(e);
            if ("objectStoreNames" === t) return e.objectStoreNames || ps.get(e);
            if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
          }
          return ws(e[t]);
        },
        set: (e, t, n) => ((e[t] = n), !0),
        has: (e, t) => (e instanceof IDBTransaction && ("done" === t || "store" === t)) || t in e
      };
      function vs(e) {
        return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype
          ? (us || (us = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e)
            ? function (...t) {
                return e.apply(bs(this), t), ws(ds.get(this));
              }
            : function (...t) {
                return ws(e.apply(bs(this), t));
              }
          : function (t, ...n) {
              const r = e.call(bs(this), t, ...n);
              return ps.set(r, t.sort ? t.sort() : [t]), ws(r);
            };
      }
      function ys(e) {
        return "function" == typeof e
          ? vs(e)
          : (e instanceof IDBTransaction &&
              (function (e) {
                if (fs.has(e)) return;
                const t = new Promise((t, n) => {
                  const r = () => {
                      e.removeEventListener("complete", o), e.removeEventListener("error", i), e.removeEventListener("abort", i);
                    },
                    o = () => {
                      t(), r();
                    },
                    i = () => {
                      n(e.error || new DOMException("AbortError", "AbortError")), r();
                    };
                  e.addEventListener("complete", o), e.addEventListener("error", i), e.addEventListener("abort", i);
                });
                fs.set(e, t);
              })(e),
            (t = e),
            (cs || (cs = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e) => t instanceof e)
              ? new Proxy(e, gs)
              : e);
        var t;
      }
      function ws(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            const t = new Promise((t, n) => {
              const r = () => {
                  e.removeEventListener("success", o), e.removeEventListener("error", i);
                },
                o = () => {
                  t(ws(e.result)), r();
                },
                i = () => {
                  n(e.error), r();
                };
              e.addEventListener("success", o), e.addEventListener("error", i);
            });
            return (
              t
                .then((t) => {
                  t instanceof IDBCursor && ds.set(t, e);
                })
                .catch(() => {}),
              ms.set(t, e),
              t
            );
          })(e);
        if (hs.has(e)) return hs.get(e);
        const t = ys(e);
        return t !== e && (hs.set(e, t), ms.set(t, e)), t;
      }
      const bs = (e) => ms.get(e);
      const Es = ["get", "getKey", "getAll", "getAllKeys", "count"],
        Ls = ["put", "add", "delete", "clear"],
        _s = new Map();
      function xs(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
        if (_s.get(t)) return _s.get(t);
        const n = t.replace(/FromIndex$/, ""),
          r = t !== n,
          o = Ls.includes(n);
        if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || (!o && !Es.includes(n))) return;
        const i = async function (e, ...t) {
          const i = this.transaction(e, o ? "readwrite" : "readonly");
          let a = i.store;
          return r && (a = a.index(t.shift())), (await Promise.all([a[n](...t), o && i.done]))[0];
        };
        return _s.set(t, i), i;
      }
      gs = ((e) => ({ ...e, get: (t, n, r) => xs(t, n) || e.get(t, n, r), has: (t, n) => !!xs(t, n) || e.has(t, n) }))(gs);
      var Ss = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      function As() {
        return e.useCallback(
          (e) =>
            Ss(this, void 0, void 0, function* () {
              var t, n;
              if (!e) return null;
              var r;
              const o = `${Ct()}.${("string" == typeof (r = e.name) ? r.split(".").pop() : "") || "pdf"}`;
              let i = null,
                a = null;
              try {
                const t = yield Dn(o),
                  n = yield (function (e, t, { blocked: n, upgrade: r, blocking: o, terminated: i } = {}) {
                    const a = indexedDB.open(e, t),
                      l = ws(a);
                    return (
                      r &&
                        a.addEventListener("upgradeneeded", (e) => {
                          r(ws(a.result), e.oldVersion, e.newVersion, ws(a.transaction));
                        }),
                      n && a.addEventListener("blocked", () => n()),
                      l
                        .then((e) => {
                          i && e.addEventListener("close", () => i()), o && e.addEventListener("versionchange", () => o());
                        })
                        .catch(() => {}),
                      l
                    );
                  })("upload", 1, {
                    upgrade(e) {
                      e.createObjectStore(er, { keyPath: "id", autoIncrement: !0 });
                    }
                  });
                yield n.clear(er), (a = yield n.add(er, { token: o, uploadURL: t, blob: e }));
              } catch (e) {
                throw (Vn("useAddFile: error", e), Fe({ name: "ERROR_DB_INITIALIZATION", message: "Error while creating the IndexedDB" }));
              }
              return (
                a &&
                  ((i = yield (function (e, t, n, r) {
                    return Jn(this, void 0, void 0, function* () {
                      const o = { name: e, token: n, size: t, expireAt: Date.now() + Ne(15), status: it.IDLE, progress: 0, fileID: r };
                      return yield Wn({ [Bn.FILE_HANDLE]: o }), o;
                    });
                  })(e.name, e.size, o, a)),
                  null ===
                    (n =
                      null === (t = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === t
                        ? void 0
                        : t.controller) ||
                    void 0 === n ||
                    n.postMessage({ type: "MESSAGE_FILE_UPLOAD" })),
                i
              );
            }),
          []
        );
      }
      function ks(e, t) {
        t && chrome.action.setBadgeBackgroundColor({ color: String(t) }), chrome.action.setBadgeText({ text: e });
      }
      function Cs() {
        ks("");
      }
      var Ps = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      });
                })(e.value).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      };
      const Ts = e.createContext({
        task: null,
        reset: () =>
          Ps(void 0, void 0, void 0, function* () {
            return lt;
          }),
        fileHandle: null,
        result: null,
        clearFileHandle: () => lt,
        tool: null,
        selectTool: () => lt,
        startTask: () => lt,
        isDND: !1
      });
      function Is({ children: t }) {
        const n = As(),
          r = e.useRef(!1),
          [o, i] = e.useState(null),
          [a, l] = e.useState(null),
          [s, c] = e.useState(null),
          [u, d] = e.useState(null),
          [f, p] = e.useState(!1),
          h = () =>
            Ps(this, void 0, void 0, function* () {
              (r.current = !0),
                l(null),
                c(null),
                d(null),
                i(null),
                yield (function () {
                  return Jn(this, void 0, void 0, function* () {
                    return Wn({ [Bn.TASK]: null, [Bn.FILE_HANDLE]: null, [Bn.FILE_HANDLE_RESULT]: null });
                  });
                })(),
                chrome.notifications.clear(Fn.ID_RESULT),
                Cs(),
                (r.current = !1);
            }),
          m = (e) =>
            Ps(this, void 0, void 0, function* () {
              if (r.current) return;
              if (e[Bn.TASK]) {
                const e = yield ur();
                l(e);
              }
              e[Bn.FILE_HANDLE] && c(yield ir());
              e[Bn.FILE_HANDLE_RESULT] && d(yield ar());
            }),
          g = {
            task: a,
            reset: h,
            fileHandle: s,
            result: u,
            clearFileHandle: () => {
              !(function () {
                Jn(this, void 0, void 0, function* () {
                  return qn(Bn.FILE_HANDLE);
                });
              })(),
                Cs();
            },
            tool: o,
            selectTool: (e) => {
              i(e);
            },
            startTask: (e, t, n) => {
              var r;
              (null === (r = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === r
                ? void 0
                : r.controller) &&
                navigator.serviceWorker.controller.postMessage({
                  type: "MESSAGE_TASK_START",
                  payload: { toolKey: e, fileHandle: s, toolOptions: t, withProFeature: n }
                });
            },
            isDND: f
          };
        return (
          e.useEffect(
            () => (
              (() => {
                Ps(this, void 0, void 0, function* () {
                  const e = yield ar(),
                    t = yield ir(),
                    n = yield ur();
                  l(n),
                    (null == t ? void 0 : t.expireAt) > Date.now() ? c(t) : (null == n ? void 0 : n.status) === sr.FAILURE && h(),
                    i(On(null == n ? void 0 : n.toolKey)),
                    e && ((null == e ? void 0 : e.expireAt) > Date.now() ? d(e) : h());
                });
              })(),
              chrome.storage.onChanged.addListener(m),
              () => {
                chrome.storage.onChanged.removeListener(m);
              }
            ),
            []
          ),
          e.createElement(
            Ts.Provider,
            { value: g },
            e.createElement(
              "div",
              {
                onDragOver: (e) => {
                  e.preventDefault(), f || ((e.dataTransfer.dropEffect = "copy"), p(!0));
                },
                onDrop: (e) => {
                  Qo({ event: "chrome.action.files_added", customString1: tr.DRAG_AND_DROP, customInt1: 1 });
                  const t = Array.from(e.dataTransfer.files);
                  p(!1);
                  const r = t[0];
                  r && n(r), e.preventDefault(), e.stopPropagation();
                },
                onDragLeave: (e) => {
                  f && p(!1);
                }
              },
              t
            )
          )
        );
      }
      const Rs = Re.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 322px;
  max-height: 580px;
  margin: auto;
  border: 1px solid ${String(Ar)};
`;
      function Os() {
        return e.createElement(
          Rs,
          null,
          e.createElement(ss, null, e.createElement(mi, null, e.createElement(Is, null, e.createElement(os, null))))
        );
      }
      const Ns = Re.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 100vh;
`;
      function Ds() {
        return e.createElement(
          Ns,
          null,
          e.createElement(Fi, {
            initialTabIndex: 2,
            tabs: {
              Authentication: e.createElement(ra, null),
              "A/B System": e.createElement($a, null),
              Account: e.createElement(mi, null, e.createElement(Ha, null)),
              Playground: e.createElement(Os, null)
            }
          })
        );
      }
      function Fs() {
        var n;
        (n = e.createElement(Ds, null)),
          t.render(e.createElement(ci, { FallbackComponent: ai, onError: li }, n), document.getElementById("root"));
      }
      xt.forEach((e) => {
        chrome.runtime.sendMessage(e, "ping", (e) => {
          "success" === e && Fs();
        });
      });
    })();
})();
