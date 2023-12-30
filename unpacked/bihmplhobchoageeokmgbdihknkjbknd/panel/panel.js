!(function (e) {
  var n = {};
  function a(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
  }
  (a.m = e),
    (a.c = n),
    (a.d = function (e, n, t) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if ((a.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
        for (var i in e)
          a.d(
            t,
            i,
            function (n) {
              return e[n];
            }.bind(null, i)
          );
      return t;
    }),
    (a.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(n, "a", n), n;
    }),
    (a.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (a.p = ""),
    a((a.s = 203));
})([
  function (e, n, a) {
    "use strict";
    e.exports = a(21);
  },
  function (e, n, a) {
    "use strict";
    e.exports = a(18);
  },
  function (e, n, a) {
    "use strict";
    var t,
      i = function () {
        return void 0 === t && (t = Boolean(window && document && document.all && !window.atob)), t;
      },
      r = (function () {
        var e = {};
        return function (n) {
          if (void 0 === e[n]) {
            var a = document.querySelector(n);
            if (window.HTMLIFrameElement && a instanceof window.HTMLIFrameElement)
              try {
                a = a.contentDocument.head;
              } catch (e) {
                a = null;
              }
            e[n] = a;
          }
          return e[n];
        };
      })(),
      o = [];
    function l(e) {
      for (var n = -1, a = 0; a < o.length; a++)
        if (o[a].identifier === e) {
          n = a;
          break;
        }
      return n;
    }
    function s(e, n) {
      for (var a = {}, t = [], i = 0; i < e.length; i++) {
        var r = e[i],
          s = n.base ? r[0] + n.base : r[0],
          c = a[s] || 0,
          u = "".concat(s, " ").concat(c);
        a[s] = c + 1;
        var d = l(u),
          p = { css: r[1], media: r[2], sourceMap: r[3] };
        -1 !== d ? (o[d].references++, o[d].updater(p)) : o.push({ identifier: u, updater: m(p, n), references: 1 }), t.push(u);
      }
      return t;
    }
    function c(e) {
      var n = document.createElement("style"),
        t = e.attributes || {};
      if (void 0 === t.nonce) {
        var i = a.nc;
        i && (t.nonce = i);
      }
      if (
        (Object.keys(t).forEach(function (e) {
          n.setAttribute(e, t[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(n);
      else {
        var o = r(e.insert || "head");
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        o.appendChild(n);
      }
      return n;
    }
    var u,
      d =
        ((u = []),
        function (e, n) {
          return (u[e] = n), u.filter(Boolean).join("\n");
        });
    function p(e, n, a, t) {
      var i = a ? "" : t.media ? "@media ".concat(t.media, " {").concat(t.css, "}") : t.css;
      if (e.styleSheet) e.styleSheet.cssText = d(n, i);
      else {
        var r = document.createTextNode(i),
          o = e.childNodes;
        o[n] && e.removeChild(o[n]), o.length ? e.insertBefore(r, o[n]) : e.appendChild(r);
      }
    }
    function h(e, n, a) {
      var t = a.css,
        i = a.media,
        r = a.sourceMap;
      if (
        (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
        r &&
          btoa &&
          (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = t;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(t));
      }
    }
    var g = null,
      f = 0;
    function m(e, n) {
      var a, t, i;
      if (n.singleton) {
        var r = f++;
        (a = g || (g = c(n))), (t = p.bind(null, a, r, !1)), (i = p.bind(null, a, r, !0));
      } else
        (a = c(n)),
          (t = h.bind(null, a, n)),
          (i = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(a);
          });
      return (
        t(e),
        function (n) {
          if (n) {
            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
            t((e = n));
          } else i();
        }
      );
    }
    e.exports = function (e, n) {
      (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = i());
      var a = s((e = e || []), n);
      return function (e) {
        if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
          for (var t = 0; t < a.length; t++) {
            var i = l(a[t]);
            o[i].references--;
          }
          for (var r = s(e, n), c = 0; c < a.length; c++) {
            var u = l(a[c]);
            0 === o[u].references && (o[u].updater(), o.splice(u, 1));
          }
          a = r;
        }
      };
    };
  },
  function (e, n, a) {
    "use strict";
    e.exports = function (e) {
      var n = [];
      return (
        (n.toString = function () {
          return this.map(function (n) {
            var a = (function (e, n) {
              var a = e[1] || "",
                t = e[3];
              if (!t) return a;
              if (n && "function" == typeof btoa) {
                var i =
                    ((o = t),
                    (l = btoa(unescape(encodeURIComponent(JSON.stringify(o))))),
                    (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l)),
                    "/*# ".concat(s, " */")),
                  r = t.sources.map(function (e) {
                    return "/*# sourceURL=".concat(t.sourceRoot || "").concat(e, " */");
                  });
                return [a].concat(r).concat([i]).join("\n");
              }
              var o, l, s;
              return [a].join("\n");
            })(n, e);
            return n[2] ? "@media ".concat(n[2], " {").concat(a, "}") : a;
          }).join("");
        }),
        (n.i = function (e, a, t) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var i = {};
          if (t)
            for (var r = 0; r < this.length; r++) {
              var o = this[r][0];
              null != o && (i[o] = !0);
            }
          for (var l = 0; l < e.length; l++) {
            var s = [].concat(e[l]);
            (t && i[s[0]]) || (a && (s[2] ? (s[2] = "".concat(a, " and ").concat(s[2])) : (s[2] = a)), n.push(s));
          }
        }),
        n
      );
    };
  },
  function (e, n, a) {
    "use strict";
    a.d(n, "c", function () {
      return t;
    }),
      a.d(n, "b", function () {
        return i;
      }),
      a.d(n, "d", function () {
        return r;
      }),
      a.d(n, "e", function () {
        return o;
      }),
      a.d(n, "a", function () {
        return l;
      });
    const t = "Panel.loaded",
      i = "Panel.animated",
      r = "Storage.error",
      o = "Panel.tooltipsShowed",
      l = "data-consent-accepted";
  },
  function (e, n, a) {
    "use strict";
    a.d(n, "a", function () {
      return o;
    }),
      a.d(n, "b", function () {
        return l;
      }),
      a.d(n, "d", function () {
        return s;
      }),
      a.d(n, "c", function () {
        return c;
      });
    var t = a(27);
    const i = Object(t.detect)(),
      r = i && i.name,
      o = i && i.version,
      l = (i && i.os, "chrome" === r),
      s = "firefox" === r,
      c = "edge-chromium" === r || "edge" === r;
  },
  function (e, n, a) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var t = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
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
        for (var n = {}, a = 0; a < 10; a++) n["_" + String.fromCharCode(a)] = a;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(n)
            .map(function (e) {
              return n[e];
            })
            .join("")
        )
          return !1;
        var t = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            t[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, t)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, n) {
          for (var a, l, s = o(e), c = 1; c < arguments.length; c++) {
            for (var u in (a = Object(arguments[c]))) i.call(a, u) && (s[u] = a[u]);
            if (t) {
              l = t(a);
              for (var d = 0; d < l.length; d++) r.call(a, l[d]) && (s[l[d]] = a[l[d]]);
            }
          }
          return s;
        };
  },
  function (e, n, a) {
    "use strict";
    n.a = class {
      constructor() {
        this.callbacks = [];
      }
      add(e) {
        if ("function" != typeof e) return !1;
        this.callbacks.push(e);
        return { detach: this.detach.bind(this, this.callbacks.length - 1) };
      }
      dispatch(e) {
        for (const n in this.callbacks)
          try {
            this.callbacks[n](e);
          } catch (e) {}
        return !0;
      }
      detach(e) {
        return this.callbacks.splice(e, 1), !0;
      }
    };
  },
  function (e, n, a) {
    "use strict";
    n.a = class {
      constructor() {
        (window.log = () => {}),
          (window.debug = () => {}),
          (window.error = () => {}),
          sdk.config.debug && ((window.log = console.log), (window.debug = console.debug), (window.error = console.error));
      }
    };
  },
  function (e, n, a) {
    "use strict";
    a(42);
    var t = a(1),
      i = a(0);
    class r extends t.Component {
      constructor(e) {
        super(e),
          (this.state = {
            type: e.type ? e.type : "text",
            theme: e.theme ? e.theme : "default",
            value: e.value ? e.value : "",
            style: e.style ? e.style : void 0,
            label: !!e.label && e.label,
            notValid: !!e.notValid && e.notValid,
            disabled: !!e.disabled && e.disabled,
            className: !!e.className && e.className,
            message: !!e.message && e.message
          }),
          (this.callbacs = {}),
          (this.callbacs.onBlur = e.onBlur ? e.onBlur : () => {}),
          (this.callbacs.onFocus = e.onFocus ? e.onFocus : () => {}),
          (this.callbacs.onEnter = e.onEnter ? e.onEnter : () => {}),
          (this.callbacs.onChange = e.onChange ? e.onChange : () => {}),
          (this.children = e.children);
      }
      componentWillReceiveProps(e) {
        this.setState({
          type: e.type ? e.type : "text",
          theme: e.theme ? e.theme : "default",
          style: e.style ? e.style : void 0,
          value: e.value ? e.value : "",
          label: !!e.label && e.label,
          notValid: !!e.notValid && e.notValid,
          disabled: !!e.disabled && e.disabled,
          className: !!e.className && e.className,
          message: !!e.message && e.message
        }),
          (this.callbacs.onBlur = e.onBlur ? e.onBlur : () => {}),
          (this.callbacs.onFocus = e.onFocus ? e.onFocus : () => {}),
          (this.callbacs.onEnter = e.onEnter ? e.onEnter : () => {}),
          (this.callbacs.onChange = e.onChange ? e.onChange : () => {}),
          (this.children = e.children);
      }
      onBlur() {
        const e = this.state;
        (e.focus = !1), this.callbacs.onBlur(), this.setState(e);
      }
      onFocus() {
        const e = this.state;
        (e.focus = !0), this.callbacs.onFocus(), this.setState(e);
      }
      onChange(e) {
        const n = this.state;
        (n.value = e.target.value), this.callbacs.onChange(n.value), this.setState(n);
      }
      onEnter(e) {
        "Enter" !== e.key || this.state.disabled || this.callbacs.onEnter();
      }
      render() {
        return Object(i.jsxs)("div", {
          style: this.state.style,
          className: `input ${this.state.theme}${this.state.className ? " " + this.state.className : ""}${
            this.state.notValid ? " notValid" : ""
          }${this.state.disabled ? " disabled" : ""}${this.state.focus ? " focus" : ""}${"" !== this.state.value ? " notEmpty" : ""}`,
          children: [
            this.state.label &&
              Object(i.jsx)("div", {
                className: "label" + (this.state.focus || "" !== this.state.value ? " hidden" : ""),
                children: this.state.label
              }),
            Object(i.jsx)("input", {
              type: this.state.type,
              value: this.state.value,
              onBlur: this.onBlur.bind(this),
              onFocus: this.onFocus.bind(this),
              onChange: this.onChange.bind(this),
              onKeyPress: this.onEnter.bind(this),
              disabled: this.state.disabled ? "disabled" : ""
            }),
            this.state.message && Object(i.jsx)("div", { className: "inputMessage", children: this.state.message }),
            this.children
          ]
        });
      }
    }
    n.a = r;
  },
  function (e, n) {
    window.chrome ? window.browser || (window.browser = window.chrome) : (window.chrome = window.browser ? window.browser : {});
  },
  function (e, n, a) {
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
      (e.exports = a(17));
  },
  ,
  function (e, n) {
    var a;
    a = (function () {
      return this;
    })();
    try {
      a = a || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (a = window);
    }
    e.exports = a;
  },
  ,
  function (e, n, a) {
    var t = a(26),
      i = a(38),
      r = a(39),
      o = t ? t.toStringTag : void 0;
    e.exports = function (e) {
      return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : o && o in Object(e) ? i(e) : r(e);
    };
  },
  function (e, n) {
    e.exports = function (e) {
      return null != e && "object" == typeof e;
    };
  },
  function (e, n, a) {
    "use strict";
    /** @license React v17.0.2
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var t = a(1),
      i = a(6),
      r = a(19);
    function o(e) {
      for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!t) throw Error(o(227));
    var l = new Set(),
      s = {};
    function c(e, n) {
      u(e, n), u(e + "Capture", n);
    }
    function u(e, n) {
      for (s[e] = n, e = 0; e < n.length; e++) l.add(n[e]);
    }
    var d = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
      p =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      h = Object.prototype.hasOwnProperty,
      g = {},
      f = {};
    function m(e, n, a, t, i, r, o) {
      (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
        (this.attributeName = t),
        (this.attributeNamespace = i),
        (this.mustUseProperty = a),
        (this.propertyName = e),
        (this.type = n),
        (this.sanitizeURL = r),
        (this.removeEmptyString = o);
    }
    var b = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        b[e] = new m(e, 0, !1, e, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
      ].forEach(function (e) {
        var n = e[0];
        b[n] = new m(n, 1, !1, e[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
        b[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
        b[e] = new m(e, 2, !1, e, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          b[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        b[e] = new m(e, 3, !0, e, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        b[e] = new m(e, 4, !1, e, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        b[e] = new m(e, 6, !1, e, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        b[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var y = /[\-:]([a-z])/g;
    function v(e) {
      return e[1].toUpperCase();
    }
    function C(e, n, a, t) {
      var i = b.hasOwnProperty(n) ? b[n] : null;
      (null !== i ? 0 === i.type : !t && 2 < n.length && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1])) ||
        ((function (e, n, a, t) {
          if (
            null == n ||
            (function (e, n, a, t) {
              if (null !== a && 0 === a.type) return !1;
              switch (typeof n) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return !t && (null !== a ? !a.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                  return !1;
              }
            })(e, n, a, t)
          )
            return !0;
          if (t) return !1;
          if (null !== a)
            switch (a.type) {
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
        })(n, a, i, t) && (a = null),
        t || null === i
          ? (function (e) {
              return !!h.call(f, e) || (!h.call(g, e) && (p.test(e) ? (f[e] = !0) : ((g[e] = !0), !1)));
            })(n) && (null === a ? e.removeAttribute(n) : e.setAttribute(n, "" + a))
          : i.mustUseProperty
          ? (e[i.propertyName] = null === a ? 3 !== i.type && "" : a)
          : ((n = i.attributeName),
            (t = i.attributeNamespace),
            null === a
              ? e.removeAttribute(n)
              : ((a = 3 === (i = i.type) || (4 === i && !0 === a) ? "" : "" + a), t ? e.setAttributeNS(t, n, a) : e.setAttribute(n, a))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(y, v);
        b[n] = new m(n, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
        var n = e.replace(y, v);
        b[n] = new m(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var n = e.replace(y, v);
        b[n] = new m(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        b[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (b.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        b[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var k = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      w = 60103,
      x = 60106,
      S = 60107,
      j = 60108,
      N = 60114,
      O = 60109,
      E = 60110,
      M = 60112,
      A = 60113,
      P = 60120,
      B = 60115,
      T = 60116,
      R = 60121,
      L = 60128,
      _ = 60129,
      I = 60130,
      D = 60131;
    if ("function" == typeof Symbol && Symbol.for) {
      var U = Symbol.for;
      (w = U("react.element")),
        (x = U("react.portal")),
        (S = U("react.fragment")),
        (j = U("react.strict_mode")),
        (N = U("react.profiler")),
        (O = U("react.provider")),
        (E = U("react.context")),
        (M = U("react.forward_ref")),
        (A = U("react.suspense")),
        (P = U("react.suspense_list")),
        (B = U("react.memo")),
        (T = U("react.lazy")),
        (R = U("react.block")),
        U("react.scope"),
        (L = U("react.opaque.id")),
        (_ = U("react.debug_trace_mode")),
        (I = U("react.offscreen")),
        (D = U("react.legacy_hidden"));
    }
    var z,
      F = "function" == typeof Symbol && Symbol.iterator;
    function G(e) {
      return null === e || "object" != typeof e ? null : "function" == typeof (e = (F && e[F]) || e["@@iterator"]) ? e : null;
    }
    function W(e) {
      if (void 0 === z)
        try {
          throw Error();
        } catch (e) {
          var n = e.stack.trim().match(/\n( *(at )?)/);
          z = (n && n[1]) || "";
        }
      return "\n" + z + e;
    }
    var K = !1;
    function V(e, n) {
      if (!e || K) return "";
      K = !0;
      var a = Error.prepareStackTrace;
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
              var t = e;
            }
            Reflect.construct(e, [], n);
          } else {
            try {
              n.call();
            } catch (e) {
              t = e;
            }
            e.call(n.prototype);
          }
        else {
          try {
            throw Error();
          } catch (e) {
            t = e;
          }
          e();
        }
      } catch (e) {
        if (e && t && "string" == typeof e.stack) {
          for (
            var i = e.stack.split("\n"), r = t.stack.split("\n"), o = i.length - 1, l = r.length - 1;
            1 <= o && 0 <= l && i[o] !== r[l];

          )
            l--;
          for (; 1 <= o && 0 <= l; o--, l--)
            if (i[o] !== r[l]) {
              if (1 !== o || 1 !== l)
                do {
                  if ((o--, 0 > --l || i[o] !== r[l])) return "\n" + i[o].replace(" at new ", " at ");
                } while (1 <= o && 0 <= l);
              break;
            }
        }
      } finally {
        (K = !1), (Error.prepareStackTrace = a);
      }
      return (e = e ? e.displayName || e.name : "") ? W(e) : "";
    }
    function H(e) {
      switch (e.tag) {
        case 5:
          return W(e.type);
        case 16:
          return W("Lazy");
        case 13:
          return W("Suspense");
        case 19:
          return W("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = V(e.type, !1));
        case 11:
          return (e = V(e.type.render, !1));
        case 22:
          return (e = V(e.type._render, !1));
        case 1:
          return (e = V(e.type, !0));
        default:
          return "";
      }
    }
    function $(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case S:
          return "Fragment";
        case x:
          return "Portal";
        case N:
          return "Profiler";
        case j:
          return "StrictMode";
        case A:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case E:
            return (e.displayName || "Context") + ".Consumer";
          case O:
            return (e._context.displayName || "Context") + ".Provider";
          case M:
            var n = e.render;
            return (n = n.displayName || n.name || ""), e.displayName || ("" !== n ? "ForwardRef(" + n + ")" : "ForwardRef");
          case B:
            return $(e.type);
          case R:
            return $(e._render);
          case T:
            (n = e._payload), (e = e._init);
            try {
              return $(e(n));
            } catch (e) {}
        }
      return null;
    }
    function Y(e) {
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
    function Z(e) {
      var n = e.type;
      return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n);
    }
    function Q(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var n = Z(e) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
            t = "" + e[n];
          if (!e.hasOwnProperty(n) && void 0 !== a && "function" == typeof a.get && "function" == typeof a.set) {
            var i = a.get,
              r = a.set;
            return (
              Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                  return i.call(this);
                },
                set: function (e) {
                  (t = "" + e), r.call(this, e);
                }
              }),
              Object.defineProperty(e, n, { enumerable: a.enumerable }),
              {
                getValue: function () {
                  return t;
                },
                setValue: function (e) {
                  t = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[n];
                }
              }
            );
          }
        })(e));
    }
    function X(e) {
      if (!e) return !1;
      var n = e._valueTracker;
      if (!n) return !0;
      var a = n.getValue(),
        t = "";
      return e && (t = Z(e) ? (e.checked ? "true" : "false") : e.value), (e = t) !== a && (n.setValue(e), !0);
    }
    function q(e) {
      if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
      try {
        return e.activeElement || e.body;
      } catch (n) {
        return e.body;
      }
    }
    function J(e, n) {
      var a = n.checked;
      return i({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != a ? a : e._wrapperState.initialChecked
      });
    }
    function ee(e, n) {
      var a = null == n.defaultValue ? "" : n.defaultValue,
        t = null != n.checked ? n.checked : n.defaultChecked;
      (a = Y(null != n.value ? n.value : a)),
        (e._wrapperState = {
          initialChecked: t,
          initialValue: a,
          controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value
        });
    }
    function ne(e, n) {
      null != (n = n.checked) && C(e, "checked", n, !1);
    }
    function ae(e, n) {
      ne(e, n);
      var a = Y(n.value),
        t = n.type;
      if (null != a)
        "number" === t ? ((0 === a && "" === e.value) || e.value != a) && (e.value = "" + a) : e.value !== "" + a && (e.value = "" + a);
      else if ("submit" === t || "reset" === t) return void e.removeAttribute("value");
      n.hasOwnProperty("value") ? ie(e, n.type, a) : n.hasOwnProperty("defaultValue") && ie(e, n.type, Y(n.defaultValue)),
        null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked);
    }
    function te(e, n, a) {
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var t = n.type;
        if (!(("submit" !== t && "reset" !== t) || (void 0 !== n.value && null !== n.value))) return;
        (n = "" + e._wrapperState.initialValue), a || n === e.value || (e.value = n), (e.defaultValue = n);
      }
      "" !== (a = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== a && (e.name = a);
    }
    function ie(e, n, a) {
      ("number" === n && q(e.ownerDocument) === e) ||
        (null == a ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + a && (e.defaultValue = "" + a));
    }
    function re(e, n) {
      return (
        (e = i({ children: void 0 }, n)),
        (n = (function (e) {
          var n = "";
          return (
            t.Children.forEach(e, function (e) {
              null != e && (n += e);
            }),
            n
          );
        })(n.children)) && (e.children = n),
        e
      );
    }
    function oe(e, n, a, t) {
      if (((e = e.options), n)) {
        n = {};
        for (var i = 0; i < a.length; i++) n["$" + a[i]] = !0;
        for (a = 0; a < e.length; a++)
          (i = n.hasOwnProperty("$" + e[a].value)), e[a].selected !== i && (e[a].selected = i), i && t && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Y(a), n = null, i = 0; i < e.length; i++) {
          if (e[i].value === a) return (e[i].selected = !0), void (t && (e[i].defaultSelected = !0));
          null !== n || e[i].disabled || (n = e[i]);
        }
        null !== n && (n.selected = !0);
      }
    }
    function le(e, n) {
      if (null != n.dangerouslySetInnerHTML) throw Error(o(91));
      return i({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
    }
    function se(e, n) {
      var a = n.value;
      if (null == a) {
        if (((a = n.children), (n = n.defaultValue), null != a)) {
          if (null != n) throw Error(o(92));
          if (Array.isArray(a)) {
            if (!(1 >= a.length)) throw Error(o(93));
            a = a[0];
          }
          n = a;
        }
        null == n && (n = ""), (a = n);
      }
      e._wrapperState = { initialValue: Y(a) };
    }
    function ce(e, n) {
      var a = Y(n.value),
        t = Y(n.defaultValue);
      null != a && ((a = "" + a) !== e.value && (e.value = a), null == n.defaultValue && e.defaultValue !== a && (e.defaultValue = a)),
        null != t && (e.defaultValue = "" + t);
    }
    function ue(e) {
      var n = e.textContent;
      n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n);
    }
    var de = "http://www.w3.org/1999/xhtml",
      pe = "http://www.w3.org/2000/svg";
    function he(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function ge(e, n) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? he(n)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var fe,
      me = (function (e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (n, a, t, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(n, a);
              });
            }
          : e;
      })(function (e, n) {
        if (e.namespaceURI !== pe || "innerHTML" in e) e.innerHTML = n;
        else {
          for (
            (fe = fe || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = fe.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; n.firstChild; ) e.appendChild(n.firstChild);
        }
      });
    function be(e, n) {
      if (n) {
        var a = e.firstChild;
        if (a && a === e.lastChild && 3 === a.nodeType) return void (a.nodeValue = n);
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
      ve = ["Webkit", "ms", "Moz", "O"];
    function Ce(e, n, a) {
      return null == n || "boolean" == typeof n || "" === n
        ? ""
        : a || "number" != typeof n || 0 === n || (ye.hasOwnProperty(e) && ye[e])
        ? ("" + n).trim()
        : n + "px";
    }
    function ke(e, n) {
      for (var a in ((e = e.style), n))
        if (n.hasOwnProperty(a)) {
          var t = 0 === a.indexOf("--"),
            i = Ce(a, n[a], t);
          "float" === a && (a = "cssFloat"), t ? e.setProperty(a, i) : (e[a] = i);
        }
    }
    Object.keys(ye).forEach(function (e) {
      ve.forEach(function (n) {
        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (ye[n] = ye[e]);
      });
    });
    var we = i(
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
        if (we[e] && (null != n.children || null != n.dangerouslySetInnerHTML)) throw Error(o(137, e));
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
    function je(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var Ne = null,
      Oe = null,
      Ee = null;
    function Me(e) {
      if ((e = qt(e))) {
        if ("function" != typeof Ne) throw Error(o(280));
        var n = e.stateNode;
        n && ((n = ei(n)), Ne(e.stateNode, e.type, n));
      }
    }
    function Ae(e) {
      Oe ? (Ee ? Ee.push(e) : (Ee = [e])) : (Oe = e);
    }
    function Pe() {
      if (Oe) {
        var e = Oe,
          n = Ee;
        if (((Ee = Oe = null), Me(e), n)) for (e = 0; e < n.length; e++) Me(n[e]);
      }
    }
    function Be(e, n) {
      return e(n);
    }
    function Te(e, n, a, t, i) {
      return e(n, a, t, i);
    }
    function Re() {}
    var Le = Be,
      _e = !1,
      Ie = !1;
    function De() {
      (null === Oe && null === Ee) || (Re(), Pe());
    }
    function Ue(e, n) {
      var a = e.stateNode;
      if (null === a) return null;
      var t = ei(a);
      if (null === t) return null;
      a = t[n];
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
          (t = !t.disabled) || (t = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !t);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && "function" != typeof a) throw Error(o(231, n, typeof a));
      return a;
    }
    var ze = !1;
    if (d)
      try {
        var Fe = {};
        Object.defineProperty(Fe, "passive", {
          get: function () {
            ze = !0;
          }
        }),
          window.addEventListener("test", Fe, Fe),
          window.removeEventListener("test", Fe, Fe);
      } catch (e) {
        ze = !1;
      }
    function Ge(e, n, a, t, i, r, o, l, s) {
      var c = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(a, c);
      } catch (e) {
        this.onError(e);
      }
    }
    var We = !1,
      Ke = null,
      Ve = !1,
      He = null,
      $e = {
        onError: function (e) {
          (We = !0), (Ke = e);
        }
      };
    function Ye(e, n, a, t, i, r, o, l, s) {
      (We = !1), (Ke = null), Ge.apply($e, arguments);
    }
    function Ze(e) {
      var n = e,
        a = e;
      if (e.alternate) for (; n.return; ) n = n.return;
      else {
        e = n;
        do {
          0 != (1026 & (n = e).flags) && (a = n.return), (e = n.return);
        } while (e);
      }
      return 3 === n.tag ? a : null;
    }
    function Qe(e) {
      if (13 === e.tag) {
        var n = e.memoizedState;
        if ((null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n)) return n.dehydrated;
      }
      return null;
    }
    function Xe(e) {
      if (Ze(e) !== e) throw Error(o(188));
    }
    function qe(e) {
      if (
        !(e = (function (e) {
          var n = e.alternate;
          if (!n) {
            if (null === (n = Ze(e))) throw Error(o(188));
            return n !== e ? null : e;
          }
          for (var a = e, t = n; ; ) {
            var i = a.return;
            if (null === i) break;
            var r = i.alternate;
            if (null === r) {
              if (null !== (t = i.return)) {
                a = t;
                continue;
              }
              break;
            }
            if (i.child === r.child) {
              for (r = i.child; r; ) {
                if (r === a) return Xe(i), e;
                if (r === t) return Xe(i), n;
                r = r.sibling;
              }
              throw Error(o(188));
            }
            if (a.return !== t.return) (a = i), (t = r);
            else {
              for (var l = !1, s = i.child; s; ) {
                if (s === a) {
                  (l = !0), (a = i), (t = r);
                  break;
                }
                if (s === t) {
                  (l = !0), (t = i), (a = r);
                  break;
                }
                s = s.sibling;
              }
              if (!l) {
                for (s = r.child; s; ) {
                  if (s === a) {
                    (l = !0), (a = r), (t = i);
                    break;
                  }
                  if (s === t) {
                    (l = !0), (t = r), (a = i);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) throw Error(o(189));
              }
            }
            if (a.alternate !== t) throw Error(o(190));
          }
          if (3 !== a.tag) throw Error(o(188));
          return a.stateNode.current === a ? e : n;
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
      for (var a = e.alternate; null !== n; ) {
        if (n === e || n === a) return !0;
        n = n.return;
      }
      return !1;
    }
    var en,
      nn,
      an,
      tn,
      rn = !1,
      on = [],
      ln = null,
      sn = null,
      cn = null,
      un = new Map(),
      dn = new Map(),
      pn = [],
      hn =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function gn(e, n, a, t, i) {
      return { blockedOn: e, domEventName: n, eventSystemFlags: 16 | a, nativeEvent: i, targetContainers: [t] };
    }
    function fn(e, n) {
      switch (e) {
        case "focusin":
        case "focusout":
          ln = null;
          break;
        case "dragenter":
        case "dragleave":
          sn = null;
          break;
        case "mouseover":
        case "mouseout":
          cn = null;
          break;
        case "pointerover":
        case "pointerout":
          un.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          dn.delete(n.pointerId);
      }
    }
    function mn(e, n, a, t, i, r) {
      return null === e || e.nativeEvent !== r
        ? ((e = gn(n, a, t, i, r)), null !== n && null !== (n = qt(n)) && nn(n), e)
        : ((e.eventSystemFlags |= t), (n = e.targetContainers), null !== i && -1 === n.indexOf(i) && n.push(i), e);
    }
    function bn(e) {
      var n = Xt(e.target);
      if (null !== n) {
        var a = Ze(n);
        if (null !== a)
          if (13 === (n = a.tag)) {
            if (null !== (n = Qe(a)))
              return (
                (e.blockedOn = n),
                void tn(e.lanePriority, function () {
                  r.unstable_runWithPriority(e.priority, function () {
                    an(a);
                  });
                })
              );
          } else if (3 === n && a.stateNode.hydrate) return void (e.blockedOn = 3 === a.tag ? a.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function yn(e) {
      if (null !== e.blockedOn) return !1;
      for (var n = e.targetContainers; 0 < n.length; ) {
        var a = Jn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (null !== a) return null !== (n = qt(a)) && nn(n), (e.blockedOn = a), !1;
        n.shift();
      }
      return !0;
    }
    function vn(e, n, a) {
      yn(e) && a.delete(n);
    }
    function Cn() {
      for (rn = !1; 0 < on.length; ) {
        var e = on[0];
        if (null !== e.blockedOn) {
          null !== (e = qt(e.blockedOn)) && en(e);
          break;
        }
        for (var n = e.targetContainers; 0 < n.length; ) {
          var a = Jn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
          if (null !== a) {
            e.blockedOn = a;
            break;
          }
          n.shift();
        }
        null === e.blockedOn && on.shift();
      }
      null !== ln && yn(ln) && (ln = null),
        null !== sn && yn(sn) && (sn = null),
        null !== cn && yn(cn) && (cn = null),
        un.forEach(vn),
        dn.forEach(vn);
    }
    function kn(e, n) {
      e.blockedOn === n && ((e.blockedOn = null), rn || ((rn = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Cn)));
    }
    function wn(e) {
      function n(n) {
        return kn(n, e);
      }
      if (0 < on.length) {
        kn(on[0], e);
        for (var a = 1; a < on.length; a++) {
          var t = on[a];
          t.blockedOn === e && (t.blockedOn = null);
        }
      }
      for (
        null !== ln && kn(ln, e), null !== sn && kn(sn, e), null !== cn && kn(cn, e), un.forEach(n), dn.forEach(n), a = 0;
        a < pn.length;
        a++
      )
        (t = pn[a]).blockedOn === e && (t.blockedOn = null);
      for (; 0 < pn.length && null === (a = pn[0]).blockedOn; ) bn(a), null === a.blockedOn && pn.shift();
    }
    function xn(e, n) {
      var a = {};
      return (a[e.toLowerCase()] = n.toLowerCase()), (a["Webkit" + e] = "webkit" + n), (a["Moz" + e] = "moz" + n), a;
    }
    var Sn = {
        animationend: xn("Animation", "AnimationEnd"),
        animationiteration: xn("Animation", "AnimationIteration"),
        animationstart: xn("Animation", "AnimationStart"),
        transitionend: xn("Transition", "TransitionEnd")
      },
      jn = {},
      Nn = {};
    function On(e) {
      if (jn[e]) return jn[e];
      if (!Sn[e]) return e;
      var n,
        a = Sn[e];
      for (n in a) if (a.hasOwnProperty(n) && n in Nn) return (jn[e] = a[n]);
      return e;
    }
    d &&
      ((Nn = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation),
      "TransitionEvent" in window || delete Sn.transitionend.transition);
    var En = On("animationend"),
      Mn = On("animationiteration"),
      An = On("animationstart"),
      Pn = On("transitionend"),
      Bn = new Map(),
      Tn = new Map(),
      Rn = [
        "abort",
        "abort",
        En,
        "animationEnd",
        Mn,
        "animationIteration",
        An,
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
        Pn,
        "transitionEnd",
        "waiting",
        "waiting"
      ];
    function Ln(e, n) {
      for (var a = 0; a < e.length; a += 2) {
        var t = e[a],
          i = e[a + 1];
        (i = "on" + (i[0].toUpperCase() + i.slice(1))), Tn.set(t, n), Bn.set(t, i), c(i, [t]);
      }
    }
    (0, r.unstable_now)();
    var _n = 8;
    function In(e) {
      if (0 != (1 & e)) return (_n = 15), 1;
      if (0 != (2 & e)) return (_n = 14), 2;
      if (0 != (4 & e)) return (_n = 13), 4;
      var n = 24 & e;
      return 0 !== n
        ? ((_n = 12), n)
        : 0 != (32 & e)
        ? ((_n = 11), 32)
        : 0 !== (n = 192 & e)
        ? ((_n = 10), n)
        : 0 != (256 & e)
        ? ((_n = 9), 256)
        : 0 !== (n = 3584 & e)
        ? ((_n = 8), n)
        : 0 != (4096 & e)
        ? ((_n = 7), 4096)
        : 0 !== (n = 4186112 & e)
        ? ((_n = 6), n)
        : 0 !== (n = 62914560 & e)
        ? ((_n = 5), n)
        : 67108864 & e
        ? ((_n = 4), 67108864)
        : 0 != (134217728 & e)
        ? ((_n = 3), 134217728)
        : 0 !== (n = 805306368 & e)
        ? ((_n = 2), n)
        : 0 != (1073741824 & e)
        ? ((_n = 1), 1073741824)
        : ((_n = 8), e);
    }
    function Dn(e, n) {
      var a = e.pendingLanes;
      if (0 === a) return (_n = 0);
      var t = 0,
        i = 0,
        r = e.expiredLanes,
        o = e.suspendedLanes,
        l = e.pingedLanes;
      if (0 !== r) (t = r), (i = _n = 15);
      else if (0 !== (r = 134217727 & a)) {
        var s = r & ~o;
        0 !== s ? ((t = In(s)), (i = _n)) : 0 !== (l &= r) && ((t = In(l)), (i = _n));
      } else 0 !== (r = a & ~o) ? ((t = In(r)), (i = _n)) : 0 !== l && ((t = In(l)), (i = _n));
      if (0 === t) return 0;
      if (((t = a & (((0 > (t = 31 - Kn(t)) ? 0 : 1 << t) << 1) - 1)), 0 !== n && n !== t && 0 == (n & o))) {
        if ((In(n), i <= _n)) return n;
        _n = i;
      }
      if (0 !== (n = e.entangledLanes)) for (e = e.entanglements, n &= t; 0 < n; ) (i = 1 << (a = 31 - Kn(n))), (t |= e[a]), (n &= ~i);
      return t;
    }
    function Un(e) {
      return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
    }
    function zn(e, n) {
      switch (e) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return 0 === (e = Fn(24 & ~n)) ? zn(10, n) : e;
        case 10:
          return 0 === (e = Fn(192 & ~n)) ? zn(8, n) : e;
        case 8:
          return 0 === (e = Fn(3584 & ~n)) && 0 === (e = Fn(4186112 & ~n)) && (e = 512), e;
        case 2:
          return 0 === (n = Fn(805306368 & ~n)) && (n = 268435456), n;
      }
      throw Error(o(358, e));
    }
    function Fn(e) {
      return e & -e;
    }
    function Gn(e) {
      for (var n = [], a = 0; 31 > a; a++) n.push(e);
      return n;
    }
    function Wn(e, n, a) {
      e.pendingLanes |= n;
      var t = n - 1;
      (e.suspendedLanes &= t), (e.pingedLanes &= t), ((e = e.eventTimes)[(n = 31 - Kn(n))] = a);
    }
    var Kn = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 === e ? 32 : (31 - ((Vn(e) / Hn) | 0)) | 0;
          },
      Vn = Math.log,
      Hn = Math.LN2;
    var $n = r.unstable_UserBlockingPriority,
      Yn = r.unstable_runWithPriority,
      Zn = !0;
    function Qn(e, n, a, t) {
      _e || Re();
      var i = qn,
        r = _e;
      _e = !0;
      try {
        Te(i, e, n, a, t);
      } finally {
        (_e = r) || De();
      }
    }
    function Xn(e, n, a, t) {
      Yn($n, qn.bind(null, e, n, a, t));
    }
    function qn(e, n, a, t) {
      var i;
      if (Zn)
        if ((i = 0 == (4 & n)) && 0 < on.length && -1 < hn.indexOf(e)) (e = gn(null, e, n, a, t)), on.push(e);
        else {
          var r = Jn(e, n, a, t);
          if (null === r) i && fn(e, t);
          else {
            if (i) {
              if (-1 < hn.indexOf(e)) return (e = gn(r, e, n, a, t)), void on.push(e);
              if (
                (function (e, n, a, t, i) {
                  switch (n) {
                    case "focusin":
                      return (ln = mn(ln, e, n, a, t, i)), !0;
                    case "dragenter":
                      return (sn = mn(sn, e, n, a, t, i)), !0;
                    case "mouseover":
                      return (cn = mn(cn, e, n, a, t, i)), !0;
                    case "pointerover":
                      var r = i.pointerId;
                      return un.set(r, mn(un.get(r) || null, e, n, a, t, i)), !0;
                    case "gotpointercapture":
                      return (r = i.pointerId), dn.set(r, mn(dn.get(r) || null, e, n, a, t, i)), !0;
                  }
                  return !1;
                })(r, e, n, a, t)
              )
                return;
              fn(e, t);
            }
            At(e, n, t, null, a);
          }
        }
    }
    function Jn(e, n, a, t) {
      var i = je(t);
      if (null !== (i = Xt(i))) {
        var r = Ze(i);
        if (null === r) i = null;
        else {
          var o = r.tag;
          if (13 === o) {
            if (null !== (i = Qe(r))) return i;
            i = null;
          } else if (3 === o) {
            if (r.stateNode.hydrate) return 3 === r.tag ? r.stateNode.containerInfo : null;
            i = null;
          } else r !== i && (i = null);
        }
      }
      return At(e, n, t, i, a), null;
    }
    var ea = null,
      na = null,
      aa = null;
    function ta() {
      if (aa) return aa;
      var e,
        n,
        a = na,
        t = a.length,
        i = "value" in ea ? ea.value : ea.textContent,
        r = i.length;
      for (e = 0; e < t && a[e] === i[e]; e++);
      var o = t - e;
      for (n = 1; n <= o && a[t - n] === i[r - n]; n++);
      return (aa = i.slice(e, 1 < n ? 1 - n : void 0));
    }
    function ia(e) {
      var n = e.keyCode;
      return "charCode" in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : (e = n), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
    }
    function ra() {
      return !0;
    }
    function oa() {
      return !1;
    }
    function la(e) {
      function n(n, a, t, i, r) {
        for (var o in ((this._reactName = n),
        (this._targetInst = t),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = r),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
        return (
          (this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? ra : oa),
          (this.isPropagationStopped = oa),
          this
        );
      }
      return (
        i(n.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = ra));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = ra));
          },
          persist: function () {},
          isPersistent: ra
        }),
        n
      );
    }
    var sa,
      ca,
      ua,
      da = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      },
      pa = la(da),
      ha = i({}, da, { view: 0, detail: 0 }),
      ga = la(ha),
      fa = i({}, ha, {
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
        getModifierState: Na,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== ua &&
                (ua && "mousemove" === e.type ? ((sa = e.screenX - ua.screenX), (ca = e.screenY - ua.screenY)) : (ca = sa = 0), (ua = e)),
              sa);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : ca;
        }
      }),
      ma = la(fa),
      ba = la(i({}, fa, { dataTransfer: 0 })),
      ya = la(i({}, ha, { relatedTarget: 0 })),
      va = la(i({}, da, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Ca = la(
        i({}, da, {
          clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
          }
        })
      ),
      ka = la(i({}, da, { data: 0 })),
      wa = {
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
      xa = {
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
      Sa = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function ja(e) {
      var n = this.nativeEvent;
      return n.getModifierState ? n.getModifierState(e) : !!(e = Sa[e]) && !!n[e];
    }
    function Na() {
      return ja;
    }
    var Oa = la(
        i({}, ha, {
          key: function (e) {
            if (e.key) {
              var n = wa[e.key] || e.key;
              if ("Unidentified" !== n) return n;
            }
            return "keypress" === e.type
              ? 13 === (e = ia(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? xa[e.keyCode] || "Unidentified"
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
          getModifierState: Na,
          charCode: function (e) {
            return "keypress" === e.type ? ia(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type ? ia(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          }
        })
      ),
      Ea = la(
        i({}, fa, {
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
      Ma = la(
        i({}, ha, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Na })
      ),
      Aa = la(i({}, da, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Pa = la(
        i({}, fa, {
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
      Ba = [9, 13, 27, 32],
      Ta = d && "CompositionEvent" in window,
      Ra = null;
    d && "documentMode" in document && (Ra = document.documentMode);
    var La = d && "TextEvent" in window && !Ra,
      _a = d && (!Ta || (Ra && 8 < Ra && 11 >= Ra)),
      Ia = String.fromCharCode(32),
      Da = !1;
    function Ua(e, n) {
      switch (e) {
        case "keyup":
          return -1 !== Ba.indexOf(n.keyCode);
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
    function za(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Fa = !1;
    var Ga = {
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
    function Wa(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === n ? !!Ga[e.type] : "textarea" === n;
    }
    function Ka(e, n, a, t) {
      Ae(t), 0 < (n = Bt(n, "onChange")).length && ((a = new pa("onChange", "change", null, a, t)), e.push({ event: a, listeners: n }));
    }
    var Va = null,
      Ha = null;
    function $a(e) {
      St(e, 0);
    }
    function Ya(e) {
      if (X(Jt(e))) return e;
    }
    function Za(e, n) {
      if ("change" === e) return n;
    }
    var Qa = !1;
    if (d) {
      var Xa;
      if (d) {
        var qa = "oninput" in document;
        if (!qa) {
          var Ja = document.createElement("div");
          Ja.setAttribute("oninput", "return;"), (qa = "function" == typeof Ja.oninput);
        }
        Xa = qa;
      } else Xa = !1;
      Qa = Xa && (!document.documentMode || 9 < document.documentMode);
    }
    function et() {
      Va && (Va.detachEvent("onpropertychange", nt), (Ha = Va = null));
    }
    function nt(e) {
      if ("value" === e.propertyName && Ya(Ha)) {
        var n = [];
        if ((Ka(n, Ha, e, je(e)), (e = $a), _e)) e(n);
        else {
          _e = !0;
          try {
            Be(e, n);
          } finally {
            (_e = !1), De();
          }
        }
      }
    }
    function at(e, n, a) {
      "focusin" === e ? (et(), (Ha = a), (Va = n).attachEvent("onpropertychange", nt)) : "focusout" === e && et();
    }
    function tt(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Ya(Ha);
    }
    function it(e, n) {
      if ("click" === e) return Ya(n);
    }
    function rt(e, n) {
      if ("input" === e || "change" === e) return Ya(n);
    }
    var ot =
        "function" == typeof Object.is
          ? Object.is
          : function (e, n) {
              return (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n);
            },
      lt = Object.prototype.hasOwnProperty;
    function st(e, n) {
      if (ot(e, n)) return !0;
      if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
      var a = Object.keys(e),
        t = Object.keys(n);
      if (a.length !== t.length) return !1;
      for (t = 0; t < a.length; t++) if (!lt.call(n, a[t]) || !ot(e[a[t]], n[a[t]])) return !1;
      return !0;
    }
    function ct(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function ut(e, n) {
      var a,
        t = ct(e);
      for (e = 0; t; ) {
        if (3 === t.nodeType) {
          if (((a = e + t.textContent.length), e <= n && a >= n)) return { node: t, offset: n - e };
          e = a;
        }
        e: {
          for (; t; ) {
            if (t.nextSibling) {
              t = t.nextSibling;
              break e;
            }
            t = t.parentNode;
          }
          t = void 0;
        }
        t = ct(t);
      }
    }
    function dt() {
      for (var e = window, n = q(); n instanceof e.HTMLIFrameElement; ) {
        try {
          var a = "string" == typeof n.contentWindow.location.href;
        } catch (e) {
          a = !1;
        }
        if (!a) break;
        n = q((e = n.contentWindow).document);
      }
      return n;
    }
    function pt(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        n &&
        (("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) ||
          "textarea" === n ||
          "true" === e.contentEditable)
      );
    }
    var ht = d && "documentMode" in document && 11 >= document.documentMode,
      gt = null,
      ft = null,
      mt = null,
      bt = !1;
    function yt(e, n, a) {
      var t = a.window === a ? a.document : 9 === a.nodeType ? a : a.ownerDocument;
      bt ||
        null == gt ||
        gt !== q(t) ||
        ("selectionStart" in (t = gt) && pt(t)
          ? (t = { start: t.selectionStart, end: t.selectionEnd })
          : (t = {
              anchorNode: (t = ((t.ownerDocument && t.ownerDocument.defaultView) || window).getSelection()).anchorNode,
              anchorOffset: t.anchorOffset,
              focusNode: t.focusNode,
              focusOffset: t.focusOffset
            }),
        (mt && st(mt, t)) ||
          ((mt = t),
          0 < (t = Bt(ft, "onSelect")).length &&
            ((n = new pa("onSelect", "select", null, n, a)), e.push({ event: n, listeners: t }), (n.target = gt))));
    }
    Ln(
      "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
        " "
      ),
      0
    ),
      Ln(
        "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
          " "
        ),
        1
      ),
      Ln(Rn, 2);
    for (
      var vt = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Ct = 0;
      Ct < vt.length;
      Ct++
    )
      Tn.set(vt[Ct], 0);
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
    var kt =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      wt = new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));
    function xt(e, n, a) {
      var t = e.type || "unknown-event";
      (e.currentTarget = a),
        (function (e, n, a, t, i, r, l, s, c) {
          if ((Ye.apply(this, arguments), We)) {
            if (!We) throw Error(o(198));
            var u = Ke;
            (We = !1), (Ke = null), Ve || ((Ve = !0), (He = u));
          }
        })(t, n, void 0, e),
        (e.currentTarget = null);
    }
    function St(e, n) {
      n = 0 != (4 & n);
      for (var a = 0; a < e.length; a++) {
        var t = e[a],
          i = t.event;
        t = t.listeners;
        e: {
          var r = void 0;
          if (n)
            for (var o = t.length - 1; 0 <= o; o--) {
              var l = t[o],
                s = l.instance,
                c = l.currentTarget;
              if (((l = l.listener), s !== r && i.isPropagationStopped())) break e;
              xt(i, l, c), (r = s);
            }
          else
            for (o = 0; o < t.length; o++) {
              if (((s = (l = t[o]).instance), (c = l.currentTarget), (l = l.listener), s !== r && i.isPropagationStopped())) break e;
              xt(i, l, c), (r = s);
            }
        }
      }
      if (Ve) throw ((e = He), (Ve = !1), (He = null), e);
    }
    function jt(e, n) {
      var a = ni(n),
        t = e + "__bubble";
      a.has(t) || (Mt(n, e, 2, !1), a.add(t));
    }
    var Nt = "_reactListening" + Math.random().toString(36).slice(2);
    function Ot(e) {
      e[Nt] ||
        ((e[Nt] = !0),
        l.forEach(function (n) {
          wt.has(n) || Et(n, !1, e, null), Et(n, !0, e, null);
        }));
    }
    function Et(e, n, a, t) {
      var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
        r = a;
      if (("selectionchange" === e && 9 !== a.nodeType && (r = a.ownerDocument), null !== t && !n && wt.has(e))) {
        if ("scroll" !== e) return;
        (i |= 2), (r = t);
      }
      var o = ni(r),
        l = e + "__" + (n ? "capture" : "bubble");
      o.has(l) || (n && (i |= 4), Mt(r, e, i, n), o.add(l));
    }
    function Mt(e, n, a, t) {
      var i = Tn.get(n);
      switch (void 0 === i ? 2 : i) {
        case 0:
          i = Qn;
          break;
        case 1:
          i = Xn;
          break;
        default:
          i = qn;
      }
      (a = i.bind(null, n, a, e)),
        (i = void 0),
        !ze || ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) || (i = !0),
        t
          ? void 0 !== i
            ? e.addEventListener(n, a, { capture: !0, passive: i })
            : e.addEventListener(n, a, !0)
          : void 0 !== i
          ? e.addEventListener(n, a, { passive: i })
          : e.addEventListener(n, a, !1);
    }
    function At(e, n, a, t, i) {
      var r = t;
      if (0 == (1 & n) && 0 == (2 & n) && null !== t)
        e: for (;;) {
          if (null === t) return;
          var o = t.tag;
          if (3 === o || 4 === o) {
            var l = t.stateNode.containerInfo;
            if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
            if (4 === o)
              for (o = t.return; null !== o; ) {
                var s = o.tag;
                if ((3 === s || 4 === s) && ((s = o.stateNode.containerInfo) === i || (8 === s.nodeType && s.parentNode === i))) return;
                o = o.return;
              }
            for (; null !== l; ) {
              if (null === (o = Xt(l))) return;
              if (5 === (s = o.tag) || 6 === s) {
                t = r = o;
                continue e;
              }
              l = l.parentNode;
            }
          }
          t = t.return;
        }
      !(function (e, n, a) {
        if (Ie) return e(n, a);
        Ie = !0;
        try {
          Le(e, n, a);
        } finally {
          (Ie = !1), De();
        }
      })(function () {
        var t = r,
          i = je(a),
          o = [];
        e: {
          var l = Bn.get(e);
          if (void 0 !== l) {
            var s = pa,
              c = e;
            switch (e) {
              case "keypress":
                if (0 === ia(a)) break e;
              case "keydown":
              case "keyup":
                s = Oa;
                break;
              case "focusin":
                (c = "focus"), (s = ya);
                break;
              case "focusout":
                (c = "blur"), (s = ya);
                break;
              case "beforeblur":
              case "afterblur":
                s = ya;
                break;
              case "click":
                if (2 === a.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                s = ma;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                s = ba;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                s = Ma;
                break;
              case En:
              case Mn:
              case An:
                s = va;
                break;
              case Pn:
                s = Aa;
                break;
              case "scroll":
                s = ga;
                break;
              case "wheel":
                s = Pa;
                break;
              case "copy":
              case "cut":
              case "paste":
                s = Ca;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                s = Ea;
            }
            var u = 0 != (4 & n),
              d = !u && "scroll" === e,
              p = u ? (null !== l ? l + "Capture" : null) : l;
            u = [];
            for (var h, g = t; null !== g; ) {
              var f = (h = g).stateNode;
              if ((5 === h.tag && null !== f && ((h = f), null !== p && null != (f = Ue(g, p)) && u.push(Pt(g, f, h))), d)) break;
              g = g.return;
            }
            0 < u.length && ((l = new s(l, c, null, a, i)), o.push({ event: l, listeners: u }));
          }
        }
        if (0 == (7 & n)) {
          if (
            ((s = "mouseout" === e || "pointerout" === e),
            (!(l = "mouseover" === e || "pointerover" === e) ||
              0 != (16 & n) ||
              !(c = a.relatedTarget || a.fromElement) ||
              (!Xt(c) && !c[Zt])) &&
              (s || l) &&
              ((l = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window),
              s
                ? ((s = t),
                  null !== (c = (c = a.relatedTarget || a.toElement) ? Xt(c) : null) &&
                    (c !== (d = Ze(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                    (c = null))
                : ((s = null), (c = t)),
              s !== c))
          ) {
            if (
              ((u = ma),
              (f = "onMouseLeave"),
              (p = "onMouseEnter"),
              (g = "mouse"),
              ("pointerout" !== e && "pointerover" !== e) || ((u = Ea), (f = "onPointerLeave"), (p = "onPointerEnter"), (g = "pointer")),
              (d = null == s ? l : Jt(s)),
              (h = null == c ? l : Jt(c)),
              ((l = new u(f, g + "leave", s, a, i)).target = d),
              (l.relatedTarget = h),
              (f = null),
              Xt(i) === t && (((u = new u(p, g + "enter", c, a, i)).target = h), (u.relatedTarget = d), (f = u)),
              (d = f),
              s && c)
            )
              e: {
                for (p = c, g = 0, h = u = s; h; h = Tt(h)) g++;
                for (h = 0, f = p; f; f = Tt(f)) h++;
                for (; 0 < g - h; ) (u = Tt(u)), g--;
                for (; 0 < h - g; ) (p = Tt(p)), h--;
                for (; g--; ) {
                  if (u === p || (null !== p && u === p.alternate)) break e;
                  (u = Tt(u)), (p = Tt(p));
                }
                u = null;
              }
            else u = null;
            null !== s && Rt(o, l, s, u, !1), null !== c && null !== d && Rt(o, d, c, u, !0);
          }
          if ("select" === (s = (l = t ? Jt(t) : window).nodeName && l.nodeName.toLowerCase()) || ("input" === s && "file" === l.type))
            var m = Za;
          else if (Wa(l))
            if (Qa) m = rt;
            else {
              m = tt;
              var b = at;
            }
          else (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (m = it);
          switch (
            (m && (m = m(e, t))
              ? Ka(o, m, a, i)
              : (b && b(e, l, t),
                "focusout" === e && (b = l._wrapperState) && b.controlled && "number" === l.type && ie(l, "number", l.value)),
            (b = t ? Jt(t) : window),
            e)
          ) {
            case "focusin":
              (Wa(b) || "true" === b.contentEditable) && ((gt = b), (ft = t), (mt = null));
              break;
            case "focusout":
              mt = ft = gt = null;
              break;
            case "mousedown":
              bt = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (bt = !1), yt(o, a, i);
              break;
            case "selectionchange":
              if (ht) break;
            case "keydown":
            case "keyup":
              yt(o, a, i);
          }
          var y;
          if (Ta)
            e: {
              switch (e) {
                case "compositionstart":
                  var v = "onCompositionStart";
                  break e;
                case "compositionend":
                  v = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  v = "onCompositionUpdate";
                  break e;
              }
              v = void 0;
            }
          else Fa ? Ua(e, a) && (v = "onCompositionEnd") : "keydown" === e && 229 === a.keyCode && (v = "onCompositionStart");
          v &&
            (_a &&
              "ko" !== a.locale &&
              (Fa || "onCompositionStart" !== v
                ? "onCompositionEnd" === v && Fa && (y = ta())
                : ((na = "value" in (ea = i) ? ea.value : ea.textContent), (Fa = !0))),
            0 < (b = Bt(t, v)).length &&
              ((v = new ka(v, e, null, a, i)),
              o.push({ event: v, listeners: b }),
              y ? (v.data = y) : null !== (y = za(a)) && (v.data = y))),
            (y = La
              ? (function (e, n) {
                  switch (e) {
                    case "compositionend":
                      return za(n);
                    case "keypress":
                      return 32 !== n.which ? null : ((Da = !0), Ia);
                    case "textInput":
                      return (e = n.data) === Ia && Da ? null : e;
                    default:
                      return null;
                  }
                })(e, a)
              : (function (e, n) {
                  if (Fa) return "compositionend" === e || (!Ta && Ua(e, n)) ? ((e = ta()), (aa = na = ea = null), (Fa = !1), e) : null;
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
                      return _a && "ko" !== n.locale ? null : n.data;
                    default:
                      return null;
                  }
                })(e, a)) &&
              0 < (t = Bt(t, "onBeforeInput")).length &&
              ((i = new ka("onBeforeInput", "beforeinput", null, a, i)), o.push({ event: i, listeners: t }), (i.data = y));
        }
        St(o, n);
      });
    }
    function Pt(e, n, a) {
      return { instance: e, listener: n, currentTarget: a };
    }
    function Bt(e, n) {
      for (var a = n + "Capture", t = []; null !== e; ) {
        var i = e,
          r = i.stateNode;
        5 === i.tag &&
          null !== r &&
          ((i = r), null != (r = Ue(e, a)) && t.unshift(Pt(e, r, i)), null != (r = Ue(e, n)) && t.push(Pt(e, r, i))),
          (e = e.return);
      }
      return t;
    }
    function Tt(e) {
      if (null === e) return null;
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function Rt(e, n, a, t, i) {
      for (var r = n._reactName, o = []; null !== a && a !== t; ) {
        var l = a,
          s = l.alternate,
          c = l.stateNode;
        if (null !== s && s === t) break;
        5 === l.tag &&
          null !== c &&
          ((l = c), i ? null != (s = Ue(a, r)) && o.unshift(Pt(a, s, l)) : i || (null != (s = Ue(a, r)) && o.push(Pt(a, s, l)))),
          (a = a.return);
      }
      0 !== o.length && e.push({ event: n, listeners: o });
    }
    function Lt() {}
    var _t = null,
      It = null;
    function Dt(e, n) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!n.autoFocus;
      }
      return !1;
    }
    function Ut(e, n) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" == typeof n.children ||
        "number" == typeof n.children ||
        ("object" == typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html)
      );
    }
    var zt = "function" == typeof setTimeout ? setTimeout : void 0,
      Ft = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function Gt(e) {
      1 === e.nodeType ? (e.textContent = "") : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
    }
    function Wt(e) {
      for (; null != e; e = e.nextSibling) {
        var n = e.nodeType;
        if (1 === n || 3 === n) break;
      }
      return e;
    }
    function Kt(e) {
      e = e.previousSibling;
      for (var n = 0; e; ) {
        if (8 === e.nodeType) {
          var a = e.data;
          if ("$" === a || "$!" === a || "$?" === a) {
            if (0 === n) return e;
            n--;
          } else "/$" === a && n++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Vt = 0;
    var Ht = Math.random().toString(36).slice(2),
      $t = "__reactFiber$" + Ht,
      Yt = "__reactProps$" + Ht,
      Zt = "__reactContainer$" + Ht,
      Qt = "__reactEvents$" + Ht;
    function Xt(e) {
      var n = e[$t];
      if (n) return n;
      for (var a = e.parentNode; a; ) {
        if ((n = a[Zt] || a[$t])) {
          if (((a = n.alternate), null !== n.child || (null !== a && null !== a.child)))
            for (e = Kt(e); null !== e; ) {
              if ((a = e[$t])) return a;
              e = Kt(e);
            }
          return n;
        }
        a = (e = a).parentNode;
      }
      return null;
    }
    function qt(e) {
      return !(e = e[$t] || e[Zt]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
    }
    function Jt(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(o(33));
    }
    function ei(e) {
      return e[Yt] || null;
    }
    function ni(e) {
      var n = e[Qt];
      return void 0 === n && (n = e[Qt] = new Set()), n;
    }
    var ai = [],
      ti = -1;
    function ii(e) {
      return { current: e };
    }
    function ri(e) {
      0 > ti || ((e.current = ai[ti]), (ai[ti] = null), ti--);
    }
    function oi(e, n) {
      ti++, (ai[ti] = e.current), (e.current = n);
    }
    var li = {},
      si = ii(li),
      ci = ii(!1),
      ui = li;
    function di(e, n) {
      var a = e.type.contextTypes;
      if (!a) return li;
      var t = e.stateNode;
      if (t && t.__reactInternalMemoizedUnmaskedChildContext === n) return t.__reactInternalMemoizedMaskedChildContext;
      var i,
        r = {};
      for (i in a) r[i] = n[i];
      return (
        t && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n), (e.__reactInternalMemoizedMaskedChildContext = r)), r
      );
    }
    function pi(e) {
      return null != (e = e.childContextTypes);
    }
    function hi() {
      ri(ci), ri(si);
    }
    function gi(e, n, a) {
      if (si.current !== li) throw Error(o(168));
      oi(si, n), oi(ci, a);
    }
    function fi(e, n, a) {
      var t = e.stateNode;
      if (((e = n.childContextTypes), "function" != typeof t.getChildContext)) return a;
      for (var r in (t = t.getChildContext())) if (!(r in e)) throw Error(o(108, $(n) || "Unknown", r));
      return i({}, a, t);
    }
    function mi(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || li), (ui = si.current), oi(si, e), oi(ci, ci.current), !0
      );
    }
    function bi(e, n, a) {
      var t = e.stateNode;
      if (!t) throw Error(o(169));
      a ? ((e = fi(e, n, ui)), (t.__reactInternalMemoizedMergedChildContext = e), ri(ci), ri(si), oi(si, e)) : ri(ci), oi(ci, a);
    }
    var yi = null,
      vi = null,
      Ci = r.unstable_runWithPriority,
      ki = r.unstable_scheduleCallback,
      wi = r.unstable_cancelCallback,
      xi = r.unstable_shouldYield,
      Si = r.unstable_requestPaint,
      ji = r.unstable_now,
      Ni = r.unstable_getCurrentPriorityLevel,
      Oi = r.unstable_ImmediatePriority,
      Ei = r.unstable_UserBlockingPriority,
      Mi = r.unstable_NormalPriority,
      Ai = r.unstable_LowPriority,
      Pi = r.unstable_IdlePriority,
      Bi = {},
      Ti = void 0 !== Si ? Si : function () {},
      Ri = null,
      Li = null,
      _i = !1,
      Ii = ji(),
      Di =
        1e4 > Ii
          ? ji
          : function () {
              return ji() - Ii;
            };
    function Ui() {
      switch (Ni()) {
        case Oi:
          return 99;
        case Ei:
          return 98;
        case Mi:
          return 97;
        case Ai:
          return 96;
        case Pi:
          return 95;
        default:
          throw Error(o(332));
      }
    }
    function zi(e) {
      switch (e) {
        case 99:
          return Oi;
        case 98:
          return Ei;
        case 97:
          return Mi;
        case 96:
          return Ai;
        case 95:
          return Pi;
        default:
          throw Error(o(332));
      }
    }
    function Fi(e, n) {
      return (e = zi(e)), Ci(e, n);
    }
    function Gi(e, n, a) {
      return (e = zi(e)), ki(e, n, a);
    }
    function Wi() {
      if (null !== Li) {
        var e = Li;
        (Li = null), wi(e);
      }
      Ki();
    }
    function Ki() {
      if (!_i && null !== Ri) {
        _i = !0;
        var e = 0;
        try {
          var n = Ri;
          Fi(99, function () {
            for (; e < n.length; e++) {
              var a = n[e];
              do {
                a = a(!0);
              } while (null !== a);
            }
          }),
            (Ri = null);
        } catch (n) {
          throw (null !== Ri && (Ri = Ri.slice(e + 1)), ki(Oi, Wi), n);
        } finally {
          _i = !1;
        }
      }
    }
    var Vi = k.ReactCurrentBatchConfig;
    function Hi(e, n) {
      if (e && e.defaultProps) {
        for (var a in ((n = i({}, n)), (e = e.defaultProps))) void 0 === n[a] && (n[a] = e[a]);
        return n;
      }
      return n;
    }
    var $i = ii(null),
      Yi = null,
      Zi = null,
      Qi = null;
    function Xi() {
      Qi = Zi = Yi = null;
    }
    function qi(e) {
      var n = $i.current;
      ri($i), (e.type._context._currentValue = n);
    }
    function Ji(e, n) {
      for (; null !== e; ) {
        var a = e.alternate;
        if ((e.childLanes & n) === n) {
          if (null === a || (a.childLanes & n) === n) break;
          a.childLanes |= n;
        } else (e.childLanes |= n), null !== a && (a.childLanes |= n);
        e = e.return;
      }
    }
    function er(e, n) {
      (Yi = e),
        (Qi = Zi = null),
        null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & n) && (Bo = !0), (e.firstContext = null));
    }
    function nr(e, n) {
      if (Qi !== e && !1 !== n && 0 !== n)
        if (
          (("number" == typeof n && 1073741823 !== n) || ((Qi = e), (n = 1073741823)),
          (n = { context: e, observedBits: n, next: null }),
          null === Zi)
        ) {
          if (null === Yi) throw Error(o(308));
          (Zi = n), (Yi.dependencies = { lanes: 0, firstContext: n, responders: null });
        } else Zi = Zi.next = n;
      return e._currentValue;
    }
    var ar = !1;
    function tr(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
    }
    function ir(e, n) {
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
    function rr(e, n) {
      return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
    }
    function or(e, n) {
      if (null !== (e = e.updateQueue)) {
        var a = (e = e.shared).pending;
        null === a ? (n.next = n) : ((n.next = a.next), (a.next = n)), (e.pending = n);
      }
    }
    function lr(e, n) {
      var a = e.updateQueue,
        t = e.alternate;
      if (null !== t && a === (t = t.updateQueue)) {
        var i = null,
          r = null;
        if (null !== (a = a.firstBaseUpdate)) {
          do {
            var o = { eventTime: a.eventTime, lane: a.lane, tag: a.tag, payload: a.payload, callback: a.callback, next: null };
            null === r ? (i = r = o) : (r = r.next = o), (a = a.next);
          } while (null !== a);
          null === r ? (i = r = n) : (r = r.next = n);
        } else i = r = n;
        return (
          (a = { baseState: t.baseState, firstBaseUpdate: i, lastBaseUpdate: r, shared: t.shared, effects: t.effects }),
          void (e.updateQueue = a)
        );
      }
      null === (e = a.lastBaseUpdate) ? (a.firstBaseUpdate = n) : (e.next = n), (a.lastBaseUpdate = n);
    }
    function sr(e, n, a, t) {
      var r = e.updateQueue;
      ar = !1;
      var o = r.firstBaseUpdate,
        l = r.lastBaseUpdate,
        s = r.shared.pending;
      if (null !== s) {
        r.shared.pending = null;
        var c = s,
          u = c.next;
        (c.next = null), null === l ? (o = u) : (l.next = u), (l = c);
        var d = e.alternate;
        if (null !== d) {
          var p = (d = d.updateQueue).lastBaseUpdate;
          p !== l && (null === p ? (d.firstBaseUpdate = u) : (p.next = u), (d.lastBaseUpdate = c));
        }
      }
      if (null !== o) {
        for (p = r.baseState, l = 0, d = u = c = null; ; ) {
          s = o.lane;
          var h = o.eventTime;
          if ((t & s) === s) {
            null !== d && (d = d.next = { eventTime: h, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
            e: {
              var g = e,
                f = o;
              switch (((s = n), (h = a), f.tag)) {
                case 1:
                  if ("function" == typeof (g = f.payload)) {
                    p = g.call(h, p, s);
                    break e;
                  }
                  p = g;
                  break e;
                case 3:
                  g.flags = (-4097 & g.flags) | 64;
                case 0:
                  if (null == (s = "function" == typeof (g = f.payload) ? g.call(h, p, s) : g)) break e;
                  p = i({}, p, s);
                  break e;
                case 2:
                  ar = !0;
              }
            }
            null !== o.callback && ((e.flags |= 32), null === (s = r.effects) ? (r.effects = [o]) : s.push(o));
          } else
            (h = { eventTime: h, lane: s, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
              null === d ? ((u = d = h), (c = p)) : (d = d.next = h),
              (l |= s);
          if (null === (o = o.next)) {
            if (null === (s = r.shared.pending)) break;
            (o = s.next), (s.next = null), (r.lastBaseUpdate = s), (r.shared.pending = null);
          }
        }
        null === d && (c = p),
          (r.baseState = c),
          (r.firstBaseUpdate = u),
          (r.lastBaseUpdate = d),
          (Rl |= l),
          (e.lanes = l),
          (e.memoizedState = p);
      }
    }
    function cr(e, n, a) {
      if (((e = n.effects), (n.effects = null), null !== e))
        for (n = 0; n < e.length; n++) {
          var t = e[n],
            i = t.callback;
          if (null !== i) {
            if (((t.callback = null), (t = a), "function" != typeof i)) throw Error(o(191, i));
            i.call(t);
          }
        }
    }
    var ur = new t.Component().refs;
    function dr(e, n, a, t) {
      (a = null == (a = a(t, (n = e.memoizedState))) ? n : i({}, n, a)),
        (e.memoizedState = a),
        0 === e.lanes && (e.updateQueue.baseState = a);
    }
    var pr = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && Ze(e) === e;
      },
      enqueueSetState: function (e, n, a) {
        e = e._reactInternals;
        var t = rs(),
          i = os(e),
          r = rr(t, i);
        (r.payload = n), null != a && (r.callback = a), or(e, r), ls(e, i, t);
      },
      enqueueReplaceState: function (e, n, a) {
        e = e._reactInternals;
        var t = rs(),
          i = os(e),
          r = rr(t, i);
        (r.tag = 1), (r.payload = n), null != a && (r.callback = a), or(e, r), ls(e, i, t);
      },
      enqueueForceUpdate: function (e, n) {
        e = e._reactInternals;
        var a = rs(),
          t = os(e),
          i = rr(a, t);
        (i.tag = 2), null != n && (i.callback = n), or(e, i), ls(e, t, a);
      }
    };
    function hr(e, n, a, t, i, r, o) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(t, r, o)
        : !n.prototype || !n.prototype.isPureReactComponent || !st(a, t) || !st(i, r);
    }
    function gr(e, n, a) {
      var t = !1,
        i = li,
        r = n.contextType;
      return (
        "object" == typeof r && null !== r
          ? (r = nr(r))
          : ((i = pi(n) ? ui : si.current), (r = (t = null != (t = n.contextTypes)) ? di(e, i) : li)),
        (n = new n(a, r)),
        (e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null),
        (n.updater = pr),
        (e.stateNode = n),
        (n._reactInternals = e),
        t && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = r)),
        n
      );
    }
    function fr(e, n, a, t) {
      (e = n.state),
        "function" == typeof n.componentWillReceiveProps && n.componentWillReceiveProps(a, t),
        "function" == typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(a, t),
        n.state !== e && pr.enqueueReplaceState(n, n.state, null);
    }
    function mr(e, n, a, t) {
      var i = e.stateNode;
      (i.props = a), (i.state = e.memoizedState), (i.refs = ur), tr(e);
      var r = n.contextType;
      "object" == typeof r && null !== r ? (i.context = nr(r)) : ((r = pi(n) ? ui : si.current), (i.context = di(e, r))),
        sr(e, a, i, t),
        (i.state = e.memoizedState),
        "function" == typeof (r = n.getDerivedStateFromProps) && (dr(e, n, r, a), (i.state = e.memoizedState)),
        "function" == typeof n.getDerivedStateFromProps ||
          "function" == typeof i.getSnapshotBeforeUpdate ||
          ("function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount) ||
          ((n = i.state),
          "function" == typeof i.componentWillMount && i.componentWillMount(),
          "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
          n !== i.state && pr.enqueueReplaceState(i, i.state, null),
          sr(e, a, i, t),
          (i.state = e.memoizedState)),
        "function" == typeof i.componentDidMount && (e.flags |= 4);
    }
    var br = Array.isArray;
    function yr(e, n, a) {
      if (null !== (e = a.ref) && "function" != typeof e && "object" != typeof e) {
        if (a._owner) {
          if ((a = a._owner)) {
            if (1 !== a.tag) throw Error(o(309));
            var t = a.stateNode;
          }
          if (!t) throw Error(o(147, e));
          var i = "" + e;
          return null !== n && null !== n.ref && "function" == typeof n.ref && n.ref._stringRef === i
            ? n.ref
            : (((n = function (e) {
                var n = t.refs;
                n === ur && (n = t.refs = {}), null === e ? delete n[i] : (n[i] = e);
              })._stringRef = i),
              n);
        }
        if ("string" != typeof e) throw Error(o(284));
        if (!a._owner) throw Error(o(290, e));
      }
      return e;
    }
    function vr(e, n) {
      if ("textarea" !== e.type)
        throw Error(
          o(31, "[object Object]" === Object.prototype.toString.call(n) ? "object with keys {" + Object.keys(n).join(", ") + "}" : n)
        );
    }
    function Cr(e) {
      function n(n, a) {
        if (e) {
          var t = n.lastEffect;
          null !== t ? ((t.nextEffect = a), (n.lastEffect = a)) : (n.firstEffect = n.lastEffect = a), (a.nextEffect = null), (a.flags = 8);
        }
      }
      function a(a, t) {
        if (!e) return null;
        for (; null !== t; ) n(a, t), (t = t.sibling);
        return null;
      }
      function t(e, n) {
        for (e = new Map(); null !== n; ) null !== n.key ? e.set(n.key, n) : e.set(n.index, n), (n = n.sibling);
        return e;
      }
      function i(e, n) {
        return ((e = Us(e, n)).index = 0), (e.sibling = null), e;
      }
      function r(n, a, t) {
        return (n.index = t), e ? (null !== (t = n.alternate) ? ((t = t.index) < a ? ((n.flags = 2), a) : t) : ((n.flags = 2), a)) : a;
      }
      function l(n) {
        return e && null === n.alternate && (n.flags = 2), n;
      }
      function s(e, n, a, t) {
        return null === n || 6 !== n.tag ? (((n = Ws(a, e.mode, t)).return = e), n) : (((n = i(n, a)).return = e), n);
      }
      function c(e, n, a, t) {
        return null !== n && n.elementType === a.type
          ? (((t = i(n, a.props)).ref = yr(e, n, a)), (t.return = e), t)
          : (((t = zs(a.type, a.key, a.props, null, e.mode, t)).ref = yr(e, n, a)), (t.return = e), t);
      }
      function u(e, n, a, t) {
        return null === n || 4 !== n.tag || n.stateNode.containerInfo !== a.containerInfo || n.stateNode.implementation !== a.implementation
          ? (((n = Ks(a, e.mode, t)).return = e), n)
          : (((n = i(n, a.children || [])).return = e), n);
      }
      function d(e, n, a, t, r) {
        return null === n || 7 !== n.tag ? (((n = Fs(a, e.mode, t, r)).return = e), n) : (((n = i(n, a)).return = e), n);
      }
      function p(e, n, a) {
        if ("string" == typeof n || "number" == typeof n) return ((n = Ws("" + n, e.mode, a)).return = e), n;
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case w:
              return ((a = zs(n.type, n.key, n.props, null, e.mode, a)).ref = yr(e, null, n)), (a.return = e), a;
            case x:
              return ((n = Ks(n, e.mode, a)).return = e), n;
          }
          if (br(n) || G(n)) return ((n = Fs(n, e.mode, a, null)).return = e), n;
          vr(e, n);
        }
        return null;
      }
      function h(e, n, a, t) {
        var i = null !== n ? n.key : null;
        if ("string" == typeof a || "number" == typeof a) return null !== i ? null : s(e, n, "" + a, t);
        if ("object" == typeof a && null !== a) {
          switch (a.$$typeof) {
            case w:
              return a.key === i ? (a.type === S ? d(e, n, a.props.children, t, i) : c(e, n, a, t)) : null;
            case x:
              return a.key === i ? u(e, n, a, t) : null;
          }
          if (br(a) || G(a)) return null !== i ? null : d(e, n, a, t, null);
          vr(e, a);
        }
        return null;
      }
      function g(e, n, a, t, i) {
        if ("string" == typeof t || "number" == typeof t) return s(n, (e = e.get(a) || null), "" + t, i);
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case w:
              return (e = e.get(null === t.key ? a : t.key) || null), t.type === S ? d(n, e, t.props.children, i, t.key) : c(n, e, t, i);
            case x:
              return u(n, (e = e.get(null === t.key ? a : t.key) || null), t, i);
          }
          if (br(t) || G(t)) return d(n, (e = e.get(a) || null), t, i, null);
          vr(n, t);
        }
        return null;
      }
      function f(i, o, l, s) {
        for (var c = null, u = null, d = o, f = (o = 0), m = null; null !== d && f < l.length; f++) {
          d.index > f ? ((m = d), (d = null)) : (m = d.sibling);
          var b = h(i, d, l[f], s);
          if (null === b) {
            null === d && (d = m);
            break;
          }
          e && d && null === b.alternate && n(i, d), (o = r(b, o, f)), null === u ? (c = b) : (u.sibling = b), (u = b), (d = m);
        }
        if (f === l.length) return a(i, d), c;
        if (null === d) {
          for (; f < l.length; f++) null !== (d = p(i, l[f], s)) && ((o = r(d, o, f)), null === u ? (c = d) : (u.sibling = d), (u = d));
          return c;
        }
        for (d = t(i, d); f < l.length; f++)
          null !== (m = g(d, i, f, l[f], s)) &&
            (e && null !== m.alternate && d.delete(null === m.key ? f : m.key),
            (o = r(m, o, f)),
            null === u ? (c = m) : (u.sibling = m),
            (u = m));
        return (
          e &&
            d.forEach(function (e) {
              return n(i, e);
            }),
          c
        );
      }
      function m(i, l, s, c) {
        var u = G(s);
        if ("function" != typeof u) throw Error(o(150));
        if (null == (s = u.call(s))) throw Error(o(151));
        for (var d = (u = null), f = l, m = (l = 0), b = null, y = s.next(); null !== f && !y.done; m++, y = s.next()) {
          f.index > m ? ((b = f), (f = null)) : (b = f.sibling);
          var v = h(i, f, y.value, c);
          if (null === v) {
            null === f && (f = b);
            break;
          }
          e && f && null === v.alternate && n(i, f), (l = r(v, l, m)), null === d ? (u = v) : (d.sibling = v), (d = v), (f = b);
        }
        if (y.done) return a(i, f), u;
        if (null === f) {
          for (; !y.done; m++, y = s.next())
            null !== (y = p(i, y.value, c)) && ((l = r(y, l, m)), null === d ? (u = y) : (d.sibling = y), (d = y));
          return u;
        }
        for (f = t(i, f); !y.done; m++, y = s.next())
          null !== (y = g(f, i, m, y.value, c)) &&
            (e && null !== y.alternate && f.delete(null === y.key ? m : y.key),
            (l = r(y, l, m)),
            null === d ? (u = y) : (d.sibling = y),
            (d = y));
        return (
          e &&
            f.forEach(function (e) {
              return n(i, e);
            }),
          u
        );
      }
      return function (e, t, r, s) {
        var c = "object" == typeof r && null !== r && r.type === S && null === r.key;
        c && (r = r.props.children);
        var u = "object" == typeof r && null !== r;
        if (u)
          switch (r.$$typeof) {
            case w:
              e: {
                for (u = r.key, c = t; null !== c; ) {
                  if (c.key === u) {
                    switch (c.tag) {
                      case 7:
                        if (r.type === S) {
                          a(e, c.sibling), ((t = i(c, r.props.children)).return = e), (e = t);
                          break e;
                        }
                        break;
                      default:
                        if (c.elementType === r.type) {
                          a(e, c.sibling), ((t = i(c, r.props)).ref = yr(e, c, r)), (t.return = e), (e = t);
                          break e;
                        }
                    }
                    a(e, c);
                    break;
                  }
                  n(e, c), (c = c.sibling);
                }
                r.type === S
                  ? (((t = Fs(r.props.children, e.mode, s, r.key)).return = e), (e = t))
                  : (((s = zs(r.type, r.key, r.props, null, e.mode, s)).ref = yr(e, t, r)), (s.return = e), (e = s));
              }
              return l(e);
            case x:
              e: {
                for (c = r.key; null !== t; ) {
                  if (t.key === c) {
                    if (4 === t.tag && t.stateNode.containerInfo === r.containerInfo && t.stateNode.implementation === r.implementation) {
                      a(e, t.sibling), ((t = i(t, r.children || [])).return = e), (e = t);
                      break e;
                    }
                    a(e, t);
                    break;
                  }
                  n(e, t), (t = t.sibling);
                }
                ((t = Ks(r, e.mode, s)).return = e), (e = t);
              }
              return l(e);
          }
        if ("string" == typeof r || "number" == typeof r)
          return (
            (r = "" + r),
            null !== t && 6 === t.tag
              ? (a(e, t.sibling), ((t = i(t, r)).return = e), (e = t))
              : (a(e, t), ((t = Ws(r, e.mode, s)).return = e), (e = t)),
            l(e)
          );
        if (br(r)) return f(e, t, r, s);
        if (G(r)) return m(e, t, r, s);
        if ((u && vr(e, r), void 0 === r && !c))
          switch (e.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(o(152, $(e.type) || "Component"));
          }
        return a(e, t);
      };
    }
    var kr = Cr(!0),
      wr = Cr(!1),
      xr = {},
      Sr = ii(xr),
      jr = ii(xr),
      Nr = ii(xr);
    function Or(e) {
      if (e === xr) throw Error(o(174));
      return e;
    }
    function Er(e, n) {
      switch ((oi(Nr, n), oi(jr, e), oi(Sr, xr), (e = n.nodeType))) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : ge(null, "");
          break;
        default:
          n = ge((n = (e = 8 === e ? n.parentNode : n).namespaceURI || null), (e = e.tagName));
      }
      ri(Sr), oi(Sr, n);
    }
    function Mr() {
      ri(Sr), ri(jr), ri(Nr);
    }
    function Ar(e) {
      Or(Nr.current);
      var n = Or(Sr.current),
        a = ge(n, e.type);
      n !== a && (oi(jr, e), oi(Sr, a));
    }
    function Pr(e) {
      jr.current === e && (ri(Sr), ri(jr));
    }
    var Br = ii(0);
    function Tr(e) {
      for (var n = e; null !== n; ) {
        if (13 === n.tag) {
          var a = n.memoizedState;
          if (null !== a && (null === (a = a.dehydrated) || "$?" === a.data || "$!" === a.data)) return n;
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
    var Rr = null,
      Lr = null,
      _r = !1;
    function Ir(e, n) {
      var a = Is(5, null, null, 0);
      (a.elementType = "DELETED"),
        (a.type = "DELETED"),
        (a.stateNode = n),
        (a.return = e),
        (a.flags = 8),
        null !== e.lastEffect ? ((e.lastEffect.nextEffect = a), (e.lastEffect = a)) : (e.firstEffect = e.lastEffect = a);
    }
    function Dr(e, n) {
      switch (e.tag) {
        case 5:
          var a = e.type;
          return null !== (n = 1 !== n.nodeType || a.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) && ((e.stateNode = n), !0);
        case 6:
          return null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) && ((e.stateNode = n), !0);
        case 13:
        default:
          return !1;
      }
    }
    function Ur(e) {
      if (_r) {
        var n = Lr;
        if (n) {
          var a = n;
          if (!Dr(e, n)) {
            if (!(n = Wt(a.nextSibling)) || !Dr(e, n)) return (e.flags = (-1025 & e.flags) | 2), (_r = !1), void (Rr = e);
            Ir(Rr, a);
          }
          (Rr = e), (Lr = Wt(n.firstChild));
        } else (e.flags = (-1025 & e.flags) | 2), (_r = !1), (Rr = e);
      }
    }
    function zr(e) {
      for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
      Rr = e;
    }
    function Fr(e) {
      if (e !== Rr) return !1;
      if (!_r) return zr(e), (_r = !0), !1;
      var n = e.type;
      if (5 !== e.tag || ("head" !== n && "body" !== n && !Ut(n, e.memoizedProps))) for (n = Lr; n; ) Ir(e, n), (n = Wt(n.nextSibling));
      if ((zr(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
        e: {
          for (e = e.nextSibling, n = 0; e; ) {
            if (8 === e.nodeType) {
              var a = e.data;
              if ("/$" === a) {
                if (0 === n) {
                  Lr = Wt(e.nextSibling);
                  break e;
                }
                n--;
              } else ("$" !== a && "$!" !== a && "$?" !== a) || n++;
            }
            e = e.nextSibling;
          }
          Lr = null;
        }
      } else Lr = Rr ? Wt(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Gr() {
      (Lr = Rr = null), (_r = !1);
    }
    var Wr = [];
    function Kr() {
      for (var e = 0; e < Wr.length; e++) Wr[e]._workInProgressVersionPrimary = null;
      Wr.length = 0;
    }
    var Vr = k.ReactCurrentDispatcher,
      Hr = k.ReactCurrentBatchConfig,
      $r = 0,
      Yr = null,
      Zr = null,
      Qr = null,
      Xr = !1,
      qr = !1;
    function Jr() {
      throw Error(o(321));
    }
    function eo(e, n) {
      if (null === n) return !1;
      for (var a = 0; a < n.length && a < e.length; a++) if (!ot(e[a], n[a])) return !1;
      return !0;
    }
    function no(e, n, a, t, i, r) {
      if (
        (($r = r),
        (Yr = n),
        (n.memoizedState = null),
        (n.updateQueue = null),
        (n.lanes = 0),
        (Vr.current = null === e || null === e.memoizedState ? Eo : Mo),
        (e = a(t, i)),
        qr)
      ) {
        r = 0;
        do {
          if (((qr = !1), !(25 > r))) throw Error(o(301));
          (r += 1), (Qr = Zr = null), (n.updateQueue = null), (Vr.current = Ao), (e = a(t, i));
        } while (qr);
      }
      if (((Vr.current = Oo), (n = null !== Zr && null !== Zr.next), ($r = 0), (Qr = Zr = Yr = null), (Xr = !1), n)) throw Error(o(300));
      return e;
    }
    function ao() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return null === Qr ? (Yr.memoizedState = Qr = e) : (Qr = Qr.next = e), Qr;
    }
    function to() {
      if (null === Zr) {
        var e = Yr.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = Zr.next;
      var n = null === Qr ? Yr.memoizedState : Qr.next;
      if (null !== n) (Qr = n), (Zr = e);
      else {
        if (null === e) throw Error(o(310));
        (e = { memoizedState: (Zr = e).memoizedState, baseState: Zr.baseState, baseQueue: Zr.baseQueue, queue: Zr.queue, next: null }),
          null === Qr ? (Yr.memoizedState = Qr = e) : (Qr = Qr.next = e);
      }
      return Qr;
    }
    function io(e, n) {
      return "function" == typeof n ? n(e) : n;
    }
    function ro(e) {
      var n = to(),
        a = n.queue;
      if (null === a) throw Error(o(311));
      a.lastRenderedReducer = e;
      var t = Zr,
        i = t.baseQueue,
        r = a.pending;
      if (null !== r) {
        if (null !== i) {
          var l = i.next;
          (i.next = r.next), (r.next = l);
        }
        (t.baseQueue = i = r), (a.pending = null);
      }
      if (null !== i) {
        (i = i.next), (t = t.baseState);
        var s = (l = r = null),
          c = i;
        do {
          var u = c.lane;
          if (($r & u) === u)
            null !== s && (s = s.next = { lane: 0, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null }),
              (t = c.eagerReducer === e ? c.eagerState : e(t, c.action));
          else {
            var d = { lane: u, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null };
            null === s ? ((l = s = d), (r = t)) : (s = s.next = d), (Yr.lanes |= u), (Rl |= u);
          }
          c = c.next;
        } while (null !== c && c !== i);
        null === s ? (r = t) : (s.next = l),
          ot(t, n.memoizedState) || (Bo = !0),
          (n.memoizedState = t),
          (n.baseState = r),
          (n.baseQueue = s),
          (a.lastRenderedState = t);
      }
      return [n.memoizedState, a.dispatch];
    }
    function oo(e) {
      var n = to(),
        a = n.queue;
      if (null === a) throw Error(o(311));
      a.lastRenderedReducer = e;
      var t = a.dispatch,
        i = a.pending,
        r = n.memoizedState;
      if (null !== i) {
        a.pending = null;
        var l = (i = i.next);
        do {
          (r = e(r, l.action)), (l = l.next);
        } while (l !== i);
        ot(r, n.memoizedState) || (Bo = !0), (n.memoizedState = r), null === n.baseQueue && (n.baseState = r), (a.lastRenderedState = r);
      }
      return [r, t];
    }
    function lo(e, n, a) {
      var t = n._getVersion;
      t = t(n._source);
      var i = n._workInProgressVersionPrimary;
      if (
        (null !== i
          ? (e = i === t)
          : ((e = e.mutableReadLanes), (e = ($r & e) === e) && ((n._workInProgressVersionPrimary = t), Wr.push(n))),
        e)
      )
        return a(n._source);
      throw (Wr.push(n), Error(o(350)));
    }
    function so(e, n, a, t) {
      var i = Nl;
      if (null === i) throw Error(o(349));
      var r = n._getVersion,
        l = r(n._source),
        s = Vr.current,
        c = s.useState(function () {
          return lo(i, n, a);
        }),
        u = c[1],
        d = c[0];
      c = Qr;
      var p = e.memoizedState,
        h = p.refs,
        g = h.getSnapshot,
        f = p.source;
      p = p.subscribe;
      var m = Yr;
      return (
        (e.memoizedState = { refs: h, source: n, subscribe: t }),
        s.useEffect(
          function () {
            (h.getSnapshot = a), (h.setSnapshot = u);
            var e = r(n._source);
            if (!ot(l, e)) {
              (e = a(n._source)),
                ot(d, e) || (u(e), (e = os(m)), (i.mutableReadLanes |= e & i.pendingLanes)),
                (e = i.mutableReadLanes),
                (i.entangledLanes |= e);
              for (var t = i.entanglements, o = e; 0 < o; ) {
                var s = 31 - Kn(o),
                  c = 1 << s;
                (t[s] |= e), (o &= ~c);
              }
            }
          },
          [a, n, t]
        ),
        s.useEffect(
          function () {
            return t(n._source, function () {
              var e = h.getSnapshot,
                a = h.setSnapshot;
              try {
                a(e(n._source));
                var t = os(m);
                i.mutableReadLanes |= t & i.pendingLanes;
              } catch (e) {
                a(function () {
                  throw e;
                });
              }
            });
          },
          [n, t]
        ),
        (ot(g, a) && ot(f, n) && ot(p, t)) ||
          (((e = { pending: null, dispatch: null, lastRenderedReducer: io, lastRenderedState: d }).dispatch = u = No.bind(null, Yr, e)),
          (c.queue = e),
          (c.baseQueue = null),
          (d = lo(i, n, a)),
          (c.memoizedState = c.baseState = d)),
        d
      );
    }
    function co(e, n, a) {
      return so(to(), e, n, a);
    }
    function uo(e) {
      var n = ao();
      return (
        "function" == typeof e && (e = e()),
        (n.memoizedState = n.baseState = e),
        (e = (e = n.queue = { pending: null, dispatch: null, lastRenderedReducer: io, lastRenderedState: e }).dispatch =
          No.bind(null, Yr, e)),
        [n.memoizedState, e]
      );
    }
    function po(e, n, a, t) {
      return (
        (e = { tag: e, create: n, destroy: a, deps: t, next: null }),
        null === (n = Yr.updateQueue)
          ? ((n = { lastEffect: null }), (Yr.updateQueue = n), (n.lastEffect = e.next = e))
          : null === (a = n.lastEffect)
          ? (n.lastEffect = e.next = e)
          : ((t = a.next), (a.next = e), (e.next = t), (n.lastEffect = e)),
        e
      );
    }
    function ho(e) {
      return (e = { current: e }), (ao().memoizedState = e);
    }
    function go() {
      return to().memoizedState;
    }
    function fo(e, n, a, t) {
      var i = ao();
      (Yr.flags |= e), (i.memoizedState = po(1 | n, a, void 0, void 0 === t ? null : t));
    }
    function mo(e, n, a, t) {
      var i = to();
      t = void 0 === t ? null : t;
      var r = void 0;
      if (null !== Zr) {
        var o = Zr.memoizedState;
        if (((r = o.destroy), null !== t && eo(t, o.deps))) return void po(n, a, r, t);
      }
      (Yr.flags |= e), (i.memoizedState = po(1 | n, a, r, t));
    }
    function bo(e, n) {
      return fo(516, 4, e, n);
    }
    function yo(e, n) {
      return mo(516, 4, e, n);
    }
    function vo(e, n) {
      return mo(4, 2, e, n);
    }
    function Co(e, n) {
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
    function ko(e, n, a) {
      return (a = null != a ? a.concat([e]) : null), mo(4, 2, Co.bind(null, n, e), a);
    }
    function wo() {}
    function xo(e, n) {
      var a = to();
      n = void 0 === n ? null : n;
      var t = a.memoizedState;
      return null !== t && null !== n && eo(n, t[1]) ? t[0] : ((a.memoizedState = [e, n]), e);
    }
    function So(e, n) {
      var a = to();
      n = void 0 === n ? null : n;
      var t = a.memoizedState;
      return null !== t && null !== n && eo(n, t[1]) ? t[0] : ((e = e()), (a.memoizedState = [e, n]), e);
    }
    function jo(e, n) {
      var a = Ui();
      Fi(98 > a ? 98 : a, function () {
        e(!0);
      }),
        Fi(97 < a ? 97 : a, function () {
          var a = Hr.transition;
          Hr.transition = 1;
          try {
            e(!1), n();
          } finally {
            Hr.transition = a;
          }
        });
    }
    function No(e, n, a) {
      var t = rs(),
        i = os(e),
        r = { lane: i, action: a, eagerReducer: null, eagerState: null, next: null },
        o = n.pending;
      if (
        (null === o ? (r.next = r) : ((r.next = o.next), (o.next = r)),
        (n.pending = r),
        (o = e.alternate),
        e === Yr || (null !== o && o === Yr))
      )
        qr = Xr = !0;
      else {
        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = n.lastRenderedReducer))
          try {
            var l = n.lastRenderedState,
              s = o(l, a);
            if (((r.eagerReducer = o), (r.eagerState = s), ot(s, l))) return;
          } catch (e) {}
        ls(e, i, t);
      }
    }
    var Oo = {
        readContext: nr,
        useCallback: Jr,
        useContext: Jr,
        useEffect: Jr,
        useImperativeHandle: Jr,
        useLayoutEffect: Jr,
        useMemo: Jr,
        useReducer: Jr,
        useRef: Jr,
        useState: Jr,
        useDebugValue: Jr,
        useDeferredValue: Jr,
        useTransition: Jr,
        useMutableSource: Jr,
        useOpaqueIdentifier: Jr,
        unstable_isNewReconciler: !1
      },
      Eo = {
        readContext: nr,
        useCallback: function (e, n) {
          return (ao().memoizedState = [e, void 0 === n ? null : n]), e;
        },
        useContext: nr,
        useEffect: bo,
        useImperativeHandle: function (e, n, a) {
          return (a = null != a ? a.concat([e]) : null), fo(4, 2, Co.bind(null, n, e), a);
        },
        useLayoutEffect: function (e, n) {
          return fo(4, 2, e, n);
        },
        useMemo: function (e, n) {
          var a = ao();
          return (n = void 0 === n ? null : n), (e = e()), (a.memoizedState = [e, n]), e;
        },
        useReducer: function (e, n, a) {
          var t = ao();
          return (
            (n = void 0 !== a ? a(n) : n),
            (t.memoizedState = t.baseState = n),
            (e = (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }).dispatch =
              No.bind(null, Yr, e)),
            [t.memoizedState, e]
          );
        },
        useRef: ho,
        useState: uo,
        useDebugValue: wo,
        useDeferredValue: function (e) {
          var n = uo(e),
            a = n[0],
            t = n[1];
          return (
            bo(
              function () {
                var n = Hr.transition;
                Hr.transition = 1;
                try {
                  t(e);
                } finally {
                  Hr.transition = n;
                }
              },
              [e]
            ),
            a
          );
        },
        useTransition: function () {
          var e = uo(!1),
            n = e[0];
          return ho((e = jo.bind(null, e[1]))), [e, n];
        },
        useMutableSource: function (e, n, a) {
          var t = ao();
          return (t.memoizedState = { refs: { getSnapshot: n, setSnapshot: null }, source: e, subscribe: a }), so(t, e, n, a);
        },
        useOpaqueIdentifier: function () {
          if (_r) {
            var e = !1,
              n = (function (e) {
                return { $$typeof: L, toString: e, valueOf: e };
              })(function () {
                throw (e || ((e = !0), a("r:" + (Vt++).toString(36))), Error(o(355)));
              }),
              a = uo(n)[1];
            return (
              0 == (2 & Yr.mode) &&
                ((Yr.flags |= 516),
                po(
                  5,
                  function () {
                    a("r:" + (Vt++).toString(36));
                  },
                  void 0,
                  null
                )),
              n
            );
          }
          return uo((n = "r:" + (Vt++).toString(36))), n;
        },
        unstable_isNewReconciler: !1
      },
      Mo = {
        readContext: nr,
        useCallback: xo,
        useContext: nr,
        useEffect: yo,
        useImperativeHandle: ko,
        useLayoutEffect: vo,
        useMemo: So,
        useReducer: ro,
        useRef: go,
        useState: function () {
          return ro(io);
        },
        useDebugValue: wo,
        useDeferredValue: function (e) {
          var n = ro(io),
            a = n[0],
            t = n[1];
          return (
            yo(
              function () {
                var n = Hr.transition;
                Hr.transition = 1;
                try {
                  t(e);
                } finally {
                  Hr.transition = n;
                }
              },
              [e]
            ),
            a
          );
        },
        useTransition: function () {
          var e = ro(io)[0];
          return [go().current, e];
        },
        useMutableSource: co,
        useOpaqueIdentifier: function () {
          return ro(io)[0];
        },
        unstable_isNewReconciler: !1
      },
      Ao = {
        readContext: nr,
        useCallback: xo,
        useContext: nr,
        useEffect: yo,
        useImperativeHandle: ko,
        useLayoutEffect: vo,
        useMemo: So,
        useReducer: oo,
        useRef: go,
        useState: function () {
          return oo(io);
        },
        useDebugValue: wo,
        useDeferredValue: function (e) {
          var n = oo(io),
            a = n[0],
            t = n[1];
          return (
            yo(
              function () {
                var n = Hr.transition;
                Hr.transition = 1;
                try {
                  t(e);
                } finally {
                  Hr.transition = n;
                }
              },
              [e]
            ),
            a
          );
        },
        useTransition: function () {
          var e = oo(io)[0];
          return [go().current, e];
        },
        useMutableSource: co,
        useOpaqueIdentifier: function () {
          return oo(io)[0];
        },
        unstable_isNewReconciler: !1
      },
      Po = k.ReactCurrentOwner,
      Bo = !1;
    function To(e, n, a, t) {
      n.child = null === e ? wr(n, null, a, t) : kr(n, e.child, a, t);
    }
    function Ro(e, n, a, t, i) {
      a = a.render;
      var r = n.ref;
      return (
        er(n, i),
        (t = no(e, n, a, t, r, i)),
        null === e || Bo
          ? ((n.flags |= 1), To(e, n, t, i), n.child)
          : ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~i), el(e, n, i))
      );
    }
    function Lo(e, n, a, t, i, r) {
      if (null === e) {
        var o = a.type;
        return "function" != typeof o || Ds(o) || void 0 !== o.defaultProps || null !== a.compare || void 0 !== a.defaultProps
          ? (((e = zs(a.type, null, t, n, n.mode, r)).ref = n.ref), (e.return = n), (n.child = e))
          : ((n.tag = 15), (n.type = o), _o(e, n, o, t, i, r));
      }
      return (
        (o = e.child),
        0 == (i & r) && ((i = o.memoizedProps), (a = null !== (a = a.compare) ? a : st)(i, t) && e.ref === n.ref)
          ? el(e, n, r)
          : ((n.flags |= 1), ((e = Us(o, t)).ref = n.ref), (e.return = n), (n.child = e))
      );
    }
    function _o(e, n, a, t, i, r) {
      if (null !== e && st(e.memoizedProps, t) && e.ref === n.ref) {
        if (((Bo = !1), 0 == (r & i))) return (n.lanes = e.lanes), el(e, n, r);
        0 != (16384 & e.flags) && (Bo = !0);
      }
      return Uo(e, n, a, t, r);
    }
    function Io(e, n, a) {
      var t = n.pendingProps,
        i = t.children,
        r = null !== e ? e.memoizedState : null;
      if ("hidden" === t.mode || "unstable-defer-without-hiding" === t.mode)
        if (0 == (4 & n.mode)) (n.memoizedState = { baseLanes: 0 }), fs(n, a);
        else {
          if (0 == (1073741824 & a))
            return (
              (e = null !== r ? r.baseLanes | a : a),
              (n.lanes = n.childLanes = 1073741824),
              (n.memoizedState = { baseLanes: e }),
              fs(n, e),
              null
            );
          (n.memoizedState = { baseLanes: 0 }), fs(n, null !== r ? r.baseLanes : a);
        }
      else null !== r ? ((t = r.baseLanes | a), (n.memoizedState = null)) : (t = a), fs(n, t);
      return To(e, n, i, a), n.child;
    }
    function Do(e, n) {
      var a = n.ref;
      ((null === e && null !== a) || (null !== e && e.ref !== a)) && (n.flags |= 128);
    }
    function Uo(e, n, a, t, i) {
      var r = pi(a) ? ui : si.current;
      return (
        (r = di(n, r)),
        er(n, i),
        (a = no(e, n, a, t, r, i)),
        null === e || Bo
          ? ((n.flags |= 1), To(e, n, a, i), n.child)
          : ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~i), el(e, n, i))
      );
    }
    function zo(e, n, a, t, i) {
      if (pi(a)) {
        var r = !0;
        mi(n);
      } else r = !1;
      if ((er(n, i), null === n.stateNode))
        null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)), gr(n, a, t), mr(n, a, t, i), (t = !0);
      else if (null === e) {
        var o = n.stateNode,
          l = n.memoizedProps;
        o.props = l;
        var s = o.context,
          c = a.contextType;
        "object" == typeof c && null !== c ? (c = nr(c)) : (c = di(n, (c = pi(a) ? ui : si.current)));
        var u = a.getDerivedStateFromProps,
          d = "function" == typeof u || "function" == typeof o.getSnapshotBeforeUpdate;
        d ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps) ||
          ((l !== t || s !== c) && fr(n, o, t, c)),
          (ar = !1);
        var p = n.memoizedState;
        (o.state = p),
          sr(n, t, o, i),
          (s = n.memoizedState),
          l !== t || p !== s || ci.current || ar
            ? ("function" == typeof u && (dr(n, a, u, t), (s = n.memoizedState)),
              (l = ar || hr(n, a, l, t, p, s, c))
                ? (d ||
                    ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
                    ("function" == typeof o.componentWillMount && o.componentWillMount(),
                    "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                  "function" == typeof o.componentDidMount && (n.flags |= 4))
                : ("function" == typeof o.componentDidMount && (n.flags |= 4), (n.memoizedProps = t), (n.memoizedState = s)),
              (o.props = t),
              (o.state = s),
              (o.context = c),
              (t = l))
            : ("function" == typeof o.componentDidMount && (n.flags |= 4), (t = !1));
      } else {
        (o = n.stateNode),
          ir(e, n),
          (l = n.memoizedProps),
          (c = n.type === n.elementType ? l : Hi(n.type, l)),
          (o.props = c),
          (d = n.pendingProps),
          (p = o.context),
          "object" == typeof (s = a.contextType) && null !== s ? (s = nr(s)) : (s = di(n, (s = pi(a) ? ui : si.current)));
        var h = a.getDerivedStateFromProps;
        (u = "function" == typeof h || "function" == typeof o.getSnapshotBeforeUpdate) ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps) ||
          ((l !== d || p !== s) && fr(n, o, t, s)),
          (ar = !1),
          (p = n.memoizedState),
          (o.state = p),
          sr(n, t, o, i);
        var g = n.memoizedState;
        l !== d || p !== g || ci.current || ar
          ? ("function" == typeof h && (dr(n, a, h, t), (g = n.memoizedState)),
            (c = ar || hr(n, a, c, t, p, g, s))
              ? (u ||
                  ("function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate) ||
                  ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(t, g, s),
                  "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(t, g, s)),
                "function" == typeof o.componentDidUpdate && (n.flags |= 4),
                "function" == typeof o.getSnapshotBeforeUpdate && (n.flags |= 256))
              : ("function" != typeof o.componentDidUpdate || (l === e.memoizedProps && p === e.memoizedState) || (n.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate || (l === e.memoizedProps && p === e.memoizedState) || (n.flags |= 256),
                (n.memoizedProps = t),
                (n.memoizedState = g)),
            (o.props = t),
            (o.state = g),
            (o.context = s),
            (t = c))
          : ("function" != typeof o.componentDidUpdate || (l === e.memoizedProps && p === e.memoizedState) || (n.flags |= 4),
            "function" != typeof o.getSnapshotBeforeUpdate || (l === e.memoizedProps && p === e.memoizedState) || (n.flags |= 256),
            (t = !1));
      }
      return Fo(e, n, a, t, r, i);
    }
    function Fo(e, n, a, t, i, r) {
      Do(e, n);
      var o = 0 != (64 & n.flags);
      if (!t && !o) return i && bi(n, a, !1), el(e, n, r);
      (t = n.stateNode), (Po.current = n);
      var l = o && "function" != typeof a.getDerivedStateFromError ? null : t.render();
      return (
        (n.flags |= 1),
        null !== e && o ? ((n.child = kr(n, e.child, null, r)), (n.child = kr(n, null, l, r))) : To(e, n, l, r),
        (n.memoizedState = t.state),
        i && bi(n, a, !0),
        n.child
      );
    }
    function Go(e) {
      var n = e.stateNode;
      n.pendingContext ? gi(0, n.pendingContext, n.pendingContext !== n.context) : n.context && gi(0, n.context, !1),
        Er(e, n.containerInfo);
    }
    var Wo,
      Ko,
      Vo,
      Ho = { dehydrated: null, retryLane: 0 };
    function $o(e, n, a) {
      var t,
        i = n.pendingProps,
        r = Br.current,
        o = !1;
      return (
        (t = 0 != (64 & n.flags)) || (t = (null === e || null !== e.memoizedState) && 0 != (2 & r)),
        t
          ? ((o = !0), (n.flags &= -65))
          : (null !== e && null === e.memoizedState) || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (r |= 1),
        oi(Br, 1 & r),
        null === e
          ? (void 0 !== i.fallback && Ur(n),
            (e = i.children),
            (r = i.fallback),
            o
              ? ((e = Yo(n, e, r, a)), (n.child.memoizedState = { baseLanes: a }), (n.memoizedState = Ho), e)
              : "number" == typeof i.unstable_expectedLoadTime
              ? ((e = Yo(n, e, r, a)), (n.child.memoizedState = { baseLanes: a }), (n.memoizedState = Ho), (n.lanes = 33554432), e)
              : (((a = Gs({ mode: "visible", children: e }, n.mode, a, null)).return = n), (n.child = a)))
          : (e.memoizedState,
            o
              ? ((i = Qo(e, n, i.children, i.fallback, a)),
                (o = n.child),
                (r = e.child.memoizedState),
                (o.memoizedState = null === r ? { baseLanes: a } : { baseLanes: r.baseLanes | a }),
                (o.childLanes = e.childLanes & ~a),
                (n.memoizedState = Ho),
                i)
              : ((a = Zo(e, n, i.children, a)), (n.memoizedState = null), a))
      );
    }
    function Yo(e, n, a, t) {
      var i = e.mode,
        r = e.child;
      return (
        (n = { mode: "hidden", children: n }),
        0 == (2 & i) && null !== r ? ((r.childLanes = 0), (r.pendingProps = n)) : (r = Gs(n, i, 0, null)),
        (a = Fs(a, i, t, null)),
        (r.return = e),
        (a.return = e),
        (r.sibling = a),
        (e.child = r),
        a
      );
    }
    function Zo(e, n, a, t) {
      var i = e.child;
      return (
        (e = i.sibling),
        (a = Us(i, { mode: "visible", children: a })),
        0 == (2 & n.mode) && (a.lanes = t),
        (a.return = n),
        (a.sibling = null),
        null !== e && ((e.nextEffect = null), (e.flags = 8), (n.firstEffect = n.lastEffect = e)),
        (n.child = a)
      );
    }
    function Qo(e, n, a, t, i) {
      var r = n.mode,
        o = e.child;
      e = o.sibling;
      var l = { mode: "hidden", children: a };
      return (
        0 == (2 & r) && n.child !== o
          ? (((a = n.child).childLanes = 0),
            (a.pendingProps = l),
            null !== (o = a.lastEffect)
              ? ((n.firstEffect = a.firstEffect), (n.lastEffect = o), (o.nextEffect = null))
              : (n.firstEffect = n.lastEffect = null))
          : (a = Us(o, l)),
        null !== e ? (t = Us(e, t)) : ((t = Fs(t, r, i, null)).flags |= 2),
        (t.return = n),
        (a.return = n),
        (a.sibling = t),
        (n.child = a),
        t
      );
    }
    function Xo(e, n) {
      e.lanes |= n;
      var a = e.alternate;
      null !== a && (a.lanes |= n), Ji(e.return, n);
    }
    function qo(e, n, a, t, i, r) {
      var o = e.memoizedState;
      null === o
        ? (e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: t, tail: a, tailMode: i, lastEffect: r })
        : ((o.isBackwards = n),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = t),
          (o.tail = a),
          (o.tailMode = i),
          (o.lastEffect = r));
    }
    function Jo(e, n, a) {
      var t = n.pendingProps,
        i = t.revealOrder,
        r = t.tail;
      if ((To(e, n, t.children, a), 0 != (2 & (t = Br.current)))) (t = (1 & t) | 2), (n.flags |= 64);
      else {
        if (null !== e && 0 != (64 & e.flags))
          e: for (e = n.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && Xo(e, a);
            else if (19 === e.tag) Xo(e, a);
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
        t &= 1;
      }
      if ((oi(Br, t), 0 == (2 & n.mode))) n.memoizedState = null;
      else
        switch (i) {
          case "forwards":
            for (a = n.child, i = null; null !== a; ) null !== (e = a.alternate) && null === Tr(e) && (i = a), (a = a.sibling);
            null === (a = i) ? ((i = n.child), (n.child = null)) : ((i = a.sibling), (a.sibling = null)), qo(n, !1, i, a, r, n.lastEffect);
            break;
          case "backwards":
            for (a = null, i = n.child, n.child = null; null !== i; ) {
              if (null !== (e = i.alternate) && null === Tr(e)) {
                n.child = i;
                break;
              }
              (e = i.sibling), (i.sibling = a), (a = i), (i = e);
            }
            qo(n, !0, a, null, r, n.lastEffect);
            break;
          case "together":
            qo(n, !1, null, null, void 0, n.lastEffect);
            break;
          default:
            n.memoizedState = null;
        }
      return n.child;
    }
    function el(e, n, a) {
      if ((null !== e && (n.dependencies = e.dependencies), (Rl |= n.lanes), 0 != (a & n.childLanes))) {
        if (null !== e && n.child !== e.child) throw Error(o(153));
        if (null !== n.child) {
          for (a = Us((e = n.child), e.pendingProps), n.child = a, a.return = n; null !== e.sibling; )
            (e = e.sibling), ((a = a.sibling = Us(e, e.pendingProps)).return = n);
          a.sibling = null;
        }
        return n.child;
      }
      return null;
    }
    function nl(e, n) {
      if (!_r)
        switch (e.tailMode) {
          case "hidden":
            n = e.tail;
            for (var a = null; null !== n; ) null !== n.alternate && (a = n), (n = n.sibling);
            null === a ? (e.tail = null) : (a.sibling = null);
            break;
          case "collapsed":
            a = e.tail;
            for (var t = null; null !== a; ) null !== a.alternate && (t = a), (a = a.sibling);
            null === t ? (n || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (t.sibling = null);
        }
    }
    function al(e, n, a) {
      var t = n.pendingProps;
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
          return pi(n.type) && hi(), null;
        case 3:
          return (
            Mr(),
            ri(ci),
            ri(si),
            Kr(),
            (t = n.stateNode).pendingContext && ((t.context = t.pendingContext), (t.pendingContext = null)),
            (null !== e && null !== e.child) || (Fr(n) ? (n.flags |= 4) : t.hydrate || (n.flags |= 256)),
            null
          );
        case 5:
          Pr(n);
          var r = Or(Nr.current);
          if (((a = n.type), null !== e && null != n.stateNode)) Ko(e, n, a, t), e.ref !== n.ref && (n.flags |= 128);
          else {
            if (!t) {
              if (null === n.stateNode) throw Error(o(166));
              return null;
            }
            if (((e = Or(Sr.current)), Fr(n))) {
              (t = n.stateNode), (a = n.type);
              var l = n.memoizedProps;
              switch (((t[$t] = n), (t[Yt] = l), a)) {
                case "dialog":
                  jt("cancel", t), jt("close", t);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  jt("load", t);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < kt.length; e++) jt(kt[e], t);
                  break;
                case "source":
                  jt("error", t);
                  break;
                case "img":
                case "image":
                case "link":
                  jt("error", t), jt("load", t);
                  break;
                case "details":
                  jt("toggle", t);
                  break;
                case "input":
                  ee(t, l), jt("invalid", t);
                  break;
                case "select":
                  (t._wrapperState = { wasMultiple: !!l.multiple }), jt("invalid", t);
                  break;
                case "textarea":
                  se(t, l), jt("invalid", t);
              }
              for (var c in (xe(a, l), (e = null), l))
                l.hasOwnProperty(c) &&
                  ((r = l[c]),
                  "children" === c
                    ? "string" == typeof r
                      ? t.textContent !== r && (e = ["children", r])
                      : "number" == typeof r && t.textContent !== "" + r && (e = ["children", "" + r])
                    : s.hasOwnProperty(c) && null != r && "onScroll" === c && jt("scroll", t));
              switch (a) {
                case "input":
                  Q(t), te(t, l, !0);
                  break;
                case "textarea":
                  Q(t), ue(t);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof l.onClick && (t.onclick = Lt);
              }
              (t = e), (n.updateQueue = t), null !== t && (n.flags |= 4);
            } else {
              switch (
                ((c = 9 === r.nodeType ? r : r.ownerDocument),
                e === de && (e = he(a)),
                e === de
                  ? "script" === a
                    ? (((e = c.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                    : "string" == typeof t.is
                    ? (e = c.createElement(a, { is: t.is }))
                    : ((e = c.createElement(a)), "select" === a && ((c = e), t.multiple ? (c.multiple = !0) : t.size && (c.size = t.size)))
                  : (e = c.createElementNS(e, a)),
                (e[$t] = n),
                (e[Yt] = t),
                Wo(e, n),
                (n.stateNode = e),
                (c = Se(a, t)),
                a)
              ) {
                case "dialog":
                  jt("cancel", e), jt("close", e), (r = t);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  jt("load", e), (r = t);
                  break;
                case "video":
                case "audio":
                  for (r = 0; r < kt.length; r++) jt(kt[r], e);
                  r = t;
                  break;
                case "source":
                  jt("error", e), (r = t);
                  break;
                case "img":
                case "image":
                case "link":
                  jt("error", e), jt("load", e), (r = t);
                  break;
                case "details":
                  jt("toggle", e), (r = t);
                  break;
                case "input":
                  ee(e, t), (r = J(e, t)), jt("invalid", e);
                  break;
                case "option":
                  r = re(e, t);
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!t.multiple }), (r = i({}, t, { value: void 0 })), jt("invalid", e);
                  break;
                case "textarea":
                  se(e, t), (r = le(e, t)), jt("invalid", e);
                  break;
                default:
                  r = t;
              }
              xe(a, r);
              var u = r;
              for (l in u)
                if (u.hasOwnProperty(l)) {
                  var d = u[l];
                  "style" === l
                    ? ke(e, d)
                    : "dangerouslySetInnerHTML" === l
                    ? null != (d = d ? d.__html : void 0) && me(e, d)
                    : "children" === l
                    ? "string" == typeof d
                      ? ("textarea" !== a || "" !== d) && be(e, d)
                      : "number" == typeof d && be(e, "" + d)
                    : "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (s.hasOwnProperty(l) ? null != d && "onScroll" === l && jt("scroll", e) : null != d && C(e, l, d, c));
                }
              switch (a) {
                case "input":
                  Q(e), te(e, t, !1);
                  break;
                case "textarea":
                  Q(e), ue(e);
                  break;
                case "option":
                  null != t.value && e.setAttribute("value", "" + Y(t.value));
                  break;
                case "select":
                  (e.multiple = !!t.multiple),
                    null != (l = t.value) ? oe(e, !!t.multiple, l, !1) : null != t.defaultValue && oe(e, !!t.multiple, t.defaultValue, !0);
                  break;
                default:
                  "function" == typeof r.onClick && (e.onclick = Lt);
              }
              Dt(a, t) && (n.flags |= 4);
            }
            null !== n.ref && (n.flags |= 128);
          }
          return null;
        case 6:
          if (e && null != n.stateNode) Vo(0, n, e.memoizedProps, t);
          else {
            if ("string" != typeof t && null === n.stateNode) throw Error(o(166));
            (a = Or(Nr.current)),
              Or(Sr.current),
              Fr(n)
                ? ((t = n.stateNode), (a = n.memoizedProps), (t[$t] = n), t.nodeValue !== a && (n.flags |= 4))
                : (((t = (9 === a.nodeType ? a : a.ownerDocument).createTextNode(t))[$t] = n), (n.stateNode = t));
          }
          return null;
        case 13:
          return (
            ri(Br),
            (t = n.memoizedState),
            0 != (64 & n.flags)
              ? ((n.lanes = a), n)
              : ((t = null !== t),
                (a = !1),
                null === e ? void 0 !== n.memoizedProps.fallback && Fr(n) : (a = null !== e.memoizedState),
                t &&
                  !a &&
                  0 != (2 & n.mode) &&
                  ((null === e && !0 !== n.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & Br.current)
                    ? 0 === Pl && (Pl = 3)
                    : ((0 !== Pl && 3 !== Pl) || (Pl = 4), null === Nl || (0 == (134217727 & Rl) && 0 == (134217727 & Ll)) || ds(Nl, El))),
                (t || a) && (n.flags |= 4),
                null)
          );
        case 4:
          return Mr(), null === e && Ot(n.stateNode.containerInfo), null;
        case 10:
          return qi(n), null;
        case 17:
          return pi(n.type) && hi(), null;
        case 19:
          if ((ri(Br), null === (t = n.memoizedState))) return null;
          if (((l = 0 != (64 & n.flags)), null === (c = t.rendering)))
            if (l) nl(t, !1);
            else {
              if (0 !== Pl || (null !== e && 0 != (64 & e.flags)))
                for (e = n.child; null !== e; ) {
                  if (null !== (c = Tr(e))) {
                    for (
                      n.flags |= 64,
                        nl(t, !1),
                        null !== (l = c.updateQueue) && ((n.updateQueue = l), (n.flags |= 4)),
                        null === t.lastEffect && (n.firstEffect = null),
                        n.lastEffect = t.lastEffect,
                        t = a,
                        a = n.child;
                      null !== a;

                    )
                      (e = t),
                        ((l = a).flags &= 2),
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
                        (a = a.sibling);
                    return oi(Br, (1 & Br.current) | 2), n.child;
                  }
                  e = e.sibling;
                }
              null !== t.tail && Di() > Ul && ((n.flags |= 64), (l = !0), nl(t, !1), (n.lanes = 33554432));
            }
          else {
            if (!l)
              if (null !== (e = Tr(c))) {
                if (
                  ((n.flags |= 64),
                  (l = !0),
                  null !== (a = e.updateQueue) && ((n.updateQueue = a), (n.flags |= 4)),
                  nl(t, !0),
                  null === t.tail && "hidden" === t.tailMode && !c.alternate && !_r)
                )
                  return null !== (n = n.lastEffect = t.lastEffect) && (n.nextEffect = null), null;
              } else
                2 * Di() - t.renderingStartTime > Ul && 1073741824 !== a && ((n.flags |= 64), (l = !0), nl(t, !1), (n.lanes = 33554432));
            t.isBackwards
              ? ((c.sibling = n.child), (n.child = c))
              : (null !== (a = t.last) ? (a.sibling = c) : (n.child = c), (t.last = c));
          }
          return null !== t.tail
            ? ((a = t.tail),
              (t.rendering = a),
              (t.tail = a.sibling),
              (t.lastEffect = n.lastEffect),
              (t.renderingStartTime = Di()),
              (a.sibling = null),
              (n = Br.current),
              oi(Br, l ? (1 & n) | 2 : 1 & n),
              a)
            : null;
        case 23:
        case 24:
          return (
            ms(),
            null !== e &&
              (null !== e.memoizedState) != (null !== n.memoizedState) &&
              "unstable-defer-without-hiding" !== t.mode &&
              (n.flags |= 4),
            null
          );
      }
      throw Error(o(156, n.tag));
    }
    function tl(e) {
      switch (e.tag) {
        case 1:
          pi(e.type) && hi();
          var n = e.flags;
          return 4096 & n ? ((e.flags = (-4097 & n) | 64), e) : null;
        case 3:
          if ((Mr(), ri(ci), ri(si), Kr(), 0 != (64 & (n = e.flags)))) throw Error(o(285));
          return (e.flags = (-4097 & n) | 64), e;
        case 5:
          return Pr(e), null;
        case 13:
          return ri(Br), 4096 & (n = e.flags) ? ((e.flags = (-4097 & n) | 64), e) : null;
        case 19:
          return ri(Br), null;
        case 4:
          return Mr(), null;
        case 10:
          return qi(e), null;
        case 23:
        case 24:
          return ms(), null;
        default:
          return null;
      }
    }
    function il(e, n) {
      try {
        var a = "",
          t = n;
        do {
          (a += H(t)), (t = t.return);
        } while (t);
        var i = a;
      } catch (e) {
        i = "\nError generating stack: " + e.message + "\n" + e.stack;
      }
      return { value: e, source: n, stack: i };
    }
    function rl(e, n) {
      try {
        console.error(n.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    (Wo = function (e, n) {
      for (var a = n.child; null !== a; ) {
        if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
        else if (4 !== a.tag && null !== a.child) {
          (a.child.return = a), (a = a.child);
          continue;
        }
        if (a === n) break;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === n) return;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }),
      (Ko = function (e, n, a, t) {
        var r = e.memoizedProps;
        if (r !== t) {
          (e = n.stateNode), Or(Sr.current);
          var o,
            l = null;
          switch (a) {
            case "input":
              (r = J(e, r)), (t = J(e, t)), (l = []);
              break;
            case "option":
              (r = re(e, r)), (t = re(e, t)), (l = []);
              break;
            case "select":
              (r = i({}, r, { value: void 0 })), (t = i({}, t, { value: void 0 })), (l = []);
              break;
            case "textarea":
              (r = le(e, r)), (t = le(e, t)), (l = []);
              break;
            default:
              "function" != typeof r.onClick && "function" == typeof t.onClick && (e.onclick = Lt);
          }
          for (d in (xe(a, t), (a = null), r))
            if (!t.hasOwnProperty(d) && r.hasOwnProperty(d) && null != r[d])
              if ("style" === d) {
                var c = r[d];
                for (o in c) c.hasOwnProperty(o) && (a || (a = {}), (a[o] = ""));
              } else
                "dangerouslySetInnerHTML" !== d &&
                  "children" !== d &&
                  "suppressContentEditableWarning" !== d &&
                  "suppressHydrationWarning" !== d &&
                  "autoFocus" !== d &&
                  (s.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
          for (d in t) {
            var u = t[d];
            if (((c = null != r ? r[d] : void 0), t.hasOwnProperty(d) && u !== c && (null != u || null != c)))
              if ("style" === d)
                if (c) {
                  for (o in c) !c.hasOwnProperty(o) || (u && u.hasOwnProperty(o)) || (a || (a = {}), (a[o] = ""));
                  for (o in u) u.hasOwnProperty(o) && c[o] !== u[o] && (a || (a = {}), (a[o] = u[o]));
                } else a || (l || (l = []), l.push(d, a)), (a = u);
              else
                "dangerouslySetInnerHTML" === d
                  ? ((u = u ? u.__html : void 0), (c = c ? c.__html : void 0), null != u && c !== u && (l = l || []).push(d, u))
                  : "children" === d
                  ? ("string" != typeof u && "number" != typeof u) || (l = l || []).push(d, "" + u)
                  : "suppressContentEditableWarning" !== d &&
                    "suppressHydrationWarning" !== d &&
                    (s.hasOwnProperty(d)
                      ? (null != u && "onScroll" === d && jt("scroll", e), l || c === u || (l = []))
                      : "object" == typeof u && null !== u && u.$$typeof === L
                      ? u.toString()
                      : (l = l || []).push(d, u));
          }
          a && (l = l || []).push("style", a);
          var d = l;
          (n.updateQueue = d) && (n.flags |= 4);
        }
      }),
      (Vo = function (e, n, a, t) {
        a !== t && (n.flags |= 4);
      });
    var ol = "function" == typeof WeakMap ? WeakMap : Map;
    function ll(e, n, a) {
      ((a = rr(-1, a)).tag = 3), (a.payload = { element: null });
      var t = n.value;
      return (
        (a.callback = function () {
          Wl || ((Wl = !0), (Kl = t)), rl(0, n);
        }),
        a
      );
    }
    function sl(e, n, a) {
      (a = rr(-1, a)).tag = 3;
      var t = e.type.getDerivedStateFromError;
      if ("function" == typeof t) {
        var i = n.value;
        a.payload = function () {
          return rl(0, n), t(i);
        };
      }
      var r = e.stateNode;
      return (
        null !== r &&
          "function" == typeof r.componentDidCatch &&
          (a.callback = function () {
            "function" != typeof t && (null === Vl ? (Vl = new Set([this])) : Vl.add(this), rl(0, n));
            var e = n.stack;
            this.componentDidCatch(n.value, { componentStack: null !== e ? e : "" });
          }),
        a
      );
    }
    var cl = "function" == typeof WeakSet ? WeakSet : Set;
    function ul(e) {
      var n = e.ref;
      if (null !== n)
        if ("function" == typeof n)
          try {
            n(null);
          } catch (n) {
            Ts(e, n);
          }
        else n.current = null;
    }
    function dl(e, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (256 & n.flags && null !== e) {
            var a = e.memoizedProps,
              t = e.memoizedState;
            (n = (e = n.stateNode).getSnapshotBeforeUpdate(n.elementType === n.type ? a : Hi(n.type, a), t)),
              (e.__reactInternalSnapshotBeforeUpdate = n);
          }
          return;
        case 3:
          return void (256 & n.flags && Gt(n.stateNode.containerInfo));
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(o(163));
    }
    function pl(e, n, a) {
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          if (null !== (n = null !== (n = a.updateQueue) ? n.lastEffect : null)) {
            e = n = n.next;
            do {
              if (3 == (3 & e.tag)) {
                var t = e.create;
                e.destroy = t();
              }
              e = e.next;
            } while (e !== n);
          }
          if (null !== (n = null !== (n = a.updateQueue) ? n.lastEffect : null)) {
            e = n = n.next;
            do {
              var i = e;
              (t = i.next), 0 != (4 & (i = i.tag)) && 0 != (1 & i) && (As(a, e), Ms(a, e)), (e = t);
            } while (e !== n);
          }
          return;
        case 1:
          return (
            (e = a.stateNode),
            4 & a.flags &&
              (null === n
                ? e.componentDidMount()
                : ((t = a.elementType === a.type ? n.memoizedProps : Hi(a.type, n.memoizedProps)),
                  e.componentDidUpdate(t, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
            void (null !== (n = a.updateQueue) && cr(a, n, e))
          );
        case 3:
          if (null !== (n = a.updateQueue)) {
            if (((e = null), null !== a.child))
              switch (a.child.tag) {
                case 5:
                  e = a.child.stateNode;
                  break;
                case 1:
                  e = a.child.stateNode;
              }
            cr(a, n, e);
          }
          return;
        case 5:
          return (e = a.stateNode), void (null === n && 4 & a.flags && Dt(a.type, a.memoizedProps) && e.focus());
        case 6:
        case 4:
        case 12:
          return;
        case 13:
          return void (
            null === a.memoizedState &&
            ((a = a.alternate), null !== a && ((a = a.memoizedState), null !== a && ((a = a.dehydrated), null !== a && wn(a))))
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
    function hl(e, n) {
      for (var a = e; ; ) {
        if (5 === a.tag) {
          var t = a.stateNode;
          if (n) "function" == typeof (t = t.style).setProperty ? t.setProperty("display", "none", "important") : (t.display = "none");
          else {
            t = a.stateNode;
            var i = a.memoizedProps.style;
            (i = null != i && i.hasOwnProperty("display") ? i.display : null), (t.style.display = Ce("display", i));
          }
        } else if (6 === a.tag) a.stateNode.nodeValue = n ? "" : a.memoizedProps;
        else if (((23 !== a.tag && 24 !== a.tag) || null === a.memoizedState || a === e) && null !== a.child) {
          (a.child.return = a), (a = a.child);
          continue;
        }
        if (a === e) break;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === e) return;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }
    function gl(e, n) {
      if (vi && "function" == typeof vi.onCommitFiberUnmount)
        try {
          vi.onCommitFiberUnmount(yi, n);
        } catch (e) {}
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (null !== (e = n.updateQueue) && null !== (e = e.lastEffect)) {
            var a = (e = e.next);
            do {
              var t = a,
                i = t.destroy;
              if (((t = t.tag), void 0 !== i))
                if (0 != (4 & t)) As(n, a);
                else {
                  t = n;
                  try {
                    i();
                  } catch (e) {
                    Ts(t, e);
                  }
                }
              a = a.next;
            } while (a !== e);
          }
          break;
        case 1:
          if ((ul(n), "function" == typeof (e = n.stateNode).componentWillUnmount))
            try {
              (e.props = n.memoizedProps), (e.state = n.memoizedState), e.componentWillUnmount();
            } catch (e) {
              Ts(n, e);
            }
          break;
        case 5:
          ul(n);
          break;
        case 4:
          yl(e, n);
      }
    }
    function fl(e) {
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
    function ml(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function bl(e) {
      e: {
        for (var n = e.return; null !== n; ) {
          if (ml(n)) break e;
          n = n.return;
        }
        throw Error(o(160));
      }
      var a = n;
      switch (((n = a.stateNode), a.tag)) {
        case 5:
          var t = !1;
          break;
        case 3:
        case 4:
          (n = n.containerInfo), (t = !0);
          break;
        default:
          throw Error(o(161));
      }
      16 & a.flags && (be(n, ""), (a.flags &= -17));
      e: n: for (a = e; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || ml(a.return)) {
            a = null;
            break e;
          }
          a = a.return;
        }
        for (a.sibling.return = a.return, a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (2 & a.flags) continue n;
          if (null === a.child || 4 === a.tag) continue n;
          (a.child.return = a), (a = a.child);
        }
        if (!(2 & a.flags)) {
          a = a.stateNode;
          break e;
        }
      }
      t
        ? (function e(n, a, t) {
            var i = n.tag,
              r = 5 === i || 6 === i;
            if (r)
              (n = r ? n.stateNode : n.stateNode.instance),
                a
                  ? 8 === t.nodeType
                    ? t.parentNode.insertBefore(n, a)
                    : t.insertBefore(n, a)
                  : (8 === t.nodeType ? (a = t.parentNode).insertBefore(n, t) : (a = t).appendChild(n),
                    (null !== (t = t._reactRootContainer) && void 0 !== t) || null !== a.onclick || (a.onclick = Lt));
            else if (4 !== i && null !== (n = n.child)) for (e(n, a, t), n = n.sibling; null !== n; ) e(n, a, t), (n = n.sibling);
          })(e, a, n)
        : (function e(n, a, t) {
            var i = n.tag,
              r = 5 === i || 6 === i;
            if (r) (n = r ? n.stateNode : n.stateNode.instance), a ? t.insertBefore(n, a) : t.appendChild(n);
            else if (4 !== i && null !== (n = n.child)) for (e(n, a, t), n = n.sibling; null !== n; ) e(n, a, t), (n = n.sibling);
          })(e, a, n);
    }
    function yl(e, n) {
      for (var a, t, i = n, r = !1; ; ) {
        if (!r) {
          r = i.return;
          e: for (;;) {
            if (null === r) throw Error(o(160));
            switch (((a = r.stateNode), r.tag)) {
              case 5:
                t = !1;
                break e;
              case 3:
              case 4:
                (a = a.containerInfo), (t = !0);
                break e;
            }
            r = r.return;
          }
          r = !0;
        }
        if (5 === i.tag || 6 === i.tag) {
          e: for (var l = e, s = i, c = s; ; )
            if ((gl(l, c), null !== c.child && 4 !== c.tag)) (c.child.return = c), (c = c.child);
            else {
              if (c === s) break e;
              for (; null === c.sibling; ) {
                if (null === c.return || c.return === s) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
          t ? ((l = a), (s = i.stateNode), 8 === l.nodeType ? l.parentNode.removeChild(s) : l.removeChild(s)) : a.removeChild(i.stateNode);
        } else if (4 === i.tag) {
          if (null !== i.child) {
            (a = i.stateNode.containerInfo), (t = !0), (i.child.return = i), (i = i.child);
            continue;
          }
        } else if ((gl(e, i), null !== i.child)) {
          (i.child.return = i), (i = i.child);
          continue;
        }
        if (i === n) break;
        for (; null === i.sibling; ) {
          if (null === i.return || i.return === n) return;
          4 === (i = i.return).tag && (r = !1);
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    function vl(e, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var a = n.updateQueue;
          if (null !== (a = null !== a ? a.lastEffect : null)) {
            var t = (a = a.next);
            do {
              3 == (3 & t.tag) && ((e = t.destroy), (t.destroy = void 0), void 0 !== e && e()), (t = t.next);
            } while (t !== a);
          }
          return;
        case 1:
          return;
        case 5:
          if (null != (a = n.stateNode)) {
            t = n.memoizedProps;
            var i = null !== e ? e.memoizedProps : t;
            e = n.type;
            var r = n.updateQueue;
            if (((n.updateQueue = null), null !== r)) {
              for (
                a[Yt] = t, "input" === e && "radio" === t.type && null != t.name && ne(a, t), Se(e, i), n = Se(e, t), i = 0;
                i < r.length;
                i += 2
              ) {
                var l = r[i],
                  s = r[i + 1];
                "style" === l ? ke(a, s) : "dangerouslySetInnerHTML" === l ? me(a, s) : "children" === l ? be(a, s) : C(a, l, s, n);
              }
              switch (e) {
                case "input":
                  ae(a, t);
                  break;
                case "textarea":
                  ce(a, t);
                  break;
                case "select":
                  (e = a._wrapperState.wasMultiple),
                    (a._wrapperState.wasMultiple = !!t.multiple),
                    null != (r = t.value)
                      ? oe(a, !!t.multiple, r, !1)
                      : e !== !!t.multiple &&
                        (null != t.defaultValue ? oe(a, !!t.multiple, t.defaultValue, !0) : oe(a, !!t.multiple, t.multiple ? [] : "", !1));
              }
            }
          }
          return;
        case 6:
          if (null === n.stateNode) throw Error(o(162));
          return void (n.stateNode.nodeValue = n.memoizedProps);
        case 3:
          return void ((a = n.stateNode).hydrate && ((a.hydrate = !1), wn(a.containerInfo)));
        case 12:
          return;
        case 13:
          return null !== n.memoizedState && ((Dl = Di()), hl(n.child, !0)), void Cl(n);
        case 19:
          return void Cl(n);
        case 17:
          return;
        case 23:
        case 24:
          return void hl(n, null !== n.memoizedState);
      }
      throw Error(o(163));
    }
    function Cl(e) {
      var n = e.updateQueue;
      if (null !== n) {
        e.updateQueue = null;
        var a = e.stateNode;
        null === a && (a = e.stateNode = new cl()),
          n.forEach(function (n) {
            var t = Ls.bind(null, e, n);
            a.has(n) || (a.add(n), n.then(t, t));
          });
      }
    }
    function kl(e, n) {
      return (
        null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && null !== (n = n.memoizedState) && null === n.dehydrated
      );
    }
    var wl = Math.ceil,
      xl = k.ReactCurrentDispatcher,
      Sl = k.ReactCurrentOwner,
      jl = 0,
      Nl = null,
      Ol = null,
      El = 0,
      Ml = 0,
      Al = ii(0),
      Pl = 0,
      Bl = null,
      Tl = 0,
      Rl = 0,
      Ll = 0,
      _l = 0,
      Il = null,
      Dl = 0,
      Ul = 1 / 0;
    function zl() {
      Ul = Di() + 500;
    }
    var Fl,
      Gl = null,
      Wl = !1,
      Kl = null,
      Vl = null,
      Hl = !1,
      $l = null,
      Yl = 90,
      Zl = [],
      Ql = [],
      Xl = null,
      ql = 0,
      Jl = null,
      es = -1,
      ns = 0,
      as = 0,
      ts = null,
      is = !1;
    function rs() {
      return 0 != (48 & jl) ? Di() : -1 !== es ? es : (es = Di());
    }
    function os(e) {
      if (0 == (2 & (e = e.mode))) return 1;
      if (0 == (4 & e)) return 99 === Ui() ? 1 : 2;
      if ((0 === ns && (ns = Tl), 0 !== Vi.transition)) {
        0 !== as && (as = null !== Il ? Il.pendingLanes : 0), (e = ns);
        var n = 4186112 & ~as;
        return 0 === (n &= -n) && 0 === (n = (e = 4186112 & ~e) & -e) && (n = 8192), n;
      }
      return (
        (e = Ui()),
        0 != (4 & jl) && 98 === e
          ? (e = zn(12, ns))
          : (e = zn(
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
              ns
            )),
        e
      );
    }
    function ls(e, n, a) {
      if (50 < ql) throw ((ql = 0), (Jl = null), Error(o(185)));
      if (null === (e = ss(e, n))) return null;
      Wn(e, n, a), e === Nl && ((Ll |= n), 4 === Pl && ds(e, El));
      var t = Ui();
      1 === n
        ? 0 != (8 & jl) && 0 == (48 & jl)
          ? ps(e)
          : (cs(e, a), 0 === jl && (zl(), Wi()))
        : (0 == (4 & jl) || (98 !== t && 99 !== t) || (null === Xl ? (Xl = new Set([e])) : Xl.add(e)), cs(e, a)),
        (Il = e);
    }
    function ss(e, n) {
      e.lanes |= n;
      var a = e.alternate;
      for (null !== a && (a.lanes |= n), a = e, e = e.return; null !== e; )
        (e.childLanes |= n), null !== (a = e.alternate) && (a.childLanes |= n), (a = e), (e = e.return);
      return 3 === a.tag ? a.stateNode : null;
    }
    function cs(e, n) {
      for (var a = e.callbackNode, t = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
        var s = 31 - Kn(l),
          c = 1 << s,
          u = r[s];
        if (-1 === u) {
          if (0 == (c & t) || 0 != (c & i)) {
            (u = n), In(c);
            var d = _n;
            r[s] = 10 <= d ? u + 250 : 6 <= d ? u + 5e3 : -1;
          }
        } else u <= n && (e.expiredLanes |= c);
        l &= ~c;
      }
      if (((t = Dn(e, e === Nl ? El : 0)), (n = _n), 0 === t))
        null !== a && (a !== Bi && wi(a), (e.callbackNode = null), (e.callbackPriority = 0));
      else {
        if (null !== a) {
          if (e.callbackPriority === n) return;
          a !== Bi && wi(a);
        }
        15 === n
          ? ((a = ps.bind(null, e)), null === Ri ? ((Ri = [a]), (Li = ki(Oi, Ki))) : Ri.push(a), (a = Bi))
          : 14 === n
          ? (a = Gi(99, ps.bind(null, e)))
          : (a = Gi(
              (a = (function (e) {
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
              us.bind(null, e)
            )),
          (e.callbackPriority = n),
          (e.callbackNode = a);
      }
    }
    function us(e) {
      if (((es = -1), (as = ns = 0), 0 != (48 & jl))) throw Error(o(327));
      var n = e.callbackNode;
      if (Es() && e.callbackNode !== n) return null;
      var a = Dn(e, e === Nl ? El : 0);
      if (0 === a) return null;
      var t = a,
        i = jl;
      jl |= 16;
      var r = vs();
      for ((Nl === e && El === t) || (zl(), bs(e, t)); ; )
        try {
          ws();
          break;
        } catch (n) {
          ys(e, n);
        }
      if ((Xi(), (xl.current = r), (jl = i), null !== Ol ? (t = 0) : ((Nl = null), (El = 0), (t = Pl)), 0 != (Tl & Ll))) bs(e, 0);
      else if (0 !== t) {
        if ((2 === t && ((jl |= 64), e.hydrate && ((e.hydrate = !1), Gt(e.containerInfo)), 0 !== (a = Un(e)) && (t = Cs(e, a))), 1 === t))
          throw ((n = Bl), bs(e, 0), ds(e, a), cs(e, Di()), n);
        switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            js(e);
            break;
          case 3:
            if ((ds(e, a), (62914560 & a) === a && 10 < (t = Dl + 500 - Di()))) {
              if (0 !== Dn(e, 0)) break;
              if (((i = e.suspendedLanes) & a) !== a) {
                rs(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = zt(js.bind(null, e), t);
              break;
            }
            js(e);
            break;
          case 4:
            if ((ds(e, a), (4186112 & a) === a)) break;
            for (t = e.eventTimes, i = -1; 0 < a; ) {
              var l = 31 - Kn(a);
              (r = 1 << l), (l = t[l]) > i && (i = l), (a &= ~r);
            }
            if (
              ((a = i),
              10 <
                (a =
                  (120 > (a = Di() - a)
                    ? 120
                    : 480 > a
                    ? 480
                    : 1080 > a
                    ? 1080
                    : 1920 > a
                    ? 1920
                    : 3e3 > a
                    ? 3e3
                    : 4320 > a
                    ? 4320
                    : 1960 * wl(a / 1960)) - a))
            ) {
              e.timeoutHandle = zt(js.bind(null, e), a);
              break;
            }
            js(e);
            break;
          case 5:
            js(e);
            break;
          default:
            throw Error(o(329));
        }
      }
      return cs(e, Di()), e.callbackNode === n ? us.bind(null, e) : null;
    }
    function ds(e, n) {
      for (n &= ~_l, n &= ~Ll, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
        var a = 31 - Kn(n),
          t = 1 << a;
        (e[a] = -1), (n &= ~t);
      }
    }
    function ps(e) {
      if (0 != (48 & jl)) throw Error(o(327));
      if ((Es(), e === Nl && 0 != (e.expiredLanes & El))) {
        var n = El,
          a = Cs(e, n);
        0 != (Tl & Ll) && (a = Cs(e, (n = Dn(e, n))));
      } else a = Cs(e, (n = Dn(e, 0)));
      if (
        (0 !== e.tag && 2 === a && ((jl |= 64), e.hydrate && ((e.hydrate = !1), Gt(e.containerInfo)), 0 !== (n = Un(e)) && (a = Cs(e, n))),
        1 === a)
      )
        throw ((a = Bl), bs(e, 0), ds(e, n), cs(e, Di()), a);
      return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), js(e), cs(e, Di()), null;
    }
    function hs(e, n) {
      var a = jl;
      jl |= 1;
      try {
        return e(n);
      } finally {
        0 === (jl = a) && (zl(), Wi());
      }
    }
    function gs(e, n) {
      var a = jl;
      (jl &= -2), (jl |= 8);
      try {
        return e(n);
      } finally {
        0 === (jl = a) && (zl(), Wi());
      }
    }
    function fs(e, n) {
      oi(Al, Ml), (Ml |= n), (Tl |= n);
    }
    function ms() {
      (Ml = Al.current), ri(Al);
    }
    function bs(e, n) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var a = e.timeoutHandle;
      if ((-1 !== a && ((e.timeoutHandle = -1), Ft(a)), null !== Ol))
        for (a = Ol.return; null !== a; ) {
          var t = a;
          switch (t.tag) {
            case 1:
              null != (t = t.type.childContextTypes) && hi();
              break;
            case 3:
              Mr(), ri(ci), ri(si), Kr();
              break;
            case 5:
              Pr(t);
              break;
            case 4:
              Mr();
              break;
            case 13:
            case 19:
              ri(Br);
              break;
            case 10:
              qi(t);
              break;
            case 23:
            case 24:
              ms();
          }
          a = a.return;
        }
      (Nl = e), (Ol = Us(e.current, null)), (El = Ml = Tl = n), (Pl = 0), (Bl = null), (_l = Ll = Rl = 0);
    }
    function ys(e, n) {
      for (;;) {
        var a = Ol;
        try {
          if ((Xi(), (Vr.current = Oo), Xr)) {
            for (var t = Yr.memoizedState; null !== t; ) {
              var i = t.queue;
              null !== i && (i.pending = null), (t = t.next);
            }
            Xr = !1;
          }
          if ((($r = 0), (Qr = Zr = Yr = null), (qr = !1), (Sl.current = null), null === a || null === a.return)) {
            (Pl = 1), (Bl = n), (Ol = null);
            break;
          }
          e: {
            var r = e,
              o = a.return,
              l = a,
              s = n;
            if (
              ((n = El),
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
              var d = 0 != (1 & Br.current),
                p = o;
              do {
                var h;
                if ((h = 13 === p.tag)) {
                  var g = p.memoizedState;
                  if (null !== g) h = null !== g.dehydrated;
                  else {
                    var f = p.memoizedProps;
                    h = void 0 !== f.fallback && (!0 !== f.unstable_avoidThisFallback || !d);
                  }
                }
                if (h) {
                  var m = p.updateQueue;
                  if (null === m) {
                    var b = new Set();
                    b.add(c), (p.updateQueue = b);
                  } else m.add(c);
                  if (0 == (2 & p.mode)) {
                    if (((p.flags |= 64), (l.flags |= 16384), (l.flags &= -2981), 1 === l.tag))
                      if (null === l.alternate) l.tag = 17;
                      else {
                        var y = rr(-1, 1);
                        (y.tag = 2), or(l, y);
                      }
                    l.lanes |= 1;
                    break e;
                  }
                  (s = void 0), (l = n);
                  var v = r.pingCache;
                  if (
                    (null === v
                      ? ((v = r.pingCache = new ol()), (s = new Set()), v.set(c, s))
                      : void 0 === (s = v.get(c)) && ((s = new Set()), v.set(c, s)),
                    !s.has(l))
                  ) {
                    s.add(l);
                    var C = Rs.bind(null, r, c, l);
                    c.then(C, C);
                  }
                  (p.flags |= 4096), (p.lanes = n);
                  break e;
                }
                p = p.return;
              } while (null !== p);
              s = Error(
                ($(l.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
              );
            }
            5 !== Pl && (Pl = 2), (s = il(s, l)), (p = o);
            do {
              switch (p.tag) {
                case 3:
                  (r = s), (p.flags |= 4096), (n &= -n), (p.lanes |= n), lr(p, ll(0, r, n));
                  break e;
                case 1:
                  r = s;
                  var k = p.type,
                    w = p.stateNode;
                  if (
                    0 == (64 & p.flags) &&
                    ("function" == typeof k.getDerivedStateFromError ||
                      (null !== w && "function" == typeof w.componentDidCatch && (null === Vl || !Vl.has(w))))
                  ) {
                    (p.flags |= 4096), (n &= -n), (p.lanes |= n), lr(p, sl(p, r, n));
                    break e;
                  }
              }
              p = p.return;
            } while (null !== p);
          }
          Ss(a);
        } catch (e) {
          (n = e), Ol === a && null !== a && (Ol = a = a.return);
          continue;
        }
        break;
      }
    }
    function vs() {
      var e = xl.current;
      return (xl.current = Oo), null === e ? Oo : e;
    }
    function Cs(e, n) {
      var a = jl;
      jl |= 16;
      var t = vs();
      for ((Nl === e && El === n) || bs(e, n); ; )
        try {
          ks();
          break;
        } catch (n) {
          ys(e, n);
        }
      if ((Xi(), (jl = a), (xl.current = t), null !== Ol)) throw Error(o(261));
      return (Nl = null), (El = 0), Pl;
    }
    function ks() {
      for (; null !== Ol; ) xs(Ol);
    }
    function ws() {
      for (; null !== Ol && !xi(); ) xs(Ol);
    }
    function xs(e) {
      var n = Fl(e.alternate, e, Ml);
      (e.memoizedProps = e.pendingProps), null === n ? Ss(e) : (Ol = n), (Sl.current = null);
    }
    function Ss(e) {
      var n = e;
      do {
        var a = n.alternate;
        if (((e = n.return), 0 == (2048 & n.flags))) {
          if (null !== (a = al(a, n, Ml))) return void (Ol = a);
          if ((24 !== (a = n).tag && 23 !== a.tag) || null === a.memoizedState || 0 != (1073741824 & Ml) || 0 == (4 & a.mode)) {
            for (var t = 0, i = a.child; null !== i; ) (t |= i.lanes | i.childLanes), (i = i.sibling);
            a.childLanes = t;
          }
          null !== e &&
            0 == (2048 & e.flags) &&
            (null === e.firstEffect && (e.firstEffect = n.firstEffect),
            null !== n.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = n.firstEffect), (e.lastEffect = n.lastEffect)),
            1 < n.flags && (null !== e.lastEffect ? (e.lastEffect.nextEffect = n) : (e.firstEffect = n), (e.lastEffect = n)));
        } else {
          if (null !== (a = tl(n))) return (a.flags &= 2047), void (Ol = a);
          null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
        }
        if (null !== (n = n.sibling)) return void (Ol = n);
        Ol = n = e;
      } while (null !== n);
      0 === Pl && (Pl = 5);
    }
    function js(e) {
      var n = Ui();
      return Fi(99, Ns.bind(null, e, n)), null;
    }
    function Ns(e, n) {
      do {
        Es();
      } while (null !== $l);
      if (0 != (48 & jl)) throw Error(o(327));
      var a = e.finishedWork;
      if (null === a) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), a === e.current)) throw Error(o(177));
      e.callbackNode = null;
      var t = a.lanes | a.childLanes,
        i = t,
        r = e.pendingLanes & ~i;
      (e.pendingLanes = i),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= i),
        (e.mutableReadLanes &= i),
        (e.entangledLanes &= i),
        (i = e.entanglements);
      for (var l = e.eventTimes, s = e.expirationTimes; 0 < r; ) {
        var c = 31 - Kn(r),
          u = 1 << c;
        (i[c] = 0), (l[c] = -1), (s[c] = -1), (r &= ~u);
      }
      if (
        (null !== Xl && 0 == (24 & t) && Xl.has(e) && Xl.delete(e),
        e === Nl && ((Ol = Nl = null), (El = 0)),
        1 < a.flags ? (null !== a.lastEffect ? ((a.lastEffect.nextEffect = a), (t = a.firstEffect)) : (t = a)) : (t = a.firstEffect),
        null !== t)
      ) {
        if (((i = jl), (jl |= 32), (Sl.current = null), (_t = Zn), pt((l = dt())))) {
          if ("selectionStart" in l) s = { start: l.selectionStart, end: l.selectionEnd };
          else
            e: if (
              ((s = ((s = l.ownerDocument) && s.defaultView) || window), (u = s.getSelection && s.getSelection()) && 0 !== u.rangeCount)
            ) {
              (s = u.anchorNode), (r = u.anchorOffset), (c = u.focusNode), (u = u.focusOffset);
              try {
                s.nodeType, c.nodeType;
              } catch (e) {
                s = null;
                break e;
              }
              var d = 0,
                p = -1,
                h = -1,
                g = 0,
                f = 0,
                m = l,
                b = null;
              n: for (;;) {
                for (
                  var y;
                  m !== s || (0 !== r && 3 !== m.nodeType) || (p = d + r),
                    m !== c || (0 !== u && 3 !== m.nodeType) || (h = d + u),
                    3 === m.nodeType && (d += m.nodeValue.length),
                    null !== (y = m.firstChild);

                )
                  (b = m), (m = y);
                for (;;) {
                  if (m === l) break n;
                  if ((b === s && ++g === r && (p = d), b === c && ++f === u && (h = d), null !== (y = m.nextSibling))) break;
                  b = (m = b).parentNode;
                }
                m = y;
              }
              s = -1 === p || -1 === h ? null : { start: p, end: h };
            } else s = null;
          s = s || { start: 0, end: 0 };
        } else s = null;
        (It = { focusedElem: l, selectionRange: s }), (Zn = !1), (ts = null), (is = !1), (Gl = t);
        do {
          try {
            Os();
          } catch (e) {
            if (null === Gl) throw Error(o(330));
            Ts(Gl, e), (Gl = Gl.nextEffect);
          }
        } while (null !== Gl);
        (ts = null), (Gl = t);
        do {
          try {
            for (l = e; null !== Gl; ) {
              var v = Gl.flags;
              if ((16 & v && be(Gl.stateNode, ""), 128 & v)) {
                var C = Gl.alternate;
                if (null !== C) {
                  var k = C.ref;
                  null !== k && ("function" == typeof k ? k(null) : (k.current = null));
                }
              }
              switch (1038 & v) {
                case 2:
                  bl(Gl), (Gl.flags &= -3);
                  break;
                case 6:
                  bl(Gl), (Gl.flags &= -3), vl(Gl.alternate, Gl);
                  break;
                case 1024:
                  Gl.flags &= -1025;
                  break;
                case 1028:
                  (Gl.flags &= -1025), vl(Gl.alternate, Gl);
                  break;
                case 4:
                  vl(Gl.alternate, Gl);
                  break;
                case 8:
                  yl(l, (s = Gl));
                  var w = s.alternate;
                  fl(s), null !== w && fl(w);
              }
              Gl = Gl.nextEffect;
            }
          } catch (e) {
            if (null === Gl) throw Error(o(330));
            Ts(Gl, e), (Gl = Gl.nextEffect);
          }
        } while (null !== Gl);
        if (
          ((k = It),
          (C = dt()),
          (v = k.focusedElem),
          (l = k.selectionRange),
          C !== v &&
            v &&
            v.ownerDocument &&
            (function e(n, a) {
              return (
                !(!n || !a) &&
                (n === a ||
                  ((!n || 3 !== n.nodeType) &&
                    (a && 3 === a.nodeType
                      ? e(n, a.parentNode)
                      : "contains" in n
                      ? n.contains(a)
                      : !!n.compareDocumentPosition && !!(16 & n.compareDocumentPosition(a)))))
              );
            })(v.ownerDocument.documentElement, v))
        ) {
          null !== l &&
            pt(v) &&
            ((C = l.start),
            void 0 === (k = l.end) && (k = C),
            "selectionStart" in v
              ? ((v.selectionStart = C), (v.selectionEnd = Math.min(k, v.value.length)))
              : (k = ((C = v.ownerDocument || document) && C.defaultView) || window).getSelection &&
                ((k = k.getSelection()),
                (s = v.textContent.length),
                (w = Math.min(l.start, s)),
                (l = void 0 === l.end ? w : Math.min(l.end, s)),
                !k.extend && w > l && ((s = l), (l = w), (w = s)),
                (s = ut(v, w)),
                (r = ut(v, l)),
                s &&
                  r &&
                  (1 !== k.rangeCount ||
                    k.anchorNode !== s.node ||
                    k.anchorOffset !== s.offset ||
                    k.focusNode !== r.node ||
                    k.focusOffset !== r.offset) &&
                  ((C = C.createRange()).setStart(s.node, s.offset),
                  k.removeAllRanges(),
                  w > l ? (k.addRange(C), k.extend(r.node, r.offset)) : (C.setEnd(r.node, r.offset), k.addRange(C))))),
            (C = []);
          for (k = v; (k = k.parentNode); ) 1 === k.nodeType && C.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
          for ("function" == typeof v.focus && v.focus(), v = 0; v < C.length; v++)
            ((k = C[v]).element.scrollLeft = k.left), (k.element.scrollTop = k.top);
        }
        (Zn = !!_t), (It = _t = null), (e.current = a), (Gl = t);
        do {
          try {
            for (v = e; null !== Gl; ) {
              var x = Gl.flags;
              if ((36 & x && pl(v, Gl.alternate, Gl), 128 & x)) {
                C = void 0;
                var S = Gl.ref;
                if (null !== S) {
                  var j = Gl.stateNode;
                  switch (Gl.tag) {
                    case 5:
                      C = j;
                      break;
                    default:
                      C = j;
                  }
                  "function" == typeof S ? S(C) : (S.current = C);
                }
              }
              Gl = Gl.nextEffect;
            }
          } catch (e) {
            if (null === Gl) throw Error(o(330));
            Ts(Gl, e), (Gl = Gl.nextEffect);
          }
        } while (null !== Gl);
        (Gl = null), Ti(), (jl = i);
      } else e.current = a;
      if (Hl) (Hl = !1), ($l = e), (Yl = n);
      else
        for (Gl = t; null !== Gl; )
          (n = Gl.nextEffect), (Gl.nextEffect = null), 8 & Gl.flags && (((x = Gl).sibling = null), (x.stateNode = null)), (Gl = n);
      if (
        (0 === (t = e.pendingLanes) && (Vl = null),
        1 === t ? (e === Jl ? ql++ : ((ql = 0), (Jl = e))) : (ql = 0),
        (a = a.stateNode),
        vi && "function" == typeof vi.onCommitFiberRoot)
      )
        try {
          vi.onCommitFiberRoot(yi, a, void 0, 64 == (64 & a.current.flags));
        } catch (e) {}
      if ((cs(e, Di()), Wl)) throw ((Wl = !1), (e = Kl), (Kl = null), e);
      return 0 != (8 & jl) || Wi(), null;
    }
    function Os() {
      for (; null !== Gl; ) {
        var e = Gl.alternate;
        is || null === ts || (0 != (8 & Gl.flags) ? Je(Gl, ts) && (is = !0) : 13 === Gl.tag && kl(e, Gl) && Je(Gl, ts) && (is = !0));
        var n = Gl.flags;
        0 != (256 & n) && dl(e, Gl),
          0 == (512 & n) ||
            Hl ||
            ((Hl = !0),
            Gi(97, function () {
              return Es(), null;
            })),
          (Gl = Gl.nextEffect);
      }
    }
    function Es() {
      if (90 !== Yl) {
        var e = 97 < Yl ? 97 : Yl;
        return (Yl = 90), Fi(e, Ps);
      }
      return !1;
    }
    function Ms(e, n) {
      Zl.push(n, e),
        Hl ||
          ((Hl = !0),
          Gi(97, function () {
            return Es(), null;
          }));
    }
    function As(e, n) {
      Ql.push(n, e),
        Hl ||
          ((Hl = !0),
          Gi(97, function () {
            return Es(), null;
          }));
    }
    function Ps() {
      if (null === $l) return !1;
      var e = $l;
      if ((($l = null), 0 != (48 & jl))) throw Error(o(331));
      var n = jl;
      jl |= 32;
      var a = Ql;
      Ql = [];
      for (var t = 0; t < a.length; t += 2) {
        var i = a[t],
          r = a[t + 1],
          l = i.destroy;
        if (((i.destroy = void 0), "function" == typeof l))
          try {
            l();
          } catch (e) {
            if (null === r) throw Error(o(330));
            Ts(r, e);
          }
      }
      for (a = Zl, Zl = [], t = 0; t < a.length; t += 2) {
        (i = a[t]), (r = a[t + 1]);
        try {
          var s = i.create;
          i.destroy = s();
        } catch (e) {
          if (null === r) throw Error(o(330));
          Ts(r, e);
        }
      }
      for (s = e.current.firstEffect; null !== s; )
        (e = s.nextEffect), (s.nextEffect = null), 8 & s.flags && ((s.sibling = null), (s.stateNode = null)), (s = e);
      return (jl = n), Wi(), !0;
    }
    function Bs(e, n, a) {
      or(e, (n = ll(0, (n = il(a, n)), 1))), (n = rs()), null !== (e = ss(e, 1)) && (Wn(e, 1, n), cs(e, n));
    }
    function Ts(e, n) {
      if (3 === e.tag) Bs(e, e, n);
      else
        for (var a = e.return; null !== a; ) {
          if (3 === a.tag) {
            Bs(a, e, n);
            break;
          }
          if (1 === a.tag) {
            var t = a.stateNode;
            if (
              "function" == typeof a.type.getDerivedStateFromError ||
              ("function" == typeof t.componentDidCatch && (null === Vl || !Vl.has(t)))
            ) {
              var i = sl(a, (e = il(n, e)), 1);
              if ((or(a, i), (i = rs()), null !== (a = ss(a, 1)))) Wn(a, 1, i), cs(a, i);
              else if ("function" == typeof t.componentDidCatch && (null === Vl || !Vl.has(t)))
                try {
                  t.componentDidCatch(n, e);
                } catch (e) {}
              break;
            }
          }
          a = a.return;
        }
    }
    function Rs(e, n, a) {
      var t = e.pingCache;
      null !== t && t.delete(n),
        (n = rs()),
        (e.pingedLanes |= e.suspendedLanes & a),
        Nl === e && (El & a) === a && (4 === Pl || (3 === Pl && (62914560 & El) === El && 500 > Di() - Dl) ? bs(e, 0) : (_l |= a)),
        cs(e, n);
    }
    function Ls(e, n) {
      var a = e.stateNode;
      null !== a && a.delete(n),
        0 === (n = 0) &&
          (0 == (2 & (n = e.mode))
            ? (n = 1)
            : 0 == (4 & n)
            ? (n = 99 === Ui() ? 1 : 2)
            : (0 === ns && (ns = Tl), 0 === (n = Fn(62914560 & ~ns)) && (n = 4194304))),
        (a = rs()),
        null !== (e = ss(e, n)) && (Wn(e, n, a), cs(e, a));
    }
    function _s(e, n, a, t) {
      (this.tag = e),
        (this.key = a),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = n),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = t),
        (this.flags = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Is(e, n, a, t) {
      return new _s(e, n, a, t);
    }
    function Ds(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Us(e, n) {
      var a = e.alternate;
      return (
        null === a
          ? (((a = Is(e.tag, n, e.key, e.mode)).elementType = e.elementType),
            (a.type = e.type),
            (a.stateNode = e.stateNode),
            (a.alternate = e),
            (e.alternate = a))
          : ((a.pendingProps = n), (a.type = e.type), (a.flags = 0), (a.nextEffect = null), (a.firstEffect = null), (a.lastEffect = null)),
        (a.childLanes = e.childLanes),
        (a.lanes = e.lanes),
        (a.child = e.child),
        (a.memoizedProps = e.memoizedProps),
        (a.memoizedState = e.memoizedState),
        (a.updateQueue = e.updateQueue),
        (n = e.dependencies),
        (a.dependencies = null === n ? null : { lanes: n.lanes, firstContext: n.firstContext }),
        (a.sibling = e.sibling),
        (a.index = e.index),
        (a.ref = e.ref),
        a
      );
    }
    function zs(e, n, a, t, i, r) {
      var l = 2;
      if (((t = e), "function" == typeof e)) Ds(e) && (l = 1);
      else if ("string" == typeof e) l = 5;
      else
        e: switch (e) {
          case S:
            return Fs(a.children, i, r, n);
          case _:
            (l = 8), (i |= 16);
            break;
          case j:
            (l = 8), (i |= 1);
            break;
          case N:
            return ((e = Is(12, a, n, 8 | i)).elementType = N), (e.type = N), (e.lanes = r), e;
          case A:
            return ((e = Is(13, a, n, i)).type = A), (e.elementType = A), (e.lanes = r), e;
          case P:
            return ((e = Is(19, a, n, i)).elementType = P), (e.lanes = r), e;
          case I:
            return Gs(a, i, r, n);
          case D:
            return ((e = Is(24, a, n, i)).elementType = D), (e.lanes = r), e;
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case O:
                  l = 10;
                  break e;
                case E:
                  l = 9;
                  break e;
                case M:
                  l = 11;
                  break e;
                case B:
                  l = 14;
                  break e;
                case T:
                  (l = 16), (t = null);
                  break e;
                case R:
                  l = 22;
                  break e;
              }
            throw Error(o(130, null == e ? e : typeof e, ""));
        }
      return ((n = Is(l, a, n, i)).elementType = e), (n.type = t), (n.lanes = r), n;
    }
    function Fs(e, n, a, t) {
      return ((e = Is(7, e, t, n)).lanes = a), e;
    }
    function Gs(e, n, a, t) {
      return ((e = Is(23, e, t, n)).elementType = I), (e.lanes = a), e;
    }
    function Ws(e, n, a) {
      return ((e = Is(6, e, null, n)).lanes = a), e;
    }
    function Ks(e, n, a) {
      return (
        ((n = Is(4, null !== e.children ? e.children : [], e.key, n)).lanes = a),
        (n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        n
      );
    }
    function Vs(e, n, a) {
      (this.tag = n),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = a),
        (this.callbackNode = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Gn(0)),
        (this.expirationTimes = Gn(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Gn(0)),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Hs(e, n, a) {
      var t = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: x, key: null == t ? null : "" + t, children: e, containerInfo: n, implementation: a };
    }
    function $s(e, n, a, t) {
      var i = n.current,
        r = rs(),
        l = os(i);
      e: if (a) {
        n: {
          if (Ze((a = a._reactInternals)) !== a || 1 !== a.tag) throw Error(o(170));
          var s = a;
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context;
                break n;
              case 1:
                if (pi(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                  break n;
                }
            }
            s = s.return;
          } while (null !== s);
          throw Error(o(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (pi(c)) {
            a = fi(a, c, s);
            break e;
          }
        }
        a = s;
      } else a = li;
      return (
        null === n.context ? (n.context = a) : (n.pendingContext = a),
        ((n = rr(r, l)).payload = { element: e }),
        null !== (t = void 0 === t ? null : t) && (n.callback = t),
        or(i, n),
        ls(i, l, r),
        l
      );
    }
    function Ys(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function Zs(e, n) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var a = e.retryLane;
        e.retryLane = 0 !== a && a < n ? a : n;
      }
    }
    function Qs(e, n) {
      Zs(e, n), (e = e.alternate) && Zs(e, n);
    }
    function Xs(e, n, a) {
      var t = (null != a && null != a.hydrationOptions && a.hydrationOptions.mutableSources) || null;
      if (
        ((a = new Vs(e, n, null != a && !0 === a.hydrate)),
        (n = Is(3, null, null, 2 === n ? 7 : 1 === n ? 3 : 0)),
        (a.current = n),
        (n.stateNode = a),
        tr(n),
        (e[Zt] = a.current),
        Ot(8 === e.nodeType ? e.parentNode : e),
        t)
      )
        for (e = 0; e < t.length; e++) {
          var i = (n = t[e])._getVersion;
          (i = i(n._source)),
            null == a.mutableSourceEagerHydrationData
              ? (a.mutableSourceEagerHydrationData = [n, i])
              : a.mutableSourceEagerHydrationData.push(n, i);
        }
      this._internalRoot = a;
    }
    function qs(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function Js(e, n, a, t, i) {
      var r = a._reactRootContainer;
      if (r) {
        var o = r._internalRoot;
        if ("function" == typeof i) {
          var l = i;
          i = function () {
            var e = Ys(o);
            l.call(e);
          };
        }
        $s(n, o, e, i);
      } else {
        if (
          ((r = a._reactRootContainer =
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
                for (var a; (a = e.lastChild); ) e.removeChild(a);
              return new Xs(e, 0, n ? { hydrate: !0 } : void 0);
            })(a, t)),
          (o = r._internalRoot),
          "function" == typeof i)
        ) {
          var s = i;
          i = function () {
            var e = Ys(o);
            s.call(e);
          };
        }
        gs(function () {
          $s(n, o, e, i);
        });
      }
      return Ys(o);
    }
    function ec(e, n) {
      var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!qs(n)) throw Error(o(200));
      return Hs(e, n, null, a);
    }
    (Fl = function (e, n, a) {
      var t = n.lanes;
      if (null !== e)
        if (e.memoizedProps !== n.pendingProps || ci.current) Bo = !0;
        else {
          if (0 == (a & t)) {
            switch (((Bo = !1), n.tag)) {
              case 3:
                Go(n), Gr();
                break;
              case 5:
                Ar(n);
                break;
              case 1:
                pi(n.type) && mi(n);
                break;
              case 4:
                Er(n, n.stateNode.containerInfo);
                break;
              case 10:
                t = n.memoizedProps.value;
                var i = n.type._context;
                oi($i, i._currentValue), (i._currentValue = t);
                break;
              case 13:
                if (null !== n.memoizedState)
                  return 0 != (a & n.child.childLanes)
                    ? $o(e, n, a)
                    : (oi(Br, 1 & Br.current), null !== (n = el(e, n, a)) ? n.sibling : null);
                oi(Br, 1 & Br.current);
                break;
              case 19:
                if (((t = 0 != (a & n.childLanes)), 0 != (64 & e.flags))) {
                  if (t) return Jo(e, n, a);
                  n.flags |= 64;
                }
                if (
                  (null !== (i = n.memoizedState) && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), oi(Br, Br.current), t)
                )
                  break;
                return null;
              case 23:
              case 24:
                return (n.lanes = 0), Io(e, n, a);
            }
            return el(e, n, a);
          }
          Bo = 0 != (16384 & e.flags);
        }
      else Bo = !1;
      switch (((n.lanes = 0), n.tag)) {
        case 2:
          if (
            ((t = n.type),
            null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
            (e = n.pendingProps),
            (i = di(n, si.current)),
            er(n, a),
            (i = no(null, n, t, e, i, a)),
            (n.flags |= 1),
            "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof)
          ) {
            if (((n.tag = 1), (n.memoizedState = null), (n.updateQueue = null), pi(t))) {
              var r = !0;
              mi(n);
            } else r = !1;
            (n.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null), tr(n);
            var l = t.getDerivedStateFromProps;
            "function" == typeof l && dr(n, t, l, e),
              (i.updater = pr),
              (n.stateNode = i),
              (i._reactInternals = n),
              mr(n, t, e, a),
              (n = Fo(null, n, t, !0, r, a));
          } else (n.tag = 0), To(null, n, i, a), (n = n.child);
          return n;
        case 16:
          i = n.elementType;
          e: {
            switch (
              (null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
              (e = n.pendingProps),
              (i = (r = i._init)(i._payload)),
              (n.type = i),
              (r = n.tag =
                (function (e) {
                  if ("function" == typeof e) return Ds(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === M) return 11;
                    if (e === B) return 14;
                  }
                  return 2;
                })(i)),
              (e = Hi(i, e)),
              r)
            ) {
              case 0:
                n = Uo(null, n, i, e, a);
                break e;
              case 1:
                n = zo(null, n, i, e, a);
                break e;
              case 11:
                n = Ro(null, n, i, e, a);
                break e;
              case 14:
                n = Lo(null, n, i, Hi(i.type, e), t, a);
                break e;
            }
            throw Error(o(306, i, ""));
          }
          return n;
        case 0:
          return (t = n.type), (i = n.pendingProps), Uo(e, n, t, (i = n.elementType === t ? i : Hi(t, i)), a);
        case 1:
          return (t = n.type), (i = n.pendingProps), zo(e, n, t, (i = n.elementType === t ? i : Hi(t, i)), a);
        case 3:
          if ((Go(n), (t = n.updateQueue), null === e || null === t)) throw Error(o(282));
          if (
            ((t = n.pendingProps),
            (i = null !== (i = n.memoizedState) ? i.element : null),
            ir(e, n),
            sr(n, t, null, a),
            (t = n.memoizedState.element) === i)
          )
            Gr(), (n = el(e, n, a));
          else {
            if (((r = (i = n.stateNode).hydrate) && ((Lr = Wt(n.stateNode.containerInfo.firstChild)), (Rr = n), (r = _r = !0)), r)) {
              if (null != (e = i.mutableSourceEagerHydrationData))
                for (i = 0; i < e.length; i += 2) ((r = e[i])._workInProgressVersionPrimary = e[i + 1]), Wr.push(r);
              for (a = wr(n, null, t, a), n.child = a; a; ) (a.flags = (-3 & a.flags) | 1024), (a = a.sibling);
            } else To(e, n, t, a), Gr();
            n = n.child;
          }
          return n;
        case 5:
          return (
            Ar(n),
            null === e && Ur(n),
            (t = n.type),
            (i = n.pendingProps),
            (r = null !== e ? e.memoizedProps : null),
            (l = i.children),
            Ut(t, i) ? (l = null) : null !== r && Ut(t, r) && (n.flags |= 16),
            Do(e, n),
            To(e, n, l, a),
            n.child
          );
        case 6:
          return null === e && Ur(n), null;
        case 13:
          return $o(e, n, a);
        case 4:
          return (
            Er(n, n.stateNode.containerInfo), (t = n.pendingProps), null === e ? (n.child = kr(n, null, t, a)) : To(e, n, t, a), n.child
          );
        case 11:
          return (t = n.type), (i = n.pendingProps), Ro(e, n, t, (i = n.elementType === t ? i : Hi(t, i)), a);
        case 7:
          return To(e, n, n.pendingProps, a), n.child;
        case 8:
        case 12:
          return To(e, n, n.pendingProps.children, a), n.child;
        case 10:
          e: {
            (t = n.type._context), (i = n.pendingProps), (l = n.memoizedProps), (r = i.value);
            var s = n.type._context;
            if ((oi($i, s._currentValue), (s._currentValue = r), null !== l))
              if (
                ((s = l.value),
                0 === (r = ot(s, r) ? 0 : 0 | ("function" == typeof t._calculateChangedBits ? t._calculateChangedBits(s, r) : 1073741823)))
              ) {
                if (l.children === i.children && !ci.current) {
                  n = el(e, n, a);
                  break e;
                }
              } else
                for (null !== (s = n.child) && (s.return = n); null !== s; ) {
                  var c = s.dependencies;
                  if (null !== c) {
                    l = s.child;
                    for (var u = c.firstContext; null !== u; ) {
                      if (u.context === t && 0 != (u.observedBits & r)) {
                        1 === s.tag && (((u = rr(-1, a & -a)).tag = 2), or(s, u)),
                          (s.lanes |= a),
                          null !== (u = s.alternate) && (u.lanes |= a),
                          Ji(s.return, a),
                          (c.lanes |= a);
                        break;
                      }
                      u = u.next;
                    }
                  } else l = 10 === s.tag && s.type === n.type ? null : s.child;
                  if (null !== l) l.return = s;
                  else
                    for (l = s; null !== l; ) {
                      if (l === n) {
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
            To(e, n, i.children, a), (n = n.child);
          }
          return n;
        case 9:
          return (
            (i = n.type),
            (t = (r = n.pendingProps).children),
            er(n, a),
            (t = t((i = nr(i, r.unstable_observedBits)))),
            (n.flags |= 1),
            To(e, n, t, a),
            n.child
          );
        case 14:
          return (r = Hi((i = n.type), n.pendingProps)), Lo(e, n, i, (r = Hi(i.type, r)), t, a);
        case 15:
          return _o(e, n, n.type, n.pendingProps, t, a);
        case 17:
          return (
            (t = n.type),
            (i = n.pendingProps),
            (i = n.elementType === t ? i : Hi(t, i)),
            null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
            (n.tag = 1),
            pi(t) ? ((e = !0), mi(n)) : (e = !1),
            er(n, a),
            gr(n, t, i),
            mr(n, t, i, a),
            Fo(null, n, t, !0, e, a)
          );
        case 19:
          return Jo(e, n, a);
        case 23:
        case 24:
          return Io(e, n, a);
      }
      throw Error(o(156, n.tag));
    }),
      (Xs.prototype.render = function (e) {
        $s(e, this._internalRoot, null, null);
      }),
      (Xs.prototype.unmount = function () {
        var e = this._internalRoot,
          n = e.containerInfo;
        $s(null, e, null, function () {
          n[Zt] = null;
        });
      }),
      (en = function (e) {
        13 === e.tag && (ls(e, 4, rs()), Qs(e, 4));
      }),
      (nn = function (e) {
        13 === e.tag && (ls(e, 67108864, rs()), Qs(e, 67108864));
      }),
      (an = function (e) {
        if (13 === e.tag) {
          var n = rs(),
            a = os(e);
          ls(e, a, n), Qs(e, a);
        }
      }),
      (tn = function (e, n) {
        return n();
      }),
      (Ne = function (e, n, a) {
        switch (n) {
          case "input":
            if ((ae(e, a), (n = a.name), "radio" === a.type && null != n)) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < a.length; n++) {
                var t = a[n];
                if (t !== e && t.form === e.form) {
                  var i = ei(t);
                  if (!i) throw Error(o(90));
                  X(t), ae(t, i);
                }
              }
            }
            break;
          case "textarea":
            ce(e, a);
            break;
          case "select":
            null != (n = a.value) && oe(e, !!a.multiple, n, !1);
        }
      }),
      (Be = hs),
      (Te = function (e, n, a, t, i) {
        var r = jl;
        jl |= 4;
        try {
          return Fi(98, e.bind(null, n, a, t, i));
        } finally {
          0 === (jl = r) && (zl(), Wi());
        }
      }),
      (Re = function () {
        0 == (49 & jl) &&
          ((function () {
            if (null !== Xl) {
              var e = Xl;
              (Xl = null),
                e.forEach(function (e) {
                  (e.expiredLanes |= 24 & e.pendingLanes), cs(e, Di());
                });
            }
            Wi();
          })(),
          Es());
      }),
      (Le = function (e, n) {
        var a = jl;
        jl |= 2;
        try {
          return e(n);
        } finally {
          0 === (jl = a) && (zl(), Wi());
        }
      });
    var nc = { Events: [qt, Jt, ei, Ae, Pe, Es, { current: !1 }] },
      ac = { findFiberByHostInstance: Xt, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" },
      tc = {
        bundleType: ac.bundleType,
        version: ac.version,
        rendererPackageName: ac.rendererPackageName,
        rendererConfig: ac.rendererConfig,
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
          return null === (e = qe(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          ac.findFiberByHostInstance ||
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
      var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ic.isDisabled && ic.supportsFiber)
        try {
          (yi = ic.inject(tc)), (vi = ic);
        } catch (e) {}
    }
    (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nc),
      (n.createPortal = ec),
      (n.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var n = e._reactInternals;
        if (void 0 === n) {
          if ("function" == typeof e.render) throw Error(o(188));
          throw Error(o(268, Object.keys(e)));
        }
        return (e = null === (e = qe(n)) ? null : e.stateNode);
      }),
      (n.flushSync = function (e, n) {
        var a = jl;
        if (0 != (48 & a)) return e(n);
        jl |= 1;
        try {
          if (e) return Fi(99, e.bind(null, n));
        } finally {
          (jl = a), Wi();
        }
      }),
      (n.hydrate = function (e, n, a) {
        if (!qs(n)) throw Error(o(200));
        return Js(null, e, n, !0, a);
      }),
      (n.render = function (e, n, a) {
        if (!qs(n)) throw Error(o(200));
        return Js(null, e, n, !1, a);
      }),
      (n.unmountComponentAtNode = function (e) {
        if (!qs(e)) throw Error(o(40));
        return (
          !!e._reactRootContainer &&
          (gs(function () {
            Js(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Zt] = null);
            });
          }),
          !0)
        );
      }),
      (n.unstable_batchedUpdates = hs),
      (n.unstable_createPortal = function (e, n) {
        return ec(e, n, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
      }),
      (n.unstable_renderSubtreeIntoContainer = function (e, n, a, t) {
        if (!qs(a)) throw Error(o(200));
        if (null == e || void 0 === e._reactInternals) throw Error(o(38));
        return Js(e, n, a, !1, t);
      }),
      (n.version = "17.0.2");
  },
  function (e, n, a) {
    "use strict";
    /** @license React v17.0.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var t = a(6),
      i = 60103,
      r = 60106;
    (n.Fragment = 60107), (n.StrictMode = 60108), (n.Profiler = 60114);
    var o = 60109,
      l = 60110,
      s = 60112;
    n.Suspense = 60113;
    var c = 60115,
      u = 60116;
    if ("function" == typeof Symbol && Symbol.for) {
      var d = Symbol.for;
      (i = d("react.element")),
        (r = d("react.portal")),
        (n.Fragment = d("react.fragment")),
        (n.StrictMode = d("react.strict_mode")),
        (n.Profiler = d("react.profiler")),
        (o = d("react.provider")),
        (l = d("react.context")),
        (s = d("react.forward_ref")),
        (n.Suspense = d("react.suspense")),
        (c = d("react.memo")),
        (u = d("react.lazy"));
    }
    var p = "function" == typeof Symbol && Symbol.iterator;
    function h(e) {
      for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      },
      f = {};
    function m(e, n, a) {
      (this.props = e), (this.context = n), (this.refs = f), (this.updater = a || g);
    }
    function b() {}
    function y(e, n, a) {
      (this.props = e), (this.context = n), (this.refs = f), (this.updater = a || g);
    }
    (m.prototype.isReactComponent = {}),
      (m.prototype.setState = function (e, n) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(h(85));
        this.updater.enqueueSetState(this, e, n, "setState");
      }),
      (m.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (b.prototype = m.prototype);
    var v = (y.prototype = new b());
    (v.constructor = y), t(v, m.prototype), (v.isPureReactComponent = !0);
    var C = { current: null },
      k = Object.prototype.hasOwnProperty,
      w = { key: !0, ref: !0, __self: !0, __source: !0 };
    function x(e, n, a) {
      var t,
        r = {},
        o = null,
        l = null;
      if (null != n)
        for (t in (void 0 !== n.ref && (l = n.ref), void 0 !== n.key && (o = "" + n.key), n))
          k.call(n, t) && !w.hasOwnProperty(t) && (r[t] = n[t]);
      var s = arguments.length - 2;
      if (1 === s) r.children = a;
      else if (1 < s) {
        for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
        r.children = c;
      }
      if (e && e.defaultProps) for (t in (s = e.defaultProps)) void 0 === r[t] && (r[t] = s[t]);
      return { $$typeof: i, type: e, key: o, ref: l, props: r, _owner: C.current };
    }
    function S(e) {
      return "object" == typeof e && null !== e && e.$$typeof === i;
    }
    var j = /\/+/g;
    function N(e, n) {
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
    function O(e, n, a, t, o) {
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
              case i:
              case r:
                s = !0;
            }
        }
      if (s)
        return (
          (o = o((s = e))),
          (e = "" === t ? "." + N(s, 0) : t),
          Array.isArray(o)
            ? ((a = ""),
              null != e && (a = e.replace(j, "$&/") + "/"),
              O(o, n, a, "", function (e) {
                return e;
              }))
            : null != o &&
              (S(o) &&
                (o = (function (e, n) {
                  return { $$typeof: i, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
                })(o, a + (!o.key || (s && s.key === o.key) ? "" : ("" + o.key).replace(j, "$&/") + "/") + e)),
              n.push(o)),
          1
        );
      if (((s = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
        for (var c = 0; c < e.length; c++) {
          var u = t + N((l = e[c]), c);
          s += O(l, n, a, u, o);
        }
      else if (
        "function" ==
        typeof (u = (function (e) {
          return null === e || "object" != typeof e ? null : "function" == typeof (e = (p && e[p]) || e["@@iterator"]) ? e : null;
        })(e))
      )
        for (e = u.call(e), c = 0; !(l = e.next()).done; ) s += O((l = l.value), n, a, (u = t + N(l, c++)), o);
      else if ("object" === l)
        throw ((n = "" + e), Error(h(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n)));
      return s;
    }
    function E(e, n, a) {
      if (null == e) return e;
      var t = [],
        i = 0;
      return (
        O(e, t, "", "", function (e) {
          return n.call(a, e, i++);
        }),
        t
      );
    }
    function M(e) {
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
    var A = { current: null };
    function P() {
      var e = A.current;
      if (null === e) throw Error(h(321));
      return e;
    }
    var B = {
      ReactCurrentDispatcher: A,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: C,
      IsSomeRendererActing: { current: !1 },
      assign: t
    };
    (n.Children = {
      map: E,
      forEach: function (e, n, a) {
        E(
          e,
          function () {
            n.apply(this, arguments);
          },
          a
        );
      },
      count: function (e) {
        var n = 0;
        return (
          E(e, function () {
            n++;
          }),
          n
        );
      },
      toArray: function (e) {
        return (
          E(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!S(e)) throw Error(h(143));
        return e;
      }
    }),
      (n.Component = m),
      (n.PureComponent = y),
      (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
      (n.cloneElement = function (e, n, a) {
        if (null == e) throw Error(h(267, e));
        var r = t({}, e.props),
          o = e.key,
          l = e.ref,
          s = e._owner;
        if (null != n) {
          if ((void 0 !== n.ref && ((l = n.ref), (s = C.current)), void 0 !== n.key && (o = "" + n.key), e.type && e.type.defaultProps))
            var c = e.type.defaultProps;
          for (u in n) k.call(n, u) && !w.hasOwnProperty(u) && (r[u] = void 0 === n[u] && void 0 !== c ? c[u] : n[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) r.children = a;
        else if (1 < u) {
          c = Array(u);
          for (var d = 0; d < u; d++) c[d] = arguments[d + 2];
          r.children = c;
        }
        return { $$typeof: i, type: e.type, key: o, ref: l, props: r, _owner: s };
      }),
      (n.createContext = function (e, n) {
        return (
          void 0 === n && (n = null),
          ((e = {
            $$typeof: l,
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
        return { $$typeof: s, render: e };
      }),
      (n.isValidElement = S),
      (n.lazy = function (e) {
        return { $$typeof: u, _payload: { _status: -1, _result: e }, _init: M };
      }),
      (n.memo = function (e, n) {
        return { $$typeof: c, type: e, compare: void 0 === n ? null : n };
      }),
      (n.useCallback = function (e, n) {
        return P().useCallback(e, n);
      }),
      (n.useContext = function (e, n) {
        return P().useContext(e, n);
      }),
      (n.useDebugValue = function () {}),
      (n.useEffect = function (e, n) {
        return P().useEffect(e, n);
      }),
      (n.useImperativeHandle = function (e, n, a) {
        return P().useImperativeHandle(e, n, a);
      }),
      (n.useLayoutEffect = function (e, n) {
        return P().useLayoutEffect(e, n);
      }),
      (n.useMemo = function (e, n) {
        return P().useMemo(e, n);
      }),
      (n.useReducer = function (e, n, a) {
        return P().useReducer(e, n, a);
      }),
      (n.useRef = function (e) {
        return P().useRef(e);
      }),
      (n.useState = function (e) {
        return P().useState(e);
      }),
      (n.version = "17.0.2");
  },
  function (e, n, a) {
    "use strict";
    e.exports = a(20);
  },
  function (e, n, a) {
    "use strict";
    /** @license React v0.20.2
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var t, i, r, o;
    if ("object" == typeof performance && "function" == typeof performance.now) {
      var l = performance;
      n.unstable_now = function () {
        return l.now();
      };
    } else {
      var s = Date,
        c = s.now();
      n.unstable_now = function () {
        return s.now() - c;
      };
    }
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
      var u = null,
        d = null,
        p = function () {
          if (null !== u)
            try {
              var e = n.unstable_now();
              u(!0, e), (u = null);
            } catch (e) {
              throw (setTimeout(p, 0), e);
            }
        };
      (t = function (e) {
        null !== u ? setTimeout(t, 0, e) : ((u = e), setTimeout(p, 0));
      }),
        (i = function (e, n) {
          d = setTimeout(e, n);
        }),
        (r = function () {
          clearTimeout(d);
        }),
        (n.unstable_shouldYield = function () {
          return !1;
        }),
        (o = n.unstable_forceFrameRate = function () {});
    } else {
      var h = window.setTimeout,
        g = window.clearTimeout;
      if ("undefined" != typeof console) {
        var f = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          ),
          "function" != typeof f &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            );
      }
      var m = !1,
        b = null,
        y = -1,
        v = 5,
        C = 0;
      (n.unstable_shouldYield = function () {
        return n.unstable_now() >= C;
      }),
        (o = function () {}),
        (n.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (v = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var k = new MessageChannel(),
        w = k.port2;
      (k.port1.onmessage = function () {
        if (null !== b) {
          var e = n.unstable_now();
          C = e + v;
          try {
            b(!0, e) ? w.postMessage(null) : ((m = !1), (b = null));
          } catch (e) {
            throw (w.postMessage(null), e);
          }
        } else m = !1;
      }),
        (t = function (e) {
          (b = e), m || ((m = !0), w.postMessage(null));
        }),
        (i = function (e, a) {
          y = h(function () {
            e(n.unstable_now());
          }, a);
        }),
        (r = function () {
          g(y), (y = -1);
        });
    }
    function x(e, n) {
      var a = e.length;
      e.push(n);
      e: for (;;) {
        var t = (a - 1) >>> 1,
          i = e[t];
        if (!(void 0 !== i && 0 < N(i, n))) break e;
        (e[t] = n), (e[a] = i), (a = t);
      }
    }
    function S(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function j(e) {
      var n = e[0];
      if (void 0 !== n) {
        var a = e.pop();
        if (a !== n) {
          e[0] = a;
          e: for (var t = 0, i = e.length; t < i; ) {
            var r = 2 * (t + 1) - 1,
              o = e[r],
              l = r + 1,
              s = e[l];
            if (void 0 !== o && 0 > N(o, a))
              void 0 !== s && 0 > N(s, o) ? ((e[t] = s), (e[l] = a), (t = l)) : ((e[t] = o), (e[r] = a), (t = r));
            else {
              if (!(void 0 !== s && 0 > N(s, a))) break e;
              (e[t] = s), (e[l] = a), (t = l);
            }
          }
        }
        return n;
      }
      return null;
    }
    function N(e, n) {
      var a = e.sortIndex - n.sortIndex;
      return 0 !== a ? a : e.id - n.id;
    }
    var O = [],
      E = [],
      M = 1,
      A = null,
      P = 3,
      B = !1,
      T = !1,
      R = !1;
    function L(e) {
      for (var n = S(E); null !== n; ) {
        if (null === n.callback) j(E);
        else {
          if (!(n.startTime <= e)) break;
          j(E), (n.sortIndex = n.expirationTime), x(O, n);
        }
        n = S(E);
      }
    }
    function _(e) {
      if (((R = !1), L(e), !T))
        if (null !== S(O)) (T = !0), t(I);
        else {
          var n = S(E);
          null !== n && i(_, n.startTime - e);
        }
    }
    function I(e, a) {
      (T = !1), R && ((R = !1), r()), (B = !0);
      var t = P;
      try {
        for (L(a), A = S(O); null !== A && (!(A.expirationTime > a) || (e && !n.unstable_shouldYield())); ) {
          var o = A.callback;
          if ("function" == typeof o) {
            (A.callback = null), (P = A.priorityLevel);
            var l = o(A.expirationTime <= a);
            (a = n.unstable_now()), "function" == typeof l ? (A.callback = l) : A === S(O) && j(O), L(a);
          } else j(O);
          A = S(O);
        }
        if (null !== A) var s = !0;
        else {
          var c = S(E);
          null !== c && i(_, c.startTime - a), (s = !1);
        }
        return s;
      } finally {
        (A = null), (P = t), (B = !1);
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
        T || B || ((T = !0), t(I));
      }),
      (n.unstable_getCurrentPriorityLevel = function () {
        return P;
      }),
      (n.unstable_getFirstCallbackNode = function () {
        return S(O);
      }),
      (n.unstable_next = function (e) {
        switch (P) {
          case 1:
          case 2:
          case 3:
            var n = 3;
            break;
          default:
            n = P;
        }
        var a = P;
        P = n;
        try {
          return e();
        } finally {
          P = a;
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
        var a = P;
        P = e;
        try {
          return n();
        } finally {
          P = a;
        }
      }),
      (n.unstable_scheduleCallback = function (e, a, o) {
        var l = n.unstable_now();
        switch (("object" == typeof o && null !== o ? (o = "number" == typeof (o = o.delay) && 0 < o ? l + o : l) : (o = l), e)) {
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
          (e = { id: M++, callback: a, priorityLevel: e, startTime: o, expirationTime: (s = o + s), sortIndex: -1 }),
          o > l
            ? ((e.sortIndex = o), x(E, e), null === S(O) && e === S(E) && (R ? r() : (R = !0), i(_, o - l)))
            : ((e.sortIndex = s), x(O, e), T || B || ((T = !0), t(I))),
          e
        );
      }),
      (n.unstable_wrapCallback = function (e) {
        var n = P;
        return function () {
          var a = P;
          P = n;
          try {
            return e.apply(this, arguments);
          } finally {
            P = a;
          }
        };
      });
  },
  function (e, n, a) {
    "use strict";
    /** @license React v17.0.2
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ a(6);
    var t = a(1),
      i = 60103;
    if (((n.Fragment = 60107), "function" == typeof Symbol && Symbol.for)) {
      var r = Symbol.for;
      (i = r("react.element")), (n.Fragment = r("react.fragment"));
    }
    var o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      l = Object.prototype.hasOwnProperty,
      s = { key: !0, ref: !0, __self: !0, __source: !0 };
    function c(e, n, a) {
      var t,
        r = {},
        c = null,
        u = null;
      for (t in (void 0 !== a && (c = "" + a), void 0 !== n.key && (c = "" + n.key), void 0 !== n.ref && (u = n.ref), n))
        l.call(n, t) && !s.hasOwnProperty(t) && (r[t] = n[t]);
      if (e && e.defaultProps) for (t in (n = e.defaultProps)) void 0 === r[t] && (r[t] = n[t]);
      return { $$typeof: i, type: e, key: c, ref: u, props: r, _owner: o.current };
    }
    (n.jsx = c), (n.jsxs = c);
  },
  function (e, n, a) {
    var t = a(30),
      i = "object" == typeof self && self && self.Object === Object && self,
      r = t || i || Function("return this")();
    e.exports = r;
  },
  function (e, n, a) {
    "use strict";
    a.r(n),
      function (e) {
        a.d(n, "default", function () {
          return b;
        }),
          a.d(n, "VERSION", function () {
            return y;
          }),
          a.d(n, "iteratee", function () {
            return k;
          }),
          a.d(n, "restArguments", function () {
            return x;
          }),
          a.d(n, "each", function () {
            return P;
          }),
          a.d(n, "forEach", function () {
            return P;
          }),
          a.d(n, "map", function () {
            return B;
          }),
          a.d(n, "collect", function () {
            return B;
          }),
          a.d(n, "reduce", function () {
            return R;
          }),
          a.d(n, "foldl", function () {
            return R;
          }),
          a.d(n, "inject", function () {
            return R;
          }),
          a.d(n, "reduceRight", function () {
            return L;
          }),
          a.d(n, "foldr", function () {
            return L;
          }),
          a.d(n, "find", function () {
            return _;
          }),
          a.d(n, "detect", function () {
            return _;
          }),
          a.d(n, "filter", function () {
            return I;
          }),
          a.d(n, "select", function () {
            return I;
          }),
          a.d(n, "reject", function () {
            return D;
          }),
          a.d(n, "every", function () {
            return U;
          }),
          a.d(n, "all", function () {
            return U;
          }),
          a.d(n, "some", function () {
            return z;
          }),
          a.d(n, "any", function () {
            return z;
          }),
          a.d(n, "contains", function () {
            return F;
          }),
          a.d(n, "includes", function () {
            return F;
          }),
          a.d(n, "include", function () {
            return F;
          }),
          a.d(n, "invoke", function () {
            return G;
          }),
          a.d(n, "pluck", function () {
            return W;
          }),
          a.d(n, "where", function () {
            return K;
          }),
          a.d(n, "findWhere", function () {
            return V;
          }),
          a.d(n, "max", function () {
            return H;
          }),
          a.d(n, "min", function () {
            return $;
          }),
          a.d(n, "shuffle", function () {
            return Y;
          }),
          a.d(n, "sample", function () {
            return Z;
          }),
          a.d(n, "sortBy", function () {
            return Q;
          }),
          a.d(n, "groupBy", function () {
            return q;
          }),
          a.d(n, "indexBy", function () {
            return J;
          }),
          a.d(n, "countBy", function () {
            return ee;
          }),
          a.d(n, "toArray", function () {
            return ae;
          }),
          a.d(n, "size", function () {
            return te;
          }),
          a.d(n, "partition", function () {
            return ie;
          }),
          a.d(n, "first", function () {
            return re;
          }),
          a.d(n, "head", function () {
            return re;
          }),
          a.d(n, "take", function () {
            return re;
          }),
          a.d(n, "initial", function () {
            return oe;
          }),
          a.d(n, "last", function () {
            return le;
          }),
          a.d(n, "rest", function () {
            return se;
          }),
          a.d(n, "tail", function () {
            return se;
          }),
          a.d(n, "drop", function () {
            return se;
          }),
          a.d(n, "compact", function () {
            return ce;
          }),
          a.d(n, "flatten", function () {
            return de;
          }),
          a.d(n, "without", function () {
            return pe;
          }),
          a.d(n, "uniq", function () {
            return he;
          }),
          a.d(n, "unique", function () {
            return he;
          }),
          a.d(n, "union", function () {
            return ge;
          }),
          a.d(n, "intersection", function () {
            return fe;
          }),
          a.d(n, "difference", function () {
            return me;
          }),
          a.d(n, "unzip", function () {
            return be;
          }),
          a.d(n, "zip", function () {
            return ye;
          }),
          a.d(n, "object", function () {
            return ve;
          }),
          a.d(n, "findIndex", function () {
            return ke;
          }),
          a.d(n, "findLastIndex", function () {
            return we;
          }),
          a.d(n, "sortedIndex", function () {
            return xe;
          }),
          a.d(n, "indexOf", function () {
            return je;
          }),
          a.d(n, "lastIndexOf", function () {
            return Ne;
          }),
          a.d(n, "range", function () {
            return Oe;
          }),
          a.d(n, "chunk", function () {
            return Ee;
          }),
          a.d(n, "bind", function () {
            return Ae;
          }),
          a.d(n, "partial", function () {
            return Pe;
          }),
          a.d(n, "bindAll", function () {
            return Be;
          }),
          a.d(n, "memoize", function () {
            return Te;
          }),
          a.d(n, "delay", function () {
            return Re;
          }),
          a.d(n, "defer", function () {
            return Le;
          }),
          a.d(n, "throttle", function () {
            return _e;
          }),
          a.d(n, "debounce", function () {
            return Ie;
          }),
          a.d(n, "wrap", function () {
            return De;
          }),
          a.d(n, "negate", function () {
            return Ue;
          }),
          a.d(n, "compose", function () {
            return ze;
          }),
          a.d(n, "after", function () {
            return Fe;
          }),
          a.d(n, "before", function () {
            return Ge;
          }),
          a.d(n, "once", function () {
            return We;
          }),
          a.d(n, "keys", function () {
            return $e;
          }),
          a.d(n, "allKeys", function () {
            return Ye;
          }),
          a.d(n, "values", function () {
            return Ze;
          }),
          a.d(n, "mapObject", function () {
            return Qe;
          }),
          a.d(n, "pairs", function () {
            return Xe;
          }),
          a.d(n, "invert", function () {
            return qe;
          }),
          a.d(n, "functions", function () {
            return Je;
          }),
          a.d(n, "methods", function () {
            return Je;
          }),
          a.d(n, "extend", function () {
            return nn;
          }),
          a.d(n, "extendOwn", function () {
            return an;
          }),
          a.d(n, "assign", function () {
            return an;
          }),
          a.d(n, "findKey", function () {
            return tn;
          }),
          a.d(n, "pick", function () {
            return on;
          }),
          a.d(n, "omit", function () {
            return ln;
          }),
          a.d(n, "defaults", function () {
            return sn;
          }),
          a.d(n, "create", function () {
            return cn;
          }),
          a.d(n, "clone", function () {
            return un;
          }),
          a.d(n, "tap", function () {
            return dn;
          }),
          a.d(n, "isMatch", function () {
            return pn;
          }),
          a.d(n, "isEqual", function () {
            return gn;
          }),
          a.d(n, "isEmpty", function () {
            return fn;
          }),
          a.d(n, "isElement", function () {
            return mn;
          }),
          a.d(n, "isArray", function () {
            return yn;
          }),
          a.d(n, "isObject", function () {
            return vn;
          }),
          a.d(n, "isArguments", function () {
            return Cn;
          }),
          a.d(n, "isFunction", function () {
            return kn;
          }),
          a.d(n, "isString", function () {
            return wn;
          }),
          a.d(n, "isNumber", function () {
            return xn;
          }),
          a.d(n, "isDate", function () {
            return Sn;
          }),
          a.d(n, "isRegExp", function () {
            return jn;
          }),
          a.d(n, "isError", function () {
            return Nn;
          }),
          a.d(n, "isSymbol", function () {
            return On;
          }),
          a.d(n, "isMap", function () {
            return En;
          }),
          a.d(n, "isWeakMap", function () {
            return Mn;
          }),
          a.d(n, "isSet", function () {
            return An;
          }),
          a.d(n, "isWeakSet", function () {
            return Pn;
          }),
          a.d(n, "isFinite", function () {
            return Tn;
          }),
          a.d(n, "isNaN", function () {
            return Rn;
          }),
          a.d(n, "isBoolean", function () {
            return Ln;
          }),
          a.d(n, "isNull", function () {
            return _n;
          }),
          a.d(n, "isUndefined", function () {
            return In;
          }),
          a.d(n, "has", function () {
            return Dn;
          }),
          a.d(n, "identity", function () {
            return Un;
          }),
          a.d(n, "constant", function () {
            return zn;
          }),
          a.d(n, "noop", function () {
            return Fn;
          }),
          a.d(n, "property", function () {
            return Gn;
          }),
          a.d(n, "propertyOf", function () {
            return Wn;
          }),
          a.d(n, "matcher", function () {
            return Kn;
          }),
          a.d(n, "matches", function () {
            return Kn;
          }),
          a.d(n, "times", function () {
            return Vn;
          }),
          a.d(n, "random", function () {
            return Hn;
          }),
          a.d(n, "now", function () {
            return $n;
          }),
          a.d(n, "escape", function () {
            return Xn;
          }),
          a.d(n, "unescape", function () {
            return qn;
          }),
          a.d(n, "result", function () {
            return Jn;
          }),
          a.d(n, "uniqueId", function () {
            return na;
          }),
          a.d(n, "templateSettings", function () {
            return aa;
          }),
          a.d(n, "template", function () {
            return la;
          }),
          a.d(n, "chain", function () {
            return sa;
          }),
          a.d(n, "mixin", function () {
            return ua;
          });
        var t =
            ("object" == typeof self && self.self === self && self) ||
            ("object" == typeof e && e.global === e && e) ||
            Function("return this")() ||
            {},
          i = Array.prototype,
          r = Object.prototype,
          o = "undefined" != typeof Symbol ? Symbol.prototype : null,
          l = i.push,
          s = i.slice,
          c = r.toString,
          u = r.hasOwnProperty,
          d = Array.isArray,
          p = Object.keys,
          h = Object.create,
          g = t.isNaN,
          f = t.isFinite,
          m = function () {};
        function b(e) {
          return e instanceof b ? e : this instanceof b ? void (this._wrapped = e) : new b(e);
        }
        var y = (b.VERSION = "1.10.2");
        function v(e, n, a) {
          if (void 0 === n) return e;
          switch (null == a ? 3 : a) {
            case 1:
              return function (a) {
                return e.call(n, a);
              };
            case 3:
              return function (a, t, i) {
                return e.call(n, a, t, i);
              };
            case 4:
              return function (a, t, i, r) {
                return e.call(n, a, t, i, r);
              };
          }
          return function () {
            return e.apply(n, arguments);
          };
        }
        function C(e, n, a) {
          return null == e ? Un : kn(e) ? v(e, n, a) : vn(e) && !yn(e) ? Kn(e) : Gn(e);
        }
        function k(e, n) {
          return C(e, n, 1 / 0);
        }
        function w(e, n, a) {
          return b.iteratee !== k ? b.iteratee(e, n) : C(e, n, a);
        }
        function x(e, n) {
          return (
            (n = null == n ? e.length - 1 : +n),
            function () {
              for (var a = Math.max(arguments.length - n, 0), t = Array(a), i = 0; i < a; i++) t[i] = arguments[i + n];
              switch (n) {
                case 0:
                  return e.call(this, t);
                case 1:
                  return e.call(this, arguments[0], t);
                case 2:
                  return e.call(this, arguments[0], arguments[1], t);
              }
              var r = Array(n + 1);
              for (i = 0; i < n; i++) r[i] = arguments[i];
              return (r[n] = t), e.apply(this, r);
            }
          );
        }
        function S(e) {
          if (!vn(e)) return {};
          if (h) return h(e);
          m.prototype = e;
          var n = new m();
          return (m.prototype = null), n;
        }
        function j(e) {
          return function (n) {
            return null == n ? void 0 : n[e];
          };
        }
        function N(e, n) {
          return null != e && u.call(e, n);
        }
        function O(e, n) {
          for (var a = n.length, t = 0; t < a; t++) {
            if (null == e) return;
            e = e[n[t]];
          }
          return a ? e : void 0;
        }
        b.iteratee = k;
        var E = Math.pow(2, 53) - 1,
          M = j("length");
        function A(e) {
          var n = M(e);
          return "number" == typeof n && n >= 0 && n <= E;
        }
        function P(e, n, a) {
          var t, i;
          if (((n = v(n, a)), A(e))) for (t = 0, i = e.length; t < i; t++) n(e[t], t, e);
          else {
            var r = $e(e);
            for (t = 0, i = r.length; t < i; t++) n(e[r[t]], r[t], e);
          }
          return e;
        }
        function B(e, n, a) {
          n = w(n, a);
          for (var t = !A(e) && $e(e), i = (t || e).length, r = Array(i), o = 0; o < i; o++) {
            var l = t ? t[o] : o;
            r[o] = n(e[l], l, e);
          }
          return r;
        }
        function T(e) {
          var n = function (n, a, t, i) {
            var r = !A(n) && $e(n),
              o = (r || n).length,
              l = e > 0 ? 0 : o - 1;
            for (i || ((t = n[r ? r[l] : l]), (l += e)); l >= 0 && l < o; l += e) {
              var s = r ? r[l] : l;
              t = a(t, n[s], s, n);
            }
            return t;
          };
          return function (e, a, t, i) {
            var r = arguments.length >= 3;
            return n(e, v(a, i, 4), t, r);
          };
        }
        var R = T(1),
          L = T(-1);
        function _(e, n, a) {
          var t = (A(e) ? ke : tn)(e, n, a);
          if (void 0 !== t && -1 !== t) return e[t];
        }
        function I(e, n, a) {
          var t = [];
          return (
            (n = w(n, a)),
            P(e, function (e, a, i) {
              n(e, a, i) && t.push(e);
            }),
            t
          );
        }
        function D(e, n, a) {
          return I(e, Ue(w(n)), a);
        }
        function U(e, n, a) {
          n = w(n, a);
          for (var t = !A(e) && $e(e), i = (t || e).length, r = 0; r < i; r++) {
            var o = t ? t[r] : r;
            if (!n(e[o], o, e)) return !1;
          }
          return !0;
        }
        function z(e, n, a) {
          n = w(n, a);
          for (var t = !A(e) && $e(e), i = (t || e).length, r = 0; r < i; r++) {
            var o = t ? t[r] : r;
            if (n(e[o], o, e)) return !0;
          }
          return !1;
        }
        function F(e, n, a, t) {
          return A(e) || (e = Ze(e)), ("number" != typeof a || t) && (a = 0), je(e, n, a) >= 0;
        }
        var G = x(function (e, n, a) {
          var t, i;
          return (
            kn(n) ? (i = n) : yn(n) && ((t = n.slice(0, -1)), (n = n[n.length - 1])),
            B(e, function (e) {
              var r = i;
              if (!r) {
                if ((t && t.length && (e = O(e, t)), null == e)) return;
                r = e[n];
              }
              return null == r ? r : r.apply(e, a);
            })
          );
        });
        function W(e, n) {
          return B(e, Gn(n));
        }
        function K(e, n) {
          return I(e, Kn(n));
        }
        function V(e, n) {
          return _(e, Kn(n));
        }
        function H(e, n, a) {
          var t,
            i,
            r = -1 / 0,
            o = -1 / 0;
          if (null == n || ("number" == typeof n && "object" != typeof e[0] && null != e))
            for (var l = 0, s = (e = A(e) ? e : Ze(e)).length; l < s; l++) null != (t = e[l]) && t > r && (r = t);
          else
            (n = w(n, a)),
              P(e, function (e, a, t) {
                ((i = n(e, a, t)) > o || (i === -1 / 0 && r === -1 / 0)) && ((r = e), (o = i));
              });
          return r;
        }
        function $(e, n, a) {
          var t,
            i,
            r = 1 / 0,
            o = 1 / 0;
          if (null == n || ("number" == typeof n && "object" != typeof e[0] && null != e))
            for (var l = 0, s = (e = A(e) ? e : Ze(e)).length; l < s; l++) null != (t = e[l]) && t < r && (r = t);
          else
            (n = w(n, a)),
              P(e, function (e, a, t) {
                ((i = n(e, a, t)) < o || (i === 1 / 0 && r === 1 / 0)) && ((r = e), (o = i));
              });
          return r;
        }
        function Y(e) {
          return Z(e, 1 / 0);
        }
        function Z(e, n, a) {
          if (null == n || a) return A(e) || (e = Ze(e)), e[Hn(e.length - 1)];
          var t = A(e) ? un(e) : Ze(e),
            i = M(t);
          n = Math.max(Math.min(n, i), 0);
          for (var r = i - 1, o = 0; o < n; o++) {
            var l = Hn(o, r),
              s = t[o];
            (t[o] = t[l]), (t[l] = s);
          }
          return t.slice(0, n);
        }
        function Q(e, n, a) {
          var t = 0;
          return (
            (n = w(n, a)),
            W(
              B(e, function (e, a, i) {
                return { value: e, index: t++, criteria: n(e, a, i) };
              }).sort(function (e, n) {
                var a = e.criteria,
                  t = n.criteria;
                if (a !== t) {
                  if (a > t || void 0 === a) return 1;
                  if (a < t || void 0 === t) return -1;
                }
                return e.index - n.index;
              }),
              "value"
            )
          );
        }
        function X(e, n) {
          return function (a, t, i) {
            var r = n ? [[], []] : {};
            return (
              (t = w(t, i)),
              P(a, function (n, i) {
                var o = t(n, i, a);
                e(r, n, o);
              }),
              r
            );
          };
        }
        var q = X(function (e, n, a) {
            N(e, a) ? e[a].push(n) : (e[a] = [n]);
          }),
          J = X(function (e, n, a) {
            e[a] = n;
          }),
          ee = X(function (e, n, a) {
            N(e, a) ? e[a]++ : (e[a] = 1);
          }),
          ne = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
        function ae(e) {
          return e ? (yn(e) ? s.call(e) : wn(e) ? e.match(ne) : A(e) ? B(e, Un) : Ze(e)) : [];
        }
        function te(e) {
          return null == e ? 0 : A(e) ? e.length : $e(e).length;
        }
        var ie = X(function (e, n, a) {
          e[a ? 0 : 1].push(n);
        }, !0);
        function re(e, n, a) {
          return null == e || e.length < 1 ? (null == n ? void 0 : []) : null == n || a ? e[0] : oe(e, e.length - n);
        }
        function oe(e, n, a) {
          return s.call(e, 0, Math.max(0, e.length - (null == n || a ? 1 : n)));
        }
        function le(e, n, a) {
          return null == e || e.length < 1
            ? null == n
              ? void 0
              : []
            : null == n || a
            ? e[e.length - 1]
            : se(e, Math.max(0, e.length - n));
        }
        function se(e, n, a) {
          return s.call(e, null == n || a ? 1 : n);
        }
        function ce(e) {
          return I(e, Boolean);
        }
        function ue(e, n, a, t) {
          for (var i = (t = t || []).length, r = 0, o = M(e); r < o; r++) {
            var l = e[r];
            if (A(l) && (yn(l) || Cn(l)))
              if (n) for (var s = 0, c = l.length; s < c; ) t[i++] = l[s++];
              else ue(l, n, a, t), (i = t.length);
            else a || (t[i++] = l);
          }
          return t;
        }
        function de(e, n) {
          return ue(e, n, !1);
        }
        var pe = x(function (e, n) {
          return me(e, n);
        });
        function he(e, n, a, t) {
          Ln(n) || ((t = a), (a = n), (n = !1)), null != a && (a = w(a, t));
          for (var i = [], r = [], o = 0, l = M(e); o < l; o++) {
            var s = e[o],
              c = a ? a(s, o, e) : s;
            n && !a ? ((o && r === c) || i.push(s), (r = c)) : a ? F(r, c) || (r.push(c), i.push(s)) : F(i, s) || i.push(s);
          }
          return i;
        }
        var ge = x(function (e) {
          return he(ue(e, !0, !0));
        });
        function fe(e) {
          for (var n = [], a = arguments.length, t = 0, i = M(e); t < i; t++) {
            var r = e[t];
            if (!F(n, r)) {
              var o;
              for (o = 1; o < a && F(arguments[o], r); o++);
              o === a && n.push(r);
            }
          }
          return n;
        }
        var me = x(function (e, n) {
          return (
            (n = ue(n, !0, !0)),
            I(e, function (e) {
              return !F(n, e);
            })
          );
        });
        function be(e) {
          for (var n = (e && H(e, M).length) || 0, a = Array(n), t = 0; t < n; t++) a[t] = W(e, t);
          return a;
        }
        var ye = x(be);
        function ve(e, n) {
          for (var a = {}, t = 0, i = M(e); t < i; t++) n ? (a[e[t]] = n[t]) : (a[e[t][0]] = e[t][1]);
          return a;
        }
        function Ce(e) {
          return function (n, a, t) {
            a = w(a, t);
            for (var i = M(n), r = e > 0 ? 0 : i - 1; r >= 0 && r < i; r += e) if (a(n[r], r, n)) return r;
            return -1;
          };
        }
        var ke = Ce(1),
          we = Ce(-1);
        function xe(e, n, a, t) {
          for (var i = (a = w(a, t, 1))(n), r = 0, o = M(e); r < o; ) {
            var l = Math.floor((r + o) / 2);
            a(e[l]) < i ? (r = l + 1) : (o = l);
          }
          return r;
        }
        function Se(e, n, a) {
          return function (t, i, r) {
            var o = 0,
              l = M(t);
            if ("number" == typeof r) e > 0 ? (o = r >= 0 ? r : Math.max(r + l, o)) : (l = r >= 0 ? Math.min(r + 1, l) : r + l + 1);
            else if (a && r && l) return t[(r = a(t, i))] === i ? r : -1;
            if (i != i) return (r = n(s.call(t, o, l), Rn)) >= 0 ? r + o : -1;
            for (r = e > 0 ? o : l - 1; r >= 0 && r < l; r += e) if (t[r] === i) return r;
            return -1;
          };
        }
        var je = Se(1, ke, xe),
          Ne = Se(-1, we);
        function Oe(e, n, a) {
          null == n && ((n = e || 0), (e = 0)), a || (a = n < e ? -1 : 1);
          for (var t = Math.max(Math.ceil((n - e) / a), 0), i = Array(t), r = 0; r < t; r++, e += a) i[r] = e;
          return i;
        }
        function Ee(e, n) {
          if (null == n || n < 1) return [];
          for (var a = [], t = 0, i = e.length; t < i; ) a.push(s.call(e, t, (t += n)));
          return a;
        }
        function Me(e, n, a, t, i) {
          if (!(t instanceof n)) return e.apply(a, i);
          var r = S(e.prototype),
            o = e.apply(r, i);
          return vn(o) ? o : r;
        }
        var Ae = x(function (e, n, a) {
            if (!kn(e)) throw new TypeError("Bind must be called on a function");
            var t = x(function (i) {
              return Me(e, t, n, this, a.concat(i));
            });
            return t;
          }),
          Pe = x(function (e, n) {
            var a = Pe.placeholder,
              t = function () {
                for (var i = 0, r = n.length, o = Array(r), l = 0; l < r; l++) o[l] = n[l] === a ? arguments[i++] : n[l];
                for (; i < arguments.length; ) o.push(arguments[i++]);
                return Me(e, t, this, this, o);
              };
            return t;
          });
        Pe.placeholder = b;
        var Be = x(function (e, n) {
          var a = (n = ue(n, !1, !1)).length;
          if (a < 1) throw new Error("bindAll must be passed function names");
          for (; a--; ) {
            var t = n[a];
            e[t] = Ae(e[t], e);
          }
        });
        function Te(e, n) {
          var a = function (t) {
            var i = a.cache,
              r = "" + (n ? n.apply(this, arguments) : t);
            return N(i, r) || (i[r] = e.apply(this, arguments)), i[r];
          };
          return (a.cache = {}), a;
        }
        var Re = x(function (e, n, a) {
            return setTimeout(function () {
              return e.apply(null, a);
            }, n);
          }),
          Le = Pe(Re, b, 1);
        function _e(e, n, a) {
          var t,
            i,
            r,
            o,
            l = 0;
          a || (a = {});
          var s = function () {
              (l = !1 === a.leading ? 0 : $n()), (t = null), (o = e.apply(i, r)), t || (i = r = null);
            },
            c = function () {
              var c = $n();
              l || !1 !== a.leading || (l = c);
              var u = n - (c - l);
              return (
                (i = this),
                (r = arguments),
                u <= 0 || u > n
                  ? (t && (clearTimeout(t), (t = null)), (l = c), (o = e.apply(i, r)), t || (i = r = null))
                  : t || !1 === a.trailing || (t = setTimeout(s, u)),
                o
              );
            };
          return (
            (c.cancel = function () {
              clearTimeout(t), (l = 0), (t = i = r = null);
            }),
            c
          );
        }
        function Ie(e, n, a) {
          var t,
            i,
            r = function (n, a) {
              (t = null), a && (i = e.apply(n, a));
            },
            o = x(function (o) {
              if ((t && clearTimeout(t), a)) {
                var l = !t;
                (t = setTimeout(r, n)), l && (i = e.apply(this, o));
              } else t = Re(r, n, this, o);
              return i;
            });
          return (
            (o.cancel = function () {
              clearTimeout(t), (t = null);
            }),
            o
          );
        }
        function De(e, n) {
          return Pe(n, e);
        }
        function Ue(e) {
          return function () {
            return !e.apply(this, arguments);
          };
        }
        function ze() {
          var e = arguments,
            n = e.length - 1;
          return function () {
            for (var a = n, t = e[n].apply(this, arguments); a--; ) t = e[a].call(this, t);
            return t;
          };
        }
        function Fe(e, n) {
          return function () {
            if (--e < 1) return n.apply(this, arguments);
          };
        }
        function Ge(e, n) {
          var a;
          return function () {
            return --e > 0 && (a = n.apply(this, arguments)), e <= 1 && (n = null), a;
          };
        }
        var We = Pe(Ge, 2),
          Ke = !{ toString: null }.propertyIsEnumerable("toString"),
          Ve = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        function He(e, n) {
          var a = Ve.length,
            t = e.constructor,
            i = (kn(t) && t.prototype) || r,
            o = "constructor";
          for (N(e, o) && !F(n, o) && n.push(o); a--; ) (o = Ve[a]) in e && e[o] !== i[o] && !F(n, o) && n.push(o);
        }
        function $e(e) {
          if (!vn(e)) return [];
          if (p) return p(e);
          var n = [];
          for (var a in e) N(e, a) && n.push(a);
          return Ke && He(e, n), n;
        }
        function Ye(e) {
          if (!vn(e)) return [];
          var n = [];
          for (var a in e) n.push(a);
          return Ke && He(e, n), n;
        }
        function Ze(e) {
          for (var n = $e(e), a = n.length, t = Array(a), i = 0; i < a; i++) t[i] = e[n[i]];
          return t;
        }
        function Qe(e, n, a) {
          n = w(n, a);
          for (var t = $e(e), i = t.length, r = {}, o = 0; o < i; o++) {
            var l = t[o];
            r[l] = n(e[l], l, e);
          }
          return r;
        }
        function Xe(e) {
          for (var n = $e(e), a = n.length, t = Array(a), i = 0; i < a; i++) t[i] = [n[i], e[n[i]]];
          return t;
        }
        function qe(e) {
          for (var n = {}, a = $e(e), t = 0, i = a.length; t < i; t++) n[e[a[t]]] = a[t];
          return n;
        }
        function Je(e) {
          var n = [];
          for (var a in e) kn(e[a]) && n.push(a);
          return n.sort();
        }
        function en(e, n) {
          return function (a) {
            var t = arguments.length;
            if ((n && (a = Object(a)), t < 2 || null == a)) return a;
            for (var i = 1; i < t; i++)
              for (var r = arguments[i], o = e(r), l = o.length, s = 0; s < l; s++) {
                var c = o[s];
                (n && void 0 !== a[c]) || (a[c] = r[c]);
              }
            return a;
          };
        }
        var nn = en(Ye),
          an = en($e);
        function tn(e, n, a) {
          n = w(n, a);
          for (var t, i = $e(e), r = 0, o = i.length; r < o; r++) if (n(e[(t = i[r])], t, e)) return t;
        }
        function rn(e, n, a) {
          return n in a;
        }
        var on = x(function (e, n) {
            var a = {},
              t = n[0];
            if (null == e) return a;
            kn(t) ? (n.length > 1 && (t = v(t, n[1])), (n = Ye(e))) : ((t = rn), (n = ue(n, !1, !1)), (e = Object(e)));
            for (var i = 0, r = n.length; i < r; i++) {
              var o = n[i],
                l = e[o];
              t(l, o, e) && (a[o] = l);
            }
            return a;
          }),
          ln = x(function (e, n) {
            var a,
              t = n[0];
            return (
              kn(t)
                ? ((t = Ue(t)), n.length > 1 && (a = n[1]))
                : ((n = B(ue(n, !1, !1), String)),
                  (t = function (e, a) {
                    return !F(n, a);
                  })),
              on(e, t, a)
            );
          }),
          sn = en(Ye, !0);
        function cn(e, n) {
          var a = S(e);
          return n && an(a, n), a;
        }
        function un(e) {
          return vn(e) ? (yn(e) ? e.slice() : nn({}, e)) : e;
        }
        function dn(e, n) {
          return n(e), e;
        }
        function pn(e, n) {
          var a = $e(n),
            t = a.length;
          if (null == e) return !t;
          for (var i = Object(e), r = 0; r < t; r++) {
            var o = a[r];
            if (n[o] !== i[o] || !(o in i)) return !1;
          }
          return !0;
        }
        function hn(e, n, a, t) {
          if (e === n) return 0 !== e || 1 / e == 1 / n;
          if (null == e || null == n) return !1;
          if (e != e) return n != n;
          var i = typeof e;
          return (
            ("function" === i || "object" === i || "object" == typeof n) &&
            (function (e, n, a, t) {
              e instanceof b && (e = e._wrapped);
              n instanceof b && (n = n._wrapped);
              var i = c.call(e);
              if (i !== c.call(n)) return !1;
              switch (i) {
                case "[object RegExp]":
                case "[object String]":
                  return "" + e == "" + n;
                case "[object Number]":
                  return +e != +e ? +n != +n : 0 == +e ? 1 / +e == 1 / n : +e == +n;
                case "[object Date]":
                case "[object Boolean]":
                  return +e == +n;
                case "[object Symbol]":
                  return o.valueOf.call(e) === o.valueOf.call(n);
              }
              var r = "[object Array]" === i;
              if (!r) {
                if ("object" != typeof e || "object" != typeof n) return !1;
                var l = e.constructor,
                  s = n.constructor;
                if (l !== s && !(kn(l) && l instanceof l && kn(s) && s instanceof s) && "constructor" in e && "constructor" in n) return !1;
              }
              t = t || [];
              var u = (a = a || []).length;
              for (; u--; ) if (a[u] === e) return t[u] === n;
              if ((a.push(e), t.push(n), r)) {
                if ((u = e.length) !== n.length) return !1;
                for (; u--; ) if (!hn(e[u], n[u], a, t)) return !1;
              } else {
                var d,
                  p = $e(e);
                if (((u = p.length), $e(n).length !== u)) return !1;
                for (; u--; ) if (((d = p[u]), !N(n, d) || !hn(e[d], n[d], a, t))) return !1;
              }
              return a.pop(), t.pop(), !0;
            })(e, n, a, t)
          );
        }
        function gn(e, n) {
          return hn(e, n);
        }
        function fn(e) {
          return null == e || (A(e) && (yn(e) || wn(e) || Cn(e)) ? 0 === e.length : 0 === $e(e).length);
        }
        function mn(e) {
          return !(!e || 1 !== e.nodeType);
        }
        function bn(e) {
          return function (n) {
            return c.call(n) === "[object " + e + "]";
          };
        }
        var yn = d || bn("Array");
        function vn(e) {
          var n = typeof e;
          return "function" === n || ("object" === n && !!e);
        }
        var Cn = bn("Arguments"),
          kn = bn("Function"),
          wn = bn("String"),
          xn = bn("Number"),
          Sn = bn("Date"),
          jn = bn("RegExp"),
          Nn = bn("Error"),
          On = bn("Symbol"),
          En = bn("Map"),
          Mn = bn("WeakMap"),
          An = bn("Set"),
          Pn = bn("WeakSet");
        !(function () {
          Cn(arguments) ||
            (Cn = function (e) {
              return N(e, "callee");
            });
        })();
        var Bn = t.document && t.document.childNodes;
        function Tn(e) {
          return !On(e) && f(e) && !g(parseFloat(e));
        }
        function Rn(e) {
          return xn(e) && g(e);
        }
        function Ln(e) {
          return !0 === e || !1 === e || "[object Boolean]" === c.call(e);
        }
        function _n(e) {
          return null === e;
        }
        function In(e) {
          return void 0 === e;
        }
        function Dn(e, n) {
          if (!yn(n)) return N(e, n);
          for (var a = n.length, t = 0; t < a; t++) {
            var i = n[t];
            if (null == e || !u.call(e, i)) return !1;
            e = e[i];
          }
          return !!a;
        }
        function Un(e) {
          return e;
        }
        function zn(e) {
          return function () {
            return e;
          };
        }
        function Fn() {}
        function Gn(e) {
          return yn(e)
            ? function (n) {
                return O(n, e);
              }
            : j(e);
        }
        function Wn(e) {
          return null == e
            ? function () {}
            : function (n) {
                return yn(n) ? O(e, n) : e[n];
              };
        }
        function Kn(e) {
          return (
            (e = an({}, e)),
            function (n) {
              return pn(n, e);
            }
          );
        }
        function Vn(e, n, a) {
          var t = Array(Math.max(0, e));
          n = v(n, a, 1);
          for (var i = 0; i < e; i++) t[i] = n(i);
          return t;
        }
        function Hn(e, n) {
          return null == n && ((n = e), (e = 0)), e + Math.floor(Math.random() * (n - e + 1));
        }
        "object" != typeof Int8Array &&
          "function" != typeof Bn &&
          (kn = function (e) {
            return "function" == typeof e || !1;
          });
        var $n =
            Date.now ||
            function () {
              return new Date().getTime();
            },
          Yn = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
          Zn = qe(Yn);
        function Qn(e) {
          var n = function (n) {
              return e[n];
            },
            a = "(?:" + $e(e).join("|") + ")",
            t = RegExp(a),
            i = RegExp(a, "g");
          return function (e) {
            return (e = null == e ? "" : "" + e), t.test(e) ? e.replace(i, n) : e;
          };
        }
        var Xn = Qn(Yn),
          qn = Qn(Zn);
        function Jn(e, n, a) {
          yn(n) || (n = [n]);
          var t = n.length;
          if (!t) return kn(a) ? a.call(e) : a;
          for (var i = 0; i < t; i++) {
            var r = null == e ? void 0 : e[n[i]];
            void 0 === r && ((r = a), (i = t)), (e = kn(r) ? r.call(e) : r);
          }
          return e;
        }
        var ea = 0;
        function na(e) {
          var n = ++ea + "";
          return e ? e + n : n;
        }
        var aa = (b.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }),
          ta = /(.)^/,
          ia = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
          ra = /\\|'|\r|\n|\u2028|\u2029/g,
          oa = function (e) {
            return "\\" + ia[e];
          };
        function la(e, n, a) {
          !n && a && (n = a), (n = sn({}, n, b.templateSettings));
          var t,
            i = RegExp([(n.escape || ta).source, (n.interpolate || ta).source, (n.evaluate || ta).source].join("|") + "|$", "g"),
            r = 0,
            o = "__p+='";
          e.replace(i, function (n, a, t, i, l) {
            return (
              (o += e.slice(r, l).replace(ra, oa)),
              (r = l + n.length),
              a
                ? (o += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'")
                : t
                ? (o += "'+\n((__t=(" + t + "))==null?'':__t)+\n'")
                : i && (o += "';\n" + i + "\n__p+='"),
              n
            );
          }),
            (o += "';\n"),
            n.variable || (o = "with(obj||{}){\n" + o + "}\n"),
            (o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n");
          try {
            t = new Function(n.variable || "obj", "_", o);
          } catch (e) {
            throw ((e.source = o), e);
          }
          var l = function (e) {
              return t.call(this, e, b);
            },
            s = n.variable || "obj";
          return (l.source = "function(" + s + "){\n" + o + "}"), l;
        }
        function sa(e) {
          var n = b(e);
          return (n._chain = !0), n;
        }
        function ca(e, n) {
          return e._chain ? b(n).chain() : n;
        }
        function ua(e) {
          return (
            P(Je(e), function (n) {
              var a = (b[n] = e[n]);
              b.prototype[n] = function () {
                var e = [this._wrapped];
                return l.apply(e, arguments), ca(this, a.apply(b, e));
              };
            }),
            b
          );
        }
        P(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
          var n = i[e];
          b.prototype[e] = function () {
            var a = this._wrapped;
            return n.apply(a, arguments), ("shift" !== e && "splice" !== e) || 0 !== a.length || delete a[0], ca(this, a);
          };
        }),
          P(["concat", "join", "slice"], function (e) {
            var n = i[e];
            b.prototype[e] = function () {
              return ca(this, n.apply(this._wrapped, arguments));
            };
          }),
          (b.prototype.value = function () {
            return this._wrapped;
          }),
          (b.prototype.valueOf = b.prototype.toJSON = b.prototype.value),
          (b.prototype.toString = function () {
            return String(this._wrapped);
          });
      }.call(this, a(13));
  },
  function (e, n, a) {
    "use strict";
    var t = a(44),
      i = a(151),
      r = a(59),
      o = a(152),
      l = a(153),
      s = a(154),
      c = a(155),
      u = a(156);
    (n.continents = i),
      (n.regions = r),
      (n.countries = { all: o }),
      t.each(o, function (e) {
        var a = n.countries[e.alpha2];
        (a && "deleted" !== a.status) || (n.countries[e.alpha2] = e);
        var t = n.countries[e.alpha3];
        (t && "deleted" !== t.status) || (n.countries[e.alpha3] = e);
      }),
      (n.currencies = { all: l }),
      t.each(l, function (e) {
        var a = u(e.code);
        "?" == a && (a = e.code), (e.symbol = a), (n.currencies[e.code] = e);
      }),
      (n.languages = { all: s }),
      t.each(s, function (e) {
        (n.languages[e.alpha2] = e), (n.languages[e.bibliographic] = e), (n.languages[e.alpha3] = e);
      }),
      (n.lookup = c({ countries: o, currencies: l, languages: s }));
    var d = { all: [] },
      p = t.reduce(
        o,
        function (e, n) {
          return (
            n.countryCallingCodes &&
              n.countryCallingCodes.length &&
              (d.all.push(n),
              (d[n.alpha2] = n),
              (d[n.alpha3] = n),
              t.each(n.countryCallingCodes, function (n) {
                -1 == e.indexOf(n) && e.push(n);
              })),
            e
          );
        },
        []
      );
    delete d[""],
      (n.callingCountries = d),
      p.sort(function (e, n) {
        var a = function (e) {
            return parseInt(e);
          },
          i = t.map(e.split(" "), a),
          r = t.map(n.split(" "), a);
        return i[0] < r[0]
          ? -1
          : i[0] > r[0]
          ? 1
          : void 0 === i[1] && void 0 !== r[1]
          ? -1
          : void 0 !== i[1] && void 0 === r[1]
          ? 1
          : i[1] < r[1]
          ? -1
          : i[1] > r[1]
          ? 1
          : 0;
      }),
      (n.callingCodes = { all: p });
  },
  ,
  function (e, n, a) {
    var t = a(22).Symbol;
    e.exports = t;
  },
  function (e, n, a) {
    "use strict";
    (function (e) {
      var a =
        (this && this.__spreadArrays) ||
        function () {
          for (var e = 0, n = 0, a = arguments.length; n < a; n++) e += arguments[n].length;
          var t = Array(e),
            i = 0;
          for (n = 0; n < a; n++) for (var r = arguments[n], o = 0, l = r.length; o < l; o++, i++) t[i] = r[o];
          return t;
        };
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t = function (e, n, a) {
        (this.name = e), (this.version = n), (this.os = a), (this.type = "browser");
      };
      n.BrowserInfo = t;
      var i = function (n) {
        (this.version = n), (this.type = "node"), (this.name = "node"), (this.os = e.platform);
      };
      n.NodeInfo = i;
      var r = function (e, n, a, t) {
        (this.name = e), (this.version = n), (this.os = a), (this.bot = t), (this.type = "bot-device");
      };
      n.SearchBotDeviceInfo = r;
      var o = function () {
        (this.type = "bot"), (this.bot = !0), (this.name = "bot"), (this.version = null), (this.os = null);
      };
      n.BotInfo = o;
      var l = function () {
        (this.type = "react-native"), (this.name = "react-native"), (this.version = null), (this.os = null);
      };
      n.ReactNativeInfo = l;
      var s = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        c = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /Edg\/([0-9\.]+)/],
          ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FBAV\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/
          ]
        ],
        u = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/]
        ];
      function d(e) {
        return (
          "" !== e &&
          c.reduce(function (n, a) {
            var t = a[0],
              i = a[1];
            if (n) return n;
            var r = i.exec(e);
            return !!r && [t, r];
          }, !1)
        );
      }
      function p(e) {
        var n = d(e);
        if (!n) return null;
        var i = n[0],
          l = n[1];
        if ("searchbot" === i) return new o();
        var c = l[1] && l[1].split(/[._]/).slice(0, 3);
        c
          ? c.length < 3 &&
            (c = a(
              c,
              (function (e) {
                for (var n = [], a = 0; a < e; a++) n.push("0");
                return n;
              })(3 - c.length)
            ))
          : (c = []);
        var u = c.join("."),
          p = h(e),
          g = s.exec(e);
        return g && g[1] ? new r(i, u, p, g[1]) : new t(i, c.join("."), p);
      }
      function h(e) {
        for (var n = 0, a = u.length; n < a; n++) {
          var t = u[n],
            i = t[0];
          if (t[1].exec(e)) return i;
        }
        return null;
      }
      function g() {
        return void 0 !== e && e.version ? new i(e.version.slice(1)) : null;
      }
      (n.detect = function (e) {
        return e
          ? p(e)
          : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
          ? new l()
          : "undefined" != typeof navigator
          ? p(navigator.userAgent)
          : g();
      }),
        (n.browserName = function (e) {
          var n = d(e);
          return n ? n[0] : null;
        }),
        (n.parseUserAgent = p),
        (n.detectOS = h),
        (n.getNodeVersion = g);
    }).call(this, a(37));
  },
  function (e, n, a) {
    var t;
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
      "use strict";
      var a = {}.hasOwnProperty;
      function i() {
        for (var e = [], n = 0; n < arguments.length; n++) {
          var t = arguments[n];
          if (t) {
            var r = typeof t;
            if ("string" === r || "number" === r) e.push(t);
            else if (Array.isArray(t) && t.length) {
              var o = i.apply(null, t);
              o && e.push(o);
            } else if ("object" === r) for (var l in t) a.call(t, l) && t[l] && e.push(l);
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((i.default = i), (e.exports = i))
        : void 0 ===
            (t = function () {
              return i;
            }.apply(n, [])) || (e.exports = t);
    })();
  },
  function (e, n, a) {
    "use strict";
    var t = { en: {} };
    const i = "Locales.language";
    n.a = class {
      constructor() {
        this.restoreLanguage();
      }
      get(e) {
        let n = "";
        return (
          t[this.language] && t[this.language][e]
            ? (n = t[this.language][e])
            : t[this.systemLanguage][e]
            ? (n = t[this.systemLanguage][e])
            : t.en[e] && (n = t.en[e]),
          n.replace(/%BROWSER%/, sdk.config.browser)
        );
      }
      getActiveLanguage() {
        return this.language;
      }
      getAllLanguages() {
        const e = [];
        for (const n in t) e.push(n);
        return e;
      }
      restoreLanguage() {
        let e;
        try {
          e = (window.navigator.userLanguage || window.navigator.language || "").substr(0, 2) || "en";
        } catch (n) {
          e = "en";
        }
        t[e] || (e = "en"),
          (this.systemLanguage = e),
          sdk && sdk.storage
            ? (this.language = sdk.storage.get(i) ? sdk.storage.get(i) : this.systemLanguage)
            : (this.language = this.systemLanguage),
          document.getElementsByTagName("body") &&
            document.getElementsByTagName("body")[0] &&
            (document.getElementsByTagName("body")[0].className = this.language);
      }
      getLanguage() {
        return sdk.storage.get(i) ? this.language : this.systemLanguage;
      }
      setLanguage(e) {
        return sdk.storage.set(i, e).then(() => {
          (this.language = e),
            document.getElementsByTagName("body") &&
              document.getElementsByTagName("body")[0] &&
              (document.getElementsByTagName("body")[0].className = this.language);
        });
      }
    };
  },
  function (e, n, a) {
    (function (n) {
      var a = "object" == typeof n && n && n.Object === Object && n;
      e.exports = a;
    }).call(this, a(13));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, n) {
    var a,
      t,
      i = (e.exports = {});
    function r() {
      throw new Error("setTimeout has not been defined");
    }
    function o() {
      throw new Error("clearTimeout has not been defined");
    }
    function l(e) {
      if (a === setTimeout) return setTimeout(e, 0);
      if ((a === r || !a) && setTimeout) return (a = setTimeout), setTimeout(e, 0);
      try {
        return a(e, 0);
      } catch (n) {
        try {
          return a.call(null, e, 0);
        } catch (n) {
          return a.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        a = "function" == typeof setTimeout ? setTimeout : r;
      } catch (e) {
        a = r;
      }
      try {
        t = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        t = o;
      }
    })();
    var s,
      c = [],
      u = !1,
      d = -1;
    function p() {
      u && s && ((u = !1), s.length ? (c = s.concat(c)) : (d = -1), c.length && h());
    }
    function h() {
      if (!u) {
        var e = l(p);
        u = !0;
        for (var n = c.length; n; ) {
          for (s = c, c = []; ++d < n; ) s && s[d].run();
          (d = -1), (n = c.length);
        }
        (s = null),
          (u = !1),
          (function (e) {
            if (t === clearTimeout) return clearTimeout(e);
            if ((t === o || !t) && clearTimeout) return (t = clearTimeout), clearTimeout(e);
            try {
              t(e);
            } catch (n) {
              try {
                return t.call(null, e);
              } catch (n) {
                return t.call(this, e);
              }
            }
          })(e);
      }
    }
    function g(e, n) {
      (this.fun = e), (this.array = n);
    }
    function f() {}
    (i.nextTick = function (e) {
      var n = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var a = 1; a < arguments.length; a++) n[a - 1] = arguments[a];
      c.push(new g(e, n)), 1 !== c.length || u || l(h);
    }),
      (g.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = f),
      (i.addListener = f),
      (i.once = f),
      (i.off = f),
      (i.removeListener = f),
      (i.removeAllListeners = f),
      (i.emit = f),
      (i.prependListener = f),
      (i.prependOnceListener = f),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, n, a) {
    var t = a(26),
      i = Object.prototype,
      r = i.hasOwnProperty,
      o = i.toString,
      l = t ? t.toStringTag : void 0;
    e.exports = function (e) {
      var n = r.call(e, l),
        a = e[l];
      try {
        e[l] = void 0;
        var t = !0;
      } catch (e) {}
      var i = o.call(e);
      return t && (n ? (e[l] = a) : delete e[l]), i;
    };
  },
  function (e, n) {
    var a = Object.prototype.toString;
    e.exports = function (e) {
      return a.call(e);
    };
  },
  ,
  ,
  function (e, n, a) {
    var t = a(2),
      i = a(43);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      ".input {\n  padding: 5px;\n  position: relative;\n  height: 20px;\n  background: #1b2024;\n  border-radius: 2px;\n}\n.input.notValid {\n  background: rgba(255, 82, 63, 0.3);\n}\n.input.notValid .notValidIcon {\n  display: block;\n}\n.input .label {\n  color: #65686d;\n  font-size: 14px;\n  position: absolute;\n  line-height: 30px;\n  top: 0;\n  transition: font-size 0.3s ease-in-out, line-height 0.3s ease-in-out;\n  z-index: 1;\n}\n.input .label.hidden {\n  font-size: 10px;\n  line-height: 10px;\n}\n.input.white {\n  border-color: #1b2024;\n  background: #ffffff;\n}\n.input.white .label {\n  color: #1b2024;\n}\n.input.white input {\n  color: #1b2024;\n}\n.input input {\n  width: 100%;\n  font-size: 14px;\n  color: #ffffff;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  resize: none;\n  outline: none;\n  transition: background-color 5000s ease-in-out 0s;\n  background: transparent;\n  position: absolute;\n  z-index: 2;\n  height: 20px;\n}\n.input img {\n  position: absolute;\n  width: 18px;\n  right: 0;\n  top: 15px;\n  height: 18px;\n  display: none;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    "use strict";
    a.r(n),
      a.d(n, "default", function () {
        return r;
      }),
      a.d(n, "VERSION", function () {
        return t.VERSION;
      }),
      a.d(n, "iteratee", function () {
        return t.iteratee;
      }),
      a.d(n, "restArguments", function () {
        return t.restArguments;
      }),
      a.d(n, "each", function () {
        return t.each;
      }),
      a.d(n, "forEach", function () {
        return t.forEach;
      }),
      a.d(n, "map", function () {
        return t.map;
      }),
      a.d(n, "collect", function () {
        return t.collect;
      }),
      a.d(n, "reduce", function () {
        return t.reduce;
      }),
      a.d(n, "foldl", function () {
        return t.foldl;
      }),
      a.d(n, "inject", function () {
        return t.inject;
      }),
      a.d(n, "reduceRight", function () {
        return t.reduceRight;
      }),
      a.d(n, "foldr", function () {
        return t.foldr;
      }),
      a.d(n, "find", function () {
        return t.find;
      }),
      a.d(n, "detect", function () {
        return t.detect;
      }),
      a.d(n, "filter", function () {
        return t.filter;
      }),
      a.d(n, "select", function () {
        return t.select;
      }),
      a.d(n, "reject", function () {
        return t.reject;
      }),
      a.d(n, "every", function () {
        return t.every;
      }),
      a.d(n, "all", function () {
        return t.all;
      }),
      a.d(n, "some", function () {
        return t.some;
      }),
      a.d(n, "any", function () {
        return t.any;
      }),
      a.d(n, "contains", function () {
        return t.contains;
      }),
      a.d(n, "includes", function () {
        return t.includes;
      }),
      a.d(n, "include", function () {
        return t.include;
      }),
      a.d(n, "invoke", function () {
        return t.invoke;
      }),
      a.d(n, "pluck", function () {
        return t.pluck;
      }),
      a.d(n, "where", function () {
        return t.where;
      }),
      a.d(n, "findWhere", function () {
        return t.findWhere;
      }),
      a.d(n, "max", function () {
        return t.max;
      }),
      a.d(n, "min", function () {
        return t.min;
      }),
      a.d(n, "shuffle", function () {
        return t.shuffle;
      }),
      a.d(n, "sample", function () {
        return t.sample;
      }),
      a.d(n, "sortBy", function () {
        return t.sortBy;
      }),
      a.d(n, "groupBy", function () {
        return t.groupBy;
      }),
      a.d(n, "indexBy", function () {
        return t.indexBy;
      }),
      a.d(n, "countBy", function () {
        return t.countBy;
      }),
      a.d(n, "toArray", function () {
        return t.toArray;
      }),
      a.d(n, "size", function () {
        return t.size;
      }),
      a.d(n, "partition", function () {
        return t.partition;
      }),
      a.d(n, "first", function () {
        return t.first;
      }),
      a.d(n, "head", function () {
        return t.head;
      }),
      a.d(n, "take", function () {
        return t.take;
      }),
      a.d(n, "initial", function () {
        return t.initial;
      }),
      a.d(n, "last", function () {
        return t.last;
      }),
      a.d(n, "rest", function () {
        return t.rest;
      }),
      a.d(n, "tail", function () {
        return t.tail;
      }),
      a.d(n, "drop", function () {
        return t.drop;
      }),
      a.d(n, "compact", function () {
        return t.compact;
      }),
      a.d(n, "flatten", function () {
        return t.flatten;
      }),
      a.d(n, "without", function () {
        return t.without;
      }),
      a.d(n, "uniq", function () {
        return t.uniq;
      }),
      a.d(n, "unique", function () {
        return t.unique;
      }),
      a.d(n, "union", function () {
        return t.union;
      }),
      a.d(n, "intersection", function () {
        return t.intersection;
      }),
      a.d(n, "difference", function () {
        return t.difference;
      }),
      a.d(n, "unzip", function () {
        return t.unzip;
      }),
      a.d(n, "zip", function () {
        return t.zip;
      }),
      a.d(n, "object", function () {
        return t.object;
      }),
      a.d(n, "findIndex", function () {
        return t.findIndex;
      }),
      a.d(n, "findLastIndex", function () {
        return t.findLastIndex;
      }),
      a.d(n, "sortedIndex", function () {
        return t.sortedIndex;
      }),
      a.d(n, "indexOf", function () {
        return t.indexOf;
      }),
      a.d(n, "lastIndexOf", function () {
        return t.lastIndexOf;
      }),
      a.d(n, "range", function () {
        return t.range;
      }),
      a.d(n, "chunk", function () {
        return t.chunk;
      }),
      a.d(n, "bind", function () {
        return t.bind;
      }),
      a.d(n, "partial", function () {
        return t.partial;
      }),
      a.d(n, "bindAll", function () {
        return t.bindAll;
      }),
      a.d(n, "memoize", function () {
        return t.memoize;
      }),
      a.d(n, "delay", function () {
        return t.delay;
      }),
      a.d(n, "defer", function () {
        return t.defer;
      }),
      a.d(n, "throttle", function () {
        return t.throttle;
      }),
      a.d(n, "debounce", function () {
        return t.debounce;
      }),
      a.d(n, "wrap", function () {
        return t.wrap;
      }),
      a.d(n, "negate", function () {
        return t.negate;
      }),
      a.d(n, "compose", function () {
        return t.compose;
      }),
      a.d(n, "after", function () {
        return t.after;
      }),
      a.d(n, "before", function () {
        return t.before;
      }),
      a.d(n, "once", function () {
        return t.once;
      }),
      a.d(n, "keys", function () {
        return t.keys;
      }),
      a.d(n, "allKeys", function () {
        return t.allKeys;
      }),
      a.d(n, "values", function () {
        return t.values;
      }),
      a.d(n, "mapObject", function () {
        return t.mapObject;
      }),
      a.d(n, "pairs", function () {
        return t.pairs;
      }),
      a.d(n, "invert", function () {
        return t.invert;
      }),
      a.d(n, "functions", function () {
        return t.functions;
      }),
      a.d(n, "methods", function () {
        return t.methods;
      }),
      a.d(n, "extend", function () {
        return t.extend;
      }),
      a.d(n, "extendOwn", function () {
        return t.extendOwn;
      }),
      a.d(n, "assign", function () {
        return t.assign;
      }),
      a.d(n, "findKey", function () {
        return t.findKey;
      }),
      a.d(n, "pick", function () {
        return t.pick;
      }),
      a.d(n, "omit", function () {
        return t.omit;
      }),
      a.d(n, "defaults", function () {
        return t.defaults;
      }),
      a.d(n, "create", function () {
        return t.create;
      }),
      a.d(n, "clone", function () {
        return t.clone;
      }),
      a.d(n, "tap", function () {
        return t.tap;
      }),
      a.d(n, "isMatch", function () {
        return t.isMatch;
      }),
      a.d(n, "isEqual", function () {
        return t.isEqual;
      }),
      a.d(n, "isEmpty", function () {
        return t.isEmpty;
      }),
      a.d(n, "isElement", function () {
        return t.isElement;
      }),
      a.d(n, "isArray", function () {
        return t.isArray;
      }),
      a.d(n, "isObject", function () {
        return t.isObject;
      }),
      a.d(n, "isArguments", function () {
        return t.isArguments;
      }),
      a.d(n, "isFunction", function () {
        return t.isFunction;
      }),
      a.d(n, "isString", function () {
        return t.isString;
      }),
      a.d(n, "isNumber", function () {
        return t.isNumber;
      }),
      a.d(n, "isDate", function () {
        return t.isDate;
      }),
      a.d(n, "isRegExp", function () {
        return t.isRegExp;
      }),
      a.d(n, "isError", function () {
        return t.isError;
      }),
      a.d(n, "isSymbol", function () {
        return t.isSymbol;
      }),
      a.d(n, "isMap", function () {
        return t.isMap;
      }),
      a.d(n, "isWeakMap", function () {
        return t.isWeakMap;
      }),
      a.d(n, "isSet", function () {
        return t.isSet;
      }),
      a.d(n, "isWeakSet", function () {
        return t.isWeakSet;
      }),
      a.d(n, "isFinite", function () {
        return t.isFinite;
      }),
      a.d(n, "isNaN", function () {
        return t.isNaN;
      }),
      a.d(n, "isBoolean", function () {
        return t.isBoolean;
      }),
      a.d(n, "isNull", function () {
        return t.isNull;
      }),
      a.d(n, "isUndefined", function () {
        return t.isUndefined;
      }),
      a.d(n, "has", function () {
        return t.has;
      }),
      a.d(n, "identity", function () {
        return t.identity;
      }),
      a.d(n, "constant", function () {
        return t.constant;
      }),
      a.d(n, "noop", function () {
        return t.noop;
      }),
      a.d(n, "property", function () {
        return t.property;
      }),
      a.d(n, "propertyOf", function () {
        return t.propertyOf;
      }),
      a.d(n, "matcher", function () {
        return t.matcher;
      }),
      a.d(n, "matches", function () {
        return t.matches;
      }),
      a.d(n, "times", function () {
        return t.times;
      }),
      a.d(n, "random", function () {
        return t.random;
      }),
      a.d(n, "now", function () {
        return t.now;
      }),
      a.d(n, "escape", function () {
        return t.escape;
      }),
      a.d(n, "unescape", function () {
        return t.unescape;
      }),
      a.d(n, "result", function () {
        return t.result;
      }),
      a.d(n, "uniqueId", function () {
        return t.uniqueId;
      }),
      a.d(n, "templateSettings", function () {
        return t.templateSettings;
      }),
      a.d(n, "template", function () {
        return t.template;
      }),
      a.d(n, "chain", function () {
        return t.chain;
      }),
      a.d(n, "mixin", function () {
        return t.mixin;
      });
    var t = a(23),
      i = Object(t.mixin)(t);
    i._ = i;
    var r = i;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, n, a) {
    "use strict";
    var t = {
      centralAsia: { name: "Central Asia", countries: ["KZ", "KG", "TJ", "TM", "UZ"] },
      southernAsia: { name: "Southern Asia", countries: ["AF", "BD", "BT", "IO", "IN", "IR", "MV", "NP", "PK", "LK"] },
      southeastAsia: { name: "Southeast Asia", countries: ["BN", "KH", "CX", "CC", "TL", "ID", "LA", "MY", "MM", "PH", "SG", "TH", "VN"] },
      eastAsia: { name: "East Asia", countries: ["CN", "HK", "JP", "KP", "KR", "MO", "MN", "TW"] },
      westernAsia: {
        name: "Western Asia",
        countries: ["AM", "AZ", "BH", "IQ", "IL", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "AE", "YE"]
      },
      centralAfrica: { name: "Central Aftrica", countries: ["AO", "CM", "CF", "TD", "CG", "CD", "GQ", "GA", "ST"] },
      northAfrica: { name: "North Africa", countries: ["DZ", "EG", "LY", "MA", "SD", "TN", "EH"] },
      southernAfrica: { name: "Southern Africa", countries: ["BW", "LS", "NA", "ZA", "SZ"] },
      eastAfrica: {
        name: "East Africa",
        countries: ["BI", "KM", "DJ", "ER", "ET", "KE", "MG", "MW", "MU", "YT", "MZ", "RE", "RW", "SC", "SO", "SS", "TZ", "UG", "ZM", "ZW"]
      },
      westAfrica: {
        name: "West Africa",
        countries: ["BJ", "BF", "CV", "CI", "GM", "GH", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SN", "SL", "TG"]
      },
      centralAmerica: { name: "Central America", countries: ["BZ", "CR", "SV", "GT", "HN", "NI", "PA"] },
      northernAmerica: { name: "Northern America", countries: ["BM", "CA", "GL", "MX", "PM", "US"] },
      caribbean: {
        name: "Caribbean",
        countries: [
          "AI",
          "AG",
          "AW",
          "BS",
          "BB",
          "BQ",
          "VG",
          "KY",
          "CU",
          "CW",
          "DM",
          "DO",
          "GD",
          "GP",
          "HT",
          "JM",
          "MQ",
          "MS",
          "PR",
          "BL",
          "KN",
          "LC",
          "MF",
          "VC",
          "SX",
          "TT",
          "TC",
          "VI"
        ]
      },
      southAmerica: {
        name: "South America",
        countries: ["AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PY", "PE", "SR", "UY", "VE"]
      },
      antartica: { name: "Antartica", countries: ["AQ", "BV", "TF", "HM", "GS"] },
      northernEurope: {
        name: "Northern Europe",
        countries: ["AX", "DK", "EE", "FO", "FI", "GG", "IS", "IE", "JE", "IM", "LV", "LT", "NO", "SJ", "SE", "GB"]
      },
      southernEurope: {
        name: "Southern Europe",
        countries: ["AL", "AD", "BA", "HR", "CY", "GI", "GR", "IT", "MK", "VA", "MT", "ME", "PT", "SM", "RS", "SI", "ES"]
      },
      easternEurope: { name: "Eastern Europe", countries: ["BY", "BG", "CZ", "GE", "HU", "MD", "PL", "RO", "RU", "SK", "UA"] },
      westernEurope: { name: "Western Europe", countries: ["AT", "BE", "FR", "DE", "LI", "LU", "MC", "NL", "CH"] },
      australia: { name: "Australia", countries: ["AU", "NF", "NZ"] },
      melanesia: { name: "Melanesia", countries: ["FJ", "NC", "PG", "SB", "VU"] },
      micronesia: { name: "Micronesia", countries: ["GU", "KI", "MH", "FM", "NR", "MP", "PW", "UM"] },
      polynesia: { name: "Polynesia", countries: ["AS", "CK", "PF", "NU", "PN", "WS", "TK", "TO", "TV", "WF"] }
    };
    e.exports = t;
  },
  ,
  ,
  ,
  ,
  function (e, n, a) {
    var t = a(15),
      i = a(16);
    e.exports = function (e) {
      return !0 === e || !1 === e || (i(e) && "[object Boolean]" == t(e));
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, n, a) {
    var t = a(2),
      i = a(140);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "@font-face {\n  font-family: 'GothamPro';\n  src: url('/static/assets/fonts/GothamPro-Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: 'GothamPro';\n  src: url('/static/assets/fonts/GothamPro-Regular.ttf');\n  font-weight: normal;\n}\n@font-face {\n  font-family: 'GothamPro';\n  src: url('/static/assets/fonts/GothamPro-Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'GothamPro';\n  src: url('/static/assets/fonts/GothamPro-Bold.ttf');\n  font-weight: 700;\n}\nbody {\n  margin: 0;\n  width: 375px;\n  height: 600px;\n  overflow: hidden;\n  font-family: 'GothamPro', Arial, sans-serif;\n  color: #ffffff;\n  cursor: default;\n  background: #23282e;\n  user-select: none;\n  -o-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n}\nbody input {\n  font-family: 'GothamPro', Arial, sans-serif;\n}\nbody .linebreak {\n  white-space: pre-line;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(142);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#page {\n  width: 375px;\n  height: 600px;\n  overflow: hidden;\n}\n#page .widget {\n  background: #282f37;\n  margin-top: 10px;\n  display: none;\n  padding: 10px;\n  opacity: 1;\n  transition: height 0.1s ease-in-out;\n  margin-left: 6px;\n  border-radius: 4px;\n}\n#page .widget .title {\n  font-size: 14px;\n  text-align: center;\n}\n#page .widget .title span {\n  font-size: 12px;\n}\n#page .widget .description {\n  font-weight: 300;\n  font-size: 14px;\n  color: #bdc2c6;\n  margin-top: 5px;\n}\n#page .widget .counter {\n  text-align: center;\n  margin-top: 5px;\n}\n#page .widget .counter .number {\n  font-size: 14px;\n  font-weight: 500;\n}\n#page .widget .counter .text {\n  color: #bdc2c6;\n  font-size: 12px;\n}\n#page .widget .switcher {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 14px;\n}\n#page .widget .switcher span {\n  cursor: pointer;\n}\n#page .widget .switcher.on {\n  color: #40c584;\n}\n#page .widget .switcher.off {\n  color: #ff4600;\n}\n#page .widget.connected {\n  display: block;\n}\n#page .widget.postConnection {\n  display: block;\n  animation-name: FadeIn;\n  animation-duration: 1s;\n}\n#page .widget2 {\n  background: #282f37;\n  display: none;\n  padding: 5px 10px;\n  opacity: 1;\n  transition: height 0.1s ease-in-out;\n  margin-left: 6px;\n  border-radius: 4px;\n  align-items: center;\n  position: relative;\n}\n#page .widget2 .title {\n  font-size: 14px;\n  text-align: center;\n}\n#page .widget2 .title span {\n  font-size: 12px;\n}\n#page .widget2 .description {\n  font-weight: 300;\n  font-size: 14px;\n  color: #bdc2c6;\n  margin-top: 5px;\n  overflow: hidden;\n  width: 0;\n  height: 0;\n}\n#page .widget2 .counter {\n  text-align: center;\n  margin-top: 5px;\n}\n#page .widget2 .counter .number {\n  font-size: 14px;\n  font-weight: 500;\n}\n#page .widget2 .counter .text {\n  color: #bdc2c6;\n  font-size: 12px;\n}\n#page .widget2 .switcher {\n  text-align: center;\n  font-size: 14px;\n  position: absolute;\n  right: 15px;\n}\n#page .widget2 .switcher span {\n  cursor: pointer;\n}\n#page .widget2 .switcher.on {\n  color: #40c584;\n}\n#page .widget2 .switcher.off {\n  color: #ff4600;\n}\n#page .widget2.connected {\n  display: flex;\n}\n#page .widget2.postConnection {\n  display: flex;\n  animation-name: FadeIn;\n  animation-duration: 1s;\n}\n#page .scroll {\n  overflow: auto;\n  width: 100%;\n  height: 445px;\n  margin-top: 140px;\n  padding-bottom: 11px;\n}\n#page .scroll::-webkit-scrollbar {\n  width: 6px;\n}\n#page .scroll::-webkit-scrollbar-track {\n  background: #23282e;\n  border-radius: 9px;\n}\n#page .scroll::-webkit-scrollbar-thumb {\n  background: #23282e;\n  border-radius: 9px;\n}\n#page .scroll:hover::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.29);\n}\n@keyframes FadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(144);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      ".data-consent {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 600px;\n  position: relative;\n  padding: 40px 32px;\n  background: #23282E;\n}\n.data-consent__content {\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n  flex-grow: 1;\n  margin-bottom: 100px;\n}\n.data-consent__content > h1 {\n  font-family: 'GothamPro', Arial, sans-serif;\n  font-size: 24px;\n  line-height: 32px;\n  color: #F9F9F9;\n  margin: 24px 0 6px;\n}\n.data-consent__content > p {\n  font-family: 'WorkSans', Arial, sans-serif;\n  font-size: 14px;\n  line-height: 22px;\n  color: #FFFFFF;\n  margin: 6px 0;\n}\n.data-consent__content > p:last-of-type {\n  padding-bottom: 100px;\n}\n.data-consent__button-group {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 32px;\n  background: #282F37;\n  opacity: 0.8;\n}\n.data-consent__accept-button {\n  padding: 10px;\n  margin: 6px 0;\n  flex: 0 0 20px;\n}\n.data-consent__settings-button {\n  padding: 10px;\n  margin: 6px 0;\n  flex: 0 0 20px;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(146);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      ".touchvpn-header__extra {\n  color: #000000;\n  font-family: GothamPro, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  line-height: 140%;\n}\n.button {\n  color: #000000;\n  font-family: GothamPro, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  line-height: 160%;\n  color: #ffffff;\n  padding: 16px;\n  margin: 4px;\n  box-sizing: border-box;\n  border: none;\n  border-radius: 100px;\n  width: 288px;\n  height: 58px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.button:focus,\n.button:active {\n  outline: none;\n}\n.button--short {\n  width: 166px;\n}\n.button--transparent {\n  background: transparent;\n  color: #FE573F;\n  border: 2px solid #FE573F;\n}\n.button--transparent:hover:not(.button--borderless),\n.button--transparent:focus:not(.button--borderless) {\n  background: #CD3822;\n  color: #ffffff;\n  border: none;\n}\n.button--borderless {\n  border: none;\n}\n.button--red {\n  background: #FE573F;\n  color: #ffffff;\n}\n.button--red:hover,\n.button--red:focus {\n  background: #CD3822;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(148);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      '.data-consent-banner {\n  position: absolute;\n  width: 100%;\n  height: 200px;\n  left: 0;\n  bottom: 0;\n  z-index: 5000;\n  padding: 24px;\n  box-sizing: border-box;\n  background: #282F37;\n  backdrop-filter: blur(10px);\n  display: grid;\n  grid-template-areas: "title close" "text text" "accept accept";\n  grid-template-rows: auto auto;\n  grid-template-columns: auto min-content;\n}\n.data-consent-banner__title {\n  grid-area: title;\n  font-family: \'GothamPro\', Arial, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 160%;\n  color: white;\n  margin: 0;\n}\n.data-consent-banner__text {\n  grid-area: text;\n  font-family: \'GothamPro\', Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: white;\n  margin: 0;\n}\n.data-consent-banner__accept {\n  grid-area: accept;\n  justify-self: start;\n  width: 100%;\n}\n.data-consent-banner__close {\n  grid-area: close;\n  font-size: 12px;\n  line-height: 18px;\n  color: #FFFFFF;\n  justify-self: start;\n  cursor: pointer;\n}\n',
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(150);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#Main {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  height: 556px;\n  box-shadow: 0 5px 10px #000;\n  transition: height 0.5s ease-in-out;\n  background-image: url('/static/assets/map.png');\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center center;\n}\n#Main .disconnectedDescription {\n  color: #bdc2c6;\n  font-size: 14px;\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  top: 140px;\n}\n#Main .disconnectedDescription .location {\n  margin-top: 10px;\n  text-align: center;\n}\n#Main .disconnectedDescription .location span {\n  font-size: 16px;\n  color: #ffffff;\n  cursor: pointer;\n}\n#Main .disconnectedDescription .location span img {\n  height: 8px;\n}\n#Main.connected,\n#Main.postConnection {\n  height: 90px;\n}\n#Main .connectedInfo {\n  position: absolute;\n  left: 20px;\n  font-size: 14px;\n  top: 10px;\n  opacity: 1;\n}\n#Main .connectedInfo.postConnection {\n  animation-name: FadeIn;\n  animation-duration: 1s;\n}\n#Main .connectedInfo .browsingFromText {\n  color: #40c584;\n}\n#Main .connectedInfo .browsingFromlocation {\n  color: #ffffff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n#Main .connectedInfo .browsingFromlocation img {\n  height: 6px;\n  margin-top: 3px;\n  margin-left: 5px;\n}\n#Main .connectionStatus {\n  position: absolute;\n  bottom: 10px;\n  left: 20px;\n  display: flex;\n  opacity: 1;\n}\n#Main .connectionStatus.postConnection {\n  animation-name: FadeIn;\n  animation-duration: 1s;\n}\n#Main .connectionStatus .element {\n  width: 90px;\n}\n#Main .connectionStatus .element div:first-child {\n  font-size: 14px;\n  color: #ffffff;\n}\n#Main .connectionStatus .element div:first-child span {\n  padding-left: 5px;\n  font-size: 10px;\n}\n#Main .connectionStatus .element div:last-child {\n  font-size: 12px;\n  color: #bdc2c6;\n}\n#Main .gdpr {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  bottom: 25px;\n  color: #bdc2c6;\n}\n#Main .gdpr a {\n  color: #bdc2c6;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    "use strict";
    var t = a(44),
      i = a(59),
      r = {};
    (r.asia = {
      name: "Asia",
      regions: ["centralAsia", "southernAsia", "southeastAsia", "eastAsia", "westernAsia"],
      countries: t
        .flatten([
          i.centralAsia.countries,
          i.southernAsia.countries,
          i.southeastAsia.countries,
          i.eastAsia.countries,
          i.westernAsia.countries
        ])
        .sort()
    }),
      (r.africa = {
        name: "Africa",
        regions: ["centralAfrica", "northAfrica", "southernAfrica", "eastAfrica", "westAfrica"],
        countries: t
          .flatten([
            i.centralAfrica.countries,
            i.northAfrica.countries,
            i.southernAfrica.countries,
            i.eastAfrica.countries,
            i.westAfrica.countries
          ])
          .sort()
      }),
      (r.northAmerica = {
        name: "North America",
        regions: ["centralAmerica", "northernAmerica", "caribbean"],
        countries: t.flatten([i.centralAmerica.countries, i.northernAmerica.countries, i.caribbean.countries]).sort()
      }),
      (r.southAmerica = { name: "South America", regions: ["southAmerica"], countries: t.flatten([i.southAmerica.countries]).sort() }),
      (r.antartica = { name: "Antartica", regions: ["antartica"], countries: t.flatten([i.antartica.countries]).sort() }),
      (r.europe = {
        name: "Europe",
        regions: ["northernEurope", "southernEurope", "easternEurope", "westernEurope"],
        countries: t
          .flatten([i.northernEurope.countries, i.southernEurope.countries, i.easternEurope.countries, i.westernEurope.countries])
          .sort()
      }),
      (r.oceania = {
        name: "Oceania",
        regions: ["australia", "melanesia", "micronesia", "polynesia"],
        countries: t.flatten([i.australia.countries, i.melanesia.countries, i.micronesia.countries, i.polynesia.countries]).sort()
      }),
      (e.exports = r);
  },
  function (e) {
    e.exports = JSON.parse(
      '[{"alpha2":"AC","alpha3":"","countryCallingCodes":["+247"],"currencies":["USD"],"emoji":"","ioc":"SHP","languages":["eng"],"name":"Ascension Island","status":"reserved"},{"alpha2":"AD","alpha3":"AND","countryCallingCodes":["+376"],"currencies":["EUR"],"emoji":"🇦🇩","ioc":"AND","languages":["cat"],"name":"Andorra","status":"assigned"},{"alpha2":"AE","alpha3":"ARE","countryCallingCodes":["+971"],"currencies":["AED"],"emoji":"🇦🇪","ioc":"UAE","languages":["ara"],"name":"United Arab Emirates","status":"assigned"},{"alpha2":"AF","alpha3":"AFG","countryCallingCodes":["+93"],"currencies":["AFN"],"emoji":"🇦🇫","ioc":"AFG","languages":["pus"],"name":"Afghanistan","status":"assigned"},{"alpha2":"AG","alpha3":"ATG","countryCallingCodes":["+1 268"],"currencies":["XCD"],"emoji":"🇦🇬","ioc":"ANT","languages":["eng"],"name":"Antigua And Barbuda","status":"assigned"},{"alpha2":"AI","alpha3":"AIA","countryCallingCodes":["+1 264"],"currencies":["XCD"],"emoji":"🇦🇮","ioc":"","languages":["eng"],"name":"Anguilla","status":"assigned"},{"alpha2":"AI","alpha3":"AFI","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"French Afar and Issas","status":"deleted"},{"alpha2":"AL","alpha3":"ALB","countryCallingCodes":["+355"],"currencies":["ALL"],"emoji":"🇦🇱","ioc":"ALB","languages":["sqi"],"name":"Albania","status":"assigned"},{"alpha2":"AM","alpha3":"ARM","countryCallingCodes":["+374"],"currencies":["AMD"],"emoji":"🇦🇲","ioc":"ARM","languages":["hye","rus"],"name":"Armenia","status":"assigned"},{"alpha2":"AN","alpha3":"ANT","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Netherlands Antilles","status":"deleted"},{"alpha2":"AO","alpha3":"AGO","countryCallingCodes":["+244"],"currencies":["AOA"],"emoji":"🇦🇴","ioc":"ANG","languages":["por"],"name":"Angola","status":"assigned"},{"alpha2":"AQ","alpha3":"ATA","countryCallingCodes":["+672"],"currencies":[],"emoji":"🇦🇶","ioc":"","languages":[],"name":"Antarctica","status":"assigned"},{"alpha2":"AR","alpha3":"ARG","countryCallingCodes":["+54"],"currencies":["ARS"],"emoji":"🇦🇷","ioc":"ARG","languages":["spa"],"name":"Argentina","status":"assigned"},{"alpha2":"AS","alpha3":"ASM","countryCallingCodes":["+1 684"],"currencies":["USD"],"emoji":"🇦🇸","ioc":"ASA","languages":["eng","smo"],"name":"American Samoa","status":"assigned"},{"alpha2":"AT","alpha3":"AUT","countryCallingCodes":["+43"],"currencies":["EUR"],"emoji":"🇦🇹","ioc":"AUT","languages":["deu"],"name":"Austria","status":"assigned"},{"alpha2":"AU","alpha3":"AUS","countryCallingCodes":["+61"],"currencies":["AUD"],"emoji":"🇦🇺","ioc":"AUS","languages":["eng"],"name":"Australia","status":"assigned"},{"alpha2":"AW","alpha3":"ABW","countryCallingCodes":["+297"],"currencies":["AWG"],"emoji":"🇦🇼","ioc":"ARU","languages":["nld"],"name":"Aruba","status":"assigned"},{"alpha2":"AX","alpha3":"ALA","countryCallingCodes":["+358"],"currencies":["EUR"],"emoji":"🇦🇽","ioc":"","languages":["swe"],"name":"Åland Islands","status":"assigned"},{"alpha2":"AZ","alpha3":"AZE","countryCallingCodes":["+994"],"currencies":["AZN"],"emoji":"🇦🇿","ioc":"AZE","languages":["aze"],"name":"Azerbaijan","status":"assigned"},{"alpha2":"BA","alpha3":"BIH","countryCallingCodes":["+387"],"currencies":["BAM"],"emoji":"🇧🇦","ioc":"BIH","languages":["bos","cre","srp"],"name":"Bosnia & Herzegovina","status":"assigned"},{"alpha2":"BB","alpha3":"BRB","countryCallingCodes":["+1 246"],"currencies":["BBD"],"emoji":"🇧🇧","ioc":"BAR","languages":["eng"],"name":"Barbados","status":"assigned"},{"alpha2":"BD","alpha3":"BGD","countryCallingCodes":["+880"],"currencies":["BDT"],"emoji":"🇧🇩","ioc":"BAN","languages":["ben"],"name":"Bangladesh","status":"assigned"},{"alpha2":"BE","alpha3":"BEL","countryCallingCodes":["+32"],"currencies":["EUR"],"emoji":"🇧🇪","ioc":"BEL","languages":["nld","fra","deu"],"name":"Belgium","status":"assigned"},{"alpha2":"BF","alpha3":"BFA","countryCallingCodes":["+226"],"currencies":["XOF"],"emoji":"🇧🇫","ioc":"BUR","languages":["fra"],"name":"Burkina Faso","status":"assigned"},{"alpha2":"BG","alpha3":"BGR","countryCallingCodes":["+359"],"currencies":["BGN"],"emoji":"🇧🇬","ioc":"BUL","languages":["bul"],"name":"Bulgaria","status":"assigned"},{"alpha2":"BH","alpha3":"BHR","countryCallingCodes":["+973"],"currencies":["BHD"],"emoji":"🇧🇭","ioc":"BRN","languages":["ara"],"name":"Bahrain","status":"assigned"},{"alpha2":"BI","alpha3":"BDI","countryCallingCodes":["+257"],"currencies":["BIF"],"emoji":"🇧🇮","ioc":"BDI","languages":["fra"],"name":"Burundi","status":"assigned"},{"alpha2":"BJ","alpha3":"BEN","countryCallingCodes":["+229"],"currencies":["XOF"],"emoji":"🇧🇯","ioc":"BEN","languages":["fra"],"name":"Benin","status":"assigned"},{"alpha2":"BL","alpha3":"BLM","countryCallingCodes":["+590"],"currencies":["EUR"],"emoji":"🇧🇱","ioc":"","languages":["fra"],"name":"Saint Barthélemy","status":"assigned"},{"alpha2":"BM","alpha3":"BMU","countryCallingCodes":["+1 441"],"currencies":["BMD"],"emoji":"🇧🇲","ioc":"BER","languages":["eng"],"name":"Bermuda","status":"assigned"},{"alpha2":"BN","alpha3":"BRN","countryCallingCodes":["+673"],"currencies":["BND"],"emoji":"🇧🇳","ioc":"BRU","languages":["msa","eng"],"name":"Brunei Darussalam","status":"assigned"},{"alpha2":"BO","alpha3":"BOL","countryCallingCodes":["+591"],"currencies":["BOB","BOV"],"emoji":"🇧🇴","ioc":"BOL","languages":["spa","aym","que"],"name":"Bolivia, Plurinational State Of","status":"assigned"},{"alpha2":"BQ","alpha3":"BES","countryCallingCodes":["+599"],"currencies":["USD"],"emoji":"🇧🇶","ioc":"","languages":["nld"],"name":"Bonaire, Saint Eustatius And Saba","status":"assigned"},{"alpha2":"BQ","alpha3":"ATB","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"British Antarctic Territory","status":"deleted"},{"alpha2":"BR","alpha3":"BRA","countryCallingCodes":["+55"],"currencies":["BRL"],"emoji":"🇧🇷","ioc":"BRA","languages":["por"],"name":"Brazil","status":"assigned"},{"alpha2":"BS","alpha3":"BHS","countryCallingCodes":["+1 242"],"currencies":["BSD"],"emoji":"🇧🇸","ioc":"BAH","languages":["eng"],"name":"Bahamas","status":"assigned"},{"alpha2":"BT","alpha3":"BTN","countryCallingCodes":["+975"],"currencies":["INR","BTN"],"emoji":"🇧🇹","ioc":"BHU","languages":["dzo"],"name":"Bhutan","status":"assigned"},{"alpha2":"BU","alpha3":"BUR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Burma","status":"deleted"},{"alpha2":"BV","alpha3":"BVT","countryCallingCodes":[],"currencies":["NOK"],"emoji":"🇧🇻","ioc":"","languages":[],"name":"Bouvet Island","status":"assigned"},{"alpha2":"BW","alpha3":"BWA","countryCallingCodes":["+267"],"currencies":["BWP"],"emoji":"🇧🇼","ioc":"BOT","languages":["eng","tsn"],"name":"Botswana","status":"assigned"},{"alpha2":"BY","alpha3":"BLR","countryCallingCodes":["+375"],"currencies":["BYR"],"emoji":"🇧🇾","ioc":"BLR","languages":["bel","rus"],"name":"Belarus","status":"assigned"},{"alpha2":"BY","alpha3":"BYS","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Byelorussian SSR","status":"deleted"},{"alpha2":"BZ","alpha3":"BLZ","countryCallingCodes":["+501"],"currencies":["BZD"],"emoji":"🇧🇿","ioc":"BIZ","languages":["eng"],"name":"Belize","status":"assigned"},{"alpha2":"CA","alpha3":"CAN","countryCallingCodes":["+1"],"currencies":["CAD"],"emoji":"🇨🇦","ioc":"CAN","languages":["eng","fra"],"name":"Canada","status":"assigned"},{"alpha2":"CC","alpha3":"CCK","countryCallingCodes":["+61"],"currencies":["AUD"],"emoji":"🇨🇨","ioc":"","languages":["eng"],"name":"Cocos (Keeling) Islands","status":"assigned"},{"alpha2":"CD","alpha3":"COD","countryCallingCodes":["+243"],"currencies":["CDF"],"emoji":"🇨🇩","ioc":"COD","languages":["fra","lin","kon","swa"],"name":"Democratic Republic Of Congo","status":"assigned"},{"alpha2":"CF","alpha3":"CAF","countryCallingCodes":["+236"],"currencies":["XAF"],"emoji":"🇨🇫","ioc":"CAF","languages":["fra","sag"],"name":"Central African Republic","status":"assigned"},{"alpha2":"CG","alpha3":"COG","countryCallingCodes":["+242"],"currencies":["XAF"],"emoji":"🇨🇬","ioc":"CGO","languages":["fra","lin"],"name":"Republic Of Congo","status":"assigned"},{"alpha2":"CH","alpha3":"CHE","countryCallingCodes":["+41"],"currencies":["CHF","CHE","CHW"],"emoji":"🇨🇭","ioc":"SUI","languages":["deu","fra","ita","roh"],"name":"Switzerland","status":"assigned"},{"alpha2":"CI","alpha3":"CIV","countryCallingCodes":["+225"],"currencies":["XOF"],"emoji":"🇨🇮","ioc":"CIV","languages":["fra"],"name":"Côte d\'Ivoire","status":"assigned"},{"alpha2":"CK","alpha3":"COK","countryCallingCodes":["+682"],"currencies":["NZD"],"emoji":"🇨🇰","ioc":"COK","languages":["eng","mri"],"name":"Cook Islands","status":"assigned"},{"alpha2":"CL","alpha3":"CHL","countryCallingCodes":["+56"],"currencies":["CLP","CLF"],"emoji":"🇨🇱","ioc":"CHI","languages":["spa"],"name":"Chile","status":"assigned"},{"alpha2":"CM","alpha3":"CMR","countryCallingCodes":["+237"],"currencies":["XAF"],"emoji":"🇨🇲","ioc":"CMR","languages":["eng","fra"],"name":"Cameroon","status":"assigned"},{"alpha2":"CN","alpha3":"CHN","countryCallingCodes":["+86"],"currencies":["CNY"],"emoji":"🇨🇳","ioc":"CHN","languages":["zho"],"name":"China","status":"assigned"},{"alpha2":"CO","alpha3":"COL","countryCallingCodes":["+57"],"currencies":["COP","COU"],"emoji":"🇨🇴","ioc":"COL","languages":["spa"],"name":"Colombia","status":"assigned"},{"alpha2":"CP","alpha3":"","countryCallingCodes":[],"currencies":["EUR"],"emoji":"","ioc":"","languages":[],"name":"Clipperton Island","status":"reserved"},{"alpha2":"CR","alpha3":"CRI","countryCallingCodes":["+506"],"currencies":["CRC"],"emoji":"🇨🇷","ioc":"CRC","languages":["spa"],"name":"Costa Rica","status":"assigned"},{"alpha2":"CS","alpha3":"CSK","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Czechoslovakia","status":"deleted"},{"alpha2":"CS","alpha3":"SCG","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Serbia and Montenegro","status":"deleted"},{"alpha2":"CT","alpha3":"CTE","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Canton and Enderbury Islands","status":"deleted"},{"alpha2":"CU","alpha3":"CUB","countryCallingCodes":["+53"],"currencies":["CUP","CUC"],"emoji":"🇨🇺","ioc":"CUB","languages":["spa"],"name":"Cuba","status":"assigned"},{"alpha2":"CV","alpha3":"CPV","countryCallingCodes":["+238"],"currencies":["CVE"],"emoji":"🇨🇻","ioc":"CPV","languages":["por"],"name":"Cabo Verde","status":"assigned"},{"alpha2":"CW","alpha3":"CUW","countryCallingCodes":["+599"],"currencies":["ANG"],"emoji":"🇨🇼","ioc":"","languages":["nld"],"name":"Curacao","status":"assigned"},{"alpha2":"CX","alpha3":"CXR","countryCallingCodes":["+61"],"currencies":["AUD"],"emoji":"🇨🇽","ioc":"","languages":["eng"],"name":"Christmas Island","status":"assigned"},{"alpha2":"CY","alpha3":"CYP","countryCallingCodes":["+357"],"currencies":["EUR"],"emoji":"🇨🇾","ioc":"CYP","languages":["ell","tur"],"name":"Cyprus","status":"assigned"},{"alpha2":"CZ","alpha3":"CZE","countryCallingCodes":["+420"],"currencies":["CZK"],"emoji":"🇨🇿","ioc":"CZE","languages":["ces"],"name":"Czech Republic","status":"assigned"},{"alpha2":"DD","alpha3":"DDR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"German Democratic Republic","status":"deleted"},{"alpha2":"DE","alpha3":"DEU","countryCallingCodes":["+49"],"currencies":["EUR"],"emoji":"🇩🇪","ioc":"GER","languages":["deu"],"name":"Germany","status":"assigned"},{"alpha2":"DG","alpha3":"","countryCallingCodes":[],"currencies":["USD"],"emoji":"","ioc":"","languages":[],"name":"Diego Garcia","status":"reserved"},{"alpha2":"DJ","alpha3":"DJI","countryCallingCodes":["+253"],"currencies":["DJF"],"emoji":"🇩🇯","ioc":"DJI","languages":["ara","fra"],"name":"Djibouti","status":"assigned"},{"alpha2":"DK","alpha3":"DNK","countryCallingCodes":["+45"],"currencies":["DKK"],"emoji":"🇩🇰","ioc":"DEN","languages":["dan"],"name":"Denmark","status":"assigned"},{"alpha2":"DM","alpha3":"DMA","countryCallingCodes":["+1 767"],"currencies":["XCD"],"emoji":"🇩🇲","ioc":"DMA","languages":["eng"],"name":"Dominica","status":"assigned"},{"alpha2":"DO","alpha3":"DOM","countryCallingCodes":["+1 809","+1 829","+1 849"],"currencies":["DOP"],"emoji":"🇩🇴","ioc":"DOM","languages":["spa"],"name":"Dominican Republic","status":"assigned"},{"alpha2":"DY","alpha3":"DHY","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Dahomey","status":"deleted"},{"alpha2":"DZ","alpha3":"DZA","countryCallingCodes":["+213"],"currencies":["DZD"],"emoji":"🇩🇿","ioc":"ALG","languages":["ara"],"name":"Algeria","status":"assigned"},{"alpha2":"EA","alpha3":"","countryCallingCodes":[],"currencies":["EUR"],"emoji":"","ioc":"","languages":[],"name":"Ceuta, Mulilla","status":"reserved"},{"alpha2":"EC","alpha3":"ECU","countryCallingCodes":["+593"],"currencies":["USD"],"emoji":"🇪🇨","ioc":"ECU","languages":["spa","que"],"name":"Ecuador","status":"assigned"},{"alpha2":"EE","alpha3":"EST","countryCallingCodes":["+372"],"currencies":["EUR"],"emoji":"🇪🇪","ioc":"EST","languages":["est"],"name":"Estonia","status":"assigned"},{"alpha2":"EG","alpha3":"EGY","countryCallingCodes":["+20"],"currencies":["EGP"],"emoji":"🇪🇬","ioc":"EGY","languages":["ara"],"name":"Egypt","status":"assigned"},{"alpha2":"EH","alpha3":"ESH","countryCallingCodes":["+212"],"currencies":["MAD"],"emoji":"🇪🇭","ioc":"","languages":[],"name":"Western Sahara","status":"assigned"},{"alpha2":"ER","alpha3":"ERI","countryCallingCodes":["+291"],"currencies":["ERN"],"emoji":"🇪🇷","ioc":"ERI","languages":["eng","ara","tir"],"name":"Eritrea","status":"assigned"},{"alpha2":"ES","alpha3":"ESP","countryCallingCodes":["+34"],"currencies":["EUR"],"emoji":"🇪🇸","ioc":"ESP","languages":["spa"],"name":"Spain","status":"assigned"},{"alpha2":"ET","alpha3":"ETH","countryCallingCodes":["+251"],"currencies":["ETB"],"emoji":"🇪🇹","ioc":"ETH","languages":["amh"],"name":"Ethiopia","status":"assigned"},{"alpha2":"EU","alpha3":"","countryCallingCodes":["+388"],"currencies":["EUR"],"emoji":"🇪🇺","ioc":"","languages":[],"name":"European Union","status":"reserved"},{"alpha2":"FI","alpha3":"FIN","countryCallingCodes":["+358"],"currencies":["EUR"],"emoji":"🇫🇮","ioc":"FIN","languages":["fin","swe"],"name":"Finland","status":"assigned"},{"alpha2":"FJ","alpha3":"FJI","countryCallingCodes":["+679"],"currencies":["FJD"],"emoji":"🇫🇯","ioc":"FIJ","languages":["eng","fij"],"name":"Fiji","status":"assigned"},{"alpha2":"FK","alpha3":"FLK","countryCallingCodes":["+500"],"currencies":["FKP"],"emoji":"🇫🇰","ioc":"","languages":["eng"],"name":"Falkland Islands","status":"assigned"},{"alpha2":"FM","alpha3":"FSM","countryCallingCodes":["+691"],"currencies":["USD"],"emoji":"🇫🇲","ioc":"FSM","languages":["eng"],"name":"Micronesia, Federated States Of","status":"assigned"},{"alpha2":"FO","alpha3":"FRO","countryCallingCodes":["+298"],"currencies":["DKK"],"emoji":"🇫🇴","ioc":"FAI","languages":["fao","dan"],"name":"Faroe Islands","status":"assigned"},{"alpha2":"FQ","alpha3":"ATF","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"French Southern and Antarctic Territories","status":"deleted"},{"alpha2":"FR","alpha3":"FRA","countryCallingCodes":["+33"],"currencies":["EUR"],"emoji":"🇫🇷","ioc":"FRA","languages":["fra"],"name":"France","status":"assigned"},{"alpha2":"FX","alpha3":"","countryCallingCodes":["+241"],"currencies":["EUR"],"emoji":"","ioc":"","languages":["fra"],"name":"France, Metropolitan","status":"reserved"},{"alpha2":"GA","alpha3":"GAB","countryCallingCodes":["+241"],"currencies":["XAF"],"emoji":"🇬🇦","ioc":"GAB","languages":["fra"],"name":"Gabon","status":"assigned"},{"alpha2":"GB","alpha3":"GBR","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"🇬🇧","ioc":"GBR","languages":["eng","cor","gle","gla","cym"],"name":"United Kingdom","status":"assigned"},{"alpha2":"GD","alpha3":"GRD","countryCallingCodes":["+473"],"currencies":["XCD"],"emoji":"🇬🇩","ioc":"GRN","languages":["eng"],"name":"Grenada","status":"assigned"},{"alpha2":"GE","alpha3":"GEO","countryCallingCodes":["+995"],"currencies":["GEL"],"emoji":"🇬🇪","ioc":"GEO","languages":["kat"],"name":"Georgia","status":"assigned"},{"alpha2":"GE","alpha3":"GEL","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Gilbert and Ellice Islands","status":"deleted"},{"alpha2":"GF","alpha3":"GUF","countryCallingCodes":["+594"],"currencies":["EUR"],"emoji":"🇬🇫","ioc":"","languages":["fra"],"name":"French Guiana","status":"assigned"},{"alpha2":"GG","alpha3":"GGY","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"🇬🇬","ioc":"GCI","languages":["fra"],"name":"Guernsey","status":"assigned"},{"alpha2":"GH","alpha3":"GHA","countryCallingCodes":["+233"],"currencies":["GHS"],"emoji":"🇬🇭","ioc":"GHA","languages":["eng"],"name":"Ghana","status":"assigned"},{"alpha2":"GI","alpha3":"GIB","countryCallingCodes":["+350"],"currencies":["GIP"],"emoji":"🇬🇮","ioc":"","languages":["eng"],"name":"Gibraltar","status":"assigned"},{"alpha2":"GL","alpha3":"GRL","countryCallingCodes":["+299"],"currencies":["DKK"],"emoji":"🇬🇱","ioc":"","languages":["kal"],"name":"Greenland","status":"assigned"},{"alpha2":"GM","alpha3":"GMB","countryCallingCodes":["+220"],"currencies":["GMD"],"emoji":"🇬🇲","ioc":"GAM","languages":["eng"],"name":"Gambia","status":"assigned"},{"alpha2":"GN","alpha3":"GIN","countryCallingCodes":["+224"],"currencies":["GNF"],"emoji":"🇬🇳","ioc":"GUI","languages":["fra"],"name":"Guinea","status":"assigned"},{"alpha2":"GP","alpha3":"GLP","countryCallingCodes":["+590"],"currencies":["EUR"],"emoji":"🇬🇵","ioc":"","languages":["fra"],"name":"Guadeloupe","status":"assigned"},{"alpha2":"GQ","alpha3":"GNQ","countryCallingCodes":["+240"],"currencies":["XAF"],"emoji":"🇬🇶","ioc":"GEQ","languages":["spa","fra","por"],"name":"Equatorial Guinea","status":"assigned"},{"alpha2":"GR","alpha3":"GRC","countryCallingCodes":["+30"],"currencies":["EUR"],"emoji":"🇬🇷","ioc":"GRE","languages":["ell"],"name":"Greece","status":"assigned"},{"alpha2":"GS","alpha3":"SGS","countryCallingCodes":[],"currencies":["GBP"],"emoji":"🇬🇸","ioc":"","languages":["eng"],"name":"South Georgia And The South Sandwich Islands","status":"assigned"},{"alpha2":"GT","alpha3":"GTM","countryCallingCodes":["+502"],"currencies":["GTQ"],"emoji":"🇬🇹","ioc":"GUA","languages":["spa"],"name":"Guatemala","status":"assigned"},{"alpha2":"GU","alpha3":"GUM","countryCallingCodes":["+1 671"],"currencies":["USD"],"emoji":"🇬🇺","ioc":"GUM","languages":["eng"],"name":"Guam","status":"assigned"},{"alpha2":"GW","alpha3":"GNB","countryCallingCodes":["+245"],"currencies":["XOF"],"emoji":"🇬🇼","ioc":"GBS","languages":["por"],"name":"Guinea-bissau","status":"assigned"},{"alpha2":"GY","alpha3":"GUY","countryCallingCodes":["+592"],"currencies":["GYD"],"emoji":"🇬🇾","ioc":"GUY","languages":["eng"],"name":"Guyana","status":"assigned"},{"alpha2":"HK","alpha3":"HKG","countryCallingCodes":["+852"],"currencies":["HKD"],"emoji":"🇭🇰","ioc":"HKG","languages":["zho","eng"],"name":"Hong Kong","status":"assigned"},{"alpha2":"HM","alpha3":"HMD","countryCallingCodes":[],"currencies":["AUD"],"emoji":"🇭🇲","ioc":"","languages":[],"name":"Heard Island And McDonald Islands","status":"assigned"},{"alpha2":"HN","alpha3":"HND","countryCallingCodes":["+504"],"currencies":["HNL"],"emoji":"🇭🇳","ioc":"HON","languages":["spa"],"name":"Honduras","status":"assigned"},{"alpha2":"HR","alpha3":"HRV","countryCallingCodes":["+385"],"currencies":["HRK"],"emoji":"🇭🇷","ioc":"CRO","languages":["hrv"],"name":"Croatia","status":"assigned"},{"alpha2":"HT","alpha3":"HTI","countryCallingCodes":["+509"],"currencies":["HTG","USD"],"emoji":"🇭🇹","ioc":"HAI","languages":["fra","hat"],"name":"Haiti","status":"assigned"},{"alpha2":"HU","alpha3":"HUN","countryCallingCodes":["+36"],"currencies":["HUF"],"emoji":"🇭🇺","ioc":"HUN","languages":["hun"],"name":"Hungary","status":"assigned"},{"alpha2":"HV","alpha3":"HVO","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Upper Volta","status":"deleted"},{"alpha2":"IC","alpha3":"","countryCallingCodes":[],"currencies":["EUR"],"emoji":"","ioc":"","languages":[],"name":"Canary Islands","status":"reserved"},{"alpha2":"ID","alpha3":"IDN","countryCallingCodes":["+62"],"currencies":["IDR"],"emoji":"🇮🇩","ioc":"INA","languages":["ind"],"name":"Indonesia","status":"assigned"},{"alpha2":"IE","alpha3":"IRL","countryCallingCodes":["+353"],"currencies":["EUR"],"emoji":"🇮🇪","ioc":"IRL","languages":["eng","gle"],"name":"Ireland","status":"assigned"},{"alpha2":"IL","alpha3":"ISR","countryCallingCodes":["+972"],"currencies":["ILS"],"emoji":"🇮🇱","ioc":"ISR","languages":["heb","ara","eng"],"name":"Israel","status":"assigned"},{"alpha2":"IM","alpha3":"IMN","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"🇮🇲","ioc":"","languages":["eng","glv"],"name":"Isle Of Man","status":"assigned"},{"alpha2":"IN","alpha3":"IND","countryCallingCodes":["+91"],"currencies":["INR"],"emoji":"🇮🇳","ioc":"IND","languages":["eng","hin"],"name":"India","status":"assigned"},{"alpha2":"IO","alpha3":"IOT","countryCallingCodes":["+246"],"currencies":["USD"],"emoji":"🇮🇴","ioc":"","languages":["eng"],"name":"British Indian Ocean Territory","status":"assigned"},{"alpha2":"IQ","alpha3":"IRQ","countryCallingCodes":["+964"],"currencies":["IQD"],"emoji":"🇮🇶","ioc":"IRQ","languages":["ara","kur"],"name":"Iraq","status":"assigned"},{"alpha2":"IR","alpha3":"IRN","countryCallingCodes":["+98"],"currencies":["IRR"],"emoji":"🇮🇷","ioc":"IRI","languages":["fas"],"name":"Iran, Islamic Republic Of","status":"assigned"},{"alpha2":"IS","alpha3":"ISL","countryCallingCodes":["+354"],"currencies":["ISK"],"emoji":"🇮🇸","ioc":"ISL","languages":["isl"],"name":"Iceland","status":"assigned"},{"alpha2":"IT","alpha3":"ITA","countryCallingCodes":["+39"],"currencies":["EUR"],"emoji":"🇮🇹","ioc":"ITA","languages":["ita"],"name":"Italy","status":"assigned"},{"alpha2":"JE","alpha3":"JEY","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"🇯🇪","ioc":"JCI","languages":["eng","fra"],"name":"Jersey","status":"assigned"},{"alpha2":"JM","alpha3":"JAM","countryCallingCodes":["+1 876"],"currencies":["JMD"],"emoji":"🇯🇲","ioc":"JAM","languages":["eng"],"name":"Jamaica","status":"assigned"},{"alpha2":"JO","alpha3":"JOR","countryCallingCodes":["+962"],"currencies":["JOD"],"emoji":"🇯🇴","ioc":"JOR","languages":["ara"],"name":"Jordan","status":"assigned"},{"alpha2":"JP","alpha3":"JPN","countryCallingCodes":["+81"],"currencies":["JPY"],"emoji":"🇯🇵","ioc":"JPN","languages":["jpn"],"name":"Japan","status":"assigned"},{"alpha2":"JT","alpha3":"JTN","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Johnston Island","status":"deleted"},{"alpha2":"KE","alpha3":"KEN","countryCallingCodes":["+254"],"currencies":["KES"],"emoji":"🇰🇪","ioc":"KEN","languages":["eng","swa"],"name":"Kenya","status":"assigned"},{"alpha2":"KG","alpha3":"KGZ","countryCallingCodes":["+996"],"currencies":["KGS"],"emoji":"🇰🇬","ioc":"KGZ","languages":["rus"],"name":"Kyrgyzstan","status":"assigned"},{"alpha2":"KH","alpha3":"KHM","countryCallingCodes":["+855"],"currencies":["KHR"],"emoji":"🇰🇭","ioc":"CAM","languages":["khm"],"name":"Cambodia","status":"assigned"},{"alpha2":"KI","alpha3":"KIR","countryCallingCodes":["+686"],"currencies":["AUD"],"emoji":"🇰🇮","ioc":"KIR","languages":["eng"],"name":"Kiribati","status":"assigned"},{"alpha2":"KM","alpha3":"COM","countryCallingCodes":["+269"],"currencies":["KMF"],"emoji":"🇰🇲","ioc":"COM","languages":["ara","fra"],"name":"Comoros","status":"assigned"},{"alpha2":"KN","alpha3":"KNA","countryCallingCodes":["+1 869"],"currencies":["XCD"],"emoji":"🇰🇳","ioc":"SKN","languages":["eng"],"name":"Saint Kitts And Nevis","status":"assigned"},{"alpha2":"KP","alpha3":"PRK","countryCallingCodes":["+850"],"currencies":["KPW"],"emoji":"🇰🇵","ioc":"PRK","languages":["kor"],"name":"Korea, Democratic People\'s Republic Of","status":"assigned"},{"alpha2":"KR","alpha3":"KOR","countryCallingCodes":["+82"],"currencies":["KRW"],"emoji":"🇰🇷","ioc":"KOR","languages":["kor"],"name":"Korea, Republic Of","status":"assigned"},{"alpha2":"KW","alpha3":"KWT","countryCallingCodes":["+965"],"currencies":["KWD"],"emoji":"🇰🇼","ioc":"KUW","languages":["ara"],"name":"Kuwait","status":"assigned"},{"alpha2":"KY","alpha3":"CYM","countryCallingCodes":["+1 345"],"currencies":["KYD"],"emoji":"🇰🇾","ioc":"CAY","languages":["eng"],"name":"Cayman Islands","status":"assigned"},{"alpha2":"KZ","alpha3":"KAZ","countryCallingCodes":["+7","+7 6","+7 7"],"currencies":["KZT"],"emoji":"🇰🇿","ioc":"KAZ","languages":["kaz","rus"],"name":"Kazakhstan","status":"assigned"},{"alpha2":"LA","alpha3":"LAO","countryCallingCodes":["+856"],"currencies":["LAK"],"emoji":"🇱🇦","ioc":"LAO","languages":["lao"],"name":"Lao People\'s Democratic Republic","status":"assigned"},{"alpha2":"LB","alpha3":"LBN","countryCallingCodes":["+961"],"currencies":["LBP"],"emoji":"🇱🇧","ioc":"LIB","languages":["ara","hye"],"name":"Lebanon","status":"assigned"},{"alpha2":"LC","alpha3":"LCA","countryCallingCodes":["+1 758"],"currencies":["XCD"],"emoji":"🇱🇨","ioc":"LCA","languages":["eng"],"name":"Saint Lucia","status":"assigned"},{"alpha2":"LI","alpha3":"LIE","countryCallingCodes":["+423"],"currencies":["CHF"],"emoji":"🇱🇮","ioc":"LIE","languages":["deu"],"name":"Liechtenstein","status":"assigned"},{"alpha2":"LK","alpha3":"LKA","countryCallingCodes":["+94"],"currencies":["LKR"],"emoji":"🇱🇰","ioc":"SRI","languages":["sin","tam"],"name":"Sri Lanka","status":"assigned"},{"alpha2":"LR","alpha3":"LBR","countryCallingCodes":["+231"],"currencies":["LRD"],"emoji":"🇱🇷","ioc":"LBR","languages":["eng"],"name":"Liberia","status":"assigned"},{"alpha2":"LS","alpha3":"LSO","countryCallingCodes":["+266"],"currencies":["LSL","ZAR"],"emoji":"🇱🇸","ioc":"LES","languages":["eng","sot"],"name":"Lesotho","status":"assigned"},{"alpha2":"LT","alpha3":"LTU","countryCallingCodes":["+370"],"currencies":["EUR"],"emoji":"🇱🇹","ioc":"LTU","languages":["lit"],"name":"Lithuania","status":"assigned"},{"alpha2":"LU","alpha3":"LUX","countryCallingCodes":["+352"],"currencies":["EUR"],"emoji":"🇱🇺","ioc":"LUX","languages":["fra","deu","ltz"],"name":"Luxembourg","status":"assigned"},{"alpha2":"LV","alpha3":"LVA","countryCallingCodes":["+371"],"currencies":["EUR"],"emoji":"🇱🇻","ioc":"LAT","languages":["lav"],"name":"Latvia","status":"assigned"},{"alpha2":"LY","alpha3":"LBY","countryCallingCodes":["+218"],"currencies":["LYD"],"emoji":"🇱🇾","ioc":"LBA","languages":["ara"],"name":"Libya","status":"assigned"},{"alpha2":"MA","alpha3":"MAR","countryCallingCodes":["+212"],"currencies":["MAD"],"emoji":"🇲🇦","ioc":"MAR","languages":["ara"],"name":"Morocco","status":"assigned"},{"alpha2":"MC","alpha3":"MCO","countryCallingCodes":["+377"],"currencies":["EUR"],"emoji":"🇲🇨","ioc":"MON","languages":["fra"],"name":"Monaco","status":"assigned"},{"alpha2":"MD","alpha3":"MDA","countryCallingCodes":["+373"],"currencies":["MDL"],"emoji":"🇲🇩","ioc":"MDA","languages":["ron"],"name":"Moldova","status":"assigned"},{"alpha2":"ME","alpha3":"MNE","countryCallingCodes":["+382"],"currencies":["EUR"],"emoji":"🇲🇪","ioc":"MNE","languages":["mot"],"name":"Montenegro","status":"assigned"},{"alpha2":"MF","alpha3":"MAF","countryCallingCodes":["+590"],"currencies":["EUR"],"emoji":"🇲🇫","ioc":"","languages":["fra"],"name":"Saint Martin","status":"assigned"},{"alpha2":"MG","alpha3":"MDG","countryCallingCodes":["+261"],"currencies":["MGA"],"emoji":"🇲🇬","ioc":"MAD","languages":["fra","mlg"],"name":"Madagascar","status":"assigned"},{"alpha2":"MH","alpha3":"MHL","countryCallingCodes":["+692"],"currencies":["USD"],"emoji":"🇲🇭","ioc":"MHL","languages":["eng","mah"],"name":"Marshall Islands","status":"assigned"},{"alpha2":"MI","alpha3":"MID","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Midway Islands","status":"deleted"},{"alpha2":"MK","alpha3":"MKD","countryCallingCodes":["+389"],"currencies":["MKD"],"emoji":"🇲🇰","ioc":"MKD","languages":["mkd"],"name":"Macedonia, The Former Yugoslav Republic Of","status":"assigned"},{"alpha2":"ML","alpha3":"MLI","countryCallingCodes":["+223"],"currencies":["XOF"],"emoji":"🇲🇱","ioc":"MLI","languages":["fra"],"name":"Mali","status":"assigned"},{"alpha2":"MM","alpha3":"MMR","countryCallingCodes":["+95"],"currencies":["MMK"],"emoji":"🇲🇲","ioc":"MYA","languages":["mya"],"name":"Myanmar","status":"assigned"},{"alpha2":"MN","alpha3":"MNG","countryCallingCodes":["+976"],"currencies":["MNT"],"emoji":"🇲🇳","ioc":"MGL","languages":["mon"],"name":"Mongolia","status":"assigned"},{"alpha2":"MO","alpha3":"MAC","countryCallingCodes":["+853"],"currencies":["MOP"],"emoji":"🇲🇴","ioc":"MAC","languages":["zho","por"],"name":"Macao","status":"assigned"},{"alpha2":"MP","alpha3":"MNP","countryCallingCodes":["+1 670"],"currencies":["USD"],"emoji":"🇲🇵","ioc":"","languages":["eng"],"name":"Northern Mariana Islands","status":"assigned"},{"alpha2":"MQ","alpha3":"MTQ","countryCallingCodes":["+596"],"currencies":["EUR"],"emoji":"🇲🇶","ioc":"","languages":[],"name":"Martinique","status":"assigned"},{"alpha2":"MR","alpha3":"MRT","countryCallingCodes":["+222"],"currencies":["MRO"],"emoji":"🇲🇷","ioc":"MTN","languages":["ara","fra"],"name":"Mauritania","status":"assigned"},{"alpha2":"MS","alpha3":"MSR","countryCallingCodes":["+1 664"],"currencies":["XCD"],"emoji":"🇲🇸","ioc":"","languages":[],"name":"Montserrat","status":"assigned"},{"alpha2":"MT","alpha3":"MLT","countryCallingCodes":["+356"],"currencies":["EUR"],"emoji":"🇲🇹","ioc":"MLT","languages":["mlt","eng"],"name":"Malta","status":"assigned"},{"alpha2":"MU","alpha3":"MUS","countryCallingCodes":["+230"],"currencies":["MUR"],"emoji":"🇲🇺","ioc":"MRI","languages":["eng","fra"],"name":"Mauritius","status":"assigned"},{"alpha2":"MV","alpha3":"MDV","countryCallingCodes":["+960"],"currencies":["MVR"],"emoji":"🇲🇻","ioc":"MDV","languages":["div"],"name":"Maldives","status":"assigned"},{"alpha2":"MW","alpha3":"MWI","countryCallingCodes":["+265"],"currencies":["MWK"],"emoji":"🇲🇼","ioc":"MAW","languages":["eng","nya"],"name":"Malawi","status":"assigned"},{"alpha2":"MX","alpha3":"MEX","countryCallingCodes":["+52"],"currencies":["MXN","MXV"],"emoji":"🇲🇽","ioc":"MEX","languages":["spa"],"name":"Mexico","status":"assigned"},{"alpha2":"MY","alpha3":"MYS","countryCallingCodes":["+60"],"currencies":["MYR"],"emoji":"🇲🇾","ioc":"MAS","languages":["msa","eng"],"name":"Malaysia","status":"assigned"},{"alpha2":"MZ","alpha3":"MOZ","countryCallingCodes":["+258"],"currencies":["MZN"],"emoji":"🇲🇿","ioc":"MOZ","languages":["por"],"name":"Mozambique","status":"assigned"},{"alpha2":"NA","alpha3":"NAM","countryCallingCodes":["+264"],"currencies":["NAD","ZAR"],"emoji":"🇳🇦","ioc":"NAM","languages":["eng"],"name":"Namibia","status":"assigned"},{"alpha2":"NC","alpha3":"NCL","countryCallingCodes":["+687"],"currencies":["XPF"],"emoji":"🇳🇨","ioc":"","languages":["fra"],"name":"New Caledonia","status":"assigned"},{"alpha2":"NE","alpha3":"NER","countryCallingCodes":["+227"],"currencies":["XOF"],"emoji":"🇳🇪","ioc":"NIG","languages":["fra"],"name":"Niger","status":"assigned"},{"alpha2":"NF","alpha3":"NFK","countryCallingCodes":["+672"],"currencies":["AUD"],"emoji":"🇳🇫","ioc":"","languages":["eng"],"name":"Norfolk Island","status":"assigned"},{"alpha2":"NG","alpha3":"NGA","countryCallingCodes":["+234"],"currencies":["NGN"],"emoji":"🇳🇬","ioc":"NGR","languages":["eng"],"name":"Nigeria","status":"assigned"},{"alpha2":"NH","alpha3":"NHB","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"New Hebrides","status":"deleted"},{"alpha2":"NI","alpha3":"NIC","countryCallingCodes":["+505"],"currencies":["NIO"],"emoji":"🇳🇮","ioc":"NCA","languages":["spa"],"name":"Nicaragua","status":"assigned"},{"alpha2":"NL","alpha3":"NLD","countryCallingCodes":["+31"],"currencies":["EUR"],"emoji":"🇳🇱","ioc":"NED","languages":["nld"],"name":"Netherlands","status":"assigned"},{"alpha2":"NO","alpha3":"NOR","countryCallingCodes":["+47"],"currencies":["NOK"],"emoji":"🇳🇴","ioc":"NOR","languages":["nor"],"name":"Norway","status":"assigned"},{"alpha2":"NP","alpha3":"NPL","countryCallingCodes":["+977"],"currencies":["NPR"],"emoji":"🇳🇵","ioc":"NEP","languages":["nep"],"name":"Nepal","status":"assigned"},{"alpha2":"NQ","alpha3":"ATN","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Dronning Maud Land","status":"deleted"},{"alpha2":"NR","alpha3":"NRU","countryCallingCodes":["+674"],"currencies":["AUD"],"emoji":"🇳🇷","ioc":"NRU","languages":["eng","nau"],"name":"Nauru","status":"assigned"},{"alpha2":"NT","alpha3":"NTZ","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Neutral Zone","status":"deleted"},{"alpha2":"NU","alpha3":"NIU","countryCallingCodes":["+683"],"currencies":["NZD"],"emoji":"🇳🇺","ioc":"","languages":["eng"],"name":"Niue","status":"assigned"},{"alpha2":"NZ","alpha3":"NZL","countryCallingCodes":["+64"],"currencies":["NZD"],"emoji":"🇳🇿","ioc":"NZL","languages":["eng"],"name":"New Zealand","status":"assigned"},{"alpha2":"OM","alpha3":"OMN","countryCallingCodes":["+968"],"currencies":["OMR"],"emoji":"🇴🇲","ioc":"OMA","languages":["ara"],"name":"Oman","status":"assigned"},{"alpha2":"PA","alpha3":"PAN","countryCallingCodes":["+507"],"currencies":["PAB","USD"],"emoji":"🇵🇦","ioc":"PAN","languages":["spa"],"name":"Panama","status":"assigned"},{"alpha2":"PC","alpha3":"PCI","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Pacific Islands, Trust Territory of the","status":"deleted"},{"alpha2":"PE","alpha3":"PER","countryCallingCodes":["+51"],"currencies":["PEN"],"emoji":"🇵🇪","ioc":"PER","languages":["spa","aym","que"],"name":"Peru","status":"assigned"},{"alpha2":"PF","alpha3":"PYF","countryCallingCodes":["+689"],"currencies":["XPF"],"emoji":"🇵🇫","ioc":"","languages":["fra"],"name":"French Polynesia","status":"assigned"},{"alpha2":"PG","alpha3":"PNG","countryCallingCodes":["+675"],"currencies":["PGK"],"emoji":"🇵🇬","ioc":"PNG","languages":["eng"],"name":"Papua New Guinea","status":"assigned"},{"alpha2":"PH","alpha3":"PHL","countryCallingCodes":["+63"],"currencies":["PHP"],"emoji":"🇵🇭","ioc":"PHI","languages":["eng"],"name":"Philippines","status":"assigned"},{"alpha2":"PK","alpha3":"PAK","countryCallingCodes":["+92"],"currencies":["PKR"],"emoji":"🇵🇰","ioc":"PAK","languages":["urd","eng"],"name":"Pakistan","status":"assigned"},{"alpha2":"PL","alpha3":"POL","countryCallingCodes":["+48"],"currencies":["PLN"],"emoji":"🇵🇱","ioc":"POL","languages":["pol"],"name":"Poland","status":"assigned"},{"alpha2":"PM","alpha3":"SPM","countryCallingCodes":["+508"],"currencies":["EUR"],"emoji":"🇵🇲","ioc":"","languages":["eng"],"name":"Saint Pierre And Miquelon","status":"assigned"},{"alpha2":"PN","alpha3":"PCN","countryCallingCodes":["+872"],"currencies":["NZD"],"emoji":"🇵🇳","ioc":"","languages":["eng"],"name":"Pitcairn","status":"assigned"},{"alpha2":"PR","alpha3":"PRI","countryCallingCodes":["+1 787","+1 939"],"currencies":["USD"],"emoji":"🇵🇷","ioc":"PUR","languages":["spa","eng"],"name":"Puerto Rico","status":"assigned"},{"alpha2":"PS","alpha3":"PSE","countryCallingCodes":["+970"],"currencies":["JOD","EGP","ILS"],"emoji":"🇵🇸","ioc":"PLE","languages":["ara"],"name":"Palestinian Territory, Occupied","status":"assigned"},{"alpha2":"PT","alpha3":"PRT","countryCallingCodes":["+351"],"currencies":["EUR"],"emoji":"🇵🇹","ioc":"POR","languages":["por"],"name":"Portugal","status":"assigned"},{"alpha2":"PU","alpha3":"PUS","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"U.S. Miscellaneous Pacific Islands","status":"deleted"},{"alpha2":"PW","alpha3":"PLW","countryCallingCodes":["+680"],"currencies":["USD"],"emoji":"🇵🇼","ioc":"PLW","languages":["eng"],"name":"Palau","status":"assigned"},{"alpha2":"PY","alpha3":"PRY","countryCallingCodes":["+595"],"currencies":["PYG"],"emoji":"🇵🇾","ioc":"PAR","languages":["spa"],"name":"Paraguay","status":"assigned"},{"alpha2":"PZ","alpha3":"PCZ","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Panama Canal Zone","status":"deleted"},{"alpha2":"QA","alpha3":"QAT","countryCallingCodes":["+974"],"currencies":["QAR"],"emoji":"🇶🇦","ioc":"QAT","languages":["ara"],"name":"Qatar","status":"assigned"},{"alpha2":"RE","alpha3":"REU","countryCallingCodes":["+262"],"currencies":["EUR"],"emoji":"🇷🇪","ioc":"","languages":["fra"],"name":"Reunion","status":"assigned"},{"alpha2":"RH","alpha3":"RHO","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Southern Rhodesia","status":"deleted"},{"alpha2":"RO","alpha3":"ROU","countryCallingCodes":["+40"],"currencies":["RON"],"emoji":"🇷🇴","ioc":"ROU","languages":["ron"],"name":"Romania","status":"assigned"},{"alpha2":"RS","alpha3":"SRB","countryCallingCodes":["+381"],"currencies":["RSD"],"emoji":"🇷🇸","ioc":"SRB","languages":["srp"],"name":"Serbia","status":"assigned"},{"alpha2":"RU","alpha3":"RUS","countryCallingCodes":["+7","+7 3","+7 4","+7 8"],"currencies":["RUB"],"emoji":"🇷🇺","ioc":"RUS","languages":["rus"],"name":"Russian Federation","status":"assigned"},{"alpha2":"RW","alpha3":"RWA","countryCallingCodes":["+250"],"currencies":["RWF"],"emoji":"🇷🇼","ioc":"RWA","languages":["eng","fra","kin"],"name":"Rwanda","status":"assigned"},{"alpha2":"SA","alpha3":"SAU","countryCallingCodes":["+966"],"currencies":["SAR"],"emoji":"🇸🇦","ioc":"KSA","languages":["ara"],"name":"Saudi Arabia","status":"assigned"},{"alpha2":"SB","alpha3":"SLB","countryCallingCodes":["+677"],"currencies":["SBD"],"emoji":"🇸🇧","ioc":"SOL","languages":["eng"],"name":"Solomon Islands","status":"assigned"},{"alpha2":"SC","alpha3":"SYC","countryCallingCodes":["+248"],"currencies":["SCR"],"emoji":"🇸🇨","ioc":"SEY","languages":["eng","fra"],"name":"Seychelles","status":"assigned"},{"alpha2":"SD","alpha3":"SDN","countryCallingCodes":["+249"],"currencies":["SDG"],"emoji":"🇸🇩","ioc":"SUD","languages":["ara","eng"],"name":"Sudan","status":"assigned"},{"alpha2":"SE","alpha3":"SWE","countryCallingCodes":["+46"],"currencies":["SEK"],"emoji":"🇸🇪","ioc":"SWE","languages":["swe"],"name":"Sweden","status":"assigned"},{"alpha2":"SG","alpha3":"SGP","countryCallingCodes":["+65"],"currencies":["SGD"],"emoji":"🇸🇬","ioc":"SIN","languages":["eng","zho","msa","tam"],"name":"Singapore","status":"assigned"},{"alpha2":"SH","alpha3":"SHN","countryCallingCodes":["+290"],"currencies":["SHP"],"emoji":"🇸🇭","ioc":"","languages":["eng"],"name":"Saint Helena, Ascension And Tristan Da Cunha","status":"assigned"},{"alpha2":"SI","alpha3":"SVN","countryCallingCodes":["+386"],"currencies":["EUR"],"emoji":"🇸🇮","ioc":"SLO","languages":["slv"],"name":"Slovenia","status":"assigned"},{"alpha2":"SJ","alpha3":"SJM","countryCallingCodes":["+47"],"currencies":["NOK"],"emoji":"🇸🇯","ioc":"","languages":[],"name":"Svalbard And Jan Mayen","status":"assigned"},{"alpha2":"SK","alpha3":"SVK","countryCallingCodes":["+421"],"currencies":["EUR"],"emoji":"🇸🇰","ioc":"SVK","languages":["slk"],"name":"Slovakia","status":"assigned"},{"alpha2":"SK","alpha3":"SKM","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Sikkim","status":"deleted"},{"alpha2":"SL","alpha3":"SLE","countryCallingCodes":["+232"],"currencies":["SLL"],"emoji":"🇸🇱","ioc":"SLE","languages":["eng"],"name":"Sierra Leone","status":"assigned"},{"alpha2":"SM","alpha3":"SMR","countryCallingCodes":["+378"],"currencies":["EUR"],"emoji":"🇸🇲","ioc":"SMR","languages":["ita"],"name":"San Marino","status":"assigned"},{"alpha2":"SN","alpha3":"SEN","countryCallingCodes":["+221"],"currencies":["XOF"],"emoji":"🇸🇳","ioc":"SEN","languages":["fra"],"name":"Senegal","status":"assigned"},{"alpha2":"SO","alpha3":"SOM","countryCallingCodes":["+252"],"currencies":["SOS"],"emoji":"🇸🇴","ioc":"SOM","languages":["som"],"name":"Somalia","status":"assigned"},{"alpha2":"SR","alpha3":"SUR","countryCallingCodes":["+597"],"currencies":["SRD"],"emoji":"🇸🇷","ioc":"SUR","languages":["nld"],"name":"Suriname","status":"assigned"},{"alpha2":"SS","alpha3":"SSD","countryCallingCodes":["+211"],"currencies":["SSP"],"emoji":"🇸🇸","ioc":"SSD","languages":["eng"],"name":"South Sudan","status":"assigned"},{"alpha2":"ST","alpha3":"STP","countryCallingCodes":["+239"],"currencies":["STD"],"emoji":"🇸🇹","ioc":"STP","languages":["por"],"name":"Sao Tome and Principe","status":"assigned"},{"alpha2":"SU","alpha3":"","countryCallingCodes":[],"currencies":["RUB"],"emoji":"","ioc":"","languages":["rus"],"name":"USSR","status":"reserved"},{"alpha2":"SV","alpha3":"SLV","countryCallingCodes":["+503"],"currencies":["USD"],"emoji":"🇸🇻","ioc":"ESA","languages":["spa"],"name":"El Salvador","status":"assigned"},{"alpha2":"SX","alpha3":"SXM","countryCallingCodes":["+1 721"],"currencies":["ANG"],"emoji":"🇸🇽","ioc":"","languages":["nld"],"name":"Sint Maarten","status":"assigned"},{"alpha2":"SY","alpha3":"SYR","countryCallingCodes":["+963"],"currencies":["SYP"],"emoji":"🇸🇾","ioc":"SYR","languages":["ara"],"name":"Syrian Arab Republic","status":"assigned"},{"alpha2":"SZ","alpha3":"SWZ","countryCallingCodes":["+268"],"currencies":["SZL"],"emoji":"🇸🇿","ioc":"SWZ","languages":["eng","ssw"],"name":"Swaziland","status":"assigned"},{"alpha2":"TA","alpha3":"","countryCallingCodes":["+290"],"currencies":["GBP"],"emoji":"","ioc":"","languages":[],"name":"Tristan de Cunha","status":"reserved"},{"alpha2":"TC","alpha3":"TCA","countryCallingCodes":["+1 649"],"currencies":["USD"],"emoji":"🇹🇨","ioc":"","languages":["eng"],"name":"Turks And Caicos Islands","status":"assigned"},{"alpha2":"TD","alpha3":"TCD","countryCallingCodes":["+235"],"currencies":["XAF"],"emoji":"🇹🇩","ioc":"CHA","languages":["ara","fra"],"name":"Chad","status":"assigned"},{"alpha2":"TF","alpha3":"ATF","countryCallingCodes":[],"currencies":["EUR"],"emoji":"🇹🇫","ioc":"","languages":["fra"],"name":"French Southern Territories","status":"assigned"},{"alpha2":"TG","alpha3":"TGO","countryCallingCodes":["+228"],"currencies":["XOF"],"emoji":"🇹🇬","ioc":"TOG","languages":["fra"],"name":"Togo","status":"assigned"},{"alpha2":"TH","alpha3":"THA","countryCallingCodes":["+66"],"currencies":["THB"],"emoji":"🇹🇭","ioc":"THA","languages":["tha"],"name":"Thailand","status":"assigned"},{"alpha2":"TJ","alpha3":"TJK","countryCallingCodes":["+992"],"currencies":["TJS"],"emoji":"🇹🇯","ioc":"TJK","languages":["tgk","rus"],"name":"Tajikistan","status":"assigned"},{"alpha2":"TK","alpha3":"TKL","countryCallingCodes":["+690"],"currencies":["NZD"],"emoji":"🇹🇰","ioc":"","languages":["eng"],"name":"Tokelau","status":"assigned"},{"alpha2":"TL","alpha3":"TLS","countryCallingCodes":["+670"],"currencies":["USD"],"emoji":"🇹🇱","ioc":"TLS","languages":["por"],"name":"Timor-Leste, Democratic Republic of","status":"assigned"},{"alpha2":"TM","alpha3":"TKM","countryCallingCodes":["+993"],"currencies":["TMT"],"emoji":"🇹🇲","ioc":"TKM","languages":["tuk","rus"],"name":"Turkmenistan","status":"assigned"},{"alpha2":"TN","alpha3":"TUN","countryCallingCodes":["+216"],"currencies":["TND"],"emoji":"🇹🇳","ioc":"TUN","languages":["ara"],"name":"Tunisia","status":"assigned"},{"alpha2":"TO","alpha3":"TON","countryCallingCodes":["+676"],"currencies":["TOP"],"emoji":"🇹🇴","ioc":"TGA","languages":["eng"],"name":"Tonga","status":"assigned"},{"alpha2":"TP","alpha3":"TMP","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"East Timor","status":"deleted"},{"alpha2":"TR","alpha3":"TUR","countryCallingCodes":["+90"],"currencies":["TRY"],"emoji":"🇹🇷","ioc":"TUR","languages":["tur"],"name":"Turkey","status":"assigned"},{"alpha2":"TT","alpha3":"TTO","countryCallingCodes":["+1 868"],"currencies":["TTD"],"emoji":"🇹🇹","ioc":"TTO","languages":["eng"],"name":"Trinidad And Tobago","status":"assigned"},{"alpha2":"TV","alpha3":"TUV","countryCallingCodes":["+688"],"currencies":["AUD"],"emoji":"🇹🇻","ioc":"TUV","languages":["eng"],"name":"Tuvalu","status":"assigned"},{"alpha2":"TW","alpha3":"TWN","countryCallingCodes":["+886"],"currencies":["TWD"],"emoji":"🇹🇼","ioc":"TPE","languages":["zho"],"name":"Taiwan","status":"assigned"},{"alpha2":"TZ","alpha3":"TZA","countryCallingCodes":["+255"],"currencies":["TZS"],"emoji":"🇹🇿","ioc":"TAN","languages":["swa","eng"],"name":"Tanzania, United Republic Of","status":"assigned"},{"alpha2":"UA","alpha3":"UKR","countryCallingCodes":["+380"],"currencies":["UAH"],"emoji":"🇺🇦","ioc":"UKR","languages":["ukr","rus"],"name":"Ukraine","status":"assigned"},{"alpha2":"UG","alpha3":"UGA","countryCallingCodes":["+256"],"currencies":["UGX"],"emoji":"🇺🇬","ioc":"UGA","languages":["eng","swa"],"name":"Uganda","status":"assigned"},{"alpha2":"UK","alpha3":"","countryCallingCodes":[],"currencies":["GBP"],"emoji":"","ioc":"","languages":["eng","cor","gle","gla","cym"],"name":"United Kingdom","status":"reserved"},{"alpha2":"UM","alpha3":"UMI","countryCallingCodes":["+1"],"currencies":["USD"],"emoji":"🇺🇲","ioc":"","languages":["eng"],"name":"United States Minor Outlying Islands","status":"assigned"},{"alpha2":"US","alpha3":"USA","countryCallingCodes":["+1"],"currencies":["USD"],"emoji":"🇺🇸","ioc":"USA","languages":["eng"],"name":"United States","status":"assigned"},{"alpha2":"UY","alpha3":"URY","countryCallingCodes":["+598"],"currencies":["UYU","UYI"],"emoji":"🇺🇾","ioc":"URU","languages":["spa"],"name":"Uruguay","status":"assigned"},{"alpha2":"UZ","alpha3":"UZB","countryCallingCodes":["+998"],"currencies":["UZS"],"emoji":"🇺🇿","ioc":"UZB","languages":["uzb","rus"],"name":"Uzbekistan","status":"assigned"},{"alpha2":"VA","alpha3":"VAT","countryCallingCodes":["+379","+39"],"currencies":["EUR"],"emoji":"🇻🇦","ioc":"","languages":["ita"],"name":"Vatican City State","status":"assigned"},{"alpha2":"VC","alpha3":"VCT","countryCallingCodes":["+1 784"],"currencies":["XCD"],"emoji":"🇻🇨","ioc":"VIN","languages":["eng"],"name":"Saint Vincent And The Grenadines","status":"assigned"},{"alpha2":"VD","alpha3":"VDR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Viet-Nam, Democratic Republic of","status":"deleted"},{"alpha2":"VE","alpha3":"VEN","countryCallingCodes":["+58"],"currencies":["VEF"],"emoji":"🇻🇪","ioc":"VEN","languages":["spa"],"name":"Venezuela, Bolivarian Republic Of","status":"assigned"},{"alpha2":"VG","alpha3":"VGB","countryCallingCodes":["+1 284"],"currencies":["USD"],"emoji":"🇻🇬","ioc":"IVB","languages":["eng"],"name":"Virgin Islands (British)","status":"assigned"},{"alpha2":"VI","alpha3":"VIR","countryCallingCodes":["+1 340"],"currencies":["USD"],"emoji":"🇻🇮","ioc":"ISV","languages":["eng"],"name":"Virgin Islands (US)","status":"assigned"},{"alpha2":"VN","alpha3":"VNM","countryCallingCodes":["+84"],"currencies":["VND"],"emoji":"🇻🇳","ioc":"VIE","languages":["vie"],"name":"Viet Nam","status":"assigned"},{"alpha2":"VU","alpha3":"VUT","countryCallingCodes":["+678"],"currencies":["VUV"],"emoji":"🇻🇺","ioc":"VAN","languages":["bis","eng","fra"],"name":"Vanuatu","status":"assigned"},{"alpha2":"WF","alpha3":"WLF","countryCallingCodes":["+681"],"currencies":["XPF"],"emoji":"🇼🇫","ioc":"","languages":["fra"],"name":"Wallis And Futuna","status":"assigned"},{"alpha2":"WK","alpha3":"WAK","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Wake Island","status":"deleted"},{"alpha2":"WS","alpha3":"WSM","countryCallingCodes":["+685"],"currencies":["WST"],"emoji":"🇼🇸","ioc":"SAM","languages":["eng","smo"],"name":"Samoa","status":"assigned"},{"alpha2":"XK","alpha3":"","countryCallingCodes":["+383"],"currencies":["EUR"],"emoji":"","ioc":"KOS","languages":["sqi","srp","bos","tur","rom"],"name":"Kosovo","status":"user assigned"},{"alpha2":"YD","alpha3":"YMD","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Yemen, Democratic","status":"deleted"},{"alpha2":"YE","alpha3":"YEM","countryCallingCodes":["+967"],"currencies":["YER"],"emoji":"🇾🇪","ioc":"YEM","languages":["ara"],"name":"Yemen","status":"assigned"},{"alpha2":"YT","alpha3":"MYT","countryCallingCodes":["+262"],"currencies":["EUR"],"emoji":"🇾🇹","ioc":"","languages":["fra"],"name":"Mayotte","status":"assigned"},{"alpha2":"YU","alpha3":"YUG","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Yugoslavia","status":"deleted"},{"alpha2":"ZA","alpha3":"ZAF","countryCallingCodes":["+27"],"currencies":["ZAR"],"emoji":"🇿🇦","ioc":"RSA","languages":["afr","eng","nbl","som","tso","ven","xho","zul"],"name":"South Africa","status":"assigned"},{"alpha2":"ZM","alpha3":"ZMB","countryCallingCodes":["+260"],"currencies":["ZMW"],"emoji":"🇿🇲","ioc":"ZAM","languages":["eng"],"name":"Zambia","status":"assigned"},{"alpha2":"ZR","alpha3":"ZAR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Zaire","status":"deleted"},{"alpha2":"ZW","alpha3":"ZWE","countryCallingCodes":["+263"],"currencies":["USD","ZAR","BWP","GBP","EUR"],"emoji":"🇿🇼","ioc":"ZIM","languages":["eng","sna","nde"],"name":"Zimbabwe","status":"assigned"}]'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '[{"code":"AED","decimals":2,"name":"United Arab Emirates dirham","number":"784"},{"code":"AFN","decimals":2,"name":"Afghan afghani","number":"971"},{"code":"ALL","decimals":2,"name":"Albanian lek","number":"8"},{"code":"AMD","decimals":2,"name":"Armenian dram","number":"51"},{"code":"ANG","decimals":2,"name":"Netherlands Antillean guilder","number":"532"},{"code":"AOA","decimals":2,"name":"Angolan kwanza","number":"973"},{"code":"ARS","decimals":2,"name":"Argentine peso","number":"32"},{"code":"AUD","decimals":2,"name":"Australian dollar","number":"36"},{"code":"AWG","decimals":2,"name":"Aruban florin","number":"533"},{"code":"AZN","decimals":2,"name":"Azerbaijani manat","number":"944"},{"code":"BAM","decimals":2,"name":"Bosnia and Herzegovina convertible mark","number":"977"},{"code":"BBD","decimals":2,"name":"Barbados dollar","number":"52"},{"code":"BDT","decimals":2,"name":"Bangladeshi taka","number":"50"},{"code":"BGN","decimals":2,"name":"Bulgarian lev","number":"975"},{"code":"BHD","decimals":3,"name":"Bahraini dinar","number":"48"},{"code":"BIF","decimals":0,"name":"Burundian franc","number":"108"},{"code":"BMD","decimals":2,"name":"Bermudian dollar (customarily known as Bermuda dollar)","number":"60"},{"code":"BND","decimals":2,"name":"Brunei dollar","number":"96"},{"code":"BOB","decimals":2,"name":"Boliviano","number":"68"},{"code":"BOV","decimals":2,"name":"Bolivian Mvdol (funds code)","number":"984"},{"code":"BRL","decimals":2,"name":"Brazilian real","number":"986"},{"code":"BSD","decimals":2,"name":"Bahamian dollar","number":"44"},{"code":"BTN","decimals":2,"name":"Bhutanese ngultrum","number":"64"},{"code":"BWP","decimals":2,"name":"Botswana pula","number":"72"},{"code":"BYR","decimals":0,"name":"Belarusian ruble","number":"974"},{"code":"BZD","decimals":2,"name":"Belize dollar","number":"84"},{"code":"CAD","decimals":2,"name":"Canadian dollar","number":"124"},{"code":"CDF","decimals":2,"name":"Congolese franc","number":"976"},{"code":"CHE","decimals":2,"name":"WIR Euro (complementary currency)","number":"947"},{"code":"CHF","decimals":2,"name":"Swiss franc","number":"756"},{"code":"CHW","decimals":2,"name":"WIR Franc (complementary currency)","number":"948"},{"code":"CLF","decimals":0,"name":"Unidad de Fomento (funds code)","number":"990"},{"code":"CLP","decimals":0,"name":"Chilean peso","number":"152"},{"code":"CNY","decimals":2,"name":"Chinese yuan","number":"156"},{"code":"COP","decimals":2,"name":"Colombian peso","number":"170"},{"code":"COU","decimals":2,"name":"Unidad de Valor Real","number":"970"},{"code":"CRC","decimals":2,"name":"Costa Rican colon","number":"188"},{"code":"CUC","decimals":2,"name":"Cuban convertible peso","number":"931"},{"code":"CUP","decimals":2,"name":"Cuban peso","number":"192"},{"code":"CVE","decimals":0,"name":"Cape Verde escudo","number":"132"},{"code":"CZK","decimals":2,"name":"Czech koruna","number":"203"},{"code":"DJF","decimals":0,"name":"Djiboutian franc","number":"262"},{"code":"DKK","decimals":2,"name":"Danish krone","number":"208"},{"code":"DOP","decimals":2,"name":"Dominican peso","number":"214"},{"code":"DZD","decimals":2,"name":"Algerian dinar","number":"12"},{"code":"EGP","decimals":2,"name":"Egyptian pound","number":"818"},{"code":"ERN","decimals":2,"name":"Eritrean nakfa","number":"232"},{"code":"ETB","decimals":2,"name":"Ethiopian birr","number":"230"},{"code":"EUR","decimals":2,"name":"Euro","number":"978"},{"code":"FJD","decimals":2,"name":"Fiji dollar","number":"242"},{"code":"FKP","decimals":2,"name":"Falkland Islands pound","number":"238"},{"code":"GBP","decimals":2,"name":"Pound sterling","number":"826"},{"code":"GEL","decimals":2,"name":"Georgian lari","number":"981"},{"code":"GHS","decimals":2,"name":"Ghanaian cedi","number":"936"},{"code":"GIP","decimals":2,"name":"Gibraltar pound","number":"292"},{"code":"GMD","decimals":2,"name":"Gambian dalasi","number":"270"},{"code":"GNF","decimals":0,"name":"Guinean franc","number":"324"},{"code":"GTQ","decimals":2,"name":"Guatemalan quetzal","number":"320"},{"code":"GYD","decimals":2,"name":"Guyanese dollar","number":"328"},{"code":"HKD","decimals":2,"name":"Hong Kong dollar","number":"344"},{"code":"HNL","decimals":2,"name":"Honduran lempira","number":"340"},{"code":"HRK","decimals":2,"name":"Croatian kuna","number":"191"},{"code":"HTG","decimals":2,"name":"Haitian gourde","number":"332"},{"code":"HUF","decimals":2,"name":"Hungarian forint","number":"348"},{"code":"IDR","decimals":2,"name":"Indonesian rupiah","number":"360"},{"code":"ILS","decimals":2,"name":"Israeli new shekel","number":"376"},{"code":"INR","decimals":2,"name":"Indian rupee","number":"356"},{"code":"IQD","decimals":3,"name":"Iraqi dinar","number":"368"},{"code":"IRR","decimals":0,"name":"Iranian rial","number":"364"},{"code":"ISK","decimals":0,"name":"Icelandic króna","number":"352"},{"code":"JMD","decimals":2,"name":"Jamaican dollar","number":"388"},{"code":"JOD","decimals":3,"name":"Jordanian dinar","number":"400"},{"code":"JPY","decimals":0,"name":"Japanese yen","number":"392"},{"code":"KES","decimals":2,"name":"Kenyan shilling","number":"404"},{"code":"KGS","decimals":2,"name":"Kyrgyzstani som","number":"417"},{"code":"KHR","decimals":2,"name":"Cambodian riel","number":"116"},{"code":"KMF","decimals":0,"name":"Comoro franc","number":"174"},{"code":"KPW","decimals":0,"name":"North Korean won","number":"408"},{"code":"KRW","decimals":0,"name":"South Korean won","number":"410"},{"code":"KWD","decimals":3,"name":"Kuwaiti dinar","number":"414"},{"code":"KYD","decimals":2,"name":"Cayman Islands dollar","number":"136"},{"code":"KZT","decimals":2,"name":"Kazakhstani tenge","number":"398"},{"code":"LAK","decimals":0,"name":"Lao kip","number":"418"},{"code":"LBP","decimals":0,"name":"Lebanese pound","number":"422"},{"code":"LKR","decimals":2,"name":"Sri Lankan rupee","number":"144"},{"code":"LRD","decimals":2,"name":"Liberian dollar","number":"430"},{"code":"LSL","decimals":2,"name":"Lesotho loti","number":"426"},{"code":"LTL","decimals":2,"name":"Lithuanian litas","number":"440"},{"code":"LVL","decimals":2,"name":"Latvian lats","number":"428"},{"code":"LYD","decimals":3,"name":"Libyan dinar","number":"434"},{"code":"MAD","decimals":2,"name":"Moroccan dirham","number":"504"},{"code":"MDL","decimals":2,"name":"Moldovan leu","number":"498"},{"code":"MGA","decimals":0,"name":"Malagasy ariary","number":"969"},{"code":"MKD","decimals":0,"name":"Macedonian denar","number":"807"},{"code":"MMK","decimals":0,"name":"Myanma kyat","number":"104"},{"code":"MNT","decimals":2,"name":"Mongolian tugrik","number":"496"},{"code":"MOP","decimals":2,"name":"Macanese pataca","number":"446"},{"code":"MRO","decimals":0,"name":"Mauritanian ouguiya","number":"478"},{"code":"MUR","decimals":2,"name":"Mauritian rupee","number":"480"},{"code":"MVR","decimals":2,"name":"Maldivian rufiyaa","number":"462"},{"code":"MWK","decimals":2,"name":"Malawian kwacha","number":"454"},{"code":"MXN","decimals":2,"name":"Mexican peso","number":"484"},{"code":"MXV","decimals":2,"name":"Mexican Unidad de Inversion (UDI) (funds code)","number":"979"},{"code":"MYR","decimals":2,"name":"Malaysian ringgit","number":"458"},{"code":"MZN","decimals":2,"name":"Mozambican metical","number":"943"},{"code":"NAD","decimals":2,"name":"Namibian dollar","number":"516"},{"code":"NGN","decimals":2,"name":"Nigerian naira","number":"566"},{"code":"NIO","decimals":2,"name":"Nicaraguan córdoba","number":"558"},{"code":"NOK","decimals":2,"name":"Norwegian krone","number":"578"},{"code":"NPR","decimals":2,"name":"Nepalese rupee","number":"524"},{"code":"NZD","decimals":2,"name":"New Zealand dollar","number":"554"},{"code":"OMR","decimals":3,"name":"Omani rial","number":"512"},{"code":"PAB","decimals":2,"name":"Panamanian balboa","number":"590"},{"code":"PEN","decimals":2,"name":"Peruvian nuevo sol","number":"604"},{"code":"PGK","decimals":2,"name":"Papua New Guinean kina","number":"598"},{"code":"PHP","decimals":2,"name":"Philippine peso","number":"608"},{"code":"PKR","decimals":2,"name":"Pakistani rupee","number":"586"},{"code":"PLN","decimals":2,"name":"Polish złoty","number":"985"},{"code":"PYG","decimals":0,"name":"Paraguayan guaraní","number":"600"},{"code":"QAR","decimals":2,"name":"Qatari riyal","number":"634"},{"code":"RON","decimals":2,"name":"Romanian new leu","number":"946"},{"code":"RSD","decimals":2,"name":"Serbian dinar","number":"941"},{"code":"RUB","decimals":2,"name":"Russian rouble","number":"643"},{"code":"RWF","decimals":0,"name":"Rwandan franc","number":"646"},{"code":"SAR","decimals":2,"name":"Saudi riyal","number":"682"},{"code":"SBD","decimals":2,"name":"Solomon Islands dollar","number":"90"},{"code":"SCR","decimals":2,"name":"Seychelles rupee","number":"690"},{"code":"SDG","decimals":2,"name":"Sudanese pound","number":"938"},{"code":"SEK","decimals":2,"name":"Swedish krona/kronor","number":"752"},{"code":"SGD","decimals":2,"name":"Singapore dollar","number":"702"},{"code":"SHP","decimals":2,"name":"Saint Helena pound","number":"654"},{"code":"SLL","decimals":0,"name":"Sierra Leonean leone","number":"694"},{"code":"SOS","decimals":2,"name":"Somali shilling","number":"706"},{"code":"SRD","decimals":2,"name":"Surinamese dollar","number":"968"},{"code":"SSP","decimals":2,"name":"South Sudanese pound","number":"728"},{"code":"STD","decimals":0,"name":"São Tomé and Príncipe dobra","number":"678"},{"code":"SYP","decimals":2,"name":"Syrian pound","number":"760"},{"code":"SZL","decimals":2,"name":"Swazi lilangeni","number":"748"},{"code":"THB","decimals":2,"name":"Thai baht","number":"764"},{"code":"TJS","decimals":2,"name":"Tajikistani somoni","number":"972"},{"code":"TMT","decimals":2,"name":"Turkmenistani manat","number":"934"},{"code":"TND","decimals":3,"name":"Tunisian dinar","number":"788"},{"code":"TOP","decimals":2,"name":"Tongan paʻanga","number":"776"},{"code":"TRY","decimals":2,"name":"Turkish lira","number":"949"},{"code":"TTD","decimals":2,"name":"Trinidad and Tobago dollar","number":"780"},{"code":"TWD","decimals":2,"name":"New Taiwan dollar","number":"901"},{"code":"TZS","decimals":2,"name":"Tanzanian shilling","number":"834"},{"code":"UAH","decimals":2,"name":"Ukrainian hryvnia","number":"980"},{"code":"UGX","decimals":2,"name":"Ugandan shilling","number":"800"},{"code":"USD","decimals":2,"name":"United States dollar","number":"840"},{"code":"USN","decimals":2,"name":"United States dollar (next day) (funds code)","number":"997"},{"code":"USS","decimals":2,"name":"United States dollar (same day) (funds code) (one source[who?] claims it is no longer used, but it is still on the ISO 4217-MA list)","number":"998"},{"code":"UYI","decimals":0,"name":"Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)","number":"940"},{"code":"UYU","decimals":2,"name":"Uruguayan peso","number":"858"},{"code":"UZS","decimals":2,"name":"Uzbekistan som","number":"860"},{"code":"VEF","decimals":2,"name":"Venezuelan bolívar fuerte","number":"937"},{"code":"VND","decimals":0,"name":"Vietnamese dong","number":"704"},{"code":"VUV","decimals":0,"name":"Vanuatu vatu","number":"548"},{"code":"WST","decimals":2,"name":"Samoan tala","number":"882"},{"code":"XAF","decimals":0,"name":"CFA franc BEAC","number":"950"},{"code":"XAG","decimals":null,"name":"Silver (one troy ounce)","number":"961"},{"code":"XAU","decimals":null,"name":"Gold (one troy ounce)","number":"959"},{"code":"XBA","decimals":null,"name":"European Composite Unit (EURCO) (bond market unit)","number":"955"},{"code":"XBB","decimals":null,"name":"European Monetary Unit (E.M.U.-6) (bond market unit)","number":"956"},{"code":"XBC","decimals":null,"name":"European Unit of Account 9 (E.U.A.-9) (bond market unit)","number":"957"},{"code":"XBD","decimals":null,"name":"European Unit of Account 17 (E.U.A.-17) (bond market unit)","number":"958"},{"code":"XCD","decimals":2,"name":"East Caribbean dollar","number":"951"},{"code":"XDR","decimals":null,"name":"Special drawing rights","number":"960"},{"code":"XFU","decimals":null,"name":"UIC franc (special settlement currency)","number":"Nil"},{"code":"XOF","decimals":0,"name":"CFA franc BCEAO","number":"952"},{"code":"XPD","decimals":null,"name":"Palladium (one troy ounce)","number":"964"},{"code":"XPF","decimals":0,"name":"CFP franc","number":"953"},{"code":"XPT","decimals":null,"name":"Platinum (one troy ounce)","number":"962"},{"code":"XTS","decimals":null,"name":"Code reserved for testing purposes","number":"963"},{"code":"XXX","decimals":null,"name":"No currency","number":"999"},{"code":"YER","decimals":2,"name":"Yemeni rial","number":"886"},{"code":"ZAR","decimals":2,"name":"South African rand","number":"710"},{"code":"ZMW","decimals":2,"name":"Zambian kwacha","number":"967"}]'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '[{"alpha2":"aa","alpha3":"aar","bibliographic":"","name":"Afar"},{"alpha2":"ab","alpha3":"abk","bibliographic":"","name":"Abkhazian"},{"alpha2":"","alpha3":"ace","bibliographic":"","name":"Achinese"},{"alpha2":"","alpha3":"ach","bibliographic":"","name":"Acoli"},{"alpha2":"","alpha3":"ada","bibliographic":"","name":"Adangme"},{"alpha2":"","alpha3":"ady","bibliographic":"","name":"Adygei"},{"alpha2":"","alpha3":"ady","bibliographic":"","name":"Adyghe"},{"alpha2":"","alpha3":"afa","bibliographic":"","name":"Afro-Asiatic languages"},{"alpha2":"","alpha3":"afh","bibliographic":"","name":"Afrihili"},{"alpha2":"af","alpha3":"afr","bibliographic":"","name":"Afrikaans"},{"alpha2":"","alpha3":"ain","bibliographic":"","name":"Ainu"},{"alpha2":"ak","alpha3":"aka","bibliographic":"","name":"Akan"},{"alpha2":"","alpha3":"akk","bibliographic":"","name":"Akkadian"},{"alpha2":"","alpha3":"ale","bibliographic":"","name":"Aleut"},{"alpha2":"","alpha3":"alg","bibliographic":"","name":"Algonquian languages"},{"alpha2":"","alpha3":"alt","bibliographic":"","name":"Southern Altai"},{"alpha2":"am","alpha3":"amh","bibliographic":"","name":"Amharic"},{"alpha2":"","alpha3":"ang","bibliographic":"","name":"English, Old (ca.450-1100)"},{"alpha2":"","alpha3":"anp","bibliographic":"","name":"Angika"},{"alpha2":"","alpha3":"apa","bibliographic":"","name":"Apache languages"},{"alpha2":"ar","alpha3":"ara","bibliographic":"","name":"Arabic"},{"alpha2":"","alpha3":"arc","bibliographic":"","name":"Imperial Aramaic (700-300 BCE)"},{"alpha2":"","alpha3":"arc","bibliographic":"","name":"Official Aramaic (700-300 BCE)"},{"alpha2":"an","alpha3":"arg","bibliographic":"","name":"Aragonese"},{"alpha2":"","alpha3":"arn","bibliographic":"","name":"Mapuche"},{"alpha2":"","alpha3":"arn","bibliographic":"","name":"Mapudungun"},{"alpha2":"","alpha3":"arp","bibliographic":"","name":"Arapaho"},{"alpha2":"","alpha3":"art","bibliographic":"","name":"Artificial languages"},{"alpha2":"","alpha3":"arw","bibliographic":"","name":"Arawak"},{"alpha2":"as","alpha3":"asm","bibliographic":"","name":"Assamese"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Asturian"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Asturleonese"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Bable"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Leonese"},{"alpha2":"","alpha3":"ath","bibliographic":"","name":"Athapascan languages"},{"alpha2":"","alpha3":"aus","bibliographic":"","name":"Australian languages"},{"alpha2":"av","alpha3":"ava","bibliographic":"","name":"Avaric"},{"alpha2":"ae","alpha3":"ave","bibliographic":"","name":"Avestan"},{"alpha2":"","alpha3":"awa","bibliographic":"","name":"Awadhi"},{"alpha2":"ay","alpha3":"aym","bibliographic":"","name":"Aymara"},{"alpha2":"az","alpha3":"aze","bibliographic":"","name":"Azerbaijani"},{"alpha2":"","alpha3":"bad","bibliographic":"","name":"Banda languages"},{"alpha2":"","alpha3":"bai","bibliographic":"","name":"Bamileke languages"},{"alpha2":"ba","alpha3":"bak","bibliographic":"","name":"Bashkir"},{"alpha2":"","alpha3":"bal","bibliographic":"","name":"Baluchi"},{"alpha2":"bm","alpha3":"bam","bibliographic":"","name":"Bambara"},{"alpha2":"","alpha3":"ban","bibliographic":"","name":"Balinese"},{"alpha2":"","alpha3":"bas","bibliographic":"","name":"Basa"},{"alpha2":"","alpha3":"bat","bibliographic":"","name":"Baltic languages"},{"alpha2":"","alpha3":"bej","bibliographic":"","name":"Bedawiyet"},{"alpha2":"","alpha3":"bej","bibliographic":"","name":"Beja"},{"alpha2":"be","alpha3":"bel","bibliographic":"","name":"Belarusian"},{"alpha2":"","alpha3":"bem","bibliographic":"","name":"Bemba"},{"alpha2":"bn","alpha3":"ben","bibliographic":"","name":"Bengali"},{"alpha2":"","alpha3":"ber","bibliographic":"","name":"Berber languages"},{"alpha2":"","alpha3":"bho","bibliographic":"","name":"Bhojpuri"},{"alpha2":"bh","alpha3":"bih","bibliographic":"","name":"Bihari languages"},{"alpha2":"","alpha3":"bik","bibliographic":"","name":"Bikol"},{"alpha2":"","alpha3":"bin","bibliographic":"","name":"Bini"},{"alpha2":"","alpha3":"bin","bibliographic":"","name":"Edo"},{"alpha2":"bi","alpha3":"bis","bibliographic":"","name":"Bislama"},{"alpha2":"","alpha3":"bla","bibliographic":"","name":"Siksika"},{"alpha2":"","alpha3":"bnt","bibliographic":"","name":"Bantu languages"},{"alpha2":"bo","alpha3":"bod","bibliographic":"tib","name":"Tibetan"},{"alpha2":"bs","alpha3":"bos","bibliographic":"","name":"Bosnian"},{"alpha2":"","alpha3":"bra","bibliographic":"","name":"Braj"},{"alpha2":"br","alpha3":"bre","bibliographic":"","name":"Breton"},{"alpha2":"","alpha3":"btk","bibliographic":"","name":"Batak languages"},{"alpha2":"","alpha3":"bua","bibliographic":"","name":"Buriat"},{"alpha2":"","alpha3":"bug","bibliographic":"","name":"Buginese"},{"alpha2":"bg","alpha3":"bul","bibliographic":"","name":"Bulgarian"},{"alpha2":"","alpha3":"byn","bibliographic":"","name":"Bilin"},{"alpha2":"","alpha3":"byn","bibliographic":"","name":"Blin"},{"alpha2":"","alpha3":"cad","bibliographic":"","name":"Caddo"},{"alpha2":"","alpha3":"cai","bibliographic":"","name":"Central American Indian languages"},{"alpha2":"","alpha3":"car","bibliographic":"","name":"Galibi Carib"},{"alpha2":"ca","alpha3":"cat","bibliographic":"","name":"Catalan"},{"alpha2":"ca","alpha3":"cat","bibliographic":"","name":"Valencian"},{"alpha2":"","alpha3":"cau","bibliographic":"","name":"Caucasian languages"},{"alpha2":"","alpha3":"ceb","bibliographic":"","name":"Cebuano"},{"alpha2":"","alpha3":"cel","bibliographic":"","name":"Celtic languages"},{"alpha2":"cs","alpha3":"ces","bibliographic":"cze","name":"Czech"},{"alpha2":"ch","alpha3":"cha","bibliographic":"","name":"Chamorro"},{"alpha2":"","alpha3":"chb","bibliographic":"","name":"Chibcha"},{"alpha2":"ce","alpha3":"che","bibliographic":"","name":"Chechen"},{"alpha2":"","alpha3":"chg","bibliographic":"","name":"Chagatai"},{"alpha2":"","alpha3":"chk","bibliographic":"","name":"Chuukese"},{"alpha2":"","alpha3":"chm","bibliographic":"","name":"Mari"},{"alpha2":"","alpha3":"chn","bibliographic":"","name":"Chinook jargon"},{"alpha2":"","alpha3":"cho","bibliographic":"","name":"Choctaw"},{"alpha2":"","alpha3":"chp","bibliographic":"","name":"Chipewyan"},{"alpha2":"","alpha3":"chp","bibliographic":"","name":"Dene Suline"},{"alpha2":"","alpha3":"chr","bibliographic":"","name":"Cherokee"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Church Slavic"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Church Slavonic"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Old Bulgarian"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Old Church Slavonic"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Old Slavonic"},{"alpha2":"cv","alpha3":"chv","bibliographic":"","name":"Chuvash"},{"alpha2":"","alpha3":"chy","bibliographic":"","name":"Cheyenne"},{"alpha2":"","alpha3":"cmc","bibliographic":"","name":"Chamic languages"},{"alpha2":"","alpha3":"cop","bibliographic":"","name":"Coptic"},{"alpha2":"kw","alpha3":"cor","bibliographic":"","name":"Cornish"},{"alpha2":"co","alpha3":"cos","bibliographic":"","name":"Corsican"},{"alpha2":"","alpha3":"cpe","bibliographic":"","name":"Creoles and pidgins, English based"},{"alpha2":"","alpha3":"cpf","bibliographic":"","name":"Creoles and pidgins, French-based"},{"alpha2":"","alpha3":"cpp","bibliographic":"","name":"Creoles and pidgins, Portuguese-based"},{"alpha2":"cr","alpha3":"cre","bibliographic":"","name":"Cree"},{"alpha2":"","alpha3":"crh","bibliographic":"","name":"Crimean Tatar"},{"alpha2":"","alpha3":"crh","bibliographic":"","name":"Crimean Turkish"},{"alpha2":"","alpha3":"crp","bibliographic":"","name":"Creoles and pidgins"},{"alpha2":"","alpha3":"csb","bibliographic":"","name":"Kashubian"},{"alpha2":"","alpha3":"cus","bibliographic":"","name":"Cushitic languages"},{"alpha2":"cy","alpha3":"cym","bibliographic":"wel","name":"Welsh"},{"alpha2":"","alpha3":"dak","bibliographic":"","name":"Dakota"},{"alpha2":"da","alpha3":"dan","bibliographic":"","name":"Danish"},{"alpha2":"","alpha3":"dar","bibliographic":"","name":"Dargwa"},{"alpha2":"","alpha3":"day","bibliographic":"","name":"Land Dayak languages"},{"alpha2":"","alpha3":"del","bibliographic":"","name":"Delaware"},{"alpha2":"","alpha3":"den","bibliographic":"","name":"Slave (Athapascan)"},{"alpha2":"de","alpha3":"deu","bibliographic":"ger","name":"German"},{"alpha2":"","alpha3":"dgr","bibliographic":"","name":"Dogrib"},{"alpha2":"","alpha3":"din","bibliographic":"","name":"Dinka"},{"alpha2":"dv","alpha3":"div","bibliographic":"","name":"Dhivehi"},{"alpha2":"dv","alpha3":"div","bibliographic":"","name":"Divehi"},{"alpha2":"dv","alpha3":"div","bibliographic":"","name":"Maldivian"},{"alpha2":"","alpha3":"doi","bibliographic":"","name":"Dogri"},{"alpha2":"","alpha3":"dra","bibliographic":"","name":"Dravidian languages"},{"alpha2":"","alpha3":"dsb","bibliographic":"","name":"Lower Sorbian"},{"alpha2":"","alpha3":"dua","bibliographic":"","name":"Duala"},{"alpha2":"","alpha3":"dum","bibliographic":"","name":"Dutch, Middle (ca.1050-1350)"},{"alpha2":"","alpha3":"dyu","bibliographic":"","name":"Dyula"},{"alpha2":"dz","alpha3":"dzo","bibliographic":"","name":"Dzongkha"},{"alpha2":"","alpha3":"efi","bibliographic":"","name":"Efik"},{"alpha2":"","alpha3":"egy","bibliographic":"","name":"Egyptian (Ancient)"},{"alpha2":"","alpha3":"eka","bibliographic":"","name":"Ekajuk"},{"alpha2":"el","alpha3":"ell","bibliographic":"gre","name":"Greek, Modern (1453-)"},{"alpha2":"","alpha3":"elx","bibliographic":"","name":"Elamite"},{"alpha2":"en","alpha3":"eng","bibliographic":"","name":"English"},{"alpha2":"","alpha3":"enm","bibliographic":"","name":"English, Middle (1100-1500)"},{"alpha2":"eo","alpha3":"epo","bibliographic":"","name":"Esperanto"},{"alpha2":"et","alpha3":"est","bibliographic":"","name":"Estonian"},{"alpha2":"eu","alpha3":"eus","bibliographic":"baq","name":"Basque"},{"alpha2":"ee","alpha3":"ewe","bibliographic":"","name":"Ewe"},{"alpha2":"","alpha3":"ewo","bibliographic":"","name":"Ewondo"},{"alpha2":"","alpha3":"fan","bibliographic":"","name":"Fang"},{"alpha2":"fo","alpha3":"fao","bibliographic":"","name":"Faroese"},{"alpha2":"fa","alpha3":"fas","bibliographic":"per","name":"Persian"},{"alpha2":"","alpha3":"fat","bibliographic":"","name":"Fanti"},{"alpha2":"fj","alpha3":"fij","bibliographic":"","name":"Fijian"},{"alpha2":"","alpha3":"fil","bibliographic":"","name":"Filipino"},{"alpha2":"","alpha3":"fil","bibliographic":"","name":"Pilipino"},{"alpha2":"fi","alpha3":"fin","bibliographic":"","name":"Finnish"},{"alpha2":"","alpha3":"fiu","bibliographic":"","name":"Finno-Ugrian languages"},{"alpha2":"","alpha3":"fon","bibliographic":"","name":"Fon"},{"alpha2":"fr","alpha3":"fra","bibliographic":"fre","name":"French"},{"alpha2":"","alpha3":"frm","bibliographic":"","name":"French, Middle (ca.1400-1600)"},{"alpha2":"","alpha3":"fro","bibliographic":"","name":"French, Old (842-ca.1400)"},{"alpha2":"","alpha3":"frr","bibliographic":"","name":"Northern Frisian"},{"alpha2":"","alpha3":"frs","bibliographic":"","name":"Eastern Frisian"},{"alpha2":"fy","alpha3":"fry","bibliographic":"","name":"Western Frisian"},{"alpha2":"ff","alpha3":"ful","bibliographic":"","name":"Fulah"},{"alpha2":"","alpha3":"fur","bibliographic":"","name":"Friulian"},{"alpha2":"","alpha3":"gaa","bibliographic":"","name":"Ga"},{"alpha2":"","alpha3":"gay","bibliographic":"","name":"Gayo"},{"alpha2":"","alpha3":"gba","bibliographic":"","name":"Gbaya"},{"alpha2":"","alpha3":"gem","bibliographic":"","name":"Germanic languages"},{"alpha2":"","alpha3":"gez","bibliographic":"","name":"Geez"},{"alpha2":"","alpha3":"gil","bibliographic":"","name":"Gilbertese"},{"alpha2":"gd","alpha3":"gla","bibliographic":"","name":"Gaelic"},{"alpha2":"gd","alpha3":"gla","bibliographic":"","name":"Scottish Gaelic"},{"alpha2":"ga","alpha3":"gle","bibliographic":"","name":"Irish"},{"alpha2":"gl","alpha3":"glg","bibliographic":"","name":"Galician"},{"alpha2":"gv","alpha3":"glv","bibliographic":"","name":"Manx"},{"alpha2":"","alpha3":"gmh","bibliographic":"","name":"German, Middle High (ca.1050-1500)"},{"alpha2":"","alpha3":"goh","bibliographic":"","name":"German, Old High (ca.750-1050)"},{"alpha2":"","alpha3":"gon","bibliographic":"","name":"Gondi"},{"alpha2":"","alpha3":"gor","bibliographic":"","name":"Gorontalo"},{"alpha2":"","alpha3":"got","bibliographic":"","name":"Gothic"},{"alpha2":"","alpha3":"grb","bibliographic":"","name":"Grebo"},{"alpha2":"","alpha3":"grc","bibliographic":"","name":"Greek, Ancient (to 1453)"},{"alpha2":"gn","alpha3":"grn","bibliographic":"","name":"Guarani"},{"alpha2":"","alpha3":"gsw","bibliographic":"","name":"Alemannic"},{"alpha2":"","alpha3":"gsw","bibliographic":"","name":"Alsatian"},{"alpha2":"","alpha3":"gsw","bibliographic":"","name":"Swiss German"},{"alpha2":"gu","alpha3":"guj","bibliographic":"","name":"Gujarati"},{"alpha2":"","alpha3":"gwi","bibliographic":"","name":"Gwich\'in"},{"alpha2":"","alpha3":"hai","bibliographic":"","name":"Haida"},{"alpha2":"ht","alpha3":"hat","bibliographic":"","name":"Haitian"},{"alpha2":"ht","alpha3":"hat","bibliographic":"","name":"Haitian Creole"},{"alpha2":"ha","alpha3":"hau","bibliographic":"","name":"Hausa"},{"alpha2":"","alpha3":"haw","bibliographic":"","name":"Hawaiian"},{"alpha2":"he","alpha3":"heb","bibliographic":"","name":"Hebrew"},{"alpha2":"hz","alpha3":"her","bibliographic":"","name":"Herero"},{"alpha2":"","alpha3":"hil","bibliographic":"","name":"Hiligaynon"},{"alpha2":"","alpha3":"him","bibliographic":"","name":"Himachali languages"},{"alpha2":"","alpha3":"him","bibliographic":"","name":"Western Pahari languages"},{"alpha2":"hi","alpha3":"hin","bibliographic":"","name":"Hindi"},{"alpha2":"","alpha3":"hit","bibliographic":"","name":"Hittite"},{"alpha2":"","alpha3":"hmn","bibliographic":"","name":"Hmong"},{"alpha2":"","alpha3":"hmn","bibliographic":"","name":"Mong"},{"alpha2":"ho","alpha3":"hmo","bibliographic":"","name":"Hiri Motu"},{"alpha2":"hr","alpha3":"hrv","bibliographic":"","name":"Croatian"},{"alpha2":"","alpha3":"hsb","bibliographic":"","name":"Upper Sorbian"},{"alpha2":"hu","alpha3":"hun","bibliographic":"","name":"Hungarian"},{"alpha2":"","alpha3":"hup","bibliographic":"","name":"Hupa"},{"alpha2":"hy","alpha3":"hye","bibliographic":"arm","name":"Armenian"},{"alpha2":"","alpha3":"iba","bibliographic":"","name":"Iban"},{"alpha2":"ig","alpha3":"ibo","bibliographic":"","name":"Igbo"},{"alpha2":"io","alpha3":"ido","bibliographic":"","name":"Ido"},{"alpha2":"ii","alpha3":"iii","bibliographic":"","name":"Nuosu"},{"alpha2":"ii","alpha3":"iii","bibliographic":"","name":"Sichuan Yi"},{"alpha2":"","alpha3":"ijo","bibliographic":"","name":"Ijo languages"},{"alpha2":"iu","alpha3":"iku","bibliographic":"","name":"Inuktitut"},{"alpha2":"ie","alpha3":"ile","bibliographic":"","name":"Interlingue"},{"alpha2":"ie","alpha3":"ile","bibliographic":"","name":"Occidental"},{"alpha2":"","alpha3":"ilo","bibliographic":"","name":"Iloko"},{"alpha2":"ia","alpha3":"ina","bibliographic":"","name":"Interlingua (International Auxiliary Language Association)"},{"alpha2":"","alpha3":"inc","bibliographic":"","name":"Indic languages"},{"alpha2":"id","alpha3":"ind","bibliographic":"","name":"Indonesian"},{"alpha2":"","alpha3":"ine","bibliographic":"","name":"Indo-European languages"},{"alpha2":"","alpha3":"inh","bibliographic":"","name":"Ingush"},{"alpha2":"ik","alpha3":"ipk","bibliographic":"","name":"Inupiaq"},{"alpha2":"","alpha3":"ira","bibliographic":"","name":"Iranian languages"},{"alpha2":"","alpha3":"iro","bibliographic":"","name":"Iroquoian languages"},{"alpha2":"is","alpha3":"isl","bibliographic":"ice","name":"Icelandic"},{"alpha2":"it","alpha3":"ita","bibliographic":"","name":"Italian"},{"alpha2":"jv","alpha3":"jav","bibliographic":"","name":"Javanese"},{"alpha2":"","alpha3":"jbo","bibliographic":"","name":"Lojban"},{"alpha2":"ja","alpha3":"jpn","bibliographic":"","name":"Japanese"},{"alpha2":"","alpha3":"jpr","bibliographic":"","name":"Judeo-Persian"},{"alpha2":"","alpha3":"jrb","bibliographic":"","name":"Judeo-Arabic"},{"alpha2":"","alpha3":"kaa","bibliographic":"","name":"Kara-Kalpak"},{"alpha2":"","alpha3":"kab","bibliographic":"","name":"Kabyle"},{"alpha2":"","alpha3":"kac","bibliographic":"","name":"Jingpho"},{"alpha2":"","alpha3":"kac","bibliographic":"","name":"Kachin"},{"alpha2":"kl","alpha3":"kal","bibliographic":"","name":"Greenlandic"},{"alpha2":"kl","alpha3":"kal","bibliographic":"","name":"Kalaallisut"},{"alpha2":"","alpha3":"kam","bibliographic":"","name":"Kamba"},{"alpha2":"kn","alpha3":"kan","bibliographic":"","name":"Kannada"},{"alpha2":"","alpha3":"kar","bibliographic":"","name":"Karen languages"},{"alpha2":"ks","alpha3":"kas","bibliographic":"","name":"Kashmiri"},{"alpha2":"ka","alpha3":"kat","bibliographic":"geo","name":"Georgian"},{"alpha2":"kr","alpha3":"kau","bibliographic":"","name":"Kanuri"},{"alpha2":"","alpha3":"kaw","bibliographic":"","name":"Kawi"},{"alpha2":"kk","alpha3":"kaz","bibliographic":"","name":"Kazakh"},{"alpha2":"","alpha3":"kbd","bibliographic":"","name":"Kabardian"},{"alpha2":"","alpha3":"kha","bibliographic":"","name":"Khasi"},{"alpha2":"","alpha3":"khi","bibliographic":"","name":"Khoisan languages"},{"alpha2":"km","alpha3":"khm","bibliographic":"","name":"Central Khmer"},{"alpha2":"","alpha3":"kho","bibliographic":"","name":"Khotanese"},{"alpha2":"","alpha3":"kho","bibliographic":"","name":"Sakan"},{"alpha2":"ki","alpha3":"kik","bibliographic":"","name":"Gikuyu"},{"alpha2":"ki","alpha3":"kik","bibliographic":"","name":"Kikuyu"},{"alpha2":"rw","alpha3":"kin","bibliographic":"","name":"Kinyarwanda"},{"alpha2":"ky","alpha3":"kir","bibliographic":"","name":"Kirghiz"},{"alpha2":"ky","alpha3":"kir","bibliographic":"","name":"Kyrgyz"},{"alpha2":"","alpha3":"kmb","bibliographic":"","name":"Kimbundu"},{"alpha2":"","alpha3":"kok","bibliographic":"","name":"Konkani"},{"alpha2":"kv","alpha3":"kom","bibliographic":"","name":"Komi"},{"alpha2":"kg","alpha3":"kon","bibliographic":"","name":"Kongo"},{"alpha2":"ko","alpha3":"kor","bibliographic":"","name":"Korean"},{"alpha2":"","alpha3":"kos","bibliographic":"","name":"Kosraean"},{"alpha2":"","alpha3":"kpe","bibliographic":"","name":"Kpelle"},{"alpha2":"","alpha3":"krc","bibliographic":"","name":"Karachay-Balkar"},{"alpha2":"","alpha3":"krl","bibliographic":"","name":"Karelian"},{"alpha2":"","alpha3":"kro","bibliographic":"","name":"Kru languages"},{"alpha2":"","alpha3":"kru","bibliographic":"","name":"Kurukh"},{"alpha2":"kj","alpha3":"kua","bibliographic":"","name":"Kuanyama"},{"alpha2":"kj","alpha3":"kua","bibliographic":"","name":"Kwanyama"},{"alpha2":"","alpha3":"kum","bibliographic":"","name":"Kumyk"},{"alpha2":"ku","alpha3":"kur","bibliographic":"","name":"Kurdish"},{"alpha2":"","alpha3":"kut","bibliographic":"","name":"Kutenai"},{"alpha2":"","alpha3":"lad","bibliographic":"","name":"Ladino"},{"alpha2":"","alpha3":"lah","bibliographic":"","name":"Lahnda"},{"alpha2":"","alpha3":"lam","bibliographic":"","name":"Lamba"},{"alpha2":"lo","alpha3":"lao","bibliographic":"","name":"Lao"},{"alpha2":"la","alpha3":"lat","bibliographic":"","name":"Latin"},{"alpha2":"lv","alpha3":"lav","bibliographic":"","name":"Latvian"},{"alpha2":"","alpha3":"lez","bibliographic":"","name":"Lezghian"},{"alpha2":"li","alpha3":"lim","bibliographic":"","name":"Limburgan"},{"alpha2":"li","alpha3":"lim","bibliographic":"","name":"Limburger"},{"alpha2":"li","alpha3":"lim","bibliographic":"","name":"Limburgish"},{"alpha2":"ln","alpha3":"lin","bibliographic":"","name":"Lingala"},{"alpha2":"lt","alpha3":"lit","bibliographic":"","name":"Lithuanian"},{"alpha2":"","alpha3":"lol","bibliographic":"","name":"Mongo"},{"alpha2":"","alpha3":"loz","bibliographic":"","name":"Lozi"},{"alpha2":"lb","alpha3":"ltz","bibliographic":"","name":"Letzeburgesch"},{"alpha2":"lb","alpha3":"ltz","bibliographic":"","name":"Luxembourgish"},{"alpha2":"","alpha3":"lua","bibliographic":"","name":"Luba-Lulua"},{"alpha2":"lu","alpha3":"lub","bibliographic":"","name":"Luba-Katanga"},{"alpha2":"lg","alpha3":"lug","bibliographic":"","name":"Ganda"},{"alpha2":"","alpha3":"lui","bibliographic":"","name":"Luiseno"},{"alpha2":"","alpha3":"lun","bibliographic":"","name":"Lunda"},{"alpha2":"","alpha3":"luo","bibliographic":"","name":"Luo (Kenya and Tanzania)"},{"alpha2":"","alpha3":"lus","bibliographic":"","name":"Lushai"},{"alpha2":"","alpha3":"mad","bibliographic":"","name":"Madurese"},{"alpha2":"","alpha3":"mag","bibliographic":"","name":"Magahi"},{"alpha2":"mh","alpha3":"mah","bibliographic":"","name":"Marshallese"},{"alpha2":"","alpha3":"mai","bibliographic":"","name":"Maithili"},{"alpha2":"","alpha3":"mak","bibliographic":"","name":"Makasar"},{"alpha2":"ml","alpha3":"mal","bibliographic":"","name":"Malayalam"},{"alpha2":"","alpha3":"man","bibliographic":"","name":"Mandingo"},{"alpha2":"","alpha3":"map","bibliographic":"","name":"Austronesian languages"},{"alpha2":"mr","alpha3":"mar","bibliographic":"","name":"Marathi"},{"alpha2":"","alpha3":"mas","bibliographic":"","name":"Masai"},{"alpha2":"","alpha3":"mdf","bibliographic":"","name":"Moksha"},{"alpha2":"","alpha3":"mdr","bibliographic":"","name":"Mandar"},{"alpha2":"","alpha3":"men","bibliographic":"","name":"Mende"},{"alpha2":"","alpha3":"mga","bibliographic":"","name":"Irish, Middle (900-1200)"},{"alpha2":"","alpha3":"mic","bibliographic":"","name":"Mi\'kmaq"},{"alpha2":"","alpha3":"mic","bibliographic":"","name":"Micmac"},{"alpha2":"","alpha3":"min","bibliographic":"","name":"Minangkabau"},{"alpha2":"","alpha3":"mis","bibliographic":"","name":"Uncoded languages"},{"alpha2":"mk","alpha3":"mkd","bibliographic":"mac","name":"Macedonian"},{"alpha2":"","alpha3":"mkh","bibliographic":"","name":"Mon-Khmer languages"},{"alpha2":"mg","alpha3":"mlg","bibliographic":"","name":"Malagasy"},{"alpha2":"mt","alpha3":"mlt","bibliographic":"","name":"Maltese"},{"alpha2":"","alpha3":"mnc","bibliographic":"","name":"Manchu"},{"alpha2":"","alpha3":"mni","bibliographic":"","name":"Manipuri"},{"alpha2":"","alpha3":"mno","bibliographic":"","name":"Manobo languages"},{"alpha2":"","alpha3":"moh","bibliographic":"","name":"Mohawk"},{"alpha2":"mn","alpha3":"mon","bibliographic":"","name":"Mongolian"},{"alpha2":"","alpha3":"mos","bibliographic":"","name":"Mossi"},{"alpha2":"","alpha3":"mot","bibliographic":"","name":"Montenegrin"},{"alpha2":"mi","alpha3":"mri","bibliographic":"mao","name":"Maori"},{"alpha2":"ms","alpha3":"msa","bibliographic":"may","name":"Malay"},{"alpha2":"","alpha3":"mul","bibliographic":"","name":"Multiple languages"},{"alpha2":"","alpha3":"mun","bibliographic":"","name":"Munda languages"},{"alpha2":"","alpha3":"mus","bibliographic":"","name":"Creek"},{"alpha2":"","alpha3":"mwl","bibliographic":"","name":"Mirandese"},{"alpha2":"","alpha3":"mwr","bibliographic":"","name":"Marwari"},{"alpha2":"my","alpha3":"mya","bibliographic":"bur","name":"Burmese"},{"alpha2":"","alpha3":"myn","bibliographic":"","name":"Mayan languages"},{"alpha2":"","alpha3":"myv","bibliographic":"","name":"Erzya"},{"alpha2":"","alpha3":"nah","bibliographic":"","name":"Nahuatl languages"},{"alpha2":"","alpha3":"nai","bibliographic":"","name":"North American Indian languages"},{"alpha2":"","alpha3":"nap","bibliographic":"","name":"Neapolitan"},{"alpha2":"na","alpha3":"nau","bibliographic":"","name":"Nauru"},{"alpha2":"nv","alpha3":"nav","bibliographic":"","name":"Navaho"},{"alpha2":"nv","alpha3":"nav","bibliographic":"","name":"Navajo"},{"alpha2":"nr","alpha3":"nbl","bibliographic":"","name":"Ndebele, South"},{"alpha2":"nr","alpha3":"nbl","bibliographic":"","name":"South Ndebele"},{"alpha2":"nd","alpha3":"nde","bibliographic":"","name":"Ndebele, North"},{"alpha2":"nd","alpha3":"nde","bibliographic":"","name":"North Ndebele"},{"alpha2":"ng","alpha3":"ndo","bibliographic":"","name":"Ndonga"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"German, Low"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"Low German"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"Low Saxon"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"Saxon, Low"},{"alpha2":"ne","alpha3":"nep","bibliographic":"","name":"Nepali"},{"alpha2":"","alpha3":"new","bibliographic":"","name":"Nepal Bhasa"},{"alpha2":"","alpha3":"new","bibliographic":"","name":"Newari"},{"alpha2":"","alpha3":"nia","bibliographic":"","name":"Nias"},{"alpha2":"","alpha3":"nic","bibliographic":"","name":"Niger-Kordofanian languages"},{"alpha2":"","alpha3":"niu","bibliographic":"","name":"Niuean"},{"alpha2":"nl","alpha3":"nld","bibliographic":"dut","name":"Dutch"},{"alpha2":"nl","alpha3":"nld","bibliographic":"dut","name":"Flemish"},{"alpha2":"nn","alpha3":"nno","bibliographic":"","name":"Norwegian Nynorsk"},{"alpha2":"nn","alpha3":"nno","bibliographic":"","name":"Nynorsk, Norwegian"},{"alpha2":"nb","alpha3":"nob","bibliographic":"","name":"Bokmål, Norwegian"},{"alpha2":"nb","alpha3":"nob","bibliographic":"","name":"Norwegian Bokmål"},{"alpha2":"","alpha3":"nog","bibliographic":"","name":"Nogai"},{"alpha2":"","alpha3":"non","bibliographic":"","name":"Norse, Old"},{"alpha2":"no","alpha3":"nor","bibliographic":"","name":"Norwegian"},{"alpha2":"","alpha3":"nqo","bibliographic":"","name":"N\'Ko"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Northern Sotho"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Pedi"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Sepedi"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Sotho, Northern"},{"alpha2":"","alpha3":"nub","bibliographic":"","name":"Nubian languages"},{"alpha2":"","alpha3":"nwc","bibliographic":"","name":"Classical Nepal Bhasa"},{"alpha2":"","alpha3":"nwc","bibliographic":"","name":"Classical Newari"},{"alpha2":"","alpha3":"nwc","bibliographic":"","name":"Old Newari"},{"alpha2":"ny","alpha3":"nya","bibliographic":"","name":"Chewa"},{"alpha2":"ny","alpha3":"nya","bibliographic":"","name":"Chichewa"},{"alpha2":"ny","alpha3":"nya","bibliographic":"","name":"Nyanja"},{"alpha2":"","alpha3":"nym","bibliographic":"","name":"Nyamwezi"},{"alpha2":"","alpha3":"nyn","bibliographic":"","name":"Nyankole"},{"alpha2":"","alpha3":"nyo","bibliographic":"","name":"Nyoro"},{"alpha2":"","alpha3":"nzi","bibliographic":"","name":"Nzima"},{"alpha2":"oc","alpha3":"oci","bibliographic":"","name":"Occitan (post 1500)"},{"alpha2":"oj","alpha3":"oji","bibliographic":"","name":"Ojibwa"},{"alpha2":"or","alpha3":"ori","bibliographic":"","name":"Oriya"},{"alpha2":"om","alpha3":"orm","bibliographic":"","name":"Oromo"},{"alpha2":"","alpha3":"osa","bibliographic":"","name":"Osage"},{"alpha2":"os","alpha3":"oss","bibliographic":"","name":"Ossetian"},{"alpha2":"os","alpha3":"oss","bibliographic":"","name":"Ossetic"},{"alpha2":"","alpha3":"ota","bibliographic":"","name":"Turkish, Ottoman (1500-1928)"},{"alpha2":"","alpha3":"oto","bibliographic":"","name":"Otomian languages"},{"alpha2":"","alpha3":"paa","bibliographic":"","name":"Papuan languages"},{"alpha2":"","alpha3":"pag","bibliographic":"","name":"Pangasinan"},{"alpha2":"","alpha3":"pal","bibliographic":"","name":"Pahlavi"},{"alpha2":"","alpha3":"pam","bibliographic":"","name":"Kapampangan"},{"alpha2":"","alpha3":"pam","bibliographic":"","name":"Pampanga"},{"alpha2":"pa","alpha3":"pan","bibliographic":"","name":"Panjabi"},{"alpha2":"pa","alpha3":"pan","bibliographic":"","name":"Punjabi"},{"alpha2":"","alpha3":"pap","bibliographic":"","name":"Papiamento"},{"alpha2":"","alpha3":"pau","bibliographic":"","name":"Palauan"},{"alpha2":"","alpha3":"peo","bibliographic":"","name":"Persian, Old (ca.600-400 B.C.)"},{"alpha2":"","alpha3":"phi","bibliographic":"","name":"Philippine languages"},{"alpha2":"","alpha3":"phn","bibliographic":"","name":"Phoenician"},{"alpha2":"pi","alpha3":"pli","bibliographic":"","name":"Pali"},{"alpha2":"pl","alpha3":"pol","bibliographic":"","name":"Polish"},{"alpha2":"","alpha3":"pon","bibliographic":"","name":"Pohnpeian"},{"alpha2":"pt","alpha3":"por","bibliographic":"","name":"Portuguese"},{"alpha2":"","alpha3":"pra","bibliographic":"","name":"Prakrit languages"},{"alpha2":"","alpha3":"pro","bibliographic":"","name":"Occitan, Old (to 1500)"},{"alpha2":"","alpha3":"pro","bibliographic":"","name":"Provençal, Old (to 1500)"},{"alpha2":"ps","alpha3":"pus","bibliographic":"","name":"Pashto"},{"alpha2":"ps","alpha3":"pus","bibliographic":"","name":"Pushto"},{"alpha2":"qu","alpha3":"que","bibliographic":"","name":"Quechua"},{"alpha2":"","alpha3":"raj","bibliographic":"","name":"Rajasthani"},{"alpha2":"","alpha3":"rap","bibliographic":"","name":"Rapanui"},{"alpha2":"","alpha3":"rar","bibliographic":"","name":"Cook Islands Maori"},{"alpha2":"","alpha3":"rar","bibliographic":"","name":"Rarotongan"},{"alpha2":"","alpha3":"roa","bibliographic":"","name":"Romance languages"},{"alpha2":"rm","alpha3":"roh","bibliographic":"","name":"Romansh"},{"alpha2":"","alpha3":"rom","bibliographic":"","name":"Romany"},{"alpha2":"ro","alpha3":"ron","bibliographic":"rum","name":"Moldavian"},{"alpha2":"ro","alpha3":"ron","bibliographic":"rum","name":"Romanian"},{"alpha2":"rn","alpha3":"run","bibliographic":"","name":"Rundi"},{"alpha2":"","alpha3":"rup","bibliographic":"","name":"Aromanian"},{"alpha2":"","alpha3":"rup","bibliographic":"","name":"Arumanian"},{"alpha2":"","alpha3":"rup","bibliographic":"","name":"Macedo-Romanian"},{"alpha2":"ru","alpha3":"rus","bibliographic":"","name":"Russian"},{"alpha2":"","alpha3":"sad","bibliographic":"","name":"Sandawe"},{"alpha2":"sg","alpha3":"sag","bibliographic":"","name":"Sango"},{"alpha2":"","alpha3":"sah","bibliographic":"","name":"Yakut"},{"alpha2":"","alpha3":"sai","bibliographic":"","name":"South American Indian languages"},{"alpha2":"","alpha3":"sal","bibliographic":"","name":"Salishan languages"},{"alpha2":"","alpha3":"sam","bibliographic":"","name":"Samaritan Aramaic"},{"alpha2":"sa","alpha3":"san","bibliographic":"","name":"Sanskrit"},{"alpha2":"","alpha3":"sas","bibliographic":"","name":"Sasak"},{"alpha2":"","alpha3":"sat","bibliographic":"","name":"Santali"},{"alpha2":"","alpha3":"scn","bibliographic":"","name":"Sicilian"},{"alpha2":"","alpha3":"sco","bibliographic":"","name":"Scots"},{"alpha2":"","alpha3":"sel","bibliographic":"","name":"Selkup"},{"alpha2":"","alpha3":"sem","bibliographic":"","name":"Semitic languages"},{"alpha2":"","alpha3":"sga","bibliographic":"","name":"Irish, Old (to 900)"},{"alpha2":"","alpha3":"sgn","bibliographic":"","name":"Sign Languages"},{"alpha2":"","alpha3":"shn","bibliographic":"","name":"Shan"},{"alpha2":"","alpha3":"sid","bibliographic":"","name":"Sidamo"},{"alpha2":"si","alpha3":"sin","bibliographic":"","name":"Sinhala"},{"alpha2":"si","alpha3":"sin","bibliographic":"","name":"Sinhalese"},{"alpha2":"","alpha3":"sio","bibliographic":"","name":"Siouan languages"},{"alpha2":"","alpha3":"sit","bibliographic":"","name":"Sino-Tibetan languages"},{"alpha2":"","alpha3":"sla","bibliographic":"","name":"Slavic languages"},{"alpha2":"sk","alpha3":"slk","bibliographic":"slo","name":"Slovak"},{"alpha2":"sl","alpha3":"slv","bibliographic":"","name":"Slovenian"},{"alpha2":"","alpha3":"sma","bibliographic":"","name":"Southern Sami"},{"alpha2":"se","alpha3":"sme","bibliographic":"","name":"Northern Sami"},{"alpha2":"","alpha3":"smi","bibliographic":"","name":"Sami languages"},{"alpha2":"","alpha3":"smj","bibliographic":"","name":"Lule Sami"},{"alpha2":"","alpha3":"smn","bibliographic":"","name":"Inari Sami"},{"alpha2":"sm","alpha3":"smo","bibliographic":"","name":"Samoan"},{"alpha2":"","alpha3":"sms","bibliographic":"","name":"Skolt Sami"},{"alpha2":"sn","alpha3":"sna","bibliographic":"","name":"Shona"},{"alpha2":"sd","alpha3":"snd","bibliographic":"","name":"Sindhi"},{"alpha2":"","alpha3":"snk","bibliographic":"","name":"Soninke"},{"alpha2":"","alpha3":"sog","bibliographic":"","name":"Sogdian"},{"alpha2":"so","alpha3":"som","bibliographic":"","name":"Somali"},{"alpha2":"","alpha3":"son","bibliographic":"","name":"Songhai languages"},{"alpha2":"st","alpha3":"sot","bibliographic":"","name":"Sotho, Southern"},{"alpha2":"es","alpha3":"spa","bibliographic":"","name":"Castilian"},{"alpha2":"es","alpha3":"spa","bibliographic":"","name":"Spanish"},{"alpha2":"sq","alpha3":"sqi","bibliographic":"alb","name":"Albanian"},{"alpha2":"sc","alpha3":"srd","bibliographic":"","name":"Sardinian"},{"alpha2":"","alpha3":"srn","bibliographic":"","name":"Sranan Tongo"},{"alpha2":"sr","alpha3":"srp","bibliographic":"","name":"Serbian"},{"alpha2":"","alpha3":"srr","bibliographic":"","name":"Serer"},{"alpha2":"","alpha3":"ssa","bibliographic":"","name":"Nilo-Saharan languages"},{"alpha2":"ss","alpha3":"ssw","bibliographic":"","name":"Swati"},{"alpha2":"","alpha3":"suk","bibliographic":"","name":"Sukuma"},{"alpha2":"su","alpha3":"sun","bibliographic":"","name":"Sundanese"},{"alpha2":"","alpha3":"sus","bibliographic":"","name":"Susu"},{"alpha2":"","alpha3":"sux","bibliographic":"","name":"Sumerian"},{"alpha2":"sw","alpha3":"swa","bibliographic":"","name":"Swahili"},{"alpha2":"sv","alpha3":"swe","bibliographic":"","name":"Swedish"},{"alpha2":"","alpha3":"syc","bibliographic":"","name":"Classical Syriac"},{"alpha2":"","alpha3":"syr","bibliographic":"","name":"Syriac"},{"alpha2":"ty","alpha3":"tah","bibliographic":"","name":"Tahitian"},{"alpha2":"","alpha3":"tai","bibliographic":"","name":"Tai languages"},{"alpha2":"ta","alpha3":"tam","bibliographic":"","name":"Tamil"},{"alpha2":"tt","alpha3":"tat","bibliographic":"","name":"Tatar"},{"alpha2":"te","alpha3":"tel","bibliographic":"","name":"Telugu"},{"alpha2":"","alpha3":"tem","bibliographic":"","name":"Timne"},{"alpha2":"","alpha3":"ter","bibliographic":"","name":"Tereno"},{"alpha2":"","alpha3":"tet","bibliographic":"","name":"Tetum"},{"alpha2":"tg","alpha3":"tgk","bibliographic":"","name":"Tajik"},{"alpha2":"tl","alpha3":"tgl","bibliographic":"","name":"Tagalog"},{"alpha2":"th","alpha3":"tha","bibliographic":"","name":"Thai"},{"alpha2":"","alpha3":"tig","bibliographic":"","name":"Tigre"},{"alpha2":"ti","alpha3":"tir","bibliographic":"","name":"Tigrinya"},{"alpha2":"","alpha3":"tiv","bibliographic":"","name":"Tiv"},{"alpha2":"","alpha3":"tkl","bibliographic":"","name":"Tokelau"},{"alpha2":"","alpha3":"tlh","bibliographic":"","name":"Klingon"},{"alpha2":"","alpha3":"tlh","bibliographic":"","name":"tlhIngan-Hol"},{"alpha2":"","alpha3":"tli","bibliographic":"","name":"Tlingit"},{"alpha2":"","alpha3":"tmh","bibliographic":"","name":"Tamashek"},{"alpha2":"","alpha3":"tog","bibliographic":"","name":"Tonga (Nyasa)"},{"alpha2":"to","alpha3":"ton","bibliographic":"","name":"Tonga (Tonga Islands)"},{"alpha2":"","alpha3":"tpi","bibliographic":"","name":"Tok Pisin"},{"alpha2":"","alpha3":"tsi","bibliographic":"","name":"Tsimshian"},{"alpha2":"tn","alpha3":"tsn","bibliographic":"","name":"Tswana"},{"alpha2":"ts","alpha3":"tso","bibliographic":"","name":"Tsonga"},{"alpha2":"tk","alpha3":"tuk","bibliographic":"","name":"Turkmen"},{"alpha2":"","alpha3":"tum","bibliographic":"","name":"Tumbuka"},{"alpha2":"","alpha3":"tup","bibliographic":"","name":"Tupi languages"},{"alpha2":"tr","alpha3":"tur","bibliographic":"","name":"Turkish"},{"alpha2":"","alpha3":"tut","bibliographic":"","name":"Altaic languages"},{"alpha2":"","alpha3":"tvl","bibliographic":"","name":"Tuvalu"},{"alpha2":"tw","alpha3":"twi","bibliographic":"","name":"Twi"},{"alpha2":"","alpha3":"tyv","bibliographic":"","name":"Tuvinian"},{"alpha2":"","alpha3":"udm","bibliographic":"","name":"Udmurt"},{"alpha2":"","alpha3":"uga","bibliographic":"","name":"Ugaritic"},{"alpha2":"ug","alpha3":"uig","bibliographic":"","name":"Uighur"},{"alpha2":"ug","alpha3":"uig","bibliographic":"","name":"Uyghur"},{"alpha2":"uk","alpha3":"ukr","bibliographic":"","name":"Ukrainian"},{"alpha2":"","alpha3":"umb","bibliographic":"","name":"Umbundu"},{"alpha2":"","alpha3":"und","bibliographic":"","name":"Undetermined"},{"alpha2":"ur","alpha3":"urd","bibliographic":"","name":"Urdu"},{"alpha2":"uz","alpha3":"uzb","bibliographic":"","name":"Uzbek"},{"alpha2":"","alpha3":"vai","bibliographic":"","name":"Vai"},{"alpha2":"ve","alpha3":"ven","bibliographic":"","name":"Venda"},{"alpha2":"vi","alpha3":"vie","bibliographic":"","name":"Vietnamese"},{"alpha2":"vo","alpha3":"vol","bibliographic":"","name":"Volapük"},{"alpha2":"","alpha3":"vot","bibliographic":"","name":"Votic"},{"alpha2":"","alpha3":"wak","bibliographic":"","name":"Wakashan languages"},{"alpha2":"","alpha3":"wal","bibliographic":"","name":"Wolaitta"},{"alpha2":"","alpha3":"wal","bibliographic":"","name":"Wolaytta"},{"alpha2":"","alpha3":"war","bibliographic":"","name":"Waray"},{"alpha2":"","alpha3":"was","bibliographic":"","name":"Washo"},{"alpha2":"","alpha3":"wen","bibliographic":"","name":"Sorbian languages"},{"alpha2":"wa","alpha3":"wln","bibliographic":"","name":"Walloon"},{"alpha2":"wo","alpha3":"wol","bibliographic":"","name":"Wolof"},{"alpha2":"","alpha3":"xal","bibliographic":"","name":"Kalmyk"},{"alpha2":"","alpha3":"xal","bibliographic":"","name":"Oirat"},{"alpha2":"xh","alpha3":"xho","bibliographic":"","name":"Xhosa"},{"alpha2":"","alpha3":"yao","bibliographic":"","name":"Yao"},{"alpha2":"","alpha3":"yap","bibliographic":"","name":"Yapese"},{"alpha2":"yi","alpha3":"yid","bibliographic":"","name":"Yiddish"},{"alpha2":"yo","alpha3":"yor","bibliographic":"","name":"Yoruba"},{"alpha2":"","alpha3":"ypk","bibliographic":"","name":"Yupik languages"},{"alpha2":"","alpha3":"zap","bibliographic":"","name":"Zapotec"},{"alpha2":"","alpha3":"zbl","bibliographic":"","name":"Bliss"},{"alpha2":"","alpha3":"zbl","bibliographic":"","name":"Blissymbolics"},{"alpha2":"","alpha3":"zbl","bibliographic":"","name":"Blissymbols"},{"alpha2":"","alpha3":"zen","bibliographic":"","name":"Zenaga"},{"alpha2":"","alpha3":"zgh","bibliographic":"","name":"Standard Moroccan Tamazight"},{"alpha2":"za","alpha3":"zha","bibliographic":"","name":"Chuang"},{"alpha2":"za","alpha3":"zha","bibliographic":"","name":"Zhuang"},{"alpha2":"zh","alpha3":"zho","bibliographic":"chi","name":"Chinese"},{"alpha2":"","alpha3":"znd","bibliographic":"","name":"Zande languages"},{"alpha2":"zu","alpha3":"zul","bibliographic":"","name":"Zulu"},{"alpha2":"","alpha3":"zun","bibliographic":"","name":"Zuni"},{"alpha2":"","alpha3":"zxx","bibliographic":"","name":"No linguistic content"},{"alpha2":"","alpha3":"zxx","bibliographic":"","name":"Not applicable"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Dimili"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Dimli"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Kirdki"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Kirmanjki"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Zaza"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Zazaki"}]'
    );
  },
  function (e, n, a) {
    var t = a(44);
    function i(e, n) {
      var a = t.pairs(n);
      return e.filter(function (e) {
        return (
          a.filter(function (n) {
            var a = e[n[0]];
            return t.isArray(a) ? a.indexOf(n[1]) >= 0 : a == n[1];
          }).length == a.length
        );
      });
    }
    e.exports = function (e) {
      return { countries: i.bind(null, e.countries), currencies: i.bind(null, e.currencies), languages: i.bind(null, e.languages) };
    };
  },
  function (e, n, a) {
    e.exports = function (e) {
      return t.hasOwnProperty(e) ? t[e] : "?";
    };
    var t = a(157);
  },
  function (e, n) {
    e.exports = {
      ALL: "L",
      AFN: "؋",
      ARS: "$",
      AWG: "ƒ",
      AUD: "$",
      AZN: "₼",
      BSD: "$",
      BBD: "$",
      BYR: "p.",
      BZD: "BZ$",
      BMD: "$",
      BOB: "Bs.",
      BAM: "KM",
      BWP: "P",
      BGN: "лв",
      BRL: "R$",
      BND: "$",
      KHR: "៛",
      CAD: "$",
      KYD: "$",
      CLP: "$",
      CNY: "¥",
      COP: "$",
      CRC: "₡",
      HRK: "kn",
      CUP: "₱",
      CZK: "Kč",
      DKK: "kr",
      DOP: "RD$",
      XCD: "$",
      EGP: "£",
      SVC: "$",
      EEK: "kr",
      EUR: "€",
      FKP: "£",
      FJD: "$",
      GHC: "¢",
      GIP: "£",
      GTQ: "Q",
      GGP: "£",
      GYD: "$",
      HNL: "L",
      HKD: "$",
      HUF: "Ft",
      ISK: "kr",
      INR: "₹",
      IDR: "Rp",
      IRR: "﷼",
      IMP: "£",
      ILS: "₪",
      JMD: "J$",
      JPY: "¥",
      JEP: "£",
      KES: "KSh",
      KZT: "лв",
      KPW: "₩",
      KRW: "₩",
      KGS: "лв",
      LAK: "₭",
      LVL: "Ls",
      LBP: "£",
      LRD: "$",
      LTL: "Lt",
      MKD: "ден",
      MYR: "RM",
      MUR: "₨",
      MXN: "$",
      MNT: "₮",
      MZN: "MT",
      NAD: "$",
      NPR: "₨",
      ANG: "ƒ",
      NZD: "$",
      NIO: "C$",
      NGN: "₦",
      NOK: "kr",
      OMR: "﷼",
      PKR: "₨",
      PAB: "B/.",
      PYG: "Gs",
      PEN: "S/.",
      PHP: "₱",
      PLN: "zł",
      QAR: "﷼",
      RON: "lei",
      RUB: "₽",
      SHP: "£",
      SAR: "﷼",
      RSD: "Дин.",
      SCR: "₨",
      SGD: "$",
      SBD: "$",
      SOS: "S",
      ZAR: "R",
      LKR: "₨",
      SEK: "kr",
      CHF: "CHF",
      SRD: "$",
      SYP: "£",
      TZS: "TSh",
      TWD: "NT$",
      THB: "฿",
      TTD: "TT$",
      TRY: "",
      TRL: "₤",
      TVD: "$",
      UGX: "USh",
      UAH: "₴",
      GBP: "£",
      USD: "$",
      UYU: "$U",
      UZS: "лв",
      VEF: "Bs",
      VND: "₫",
      YER: "﷼",
      ZWD: "Z$"
    };
  },
  function (e, n, a) {
    var t = a(2),
      i = a(159);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#ConnectionButton {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  align-items: center;\n  justify-content: center;\n  transition: right 0.5s ease-in-out, top ease-in-out 0.5s, width ease-in-out 0.5s, height ease-in-out 0.5s;\n  display: flex;\n  top: 200px;\n  right: 127px;\n  cursor: pointer;\n}\n#ConnectionButton .staticOuterCircle,\n#ConnectionButton .staticInnerCircle,\n#ConnectionButton .staticBackground {\n  position: absolute;\n  transition: left 0.5s ease-in-out, top ease-in-out 0.5s, width ease-in-out 0.5s, height ease-in-out 0.5s;\n}\n#ConnectionButton .staticOuterCircle {\n  width: 118px;\n  height: 118px;\n  border: 1px solid;\n  border-radius: 200px;\n  left: 0;\n  top: 0;\n}\n#ConnectionButton .staticInnerCircle {\n  width: 110px;\n  height: 110px;\n  border: 1px solid;\n  border-radius: 105px;\n  left: 4px;\n  top: 4px;\n}\n#ConnectionButton .staticBackground {\n  opacity: 0.1;\n  width: 110px;\n  height: 110px;\n  left: 5px;\n  top: 5px;\n  border-radius: 110px;\n}\n#ConnectionButton.connected,\n#ConnectionButton.postConnection {\n  width: 70px;\n  height: 70px;\n  right: 20px;\n  top: 10px;\n}\n#ConnectionButton.connected .staticOuterCircle,\n#ConnectionButton.postConnection .staticOuterCircle {\n  width: 68px;\n  height: 68px;\n  animation: pulsing 0.7s linear 0s infinite alternate;\n}\n#ConnectionButton.connected .staticInnerCircle,\n#ConnectionButton.postConnection .staticInnerCircle {\n  width: 62px;\n  height: 62px;\n  left: 3px;\n  top: 3px;\n}\n#ConnectionButton.connected .staticBackground,\n#ConnectionButton.postConnection .staticBackground {\n  width: 64px;\n  height: 64px;\n  left: 4px;\n  top: 4px;\n}\n#ConnectionButton.connected .staticOuterCircle,\n#ConnectionButton.postConnection .staticOuterCircle,\n#ConnectionButton.connected .staticInnerCircle,\n#ConnectionButton.postConnection .staticInnerCircle {\n  border-color: #40c584;\n}\n#ConnectionButton.connected .staticBackground,\n#ConnectionButton.postConnection .staticBackground {\n  background: #40c584;\n}\n#ConnectionButton.disconnected .staticOuterCircle {\n  animation: pulsing 0.7s linear 0s infinite alternate;\n}\n#ConnectionButton.disconnected .staticOuterCircle,\n#ConnectionButton.disconnected .staticInnerCircle {\n  border-color: #ff4600;\n}\n#ConnectionButton.disconnected .staticBackground {\n  background: #ff4600;\n}\n#ConnectionButton .title {\n  font-size: 14px;\n}\n#ConnectionButton.connecting .staticOuterCircle,\n#ConnectionButton.disconnecting .staticOuterCircle,\n#ConnectionButton.connecting .staticInnerCircle,\n#ConnectionButton.disconnecting .staticInnerCircle,\n#ConnectionButton.connecting .staticBackground,\n#ConnectionButton.disconnecting .staticBackground {\n  opacity: 0;\n}\n#ConnectionButton.connecting .outer-layer,\n#ConnectionButton.disconnecting .outer-layer,\n#ConnectionButton.connecting .inner-layer,\n#ConnectionButton.disconnecting .inner-layer,\n#ConnectionButton.connecting .background-layer,\n#ConnectionButton.disconnecting .background-layer {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n}\n#ConnectionButton.connecting .outer-circle,\n#ConnectionButton.disconnecting .outer-circle {\n  opacity: 0.5;\n  stroke-dasharray: 0, 1000;\n  animation: dash_outer 2.7s ease-in-out alternate infinite;\n}\n#ConnectionButton.connecting .inner-circle,\n#ConnectionButton.disconnecting .inner-circle {\n  stroke-dasharray: 0, 1000;\n  animation: dash_inner 2s ease-in-out alternate infinite;\n}\n#ConnectionButton.connecting .outer-layer,\n#ConnectionButton.disconnecting .outer-layer {\n  animation: rotation 1.3s infinite linear;\n}\n#ConnectionButton.connecting .inner-layer,\n#ConnectionButton.disconnecting .inner-layer {\n  animation: rotation 1s infinite linear;\n}\n#ConnectionButton.connecting .outer-circle,\n#ConnectionButton.disconnecting .outer-circle,\n#ConnectionButton.connecting .inner-circle,\n#ConnectionButton.disconnecting .inner-circle {\n  stroke: #007aff;\n}\n#ConnectionButton.connecting .background-circle,\n#ConnectionButton.disconnecting .background-circle {\n  opacity: 0.1;\n  fill: #007aff;\n}\n@keyframes pulsing {\n  from {\n    opacity: 0.9;\n    transform: scale(1, 1);\n  }\n  to {\n    transform: scale(1.03, 1.03);\n    opacity: 0.5;\n  }\n}\n@keyframes dash_outer {\n  from {\n    stroke-dasharray: 0, 1000;\n  }\n  to {\n    stroke-dasharray: 377, 1000;\n  }\n}\n@keyframes dash_inner {\n  from {\n    stroke-dasharray: 0, 1000;\n  }\n  to {\n    stroke-dasharray: 345, 1000;\n  }\n}\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(161);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#Menu.Menu .bg {\n  display: block;\n}\n#Menu.Menu .menu {\n  left: 0;\n}\n#Menu .menu {\n  position: fixed;\n  z-index: 999;\n  width: 250px;\n  left: -250px;\n  top: 0;\n  background: #23282e;\n  height: 100%;\n  transition: left 0.2s linear;\n}\n#Menu .menu .account {\n  background-image: url('/static/assets/menu/account.png');\n  background-size: 250px auto;\n  height: 130px;\n  background-repeat: no-repeat;\n  position: relative;\n  overflow: hidden;\n}\n#Menu .menu .account .title {\n  font-size: 14px;\n  font-weight: 200;\n  position: absolute;\n  bottom: 10px;\n  align-items: center;\n  display: flex;\n  padding-left: 10px;\n}\n#Menu .menu .account .title img {\n  margin-right: 10px;\n}\n#Menu .menu .content .row {\n  padding: 10px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n}\n#Menu .menu .content .row .icon {\n  width: 24px;\n  height: 24px;\n  background-size: 24px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  margin-right: 10px;\n}\n#Menu .menu .content .row .icon.doc {\n  background-image: url('/static/assets/menu/doc_0.png');\n}\n#Menu .menu .content .row .icon.rate {\n  background-image: url('/static/assets/menu/rate_0.png');\n}\n#Menu .menu .content .row .icon.touch {\n  background-image: url('/static/assets/menu/touch_0.png');\n}\n#Menu .menu .content .row .icon.settings {\n  background-image: url('/static/assets/menu/settings_0.png');\n}\n#Menu .menu .content .row .icon.auto {\n  background-image: url('/static/assets/menu/auto_0.png');\n}\n#Menu .menu .content .row .icon.terms {\n  background-image: url('/static/assets/menu/terms_0.png');\n}\n#Menu .menu .content .row .icon.exclude {\n  background-image: url('/static/assets/menu/exclude_0.png');\n}\n#Menu .menu .content .row .icon.profile {\n  background-image: url('/static/assets/menu/profile_1.png');\n}\n#Menu .menu .content .row .icon.debug {\n  background-image: url('/static/assets/menu/debug.png');\n}\n#Menu .menu .content .row:hover {\n  background: #282f37;\n}\n#Menu .menu .content .row:hover .icon.doc {\n  background-image: url('/static/assets/menu/doc_1.png');\n}\n#Menu .menu .content .row:hover .icon.rate {\n  background-image: url('/static/assets/menu/rate_1.png');\n}\n#Menu .menu .content .row:hover .icon.touch {\n  background-image: url('/static/assets/menu/touch_1.png');\n}\n#Menu .menu .content .row:hover .icon.settings {\n  background-image: url('/static/assets/menu/settings_1.png');\n}\n#Menu .menu .content .row:hover .icon.auto {\n  background-image: url('/static/assets/menu/auto_1.png');\n}\n#Menu .menu .content .row:hover .icon.terms {\n  background-image: url('/static/assets/menu/terms_1.png');\n}\n#Menu .menu .content .row:hover .icon.exclude {\n  background-image: url('/static/assets/menu/exclude_1.png');\n}\n#Menu .menu .content .row:hover .icon.profile {\n  background-image: url('/static/assets/menu/profile.png');\n}\n#Menu .menu .version {\n  bottom: 10px;\n  right: 10px;\n  color: #65686d;\n  position: absolute;\n  font-size: 10px;\n}\n#Menu .bg {\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.5;\n  left: 0;\n  top: 0;\n  display: none;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(163);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#Share {\n  display: none;\n}\n#Share.Share {\n  display: block;\n}\n#Share .container {\n  background: #23282e;\n  padding: 10px;\n  border-radius: 6px;\n  position: fixed;\n  left: 50px;\n  top: 150px;\n  z-index: 1000;\n  width: 255px;\n}\n#Share .container .close {\n  color: #65686d;\n  position: absolute;\n  font-size: 24px;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n  border-radius: 20px;\n  transform: rotate(45deg);\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  height: 20px;\n}\n#Share .container .title {\n  text-align: center;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n#Share .container .elements {\n  display: flex;\n}\n#Share .container .elements .element {\n  width: 33.3%;\n  font-size: 14px;\n  text-align: center;\n}\n#Share .container .elements .element img {\n  cursor: pointer;\n}\n#Share .bg {\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.5;\n  left: 0;\n  top: 0;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(165);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#Header {\n  height: 40px;\n  position: fixed;\n  background: #23282e;\n  text-align: center;\n  color: #bdc2c6;\n  font-weight: 300;\n  font-size: 18px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n}\n#Header .timer {\n  font-size: 12px;\n  color: #ffffff;\n}\n#Header .timer div {\n  font-size: 14px;\n}\n#Header .menu {\n  width: 40px;\n  height: 26px;\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding-top: 14px;\n}\n#Header .menu .line {\n  width: 20px;\n  height: 2px;\n  background: #bdc2c6;\n  margin-left: 10px;\n  margin-bottom: 4px;\n}\n#Header .menu:hover .line {\n  background: #ffffff;\n}\n#Header .share {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-image: url('/static/assets/menu/share.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(167);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([e.i, "", ""]), (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(169);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#RateUs .stars {\n  display: flex;\n  direction: rtl;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5px;\n}\n#RateUs .stars .star {\n  display: inline-block;\n  height: 23px;\n  width: 24px;\n  background-size: 24px 23px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-image: url('/static/assets/promo/star.png');\n  padding: 0 3px;\n  cursor: pointer;\n}\n#RateUs .stars .star:hover,\n#RateUs .stars .star:hover ~ .star {\n  background-image: url('/static/assets/promo/star_filled.png');\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(171);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#SignIn {\n  width: 100%;\n  height: 556px;\n  z-index: 1000;\n  position: fixed;\n  left: 0;\n  top: 600px;\n  transition: top 0.2s linear;\n  background-color: #23282e;\n  background-image: url('/static/assets/map.png');\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center center;\n}\n#SignIn.signIn {\n  top: 40px;\n}\n#SignIn .head {\n  text-align: right;\n  padding: 5px;\n}\n#SignIn .head span {\n  cursor: pointer;\n  margin-right: 10px;\n  font-size: 14px;\n}\n#SignIn .inputContainer {\n  padding: 10px;\n  height: 510px;\n}\n#SignIn .inputContainer .title {\n  font-size: 18px;\n  text-align: center;\n  margin-top: 100px;\n}\n#SignIn .inputContainer .message {\n  height: 40px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ff4600;\n}\n#SignIn .inputContainer .input {\n  margin-bottom: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n#SignIn .inputContainer .input input {\n  width: 285px;\n}\n#SignIn .inputContainer .button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#SignIn .inputContainer .button div {\n  background-color: #ff4600;\n  border-radius: 4px;\n  padding: 8px 25px;\n  text-align: center;\n  cursor: pointer;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(173);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#Locations {\n  display: none;\n}\n#Locations.Locations {\n  display: block;\n}\n#Locations .bg {\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.5;\n  left: 0;\n  top: 0;\n}\n#Locations .list {\n  position: fixed;\n  left: 75px;\n  right: 75px;\n  top: 75px;\n  z-index: 1000;\n  background: #23282e;\n  border-radius: 6px;\n  overflow: hidden;\n}\n#Locations .list .row {\n  padding: 5px 10px;\n  display: flex;\n  font-size: 16px;\n  align-items: center;\n  cursor: pointer;\n}\n#Locations .list .row.center {\n  justify-content: center;\n  background-color: #282f37;\n  color: #bdc2c6;\n  cursor: default;\n  position: relative;\n}\n#Locations .list .row.center .close {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  font-size: 24px;\n  cursor: pointer;\n  top: 2px;\n  color: #65686d;\n}\n#Locations .list .row:hover {\n  background: #282f37;\n}\n#Locations .list .row .flag {\n  width: 20px;\n  height: 20px;\n  background-size: 20px auto;\n  background-position: center center;\n  background-repeat: no-repeat;\n  margin-right: 10px;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(175);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([e.i, "#AdBlocker {\n  margin-top: 0 !important;\n}\n", ""]), (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(177);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#TryUsOnOther .list {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#TryUsOnOther .list .element {\n  text-align: center;\n  width: 25%;\n  color: #bdc2c6;\n  font-size: 12px;\n}\n#TryUsOnOther .list .element img {\n  cursor: pointer;\n  height: 50px;\n  padding-bottom: 5px;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(179);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([e.i, "", ""]), (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(181);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([e.i, "", ""]), (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(183);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([e.i, "", ""]), (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(185);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([e.i, "", ""]), (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(187);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#BypassWebsites .domain {\n  font-size: 14px;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n#BypassWebsites .domain .favicon {\n  width: 20px;\n  height: 20px;\n  background-size: 20px auto;\n  background-position: center center;\n  margin-right: 10px;\n  border-radius: 3px;\n}\n#BypassWebsites .domain span {\n  cursor: pointer;\n}\n#BypassWebsites .domain .remove {\n  color: #65686d;\n  position: absolute;\n  font-size: 24px;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  border-radius: 20px;\n  transform: rotate(45deg);\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  height: 20px;\n  display: none;\n}\n#BypassWebsites .domain:hover .remove {\n  display: block;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(189);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#SecuredWebsites .domain {\n  font-size: 14px;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n#SecuredWebsites .domain .favicon {\n  width: 20px;\n  height: 20px;\n  background-size: 20px auto;\n  background-position: center center;\n  margin-right: 10px;\n  border-radius: 3px;\n}\n#SecuredWebsites .domain span {\n  cursor: pointer;\n}\n#SecuredWebsites .domain .remove {\n  color: #65686d;\n  position: absolute;\n  font-size: 24px;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  border-radius: 20px;\n  transform: rotate(45deg);\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  height: 20px;\n  display: none;\n}\n#SecuredWebsites .domain:hover .remove {\n  display: block;\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(191);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#BypassWebsitesSettings {\n  width: 100%;\n  height: 556px;\n  z-index: 1000;\n  position: fixed;\n  left: 0;\n  top: 600px;\n  transition: top 0.2s linear;\n  background: #23282e;\n}\n#BypassWebsitesSettings.BypassWebsitesSettings {\n  top: 40px;\n}\n#BypassWebsitesSettings .head {\n  text-align: right;\n  padding: 5px;\n}\n#BypassWebsitesSettings .head span {\n  cursor: pointer;\n  margin-right: 10px;\n  font-size: 14px;\n}\n#BypassWebsitesSettings .inputContainer {\n  padding: 10px;\n  background: #282f37;\n}\n#BypassWebsitesSettings .inputContainer .input input {\n  width: 310px;\n}\n#BypassWebsitesSettings .inputContainer .input .add {\n  color: #40c584;\n  font-size: 14px;\n  position: absolute;\n  right: 7px;\n  top: 7px;\n  cursor: pointer;\n  display: none;\n}\n#BypassWebsitesSettings .inputContainer .input.notEmpty .add {\n  display: block;\n}\n#BypassWebsitesSettings .sites {\n  overflow: auto;\n  height: 450px;\n  padding: 10px 0;\n}\n#BypassWebsitesSettings .sites .title {\n  font-size: 14px;\n  margin-bottom: 5px;\n  padding: 0 10px;\n}\n#BypassWebsitesSettings .sites .description {\n  font-size: 14px;\n  padding: 0 10px;\n  margin-bottom: 5px;\n  color: #bdc2c6;\n}\n#BypassWebsitesSettings .sites .row {\n  padding: 5px 10px;\n  display: flex;\n  font-size: 16px;\n  align-items: center;\n  margin-bottom: 10px;\n  position: relative;\n}\n#BypassWebsitesSettings .sites .row span {\n  cursor: pointer;\n}\n#BypassWebsitesSettings .sites .row .favicon {\n  width: 20px;\n  height: 20px;\n  background-position: center center;\n  background-size: 20px auto;\n  margin-right: 5px;\n}\n#BypassWebsitesSettings .sites .row .remove {\n  color: #65686d;\n  position: absolute;\n  font-size: 24px;\n  right: 10px;\n  top: 5px;\n  cursor: pointer;\n  border-radius: 20px;\n  transform: rotate(45deg);\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  height: 20px;\n  display: none;\n}\n#BypassWebsitesSettings .sites .row:hover {\n  background: #282f37;\n}\n#BypassWebsitesSettings .sites .row:hover .remove {\n  display: block;\n}\n#BypassWebsitesSettings .sites::-webkit-scrollbar {\n  width: 6px;\n}\n#BypassWebsitesSettings .sites::-webkit-scrollbar-track {\n  background: #23282e;\n  border-radius: 9px;\n}\n#BypassWebsitesSettings .sites::-webkit-scrollbar-thumb {\n  background: #23282e;\n  border-radius: 9px;\n}\n#BypassWebsitesSettings .sites:hover::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.29);\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  function (e, n, a) {
    var t = a(2),
      i = a(193);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    t(i, r);
    e.exports = i.locals || {};
  },
  function (e, n, a) {
    (n = a(3)(!1)).push([
      e.i,
      "#SecuredWebsitesSettings {\n  width: 100%;\n  height: 556px;\n  z-index: 1000;\n  position: fixed;\n  left: 0;\n  top: 600px;\n  transition: top 0.2s linear;\n  background: #23282e;\n}\n#SecuredWebsitesSettings.SecuredWebsitesSettings {\n  top: 40px;\n}\n#SecuredWebsitesSettings .head {\n  text-align: right;\n  padding: 5px;\n}\n#SecuredWebsitesSettings .head span {\n  cursor: pointer;\n  margin-right: 10px;\n  font-size: 14px;\n}\n#SecuredWebsitesSettings .inputContainer {\n  padding: 10px;\n  background: #282f37;\n}\n#SecuredWebsitesSettings .inputContainer .input input {\n  width: 310px;\n}\n#SecuredWebsitesSettings .inputContainer .input .add {\n  color: #40c584;\n  font-size: 14px;\n  position: absolute;\n  right: 7px;\n  top: 7px;\n  cursor: pointer;\n  display: none;\n}\n#SecuredWebsitesSettings .inputContainer .input.notEmpty .add {\n  display: block;\n}\n#SecuredWebsitesSettings .sites {\n  overflow: auto;\n  height: 450px;\n  padding: 10px 0;\n}\n#SecuredWebsitesSettings .sites .title {\n  font-size: 14px;\n  margin-bottom: 5px;\n  padding: 0 10px;\n}\n#SecuredWebsitesSettings .sites .description {\n  font-size: 14px;\n  padding: 0 10px;\n  margin-bottom: 5px;\n  color: #bdc2c6;\n}\n#SecuredWebsitesSettings .sites .row {\n  padding: 5px 10px;\n  display: flex;\n  font-size: 16px;\n  align-items: center;\n  margin-bottom: 10px;\n  position: relative;\n}\n#SecuredWebsitesSettings .sites .row span {\n  cursor: pointer;\n}\n#SecuredWebsitesSettings .sites .row .favicon {\n  width: 20px;\n  height: 20px;\n  background-position: center center;\n  background-size: 20px auto;\n  margin-right: 5px;\n}\n#SecuredWebsitesSettings .sites .row .remove {\n  color: #65686d;\n  position: absolute;\n  font-size: 24px;\n  right: 10px;\n  top: 5px;\n  cursor: pointer;\n  border-radius: 20px;\n  transform: rotate(45deg);\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  height: 20px;\n  display: none;\n}\n#SecuredWebsitesSettings .sites .row:hover {\n  background: #282f37;\n}\n#SecuredWebsitesSettings .sites .row:hover .remove {\n  display: block;\n}\n#SecuredWebsitesSettings .sites::-webkit-scrollbar {\n  width: 6px;\n}\n#SecuredWebsitesSettings .sites::-webkit-scrollbar-track {\n  background: #23282e;\n  border-radius: 9px;\n}\n#SecuredWebsitesSettings .sites::-webkit-scrollbar-thumb {\n  background: #23282e;\n  border-radius: 9px;\n}\n#SecuredWebsitesSettings .sites:hover::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.29);\n}\n",
      ""
    ]),
      (e.exports = n);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, n, a) {
    "use strict";
    a.r(n);
    a(10), a(139);
    var t = a(8),
      i = a(7),
      r = a(11),
      o = a.n(r),
      l = a(1),
      s = (a(141), a(5)),
      c = a(64),
      u = a.n(c),
      d = a(4),
      p = (a(143), a(145), a(28)),
      h = a.n(p),
      g = a(0);
    function f({ children: e, red: n = !1, short: a, onClick: t, className: i, transparent: r, borderless: o = !1 }) {
      return Object(g.jsx)("button", {
        className: h()("button", { "button--red": n, "button--transparent": r, "button--short": a, "button--borderless": o }, i),
        onClick: t,
        children: e
      });
    }
    function m({ onClose: e, onReviewSettings: n }) {
      const a = Object(l.useCallback)(() => {
          sdk.storage.set(d.a, !0), null == e || e();
        }, []),
        t = Object(l.useCallback)(() => {
          sdk.storage.set(d.a, !0), null == n || n();
        }, []);
      return Object(g.jsxs)("div", {
        className: "data-consent",
        children: [
          Object(g.jsxs)("section", {
            className: "data-consent__content",
            children: [
              Object(g.jsx)("div", {
                children: Object(g.jsxs)("svg", {
                  width: "24",
                  height: "41",
                  viewBox: "0 0 24 41",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    Object(g.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M23.5965 26.9887V26.9999L23.5639 27.229L22.7005 33.1817C22.3613 35.2859 21.2633 37.2053 19.6017 38.5984C18.2385 39.7411 16.5557 40.4649 14.7671 40.6779C12.9785 40.8908 11.1651 40.5833 9.55723 39.7944C8.22908 39.1497 7.08525 38.1975 6.2269 37.0222C5.95118 36.6527 5.70605 36.2626 5.49381 35.8556L3.79956 32.6062L1.84814 29.0545C1.58934 28.585 1.53204 28.0355 1.6887 27.5253C1.84536 27.0152 2.20331 26.5855 2.68479 26.3298C2.92255 26.2051 3.18345 26.1274 3.45239 26.1011C3.72133 26.0748 3.99297 26.1005 4.25161 26.1767C4.51024 26.2529 4.75073 26.378 4.95916 26.5449C5.16758 26.7117 5.33981 26.917 5.46588 27.1489L7.4813 30.8157V15.2006C7.4813 14.0882 8.39941 13.189 9.53628 13.189C10.6697 13.189 11.5889 14.0882 11.5889 15.2018V22.6043C11.7192 22.1994 11.9789 21.8453 12.3306 21.5931C12.6823 21.341 13.1076 21.2039 13.545 21.2018C14.6819 21.2018 15.6 22.1067 15.6 23.2146V24.3147C15.6699 23.8413 15.9135 23.4081 16.286 23.0946C16.6584 22.7811 17.135 22.6082 17.6282 22.6076C18.7651 22.6076 19.6832 23.5069 19.6832 24.6205V25.9823C19.8974 25.5215 20.2847 25.1573 20.7661 24.9638C21.2476 24.7704 21.7871 24.7621 22.2746 24.9409C22.6908 25.0953 23.0444 25.376 23.2826 25.7412C23.5209 26.1064 23.6309 26.5364 23.5965 26.9672H23.6L23.5965 26.9887Z",
                      fill: "#3C3C3C"
                    }),
                    Object(g.jsx)("path", {
                      d: "M8.11095 11.1231C8.06267 11.1701 8.00531 11.2074 7.94216 11.2328C7.87901 11.2583 7.8113 11.2715 7.7429 11.2716C7.67451 11.2717 7.60676 11.2587 7.54352 11.2334C7.48029 11.2082 7.42281 11.1711 7.37437 11.1242C7.32593 11.0774 7.28747 11.0218 7.2612 10.9606C7.23493 10.8993 7.22135 10.8337 7.22124 10.7674C7.22113 10.7011 7.2345 10.6354 7.26057 10.5741C7.28665 10.5127 7.32492 10.457 7.37321 10.41C7.62479 10.1636 7.92427 9.96793 8.25433 9.8344C8.58439 9.70087 8.93848 9.63212 9.29612 9.63212C9.65376 9.63212 10.0078 9.70087 10.3379 9.8344C10.668 9.96793 10.9674 10.1636 11.219 10.41C11.3058 10.507 11.3514 10.6323 11.3465 10.7606C11.3417 10.8889 11.2868 11.0106 11.193 11.1011C11.0991 11.1917 10.9734 11.2443 10.841 11.2484C10.7087 11.2525 10.5797 11.2077 10.4801 11.1231C10.3252 10.9711 10.1408 10.8504 9.93744 10.768C9.7341 10.6857 9.51591 10.6433 9.29554 10.6433C9.07516 10.6433 8.85698 10.6857 8.65363 10.768C8.45029 10.8504 8.26583 10.9711 8.11095 11.1231ZM5.84186 8.92752C5.74434 9.02238 5.61195 9.07579 5.47381 9.076C5.33568 9.07621 5.20311 9.02321 5.10528 8.92865C5.00745 8.83409 4.95237 8.70573 4.95215 8.57179C4.95193 8.43785 5.0066 8.30932 5.10412 8.21446C5.65294 7.67678 6.30627 7.24994 7.02631 6.95863C7.74635 6.66732 8.51882 6.51733 9.29903 6.51733C10.0792 6.51733 10.8517 6.66732 11.5717 6.95863C12.2918 7.24994 12.9451 7.67678 13.4939 8.21446C13.5775 8.31174 13.6205 8.43584 13.6144 8.56231C13.6083 8.68879 13.5536 8.80847 13.4611 8.89778C13.3685 8.9871 13.2448 9.03957 13.1144 9.04487C12.9839 9.05016 12.8561 9.0079 12.7562 8.92639C12.304 8.483 11.7657 8.13098 11.1722 7.89073C10.5788 7.65048 9.94211 7.52678 9.29903 7.52678C8.65594 7.52678 8.01925 7.65048 7.42582 7.89073C6.83238 8.13098 6.294 8.483 5.84186 8.92639V8.92752Z",
                      fill: "#FF533F"
                    }),
                    Object(g.jsx)("path", {
                      d: "M3.57282 6.73082C3.4753 6.82568 3.34291 6.87909 3.20477 6.8793C3.06664 6.87951 2.93407 6.82651 2.83624 6.73195C2.73841 6.63739 2.68332 6.50903 2.68311 6.37509C2.68289 6.24115 2.73755 6.11262 2.83508 6.01776C3.68108 5.18855 4.6883 4.53026 5.79845 4.08099C6.90859 3.63172 8.09961 3.40039 9.30257 3.40039C10.5055 3.40039 11.6965 3.63172 12.8067 4.08099C13.9168 4.53026 14.9241 5.18855 15.7701 6.01776C15.8568 6.11472 15.9024 6.24 15.8976 6.36828C15.8927 6.49657 15.8379 6.61829 15.744 6.70885C15.6502 6.79941 15.5244 6.85204 15.3921 6.85612C15.2597 6.8602 15.1307 6.81542 15.0312 6.73082C14.2818 5.99607 13.3896 5.41275 12.4062 5.01464C11.4228 4.61652 10.3677 4.41153 9.30199 4.41153C8.23629 4.41153 7.18118 4.61652 6.19775 5.01464C5.21433 5.41275 4.32213 5.99607 3.57282 6.73082Z",
                      fill: "#FF533F"
                    }),
                    Object(g.jsx)("path", {
                      d: "M1.30378 4.46983C1.25549 4.5168 1.19813 4.55409 1.13498 4.57956C1.07183 4.60504 1.00412 4.6182 0.935727 4.61831C0.867329 4.61841 0.79958 4.60545 0.736347 4.58017C0.673115 4.55489 0.615637 4.51778 0.567196 4.47096C0.518755 4.42414 0.480299 4.36853 0.454025 4.3073C0.42775 4.24607 0.414171 4.18042 0.414063 4.1141C0.413955 4.04778 0.42732 3.98209 0.453395 3.92078C0.47947 3.85947 0.517743 3.80374 0.566032 3.75677C1.7092 2.63621 3.07024 1.74661 4.57038 1.13948C6.07051 0.532341 7.67994 0.219727 9.30552 0.219727C10.9311 0.219727 12.5405 0.532341 14.0407 1.13948C15.5408 1.74661 16.9018 2.63621 18.045 3.75677C18.1302 3.85384 18.1744 3.97847 18.169 4.10579C18.1636 4.23312 18.109 4.35379 18.0159 4.44376C17.9228 4.53373 17.7982 4.58637 17.6668 4.59121C17.5355 4.59604 17.4071 4.5527 17.3073 4.46983C16.2608 3.44355 15.0147 2.62878 13.6412 2.0727C12.2676 1.51663 10.794 1.2303 9.30552 1.2303C7.81707 1.2303 6.34341 1.51663 4.96988 2.0727C3.59636 2.62878 2.35027 3.44355 1.30378 4.46983Z",
                      fill: "#FF533F"
                    })
                  ]
                })
              }),
              Object(g.jsx)("h1", { children: "We’re commited to your privacy" }),
              Object(g.jsx)("p", {
                children: "Touch VPN collects the following user data in order to deliver the best VPN service possible:"
              }),
              Object(g.jsx)("p", {
                children:
                  "Usage information. We collect information about how you interact with our services, such as how often you use our services, how much bandwidth you use, and when and for how long you use our services."
              }),
              Object(g.jsx)("p", {
                children:
                  "Device information. We collect information from and about the device you use to access our services, including about the browsers and Aura apps you use to access our services. For example, we may collect device identifiers, browser types, device types and settings, operating system versions, mobile, wireless, and other network information (such as internet service provider name, carrier name and signal strength), and application version numbers."
              }),
              Object(g.jsx)("p", {
                children:
                  "Diagnostic information. We may collect information about the nature of the requests that you make to our servers (such as what is being requested, information about the device and app used to make the request, timestamps, and referring URLs). However, our VPN products do not log any information that associates your identity with your VPN browsing activity. We do not maintain any records that show what you were browsing or accessing through a VPN connection. See the VPN Products Privacy Notice for more information."
              }),
              Object(g.jsx)("p", {
                children:
                  "Location information. Unless otherwise expressly stated, we do not collect your location information based on your device’s GPS or other device sensor data. However, we may collect your approximate location by calculating an imprecise latitude and longitude based on your IP address to provide you with better service (e.g. to connect you to the nearest and fastest VPN server)."
              }),
              Object(g.jsx)("p", {
                children:
                  "Account information. Some services require or allow you to create an account before you can access them. As part of registering for an account, we may collect information such as your name, username, email address, password and certain other information from you."
              }),
              Object(g.jsx)("p", {
                children:
                  "Billing and payment information. In order to purchase a service, you may need to provide us with certain details such as billing name, billing contact details (street addresses, email addresses), and payment instrument details."
              }),
              Object(g.jsx)("p", {
                children:
                  "Identity verification information. Some services require you to verify your identity as part of creating an account to access them. We may collect information such as email addresses or phone numbers for this purpose."
              }),
              Object(g.jsx)("p", {
                children:
                  "Communications and submissions. You may choose to provide us with information when you communicate with us (e.g. via email, phone, or chat for support or to inquire about our services), including when you fill out an online form, respond to surveys, provide feedback, post comments to our website, participate in promotions, or submit information through our services."
              }),
              Object(g.jsx)("p", { children: " For more information, please read our Privacy Policy. You can always come back...." })
            ]
          }),
          Object(g.jsxs)("section", {
            className: "data-consent__button-group",
            children: [
              Object(g.jsx)(f, { className: "data-consent__accept-button", onClick: a, red: !0, children: "Got it" }),
              Object(g.jsx)(f, {
                className: "data-consent__settings-button",
                onClick: t,
                transparent: !0,
                borderless: !0,
                children: "Review settings"
              })
            ]
          })
        ]
      });
    }
    a(147);
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ Object.create;
    function b() {
      for (var e = 0, n = 0, a = arguments.length; n < a; n++) e += arguments[n].length;
      var t = Array(e),
        i = 0;
      for (n = 0; n < a; n++) for (var r = arguments[n], o = 0, l = r.length; o < l; o++, i++) t[i] = r[o];
      return t;
    }
    Object.create;
    var y = function (e) {
      Object(l.useEffect)(e, []);
    };
    var v = function (e, n) {
        var a,
          t = (a = Object(l.useRef)(!0)).current ? ((a.current = !1), !0) : a.current;
        Object(l.useEffect)(function () {
          if (!t) return e();
        }, n);
      },
      C = function (e) {
        for (var n = [], a = 1; a < arguments.length; a++) n[a - 1] = arguments[a];
        y(function () {
          return (
            console.log.apply(console, b([e + " mounted"], n)),
            function () {
              return console.log(e + " unmounted");
            }
          );
        }),
          v(function () {
            console.log.apply(console, b([e + " updated"], n));
          });
      };
    var k = function () {
        const [e, n] = Object(l.useState)(null),
          [a, t] = Object(l.useState)(!1),
          [i, r] = Object(l.useState)(!1);
        Object(l.useEffect)(() => {
          const e = !!sdk.storage.get(d.a);
          t(e), n(e);
        }, []);
        const o = Object(l.useCallback)((e) => {
          sdk.storage.set(d.a, e).then(() => t(e));
        }, []);
        return (
          Object(l.useEffect)(() => {
            if (a && e !== a) {
              const e = setTimeout(() => {
                r(!0);
              }, 500);
              return () => clearTimeout(e);
            }
          }, [a, e]),
          C("DataConsentBanner accepted, baseValue", a, e),
          i || !0 === e
            ? null
            : Object(g.jsxs)("div", {
                className: "data-consent-banner",
                children: [
                  Object(g.jsx)("h2", { className: "data-consent-banner__title", children: "Provide access to app usage data" }),
                  Object(g.jsx)("p", {
                    className: "data-consent-banner__text",
                    children:
                      "Help Touch VPN to become better by sharing your in app usage. This data is fully anonymized and GDPR compliant. We don't sell your personal data to other providers."
                  }),
                  Object(g.jsxs)("svg", {
                    className: "data-consent-banner__close",
                    onClick: () => r(!0),
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      Object(g.jsx)("path", {
                        d: "M3.11671 13.8835L13.737 3.26322",
                        stroke: "#8C8E97",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                      }),
                      Object(g.jsx)("path", {
                        d: "M13.8834 13.8835L3.26314 3.26322",
                        stroke: "#8C8E97",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                      })
                    ]
                  }),
                  Object(g.jsx)(f, { className: "data-consent-banner__accept", onClick: () => o(!0), red: !0, children: "Allow" })
                ]
              })
        );
      },
      w = (a(149), a(24)),
      x = a.n(w);
    a(158);
    var S = function ({ status: e, click: n }) {
      return Object(g.jsxs)("div", {
        id: "ConnectionButton",
        className: e,
        onClick: () => n(),
        children: [
          -1 !== ["connecting", "disconnecting"].indexOf(e) &&
            Object(g.jsx)("svg", {
              className: "outer-layer",
              children: Object(g.jsx)("path", {
                className: "outer-circle",
                fill: "none",
                strokeOpacity: ".5",
                strokeWidth: "1",
                strokeMiterlimit: "10",
                d: "M1,60a59,59 0 1,0 118,0a59,59 0 1,0 -118,0"
              })
            }),
          -1 !== ["connecting", "disconnecting"].indexOf(e) &&
            Object(g.jsx)("svg", {
              className: "inner-layer",
              children: Object(g.jsx)("path", {
                className: "inner-circle",
                fill: "none",
                strokeOpacity: "1",
                strokeWidth: "1",
                strokeMiterlimit: "10",
                d: "M5,60a55,55 0 1,0 110,0a55,55 0 1,0 -110,0"
              })
            }),
          -1 !== ["connecting", "disconnecting"].indexOf(e) &&
            Object(g.jsx)("svg", {
              className: "background-layer",
              children: Object(g.jsx)("circle", { className: "background-circle", cx: "60", cy: "60", r: "55", strokeOpacity: ".2" })
            }),
          Object(g.jsx)("div", { className: "staticOuterCircle" }),
          Object(g.jsx)("div", { className: "staticInnerCircle" }),
          Object(g.jsx)("div", { className: "staticBackground" }),
          Object(g.jsx)("span", {
            className: "title",
            children: {
              connected: "Stop",
              connecting: "Connecting",
              disconnected: "Connect",
              disconnecting: "Disconnecting",
              postConnection: "Stop"
            }[e]
          })
        ]
      });
    };
    class j extends l.Component {
      constructor(e) {
        var n;
        super(e),
          (this.state = {
            speed: (null === (n = sdk.speed.get()) || void 0 === n ? void 0 : n.toFixed(2)) || "0.00",
            bandwidth: sdk.bandwidthCounter().day.bandwidth,
            unblocked: sdk.sitesCounter()
          }),
          (this.interval = setInterval(() => {
            var e;
            "connected" === this.props.status &&
              this.setState({
                speed: (null === (e = sdk.speed.get()) || void 0 === e ? void 0 : e.toFixed(2)) || "0.00",
                bandwidth: sdk.bandwidthCounter().day.bandwidth,
                unblocked: sdk.sitesCounter()
              });
          }, 5e3));
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      click() {
        return "disconnected" === this.props.status
          ? this.connect()
          : -1 !== ["connected", "postConnection"].indexOf(this.props.status)
          ? this.disconnect()
          : void 0;
      }
      getLocationTitle(e) {
        return "optimal" === e ? "Best Choice" : x.a.countries[e.toUpperCase()] ? x.a.countries[e.toUpperCase()].name : e;
      }
      connect() {
        sdk.reporting.report("connection", "connect", storage.location).then(() => {
          sdk.proxy.connect(storage.location);
        });
      }
      disconnect() {
        sdk.reporting.report("connection", "disconnect", storage.location).then(() => {
          sdk.proxy.disconnect();
        });
      }
      open(e) {
        sdk.reporting.report("click", "Main", e).then(() => {
          this.props.changeScreen(e);
        });
      }
      render() {
        let e = "MB",
          n = this.state.bandwidth.toFixed(2);
        return (
          n > 1024 && ((e = "GB"), (n = (n / 1024).toFixed(2))),
          Object(g.jsxs)("div", {
            id: "Main",
            className: this.props.status,
            children: [
              -1 !== ["connected", "postConnection"].indexOf(this.props.status) &&
                Object(g.jsxs)("div", {
                  className: "connectedInfo " + this.props.status,
                  children: [
                    Object(g.jsx)("div", { className: "browsingFromText", children: "You are browsing from" }),
                    Object(g.jsxs)("div", {
                      className: "browsingFromlocation",
                      onClick: () => {
                        this.open("Locations");
                      },
                      children: [this.getLocationTitle(storage.location), Object(g.jsx)("img", { src: "/static/assets/icons/more.png" })]
                    })
                  ]
                }),
              -1 !== ["connected", "postConnection"].indexOf(this.props.status) &&
                Object(g.jsxs)("div", {
                  className: "connectionStatus " + this.props.status,
                  children: [
                    Object(g.jsxs)("div", {
                      className: "element",
                      children: [
                        Object(g.jsxs)("div", { children: [this.state.speed, Object(g.jsx)("span", { children: "Mbps" })] }),
                        Object(g.jsx)("div", { children: "Speed" })
                      ]
                    }),
                    Object(g.jsxs)("div", {
                      className: "element",
                      children: [
                        Object(g.jsxs)("div", { children: [n, Object(g.jsx)("span", { children: e })] }),
                        Object(g.jsx)("div", { children: "Bandwidth" })
                      ]
                    }),
                    Object(g.jsxs)("div", {
                      className: "element",
                      children: [
                        Object(g.jsxs)("div", { children: [this.state.unblocked, Object(g.jsx)("span", { children: "sites" })] }),
                        Object(g.jsx)("div", { children: "Unblocked" })
                      ]
                    })
                  ]
                }),
              "disconnected" === this.props.status &&
                Object(g.jsxs)("div", {
                  className: "disconnectedDescription",
                  children: [
                    "Switch location to",
                    Object(g.jsx)("div", {
                      className: "location",
                      children: Object(g.jsxs)("span", {
                        onClick: () => {
                          this.open("Locations");
                        },
                        children: [
                          this.getLocationTitle(storage.location),
                          " ",
                          Object(g.jsx)("img", { src: "/static/assets/icons/more.png" })
                        ]
                      })
                    })
                  ]
                }),
              "disconnected" === this.props.status &&
                Object(g.jsxs)("div", {
                  className: "gdpr",
                  children: [
                    "By using this extension, you agree to our",
                    Object(g.jsx)("br", {}),
                    Object(g.jsx)("a", {
                      href: "https://www.pango.co/privacy",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Privacy policy"
                    }),
                    "."
                  ]
                }),
              Object(g.jsx)(S, { status: this.props.status, click: this.click.bind(this) })
            ]
          })
        );
      }
    }
    var N = j;
    a(160);
    class O extends l.Component {
      constructor(e) {
        super(e), (this.state = { screen: e.screen, i: 0 });
      }
      componentWillReceiveProps(e) {
        e.screen !== this.state.screen && this.setState({ screen: e.screen });
      }
      click(e) {
        sdk.reporting.report("click", "menu", e).then(() => {
          switch (e) {
            case "signIn":
              this.props.changeScreen("signIn");
              break;
            case "openSecuredSettings":
              this.props.changeScreen("SecuredWebsitesSettings");
              break;
            case "openBypassSettings":
              this.props.changeScreen("BypassWebsitesSettings");
              break;
            case "rate_us":
              sdk.tabs.openPage(sdk.config.promo.rateUs.url);
              break;
            case "privacy_policy":
              sdk.tabs.openPage("https://www.pango.co/privacy");
              break;
            case "try_us_on_mobile":
              sdk.tabs.openPage("https://touchvpn.net/");
              break;
            case "debug":
              sdk.tabs.openPage(`${sdk.config.protocolPrefix}://${sdk.config.application.applicationId}/pages/debug.html`);
          }
        });
      }
      signOut() {
        sdk.firebase.signOut().then(() => {
          this.setState(({ i: e }) => ({ i: e + 1 }));
        });
      }
      render() {
        const e = sdk.firebase.status();
        return Object(g.jsxs)("div", {
          id: "Menu",
          className: this.state.screen,
          children: [
            Object(g.jsx)("div", { className: "bg", onClick: () => this.props.changeScreen() }),
            Object(g.jsxs)("div", {
              className: "menu",
              children: [
                Object(g.jsxs)("div", {
                  className: "account",
                  children: [
                    !e &&
                      Object(g.jsxs)("div", {
                        className: "title",
                        children: [Object(g.jsx)("img", { src: "/static/assets/menu/profile.png" }), "Hi, Anonymous"]
                      }),
                    e &&
                      Object(g.jsxs)("div", {
                        className: "title",
                        children: [Object(g.jsx)("img", { src: "/static/assets/menu/profile.png" }), "Hi, ", e.name]
                      })
                  ]
                }),
                Object(g.jsxs)("div", {
                  className: "content",
                  children: [
                    !e &&
                      Object(g.jsxs)("div", {
                        className: "row",
                        onClick: () => {
                          this.click("signIn");
                        },
                        children: [Object(g.jsx)("div", { className: "icon profile" }), "Sign In"]
                      }),
                    Object(g.jsxs)("div", {
                      className: "row",
                      onClick: () => {
                        this.click("openSecuredSettings");
                      },
                      children: [Object(g.jsx)("div", { className: "icon auto" }), "Auto-protect websites"]
                    }),
                    Object(g.jsxs)("div", {
                      className: "row",
                      onClick: () => {
                        this.click("openBypassSettings");
                      },
                      children: [Object(g.jsx)("div", { className: "icon exclude" }), "Exclude websites"]
                    }),
                    Object(g.jsxs)("div", {
                      className: "row",
                      onClick: () => {
                        this.click("rate_us");
                      },
                      children: [Object(g.jsx)("div", { className: "icon rate" }), "Rate Us"]
                    }),
                    Object(g.jsxs)("div", {
                      className: "row",
                      onClick: () => {
                        this.click("privacy_policy");
                      },
                      children: [Object(g.jsx)("div", { className: "icon doc" }), "Privacy Policy"]
                    }),
                    Object(g.jsxs)("div", {
                      className: "row",
                      onClick: () => {
                        this.click("try_us_on_mobile");
                      },
                      children: [Object(g.jsx)("div", { className: "icon touch" }), "Try us on mobile"]
                    }),
                    e &&
                      Object(g.jsxs)("div", {
                        className: "row",
                        onClick: () => {
                          this.signOut();
                        },
                        children: [Object(g.jsx)("div", { className: "icon profile" }), "Sign Out"]
                      }),
                    sdk.config.debug &&
                      Object(g.jsxs)("div", {
                        className: "row",
                        onClick: () => {
                          this.click("debug");
                        },
                        children: [Object(g.jsx)("div", { className: "icon debug" }), "Debug"]
                      })
                  ]
                }),
                Object(g.jsxs)("div", { className: "version", children: ["TouchVPN ", sdk.config.application.version] })
              ]
            })
          ]
        });
      }
    }
    var E = O;
    a(162);
    class M extends l.Component {
      constructor(e) {
        super(e), (this.state = { screen: e.screen });
      }
      componentWillReceiveProps(e) {
        e.screen !== this.state.screen && this.setState({ screen: e.screen });
      }
      click(e) {
        sdk.reporting.report("click", "share", e).then(() => {
          switch (e) {
            case "fb":
              sdk.tabs.openPage("https://www.facebook.com/sharer/sharer.php?u=https%3A//www.facebook.com/Touch-VPN-156602321553211/");
              break;
            case "tw":
              sdk.tabs.openPage(
                "https://twitter.com/home?status=I%20love%20using%20%40TouchVPN%20to%20securely%20access%20any%20sites%20and%20apps.%20Try%20it%2C%20it%E2%80%99s%20completely%20FREE!%20touchvpn.net"
              );
              break;
            case "gp":
              sdk.tabs.openPage("https://plus.google.com/share?url=https%3A%2F%2Fbnc.lt%2FshareTouchVPN");
          }
        });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "Share",
          className: this.state.screen,
          children: [
            Object(g.jsx)("div", { className: "bg", onClick: () => this.props.changeScreen() }),
            Object(g.jsxs)("div", {
              className: "container",
              children: [
                Object(g.jsx)("div", { className: "title", children: "Share Us" }),
                Object(g.jsx)("div", { className: "close", onClick: () => this.props.changeScreen(), children: "+" }),
                Object(g.jsxs)("div", {
                  className: "elements",
                  children: [
                    Object(g.jsxs)("div", {
                      className: "element",
                      children: [
                        Object(g.jsx)("img", {
                          src: "/static/assets/share/fb.png",
                          onClick: () => {
                            this.click("fb");
                          }
                        }),
                        Object(g.jsx)("br", {}),
                        "Facebook"
                      ]
                    }),
                    Object(g.jsxs)("div", {
                      className: "element",
                      children: [
                        Object(g.jsx)("img", {
                          src: "/static/assets/share/tw.png",
                          onClick: () => {
                            this.click("tw");
                          }
                        }),
                        Object(g.jsx)("br", {}),
                        "Twitter"
                      ]
                    }),
                    Object(g.jsxs)("div", {
                      className: "element",
                      children: [
                        Object(g.jsx)("img", {
                          src: "/static/assets/share/gp.png",
                          onClick: () => {
                            this.click("gp");
                          }
                        }),
                        Object(g.jsx)("br", {}),
                        "Google Plus"
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
    }
    var A = M;
    a(164);
    class P extends l.Component {
      constructor(e) {
        super(e);
        const n = sdk.proxy.timer();
        (this.startTime = n || Date.now()),
          (this.state = { timer: this.getTimeString() }),
          (this.interval = setInterval(() => {
            "connected" === this.props.status && this.setState({ timer: this.getTimeString() });
          }, 1e3));
      }
      getTimeString() {
        let e = Math.round((Date.now() - this.startTime) / 1e3),
          n = 0,
          a = 0,
          t = 0;
        return (
          (n = (e / 3600) | 0),
          (n = n > 9 ? n : "0" + n),
          (e -= 3600 * n),
          (a = (e / 60) | 0),
          (a = a > 9 ? a : "0" + a),
          (e -= 60 * a),
          (t = e > 9 ? e : "0" + e),
          `${n}:${a}:${t}`
        );
      }
      click(e) {
        sdk.reporting.report("click", "Header", e).then(() => {
          this.props.changeScreen(e);
        });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "Header",
          children: [
            Object(g.jsxs)("div", {
              className: "menu",
              onClick: () => {
                this.click("Menu");
              },
              children: [
                Object(g.jsx)("div", { className: "line" }),
                Object(g.jsx)("div", { className: "line" }),
                Object(g.jsx)("div", { className: "line" })
              ]
            }),
            -1 === ["connected", "postConnection"].indexOf(this.props.status) &&
              Object(g.jsx)("div", { className: "logo", children: "TouchVPN" }),
            -1 !== ["connected", "postConnection"].indexOf(this.props.status) &&
              Object(g.jsxs)("div", {
                className: "timer",
                children: ["ENCRIPTION IS ENABLED", Object(g.jsx)("div", { children: this.state.timer })]
              }),
            Object(g.jsx)("div", {
              className: "share",
              onClick: () => {
                this.click("Share");
              }
            })
          ]
        });
      }
    }
    var B = P;
    a(166);
    class T extends l.Component {
      constructor(e) {
        super(e), (this.state = { widgetStatus: sdk.webRTC.getStatus() });
      }
      changeStatus(e) {
        sdk.reporting.report("click", "WebRTC", e).then(() => {
          sdk.webRTC.setStatus(e).then(() => {
            this.setState({ widgetStatus: sdk.webRTC.getStatus() });
          });
        });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "WebRTC",
          className: "widget2 " + this.props.status,
          children: [
            Object(g.jsx)("div", { className: "title", children: "WebRTC blocker" }),
            Object(g.jsxs)("div", {
              className: "switcher " + this.state.widgetStatus,
              children: [
                "on" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "off"), children: "Enabled" }),
                "off" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "on"), children: "Enable" })
              ]
            })
          ]
        });
      }
    }
    var R = T;
    a(168);
    const L = "Panel.RateUs.rated",
      _ = "Panel.RateUs.delay";
    class I extends l.Component {
      constructor(e) {
        super(e), (this.state = { rated: !!sdk.storage.get(L) || !!(sdk.storage.get(_) && sdk.storage.get(_) > Date.now()), thankYou: !1 });
      }
      click(e) {
        sdk.reporting.report("promo", "rateus", "star-" + e).then(() => {
          sdk.storage.set(_, Date.now() + sdk.config.promo.rateUs.interval).then(() => {
            e <= 3
              ? (this.setState({ thankYou: !0, rated: !0 }),
                setTimeout(() => {
                  this.setState({ thankYou: !1 });
                }, 5e3))
              : sdk.storage.set(L, !0).then(() => {
                  sdk.tabs.openPage(sdk.config.promo.rateUs.url);
                });
          });
        });
      }
      render() {
        return this.state.rated && !this.state.thankYou
          ? Object(g.jsx)("div", {})
          : this.state.thankYou
          ? Object(g.jsx)("div", {
              id: "RateUs",
              className: "widget " + this.props.status,
              children: Object(g.jsx)("div", { className: "title", children: "Thank you!" })
            })
          : Object(g.jsxs)("div", {
              id: "RateUs",
              className: "widget " + this.props.status,
              children: [
                Object(g.jsx)("div", { className: "title", children: "Rate Us" }),
                Object(g.jsx)("div", {
                  className: "description",
                  style: { textAlign: "center" },
                  children: "Do you like TouchVPN? Please Rate Us."
                }),
                Object(g.jsx)("div", {
                  className: "stars",
                  children: [1, 2, 3, 4, 5]
                    .reverse()
                    .map((e) => Object(g.jsx)("div", { className: "star", onClick: this.click.bind(this, e) }, e))
                })
              ]
            });
      }
    }
    var D = I,
      U = (a(170), a(9));
    class z extends l.Component {
      constructor(e) {
        super(e),
          (this.state = { screen: e.screen, form: { email: !1, password: !1 }, message: "", disabled: !1 }),
          (this.form = { email: "", password: "" });
      }
      componentWillReceiveProps(e) {
        e.screen !== this.state.screen &&
          ((this.form = { email: "", password: "" }), this.setState({ form: { email: !1, password: !1 }, screen: e.screen, message: "" }));
      }
      fieldChanged(e, n) {
        this.form[e] = n.trim();
      }
      submitForm() {
        sdk.firebase
          .signIn(this.form.email, this.form.password)
          .then((e) => this.props.changeScreen("Menu"))
          .catch((e) => {
            "Too many unsuccessful login attempts.  Please include reCaptcha verification or try again later" === e.message &&
              (e.message = "The password is invalid or the user does not have a password."),
              this.setState({ message: e.message });
          });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "SignIn",
          className: this.state.screen,
          children: [
            Object(g.jsx)("div", {
              className: "head",
              children: Object(g.jsx)("span", { onClick: () => this.props.changeScreen("Menu"), children: "Back" })
            }),
            Object(g.jsxs)("div", {
              className: "inputContainer",
              children: [
                Object(g.jsx)("div", { className: "title", children: "Sign In" }),
                Object(g.jsx)("div", { className: "message", children: this.state.message }),
                Object(g.jsx)(U.a, {
                  label: "Email",
                  value: this.form.email,
                  notValid: this.state.form.email,
                  onEnter: this.submitForm.bind(this),
                  disabled: this.state.disabled,
                  onChange: this.fieldChanged.bind(this, "email")
                }),
                Object(g.jsx)(U.a, {
                  type: "password",
                  label: "Password",
                  value: this.form.password,
                  notValid: this.state.form.password,
                  onEnter: this.submitForm.bind(this),
                  disabled: this.state.disabled,
                  onChange: this.fieldChanged.bind(this, "password")
                }),
                Object(g.jsx)("div", {
                  className: "button",
                  children: Object(g.jsx)("div", { onClick: this.submitForm.bind(this), children: "Sign In" })
                })
              ]
            })
          ]
        });
      }
    }
    var F = z;
    a(172);
    class G extends l.Component {
      constructor(e) {
        super(e), (this.state = { screen: e.screen });
      }
      componentWillReceiveProps(e) {
        e.screen !== this.state.screen && this.setState({ screen: e.screen });
      }
      getLocationTitle(e) {
        return x.a.countries[e.toUpperCase()] ? x.a.countries[e.toUpperCase()].name : e;
      }
      getLocationFlag(e) {
        return `/static/assets/flags/${e.toLowerCase()}.svg`;
      }
      click(e) {
        if (e === sdk.proxy.status.location) return this.props.changeScreen();
        sdk.storage.set("Panel.lastLocation", e).then(() => {
          sdk.reporting.report("location", e, storage.location).then(() => {
            (storage.location = e),
              "connected" === sdk.proxy.status.status
                ? sdk.reporting.report("connection", "reconnect", storage.location).then(() => {
                    sdk.proxy.reconnect(storage.location).then(() => {
                      this.changeScreen();
                    });
                  })
                : this.props.changeScreen();
          });
        });
      }
      render() {
        const e = [],
          n = sdk.proxy.getLocations();
        e.push(
          Object(g.jsxs)(
            "div",
            {
              className: "row center",
              children: [
                "Select location",
                Object(g.jsx)("div", { className: "close", onClick: () => this.props.changeScreen(), children: "+" })
              ]
            },
            "title"
          ),
          Object(g.jsxs)(
            "div",
            {
              className: "row",
              onClick: this.click.bind(this, "optimal"),
              children: [
                Object(g.jsx)("div", { className: "flag", style: { backgroundImage: 'url("/static/assets/icon-48.png")' } }),
                "Best Choice"
              ]
            },
            "optimal"
          )
        );
        for (const a in n) {
          const t = n[a];
          e.push(
            Object(g.jsxs)(
              "div",
              {
                className: "row",
                onClick: this.click.bind(this, t),
                children: [
                  Object(g.jsx)("div", { className: "flag", style: { backgroundImage: `url("${this.getLocationFlag(t)}")` } }),
                  this.getLocationTitle(t)
                ]
              },
              a
            )
          );
        }
        return Object(g.jsxs)("div", {
          id: "Locations",
          className: this.state.screen,
          children: [
            Object(g.jsx)("div", { className: "bg", onClick: () => this.props.changeScreen() }),
            Object(g.jsx)("div", { className: "list", children: e })
          ]
        });
      }
    }
    var W = G;
    a(174);
    class K extends l.Component {
      constructor(e) {
        super(e),
          (this.state = { widgetStatus: sdk.adBlocker.getStatus(), widgetCounter: sdk.adBlocker.getCounter() }),
          (this.interval = setInterval(() => {
            "on" === this.state.widgetStatus && this.setState({ widgetCounter: sdk.adBlocker.getCounter() });
          }, 5e3));
      }
      changeStatus(e) {
        sdk.reporting.report("click", "AdBlocker", e).then(() => {
          sdk.adBlocker.setStatus(e).then(() => {
            this.setState({ widgetStatus: sdk.adBlocker.getStatus() });
          });
        });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "AdBlocker",
          className: "widget2 " + this.props.status,
          children: [
            "on" === this.state.widgetStatus &&
              Object(g.jsxs)("div", {
                className: "title",
                children: [this.state.widgetCounter, " ", Object(g.jsx)("span", { children: "Ads blocked" })]
              }),
            "on" !== this.state.widgetStatus && Object(g.jsx)("div", { className: "title", children: "Ad blocker" }),
            Object(g.jsxs)("div", {
              className: "switcher " + this.state.widgetStatus,
              children: [
                "on" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "off"), children: "Enabled" }),
                "off" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "on"), children: "Enable" })
              ]
            })
          ]
        });
      }
    }
    var V = K;
    a(176);
    class H extends l.Component {
      click(e) {
        sdk.reporting.report("click", "TryUs", e).then(() => {
          sdk.tabs.openPage(
            {
              android: "https://play.google.com/store/apps/details?id=com.northghost.touchvpn",
              apple: "https://itunes.apple.com/us/app/touchvpn-unlimited-proxy/id991744383",
              windows: "https://www.microsoft.com/en-us/store/p/touchvpn/9nblggh5gb3f",
              mac: "https://itunes.apple.com/us/app/touch-vpn/id1239822785"
            }[e]
          );
        });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "TryUsOnOther",
          className: "widget " + this.props.status,
          children: [
            Object(g.jsx)("div", { className: "title", children: "Try us on other platforms" }),
            Object(g.jsxs)("div", {
              className: "list",
              children: [
                Object(g.jsxs)("div", {
                  className: "element",
                  onClick: this.click.bind(this, "android"),
                  children: [Object(g.jsx)("img", { src: "/static/assets/recommended/android.png" }), Object(g.jsx)("br", {}), "Android"]
                }),
                Object(g.jsxs)("div", {
                  className: "element",
                  onClick: this.click.bind(this, "apple"),
                  children: [Object(g.jsx)("img", { src: "/static/assets/recommended/apple.png" }), Object(g.jsx)("br", {}), "iOS"]
                }),
                Object(g.jsxs)("div", {
                  className: "element",
                  onClick: this.click.bind(this, "windows"),
                  children: [Object(g.jsx)("img", { src: "/static/assets/recommended/windows.png" }), Object(g.jsx)("br", {}), "Windows"]
                }),
                Object(g.jsxs)("div", {
                  className: "element",
                  onClick: this.click.bind(this, "mac"),
                  children: [Object(g.jsx)("img", { src: "/static/assets/recommended/mac.png" }), Object(g.jsx)("br", {}), "macOS"]
                })
              ]
            })
          ]
        });
      }
    }
    var $ = H;
    a(178);
    class Y extends l.Component {
      constructor(e) {
        super(e), (this.state = { widgetStatus: sdk.storage.get("Proxy.proxyLocal") ? "on" : "off" });
      }
      changeStatus() {
        sdk.storage.get("Proxy.proxyLocal")
          ? sdk.reporting.report("click", "BypassLocal", "off").then(() => {
              sdk.storage.set("Proxy.proxyLocal", !1).then(() => {
                this.setState({ widgetStatus: "off" }, () => {
                  sdk.proxy.render();
                });
              });
            })
          : sdk.reporting.report("click", "BypassLocal", "on").then(() => {
              sdk.storage.set("Proxy.proxyLocal", !0).then(() => {
                this.setState({ widgetStatus: "on" }, () => {
                  sdk.proxy.render();
                });
              });
            });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "BypassLocal",
          className: "widget2 " + this.props.status,
          children: [
            Object(g.jsx)("div", { className: "title", children: "Bypass local network" }),
            Object(g.jsxs)("div", {
              className: "switcher " + this.state.widgetStatus,
              children: [
                "on" === this.state.widgetStatus && Object(g.jsx)("span", { onClick: this.changeStatus.bind(this), children: "Enabled" }),
                "off" === this.state.widgetStatus && Object(g.jsx)("span", { onClick: this.changeStatus.bind(this), children: "Enable" })
              ]
            })
          ]
        });
      }
    }
    var Z = Y;
    a(180);
    class Q extends l.Component {
      constructor(e) {
        super(e),
          (this.state = { widgetStatus: sdk.trackerBlocker.getStatus(), widgetCounter: sdk.trackerBlocker.getCounter() }),
          (this.interval = setInterval(() => {
            "on" === this.state.widgetStatus && this.setState({ widgetCounter: sdk.trackerBlocker.getCounter() });
          }, 5e3));
      }
      changeStatus(e) {
        sdk.reporting.report("click", "TrackerBlocker", e).then(() => {
          sdk.trackerBlocker.setStatus(e).then(() => {
            this.setState({ widgetStatus: sdk.trackerBlocker.getStatus() });
          });
        });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "TrackerBlocker",
          className: "widget2 " + this.props.status,
          children: [
            "on" === this.state.widgetStatus &&
              Object(g.jsxs)("div", {
                className: "title",
                children: [this.state.widgetCounter, " ", Object(g.jsx)("span", { children: "Trackers blocked" })]
              }),
            "on" !== this.state.widgetStatus && Object(g.jsx)("div", { className: "title", children: "Trackers blocker" }),
            Object(g.jsxs)("div", {
              className: "switcher " + this.state.widgetStatus,
              children: [
                "on" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "off"), children: "Enabled" }),
                "off" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "on"), children: "Enable" })
              ]
            })
          ]
        });
      }
    }
    var X = Q;
    a(182);
    class q extends l.Component {
      constructor(e) {
        super(e),
          (this.state = { widgetStatus: sdk.cookiesBlocker.getStatus(), widgetCounter: sdk.cookiesBlocker.getCounter() }),
          (this.interval = setInterval(() => {
            "on" === this.state.widgetStatus && this.setState({ widgetCounter: sdk.cookiesBlocker.getCounter() });
          }, 5e3));
      }
      changeStatus(e) {
        sdk.reporting.report("click", "CookiesBlocker", e).then(() => {
          sdk.cookiesBlocker.setStatus(e).then(() => {
            this.setState({ widgetStatus: sdk.cookiesBlocker.getStatus() });
          });
        });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "CookiesBlocker",
          className: "widget2 " + this.props.status,
          children: [
            "on" === this.state.widgetStatus &&
              Object(g.jsxs)("div", {
                className: "title",
                children: [this.state.widgetCounter, " ", Object(g.jsx)("span", { children: "Cookies blocked" })]
              }),
            "on" !== this.state.widgetStatus && Object(g.jsx)("div", { className: "title", children: "Cookies blocker" }),
            Object(g.jsxs)("div", {
              className: "switcher " + this.state.widgetStatus,
              children: [
                "on" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "off"), children: "Enabled" }),
                "off" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "on"), children: "Enable" })
              ]
            })
          ]
        });
      }
    }
    var J = q;
    a(184);
    class ee extends l.Component {
      constructor(e) {
        super(e),
          (this.state = { widgetStatus: sdk.malwareBlocker.getStatus(), widgetCounter: sdk.malwareBlocker.getCounter() }),
          (this.interval = setInterval(() => {
            "on" === this.state.widgetStatus && this.setState({ widgetCounter: sdk.malwareBlocker.getCounter() });
          }, 5e3));
      }
      changeStatus(e) {
        sdk.reporting.report("click", "MalwareBlocker", e).then(() => {
          sdk.malwareBlocker.setStatus(e).then(() => {
            this.setState({ widgetStatus: sdk.malwareBlocker.getStatus() });
          });
        });
      }
      render() {
        return Object(g.jsxs)("div", {
          id: "MalwareBlocker",
          className: "widget2 " + this.props.status,
          children: [
            "on" === this.state.widgetStatus &&
              Object(g.jsxs)("div", {
                className: "title",
                children: [this.state.widgetCounter, " ", Object(g.jsx)("span", { children: "Malware blocked" })]
              }),
            "on" !== this.state.widgetStatus && Object(g.jsx)("div", { className: "title", children: "Malware blocker" }),
            Object(g.jsxs)("div", {
              className: "switcher " + this.state.widgetStatus,
              children: [
                "on" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "off"), children: "Enabled" }),
                "off" === this.state.widgetStatus &&
                  Object(g.jsx)("span", { onClick: this.changeStatus.bind(this, "on"), children: "Enable" })
              ]
            })
          ]
        });
      }
    }
    var ne = ee;
    a(186);
    class ae extends l.Component {
      constructor(e) {
        super(e);
        const n = this.getSites();
        this.state = { total: n.total, sites: n.sites, active: n.active };
      }
      async add() {
        const e = await sdk.tabs.getActiveWebsiteTab();
        if (e) {
          sdk.reporting.report("bypass", "main", "add"), await sdk.proxy.bypass.add(e.domain);
          const n = this.getSites();
          this.setState({ total: n.total, sites: n.sites, active: n.active });
        }
      }
      remove(e) {
        sdk.reporting.report("bypass", "main", "remove").then(() => {
          sdk.proxy.bypass.remove(e).then(() => {
            const e = this.getSites();
            this.setState({ total: e.total, sites: e.sites, active: e.active });
          });
        });
      }
      open(e) {
        sdk.reporting.report("bypass", "main", "open").then(() => {
          sdk.tabs.openPage("http://" + e);
        });
      }
      openSettings() {
        sdk.reporting.report("click", "main", "openBypassSettings").then(() => {
          this.props.changeScreen("BypassWebsitesSettings");
        });
      }
      getSites() {
        let e = 0;
        const n = [];
        let a = !1;
        const t = sdk.proxy.bypass.get();
        for (const i in t) {
          e++;
          let r = t[i].replace(/\.[^.]+$/, "");
          (r = r.charAt(0).toUpperCase() + r.slice(1)),
            n.push({ domain: t[i], favicon: sdk.tabs.getFavicon(t[i]), name: r }),
            t[i] === sdk.tabs.active.domain && (a = !0);
        }
        return (storage.bypass = a), { total: e, sites: n, active: a };
      }
      render() {
        const e = [];
        for (const n in this.state.sites) {
          const a = this.state.sites[n];
          let t = "/static/assets/icon-48.png";
          a.favicon && (t = a.favicon),
            e.push(
              Object(g.jsxs)(
                "div",
                {
                  className: "domain",
                  children: [
                    Object(g.jsx)("div", { className: "favicon", style: { backgroundImage: `url('${t}')` } }),
                    Object(g.jsx)("span", { onClick: this.open.bind(this, a.domain), children: a.domain }),
                    Object(g.jsx)("div", { className: "remove", onClick: this.remove.bind(this, a.domain), children: "+" })
                  ]
                },
                n
              )
            );
        }
        return Object(g.jsxs)("div", {
          id: "BypassWebsites",
          className: "widget " + this.props.status,
          children: [
            Object(g.jsx)("div", { className: "title", children: "Exclude websites" }),
            Object(g.jsx)("div", {
              className: "description",
              children: "Websites ignores secure connection even when your Protect Connection is turned on."
            }),
            e,
            !this.state.active &&
              Object(g.jsx)("div", {
                className: "switcher off",
                children: Object(g.jsx)("span", { onClick: this.add.bind(this), children: "Exclude website" })
              }),
            this.state.active &&
              Object(g.jsx)("div", {
                className: "switcher on",
                children: Object(g.jsx)("span", { onClick: this.openSettings.bind(this), children: "Open settings" })
              })
          ]
        });
      }
    }
    var te = ae;
    a(188);
    class ie extends l.Component {
      constructor(e) {
        super(e);
        const n = this.getSites();
        this.state = { total: n.total, sites: n.sites, active: n.active };
      }
      async add() {
        const e = await sdk.tabs.getActiveWebsiteTab();
        if (e) {
          sdk.reporting.report("secured", "main", "add"), await sdk.proxy.secured.add(e.domain);
          const n = this.getSites();
          this.setState({ total: n.total, sites: n.sites, active: n.active });
        }
      }
      remove(e) {
        sdk.reporting.report("secured", "main", "remove").then(() => {
          sdk.proxy.secured.remove(e).then(() => {
            const e = this.getSites();
            this.setState({ total: e.total, sites: e.sites, active: e.active });
          });
        });
      }
      open(e) {
        sdk.reporting.report("secured", "main", "open").then(() => {
          sdk.tabs.openPage("http://" + e);
        });
      }
      openSettings() {
        sdk.reporting.report("click", "main", "openSecuredSettings").then(() => {
          this.props.changeScreen("SecuredWebsitesSettings");
        });
      }
      getSites() {
        let e = 0;
        const n = [];
        let a = !1;
        const t = sdk.proxy.secured.get();
        for (const i in t) {
          e++;
          let r = i.replace(/\.[^.]+$/, "");
          (r = r.charAt(0).toUpperCase() + r.slice(1)),
            n.push({ domain: i, favicon: sdk.tabs.getFavicon(i), location: t[i], name: r }),
            i === sdk.tabs.active.domain && (a = !0);
        }
        return (storage.secured = a), { total: e, sites: n, active: a };
      }
      render() {
        let e = 0;
        const n = [];
        for (const a in this.state.sites) {
          const t = this.state.sites[a];
          let i = "/static/assets/icon-48.png";
          if (e++ >= 4 && t.domain !== sdk.tabs.active.domain) continue;
          t.favicon && (i = t.favicon);
          const r = Object(g.jsxs)(
            "div",
            {
              className: "domain",
              children: [
                Object(g.jsx)("div", { className: "favicon", style: { backgroundImage: `url('${i}')` } }),
                Object(g.jsx)("span", { onClick: this.open.bind(this, t.domain), children: t.domain }),
                Object(g.jsx)("div", { className: "remove", onClick: this.remove.bind(this, t.domain), children: "+" })
              ]
            },
            a
          );
          t.domain === sdk.tabs.active.domain ? n.unshift(r) : n.push(r);
        }
        return (
          n.length > 4 && n.pop(),
          Object(g.jsxs)("div", {
            id: "SecuredWebsites",
            className: "widget " + this.props.status,
            children: [
              Object(g.jsx)("div", { className: "title", children: "Auto-protect websites" }),
              Object(g.jsx)("div", {
                className: "description",
                children: "As soon as you open these websites secure connection will be enabled automatically."
              }),
              n,
              !this.state.active &&
                Object(g.jsx)("div", {
                  className: "switcher off",
                  children: Object(g.jsx)("span", { onClick: this.add.bind(this), children: "Auto-protect website" })
                }),
              this.state.active &&
                Object(g.jsx)("div", {
                  className: "switcher on",
                  children: Object(g.jsx)("span", { onClick: this.openSettings.bind(this), children: "Open settings" })
                })
            ]
          })
        );
      }
    }
    var re = ie;
    a(190);
    class oe extends l.Component {
      constructor(e) {
        super(e), (this.state = { form: { domain: !1 }, messages: { domain: !1 }, disabled: !1 }), (this.form = { domain: "" });
      }
      open(e) {
        sdk.reporting.report("bypass", "settings", "open").then(() => {
          sdk.tabs.openPage("http://" + e);
        });
      }
      remove(e) {
        sdk.reporting.report("bypass", "settings", "remove").then(() => {
          sdk.proxy.bypass.remove(e).then(() => {
            const e = this.getSites();
            this.setState({ total: e.total, sites: e.sites, active: e.active });
          });
        });
      }
      getSites() {
        let e = 0;
        const n = [];
        let a = !1;
        const t = sdk.proxy.bypass.get();
        for (const i in t) {
          e++;
          let r = t[i].replace(/\.[^.]+$/, "");
          (r = r.charAt(0).toUpperCase() + r.slice(1)),
            n.push({ domain: t[i], favicon: sdk.tabs.getFavicon(t[i]), name: r }),
            t[i] === sdk.tabs.active.domain && (a = !0);
        }
        return (storage.bypass = a), { total: e, sites: n, active: a };
      }
      fieldChanged(e, n) {
        this.form[e] = n.trim();
      }
      submitForm() {
        const e = this.form.domain
            .replace(/^(https?)?(:\/\/)?(www\.)?/, "")
            .replace(/\/.*$/, "")
            .replace(/\?.*$/, "")
            .match(/^([a-zA-Z0-9]+(([\-]?[a-zA-Z0-9]+)*\.)+)*[a-zA-Z]{2,}$/),
          n = this.state;
        if (((n.form.domain = !1), !e || !e[0])) return (n.form.domain = !0), this.setState(n);
        sdk.proxy.bypass.isInList(e[0])
          ? ((n.form.domain = !0), this.setState(n))
          : sdk.reporting.report("bypass", "settings", "add").then(() => {
              sdk.reporting.report(this.type, "add", e[0]),
                sdk.proxy.bypass.add(e[0]).then((e) => {
                  (this.form.domain = ""), this.setState(n);
                });
            });
      }
      render() {
        const e = this.getSites().sites,
          n = [];
        for (const a in e) {
          const t = e[a];
          let i = "/static/assets/icon-48.png";
          t.favicon && (i = t.favicon);
          const r = Object(g.jsxs)(
            "div",
            {
              className: "row",
              children: [
                Object(g.jsx)("div", { className: "favicon", style: { backgroundImage: `url('${i}')` } }),
                Object(g.jsx)("span", { onClick: this.open.bind(this, t.domain), children: t.domain }),
                Object(g.jsx)("div", { className: "remove", onClick: this.remove.bind(this, t.domain), children: "+" })
              ]
            },
            a
          );
          t.domain === sdk.tabs.active.domain ? n.unshift(r) : n.push(r);
        }
        return Object(g.jsxs)("div", {
          id: "BypassWebsitesSettings",
          className: this.props.screen,
          children: [
            Object(g.jsx)("div", {
              className: "head",
              children: Object(g.jsx)("span", { onClick: () => this.props.changeScreen("Menu"), children: "Done" })
            }),
            Object(g.jsx)("div", {
              className: "inputContainer",
              children: Object(g.jsx)(U.a, {
                label: "Enter url e.g. https://facebook.com",
                value: this.form.domain,
                notValid: this.state.form.domain,
                message: this.state.messages.domain,
                onEnter: this.submitForm.bind(this),
                disabled: this.state.disabled,
                onChange: this.fieldChanged.bind(this, "domain"),
                children: Object(g.jsx)("div", { className: "add", onClick: this.submitForm.bind(this), children: "Add" })
              })
            }),
            Object(g.jsxs)("div", {
              className: "sites",
              children: [
                Object(g.jsx)("div", { className: "title", children: "Exclude websites" }),
                Object(g.jsx)("div", {
                  className: "description",
                  children: "Websites ignores secure connection even when your Protect Connection is turned on."
                }),
                n
              ]
            })
          ]
        });
      }
    }
    var le = oe;
    a(192);
    class se extends l.Component {
      constructor(e) {
        super(e),
          (this.state = { screen: e.screen, form: { domain: !1 }, messages: { domain: !1 }, disabled: !1 }),
          (this.form = { domain: "" });
      }
      componentWillReceiveProps(e) {
        e.screen !== this.state.screen && this.setState({ screen: e.screen });
      }
      open(e) {
        sdk.reporting.report("secured", "settings", "open").then(() => {
          sdk.tabs.openPage("http://" + e);
        });
      }
      remove(e) {
        sdk.reporting.report("secured", "settings", "remove").then(() => {
          sdk.proxy.secured.remove(e).then(() => {
            const e = this.getSites();
            this.setState({ total: e.total, sites: e.sites, active: e.active });
          });
        });
      }
      getSites() {
        let e = 0;
        const n = [];
        let a = !1;
        const t = sdk.proxy.secured.get();
        for (const i in t) {
          e++;
          let r = i.replace(/\.[^.]+$/, "");
          (r = r.charAt(0).toUpperCase() + r.slice(1)),
            n.push({ domain: i, favicon: sdk.tabs.getFavicon(i), location: t[i], name: r }),
            i === sdk.tabs.active.domain && (a = !0);
        }
        return (storage.secured = a), { total: e, sites: n, active: a };
      }
      fieldChanged(e, n) {
        this.form[e] = n.trim();
      }
      submitForm() {
        const e = this.form.domain
            .replace(/^(https?)?(:\/\/)?(www\.)?/, "")
            .replace(/\/.*$/, "")
            .replace(/\?.*$/, "")
            .match(/^([a-zA-Z0-9]+(([\-]?[a-zA-Z0-9]+)*\.)+)*[a-zA-Z]{2,}$/),
          n = this.state;
        if (((n.form.domain = !1), !e || !e[0])) return (n.form.domain = !0), this.setState(n);
        sdk.proxy.secured.isInList(e[0])
          ? ((n.form.domain = !0), this.setState(n))
          : sdk.reporting.report("secured", "settings", "add").then(() => {
              sdk.reporting.report(this.type, "add", e[0]),
                sdk.proxy.secured.add(e[0]).then((e) => {
                  (this.form.domain = ""), this.setState(n);
                });
            });
      }
      render() {
        const e = this.getSites().sites,
          n = [];
        for (const a in e) {
          const t = e[a];
          let i = "/static/assets/icon-48.png";
          t.favicon && (i = t.favicon);
          const r = Object(g.jsxs)(
            "div",
            {
              className: "row",
              children: [
                Object(g.jsx)("div", { className: "favicon", style: { backgroundImage: `url('${i}')` } }),
                Object(g.jsx)("span", { onClick: this.open.bind(this, t.domain), children: t.domain }),
                Object(g.jsx)("div", { className: "remove", onClick: this.remove.bind(this, t.domain), children: "+" })
              ]
            },
            a
          );
          t.domain === sdk.tabs.active.domain ? n.unshift(r) : n.push(r);
        }
        return Object(g.jsxs)("div", {
          id: "SecuredWebsitesSettings",
          className: this.state.screen,
          children: [
            Object(g.jsx)("div", {
              className: "head",
              children: Object(g.jsx)("span", { onClick: () => this.props.changeScreen("Menu"), children: "Done" })
            }),
            Object(g.jsx)("div", {
              className: "inputContainer",
              children: Object(g.jsx)(U.a, {
                label: "Enter url e.g. https://facebook.com",
                value: this.form.domain,
                notValid: this.state.form.domain,
                message: this.state.messages.domain,
                onEnter: this.submitForm.bind(this),
                disabled: this.state.disabled,
                onChange: this.fieldChanged.bind(this, "domain"),
                children: Object(g.jsx)("div", { className: "add", onClick: this.submitForm.bind(this), children: "Add" })
              })
            }),
            Object(g.jsxs)("div", {
              className: "sites",
              children: [
                Object(g.jsx)("div", { className: "title", children: "Auto-protect websites" }),
                Object(g.jsx)("div", {
                  className: "description",
                  children: "As soon as you open these websites secure connection will be enabled automatically."
                }),
                n
              ]
            })
          ]
        });
      }
    }
    var ce = se;
    class ue extends l.Component {
      constructor(e) {
        super(e), (this.state = { screen: e.screen ? e.screen : "Main", status: sdk.proxy.status.status });
        let n = sdk.proxy.status.status;
        sdk.reporting.report("screen", "Main"),
          (storage.location =
            "connected" === n.status
              ? n.location
              : sdk.storage.get("Panel.lastLocation")
              ? sdk.storage.get("Panel.lastLocation")
              : "optimal"),
          sdk.proxy.onStatusChanged.add((e) => {
            if (e.status === this.state.status) return;
            let a = e.status;
            "connected" === a && "disconnected" === n && (a = "postConnection"),
              (n = -1 !== ["connected", "disconnected"].indexOf(e.status) ? e.status : n),
              this.setState({ status: a });
          });
      }
      componentWillReceiveProps(e) {
        e && !e.screen && e.screen !== this.state.screen && this.setState({ screen: e.screen });
      }
      changeScreen(e) {
        e || (e = "Main"),
          e !== this.state.screen &&
            sdk.reporting.report("screen", e).then(() => {
              this.setState({ screen: e });
            });
      }
      locationsStatus() {
        this.setState((e) => ({ showLocations: !e.showLocations }));
      }
      render() {
        return s.d && !u()(sdk.storage.get(d.a))
          ? Object(g.jsx)(m, { onClose: this.changeScreen.bind(this), onReviewSettings: () => browser.runtime.openOptionsPage() })
          : Object(g.jsxs)("div", {
              children: [
                Object(g.jsx)(B, { changeScreen: this.changeScreen.bind(this), status: this.state.status }),
                Object(g.jsx)(N, { changeScreen: this.changeScreen.bind(this), status: this.state.status }),
                Object(g.jsxs)("div", {
                  className: "scroll",
                  children: [
                    Object(g.jsx)(V, { status: this.state.status }),
                    Object(g.jsx)(X, { status: this.state.status }),
                    Object(g.jsx)(J, { status: this.state.status }),
                    Object(g.jsx)(ne, { status: this.state.status }),
                    Object(g.jsx)(R, { status: this.state.status }),
                    Object(g.jsx)(Z, { status: this.state.status }),
                    Object(g.jsx)(D, { status: this.state.status }),
                    Object(g.jsx)(re, { status: this.state.status, changeScreen: this.changeScreen.bind(this) }),
                    Object(g.jsx)(te, { status: this.state.status, changeScreen: this.changeScreen.bind(this) }),
                    Object(g.jsx)($, { status: this.state.status })
                  ]
                }),
                Object(g.jsx)(W, { changeScreen: this.changeScreen.bind(this), screen: this.state.screen }),
                Object(g.jsx)(le, { changeScreen: this.changeScreen.bind(this), screen: this.state.screen }),
                Object(g.jsx)(ce, { changeScreen: this.changeScreen.bind(this), screen: this.state.screen }),
                Object(g.jsx)(F, { changeScreen: this.changeScreen.bind(this), screen: this.state.screen }),
                Object(g.jsx)(E, { changeScreen: this.changeScreen.bind(this), screen: this.state.screen }),
                Object(g.jsx)(A, { changeScreen: this.changeScreen.bind(this), screen: this.state.screen }),
                s.d && Object(g.jsx)(k, {})
              ]
            });
      }
    }
    var de = ue;
    class pe extends l.Component {
      constructor() {
        super(), (this.state = { screen: "main" }), (this.lastScreen = this.state.screen);
      }
      componentDidMount() {
        sdk.reporting.report("screen", this.state.screen);
      }
      render() {
        return (this.lastScreen = this.state.screen), Object(g.jsx)(de, { screen: this.state.screen });
      }
    }
    var he = pe,
      ge = a(29);
    new (class {
      constructor() {
        this.init();
      }
      init() {
        window.signals = { onLoaded: new i.a(), onStatusChanged: new i.a() };
        const e = () => {
          var n, a, i;
          const r = document.getElementById("page");
          if (
            ((window.sdk = null === (n = browser.extension.getBackgroundPage()) || void 0 === n ? void 0 : n.sdk),
            !r || null === (a = sdk) || void 0 === a || !a.proxy || null === (i = sdk) || void 0 === i || !i.tabs)
          )
            return setTimeout(() => {
              e();
            }, 50);
          (window.locales = new ge.a()),
            (window.storage = {}),
            new t.a(),
            (window.panel = this),
            (window.controller = o.a.render(Object(g.jsx)(he, {}), r)),
            this.start();
        };
        e();
      }
      start() {
        if (!sdk.loading || !sdk.loading.loaded)
          return setTimeout(() => {
            this.start();
          }, 500);
        this.showScreen();
      }
      showScreen() {
        const e = sdk.proxy.status,
          n = sdk.proxy.getGlobalStatus();
        (storage.status = e.status),
          (storage.bypass = sdk.proxy.bypass.isInList(sdk.tabs.active.domain)),
          (storage.secured = sdk.proxy.secured.isInList(sdk.tabs.active.domain)),
          "unavailable" === n
            ? sdk.proxy.disableOtherProxy().then(() => {
                controller.setState({ screen: "Main" });
              })
            : controller.setState({ screen: "main" });
      }
    })();
  }
]);
