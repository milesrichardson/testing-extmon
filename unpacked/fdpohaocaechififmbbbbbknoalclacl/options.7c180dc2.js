function e(e, t, n, r) {
  Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
}
function t(e) {
  return e && e.__esModule ? e.default : e;
}
var n =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  r = {},
  o = {},
  a = n.parcelRequire60cc;
null == a &&
  (((a = function (e) {
    if (e in r) return r[e].exports;
    if (e in o) {
      var t = o[e];
      delete o[e];
      var n = { id: e, exports: {} };
      return (r[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var a = new Error("Cannot find module '" + e + "'");
    throw ((a.code = "MODULE_NOT_FOUND"), a);
  }).register = function (e, t) {
    o[e] = t;
  }),
  (n.parcelRequire60cc = a)),
  a.register("cW7yT", function (e, t) {
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
      var t = {}.hasOwnProperty;
      function n() {
        for (var e = [], r = 0; r < arguments.length; r++) {
          var o = arguments[r];
          if (o) {
            var a = typeof o;
            if ("string" === a || "number" === a) e.push(o);
            else if (Array.isArray(o) && o.length) {
              var i = n.apply(null, o);
              i && e.push(i);
            } else if ("object" === a) for (var s in o) t.call(o, s) && o[s] && e.push(s);
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((n.default = n), (e.exports = n))
        : "function" == typeof define && "object" == typeof define.amd && define.amd
        ? define("classnames", [], function () {
            return n;
          })
        : (window.classNames = n);
    })();
  }),
  a.register("3A0PR", function (t, n) {
    e(t.exports, "ERROR_TYPE", () => o),
      e(t.exports, "getZoom", () => s),
      e(t.exports, "captureVisibleTab", () => l),
      e(t.exports, "isCaptureVisibleTabQuotaError", () => c),
      e(t.exports, "executeScript", () => u),
      e(t.exports, "isExecuteScriptChromeError", () => d),
      e(t.exports, "sendMessage", () => m),
      e(t.exports, "getCurrentTab", () => p),
      e(t.exports, "openInTabs", () => h);
    var r = a("5dZ7N");
    const o = "ChromeTabsError",
      i = (0, r.genLastErrorFmt)(o),
      s = (e) =>
        new Promise((t, n) => {
          chrome.tabs.getZoom(e, (e) => {
            const r = chrome.runtime.lastError;
            return r ? n(i(r, "getZoom")) : t(e);
          });
        }),
      l = (e, t) =>
        new Promise((n, r) => {
          chrome.tabs.captureVisibleTab(e, t, (e) => {
            const t = chrome.runtime.lastError;
            return t ? r(i(t, "captureVisibleTab")) : n(e);
          });
        }),
      c = (e) =>
        e &&
        "object" == typeof e &&
        e.name === o &&
        "captureVisibleTab" === e.via &&
        e.message &&
        -1 !== e.message.indexOf("MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND"),
      u = (e, t) =>
        new Promise((n, r) => {
          chrome.tabs.executeScript(e, t, (e) => {
            const t = chrome.runtime.lastError;
            return t ? r(i(t, "executeScript")) : n(e);
          });
        }),
      d = (e) =>
        e &&
        "object" == typeof e &&
        e.name === o &&
        "executeScript" === e.via &&
        e.message &&
        (["Extension manifest must request permission", "The tab was closed.", "The frame was removed."].some(
          (t) => -1 !== e.message.indexOf(t)
        ) ||
          -1 !== e.message.indexOf('"chrome-error://')),
      m = (e, t, n) =>
        new Promise((r, o) => {
          chrome.tabs.sendMessage(e, t, n, (e) => {
            const t = chrome.runtime.lastError;
            return t ? o(i(t, "sendMessage")) : r(e);
          });
        }),
      p = () => {
        return ((e = { active: !0, currentWindow: !0 }),
        new Promise((t, n) => {
          chrome.tabs.query(e, (e) => {
            const r = chrome.runtime.lastError;
            return r ? n(i(r, "query")) : t(e);
          });
        })).then((e) => e[0]);
        var e;
      },
      h = async (e, t) => {
        let n,
          r = t.length;
        const o = (a) => {
          if (a >= t.length) return t;
          let s = t[a],
            l = a === r - 1;
          return e.incognito && 0 === a
            ? ((c = { url: s, incognito: !1, focused: l }),
              new Promise((e, t) => {
                chrome.windows.create(c, (n) => {
                  const r = chrome.runtime.lastError;
                  return r ? t(i(r, "windowsCreate")) : e(n);
                });
              })).then((e) => ((n = e.id), o(a + 1)))
            : ((e) =>
                new Promise((t, n) => {
                  chrome.tabs.create(e, (e) => {
                    const r = chrome.runtime.lastError;
                    return r ? n(i(r, "create")) : t(e);
                  });
                }))({ url: s, active: l, windowId: n, openerTabId: e.id, index: (e.incognito ? 0 : e.index) + 1 + a }).then((e) =>
                o(a + 1)
              );
          var c;
        };
        return o(0);
      };
  });
var i = a("2q4iO"),
  s = a("aHNfr"),
  l = a("h4XuO"),
  c = a("03QYZ");
const u = () => {
    const e = (0, c.getQueryString)(),
      t = e.id || e.oid,
      n = e.e,
      r = e.url;
    return { options: h(t, n, r), history: f(t, n, r), capture: t ? m(t, r) : void 0, editor: t && n ? p(t, n, r) : void 0 };
  },
  d = (e, t, n = !1) => {
    if (e) {
      -1 === e.href.indexOf("?") && ((e.href = t), n && e.setAttribute("style", ""));
    }
  },
  m = (e, t = null) => {
    const n = { id: e };
    t && (n.url = t);
    return "/capture.html" + ("?" + (0, c.toQueryString)(n));
  },
  p = (e, t, n = null) => {
    const r = { id: e, e: t };
    n && (r.url = n);
    return "/editor.html" + ("?" + (0, c.toQueryString)(r));
  },
  h = (e = null, t = null, n = null) => {
    let r = "";
    if (e) {
      const o = { id: e };
      t && (o.e = t), n && (o.url = n), (r = "?" + (0, c.toQueryString)(o));
    }
    return "/options.html" + r;
  },
  f = (e = null, t = null, n = null) => {
    let r = "";
    if (e) {
      const o = { oid: e };
      t && (o.e = t), n && (o.url = n), (r = "?" + (0, c.toQueryString)(o));
    }
    return "/capture.html" + r;
  };
var g = a("cW7yT"),
  v = ((i = a("2q4iO")), a("dk7YQ")),
  b = a("83PZf"),
  y = a("2auQc"),
  E = (a("h4XuO"), a("iMjBX"));
var w = a("cEw93"),
  x = a("aiU1O"),
  C = a("7i7LO");
let k = null;
const _ = (e = !1) => {
  if (null === k) {
    const e = document.createElement("a");
    (e.style.cssText = "position: sticky;"), (k = -1 !== e.style.position.indexOf("sticky"));
  }
  return k && e && document.documentElement.classList.add("csspositionsticky"), k;
};
var S = a("guJCW"),
  O = a("3ESIc"),
  N = ((l = a("h4XuO")), a("2xkva"));
(x = a("aiU1O")), (c = a("03QYZ"));
const T = (e, t) => {
    let n,
      r,
      o = [];
    return (
      e.forEach((e) => {
        e[t] !== r && (void 0 !== n && o.push(n), (r = e[t]), (n = { key: r, vals: [] })), n.vals.push(e);
      }),
      n && n.vals.length && o.push(n),
      o
    );
  },
  R = (e) => {
    window.clearTimeout(R.timeoutId),
      (0, c.asArray)(document.querySelectorAll(".notif")).forEach((e) => e.classList.add("hide")),
      (0, l.$)(e).classList.remove("hide"),
      (R.timeoutId = window.setTimeout(() => (0, l.$)(e).classList.add("hide"), 2e3));
  };
R.timeoutId = null;
const L = async (e) => {
    N.default.error("options error", e), await x.update(e);
    let t = z("div", { className: "error", textContent: "An error was encountered!  " }),
      n = (0, c.reportLink)(window.location.href, (0, c.errorToString)(e)),
      r = z("a", { className: "underline", target: "_blank", rel: "noopener noreferrer", href: n, textContent: "Report issue" });
    t.appendChild(r), M(), document.body.appendChild(t), window.scrollTo(0, 0);
  },
  M = () => {
    (0, c.asArray)(document.querySelectorAll("body > .error")).forEach((e) => {
      e.parentNode.removeChild(e);
    });
  },
  z = (e, t) => {
    let n = document.createElement(e);
    return t && t.style && (Object.assign(n.style, t.style), delete t.style), Object.assign(n, t), n;
  },
  F = (e) => {
    switch (e.type) {
      case "checkbox":
        return e.checked;
      case "text":
      case "textarea":
      case "select-one":
        return e.value;
      default:
        throw new Error(`Unknown input type: ${e.type}`);
    }
  };
g = a("cW7yT");
var A = a("cAnjR");
i = a("2q4iO");
function q() {
  return (
    (q =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    q.apply(this, arguments)
  );
}
function H(e, t) {
  if (null == e) return {};
  var n,
    r,
    o = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}
function I(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
i = a("2q4iO");
a("cAnjR");
var P = !!document.documentElement.currentStyle,
  j = {
    "min-height": "0",
    "max-height": "none",
    height: "0",
    visibility: "hidden",
    overflow: "hidden",
    position: "absolute",
    "z-index": "-1000",
    top: "0",
    right: "0"
  },
  D = [
    "letter-spacing",
    "line-height",
    "font-family",
    "font-weight",
    "font-size",
    "font-style",
    "tab-size",
    "text-rendering",
    "text-transform",
    "width",
    "text-indent",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "border-top-width",
    "border-right-width",
    "border-bottom-width",
    "border-left-width",
    "box-sizing"
  ],
  $ = {},
  B = document.createElement("textarea"),
  U = function (e) {
    Object.keys(j).forEach(function (t) {
      e.style.setProperty(t, j[t], "important");
    });
  };
function Q(e, t, n, r, o) {
  void 0 === n && (n = !1), void 0 === r && (r = null), void 0 === o && (o = null), null === B.parentNode && document.body.appendChild(B);
  var a = (function (e, t, n) {
    void 0 === n && (n = !1);
    if (n && $[t]) return $[t];
    var r = window.getComputedStyle(e);
    if (null === r) return null;
    var o = D.reduce(function (e, t) {
        return (e[t] = r.getPropertyValue(t)), e;
      }, {}),
      a = o["box-sizing"];
    if ("" === a) return null;
    P &&
      "border-box" === a &&
      (o.width =
        parseFloat(o.width) +
        parseFloat(r["border-right-width"]) +
        parseFloat(r["border-left-width"]) +
        parseFloat(r["padding-right"]) +
        parseFloat(r["padding-left"]) +
        "px");
    var i = parseFloat(o["padding-bottom"]) + parseFloat(o["padding-top"]),
      s = parseFloat(o["border-bottom-width"]) + parseFloat(o["border-top-width"]),
      l = { sizingStyle: o, paddingSize: i, borderSize: s, boxSizing: a };
    n && ($[t] = l);
    return l;
  })(e, t, n);
  if (null === a) return null;
  var i = a.paddingSize,
    s = a.borderSize,
    l = a.boxSizing,
    c = a.sizingStyle;
  Object.keys(c).forEach(function (e) {
    B.style[e] = c[e];
  }),
    U(B),
    (B.value = e.value || e.placeholder || "x");
  var u = -1 / 0,
    d = 1 / 0,
    m = B.scrollHeight;
  "border-box" === l ? (m += s) : "content-box" === l && (m -= i), (B.value = "x");
  var p = B.scrollHeight - i,
    h = Math.floor(m / p);
  return (
    null !== r && ((u = p * r), "border-box" === l && (u = u + i + s), (m = Math.max(u, m))),
    null !== o && ((d = p * o), "border-box" === l && (d = d + i + s), (m = Math.min(d, m))),
    { height: m, minHeight: u, maxHeight: d, rowCount: Math.floor(m / p), valueRowCount: h }
  );
}
B.setAttribute("tab-index", "-1"), B.setAttribute("aria-hidden", "true"), U(B);
var W = function () {},
  V = 0,
  X = (function (e) {
    var t, n;
    function r(t) {
      var n;
      return (
        ((n = e.call(this, t) || this)._onRef = function (e) {
          n._ref = e;
          var t = n.props.inputRef;
          "function" != typeof t ? (t.current = e) : t(e);
        }),
        (n._onChange = function (e) {
          n._controlled || n._resizeComponent(), n.props.onChange(e, I(n));
        }),
        (n._resizeComponent = function (e) {
          void 0 === e && (e = W);
          var t = Q(n._ref, n._uid, n.props.useCacheForDOMMeasurements, n.props.minRows, n.props.maxRows);
          if (null !== t) {
            var r = t.height,
              o = t.minHeight,
              a = t.maxHeight,
              i = t.rowCount,
              s = t.valueRowCount;
            (n.rowCount = i),
              (n.valueRowCount = s),
              n.state.height === r && n.state.minHeight === o && n.state.maxHeight === a
                ? e()
                : n.setState({ height: r, minHeight: o, maxHeight: a }, e);
          } else e();
        }),
        (n.state = { height: (t.style && t.style.height) || 0, minHeight: -1 / 0, maxHeight: 1 / 0 }),
        (n._uid = V++),
        (n._controlled = void 0 !== t.value),
        (n._resizeLock = !1),
        n
      );
    }
    (n = e), ((t = r).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), (t.__proto__ = n);
    var o = r.prototype;
    return (
      (o.render = function () {
        var e = this.props,
          t =
            (e.inputRef,
            e.maxRows,
            e.minRows,
            e.onHeightChange,
            e.useCacheForDOMMeasurements,
            H(e, ["inputRef", "maxRows", "minRows", "onHeightChange", "useCacheForDOMMeasurements"]));
        return (
          (t.style = q({}, t.style, { height: this.state.height })),
          Math.max(t.style.maxHeight || 1 / 0, this.state.maxHeight) < this.state.height && (t.style.overflow = "hidden"),
          (0, i.createElement)("textarea", q({}, t, { onChange: this._onChange, ref: this._onRef }))
        );
      }),
      (o.componentDidMount = function () {
        var e = this;
        this._resizeComponent(),
          (this._resizeListener = function () {
            e._resizeLock ||
              ((e._resizeLock = !0),
              e._resizeComponent(function () {
                e._resizeLock = !1;
              }));
          }),
          window.addEventListener("resize", this._resizeListener);
      }),
      (o.componentDidUpdate = function (e, t) {
        e !== this.props && this._resizeComponent(), this.state.height !== t.height && this.props.onHeightChange(this.state.height, this);
      }),
      (o.componentWillUnmount = function () {
        var e;
        window.removeEventListener("resize", this._resizeListener), (e = this._uid), delete $[e];
      }),
      r
    );
  })(i.Component);
X.defaultProps = { inputRef: W, onChange: W, onHeightChange: W, useCacheForDOMMeasurements: !1 };
var Z = X,
  Y = ((i = a("2q4iO")), a("a5i9T"));
const J = ({ text: e, cta1: n, cta1LinkFn: r, cta2: o, cta2LinkFn: a, isShow: s, setShow: l, setHide: c, userId: u }) => {
  const d = "premium-cta",
    m = s ? { onClick: c } : { onMouseEnter: l, onClick: l, onFocus: l };
  return (
    (0, i.useEffect)(() => {
      let e, t;
      return (
        s &&
          ((e = (e) => {
            !!e.target.closest(`.${d}`) || c();
          }),
          (t = (e) => {
            27 === e.keyCode && c();
          }),
          document.documentElement.addEventListener("click", e, !1),
          document.documentElement.addEventListener("keyup", t, !1)),
        () => {
          e && document.documentElement.removeEventListener("click", e, !1),
            t && document.documentElement.removeEventListener("keyup", t, !1);
        }
      );
    }, [s, c]),
    t(i).createElement(
      "span",
      { className: d },
      t(i).createElement("span", { tabIndex: "0", className: "premium-cta--icon", ...m }, "?"),
      s &&
        t(i).createElement(
          "span",
          { className: "premium-cta--tooltip" },
          e,
          !1,
          n &&
            r &&
            t(i).createElement(
              t(i).Fragment,
              null,
              t(i).createElement("br", null),
              t(i).createElement("a", { href: r() }, n),
              !u && o && a && t(i).createElement(t(i).Fragment, null, " or ", t(i).createElement("a", { href: a() }, o))
            )
        )
    )
  );
};
J.displayName = "PremiumCta";
var G = J;
const K = ({ field: e, value: n, onChange: r, isSubOk: o, userId: a }) => {
  const s = e.premiumInfo,
    l = !o && !!s;
  l && (n = s.basicDefault);
  const [c, u] = (0, i.useState)(!1),
    d = () => u(!0),
    m = (e) => {
      const t = e.currentTarget,
        n = t.name;
      if (l) d();
      else {
        const e = F(t);
        r(n, e);
      }
    };
  let p;
  switch (e.type) {
    case "bool":
      p = t(i).createElement(
        "div",
        { className: "options-ctrl" },
        t(i).createElement(
          "label",
          null,
          t(i).createElement("input", { className: "options-input", type: "checkbox", name: e.name, checked: n, onChange: m }),
          t(i).createElement("span", { className: "label-text" }, e.label)
        )
      );
      break;
    case "text":
      p = t(i).createElement(
        "div",
        { className: "options-ctrl flex-wrapper" },
        t(i).createElement("label", null, e.label),
        "textarea" === e.width
          ? t(i).createElement(Z, { className: "options-input", name: e.name, style: { resize: "none" }, value: n, onChange: m })
          : t(i).createElement("input", {
              className: "options-input",
              type: "text",
              name: e.name,
              value: n,
              onChange: m,
              disabled: e.disabled
            })
      );
      break;
    case "choice":
      p = t(i).createElement(
        "div",
        { className: "options-ctrl flex-wrapper" },
        t(i).createElement("label", null, e.label),
        t(i).createElement(
          "select",
          { className: "options-input", name: e.name, value: n, onChange: m },
          e.convertedChoices.map((e) => t(i).createElement("option", { key: e.key, value: e.key }, e.display || e.key))
        )
      );
      break;
    default:
      throw new Error(`unsupported type! ${e.type}`);
  }
  const h = t(i).createElement(
    "span",
    { className: "help" },
    e.help && "function" == typeof e.help ? e.help(n) : e.help || "",
    l &&
      t(i).createElement(t(i).Fragment, null, " ", t(i).createElement(G, { ...s, isShow: c, setShow: d, setHide: () => u(!1), userId: a })),
    t(i).createElement("span", { className: "msg" })
  );
  return t(i).createElement("div", { className: t(g)("options-elt", `type-${e.type}`) }, p, h);
};
(K.displayName = "OptionField"),
  (K.propTypes = {
    field: t(A).shape({
      name: t(A).string.isRequired,
      type: t(A).oneOf(["choice", "bool", "text"]),
      group: t(A).string.isRequired,
      default: t(A).any,
      label: t(A).string.isRequired,
      help: t(A).string,
      validate: t(A).func,
      hidden: t(A).bool,
      premiumInfo: t(A).shape({
        text: t(A).string.isRequired,
        cta1: t(A).string,
        cta1LinkFn: t(A).func,
        cta2: t(A).string,
        cta2LinkFn: t(A).func,
        basicDefault: t(A).any.isRequired
      })
    }).isRequired,
    value: t(A).any,
    onChange: t(A).func.isRequired,
    isSubOk: t(A).bool.isRequired,
    userId: t(A).string
  });
var ee = K,
  te = ((g = a("cW7yT")), (i = a("2q4iO")), a("1BBN9")),
  ne = (a("iMjBX"), (N = a("2xkva")), a("830oE"));
(te = a("1BBN9")), (E = a("iMjBX")), (Y = a("a5i9T")), (C = a("7i7LO"));
const re = [
  {
    id: "downloads",
    perms: te.PERMISSIONS.DOWNLOADS,
    name: (0, E.tr)("Downloads permission"),
    help_text: (0, E.tr)("This permission is required for the download buttons and the auto-download feature."),
    on_revoke: function () {
      C.default.remove("auto_dl2");
    }
  }
];
(0, Y.noIframes)() ||
  re.push({
    id: "iframe",
    perms: ne.FRAME_PERMS,
    permsContains: ne.FRAME_PERMS_CONTAINS,
    name: (0, E.tr)("iFrame permission"),
    help_html: (0, E.tr)("This permission is required in order to scroll the inner contents of $iframes$ or $framesets$.", null, [], {
      iframes: {
        content:
          '<a class="dim" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe">iframes</a>',
        example: "iframes"
      },
      framesets: {
        content:
          '<a class="dim" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset">framesets</a>',
        example: "framesets"
      }
    })
  });
(i = a("2q4iO")), (te = a("1BBN9"));
const oe = ({ tog: e, value: n, onChange: r }) =>
  t(i).createElement(
    "div",
    { className: "perm-row cb-row" },
    t(i).createElement(
      "label",
      null,
      t(i).createElement("input", {
        className: "cb-input",
        type: "checkbox",
        name: e.id,
        checked: n || !1,
        disabled: void 0 === n,
        onChange: (t) => {
          t.currentTarget.checked
            ? te
                .request(e.perms)
                .then((t) => {
                  t ? (R("notif-sav"), r(e.id, !0)) : R("notif-err");
                })
                .catch(L)
            : te
                .remove(e.perms)
                .then((t) => {
                  t ? (e.on_revoke && e.on_revoke(), R("notif-sav"), r(e.id, !1)) : R("notif-err");
                })
                .catch(L);
        }
      }),
      t(i).createElement("span", { className: "cb-text" }, e.name)
    ),
    e.help_text
      ? t(i).createElement("div", { className: "cb-help" }, e.help_text)
      : e.help_html
      ? t(i).createElement("div", { className: "cb-help", dangerouslySetInnerHTML: { __html: e.help_html } })
      : null
  );
oe.displayName = "ToggleElt";
var ae = oe;
const ie = () => {
  const [e, n] = (0, i.useState)({}),
    [r, o] = (0, i.useState)(!1),
    a = (e) => n((t) => ({ ...t, ...e }));
  (0, i.useEffect)(() => {
    re.map((e) => {
      te.contains(e.permsContains || e.perms)
        .then((t) => {
          a({ [e.id]: t });
        })
        .catch((e) => N.default.error(e));
    });
  }, []);
  const s = (e, t) => {
    a({ [e]: t });
  };
  return t(i).createElement(
    "div",
    { className: "container", id: "perm-settings-container" },
    t(i).createElement(
      "p",
      null,
      t(i).createElement(
        "a",
        {
          href: "",
          className: "perm-header dim",
          id: "perm-toggle",
          onClick: (e) => {
            e.preventDefault(), o(!r);
          }
        },
        t(i).createElement(
          "strong",
          null,
          (0, E.tr)("Permissions"),
          t(i).createElement("span", { className: t(g)("arrow", { "pe-7s-angle-down": !r, "pe-7s-angle-up": r }) })
        )
      )
    ),
    r &&
      t(i).createElement(
        "div",
        { id: "perm-content" },
        t(i).createElement(
          "p",
          null,
          (0, E.tr)(
            "Any optional permissions that were previously granted will appear checked here. You can revoke them at any time. If they are needed again in the future, they will be re-requested."
          )
        ),
        re.map((n) => t(i).createElement(ae, { key: n.id, tog: n, value: e[n.id], onChange: s }))
      )
  );
};
ie.displayName = "ToggleElts";
var se = ie;
const le = () => {
  const [e, n] = (0, i.useState)(null),
    [r, o] = (0, i.useState)({}),
    [a, s] = (0, i.useState)(null),
    c = (e) => n((t) => ({ ...t, ...e }));
  (0, i.useEffect)(() => {
    w.default.pageview(),
      _(!0),
      (0, E.updateHtml)(),
      x.update(),
      Array.prototype.slice.call(document.querySelectorAll("a[data-href]")).forEach((e) => {
        e.href = e.dataset.href;
      }),
      ((0, l.$)("version-num").innerText = (0, O.getVersion)());
    const e = (0, y.makeLoginUrl)();
    l.$.findClass("account-url").forEach((t) => {
      t.setAttribute("href", e), (t.style.display = "");
    }),
      b.default.loginStateProm(!0).then((e) => {
        s(e);
      }),
      C.default.onUpdate((e) => {
        const t = {};
        e.forEach((e) => {
          t[e] = C.default.state[e];
        }),
          c(t);
      }),
      C.default.load().then((e) => {
        n(e);
      });
  }, []);
  const u = (e, t) => {
    const n = C.default.getField(e);
    let a = "";
    var i;
    n.process && ({ val: t, msg: a } = n.process(t)), a && r[e] !== a && ((i = { [e]: a }), o((e) => ({ ...e, ...i })));
    (n.validate || S.PromiseTrue)(t)
      .then((n) =>
        n
          ? (c({ [e]: t }),
            C.default.set(e, t).then(() => {
              R("notif-sav");
            }))
          : void 0
      )
      .catch((e) => {
        L(e);
      });
  };
  if (!e) return t(i).createElement("div", { className: "container", id: "settings-container" }, (0, E.tr)("loading…"));
  const d = (a && a.userId) || null,
    m = !!a && "sub-ok" === a.subState,
    p = (a && a.store && a.store.show_experimental) || !1,
    h = T(
      Object.entries(C.default.fields)
        .map(([t, n]) => ((0, v.isFieldHidden)(n, m, e) ? null : { ...n, name: t }))
        .filter((e) => e),
      "group"
    );
  return t(i).createElement(
    t(i).Fragment,
    null,
    t(i).createElement(
      "div",
      { className: "container", id: "settings-container" },
      h.map(({ key: n, vals: r }, o) =>
        t(i).createElement(
          "div",
          { key: n, className: "options-group" },
          t(i).createElement("h3", null, n),
          t(i).createElement(
            "div",
            { className: t(g)("options-list", { last: o === h.length - 1 }) },
            r.map((n) =>
              n.experimental && !p
                ? null
                : t(i).createElement(ee, { key: n.name, field: n, value: e[n.name], onChange: u, userId: d, isSubOk: m })
            )
          )
        )
      )
    ),
    t(i).createElement(se, null)
  );
};
le.displayName = "App";
var ce = le;
!(function () {
  const e = u(),
    t = e.editor || e.capture || e.history;
  t &&
    l.$.findClass("back-button").forEach((e) => {
      -1 === e.getAttribute("href").indexOf("?") && (e.removeAttribute("data-href"), (e.href = t));
    }),
    d((0, l.$)("btn-settings"), e.options),
    d((0, l.$)("btn-history"), e.history);
})(),
  (0, s.render)(t(i).createElement(ce, null), document.getElementById("root"));
//# sourceMappingURL=options.7c180dc2.js.map
