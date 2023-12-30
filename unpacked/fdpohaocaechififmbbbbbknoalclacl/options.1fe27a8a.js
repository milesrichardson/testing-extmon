(() => {
  function e(e, t, r, n) {
    Object.defineProperty(e, t, { get: r, set: n, enumerable: !0, configurable: !0 });
  }
  function t(e) {
    return e && e.__esModule ? e.default : e;
  }
  var r =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    n = {},
    o = {},
    a = r.parcelRequire60cc;
  null == a &&
    (((a = function (e) {
      if (e in n) return n[e].exports;
      if (e in o) {
        var t = o[e];
        delete o[e];
        var r = { id: e, exports: {} };
        return (n[e] = r), t.call(r.exports, r, r.exports), r.exports;
      }
      var a = new Error("Cannot find module '" + e + "'");
      throw ((a.code = "MODULE_NOT_FOUND"), a);
    }).register = function (e, t) {
      o[e] = t;
    }),
    (r.parcelRequire60cc = a)),
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
              var a = typeof o;
              if ("string" === a || "number" === a) e.push(o);
              else if (Array.isArray(o) && o.length) {
                var i = r.apply(null, o);
                i && e.push(i);
              } else if ("object" === a) for (var s in o) t.call(o, s) && o[s] && e.push(s);
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
    a.register("jQEAy", function (t, r) {
      e(t.exports, "ERROR_TYPE", () => s),
        e(t.exports, "getZoom", () => c),
        e(t.exports, "captureVisibleTab", () => u),
        e(t.exports, "isCaptureVisibleTabQuotaError", () => d),
        e(t.exports, "executeScript", () => m),
        e(t.exports, "isExecuteScriptChromeError", () => p),
        e(t.exports, "sendMessage", () => h),
        e(t.exports, "getCurrentTab", () => f),
        e(t.exports, "openInTabs", () => g);
      var n = a("8rN6d"),
        o = a("8bPtr"),
        i = a("3k2hL");
      const s = "ChromeTabsError",
        l = (0, i.genLastErrorFmt)(s),
        c = (e) =>
          new Promise((t, r) => {
            chrome.tabs.getZoom(e, (e) => {
              const n = chrome.runtime.lastError;
              return n ? r(l(n, "getZoom")) : t(e);
            });
          }),
        u = (e, t) =>
          new Promise((r, n) => {
            chrome.tabs.captureVisibleTab(e, t, (e) => {
              const t = chrome.runtime.lastError;
              return t ? n(l(t, "captureVisibleTab")) : r(e);
            });
          }),
        d = (e) =>
          e &&
          "object" == typeof e &&
          e.name === s &&
          "captureVisibleTab" === e.via &&
          e.message &&
          -1 !== e.message.indexOf("MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND"),
        m = (e, t) =>
          new Promise((r, n) => {
            chrome.tabs.executeScript(e, t, (e) => {
              const t = chrome.runtime.lastError;
              return t ? n(l(t, "executeScript")) : r(e);
            });
          }),
        p = (e) =>
          e &&
          "object" == typeof e &&
          e.name === s &&
          "executeScript" === e.via &&
          e.message &&
          (["Extension manifest must request permission", "The tab was closed.", "The frame was removed."].some(
            (t) => -1 !== e.message.indexOf(t)
          ) ||
            -1 !== e.message.indexOf('"chrome-error://')),
        h = (e, t, r) =>
          new Promise((n, o) => {
            chrome.tabs.sendMessage(e, t, r, (e) => {
              const t = chrome.runtime.lastError;
              return t ? o(l(t, "sendMessage")) : n(e);
            });
          }),
        f = () => {
          return ((e = { active: !0, currentWindow: !0 }),
          new Promise((t, r) => {
            chrome.tabs.query(e, (e) => {
              const n = chrome.runtime.lastError;
              return n ? r(l(n, "query")) : t(e);
            });
          })).then((e) => e[0]);
          var e;
        },
        g =
          ((v = (0, n.default)(function (e, t) {
            var r, n, a;
            return (0, o.__generator)(this, function (o) {
              return (
                (r = void 0),
                (n = t.length),
                [
                  2,
                  (a = (o) => {
                    if (o >= t.length) return t;
                    let i = t[o],
                      s = o === n - 1;
                    return e.incognito && 0 === o
                      ? ((c = { url: i, incognito: !1, focused: s }),
                        new Promise((e, t) => {
                          chrome.windows.create(c, (r) => {
                            const n = chrome.runtime.lastError;
                            return n ? t(l(n, "windowsCreate")) : e(r);
                          });
                        })).then((e) => ((r = e.id), a(o + 1)))
                      : ((e) =>
                          new Promise((t, r) => {
                            chrome.tabs.create(e, (e) => {
                              const n = chrome.runtime.lastError;
                              return n ? r(l(n, "create")) : t(e);
                            });
                          }))({ url: i, active: s, windowId: r, openerTabId: e.id, index: (e.incognito ? 0 : e.index) + 1 + o }).then((e) =>
                          a(o + 1)
                        );
                    var c;
                  })(0)
                ]
              );
            });
          })),
          function (e, t) {
            return v.apply(this, arguments);
          });
      var v;
    });
  var i = a("7b0kr"),
    s = a("iiDPj"),
    l = a("nKr4g"),
    c = a("kOtTY");
  const u = () => {
      const e = (0, c.getQueryString)(),
        t = e.id || e.oid,
        r = e.e,
        n = e.url;
      return { options: h(t, r, n), history: f(t, r, n), capture: t ? m(t, n) : void 0, editor: t && r ? p(t, r, n) : void 0 };
    },
    d = (e, t, r) => {
      let n = void 0 !== r && r;
      if (e) {
        -1 === e.href.indexOf("?") && ((e.href = t), n && e.setAttribute("style", ""));
      }
    },
    m = (e, t) => {
      let r = void 0 === t ? null : t;
      const n = { id: e };
      r && (n.url = r);
      return "/capture.html" + ("?" + (0, c.toQueryString)(n));
    },
    p = (e, t, r) => {
      let n = void 0 === r ? null : r;
      const o = { id: e, e: t };
      n && (o.url = n);
      return "/editor.html" + ("?" + (0, c.toQueryString)(o));
    },
    h = (e, t, r) => {
      let n = void 0 === e ? null : e,
        o = void 0 === t ? null : t,
        a = void 0 === r ? null : r,
        i = "";
      if (n) {
        const e = { id: n };
        o && (e.e = o), a && (e.url = a), (i = "?" + (0, c.toQueryString)(e));
      }
      return "/options.html" + i;
    },
    f = (e, t, r) => {
      let n = void 0 === e ? null : e,
        o = void 0 === t ? null : t,
        a = void 0 === r ? null : r,
        i = "";
      if (n) {
        const e = { oid: n };
        o && (e.e = o), a && (e.url = a), (i = "?" + (0, c.toQueryString)(e));
      }
      return "/capture.html" + i;
    };
  var g = a("jBCXK"),
    v = a("hGGFE"),
    b = a("ff4Ef"),
    y = a("gwJFa"),
    E = ((i = a("7b0kr")), a("fiP9V")),
    w = a("dChev"),
    x = a("crHLg"),
    k = (a("nKr4g"), a("5Xemj"));
  var C = a("ceb36"),
    _ = a("h1Khz"),
    S = a("8ioZ3");
  let N = null;
  const T = (e) => {
    let t = void 0 !== e && e;
    if (null === N) {
      const e = document.createElement("a");
      (e.style.cssText = "position: sticky;"), (N = -1 !== e.style.position.indexOf("sticky"));
    }
    return N && t && document.documentElement.classList.add("csspositionsticky"), N;
  };
  var O = a("2brSn"),
    R = a("1I2HB"),
    z = a("8rN6d"),
    F = a("8bPtr"),
    L = ((l = a("nKr4g")), a("2z2pA"));
  (_ = a("h1Khz")), (c = a("kOtTY"));
  const H = (e, t) => {
      let r,
        n,
        o = [];
      return (
        e.forEach((e) => {
          e[t] !== n && (void 0 !== r && o.push(r), (n = e[t]), (r = { key: n, vals: [] })), r.vals.push(e);
        }),
        r && r.vals.length && o.push(r),
        o
      );
    },
    M = (e) => {
      window.clearTimeout(M.timeoutId),
        (0, c.asArray)(document.querySelectorAll(".notif")).forEach((e) => e.classList.add("hide")),
        (0, l.$)(e).classList.remove("hide"),
        (M.timeoutId = window.setTimeout(() => (0, l.$)(e).classList.add("hide"), 2e3));
    };
  M.timeoutId = null;
  const A =
    ((P = (0, z.default)(function (e) {
      var t, r, n;
      return (0, F.__generator)(this, function (o) {
        switch (o.label) {
          case 0:
            return L.default.error("options error", e), [4, _.update(e)];
          case 1:
            return (
              o.sent(),
              (t = j("div", { className: "error", textContent: "An error was encountered!  " })),
              (r = (0, c.reportLink)(window.location.href, (0, c.errorToString)(e))),
              (n = j("a", { className: "underline", target: "_blank", rel: "noopener noreferrer", href: r, textContent: "Report issue" })),
              t.appendChild(n),
              I(),
              document.body.appendChild(t),
              window.scrollTo(0, 0),
              [2]
            );
        }
      });
    })),
    function (e) {
      return P.apply(this, arguments);
    });
  var P;
  const I = () => {
      (0, c.asArray)(document.querySelectorAll("body > .error")).forEach((e) => {
        e.parentNode.removeChild(e);
      });
    },
    j = (e, t) => {
      let r = document.createElement(e);
      return t && t.style && (Object.assign(r.style, t.style), delete t.style), Object.assign(r, t), r;
    },
    q = (e) => {
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
  (g = a("jBCXK")), (v = a("hGGFE")), (b = a("ff4Ef")), (y = a("gwJFa"));
  var D = a("3pr9z");
  i = a("7b0kr");
  function $() {
    return (
      ($ =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      $.apply(this, arguments)
    );
  }
  function U(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = {},
      a = Object.keys(e);
    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
    return o;
  }
  function K(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  i = a("7b0kr");
  a("3pr9z");
  var V = !!document.documentElement.currentStyle,
    B = {
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
    X = [
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
    Q = {},
    G = document.createElement("textarea"),
    W = function (e) {
      Object.keys(B).forEach(function (t) {
        e.style.setProperty(t, B[t], "important");
      });
    };
  function Z(e, t, r, n, o) {
    void 0 === r && (r = !1), void 0 === n && (n = null), void 0 === o && (o = null), null === G.parentNode && document.body.appendChild(G);
    var a = (function (e, t, r) {
      void 0 === r && (r = !1);
      if (r && Q[t]) return Q[t];
      var n = window.getComputedStyle(e);
      if (null === n) return null;
      var o = X.reduce(function (e, t) {
          return (e[t] = n.getPropertyValue(t)), e;
        }, {}),
        a = o["box-sizing"];
      if ("" === a) return null;
      V &&
        "border-box" === a &&
        (o.width =
          parseFloat(o.width) +
          parseFloat(n["border-right-width"]) +
          parseFloat(n["border-left-width"]) +
          parseFloat(n["padding-right"]) +
          parseFloat(n["padding-left"]) +
          "px");
      var i = parseFloat(o["padding-bottom"]) + parseFloat(o["padding-top"]),
        s = parseFloat(o["border-bottom-width"]) + parseFloat(o["border-top-width"]),
        l = { sizingStyle: o, paddingSize: i, borderSize: s, boxSizing: a };
      r && (Q[t] = l);
      return l;
    })(e, t, r);
    if (null === a) return null;
    var i = a.paddingSize,
      s = a.borderSize,
      l = a.boxSizing,
      c = a.sizingStyle;
    Object.keys(c).forEach(function (e) {
      G.style[e] = c[e];
    }),
      W(G),
      (G.value = e.value || e.placeholder || "x");
    var u = -1 / 0,
      d = 1 / 0,
      m = G.scrollHeight;
    "border-box" === l ? (m += s) : "content-box" === l && (m -= i), (G.value = "x");
    var p = G.scrollHeight - i,
      h = Math.floor(m / p);
    return (
      null !== n && ((u = p * n), "border-box" === l && (u = u + i + s), (m = Math.max(u, m))),
      null !== o && ((d = p * o), "border-box" === l && (d = d + i + s), (m = Math.min(d, m))),
      { height: m, minHeight: u, maxHeight: d, rowCount: Math.floor(m / p), valueRowCount: h }
    );
  }
  G.setAttribute("tab-index", "-1"), G.setAttribute("aria-hidden", "true"), W(G);
  var J = function () {},
    Y = 0,
    ee = (function (e) {
      var t, r;
      function n(t) {
        var r;
        return (
          ((r = e.call(this, t) || this)._onRef = function (e) {
            r._ref = e;
            var t = r.props.inputRef;
            "function" != typeof t ? (t.current = e) : t(e);
          }),
          (r._onChange = function (e) {
            r._controlled || r._resizeComponent(), r.props.onChange(e, K(r));
          }),
          (r._resizeComponent = function (e) {
            void 0 === e && (e = J);
            var t = Z(r._ref, r._uid, r.props.useCacheForDOMMeasurements, r.props.minRows, r.props.maxRows);
            if (null !== t) {
              var n = t.height,
                o = t.minHeight,
                a = t.maxHeight,
                i = t.rowCount,
                s = t.valueRowCount;
              (r.rowCount = i),
                (r.valueRowCount = s),
                r.state.height === n && r.state.minHeight === o && r.state.maxHeight === a
                  ? e()
                  : r.setState({ height: n, minHeight: o, maxHeight: a }, e);
            } else e();
          }),
          (r.state = { height: (t.style && t.style.height) || 0, minHeight: -1 / 0, maxHeight: 1 / 0 }),
          (r._uid = Y++),
          (r._controlled = void 0 !== t.value),
          (r._resizeLock = !1),
          r
        );
      }
      (r = e), ((t = n).prototype = Object.create(r.prototype)), (t.prototype.constructor = t), (t.__proto__ = r);
      var o = n.prototype;
      return (
        (o.render = function () {
          var e = this.props,
            t =
              (e.inputRef,
              e.maxRows,
              e.minRows,
              e.onHeightChange,
              e.useCacheForDOMMeasurements,
              U(e, ["inputRef", "maxRows", "minRows", "onHeightChange", "useCacheForDOMMeasurements"]));
          return (
            (t.style = $({}, t.style, { height: this.state.height })),
            Math.max(t.style.maxHeight || 1 / 0, this.state.maxHeight) < this.state.height && (t.style.overflow = "hidden"),
            (0, i.createElement)("textarea", $({}, t, { onChange: this._onChange, ref: this._onRef }))
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
          window.removeEventListener("resize", this._resizeListener), (e = this._uid), delete Q[e];
        }),
        n
      );
    })(i.Component);
  ee.defaultProps = { inputRef: J, onChange: J, onHeightChange: J, useCacheForDOMMeasurements: !1 };
  var te = ee,
    re = ((g = a("jBCXK")), (i = a("7b0kr")), a("5Gpcw"));
  const ne = (e) => {
    let r = e.text,
      n = e.cta1,
      o = e.cta1LinkFn,
      a = e.cta2,
      s = e.cta2LinkFn,
      l = e.isShow,
      c = e.setShow,
      u = e.setHide,
      d = e.userId;
    const m = "premium-cta",
      p = l ? { onClick: u } : { onMouseEnter: c, onClick: c, onFocus: c };
    return (
      (0, i.useEffect)(() => {
        let e, t;
        return (
          l &&
            ((e = (e) => {
              !!e.target.closest(`.${m}`) || u();
            }),
            (t = (e) => {
              27 === e.keyCode && u();
            }),
            document.documentElement.addEventListener("click", e, !1),
            document.documentElement.addEventListener("keyup", t, !1)),
          () => {
            e && document.documentElement.removeEventListener("click", e, !1),
              t && document.documentElement.removeEventListener("keyup", t, !1);
          }
        );
      }, [l, u]),
      t(i).createElement(
        "span",
        { className: m },
        t(i).createElement("span", (0, g.default)({ tabIndex: "0", className: "premium-cta--icon" }, p), "?"),
        l &&
          t(i).createElement(
            "span",
            { className: "premium-cta--tooltip" },
            r,
            !1,
            n &&
              o &&
              t(i).createElement(
                t(i).Fragment,
                null,
                t(i).createElement("br", null),
                t(i).createElement("a", { href: o() }, n),
                !d && a && s && t(i).createElement(t(i).Fragment, null, " or ", t(i).createElement("a", { href: s() }, a))
              )
          )
      )
    );
  };
  ne.displayName = "PremiumCta";
  var oe = ne;
  const ae = (e) => {
    let r = e.field,
      n = e.value,
      o = e.onChange,
      a = e.isSubOk,
      s = e.userId;
    const l = r.premiumInfo,
      c = !a && !!l;
    c && (n = l.basicDefault);
    const u = (0, b.default)((0, i.useState)(!1), 2),
      d = u[0],
      m = u[1],
      p = () => m(!0),
      h = (e) => {
        const t = e.currentTarget,
          r = t.name;
        if (c) p();
        else {
          const e = q(t);
          o(r, e);
        }
      };
    let f;
    switch (r.type) {
      case "bool":
        f = t(i).createElement(
          "div",
          { className: "options-ctrl" },
          t(i).createElement(
            "label",
            null,
            t(i).createElement("input", { className: "options-input", type: "checkbox", name: r.name, checked: n, onChange: h }),
            t(i).createElement("span", { className: "label-text" }, r.label)
          )
        );
        break;
      case "text":
        f = t(i).createElement(
          "div",
          { className: "options-ctrl flex-wrapper" },
          t(i).createElement("label", null, r.label),
          "textarea" === r.width
            ? t(i).createElement(te, { className: "options-input", name: r.name, style: { resize: "none" }, value: n, onChange: h })
            : t(i).createElement("input", {
                className: "options-input",
                type: "text",
                name: r.name,
                value: n,
                onChange: h,
                disabled: r.disabled
              })
        );
        break;
      case "choice":
        f = t(i).createElement(
          "div",
          { className: "options-ctrl flex-wrapper" },
          t(i).createElement("label", null, r.label),
          t(i).createElement(
            "select",
            { className: "options-input", name: r.name, value: n, onChange: h },
            r.convertedChoices.map((e) => t(i).createElement("option", { key: e.key, value: e.key }, e.display || e.key))
          )
        );
        break;
      default:
        throw new Error(`unsupported type! ${r.type}`);
    }
    const E = t(i).createElement(
      "span",
      { className: "help" },
      r.help && "function" == typeof r.help ? r.help(n) : r.help || "",
      c &&
        t(i).createElement(
          t(i).Fragment,
          null,
          " ",
          t(i).createElement(oe, (0, v.default)((0, g.default)({}, l), { isShow: d, setShow: p, setHide: () => m(!1), userId: s }))
        ),
      t(i).createElement("span", { className: "msg" })
    );
    return t(i).createElement("div", { className: t(y)("options-elt", `type-${r.type}`) }, f, E);
  };
  (ae.displayName = "OptionField"),
    (ae.propTypes = {
      field: t(D).shape({
        name: t(D).string.isRequired,
        type: t(D).oneOf(["choice", "bool", "text"]),
        group: t(D).string.isRequired,
        default: t(D).any,
        label: t(D).string.isRequired,
        help: t(D).string,
        validate: t(D).func,
        hidden: t(D).bool,
        premiumInfo: t(D).shape({
          text: t(D).string.isRequired,
          cta1: t(D).string,
          cta1LinkFn: t(D).func,
          cta2: t(D).string,
          cta2LinkFn: t(D).func,
          basicDefault: t(D).any.isRequired
        })
      }).isRequired,
      value: t(D).any,
      onChange: t(D).func.isRequired,
      isSubOk: t(D).bool.isRequired,
      userId: t(D).string
    });
  var ie = ae,
    se = ((g = a("jBCXK")), (b = a("ff4Ef")), (y = a("gwJFa")), (i = a("7b0kr")), a("95ETH")),
    le = (a("5Xemj"), (L = a("2z2pA")), a("eW2D8"));
  (se = a("95ETH")), (k = a("5Xemj")), (re = a("5Gpcw")), (S = a("8ioZ3"));
  const ce = [
    {
      id: "downloads",
      perms: se.PERMISSIONS.DOWNLOADS,
      name: (0, k.tr)("Downloads permission"),
      help_text: (0, k.tr)("This permission is required for the download buttons and the auto-download feature."),
      on_revoke: function () {
        S.default.remove("auto_dl2");
      }
    }
  ];
  (0, re.noIframes)() ||
    ce.push({
      id: "iframe",
      perms: le.FRAME_PERMS,
      permsContains: le.FRAME_PERMS_CONTAINS,
      name: (0, k.tr)("iFrame permission"),
      help_html: (0, k.tr)("This permission is required in order to scroll the inner contents of $iframes$ or $framesets$.", null, [], {
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
  (i = a("7b0kr")), (se = a("95ETH"));
  const ue = (e) => {
    let r = e.tog,
      n = e.value,
      o = e.onChange;
    return t(i).createElement(
      "div",
      { className: "perm-row cb-row" },
      t(i).createElement(
        "label",
        null,
        t(i).createElement("input", {
          className: "cb-input",
          type: "checkbox",
          name: r.id,
          checked: n || !1,
          disabled: void 0 === n,
          onChange: (e) => {
            e.currentTarget.checked
              ? se
                  .request(r.perms)
                  .then((e) => {
                    e ? (M("notif-sav"), o(r.id, !0)) : M("notif-err");
                  })
                  .catch(A)
              : se
                  .remove(r.perms)
                  .then((e) => {
                    e ? (r.on_revoke && r.on_revoke(), M("notif-sav"), o(r.id, !1)) : M("notif-err");
                  })
                  .catch(A);
          }
        }),
        t(i).createElement("span", { className: "cb-text" }, r.name)
      ),
      r.help_text
        ? t(i).createElement("div", { className: "cb-help" }, r.help_text)
        : r.help_html
        ? t(i).createElement("div", { className: "cb-help", dangerouslySetInnerHTML: { __html: r.help_html } })
        : null
    );
  };
  ue.displayName = "ToggleElt";
  var de = ue;
  const me = () => {
    const e = (0, b.default)((0, i.useState)({}), 2),
      r = e[0],
      n = e[1],
      o = (0, b.default)((0, i.useState)(!1), 2),
      a = o[0],
      s = o[1],
      l = (e) => n((t) => (0, g.default)({}, t, e));
    (0, i.useEffect)(() => {
      ce.map((e) => {
        se.contains(e.permsContains || e.perms)
          .then((t) => {
            l({ [e.id]: t });
          })
          .catch((e) => L.default.error(e));
      });
    }, []);
    const c = (e, t) => {
      l({ [e]: t });
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
              e.preventDefault(), s(!a);
            }
          },
          t(i).createElement(
            "strong",
            null,
            (0, k.tr)("Permissions"),
            t(i).createElement("span", { className: t(y)("arrow", { "pe-7s-angle-down": !a, "pe-7s-angle-up": a }) })
          )
        )
      ),
      a &&
        t(i).createElement(
          "div",
          { id: "perm-content" },
          t(i).createElement(
            "p",
            null,
            (0, k.tr)(
              "Any optional permissions that were previously granted will appear checked here. You can revoke them at any time. If they are needed again in the future, they will be re-requested."
            )
          ),
          ce.map((e) => t(i).createElement(de, { key: e.id, tog: e, value: r[e.id], onChange: c }))
        )
    );
  };
  me.displayName = "ToggleElts";
  var pe = me;
  const he = () => {
    const e = (0, b.default)((0, i.useState)(null), 2),
      r = e[0],
      n = e[1],
      o = (0, b.default)((0, i.useState)({}), 2),
      a = o[0],
      s = o[1],
      c = (0, b.default)((0, i.useState)(null), 2),
      u = c[0],
      d = c[1],
      m = (e) => n((t) => (0, g.default)({}, t, e));
    (0, i.useEffect)(() => {
      C.default.pageview(),
        T(!0),
        (0, k.updateHtml)(),
        _.update(),
        Array.prototype.slice.call(document.querySelectorAll("a[data-href]")).forEach((e) => {
          e.href = e.dataset.href;
        }),
        ((0, l.$)("version-num").innerText = (0, R.getVersion)());
      const e = (0, x.makeLoginUrl)();
      l.$.findClass("account-url").forEach((t) => {
        t.setAttribute("href", e), (t.style.display = "");
      }),
        w.default.loginStateProm(!0).then((e) => {
          d(e);
        }),
        S.default.onUpdate((e) => {
          const t = {};
          e.forEach((e) => {
            t[e] = S.default.state[e];
          }),
            m(t);
        }),
        S.default.load().then((e) => {
          n(e);
        });
    }, []);
    const p = (e, t) => {
      const r = S.default.getField(e);
      let n = "";
      var o, i;
      r.process && ((o = r.process(t)), (t = o.val), (n = o.msg)),
        n && a[e] !== n && ((i = { [e]: n }), s((e) => (0, g.default)({}, e, i)));
      (r.validate || O.PromiseTrue)(t)
        .then((r) =>
          r
            ? (m({ [e]: t }),
              S.default.set(e, t).then(() => {
                M("notif-sav");
              }))
            : void 0
        )
        .catch((e) => {
          A(e);
        });
    };
    if (!r) return t(i).createElement("div", { className: "container", id: "settings-container" }, (0, k.tr)("loading…"));
    const h = (u && u.userId) || null,
      f = !!u && "sub-ok" === u.subState,
      N = (u && u.store && u.store.show_experimental) || !1,
      z = H(
        Object.entries(S.default.fields)
          .map((e) => {
            let t = (0, b.default)(e, 2),
              n = t[0],
              o = t[1];
            return (0, E.isFieldHidden)(o, f, r) ? null : (0, v.default)((0, g.default)({}, o), { name: n });
          })
          .filter((e) => e),
        "group"
      );
    return t(i).createElement(
      t(i).Fragment,
      null,
      t(i).createElement(
        "div",
        { className: "container", id: "settings-container" },
        z.map((e, n) => {
          let o = e.key,
            a = e.vals;
          return t(i).createElement(
            "div",
            { key: o, className: "options-group" },
            t(i).createElement("h3", null, o),
            t(i).createElement(
              "div",
              { className: t(y)("options-list", { last: n === z.length - 1 }) },
              a.map((e) =>
                e.experimental && !N
                  ? null
                  : t(i).createElement(ie, { key: e.name, field: e, value: r[e.name], onChange: p, userId: h, isSubOk: f })
              )
            )
          );
        })
      ),
      t(i).createElement(pe, null)
    );
  };
  he.displayName = "App";
  var fe = he;
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
    (0, s.render)(t(i).createElement(fe, null), document.getElementById("root"));
})();
//# sourceMappingURL=options.1fe27a8a.js.map
