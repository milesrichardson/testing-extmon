!(function (e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var l = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(l.exports, l, l.exports, t), (l.l = !0), l.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
        for (var l in e)
          t.d(
            r,
            l,
            function (n) {
              return e[n];
            }.bind(null, l)
          );
      return r;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 204));
})({
  0: function (e, n, t) {
    "use strict";
    e.exports = t(21);
  },
  1: function (e, n, t) {
    "use strict";
    e.exports = t(18);
  },
  10: function (e, n) {
    window.chrome ? window.browser || (window.browser = window.chrome) : (window.chrome = window.browser ? window.browser : {});
  },
  11: function (e, n, t) {
    "use strict";
    !(function e() {
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
        0;
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
      }
    })(),
      (e.exports = t(17));
  },
  17: function (e, n, t) {
    "use strict";
    /** @license React v17.0.2
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = t(1),
      l = t(6),
      a = t(19);
    function o(e) {
      for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
        n += "&args[]=" + encodeURIComponent(arguments[t]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!r) throw Error(o(227));
    var i = new Set(),
      u = {};
    function s(e, n) {
      c(e, n), c(e + "Capture", n);
    }
    function c(e, n) {
      for (u[e] = n, e = 0; e < n.length; e++) i.add(n[e]);
    }
    var f = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
      d =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      p = Object.prototype.hasOwnProperty,
      h = {},
      m = {};
    function g(e, n, t, r, l, a, o) {
      (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = t),
        (this.propertyName = e),
        (this.type = n),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o);
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
        var n = e[0];
        v[n] = new g(n, 1, !1, e[1], null, !1, !1);
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
    function b(e) {
      return e[1].toUpperCase();
    }
    function w(e, n, t, r) {
      var l = v.hasOwnProperty(n) ? v[n] : null;
      (null !== l ? 0 === l.type : !r && 2 < n.length && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1])) ||
        ((function (e, n, t, r) {
          if (
            null == n ||
            (function (e, n, t, r) {
              if (null !== t && 0 === t.type) return !1;
              switch (typeof n) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                  return !1;
              }
            })(e, n, t, r)
          )
            return !0;
          if (r) return !1;
          if (null !== t)
            switch (t.type) {
              case 3:
                return !n;
              case 4:
                return !1 === n;
              case 5:
                return isNaN(n);
              case 6:
                return isNaN(n) || 1 > n;
            }
          return !1;
        })(n, t, l, r) && (t = null),
        r || null === l
          ? (function (e) {
              return !!p.call(m, e) || (!p.call(h, e) && (d.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)));
            })(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
          : l.mustUseProperty
          ? (e[l.propertyName] = null === t ? 3 !== l.type && "" : t)
          : ((n = l.attributeName),
            (r = l.attributeNamespace),
            null === t
              ? e.removeAttribute(n)
              : ((t = 3 === (l = l.type) || (4 === l && !0 === t) ? "" : "" + t), r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(y, b);
        v[n] = new g(n, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
        var n = e.replace(y, b);
        v[n] = new g(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var n = e.replace(y, b);
        v[n] = new g(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        v[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (v.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        v[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      C = 60103,
      x = 60106,
      S = 60107,
      E = 60108,
      _ = 60114,
      P = 60109,
      N = 60110,
      O = 60112,
      L = 60113,
      T = 60120,
      z = 60115,
      M = 60116,
      R = 60121,
      j = 60128,
      F = 60129,
      I = 60130,
      D = 60131;
    if ("function" == typeof Symbol && Symbol.for) {
      var U = Symbol.for;
      (C = U("react.element")),
        (x = U("react.portal")),
        (S = U("react.fragment")),
        (E = U("react.strict_mode")),
        (_ = U("react.profiler")),
        (P = U("react.provider")),
        (N = U("react.context")),
        (O = U("react.forward_ref")),
        (L = U("react.suspense")),
        (T = U("react.suspense_list")),
        (z = U("react.memo")),
        (M = U("react.lazy")),
        (R = U("react.block")),
        U("react.scope"),
        (j = U("react.opaque.id")),
        (F = U("react.debug_trace_mode")),
        (I = U("react.offscreen")),
        (D = U("react.legacy_hidden"));
    }
    var V,
      A = "function" == typeof Symbol && Symbol.iterator;
    function H(e) {
      return null === e || "object" != typeof e ? null : "function" == typeof (e = (A && e[A]) || e["@@iterator"]) ? e : null;
    }
    function B(e) {
      if (void 0 === V)
        try {
          throw Error();
        } catch (e) {
          var n = e.stack.trim().match(/\n( *(at )?)/);
          V = (n && n[1]) || "";
        }
      return "\n" + V + e;
    }
    var W = !1;
    function $(e, n) {
      if (!e || W) return "";
      W = !0;
      var t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (n)
          if (
            ((n = function () {
              throw Error();
            }),
            Object.defineProperty(n.prototype, "props", {
              set: function () {
                throw Error();
              }
            }),
            "object" == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(n, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], n);
          } else {
            try {
              n.call();
            } catch (e) {
              r = e;
            }
            e.call(n.prototype);
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
            var l = e.stack.split("\n"), a = r.stack.split("\n"), o = l.length - 1, i = a.length - 1;
            1 <= o && 0 <= i && l[o] !== a[i];

          )
            i--;
          for (; 1 <= o && 0 <= i; o--, i--)
            if (l[o] !== a[i]) {
              if (1 !== o || 1 !== i)
                do {
                  if ((o--, 0 > --i || l[o] !== a[i])) return "\n" + l[o].replace(" at new ", " at ");
                } while (1 <= o && 0 <= i);
              break;
            }
        }
      } finally {
        (W = !1), (Error.prepareStackTrace = t);
      }
      return (e = e ? e.displayName || e.name : "") ? B(e) : "";
    }
    function Q(e) {
      switch (e.tag) {
        case 5:
          return B(e.type);
        case 16:
          return B("Lazy");
        case 13:
          return B("Suspense");
        case 19:
          return B("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = $(e.type, !1));
        case 11:
          return (e = $(e.type.render, !1));
        case 22:
          return (e = $(e.type._render, !1));
        case 1:
          return (e = $(e.type, !0));
        default:
          return "";
      }
    }
    function q(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case S:
          return "Fragment";
        case x:
          return "Portal";
        case _:
          return "Profiler";
        case E:
          return "StrictMode";
        case L:
          return "Suspense";
        case T:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case N:
            return (e.displayName || "Context") + ".Consumer";
          case P:
            return (e._context.displayName || "Context") + ".Provider";
          case O:
            var n = e.render;
            return (n = n.displayName || n.name || ""), e.displayName || ("" !== n ? "ForwardRef(" + n + ")" : "ForwardRef");
          case z:
            return q(e.type);
          case R:
            return q(e._render);
          case M:
            (n = e._payload), (e = e._init);
            try {
              return q(e(n));
            } catch (e) {}
        }
      return null;
    }
    function K(e) {
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
    function Y(e) {
      var n = e.type;
      return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n);
    }
    function G(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var n = Y(e) ? "checked" : "value",
            t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
            r = "" + e[n];
          if (!e.hasOwnProperty(n) && void 0 !== t && "function" == typeof t.get && "function" == typeof t.set) {
            var l = t.get,
              a = t.set;
            return (
              Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                  return l.call(this);
                },
                set: function (e) {
                  (r = "" + e), a.call(this, e);
                }
              }),
              Object.defineProperty(e, n, { enumerable: t.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[n];
                }
              }
            );
          }
        })(e));
    }
    function Z(e) {
      if (!e) return !1;
      var n = e._valueTracker;
      if (!n) return !0;
      var t = n.getValue(),
        r = "";
      return e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== t && (n.setValue(e), !0);
    }
    function X(e) {
      if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
      try {
        return e.activeElement || e.body;
      } catch (n) {
        return e.body;
      }
    }
    function J(e, n) {
      var t = n.checked;
      return l({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != t ? t : e._wrapperState.initialChecked
      });
    }
    function ee(e, n) {
      var t = null == n.defaultValue ? "" : n.defaultValue,
        r = null != n.checked ? n.checked : n.defaultChecked;
      (t = K(null != n.value ? n.value : t)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: t,
          controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value
        });
    }
    function ne(e, n) {
      null != (n = n.checked) && w(e, "checked", n, !1);
    }
    function te(e, n) {
      ne(e, n);
      var t = K(n.value),
        r = n.type;
      if (null != t)
        "number" === r ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
      else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
      n.hasOwnProperty("value") ? le(e, n.type, t) : n.hasOwnProperty("defaultValue") && le(e, n.type, K(n.defaultValue)),
        null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked);
    }
    function re(e, n, t) {
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (!(("submit" !== r && "reset" !== r) || (void 0 !== n.value && null !== n.value))) return;
        (n = "" + e._wrapperState.initialValue), t || n === e.value || (e.value = n), (e.defaultValue = n);
      }
      "" !== (t = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== t && (e.name = t);
    }
    function le(e, n, t) {
      ("number" === n && X(e.ownerDocument) === e) ||
        (null == t ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
    }
    function ae(e, n) {
      return (
        (e = l({ children: void 0 }, n)),
        (n = (function (e) {
          var n = "";
          return (
            r.Children.forEach(e, function (e) {
              null != e && (n += e);
            }),
            n
          );
        })(n.children)) && (e.children = n),
        e
      );
    }
    function oe(e, n, t, r) {
      if (((e = e.options), n)) {
        n = {};
        for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
        for (t = 0; t < e.length; t++)
          (l = n.hasOwnProperty("$" + e[t].value)), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
      } else {
        for (t = "" + K(t), n = null, l = 0; l < e.length; l++) {
          if (e[l].value === t) return (e[l].selected = !0), void (r && (e[l].defaultSelected = !0));
          null !== n || e[l].disabled || (n = e[l]);
        }
        null !== n && (n.selected = !0);
      }
    }
    function ie(e, n) {
      if (null != n.dangerouslySetInnerHTML) throw Error(o(91));
      return l({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
    }
    function ue(e, n) {
      var t = n.value;
      if (null == t) {
        if (((t = n.children), (n = n.defaultValue), null != t)) {
          if (null != n) throw Error(o(92));
          if (Array.isArray(t)) {
            if (!(1 >= t.length)) throw Error(o(93));
            t = t[0];
          }
          n = t;
        }
        null == n && (n = ""), (t = n);
      }
      e._wrapperState = { initialValue: K(t) };
    }
    function se(e, n) {
      var t = K(n.value),
        r = K(n.defaultValue);
      null != t && ((t = "" + t) !== e.value && (e.value = t), null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)),
        null != r && (e.defaultValue = "" + r);
    }
    function ce(e) {
      var n = e.textContent;
      n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n);
    }
    var fe = "http://www.w3.org/1999/xhtml",
      de = "http://www.w3.org/2000/svg";
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
    function he(e, n) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? pe(n)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var me,
      ge = (function (e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (n, t, r, l) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(n, t);
              });
            }
          : e;
      })(function (e, n) {
        if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = n;
        else {
          for (
            (me = me || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = me.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; n.firstChild; ) e.appendChild(n.firstChild);
        }
      });
    function ve(e, n) {
      if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && 3 === t.nodeType) return void (t.nodeValue = n);
      }
      e.textContent = n;
    }
    var ye = {
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
    function we(e, n, t) {
      return null == n || "boolean" == typeof n || "" === n
        ? ""
        : t || "number" != typeof n || 0 === n || (ye.hasOwnProperty(e) && ye[e])
        ? ("" + n).trim()
        : n + "px";
    }
    function ke(e, n) {
      for (var t in ((e = e.style), n))
        if (n.hasOwnProperty(t)) {
          var r = 0 === t.indexOf("--"),
            l = we(t, n[t], r);
          "float" === t && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
        }
    }
    Object.keys(ye).forEach(function (e) {
      be.forEach(function (n) {
        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (ye[n] = ye[e]);
      });
    });
    var Ce = l(
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
    function xe(e, n) {
      if (n) {
        if (Ce[e] && (null != n.children || null != n.dangerouslySetInnerHTML)) throw Error(o(137, e));
        if (null != n.dangerouslySetInnerHTML) {
          if (null != n.children) throw Error(o(60));
          if ("object" != typeof n.dangerouslySetInnerHTML || !("__html" in n.dangerouslySetInnerHTML)) throw Error(o(61));
        }
        if (null != n.style && "object" != typeof n.style) throw Error(o(62));
      }
    }
    function Se(e, n) {
      if (-1 === e.indexOf("-")) return "string" == typeof n.is;
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
    function Ee(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var _e = null,
      Pe = null,
      Ne = null;
    function Oe(e) {
      if ((e = Xr(e))) {
        if ("function" != typeof _e) throw Error(o(280));
        var n = e.stateNode;
        n && ((n = el(n)), _e(e.stateNode, e.type, n));
      }
    }
    function Le(e) {
      Pe ? (Ne ? Ne.push(e) : (Ne = [e])) : (Pe = e);
    }
    function Te() {
      if (Pe) {
        var e = Pe,
          n = Ne;
        if (((Ne = Pe = null), Oe(e), n)) for (e = 0; e < n.length; e++) Oe(n[e]);
      }
    }
    function ze(e, n) {
      return e(n);
    }
    function Me(e, n, t, r, l) {
      return e(n, t, r, l);
    }
    function Re() {}
    var je = ze,
      Fe = !1,
      Ie = !1;
    function De() {
      (null === Pe && null === Ne) || (Re(), Te());
    }
    function Ue(e, n) {
      var t = e.stateNode;
      if (null === t) return null;
      var r = el(t);
      if (null === r) return null;
      t = r[n];
      e: switch (n) {
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
      if (t && "function" != typeof t) throw Error(o(231, n, typeof t));
      return t;
    }
    var Ve = !1;
    if (f)
      try {
        var Ae = {};
        Object.defineProperty(Ae, "passive", {
          get: function () {
            Ve = !0;
          }
        }),
          window.addEventListener("test", Ae, Ae),
          window.removeEventListener("test", Ae, Ae);
      } catch (e) {
        Ve = !1;
      }
    function He(e, n, t, r, l, a, o, i, u) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(t, s);
      } catch (e) {
        this.onError(e);
      }
    }
    var Be = !1,
      We = null,
      $e = !1,
      Qe = null,
      qe = {
        onError: function (e) {
          (Be = !0), (We = e);
        }
      };
    function Ke(e, n, t, r, l, a, o, i, u) {
      (Be = !1), (We = null), He.apply(qe, arguments);
    }
    function Ye(e) {
      var n = e,
        t = e;
      if (e.alternate) for (; n.return; ) n = n.return;
      else {
        e = n;
        do {
          0 != (1026 & (n = e).flags) && (t = n.return), (e = n.return);
        } while (e);
      }
      return 3 === n.tag ? t : null;
    }
    function Ge(e) {
      if (13 === e.tag) {
        var n = e.memoizedState;
        if ((null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n)) return n.dehydrated;
      }
      return null;
    }
    function Ze(e) {
      if (Ye(e) !== e) throw Error(o(188));
    }
    function Xe(e) {
      if (
        !(e = (function (e) {
          var n = e.alternate;
          if (!n) {
            if (null === (n = Ye(e))) throw Error(o(188));
            return n !== e ? null : e;
          }
          for (var t = e, r = n; ; ) {
            var l = t.return;
            if (null === l) break;
            var a = l.alternate;
            if (null === a) {
              if (null !== (r = l.return)) {
                t = r;
                continue;
              }
              break;
            }
            if (l.child === a.child) {
              for (a = l.child; a; ) {
                if (a === t) return Ze(l), e;
                if (a === r) return Ze(l), n;
                a = a.sibling;
              }
              throw Error(o(188));
            }
            if (t.return !== r.return) (t = l), (r = a);
            else {
              for (var i = !1, u = l.child; u; ) {
                if (u === t) {
                  (i = !0), (t = l), (r = a);
                  break;
                }
                if (u === r) {
                  (i = !0), (r = l), (t = a);
                  break;
                }
                u = u.sibling;
              }
              if (!i) {
                for (u = a.child; u; ) {
                  if (u === t) {
                    (i = !0), (t = a), (r = l);
                    break;
                  }
                  if (u === r) {
                    (i = !0), (r = a), (t = l);
                    break;
                  }
                  u = u.sibling;
                }
                if (!i) throw Error(o(189));
              }
            }
            if (t.alternate !== r) throw Error(o(190));
          }
          if (3 !== t.tag) throw Error(o(188));
          return t.stateNode.current === t ? e : n;
        })(e))
      )
        return null;
      for (var n = e; ; ) {
        if (5 === n.tag || 6 === n.tag) return n;
        if (n.child) (n.child.return = n), (n = n.child);
        else {
          if (n === e) break;
          for (; !n.sibling; ) {
            if (!n.return || n.return === e) return null;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      return null;
    }
    function Je(e, n) {
      for (var t = e.alternate; null !== n; ) {
        if (n === e || n === t) return !0;
        n = n.return;
      }
      return !1;
    }
    var en,
      nn,
      tn,
      rn,
      ln = !1,
      an = [],
      on = null,
      un = null,
      sn = null,
      cn = new Map(),
      fn = new Map(),
      dn = [],
      pn =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function hn(e, n, t, r, l) {
      return { blockedOn: e, domEventName: n, eventSystemFlags: 16 | t, nativeEvent: l, targetContainers: [r] };
    }
    function mn(e, n) {
      switch (e) {
        case "focusin":
        case "focusout":
          on = null;
          break;
        case "dragenter":
        case "dragleave":
          un = null;
          break;
        case "mouseover":
        case "mouseout":
          sn = null;
          break;
        case "pointerover":
        case "pointerout":
          cn.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          fn.delete(n.pointerId);
      }
    }
    function gn(e, n, t, r, l, a) {
      return null === e || e.nativeEvent !== a
        ? ((e = hn(n, t, r, l, a)), null !== n && null !== (n = Xr(n)) && nn(n), e)
        : ((e.eventSystemFlags |= r), (n = e.targetContainers), null !== l && -1 === n.indexOf(l) && n.push(l), e);
    }
    function vn(e) {
      var n = Zr(e.target);
      if (null !== n) {
        var t = Ye(n);
        if (null !== t)
          if (13 === (n = t.tag)) {
            if (null !== (n = Ge(t)))
              return (
                (e.blockedOn = n),
                void rn(e.lanePriority, function () {
                  a.unstable_runWithPriority(e.priority, function () {
                    tn(t);
                  });
                })
              );
          } else if (3 === n && t.stateNode.hydrate) return void (e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function yn(e) {
      if (null !== e.blockedOn) return !1;
      for (var n = e.targetContainers; 0 < n.length; ) {
        var t = Jn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (null !== t) return null !== (n = Xr(t)) && nn(n), (e.blockedOn = t), !1;
        n.shift();
      }
      return !0;
    }
    function bn(e, n, t) {
      yn(e) && t.delete(n);
    }
    function wn() {
      for (ln = !1; 0 < an.length; ) {
        var e = an[0];
        if (null !== e.blockedOn) {
          null !== (e = Xr(e.blockedOn)) && en(e);
          break;
        }
        for (var n = e.targetContainers; 0 < n.length; ) {
          var t = Jn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
          if (null !== t) {
            e.blockedOn = t;
            break;
          }
          n.shift();
        }
        null === e.blockedOn && an.shift();
      }
      null !== on && yn(on) && (on = null),
        null !== un && yn(un) && (un = null),
        null !== sn && yn(sn) && (sn = null),
        cn.forEach(bn),
        fn.forEach(bn);
    }
    function kn(e, n) {
      e.blockedOn === n && ((e.blockedOn = null), ln || ((ln = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, wn)));
    }
    function Cn(e) {
      function n(n) {
        return kn(n, e);
      }
      if (0 < an.length) {
        kn(an[0], e);
        for (var t = 1; t < an.length; t++) {
          var r = an[t];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== on && kn(on, e), null !== un && kn(un, e), null !== sn && kn(sn, e), cn.forEach(n), fn.forEach(n), t = 0;
        t < dn.length;
        t++
      )
        (r = dn[t]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < dn.length && null === (t = dn[0]).blockedOn; ) vn(t), null === t.blockedOn && dn.shift();
    }
    function xn(e, n) {
      var t = {};
      return (t[e.toLowerCase()] = n.toLowerCase()), (t["Webkit" + e] = "webkit" + n), (t["Moz" + e] = "moz" + n), t;
    }
    var Sn = {
        animationend: xn("Animation", "AnimationEnd"),
        animationiteration: xn("Animation", "AnimationIteration"),
        animationstart: xn("Animation", "AnimationStart"),
        transitionend: xn("Transition", "TransitionEnd")
      },
      En = {},
      _n = {};
    function Pn(e) {
      if (En[e]) return En[e];
      if (!Sn[e]) return e;
      var n,
        t = Sn[e];
      for (n in t) if (t.hasOwnProperty(n) && n in _n) return (En[e] = t[n]);
      return e;
    }
    f &&
      ((_n = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation),
      "TransitionEvent" in window || delete Sn.transitionend.transition);
    var Nn = Pn("animationend"),
      On = Pn("animationiteration"),
      Ln = Pn("animationstart"),
      Tn = Pn("transitionend"),
      zn = new Map(),
      Mn = new Map(),
      Rn = [
        "abort",
        "abort",
        Nn,
        "animationEnd",
        On,
        "animationIteration",
        Ln,
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
        Tn,
        "transitionEnd",
        "waiting",
        "waiting"
      ];
    function jn(e, n) {
      for (var t = 0; t < e.length; t += 2) {
        var r = e[t],
          l = e[t + 1];
        (l = "on" + (l[0].toUpperCase() + l.slice(1))), Mn.set(r, n), zn.set(r, l), s(l, [r]);
      }
    }
    (0, a.unstable_now)();
    var Fn = 8;
    function In(e) {
      if (0 != (1 & e)) return (Fn = 15), 1;
      if (0 != (2 & e)) return (Fn = 14), 2;
      if (0 != (4 & e)) return (Fn = 13), 4;
      var n = 24 & e;
      return 0 !== n
        ? ((Fn = 12), n)
        : 0 != (32 & e)
        ? ((Fn = 11), 32)
        : 0 !== (n = 192 & e)
        ? ((Fn = 10), n)
        : 0 != (256 & e)
        ? ((Fn = 9), 256)
        : 0 !== (n = 3584 & e)
        ? ((Fn = 8), n)
        : 0 != (4096 & e)
        ? ((Fn = 7), 4096)
        : 0 !== (n = 4186112 & e)
        ? ((Fn = 6), n)
        : 0 !== (n = 62914560 & e)
        ? ((Fn = 5), n)
        : 67108864 & e
        ? ((Fn = 4), 67108864)
        : 0 != (134217728 & e)
        ? ((Fn = 3), 134217728)
        : 0 !== (n = 805306368 & e)
        ? ((Fn = 2), n)
        : 0 != (1073741824 & e)
        ? ((Fn = 1), 1073741824)
        : ((Fn = 8), e);
    }
    function Dn(e, n) {
      var t = e.pendingLanes;
      if (0 === t) return (Fn = 0);
      var r = 0,
        l = 0,
        a = e.expiredLanes,
        o = e.suspendedLanes,
        i = e.pingedLanes;
      if (0 !== a) (r = a), (l = Fn = 15);
      else if (0 !== (a = 134217727 & t)) {
        var u = a & ~o;
        0 !== u ? ((r = In(u)), (l = Fn)) : 0 !== (i &= a) && ((r = In(i)), (l = Fn));
      } else 0 !== (a = t & ~o) ? ((r = In(a)), (l = Fn)) : 0 !== i && ((r = In(i)), (l = Fn));
      if (0 === r) return 0;
      if (((r = t & (((0 > (r = 31 - Wn(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== n && n !== r && 0 == (n & o))) {
        if ((In(n), l <= Fn)) return n;
        Fn = l;
      }
      if (0 !== (n = e.entangledLanes)) for (e = e.entanglements, n &= r; 0 < n; ) (l = 1 << (t = 31 - Wn(n))), (r |= e[t]), (n &= ~l);
      return r;
    }
    function Un(e) {
      return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
    }
    function Vn(e, n) {
      switch (e) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return 0 === (e = An(24 & ~n)) ? Vn(10, n) : e;
        case 10:
          return 0 === (e = An(192 & ~n)) ? Vn(8, n) : e;
        case 8:
          return 0 === (e = An(3584 & ~n)) && 0 === (e = An(4186112 & ~n)) && (e = 512), e;
        case 2:
          return 0 === (n = An(805306368 & ~n)) && (n = 268435456), n;
      }
      throw Error(o(358, e));
    }
    function An(e) {
      return e & -e;
    }
    function Hn(e) {
      for (var n = [], t = 0; 31 > t; t++) n.push(e);
      return n;
    }
    function Bn(e, n, t) {
      e.pendingLanes |= n;
      var r = n - 1;
      (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(n = 31 - Wn(n))] = t);
    }
    var Wn = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 === e ? 32 : (31 - (($n(e) / Qn) | 0)) | 0;
          },
      $n = Math.log,
      Qn = Math.LN2;
    var qn = a.unstable_UserBlockingPriority,
      Kn = a.unstable_runWithPriority,
      Yn = !0;
    function Gn(e, n, t, r) {
      Fe || Re();
      var l = Xn,
        a = Fe;
      Fe = !0;
      try {
        Me(l, e, n, t, r);
      } finally {
        (Fe = a) || De();
      }
    }
    function Zn(e, n, t, r) {
      Kn(qn, Xn.bind(null, e, n, t, r));
    }
    function Xn(e, n, t, r) {
      var l;
      if (Yn)
        if ((l = 0 == (4 & n)) && 0 < an.length && -1 < pn.indexOf(e)) (e = hn(null, e, n, t, r)), an.push(e);
        else {
          var a = Jn(e, n, t, r);
          if (null === a) l && mn(e, r);
          else {
            if (l) {
              if (-1 < pn.indexOf(e)) return (e = hn(a, e, n, t, r)), void an.push(e);
              if (
                (function (e, n, t, r, l) {
                  switch (n) {
                    case "focusin":
                      return (on = gn(on, e, n, t, r, l)), !0;
                    case "dragenter":
                      return (un = gn(un, e, n, t, r, l)), !0;
                    case "mouseover":
                      return (sn = gn(sn, e, n, t, r, l)), !0;
                    case "pointerover":
                      var a = l.pointerId;
                      return cn.set(a, gn(cn.get(a) || null, e, n, t, r, l)), !0;
                    case "gotpointercapture":
                      return (a = l.pointerId), fn.set(a, gn(fn.get(a) || null, e, n, t, r, l)), !0;
                  }
                  return !1;
                })(a, e, n, t, r)
              )
                return;
              mn(e, r);
            }
            Lr(e, n, r, null, t);
          }
        }
    }
    function Jn(e, n, t, r) {
      var l = Ee(r);
      if (null !== (l = Zr(l))) {
        var a = Ye(l);
        if (null === a) l = null;
        else {
          var o = a.tag;
          if (13 === o) {
            if (null !== (l = Ge(a))) return l;
            l = null;
          } else if (3 === o) {
            if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
            l = null;
          } else a !== l && (l = null);
        }
      }
      return Lr(e, n, r, l, t), null;
    }
    var et = null,
      nt = null,
      tt = null;
    function rt() {
      if (tt) return tt;
      var e,
        n,
        t = nt,
        r = t.length,
        l = "value" in et ? et.value : et.textContent,
        a = l.length;
      for (e = 0; e < r && t[e] === l[e]; e++);
      var o = r - e;
      for (n = 1; n <= o && t[r - n] === l[a - n]; n++);
      return (tt = l.slice(e, 1 < n ? 1 - n : void 0));
    }
    function lt(e) {
      var n = e.keyCode;
      return "charCode" in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : (e = n), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
    }
    function at() {
      return !0;
    }
    function ot() {
      return !1;
    }
    function it(e) {
      function n(n, t, r, l, a) {
        for (var o in ((this._reactName = n),
        (this._targetInst = r),
        (this.type = t),
        (this.nativeEvent = l),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
        return (
          (this.isDefaultPrevented = (null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue) ? at : ot),
          (this.isPropagationStopped = ot),
          this
        );
      }
      return (
        l(n.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = at));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = at));
          },
          persist: function () {},
          isPersistent: at
        }),
        n
      );
    }
    var ut,
      st,
      ct,
      ft = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      },
      dt = it(ft),
      pt = l({}, ft, { view: 0, detail: 0 }),
      ht = it(pt),
      mt = l({}, pt, {
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
        getModifierState: _t,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== ct &&
                (ct && "mousemove" === e.type ? ((ut = e.screenX - ct.screenX), (st = e.screenY - ct.screenY)) : (st = ut = 0), (ct = e)),
              ut);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : st;
        }
      }),
      gt = it(mt),
      vt = it(l({}, mt, { dataTransfer: 0 })),
      yt = it(l({}, pt, { relatedTarget: 0 })),
      bt = it(l({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      wt = it(
        l({}, ft, {
          clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
          }
        })
      ),
      kt = it(l({}, ft, { data: 0 })),
      Ct = {
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
      xt = {
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
      St = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Et(e) {
      var n = this.nativeEvent;
      return n.getModifierState ? n.getModifierState(e) : !!(e = St[e]) && !!n[e];
    }
    function _t() {
      return Et;
    }
    var Pt = it(
        l({}, pt, {
          key: function (e) {
            if (e.key) {
              var n = Ct[e.key] || e.key;
              if ("Unidentified" !== n) return n;
            }
            return "keypress" === e.type
              ? 13 === (e = lt(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? xt[e.keyCode] || "Unidentified"
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
          getModifierState: _t,
          charCode: function (e) {
            return "keypress" === e.type ? lt(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type ? lt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          }
        })
      ),
      Nt = it(
        l({}, mt, {
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
      Ot = it(
        l({}, pt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _t })
      ),
      Lt = it(l({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Tt = it(
        l({}, mt, {
          deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
          },
          deltaZ: 0,
          deltaMode: 0
        })
      ),
      zt = [9, 13, 27, 32],
      Mt = f && "CompositionEvent" in window,
      Rt = null;
    f && "documentMode" in document && (Rt = document.documentMode);
    var jt = f && "TextEvent" in window && !Rt,
      Ft = f && (!Mt || (Rt && 8 < Rt && 11 >= Rt)),
      It = String.fromCharCode(32),
      Dt = !1;
    function Ut(e, n) {
      switch (e) {
        case "keyup":
          return -1 !== zt.indexOf(n.keyCode);
        case "keydown":
          return 229 !== n.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Vt(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var At = !1;
    var Ht = {
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
    function Bt(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === n ? !!Ht[e.type] : "textarea" === n;
    }
    function Wt(e, n, t, r) {
      Le(r), 0 < (n = zr(n, "onChange")).length && ((t = new dt("onChange", "change", null, t, r)), e.push({ event: t, listeners: n }));
    }
    var $t = null,
      Qt = null;
    function qt(e) {
      Sr(e, 0);
    }
    function Kt(e) {
      if (Z(Jr(e))) return e;
    }
    function Yt(e, n) {
      if ("change" === e) return n;
    }
    var Gt = !1;
    if (f) {
      var Zt;
      if (f) {
        var Xt = "oninput" in document;
        if (!Xt) {
          var Jt = document.createElement("div");
          Jt.setAttribute("oninput", "return;"), (Xt = "function" == typeof Jt.oninput);
        }
        Zt = Xt;
      } else Zt = !1;
      Gt = Zt && (!document.documentMode || 9 < document.documentMode);
    }
    function er() {
      $t && ($t.detachEvent("onpropertychange", nr), (Qt = $t = null));
    }
    function nr(e) {
      if ("value" === e.propertyName && Kt(Qt)) {
        var n = [];
        if ((Wt(n, Qt, e, Ee(e)), (e = qt), Fe)) e(n);
        else {
          Fe = !0;
          try {
            ze(e, n);
          } finally {
            (Fe = !1), De();
          }
        }
      }
    }
    function tr(e, n, t) {
      "focusin" === e ? (er(), (Qt = t), ($t = n).attachEvent("onpropertychange", nr)) : "focusout" === e && er();
    }
    function rr(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Kt(Qt);
    }
    function lr(e, n) {
      if ("click" === e) return Kt(n);
    }
    function ar(e, n) {
      if ("input" === e || "change" === e) return Kt(n);
    }
    var or =
        "function" == typeof Object.is
          ? Object.is
          : function (e, n) {
              return (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n);
            },
      ir = Object.prototype.hasOwnProperty;
    function ur(e, n) {
      if (or(e, n)) return !0;
      if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
      var t = Object.keys(e),
        r = Object.keys(n);
      if (t.length !== r.length) return !1;
      for (r = 0; r < t.length; r++) if (!ir.call(n, t[r]) || !or(e[t[r]], n[t[r]])) return !1;
      return !0;
    }
    function sr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function cr(e, n) {
      var t,
        r = sr(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((t = e + r.textContent.length), e <= n && t >= n)) return { node: r, offset: n - e };
          e = t;
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
        r = sr(r);
      }
    }
    function fr() {
      for (var e = window, n = X(); n instanceof e.HTMLIFrameElement; ) {
        try {
          var t = "string" == typeof n.contentWindow.location.href;
        } catch (e) {
          t = !1;
        }
        if (!t) break;
        n = X((e = n.contentWindow).document);
      }
      return n;
    }
    function dr(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        n &&
        (("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) ||
          "textarea" === n ||
          "true" === e.contentEditable)
      );
    }
    var pr = f && "documentMode" in document && 11 >= document.documentMode,
      hr = null,
      mr = null,
      gr = null,
      vr = !1;
    function yr(e, n, t) {
      var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      vr ||
        null == hr ||
        hr !== X(r) ||
        ("selectionStart" in (r = hr) && dr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = {
              anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset
            }),
        (gr && ur(gr, r)) ||
          ((gr = r),
          0 < (r = zr(mr, "onSelect")).length &&
            ((n = new dt("onSelect", "select", null, n, t)), e.push({ event: n, listeners: r }), (n.target = hr))));
    }
    jn(
      "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
        " "
      ),
      0
    ),
      jn(
        "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
          " "
        ),
        1
      ),
      jn(Rn, 2);
    for (
      var br = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), wr = 0;
      wr < br.length;
      wr++
    )
      Mn.set(br[wr], 0);
    c("onMouseEnter", ["mouseout", "mouseover"]),
      c("onMouseLeave", ["mouseout", "mouseover"]),
      c("onPointerEnter", ["pointerout", "pointerover"]),
      c("onPointerLeave", ["pointerout", "pointerover"]),
      s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
      s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
      s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
      s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
      s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var kr =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      Cr = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
    function xr(e, n, t) {
      var r = e.type || "unknown-event";
      (e.currentTarget = t),
        (function (e, n, t, r, l, a, i, u, s) {
          if ((Ke.apply(this, arguments), Be)) {
            if (!Be) throw Error(o(198));
            var c = We;
            (Be = !1), (We = null), $e || (($e = !0), (Qe = c));
          }
        })(r, n, void 0, e),
        (e.currentTarget = null);
    }
    function Sr(e, n) {
      n = 0 != (4 & n);
      for (var t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.event;
        r = r.listeners;
        e: {
          var a = void 0;
          if (n)
            for (var o = r.length - 1; 0 <= o; o--) {
              var i = r[o],
                u = i.instance,
                s = i.currentTarget;
              if (((i = i.listener), u !== a && l.isPropagationStopped())) break e;
              xr(l, i, s), (a = u);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (((u = (i = r[o]).instance), (s = i.currentTarget), (i = i.listener), u !== a && l.isPropagationStopped())) break e;
              xr(l, i, s), (a = u);
            }
        }
      }
      if ($e) throw ((e = Qe), ($e = !1), (Qe = null), e);
    }
    function Er(e, n) {
      var t = nl(n),
        r = e + "__bubble";
      t.has(r) || (Or(n, e, 2, !1), t.add(r));
    }
    var _r = "_reactListening" + Math.random().toString(36).slice(2);
    function Pr(e) {
      e[_r] ||
        ((e[_r] = !0),
        i.forEach(function (n) {
          Cr.has(n) || Nr(n, !1, e, null), Nr(n, !0, e, null);
        }));
    }
    function Nr(e, n, t, r) {
      var l = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
        a = t;
      if (("selectionchange" === e && 9 !== t.nodeType && (a = t.ownerDocument), null !== r && !n && Cr.has(e))) {
        if ("scroll" !== e) return;
        (l |= 2), (a = r);
      }
      var o = nl(a),
        i = e + "__" + (n ? "capture" : "bubble");
      o.has(i) || (n && (l |= 4), Or(a, e, l, n), o.add(i));
    }
    function Or(e, n, t, r) {
      var l = Mn.get(n);
      switch (void 0 === l ? 2 : l) {
        case 0:
          l = Gn;
          break;
        case 1:
          l = Zn;
          break;
        default:
          l = Xn;
      }
      (t = l.bind(null, n, t, e)),
        (l = void 0),
        !Ve || ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) || (l = !0),
        r
          ? void 0 !== l
            ? e.addEventListener(n, t, { capture: !0, passive: l })
            : e.addEventListener(n, t, !0)
          : void 0 !== l
          ? e.addEventListener(n, t, { passive: l })
          : e.addEventListener(n, t, !1);
    }
    function Lr(e, n, t, r, l) {
      var a = r;
      if (0 == (1 & n) && 0 == (2 & n) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var o = r.tag;
          if (3 === o || 4 === o) {
            var i = r.stateNode.containerInfo;
            if (i === l || (8 === i.nodeType && i.parentNode === l)) break;
            if (4 === o)
              for (o = r.return; null !== o; ) {
                var u = o.tag;
                if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === l || (8 === u.nodeType && u.parentNode === l))) return;
                o = o.return;
              }
            for (; null !== i; ) {
              if (null === (o = Zr(i))) return;
              if (5 === (u = o.tag) || 6 === u) {
                r = a = o;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
      !(function (e, n, t) {
        if (Ie) return e(n, t);
        Ie = !0;
        try {
          je(e, n, t);
        } finally {
          (Ie = !1), De();
        }
      })(function () {
        var r = a,
          l = Ee(t),
          o = [];
        e: {
          var i = zn.get(e);
          if (void 0 !== i) {
            var u = dt,
              s = e;
            switch (e) {
              case "keypress":
                if (0 === lt(t)) break e;
              case "keydown":
              case "keyup":
                u = Pt;
                break;
              case "focusin":
                (s = "focus"), (u = yt);
                break;
              case "focusout":
                (s = "blur"), (u = yt);
                break;
              case "beforeblur":
              case "afterblur":
                u = yt;
                break;
              case "click":
                if (2 === t.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                u = gt;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                u = vt;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                u = Ot;
                break;
              case Nn:
              case On:
              case Ln:
                u = bt;
                break;
              case Tn:
                u = Lt;
                break;
              case "scroll":
                u = ht;
                break;
              case "wheel":
                u = Tt;
                break;
              case "copy":
              case "cut":
              case "paste":
                u = wt;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                u = Nt;
            }
            var c = 0 != (4 & n),
              f = !c && "scroll" === e,
              d = c ? (null !== i ? i + "Capture" : null) : i;
            c = [];
            for (var p, h = r; null !== h; ) {
              var m = (p = h).stateNode;
              if ((5 === p.tag && null !== m && ((p = m), null !== d && null != (m = Ue(h, d)) && c.push(Tr(h, m, p))), f)) break;
              h = h.return;
            }
            0 < c.length && ((i = new u(i, s, null, t, l)), o.push({ event: i, listeners: c }));
          }
        }
        if (0 == (7 & n)) {
          if (
            ((u = "mouseout" === e || "pointerout" === e),
            (!(i = "mouseover" === e || "pointerover" === e) ||
              0 != (16 & n) ||
              !(s = t.relatedTarget || t.fromElement) ||
              (!Zr(s) && !s[Yr])) &&
              (u || i) &&
              ((i = l.window === l ? l : (i = l.ownerDocument) ? i.defaultView || i.parentWindow : window),
              u
                ? ((u = r),
                  null !== (s = (s = t.relatedTarget || t.toElement) ? Zr(s) : null) &&
                    (s !== (f = Ye(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                    (s = null))
                : ((u = null), (s = r)),
              u !== s))
          ) {
            if (
              ((c = gt),
              (m = "onMouseLeave"),
              (d = "onMouseEnter"),
              (h = "mouse"),
              ("pointerout" !== e && "pointerover" !== e) || ((c = Nt), (m = "onPointerLeave"), (d = "onPointerEnter"), (h = "pointer")),
              (f = null == u ? i : Jr(u)),
              (p = null == s ? i : Jr(s)),
              ((i = new c(m, h + "leave", u, t, l)).target = f),
              (i.relatedTarget = p),
              (m = null),
              Zr(l) === r && (((c = new c(d, h + "enter", s, t, l)).target = p), (c.relatedTarget = f), (m = c)),
              (f = m),
              u && s)
            )
              e: {
                for (d = s, h = 0, p = c = u; p; p = Mr(p)) h++;
                for (p = 0, m = d; m; m = Mr(m)) p++;
                for (; 0 < h - p; ) (c = Mr(c)), h--;
                for (; 0 < p - h; ) (d = Mr(d)), p--;
                for (; h--; ) {
                  if (c === d || (null !== d && c === d.alternate)) break e;
                  (c = Mr(c)), (d = Mr(d));
                }
                c = null;
              }
            else c = null;
            null !== u && Rr(o, i, u, c, !1), null !== s && null !== f && Rr(o, f, s, c, !0);
          }
          if ("select" === (u = (i = r ? Jr(r) : window).nodeName && i.nodeName.toLowerCase()) || ("input" === u && "file" === i.type))
            var g = Yt;
          else if (Bt(i))
            if (Gt) g = ar;
            else {
              g = rr;
              var v = tr;
            }
          else (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (g = lr);
          switch (
            (g && (g = g(e, r))
              ? Wt(o, g, t, l)
              : (v && v(e, i, r),
                "focusout" === e && (v = i._wrapperState) && v.controlled && "number" === i.type && le(i, "number", i.value)),
            (v = r ? Jr(r) : window),
            e)
          ) {
            case "focusin":
              (Bt(v) || "true" === v.contentEditable) && ((hr = v), (mr = r), (gr = null));
              break;
            case "focusout":
              gr = mr = hr = null;
              break;
            case "mousedown":
              vr = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (vr = !1), yr(o, t, l);
              break;
            case "selectionchange":
              if (pr) break;
            case "keydown":
            case "keyup":
              yr(o, t, l);
          }
          var y;
          if (Mt)
            e: {
              switch (e) {
                case "compositionstart":
                  var b = "onCompositionStart";
                  break e;
                case "compositionend":
                  b = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  b = "onCompositionUpdate";
                  break e;
              }
              b = void 0;
            }
          else At ? Ut(e, t) && (b = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (b = "onCompositionStart");
          b &&
            (Ft &&
              "ko" !== t.locale &&
              (At || "onCompositionStart" !== b
                ? "onCompositionEnd" === b && At && (y = rt())
                : ((nt = "value" in (et = l) ? et.value : et.textContent), (At = !0))),
            0 < (v = zr(r, b)).length &&
              ((b = new kt(b, e, null, t, l)),
              o.push({ event: b, listeners: v }),
              y ? (b.data = y) : null !== (y = Vt(t)) && (b.data = y))),
            (y = jt
              ? (function (e, n) {
                  switch (e) {
                    case "compositionend":
                      return Vt(n);
                    case "keypress":
                      return 32 !== n.which ? null : ((Dt = !0), It);
                    case "textInput":
                      return (e = n.data) === It && Dt ? null : e;
                    default:
                      return null;
                  }
                })(e, t)
              : (function (e, n) {
                  if (At) return "compositionend" === e || (!Mt && Ut(e, n)) ? ((e = rt()), (tt = nt = et = null), (At = !1), e) : null;
                  switch (e) {
                    case "paste":
                      return null;
                    case "keypress":
                      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
                        if (n.char && 1 < n.char.length) return n.char;
                        if (n.which) return String.fromCharCode(n.which);
                      }
                      return null;
                    case "compositionend":
                      return Ft && "ko" !== n.locale ? null : n.data;
                    default:
                      return null;
                  }
                })(e, t)) &&
              0 < (r = zr(r, "onBeforeInput")).length &&
              ((l = new kt("onBeforeInput", "beforeinput", null, t, l)), o.push({ event: l, listeners: r }), (l.data = y));
        }
        Sr(o, n);
      });
    }
    function Tr(e, n, t) {
      return { instance: e, listener: n, currentTarget: t };
    }
    function zr(e, n) {
      for (var t = n + "Capture", r = []; null !== e; ) {
        var l = e,
          a = l.stateNode;
        5 === l.tag &&
          null !== a &&
          ((l = a), null != (a = Ue(e, t)) && r.unshift(Tr(e, a, l)), null != (a = Ue(e, n)) && r.push(Tr(e, a, l))),
          (e = e.return);
      }
      return r;
    }
    function Mr(e) {
      if (null === e) return null;
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function Rr(e, n, t, r, l) {
      for (var a = n._reactName, o = []; null !== t && t !== r; ) {
        var i = t,
          u = i.alternate,
          s = i.stateNode;
        if (null !== u && u === r) break;
        5 === i.tag &&
          null !== s &&
          ((i = s), l ? null != (u = Ue(t, a)) && o.unshift(Tr(t, u, i)) : l || (null != (u = Ue(t, a)) && o.push(Tr(t, u, i)))),
          (t = t.return);
      }
      0 !== o.length && e.push({ event: n, listeners: o });
    }
    function jr() {}
    var Fr = null,
      Ir = null;
    function Dr(e, n) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!n.autoFocus;
      }
      return !1;
    }
    function Ur(e, n) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" == typeof n.children ||
        "number" == typeof n.children ||
        ("object" == typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html)
      );
    }
    var Vr = "function" == typeof setTimeout ? setTimeout : void 0,
      Ar = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function Hr(e) {
      1 === e.nodeType ? (e.textContent = "") : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
    }
    function Br(e) {
      for (; null != e; e = e.nextSibling) {
        var n = e.nodeType;
        if (1 === n || 3 === n) break;
      }
      return e;
    }
    function Wr(e) {
      e = e.previousSibling;
      for (var n = 0; e; ) {
        if (8 === e.nodeType) {
          var t = e.data;
          if ("$" === t || "$!" === t || "$?" === t) {
            if (0 === n) return e;
            n--;
          } else "/$" === t && n++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var $r = 0;
    var Qr = Math.random().toString(36).slice(2),
      qr = "__reactFiber$" + Qr,
      Kr = "__reactProps$" + Qr,
      Yr = "__reactContainer$" + Qr,
      Gr = "__reactEvents$" + Qr;
    function Zr(e) {
      var n = e[qr];
      if (n) return n;
      for (var t = e.parentNode; t; ) {
        if ((n = t[Yr] || t[qr])) {
          if (((t = n.alternate), null !== n.child || (null !== t && null !== t.child)))
            for (e = Wr(e); null !== e; ) {
              if ((t = e[qr])) return t;
              e = Wr(e);
            }
          return n;
        }
        t = (e = t).parentNode;
      }
      return null;
    }
    function Xr(e) {
      return !(e = e[qr] || e[Yr]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
    }
    function Jr(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(o(33));
    }
    function el(e) {
      return e[Kr] || null;
    }
    function nl(e) {
      var n = e[Gr];
      return void 0 === n && (n = e[Gr] = new Set()), n;
    }
    var tl = [],
      rl = -1;
    function ll(e) {
      return { current: e };
    }
    function al(e) {
      0 > rl || ((e.current = tl[rl]), (tl[rl] = null), rl--);
    }
    function ol(e, n) {
      rl++, (tl[rl] = e.current), (e.current = n);
    }
    var il = {},
      ul = ll(il),
      sl = ll(!1),
      cl = il;
    function fl(e, n) {
      var t = e.type.contextTypes;
      if (!t) return il;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
      var l,
        a = {};
      for (l in t) a[l] = n[l];
      return (
        r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n), (e.__reactInternalMemoizedMaskedChildContext = a)), a
      );
    }
    function dl(e) {
      return null != (e = e.childContextTypes);
    }
    function pl() {
      al(sl), al(ul);
    }
    function hl(e, n, t) {
      if (ul.current !== il) throw Error(o(168));
      ol(ul, n), ol(sl, t);
    }
    function ml(e, n, t) {
      var r = e.stateNode;
      if (((e = n.childContextTypes), "function" != typeof r.getChildContext)) return t;
      for (var a in (r = r.getChildContext())) if (!(a in e)) throw Error(o(108, q(n) || "Unknown", a));
      return l({}, t, r);
    }
    function gl(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || il), (cl = ul.current), ol(ul, e), ol(sl, sl.current), !0
      );
    }
    function vl(e, n, t) {
      var r = e.stateNode;
      if (!r) throw Error(o(169));
      t ? ((e = ml(e, n, cl)), (r.__reactInternalMemoizedMergedChildContext = e), al(sl), al(ul), ol(ul, e)) : al(sl), ol(sl, t);
    }
    var yl = null,
      bl = null,
      wl = a.unstable_runWithPriority,
      kl = a.unstable_scheduleCallback,
      Cl = a.unstable_cancelCallback,
      xl = a.unstable_shouldYield,
      Sl = a.unstable_requestPaint,
      El = a.unstable_now,
      _l = a.unstable_getCurrentPriorityLevel,
      Pl = a.unstable_ImmediatePriority,
      Nl = a.unstable_UserBlockingPriority,
      Ol = a.unstable_NormalPriority,
      Ll = a.unstable_LowPriority,
      Tl = a.unstable_IdlePriority,
      zl = {},
      Ml = void 0 !== Sl ? Sl : function () {},
      Rl = null,
      jl = null,
      Fl = !1,
      Il = El(),
      Dl =
        1e4 > Il
          ? El
          : function () {
              return El() - Il;
            };
    function Ul() {
      switch (_l()) {
        case Pl:
          return 99;
        case Nl:
          return 98;
        case Ol:
          return 97;
        case Ll:
          return 96;
        case Tl:
          return 95;
        default:
          throw Error(o(332));
      }
    }
    function Vl(e) {
      switch (e) {
        case 99:
          return Pl;
        case 98:
          return Nl;
        case 97:
          return Ol;
        case 96:
          return Ll;
        case 95:
          return Tl;
        default:
          throw Error(o(332));
      }
    }
    function Al(e, n) {
      return (e = Vl(e)), wl(e, n);
    }
    function Hl(e, n, t) {
      return (e = Vl(e)), kl(e, n, t);
    }
    function Bl() {
      if (null !== jl) {
        var e = jl;
        (jl = null), Cl(e);
      }
      Wl();
    }
    function Wl() {
      if (!Fl && null !== Rl) {
        Fl = !0;
        var e = 0;
        try {
          var n = Rl;
          Al(99, function () {
            for (; e < n.length; e++) {
              var t = n[e];
              do {
                t = t(!0);
              } while (null !== t);
            }
          }),
            (Rl = null);
        } catch (n) {
          throw (null !== Rl && (Rl = Rl.slice(e + 1)), kl(Pl, Bl), n);
        } finally {
          Fl = !1;
        }
      }
    }
    var $l = k.ReactCurrentBatchConfig;
    function Ql(e, n) {
      if (e && e.defaultProps) {
        for (var t in ((n = l({}, n)), (e = e.defaultProps))) void 0 === n[t] && (n[t] = e[t]);
        return n;
      }
      return n;
    }
    var ql = ll(null),
      Kl = null,
      Yl = null,
      Gl = null;
    function Zl() {
      Gl = Yl = Kl = null;
    }
    function Xl(e) {
      var n = ql.current;
      al(ql), (e.type._context._currentValue = n);
    }
    function Jl(e, n) {
      for (; null !== e; ) {
        var t = e.alternate;
        if ((e.childLanes & n) === n) {
          if (null === t || (t.childLanes & n) === n) break;
          t.childLanes |= n;
        } else (e.childLanes |= n), null !== t && (t.childLanes |= n);
        e = e.return;
      }
    }
    function ea(e, n) {
      (Kl = e),
        (Gl = Yl = null),
        null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & n) && (zo = !0), (e.firstContext = null));
    }
    function na(e, n) {
      if (Gl !== e && !1 !== n && 0 !== n)
        if (
          (("number" == typeof n && 1073741823 !== n) || ((Gl = e), (n = 1073741823)),
          (n = { context: e, observedBits: n, next: null }),
          null === Yl)
        ) {
          if (null === Kl) throw Error(o(308));
          (Yl = n), (Kl.dependencies = { lanes: 0, firstContext: n, responders: null });
        } else Yl = Yl.next = n;
      return e._currentValue;
    }
    var ta = !1;
    function ra(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
    }
    function la(e, n) {
      (e = e.updateQueue),
        n.updateQueue === e &&
          (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
          });
    }
    function aa(e, n) {
      return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
    }
    function oa(e, n) {
      if (null !== (e = e.updateQueue)) {
        var t = (e = e.shared).pending;
        null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)), (e.pending = n);
      }
    }
    function ia(e, n) {
      var t = e.updateQueue,
        r = e.alternate;
      if (null !== r && t === (r = r.updateQueue)) {
        var l = null,
          a = null;
        if (null !== (t = t.firstBaseUpdate)) {
          do {
            var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
            null === a ? (l = a = o) : (a = a.next = o), (t = t.next);
          } while (null !== t);
          null === a ? (l = a = n) : (a = a.next = n);
        } else l = a = n;
        return (
          (t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: r.shared, effects: r.effects }),
          void (e.updateQueue = t)
        );
      }
      null === (e = t.lastBaseUpdate) ? (t.firstBaseUpdate = n) : (e.next = n), (t.lastBaseUpdate = n);
    }
    function ua(e, n, t, r) {
      var a = e.updateQueue;
      ta = !1;
      var o = a.firstBaseUpdate,
        i = a.lastBaseUpdate,
        u = a.shared.pending;
      if (null !== u) {
        a.shared.pending = null;
        var s = u,
          c = s.next;
        (s.next = null), null === i ? (o = c) : (i.next = c), (i = s);
        var f = e.alternate;
        if (null !== f) {
          var d = (f = f.updateQueue).lastBaseUpdate;
          d !== i && (null === d ? (f.firstBaseUpdate = c) : (d.next = c), (f.lastBaseUpdate = s));
        }
      }
      if (null !== o) {
        for (d = a.baseState, i = 0, f = c = s = null; ; ) {
          u = o.lane;
          var p = o.eventTime;
          if ((r & u) === u) {
            null !== f && (f = f.next = { eventTime: p, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
            e: {
              var h = e,
                m = o;
              switch (((u = n), (p = t), m.tag)) {
                case 1:
                  if ("function" == typeof (h = m.payload)) {
                    d = h.call(p, d, u);
                    break e;
                  }
                  d = h;
                  break e;
                case 3:
                  h.flags = (-4097 & h.flags) | 64;
                case 0:
                  if (null == (u = "function" == typeof (h = m.payload) ? h.call(p, d, u) : h)) break e;
                  d = l({}, d, u);
                  break e;
                case 2:
                  ta = !0;
              }
            }
            null !== o.callback && ((e.flags |= 32), null === (u = a.effects) ? (a.effects = [o]) : u.push(o));
          } else
            (p = { eventTime: p, lane: u, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
              null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
              (i |= u);
          if (null === (o = o.next)) {
            if (null === (u = a.shared.pending)) break;
            (o = u.next), (u.next = null), (a.lastBaseUpdate = u), (a.shared.pending = null);
          }
        }
        null === f && (s = d),
          (a.baseState = s),
          (a.firstBaseUpdate = c),
          (a.lastBaseUpdate = f),
          (Ri |= i),
          (e.lanes = i),
          (e.memoizedState = d);
      }
    }
    function sa(e, n, t) {
      if (((e = n.effects), (n.effects = null), null !== e))
        for (n = 0; n < e.length; n++) {
          var r = e[n],
            l = r.callback;
          if (null !== l) {
            if (((r.callback = null), (r = t), "function" != typeof l)) throw Error(o(191, l));
            l.call(r);
          }
        }
    }
    var ca = new r.Component().refs;
    function fa(e, n, t, r) {
      (t = null == (t = t(r, (n = e.memoizedState))) ? n : l({}, n, t)),
        (e.memoizedState = t),
        0 === e.lanes && (e.updateQueue.baseState = t);
    }
    var da = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && Ye(e) === e;
      },
      enqueueSetState: function (e, n, t) {
        e = e._reactInternals;
        var r = au(),
          l = ou(e),
          a = aa(r, l);
        (a.payload = n), null != t && (a.callback = t), oa(e, a), iu(e, l, r);
      },
      enqueueReplaceState: function (e, n, t) {
        e = e._reactInternals;
        var r = au(),
          l = ou(e),
          a = aa(r, l);
        (a.tag = 1), (a.payload = n), null != t && (a.callback = t), oa(e, a), iu(e, l, r);
      },
      enqueueForceUpdate: function (e, n) {
        e = e._reactInternals;
        var t = au(),
          r = ou(e),
          l = aa(t, r);
        (l.tag = 2), null != n && (l.callback = n), oa(e, l), iu(e, r, t);
      }
    };
    function pa(e, n, t, r, l, a, o) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !n.prototype || !n.prototype.isPureReactComponent || !ur(t, r) || !ur(l, a);
    }
    function ha(e, n, t) {
      var r = !1,
        l = il,
        a = n.contextType;
      return (
        "object" == typeof a && null !== a
          ? (a = na(a))
          : ((l = dl(n) ? cl : ul.current), (a = (r = null != (r = n.contextTypes)) ? fl(e, l) : il)),
        (n = new n(t, a)),
        (e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null),
        (n.updater = da),
        (e.stateNode = n),
        (n._reactInternals = e),
        r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = a)),
        n
      );
    }
    function ma(e, n, t, r) {
      (e = n.state),
        "function" == typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, r),
        "function" == typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, r),
        n.state !== e && da.enqueueReplaceState(n, n.state, null);
    }
    function ga(e, n, t, r) {
      var l = e.stateNode;
      (l.props = t), (l.state = e.memoizedState), (l.refs = ca), ra(e);
      var a = n.contextType;
      "object" == typeof a && null !== a ? (l.context = na(a)) : ((a = dl(n) ? cl : ul.current), (l.context = fl(e, a))),
        ua(e, t, l, r),
        (l.state = e.memoizedState),
        "function" == typeof (a = n.getDerivedStateFromProps) && (fa(e, n, a, t), (l.state = e.memoizedState)),
        "function" == typeof n.getDerivedStateFromProps ||
          "function" == typeof l.getSnapshotBeforeUpdate ||
          ("function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount) ||
          ((n = l.state),
          "function" == typeof l.componentWillMount && l.componentWillMount(),
          "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(),
          n !== l.state && da.enqueueReplaceState(l, l.state, null),
          ua(e, t, l, r),
          (l.state = e.memoizedState)),
        "function" == typeof l.componentDidMount && (e.flags |= 4);
    }
    var va = Array.isArray;
    function ya(e, n, t) {
      if (null !== (e = t.ref) && "function" != typeof e && "object" != typeof e) {
        if (t._owner) {
          if ((t = t._owner)) {
            if (1 !== t.tag) throw Error(o(309));
            var r = t.stateNode;
          }
          if (!r) throw Error(o(147, e));
          var l = "" + e;
          return null !== n && null !== n.ref && "function" == typeof n.ref && n.ref._stringRef === l
            ? n.ref
            : (((n = function (e) {
                var n = r.refs;
                n === ca && (n = r.refs = {}), null === e ? delete n[l] : (n[l] = e);
              })._stringRef = l),
              n);
        }
        if ("string" != typeof e) throw Error(o(284));
        if (!t._owner) throw Error(o(290, e));
      }
      return e;
    }
    function ba(e, n) {
      if ("textarea" !== e.type)
        throw Error(
          o(31, "[object Object]" === Object.prototype.toString.call(n) ? "object with keys {" + Object.keys(n).join(", ") + "}" : n)
        );
    }
    function wa(e) {
      function n(n, t) {
        if (e) {
          var r = n.lastEffect;
          null !== r ? ((r.nextEffect = t), (n.lastEffect = t)) : (n.firstEffect = n.lastEffect = t), (t.nextEffect = null), (t.flags = 8);
        }
      }
      function t(t, r) {
        if (!e) return null;
        for (; null !== r; ) n(t, r), (r = r.sibling);
        return null;
      }
      function r(e, n) {
        for (e = new Map(); null !== n; ) null !== n.key ? e.set(n.key, n) : e.set(n.index, n), (n = n.sibling);
        return e;
      }
      function l(e, n) {
        return ((e = Uu(e, n)).index = 0), (e.sibling = null), e;
      }
      function a(n, t, r) {
        return (n.index = r), e ? (null !== (r = n.alternate) ? ((r = r.index) < t ? ((n.flags = 2), t) : r) : ((n.flags = 2), t)) : t;
      }
      function i(n) {
        return e && null === n.alternate && (n.flags = 2), n;
      }
      function u(e, n, t, r) {
        return null === n || 6 !== n.tag ? (((n = Bu(t, e.mode, r)).return = e), n) : (((n = l(n, t)).return = e), n);
      }
      function s(e, n, t, r) {
        return null !== n && n.elementType === t.type
          ? (((r = l(n, t.props)).ref = ya(e, n, t)), (r.return = e), r)
          : (((r = Vu(t.type, t.key, t.props, null, e.mode, r)).ref = ya(e, n, t)), (r.return = e), r);
      }
      function c(e, n, t, r) {
        return null === n || 4 !== n.tag || n.stateNode.containerInfo !== t.containerInfo || n.stateNode.implementation !== t.implementation
          ? (((n = Wu(t, e.mode, r)).return = e), n)
          : (((n = l(n, t.children || [])).return = e), n);
      }
      function f(e, n, t, r, a) {
        return null === n || 7 !== n.tag ? (((n = Au(t, e.mode, r, a)).return = e), n) : (((n = l(n, t)).return = e), n);
      }
      function d(e, n, t) {
        if ("string" == typeof n || "number" == typeof n) return ((n = Bu("" + n, e.mode, t)).return = e), n;
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case C:
              return ((t = Vu(n.type, n.key, n.props, null, e.mode, t)).ref = ya(e, null, n)), (t.return = e), t;
            case x:
              return ((n = Wu(n, e.mode, t)).return = e), n;
          }
          if (va(n) || H(n)) return ((n = Au(n, e.mode, t, null)).return = e), n;
          ba(e, n);
        }
        return null;
      }
      function p(e, n, t, r) {
        var l = null !== n ? n.key : null;
        if ("string" == typeof t || "number" == typeof t) return null !== l ? null : u(e, n, "" + t, r);
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case C:
              return t.key === l ? (t.type === S ? f(e, n, t.props.children, r, l) : s(e, n, t, r)) : null;
            case x:
              return t.key === l ? c(e, n, t, r) : null;
          }
          if (va(t) || H(t)) return null !== l ? null : f(e, n, t, r, null);
          ba(e, t);
        }
        return null;
      }
      function h(e, n, t, r, l) {
        if ("string" == typeof r || "number" == typeof r) return u(n, (e = e.get(t) || null), "" + r, l);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case C:
              return (e = e.get(null === r.key ? t : r.key) || null), r.type === S ? f(n, e, r.props.children, l, r.key) : s(n, e, r, l);
            case x:
              return c(n, (e = e.get(null === r.key ? t : r.key) || null), r, l);
          }
          if (va(r) || H(r)) return f(n, (e = e.get(t) || null), r, l, null);
          ba(n, r);
        }
        return null;
      }
      function m(l, o, i, u) {
        for (var s = null, c = null, f = o, m = (o = 0), g = null; null !== f && m < i.length; m++) {
          f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
          var v = p(l, f, i[m], u);
          if (null === v) {
            null === f && (f = g);
            break;
          }
          e && f && null === v.alternate && n(l, f), (o = a(v, o, m)), null === c ? (s = v) : (c.sibling = v), (c = v), (f = g);
        }
        if (m === i.length) return t(l, f), s;
        if (null === f) {
          for (; m < i.length; m++) null !== (f = d(l, i[m], u)) && ((o = a(f, o, m)), null === c ? (s = f) : (c.sibling = f), (c = f));
          return s;
        }
        for (f = r(l, f); m < i.length; m++)
          null !== (g = h(f, l, m, i[m], u)) &&
            (e && null !== g.alternate && f.delete(null === g.key ? m : g.key),
            (o = a(g, o, m)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g));
        return (
          e &&
            f.forEach(function (e) {
              return n(l, e);
            }),
          s
        );
      }
      function g(l, i, u, s) {
        var c = H(u);
        if ("function" != typeof c) throw Error(o(150));
        if (null == (u = c.call(u))) throw Error(o(151));
        for (var f = (c = null), m = i, g = (i = 0), v = null, y = u.next(); null !== m && !y.done; g++, y = u.next()) {
          m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
          var b = p(l, m, y.value, s);
          if (null === b) {
            null === m && (m = v);
            break;
          }
          e && m && null === b.alternate && n(l, m), (i = a(b, i, g)), null === f ? (c = b) : (f.sibling = b), (f = b), (m = v);
        }
        if (y.done) return t(l, m), c;
        if (null === m) {
          for (; !y.done; g++, y = u.next())
            null !== (y = d(l, y.value, s)) && ((i = a(y, i, g)), null === f ? (c = y) : (f.sibling = y), (f = y));
          return c;
        }
        for (m = r(l, m); !y.done; g++, y = u.next())
          null !== (y = h(m, l, g, y.value, s)) &&
            (e && null !== y.alternate && m.delete(null === y.key ? g : y.key),
            (i = a(y, i, g)),
            null === f ? (c = y) : (f.sibling = y),
            (f = y));
        return (
          e &&
            m.forEach(function (e) {
              return n(l, e);
            }),
          c
        );
      }
      return function (e, r, a, u) {
        var s = "object" == typeof a && null !== a && a.type === S && null === a.key;
        s && (a = a.props.children);
        var c = "object" == typeof a && null !== a;
        if (c)
          switch (a.$$typeof) {
            case C:
              e: {
                for (c = a.key, s = r; null !== s; ) {
                  if (s.key === c) {
                    switch (s.tag) {
                      case 7:
                        if (a.type === S) {
                          t(e, s.sibling), ((r = l(s, a.props.children)).return = e), (e = r);
                          break e;
                        }
                        break;
                      default:
                        if (s.elementType === a.type) {
                          t(e, s.sibling), ((r = l(s, a.props)).ref = ya(e, s, a)), (r.return = e), (e = r);
                          break e;
                        }
                    }
                    t(e, s);
                    break;
                  }
                  n(e, s), (s = s.sibling);
                }
                a.type === S
                  ? (((r = Au(a.props.children, e.mode, u, a.key)).return = e), (e = r))
                  : (((u = Vu(a.type, a.key, a.props, null, e.mode, u)).ref = ya(e, r, a)), (u.return = e), (e = u));
              }
              return i(e);
            case x:
              e: {
                for (s = a.key; null !== r; ) {
                  if (r.key === s) {
                    if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                      t(e, r.sibling), ((r = l(r, a.children || [])).return = e), (e = r);
                      break e;
                    }
                    t(e, r);
                    break;
                  }
                  n(e, r), (r = r.sibling);
                }
                ((r = Wu(a, e.mode, u)).return = e), (e = r);
              }
              return i(e);
          }
        if ("string" == typeof a || "number" == typeof a)
          return (
            (a = "" + a),
            null !== r && 6 === r.tag
              ? (t(e, r.sibling), ((r = l(r, a)).return = e), (e = r))
              : (t(e, r), ((r = Bu(a, e.mode, u)).return = e), (e = r)),
            i(e)
          );
        if (va(a)) return m(e, r, a, u);
        if (H(a)) return g(e, r, a, u);
        if ((c && ba(e, a), void 0 === a && !s))
          switch (e.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(o(152, q(e.type) || "Component"));
          }
        return t(e, r);
      };
    }
    var ka = wa(!0),
      Ca = wa(!1),
      xa = {},
      Sa = ll(xa),
      Ea = ll(xa),
      _a = ll(xa);
    function Pa(e) {
      if (e === xa) throw Error(o(174));
      return e;
    }
    function Na(e, n) {
      switch ((ol(_a, n), ol(Ea, e), ol(Sa, xa), (e = n.nodeType))) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : he(null, "");
          break;
        default:
          n = he((n = (e = 8 === e ? n.parentNode : n).namespaceURI || null), (e = e.tagName));
      }
      al(Sa), ol(Sa, n);
    }
    function Oa() {
      al(Sa), al(Ea), al(_a);
    }
    function La(e) {
      Pa(_a.current);
      var n = Pa(Sa.current),
        t = he(n, e.type);
      n !== t && (ol(Ea, e), ol(Sa, t));
    }
    function Ta(e) {
      Ea.current === e && (al(Sa), al(Ea));
    }
    var za = ll(0);
    function Ma(e) {
      for (var n = e; null !== n; ) {
        if (13 === n.tag) {
          var t = n.memoizedState;
          if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data)) return n;
        } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
          if (0 != (64 & n.flags)) return n;
        } else if (null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === e) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === e) return null;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
      return null;
    }
    var Ra = null,
      ja = null,
      Fa = !1;
    function Ia(e, n) {
      var t = Iu(5, null, null, 0);
      (t.elementType = "DELETED"),
        (t.type = "DELETED"),
        (t.stateNode = n),
        (t.return = e),
        (t.flags = 8),
        null !== e.lastEffect ? ((e.lastEffect.nextEffect = t), (e.lastEffect = t)) : (e.firstEffect = e.lastEffect = t);
    }
    function Da(e, n) {
      switch (e.tag) {
        case 5:
          var t = e.type;
          return null !== (n = 1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) && ((e.stateNode = n), !0);
        case 6:
          return null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) && ((e.stateNode = n), !0);
        case 13:
        default:
          return !1;
      }
    }
    function Ua(e) {
      if (Fa) {
        var n = ja;
        if (n) {
          var t = n;
          if (!Da(e, n)) {
            if (!(n = Br(t.nextSibling)) || !Da(e, n)) return (e.flags = (-1025 & e.flags) | 2), (Fa = !1), void (Ra = e);
            Ia(Ra, t);
          }
          (Ra = e), (ja = Br(n.firstChild));
        } else (e.flags = (-1025 & e.flags) | 2), (Fa = !1), (Ra = e);
      }
    }
    function Va(e) {
      for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
      Ra = e;
    }
    function Aa(e) {
      if (e !== Ra) return !1;
      if (!Fa) return Va(e), (Fa = !0), !1;
      var n = e.type;
      if (5 !== e.tag || ("head" !== n && "body" !== n && !Ur(n, e.memoizedProps))) for (n = ja; n; ) Ia(e, n), (n = Br(n.nextSibling));
      if ((Va(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
        e: {
          for (e = e.nextSibling, n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ("/$" === t) {
                if (0 === n) {
                  ja = Br(e.nextSibling);
                  break e;
                }
                n--;
              } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
            }
            e = e.nextSibling;
          }
          ja = null;
        }
      } else ja = Ra ? Br(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ha() {
      (ja = Ra = null), (Fa = !1);
    }
    var Ba = [];
    function Wa() {
      for (var e = 0; e < Ba.length; e++) Ba[e]._workInProgressVersionPrimary = null;
      Ba.length = 0;
    }
    var $a = k.ReactCurrentDispatcher,
      Qa = k.ReactCurrentBatchConfig,
      qa = 0,
      Ka = null,
      Ya = null,
      Ga = null,
      Za = !1,
      Xa = !1;
    function Ja() {
      throw Error(o(321));
    }
    function eo(e, n) {
      if (null === n) return !1;
      for (var t = 0; t < n.length && t < e.length; t++) if (!or(e[t], n[t])) return !1;
      return !0;
    }
    function no(e, n, t, r, l, a) {
      if (
        ((qa = a),
        (Ka = n),
        (n.memoizedState = null),
        (n.updateQueue = null),
        (n.lanes = 0),
        ($a.current = null === e || null === e.memoizedState ? No : Oo),
        (e = t(r, l)),
        Xa)
      ) {
        a = 0;
        do {
          if (((Xa = !1), !(25 > a))) throw Error(o(301));
          (a += 1), (Ga = Ya = null), (n.updateQueue = null), ($a.current = Lo), (e = t(r, l));
        } while (Xa);
      }
      if ((($a.current = Po), (n = null !== Ya && null !== Ya.next), (qa = 0), (Ga = Ya = Ka = null), (Za = !1), n)) throw Error(o(300));
      return e;
    }
    function to() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return null === Ga ? (Ka.memoizedState = Ga = e) : (Ga = Ga.next = e), Ga;
    }
    function ro() {
      if (null === Ya) {
        var e = Ka.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = Ya.next;
      var n = null === Ga ? Ka.memoizedState : Ga.next;
      if (null !== n) (Ga = n), (Ya = e);
      else {
        if (null === e) throw Error(o(310));
        (e = { memoizedState: (Ya = e).memoizedState, baseState: Ya.baseState, baseQueue: Ya.baseQueue, queue: Ya.queue, next: null }),
          null === Ga ? (Ka.memoizedState = Ga = e) : (Ga = Ga.next = e);
      }
      return Ga;
    }
    function lo(e, n) {
      return "function" == typeof n ? n(e) : n;
    }
    function ao(e) {
      var n = ro(),
        t = n.queue;
      if (null === t) throw Error(o(311));
      t.lastRenderedReducer = e;
      var r = Ya,
        l = r.baseQueue,
        a = t.pending;
      if (null !== a) {
        if (null !== l) {
          var i = l.next;
          (l.next = a.next), (a.next = i);
        }
        (r.baseQueue = l = a), (t.pending = null);
      }
      if (null !== l) {
        (l = l.next), (r = r.baseState);
        var u = (i = a = null),
          s = l;
        do {
          var c = s.lane;
          if ((qa & c) === c)
            null !== u && (u = u.next = { lane: 0, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }),
              (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
          else {
            var f = { lane: c, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null };
            null === u ? ((i = u = f), (a = r)) : (u = u.next = f), (Ka.lanes |= c), (Ri |= c);
          }
          s = s.next;
        } while (null !== s && s !== l);
        null === u ? (a = r) : (u.next = i),
          or(r, n.memoizedState) || (zo = !0),
          (n.memoizedState = r),
          (n.baseState = a),
          (n.baseQueue = u),
          (t.lastRenderedState = r);
      }
      return [n.memoizedState, t.dispatch];
    }
    function oo(e) {
      var n = ro(),
        t = n.queue;
      if (null === t) throw Error(o(311));
      t.lastRenderedReducer = e;
      var r = t.dispatch,
        l = t.pending,
        a = n.memoizedState;
      if (null !== l) {
        t.pending = null;
        var i = (l = l.next);
        do {
          (a = e(a, i.action)), (i = i.next);
        } while (i !== l);
        or(a, n.memoizedState) || (zo = !0), (n.memoizedState = a), null === n.baseQueue && (n.baseState = a), (t.lastRenderedState = a);
      }
      return [a, r];
    }
    function io(e, n, t) {
      var r = n._getVersion;
      r = r(n._source);
      var l = n._workInProgressVersionPrimary;
      if (
        (null !== l
          ? (e = l === r)
          : ((e = e.mutableReadLanes), (e = (qa & e) === e) && ((n._workInProgressVersionPrimary = r), Ba.push(n))),
        e)
      )
        return t(n._source);
      throw (Ba.push(n), Error(o(350)));
    }
    function uo(e, n, t, r) {
      var l = _i;
      if (null === l) throw Error(o(349));
      var a = n._getVersion,
        i = a(n._source),
        u = $a.current,
        s = u.useState(function () {
          return io(l, n, t);
        }),
        c = s[1],
        f = s[0];
      s = Ga;
      var d = e.memoizedState,
        p = d.refs,
        h = p.getSnapshot,
        m = d.source;
      d = d.subscribe;
      var g = Ka;
      return (
        (e.memoizedState = { refs: p, source: n, subscribe: r }),
        u.useEffect(
          function () {
            (p.getSnapshot = t), (p.setSnapshot = c);
            var e = a(n._source);
            if (!or(i, e)) {
              (e = t(n._source)),
                or(f, e) || (c(e), (e = ou(g)), (l.mutableReadLanes |= e & l.pendingLanes)),
                (e = l.mutableReadLanes),
                (l.entangledLanes |= e);
              for (var r = l.entanglements, o = e; 0 < o; ) {
                var u = 31 - Wn(o),
                  s = 1 << u;
                (r[u] |= e), (o &= ~s);
              }
            }
          },
          [t, n, r]
        ),
        u.useEffect(
          function () {
            return r(n._source, function () {
              var e = p.getSnapshot,
                t = p.setSnapshot;
              try {
                t(e(n._source));
                var r = ou(g);
                l.mutableReadLanes |= r & l.pendingLanes;
              } catch (e) {
                t(function () {
                  throw e;
                });
              }
            });
          },
          [n, r]
        ),
        (or(h, t) && or(m, n) && or(d, r)) ||
          (((e = { pending: null, dispatch: null, lastRenderedReducer: lo, lastRenderedState: f }).dispatch = c = _o.bind(null, Ka, e)),
          (s.queue = e),
          (s.baseQueue = null),
          (f = io(l, n, t)),
          (s.memoizedState = s.baseState = f)),
        f
      );
    }
    function so(e, n, t) {
      return uo(ro(), e, n, t);
    }
    function co(e) {
      var n = to();
      return (
        "function" == typeof e && (e = e()),
        (n.memoizedState = n.baseState = e),
        (e = (e = n.queue = { pending: null, dispatch: null, lastRenderedReducer: lo, lastRenderedState: e }).dispatch =
          _o.bind(null, Ka, e)),
        [n.memoizedState, e]
      );
    }
    function fo(e, n, t, r) {
      return (
        (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
        null === (n = Ka.updateQueue)
          ? ((n = { lastEffect: null }), (Ka.updateQueue = n), (n.lastEffect = e.next = e))
          : null === (t = n.lastEffect)
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
        e
      );
    }
    function po(e) {
      return (e = { current: e }), (to().memoizedState = e);
    }
    function ho() {
      return ro().memoizedState;
    }
    function mo(e, n, t, r) {
      var l = to();
      (Ka.flags |= e), (l.memoizedState = fo(1 | n, t, void 0, void 0 === r ? null : r));
    }
    function go(e, n, t, r) {
      var l = ro();
      r = void 0 === r ? null : r;
      var a = void 0;
      if (null !== Ya) {
        var o = Ya.memoizedState;
        if (((a = o.destroy), null !== r && eo(r, o.deps))) return void fo(n, t, a, r);
      }
      (Ka.flags |= e), (l.memoizedState = fo(1 | n, t, a, r));
    }
    function vo(e, n) {
      return mo(516, 4, e, n);
    }
    function yo(e, n) {
      return go(516, 4, e, n);
    }
    function bo(e, n) {
      return go(4, 2, e, n);
    }
    function wo(e, n) {
      return "function" == typeof n
        ? ((e = e()),
          n(e),
          function () {
            n(null);
          })
        : null != n
        ? ((e = e()),
          (n.current = e),
          function () {
            n.current = null;
          })
        : void 0;
    }
    function ko(e, n, t) {
      return (t = null != t ? t.concat([e]) : null), go(4, 2, wo.bind(null, n, e), t);
    }
    function Co() {}
    function xo(e, n) {
      var t = ro();
      n = void 0 === n ? null : n;
      var r = t.memoizedState;
      return null !== r && null !== n && eo(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
    }
    function So(e, n) {
      var t = ro();
      n = void 0 === n ? null : n;
      var r = t.memoizedState;
      return null !== r && null !== n && eo(n, r[1]) ? r[0] : ((e = e()), (t.memoizedState = [e, n]), e);
    }
    function Eo(e, n) {
      var t = Ul();
      Al(98 > t ? 98 : t, function () {
        e(!0);
      }),
        Al(97 < t ? 97 : t, function () {
          var t = Qa.transition;
          Qa.transition = 1;
          try {
            e(!1), n();
          } finally {
            Qa.transition = t;
          }
        });
    }
    function _o(e, n, t) {
      var r = au(),
        l = ou(e),
        a = { lane: l, action: t, eagerReducer: null, eagerState: null, next: null },
        o = n.pending;
      if (
        (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
        (n.pending = a),
        (o = e.alternate),
        e === Ka || (null !== o && o === Ka))
      )
        Xa = Za = !0;
      else {
        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = n.lastRenderedReducer))
          try {
            var i = n.lastRenderedState,
              u = o(i, t);
            if (((a.eagerReducer = o), (a.eagerState = u), or(u, i))) return;
          } catch (e) {}
        iu(e, l, r);
      }
    }
    var Po = {
        readContext: na,
        useCallback: Ja,
        useContext: Ja,
        useEffect: Ja,
        useImperativeHandle: Ja,
        useLayoutEffect: Ja,
        useMemo: Ja,
        useReducer: Ja,
        useRef: Ja,
        useState: Ja,
        useDebugValue: Ja,
        useDeferredValue: Ja,
        useTransition: Ja,
        useMutableSource: Ja,
        useOpaqueIdentifier: Ja,
        unstable_isNewReconciler: !1
      },
      No = {
        readContext: na,
        useCallback: function (e, n) {
          return (to().memoizedState = [e, void 0 === n ? null : n]), e;
        },
        useContext: na,
        useEffect: vo,
        useImperativeHandle: function (e, n, t) {
          return (t = null != t ? t.concat([e]) : null), mo(4, 2, wo.bind(null, n, e), t);
        },
        useLayoutEffect: function (e, n) {
          return mo(4, 2, e, n);
        },
        useMemo: function (e, n) {
          var t = to();
          return (n = void 0 === n ? null : n), (e = e()), (t.memoizedState = [e, n]), e;
        },
        useReducer: function (e, n, t) {
          var r = to();
          return (
            (n = void 0 !== t ? t(n) : n),
            (r.memoizedState = r.baseState = n),
            (e = (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }).dispatch =
              _o.bind(null, Ka, e)),
            [r.memoizedState, e]
          );
        },
        useRef: po,
        useState: co,
        useDebugValue: Co,
        useDeferredValue: function (e) {
          var n = co(e),
            t = n[0],
            r = n[1];
          return (
            vo(
              function () {
                var n = Qa.transition;
                Qa.transition = 1;
                try {
                  r(e);
                } finally {
                  Qa.transition = n;
                }
              },
              [e]
            ),
            t
          );
        },
        useTransition: function () {
          var e = co(!1),
            n = e[0];
          return po((e = Eo.bind(null, e[1]))), [e, n];
        },
        useMutableSource: function (e, n, t) {
          var r = to();
          return (r.memoizedState = { refs: { getSnapshot: n, setSnapshot: null }, source: e, subscribe: t }), uo(r, e, n, t);
        },
        useOpaqueIdentifier: function () {
          if (Fa) {
            var e = !1,
              n = (function (e) {
                return { $$typeof: j, toString: e, valueOf: e };
              })(function () {
                throw (e || ((e = !0), t("r:" + ($r++).toString(36))), Error(o(355)));
              }),
              t = co(n)[1];
            return (
              0 == (2 & Ka.mode) &&
                ((Ka.flags |= 516),
                fo(
                  5,
                  function () {
                    t("r:" + ($r++).toString(36));
                  },
                  void 0,
                  null
                )),
              n
            );
          }
          return co((n = "r:" + ($r++).toString(36))), n;
        },
        unstable_isNewReconciler: !1
      },
      Oo = {
        readContext: na,
        useCallback: xo,
        useContext: na,
        useEffect: yo,
        useImperativeHandle: ko,
        useLayoutEffect: bo,
        useMemo: So,
        useReducer: ao,
        useRef: ho,
        useState: function () {
          return ao(lo);
        },
        useDebugValue: Co,
        useDeferredValue: function (e) {
          var n = ao(lo),
            t = n[0],
            r = n[1];
          return (
            yo(
              function () {
                var n = Qa.transition;
                Qa.transition = 1;
                try {
                  r(e);
                } finally {
                  Qa.transition = n;
                }
              },
              [e]
            ),
            t
          );
        },
        useTransition: function () {
          var e = ao(lo)[0];
          return [ho().current, e];
        },
        useMutableSource: so,
        useOpaqueIdentifier: function () {
          return ao(lo)[0];
        },
        unstable_isNewReconciler: !1
      },
      Lo = {
        readContext: na,
        useCallback: xo,
        useContext: na,
        useEffect: yo,
        useImperativeHandle: ko,
        useLayoutEffect: bo,
        useMemo: So,
        useReducer: oo,
        useRef: ho,
        useState: function () {
          return oo(lo);
        },
        useDebugValue: Co,
        useDeferredValue: function (e) {
          var n = oo(lo),
            t = n[0],
            r = n[1];
          return (
            yo(
              function () {
                var n = Qa.transition;
                Qa.transition = 1;
                try {
                  r(e);
                } finally {
                  Qa.transition = n;
                }
              },
              [e]
            ),
            t
          );
        },
        useTransition: function () {
          var e = oo(lo)[0];
          return [ho().current, e];
        },
        useMutableSource: so,
        useOpaqueIdentifier: function () {
          return oo(lo)[0];
        },
        unstable_isNewReconciler: !1
      },
      To = k.ReactCurrentOwner,
      zo = !1;
    function Mo(e, n, t, r) {
      n.child = null === e ? Ca(n, null, t, r) : ka(n, e.child, t, r);
    }
    function Ro(e, n, t, r, l) {
      t = t.render;
      var a = n.ref;
      return (
        ea(n, l),
        (r = no(e, n, t, r, a, l)),
        null === e || zo
          ? ((n.flags |= 1), Mo(e, n, r, l), n.child)
          : ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~l), ei(e, n, l))
      );
    }
    function jo(e, n, t, r, l, a) {
      if (null === e) {
        var o = t.type;
        return "function" != typeof o || Du(o) || void 0 !== o.defaultProps || null !== t.compare || void 0 !== t.defaultProps
          ? (((e = Vu(t.type, null, r, n, n.mode, a)).ref = n.ref), (e.return = n), (n.child = e))
          : ((n.tag = 15), (n.type = o), Fo(e, n, o, r, l, a));
      }
      return (
        (o = e.child),
        0 == (l & a) && ((l = o.memoizedProps), (t = null !== (t = t.compare) ? t : ur)(l, r) && e.ref === n.ref)
          ? ei(e, n, a)
          : ((n.flags |= 1), ((e = Uu(o, r)).ref = n.ref), (e.return = n), (n.child = e))
      );
    }
    function Fo(e, n, t, r, l, a) {
      if (null !== e && ur(e.memoizedProps, r) && e.ref === n.ref) {
        if (((zo = !1), 0 == (a & l))) return (n.lanes = e.lanes), ei(e, n, a);
        0 != (16384 & e.flags) && (zo = !0);
      }
      return Uo(e, n, t, r, a);
    }
    function Io(e, n, t) {
      var r = n.pendingProps,
        l = r.children,
        a = null !== e ? e.memoizedState : null;
      if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
        if (0 == (4 & n.mode)) (n.memoizedState = { baseLanes: 0 }), mu(n, t);
        else {
          if (0 == (1073741824 & t))
            return (
              (e = null !== a ? a.baseLanes | t : t),
              (n.lanes = n.childLanes = 1073741824),
              (n.memoizedState = { baseLanes: e }),
              mu(n, e),
              null
            );
          (n.memoizedState = { baseLanes: 0 }), mu(n, null !== a ? a.baseLanes : t);
        }
      else null !== a ? ((r = a.baseLanes | t), (n.memoizedState = null)) : (r = t), mu(n, r);
      return Mo(e, n, l, t), n.child;
    }
    function Do(e, n) {
      var t = n.ref;
      ((null === e && null !== t) || (null !== e && e.ref !== t)) && (n.flags |= 128);
    }
    function Uo(e, n, t, r, l) {
      var a = dl(t) ? cl : ul.current;
      return (
        (a = fl(n, a)),
        ea(n, l),
        (t = no(e, n, t, r, a, l)),
        null === e || zo
          ? ((n.flags |= 1), Mo(e, n, t, l), n.child)
          : ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~l), ei(e, n, l))
      );
    }
    function Vo(e, n, t, r, l) {
      if (dl(t)) {
        var a = !0;
        gl(n);
      } else a = !1;
      if ((ea(n, l), null === n.stateNode))
        null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)), ha(n, t, r), ga(n, t, r, l), (r = !0);
      else if (null === e) {
        var o = n.stateNode,
          i = n.memoizedProps;
        o.props = i;
        var u = o.context,
          s = t.contextType;
        "object" == typeof s && null !== s ? (s = na(s)) : (s = fl(n, (s = dl(t) ? cl : ul.current)));
        var c = t.getDerivedStateFromProps,
          f = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps) ||
          ((i !== r || u !== s) && ma(n, o, r, s)),
          (ta = !1);
        var d = n.memoizedState;
        (o.state = d),
          ua(n, r, o, l),
          (u = n.memoizedState),
          i !== r || d !== u || sl.current || ta
            ? ("function" == typeof c && (fa(n, t, c, r), (u = n.memoizedState)),
              (i = ta || pa(n, t, i, r, d, u, s))
                ? (f ||
                    ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
                    ("function" == typeof o.componentWillMount && o.componentWillMount(),
                    "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                  "function" == typeof o.componentDidMount && (n.flags |= 4))
                : ("function" == typeof o.componentDidMount && (n.flags |= 4), (n.memoizedProps = r), (n.memoizedState = u)),
              (o.props = r),
              (o.state = u),
              (o.context = s),
              (r = i))
            : ("function" == typeof o.componentDidMount && (n.flags |= 4), (r = !1));
      } else {
        (o = n.stateNode),
          la(e, n),
          (i = n.memoizedProps),
          (s = n.type === n.elementType ? i : Ql(n.type, i)),
          (o.props = s),
          (f = n.pendingProps),
          (d = o.context),
          "object" == typeof (u = t.contextType) && null !== u ? (u = na(u)) : (u = fl(n, (u = dl(t) ? cl : ul.current)));
        var p = t.getDerivedStateFromProps;
        (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps) ||
          ((i !== f || d !== u) && ma(n, o, r, u)),
          (ta = !1),
          (d = n.memoizedState),
          (o.state = d),
          ua(n, r, o, l);
        var h = n.memoizedState;
        i !== f || d !== h || sl.current || ta
          ? ("function" == typeof p && (fa(n, t, p, r), (h = n.memoizedState)),
            (s = ta || pa(n, t, s, r, d, h, u))
              ? (c ||
                  ("function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate) ||
                  ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u),
                  "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)),
                "function" == typeof o.componentDidUpdate && (n.flags |= 4),
                "function" == typeof o.getSnapshotBeforeUpdate && (n.flags |= 256))
              : ("function" != typeof o.componentDidUpdate || (i === e.memoizedProps && d === e.memoizedState) || (n.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate || (i === e.memoizedProps && d === e.memoizedState) || (n.flags |= 256),
                (n.memoizedProps = r),
                (n.memoizedState = h)),
            (o.props = r),
            (o.state = h),
            (o.context = u),
            (r = s))
          : ("function" != typeof o.componentDidUpdate || (i === e.memoizedProps && d === e.memoizedState) || (n.flags |= 4),
            "function" != typeof o.getSnapshotBeforeUpdate || (i === e.memoizedProps && d === e.memoizedState) || (n.flags |= 256),
            (r = !1));
      }
      return Ao(e, n, t, r, a, l);
    }
    function Ao(e, n, t, r, l, a) {
      Do(e, n);
      var o = 0 != (64 & n.flags);
      if (!r && !o) return l && vl(n, t, !1), ei(e, n, a);
      (r = n.stateNode), (To.current = n);
      var i = o && "function" != typeof t.getDerivedStateFromError ? null : r.render();
      return (
        (n.flags |= 1),
        null !== e && o ? ((n.child = ka(n, e.child, null, a)), (n.child = ka(n, null, i, a))) : Mo(e, n, i, a),
        (n.memoizedState = r.state),
        l && vl(n, t, !0),
        n.child
      );
    }
    function Ho(e) {
      var n = e.stateNode;
      n.pendingContext ? hl(0, n.pendingContext, n.pendingContext !== n.context) : n.context && hl(0, n.context, !1),
        Na(e, n.containerInfo);
    }
    var Bo,
      Wo,
      $o,
      Qo = { dehydrated: null, retryLane: 0 };
    function qo(e, n, t) {
      var r,
        l = n.pendingProps,
        a = za.current,
        o = !1;
      return (
        (r = 0 != (64 & n.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
        r
          ? ((o = !0), (n.flags &= -65))
          : (null !== e && null === e.memoizedState) || void 0 === l.fallback || !0 === l.unstable_avoidThisFallback || (a |= 1),
        ol(za, 1 & a),
        null === e
          ? (void 0 !== l.fallback && Ua(n),
            (e = l.children),
            (a = l.fallback),
            o
              ? ((e = Ko(n, e, a, t)), (n.child.memoizedState = { baseLanes: t }), (n.memoizedState = Qo), e)
              : "number" == typeof l.unstable_expectedLoadTime
              ? ((e = Ko(n, e, a, t)), (n.child.memoizedState = { baseLanes: t }), (n.memoizedState = Qo), (n.lanes = 33554432), e)
              : (((t = Hu({ mode: "visible", children: e }, n.mode, t, null)).return = n), (n.child = t)))
          : (e.memoizedState,
            o
              ? ((l = Go(e, n, l.children, l.fallback, t)),
                (o = n.child),
                (a = e.child.memoizedState),
                (o.memoizedState = null === a ? { baseLanes: t } : { baseLanes: a.baseLanes | t }),
                (o.childLanes = e.childLanes & ~t),
                (n.memoizedState = Qo),
                l)
              : ((t = Yo(e, n, l.children, t)), (n.memoizedState = null), t))
      );
    }
    function Ko(e, n, t, r) {
      var l = e.mode,
        a = e.child;
      return (
        (n = { mode: "hidden", children: n }),
        0 == (2 & l) && null !== a ? ((a.childLanes = 0), (a.pendingProps = n)) : (a = Hu(n, l, 0, null)),
        (t = Au(t, l, r, null)),
        (a.return = e),
        (t.return = e),
        (a.sibling = t),
        (e.child = a),
        t
      );
    }
    function Yo(e, n, t, r) {
      var l = e.child;
      return (
        (e = l.sibling),
        (t = Uu(l, { mode: "visible", children: t })),
        0 == (2 & n.mode) && (t.lanes = r),
        (t.return = n),
        (t.sibling = null),
        null !== e && ((e.nextEffect = null), (e.flags = 8), (n.firstEffect = n.lastEffect = e)),
        (n.child = t)
      );
    }
    function Go(e, n, t, r, l) {
      var a = n.mode,
        o = e.child;
      e = o.sibling;
      var i = { mode: "hidden", children: t };
      return (
        0 == (2 & a) && n.child !== o
          ? (((t = n.child).childLanes = 0),
            (t.pendingProps = i),
            null !== (o = t.lastEffect)
              ? ((n.firstEffect = t.firstEffect), (n.lastEffect = o), (o.nextEffect = null))
              : (n.firstEffect = n.lastEffect = null))
          : (t = Uu(o, i)),
        null !== e ? (r = Uu(e, r)) : ((r = Au(r, a, l, null)).flags |= 2),
        (r.return = n),
        (t.return = n),
        (t.sibling = r),
        (n.child = t),
        r
      );
    }
    function Zo(e, n) {
      e.lanes |= n;
      var t = e.alternate;
      null !== t && (t.lanes |= n), Jl(e.return, n);
    }
    function Xo(e, n, t, r, l, a) {
      var o = e.memoizedState;
      null === o
        ? (e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l, lastEffect: a })
        : ((o.isBackwards = n),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = t),
          (o.tailMode = l),
          (o.lastEffect = a));
    }
    function Jo(e, n, t) {
      var r = n.pendingProps,
        l = r.revealOrder,
        a = r.tail;
      if ((Mo(e, n, r.children, t), 0 != (2 & (r = za.current)))) (r = (1 & r) | 2), (n.flags |= 64);
      else {
        if (null !== e && 0 != (64 & e.flags))
          e: for (e = n.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && Zo(e, t);
            else if (19 === e.tag) Zo(e, t);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === n) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === n) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((ol(za, r), 0 == (2 & n.mode))) n.memoizedState = null;
      else
        switch (l) {
          case "forwards":
            for (t = n.child, l = null; null !== t; ) null !== (e = t.alternate) && null === Ma(e) && (l = t), (t = t.sibling);
            null === (t = l) ? ((l = n.child), (n.child = null)) : ((l = t.sibling), (t.sibling = null)), Xo(n, !1, l, t, a, n.lastEffect);
            break;
          case "backwards":
            for (t = null, l = n.child, n.child = null; null !== l; ) {
              if (null !== (e = l.alternate) && null === Ma(e)) {
                n.child = l;
                break;
              }
              (e = l.sibling), (l.sibling = t), (t = l), (l = e);
            }
            Xo(n, !0, t, null, a, n.lastEffect);
            break;
          case "together":
            Xo(n, !1, null, null, void 0, n.lastEffect);
            break;
          default:
            n.memoizedState = null;
        }
      return n.child;
    }
    function ei(e, n, t) {
      if ((null !== e && (n.dependencies = e.dependencies), (Ri |= n.lanes), 0 != (t & n.childLanes))) {
        if (null !== e && n.child !== e.child) throw Error(o(153));
        if (null !== n.child) {
          for (t = Uu((e = n.child), e.pendingProps), n.child = t, t.return = n; null !== e.sibling; )
            (e = e.sibling), ((t = t.sibling = Uu(e, e.pendingProps)).return = n);
          t.sibling = null;
        }
        return n.child;
      }
      return null;
    }
    function ni(e, n) {
      if (!Fa)
        switch (e.tailMode) {
          case "hidden":
            n = e.tail;
            for (var t = null; null !== n; ) null !== n.alternate && (t = n), (n = n.sibling);
            null === t ? (e.tail = null) : (t.sibling = null);
            break;
          case "collapsed":
            t = e.tail;
            for (var r = null; null !== t; ) null !== t.alternate && (r = t), (t = t.sibling);
            null === r ? (n || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
    }
    function ti(e, n, t) {
      var r = n.pendingProps;
      switch (n.tag) {
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
          return dl(n.type) && pl(), null;
        case 3:
          return (
            Oa(),
            al(sl),
            al(ul),
            Wa(),
            (r = n.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
            (null !== e && null !== e.child) || (Aa(n) ? (n.flags |= 4) : r.hydrate || (n.flags |= 256)),
            null
          );
        case 5:
          Ta(n);
          var a = Pa(_a.current);
          if (((t = n.type), null !== e && null != n.stateNode)) Wo(e, n, t, r), e.ref !== n.ref && (n.flags |= 128);
          else {
            if (!r) {
              if (null === n.stateNode) throw Error(o(166));
              return null;
            }
            if (((e = Pa(Sa.current)), Aa(n))) {
              (r = n.stateNode), (t = n.type);
              var i = n.memoizedProps;
              switch (((r[qr] = n), (r[Kr] = i), t)) {
                case "dialog":
                  Er("cancel", r), Er("close", r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Er("load", r);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < kr.length; e++) Er(kr[e], r);
                  break;
                case "source":
                  Er("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  Er("error", r), Er("load", r);
                  break;
                case "details":
                  Er("toggle", r);
                  break;
                case "input":
                  ee(r, i), Er("invalid", r);
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!i.multiple }), Er("invalid", r);
                  break;
                case "textarea":
                  ue(r, i), Er("invalid", r);
              }
              for (var s in (xe(t, i), (e = null), i))
                i.hasOwnProperty(s) &&
                  ((a = i[s]),
                  "children" === s
                    ? "string" == typeof a
                      ? r.textContent !== a && (e = ["children", a])
                      : "number" == typeof a && r.textContent !== "" + a && (e = ["children", "" + a])
                    : u.hasOwnProperty(s) && null != a && "onScroll" === s && Er("scroll", r));
              switch (t) {
                case "input":
                  G(r), re(r, i, !0);
                  break;
                case "textarea":
                  G(r), ce(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof i.onClick && (r.onclick = jr);
              }
              (r = e), (n.updateQueue = r), null !== r && (n.flags |= 4);
            } else {
              switch (
                ((s = 9 === a.nodeType ? a : a.ownerDocument),
                e === fe && (e = pe(t)),
                e === fe
                  ? "script" === t
                    ? (((e = s.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                    : "string" == typeof r.is
                    ? (e = s.createElement(t, { is: r.is }))
                    : ((e = s.createElement(t)), "select" === t && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                  : (e = s.createElementNS(e, t)),
                (e[qr] = n),
                (e[Kr] = r),
                Bo(e, n),
                (n.stateNode = e),
                (s = Se(t, r)),
                t)
              ) {
                case "dialog":
                  Er("cancel", e), Er("close", e), (a = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Er("load", e), (a = r);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < kr.length; a++) Er(kr[a], e);
                  a = r;
                  break;
                case "source":
                  Er("error", e), (a = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Er("error", e), Er("load", e), (a = r);
                  break;
                case "details":
                  Er("toggle", e), (a = r);
                  break;
                case "input":
                  ee(e, r), (a = J(e, r)), Er("invalid", e);
                  break;
                case "option":
                  a = ae(e, r);
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }), (a = l({}, r, { value: void 0 })), Er("invalid", e);
                  break;
                case "textarea":
                  ue(e, r), (a = ie(e, r)), Er("invalid", e);
                  break;
                default:
                  a = r;
              }
              xe(t, a);
              var c = a;
              for (i in c)
                if (c.hasOwnProperty(i)) {
                  var f = c[i];
                  "style" === i
                    ? ke(e, f)
                    : "dangerouslySetInnerHTML" === i
                    ? null != (f = f ? f.__html : void 0) && ge(e, f)
                    : "children" === i
                    ? "string" == typeof f
                      ? ("textarea" !== t || "" !== f) && ve(e, f)
                      : "number" == typeof f && ve(e, "" + f)
                    : "suppressContentEditableWarning" !== i &&
                      "suppressHydrationWarning" !== i &&
                      "autoFocus" !== i &&
                      (u.hasOwnProperty(i) ? null != f && "onScroll" === i && Er("scroll", e) : null != f && w(e, i, f, s));
                }
              switch (t) {
                case "input":
                  G(e), re(e, r, !1);
                  break;
                case "textarea":
                  G(e), ce(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + K(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    null != (i = r.value) ? oe(e, !!r.multiple, i, !1) : null != r.defaultValue && oe(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" == typeof a.onClick && (e.onclick = jr);
              }
              Dr(t, r) && (n.flags |= 4);
            }
            null !== n.ref && (n.flags |= 128);
          }
          return null;
        case 6:
          if (e && null != n.stateNode) $o(0, n, e.memoizedProps, r);
          else {
            if ("string" != typeof r && null === n.stateNode) throw Error(o(166));
            (t = Pa(_a.current)),
              Pa(Sa.current),
              Aa(n)
                ? ((r = n.stateNode), (t = n.memoizedProps), (r[qr] = n), r.nodeValue !== t && (n.flags |= 4))
                : (((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[qr] = n), (n.stateNode = r));
          }
          return null;
        case 13:
          return (
            al(za),
            (r = n.memoizedState),
            0 != (64 & n.flags)
              ? ((n.lanes = t), n)
              : ((r = null !== r),
                (t = !1),
                null === e ? void 0 !== n.memoizedProps.fallback && Aa(n) : (t = null !== e.memoizedState),
                r &&
                  !t &&
                  0 != (2 & n.mode) &&
                  ((null === e && !0 !== n.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & za.current)
                    ? 0 === Ti && (Ti = 3)
                    : ((0 !== Ti && 3 !== Ti) || (Ti = 4), null === _i || (0 == (134217727 & Ri) && 0 == (134217727 & ji)) || fu(_i, Ni))),
                (r || t) && (n.flags |= 4),
                null)
          );
        case 4:
          return Oa(), null === e && Pr(n.stateNode.containerInfo), null;
        case 10:
          return Xl(n), null;
        case 17:
          return dl(n.type) && pl(), null;
        case 19:
          if ((al(za), null === (r = n.memoizedState))) return null;
          if (((i = 0 != (64 & n.flags)), null === (s = r.rendering)))
            if (i) ni(r, !1);
            else {
              if (0 !== Ti || (null !== e && 0 != (64 & e.flags)))
                for (e = n.child; null !== e; ) {
                  if (null !== (s = Ma(e))) {
                    for (
                      n.flags |= 64,
                        ni(r, !1),
                        null !== (i = s.updateQueue) && ((n.updateQueue = i), (n.flags |= 4)),
                        null === r.lastEffect && (n.firstEffect = null),
                        n.lastEffect = r.lastEffect,
                        r = t,
                        t = n.child;
                      null !== t;

                    )
                      (e = r),
                        ((i = t).flags &= 2),
                        (i.nextEffect = null),
                        (i.firstEffect = null),
                        (i.lastEffect = null),
                        null === (s = i.alternate)
                          ? ((i.childLanes = 0),
                            (i.lanes = e),
                            (i.child = null),
                            (i.memoizedProps = null),
                            (i.memoizedState = null),
                            (i.updateQueue = null),
                            (i.dependencies = null),
                            (i.stateNode = null))
                          : ((i.childLanes = s.childLanes),
                            (i.lanes = s.lanes),
                            (i.child = s.child),
                            (i.memoizedProps = s.memoizedProps),
                            (i.memoizedState = s.memoizedState),
                            (i.updateQueue = s.updateQueue),
                            (i.type = s.type),
                            (e = s.dependencies),
                            (i.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                        (t = t.sibling);
                    return ol(za, (1 & za.current) | 2), n.child;
                  }
                  e = e.sibling;
                }
              null !== r.tail && Dl() > Ui && ((n.flags |= 64), (i = !0), ni(r, !1), (n.lanes = 33554432));
            }
          else {
            if (!i)
              if (null !== (e = Ma(s))) {
                if (
                  ((n.flags |= 64),
                  (i = !0),
                  null !== (t = e.updateQueue) && ((n.updateQueue = t), (n.flags |= 4)),
                  ni(r, !0),
                  null === r.tail && "hidden" === r.tailMode && !s.alternate && !Fa)
                )
                  return null !== (n = n.lastEffect = r.lastEffect) && (n.nextEffect = null), null;
              } else
                2 * Dl() - r.renderingStartTime > Ui && 1073741824 !== t && ((n.flags |= 64), (i = !0), ni(r, !1), (n.lanes = 33554432));
            r.isBackwards
              ? ((s.sibling = n.child), (n.child = s))
              : (null !== (t = r.last) ? (t.sibling = s) : (n.child = s), (r.last = s));
          }
          return null !== r.tail
            ? ((t = r.tail),
              (r.rendering = t),
              (r.tail = t.sibling),
              (r.lastEffect = n.lastEffect),
              (r.renderingStartTime = Dl()),
              (t.sibling = null),
              (n = za.current),
              ol(za, i ? (1 & n) | 2 : 1 & n),
              t)
            : null;
        case 23:
        case 24:
          return (
            gu(),
            null !== e &&
              (null !== e.memoizedState) != (null !== n.memoizedState) &&
              "unstable-defer-without-hiding" !== r.mode &&
              (n.flags |= 4),
            null
          );
      }
      throw Error(o(156, n.tag));
    }
    function ri(e) {
      switch (e.tag) {
        case 1:
          dl(e.type) && pl();
          var n = e.flags;
          return 4096 & n ? ((e.flags = (-4097 & n) | 64), e) : null;
        case 3:
          if ((Oa(), al(sl), al(ul), Wa(), 0 != (64 & (n = e.flags)))) throw Error(o(285));
          return (e.flags = (-4097 & n) | 64), e;
        case 5:
          return Ta(e), null;
        case 13:
          return al(za), 4096 & (n = e.flags) ? ((e.flags = (-4097 & n) | 64), e) : null;
        case 19:
          return al(za), null;
        case 4:
          return Oa(), null;
        case 10:
          return Xl(e), null;
        case 23:
        case 24:
          return gu(), null;
        default:
          return null;
      }
    }
    function li(e, n) {
      try {
        var t = "",
          r = n;
        do {
          (t += Q(r)), (r = r.return);
        } while (r);
        var l = t;
      } catch (e) {
        l = "\nError generating stack: " + e.message + "\n" + e.stack;
      }
      return { value: e, source: n, stack: l };
    }
    function ai(e, n) {
      try {
        console.error(n.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    (Bo = function (e, n) {
      for (var t = n.child; null !== t; ) {
        if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
        else if (4 !== t.tag && null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === n) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === n) return;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }),
      (Wo = function (e, n, t, r) {
        var a = e.memoizedProps;
        if (a !== r) {
          (e = n.stateNode), Pa(Sa.current);
          var o,
            i = null;
          switch (t) {
            case "input":
              (a = J(e, a)), (r = J(e, r)), (i = []);
              break;
            case "option":
              (a = ae(e, a)), (r = ae(e, r)), (i = []);
              break;
            case "select":
              (a = l({}, a, { value: void 0 })), (r = l({}, r, { value: void 0 })), (i = []);
              break;
            case "textarea":
              (a = ie(e, a)), (r = ie(e, r)), (i = []);
              break;
            default:
              "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = jr);
          }
          for (f in (xe(t, r), (t = null), a))
            if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
              if ("style" === f) {
                var s = a[f];
                for (o in s) s.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
              } else
                "dangerouslySetInnerHTML" !== f &&
                  "children" !== f &&
                  "suppressContentEditableWarning" !== f &&
                  "suppressHydrationWarning" !== f &&
                  "autoFocus" !== f &&
                  (u.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
          for (f in r) {
            var c = r[f];
            if (((s = null != a ? a[f] : void 0), r.hasOwnProperty(f) && c !== s && (null != c || null != s)))
              if ("style" === f)
                if (s) {
                  for (o in s) !s.hasOwnProperty(o) || (c && c.hasOwnProperty(o)) || (t || (t = {}), (t[o] = ""));
                  for (o in c) c.hasOwnProperty(o) && s[o] !== c[o] && (t || (t = {}), (t[o] = c[o]));
                } else t || (i || (i = []), i.push(f, t)), (t = c);
              else
                "dangerouslySetInnerHTML" === f
                  ? ((c = c ? c.__html : void 0), (s = s ? s.__html : void 0), null != c && s !== c && (i = i || []).push(f, c))
                  : "children" === f
                  ? ("string" != typeof c && "number" != typeof c) || (i = i || []).push(f, "" + c)
                  : "suppressContentEditableWarning" !== f &&
                    "suppressHydrationWarning" !== f &&
                    (u.hasOwnProperty(f)
                      ? (null != c && "onScroll" === f && Er("scroll", e), i || s === c || (i = []))
                      : "object" == typeof c && null !== c && c.$$typeof === j
                      ? c.toString()
                      : (i = i || []).push(f, c));
          }
          t && (i = i || []).push("style", t);
          var f = i;
          (n.updateQueue = f) && (n.flags |= 4);
        }
      }),
      ($o = function (e, n, t, r) {
        t !== r && (n.flags |= 4);
      });
    var oi = "function" == typeof WeakMap ? WeakMap : Map;
    function ii(e, n, t) {
      ((t = aa(-1, t)).tag = 3), (t.payload = { element: null });
      var r = n.value;
      return (
        (t.callback = function () {
          Bi || ((Bi = !0), (Wi = r)), ai(0, n);
        }),
        t
      );
    }
    function ui(e, n, t) {
      (t = aa(-1, t)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var l = n.value;
        t.payload = function () {
          return ai(0, n), r(l);
        };
      }
      var a = e.stateNode;
      return (
        null !== a &&
          "function" == typeof a.componentDidCatch &&
          (t.callback = function () {
            "function" != typeof r && (null === $i ? ($i = new Set([this])) : $i.add(this), ai(0, n));
            var e = n.stack;
            this.componentDidCatch(n.value, { componentStack: null !== e ? e : "" });
          }),
        t
      );
    }
    var si = "function" == typeof WeakSet ? WeakSet : Set;
    function ci(e) {
      var n = e.ref;
      if (null !== n)
        if ("function" == typeof n)
          try {
            n(null);
          } catch (n) {
            Mu(e, n);
          }
        else n.current = null;
    }
    function fi(e, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (256 & n.flags && null !== e) {
            var t = e.memoizedProps,
              r = e.memoizedState;
            (n = (e = n.stateNode).getSnapshotBeforeUpdate(n.elementType === n.type ? t : Ql(n.type, t), r)),
              (e.__reactInternalSnapshotBeforeUpdate = n);
          }
          return;
        case 3:
          return void (256 & n.flags && Hr(n.stateNode.containerInfo));
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(o(163));
    }
    function di(e, n, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          if (null !== (n = null !== (n = t.updateQueue) ? n.lastEffect : null)) {
            e = n = n.next;
            do {
              if (3 == (3 & e.tag)) {
                var r = e.create;
                e.destroy = r();
              }
              e = e.next;
            } while (e !== n);
          }
          if (null !== (n = null !== (n = t.updateQueue) ? n.lastEffect : null)) {
            e = n = n.next;
            do {
              var l = e;
              (r = l.next), 0 != (4 & (l = l.tag)) && 0 != (1 & l) && (Lu(t, e), Ou(t, e)), (e = r);
            } while (e !== n);
          }
          return;
        case 1:
          return (
            (e = t.stateNode),
            4 & t.flags &&
              (null === n
                ? e.componentDidMount()
                : ((r = t.elementType === t.type ? n.memoizedProps : Ql(t.type, n.memoizedProps)),
                  e.componentDidUpdate(r, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
            void (null !== (n = t.updateQueue) && sa(t, n, e))
          );
        case 3:
          if (null !== (n = t.updateQueue)) {
            if (((e = null), null !== t.child))
              switch (t.child.tag) {
                case 5:
                  e = t.child.stateNode;
                  break;
                case 1:
                  e = t.child.stateNode;
              }
            sa(t, n, e);
          }
          return;
        case 5:
          return (e = t.stateNode), void (null === n && 4 & t.flags && Dr(t.type, t.memoizedProps) && e.focus());
        case 6:
        case 4:
        case 12:
          return;
        case 13:
          return void (
            null === t.memoizedState &&
            ((t = t.alternate), null !== t && ((t = t.memoizedState), null !== t && ((t = t.dehydrated), null !== t && Cn(t))))
          );
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }
      throw Error(o(163));
    }
    function pi(e, n) {
      for (var t = e; ; ) {
        if (5 === t.tag) {
          var r = t.stateNode;
          if (n) "function" == typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : (r.display = "none");
          else {
            r = t.stateNode;
            var l = t.memoizedProps.style;
            (l = null != l && l.hasOwnProperty("display") ? l.display : null), (r.style.display = we("display", l));
          }
        } else if (6 === t.tag) t.stateNode.nodeValue = n ? "" : t.memoizedProps;
        else if (((23 !== t.tag && 24 !== t.tag) || null === t.memoizedState || t === e) && null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    function hi(e, n) {
      if (bl && "function" == typeof bl.onCommitFiberUnmount)
        try {
          bl.onCommitFiberUnmount(yl, n);
        } catch (e) {}
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (null !== (e = n.updateQueue) && null !== (e = e.lastEffect)) {
            var t = (e = e.next);
            do {
              var r = t,
                l = r.destroy;
              if (((r = r.tag), void 0 !== l))
                if (0 != (4 & r)) Lu(n, t);
                else {
                  r = n;
                  try {
                    l();
                  } catch (e) {
                    Mu(r, e);
                  }
                }
              t = t.next;
            } while (t !== e);
          }
          break;
        case 1:
          if ((ci(n), "function" == typeof (e = n.stateNode).componentWillUnmount))
            try {
              (e.props = n.memoizedProps), (e.state = n.memoizedState), e.componentWillUnmount();
            } catch (e) {
              Mu(n, e);
            }
          break;
        case 5:
          ci(n);
          break;
        case 4:
          yi(e, n);
      }
    }
    function mi(e) {
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
    function gi(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function vi(e) {
      e: {
        for (var n = e.return; null !== n; ) {
          if (gi(n)) break e;
          n = n.return;
        }
        throw Error(o(160));
      }
      var t = n;
      switch (((n = t.stateNode), t.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (n = n.containerInfo), (r = !0);
          break;
        default:
          throw Error(o(161));
      }
      16 & t.flags && (ve(n, ""), (t.flags &= -17));
      e: n: for (t = e; ; ) {
        for (; null === t.sibling; ) {
          if (null === t.return || gi(t.return)) {
            t = null;
            break e;
          }
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; 5 !== t.tag && 6 !== t.tag && 18 !== t.tag; ) {
          if (2 & t.flags) continue n;
          if (null === t.child || 4 === t.tag) continue n;
          (t.child.return = t), (t = t.child);
        }
        if (!(2 & t.flags)) {
          t = t.stateNode;
          break e;
        }
      }
      r
        ? (function e(n, t, r) {
            var l = n.tag,
              a = 5 === l || 6 === l;
            if (a)
              (n = a ? n.stateNode : n.stateNode.instance),
                t
                  ? 8 === r.nodeType
                    ? r.parentNode.insertBefore(n, t)
                    : r.insertBefore(n, t)
                  : (8 === r.nodeType ? (t = r.parentNode).insertBefore(n, r) : (t = r).appendChild(n),
                    (null !== (r = r._reactRootContainer) && void 0 !== r) || null !== t.onclick || (t.onclick = jr));
            else if (4 !== l && null !== (n = n.child)) for (e(n, t, r), n = n.sibling; null !== n; ) e(n, t, r), (n = n.sibling);
          })(e, t, n)
        : (function e(n, t, r) {
            var l = n.tag,
              a = 5 === l || 6 === l;
            if (a) (n = a ? n.stateNode : n.stateNode.instance), t ? r.insertBefore(n, t) : r.appendChild(n);
            else if (4 !== l && null !== (n = n.child)) for (e(n, t, r), n = n.sibling; null !== n; ) e(n, t, r), (n = n.sibling);
          })(e, t, n);
    }
    function yi(e, n) {
      for (var t, r, l = n, a = !1; ; ) {
        if (!a) {
          a = l.return;
          e: for (;;) {
            if (null === a) throw Error(o(160));
            switch (((t = a.stateNode), a.tag)) {
              case 5:
                r = !1;
                break e;
              case 3:
              case 4:
                (t = t.containerInfo), (r = !0);
                break e;
            }
            a = a.return;
          }
          a = !0;
        }
        if (5 === l.tag || 6 === l.tag) {
          e: for (var i = e, u = l, s = u; ; )
            if ((hi(i, s), null !== s.child && 4 !== s.tag)) (s.child.return = s), (s = s.child);
            else {
              if (s === u) break e;
              for (; null === s.sibling; ) {
                if (null === s.return || s.return === u) break e;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
          r ? ((i = t), (u = l.stateNode), 8 === i.nodeType ? i.parentNode.removeChild(u) : i.removeChild(u)) : t.removeChild(l.stateNode);
        } else if (4 === l.tag) {
          if (null !== l.child) {
            (t = l.stateNode.containerInfo), (r = !0), (l.child.return = l), (l = l.child);
            continue;
          }
        } else if ((hi(e, l), null !== l.child)) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === n) break;
        for (; null === l.sibling; ) {
          if (null === l.return || l.return === n) return;
          4 === (l = l.return).tag && (a = !1);
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    }
    function bi(e, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var t = n.updateQueue;
          if (null !== (t = null !== t ? t.lastEffect : null)) {
            var r = (t = t.next);
            do {
              3 == (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
            } while (r !== t);
          }
          return;
        case 1:
          return;
        case 5:
          if (null != (t = n.stateNode)) {
            r = n.memoizedProps;
            var l = null !== e ? e.memoizedProps : r;
            e = n.type;
            var a = n.updateQueue;
            if (((n.updateQueue = null), null !== a)) {
              for (
                t[Kr] = r, "input" === e && "radio" === r.type && null != r.name && ne(t, r), Se(e, l), n = Se(e, r), l = 0;
                l < a.length;
                l += 2
              ) {
                var i = a[l],
                  u = a[l + 1];
                "style" === i ? ke(t, u) : "dangerouslySetInnerHTML" === i ? ge(t, u) : "children" === i ? ve(t, u) : w(t, i, u, n);
              }
              switch (e) {
                case "input":
                  te(t, r);
                  break;
                case "textarea":
                  se(t, r);
                  break;
                case "select":
                  (e = t._wrapperState.wasMultiple),
                    (t._wrapperState.wasMultiple = !!r.multiple),
                    null != (a = r.value)
                      ? oe(t, !!r.multiple, a, !1)
                      : e !== !!r.multiple &&
                        (null != r.defaultValue ? oe(t, !!r.multiple, r.defaultValue, !0) : oe(t, !!r.multiple, r.multiple ? [] : "", !1));
              }
            }
          }
          return;
        case 6:
          if (null === n.stateNode) throw Error(o(162));
          return void (n.stateNode.nodeValue = n.memoizedProps);
        case 3:
          return void ((t = n.stateNode).hydrate && ((t.hydrate = !1), Cn(t.containerInfo)));
        case 12:
          return;
        case 13:
          return null !== n.memoizedState && ((Di = Dl()), pi(n.child, !0)), void wi(n);
        case 19:
          return void wi(n);
        case 17:
          return;
        case 23:
        case 24:
          return void pi(n, null !== n.memoizedState);
      }
      throw Error(o(163));
    }
    function wi(e) {
      var n = e.updateQueue;
      if (null !== n) {
        e.updateQueue = null;
        var t = e.stateNode;
        null === t && (t = e.stateNode = new si()),
          n.forEach(function (n) {
            var r = ju.bind(null, e, n);
            t.has(n) || (t.add(n), n.then(r, r));
          });
      }
    }
    function ki(e, n) {
      return (
        null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && null !== (n = n.memoizedState) && null === n.dehydrated
      );
    }
    var Ci = Math.ceil,
      xi = k.ReactCurrentDispatcher,
      Si = k.ReactCurrentOwner,
      Ei = 0,
      _i = null,
      Pi = null,
      Ni = 0,
      Oi = 0,
      Li = ll(0),
      Ti = 0,
      zi = null,
      Mi = 0,
      Ri = 0,
      ji = 0,
      Fi = 0,
      Ii = null,
      Di = 0,
      Ui = 1 / 0;
    function Vi() {
      Ui = Dl() + 500;
    }
    var Ai,
      Hi = null,
      Bi = !1,
      Wi = null,
      $i = null,
      Qi = !1,
      qi = null,
      Ki = 90,
      Yi = [],
      Gi = [],
      Zi = null,
      Xi = 0,
      Ji = null,
      eu = -1,
      nu = 0,
      tu = 0,
      ru = null,
      lu = !1;
    function au() {
      return 0 != (48 & Ei) ? Dl() : -1 !== eu ? eu : (eu = Dl());
    }
    function ou(e) {
      if (0 == (2 & (e = e.mode))) return 1;
      if (0 == (4 & e)) return 99 === Ul() ? 1 : 2;
      if ((0 === nu && (nu = Mi), 0 !== $l.transition)) {
        0 !== tu && (tu = null !== Ii ? Ii.pendingLanes : 0), (e = nu);
        var n = 4186112 & ~tu;
        return 0 === (n &= -n) && 0 === (n = (e = 4186112 & ~e) & -e) && (n = 8192), n;
      }
      return (
        (e = Ul()),
        0 != (4 & Ei) && 98 === e
          ? (e = Vn(12, nu))
          : (e = Vn(
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
              nu
            )),
        e
      );
    }
    function iu(e, n, t) {
      if (50 < Xi) throw ((Xi = 0), (Ji = null), Error(o(185)));
      if (null === (e = uu(e, n))) return null;
      Bn(e, n, t), e === _i && ((ji |= n), 4 === Ti && fu(e, Ni));
      var r = Ul();
      1 === n
        ? 0 != (8 & Ei) && 0 == (48 & Ei)
          ? du(e)
          : (su(e, t), 0 === Ei && (Vi(), Bl()))
        : (0 == (4 & Ei) || (98 !== r && 99 !== r) || (null === Zi ? (Zi = new Set([e])) : Zi.add(e)), su(e, t)),
        (Ii = e);
    }
    function uu(e, n) {
      e.lanes |= n;
      var t = e.alternate;
      for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
        (e.childLanes |= n), null !== (t = e.alternate) && (t.childLanes |= n), (t = e), (e = e.return);
      return 3 === t.tag ? t.stateNode : null;
    }
    function su(e, n) {
      for (var t = e.callbackNode, r = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var u = 31 - Wn(i),
          s = 1 << u,
          c = a[u];
        if (-1 === c) {
          if (0 == (s & r) || 0 != (s & l)) {
            (c = n), In(s);
            var f = Fn;
            a[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
          }
        } else c <= n && (e.expiredLanes |= s);
        i &= ~s;
      }
      if (((r = Dn(e, e === _i ? Ni : 0)), (n = Fn), 0 === r))
        null !== t && (t !== zl && Cl(t), (e.callbackNode = null), (e.callbackPriority = 0));
      else {
        if (null !== t) {
          if (e.callbackPriority === n) return;
          t !== zl && Cl(t);
        }
        15 === n
          ? ((t = du.bind(null, e)), null === Rl ? ((Rl = [t]), (jl = kl(Pl, Wl))) : Rl.push(t), (t = zl))
          : 14 === n
          ? (t = Hl(99, du.bind(null, e)))
          : (t = Hl(
              (t = (function (e) {
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
                    throw Error(o(358, e));
                }
              })(n)),
              cu.bind(null, e)
            )),
          (e.callbackPriority = n),
          (e.callbackNode = t);
      }
    }
    function cu(e) {
      if (((eu = -1), (tu = nu = 0), 0 != (48 & Ei))) throw Error(o(327));
      var n = e.callbackNode;
      if (Nu() && e.callbackNode !== n) return null;
      var t = Dn(e, e === _i ? Ni : 0);
      if (0 === t) return null;
      var r = t,
        l = Ei;
      Ei |= 16;
      var a = bu();
      for ((_i === e && Ni === r) || (Vi(), vu(e, r)); ; )
        try {
          Cu();
          break;
        } catch (n) {
          yu(e, n);
        }
      if ((Zl(), (xi.current = a), (Ei = l), null !== Pi ? (r = 0) : ((_i = null), (Ni = 0), (r = Ti)), 0 != (Mi & ji))) vu(e, 0);
      else if (0 !== r) {
        if ((2 === r && ((Ei |= 64), e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)), 0 !== (t = Un(e)) && (r = wu(e, t))), 1 === r))
          throw ((n = zi), vu(e, 0), fu(e, t), su(e, Dl()), n);
        switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = t), r)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Eu(e);
            break;
          case 3:
            if ((fu(e, t), (62914560 & t) === t && 10 < (r = Di + 500 - Dl()))) {
              if (0 !== Dn(e, 0)) break;
              if (((l = e.suspendedLanes) & t) !== t) {
                au(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Vr(Eu.bind(null, e), r);
              break;
            }
            Eu(e);
            break;
          case 4:
            if ((fu(e, t), (4186112 & t) === t)) break;
            for (r = e.eventTimes, l = -1; 0 < t; ) {
              var i = 31 - Wn(t);
              (a = 1 << i), (i = r[i]) > l && (l = i), (t &= ~a);
            }
            if (
              ((t = l),
              10 <
                (t =
                  (120 > (t = Dl() - t)
                    ? 120
                    : 480 > t
                    ? 480
                    : 1080 > t
                    ? 1080
                    : 1920 > t
                    ? 1920
                    : 3e3 > t
                    ? 3e3
                    : 4320 > t
                    ? 4320
                    : 1960 * Ci(t / 1960)) - t))
            ) {
              e.timeoutHandle = Vr(Eu.bind(null, e), t);
              break;
            }
            Eu(e);
            break;
          case 5:
            Eu(e);
            break;
          default:
            throw Error(o(329));
        }
      }
      return su(e, Dl()), e.callbackNode === n ? cu.bind(null, e) : null;
    }
    function fu(e, n) {
      for (n &= ~Fi, n &= ~ji, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
        var t = 31 - Wn(n),
          r = 1 << t;
        (e[t] = -1), (n &= ~r);
      }
    }
    function du(e) {
      if (0 != (48 & Ei)) throw Error(o(327));
      if ((Nu(), e === _i && 0 != (e.expiredLanes & Ni))) {
        var n = Ni,
          t = wu(e, n);
        0 != (Mi & ji) && (t = wu(e, (n = Dn(e, n))));
      } else t = wu(e, (n = Dn(e, 0)));
      if (
        (0 !== e.tag && 2 === t && ((Ei |= 64), e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)), 0 !== (n = Un(e)) && (t = wu(e, n))),
        1 === t)
      )
        throw ((t = zi), vu(e, 0), fu(e, n), su(e, Dl()), t);
      return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), Eu(e), su(e, Dl()), null;
    }
    function pu(e, n) {
      var t = Ei;
      Ei |= 1;
      try {
        return e(n);
      } finally {
        0 === (Ei = t) && (Vi(), Bl());
      }
    }
    function hu(e, n) {
      var t = Ei;
      (Ei &= -2), (Ei |= 8);
      try {
        return e(n);
      } finally {
        0 === (Ei = t) && (Vi(), Bl());
      }
    }
    function mu(e, n) {
      ol(Li, Oi), (Oi |= n), (Mi |= n);
    }
    function gu() {
      (Oi = Li.current), al(Li);
    }
    function vu(e, n) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var t = e.timeoutHandle;
      if ((-1 !== t && ((e.timeoutHandle = -1), Ar(t)), null !== Pi))
        for (t = Pi.return; null !== t; ) {
          var r = t;
          switch (r.tag) {
            case 1:
              null != (r = r.type.childContextTypes) && pl();
              break;
            case 3:
              Oa(), al(sl), al(ul), Wa();
              break;
            case 5:
              Ta(r);
              break;
            case 4:
              Oa();
              break;
            case 13:
            case 19:
              al(za);
              break;
            case 10:
              Xl(r);
              break;
            case 23:
            case 24:
              gu();
          }
          t = t.return;
        }
      (_i = e), (Pi = Uu(e.current, null)), (Ni = Oi = Mi = n), (Ti = 0), (zi = null), (Fi = ji = Ri = 0);
    }
    function yu(e, n) {
      for (;;) {
        var t = Pi;
        try {
          if ((Zl(), ($a.current = Po), Za)) {
            for (var r = Ka.memoizedState; null !== r; ) {
              var l = r.queue;
              null !== l && (l.pending = null), (r = r.next);
            }
            Za = !1;
          }
          if (((qa = 0), (Ga = Ya = Ka = null), (Xa = !1), (Si.current = null), null === t || null === t.return)) {
            (Ti = 1), (zi = n), (Pi = null);
            break;
          }
          e: {
            var a = e,
              o = t.return,
              i = t,
              u = n;
            if (
              ((n = Ni),
              (i.flags |= 2048),
              (i.firstEffect = i.lastEffect = null),
              null !== u && "object" == typeof u && "function" == typeof u.then)
            ) {
              var s = u;
              if (0 == (2 & i.mode)) {
                var c = i.alternate;
                c
                  ? ((i.updateQueue = c.updateQueue), (i.memoizedState = c.memoizedState), (i.lanes = c.lanes))
                  : ((i.updateQueue = null), (i.memoizedState = null));
              }
              var f = 0 != (1 & za.current),
                d = o;
              do {
                var p;
                if ((p = 13 === d.tag)) {
                  var h = d.memoizedState;
                  if (null !== h) p = null !== h.dehydrated;
                  else {
                    var m = d.memoizedProps;
                    p = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !f);
                  }
                }
                if (p) {
                  var g = d.updateQueue;
                  if (null === g) {
                    var v = new Set();
                    v.add(s), (d.updateQueue = v);
                  } else g.add(s);
                  if (0 == (2 & d.mode)) {
                    if (((d.flags |= 64), (i.flags |= 16384), (i.flags &= -2981), 1 === i.tag))
                      if (null === i.alternate) i.tag = 17;
                      else {
                        var y = aa(-1, 1);
                        (y.tag = 2), oa(i, y);
                      }
                    i.lanes |= 1;
                    break e;
                  }
                  (u = void 0), (i = n);
                  var b = a.pingCache;
                  if (
                    (null === b
                      ? ((b = a.pingCache = new oi()), (u = new Set()), b.set(s, u))
                      : void 0 === (u = b.get(s)) && ((u = new Set()), b.set(s, u)),
                    !u.has(i))
                  ) {
                    u.add(i);
                    var w = Ru.bind(null, a, s, i);
                    s.then(w, w);
                  }
                  (d.flags |= 4096), (d.lanes = n);
                  break e;
                }
                d = d.return;
              } while (null !== d);
              u = Error(
                (q(i.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
              );
            }
            5 !== Ti && (Ti = 2), (u = li(u, i)), (d = o);
            do {
              switch (d.tag) {
                case 3:
                  (a = u), (d.flags |= 4096), (n &= -n), (d.lanes |= n), ia(d, ii(0, a, n));
                  break e;
                case 1:
                  a = u;
                  var k = d.type,
                    C = d.stateNode;
                  if (
                    0 == (64 & d.flags) &&
                    ("function" == typeof k.getDerivedStateFromError ||
                      (null !== C && "function" == typeof C.componentDidCatch && (null === $i || !$i.has(C))))
                  ) {
                    (d.flags |= 4096), (n &= -n), (d.lanes |= n), ia(d, ui(d, a, n));
                    break e;
                  }
              }
              d = d.return;
            } while (null !== d);
          }
          Su(t);
        } catch (e) {
          (n = e), Pi === t && null !== t && (Pi = t = t.return);
          continue;
        }
        break;
      }
    }
    function bu() {
      var e = xi.current;
      return (xi.current = Po), null === e ? Po : e;
    }
    function wu(e, n) {
      var t = Ei;
      Ei |= 16;
      var r = bu();
      for ((_i === e && Ni === n) || vu(e, n); ; )
        try {
          ku();
          break;
        } catch (n) {
          yu(e, n);
        }
      if ((Zl(), (Ei = t), (xi.current = r), null !== Pi)) throw Error(o(261));
      return (_i = null), (Ni = 0), Ti;
    }
    function ku() {
      for (; null !== Pi; ) xu(Pi);
    }
    function Cu() {
      for (; null !== Pi && !xl(); ) xu(Pi);
    }
    function xu(e) {
      var n = Ai(e.alternate, e, Oi);
      (e.memoizedProps = e.pendingProps), null === n ? Su(e) : (Pi = n), (Si.current = null);
    }
    function Su(e) {
      var n = e;
      do {
        var t = n.alternate;
        if (((e = n.return), 0 == (2048 & n.flags))) {
          if (null !== (t = ti(t, n, Oi))) return void (Pi = t);
          if ((24 !== (t = n).tag && 23 !== t.tag) || null === t.memoizedState || 0 != (1073741824 & Oi) || 0 == (4 & t.mode)) {
            for (var r = 0, l = t.child; null !== l; ) (r |= l.lanes | l.childLanes), (l = l.sibling);
            t.childLanes = r;
          }
          null !== e &&
            0 == (2048 & e.flags) &&
            (null === e.firstEffect && (e.firstEffect = n.firstEffect),
            null !== n.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = n.firstEffect), (e.lastEffect = n.lastEffect)),
            1 < n.flags && (null !== e.lastEffect ? (e.lastEffect.nextEffect = n) : (e.firstEffect = n), (e.lastEffect = n)));
        } else {
          if (null !== (t = ri(n))) return (t.flags &= 2047), void (Pi = t);
          null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
        }
        if (null !== (n = n.sibling)) return void (Pi = n);
        Pi = n = e;
      } while (null !== n);
      0 === Ti && (Ti = 5);
    }
    function Eu(e) {
      var n = Ul();
      return Al(99, _u.bind(null, e, n)), null;
    }
    function _u(e, n) {
      do {
        Nu();
      } while (null !== qi);
      if (0 != (48 & Ei)) throw Error(o(327));
      var t = e.finishedWork;
      if (null === t) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) throw Error(o(177));
      e.callbackNode = null;
      var r = t.lanes | t.childLanes,
        l = r,
        a = e.pendingLanes & ~l;
      (e.pendingLanes = l),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= l),
        (e.mutableReadLanes &= l),
        (e.entangledLanes &= l),
        (l = e.entanglements);
      for (var i = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
        var s = 31 - Wn(a),
          c = 1 << s;
        (l[s] = 0), (i[s] = -1), (u[s] = -1), (a &= ~c);
      }
      if (
        (null !== Zi && 0 == (24 & r) && Zi.has(e) && Zi.delete(e),
        e === _i && ((Pi = _i = null), (Ni = 0)),
        1 < t.flags ? (null !== t.lastEffect ? ((t.lastEffect.nextEffect = t), (r = t.firstEffect)) : (r = t)) : (r = t.firstEffect),
        null !== r)
      ) {
        if (((l = Ei), (Ei |= 32), (Si.current = null), (Fr = Yn), dr((i = fr())))) {
          if ("selectionStart" in i) u = { start: i.selectionStart, end: i.selectionEnd };
          else
            e: if (
              ((u = ((u = i.ownerDocument) && u.defaultView) || window), (c = u.getSelection && u.getSelection()) && 0 !== c.rangeCount)
            ) {
              (u = c.anchorNode), (a = c.anchorOffset), (s = c.focusNode), (c = c.focusOffset);
              try {
                u.nodeType, s.nodeType;
              } catch (e) {
                u = null;
                break e;
              }
              var f = 0,
                d = -1,
                p = -1,
                h = 0,
                m = 0,
                g = i,
                v = null;
              n: for (;;) {
                for (
                  var y;
                  g !== u || (0 !== a && 3 !== g.nodeType) || (d = f + a),
                    g !== s || (0 !== c && 3 !== g.nodeType) || (p = f + c),
                    3 === g.nodeType && (f += g.nodeValue.length),
                    null !== (y = g.firstChild);

                )
                  (v = g), (g = y);
                for (;;) {
                  if (g === i) break n;
                  if ((v === u && ++h === a && (d = f), v === s && ++m === c && (p = f), null !== (y = g.nextSibling))) break;
                  v = (g = v).parentNode;
                }
                g = y;
              }
              u = -1 === d || -1 === p ? null : { start: d, end: p };
            } else u = null;
          u = u || { start: 0, end: 0 };
        } else u = null;
        (Ir = { focusedElem: i, selectionRange: u }), (Yn = !1), (ru = null), (lu = !1), (Hi = r);
        do {
          try {
            Pu();
          } catch (e) {
            if (null === Hi) throw Error(o(330));
            Mu(Hi, e), (Hi = Hi.nextEffect);
          }
        } while (null !== Hi);
        (ru = null), (Hi = r);
        do {
          try {
            for (i = e; null !== Hi; ) {
              var b = Hi.flags;
              if ((16 & b && ve(Hi.stateNode, ""), 128 & b)) {
                var w = Hi.alternate;
                if (null !== w) {
                  var k = w.ref;
                  null !== k && ("function" == typeof k ? k(null) : (k.current = null));
                }
              }
              switch (1038 & b) {
                case 2:
                  vi(Hi), (Hi.flags &= -3);
                  break;
                case 6:
                  vi(Hi), (Hi.flags &= -3), bi(Hi.alternate, Hi);
                  break;
                case 1024:
                  Hi.flags &= -1025;
                  break;
                case 1028:
                  (Hi.flags &= -1025), bi(Hi.alternate, Hi);
                  break;
                case 4:
                  bi(Hi.alternate, Hi);
                  break;
                case 8:
                  yi(i, (u = Hi));
                  var C = u.alternate;
                  mi(u), null !== C && mi(C);
              }
              Hi = Hi.nextEffect;
            }
          } catch (e) {
            if (null === Hi) throw Error(o(330));
            Mu(Hi, e), (Hi = Hi.nextEffect);
          }
        } while (null !== Hi);
        if (
          ((k = Ir),
          (w = fr()),
          (b = k.focusedElem),
          (i = k.selectionRange),
          w !== b &&
            b &&
            b.ownerDocument &&
            (function e(n, t) {
              return (
                !(!n || !t) &&
                (n === t ||
                  ((!n || 3 !== n.nodeType) &&
                    (t && 3 === t.nodeType
                      ? e(n, t.parentNode)
                      : "contains" in n
                      ? n.contains(t)
                      : !!n.compareDocumentPosition && !!(16 & n.compareDocumentPosition(t)))))
              );
            })(b.ownerDocument.documentElement, b))
        ) {
          null !== i &&
            dr(b) &&
            ((w = i.start),
            void 0 === (k = i.end) && (k = w),
            "selectionStart" in b
              ? ((b.selectionStart = w), (b.selectionEnd = Math.min(k, b.value.length)))
              : (k = ((w = b.ownerDocument || document) && w.defaultView) || window).getSelection &&
                ((k = k.getSelection()),
                (u = b.textContent.length),
                (C = Math.min(i.start, u)),
                (i = void 0 === i.end ? C : Math.min(i.end, u)),
                !k.extend && C > i && ((u = i), (i = C), (C = u)),
                (u = cr(b, C)),
                (a = cr(b, i)),
                u &&
                  a &&
                  (1 !== k.rangeCount ||
                    k.anchorNode !== u.node ||
                    k.anchorOffset !== u.offset ||
                    k.focusNode !== a.node ||
                    k.focusOffset !== a.offset) &&
                  ((w = w.createRange()).setStart(u.node, u.offset),
                  k.removeAllRanges(),
                  C > i ? (k.addRange(w), k.extend(a.node, a.offset)) : (w.setEnd(a.node, a.offset), k.addRange(w))))),
            (w = []);
          for (k = b; (k = k.parentNode); ) 1 === k.nodeType && w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
          for ("function" == typeof b.focus && b.focus(), b = 0; b < w.length; b++)
            ((k = w[b]).element.scrollLeft = k.left), (k.element.scrollTop = k.top);
        }
        (Yn = !!Fr), (Ir = Fr = null), (e.current = t), (Hi = r);
        do {
          try {
            for (b = e; null !== Hi; ) {
              var x = Hi.flags;
              if ((36 & x && di(b, Hi.alternate, Hi), 128 & x)) {
                w = void 0;
                var S = Hi.ref;
                if (null !== S) {
                  var E = Hi.stateNode;
                  switch (Hi.tag) {
                    case 5:
                      w = E;
                      break;
                    default:
                      w = E;
                  }
                  "function" == typeof S ? S(w) : (S.current = w);
                }
              }
              Hi = Hi.nextEffect;
            }
          } catch (e) {
            if (null === Hi) throw Error(o(330));
            Mu(Hi, e), (Hi = Hi.nextEffect);
          }
        } while (null !== Hi);
        (Hi = null), Ml(), (Ei = l);
      } else e.current = t;
      if (Qi) (Qi = !1), (qi = e), (Ki = n);
      else
        for (Hi = r; null !== Hi; )
          (n = Hi.nextEffect), (Hi.nextEffect = null), 8 & Hi.flags && (((x = Hi).sibling = null), (x.stateNode = null)), (Hi = n);
      if (
        (0 === (r = e.pendingLanes) && ($i = null),
        1 === r ? (e === Ji ? Xi++ : ((Xi = 0), (Ji = e))) : (Xi = 0),
        (t = t.stateNode),
        bl && "function" == typeof bl.onCommitFiberRoot)
      )
        try {
          bl.onCommitFiberRoot(yl, t, void 0, 64 == (64 & t.current.flags));
        } catch (e) {}
      if ((su(e, Dl()), Bi)) throw ((Bi = !1), (e = Wi), (Wi = null), e);
      return 0 != (8 & Ei) || Bl(), null;
    }
    function Pu() {
      for (; null !== Hi; ) {
        var e = Hi.alternate;
        lu || null === ru || (0 != (8 & Hi.flags) ? Je(Hi, ru) && (lu = !0) : 13 === Hi.tag && ki(e, Hi) && Je(Hi, ru) && (lu = !0));
        var n = Hi.flags;
        0 != (256 & n) && fi(e, Hi),
          0 == (512 & n) ||
            Qi ||
            ((Qi = !0),
            Hl(97, function () {
              return Nu(), null;
            })),
          (Hi = Hi.nextEffect);
      }
    }
    function Nu() {
      if (90 !== Ki) {
        var e = 97 < Ki ? 97 : Ki;
        return (Ki = 90), Al(e, Tu);
      }
      return !1;
    }
    function Ou(e, n) {
      Yi.push(n, e),
        Qi ||
          ((Qi = !0),
          Hl(97, function () {
            return Nu(), null;
          }));
    }
    function Lu(e, n) {
      Gi.push(n, e),
        Qi ||
          ((Qi = !0),
          Hl(97, function () {
            return Nu(), null;
          }));
    }
    function Tu() {
      if (null === qi) return !1;
      var e = qi;
      if (((qi = null), 0 != (48 & Ei))) throw Error(o(331));
      var n = Ei;
      Ei |= 32;
      var t = Gi;
      Gi = [];
      for (var r = 0; r < t.length; r += 2) {
        var l = t[r],
          a = t[r + 1],
          i = l.destroy;
        if (((l.destroy = void 0), "function" == typeof i))
          try {
            i();
          } catch (e) {
            if (null === a) throw Error(o(330));
            Mu(a, e);
          }
      }
      for (t = Yi, Yi = [], r = 0; r < t.length; r += 2) {
        (l = t[r]), (a = t[r + 1]);
        try {
          var u = l.create;
          l.destroy = u();
        } catch (e) {
          if (null === a) throw Error(o(330));
          Mu(a, e);
        }
      }
      for (u = e.current.firstEffect; null !== u; )
        (e = u.nextEffect), (u.nextEffect = null), 8 & u.flags && ((u.sibling = null), (u.stateNode = null)), (u = e);
      return (Ei = n), Bl(), !0;
    }
    function zu(e, n, t) {
      oa(e, (n = ii(0, (n = li(t, n)), 1))), (n = au()), null !== (e = uu(e, 1)) && (Bn(e, 1, n), su(e, n));
    }
    function Mu(e, n) {
      if (3 === e.tag) zu(e, e, n);
      else
        for (var t = e.return; null !== t; ) {
          if (3 === t.tag) {
            zu(t, e, n);
            break;
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if (
              "function" == typeof t.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch && (null === $i || !$i.has(r)))
            ) {
              var l = ui(t, (e = li(n, e)), 1);
              if ((oa(t, l), (l = au()), null !== (t = uu(t, 1)))) Bn(t, 1, l), su(t, l);
              else if ("function" == typeof r.componentDidCatch && (null === $i || !$i.has(r)))
                try {
                  r.componentDidCatch(n, e);
                } catch (e) {}
              break;
            }
          }
          t = t.return;
        }
    }
    function Ru(e, n, t) {
      var r = e.pingCache;
      null !== r && r.delete(n),
        (n = au()),
        (e.pingedLanes |= e.suspendedLanes & t),
        _i === e && (Ni & t) === t && (4 === Ti || (3 === Ti && (62914560 & Ni) === Ni && 500 > Dl() - Di) ? vu(e, 0) : (Fi |= t)),
        su(e, n);
    }
    function ju(e, n) {
      var t = e.stateNode;
      null !== t && t.delete(n),
        0 === (n = 0) &&
          (0 == (2 & (n = e.mode))
            ? (n = 1)
            : 0 == (4 & n)
            ? (n = 99 === Ul() ? 1 : 2)
            : (0 === nu && (nu = Mi), 0 === (n = An(62914560 & ~nu)) && (n = 4194304))),
        (t = au()),
        null !== (e = uu(e, n)) && (Bn(e, n, t), su(e, t));
    }
    function Fu(e, n, t, r) {
      (this.tag = e),
        (this.key = t),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = n),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.flags = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Iu(e, n, t, r) {
      return new Fu(e, n, t, r);
    }
    function Du(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Uu(e, n) {
      var t = e.alternate;
      return (
        null === t
          ? (((t = Iu(e.tag, n, e.key, e.mode)).elementType = e.elementType),
            (t.type = e.type),
            (t.stateNode = e.stateNode),
            (t.alternate = e),
            (e.alternate = t))
          : ((t.pendingProps = n), (t.type = e.type), (t.flags = 0), (t.nextEffect = null), (t.firstEffect = null), (t.lastEffect = null)),
        (t.childLanes = e.childLanes),
        (t.lanes = e.lanes),
        (t.child = e.child),
        (t.memoizedProps = e.memoizedProps),
        (t.memoizedState = e.memoizedState),
        (t.updateQueue = e.updateQueue),
        (n = e.dependencies),
        (t.dependencies = null === n ? null : { lanes: n.lanes, firstContext: n.firstContext }),
        (t.sibling = e.sibling),
        (t.index = e.index),
        (t.ref = e.ref),
        t
      );
    }
    function Vu(e, n, t, r, l, a) {
      var i = 2;
      if (((r = e), "function" == typeof e)) Du(e) && (i = 1);
      else if ("string" == typeof e) i = 5;
      else
        e: switch (e) {
          case S:
            return Au(t.children, l, a, n);
          case F:
            (i = 8), (l |= 16);
            break;
          case E:
            (i = 8), (l |= 1);
            break;
          case _:
            return ((e = Iu(12, t, n, 8 | l)).elementType = _), (e.type = _), (e.lanes = a), e;
          case L:
            return ((e = Iu(13, t, n, l)).type = L), (e.elementType = L), (e.lanes = a), e;
          case T:
            return ((e = Iu(19, t, n, l)).elementType = T), (e.lanes = a), e;
          case I:
            return Hu(t, l, a, n);
          case D:
            return ((e = Iu(24, t, n, l)).elementType = D), (e.lanes = a), e;
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case P:
                  i = 10;
                  break e;
                case N:
                  i = 9;
                  break e;
                case O:
                  i = 11;
                  break e;
                case z:
                  i = 14;
                  break e;
                case M:
                  (i = 16), (r = null);
                  break e;
                case R:
                  i = 22;
                  break e;
              }
            throw Error(o(130, null == e ? e : typeof e, ""));
        }
      return ((n = Iu(i, t, n, l)).elementType = e), (n.type = r), (n.lanes = a), n;
    }
    function Au(e, n, t, r) {
      return ((e = Iu(7, e, r, n)).lanes = t), e;
    }
    function Hu(e, n, t, r) {
      return ((e = Iu(23, e, r, n)).elementType = I), (e.lanes = t), e;
    }
    function Bu(e, n, t) {
      return ((e = Iu(6, e, null, n)).lanes = t), e;
    }
    function Wu(e, n, t) {
      return (
        ((n = Iu(4, null !== e.children ? e.children : [], e.key, n)).lanes = t),
        (n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        n
      );
    }
    function $u(e, n, t) {
      (this.tag = n),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = t),
        (this.callbackNode = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Hn(0)),
        (this.expirationTimes = Hn(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Hn(0)),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Qu(e, n, t) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: x, key: null == r ? null : "" + r, children: e, containerInfo: n, implementation: t };
    }
    function qu(e, n, t, r) {
      var l = n.current,
        a = au(),
        i = ou(l);
      e: if (t) {
        n: {
          if (Ye((t = t._reactInternals)) !== t || 1 !== t.tag) throw Error(o(170));
          var u = t;
          do {
            switch (u.tag) {
              case 3:
                u = u.stateNode.context;
                break n;
              case 1:
                if (dl(u.type)) {
                  u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                  break n;
                }
            }
            u = u.return;
          } while (null !== u);
          throw Error(o(171));
        }
        if (1 === t.tag) {
          var s = t.type;
          if (dl(s)) {
            t = ml(t, s, u);
            break e;
          }
        }
        t = u;
      } else t = il;
      return (
        null === n.context ? (n.context = t) : (n.pendingContext = t),
        ((n = aa(a, i)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (n.callback = r),
        oa(l, n),
        iu(l, i, a),
        i
      );
    }
    function Ku(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function Yu(e, n) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var t = e.retryLane;
        e.retryLane = 0 !== t && t < n ? t : n;
      }
    }
    function Gu(e, n) {
      Yu(e, n), (e = e.alternate) && Yu(e, n);
    }
    function Zu(e, n, t) {
      var r = (null != t && null != t.hydrationOptions && t.hydrationOptions.mutableSources) || null;
      if (
        ((t = new $u(e, n, null != t && !0 === t.hydrate)),
        (n = Iu(3, null, null, 2 === n ? 7 : 1 === n ? 3 : 0)),
        (t.current = n),
        (n.stateNode = t),
        ra(n),
        (e[Yr] = t.current),
        Pr(8 === e.nodeType ? e.parentNode : e),
        r)
      )
        for (e = 0; e < r.length; e++) {
          var l = (n = r[e])._getVersion;
          (l = l(n._source)),
            null == t.mutableSourceEagerHydrationData
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
        }
      this._internalRoot = t;
    }
    function Xu(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function Ju(e, n, t, r, l) {
      var a = t._reactRootContainer;
      if (a) {
        var o = a._internalRoot;
        if ("function" == typeof l) {
          var i = l;
          l = function () {
            var e = Ku(o);
            i.call(e);
          };
        }
        qu(n, o, e, l);
      } else {
        if (
          ((a = t._reactRootContainer =
            (function (e, n) {
              if (
                (n ||
                  (n = !(
                    !(n = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                    1 !== n.nodeType ||
                    !n.hasAttribute("data-reactroot")
                  )),
                !n)
              )
                for (var t; (t = e.lastChild); ) e.removeChild(t);
              return new Zu(e, 0, n ? { hydrate: !0 } : void 0);
            })(t, r)),
          (o = a._internalRoot),
          "function" == typeof l)
        ) {
          var u = l;
          l = function () {
            var e = Ku(o);
            u.call(e);
          };
        }
        hu(function () {
          qu(n, o, e, l);
        });
      }
      return Ku(o);
    }
    function es(e, n) {
      var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Xu(n)) throw Error(o(200));
      return Qu(e, n, null, t);
    }
    (Ai = function (e, n, t) {
      var r = n.lanes;
      if (null !== e)
        if (e.memoizedProps !== n.pendingProps || sl.current) zo = !0;
        else {
          if (0 == (t & r)) {
            switch (((zo = !1), n.tag)) {
              case 3:
                Ho(n), Ha();
                break;
              case 5:
                La(n);
                break;
              case 1:
                dl(n.type) && gl(n);
                break;
              case 4:
                Na(n, n.stateNode.containerInfo);
                break;
              case 10:
                r = n.memoizedProps.value;
                var l = n.type._context;
                ol(ql, l._currentValue), (l._currentValue = r);
                break;
              case 13:
                if (null !== n.memoizedState)
                  return 0 != (t & n.child.childLanes)
                    ? qo(e, n, t)
                    : (ol(za, 1 & za.current), null !== (n = ei(e, n, t)) ? n.sibling : null);
                ol(za, 1 & za.current);
                break;
              case 19:
                if (((r = 0 != (t & n.childLanes)), 0 != (64 & e.flags))) {
                  if (r) return Jo(e, n, t);
                  n.flags |= 64;
                }
                if (
                  (null !== (l = n.memoizedState) && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), ol(za, za.current), r)
                )
                  break;
                return null;
              case 23:
              case 24:
                return (n.lanes = 0), Io(e, n, t);
            }
            return ei(e, n, t);
          }
          zo = 0 != (16384 & e.flags);
        }
      else zo = !1;
      switch (((n.lanes = 0), n.tag)) {
        case 2:
          if (
            ((r = n.type),
            null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
            (e = n.pendingProps),
            (l = fl(n, ul.current)),
            ea(n, t),
            (l = no(null, n, r, e, l, t)),
            (n.flags |= 1),
            "object" == typeof l && null !== l && "function" == typeof l.render && void 0 === l.$$typeof)
          ) {
            if (((n.tag = 1), (n.memoizedState = null), (n.updateQueue = null), dl(r))) {
              var a = !0;
              gl(n);
            } else a = !1;
            (n.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null), ra(n);
            var i = r.getDerivedStateFromProps;
            "function" == typeof i && fa(n, r, i, e),
              (l.updater = da),
              (n.stateNode = l),
              (l._reactInternals = n),
              ga(n, r, e, t),
              (n = Ao(null, n, r, !0, a, t));
          } else (n.tag = 0), Mo(null, n, l, t), (n = n.child);
          return n;
        case 16:
          l = n.elementType;
          e: {
            switch (
              (null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
              (e = n.pendingProps),
              (l = (a = l._init)(l._payload)),
              (n.type = l),
              (a = n.tag =
                (function (e) {
                  if ("function" == typeof e) return Du(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === O) return 11;
                    if (e === z) return 14;
                  }
                  return 2;
                })(l)),
              (e = Ql(l, e)),
              a)
            ) {
              case 0:
                n = Uo(null, n, l, e, t);
                break e;
              case 1:
                n = Vo(null, n, l, e, t);
                break e;
              case 11:
                n = Ro(null, n, l, e, t);
                break e;
              case 14:
                n = jo(null, n, l, Ql(l.type, e), r, t);
                break e;
            }
            throw Error(o(306, l, ""));
          }
          return n;
        case 0:
          return (r = n.type), (l = n.pendingProps), Uo(e, n, r, (l = n.elementType === r ? l : Ql(r, l)), t);
        case 1:
          return (r = n.type), (l = n.pendingProps), Vo(e, n, r, (l = n.elementType === r ? l : Ql(r, l)), t);
        case 3:
          if ((Ho(n), (r = n.updateQueue), null === e || null === r)) throw Error(o(282));
          if (
            ((r = n.pendingProps),
            (l = null !== (l = n.memoizedState) ? l.element : null),
            la(e, n),
            ua(n, r, null, t),
            (r = n.memoizedState.element) === l)
          )
            Ha(), (n = ei(e, n, t));
          else {
            if (((a = (l = n.stateNode).hydrate) && ((ja = Br(n.stateNode.containerInfo.firstChild)), (Ra = n), (a = Fa = !0)), a)) {
              if (null != (e = l.mutableSourceEagerHydrationData))
                for (l = 0; l < e.length; l += 2) ((a = e[l])._workInProgressVersionPrimary = e[l + 1]), Ba.push(a);
              for (t = Ca(n, null, r, t), n.child = t; t; ) (t.flags = (-3 & t.flags) | 1024), (t = t.sibling);
            } else Mo(e, n, r, t), Ha();
            n = n.child;
          }
          return n;
        case 5:
          return (
            La(n),
            null === e && Ua(n),
            (r = n.type),
            (l = n.pendingProps),
            (a = null !== e ? e.memoizedProps : null),
            (i = l.children),
            Ur(r, l) ? (i = null) : null !== a && Ur(r, a) && (n.flags |= 16),
            Do(e, n),
            Mo(e, n, i, t),
            n.child
          );
        case 6:
          return null === e && Ua(n), null;
        case 13:
          return qo(e, n, t);
        case 4:
          return (
            Na(n, n.stateNode.containerInfo), (r = n.pendingProps), null === e ? (n.child = ka(n, null, r, t)) : Mo(e, n, r, t), n.child
          );
        case 11:
          return (r = n.type), (l = n.pendingProps), Ro(e, n, r, (l = n.elementType === r ? l : Ql(r, l)), t);
        case 7:
          return Mo(e, n, n.pendingProps, t), n.child;
        case 8:
        case 12:
          return Mo(e, n, n.pendingProps.children, t), n.child;
        case 10:
          e: {
            (r = n.type._context), (l = n.pendingProps), (i = n.memoizedProps), (a = l.value);
            var u = n.type._context;
            if ((ol(ql, u._currentValue), (u._currentValue = a), null !== i))
              if (
                ((u = i.value),
                0 === (a = or(u, a) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, a) : 1073741823)))
              ) {
                if (i.children === l.children && !sl.current) {
                  n = ei(e, n, t);
                  break e;
                }
              } else
                for (null !== (u = n.child) && (u.return = n); null !== u; ) {
                  var s = u.dependencies;
                  if (null !== s) {
                    i = u.child;
                    for (var c = s.firstContext; null !== c; ) {
                      if (c.context === r && 0 != (c.observedBits & a)) {
                        1 === u.tag && (((c = aa(-1, t & -t)).tag = 2), oa(u, c)),
                          (u.lanes |= t),
                          null !== (c = u.alternate) && (c.lanes |= t),
                          Jl(u.return, t),
                          (s.lanes |= t);
                        break;
                      }
                      c = c.next;
                    }
                  } else i = 10 === u.tag && u.type === n.type ? null : u.child;
                  if (null !== i) i.return = u;
                  else
                    for (i = u; null !== i; ) {
                      if (i === n) {
                        i = null;
                        break;
                      }
                      if (null !== (u = i.sibling)) {
                        (u.return = i.return), (i = u);
                        break;
                      }
                      i = i.return;
                    }
                  u = i;
                }
            Mo(e, n, l.children, t), (n = n.child);
          }
          return n;
        case 9:
          return (
            (l = n.type),
            (r = (a = n.pendingProps).children),
            ea(n, t),
            (r = r((l = na(l, a.unstable_observedBits)))),
            (n.flags |= 1),
            Mo(e, n, r, t),
            n.child
          );
        case 14:
          return (a = Ql((l = n.type), n.pendingProps)), jo(e, n, l, (a = Ql(l.type, a)), r, t);
        case 15:
          return Fo(e, n, n.type, n.pendingProps, r, t);
        case 17:
          return (
            (r = n.type),
            (l = n.pendingProps),
            (l = n.elementType === r ? l : Ql(r, l)),
            null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
            (n.tag = 1),
            dl(r) ? ((e = !0), gl(n)) : (e = !1),
            ea(n, t),
            ha(n, r, l),
            ga(n, r, l, t),
            Ao(null, n, r, !0, e, t)
          );
        case 19:
          return Jo(e, n, t);
        case 23:
        case 24:
          return Io(e, n, t);
      }
      throw Error(o(156, n.tag));
    }),
      (Zu.prototype.render = function (e) {
        qu(e, this._internalRoot, null, null);
      }),
      (Zu.prototype.unmount = function () {
        var e = this._internalRoot,
          n = e.containerInfo;
        qu(null, e, null, function () {
          n[Yr] = null;
        });
      }),
      (en = function (e) {
        13 === e.tag && (iu(e, 4, au()), Gu(e, 4));
      }),
      (nn = function (e) {
        13 === e.tag && (iu(e, 67108864, au()), Gu(e, 67108864));
      }),
      (tn = function (e) {
        if (13 === e.tag) {
          var n = au(),
            t = ou(e);
          iu(e, t, n), Gu(e, t);
        }
      }),
      (rn = function (e, n) {
        return n();
      }),
      (_e = function (e, n, t) {
        switch (n) {
          case "input":
            if ((te(e, t), (n = t.name), "radio" === t.type && null != n)) {
              for (t = e; t.parentNode; ) t = t.parentNode;
              for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
                var r = t[n];
                if (r !== e && r.form === e.form) {
                  var l = el(r);
                  if (!l) throw Error(o(90));
                  Z(r), te(r, l);
                }
              }
            }
            break;
          case "textarea":
            se(e, t);
            break;
          case "select":
            null != (n = t.value) && oe(e, !!t.multiple, n, !1);
        }
      }),
      (ze = pu),
      (Me = function (e, n, t, r, l) {
        var a = Ei;
        Ei |= 4;
        try {
          return Al(98, e.bind(null, n, t, r, l));
        } finally {
          0 === (Ei = a) && (Vi(), Bl());
        }
      }),
      (Re = function () {
        0 == (49 & Ei) &&
          ((function () {
            if (null !== Zi) {
              var e = Zi;
              (Zi = null),
                e.forEach(function (e) {
                  (e.expiredLanes |= 24 & e.pendingLanes), su(e, Dl());
                });
            }
            Bl();
          })(),
          Nu());
      }),
      (je = function (e, n) {
        var t = Ei;
        Ei |= 2;
        try {
          return e(n);
        } finally {
          0 === (Ei = t) && (Vi(), Bl());
        }
      });
    var ns = { Events: [Xr, Jr, el, Le, Te, Nu, { current: !1 }] },
      ts = { findFiberByHostInstance: Zr, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" },
      rs = {
        bundleType: ts.bundleType,
        version: ts.version,
        rendererPackageName: ts.rendererPackageName,
        rendererConfig: ts.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: k.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = Xe(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          ts.findFiberByHostInstance ||
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
      var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ls.isDisabled && ls.supportsFiber)
        try {
          (yl = ls.inject(rs)), (bl = ls);
        } catch (e) {}
    }
    (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ns),
      (n.createPortal = es),
      (n.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var n = e._reactInternals;
        if (void 0 === n) {
          if ("function" == typeof e.render) throw Error(o(188));
          throw Error(o(268, Object.keys(e)));
        }
        return (e = null === (e = Xe(n)) ? null : e.stateNode);
      }),
      (n.flushSync = function (e, n) {
        var t = Ei;
        if (0 != (48 & t)) return e(n);
        Ei |= 1;
        try {
          if (e) return Al(99, e.bind(null, n));
        } finally {
          (Ei = t), Bl();
        }
      }),
      (n.hydrate = function (e, n, t) {
        if (!Xu(n)) throw Error(o(200));
        return Ju(null, e, n, !0, t);
      }),
      (n.render = function (e, n, t) {
        if (!Xu(n)) throw Error(o(200));
        return Ju(null, e, n, !1, t);
      }),
      (n.unmountComponentAtNode = function (e) {
        if (!Xu(e)) throw Error(o(40));
        return (
          !!e._reactRootContainer &&
          (hu(function () {
            Ju(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Yr] = null);
            });
          }),
          !0)
        );
      }),
      (n.unstable_batchedUpdates = pu),
      (n.unstable_createPortal = function (e, n) {
        return es(e, n, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
      }),
      (n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
        if (!Xu(t)) throw Error(o(200));
        if (null == e || void 0 === e._reactInternals) throw Error(o(38));
        return Ju(e, n, t, !1, r);
      }),
      (n.version = "17.0.2");
  },
  18: function (e, n, t) {
    "use strict";
    /** @license React v17.0.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = t(6),
      l = 60103,
      a = 60106;
    (n.Fragment = 60107), (n.StrictMode = 60108), (n.Profiler = 60114);
    var o = 60109,
      i = 60110,
      u = 60112;
    n.Suspense = 60113;
    var s = 60115,
      c = 60116;
    if ("function" == typeof Symbol && Symbol.for) {
      var f = Symbol.for;
      (l = f("react.element")),
        (a = f("react.portal")),
        (n.Fragment = f("react.fragment")),
        (n.StrictMode = f("react.strict_mode")),
        (n.Profiler = f("react.profiler")),
        (o = f("react.provider")),
        (i = f("react.context")),
        (u = f("react.forward_ref")),
        (n.Suspense = f("react.suspense")),
        (s = f("react.memo")),
        (c = f("react.lazy"));
    }
    var d = "function" == typeof Symbol && Symbol.iterator;
    function p(e) {
      for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
        n += "&args[]=" + encodeURIComponent(arguments[t]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
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
    function g(e, n, t) {
      (this.props = e), (this.context = n), (this.refs = m), (this.updater = t || h);
    }
    function v() {}
    function y(e, n, t) {
      (this.props = e), (this.context = n), (this.refs = m), (this.updater = t || h);
    }
    (g.prototype.isReactComponent = {}),
      (g.prototype.setState = function (e, n) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(p(85));
        this.updater.enqueueSetState(this, e, n, "setState");
      }),
      (g.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (v.prototype = g.prototype);
    var b = (y.prototype = new v());
    (b.constructor = y), r(b, g.prototype), (b.isPureReactComponent = !0);
    var w = { current: null },
      k = Object.prototype.hasOwnProperty,
      C = { key: !0, ref: !0, __self: !0, __source: !0 };
    function x(e, n, t) {
      var r,
        a = {},
        o = null,
        i = null;
      if (null != n)
        for (r in (void 0 !== n.ref && (i = n.ref), void 0 !== n.key && (o = "" + n.key), n))
          k.call(n, r) && !C.hasOwnProperty(r) && (a[r] = n[r]);
      var u = arguments.length - 2;
      if (1 === u) a.children = t;
      else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        a.children = s;
      }
      if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
      return { $$typeof: l, type: e, key: o, ref: i, props: a, _owner: w.current };
    }
    function S(e) {
      return "object" == typeof e && null !== e && e.$$typeof === l;
    }
    var E = /\/+/g;
    function _(e, n) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var n = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function (e) {
                return n[e];
              })
            );
          })("" + e.key)
        : n.toString(36);
    }
    function P(e, n, t, r, o) {
      var i = typeof e;
      ("undefined" !== i && "boolean" !== i) || (e = null);
      var u = !1;
      if (null === e) u = !0;
      else
        switch (i) {
          case "string":
          case "number":
            u = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case l:
              case a:
                u = !0;
            }
        }
      if (u)
        return (
          (o = o((u = e))),
          (e = "" === r ? "." + _(u, 0) : r),
          Array.isArray(o)
            ? ((t = ""),
              null != e && (t = e.replace(E, "$&/") + "/"),
              P(o, n, t, "", function (e) {
                return e;
              }))
            : null != o &&
              (S(o) &&
                (o = (function (e, n) {
                  return { $$typeof: l, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
                })(o, t + (!o.key || (u && u.key === o.key) ? "" : ("" + o.key).replace(E, "$&/") + "/") + e)),
              n.push(o)),
          1
        );
      if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
        for (var s = 0; s < e.length; s++) {
          var c = r + _((i = e[s]), s);
          u += P(i, n, t, c, o);
        }
      else if (
        "function" ==
        typeof (c = (function (e) {
          return null === e || "object" != typeof e ? null : "function" == typeof (e = (d && e[d]) || e["@@iterator"]) ? e : null;
        })(e))
      )
        for (e = c.call(e), s = 0; !(i = e.next()).done; ) u += P((i = i.value), n, t, (c = r + _(i, s++)), o);
      else if ("object" === i)
        throw ((n = "" + e), Error(p(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n)));
      return u;
    }
    function N(e, n, t) {
      if (null == e) return e;
      var r = [],
        l = 0;
      return (
        P(e, r, "", "", function (e) {
          return n.call(t, e, l++);
        }),
        r
      );
    }
    function O(e) {
      if (-1 === e._status) {
        var n = e._result;
        (n = n()),
          (e._status = 0),
          (e._result = n),
          n.then(
            function (n) {
              0 === e._status && ((n = n.default), (e._status = 1), (e._result = n));
            },
            function (n) {
              0 === e._status && ((e._status = 2), (e._result = n));
            }
          );
      }
      if (1 === e._status) return e._result;
      throw e._result;
    }
    var L = { current: null };
    function T() {
      var e = L.current;
      if (null === e) throw Error(p(321));
      return e;
    }
    var z = {
      ReactCurrentDispatcher: L,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: w,
      IsSomeRendererActing: { current: !1 },
      assign: r
    };
    (n.Children = {
      map: N,
      forEach: function (e, n, t) {
        N(
          e,
          function () {
            n.apply(this, arguments);
          },
          t
        );
      },
      count: function (e) {
        var n = 0;
        return (
          N(e, function () {
            n++;
          }),
          n
        );
      },
      toArray: function (e) {
        return (
          N(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!S(e)) throw Error(p(143));
        return e;
      }
    }),
      (n.Component = g),
      (n.PureComponent = y),
      (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
      (n.cloneElement = function (e, n, t) {
        if (null == e) throw Error(p(267, e));
        var a = r({}, e.props),
          o = e.key,
          i = e.ref,
          u = e._owner;
        if (null != n) {
          if ((void 0 !== n.ref && ((i = n.ref), (u = w.current)), void 0 !== n.key && (o = "" + n.key), e.type && e.type.defaultProps))
            var s = e.type.defaultProps;
          for (c in n) k.call(n, c) && !C.hasOwnProperty(c) && (a[c] = void 0 === n[c] && void 0 !== s ? s[c] : n[c]);
        }
        var c = arguments.length - 2;
        if (1 === c) a.children = t;
        else if (1 < c) {
          s = Array(c);
          for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
          a.children = s;
        }
        return { $$typeof: l, type: e.type, key: o, ref: i, props: a, _owner: u };
      }),
      (n.createContext = function (e, n) {
        return (
          void 0 === n && (n = null),
          ((e = {
            $$typeof: i,
            _calculateChangedBits: n,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }).Provider = { $$typeof: o, _context: e }),
          (e.Consumer = e)
        );
      }),
      (n.createElement = x),
      (n.createFactory = function (e) {
        var n = x.bind(null, e);
        return (n.type = e), n;
      }),
      (n.createRef = function () {
        return { current: null };
      }),
      (n.forwardRef = function (e) {
        return { $$typeof: u, render: e };
      }),
      (n.isValidElement = S),
      (n.lazy = function (e) {
        return { $$typeof: c, _payload: { _status: -1, _result: e }, _init: O };
      }),
      (n.memo = function (e, n) {
        return { $$typeof: s, type: e, compare: void 0 === n ? null : n };
      }),
      (n.useCallback = function (e, n) {
        return T().useCallback(e, n);
      }),
      (n.useContext = function (e, n) {
        return T().useContext(e, n);
      }),
      (n.useDebugValue = function () {}),
      (n.useEffect = function (e, n) {
        return T().useEffect(e, n);
      }),
      (n.useImperativeHandle = function (e, n, t) {
        return T().useImperativeHandle(e, n, t);
      }),
      (n.useLayoutEffect = function (e, n) {
        return T().useLayoutEffect(e, n);
      }),
      (n.useMemo = function (e, n) {
        return T().useMemo(e, n);
      }),
      (n.useReducer = function (e, n, t) {
        return T().useReducer(e, n, t);
      }),
      (n.useRef = function (e) {
        return T().useRef(e);
      }),
      (n.useState = function (e) {
        return T().useState(e);
      }),
      (n.version = "17.0.2");
  },
  19: function (e, n, t) {
    "use strict";
    e.exports = t(20);
  },
  198: function (e, n, t) {
    var r = t(2),
      l = t(199);
    "string" == typeof (l = l.__esModule ? l.default : l) && (l = [[e.i, l, ""]]);
    var a = { insert: "head", singleton: !1 };
    r(l, a);
    e.exports = l.locals || {};
  },
  199: function (e, n, t) {
    (n = t(3)(!1)).push([
      e.i,
      "@font-face {\n  font-family: 'GothamPro';\n  src: url('/static/assets/fonts/GothamPro-Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: 'GothamPro';\n  src: url('/static/assets/fonts/GothamPro-Regular.ttf');\n  font-weight: normal;\n}\n@font-face {\n  font-family: 'GothamPro';\n  src: url('/static/assets/fonts/GothamPro-Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'GothamPro';\n  src: url('/static/assets/fonts/GothamPro-Bold.ttf');\n  font-weight: 700;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: 'GothamPro', Arial, sans-serif;\n  color: black;\n  height: 100%;\n  box-sizing: border-box;\n}\n* {\n  box-sizing: border-box;\n  font-family: 'GothamPro', Arial, sans-serif;\n}\n#page {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nheader {\n  flex-grow: 0;\n  text-align: center;\n  margin-top: 26px;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  height: 100%;\n}\nfooter {\n  flex-grow: 0;\n  color: black;\n  text-align: center;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 64px;\n}\nfooter > * {\n  margin: 16px;\n}\nfooter h5 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 160%;\n  color: #717984;\n}\nfooter a {\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 26px;\n  color: #FF6751;\n  text-decoration: underline;\n}\nfooter a:hover {\n  text-decoration: none;\n}\n.data-consent-setting {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 930px;\n  margin: 32px;\n}\n.data-consent-setting__title {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 56px;\n  line-height: 67px;\n  margin: 0;\n  padding: 0;\n}\n.data-consent-setting__text {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 160%;\n  padding: 0;\n  margin: 16px 0 0;\n}\n.data-consent-setting__switch {\n  margin-top: 70px;\n}\n@media (min-width: 1900px) {\n  h2 {\n    font-size: 72px;\n    line-height: 86px;\n  }\n  .data-consent-setting {\n    max-width: 1230px;\n  }\n  footer {\n    margin-bottom: 80px;\n  }\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  2: function (e, n, t) {
    "use strict";
    var r,
      l = function () {
        return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
      },
      a = (function () {
        var e = {};
        return function (n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        };
      })(),
      o = [];
    function i(e) {
      for (var n = -1, t = 0; t < o.length; t++)
        if (o[t].identifier === e) {
          n = t;
          break;
        }
      return n;
    }
    function u(e, n) {
      for (var t = {}, r = [], l = 0; l < e.length; l++) {
        var a = e[l],
          u = n.base ? a[0] + n.base : a[0],
          s = t[u] || 0,
          c = "".concat(u, " ").concat(s);
        t[u] = s + 1;
        var f = i(c),
          d = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== f ? (o[f].references++, o[f].updater(d)) : o.push({ identifier: c, updater: g(d, n), references: 1 }), r.push(c);
      }
      return r;
    }
    function s(e) {
      var n = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var l = t.nc;
        l && (r.nonce = l);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          n.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(n);
      else {
        var o = a(e.insert || "head");
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        o.appendChild(n);
      }
      return n;
    }
    var c,
      f =
        ((c = []),
        function (e, n) {
          return (c[e] = n), c.filter(Boolean).join("\n");
        });
    function d(e, n, t, r) {
      var l = t ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(n, l);
      else {
        var a = document.createTextNode(l),
          o = e.childNodes;
        o[n] && e.removeChild(o[n]), o.length ? e.insertBefore(a, o[n]) : e.appendChild(a);
      }
    }
    function p(e, n, t) {
      var r = t.css,
        l = t.media,
        a = t.sourceMap;
      if (
        (l ? e.setAttribute("media", l) : e.removeAttribute("media"),
        a &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      m = 0;
    function g(e, n) {
      var t, r, l;
      if (n.singleton) {
        var a = m++;
        (t = h || (h = s(n))), (r = d.bind(null, t, a, !1)), (l = d.bind(null, t, a, !0));
      } else
        (t = s(n)),
          (r = p.bind(null, t, n)),
          (l = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(t);
          });
      return (
        r(e),
        function (n) {
          if (n) {
            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
            r((e = n));
          } else l();
        }
      );
    }
    e.exports = function (e, n) {
      (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = l());
      var t = u((e = e || []), n);
      return function (e) {
        if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
          for (var r = 0; r < t.length; r++) {
            var l = i(t[r]);
            o[l].references--;
          }
          for (var a = u(e, n), s = 0; s < t.length; s++) {
            var c = i(t[s]);
            0 === o[c].references && (o[c].updater(), o.splice(c, 1));
          }
          t = a;
        }
      };
    };
  },
  20: function (e, n, t) {
    "use strict";
    /** @license React v0.20.2
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r, l, a, o;
    if ("object" == typeof performance && "function" == typeof performance.now) {
      var i = performance;
      n.unstable_now = function () {
        return i.now();
      };
    } else {
      var u = Date,
        s = u.now();
      n.unstable_now = function () {
        return u.now() - s;
      };
    }
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
      var c = null,
        f = null,
        d = function () {
          if (null !== c)
            try {
              var e = n.unstable_now();
              c(!0, e), (c = null);
            } catch (e) {
              throw (setTimeout(d, 0), e);
            }
        };
      (r = function (e) {
        null !== c ? setTimeout(r, 0, e) : ((c = e), setTimeout(d, 0));
      }),
        (l = function (e, n) {
          f = setTimeout(e, n);
        }),
        (a = function () {
          clearTimeout(f);
        }),
        (n.unstable_shouldYield = function () {
          return !1;
        }),
        (o = n.unstable_forceFrameRate = function () {});
    } else {
      var p = window.setTimeout,
        h = window.clearTimeout;
      if ("undefined" != typeof console) {
        var m = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          ),
          "function" != typeof m &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            );
      }
      var g = !1,
        v = null,
        y = -1,
        b = 5,
        w = 0;
      (n.unstable_shouldYield = function () {
        return n.unstable_now() >= w;
      }),
        (o = function () {}),
        (n.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (b = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var k = new MessageChannel(),
        C = k.port2;
      (k.port1.onmessage = function () {
        if (null !== v) {
          var e = n.unstable_now();
          w = e + b;
          try {
            v(!0, e) ? C.postMessage(null) : ((g = !1), (v = null));
          } catch (e) {
            throw (C.postMessage(null), e);
          }
        } else g = !1;
      }),
        (r = function (e) {
          (v = e), g || ((g = !0), C.postMessage(null));
        }),
        (l = function (e, t) {
          y = p(function () {
            e(n.unstable_now());
          }, t);
        }),
        (a = function () {
          h(y), (y = -1);
        });
    }
    function x(e, n) {
      var t = e.length;
      e.push(n);
      e: for (;;) {
        var r = (t - 1) >>> 1,
          l = e[r];
        if (!(void 0 !== l && 0 < _(l, n))) break e;
        (e[r] = n), (e[t] = l), (t = r);
      }
    }
    function S(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function E(e) {
      var n = e[0];
      if (void 0 !== n) {
        var t = e.pop();
        if (t !== n) {
          e[0] = t;
          e: for (var r = 0, l = e.length; r < l; ) {
            var a = 2 * (r + 1) - 1,
              o = e[a],
              i = a + 1,
              u = e[i];
            if (void 0 !== o && 0 > _(o, t))
              void 0 !== u && 0 > _(u, o) ? ((e[r] = u), (e[i] = t), (r = i)) : ((e[r] = o), (e[a] = t), (r = a));
            else {
              if (!(void 0 !== u && 0 > _(u, t))) break e;
              (e[r] = u), (e[i] = t), (r = i);
            }
          }
        }
        return n;
      }
      return null;
    }
    function _(e, n) {
      var t = e.sortIndex - n.sortIndex;
      return 0 !== t ? t : e.id - n.id;
    }
    var P = [],
      N = [],
      O = 1,
      L = null,
      T = 3,
      z = !1,
      M = !1,
      R = !1;
    function j(e) {
      for (var n = S(N); null !== n; ) {
        if (null === n.callback) E(N);
        else {
          if (!(n.startTime <= e)) break;
          E(N), (n.sortIndex = n.expirationTime), x(P, n);
        }
        n = S(N);
      }
    }
    function F(e) {
      if (((R = !1), j(e), !M))
        if (null !== S(P)) (M = !0), r(I);
        else {
          var n = S(N);
          null !== n && l(F, n.startTime - e);
        }
    }
    function I(e, t) {
      (M = !1), R && ((R = !1), a()), (z = !0);
      var r = T;
      try {
        for (j(t), L = S(P); null !== L && (!(L.expirationTime > t) || (e && !n.unstable_shouldYield())); ) {
          var o = L.callback;
          if ("function" == typeof o) {
            (L.callback = null), (T = L.priorityLevel);
            var i = o(L.expirationTime <= t);
            (t = n.unstable_now()), "function" == typeof i ? (L.callback = i) : L === S(P) && E(P), j(t);
          } else E(P);
          L = S(P);
        }
        if (null !== L) var u = !0;
        else {
          var s = S(N);
          null !== s && l(F, s.startTime - t), (u = !1);
        }
        return u;
      } finally {
        (L = null), (T = r), (z = !1);
      }
    }
    var D = o;
    (n.unstable_IdlePriority = 5),
      (n.unstable_ImmediatePriority = 1),
      (n.unstable_LowPriority = 4),
      (n.unstable_NormalPriority = 3),
      (n.unstable_Profiling = null),
      (n.unstable_UserBlockingPriority = 2),
      (n.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (n.unstable_continueExecution = function () {
        M || z || ((M = !0), r(I));
      }),
      (n.unstable_getCurrentPriorityLevel = function () {
        return T;
      }),
      (n.unstable_getFirstCallbackNode = function () {
        return S(P);
      }),
      (n.unstable_next = function (e) {
        switch (T) {
          case 1:
          case 2:
          case 3:
            var n = 3;
            break;
          default:
            n = T;
        }
        var t = T;
        T = n;
        try {
          return e();
        } finally {
          T = t;
        }
      }),
      (n.unstable_pauseExecution = function () {}),
      (n.unstable_requestPaint = D),
      (n.unstable_runWithPriority = function (e, n) {
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
        var t = T;
        T = e;
        try {
          return n();
        } finally {
          T = t;
        }
      }),
      (n.unstable_scheduleCallback = function (e, t, o) {
        var i = n.unstable_now();
        switch (("object" == typeof o && null !== o ? (o = "number" == typeof (o = o.delay) && 0 < o ? i + o : i) : (o = i), e)) {
          case 1:
            var u = -1;
            break;
          case 2:
            u = 250;
            break;
          case 5:
            u = 1073741823;
            break;
          case 4:
            u = 1e4;
            break;
          default:
            u = 5e3;
        }
        return (
          (e = { id: O++, callback: t, priorityLevel: e, startTime: o, expirationTime: (u = o + u), sortIndex: -1 }),
          o > i
            ? ((e.sortIndex = o), x(N, e), null === S(P) && e === S(N) && (R ? a() : (R = !0), l(F, o - i)))
            : ((e.sortIndex = u), x(P, e), M || z || ((M = !0), r(I))),
          e
        );
      }),
      (n.unstable_wrapCallback = function (e) {
        var n = T;
        return function () {
          var t = T;
          T = n;
          try {
            return e.apply(this, arguments);
          } finally {
            T = t;
          }
        };
      });
  },
  200: function (e, n, t) {
    var r = t(2),
      l = t(201);
    "string" == typeof (l = l.__esModule ? l.default : l) && (l = [[e.i, l, ""]]);
    var a = { insert: "head", singleton: !1 };
    r(l, a);
    e.exports = l.locals || {};
  },
  201: function (e, n, t) {
    (n = t(3)(!1)).push([
      e.i,
      '.rounded-switch {\n  position: relative;\n  display: inline-block;\n  width: 72px;\n  height: 33px;\n}\n.rounded-switch__state-text {\n  margin-left: 32px;\n  margin-right: 32px;\n}\n.rounded-switch__state-text--on:after {\n  position: absolute;\n  content: "On";\n  right: -32px;\n  top: 6px;\n  font-family: Gotham Pro;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 26px;\n  color: #FE573F;\n}\n.rounded-switch__state-text--off:before {\n  position: absolute;\n  content: "Off";\n  left: -32px;\n  top: 6px;\n  font-family: Gotham Pro;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 26px;\n  color: #717984;\n}\n.rounded-switch__slider {\n  border-radius: 100px;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(113, 121, 132, 0.3);\n  transition: 0.4s;\n}\n.rounded-switch__slider:before {\n  position: absolute;\n  content: "";\n  height: 44px;\n  width: 44px;\n  left: 0;\n  bottom: -6px;\n  background-color: #717984;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n.rounded-switch__checkbox {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.rounded-switch__checkbox:checked + .rounded-switch__slider {\n  background-color: rgba(226, 95, 66, 0.1);\n}\n.rounded-switch__checkbox:hover + .rounded-switch__slider {\n  background-color: rgba(113, 121, 132, 0.4);\n}\n.rounded-switch__checkbox:checked:hover + .rounded-switch__slider {\n  background-color: rgba(226, 95, 66, 0.1);\n}\n.rounded-switch__checkbox:focus + .rounded-switch__slider {\n  box-shadow: 0 0 1px #FE573F;\n}\n.rounded-switch__checkbox:focus:hover + .rounded-switch__slider {\n  box-shadow: 0 0 1px #FE573F;\n}\n.rounded-switch__checkbox:checked + .rounded-switch__slider:before {\n  transform: translateX(28px);\n  background-color: #FE573F;\n}\n.rounded-switch__checkbox:checked + .rounded-switch__slider:before {\n  transform: translateX(28px);\n  background-color: #FE573F;\n}\n',
      ""
    ]),
      (e.exports = n);
  },
  204: function (e, n, t) {
    "use strict";
    t.r(n);
    t(10), t(198);
    var r = t(11),
      l = t.n(r),
      a = t(8),
      o = t(1),
      i = function (e, n) {
        var t = Object(o.useRef)(function () {});
        Object(o.useEffect)(function () {
          t.current = e;
        }),
          Object(o.useEffect)(
            function () {
              if (null !== n) {
                var e = setInterval(function () {
                  return t.current();
                }, n || 0);
                return function () {
                  return clearInterval(e);
                };
              }
            },
            [n]
          );
      },
      u = t(4),
      s = (t(200), t(28)),
      c = t.n(s),
      f = t(0);
    var d = function ({ className: e, value: n, onChange: t, stateText: r }) {
      return Object(f.jsxs)("label", {
        className: c()(
          "rounded-switch",
          { "rounded-switch__state-text": r, "rounded-switch__state-text--on": n && r, "rounded-switch__state-text--off": !n && r },
          e
        ),
        children: [
          Object(f.jsx)("input", { className: "rounded-switch__checkbox", type: "checkbox", checked: n, onChange: () => t(!n) }),
          Object(f.jsx)("span", { className: "rounded-switch__slider" })
        ]
      });
    };
    var p = function () {
      const [e, n] = Object(o.useState)(!0);
      i(() => {
        const e = sdk.storage.get(u.a);
        "boolean" != typeof e ? (sdk.storage.set(u.a, !0), n(!0)) : n(!!e);
      }, 1e3);
      const t = Object(o.useCallback)(() => {
        sdk.storage.set(u.a, !e).then(() => {
          n(!!sdk.storage.get(u.a));
        });
      }, [e]);
      return Object(f.jsxs)(f.Fragment, {
        children: [
          Object(f.jsx)("header", {
            children: Object(f.jsxs)("svg", {
              width: "187",
              height: "41",
              viewBox: "0 0 187 41",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                Object(f.jsx)("path", {
                  d: "M43.816 31V15.952H38.176V14.2H51.376V15.952H45.736V31H43.816ZM67.7581 28.744C66.1421 30.44 64.0861 31.288 61.5901 31.288C59.0941 31.288 57.0461 30.44 55.4461 28.744C53.8461 27.048 53.0461 25 53.0461 22.6C53.0461 20.216 53.8541 18.176 55.4701 16.48C57.0861 14.768 59.1421 13.912 61.6381 13.912C64.1341 13.912 66.1821 14.76 67.7821 16.456C69.3821 18.152 70.1821 20.2 70.1821 22.6C70.1821 24.984 69.3741 27.032 67.7581 28.744ZM56.8861 27.52C58.1501 28.864 59.7341 29.536 61.6381 29.536C63.5421 29.536 65.1101 28.872 66.3421 27.544C67.5901 26.2 68.2141 24.552 68.2141 22.6C68.2141 20.664 67.5821 19.024 66.3181 17.68C65.0701 16.336 63.4941 15.664 61.5901 15.664C59.6861 15.664 58.1101 16.336 56.8621 17.68C55.6301 19.008 55.0141 20.648 55.0141 22.6C55.0141 24.536 55.6381 26.176 56.8861 27.52ZM80.9007 31.264C78.7727 31.264 77.0767 30.632 75.8127 29.368C74.5487 28.088 73.9167 26.288 73.9167 23.968V14.2H75.8127V23.848C75.8127 25.656 76.2607 27.056 77.1567 28.048C78.0687 29.024 79.3327 29.512 80.9487 29.512C82.5327 29.512 83.7727 29.04 84.6687 28.096C85.5647 27.152 86.0127 25.776 86.0127 23.968V14.2H87.9087V23.824C87.9087 26.224 87.2767 28.064 86.0127 29.344C84.7487 30.624 83.0447 31.264 80.9007 31.264ZM100.072 31.288C97.6556 31.288 95.6476 30.456 94.0476 28.792C92.4476 27.112 91.6476 25.048 91.6476 22.6C91.6476 20.184 92.4556 18.136 94.0716 16.456C95.6876 14.76 97.7116 13.912 100.144 13.912C101.552 13.912 102.752 14.144 103.744 14.608C104.736 15.056 105.704 15.728 106.648 16.624L105.4 17.968C103.784 16.432 102.024 15.664 100.12 15.664C98.2636 15.664 96.7116 16.328 95.4636 17.656C94.2316 18.984 93.6156 20.632 93.6156 22.6C93.6156 24.552 94.2396 26.2 95.4876 27.544C96.7356 28.872 98.2796 29.536 100.12 29.536C101.208 29.536 102.168 29.336 103 28.936C103.832 28.536 104.68 27.928 105.544 27.112L106.792 28.432C105.848 29.376 104.856 30.088 103.816 30.568C102.776 31.048 101.528 31.288 100.072 31.288ZM110.11 31V14.2H112.006V21.664H121.702V14.2H123.598V31H121.702V23.44H112.006V31H110.11ZM141.324 31.12L134.1 14.2H136.212L142.188 28.672L148.188 14.2H150.228L143.004 31.12H141.324ZM153.54 31V14.2H159.828C161.748 14.2 163.276 14.68 164.412 15.64C165.548 16.6 166.116 17.912 166.116 19.576C166.116 21.32 165.484 22.672 164.22 23.632C162.972 24.592 161.404 25.072 159.516 25.072H155.436V31H153.54ZM155.436 23.344H159.588C160.98 23.344 162.092 23.008 162.924 22.336C163.772 21.648 164.196 20.736 164.196 19.6C164.196 18.432 163.788 17.536 162.972 16.912C162.172 16.272 161.076 15.952 159.684 15.952H155.436V23.344ZM169.571 31V14.2H171.347L181.931 27.664V14.2H183.779V31H182.267L171.419 17.224V31H169.571Z",
                  fill: "#3C3C3C"
                }),
                Object(f.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M20.6469 24.3557V24.3659L20.6184 24.5726L19.8629 29.9445C19.5662 31.8435 18.6054 33.5756 17.1515 34.8328C15.9587 35.864 14.4862 36.5172 12.9212 36.7094C11.3562 36.9016 9.76944 36.624 8.36258 35.9121C7.20045 35.3303 6.1996 34.4711 5.44854 33.4104C5.20729 33.077 4.9928 32.7249 4.80709 32.3576L3.32461 29.4253L1.61712 26.22C1.39067 25.7964 1.34054 25.3005 1.47761 24.84C1.61469 24.3796 1.92789 23.9919 2.34919 23.7611C2.55723 23.6486 2.78552 23.5785 3.02084 23.5547C3.25616 23.531 3.49385 23.5542 3.72016 23.623C3.94646 23.6917 4.15689 23.8046 4.33926 23.9552C4.52164 24.1058 4.67234 24.2911 4.78265 24.5003L6.54614 27.8094V13.7178C6.54614 12.7138 7.34949 11.9023 8.34425 11.9023C9.33596 11.9023 10.1403 12.7138 10.1403 13.7188V20.3991C10.2543 20.0337 10.4816 19.7141 10.7893 19.4866C11.097 19.259 11.4692 19.1354 11.8519 19.1335C12.8467 19.1335 13.65 19.9501 13.65 20.9499V21.9426C13.7112 21.5154 13.9243 21.1245 14.2502 20.8416C14.5761 20.5587 14.9931 20.4027 15.4247 20.4021C16.4195 20.4021 17.2228 21.2136 17.2228 22.2186V23.4475C17.4102 23.0317 17.7491 22.7031 18.1704 22.5285C18.5917 22.3538 19.0637 22.3464 19.4903 22.5077C19.8545 22.6471 20.1639 22.9004 20.3723 23.23C20.5807 23.5595 20.6771 23.9476 20.6469 24.3364H20.65L20.6469 24.3557Z",
                  fill: "#454545"
                }),
                Object(f.jsx)("path", {
                  d: "M7.09708 10.0383C7.05483 10.0806 7.00465 10.1143 6.94939 10.1373C6.89413 10.1603 6.83489 10.1722 6.77504 10.1723C6.71519 10.1723 6.65591 10.1607 6.60058 10.1378C6.54526 10.115 6.49496 10.0815 6.45258 10.0393C6.41019 9.99703 6.37654 9.94684 6.35355 9.89159C6.33056 9.83633 6.31868 9.77709 6.31858 9.71724C6.31849 9.65739 6.33019 9.59811 6.353 9.54278C6.37582 9.48745 6.40931 9.43716 6.45156 9.39477C6.67169 9.17235 6.93373 8.99579 7.22254 8.87529C7.51134 8.75478 7.82117 8.69274 8.1341 8.69274C8.44704 8.69274 8.75687 8.75478 9.04567 8.87529C9.33447 8.99579 9.59652 9.17235 9.81665 9.39477C9.89258 9.48227 9.93246 9.59533 9.92823 9.7111C9.924 9.82687 9.87598 9.93671 9.79387 10.0184C9.71176 10.1002 9.60168 10.1477 9.4859 10.1513C9.37011 10.155 9.25724 10.1146 9.1701 10.0383C9.03458 9.90109 8.87318 9.79218 8.69526 9.71784C8.51733 9.64351 8.32642 9.60523 8.13359 9.60523C7.94077 9.60523 7.74986 9.64351 7.57193 9.71784C7.394 9.79218 7.2326 9.90109 7.09708 10.0383ZM5.11163 8.05688C5.0263 8.14248 4.91046 8.19068 4.78959 8.19087C4.66872 8.19106 4.55272 8.14323 4.46712 8.0579C4.38152 7.97257 4.33332 7.85672 4.33313 7.73586C4.33294 7.61499 4.38077 7.49899 4.4661 7.41339C4.94632 6.92816 5.51798 6.54297 6.14802 6.28008C6.77806 6.01719 7.45397 5.88184 8.13665 5.88184C8.81933 5.88184 9.49524 6.01719 10.1253 6.28008C10.7553 6.54297 11.327 6.92816 11.8072 7.41339C11.8803 7.50118 11.9179 7.61317 11.9126 7.7273C11.9073 7.84144 11.8594 7.94944 11.7785 8.03005C11.6975 8.11065 11.5892 8.158 11.4751 8.16278C11.3609 8.16756 11.2491 8.12942 11.1617 8.05586C10.766 7.65572 10.295 7.33805 9.77571 7.12124C9.25645 6.90444 8.69935 6.7928 8.13665 6.7928C7.57395 6.7928 7.01684 6.90444 6.49759 7.12124C5.97834 7.33805 5.50725 7.65572 5.11163 8.05586V8.05688Z",
                  fill: "#FF533F"
                }),
                Object(f.jsx)("path", {
                  d: "M3.12622 6.07436C3.04089 6.15996 2.92504 6.20816 2.80418 6.20835C2.68331 6.20854 2.56731 6.16071 2.48171 6.07538C2.39611 5.99004 2.34791 5.8742 2.34772 5.75333C2.34753 5.63246 2.39536 5.51647 2.48069 5.43087C3.22095 4.68256 4.10227 4.08849 5.07364 3.68305C6.04502 3.27761 7.08716 3.06885 8.13975 3.06885C9.19234 3.06885 10.2345 3.27761 11.2059 3.68305C12.1772 4.08849 13.0585 4.68256 13.7988 5.43087C13.8747 5.51836 13.9146 5.63142 13.9104 5.74719C13.9062 5.86296 13.8581 5.97281 13.776 6.05453C13.6939 6.13625 13.5838 6.18375 13.4681 6.18744C13.3523 6.19112 13.2394 6.1507 13.1523 6.07436C12.4966 5.41129 11.7159 4.88488 10.8554 4.52561C9.99495 4.16633 9.07173 3.98134 8.13924 3.98134C7.20675 3.98134 6.28353 4.16633 5.42303 4.52561C4.56254 4.88488 3.78186 5.41129 3.12622 6.07436Z",
                  fill: "#FF533F"
                }),
                Object(f.jsx)("path", {
                  d: "M1.14081 4.03395C1.09855 4.07633 1.04837 4.10998 0.99311 4.13297C0.937853 4.15596 0.878609 4.16784 0.818761 4.16794C0.758913 4.16803 0.699633 4.15634 0.644304 4.13352C0.588975 4.11071 0.538682 4.07722 0.496296 4.03496C0.45391 3.99271 0.420262 3.94253 0.397271 3.88727C0.374281 3.83201 0.3624 3.77277 0.362305 3.71292C0.362211 3.65307 0.373905 3.59379 0.396721 3.53846C0.419536 3.48313 0.453026 3.43284 0.495278 3.39046C1.49555 2.37921 2.68646 1.57641 3.99908 1.0285C5.3117 0.480602 6.71995 0.198486 8.14233 0.198486C9.56471 0.198486 10.973 0.480602 12.2856 1.0285C13.5982 1.57641 14.7891 2.37921 15.7894 3.39046C15.8639 3.47806 15.9026 3.59052 15.8979 3.70542C15.8932 3.82033 15.8453 3.92923 15.7639 4.01042C15.6824 4.09161 15.5734 4.13912 15.4585 4.14348C15.3436 4.14784 15.2312 4.10873 15.1439 4.03395C14.2282 3.10779 13.1378 2.37251 11.936 1.87068C10.7342 1.36886 9.44472 1.11047 8.14233 1.11047C6.83993 1.11047 5.55048 1.36886 4.34865 1.87068C3.14681 2.37251 2.05649 3.10779 1.14081 4.03395Z",
                  fill: "#FF533F"
                })
              ]
            })
          }),
          Object(f.jsx)("main", {
            children: Object(f.jsxs)("section", {
              className: "data-consent-setting",
              children: [
                Object(f.jsx)("h2", { className: "data-consent-setting__title", children: "Provide access to app usage data" }),
                Object(f.jsx)("p", {
                  className: "data-consent-setting__text",
                  children:
                    "Help Touch VPN to become better by sharing your in app usage. This data is fully anonymized and GDPR compliant. We don't sell your personal data to other providers"
                }),
                Object(f.jsx)(d, { className: "data-consent-setting__switch", value: e, onChange: t, stateText: !0 })
              ]
            })
          }),
          Object(f.jsxs)("footer", {
            children: [
              Object(f.jsx)("a", { href: "https://www.pango.co/privacy", children: "Privacy policy" }),
              Object(f.jsx)("svg", {
                width: "4",
                height: "4",
                viewBox: "0 0 4 4",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: Object(f.jsx)("circle", { cx: "2", cy: "2", r: "2", fill: "#717984" })
              }),
              Object(f.jsx)("a", { href: "https://www.pango.co/terms/", children: "Terms of service" }),
              Object(f.jsx)("svg", {
                width: "4",
                height: "4",
                viewBox: "0 0 4 4",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: Object(f.jsx)("circle", { cx: "2", cy: "2", r: "2", fill: "#717984" })
              }),
              Object(f.jsx)("a", { href: "mailto:support@pango.co", children: "Contact Us" }),
              Object(f.jsx)("svg", {
                width: "4",
                height: "4",
                viewBox: "0 0 4 4",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: Object(f.jsx)("circle", { cx: "2", cy: "2", r: "2", fill: "#717984" })
              }),
              Object(f.jsx)("h5", { children: "Copyright © 2021 TouchVPN Inc. All Rights Reserved" })
            ]
          })
        ]
      });
    };
    const h = () => {
      var e, n, t;
      if (
        ((window.sdk = null === (e = browser.extension.getBackgroundPage()) || void 0 === e ? void 0 : e.sdk),
        null === (n = sdk) || void 0 === n || null === (t = n.loading) || void 0 === t || !t.loaded)
      )
        return setTimeout(() => {
          h();
        }, 500);
      (window.storage = {}),
        new a.a(),
        (window.controller = l.a.render(Object(f.jsx)(p, {}), document.getElementById("page"))),
        sdk.reporting.report("page", "settings");
    };
    h();
  },
  21: function (e, n, t) {
    "use strict";
    /** @license React v17.0.2
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ t(6);
    var r = t(1),
      l = 60103;
    if (((n.Fragment = 60107), "function" == typeof Symbol && Symbol.for)) {
      var a = Symbol.for;
      (l = a("react.element")), (n.Fragment = a("react.fragment"));
    }
    var o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      i = Object.prototype.hasOwnProperty,
      u = { key: !0, ref: !0, __self: !0, __source: !0 };
    function s(e, n, t) {
      var r,
        a = {},
        s = null,
        c = null;
      for (r in (void 0 !== t && (s = "" + t), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (c = n.ref), n))
        i.call(n, r) && !u.hasOwnProperty(r) && (a[r] = n[r]);
      if (e && e.defaultProps) for (r in (n = e.defaultProps)) void 0 === a[r] && (a[r] = n[r]);
      return { $$typeof: l, type: e, key: s, ref: c, props: a, _owner: o.current };
    }
    (n.jsx = s), (n.jsxs = s);
  },
  28: function (e, n, t) {
    var r;
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
      "use strict";
      var t = {}.hasOwnProperty;
      function l() {
        for (var e = [], n = 0; n < arguments.length; n++) {
          var r = arguments[n];
          if (r) {
            var a = typeof r;
            if ("string" === a || "number" === a) e.push(r);
            else if (Array.isArray(r) && r.length) {
              var o = l.apply(null, r);
              o && e.push(o);
            } else if ("object" === a) for (var i in r) t.call(r, i) && r[i] && e.push(i);
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((l.default = l), (e.exports = l))
        : void 0 ===
            (r = function () {
              return l;
            }.apply(n, [])) || (e.exports = r);
    })();
  },
  3: function (e, n, t) {
    "use strict";
    e.exports = function (e) {
      var n = [];
      return (
        (n.toString = function () {
          return this.map(function (n) {
            var t = (function (e, n) {
              var t = e[1] || "",
                r = e[3];
              if (!r) return t;
              if (n && "function" == typeof btoa) {
                var l =
                    ((o = r),
                    (i = btoa(unescape(encodeURIComponent(JSON.stringify(o))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i)),
                    "/*# ".concat(u, " */")),
                  a = r.sources.map(function (e) {
                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                  });
                return [t].concat(a).concat([l]).join("\n");
              }
              var o, i, u;
              return [t].join("\n");
            })(n, e);
            return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
          }).join("");
        }),
        (n.i = function (e, t, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var l = {};
          if (r)
            for (var a = 0; a < this.length; a++) {
              var o = this[a][0];
              null != o && (l[o] = !0);
            }
          for (var i = 0; i < e.length; i++) {
            var u = [].concat(e[i]);
            (r && l[u[0]]) || (t && (u[2] ? (u[2] = "".concat(t, " and ").concat(u[2])) : (u[2] = t)), n.push(u));
          }
        }),
        n
      );
    };
  },
  4: function (e, n, t) {
    "use strict";
    t.d(n, "c", function () {
      return r;
    }),
      t.d(n, "b", function () {
        return l;
      }),
      t.d(n, "d", function () {
        return a;
      }),
      t.d(n, "e", function () {
        return o;
      }),
      t.d(n, "a", function () {
        return i;
      });
    const r = "Panel.loaded",
      l = "Panel.animated",
      a = "Storage.error",
      o = "Panel.tooltipsShowed",
      i = "data-consent-accepted";
  },
  6: function (e, n, t) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
      l = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable;
    function o(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(n)
            .map(function (e) {
              return n[e];
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
      : function (e, n) {
          for (var t, i, u = o(e), s = 1; s < arguments.length; s++) {
            for (var c in (t = Object(arguments[s]))) l.call(t, c) && (u[c] = t[c]);
            if (r) {
              i = r(t);
              for (var f = 0; f < i.length; f++) a.call(t, i[f]) && (u[i[f]] = t[i[f]]);
            }
          }
          return u;
        };
  },
  8: function (e, n, t) {
    "use strict";
    n.a = class {
      constructor() {
        (window.log = () => {}),
          (window.debug = () => {}),
          (window.error = () => {}),
          sdk.config.debug && ((window.log = console.log), (window.debug = console.debug), (window.error = console.error));
      }
    };
  }
});
